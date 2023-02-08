(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}})();function hl(e,t){const o=Object.create(null),a=e.split(",");for(let i=0;i<a.length;i++)o[a[i]]=!0;return t?i=>!!o[i.toLowerCase()]:i=>!!o[i]}const am="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",im=hl(am);function yp(e){return!!e||e===""}function ae(e){if(cn(e)){const t={};for(let o=0;o<e.length;o++){const a=e[o],i=Kn(a)?cm(a):ae(a);if(i)for(const l in i)t[l]=i[l]}return t}else{if(Kn(e))return e;if(Qn(e))return e}}const lm=/;(?![^(]*\))/g,rm=/:(.+)/;function cm(e){const t={};return e.split(lm).forEach(o=>{if(o){const a=o.split(rm);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Wn(e){let t="";if(Kn(e))t=e;else if(cn(e))for(let o=0;o<e.length;o++){const a=Wn(e[o]);a&&(t+=a+" ")}else if(Qn(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}function T(e){if(!e)return null;let{class:t,style:o}=e;return t&&!Kn(t)&&(e.class=Wn(t)),o&&(e.style=ae(o)),e}const Ee=e=>Kn(e)?e:e==null?"":cn(e)||Qn(e)&&(e.toString===wp||!hn(e.toString))?JSON.stringify(e,bp,2):String(e),bp=(e,t)=>t&&t.__v_isRef?bp(e,t.value):ms(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[a,i])=>(o[`${a} =>`]=i,o),{})}:xp(t)?{[`Set(${t.size})`]:[...t.values()]}:Qn(t)&&!cn(t)&&!zp(t)?String(t):t,Fn={},ds=[],De=()=>{},pm=()=>!1,um=/^on[^a-z]/,$a=e=>um.test(e),gl=e=>e.startsWith("onUpdate:"),ue=Object.assign,fl=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},dm=Object.prototype.hasOwnProperty,Sn=(e,t)=>dm.call(e,t),cn=Array.isArray,ms=e=>Ca(e)==="[object Map]",xp=e=>Ca(e)==="[object Set]",hn=e=>typeof e=="function",Kn=e=>typeof e=="string",_l=e=>typeof e=="symbol",Qn=e=>e!==null&&typeof e=="object",Sp=e=>Qn(e)&&hn(e.then)&&hn(e.catch),wp=Object.prototype.toString,Ca=e=>wp.call(e),mm=e=>Ca(e).slice(8,-1),zp=e=>Ca(e)==="[object Object]",vl=e=>Kn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,sa=hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},hm=/-(\w)/g,Ze=Ia(e=>e.replace(hm,(t,o)=>o?o.toUpperCase():"")),gm=/\B([A-Z])/g,Zt=Ia(e=>e.replace(gm,"-$1").toLowerCase()),Ta=Ia(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ya=Ia(e=>e?`on${Ta(e)}`:""),go=(e,t)=>!Object.is(e,t),hs=(e,t)=>{for(let o=0;o<e.length;o++)e[o](t)},da=(e,t,o)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:o})},bi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let cr;const fm=()=>cr||(cr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ye;class $p{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ye&&(this.parent=ye,this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}run(t){if(this.active){const o=ye;try{return ye=this,t()}finally{ye=o}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this.active){let o,a;for(o=0,a=this.effects.length;o<a;o++)this.effects[o].stop();for(o=0,a=this.cleanups.length;o<a;o++)this.cleanups[o]();if(this.scopes)for(o=0,a=this.scopes.length;o<a;o++)this.scopes[o].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function _m(e){return new $p(e)}function vm(e,t=ye){t&&t.active&&t.effects.push(e)}function kl(){return ye}function yl(e){ye&&ye.cleanups.push(e)}const bl=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Cp=e=>(e.w&St)>0,Ip=e=>(e.n&St)>0,km=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=St},ym=e=>{const{deps:t}=e;if(t.length){let o=0;for(let a=0;a<t.length;a++){const i=t[a];Cp(i)&&!Ip(i)?i.delete(e):t[o++]=i,i.w&=~St,i.n&=~St}t.length=o}},xi=new WeakMap;let Zs=0,St=1;const Si=30;let Re;const qt=Symbol(""),wi=Symbol("");class xl{constructor(t,o=null,a){this.fn=t,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,vm(this,a)}run(){if(!this.active)return this.fn();let t=Re,o=vt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Re,Re=this,vt=!0,St=1<<++Zs,Zs<=Si?km(this):pr(this),this.fn()}finally{Zs<=Si&&ym(this),St=1<<--Zs,Re=this.parent,vt=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Re===this?this.deferStop=!0:this.active&&(pr(this),this.onStop&&this.onStop(),this.active=!1)}}function pr(e){const{deps:t}=e;if(t.length){for(let o=0;o<t.length;o++)t[o].delete(e);t.length=0}}let vt=!0;const Tp=[];function Ss(){Tp.push(vt),vt=!1}function ws(){const e=Tp.pop();vt=e===void 0?!0:e}function $e(e,t,o){if(vt&&Re){let a=xi.get(e);a||xi.set(e,a=new Map);let i=a.get(o);i||a.set(o,i=bl()),Ep(i)}}function Ep(e,t){let o=!1;Zs<=Si?Ip(e)||(e.n|=St,o=!Cp(e)):o=!e.has(Re),o&&(e.add(Re),Re.deps.push(e))}function lt(e,t,o,a,i,l){const r=xi.get(e);if(!r)return;let c=[];if(t==="clear")c=[...r.values()];else if(o==="length"&&cn(e))r.forEach((p,u)=>{(u==="length"||u>=a)&&c.push(p)});else switch(o!==void 0&&c.push(r.get(o)),t){case"add":cn(e)?vl(o)&&c.push(r.get("length")):(c.push(r.get(qt)),ms(e)&&c.push(r.get(wi)));break;case"delete":cn(e)||(c.push(r.get(qt)),ms(e)&&c.push(r.get(wi)));break;case"set":ms(e)&&c.push(r.get(qt));break}if(c.length===1)c[0]&&zi(c[0]);else{const p=[];for(const u of c)u&&p.push(...u);zi(bl(p))}}function zi(e,t){const o=cn(e)?e:[...e];for(const a of o)a.computed&&ur(a);for(const a of o)a.computed||ur(a)}function ur(e,t){(e!==Re||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const bm=hl("__proto__,__v_isRef,__isVue"),Mp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_l)),xm=Sl(),Sm=Sl(!1,!0),wm=Sl(!0),dr=zm();function zm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...o){const a=In(this);for(let l=0,r=this.length;l<r;l++)$e(a,"get",l+"");const i=a[t](...o);return i===-1||i===!1?a[t](...o.map(In)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...o){Ss();const a=In(this)[t].apply(this,o);return ws(),a}}),e}function Sl(e=!1,t=!1){return function(a,i,l){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&l===(e?t?jm:Rp:t?Ap:Op).get(a))return a;const r=cn(a);if(!e&&r&&Sn(dr,i))return Reflect.get(dr,i,l);const c=Reflect.get(a,i,l);return(_l(i)?Mp.has(i):bm(i))||(e||$e(a,"get",i),t)?c:Tn(c)?r&&vl(i)?c:c.value:Qn(c)?e?ps(c):jn(c):c}}const $m=Lp(),Cm=Lp(!0);function Lp(e=!1){return function(o,a,i,l){let r=o[a];if(fo(r)&&Tn(r)&&!Tn(i))return!1;if(!e&&!fo(i)&&($i(i)||(i=In(i),r=In(r)),!cn(o)&&Tn(r)&&!Tn(i)))return r.value=i,!0;const c=cn(o)&&vl(a)?Number(a)<o.length:Sn(o,a),p=Reflect.set(o,a,i,l);return o===In(l)&&(c?go(i,r)&&lt(o,"set",a,i):lt(o,"add",a,i)),p}}function Im(e,t){const o=Sn(e,t);e[t];const a=Reflect.deleteProperty(e,t);return a&&o&&lt(e,"delete",t,void 0),a}function Tm(e,t){const o=Reflect.has(e,t);return(!_l(t)||!Mp.has(t))&&$e(e,"has",t),o}function Em(e){return $e(e,"iterate",cn(e)?"length":qt),Reflect.ownKeys(e)}const Pp={get:xm,set:$m,deleteProperty:Im,has:Tm,ownKeys:Em},Mm={get:wm,set(e,t){return!0},deleteProperty(e,t){return!0}},Lm=ue({},Pp,{get:Sm,set:Cm}),wl=e=>e,Ea=e=>Reflect.getPrototypeOf(e);function Uo(e,t,o=!1,a=!1){e=e.__v_raw;const i=In(e),l=In(t);o||(t!==l&&$e(i,"get",t),$e(i,"get",l));const{has:r}=Ea(i),c=a?wl:o?Cl:_o;if(r.call(i,t))return c(e.get(t));if(r.call(i,l))return c(e.get(l));e!==i&&e.get(t)}function Go(e,t=!1){const o=this.__v_raw,a=In(o),i=In(e);return t||(e!==i&&$e(a,"has",e),$e(a,"has",i)),e===i?o.has(e):o.has(e)||o.has(i)}function Yo(e,t=!1){return e=e.__v_raw,!t&&$e(In(e),"iterate",qt),Reflect.get(e,"size",e)}function mr(e){e=In(e);const t=In(this);return Ea(t).has.call(t,e)||(t.add(e),lt(t,"add",e,e)),this}function hr(e,t){t=In(t);const o=In(this),{has:a,get:i}=Ea(o);let l=a.call(o,e);l||(e=In(e),l=a.call(o,e));const r=i.call(o,e);return o.set(e,t),l?go(t,r)&&lt(o,"set",e,t):lt(o,"add",e,t),this}function gr(e){const t=In(this),{has:o,get:a}=Ea(t);let i=o.call(t,e);i||(e=In(e),i=o.call(t,e)),a&&a.call(t,e);const l=t.delete(e);return i&&lt(t,"delete",e,void 0),l}function fr(){const e=In(this),t=e.size!==0,o=e.clear();return t&&lt(e,"clear",void 0,void 0),o}function Qo(e,t){return function(a,i){const l=this,r=l.__v_raw,c=In(r),p=t?wl:e?Cl:_o;return!e&&$e(c,"iterate",qt),r.forEach((u,d)=>a.call(i,p(u),p(d),l))}}function Zo(e,t,o){return function(...a){const i=this.__v_raw,l=In(i),r=ms(l),c=e==="entries"||e===Symbol.iterator&&r,p=e==="keys"&&r,u=i[e](...a),d=o?wl:t?Cl:_o;return!t&&$e(l,"iterate",p?wi:qt),{next(){const{value:h,done:m}=u.next();return m?{value:h,done:m}:{value:c?[d(h[0]),d(h[1])]:d(h),done:m}},[Symbol.iterator](){return this}}}}function ut(e){return function(...t){return e==="delete"?!1:this}}function Pm(){const e={get(l){return Uo(this,l)},get size(){return Yo(this)},has:Go,add:mr,set:hr,delete:gr,clear:fr,forEach:Qo(!1,!1)},t={get(l){return Uo(this,l,!1,!0)},get size(){return Yo(this)},has:Go,add:mr,set:hr,delete:gr,clear:fr,forEach:Qo(!1,!0)},o={get(l){return Uo(this,l,!0)},get size(){return Yo(this,!0)},has(l){return Go.call(this,l,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:Qo(!0,!1)},a={get(l){return Uo(this,l,!0,!0)},get size(){return Yo(this,!0)},has(l){return Go.call(this,l,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:Qo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=Zo(l,!1,!1),o[l]=Zo(l,!0,!1),t[l]=Zo(l,!1,!0),a[l]=Zo(l,!0,!0)}),[e,o,t,a]}const[Om,Am,Rm,Fm]=Pm();function zl(e,t){const o=t?e?Fm:Rm:e?Am:Om;return(a,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?a:Reflect.get(Sn(o,i)&&i in a?o:a,i,l)}const Dm={get:zl(!1,!1)},Hm={get:zl(!1,!0)},Nm={get:zl(!0,!1)},Op=new WeakMap,Ap=new WeakMap,Rp=new WeakMap,jm=new WeakMap;function Bm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qm(e){return e.__v_skip||!Object.isExtensible(e)?0:Bm(mm(e))}function jn(e){return fo(e)?e:$l(e,!1,Pp,Dm,Op)}function Wm(e){return $l(e,!1,Lm,Hm,Ap)}function ps(e){return $l(e,!0,Mm,Nm,Rp)}function $l(e,t,o,a,i){if(!Qn(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=i.get(e);if(l)return l;const r=qm(e);if(r===0)return e;const c=new Proxy(e,r===2?a:o);return i.set(e,c),c}function gs(e){return fo(e)?gs(e.__v_raw):!!(e&&e.__v_isReactive)}function fo(e){return!!(e&&e.__v_isReadonly)}function $i(e){return!!(e&&e.__v_isShallow)}function Fp(e){return gs(e)||fo(e)}function In(e){const t=e&&e.__v_raw;return t?In(t):e}function Ma(e){return da(e,"__v_skip",!0),e}const _o=e=>Qn(e)?jn(e):e,Cl=e=>Qn(e)?ps(e):e;function Il(e){vt&&Re&&(e=In(e),Ep(e.dep||(e.dep=bl())))}function Tl(e,t){e=In(e),e.dep&&zi(e.dep)}function Tn(e){return!!(e&&e.__v_isRef===!0)}function Q(e){return Dp(e,!1)}function je(e){return Dp(e,!0)}function Dp(e,t){return Tn(e)?e:new Km(e,t)}class Km{constructor(t,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?t:In(t),this._value=o?t:_o(t)}get value(){return Il(this),this._value}set value(t){t=this.__v_isShallow?t:In(t),go(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:_o(t),Tl(this))}}function C(e){return Tn(e)?e.value:e}const Vm={get:(e,t,o)=>C(Reflect.get(e,t,o)),set:(e,t,o,a)=>{const i=e[t];return Tn(i)&&!Tn(o)?(i.value=o,!0):Reflect.set(e,t,o,a)}};function Hp(e){return gs(e)?e:new Proxy(e,Vm)}class Um{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:a}=t(()=>Il(this),()=>Tl(this));this._get=o,this._set=a}get value(){return this._get()}set value(t){this._set(t)}}function Gm(e){return new Um(e)}function Ym(e){const t=cn(e)?new Array(e.length):{};for(const o in e)t[o]=Zm(e,o);return t}class Qm{constructor(t,o,a){this._object=t,this._key=o,this._defaultValue=a,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Zm(e,t,o){const a=e[t];return Tn(a)?a:new Qm(e,t,o)}class Jm{constructor(t,o,a,i){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new xl(t,()=>{this._dirty||(this._dirty=!0,Tl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=a}get value(){const t=In(this);return Il(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Xm(e,t,o=!1){let a,i;const l=hn(e);return l?(a=e,i=De):(a=e.get,i=e.set),new Jm(a,i,l||!i,o)}function kt(e,t,o,a){let i;try{i=a?e(...a):e()}catch(l){La(l,t,o)}return i}function He(e,t,o,a){if(hn(e)){const l=kt(e,t,o,a);return l&&Sp(l)&&l.catch(r=>{La(r,t,o)}),l}const i=[];for(let l=0;l<e.length;l++)i.push(He(e[l],t,o,a));return i}function La(e,t,o,a=!0){const i=t?t.vnode:null;if(t){let l=t.parent;const r=t.proxy,c=o;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,r,c)===!1)return}l=l.parent}const p=t.appContext.config.errorHandler;if(p){kt(p,null,10,[e,r,c]);return}}nh(e,o,i,a)}function nh(e,t,o,a=!0){console.error(e)}let ma=!1,Ci=!1;const Se=[];let at=0;const no=[];let Js=null,is=0;const eo=[];let mt=null,ls=0;const Np=Promise.resolve();let El=null,Ii=null;function Xn(e){const t=El||Np;return e?t.then(this?e.bind(this):e):t}function eh(e){let t=at+1,o=Se.length;for(;t<o;){const a=t+o>>>1;vo(Se[a])<e?t=a+1:o=a}return t}function jp(e){(!Se.length||!Se.includes(e,ma&&e.allowRecurse?at+1:at))&&e!==Ii&&(e.id==null?Se.push(e):Se.splice(eh(e.id),0,e),Bp())}function Bp(){!ma&&!Ci&&(Ci=!0,El=Np.then(Kp))}function th(e){const t=Se.indexOf(e);t>at&&Se.splice(t,1)}function qp(e,t,o,a){cn(e)?o.push(...e):(!t||!t.includes(e,e.allowRecurse?a+1:a))&&o.push(e),Bp()}function sh(e){qp(e,Js,no,is)}function oh(e){qp(e,mt,eo,ls)}function Pa(e,t=null){if(no.length){for(Ii=t,Js=[...new Set(no)],no.length=0,is=0;is<Js.length;is++)Js[is]();Js=null,is=0,Ii=null,Pa(e,t)}}function Wp(e){if(Pa(),eo.length){const t=[...new Set(eo)];if(eo.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((o,a)=>vo(o)-vo(a)),ls=0;ls<mt.length;ls++)mt[ls]();mt=null,ls=0}}const vo=e=>e.id==null?1/0:e.id;function Kp(e){Ci=!1,ma=!0,Pa(e),Se.sort((o,a)=>vo(o)-vo(a));const t=De;try{for(at=0;at<Se.length;at++){const o=Se[at];o&&o.active!==!1&&kt(o,null,14)}}finally{at=0,Se.length=0,Wp(),ma=!1,El=null,(Se.length||no.length||eo.length)&&Kp(e)}}function ah(e,t,...o){if(e.isUnmounted)return;const a=e.vnode.props||Fn;let i=o;const l=t.startsWith("update:"),r=l&&t.slice(7);if(r&&r in a){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:h,trim:m}=a[d]||Fn;m&&(i=o.map(f=>f.trim())),h&&(i=o.map(bi))}let c,p=a[c=Ya(t)]||a[c=Ya(Ze(t))];!p&&l&&(p=a[c=Ya(Zt(t))]),p&&He(p,e,6,i);const u=a[c+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,He(u,e,6,i)}}function Vp(e,t,o=!1){const a=t.emitsCache,i=a.get(e);if(i!==void 0)return i;const l=e.emits;let r={},c=!1;if(!hn(e)){const p=u=>{const d=Vp(u,t,!0);d&&(c=!0,ue(r,d))};!o&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}return!l&&!c?(a.set(e,null),null):(cn(l)?l.forEach(p=>r[p]=null):ue(r,l),a.set(e,r),r)}function Oa(e,t){return!e||!$a(t)?!1:(t=t.slice(2).replace(/Once$/,""),Sn(e,t[0].toLowerCase()+t.slice(1))||Sn(e,Zt(t))||Sn(e,t))}let se=null,Aa=null;function ha(e){const t=se;return se=e,Aa=e&&e.type.__scopeId||null,t}function kn(e){Aa=e}function yn(){Aa=null}function g(e,t=se,o){if(!t||e._n)return e;const a=(...i)=>{a._d&&Ir(-1);const l=ha(t),r=e(...i);return ha(l),a._d&&Ir(1),r};return a._n=!0,a._c=!0,a._d=!0,a}function Qa(e){const{type:t,vnode:o,proxy:a,withProxy:i,props:l,propsOptions:[r],slots:c,attrs:p,emit:u,render:d,renderCache:h,data:m,setupState:f,ctx:_,inheritAttrs:w}=e;let S,O;const L=ha(e);try{if(o.shapeFlag&4){const A=i||a;S=Ue(d.call(A,A,h,l,f,m,_)),O=p}else{const A=t;S=Ue(A.length>1?A(l,{attrs:p,slots:c,emit:u}):A(l,null)),O=t.props?p:ih(p)}}catch(A){so.length=0,La(A,e,1),S=y(wt)}let M=S;if(O&&w!==!1){const A=Object.keys(O),{shapeFlag:K}=M;A.length&&K&7&&(r&&A.some(gl)&&(O=lh(O,r)),M=Yt(M,O))}return o.dirs&&(M=Yt(M),M.dirs=M.dirs?M.dirs.concat(o.dirs):o.dirs),o.transition&&(M.transition=o.transition),S=M,ha(L),S}const ih=e=>{let t;for(const o in e)(o==="class"||o==="style"||$a(o))&&((t||(t={}))[o]=e[o]);return t},lh=(e,t)=>{const o={};for(const a in e)(!gl(a)||!(a.slice(9)in t))&&(o[a]=e[a]);return o};function rh(e,t,o){const{props:a,children:i,component:l}=e,{props:r,children:c,patchFlag:p}=t,u=l.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&p>=0){if(p&1024)return!0;if(p&16)return a?_r(a,r,u):!!r;if(p&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const m=d[h];if(r[m]!==a[m]&&!Oa(u,m))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:a===r?!1:a?r?_r(a,r,u):!0:!!r;return!1}function _r(e,t,o){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let i=0;i<a.length;i++){const l=a[i];if(t[l]!==e[l]&&!Oa(o,l))return!0}return!1}function ch({vnode:e,parent:t},o){for(;t&&t.subTree===e;)(e=t.vnode).el=o,t=t.parent}const Up=e=>e.__isSuspense;function ph(e,t){t&&t.pendingBranch?cn(e)?t.effects.push(...e):t.effects.push(e):oh(e)}function xe(e,t){if(Zn){let o=Zn.provides;const a=Zn.parent&&Zn.parent.provides;a===o&&(o=Zn.provides=Object.create(a)),o[e]=t}}function x(e,t,o=!1){const a=Zn||se;if(a){const i=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return o&&hn(t)?t.call(a.proxy):t}}function To(e,t){return Ml(e,null,t)}const vr={};function gn(e,t,o){return Ml(e,t,o)}function Ml(e,t,{immediate:o,deep:a,flush:i,onTrack:l,onTrigger:r}=Fn){const c=Zn;let p,u=!1,d=!1;if(Tn(e)?(p=()=>e.value,u=$i(e)):gs(e)?(p=()=>e,a=!0):cn(e)?(d=!0,u=e.some(O=>gs(O)||$i(O)),p=()=>e.map(O=>{if(Tn(O))return O.value;if(gs(O))return Ht(O);if(hn(O))return kt(O,c,2)})):hn(e)?t?p=()=>kt(e,c,2):p=()=>{if(!(c&&c.isUnmounted))return h&&h(),He(e,c,3,[m])}:p=De,t&&a){const O=p;p=()=>Ht(O())}let h,m=O=>{h=S.onStop=()=>{kt(O,c,4)}};if(yo)return m=De,t?o&&He(t,c,3,[p(),d?[]:void 0,m]):p(),De;let f=d?[]:vr;const _=()=>{if(!!S.active)if(t){const O=S.run();(a||u||(d?O.some((L,M)=>go(L,f[M])):go(O,f)))&&(h&&h(),He(t,c,3,[O,f===vr?void 0:f,m]),f=O)}else S.run()};_.allowRecurse=!!t;let w;i==="sync"?w=_:i==="post"?w=()=>Jn(_,c&&c.suspense):w=()=>sh(_);const S=new xl(p,w);return t?o?_():f=S.run():i==="post"?Jn(S.run.bind(S),c&&c.suspense):S.run(),()=>{S.stop(),c&&c.scope&&fl(c.scope.effects,S)}}function uh(e,t,o){const a=this.proxy,i=Kn(e)?e.includes(".")?Gp(a,e):()=>a[e]:e.bind(a,a);let l;hn(t)?l=t:(l=t.handler,o=t);const r=Zn;ks(this);const c=Ml(i,l.bind(a),o);return r?ks(r):Wt(),c}function Gp(e,t){const o=t.split(".");return()=>{let a=e;for(let i=0;i<o.length&&a;i++)a=a[o[i]];return a}}function Ht(e,t){if(!Qn(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Tn(e))Ht(e.value,t);else if(cn(e))for(let o=0;o<e.length;o++)Ht(e[o],t);else if(xp(e)||ms(e))e.forEach(o=>{Ht(o,t)});else if(zp(e))for(const o in e)Ht(e[o],t);return e}function Yp(e,t){e.shapeFlag&6&&e.component?Yp(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function En(e){return hn(e)?{setup:e,name:e.name}:e}const fs=e=>!!e.type.__asyncLoader,Qp=e=>e.type.__isKeepAlive,dh={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const o=Jt(),a=o.ctx;if(!a.renderer)return()=>{const L=t.default&&t.default();return L&&L.length===1?L[0]:L};const i=new Map,l=new Set;let r=null;const c=o.suspense,{renderer:{p,m:u,um:d,o:{createElement:h}}}=a,m=h("div");a.activate=(L,M,A,K,q)=>{const Y=L.component;u(L,M,A,0,c),p(Y.vnode,L,M,A,Y,c,K,L.slotScopeIds,q),Jn(()=>{Y.isDeactivated=!1,Y.a&&hs(Y.a);const an=L.props&&L.props.onVnodeMounted;an&&Ie(an,Y.parent,L)},c)},a.deactivate=L=>{const M=L.component;u(L,m,null,1,c),Jn(()=>{M.da&&hs(M.da);const A=L.props&&L.props.onVnodeUnmounted;A&&Ie(A,M.parent,L),M.isDeactivated=!0},c)};function f(L){Za(L),d(L,o,c,!0)}function _(L){i.forEach((M,A)=>{const K=Ai(M.type);K&&(!L||!L(K))&&w(A)})}function w(L){const M=i.get(L);!r||M.type!==r.type?f(M):r&&Za(r),i.delete(L),l.delete(L)}gn(()=>[e.include,e.exclude],([L,M])=>{L&&_(A=>Xs(L,A)),M&&_(A=>!Xs(M,A))},{flush:"post",deep:!0});let S=null;const O=()=>{S!=null&&i.set(S,Ja(o.subTree))};return zs(O),nu(O),Fa(()=>{i.forEach(L=>{const{subTree:M,suspense:A}=o,K=Ja(M);if(L.type===K.type){Za(K);const q=K.component.da;q&&Jn(q,A);return}f(L)})}),()=>{if(S=null,!t.default)return null;const L=t.default(),M=L[0];if(L.length>1)return r=null,L;if(!Gt(M)||!(M.shapeFlag&4)&&!(M.shapeFlag&128))return r=null,M;let A=Ja(M);const K=A.type,q=Ai(fs(A)?A.type.__asyncResolved||{}:K),{include:Y,exclude:an,max:dn}=e;if(Y&&(!q||!Xs(Y,q))||an&&q&&Xs(an,q))return r=A,M;const bn=A.key==null?K:A.key,wn=i.get(bn);return A.el&&(A=Yt(A),M.shapeFlag&128&&(M.ssContent=A)),S=bn,wn?(A.el=wn.el,A.component=wn.component,A.transition&&Yp(A,A.transition),A.shapeFlag|=512,l.delete(bn),l.add(bn)):(l.add(bn),dn&&l.size>parseInt(dn,10)&&w(l.values().next().value)),A.shapeFlag|=256,r=A,Up(M.type)?M:A}}},Zp=dh;function Xs(e,t){return cn(e)?e.some(o=>Xs(o,t)):Kn(e)?e.split(",").includes(t):e.test?e.test(t):!1}function mh(e,t){Jp(e,"a",t)}function hh(e,t){Jp(e,"da",t)}function Jp(e,t,o=Zn){const a=e.__wdc||(e.__wdc=()=>{let i=o;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ra(t,a,o),o){let i=o.parent;for(;i&&i.parent;)Qp(i.parent.vnode)&&gh(a,t,o,i),i=i.parent}}function gh(e,t,o,a){const i=Ra(t,e,a,!0);Da(()=>{fl(a[t],i)},o)}function Za(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function Ja(e){return e.shapeFlag&128?e.ssContent:e}function Ra(e,t,o=Zn,a=!1){if(o){const i=o[e]||(o[e]=[]),l=t.__weh||(t.__weh=(...r)=>{if(o.isUnmounted)return;Ss(),ks(o);const c=He(t,o,e,r);return Wt(),ws(),c});return a?i.unshift(l):i.push(l),l}}const rt=e=>(t,o=Zn)=>(!yo||e==="sp")&&Ra(e,t,o),Xp=rt("bm"),zs=rt("m"),fh=rt("bu"),nu=rt("u"),Fa=rt("bum"),Da=rt("um"),_h=rt("sp"),vh=rt("rtg"),kh=rt("rtc");function yh(e,t=Zn){Ra("ec",e,t)}function Ha(e,t){const o=se;if(o===null)return e;const a=ja(o)||o.proxy,i=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[r,c,p,u=Fn]=t[l];hn(r)&&(r={mounted:r,updated:r}),r.deep&&Ht(c),i.push({dir:r,instance:a,value:c,oldValue:void 0,arg:p,modifiers:u})}return e}function Et(e,t,o,a){const i=e.dirs,l=t&&t.dirs;for(let r=0;r<i.length;r++){const c=i[r];l&&(c.oldValue=l[r].value);let p=c.dir[a];p&&(Ss(),He(p,o,8,[e.el,c,e,t]),ws())}}const eu="components",bh="directives";function Bn(e,t){return tu(eu,e,!0,t)||e}const xh=Symbol();function kr(e){return tu(bh,e)}function tu(e,t,o=!0,a=!1){const i=se||Zn;if(i){const l=i.type;if(e===eu){const c=Ai(l,!1);if(c&&(c===t||c===Ze(t)||c===Ta(Ze(t))))return l}const r=yr(i[e]||l[e],t)||yr(i.appContext[e],t);return!r&&a?l:r}}function yr(e,t){return e&&(e[t]||e[Ze(t)]||e[Ta(Ze(t))])}function Eo(e,t,o,a){let i;const l=o&&o[a];if(cn(e)||Kn(e)){i=new Array(e.length);for(let r=0,c=e.length;r<c;r++)i[r]=t(e[r],r,void 0,l&&l[r])}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,l&&l[r])}else if(Qn(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>t(r,c,void 0,l&&l[c]));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,p=r.length;c<p;c++){const u=r[c];i[c]=t(e[u],u,c,l&&l[c])}}else i=[];return o&&(o[a]=i),i}function Je(e,t,o={},a,i){if(se.isCE||se.parent&&fs(se.parent)&&se.parent.isCE)return y("slot",t==="default"?null:{name:t},a&&a());let l=e[t];l&&l._c&&(l._d=!1),v();const r=l&&su(l(o)),c=z(Mn,{key:o.key||`_${t}`},r||(a?a():[]),r&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function su(e){return e.some(t=>Gt(t)?!(t.type===wt||t.type===Mn&&!su(t.children)):!0)?e:null}const Ti=e=>e?hu(e)?ja(e)||e.proxy:Ti(e.parent):null,ga=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ti(e.parent),$root:e=>Ti(e.root),$emit:e=>e.emit,$options:e=>au(e),$forceUpdate:e=>e.f||(e.f=()=>jp(e.update)),$nextTick:e=>e.n||(e.n=Xn.bind(e.proxy)),$watch:e=>uh.bind(e)}),Sh={get({_:e},t){const{ctx:o,setupState:a,data:i,props:l,accessCache:r,type:c,appContext:p}=e;let u;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return a[t];case 2:return i[t];case 4:return o[t];case 3:return l[t]}else{if(a!==Fn&&Sn(a,t))return r[t]=1,a[t];if(i!==Fn&&Sn(i,t))return r[t]=2,i[t];if((u=e.propsOptions[0])&&Sn(u,t))return r[t]=3,l[t];if(o!==Fn&&Sn(o,t))return r[t]=4,o[t];Ei&&(r[t]=0)}}const d=ga[t];let h,m;if(d)return t==="$attrs"&&$e(e,"get",t),d(e);if((h=c.__cssModules)&&(h=h[t]))return h;if(o!==Fn&&Sn(o,t))return r[t]=4,o[t];if(m=p.config.globalProperties,Sn(m,t))return m[t]},set({_:e},t,o){const{data:a,setupState:i,ctx:l}=e;return i!==Fn&&Sn(i,t)?(i[t]=o,!0):a!==Fn&&Sn(a,t)?(a[t]=o,!0):Sn(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:a,appContext:i,propsOptions:l}},r){let c;return!!o[r]||e!==Fn&&Sn(e,r)||t!==Fn&&Sn(t,r)||(c=l[0])&&Sn(c,r)||Sn(a,r)||Sn(ga,r)||Sn(i.config.globalProperties,r)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:Sn(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};let Ei=!0;function wh(e){const t=au(e),o=e.proxy,a=e.ctx;Ei=!1,t.beforeCreate&&br(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:r,watch:c,provide:p,inject:u,created:d,beforeMount:h,mounted:m,beforeUpdate:f,updated:_,activated:w,deactivated:S,beforeDestroy:O,beforeUnmount:L,destroyed:M,unmounted:A,render:K,renderTracked:q,renderTriggered:Y,errorCaptured:an,serverPrefetch:dn,expose:bn,inheritAttrs:wn,components:Nn,directives:Vn,filters:te}=t;if(u&&zh(u,a,null,e.appContext.config.unwrapInjectedRef),r)for(const pn in r){const on=r[pn];hn(on)&&(a[pn]=on.bind(o))}if(i){const pn=i.call(o,o);Qn(pn)&&(e.data=jn(pn))}if(Ei=!0,l)for(const pn in l){const on=l[pn],xn=hn(on)?on.bind(o,o):hn(on.get)?on.get.bind(o,o):De,Ke=!hn(on)&&hn(on.set)?on.set.bind(o):De,ie=R({get:xn,set:Ke});Object.defineProperty(a,pn,{enumerable:!0,configurable:!0,get:()=>ie.value,set:Ce=>ie.value=Ce})}if(c)for(const pn in c)ou(c[pn],a,o,pn);if(p){const pn=hn(p)?p.call(o):p;Reflect.ownKeys(pn).forEach(on=>{xe(on,pn[on])})}d&&br(d,e,"c");function ln(pn,on){cn(on)?on.forEach(xn=>pn(xn.bind(o))):on&&pn(on.bind(o))}if(ln(Xp,h),ln(zs,m),ln(fh,f),ln(nu,_),ln(mh,w),ln(hh,S),ln(yh,an),ln(kh,q),ln(vh,Y),ln(Fa,L),ln(Da,A),ln(_h,dn),cn(bn))if(bn.length){const pn=e.exposed||(e.exposed={});bn.forEach(on=>{Object.defineProperty(pn,on,{get:()=>o[on],set:xn=>o[on]=xn})})}else e.exposed||(e.exposed={});K&&e.render===De&&(e.render=K),wn!=null&&(e.inheritAttrs=wn),Nn&&(e.components=Nn),Vn&&(e.directives=Vn)}function zh(e,t,o=De,a=!1){cn(e)&&(e=Mi(e));for(const i in e){const l=e[i];let r;Qn(l)?"default"in l?r=x(l.from||i,l.default,!0):r=x(l.from||i):r=x(l),Tn(r)&&a?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:c=>r.value=c}):t[i]=r}}function br(e,t,o){He(cn(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,o)}function ou(e,t,o,a){const i=a.includes(".")?Gp(o,a):()=>o[a];if(Kn(e)){const l=t[e];hn(l)&&gn(i,l)}else if(hn(e))gn(i,e.bind(o));else if(Qn(e))if(cn(e))e.forEach(l=>ou(l,t,o,a));else{const l=hn(e.handler)?e.handler.bind(o):t[e.handler];hn(l)&&gn(i,l,e)}}function au(e){const t=e.type,{mixins:o,extends:a}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,c=l.get(t);let p;return c?p=c:!i.length&&!o&&!a?p=t:(p={},i.length&&i.forEach(u=>fa(p,u,r,!0)),fa(p,t,r)),l.set(t,p),p}function fa(e,t,o,a=!1){const{mixins:i,extends:l}=t;l&&fa(e,l,o,!0),i&&i.forEach(r=>fa(e,r,o,!0));for(const r in t)if(!(a&&r==="expose")){const c=$h[r]||o&&o[r];e[r]=c?c(e[r],t[r]):t[r]}return e}const $h={data:xr,props:Ot,emits:Ot,methods:Ot,computed:Ot,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:Ot,directives:Ot,watch:Ih,provide:xr,inject:Ch};function xr(e,t){return t?e?function(){return ue(hn(e)?e.call(this,this):e,hn(t)?t.call(this,this):t)}:t:e}function Ch(e,t){return Ot(Mi(e),Mi(t))}function Mi(e){if(cn(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function Ot(e,t){return e?ue(ue(Object.create(null),e),t):t}function Ih(e,t){if(!e)return t;if(!t)return e;const o=ue(Object.create(null),e);for(const a in t)o[a]=le(e[a],t[a]);return o}function Th(e,t,o,a=!1){const i={},l={};da(l,Na,1),e.propsDefaults=Object.create(null),iu(e,t,i,l);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);o?e.props=a?i:Wm(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function Eh(e,t,o,a){const{props:i,attrs:l,vnode:{patchFlag:r}}=e,c=In(i),[p]=e.propsOptions;let u=!1;if((a||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let m=d[h];if(Oa(e.emitsOptions,m))continue;const f=t[m];if(p)if(Sn(l,m))f!==l[m]&&(l[m]=f,u=!0);else{const _=Ze(m);i[_]=Li(p,c,_,f,e,!1)}else f!==l[m]&&(l[m]=f,u=!0)}}}else{iu(e,t,i,l)&&(u=!0);let d;for(const h in c)(!t||!Sn(t,h)&&((d=Zt(h))===h||!Sn(t,d)))&&(p?o&&(o[h]!==void 0||o[d]!==void 0)&&(i[h]=Li(p,c,h,void 0,e,!0)):delete i[h]);if(l!==c)for(const h in l)(!t||!Sn(t,h)&&!0)&&(delete l[h],u=!0)}u&&lt(e,"set","$attrs")}function iu(e,t,o,a){const[i,l]=e.propsOptions;let r=!1,c;if(t)for(let p in t){if(sa(p))continue;const u=t[p];let d;i&&Sn(i,d=Ze(p))?!l||!l.includes(d)?o[d]=u:(c||(c={}))[d]=u:Oa(e.emitsOptions,p)||(!(p in a)||u!==a[p])&&(a[p]=u,r=!0)}if(l){const p=In(o),u=c||Fn;for(let d=0;d<l.length;d++){const h=l[d];o[h]=Li(i,p,h,u[h],e,!Sn(u,h))}}return r}function Li(e,t,o,a,i,l){const r=e[o];if(r!=null){const c=Sn(r,"default");if(c&&a===void 0){const p=r.default;if(r.type!==Function&&hn(p)){const{propsDefaults:u}=i;o in u?a=u[o]:(ks(i),a=u[o]=p.call(null,t),Wt())}else a=p}r[0]&&(l&&!c?a=!1:r[1]&&(a===""||a===Zt(o))&&(a=!0))}return a}function lu(e,t,o=!1){const a=t.propsCache,i=a.get(e);if(i)return i;const l=e.props,r={},c=[];let p=!1;if(!hn(e)){const d=h=>{p=!0;const[m,f]=lu(h,t,!0);ue(r,m),f&&c.push(...f)};!o&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!p)return a.set(e,ds),ds;if(cn(l))for(let d=0;d<l.length;d++){const h=Ze(l[d]);Sr(h)&&(r[h]=Fn)}else if(l)for(const d in l){const h=Ze(d);if(Sr(h)){const m=l[d],f=r[h]=cn(m)||hn(m)?{type:m}:m;if(f){const _=$r(Boolean,f.type),w=$r(String,f.type);f[0]=_>-1,f[1]=w<0||_<w,(_>-1||Sn(f,"default"))&&c.push(h)}}}const u=[r,c];return a.set(e,u),u}function Sr(e){return e[0]!=="$"}function wr(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function zr(e,t){return wr(e)===wr(t)}function $r(e,t){return cn(t)?t.findIndex(o=>zr(o,e)):hn(t)&&zr(t,e)?0:-1}const ru=e=>e[0]==="_"||e==="$stable",Ll=e=>cn(e)?e.map(Ue):[Ue(e)],Mh=(e,t,o)=>{if(t._n)return t;const a=g((...i)=>Ll(t(...i)),o);return a._c=!1,a},cu=(e,t,o)=>{const a=e._ctx;for(const i in e){if(ru(i))continue;const l=e[i];if(hn(l))t[i]=Mh(i,l,a);else if(l!=null){const r=Ll(l);t[i]=()=>r}}},pu=(e,t)=>{const o=Ll(t);e.slots.default=()=>o},Lh=(e,t)=>{if(e.vnode.shapeFlag&32){const o=t._;o?(e.slots=In(t),da(t,"_",o)):cu(t,e.slots={})}else e.slots={},t&&pu(e,t);da(e.slots,Na,1)},Ph=(e,t,o)=>{const{vnode:a,slots:i}=e;let l=!0,r=Fn;if(a.shapeFlag&32){const c=t._;c?o&&c===1?l=!1:(ue(i,t),!o&&c===1&&delete i._):(l=!t.$stable,cu(t,i)),r=t}else t&&(pu(e,t),r={default:1});if(l)for(const c in i)!ru(c)&&!(c in r)&&delete i[c]};function uu(){return{app:null,config:{isNativeTag:pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Oh=0;function Ah(e,t){return function(a,i=null){hn(a)||(a=Object.assign({},a)),i!=null&&!Qn(i)&&(i=null);const l=uu(),r=new Set;let c=!1;const p=l.app={_uid:Oh++,_component:a,_props:i,_container:null,_context:l,_instance:null,version:Xh,get config(){return l.config},set config(u){},use(u,...d){return r.has(u)||(u&&hn(u.install)?(r.add(u),u.install(p,...d)):hn(u)&&(r.add(u),u(p,...d))),p},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),p},component(u,d){return d?(l.components[u]=d,p):l.components[u]},directive(u,d){return d?(l.directives[u]=d,p):l.directives[u]},mount(u,d,h){if(!c){const m=y(a,i);return m.appContext=l,d&&t?t(m,u):e(m,u,h),c=!0,p._container=u,u.__vue_app__=p,ja(m.component)||m.component.proxy}},unmount(){c&&(e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return l.provides[u]=d,p}};return p}}function Pi(e,t,o,a,i=!1){if(cn(e)){e.forEach((m,f)=>Pi(m,t&&(cn(t)?t[f]:t),o,a,i));return}if(fs(a)&&!i)return;const l=a.shapeFlag&4?ja(a.component)||a.component.proxy:a.el,r=i?null:l,{i:c,r:p}=e,u=t&&t.r,d=c.refs===Fn?c.refs={}:c.refs,h=c.setupState;if(u!=null&&u!==p&&(Kn(u)?(d[u]=null,Sn(h,u)&&(h[u]=null)):Tn(u)&&(u.value=null)),hn(p))kt(p,c,12,[r,d]);else{const m=Kn(p),f=Tn(p);if(m||f){const _=()=>{if(e.f){const w=m?d[p]:p.value;i?cn(w)&&fl(w,l):cn(w)?w.includes(l)||w.push(l):m?(d[p]=[l],Sn(h,p)&&(h[p]=d[p])):(p.value=[l],e.k&&(d[e.k]=p.value))}else m?(d[p]=r,Sn(h,p)&&(h[p]=r)):f&&(p.value=r,e.k&&(d[e.k]=r))};r?(_.id=-1,Jn(_,o)):_()}}}const Jn=ph;function Rh(e){return Fh(e)}function Fh(e,t){const o=fm();o.__VUE__=!0;const{insert:a,remove:i,patchProp:l,createElement:r,createText:c,createComment:p,setText:u,setElementText:d,parentNode:h,nextSibling:m,setScopeId:f=De,cloneNode:_,insertStaticContent:w}=e,S=(k,b,E,H=null,D=null,V=null,Z=!1,W=null,G=!!b.dynamicChildren)=>{if(k===b)return;k&&!qs(k,b)&&(H=nn(k),me(k,D,V,!0),k=null),b.patchFlag===-2&&(G=!1,b.dynamicChildren=null);const{type:N,ref:tn,shapeFlag:en}=b;switch(N){case Ol:O(k,b,E,H);break;case wt:L(k,b,E,H);break;case Xa:k==null&&M(b,E,H,Z);break;case Mn:Vn(k,b,E,H,D,V,Z,W,G);break;default:en&1?q(k,b,E,H,D,V,Z,W,G):en&6?te(k,b,E,H,D,V,Z,W,G):(en&64||en&128)&&N.process(k,b,E,H,D,V,Z,W,G,Dn)}tn!=null&&D&&Pi(tn,k&&k.ref,V,b||k,!b)},O=(k,b,E,H)=>{if(k==null)a(b.el=c(b.children),E,H);else{const D=b.el=k.el;b.children!==k.children&&u(D,b.children)}},L=(k,b,E,H)=>{k==null?a(b.el=p(b.children||""),E,H):b.el=k.el},M=(k,b,E,H)=>{[k.el,k.anchor]=w(k.children,b,E,H,k.el,k.anchor)},A=({el:k,anchor:b},E,H)=>{let D;for(;k&&k!==b;)D=m(k),a(k,E,H),k=D;a(b,E,H)},K=({el:k,anchor:b})=>{let E;for(;k&&k!==b;)E=m(k),i(k),k=E;i(b)},q=(k,b,E,H,D,V,Z,W,G)=>{Z=Z||b.type==="svg",k==null?Y(b,E,H,D,V,Z,W,G):bn(k,b,D,V,Z,W,G)},Y=(k,b,E,H,D,V,Z,W)=>{let G,N;const{type:tn,props:en,shapeFlag:sn,transition:un,patchFlag:zn,dirs:On}=k;if(k.el&&_!==void 0&&zn===-1)G=k.el=_(k.el);else{if(G=k.el=r(k.type,V,en&&en.is,en),sn&8?d(G,k.children):sn&16&&dn(k.children,G,null,H,D,V&&tn!=="foreignObject",Z,W),On&&Et(k,null,H,"created"),en){for(const Hn in en)Hn!=="value"&&!sa(Hn)&&l(G,Hn,null,en[Hn],V,k.children,H,D,j);"value"in en&&l(G,"value",null,en.value),(N=en.onVnodeBeforeMount)&&Ie(N,H,k)}an(G,k,k.scopeId,Z,H)}On&&Et(k,null,H,"beforeMount");const An=(!D||D&&!D.pendingBranch)&&un&&!un.persisted;An&&un.beforeEnter(G),a(G,b,E),((N=en&&en.onVnodeMounted)||An||On)&&Jn(()=>{N&&Ie(N,H,k),An&&un.enter(G),On&&Et(k,null,H,"mounted")},D)},an=(k,b,E,H,D)=>{if(E&&f(k,E),H)for(let V=0;V<H.length;V++)f(k,H[V]);if(D){let V=D.subTree;if(b===V){const Z=D.vnode;an(k,Z,Z.scopeId,Z.slotScopeIds,D.parent)}}},dn=(k,b,E,H,D,V,Z,W,G=0)=>{for(let N=G;N<k.length;N++){const tn=k[N]=W?ht(k[N]):Ue(k[N]);S(null,tn,b,E,H,D,V,Z,W)}},bn=(k,b,E,H,D,V,Z)=>{const W=b.el=k.el;let{patchFlag:G,dynamicChildren:N,dirs:tn}=b;G|=k.patchFlag&16;const en=k.props||Fn,sn=b.props||Fn;let un;E&&Mt(E,!1),(un=sn.onVnodeBeforeUpdate)&&Ie(un,E,b,k),tn&&Et(b,k,E,"beforeUpdate"),E&&Mt(E,!0);const zn=D&&b.type!=="foreignObject";if(N?wn(k.dynamicChildren,N,W,E,H,zn,V):Z||xn(k,b,W,null,E,H,zn,V,!1),G>0){if(G&16)Nn(W,b,en,sn,E,H,D);else if(G&2&&en.class!==sn.class&&l(W,"class",null,sn.class,D),G&4&&l(W,"style",en.style,sn.style,D),G&8){const On=b.dynamicProps;for(let An=0;An<On.length;An++){const Hn=On[An],Pe=en[Hn],ts=sn[Hn];(ts!==Pe||Hn==="value")&&l(W,Hn,Pe,ts,D,k.children,E,H,j)}}G&1&&k.children!==b.children&&d(W,b.children)}else!Z&&N==null&&Nn(W,b,en,sn,E,H,D);((un=sn.onVnodeUpdated)||tn)&&Jn(()=>{un&&Ie(un,E,b,k),tn&&Et(b,k,E,"updated")},H)},wn=(k,b,E,H,D,V,Z)=>{for(let W=0;W<b.length;W++){const G=k[W],N=b[W],tn=G.el&&(G.type===Mn||!qs(G,N)||G.shapeFlag&70)?h(G.el):E;S(G,N,tn,null,H,D,V,Z,!0)}},Nn=(k,b,E,H,D,V,Z)=>{if(E!==H){for(const W in H){if(sa(W))continue;const G=H[W],N=E[W];G!==N&&W!=="value"&&l(k,W,N,G,Z,b.children,D,V,j)}if(E!==Fn)for(const W in E)!sa(W)&&!(W in H)&&l(k,W,E[W],null,Z,b.children,D,V,j);"value"in H&&l(k,"value",E.value,H.value)}},Vn=(k,b,E,H,D,V,Z,W,G)=>{const N=b.el=k?k.el:c(""),tn=b.anchor=k?k.anchor:c("");let{patchFlag:en,dynamicChildren:sn,slotScopeIds:un}=b;un&&(W=W?W.concat(un):un),k==null?(a(N,E,H),a(tn,E,H),dn(b.children,E,tn,D,V,Z,W,G)):en>0&&en&64&&sn&&k.dynamicChildren?(wn(k.dynamicChildren,sn,E,D,V,Z,W),(b.key!=null||D&&b===D.subTree)&&Pl(k,b,!0)):xn(k,b,E,tn,D,V,Z,W,G)},te=(k,b,E,H,D,V,Z,W,G)=>{b.slotScopeIds=W,k==null?b.shapeFlag&512?D.ctx.activate(b,E,H,Z,G):Pn(b,E,H,D,V,Z,G):ln(k,b,G)},Pn=(k,b,E,H,D,V,Z)=>{const W=k.component=Uh(k,H,D);if(Qp(k)&&(W.ctx.renderer=Dn),Gh(W),W.asyncDep){if(D&&D.registerDep(W,pn),!k.el){const G=W.subTree=y(wt);L(null,G,b,E)}return}pn(W,k,b,E,D,V,Z)},ln=(k,b,E)=>{const H=b.component=k.component;if(rh(k,b,E))if(H.asyncDep&&!H.asyncResolved){on(H,b,E);return}else H.next=b,th(H.update),H.update();else b.el=k.el,H.vnode=b},pn=(k,b,E,H,D,V,Z)=>{const W=()=>{if(k.isMounted){let{next:tn,bu:en,u:sn,parent:un,vnode:zn}=k,On=tn,An;Mt(k,!1),tn?(tn.el=zn.el,on(k,tn,Z)):tn=zn,en&&hs(en),(An=tn.props&&tn.props.onVnodeBeforeUpdate)&&Ie(An,un,tn,zn),Mt(k,!0);const Hn=Qa(k),Pe=k.subTree;k.subTree=Hn,S(Pe,Hn,h(Pe.el),nn(Pe),k,D,V),tn.el=Hn.el,On===null&&ch(k,Hn.el),sn&&Jn(sn,D),(An=tn.props&&tn.props.onVnodeUpdated)&&Jn(()=>Ie(An,un,tn,zn),D)}else{let tn;const{el:en,props:sn}=b,{bm:un,m:zn,parent:On}=k,An=fs(b);if(Mt(k,!1),un&&hs(un),!An&&(tn=sn&&sn.onVnodeBeforeMount)&&Ie(tn,On,b),Mt(k,!0),en&&fn){const Hn=()=>{k.subTree=Qa(k),fn(en,k.subTree,k,D,null)};An?b.type.__asyncLoader().then(()=>!k.isUnmounted&&Hn()):Hn()}else{const Hn=k.subTree=Qa(k);S(null,Hn,E,H,k,D,V),b.el=Hn.el}if(zn&&Jn(zn,D),!An&&(tn=sn&&sn.onVnodeMounted)){const Hn=b;Jn(()=>Ie(tn,On,Hn),D)}(b.shapeFlag&256||On&&fs(On.vnode)&&On.vnode.shapeFlag&256)&&k.a&&Jn(k.a,D),k.isMounted=!0,b=E=H=null}},G=k.effect=new xl(W,()=>jp(N),k.scope),N=k.update=()=>G.run();N.id=k.uid,Mt(k,!0),N()},on=(k,b,E)=>{b.component=k;const H=k.vnode.props;k.vnode=b,k.next=null,Eh(k,b.props,H,E),Ph(k,b.children,E),Ss(),Pa(void 0,k.update),ws()},xn=(k,b,E,H,D,V,Z,W,G=!1)=>{const N=k&&k.children,tn=k?k.shapeFlag:0,en=b.children,{patchFlag:sn,shapeFlag:un}=b;if(sn>0){if(sn&128){ie(N,en,E,H,D,V,Z,W,G);return}else if(sn&256){Ke(N,en,E,H,D,V,Z,W,G);return}}un&8?(tn&16&&j(N,D,V),en!==N&&d(E,en)):tn&16?un&16?ie(N,en,E,H,D,V,Z,W,G):j(N,D,V,!0):(tn&8&&d(E,""),un&16&&dn(en,E,H,D,V,Z,W,G))},Ke=(k,b,E,H,D,V,Z,W,G)=>{k=k||ds,b=b||ds;const N=k.length,tn=b.length,en=Math.min(N,tn);let sn;for(sn=0;sn<en;sn++){const un=b[sn]=G?ht(b[sn]):Ue(b[sn]);S(k[sn],un,E,null,D,V,Z,W,G)}N>tn?j(k,D,V,!0,!1,en):dn(b,E,H,D,V,Z,W,G,en)},ie=(k,b,E,H,D,V,Z,W,G)=>{let N=0;const tn=b.length;let en=k.length-1,sn=tn-1;for(;N<=en&&N<=sn;){const un=k[N],zn=b[N]=G?ht(b[N]):Ue(b[N]);if(qs(un,zn))S(un,zn,E,null,D,V,Z,W,G);else break;N++}for(;N<=en&&N<=sn;){const un=k[en],zn=b[sn]=G?ht(b[sn]):Ue(b[sn]);if(qs(un,zn))S(un,zn,E,null,D,V,Z,W,G);else break;en--,sn--}if(N>en){if(N<=sn){const un=sn+1,zn=un<tn?b[un].el:H;for(;N<=sn;)S(null,b[N]=G?ht(b[N]):Ue(b[N]),E,zn,D,V,Z,W,G),N++}}else if(N>sn)for(;N<=en;)me(k[N],D,V,!0),N++;else{const un=N,zn=N,On=new Map;for(N=zn;N<=sn;N++){const _e=b[N]=G?ht(b[N]):Ue(b[N]);_e.key!=null&&On.set(_e.key,N)}let An,Hn=0;const Pe=sn-zn+1;let ts=!1,ir=0;const Bs=new Array(Pe);for(N=0;N<Pe;N++)Bs[N]=0;for(N=un;N<=en;N++){const _e=k[N];if(Hn>=Pe){me(_e,D,V,!0);continue}let Ve;if(_e.key!=null)Ve=On.get(_e.key);else for(An=zn;An<=sn;An++)if(Bs[An-zn]===0&&qs(_e,b[An])){Ve=An;break}Ve===void 0?me(_e,D,V,!0):(Bs[Ve-zn]=N+1,Ve>=ir?ir=Ve:ts=!0,S(_e,b[Ve],E,null,D,V,Z,W,G),Hn++)}const lr=ts?Dh(Bs):ds;for(An=lr.length-1,N=Pe-1;N>=0;N--){const _e=zn+N,Ve=b[_e],rr=_e+1<tn?b[_e+1].el:H;Bs[N]===0?S(null,Ve,E,rr,D,V,Z,W,G):ts&&(An<0||N!==lr[An]?Ce(Ve,E,rr,2):An--)}}},Ce=(k,b,E,H,D=null)=>{const{el:V,type:Z,transition:W,children:G,shapeFlag:N}=k;if(N&6){Ce(k.component.subTree,b,E,H);return}if(N&128){k.suspense.move(b,E,H);return}if(N&64){Z.move(k,b,E,Dn);return}if(Z===Mn){a(V,b,E);for(let en=0;en<G.length;en++)Ce(G[en],b,E,H);a(k.anchor,b,E);return}if(Z===Xa){A(k,b,E);return}if(H!==2&&N&1&&W)if(H===0)W.beforeEnter(V),a(V,b,E),Jn(()=>W.enter(V),D);else{const{leave:en,delayLeave:sn,afterLeave:un}=W,zn=()=>a(V,b,E),On=()=>{en(V,()=>{zn(),un&&un()})};sn?sn(V,zn,On):On()}else a(V,b,E)},me=(k,b,E,H=!1,D=!1)=>{const{type:V,props:Z,ref:W,children:G,dynamicChildren:N,shapeFlag:tn,patchFlag:en,dirs:sn}=k;if(W!=null&&Pi(W,null,E,k,!0),tn&256){b.ctx.deactivate(k);return}const un=tn&1&&sn,zn=!fs(k);let On;if(zn&&(On=Z&&Z.onVnodeBeforeUnmount)&&Ie(On,b,k),tn&6)X(k.component,E,H);else{if(tn&128){k.suspense.unmount(E,H);return}un&&Et(k,null,b,"beforeUnmount"),tn&64?k.type.remove(k,b,E,D,Dn,H):N&&(V!==Mn||en>0&&en&64)?j(N,b,E,!1,!0):(V===Mn&&en&384||!D&&tn&16)&&j(G,b,E),H&&pt(k)}(zn&&(On=Z&&Z.onVnodeUnmounted)||un)&&Jn(()=>{On&&Ie(On,b,k),un&&Et(k,null,b,"unmounted")},E)},pt=k=>{const{type:b,el:E,anchor:H,transition:D}=k;if(b===Mn){F(E,H);return}if(b===Xa){K(k);return}const V=()=>{i(E),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(k.shapeFlag&1&&D&&!D.persisted){const{leave:Z,delayLeave:W}=D,G=()=>Z(E,V);W?W(k.el,V,G):G()}else V()},F=(k,b)=>{let E;for(;k!==b;)E=m(k),i(k),k=E;i(b)},X=(k,b,E)=>{const{bum:H,scope:D,update:V,subTree:Z,um:W}=k;H&&hs(H),D.stop(),V&&(V.active=!1,me(Z,k,b,E)),W&&Jn(W,b),Jn(()=>{k.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},j=(k,b,E,H=!1,D=!1,V=0)=>{for(let Z=V;Z<k.length;Z++)me(k[Z],b,E,H,D)},nn=k=>k.shapeFlag&6?nn(k.component.subTree):k.shapeFlag&128?k.suspense.next():m(k.anchor||k.el),$n=(k,b,E)=>{k==null?b._vnode&&me(b._vnode,null,null,!0):S(b._vnode||null,k,b,null,null,null,E),Wp(),b._vnode=k},Dn={p:S,um:me,m:Ce,r:pt,mt:Pn,mc:dn,pc:xn,pbc:wn,n:nn,o:e};let _n,fn;return t&&([_n,fn]=t(Dn)),{render:$n,hydrate:_n,createApp:Ah($n,_n)}}function Mt({effect:e,update:t},o){e.allowRecurse=t.allowRecurse=o}function Pl(e,t,o=!1){const a=e.children,i=t.children;if(cn(a)&&cn(i))for(let l=0;l<a.length;l++){const r=a[l];let c=i[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[l]=ht(i[l]),c.el=r.el),o||Pl(r,c))}}function Dh(e){const t=e.slice(),o=[0];let a,i,l,r,c;const p=e.length;for(a=0;a<p;a++){const u=e[a];if(u!==0){if(i=o[o.length-1],e[i]<u){t[a]=i,o.push(a);continue}for(l=0,r=o.length-1;l<r;)c=l+r>>1,e[o[c]]<u?l=c+1:r=c;u<e[o[l]]&&(l>0&&(t[a]=o[l-1]),o[l]=a)}}for(l=o.length,r=o[l-1];l-- >0;)o[l]=r,r=t[r];return o}const Hh=e=>e.__isTeleport,to=e=>e&&(e.disabled||e.disabled===""),Cr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Oi=(e,t)=>{const o=e&&e.to;return Kn(o)?t?t(o):null:o},Nh={__isTeleport:!0,process(e,t,o,a,i,l,r,c,p,u){const{mc:d,pc:h,pbc:m,o:{insert:f,querySelector:_,createText:w,createComment:S}}=u,O=to(t.props);let{shapeFlag:L,children:M,dynamicChildren:A}=t;if(e==null){const K=t.el=w(""),q=t.anchor=w("");f(K,o,a),f(q,o,a);const Y=t.target=Oi(t.props,_),an=t.targetAnchor=w("");Y&&(f(an,Y),r=r||Cr(Y));const dn=(bn,wn)=>{L&16&&d(M,bn,wn,i,l,r,c,p)};O?dn(o,q):Y&&dn(Y,an)}else{t.el=e.el;const K=t.anchor=e.anchor,q=t.target=e.target,Y=t.targetAnchor=e.targetAnchor,an=to(e.props),dn=an?o:q,bn=an?K:Y;if(r=r||Cr(q),A?(m(e.dynamicChildren,A,dn,i,l,r,c),Pl(e,t,!0)):p||h(e,t,dn,bn,i,l,r,c,!1),O)an||Jo(t,o,K,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const wn=t.target=Oi(t.props,_);wn&&Jo(t,wn,null,u,0)}else an&&Jo(t,q,Y,u,1)}},remove(e,t,o,a,{um:i,o:{remove:l}},r){const{shapeFlag:c,children:p,anchor:u,targetAnchor:d,target:h,props:m}=e;if(h&&l(d),(r||!to(m))&&(l(u),c&16))for(let f=0;f<p.length;f++){const _=p[f];i(_,t,o,!0,!!_.dynamicChildren)}},move:Jo,hydrate:jh};function Jo(e,t,o,{o:{insert:a},m:i},l=2){l===0&&a(e.targetAnchor,t,o);const{el:r,anchor:c,shapeFlag:p,children:u,props:d}=e,h=l===2;if(h&&a(r,t,o),(!h||to(d))&&p&16)for(let m=0;m<u.length;m++)i(u[m],t,o,2);h&&a(c,t,o)}function jh(e,t,o,a,i,l,{o:{nextSibling:r,parentNode:c,querySelector:p}},u){const d=t.target=Oi(t.props,p);if(d){const h=d._lpa||d.firstChild;if(t.shapeFlag&16)if(to(t.props))t.anchor=u(r(e),t,c(e),o,a,i,l),t.targetAnchor=h;else{t.anchor=r(e);let m=h;for(;m;)if(m=r(m),m&&m.nodeType===8&&m.data==="teleport anchor"){t.targetAnchor=m,d._lpa=t.targetAnchor&&r(t.targetAnchor);break}u(h,t,d,o,a,i,l)}}return t.anchor&&r(t.anchor)}const Bh=Nh,Mn=Symbol(void 0),Ol=Symbol(void 0),wt=Symbol(void 0),Xa=Symbol(void 0),so=[];let Fe=null;function v(e=!1){so.push(Fe=e?null:[])}function qh(){so.pop(),Fe=so[so.length-1]||null}let ko=1;function Ir(e){ko+=e}function du(e){return e.dynamicChildren=ko>0?Fe||ds:null,qh(),ko>0&&Fe&&Fe.push(e),e}function J(e,t,o,a,i,l){return du(n(e,t,o,a,i,l,!0))}function z(e,t,o,a,i){return du(y(e,t,o,a,i,!0))}function Gt(e){return e?e.__v_isVNode===!0:!1}function qs(e,t){return e.type===t.type&&e.key===t.key}const Na="__vInternal",mu=({key:e})=>e!=null?e:null,oa=({ref:e,ref_key:t,ref_for:o})=>e!=null?Kn(e)||Tn(e)||hn(e)?{i:se,r:e,k:t,f:!!o}:e:null;function n(e,t=null,o=null,a=0,i=null,l=e===Mn?0:1,r=!1,c=!1){const p={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mu(t),ref:t&&oa(t),scopeId:Aa,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(Al(p,o),l&128&&e.normalize(p)):o&&(p.shapeFlag|=Kn(o)?8:16),ko>0&&!r&&Fe&&(p.patchFlag>0||l&6)&&p.patchFlag!==32&&Fe.push(p),p}const y=Wh;function Wh(e,t=null,o=null,a=0,i=null,l=!1){if((!e||e===xh)&&(e=wt),Gt(e)){const c=Yt(e,t,!0);return o&&Al(c,o),ko>0&&!l&&Fe&&(c.shapeFlag&6?Fe[Fe.indexOf(e)]=c:Fe.push(c)),c.patchFlag|=-2,c}if(Jh(e)&&(e=e.__vccOpts),t){t=I(t);let{class:c,style:p}=t;c&&!Kn(c)&&(t.class=Wn(c)),Qn(p)&&(Fp(p)&&!cn(p)&&(p=ue({},p)),t.style=ae(p))}const r=Kn(e)?1:Up(e)?128:Hh(e)?64:Qn(e)?4:hn(e)?2:0;return n(e,t,o,a,i,r,l,!0)}function I(e){return e?Fp(e)||Na in e?ue({},e):e:null}function Yt(e,t,o=!1){const{props:a,ref:i,patchFlag:l,children:r}=e,c=t?B(a||{},t):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&mu(c),ref:t&&t.ref?o&&i?cn(i)?i.concat(oa(t)):[i,oa(t)]:oa(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Mn?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor}}function s(e=" ",t=0){return y(Ol,null,e,t)}function U(e="",t=!1){return t?(v(),z(wt,null,e)):y(wt,null,e)}function Ue(e){return e==null||typeof e=="boolean"?y(wt):cn(e)?y(Mn,null,e.slice()):typeof e=="object"?ht(e):y(Ol,null,String(e))}function ht(e){return e.el===null||e.memo?e:Yt(e)}function Al(e,t){let o=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(cn(t))o=16;else if(typeof t=="object")if(a&65){const i=t.default;i&&(i._c&&(i._d=!1),Al(e,i()),i._c&&(i._d=!0));return}else{o=32;const i=t._;!i&&!(Na in t)?t._ctx=se:i===3&&se&&(se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else hn(t)?(t={default:t,_ctx:se},o=32):(t=String(t),a&64?(o=16,t=[s(t)]):o=8);e.children=t,e.shapeFlag|=o}function B(...e){const t={};for(let o=0;o<e.length;o++){const a=e[o];for(const i in a)if(i==="class")t.class!==a.class&&(t.class=Wn([t.class,a.class]));else if(i==="style")t.style=ae([t.style,a.style]);else if($a(i)){const l=t[i],r=a[i];r&&l!==r&&!(cn(l)&&l.includes(r))&&(t[i]=l?[].concat(l,r):r)}else i!==""&&(t[i]=a[i])}return t}function Ie(e,t,o,a=null){He(e,t,7,[o,a])}const Kh=uu();let Vh=0;function Uh(e,t,o){const a=e.type,i=(t?t.appContext:e.appContext)||Kh,l={uid:Vh++,vnode:e,type:a,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new $p(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lu(a,i),emitsOptions:Vp(a,i),emit:null,emitted:null,propsDefaults:Fn,inheritAttrs:a.inheritAttrs,ctx:Fn,data:Fn,props:Fn,attrs:Fn,slots:Fn,refs:Fn,setupState:Fn,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=ah.bind(null,l),e.ce&&e.ce(l),l}let Zn=null;const Jt=()=>Zn||se,ks=e=>{Zn=e,e.scope.on()},Wt=()=>{Zn&&Zn.scope.off(),Zn=null};function hu(e){return e.vnode.shapeFlag&4}let yo=!1;function Gh(e,t=!1){yo=t;const{props:o,children:a}=e.vnode,i=hu(e);Th(e,o,i,t),Lh(e,a);const l=i?Yh(e,t):void 0;return yo=!1,l}function Yh(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=Ma(new Proxy(e.ctx,Sh));const{setup:a}=o;if(a){const i=e.setupContext=a.length>1?Zh(e):null;ks(e),Ss();const l=kt(a,e,0,[e.props,i]);if(ws(),Wt(),Sp(l)){if(l.then(Wt,Wt),t)return l.then(r=>{Tr(e,r,t)}).catch(r=>{La(r,e,0)});e.asyncDep=l}else Tr(e,l,t)}else gu(e,t)}function Tr(e,t,o){hn(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Qn(t)&&(e.setupState=Hp(t)),gu(e,o)}let Er;function gu(e,t,o){const a=e.type;if(!e.render){if(!t&&Er&&!a.render){const i=a.template;if(i){const{isCustomElement:l,compilerOptions:r}=e.appContext.config,{delimiters:c,compilerOptions:p}=a,u=ue(ue({isCustomElement:l,delimiters:c},r),p);a.render=Er(i,u)}}e.render=a.render||De}ks(e),Ss(),wh(e),ws(),Wt()}function Qh(e){return new Proxy(e.attrs,{get(t,o){return $e(e,"get","$attrs"),t[o]}})}function Zh(e){const t=a=>{e.exposed=a||{}};let o;return{get attrs(){return o||(o=Qh(e))},slots:e.slots,emit:e.emit,expose:t}}function ja(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hp(Ma(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in ga)return ga[o](e)}}))}function Ai(e,t=!0){return hn(e)?e.displayName||e.name:e.name||t&&e.__name}function Jh(e){return hn(e)&&"__vccOpts"in e}const R=(e,t)=>Xm(e,t,yo);function fe(e,t,o){const a=arguments.length;return a===2?Qn(t)&&!cn(t)?Gt(t)?y(e,null,[t]):y(e,t):y(e,null,t):(a>3?o=Array.prototype.slice.call(arguments,2):a===3&&Gt(o)&&(o=[o]),y(e,t,o))}const Xh="3.2.37",ng="http://www.w3.org/2000/svg",Rt=typeof document<"u"?document:null,Mr=Rt&&Rt.createElement("template"),eg={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,a)=>{const i=t?Rt.createElementNS(ng,e):Rt.createElement(e,o?{is:o}:void 0);return e==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:e=>Rt.createTextNode(e),createComment:e=>Rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,o,a,i,l){const r=o?o.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),o),!(i===l||!(i=i.nextSibling)););else{Mr.innerHTML=a?`<svg>${e}</svg>`:e;const c=Mr.content;if(a){const p=c.firstChild;for(;p.firstChild;)c.appendChild(p.firstChild);c.removeChild(p)}t.insertBefore(c,o)}return[r?r.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}};function tg(e,t,o){const a=e._vtc;a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}function sg(e,t,o){const a=e.style,i=Kn(o);if(o&&!i){for(const l in o)Ri(a,l,o[l]);if(t&&!Kn(t))for(const l in t)o[l]==null&&Ri(a,l,"")}else{const l=a.display;i?t!==o&&(a.cssText=o):t&&e.removeAttribute("style"),"_vod"in e&&(a.display=l)}}const Lr=/\s*!important$/;function Ri(e,t,o){if(cn(o))o.forEach(a=>Ri(e,t,a));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const a=og(e,t);Lr.test(o)?e.setProperty(Zt(a),o.replace(Lr,""),"important"):e[a]=o}}const Pr=["Webkit","Moz","ms"],ni={};function og(e,t){const o=ni[t];if(o)return o;let a=Ze(t);if(a!=="filter"&&a in e)return ni[t]=a;a=Ta(a);for(let i=0;i<Pr.length;i++){const l=Pr[i]+a;if(l in e)return ni[t]=l}return t}const Or="http://www.w3.org/1999/xlink";function ag(e,t,o,a,i){if(a&&t.startsWith("xlink:"))o==null?e.removeAttributeNS(Or,t.slice(6,t.length)):e.setAttributeNS(Or,t,o);else{const l=im(t);o==null||l&&!yp(o)?e.removeAttribute(t):e.setAttribute(t,l?"":o)}}function ig(e,t,o,a,i,l,r){if(t==="innerHTML"||t==="textContent"){a&&r(a,i,l),e[t]=o==null?"":o;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=o;const p=o==null?"":o;(e.value!==p||e.tagName==="OPTION")&&(e.value=p),o==null&&e.removeAttribute(t);return}let c=!1;if(o===""||o==null){const p=typeof e[t];p==="boolean"?o=yp(o):o==null&&p==="string"?(o="",c=!0):p==="number"&&(o=0,c=!0)}try{e[t]=o}catch{}c&&e.removeAttribute(t)}const[fu,lg]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const o=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(o&&Number(o[1])<=53)}return[e,t]})();let Fi=0;const rg=Promise.resolve(),cg=()=>{Fi=0},pg=()=>Fi||(rg.then(cg),Fi=fu());function rs(e,t,o,a){e.addEventListener(t,o,a)}function ug(e,t,o,a){e.removeEventListener(t,o,a)}function dg(e,t,o,a,i=null){const l=e._vei||(e._vei={}),r=l[t];if(a&&r)r.value=a;else{const[c,p]=mg(t);if(a){const u=l[t]=hg(a,i);rs(e,c,u,p)}else r&&(ug(e,c,r,p),l[t]=void 0)}}const Ar=/(?:Once|Passive|Capture)$/;function mg(e){let t;if(Ar.test(e)){t={};let o;for(;o=e.match(Ar);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[Zt(e.slice(2)),t]}function hg(e,t){const o=a=>{const i=a.timeStamp||fu();(lg||i>=o.attached-1)&&He(gg(a,o.value),t,5,[a])};return o.value=e,o.attached=pg(),o}function gg(e,t){if(cn(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(a=>i=>!i._stopped&&a&&a(i))}else return t}const Rr=/^on[a-z]/,fg=(e,t,o,a,i=!1,l,r,c,p)=>{t==="class"?tg(e,a,i):t==="style"?sg(e,o,a):$a(t)?gl(t)||dg(e,t,o,a,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_g(e,t,a,i))?ig(e,t,a,l,r,c,p):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),ag(e,t,a,i))};function _g(e,t,o,a){return a?!!(t==="innerHTML"||t==="textContent"||t in e&&Rr.test(t)&&hn(o)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Rr.test(t)&&Kn(o)?!1:t in e}const Fr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return cn(t)?o=>hs(t,o):t};function vg(e){e.target.composing=!0}function Dr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const kg={created(e,{modifiers:{lazy:t,trim:o,number:a}},i){e._assign=Fr(i);const l=a||i.props&&i.props.type==="number";rs(e,t?"change":"input",r=>{if(r.target.composing)return;let c=e.value;o&&(c=c.trim()),l&&(c=bi(c)),e._assign(c)}),o&&rs(e,"change",()=>{e.value=e.value.trim()}),t||(rs(e,"compositionstart",vg),rs(e,"compositionend",Dr),rs(e,"change",Dr))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:o,trim:a,number:i}},l){if(e._assign=Fr(l),e.composing||document.activeElement===e&&e.type!=="range"&&(o||a&&e.value.trim()===t||(i||e.type==="number")&&bi(e.value)===t))return;const r=t==null?"":t;e.value!==r&&(e.value=r)}},yg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Hr=(e,t)=>o=>{if(!("key"in o))return;const a=Zt(o.key);if(t.some(i=>i===a||yg[i]===a))return e(o)},_u={beforeMount(e,{value:t},{transition:o}){e._vod=e.style.display==="none"?"":e.style.display,o&&t?o.beforeEnter(e):Ws(e,t)},mounted(e,{value:t},{transition:o}){o&&t&&o.enter(e)},updated(e,{value:t,oldValue:o},{transition:a}){!t!=!o&&(a?t?(a.beforeEnter(e),Ws(e,!0),a.enter(e)):a.leave(e,()=>{Ws(e,!1)}):Ws(e,t))},beforeUnmount(e,{value:t}){Ws(e,t)}};function Ws(e,t){e.style.display=t?e._vod:"none"}const bg=ue({patchProp:fg},eg);let Nr;function xg(){return Nr||(Nr=Rh(bg))}const Sg=(...e)=>{const t=xg().createApp(...e),{mount:o}=t;return t.mount=a=>{const i=wg(a);if(!i)return;const l=t._component;!hn(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.innerHTML="";const r=o(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function wg(e){return Kn(e)?document.querySelector(e):e}var zg=Object.defineProperty,jr=Object.getOwnPropertySymbols,$g=Object.prototype.hasOwnProperty,Cg=Object.prototype.propertyIsEnumerable,Br=(e,t,o)=>t in e?zg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Ig=(e,t)=>{for(var o in t||(t={}))$g.call(t,o)&&Br(e,o,t[o]);if(jr)for(var o of jr(t))Cg.call(t,o)&&Br(e,o,t[o]);return e},vu="usehead",qr="head:count",ei="data-head-attrs",ku="data-meta-body",Tg=(e,t,o)=>{const a=o.createElement(e);for(const i of Object.keys(t))if(i==="body"&&t.body===!0)a.setAttribute(ku,"true");else{let l=t[i];if(i==="key"||l===!1)continue;i==="children"?a.textContent=l:a.setAttribute(i,l)}return a};function Wr(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const o=t.getAttribute("nonce");if(o&&!e.getAttribute("nonce")){const a=t.cloneNode(!0);return a.setAttribute("nonce",""),a.nonce=o,o===e.nonce&&e.isEqualNode(a)}}return e.isEqualNode(t)}var Eg=e=>{const t=["key","id","name","property"];for(const o of t){const a=typeof e.getAttribute=="function"?e.hasAttribute(o)?e.getAttribute(o):void 0:e[o];if(a!==void 0)return{name:o,value:a}}},Mg=()=>{const e=x(vu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Lg=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Pg=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(C(t)),Og=e=>{const t=[],o=Object.keys(e);for(const a of o)if(e[a]!=null)switch(a){case"title":t.push({tag:a,props:{children:e[a]}});break;case"titleTemplate":break;case"base":t.push({tag:a,props:Ig({key:"default"},e[a])});break;default:if(Lg.includes(a)){const i=e[a];Array.isArray(i)?i.forEach(l=>{t.push({tag:a,props:l})}):i&&t.push({tag:a,props:i})}break}return t},Kr=(e,t)=>{const o=e.getAttribute(ei);if(o)for(const i of o.split(","))i in t||e.removeAttribute(i);const a=[];for(const i in t){const l=t[i];l!=null&&(l===!1?e.removeAttribute(i):e.setAttribute(i,l),a.push(i))}a.length?e.setAttribute(ei,a.join(",")):e.removeAttribute(ei)},Ag=(e=window.document,t,o)=>{var a,i;const l=e.head,r=e.body;let c=l.querySelector(`meta[name="${qr}"]`),p=r.querySelectorAll(`[${ku}]`);const u=c?Number(c.getAttribute("content")):0,d=[],h=[];if(p)for(let f=0;f<p.length;f++)p[f]&&((a=p[f].tagName)==null?void 0:a.toLowerCase())===t&&h.push(p[f]);if(c)for(let f=0,_=c.previousElementSibling;f<u;f++,_=(_==null?void 0:_.previousElementSibling)||null)((i=_==null?void 0:_.tagName)==null?void 0:i.toLowerCase())===t&&d.push(_);else c=e.createElement("meta"),c.setAttribute("name",qr),c.setAttribute("content","0"),l.append(c);let m=o.map(f=>{var _;return{element:Tg(f.tag,f.props,e),body:(_=f.props.body)!=null?_:!1}});m=m.filter(f=>{for(let _=0;_<d.length;_++){const w=d[_];if(Wr(w,f.element))return d.splice(_,1),!1}for(let _=0;_<h.length;_++){const w=h[_];if(Wr(w,f.element))return h.splice(_,1),!1}return!0}),h.forEach(f=>{var _;return(_=f.parentNode)==null?void 0:_.removeChild(f)}),d.forEach(f=>{var _;return(_=f.parentNode)==null?void 0:_.removeChild(f)}),m.forEach(f=>{f.body===!0?r.insertAdjacentElement("beforeend",f.element):l.insertBefore(f.element,c)}),c.setAttribute("content",""+(u-d.length+m.filter(f=>!f.body).length))},Rg=e=>{let t=[],o=new Set;e&&t.push(je(e));const a={install(i){i.config.globalProperties.$head=a,i.provide(vu,a)},get headTags(){const i=[],l=t.map(r=>C(r).titleTemplate).reverse().find(r=>r!=null);return t.forEach(r=>{Og(C(r)).forEach(p=>{if(p.tag==="meta"||p.tag==="base"||p.tag==="script"){const u=Eg(p.props);if(u){let d=-1;for(let h=0;h<i.length;h++){const m=i[h],f=m.props[u.name],_=p.props[u.name];if(m.tag===p.tag&&f===_){d=h;break}}d!==-1&&i.splice(d,1)}}l&&p.tag==="title"&&(p.props.children=Pg(l,p.props.children)),i.push(p)})}),i},addHeadObjs(i){t.push(i)},removeHeadObjs(i){t=t.filter(l=>l!==i)},updateDOM(i=window.document){let l,r={},c={};const p={};for(const d of a.headTags){if(d.tag==="title"){l=d.props.children;continue}if(d.tag==="htmlAttrs"){Object.assign(r,d.props);continue}if(d.tag==="bodyAttrs"){Object.assign(c,d.props);continue}p[d.tag]=p[d.tag]||[],p[d.tag].push(d)}l!==void 0&&(i.title=l),Kr(i.documentElement,r),Kr(i.body,c);const u=new Set([...Object.keys(p),...o]);for(const d of u)Ag(i,d,p[d]||[]);o.clear(),Object.keys(p).forEach(d=>o.add(d))}};return a},Fg=typeof window<"u",Dg=e=>{const t=Mg(),o=Q(e);t.addHeadObjs(o),Fg&&(To(()=>{t.updateDOM()}),Fa(()=>{t.removeHeadObjs(o),t.updateDOM()}))};const oo=Symbol("v-click-clicks"),Ft=Symbol("v-click-clicks-elements"),Di=Symbol("v-click-clicks-order-map"),ao=Symbol("v-click-clicks-disabled"),yu=Symbol("slidev-slide-scale"),$=Symbol("slidev-slidev-context"),Hg=Symbol("slidev-route"),Ng=Symbol("slidev-slide-context"),At="slidev-vclick-target",ti="slidev-vclick-hidden",jg="slidev-vclick-fade",si="slidev-vclick-hidden-explicitly",Ks="slidev-vclick-current",Xo="slidev-vclick-prior";function Bg(e){return e=e||[],Array.isArray(e)?e:[e]}function Hi(e,t){if(!e)return!1;const o=e.indexOf(t);return o>=0?(e.splice(o,1),!0):!1}function qg(...e){let t,o,a;e.length===1?(t=0,a=1,[o]=e):[t,o,a=1]=e;const i=[];let l=t;for(;l<o;)i.push(l),l+=a||1;return i}function Wg(e){return e!=null}function Kg(e,t){return Object.fromEntries(Object.entries(e).map(([o,a])=>t(o,a)).filter(Wg))}const Nt={theme:"default",title:"Cascading Style Sheets",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",version:"1.4.1"},Cn=Nt;var vp;const yt=(vp=Cn.aspectRatio)!=null?vp:16/9;var kp;const Kt=(kp=Cn.canvasWidth)!=null?kp:980,bu=Math.round(Kt/yt),xu=R(()=>Kg(Cn.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Me(e,t,o){Object.defineProperty(e,t,{value:o,writable:!0,enumerable:!1})}const Xt=jn({page:0,clicks:0});let Vg=[],Ug=[];Me(Xt,"$syncUp",!0);Me(Xt,"$syncDown",!0);Me(Xt,"$paused",!1);Me(Xt,"$onSet",e=>Vg.push(e));Me(Xt,"$onPatch",e=>Ug.push(e));Me(Xt,"$patch",async()=>!1);function Su(e,t,o=!1){const a=[];let i=!1,l=!1,r,c;const p=jn(t);function u(f){a.push(f)}function d(f,_){clearTimeout(r),i=!0,p[f]=_,r=setTimeout(()=>i=!1,0)}function h(f){i||(clearTimeout(c),l=!0,Object.entries(f).forEach(([_,w])=>{p[_]=w}),c=setTimeout(()=>l=!1,0))}function m(f){let _;o?o&&window.addEventListener("storage",S=>{S&&S.key===f&&S.newValue&&h(JSON.parse(S.newValue))}):(_=new BroadcastChannel(f),_.addEventListener("message",S=>h(S.data)));function w(){!o&&_&&!l?_.postMessage(In(p)):o&&!l&&window.localStorage.setItem(f,JSON.stringify(p)),i||a.forEach(S=>S(p))}if(gn(p,w,{deep:!0}),o){const S=window.localStorage.getItem(f);S&&h(JSON.parse(S))}}return{init:m,onPatch:u,patch:d,state:p}}const{init:Gg,onPatch:Yg,patch:Vr,state:oi}=Su(Xt,{page:1,clicks:0}),ns=jn({});let Qg=[],Zg=[];Me(ns,"$syncUp",!0);Me(ns,"$syncDown",!0);Me(ns,"$paused",!1);Me(ns,"$onSet",e=>Qg.push(e));Me(ns,"$onPatch",e=>Zg.push(e));Me(ns,"$patch",async()=>!1);const{init:Jg,onPatch:Xg,patch:wu,state:_a}=Su(ns,{},!1),nf="modulepreload",ef=function(e){return"/TPSI/4/css/"+e},Ur={},$s=function(t,o,a){return!o||o.length===0?t():Promise.all(o.map(i=>{if(i=ef(i),i in Ur)return;Ur[i]=!0;const l=i.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${r}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":nf,l||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),l)return new Promise((p,u)=>{c.addEventListener("load",p),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function ge(e,t,o){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,o),o):(e[t]=o,o)}function tf(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}var Gr;const Be=typeof window<"u",sf=e=>typeof e<"u",of=e=>typeof e=="function",zu=e=>typeof e=="string",Ni=()=>+Date.now(),aa=()=>{};Be&&((Gr=window==null?void 0:window.navigator)==null?void 0:Gr.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ce(e){return typeof e=="function"?e():C(e)}function af(e,t){function o(...a){e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})}return o}const $u=e=>e();function lf(e=$u){const t=Q(!0);function o(){t.value=!1}function a(){t.value=!0}return{isActive:t,pause:o,resume:a,eventFilter:(...l)=>{t.value&&e(...l)}}}function rf(e){return e}function cf(e,t){var o;if(typeof e=="number")return e+t;const a=((o=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",i=e.slice(a.length),l=parseFloat(a)+t;return Number.isNaN(l)?e:l+i}function zt(e){return kl()?(yl(e),!0):!1}function pf(e){if(!Tn(e))return jn(e);const t=new Proxy({},{get(o,a,i){return C(Reflect.get(e.value,a,i))},set(o,a,i){return Tn(e.value[a])&&!Tn(i)?e.value[a].value=i:e.value[a]=i,!0},deleteProperty(o,a){return Reflect.deleteProperty(e.value,a)},has(o,a){return Reflect.has(e.value,a)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return jn(t)}function uf(e){return typeof e=="function"?R(e):Q(e)}var df=Object.defineProperty,mf=Object.defineProperties,hf=Object.getOwnPropertyDescriptors,Yr=Object.getOwnPropertySymbols,gf=Object.prototype.hasOwnProperty,ff=Object.prototype.propertyIsEnumerable,Qr=(e,t,o)=>t in e?df(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,_f=(e,t)=>{for(var o in t||(t={}))gf.call(t,o)&&Qr(e,o,t[o]);if(Yr)for(var o of Yr(t))ff.call(t,o)&&Qr(e,o,t[o]);return e},vf=(e,t)=>mf(e,hf(t));function kf(e){if(!Tn(e))return Ym(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const o in e.value)t[o]=Gm(()=>({get(){return e.value[o]},set(a){if(Array.isArray(e.value)){const i=[...e.value];i[o]=a,e.value=i}else{const i=vf(_f({},e.value),{[o]:a});Object.setPrototypeOf(i,e.value),e.value=i}}}));return t}function yf(e,t=!0){Jt()?Xp(e):t?e():Xn(e)}function Cu(e,t=!0){Jt()?zs(e):t?e():Xn(e)}function bf(e,t=1e3,o={}){const{immediate:a=!0,immediateCallback:i=!1}=o;let l=null;const r=Q(!1);function c(){l&&(clearInterval(l),l=null)}function p(){r.value=!1,c()}function u(){C(t)<=0||(r.value=!0,i&&e(),c(),l=setInterval(e,ce(t)))}if(a&&Be&&u(),Tn(t)){const d=gn(t,()=>{r.value&&Be&&u()});zt(d)}return zt(p),{isActive:r,pause:p,resume:u}}function xf(e,t,o={}){const{immediate:a=!0}=o,i=Q(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){i.value=!1,r()}function p(...u){r(),i.value=!0,l=setTimeout(()=>{i.value=!1,l=null,e(...u)},ce(t))}return a&&(i.value=!0,Be&&p()),zt(c),{isPending:i,start:p,stop:c}}function Iu(e=!1,t={}){const{truthyValue:o=!0,falsyValue:a=!1}=t,i=Tn(e),l=Q(e);function r(c){if(arguments.length)return l.value=c,l.value;{const p=ce(o);return l.value=l.value===p?ce(a):p,l.value}}return i?r:[l,r]}var Zr=Object.getOwnPropertySymbols,Sf=Object.prototype.hasOwnProperty,wf=Object.prototype.propertyIsEnumerable,zf=(e,t)=>{var o={};for(var a in e)Sf.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&Zr)for(var a of Zr(e))t.indexOf(a)<0&&wf.call(e,a)&&(o[a]=e[a]);return o};function $f(e,t,o={}){const a=o,{eventFilter:i=$u}=a,l=zf(a,["eventFilter"]);return gn(e,af(i,t),l)}var Cf=Object.defineProperty,If=Object.defineProperties,Tf=Object.getOwnPropertyDescriptors,va=Object.getOwnPropertySymbols,Tu=Object.prototype.hasOwnProperty,Eu=Object.prototype.propertyIsEnumerable,Jr=(e,t,o)=>t in e?Cf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Ef=(e,t)=>{for(var o in t||(t={}))Tu.call(t,o)&&Jr(e,o,t[o]);if(va)for(var o of va(t))Eu.call(t,o)&&Jr(e,o,t[o]);return e},Mf=(e,t)=>If(e,Tf(t)),Lf=(e,t)=>{var o={};for(var a in e)Tu.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&va)for(var a of va(e))t.indexOf(a)<0&&Eu.call(e,a)&&(o[a]=e[a]);return o};function Pf(e,t,o={}){const a=o,{eventFilter:i}=a,l=Lf(a,["eventFilter"]),{eventFilter:r,pause:c,resume:p,isActive:u}=lf(i);return{stop:$f(e,t,Mf(Ef({},l),{eventFilter:r})),pause:c,resume:p,isActive:u}}function ft(e){var t;const o=ce(e);return(t=o==null?void 0:o.$el)!=null?t:o}const de=Be?window:void 0,Of=Be?window.document:void 0,Af=Be?window.navigator:void 0;function Ln(...e){let t,o,a,i;if(zu(e[0])?([o,a,i]=e,t=de):[t,o,a,i]=e,!t)return aa;let l=aa;const r=gn(()=>ft(t),p=>{l(),p&&(p.addEventListener(o,a,i),l=()=>{p.removeEventListener(o,a,i),l=aa})},{immediate:!0,flush:"post"}),c=()=>{r(),l()};return zt(c),c}function Rf(e,t,o={}){const{window:a=de,ignore:i,capture:l=!0,detectIframe:r=!1}=o;if(!a)return;const c=Q(!0);let p;const u=m=>{a.clearTimeout(p);const f=ft(e),_=m.composedPath();!f||f===m.target||_.includes(f)||!c.value||i&&i.length>0&&i.some(w=>{const S=ft(w);return S&&(m.target===S||_.includes(S))})||t(m)},d=[Ln(a,"click",u,{passive:!0,capture:l}),Ln(a,"pointerdown",m=>{const f=ft(e);c.value=!!f&&!m.composedPath().includes(f)},{passive:!0}),Ln(a,"pointerup",m=>{if(m.button===0){const f=m.composedPath();m.composedPath=()=>f,p=a.setTimeout(()=>u(m),50)}},{passive:!0}),r&&Ln(a,"blur",m=>{var f;const _=ft(e);((f=document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(_!=null&&_.contains(document.activeElement))&&t(m)})].filter(Boolean);return()=>d.forEach(m=>m())}const Ff=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Df(e,t,o={}){const{target:a=de,eventName:i="keydown",passive:l=!1}=o,r=Ff(e);return Ln(a,i,p=>{r(p)&&t(p)},l)}function Hf(e={}){const{window:t=de}=e,o=Q(0);return t&&(Ln(t,"blur",()=>o.value+=1,!0),Ln(t,"focus",()=>o.value+=1,!0)),R(()=>(o.value,t==null?void 0:t.document.activeElement))}function Ba(e,t=!1){const o=Q(),a=()=>o.value=Boolean(e());return a(),Cu(a,t),o}function ia(e,t={}){const{window:o=de}=t,a=Ba(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let i;const l=Q(!1),r=()=>{!a.value||(i||(i=o.matchMedia(e)),l.value=i.matches)};return yf(()=>{r(),i&&("addEventListener"in i?i.addEventListener("change",r):i.addListener(r),zt(()=>{"removeEventListener"in i?i.removeEventListener("change",r):i.removeListener(r)}))}),l}const Nf={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var jf=Object.defineProperty,Xr=Object.getOwnPropertySymbols,Bf=Object.prototype.hasOwnProperty,qf=Object.prototype.propertyIsEnumerable,nc=(e,t,o)=>t in e?jf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Wf=(e,t)=>{for(var o in t||(t={}))Bf.call(t,o)&&nc(e,o,t[o]);if(Xr)for(var o of Xr(t))qf.call(t,o)&&nc(e,o,t[o]);return e};function Kf(e,t={}){function o(c,p){let u=e[c];return p!=null&&(u=cf(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:a=de}=t;function i(c){return a?a.matchMedia(c).matches:!1}const l=c=>ia(`(min-width: ${o(c)})`,t),r=Object.keys(e).reduce((c,p)=>(Object.defineProperty(c,p,{get:()=>l(p),enumerable:!0,configurable:!0}),c),{});return Wf({greater:l,smaller(c){return ia(`(max-width: ${o(c,-.1)})`,t)},between(c,p){return ia(`(min-width: ${o(c)}) and (max-width: ${o(p,-.1)})`,t)},isGreater(c){return i(`(min-width: ${o(c)})`)},isSmaller(c){return i(`(max-width: ${o(c,-.1)})`)},isInBetween(c,p){return i(`(min-width: ${o(c)}) and (max-width: ${o(p,-.1)})`)}},r)}function Vf(e={}){const{navigator:t=Af,read:o=!1,source:a,copiedDuring:i=1500}=e,l=["copy","cut"],r=Ba(()=>t&&"clipboard"in t),c=Q(""),p=Q(!1),u=xf(()=>p.value=!1,i);function d(){t.clipboard.readText().then(m=>{c.value=m})}if(r.value&&o)for(const m of l)Ln(m,d);async function h(m=ce(a)){r.value&&m!=null&&(await t.clipboard.writeText(m),c.value=m,p.value=!0,u.start())}return{isSupported:r,text:c,copied:p,copy:h}}const ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bi="__vueuse_ssr_handlers__";ji[Bi]=ji[Bi]||{};const Uf=ji[Bi];function Gf(e,t){return Uf[e]||t}function Yf(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var Qf=Object.defineProperty,ec=Object.getOwnPropertySymbols,Zf=Object.prototype.hasOwnProperty,Jf=Object.prototype.propertyIsEnumerable,tc=(e,t,o)=>t in e?Qf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,sc=(e,t)=>{for(var o in t||(t={}))Zf.call(t,o)&&tc(e,o,t[o]);if(ec)for(var o of ec(t))Jf.call(t,o)&&tc(e,o,t[o]);return e};const Xf={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function We(e,t,o,a={}){var i;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:d,window:h=de,eventFilter:m,onError:f=Y=>{console.error(Y)}}=a,_=(d?je:Q)(t);if(!o)try{o=Gf("getDefaultStorage",()=>{var Y;return(Y=de)==null?void 0:Y.localStorage})()}catch(Y){f(Y)}if(!o)return _;const w=ce(t),S=Yf(w),O=(i=a.serializer)!=null?i:Xf[S],{pause:L,resume:M}=Pf(_,()=>A(_.value),{flush:l,deep:r,eventFilter:m});return h&&c&&Ln(h,"storage",q),q(),_;function A(Y){try{Y==null?o.removeItem(e):o.setItem(e,O.write(Y))}catch(an){f(an)}}function K(Y){if(!(Y&&Y.key!==e)){L();try{const an=Y?Y.newValue:o.getItem(e);if(an==null)return p&&w!==null&&o.setItem(e,O.write(w)),w;if(!Y&&u){const dn=O.read(an);return of(u)?u(dn,w):S==="object"&&!Array.isArray(dn)?sc(sc({},w),dn):dn}else return typeof an!="string"?an:O.read(an)}catch(an){f(an)}finally{M()}}}function q(Y){Y&&Y.key!==e||(_.value=K(Y))}}function n_(e){return ia("(prefers-color-scheme: dark)",e)}var e_=Object.defineProperty,t_=Object.defineProperties,s_=Object.getOwnPropertyDescriptors,oc=Object.getOwnPropertySymbols,o_=Object.prototype.hasOwnProperty,a_=Object.prototype.propertyIsEnumerable,ac=(e,t,o)=>t in e?e_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,i_=(e,t)=>{for(var o in t||(t={}))o_.call(t,o)&&ac(e,o,t[o]);if(oc)for(var o of oc(t))a_.call(t,o)&&ac(e,o,t[o]);return e},l_=(e,t)=>t_(e,s_(t));function R9(e,t={}){var o,a;const i=(o=t.draggingElement)!=null?o:de,l=Q((a=ce(t.initialValue))!=null?a:{x:0,y:0}),r=Q(),c=m=>t.pointerTypes?t.pointerTypes.includes(m.pointerType):!0,p=m=>{ce(t.preventDefault)&&m.preventDefault(),ce(t.stopPropagation)&&m.stopPropagation()},u=m=>{var f;if(!c(m)||ce(t.exact)&&m.target!==ce(e))return;const _=ce(e).getBoundingClientRect(),w={x:m.pageX-_.left,y:m.pageY-_.top};((f=t.onStart)==null?void 0:f.call(t,w,m))!==!1&&(r.value=w,p(m))},d=m=>{var f;!c(m)||!r.value||(l.value={x:m.pageX-r.value.x,y:m.pageY-r.value.y},(f=t.onMove)==null||f.call(t,l.value,m),p(m))},h=m=>{var f;!c(m)||!r.value||(r.value=void 0,(f=t.onEnd)==null||f.call(t,l.value,m),p(m))};return Be&&(Ln(e,"pointerdown",u,!0),Ln(i,"pointermove",d,!0),Ln(i,"pointerup",h,!0)),l_(i_({},kf(l)),{position:l,isDragging:R(()=>!!r.value),style:R(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var ic=Object.getOwnPropertySymbols,r_=Object.prototype.hasOwnProperty,c_=Object.prototype.propertyIsEnumerable,p_=(e,t)=>{var o={};for(var a in e)r_.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&ic)for(var a of ic(e))t.indexOf(a)<0&&c_.call(e,a)&&(o[a]=e[a]);return o};function u_(e,t,o={}){const a=o,{window:i=de}=a,l=p_(a,["window"]);let r;const c=Ba(()=>i&&"ResizeObserver"in i),p=()=>{r&&(r.disconnect(),r=void 0)},u=gn(()=>ft(e),h=>{p(),c.value&&i&&h&&(r=new ResizeObserver(t),r.observe(h,l))},{immediate:!0,flush:"post"}),d=()=>{p(),u()};return zt(d),{isSupported:c,stop:d}}function d_(e,t={}){const{immediate:o=!0,window:a=de}=t,i=Q(!1);let l=null;function r(){!i.value||!a||(e(),l=a.requestAnimationFrame(r))}function c(){!i.value&&a&&(i.value=!0,r())}function p(){i.value=!1,l!=null&&a&&(a.cancelAnimationFrame(l),l=null)}return o&&c(),zt(p),{isActive:i,pause:p,resume:c}}function m_(e,t={width:0,height:0},o={}){const a=Q(t.width),i=Q(t.height);return u_(e,([l])=>{a.value=l.contentRect.width,i.value=l.contentRect.height},o),gn(()=>ft(e),l=>{a.value=l?t.width:0,i.value=l?t.height:0}),{width:a,height:i}}const lc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function h_(e,t={}){const{document:o=Of,autoExit:a=!1}=t,i=e||(o==null?void 0:o.querySelector("html")),l=Q(!1);let r=lc[0];const c=Ba(()=>{if(o){for(const w of lc)if(w[1]in o)return r=w,!0}else return!1;return!1}),[p,u,d,,h]=r;async function m(){!c.value||(o!=null&&o[d]&&await o[u](),l.value=!1)}async function f(){if(!c.value)return;await m();const w=ft(i);w&&(await w[p](),l.value=!0)}async function _(){l.value?await m():await f()}return o&&Ln(o,h,()=>{l.value=!!(o!=null&&o[d])},!1),a&&zt(m),{isSupported:c,isFullscreen:l,enter:f,exit:m,toggle:_}}const g_={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function f_(e={}){const{reactive:t=!1,target:o=de,aliasMap:a=g_,passive:i=!0,onEventFired:l=aa}=e,r=jn(new Set),c={toJSON(){return{}},current:r},p=t?jn(c):c,u=new Set,d=new Set;function h(w,S){w in p&&(t?p[w]=S:p[w].value=S)}function m(){for(const w of d)h(w,!1)}function f(w,S){var O,L;const M=(O=w.key)==null?void 0:O.toLowerCase(),K=[(L=w.code)==null?void 0:L.toLowerCase(),M].filter(Boolean);M&&(S?r.add(M):r.delete(M));for(const q of K)d.add(q),h(q,S);M==="meta"&&!S?(u.forEach(q=>{r.delete(q),h(q,!1)}),u.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&S&&[...r,...K].forEach(q=>u.add(q))}Ln(o,"keydown",w=>(f(w,!0),l(w)),{passive:i}),Ln(o,"keyup",w=>(f(w,!1),l(w)),{passive:i}),Ln("blur",m,{passive:!0}),Ln("focus",m,{passive:!0});const _=new Proxy(p,{get(w,S,O){if(typeof S!="string")return Reflect.get(w,S,O);if(S=S.toLowerCase(),S in a&&(S=a[S]),!(S in p))if(/[+_-]/.test(S)){const M=S.split(/[+_-]/g).map(A=>A.trim());p[S]=R(()=>M.every(A=>C(_[A])))}else p[S]=Q(!1);const L=Reflect.get(w,S,O);return t?C(L):L}});return _}function F9(e={}){const{type:t="page",touch:o=!0,resetOnTouchEnds:a=!1,initialValue:i={x:0,y:0},window:l=de,eventFilter:r}=e,c=Q(i.x),p=Q(i.y),u=Q(null),d=w=>{t==="page"?(c.value=w.pageX,p.value=w.pageY):t==="client"&&(c.value=w.clientX,p.value=w.clientY),u.value="mouse"},h=()=>{c.value=i.x,p.value=i.y},m=w=>{if(w.touches.length>0){const S=w.touches[0];t==="page"?(c.value=S.pageX,p.value=S.pageY):t==="client"&&(c.value=S.clientX,p.value=S.clientY),u.value="touch"}},f=w=>r===void 0?d(w):r(()=>d(w),{}),_=w=>r===void 0?m(w):r(()=>m(w),{});return l&&(Ln(l,"mousemove",f,{passive:!0}),Ln(l,"dragover",f,{passive:!0}),o&&(Ln(l,"touchstart",_,{passive:!0}),Ln(l,"touchmove",_,{passive:!0}),a&&Ln(l,"touchend",h,{passive:!0}))),{x:c,y:p,sourceType:u}}var it;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(it||(it={}));function __(e,t={}){const o=uf(e),{threshold:a=50,onSwipe:i,onSwipeEnd:l,onSwipeStart:r}=t,c=jn({x:0,y:0}),p=(q,Y)=>{c.x=q,c.y=Y},u=jn({x:0,y:0}),d=(q,Y)=>{u.x=q,u.y=Y},h=R(()=>c.x-u.x),m=R(()=>c.y-u.y),{max:f,abs:_}=Math,w=R(()=>f(_(h.value),_(m.value))>=a),S=Q(!1),O=Q(!1),L=R(()=>w.value?_(h.value)>_(m.value)?h.value>0?it.LEFT:it.RIGHT:m.value>0?it.UP:it.DOWN:it.NONE),M=q=>t.pointerTypes?t.pointerTypes.includes(q.pointerType):!0,A=[Ln(e,"pointerdown",q=>{var Y,an;if(!M(q))return;O.value=!0,(an=(Y=o.value)==null?void 0:Y.style)==null||an.setProperty("touch-action","none");const dn=q.target;dn==null||dn.setPointerCapture(q.pointerId);const{clientX:bn,clientY:wn}=q;p(bn,wn),d(bn,wn),r==null||r(q)}),Ln(e,"pointermove",q=>{if(!M(q)||!O.value)return;const{clientX:Y,clientY:an}=q;d(Y,an),!S.value&&w.value&&(S.value=!0),S.value&&(i==null||i(q))}),Ln(e,"pointerup",q=>{var Y,an;!M(q)||(S.value&&(l==null||l(q,L.value)),O.value=!1,S.value=!1,(an=(Y=o.value)==null?void 0:Y.style)==null||an.setProperty("touch-action","initial"))})],K=()=>A.forEach(q=>q());return{isSwiping:ps(S),direction:ps(L),posStart:ps(c),posEnd:ps(u),distanceX:h,distanceY:m,stop:K}}var v_=Object.defineProperty,rc=Object.getOwnPropertySymbols,k_=Object.prototype.hasOwnProperty,y_=Object.prototype.propertyIsEnumerable,cc=(e,t,o)=>t in e?v_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b_=(e,t)=>{for(var o in t||(t={}))k_.call(t,o)&&cc(e,o,t[o]);if(rc)for(var o of rc(t))y_.call(t,o)&&cc(e,o,t[o]);return e};function D9(e={}){const{controls:t=!1,offset:o=0,immediate:a=!0,interval:i="requestAnimationFrame"}=e,l=Q(Ni()+o),r=()=>l.value=Ni()+o,c=i==="requestAnimationFrame"?d_(r,{immediate:a}):bf(r,i,{immediate:a});return t?b_({timestamp:l},c):l}var x_=Object.defineProperty,pc=Object.getOwnPropertySymbols,S_=Object.prototype.hasOwnProperty,w_=Object.prototype.propertyIsEnumerable,uc=(e,t,o)=>t in e?x_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,z_=(e,t)=>{for(var o in t||(t={}))S_.call(t,o)&&uc(e,o,t[o]);if(pc)for(var o of pc(t))w_.call(t,o)&&uc(e,o,t[o]);return e};const $_={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};z_({linear:rf},$_);function Ye(e,t,o,a={}){var i,l,r;const{passive:c=!1,eventName:p,deep:u=!1,defaultValue:d}=a,h=Jt(),m=o||(h==null?void 0:h.emit)||((i=h==null?void 0:h.$emit)==null?void 0:i.bind(h))||((r=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(h==null?void 0:h.proxy));let f=p;t||(t="modelValue"),f=p||f||`update:${t.toString()}`;const _=()=>sf(e[t])?e[t]:d;if(c){const w=Q(_());return gn(()=>e[t],S=>w.value=S),gn(w,S=>{(S!==e[t]||u)&&m(f,S)},{deep:u}),w}else return R({get(){return _()},set(w){m(f,w)}})}function H9({window:e=de}={}){if(!e)return Q(!1);const t=Q(e.document.hasFocus());return Ln(e,"blur",()=>{t.value=!1}),Ln(e,"focus",()=>{t.value=!0}),t}function C_(e={}){const{window:t=de,initialWidth:o=1/0,initialHeight:a=1/0,listenOrientation:i=!0}=e,l=Q(o),r=Q(a),c=()=>{t&&(l.value=t.innerWidth,r.value=t.innerHeight)};return c(),Cu(c),Ln("resize",c,{passive:!0}),i&&Ln("orientationchange",c,{passive:!0}),{width:l,height:r}}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof window<"u";function I_(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Rn=Object.assign;function ai(e,t){const o={};for(const a in t){const i=t[a];o[a]=qe(i)?i.map(e):e(i)}return o}const io=()=>{},qe=Array.isArray,T_=/\/$/,E_=e=>e.replace(T_,"");function ii(e,t,o="/"){let a,i={},l="",r="";const c=t.indexOf("#");let p=t.indexOf("?");return c<p&&c>=0&&(p=-1),p>-1&&(a=t.slice(0,p),l=t.slice(p+1,c>-1?c:t.length),i=e(l)),c>-1&&(a=a||t.slice(0,c),r=t.slice(c,t.length)),a=O_(a!=null?a:t,o),{fullPath:a+(l&&"?")+l+r,path:a,query:i,hash:r}}function M_(e,t){const o=t.query?e(t.query):"";return t.path+(o&&"?")+o+(t.hash||"")}function dc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function L_(e,t,o){const a=t.matched.length-1,i=o.matched.length-1;return a>-1&&a===i&&ys(t.matched[a],o.matched[i])&&Mu(t.params,o.params)&&e(t.query)===e(o.query)&&t.hash===o.hash}function ys(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Mu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(!P_(e[o],t[o]))return!1;return!0}function P_(e,t){return qe(e)?mc(e,t):qe(t)?mc(t,e):e===t}function mc(e,t){return qe(t)?e.length===t.length&&e.every((o,a)=>o===t[a]):e.length===1&&e[0]===t}function O_(e,t){if(e.startsWith("/"))return e;if(!e)return t;const o=t.split("/"),a=e.split("/");let i=o.length-1,l,r;for(l=0;l<a.length;l++)if(r=a[l],r!==".")if(r==="..")i>1&&i--;else break;return o.slice(0,i).join("/")+"/"+a.slice(l-(l===a.length?1:0)).join("/")}var bo;(function(e){e.pop="pop",e.push="push"})(bo||(bo={}));var lo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(lo||(lo={}));function A_(e){if(!e)if(cs){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),E_(e)}const R_=/^[^#]+#/;function F_(e,t){return e.replace(R_,"#")+t}function D_(e,t){const o=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-o.left-(t.left||0),top:a.top-o.top-(t.top||0)}}const qa=()=>({left:window.pageXOffset,top:window.pageYOffset});function H_(e){let t;if("el"in e){const o=e.el,a=typeof o=="string"&&o.startsWith("#"),i=typeof o=="string"?a?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!i)return;t=D_(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function hc(e,t){return(history.state?history.state.position-t:-1)+e}const qi=new Map;function N_(e,t){qi.set(e,t)}function j_(e){const t=qi.get(e);return qi.delete(e),t}let B_=()=>location.protocol+"//"+location.host;function Lu(e,t){const{pathname:o,search:a,hash:i}=t,l=e.indexOf("#");if(l>-1){let c=i.includes(e.slice(l))?e.slice(l).length:1,p=i.slice(c);return p[0]!=="/"&&(p="/"+p),dc(p,"")}return dc(o,e)+a+i}function q_(e,t,o,a){let i=[],l=[],r=null;const c=({state:m})=>{const f=Lu(e,location),_=o.value,w=t.value;let S=0;if(m){if(o.value=f,t.value=m,r&&r===_){r=null;return}S=w?m.position-w.position:0}else a(f);i.forEach(O=>{O(o.value,_,{delta:S,type:bo.pop,direction:S?S>0?lo.forward:lo.back:lo.unknown})})};function p(){r=o.value}function u(m){i.push(m);const f=()=>{const _=i.indexOf(m);_>-1&&i.splice(_,1)};return l.push(f),f}function d(){const{history:m}=window;!m.state||m.replaceState(Rn({},m.state,{scroll:qa()}),"")}function h(){for(const m of l)m();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:p,listen:u,destroy:h}}function gc(e,t,o,a=!1,i=!1){return{back:e,current:t,forward:o,replaced:a,position:window.history.length,scroll:i?qa():null}}function W_(e){const{history:t,location:o}=window,a={value:Lu(e,o)},i={value:t.state};i.value||l(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(p,u,d){const h=e.indexOf("#"),m=h>-1?(o.host&&document.querySelector("base")?e:e.slice(h))+p:B_()+e+p;try{t[d?"replaceState":"pushState"](u,"",m),i.value=u}catch(f){console.error(f),o[d?"replace":"assign"](m)}}function r(p,u){const d=Rn({},t.state,gc(i.value.back,p,i.value.forward,!0),u,{position:i.value.position});l(p,d,!0),a.value=p}function c(p,u){const d=Rn({},i.value,t.state,{forward:p,scroll:qa()});l(d.current,d,!0);const h=Rn({},gc(a.value,p,null),{position:d.position+1},u);l(p,h,!1),a.value=p}return{location:a,state:i,push:c,replace:r}}function K_(e){e=A_(e);const t=W_(e),o=q_(e,t.state,t.location,t.replace);function a(l,r=!0){r||o.pauseListeners(),history.go(l)}const i=Rn({location:"",base:e,go:a,createHref:F_.bind(null,e)},t,o);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function V_(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),K_(e)}function U_(e){return typeof e=="string"||e&&typeof e=="object"}function Pu(e){return typeof e=="string"||typeof e=="symbol"}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ou=Symbol("");var fc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(fc||(fc={}));function bs(e,t){return Rn(new Error,{type:e,[Ou]:!0},t)}function tt(e,t){return e instanceof Error&&Ou in e&&(t==null||!!(e.type&t))}const _c="[^/]+?",G_={sensitive:!1,strict:!1,start:!0,end:!0},Y_=/[.+*?^${}()[\]/\\]/g;function Q_(e,t){const o=Rn({},G_,t),a=[];let i=o.start?"^":"";const l=[];for(const u of e){const d=u.length?[]:[90];o.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const m=u[h];let f=40+(o.sensitive?.25:0);if(m.type===0)h||(i+="/"),i+=m.value.replace(Y_,"\\$&"),f+=40;else if(m.type===1){const{value:_,repeatable:w,optional:S,regexp:O}=m;l.push({name:_,repeatable:w,optional:S});const L=O||_c;if(L!==_c){f+=10;try{new RegExp(`(${L})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${_}" (${L}): `+A.message)}}let M=w?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(M=S&&u.length<2?`(?:/${M})`:"/"+M),S&&(M+="?"),i+=M,f+=20,S&&(f+=-8),w&&(f+=-20),L===".*"&&(f+=-50)}d.push(f)}a.push(d)}if(o.strict&&o.end){const u=a.length-1;a[u][a[u].length-1]+=.7000000000000001}o.strict||(i+="/?"),o.end?i+="$":o.strict&&(i+="(?:/|$)");const r=new RegExp(i,o.sensitive?"":"i");function c(u){const d=u.match(r),h={};if(!d)return null;for(let m=1;m<d.length;m++){const f=d[m]||"",_=l[m-1];h[_.name]=f&&_.repeatable?f.split("/"):f}return h}function p(u){let d="",h=!1;for(const m of e){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const f of m)if(f.type===0)d+=f.value;else if(f.type===1){const{value:_,repeatable:w,optional:S}=f,O=_ in u?u[_]:"";if(qe(O)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const L=qe(O)?O.join("/"):O;if(!L)if(S)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);d+=L}}return d||"/"}return{re:r,score:a,keys:l,parse:c,stringify:p}}function Z_(e,t){let o=0;for(;o<e.length&&o<t.length;){const a=t[o]-e[o];if(a)return a;o++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function J_(e,t){let o=0;const a=e.score,i=t.score;for(;o<a.length&&o<i.length;){const l=Z_(a[o],i[o]);if(l)return l;o++}if(Math.abs(i.length-a.length)===1){if(vc(a))return 1;if(vc(i))return-1}return i.length-a.length}function vc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const X_={type:0,value:""},n1=/[a-zA-Z0-9_]/;function e1(e){if(!e)return[[]];if(e==="/")return[[X_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${o})/"${u}": ${f}`)}let o=0,a=o;const i=[];let l;function r(){l&&i.push(l),l=[]}let c=0,p,u="",d="";function h(){!u||(o===0?l.push({type:0,value:u}):o===1||o===2||o===3?(l.length>1&&(p==="*"||p==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:d,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=p}for(;c<e.length;){if(p=e[c++],p==="\\"&&o!==2){a=o,o=4;continue}switch(o){case 0:p==="/"?(u&&h(),r()):p===":"?(h(),o=1):m();break;case 4:m(),o=a;break;case 1:p==="("?o=2:n1.test(p)?m():(h(),o=0,p!=="*"&&p!=="?"&&p!=="+"&&c--);break;case 2:p===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+p:o=3:d+=p;break;case 3:h(),o=0,p!=="*"&&p!=="?"&&p!=="+"&&c--,d="";break;default:t("Unknown state");break}}return o===2&&t(`Unfinished custom RegExp for param "${u}"`),h(),r(),i}function t1(e,t,o){const a=Q_(e1(e.path),o),i=Rn(a,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function s1(e,t){const o=[],a=new Map;t=yc({strict:!1,end:!0,sensitive:!1},t);function i(d){return a.get(d)}function l(d,h,m){const f=!m,_=a1(d);_.aliasOf=m&&m.record;const w=yc(t,d),S=[_];if("alias"in d){const M=typeof d.alias=="string"?[d.alias]:d.alias;for(const A of M)S.push(Rn({},_,{components:m?m.record.components:_.components,path:A,aliasOf:m?m.record:_}))}let O,L;for(const M of S){const{path:A}=M;if(h&&A[0]!=="/"){const K=h.record.path,q=K[K.length-1]==="/"?"":"/";M.path=h.record.path+(A&&q+A)}if(O=t1(M,h,w),m?m.alias.push(O):(L=L||O,L!==O&&L.alias.push(O),f&&d.name&&!kc(O)&&r(d.name)),_.children){const K=_.children;for(let q=0;q<K.length;q++)l(K[q],O,m&&m.children[q])}m=m||O,p(O)}return L?()=>{r(L)}:io}function r(d){if(Pu(d)){const h=a.get(d);h&&(a.delete(d),o.splice(o.indexOf(h),1),h.children.forEach(r),h.alias.forEach(r))}else{const h=o.indexOf(d);h>-1&&(o.splice(h,1),d.record.name&&a.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return o}function p(d){let h=0;for(;h<o.length&&J_(d,o[h])>=0&&(d.record.path!==o[h].record.path||!Au(d,o[h]));)h++;o.splice(h,0,d),d.record.name&&!kc(d)&&a.set(d.record.name,d)}function u(d,h){let m,f={},_,w;if("name"in d&&d.name){if(m=a.get(d.name),!m)throw bs(1,{location:d});w=m.record.name,f=Rn(o1(h.params,m.keys.filter(L=>!L.optional).map(L=>L.name)),d.params),_=m.stringify(f)}else if("path"in d)_=d.path,m=o.find(L=>L.re.test(_)),m&&(f=m.parse(_),w=m.record.name);else{if(m=h.name?a.get(h.name):o.find(L=>L.re.test(h.path)),!m)throw bs(1,{location:d,currentLocation:h});w=m.record.name,f=Rn({},h.params,d.params),_=m.stringify(f)}const S=[];let O=m;for(;O;)S.unshift(O.record),O=O.parent;return{name:w,path:_,params:f,matched:S,meta:l1(S)}}return e.forEach(d=>l(d)),{addRoute:l,resolve:u,removeRoute:r,getRoutes:c,getRecordMatcher:i}}function o1(e,t){const o={};for(const a of t)a in e&&(o[a]=e[a]);return o}function a1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:i1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function i1(e){const t={},o=e.props||!1;if("component"in e)t.default=o;else for(const a in e.components)t[a]=typeof o=="boolean"?o:o[a];return t}function kc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function l1(e){return e.reduce((t,o)=>Rn(t,o.meta),{})}function yc(e,t){const o={};for(const a in e)o[a]=a in t?t[a]:e[a];return o}function Au(e,t){return t.children.some(o=>o===e||Au(e,o))}const Ru=/#/g,r1=/&/g,c1=/\//g,p1=/=/g,u1=/\?/g,Fu=/\+/g,d1=/%5B/g,m1=/%5D/g,Du=/%5E/g,h1=/%60/g,Hu=/%7B/g,g1=/%7C/g,Nu=/%7D/g,f1=/%20/g;function Rl(e){return encodeURI(""+e).replace(g1,"|").replace(d1,"[").replace(m1,"]")}function _1(e){return Rl(e).replace(Hu,"{").replace(Nu,"}").replace(Du,"^")}function Wi(e){return Rl(e).replace(Fu,"%2B").replace(f1,"+").replace(Ru,"%23").replace(r1,"%26").replace(h1,"`").replace(Hu,"{").replace(Nu,"}").replace(Du,"^")}function v1(e){return Wi(e).replace(p1,"%3D")}function k1(e){return Rl(e).replace(Ru,"%23").replace(u1,"%3F")}function y1(e){return e==null?"":k1(e).replace(c1,"%2F")}function ka(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function b1(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<a.length;++i){const l=a[i].replace(Fu," "),r=l.indexOf("="),c=ka(r<0?l:l.slice(0,r)),p=r<0?null:ka(l.slice(r+1));if(c in t){let u=t[c];qe(u)||(u=t[c]=[u]),u.push(p)}else t[c]=p}return t}function bc(e){let t="";for(let o in e){const a=e[o];if(o=v1(o),a==null){a!==void 0&&(t+=(t.length?"&":"")+o);continue}(qe(a)?a.map(l=>l&&Wi(l)):[a&&Wi(a)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+o,l!=null&&(t+="="+l))})}return t}function x1(e){const t={};for(const o in e){const a=e[o];a!==void 0&&(t[o]=qe(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return t}const S1=Symbol(""),xc=Symbol(""),Fl=Symbol(""),ju=Symbol(""),Ki=Symbol("");function Vs(){let e=[];function t(a){return e.push(a),()=>{const i=e.indexOf(a);i>-1&&e.splice(i,1)}}function o(){e=[]}return{add:t,list:()=>e,reset:o}}function gt(e,t,o,a,i){const l=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const p=h=>{h===!1?c(bs(4,{from:o,to:t})):h instanceof Error?c(h):U_(h)?c(bs(2,{from:t,to:h})):(l&&a.enterCallbacks[i]===l&&typeof h=="function"&&l.push(h),r())},u=e.call(a&&a.instances[i],t,o,p);let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(h=>c(h))})}function li(e,t,o,a){const i=[];for(const l of e)for(const r in l.components){let c=l.components[r];if(!(t!=="beforeRouteEnter"&&!l.instances[r]))if(w1(c)){const u=(c.__vccOpts||c)[t];u&&i.push(gt(u,o,a,l,r))}else{let p=c();i.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=I_(u)?u.default:u;l.components[r]=d;const m=(d.__vccOpts||d)[t];return m&&gt(m,o,a,l,r)()}))}}return i}function w1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Sc(e){const t=x(Fl),o=x(ju),a=R(()=>t.resolve(C(e.to))),i=R(()=>{const{matched:p}=a.value,{length:u}=p,d=p[u-1],h=o.matched;if(!d||!h.length)return-1;const m=h.findIndex(ys.bind(null,d));if(m>-1)return m;const f=wc(p[u-2]);return u>1&&wc(d)===f&&h[h.length-1].path!==f?h.findIndex(ys.bind(null,p[u-2])):m}),l=R(()=>i.value>-1&&I1(o.params,a.value.params)),r=R(()=>i.value>-1&&i.value===o.matched.length-1&&Mu(o.params,a.value.params));function c(p={}){return C1(p)?t[C(e.replace)?"replace":"push"](C(e.to)).catch(io):Promise.resolve()}return{route:a,href:R(()=>a.value.href),isActive:l,isExactActive:r,navigate:c}}const z1=En({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sc,setup(e,{slots:t}){const o=jn(Sc(e)),{options:a}=x(Fl),i=R(()=>({[zc(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[zc(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const l=t.default&&t.default(o);return e.custom?l:fe("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:i.value},l)}}}),$1=z1;function C1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function I1(e,t){for(const o in t){const a=t[o],i=e[o];if(typeof a=="string"){if(a!==i)return!1}else if(!qe(i)||i.length!==a.length||a.some((l,r)=>l!==i[r]))return!1}return!0}function wc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const zc=(e,t,o)=>e!=null?e:t!=null?t:o,T1=En({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:o}){const a=x(Ki),i=R(()=>e.route||a.value),l=x(xc,0),r=R(()=>{let u=C(l);const{matched:d}=i.value;let h;for(;(h=d[u])&&!h.components;)u++;return u}),c=R(()=>i.value.matched[r.value]);xe(xc,R(()=>r.value+1)),xe(S1,c),xe(Ki,i);const p=Q();return gn(()=>[p.value,c.value,e.name],([u,d,h],[m,f,_])=>{d&&(d.instances[h]=u,f&&f!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),u&&d&&(!f||!ys(d,f)||!m)&&(d.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=i.value,d=e.name,h=c.value,m=h&&h.components[d];if(!m)return $c(o.default,{Component:m,route:u});const f=h.props[d],_=f?f===!0?u.params:typeof f=="function"?f(u):f:null,S=fe(m,Rn({},_,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[d]=null)},ref:p}));return $c(o.default,{Component:S,route:u})||S}}});function $c(e,t){if(!e)return null;const o=e(t);return o.length===1?o[0]:o}const E1=T1;function M1(e){const t=s1(e.routes,e),o=e.parseQuery||b1,a=e.stringifyQuery||bc,i=e.history,l=Vs(),r=Vs(),c=Vs(),p=je(dt);let u=dt;cs&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ai.bind(null,F=>""+F),h=ai.bind(null,y1),m=ai.bind(null,ka);function f(F,X){let j,nn;return Pu(F)?(j=t.getRecordMatcher(F),nn=X):nn=F,t.addRoute(nn,j)}function _(F){const X=t.getRecordMatcher(F);X&&t.removeRoute(X)}function w(){return t.getRoutes().map(F=>F.record)}function S(F){return!!t.getRecordMatcher(F)}function O(F,X){if(X=Rn({},X||p.value),typeof F=="string"){const fn=ii(o,F,X.path),k=t.resolve({path:fn.path},X),b=i.createHref(fn.fullPath);return Rn(fn,k,{params:m(k.params),hash:ka(fn.hash),redirectedFrom:void 0,href:b})}let j;if("path"in F)j=Rn({},F,{path:ii(o,F.path,X.path).path});else{const fn=Rn({},F.params);for(const k in fn)fn[k]==null&&delete fn[k];j=Rn({},F,{params:h(F.params)}),X.params=h(X.params)}const nn=t.resolve(j,X),$n=F.hash||"";nn.params=d(m(nn.params));const Dn=M_(a,Rn({},F,{hash:_1($n),path:nn.path})),_n=i.createHref(Dn);return Rn({fullPath:Dn,hash:$n,query:a===bc?x1(F.query):F.query||{}},nn,{redirectedFrom:void 0,href:_n})}function L(F){return typeof F=="string"?ii(o,F,p.value.path):Rn({},F)}function M(F,X){if(u!==F)return bs(8,{from:X,to:F})}function A(F){return Y(F)}function K(F){return A(Rn(L(F),{replace:!0}))}function q(F){const X=F.matched[F.matched.length-1];if(X&&X.redirect){const{redirect:j}=X;let nn=typeof j=="function"?j(F):j;return typeof nn=="string"&&(nn=nn.includes("?")||nn.includes("#")?nn=L(nn):{path:nn},nn.params={}),Rn({query:F.query,hash:F.hash,params:"path"in nn?{}:F.params},nn)}}function Y(F,X){const j=u=O(F),nn=p.value,$n=F.state,Dn=F.force,_n=F.replace===!0,fn=q(j);if(fn)return Y(Rn(L(fn),{state:$n,force:Dn,replace:_n}),X||j);const k=j;k.redirectedFrom=X;let b;return!Dn&&L_(a,nn,j)&&(b=bs(16,{to:k,from:nn}),Ke(nn,nn,!0,!1)),(b?Promise.resolve(b):dn(k,nn)).catch(E=>tt(E)?tt(E,2)?E:xn(E):pn(E,k,nn)).then(E=>{if(E){if(tt(E,2))return Y(Rn({replace:_n},L(E.to),{state:$n,force:Dn}),X||k)}else E=wn(k,nn,!0,_n,$n);return bn(k,nn,E),E})}function an(F,X){const j=M(F,X);return j?Promise.reject(j):Promise.resolve()}function dn(F,X){let j;const[nn,$n,Dn]=L1(F,X);j=li(nn.reverse(),"beforeRouteLeave",F,X);for(const fn of nn)fn.leaveGuards.forEach(k=>{j.push(gt(k,F,X))});const _n=an.bind(null,F,X);return j.push(_n),ss(j).then(()=>{j=[];for(const fn of l.list())j.push(gt(fn,F,X));return j.push(_n),ss(j)}).then(()=>{j=li($n,"beforeRouteUpdate",F,X);for(const fn of $n)fn.updateGuards.forEach(k=>{j.push(gt(k,F,X))});return j.push(_n),ss(j)}).then(()=>{j=[];for(const fn of F.matched)if(fn.beforeEnter&&!X.matched.includes(fn))if(qe(fn.beforeEnter))for(const k of fn.beforeEnter)j.push(gt(k,F,X));else j.push(gt(fn.beforeEnter,F,X));return j.push(_n),ss(j)}).then(()=>(F.matched.forEach(fn=>fn.enterCallbacks={}),j=li(Dn,"beforeRouteEnter",F,X),j.push(_n),ss(j))).then(()=>{j=[];for(const fn of r.list())j.push(gt(fn,F,X));return j.push(_n),ss(j)}).catch(fn=>tt(fn,8)?fn:Promise.reject(fn))}function bn(F,X,j){for(const nn of c.list())nn(F,X,j)}function wn(F,X,j,nn,$n){const Dn=M(F,X);if(Dn)return Dn;const _n=X===dt,fn=cs?history.state:{};j&&(nn||_n?i.replace(F.fullPath,Rn({scroll:_n&&fn&&fn.scroll},$n)):i.push(F.fullPath,$n)),p.value=F,Ke(F,X,j,_n),xn()}let Nn;function Vn(){Nn||(Nn=i.listen((F,X,j)=>{if(!pt.listening)return;const nn=O(F),$n=q(nn);if($n){Y(Rn($n,{replace:!0}),nn).catch(io);return}u=nn;const Dn=p.value;cs&&N_(hc(Dn.fullPath,j.delta),qa()),dn(nn,Dn).catch(_n=>tt(_n,12)?_n:tt(_n,2)?(Y(_n.to,nn).then(fn=>{tt(fn,20)&&!j.delta&&j.type===bo.pop&&i.go(-1,!1)}).catch(io),Promise.reject()):(j.delta&&i.go(-j.delta,!1),pn(_n,nn,Dn))).then(_n=>{_n=_n||wn(nn,Dn,!1),_n&&(j.delta&&!tt(_n,8)?i.go(-j.delta,!1):j.type===bo.pop&&tt(_n,20)&&i.go(-1,!1)),bn(nn,Dn,_n)}).catch(io)}))}let te=Vs(),Pn=Vs(),ln;function pn(F,X,j){xn(F);const nn=Pn.list();return nn.length?nn.forEach($n=>$n(F,X,j)):console.error(F),Promise.reject(F)}function on(){return ln&&p.value!==dt?Promise.resolve():new Promise((F,X)=>{te.add([F,X])})}function xn(F){return ln||(ln=!F,Vn(),te.list().forEach(([X,j])=>F?j(F):X()),te.reset()),F}function Ke(F,X,j,nn){const{scrollBehavior:$n}=e;if(!cs||!$n)return Promise.resolve();const Dn=!j&&j_(hc(F.fullPath,0))||(nn||!j)&&history.state&&history.state.scroll||null;return Xn().then(()=>$n(F,X,Dn)).then(_n=>_n&&H_(_n)).catch(_n=>pn(_n,F,X))}const ie=F=>i.go(F);let Ce;const me=new Set,pt={currentRoute:p,listening:!0,addRoute:f,removeRoute:_,hasRoute:S,getRoutes:w,resolve:O,options:e,push:A,replace:K,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:Pn.add,isReady:on,install(F){const X=this;F.component("RouterLink",$1),F.component("RouterView",E1),F.config.globalProperties.$router=X,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>C(p)}),cs&&!Ce&&p.value===dt&&(Ce=!0,A(i.location).catch($n=>{}));const j={};for(const $n in dt)j[$n]=R(()=>p.value[$n]);F.provide(Fl,X),F.provide(ju,jn(j)),F.provide(Ki,p);const nn=F.unmount;me.add(F),F.unmount=function(){me.delete(F),me.size<1&&(u=dt,Nn&&Nn(),Nn=null,p.value=dt,Ce=!1,ln=!1),nn()}}};return pt}function ss(e){return e.reduce((t,o)=>t.then(()=>o()),Promise.resolve())}function L1(e,t){const o=[],a=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let r=0;r<l;r++){const c=t.matched[r];c&&(e.matched.find(u=>ys(u,c))?a.push(c):o.push(c));const p=e.matched[r];p&&(t.matched.find(u=>ys(u,p))||i.push(p))}return[o,a,i]}const ri=Q(!1),ro=Q(!1),us=Q(!1),P1=Q(!0),Vi=Kf({xs:460,...Nf}),Vt=C_(),Bu=f_(),O1=R(()=>Vt.height.value-Vt.width.value/yt>180),qu=h_(Be?document.body:null),_s=Hf(),A1=R(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=_s.value)==null?void 0:e.tagName)||"")||((t=_s.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),R1=R(()=>{var e;return["BUTTON","A"].includes(((e=_s.value)==null?void 0:e.tagName)||"")});We("slidev-camera","default");We("slidev-mic","default");const la=We("slidev-scale",0),re=We("slidev-show-overview",!1),ci=We("slidev-presenter-cursor",!0),Cc=We("slidev-show-editor",!1);We("slidev-editor-width",Be?window.innerWidth*.4:100);const Wu=Iu(re);function Ic(e,t,o,a=i=>i){return e*a(.5-t*(.5-o))}function F1(e){return[-e[0],-e[1]]}function Ae(e,t){return[e[0]+t[0],e[1]+t[1]]}function Te(e,t){return[e[0]-t[0],e[1]-t[1]]}function Oe(e,t){return[e[0]*t,e[1]*t]}function D1(e,t){return[e[0]/t,e[1]/t]}function Us(e){return[e[1],-e[0]]}function H1(e,t){return e[0]*t[0]+e[1]*t[1]}function N1(e,t){return e[0]===t[0]&&e[1]===t[1]}function j1(e){return Math.hypot(e[0],e[1])}function B1(e){return e[0]*e[0]+e[1]*e[1]}function Tc(e,t){return B1(Te(e,t))}function Ku(e){return D1(e,j1(e))}function q1(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Gs(e,t,o){let a=Math.sin(o),i=Math.cos(o),l=e[0]-t[0],r=e[1]-t[1],c=l*i-r*a,p=l*a+r*i;return[c+t[0],p+t[1]]}function Ui(e,t,o){return Ae(e,Oe(Te(t,e),o))}function Ec(e,t,o){return Ae(e,Oe(t,o))}var{min:os,PI:W1}=Math,Mc=.275,Ys=W1+1e-4;function K1(e,t={}){let{size:o=16,smoothing:a=.5,thinning:i=.5,simulatePressure:l=!0,easing:r=ln=>ln,start:c={},end:p={},last:u=!1}=t,{cap:d=!0,easing:h=ln=>ln*(2-ln)}=c,{cap:m=!0,easing:f=ln=>--ln*ln*ln+1}=p;if(e.length===0||o<=0)return[];let _=e[e.length-1].runningLength,w=c.taper===!1?0:c.taper===!0?Math.max(o,_):c.taper,S=p.taper===!1?0:p.taper===!0?Math.max(o,_):p.taper,O=Math.pow(o*a,2),L=[],M=[],A=e.slice(0,10).reduce((ln,pn)=>{let on=pn.pressure;if(l){let xn=os(1,pn.distance/o),Ke=os(1,1-xn);on=os(1,ln+(Ke-ln)*(xn*Mc))}return(ln+on)/2},e[0].pressure),K=Ic(o,i,e[e.length-1].pressure,r),q,Y=e[0].vector,an=e[0].point,dn=an,bn=an,wn=dn;for(let ln=0;ln<e.length;ln++){let{pressure:pn}=e[ln],{point:on,vector:xn,distance:Ke,runningLength:ie}=e[ln];if(ln<e.length-1&&_-ie<3)continue;if(i){if(l){let j=os(1,Ke/o),nn=os(1,1-j);pn=os(1,A+(nn-A)*(j*Mc))}K=Ic(o,i,pn,r)}else K=o/2;q===void 0&&(q=K);let Ce=ie<w?h(ie/w):1,me=_-ie<S?f((_-ie)/S):1;if(K=Math.max(.01,K*Math.min(Ce,me)),ln===e.length-1){let j=Oe(Us(xn),K);L.push(Te(on,j)),M.push(Ae(on,j));continue}let pt=e[ln+1].vector,F=H1(xn,pt);if(F<0){let j=Oe(Us(Y),K);for(let nn=1/13,$n=0;$n<=1;$n+=nn)bn=Gs(Te(on,j),on,Ys*$n),L.push(bn),wn=Gs(Ae(on,j),on,Ys*-$n),M.push(wn);an=bn,dn=wn;continue}let X=Oe(Us(Ui(pt,xn,F)),K);bn=Te(on,X),(ln<=1||Tc(an,bn)>O)&&(L.push(bn),an=bn),wn=Ae(on,X),(ln<=1||Tc(dn,wn)>O)&&(M.push(wn),dn=wn),A=pn,Y=xn}let Nn=e[0].point.slice(0,2),Vn=e.length>1?e[e.length-1].point.slice(0,2):Ae(e[0].point,[1,1]),te=[],Pn=[];if(e.length===1){if(!(w||S)||u){let ln=Ec(Nn,Ku(Us(Te(Nn,Vn))),-(q||K)),pn=[];for(let on=1/13,xn=on;xn<=1;xn+=on)pn.push(Gs(ln,Nn,Ys*2*xn));return pn}}else{if(!(w||S&&e.length===1))if(d)for(let pn=1/13,on=pn;on<=1;on+=pn){let xn=Gs(M[0],Nn,Ys*on);te.push(xn)}else{let pn=Te(L[0],M[0]),on=Oe(pn,.5),xn=Oe(pn,.51);te.push(Te(Nn,on),Te(Nn,xn),Ae(Nn,xn),Ae(Nn,on))}let ln=Us(F1(e[e.length-1].vector));if(S||w&&e.length===1)Pn.push(Vn);else if(m){let pn=Ec(Vn,ln,K);for(let on=1/29,xn=on;xn<1;xn+=on)Pn.push(Gs(pn,Vn,Ys*3*xn))}else Pn.push(Ae(Vn,Oe(ln,K)),Ae(Vn,Oe(ln,K*.99)),Te(Vn,Oe(ln,K*.99)),Te(Vn,Oe(ln,K)))}return L.concat(Pn,M.reverse(),te)}function V1(e,t={}){var o;let{streamline:a=.5,size:i=16,last:l=!1}=t;if(e.length===0)return[];let r=.15+(1-a)*.85,c=Array.isArray(e[0])?e:e.map(({x:f,y:_,pressure:w=.5})=>[f,_,w]);if(c.length===2){let f=c[1];c=c.slice(0,-1);for(let _=1;_<5;_++)c.push(Ui(c[0],f,_/4))}c.length===1&&(c=[...c,[...Ae(c[0],[1,1]),...c[0].slice(2)]]);let p=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,h=p[0],m=c.length-1;for(let f=1;f<c.length;f++){let _=l&&f===m?c[f].slice(0,2):Ui(h.point,c[f],r);if(N1(h.point,_))continue;let w=q1(_,h.point);if(d+=w,f<m&&!u){if(d<i)continue;u=!0}h={point:_,pressure:c[f][2]>=0?c[f][2]:.5,vector:Ku(Te(h.point,_)),distance:w,runningLength:d},p.push(h)}return p[0].vector=((o=p[1])==null?void 0:o.vector)||[0,0],p}function U1(e,t={}){return K1(V1(e,t),t)}var G1=()=>({events:{},emit(e,...t){let o=this.events[e]||[];for(let a=0,i=o.length;a<i;a++)o[a](...t)},on(e,t){var o;return(o=this.events[e])!=null&&o.push(t)||(this.events[e]=[t]),()=>{var a;this.events[e]=(a=this.events[e])==null?void 0:a.filter(i=>t!==i)}}});function ya(e,t){return e-t}function Y1(e){return e<0?-1:1}function ba(e){return[Math.abs(e),Y1(e)]}function Vu(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Q1=2,ot=Q1,Cs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var i;var t;const o=this.drauu.el,a=(i=this.drauu.options.coordinateScale)!=null?i:1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*a,y:(e.pageY-l.top)*a,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const r=l.matrixTransform((t=o.getScreenCTM())==null?void 0:t.inverse());return{x:r.x*a,y:r.y*a,pressure:e.pressure}}}createElement(e,t){var i;const o=document.createElementNS("http://www.w3.org/2000/svg",e),a=t?{...this.brush,...t}:this.brush;return o.setAttribute("fill",(i=a.fill)!=null?i:"transparent"),o.setAttribute("stroke",a.color),o.setAttribute("stroke-width",a.size.toString()),o.setAttribute("stroke-linecap","round"),a.dasharray&&o.setAttribute("stroke-dasharray",a.dasharray),o}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(ot))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Z1=class extends Cs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=U1(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const o=t.reduce((a,[i,l],r,c)=>{const[p,u]=c[(r+1)%c.length];return a.push(i,l,(i+p)/2,(l+u)/2),a},["M",...t[0],"Q"]);return o.push("Z"),o.map(a=>typeof a=="number"?a.toFixed(2):a).join(" ")}},J1=class extends Cs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,o]=ba(e.x-this.start.x),[a,i]=ba(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,a);t=l,a=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",a);else{const[l,r]=[this.start.x,this.start.x+t*o].sort(ya),[c,p]=[this.start.y,this.start.y+a*i].sort(ya);this.attr("cx",(l+r)/2),this.attr("cy",(c+p)/2),this.attr("rx",(r-l)/2),this.attr("ry",(p-c)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Uu(e,t){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",t),a.setAttribute("id",e),a.setAttribute("viewBox","0 -5 10 10"),a.setAttribute("refX","5"),a.setAttribute("refY","0"),a.setAttribute("markerWidth","4"),a.setAttribute("markerHeight","4"),a.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),a.appendChild(i),o.appendChild(a),o}var X1=class extends Cs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Vu(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(Uu(t,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${t})`),o}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:o}=e;if(this.shiftPressed){const a=e.x-this.start.x,i=e.y-this.start.y;if(i!==0){let l=a/i;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+i*l,o=this.start.y+i):(t=this.start.x+a,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-o),this.attr("x2",t),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",o)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},nv=class extends Cs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,o]=ba(e.x-this.start.x),[a,i]=ba(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,a);t=l,a=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-a),this.attr("width",t*2),this.attr("height",a*2);else{const[l,r]=[this.start.x,this.start.x+t*o].sort(ya),[c,p]=[this.start.y,this.start.y+a*i].sort(ya);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",p-c)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function ev(e,t){const o=e.x-t.x,a=e.y-t.y;return o*o+a*a}function tv(e,t,o){let a=t.x,i=t.y,l=o.x-a,r=o.y-i;if(l!==0||r!==0){const c=((e.x-a)*l+(e.y-i)*r)/(l*l+r*r);c>1?(a=o.x,i=o.y):c>0&&(a+=l*c,i+=r*c)}return l=e.x-a,r=e.y-i,l*l+r*r}function sv(e,t){let o=e[0];const a=[o];let i;for(let l=1,r=e.length;l<r;l++)i=e[l],ev(i,o)>t&&(a.push(i),o=i);return o!==i&&i&&a.push(i),a}function Gi(e,t,o,a,i){let l=a,r=0;for(let c=t+1;c<o;c++){const p=tv(e[c],e[t],e[o]);p>l&&(r=c,l=p)}l>a&&(r-t>1&&Gi(e,t,r,a,i),i.push(e[r]),o-r>1&&Gi(e,r,o,a,i))}function ov(e,t){const o=e.length-1,a=[e[0]];return Gi(e,0,o,t,a),a.push(e[o]),a}function Lc(e,t,o=!1){if(e.length<=2)return e;const a=t!==void 0?t*t:1;return e=o?e:sv(e,a),e=ov(e,a),e}var av=class extends Cs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Vu();const t=Uu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Lc(this.points,1,!0),this.count=0),this.attr("d",Oc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Oc(Lc(this.points,1,!0))),!e.getTotalLength()))}};function iv(e,t){const o=t.x-e.x,a=t.y-e.y;return{length:Math.sqrt(Math.pow(o,2)+Math.pow(a,2)),angle:Math.atan2(a,o)}}function Pc(e,t,o,a){const i=t||e,l=o||e,r=.2,c=iv(i,l),p=c.angle+(a?Math.PI:0),u=c.length*r,d=e.x+Math.cos(p)*u,h=e.y+Math.sin(p)*u;return{x:d,y:h}}function lv(e,t,o){const a=Pc(o[t-1],o[t-2],e),i=Pc(e,o[t-1],o[t+1],!0);return`C ${a.x.toFixed(ot)},${a.y.toFixed(ot)} ${i.x.toFixed(ot)},${i.y.toFixed(ot)} ${e.x.toFixed(ot)},${e.y.toFixed(ot)}`}function Oc(e){return e.reduce((t,o,a,i)=>a===0?`M ${o.x.toFixed(ot)},${o.y.toFixed(ot)}`:`${t} ${lv(o,a,i)}`,"")}var rv=class extends Cs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(o,a)=>{if(o&&o.length)for(let i=0;i<o.length;i++){const l=o[i];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const p=l.getPointAtLength(r*c/this.pathSubFactor),u=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:c,element:a||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const o=this.pathFragments[t],a={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,a)&&(o.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,o)=>!e.includes(o))),e.length>0}lineLineIntersect(e,t){const o=e.x1,a=e.x2,i=t.x1,l=t.x2,r=e.y1,c=e.y2,p=t.y1,u=t.y2,d=(o-a)*(p-u)-(r-c)*(i-l),h=(o*c-r*a)*(i-l)-(o-a)*(i*u-p*l),m=(o*c-r*a)*(p-u)-(r-c)*(i*u-p*l),f=(_,w,S)=>_>=w&&_<=S?!0:_>=S&&_<=w;if(d===0)return!1;{const _={x:h/d,y:m/d};return f(_.x,o,a)&&f(_.y,r,c)&&f(_.x,i,l)&&f(_.y,p,u)}}};function cv(e){return{draw:new av(e),stylus:new Z1(e),line:new X1(e),rectangle:new nv(e),ellipse:new J1(e),eraseLine:new rv(e)}}var pv=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=G1(),this._models=cv(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(t)||this.el,a=this.eventStart.bind(this),i=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",a,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",a),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function uv(e){return new pv(e)}const Yi=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Qe=We("slidev-drawing-enabled",!1),N9=We("slidev-drawing-pinned",!1),dv=Q(!1),mv=Q(!1),hv=Q(!1),xo=Q(!1),jt=pf(We("slidev-drawing-brush",{color:Yi[0],size:4,mode:"stylus"})),Ac=Q("stylus"),Gu=R(()=>Cn.drawings.syncAll||Ge.value);let So=!1;const Qs=R({get(){return Ac.value},set(e){Ac.value=e,e==="arrow"?(jt.mode="line",jt.arrowEnd=!0):(jt.mode=e,jt.arrowEnd=!1)}}),gv=jn({brush:jt,acceptsInputTypes:R(()=>Qe.value?void 0:["pen"]),coordinateTransform:!1}),pe=Ma(uv(gv));function fv(){pe.clear(),Gu.value&&wu(Yn.value,"")}function Yu(){var e;mv.value=pe.canRedo(),dv.value=pe.canUndo(),hv.value=!!((e=pe.el)!=null&&e.children.length)}function _v(e){So=!0;const t=_a[e||Yn.value];t!=null?pe.load(t):pe.clear(),So=!1}pe.on("changed",()=>{if(Yu(),!So){const e=pe.dump(),t=Yn.value;(_a[t]||"")!==e&&Gu.value&&wu(t,pe.dump())}});Xg(e=>{So=!0,e[Yn.value]!=null&&pe.load(e[Yn.value]||""),So=!1,Yu()});Xn(()=>{gn(Yn,()=>{!pe.mounted||_v()},{immediate:!0})});pe.on("start",()=>xo.value=!0);pe.on("end",()=>xo.value=!1);window.addEventListener("keydown",e=>{if(!Qe.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let o=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?pe.redo():pe.undo():e.code==="Escape"?Qe.value=!1:e.code==="KeyL"&&t?Qs.value="line":e.code==="KeyA"&&t?Qs.value="arrow":e.code==="KeyS"&&t?Qs.value="stylus":e.code==="KeyR"&&t?Qs.value="rectangle":e.code==="KeyE"&&t?Qs.value="ellipse":e.code==="KeyC"&&t?fv():e.code.startsWith("Digit")&&t&&+e.code[5]<=Yi.length?jt.color=Yi[+e.code[5]-1]:o=!1,o&&(e.preventDefault(),e.stopPropagation())},!1);function Un(...e){return R(()=>e.every(t=>ce(t)))}function ke(e){return R(()=>!ce(e))}const Rc=n_(),pi=We("slidev-color-schema","auto"),Qi=R(()=>Cn.colorSchema!=="auto"),Dl=R({get(){return Qi.value?Cn.colorSchema==="dark":pi.value==="auto"?Rc.value:pi.value==="dark"},set(e){Qi.value||(pi.value=e===Rc.value?"auto":e?"dark":"light")}}),Qu=Iu(Dl);Be&&gn(Dl,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const ra=Q(1),ca=R(()=>Gn.length-1),we=Q(0),Hl=Q(0);function vv(){we.value>ra.value&&(we.value-=1)}function kv(){we.value<ca.value&&(we.value+=1)}function yv(){if(we.value>ra.value){let e=we.value-Hl.value;e<ra.value&&(e=ra.value),we.value=e}}function bv(){if(we.value<ca.value){let e=we.value+Hl.value;e>ca.value&&(e=ca.value),we.value=e}}function xv(){const{escape:e,space:t,shift:o,left:a,right:i,up:l,down:r,enter:c,d:p,g:u,o:d}=Bu,h=[{name:"next_space",key:Un(t,ke(o)),fn:bt,autoRepeat:!0},{name:"prev_space",key:Un(t,o),fn:xt,autoRepeat:!0},{name:"next_right",key:Un(i,ke(o),ke(re)),fn:bt,autoRepeat:!0},{name:"prev_left",key:Un(a,ke(o),ke(re)),fn:xt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:bt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:xt,autoRepeat:!0},{name:"next_down",key:Un(r,ke(re)),fn:zo,autoRepeat:!0},{name:"prev_up",key:Un(l,ke(re)),fn:()=>$o(!1),autoRepeat:!0},{name:"next_shift",key:Un(i,o),fn:zo,autoRepeat:!0},{name:"prev_shift",key:Un(a,o),fn:()=>$o(!1),autoRepeat:!0},{name:"toggle_dark",key:Un(p,ke(Qe)),fn:Qu},{name:"toggle_overview",key:Un(d,ke(Qe)),fn:Wu},{name:"hide_overview",key:Un(e,ke(Qe)),fn:()=>re.value=!1},{name:"goto",key:Un(u,ke(Qe)),fn:()=>us.value=!us.value},{name:"next_overview",key:Un(i,re),fn:kv},{name:"prev_overview",key:Un(a,re),fn:vv},{name:"up_overview",key:Un(l,re),fn:yv},{name:"down_overview",key:Un(r,re),fn:bv},{name:"goto_from_overview",key:Un(c,re),fn:()=>{xs(we.value),re.value=!1}}];return{customShortcuts:[],defaultShortcuts:h}}const Zu=Un(ke(A1),ke(R1),P1);function Sv(e,t,o=!1){typeof e=="string"&&(e=Bu[e]);const a=Un(e,Zu);let i=0,l;const r=()=>{if(clearTimeout(l),!a.value){i=0;return}o&&(l=setTimeout(r,Math.max(1e3-i*250,150)),i++),t()};return gn(a,r,{flush:"sync"})}function wv(e,t){return Df(e,o=>{!Zu.value||o.repeat||t()})}function zv(){const{customShortcuts:e,defaultShortcuts:t}=xv();new Map([...t,...e].map(a=>[a.key,a])).forEach(a=>{a.fn&&Sv(a.key,a.fn,a.autoRepeat)}),wv("f",()=>qu.toggle())}const $v={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cv=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Iv=[Cv];function Tv(e,t){return v(),J("svg",$v,Iv)}const Ev={name:"carbon-close",render:Tv};function Nl(e){var o,a;const t=(a=(o=e==null?void 0:e.meta)==null?void 0:o.slide)==null?void 0:a.no;return t!=null?`slidev-page-${t}`:""}const Ju=En({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;x($);const o=Q(),a=m_(o),i=R(()=>t.width?t.width:a.width.value),l=R(()=>t.width?t.width/yt:a.height.value);t.width&&To(()=>{o.value&&(o.value.style.width=`${i.value}px`,o.value.style.height=`${l.value}px`)});const r=R(()=>i.value/l.value),c=R(()=>t.scale?t.scale:r.value<yt?i.value/Kt:l.value*yt/Kt),p=R(()=>({height:`${bu}px`,width:`${Kt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),u=R(()=>({"select-none":!Cn.selectable,"slidev-code-line-numbers":Cn.lineNumbers}));return xe(yu,c),(d,h)=>(v(),J("div",{id:"slide-container",ref_key:"root",ref:o,class:Wn(C(u))},[n("div",{id:"slide-content",style:ae(C(p))},[Je(d.$slots,"default")],4),Je(d.$slots,"controls")],2))}});const jl=En({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const o=Ye(e,"clicks",t),a=Ye(e,"clicksElements",t),i=Ye(e,"clicksDisabled",t),l=Ye(e,"clicksOrderMap",t);a.value.length=0,xe(Hg,e.route),xe(Ng,e.context),xe(oo,o),xe(ao,i),xe(Ft,a),xe(Di,l)},render(){var e,t;return this.$props.is?fe(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),Mv=["innerHTML"],Lv=En({__name:"DrawingPreview",props:{page:null},setup(e){return x($),(t,o)=>C(_a)[e.page]?(v(),J("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:C(_a)[e.page]},null,8,Mv)):U("v-if",!0)}}),Pv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Ov=["onClick"],Av=En({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const o=e;x($);const a=Ye(o,"modelValue",t);function i(){a.value=!1}function l(f){xs(f),i()}function r(f){return f===we.value}const c=Vi.smaller("xs"),p=Vi.smaller("sm"),u=4*16*2,d=2*16,h=R(()=>c.value?Vt.width.value-u:p.value?(Vt.width.value-u-d)/2:300),m=R(()=>Math.floor((Vt.width.value-u)/(h.value+d)));return To(()=>{we.value=Yn.value,Hl.value=m.value}),(f,_)=>{const w=Ev;return v(),J(Mn,null,[Ha(n("div",Pv,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ae(`grid-template-columns: repeat(auto-fit,minmax(${C(h)}px,1fr))`)},[(v(!0),J(Mn,null,Eo(C(Gn).slice(0,-1),(S,O)=>(v(),J("div",{key:S.path,class:"relative"},[n("div",{class:Wn(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(O+1)}]),onClick:L=>l(+S.path)},[(v(),z(Ju,{key:S.path,width:C(h),"clicks-disabled":!0,class:"pointer-events-none"},{default:g(()=>[y(C(jl),{is:S==null?void 0:S.component,"clicks-disabled":!0,class:Wn(C(Nl)(S)),route:S,context:"overview"},null,8,["is","class","route"]),y(Lv,{page:+S.path},null,8,["page"])]),_:2},1032,["width"]))],10,Ov),n("div",{class:"absolute top-0 opacity-50",style:ae(`left: ${C(h)+5}px`)},Ee(O+1),5)]))),128))],4)],512),[[_u,C(a)]]),C(a)?(v(),J("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:i},[y(w)])):U("v-if",!0)],64)}}});const Rv="/TPSI/4/css/assets/logo.b72bde5d.png",Fv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Dv=En({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const o=e;x($);const a=Ye(o,"modelValue",t);function i(){a.value=!1}return(l,r)=>(v(),z(Zp,null,[C(a)?(v(),J("div",Fv,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>i())}),n("div",{class:Wn(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ gray-400 opacity-10"},[Je(l.$slots,"default")],2)])):U("v-if",!0)],1024))}}),Hv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Nv=["innerHTML"],jv=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:Rv,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),s("dev ")])])],-1),Bv=En({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const o=e;x($);const a=Ye(o,"modelValue",t),i=R(()=>typeof Cn.info=="string");return(l,r)=>(v(),z(Dv,{modelValue:C(a),"onUpdate:modelValue":r[0]||(r[0]=c=>Tn(a)?a.value=c:null),class:"px-6 py-4"},{default:g(()=>[n("div",Hv,[C(i)?(v(),J("div",{key:0,class:"mb-4",innerHTML:C(Cn).info},null,8,Nv)):U("v-if",!0),jv])]),_:1},8,["modelValue"]))}});const qv=["disabled","onKeydown"],Wv=En({__name:"Goto",setup(e){x($);const t=Q(),o=Q(""),a=R(()=>{if(o.value.startsWith("/"))return!!Gn.find(r=>r.path===o.value.substring(1));{const r=+o.value;return!isNaN(r)&&r>0&&r<=dd.value}});function i(){a.value&&(o.value.startsWith("/")?xs(o.value.substring(1)):xs(+o.value)),l()}function l(){us.value=!1}return gn(us,async r=>{var c,p;r?(await Xn(),o.value="",(c=t.value)==null||c.focus()):(p=t.value)==null||p.blur()}),gn(o,r=>{r.match(/^[^0-9/]/)&&(o.value=o.value.substring(1))}),(r,c)=>(v(),J("div",{id:"slidev-goto-dialog",class:Wn(["fixed right-5 bg-main transform transition-all",C(us)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ha(n("input",{ref_key:"input",ref:t,"onUpdate:modelValue":c[0]||(c[0]=p=>o.value=p),type:"text",disabled:!C(us),class:Wn(["outline-none bg-transparent",{"text-red-400":!C(a)&&o.value}]),placeholder:"Goto...",onKeydown:[Hr(i,["enter"]),Hr(l,["escape"])],onBlur:l},null,42,qv),[[kg,o.value]])],2))}}),Kv=En({__name:"Controls",setup(e){x($);const t=je(),o=je();return(a,i)=>(v(),J(Mn,null,[y(Av,{modelValue:C(re),"onUpdate:modelValue":i[0]||(i[0]=l=>Tn(re)?re.value=l:null)},null,8,["modelValue"]),y(Wv),C(t)?(v(),z(C(t),{key:0})):U("v-if",!0),C(o)?(v(),z(C(o),{key:1,modelValue:C(ri),"onUpdate:modelValue":i[1]||(i[1]=l=>Tn(ri)?ri.value=l:null)},null,8,["modelValue"])):U("v-if",!0),C(Cn).info?(v(),z(Bv,{key:2,modelValue:C(ro),"onUpdate:modelValue":i[2]||(i[2]=l=>Tn(ro)?ro.value=l:null)},null,8,["modelValue"])):U("v-if",!0)],64))}}),Vv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Uv=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Gv=[Uv];function Yv(e,t){return v(),J("svg",Vv,Gv)}const Qv={name:"carbon-settings-adjust",render:Yv},Zv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jv=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Xv=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),nk=[Jv,Xv];function ek(e,t){return v(),J("svg",Zv,nk)}const tk={name:"carbon-information",render:ek},sk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ok=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),ak=[ok];function ik(e,t){return v(),J("svg",sk,ak)}const lk={name:"carbon-download",render:ik},rk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ck=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),pk=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),uk=[ck,pk];function dk(e,t){return v(),J("svg",rk,uk)}const mk={name:"carbon-user-speaker",render:dk},hk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gk=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),fk=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),_k=[gk,fk];function vk(e,t){return v(),J("svg",hk,_k)}const kk={name:"carbon-presentation-file",render:vk},yk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bk=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),xk=[bk];function Sk(e,t){return v(),J("svg",yk,xk)}const wk={name:"carbon-pen",render:Sk},zk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},$k=n("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Ck=n("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Ik=[$k,Ck];function Tk(e,t){return v(),J("svg",zk,Ik)}const Ek={name:"ph-cursor-duotone",render:Tk},Mk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Lk=n("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Pk=[Lk];function Ok(e,t){return v(),J("svg",Mk,Pk)}const Xu={name:"ph-cursor-fill",render:Ok},Ak={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rk=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Fk=[Rk];function Dk(e,t){return v(),J("svg",Ak,Fk)}const Hk={name:"carbon-sun",render:Dk},Nk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jk=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Bk=[jk];function qk(e,t){return v(),J("svg",Nk,Bk)}const Wk={name:"carbon-moon",render:qk},Kk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vk=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Uk=[Vk];function Gk(e,t){return v(),J("svg",Kk,Uk)}const Yk={name:"carbon-apps",render:Gk},Qk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zk=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Jk=[Zk];function Xk(e,t){return v(),J("svg",Qk,Jk)}const nd={name:"carbon-arrow-right",render:Xk},n0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},e0=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),t0=[e0];function s0(e,t){return v(),J("svg",n0,t0)}const o0={name:"carbon-arrow-left",render:s0},a0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i0=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),l0=[i0];function r0(e,t){return v(),J("svg",a0,l0)}const c0={name:"carbon-maximize",render:r0},p0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u0=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),d0=[u0];function m0(e,t){return v(),J("svg",p0,d0)}const h0={name:"carbon-minimize",render:m0},g0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f0=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),_0=[f0];function v0(e,t){return v(),J("svg",g0,_0)}const k0={name:"carbon-checkmark",render:v0},y0={class:"select-list"},b0={class:"title"},x0={class:"items"},S0=["onClick"],w0=En({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const o=e;x($);const a=Ye(o,"modelValue",t,{passive:!0});return(i,l)=>{const r=k0;return v(),J("div",y0,[n("div",b0,Ee(e.title),1),n("div",x0,[(v(!0),J(Mn,null,Eo(e.items,c=>(v(),J("div",{key:c.value,class:Wn(["item",{active:C(a)===c.value}]),onClick:()=>{var p;a.value=c.value,(p=c.onClick)==null||p.call(c)}},[y(r,{class:Wn(["text-green-500",{"opacity-0":C(a)!==c.value}])},null,8,["class"]),s(" "+Ee(c.display||c.value),1)],10,S0))),128))])])}}});const vn=(e,t)=>{const o=e.__vccOpts||e;for(const[a,i]of t)o[a]=i;return o},z0=vn(w0,[["__scopeId","data-v-7dd0eaca"]]),$0={class:"text-sm"},C0=En({__name:"Settings",setup(e){x($);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,a)=>(v(),J("div",$0,[y(z0,{modelValue:C(la),"onUpdate:modelValue":a[0]||(a[0]=i=>Tn(la)?la.value=i:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),I0={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},T0=En({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const o=e;x($);const a=Ye(o,"modelValue",t,{passive:!0}),i=Q();return Rf(i,()=>{a.value=!1}),(l,r)=>(v(),J("div",{ref_key:"el",ref:i,class:"flex relative"},[n("button",{class:Wn({disabled:e.disabled}),onClick:r[0]||(r[0]=c=>a.value=!C(a))},[Je(l.$slots,"button",{class:Wn({disabled:e.disabled})})],2),(v(),z(Zp,null,[C(a)?(v(),J("div",I0,[Je(l.$slots,"menu")])):U("v-if",!0)],1024))],512))}}),E0={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},na={__name:"VerticalDivider",setup(e){return x($),(t,o)=>(v(),J("div",E0))}},M0={render(){return[]}},L0={class:"icon-btn"},P0={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},O0={class:"my-auto"},A0={class:"opacity-50"},R0=En({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;x($);const o=Vi.smaller("md"),{isFullscreen:a,toggle:i}=qu,l=R(()=>Ji.value?`?password=${Ji.value}`:""),r=R(()=>`/presenter/${Yn.value}${l.value}`),c=R(()=>`/${Yn.value}${l.value}`),p=Q(),u=()=>{p.value&&_s.value&&p.value.contains(_s.value)&&_s.value.blur()},d=R(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),h=je(),m=je();return $s(()=>import("./DrawingControls.422ff7d2.js"),["assets/DrawingControls.422ff7d2.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.0d86440d.js"]).then(f=>m.value=f.default),(f,_)=>{const w=h0,S=c0,O=o0,L=nd,M=Yk,A=Wk,K=Hk,q=Xu,Y=Ek,an=wk,dn=kk,bn=Bn("RouterLink"),wn=mk,Nn=lk,Vn=tk,te=Qv;return v(),J("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[n("div",{class:Wn(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",C(d)]),onMouseleave:u},[C(st)?U("v-if",!0):(v(),J("button",{key:0,class:"icon-btn",onClick:_[0]||(_[0]=(...Pn)=>C(i)&&C(i)(...Pn))},[C(a)?(v(),z(w,{key:0})):(v(),z(S,{key:1}))])),n("button",{class:Wn(["icon-btn",{disabled:!C(sO)}]),onClick:_[1]||(_[1]=(...Pn)=>C(xt)&&C(xt)(...Pn))},[y(O)],2),n("button",{class:Wn(["icon-btn",{disabled:!C(tO)}]),title:"Next",onClick:_[2]||(_[2]=(...Pn)=>C(bt)&&C(bt)(...Pn))},[y(L)],2),C(st)?U("v-if",!0):(v(),J("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:_[3]||(_[3]=Pn=>C(Wu)())},[y(M)])),C(Qi)?U("v-if",!0):(v(),J("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:_[4]||(_[4]=Pn=>C(Qu)())},[C(Dl)?(v(),z(A,{key:0})):(v(),z(K,{key:1}))])),y(na),C(st)?U("v-if",!0):(v(),J(Mn,{key:3},[!C(Ge)&&!C(o)&&C(h)?(v(),J(Mn,{key:0},[y(C(h)),y(na)],64)):U("v-if",!0),C(Ge)?(v(),J("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:_[5]||(_[5]=Pn=>ci.value=!C(ci))},[C(ci)?(v(),z(q,{key:0})):(v(),z(Y,{key:1,class:"opacity-50"}))])):U("v-if",!0)],64)),!C(Cn).drawings.presenterOnly&&!C(st)?(v(),J(Mn,{key:4},[n("button",{class:"icon-btn relative",title:"Drawing",onClick:_[6]||(_[6]=Pn=>Qe.value=!C(Qe))},[y(an),C(Qe)?(v(),J("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ae({background:C(jt).color})},null,4)):U("v-if",!0)]),y(na)],64)):U("v-if",!0),C(st)?U("v-if",!0):(v(),J(Mn,{key:5},[C(Ge)?(v(),z(bn,{key:0,to:C(c),class:"icon-btn",title:"Play Mode"},{default:g(()=>[y(dn)]),_:1},8,["to"])):U("v-if",!0),C(XP)?(v(),z(bn,{key:1,to:C(r),class:"icon-btn",title:"Presenter Mode"},{default:g(()=>[y(wn)]),_:1},8,["to"])):U("v-if",!0),U("v-if",!0)],64)),(v(),J(Mn,{key:6},[C(Cn).download?(v(),J("button",{key:0,class:"icon-btn",onClick:_[8]||(_[8]=(...Pn)=>C(Xi)&&C(Xi)(...Pn))},[y(Nn)])):U("v-if",!0)],64)),!C(Ge)&&C(Cn).info&&!C(st)?(v(),J("button",{key:7,class:"icon-btn",onClick:_[9]||(_[9]=Pn=>ro.value=!C(ro))},[y(Vn)])):U("v-if",!0),!C(Ge)&&!C(st)?(v(),z(T0,{key:8},{button:g(()=>[n("button",L0,[y(te)])]),menu:g(()=>[y(C0)]),_:1})):U("v-if",!0),C(st)?U("v-if",!0):(v(),z(na,{key:9})),n("div",P0,[n("div",O0,[s(Ee(C(Yn))+" ",1),n("span",A0,"/ "+Ee(C(dd)),1)])]),y(C(M0))],34)],512)}}}),F0={style:{"font-size":"0.55rem","line-height":"1rem"}},D0=n("div",{class:"absolute bottom-0 left-1"},[n("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),H0={class:"absolute bottom-1 left-89 text-gray-700"},N0={key:0,class:"absolute bottom-1 right-1 text-gray-700"},j0={__name:"global-top",setup(e){const t=x($);return(o,a)=>(v(),J("footer",F0,[D0,n("div",H0," ITT E.Agnelli - Informatica - "+Ee(C(t).configs.materia)+" - prof. Antonio Mancuso - a.s. "+Ee(C(t).configs.as)+" - v "+Ee(C(t).configs.version||0),1),C(t).nav.currentPage!==1&&C(t).nav.currentPage!=C(t).nav.total+1?(v(),J("div",N0,Ee(C(t).nav.currentPage-1)+" / "+Ee(C(t).nav.total-1),1)):U("v-if",!0)]))}},ed={render(){return[fe(j0)]}},td={render(){return[]}},B0={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},q0=En({__name:"PresenterMouse",setup(e){return x($),(t,o)=>{const a=Xu;return C(oi).cursor?(v(),J("div",B0,[y(a,{class:"absolute",style:ae({left:`${C(oi).cursor.x}%`,top:`${C(oi).cursor.y}%`})},null,8,["style"])])):U("v-if",!0)}}}),W0=En({__name:"SlidesShow",props:{context:null},setup(e){x($),gn(be,()=>{var o,a;((o=be.value)==null?void 0:o.meta)&&be.value.meta.preload!==!1&&(be.value.meta.__preloaded=!0),((a=ui.value)==null?void 0:a.meta)&&ui.value.meta.preload!==!1&&(ui.value.meta.__preloaded=!0)},{immediate:!0});const t=je();return $s(()=>import("./DrawingLayer.2dae12e0.js"),[]).then(o=>t.value=o.default),(o,a)=>(v(),J(Mn,null,[U(" Global Bottom "),y(C(td)),U(" Slides "),(v(!0),J(Mn,null,Eo(C(Gn),i=>{var l,r;return v(),J(Mn,{key:i.path},[((l=i.meta)==null?void 0:l.__preloaded)||i===C(be)?Ha((v(),z(C(jl),{key:0,is:i==null?void 0:i.component,clicks:i===C(be)?C(Ne):0,"clicks-elements":((r=i.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:Wn(C(Nl)(i)),route:i,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[_u,i===C(be)]]):U("v-if",!0)],64)}),128)),U(" Global Top "),y(C(ed)),C(t)?(v(),z(C(t),{key:0})):U("v-if",!0),C(Ge)?U("v-if",!0):(v(),z(q0,{key:1}))],64))}}),K0=En({__name:"Play",setup(e){x($),zv();const t=Q();function o(l){var r;Cc.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?bt():xt())}iO(t);const a=R(()=>O1.value||Cc.value);je();const i=je();return $s(()=>import("./DrawingControls.422ff7d2.js"),["assets/DrawingControls.422ff7d2.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.0d86440d.js"]).then(l=>i.value=l.default),(l,r)=>(v(),J(Mn,null,[n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:ae(C(xu))},[y(Ju,{class:"w-full h-full",style:ae({background:"var(--slidev-slide-container-background, black)"}),width:C(Wl)?C(Vt).width.value:void 0,scale:C(la),onPointerdown:o},{default:g(()=>[y(W0,{context:"slide"})]),controls:g(()=>[n("div",{class:Wn(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[C(a)?"opacity-100 right-0":"opacity-0 p-2",C(xo)?"pointer-events-none":""]])},[y(R0,{class:"m-auto",persist:C(a)},null,8,["persist"])],2),!C(Cn).drawings.presenterOnly&&!C(st)&&C(i)?(v(),z(C(i),{key:0,class:"ml-0"})):U("v-if",!0)]),_:1},8,["style","width","scale"]),U("v-if",!0)],4),y(Kv)],64))}});function sd(e){const t=R(()=>e.value.path),o=R(()=>Gn.length-1),a=R(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),i=R(()=>Va(a.value)),l=R(()=>Gn.find(m=>m.path===`${a.value}`)),r=R(()=>{var m,f,_;return(_=(f=(m=l.value)==null?void 0:m.meta)==null?void 0:f.slide)==null?void 0:_.id}),c=R(()=>{var m,f;return(f=(m=l.value)==null?void 0:m.meta)==null?void 0:f.layout}),p=R(()=>Gn.find(m=>m.path===`${Math.min(Gn.length,a.value+1)}`)),u=R(()=>Gn.filter(m=>{var f,_;return(_=(f=m.meta)==null?void 0:f.slide)==null?void 0:_.title}).reduce((m,f)=>(Kl(m,f),m),[])),d=R(()=>Vl(u.value,l.value)),h=R(()=>Ul(d.value));return{route:e,path:t,total:o,currentPage:a,currentPath:i,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:p,rawTree:u,treeWithActiveStatuses:d,tree:h}}function od(e,t,o){const a=Q(0);Xn(()=>{ze.afterEach(async()=>{await Xn(),a.value+=1})});const i=R(()=>{var p,u;return a.value,((u=(p=t.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),l=R(()=>{var p,u,d;return+((d=(u=(p=t.value)==null?void 0:p.meta)==null?void 0:u.clicks)!=null?d:i.value.length)}),r=R(()=>o.value<Gn.length-1||e.value<l.value),c=R(()=>o.value>1||e.value>0);return{clicks:e,clicksElements:i,clicksTotal:l,hasNext:r,hasPrev:c}}const V0=["id"],Fc=En({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const o=e,a=Ye(o,"clicksElements",t),i=R(()=>({height:`${bu}px`,width:`${Kt}px`})),l=je();$s(()=>import("./DrawingPreview.5558e3e6.js"),[]).then(u=>l.value=u.default);const r=R(()=>o.clicks),c=od(r,o.nav.currentRoute,o.nav.currentPage),p=R(()=>`${o.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return xe($,jn({nav:{...o.nav,...c},configs:Cn,themeConfigs:R(()=>Cn.themeConfig)})),(u,d)=>{var h;return v(),J("div",{id:C(p),class:"slide-container",style:ae(C(i))},[y(C(td)),y(C(jl),{is:(h=e.route)==null?void 0:h.component,"clicks-elements":C(a),"onUpdate:clicks-elements":d[0]||(d[0]=m=>Tn(a)?a.value=m:null),clicks:C(r),"clicks-disabled":!1,class:Wn(C(Nl)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),C(l)?(v(),z(C(l),{key:0,page:+e.route.path},null,8,["page"])):U("v-if",!0),y(C(ed))],12,V0)}}}),U0=En({__name:"PrintSlide",props:{route:null},setup(e){var l;const t=e;x($);const o=jn(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),a=R(()=>t.route),i=sd(a);return(r,c)=>(v(),J(Mn,null,[y(Fc,{"clicks-elements":o,"onUpdate:clicks-elements":c[0]||(c[0]=p=>Tn(o)?o.value=p:null),clicks:0,nav:C(i),route:C(a)},null,8,["clicks-elements","nav","route"]),C(co)?U("v-if",!0):(v(!0),J(Mn,{key:0},Eo(o.length,p=>(v(),z(Fc,{key:p,clicks:p,nav:C(i),route:C(a)},null,8,["clicks","nav","route"]))),128))],64))}}),G0={id:"print-content"},Y0=En({__name:"PrintContainer",props:{width:null},setup(e){const t=e;x($);const o=R(()=>t.width),a=R(()=>t.width/yt),i=R(()=>o.value/a.value),l=R(()=>i.value<yt?o.value/Kt:a.value*yt/Kt),r=Gn.slice(0,-1),c=R(()=>({"select-none":!Cn.selectable,"slidev-code-line-numbers":Cn.lineNumbers}));return xe(yu,l),(p,u)=>(v(),J("div",{id:"print-container",class:Wn(C(c))},[n("div",G0,[(v(!0),J(Mn,null,Eo(C(r),d=>(v(),z(U0,{key:d.path,route:d},null,8,["route"]))),128))]),Je(p.$slots,"controls")],2))}});const Q0=En({__name:"Print",setup(e){x($);const t=Nt.canvasWidth,o=Math.round(t/Nt.aspectRatio)+1;function a(i,{slots:l}){if(l.default)return fe("style",l.default())}return To(()=>{Wl?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(i,l)=>(v(),J(Mn,null,[y(a,null,{default:g(()=>[s(" @page { size: "+Ee(C(t))+"px "+Ee(o)+"px; margin: 0px; } ",1)]),_:1}),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:ae(C(xu))},[y(Y0,{class:"w-full h-full",style:ae({background:"var(--slidev-slide-container-background, black)"}),width:C(Vt).width.value},null,8,["style","width"])],4)],64))}});const Z0={class:"slidev-layout end"},J0={__name:"end",setup(e){return x($),(t,o)=>(v(),J("div",Z0," END "))}},X0=vn(J0,[["__scopeId","data-v-ab32435f"]]);function Dc(e){return e.startsWith("/")?"/TPSI/4/css/"+e.slice(1):e}function ny(e,t=!1){const o=e&&["#","rgb","hsl"].some(i=>e.indexOf(i)===0),a={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?t?`linear-gradient(#0005, #0008), url(${Dc(e)})`:`url("${Dc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const ey={class:"my-auto w-full"},ty=En({__name:"cover",props:{background:{default:""}},setup(e){const t=e;x($);const o=R(()=>ny(t.background,!0));return(a,i)=>(v(),J("div",{class:"slidev-layout cover",style:ae(C(o))},[n("div",ey,[Je(a.$slots,"default")])],4))}}),sy=n("h1",null,"Cascading Style Sheets",-1),oy=n("p",null,"Anche l\u2019occhio vuole la sua parte",-1),ay={class:"pt-12"},iy={class:"px-2 py-1"},ly=s(" Premi spazio o "),ry=s(" per la prossima slide "),cy={__name:"1",setup(e){const t={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.4.1"};return x($),(o,a)=>{const i=nd;return v(),z(ty,T(I(t)),{default:g(()=>[sy,oy,n("div",ay,[n("span",iy,[ly,y(i,{class:"inline"}),ry])])]),_:1},16)}}},py={class:"slidev-layout default"},P={__name:"default",setup(e){return x($),(t,o)=>(v(),J("div",py,[Je(t.$slots,"default")]))}},uy=n("h1",null,"CSS",-1),dy=n("p",null,"Cascading Style Sheets - Fogli di Stile",-1),my=n("p",null,"Un documento o pagina HTML \xE8 composto da tre parti principali:",-1),hy=n("h3",null,"Struttura",-1),gy=n("p",null,"La sua componente logica e semantica: indica come suddividere il contenuto in elementi, eventualmente suddivisi in sottoelementi e cos\xEC via in una sorta di gerarchia ad albero. Ad esempio, questo documento ha un titolo e una successione di sezioni/paragrafi aperte a loro volta da un titolo.",-1),fy=n("h3",null,"Contenuto",-1),_y=n("p",null,"Generalmente costituito dalle parole e risorse, di diversa natuera, che compongono il documento (testo, immagine, audio e video).",-1),vy=n("h3",null,"Stile",-1),ky=n("p",null,"Descrizione sul come visualizzare il documento su un particolare dispositivo o supporto. Un documento stampato su carta avr\xE0 uno stile diverso rispetto allo stesso documento formattato per una piattaforma mobile. Lo stile quindi influisce su come un documento HTML viene visualizzato su dispositivi e condizioni diverse.",-1),yy={__name:"2",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[uy,dy,my,hy,gy,fy,_y,vy,ky]),_:1},16))}},by=En({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,r;const e=kr("click"),t=kr("after"),o=(c,p,u)=>Ha(c,[[p,this.at!=null?+this.at+u:null,"",{hide:this.hide,fade:this.fade}]]);let a=(r=(l=this.$slots).default)==null?void 0:r.call(l);if(!a)return;a=Bg(a);const i=c=>c.map((p,u)=>Gt(p)?o(fe(p),u%this.every===0?e:t,Math.floor(u/this.every)):p);return a.length===1&&["ul","ol"].includes(a[0].type)&&Array.isArray(a[0].children)?fe(a[0],{},[i(a[0].children)]):i(a)}}),qn=En({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return y(by,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),xy=n("h1",null,"CSS",-1),Sy=n("p",null,"Cascading Style Sheets - Fogli di Stile",-1),wy=n("ul",null,[n("li",null,[n("em",null,"C"),s("ascading "),n("em",null,"S"),s("tyle "),n("em",null,"S"),s("heets (CSS) \xE8 un semplice meccanismo ed un linguaggio per definire lo stile (fonts, colors, spacing) e descrivere l\u2019aspetto e il layout di un documento HTML.")]),n("li",null,"La prima versione viene introdotta dal W3C nel 1996. Oggiamo siamo alla versione 3 - CSS3"),n("li",null,[s("CSS descrive come i vari elementi HTML devono essere visualizzati (colore, dimensione, font, bordo, \u2026) ==> "),n("strong",null,"no descrizione semantica"),s(".")])],-1),zy={grid:"~ cols-3 gap-12"},$y=n("div",null,[n("br"),n("h1",null,"Titolo"),n("h1",{style:{color:"red"}},"Titolo"),n("h1",{style:{color:"green",background:"yellow"}},"Titolo"),n("h1",{style:{color:"gray",border:"4px dotted black"}},"Titolo")],-1),Cy=n("div",{class:"col-span-2"},[n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("green"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s("yellow"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("gray"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s("4px dotted"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])])])])],-1),Iy=n("div",null,null,-1),Ty={__name:"3",setup(e){const t={};return x($),(o,a)=>{const i=qn;return v(),z(P,T(I(t)),{default:g(()=>[xy,Sy,wy,n("div",zy,[y(i,null,{default:g(()=>[$y]),_:1}),y(i,null,{default:g(()=>[Cy]),_:1}),Iy])]),_:1},16)}}},Ey=n("h1",null,"CSS",-1),My=n("p",null,"Cascading Style Sheets - Fogli di Stile",-1),Ly=n("ul",null,[n("li",null,[s("Il nome "),n("em",null,"cascading"),s(" deriva dallo schema di priorit\xE0 con cui viene scelto quale stile applicare ad un dato elemento (stile viene applicato dall\u2019alto al basso).")]),n("li",null,[s("CSS \xE8 progettato per separare il contenuto dalla presentazione ["),n("a",{href:"https://en.wikipedia.org/wiki/Separation_of_concerns",target:"_blank",rel:"noopener"},"Separation of concerns"),s("].")]),n("li",null,[s("In altre parole "),n("strong",null,"HTML"),s(" descrive la semantica di una pagina, mentre "),n("strong",null,"CSS"),s(" descrive lo stile grafico e come deve apparire.")]),n("li",null,"Questa separazione fornisce molti vantaggi, tra cui la possibilit\xE0 di riusare lo stesso markup e visualizzarlo in modo diversi su dispositivi diversi."),n("li",null,[s("Normalmente lo stile di una pagina si definisce in un file esterno "),n("code",null,".css")]),n("li",null,[s("Permette anche di automentare la "),n("em",null,"manutenibilit\xE0"),s(" di un sito web, di separare il sito in aree funzionali diverse e di permettere la cooperazione tra diverse professionalit\xE0 all\u2019interno del gruppo di lavoro.")])],-1),Py={__name:"4",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[Ey,My,Ly]),_:1},16))}},Oy=n("h1",null,"CSS",-1),Ay=n("p",null,[s("Il "),n("a",{href:"https://www.w3schools.com/",target:"_blank",rel:"noopener"},"sito web"),s(" del consorzio W3C, offre una preziosa fonte di informazioni per apprendere le tecnologie del web.")],-1),Ry=n("h3",null,"HTML",-1),Fy=n("ul",null,[n("li",null,[n("a",{href:"https://www.w3schools.com/html/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/html/default.asp")]),n("li",null,[n("a",{href:"https://www.w3schools.com/tags/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/tags/default.asp")]),n("li",null,[n("a",{href:"https://htmlreference.io/",target:"_blank",rel:"noopener"},"https://htmlreference.io/")])],-1),Dy=n("h3",null,"CSS",-1),Hy=n("ul",null,[n("li",null,[n("a",{href:"https://www.w3schools.com/css/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/css/default.asp")]),n("li",null,[n("a",{href:"https://www.w3schools.com/cssref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/cssref/default.asp")]),n("li",null,[n("a",{href:"https://cssreference.io/",target:"_blank",rel:"noopener"},"https://cssreference.io/")])],-1),Ny=n("h3",null,"Java Script",-1),jy=n("ul",null,[n("li",null,[n("a",{href:"https://www.w3schools.com/js/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/js/default.asp")]),n("li",null,[n("a",{href:"https://www.w3schools.com/jsref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/jsref/default.asp")]),n("li",null,[n("a",{href:"https://devdocs.io/javascript/",target:"_blank",rel:"noopener"},"https://devdocs.io/javascript/")]),n("li",null,[n("a",{href:"https://javascript.info/",target:"_blank",rel:"noopener"},"https://javascript.info/")])],-1),By={__name:"5",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[Oy,Ay,Ry,Fy,Dy,Hy,Ny,jy]),_:1},16))}},qy={class:"slidev-layout section w-full h-full grid"},Wy={class:"my-auto text-center"},ne={__name:"section",setup(e){return x($),(t,o)=>(v(),J("div",qy,[n("div",Wy,[Je(t.$slots,"default")])]))}},Ky=n("h1",{class:"sezione"},"Regole, dichiarazioni e sintassi CSS",-1),Vy={__name:"6",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[Ky]),_:1},16))}},Uy="/TPSI/4/css/assets/css_01.eddfbc97.jpg",Gy=n("h1",null,"CSS",-1),Yy=n("p",null,"Regole e Sintassi",-1),Qy=n("ul",null,[n("li",null,[s("Un foglio di stile CSS (file .css) definisce una serie "),n("u",null,[n("strong",null,"regole")]),s(" da applicare ad una pagina HTML")]),n("li",null,[s("Una regola di stile \xE8 composta da "),n("strong",null,"2"),s(" parti: "),n("ul",null,[n("li",null,[n("u",null,[n("em",null,"Selettore")]),s(": seleziona o punta ad uno o pi\xF9 elementi o tag HTML.")]),n("li",null,[n("u",null,[n("em",null,"Blocco dichiarazione")]),s(": contiene una o pi\xF9 dichiarazioni separate da un punto e virgola "),n("code",null,";"),s(" e racchiuse tra "),n("code",null,"{}")])])]),n("li",null,[s("Ogni "),n("em",null,"dichiarazione"),s(" descrive una "),n("strong",null,"propriet\xE0 CSS"),s(" in base a: "),n("ul",null,[n("li",null,[n("u",null,[n("em",null,"nome")]),s(": nome della propriet\xE0 CSS del tag HTML")]),n("li",null,[n("u",null,[n("em",null,"valore")]),s(": valore assegnato alla propriet\xE0")])])])],-1),Zy=n("p",null,[n("img",{src:Uy,alt:"css_01.jpg"})],-1),Jy={__name:"7",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center"),l=qn;return v(),z(P,T(I(t)),{default:g(()=>[Gy,Yy,Qy,y(l,null,{default:g(()=>[y(i,null,{default:g(()=>[Zy]),_:1})]),_:1})]),_:1},16)}}},Xy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},nb=n("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),eb=[nb];function tb(e,t){return v(),J("svg",Xy,eb)}const sb={name:"ph-clipboard",render:tb},ob={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ab=n("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),ib=[ab];function lb(e,t){return v(),J("svg",ob,ib)}const rb={name:"ph-check-circle",render:lb};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function ad(e){return typeof e>"u"||e===null}function cb(e){return typeof e=="object"&&e!==null}function pb(e){return Array.isArray(e)?e:ad(e)?[]:[e]}function ub(e,t){var o,a,i,l;if(t)for(l=Object.keys(t),o=0,a=l.length;o<a;o+=1)i=l[o],e[i]=t[i];return e}function db(e,t){var o="",a;for(a=0;a<t;a+=1)o+=e;return o}function mb(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var hb=ad,gb=cb,fb=pb,_b=db,vb=mb,kb=ub,Bl={isNothing:hb,isObject:gb,toArray:fb,repeat:_b,isNegativeZero:vb,extend:kb};function id(e,t){var o="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(o+='in "'+e.mark.name+'" '),o+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(o+=`

`+e.mark.snippet),a+" "+o):a}function wo(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=id(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}wo.prototype=Object.create(Error.prototype);wo.prototype.constructor=wo;wo.prototype.toString=function(t){return this.name+": "+id(this,t)};var Dt=wo,yb=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],bb=["scalar","sequence","mapping"];function xb(e){var t={};return e!==null&&Object.keys(e).forEach(function(o){e[o].forEach(function(a){t[String(a)]=o})}),t}function Sb(e,t){if(t=t||{},Object.keys(t).forEach(function(o){if(yb.indexOf(o)===-1)throw new Dt('Unknown option "'+o+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(o){return o},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=xb(t.styleAliases||null),bb.indexOf(this.kind)===-1)throw new Dt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var oe=Sb;function Hc(e,t){var o=[];return e[t].forEach(function(a){var i=o.length;o.forEach(function(l,r){l.tag===a.tag&&l.kind===a.kind&&l.multi===a.multi&&(i=r)}),o[i]=a}),o}function wb(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,o;function a(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(t=0,o=arguments.length;t<o;t+=1)arguments[t].forEach(a);return e}function Zi(e){return this.extend(e)}Zi.prototype.extend=function(t){var o=[],a=[];if(t instanceof oe)a.push(t);else if(Array.isArray(t))a=a.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(o=o.concat(t.implicit)),t.explicit&&(a=a.concat(t.explicit));else throw new Dt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(l){if(!(l instanceof oe))throw new Dt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new Dt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new Dt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(l){if(!(l instanceof oe))throw new Dt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Zi.prototype);return i.implicit=(this.implicit||[]).concat(o),i.explicit=(this.explicit||[]).concat(a),i.compiledImplicit=Hc(i,"implicit"),i.compiledExplicit=Hc(i,"explicit"),i.compiledTypeMap=wb(i.compiledImplicit,i.compiledExplicit),i};var zb=Zi,$b=new oe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Cb=new oe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Ib=new oe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Tb=new zb({explicit:[$b,Cb,Ib]});function Eb(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Mb(){return null}function Lb(e){return e===null}var Pb=new oe("tag:yaml.org,2002:null",{kind:"scalar",resolve:Eb,construct:Mb,predicate:Lb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Ob(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Ab(e){return e==="true"||e==="True"||e==="TRUE"}function Rb(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Fb=new oe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Ob,construct:Ab,predicate:Rb,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Db(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Hb(e){return 48<=e&&e<=55}function Nb(e){return 48<=e&&e<=57}function jb(e){if(e===null)return!1;var t=e.length,o=0,a=!1,i;if(!t)return!1;if(i=e[o],(i==="-"||i==="+")&&(i=e[++o]),i==="0"){if(o+1===t)return!0;if(i=e[++o],i==="b"){for(o++;o<t;o++)if(i=e[o],i!=="_"){if(i!=="0"&&i!=="1")return!1;a=!0}return a&&i!=="_"}if(i==="x"){for(o++;o<t;o++)if(i=e[o],i!=="_"){if(!Db(e.charCodeAt(o)))return!1;a=!0}return a&&i!=="_"}if(i==="o"){for(o++;o<t;o++)if(i=e[o],i!=="_"){if(!Hb(e.charCodeAt(o)))return!1;a=!0}return a&&i!=="_"}}if(i==="_")return!1;for(;o<t;o++)if(i=e[o],i!=="_"){if(!Nb(e.charCodeAt(o)))return!1;a=!0}return!(!a||i==="_")}function Bb(e){var t=e,o=1,a;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),a=t[0],(a==="-"||a==="+")&&(a==="-"&&(o=-1),t=t.slice(1),a=t[0]),t==="0")return 0;if(a==="0"){if(t[1]==="b")return o*parseInt(t.slice(2),2);if(t[1]==="x")return o*parseInt(t.slice(2),16);if(t[1]==="o")return o*parseInt(t.slice(2),8)}return o*parseInt(t,10)}function qb(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Bl.isNegativeZero(e)}var Wb=new oe("tag:yaml.org,2002:int",{kind:"scalar",resolve:jb,construct:Bb,predicate:qb,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Kb=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Vb(e){return!(e===null||!Kb.test(e)||e[e.length-1]==="_")}function Ub(e){var t,o;return t=e.replace(/_/g,"").toLowerCase(),o=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:o*parseFloat(t,10)}var Gb=/^[-+]?[0-9]+e/;function Yb(e,t){var o;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Bl.isNegativeZero(e))return"-0.0";return o=e.toString(10),Gb.test(o)?o.replace("e",".e"):o}function Qb(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Bl.isNegativeZero(e))}var Zb=new oe("tag:yaml.org,2002:float",{kind:"scalar",resolve:Vb,construct:Ub,predicate:Qb,represent:Yb,defaultStyle:"lowercase"}),Jb=Tb.extend({implicit:[Pb,Fb,Wb,Zb]}),Xb=Jb,ld=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),rd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function nx(e){return e===null?!1:ld.exec(e)!==null||rd.exec(e)!==null}function ex(e){var t,o,a,i,l,r,c,p=0,u=null,d,h,m;if(t=ld.exec(e),t===null&&(t=rd.exec(e)),t===null)throw new Error("Date resolve error");if(o=+t[1],a=+t[2]-1,i=+t[3],!t[4])return new Date(Date.UTC(o,a,i));if(l=+t[4],r=+t[5],c=+t[6],t[7]){for(p=t[7].slice(0,3);p.length<3;)p+="0";p=+p}return t[9]&&(d=+t[10],h=+(t[11]||0),u=(d*60+h)*6e4,t[9]==="-"&&(u=-u)),m=new Date(Date.UTC(o,a,i,l,r,c,p)),u&&m.setTime(m.getTime()-u),m}function tx(e){return e.toISOString()}var sx=new oe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:nx,construct:ex,instanceOf:Date,represent:tx});function ox(e){return e==="<<"||e===null}var ax=new oe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:ox}),ql=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function ix(e){if(e===null)return!1;var t,o,a=0,i=e.length,l=ql;for(o=0;o<i;o++)if(t=l.indexOf(e.charAt(o)),!(t>64)){if(t<0)return!1;a+=6}return a%8===0}function lx(e){var t,o,a=e.replace(/[\r\n=]/g,""),i=a.length,l=ql,r=0,c=[];for(t=0;t<i;t++)t%4===0&&t&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(a.charAt(t));return o=i%4*6,o===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):o===18?(c.push(r>>10&255),c.push(r>>2&255)):o===12&&c.push(r>>4&255),new Uint8Array(c)}function rx(e){var t="",o=0,a,i,l=e.length,r=ql;for(a=0;a<l;a++)a%3===0&&a&&(t+=r[o>>18&63],t+=r[o>>12&63],t+=r[o>>6&63],t+=r[o&63]),o=(o<<8)+e[a];return i=l%3,i===0?(t+=r[o>>18&63],t+=r[o>>12&63],t+=r[o>>6&63],t+=r[o&63]):i===2?(t+=r[o>>10&63],t+=r[o>>4&63],t+=r[o<<2&63],t+=r[64]):i===1&&(t+=r[o>>2&63],t+=r[o<<4&63],t+=r[64],t+=r[64]),t}function cx(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var px=new oe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:ix,construct:lx,predicate:cx,represent:rx}),ux=Object.prototype.hasOwnProperty,dx=Object.prototype.toString;function mx(e){if(e===null)return!0;var t=[],o,a,i,l,r,c=e;for(o=0,a=c.length;o<a;o+=1){if(i=c[o],r=!1,dx.call(i)!=="[object Object]")return!1;for(l in i)if(ux.call(i,l))if(!r)r=!0;else return!1;if(!r)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function hx(e){return e!==null?e:[]}var gx=new oe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:mx,construct:hx}),fx=Object.prototype.toString;function _x(e){if(e===null)return!0;var t,o,a,i,l,r=e;for(l=new Array(r.length),t=0,o=r.length;t<o;t+=1){if(a=r[t],fx.call(a)!=="[object Object]"||(i=Object.keys(a),i.length!==1))return!1;l[t]=[i[0],a[i[0]]]}return!0}function vx(e){if(e===null)return[];var t,o,a,i,l,r=e;for(l=new Array(r.length),t=0,o=r.length;t<o;t+=1)a=r[t],i=Object.keys(a),l[t]=[i[0],a[i[0]]];return l}var kx=new oe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:_x,construct:vx}),yx=Object.prototype.hasOwnProperty;function bx(e){if(e===null)return!0;var t,o=e;for(t in o)if(yx.call(o,t)&&o[t]!==null)return!1;return!0}function xx(e){return e!==null?e:{}}var Sx=new oe("tag:yaml.org,2002:set",{kind:"mapping",resolve:bx,construct:xx});Xb.extend({implicit:[sx,ax],explicit:[px,gx,kx,Sx]});function Nc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var wx=new Array(256),zx=new Array(256);for(var as=0;as<256;as++)wx[as]=Nc(as)?1:0,zx[as]=Nc(as);function $x(e){return Array.from(new Set(e))}function jc(...e){let t,o,a;e.length===1?(t=0,a=1,[o]=e):[t,o,a=1]=e;const i=[];let l=t;for(;l<o;)i.push(l),l+=a||1;return i}function Cx(e,t){if(!t||t==="all"||t==="*")return jc(1,e+1);const o=[];for(const a of t.split(/[,;]/g))if(!a.includes("-"))o.push(+a);else{const[i,l]=a.split("-",2);o.push(...jc(+i,l?+l+1:e+1))}return $x(o).filter(a=>a<=e).sort((a,i)=>a-i)}const Ix=["title"],rn=En({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;x($);const o=x(oo),a=x(Ft),i=x(ao);function l(h=5){const m=[],f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_=f.length;for(let w=0;w<h;w++)m.push(f.charAt(Math.floor(Math.random()*_)));return m.join("")}const r=Q(),c=Jt();zs(()=>{const h=t.at==null?a==null?void 0:a.value.length:t.at,m=R(()=>i!=null&&i.value?t.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(h||0)),t.ranges.length-1)),f=R(()=>t.ranges[m.value]||"");if(t.ranges.length>=2&&!(i!=null&&i.value)){const _=l(),w=qg(t.ranges.length-1).map(S=>_+S);a!=null&&a.value&&(a.value.push(...w),Da(()=>w.forEach(S=>Hi(a.value,S)),c))}To(()=>{if(!r.value)return;const w=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const S of w){const O=Array.from(S.querySelectorAll(".line")),L=Cx(O.length,f.value);if(O.forEach((M,A)=>{const K=L.includes(A+1);M.classList.toggle(At,!0),M.classList.toggle("highlighted",K),M.classList.toggle("dishonored",!K)}),t.maxHeight){const M=S.querySelector(".line.highlighted");M&&M.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:u}=Vf();function d(){var m,f;const h=(f=(m=r.value)==null?void 0:m.querySelector(".slidev-code"))==null?void 0:f.textContent;h&&u(h)}return(h,m)=>{const f=rb,_=sb;return v(),J("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:ae({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Je(h.$slots,"default"),C(Cn).codeCopy?(v(),J("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:C(p)?"Copied":"Copy",onClick:m[0]||(m[0]=w=>d())},[C(p)?(v(),z(f,{key:0,class:"p-2 w-8 h-8"})):(v(),z(_,{key:1,class:"p-2 w-8 h-8"}))],8,Ix)):U("v-if",!0)],4)}}}),Tx=n("h1",null,"CSS",-1),Ex=n("p",null,"Regole e Sintassi",-1),Mx=n("ul",null,[n("li",null,[s("I commenti per il CSS sono quelli del C tradizionale "),n("code",null,"/*"),s(" e "),n("code",null,"*/")])],-1),Lx=n("br",null,null,-1),Px=n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"/* questo \xE8 un commento su una sola linea */")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"h1"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"/* questo \xE8 un "),s(`
`),n("span",{class:"line"},"commento "),s(`
`),n("span",{class:"line"},"su pi\xF9 linee */"),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"p1"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" green"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")])])],-1),Ox={__name:"8",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[Tx,Ex,Mx,Lx,y(i,B({},{ranges:[""]}),{default:g(()=>[Px]),_:1},16)]),_:1},16)}}},Ax=n("h1",{class:"sezione"},"Priorit\xE0 Cascade CSS",-1),Rx={__name:"9",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[Ax]),_:1},16))}},Fx=n("h1",null,"CSS",-1),Dx=n("p",null,"Cascade Style",-1),Hx=n("ul",null,[n("li",null,[s("Ci sono "),n("strong",null,"3"),s(" modi per specificare lo stile di una pagina/elemento HTML: "),n("ol",null,[n("li",null,[n("strong",null,"Inline")]),n("li",null,[n("strong",null,"Internal")]),n("li",null,[n("strong",null,"External")])])])],-1),Nx=n("h3",null,"Inline",-1),jx=n("ul",null,[n("li",null,[s("Uno stile "),n("em",null,"inline"),s(" normalmente si usa per alterare la visualizzazione di un singolo elemento all\u2019interno di una pagina HTML.")]),n("li",null,[s("Per specificare uno stile "),n("em",null,"inline"),s(" basta inserire la "),n("u",null,[n("em",null,"dichiarazione CSS")]),s(" dentro l\u2019attributo "),n("em",null,[n("strong",null,"style")]),s(" del tag per cui si vuole definire lo stile.")])],-1),Bx={grid:"~ cols-2 gap-4"},qx=n("div",null,[n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])])])]),n("br"),n("h1",{style:{color:"red"}},"Titolo rosso")],-1),Wx=n("div",null,[n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s("1px solid"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo boerdo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])])])]),n("br"),n("h1",{style:{border:"1px solid"}},"Titolo bordo")],-1),Kx={__name:"10",setup(e){const t={};return x($),(o,a)=>{const i=qn;return v(),z(P,T(I(t)),{default:g(()=>[Fx,Dx,Hx,Nx,jx,n("div",Bx,[y(i,null,{default:g(()=>[qx]),_:1}),y(i,null,{default:g(()=>[Wx]),_:1})])]),_:1},16)}}},Vx=n("h1",null,"CSS",-1),Ux=n("p",null,"Cascade Style",-1),Gx=n("h3",null,"Inline",-1),Yx=n("ul",null,[n("li",null,[s("Specificare lo stile inline come attributo del tag, presenta vari svantaggi: "),n("ul",null,[n("li",null,"Rende il codice HTML pi\xF9 difficoltoso da leggere"),n("li",null,[s("Non rispetta il principio "),n("a",{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",target:"_blank",rel:"noopener"},"DRY"),s(" (Don\u2019t Repeat Yourself)")]),n("li",null,"Proliferazione e duplicazione degli stili in una pagina di medio/alta complessit\xE0"),n("li",null,[n("strong",null,"Viola"),s(" il principio di suddivisione della struttura/semantica di una pagina dallo stile di presentazione")])])])],-1),Qx={grid:"~ cols-2 gap-4"},Zx=n("div",null,[n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo1 in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo2 in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])])])]),n("br"),n("h1",{style:{color:"red"}},"Titolo1 in rosso"),n("h1",{style:{color:"red"}},"Titolo2 Titolo in rosso")],-1),Jx=n("div",null,[n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo3 in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Titolo4 in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])])])]),n("br"),n("h1",{style:{color:"red"}},"Titolo3 in rosso"),n("h1",{style:{color:"red"}},"Titolo4 in rosso")],-1),Xx={__name:"11",setup(e){const t={};return x($),(o,a)=>{const i=qn;return v(),z(P,T(I(t)),{default:g(()=>[Vx,Ux,Gx,Yx,n("div",Qx,[y(i,null,{default:g(()=>[Zx]),_:1}),y(i,null,{default:g(()=>[Jx]),_:1})])]),_:1},16)}}},n2=n("h1",null,"Esercizio css_01",-1),e2=n("p",null,"CSS Inline",-1),t2=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_html_02.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_01.html")]),n("li",null,[s("Definire lo stile inline per 4 tag "),n("code",null,"h2"),s(" e impostare il colore a rosso")]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_01.html")],-1),s2={__name:"12",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[n2,e2,t2]),_:1},16))}},o2=n("h1",null,"CSS",-1),a2=n("p",null,"Cascade Style",-1),i2=n("h3",null,"Internal",-1),l2=n("ul",null,[n("li",null,[s("Per ovviare ai problemi degli stili "),n("em",null,"inline"),s(" \xE8 possibile specificare lo stile degli elementi di una pagina, all\u2019interno ("),n("em",null,"internal"),s(") della sezione "),n("code",null,"<style>"),s(" nell\u2019header della pagina HTML.")]),n("li",null,[s("All\u2019interno della sezione "),n("code",null,"<style>"),s(" saranno prersenti le "),n("em",null,[n("strong",null,"regole CSS")]),s(" da applicare a "),n("strong",null,"TUTTA"),s(" la pagina.")]),n("li",null,[s("Normalmente lo stile "),n("em",null,"internal"),s(" si usa quando una pagina ha un unico stile.")])],-1),r2={grid:"~ cols-2 gap-4"},c2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("title")]),n("span",{class:"token punctuation"},">")]),s("Internal CSS"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("title")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      h1 {color: red;} "),n("span",{class:"token comment"},"<!-- Regola CSS -->")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Titolo in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Ancora un Titolo in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Ultimo Titolo in rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")])])])],-1),p2=n("br",null,null,-1),u2=n("div",null,[n("h1",{style:{color:"red"}},"Titolo in rosso"),n("h1",{style:{color:"red"}},"Ancora un Titolo in rosso"),n("h1",{style:{color:"red"}},"Ultimo Titolo in rosso"),n("br")],-1),d2={__name:"13",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[o2,a2,i2,l2,n("div",r2,[y(l,null,{default:g(()=>[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[c2]),_:1},16),p2])]),_:1}),y(l,null,{default:g(()=>[u2]),_:1})])]),_:1},16)}}},m2=n("h1",null,"Esercizio css_02",-1),h2=n("p",null,"CSS Internal",-1),g2=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_01.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_02.html")]),n("li",null,[s("Definire uno stile internal per i tag "),n("code",null,"h2"),s(" e impostare il colore a blue")]),n("li",null,[s("Rispondere alle seguenti domande: "),n("ul",null,[n("li",null,"Tutti i tag h2 sono diventati blue?"),n("li",null,"Perch\xE8?")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_02.html")],-1),f2={__name:"14",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[m2,h2,g2]),_:1},16))}},_2=n("h1",null,"CSS",-1),v2=n("p",null,"Cascade Style",-1),k2=n("h3",null,"External",-1),y2=n("ul",null,[n("li",null,[s("Specificare lo style embedded nella pagina HTML, presenta alcuni svantaggi: "),n("ul",null,[n("li",null,"Rende il codice HTML pi\xF9 difficoltoso da leggere"),n("li",null,"Aumenta la dimensione della pagina html"),n("li",null,"Lo stile si applica ad una singola pagina web e deve essere replicato per altre pagien di un sito")])]),n("li",null,[s("Per ovviare a questi problemi, \xE8 possibile specificare lo stile di una o pi\xF9 pagine (sito) attraverso un file "),n("code",null,".css"),s(" esterno ("),n("em",null,"external style sheet"),s(")")]),n("li",null,[s("In questo modo si ottiene la massima flessibilit\xE0 e per modificare lo stile di un elemento per "),n("strong",null,"TUTTO"),s(" il sito basta fare una singola modifica.")])],-1),b2={__name:"15",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[_2,v2,k2,y2]),_:1},16))}},x2=n("h1",null,"CSS",-1),S2=n("p",null,"Cascade Style",-1),w2=n("h3",null,"External",-1),z2=n("ul",null,[n("li",null,[s("Quindi \xE8 possibile specificare lo stile come file esterno, utilizzanod il tag "),n("code",null,"<link>"),s(" all\u2019interno della sezione "),n("code",null,"<head>"),s(" della pagina HTML.")]),n("li",null,[s("Nello specifico bisogna indicare quale file "),n("code",null,".css"),s(" caricare in questo modo:")])],-1),$2=n("br",null,null,-1),C2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("path/to/file.css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("text/css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])])])],-1),I2=s(' dove: - **rel="stylesheet"**: indica che il contenuto del file modificher\xE0 la parte di stile della pagina - **href="path/to/file.css"**: indica la posizione del file .css (percorso relativo o assoluto) - **type="text/css"**: indica che il file \xE8 di tipo style sheet (CSS) '),T2={__name:"16",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[x2,S2,w2,z2,$2,y(i,B({},{ranges:[""]}),{default:g(()=>[C2]),_:1},16),I2]),_:1},16)}}},E2=n("h1",null,"CSS",-1),M2=n("p",null,"Cascade Style",-1),L2=n("h3",null,"External",-1),P2={grid:"~ cols-3 gap-4"},O2={grid:"col-span-2"},A2=n("p",null,"index.html",-1),R2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),s(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")])]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")])])])],-1),F2=n("div",null,[n("p",null,"stile.css"),n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"h1 {color: red;}")])]),n("h1",{style:{color:"red","font-size":"24px"}},"Titolo in rosso"),n("h1",{style:{color:"red","font-size":"24px"}},"Ancora un Titolo in rosso"),n("h1",{style:{color:"red","font-size":"24px"}},"Ancora un Titolo in rosso"),n("h1",{style:{color:"red","font-size":"24px"}},"Ultimo Titolo in rosso")],-1),D2={__name:"17",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[E2,M2,L2,n("div",P2,[n("div",O2,[A2,y(i,B({},{ranges:[""]}),{default:g(()=>[R2]),_:1},16)]),F2])]),_:1},16)}}},H2=n("h1",null,"Esercizio css_03",-1),N2=n("p",null,"CSS External",-1),j2=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_02.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_03.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_03.css")]),n("li",null,[s("Definire uno stile external per i tag "),n("code",null,"h1"),s(" e "),n("code",null,"h2"),s(" e impostare il colore a verde")]),n("li",null,[s("Rispondere alle seguenti domande: "),n("ul",null,[n("li",null,"Tutti i tag h1 e h2 sono diventati verdi?"),n("li",null,"Perch\xE8?")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_03.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_03.css")],-1),B2={__name:"18",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[H2,N2,j2]),_:1},16))}},q2=n("h1",null,"CSS",-1),W2=n("p",null,"Priorit\xE0 degli stili",-1),K2=n("p",null,"Come visto nelle lezioni e esercizi precedenti, lo stile di un elemento pu\xF2 essere definito in 3 posizioni diverse:",-1),V2=n("ol",null,[n("li",null,"inline come attributo del tag"),n("li",null,"internal nella pagina"),n("li",null,"external in un file .css")],-1),U2=n("p",null,[s("Quindi, se per un elemento sono definiti 3 stili, "),n("strong",null,"quale si applica?")],-1),G2=n("ul",null,[n("li",null,[s("Gli stili si applicano in "),n("em",null,"cascata"),s(" (Cascade) secondo una priorit\xE0 dal livello pi\xF9 basso verso il livello pi\xF9 alto: "),n("ul",null,[n("li",null,"se \xE8 solo presente uno stile external questo viene applicato"),n("li",null,"se \xE8 presente uno stile exgternal e uno stile internal, quello internal viene applicato"),n("li",null,"se sono presenti tutti e tre i livelli di stile, quello inline viene applicato")])])],-1),Y2=n("div",{style:{border:"1px solid black",margin:"15px",padding:"15px",background:"green",color:"yellow"}}," In altre parole viene applicato lo stile pi\xF9 vicino al tag. ",-1),Q2={__name:"19",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[q2,W2,K2,V2,U2,G2,Y2]),_:1},16))}},Z2=n("h1",null,"Esercizio css_04",-1),J2=n("p",null,"CSS External",-1),X2=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_03.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_04.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_04.css")]),n("li",null,"Rimuovere tutti gli stili inline ed internal"),n("li",null,"Inserire tutti gli stilo solo come external"),n("li",null,[s("Rispondere alle seguenti domande: "),n("ul",null,[n("li",null,"Tutti i tag h1 e h2 sono diventati verdi?"),n("li",null,"Perch\xE8?")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_04.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_04.css")],-1),nS={__name:"20",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[Z2,J2,X2]),_:1},16))}},eS=n("h1",{class:"sezione"},"I Selettori",-1),tS={__name:"21",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[eS]),_:1},16))}},sS=n("h1",null,"CSS",-1),oS=n("p",null,"Selettori",-1),aS=n("ul",null,[n("li",null,[s("Come visto in precedenza, una regola CSS inizia sempre con un "),n("em",null,[n("strong",null,"selettore")]),s(".")]),n("li",null,'Un selettore, "cerca" o seleziona uno o pi\xF9 tag HTML a cui applicare la regola CSS e quindi variarne lo stile.'),n("li",null,[s("I selettori CSS possono essere divisi in "),n("strong",null,"5"),s(" categorie: "),n("ol",null,[n("li",null,[n("u",null,[n("em",null,[n("strong",null,"selettori Simple")])]),s(" : selezionano un tag in base al nome, ad un ID o una classe")]),n("li",null,[n("u",null,[n("em",null,[n("strong",null,"selettori Combinator")])]),s(" : selezionano elementi basandosi su specifiche relazioni tra essi")]),n("li",null,[n("u",null,[n("em",null,[n("strong",null,"selettori Pseudo-Class")])]),s(" : selezionano tag in funzione di stati specifici")]),n("li",null,[n("u",null,[n("em",null,[n("strong",null,"selettori Pseudo-Elements")])]),s(" : seleziona solo una parte di un tag")]),n("li",null,[n("u",null,[n("em",null,[n("strong",null,"selettori Attribute")])]),s(" : seleziona tag in base a specifici attributi")])])])],-1),iS={__name:"22",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[sS,oS,aS]),_:1},16))}},lS=n("h1",{class:"sezione"},"Selettori Simple",-1),rS={__name:"23",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[lS]),_:1},16))}},cS=n("h1",null,"CSS",-1),pS=n("p",null,"Selettori Simple",-1),uS=n("h3",null,"element selector",-1),dS=n("ul",null,[n("li",null,[s("Il selettore "),n("em",null,[n("strong",null,"element")]),s(" seleziona tag HTML in base al nome")])],-1),mS=n("p",null,[s("Regola CSS: "),n("code",null,"<nome tag> { dichiarazione CSS}")],-1),hS=n("br",null,null,-1),gS=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[s("p { /* seleziona tutti i tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(" */")]),s(`
`),n("span",{class:"line"},"    color: green;"),s(`
`),n("span",{class:"line"},"    text-align: center; "),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"},[s("h1 { color: red;} /* seleziona tutti i tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(" */")])])],-1),fS={grid:"~ cols-2 gap-4"},_S=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Titolo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo senza stile"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"  Questo \xE8 un paragrafo con uno stile."),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),vS=n("br",null,null,-1),kS=n("h1",{style:{color:"red"}},"Titolo rosso",-1),yS=n("h2",null,"Sottotitolo senza stile",-1),bS=n("p",{style:{color:"green","text-align":"center"}}," Questo \xE8 un paragrafo a cui \xE8 stato applicato uno stile. ",-1),xS={__name:"24",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[cS,pS,uS,dS,mS,hS,y(i,B({},{ranges:[""]}),{default:g(()=>[gS]),_:1},16),n("div",fS,[n("div",null,[y(l,null,{default:g(()=>[y(i,B({},{ranges:[""]}),{default:g(()=>[_S]),_:1},16)]),_:1})]),n("div",null,[y(l,null,{default:g(()=>[vS,kS,yS,bS]),_:1})])])]),_:1},16)}}},SS=n("h1",null,"Esercizio css_05",-1),wS=n("p",null,"CSS element selector",-1),zS=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_04.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_05.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_05.css")]),n("li",null,[s("Definire lo stile esterno in modo che: "),n("ul",null,[n("li",null,[s("tutti i tag "),n("code",null,"h1"),s(" siano Rossi")]),n("li",null,[s("tutti i tag "),n("code",null,"h2"),s(" siano Verdi")]),n("li",null,[s("tutti i tag "),n("code",null,"p"),s(" siano Blue")])])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_05.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_05.css")],-1),$S={__name:"25",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[SS,wS,zS]),_:1},16))}},CS=n("h1",null,"CSS",-1),IS=n("p",null,"Selettori Simple",-1),TS=n("h3",null,"id selector",-1),ES=n("ul",null,[n("li",null,[s("Seleziona un tag con uno specifico valore per l\u2019attributo "),n("em",null,"id")]),n("li",null,[s("Il valore dell\u2019attributo "),n("em",null,"id"),s(" per un tag deve essere "),n("strong",null,"univoco"),s(" all\u2019interno di una pagina e non pu\xF2 iniziare con un numero.")]),n("li",null,"Pertanto questo tipo di selettore \xE8 molto utile per selezionare un singolo elemento all\u2019interno di una pagina.")],-1),MS=n("p",null,[s("Regola CSS: "),n("code",null,"#<valore id> { dichiarazione CSS}")],-1),LS={grid:"~ cols-3 gap-4"},PS=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"p { "),s(`
`),n("span",{class:"line"},"    color: green;"),s(`
`),n("span",{class:"line"},"    text-align: left; "),s(`
`),n("span",{class:"line"},[s("}"),n("span",{class:"token comment"},"<!--seleziona tutti i tag p-->")]),s(`
`),n("span",{class:"line"},"#pr1 { "),s(`
`),n("span",{class:"line"},"  color: blue;"),s(`
`),n("span",{class:"line"},"  text-align: right; "),s(`
`),n("span",{class:"line"},"}<!--seleziona il tag con"),s(`
`),n("span",{class:"line"}," id=prg1-->")])],-1),OS=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Parag element selector"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Parag element selector"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("pr1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Parag id select"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Parag element selector"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),AS=n("p",{style:{color:"green","text-align":"left"}},"Parag element selector",-1),RS=n("p",{style:{color:"green","text-align":"left"}},"Parag element selector",-1),FS=n("p",{style:{color:"blue","text-align":"right"}},"Parag id select",-1),DS=n("p",{style:{color:"green","text-align":"left"}},"Parag element selector",-1),HS={__name:"26",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[CS,IS,TS,ES,MS,n("div",LS,[n("div",null,[y(l,null,{default:g(()=>[y(i,B({},{ranges:[""]}),{default:g(()=>[PS]),_:1},16)]),_:1})]),n("div",null,[y(l,null,{default:g(()=>[y(i,B({},{ranges:[""]}),{default:g(()=>[OS]),_:1},16)]),_:1})]),n("div",null,[y(l,null,{default:g(()=>[AS,RS,FS,DS]),_:1})])])]),_:1},16)}}},NS=n("h1",null,"CSS",-1),jS=n("p",null,"Selettori Simple",-1),BS=n("h3",null,"id selector",-1),qS={class:"grid grid-flow-col auto-cols-max gap-16"},WS=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"<!-- seleziona tutti i tag <p> -->")]),s(`
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
`),n("span",{class:"line"},"}")])],-1),KS=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo iniziale"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("pr1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo #1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("pr2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo #2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("pr3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo #3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo finale"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),VS=n("p",{style:{color:"chartreuse"}},"Paragrafo iniziale",-1),US=n("p",{style:{color:"blue"}},"Paragrafo #1",-1),GS=n("p",{style:{color:"red"}},"Paragrafo #2",-1),YS=n("p",{style:{color:"green"}},"Paragrafo #3",-1),QS=n("p",{style:{color:"chartreuse"}},"Paragrafo finale",-1),ZS={__name:"27",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[NS,jS,BS,n("div",qS,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[WS]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[KS]),_:1},16)]),n("div",null,[y(l,null,{default:g(()=>[VS,US,GS,YS,QS]),_:1})])])]),_:1},16)}}},JS=n("h1",null,"Esercizio css_06",-1),XS=n("p",null,"CSS id selector",-1),nw=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_05.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_06.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_06.css")]),n("li",null,[s("Usando gli id selector, definire lo stile esterno in modo che: "),n("ul",null,[n("li",null,[s("tutti i tag "),n("code",null,"h1"),s(" siano Blue")]),n("li",null,[s("i tag "),n("code",null,"h2"),s(" numero 1,3,5 (partendo dall\u2019alto) siano Rossi")]),n("li",null,[s("i tag "),n("code",null,"h2"),s(" numero 2,4,6 (partendo dall\u2019alto) siano Verdi")]),n("li",null,[s("i tag "),n("code",null,"p"),s(" numero 1,3,5 (partendo dall\u2019alto) siano Grigi")]),n("li",null,[s("i tag "),n("code",null,"p"),s(" numero 2,4,6 (partendo dall\u2019alto) siano Arancioni")])])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_06.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_06.css")],-1),ew={__name:"28",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[JS,XS,nw]),_:1},16))}},tw=n("h1",null,"CSS",-1),sw=n("p",null,"Selettori Simple",-1),ow=n("h3",null,"class selector",-1),aw=n("ul",null,[n("li",null,[s("Seleziona un tag con uno specifico valore per l\u2019attributo "),n("em",null,"class")]),n("li",null,[s("Il valore dell\u2019attributo "),n("em",null,"class"),s(" pu\xF2 essere assegnato ad uno o pi\xF9 tag all\u2019interno di una pagina e non pu\xF2 iniziare con un numero.")]),n("li",null,"Pertanto questo tipo di selettore \xE8 molto utile per selezionare una serie specifica di elementi all\u2019interno di una pagina.")],-1),iw=n("p",null,[s("Regola CSS: "),n("code",null,".<valore class> { dichiarazione CSS}")],-1),lw={class:"grid grid-flow-col auto-cols-max gap-4"},rw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"<!-- seleziona tutti i tag con class=rosso -->")]),s(`
`),n("span",{class:"line"},".rosso { "),s(`
`),n("span",{class:"line"},"  color: red;"),s(`
`),n("span",{class:"line"},"}")])],-1),cw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo semplice"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rosso"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo semplice"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),pw=n("p",null,"Paragrafo semplice",-1),uw=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),dw=n("p",null,"Paragrafo semplice",-1),mw={__name:"29",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[tw,sw,ow,aw,iw,n("div",lw,[n("div",null,[y(l,null,{default:g(()=>[y(i,B({},{ranges:[""]}),{default:g(()=>[rw]),_:1},16)]),_:1})]),n("div",null,[y(l,null,{default:g(()=>[y(i,B({},{ranges:[""]}),{default:g(()=>[cw]),_:1},16)]),_:1})]),n("div",null,[y(l,null,{default:g(()=>[pw,uw,dw]),_:1})])])]),_:1},16)}}},hw=n("h1",null,"CSS",-1),gw=n("p",null,"Selettori Simple",-1),fw=n("h3",null,"class selector",-1),_w={class:"grid grid-flow-col auto-cols-max gap-4"},vw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"<!-- seleziona tutti "),s(`
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
`),n("span",{class:"line"},"}")])],-1),kw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo iniziale"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rosso"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("verde"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo verde"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("verde"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo verde"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rosso"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Paragrafo rosso"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo finale"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),yw=n("p",{style:{color:"blue"}},"Paragrafo iniziale",-1),bw=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),xw=n("p",{style:{color:"green"}},"Paragrafo verde",-1),Sw=n("h2",{style:{color:"green"}},"Sottotitolo verde",-1),ww=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),zw=n("p",{style:{color:"blue"}},"Paragrafo finale",-1),$w={__name:"30",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[hw,gw,fw,n("div",_w,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[vw]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[kw]),_:1},16)]),n("div",null,[y(l,null,{default:g(()=>[yw,bw,xw,Sw,ww,zw]),_:1})])])]),_:1},16)}}},Cw=n("h1",null,"Esercizio css_07",-1),Iw=n("p",null,"CSS class selector",-1),Tw=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_06.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_07.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_07.css")]),n("li",null,[s("Usando i class selector, definire lo stile esterno in modo che: "),n("ul",null,[n("li",null,[s("tutti i tag "),n("code",null,"h1"),s(" siano Blue")]),n("li",null,[s("i tag "),n("code",null,"h2"),s(" numero 1,3,5 (partendo dall\u2019alto) siano Verdi")]),n("li",null,[s("i tag "),n("code",null,"h2"),s(" numero 2,4,6 (partendo dall\u2019alto) siano Rossi")]),n("li",null,[s("i tag "),n("code",null,"p"),s(" numero 1,3,5 (partendo dall\u2019alto) siano Arancioni")]),n("li",null,[s("i tag "),n("code",null,"p"),s(" numero 2,4,6 (partendo dall\u2019alto) siano Grigi")])])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_07.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_07.css")],-1),Ew={__name:"31",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[Cw,Iw,Tw]),_:1},16))}},Mw=n("h1",null,"CSS",-1),Lw=n("p",null,"Selettori Simple",-1),Pw=n("h3",null,"grouping selector",-1),Ow=n("ul",null,[n("li",null,"Seleziona una serie di tag in base al loro nome."),n("li",null,[s("In altre parole \xE8 un "),n("em",null,"element selector"),s(" multiplo che permette di applicare una stessa regola CSS a pi\xF9 tag contemporaneamente.")]),n("li",null,"Questo selettore \xE8 molto utile per applicare uno stile comune a pi\xF9 tag in una pagina. Semplifica notevolmente la manutenzione")],-1),Aw=n("p",null,[s("Regola CSS: "),n("code",null,"<nome tag1>, <nome tag2>, .... <nome tagN> { dichiarazione CSS}")],-1),Rw={__name:"32",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[Mw,Lw,Pw,Ow,Aw]),_:1},16))}},Fw=n("h1",null,"CSS",-1),Dw=n("p",null,"Selettori Simple",-1),Hw=n("h3",null,"grouping selector",-1),Nw={class:"grid grid-flow-col auto-cols-max gap-8"},jw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
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
`),n("span",{class:"line"},"}")])],-1),Bw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])])])],-1),qw=n("h1",{style:{color:"red","text-decoration":"underline","text-decoration-color":"blue"}},"Titolo",-1),Ww=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),Kw=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),Vw=n("h2",{style:{color:"red","text-decoration":"underline","text-decoration-color":"blue"}},"Sottotitolo",-1),Uw=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),Gw=n("p",{style:{color:"red"}},"Paragrafo rosso",-1),Yw=n("h3",null,"Sotto sotto titolo",-1),Qw=n("h2",{style:{color:"red","text-decoration":"underline","text-decoration-color":"blue"}},"Sottotitolo",-1),Zw={__name:"33",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[Fw,Dw,Hw,n("div",Nw,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[jw]),_:1},16)]),n("div",null,[y(l,null,{default:g(()=>[y(i,B({},{ranges:[""]}),{default:g(()=>[Bw]),_:1},16)]),_:1})]),n("div",null,[y(l,null,{default:g(()=>[qw,Ww,Kw,Vw,Uw,Gw,Yw,Qw]),_:1})])])]),_:1},16)}}},Jw=n("h1",null,"Esercizio css_08",-1),Xw=n("p",null,"CSS simple selector",-1),n3=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_css_07.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_08.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_08.css")]),n("li",null,"definire lo stile per tutti gli heading h1, he e h3 con colore rosso e sottolineatura grigia"),n("li",null,"definire lo stile per tutti i paragrafi con colore blue e allineamento del testo a sinistra"),n("li",null,"definire lo stile per il terzo heading h2 con colore verde"),n("li",null,"definire lo stile per il settimo paragrafo con colore rosso e allineamento del testo a destra"),n("li",null,[s("definire lo stile per tutti i tag "),n("code",null,"<hr>"),s(" pari con colore nero e spessore 10px (contando dal primo tag hr)")]),n("li",null,[s("definire lo stile per tutti i tag "),n("code",null,"<hr>"),s(" dispari con colore rosso e spessore 3px (contando dal primo tag hr)")]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_08.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_08.css")],-1),e3={__name:"34",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[Jw,Xw,n3]),_:1},16))}},t3=n("h1",{class:"sezione"},"Selettori Combinator",-1),s3={__name:"35",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[t3]),_:1},16))}},o3="/TPSI/4/css/assets/css_02.5163b853.jpg",a3=n("h1",null,"Document Object Model",-1),i3=n("p",null,"DOM",-1),l3=n("ul",null,[n("li",null,[s("Ogni tag e elemento HTML \xE8 un "),n("strong",null,"oggetto")]),n("li",null,"Quando una pagina web \xE8 caricata, il browser crea una rappresentazione ad albero dei suoi elementi."),n("li",null,[s("Questo albero si chiama "),n("em",null,[n("strong",null,"Document Object Model")]),s(" o "),n("em",null,[n("strong",null,"DOM")]),s(".")])],-1),r3=n("p",null,[n("code",null,"il DOM \xE8 una rappresentazione ad albero degli oggetti della pagina HTML")],-1),c3=n("img",{src:o3,width:"500"},null,-1),p3={__name:"36",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[a3,i3,l3,r3,y(i,null,{default:g(()=>[c3]),_:1})]),_:1},16)}}},u3=n("h1",null,"Document Object Model",-1),d3=n("p",null,"DOM",-1),m3=n("ul",null,[n("li",null,[s("Il DOM si manipola atraverso l\u2019oggetto pi\xF9 di alto livello "),n("strong",null,"Document")]),n("li",null,[n("code",null,"html"),s(" \xE8 il Root element del DOM")]),n("li",null,[s("La manipolazione del DOM da parte di JavaScript \xE8 alla base del moderno paradigma di sviluppo web, infatti: "),n("ul",null,[n("li",null,"JS pu\xF2 navigare nel DOM ed accedere a tutti gli oggetti"),n("li",null,"JS pu\xF2 manipolare tutti i tag ed attributi HTML di una pagina"),n("li",null,"JS pu\xF2 aggiungere o rimuovere elementi HTML ad una pagina"),n("li",null,"JS pu\xF2 modificare tutti gli stili di una pagina"),n("li",null,"JS pu\xF2 gestire tutti gli eventi di una pagina")])])],-1),h3={__name:"37",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[u3,d3,m3]),_:1},16))}},g3="/TPSI/4/css/assets/css_02a.45aff8c5.png",f3=n("h1",null,"Document Object Model",-1),_3=n("p",null,"DOM",-1),v3=n("ul",null,[n("li",null,[s("Per accedere al DOM di una pagina attraverso Chrome basta selezionare la pagine e dal men\xF9 contestuale (right-click) selezionare "),n("strong",null,"Ispeziona")])],-1),k3=n("br",null,null,-1),y3=n("img",{src:g3,width:"500"},null,-1),b3={__name:"38",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[f3,_3,v3,k3,y(i,null,{default:g(()=>[y3]),_:1})]),_:1},16)}}},x3="/TPSI/4/css/assets/css_02b.764deb5b.png",S3=n("h1",null,"Document Object Model",-1),w3=n("p",null,"DOM",-1),z3=n("img",{src:x3,width:"600"},null,-1),$3={__name:"39",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[S3,w3,y(i,null,{default:g(()=>[z3]),_:1})]),_:1},16)}}},C3="/TPSI/4/css/assets/css_02c.4d1742bb.png",I3="/TPSI/4/css/assets/css_02d.4c9c32c1.png",T3=n("h1",null,"Document Object Model",-1),E3=n("p",null,"DOM",-1),M3=n("ul",null,[n("li",null,"In questa finestra \xE8 possibile navigare tutto il DOM della pagina"),n("li",null,"E\u2019 possibile vederne l\u2019oragnizzazione gerarchica"),n("li",null,"E\u2019 possibile modificare qualsiasi oggetto vedendo immediatamente il risultato")],-1),L3=n("br",null,null,-1),P3=n("table",null,[n("tr",null,[n("td",null,[n("img",{src:C3,width:"500"})]),n("td",null,[n("img",{src:I3,width:"500"})])])],-1),O3={__name:"40",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[T3,E3,M3,L3,P3]),_:1},16))}},A3="/TPSI/4/css/assets/css_02e.2f978faf.png",R3="/TPSI/4/css/assets/css_02f.e5ef202c.png",F3=n("h1",null,"Document Object Model",-1),D3=n("p",null,"DOM",-1),H3=n("br",null,null,-1),N3=n("table",null,[n("tr",null,[n("td",null,[n("img",{src:A3,width:"500"})]),n("td",null,[n("img",{src:R3,width:"500"})])])],-1),j3={__name:"41",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[F3,D3,H3,N3]),_:1},16))}},B3="/TPSI/4/css/assets/css_02g.e81604b5.png",q3=n("h1",null,"Document Object Model",-1),W3=n("p",null,"DOM",-1),K3=n("ul",null,[n("li",null,[s("Un altro strumento che pu\xF2 essere utile \xE8 "),n("a",{href:"http://software.hixie.ch/utilities/js/live-dom-viewer/",target:"_blank",rel:"noopener"},"Live DOM Viewer")])],-1),V3=n("img",{src:B3,width:"600"},null,-1),U3={__name:"42",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[q3,W3,K3,y(i,null,{default:g(()=>[V3]),_:1})]),_:1},16)}}},G3=n("h1",null,"Esercizio css_09",-1),Y3=n("p",null,"DOM",-1),Q3=n("ol",null,[n("li",null,[s("Analizzare il DOM della pagina "),n("em",null,"|cognome|_esercizio_css_08.html"),s(" con: "),n("ul",null,[n("li",null,"Google Chrome Developer Tools"),n("li",null,"Live DOM Viewer")])])],-1),Z3={__name:"43",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[G3,Y3,Q3]),_:1},16))}},J3=n("h1",null,"CSS",-1),X3=n("p",null,"Selettori Combinator",-1),nz=n("h3",null,"child selector",-1),ez=n("ul",null,[n("li",null,[s("Seleziona tutti i tag che sono "),n("strong",null,'"figli diretti"'),s(" di uno specifico tag.")])],-1),tz=n("p",null,[s("Regola CSS: "),n("code",null,"<nome tag padre> > <nome tag figlio> { dichiarazione CSS}")],-1),sz={class:"grid grid-flow-col auto-cols-max gap-4"},oz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("!--")]),s(),n("span",{class:"token attr-name"},"seleziona"),s(),n("span",{class:"token attr-name"},"tutti"),s(),n("span",{class:"token attr-name"},"i"),s(),n("span",{class:"token attr-name"},"tag"),s(),n("span",{class:"token attr-name"},"<p"),n("span",{class:"token punctuation"},">")]),s()]),s(`
`),n("span",{class:"line"},[s("  figli di un "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(" -->")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"div > p {"),s(`
`),n("span",{class:"line"},"  background-color: yellow;"),s(`
`),n("span",{class:"line"},"}")])],-1),az=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo singolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),iz=n("h2",null,"Sottotitolo",-1),lz=n("p",null,"Paragrafo singolo",-1),rz=n("div",null,[U(" questo <p> \xE8 figlio di <div> "),n("p",{style:{"background-color":"yellow"}},"Paragrafo figlio di div"),n("span",null,[U(" questo <p> \xE8 figlio di <span> "),n("p",null,"Paragrafo parente di div")]),n("p",{style:{"background-color":"yellow"}},"Paragrafo figlio di div")],-1),cz=n("p",null,"Paragrafo singolo",-1),pz={__name:"44",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[J3,X3,nz,ez,tz,n("div",sz,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[oz]),_:1},16)]),n("div",null,[y(l,null,{default:g(()=>[y(i,B({},{ranges:[""]}),{default:g(()=>[az]),_:1},16)]),_:1})]),n("div",null,[y(l,null,{default:g(()=>[iz,lz,rz,cz]),_:1})])])]),_:1},16)}}},uz="/TPSI/4/css/assets/css_03.drawio.be0a5673.svg",dz=n("h1",null,"CSS",-1),mz=n("p",null,"Selettori Combinator",-1),hz=n("h3",null,"child selector",-1),gz={grid:"~ cols-2 gap-4"},fz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo singolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),_z=n("img",{src:uz,width:"300"},null,-1),vz={__name:"45",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=Bn("center"),r=qn;return v(),z(P,T(I(t)),{default:g(()=>[dz,mz,hz,n("div",gz,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[fz]),_:1},16)]),n("div",null,[y(r,null,{default:g(()=>[y(l,null,{default:g(()=>[_z]),_:1})]),_:1})])])]),_:1},16)}}},kz=n("h1",null,"Esercizio css_10",-1),yz=n("p",null,"CSS child selector",-1),bz=n("ol",null,[n("li",null,[s("Dato il file "),n("a",{href:"https://profmancusoa.github.io/TPSI/support/esercizio_css_10.html",target:"_blank",rel:"noopener"},"esercizio_css_10.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_10.css")]),n("li",null,"Definire lo stile per tutti i tag span figli diretti di h1 in modo che siano di colore blue"),n("li",null,"Definire lo stile per tutti i tag span figli diretti di h2 in modo che siano di colore rossi"),n("li",null,"Definire lo stile per tutti i tag span figli diretti di un paragrafo in modo che siano di colore viola"),n("li",null,"Definire lo stile per tutti i tag span nipoti di div e figli di p in modo che siano di colore verde scuro"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_10.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_10.css")],-1),xz={__name:"46",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[kz,yz,bz]),_:1},16))}},Sz=n("h1",null,"CSS",-1),wz=n("p",null,"Selettori Combinator",-1),zz=n("h3",null,"descendant selector",-1),$z=n("ul",null,[n("li",null,[s("Seleziona tutti i tag che sono "),n("strong",null,'"discendenti"'),s(" di uno specifico tag.")])],-1),Cz=n("p",null,[s("Regola CSS: "),n("code",null,"<nome tag padre> <nome tag discendente> { dichiarazione CSS}")],-1),Iz={class:"grid grid-flow-col auto-cols-max gap-4"},Tz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("!--")]),s(),n("span",{class:"token attr-name"},"seleziona"),s(),n("span",{class:"token attr-name"},"tutti"),s(),n("span",{class:"token attr-name"},"i"),s(),n("span",{class:"token attr-name"},"tag"),s(),n("span",{class:"token attr-name"},"<p"),n("span",{class:"token punctuation"},">")]),s()]),s(`
`),n("span",{class:"line"},[s("  discendenti di un "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(" -->")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"div  p {"),s(`
`),n("span",{class:"line"},"  background-color: yellow;"),s(`
`),n("span",{class:"line"},"}")])],-1),Ez=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo singolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),Mz=n("h2",null,"Sottotitolo",-1),Lz=n("p",null,"Paragrafo singolo",-1),Pz=n("div",null,[n("p",{style:{"background-color":"yellow"}},"Paragrafo figlio di div"),n("span",null,[n("p",{style:{"background-color":"yellow"}},"Paragrafo parente di div")]),n("p",{style:{"background-color":"yellow"}},"Paragrafo figlio di div")],-1),Oz=n("p",null,"Paragrafo singolo",-1),Az={__name:"47",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[Sz,wz,zz,$z,Cz,n("div",Iz,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[Tz]),_:1},16)]),n("div",null,[y(l,null,{default:g(()=>[y(i,B({},{ranges:[""]}),{default:g(()=>[Ez]),_:1},16)]),_:1})]),n("div",null,[y(l,null,{default:g(()=>[Mz,Lz,Pz,Oz]),_:1})])])]),_:1},16)}}},Rz="/TPSI/4/css/assets/css_04.drawio.25e3f00d.svg",Fz=n("h1",null,"CSS",-1),Dz=n("p",null,"Selettori Combinator",-1),Hz=n("h3",null,"descendant selector",-1),Nz={grid:"~ cols-2 gap-4"},jz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Sottotitolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")])]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Paragrafo singolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1),Bz=n("img",{src:Rz,width:"300"},null,-1),qz={__name:"48",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=Bn("center"),r=qn;return v(),z(P,T(I(t)),{default:g(()=>[Fz,Dz,Hz,n("div",Nz,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[jz]),_:1},16)]),n("div",null,[y(r,null,{default:g(()=>[y(l,null,{default:g(()=>[Bz]),_:1})]),_:1})])])]),_:1},16)}}},Wz=n("h1",null,"Esercizio css_11",-1),Kz=n("p",null,"CSS descendant selector",-1),Vz=n("ol",null,[n("li",null,[s("Dato il file "),n("a",{href:"https://profmancusoa.github.io/TPSI/support/esercizio_css_11.html",target:"_blank",rel:"noopener"},"esercizio_css_11.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_11.css")]),n("li",null,[s("definire lo stile per tutti i tag "),n("code",null,"<mark>"),s(" che sono figli di "),n("code",null,"<p>"),s(" con colore verde")]),n("li",null,[s("definire lo stile per tutti i tag "),n("code",null,"<b>"),s(" che sono figli di "),n("code",null,"<p>"),s(" con colore giallo e sfondo nero")]),n("li",null,[s("definire lo stile per tutti i tag "),n("code",null,"<em>"),s(" che sono discendenti di "),n("code",null,"<div>"),s(" con rosso su sfondo giallo")]),n("li",null,[s("definire lo stile per tutti i tag "),n("code",null,"<span>"),s(" che sono discendenti di "),n("code",null,"<div>"),s(" con sfondo giallo e colore nero")]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_11.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_11.css")],-1),Uz={__name:"49",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[Wz,Kz,Vz]),_:1},16))}},Gz=n("h1",{class:"sezione"},"Selettori Pseudo-Class",-1),Yz={__name:"50",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[Gz]),_:1},16))}};const Is=e=>(kn("data-v-65e96966"),e=e(),yn(),e),Qz=Is(()=>n("h1",null,"CSS",-1)),Zz=Is(()=>n("p",null,"Selettori Pseudo-Class",-1)),Jz=Is(()=>n("ul",null,[n("li",null,[s("Un selettore "),n("em",null,[n("strong",null,"Pseudo Class")]),s(" \xE8 utilizzato per applicare una regola CSS in funzione dello stato di un tag.")]),n("li",null,[s("Per esempio, pu\xF2 essere usato per: "),n("ul",null,[n("li",null,[s("Definire lo stile di un elemento quando l\u2019utente ci passa sopra con il mouse ("),n("em",null,"mouse hover"),s(")")]),n("li",null,"Definire stili diversi per un link gi\xE0 visitato"),n("li",null,[s("Definire lo stile per un elemento che ha ricevuto il focus ("),n("em",null,"mouse e tastiera associati all\u2019elemento"),s(")")])])])],-1)),Xz=Is(()=>n("p",null,[s("Regola CSS: "),n("code",null,"<selettore>:<pseudo classe> { dichiarazione CSS}")],-1)),n$={class:"grid grid-flow-col auto-cols-max gap-8"},e$=Is(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[s("a:link { color: blue; } "),n("span",{class:"token comment"},"<!-- unvisited link -->")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("a:visited { color: green; } "),n("span",{class:"token comment"},"<!-- visited link -->")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("a:hover { color: red; background: yellow;} "),n("span",{class:"token comment"},"<!-- mouse over link -->")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("a:active { color: grey; } "),n("span",{class:"token comment"},"<!--  selected link -->")])])],-1)),t$=Is(()=>n("div",null,[n("a",{href:"https://www.linux.it/linux",target:"_blank"},"Link ad una risorsa esterna")],-1)),s$={__name:"51",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[Qz,Zz,Jz,Xz,n("div",n$,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[e$]),_:1},16)]),t$])]),_:1},16)}}},o$=vn(s$,[["__scopeId","data-v-65e96966"]]);const $t=e=>(kn("data-v-21b7f755"),e=e(),yn(),e),a$=$t(()=>n("h1",null,"CSS",-1)),i$=$t(()=>n("p",null,"Selettori Pseudo-Class",-1)),l$=$t(()=>n("h3",null,"pseudo class",-1)),r$={class:"grid grid-flow-col auto-cols-max gap-8"},c$=$t(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"div:hover {"),s(`
`),n("span",{class:"line"},"  background-color: blue;"),s(`
`),n("span",{class:"line"},"  color:white;"),s(`
`),n("span",{class:"line"},"  border: 5px dashed red;"),s(`
`),n("span",{class:"line"},"}")])],-1)),p$=$t(()=>n("div",null,[n("div",{id:"id1"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I ")],-1)),u$=$t(()=>n("p",null,[n("br"),n("br")],-1)),d$={class:"grid grid-flow-col auto-cols-max gap-8"},m$=$t(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"input:focus {"),s(`
`),n("span",{class:"line"},"  background: #D3D3D3;"),s(`
`),n("span",{class:"line"},"  color: blue;"),s(`
`),n("span",{class:"line"},"}")])],-1)),h$=$t(()=>n("div",null,[n("form",null,[n("label",{for:"fname"},"\xA0\xA0\xA0\xA0\xA0\xA0Nome:\xA0\xA0"),n("input",{type:"text",id:"fname",name:"fname",placeholder:"Inserisci il tuo nome"}),n("br"),n("br"),n("label",{for:"lname"},"Cognome:\xA0\xA0"),n("input",{type:"text",id:"lname",name:"lname",placeholder:"Inserisci il tuo cognome"}),n("br"),n("br")])],-1)),g$={__name:"52",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[a$,i$,l$,n("div",r$,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[c$]),_:1},16)]),p$]),u$,n("div",d$,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[m$]),_:1},16)]),h$])]),_:1},16)}}},f$=vn(g$,[["__scopeId","data-v-21b7f755"]]);const ee=e=>(kn("data-v-07e4e241"),e=e(),yn(),e),_$=ee(()=>n("h1",null,"CSS",-1)),v$=ee(()=>n("p",null,"Selettori Pseudo-Class",-1)),k$=ee(()=>n("h3",null,"first child",-1)),y$=ee(()=>n("ul",null,[n("li",null,[s("La pseudo classe "),n("code",null,"first-child"),s(' seleziona solo il primo dei tag "figlii" di un altro elemento')])],-1)),b$=ee(()=>n("p",null,[s("Regola CSS: "),n("code",null,"<selettore>:first-child { dichiarazione CSS}")],-1)),x$={grid:"~ cols-3 gap-4"},S$=ee(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"h1 {"),s(`
`),n("span",{class:"line"},"  color: red;"),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"h1:first-child { "),s(`
`),n("span",{class:"line"},"  color: yellow; "),s(`
`),n("span",{class:"line"},"  background: grey;"),s(`
`),n("span",{class:"line"},"}")])],-1)),w$=ee(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Primo titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Secondo titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Terzo titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Quarto titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Quitno titolo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])])])],-1)),z$=ee(()=>n("h4",null,"Primo titolo",-1)),$$=ee(()=>n("br",null,null,-1)),C$=ee(()=>n("h4",null,"Secondo titolo",-1)),I$=ee(()=>n("br",null,null,-1)),T$=ee(()=>n("h4",null,"Terzo titolo",-1)),E$=ee(()=>n("br",null,null,-1)),M$=ee(()=>n("h4",null,"Quarto titolo",-1)),L$=ee(()=>n("br",null,null,-1)),P$=ee(()=>n("h4",null,"Quitno titolo",-1)),O$=ee(()=>n("br",null,null,-1)),A$={__name:"53",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[_$,v$,k$,y$,b$,n("div",x$,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[S$]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[w$]),_:1},16)]),n("div",null,[y(l,null,{default:g(()=>[z$,$$,C$,I$,T$,E$,M$,L$,P$,O$]),_:1})])])]),_:1},16)}}},R$=vn(A$,[["__scopeId","data-v-07e4e241"]]),F$=n("h1",null,"Esercizio css_12",-1),D$=n("p",null,"CSS pseudo-class selector",-1),H$=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_html_11.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_12.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_12.css")]),n("li",null,"definire lo stile per tutte le ancore in modo che i link normalmente siano di colore blu, quando visitati di colore rosso con sfondo giallo, e quando l\u2019utente ci passa sopra con il mouse siano di colore verde"),n("li",null,"definire lo stile per il primo titolo di livello 1 in modo che siano sottolineati e di colore blue"),n("li",null,"definire lo stile per il primo titolo di livello 2 in modo che siano di colore verde"),n("li",null,"definire lo stile per il primo paragrafo in modo che siano colore rosso ed il testo sia allineato a sinistra"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_12.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_12.css")],-1),N$={__name:"54",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[F$,D$,H$]),_:1},16))}},j$=n("h1",null,"CSS",-1),B$=n("p",null,"Selettori Pseudo-Class",-1),q$=n("h3",null,"nth-child",-1),W$=n("ul",null,[n("li",null,[s("La pseudo classe "),n("code",null,"nth-child"),s(" seleziona una serie di elementi fratelli in funzione della loro posizione")])],-1),K$=n("p",null,[s("Regola CSS: "),n("code",null,"<selettore>:nth-child(parametro) { dichiarazione CSS}")],-1),V$=n("p",null,"dove parametro pu\xF2 essere:",-1),U$=n("ul",null,[n("li",null,[n("strong",null,"odd"),s(": seleziona gli elementi con posizione dispari")]),n("li",null,[n("strong",null,"even"),s(": seleziona gli elementi con posizione pari")]),n("li",null,[n("strong",null,"An+B"),s(": "),n("ul",null,[n("li",null,"A: definisce lo step"),n("li",null,"B: definisce l\u2019offset iniziale"),n("li",null,"n: \xE8 un intero progressivo che parte da 0")])])],-1),G$={__name:"55",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[j$,B$,q$,W$,K$,V$,U$]),_:1},16))}};const Ts=e=>(kn("data-v-afa8da43"),e=e(),yn(),e),Y$=Ts(()=>n("h1",null,"CSS",-1)),Q$=Ts(()=>n("p",null,"Selettori Pseudo-Class",-1)),Z$=Ts(()=>n("h3",null,"nth-child",-1)),J$={grid:"~ cols-3 gap-4"},X$=Ts(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"li:nth-child(even) {"),s(`
`),n("span",{class:"line"},"    color: red;"),s(`
`),n("span",{class:"line"},"    background-color: yellow;"),s(`
`),n("span",{class:"line"},"}")])],-1)),nC=Ts(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 7"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 9"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])])])],-1)),eC=Ts(()=>n("ul",null,[n("li",null,"item 1"),n("li",null,"item 2"),n("li",null,"item 3"),n("li",null,"item 4"),n("li",null,"item 5"),n("li",null,"item 6"),n("li",null,"item 7"),n("li",null,"item 8"),n("li",null,"item 9"),n("li",null,"item 10")],-1)),tC={__name:"56",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[Y$,Q$,Z$,n("div",J$,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[X$]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[nC]),_:1},16)]),n("div",null,[y(l,null,{default:g(()=>[eC]),_:1})])])]),_:1},16)}}},sC=vn(tC,[["__scopeId","data-v-afa8da43"]]);const Es=e=>(kn("data-v-4ce34853"),e=e(),yn(),e),oC=Es(()=>n("h1",null,"CSS",-1)),aC=Es(()=>n("p",null,"Selettori Pseudo-Class",-1)),iC=Es(()=>n("h3",null,"nth-child",-1)),lC={grid:"~ cols-3 gap-4"},rC=Es(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"li:nth-child(odd) {"),s(`
`),n("span",{class:"line"},"    color: red;"),s(`
`),n("span",{class:"line"},"    background-color: yellow;"),s(`
`),n("span",{class:"line"},"}")])],-1)),cC=Es(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 7"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 9"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])])])],-1)),pC=Es(()=>n("ul",null,[n("li",null,"item 1"),n("li",null,"item 2"),n("li",null,"item 3"),n("li",null,"item 4"),n("li",null,"item 5"),n("li",null,"item 6"),n("li",null,"item 7"),n("li",null,"item 8"),n("li",null,"item 9"),n("li",null,"item 10")],-1)),uC={__name:"57",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[oC,aC,iC,n("div",lC,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[rC]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[cC]),_:1},16)]),n("div",null,[y(l,null,{default:g(()=>[pC]),_:1})])])]),_:1},16)}}},dC=vn(uC,[["__scopeId","data-v-4ce34853"]]);const Ms=e=>(kn("data-v-e8fe9952"),e=e(),yn(),e),mC=Ms(()=>n("h1",null,"CSS",-1)),hC=Ms(()=>n("p",null,"Selettori Pseudo-Class",-1)),gC=Ms(()=>n("h3",null,"nth-child",-1)),fC={grid:"~ cols-3 gap-4"},_C=Ms(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"li:nth-child(2n+5) {"),s(`
`),n("span",{class:"line"},"    color: red;"),s(`
`),n("span",{class:"line"},"    background-color: yellow;"),s(`
`),n("span",{class:"line"},"}")])],-1)),vC=Ms(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 7"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 9"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])])])],-1)),kC=Ms(()=>n("ul",null,[n("li",null,"item 1"),n("li",null,"item 2"),n("li",null,"item 3"),n("li",null,"item 4"),n("li",null,"item 5"),n("li",null,"item 6"),n("li",null,"item 7"),n("li",null,"item 8"),n("li",null,"item 9"),n("li",null,"item 10")],-1)),yC={__name:"58",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[mC,hC,gC,n("div",fC,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[_C]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[vC]),_:1},16)]),n("div",null,[y(l,null,{default:g(()=>[kC]),_:1})])])]),_:1},16)}}},bC=vn(yC,[["__scopeId","data-v-e8fe9952"]]);const Ls=e=>(kn("data-v-ec2f1ad6"),e=e(),yn(),e),xC=Ls(()=>n("h1",null,"CSS",-1)),SC=Ls(()=>n("p",null,"Selettori Pseudo-Class",-1)),wC=Ls(()=>n("h3",null,"nth-child",-1)),zC={grid:"~ cols-3 gap-4"},$C=Ls(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"li:nth-child(2n+1) {"),s(`
`),n("span",{class:"line"},"    color: red;"),s(`
`),n("span",{class:"line"},"    background-color: yellow;"),s(`
`),n("span",{class:"line"},"}")])],-1)),CC=Ls(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 7"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 9"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])])])],-1)),IC=Ls(()=>n("ul",null,[n("li",null,"item 1"),n("li",null,"item 2"),n("li",null,"item 3"),n("li",null,"item 4"),n("li",null,"item 5"),n("li",null,"item 6"),n("li",null,"item 7"),n("li",null,"item 8"),n("li",null,"item 9"),n("li",null,"item 10")],-1)),TC={__name:"59",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[xC,SC,wC,n("div",zC,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[$C]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[CC]),_:1},16)]),n("div",null,[y(l,null,{default:g(()=>[IC]),_:1})])])]),_:1},16)}}},EC=vn(TC,[["__scopeId","data-v-ec2f1ad6"]]);const Ps=e=>(kn("data-v-dd1f099c"),e=e(),yn(),e),MC=Ps(()=>n("h1",null,"CSS",-1)),LC=Ps(()=>n("p",null,"Selettori Pseudo-Class",-1)),PC=Ps(()=>n("h3",null,"nth-child",-1)),OC={grid:"~ cols-3 gap-4"},AC=Ps(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"li:nth-child(2n) {"),s(`
`),n("span",{class:"line"},"    color: red;"),s(`
`),n("span",{class:"line"},"    background-color: yellow;"),s(`
`),n("span",{class:"line"},"}")])],-1)),RC=Ps(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 7"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 9"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("item 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])])])],-1)),FC=Ps(()=>n("ul",null,[n("li",null,"item 1"),n("li",null,"item 2"),n("li",null,"item 3"),n("li",null,"item 4"),n("li",null,"item 5"),n("li",null,"item 6"),n("li",null,"item 7"),n("li",null,"item 8"),n("li",null,"item 9"),n("li",null,"item 10")],-1)),DC={__name:"60",setup(e){const t={};return x($),(o,a)=>{const i=rn,l=qn;return v(),z(P,T(I(t)),{default:g(()=>[MC,LC,PC,n("div",OC,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[AC]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[RC]),_:1},16)]),n("div",null,[y(l,null,{default:g(()=>[FC]),_:1})])])]),_:1},16)}}},HC=vn(DC,[["__scopeId","data-v-dd1f099c"]]),NC=n("h1",null,"Esercizio css_12a",-1),jC=n("p",null,"CSS pseudo-class selector",-1),BC=n("ol",null,[n("li",null,[s("Creare un file "),n("em",null,"|cognome|_esercizio_html_12a.html"),s(" e inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_12a.css")]),n("li",null,[s("Creare una scacchiera 8x8 in cui "),n("ol",null,[n("li",null,"in ogni cella viene scritta la coordinata in forma righa,colonna (partendo da zero)"),n("li",null,"colorare le celle esattamente come in una scacchiera per scacchi")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_12a.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_12a.css")],-1),qC={__name:"61",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[NC,jC,BC]),_:1},16))}},WC=n("h1",{class:"sezione"},[n("span",{style:{color:"green"}},"Un Web a Colori")],-1),KC={__name:"62",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[WC]),_:1},16))}},VC=n("h1",null,"CSS",-1),UC=n("p",null,"Colori",-1),GC=n("ul",null,[n("li",null,[n("p",null,"In CSS ci sono vari modi per specificare un colore in una propriet\xE0:"),n("ol",null,[n("li",null,[s("Specificando il nome di uno dei "),n("a",{href:"https://www.w3schools.com/colors/colors_names.asp",target:"_blank",rel:"noopener"},"140 colori supportati"),s(" (Red, LightGray, Orange, \u2026)")]),n("li",null,[s("Usando un valore "),n("em",null,[n("strong",null,"RGB")]),s(" (Red Green Blue) nella forma "),n("code",null,"rgb(240, 124, 22)")]),n("li",null,[s("Usando un valore "),n("em",null,[n("strong",null,"HEX")]),s(" nel forma "),n("code",null,"#RRGGBB"),s(" - "),n("em",null,[n("strong",null,"#F1A3C4")])]),n("li",null,[s("Usando un valore "),n("em",null,[n("strong",null,"HSL")]),s(" nella forma "),n("code",null,"hsl(5, 30%, 54%)")])])]),n("li",null,[n("p",null,[s("Inoltre \xE8 possibile anche specificare un parametro di trasparenza ("),n("em",null,[n("strong",null,"alpha")]),s(") compreso tra 0 e 1")]),n("ol",{start:"5"},[n("li",null,[s("Usando un valore "),n("em",null,[n("strong",null,"RGBA")]),s(" (Red Green Blue Alpga) nella forma "),n("code",null,"rgba(240, 124, 22, 0.5)")]),n("li",null,[s("Usando un valore "),n("em",null,[n("strong",null,"HSLA")]),s(" nella forma "),n("code",null,"hsla(5, 30%, 54%, 0.81)")])])])],-1),YC={__name:"63",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[VC,UC,GC]),_:1},16))}};const Wa=e=>(kn("data-v-34bde525"),e=e(),yn(),e),QC=Wa(()=>n("h1",null,"CSS",-1)),ZC=Wa(()=>n("p",null,"Colori",-1)),JC={class:"grid grid-flow-col auto-cols-max gap-8"},XC=Wa(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"#id1"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token selector"},"#id6"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"hsla"),n("span",{class:"token punctuation"},"("),s("249"),n("span",{class:"token punctuation"},","),s(" 73%"),n("span",{class:"token punctuation"},","),s(" 40%"),n("span",{class:"token punctuation"},","),s(" 0.75"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")])])],-1)),n4=Wa(()=>n("div",null,[n("div",{id:"id1"},"red"),n("br"),n("div",{id:"id2"},"#56d3f8"),n("br"),n("div",{id:"id3"},"rgb(23, 182, 85)"),n("br"),n("div",{id:"id4"},"rgba(23, 182, 85, 0.5)"),n("br"),n("div",{id:"id5"},"hsl(249, 73%, 40%);"),n("br"),n("div",{id:"id6"},"hsla(249, 73%, 40%, 0.75)"),n("br")],-1)),e4={__name:"64",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[QC,ZC,n("div",JC,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[XC]),_:1},16)]),n4])]),_:1},16)}}},t4=vn(e4,[["__scopeId","data-v-34bde525"]]),s4=n("h1",null,"CSS",-1),o4=n("p",null,"Colori",-1),a4=n("ul",null,[n("li",null,"Un problema principale (almeno per gli informatici :) ) \xE8 l\u2019accostamento dei colori"),n("li",null,"Un sito risulta gradevole se i colori sono armoniosi e scelti secondo regole precise"),n("li",null,"Fortunatamente per realizzare le nostre pagine Web possiamo ricorrete ad una moltitudine di strumenti disponibili sul web in forma gratuita"),n("li",null,[s("Questi strumenti prendono il nome di "),n("code",null,"palette generator"),s(" o "),n("code",null,"web palette generator")]),n("li",null,"Facendo una ricerca su google si trovano circa 6.700.000 risultati"),n("li",null,"Pertanto ognuno utilizzi il tool a lui pi\xF9 congegnale"),n("li",null,[s("Alcuni interessanti sono: "),n("ul",null,[n("li",null,[n("a",{href:"https://coolors.co/",target:"_blank",rel:"noopener"},"https://coolors.co/")]),n("li",null,[n("a",{href:"https://color.adobe.com/it/create/color-wheel",target:"_blank",rel:"noopener"},"https://color.adobe.com/it/create/color-wheel")]),n("li",null,[n("a",{href:"http://colormind.io/",target:"_blank",rel:"noopener"},"http://colormind.io/")]),n("li",null,[n("a",{href:"https://palettegenerator.com/",target:"_blank",rel:"noopener"},"https://palettegenerator.com/")]),n("li",null,[n("a",{href:"https://www.designbombs.com/best-online-color-palette-generators/",target:"_blank",rel:"noopener"},"https://www.designbombs.com/best-online-color-palette-generators/")])])])],-1),i4={__name:"65",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[s4,o4,a4]),_:1},16))}},l4=n("h1",null,"Esercizio css_13",-1),r4=n("p",null,"Colori",-1),c4=n("ol",null,[n("li",null,[s("Creare un nuovo file e nominarlo "),n("em",null,"|cognome|_esercizio_css_13.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_13.css")]),n("li",null,"Creare una scacchiera 4 righe x 3 colonne"),n("li",null,[s("Con l\u2019aiuto di un tool di palette generation: "),n("ol",null,[n("li",null,"colorare lo sfondo di 2 celle specificando il nome del colore"),n("li",null,"colorare lo sfondo di 2 celle specificando il codice HEX del colore"),n("li",null,"colorare lo sfondo di 2 celle usando la funzione rgb"),n("li",null,"colorare lo sfondo di 2 celle usando la funzione rgba ed impostare la trasparenza"),n("li",null,"colorare lo sfondo di 2 celle usando la funzione hls"),n("li",null,"colorare lo sfondo di 2 celle usando la funzione hlsa ed impostare la trasparenza")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_13.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_13.css")],-1),p4={__name:"66",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[l4,r4,c4]),_:1},16))}},u4=n("h1",{class:"sezione"},"Larghezza e Altezza degli elementi Web",-1),d4={__name:"67",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[u4]),_:1},16))}},m4=n("h1",null,"CSS",-1),h4=n("p",null,"Larghezza ed Altezza",-1),g4=n("ul",null,[n("li",null,[s("Due propriet\xE0 molto importanti sono "),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"width")]),s(": definisce la larghezza di un elemento HTML all\u2019interno della pagina")]),n("li",null,[n("em",null,[n("strong",null,"height")]),s(": definisce l\u2019altezza di un elemento HTML all\u2019interno della pagina")])])]),n("li",null,[s("Queste misure possono essere espresse in due modi: "),n("ol",null,[n("li",null,[n("em",null,[n("strong",null,"valore aasoluto")]),s(" : specificando il valore in pixel (px)")]),n("li",null,[n("em",null,[n("strong",null,"valore relativo")]),s(" : specificando un valore percentuale (%) rispetto all\u2019elemento padre")])])]),n("li",null,[s("Per default "),n("em",null,"width"),s(" e "),n("em",null,"height"),s(" sono impostate ad "),n("code",null,"auto"),s(" e pertanto il browser calcola le dimensioni minime per visualizzare l\u2019elemento.")])],-1),f4={__name:"68",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[m4,h4,g4]),_:1},16))}};const Mo=e=>(kn("data-v-cc621875"),e=e(),yn(),e),_4=Mo(()=>n("h1",null,"CSS",-1)),v4=Mo(()=>n("p",null,"Larghezza ed Altezza",-1)),k4={class:"grid grid-flow-col auto-cols-max gap-8"},y4=Mo(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),b4=Mo(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".parent"),s(),n("span",{class:"token punctuation"},"{")]),s(`
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
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),x4=Mo(()=>n("div",null,[n("div",{class:"parent"}),n("br"),n("br"),n("br"),n("br"),n("div",{class:"parent"},[n("div",{id:"child1"},[n("div",{id:"child2"})])])],-1)),S4={__name:"69",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[_4,v4,n("div",k4,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[y4]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[b4]),_:1},16)]),x4])]),_:1},16)}}},w4=vn(S4,[["__scopeId","data-v-cc621875"]]),z4=n("h1",null,"Esercizio css_14",-1),$4=n("p",null,"Colori",-1),C4=n("ol",null,[n("li",null,[s("Creare un nuovo file e nominarlo "),n("em",null,"|cognome|_esercizio_css_14.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_14.css")]),n("li",null,"Creare un rettangolo con sfondo rosso con larghezza 400px ed altezza 200px"),n("li",null,"Creare quattro rettangoli con sfondo viola con larghezza rispettivamente pari a 1/4, 2/4, 3/4 e 4/4 della larghezza della pagine e altezza pari a 150 px"),n("li",null,"Creare quattro rettangoli con sfondo verde e trasparenza al 65% con larghezza rispettivamente pari a 1/8, 3/6, 5/8 e 2/9 della larghezza della pagine e altezza pari a 221 px"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_14.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_14.css")],-1),I4={__name:"70",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[z4,$4,C4]),_:1},16))}},T4=n("h1",{class:"sezione"},[n("div",{style:{color:"rgb(178,28,128)","background-image":"linear-gradient(to right top, #9198a3, #7f91b9, #7588ce, #797bde, #8a69e7)"}},"Lo sfondo degli elementi")],-1),E4={__name:"71",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[T4]),_:1},16))}},M4=n("h1",null,"CSS",-1),L4=n("p",null,"Background",-1),P4=n("ul",null,[n("li",null,[s("CSS definisce varie propriet\xE0 per definire il background di un elemento HTML: "),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"background-color")]),s(" : speficica il colore dello sfondo")]),n("li",null,[n("em",null,[n("strong",null,"background-image")]),s(" : imposta un immagine come sfondo di un elemento")]),n("li",null,[n("em",null,[n("strong",null,"background-repeat")]),s(" : definisce il verso di ripetizione dell\u2019immagine di sfondo")]),n("li",null,[n("em",null,[n("strong",null,"background-attachment")]),s(" : specifica se l\u2019immagine si sfondo rimarr\xE0 fissa o far\xE0 scroll")]),n("li",null,[n("em",null,[n("strong",null,"background-position")]),s(" : definisce la posizione dell\u2019immagine di sfondo")])])])],-1),O4={__name:"72",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[M4,L4,P4]),_:1},16))}};const Lo=e=>(kn("data-v-c12a4129"),e=e(),yn(),e),A4=Lo(()=>n("h1",null,"CSS",-1)),R4=Lo(()=>n("p",null,"background-image",-1)),F4={class:"grid grid-flow-col auto-cols-max gap-8"},D4=Lo(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bg1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),H4=Lo(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".bg1"),s(),n("span",{class:"token punctuation"},"{")]),s(`
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
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),N4=Lo(()=>n("div",null,[n("div",{class:"bg1"}),n("br"),n("br"),n("p",{class:"bg2"},"Questo \xE8 un paragrafo con del testo"),n("br"),n("br"),n("div",{id:"bg3"})],-1)),j4={__name:"73",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[A4,R4,n("div",F4,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[D4]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[H4]),_:1},16)]),N4])]),_:1},16)}}},B4=vn(j4,[["__scopeId","data-v-c12a4129"]]);const Po=e=>(kn("data-v-a27d6293"),e=e(),yn(),e),q4=Po(()=>n("h1",null,"CSS",-1)),W4=Po(()=>n("p",null,"background-repeat",-1)),K4={class:"grid grid-flow-col auto-cols-max gap-8"},V4=Po(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bg1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),U4=Po(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".bg1, .bg2, .bg3, .bg4"),s(),n("span",{class:"token punctuation"},"{")]),s(`
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
`),n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".bg4"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-repeat"),n("span",{class:"token punctuation"},":"),s(" repeat-y"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}")])])],-1)),G4=Po(()=>n("div",null,[n("div",{class:"bg1"}),n("br"),n("div",{class:"bg2"}),n("br"),n("div",{class:"bg3"}),n("br"),n("div",{class:"bg4"}),n("br")],-1)),Y4={__name:"74",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[q4,W4,n("div",K4,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[V4]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[U4]),_:1},16)]),G4])]),_:1},16)}}},Q4=vn(Y4,[["__scopeId","data-v-a27d6293"]]),Z4=n("h1",null,"Esercizio css_15",-1),J4=n("p",null,"background-repeat",-1),X4=n("ol",null,[n("li",null,[s("Creare ed editare i file "),n("em",null,"|cognome|_esercizio_css_15.html"),s(" e "),n("em",null,"|cognome|_esercizio_css_15.css"),s(".")]),n("li",null,[s("Creare una pagina contenente: "),n("ol",null,[n("li",null,"2xDIV con un immagine di background con path relativo e con dimesioni assolute"),n("li",null,"2xDIV con un immagine di background con path assoluto e con dimesioni relative"),n("li",null,"2xDIV con un immagine di background che usi la propriet\xE0 del background repeat"),n("li",null,"2xDIV con un immagine di background che usi la propriet\xE0 del background no-repeat"),n("li",null,"2xDIV con un immagine di background che usi la propriet\xE0 del background repeat-x"),n("li",null,"2xDIV con un immagine di background che usi la propriet\xE0 del background repeat-y")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_15.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_15.css")],-1),n5={__name:"75",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[Z4,J4,X4]),_:1},16))}},e5=n("h1",{class:"sezione"},"Attorno al contenuto: Box Model",-1),t5={__name:"76",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[e5]),_:1},16))}},s5="/TPSI/4/css/assets/css_09.034d1fc7.jpg",o5=n("h1",null,"CSS",-1),a5=n("p",null,"Box model",-1),i5=n("ul",null,[n("li",null,[s('Ogni elemento HTML pu\xF2 essere considerato come una "scatola" '),n("code",null,"box"),s(", che \xE8 composta da vari elementi che complessivamente prendono il nome di "),n("code",null,"box model"),s(".")]),n("li",null,[s("Il "),n("em",null,"box model"),s(" \xE8 composto da:")])],-1),l5=n("img",{src:s5,width:"650"},null,-1),r5=n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"content")]),s(" : il contenuto della scatola, dove testo e immagini sono visualizzate.")]),n("li",null,[n("em",null,[n("strong",null,"padding")]),s(" : area "),n("strong",null,"trasparente"),s(" attorno al contenuto e prima del margine.")]),n("li",null,[n("em",null,[n("strong",null,"border")]),s(" : bordo "),n("strong",null,"(in)visibile"),s(" attorno al padding.")]),n("li",null,[n("em",null,[n("strong",null,"margin")]),s(" : area "),n("strong",null,"trasparente"),s(" attorno al bordo.")])],-1),c5={__name:"77",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[o5,a5,i5,y(i,null,{default:g(()=>[l5]),_:1}),r5]),_:1},16)}}};const es=e=>(kn("data-v-0891dae0"),e=e(),yn(),e),p5=es(()=>n("h1",null,"CSS",-1)),u5=es(()=>n("p",null,"Box model",-1)),d5=es(()=>n("ul",null,[n("li",null,[s("Conoscere le propriet\xE0 del "),n("em",null,"box model"),s(" \xE8 molto importante durante il design ed il layout di una pagina web.")])],-1)),m5={class:"grid grid-flow-col auto-cols-max gap-8"},h5=es(()=>n("div",null,[U(" col 1 "),n("h3",null,"border"),n("div",{class:"parent"},[n("pre",null,`.parent1 {
  width: 200px;
  height: 100px;
  border: 1px dashed;
}
`)]),n("div",{class:"parent"},[n("div",{id:"child1"},[n("pre",null,`#child1 {
  width: 80%;
  height: 80%;
  border: 1px solid;
}
    `)])]),n("div",{class:"parent"})],-1)),g5=es(()=>n("div",null,[U(" col 2 "),n("h3",null,"child padding"),n("div",{class:"parent"},[n("pre",null,`.parent2 {
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
    `)])]),n("div",{class:"parent"})],-1)),f5=es(()=>n("div",null,[U(" col 3 "),n("h3",null,"father padding"),n("div",{class:"parent3"},[n("pre",null,`.parent3 {
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
    `)])]),n("div",{class:"parent3"})],-1)),_5=es(()=>n("div",null,[U(" col 4 "),n("h3",null,"margin"),n("div",{class:"parent4"},[n("pre",null,`.parent4 {
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
    `)])]),n("div",{class:"parent4"})],-1)),v5={__name:"78",setup(e){const t={};return x($),(o,a)=>{const i=qn;return v(),z(P,T(I(t)),{default:g(()=>[p5,u5,d5,n("div",m5,[h5,y(i,null,{default:g(()=>[g5]),_:1}),y(i,null,{default:g(()=>[f5]),_:1}),y(i,null,{default:g(()=>[_5]),_:1})])]),_:1},16)}}},k5=vn(v5,[["__scopeId","data-v-0891dae0"]]),y5=n("h1",null,"CSS",-1),b5=n("p",null,"Box model - sizing",-1),x5=n("ul",null,[n("li",null,"Il box model ci permette di definire bordi attorno agli elementi e di calcolare le dimensioni di un elemento e lo spazio tra elementi."),n("li",null,[s("E\u2019 importante considerare che quando si specifica una propriet\xE0 "),n("em",null,"width"),s(" e/o "),n("em",null,"height"),s(", si sta definendo la larghezza e/o altezza "),n("em",null,[n("strong",null,"SOLO")]),s(" della componente "),n("em",null,"content"),s(" del box model.")]),n("li",null,[s("Pertanto per calcolare la dimensione complessiva dell\u2019elemento HTML sar\xE0 necessario anche tenere in considerazione "),n("em",null,[n("strong",null,"padding")]),s(", "),n("em",null,[n("strong",null,"border")]),s(" e "),n("em",null,[n("strong",null,"margin")]),s(".")])],-1),S5={__name:"79",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[y5,b5,x5]),_:1},16))}},cd="/TPSI/4/css/assets/css_10.fb7471a4.jpg";const Le=e=>(kn("data-v-063c4115"),e=e(),yn(),e),w5=Le(()=>n("h1",null,"CSS",-1)),z5=Le(()=>n("p",null,"Box model - sizing",-1)),$5={class:"grid grid-flow-col auto-cols-max gap-8"},C5=Le(()=>n("h3",null,"Calcolo dimensione elemento HTML",-1)),I5=Le(()=>n("div",{id:"div1"},"Immagine larga 150px",-1)),T5=Le(()=>n("img",{id:"tux1",src:cd,alt:"tux"},null,-1)),E5=Le(()=>n("div",{id:"div2"},[n("pre",null,`#div {
  width: 150px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
`)],-1)),M5=Le(()=>n("div",{id:"div3"},[n("pre",null,[s(`total_width = width + 2*padding + 2*border + 2*margin
`),n("p",null,"total_width =  150 + 20 + 10 + 0 = 180px"),s(`
`)])],-1)),L5=Le(()=>n("h3",null,"\xA0",-1)),P5=Le(()=>n("div",{id:"div1"},"Immagine larga 150px",-1)),O5=Le(()=>n("img",{id:"tux1",src:cd,alt:"tux"},null,-1)),A5=Le(()=>n("div",{id:"div4"},[n("pre",null,`#div {
  width: 120px;
  padding: 10px;
  border: 5px solid;
  margin: 0;
}
`)],-1)),R5=Le(()=>n("div",{id:"div3"},[n("pre",null,[s(`total_width = width + 2*padding + 2*border + 2*margin
`),n("p",null,"total_width = 120 + 20 + 10 + 0 = 150px"),s(`
`)])],-1)),F5={__name:"80",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center"),l=qn;return v(),z(P,T(I(t)),{default:g(()=>[w5,z5,n("div",$5,[n("div",null,[C5,y(i,null,{default:g(()=>[I5,T5,E5,M5]),_:1})]),y(l,null,{default:g(()=>[n("div",null,[L5,y(i,null,{default:g(()=>[P5,O5,A5,R5]),_:1})])]),_:1})])]),_:1},16)}}},D5=vn(F5,[["__scopeId","data-v-063c4115"]]),H5=n("h1",null,"Esercizio css_16",-1),N5=n("p",null,"Box model",-1),j5=n("ol",null,[n("li",null,[s("Creare ed editare i file "),n("em",null,"|cognome|_esercizio_css_16.html"),s(" e "),n("em",null,"|cognome|_esercizio_css_16.css"),s(".")]),n("li",null,[s("Creare una foto gallery statica e centrata nella pagina, cos\xEC formata: "),n("ol",null,[n("li",null,"1 riga per 4 colonne"),n("li",null,"ogni cella deve contenere al centro un immagine di dimensione width pari a 250px"),n("li",null,"ogni immagine deve avere una didascalia nel bordo inferiore con bordo rosso di spessore 5px"),n("li",null,"nella didascalia deve esserci un breve titolo dell\u2019immagine con padding pari a 8px")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_16.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_16.css")],-1),B5={__name:"81",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[H5,N5,j5]),_:1},16))}},q5="/TPSI/4/css/assets/css_11.a5ae5190.jpg";const Oo=e=>(kn("data-v-effc05a6"),e=e(),yn(),e),W5=Oo(()=>n("h1",null,"CSS",-1)),K5=Oo(()=>n("p",null,"Box model - sizing",-1)),V5=Oo(()=>n("div",{class:"grid grid-flow-col auto-cols-max gap-8"},[n("div",null,[n("ul",null,[n("li",null,[s("In CSS \xE8 possibile specificare il padding, border e margin per ognuno dei 4 lati: "),n("ol",null,[n("li",null,[n("em",null,[n("strong",null,"top")]),s(": lato superiore ("),n("em",null,[n("strong",null,"border-top")]),s(" - "),n("em",null,[n("strong",null,"padding-top")]),s(" - "),n("em",null,[n("strong",null,"margin-top")]),s(")")]),n("li",null,[n("em",null,[n("strong",null,"bottom")]),s(": lato inferiore ("),n("em",null,[n("strong",null,"border-bottom")]),s(" - "),n("em",null,[n("strong",null,"padding-bottom")]),s(" - "),n("em",null,[n("strong",null,"margin-bottom")]),s(")")]),n("li",null,[n("em",null,[n("strong",null,"left")]),s(": lato sinistro ("),n("em",null,[n("strong",null,"border-left")]),s(" - "),n("em",null,[n("strong",null,"padding-left")]),s(" - "),n("em",null,[n("strong",null,"margin-left")]),s(")")]),n("li",null,[n("em",null,[n("strong",null,"right")]),s(": lato destro ("),n("em",null,[n("strong",null,"border-right")]),s(" - "),n("em",null,[n("strong",null,"padding-right")]),s(" - "),n("em",null,[n("strong",null,"margin-right")]),s(")")])])])])]),n("div",null,[n("div",{id:"div1"})])],-1)),U5=Oo(()=>n("br",null,null,-1)),G5=Oo(()=>n("img",{src:q5,width:"700"},null,-1)),Y5={__name:"82",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[W5,K5,V5,U5,y(i,null,{default:g(()=>[G5]),_:1})]),_:1},16)}}},Q5=vn(Y5,[["__scopeId","data-v-effc05a6"]]),Z5=n("h1",null,"CSS",-1),J5=n("p",null,"Box model - sizing",-1),X5=n("ul",null,[n("li",null,"Generalizziamo ora la formula per calcolare le dimensioni effettive di un elemento HTML")],-1),nI=n("h3",null,"total width",-1),eI=n("br",null,null,-1),tI=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"Total width = width+left padding+right padding+left border+right border+left margin+right margin")])],-1),sI=n("br",null,null,-1),oI=n("br",null,null,-1),aI=n("h3",null,"total height",-1),iI=n("br",null,null,-1),lI=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"Total height = height + top padding+bottom padding+top border+bottom border+top margin+bottom margin")])],-1),rI={__name:"83",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[Z5,J5,X5,nI,eI,y(i,B({},{ranges:[""]}),{default:g(()=>[tI]),_:1},16),sI,oI,aI,iI,y(i,B({},{ranges:[""]}),{default:g(()=>[lI]),_:1},16)]),_:1},16)}}},cI=n("h1",null,"Esercizio css_17",-1),pI=n("p",null,"CSS box model",-1),uI=n("ol",null,[n("li",null,[s("Data la seguente pagina html: "),n("a",{href:"/TPSI/support/esercizio_css_17.html",target:"_blank",rel:"noopener"},"esercizio_css_17.html"),s(" e relativo css: "),n("a",{href:"/TPSI/support/esercizio_css_17.css",target:"_blank",rel:"noopener"},"esercizio_css_17.css")]),n("li",null,[s("Editare il file e determinare il valore corretto per la propriet\xE0 "),n("strong",null,"width"),s(" della regola CSS "),n("em",null,"#div1"),s(","),n("em",null,"#div2"),s(" e "),n("em",null,"#div3"),s(" in modo che: "),n("ol",null,[n("li",null,[s("il componente "),n("strong",null,"div1"),s(" abbia dimensione complessiva pari a "),n("strong",null,"200px")]),n("li",null,[s("il componente "),n("strong",null,"div2"),s(" abbia dimensione complessiva pari a "),n("strong",null,"300px")]),n("li",null,[s("il componente "),n("strong",null,"div3"),s(" abbia dimensione complessiva pari a "),n("strong",null,"408px")])])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_17.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_17.css")],-1),dI={__name:"84",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[cI,pI,U(" risultato esercizio: 100,250,353 "),uI]),_:1},16))}},mI=n("h1",{class:"sezione"},"I bordi di un elemento",-1),hI={__name:"85",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[mI]),_:1},16))}},gI="/TPSI/4/css/assets/css_12.2e9157dd.jpg",fI=n("h1",null,"CSS",-1),_I=n("p",null,"Borders",-1),vI=n("ul",null,[n("li",null,[s("La propriet\xE0 CSS "),n("code",null,"border-style"),s(" permette di specificare lo stiledel bordo di un elemento.")])],-1),kI=n("h3",null,"border style",-1),yI=n("img",{src:gI,width:"550"},null,-1),bI={__name:"86",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[fI,_I,vI,kI,y(i,null,{default:g(()=>[yI]),_:1})]),_:1},16)}}},xI="/TPSI/4/css/assets/css_13.5f27eb92.jpg",SI=n("h1",null,"CSS",-1),wI=n("p",null,"Borders",-1),zI=n("ul",null,[n("li",null,[s("La propriet\xE0 CSS "),n("code",null,"border-width"),s(" permette di specificare lo spessore di un elemento.")])],-1),$I=n("h3",null,"border width",-1),CI=n("img",{src:xI,width:"300"},null,-1),II={__name:"87",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[SI,wI,zI,$I,y(i,null,{default:g(()=>[CI]),_:1})]),_:1},16)}}},TI="/TPSI/4/css/assets/css_14.9d059fa0.jpg",EI=n("h1",null,"CSS",-1),MI=n("p",null,"Borders",-1),LI=n("ul",null,[n("li",null,[s("La propriet\xE0 CSS "),n("code",null,"border-color"),s(" permette di specificare il colore di un elemento.")])],-1),PI=n("h3",null,"border color",-1),OI=n("img",{src:TI,width:"300"},null,-1),AI={__name:"88",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[EI,MI,LI,PI,y(i,null,{default:g(()=>[OI]),_:1})]),_:1},16)}}},RI="/TPSI/4/css/assets/css_15.89a55d9c.jpg",FI=n("h1",null,"CSS",-1),DI=n("p",null,"Borders",-1),HI=n("ul",null,[n("li",null,[s("La propriet\xE0 CSS "),n("code",null,"border-radius"),s(" permette di specificare la rotondit\xE0 di un bordo di un elemento.")])],-1),NI=n("h3",null,"border radius",-1),jI=n("img",{src:RI,width:"300"},null,-1),BI={__name:"89",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[FI,DI,HI,NI,y(i,null,{default:g(()=>[jI]),_:1})]),_:1},16)}}},qI="/TPSI/4/css/assets/css_16.20528f70.jpg",WI=n("h1",null,"CSS",-1),KI=n("p",null,"Borders",-1),VI=n("h3",null,"border shorthand",-1),UI=n("ul",null,[n("li",null,[s("CSS ci permette di scrivere le dichiarazioni CSS in modo pi\xF9 compatto, tramite la forma nominata "),n("code",null,"shorthand")]),n("li",null,[s("Le 3 propriet\xE0 viste prime "),n("em",null,[n("strong",null,"border-style")]),s(", "),n("em",null,[n("strong",null,"border-width")]),s(", "),n("em",null,[n("strong",null,"border-color")]),s(" possono essere scritte in modo compatto in questo modo")])],-1),GI=n("p",null,[n("code",null,"Dichiarazione CSS - border: <width> <style> <color>;")],-1),YI=n("img",{src:qI,width:"290"},null,-1),QI={__name:"90",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[WI,KI,VI,UI,GI,y(i,null,{default:g(()=>[YI]),_:1})]),_:1},16)}}},ZI=n("h1",null,"Esercizio css_18",-1),JI=n("p",null,"CSS borders",-1),XI=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_html_07.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_18.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_18.css")]),n("li",null,"Dichiarare lo stile della pagina in modo che tutti i titoli di primo livello abbiano un bordo inferiore solido, spesso 5px e di colore blue ed un bordo sinistro spesso 7px di colore nero"),n("li",null,"Dichiarare lo stile della pagina in modo che tutti i titoli di secondo livello abbiano un bordo superiore trattegiato, spesso 2px di colore verde"),n("li",null,"Dichiarare lo stile della pagina in modo che tutti i paragrafi abbiano un bordo un bordo inferiore tratteggiato spesso 3px di colore grigio e i bordi laterali di color verde"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_18.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_18.css")],-1),n6={__name:"91",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[ZI,JI,XI]),_:1},16))}},e6=n("h1",{class:"sezione"},"Formattazione del Testo",-1),t6={__name:"92",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[e6]),_:1},16))}},s6=n("h1",null,"CSS",-1),o6=n("p",null,"Text Formatting",-1),a6=n("ul",null,[n("li",null,[s("CSS mette a disposizione delle propriet\xE0 per definire la formattazione del testo: "),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"color")]),s(" : specifica il colore del testo")]),n("li",null,[n("em",null,[n("strong",null,"text-align")]),s(" : specifica l\u2019allineamento e la giustificazione del testo all\u2019interno di un contenitore")]),n("li",null,[n("em",null,[n("strong",null,"text-decoration")]),s(" : permette di decorare il testo in vari modi (sottolineato, \u2026)")]),n("li",null,[n("em",null,[n("strong",null,"text-transform")]),s(" : permette di applicare delle trasformazioni al testo (uppercase, lowercase, \u2026)")]),n("li",null,[n("em",null,[n("strong",null,"line-height")]),s(" : permette di specificare lo spazio tra due linee di testo")]),n("li",null,[n("em",null,[n("strong",null,"text-shadow")]),s(" : permette di aggiungere un\u2019ombra ad un testo")])])])],-1),i6={__name:"93",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[s6,o6,a6]),_:1},16))}};const Xe=e=>(kn("data-v-bda3eb76"),e=e(),yn(),e),l6=Xe(()=>n("h1",null,"CSS",-1)),r6=Xe(()=>n("p",null,"color",-1)),c6=Xe(()=>n("p",null,[n("code",null,"{ color: red; }")],-1)),p6=Xe(()=>n("p",{id:"id1"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),u6=Xe(()=>n("p",null,[n("code",null,"{ color: #3feb00; }")],-1)),d6=Xe(()=>n("p",{id:"id2"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),m6=Xe(()=>n("p",null,[n("code",null,"{ color: rgba(45, 0, 224, 1); }")],-1)),h6=Xe(()=>n("p",{id:"id3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),g6=Xe(()=>n("p",null,[n("code",null,"{ color: hsla(10, 100%, 44%, 1); }")],-1)),f6=Xe(()=>n("p",{id:"id4"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),_6={__name:"94",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[l6,r6,c6,p6,u6,d6,m6,h6,g6,f6]),_:1},16))}},v6=vn(_6,[["__scopeId","data-v-bda3eb76"]]);const nt=e=>(kn("data-v-c0f6bb63"),e=e(),yn(),e),k6=nt(()=>n("h1",null,"CSS",-1)),y6=nt(()=>n("p",null,"text-align",-1)),b6=nt(()=>n("p",null,[n("code",null,"{ text-align: left; }")],-1)),x6=nt(()=>n("p",{id:"id1"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),S6=nt(()=>n("p",null,[n("code",null,"{ text-align: center; }")],-1)),w6=nt(()=>n("p",{id:"id2"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),z6=nt(()=>n("p",null,[n("code",null,"{ text-align: right; }")],-1)),$6=nt(()=>n("p",{id:"id3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),C6=nt(()=>n("p",null,[n("code",null,"{ text-align: justify; }")],-1)),I6=nt(()=>n("p",{id:"id4"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),T6={__name:"95",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[k6,y6,b6,x6,S6,w6,z6,$6,C6,I6]),_:1},16))}},E6=vn(T6,[["__scopeId","data-v-c0f6bb63"]]);const et=e=>(kn("data-v-43a4cf11"),e=e(),yn(),e),M6=et(()=>n("h1",null,"CSS",-1)),L6=et(()=>n("p",null,"text-decoration",-1)),P6=et(()=>n("p",null,[n("code",null,"{ text-decoration: none; }")],-1)),O6=et(()=>n("p",{id:"id1"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),A6=et(()=>n("p",null,[n("code",null,"{ text-decoration: overline; }")],-1)),R6=et(()=>n("p",{id:"id2"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),F6=et(()=>n("p",null,[n("code",null,"{ text-decoration: line-through; }")],-1)),D6=et(()=>n("p",{id:"id3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),H6=et(()=>n("p",null,[n("code",null,"{ text-decoration: underline; }")],-1)),N6=et(()=>n("p",{id:"id4"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),j6={__name:"96",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[M6,L6,P6,O6,A6,R6,F6,D6,H6,N6]),_:1},16))}},B6=vn(j6,[["__scopeId","data-v-43a4cf11"]]);const Ct=e=>(kn("data-v-6e1ed3f1"),e=e(),yn(),e),q6=Ct(()=>n("h1",null,"CSS",-1)),W6=Ct(()=>n("p",null,"text-trasnform",-1)),K6=Ct(()=>n("p",null,[n("code",null,"{ text-transform: uppercase; }")],-1)),V6=Ct(()=>n("p",{id:"id1"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),U6=Ct(()=>n("p",null,[n("code",null,"{ text-transform: lowercase; }")],-1)),G6=Ct(()=>n("p",{id:"id2"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),Y6=Ct(()=>n("p",null,[n("code",null,"{ text-transform: capitalize; }")],-1)),Q6=Ct(()=>n("p",{id:"id3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),Z6={__name:"97",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[q6,W6,K6,V6,U6,G6,Y6,Q6]),_:1},16))}},J6=vn(Z6,[["__scopeId","data-v-6e1ed3f1"]]);const It=e=>(kn("data-v-64a7699f"),e=e(),yn(),e),X6=It(()=>n("h1",null,"CSS",-1)),nT=It(()=>n("p",null,"line-height",-1)),eT=It(()=>n("p",null,[n("code",null,"{ line-height: 0.8; }")],-1)),tT=It(()=>n("p",{id:"id1"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),sT=It(()=>n("p",null,[n("code",null,"{ line-height: 1.6; }")],-1)),oT=It(()=>n("p",{id:"id2"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),aT=It(()=>n("p",null,[n("code",null,"{ line-height: 2.4; }")],-1)),iT=It(()=>n("p",{id:"id3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),lT={__name:"98",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[X6,nT,eT,tT,sT,oT,aT,iT]),_:1},16))}},rT=vn(lT,[["__scopeId","data-v-64a7699f"]]);const Tt=e=>(kn("data-v-1de4f326"),e=e(),yn(),e),cT=Tt(()=>n("h1",null,"CSS",-1)),pT=Tt(()=>n("p",null,"text-shadow",-1)),uT=Tt(()=>n("p",null,[n("code",null,"{ text-shadow: 2px 2px; }")],-1)),dT=Tt(()=>n("p",{id:"id1"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),mT=Tt(()=>n("p",null,[n("code",null,"{ text-shadow: 4px 0px red; }")],-1)),hT=Tt(()=>n("p",{id:"id2"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),gT=Tt(()=>n("p",null,[n("code",null,"{ text-shadow: 2px 2px 5px red; }")],-1)),fT=Tt(()=>n("p",{id:"id3"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",-1)),_T={__name:"99",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[cT,pT,uT,dT,mT,hT,gT,fT]),_:1},16))}},vT=vn(_T,[["__scopeId","data-v-1de4f326"]]),kT=n("h1",null,"Esercizio css_19",-1),yT=n("p",null,"Text formatting",-1),bT=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_html_07.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_19.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_19.css")]),n("li",null,[s("Dichiarare gli stili necessari affinch\xE8: "),n("ol",null,[n("li",null,"tutti i titoli di primo livello siano upper case e di colore blue"),n("li",null,"tutti i titoli di secondo livello inizino con una lettera maiuscola e di colore rosso e siano sottolineati"),n("li",null,"tutti i paragrafi siano giustificati tranne il 3zo paragrafo che deve avere un allineamento a destra"),n("li",null,"una frase o citazione importante del testo, deve possedere un effetto di ombreggiatura a piacere")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_19.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_19.css")],-1),xT={__name:"100",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[kT,yT,bT]),_:1},16))}},ST=n("h1",{class:"sezione"},"Font ed Icone",-1),wT={__name:"101",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[ST]),_:1},16))}},zT=n("h1",null,"CSS",-1),$T=n("p",null,"Font",-1),CT=n("ul",null,[n("li",null,[n("p",null,"In CSS \xE8 possibile cambiare il font del testo.")]),n("li",null,[n("p",null,"Usare un font che \xE8 facile da leggere \xE8 importante.")]),n("li",null,[n("p",null,"Ci sono 5 famiglie di font generici, ognuno con specifici font utilizzabili:"),n("ol",null,[n("li",null,[n("em",null,[n("strong",null,"Serif")]),s(" :")]),n("li",null,[n("em",null,[n("strong",null,"Sans-serif")])]),n("li",null,[n("em",null,[n("strong",null,"Monospace")])]),n("li",null,[n("em",null,[n("strong",null,"Cursive")])]),n("li",null,[n("em",null,[n("strong",null,"Fantasy")])])])]),n("li",null,[n("p",null,[s("Per specificare il font si usa la propriet\xE0 "),n("code",null,"font-family:<font name>")])])],-1),IT={__name:"102",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[zT,$T,CT]),_:1},16))}},TT="/TPSI/4/css/assets/css_17.056f1f5d.jpg",ET=n("h1",null,"CSS",-1),MT=n("p",null,"Font",-1),LT=n("img",{src:TT,width:"500"},null,-1),PT={__name:"103",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[ET,MT,y(i,null,{default:g(()=>[LT]),_:1})]),_:1},16)}}},OT=n("h1",null,"CSS",-1),AT=n("p",null,"Font Fall Back",-1),RT=n("ul",null,[n("li",null,[s("Specificando un font con la propriet\xE0 "),n("code",null,"font-family"),s(" non si pu\xF2 avere la certezza che questo venga visualizzato correttamente.")]),n("li",null,"Questo perch\xE8 se il font non \xE8 installato o non \xE8 trovato, non pu\xF2 essere visulizzato"),n("li",null,[s("Quindi il browser, in questo caso, visualizzer\xE0 un font di "),n("em",null,[n("strong",null,"fall-back")])]),n("li",null,[s("Per questo motivo \xE8 sempre "),n("strong",null,"UNA BUONA REGOLA"),s(" specificare pi\xF9 di un font, in modo che se il primo non \xE8 disponibile, il browser prover\xE0 a visualizzare il successivo e cos\xEC via.")])],-1),FT=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},'{ font-family: "Times New Roman", Times, serif; }')])],-1),DT=n("ul",null,[n("li",null,'Questa descrizone CSS, specifica di usare il font "Times New Roman" se disponibile. In caso contrario indica al browser di provare a dutilizzare il font "Times" e come ultima spiaggia qualsiasi font disponibile della famiglia "serif".')],-1),HT={__name:"104",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[OT,AT,RT,y(i,B({},{ranges:[""]}),{default:g(()=>[FT]),_:1},16),DT]),_:1},16)}}},NT=n("h1",null,"CSS",-1),jT=n("p",null,"Font Web Safe",-1),BT=n("ul",null,[n("li",null,[s("I font "),n("strong",null,"web safe"),s(" sono font che sono universalmente disponibili su tutti i sistemi operativi e browser pi\xF9 comuni")]),n("li",null,"Pertanto l\u2019uso di questo font massimizza la probabilit\xE0 che la pagina venga visualizzata come inizialmente pensata dall\u2019autore"),n("li",null,[s("Qui una lista di font "),n("strong",null,"web-safe"),s(" : "),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"Arial (sans-serif)")]),s(" :"),n("span",{style:{"font-family":"Arial"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Verdana (sans-serif)")]),s(" :"),n("span",{style:{"font-family":"Verdana"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Helvetica (sans-serif)")]),s(" :"),n("span",{style:{"font-family":"Helvetica"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Tahoma (sans-serif)")]),s(" :"),n("span",{style:{"font-family":"Tahoma"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Times New Roman (serif)")]),s(" :"),n("span",{style:{"font-family":"'Times New Roman'"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Georgia (serif)")]),s(" :"),n("span",{style:{"font-family":"Georgia"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Garamond (serif)")]),s(" :"),n("span",{style:{"font-family":"Garamond"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),n("li",null,[n("em",null,[n("strong",null,"Courier New (monospace)")]),s(" :"),n("span",{style:{"font-family":"'Courier New'","font-size":"13px"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.")])])])],-1),qT={__name:"105",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[NT,jT,BT]),_:1},16))}},WT=n("h1",null,"CSS",-1),KT=n("p",null,"Font Style",-1),VT=n("ul",null,[n("li",null,[s("La propriet\xE0 "),n("code",null,"font-style: <style>"),s(" permette di variare alcune caratteristiche di visualizzazione del font")])],-1),UT=n("p",null,[n("code",null,"{ font-style:normal; }")],-1),GT=n("p",{style:{"font-style":"normal"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),YT=n("p",null,[n("code",null,"{ font-style:italic; }")],-1),QT=n("p",{style:{"font-style":"italic"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),ZT=n("p",null,[n("code",null,"{ font-style:oblique; }")],-1),JT=n("p",{style:{"font-style":"oblique"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),XT={__name:"106",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[WT,KT,VT,UT,GT,YT,QT,ZT,JT]),_:1},16))}},nE=n("h1",null,"CSS",-1),eE=n("p",null,"Font Weight",-1),tE=n("ul",null,[n("li",null,[s("La propriet\xE0 "),n("code",null,"font-weight: <weight>"),s(" permette di variare alcune caratteristiche di visualizzazione del font")])],-1),sE=n("p",null,[n("code",null,"{ font-weight: normal; }")],-1),oE=n("p",{style:{"font-weight":"normal"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),aE=n("p",null,[n("code",null,"{ font-weight: bold;}")],-1),iE=n("p",{style:{"font-weight":"bold"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),lE={__name:"107",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[nE,eE,tE,sE,oE,aE,iE]),_:1},16))}},rE=n("h1",null,"CSS",-1),cE=n("p",null,"Font Size",-1),pE=n("ul",null,[n("li",null,[s("La propriet\xE0 "),n("code",null,"font-size: <size>"),s(" permette di variare le dimensioni del font")]),n("li",null,"La dimensione pu\xF2 essere specificata in valore assoluto o relativo")],-1),uE=n("h3",null,"dimensione assoluta",-1),dE=n("p",null,[n("code",null,"{ font-size: 30px; }")],-1),mE=n("p",{style:{"font-size":"30px"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),hE=n("p",null,[n("code",null,"{ font-size: 10px; }")],-1),gE=n("p",{style:{"font-size":"10px"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),fE=n("ul",null,[n("li",null,"L\u2019utente non pu\xF2 cambiare la dimensione del font tramite le impostazioni del browser")],-1),_E={__name:"108",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[rE,cE,pE,uE,dE,mE,hE,gE,fE]),_:1},16))}},vE=n("h1",null,"CSS",-1),kE=n("p",null,"Font Size",-1),yE=n("h3",null,"valore relativo",-1),bE=n("ul",null,[n("li",null,"Imposta la dimensione del font relativamente")],-1),xE=n("p",null,[n("code",null,"{ font-size: 1em; }")],-1),SE=n("p",{style:{"font-size":"1em"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),wE=n("p",null,[n("code",null,"{ font-size: 2em; }")],-1),zE=n("p",{style:{"font-size":"2em"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),$E=n("p",null,[n("code",null,"{ font-size: 0.5em; }")],-1),CE=n("p",{style:{"font-size":"0.5em"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),IE=n("ul",null,[n("li",null,[n("strong",null,"1em"),s(" equivale alla dimensione del font attuale per la pagina (default 16px)")]),n("li",null,"L\u2019utente pu\xF2 adattare la dimensione del font tramite le impostazioni del browser")],-1),TE={__name:"109",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[vE,kE,yE,bE,xE,SE,wE,zE,$E,CE,IE]),_:1},16))}},EE=n("h1",null,"CSS",-1),ME=n("p",null,"Google Font",-1),LE=n("ul",null,[n("li",null,[s("Google mette a disposizione gratuitamente oltre "),n("a",{href:"https://fonts.google.com/",target:"_blank",rel:"noopener"},"1000 font")]),n("li",null,[s("Per utilizzarli basta inserire un tag "),n("em",null,"link"),s(" nella sezione "),n("em",null,"head"),s(" della pagina HTML")])],-1),PE=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://fonts.googleapis.com/css?family=<nome font>"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"oppure nel caso di pi\xF9 font"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://fonts.googleapis.com/css?family=<font1>|<font2>|<fontN>"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")])])])],-1),OE=n("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Sofia|Audiowide"},null,-1),AE=n("p",null,[n("code",null,"{ font-family: Sofia, sans-serif; }")],-1),RE=n("p",{style:{"font-family":"Sofia, sans-serif"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),FE=n("p",null,[n("code",null,"{ font-family: Audiowide, sans-serif; }")],-1),DE=n("p",{style:{"font-family":"Audiowide, sans-serif"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),HE={__name:"110",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[EE,ME,LE,y(i,B({},{ranges:[""]}),{default:g(()=>[PE]),_:1},16),OE,AE,RE,FE,DE]),_:1},16)}}},NE=n("h1",null,"CSS",-1),jE=n("p",null,"Google Font",-1),BE=n("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Modak|Hanalei|Barriecito|Margarine"},null,-1),qE=n("p",null,[n("code",null,"{ font-family: 'Modak', cursive; }")],-1),WE=n("p",{style:{"font-family":"'Modak', cursive"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),KE=n("br",null,null,-1),VE=n("p",null,[n("code",null,"{ font-family: 'Hanalei', cursive; }")],-1),UE=n("p",{style:{"font-family":"'Hanalei', cursive"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),GE=n("br",null,null,-1),YE=n("p",null,[n("code",null,"{ font-family: 'Barriecito', cursive; }")],-1),QE=n("p",{style:{"font-family":"'Barriecito', cursive"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),ZE=n("br",null,null,-1),JE=n("p",null,[n("code",null,"{ font-family: 'Margarine', cursive; }")],-1),XE=n("p",{style:{"font-family":"'Margarine', cursive"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",-1),nM={__name:"111",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[NE,jE,BE,qE,WE,KE,VE,UE,GE,YE,QE,ZE,JE,XE]),_:1},16))}},eM=n("h1",null,"CSS",-1),tM=n("p",null,"Google Icon",-1),sM=n("ul",null,[n("li",null,[s("Google mette a disposizione gratuita molte centinaia di "),n("a",{href:"https://fonts.google.com/icons",target:"_blank",rel:"noopener"},"icone")]),n("li",null,[s("Per utilizzarli basta inserire un tag "),n("em",null,"link"),s(" nella sezione "),n("em",null,"head"),s(" della pagina HTML")])],-1),oM=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://fonts.googleapis.com/icon?family=Material+Icons"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")])])])],-1),aM=n("br",null,null,-1),iM=n("ul",null,[n("li",null,[s("Per inserire un\u2019icona basta usare il tag "),n("code",null,"<span>"),s(" in questo modo:")])],-1),lM=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("material-icons"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("nome")]),s(),n("span",{class:"token attr-name"},"dell'icona"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")])])])],-1),rM=n("br",null,null,-1),cM=n("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"},null,-1),pM=n("p",null,[n("code",null,'<span class="material-icons">favorite</span>'),n("span",{class:"material-icons",style:{color:"red"}},"\xA0\xA0\xA0favorite")],-1),uM=n("p",null,[n("code",null,'<span class="material-icons">thumb_up</span>'),n("span",{class:"material-icons",style:{color:"blue"}},"\xA0\xA0\xA0thumb_up")],-1),dM=n("p",null,[n("code",null,'<span class="material-icons">emoji_emotions</span>'),n("span",{class:"material-icons",style:{color:"yellow"}},"\xA0\xA0\xA0emoji_emotions")],-1),mM={__name:"112",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[eM,tM,sM,y(i,B({},{ranges:[""]}),{default:g(()=>[oM]),_:1},16),aM,iM,y(i,B({},{ranges:[""]}),{default:g(()=>[lM]),_:1},16),rM,cM,pM,uM,dM]),_:1},16)}}},hM=n("h1",null,"CSS",-1),gM=n("p",null,"List",-1),fM=n("ul",null,[n("li",null,[n("p",null,[s("CSS permette di definire lo stile anche per le liste tramite la propriet\xE0 "),n("code",null,"list-style-type:<type>")])]),n("li",null,[n("p",null,[s("Per le liste "),n("em",null,"unordered"),s(" i possibili tipi sono:")]),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"circle")])]),n("li",null,[n("em",null,[n("strong",null,"square")])])])]),n("li",null,[n("p",null,[s("Per le liste "),n("em",null,"ordered"),s(" i possibili tipi sono:")]),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"upper-roman")])]),n("li",null,[n("em",null,[n("strong",null,"lower-alpha")])])])])],-1),_M={__name:"113",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[hM,gM,fM]),_:1},16))}};const Ao=e=>(kn("data-v-24ef8cea"),e=e(),yn(),e),vM=Ao(()=>n("h1",null,"CSS",-1)),kM=Ao(()=>n("p",null,"List",-1)),yM={class:"grid grid-flow-col auto-cols-max gap-8"},bM=Ao(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Unordered lists:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])])])],-1)),xM=Ao(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"ul.cercho"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"list-style-type"),n("span",{class:"token punctuation"},":"),s(" circle"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"ul.quadrato"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"list-style-type"),n("span",{class:"token punctuation"},":"),s(" square"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),SM=Ao(()=>n("div",null,[n("p",null,"Unordered lists cerchio:"),n("ul",{class:"cerchio"},[n("li",null,"Coffee"),n("li",null,"Tea"),n("li",null,"Coca Cola")]),n("p",null,"Unordered lists quadrato:"),n("ul",{class:"quadrato"},[n("li",null,"Coffee"),n("li",null,"Tea"),n("li",null,"Coca Cola")])],-1)),wM={__name:"114",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[vM,kM,n("div",yM,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[bM]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[xM]),_:1},16)]),SM])]),_:1},16)}}},zM=vn(wM,[["__scopeId","data-v-24ef8cea"]]);const Ro=e=>(kn("data-v-29ee4840"),e=e(),yn(),e),$M=Ro(()=>n("h1",null,"CSS",-1)),CM=Ro(()=>n("p",null,"List",-1)),IM={class:"grid grid-flow-col auto-cols-max gap-8"},TM=Ro(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Ordered lists romano:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ol")]),n("span",{class:"token punctuation"},">")])])])],-1)),EM=Ro(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"ol.roman"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"list-style-type"),n("span",{class:"token punctuation"},":"),s(" upper-roman"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"ol.alpha"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"list-style-type"),n("span",{class:"token punctuation"},":"),s(" lower-alpha"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),MM=Ro(()=>n("div",null,[n("p",null,"Ordered lists romano:"),n("ol",{class:"roman"},[n("li",null,"Coffee"),n("li",null,"Tea"),n("li",null,"Coca Cola")]),n("p",null,"Ordered lists alpha:"),n("ol",{class:"alpha"},[n("li",null,"Coffee"),n("li",null,"Tea"),n("li",null,"Coca Cola")])],-1)),LM={__name:"115",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[$M,CM,n("div",IM,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[TM]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[EM]),_:1},16)]),MM])]),_:1},16)}}},PM=vn(LM,[["__scopeId","data-v-29ee4840"]]);const Os=e=>(kn("data-v-86e54311"),e=e(),yn(),e),OM=Os(()=>n("h1",null,"CSS",-1)),AM=Os(()=>n("p",null,"List",-1)),RM=Os(()=>n("ul",null,[n("li",null,"Possiamo anche usare un\u2019icome come elemento di una lista")],-1)),FM={class:"grid grid-flow-col auto-cols-max gap-8"},DM=Os(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Unordered lists con icona:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Coffee"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Tea"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Coca Cola"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Fanta"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),n("span",{class:"token punctuation"},">")]),s("Sprite"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])])])],-1)),HM=Os(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"ul"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"list-style-type"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},"  "),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},"li:before"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'done_outline'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"font-family"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'Material Icons'"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),s(" -10%"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),NM=Os(()=>n("div",null,[n("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),n("p",null,"Unordered lists con icona:"),n("ul",null,[n("li",null,"Coffee"),n("li",null,"Tea"),n("li",null,"Coca Cola"),n("li",null,"Fanta"),n("li",null,"Sprite")])],-1)),jM={__name:"116",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[OM,AM,RM,n("div",FM,[n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[DM]),_:1},16)]),n("div",null,[y(i,B({},{ranges:[""]}),{default:g(()=>[HM]),_:1},16)]),NM])]),_:1},16)}}},BM=vn(jM,[["__scopeId","data-v-86e54311"]]),qM=n("h1",null,"Esercizio css_20",-1),WM=n("p",null,"CSS text formatting",-1),KM=n("ol",null,[n("li",null,[s("Editare il file "),n("em",null,"|cognome|_esercizio_html_07.html"),s(" e salvarlo come "),n("em",null,"|cognome|_esercizio_css_20.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_20.css")]),n("li",null,[s("Dichiarare gli stili necessari affinch\xE8: "),n("ol",null,[n("li",null,"i primi tre titoli di primo livelli abbiano 3 font differenti scelti tra quelli forniti da google (oltre 1000)"),n("li",null,"nel testo compaiano, laddove appropriato, delle icone selezionate tra le migliaia messe a disposizione da google"),n("li",null,[s("nel testo compaia una lista unordered con stile "),n("em",null,"circle")]),n("li",null,"nel testo compaina una lista ordered con stile con numeri romani"),n("li",null,"nel testo compaina una lista unordered che abbiamo come bullet item un\u2019icona fornita da google")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_20.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_20.css")],-1),VM={__name:"117",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[qM,WM,KM]),_:1},16))}},UM=n("h1",{class:"sezione"},"Elementi nascosti e elementi fantasma",-1),GM={__name:"118",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[UM]),_:1},16))}},YM=n("h1",null,"CSS",-1),QM=n("p",null,"Display e Visibility",-1),ZM=n("ul",null,[n("li",null,[s("Ogni elemento HTMLha un valore di "),n("strong",null,"display"),s(" predefito che determina il modo in cui l\u2019elemto viene visualizzato.")]),n("li",null,[s("Pertanto una propriet\xE0 CSS molto importante \xE8 "),n("code",null,"dislay: <display value>")]),n("li",null,"Questa propriet\xE0, appunto, modifica il valore di display di un tag HTML"),n("li",null,"Tramite questa propriet\xE0 si pu\xF2 decidere se l\u2019elemento viene visualizzato o meno e come."),n("li",null,[s("I valori che "),n("code",null,"display"),s(" pu\xF2 assumere sono "),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"inline")]),s(": elemento posizionato sulla linea corrente "),n("code",null,"<span>")]),n("li",null,[n("em",null,[n("strong",null,"block")]),s(": elemento posizionato su una nuova linea "),n("code",null,"<div>")]),n("li",null,[n("em",null,[n("strong",null,"none")]),s(": l\u2019elemento HTML "),n("u",null,"non \xE8 visualizzato e rimosso dal DOM"),s(", pertanto lo spazio "),n("strong",null,"NON"),s(" \xE8 occupato")])])]),n("li",null,[s("La propriet\xE0 "),n("code",null,"visibility: hidden | visible"),s(" in modo analogo a "),n("code",null,"display: none"),s(" rende l\u2019elemento invisibile, "),n("u",null,"senza rimuoverlo dal DOM"),s(", perci\xF2 lo spazio "),n("strong",null,"RIMANE"),s(" occupato.")]),n("li",null,"Normalmente queste propriet\xE0 sono manipolate da JavaScript fornendo cos\xEC uno strumento utile alla creazione di applicazioni dinamiche.")],-1),JM={__name:"119",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[YM,QM,ZM]),_:1},16))}};const Fo=e=>(kn("data-v-3136881e"),e=e(),yn(),e),XM=Fo(()=>n("h1",null,"CSS",-1)),nL=Fo(()=>n("p",null,"Display e Visibility",-1)),eL={class:"grid grid-flow-col auto-cols-max gap-8"},tL=Fo(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blocchi"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Block1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blocchi"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Block2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blocchi"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Block3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blocchi rimosso"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Block4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("linea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Line1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("linea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Line2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("linea"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Line3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blocchi invisibile"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Block5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blocchi"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Block6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),sL=Fo(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".blocchi"),s(),n("span",{class:"token punctuation"},"{")]),s(`
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
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),oL=Fo(()=>n("div",null,[U(" col3 "),n("div",{class:"blocchi"},"Block1"),n("div",{class:"blocchi"},"Block2"),n("div",{class:"blocchi"},"Block3"),n("div",{class:"blocchi rimosso"},"Block4"),n("div",{class:"linea"},"Line1"),n("div",{class:"linea"},"Line2"),n("div",{class:"linea"},"Line3"),n("div",{class:"blocchi invisibile"},"Block5"),n("div",{class:"blocchi"},"Block6")],-1)),aL={__name:"120",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[XM,nL,n("div",eL,[n("div",null,[U(" col1 "),y(i,B({},{ranges:[""]}),{default:g(()=>[tL]),_:1},16)]),n("div",null,[U(" col2 "),y(i,B({},{ranges:[""]}),{default:g(()=>[sL]),_:1},16)]),oL])]),_:1},16)}}},iL=vn(aL,[["__scopeId","data-v-3136881e"]]);const As=e=>(kn("data-v-741f8fd9"),e=e(),yn(),e),lL=As(()=>n("h1",null,"CSS",-1)),rL=As(()=>n("p",null,"Display e Visibility",-1)),cL=As(()=>n("ul",null,[n("li",null,[s("Il tag "),n("code",null,"<li>"),s(" ha un valore di display di default pari a "),n("em",null,"block"),s(".")]),n("li",null,[s("Per esempio modificare il valore di display a "),n("em",null,"inline"),s(" \xE8 molto utile per generare delle barre di navigazione orizzontale.")])],-1)),pL={class:"grid grid-flow-col auto-cols-max gap-8"},uL=As(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h3")]),n("span",{class:"token punctuation"},">")]),s("Lista:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h3")]),n("span",{class:"token punctuation"},">")])]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")])])])],-1)),dL=As(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".menu li"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" inline"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 5px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),mL=As(()=>n("div",null,[U(" col3 "),n("h3",null,"Lista:"),n("ul",null,[n("li",null,"Menu 1"),n("li",null,"Menu 2"),n("li",null,"Menu 3")]),n("h3",null,"Barra Menu:"),n("ul",{class:"menu"},[n("li",null,"Menu 1"),n("li",null,"Menu 2"),n("li",null,"Menu 3")])],-1)),hL={__name:"121",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[lL,rL,cL,n("div",pL,[n("div",null,[U(" col1 "),y(i,B({},{ranges:[""]}),{default:g(()=>[uL]),_:1},16)]),n("div",null,[U(" col2 "),y(i,B({},{ranges:[""]}),{default:g(()=>[dL]),_:1},16)]),mL])]),_:1},16)}}},gL=vn(hL,[["__scopeId","data-v-741f8fd9"]]),fL=n("h1",{class:"sezione"},"Elementi galleggianti",-1),_L={__name:"122",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[fL]),_:1},16))}},vL=n("h1",null,"CSS",-1),kL=n("p",null,"Layout - Float",-1),yL=n("ul",null,[n("li",null,[s("La propriet\xE0 CSS "),n("code",null,"float: <float value>"),s(" \xE8 utilizzata per posizionare e formattare il contenuto di una pagina web (es: posizionare un immagine a sinistra del testo).")]),n("li",null,[s("I possibili valori sono: "),n("ul",null,[n("li",null,[n("em",null,[n("strong",null,"left")]),s(": l\u2019elemento si posiziona pi\xF9 possibile a sinistra rispetto al suo elemento padre (contenitore)")]),n("li",null,[n("em",null,[n("strong",null,"right")]),s(": l\u2019elemento si posiziona pi\xF9 possibile a sinistra rispetto al suo contenitore")]),n("li",null,[n("em",null,[n("strong",null,"inherit")]),s(": l\u2019elemento eredita il valore per float dal suo contenitore")]),n("li",null,[n("em",null,[n("strong",null,"none")]),s(": "),n("strong",null,"(default)"),s(" l\u2019elemento non si sposta e viene posizionato in linea con il testo")])])]),n("li",null,'In pratica immaginiamo che gli elementi HTML galleggiano ("float") e si possono spostare a destra, sinistra o rimanere fermi.')],-1),bL={__name:"123",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[vL,kL,yL]),_:1},16))}},Ka="/TPSI/4/css/assets/css_18.46cdc138.jpg";const Rs=e=>(kn("data-v-93f3d1a7"),e=e(),yn(),e),xL=Rs(()=>n("h1",null,"CSS",-1)),SL=Rs(()=>n("p",null,"Layout - Float",-1)),wL=Rs(()=>n("h3",null,"float none",-1)),zL={class:"grid grid-flow-col auto-cols-max gap-4"},$L=Rs(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("imgnone"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/media/css_18.jpg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},"  L\u2019oratorio e la parrocchia "),s(`
`),n("span",{class:"line"},"  San Giovanni Bosco, espressioni "),s(`
`),n("span",{class:"line"},"  ......"),s(`
`),n("span",{class:"line"},"  nella Diocesi e nella citt\xE0 di Torino."),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1)),CL=Rs(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token selector"},"#imgnone"),s(),n("span",{class:"token punctuation"},"{"),s()]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),IL=Rs(()=>n("div",null,[U(" col3 "),n("p",{style:{width:"320px"}},[n("img",{id:"imgnone",src:Ka}),s(" L\u2019oratorio e la parrocchia San Giovanni Bosco, espressioni ...... nella Diocesi e nella citt\xE0 di Torino. ")])],-1)),TL={__name:"124",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[xL,SL,wL,n("div",zL,[n("div",null,[U(" col1 "),y(i,B({},{ranges:[""]}),{default:g(()=>[$L]),_:1},16)]),n("div",null,[U(" col2 "),y(i,B({},{ranges:[""]}),{default:g(()=>[CL]),_:1},16)]),IL])]),_:1},16)}}},EL=vn(TL,[["__scopeId","data-v-93f3d1a7"]]);const Fs=e=>(kn("data-v-ce40635b"),e=e(),yn(),e),ML=Fs(()=>n("h1",null,"CSS",-1)),LL=Fs(()=>n("p",null,"Layout - Float",-1)),PL=Fs(()=>n("h3",null,"float left",-1)),OL={class:"grid grid-flow-col auto-cols-max gap-4"},AL=Fs(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("imgnone"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/media/css_18.jpg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},"  L\u2019oratorio e la parrocchia "),s(`
`),n("span",{class:"line"},"  San Giovanni Bosco, espressioni "),s(`
`),n("span",{class:"line"},"  ......"),s(`
`),n("span",{class:"line"},"  nella Diocesi e nella citt\xE0 di Torino."),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1)),RL=Fs(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token selector"},"#imgnone"),s(),n("span",{class:"token punctuation"},"{"),s()]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),FL=Fs(()=>n("div",null,[U(" col3 "),n("p",{style:{width:"320px"}},[n("img",{id:"imgnone",src:Ka}),s(" L\u2019oratorio e la parrocchia San Giovanni Bosco, espressioni ...... nella Diocesi e nella citt\xE0 di Torino. ")])],-1)),DL={__name:"125",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[ML,LL,PL,n("div",OL,[n("div",null,[U(" col1 "),y(i,B({},{ranges:[""]}),{default:g(()=>[AL]),_:1},16)]),n("div",null,[U(" col2 "),y(i,B({},{ranges:[""]}),{default:g(()=>[RL]),_:1},16)]),FL])]),_:1},16)}}},HL=vn(DL,[["__scopeId","data-v-ce40635b"]]);const Ds=e=>(kn("data-v-8056d3a1"),e=e(),yn(),e),NL=Ds(()=>n("h1",null,"CSS",-1)),jL=Ds(()=>n("p",null,"Layout - Float",-1)),BL=Ds(()=>n("h3",null,"float right",-1)),qL={class:"grid grid-flow-col auto-cols-max gap-4"},WL=Ds(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("imgnone"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/media/css_18.jpg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},"  L\u2019oratorio e la parrocchia "),s(`
`),n("span",{class:"line"},"  San Giovanni Bosco, espressioni "),s(`
`),n("span",{class:"line"},"  ......"),s(`
`),n("span",{class:"line"},"  nella Diocesi e nella citt\xE0 di Torino."),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])])])],-1)),KL=Ds(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token selector"},"#imgnone"),s(),n("span",{class:"token punctuation"},"{"),s()]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" right"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),VL=Ds(()=>n("div",null,[U(" col3 "),n("p",{style:{width:"320px"}},[n("img",{id:"imgnone",src:Ka}),s(" L\u2019oratorio e la parrocchia San Giovanni Bosco, espressioni ...... nella Diocesi e nella citt\xE0 di Torino. ")])],-1)),UL={__name:"126",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[NL,jL,BL,n("div",qL,[n("div",null,[U(" col1 "),y(i,B({},{ranges:[""]}),{default:g(()=>[WL]),_:1},16)]),n("div",null,[U(" col2 "),y(i,B({},{ranges:[""]}),{default:g(()=>[KL]),_:1},16)]),VL])]),_:1},16)}}},GL=vn(UL,[["__scopeId","data-v-8056d3a1"]]);const Hs=e=>(kn("data-v-c36d830b"),e=e(),yn(),e),YL=Hs(()=>n("h1",null,"CSS",-1)),QL=Hs(()=>n("p",null,"Layout - Float",-1)),ZL=Hs(()=>n("h3",null,"div float",-1)),JL={class:"grid grid-flow-col auto-cols-max gap-4"},XL=Hs(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("affonda"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("no float"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("affonda"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("no float"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("affonda"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("no float"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("galleggia"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("float left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("galleggia"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("float left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("galleggia"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("float left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),n8=Hs(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[s("  "),n("span",{class:"token selector"},".affonda"),s(),n("span",{class:"token punctuation"},"{")]),s(`
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
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")])])],-1)),e8=Hs(()=>n("div",null,[U(" col3 "),n("div",{class:"affonda"},"no float"),n("div",{class:"affonda"},"no float"),n("div",{class:"affonda"},"no float"),n("div",{class:"galleggia"},"float left"),n("div",{class:"galleggia"},"float left"),n("div",{class:"galleggia"},"float left")],-1)),t8={__name:"127",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[YL,QL,ZL,n("div",JL,[n("div",null,[U(" col1 "),y(i,B({},{ranges:[""]}),{default:g(()=>[XL]),_:1},16)]),n("div",null,[U(" col2 "),y(i,B({},{ranges:[""]}),{default:g(()=>[n8]),_:1},16)]),e8])]),_:1},16)}}},s8=vn(t8,[["__scopeId","data-v-c36d830b"]]),pd="/TPSI/4/css/assets/css_19.dce21abe.jpg",o8=n("h1",null,"Esercizio css_21",-1),a8=n("p",null,"Barra Navigazione orizzontale",-1),i8=n("ol",null,[n("li",null,[s("Creare un file e salvarlo come "),n("em",null,"|cognome|_esercizio_css_21.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_21.css")]),n("li",null,[s("Creare in HTML e CSS una barra di navigazione orizzontale con le seguenti caratteristiche: "),n("ol",null,[n("li",null,[s("Deve includere le seguenti voci: "),n("code",null,"Home, ATS, Servizi, Contatti, About")]),n("li",null,"Si deve usare solo una lista"),n("li",null,"La barra di navigazione deve avere un colore di sfondo"),n("li",null,"Al passaggio con il mouse su ogni singola voce, il colore di sfondo deve cambiare in modo congruo")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_21.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_21.css")],-1),l8=n("br",null,null,-1),r8=n("img",{src:pd,width:"500"},null,-1),c8={__name:"128",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[o8,a8,i8,l8,y(i,null,{default:g(()=>[r8]),_:1})]),_:1},16)}}},p8=n("h1",null,"Esercizio css_22",-1),u8=n("p",null,"Barra Navigazione orizzontale",-1),d8=n("ol",null,[n("li",null,[s("Creare un file e salvarlo come "),n("em",null,"|cognome|_esercizio_css_22.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_22.css")]),n("li",null,[s("Creare in HTML e CSS una barra di navigazione orizzontale con le seguenti caratteristiche: "),n("ol",null,[n("li",null,[s("Deve includere le seguenti voci: "),n("code",null,"Home, ATS, Servizi, Contatti, About")]),n("li",null,"NON si pu\xF2 usare una lista"),n("li",null,"La barra di navigazione deve avere un colore di sfondo"),n("li",null,"Al passaggio con il mouse su ogni singola voce, il colore di sfondo deve cambiare in modo congruo")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_22.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_22.css")],-1),m8=n("br",null,null,-1),h8=n("img",{src:pd,width:"500"},null,-1),g8={__name:"129",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[p8,u8,d8,m8,y(i,null,{default:g(()=>[h8]),_:1})]),_:1},16)}}},f8=n("h1",{class:"sezione"},"Elementi allineati",-1),_8={__name:"130",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[f8]),_:1},16))}},v8=n("h1",null,"CSS",-1),k8=n("p",null,"Layout - Align",-1),y8=n("ul",null,[n("li",null,"Nello sviluppo di una pagina web risulta molto utile poter allineare i vari elementi"),n("li",null,"Per esempio \xE8 utile allineare il testo orizzontalmente o verticalmente, centrarlo, etc\u2026"),n("li",null,"Risulta spesso necessario allineare una o pi\xF9 immagini"),n("li",null,"In modo analogo \xE8 utile allineare anche altri tipi di tag per poter ottenere il layout desiderato ed essere sicuri che appaia allo stesso modo su ogni browser"),n("li",null,"Per far ci\xF2 CSS non mette a disposizione un\u2019unica ma caso per caso \xE8 necessario usare tecniche specifiche.")],-1),b8={__name:"131",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[v8,k8,y8]),_:1},16))}};const Do=e=>(kn("data-v-eca6b1ed"),e=e(),yn(),e),x8=Do(()=>n("h1",null,"CSS",-1)),S8=Do(()=>n("p",null,"Layout - Align del testo",-1)),w8={class:"grid grid-flow-col auto-cols-max gap-8"},z8=Do(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("centerhv"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Testo allineato ")]),s(`
`),n("span",{class:"line"},"    orizzontalmente e "),s(`
`),n("span",{class:"line"},"    verticalmente"),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),$8=Do(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token selector"},".centerhv"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 3px solid green"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),C8=Do(()=>n("div",null,[U(" col3 "),n("div",{class:"centerhv"},[n("p",null,"Testo allineato orizzontalmente e verticalmente")])],-1)),I8={__name:"132",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[x8,S8,n("div",w8,[n("div",null,[U(" col1 "),y(i,B({},{ranges:[""]}),{default:g(()=>[z8]),_:1},16)]),n("div",null,[U(" col2 "),y(i,B({},{ranges:[""]}),{default:g(()=>[$8]),_:1},16)]),C8])]),_:1},16)}}},T8=vn(I8,[["__scopeId","data-v-eca6b1ed"]]);const Ho=e=>(kn("data-v-7b461dc7"),e=e(),yn(),e),E8=Ho(()=>n("h1",null,"CSS",-1)),M8=Ho(()=>n("p",null,"Layout - Align di un div",-1)),L8={class:"grid grid-flow-col auto-cols-max gap-8"},P8=Ho(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Testo allineato ")]),s(`
`),n("span",{class:"line"},"      orizzontalmente e "),s(`
`),n("span",{class:"line"},"      verticalmente"),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),O8=Ho(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),A8=Ho(()=>n("div",null,[U(" col3 "),n("div",{class:"parent"},[n("div",{class:"child"},[n("p",null,"Testo allineato orizzontalmente e verticalmente")])])],-1)),R8={__name:"133",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[E8,M8,n("div",L8,[n("div",null,[U(" col1 "),y(i,B({},{ranges:[""]}),{default:g(()=>[P8]),_:1},16)]),n("div",null,[U(" col2 "),y(i,B({},{ranges:[""]}),{default:g(()=>[O8]),_:1},16)]),A8])]),_:1},16)}}},F8=vn(R8,[["__scopeId","data-v-7b461dc7"]]);const No=e=>(kn("data-v-61692639"),e=e(),yn(),e),D8=No(()=>n("h1",null,"CSS",-1)),H8=No(()=>n("p",null,"Layout - Align di un img",-1)),N8={class:"grid grid-flow-col auto-cols-max gap-4"},j8=No(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h3")]),n("span",{class:"token punctuation"},">")]),s("Immagine centrata"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h3")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("img1"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/media/css_18.jpg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),B8=No(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),q8=No(()=>n("div",null,[U(" col3 "),n("h3",null,"Immagine centrata"),n("br"),n("div",{id:"parent"},[n("img",{id:"img1",src:Ka})])],-1)),W8={__name:"134",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[D8,H8,n("div",N8,[n("div",null,[U(" col1 "),y(i,B({},{ranges:[""]}),{default:g(()=>[j8]),_:1},16)]),n("div",null,[U(" col2 "),y(i,B({},{ranges:[""]}),{default:g(()=>[B8]),_:1},16)]),q8])]),_:1},16)}}},K8=vn(W8,[["__scopeId","data-v-61692639"]]),V8=n("h1",null,"Esercizio css_23",-1),U8=n("p",null,"Foto Gallery",-1),G8=n("ol",null,[n("li",null,[s("Creare un file e salvarlo come "),n("em",null,"|cognome|_esercizio_css_23.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_23.css")]),n("li",null,[s("Creare in HTML (solo markuo) e CSS(tutti gli stili) una foto gallery con le seguenti caratteristiche "),n("ol",null,[n("li",null,"centrata rispetto alla pagina con bordo di 20px blu chiaro"),n("li",null,"contiene 5 colonne"),n("li",null,"ogni colonna contiene un immagine con larghezza pari a 150px"),n("li",null,"ogni colonna contiene al fondo una didascalia centrata e con carattere in bold"),n("li",null,"ogni colonna ha un bordo di 1px"),n("li",null,"le colonne sono distanziate di 5px"),n("li",null,[s("per uniformit\xE0 usare la seguente immagine "),n("a",{href:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1717px-Tux.svg.png",target:"_blank",rel:"noopener"},"TUX")]),n("li",null,"non si pu\xF2 utilizzare una tabella ma bisogna usare i DIV")])]),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_23.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_23.css")],-1),Y8={__name:"135",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[V8,U8,G8]),_:1},16))}},Q8="/TPSI/4/css/assets/css_23.781727e0.png",Z8=n("h1",null,"Esercizio css_23",-1),J8=n("p",null,"Foto Gallery",-1),X8=n("img",{src:Q8,width:"500"},null,-1),nP={__name:"136",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[Z8,J8,y(i,null,{default:g(()=>[X8]),_:1})]),_:1},16)}}},eP=n("h1",{class:"sezione"},"La posizione degli elementi",-1),tP={__name:"137",setup(e){const t={layout:"section"};return x($),(o,a)=>(v(),z(ne,T(I(t)),{default:g(()=>[eP]),_:1},16))}},sP=n("h1",null,"CSS",-1),oP=n("p",null,"Layout - Position",-1),aP=n("ul",null,[n("li",null,[s("CSS permette di specificare la posizione di un elemento rispetto alla pagina o rispetto al suo contenitore tramite la propriet\xE0 "),n("code",null,"position: <value>")]),n("li",null,[s("Ci sono 5 possibili valori per questa propriet\xE0: "),n("ol",null,[n("li",null,[n("em",null,[n("strong",null,"static")]),s(" : "),n("em",null,"(default)"),s(" l\u2019elemento non \xE8 posizionato in nessun modo speciale, ma nella posizione in cui appare nel markup")]),n("li",null,[n("em",null,[n("strong",null,"relative")]),s(" : l\u2019elemento \xE8 posizionato relativamente alla sua posizione di default")]),n("li",null,[n("em",null,[n("strong",null,"fixed")]),s(" : l\u2019elemento \xE8 fisso rispetto al viewport, quindi rimarr\xE0 fermo anche se la pagine far\xE0 uno scroll")]),n("li",null,[n("em",null,[n("strong",null,"absolute")]),s(" : l\u2019elemento \xE8 posizionato in maniera assoluta rispetto al suo contenitore o in assenza al body")]),n("li",null,[n("em",null,[n("strong",null,"sticky")]),s(" : l\u2019elemento \xE8 posizionato in funzione della posizione di scroll")])])])],-1),iP={__name:"138",setup(e){const t={};return x($),(o,a)=>(v(),z(P,T(I(t)),{default:g(()=>[sP,oP,aP]),_:1},16))}};const Ns=e=>(kn("data-v-095ee0be"),e=e(),yn(),e),lP=Ns(()=>n("h1",null,"CSS",-1)),rP=Ns(()=>n("p",null,"Layout - Position - Static e Relative",-1)),cP=Ns(()=>n("ul",null,[n("li",null,[s("Per posizionare un elemento in modo relativo si usano le propriet\xE0 "),n("code",null,"top - bottom - right - left")])],-1)),pP={class:"grid grid-flow-col auto-cols-max gap-4"},uP=Ns(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Elemento posizionato ")]),s(`
`),n("span",{class:"line"},[s("      in modo relativo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),dP=Ns(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"}),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),mP=Ns(()=>n("div",null,[U(" col3 "),n("div",{id:"parent"},[n("div",{id:"child"},[n("p",null,"Elemento posizionato in modo relativo")])])],-1)),hP={__name:"139",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[lP,rP,cP,n("div",pP,[n("div",null,[U(" col1 "),y(i,B({},{ranges:[""]}),{default:g(()=>[uP]),_:1},16)]),n("div",null,[U(" col2 "),y(i,B({},{ranges:[""]}),{default:g(()=>[dP]),_:1},16)]),mP])]),_:1},16)}}},gP=vn(hP,[["__scopeId","data-v-095ee0be"]]);const jo=e=>(kn("data-v-846ecc13"),e=e(),yn(),e),fP=jo(()=>n("h1",null,"CSS",-1)),_P=jo(()=>n("p",null,"Layout - Position - Fixed",-1)),vP={class:"grid grid-flow-col auto-cols-max gap-4"},kP=jo(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Elemento posizionato ")]),s(`
`),n("span",{class:"line"},[s("      in modo fixed"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),yP=jo(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"#parent"),s(),n("span",{class:"token punctuation"},"{")]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),bP=jo(()=>n("div",null,[U(" col3 "),n("div",{id:"parent"},[n("div",{id:"child"},[n("p",null,"Elemento posizionato in modo fixed")])])],-1)),xP={__name:"140",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[fP,_P,n("div",vP,[n("div",null,[U(" col1 "),y(i,B({},{ranges:[""]}),{default:g(()=>[kP]),_:1},16)]),n("div",null,[U(" col2 "),y(i,B({},{ranges:[""]}),{default:g(()=>[yP]),_:1},16)]),bP])]),_:1},16)}}},SP=vn(xP,[["__scopeId","data-v-846ecc13"]]);const Bo=e=>(kn("data-v-99314294"),e=e(),yn(),e),wP=Bo(()=>n("h1",null,"CSS",-1)),zP=Bo(()=>n("p",null,"Layout - Position - Absolute",-1)),$P={class:"grid grid-flow-col auto-cols-max gap-4"},CP=Bo(()=>n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Elemento posizionato ")]),s(`
`),n("span",{class:"line"},[s("      in modo absolute"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1)),IP=Bo(()=>n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"#parent"),s(),n("span",{class:"token punctuation"},"{")]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1)),TP=Bo(()=>n("div",null,[U(" col3 "),n("div",{id:"parent"},[n("div",{id:"child"},[n("p",null,"Elemento posizionato in modo absolute")])])],-1)),EP={__name:"141",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[wP,zP,n("div",$P,[n("div",null,[U(" col1 "),y(i,B({},{ranges:[""]}),{default:g(()=>[CP]),_:1},16)]),n("div",null,[U(" col2 "),y(i,B({},{ranges:[""]}),{default:g(()=>[IP]),_:1},16)]),TP])]),_:1},16)}}},MP=vn(EP,[["__scopeId","data-v-99314294"]]),LP=n("h1",null,"CSS",-1),PP=n("p",null,"Layout - Position - Sticky",-1),OP=n("p",null,[n("em",null,"Aprire la seguente pagina"),s(),n("a",{href:"../support/position_sticky_css_slide.html",target:"_blank",rel:"noopener"},"sticky")],-1),AP=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("sticky"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("I am sticky e non mi muovo!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scrolldiv"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, .... "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")])])])],-1),RP=n("pre",{class:"slidev-code language-css"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token selector"},"div.sticky"),s(),n("span",{class:"token punctuation"},"{")]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),FP={__name:"142",setup(e){const t={};return x($),(o,a)=>{const i=rn;return v(),z(P,T(I(t)),{default:g(()=>[LP,PP,OP,y(i,B({},{ranges:[""]}),{default:g(()=>[AP]),_:1},16),y(i,B({},{ranges:[""]}),{default:g(()=>[RP]),_:1},16)]),_:1},16)}}},DP="/TPSI/4/css/assets/css_20.4695063c.jpg",HP=n("h1",null,"Esercizio css_24",-1),NP=n("p",null,"Position",-1),jP=n("ol",null,[n("li",null,[s("Creare un file e salvarlo come "),n("em",null,"|cognome|_esercizio_css_24.html")]),n("li",null,[s("Inserire il link ad un foglio di stile esterno norminato "),n("em",null,"|cognome|_esercizio_css_24.css")]),n("li",null,"Creare in HTML e CSS il posizionamento di una stringa su di un immagine, in modo che la stringa sia posizionata nell\u2019angolo in alto a sinistra"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_24.html"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_css_24.css")],-1),BP=n("br",null,null,-1),qP=n("img",{src:DP,width:"500"},null,-1),WP={__name:"143",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[HP,NP,jP,BP,y(i,null,{default:g(()=>[qP]),_:1})]),_:1},16)}}},KP="/TPSI/4/css/assets/css_21.d37e4564.jpg",VP=n("p",null,"\xA0",-1),UP=n("img",{src:KP,width:"800"},null,-1),GP={__name:"144",setup(e){const t={};return x($),(o,a)=>{const i=Bn("center");return v(),z(P,T(I(t)),{default:g(()=>[VP,y(i,null,{default:g(()=>[UP]),_:1})]),_:1},16)}}},YP=[{path:"1",name:"page-1",component:cy,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.4.1",title:"Cascading Style Sheets",slide:{raw:`---
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
version: '1.4.1'
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
</div>`,frontmatter:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.4.1",title:"Cascading Style Sheets"},index:0,start:0,end:27,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:yy,meta:{slide:{raw:`
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
Descrizione sul come visualizzare il documento su un particolare dispositivo o supporto. Un documento stampato su carta avr\xE0 uno stile diverso rispetto allo stesso documento formattato per una piattaforma mobile. Lo stile quindi influisce su come un documento HTML viene visualizzato su dispositivi e condizioni diverse.`,frontmatter:{},index:1,start:28,end:44,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Ty,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:2,start:45,end:86,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Py,meta:{slide:{raw:`
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
- Permette anche di automentare la *manutenibilit\xE0* di un sito web, di separare il sito in aree funzionali diverse e di permettere la cooperazione tra diverse professionalit\xE0 all'interno del gruppo di lavoro.`,frontmatter:{},index:3,start:87,end:100,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:By,meta:{slide:{raw:`
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
- [https://javascript.info/](https://javascript.info/)`,frontmatter:{},index:4,start:101,end:125,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Vy,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Regole, dichiarazioni e sintassi CSS</h1>

`,content:'<h1 class="sezione">Regole, dichiarazioni e sintassi CSS</h1>',frontmatter:{layout:"section"},index:5,start:125,end:131,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Jy,meta:{slide:{raw:`
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
</v-click>`,frontmatter:{},index:6,start:132,end:153,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Ox,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:7,start:154,end:175,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Rx,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Priorit\xE0 Cascade CSS</h1>

`,content:'<h1 class="sezione">Priorit\xE0 Cascade CSS</h1>',frontmatter:{layout:"section"},index:8,start:175,end:181,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Kx,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:9,start:182,end:222,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Xx,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:10,start:223,end:267,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:s2,meta:{slide:{raw:`
# Esercizio css_01

CSS Inline

1. Editare il file *|cognome|_esercizio_html_02.html* e salvarlo come *|cognome|_esercizio_css_01.html*
2. Definire lo stile inline per 4 tag \`h2\` e impostare il colore a rosso
3. Fornire il link github al file con nome |cognome|_esercizio_css_01.html


`,title:"Esercizio css_01",level:1,content:`# Esercizio css_01

CSS Inline

1. Editare il file *|cognome|_esercizio_html_02.html* e salvarlo come *|cognome|_esercizio_css_01.html*
2. Definire lo stile inline per 4 tag \`h2\` e impostare il colore a rosso
3. Fornire il link github al file con nome |cognome|_esercizio_css_01.html`,frontmatter:{},index:11,start:268,end:279,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:d2,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:12,start:280,end:326,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:f2,meta:{slide:{raw:`
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
4. Fornire il link github al file con nome |cognome|_esercizio_css_02.html`,frontmatter:{},index:13,start:327,end:341,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:b2,meta:{slide:{raw:`
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
- In questo modo si ottiene la massima flessibilit\xE0 e per modificare lo stile di un elemento per **TUTTO** il sito basta fare una singola modifica.`,frontmatter:{},index:14,start:342,end:357,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:T2,meta:{slide:{raw:`
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
- **type="text/css"**: indica che il file \xE8 di tipo style sheet (CSS)`,frontmatter:{},index:15,start:358,end:379,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:D2,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:16,start:380,end:420,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:B2,meta:{slide:{raw:`
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
6. Fornire il link github al file con nome |cognome|_esercizio_css_03.css`,frontmatter:{},index:17,start:421,end:437,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Q2,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:18,start:438,end:458,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:nS,meta:{slide:{raw:`
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
7. Fornire il link github al file con nome |cognome|_esercizio_css_04.css`,frontmatter:{},index:19,start:459,end:477,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:tS,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">I Selettori</h1>

`,content:'<h1 class="sezione">I Selettori</h1>',frontmatter:{layout:"section"},index:20,start:477,end:483,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:iS,meta:{slide:{raw:`
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
  5. <u>***selettori Attribute***</u> : seleziona tag in base a specifici attributi`,frontmatter:{},index:21,start:484,end:499,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:rS,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Selettori Simple</h1>

`,content:'<h1 class="sezione">Selettori Simple</h1>',frontmatter:{layout:"section"},index:22,start:499,end:505,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:xS,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:23,start:506,end:552,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:$S,meta:{slide:{raw:`
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
5. Fornire il link github al file con nome |cognome|_esercizio_css_05.css`,frontmatter:{},index:24,start:553,end:570,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:HS,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:25,start:571,end:628,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:ZS,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:26,start:629,end:686,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:ew,meta:{slide:{raw:`
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
5. Fornire il link github al file con nome |cognome|_esercizio_css_06.css`,frontmatter:{},index:27,start:687,end:706,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:mw,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:28,start:707,end:755,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:$w,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:29,start:756,end:821,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Ew,meta:{slide:{raw:`
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
5. Fornire il link github al file con nome |cognome|_esercizio_css_07.css`,frontmatter:{},index:30,start:822,end:841,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Rw,meta:{slide:{raw:`
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

Regola CSS: \`<nome tag1>, <nome tag2>, .... <nome tagN> { dichiarazione CSS}\``,frontmatter:{},index:31,start:842,end:855,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Zw,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:32,start:856,end:929,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:e3,meta:{slide:{raw:`
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
10. Fornire il link github al file con nome |cognome|_esercizio_css_08.css`,frontmatter:{},index:33,start:930,end:948,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:s3,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Selettori Combinator</h1>

`,content:'<h1 class="sezione">Selettori Combinator</h1>',frontmatter:{layout:"section"},index:34,start:948,end:954,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:p3,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:35,start:955,end:972,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:h3,meta:{slide:{raw:`
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
  - JS pu\xF2 gestire tutti gli eventi di una pagina`,frontmatter:{},index:36,start:973,end:987,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:b3,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:37,start:988,end:1001,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:$3,meta:{slide:{raw:`
# Document Object Model

DOM

<center>
<img src="/media/css_02b.png" width="600" />
</center>

`,title:"Document Object Model",level:1,content:`# Document Object Model

DOM

<center>
<img src="/media/css_02b.png" width="600" />
</center>`,frontmatter:{},index:38,start:1002,end:1012,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:O3,meta:{slide:{raw:`
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
</table>`,frontmatter:{},index:39,start:1013,end:1030,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:j3,meta:{slide:{raw:`
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
</table>`,frontmatter:{},index:40,start:1031,end:1045,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:U3,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:41,start:1046,end:1057,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:Z3,meta:{slide:{raw:`
# Esercizio css_09

DOM

1. Analizzare il DOM della pagina  *|cognome|_esercizio_css_08.html* con:
   - Google Chrome Developer Tools
   - Live DOM Viewer
  

`,title:"Esercizio css_09",level:1,content:`# Esercizio css_09

DOM

1. Analizzare il DOM della pagina  *|cognome|_esercizio_css_08.html* con:
   - Google Chrome Developer Tools
   - Live DOM Viewer`,frontmatter:{},index:42,start:1058,end:1069,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:pz,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:43,start:1070,end:1139,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:vz,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:44,start:1140,end:1179,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:xz,meta:{slide:{raw:`
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
8. Fornire il link github al file con nome |cognome|_esercizio_css_10.css`,frontmatter:{},index:45,start:1180,end:1194,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:Az,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:46,start:1195,end:1261,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:qz,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:47,start:1262,end:1303,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:Uz,meta:{slide:{raw:"\n# Esercizio css_11\n\nCSS descendant selector\n\n\n1. Dato il file [esercizio_css_11.html](https://profmancusoa.github.io/TPSI/support/esercizio_css_11.html)\n2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_11.css*\n3. definire lo stile per tutti i tag `<mark>` che sono figli di `<p>` con colore verde\n4. definire lo stile per tutti i tag `<b>` che sono figli di `<p>` con colore giallo e sfondo nero\n5. definire lo stile per tutti i tag `<em>` che sono discendenti di `<div>` con rosso su sfondo giallo\n6. definire lo stile per tutti i tag `<span>` che sono discendenti di `<div>` con sfondo giallo e colore nero\n7.  Fornire il link github al file con nome |cognome|_esercizio_css_11.html\n8.  Fornire il link github al file con nome |cognome|_esercizio_css_11.css\n\n",title:"Esercizio css_11",level:1,content:"# Esercizio css_11\n\nCSS descendant selector\n\n\n1. Dato il file [esercizio_css_11.html](https://profmancusoa.github.io/TPSI/support/esercizio_css_11.html)\n2. Inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_11.css*\n3. definire lo stile per tutti i tag `<mark>` che sono figli di `<p>` con colore verde\n4. definire lo stile per tutti i tag `<b>` che sono figli di `<p>` con colore giallo e sfondo nero\n5. definire lo stile per tutti i tag `<em>` che sono discendenti di `<div>` con rosso su sfondo giallo\n6. definire lo stile per tutti i tag `<span>` che sono discendenti di `<div>` con sfondo giallo e colore nero\n7.  Fornire il link github al file con nome |cognome|_esercizio_css_11.html\n8.  Fornire il link github al file con nome |cognome|_esercizio_css_11.css",frontmatter:{},index:48,start:1304,end:1320,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:Yz,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Selettori Pseudo-Class</h1>

`,content:'<h1 class="sezione">Selettori Pseudo-Class</h1>',frontmatter:{layout:"section"},index:49,start:1320,end:1326,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:o$,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:50,start:1327,end:1366,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:f$,meta:{slide:{raw:`
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

</style>`,frontmatter:{},index:51,start:1367,end:1442,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:R$,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:52,start:1443,end:1500,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:N$,meta:{slide:{raw:`
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
8. Fornire il link github al file con nome |cognome|_esercizio_css_12.css`,frontmatter:{},index:53,start:1501,end:1516,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:G$,meta:{slide:{raw:`
# CSS

Selettori Pseudo-Class

### nth-child

- La pseudo classe \`nth-child\` seleziona una serie di elementi fratelli  in funzione della loro posizione
 
Regola CSS: \`<selettore>:nth-child(parametro) { dichiarazione CSS}\`

dove parametro pu\xF2 essere:

- **odd**: seleziona gli elementi con posizione dispari
- **even**: seleziona gli elementi con posizione pari
- **An+B**: 
  - A: definisce lo step
  - B: definisce l'offset iniziale
  - n: \xE8 un intero progressivo che parte da 0 
  `,title:"CSS",level:1,content:`# CSS

Selettori Pseudo-Class

### nth-child

- La pseudo classe \`nth-child\` seleziona una serie di elementi fratelli  in funzione della loro posizione
 
Regola CSS: \`<selettore>:nth-child(parametro) { dichiarazione CSS}\`

dove parametro pu\xF2 essere:

- **odd**: seleziona gli elementi con posizione dispari
- **even**: seleziona gli elementi con posizione pari
- **An+B**: 
  - A: definisce lo step
  - B: definisce l'offset iniziale
  - n: \xE8 un intero progressivo che parte da 0`,frontmatter:{},index:54,start:1517,end:1537,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:sC,meta:{slide:{raw:`
# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

\`\`\`html
li:nth-child(even) {
    color: red;
    background-color: yellow;
}
\`\`\`
</div>
<div>

\`\`\`html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
\`\`\`
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(even) {
    color: red;
    background-color: yellow;
  }
</style>
`,title:"CSS",level:1,content:`# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

\`\`\`html
li:nth-child(even) {
    color: red;
    background-color: yellow;
}
\`\`\`
</div>
<div>

\`\`\`html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
\`\`\`
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(even) {
    color: red;
    background-color: yellow;
  }
</style>`,frontmatter:{},index:55,start:1538,end:1600,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:dC,meta:{slide:{raw:`
# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

\`\`\`html
li:nth-child(odd) {
    color: red;
    background-color: yellow;
}
\`\`\`
</div>
<div>

\`\`\`html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
\`\`\`
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(odd) {
    color: red;
    background-color: yellow;
  }
</style>
`,title:"CSS",level:1,content:`# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

\`\`\`html
li:nth-child(odd) {
    color: red;
    background-color: yellow;
}
\`\`\`
</div>
<div>

\`\`\`html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
\`\`\`
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(odd) {
    color: red;
    background-color: yellow;
  }
</style>`,frontmatter:{},index:56,start:1601,end:1663,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:bC,meta:{slide:{raw:`
# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

\`\`\`html
li:nth-child(2n+5) {
    color: red;
    background-color: yellow;
}
\`\`\`
</div>
<div>

\`\`\`html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
\`\`\`
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(2n+5) {
    color: red;
    background-color: yellow;
  }
</style>
`,title:"CSS",level:1,content:`# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

\`\`\`html
li:nth-child(2n+5) {
    color: red;
    background-color: yellow;
}
\`\`\`
</div>
<div>

\`\`\`html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
\`\`\`
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(2n+5) {
    color: red;
    background-color: yellow;
  }
</style>`,frontmatter:{},index:57,start:1664,end:1726,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:EC,meta:{slide:{raw:`
# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

\`\`\`html
li:nth-child(2n+1) {
    color: red;
    background-color: yellow;
}
\`\`\`
</div>
<div>

\`\`\`html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
\`\`\`
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(2n+1) {
    color: red;
    background-color: yellow;
  }
</style>
`,title:"CSS",level:1,content:`# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

\`\`\`html
li:nth-child(2n+1) {
    color: red;
    background-color: yellow;
}
\`\`\`
</div>
<div>

\`\`\`html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
\`\`\`
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(2n+1) {
    color: red;
    background-color: yellow;
  }
</style>`,frontmatter:{},index:58,start:1727,end:1789,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:HC,meta:{slide:{raw:`
# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

\`\`\`html
li:nth-child(2n) {
    color: red;
    background-color: yellow;
}
\`\`\`
</div>
<div>

\`\`\`html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
\`\`\`
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(2n) {
    color: red;
    background-color: yellow;
  }
</style>
`,title:"CSS",level:1,content:`# CSS

Selettori Pseudo-Class

### nth-child

<div grid="~ cols-3 gap-4">
<div>

\`\`\`html
li:nth-child(2n) {
    color: red;
    background-color: yellow;
}
\`\`\`
</div>
<div>

\`\`\`html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
</ul>
\`\`\`
</div>

<div>
<v-click>

<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>
<li>item 5</li>
<li>item 6</li>
<li>item 7</li>
<li>item 8</li>
<li>item 9</li>
<li>item 10</li>
</ul>

</v-click>
</div>
</div>

<style>
  li:nth-child(2n) {
    color: red;
    background-color: yellow;
  }
</style>`,frontmatter:{},index:59,start:1790,end:1852,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:qC,meta:{slide:{raw:`
# Esercizio css_12a

CSS pseudo-class selector

1. Creare un file *|cognome|_esercizio_html_12a.html* e inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_12a.css*
2. Creare una scacchiera 8x8 in cui 
   1. in ogni cella viene scritta la coordinata in forma righa,colonna (partendo da zero)
   2. colorare le celle esattamente come in una scacchiera per scacchi
3. Fornire il link github al file con nome |cognome|_esercizio_css_12a.html
4. Fornire il link github al file con nome |cognome|_esercizio_css_12a.css

`,title:"Esercizio css_12a",level:1,content:`# Esercizio css_12a

CSS pseudo-class selector

1. Creare un file *|cognome|_esercizio_html_12a.html* e inserire il link ad un foglio di stile esterno norminato *|cognome|_esercizio_css_12a.css*
2. Creare una scacchiera 8x8 in cui 
   1. in ogni cella viene scritta la coordinata in forma righa,colonna (partendo da zero)
   2. colorare le celle esattamente come in una scacchiera per scacchi
3. Fornire il link github al file con nome |cognome|_esercizio_css_12a.html
4. Fornire il link github al file con nome |cognome|_esercizio_css_12a.css`,frontmatter:{},index:60,start:1853,end:1866,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:KC,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione"><span style="color: green;">Un Web a Colori</span></h1>

`,content:'<h1 class="sezione"><span style="color: green;">Un Web a Colori</span></h1>',frontmatter:{layout:"section"},index:61,start:1866,end:1872,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:YC,meta:{slide:{raw:`
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
  6. Usando un valore ***HSLA*** nella forma \`hsla(5,  30%, 54%, 0.81)\``,frontmatter:{},index:62,start:1873,end:1889,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:t4,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:63,start:1890,end:1940,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:i4,meta:{slide:{raw:`
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
  - [https://www.designbombs.com/best-online-color-palette-generators/](https://www.designbombs.com/best-online-color-palette-generators/)`,frontmatter:{},index:64,start:1941,end:1959,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:p4,meta:{slide:{raw:`
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
6. Fornire il link github al file con nome |cognome|_esercizio_css_13.css`,frontmatter:{},index:65,start:1960,end:1979,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:d4,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Larghezza e Altezza degli elementi Web</h1>

`,content:'<h1 class="sezione">Larghezza e Altezza degli elementi Web</h1>',frontmatter:{layout:"section"},index:66,start:1979,end:1985,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:f4,meta:{slide:{raw:`
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
- Per default *width* e *height* sono impostate ad \`auto\` e pertanto il browser calcola le dimensioni minime per visualizzare l'elemento.`,frontmatter:{},index:67,start:1986,end:2e3,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:w4,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:68,start:2001,end:2079,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:I4,meta:{slide:{raw:`
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
7.  Fornire il link github al file con nome |cognome|_esercizio_css_14.css`,frontmatter:{},index:69,start:2080,end:2093,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:E4,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione"><div style="color: rgb(178,28,128); background-image: linear-gradient(to right top, #9198a3, #7f91b9, #7588ce, #797bde, #8a69e7);">Lo sfondo degli elementi</div></h1>


`,content:'<h1 class="sezione"><div style="color: rgb(178,28,128); background-image: linear-gradient(to right top, #9198a3, #7f91b9, #7588ce, #797bde, #8a69e7);">Lo sfondo degli elementi</div></h1>',frontmatter:{layout:"section"},index:70,start:2093,end:2100,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:O4,meta:{slide:{raw:`
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
  - ***background-position*** : definisce la posizione dell'immagine di sfondo`,frontmatter:{},index:71,start:2101,end:2114,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:B4,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:72,start:2115,end:2196,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:Q4,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:73,start:2197,end:2279,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:n5,meta:{slide:{raw:`
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
4.  Fornire il link github al file con nome |cognome|_esercizio_css_15.css`,frontmatter:{},index:74,start:2280,end:2297,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:t5,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Attorno al contenuto: Box Model</h1>

`,content:'<h1 class="sezione">Attorno al contenuto: Box Model</h1>',frontmatter:{layout:"section"},index:75,start:2297,end:2303,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:c5,meta:{slide:{raw:`
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
  - ***margin*** : area **trasparente** attorno al bordo.`,frontmatter:{},index:76,start:2304,end:2320,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:k5,meta:{slide:{raw:`
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
  

</style>`,frontmatter:{},index:77,start:2321,end:2496,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:S5,meta:{slide:{raw:`
# CSS

Box model - sizing

- Il box model ci permette di definire bordi attorno agli elementi e di calcolare le dimensioni di un elemento e lo spazio tra elementi.
- E' importante considerare che quando si specifica una propriet\xE0 *width* e/o *height*, si sta definendo la larghezza e/o altezza ***SOLO*** della componente *content* del box model.
- Pertanto per calcolare la dimensione complessiva dell'elemento HTML sar\xE0 necessario anche tenere in considerazione ***padding***, ***border*** e ***margin***.  

`,title:"CSS",level:1,content:`# CSS

Box model - sizing

- Il box model ci permette di definire bordi attorno agli elementi e di calcolare le dimensioni di un elemento e lo spazio tra elementi.
- E' importante considerare che quando si specifica una propriet\xE0 *width* e/o *height*, si sta definendo la larghezza e/o altezza ***SOLO*** della componente *content* del box model.
- Pertanto per calcolare la dimensione complessiva dell'elemento HTML sar\xE0 necessario anche tenere in considerazione ***padding***, ***border*** e ***margin***.`,frontmatter:{},index:78,start:2497,end:2507,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:D5,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:79,start:2508,end:2604,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:B5,meta:{slide:{raw:`
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
4.  Fornire il link github al file con nome |cognome|_esercizio_css_16.css`,frontmatter:{},index:80,start:2605,end:2620,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:Q5,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:81,start:2621,end:2659,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:rI,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:82,start:2660,end:2684,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:dI,meta:{slide:{raw:`
# Esercizio css_17

CSS box model

<!-- risultato esercizio: 100,250,353 -->

1. Data la seguente pagina html: [esercizio_css_17.html](/TPSI/support/esercizio_css_17.html) e relativo css:  [esercizio_css_17.css](/TPSI/support/esercizio_css_17.css)
2. Editare il file e determinare il valore corretto per la propriet\xE0 **width** della regola CSS *#div1*,*#div2* e *#div3* in modo che:
   1. il componente **div1** abbia dimensione complessiva pari a **200px**
   2. il componente **div2** abbia dimensione complessiva pari a **300px**
   3. il componente **div3** abbia dimensione complessiva pari a **408px**
3. Fornire il link github al file con nome |cognome|_esercizio_css_17.html
4. Fornire il link github al file con nome |cognome|_esercizio_css_17.css


`,title:"Esercizio css_17",level:1,content:`# Esercizio css_17

CSS box model

<!-- risultato esercizio: 100,250,353 -->

1. Data la seguente pagina html: [esercizio_css_17.html](/TPSI/support/esercizio_css_17.html) e relativo css:  [esercizio_css_17.css](/TPSI/support/esercizio_css_17.css)
2. Editare il file e determinare il valore corretto per la propriet\xE0 **width** della regola CSS *#div1*,*#div2* e *#div3* in modo che:
   1. il componente **div1** abbia dimensione complessiva pari a **200px**
   2. il componente **div2** abbia dimensione complessiva pari a **300px**
   3. il componente **div3** abbia dimensione complessiva pari a **408px**
3. Fornire il link github al file con nome |cognome|_esercizio_css_17.html
4. Fornire il link github al file con nome |cognome|_esercizio_css_17.css`,frontmatter:{},index:83,start:2685,end:2702,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:hI,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">I bordi di un elemento</h1>
`,content:'<h1 class="sezione">I bordi di un elemento</h1>',frontmatter:{layout:"section"},index:84,start:2702,end:2707,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:bI,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:85,start:2708,end:2722,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:II,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:86,start:2723,end:2737,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:AI,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:87,start:2738,end:2752,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:BI,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:88,start:2753,end:2767,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:QI,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:89,start:2768,end:2784,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:n6,meta:{slide:{raw:`
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
7.  Fornire il link github al file con nome |cognome|_esercizio_css_18.css`,frontmatter:{},index:90,start:2785,end:2800,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:t6,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Formattazione del Testo</h1>

`,content:'<h1 class="sezione">Formattazione del Testo</h1>',frontmatter:{layout:"section"},index:91,start:2800,end:2806,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:i6,meta:{slide:{raw:`
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
  - ***text-shadow*** : permette di aggiungere un'ombra ad un testo`,frontmatter:{},index:92,start:2807,end:2821,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:v6,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:93,start:2822,end:2847,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:E6,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:94,start:2848,end:2874,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:B6,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:95,start:2875,end:2901,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:J6,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:96,start:2902,end:2925,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:rT,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:97,start:2926,end:2948,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:vT,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:98,start:2949,end:2970,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:xT,meta:{slide:{raw:`
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
5.  Fornire il link github al file con nome |cognome|_esercizio_css_19.css`,frontmatter:{},index:99,start:2971,end:2986,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:wT,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Font ed Icone</h1>

`,content:'<h1 class="sezione">Font ed Icone</h1>',frontmatter:{layout:"section"},index:100,start:2986,end:2992,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:IT,meta:{slide:{raw:`
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

- Per specificare il font si usa la propriet\xE0 \`font-family:<font name>\``,frontmatter:{},index:101,start:2993,end:3009,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:PT,meta:{slide:{raw:`
# CSS

Font

<center>
<img src="/media/css_17.jpg" width="500" />
</center>

`,title:"CSS",level:1,content:`# CSS

Font

<center>
<img src="/media/css_17.jpg" width="500" />
</center>`,frontmatter:{},index:102,start:3010,end:3020,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:HT,meta:{slide:{raw:`
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

- Questa descrizone CSS, specifica di usare il font "Times New Roman" se disponibile. In caso contrario indica al browser di provare a dutilizzare il font "Times" e come ultima spiaggia qualsiasi font disponibile della famiglia "serif".`,frontmatter:{},index:103,start:3021,end:3038,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:qT,meta:{slide:{raw:`
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
  - ***Courier New (monospace)*** :<span style="font-family:'Courier New';font-size:13px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>`,frontmatter:{},index:104,start:3039,end:3057,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:XT,meta:{slide:{raw:`
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
<p style="font-style:oblique;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>`,frontmatter:{},index:105,start:3058,end:3075,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:lE,meta:{slide:{raw:`
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
<p style="font-weight: bold;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>`,frontmatter:{},index:106,start:3076,end:3090,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:_E,meta:{slide:{raw:`
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

- L'utente non pu\xF2 cambiare la dimensione del font tramite le impostazioni del browser`,frontmatter:{},index:107,start:3091,end:3109,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:TE,meta:{slide:{raw:`
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
- L'utente pu\xF2 adattare la dimensione del font tramite le impostazioni del browser`,frontmatter:{},index:108,start:3110,end:3132,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:HE,meta:{slide:{raw:`
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
<p style="font-family: Audiowide, sans-serif;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>`,frontmatter:{},index:109,start:3133,end:3162,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:nM,meta:{slide:{raw:`
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
<p style="font-family: 'Margarine', cursive;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>`,frontmatter:{},index:110,start:3163,end:3187,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:mM,meta:{slide:{raw:`
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
<span class="material-icons" style="color:yellow;">&nbsp;&nbsp;&nbsp;emoji_emotions</span>`,frontmatter:{},index:111,start:3188,end:3222,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:_M,meta:{slide:{raw:`
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
  - ***lower-alpha***`,frontmatter:{},index:112,start:3223,end:3238,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:zM,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:113,start:3239,end:3304,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:PM,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:114,start:3305,end:3370,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:BM,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:115,start:3371,end:3440,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:VM,meta:{slide:{raw:`
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
5.  Fornire il link github al file con nome |cognome|_esercizio_css_20.css`,frontmatter:{},index:116,start:3441,end:3457,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",name:"page-118",component:GM,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Elementi nascosti e elementi fantasma</h1>

`,content:'<h1 class="sezione">Elementi nascosti e elementi fantasma</h1>',frontmatter:{layout:"section"},index:117,start:3457,end:3463,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:117,no:118},__clicksElements:[],__preloaded:!1}},{path:"119",name:"page-119",component:JM,meta:{slide:{raw:`
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
- Normalmente queste propriet\xE0 sono manipolate da JavaScript fornendo cos\xEC uno strumento utile alla creazione di applicazioni dinamiche.`,frontmatter:{},index:118,start:3464,end:3480,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:118,no:119},__clicksElements:[],__preloaded:!1}},{path:"120",name:"page-120",component:iL,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:119,start:3481,end:3563,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:119,no:120},__clicksElements:[],__preloaded:!1}},{path:"121",name:"page-121",component:gL,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:120,start:3564,end:3633,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:120,no:121},__clicksElements:[],__preloaded:!1}},{path:"122",name:"page-122",component:_L,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Elementi galleggianti</h1>

`,content:'<h1 class="sezione">Elementi galleggianti</h1>',frontmatter:{layout:"section"},index:121,start:3633,end:3639,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:121,no:122},__clicksElements:[],__preloaded:!1}},{path:"123",name:"page-123",component:bL,meta:{slide:{raw:`
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
- In pratica immaginiamo che gli elementi HTML galleggiano ("float") e si possono spostare a destra, sinistra o rimanere fermi.`,frontmatter:{},index:122,start:3640,end:3654,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:122,no:123},__clicksElements:[],__preloaded:!1}},{path:"124",name:"page-124",component:EL,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:123,start:3655,end:3713,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:123,no:124},__clicksElements:[],__preloaded:!1}},{path:"125",name:"page-125",component:HL,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:124,start:3714,end:3771,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:124,no:125},__clicksElements:[],__preloaded:!1}},{path:"126",name:"page-126",component:GL,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:125,start:3772,end:3830,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:125,no:126},__clicksElements:[],__preloaded:!1}},{path:"127",name:"page-127",component:s8,meta:{slide:{raw:`
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
</style>`,frontmatter:{},index:126,start:3831,end:3911,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:126,no:127},__clicksElements:[],__preloaded:!1}},{path:"128",name:"page-128",component:c8,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:127,start:3912,end:3932,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:127,no:128},__clicksElements:[],__preloaded:!1}},{path:"129",name:"page-129",component:g8,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:128,start:3933,end:3954,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:128,no:129},__clicksElements:[],__preloaded:!1}},{path:"130",name:"page-130",component:_8,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Elementi allineati</h1>
`,content:'<h1 class="sezione">Elementi allineati</h1>',frontmatter:{layout:"section"},index:129,start:3954,end:3959,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:129,no:130},__clicksElements:[],__preloaded:!1}},{path:"131",name:"page-131",component:b8,meta:{slide:{raw:`
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
- Per far ci\xF2 CSS non mette a disposizione un'unica ma caso per caso \xE8 necessario usare tecniche specifiche.`,frontmatter:{},index:130,start:3960,end:3973,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:130,no:131},__clicksElements:[],__preloaded:!1}},{path:"132",name:"page-132",component:T8,meta:{slide:{raw:`
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


</style>`,frontmatter:{},index:131,start:3974,end:4035,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:131,no:132},__clicksElements:[],__preloaded:!1}},{path:"133",name:"page-133",component:F8,meta:{slide:{raw:`
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


</style>`,frontmatter:{},index:132,start:4036,end:4115,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:132,no:133},__clicksElements:[],__preloaded:!1}},{path:"134",name:"page-134",component:K8,meta:{slide:{raw:`
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

</style>`,frontmatter:{},index:133,start:4116,end:4181,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:133,no:134},__clicksElements:[],__preloaded:!1}},{path:"135",name:"page-135",component:Y8,meta:{slide:{raw:`
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
5.  Fornire il link github al file con nome |cognome|_esercizio_css_23.css`,frontmatter:{},index:134,start:4182,end:4201,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:134,no:135},__clicksElements:[],__preloaded:!1}},{path:"136",name:"page-136",component:nP,meta:{slide:{raw:`
# Esercizio css_23

Foto Gallery

<center>
<img src="/media/css_23.png" width="500">
</center>
`,title:"Esercizio css_23",level:1,content:`# Esercizio css_23

Foto Gallery

<center>
<img src="/media/css_23.png" width="500">
</center>`,frontmatter:{},index:135,start:4202,end:4211,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:135,no:136},__clicksElements:[],__preloaded:!1}},{path:"137",name:"page-137",component:tP,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">La posizione degli elementi</h1>

`,content:'<h1 class="sezione">La posizione degli elementi</h1>',frontmatter:{layout:"section"},index:136,start:4211,end:4217,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:136,no:137},__clicksElements:[],__preloaded:!1}},{path:"138",name:"page-138",component:iP,meta:{slide:{raw:`
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
  5. ***sticky*** : l'elemento \xE8 posizionato in funzione della posizione di scroll`,frontmatter:{},index:137,start:4218,end:4232,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:137,no:138},__clicksElements:[],__preloaded:!1}},{path:"139",name:"page-139",component:gP,meta:{slide:{raw:`
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

</style>`,frontmatter:{},index:138,start:4233,end:4320,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:138,no:139},__clicksElements:[],__preloaded:!1}},{path:"140",name:"page-140",component:SP,meta:{slide:{raw:`
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

</style>`,frontmatter:{},index:139,start:4321,end:4392,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:139,no:140},__clicksElements:[],__preloaded:!1}},{path:"141",name:"page-141",component:MP,meta:{slide:{raw:`
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

</style>`,frontmatter:{},index:140,start:4393,end:4466,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:140,no:141},__clicksElements:[],__preloaded:!1}},{path:"142",name:"page-142",component:FP,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:141,start:4467,end:4496,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:141,no:142},__clicksElements:[],__preloaded:!1}},{path:"143",name:"page-143",component:WP,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:142,start:4497,end:4515,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:142,no:143},__clicksElements:[],__preloaded:!1}},{path:"144",name:"page-144",component:GP,meta:{slide:{raw:`
&nbsp;
<center>
<img src="/media/css_21.jpg" width="800" />
</center>
`,content:`&nbsp;
<center>
<img src="/media/css_21.jpg" width="800" />
</center>`,frontmatter:{},index:143,start:4516,end:4522,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:143,no:144},__clicksElements:[],__preloaded:!1}},{path:"145",component:X0,meta:{layout:"end"}}],Gn=YP,QP=[{name:"play",path:"/",component:K0,children:[...Gn]},{name:"print",path:"/print",component:Q0},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>$s(()=>import("./Presenter.8b7d7183.js"),["assets/Presenter.8b7d7183.js","assets/Presenter.1ea605f8.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.0d86440d.js"]),beforeEnter:e=>{if(!Nt.remote||Nt.remote===e.query.password)return!0;if(Nt.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Nt.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],ze=M1({history:V_("/TPSI/4/css/"),routes:QP});function ZP(e,t,{mode:o="replace"}={}){return R({get(){const a=ze.currentRoute.value.query[e];return a==null?t!=null?t:null:Array.isArray(a)?a.filter(Boolean):a},set(a){Xn(()=>{ze[C(o)]({query:{...ze.currentRoute.value.query,[e]:a}})})}})}const ud=Q(0);Xn(()=>{ze.afterEach(async()=>{await Xn(),ud.value+=1})});const ct=R(()=>ze.currentRoute.value),Wl=R(()=>ct.value.query.print!==void 0),JP=R(()=>ct.value.query.print==="clicks"),st=R(()=>ct.value.query.embedded!==void 0),Ge=R(()=>ct.value.path.startsWith("/presenter")),co=R(()=>Wl.value&&!JP.value),Ji=R(()=>ct.value.query.password),XP=R(()=>!Ge.value&&(!Cn.remote||Ji.value===Cn.remote)),Bc=ZP("clicks","0"),dd=R(()=>Gn.length-1),nO=R(()=>ct.value.path),Yn=R(()=>parseInt(nO.value.split(/\//g).slice(-1)[0])||1);R(()=>Va(Yn.value));const be=R(()=>Gn.find(e=>e.path===`${Yn.value}`));R(()=>{var e,t,o;return(o=(t=(e=be.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:o.id});R(()=>{var e,t;return(t=(e=be.value)==null?void 0:e.meta)==null?void 0:t.layout});const ui=R(()=>Gn.find(e=>e.path===`${Math.min(Gn.length,Yn.value+1)}`)),eO=R(()=>{var e,t;return ud.value,((t=(e=be.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ne=R({get(){if(co.value)return 99999;let e=+(Bc.value||0);return isNaN(e)&&(e=0),e},set(e){Bc.value=e.toString()}}),xa=R(()=>{var e,t,o;return+((o=(t=(e=be.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?o:eO.value.length)}),tO=R(()=>Yn.value<Gn.length-1||Ne.value<xa.value),sO=R(()=>Yn.value>1||Ne.value>0),oO=R(()=>Gn.filter(e=>{var t,o;return(o=(t=e.meta)==null?void 0:t.slide)==null?void 0:o.title}).reduce((e,t)=>(Kl(e,t),e),[])),aO=R(()=>Vl(oO.value,be.value));R(()=>Ul(aO.value));function bt(){xa.value<=Ne.value?zo():Ne.value+=1}async function xt(){Ne.value<=0?await $o():Ne.value-=1}function Va(e){return Ge.value?`/presenter/${e}`:`/${e}`}function zo(){const e=Math.min(Gn.length,Yn.value+1);return xs(e)}async function $o(e=!0){const t=Math.max(1,Yn.value-1);await xs(t),e&&xa.value&&ze.replace({query:{...ct.value.query,clicks:xa.value}})}function xs(e,t){return ze.push({path:Va(e),query:{...ct.value.query,clicks:t}})}function iO(e){const t=Q(0),{direction:o,distanceX:a,distanceY:i}=__(e,{onSwipeStart(l){l.pointerType==="touch"&&(xo.value||(t.value=Ni()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||xo.value)return;const r=Math.abs(a.value),c=Math.abs(i.value);r/window.innerWidth>.3||r>100?o.value===it.LEFT?bt():xt():(c/window.innerHeight>.4||c>200)&&(o.value===it.DOWN?$o():zo())}})}async function Xi(){const{saveAs:e}=await $s(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(zu(Cn.download)?Cn.download:Cn.exportFilename?`${Cn.exportFilename}.pdf`:"/TPSI/4/css/slidev-exported.pdf",`${Cn.title}.pdf`)}async function lO(e){var t,o;if(e==null){const a=(o=(t=be.value)==null?void 0:t.meta)==null?void 0:o.slide;if(!(a!=null&&a.filepath))return!1;e=`${a.filepath}:${a.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Kl(e,t,o=1){var i,l,r,c,p;const a=(l=(i=t.meta)==null?void 0:i.slide)==null?void 0:l.level;a&&a>o&&e.length>0?Kl(e[e.length-1].children,t,o+1):e.push({children:[],level:o,path:t.path,hideInToc:Boolean((r=t.meta)==null?void 0:r.hideInToc),title:(p=(c=t.meta)==null?void 0:c.slide)==null?void 0:p.title})}function Vl(e,t,o=!1,a){return e.map(i=>{const l={...i,active:i.path===(t==null?void 0:t.path),hasActiveParent:o};return l.children.length>0&&(l.children=Vl(l.children,t,l.active||l.hasActiveParent,l)),a&&(l.active||l.activeParent)&&(a.activeParent=!0),l})}function Ul(e,t=1){return e.filter(o=>!o.hideInToc).map(o=>({...o,children:Ul(o.children,t+1)}))}function rO(){const e=Cn.titleTemplate.replace("%s",Cn.title||"Slidev");Dg({title:e}),Gg(`${e} - shared`),Jg(`${e} - drawings`);function t(){Ge.value&&(Vr("page",+Yn.value),Vr("clicks",Ne.value))}ze.afterEach(t),gn(Ne,t),Yg(o=>{(+o.page!=+Yn.value||Ne.value!==o.clicks)&&ze.replace({path:Va(o.page),query:{...ze.currentRoute.value.query,clicks:o.clicks||0}})})}const cO=En({__name:"App",setup(e){return x($),rO(),(t,o)=>{const a=Bn("RouterView"),i=Bn("StarportCarrier");return v(),J(Mn,null,[y(a),y(i)],64)}}});function di(e){return e!==null&&typeof e=="object"}function nl(e,t,o=".",a){if(!di(t))return nl(e,{},o,a);const i=Object.assign({},t);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const r=e[l];r!=null&&(a&&a(i,l,r,o)||(Array.isArray(r)&&Array.isArray(i[l])?i[l]=r.concat(i[l]):di(r)&&di(i[l])?i[l]=nl(r,i[l],(o?`${o}.`:"")+l.toString(),a):i[l]=r))}return i}function pO(e){return(...t)=>t.reduce((o,a)=>nl(o,a,"",e),{})}const uO=pO();var qc;const md=typeof window<"u",dO=Object.prototype.toString,mO=e=>typeof e=="number",hO=e=>typeof e=="string",el=e=>dO.call(e)==="[object Object]",Ut=()=>{};md&&((qc=window==null?void 0:window.navigator)==null?void 0:qc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function hd(e){return kl()?(yl(e),!0):!1}function Gl(e){Jt()&&Da(e)}function gO(e,t,o){const a=gn(e,(...i)=>(Xn(()=>a()),t(...i)),o)}function Qt(e){var t;const o=C(e);return(t=o==null?void 0:o.$el)!=null?t:o}const gd=md?window:void 0;function fO(...e){let t,o,a,i;if(hO(e[0])?([o,a,i]=e,t=gd):[t,o,a,i]=e,!t)return Ut;let l=Ut;const r=gn(()=>Qt(t),p=>{l(),p&&(p.addEventListener(o,a,i),l=()=>{p.removeEventListener(o,a,i),l=Ut})},{immediate:!0,flush:"post"}),c=()=>{r(),l()};return hd(c),c}const tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sl="__vueuse_ssr_handlers__";tl[sl]=tl[sl]||{};tl[sl];function _O(e,t,o={}){const{root:a,rootMargin:i="0px",threshold:l=.1,window:r=gd}=o,c=r&&"IntersectionObserver"in r;let p=Ut;const u=c?gn(()=>({el:Qt(e),root:Qt(a)}),({el:h,root:m})=>{if(p(),!h)return;const f=new IntersectionObserver(t,{root:m,rootMargin:i,threshold:l});f.observe(h),p=()=>{f.disconnect(),p=Ut}},{immediate:!0,flush:"post"}):Ut,d=()=>{p(),u()};return hd(d),{isSupported:c,stop:d}}var Wc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Wc||(Wc={}));const fd=1/60*1e3,vO=typeof performance<"u"?()=>performance.now():()=>Date.now(),_d=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(vO()),fd);function kO(e){let t=[],o=[],a=0,i=!1,l=!1;const r=new WeakSet,c={schedule:(p,u=!1,d=!1)=>{const h=d&&i,m=h?t:o;return u&&r.add(p),m.indexOf(p)===-1&&(m.push(p),h&&i&&(a=t.length)),p},cancel:p=>{const u=o.indexOf(p);u!==-1&&o.splice(u,1),r.delete(p)},process:p=>{if(i){l=!0;return}if(i=!0,[t,o]=[o,t],o.length=0,a=t.length,a)for(let u=0;u<a;u++){const d=t[u];d(p),r.has(d)&&(c.schedule(d),e())}i=!1,l&&(l=!1,c.process(p))}};return c}const yO=40;let ol=!0,Co=!1,al=!1;const vs={delta:0,timestamp:0},qo=["read","update","preRender","render","postRender"],Ua=qo.reduce((e,t)=>(e[t]=kO(()=>Co=!0),e),{}),il=qo.reduce((e,t)=>{const o=Ua[t];return e[t]=(a,i=!1,l=!1)=>(Co||SO(),o.schedule(a,i,l)),e},{}),bO=qo.reduce((e,t)=>(e[t]=Ua[t].cancel,e),{});qo.reduce((e,t)=>(e[t]=()=>Ua[t].process(vs),e),{});const xO=e=>Ua[e].process(vs),vd=e=>{Co=!1,vs.delta=ol?fd:Math.max(Math.min(e-vs.timestamp,yO),1),vs.timestamp=e,al=!0,qo.forEach(xO),al=!1,Co&&(ol=!1,_d(vd))},SO=()=>{Co=!0,ol=!0,al||_d(vd)},kd=()=>vs;function yd(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]]);return o}var wO=function(){},Kc=function(){};const ll=(e,t,o)=>Math.min(Math.max(o,e),t),mi=.001,zO=.01,Vc=10,$O=.05,CO=1;function IO({duration:e=800,bounce:t=.25,velocity:o=0,mass:a=1}){let i,l;wO(e<=Vc*1e3);let r=1-t;r=ll($O,CO,r),e=ll(zO,Vc,e/1e3),r<1?(i=u=>{const d=u*r,h=d*e,m=d-o,f=rl(u,r),_=Math.exp(-h);return mi-m/f*_},l=u=>{const h=u*r*e,m=h*o+o,f=Math.pow(r,2)*Math.pow(u,2)*e,_=Math.exp(-h),w=rl(Math.pow(u,2),r);return(-i(u)+mi>0?-1:1)*((m-f)*_)/w}):(i=u=>{const d=Math.exp(-u*e),h=(u-o)*e+1;return-mi+d*h},l=u=>{const d=Math.exp(-u*e),h=(o-u)*(e*e);return d*h});const c=5/e,p=EO(i,l,c);if(e=e*1e3,isNaN(p))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(p,2)*a;return{stiffness:u,damping:r*2*Math.sqrt(a*u),duration:e}}}const TO=12;function EO(e,t,o){let a=o;for(let i=1;i<TO;i++)a=a-e(a)/t(a);return a}function rl(e,t){return e*Math.sqrt(1-t*t)}const MO=["duration","bounce"],LO=["stiffness","damping","mass"];function Uc(e,t){return t.some(o=>e[o]!==void 0)}function PO(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Uc(e,LO)&&Uc(e,MO)){const o=IO(e);t=Object.assign(Object.assign(Object.assign({},t),o),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Yl(e){var{from:t=0,to:o=1,restSpeed:a=2,restDelta:i}=e,l=yd(e,["from","to","restSpeed","restDelta"]);const r={done:!1,value:t};let{stiffness:c,damping:p,mass:u,velocity:d,duration:h,isResolvedFromDuration:m}=PO(l),f=Gc,_=Gc;function w(){const S=d?-(d/1e3):0,O=o-t,L=p/(2*Math.sqrt(c*u)),M=Math.sqrt(c/u)/1e3;if(i===void 0&&(i=Math.min(Math.abs(o-t)/100,.4)),L<1){const A=rl(M,L);f=K=>{const q=Math.exp(-L*M*K);return o-q*((S+L*M*O)/A*Math.sin(A*K)+O*Math.cos(A*K))},_=K=>{const q=Math.exp(-L*M*K);return L*M*q*(Math.sin(A*K)*(S+L*M*O)/A+O*Math.cos(A*K))-q*(Math.cos(A*K)*(S+L*M*O)-A*O*Math.sin(A*K))}}else if(L===1)f=A=>o-Math.exp(-M*A)*(O+(S+M*O)*A);else{const A=M*Math.sqrt(L*L-1);f=K=>{const q=Math.exp(-L*M*K),Y=Math.min(A*K,300);return o-q*((S+L*M*O)*Math.sinh(Y)+A*O*Math.cosh(Y))/A}}}return w(),{next:S=>{const O=f(S);if(m)r.done=S>=h;else{const L=_(S)*1e3,M=Math.abs(L)<=a,A=Math.abs(o-O)<=i;r.done=M&&A}return r.value=r.done?o:O,r},flipTarget:()=>{d=-d,[t,o]=[o,t],w()}}}Yl.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Gc=e=>0,bd=(e,t,o)=>{const a=t-e;return a===0?1:(o-e)/a},Ql=(e,t,o)=>-o*e+o*t+e,xd=(e,t)=>o=>Math.max(Math.min(o,t),e),po=e=>e%1?Number(e.toFixed(5)):e,Io=/(-)?([\d]*\.?[\d])+/g,cl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,OO=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Wo(e){return typeof e=="string"}const Ko={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},uo=Object.assign(Object.assign({},Ko),{transform:xd(0,1)}),ea=Object.assign(Object.assign({},Ko),{default:1}),Zl=e=>({test:t=>Wo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Lt=Zl("deg"),mo=Zl("%"),mn=Zl("px"),Yc=Object.assign(Object.assign({},mo),{parse:e=>mo.parse(e)/100,transform:e=>mo.transform(e*100)}),Jl=(e,t)=>o=>Boolean(Wo(o)&&OO.test(o)&&o.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(o,t)),Sd=(e,t,o)=>a=>{if(!Wo(a))return a;const[i,l,r,c]=a.match(Io);return{[e]:parseFloat(i),[t]:parseFloat(l),[o]:parseFloat(r),alpha:c!==void 0?parseFloat(c):1}},Bt={test:Jl("hsl","hue"),parse:Sd("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:o,alpha:a=1})=>"hsla("+Math.round(e)+", "+mo.transform(po(t))+", "+mo.transform(po(o))+", "+po(uo.transform(a))+")"},AO=xd(0,255),hi=Object.assign(Object.assign({},Ko),{transform:e=>Math.round(AO(e))}),_t={test:Jl("rgb","red"),parse:Sd("red","green","blue"),transform:({red:e,green:t,blue:o,alpha:a=1})=>"rgba("+hi.transform(e)+", "+hi.transform(t)+", "+hi.transform(o)+", "+po(uo.transform(a))+")"};function RO(e){let t="",o="",a="",i="";return e.length>5?(t=e.substr(1,2),o=e.substr(3,2),a=e.substr(5,2),i=e.substr(7,2)):(t=e.substr(1,1),o=e.substr(2,1),a=e.substr(3,1),i=e.substr(4,1),t+=t,o+=o,a+=a,i+=i),{red:parseInt(t,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:i?parseInt(i,16)/255:1}}const pl={test:Jl("#"),parse:RO,transform:_t.transform},he={test:e=>_t.test(e)||pl.test(e)||Bt.test(e),parse:e=>_t.test(e)?_t.parse(e):Bt.test(e)?Bt.parse(e):pl.parse(e),transform:e=>Wo(e)?e:e.hasOwnProperty("red")?_t.transform(e):Bt.transform(e)},wd="${c}",zd="${n}";function FO(e){var t,o,a,i;return isNaN(e)&&Wo(e)&&((o=(t=e.match(Io))===null||t===void 0?void 0:t.length)!==null&&o!==void 0?o:0)+((i=(a=e.match(cl))===null||a===void 0?void 0:a.length)!==null&&i!==void 0?i:0)>0}function $d(e){typeof e=="number"&&(e=`${e}`);const t=[];let o=0;const a=e.match(cl);a&&(o=a.length,e=e.replace(cl,wd),t.push(...a.map(he.parse)));const i=e.match(Io);return i&&(e=e.replace(Io,zd),t.push(...i.map(Ko.parse))),{values:t,numColors:o,tokenised:e}}function Cd(e){return $d(e).values}function Id(e){const{values:t,numColors:o,tokenised:a}=$d(e),i=t.length;return l=>{let r=a;for(let c=0;c<i;c++)r=r.replace(c<o?wd:zd,c<o?he.transform(l[c]):po(l[c]));return r}}const DO=e=>typeof e=="number"?0:e;function HO(e){const t=Cd(e);return Id(e)(t.map(DO))}const Vo={test:FO,parse:Cd,createTransformer:Id,getAnimatableNone:HO},NO=new Set(["brightness","contrast","saturate","opacity"]);function jO(e){let[t,o]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=o.match(Io)||[];if(!a)return e;const i=o.replace(a,"");let l=NO.has(t)?1:0;return a!==o&&(l*=100),t+"("+l+i+")"}const BO=/([a-z-]*)\(.*?\)/g,ul=Object.assign(Object.assign({},Vo),{getAnimatableNone:e=>{const t=e.match(BO);return t?t.map(jO).join(" "):e}});function gi(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+(t-e)*6*o:o<1/2?t:o<2/3?e+(t-e)*(2/3-o)*6:e}function Qc({hue:e,saturation:t,lightness:o,alpha:a}){e/=360,t/=100,o/=100;let i=0,l=0,r=0;if(!t)i=l=r=o;else{const c=o<.5?o*(1+t):o+t-o*t,p=2*o-c;i=gi(p,c,e+1/3),l=gi(p,c,e),r=gi(p,c,e-1/3)}return{red:Math.round(i*255),green:Math.round(l*255),blue:Math.round(r*255),alpha:a}}const qO=(e,t,o)=>{const a=e*e,i=t*t;return Math.sqrt(Math.max(0,o*(i-a)+a))},WO=[pl,_t,Bt],Zc=e=>WO.find(t=>t.test(e)),Td=(e,t)=>{let o=Zc(e),a=Zc(t),i=o.parse(e),l=a.parse(t);o===Bt&&(i=Qc(i),o=_t),a===Bt&&(l=Qc(l),a=_t);const r=Object.assign({},i);return c=>{for(const p in r)p!=="alpha"&&(r[p]=qO(i[p],l[p],c));return r.alpha=Ql(i.alpha,l.alpha,c),o.transform(r)}},KO=e=>typeof e=="number",VO=(e,t)=>o=>t(e(o)),Ed=(...e)=>e.reduce(VO);function Md(e,t){return KO(e)?o=>Ql(e,t,o):he.test(e)?Td(e,t):Pd(e,t)}const Ld=(e,t)=>{const o=[...e],a=o.length,i=e.map((l,r)=>Md(l,t[r]));return l=>{for(let r=0;r<a;r++)o[r]=i[r](l);return o}},UO=(e,t)=>{const o=Object.assign(Object.assign({},e),t),a={};for(const i in o)e[i]!==void 0&&t[i]!==void 0&&(a[i]=Md(e[i],t[i]));return i=>{for(const l in a)o[l]=a[l](i);return o}};function Jc(e){const t=Vo.parse(e),o=t.length;let a=0,i=0,l=0;for(let r=0;r<o;r++)a||typeof t[r]=="number"?a++:t[r].hue!==void 0?l++:i++;return{parsed:t,numNumbers:a,numRGB:i,numHSL:l}}const Pd=(e,t)=>{const o=Vo.createTransformer(t),a=Jc(e),i=Jc(t);return a.numHSL===i.numHSL&&a.numRGB===i.numRGB&&a.numNumbers>=i.numNumbers?Ed(Ld(a.parsed,i.parsed),o):r=>`${r>0?t:e}`},GO=(e,t)=>o=>Ql(e,t,o);function YO(e){if(typeof e=="number")return GO;if(typeof e=="string")return he.test(e)?Td:Pd;if(Array.isArray(e))return Ld;if(typeof e=="object")return UO}function QO(e,t,o){const a=[],i=o||YO(e[0]),l=e.length-1;for(let r=0;r<l;r++){let c=i(e[r],e[r+1]);if(t){const p=Array.isArray(t)?t[r]:t;c=Ed(p,c)}a.push(c)}return a}function ZO([e,t],[o]){return a=>o(bd(e,t,a))}function JO(e,t){const o=e.length,a=o-1;return i=>{let l=0,r=!1;if(i<=e[0]?r=!0:i>=e[a]&&(l=a-1,r=!0),!r){let p=1;for(;p<o&&!(e[p]>i||p===a);p++);l=p-1}const c=bd(e[l],e[l+1],i);return t[l](c)}}function Od(e,t,{clamp:o=!0,ease:a,mixer:i}={}){const l=e.length;Kc(l===t.length),Kc(!a||!Array.isArray(a)||a.length===l-1),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const r=QO(t,a,i),c=l===2?ZO(e,r):JO(e,r);return o?p=>c(ll(e[0],e[l-1],p)):c}const Ga=e=>t=>1-e(1-t),Xl=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,XO=e=>t=>Math.pow(t,e),Ad=e=>t=>t*t*((e+1)*t-e),nA=e=>{const t=Ad(e);return o=>(o*=2)<1?.5*t(o):.5*(2-Math.pow(2,-10*(o-1)))},Rd=1.525,eA=4/11,tA=8/11,sA=9/10,Fd=e=>e,nr=XO(2),oA=Ga(nr),Dd=Xl(nr),Hd=e=>1-Math.sin(Math.acos(e)),Nd=Ga(Hd),aA=Xl(Nd),er=Ad(Rd),iA=Ga(er),lA=Xl(er),rA=nA(Rd),cA=4356/361,pA=35442/1805,uA=16061/1805,Sa=e=>{if(e===1||e===0)return e;const t=e*e;return e<eA?7.5625*t:e<tA?9.075*t-9.9*e+3.4:e<sA?cA*t-pA*e+uA:10.8*e*e-20.52*e+10.72},dA=Ga(Sa),mA=e=>e<.5?.5*(1-Sa(1-e*2)):.5*Sa(e*2-1)+.5;function hA(e,t){return e.map(()=>t||Dd).splice(0,e.length-1)}function gA(e){const t=e.length;return e.map((o,a)=>a!==0?a/(t-1):0)}function fA(e,t){return e.map(o=>o*t)}function pa({from:e=0,to:t=1,ease:o,offset:a,duration:i=300}){const l={done:!1,value:e},r=Array.isArray(t)?t:[e,t],c=fA(a&&a.length===r.length?a:gA(r),i);function p(){return Od(c,r,{ease:Array.isArray(o)?o:hA(r,o)})}let u=p();return{next:d=>(l.value=u(d),l.done=d>=i,l),flipTarget:()=>{r.reverse(),u=p()}}}function _A({velocity:e=0,from:t=0,power:o=.8,timeConstant:a=350,restDelta:i=.5,modifyTarget:l}){const r={done:!1,value:t};let c=o*e;const p=t+c,u=l===void 0?p:l(p);return u!==p&&(c=u-t),{next:d=>{const h=-c*Math.exp(-d/a);return r.done=!(h>i||h<-i),r.value=r.done?u:u+h,r},flipTarget:()=>{}}}const Xc={keyframes:pa,spring:Yl,decay:_A};function vA(e){if(Array.isArray(e.to))return pa;if(Xc[e.type])return Xc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?pa:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Yl:pa}function jd(e,t,o=0){return e-t-o}function kA(e,t,o=0,a=!0){return a?jd(t+-e,t,o):t-(e-t)+o}function yA(e,t,o,a){return a?e>=t+o:e<=-o}const bA=e=>{const t=({delta:o})=>e(o);return{start:()=>il.update(t,!0),stop:()=>bO.update(t)}};function Bd(e){var t,o,{from:a,autoplay:i=!0,driver:l=bA,elapsed:r=0,repeat:c=0,repeatType:p="loop",repeatDelay:u=0,onPlay:d,onStop:h,onComplete:m,onRepeat:f,onUpdate:_}=e,w=yd(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:S}=w,O,L=0,M=w.duration,A,K=!1,q=!0,Y;const an=vA(w);!((o=(t=an).needsInterpolation)===null||o===void 0)&&o.call(t,a,S)&&(Y=Od([0,100],[a,S],{clamp:!1}),a=0,S=100);const dn=an(Object.assign(Object.assign({},w),{from:a,to:S}));function bn(){L++,p==="reverse"?(q=L%2===0,r=kA(r,M,u,q)):(r=jd(r,M,u),p==="mirror"&&dn.flipTarget()),K=!1,f&&f()}function wn(){O.stop(),m&&m()}function Nn(te){if(q||(te=-te),r+=te,!K){const Pn=dn.next(Math.max(0,r));A=Pn.value,Y&&(A=Y(A)),K=q?Pn.done:r<=0}_==null||_(A),K&&(L===0&&(M!=null||(M=r)),L<c?yA(r,M,u,q)&&bn():wn())}function Vn(){d==null||d(),O=l(Nn),O.start()}return i&&Vn(),{stop:()=>{h==null||h(),O.stop()}}}function qd(e,t){return t?e*(1e3/t):0}function xA({from:e=0,velocity:t=0,min:o,max:a,power:i=.8,timeConstant:l=750,bounceStiffness:r=500,bounceDamping:c=10,restDelta:p=1,modifyTarget:u,driver:d,onUpdate:h,onComplete:m,onStop:f}){let _;function w(M){return o!==void 0&&M<o||a!==void 0&&M>a}function S(M){return o===void 0?a:a===void 0||Math.abs(o-M)<Math.abs(a-M)?o:a}function O(M){_==null||_.stop(),_=Bd(Object.assign(Object.assign({},M),{driver:d,onUpdate:A=>{var K;h==null||h(A),(K=M.onUpdate)===null||K===void 0||K.call(M,A)},onComplete:m,onStop:f}))}function L(M){O(Object.assign({type:"spring",stiffness:r,damping:c,restDelta:p},M))}if(w(e))L({from:e,velocity:t,to:S(e)});else{let M=i*t+e;typeof u<"u"&&(M=u(M));const A=S(M),K=A===o?-1:1;let q,Y;const an=dn=>{q=Y,Y=dn,t=qd(dn-q,kd().delta),(K===1&&dn>A||K===-1&&dn<A)&&L({from:dn,to:A,velocity:t})};O({type:"decay",from:e,velocity:t,timeConstant:l,power:i,restDelta:p,modifyTarget:u,onUpdate:w(M)?an:void 0})}return{stop:()=>_==null?void 0:_.stop()}}const Wd=(e,t)=>1-3*t+3*e,Kd=(e,t)=>3*t-6*e,Vd=e=>3*e,wa=(e,t,o)=>((Wd(t,o)*e+Kd(t,o))*e+Vd(t))*e,Ud=(e,t,o)=>3*Wd(t,o)*e*e+2*Kd(t,o)*e+Vd(t),SA=1e-7,wA=10;function zA(e,t,o,a,i){let l,r,c=0;do r=t+(o-t)/2,l=wa(r,a,i)-e,l>0?o=r:t=r;while(Math.abs(l)>SA&&++c<wA);return r}const $A=8,CA=.001;function IA(e,t,o,a){for(let i=0;i<$A;++i){const l=Ud(t,o,a);if(l===0)return t;t-=(wa(t,o,a)-e)/l}return t}const ua=11,ta=1/(ua-1);function TA(e,t,o,a){if(e===t&&o===a)return Fd;const i=new Float32Array(ua);for(let r=0;r<ua;++r)i[r]=wa(r*ta,e,o);function l(r){let c=0,p=1;const u=ua-1;for(;p!==u&&i[p]<=r;++p)c+=ta;--p;const d=(r-i[p])/(i[p+1]-i[p]),h=c+d*ta,m=Ud(h,e,o);return m>=CA?IA(r,h,e,o):m===0?h:zA(r,c,c+ta,e,o)}return r=>r===0||r===1?r:wa(l(r),t,a)}const fi={};class EA{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,o,a){if(!!this.subscriptions.size)for(const i of this.subscriptions)i(t,o,a)}clear(){this.subscriptions.clear()}}const np=e=>!isNaN(parseFloat(e));class MA{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new EA,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:a,timestamp:i}=kd();this.lastUpdated!==i&&(this.timeDelta=a,this.lastUpdated=i),il.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>il.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=np(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=np(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?qd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(o=>{const{stop:a}=t(o);this.stopAnimation=a}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function LA(e){return new MA(e)}const{isArray:PA}=Array;function OA(){const e=Q({}),t=a=>{const i=l=>{!e.value[l]||(e.value[l].stop(),e.value[l].destroy(),tf(e.value,l))};a?PA(a)?a.forEach(i):i(a):Object.keys(e.value).forEach(i)},o=(a,i,l)=>{if(e.value[a])return e.value[a];const r=LA(i);return r.onChange(c=>{ge(l,a,c)}),ge(e.value,a,r),r};return Gl(t),{motionValues:e,get:o,stop:t}}const AA=e=>Array.isArray(e),Pt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),_i=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),RA=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),vi=()=>({type:"keyframes",ease:"linear",duration:300}),FA=e=>({type:"keyframes",duration:800,values:e}),ep={default:RA,x:Pt,y:Pt,z:Pt,rotate:Pt,rotateX:Pt,rotateY:Pt,rotateZ:Pt,scaleX:_i,scaleY:_i,scale:_i,backgroundColor:vi,color:vi,opacity:vi},Gd=(e,t)=>{let o;return AA(t)?o=FA:o=ep[e]||ep.default,{to:t,...o(t)}},tp={...Ko,transform:Math.round},Yd={color:he,backgroundColor:he,outlineColor:he,fill:he,stroke:he,borderColor:he,borderTopColor:he,borderRightColor:he,borderBottomColor:he,borderLeftColor:he,borderWidth:mn,borderTopWidth:mn,borderRightWidth:mn,borderBottomWidth:mn,borderLeftWidth:mn,borderRadius:mn,radius:mn,borderTopLeftRadius:mn,borderTopRightRadius:mn,borderBottomRightRadius:mn,borderBottomLeftRadius:mn,width:mn,maxWidth:mn,height:mn,maxHeight:mn,size:mn,top:mn,right:mn,bottom:mn,left:mn,padding:mn,paddingTop:mn,paddingRight:mn,paddingBottom:mn,paddingLeft:mn,margin:mn,marginTop:mn,marginRight:mn,marginBottom:mn,marginLeft:mn,rotate:Lt,rotateX:Lt,rotateY:Lt,rotateZ:Lt,scale:ea,scaleX:ea,scaleY:ea,scaleZ:ea,skew:Lt,skewX:Lt,skewY:Lt,distance:mn,translateX:mn,translateY:mn,translateZ:mn,x:mn,y:mn,z:mn,perspective:mn,transformPerspective:mn,opacity:uo,originX:Yc,originY:Yc,originZ:mn,zIndex:tp,filter:ul,WebkitFilter:ul,fillOpacity:uo,strokeOpacity:uo,numOctaves:tp},tr=e=>Yd[e],Qd=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function DA(e,t){let o=tr(e);return o!==ul&&(o=Vo),o.getAnimatableNone?o.getAnimatableNone(t):void 0}const HA={linear:Fd,easeIn:nr,easeInOut:Dd,easeOut:oA,circIn:Hd,circInOut:aA,circOut:Nd,backIn:er,backInOut:lA,backOut:iA,anticipate:rA,bounceIn:dA,bounceInOut:mA,bounceOut:Sa},sp=e=>{if(Array.isArray(e)){const[t,o,a,i]=e;return TA(t,o,a,i)}else if(typeof e=="string")return HA[e];return e},NA=e=>Array.isArray(e)&&typeof e[0]!="number",op=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Vo.test(t)&&!t.startsWith("url("));function jA(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function BA({ease:e,times:t,delay:o,...a}){const i={...a};return t&&(i.offset=t),e&&(i.ease=NA(e)?e.map(sp):sp(e)),o&&(i.elapsed=-o),i}function qA(e,t,o){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),jA(t),WA(e)||(e={...e,...Gd(o,t.to)}),{...t,...BA(e)}}function WA({delay:e,repeat:t,repeatType:o,repeatDelay:a,from:i,...l}){return!!Object.keys(l).length}function KA(e,t){return e[t]||e.default||e}function VA(e,t,o,a,i){const l=KA(a,e);let r=l.from===null||l.from===void 0?t.get():l.from;const c=op(e,o);r==="none"&&c&&typeof o=="string"&&(r=DA(e,o));const p=op(e,r);function u(h){const m={from:r,to:o,velocity:a.velocity?a.velocity:t.getVelocity(),onUpdate:f=>t.set(f)};return l.type==="inertia"||l.type==="decay"?xA({...m,...l}):Bd({...qA(l,m,e),onUpdate:f=>{m.onUpdate(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{a.onComplete&&a.onComplete(),i&&i(),h&&h()}})}function d(h){return t.set(o),a.onComplete&&a.onComplete(),i&&i(),h&&h(),{stop:()=>{}}}return!p||!c||l.type===!1?d:u}function UA(){const{motionValues:e,stop:t,get:o}=OA();return{motionValues:e,stop:t,push:(i,l,r,c={},p)=>{const u=r[i],d=o(i,u,r);if(c&&c.immediate){d.set(l);return}const h=VA(i,d,l,c,p);d.start(h)}}}function GA(e,t={},{motionValues:o,push:a,stop:i}=UA()){const l=C(t),r=Q(!1),c=gn(o,m=>{r.value=Object.values(m).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0}),p=m=>{if(!l||!l[m])throw new Error(`The variant ${m} does not exist.`);return l[m]},u=m=>(typeof m=="string"&&(m=p(m)),Promise.all(Object.entries(m).map(([f,_])=>{if(f!=="transition")return new Promise(w=>{a(f,_,e,m.transition||Gd(f,m[f]),w)})}).filter(Boolean)));return{isAnimating:r,apply:u,set:m=>{const f=el(m)?m:p(m);Object.entries(f).forEach(([_,w])=>{_!=="transition"&&a(_,w,e,{immediate:!0})})},stopTransitions:()=>{c(),i()},leave:async m=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){m();return}await u(f),m()}}}const sr=typeof window<"u",YA=()=>sr&&window.onpointerdown===null,QA=()=>sr&&window.ontouchstart===null,ZA=()=>sr&&window.onmousedown===null;function JA({target:e,state:t,variants:o,apply:a}){const i=C(o),l=[],r=(..._)=>{const w=fO.apply(null,_);return l.push(w),w},c=Q(!1),p=Q(!1),u=Q(!1),d=R(()=>{let _=[];return i&&(i.hovered&&(_=[..._,...Object.keys(i.hovered)]),i.tapped&&(_=[..._,...Object.keys(i.tapped)]),i.focused&&(_=[..._,...Object.keys(i.focused)])),_}),h=R(()=>{const _={};Object.assign(_,t.value),c.value&&i.hovered&&Object.assign(_,i.hovered),p.value&&i.tapped&&Object.assign(_,i.tapped),u.value&&i.focused&&Object.assign(_,i.focused);for(const w in _)d.value.includes(w)||delete _[w];return _});i.hovered&&(r(e,"mouseenter",()=>{c.value=!0}),r(e,"mouseleave",()=>{c.value=!1,p.value=!1}),r(e,"mouseout",()=>{c.value=!1,p.value=!1})),i.tapped&&(ZA()&&(r(e,"mousedown",()=>{p.value=!0}),r(e,"mouseup",()=>{p.value=!1})),YA()&&(r(e,"pointerdown",()=>{p.value=!0}),r(e,"pointerup",()=>{p.value=!1})),QA()&&(r(e,"touchstart",()=>{p.value=!0}),r(e,"touchend",()=>{p.value=!1}))),i.focused&&(r(e,"focus",()=>{u.value=!0}),r(e,"blur",()=>{u.value=!1}));const m=gn(h,a);return{stop:()=>{l.forEach(_=>_()),m()}}}function XA({set:e,target:t,variants:o,variant:a}){const i=C(o);return{stop:gn(()=>t,()=>{!i||(i.initial&&e("initial"),i.enter&&(a.value="enter"))},{immediate:!0,flush:"pre"})}}function n7({state:e,apply:t}){return{stop:gn(e,a=>{a&&t(a)},{immediate:!0})}}function e7({target:e,variants:t,variant:o}){const a=C(t);let i=Ut;if(a&&(a.visible||a.visibleOnce)){const{stop:l}=_O(e,([{isIntersecting:r}])=>{a.visible?r?o.value="visible":o.value="initial":a.visibleOnce&&(r?o.value!=="visibleOnce"&&(o.value="visibleOnce"):o.value||(o.value="initial"))});i=l}return{stop:i}}function t7(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const o=Q([]);if(t.lifeCycleHooks){const{stop:i}=XA(e);o.value.push(i)}if(t.syncVariants){const{stop:i}=n7(e);o.value.push(i)}if(t.visibilityHooks){const{stop:i}=e7(e);o.value.push(i)}if(t.eventListeners){const{stop:i}=JA(e);o.value.push(i)}const a=()=>o.value.forEach(i=>i());return Gl(a),{stop:a}}function Zd(e={}){const t=jn({...e}),o=Q({});return gn(t,()=>{const a={};for(const[i,l]of Object.entries(t)){const r=tr(i),c=Qd(l,r);a[i]=c}o.value=a},{immediate:!0,deep:!0}),{state:t,style:o}}const s7=["","X","Y","Z"],o7=["perspective","translate","scale","rotate","skew"],Jd=["transformPerspective","x","y","z"];o7.forEach(e=>{s7.forEach(t=>{const o=e+t;Jd.push(o)})});const a7=new Set(Jd);function or(e){return a7.has(e)}const i7=new Set(["originX","originY","originZ"]);function Xd(e){return i7.has(e)}function l7(e){const t={},o={};return Object.entries(e).forEach(([a,i])=>{or(a)||Xd(a)?t[a]=i:o[a]=i}),{transform:t,style:o}}function r7(e,t){let o,a;const{state:i,style:l}=Zd(),r=gn(()=>Qt(e),u=>{if(!!u){a=u;for(const d of Object.keys(Yd))u.style[d]===null||u.style[d]===""||or(d)||Xd(d)||ge(i,d,u.style[d]);o&&Object.entries(o).forEach(([d,h])=>ge(u.style,d,h)),t&&t(i)}},{immediate:!0}),c=gn(l,u=>{if(!a){o=u;return}for(const d in u)ge(a.style,d,u[d])},{immediate:!0});return{style:i,stop:()=>{a=void 0,o=void 0,r(),c()}}}const c7={x:"translateX",y:"translateY",z:"translateZ"};function nm(e={},t=!0){const o=jn({...e}),a=Q("");return gn(o,i=>{let l="",r=!1;t&&(i.x||i.y||i.z)&&(l+=`translate3d(${[i.x||0,i.y||0,i.z||0].map(mn.transform).join(",")}) `,r=!0);for(const[c,p]of Object.entries(i)){if(t&&(c==="x"||c==="y"||c==="z"))continue;const u=tr(c),d=Qd(p,u);l+=`${c7[c]||c}(${d}) `}t&&!r&&(l+="translateZ(0px) "),a.value=l.trim()},{immediate:!0,deep:!0}),{state:o,transform:a}}function p7(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const o=a=>a.endsWith("px")||a.endsWith("deg")?parseFloat(a):isNaN(Number(a))?Number(a):a;return t.reduce((a,i)=>{if(!i)return a;const[l,r]=i.split("("),p=r.split(",").map(d=>o(d.endsWith(")")?d.replace(")",""):d.trim())),u=p.length===1?p[0]:p;return{...a,[l]:u}},{})}function u7(e,t){Object.entries(p7(t)).forEach(([o,a])=>{a=parseFloat(a);const i=["x","y","z"];if(o==="translate3d"){if(a===0){i.forEach(l=>{ge(e,l,0)});return}a.forEach((l,r)=>{ge(e,i[r],l)});return}if(o==="translateX"){ge(e,"x",a);return}if(o==="translateY"){ge(e,"y",a);return}if(o==="translateZ"){ge(e,"z",a);return}ge(e,o,a)})}function d7(e,t){let o,a;const{state:i,transform:l}=nm(),r=gn(()=>Qt(e),u=>{!u||(a=u,u.style.transform&&u7(i,u.style.transform),o&&(u.style.transform=o),t&&t(i))},{immediate:!0}),c=gn(l,u=>{if(!a){o=u;return}a.style.transform=u},{immediate:!0});return{transform:i,stop:()=>{o=void 0,a=void 0,r(),c()}}}function m7(e,t){const o=jn({}),a=h=>{Object.entries(h).forEach(([m,f])=>{ge(o,m,f)})},{style:i,stop:l}=r7(e,a),{transform:r,stop:c}=d7(e,a),p=gn(o,h=>{Object.entries(h).forEach(([m,f])=>{const _=or(m)?r:i;_[m]&&_[m]===f||ge(_,m,f)})},{immediate:!0,deep:!0}),u=gn(()=>Qt(e),h=>{!h||t&&a(t)},{immediate:!0});return{motionProperties:o,style:i,transform:r,stop:()=>{l(),c(),p(),u()}}}function h7(e={}){const t=C(e),o=Q();return{state:R(()=>{if(!!o.value)return t[o.value]}),variant:o}}function g7(e,t={},o){const{motionProperties:a,stop:i}=m7(e),{variant:l,state:r}=h7(t),c=GA(a,t),p={target:e,variant:l,variants:t,state:r,motionProperties:a,...c,stop:(d=!1)=>{}},{stop:u}=t7(p,o);return p.stop=(d=!1)=>{const h=()=>{p.stopTransitions(),i(),u()};if(!d&&t.value&&t.value.leave){const m=gn(p.isAnimating,f=>{f||(m(),h())})}else h()},Gl(()=>p.stop()),gO(()=>Qt(e),d=>{!d||d!=null&&d.motionInstance&&(p.stop(),Object.assign(p,d.motionInstance))}),p}const f7=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],_7=(e,t)=>{const o=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};o&&(o.variants&&el(o.variants)&&(t.value={...t.value,...o.variants}),f7.forEach(a=>{if(a==="delay"){if(o&&o[a]&&mO(o[a])){const i=o[a];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={...t.value.enter.transition,delay:i}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={...t.value.visible.transition,delay:i}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={...t.value.visibleOnce.transition,delay:i}))}return}a==="visible-once"&&(a="visibleOnce"),o&&o[a]&&el(o[a])&&(t.value[a]=o[a])}))},ki=e=>{const t=(a,i,l)=>{const r=i.value&&typeof i.value=="string"?i.value:l.key;r&&fi[r]&&fi[r].stop();const c=Q(e||{});typeof i.value=="object"&&(c.value=i.value),_7(l,c);const p=g7(a,c);a.motionInstance=p,r&&ge(fi,r,p)},o=a=>{a.motionInstance&&a.motionInstance.stop()};return{created:t,unmounted:o,bind:t,unbind:o,getSSRProps(a,i){const{initial:l}=a.value||i&&i.props||{},r=uO((e==null?void 0:e.initial)||{},l||{});if(!r||Object.keys(r).length===0)return;const{transform:c,style:p}=l7(r),{transform:u}=nm(c),{style:d}=Zd(p);return u.value&&(d.value.transform=u.value),{style:d.value}}}},v7={initial:{opacity:0},enter:{opacity:1}},k7={initial:{opacity:0},visible:{opacity:1}},y7={initial:{opacity:0},visibleOnce:{opacity:1}},b7={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},x7={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},S7={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},w7={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},z7={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},$7={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},C7={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},I7={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},T7={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},E7={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},M7={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},L7={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},P7={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},O7={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},A7={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},R7={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},F7={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},D7={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},H7={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},N7={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},j7={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},B7={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},q7={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},W7={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},K7={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},V7={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},U7={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ap={__proto__:null,fade:v7,fadeVisible:k7,fadeVisibleOnce:y7,pop:b7,popVisible:x7,popVisibleOnce:S7,rollBottom:P7,rollLeft:w7,rollRight:C7,rollTop:E7,rollVisibleBottom:O7,rollVisibleLeft:z7,rollVisibleRight:I7,rollVisibleTop:M7,rollVisibleOnceBottom:A7,rollVisibleOnceLeft:$7,rollVisibleOnceRight:T7,rollVisibleOnceTop:L7,slideBottom:K7,slideLeft:R7,slideRight:H7,slideTop:B7,slideVisibleBottom:V7,slideVisibleLeft:F7,slideVisibleRight:N7,slideVisibleTop:q7,slideVisibleOnceBottom:U7,slideVisibleOnceLeft:D7,slideVisibleOnceRight:j7,slideVisibleOnceTop:W7};function G7(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",a=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(a,i=>o.charAt(t.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Y7={install(e,t){if(e.directive("motion",ki()),!t||t&&!t.excludePresets)for(const o in ap){const a=ap[o];e.directive(`motion-${G7(o)}`,ki(a))}if(t&&t.directives)for(const o in t.directives){const a=t.directives[o];a.initial,e.directive(`motion-${o}`,ki(a))}}};var ip;const ho=typeof window<"u",Q7=Object.prototype.toString,Z7=e=>Q7.call(e)==="[object Object]";ho&&((ip=window==null?void 0:window.navigator)==null?void 0:ip.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function J7(e){return kl()?(yl(e),!0):!1}function X7(e){var t;const o=C(e);return(t=o==null?void 0:o.$el)!=null?t:o}const n9=ho?window:void 0,dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ml="__vueuse_ssr_handlers__";dl[ml]=dl[ml]||{};dl[ml];function e9(e,t={}){const{immediate:o=!0,window:a=n9}=t,i=Q(!1);let l=null;function r(){!i.value||!a||(e(),l=a.requestAnimationFrame(r))}function c(){!i.value&&a&&(i.value=!0,r())}function p(){i.value=!1,l!=null&&a&&(a.cancelAnimationFrame(l),l=null)}return o&&c(),J7(p),{isActive:i,pause:p,resume:c}}var lp;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(lp||(lp={}));const ar="vue-starport-injection",em="vue-starport-options",t9={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},tm={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var s9=Object.defineProperty,za=Object.getOwnPropertySymbols,sm=Object.prototype.hasOwnProperty,om=Object.prototype.propertyIsEnumerable,rp=(e,t,o)=>t in e?s9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,o9=(e,t)=>{for(var o in t||(t={}))sm.call(t,o)&&rp(e,o,t[o]);if(za)for(var o of za(t))om.call(t,o)&&rp(e,o,t[o]);return e},cp=(e,t)=>{var o={};for(var a in e)sm.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&za)for(var a of za(e))t.indexOf(a)<0&&om.call(e,a)&&(o[a]=e[a]);return o};const a9=En({name:"StarportProxy",props:o9({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},tm),setup(e,t){const o=x(ar),a=R(()=>o.getInstance(e.port,e.component)),i=Q(),l=a.value.generateId(),r=Q(!1);return a.value.isVisible||(a.value.land(),r.value=!0),zs(async()=>{a.value.el||(a.value.el=i.value,await Xn(),r.value=!0,a.value.rect.update())}),Fa(async()=>{a.value.rect.update(),a.value.liftOff(),a.value.el=void 0,r.value=!1,!a.value.options.keepAlive&&(await Xn(),await Xn(),!a.value.el&&o.dispose(a.value.port))}),gn(()=>e,async()=>{a.value.props&&await Xn();const c=e,{props:p}=c,u=cp(c,["props"]);a.value.props=p||{},a.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const c=e,{initialProps:p,mountedProps:u}=c,d=cp(c,["initialProps","mountedProps"]),h=B(d,(r.value?u:p)||{});return fe("div",B(h,{id:l,ref:i,"data-starport-proxy":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true"}),t.slots.default?fe(t.slots.default):void 0)}}});var i9=Object.defineProperty,l9=Object.defineProperties,r9=Object.getOwnPropertyDescriptors,pp=Object.getOwnPropertySymbols,c9=Object.prototype.hasOwnProperty,p9=Object.prototype.propertyIsEnumerable,up=(e,t,o)=>t in e?i9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u9=(e,t)=>{for(var o in t||(t={}))c9.call(t,o)&&up(e,o,t[o]);if(pp)for(var o of pp(t))p9.call(t,o)&&up(e,o,t[o]);return e},d9=(e,t)=>l9(e,r9(t));const m9=En({name:"Starport",inheritAttrs:!0,props:tm,setup(e,t){const o=Q(!1);return zs(()=>{o.value=!0}),()=>{var r,c;const a=(c=(r=t.slots).default)==null?void 0:c.call(r);if(!a)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(a.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${a.length}`);const i=a[0];let l=i.type;return(!Z7(l)||Gt(l))&&(l={render(){return a}}),fe(a9,d9(u9({},e),{key:e.port,component:Ma(l),props:i.props}))}}});function h9(e){const t=jn({height:0,width:0,left:0,top:0,update:a,listen:l,pause:r,margin:"0px",padding:"0px"}),o=ho?document.documentElement||document.body:void 0;function a(){if(!ho)return;const c=X7(e);if(!c)return;const{height:p,width:u,left:d,top:h}=c.getBoundingClientRect(),m=window.getComputedStyle(c),f=m.margin,_=m.padding;Object.assign(t,{height:p,width:u,left:d,top:o.scrollTop+h,margin:f,padding:_})}const i=e9(a,{immediate:!1});function l(){!ho||(a(),i.resume())}function r(){i.pause()}return t}let g9=(e,t=21)=>(o=t)=>{let a="",i=o;for(;i--;)a+=e[Math.random()*e.length|0];return a};const dp=g9("abcdefghijklmnopqrstuvwxyz",5);function mp(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function f9(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var _9=Object.defineProperty,hp=Object.getOwnPropertySymbols,v9=Object.prototype.hasOwnProperty,k9=Object.prototype.propertyIsEnumerable,gp=(e,t,o)=>t in e?_9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,yi=(e,t)=>{for(var o in t||(t={}))v9.call(t,o)&&gp(e,o,t[o]);if(hp)for(var o of hp(t))k9.call(t,o)&&gp(e,o,t[o]);return e};function y9(e,t,o={}){const a=f9(t),i=mp(a)||dp(),l=Q(),r=Q(null),c=Q(!1),p=Q(!1),u=_m(!0),d=Q({}),h=R(()=>yi(yi(yi({},t9),o),d.value)),m=Q(0);let f;u.run(()=>{f=h9(l),gn(l,async O=>{O&&(p.value=!0),await Xn(),l.value||(p.value=!1)})});const _=mp(e);function w(){return`starport-${i}-${_}-${dp()}`}const S=w();return jn({el:l,id:S,port:e,props:r,rect:f,scope:u,isLanded:c,isVisible:p,options:h,liftOffTime:m,component:t,componentName:a,componentId:i,generateId:w,setLocalOptions(O={}){d.value=JSON.parse(JSON.stringify(O))},elRef(){return l},liftOff(){!c.value||(c.value=!1,m.value=Date.now(),f.listen())},land(){c.value||(c.value=!0,f.pause())}})}function b9(e){const t=jn(new Map);function o(i,l){let r=t.get(i);return r||(r=y9(i,l,e),t.set(i,r)),r.component=l,r}function a(i){var l;(l=t.get(i))==null||l.scope.stop(),t.delete(i)}return{portMap:t,dispose:a,getInstance:o}}var x9=Object.defineProperty,S9=Object.defineProperties,w9=Object.getOwnPropertyDescriptors,fp=Object.getOwnPropertySymbols,z9=Object.prototype.hasOwnProperty,$9=Object.prototype.propertyIsEnumerable,_p=(e,t,o)=>t in e?x9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,C9=(e,t)=>{for(var o in t||(t={}))z9.call(t,o)&&_p(e,o,t[o]);if(fp)for(var o of fp(t))$9.call(t,o)&&_p(e,o,t[o]);return e},I9=(e,t)=>S9(e,w9(t));const T9=En({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=x(ar);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=R(()=>t.getInstance(e.port,e.component)),a=R(()=>{var r;return((r=o.value.el)==null?void 0:r.id)||o.value.id}),i=R(()=>{const r=Date.now()-o.value.liftOffTime,c=Math.max(0,o.value.options.duration-r),p=o.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!o.value.isVisible||!o.value.el?I9(C9({},u),{zIndex:-1,display:"none"}):(o.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:o.value.options.easing}),u)}),l={};return()=>{const r=!!(o.value.isLanded&&o.value.el);return fe("div",{style:i.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},fe(Bh,{to:r?`#${a.value}`:"body",disabled:!r},fe(o.value.component,B(l,o.value.props))))}}}),E9=En({name:"StarportCarrier",setup(e,{slots:t}){const o=b9(x(em,{}));return Jt().appContext.app.provide(ar,o),()=>{var i;return[(i=t.default)==null?void 0:i.call(t),Array.from(o.portMap.entries()).map(([l,{component:r}])=>fe(T9,{key:l,port:l,component:r}))]}}});function M9(e={}){return{install(t){t.provide(em,e),t.component("Starport",m9),t.component("StarportCarrier",E9)}}}function L9(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(Y7),e.app.use(M9({keepAlive:!0}))}function ve(e,t,o){var a,i;return(i=((a=e.instance)==null?void 0:a.$).provides[t])!=null?i:o}function P9(){return{install(e){e.directive("click",{name:"v-click",mounted(t,o){var d,h,m,f;if(co.value||((d=ve(o,ao))==null?void 0:d.value))return;const a=ve(o,Ft),i=ve(o,oo),l=ve(o,Di),r=o.modifiers.hide!==!1&&o.modifiers.hide!=null,c=o.modifiers.fade!==!1&&o.modifiers.fade!=null,p=((h=a==null?void 0:a.value)==null?void 0:h.length)||0,u=c?jg:ti;if(a&&!((m=a==null?void 0:a.value)!=null&&m.includes(t))&&a.value.push(t),o.value===null&&(o.value=a==null?void 0:a.value.length),!(l!=null&&l.value.has(o.value)))l==null||l.value.set(o.value,[t]);else if(!((f=l==null?void 0:l.value.get(o.value))!=null&&f.includes(t))){const _=(l==null?void 0:l.value.get(o.value))||[];l==null||l.value.set(o.value,[t].concat(_))}t==null||t.classList.toggle(At,!0),i&&gn(i,()=>{var O;const _=(O=i==null?void 0:i.value)!=null?O:0,w=o.value!=null?_>=o.value:_>p;t.classList.contains(si)||t.classList.toggle(u,!w),r!==!1&&r!==void 0&&t.classList.toggle(u,w),t.classList.toggle(Ks,!1);const S=l==null?void 0:l.value.get(_);S==null||S.forEach((L,M)=>{L.classList.toggle(Xo,!1),M===S.length-1?L.classList.toggle(Ks,!0):L.classList.toggle(Xo,!0)}),t.classList.contains(Ks)||t.classList.toggle(Xo,w)},{immediate:!0})},unmounted(t,o){t==null||t.classList.toggle(At,!1);const a=ve(o,Ft);a!=null&&a.value&&Hi(a.value,t)}}),e.directive("after",{name:"v-after",mounted(t,o){var c,p;if(co.value||((c=ve(o,ao))==null?void 0:c.value))return;const a=ve(o,Ft),i=ve(o,oo),l=ve(o,Di),r=a==null?void 0:a.value.length;o.value===void 0&&(o.value=a==null?void 0:a.value.length),l!=null&&l.value.has(o.value)?(p=l==null?void 0:l.value.get(o.value))==null||p.push(t):l==null||l.value.set(o.value,[t]),t==null||t.classList.toggle(At,!0),i&&gn(i,()=>{var d,h,m;const u=((d=i.value)!=null?d:0)>=((m=(h=o.value)!=null?h:r)!=null?m:0);t.classList.contains(si)||t.classList.toggle(ti,!u),t.classList.toggle(Ks,!1),t.classList.contains(Ks)||t.classList.toggle(Xo,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(At,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,o){var r,c,p;if(co.value||((r=ve(o,ao))==null?void 0:r.value))return;const a=ve(o,Ft),i=ve(o,oo),l=((c=a==null?void 0:a.value)==null?void 0:c.length)||0;a&&!((p=a==null?void 0:a.value)!=null&&p.includes(t))&&a.value.push(t),t==null||t.classList.toggle(At,!0),i&&gn(i,()=>{var h;const u=(h=i==null?void 0:i.value)!=null?h:0,d=o.value!=null?u>=o.value:u>l;t.classList.toggle(ti,d),t.classList.toggle(si,d)},{immediate:!0})},unmounted(t,o){t==null||t.classList.toggle(At,!1);const a=ve(o,Ft);a!=null&&a.value&&Hi(a.value,t)}})}}}function O9(e,t){const o=sd(e),a=od(t,o.currentRoute,o.currentPage);return{nav:{...o,...a,downloadPDF:Xi,next:bt,nextSlide:zo,openInEditor:lO,prev:xt,prevSlide:$o},configs:Cn,themeConfigs:R(()=>Cn.themeConfig)}}function A9(){return{install(e){const t=O9(ct,Ne);e.provide($,jn(t))}}}const js=Sg(cO);js.use(ze);js.use(Rg());js.use(P9());js.use(A9());L9({app:js,router:ze});js.mount("#app");export{Qs as $,U as A,Tn as B,re as C,Av as D,kn as E,Mn as F,yn as G,Ne as H,xa as I,tO as J,ui as K,oi as L,xo as M,ci as N,xu as O,W0 as P,Nl as Q,R0 as R,jl as S,Yn as T,dd as U,Wv as V,vn as W,We as X,R9 as Y,Je as Z,Ju as _,n as a,na as a0,Eo as a1,jt as a2,Qe as a3,Yi as a4,dv as a5,mv as a6,hv as a7,fv as a8,Ha as a9,_u as aa,N9 as ab,pe as ac,wk as ad,yu as ae,_v as af,Fa as ag,Lv as ah,R as b,J as c,En as d,$ as e,be as f,z as g,C as h,x as i,zv as j,iO as k,Cn as l,Dg as m,Wn as n,v as o,zs as p,jn as q,Q as r,F9 as s,Ee as t,D9 as u,H9 as v,gn as w,y as x,ae as y,g as z};
