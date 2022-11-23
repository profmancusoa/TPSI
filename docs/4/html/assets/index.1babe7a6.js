(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}})();function $i(e,t){const s=Object.create(null),o=e.split(",");for(let i=0;i<o.length;i++)s[o[i]]=!0;return t?i=>!!s[i.toLowerCase()]:i=>!!s[i]}const gd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hd=$i(gd);function Ac(e){return!!e||e===""}function Jn(e){if(rn(e)){const t={};for(let s=0;s<e.length;s++){const o=e[s],i=qn(o)?vd(o):Jn(o);if(i)for(const l in i)t[l]=i[l]}return t}else{if(qn(e))return e;if(Un(e))return e}}const _d=/;(?![^(]*\))/g,kd=/:(.+)/;function vd(e){const t={};return e.split(_d).forEach(s=>{if(s){const o=s.split(kd);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Nn(e){let t="";if(qn(e))t=e;else if(rn(e))for(let s=0;s<e.length;s++){const o=Nn(e[s]);o&&(t+=o+" ")}else if(Un(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function O(e){if(!e)return null;let{class:t,style:s}=e;return t&&!qn(t)&&(e.class=Nn(t)),s&&(e.style=Jn(s)),e}const we=e=>qn(e)?e:e==null?"":rn(e)||Un(e)&&(e.toString===Hc||!mn(e.toString))?JSON.stringify(e,Oc,2):String(e),Oc=(e,t)=>t&&t.__v_isRef?Oc(e,t.value):Zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[o,i])=>(s[`${o} =>`]=i,s),{})}:Cc(t)?{[`Set(${t.size})`]:[...t.values()]}:Un(t)&&!rn(t)&&!Rc(t)?String(t):t,Cn={},Yt=[],Se=()=>{},bd=()=>!1,yd=/^on[^a-z]/,qs=e=>yd.test(e),Mi=e=>e.startsWith("onUpdate:"),se=Object.assign,Li=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},wd=Object.prototype.hasOwnProperty,bn=(e,t)=>wd.call(e,t),rn=Array.isArray,Zt=e=>Ws(e)==="[object Map]",Cc=e=>Ws(e)==="[object Set]",mn=e=>typeof e=="function",qn=e=>typeof e=="string",Ei=e=>typeof e=="symbol",Un=e=>e!==null&&typeof e=="object",Pc=e=>Un(e)&&mn(e.then)&&mn(e.catch),Hc=Object.prototype.toString,Ws=e=>Hc.call(e),zd=e=>Ws(e).slice(8,-1),Rc=e=>Ws(e)==="[object Object]",Ii=e=>qn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_s=$i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ds=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},xd=/-(\w)/g,Be=Ds(e=>e.replace(xd,(t,s)=>s?s.toUpperCase():"")),Td=/\B([A-Z])/g,Ht=Ds(e=>e.replace(Td,"-$1").toLowerCase()),js=Ds(e=>e.charAt(0).toUpperCase()+e.slice(1)),io=Ds(e=>e?`on${js(e)}`:""),Wa=(e,t)=>!Object.is(e,t),Jt=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},$s=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},Oo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let wl;const $d=()=>wl||(wl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let de;class Fc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&de&&(this.parent=de,this.index=(de.scopes||(de.scopes=[])).push(this)-1)}run(t){if(this.active){const s=de;try{return de=this,t()}finally{de=s}}}on(){de=this}off(){de=this.parent}stop(t){if(this.active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Md(e){return new Fc(e)}function Ld(e,t=de){t&&t.active&&t.effects.push(e)}function Si(){return de}function Ai(e){de&&de.cleanups.push(e)}const Oi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Nc=e=>(e.w&mt)>0,qc=e=>(e.n&mt)>0,Ed=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=mt},Id=e=>{const{deps:t}=e;if(t.length){let s=0;for(let o=0;o<t.length;o++){const i=t[o];Nc(i)&&!qc(i)?i.delete(e):t[s++]=i,i.w&=~mt,i.n&=~mt}t.length=s}},Co=new WeakMap;let xa=0,mt=1;const Po=30;let Ee;const Et=Symbol(""),Ho=Symbol("");class Ci{constructor(t,s=null,o){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Ld(this,o)}run(){if(!this.active)return this.fn();let t=Ee,s=rt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ee,Ee=this,rt=!0,mt=1<<++xa,xa<=Po?Ed(this):zl(this),this.fn()}finally{xa<=Po&&Id(this),mt=1<<--xa,Ee=this.parent,rt=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ee===this?this.deferStop=!0:this.active&&(zl(this),this.onStop&&this.onStop(),this.active=!1)}}function zl(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let rt=!0;const Wc=[];function ca(){Wc.push(rt),rt=!1}function ua(){const e=Wc.pop();rt=e===void 0?!0:e}function ke(e,t,s){if(rt&&Ee){let o=Co.get(e);o||Co.set(e,o=new Map);let i=o.get(s);i||o.set(s,i=Oi()),Dc(i)}}function Dc(e,t){let s=!1;xa<=Po?qc(e)||(e.n|=mt,s=!Nc(e)):s=!e.has(Ee),s&&(e.add(Ee),Ee.deps.push(e))}function Ze(e,t,s,o,i,l){const r=Co.get(e);if(!r)return;let c=[];if(t==="clear")c=[...r.values()];else if(s==="length"&&rn(e))r.forEach((u,p)=>{(p==="length"||p>=o)&&c.push(u)});else switch(s!==void 0&&c.push(r.get(s)),t){case"add":rn(e)?Ii(s)&&c.push(r.get("length")):(c.push(r.get(Et)),Zt(e)&&c.push(r.get(Ho)));break;case"delete":rn(e)||(c.push(r.get(Et)),Zt(e)&&c.push(r.get(Ho)));break;case"set":Zt(e)&&c.push(r.get(Et));break}if(c.length===1)c[0]&&Ro(c[0]);else{const u=[];for(const p of c)p&&u.push(...p);Ro(Oi(u))}}function Ro(e,t){const s=rn(e)?e:[...e];for(const o of s)o.computed&&xl(o);for(const o of s)o.computed||xl(o)}function xl(e,t){(e!==Ee||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Sd=$i("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ei)),Ad=Pi(),Od=Pi(!1,!0),Cd=Pi(!0),Tl=Pd();function Pd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const o=Tn(this);for(let l=0,r=this.length;l<r;l++)ke(o,"get",l+"");const i=o[t](...s);return i===-1||i===!1?o[t](...s.map(Tn)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){ca();const o=Tn(this)[t].apply(this,s);return ua(),o}}),e}function Pi(e=!1,t=!1){return function(o,i,l){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&l===(e?t?Zd:Gc:t?Kc:Vc).get(o))return o;const r=rn(o);if(!e&&r&&bn(Tl,i))return Reflect.get(Tl,i,l);const c=Reflect.get(o,i,l);return(Ei(i)?jc.has(i):Sd(i))||(e||ke(o,"get",i),t)?c:$n(c)?r&&Ii(i)?c:c.value:Un(c)?e?Gt(c):Fn(c):c}}const Hd=Bc(),Rd=Bc(!0);function Bc(e=!1){return function(s,o,i,l){let r=s[o];if(Da(r)&&$n(r)&&!$n(i))return!1;if(!e&&!Da(i)&&(Fo(i)||(i=Tn(i),r=Tn(r)),!rn(s)&&$n(r)&&!$n(i)))return r.value=i,!0;const c=rn(s)&&Ii(o)?Number(o)<s.length:bn(s,o),u=Reflect.set(s,o,i,l);return s===Tn(l)&&(c?Wa(i,r)&&Ze(s,"set",o,i):Ze(s,"add",o,i)),u}}function Fd(e,t){const s=bn(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&s&&Ze(e,"delete",t,void 0),o}function Nd(e,t){const s=Reflect.has(e,t);return(!Ei(t)||!jc.has(t))&&ke(e,"has",t),s}function qd(e){return ke(e,"iterate",rn(e)?"length":Et),Reflect.ownKeys(e)}const Uc={get:Ad,set:Hd,deleteProperty:Fd,has:Nd,ownKeys:qd},Wd={get:Cd,set(e,t){return!0},deleteProperty(e,t){return!0}},Dd=se({},Uc,{get:Od,set:Rd}),Hi=e=>e,Bs=e=>Reflect.getPrototypeOf(e);function ls(e,t,s=!1,o=!1){e=e.__v_raw;const i=Tn(e),l=Tn(t);s||(t!==l&&ke(i,"get",t),ke(i,"get",l));const{has:r}=Bs(i),c=o?Hi:s?Ni:ja;if(r.call(i,t))return c(e.get(t));if(r.call(i,l))return c(e.get(l));e!==i&&e.get(t)}function rs(e,t=!1){const s=this.__v_raw,o=Tn(s),i=Tn(e);return t||(e!==i&&ke(o,"has",e),ke(o,"has",i)),e===i?s.has(e):s.has(e)||s.has(i)}function cs(e,t=!1){return e=e.__v_raw,!t&&ke(Tn(e),"iterate",Et),Reflect.get(e,"size",e)}function $l(e){e=Tn(e);const t=Tn(this);return Bs(t).has.call(t,e)||(t.add(e),Ze(t,"add",e,e)),this}function Ml(e,t){t=Tn(t);const s=Tn(this),{has:o,get:i}=Bs(s);let l=o.call(s,e);l||(e=Tn(e),l=o.call(s,e));const r=i.call(s,e);return s.set(e,t),l?Wa(t,r)&&Ze(s,"set",e,t):Ze(s,"add",e,t),this}function Ll(e){const t=Tn(this),{has:s,get:o}=Bs(t);let i=s.call(t,e);i||(e=Tn(e),i=s.call(t,e)),o&&o.call(t,e);const l=t.delete(e);return i&&Ze(t,"delete",e,void 0),l}function El(){const e=Tn(this),t=e.size!==0,s=e.clear();return t&&Ze(e,"clear",void 0,void 0),s}function us(e,t){return function(o,i){const l=this,r=l.__v_raw,c=Tn(r),u=t?Hi:e?Ni:ja;return!e&&ke(c,"iterate",Et),r.forEach((p,d)=>o.call(i,u(p),u(d),l))}}function ps(e,t,s){return function(...o){const i=this.__v_raw,l=Tn(i),r=Zt(l),c=e==="entries"||e===Symbol.iterator&&r,u=e==="keys"&&r,p=i[e](...o),d=s?Hi:t?Ni:ja;return!t&&ke(l,"iterate",u?Ho:Et),{next(){const{value:f,done:m}=p.next();return m?{value:f,done:m}:{value:c?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function et(e){return function(...t){return e==="delete"?!1:this}}function jd(){const e={get(l){return ls(this,l)},get size(){return cs(this)},has:rs,add:$l,set:Ml,delete:Ll,clear:El,forEach:us(!1,!1)},t={get(l){return ls(this,l,!1,!0)},get size(){return cs(this)},has:rs,add:$l,set:Ml,delete:Ll,clear:El,forEach:us(!1,!0)},s={get(l){return ls(this,l,!0)},get size(){return cs(this,!0)},has(l){return rs.call(this,l,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:us(!0,!1)},o={get(l){return ls(this,l,!0,!0)},get size(){return cs(this,!0)},has(l){return rs.call(this,l,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:us(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=ps(l,!1,!1),s[l]=ps(l,!0,!1),t[l]=ps(l,!1,!0),o[l]=ps(l,!0,!0)}),[e,s,t,o]}const[Bd,Ud,Vd,Kd]=jd();function Ri(e,t){const s=t?e?Kd:Vd:e?Ud:Bd;return(o,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?o:Reflect.get(bn(s,i)&&i in o?s:o,i,l)}const Gd={get:Ri(!1,!1)},Qd={get:Ri(!1,!0)},Yd={get:Ri(!0,!1)},Vc=new WeakMap,Kc=new WeakMap,Gc=new WeakMap,Zd=new WeakMap;function Jd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xd(e){return e.__v_skip||!Object.isExtensible(e)?0:Jd(zd(e))}function Fn(e){return Da(e)?e:Fi(e,!1,Uc,Gd,Vc)}function nm(e){return Fi(e,!1,Dd,Qd,Kc)}function Gt(e){return Fi(e,!0,Wd,Yd,Gc)}function Fi(e,t,s,o,i){if(!Un(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=i.get(e);if(l)return l;const r=Xd(e);if(r===0)return e;const c=new Proxy(e,r===2?o:s);return i.set(e,c),c}function Xt(e){return Da(e)?Xt(e.__v_raw):!!(e&&e.__v_isReactive)}function Da(e){return!!(e&&e.__v_isReadonly)}function Fo(e){return!!(e&&e.__v_isShallow)}function Qc(e){return Xt(e)||Da(e)}function Tn(e){const t=e&&e.__v_raw;return t?Tn(t):e}function Us(e){return $s(e,"__v_skip",!0),e}const ja=e=>Un(e)?Fn(e):e,Ni=e=>Un(e)?Gt(e):e;function qi(e){rt&&Ee&&(e=Tn(e),Dc(e.dep||(e.dep=Oi())))}function Wi(e,t){e=Tn(e),e.dep&&Ro(e.dep)}function $n(e){return!!(e&&e.__v_isRef===!0)}function Q(e){return Yc(e,!1)}function Ce(e){return Yc(e,!0)}function Yc(e,t){return $n(e)?e:new em(e,t)}class em{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:Tn(t),this._value=s?t:ja(t)}get value(){return qi(this),this._value}set value(t){t=this.__v_isShallow?t:Tn(t),Wa(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:ja(t),Wi(this))}}function z(e){return $n(e)?e.value:e}const tm={get:(e,t,s)=>z(Reflect.get(e,t,s)),set:(e,t,s,o)=>{const i=e[t];return $n(i)&&!$n(s)?(i.value=s,!0):Reflect.set(e,t,s,o)}};function Zc(e){return Xt(e)?e:new Proxy(e,tm)}class am{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=t(()=>qi(this),()=>Wi(this));this._get=s,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function sm(e){return new am(e)}function om(e){const t=rn(e)?new Array(e.length):{};for(const s in e)t[s]=lm(e,s);return t}class im{constructor(t,s,o){this._object=t,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function lm(e,t,s){const o=e[t];return $n(o)?o:new im(e,t,s)}class rm{constructor(t,s,o,i){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ci(t,()=>{this._dirty||(this._dirty=!0,Wi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=o}get value(){const t=Tn(this);return qi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function cm(e,t,s=!1){let o,i;const l=mn(e);return l?(o=e,i=Se):(o=e.get,i=e.set),new rm(o,i,l||!i,s)}function ct(e,t,s,o){let i;try{i=o?e(...o):e()}catch(l){Vs(l,t,s)}return i}function Ae(e,t,s,o){if(mn(e)){const l=ct(e,t,s,o);return l&&Pc(l)&&l.catch(r=>{Vs(r,t,s)}),l}const i=[];for(let l=0;l<e.length;l++)i.push(Ae(e[l],t,s,o));return i}function Vs(e,t,s,o=!0){const i=t?t.vnode:null;if(t){let l=t.parent;const r=t.proxy,c=s;for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,r,c)===!1)return}l=l.parent}const u=t.appContext.config.errorHandler;if(u){ct(u,null,10,[e,r,c]);return}}um(e,s,i,o)}function um(e,t,s,o=!0){console.error(e)}let Ms=!1,No=!1;const ge=[];let Qe=0;const Ma=[];let Ta=null,Bt=0;const La=[];let at=null,Ut=0;const Jc=Promise.resolve();let Di=null,qo=null;function Gn(e){const t=Di||Jc;return e?t.then(this?e.bind(this):e):t}function pm(e){let t=Qe+1,s=ge.length;for(;t<s;){const o=t+s>>>1;Ba(ge[o])<e?t=o+1:s=o}return t}function Xc(e){(!ge.length||!ge.includes(e,Ms&&e.allowRecurse?Qe+1:Qe))&&e!==qo&&(e.id==null?ge.push(e):ge.splice(pm(e.id),0,e),nu())}function nu(){!Ms&&!No&&(No=!0,Di=Jc.then(au))}function dm(e){const t=ge.indexOf(e);t>Qe&&ge.splice(t,1)}function eu(e,t,s,o){rn(e)?s.push(...e):(!t||!t.includes(e,e.allowRecurse?o+1:o))&&s.push(e),nu()}function mm(e){eu(e,Ta,Ma,Bt)}function fm(e){eu(e,at,La,Ut)}function Ks(e,t=null){if(Ma.length){for(qo=t,Ta=[...new Set(Ma)],Ma.length=0,Bt=0;Bt<Ta.length;Bt++)Ta[Bt]();Ta=null,Bt=0,qo=null,Ks(e,t)}}function tu(e){if(Ks(),La.length){const t=[...new Set(La)];if(La.length=0,at){at.push(...t);return}for(at=t,at.sort((s,o)=>Ba(s)-Ba(o)),Ut=0;Ut<at.length;Ut++)at[Ut]();at=null,Ut=0}}const Ba=e=>e.id==null?1/0:e.id;function au(e){No=!1,Ms=!0,Ks(e),ge.sort((s,o)=>Ba(s)-Ba(o));const t=Se;try{for(Qe=0;Qe<ge.length;Qe++){const s=ge[Qe];s&&s.active!==!1&&ct(s,null,14)}}finally{Qe=0,ge.length=0,tu(),Ms=!1,Di=null,(ge.length||Ma.length||La.length)&&au(e)}}function gm(e,t,...s){if(e.isUnmounted)return;const o=e.vnode.props||Cn;let i=s;const l=t.startsWith("update:"),r=l&&t.slice(7);if(r&&r in o){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:f,trim:m}=o[d]||Cn;m&&(i=s.map(g=>g.trim())),f&&(i=s.map(Oo))}let c,u=o[c=io(t)]||o[c=io(Be(t))];!u&&l&&(u=o[c=io(Ht(t))]),u&&Ae(u,e,6,i);const p=o[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ae(p,e,6,i)}}function su(e,t,s=!1){const o=t.emitsCache,i=o.get(e);if(i!==void 0)return i;const l=e.emits;let r={},c=!1;if(!mn(e)){const u=p=>{const d=su(p,t,!0);d&&(c=!0,se(r,d))};!s&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!l&&!c?(o.set(e,null),null):(rn(l)?l.forEach(u=>r[u]=null):se(r,l),o.set(e,r),r)}function Gs(e,t){return!e||!qs(t)?!1:(t=t.slice(2).replace(/Once$/,""),bn(e,t[0].toLowerCase()+t.slice(1))||bn(e,Ht(t))||bn(e,t))}let Yn=null,Qs=null;function Ls(e){const t=Yn;return Yn=e,Qs=e&&e.type.__scopeId||null,t}function kC(e){Qs=e}function vC(){Qs=null}function v(e,t=Yn,s){if(!t||e._n)return e;const o=(...i)=>{o._d&&ql(-1);const l=Ls(t),r=e(...i);return Ls(l),o._d&&ql(1),r};return o._n=!0,o._c=!0,o._d=!0,o}function lo(e){const{type:t,vnode:s,proxy:o,withProxy:i,props:l,propsOptions:[r],slots:c,attrs:u,emit:p,render:d,renderCache:f,data:m,setupState:g,ctx:h,inheritAttrs:w}=e;let y,S;const I=Ls(e);try{if(s.shapeFlag&4){const C=i||o;y=qe(d.call(C,C,f,l,g,m,h)),S=u}else{const C=t;y=qe(C.length>1?C(l,{attrs:u,slots:c,emit:p}):C(l,null)),S=t.props?u:hm(u)}}catch(C){Ia.length=0,Vs(C,e,1),y=L(ft)}let E=y;if(S&&w!==!1){const C=Object.keys(S),{shapeFlag:B}=E;C.length&&B&7&&(r&&C.some(Mi)&&(S=_m(S,r)),E=Ct(E,S))}return s.dirs&&(E=Ct(E),E.dirs=E.dirs?E.dirs.concat(s.dirs):s.dirs),s.transition&&(E.transition=s.transition),y=E,Ls(I),y}const hm=e=>{let t;for(const s in e)(s==="class"||s==="style"||qs(s))&&((t||(t={}))[s]=e[s]);return t},_m=(e,t)=>{const s={};for(const o in e)(!Mi(o)||!(o.slice(9)in t))&&(s[o]=e[o]);return s};function km(e,t,s){const{props:o,children:i,component:l}=e,{props:r,children:c,patchFlag:u}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return o?Il(o,r,p):!!r;if(u&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(r[m]!==o[m]&&!Gs(p,m))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:o===r?!1:o?r?Il(o,r,p):!0:!!r;return!1}function Il(e,t,s){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let i=0;i<o.length;i++){const l=o[i];if(t[l]!==e[l]&&!Gs(s,l))return!0}return!1}function vm({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const ou=e=>e.__isSuspense;function bm(e,t){t&&t.pendingBranch?rn(e)?t.effects.push(...e):t.effects.push(e):fm(e)}function fe(e,t){if(Vn){let s=Vn.provides;const o=Vn.parent&&Vn.parent.provides;o===s&&(s=Vn.provides=Object.create(o)),s[e]=t}}function x(e,t,s=!1){const o=Vn||Yn;if(o){const i=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return s&&mn(t)?t.call(o.proxy):t}}function es(e,t){return ji(e,null,t)}const Sl={};function fn(e,t,s){return ji(e,t,s)}function ji(e,t,{immediate:s,deep:o,flush:i,onTrack:l,onTrigger:r}=Cn){const c=Vn;let u,p=!1,d=!1;if($n(e)?(u=()=>e.value,p=Fo(e)):Xt(e)?(u=()=>e,o=!0):rn(e)?(d=!0,p=e.some(S=>Xt(S)||Fo(S)),u=()=>e.map(S=>{if($n(S))return S.value;if(Xt(S))return Tt(S);if(mn(S))return ct(S,c,2)})):mn(e)?t?u=()=>ct(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return f&&f(),Ae(e,c,3,[m])}:u=Se,t&&o){const S=u;u=()=>Tt(S())}let f,m=S=>{f=y.onStop=()=>{ct(S,c,4)}};if(Va)return m=Se,t?s&&Ae(t,c,3,[u(),d?[]:void 0,m]):u(),Se;let g=d?[]:Sl;const h=()=>{if(!!y.active)if(t){const S=y.run();(o||p||(d?S.some((I,E)=>Wa(I,g[E])):Wa(S,g)))&&(f&&f(),Ae(t,c,3,[S,g===Sl?void 0:g,m]),g=S)}else y.run()};h.allowRecurse=!!t;let w;i==="sync"?w=h:i==="post"?w=()=>Kn(h,c&&c.suspense):w=()=>mm(h);const y=new Ci(u,w);return t?s?h():g=y.run():i==="post"?Kn(y.run.bind(y),c&&c.suspense):y.run(),()=>{y.stop(),c&&c.scope&&Li(c.scope.effects,y)}}function ym(e,t,s){const o=this.proxy,i=qn(e)?e.includes(".")?iu(o,e):()=>o[e]:e.bind(o,o);let l;mn(t)?l=t:(l=t.handler,s=t);const r=Vn;oa(this);const c=ji(i,l.bind(o),s);return r?oa(r):It(),c}function iu(e,t){const s=t.split(".");return()=>{let o=e;for(let i=0;i<s.length&&o;i++)o=o[s[i]];return o}}function Tt(e,t){if(!Un(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),$n(e))Tt(e.value,t);else if(rn(e))for(let s=0;s<e.length;s++)Tt(e[s],t);else if(Cc(e)||Zt(e))e.forEach(s=>{Tt(s,t)});else if(Rc(e))for(const s in e)Tt(e[s],t);return e}function lu(e,t){e.shapeFlag&6&&e.component?lu(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function En(e){return mn(e)?{setup:e,name:e.name}:e}const na=e=>!!e.type.__asyncLoader,ru=e=>e.type.__isKeepAlive,wm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const s=Rt(),o=s.ctx;if(!o.renderer)return()=>{const I=t.default&&t.default();return I&&I.length===1?I[0]:I};const i=new Map,l=new Set;let r=null;const c=s.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:f}}}=o,m=f("div");o.activate=(I,E,C,B,D)=>{const G=I.component;p(I,E,C,0,c),u(G.vnode,I,E,C,G,c,B,I.slotScopeIds,D),Kn(()=>{G.isDeactivated=!1,G.a&&Jt(G.a);const on=I.props&&I.props.onVnodeMounted;on&&be(on,G.parent,I)},c)},o.deactivate=I=>{const E=I.component;p(I,m,null,1,c),Kn(()=>{E.da&&Jt(E.da);const C=I.props&&I.props.onVnodeUnmounted;C&&be(C,E.parent,I),E.isDeactivated=!0},c)};function g(I){ro(I),d(I,s,c,!0)}function h(I){i.forEach((E,C)=>{const B=Ko(E.type);B&&(!I||!I(B))&&w(C)})}function w(I){const E=i.get(I);!r||E.type!==r.type?g(E):r&&ro(r),i.delete(I),l.delete(I)}fn(()=>[e.include,e.exclude],([I,E])=>{I&&h(C=>$a(I,C)),E&&h(C=>!$a(E,C))},{flush:"post",deep:!0});let y=null;const S=()=>{y!=null&&i.set(y,co(s.subTree))};return pa(S),du(S),Zs(()=>{i.forEach(I=>{const{subTree:E,suspense:C}=s,B=co(E);if(I.type===B.type){ro(B);const D=B.component.da;D&&Kn(D,C);return}g(I)})}),()=>{if(y=null,!t.default)return null;const I=t.default(),E=I[0];if(I.length>1)return r=null,I;if(!sa(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return r=null,E;let C=co(E);const B=C.type,D=Ko(na(C)?C.type.__asyncResolved||{}:B),{include:G,exclude:on,max:pn}=e;if(G&&(!D||!$a(G,D))||on&&D&&$a(on,D))return r=C,E;const kn=C.key==null?B:C.key,yn=i.get(kn);return C.el&&(C=Ct(C),E.shapeFlag&128&&(E.ssContent=C)),y=kn,yn?(C.el=yn.el,C.component=yn.component,C.transition&&lu(C,C.transition),C.shapeFlag|=512,l.delete(kn),l.add(kn)):(l.add(kn),pn&&l.size>parseInt(pn,10)&&w(l.values().next().value)),C.shapeFlag|=256,r=C,ou(E.type)?E:C}}},cu=wm;function $a(e,t){return rn(e)?e.some(s=>$a(s,t)):qn(e)?e.split(",").includes(t):e.test?e.test(t):!1}function zm(e,t){uu(e,"a",t)}function xm(e,t){uu(e,"da",t)}function uu(e,t,s=Vn){const o=e.__wdc||(e.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ys(t,o,s),s){let i=s.parent;for(;i&&i.parent;)ru(i.parent.vnode)&&Tm(o,t,s,i),i=i.parent}}function Tm(e,t,s,o){const i=Ys(t,e,o,!0);Js(()=>{Li(o[t],i)},s)}function ro(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function co(e){return e.shapeFlag&128?e.ssContent:e}function Ys(e,t,s=Vn,o=!1){if(s){const i=s[e]||(s[e]=[]),l=t.__weh||(t.__weh=(...r)=>{if(s.isUnmounted)return;ca(),oa(s);const c=Ae(t,s,e,r);return It(),ua(),c});return o?i.unshift(l):i.push(l),l}}const Je=e=>(t,s=Vn)=>(!Va||e==="sp")&&Ys(e,t,s),pu=Je("bm"),pa=Je("m"),$m=Je("bu"),du=Je("u"),Zs=Je("bum"),Js=Je("um"),Mm=Je("sp"),Lm=Je("rtg"),Em=Je("rtc");function Im(e,t=Vn){Ys("ec",e,t)}function Bi(e,t){const s=Yn;if(s===null)return e;const o=no(s)||s.proxy,i=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[r,c,u,p=Cn]=t[l];mn(r)&&(r={mounted:r,updated:r}),r.deep&&Tt(c),i.push({dir:r,instance:o,value:c,oldValue:void 0,arg:u,modifiers:p})}return e}function ht(e,t,s,o){const i=e.dirs,l=t&&t.dirs;for(let r=0;r<i.length;r++){const c=i[r];l&&(c.oldValue=l[r].value);let u=c.dir[o];u&&(ca(),Ae(u,s,8,[e.el,c,e,t]),ua())}}const mu="components";function aa(e,t){return Am(mu,e,!0,t)||e}const Sm=Symbol();function Am(e,t,s=!0,o=!1){const i=Yn||Vn;if(i){const l=i.type;if(e===mu){const c=Ko(l,!1);if(c&&(c===t||c===Be(t)||c===js(Be(t))))return l}const r=Al(i[e]||l[e],t)||Al(i.appContext[e],t);return!r&&o?l:r}}function Al(e,t){return e&&(e[t]||e[Be(t)]||e[js(Be(t))])}function ts(e,t,s,o){let i;const l=s&&s[o];if(rn(e)||qn(e)){i=new Array(e.length);for(let r=0,c=e.length;r<c;r++)i[r]=t(e[r],r,void 0,l&&l[r])}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,l&&l[r])}else if(Un(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>t(r,c,void 0,l&&l[c]));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const p=r[c];i[c]=t(e[p],p,c,l&&l[c])}}else i=[];return s&&(s[o]=i),i}function Ue(e,t,s={},o,i){if(Yn.isCE||Yn.parent&&na(Yn.parent)&&Yn.parent.isCE)return L("slot",t==="default"?null:{name:t},o&&o());let l=e[t];l&&l._c&&(l._d=!1),k();const r=l&&fu(l(s)),c=T(Mn,{key:s.key||`_${t}`},r||(o?o():[]),r&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function fu(e){return e.some(t=>sa(t)?!(t.type===ft||t.type===Mn&&!fu(t.children)):!0)?e:null}const Wo=e=>e?Tu(e)?no(e)||e.proxy:Wo(e.parent):null,Es=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wo(e.parent),$root:e=>Wo(e.root),$emit:e=>e.emit,$options:e=>hu(e),$forceUpdate:e=>e.f||(e.f=()=>Xc(e.update)),$nextTick:e=>e.n||(e.n=Gn.bind(e.proxy)),$watch:e=>ym.bind(e)}),Om={get({_:e},t){const{ctx:s,setupState:o,data:i,props:l,accessCache:r,type:c,appContext:u}=e;let p;if(t[0]!=="$"){const g=r[t];if(g!==void 0)switch(g){case 1:return o[t];case 2:return i[t];case 4:return s[t];case 3:return l[t]}else{if(o!==Cn&&bn(o,t))return r[t]=1,o[t];if(i!==Cn&&bn(i,t))return r[t]=2,i[t];if((p=e.propsOptions[0])&&bn(p,t))return r[t]=3,l[t];if(s!==Cn&&bn(s,t))return r[t]=4,s[t];Do&&(r[t]=0)}}const d=Es[t];let f,m;if(d)return t==="$attrs"&&ke(e,"get",t),d(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(s!==Cn&&bn(s,t))return r[t]=4,s[t];if(m=u.config.globalProperties,bn(m,t))return m[t]},set({_:e},t,s){const{data:o,setupState:i,ctx:l}=e;return i!==Cn&&bn(i,t)?(i[t]=s,!0):o!==Cn&&bn(o,t)?(o[t]=s,!0):bn(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:o,appContext:i,propsOptions:l}},r){let c;return!!s[r]||e!==Cn&&bn(e,r)||t!==Cn&&bn(t,r)||(c=l[0])&&bn(c,r)||bn(o,r)||bn(Es,r)||bn(i.config.globalProperties,r)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:bn(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};let Do=!0;function Cm(e){const t=hu(e),s=e.proxy,o=e.ctx;Do=!1,t.beforeCreate&&Ol(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:r,watch:c,provide:u,inject:p,created:d,beforeMount:f,mounted:m,beforeUpdate:g,updated:h,activated:w,deactivated:y,beforeDestroy:S,beforeUnmount:I,destroyed:E,unmounted:C,render:B,renderTracked:D,renderTriggered:G,errorCaptured:on,serverPrefetch:pn,expose:kn,inheritAttrs:yn,components:Rn,directives:Wn,filters:Qn}=t;if(p&&Pm(p,o,null,e.appContext.config.unwrapInjectedRef),r)for(const cn in r){const sn=r[cn];mn(sn)&&(o[cn]=sn.bind(s))}if(i){const cn=i.call(s,s);Un(cn)&&(e.data=Fn(cn))}if(Do=!0,l)for(const cn in l){const sn=l[cn],vn=mn(sn)?sn.bind(s,s):mn(sn.get)?sn.get.bind(s,s):Se,Fe=!mn(sn)&&mn(sn.set)?sn.set.bind(s):Se,Xn=P({get:vn,set:Fe});Object.defineProperty(o,cn,{enumerable:!0,configurable:!0,get:()=>Xn.value,set:ve=>Xn.value=ve})}if(c)for(const cn in c)gu(c[cn],o,s,cn);if(u){const cn=mn(u)?u.call(s):u;Reflect.ownKeys(cn).forEach(sn=>{fe(sn,cn[sn])})}d&&Ol(d,e,"c");function ln(cn,sn){rn(sn)?sn.forEach(vn=>cn(vn.bind(s))):sn&&cn(sn.bind(s))}if(ln(pu,f),ln(pa,m),ln($m,g),ln(du,h),ln(zm,w),ln(xm,y),ln(Im,on),ln(Em,D),ln(Lm,G),ln(Zs,I),ln(Js,C),ln(Mm,pn),rn(kn))if(kn.length){const cn=e.exposed||(e.exposed={});kn.forEach(sn=>{Object.defineProperty(cn,sn,{get:()=>s[sn],set:vn=>s[sn]=vn})})}else e.exposed||(e.exposed={});B&&e.render===Se&&(e.render=B),yn!=null&&(e.inheritAttrs=yn),Rn&&(e.components=Rn),Wn&&(e.directives=Wn)}function Pm(e,t,s=Se,o=!1){rn(e)&&(e=jo(e));for(const i in e){const l=e[i];let r;Un(l)?"default"in l?r=x(l.from||i,l.default,!0):r=x(l.from||i):r=x(l),$n(r)&&o?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:c=>r.value=c}):t[i]=r}}function Ol(e,t,s){Ae(rn(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,s)}function gu(e,t,s,o){const i=o.includes(".")?iu(s,o):()=>s[o];if(qn(e)){const l=t[e];mn(l)&&fn(i,l)}else if(mn(e))fn(i,e.bind(s));else if(Un(e))if(rn(e))e.forEach(l=>gu(l,t,s,o));else{const l=mn(e.handler)?e.handler.bind(s):t[e.handler];mn(l)&&fn(i,l,e)}}function hu(e){const t=e.type,{mixins:s,extends:o}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,c=l.get(t);let u;return c?u=c:!i.length&&!s&&!o?u=t:(u={},i.length&&i.forEach(p=>Is(u,p,r,!0)),Is(u,t,r)),l.set(t,u),u}function Is(e,t,s,o=!1){const{mixins:i,extends:l}=t;l&&Is(e,l,s,!0),i&&i.forEach(r=>Is(e,r,s,!0));for(const r in t)if(!(o&&r==="expose")){const c=Hm[r]||s&&s[r];e[r]=c?c(e[r],t[r]):t[r]}return e}const Hm={data:Cl,props:bt,emits:bt,methods:bt,computed:bt,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:bt,directives:bt,watch:Fm,provide:Cl,inject:Rm};function Cl(e,t){return t?e?function(){return se(mn(e)?e.call(this,this):e,mn(t)?t.call(this,this):t)}:t:e}function Rm(e,t){return bt(jo(e),jo(t))}function jo(e){if(rn(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function bt(e,t){return e?se(se(Object.create(null),e),t):t}function Fm(e,t){if(!e)return t;if(!t)return e;const s=se(Object.create(null),e);for(const o in t)s[o]=ne(e[o],t[o]);return s}function Nm(e,t,s,o=!1){const i={},l={};$s(l,Xs,1),e.propsDefaults=Object.create(null),_u(e,t,i,l);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);s?e.props=o?i:nm(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function qm(e,t,s,o){const{props:i,attrs:l,vnode:{patchFlag:r}}=e,c=Tn(i),[u]=e.propsOptions;let p=!1;if((o||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(Gs(e.emitsOptions,m))continue;const g=t[m];if(u)if(bn(l,m))g!==l[m]&&(l[m]=g,p=!0);else{const h=Be(m);i[h]=Bo(u,c,h,g,e,!1)}else g!==l[m]&&(l[m]=g,p=!0)}}}else{_u(e,t,i,l)&&(p=!0);let d;for(const f in c)(!t||!bn(t,f)&&((d=Ht(f))===f||!bn(t,d)))&&(u?s&&(s[f]!==void 0||s[d]!==void 0)&&(i[f]=Bo(u,c,f,void 0,e,!0)):delete i[f]);if(l!==c)for(const f in l)(!t||!bn(t,f)&&!0)&&(delete l[f],p=!0)}p&&Ze(e,"set","$attrs")}function _u(e,t,s,o){const[i,l]=e.propsOptions;let r=!1,c;if(t)for(let u in t){if(_s(u))continue;const p=t[u];let d;i&&bn(i,d=Be(u))?!l||!l.includes(d)?s[d]=p:(c||(c={}))[d]=p:Gs(e.emitsOptions,u)||(!(u in o)||p!==o[u])&&(o[u]=p,r=!0)}if(l){const u=Tn(s),p=c||Cn;for(let d=0;d<l.length;d++){const f=l[d];s[f]=Bo(i,u,f,p[f],e,!bn(p,f))}}return r}function Bo(e,t,s,o,i,l){const r=e[s];if(r!=null){const c=bn(r,"default");if(c&&o===void 0){const u=r.default;if(r.type!==Function&&mn(u)){const{propsDefaults:p}=i;s in p?o=p[s]:(oa(i),o=p[s]=u.call(null,t),It())}else o=u}r[0]&&(l&&!c?o=!1:r[1]&&(o===""||o===Ht(s))&&(o=!0))}return o}function ku(e,t,s=!1){const o=t.propsCache,i=o.get(e);if(i)return i;const l=e.props,r={},c=[];let u=!1;if(!mn(e)){const d=f=>{u=!0;const[m,g]=ku(f,t,!0);se(r,m),g&&c.push(...g)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!u)return o.set(e,Yt),Yt;if(rn(l))for(let d=0;d<l.length;d++){const f=Be(l[d]);Pl(f)&&(r[f]=Cn)}else if(l)for(const d in l){const f=Be(d);if(Pl(f)){const m=l[d],g=r[f]=rn(m)||mn(m)?{type:m}:m;if(g){const h=Fl(Boolean,g.type),w=Fl(String,g.type);g[0]=h>-1,g[1]=w<0||h<w,(h>-1||bn(g,"default"))&&c.push(f)}}}const p=[r,c];return o.set(e,p),p}function Pl(e){return e[0]!=="$"}function Hl(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Rl(e,t){return Hl(e)===Hl(t)}function Fl(e,t){return rn(t)?t.findIndex(s=>Rl(s,e)):mn(t)&&Rl(t,e)?0:-1}const vu=e=>e[0]==="_"||e==="$stable",Ui=e=>rn(e)?e.map(qe):[qe(e)],Wm=(e,t,s)=>{if(t._n)return t;const o=v((...i)=>Ui(t(...i)),s);return o._c=!1,o},bu=(e,t,s)=>{const o=e._ctx;for(const i in e){if(vu(i))continue;const l=e[i];if(mn(l))t[i]=Wm(i,l,o);else if(l!=null){const r=Ui(l);t[i]=()=>r}}},yu=(e,t)=>{const s=Ui(t);e.slots.default=()=>s},Dm=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=Tn(t),$s(t,"_",s)):bu(t,e.slots={})}else e.slots={},t&&yu(e,t);$s(e.slots,Xs,1)},jm=(e,t,s)=>{const{vnode:o,slots:i}=e;let l=!0,r=Cn;if(o.shapeFlag&32){const c=t._;c?s&&c===1?l=!1:(se(i,t),!s&&c===1&&delete i._):(l=!t.$stable,bu(t,i)),r=t}else t&&(yu(e,t),r={default:1});if(l)for(const c in i)!vu(c)&&!(c in r)&&delete i[c]};function wu(){return{app:null,config:{isNativeTag:bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bm=0;function Um(e,t){return function(o,i=null){mn(o)||(o=Object.assign({},o)),i!=null&&!Un(i)&&(i=null);const l=wu(),r=new Set;let c=!1;const u=l.app={_uid:Bm++,_component:o,_props:i,_container:null,_context:l,_instance:null,version:uf,get config(){return l.config},set config(p){},use(p,...d){return r.has(p)||(p&&mn(p.install)?(r.add(p),p.install(u,...d)):mn(p)&&(r.add(p),p(u,...d))),u},mixin(p){return l.mixins.includes(p)||l.mixins.push(p),u},component(p,d){return d?(l.components[p]=d,u):l.components[p]},directive(p,d){return d?(l.directives[p]=d,u):l.directives[p]},mount(p,d,f){if(!c){const m=L(o,i);return m.appContext=l,d&&t?t(m,p):e(m,p,f),c=!0,u._container=p,p.__vue_app__=u,no(m.component)||m.component.proxy}},unmount(){c&&(e(null,u._container),delete u._container.__vue_app__)},provide(p,d){return l.provides[p]=d,u}};return u}}function Uo(e,t,s,o,i=!1){if(rn(e)){e.forEach((m,g)=>Uo(m,t&&(rn(t)?t[g]:t),s,o,i));return}if(na(o)&&!i)return;const l=o.shapeFlag&4?no(o.component)||o.component.proxy:o.el,r=i?null:l,{i:c,r:u}=e,p=t&&t.r,d=c.refs===Cn?c.refs={}:c.refs,f=c.setupState;if(p!=null&&p!==u&&(qn(p)?(d[p]=null,bn(f,p)&&(f[p]=null)):$n(p)&&(p.value=null)),mn(u))ct(u,c,12,[r,d]);else{const m=qn(u),g=$n(u);if(m||g){const h=()=>{if(e.f){const w=m?d[u]:u.value;i?rn(w)&&Li(w,l):rn(w)?w.includes(l)||w.push(l):m?(d[u]=[l],bn(f,u)&&(f[u]=d[u])):(u.value=[l],e.k&&(d[e.k]=u.value))}else m?(d[u]=r,bn(f,u)&&(f[u]=r)):g&&(u.value=r,e.k&&(d[e.k]=r))};r?(h.id=-1,Kn(h,s)):h()}}}const Kn=bm;function Vm(e){return Km(e)}function Km(e,t){const s=$d();s.__VUE__=!0;const{insert:o,remove:i,patchProp:l,createElement:r,createText:c,createComment:u,setText:p,setElementText:d,parentNode:f,nextSibling:m,setScopeId:g=Se,cloneNode:h,insertStaticContent:w}=e,y=(_,b,M,N=null,F=null,V=null,Y=!1,j=null,K=!!b.dynamicChildren)=>{if(_===b)return;_&&!ha(_,b)&&(N=X(_),ie(_,F,V,!0),_=null),b.patchFlag===-2&&(K=!1,b.dynamicChildren=null);const{type:q,ref:tn,shapeFlag:nn}=b;switch(q){case Ki:S(_,b,M,N);break;case ft:I(_,b,M,N);break;case uo:_==null&&E(b,M,N,Y);break;case Mn:Wn(_,b,M,N,F,V,Y,j,K);break;default:nn&1?D(_,b,M,N,F,V,Y,j,K):nn&6?Qn(_,b,M,N,F,V,Y,j,K):(nn&64||nn&128)&&q.process(_,b,M,N,F,V,Y,j,K,Pn)}tn!=null&&F&&Uo(tn,_&&_.ref,V,b||_,!b)},S=(_,b,M,N)=>{if(_==null)o(b.el=c(b.children),M,N);else{const F=b.el=_.el;b.children!==_.children&&p(F,b.children)}},I=(_,b,M,N)=>{_==null?o(b.el=u(b.children||""),M,N):b.el=_.el},E=(_,b,M,N)=>{[_.el,_.anchor]=w(_.children,b,M,N,_.el,_.anchor)},C=({el:_,anchor:b},M,N)=>{let F;for(;_&&_!==b;)F=m(_),o(_,M,N),_=F;o(b,M,N)},B=({el:_,anchor:b})=>{let M;for(;_&&_!==b;)M=m(_),i(_),_=M;i(b)},D=(_,b,M,N,F,V,Y,j,K)=>{Y=Y||b.type==="svg",_==null?G(b,M,N,F,V,Y,j,K):kn(_,b,F,V,Y,j,K)},G=(_,b,M,N,F,V,Y,j)=>{let K,q;const{type:tn,props:nn,shapeFlag:an,transition:un,patchFlag:wn,dirs:Sn}=_;if(_.el&&h!==void 0&&wn===-1)K=_.el=h(_.el);else{if(K=_.el=r(_.type,V,nn&&nn.is,nn),an&8?d(K,_.children):an&16&&pn(_.children,K,null,N,F,V&&tn!=="foreignObject",Y,j),Sn&&ht(_,null,N,"created"),nn){for(const Hn in nn)Hn!=="value"&&!_s(Hn)&&l(K,Hn,null,nn[Hn],V,_.children,N,F,W);"value"in nn&&l(K,"value",null,nn.value),(q=nn.onVnodeBeforeMount)&&be(q,N,_)}on(K,_,_.scopeId,Y,N)}Sn&&ht(_,null,N,"beforeMount");const An=(!F||F&&!F.pendingBranch)&&un&&!un.persisted;An&&un.beforeEnter(K),o(K,b,M),((q=nn&&nn.onVnodeMounted)||An||Sn)&&Kn(()=>{q&&be(q,N,_),An&&un.enter(K),Sn&&ht(_,null,N,"mounted")},F)},on=(_,b,M,N,F)=>{if(M&&g(_,M),N)for(let V=0;V<N.length;V++)g(_,N[V]);if(F){let V=F.subTree;if(b===V){const Y=F.vnode;on(_,Y,Y.scopeId,Y.slotScopeIds,F.parent)}}},pn=(_,b,M,N,F,V,Y,j,K=0)=>{for(let q=K;q<_.length;q++){const tn=_[q]=j?st(_[q]):qe(_[q]);y(null,tn,b,M,N,F,V,Y,j)}},kn=(_,b,M,N,F,V,Y)=>{const j=b.el=_.el;let{patchFlag:K,dynamicChildren:q,dirs:tn}=b;K|=_.patchFlag&16;const nn=_.props||Cn,an=b.props||Cn;let un;M&&_t(M,!1),(un=an.onVnodeBeforeUpdate)&&be(un,M,b,_),tn&&ht(b,_,M,"beforeUpdate"),M&&_t(M,!0);const wn=F&&b.type!=="foreignObject";if(q?yn(_.dynamicChildren,q,j,M,N,wn,V):Y||vn(_,b,j,null,M,N,wn,V,!1),K>0){if(K&16)Rn(j,b,nn,an,M,N,F);else if(K&2&&nn.class!==an.class&&l(j,"class",null,an.class,F),K&4&&l(j,"style",nn.style,an.style,F),K&8){const Sn=b.dynamicProps;for(let An=0;An<Sn.length;An++){const Hn=Sn[An],$e=nn[Hn],qt=an[Hn];(qt!==$e||Hn==="value")&&l(j,Hn,$e,qt,F,_.children,M,N,W)}}K&1&&_.children!==b.children&&d(j,b.children)}else!Y&&q==null&&Rn(j,b,nn,an,M,N,F);((un=an.onVnodeUpdated)||tn)&&Kn(()=>{un&&be(un,M,b,_),tn&&ht(b,_,M,"updated")},N)},yn=(_,b,M,N,F,V,Y)=>{for(let j=0;j<b.length;j++){const K=_[j],q=b[j],tn=K.el&&(K.type===Mn||!ha(K,q)||K.shapeFlag&70)?f(K.el):M;y(K,q,tn,null,N,F,V,Y,!0)}},Rn=(_,b,M,N,F,V,Y)=>{if(M!==N){for(const j in N){if(_s(j))continue;const K=N[j],q=M[j];K!==q&&j!=="value"&&l(_,j,q,K,Y,b.children,F,V,W)}if(M!==Cn)for(const j in M)!_s(j)&&!(j in N)&&l(_,j,M[j],null,Y,b.children,F,V,W);"value"in N&&l(_,"value",M.value,N.value)}},Wn=(_,b,M,N,F,V,Y,j,K)=>{const q=b.el=_?_.el:c(""),tn=b.anchor=_?_.anchor:c("");let{patchFlag:nn,dynamicChildren:an,slotScopeIds:un}=b;un&&(j=j?j.concat(un):un),_==null?(o(q,M,N),o(tn,M,N),pn(b.children,M,tn,F,V,Y,j,K)):nn>0&&nn&64&&an&&_.dynamicChildren?(yn(_.dynamicChildren,an,M,F,V,Y,j),(b.key!=null||F&&b===F.subTree)&&Vi(_,b,!0)):vn(_,b,M,tn,F,V,Y,j,K)},Qn=(_,b,M,N,F,V,Y,j,K)=>{b.slotScopeIds=j,_==null?b.shapeFlag&512?F.ctx.activate(b,M,N,Y,K):In(b,M,N,F,V,Y,K):ln(_,b,K)},In=(_,b,M,N,F,V,Y)=>{const j=_.component=af(_,N,F);if(ru(_)&&(j.ctx.renderer=Pn),sf(j),j.asyncDep){if(F&&F.registerDep(j,cn),!_.el){const K=j.subTree=L(ft);I(null,K,b,M)}return}cn(j,_,b,M,F,V,Y)},ln=(_,b,M)=>{const N=b.component=_.component;if(km(_,b,M))if(N.asyncDep&&!N.asyncResolved){sn(N,b,M);return}else N.next=b,dm(N.update),N.update();else b.el=_.el,N.vnode=b},cn=(_,b,M,N,F,V,Y)=>{const j=()=>{if(_.isMounted){let{next:tn,bu:nn,u:an,parent:un,vnode:wn}=_,Sn=tn,An;_t(_,!1),tn?(tn.el=wn.el,sn(_,tn,Y)):tn=wn,nn&&Jt(nn),(An=tn.props&&tn.props.onVnodeBeforeUpdate)&&be(An,un,tn,wn),_t(_,!0);const Hn=lo(_),$e=_.subTree;_.subTree=Hn,y($e,Hn,f($e.el),X($e),_,F,V),tn.el=Hn.el,Sn===null&&vm(_,Hn.el),an&&Kn(an,F),(An=tn.props&&tn.props.onVnodeUpdated)&&Kn(()=>be(An,un,tn,wn),F)}else{let tn;const{el:nn,props:an}=b,{bm:un,m:wn,parent:Sn}=_,An=na(b);if(_t(_,!1),un&&Jt(un),!An&&(tn=an&&an.onVnodeBeforeMount)&&be(tn,Sn,b),_t(_,!0),nn&&gn){const Hn=()=>{_.subTree=lo(_),gn(nn,_.subTree,_,F,null)};An?b.type.__asyncLoader().then(()=>!_.isUnmounted&&Hn()):Hn()}else{const Hn=_.subTree=lo(_);y(null,Hn,M,N,_,F,V),b.el=Hn.el}if(wn&&Kn(wn,F),!An&&(tn=an&&an.onVnodeMounted)){const Hn=b;Kn(()=>be(tn,Sn,Hn),F)}(b.shapeFlag&256||Sn&&na(Sn.vnode)&&Sn.vnode.shapeFlag&256)&&_.a&&Kn(_.a,F),_.isMounted=!0,b=M=N=null}},K=_.effect=new Ci(j,()=>Xc(q),_.scope),q=_.update=()=>K.run();q.id=_.uid,_t(_,!0),q()},sn=(_,b,M)=>{b.component=_;const N=_.vnode.props;_.vnode=b,_.next=null,qm(_,b.props,N,M),jm(_,b.children,M),ca(),Ks(void 0,_.update),ua()},vn=(_,b,M,N,F,V,Y,j,K=!1)=>{const q=_&&_.children,tn=_?_.shapeFlag:0,nn=b.children,{patchFlag:an,shapeFlag:un}=b;if(an>0){if(an&128){Xn(q,nn,M,N,F,V,Y,j,K);return}else if(an&256){Fe(q,nn,M,N,F,V,Y,j,K);return}}un&8?(tn&16&&W(q,F,V),nn!==q&&d(M,nn)):tn&16?un&16?Xn(q,nn,M,N,F,V,Y,j,K):W(q,F,V,!0):(tn&8&&d(M,""),un&16&&pn(nn,M,N,F,V,Y,j,K))},Fe=(_,b,M,N,F,V,Y,j,K)=>{_=_||Yt,b=b||Yt;const q=_.length,tn=b.length,nn=Math.min(q,tn);let an;for(an=0;an<nn;an++){const un=b[an]=K?st(b[an]):qe(b[an]);y(_[an],un,M,null,F,V,Y,j,K)}q>tn?W(_,F,V,!0,!1,nn):pn(b,M,N,F,V,Y,j,K,nn)},Xn=(_,b,M,N,F,V,Y,j,K)=>{let q=0;const tn=b.length;let nn=_.length-1,an=tn-1;for(;q<=nn&&q<=an;){const un=_[q],wn=b[q]=K?st(b[q]):qe(b[q]);if(ha(un,wn))y(un,wn,M,null,F,V,Y,j,K);else break;q++}for(;q<=nn&&q<=an;){const un=_[nn],wn=b[an]=K?st(b[an]):qe(b[an]);if(ha(un,wn))y(un,wn,M,null,F,V,Y,j,K);else break;nn--,an--}if(q>nn){if(q<=an){const un=an+1,wn=un<tn?b[un].el:N;for(;q<=an;)y(null,b[q]=K?st(b[q]):qe(b[q]),M,wn,F,V,Y,j,K),q++}}else if(q>an)for(;q<=nn;)ie(_[q],F,V,!0),q++;else{const un=q,wn=q,Sn=new Map;for(q=wn;q<=an;q++){const ce=b[q]=K?st(b[q]):qe(b[q]);ce.key!=null&&Sn.set(ce.key,q)}let An,Hn=0;const $e=an-wn+1;let qt=!1,vl=0;const ga=new Array($e);for(q=0;q<$e;q++)ga[q]=0;for(q=un;q<=nn;q++){const ce=_[q];if(Hn>=$e){ie(ce,F,V,!0);continue}let Ne;if(ce.key!=null)Ne=Sn.get(ce.key);else for(An=wn;An<=an;An++)if(ga[An-wn]===0&&ha(ce,b[An])){Ne=An;break}Ne===void 0?ie(ce,F,V,!0):(ga[Ne-wn]=q+1,Ne>=vl?vl=Ne:qt=!0,y(ce,b[Ne],M,null,F,V,Y,j,K),Hn++)}const bl=qt?Gm(ga):Yt;for(An=bl.length-1,q=$e-1;q>=0;q--){const ce=wn+q,Ne=b[ce],yl=ce+1<tn?b[ce+1].el:N;ga[q]===0?y(null,Ne,M,yl,F,V,Y,j,K):qt&&(An<0||q!==bl[An]?ve(Ne,M,yl,2):An--)}}},ve=(_,b,M,N,F=null)=>{const{el:V,type:Y,transition:j,children:K,shapeFlag:q}=_;if(q&6){ve(_.component.subTree,b,M,N);return}if(q&128){_.suspense.move(b,M,N);return}if(q&64){Y.move(_,b,M,Pn);return}if(Y===Mn){o(V,b,M);for(let nn=0;nn<K.length;nn++)ve(K[nn],b,M,N);o(_.anchor,b,M);return}if(Y===uo){C(_,b,M);return}if(N!==2&&q&1&&j)if(N===0)j.beforeEnter(V),o(V,b,M),Kn(()=>j.enter(V),F);else{const{leave:nn,delayLeave:an,afterLeave:un}=j,wn=()=>o(V,b,M),Sn=()=>{nn(V,()=>{wn(),un&&un()})};an?an(V,wn,Sn):Sn()}else o(V,b,M)},ie=(_,b,M,N=!1,F=!1)=>{const{type:V,props:Y,ref:j,children:K,dynamicChildren:q,shapeFlag:tn,patchFlag:nn,dirs:an}=_;if(j!=null&&Uo(j,null,M,_,!0),tn&256){b.ctx.deactivate(_);return}const un=tn&1&&an,wn=!na(_);let Sn;if(wn&&(Sn=Y&&Y.onVnodeBeforeUnmount)&&be(Sn,b,_),tn&6)J(_.component,M,N);else{if(tn&128){_.suspense.unmount(M,N);return}un&&ht(_,null,b,"beforeUnmount"),tn&64?_.type.remove(_,b,M,F,Pn,N):q&&(V!==Mn||nn>0&&nn&64)?W(q,b,M,!1,!0):(V===Mn&&nn&384||!F&&tn&16)&&W(K,b,M),N&&nt(_)}(wn&&(Sn=Y&&Y.onVnodeUnmounted)||un)&&Kn(()=>{Sn&&be(Sn,b,_),un&&ht(_,null,b,"unmounted")},M)},nt=_=>{const{type:b,el:M,anchor:N,transition:F}=_;if(b===Mn){H(M,N);return}if(b===uo){B(_);return}const V=()=>{i(M),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(_.shapeFlag&1&&F&&!F.persisted){const{leave:Y,delayLeave:j}=F,K=()=>Y(M,V);j?j(_.el,V,K):K()}else V()},H=(_,b)=>{let M;for(;_!==b;)M=m(_),i(_),_=M;i(b)},J=(_,b,M)=>{const{bum:N,scope:F,update:V,subTree:Y,um:j}=_;N&&Jt(N),F.stop(),V&&(V.active=!1,ie(Y,_,b,M)),j&&Kn(j,b),Kn(()=>{_.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},W=(_,b,M,N=!1,F=!1,V=0)=>{for(let Y=V;Y<_.length;Y++)ie(_[Y],b,M,N,F)},X=_=>_.shapeFlag&6?X(_.component.subTree):_.shapeFlag&128?_.suspense.next():m(_.anchor||_.el),zn=(_,b,M)=>{_==null?b._vnode&&ie(b._vnode,null,null,!0):y(b._vnode||null,_,b,null,null,null,M),tu(),b._vnode=_},Pn={p:y,um:ie,m:ve,r:nt,mt:In,mc:pn,pc:vn,pbc:yn,n:X,o:e};let hn,gn;return t&&([hn,gn]=t(Pn)),{render:zn,hydrate:hn,createApp:Um(zn,hn)}}function _t({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function Vi(e,t,s=!1){const o=e.children,i=t.children;if(rn(o)&&rn(i))for(let l=0;l<o.length;l++){const r=o[l];let c=i[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[l]=st(i[l]),c.el=r.el),s||Vi(r,c))}}function Gm(e){const t=e.slice(),s=[0];let o,i,l,r,c;const u=e.length;for(o=0;o<u;o++){const p=e[o];if(p!==0){if(i=s[s.length-1],e[i]<p){t[o]=i,s.push(o);continue}for(l=0,r=s.length-1;l<r;)c=l+r>>1,e[s[c]]<p?l=c+1:r=c;p<e[s[l]]&&(l>0&&(t[o]=s[l-1]),s[l]=o)}}for(l=s.length,r=s[l-1];l-- >0;)s[l]=r,r=t[r];return s}const Qm=e=>e.__isTeleport,Ea=e=>e&&(e.disabled||e.disabled===""),Nl=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Vo=(e,t)=>{const s=e&&e.to;return qn(s)?t?t(s):null:s},Ym={__isTeleport:!0,process(e,t,s,o,i,l,r,c,u,p){const{mc:d,pc:f,pbc:m,o:{insert:g,querySelector:h,createText:w,createComment:y}}=p,S=Ea(t.props);let{shapeFlag:I,children:E,dynamicChildren:C}=t;if(e==null){const B=t.el=w(""),D=t.anchor=w("");g(B,s,o),g(D,s,o);const G=t.target=Vo(t.props,h),on=t.targetAnchor=w("");G&&(g(on,G),r=r||Nl(G));const pn=(kn,yn)=>{I&16&&d(E,kn,yn,i,l,r,c,u)};S?pn(s,D):G&&pn(G,on)}else{t.el=e.el;const B=t.anchor=e.anchor,D=t.target=e.target,G=t.targetAnchor=e.targetAnchor,on=Ea(e.props),pn=on?s:D,kn=on?B:G;if(r=r||Nl(D),C?(m(e.dynamicChildren,C,pn,i,l,r,c),Vi(e,t,!0)):u||f(e,t,pn,kn,i,l,r,c,!1),S)on||ds(t,s,B,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const yn=t.target=Vo(t.props,h);yn&&ds(t,yn,null,p,0)}else on&&ds(t,D,G,p,1)}},remove(e,t,s,o,{um:i,o:{remove:l}},r){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:f,props:m}=e;if(f&&l(d),(r||!Ea(m))&&(l(p),c&16))for(let g=0;g<u.length;g++){const h=u[g];i(h,t,s,!0,!!h.dynamicChildren)}},move:ds,hydrate:Zm};function ds(e,t,s,{o:{insert:o},m:i},l=2){l===0&&o(e.targetAnchor,t,s);const{el:r,anchor:c,shapeFlag:u,children:p,props:d}=e,f=l===2;if(f&&o(r,t,s),(!f||Ea(d))&&u&16)for(let m=0;m<p.length;m++)i(p[m],t,s,2);f&&o(c,t,s)}function Zm(e,t,s,o,i,l,{o:{nextSibling:r,parentNode:c,querySelector:u}},p){const d=t.target=Vo(t.props,u);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Ea(t.props))t.anchor=p(r(e),t,c(e),s,o,i,l),t.targetAnchor=f;else{t.anchor=r(e);let m=f;for(;m;)if(m=r(m),m&&m.nodeType===8&&m.data==="teleport anchor"){t.targetAnchor=m,d._lpa=t.targetAnchor&&r(t.targetAnchor);break}p(f,t,d,s,o,i,l)}}return t.anchor&&r(t.anchor)}const Jm=Ym,Mn=Symbol(void 0),Ki=Symbol(void 0),ft=Symbol(void 0),uo=Symbol(void 0),Ia=[];let Ie=null;function k(e=!1){Ia.push(Ie=e?null:[])}function Xm(){Ia.pop(),Ie=Ia[Ia.length-1]||null}let Ua=1;function ql(e){Ua+=e}function zu(e){return e.dynamicChildren=Ua>0?Ie||Yt:null,Xm(),Ua>0&&Ie&&Ie.push(e),e}function Z(e,t,s,o,i,l){return zu(n(e,t,s,o,i,l,!0))}function T(e,t,s,o,i){return zu(L(e,t,s,o,i,!0))}function sa(e){return e?e.__v_isVNode===!0:!1}function ha(e,t){return e.type===t.type&&e.key===t.key}const Xs="__vInternal",xu=({key:e})=>e!=null?e:null,ks=({ref:e,ref_key:t,ref_for:s})=>e!=null?qn(e)||$n(e)||mn(e)?{i:Yn,r:e,k:t,f:!!s}:e:null;function n(e,t=null,s=null,o=0,i=null,l=e===Mn?0:1,r=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&xu(t),ref:t&&ks(t),scopeId:Qs,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(Gi(u,s),l&128&&e.normalize(u)):s&&(u.shapeFlag|=qn(s)?8:16),Ua>0&&!r&&Ie&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&Ie.push(u),u}const L=nf;function nf(e,t=null,s=null,o=0,i=null,l=!1){if((!e||e===Sm)&&(e=ft),sa(e)){const c=Ct(e,t,!0);return s&&Gi(c,s),Ua>0&&!l&&Ie&&(c.shapeFlag&6?Ie[Ie.indexOf(e)]=c:Ie.push(c)),c.patchFlag|=-2,c}if(cf(e)&&(e=e.__vccOpts),t){t=A(t);let{class:c,style:u}=t;c&&!qn(c)&&(t.class=Nn(c)),Un(u)&&(Qc(u)&&!rn(u)&&(u=se({},u)),t.style=Jn(u))}const r=qn(e)?1:ou(e)?128:Qm(e)?64:Un(e)?4:mn(e)?2:0;return n(e,t,s,o,i,r,l,!0)}function A(e){return e?Qc(e)||Xs in e?se({},e):e:null}function Ct(e,t,s=!1){const{props:o,ref:i,patchFlag:l,children:r}=e,c=t?U(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&xu(c),ref:t&&t.ref?s&&i?rn(i)?i.concat(ks(t)):[i,ks(t)]:ks(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Mn?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor}}function a(e=" ",t=0){return L(Ki,null,e,t)}function _n(e="",t=!1){return t?(k(),T(ft,null,e)):L(ft,null,e)}function qe(e){return e==null||typeof e=="boolean"?L(ft):rn(e)?L(Mn,null,e.slice()):typeof e=="object"?st(e):L(Ki,null,String(e))}function st(e){return e.el===null||e.memo?e:Ct(e)}function Gi(e,t){let s=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(rn(t))s=16;else if(typeof t=="object")if(o&65){const i=t.default;i&&(i._c&&(i._d=!1),Gi(e,i()),i._c&&(i._d=!0));return}else{s=32;const i=t._;!i&&!(Xs in t)?t._ctx=Yn:i===3&&Yn&&(Yn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else mn(t)?(t={default:t,_ctx:Yn},s=32):(t=String(t),o&64?(s=16,t=[a(t)]):s=8);e.children=t,e.shapeFlag|=s}function U(...e){const t={};for(let s=0;s<e.length;s++){const o=e[s];for(const i in o)if(i==="class")t.class!==o.class&&(t.class=Nn([t.class,o.class]));else if(i==="style")t.style=Jn([t.style,o.style]);else if(qs(i)){const l=t[i],r=o[i];r&&l!==r&&!(rn(l)&&l.includes(r))&&(t[i]=l?[].concat(l,r):r)}else i!==""&&(t[i]=o[i])}return t}function be(e,t,s,o=null){Ae(e,t,7,[s,o])}const ef=wu();let tf=0;function af(e,t,s){const o=e.type,i=(t?t.appContext:e.appContext)||ef,l={uid:tf++,vnode:e,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ku(o,i),emitsOptions:su(o,i),emit:null,emitted:null,propsDefaults:Cn,inheritAttrs:o.inheritAttrs,ctx:Cn,data:Cn,props:Cn,attrs:Cn,slots:Cn,refs:Cn,setupState:Cn,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=gm.bind(null,l),e.ce&&e.ce(l),l}let Vn=null;const Rt=()=>Vn||Yn,oa=e=>{Vn=e,e.scope.on()},It=()=>{Vn&&Vn.scope.off(),Vn=null};function Tu(e){return e.vnode.shapeFlag&4}let Va=!1;function sf(e,t=!1){Va=t;const{props:s,children:o}=e.vnode,i=Tu(e);Nm(e,s,i,t),Dm(e,o);const l=i?of(e,t):void 0;return Va=!1,l}function of(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=Us(new Proxy(e.ctx,Om));const{setup:o}=s;if(o){const i=e.setupContext=o.length>1?rf(e):null;oa(e),ca();const l=ct(o,e,0,[e.props,i]);if(ua(),It(),Pc(l)){if(l.then(It,It),t)return l.then(r=>{Wl(e,r,t)}).catch(r=>{Vs(r,e,0)});e.asyncDep=l}else Wl(e,l,t)}else $u(e,t)}function Wl(e,t,s){mn(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Un(t)&&(e.setupState=Zc(t)),$u(e,s)}let Dl;function $u(e,t,s){const o=e.type;if(!e.render){if(!t&&Dl&&!o.render){const i=o.template;if(i){const{isCustomElement:l,compilerOptions:r}=e.appContext.config,{delimiters:c,compilerOptions:u}=o,p=se(se({isCustomElement:l,delimiters:c},r),u);o.render=Dl(i,p)}}e.render=o.render||Se}oa(e),ca(),Cm(e),ua(),It()}function lf(e){return new Proxy(e.attrs,{get(t,s){return ke(e,"get","$attrs"),t[s]}})}function rf(e){const t=o=>{e.exposed=o||{}};let s;return{get attrs(){return s||(s=lf(e))},slots:e.slots,emit:e.emit,expose:t}}function no(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Zc(Us(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Es)return Es[s](e)}}))}function Ko(e,t=!0){return mn(e)?e.displayName||e.name:e.name||t&&e.__name}function cf(e){return mn(e)&&"__vccOpts"in e}const P=(e,t)=>cm(e,t,Va);function ze(e,t,s){const o=arguments.length;return o===2?Un(t)&&!rn(t)?sa(t)?L(e,null,[t]):L(e,t):L(e,null,t):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&sa(s)&&(s=[s]),L(e,t,s))}const uf="3.2.37",pf="http://www.w3.org/2000/svg",wt=typeof document<"u"?document:null,jl=wt&&wt.createElement("template"),df={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,o)=>{const i=t?wt.createElementNS(pf,e):wt.createElement(e,s?{is:s}:void 0);return e==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:e=>wt.createTextNode(e),createComment:e=>wt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,s,o,i,l){const r=s?s.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),s),!(i===l||!(i=i.nextSibling)););else{jl.innerHTML=o?`<svg>${e}</svg>`:e;const c=jl.content;if(o){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,s)}return[r?r.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function mf(e,t,s){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function ff(e,t,s){const o=e.style,i=qn(s);if(s&&!i){for(const l in s)Go(o,l,s[l]);if(t&&!qn(t))for(const l in t)s[l]==null&&Go(o,l,"")}else{const l=o.display;i?t!==s&&(o.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=l)}}const Bl=/\s*!important$/;function Go(e,t,s){if(rn(s))s.forEach(o=>Go(e,t,o));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const o=gf(e,t);Bl.test(s)?e.setProperty(Ht(o),s.replace(Bl,""),"important"):e[o]=s}}const Ul=["Webkit","Moz","ms"],po={};function gf(e,t){const s=po[t];if(s)return s;let o=Be(t);if(o!=="filter"&&o in e)return po[t]=o;o=js(o);for(let i=0;i<Ul.length;i++){const l=Ul[i]+o;if(l in e)return po[t]=l}return t}const Vl="http://www.w3.org/1999/xlink";function hf(e,t,s,o,i){if(o&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(Vl,t.slice(6,t.length)):e.setAttributeNS(Vl,t,s);else{const l=hd(t);s==null||l&&!Ac(s)?e.removeAttribute(t):e.setAttribute(t,l?"":s)}}function _f(e,t,s,o,i,l,r){if(t==="innerHTML"||t==="textContent"){o&&r(o,i,l),e[t]=s==null?"":s;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const u=s==null?"":s;(e.value!==u||e.tagName==="OPTION")&&(e.value=u),s==null&&e.removeAttribute(t);return}let c=!1;if(s===""||s==null){const u=typeof e[t];u==="boolean"?s=Ac(s):s==null&&u==="string"?(s="",c=!0):u==="number"&&(s=0,c=!0)}try{e[t]=s}catch{}c&&e.removeAttribute(t)}const[Mu,kf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(s&&Number(s[1])<=53)}return[e,t]})();let Qo=0;const vf=Promise.resolve(),bf=()=>{Qo=0},yf=()=>Qo||(vf.then(bf),Qo=Mu());function Vt(e,t,s,o){e.addEventListener(t,s,o)}function wf(e,t,s,o){e.removeEventListener(t,s,o)}function zf(e,t,s,o,i=null){const l=e._vei||(e._vei={}),r=l[t];if(o&&r)r.value=o;else{const[c,u]=xf(t);if(o){const p=l[t]=Tf(o,i);Vt(e,c,p,u)}else r&&(wf(e,c,r,u),l[t]=void 0)}}const Kl=/(?:Once|Passive|Capture)$/;function xf(e){let t;if(Kl.test(e)){t={};let s;for(;s=e.match(Kl);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[Ht(e.slice(2)),t]}function Tf(e,t){const s=o=>{const i=o.timeStamp||Mu();(kf||i>=s.attached-1)&&Ae($f(o,s.value),t,5,[o])};return s.value=e,s.attached=yf(),s}function $f(e,t){if(rn(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(o=>i=>!i._stopped&&o&&o(i))}else return t}const Gl=/^on[a-z]/,Mf=(e,t,s,o,i=!1,l,r,c,u)=>{t==="class"?mf(e,o,i):t==="style"?ff(e,s,o):qs(t)?Mi(t)||zf(e,t,s,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lf(e,t,o,i))?_f(e,t,o,l,r,c,u):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),hf(e,t,o,i))};function Lf(e,t,s,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Gl.test(t)&&mn(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Gl.test(t)&&qn(s)?!1:t in e}const Ql=e=>{const t=e.props["onUpdate:modelValue"]||!1;return rn(t)?s=>Jt(t,s):t};function Ef(e){e.target.composing=!0}function Yl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const If={created(e,{modifiers:{lazy:t,trim:s,number:o}},i){e._assign=Ql(i);const l=o||i.props&&i.props.type==="number";Vt(e,t?"change":"input",r=>{if(r.target.composing)return;let c=e.value;s&&(c=c.trim()),l&&(c=Oo(c)),e._assign(c)}),s&&Vt(e,"change",()=>{e.value=e.value.trim()}),t||(Vt(e,"compositionstart",Ef),Vt(e,"compositionend",Yl),Vt(e,"change",Yl))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:s,trim:o,number:i}},l){if(e._assign=Ql(l),e.composing||document.activeElement===e&&e.type!=="range"&&(s||o&&e.value.trim()===t||(i||e.type==="number")&&Oo(e.value)===t))return;const r=t==null?"":t;e.value!==r&&(e.value=r)}},Sf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zl=(e,t)=>s=>{if(!("key"in s))return;const o=Ht(s.key);if(t.some(i=>i===o||Sf[i]===o))return e(s)},Lu={beforeMount(e,{value:t},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):_a(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:o}){!t!=!s&&(o?t?(o.beforeEnter(e),_a(e,!0),o.enter(e)):o.leave(e,()=>{_a(e,!1)}):_a(e,t))},beforeUnmount(e,{value:t}){_a(e,t)}};function _a(e,t){e.style.display=t?e._vod:"none"}const Af=se({patchProp:Mf},df);let Jl;function Of(){return Jl||(Jl=Vm(Af))}const Cf=(...e)=>{const t=Of().createApp(...e),{mount:s}=t;return t.mount=o=>{const i=Pf(o);if(!i)return;const l=t._component;!mn(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.innerHTML="";const r=s(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function Pf(e){return qn(e)?document.querySelector(e):e}var Hf=Object.defineProperty,Xl=Object.getOwnPropertySymbols,Rf=Object.prototype.hasOwnProperty,Ff=Object.prototype.propertyIsEnumerable,nr=(e,t,s)=>t in e?Hf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Nf=(e,t)=>{for(var s in t||(t={}))Rf.call(t,s)&&nr(e,s,t[s]);if(Xl)for(var s of Xl(t))Ff.call(t,s)&&nr(e,s,t[s]);return e},Eu="usehead",er="head:count",mo="data-head-attrs",Iu="data-meta-body",qf=(e,t,s)=>{const o=s.createElement(e);for(const i of Object.keys(t))if(i==="body"&&t.body===!0)o.setAttribute(Iu,"true");else{let l=t[i];if(i==="key"||l===!1)continue;i==="children"?o.textContent=l:o.setAttribute(i,l)}return o};function tr(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const s=t.getAttribute("nonce");if(s&&!e.getAttribute("nonce")){const o=t.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=s,s===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(t)}var Wf=e=>{const t=["key","id","name","property"];for(const s of t){const o=typeof e.getAttribute=="function"?e.hasAttribute(s)?e.getAttribute(s):void 0:e[s];if(o!==void 0)return{name:s,value:o}}},Df=()=>{const e=x(Eu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},jf=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Bf=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(z(t)),Uf=e=>{const t=[],s=Object.keys(e);for(const o of s)if(e[o]!=null)switch(o){case"title":t.push({tag:o,props:{children:e[o]}});break;case"titleTemplate":break;case"base":t.push({tag:o,props:Nf({key:"default"},e[o])});break;default:if(jf.includes(o)){const i=e[o];Array.isArray(i)?i.forEach(l=>{t.push({tag:o,props:l})}):i&&t.push({tag:o,props:i})}break}return t},ar=(e,t)=>{const s=e.getAttribute(mo);if(s)for(const i of s.split(","))i in t||e.removeAttribute(i);const o=[];for(const i in t){const l=t[i];l!=null&&(l===!1?e.removeAttribute(i):e.setAttribute(i,l),o.push(i))}o.length?e.setAttribute(mo,o.join(",")):e.removeAttribute(mo)},Vf=(e=window.document,t,s)=>{var o,i;const l=e.head,r=e.body;let c=l.querySelector(`meta[name="${er}"]`),u=r.querySelectorAll(`[${Iu}]`);const p=c?Number(c.getAttribute("content")):0,d=[],f=[];if(u)for(let g=0;g<u.length;g++)u[g]&&((o=u[g].tagName)==null?void 0:o.toLowerCase())===t&&f.push(u[g]);if(c)for(let g=0,h=c.previousElementSibling;g<p;g++,h=(h==null?void 0:h.previousElementSibling)||null)((i=h==null?void 0:h.tagName)==null?void 0:i.toLowerCase())===t&&d.push(h);else c=e.createElement("meta"),c.setAttribute("name",er),c.setAttribute("content","0"),l.append(c);let m=s.map(g=>{var h;return{element:qf(g.tag,g.props,e),body:(h=g.props.body)!=null?h:!1}});m=m.filter(g=>{for(let h=0;h<d.length;h++){const w=d[h];if(tr(w,g.element))return d.splice(h,1),!1}for(let h=0;h<f.length;h++){const w=f[h];if(tr(w,g.element))return f.splice(h,1),!1}return!0}),f.forEach(g=>{var h;return(h=g.parentNode)==null?void 0:h.removeChild(g)}),d.forEach(g=>{var h;return(h=g.parentNode)==null?void 0:h.removeChild(g)}),m.forEach(g=>{g.body===!0?r.insertAdjacentElement("beforeend",g.element):l.insertBefore(g.element,c)}),c.setAttribute("content",""+(p-d.length+m.filter(g=>!g.body).length))},Kf=e=>{let t=[],s=new Set;e&&t.push(Ce(e));const o={install(i){i.config.globalProperties.$head=o,i.provide(Eu,o)},get headTags(){const i=[],l=t.map(r=>z(r).titleTemplate).reverse().find(r=>r!=null);return t.forEach(r=>{Uf(z(r)).forEach(u=>{if(u.tag==="meta"||u.tag==="base"||u.tag==="script"){const p=Wf(u.props);if(p){let d=-1;for(let f=0;f<i.length;f++){const m=i[f],g=m.props[p.name],h=u.props[p.name];if(m.tag===u.tag&&g===h){d=f;break}}d!==-1&&i.splice(d,1)}}l&&u.tag==="title"&&(u.props.children=Bf(l,u.props.children)),i.push(u)})}),i},addHeadObjs(i){t.push(i)},removeHeadObjs(i){t=t.filter(l=>l!==i)},updateDOM(i=window.document){let l,r={},c={};const u={};for(const d of o.headTags){if(d.tag==="title"){l=d.props.children;continue}if(d.tag==="htmlAttrs"){Object.assign(r,d.props);continue}if(d.tag==="bodyAttrs"){Object.assign(c,d.props);continue}u[d.tag]=u[d.tag]||[],u[d.tag].push(d)}l!==void 0&&(i.title=l),ar(i.documentElement,r),ar(i.body,c);const p=new Set([...Object.keys(u),...s]);for(const d of p)Vf(i,d,u[d]||[]);s.clear(),Object.keys(u).forEach(d=>s.add(d))}};return o},Gf=typeof window<"u",Qf=e=>{const t=Df(),s=Q(e);t.addHeadObjs(s),Gf&&(es(()=>{t.updateDOM()}),Zs(()=>{t.removeHeadObjs(s),t.updateDOM()}))};const Sa=Symbol("v-click-clicks"),zt=Symbol("v-click-clicks-elements"),Yo=Symbol("v-click-clicks-order-map"),Aa=Symbol("v-click-clicks-disabled"),Su=Symbol("slidev-slide-scale"),$=Symbol("slidev-slidev-context"),Yf=Symbol("slidev-route"),Zf=Symbol("slidev-slide-context"),yt="slidev-vclick-target",fo="slidev-vclick-hidden",Jf="slidev-vclick-fade",go="slidev-vclick-hidden-explicitly",ka="slidev-vclick-current",ms="slidev-vclick-prior";function Zo(e,t){if(!e)return!1;const s=e.indexOf(t);return s>=0?(e.splice(s,1),!0):!1}function Xf(...e){let t,s,o;e.length===1?(t=0,o=1,[s]=e):[t,s,o=1]=e;const i=[];let l=t;for(;l<s;)i.push(l),l+=o||1;return i}function ng(e){return e!=null}function eg(e,t){return Object.fromEntries(Object.entries(e).map(([s,o])=>t(s,o)).filter(ng))}const $t={theme:"default",title:"Hyper Text Markup Language",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",version:"1.4.3"},xn=$t;var Ic;const ut=(Ic=xn.aspectRatio)!=null?Ic:16/9;var Sc;const St=(Sc=xn.canvasWidth)!=null?Sc:980,Au=Math.round(St/ut),Ou=P(()=>eg(xn.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function xe(e,t,s){Object.defineProperty(e,t,{value:s,writable:!0,enumerable:!1})}const Ft=Fn({page:0,clicks:0});let tg=[],ag=[];xe(Ft,"$syncUp",!0);xe(Ft,"$syncDown",!0);xe(Ft,"$paused",!1);xe(Ft,"$onSet",e=>tg.push(e));xe(Ft,"$onPatch",e=>ag.push(e));xe(Ft,"$patch",async()=>!1);function Cu(e,t,s=!1){const o=[];let i=!1,l=!1,r,c;const u=Fn(t);function p(g){o.push(g)}function d(g,h){clearTimeout(r),i=!0,u[g]=h,r=setTimeout(()=>i=!1,0)}function f(g){i||(clearTimeout(c),l=!0,Object.entries(g).forEach(([h,w])=>{u[h]=w}),c=setTimeout(()=>l=!1,0))}function m(g){let h;s?s&&window.addEventListener("storage",y=>{y&&y.key===g&&y.newValue&&f(JSON.parse(y.newValue))}):(h=new BroadcastChannel(g),h.addEventListener("message",y=>f(y.data)));function w(){!s&&h&&!l?h.postMessage(Tn(u)):s&&!l&&window.localStorage.setItem(g,JSON.stringify(u)),i||o.forEach(y=>y(u))}if(fn(u,w,{deep:!0}),s){const y=window.localStorage.getItem(g);y&&f(JSON.parse(y))}}return{init:m,onPatch:p,patch:d,state:u}}const{init:sg,onPatch:og,patch:sr,state:ho}=Cu(Ft,{page:1,clicks:0}),Nt=Fn({});let ig=[],lg=[];xe(Nt,"$syncUp",!0);xe(Nt,"$syncDown",!0);xe(Nt,"$paused",!1);xe(Nt,"$onSet",e=>ig.push(e));xe(Nt,"$onPatch",e=>lg.push(e));xe(Nt,"$patch",async()=>!1);const{init:rg,onPatch:cg,patch:Pu,state:Ss}=Cu(Nt,{},!1),ug="modulepreload",pg=function(e){return"/TPSI/4/html/"+e},or={},da=function(t,s,o){return!s||s.length===0?t():Promise.all(s.map(i=>{if(i=pg(i),i in or)return;or[i]=!0;const l=i.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${r}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":ug,l||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),l)return new Promise((u,p)=>{c.addEventListener("load",u),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function re(e,t,s){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,s),s):(e[t]=s,s)}function dg(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}var ir;const Pe=typeof window<"u",mg=e=>typeof e<"u",fg=e=>typeof e=="function",Hu=e=>typeof e=="string",Jo=()=>+Date.now(),vs=()=>{};Pe&&((ir=window==null?void 0:window.navigator)==null?void 0:ir.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function te(e){return typeof e=="function"?e():z(e)}function gg(e,t){function s(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return s}const Ru=e=>e();function hg(e=Ru){const t=Q(!0);function s(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:s,resume:o,eventFilter:(...l)=>{t.value&&e(...l)}}}function _g(e){return e}function kg(e,t){var s;if(typeof e=="number")return e+t;const o=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",i=e.slice(o.length),l=parseFloat(o)+t;return Number.isNaN(l)?e:l+i}function gt(e){return Si()?(Ai(e),!0):!1}function vg(e){if(!$n(e))return Fn(e);const t=new Proxy({},{get(s,o,i){return z(Reflect.get(e.value,o,i))},set(s,o,i){return $n(e.value[o])&&!$n(i)?e.value[o].value=i:e.value[o]=i,!0},deleteProperty(s,o){return Reflect.deleteProperty(e.value,o)},has(s,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Fn(t)}function bg(e){return typeof e=="function"?P(e):Q(e)}var yg=Object.defineProperty,wg=Object.defineProperties,zg=Object.getOwnPropertyDescriptors,lr=Object.getOwnPropertySymbols,xg=Object.prototype.hasOwnProperty,Tg=Object.prototype.propertyIsEnumerable,rr=(e,t,s)=>t in e?yg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,$g=(e,t)=>{for(var s in t||(t={}))xg.call(t,s)&&rr(e,s,t[s]);if(lr)for(var s of lr(t))Tg.call(t,s)&&rr(e,s,t[s]);return e},Mg=(e,t)=>wg(e,zg(t));function Lg(e){if(!$n(e))return om(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)t[s]=sm(()=>({get(){return e.value[s]},set(o){if(Array.isArray(e.value)){const i=[...e.value];i[s]=o,e.value=i}else{const i=Mg($g({},e.value),{[s]:o});Object.setPrototypeOf(i,e.value),e.value=i}}}));return t}function Eg(e,t=!0){Rt()?pu(e):t?e():Gn(e)}function Fu(e,t=!0){Rt()?pa(e):t?e():Gn(e)}function Ig(e,t=1e3,s={}){const{immediate:o=!0,immediateCallback:i=!1}=s;let l=null;const r=Q(!1);function c(){l&&(clearInterval(l),l=null)}function u(){r.value=!1,c()}function p(){z(t)<=0||(r.value=!0,i&&e(),c(),l=setInterval(e,te(t)))}if(o&&Pe&&p(),$n(t)){const d=fn(t,()=>{r.value&&Pe&&p()});gt(d)}return gt(u),{isActive:r,pause:u,resume:p}}function Sg(e,t,s={}){const{immediate:o=!0}=s,i=Q(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){i.value=!1,r()}function u(...p){r(),i.value=!0,l=setTimeout(()=>{i.value=!1,l=null,e(...p)},te(t))}return o&&(i.value=!0,Pe&&u()),gt(c),{isPending:i,start:u,stop:c}}function Nu(e=!1,t={}){const{truthyValue:s=!0,falsyValue:o=!1}=t,i=$n(e),l=Q(e);function r(c){if(arguments.length)return l.value=c,l.value;{const u=te(s);return l.value=l.value===u?te(o):u,l.value}}return i?r:[l,r]}var cr=Object.getOwnPropertySymbols,Ag=Object.prototype.hasOwnProperty,Og=Object.prototype.propertyIsEnumerable,Cg=(e,t)=>{var s={};for(var o in e)Ag.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&cr)for(var o of cr(e))t.indexOf(o)<0&&Og.call(e,o)&&(s[o]=e[o]);return s};function Pg(e,t,s={}){const o=s,{eventFilter:i=Ru}=o,l=Cg(o,["eventFilter"]);return fn(e,gg(i,t),l)}var Hg=Object.defineProperty,Rg=Object.defineProperties,Fg=Object.getOwnPropertyDescriptors,As=Object.getOwnPropertySymbols,qu=Object.prototype.hasOwnProperty,Wu=Object.prototype.propertyIsEnumerable,ur=(e,t,s)=>t in e?Hg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ng=(e,t)=>{for(var s in t||(t={}))qu.call(t,s)&&ur(e,s,t[s]);if(As)for(var s of As(t))Wu.call(t,s)&&ur(e,s,t[s]);return e},qg=(e,t)=>Rg(e,Fg(t)),Wg=(e,t)=>{var s={};for(var o in e)qu.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&As)for(var o of As(e))t.indexOf(o)<0&&Wu.call(e,o)&&(s[o]=e[o]);return s};function Dg(e,t,s={}){const o=s,{eventFilter:i}=o,l=Wg(o,["eventFilter"]),{eventFilter:r,pause:c,resume:u,isActive:p}=hg(i);return{stop:Pg(e,t,qg(Ng({},l),{eventFilter:r})),pause:c,resume:u,isActive:p}}function it(e){var t;const s=te(e);return(t=s==null?void 0:s.$el)!=null?t:s}const oe=Pe?window:void 0,jg=Pe?window.document:void 0,Bg=Pe?window.navigator:void 0;function Ln(...e){let t,s,o,i;if(Hu(e[0])?([s,o,i]=e,t=oe):[t,s,o,i]=e,!t)return vs;let l=vs;const r=fn(()=>it(t),u=>{l(),u&&(u.addEventListener(s,o,i),l=()=>{u.removeEventListener(s,o,i),l=vs})},{immediate:!0,flush:"post"}),c=()=>{r(),l()};return gt(c),c}function Ug(e,t,s={}){const{window:o=oe,ignore:i,capture:l=!0,detectIframe:r=!1}=s;if(!o)return;const c=Q(!0);let u;const p=m=>{o.clearTimeout(u);const g=it(e),h=m.composedPath();!g||g===m.target||h.includes(g)||!c.value||i&&i.length>0&&i.some(w=>{const y=it(w);return y&&(m.target===y||h.includes(y))})||t(m)},d=[Ln(o,"click",p,{passive:!0,capture:l}),Ln(o,"pointerdown",m=>{const g=it(e);c.value=!!g&&!m.composedPath().includes(g)},{passive:!0}),Ln(o,"pointerup",m=>{if(m.button===0){const g=m.composedPath();m.composedPath=()=>g,u=o.setTimeout(()=>p(m),50)}},{passive:!0}),r&&Ln(o,"blur",m=>{var g;const h=it(e);((g=document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(h!=null&&h.contains(document.activeElement))&&t(m)})].filter(Boolean);return()=>d.forEach(m=>m())}const Vg=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Kg(e,t,s={}){const{target:o=oe,eventName:i="keydown",passive:l=!1}=s,r=Vg(e);return Ln(o,i,u=>{r(u)&&t(u)},l)}function Gg(e={}){const{window:t=oe}=e,s=Q(0);return t&&(Ln(t,"blur",()=>s.value+=1,!0),Ln(t,"focus",()=>s.value+=1,!0)),P(()=>(s.value,t==null?void 0:t.document.activeElement))}function eo(e,t=!1){const s=Q(),o=()=>s.value=Boolean(e());return o(),Fu(o,t),s}function bs(e,t={}){const{window:s=oe}=t,o=eo(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let i;const l=Q(!1),r=()=>{!o.value||(i||(i=s.matchMedia(e)),l.value=i.matches)};return Eg(()=>{r(),i&&("addEventListener"in i?i.addEventListener("change",r):i.addListener(r),gt(()=>{"removeEventListener"in i?i.removeEventListener("change",r):i.removeListener(r)}))}),l}const Qg={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Yg=Object.defineProperty,pr=Object.getOwnPropertySymbols,Zg=Object.prototype.hasOwnProperty,Jg=Object.prototype.propertyIsEnumerable,dr=(e,t,s)=>t in e?Yg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Xg=(e,t)=>{for(var s in t||(t={}))Zg.call(t,s)&&dr(e,s,t[s]);if(pr)for(var s of pr(t))Jg.call(t,s)&&dr(e,s,t[s]);return e};function nh(e,t={}){function s(c,u){let p=e[c];return u!=null&&(p=kg(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=oe}=t;function i(c){return o?o.matchMedia(c).matches:!1}const l=c=>bs(`(min-width: ${s(c)})`,t),r=Object.keys(e).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>l(u),enumerable:!0,configurable:!0}),c),{});return Xg({greater:l,smaller(c){return bs(`(max-width: ${s(c,-.1)})`,t)},between(c,u){return bs(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`,t)},isGreater(c){return i(`(min-width: ${s(c)})`)},isSmaller(c){return i(`(max-width: ${s(c,-.1)})`)},isInBetween(c,u){return i(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`)}},r)}function eh(e={}){const{navigator:t=Bg,read:s=!1,source:o,copiedDuring:i=1500}=e,l=["copy","cut"],r=eo(()=>t&&"clipboard"in t),c=Q(""),u=Q(!1),p=Sg(()=>u.value=!1,i);function d(){t.clipboard.readText().then(m=>{c.value=m})}if(r.value&&s)for(const m of l)Ln(m,d);async function f(m=te(o)){r.value&&m!=null&&(await t.clipboard.writeText(m),c.value=m,u.value=!0,p.start())}return{isSupported:r,text:c,copied:u,copy:f}}const Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ni="__vueuse_ssr_handlers__";Xo[ni]=Xo[ni]||{};const th=Xo[ni];function ah(e,t){return th[e]||t}function sh(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var oh=Object.defineProperty,mr=Object.getOwnPropertySymbols,ih=Object.prototype.hasOwnProperty,lh=Object.prototype.propertyIsEnumerable,fr=(e,t,s)=>t in e?oh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,gr=(e,t)=>{for(var s in t||(t={}))ih.call(t,s)&&fr(e,s,t[s]);if(mr)for(var s of mr(t))lh.call(t,s)&&fr(e,s,t[s]);return e};const rh={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Re(e,t,s,o={}){var i;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:f=oe,eventFilter:m,onError:g=G=>{console.error(G)}}=o,h=(d?Ce:Q)(t);if(!s)try{s=ah("getDefaultStorage",()=>{var G;return(G=oe)==null?void 0:G.localStorage})()}catch(G){g(G)}if(!s)return h;const w=te(t),y=sh(w),S=(i=o.serializer)!=null?i:rh[y],{pause:I,resume:E}=Dg(h,()=>C(h.value),{flush:l,deep:r,eventFilter:m});return f&&c&&Ln(f,"storage",D),D(),h;function C(G){try{G==null?s.removeItem(e):s.setItem(e,S.write(G))}catch(on){g(on)}}function B(G){if(!(G&&G.key!==e)){I();try{const on=G?G.newValue:s.getItem(e);if(on==null)return u&&w!==null&&s.setItem(e,S.write(w)),w;if(!G&&p){const pn=S.read(on);return fg(p)?p(pn,w):y==="object"&&!Array.isArray(pn)?gr(gr({},w),pn):pn}else return typeof on!="string"?on:S.read(on)}catch(on){g(on)}finally{E()}}}function D(G){G&&G.key!==e||(h.value=B(G))}}function ch(e){return bs("(prefers-color-scheme: dark)",e)}var uh=Object.defineProperty,ph=Object.defineProperties,dh=Object.getOwnPropertyDescriptors,hr=Object.getOwnPropertySymbols,mh=Object.prototype.hasOwnProperty,fh=Object.prototype.propertyIsEnumerable,_r=(e,t,s)=>t in e?uh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,gh=(e,t)=>{for(var s in t||(t={}))mh.call(t,s)&&_r(e,s,t[s]);if(hr)for(var s of hr(t))fh.call(t,s)&&_r(e,s,t[s]);return e},hh=(e,t)=>ph(e,dh(t));function bC(e,t={}){var s,o;const i=(s=t.draggingElement)!=null?s:oe,l=Q((o=te(t.initialValue))!=null?o:{x:0,y:0}),r=Q(),c=m=>t.pointerTypes?t.pointerTypes.includes(m.pointerType):!0,u=m=>{te(t.preventDefault)&&m.preventDefault(),te(t.stopPropagation)&&m.stopPropagation()},p=m=>{var g;if(!c(m)||te(t.exact)&&m.target!==te(e))return;const h=te(e).getBoundingClientRect(),w={x:m.pageX-h.left,y:m.pageY-h.top};((g=t.onStart)==null?void 0:g.call(t,w,m))!==!1&&(r.value=w,u(m))},d=m=>{var g;!c(m)||!r.value||(l.value={x:m.pageX-r.value.x,y:m.pageY-r.value.y},(g=t.onMove)==null||g.call(t,l.value,m),u(m))},f=m=>{var g;!c(m)||!r.value||(r.value=void 0,(g=t.onEnd)==null||g.call(t,l.value,m),u(m))};return Pe&&(Ln(e,"pointerdown",p,!0),Ln(i,"pointermove",d,!0),Ln(i,"pointerup",f,!0)),hh(gh({},Lg(l)),{position:l,isDragging:P(()=>!!r.value),style:P(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var kr=Object.getOwnPropertySymbols,_h=Object.prototype.hasOwnProperty,kh=Object.prototype.propertyIsEnumerable,vh=(e,t)=>{var s={};for(var o in e)_h.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&kr)for(var o of kr(e))t.indexOf(o)<0&&kh.call(e,o)&&(s[o]=e[o]);return s};function bh(e,t,s={}){const o=s,{window:i=oe}=o,l=vh(o,["window"]);let r;const c=eo(()=>i&&"ResizeObserver"in i),u=()=>{r&&(r.disconnect(),r=void 0)},p=fn(()=>it(e),f=>{u(),c.value&&i&&f&&(r=new ResizeObserver(t),r.observe(f,l))},{immediate:!0,flush:"post"}),d=()=>{u(),p()};return gt(d),{isSupported:c,stop:d}}function yh(e,t={}){const{immediate:s=!0,window:o=oe}=t,i=Q(!1);let l=null;function r(){!i.value||!o||(e(),l=o.requestAnimationFrame(r))}function c(){!i.value&&o&&(i.value=!0,r())}function u(){i.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return s&&c(),gt(u),{isActive:i,pause:u,resume:c}}function wh(e,t={width:0,height:0},s={}){const o=Q(t.width),i=Q(t.height);return bh(e,([l])=>{o.value=l.contentRect.width,i.value=l.contentRect.height},s),fn(()=>it(e),l=>{o.value=l?t.width:0,i.value=l?t.height:0}),{width:o,height:i}}const vr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function zh(e,t={}){const{document:s=jg,autoExit:o=!1}=t,i=e||(s==null?void 0:s.querySelector("html")),l=Q(!1);let r=vr[0];const c=eo(()=>{if(s){for(const w of vr)if(w[1]in s)return r=w,!0}else return!1;return!1}),[u,p,d,,f]=r;async function m(){!c.value||(s!=null&&s[d]&&await s[p](),l.value=!1)}async function g(){if(!c.value)return;await m();const w=it(i);w&&(await w[u](),l.value=!0)}async function h(){l.value?await m():await g()}return s&&Ln(s,f,()=>{l.value=!!(s!=null&&s[d])},!1),o&&gt(m),{isSupported:c,isFullscreen:l,enter:g,exit:m,toggle:h}}const xh={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Th(e={}){const{reactive:t=!1,target:s=oe,aliasMap:o=xh,passive:i=!0,onEventFired:l=vs}=e,r=Fn(new Set),c={toJSON(){return{}},current:r},u=t?Fn(c):c,p=new Set,d=new Set;function f(w,y){w in u&&(t?u[w]=y:u[w].value=y)}function m(){for(const w of d)f(w,!1)}function g(w,y){var S,I;const E=(S=w.key)==null?void 0:S.toLowerCase(),B=[(I=w.code)==null?void 0:I.toLowerCase(),E].filter(Boolean);E&&(y?r.add(E):r.delete(E));for(const D of B)d.add(D),f(D,y);E==="meta"&&!y?(p.forEach(D=>{r.delete(D),f(D,!1)}),p.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&y&&[...r,...B].forEach(D=>p.add(D))}Ln(s,"keydown",w=>(g(w,!0),l(w)),{passive:i}),Ln(s,"keyup",w=>(g(w,!1),l(w)),{passive:i}),Ln("blur",m,{passive:!0}),Ln("focus",m,{passive:!0});const h=new Proxy(u,{get(w,y,S){if(typeof y!="string")return Reflect.get(w,y,S);if(y=y.toLowerCase(),y in o&&(y=o[y]),!(y in u))if(/[+_-]/.test(y)){const E=y.split(/[+_-]/g).map(C=>C.trim());u[y]=P(()=>E.every(C=>z(h[C])))}else u[y]=Q(!1);const I=Reflect.get(w,y,S);return t?z(I):I}});return h}function yC(e={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:i={x:0,y:0},window:l=oe,eventFilter:r}=e,c=Q(i.x),u=Q(i.y),p=Q(null),d=w=>{t==="page"?(c.value=w.pageX,u.value=w.pageY):t==="client"&&(c.value=w.clientX,u.value=w.clientY),p.value="mouse"},f=()=>{c.value=i.x,u.value=i.y},m=w=>{if(w.touches.length>0){const y=w.touches[0];t==="page"?(c.value=y.pageX,u.value=y.pageY):t==="client"&&(c.value=y.clientX,u.value=y.clientY),p.value="touch"}},g=w=>r===void 0?d(w):r(()=>d(w),{}),h=w=>r===void 0?m(w):r(()=>m(w),{});return l&&(Ln(l,"mousemove",g,{passive:!0}),Ln(l,"dragover",g,{passive:!0}),s&&(Ln(l,"touchstart",h,{passive:!0}),Ln(l,"touchmove",h,{passive:!0}),o&&Ln(l,"touchend",f,{passive:!0}))),{x:c,y:u,sourceType:p}}var Ye;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ye||(Ye={}));function $h(e,t={}){const s=bg(e),{threshold:o=50,onSwipe:i,onSwipeEnd:l,onSwipeStart:r}=t,c=Fn({x:0,y:0}),u=(D,G)=>{c.x=D,c.y=G},p=Fn({x:0,y:0}),d=(D,G)=>{p.x=D,p.y=G},f=P(()=>c.x-p.x),m=P(()=>c.y-p.y),{max:g,abs:h}=Math,w=P(()=>g(h(f.value),h(m.value))>=o),y=Q(!1),S=Q(!1),I=P(()=>w.value?h(f.value)>h(m.value)?f.value>0?Ye.LEFT:Ye.RIGHT:m.value>0?Ye.UP:Ye.DOWN:Ye.NONE),E=D=>t.pointerTypes?t.pointerTypes.includes(D.pointerType):!0,C=[Ln(e,"pointerdown",D=>{var G,on;if(!E(D))return;S.value=!0,(on=(G=s.value)==null?void 0:G.style)==null||on.setProperty("touch-action","none");const pn=D.target;pn==null||pn.setPointerCapture(D.pointerId);const{clientX:kn,clientY:yn}=D;u(kn,yn),d(kn,yn),r==null||r(D)}),Ln(e,"pointermove",D=>{if(!E(D)||!S.value)return;const{clientX:G,clientY:on}=D;d(G,on),!y.value&&w.value&&(y.value=!0),y.value&&(i==null||i(D))}),Ln(e,"pointerup",D=>{var G,on;!E(D)||(y.value&&(l==null||l(D,I.value)),S.value=!1,y.value=!1,(on=(G=s.value)==null?void 0:G.style)==null||on.setProperty("touch-action","initial"))})],B=()=>C.forEach(D=>D());return{isSwiping:Gt(y),direction:Gt(I),posStart:Gt(c),posEnd:Gt(p),distanceX:f,distanceY:m,stop:B}}var Mh=Object.defineProperty,br=Object.getOwnPropertySymbols,Lh=Object.prototype.hasOwnProperty,Eh=Object.prototype.propertyIsEnumerable,yr=(e,t,s)=>t in e?Mh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ih=(e,t)=>{for(var s in t||(t={}))Lh.call(t,s)&&yr(e,s,t[s]);if(br)for(var s of br(t))Eh.call(t,s)&&yr(e,s,t[s]);return e};function wC(e={}){const{controls:t=!1,offset:s=0,immediate:o=!0,interval:i="requestAnimationFrame"}=e,l=Q(Jo()+s),r=()=>l.value=Jo()+s,c=i==="requestAnimationFrame"?yh(r,{immediate:o}):Ig(r,i,{immediate:o});return t?Ih({timestamp:l},c):l}var Sh=Object.defineProperty,wr=Object.getOwnPropertySymbols,Ah=Object.prototype.hasOwnProperty,Oh=Object.prototype.propertyIsEnumerable,zr=(e,t,s)=>t in e?Sh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ch=(e,t)=>{for(var s in t||(t={}))Ah.call(t,s)&&zr(e,s,t[s]);if(wr)for(var s of wr(t))Oh.call(t,s)&&zr(e,s,t[s]);return e};const Ph={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ch({linear:_g},Ph);function De(e,t,s,o={}){var i,l,r;const{passive:c=!1,eventName:u,deep:p=!1,defaultValue:d}=o,f=Rt(),m=s||(f==null?void 0:f.emit)||((i=f==null?void 0:f.$emit)==null?void 0:i.bind(f))||((r=(l=f==null?void 0:f.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(f==null?void 0:f.proxy));let g=u;t||(t="modelValue"),g=u||g||`update:${t.toString()}`;const h=()=>mg(e[t])?e[t]:d;if(c){const w=Q(h());return fn(()=>e[t],y=>w.value=y),fn(w,y=>{(y!==e[t]||p)&&m(g,y)},{deep:p}),w}else return P({get(){return h()},set(w){m(g,w)}})}function zC({window:e=oe}={}){if(!e)return Q(!1);const t=Q(e.document.hasFocus());return Ln(e,"blur",()=>{t.value=!1}),Ln(e,"focus",()=>{t.value=!0}),t}function Hh(e={}){const{window:t=oe,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:i=!0}=e,l=Q(s),r=Q(o),c=()=>{t&&(l.value=t.innerWidth,r.value=t.innerHeight)};return c(),Fu(c),Ln("resize",c,{passive:!0}),i&&Ln("orientationchange",c,{passive:!0}),{width:l,height:r}}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kt=typeof window<"u";function Rh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const On=Object.assign;function _o(e,t){const s={};for(const o in t){const i=t[o];s[o]=He(i)?i.map(e):e(i)}return s}const Oa=()=>{},He=Array.isArray,Fh=/\/$/,Nh=e=>e.replace(Fh,"");function ko(e,t,s="/"){let o,i={},l="",r="";const c=t.indexOf("#");let u=t.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(o=t.slice(0,u),l=t.slice(u+1,c>-1?c:t.length),i=e(l)),c>-1&&(o=o||t.slice(0,c),r=t.slice(c,t.length)),o=jh(o!=null?o:t,s),{fullPath:o+(l&&"?")+l+r,path:o,query:i,hash:r}}function qh(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function xr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Wh(e,t,s){const o=t.matched.length-1,i=s.matched.length-1;return o>-1&&o===i&&ia(t.matched[o],s.matched[i])&&Du(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function ia(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Du(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!Dh(e[s],t[s]))return!1;return!0}function Dh(e,t){return He(e)?Tr(e,t):He(t)?Tr(t,e):e===t}function Tr(e,t){return He(t)?e.length===t.length&&e.every((s,o)=>s===t[o]):e.length===1&&e[0]===t}function jh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),o=e.split("/");let i=s.length-1,l,r;for(l=0;l<o.length;l++)if(r=o[l],r!==".")if(r==="..")i>1&&i--;else break;return s.slice(0,i).join("/")+"/"+o.slice(l-(l===o.length?1:0)).join("/")}var Ka;(function(e){e.pop="pop",e.push="push"})(Ka||(Ka={}));var Ca;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ca||(Ca={}));function Bh(e){if(!e)if(Kt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Nh(e)}const Uh=/^[^#]+#/;function Vh(e,t){return e.replace(Uh,"#")+t}function Kh(e,t){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-s.left-(t.left||0),top:o.top-s.top-(t.top||0)}}const to=()=>({left:window.pageXOffset,top:window.pageYOffset});function Gh(e){let t;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#"),i=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!i)return;t=Kh(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $r(e,t){return(history.state?history.state.position-t:-1)+e}const ei=new Map;function Qh(e,t){ei.set(e,t)}function Yh(e){const t=ei.get(e);return ei.delete(e),t}let Zh=()=>location.protocol+"//"+location.host;function ju(e,t){const{pathname:s,search:o,hash:i}=t,l=e.indexOf("#");if(l>-1){let c=i.includes(e.slice(l))?e.slice(l).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),xr(u,"")}return xr(s,e)+o+i}function Jh(e,t,s,o){let i=[],l=[],r=null;const c=({state:m})=>{const g=ju(e,location),h=s.value,w=t.value;let y=0;if(m){if(s.value=g,t.value=m,r&&r===h){r=null;return}y=w?m.position-w.position:0}else o(g);i.forEach(S=>{S(s.value,h,{delta:y,type:Ka.pop,direction:y?y>0?Ca.forward:Ca.back:Ca.unknown})})};function u(){r=s.value}function p(m){i.push(m);const g=()=>{const h=i.indexOf(m);h>-1&&i.splice(h,1)};return l.push(g),g}function d(){const{history:m}=window;!m.state||m.replaceState(On({},m.state,{scroll:to()}),"")}function f(){for(const m of l)m();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:p,destroy:f}}function Mr(e,t,s,o=!1,i=!1){return{back:e,current:t,forward:s,replaced:o,position:window.history.length,scroll:i?to():null}}function Xh(e){const{history:t,location:s}=window,o={value:ju(e,s)},i={value:t.state};i.value||l(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(u,p,d){const f=e.indexOf("#"),m=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+u:Zh()+e+u;try{t[d?"replaceState":"pushState"](p,"",m),i.value=p}catch(g){console.error(g),s[d?"replace":"assign"](m)}}function r(u,p){const d=On({},t.state,Mr(i.value.back,u,i.value.forward,!0),p,{position:i.value.position});l(u,d,!0),o.value=u}function c(u,p){const d=On({},i.value,t.state,{forward:u,scroll:to()});l(d.current,d,!0);const f=On({},Mr(o.value,u,null),{position:d.position+1},p);l(u,f,!1),o.value=u}return{location:o,state:i,push:c,replace:r}}function n_(e){e=Bh(e);const t=Xh(e),s=Jh(e,t.state,t.location,t.replace);function o(l,r=!0){r||s.pauseListeners(),history.go(l)}const i=On({location:"",base:e,go:o,createHref:Vh.bind(null,e)},t,s);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function e_(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),n_(e)}function t_(e){return typeof e=="string"||e&&typeof e=="object"}function Bu(e){return typeof e=="string"||typeof e=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Uu=Symbol("");var Lr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Lr||(Lr={}));function la(e,t){return On(new Error,{type:e,[Uu]:!0},t)}function Ve(e,t){return e instanceof Error&&Uu in e&&(t==null||!!(e.type&t))}const Er="[^/]+?",a_={sensitive:!1,strict:!1,start:!0,end:!0},s_=/[.+*?^${}()[\]/\\]/g;function o_(e,t){const s=On({},a_,t),o=[];let i=s.start?"^":"";const l=[];for(const p of e){const d=p.length?[]:[90];s.strict&&!p.length&&(i+="/");for(let f=0;f<p.length;f++){const m=p[f];let g=40+(s.sensitive?.25:0);if(m.type===0)f||(i+="/"),i+=m.value.replace(s_,"\\$&"),g+=40;else if(m.type===1){const{value:h,repeatable:w,optional:y,regexp:S}=m;l.push({name:h,repeatable:w,optional:y});const I=S||Er;if(I!==Er){g+=10;try{new RegExp(`(${I})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${h}" (${I}): `+C.message)}}let E=w?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;f||(E=y&&p.length<2?`(?:/${E})`:"/"+E),y&&(E+="?"),i+=E,g+=20,y&&(g+=-8),w&&(g+=-20),I===".*"&&(g+=-50)}d.push(g)}o.push(d)}if(s.strict&&s.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}s.strict||(i+="/?"),s.end?i+="$":s.strict&&(i+="(?:/|$)");const r=new RegExp(i,s.sensitive?"":"i");function c(p){const d=p.match(r),f={};if(!d)return null;for(let m=1;m<d.length;m++){const g=d[m]||"",h=l[m-1];f[h.name]=g&&h.repeatable?g.split("/"):g}return f}function u(p){let d="",f=!1;for(const m of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const g of m)if(g.type===0)d+=g.value;else if(g.type===1){const{value:h,repeatable:w,optional:y}=g,S=h in p?p[h]:"";if(He(S)&&!w)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const I=He(S)?S.join("/"):S;if(!I)if(y)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);d+=I}}return d||"/"}return{re:r,score:o,keys:l,parse:c,stringify:u}}function i_(e,t){let s=0;for(;s<e.length&&s<t.length;){const o=t[s]-e[s];if(o)return o;s++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function l_(e,t){let s=0;const o=e.score,i=t.score;for(;s<o.length&&s<i.length;){const l=i_(o[s],i[s]);if(l)return l;s++}if(Math.abs(i.length-o.length)===1){if(Ir(o))return 1;if(Ir(i))return-1}return i.length-o.length}function Ir(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const r_={type:0,value:""},c_=/[a-zA-Z0-9_]/;function u_(e){if(!e)return[[]];if(e==="/")return[[r_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${s})/"${p}": ${g}`)}let s=0,o=s;const i=[];let l;function r(){l&&i.push(l),l=[]}let c=0,u,p="",d="";function f(){!p||(s===0?l.push({type:0,value:p}):s===1||s===2||s===3?(l.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),p="")}function m(){p+=u}for(;c<e.length;){if(u=e[c++],u==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:u==="/"?(p&&f(),r()):u===":"?(f(),s=1):m();break;case 4:m(),s=o;break;case 1:u==="("?s=2:c_.test(u)?m():(f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:s=3:d+=u;break;case 3:f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${p}"`),f(),r(),i}function p_(e,t,s){const o=o_(u_(e.path),s),i=On(o,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function d_(e,t){const s=[],o=new Map;t=Ar({strict:!1,end:!0,sensitive:!1},t);function i(d){return o.get(d)}function l(d,f,m){const g=!m,h=f_(d);h.aliasOf=m&&m.record;const w=Ar(t,d),y=[h];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const C of E)y.push(On({},h,{components:m?m.record.components:h.components,path:C,aliasOf:m?m.record:h}))}let S,I;for(const E of y){const{path:C}=E;if(f&&C[0]!=="/"){const B=f.record.path,D=B[B.length-1]==="/"?"":"/";E.path=f.record.path+(C&&D+C)}if(S=p_(E,f,w),m?m.alias.push(S):(I=I||S,I!==S&&I.alias.push(S),g&&d.name&&!Sr(S)&&r(d.name)),h.children){const B=h.children;for(let D=0;D<B.length;D++)l(B[D],S,m&&m.children[D])}m=m||S,u(S)}return I?()=>{r(I)}:Oa}function r(d){if(Bu(d)){const f=o.get(d);f&&(o.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(r),f.alias.forEach(r))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return s}function u(d){let f=0;for(;f<s.length&&l_(d,s[f])>=0&&(d.record.path!==s[f].record.path||!Vu(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!Sr(d)&&o.set(d.record.name,d)}function p(d,f){let m,g={},h,w;if("name"in d&&d.name){if(m=o.get(d.name),!m)throw la(1,{location:d});w=m.record.name,g=On(m_(f.params,m.keys.filter(I=>!I.optional).map(I=>I.name)),d.params),h=m.stringify(g)}else if("path"in d)h=d.path,m=s.find(I=>I.re.test(h)),m&&(g=m.parse(h),w=m.record.name);else{if(m=f.name?o.get(f.name):s.find(I=>I.re.test(f.path)),!m)throw la(1,{location:d,currentLocation:f});w=m.record.name,g=On({},f.params,d.params),h=m.stringify(g)}const y=[];let S=m;for(;S;)y.unshift(S.record),S=S.parent;return{name:w,path:h,params:g,matched:y,meta:h_(y)}}return e.forEach(d=>l(d)),{addRoute:l,resolve:p,removeRoute:r,getRoutes:c,getRecordMatcher:i}}function m_(e,t){const s={};for(const o of t)o in e&&(s[o]=e[o]);return s}function f_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:g_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function g_(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const o in e.components)t[o]=typeof s=="boolean"?s:s[o];return t}function Sr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function h_(e){return e.reduce((t,s)=>On(t,s.meta),{})}function Ar(e,t){const s={};for(const o in e)s[o]=o in t?t[o]:e[o];return s}function Vu(e,t){return t.children.some(s=>s===e||Vu(e,s))}const Ku=/#/g,__=/&/g,k_=/\//g,v_=/=/g,b_=/\?/g,Gu=/\+/g,y_=/%5B/g,w_=/%5D/g,Qu=/%5E/g,z_=/%60/g,Yu=/%7B/g,x_=/%7C/g,Zu=/%7D/g,T_=/%20/g;function Qi(e){return encodeURI(""+e).replace(x_,"|").replace(y_,"[").replace(w_,"]")}function $_(e){return Qi(e).replace(Yu,"{").replace(Zu,"}").replace(Qu,"^")}function ti(e){return Qi(e).replace(Gu,"%2B").replace(T_,"+").replace(Ku,"%23").replace(__,"%26").replace(z_,"`").replace(Yu,"{").replace(Zu,"}").replace(Qu,"^")}function M_(e){return ti(e).replace(v_,"%3D")}function L_(e){return Qi(e).replace(Ku,"%23").replace(b_,"%3F")}function E_(e){return e==null?"":L_(e).replace(k_,"%2F")}function Os(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function I_(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<o.length;++i){const l=o[i].replace(Gu," "),r=l.indexOf("="),c=Os(r<0?l:l.slice(0,r)),u=r<0?null:Os(l.slice(r+1));if(c in t){let p=t[c];He(p)||(p=t[c]=[p]),p.push(u)}else t[c]=u}return t}function Or(e){let t="";for(let s in e){const o=e[s];if(s=M_(s),o==null){o!==void 0&&(t+=(t.length?"&":"")+s);continue}(He(o)?o.map(l=>l&&ti(l)):[o&&ti(o)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+s,l!=null&&(t+="="+l))})}return t}function S_(e){const t={};for(const s in e){const o=e[s];o!==void 0&&(t[s]=He(o)?o.map(i=>i==null?null:""+i):o==null?o:""+o)}return t}const A_=Symbol(""),Cr=Symbol(""),Yi=Symbol(""),Ju=Symbol(""),ai=Symbol("");function va(){let e=[];function t(o){return e.push(o),()=>{const i=e.indexOf(o);i>-1&&e.splice(i,1)}}function s(){e=[]}return{add:t,list:()=>e,reset:s}}function ot(e,t,s,o,i){const l=o&&(o.enterCallbacks[i]=o.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const u=f=>{f===!1?c(la(4,{from:s,to:t})):f instanceof Error?c(f):t_(f)?c(la(2,{from:t,to:f})):(l&&o.enterCallbacks[i]===l&&typeof f=="function"&&l.push(f),r())},p=e.call(o&&o.instances[i],t,s,u);let d=Promise.resolve(p);e.length<3&&(d=d.then(u)),d.catch(f=>c(f))})}function vo(e,t,s,o){const i=[];for(const l of e)for(const r in l.components){let c=l.components[r];if(!(t!=="beforeRouteEnter"&&!l.instances[r]))if(O_(c)){const p=(c.__vccOpts||c)[t];p&&i.push(ot(p,s,o,l,r))}else{let u=c();i.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=Rh(p)?p.default:p;l.components[r]=d;const m=(d.__vccOpts||d)[t];return m&&ot(m,s,o,l,r)()}))}}return i}function O_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Pr(e){const t=x(Yi),s=x(Ju),o=P(()=>t.resolve(z(e.to))),i=P(()=>{const{matched:u}=o.value,{length:p}=u,d=u[p-1],f=s.matched;if(!d||!f.length)return-1;const m=f.findIndex(ia.bind(null,d));if(m>-1)return m;const g=Hr(u[p-2]);return p>1&&Hr(d)===g&&f[f.length-1].path!==g?f.findIndex(ia.bind(null,u[p-2])):m}),l=P(()=>i.value>-1&&R_(s.params,o.value.params)),r=P(()=>i.value>-1&&i.value===s.matched.length-1&&Du(s.params,o.value.params));function c(u={}){return H_(u)?t[z(e.replace)?"replace":"push"](z(e.to)).catch(Oa):Promise.resolve()}return{route:o,href:P(()=>o.value.href),isActive:l,isExactActive:r,navigate:c}}const C_=En({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pr,setup(e,{slots:t}){const s=Fn(Pr(e)),{options:o}=x(Yi),i=P(()=>({[Rr(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Rr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=t.default&&t.default(s);return e.custom?l:ze("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:i.value},l)}}}),P_=C_;function H_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function R_(e,t){for(const s in t){const o=t[s],i=e[s];if(typeof o=="string"){if(o!==i)return!1}else if(!He(i)||i.length!==o.length||o.some((l,r)=>l!==i[r]))return!1}return!0}function Hr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Rr=(e,t,s)=>e!=null?e:t!=null?t:s,F_=En({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const o=x(ai),i=P(()=>e.route||o.value),l=x(Cr,0),r=P(()=>{let p=z(l);const{matched:d}=i.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),c=P(()=>i.value.matched[r.value]);fe(Cr,P(()=>r.value+1)),fe(A_,c),fe(ai,i);const u=Q();return fn(()=>[u.value,c.value,e.name],([p,d,f],[m,g,h])=>{d&&(d.instances[f]=p,g&&g!==d&&p&&p===m&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),p&&d&&(!g||!ia(d,g)||!m)&&(d.enterCallbacks[f]||[]).forEach(w=>w(p))},{flush:"post"}),()=>{const p=i.value,d=e.name,f=c.value,m=f&&f.components[d];if(!m)return Fr(s.default,{Component:m,route:p});const g=f.props[d],h=g?g===!0?p.params:typeof g=="function"?g(p):g:null,y=ze(m,On({},h,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(f.instances[d]=null)},ref:u}));return Fr(s.default,{Component:y,route:p})||y}}});function Fr(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const N_=F_;function q_(e){const t=d_(e.routes,e),s=e.parseQuery||I_,o=e.stringifyQuery||Or,i=e.history,l=va(),r=va(),c=va(),u=Ce(tt);let p=tt;Kt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=_o.bind(null,H=>""+H),f=_o.bind(null,E_),m=_o.bind(null,Os);function g(H,J){let W,X;return Bu(H)?(W=t.getRecordMatcher(H),X=J):X=H,t.addRoute(X,W)}function h(H){const J=t.getRecordMatcher(H);J&&t.removeRoute(J)}function w(){return t.getRoutes().map(H=>H.record)}function y(H){return!!t.getRecordMatcher(H)}function S(H,J){if(J=On({},J||u.value),typeof H=="string"){const gn=ko(s,H,J.path),_=t.resolve({path:gn.path},J),b=i.createHref(gn.fullPath);return On(gn,_,{params:m(_.params),hash:Os(gn.hash),redirectedFrom:void 0,href:b})}let W;if("path"in H)W=On({},H,{path:ko(s,H.path,J.path).path});else{const gn=On({},H.params);for(const _ in gn)gn[_]==null&&delete gn[_];W=On({},H,{params:f(H.params)}),J.params=f(J.params)}const X=t.resolve(W,J),zn=H.hash||"";X.params=d(m(X.params));const Pn=qh(o,On({},H,{hash:$_(zn),path:X.path})),hn=i.createHref(Pn);return On({fullPath:Pn,hash:zn,query:o===Or?S_(H.query):H.query||{}},X,{redirectedFrom:void 0,href:hn})}function I(H){return typeof H=="string"?ko(s,H,u.value.path):On({},H)}function E(H,J){if(p!==H)return la(8,{from:J,to:H})}function C(H){return G(H)}function B(H){return C(On(I(H),{replace:!0}))}function D(H){const J=H.matched[H.matched.length-1];if(J&&J.redirect){const{redirect:W}=J;let X=typeof W=="function"?W(H):W;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=I(X):{path:X},X.params={}),On({query:H.query,hash:H.hash,params:"path"in X?{}:H.params},X)}}function G(H,J){const W=p=S(H),X=u.value,zn=H.state,Pn=H.force,hn=H.replace===!0,gn=D(W);if(gn)return G(On(I(gn),{state:zn,force:Pn,replace:hn}),J||W);const _=W;_.redirectedFrom=J;let b;return!Pn&&Wh(o,X,W)&&(b=la(16,{to:_,from:X}),Fe(X,X,!0,!1)),(b?Promise.resolve(b):pn(_,X)).catch(M=>Ve(M)?Ve(M,2)?M:vn(M):cn(M,_,X)).then(M=>{if(M){if(Ve(M,2))return G(On({replace:hn},I(M.to),{state:zn,force:Pn}),J||_)}else M=yn(_,X,!0,hn,zn);return kn(_,X,M),M})}function on(H,J){const W=E(H,J);return W?Promise.reject(W):Promise.resolve()}function pn(H,J){let W;const[X,zn,Pn]=W_(H,J);W=vo(X.reverse(),"beforeRouteLeave",H,J);for(const gn of X)gn.leaveGuards.forEach(_=>{W.push(ot(_,H,J))});const hn=on.bind(null,H,J);return W.push(hn),Wt(W).then(()=>{W=[];for(const gn of l.list())W.push(ot(gn,H,J));return W.push(hn),Wt(W)}).then(()=>{W=vo(zn,"beforeRouteUpdate",H,J);for(const gn of zn)gn.updateGuards.forEach(_=>{W.push(ot(_,H,J))});return W.push(hn),Wt(W)}).then(()=>{W=[];for(const gn of H.matched)if(gn.beforeEnter&&!J.matched.includes(gn))if(He(gn.beforeEnter))for(const _ of gn.beforeEnter)W.push(ot(_,H,J));else W.push(ot(gn.beforeEnter,H,J));return W.push(hn),Wt(W)}).then(()=>(H.matched.forEach(gn=>gn.enterCallbacks={}),W=vo(Pn,"beforeRouteEnter",H,J),W.push(hn),Wt(W))).then(()=>{W=[];for(const gn of r.list())W.push(ot(gn,H,J));return W.push(hn),Wt(W)}).catch(gn=>Ve(gn,8)?gn:Promise.reject(gn))}function kn(H,J,W){for(const X of c.list())X(H,J,W)}function yn(H,J,W,X,zn){const Pn=E(H,J);if(Pn)return Pn;const hn=J===tt,gn=Kt?history.state:{};W&&(X||hn?i.replace(H.fullPath,On({scroll:hn&&gn&&gn.scroll},zn)):i.push(H.fullPath,zn)),u.value=H,Fe(H,J,W,hn),vn()}let Rn;function Wn(){Rn||(Rn=i.listen((H,J,W)=>{if(!nt.listening)return;const X=S(H),zn=D(X);if(zn){G(On(zn,{replace:!0}),X).catch(Oa);return}p=X;const Pn=u.value;Kt&&Qh($r(Pn.fullPath,W.delta),to()),pn(X,Pn).catch(hn=>Ve(hn,12)?hn:Ve(hn,2)?(G(hn.to,X).then(gn=>{Ve(gn,20)&&!W.delta&&W.type===Ka.pop&&i.go(-1,!1)}).catch(Oa),Promise.reject()):(W.delta&&i.go(-W.delta,!1),cn(hn,X,Pn))).then(hn=>{hn=hn||yn(X,Pn,!1),hn&&(W.delta&&!Ve(hn,8)?i.go(-W.delta,!1):W.type===Ka.pop&&Ve(hn,20)&&i.go(-1,!1)),kn(X,Pn,hn)}).catch(Oa)}))}let Qn=va(),In=va(),ln;function cn(H,J,W){vn(H);const X=In.list();return X.length?X.forEach(zn=>zn(H,J,W)):console.error(H),Promise.reject(H)}function sn(){return ln&&u.value!==tt?Promise.resolve():new Promise((H,J)=>{Qn.add([H,J])})}function vn(H){return ln||(ln=!H,Wn(),Qn.list().forEach(([J,W])=>H?W(H):J()),Qn.reset()),H}function Fe(H,J,W,X){const{scrollBehavior:zn}=e;if(!Kt||!zn)return Promise.resolve();const Pn=!W&&Yh($r(H.fullPath,0))||(X||!W)&&history.state&&history.state.scroll||null;return Gn().then(()=>zn(H,J,Pn)).then(hn=>hn&&Gh(hn)).catch(hn=>cn(hn,H,J))}const Xn=H=>i.go(H);let ve;const ie=new Set,nt={currentRoute:u,listening:!0,addRoute:g,removeRoute:h,hasRoute:y,getRoutes:w,resolve:S,options:e,push:C,replace:B,go:Xn,back:()=>Xn(-1),forward:()=>Xn(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:In.add,isReady:sn,install(H){const J=this;H.component("RouterLink",P_),H.component("RouterView",N_),H.config.globalProperties.$router=J,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>z(u)}),Kt&&!ve&&u.value===tt&&(ve=!0,C(i.location).catch(zn=>{}));const W={};for(const zn in tt)W[zn]=P(()=>u.value[zn]);H.provide(Yi,J),H.provide(Ju,Fn(W)),H.provide(ai,u);const X=H.unmount;ie.add(H),H.unmount=function(){ie.delete(H),ie.size<1&&(p=tt,Rn&&Rn(),Rn=null,u.value=tt,ve=!1,ln=!1),X()}}};return nt}function Wt(e){return e.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function W_(e,t){const s=[],o=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let r=0;r<l;r++){const c=t.matched[r];c&&(e.matched.find(p=>ia(p,c))?o.push(c):s.push(c));const u=e.matched[r];u&&(t.matched.find(p=>ia(p,u))||i.push(u))}return[s,o,i]}const bo=Q(!1),Pa=Q(!1),Qt=Q(!1),D_=Q(!0),si=nh({xs:460,...Qg}),At=Hh(),Xu=Th(),j_=P(()=>At.height.value-At.width.value/ut>180),np=zh(Pe?document.body:null),ea=Gg(),B_=P(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=ea.value)==null?void 0:e.tagName)||"")||((t=ea.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),U_=P(()=>{var e;return["BUTTON","A"].includes(((e=ea.value)==null?void 0:e.tagName)||"")});Re("slidev-camera","default");Re("slidev-mic","default");const ys=Re("slidev-scale",0),ee=Re("slidev-show-overview",!1),yo=Re("slidev-presenter-cursor",!0),Nr=Re("slidev-show-editor",!1);Re("slidev-editor-width",Pe?window.innerWidth*.4:100);const ep=Nu(ee);function qr(e,t,s,o=i=>i){return e*o(.5-t*(.5-s))}function V_(e){return[-e[0],-e[1]]}function Le(e,t){return[e[0]+t[0],e[1]+t[1]]}function ye(e,t){return[e[0]-t[0],e[1]-t[1]]}function Me(e,t){return[e[0]*t,e[1]*t]}function K_(e,t){return[e[0]/t,e[1]/t]}function ba(e){return[e[1],-e[0]]}function G_(e,t){return e[0]*t[0]+e[1]*t[1]}function Q_(e,t){return e[0]===t[0]&&e[1]===t[1]}function Y_(e){return Math.hypot(e[0],e[1])}function Z_(e){return e[0]*e[0]+e[1]*e[1]}function Wr(e,t){return Z_(ye(e,t))}function tp(e){return K_(e,Y_(e))}function J_(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function ya(e,t,s){let o=Math.sin(s),i=Math.cos(s),l=e[0]-t[0],r=e[1]-t[1],c=l*i-r*o,u=l*o+r*i;return[c+t[0],u+t[1]]}function oi(e,t,s){return Le(e,Me(ye(t,e),s))}function Dr(e,t,s){return Le(e,Me(t,s))}var{min:Dt,PI:X_}=Math,jr=.275,wa=X_+1e-4;function nk(e,t={}){let{size:s=16,smoothing:o=.5,thinning:i=.5,simulatePressure:l=!0,easing:r=ln=>ln,start:c={},end:u={},last:p=!1}=t,{cap:d=!0,easing:f=ln=>ln*(2-ln)}=c,{cap:m=!0,easing:g=ln=>--ln*ln*ln+1}=u;if(e.length===0||s<=0)return[];let h=e[e.length-1].runningLength,w=c.taper===!1?0:c.taper===!0?Math.max(s,h):c.taper,y=u.taper===!1?0:u.taper===!0?Math.max(s,h):u.taper,S=Math.pow(s*o,2),I=[],E=[],C=e.slice(0,10).reduce((ln,cn)=>{let sn=cn.pressure;if(l){let vn=Dt(1,cn.distance/s),Fe=Dt(1,1-vn);sn=Dt(1,ln+(Fe-ln)*(vn*jr))}return(ln+sn)/2},e[0].pressure),B=qr(s,i,e[e.length-1].pressure,r),D,G=e[0].vector,on=e[0].point,pn=on,kn=on,yn=pn;for(let ln=0;ln<e.length;ln++){let{pressure:cn}=e[ln],{point:sn,vector:vn,distance:Fe,runningLength:Xn}=e[ln];if(ln<e.length-1&&h-Xn<3)continue;if(i){if(l){let W=Dt(1,Fe/s),X=Dt(1,1-W);cn=Dt(1,C+(X-C)*(W*jr))}B=qr(s,i,cn,r)}else B=s/2;D===void 0&&(D=B);let ve=Xn<w?f(Xn/w):1,ie=h-Xn<y?g((h-Xn)/y):1;if(B=Math.max(.01,B*Math.min(ve,ie)),ln===e.length-1){let W=Me(ba(vn),B);I.push(ye(sn,W)),E.push(Le(sn,W));continue}let nt=e[ln+1].vector,H=G_(vn,nt);if(H<0){let W=Me(ba(G),B);for(let X=1/13,zn=0;zn<=1;zn+=X)kn=ya(ye(sn,W),sn,wa*zn),I.push(kn),yn=ya(Le(sn,W),sn,wa*-zn),E.push(yn);on=kn,pn=yn;continue}let J=Me(ba(oi(nt,vn,H)),B);kn=ye(sn,J),(ln<=1||Wr(on,kn)>S)&&(I.push(kn),on=kn),yn=Le(sn,J),(ln<=1||Wr(pn,yn)>S)&&(E.push(yn),pn=yn),C=cn,G=vn}let Rn=e[0].point.slice(0,2),Wn=e.length>1?e[e.length-1].point.slice(0,2):Le(e[0].point,[1,1]),Qn=[],In=[];if(e.length===1){if(!(w||y)||p){let ln=Dr(Rn,tp(ba(ye(Rn,Wn))),-(D||B)),cn=[];for(let sn=1/13,vn=sn;vn<=1;vn+=sn)cn.push(ya(ln,Rn,wa*2*vn));return cn}}else{if(!(w||y&&e.length===1))if(d)for(let cn=1/13,sn=cn;sn<=1;sn+=cn){let vn=ya(E[0],Rn,wa*sn);Qn.push(vn)}else{let cn=ye(I[0],E[0]),sn=Me(cn,.5),vn=Me(cn,.51);Qn.push(ye(Rn,sn),ye(Rn,vn),Le(Rn,vn),Le(Rn,sn))}let ln=ba(V_(e[e.length-1].vector));if(y||w&&e.length===1)In.push(Wn);else if(m){let cn=Dr(Wn,ln,B);for(let sn=1/29,vn=sn;vn<1;vn+=sn)In.push(ya(cn,Wn,wa*3*vn))}else In.push(Le(Wn,Me(ln,B)),Le(Wn,Me(ln,B*.99)),ye(Wn,Me(ln,B*.99)),ye(Wn,Me(ln,B)))}return I.concat(In,E.reverse(),Qn)}function ek(e,t={}){var s;let{streamline:o=.5,size:i=16,last:l=!1}=t;if(e.length===0)return[];let r=.15+(1-o)*.85,c=Array.isArray(e[0])?e:e.map(({x:g,y:h,pressure:w=.5})=>[g,h,w]);if(c.length===2){let g=c[1];c=c.slice(0,-1);for(let h=1;h<5;h++)c.push(oi(c[0],g,h/4))}c.length===1&&(c=[...c,[...Le(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,f=u[0],m=c.length-1;for(let g=1;g<c.length;g++){let h=l&&g===m?c[g].slice(0,2):oi(f.point,c[g],r);if(Q_(f.point,h))continue;let w=J_(h,f.point);if(d+=w,g<m&&!p){if(d<i)continue;p=!0}f={point:h,pressure:c[g][2]>=0?c[g][2]:.5,vector:tp(ye(f.point,h)),distance:w,runningLength:d},u.push(f)}return u[0].vector=((s=u[1])==null?void 0:s.vector)||[0,0],u}function tk(e,t={}){return nk(ek(e,t),t)}var ak=()=>({events:{},emit(e,...t){let s=this.events[e]||[];for(let o=0,i=s.length;o<i;o++)s[o](...t)},on(e,t){var s;return(s=this.events[e])!=null&&s.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(i=>t!==i)}}});function Cs(e,t){return e-t}function sk(e){return e<0?-1:1}function Ps(e){return[Math.abs(e),sk(e)]}function ap(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var ok=2,Ge=ok,ma=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var i;var t;const s=this.drauu.el,o=(i=this.drauu.options.coordinateScale)!=null?i:1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const r=l.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:r.x*o,y:r.y*o,pressure:e.pressure}}}createElement(e,t){var i;const s=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",(i=o.fill)!=null?i:"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Ge))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},ik=class extends ma{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=tk(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((o,[i,l],r,c)=>{const[u,p]=c[(r+1)%c.length];return o.push(i,l,(i+u)/2,(l+p)/2),o},["M",...t[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},lk=class extends ma{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Ps(e.x-this.start.x),[o,i]=Ps(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[l,r]=[this.start.x,this.start.x+t*s].sort(Cs),[c,u]=[this.start.y,this.start.y+o*i].sort(Cs);this.attr("cx",(l+r)/2),this.attr("cy",(c+u)/2),this.attr("rx",(r-l)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function sp(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(i),s.appendChild(o),s}var rk=class extends ma{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=ap(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(sp(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:s}=e;if(this.shiftPressed){const o=e.x-this.start.x,i=e.y-this.start.y;if(i!==0){let l=o/i;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+i*l,s=this.start.y+i):(t=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},ck=class extends ma{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Ps(e.x-this.start.x),[o,i]=Ps(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[l,r]=[this.start.x,this.start.x+t*s].sort(Cs),[c,u]=[this.start.y,this.start.y+o*i].sort(Cs);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",u-c)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function uk(e,t){const s=e.x-t.x,o=e.y-t.y;return s*s+o*o}function pk(e,t,s){let o=t.x,i=t.y,l=s.x-o,r=s.y-i;if(l!==0||r!==0){const c=((e.x-o)*l+(e.y-i)*r)/(l*l+r*r);c>1?(o=s.x,i=s.y):c>0&&(o+=l*c,i+=r*c)}return l=e.x-o,r=e.y-i,l*l+r*r}function dk(e,t){let s=e[0];const o=[s];let i;for(let l=1,r=e.length;l<r;l++)i=e[l],uk(i,s)>t&&(o.push(i),s=i);return s!==i&&i&&o.push(i),o}function ii(e,t,s,o,i){let l=o,r=0;for(let c=t+1;c<s;c++){const u=pk(e[c],e[t],e[s]);u>l&&(r=c,l=u)}l>o&&(r-t>1&&ii(e,t,r,o,i),i.push(e[r]),s-r>1&&ii(e,r,s,o,i))}function mk(e,t){const s=e.length-1,o=[e[0]];return ii(e,0,s,t,o),o.push(e[s]),o}function Br(e,t,s=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=s?e:dk(e,o),e=mk(e,o),e}var fk=class extends ma{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=ap();const t=sp(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Br(this.points,1,!0),this.count=0),this.attr("d",Vr(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Vr(Br(this.points,1,!0))),!e.getTotalLength()))}};function gk(e,t){const s=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(Math.pow(s,2)+Math.pow(o,2)),angle:Math.atan2(o,s)}}function Ur(e,t,s,o){const i=t||e,l=s||e,r=.2,c=gk(i,l),u=c.angle+(o?Math.PI:0),p=c.length*r,d=e.x+Math.cos(u)*p,f=e.y+Math.sin(u)*p;return{x:d,y:f}}function hk(e,t,s){const o=Ur(s[t-1],s[t-2],e),i=Ur(e,s[t-1],s[t+1],!0);return`C ${o.x.toFixed(Ge)},${o.y.toFixed(Ge)} ${i.x.toFixed(Ge)},${i.y.toFixed(Ge)} ${e.x.toFixed(Ge)},${e.y.toFixed(Ge)}`}function Vr(e){return e.reduce((t,s,o,i)=>o===0?`M ${s.x.toFixed(Ge)},${s.y.toFixed(Ge)}`:`${t} ${hk(s,o,i)}`,"")}var _k=class extends ma{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(s,o)=>{if(s&&s.length)for(let i=0;i<s.length;i++){const l=s[i];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=l.getPointAtLength(r*c/this.pathSubFactor),p=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:o||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,t){const s=e.x1,o=e.x2,i=t.x1,l=t.x2,r=e.y1,c=e.y2,u=t.y1,p=t.y2,d=(s-o)*(u-p)-(r-c)*(i-l),f=(s*c-r*o)*(i-l)-(s-o)*(i*p-u*l),m=(s*c-r*o)*(u-p)-(r-c)*(i*p-u*l),g=(h,w,y)=>h>=w&&h<=y?!0:h>=y&&h<=w;if(d===0)return!1;{const h={x:f/d,y:m/d};return g(h.x,s,o)&&g(h.y,r,c)&&g(h.x,i,l)&&g(h.y,u,p)}}};function kk(e){return{draw:new fk(e),stylus:new ik(e),line:new rk(e),rectangle:new ck(e),ellipse:new lk(e),eraseLine:new _k(e)}}var vk=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=ak(),this._models=kk(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),i=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function bk(e){return new vk(e)}const li=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],je=Re("slidev-drawing-enabled",!1),xC=Re("slidev-drawing-pinned",!1),yk=Q(!1),wk=Q(!1),zk=Q(!1),Ga=Q(!1),Mt=vg(Re("slidev-drawing-brush",{color:li[0],size:4,mode:"stylus"})),Kr=Q("stylus"),op=P(()=>xn.drawings.syncAll||We.value);let Qa=!1;const za=P({get(){return Kr.value},set(e){Kr.value=e,e==="arrow"?(Mt.mode="line",Mt.arrowEnd=!0):(Mt.mode=e,Mt.arrowEnd=!1)}}),xk=Fn({brush:Mt,acceptsInputTypes:P(()=>je.value?void 0:["pen"]),coordinateTransform:!1}),ae=Us(bk(xk));function Tk(){ae.clear(),op.value&&Pu(Bn.value,"")}function ip(){var e;wk.value=ae.canRedo(),yk.value=ae.canUndo(),zk.value=!!((e=ae.el)!=null&&e.children.length)}function $k(e){Qa=!0;const t=Ss[e||Bn.value];t!=null?ae.load(t):ae.clear(),Qa=!1}ae.on("changed",()=>{if(ip(),!Qa){const e=ae.dump(),t=Bn.value;(Ss[t]||"")!==e&&op.value&&Pu(t,ae.dump())}});cg(e=>{Qa=!0,e[Bn.value]!=null&&ae.load(e[Bn.value]||""),Qa=!1,ip()});Gn(()=>{fn(Bn,()=>{!ae.mounted||$k()},{immediate:!0})});ae.on("start",()=>Ga.value=!0);ae.on("end",()=>Ga.value=!1);window.addEventListener("keydown",e=>{if(!je.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ae.redo():ae.undo():e.code==="Escape"?je.value=!1:e.code==="KeyL"&&t?za.value="line":e.code==="KeyA"&&t?za.value="arrow":e.code==="KeyS"&&t?za.value="stylus":e.code==="KeyR"&&t?za.value="rectangle":e.code==="KeyE"&&t?za.value="ellipse":e.code==="KeyC"&&t?Tk():e.code.startsWith("Digit")&&t&&+e.code[5]<=li.length?Mt.color=li[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Dn(...e){return P(()=>e.every(t=>te(t)))}function pe(e){return P(()=>!te(e))}const Gr=ch(),wo=Re("slidev-color-schema","auto"),ri=P(()=>xn.colorSchema!=="auto"),Zi=P({get(){return ri.value?xn.colorSchema==="dark":wo.value==="auto"?Gr.value:wo.value==="dark"},set(e){ri.value||(wo.value=e===Gr.value?"auto":e?"dark":"light")}}),lp=Nu(Zi);Pe&&fn(Zi,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const ws=Q(1),zs=P(()=>jn.length-1),he=Q(0),Ji=Q(0);function Mk(){he.value>ws.value&&(he.value-=1)}function Lk(){he.value<zs.value&&(he.value+=1)}function Ek(){if(he.value>ws.value){let e=he.value-Ji.value;e<ws.value&&(e=ws.value),he.value=e}}function Ik(){if(he.value<zs.value){let e=he.value+Ji.value;e>zs.value&&(e=zs.value),he.value=e}}function Sk(){const{escape:e,space:t,shift:s,left:o,right:i,up:l,down:r,enter:c,d:u,g:p,o:d}=Xu,f=[{name:"next_space",key:Dn(t,pe(s)),fn:pt,autoRepeat:!0},{name:"prev_space",key:Dn(t,s),fn:dt,autoRepeat:!0},{name:"next_right",key:Dn(i,pe(s),pe(ee)),fn:pt,autoRepeat:!0},{name:"prev_left",key:Dn(o,pe(s),pe(ee)),fn:dt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:pt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:dt,autoRepeat:!0},{name:"next_down",key:Dn(r,pe(ee)),fn:Za,autoRepeat:!0},{name:"prev_up",key:Dn(l,pe(ee)),fn:()=>Ja(!1),autoRepeat:!0},{name:"next_shift",key:Dn(i,s),fn:Za,autoRepeat:!0},{name:"prev_shift",key:Dn(o,s),fn:()=>Ja(!1),autoRepeat:!0},{name:"toggle_dark",key:Dn(u,pe(je)),fn:lp},{name:"toggle_overview",key:Dn(d,pe(je)),fn:ep},{name:"hide_overview",key:Dn(e,pe(je)),fn:()=>ee.value=!1},{name:"goto",key:Dn(p,pe(je)),fn:()=>Qt.value=!Qt.value},{name:"next_overview",key:Dn(i,ee),fn:Lk},{name:"prev_overview",key:Dn(o,ee),fn:Mk},{name:"up_overview",key:Dn(l,ee),fn:Ek},{name:"down_overview",key:Dn(r,ee),fn:Ik},{name:"goto_from_overview",key:Dn(c,ee),fn:()=>{ra(he.value),ee.value=!1}}];return{customShortcuts:[],defaultShortcuts:f}}const rp=Dn(pe(B_),pe(U_),D_);function Ak(e,t,s=!1){typeof e=="string"&&(e=Xu[e]);const o=Dn(e,rp);let i=0,l;const r=()=>{if(clearTimeout(l),!o.value){i=0;return}s&&(l=setTimeout(r,Math.max(1e3-i*250,150)),i++),t()};return fn(o,r,{flush:"sync"})}function Ok(e,t){return Kg(e,s=>{!rp.value||s.repeat||t()})}function Ck(){const{customShortcuts:e,defaultShortcuts:t}=Sk();new Map([...t,...e].map(o=>[o.key,o])).forEach(o=>{o.fn&&Ak(o.key,o.fn,o.autoRepeat)}),Ok("f",()=>np.toggle())}const Pk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hk=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Rk=[Hk];function Fk(e,t){return k(),Z("svg",Pk,Rk)}const Nk={name:"carbon-close",render:Fk};function Xi(e){var s,o;const t=(o=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:o.no;return t!=null?`slidev-page-${t}`:""}const cp=En({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;x($);const s=Q(),o=wh(s),i=P(()=>t.width?t.width:o.width.value),l=P(()=>t.width?t.width/ut:o.height.value);t.width&&es(()=>{s.value&&(s.value.style.width=`${i.value}px`,s.value.style.height=`${l.value}px`)});const r=P(()=>i.value/l.value),c=P(()=>t.scale?t.scale:r.value<ut?i.value/St:l.value*ut/St),u=P(()=>({height:`${Au}px`,width:`${St}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=P(()=>({"select-none":!xn.selectable,"slidev-code-line-numbers":xn.lineNumbers}));return fe(Su,c),(d,f)=>(k(),Z("div",{id:"slide-container",ref_key:"root",ref:s,class:Nn(z(p))},[n("div",{id:"slide-content",style:Jn(z(u))},[Ue(d.$slots,"default")],4),Ue(d.$slots,"controls")],2))}});const nl=En({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const s=De(e,"clicks",t),o=De(e,"clicksElements",t),i=De(e,"clicksDisabled",t),l=De(e,"clicksOrderMap",t);o.value.length=0,fe(Yf,e.route),fe(Zf,e.context),fe(Sa,s),fe(Aa,i),fe(zt,o),fe(Yo,l)},render(){var e,t;return this.$props.is?ze(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),qk=["innerHTML"],Wk=En({__name:"DrawingPreview",props:{page:null},setup(e){return x($),(t,s)=>z(Ss)[e.page]?(k(),Z("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:z(Ss)[e.page]},null,8,qk)):_n("v-if",!0)}}),Dk={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},jk=["onClick"],Bk=En({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const s=e;x($);const o=De(s,"modelValue",t);function i(){o.value=!1}function l(g){ra(g),i()}function r(g){return g===he.value}const c=si.smaller("xs"),u=si.smaller("sm"),p=4*16*2,d=2*16,f=P(()=>c.value?At.width.value-p:u.value?(At.width.value-p-d)/2:300),m=P(()=>Math.floor((At.width.value-p)/(f.value+d)));return es(()=>{he.value=Bn.value,Ji.value=m.value}),(g,h)=>{const w=Nk;return k(),Z(Mn,null,[Bi(n("div",Dk,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Jn(`grid-template-columns: repeat(auto-fit,minmax(${z(f)}px,1fr))`)},[(k(!0),Z(Mn,null,ts(z(jn).slice(0,-1),(y,S)=>(k(),Z("div",{key:y.path,class:"relative"},[n("div",{class:Nn(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(S+1)}]),onClick:I=>l(+y.path)},[(k(),T(cp,{key:y.path,width:z(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:v(()=>[L(z(nl),{is:y==null?void 0:y.component,"clicks-disabled":!0,class:Nn(z(Xi)(y)),route:y,context:"overview"},null,8,["is","class","route"]),L(Wk,{page:+y.path},null,8,["page"])]),_:2},1032,["width"]))],10,jk),n("div",{class:"absolute top-0 opacity-50",style:Jn(`left: ${z(f)+5}px`)},we(S+1),5)]))),128))],4)],512),[[Lu,z(o)]]),z(o)?(k(),Z("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:i},[L(w)])):_n("v-if",!0)],64)}}});const Uk="/TPSI/4/html/assets/logo.b72bde5d.png",Vk={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Kk=En({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const s=e;x($);const o=De(s,"modelValue",t);function i(){o.value=!1}return(l,r)=>(k(),T(cu,null,[z(o)?(k(),Z("div",Vk,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>i())}),n("div",{class:Nn(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Ue(l.$slots,"default")],2)])):_n("v-if",!0)],1024))}}),Gk={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Qk=["innerHTML"],Yk=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:Uk,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),a("dev ")])])],-1),Zk=En({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const s=e;x($);const o=De(s,"modelValue",t),i=P(()=>typeof xn.info=="string");return(l,r)=>(k(),T(Kk,{modelValue:z(o),"onUpdate:modelValue":r[0]||(r[0]=c=>$n(o)?o.value=c:null),class:"px-6 py-4"},{default:v(()=>[n("div",Gk,[z(i)?(k(),Z("div",{key:0,class:"mb-4",innerHTML:z(xn).info},null,8,Qk)):_n("v-if",!0),Yk])]),_:1},8,["modelValue"]))}});const Jk=["disabled","onKeydown"],Xk=En({__name:"Goto",setup(e){x($);const t=Q(),s=Q(""),o=P(()=>{if(s.value.startsWith("/"))return!!jn.find(r=>r.path===s.value.substring(1));{const r=+s.value;return!isNaN(r)&&r>0&&r<=wp.value}});function i(){o.value&&(s.value.startsWith("/")?ra(s.value.substring(1)):ra(+s.value)),l()}function l(){Qt.value=!1}return fn(Qt,async r=>{var c,u;r?(await Gn(),s.value="",(c=t.value)==null||c.focus()):(u=t.value)==null||u.blur()}),fn(s,r=>{r.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(r,c)=>(k(),Z("div",{id:"slidev-goto-dialog",class:Nn(["fixed right-5 bg-main transform transition-all",z(Qt)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Bi(n("input",{ref_key:"input",ref:t,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),type:"text",disabled:!z(Qt),class:Nn(["outline-none bg-transparent",{"text-red-400":!z(o)&&s.value}]),placeholder:"Goto...",onKeydown:[Zl(i,["enter"]),Zl(l,["escape"])],onBlur:l},null,42,Jk),[[If,s.value]])],2))}}),n1=En({__name:"Controls",setup(e){x($);const t=Ce(),s=Ce();return(o,i)=>(k(),Z(Mn,null,[L(Bk,{modelValue:z(ee),"onUpdate:modelValue":i[0]||(i[0]=l=>$n(ee)?ee.value=l:null)},null,8,["modelValue"]),L(Xk),z(t)?(k(),T(z(t),{key:0})):_n("v-if",!0),z(s)?(k(),T(z(s),{key:1,modelValue:z(bo),"onUpdate:modelValue":i[1]||(i[1]=l=>$n(bo)?bo.value=l:null)},null,8,["modelValue"])):_n("v-if",!0),z(xn).info?(k(),T(Zk,{key:2,modelValue:z(Pa),"onUpdate:modelValue":i[2]||(i[2]=l=>$n(Pa)?Pa.value=l:null)},null,8,["modelValue"])):_n("v-if",!0)],64))}}),e1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t1=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),a1=[t1];function s1(e,t){return k(),Z("svg",e1,a1)}const o1={name:"carbon-settings-adjust",render:s1},i1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l1=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),r1=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),c1=[l1,r1];function u1(e,t){return k(),Z("svg",i1,c1)}const p1={name:"carbon-information",render:u1},d1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m1=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),f1=[m1];function g1(e,t){return k(),Z("svg",d1,f1)}const h1={name:"carbon-download",render:g1},_1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k1=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),v1=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),b1=[k1,v1];function y1(e,t){return k(),Z("svg",_1,b1)}const w1={name:"carbon-user-speaker",render:y1},z1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x1=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),T1=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),$1=[x1,T1];function M1(e,t){return k(),Z("svg",z1,$1)}const L1={name:"carbon-presentation-file",render:M1},E1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I1=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),S1=[I1];function A1(e,t){return k(),Z("svg",E1,S1)}const O1={name:"carbon-pen",render:A1},C1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},P1=n("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),H1=n("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),R1=[P1,H1];function F1(e,t){return k(),Z("svg",C1,R1)}const N1={name:"ph-cursor-duotone",render:F1},q1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},W1=n("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),D1=[W1];function j1(e,t){return k(),Z("svg",q1,D1)}const up={name:"ph-cursor-fill",render:j1},B1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U1=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),V1=[U1];function K1(e,t){return k(),Z("svg",B1,V1)}const G1={name:"carbon-sun",render:K1},Q1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y1=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Z1=[Y1];function J1(e,t){return k(),Z("svg",Q1,Z1)}const X1={name:"carbon-moon",render:J1},nv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ev=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),tv=[ev];function av(e,t){return k(),Z("svg",nv,tv)}const sv={name:"carbon-apps",render:av},ov={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iv=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),lv=[iv];function rv(e,t){return k(),Z("svg",ov,lv)}const pp={name:"carbon-arrow-right",render:rv},cv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},uv=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),pv=[uv];function dv(e,t){return k(),Z("svg",cv,pv)}const mv={name:"carbon-arrow-left",render:dv},fv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gv=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),hv=[gv];function _v(e,t){return k(),Z("svg",fv,hv)}const kv={name:"carbon-maximize",render:_v},vv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bv=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),yv=[bv];function wv(e,t){return k(),Z("svg",vv,yv)}const zv={name:"carbon-minimize",render:wv},xv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tv=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),$v=[Tv];function Mv(e,t){return k(),Z("svg",xv,$v)}const Lv={name:"carbon-checkmark",render:Mv},Ev={class:"select-list"},Iv={class:"title"},Sv={class:"items"},Av=["onClick"],Ov=En({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const s=e;x($);const o=De(s,"modelValue",t,{passive:!0});return(i,l)=>{const r=Lv;return k(),Z("div",Ev,[n("div",Iv,we(e.title),1),n("div",Sv,[(k(!0),Z(Mn,null,ts(e.items,c=>(k(),Z("div",{key:c.value,class:Nn(["item",{active:z(o)===c.value}]),onClick:()=>{var u;o.value=c.value,(u=c.onClick)==null||u.call(c)}},[L(r,{class:Nn(["text-green-500",{"opacity-0":z(o)!==c.value}])},null,8,["class"]),a(" "+we(c.display||c.value),1)],10,Av))),128))])])}}});const dp=(e,t)=>{const s=e.__vccOpts||e;for(const[o,i]of t)s[o]=i;return s},Cv=dp(Ov,[["__scopeId","data-v-7dd0eaca"]]),Pv={class:"text-sm"},Hv=En({__name:"Settings",setup(e){x($);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(k(),Z("div",Pv,[L(Cv,{modelValue:z(ys),"onUpdate:modelValue":o[0]||(o[0]=i=>$n(ys)?ys.value=i:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),Rv={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Fv=En({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const s=e;x($);const o=De(s,"modelValue",t,{passive:!0}),i=Q();return Ug(i,()=>{o.value=!1}),(l,r)=>(k(),Z("div",{ref_key:"el",ref:i,class:"flex relative"},[n("button",{class:Nn({disabled:e.disabled}),onClick:r[0]||(r[0]=c=>o.value=!z(o))},[Ue(l.$slots,"button",{class:Nn({disabled:e.disabled})})],2),(k(),T(cu,null,[z(o)?(k(),Z("div",Rv,[Ue(l.$slots,"menu")])):_n("v-if",!0)],1024))],512))}}),Nv={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},fs={__name:"VerticalDivider",setup(e){return x($),(t,s)=>(k(),Z("div",Nv))}},qv={render(){return[]}},Wv={class:"icon-btn"},Dv={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},jv={class:"my-auto"},Bv={class:"opacity-50"},Uv=En({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;x($);const s=si.smaller("md"),{isFullscreen:o,toggle:i}=np,l=P(()=>ui.value?`?password=${ui.value}`:""),r=P(()=>`/presenter/${Bn.value}${l.value}`),c=P(()=>`/${Bn.value}${l.value}`),u=Q(),p=()=>{u.value&&ea.value&&u.value.contains(ea.value)&&ea.value.blur()},d=P(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Ce(),m=Ce();return da(()=>import("./DrawingControls.13040135.js"),["assets/DrawingControls.13040135.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.eabd50f5.js"]).then(g=>m.value=g.default),(g,h)=>{const w=zv,y=kv,S=mv,I=pp,E=sv,C=X1,B=G1,D=up,G=N1,on=O1,pn=L1,kn=aa("RouterLink"),yn=w1,Rn=h1,Wn=p1,Qn=o1;return k(),Z("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[n("div",{class:Nn(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",z(d)]),onMouseleave:p},[z(Ke)?_n("v-if",!0):(k(),Z("button",{key:0,class:"icon-btn",onClick:h[0]||(h[0]=(...In)=>z(i)&&z(i)(...In))},[z(o)?(k(),T(w,{key:0})):(k(),T(y,{key:1}))])),n("button",{class:Nn(["icon-btn",{disabled:!z(N4)}]),onClick:h[1]||(h[1]=(...In)=>z(dt)&&z(dt)(...In))},[L(S)],2),n("button",{class:Nn(["icon-btn",{disabled:!z(F4)}]),title:"Next",onClick:h[2]||(h[2]=(...In)=>z(pt)&&z(pt)(...In))},[L(I)],2),z(Ke)?_n("v-if",!0):(k(),Z("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=In=>z(ep)())},[L(E)])),z(ri)?_n("v-if",!0):(k(),Z("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=In=>z(lp)())},[z(Zi)?(k(),T(C,{key:0})):(k(),T(B,{key:1}))])),L(fs),z(Ke)?_n("v-if",!0):(k(),Z(Mn,{key:3},[!z(We)&&!z(s)&&z(f)?(k(),Z(Mn,{key:0},[L(z(f)),L(fs)],64)):_n("v-if",!0),z(We)?(k(),Z("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=In=>yo.value=!z(yo))},[z(yo)?(k(),T(D,{key:0})):(k(),T(G,{key:1,class:"opacity-50"}))])):_n("v-if",!0)],64)),!z(xn).drawings.presenterOnly&&!z(Ke)?(k(),Z(Mn,{key:4},[n("button",{class:"icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=In=>je.value=!z(je))},[L(on),z(je)?(k(),Z("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Jn({background:z(Mt).color})},null,4)):_n("v-if",!0)]),L(fs)],64)):_n("v-if",!0),z(Ke)?_n("v-if",!0):(k(),Z(Mn,{key:5},[z(We)?(k(),T(kn,{key:0,to:z(c),class:"icon-btn",title:"Play Mode"},{default:v(()=>[L(pn)]),_:1},8,["to"])):_n("v-if",!0),z(P4)?(k(),T(kn,{key:1,to:z(r),class:"icon-btn",title:"Presenter Mode"},{default:v(()=>[L(yn)]),_:1},8,["to"])):_n("v-if",!0),_n("v-if",!0)],64)),(k(),Z(Mn,{key:6},[z(xn).download?(k(),Z("button",{key:0,class:"icon-btn",onClick:h[8]||(h[8]=(...In)=>z(pi)&&z(pi)(...In))},[L(Rn)])):_n("v-if",!0)],64)),!z(We)&&z(xn).info&&!z(Ke)?(k(),Z("button",{key:7,class:"icon-btn",onClick:h[9]||(h[9]=In=>Pa.value=!z(Pa))},[L(Wn)])):_n("v-if",!0),!z(We)&&!z(Ke)?(k(),T(Fv,{key:8},{button:v(()=>[n("button",Wv,[L(Qn)])]),menu:v(()=>[L(Hv)]),_:1})):_n("v-if",!0),z(Ke)?_n("v-if",!0):(k(),T(fs,{key:9})),n("div",Dv,[n("div",jv,[a(we(z(Bn))+" ",1),n("span",Bv,"/ "+we(z(wp)),1)])]),L(z(qv))],34)],512)}}}),Vv={style:{"font-size":"0.55rem","line-height":"1rem"}},Kv=n("div",{class:"absolute bottom-0 left-1"},[n("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),Gv={class:"absolute bottom-1 left-89 text-gray-700"},Qv={key:0,class:"absolute bottom-1 right-1 text-gray-700"},Yv={__name:"global-top",setup(e){const t=x($);return(s,o)=>(k(),Z("footer",Vv,[Kv,n("div",Gv," ITT E.Agnelli - Informatica - "+we(z(t).configs.materia)+" - prof. Antonio Mancuso - a.s. "+we(z(t).configs.as)+" - v "+we(z(t).configs.version||0),1),z(t).nav.currentPage!==1&&z(t).nav.currentPage!=z(t).nav.total+1?(k(),Z("div",Qv,we(z(t).nav.currentPage-1)+" / "+we(z(t).nav.total-1),1)):_n("v-if",!0)]))}},mp={render(){return[ze(Yv)]}},fp={render(){return[]}},Zv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Jv=En({__name:"PresenterMouse",setup(e){return x($),(t,s)=>{const o=up;return z(ho).cursor?(k(),Z("div",Zv,[L(o,{class:"absolute",style:Jn({left:`${z(ho).cursor.x}%`,top:`${z(ho).cursor.y}%`})},null,8,["style"])])):_n("v-if",!0)}}}),Xv=En({__name:"SlidesShow",props:{context:null},setup(e){x($),fn(me,()=>{var s,o;((s=me.value)==null?void 0:s.meta)&&me.value.meta.preload!==!1&&(me.value.meta.__preloaded=!0),((o=zo.value)==null?void 0:o.meta)&&zo.value.meta.preload!==!1&&(zo.value.meta.__preloaded=!0)},{immediate:!0});const t=Ce();return da(()=>import("./DrawingLayer.7c714d8b.js"),[]).then(s=>t.value=s.default),(s,o)=>(k(),Z(Mn,null,[_n(" Global Bottom "),L(z(fp)),_n(" Slides "),(k(!0),Z(Mn,null,ts(z(jn),i=>{var l,r;return k(),Z(Mn,{key:i.path},[((l=i.meta)==null?void 0:l.__preloaded)||i===z(me)?Bi((k(),T(z(nl),{key:0,is:i==null?void 0:i.component,clicks:i===z(me)?z(Oe):0,"clicks-elements":((r=i.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:Nn(z(Xi)(i)),route:i,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Lu,i===z(me)]]):_n("v-if",!0)],64)}),128)),_n(" Global Top "),L(z(mp)),z(t)?(k(),T(z(t),{key:0})):_n("v-if",!0),z(We)?_n("v-if",!0):(k(),T(Jv,{key:1}))],64))}}),nb=En({__name:"Play",setup(e){x($),Ck();const t=Q();function s(l){var r;Nr.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?pt():dt())}D4(t);const o=P(()=>j_.value||Nr.value);Ce();const i=Ce();return da(()=>import("./DrawingControls.13040135.js"),["assets/DrawingControls.13040135.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.eabd50f5.js"]).then(l=>i.value=l.default),(l,r)=>(k(),Z(Mn,null,[n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Jn(z(Ou))},[L(cp,{class:"w-full h-full",style:Jn({background:"var(--slidev-slide-container-background, black)"}),width:z(al)?z(At).width.value:void 0,scale:z(ys),onPointerdown:s},{default:v(()=>[L(Xv,{context:"slide"})]),controls:v(()=>[n("div",{class:Nn(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[z(o)?"opacity-100 right-0":"opacity-0 p-2",z(Ga)?"pointer-events-none":""]])},[L(Uv,{class:"m-auto",persist:z(o)},null,8,["persist"])],2),!z(xn).drawings.presenterOnly&&!z(Ke)&&z(i)?(k(),T(z(i),{key:0,class:"ml-0"})):_n("v-if",!0)]),_:1},8,["style","width","scale"]),_n("v-if",!0)],4),L(n1)],64))}});function gp(e){const t=P(()=>e.value.path),s=P(()=>jn.length-1),o=P(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),i=P(()=>ao(o.value)),l=P(()=>jn.find(m=>m.path===`${o.value}`)),r=P(()=>{var m,g,h;return(h=(g=(m=l.value)==null?void 0:m.meta)==null?void 0:g.slide)==null?void 0:h.id}),c=P(()=>{var m,g;return(g=(m=l.value)==null?void 0:m.meta)==null?void 0:g.layout}),u=P(()=>jn.find(m=>m.path===`${Math.min(jn.length,o.value+1)}`)),p=P(()=>jn.filter(m=>{var g,h;return(h=(g=m.meta)==null?void 0:g.slide)==null?void 0:h.title}).reduce((m,g)=>(sl(m,g),m),[])),d=P(()=>ol(p.value,l.value)),f=P(()=>il(d.value));return{route:e,path:t,total:s,currentPage:o,currentPath:i,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:f}}function hp(e,t,s){const o=Q(0);Gn(()=>{_e.afterEach(async()=>{await Gn(),o.value+=1})});const i=P(()=>{var u,p;return o.value,((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),l=P(()=>{var u,p,d;return+((d=(p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.clicks)!=null?d:i.value.length)}),r=P(()=>s.value<jn.length-1||e.value<l.value),c=P(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:i,clicksTotal:l,hasNext:r,hasPrev:c}}const eb=["id"],Qr=En({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const s=e,o=De(s,"clicksElements",t),i=P(()=>({height:`${Au}px`,width:`${St}px`})),l=Ce();da(()=>import("./DrawingPreview.ab0aa3fe.js"),[]).then(p=>l.value=p.default);const r=P(()=>s.clicks),c=hp(r,s.nav.currentRoute,s.nav.currentPage),u=P(()=>`${s.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return fe($,Fn({nav:{...s.nav,...c},configs:xn,themeConfigs:P(()=>xn.themeConfig)})),(p,d)=>{var f;return k(),Z("div",{id:z(u),class:"slide-container",style:Jn(z(i))},[L(z(fp)),L(z(nl),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":z(o),"onUpdate:clicks-elements":d[0]||(d[0]=m=>$n(o)?o.value=m:null),clicks:z(r),"clicks-disabled":!1,class:Nn(z(Xi)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),z(l)?(k(),T(z(l),{key:0,page:+e.route.path},null,8,["page"])):_n("v-if",!0),L(z(mp))],12,eb)}}}),tb=En({__name:"PrintSlide",props:{route:null},setup(e){var l;const t=e;x($);const s=Fn(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),o=P(()=>t.route),i=gp(o);return(r,c)=>(k(),Z(Mn,null,[L(Qr,{"clicks-elements":s,"onUpdate:clicks-elements":c[0]||(c[0]=u=>$n(s)?s.value=u:null),clicks:0,nav:z(i),route:z(o)},null,8,["clicks-elements","nav","route"]),z(Ha)?_n("v-if",!0):(k(!0),Z(Mn,{key:0},ts(s.length,u=>(k(),T(Qr,{key:u,clicks:u,nav:z(i),route:z(o)},null,8,["clicks","nav","route"]))),128))],64))}}),ab={id:"print-content"},sb=En({__name:"PrintContainer",props:{width:null},setup(e){const t=e;x($);const s=P(()=>t.width),o=P(()=>t.width/ut),i=P(()=>s.value/o.value),l=P(()=>i.value<ut?s.value/St:o.value*ut/St),r=jn.slice(0,-1),c=P(()=>({"select-none":!xn.selectable,"slidev-code-line-numbers":xn.lineNumbers}));return fe(Su,l),(u,p)=>(k(),Z("div",{id:"print-container",class:Nn(z(c))},[n("div",ab,[(k(!0),Z(Mn,null,ts(z(r),d=>(k(),T(tb,{key:d.path,route:d},null,8,["route"]))),128))]),Ue(u.$slots,"controls")],2))}});const ob=En({__name:"Print",setup(e){x($);const t=$t.canvasWidth,s=Math.round(t/$t.aspectRatio)+1;function o(i,{slots:l}){if(l.default)return ze("style",l.default())}return es(()=>{al?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(i,l)=>(k(),Z(Mn,null,[L(o,null,{default:v(()=>[a(" @page { size: "+we(z(t))+"px "+we(s)+"px; margin: 0px; } ",1)]),_:1}),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Jn(z(Ou))},[L(sb,{class:"w-full h-full",style:Jn({background:"var(--slidev-slide-container-background, black)"}),width:z(At).width.value},null,8,["style","width"])],4)],64))}});const ib={class:"slidev-layout end"},lb={__name:"end",setup(e){return x($),(t,s)=>(k(),Z("div",ib," END "))}},rb=dp(lb,[["__scopeId","data-v-ab32435f"]]);function Yr(e){return e.startsWith("/")?"/TPSI/4/html/"+e.slice(1):e}function cb(e,t=!1){const s=e&&["#","rgb","hsl"].some(i=>e.indexOf(i)===0),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?t?`linear-gradient(#0005, #0008), url(${Yr(e)})`:`url("${Yr(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const ub={class:"my-auto w-full"},pb=En({__name:"cover",props:{background:{default:""}},setup(e){const t=e;x($);const s=P(()=>cb(t.background,!0));return(o,i)=>(k(),Z("div",{class:"slidev-layout cover",style:Jn(z(s))},[n("div",ub,[Ue(o.$slots,"default")])],4))}}),db=n("h1",null,"Hyper Text Markup Language",-1),mb=n("p",null,"HTML per sviluppatori",-1),fb={class:"pt-12"},gb={class:"px-2 py-1"},hb=a(" Premi spazio o "),_b=a(" per la prossima slide "),kb={__name:"1",setup(e){const t={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.4.3"};return x($),(s,o)=>{const i=pp;return k(),T(pb,O(A(t)),{default:v(()=>[db,mb,n("div",fb,[n("span",gb,[hb,L(i,{class:"inline"}),_b])])]),_:1},16)}}},vb={class:"slidev-layout default"},R={__name:"default",setup(e){return x($),(t,s)=>(k(),Z("div",vb,[Ue(t.$slots,"default")]))}},bb=n("h1",null,"HTML",-1),yb=n("p",null,[n("em",null,"H"),a("yper "),n("em",null,"T"),a("ext "),n("em",null,"M"),a("arkup "),n("em",null,"L"),a("anguage (linguaggio di markup per ipertesti), comunemente noto con l\u2019acronimo di "),n("strong",null,"HTML"),a(", \xE8 un "),n("strong",null,"linguaggio di markup"),a(" per la creazione di una pagina web.")],-1),wb=n("ul",null,[n("li",null,[n("p",null,"Originariamente nato per la formattazione e impaginazione di documenti ipertestuali (web 1.0), oggi \xE8 alla base dello sviluppo di siti ed applicazioni web.")]),n("li",null,[n("p",null,[a("Viene utilizzato principalmente per il disaccoppiamento della struttura logica di una pagina web (definita appunto dal markup "),n("strong",null,"HTML"),a(") dalla sua rappresentazione, gestita tramite gli stili "),n("strong",null,"CSS"),a(" e dalla sua logica di funzionamento implementata tramite il linguaggio "),n("strong",null,"JavaScript"),a(".")])]),n("li",null,[n("p",null,"L\u2019HTML \xE8 un linguaggio di pubblico dominio, la cui sintassi \xE8 stabilita dal World Wide Web Consortium (W3C). La versione attuale, la quinta, \xE8 stata rilasciata dal W3C nell\u2019ottobre 2014.")]),n("li",null,[n("p",null,"Il motivo principale che ha spinto il W3C e i suoi membri a sviluppare HTML5 \xE8 stata la necessit\xE0 di fornire direttamente le funzionalit\xE0 che in precedenza erano fruibili tramite estensioni proprietarie all\u2019esterno dei browser, come Adobe Flash e simili. Un secondo obiettivo che gli sviluppatori si erano prefissati era quello di garantire una maggiore compatibilit\xE0 tra i diversi browser, indipendentemente dalla piattaforma software utilizzata, e principalmente mirata all\u2019espansione dei dispositivi mobili.")])],-1),zb={__name:"2",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[bb,yb,wb]),_:1},16))}},xb="/TPSI/4/html/assets/html5_1.9e65f7ef.jpg",Tb=n("h1",null,"HTML",-1),$b=n("p",null,"\xA0",-1),Mb=n("div",{grid:"~ cols-2 gap-4"},[n("div",null,[n("ul",null,[n("li",null,"HTML5 linguaggio evoluto per il markup o descrizione delle pagine HTML"),n("li",null,"Definito e standardizzato dal W3C (WWW Consortium)"),n("li",null,"Descrive la semantica ed il contenuto di una pagina Web"),n("li",null,"Definisce una serie di tecnologie correlate"),n("li",null,"Note come HTML Living Standard (\xE8 in continua evoluzione)")])]),n("div",null,[n("p",null,[n("img",{src:xb,alt:"html5_1.jpg"})])])],-1),Lb={__name:"3",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[Tb,$b,Mb]),_:1},16))}},Eb="/TPSI/4/html/assets/html5_2.f6246604.jpg",Ib=n("h1",null,"HTML",-1),Sb=n("p",null,"\xA0",-1),Ab=n("div",{grid:"~ cols-2 gap-4"},[n("div",null,[n("p",null,[a("Una "),n("strong",null,"pagina Web"),a(" contiene:")]),n("ul",null,[n("li",null,"immagini"),n("li",null,"audio"),n("li",null,"file multimediali"),n("li",null,"testo"),n("li",null,"hotword")]),n("p",null,[a("Le "),n("strong",null,"hotword"),a(" sono parti della pagina legate a link.")]),n("p",null,[a("I "),n("strong",null,"link"),a(" sono collegamenti che portano ad altre pagine o altre risorse.")])]),n("div",null,[n("p",null,[n("img",{src:Eb,alt:"html5_2.jpg"})])])],-1),Ob={__name:"4",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[Ib,Sb,Ab]),_:1},16))}},Cb=n("h1",null,"HTML",-1),Pb=n("p",null,[a("Il "),n("a",{href:"https://www.w3schools.com/",target:"_blank",rel:"noopener"},"sito web"),a(" del consorzio W3C, offre una preziosa fonte di informazioni per apprendere le tecnologie del web.")],-1),Hb=n("h3",null,"HTML",-1),Rb=n("ul",null,[n("li",null,[n("a",{href:"https://www.w3schools.com/html/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/html/default.asp")]),n("li",null,[n("a",{href:"https://www.w3schools.com/tags/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/tags/default.asp")]),n("li",null,[n("a",{href:"https://htmlreference.io/",target:"_blank",rel:"noopener"},"https://htmlreference.io/")])],-1),Fb=n("h3",null,"CSS",-1),Nb=n("ul",null,[n("li",null,[n("a",{href:"https://www.w3schools.com/css/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/css/default.asp")]),n("li",null,[n("a",{href:"https://www.w3schools.com/cssref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/cssref/default.asp")]),n("li",null,[n("a",{href:"https://cssreference.io/",target:"_blank",rel:"noopener"},"https://cssreference.io/")])],-1),qb=n("h3",null,"Java Script",-1),Wb=n("ul",null,[n("li",null,[n("a",{href:"https://www.w3schools.com/js/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/js/default.asp")]),n("li",null,[n("a",{href:"https://www.w3schools.com/jsref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/jsref/default.asp")]),n("li",null,[n("a",{href:"https://devdocs.io/javascript/",target:"_blank",rel:"noopener"},"https://devdocs.io/javascript/")]),n("li",null,[n("a",{href:"https://javascript.info/",target:"_blank",rel:"noopener"},"https://javascript.info/")])],-1),Db={__name:"5",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[Cb,Pb,Hb,Rb,Fb,Nb,qb,Wb]),_:1},16))}},jb={class:"slidev-layout section w-full h-full grid"},Bb={class:"my-auto text-center"},Te={__name:"section",setup(e){return x($),(t,s)=>(k(),Z("div",jb,[n("div",Bb,[Ue(t.$slots,"default")])]))}},Ub=n("h1",{class:"sezione"},"Ambiente di Sviluppo",-1),Vb={__name:"6",setup(e){const t={layout:"section"};return x($),(s,o)=>(k(),T(Te,O(A(t)),{default:v(()=>[Ub]),_:1},16))}},Kb=n("h1",null,"HTML - Ambiente di sviluppo",-1),Gb=n("p",null,"\xA0",-1),Qb=n("ul",null,[n("li",null,"Al fine di comprendere appieno lo sviluppo web, \xE8 preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice"),n("li",null,"Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web"),n("li",null,"Il passaggio ad un sistema autore o ad un CMS risulta poi pi\xF9 facile e intuitivo.")],-1),Yb={__name:"7",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[Kb,Gb,Qb]),_:1},16))}},Zb="/TPSI/4/html/assets/html5_3.98b93fb7.jpg",Jb=n("h1",null,"HTML - Ambiente di sviluppo",-1),Xb=n("p",null,[n("a",{href:"https://code.visualstudio.com/docs/languages/html",target:"_blank",rel:"noopener"},"Visual Studio Code")],-1),n0=n("div",{grid:"~ cols-2 gap-32"},[n("div",null,[n("ul",null,[n("li",null,"Qualsiasi editor testuale \xE8 adatto allo sviluppo web"),n("li",null,[n("strong",null,"Visual Studio Code"),a(" fornisce supporto al HTML in modo nativo")]),n("li",null,"Fornisce il syntax highlighting, smart completions con IntelliSense e formattazione customizzabile"),n("li",null,"In aggiunta sono disponibili moltissime estensioni per facilitare lo sviluppo web")])]),n("div",null,[n("p",null,[n("img",{src:Zb,alt:"html5_3.jpg"})])])],-1),e0={__name:"8",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[Jb,Xb,n0]),_:1},16))}},t0="/TPSI/4/html/assets/html5_4.d48b4fdd.jpg",a0=n("h1",null,"HTML - Ambiente di sviluppo",-1),s0=n("p",null,"Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.",-1),o0=n("p",null,[n("img",{src:t0,alt:"html5_4.jpg"})],-1),i0={__name:"9",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[a0,s0,o0]),_:1},16))}},l0=n("h1",null,"HTML - Ambiente di sviluppo",-1),r0=n("p",null,"\xA0",-1),c0=n("ul",null,[n("li",null,"Quindi per sviluppare una pagina web usiamo vscode (o il nostro editor preferito)"),n("li",null,"Scriviamo il codice di markup della pagina"),n("li",null,"Salviamo con estensione .html"),n("li",null,"Apriamo il file nel browser (CTRL + o o drag\u2019n drop)"),n("li",null,"La pagina viene visualizzata all\u2019interno del browser")],-1),u0={__name:"10",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[l0,r0,c0]),_:1},16))}},p0=n("h1",{class:"sezione"},"Tag e Attributi",-1),d0={__name:"11",setup(e){const t={layout:"section"};return x($),(s,o)=>(k(),T(Te,O(A(t)),{default:v(()=>[p0]),_:1},16))}},m0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},f0=n("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),g0=[f0];function h0(e,t){return k(),Z("svg",m0,g0)}const _0={name:"ph-clipboard",render:h0},k0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},v0=n("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),b0=[v0];function y0(e,t){return k(),Z("svg",k0,b0)}const w0={name:"ph-check-circle",render:y0};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function _p(e){return typeof e>"u"||e===null}function z0(e){return typeof e=="object"&&e!==null}function x0(e){return Array.isArray(e)?e:_p(e)?[]:[e]}function T0(e,t){var s,o,i,l;if(t)for(l=Object.keys(t),s=0,o=l.length;s<o;s+=1)i=l[s],e[i]=t[i];return e}function $0(e,t){var s="",o;for(o=0;o<t;o+=1)s+=e;return s}function M0(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var L0=_p,E0=z0,I0=x0,S0=$0,A0=M0,O0=T0,el={isNothing:L0,isObject:E0,toArray:I0,repeat:S0,isNegativeZero:A0,extend:O0};function kp(e,t){var s="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(s+=`

`+e.mark.snippet),o+" "+s):o}function Ya(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=kp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ya.prototype=Object.create(Error.prototype);Ya.prototype.constructor=Ya;Ya.prototype.toString=function(t){return this.name+": "+kp(this,t)};var xt=Ya,C0=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],P0=["scalar","sequence","mapping"];function H0(e){var t={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(o){t[String(o)]=s})}),t}function R0(e,t){if(t=t||{},Object.keys(t).forEach(function(s){if(C0.indexOf(s)===-1)throw new xt('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=H0(t.styleAliases||null),P0.indexOf(this.kind)===-1)throw new xt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Zn=R0;function Zr(e,t){var s=[];return e[t].forEach(function(o){var i=s.length;s.forEach(function(l,r){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(i=r)}),s[i]=o}),s}function F0(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function o(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(o);return e}function ci(e){return this.extend(e)}ci.prototype.extend=function(t){var s=[],o=[];if(t instanceof Zn)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new xt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(l){if(!(l instanceof Zn))throw new xt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new xt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new xt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof Zn))throw new xt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(ci.prototype);return i.implicit=(this.implicit||[]).concat(s),i.explicit=(this.explicit||[]).concat(o),i.compiledImplicit=Zr(i,"implicit"),i.compiledExplicit=Zr(i,"explicit"),i.compiledTypeMap=F0(i.compiledImplicit,i.compiledExplicit),i};var N0=ci,q0=new Zn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),W0=new Zn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),D0=new Zn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),j0=new N0({explicit:[q0,W0,D0]});function B0(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function U0(){return null}function V0(e){return e===null}var K0=new Zn("tag:yaml.org,2002:null",{kind:"scalar",resolve:B0,construct:U0,predicate:V0,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function G0(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Q0(e){return e==="true"||e==="True"||e==="TRUE"}function Y0(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Z0=new Zn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:G0,construct:Q0,predicate:Y0,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function J0(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function X0(e){return 48<=e&&e<=55}function ny(e){return 48<=e&&e<=57}function ey(e){if(e===null)return!1;var t=e.length,s=0,o=!1,i;if(!t)return!1;if(i=e[s],(i==="-"||i==="+")&&(i=e[++s]),i==="0"){if(s+1===t)return!0;if(i=e[++s],i==="b"){for(s++;s<t;s++)if(i=e[s],i!=="_"){if(i!=="0"&&i!=="1")return!1;o=!0}return o&&i!=="_"}if(i==="x"){for(s++;s<t;s++)if(i=e[s],i!=="_"){if(!J0(e.charCodeAt(s)))return!1;o=!0}return o&&i!=="_"}if(i==="o"){for(s++;s<t;s++)if(i=e[s],i!=="_"){if(!X0(e.charCodeAt(s)))return!1;o=!0}return o&&i!=="_"}}if(i==="_")return!1;for(;s<t;s++)if(i=e[s],i!=="_"){if(!ny(e.charCodeAt(s)))return!1;o=!0}return!(!o||i==="_")}function ty(e){var t=e,s=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function ay(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!el.isNegativeZero(e)}var sy=new Zn("tag:yaml.org,2002:int",{kind:"scalar",resolve:ey,construct:ty,predicate:ay,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),oy=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function iy(e){return!(e===null||!oy.test(e)||e[e.length-1]==="_")}function ly(e){var t,s;return t=e.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var ry=/^[-+]?[0-9]+e/;function cy(e,t){var s;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(el.isNegativeZero(e))return"-0.0";return s=e.toString(10),ry.test(s)?s.replace("e",".e"):s}function uy(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||el.isNegativeZero(e))}var py=new Zn("tag:yaml.org,2002:float",{kind:"scalar",resolve:iy,construct:ly,predicate:uy,represent:cy,defaultStyle:"lowercase"}),dy=j0.extend({implicit:[K0,Z0,sy,py]}),my=dy,vp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),bp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function fy(e){return e===null?!1:vp.exec(e)!==null||bp.exec(e)!==null}function gy(e){var t,s,o,i,l,r,c,u=0,p=null,d,f,m;if(t=vp.exec(e),t===null&&(t=bp.exec(e)),t===null)throw new Error("Date resolve error");if(s=+t[1],o=+t[2]-1,i=+t[3],!t[4])return new Date(Date.UTC(s,o,i));if(l=+t[4],r=+t[5],c=+t[6],t[7]){for(u=t[7].slice(0,3);u.length<3;)u+="0";u=+u}return t[9]&&(d=+t[10],f=+(t[11]||0),p=(d*60+f)*6e4,t[9]==="-"&&(p=-p)),m=new Date(Date.UTC(s,o,i,l,r,c,u)),p&&m.setTime(m.getTime()-p),m}function hy(e){return e.toISOString()}var _y=new Zn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:fy,construct:gy,instanceOf:Date,represent:hy});function ky(e){return e==="<<"||e===null}var vy=new Zn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:ky}),tl=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function by(e){if(e===null)return!1;var t,s,o=0,i=e.length,l=tl;for(s=0;s<i;s++)if(t=l.indexOf(e.charAt(s)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function yy(e){var t,s,o=e.replace(/[\r\n=]/g,""),i=o.length,l=tl,r=0,c=[];for(t=0;t<i;t++)t%4===0&&t&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(o.charAt(t));return s=i%4*6,s===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):s===18?(c.push(r>>10&255),c.push(r>>2&255)):s===12&&c.push(r>>4&255),new Uint8Array(c)}function wy(e){var t="",s=0,o,i,l=e.length,r=tl;for(o=0;o<l;o++)o%3===0&&o&&(t+=r[s>>18&63],t+=r[s>>12&63],t+=r[s>>6&63],t+=r[s&63]),s=(s<<8)+e[o];return i=l%3,i===0?(t+=r[s>>18&63],t+=r[s>>12&63],t+=r[s>>6&63],t+=r[s&63]):i===2?(t+=r[s>>10&63],t+=r[s>>4&63],t+=r[s<<2&63],t+=r[64]):i===1&&(t+=r[s>>2&63],t+=r[s<<4&63],t+=r[64],t+=r[64]),t}function zy(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var xy=new Zn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:by,construct:yy,predicate:zy,represent:wy}),Ty=Object.prototype.hasOwnProperty,$y=Object.prototype.toString;function My(e){if(e===null)return!0;var t=[],s,o,i,l,r,c=e;for(s=0,o=c.length;s<o;s+=1){if(i=c[s],r=!1,$y.call(i)!=="[object Object]")return!1;for(l in i)if(Ty.call(i,l))if(!r)r=!0;else return!1;if(!r)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function Ly(e){return e!==null?e:[]}var Ey=new Zn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:My,construct:Ly}),Iy=Object.prototype.toString;function Sy(e){if(e===null)return!0;var t,s,o,i,l,r=e;for(l=new Array(r.length),t=0,s=r.length;t<s;t+=1){if(o=r[t],Iy.call(o)!=="[object Object]"||(i=Object.keys(o),i.length!==1))return!1;l[t]=[i[0],o[i[0]]]}return!0}function Ay(e){if(e===null)return[];var t,s,o,i,l,r=e;for(l=new Array(r.length),t=0,s=r.length;t<s;t+=1)o=r[t],i=Object.keys(o),l[t]=[i[0],o[i[0]]];return l}var Oy=new Zn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Sy,construct:Ay}),Cy=Object.prototype.hasOwnProperty;function Py(e){if(e===null)return!0;var t,s=e;for(t in s)if(Cy.call(s,t)&&s[t]!==null)return!1;return!0}function Hy(e){return e!==null?e:{}}var Ry=new Zn("tag:yaml.org,2002:set",{kind:"mapping",resolve:Py,construct:Hy});my.extend({implicit:[_y,vy],explicit:[xy,Ey,Oy,Ry]});function Jr(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var Fy=new Array(256),Ny=new Array(256);for(var jt=0;jt<256;jt++)Fy[jt]=Jr(jt)?1:0,Ny[jt]=Jr(jt);function qy(e){return Array.from(new Set(e))}function Xr(...e){let t,s,o;e.length===1?(t=0,o=1,[s]=e):[t,s,o=1]=e;const i=[];let l=t;for(;l<s;)i.push(l),l+=o||1;return i}function Wy(e,t){if(!t||t==="all"||t==="*")return Xr(1,e+1);const s=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[i,l]=o.split("-",2);s.push(...Xr(+i,l?+l+1:e+1))}return qy(s).filter(o=>o<=e).sort((o,i)=>o-i)}const Dy=["title"],en=En({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;x($);const s=x(Sa),o=x(zt),i=x(Aa);function l(f=5){const m=[],g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=g.length;for(let w=0;w<f;w++)m.push(g.charAt(Math.floor(Math.random()*h)));return m.join("")}const r=Q(),c=Rt();pa(()=>{const f=t.at==null?o==null?void 0:o.value.length:t.at,m=P(()=>i!=null&&i.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),t.ranges.length-1)),g=P(()=>t.ranges[m.value]||"");if(t.ranges.length>=2&&!(i!=null&&i.value)){const h=l(),w=Xf(t.ranges.length-1).map(y=>h+y);o!=null&&o.value&&(o.value.push(...w),Js(()=>w.forEach(y=>Zo(o.value,y)),c))}es(()=>{if(!r.value)return;const w=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const y of w){const S=Array.from(y.querySelectorAll(".line")),I=Wy(S.length,g.value);if(S.forEach((E,C)=>{const B=I.includes(C+1);E.classList.toggle(yt,!0),E.classList.toggle("highlighted",B),E.classList.toggle("dishonored",!B)}),t.maxHeight){const E=y.querySelector(".line.highlighted");E&&E.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=eh();function d(){var m,g;const f=(g=(m=r.value)==null?void 0:m.querySelector(".slidev-code"))==null?void 0:g.textContent;f&&p(f)}return(f,m)=>{const g=w0,h=_0;return k(),Z("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:Jn({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Ue(f.$slots,"default"),z(xn).codeCopy?(k(),Z("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:z(u)?"Copied":"Copy",onClick:m[0]||(m[0]=w=>d())},[z(u)?(k(),T(g,{key:0,class:"p-2 w-8 h-8"})):(k(),T(h,{key:1,class:"p-2 w-8 h-8"}))],8,Dy)):_n("v-if",!0)],4)}}}),jy=n("h1",null,"TAG",-1),By=n("p",null,"I TAG HTML sono marcatori (Markup Language) che modificano la semantica (senso, ruolo organizzazione) dei contenuti di una pagina.",-1),Uy=n("h3",null,"Anatomia di un TAG",-1),Vy=n("ul",null,[n("li",null,"Un tag \xE8 racchiuso tra < e >"),n("li",null,"Il nome del tag \xE8 sempre scritto in minuscolo"),n("li",null,[a("Se non specificato deve sempre esserci un tag di "),n("strong",null,"apertura"),a(" ed un tag di "),n("strong",null,"chiusura")])],-1),Ky=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tagname")]),n("span",{class:"token punctuation"},">")]),a(" --> TAG di apertura")])])],-1),Gy=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tagname")]),n("span",{class:"token punctuation"},">")]),a(" --> TAG di chiusura")])])],-1),Qy=n("p",null,"Il contenuto da modificare \xE8 compreso tra il tag di apertura ed il tag di chiusura",-1),Yy=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tagname")]),n("span",{class:"token punctuation"},">")]),a("...Contenuto del tag..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tagname")]),n("span",{class:"token punctuation"},">")])])])],-1),Zy={__name:"12",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[jy,By,Uy,Vy,L(i,U({},{ranges:[""]}),{default:v(()=>[Ky]),_:1},16),L(i,U({},{ranges:[""]}),{default:v(()=>[Gy]),_:1},16),Qy,L(i,U({},{ranges:[""]}),{default:v(()=>[Yy]),_:1},16)]),_:1},16)}}},Jy=n("h1",null,"TAG singleton",-1),Xy=n("p",null,"Elementi HTML con il solo tag di apertura.",-1),nw=n("ul",null,[n("li",null,[a("In HTML sono definiti una serie di tag, detti "),n("em",null,"singleton"),a(" che non richiedono il tag di chiusura.")]),n("li",null,"Per essere formalmente corretti questi elementi devono essere scritti in questo modo:")],-1),ew=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tag")]),a(),n("span",{class:"token punctuation"},"/>")]),a(": notare lo slash finale che indica la mancanza di un tag di chiusura.")])])],-1),tw=n("p",null,"Qui la lista dei tag singleton che non richiedono una chiusura.",-1),aw=n("div",{grid:"~ cols-2 gap-4"},[n("div",null,[n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("area")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("base")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("col")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("embed")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("command")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("hr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),n("span",{class:"token punctuation"},">")])])])])]),n("div",null,[n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("keygen")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("link")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meta")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("param")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("source")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("track")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("wbr")]),n("span",{class:"token punctuation"},">")])])])])])],-1),sw={__name:"13",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[Jy,Xy,nw,L(i,U({},{ranges:[""]}),{default:v(()=>[ew]),_:1},16),tw,aw]),_:1},16)}}},ow=n("h1",null,"Attributi",-1),iw=n("p",null,"Caratteristiche addizionali di un TAG",-1),lw=n("ul",null,[n("li",null,[a("I tag HTML possono avere degli "),n("strong",null,"attributi"),a(" che forniscono delle informazioni addizionali al browser.")]),n("li",null,[a("Gli attributi sono "),n("strong",null,"sempre"),a(" specificati nel tag di apertura.")]),n("li",null,"Gli attributi sono definiti da una coppia nome-valore")],-1),rw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tagname")]),a(),n("span",{class:"token attr-name"},"nome"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("valore"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("...Contenuto del tag..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tagname")]),n("span",{class:"token punctuation"},">")])])])],-1),cw=n("ul",null,[n("li",null,"Un tag pu\xF2 avere 0, 1 o pi\xF9 attributi")],-1),uw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tagname")]),n("span",{class:"token punctuation"},">")]),a("...Contenuto del tag..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tagname")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tagname")]),a(),n("span",{class:"token attr-name"},"nome"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("valore"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("...Contenuto del tag..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tagname")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tagname")]),a(),n("span",{class:"token attr-name"},"nome1"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("valore1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"nome2"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("valore2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"nome3"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("valore3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("...Contenuto del tag..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tagname")]),n("span",{class:"token punctuation"},">")])])])],-1),pw=a(" ### Esempio: "),dw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meta")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("author"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Antonio Mancuso"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://www.w3schools.com"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Visit W3Schools"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("This is a red paragraph."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")])])])],-1),mw={__name:"14",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[ow,iw,lw,L(i,U({},{ranges:[""]}),{default:v(()=>[rw]),_:1},16),cw,L(i,U({},{ranges:[""]}),{default:v(()=>[uw]),_:1},16),pw,L(i,U({},{ranges:[""]}),{default:v(()=>[dw]),_:1},16)]),_:1},16)}}},fw=n("h1",{class:"sezione"},"La struttura di una pagina Web",-1),gw={__name:"15",setup(e){const t={layout:"section"};return x($),(s,o)=>(k(),T(Te,O(A(t)),{default:v(()=>[fw]),_:1},16))}},hw=n("h1",null,"Struttura pagina HTML",-1),_w=n("p",null,"Una pagina HTML ha una struttuta fissa che deve sempre essere rispettata.",-1),kw=n("p",null,"Una generica pagina HTML \xE8 composta da 3 sezioni principali:",-1),vw=n("ol",null,[n("li",null,[n("strong",null,"Documento"),a(": il contenitore di pi\xF9 alto livello, che racchiude tutte le altre sezioni della pagina HTML.")]),n("li",null,[n("strong",null,"Head"),a(": il contenitore per i metadati (dato che descrive un dato) del documento e va inserito in testa al docuemnto.")]),n("li",null,[n("strong",null,"Body"),a(": consiste nel contenuto principale della pagina HTML.")])],-1),bw={__name:"16",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[hw,_w,kw,vw]),_:1},16))}},yw="/TPSI/4/html/assets/html5_5.a532b0f3.jpg",ww=n("h1",null,"Struttura pagina HTML",-1),zw=n("p",null,"Rappresentazione grafica della struttura di una pagina HTML",-1),xw=n("p",null,[n("img",{src:yw,alt:"html5_5.jpg"})],-1),Tw={__name:"17",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[ww,zw,xw]),_:1},16))}},$w=n("h1",null,"Struttura pagina HTML",-1),Mw=n("p",null,"Documento HTML",-1),Lw=n("ul",null,[n("li",null,"Tutti i documenti HTML devono iniziare con la dichiarazione DOCTYPE che deve essere seguita dal TAG di pi\xF9 alto livello")],-1),Ew=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),a(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("html")]),n("span",{class:"token punctuation"},">")])])])],-1),Iw=n("ul",null,[n("li",null,[n("strong",null,"<!DOCTYPE html>"),a(": rappresenta il tipo di documento (html) e permette al browser di visualizzare la pagina HTML in modo corretto.")]),n("li",null,"Deve apparire nella pagina 1 sola volta come prima linea e prima di qualsiasi altro elemento o tag."),n("li",null,[n("strong",null,"<html>"),a(": \xE8 il primo tag di apertura che indica l\u2019inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.")])],-1),Sw={__name:"18",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[$w,Mw,Lw,L(i,U({},{ranges:[""]}),{default:v(()=>[Ew]),_:1},16),Iw]),_:1},16)}}},Aw=n("h1",null,"Struttura pagina HTML",-1),Ow=n("p",null,"Header del documento",-1),Cw=n("ul",null,[n("li",null,[a("Il primo elemento di apertura della pagina HTML \xE8 l\u2019"),n("em",null,[n("strong",null,"HEAD"),a("er")]),a(" o intestazione.")]),n("li",null,[n("strong",null,"<head>"),a(": tag di apertura dell\u2019header che contiene la descrizione dei "),n("em",null,"metadati"),a(" del documento HTML.")]),n("li",null,"I metadati sono dati che descrivono delle caratteristiche del documento, per esempip il titolo, il set di caratteri, l\u2019autore,etc\u2026"),n("li",null,[a("La sezione header ed i metadati contenuti "),n("strong",null,"NON"),a(" sono visualizzati.")]),n("li",null,"Il pi\xF9 importante elemento della sezione head \xE8 il titolo identificato dal tag")],-1),Pw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("title")]),n("span",{class:"token punctuation"},">")]),a("Titolo della pagina"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("title")]),n("span",{class:"token punctuation"},">")])])])],-1),Hw={__name:"19",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[Aw,Ow,Cw,L(i,U({},{ranges:[""]}),{default:v(()=>[Pw]),_:1},16)]),_:1},16)}}},Rw=n("h1",null,"Struttura pagina HTML",-1),Fw=n("p",null,"Body e contenuto del documento",-1),Nw=n("ul",null,[n("li",null,"La sezione del documento identificata dal tag")],-1),qw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("body")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},"  ..."),a(`
`),n("span",{class:"line"},"  ..."),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("body")]),n("span",{class:"token punctuation"},">")])])])],-1),Ww=a(" - Rappresenta e contiene tutti i tag di descrizione e markup della pagina. - In questa sezione viene definito il contenuto che si vuole visualizzare nel browser. "),Dw={__name:"20",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[Rw,Fw,Nw,L(i,U({},{ranges:[""]}),{default:v(()=>[qw]),_:1},16),Ww]),_:1},16)}}},jw=n("h1",null,"Struttura pagina HTML",-1),Bw=n("p",null,"Pagina HTML base",-1),Uw=n("p",null,"Questo \xE8 il codice della pagina HTML minimale, che contiene solo le sezioni principali",-1),Vw=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),a(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token comment"},"<!-- HTML5-->")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"<!-- Questo \xE8 un commento su una singola riga -->")]),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},"<!-- Questo \xE8 un commento "),a(`
`),n("span",{class:"line"},"     su pi\xF9 righe"),a(`
`),n("span",{class:"line"},"-->"),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("html")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("it"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token comment"},"<!-- Pagina HTML -->")]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("head")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token comment"},"<!-- Header della pagina -->")]),a(`
`),n("span",{class:"line"},"    "),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token comment"},"<!-- Qui vanno inserite informazioni relative alla pagina ma che non saranno visualizzate -->")]),a(`
`),n("span",{class:"line"},"  "),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("head")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("body")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token comment"},"<!-- Corpo principale della pagina HTML -->")]),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token comment"},"<!-- Questa sezione cotiene il contenuto della pagina HTML che viene visualizzato nel browser -->")]),a(`
`),n("span",{class:"line"},"  "),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("body")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("html")]),n("span",{class:"token punctuation"},">")])])])],-1),Kw={__name:"21",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[jw,Bw,Uw,L(i,U({},{ranges:[""]}),{default:v(()=>[Vw]),_:1},16)]),_:1},16)}}},Gw=n("h1",null,"Struttura pagina HTML",-1),Qw=n("p",null,"I tag dell\u2019header",-1),Yw=n("p",null,"La sezione <head> pu\xF2 contenere i seguenti tag:",-1),Zw=n("ul",null,[n("li",null,"<title>: definisce il titolo della pagina HTML."),n("li",null,"<style>: definisce lo stile da applicare alla pagina HTML."),n("li",null,"<meta>: definisce specifici metadata per il documento."),n("li",null,"<link>: utilizzato per referenziare elementi o documenti esterni."),n("li",null,"<script>: definisce la logica da eseguire durante la visualizzazione delle pagina."),n("li",null,"<base>: specifica un UTL di base da applicare a tutto il documento.")],-1),Jw={__name:"22",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[Gw,Qw,Yw,Zw]),_:1},16))}},Xw=n("h1",null,"Struttura pagina HTML",-1),nz=n("p",null,"I tag dell\u2019header: <title>",-1),ez=n("ul",null,[n("li",null,"Il pi\xF9 importante elemento della sezione head \xE8 il titolo identificato dal tag")],-1),tz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("title")]),n("span",{class:"token punctuation"},">")]),a("Titolo della pagina"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("title")]),n("span",{class:"token punctuation"},">")])])])],-1),az=a(" - Il titolo deve contenere solo informazioni testuali ed \xE8 visualizzato nel bordo o tab della finestra del browser. - Il titolo \xE8 molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull'algoritmo che decide in quale ordine visualizzare le pagine trovate. "),sz={__name:"23",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[Xw,nz,ez,L(i,U({},{ranges:[""]}),{default:v(()=>[tz]),_:1},16),az]),_:1},16)}}},oz=n("h1",null,"Struttura pagina HTML",-1),iz=n("p",null,"I tag dell\u2019header: <meta>",-1),lz=n("p",null,"Viene utilizzato per specificare vari tipi di metadati, tra cui:",-1),rz=n("ul",null,[n("li",null,[n("em",null,"character set"),a(": set di caratteri usato dalla pagina web")]),n("li",null,[n("em",null,"descrizione pagina"),a(": descrizione della pagina e dei suoi contenuti")]),n("li",null,[n("em",null,"keywords"),a(": parole chiave per le ricerche web")]),n("li",null,[n("em",null,"autore del documento"),a(": autore/i del documento")]),n("li",null,[n("em",null,"viewport settings"),a(": impostazioni del viewport, spesso utile per dispositivi mobili")])],-1),cz=n("p",null,"Importante notare che i metadati, non sono visualizzati dal browser, ma utilizzati dai motori di ricerca per comprendere meglio il contenuto della pagina stessa.",-1),uz={__name:"24",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[oz,iz,lz,rz,cz]),_:1},16))}},pz=n("h1",null,"Struttura pagina HTML",-1),dz=n("p",null,"I tag dell\u2019header: <style>",-1),mz=n("ul",null,[n("li",null,"Definisce uno o pi\xF9 stili che vanno a modificare la visualizzazione della pagina HTML")],-1),fz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},"  body {background-color: powderblue;}"),a(`
`),n("span",{class:"line"},"  h1 {color: red;}"),a(`
`),n("span",{class:"line"},"  p {color: blue;}"),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")])])])],-1),gz=n("ul",null,[n("li",null,"Normalmente non si usa mai in quanto non \xE8 una buona pratica di programmazione"),n("li",null,[a("Per pagine di media/alta complessit\xE0 non si include in quanto \xE8 pi\xF9 pulito definire gli stili della pagina in un file esterno di tipo "),n("strong",null,"CSS")])],-1),hz={__name:"25",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[pz,dz,mz,L(i,U({},{ranges:[""]}),{default:v(()=>[fz]),_:1},16),gz]),_:1},16)}}},_z=n("h1",null,"Struttura pagina HTML",-1),kz=n("p",null,"I tag dell\u2019header: <script>",-1),vz=n("ul",null,[n("li",null,[a("Desinisce uno script in "),n("strong",null,"Javascript"),a(" che viene eseguito dal browser durante la visualizzazione della pagina.")]),n("li",null,"Permette di eseguire un programma lato client direttamente all\u2019interno del browser."),n("li",null,"Normalmente utilizzato per interagire con l\u2019utente o per modificare l\u2019aspetto della pagina stessa.")],-1),bz=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),a("script"),n("span",{class:"token operator"},">")]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"myFunction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a()]),a(`
`),n("span",{class:"line"},[a("        document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"titolo"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),a("innerHTML "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},'"STRUTTURA BASE DI UNA PAGINA WEB"'),n("span",{class:"token punctuation"},";")]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token punctuation"},"}")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),a("script"),n("span",{class:"token operator"},">")])])],-1),yz=n("ul",null,[n("li",null,"Normalmente non si usa mai in quanto non \xE8 una buona pratica di programmazione"),n("li",null,[a("Per pagine di media/alta complessit\xE0 non si include in quanto \xE8 pi\xF9 pulito definire gli script della pagina in un file esterno di tipo "),n("strong",null,"JS")])],-1),wz={__name:"26",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[_z,kz,vz,L(i,U({},{ranges:[""]}),{default:v(()=>[bz]),_:1},16),yz]),_:1},16)}}},zz=n("h1",null,"Struttura pagina HTML",-1),xz=n("p",null,"Pagina HTML base",-1),Tz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),a(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token comment"},"<!-- HTML5-->")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("html")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("it"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token comment"},"<!-- Pagina HTML -->")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("head")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token comment"},"<!-- Qui vanno inserite informazioni relative alla pagina ma che non saranno visualizzate -->")]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token comment"},"<!-- sezione meta Fornisce informazioni al web browser e ai motori di ricerca per il processo di indicizzazione -->")]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meta")]),a(),n("span",{class:"token attr-name"},"charset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("UTF-8"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meta")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("author"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Antonio Mancuso"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meta")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("description"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Template HTML"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meta")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("keywords"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("template, html, lezioni, scuola"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meta")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("viewport"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("width=device-width, initial-scale=1.0"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meta")]),a(),n("span",{class:"token attr-name"},"http-equiv"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("refresh"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token comment"},"<!-- Duranbte la fase di sviluppo permette il refresh  automatico della pagina  -->")]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("title")]),n("span",{class:"token punctuation"},">")]),a("Prima pagina HTML"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("title")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token comment"},"<!-- titolo della pagina -->")]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},"      body {background-color: powderblue;}"),a(`
`),n("span",{class:"line"},"      h1 {color: blue;}"),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},"      function myFunction() { "),a(`
`),n("span",{class:"line"},'        document.getElementById("titolo").innerHTML = "STRUTTURA BASE DI UNA PAGINA WEB";'),a(`
`),n("span",{class:"line"},"      }"),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("head")]),n("span",{class:"token punctuation"},">")])])])],-1),$z={__name:"27",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[zz,xz,L(i,U({},{ranges:[""]}),{default:v(()=>[Tz]),_:1},16)]),_:1},16)}}},Mz=n("h1",null,"Struttura pagina HTML",-1),Lz=n("p",null,"Pagina HTML base",-1),Ez=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("body")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token comment"},"<!-- Corpo principale della pagina HTML-->")]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("center")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h1")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("titolo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Struttura base di una pagina web"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h1")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://source.unsplash.com/collection/94734566/1920x1080"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("60%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("button"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"onclick"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value javascript language-javascript"},[n("span",{class:"token function"},"myFunction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("Prova a premere"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("button")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("center")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("body")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("html")]),n("span",{class:"token punctuation"},">")])])])],-1),Iz={__name:"28",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[Mz,Lz,L(i,U({},{ranges:[""]}),{default:v(()=>[Ez]),_:1},16)]),_:1},16)}}},Sz=n("h1",null,"Esercizio html_01",-1),Az=n("p",null,"Pagina HTML base",-1),Oz=n("ol",null,[n("li",null,[a("Creare una pagina HTML come visto nelle slide precedenti e nominarlo "),n("em",null,"pagina.html")]),n("li",null,"Aprire la pagina nel browser e verificarne il funzionamento"),n("li",null,[a("Provare a modificare la sezione "),n("em",null,"body"),a(" e verificare i cambiamenti")]),n("li",null,[a("Provare a modificare la sezione "),n("em",null,"style"),a(" e verificare i cambiamenti")]),n("li",null,[a("Provare a modificare la sezione "),n("em",null,"script"),a(" e verificare i cambiamenti")])],-1),Cz={__name:"29",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[Sz,Az,Oz]),_:1},16))}},Pz=n("h1",{class:"sezione"},"Titoli e Paragrafi in HTML",-1),Hz={__name:"30",setup(e){const t={layout:"section"};return x($),(s,o)=>(k(),T(Te,O(A(t)),{default:v(()=>[Pz]),_:1},16))}},Rz="/TPSI/4/html/assets/html5_7.c1d52ad4.jpg",Fz=n("h1",null,"HTML Headings",-1),Nz=n("p",null,"Titoli e sottotitoli",-1),qz=n("ul",null,[n("li",null,"Heading o intestazione: sono marcatori HTML che permettono di definire titoli e sottotitoli in una pagina web."),n("li",null,"HTML definisce 6 livelli di heading, dal pi\xF9 importante al meno importante:")],-1),Wz={grid:"~ cols-2 gap-32"},Dz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"<!--livello pi\xF9 importante-->")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h1")]),n("span",{class:"token punctuation"},">")]),a("Heading 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h1")]),n("span",{class:"token punctuation"},">")]),a()]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h2")]),n("span",{class:"token punctuation"},">")]),a("Heading 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h2")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h3")]),n("span",{class:"token punctuation"},">")]),a("Heading 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h3")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),n("span",{class:"token punctuation"},">")]),a("Heading 4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h5")]),n("span",{class:"token punctuation"},">")]),a("Heading 5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h5")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h6")]),n("span",{class:"token punctuation"},">")]),a("Heading 6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h6")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"<!--livello meno importante-->")])])],-1),jz=n("ul",null,[n("li",null,[a("I motori di ricerca usano i tag di "),n("em",null,"heading"),a(" per capire e definire un indice del contenuto di una pagina")]),n("li",null,[n("strong",null,"NOTA"),a(": "),n("em",null,[a("Usa i tag <hN> solo per i titoli e sottotitoli. "),n("strong",null,"NON"),a(" usarli per visualizzare testo in grassetto o con font pi\xF9 grande.")])])],-1),Bz=n("div",null,[n("p",null,[n("img",{src:Rz,alt:"html5_7.jpg"})])],-1),Uz={__name:"31",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[Fz,Nz,qz,n("div",Wz,[n("div",null,[L(i,U({},{ranges:[""]}),{default:v(()=>[Dz]),_:1},16),jz]),Bz])]),_:1},16)}}},Vz=n("h1",null,"HTML Paragrafi",-1),Kz=n("p",null,"Blocchi di testo",-1),Gz=n("ul",null,[n("li",null,"Nell\u2019editing di una pagina HTML, \xE8 spesso utile poter inserire un blocco di testo o paragrafo"),n("li",null,[a("HTML mette a disposizione un tag specifico "),n("strong",null,"<p>"),a(" che definisce un paragrafo di testo, lungo a piacere, da visualizzare in una pagina web")])],-1),Qz=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},"  ..."),a(`
`),n("span",{class:"line"},"  ... Blocco di testo"),a(`
`),n("span",{class:"line"},"  ..."),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")])])])],-1),Yz=a(" - Ogni paragrafo \xE8 preceduto e seguito da una linea bianca distanziatrice. - Il browser \xE8 libero di aggiunge automaticamente degli spazi (un margine) prima e dopo il testo. - Non si pu\xF2 essere sicuri di come il browser visualizzi il paragrafo. - Il risultato pu\xF2 essere diverso su uno schermo grande rispetto ad uno piccolo. - Pertanto l'aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser. "),Zz={__name:"32",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[Vz,Kz,Gz,L(i,U({},{ranges:[""]}),{default:v(()=>[Qz]),_:1},16),Yz]),_:1},16)}}},Jz=n("h1",null,"Esercizio html_02",-1),Xz=n("p",null,"Heading e paragrafi",-1),nx=n("ol",null,[n("li",null,[a("Trasformare il file di test "),n("a",{href:"../../support/esercizio_html_02.txt",target:"_blank",rel:"noopener"},[n("em",null,"esercizio_html_02.txt")]),a(" in "),n("em",null,"|cognome|_esercizio_html_02.html")]),n("li",null,"Creare la struttura della pagina HTML inserendo anche i metadati appropriati"),n("li",null,"Impaginare il testo inserendo, in modo appropriato, gli heading necessari per titoli e sottotitoli"),n("li",null,"Suddividere il testo in paragrafi in modo opportuno"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_02.html")],-1),ex={__name:"33",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[Jz,Xz,nx]),_:1},16))}},tx=n("h1",{class:"sezione"},"Elementi block e inline",-1),ax={__name:"34",setup(e){const t={layout:"section"};return x($),(s,o)=>(k(),T(Te,O(A(t)),{default:v(()=>[tx]),_:1},16))}},sx=n("h1",null,"Display Value",-1),ox=n("p",null,"Elementi inline e block",-1),ix=n("p",null,"Ogni elemento HTML ha un valore di display in funzione del tipo di elemento:",-1),lx=n("h3",null,[n("strong",null,"block"),a(" element")],-1),rx=n("ul",null,[n("li",null,"Un elemento block comincia sempre su una nuova linea"),n("li",null,"Un elemento block occupa tutta la larghezza possibile anche se non necessaria"),n("li",null,"Un elemento block ha un margine superiore ed inferiore")],-1),cx=n("pre",null,[a(`
`),n("div",{style:{border:"1px solid black",padding:"8px 0px 8px 5px"}},"The <div> element is a block-level element."),a(`
`),n("div",{style:{border:"1px solid black",padding:"8px 0px 8px 5px"}},"The <h1> element is another block-level element."),a(`
`)],-1),ux=n("p",null,"Qui la lista di tag di tipo block:",-1),px=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("address")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("article")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("aside")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("blockquote")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("canvas")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dd")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dl")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dt")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("fieldset")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("figcaption")]),n("span",{class:"token punctuation"},">")]),a()]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("figure")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("footer")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h1")]),n("span",{class:"token punctuation"},">")]),a("-"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h6")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("header")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("hr")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("main")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("nav")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("noscript")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ol")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pre")]),n("span",{class:"token punctuation"},">")]),a()]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("section")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("table")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tfoot")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ul")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("video")]),n("span",{class:"token punctuation"},">")])])])],-1),dx={__name:"35",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[sx,ox,ix,lx,rx,cx,ux,L(i,U({},{ranges:[""]}),{default:v(()=>[px]),_:1},16)]),_:1},16)}}},mx=n("h1",null,"Display Value",-1),fx=n("p",null,"Elementi inline e block",-1),gx=n("h3",null,[n("strong",null,"inline"),a(" element")],-1),hx=n("ul",null,[n("li",null,"Un elemento inline non comincia su una nuova linea"),n("li",null,"Un elemento inline occupa solo la larghezza minima necessaria")],-1),_x=n("pre",null,[a(`
`),n("span",{style:{padding:"0px 5px 0px 5px",border:"1px solid black"}},"<span> is a inline-level element."),n("span",{style:{padding:"0px 5px 0px 5px",border:"1px solid black"}},"<input> is another inline-level element."),a(`
`)],-1),kx=n("p",null,"Qui la lista di tag di tipo block:",-1),vx=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("abbr")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("acronym")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("b")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("bdo")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("big")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("button")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("cite")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("code")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dfn")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("em")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("i")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),n("span",{class:"token punctuation"},">")]),a()]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("kbd")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("map")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("object")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("output")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("samp")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("select")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("small")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("strong")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sub")]),n("span",{class:"token punctuation"},">")]),a()]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sup")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("textarea")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("time")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tt")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("var")]),n("span",{class:"token punctuation"},">")])])])],-1),bx={__name:"36",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[mx,fx,gx,hx,_x,kx,L(i,U({},{ranges:[""]}),{default:v(()=>[vx]),_:1},16)]),_:1},16)}}},yx=n("h1",null,"DIV",-1),wx=n("p",null,"Contenitore di contenitori block",-1),zx=n("ul",null,[n("li",null,[a("Un tag estremamente importante nello sviluppo web moderno \xE8 "),n("strong",null,"<div>"),a(".")]),n("li",null,[n("strong",null,"<DIV>"),a(" \xE8 di tipo "),n("strong",null,"block"),a(" e definisce un generico blocco di contenuto senza una semantica particolare.")]),n("li",null,"E\u2019 comunemente usato come contenitore per altri elementi HTML o altri div"),n("li",null,"Pertanto DIV \xE8 utilizzato per creare delle strutture di layout del contenuto web."),n("li",null,"Insieme a CSS \xE8 utilizzato per definire lo stile di blocchi di contenuto")],-1),xx=n("h3",null,"esempio",-1),Tx=n("div",{style:{"background-color":"red",color:"white",padding:"20px"}},[n("h2",null,"ATTENZIONE"),n("p",null,"Si richiede a tutti gli studenti di studiare e sperimentare il pi\xF9 possibile con HTML."),n("p",null,"Oggi tutte le moderne applicazioni sono sviluppate in HTML - CSS e JavaScript")],-1),$x={__name:"37",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[yx,wx,zx,xx,Tx]),_:1},16))}},Mx=n("h1",null,"SPAN",-1),Lx=n("p",null,"Contenitore di contenitori inline",-1),Ex=n("ul",null,[n("li",null,[a("Un tag estremamente importante nello sviluppo web moderno \xE8 "),n("strong",null,"<span>"),a(".")]),n("li",null,[a("Il tag "),n("strong",null,"<span>"),a(" definisce un generico contenitore di tipo "),n("strong",null,"inline"),a(" a cui non \xE8 associata nessuna semantica particolare.")]),n("li",null,"E\u2019 comunemente usato per modificare una parte di testo in un paragrafo on in altre sezione di un documento HTML."),n("li",null,"Insieme a CSS \xE8 utilizzato per definire lo stile di parti di testo.")],-1),Ix=n("h3",null,"esempio",-1),Sx=n("p",null,[a("Comunicato a tutti gli studenti: "),n("span",{style:{color:"white",background:"red","font-weight":"bold"}},"ATTENZIONE"),a(" Si richiede a tutti gli studenti di "),n("span",{style:{color:"darkolivegreen","font-weight":"bold"}},"studiare"),a(" e sperimentare il pi\xF9 possibile con HTML.")],-1),Ax={__name:"38",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[Mx,Lx,Ex,Ix,Sx]),_:1},16))}},Ox=n("h1",{class:"sezione"},"Ancore e Link",-1),Cx={__name:"39",setup(e){const t={layout:"section"};return x($),(s,o)=>(k(),T(Te,O(A(t)),{default:v(()=>[Ox]),_:1},16))}},Px=n("h1",null,"Ancore e Link",-1),Hx=n("p",null,"Collegamenti a contenuti esterni",-1),Rx=n("ul",null,[n("li",null,[a("I link sono alla base del concetto di "),n("em",null,"iptertesto"),a(", che a sua volta \xE8 alla base dello WWW.")]),n("li",null,[a("I link servono per creare dei "),n("em",null,"collegamenti"),a(" tra documenti diversi in modo da formare un unico "),n("em",null,"ipertesto"),a(".")]),n("li",null,[a("Un link ad una risorsa o documento esterno si crea usando il tag "),n("em",null,"ancora"),a(),n("strong",null,"<a>")])],-1),Fx=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("url"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("link text"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},"Esempio"),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://agnelli.it/"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Istituto Internazionale E.Agnelli"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")])])])],-1),Nx=a(" Qui puoi visitare L'"),qx=n("a",{href:"https://agnelli.it/",target:"_parent"},"Istituto Internazionale E.Agnelli",-1),Wx=n("ul",null,[n("li",null,[n("strong",null,"href"),a(": attributo che definisce la destinazione dell\u2019ancora e pertanto il link")]),n("li",null,[n("strong",null,"target"),a(": per default il link viene visualizzato nella finestra corrente del browser. Questo attributo permette di modificare il comportamento standard.")])],-1),Dx=n("p",null,[a("Il principale valore per "),n("em",null,"target"),a(" \xE8 "),n("strong",null,"_blank"),a(", e permette di aprire il documento in un una nuova finestra o tab del browser.")],-1),jx={__name:"40",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[Px,Hx,Rx,L(i,U({},{ranges:[""]}),{default:v(()=>[Fx]),_:1},16),Nx,qx,Wx,Dx]),_:1},16)}}},Bx=n("h1",null,"Ancore e Link",-1),Ux=n("p",null,"Collegamenti a contenuti esterni",-1),Vx=n("p",null,[a("L\u2019URL specificato nell\u2019attributo "),n("em",null,"href"),a(" pu\xF2 essere:")],-1),Kx=n("ul",null,[n("li",null,[n("strong",null,"assoluto"),a(": link ad una risorsa esterna nella forma canonica "),n("em",null,[n("a",{href:"https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",target:"_blank",rel:"noopener"},"https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")])]),n("li",null,[n("strong",null,"relativo"),a(": link relativo ad una risorsa locale, presente nello stesso server "),n("em",null,"/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")])],-1),Gx=n("p",null,[a("Questo perch\xE8, tutte le URL relative fanno riferimento ad una directory chiamata "),n("strong",null,"document root"),a(" che rappresenta la root del web server.")],-1),Qx={__name:"41",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[Bx,Ux,Vx,Kx,Gx]),_:1},16))}},Yx=n("h1",null,"Esercizio html_03",-1),Zx=n("p",null,"Link",-1),Jx=n("ol",null,[n("li",null,[a("Modificare il file "),n("em",null,"|cognome|_esercizio_html_02.html"),a(" e salvarlo come "),n("em",null,"|cognome|_esercizio_html_03.html")]),n("li",null,"Trasformare almeno 5 parole in link a risorse esterne"),n("li",null,"Trasformare altre 5 parole in modo che siano visualizzate in verde, blue o rosso"),n("li",null,"Selezionare almeno 2 frasi particolarmente importanti e inserirle in un rettangolo con sfondo blue e testo di color bianco."),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_03.html")],-1),Xx=n("p",null,[n("em",null,[a("far riferimento all\u2019articolo orginale "),n("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),nT={__name:"42",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[Yx,Zx,Jx,Xx]),_:1},16))}},eT=n("h1",{class:"sezione"},"Web grafico con le Immagini",-1),tT={__name:"43",setup(e){const t={layout:"section"};return x($),(s,o)=>(k(),T(Te,O(A(t)),{default:v(()=>[eT]),_:1},16))}},aT=n("h1",null,"Immagini",-1),sT=n("p",null,"Il Web diventa grafico",-1),oT=n("ul",null,[n("li",null,"La versione iniziale del WWW, prevedeva solo l\u2019uso di informazioni testuali e non supportava l\u2019uso di immagini all\u2019interno delle pagine web."),n("li",null,"Con la nuova specifica HTML 2.0 del 1995, viene introdotto il nuovo tag <img> che permette di inserire immagini nelle pagine web.")],-1),iT=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("url"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("alternatetext"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])])])],-1),lT=a(" - **src**: attributo che specifica il percorso/link (relativo o assoluto) all'immagine - **alt**: in caso in cui l'immagine non possa essere visualizzata, specifica un testo alternativo "),rT=n("p",null,"Normalmente si specificano anche gli attributi:",-1),cT=n("ul",null,[n("li",null,[n("strong",null,"width"),a(": specifica la larghezza dell\u2019immaggine in pixel")]),n("li",null,[n("strong",null,"height"),a(": specifica l\u2019altezza dell\u2019immagine in pixel")])],-1),uT={__name:"44",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[aT,sT,oT,L(i,U({},{ranges:[""]}),{default:v(()=>[iT]),_:1},16),lT,rT,cT]),_:1},16)}}},pT=n("h1",null,"Immagini",-1),dT=n("p",null,"Il Web diventa grafico",-1),mT=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("250"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primo web server"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")])])])],-1),fT=n("img",{src:"https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg",width:"250",alt:"primo web server"},null,-1),gT={__name:"45",setup(e){const t={};return x($),(s,o)=>{const i=en,l=aa("center");return k(),T(R,O(A(t)),{default:v(()=>[pT,dT,L(i,U({},{ranges:[""]}),{default:v(()=>[mT]),_:1},16),L(l,null,{default:v(()=>[fT]),_:1})]),_:1},16)}}},hT=n("h1",null,"Immagini",-1),_T=n("p",null,"Il Web diventa grafico",-1),kT=n("ul",null,[n("li",null,"I tag HTML possono essere nidificati, cio\xE8 dichiarati uno dentro l\u2019altro."),n("li",null,"Questa importante propriet\xE0 ci permette di creare un link grafico all\u2019interno di una pagina web.")],-1),vT=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://info.cern.ch/hypertext/WWW/TheProject.html"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("250"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primo web server"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")])])])],-1),bT=n("a",{href:"http://info.cern.ch/hypertext/WWW/TheProject.html",target:"_blank"},[n("img",{src:"https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg",width:"200",alt:"primo web server"})],-1),yT={__name:"46",setup(e){const t={};return x($),(s,o)=>{const i=en,l=aa("center");return k(),T(R,O(A(t)),{default:v(()=>[hT,_T,kT,L(i,U({},{ranges:[""]}),{default:v(()=>[vT]),_:1},16),L(l,null,{default:v(()=>[bT]),_:1})]),_:1},16)}}},wT=n("h1",null,"Esercizio html_04",-1),zT=n("p",null,"Link",-1),xT=n("ol",null,[n("li",null,[a("Editare il file "),n("em",null,"|cognome|_esercizio_html_03.html"),a(" e salvarlo come "),n("em",null,"|cognome|_esercizio_html_04.html")]),n("li",null,"Aggiungere almeno 1 immagine, relative al testo, come risorsa esterna (link assoluto)"),n("li",null,"Aggiungere almeno 1 immagine, relative al testo, come risorsa interna (link relativo)"),n("li",null,"Aggiungere almeno 1 immagine, relative al testo, che sia anche un link ad una pagina esterna"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_04.html")],-1),TT=n("p",null,[n("em",null,[a("far riferimento all\u2019articolo orginale "),n("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),$T={__name:"47",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[wT,zT,xT,TT]),_:1},16))}},MT=n("h1",{class:"sezione"},"Formattazione del testo in HTML",-1),LT={__name:"48",setup(e){const t={layout:"section"};return x($),(s,o)=>(k(),T(Te,O(A(t)),{default:v(()=>[MT]),_:1},16))}},ET=n("h1",null,"Formattazione del Testo",-1),IT=n("p",null,"Tag di formattazione",-1),ST=n("ul",null,[n("li",null,"HTML mette a disposizione 10 tag specifici per la definizione di testo con particolare significato."),n("li",null,"Questi tag definiscono la semantica e cio\xE8 il significato del testo che racchiudono."),n("li",null,"Il browser decide come visualizzare il testo racchiuso in questi tag")],-1),AT=n("br",null,null,-1),OT=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("b")]),n("span",{class:"token punctuation"},">")]),a(": testo in grassetto senza significato aggiuntivo")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("strong")]),n("span",{class:"token punctuation"},">")]),a(": testo con molta importanza. Normalmente visualizzatto in grassetto")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("i")]),n("span",{class:"token punctuation"},">")]),a(": testo alternativo, un termine tecnico, una parola straniera. Normalmente visualizzato in italico")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("em")]),n("span",{class:"token punctuation"},">")]),a(": testo con particolare enfasi.Normalmente viene visualizzato in italico")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("mark")]),n("span",{class:"token punctuation"},">")]),a(": testo che deve essere evidenziato")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("small")]),n("span",{class:"token punctuation"},">")]),a(": testo con dimensioni minori e quindi con meno importanza")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("del")]),n("span",{class:"token punctuation"},">")]),a(": testo che \xE8 stato eliminato dal documento. Normalmente visualizzato con una linea sul testo")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ins")]),n("span",{class:"token punctuation"},">")]),a(": testo che \xE8 stato aggiunto al documento. Normalmente visualizzato come testo sottolineato")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sub")]),n("span",{class:"token punctuation"},">")]),a(": - definisce un testo come pedice")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sup")]),n("span",{class:"token punctuation"},">")]),a(": - definisce un testo come apice")])])],-1),CT={__name:"49",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[ET,IT,ST,AT,L(i,U({},{ranges:[""]}),{default:v(()=>[OT]),_:1},16)]),_:1},16)}}},PT=n("h1",null,"Formattazione del Testo",-1),HT=n("p",null,"Tag di formattazione",-1),RT=n("ul",null,[n("li",null,"bold")],-1),FT=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("In un paragrafo spesso vogliamo poter evidenziare una parola in "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("b")]),n("span",{class:"token punctuation"},">")]),a("grassetto"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("b")]),n("span",{class:"token punctuation"},">")]),a(".")])])],-1),NT=a(" In un paragrafo spesso vogliamo poter evidenziare una parola in "),qT=n("b",null,"grassetto",-1),WT=a(". "),DT=n("ul",null,[n("li",null,"strong")],-1),jT=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("Spesso \xE8 necessario definire una parola "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("strong")]),n("span",{class:"token punctuation"},">")]),a("molto importante"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("strong")]),n("span",{class:"token punctuation"},">")]),a(".")])])],-1),BT=a(" Spesso \xE8 necessario definire una parola "),UT=n("strong",null,"molto importante",-1),VT=a(". "),KT=n("ul",null,[n("li",null,"italico")],-1),GT=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("Alcune volte \xE8 necessario definire un termine tecnico come "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("i")]),n("span",{class:"token punctuation"},">")]),a("Web Server"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("i")]),n("span",{class:"token punctuation"},">")])])])],-1),QT=a(" Alcune volte \xE8 necessario definire un termine tecnico come "),YT=n("i",null,"Web Server",-1),ZT={__name:"50",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[PT,HT,RT,L(i,U({},{ranges:[""]}),{default:v(()=>[FT]),_:1},16),NT,qT,WT,DT,L(i,U({},{ranges:[""]}),{default:v(()=>[jT]),_:1},16),BT,UT,VT,KT,L(i,U({},{ranges:[""]}),{default:v(()=>[GT]),_:1},16),QT,YT]),_:1},16)}}},JT=n("h1",null,"Formattazione del Testo",-1),XT=n("p",null,"Tag di formattazione",-1),n2=n("ul",null,[n("li",null,"enfasi")],-1),e2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("In un testo ci sono specifiche parole a cui si vuole dare "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("em")]),n("span",{class:"token punctuation"},">")]),a("enfasi"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("em")]),n("span",{class:"token punctuation"},">")]),a(".")])])],-1),t2=a(" In un testo ci sono specifiche parole a cui si vuole dare "),a2=n("em",null,"enfasi",-1),s2=a(". "),o2=n("ul",null,[n("li",null,"mark")],-1),i2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("Un altro modo per "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("mark")]),n("span",{class:"token punctuation"},">")]),a("evidenziare"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("mark")]),n("span",{class:"token punctuation"},">")]),a(" una o pi\xF9 parole \xE8 usare il tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("b")]),n("span",{class:"token punctuation"},">")]),a("mark"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("b")]),n("span",{class:"token punctuation"},">")])])])],-1),l2=a(" Un altro modo per "),r2=n("mark",null,"evidenziare",-1),c2=a(" una o pi\xF9 parole \xE8 usare il tag "),u2=n("b",null,"mark",-1),p2=n("ul",null,[n("li",null,"small")],-1),d2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("Al contrario quando un testo "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("small")]),n("span",{class:"token punctuation"},">")]),a("\xE8 di poca importanza"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("small")]),n("span",{class:"token punctuation"},">")]),a(" si pu\xF2 usare il tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("b")]),n("span",{class:"token punctuation"},">")]),a("small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("b")]),n("span",{class:"token punctuation"},">")])])])],-1),m2=a(" Al contrario quando un testo "),f2=n("small",null,"\xE8 di poca importanza",-1),g2=a(" si pu\xF2 usare il tag "),h2=n("b",null,"small",-1),_2={__name:"51",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[JT,XT,n2,L(i,U({},{ranges:[""]}),{default:v(()=>[e2]),_:1},16),t2,a2,s2,o2,L(i,U({},{ranges:[""]}),{default:v(()=>[i2]),_:1},16),l2,r2,c2,u2,p2,L(i,U({},{ranges:[""]}),{default:v(()=>[d2]),_:1},16),m2,f2,g2,h2]),_:1},16)}}},k2=n("h1",null,"Formattazione del Testo",-1),v2=n("p",null,"Tag di formattazione",-1),b2=n("ul",null,[n("li",null,"del e ins")],-1),y2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("Il mio cibo preferito \xE8 il "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("del")]),n("span",{class:"token punctuation"},">")]),a("pollo"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("del")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ins")]),n("span",{class:"token punctuation"},">")]),a("tacchino"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("ins")]),n("span",{class:"token punctuation"},">")]),a(".")])])],-1),w2=a(" Il mio cibo preferito \xE8 il "),z2=n("del",null,"pollo",-1),x2=a(),T2=n("ins",null,"tacchino",-1),$2=a(". "),M2=n("ul",null,[n("li",null,"sub e sup")],-1),L2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("Il logaritmo in base 2 di 8 \xE8 3: log"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sub")]),n("span",{class:"token punctuation"},">")]),a("2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("sub")]),n("span",{class:"token punctuation"},">")]),a(" 8 = 3")]),a(`
`),n("span",{class:"line"},[a("In modo analogo 2 elevato alla 3 fa 8: 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sup")]),n("span",{class:"token punctuation"},">")]),a("3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("sup")]),n("span",{class:"token punctuation"},">")]),a(" = 8")]),a(`
`),n("span",{class:"line"},[a("In generale gli "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sup")]),n("span",{class:"token punctuation"},">")]),a("apici"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("sup")]),n("span",{class:"token punctuation"},">")]),a(" si ottengono son il tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("b")]),n("span",{class:"token punctuation"},">")]),a("sup"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("b")]),n("span",{class:"token punctuation"},">")]),a()]),a(`
`),n("span",{class:"line"},[a("mentre i "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("sub")]),n("span",{class:"token punctuation"},">")]),a("pedici"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("sub")]),n("span",{class:"token punctuation"},">")]),a(" con il tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("b")]),n("span",{class:"token punctuation"},">")]),a("sub"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("b")]),n("span",{class:"token punctuation"},">")])])])],-1),E2=a(" Il logaritmo in base 2 di 8 \xE8 3: log"),I2=n("sub",null,"2",-1),S2=a(" 8 = 3 "),A2=n("p",null,[a("In modo analogo 2 elevato alla 3 fa 8: 2"),n("sup",null,"3"),a(" = 8")],-1),O2=n("p",null,[a("In generale gli "),n("sup",null,"apici"),a(" si ottengono son il tag "),n("b",null,"sup"),a(" mentre i "),n("sub",null,"pedici"),a(" con il tag "),n("b",null,"sub")],-1),C2={__name:"52",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[k2,v2,b2,L(i,U({},{ranges:[""]}),{default:v(()=>[y2]),_:1},16),w2,z2,x2,T2,$2,M2,L(i,U({},{ranges:[""]}),{default:v(()=>[L2]),_:1},16),E2,I2,S2,A2,O2]),_:1},16)}}},P2=n("h1",null,"Esercizio html_05",-1),H2=n("p",null,"Link",-1),R2=n("ol",null,[n("li",null,[a("Editare il file "),n("em",null,"|cognome|_esercizio_html_04.html"),a(" e salvarlo come "),n("em",null,"|cognome|_esercizio_html_05.html")]),n("li",null,"evidenziare 5 parole in bold"),n("li",null,"marcare 5 parole particolarmente importanti"),n("li",null,"evidenziare 5 parole alternative o termini tecnici"),n("li",null,"dare enfasi a 5 parole"),n("li",null,"evidenziare (mark) 5 parole significative"),n("li",null,"rendere pi\xF9 piccole 5 parole poco significative"),n("li",null,"marcare 5 parole come eliminate dal testo"),n("li",null,"marcare 5 parole come inserite nel testo"),n("li",null,"dove possibile marcare almeno 1 parola come apice ed 1 come pedice"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_05.html")],-1),F2=n("p",null,[n("em",null,[a("far riferimento all\u2019articolo orginale "),n("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),N2={__name:"53",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[P2,H2,R2,F2]),_:1},16))}},q2=n("h1",null,"Formattazione del Testo",-1),W2=n("p",null,"Tag per Quotazioni e Citazioni",-1),D2=n("ul",null,[n("li",null,"HTML mette a disposizione 4 tag specifici per la definizione di testo che rappresenta una citazione o una quote."),n("li",null,"Questi tag definiscono la semantica e cio\xE8 il significato del testo che racchiudono."),n("li",null,"Il browser decide come visualizzare il testo racchiuso in questi tag")],-1),j2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("blockquote")]),n("span",{class:"token punctuation"},">")]),a(": definisce una porzione di testo come una citazione esterna")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q")]),n("span",{class:"token punctuation"},">")]),a(": definisce una breve citazione")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("abbr")]),n("span",{class:"token punctuation"},">")]),a(": definisce un'abbreviazione o un acronimo")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("cite")]),n("span",{class:"token punctuation"},">")]),a(": citazione ad un lavoro altrui (libro, sito web, ...)")])])],-1),B2={__name:"54",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[q2,W2,D2,L(i,U({},{ranges:[""]}),{default:v(()=>[j2]),_:1},16)]),_:1},16)}}},U2=n("h1",null,"Formattazione del Testo",-1),V2=n("p",null,"Tag per Quotazioni e Citazioni",-1),K2=n("ul",null,[n("li",null,"blockquote")],-1),G2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},'Alle volte in un testo si vuole "quotare" un altro autore.'),a(`
`),n("span",{class:"line"},"Tuttavia non sempre \xE8 possibile riportare il riferimento all'autore in modo integrale."),a(`
`),n("span",{class:"line"},[a("Quindi con il tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("b")]),n("span",{class:"token punctuation"},">")]),a("blockquote"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("b")]),n("span",{class:"token punctuation"},">")]),a(" si pu\xF2 definire una quotazione")]),a(`
`),n("span",{class:"line"},"indicando la sorgente dell'informazione"),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("blockquote")]),a(),n("span",{class:"token attr-name"},"cite"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://it.wikipedia.org/wiki/Giovanni_Bosco"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},"  La sottrazione di benevolenza \xE8 un castigo che eccita l'emulazione"),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("blockquote")]),n("span",{class:"token punctuation"},">")])])])],-1),Q2=a(` Alle volte in un testo si vuole "quotare" un altro autore. Tuttavia non sempre \xE8 possibile riportare il riferimento all'autore in modo integrale. Quindi con il tag `),Y2=n("b",null,"blockquote",-1),Z2=a(" si pu\xF2 definire una quotazione indicando la sorgente dell'informazione "),J2=n("blockquote",{cite:"https://it.wikipedia.org/wiki/Giovanni_Bosco"}," La sottrazione di benevolenza \xE8 un castigo che eccita l'emulazione ",-1),X2=n("ul",null,[n("li",null,"Come si pu\xF2 notare la citazione \xE8 indentata. Il link alla citazione non ha un effetto visivo ma pu\xF2 essere utile al motore di ricerca o altri tool.")],-1),n$={__name:"55",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[U2,V2,K2,L(i,U({},{ranges:[""]}),{default:v(()=>[G2]),_:1},16),Q2,Y2,Z2,J2,X2]),_:1},16)}}},e$=n("h1",null,"Formattazione del Testo",-1),t$=n("p",null,"Tag per Quotazioni e Citazioni",-1),a$=n("ul",null,[n("li",null,"quotazione")],-1),s$=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("Quando in un testo vogliamo fare una "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q")]),n("span",{class:"token punctuation"},">")]),a("breve citazione"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q")]),n("span",{class:"token punctuation"},">")]),a(", basta inserire il testo nel tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("b")]),n("span",{class:"token punctuation"},">")]),a("q"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("b")]),n("span",{class:"token punctuation"},">")])])])],-1),o$=a(" Quando in un testo vogliamo fare una "),i$=n("q",null,"breve citazione",-1),l$=a(", basta inserire il testo nel tag "),r$=n("b",null,"q",-1),c$=n("ul",null,[n("li",null,"abbreviazione")],-1),u$=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("abbr")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gnu is Not Unix"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("GNU"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("abbr")]),n("span",{class:"token punctuation"},">")]),a("di GNU/Linux sembra una  parola ma in realt\xE0 \xE8 un acronimo.")])])],-1),p$=n("abbr",{title:"Gnu is Not Unix"},"GNU",-1),d$=a(" di GNU/Linux sembra una parola ma in realt\xE0 \xE8 un acronimo. "),m$=n("ul",null,[n("li",null,"citazione lavoro altrui")],-1),f$=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("Un alternativa per una citazione \xE8 usare il tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("b")]),n("span",{class:"token punctuation"},">")]),a("cite"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("b")]),n("span",{class:"token punctuation"},">")]),a(". ")]),a(`
`),n("span",{class:"line"},[a("In una disicussione accesa Linus disse: "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("cite")]),n("span",{class:"token punctuation"},">")]),a('"Parlare \xE8 facile. Mostrami il codice".'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("cite")]),n("span",{class:"token punctuation"},">")])])])],-1),g$=a(" Un alternativa per una citazione \xE8 usare il tag "),h$=n("b",null,"cite",-1),_$=a(". In una disicussione accesa Linus disse: "),k$=n("cite",null,'"Parlare \xE8 facile. Mostrami il codice".',-1),v$={__name:"56",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[e$,t$,a$,L(i,U({},{ranges:[""]}),{default:v(()=>[s$]),_:1},16),o$,i$,l$,r$,c$,L(i,U({},{ranges:[""]}),{default:v(()=>[u$]),_:1},16),p$,d$,m$,L(i,U({},{ranges:[""]}),{default:v(()=>[f$]),_:1},16),g$,h$,_$,k$]),_:1},16)}}},b$=n("h1",null,"Esercizio html_06",-1),y$=n("p",null,"Link",-1),w$=n("ol",null,[n("li",null,[a("Editare il file "),n("em",null,"|cognome|_esercizio_html_05.html"),a(" e salvarlo come "),n("em",null,"|cognome|_esercizio_html_06.html")]),n("li",null,"creare una citazione per un blocco di testo"),n("li",null,"marcare 3 frasi o parole come brevi citazioni"),n("li",null,"marcare almeno 3 abbreviazioni"),n("li",null,"marcare 1 citazione (cite) di qualche altro autore"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_06.html")],-1),z$=n("p",null,[n("em",null,[a("far riferimento all\u2019articolo orginale "),n("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),x$={__name:"57",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[b$,y$,w$,z$]),_:1},16))}},T$=n("h1",null,"Formattazione del Testo",-1),$$=n("p",null,"Tag addizionali",-1),M$=n("ul",null,[n("li",null,"Ci sono altri tag che formattano il testo ma che non hanno una semantica particolare.")],-1),L$=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("u")]),n("span",{class:"token punctuation"},">")]),a(": definisce un testo sottolineato")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s")]),n("span",{class:"token punctuation"},">")]),a(": definisce una testo sbarrato")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("code")]),n("span",{class:"token punctuation"},">")]),a(": definisce un blocco di testo come codice sorgente")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pre")]),n("span",{class:"token punctuation"},">")]),a(": marca una porzione di testo come pre formattato")])])],-1),E$=a(" - sottolineato "),I$=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("Se si vuole "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("u")]),n("span",{class:"token punctuation"},">")]),a("sottolineare"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("u")]),n("span",{class:"token punctuation"},">")]),a(" una parola basta usare il tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("u")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("u")]),n("span",{class:"token punctuation"},">")])])])],-1),S$=a(" Se si vuole "),A$=n("u",null,"sottolineare",-1),O$=a(" una parola basta usare il tag <u> "),C$=n("ul",null,[n("li",null,"sbarrato")],-1),P$=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("Se si vuole "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s")]),n("span",{class:"token punctuation"},">")]),a("sbarrare"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s")]),n("span",{class:"token punctuation"},">")]),a(" una parola basta usare il tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("s")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("s")]),n("span",{class:"token punctuation"},">")])])])],-1),H$=a(" Se si vuole "),R$=n("s",null,"sbarrare",-1),F$=a(" una parola basta usare il tag <s> "),N$={__name:"58",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[T$,$$,M$,L(i,U({},{ranges:[""]}),{default:v(()=>[L$]),_:1},16),E$,L(i,U({},{ranges:[""]}),{default:v(()=>[I$]),_:1},16),S$,A$,O$,C$,L(i,U({},{ranges:[""]}),{default:v(()=>[P$]),_:1},16),H$,R$,F$]),_:1},16)}}},q$=n("h1",null,"Formattazione del Testo",-1),W$=n("p",null,"Tag addizionali",-1),D$=n("ul",null,[n("li",null,"codice sorgente")],-1),j$=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"Spesso negli articoli informatici vengono riportati comandi o porzioni di codice."),a(`
`),n("span",{class:"line"},[a("Per farlo in modo corretto usa il tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("b")]),n("span",{class:"token punctuation"},">")]),a("code"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("b")]),n("span",{class:"token punctuation"},">")]),a("."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("Per installare vscode in Linux usa il comando: "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("code")]),n("span",{class:"token punctuation"},">")]),a("apt install vscode"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("code")]),n("span",{class:"token punctuation"},">")])])])],-1),B$=a(" Spesso negli articoli informatici vengono riportati comandi o porzioni di codice. Per farlo in modo corretto usa il tag "),U$=n("b",null,"code",-1),V$=a("."),K$=n("br",null,null,-1),G$=n("p",null,[a("Per installare vscode in Linux usa il comando: "),n("code",null,"apt install vscode")],-1),Q$={__name:"59",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[q$,W$,D$,L(i,U({},{ranges:[""]}),{default:v(()=>[j$]),_:1},16),B$,U$,V$,K$,G$]),_:1},16)}}},Y$=n("h1",null,"Formattazione del Testo",-1),Z$=n("p",null,"Tag addizionali",-1),J$=n("ul",null,[n("li",null,"pre formattato")],-1),X$=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"Negli articoli pu\xF2 essere necessario riportare una porzione di testo con una formattazione specifica."),a(`
`),n("span",{class:"line"},[a("Per evitare che il browser foramtti il testo in modo autonomo usa il tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("b")]),n("span",{class:"token punctuation"},">")]),a("pre"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("b")]),n("span",{class:"token punctuation"},">")]),a(". "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("pre")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},"    Questo testo       viene visualizzato esatta "),a(`
`),n("span",{class:"line"},"    mente come fornito dallo sviluppatore.    "),a(`
`),n("span",{class:"line"},"    Venogno rispettrati    gli spazi e i ritorni "),a(`
`),n("span",{class:"line"},"    a "),a(`
`),n("span",{class:"line"},"    capo."),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("pre")]),n("span",{class:"token punctuation"},">")])])])],-1),nM=n("br",null,null,-1),eM=n("pre",null,`    Questo testo       viene visualizzato esatta 
    mente come fornito dallo sviluppatore.    
    Venogno rispettrati    gli spazi e i ritorni 
    a 
    capo.
`,-1),tM={__name:"60",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[Y$,Z$,J$,L(i,U({},{ranges:[""]}),{default:v(()=>[X$]),_:1},16),nM,eM]),_:1},16)}}},aM=n("h1",null,"Esercizio html_07",-1),sM=n("p",null,"Link",-1),oM=n("ol",null,[n("li",null,[a("Editare il file "),n("em",null,"|cognome|_esercizio_html_06.html"),a(" e salvarlo come "),n("em",null,"|cognome|_esercizio_html_07.html")]),n("li",null,"marcare 5 parole come sottolineate"),n("li",null,"marcare 5 parole come sbarrate"),n("li",null,"aggiungere una porzione di codice sorgente o comando linux"),n("li",null,"aggiungere una sezione di testo pre formattata"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_07.html")],-1),iM=n("p",null,[n("em",null,[a("far riferimento all\u2019articolo orginale "),n("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),lM={__name:"61",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[aM,sM,oM,iM]),_:1},16))}},rM=n("h1",null,"Formattazione del Testo",-1),cM=n("p",null,"Tag addizionali",-1),uM=n("ul",null,[n("li",null,[n("p",null,"Durante la realizzazione di una pagina web ci possono essere delle esigenze particolari di formattazione.")]),n("li",null,[n("p",null,"HTML fornisce altri tag aggiuntivi utili per forzare un ritorno a capo e per visualizzare una linea di suddivisione orizzontale")]),n("li",null,[n("p",null,"ritorno a capo")])],-1),pM=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("In alcuni casi \xE8 necessario forzare un ritorno a capo. "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("Per fare ci\xF2 basta usare il tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},"/>")])])])],-1),dM=a(" In alcuni casi \xE8 necessario forzare un ritorno a capo. "),mM=n("br",null,null,-1),fM=a(" Per fare ci\xF2 basta usare il tag <br/> "),gM=n("ul",null,[n("li",null,"linea orizzontale")],-1),hM=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("Per inserire una linea orizzontale di separazione usa "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("hr")]),a(),n("span",{class:"token punctuation"},"/>")])])])],-1),_M=n("hr",{style:{height:"5px","background-color":"grey"}},null,-1),kM={__name:"62",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[rM,cM,uM,L(i,U({},{ranges:[""]}),{default:v(()=>[pM]),_:1},16),dM,mM,fM,gM,L(i,U({},{ranges:[""]}),{default:v(()=>[hM]),_:1},16),_M]),_:1},16)}}},vM=n("h1",null,"Formattazione del Testo",-1),bM=n("p",null,"Tag addizionali",-1),yM=n("ul",null,[n("li",null,"barra per metrica")],-1),wM=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("Un modo molto efficace per visualizzare il progresso di un attivit\xE0 o evento \xE8 l'uso del tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meter")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},[a("Andamento dei voti:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},[a("Studente 1 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meter")]),a(),n("span",{class:"token attr-name"},"min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("8.0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("8 su 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("meter")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("Studente 2 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meter")]),a(),n("span",{class:"token attr-name"},"min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("6.5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("6.5 su 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("meter")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("Studente 3 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meter")]),a(),n("span",{class:"token attr-name"},"min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("9.5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("9.5 su 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("meter")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("Studente 4 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meter")]),a(),n("span",{class:"token attr-name"},"min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("4.5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("4.5 su 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("meter")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")])])])],-1),zM=a(" Un modo molto efficace per visualizzare il progresso di un attivit\xE0 o evento \xE8 l'uso del tag <meter> "),xM=n("p",null,[a("Andamento dei voti:"),n("br")],-1),TM=n("p",null,[a("Studente 1 "),n("meter",{min:"0",max:"10",value:"8.0"},"8 su 10"),n("br"),a(" Studente 2 "),n("meter",{min:"0",max:"10",value:"6.5"},"6.5 su 10"),n("br"),a(" Studente 3 "),n("meter",{min:"0",max:"10",value:"9.5"},"9.5 su 10"),n("br"),a(" Studente 4 "),n("meter",{min:"0",max:"10",value:"4.5"},"4.5 su 10"),n("br")],-1),$M={__name:"63",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[vM,bM,yM,L(i,U({},{ranges:[""]}),{default:v(()=>[wM]),_:1},16),zM,xM,TM]),_:1},16)}}},MM=n("h1",null,"Formattazione del Testo",-1),LM=n("p",null,"Tag addizionali",-1),EM=n("ul",null,[n("li",null,"barra di progresso")],-1),IM=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("In alternativa si pu\xF2 visualizzare un progress bar tramite l'uso del tag "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("progress")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},[a("Andamento dei voti:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},[a("Studente 1 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("progress")]),a(),n("span",{class:"token attr-name"},"min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("8 di 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("progress")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("Studente 2 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("progress")]),a(),n("span",{class:"token attr-name"},"min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("6.5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("6.5 di 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("progress")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("Studente 3 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("progress")]),a(),n("span",{class:"token attr-name"},"min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("9.5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("9.5 di 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("progress")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")])]),a(`
`),n("span",{class:"line"},[a("Studente 4 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("progress")]),a(),n("span",{class:"token attr-name"},"min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("4.5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("4.5 di 10"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("progress")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")])])])],-1),SM=a(" In alternativa si pu\xF2 visualizzare un progress bar tramite l'uso del tag <progress> "),AM=n("p",null,[a("Andamento dei voti:"),n("br")],-1),OM=n("p",null,[a("Studente 1 "),n("progress",{min:"0",max:"10",value:"8"},"8 di 10"),n("br"),a(" Studente 2 "),n("progress",{min:"0",max:"10",value:"6.5"},"6.5 di 10"),n("br"),a(" Studente 3 "),n("progress",{min:"0",max:"10",value:"9.5"},"9.5 di 10"),n("br"),a(" Studente 4 "),n("progress",{min:"0",max:"10",value:"4.5"},"4.5 di 10"),n("br")],-1),CM={__name:"64",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[MM,LM,EM,L(i,U({},{ranges:[""]}),{default:v(()=>[IM]),_:1},16),SM,AM,OM]),_:1},16)}}},PM=n("h1",null,"Esercizio html_08",-1),HM=n("p",null,"Link",-1),RM=n("ol",null,[n("li",null,[a("Editare il file "),n("em",null,"|cognome|_esercizio_html_07.html"),a(" e salvarlo come "),n("em",null,"|cognome|_esercizio_html_08.html")]),n("li",null,"Inserire 5 ritorni a capo forzati"),n("li",null,"Inserire 3 linee orizzontali di separazione"),n("li",null,"Inserire 5 meter bar"),n("li",null,"Inserire 5 progress bar"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_08.html")],-1),FM=n("p",null,[n("em",null,[a("far riferimento all\u2019articolo orginale "),n("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),NM={__name:"65",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[PM,HM,RM,FM]),_:1},16))}},qM=n("h1",{class:"sezione"},"Caratteri speciali in HTML",-1),WM={__name:"66",setup(e){const t={layout:"section"};return x($),(s,o)=>(k(),T(Te,O(A(t)),{default:v(()=>[qM]),_:1},16))}},DM=n("h1",null,"HTML Entities",-1),jM=n("p",null,"Uso di caratteri riservati",-1),BM=n("ul",null,[n("li",null,"Nella realizzazione di una pagina web, non \xE8 possibile usare tutti i caratteri disponibili."),n("li",null,"Alcuni caratteri sono riservati dallo standard HTML per usi specifici."),n("li",null,"Per esempio i caratteri < e > sono riservati in quanto servono per delimitare un tag HTML."),n("li",null,[a("Per inserire i caratteri riservati come parte del contenuto di una pagina HTML, si devono sostituire con "),n("em",null,[n("strong",null,"HTML entities")])])],-1),UM=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"&entity_name;"),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},"oppure "),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},"&#entity_number;")])],-1),VM=n("ul",null,[n("li",null,"Pertanto il carattere < e > sono rappresentati in questo modo")],-1),KM=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[a("< --> "),n("span",{class:"token entity named-entity",title:"<"},"&lt;"),a(" o "),n("span",{class:"token entity",title:"<"},"&#60;")]),a(`
`),n("span",{class:"line"},[a("> --> "),n("span",{class:"token entity named-entity",title:">"},"&gt;"),a(" o "),n("span",{class:"token entity",title:">"},"&#62;")])])],-1),GM=a(" [Qui si pu\xF2 consultare la lista completa di entities HTML.](https://www.freeformatter.com/html-entities.html) "),QM={__name:"67",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[DM,jM,BM,L(i,U({},{ranges:[""]}),{default:v(()=>[UM]),_:1},16),VM,L(i,U({},{ranges:[""]}),{default:v(()=>[KM]),_:1},16),GM]),_:1},16)}}},YM=n("h1",null,"HTML Entities",-1),ZM=n("p",null,"Uso di caratteri riservati",-1),JM=n("ul",null,[n("li",null,"In alcune occasioni \xE8 necessario indicare al browser di non andare a capo."),n("li",null,[a("Per fare ci\xF2 si usa il carattere "),n("em",null,"non breaking space")]),n("li",null,"In altre parole inserendo questo carattere, si inserisce uno spazio che non pu\xF2 mandare la linea a capo")],-1),XM=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"non breaking space"),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},[n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;")])])],-1),nL=n("ul",null,[n("li",null,"In modo analogo, ricordiamoci che se inserisco 10 spazi, il browser ne rimuove 9"),n("li",null,[a("Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte "),n("code",null,"&nbsp;")])],-1),eL={__name:"68",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[YM,ZM,JM,L(i,U({},{ranges:[""]}),{default:v(()=>[XM]),_:1},16),nL]),_:1},16)}}},tL=n("h1",null,"HTML Entities",-1),aL=n("p",null,"Uso di caratteri riservati",-1),sL=n("ul",null,[n("li",null,"Qui una lista di HTML entities comuemente usate")],-1),oL=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Carattere"),n("th",null,"Descizione"),n("th",null,"Nome Entit\xE0"),n("th",null,"Numero Entit\xE0")])]),n("tbody",null,[n("tr",null,[n("td"),n("td",null,"non-breaking space"),n("td",null,[n("code",null,"&nbsp;")]),n("td",null,[n("code",null,"&#160;")])]),n("tr",null,[n("td",null,"<"),n("td",null,"less than"),n("td",null,[n("code",null,"&lt;")]),n("td",null,[n("code",null,"&#60;")])]),n("tr",null,[n("td",null,">"),n("td",null,"greater than"),n("td",null,[n("code",null,"&gt;")]),n("td",null,[n("code",null,"&#62;")])]),n("tr",null,[n("td",null,[n("code",null,"&")]),n("td",null,"ampersand"),n("td",null,[n("code",null,"&amp;")]),n("td",null,[n("code",null,"&#38;")])]),n("tr",null,[n("td",null,'"'),n("td",null,"double quotation mark"),n("td",null,[n("code",null,"&quot;")]),n("td",null,[n("code",null,"&#34;")])]),n("tr",null,[n("td",null,"\u2019"),n("td",null,"single quotation mark (apostrophe)"),n("td",null,[n("code",null,"&apos;")]),n("td",null,[n("code",null,"&#39;")])]),n("tr",null,[n("td",null,"\u20AC"),n("td",null,"euro"),n("td",null,[n("code",null,"&euro;")]),n("td",null,[n("code",null,"&#8364;")])]),n("tr",null,[n("td",null,"\xA9"),n("td",null,"copyright"),n("td",null,[n("code",null,"&copy;")]),n("td",null,[n("code",null,"&#169;")])])])],-1),iL={__name:"69",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[tL,aL,sL,oL]),_:1},16))}},lL=n("h1",{class:"sezione"},"Liste (non)ordinate",-1),rL={__name:"70",setup(e){const t={layout:"section"};return x($),(s,o)=>(k(),T(Te,O(A(t)),{default:v(()=>[lL]),_:1},16))}},cL=n("h1",null,"Liste",-1),uL=n("p",null,"Lista di elementi correlati",-1),pL=n("ul",null,[n("li",null,"In un testo o un articolo, risulta particolarmente utile organizzare il contenuto in modo schematico e rappresentare le informazioni tramite una lista."),n("li",null,"HTML mette a disposizione specifici tag per la generazione di liste di elementi")],-1),dL=n("p",null,"Ci sono 2 tipi principali di liste:",-1),mL=n("ol",null,[n("li",null,[n("strong",null,"Unordered List"),a(" (Liste non ordinate)")]),n("li",null,[n("strong",null,"Ordered List"),a(" (Liste ordinate)")])],-1),fL=n("div",{grid:"~ cols-2 gap-4"},[n("div",null,[n("h3",null,"Lista non ordinata"),n("ul",null,[n("li",null,"Pere"),n("li",null,"Patate"),n("li",null,"Mele"),n("li",null,"Carote")])]),n("div",null,[n("h3",null,"Lista ordinata"),n("ol",null,[n("li",null,"CPU: Central Processing Unit"),n("li",null,"RAM: Random Access Memeory"),n("li",null,"HDD: Hard Disk Drive"),n("li",null,"SSD: Solid State Disk")])])],-1),gL={__name:"71",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[cL,uL,pL,dL,mL,fL]),_:1},16))}},hL=n("h1",null,"Liste",-1),_L=n("p",null,"Lista di elementi correlati",-1),kL=n("h3",null,"Lista non ordinata",-1),vL=n("p",null,"Le liste di tipo non ordinato che si creano con 2 tag:",-1),bL=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ul")]),n("span",{class:"token punctuation"},">")]),a(": Unordered List - tag che definisce la lista non ordinata ")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),n("span",{class:"token punctuation"},">")]),a(": List Item - tag che definisce l'elemento/item della lista")])])],-1),yL=n("br",null,null,-1),wL={grid:"~ cols-2 gap-4"},zL=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"Esempio: Vegetali"),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ul")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),n("span",{class:"token punctuation"},">")]),a("Pere"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),n("span",{class:"token punctuation"},">")]),a("Patate"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),n("span",{class:"token punctuation"},">")]),a("Mele"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),n("span",{class:"token punctuation"},">")]),a("Carote"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("ul")]),n("span",{class:"token punctuation"},">")])])])],-1),xL=n("div",null,[n("p",null,"Esempio: Vegetali"),n("ul",null,[n("li",null,"Pere"),n("li",null,"Patate"),n("li",null,"Mele"),n("li",null,"Carote")])],-1),TL={__name:"72",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[hL,_L,kL,vL,L(i,U({},{ranges:[""]}),{default:v(()=>[bL]),_:1},16),yL,n("div",wL,[n("div",null,[L(i,U({},{ranges:[""]}),{default:v(()=>[zL]),_:1},16)]),xL])]),_:1},16)}}},$L=n("h1",null,"Liste",-1),ML=n("p",null,"Lista di elementi correlati",-1),LL=n("h3",null,"Lista ordinata",-1),EL=n("p",null,"Le liste di tipo ordinato che si creano con 2 tag:",-1),IL=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ol")]),n("span",{class:"token punctuation"},">")]),a(": Ordered List - tag che definisce la lista ordinata ")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),n("span",{class:"token punctuation"},">")]),a(": List Item - tag che definisce l'elemento/item della lista")])])],-1),SL=n("br",null,null,-1),AL={grid:"~ cols-2 gap-4"},OL=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},"Esempio: I componenti di un computer"),a(`
`),n("span",{class:"line"},"       "),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ol")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),n("span",{class:"token punctuation"},">")]),a("CPU: Central Processing Unit"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),n("span",{class:"token punctuation"},">")]),a("RAM: Random Access Memeory"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),n("span",{class:"token punctuation"},">")]),a("HDD: Hard Disk Drive"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),n("span",{class:"token punctuation"},">")]),a("SSD: Solid State Disk"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("ol")]),n("span",{class:"token punctuation"},">")])])])],-1),CL=n("div",null,[n("p",null,"Esempio: I componenti di un computer"),n("ol",null,[n("li",null,"CPU: Central Processing Unit"),n("li",null,"RAM: Random Access Memeory"),n("li",null,"HDD: Hard Disk Drive"),n("li",null,"SSD: Solid State Disk")])],-1),PL={__name:"73",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[$L,ML,LL,EL,L(i,U({},{ranges:[""]}),{default:v(()=>[IL]),_:1},16),SL,n("div",AL,[n("div",null,[L(i,U({},{ranges:[""]}),{default:v(()=>[OL]),_:1},16)]),CL])]),_:1},16)}}},HL=n("h1",null,"Esercizio html_09",-1),RL=n("p",null,"Link",-1),FL=n("ol",null,[n("li",null,[a("Editare il file "),n("em",null,"|cognome|_esercizio_html_08.html"),a(" e salvarlo come "),n("em",null,"|cognome|_esercizio_html_09.html")]),n("li",null,"Inserire 5 caratteri speciali in modo congruo con il testo"),n("li",null,"Creare 1 lista ordinata in modo congruo con il testo"),n("li",null,"Creare 1 lista non ordinata in modo congruo con il testo"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_09.html")],-1),NL=n("p",null,[n("em",null,[a("far riferimento all\u2019articolo orginale "),n("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),qL={__name:"74",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[HL,RL,FL,NL]),_:1},16))}},WL=n("h1",{class:"sezione"},"Rappresentazioni tabulari con le Tabelle",-1),DL={__name:"75",setup(e){const t={layout:"section"};return x($),(s,o)=>(k(),T(Te,O(A(t)),{default:v(()=>[WL]),_:1},16))}},jL=n("h1",null,"Tabelle",-1),BL=n("p",null,"Organizzazione tabulare dei contenuti",-1),UL=n("ul",null,[n("li",null,"In passato lo sviluppo web era ampiamente basato sull\u2019uso di tabelle"),n("li",null,"Principalmente le tabelle venivano usato per creare il layout della pagina Web"),n("li",null,"Tuttavia questo metodo era laborioso e poco funzionale in quanto il supporto delle tabelle dai vari browser non era omogeneo."),n("li",null,"Oggi il layout di una pagine, NON si realizza pi\xF9 con le tabelle ma con il blocco DIV."),n("li",null,"Tuttavia lo scopo originario delle tabelle, cio\xE8 visualizzare contenuti in formato tabellare rimane valido.")],-1),VL=n("p",null,"I principlai tag per la definizione di una tabella sono:",-1),KL=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("table")]),n("span",{class:"token punctuation"},">")]),a(": definisce un contenitore per dati organizzati in formato tabellare")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("caption")]),n("span",{class:"token punctuation"},">")]),a(": definisce il titolo di una tabella")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("thead")]),n("span",{class:"token punctuation"},">")]),a(": definisce l'header della tabella")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),n("span",{class:"token punctuation"},">")]),a(": definisce una riga della tabella")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a(": definisce una cella della tabella.")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tbody")]),n("span",{class:"token punctuation"},">")]),a(": definisce il corpo principale della tabella")])])],-1),GL={__name:"76",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[jL,BL,UL,VL,L(i,U({},{ranges:[""]}),{default:v(()=>[KL]),_:1},16)]),_:1},16)}}},QL=n("h1",null,"Tabelle",-1),YL=n("p",null,"Organizzazione tabulare dei contenuti",-1),ZL={grid:"~ cols-2 gap-4"},JL=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("table")]),a(),n("span",{class:"token attr-name"},"border"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("caption")]),n("span",{class:"token punctuation"},">")]),a("A AND B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("caption")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("thead")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("                "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("A"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("A & B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("thead")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tbody")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("                "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("                "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("                "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("                "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tbody")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("table")]),n("span",{class:"token punctuation"},">")])])])],-1),XL=n("div",null,[n("table",{border:"1"},[n("caption",null,"A AND B"),n("thead",null,[n("tr",null,[n("td",null,"A"),a(),n("td",null,"B"),a(),n("td",null,"A & B")])]),n("tbody",null,[n("tr",null,[n("td",null,"0"),a(),n("td",null,"0"),a(),n("td",null,"0")]),n("tr",null,[n("td",null,"0"),a(),n("td",null,"1"),a(),n("td",null,"0")]),n("tr",null,[n("td",null,"1"),a(),n("td",null,"0"),a(),n("td",null,"0")]),n("tr",null,[n("td",null,"1"),a(),n("td",null,"1"),a(),n("td",null,"1")])])])],-1),n3={__name:"77",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[QL,YL,n("div",ZL,[n("div",null,[L(i,U({},{ranges:[""]}),{default:v(()=>[JL]),_:1},16)]),XL])]),_:1},16)}}},e3=n("h1",null,"Tabelle",-1),t3=n("p",null,"Organizzazione tabulare dei contenuti",-1),a3={grid:"~ cols-2 gap-4"},s3=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("table")]),a(),n("span",{class:"token attr-name"},"border"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("caption")]),n("span",{class:"token punctuation"},">")]),a("A AND B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("caption")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("thead")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),a("gray"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("A"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("A | B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("thead")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tbody")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a("blue"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),a("Gainsboro"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),a("Gainsboro"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("            "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("        "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tbody")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("table")]),n("span",{class:"token punctuation"},">")])])])],-1),o3=n("div",null,[n("table",{border:"1"},[n("caption",null,"A OR B"),n("thead",{style:{background:"gray","text-align":"center"}},[n("tr",null,[n("td",null,"A"),a(),n("td",null,"B"),a(),n("td",null,"A | B")])]),n("tbody",{style:{color:"blue","text-align":"center"}},[n("tr",null,[n("td",null,"0"),a(),n("td",null,"0"),a(),n("td",null,"0")]),n("tr",{style:{background:"Gainsboro"}},[n("td",null,"0"),a(),n("td",null,"1"),a(),n("td",null,"1")]),n("tr",null,[n("td",null,"1"),a(),n("td",null,"0"),a(),n("td",null,"1")]),n("tr",{style:{background:"Gainsboro"}},[n("td",null,"1"),a(),n("td",null,"1"),a(),n("td",null,"1")])])])],-1),i3={__name:"78",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[e3,t3,n("div",a3,[n("div",null,[L(i,U({},{ranges:[""]}),{default:v(()=>[s3]),_:1},16)]),o3])]),_:1},16)}}},l3=n("h1",null,"Esercizio html_10",-1),r3=n("p",null,"Link",-1),c3=n("ol",null,[n("li",null,[a("Editare il file "),n("em",null,"|cognome|_esercizio_html_09.html"),a(" e salvarlo come "),n("em",null,"|cognome|_esercizio_html_10.html")]),n("li",null,"Creare 1 tabella modo congruo con il testo"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_10.html")],-1),u3=n("p",null,[n("em",null,[a("far riferimento all\u2019articolo orginale "),n("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),p3={__name:"79",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[l3,r3,c3,u3]),_:1},16))}},d3=n("h1",{class:"sezione"},"Interagiamo con l'utente attraverso i Form",-1),m3={__name:"80",setup(e){const t={layout:"section"};return x($),(s,o)=>(k(),T(Te,O(A(t)),{default:v(()=>[d3]),_:1},16))}},f3=n("h1",null,"Form",-1),g3=n("p",null,"Input dall\u2019utente",-1),h3=n("ul",null,[n("li",null,"Il form (letteralmente modulo) indica la parte di interfaccia utente di un\u2019applicazione web che consente all\u2019utente di inserire e inviare al web server/application server uno o pi\xF9 dati."),n("li",null,[a("Il form \xE8 composto da un contenitore e da componenti grafici detti "),n("strong",null,"widget"),a(" che compongono il form stesso.")]),n("li",null,"I widget comunemente presenti nelle pagine web sono: le caselle di testo, i menu a tendina, i date-picker, \u2026")],-1),_3=n("p",null,"Il form si crea usando il tag:",-1),k3=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},"..."),a(`
`),n("span",{class:"line"},"...widget del form"),a(`
`),n("span",{class:"line"},"...."),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),v3=n("p",null,"I principali widget sono:",-1),b3=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("select")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("textarea")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("button")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("fieldset")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("legend")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("datalist")]),n("span",{class:"token punctuation"},">")]),a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("option")]),n("span",{class:"token punctuation"},">")])])])],-1),y3={__name:"81",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[f3,g3,h3,_3,L(i,U({},{ranges:[""]}),{default:v(()=>[k3]),_:1},16),v3,L(i,U({},{ranges:[""]}),{default:v(()=>[b3]),_:1},16)]),_:1},16)}}},w3=n("h1",null,"Form",-1),z3=n("p",null,"<input>",-1),x3=n("ul",null,[n("li",null,"Uno dei widget pi\xF9 importanti ed utilizzati \xE8 <input>"),n("li",null,"Permette di ricevere un input dall\u2019utente"),n("li",null,[a("Questo widget pu\xF2 assumere molte forme diverse in funzione dell\u2019attributo "),n("em",null,"type")])],-1),T3=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("text"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("idnome"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nome"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Nome"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("text"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("idcognome"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cognnome"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Cognome"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),$3=n("input",{type:"text",id:"idnome",name:"nome",placeholder:"Nome",style:{border:"1px solid black",background:"Gainsboro"}},null,-1),M3=a(),L3=n("br",null,null,-1),E3=n("br",null,null,-1),I3=n("input",{type:"text",id:"idcognome",name:"cognome",placeholder:"Cognome",style:{border:"1px solid black",background:"Gainsboro"}},null,-1),S3={__name:"82",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[w3,z3,x3,L(i,U({},{ranges:[""]}),{default:v(()=>[T3]),_:1},16),$3,M3,L3,E3,I3]),_:1},16)}}},A3=n("h1",null,"Form",-1),O3=n("p",null,"<label>",-1),C3=n("ul",null,[n("li",null,[a("L\u2019elemento "),n("em",null,"label"),a(" specifica una label per diversi tipi di widget di un form")]),n("li",null,"Questo tag \xE8 molto importante in quanto gli screen-reader, per persone ipovedenti, leggono ad alta voce la label di un widget"),n("li",null,[a("Per associare una label ad un widget, si usa l\u2019attributo "),n("em",null,"for"),a(" che deve coincidere con l\u2019attributo "),n("em",null,"id"),a(" del widget")])],-1),P3=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("idnome"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Nome: "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("text"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("idnome"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nome"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Nome"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("idcognome"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Cognome: "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("text"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("idcognome"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cognnome"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Cognome"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),H3=n("label",{for:"idnome"},"\xA0\xA0\xA0\xA0\xA0\xA0Nome:\xA0",-1),R3=n("input",{type:"text",id:"idnome",name:"nome",placeholder:"Nome",style:{border:"1px solid black",background:"Gainsboro"}},null,-1),F3=a(),N3=n("br",null,null,-1),q3=n("br",null,null,-1),W3=n("p",null,[n("label",{for:"idcognome"},"Cognome:\xA0"),n("input",{type:"text",id:"idcognome",name:"cognome",placeholder:"Cognome",style:{border:"1px solid black",background:"Gainsboro"}})],-1),D3={__name:"83",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[A3,O3,C3,L(i,U({},{ranges:[""]}),{default:v(()=>[P3]),_:1},16),H3,R3,F3,N3,q3,W3]),_:1},16)}}},j3=n("h1",null,"Form",-1),B3=n("p",null,"<input>",-1),U3=n("ul",null,[n("li",null,[a("Come detto l\u2019elemento "),n("em",null,"input"),a(" pu\xF2 assumere forme diverse in funzione dell\u2019attributo "),n("em",null,"type")]),n("li",null,[a("I vari tipi di "),n("em",null,"input"),a(" sono:")])],-1),V3=n("br",null,null,-1),K3={grid:"~ cols-2 gap-4"},G3=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("button"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("color"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("datetime-local"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("email"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("file"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hidden"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("image"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("number"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])])])],-1),Q3=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("password"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("range"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("reset"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("search"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("time"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("url"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])])])],-1),Y3={__name:"84",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[j3,B3,U3,V3,n("div",K3,[n("div",null,[L(i,U({},{ranges:[""]}),{default:v(()=>[G3]),_:1},16)]),n("div",null,[L(i,U({},{ranges:[""]}),{default:v(()=>[Q3]),_:1},16)])])]),_:1},16)}}},Z3=n("h1",null,"Form",-1),J3=n("p",null,"<input>",-1),X3=n("h3",null,"button",-1),n5=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("idbutton"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Premi il pulsante: "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("button"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("idbutton"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Cliccami!!"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),e5=n("label",{for:"idbutton"},"Premi il pulsante: ",-1),t5=n("input",{type:"button",id:"idbutton",onclick:"alert('Magie di JavaScript!! :)')",value:"Cliccami!!"},null,-1),a5=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("idpulsante"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Premi il pulsante: "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("button"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("idpulsante"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Click Me!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("button")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),s5=n("label",{for:"idpulsante"},"Premi il pulsante: ",-1),o5=n("button",{type:"button",style:{border:"1px solid red"}},"Click Me!",-1),i5={__name:"85",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[Z3,J3,X3,L(i,U({},{ranges:[""]}),{default:v(()=>[n5]),_:1},16),e5,t5,L(i,U({},{ranges:[""]}),{default:v(()=>[a5]),_:1},16),s5,o5]),_:1},16)}}},l5=n("h1",null,"Form",-1),r5=n("p",null,"<input>",-1),c5=n("h3",null,"radio",-1),u5=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h3")]),n("span",{class:"token punctuation"},">")]),a("Occupazione:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h3")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("studente"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupazione"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("studente"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("studente"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("  Studente"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupato"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupazione"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupato"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupato"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("  Occupato"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disoccupato"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupazione"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disoccupato"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disoccupato"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("  Disoccupato"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),p5=n("br",null,null,-1),d5=n("h3",null,"Occupazione:",-1),m5=n("br",null,null,-1),f5=n("input",{type:"radio",id:"studente",name:"occupazione",value:"studente"},null,-1),g5=n("label",{for:"studente"}," Studente",-1),h5=n("br",null,null,-1),_5=n("input",{type:"radio",id:"occupato",name:"occupazione",value:"occupato"},null,-1),k5=n("label",{for:"occupato"}," Occupato",-1),v5=n("br",null,null,-1),b5=n("input",{type:"radio",id:"disoccupato",name:"occupazione",value:"disoccupato"},null,-1),y5=n("label",{for:"disoccupato"}," Disoccupato",-1),w5=n("br",null,null,-1),z5=n("br",null,null,-1),x5={__name:"86",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[l5,r5,c5,L(i,U({},{ranges:[""]}),{default:v(()=>[u5]),_:1},16),p5,d5,m5,f5,g5,h5,_5,k5,v5,b5,y5,w5,z5]),_:1},16)}}},T5=n("h1",null,"Form",-1),$5=n("p",null,"<input>",-1),M5=n("h3",null,"checkbox",-1),L5=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h3")]),n("span",{class:"token punctuation"},">")]),a("Sport"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h3")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tennis"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sport"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tennis"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tennis"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("  Tennis"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("calcio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sport"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("calcio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("calcio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("  Calcio"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nuoto"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sport"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nuoto"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nuoto"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(" Nuoto"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),E5=n("br",null,null,-1),I5=n("h3",null,"Sport",-1),S5=n("br",null,null,-1),A5=n("input",{type:"checkbox",id:"tennis",name:"sport",value:"tennis"},null,-1),O5=n("label",{for:"tennis"}," Tennis",-1),C5=n("br",null,null,-1),P5=n("input",{type:"checkbox",id:"calcio",name:"sport",value:"calcio"},null,-1),H5=n("label",{for:"calcio"}," Calcio",-1),R5=n("br",null,null,-1),F5=n("input",{type:"checkbox",id:"nuoto",name:"sport",value:"nuoto"},null,-1),N5=n("label",{for:"nuoto"}," Nuoto",-1),q5=n("br",null,null,-1),W5=n("br",null,null,-1),D5={__name:"87",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[T5,$5,M5,L(i,U({},{ranges:[""]}),{default:v(()=>[L5]),_:1},16),E5,I5,S5,A5,O5,C5,P5,H5,R5,F5,N5,q5,W5]),_:1},16)}}},j5=n("h1",null,"Form",-1),B5=n("p",null,"<input>",-1),U5=n("h3",null,"date",-1),V5=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h3")]),n("span",{class:"token punctuation"},">")]),a("Data di Nascita"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h3")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("iddata"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("birthday"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),K5=n("br",null,null,-1),G5=n("h3",null,"Data di Nascita",-1),Q5=n("br",null,null,-1),Y5=n("input",{type:"date",id:"iddata",name:"birthday"},null,-1),Z5=n("br",null,null,-1),J5=n("br",null,null,-1),X5={__name:"88",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[j5,B5,U5,L(i,U({},{ranges:[""]}),{default:v(()=>[V5]),_:1},16),K5,G5,Q5,Y5,Z5,J5]),_:1},16)}}},nE=n("h1",null,"Esercizio html_11",-1),eE=n("p",null,"Form",-1),tE=n("ol",null,[n("li",null,[a("Creare un file con nome "),n("em",null,"|cognome|_esercizio_html_11.html")]),n("li",null,"Creare 1 form per la raccolta di dati in uno scenario scelto dallo studente"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_11.html")],-1),aE=n("p",null,"Il form deve contenere i seguenti widgets:",-1),sE=n("div",{grid:"~ cols-2 gap-4"},[n("div",null,[n("ul",null,[n("li",null,"almeno 2 widget di testo"),n("li",null,"almeno 1 bottone"),n("li",null,"almeno 3 scelte mutuamente esclusive tramite radio"),n("li",null,"almeeno 5 scelte multiple tramite checkbox"),n("li",null,"almeno 1 campo data"),n("li",null,"ogni widget deve essere dotato della propria label")])])],-1),oE={__name:"89",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[nE,eE,tE,aE,sE]),_:1},16))}},iE=n("h1",null,"Form",-1),lE=n("p",null,"<input>",-1),rE=n("h3",null,"number",-1),cE=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h3")]),n("span",{class:"token punctuation"},">")]),a("Altezza"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h3")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("number"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("altezza"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("altezza"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("150"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("200"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),uE=n("br",null,null,-1),pE=n("h3",null,"Altezza",-1),dE=n("br",null,null,-1),mE=n("input",{type:"number",id:"altezza",name:"altezza",min:"150",max:"200",style:{border:"1px solid black"}},null,-1),fE=n("br",null,null,-1),gE=n("br",null,null,-1),hE={__name:"90",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[iE,lE,rE,L(i,U({},{ranges:[""]}),{default:v(()=>[cE]),_:1},16),uE,pE,dE,mE,fE,gE]),_:1},16)}}},_E=n("h1",null,"Form",-1),kE=n("p",null,"<input>",-1),vE=n("h3",null,"color",-1),bE=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h3")]),n("span",{class:"token punctuation"},">")]),a("Colore preferito"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h3")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("   "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("color"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("favcolor"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("favcolor"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#ff0000"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),yE=n("br",null,null,-1),wE=n("h3",null,"Colore preferito",-1),zE=n("br",null,null,-1),xE=n("input",{type:"color",id:"favcolor",name:"favcolor",value:"#ff0000",onchange:"alert(`Hai selezionato il colore: ${event.target.value}`)"},null,-1),TE=n("br",null,null,-1),$E=n("br",null,null,-1),ME={__name:"91",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[_E,kE,vE,L(i,U({},{ranges:[""]}),{default:v(()=>[bE]),_:1},16),yE,wE,zE,xE,TE,$E]),_:1},16)}}},LE=n("h1",null,"Form",-1),EE=n("p",null,"<input>",-1),IE=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("peso"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Peso: "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("range"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("50"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("60"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("peso"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),a()]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),SE=n("br",null,null,-1),AE=n("label",{for:"peso"},"Peso: ",-1),OE=n("input",{type:"range",min:"50",max:"100",value:"60",class:"slider",id:"peso"},null,-1),CE=n("br",null,null,-1),PE={__name:"92",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[LE,EE,L(i,U({},{ranges:[""]}),{default:v(()=>[IE]),_:1},16),SE,AE,OE,CE]),_:1},16)}}},HE=n("h1",null,"Form",-1),RE=n("p",null,"<select>",-1),FE=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cars"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Genere:  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("select")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("genere"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cars"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maschio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Maschio"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("option")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("femmina"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Femmina"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("option")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("select")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),NE=n("br",null,null,-1),qE=n("label",{for:"cars"},"Genere: ",-1),WE=n("select",{name:"genere",id:"cars"},[n("option",{value:"maschio"},"Maschio"),n("option",{value:"femmina"},"Femmina")],-1),DE=n("br",null,null,-1),jE=n("br",null,null,-1),BE={__name:"93",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[HE,RE,L(i,U({},{ranges:[""]}),{default:v(()=>[FE]),_:1},16),NE,qE,WE,DE,jE]),_:1},16)}}},UE=n("h1",null,"Form",-1),VE=n("p",null,"<textarea>",-1),KE=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("bio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Biografia:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("textarea")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("bio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("bio"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rows"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"cols"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("50"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Inserisci la tua biografia"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("textarea")]),n("span",{class:"token punctuation"},">")]),a("    ")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),GE=n("p",null,[n("label",{for:"bio"},"Biografia:"),n("textarea",{id:"bio",name:"bio",rows:"4",cols:"50",placeholder:"Inserisci la tua biografia",style:{border:"1px solid black"}})],-1),QE={__name:"94",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[UE,VE,L(i,U({},{ranges:[""]}),{default:v(()=>[KE]),_:1},16),GE]),_:1},16)}}},YE=n("h1",null,"Esercizio html_12",-1),ZE=n("p",null,"Form",-1),JE=n("ol",null,[n("li",null,[a("Modificare il file "),n("em",null,"|cognome|_esercizio_html_11.html"),a(" e salvarlo come "),n("em",null,"|cognome|_esercizio_html_12.html")]),n("li",null,"Modificare il form (vedi dettagli sotto)"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_12.html")],-1),XE=n("p",null,"Il form deve contenere i seguenti widgets aggiuntivi:",-1),nI=n("ul",null,[n("li",null,"almeno 4 widget number con valore minimo e massimo"),n("li",null,"almeno 1 widget color picker"),n("li",null,"almeno 3 widget range con valore minimo e massimo"),n("li",null,"almeeno 2 combo box o select con almeno 5 valori ciascuna"),n("li",null,"almeno 1 campo text area con dimensione minima 6 righe e 60 colonne"),n("li",null,"ogni widget deve essere dotato della propria label")],-1),eI={__name:"95",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[YE,ZE,JE,XE,nI]),_:1},16))}},tI="/TPSI/4/html/assets/html5_8.8ebdebac.jpg",aI=n("h1",null,"Form",-1),sI=n("p",null,"<datalist>",-1),oI={grid:"~ cols-2 gap-8"},iI=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nazioni"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Nazionalit\xE0: "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nations"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nazioni"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nazioni"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("datalist")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nations"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Albanese"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Argentina"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Belga"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Biellorussa"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Italiana"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Irlandese"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Israeliana"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("datalist")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),lI=n("div",null,[n("p",null,[n("img",{src:tI,alt:"html5_8.jpg"})])],-1),rI={__name:"96",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[aI,sI,n("div",oI,[n("div",null,[L(i,U({},{ranges:[""]}),{default:v(()=>[iI]),_:1},16)]),lI])]),_:1},16)}}},cI=n("h1",null,"Form",-1),uI=n("p",null,"<fieldset>",-1),pI={grid:"~ cols-2 gap-8"},dI=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("fieldset")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("legend")]),n("span",{class:"token punctuation"},">")]),a("Dati Personali"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("legend")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nome"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Nome:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("text"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nome"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nome"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cognome"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Cognome:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("text"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cognome"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cognome"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("genere"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Genere:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("select")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("genere"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cars"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maschio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Maschio"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("option")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("femmina"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Femmina"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("option")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("select")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"}),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("email"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Email:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("email"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("email"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("email"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("input")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Invia"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("fieldset")]),n("span",{class:"token punctuation"},">")]),a("      ")]),a(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])])],-1),mI=n("div",null,[n("fieldset",{style:{border:"1px solid black"}},[n("legend",null,"Dati Personali"),n("br"),n("label",{for:"nome"},"Nome: "),n("input",{type:"text",id:"nome",name:"nome",style:{border:"1px solid black"}}),n("br"),n("br"),n("label",{for:"cognome"},"Cognome: "),n("input",{type:"text",id:"cognome",name:"cognome",style:{border:"1px solid black"}}),n("br"),n("br"),n("label",{for:"genere"},"Genere: "),n("select",{name:"genere",id:"cars"},[n("option",{value:"maschio"},"Maschio"),n("option",{value:"femmina"},"Femmina")]),n("br"),n("br"),n("label",{for:"email"},"Email: "),n("input",{type:"email",id:"email",name:"email",style:{border:"1px solid black"}}),n("br"),n("br"),n("input",{type:"submit",value:"Invia",style:{border:"1px solid black"}}),a(),n("br"),n("br")])],-1),fI={__name:"97",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[cI,uI,n("div",pI,[n("div",null,[L(i,U({},{ranges:[""]}),{default:v(()=>[dI]),_:1},16)]),mI])]),_:1},16)}}},gI=n("h1",null,"Esercizio html_13",-1),hI=n("p",null,"Form",-1),_I=n("ol",null,[n("li",null,[a("Creare un file con nome "),n("em",null,"|cognome|_esercizio_html_13.html")]),n("li",null,"Creare 1 form per la raccolta di dati personali"),n("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_13.html")],-1),kI=n("p",null,"Il form deve contenere i seguenti campi:",-1),vI=n("div",{grid:"~ cols-2 gap-4"},[n("div",null,[n("ul",null,[n("li",null,"Nome e Cognome"),n("li",null,"Genere"),n("li",null,[n("a",{href:"https://www.w3schools.com/tags/att_input_type_email.asp",target:"_blank",rel:"noopener"},"Email")]),n("li",null,[n("a",{href:"https://www.w3schools.com/tags/att_input_type_password.asp",target:"_blank",rel:"noopener"},"Password")]),n("li",null,"Data di nascita"),n("li",null,"Nazionalit\xE0")])]),n("div",null,[n("ul",null,[n("li",null,"Attivit\xE0 lavorativa"),n("li",null,"Hobby"),n("li",null,"Altezza"),n("li",null,"Peso"),n("li",null,"Colore preferito"),n("li",null,"Note personali")])])],-1),bI={__name:"98",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[gI,hI,_I,kI,vI]),_:1},16))}},yI="/TPSI/4/html/assets/html5_9.a352818c.jpg",wI=n("h1",null,"Form",-1),zI=n("p",null,"Form lifecycle server-side",-1),xI=n("img",{src:yI,width:"500",style:{float:"right"}},null,-1),TI=n("ol",null,[n("li",null,"L\u2019utente richiede la pagina web contenente il form [GET]"),n("li",null,"Il web server risponde con l\u2019HTML della pagina e del form"),n("li",null,[a("L\u2019utente compila il form e fa il "),n("em",null,"submit"),a(" inviando i dati al server [POST]")]),n("li",null,"Il server effettua una validazione dei dati ricevuti (OK | ERROR)"),n("li",null,"ERROR: viene inviato nuovamente il form ed eventuali messaggi di errore"),n("li",null,"OK: il web server processa i dati ed esegue le operazioni previste (DB)"),n("li",null,"Viene inviata la risposta finale al browser")],-1),$I={__name:"99",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[wI,zI,xI,TI]),_:1},16))}},MI=n("h1",null,"Form",-1),LI=n("p",null,"Form lifecycle",-1),EI=n("ul",null,[n("li",null,"Il ciclo di vita di gestione dei form appena visto, \xE8 quello classico"),n("li",null,"Come si vede questo \xE8 molto inefficente siccome richiede sempre una comunicazione tra client e server"),n("li",null,"Questo introduce latenze indesiderate e carico sul server"),n("li",null,"Il motivo principale \xE8 che HTML non essendo un linguaggio di programmazione non ha modo di fare una validazione del form prima dell\u2019invio"),n("li",null,"Per ovviare a queste problematiche, normalmente si effettua la validazione del form in JavaScript, quindi direttamente nel browser riducendo cos\xEC il numero di messaggi con il server")],-1),II={__name:"100",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[MI,LI,EI]),_:1},16))}},SI="/TPSI/4/html/assets/html5_10.d0dadebe.jpg",AI=n("h1",null,"Form",-1),OI=n("p",null,"Form lifecycle client-side",-1),CI=n("img",{src:SI,width:"400",style:{float:"right"}},null,-1),PI=n("ol",null,[n("li",null,"L\u2019utente richiede la pagina web contenente il form [GET]"),n("li",null,"Il web server risponde con l\u2019HTML della pagina e del form"),n("li",null,[a("L\u2019utente compila il form e fa il "),n("em",null,"submit"),a(" inviando i dati al server [POST]")]),n("li",null,"Il browser effettua una validazione dei dati ricevuti (OK | ERROR)"),n("li",null,"ERROR: viene visualizzato nuovamente il form ed eventuali messaggi di errore"),n("li",null,"OK: il web server processa i dati ed esegue le operazioni previste (DB)"),n("li",null,"Viene inviata la risposta finale al browser")],-1),HI={__name:"101",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[AI,OI,CI,PI]),_:1},16))}},RI=n("h1",null,"Esercizio html_14",-1),FI=n("p",null,"Form validation server-side",-1),NI=n("ul",null,[n("li",null,"In questo esercizio/esercitazione si vuole comprendere a fondo il meccanismo di validazione dei form server-side")],-1),qI=n("p",null,"Per fare ci\xF2 abbiamo bisonog di due componenti fondamentali:",-1),WI=n("ol",null,[n("li",null,"Una pagina HTML contenente un form"),n("li",null,"Un web server che implementa la logica di validazione")],-1),DI=n("p",null,"Per questa esercitazione il form e il web server sono forniti",-1),jI=n("ol",null,[n("li",null,[a("Scaricare il seguente pacchetto:"),n("a",{href:"https://profmancusoa.github.io/TPSI/support/esercizio_html_14.tgz",target:"_blank",rel:"noopener"},"esercizio_html_14.tgz")]),n("li",null,[a("Installare i pacchetti necessari con "),n("code",null,"npm install")]),n("li",null,[a("Lanciare il web server con "),n("code",null,"node form_server.js")]),n("li",null,"Aprire la pagina fornita dal server locale sulla posta 8080")],-1),BI={__name:"102",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[RI,FI,NI,qI,WI,DI,jI]),_:1},16))}},UI=n("h1",null,"Esercizio html_14",-1),VI=n("p",null,"\xA0",-1),KI=n("p",null,"Si richiede di:",-1),GI=n("ol",null,[n("li",null,"Verificare il funzionamento del form e della validazione dei campi"),n("li",null,"Analizzaere il codice del form e del server in JavaScript"),n("li",null,[a("Modificare il form in modo che l\u2019et\xE0 venga fornita come un "),n("code",null,"range")]),n("li",null,[a("Modificare il form in modo che sia presente anche il campo "),n("code",null,"Cognome")]),n("li",null,[a("Modificare il codice del server in modo che sia presente "),n("strong",null,"anche"),a(" la validazione dell\u2019et\xE0, in modo che siano accettati solo valori compresi tra 19 e 31")]),n("li",null,[a("Fornire il link github alla directory con nome |cognome|_esercizio_html_14 contenente i file aggiornati "),n("em",null,"form.html"),a(" e "),n("em",null,"form_server.js")]),n("li",null,[n("code",null,"NON deve essere presente nel repository la directory **node_modules**")])],-1),QI={__name:"103",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[UI,VI,KI,GI]),_:1},16))}},YI=n("h1",null,"HTML linter",-1),ZI=n("p",null,"Verifica errori",-1),JI=n("ul",null,[n("li",null,[n("p",null,[a("Il "),n("code",null,"linter"),a(" \xE8 uno strumento che analizza il codice sorgente per contrassegnare errori di sintassi, di programmazione, bug, errori stilistici e costrutti sospetti.")])]),n("li",null,[n("p",null,[a("Il termine deriva dall\u2019"),n("a",{href:"https://it.wikipedia.org/wiki/Lint_(software)",target:"_blank",rel:"noopener"},"omonimo strumento Unix"),a(" che esamina il codice sorgente del linguaggio C")])]),n("li",null,[n("p",null,"Pertanto il linter HTML \xE8 uno strumento che ci fornisce utili informazioni sulla pagina HTML in esame:"),n("ul",null,[n("li",null,"errori di sintassi HTML"),n("li",null,"uso di tag obsoleti"),n("li",null,"uso errato di tag"),n("li",null,"uso errato di attributi"),n("li",null,"mancata chiusura di tag"),n("li",null,"\u2026")])]),n("li",null,[n("p",null,"Il lineter \xE8 uno strumento fondamentale per lo sviluppatore.")])],-1),XI={__name:"104",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[YI,ZI,JI]),_:1},16))}},n6="/TPSI/4/html/assets/html5_12.88d9b140.png",e6=n("h1",null,"HTML linter",-1),t6=n("p",null,"W3C Markup Validation Service",-1),a6=n("ul",null,[n("li",null,"Il W3C mette a disposizione un servizio online di validazione (lint) di pagine o siti HTML"),n("li",null,[a("Il servizio \xE8 disponibile qui: "),n("a",{href:"https://validator.w3.org/",target:"_blank",rel:"noopener"},"https://validator.w3.org/")])],-1),s6=n("br",null,null,-1),o6=n("img",{src:n6},null,-1),i6={__name:"105",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[e6,t6,a6,s6,o6]),_:1},16))}},l6="/TPSI/4/html/assets/html5_13.f3e0e30d.png",r6=n("h1",null,"HTML linter",-1),c6=n("p",null,"W3C Markup Validation Service",-1),u6=n("p",null,"Il servizio opera in 3 modalit\xE0:",-1),p6=n("ol",null,[n("li",null,[n("strong",null,"Validate by URI"),a(": inserendo un URL valida ("),n("a",{href:"https://ats.agnelli.it",target:"_blank",rel:"noopener"},"https://ats.agnelli.it"),a(") effettua la validazione del sito")]),n("li",null,[n("strong",null,"Validate by File Upload"),a(": caricando un file .html effettua la validazione della pagina")]),n("li",null,[n("strong",null,"Validate by Direct Input"),a(": inserendo il codice HTML manualmente, ne effettua la validazione")])],-1),d6=n("br",null,null,-1),m6=n("img",{src:l6},null,-1),f6={__name:"106",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[r6,c6,u6,p6,d6,m6]),_:1},16))}},g6="/TPSI/4/html/assets/html5_14.f69c6914.png",h6=n("h1",null,"HTML linter",-1),_6=n("p",null,"W3C Markup Validation Service",-1),k6=n("br",null,null,-1),v6=n("img",{src:g6},null,-1),b6=n("ul",null,[n("li",null,[a("Il sito viene analizzato e viene generato un report "),n("ul",null,[n("li",null,[n("strong",null,"Error"),a(": segnala errori sintattici indicando la linea dove occorre")]),n("li",null,[n("strong",null,"Warning"),a(": evidenzia potenziali problemi ma non necessariamente errori sintattici")])])])],-1),y6={__name:"107",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[h6,_6,k6,v6,b6]),_:1},16))}},w6=n("h1",null,"Esercizio html_15",-1),z6=n("p",null,"HTML lint",-1),x6=n("p",null,"Mediante il servizio di validazione HTML del W3C si richiede di:",-1),T6=n("ol",null,[n("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html"),n("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente")],-1),$6={__name:"108",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[w6,z6,x6,T6]),_:1},16))}},M6="/TPSI/4/html/assets/html5_15.635ed653.png",L6=n("h1",null,"HTML linter",-1),E6=n("p",null,"Command Line Linter",-1),I6=n("ul",null,[n("li",null,"Chiaramente per quanto valido sia il linter del W3C, risulta di difficile applicazione nel processo di sviluppo"),n("li",null,"Caricare ad ogni modifica la propria pagina risulta particolarmente scomodo e time consuming"),n("li",null,"Per tale motivo esistono svariati tipi di linter HTML che operano da linea di comando"),n("li",null,"Questi strumenti sono molto versatili e possono essere integrati in pipeline automatiche (github)"),n("li",null,[a("Un linter valido \xE8 "),n("code",null,"node-w3c-validator"),a(" scirtto in JavaScript che implementa un wrapper al servizio W3C")])],-1),S6=n("br",null,null,-1),A6=n("img",{src:M6,width:"500"},null,-1),O6={__name:"109",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[L6,E6,I6,S6,A6]),_:1},16))}},C6="/TPSI/4/html/assets/html5_16.37784c29.png",P6=n("h1",null,"HTML linter",-1),H6=n("p",null,"Command Line Linter",-1),R6=n("ul",null,[n("li",null,"Per installare il linter basta eseguire")],-1),F6=n("pre",{class:"slidev-code language-js"},[n("code",null,[n("span",{class:"line"},[a("npm i "),n("span",{class:"token operator"},"-"),a("g node"),n("span",{class:"token operator"},"-"),a("w3c"),n("span",{class:"token operator"},"-"),a("validator")])])],-1),N6=n("br",null,null,-1),q6=n("img",{src:C6,width:"700"},null,-1),W6={__name:"110",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[P6,H6,R6,L(i,U({},{ranges:[""]}),{default:v(()=>[F6]),_:1},16),N6,q6]),_:1},16)}}},D6=n("h1",null,"HTML linter",-1),j6=n("p",null,"Command Line Linter",-1),B6=n("p",null,"I parametri pi\xF9 importanti sono",-1),U6=n("ul",null,[n("li",null,[n("code",null,"-i"),a(": specifica il file HTML da validare")]),n("li",null,[n("code",null,"-f"),a(": specifica il formate del report generato "),n("ul",null,[n("li",null,[n("strong",null,"txt"),a(": genera un report puramente testuale")]),n("li",null,[n("strong",null,"lint"),a(": genera un report in formato lint con informazioni addizionali")]),n("li",null,[n("strong",null,"html"),a(": genera un report in formato HTML esattamente come quello generato dal servizio W3C")])])])],-1),V6={__name:"111",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[D6,j6,B6,U6]),_:1},16))}},K6="/TPSI/4/html/assets/html5_17.8d11820a.png",G6=n("h1",null,"HTML linter",-1),Q6=n("p",null,"Command Line Linter",-1),Y6=n("ul",null,[n("li",null,"Per fare il lint di un file HTML e generare un report testuale basta eseguire il seguente comando")],-1),Z6=n("pre",{class:"slidev-code language-js"},[n("code",null,[n("span",{class:"line"},[a("node"),n("span",{class:"token operator"},"-"),a("w3c"),n("span",{class:"token operator"},"-"),a("validator "),n("span",{class:"token operator"},"-"),a("i "),n("span",{class:"token operator"},"/"),a("path"),n("span",{class:"token operator"},"/"),a("to"),n("span",{class:"token operator"},"/"),a("file"),n("span",{class:"token punctuation"},"."),a("html "),n("span",{class:"token operator"},"-"),a("f txt")])])],-1),J6=n("br",null,null,-1),X6=n("img",{src:K6},null,-1),n4={__name:"112",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[G6,Q6,Y6,L(i,U({},{ranges:[""]}),{default:v(()=>[Z6]),_:1},16),J6,X6]),_:1},16)}}},e4="/TPSI/4/html/assets/html5_18.970bde4d.png",t4=n("h1",null,"HTML linter",-1),a4=n("p",null,"Command Line Linter",-1),s4=n("ul",null,[n("li",null,"Per fare il lint di un file HTML e generare un report in formato lint basta eseguire il seguente comando")],-1),o4=n("pre",{class:"slidev-code language-js"},[n("code",null,[n("span",{class:"line"},[a("node"),n("span",{class:"token operator"},"-"),a("w3c"),n("span",{class:"token operator"},"-"),a("validator "),n("span",{class:"token operator"},"-"),a("i "),n("span",{class:"token operator"},"/"),a("path"),n("span",{class:"token operator"},"/"),a("to"),n("span",{class:"token operator"},"/"),a("file"),n("span",{class:"token punctuation"},"."),a("html "),n("span",{class:"token operator"},"-"),a("f lint")])])],-1),i4=n("br",null,null,-1),l4=n("img",{src:e4,width:"650"},null,-1),r4={__name:"113",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[t4,a4,s4,L(i,U({},{ranges:[""]}),{default:v(()=>[o4]),_:1},16),i4,l4]),_:1},16)}}},c4="/TPSI/4/html/assets/html5_19.d96648e9.png",u4=n("h1",null,"HTML linter",-1),p4=n("p",null,"Command Line Linter",-1),d4=n("ul",null,[n("li",null,"Per fare il lint di un file HTML e generare un report in formato html basta eseguire il seguente comando")],-1),m4=n("pre",{class:"slidev-code language-js"},[n("code",null,[n("span",{class:"line"},[a("node"),n("span",{class:"token operator"},"-"),a("w3c"),n("span",{class:"token operator"},"-"),a("validator "),n("span",{class:"token operator"},"-"),a("i "),n("span",{class:"token operator"},"/"),a("path"),n("span",{class:"token operator"},"/"),a("to"),n("span",{class:"token operator"},"/"),a("file"),n("span",{class:"token punctuation"},"."),a("html "),n("span",{class:"token operator"},"-"),a("f html "),n("span",{class:"token operator"},">"),a(" report"),n("span",{class:"token punctuation"},"."),a("html")])])],-1),f4=n("br",null,null,-1),g4=n("img",{src:c4,width:"650"},null,-1),h4={__name:"114",setup(e){const t={};return x($),(s,o)=>{const i=en;return k(),T(R,O(A(t)),{default:v(()=>[u4,p4,d4,L(i,U({},{ranges:[""]}),{default:v(()=>[m4]),_:1},16),f4,g4]),_:1},16)}}},_4=n("h1",null,"Esercizio html_16",-1),k4=n("p",null,"HTML lint",-1),v4=n("p",null,"Mediante il linter da liena di comando si richiede di:",-1),b4=n("ol",null,[n("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html"),n("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente"),n("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato txt"),n("li",null,"Consegnare su github il file |cognome|_esercizio_html_16.txt"),n("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato lint"),n("li",null,"Consegnare su github il file |cognome|_esercizio_html_16.lint"),n("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato html"),n("li",null,"Consegnare su github il file |cognome|_esercizio_html_16.html")],-1),y4={__name:"115",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[_4,k4,v4,b4]),_:1},16))}},w4=n("h1",null,"Esercizio html_17",-1),z4=n("p",null,"HTML lint",-1),x4=n("p",null,"Mediante il linter da liena di comando si richiede di:",-1),T4=n("ol",null,[n("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html"),n("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente"),n("li",null,"Correggere gli errori ed i warning"),n("li",null,"Consegnare su github il file |cognome|_esercizio_html_17_glossario_corretto.html")],-1),$4={__name:"116",setup(e){const t={};return x($),(s,o)=>(k(),T(R,O(A(t)),{default:v(()=>[w4,z4,x4,T4]),_:1},16))}},M4="/TPSI/4/html/assets/html5_11.d37e4564.jpg",L4=n("p",null,"\xA0",-1),E4=n("img",{src:M4,width:"800"},null,-1),I4={__name:"117",setup(e){const t={};return x($),(s,o)=>{const i=aa("center");return k(),T(R,O(A(t)),{default:v(()=>[L4,L(i,null,{default:v(()=>[E4]),_:1})]),_:1},16)}}},S4=[{path:"1",name:"page-1",component:kb,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.4.3",title:"Hyper Text Markup Language",slide:{raw:`---
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
version: '1.4.3'
---

# Hyper Text Markup Language

HTML per sviluppatori

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>
`,title:"Hyper Text Markup Language",level:1,content:`# Hyper Text Markup Language

HTML per sviluppatori

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>`,frontmatter:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.4.3",title:"Hyper Text Markup Language"},index:0,start:0,end:26,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:zb,meta:{slide:{raw:`
# HTML

*H*yper *T*ext *M*arkup *L*anguage (linguaggio di markup per ipertesti), comunemente noto con l'acronimo di **HTML**, \xE8 un **linguaggio di markup** per la creazione di una pagina web. 

- Originariamente nato per la formattazione e impaginazione di documenti ipertestuali (web 1.0), oggi \xE8 alla base dello sviluppo di siti ed applicazioni web.

- Viene utilizzato principalmente per il disaccoppiamento della struttura logica di una pagina web (definita appunto dal markup **HTML**) dalla sua rappresentazione, gestita tramite gli stili **CSS** e dalla sua logica di funzionamento implementata tramite il linguaggio **JavaScript**.

- L'HTML \xE8 un linguaggio di pubblico dominio, la cui sintassi \xE8 stabilita dal World Wide Web Consortium (W3C). La versione attuale, la quinta, \xE8 stata rilasciata dal W3C nell'ottobre 2014.

- Il motivo principale che ha spinto il W3C e i suoi membri a sviluppare HTML5 \xE8 stata la necessit\xE0 di fornire direttamente le funzionalit\xE0 che in precedenza erano fruibili tramite estensioni proprietarie all'esterno dei browser, come Adobe Flash e simili. Un secondo obiettivo che gli sviluppatori si erano prefissati era quello di garantire una maggiore compatibilit\xE0 tra i diversi browser, indipendentemente dalla piattaforma software utilizzata, e principalmente mirata all'espansione dei dispositivi mobili.
`,title:"HTML",level:1,content:`# HTML

*H*yper *T*ext *M*arkup *L*anguage (linguaggio di markup per ipertesti), comunemente noto con l'acronimo di **HTML**, \xE8 un **linguaggio di markup** per la creazione di una pagina web. 

- Originariamente nato per la formattazione e impaginazione di documenti ipertestuali (web 1.0), oggi \xE8 alla base dello sviluppo di siti ed applicazioni web.

- Viene utilizzato principalmente per il disaccoppiamento della struttura logica di una pagina web (definita appunto dal markup **HTML**) dalla sua rappresentazione, gestita tramite gli stili **CSS** e dalla sua logica di funzionamento implementata tramite il linguaggio **JavaScript**.

- L'HTML \xE8 un linguaggio di pubblico dominio, la cui sintassi \xE8 stabilita dal World Wide Web Consortium (W3C). La versione attuale, la quinta, \xE8 stata rilasciata dal W3C nell'ottobre 2014.

- Il motivo principale che ha spinto il W3C e i suoi membri a sviluppare HTML5 \xE8 stata la necessit\xE0 di fornire direttamente le funzionalit\xE0 che in precedenza erano fruibili tramite estensioni proprietarie all'esterno dei browser, come Adobe Flash e simili. Un secondo obiettivo che gli sviluppatori si erano prefissati era quello di garantire una maggiore compatibilit\xE0 tra i diversi browser, indipendentemente dalla piattaforma software utilizzata, e principalmente mirata all'espansione dei dispositivi mobili.`,frontmatter:{},index:1,start:27,end:40,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Lb,meta:{slide:{raw:`
# HTML

&nbsp;

<div grid="~ cols-2 gap-4">
<div>

- HTML5 linguaggio evoluto per il markup o descrizione delle pagine HTML
- Definito e standardizzato dal W3C (WWW Consortium)
- Descrive la semantica ed il contenuto di una pagina Web
- Definisce una serie di tecnologie correlate
- Note come HTML Living Standard (\xE8 in continua evoluzione)

</div>

<div>

![html5_1.jpg](/media/html5_1.jpg)

</div>
</div>
`,title:"HTML",level:1,content:`# HTML

&nbsp;

<div grid="~ cols-2 gap-4">
<div>

- HTML5 linguaggio evoluto per il markup o descrizione delle pagine HTML
- Definito e standardizzato dal W3C (WWW Consortium)
- Descrive la semantica ed il contenuto di una pagina Web
- Definisce una serie di tecnologie correlate
- Note come HTML Living Standard (\xE8 in continua evoluzione)

</div>

<div>

![html5_1.jpg](/media/html5_1.jpg)

</div>
</div>`,frontmatter:{},index:2,start:41,end:64,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Ob,meta:{slide:{raw:`
# HTML

&nbsp;

<div grid="~ cols-2 gap-4">
<div>

Una **pagina Web** contiene:

- immagini
- audio
- file multimediali
- testo
- hotword

Le **hotword** sono parti della pagina legate a link.

I **link** sono collegamenti che portano ad altre pagine o altre risorse.
</div>
<div>

![html5_2.jpg](/media/html5_2.jpg)

</div>
</div>

`,title:"HTML",level:1,content:`# HTML

&nbsp;

<div grid="~ cols-2 gap-4">
<div>

Una **pagina Web** contiene:

- immagini
- audio
- file multimediali
- testo
- hotword

Le **hotword** sono parti della pagina legate a link.

I **link** sono collegamenti che portano ad altre pagine o altre risorse.
</div>
<div>

![html5_2.jpg](/media/html5_2.jpg)

</div>
</div>`,frontmatter:{},index:3,start:65,end:93,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Db,meta:{slide:{raw:`
# HTML

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
`,title:"HTML",level:1,content:`# HTML

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
- [https://javascript.info/](https://javascript.info/)`,frontmatter:{},index:4,start:94,end:117,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Vb,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Ambiente di Sviluppo</h1>
`,content:'<h1 class="sezione">Ambiente di Sviluppo</h1>',frontmatter:{layout:"section"},index:5,start:117,end:122,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Yb,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

&nbsp;

- Al fine di comprendere appieno lo sviluppo web, \xE8 preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice
- Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web
- Il passaggio ad un sistema autore o ad un CMS risulta poi pi\xF9 facile e intuitivo.
`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

&nbsp;

- Al fine di comprendere appieno lo sviluppo web, \xE8 preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice
- Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web
- Il passaggio ad un sistema autore o ad un CMS risulta poi pi\xF9 facile e intuitivo.`,frontmatter:{},index:6,start:123,end:132,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:e0,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

[Visual Studio Code](https://code.visualstudio.com/docs/languages/html)

<div grid="~ cols-2 gap-32">
<div>

- Qualsiasi editor testuale \xE8 adatto allo sviluppo web
- **Visual Studio Code** fornisce supporto al HTML in modo nativo
- Fornisce il syntax highlighting, smart completions con IntelliSense e formattazione customizzabile
- In aggiunta sono disponibili moltissime estensioni per facilitare lo sviluppo web

</div>
<div>

![html5_3.jpg](/media/html5_3.jpg)

</div>
</div>

`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

[Visual Studio Code](https://code.visualstudio.com/docs/languages/html)

<div grid="~ cols-2 gap-32">
<div>

- Qualsiasi editor testuale \xE8 adatto allo sviluppo web
- **Visual Studio Code** fornisce supporto al HTML in modo nativo
- Fornisce il syntax highlighting, smart completions con IntelliSense e formattazione customizzabile
- In aggiunta sono disponibili moltissime estensioni per facilitare lo sviluppo web

</div>
<div>

![html5_3.jpg](/media/html5_3.jpg)

</div>
</div>`,frontmatter:{},index:7,start:133,end:155,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:i0,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.


![html5_4.jpg](/media/html5_4.jpg)

`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.


![html5_4.jpg](/media/html5_4.jpg)`,frontmatter:{},index:8,start:156,end:165,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:u0,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

&nbsp;

- Quindi per sviluppare una pagina web usiamo vscode (o il nostro editor preferito)
- Scriviamo il codice di markup della pagina
- Salviamo con estensione .html
- Apriamo il file nel browser (CTRL + o o drag\u2019n drop)
- La pagina viene visualizzata all'interno del browser
`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

&nbsp;

- Quindi per sviluppare una pagina web usiamo vscode (o il nostro editor preferito)
- Scriviamo il codice di markup della pagina
- Salviamo con estensione .html
- Apriamo il file nel browser (CTRL + o o drag\u2019n drop)
- La pagina viene visualizzata all'interno del browser`,frontmatter:{},index:9,start:166,end:177,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:d0,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Tag e Attributi</h1>
`,content:'<h1 class="sezione">Tag e Attributi</h1>',frontmatter:{layout:"section"},index:10,start:177,end:182,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Zy,meta:{slide:{raw:`
# TAG 

I TAG HTML sono marcatori (Markup Language) che modificano la semantica (senso, ruolo organizzazione) dei contenuti di una pagina.

### Anatomia di un TAG

- Un tag \xE8 racchiuso tra < e >
- Il nome del tag \xE8 sempre scritto in minuscolo
- Se non specificato deve sempre esserci un tag di **apertura** ed un tag di **chiusura**
\`\`\`html
<tagname> --> TAG di apertura
\`\`\`
\`\`\`html
</tagname> --> TAG di chiusura
\`\`\`

Il contenuto da modificare \xE8 compreso tra il tag di apertura ed il tag di chiusura
\`\`\`html
<tagname>...Contenuto del tag...</tagname>
\`\`\`
`,title:"TAG",level:1,content:`# TAG 

I TAG HTML sono marcatori (Markup Language) che modificano la semantica (senso, ruolo organizzazione) dei contenuti di una pagina.

### Anatomia di un TAG

- Un tag \xE8 racchiuso tra < e >
- Il nome del tag \xE8 sempre scritto in minuscolo
- Se non specificato deve sempre esserci un tag di **apertura** ed un tag di **chiusura**
\`\`\`html
<tagname> --> TAG di apertura
\`\`\`
\`\`\`html
</tagname> --> TAG di chiusura
\`\`\`

Il contenuto da modificare \xE8 compreso tra il tag di apertura ed il tag di chiusura
\`\`\`html
<tagname>...Contenuto del tag...</tagname>
\`\`\``,frontmatter:{},index:11,start:183,end:205,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:sw,meta:{slide:{raw:`
# TAG singleton

Elementi HTML con il solo tag di apertura.

- In HTML sono definiti una serie di tag, detti *singleton* che non richiedono il tag di chiusura.
- Per essere formalmente corretti questi elementi devono essere scritti in questo modo:
\`\`\`html
<tag />: notare lo slash finale che indica la mancanza di un tag di chiusura.
\`\`\`

Qui la lista dei tag singleton che non richiedono una chiusura.
<div grid="~ cols-2 gap-4">
  <div>

  \`\`\`html
  <area>
  <base>
  <br>
  <col>
  <embed>
  <command>
  <hr>
  <img>
  \`\`\`
  </div>

  <div>

  \`\`\`html
  <input>
  <keygen>
  <link>
  <meta>
  <param>
  <source>
  <track>
  <wbr>
  \`\`\`

  </div>

</div>
`,title:"TAG singleton",level:1,content:`# TAG singleton

Elementi HTML con il solo tag di apertura.

- In HTML sono definiti una serie di tag, detti *singleton* che non richiedono il tag di chiusura.
- Per essere formalmente corretti questi elementi devono essere scritti in questo modo:
\`\`\`html
<tag />: notare lo slash finale che indica la mancanza di un tag di chiusura.
\`\`\`

Qui la lista dei tag singleton che non richiedono una chiusura.
<div grid="~ cols-2 gap-4">
  <div>

  \`\`\`html
  <area>
  <base>
  <br>
  <col>
  <embed>
  <command>
  <hr>
  <img>
  \`\`\`
  </div>

  <div>

  \`\`\`html
  <input>
  <keygen>
  <link>
  <meta>
  <param>
  <source>
  <track>
  <wbr>
  \`\`\`

  </div>

</div>`,frontmatter:{},index:12,start:206,end:250,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:mw,meta:{slide:{raw:`
# Attributi

Caratteristiche addizionali di un TAG

- I tag HTML possono avere degli **attributi** che forniscono delle informazioni addizionali al browser.
- Gli attributi sono **sempre** specificati nel tag di apertura.
- Gli attributi sono definiti da una coppia nome-valore

\`\`\`html
<tagname nome="valore">...Contenuto del tag...</tagname>
\`\`\`

- Un tag pu\xF2 avere 0, 1 o pi\xF9 attributi
\`\`\`html
<tagname>...Contenuto del tag...</tagname>
<tagname nome="valore">...Contenuto del tag...</tagname>
<tagname nome1="valore1" nome2="valore2" nome3="valore3">...Contenuto del tag...</tagname>
\`\`\`
### Esempio:
\`\`\`html
<meta name="author" content="Antonio Mancuso" />
<a href="https://www.w3schools.com">Visit W3Schools</a>
<p style="color:red;">This is a red paragraph.</p>
\`\`\`
`,title:"Attributi",level:1,content:`# Attributi

Caratteristiche addizionali di un TAG

- I tag HTML possono avere degli **attributi** che forniscono delle informazioni addizionali al browser.
- Gli attributi sono **sempre** specificati nel tag di apertura.
- Gli attributi sono definiti da una coppia nome-valore

\`\`\`html
<tagname nome="valore">...Contenuto del tag...</tagname>
\`\`\`

- Un tag pu\xF2 avere 0, 1 o pi\xF9 attributi
\`\`\`html
<tagname>...Contenuto del tag...</tagname>
<tagname nome="valore">...Contenuto del tag...</tagname>
<tagname nome1="valore1" nome2="valore2" nome3="valore3">...Contenuto del tag...</tagname>
\`\`\`
### Esempio:
\`\`\`html
<meta name="author" content="Antonio Mancuso" />
<a href="https://www.w3schools.com">Visit W3Schools</a>
<p style="color:red;">This is a red paragraph.</p>
\`\`\``,frontmatter:{},index:13,start:251,end:277,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:gw,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">La struttura di una pagina Web</h1>

`,content:'<h1 class="sezione">La struttura di una pagina Web</h1>',frontmatter:{layout:"section"},index:14,start:277,end:283,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:bw,meta:{slide:{raw:`
# Struttura pagina HTML

Una pagina HTML ha una struttuta fissa che deve sempre essere rispettata.

Una generica pagina HTML \xE8 composta da 3 sezioni principali:

1. **Documento**: il contenitore di pi\xF9 alto livello, che racchiude tutte le altre sezioni della pagina HTML.
2. **Head**: il contenitore per i metadati (dato che descrive un dato) del documento e va inserito in testa al docuemnto.
3. **Body**: consiste nel contenuto principale della pagina HTML.
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Una pagina HTML ha una struttuta fissa che deve sempre essere rispettata.

Una generica pagina HTML \xE8 composta da 3 sezioni principali:

1. **Documento**: il contenitore di pi\xF9 alto livello, che racchiude tutte le altre sezioni della pagina HTML.
2. **Head**: il contenitore per i metadati (dato che descrive un dato) del documento e va inserito in testa al docuemnto.
3. **Body**: consiste nel contenuto principale della pagina HTML.`,frontmatter:{},index:15,start:284,end:295,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Tw,meta:{slide:{raw:`
# Struttura pagina HTML

Rappresentazione grafica della struttura di una pagina HTML

![html5_5.jpg](/media/html5_5.jpg)

`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Rappresentazione grafica della struttura di una pagina HTML

![html5_5.jpg](/media/html5_5.jpg)`,frontmatter:{},index:16,start:296,end:304,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Sw,meta:{slide:{raw:`
# Struttura pagina HTML

Documento HTML

- Tutti i documenti HTML devono iniziare con la dichiarazione DOCTYPE che deve essere seguita dal TAG di pi\xF9 alto livello 
\`\`\`html
<!DOCTYPE html>
<html>
\`\`\`

- **&lt;!DOCTYPE html&gt;**: rappresenta il tipo di documento (html) e permette al browser di visualizzare la pagina HTML in modo corretto.
- Deve apparire nella pagina 1 sola volta come prima linea e prima di qualsiasi altro elemento o tag.
- **&lt;html&gt;**: \xE8 il primo tag di apertura che indica l'inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.

`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Documento HTML

- Tutti i documenti HTML devono iniziare con la dichiarazione DOCTYPE che deve essere seguita dal TAG di pi\xF9 alto livello 
\`\`\`html
<!DOCTYPE html>
<html>
\`\`\`

- **&lt;!DOCTYPE html&gt;**: rappresenta il tipo di documento (html) e permette al browser di visualizzare la pagina HTML in modo corretto.
- Deve apparire nella pagina 1 sola volta come prima linea e prima di qualsiasi altro elemento o tag.
- **&lt;html&gt;**: \xE8 il primo tag di apertura che indica l'inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.`,frontmatter:{},index:17,start:305,end:321,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Hw,meta:{slide:{raw:`
# Struttura pagina HTML

Header del documento

- Il primo elemento di apertura della pagina HTML \xE8 l'***HEAD**er* o intestazione.
- **&lt;head&gt;**: tag di apertura dell'header che contiene la descrizione dei *metadati* del documento HTML.
- I metadati sono dati che descrivono delle caratteristiche del documento, per esempip il titolo, il set di caratteri, l'autore,etc...
- La sezione header ed i metadati contenuti  **NON** sono visualizzati.
- Il pi\xF9 importante elemento della sezione head \xE8 il titolo identificato dal tag
\`\`\`html
<title>Titolo della pagina</title>
\`\`\`
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Header del documento

- Il primo elemento di apertura della pagina HTML \xE8 l'***HEAD**er* o intestazione.
- **&lt;head&gt;**: tag di apertura dell'header che contiene la descrizione dei *metadati* del documento HTML.
- I metadati sono dati che descrivono delle caratteristiche del documento, per esempip il titolo, il set di caratteri, l'autore,etc...
- La sezione header ed i metadati contenuti  **NON** sono visualizzati.
- Il pi\xF9 importante elemento della sezione head \xE8 il titolo identificato dal tag
\`\`\`html
<title>Titolo della pagina</title>
\`\`\``,frontmatter:{},index:18,start:322,end:336,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Dw,meta:{slide:{raw:`
# Struttura pagina HTML

Body e contenuto del documento

- La sezione del documento identificata dal tag
\`\`\`html
<body>
  ...
  ...
</body>
\`\`\`
- Rappresenta e contiene tutti i tag di descrizione e markup della pagina.
- In questa sezione viene definito il contenuto che si vuole visualizzare nel browser.
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Body e contenuto del documento

- La sezione del documento identificata dal tag
\`\`\`html
<body>
  ...
  ...
</body>
\`\`\`
- Rappresenta e contiene tutti i tag di descrizione e markup della pagina.
- In questa sezione viene definito il contenuto che si vuole visualizzare nel browser.`,frontmatter:{},index:19,start:337,end:352,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Kw,meta:{slide:{raw:`
# Struttura pagina HTML

Pagina HTML base

Questo \xE8 il codice della pagina HTML minimale, che contiene solo le sezioni principali

\`\`\`html
<!DOCTYPE html> <!-- HTML5-->
<!-- Questo \xE8 un commento su una singola riga -->

<!-- Questo \xE8 un commento 
     su pi\xF9 righe
-->
<html lang="it"> <!-- Pagina HTML -->
  <head> <!-- Header della pagina -->
    
    <!-- Qui vanno inserite informazioni relative alla pagina ma che non saranno visualizzate -->
  
  </head>
  <body><!-- Corpo principale della pagina HTML -->

    <!-- Questa sezione cotiene il contenuto della pagina HTML che viene visualizzato nel browser -->
  
  </body>
</html>
\`\`\`
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Pagina HTML base

Questo \xE8 il codice della pagina HTML minimale, che contiene solo le sezioni principali

\`\`\`html
<!DOCTYPE html> <!-- HTML5-->
<!-- Questo \xE8 un commento su una singola riga -->

<!-- Questo \xE8 un commento 
     su pi\xF9 righe
-->
<html lang="it"> <!-- Pagina HTML -->
  <head> <!-- Header della pagina -->
    
    <!-- Qui vanno inserite informazioni relative alla pagina ma che non saranno visualizzate -->
  
  </head>
  <body><!-- Corpo principale della pagina HTML -->

    <!-- Questa sezione cotiene il contenuto della pagina HTML che viene visualizzato nel browser -->
  
  </body>
</html>
\`\`\``,frontmatter:{},index:20,start:353,end:381,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Jw,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header

La sezione &lt;head&gt; pu\xF2 contenere i seguenti tag:
- &lt;title&gt;: definisce il titolo della pagina HTML.
- &lt;style&gt;: definisce lo stile da applicare alla pagina HTML.
- &lt;meta&gt;: definisce specifici metadata per il documento.
- &lt;link&gt;: utilizzato per referenziare elementi o documenti esterni.
- &lt;script&gt;: definisce la logica da eseguire durante la visualizzazione delle pagina.
- &lt;base&gt;: specifica un UTL di base da applicare a tutto il documento.

`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header

La sezione &lt;head&gt; pu\xF2 contenere i seguenti tag:
- &lt;title&gt;: definisce il titolo della pagina HTML.
- &lt;style&gt;: definisce lo stile da applicare alla pagina HTML.
- &lt;meta&gt;: definisce specifici metadata per il documento.
- &lt;link&gt;: utilizzato per referenziare elementi o documenti esterni.
- &lt;script&gt;: definisce la logica da eseguire durante la visualizzazione delle pagina.
- &lt;base&gt;: specifica un UTL di base da applicare a tutto il documento.`,frontmatter:{},index:21,start:382,end:396,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:sz,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header: &lt;title&gt;

- Il pi\xF9 importante elemento della sezione head \xE8 il titolo identificato dal tag

\`\`\`html
<title>Titolo della pagina</title>
\`\`\`
- Il titolo deve contenere solo informazioni testuali ed \xE8 visualizzato nel bordo o tab della finestra del browser.
- Il titolo \xE8 molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull'algoritmo che decide in quale ordine visualizzare le pagine trovate.
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header: &lt;title&gt;

- Il pi\xF9 importante elemento della sezione head \xE8 il titolo identificato dal tag

\`\`\`html
<title>Titolo della pagina</title>
\`\`\`
- Il titolo deve contenere solo informazioni testuali ed \xE8 visualizzato nel bordo o tab della finestra del browser.
- Il titolo \xE8 molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull'algoritmo che decide in quale ordine visualizzare le pagine trovate.`,frontmatter:{},index:22,start:397,end:410,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:uz,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header: &lt;meta&gt;

Viene utilizzato per specificare vari tipi di metadati, tra cui:
- *character set*: set di caratteri usato dalla pagina web
- *descrizione pagina*: descrizione della pagina e dei suoi contenuti
- *keywords*: parole chiave per le ricerche web
- *autore del documento*: autore/i del documento
- *viewport settings*: impostazioni del viewport, spesso utile per dispositivi mobili


Importante notare che i metadati, non sono visualizzati dal browser, ma utilizzati dai motori di ricerca per comprendere meglio il contenuto della pagina stessa.
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header: &lt;meta&gt;

Viene utilizzato per specificare vari tipi di metadati, tra cui:
- *character set*: set di caratteri usato dalla pagina web
- *descrizione pagina*: descrizione della pagina e dei suoi contenuti
- *keywords*: parole chiave per le ricerche web
- *autore del documento*: autore/i del documento
- *viewport settings*: impostazioni del viewport, spesso utile per dispositivi mobili


Importante notare che i metadati, non sono visualizzati dal browser, ma utilizzati dai motori di ricerca per comprendere meglio il contenuto della pagina stessa.`,frontmatter:{},index:23,start:411,end:426,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:hz,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header: &lt;style&gt;

- Definisce uno o pi\xF9 stili che vanno a modificare la visualizzazione della pagina HTML
\`\`\`html
<style>
  body {background-color: powderblue;}
  h1 {color: red;}
  p {color: blue;}
</style>
\`\`\`

- Normalmente non si usa mai in quanto non \xE8 una buona pratica di programmazione
- Per pagine di media/alta complessit\xE0 non si include in quanto \xE8 pi\xF9 pulito definire gli stili della pagina in un file esterno di tipo **CSS**
 `,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header: &lt;style&gt;

- Definisce uno o pi\xF9 stili che vanno a modificare la visualizzazione della pagina HTML
\`\`\`html
<style>
  body {background-color: powderblue;}
  h1 {color: red;}
  p {color: blue;}
</style>
\`\`\`

- Normalmente non si usa mai in quanto non \xE8 una buona pratica di programmazione
- Per pagine di media/alta complessit\xE0 non si include in quanto \xE8 pi\xF9 pulito definire gli stili della pagina in un file esterno di tipo **CSS**`,frontmatter:{},index:24,start:427,end:444,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:wz,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header: &lt;script&gt;

- Desinisce uno script in **Javascript** che viene eseguito dal browser durante la visualizzazione della pagina.
- Permette di eseguire un programma lato client direttamente all'interno del browser.
- Normalmente utilizzato per interagire con l'utente o per modificare l'aspetto della pagina stessa.

\`\`\`ts
<script>
    function myFunction() { 
        document.getElementById("titolo").innerHTML = "STRUTTURA BASE DI UNA PAGINA WEB";
    }
<\/script>
\`\`\`


- Normalmente non si usa mai in quanto non \xE8 una buona pratica di programmazione
- Per pagine di media/alta complessit\xE0 non si include in quanto \xE8 pi\xF9 pulito definire gli script della pagina in un file esterno di tipo **JS** 
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header: &lt;script&gt;

- Desinisce uno script in **Javascript** che viene eseguito dal browser durante la visualizzazione della pagina.
- Permette di eseguire un programma lato client direttamente all'interno del browser.
- Normalmente utilizzato per interagire con l'utente o per modificare l'aspetto della pagina stessa.

\`\`\`ts
<script>
    function myFunction() { 
        document.getElementById("titolo").innerHTML = "STRUTTURA BASE DI UNA PAGINA WEB";
    }
<\/script>
\`\`\`


- Normalmente non si usa mai in quanto non \xE8 una buona pratica di programmazione
- Per pagine di media/alta complessit\xE0 non si include in quanto \xE8 pi\xF9 pulito definire gli script della pagina in un file esterno di tipo **JS**`,frontmatter:{},index:25,start:445,end:466,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:$z,meta:{slide:{raw:`
# Struttura pagina HTML

Pagina HTML base

\`\`\`html
<!DOCTYPE html> <!-- HTML5-->
<html lang="it"> <!-- Pagina HTML -->
<head>
    <!-- Qui vanno inserite informazioni relative alla pagina ma che non saranno visualizzate -->
    <!-- sezione meta Fornisce informazioni al web browser e ai motori di ricerca per il processo di indicizzazione -->
    <meta charset="UTF-8" />
    <meta name="author" content="Antonio Mancuso" />
    <meta name="description" content="Template HTML" />
    <meta name="keywords" content="template, html, lezioni, scuola" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="100"><!-- Duranbte la fase di sviluppo permette il refresh  automatico della pagina  -->
    <title>Prima pagina HTML</title><!-- titolo della pagina -->
    <style>
      body {background-color: powderblue;}
      h1 {color: blue;}
    </style>
    <script>
      function myFunction() { 
        document.getElementById("titolo").innerHTML = "STRUTTURA BASE DI UNA PAGINA WEB";
      }
    <\/script>
</head>
\`\`\`
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Pagina HTML base

\`\`\`html
<!DOCTYPE html> <!-- HTML5-->
<html lang="it"> <!-- Pagina HTML -->
<head>
    <!-- Qui vanno inserite informazioni relative alla pagina ma che non saranno visualizzate -->
    <!-- sezione meta Fornisce informazioni al web browser e ai motori di ricerca per il processo di indicizzazione -->
    <meta charset="UTF-8" />
    <meta name="author" content="Antonio Mancuso" />
    <meta name="description" content="Template HTML" />
    <meta name="keywords" content="template, html, lezioni, scuola" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="100"><!-- Duranbte la fase di sviluppo permette il refresh  automatico della pagina  -->
    <title>Prima pagina HTML</title><!-- titolo della pagina -->
    <style>
      body {background-color: powderblue;}
      h1 {color: blue;}
    </style>
    <script>
      function myFunction() { 
        document.getElementById("titolo").innerHTML = "STRUTTURA BASE DI UNA PAGINA WEB";
      }
    <\/script>
</head>
\`\`\``,frontmatter:{},index:26,start:467,end:497,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Iz,meta:{slide:{raw:`
# Struttura pagina HTML

Pagina HTML base

\`\`\`html
<body><!-- Corpo principale della pagina HTML-->
    <center>
        <h1 id="titolo">Struttura base di una pagina web</h1>
        <br/><br/>
        <img src="https://source.unsplash.com/collection/94734566/1920x1080" width="60%"/>
        <div><button type="button" onclick="myFunction()">Prova a premere</button></div>
    </center>
</body>
</html>
\`\`\`
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Pagina HTML base

\`\`\`html
<body><!-- Corpo principale della pagina HTML-->
    <center>
        <h1 id="titolo">Struttura base di una pagina web</h1>
        <br/><br/>
        <img src="https://source.unsplash.com/collection/94734566/1920x1080" width="60%"/>
        <div><button type="button" onclick="myFunction()">Prova a premere</button></div>
    </center>
</body>
</html>
\`\`\``,frontmatter:{},index:27,start:498,end:515,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Cz,meta:{slide:{raw:`
# Esercizio html_01

Pagina HTML base

1. Creare una pagina HTML come visto nelle slide precedenti e nominarlo *pagina.html*
2. Aprire la pagina nel browser e verificarne il funzionamento
3. Provare a modificare la sezione *body* e verificare i cambiamenti
4. Provare a modificare la sezione *style* e verificare i cambiamenti
5. Provare a modificare la sezione *script* e verificare i cambiamenti


`,title:"Esercizio html_01",level:1,content:`# Esercizio html_01

Pagina HTML base

1. Creare una pagina HTML come visto nelle slide precedenti e nominarlo *pagina.html*
2. Aprire la pagina nel browser e verificarne il funzionamento
3. Provare a modificare la sezione *body* e verificare i cambiamenti
4. Provare a modificare la sezione *style* e verificare i cambiamenti
5. Provare a modificare la sezione *script* e verificare i cambiamenti`,frontmatter:{},index:28,start:516,end:529,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Hz,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Titoli e Paragrafi in HTML</h1>
`,content:'<h1 class="sezione">Titoli e Paragrafi in HTML</h1>',frontmatter:{layout:"section"},index:29,start:529,end:534,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Uz,meta:{slide:{raw:`
# HTML Headings

Titoli e sottotitoli

- Heading o intestazione: sono marcatori HTML che permettono di definire titoli e sottotitoli in una pagina web.
- HTML definisce 6 livelli di heading, dal pi\xF9 importante al meno importante:

<div grid="~ cols-2 gap-32">
<div>

\`\`\`html
<!--livello pi\xF9 importante-->
<h1>Heading 1</h1> 
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<!--livello meno importante-->
\`\`\`

- I motori di ricerca usano i tag di *heading* per capire e definire un indice del contenuto di una pagina
- **NOTA**: *Usa i tag &lt;hN&gt; solo per i titoli e sottotitoli. **NON** usarli per visualizzare testo in grassetto o con font pi\xF9 grande.*

</div>
<div>

![html5_7.jpg](/media/html5_7.jpg)

</div>
</div>
`,title:"HTML Headings",level:1,content:`# HTML Headings

Titoli e sottotitoli

- Heading o intestazione: sono marcatori HTML che permettono di definire titoli e sottotitoli in una pagina web.
- HTML definisce 6 livelli di heading, dal pi\xF9 importante al meno importante:

<div grid="~ cols-2 gap-32">
<div>

\`\`\`html
<!--livello pi\xF9 importante-->
<h1>Heading 1</h1> 
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<!--livello meno importante-->
\`\`\`

- I motori di ricerca usano i tag di *heading* per capire e definire un indice del contenuto di una pagina
- **NOTA**: *Usa i tag &lt;hN&gt; solo per i titoli e sottotitoli. **NON** usarli per visualizzare testo in grassetto o con font pi\xF9 grande.*

</div>
<div>

![html5_7.jpg](/media/html5_7.jpg)

</div>
</div>`,frontmatter:{},index:30,start:535,end:568,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Zz,meta:{slide:{raw:`
# HTML Paragrafi

Blocchi di testo

- Nell'editing di una pagina HTML, \xE8 spesso utile poter inserire un blocco di testo o paragrafo
- HTML mette a disposizione un tag specifico **&lt;p&gt;** che definisce un paragrafo di testo, lungo a piacere, da visualizzare in una pagina web 
\`\`\`html
<p>
  ...
  ... Blocco di testo
  ...
</p>
\`\`\`
- Ogni paragrafo \xE8 preceduto e seguito da una linea bianca distanziatrice.
- Il browser \xE8 libero di aggiunge automaticamente degli spazi (un margine) prima e dopo il testo.
- Non si pu\xF2 essere sicuri di come il browser visualizzi il paragrafo. 
- Il risultato pu\xF2 essere diverso su uno schermo grande rispetto ad uno piccolo. 
- Pertanto l'aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser.
`,title:"HTML Paragrafi",level:1,content:`# HTML Paragrafi

Blocchi di testo

- Nell'editing di una pagina HTML, \xE8 spesso utile poter inserire un blocco di testo o paragrafo
- HTML mette a disposizione un tag specifico **&lt;p&gt;** che definisce un paragrafo di testo, lungo a piacere, da visualizzare in una pagina web 
\`\`\`html
<p>
  ...
  ... Blocco di testo
  ...
</p>
\`\`\`
- Ogni paragrafo \xE8 preceduto e seguito da una linea bianca distanziatrice.
- Il browser \xE8 libero di aggiunge automaticamente degli spazi (un margine) prima e dopo il testo.
- Non si pu\xF2 essere sicuri di come il browser visualizzi il paragrafo. 
- Il risultato pu\xF2 essere diverso su uno schermo grande rispetto ad uno piccolo. 
- Pertanto l'aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser.`,frontmatter:{},index:31,start:569,end:589,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:ex,meta:{slide:{raw:`
# Esercizio html_02

Heading e paragrafi

1. Trasformare il file di test [*esercizio_html_02.txt*](../../support/esercizio_html_02.txt) in *|cognome|_esercizio_html_02.html*
2. Creare la struttura della pagina HTML inserendo anche i metadati appropriati
3. Impaginare il testo inserendo, in modo appropriato, gli heading necessari per titoli e sottotitoli
4. Suddividere il testo in paragrafi in modo opportuno
5. Fornire il link github al file con nome |cognome|_esercizio_html_02.html
`,title:"Esercizio html_02",level:1,content:`# Esercizio html_02

Heading e paragrafi

1. Trasformare il file di test [*esercizio_html_02.txt*](../../support/esercizio_html_02.txt) in *|cognome|_esercizio_html_02.html*
2. Creare la struttura della pagina HTML inserendo anche i metadati appropriati
3. Impaginare il testo inserendo, in modo appropriato, gli heading necessari per titoli e sottotitoli
4. Suddividere il testo in paragrafi in modo opportuno
5. Fornire il link github al file con nome |cognome|_esercizio_html_02.html`,frontmatter:{},index:32,start:590,end:601,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:ax,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Elementi block e inline</h1>

`,content:'<h1 class="sezione">Elementi block e inline</h1>',frontmatter:{layout:"section"},index:33,start:601,end:607,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:dx,meta:{slide:{raw:`
# Display Value

Elementi inline e block

Ogni elemento HTML ha un valore di display in funzione del tipo di elemento:

### **block** element

- Un elemento block comincia sempre su una nuova linea
- Un elemento block occupa tutta la larghezza possibile anche se non necessaria
- Un elemento block ha un margine superiore ed inferiore

<pre>

<div style="border: 1px solid black; padding:8px 0px 8px 5px;">The &lt;div&gt; element is a block-level element.</div>
<div style="border: 1px solid black; padding:8px 0px 8px 5px;">The &lt;h1&gt; element is another block-level element.</div>
</pre>

Qui la lista di tag di tipo block:
\`\`\`html
<address> <article> <aside> <blockquote> <canvas> <dd> <div> <dl> <dt> <fieldset> <figcaption> 
<figure> <footer> <form> <h1>-<h6> <header> <hr> <li> <main> <nav> <noscript> <ol> <p> <pre> 
<section> <table> <tfoot> <ul> <video>
\`\`\`
`,title:"Display Value",level:1,content:`# Display Value

Elementi inline e block

Ogni elemento HTML ha un valore di display in funzione del tipo di elemento:

### **block** element

- Un elemento block comincia sempre su una nuova linea
- Un elemento block occupa tutta la larghezza possibile anche se non necessaria
- Un elemento block ha un margine superiore ed inferiore

<pre>

<div style="border: 1px solid black; padding:8px 0px 8px 5px;">The &lt;div&gt; element is a block-level element.</div>
<div style="border: 1px solid black; padding:8px 0px 8px 5px;">The &lt;h1&gt; element is another block-level element.</div>
</pre>

Qui la lista di tag di tipo block:
\`\`\`html
<address> <article> <aside> <blockquote> <canvas> <dd> <div> <dl> <dt> <fieldset> <figcaption> 
<figure> <footer> <form> <h1>-<h6> <header> <hr> <li> <main> <nav> <noscript> <ol> <p> <pre> 
<section> <table> <tfoot> <ul> <video>
\`\`\``,frontmatter:{},index:34,start:608,end:634,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:bx,meta:{slide:{raw:`
# Display Value

Elementi inline e block

### **inline** element

- Un elemento inline non comincia su una nuova linea
- Un elemento inline occupa solo la larghezza minima necessaria

<pre>

<span style="padding:0px 5px 0px 5px; border: 1px solid black;">&lt;span&gt; is a inline-level element.</span><span style="padding:0px 5px 0px 5px; border: 1px solid black;">&lt;input&gt; is another inline-level element.</span>
</pre>


Qui la lista di tag di tipo block:
\`\`\`html
<a> <abbr> <acronym> <b> <bdo> <big> <br> <button> <cite> <code> <dfn> <em> <i> <img> <input> 
<kbd> <label> <map> <object> <output> <q> <samp> <script> <select> <small> <span> <strong> <sub> 
<sup> <textarea> <time> <tt> <var>
\`\`\`
`,title:"Display Value",level:1,content:`# Display Value

Elementi inline e block

### **inline** element

- Un elemento inline non comincia su una nuova linea
- Un elemento inline occupa solo la larghezza minima necessaria

<pre>

<span style="padding:0px 5px 0px 5px; border: 1px solid black;">&lt;span&gt; is a inline-level element.</span><span style="padding:0px 5px 0px 5px; border: 1px solid black;">&lt;input&gt; is another inline-level element.</span>
</pre>


Qui la lista di tag di tipo block:
\`\`\`html
<a> <abbr> <acronym> <b> <bdo> <big> <br> <button> <cite> <code> <dfn> <em> <i> <img> <input> 
<kbd> <label> <map> <object> <output> <q> <samp> <script> <select> <small> <span> <strong> <sub> 
<sup> <textarea> <time> <tt> <var>
\`\`\``,frontmatter:{},index:35,start:635,end:658,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:$x,meta:{slide:{raw:`
# DIV

Contenitore di contenitori block

- Un tag estremamente importante nello sviluppo web moderno \xE8 **&lt;div&gt;**.
- **&lt;DIV&gt;** \xE8 di tipo **block** e definisce un generico blocco di contenuto senza una semantica particolare. 
- E' comunemente usato come contenitore per altri elementi HTML o altri div
- Pertanto DIV \xE8 utilizzato per creare delle strutture di layout del contenuto web.
- Insieme a CSS \xE8 utilizzato per definire lo stile di blocchi di contenuto

### esempio
<div style="background-color:red;color:white;padding:20px;">
  <h2>ATTENZIONE</h2>
  <p>Si richiede a tutti gli studenti di studiare e sperimentare il pi\xF9 possibile con HTML.</p>
  <p>Oggi tutte le moderne applicazioni sono sviluppate in HTML - CSS e JavaScript</p>
</div> 
`,title:"DIV",level:1,content:`# DIV

Contenitore di contenitori block

- Un tag estremamente importante nello sviluppo web moderno \xE8 **&lt;div&gt;**.
- **&lt;DIV&gt;** \xE8 di tipo **block** e definisce un generico blocco di contenuto senza una semantica particolare. 
- E' comunemente usato come contenitore per altri elementi HTML o altri div
- Pertanto DIV \xE8 utilizzato per creare delle strutture di layout del contenuto web.
- Insieme a CSS \xE8 utilizzato per definire lo stile di blocchi di contenuto

### esempio
<div style="background-color:red;color:white;padding:20px;">
  <h2>ATTENZIONE</h2>
  <p>Si richiede a tutti gli studenti di studiare e sperimentare il pi\xF9 possibile con HTML.</p>
  <p>Oggi tutte le moderne applicazioni sono sviluppate in HTML - CSS e JavaScript</p>
</div>`,frontmatter:{},index:36,start:659,end:677,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:Ax,meta:{slide:{raw:`
# SPAN

Contenitore di contenitori inline

- Un tag estremamente importante nello sviluppo web moderno \xE8 **&lt;span&gt;**.
- Il tag **&lt;span&gt;** definisce un generico contenitore di tipo **inline** a cui non \xE8 associata nessuna semantica particolare.
- E' comunemente usato per modificare una parte di testo in un paragrafo on in altre sezione di un documento HTML.
- Insieme a CSS \xE8 utilizzato per definire lo stile di parti di testo.

### esempio
<p>Comunicato a tutti gli studenti: <span style="color:white;background:red;font-weight:bold">ATTENZIONE</span> Si richiede a tutti gli studenti di <span style="color:darkolivegreen;font-weight:bold">studiare</span> e sperimentare il pi\xF9 possibile con HTML.</p>
`,title:"SPAN",level:1,content:`# SPAN

Contenitore di contenitori inline

- Un tag estremamente importante nello sviluppo web moderno \xE8 **&lt;span&gt;**.
- Il tag **&lt;span&gt;** definisce un generico contenitore di tipo **inline** a cui non \xE8 associata nessuna semantica particolare.
- E' comunemente usato per modificare una parte di testo in un paragrafo on in altre sezione di un documento HTML.
- Insieme a CSS \xE8 utilizzato per definire lo stile di parti di testo.

### esempio
<p>Comunicato a tutti gli studenti: <span style="color:white;background:red;font-weight:bold">ATTENZIONE</span> Si richiede a tutti gli studenti di <span style="color:darkolivegreen;font-weight:bold">studiare</span> e sperimentare il pi\xF9 possibile con HTML.</p>`,frontmatter:{},index:37,start:678,end:691,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:Cx,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Ancore e Link</h1>

`,content:'<h1 class="sezione">Ancore e Link</h1>',frontmatter:{layout:"section"},index:38,start:691,end:697,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:jx,meta:{slide:{raw:`
# Ancore e Link

Collegamenti a contenuti esterni

- I link sono alla base del concetto di *iptertesto*, che a sua volta \xE8 alla base dello WWW.
- I link servono per creare dei *collegamenti* tra documenti diversi in modo da formare un unico *ipertesto*.
- Un link ad una risorsa o documento esterno si crea usando il tag *ancora* **&lt;a&gt;**

\`\`\`html
<a href="url">link text</a>

Esempio
<a href="https://agnelli.it/" target="_blank">Istituto Internazionale E.Agnelli</a>
\`\`\`
Qui puoi visitare L'<a href="https://agnelli.it/" target="_parent">Istituto Internazionale E.Agnelli</a>

- **href**: attributo che definisce la destinazione dell'ancora e pertanto il link
- **target**: per default il link viene visualizzato nella finestra corrente del browser. Questo attributo permette di modificare il comportamento standard.

Il principale valore per *target* \xE8 **_blank**, e permette di aprire il documento in un una nuova finestra o tab del browser.

`,title:"Ancore e Link",level:1,content:`# Ancore e Link

Collegamenti a contenuti esterni

- I link sono alla base del concetto di *iptertesto*, che a sua volta \xE8 alla base dello WWW.
- I link servono per creare dei *collegamenti* tra documenti diversi in modo da formare un unico *ipertesto*.
- Un link ad una risorsa o documento esterno si crea usando il tag *ancora* **&lt;a&gt;**

\`\`\`html
<a href="url">link text</a>

Esempio
<a href="https://agnelli.it/" target="_blank">Istituto Internazionale E.Agnelli</a>
\`\`\`
Qui puoi visitare L'<a href="https://agnelli.it/" target="_parent">Istituto Internazionale E.Agnelli</a>

- **href**: attributo che definisce la destinazione dell'ancora e pertanto il link
- **target**: per default il link viene visualizzato nella finestra corrente del browser. Questo attributo permette di modificare il comportamento standard.

Il principale valore per *target* \xE8 **_blank**, e permette di aprire il documento in un una nuova finestra o tab del browser.`,frontmatter:{},index:39,start:698,end:721,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:Qx,meta:{slide:{raw:`
# Ancore e Link

Collegamenti a contenuti esterni

L'URL specificato nell'attributo *href* pu\xF2 essere:
- **assoluto**: link ad una risorsa esterna nella forma canonica *https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png*
- **relativo**: link relativo ad una risorsa locale, presente nello stesso server */images/branding/googlelogo/1x/googlelogo_color_272x92dp.png*

Questo perch\xE8, tutte le URL relative fanno riferimento ad una directory chiamata **document root** che rappresenta la root del web server.
`,title:"Ancore e Link",level:1,content:`# Ancore e Link

Collegamenti a contenuti esterni

L'URL specificato nell'attributo *href* pu\xF2 essere:
- **assoluto**: link ad una risorsa esterna nella forma canonica *https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png*
- **relativo**: link relativo ad una risorsa locale, presente nello stesso server */images/branding/googlelogo/1x/googlelogo_color_272x92dp.png*

Questo perch\xE8, tutte le URL relative fanno riferimento ad una directory chiamata **document root** che rappresenta la root del web server.`,frontmatter:{},index:40,start:722,end:733,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:nT,meta:{slide:{raw:`
# Esercizio html_03

Link

1. Modificare il file *|cognome|_esercizio_html_02.html* e salvarlo come *|cognome|_esercizio_html_03.html*
2. Trasformare almeno 5 parole in link a risorse esterne
3. Trasformare altre 5 parole in modo che siano visualizzate in verde, blue o rosso
4. Selezionare almeno 2 frasi particolarmente importanti e inserirle in un rettangolo con sfondo blue e testo di color bianco.
5. Fornire il link github al file con nome |cognome|_esercizio_html_03.html


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*


`,title:"Esercizio html_03",level:1,content:`# Esercizio html_03

Link

1. Modificare il file *|cognome|_esercizio_html_02.html* e salvarlo come *|cognome|_esercizio_html_03.html*
2. Trasformare almeno 5 parole in link a risorse esterne
3. Trasformare altre 5 parole in modo che siano visualizzate in verde, blue o rosso
4. Selezionare almeno 2 frasi particolarmente importanti e inserirle in un rettangolo con sfondo blue e testo di color bianco.
5. Fornire il link github al file con nome |cognome|_esercizio_html_03.html


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:41,start:734,end:750,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:tT,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Web grafico con le Immagini</h1>

`,content:'<h1 class="sezione">Web grafico con le Immagini</h1>',frontmatter:{layout:"section"},index:42,start:750,end:756,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:uT,meta:{slide:{raw:`
# Immagini

Il Web diventa grafico

- La versione iniziale del WWW, prevedeva solo l'uso di informazioni testuali e non supportava l'uso di immagini all'interno delle pagine web.
- Con la nuova specifica HTML 2.0 del 1995, viene introdotto il nuovo tag &lt;img&gt; che permette di inserire immagini nelle pagine web.

\`\`\`html
<img src="url" alt="alternatetext">
\`\`\` 
- **src**: attributo che specifica il percorso/link (relativo o assoluto) all'immagine
- **alt**: in caso in cui l'immagine non possa essere visualizzata, specifica un testo alternativo

Normalmente si specificano anche gli attributi:
- **width**: specifica la larghezza dell'immaggine in pixel
- **height**: specifica l'altezza dell'immagine in pixel
`,title:"Immagini",level:1,content:`# Immagini

Il Web diventa grafico

- La versione iniziale del WWW, prevedeva solo l'uso di informazioni testuali e non supportava l'uso di immagini all'interno delle pagine web.
- Con la nuova specifica HTML 2.0 del 1995, viene introdotto il nuovo tag &lt;img&gt; che permette di inserire immagini nelle pagine web.

\`\`\`html
<img src="url" alt="alternatetext">
\`\`\` 
- **src**: attributo che specifica il percorso/link (relativo o assoluto) all'immagine
- **alt**: in caso in cui l'immagine non possa essere visualizzata, specifica un testo alternativo

Normalmente si specificano anche gli attributi:
- **width**: specifica la larghezza dell'immaggine in pixel
- **height**: specifica l'altezza dell'immagine in pixel`,frontmatter:{},index:43,start:757,end:775,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:gT,meta:{slide:{raw:`
# Immagini

Il Web diventa grafico

\`\`\`html
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
\`\`\`
<center>
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
</center>
`,title:"Immagini",level:1,content:`# Immagini

Il Web diventa grafico

\`\`\`html
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
\`\`\`
<center>
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
</center>`,frontmatter:{},index:44,start:776,end:788,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:yT,meta:{slide:{raw:`
# Immagini

Il Web diventa grafico

- I tag HTML possono essere nidificati, cio\xE8 dichiarati uno dentro l'altro.
- Questa importante propriet\xE0 ci permette di creare un link grafico all'interno di una pagina web.

\`\`\`html
<a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank">
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
</a>
\`\`\`
<center>
<a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank">
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="200" alt="primo web server"/>
</a>
</center>
`,title:"Immagini",level:1,content:`# Immagini

Il Web diventa grafico

- I tag HTML possono essere nidificati, cio\xE8 dichiarati uno dentro l'altro.
- Questa importante propriet\xE0 ci permette di creare un link grafico all'interno di una pagina web.

\`\`\`html
<a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank">
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
</a>
\`\`\`
<center>
<a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank">
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="200" alt="primo web server"/>
</a>
</center>`,frontmatter:{},index:45,start:789,end:808,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:$T,meta:{slide:{raw:`
# Esercizio html_04


Link

1. Editare il file *|cognome|_esercizio_html_03.html* e salvarlo come *|cognome|_esercizio_html_04.html*
2. Aggiungere almeno 1 immagine, relative al testo, come risorsa esterna (link assoluto)
3. Aggiungere almeno 1 immagine, relative al testo, come risorsa interna (link relativo)
4. Aggiungere almeno 1 immagine, relative al testo, che sia anche un link ad una pagina esterna
5. Fornire il link github al file con nome |cognome|_esercizio_html_04.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*


`,title:"Esercizio html_04",level:1,content:`# Esercizio html_04


Link

1. Editare il file *|cognome|_esercizio_html_03.html* e salvarlo come *|cognome|_esercizio_html_04.html*
2. Aggiungere almeno 1 immagine, relative al testo, come risorsa esterna (link assoluto)
3. Aggiungere almeno 1 immagine, relative al testo, come risorsa interna (link relativo)
4. Aggiungere almeno 1 immagine, relative al testo, che sia anche un link ad una pagina esterna
5. Fornire il link github al file con nome |cognome|_esercizio_html_04.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:46,start:809,end:826,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:LT,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Formattazione del testo in HTML</h1>

`,content:'<h1 class="sezione">Formattazione del testo in HTML</h1>',frontmatter:{layout:"section"},index:47,start:826,end:832,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:CT,meta:{slide:{raw:`
# Formattazione del Testo

Tag di formattazione

- HTML mette a disposizione 10 tag specifici per la definizione di testo con particolare significato.
- Questi tag definiscono la semantica e cio\xE8 il significato del testo che racchiudono.
- Il browser decide come visualizzare il testo racchiuso in questi tag

<br />

\`\`\`html
<b>: testo in grassetto senza significato aggiuntivo
<strong>: testo con molta importanza. Normalmente visualizzatto in grassetto
<i>: testo alternativo, un termine tecnico, una parola straniera. Normalmente visualizzato in italico
<em>: testo con particolare enfasi.Normalmente viene visualizzato in italico
<mark>: testo che deve essere evidenziato
<small>: testo con dimensioni minori e quindi con meno importanza
<del>: testo che \xE8 stato eliminato dal documento. Normalmente visualizzato con una linea sul testo
<ins>: testo che \xE8 stato aggiunto al documento. Normalmente visualizzato come testo sottolineato
<sub>: - definisce un testo come pedice
<sup>: - definisce un testo come apice
\`\`\`
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag di formattazione

- HTML mette a disposizione 10 tag specifici per la definizione di testo con particolare significato.
- Questi tag definiscono la semantica e cio\xE8 il significato del testo che racchiudono.
- Il browser decide come visualizzare il testo racchiuso in questi tag

<br />

\`\`\`html
<b>: testo in grassetto senza significato aggiuntivo
<strong>: testo con molta importanza. Normalmente visualizzatto in grassetto
<i>: testo alternativo, un termine tecnico, una parola straniera. Normalmente visualizzato in italico
<em>: testo con particolare enfasi.Normalmente viene visualizzato in italico
<mark>: testo che deve essere evidenziato
<small>: testo con dimensioni minori e quindi con meno importanza
<del>: testo che \xE8 stato eliminato dal documento. Normalmente visualizzato con una linea sul testo
<ins>: testo che \xE8 stato aggiunto al documento. Normalmente visualizzato come testo sottolineato
<sub>: - definisce un testo come pedice
<sup>: - definisce un testo come apice
\`\`\``,frontmatter:{},index:48,start:833,end:857,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:ZT,meta:{slide:{raw:`
# Formattazione del Testo

Tag di formattazione

- bold
\`\`\`html
In un paragrafo spesso vogliamo poter evidenziare una parola in <b>grassetto</b>.
\`\`\`
In un paragrafo spesso vogliamo poter evidenziare una parola in <b>grassetto</b>.

- strong
\`\`\`html
Spesso \xE8 necessario definire una parola <strong>molto importante</strong>.
\`\`\` 
Spesso \xE8 necessario definire una parola <strong>molto importante</strong>.

- italico
\`\`\`html
Alcune volte \xE8 necessario definire un termine tecnico come <i>Web Server</i>
\`\`\`
Alcune volte \xE8 necessario definire un termine tecnico come <i>Web Server</i>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag di formattazione

- bold
\`\`\`html
In un paragrafo spesso vogliamo poter evidenziare una parola in <b>grassetto</b>.
\`\`\`
In un paragrafo spesso vogliamo poter evidenziare una parola in <b>grassetto</b>.

- strong
\`\`\`html
Spesso \xE8 necessario definire una parola <strong>molto importante</strong>.
\`\`\` 
Spesso \xE8 necessario definire una parola <strong>molto importante</strong>.

- italico
\`\`\`html
Alcune volte \xE8 necessario definire un termine tecnico come <i>Web Server</i>
\`\`\`
Alcune volte \xE8 necessario definire un termine tecnico come <i>Web Server</i>`,frontmatter:{},index:49,start:858,end:881,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:_2,meta:{slide:{raw:`
# Formattazione del Testo

Tag di formattazione

- enfasi
\`\`\`html
In un testo ci sono specifiche parole a cui si vuole dare <em>enfasi</em>.
\`\`\`
In un testo ci sono specifiche parole a cui si vuole dare <em>enfasi</em>.

- mark
\`\`\`html
Un altro modo per <mark>evidenziare</mark> una o pi\xF9 parole \xE8 usare il tag <b>mark</b>
\`\`\`
Un altro modo per <mark>evidenziare</mark> una o pi\xF9 parole \xE8 usare il tag <b>mark</b>

- small
\`\`\`html
Al contrario quando un testo <small>\xE8 di poca importanza</small> si pu\xF2 usare il tag <b>small</b>
\`\`\`
Al contrario quando un testo <small>\xE8 di poca importanza</small> si pu\xF2 usare il tag <b>small</b>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag di formattazione

- enfasi
\`\`\`html
In un testo ci sono specifiche parole a cui si vuole dare <em>enfasi</em>.
\`\`\`
In un testo ci sono specifiche parole a cui si vuole dare <em>enfasi</em>.

- mark
\`\`\`html
Un altro modo per <mark>evidenziare</mark> una o pi\xF9 parole \xE8 usare il tag <b>mark</b>
\`\`\`
Un altro modo per <mark>evidenziare</mark> una o pi\xF9 parole \xE8 usare il tag <b>mark</b>

- small
\`\`\`html
Al contrario quando un testo <small>\xE8 di poca importanza</small> si pu\xF2 usare il tag <b>small</b>
\`\`\`
Al contrario quando un testo <small>\xE8 di poca importanza</small> si pu\xF2 usare il tag <b>small</b>`,frontmatter:{},index:50,start:882,end:905,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:C2,meta:{slide:{raw:`
# Formattazione del Testo

Tag di formattazione

- del e ins
\`\`\`html
Il mio cibo preferito \xE8 il <del>pollo</del> <ins>tacchino</ins>.
\`\`\`
Il mio cibo preferito \xE8 il <del>pollo</del> <ins>tacchino</ins>.

- sub e sup
\`\`\`html
Il logaritmo in base 2 di 8 \xE8 3: log<sub>2</sub> 8 = 3
In modo analogo 2 elevato alla 3 fa 8: 2<sup>3</sup> = 8
In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> 
mentre i <sub>pedici</sub> con il tag <b>sub</b>

\`\`\`
Il logaritmo in base 2 di 8 \xE8 3: log<sub>2</sub> 8 = 3

In modo analogo 2 elevato alla 3 fa 8: 2<sup>3</sup> = 8

In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> mentre i <sub>pedici</sub> con il tag <b>sub</b>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag di formattazione

- del e ins
\`\`\`html
Il mio cibo preferito \xE8 il <del>pollo</del> <ins>tacchino</ins>.
\`\`\`
Il mio cibo preferito \xE8 il <del>pollo</del> <ins>tacchino</ins>.

- sub e sup
\`\`\`html
Il logaritmo in base 2 di 8 \xE8 3: log<sub>2</sub> 8 = 3
In modo analogo 2 elevato alla 3 fa 8: 2<sup>3</sup> = 8
In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> 
mentre i <sub>pedici</sub> con il tag <b>sub</b>

\`\`\`
Il logaritmo in base 2 di 8 \xE8 3: log<sub>2</sub> 8 = 3

In modo analogo 2 elevato alla 3 fa 8: 2<sup>3</sup> = 8

In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> mentre i <sub>pedici</sub> con il tag <b>sub</b>`,frontmatter:{},index:51,start:906,end:931,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:N2,meta:{slide:{raw:`
# Esercizio html_05

Link

1. Editare il file *|cognome|_esercizio_html_04.html* e salvarlo come *|cognome|_esercizio_html_05.html*
2. evidenziare 5 parole in bold
3. marcare 5 parole particolarmente importanti
4. evidenziare 5 parole alternative o termini tecnici
5. dare enfasi a 5 parole
6. evidenziare (mark) 5 parole significative
7. rendere pi\xF9 piccole 5 parole poco significative
8. marcare 5 parole come eliminate dal testo
9. marcare 5 parole come inserite nel testo
10. dove possibile marcare almeno 1 parola come apice ed 1 come pedice
11. Fornire il link github al file con nome |cognome|_esercizio_html_05.html

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*


`,title:"Esercizio html_05",level:1,content:`# Esercizio html_05

Link

1. Editare il file *|cognome|_esercizio_html_04.html* e salvarlo come *|cognome|_esercizio_html_05.html*
2. evidenziare 5 parole in bold
3. marcare 5 parole particolarmente importanti
4. evidenziare 5 parole alternative o termini tecnici
5. dare enfasi a 5 parole
6. evidenziare (mark) 5 parole significative
7. rendere pi\xF9 piccole 5 parole poco significative
8. marcare 5 parole come eliminate dal testo
9. marcare 5 parole come inserite nel testo
10. dove possibile marcare almeno 1 parola come apice ed 1 come pedice
11. Fornire il link github al file con nome |cognome|_esercizio_html_05.html

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:52,start:932,end:954,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:B2,meta:{slide:{raw:`
# Formattazione del Testo

Tag per Quotazioni e Citazioni


- HTML mette a disposizione 4 tag specifici per la definizione di testo che rappresenta una citazione o una quote.
- Questi tag definiscono la semantica e cio\xE8 il significato del testo che racchiudono.
- Il browser decide come visualizzare il testo racchiuso in questi tag
  
\`\`\`html
<blockquote>: definisce una porzione di testo come una citazione esterna
<q>: definisce una breve citazione
<abbr>: definisce un'abbreviazione o un acronimo
<cite>: citazione ad un lavoro altrui (libro, sito web, ...)
\`\`\`
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag per Quotazioni e Citazioni


- HTML mette a disposizione 4 tag specifici per la definizione di testo che rappresenta una citazione o una quote.
- Questi tag definiscono la semantica e cio\xE8 il significato del testo che racchiudono.
- Il browser decide come visualizzare il testo racchiuso in questi tag
  
\`\`\`html
<blockquote>: definisce una porzione di testo come una citazione esterna
<q>: definisce una breve citazione
<abbr>: definisce un'abbreviazione o un acronimo
<cite>: citazione ad un lavoro altrui (libro, sito web, ...)
\`\`\``,frontmatter:{},index:53,start:955,end:972,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:n$,meta:{slide:{raw:`
# Formattazione del Testo

Tag per Quotazioni e Citazioni

- blockquote
\`\`\`html
Alle volte in un testo si vuole "quotare" un altro autore.
Tuttavia non sempre \xE8 possibile riportare il riferimento all'autore in modo integrale.
Quindi con il tag <b>blockquote</b> si pu\xF2 definire una quotazione
indicando la sorgente dell'informazione
<blockquote cite="https://it.wikipedia.org/wiki/Giovanni_Bosco">
  La sottrazione di benevolenza \xE8 un castigo che eccita l'emulazione
</blockquote>
\`\`\`
Alle volte in un testo si vuole "quotare" un altro autore.
Tuttavia non sempre \xE8 possibile riportare il riferimento all'autore in modo integrale.
Quindi con il tag <b>blockquote</b> si pu\xF2 definire una quotazione
indicando la sorgente dell'informazione
<blockquote cite="https://it.wikipedia.org/wiki/Giovanni_Bosco">
  La sottrazione di benevolenza \xE8 un castigo che eccita l'emulazione
</blockquote>

-  Come si pu\xF2 notare la citazione \xE8 indentata. Il link alla citazione  non ha un effetto visivo ma pu\xF2 essere utile al motore di ricerca o altri tool.
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag per Quotazioni e Citazioni

- blockquote
\`\`\`html
Alle volte in un testo si vuole "quotare" un altro autore.
Tuttavia non sempre \xE8 possibile riportare il riferimento all'autore in modo integrale.
Quindi con il tag <b>blockquote</b> si pu\xF2 definire una quotazione
indicando la sorgente dell'informazione
<blockquote cite="https://it.wikipedia.org/wiki/Giovanni_Bosco">
  La sottrazione di benevolenza \xE8 un castigo che eccita l'emulazione
</blockquote>
\`\`\`
Alle volte in un testo si vuole "quotare" un altro autore.
Tuttavia non sempre \xE8 possibile riportare il riferimento all'autore in modo integrale.
Quindi con il tag <b>blockquote</b> si pu\xF2 definire una quotazione
indicando la sorgente dell'informazione
<blockquote cite="https://it.wikipedia.org/wiki/Giovanni_Bosco">
  La sottrazione di benevolenza \xE8 un castigo che eccita l'emulazione
</blockquote>

-  Come si pu\xF2 notare la citazione \xE8 indentata. Il link alla citazione  non ha un effetto visivo ma pu\xF2 essere utile al motore di ricerca o altri tool.`,frontmatter:{},index:54,start:973,end:998,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:v$,meta:{slide:{raw:`
# Formattazione del Testo

Tag per Quotazioni e Citazioni

- quotazione
\`\`\`html
Quando in un testo vogliamo fare una <q>breve citazione</q>, basta inserire il testo nel tag <b>q</b> 
\`\`\` 
Quando in un testo vogliamo fare una <q>breve citazione</q>, basta inserire il testo nel tag <b>q</b> 

- abbreviazione
\`\`\`html
<abbr title="Gnu is Not Unix">GNU</abbr>di GNU/Linux sembra una  parola ma in realt\xE0 \xE8 un acronimo.
\`\`\`
<abbr title="Gnu is Not Unix">GNU</abbr> di GNU/Linux sembra una parola ma in realt\xE0 \xE8 un acronimo.

- citazione lavoro altrui
\`\`\`html
Un alternativa per una citazione \xE8 usare il tag <b>cite</b>. 
In una disicussione accesa Linus disse: <cite>"Parlare \xE8 facile. Mostrami il codice".</cite>
\`\`\`
Un alternativa per una citazione \xE8 usare il tag <b>cite</b>. In una disicussione accesa Linus disse: <cite>"Parlare \xE8 facile. Mostrami il codice".</cite>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag per Quotazioni e Citazioni

- quotazione
\`\`\`html
Quando in un testo vogliamo fare una <q>breve citazione</q>, basta inserire il testo nel tag <b>q</b> 
\`\`\` 
Quando in un testo vogliamo fare una <q>breve citazione</q>, basta inserire il testo nel tag <b>q</b> 

- abbreviazione
\`\`\`html
<abbr title="Gnu is Not Unix">GNU</abbr>di GNU/Linux sembra una  parola ma in realt\xE0 \xE8 un acronimo.
\`\`\`
<abbr title="Gnu is Not Unix">GNU</abbr> di GNU/Linux sembra una parola ma in realt\xE0 \xE8 un acronimo.

- citazione lavoro altrui
\`\`\`html
Un alternativa per una citazione \xE8 usare il tag <b>cite</b>. 
In una disicussione accesa Linus disse: <cite>"Parlare \xE8 facile. Mostrami il codice".</cite>
\`\`\`
Un alternativa per una citazione \xE8 usare il tag <b>cite</b>. In una disicussione accesa Linus disse: <cite>"Parlare \xE8 facile. Mostrami il codice".</cite>`,frontmatter:{},index:55,start:999,end:1023,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:x$,meta:{slide:{raw:`
# Esercizio html_06


Link

1. Editare il file *|cognome|_esercizio_html_05.html* e salvarlo come *|cognome|_esercizio_html_06.html*
2. creare una citazione per un blocco di testo
3. marcare 3 frasi o parole come brevi citazioni
4. marcare almeno 3 abbreviazioni
5. marcare 1 citazione (cite) di qualche altro autore
6. Fornire il link github al file con nome |cognome|_esercizio_html_06.html

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*


`,title:"Esercizio html_06",level:1,content:`# Esercizio html_06


Link

1. Editare il file *|cognome|_esercizio_html_05.html* e salvarlo come *|cognome|_esercizio_html_06.html*
2. creare una citazione per un blocco di testo
3. marcare 3 frasi o parole come brevi citazioni
4. marcare almeno 3 abbreviazioni
5. marcare 1 citazione (cite) di qualche altro autore
6. Fornire il link github al file con nome |cognome|_esercizio_html_06.html

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:56,start:1024,end:1042,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:N$,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- Ci sono altri tag che formattano il testo ma che non hanno una semantica particolare.
  
\`\`\`html
<u>: definisce un testo sottolineato
<s>: definisce una testo sbarrato
<code>: definisce un blocco di testo come codice sorgente
<pre>: marca una porzione di testo come pre formattato
\`\`\`
- sottolineato
\`\`\`html
Se si vuole <u>sottolineare</u> una parola basta usare il tag <u></u> 
\`\`\` 
Se si vuole <u>sottolineare</u> una parola basta usare il tag &lt;u&gt; 

- sbarrato
\`\`\`html
Se si vuole <s>sbarrare</s> una parola basta usare il tag <s></s>
\`\`\`
Se si vuole <s>sbarrare</s> una parola basta usare il tag &lt;s&gt;


`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag addizionali

- Ci sono altri tag che formattano il testo ma che non hanno una semantica particolare.
  
\`\`\`html
<u>: definisce un testo sottolineato
<s>: definisce una testo sbarrato
<code>: definisce un blocco di testo come codice sorgente
<pre>: marca una porzione di testo come pre formattato
\`\`\`
- sottolineato
\`\`\`html
Se si vuole <u>sottolineare</u> una parola basta usare il tag <u></u> 
\`\`\` 
Se si vuole <u>sottolineare</u> una parola basta usare il tag &lt;u&gt; 

- sbarrato
\`\`\`html
Se si vuole <s>sbarrare</s> una parola basta usare il tag <s></s>
\`\`\`
Se si vuole <s>sbarrare</s> una parola basta usare il tag &lt;s&gt;`,frontmatter:{},index:57,start:1043,end:1070,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:Q$,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- codice sorgente
\`\`\`html
Spesso negli articoli informatici vengono riportati comandi o porzioni di codice.
Per farlo in modo corretto usa il tag <b>code</b>.<br>
Per installare vscode in Linux usa il comando: <code>apt install vscode</code>
\`\`\` 
Spesso negli articoli informatici vengono riportati comandi o porzioni di codice.
Per farlo in modo corretto usa il tag <b>code</b>.<br>

Per installare vscode in Linux usa il comando: <code>apt install vscode</code>

`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag addizionali

- codice sorgente
\`\`\`html
Spesso negli articoli informatici vengono riportati comandi o porzioni di codice.
Per farlo in modo corretto usa il tag <b>code</b>.<br>
Per installare vscode in Linux usa il comando: <code>apt install vscode</code>
\`\`\` 
Spesso negli articoli informatici vengono riportati comandi o porzioni di codice.
Per farlo in modo corretto usa il tag <b>code</b>.<br>

Per installare vscode in Linux usa il comando: <code>apt install vscode</code>`,frontmatter:{},index:58,start:1071,end:1088,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:tM,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- pre formattato
\`\`\`html
Negli articoli pu\xF2 essere necessario riportare una porzione di testo con una formattazione specifica.
Per evitare che il browser foramtti il testo in modo autonomo usa il tag <b>pre</b>. <br>
<pre>
    Questo testo       viene visualizzato esatta 
    mente come fornito dallo sviluppatore.    
    Venogno rispettrati    gli spazi e i ritorni 
    a 
    capo.
</pre>
\`\`\`
<br />
<pre>
    Questo testo       viene visualizzato esatta 
    mente come fornito dallo sviluppatore.    
    Venogno rispettrati    gli spazi e i ritorni 
    a 
    capo.
</pre>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag addizionali

- pre formattato
\`\`\`html
Negli articoli pu\xF2 essere necessario riportare una porzione di testo con una formattazione specifica.
Per evitare che il browser foramtti il testo in modo autonomo usa il tag <b>pre</b>. <br>
<pre>
    Questo testo       viene visualizzato esatta 
    mente come fornito dallo sviluppatore.    
    Venogno rispettrati    gli spazi e i ritorni 
    a 
    capo.
</pre>
\`\`\`
<br />
<pre>
    Questo testo       viene visualizzato esatta 
    mente come fornito dallo sviluppatore.    
    Venogno rispettrati    gli spazi e i ritorni 
    a 
    capo.
</pre>`,frontmatter:{},index:59,start:1089,end:1115,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:lM,meta:{slide:{raw:`
# Esercizio html_07

Link

1. Editare il file *|cognome|_esercizio_html_06.html* e salvarlo come *|cognome|_esercizio_html_07.html*
2. marcare 5 parole come sottolineate
3. marcare 5 parole come sbarrate
4. aggiungere una porzione di codice sorgente o comando linux
5. aggiungere una sezione di testo pre formattata
6. Fornire il link github al file con nome |cognome|_esercizio_html_07.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*


`,title:"Esercizio html_07",level:1,content:`# Esercizio html_07

Link

1. Editare il file *|cognome|_esercizio_html_06.html* e salvarlo come *|cognome|_esercizio_html_07.html*
2. marcare 5 parole come sottolineate
3. marcare 5 parole come sbarrate
4. aggiungere una porzione di codice sorgente o comando linux
5. aggiungere una sezione di testo pre formattata
6. Fornire il link github al file con nome |cognome|_esercizio_html_07.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:60,start:1116,end:1133,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:kM,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- Durante la realizzazione di una pagina web ci possono essere delle esigenze particolari di formattazione.
- HTML fornisce altri tag aggiuntivi utili per forzare un ritorno a capo e per visualizzare una linea di suddivisione orizzontale


- ritorno a capo
\`\`\`html
In alcuni casi \xE8 necessario forzare un ritorno a capo. <br/>
Per fare ci\xF2 basta usare il tag <br/>
\`\`\`
In alcuni casi \xE8 necessario forzare un ritorno a capo. <br/>
Per fare ci\xF2 basta usare il tag &lt;br/&gt;

- linea orizzontale
\`\`\`html
Per inserire una linea orizzontale di separazione usa <hr />
\`\`\`
<hr style="height:5px; background-color:grey">
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag addizionali

- Durante la realizzazione di una pagina web ci possono essere delle esigenze particolari di formattazione.
- HTML fornisce altri tag aggiuntivi utili per forzare un ritorno a capo e per visualizzare una linea di suddivisione orizzontale


- ritorno a capo
\`\`\`html
In alcuni casi \xE8 necessario forzare un ritorno a capo. <br/>
Per fare ci\xF2 basta usare il tag <br/>
\`\`\`
In alcuni casi \xE8 necessario forzare un ritorno a capo. <br/>
Per fare ci\xF2 basta usare il tag &lt;br/&gt;

- linea orizzontale
\`\`\`html
Per inserire una linea orizzontale di separazione usa <hr />
\`\`\`
<hr style="height:5px; background-color:grey">`,frontmatter:{},index:61,start:1134,end:1157,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:$M,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- barra per metrica
\`\`\`html
Un modo molto efficace per visualizzare il progresso di un attivit\xE0 o evento \xE8 l'uso del tag <meter>

Andamento dei voti:<br>

Studente 1 <meter min="0" max="10" value="8.0">8 su 10</meter><br />
Studente 2 <meter min="0" max="10" value="6.5">6.5 su 10</meter><br />
Studente 3 <meter min="0" max="10" value="9.5">9.5 su 10</meter><br />
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />
\`\`\`
Un modo molto efficace per visualizzare il progresso di un attivit\xE0 o evento \xE8 l'uso del tag &lt;meter&gt;

Andamento dei voti:<br>

Studente 1 <meter min="0" max="10" value="8.0">8 su 10</meter><br />
Studente 2 <meter min="0" max="10" value="6.5">6.5 su 10</meter><br />
Studente 3 <meter min="0" max="10" value="9.5">9.5 su 10</meter><br />
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag addizionali

- barra per metrica
\`\`\`html
Un modo molto efficace per visualizzare il progresso di un attivit\xE0 o evento \xE8 l'uso del tag <meter>

Andamento dei voti:<br>

Studente 1 <meter min="0" max="10" value="8.0">8 su 10</meter><br />
Studente 2 <meter min="0" max="10" value="6.5">6.5 su 10</meter><br />
Studente 3 <meter min="0" max="10" value="9.5">9.5 su 10</meter><br />
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />
\`\`\`
Un modo molto efficace per visualizzare il progresso di un attivit\xE0 o evento \xE8 l'uso del tag &lt;meter&gt;

Andamento dei voti:<br>

Studente 1 <meter min="0" max="10" value="8.0">8 su 10</meter><br />
Studente 2 <meter min="0" max="10" value="6.5">6.5 su 10</meter><br />
Studente 3 <meter min="0" max="10" value="9.5">9.5 su 10</meter><br />
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />`,frontmatter:{},index:62,start:1158,end:1183,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:CM,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- barra di progresso
\`\`\`html
In alternativa si pu\xF2 visualizzare un progress bar tramite l'uso del tag <progress>

Andamento dei voti:<br>

Studente 1 <progress min="0" max="10" value="8">8 di 10</progress><br />
Studente 2 <progress min="0" max="10" value="6.5">6.5 di 10</progress><br />
Studente 3 <progress min="0" max="10" value="9.5">9.5 di 10</progress><br />
Studente 4 <progress min="0" max="10" value="4.5">4.5 di 10</progress><br />
\`\`\`
In alternativa si pu\xF2 visualizzare un progress bar tramite l'uso del tag &lt;progress&gt;

Andamento dei voti:<br>

Studente 1 <progress min="0" max="10" value="8">8 di 10</progress><br />
Studente 2 <progress min="0" max="10" value="6.5">6.5 di 10</progress><br />
Studente 3 <progress min="0" max="10" value="9.5">9.5 di 10</progress><br />
Studente 4 <progress min="0" max="10" value="4.5">4.5 di 10</progress><br />
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag addizionali

- barra di progresso
\`\`\`html
In alternativa si pu\xF2 visualizzare un progress bar tramite l'uso del tag <progress>

Andamento dei voti:<br>

Studente 1 <progress min="0" max="10" value="8">8 di 10</progress><br />
Studente 2 <progress min="0" max="10" value="6.5">6.5 di 10</progress><br />
Studente 3 <progress min="0" max="10" value="9.5">9.5 di 10</progress><br />
Studente 4 <progress min="0" max="10" value="4.5">4.5 di 10</progress><br />
\`\`\`
In alternativa si pu\xF2 visualizzare un progress bar tramite l'uso del tag &lt;progress&gt;

Andamento dei voti:<br>

Studente 1 <progress min="0" max="10" value="8">8 di 10</progress><br />
Studente 2 <progress min="0" max="10" value="6.5">6.5 di 10</progress><br />
Studente 3 <progress min="0" max="10" value="9.5">9.5 di 10</progress><br />
Studente 4 <progress min="0" max="10" value="4.5">4.5 di 10</progress><br />`,frontmatter:{},index:63,start:1184,end:1209,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:NM,meta:{slide:{raw:`
# Esercizio html_08


Link

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_html_08.html*
2. Inserire 5 ritorni a capo forzati
3. Inserire 3 linee orizzontali di separazione
4. Inserire 5 meter bar
5. Inserire 5 progress bar
6. Fornire il link github al file con nome |cognome|_esercizio_html_08.html


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*


`,title:"Esercizio html_08",level:1,content:`# Esercizio html_08


Link

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_html_08.html*
2. Inserire 5 ritorni a capo forzati
3. Inserire 3 linee orizzontali di separazione
4. Inserire 5 meter bar
5. Inserire 5 progress bar
6. Fornire il link github al file con nome |cognome|_esercizio_html_08.html


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:64,start:1210,end:1228,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:WM,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Caratteri speciali in HTML</h1>

`,content:'<h1 class="sezione">Caratteri speciali in HTML</h1>',frontmatter:{layout:"section"},index:65,start:1228,end:1234,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:QM,meta:{slide:{raw:`
# HTML Entities

Uso di caratteri riservati

- Nella realizzazione di una pagina web, non \xE8 possibile usare tutti i caratteri disponibili.
- Alcuni caratteri sono riservati dallo standard HTML per usi specifici.
- Per esempio i caratteri < e > sono riservati in quanto servono per delimitare un tag HTML.
- Per inserire i caratteri riservati come parte del contenuto di una pagina HTML, si devono sostituire con ***HTML entities***
\`\`\`html
&entity_name;

oppure 

&#entity_number;
\`\`\`

- Pertanto il carattere < e > sono rappresentati in questo modo
\`\`\`html
< --> &lt; o &#60;
> --> &gt; o &#62;
\`\`\`
[Qui si pu\xF2 consultare la lista completa di entities HTML.](https://www.freeformatter.com/html-entities.html)
`,title:"HTML Entities",level:1,content:`# HTML Entities

Uso di caratteri riservati

- Nella realizzazione di una pagina web, non \xE8 possibile usare tutti i caratteri disponibili.
- Alcuni caratteri sono riservati dallo standard HTML per usi specifici.
- Per esempio i caratteri < e > sono riservati in quanto servono per delimitare un tag HTML.
- Per inserire i caratteri riservati come parte del contenuto di una pagina HTML, si devono sostituire con ***HTML entities***
\`\`\`html
&entity_name;

oppure 

&#entity_number;
\`\`\`

- Pertanto il carattere < e > sono rappresentati in questo modo
\`\`\`html
< --> &lt; o &#60;
> --> &gt; o &#62;
\`\`\`
[Qui si pu\xF2 consultare la lista completa di entities HTML.](https://www.freeformatter.com/html-entities.html)`,frontmatter:{},index:66,start:1235,end:1259,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:eL,meta:{slide:{raw:`
# HTML Entities

Uso di caratteri riservati

- In alcune occasioni \xE8 necessario indicare al browser di non andare a capo.
- Per fare ci\xF2 si usa il carattere *non breaking space*
- In altre parole inserendo questo carattere, si inserisce uno spazio che non pu\xF2 mandare la linea a capo

\`\`\`html
non breaking space

&nbsp;
\`\`\`

- In modo analogo, ricordiamoci che se inserisco 10 spazi, il browser ne rimuove 9
- Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte \`&nbsp;\`
`,title:"HTML Entities",level:1,content:`# HTML Entities

Uso di caratteri riservati

- In alcune occasioni \xE8 necessario indicare al browser di non andare a capo.
- Per fare ci\xF2 si usa il carattere *non breaking space*
- In altre parole inserendo questo carattere, si inserisce uno spazio che non pu\xF2 mandare la linea a capo

\`\`\`html
non breaking space

&nbsp;
\`\`\`

- In modo analogo, ricordiamoci che se inserisco 10 spazi, il browser ne rimuove 9
- Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte \`&nbsp;\``,frontmatter:{},index:67,start:1260,end:1278,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:iL,meta:{slide:{raw:"\n# HTML Entities\n\nUso di caratteri riservati\n\n- Qui una lista di HTML entities comuemente usate\n\n| Carattere | Descizione   | Nome Entit\xE0  | Numero Entit\xE0  | \n|---|---|---|---|\n| |non-breaking space	| `&nbsp;`	| `&#160;`| \n|<	|less than|	`&lt;`|	`&#60;`|\n|>	|greater than	|`&gt;`	|`&#62;`|\n|`&` |ampersand	|`&amp;`	|`&#38;`|\n|\"	|double quotation mark	|`&quot;`	|`&#34;`|\n|'	|single quotation mark (apostrophe)	|`&apos;`	|`&#39;`|\n|\u20AC	|euro	|`&euro;`	|`&#8364;`|\n|\xA9	|copyright	|`&copy;`	|`&#169;`|\n\n",title:"HTML Entities",level:1,content:"# HTML Entities\n\nUso di caratteri riservati\n\n- Qui una lista di HTML entities comuemente usate\n\n| Carattere | Descizione   | Nome Entit\xE0  | Numero Entit\xE0  | \n|---|---|---|---|\n| |non-breaking space	| `&nbsp;`	| `&#160;`| \n|<	|less than|	`&lt;`|	`&#60;`|\n|>	|greater than	|`&gt;`	|`&#62;`|\n|`&` |ampersand	|`&amp;`	|`&#38;`|\n|\"	|double quotation mark	|`&quot;`	|`&#34;`|\n|'	|single quotation mark (apostrophe)	|`&apos;`	|`&#39;`|\n|\u20AC	|euro	|`&euro;`	|`&#8364;`|\n|\xA9	|copyright	|`&copy;`	|`&#169;`|",frontmatter:{},index:68,start:1279,end:1298,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:rL,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Liste (non)ordinate</h1>
`,content:'<h1 class="sezione">Liste (non)ordinate</h1>',frontmatter:{layout:"section"},index:69,start:1298,end:1303,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:gL,meta:{slide:{raw:`
# Liste

Lista di elementi correlati

- In un testo o un articolo, risulta particolarmente utile organizzare il contenuto in modo schematico e rappresentare le informazioni tramite una lista.
- HTML mette a disposizione specifici tag per la generazione di liste di elementi

Ci sono 2 tipi principali di liste:
1. **Unordered List** (Liste non ordinate)
2. **Ordered List** (Liste ordinate)


<div grid="~ cols-2 gap-4">
<div>

### Lista non ordinata
- Pere
- Patate
- Mele
- Carote
  
</div>

<div>

### Lista ordinata
1. CPU: Central Processing Unit
2. RAM: Random Access Memeory
3. HDD: Hard Disk Drive
4. SSD: Solid State Disk
   
</div>
</div>
`,title:"Liste",level:1,content:`# Liste

Lista di elementi correlati

- In un testo o un articolo, risulta particolarmente utile organizzare il contenuto in modo schematico e rappresentare le informazioni tramite una lista.
- HTML mette a disposizione specifici tag per la generazione di liste di elementi

Ci sono 2 tipi principali di liste:
1. **Unordered List** (Liste non ordinate)
2. **Ordered List** (Liste ordinate)


<div grid="~ cols-2 gap-4">
<div>

### Lista non ordinata
- Pere
- Patate
- Mele
- Carote
  
</div>

<div>

### Lista ordinata
1. CPU: Central Processing Unit
2. RAM: Random Access Memeory
3. HDD: Hard Disk Drive
4. SSD: Solid State Disk
   
</div>
</div>`,frontmatter:{},index:70,start:1304,end:1339,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:TL,meta:{slide:{raw:`
# Liste

Lista di elementi correlati

### Lista non ordinata

Le liste di tipo non ordinato che si creano con 2 tag:
\`\`\`html
<ul>: Unordered List - tag che definisce la lista non ordinata 
<li>: List Item - tag che definisce l'elemento/item della lista 
\`\`\`
<br />
<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
Esempio: Vegetali

<ul>
    <li>Pere</li>
    <li>Patate</li>
    <li>Mele</li>
    <li>Carote</li>
</ul>
\`\`\`
  
</div>
<div>

Esempio: Vegetali
<ul>
    <li>Pere</li>
    <li>Patate</li>
    <li>Mele</li>
    <li>Carote</li>
</ul>
   
</div>
</div>
`,title:"Liste",level:1,content:`# Liste

Lista di elementi correlati

### Lista non ordinata

Le liste di tipo non ordinato che si creano con 2 tag:
\`\`\`html
<ul>: Unordered List - tag che definisce la lista non ordinata 
<li>: List Item - tag che definisce l'elemento/item della lista 
\`\`\`
<br />
<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
Esempio: Vegetali

<ul>
    <li>Pere</li>
    <li>Patate</li>
    <li>Mele</li>
    <li>Carote</li>
</ul>
\`\`\`
  
</div>
<div>

Esempio: Vegetali
<ul>
    <li>Pere</li>
    <li>Patate</li>
    <li>Mele</li>
    <li>Carote</li>
</ul>
   
</div>
</div>`,frontmatter:{},index:71,start:1340,end:1381,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:PL,meta:{slide:{raw:`
# Liste

Lista di elementi correlati

### Lista ordinata

Le liste di tipo ordinato che si creano con 2 tag:
\`\`\`html
<ol>: Ordered List - tag che definisce la lista ordinata 
<li>: List Item - tag che definisce l'elemento/item della lista 
\`\`\`
<br />
<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
Esempio: I componenti di un computer
       
<ol>
    <li>CPU: Central Processing Unit</li>
    <li>RAM: Random Access Memeory</li>
    <li>HDD: Hard Disk Drive</li>
    <li>SSD: Solid State Disk</li>
</ol>
\`\`\`
</div>
<div>

Esempio: I componenti di un computer

<ol>
    <li>CPU: Central Processing Unit</li>
    <li>RAM: Random Access Memeory</li>
    <li>HDD: Hard Disk Drive</li>
    <li>SSD: Solid State Disk</li>
</ol>   
</div>
</div>
`,title:"Liste",level:1,content:`# Liste

Lista di elementi correlati

### Lista ordinata

Le liste di tipo ordinato che si creano con 2 tag:
\`\`\`html
<ol>: Ordered List - tag che definisce la lista ordinata 
<li>: List Item - tag che definisce l'elemento/item della lista 
\`\`\`
<br />
<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
Esempio: I componenti di un computer
       
<ol>
    <li>CPU: Central Processing Unit</li>
    <li>RAM: Random Access Memeory</li>
    <li>HDD: Hard Disk Drive</li>
    <li>SSD: Solid State Disk</li>
</ol>
\`\`\`
</div>
<div>

Esempio: I componenti di un computer

<ol>
    <li>CPU: Central Processing Unit</li>
    <li>RAM: Random Access Memeory</li>
    <li>HDD: Hard Disk Drive</li>
    <li>SSD: Solid State Disk</li>
</ol>   
</div>
</div>`,frontmatter:{},index:72,start:1382,end:1422,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:qL,meta:{slide:{raw:`
# Esercizio html_09

Link

1. Editare il file *|cognome|_esercizio_html_08.html* e salvarlo come *|cognome|_esercizio_html_09.html*
2. Inserire 5 caratteri speciali in modo congruo con il testo
3. Creare 1 lista ordinata in modo congruo con il testo
4. Creare 1 lista non ordinata in modo congruo con il testo
5. Fornire il link github al file con nome |cognome|_esercizio_html_09.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*


`,title:"Esercizio html_09",level:1,content:`# Esercizio html_09

Link

1. Editare il file *|cognome|_esercizio_html_08.html* e salvarlo come *|cognome|_esercizio_html_09.html*
2. Inserire 5 caratteri speciali in modo congruo con il testo
3. Creare 1 lista ordinata in modo congruo con il testo
4. Creare 1 lista non ordinata in modo congruo con il testo
5. Fornire il link github al file con nome |cognome|_esercizio_html_09.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:73,start:1423,end:1439,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:DL,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Rappresentazioni tabulari con le Tabelle</h1>

`,content:'<h1 class="sezione">Rappresentazioni tabulari con le Tabelle</h1>',frontmatter:{layout:"section"},index:74,start:1439,end:1445,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:GL,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

- In passato lo sviluppo web era ampiamente basato sull'uso di tabelle
- Principalmente le tabelle venivano usato per creare il layout della pagina Web
- Tuttavia questo metodo era laborioso e poco funzionale in quanto il supporto delle tabelle dai vari browser non era omogeneo.
- Oggi il layout di una pagine, NON si realizza pi\xF9 con le tabelle ma con il blocco DIV.
- Tuttavia lo scopo originario delle tabelle, cio\xE8 visualizzare contenuti in formato tabellare rimane valido.

I principlai tag per la definizione di una tabella sono:

\`\`\`html
<table>: definisce un contenitore per dati organizzati in formato tabellare
<caption>: definisce il titolo di una tabella
<thead>: definisce l'header della tabella
<tr>: definisce una riga della tabella
<td>: definisce una cella della tabella.
<tbody>: definisce il corpo principale della tabella
\`\`\`
`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

- In passato lo sviluppo web era ampiamente basato sull'uso di tabelle
- Principalmente le tabelle venivano usato per creare il layout della pagina Web
- Tuttavia questo metodo era laborioso e poco funzionale in quanto il supporto delle tabelle dai vari browser non era omogeneo.
- Oggi il layout di una pagine, NON si realizza pi\xF9 con le tabelle ma con il blocco DIV.
- Tuttavia lo scopo originario delle tabelle, cio\xE8 visualizzare contenuti in formato tabellare rimane valido.

I principlai tag per la definizione di una tabella sono:

\`\`\`html
<table>: definisce un contenitore per dati organizzati in formato tabellare
<caption>: definisce il titolo di una tabella
<thead>: definisce l'header della tabella
<tr>: definisce una riga della tabella
<td>: definisce una cella della tabella.
<tbody>: definisce il corpo principale della tabella
\`\`\``,frontmatter:{},index:75,start:1446,end:1468,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:n3,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
<table border="1">
        <caption>A AND B</caption>
        <thead>
            <tr>
                <td>A</td> <td>B</td> <td>A & B</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0</td> <td>0</td> <td>0</td>
            </tr>
            <tr>
                <td>0</td> <td>1</td> <td>0</td>
            </tr>
            <tr>
                <td>1</td> <td>0</td> <td>0</td>
            </tr>
            <tr>
                <td>1</td> <td>1</td> <td>1</td>
            </tr>
        </tbody>
    </table>
\`\`\`

</div>
<div>

<table border="1">
        <caption>A AND B</caption>
        <thead>
            <tr>
                <td>A</td> <td>B</td> <td>A & B</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0</td> <td>0</td> <td>0</td>
            </tr>
            <tr>
                <td>0</td> <td>1</td> <td>0</td>
            </tr>
            <tr>
                <td>1</td> <td>0</td> <td>0</td>
            </tr>
            <tr>
                <td>1</td> <td>1</td> <td>1</td>
            </tr>
        </tbody>
    </table>

</div>
</div>
`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
<table border="1">
        <caption>A AND B</caption>
        <thead>
            <tr>
                <td>A</td> <td>B</td> <td>A & B</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0</td> <td>0</td> <td>0</td>
            </tr>
            <tr>
                <td>0</td> <td>1</td> <td>0</td>
            </tr>
            <tr>
                <td>1</td> <td>0</td> <td>0</td>
            </tr>
            <tr>
                <td>1</td> <td>1</td> <td>1</td>
            </tr>
        </tbody>
    </table>
\`\`\`

</div>
<div>

<table border="1">
        <caption>A AND B</caption>
        <thead>
            <tr>
                <td>A</td> <td>B</td> <td>A & B</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0</td> <td>0</td> <td>0</td>
            </tr>
            <tr>
                <td>0</td> <td>1</td> <td>0</td>
            </tr>
            <tr>
                <td>1</td> <td>0</td> <td>0</td>
            </tr>
            <tr>
                <td>1</td> <td>1</td> <td>1</td>
            </tr>
        </tbody>
    </table>

</div>
</div>`,frontmatter:{},index:76,start:1469,end:1531,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:i3,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
<table border="1">
    <caption>A AND B</caption>
    <thead style="background:gray;text-align: center;">
        <tr>
            <td>A</td> <td>B</td> <td>A | B</td>
        </tr>
    </thead>
    <tbody style="color:blue;text-align: center;">
        <tr>
            <td>0</td> <td>0</td> <td>0</td>
        </tr>
        <tr style="background:Gainsboro;">
            <td>0</td> <td>1</td> <td>1</td>
        </tr>
        <tr>
            <td>1</td> <td>0</td> <td>1</td>
        </tr>
        <tr style="background:Gainsboro;">
            <td>1</td> <td>1</td> <td>1</td>
        </tr>
    </tbody>
</table>
\`\`\`

</div>
<div>

<table border="1">
    <caption>A OR B</caption>
    <thead style="background:gray;text-align: center;">
        <tr>
            <td>A</td> <td>B</td> <td>A | B</td>
        </tr>
    </thead>
    <tbody style="color:blue;text-align: center;">
        <tr>
            <td>0</td> <td>0</td> <td>0</td>
        </tr>
        <tr style="background:Gainsboro;">
            <td>0</td> <td>1</td> <td>1</td>
        </tr>
        <tr>
            <td>1</td> <td>0</td> <td>1</td>
        </tr>
        <tr style="background:Gainsboro;">
            <td>1</td> <td>1</td> <td>1</td>
        </tr>
    </tbody>
</table>

</div>
</div>
`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
<table border="1">
    <caption>A AND B</caption>
    <thead style="background:gray;text-align: center;">
        <tr>
            <td>A</td> <td>B</td> <td>A | B</td>
        </tr>
    </thead>
    <tbody style="color:blue;text-align: center;">
        <tr>
            <td>0</td> <td>0</td> <td>0</td>
        </tr>
        <tr style="background:Gainsboro;">
            <td>0</td> <td>1</td> <td>1</td>
        </tr>
        <tr>
            <td>1</td> <td>0</td> <td>1</td>
        </tr>
        <tr style="background:Gainsboro;">
            <td>1</td> <td>1</td> <td>1</td>
        </tr>
    </tbody>
</table>
\`\`\`

</div>
<div>

<table border="1">
    <caption>A OR B</caption>
    <thead style="background:gray;text-align: center;">
        <tr>
            <td>A</td> <td>B</td> <td>A | B</td>
        </tr>
    </thead>
    <tbody style="color:blue;text-align: center;">
        <tr>
            <td>0</td> <td>0</td> <td>0</td>
        </tr>
        <tr style="background:Gainsboro;">
            <td>0</td> <td>1</td> <td>1</td>
        </tr>
        <tr>
            <td>1</td> <td>0</td> <td>1</td>
        </tr>
        <tr style="background:Gainsboro;">
            <td>1</td> <td>1</td> <td>1</td>
        </tr>
    </tbody>
</table>

</div>
</div>`,frontmatter:{},index:77,start:1532,end:1594,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:p3,meta:{slide:{raw:`
# Esercizio html_10

Link

1. Editare il file *|cognome|_esercizio_html_09.html* e salvarlo come *|cognome|_esercizio_html_10.html*
2. Creare 1 tabella modo congruo con il testo
3. Fornire il link github al file con nome |cognome|_esercizio_html_10.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*


`,title:"Esercizio html_10",level:1,content:`# Esercizio html_10

Link

1. Editare il file *|cognome|_esercizio_html_09.html* e salvarlo come *|cognome|_esercizio_html_10.html*
2. Creare 1 tabella modo congruo con il testo
3. Fornire il link github al file con nome |cognome|_esercizio_html_10.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:78,start:1595,end:1609,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:m3,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Interagiamo con l'utente attraverso i Form</h1>

`,content:`<h1 class="sezione">Interagiamo con l'utente attraverso i Form</h1>`,frontmatter:{layout:"section"},index:79,start:1609,end:1615,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:y3,meta:{slide:{raw:`
# Form

Input dall'utente

- Il form (letteralmente modulo) indica la parte di interfaccia utente di un'applicazione web che consente all'utente di inserire e inviare al web server/application server uno o pi\xF9 dati.
- Il form \xE8 composto da un contenitore e da componenti grafici detti **widget** che compongono il form stesso. 
- I widget comunemente presenti nelle pagine web sono: le caselle di testo, i menu a tendina, i date-picker, ...

Il form si crea usando il tag:
\`\`\`html
<form>
...
...widget del form
....
</form>
\`\`\`

I principali widget sono:
\`\`\`html
<input> <label> <select> <textarea> <button> <fieldset>
<legend> <datalist> <option> 
\`\`\`
`,title:"Form",level:1,content:`# Form

Input dall'utente

- Il form (letteralmente modulo) indica la parte di interfaccia utente di un'applicazione web che consente all'utente di inserire e inviare al web server/application server uno o pi\xF9 dati.
- Il form \xE8 composto da un contenitore e da componenti grafici detti **widget** che compongono il form stesso. 
- I widget comunemente presenti nelle pagine web sono: le caselle di testo, i menu a tendina, i date-picker, ...

Il form si crea usando il tag:
\`\`\`html
<form>
...
...widget del form
....
</form>
\`\`\`

I principali widget sono:
\`\`\`html
<input> <label> <select> <textarea> <button> <fieldset>
<legend> <datalist> <option> 
\`\`\``,frontmatter:{},index:80,start:1616,end:1640,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:S3,meta:{slide:{raw:`
# Form

&lt;input&gt;

- Uno dei widget pi\xF9 importanti ed utilizzati \xE8 &lt;input&gt;
- Permette di ricevere un input dall'utente
- Questo widget pu\xF2 assumere molte forme diverse in funzione dell'attributo *type*

\`\`\`html
<form>
  <input type="text" id="idnome" name="nome" placeholder="Nome">
  <input type="text" id="idcognome" name="cognnome" placeholder="Cognome">
</form>
\`\`\`
<input type="text" id="idnome" name="nome" placeholder="Nome" style="border: 1px solid black;background:Gainsboro;"> <br /><br />
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">
`,title:"Form",level:1,content:`# Form

&lt;input&gt;

- Uno dei widget pi\xF9 importanti ed utilizzati \xE8 &lt;input&gt;
- Permette di ricevere un input dall'utente
- Questo widget pu\xF2 assumere molte forme diverse in funzione dell'attributo *type*

\`\`\`html
<form>
  <input type="text" id="idnome" name="nome" placeholder="Nome">
  <input type="text" id="idcognome" name="cognnome" placeholder="Cognome">
</form>
\`\`\`
<input type="text" id="idnome" name="nome" placeholder="Nome" style="border: 1px solid black;background:Gainsboro;"> <br /><br />
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">`,frontmatter:{},index:81,start:1641,end:1659,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:D3,meta:{slide:{raw:`
# Form

&lt;label&gt;

- L'elemento *label* specifica una label per diversi tipi di widget di un form
- Questo tag \xE8 molto importante in quanto gli screen-reader, per persone ipovedenti, leggono ad alta voce la label di un widget
- Per associare una label ad un widget, si usa l'attributo *for* che deve coincidere con l'attributo *id* del widget
  
\`\`\`html
<form>
  <label for="idnome">Nome: </label>
  <input type="text" id="idnome" name="nome" placeholder="Nome">
  <label for="idcognome">Cognome: </label>
  <input type="text" id="idcognome" name="cognnome" placeholder="Cognome">
</form>
\`\`\`
<label for="idnome">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nome:&nbsp;</label>
<input type="text" id="idnome" name="nome" placeholder="Nome" style="border: 1px solid black;background:Gainsboro;"> <br /><br />

<label for="idcognome">Cognome:&nbsp;</label>
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">

`,title:"Form",level:1,content:`# Form

&lt;label&gt;

- L'elemento *label* specifica una label per diversi tipi di widget di un form
- Questo tag \xE8 molto importante in quanto gli screen-reader, per persone ipovedenti, leggono ad alta voce la label di un widget
- Per associare una label ad un widget, si usa l'attributo *for* che deve coincidere con l'attributo *id* del widget
  
\`\`\`html
<form>
  <label for="idnome">Nome: </label>
  <input type="text" id="idnome" name="nome" placeholder="Nome">
  <label for="idcognome">Cognome: </label>
  <input type="text" id="idcognome" name="cognnome" placeholder="Cognome">
</form>
\`\`\`
<label for="idnome">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nome:&nbsp;</label>
<input type="text" id="idnome" name="nome" placeholder="Nome" style="border: 1px solid black;background:Gainsboro;"> <br /><br />

<label for="idcognome">Cognome:&nbsp;</label>
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">`,frontmatter:{},index:82,start:1660,end:1684,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:Y3,meta:{slide:{raw:`
# Form

&lt;input&gt;

- Come detto l'elemento *input* pu\xF2 assumere forme diverse in funzione dell'attributo *type*
- I vari tipi di *input* sono:

<br />
<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
\`\`\`

</div>

<div>

\`\`\`html
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
\`\`\`

</div>
</div>

`,title:"Form",level:1,content:`# Form

&lt;input&gt;

- Come detto l'elemento *input* pu\xF2 assumere forme diverse in funzione dell'attributo *type*
- I vari tipi di *input* sono:

<br />
<div grid="~ cols-2 gap-4">
<div>

\`\`\`html
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
\`\`\`

</div>

<div>

\`\`\`html
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
\`\`\`

</div>
</div>`,frontmatter:{},index:83,start:1685,end:1733,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:i5,meta:{slide:{raw:`
# Form

&lt;input&gt;

### button
\`\`\`html
<form>
  <label for="idbutton">Premi il pulsante: </label>
  <input type="button" id="idbutton" value="Cliccami!!">
</form>
\`\`\`
<label for="idbutton">Premi il pulsante: </label>
<input type="button" id="idbutton" onclick="alert('Magie di JavaScript!! :)')" value="Cliccami!!">

\`\`\`html
<form>
  <label for="idpulsante">Premi il pulsante: </label>
  <button type="button" id="idpulsante">Click Me!</button>
</form>
\`\`\`
<label for="idpulsante">Premi il pulsante: </label>
<button type="button" style="border: 1px solid red;">Click Me!</button>

`,title:"Form",level:1,content:`# Form

&lt;input&gt;

### button
\`\`\`html
<form>
  <label for="idbutton">Premi il pulsante: </label>
  <input type="button" id="idbutton" value="Cliccami!!">
</form>
\`\`\`
<label for="idbutton">Premi il pulsante: </label>
<input type="button" id="idbutton" onclick="alert('Magie di JavaScript!! :)')" value="Cliccami!!">

\`\`\`html
<form>
  <label for="idpulsante">Premi il pulsante: </label>
  <button type="button" id="idpulsante">Click Me!</button>
</form>
\`\`\`
<label for="idpulsante">Premi il pulsante: </label>
<button type="button" style="border: 1px solid red;">Click Me!</button>`,frontmatter:{},index:84,start:1734,end:1759,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:x5,meta:{slide:{raw:`
# Form

&lt;input&gt;

### radio
\`\`\`html
<h3>Occupazione:</h3><br>
<form>
  <input type="radio" id="studente" name="occupazione" value="studente">
  <label for="studente">  Studente</label><br>
  <input type="radio" id="occupato" name="occupazione" value="occupato">
  <label for="occupato">  Occupato</label><br>
  <input type="radio" id="disoccupato" name="occupazione" value="disoccupato">
  <label for="disoccupato">  Disoccupato</label><br><br>
</form>
\`\`\`
<br />
<h3>Occupazione:</h3><br>
<input type="radio" id="studente" name="occupazione" value="studente">
<label for="studente">  Studente</label><br>
<input type="radio" id="occupato" name="occupazione" value="occupato">
<label for="occupato">  Occupato</label><br>
<input type="radio" id="disoccupato" name="occupazione" value="disoccupato">
<label for="disoccupato">  Disoccupato</label><br><br>
`,title:"Form",level:1,content:`# Form

&lt;input&gt;

### radio
\`\`\`html
<h3>Occupazione:</h3><br>
<form>
  <input type="radio" id="studente" name="occupazione" value="studente">
  <label for="studente">  Studente</label><br>
  <input type="radio" id="occupato" name="occupazione" value="occupato">
  <label for="occupato">  Occupato</label><br>
  <input type="radio" id="disoccupato" name="occupazione" value="disoccupato">
  <label for="disoccupato">  Disoccupato</label><br><br>
</form>
\`\`\`
<br />
<h3>Occupazione:</h3><br>
<input type="radio" id="studente" name="occupazione" value="studente">
<label for="studente">  Studente</label><br>
<input type="radio" id="occupato" name="occupazione" value="occupato">
<label for="occupato">  Occupato</label><br>
<input type="radio" id="disoccupato" name="occupazione" value="disoccupato">
<label for="disoccupato">  Disoccupato</label><br><br>`,frontmatter:{},index:85,start:1760,end:1786,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:D5,meta:{slide:{raw:`
# Form

&lt;input&gt;

### checkbox
\`\`\`html
<h3>Sport</h3><br>
<form>
  <input type="checkbox" id="tennis" name="sport" value="tennis">
  <label for="tennis">  Tennis</label><br>
  <input type="checkbox" id="calcio" name="sport" value="calcio">
  <label for="calcio">  Calcio</label><br>
  <input type="checkbox" id="nuoto" name="sport" value="nuoto">
  <label for="nuoto"> Nuoto</label><br><br>
</form>
\`\`\`
<br />
<h3>Sport</h3><br>
<input type="checkbox" id="tennis" name="sport" value="tennis">
<label for="tennis">  Tennis</label><br>
<input type="checkbox" id="calcio" name="sport" value="calcio">
<label for="calcio">  Calcio</label><br>
<input type="checkbox" id="nuoto" name="sport" value="nuoto">
<label for="nuoto"> Nuoto</label><br><br>
`,title:"Form",level:1,content:`# Form

&lt;input&gt;

### checkbox
\`\`\`html
<h3>Sport</h3><br>
<form>
  <input type="checkbox" id="tennis" name="sport" value="tennis">
  <label for="tennis">  Tennis</label><br>
  <input type="checkbox" id="calcio" name="sport" value="calcio">
  <label for="calcio">  Calcio</label><br>
  <input type="checkbox" id="nuoto" name="sport" value="nuoto">
  <label for="nuoto"> Nuoto</label><br><br>
</form>
\`\`\`
<br />
<h3>Sport</h3><br>
<input type="checkbox" id="tennis" name="sport" value="tennis">
<label for="tennis">  Tennis</label><br>
<input type="checkbox" id="calcio" name="sport" value="calcio">
<label for="calcio">  Calcio</label><br>
<input type="checkbox" id="nuoto" name="sport" value="nuoto">
<label for="nuoto"> Nuoto</label><br><br>`,frontmatter:{},index:86,start:1787,end:1813,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:X5,meta:{slide:{raw:`
# Form

&lt;input&gt;

### date
\`\`\`html
<h3>Data di Nascita</h3><br>
<form>
  <input type="date" id="iddata" name="birthday"><br><br>
</form>
\`\`\`
<br />
<h3>Data di Nascita</h3><br>
<input type="date" id="iddata" name="birthday"><br><br>
`,title:"Form",level:1,content:`# Form

&lt;input&gt;

### date
\`\`\`html
<h3>Data di Nascita</h3><br>
<form>
  <input type="date" id="iddata" name="birthday"><br><br>
</form>
\`\`\`
<br />
<h3>Data di Nascita</h3><br>
<input type="date" id="iddata" name="birthday"><br><br>`,frontmatter:{},index:87,start:1814,end:1830,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:oE,meta:{slide:{raw:`
# Esercizio html_11

Form

1. Creare un file con nome *|cognome|_esercizio_html_11.html*
2. Creare 1 form per la raccolta di dati in uno scenario scelto dallo studente
3. Fornire il link github al file con nome |cognome|_esercizio_html_11.html


Il form deve contenere i seguenti widgets:
<div grid="~ cols-2 gap-4">
<div>

- almeno 2 widget di testo
- almeno 1 bottone
- almeno 3 scelte mutuamente esclusive tramite radio
- almeeno 5 scelte multiple tramite checkbox
- almeno 1 campo data
- ogni widget deve essere dotato della propria label
</div>

</div>


`,title:"Esercizio html_11",level:1,content:`# Esercizio html_11

Form

1. Creare un file con nome *|cognome|_esercizio_html_11.html*
2. Creare 1 form per la raccolta di dati in uno scenario scelto dallo studente
3. Fornire il link github al file con nome |cognome|_esercizio_html_11.html


Il form deve contenere i seguenti widgets:
<div grid="~ cols-2 gap-4">
<div>

- almeno 2 widget di testo
- almeno 1 bottone
- almeno 3 scelte mutuamente esclusive tramite radio
- almeeno 5 scelte multiple tramite checkbox
- almeno 1 campo data
- ogni widget deve essere dotato della propria label
</div>

</div>`,frontmatter:{},index:88,start:1831,end:1857,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:hE,meta:{slide:{raw:`
# Form

&lt;input&gt;

### number
\`\`\`html
<h3>Altezza</h3><br>
<form>
  <input type="number" id="altezza" name="altezza" min="150" max="200"><br><br>
</form>
\`\`\`
<br />
<h3>Altezza</h3><br>
<input type="number" id="altezza" name="altezza" min="150" max="200" style="border: 1px solid black;"><br><br>
`,title:"Form",level:1,content:`# Form

&lt;input&gt;

### number
\`\`\`html
<h3>Altezza</h3><br>
<form>
  <input type="number" id="altezza" name="altezza" min="150" max="200"><br><br>
</form>
\`\`\`
<br />
<h3>Altezza</h3><br>
<input type="number" id="altezza" name="altezza" min="150" max="200" style="border: 1px solid black;"><br><br>`,frontmatter:{},index:89,start:1858,end:1874,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:ME,meta:{slide:{raw:`
# Form

&lt;input&gt;

### color
\`\`\`html
<h3>Colore preferito</h3><br>
<form>
   <input type="color" id="favcolor" name="favcolor" value="#ff0000"><br><br>
</form>
\`\`\`
<br />
<h3>Colore preferito</h3><br>
 <input type="color" id="favcolor" name="favcolor" value="#ff0000" onchange="alert(\`Hai selezionato il colore: \${event.target.value}\`)"><br><br>
`,title:"Form",level:1,content:`# Form

&lt;input&gt;

### color
\`\`\`html
<h3>Colore preferito</h3><br>
<form>
   <input type="color" id="favcolor" name="favcolor" value="#ff0000"><br><br>
</form>
\`\`\`
<br />
<h3>Colore preferito</h3><br>
 <input type="color" id="favcolor" name="favcolor" value="#ff0000" onchange="alert(\`Hai selezionato il colore: \${event.target.value}\`)"><br><br>`,frontmatter:{},index:90,start:1875,end:1891,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:PE,meta:{slide:{raw:`
# Form

&lt;input&gt;

\`\`\`html
<form>
  <label for="peso">Peso: </label>
  <input type="range" min="50" max="100" value="60" class="slider" id="peso"><br> 
</form>
\`\`\`
<br />
<label for="peso">Peso: </label>
<input type="range" min="50" max="100" value="60" class="slider" id="peso"><br>
`,title:"Form",level:1,content:`# Form

&lt;input&gt;

\`\`\`html
<form>
  <label for="peso">Peso: </label>
  <input type="range" min="50" max="100" value="60" class="slider" id="peso"><br> 
</form>
\`\`\`
<br />
<label for="peso">Peso: </label>
<input type="range" min="50" max="100" value="60" class="slider" id="peso"><br>`,frontmatter:{},index:91,start:1892,end:1907,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:BE,meta:{slide:{raw:`
# Form

&lt;select&gt;

\`\`\`html
<form>
<label for="cars">Genere:  </label>
  <select name="genere" id="cars">
      <option value="maschio">Maschio</option>
      <option value="femmina">Femmina</option>
  </select>
</form>
\`\`\`
<br />
<label for="cars">Genere:  </label>
<select name="genere" id="cars">
    <option value="maschio">Maschio</option>
    <option value="femmina">Femmina</option>
</select><br><br>
`,title:"Form",level:1,content:`# Form

&lt;select&gt;

\`\`\`html
<form>
<label for="cars">Genere:  </label>
  <select name="genere" id="cars">
      <option value="maschio">Maschio</option>
      <option value="femmina">Femmina</option>
  </select>
</form>
\`\`\`
<br />
<label for="cars">Genere:  </label>
<select name="genere" id="cars">
    <option value="maschio">Maschio</option>
    <option value="femmina">Femmina</option>
</select><br><br>`,frontmatter:{},index:92,start:1908,end:1929,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:QE,meta:{slide:{raw:`
# Form

&lt;textarea&gt;

\`\`\`html
<form>
  <label for="bio">Biografia:</label>
  <textarea id="bio" name="bio" rows="4" cols="50" placeholder="Inserisci la tua biografia"></textarea>    
</form>
\`\`\`

<label for="bio">Biografia:</label>
<textarea id="bio" name="bio" rows="4" cols="50" placeholder="Inserisci la tua biografia" style="border: 1px solid black;"></textarea>
      `,title:"Form",level:1,content:`# Form

&lt;textarea&gt;

\`\`\`html
<form>
  <label for="bio">Biografia:</label>
  <textarea id="bio" name="bio" rows="4" cols="50" placeholder="Inserisci la tua biografia"></textarea>    
</form>
\`\`\`

<label for="bio">Biografia:</label>
<textarea id="bio" name="bio" rows="4" cols="50" placeholder="Inserisci la tua biografia" style="border: 1px solid black;"></textarea>`,frontmatter:{},index:93,start:1930,end:1945,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:eI,meta:{slide:{raw:`
# Esercizio html_12

Form

1. Modificare il file *|cognome|_esercizio_html_11.html* e salvarlo come *|cognome|_esercizio_html_12.html*
2. Modificare il form (vedi dettagli sotto)
3. Fornire il link github al file con nome |cognome|_esercizio_html_12.html


Il form deve contenere i seguenti widgets aggiuntivi:

- almeno 4 widget number con valore minimo e massimo
- almeno 1 widget color picker
- almeno 3 widget range con valore minimo e massimo
- almeeno 2 combo box o select con almeno 5 valori ciascuna
- almeno 1 campo text area con dimensione minima 6 righe e 60 colonne
- ogni widget deve essere dotato della propria label


`,title:"Esercizio html_12",level:1,content:`# Esercizio html_12

Form

1. Modificare il file *|cognome|_esercizio_html_11.html* e salvarlo come *|cognome|_esercizio_html_12.html*
2. Modificare il form (vedi dettagli sotto)
3. Fornire il link github al file con nome |cognome|_esercizio_html_12.html


Il form deve contenere i seguenti widgets aggiuntivi:

- almeno 4 widget number con valore minimo e massimo
- almeno 1 widget color picker
- almeno 3 widget range con valore minimo e massimo
- almeeno 2 combo box o select con almeno 5 valori ciascuna
- almeno 1 campo text area con dimensione minima 6 righe e 60 colonne
- ogni widget deve essere dotato della propria label`,frontmatter:{},index:94,start:1946,end:1967,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:rI,meta:{slide:{raw:`
# Form

&lt;datalist&gt;

<div grid="~ cols-2 gap-8">
<div>

\`\`\`html
<form>
  <label for="nazioni">Nazionalit\xE0: </label><br>
  <input list="nations" name="nazioni" id="nazioni">
  <datalist id="nations">
      <option value="Albanese">
      <option value="Argentina">
      <option value="Belga">
      <option value="Biellorussa">
      <option value="Italiana">
      <option value="Irlandese">
      <option value="Israeliana">
  </datalist>
</form>
\`\`\`
</div>
<div>

![html5_8.jpg](/media/html5_8.jpg)
</div>
</div>
`,title:"Form",level:1,content:`# Form

&lt;datalist&gt;

<div grid="~ cols-2 gap-8">
<div>

\`\`\`html
<form>
  <label for="nazioni">Nazionalit\xE0: </label><br>
  <input list="nations" name="nazioni" id="nazioni">
  <datalist id="nations">
      <option value="Albanese">
      <option value="Argentina">
      <option value="Belga">
      <option value="Biellorussa">
      <option value="Italiana">
      <option value="Irlandese">
      <option value="Israeliana">
  </datalist>
</form>
\`\`\`
</div>
<div>

![html5_8.jpg](/media/html5_8.jpg)
</div>
</div>`,frontmatter:{},index:95,start:1968,end:1998,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:fI,meta:{slide:{raw:`
# Form

&lt;fieldset&gt;

<div grid="~ cols-2 gap-8">
<div>

\`\`\`html
<form>
  <fieldset>
  <legend>Dati Personali</legend>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">

  <label for="cognome">Cognome:</label>
  <input type="text" id="cognome" name="cognome">

  <label for="genere">Genere:</label>
  <select name="genere" id="cars">
      <option value="maschio">Maschio</option>
      <option value="femmina">Femmina</option>
  </select><br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <input type="submit" value="Invia">
</fieldset>      
</form>
\`\`\`
</div>
<div>

<fieldset style="border: 1px solid black;">
<legend>Dati Personali</legend>
<br /><label for="nome">Nome: </label>
<input type="text" id="nome" name="nome" style="border: 1px solid black;"><br /><br />
<label for="cognome">Cognome: </label>
<input type="text" id="cognome" name="cognome" style="border: 1px solid black;"><br /><br />
<label for="genere">Genere: </label>
<select name="genere" id="cars">
    <option value="maschio">Maschio</option>
    <option value="femmina">Femmina</option>
</select><br /><br />
<label for="email">Email: </label>
<input type="email" id="email" name="email" style="border: 1px solid black;"><br /><br />
<input type="submit" value="Invia" style="border: 1px solid black;"> <br /><br />
</fieldset>      
</div>
</div>
`,title:"Form",level:1,content:`# Form

&lt;fieldset&gt;

<div grid="~ cols-2 gap-8">
<div>

\`\`\`html
<form>
  <fieldset>
  <legend>Dati Personali</legend>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">

  <label for="cognome">Cognome:</label>
  <input type="text" id="cognome" name="cognome">

  <label for="genere">Genere:</label>
  <select name="genere" id="cars">
      <option value="maschio">Maschio</option>
      <option value="femmina">Femmina</option>
  </select><br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <input type="submit" value="Invia">
</fieldset>      
</form>
\`\`\`
</div>
<div>

<fieldset style="border: 1px solid black;">
<legend>Dati Personali</legend>
<br /><label for="nome">Nome: </label>
<input type="text" id="nome" name="nome" style="border: 1px solid black;"><br /><br />
<label for="cognome">Cognome: </label>
<input type="text" id="cognome" name="cognome" style="border: 1px solid black;"><br /><br />
<label for="genere">Genere: </label>
<select name="genere" id="cars">
    <option value="maschio">Maschio</option>
    <option value="femmina">Femmina</option>
</select><br /><br />
<label for="email">Email: </label>
<input type="email" id="email" name="email" style="border: 1px solid black;"><br /><br />
<input type="submit" value="Invia" style="border: 1px solid black;"> <br /><br />
</fieldset>      
</div>
</div>`,frontmatter:{},index:96,start:1999,end:2050,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:bI,meta:{slide:{raw:`
# Esercizio html_13

Form

1. Creare un file con nome *|cognome|_esercizio_html_13.html*
2. Creare 1 form per la raccolta di dati personali
3. Fornire il link github al file con nome |cognome|_esercizio_html_13.html


Il form deve contenere i seguenti campi:
<div grid="~ cols-2 gap-4">
<div>

- Nome e Cognome
- Genere
- [Email](https://www.w3schools.com/tags/att_input_type_email.asp)
- [Password](https://www.w3schools.com/tags/att_input_type_password.asp) 
- Data di nascita
- Nazionalit\xE0
</div>
<div>

- Attivit\xE0 lavorativa
- Hobby
- Altezza
- Peso
- Colore preferito
- Note personali

</div>
</div>


`,title:"Esercizio html_13",level:1,content:`# Esercizio html_13

Form

1. Creare un file con nome *|cognome|_esercizio_html_13.html*
2. Creare 1 form per la raccolta di dati personali
3. Fornire il link github al file con nome |cognome|_esercizio_html_13.html


Il form deve contenere i seguenti campi:
<div grid="~ cols-2 gap-4">
<div>

- Nome e Cognome
- Genere
- [Email](https://www.w3schools.com/tags/att_input_type_email.asp)
- [Password](https://www.w3schools.com/tags/att_input_type_password.asp) 
- Data di nascita
- Nazionalit\xE0
</div>
<div>

- Attivit\xE0 lavorativa
- Hobby
- Altezza
- Peso
- Colore preferito
- Note personali

</div>
</div>`,frontmatter:{},index:97,start:2051,end:2086,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:$I,meta:{slide:{raw:`
# Form

Form lifecycle server-side

<img src="/media/html5_9.jpg" width="500" style="float:right;"/>


1. L'utente richiede la pagina web contenente il form [GET]
2. Il web server risponde con l'HTML della pagina e del form
3. L'utente compila il form e fa il *submit* inviando i dati al server [POST] 
4. Il server effettua una validazione dei dati ricevuti (OK | ERROR)
5. ERROR: viene inviato nuovamente il form ed eventuali messaggi di errore
6. OK: il web server processa i dati ed esegue le operazioni previste (DB)
7. Viene inviata la risposta finale al browser
`,title:"Form",level:1,content:`# Form

Form lifecycle server-side

<img src="/media/html5_9.jpg" width="500" style="float:right;"/>


1. L'utente richiede la pagina web contenente il form [GET]
2. Il web server risponde con l'HTML della pagina e del form
3. L'utente compila il form e fa il *submit* inviando i dati al server [POST] 
4. Il server effettua una validazione dei dati ricevuti (OK | ERROR)
5. ERROR: viene inviato nuovamente il form ed eventuali messaggi di errore
6. OK: il web server processa i dati ed esegue le operazioni previste (DB)
7. Viene inviata la risposta finale al browser`,frontmatter:{},index:98,start:2087,end:2103,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:II,meta:{slide:{raw:`
# Form

Form lifecycle

- Il ciclo di vita di gestione dei form appena visto, \xE8 quello classico
- Come si vede questo \xE8 molto inefficente siccome richiede sempre una comunicazione tra client e server
- Questo introduce latenze indesiderate e carico sul server
- Il motivo principale \xE8 che HTML non essendo un linguaggio di programmazione non ha modo di fare una validazione del form prima dell'invio
- Per ovviare a queste problematiche, normalmente si effettua la validazione del form in JavaScript, quindi direttamente nel browser riducendo cos\xEC il numero di messaggi con il server
`,title:"Form",level:1,content:`# Form

Form lifecycle

- Il ciclo di vita di gestione dei form appena visto, \xE8 quello classico
- Come si vede questo \xE8 molto inefficente siccome richiede sempre una comunicazione tra client e server
- Questo introduce latenze indesiderate e carico sul server
- Il motivo principale \xE8 che HTML non essendo un linguaggio di programmazione non ha modo di fare una validazione del form prima dell'invio
- Per ovviare a queste problematiche, normalmente si effettua la validazione del form in JavaScript, quindi direttamente nel browser riducendo cos\xEC il numero di messaggi con il server`,frontmatter:{},index:99,start:2104,end:2115,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:HI,meta:{slide:{raw:`
# Form

Form lifecycle client-side

<img src="/media/html5_10.jpg" width="400" style="float:right;"/>


1. L'utente richiede la pagina web contenente il form [GET]
2. Il web server risponde con l'HTML della pagina e del form
3. L'utente compila il form e fa il *submit* inviando i dati al server [POST] 
4. Il browser effettua una validazione dei dati ricevuti (OK | ERROR)
5. ERROR: viene visualizzato nuovamente il form ed eventuali messaggi di errore
6. OK: il web server processa i dati ed esegue le operazioni previste (DB)
7. Viene inviata la risposta finale al browser
`,title:"Form",level:1,content:`# Form

Form lifecycle client-side

<img src="/media/html5_10.jpg" width="400" style="float:right;"/>


1. L'utente richiede la pagina web contenente il form [GET]
2. Il web server risponde con l'HTML della pagina e del form
3. L'utente compila il form e fa il *submit* inviando i dati al server [POST] 
4. Il browser effettua una validazione dei dati ricevuti (OK | ERROR)
5. ERROR: viene visualizzato nuovamente il form ed eventuali messaggi di errore
6. OK: il web server processa i dati ed esegue le operazioni previste (DB)
7. Viene inviata la risposta finale al browser`,frontmatter:{},index:100,start:2116,end:2132,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:BI,meta:{slide:{raw:`
# Esercizio html_14

Form validation server-side

- In questo esercizio/esercitazione si vuole comprendere a fondo il meccanismo di validazione dei form server-side

Per fare ci\xF2 abbiamo bisonog di due componenti fondamentali:
1. Una pagina HTML contenente un form
2. Un web server che implementa la logica di validazione

Per questa esercitazione il form e il web server sono forniti
1. Scaricare il seguente pacchetto:[esercizio_html_14.tgz](https://profmancusoa.github.io/TPSI/support/esercizio_html_14.tgz)
2. Installare i pacchetti necessari con \`npm install\`
4. Lanciare il web server con \`node form_server.js\`
5. Aprire la pagina fornita dal server locale sulla posta 8080


`,title:"Esercizio html_14",level:1,content:`# Esercizio html_14

Form validation server-side

- In questo esercizio/esercitazione si vuole comprendere a fondo il meccanismo di validazione dei form server-side

Per fare ci\xF2 abbiamo bisonog di due componenti fondamentali:
1. Una pagina HTML contenente un form
2. Un web server che implementa la logica di validazione

Per questa esercitazione il form e il web server sono forniti
1. Scaricare il seguente pacchetto:[esercizio_html_14.tgz](https://profmancusoa.github.io/TPSI/support/esercizio_html_14.tgz)
2. Installare i pacchetti necessari con \`npm install\`
4. Lanciare il web server con \`node form_server.js\`
5. Aprire la pagina fornita dal server locale sulla posta 8080`,frontmatter:{},index:101,start:2133,end:2152,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:QI,meta:{slide:{raw:`
# Esercizio html_14


&nbsp;

Si richiede di:
1. Verificare il funzionamento del form e della validazione dei campi
2. Analizzaere il codice del form e del server in JavaScript
3. Modificare il form in modo che l'et\xE0 venga fornita come un \`\`\`range\`\`\`
4. Modificare il form in modo che sia presente anche il campo \`Cognome\`
5. Modificare il codice del server in modo che sia presente **anche** la validazione dell'et\xE0, in modo che siano accettati solo valori compresi tra 19 e 31
6. Fornire il link github alla directory con nome |cognome|_esercizio_html_14 contenente i file aggiornati *form.html* e *form_server.js*
7. \`\`\`NON deve essere presente nel repository la directory **node_modules**\`\`\`


`,title:"Esercizio html_14",level:1,content:"# Esercizio html_14\n\n\n&nbsp;\n\nSi richiede di:\n1. Verificare il funzionamento del form e della validazione dei campi\n2. Analizzaere il codice del form e del server in JavaScript\n3. Modificare il form in modo che l'et\xE0 venga fornita come un ```range```\n4. Modificare il form in modo che sia presente anche il campo `Cognome`\n5. Modificare il codice del server in modo che sia presente **anche** la validazione dell'et\xE0, in modo che siano accettati solo valori compresi tra 19 e 31\n6. Fornire il link github alla directory con nome |cognome|_esercizio_html_14 contenente i file aggiornati *form.html* e *form_server.js*\n7. ```NON deve essere presente nel repository la directory **node_modules**```",frontmatter:{},index:102,start:2153,end:2170,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:XI,meta:{slide:{raw:`
# HTML linter

Verifica errori

- Il \`linter\` \xE8 uno strumento che analizza il codice sorgente per contrassegnare errori di sintassi, di programmazione, bug, errori stilistici e costrutti sospetti. 
- Il termine deriva dall'[omonimo strumento Unix](https://it.wikipedia.org/wiki/Lint_(software)) che esamina il codice sorgente del linguaggio C
- Pertanto il linter HTML \xE8 uno strumento che ci fornisce utili informazioni sulla pagina HTML in esame:
  - errori di sintassi HTML
  - uso di tag obsoleti
  - uso errato di tag
  - uso errato di attributi
  - mancata chiusura di tag
  - ...


- Il lineter \xE8 uno strumento fondamentale per lo sviluppatore.
`,title:"HTML linter",level:1,content:`# HTML linter

Verifica errori

- Il \`linter\` \xE8 uno strumento che analizza il codice sorgente per contrassegnare errori di sintassi, di programmazione, bug, errori stilistici e costrutti sospetti. 
- Il termine deriva dall'[omonimo strumento Unix](https://it.wikipedia.org/wiki/Lint_(software)) che esamina il codice sorgente del linguaggio C
- Pertanto il linter HTML \xE8 uno strumento che ci fornisce utili informazioni sulla pagina HTML in esame:
  - errori di sintassi HTML
  - uso di tag obsoleti
  - uso errato di tag
  - uso errato di attributi
  - mancata chiusura di tag
  - ...


- Il lineter \xE8 uno strumento fondamentale per lo sviluppatore.`,frontmatter:{},index:103,start:2171,end:2189,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:i6,meta:{slide:{raw:`
# HTML linter

W3C Markup Validation Service

- Il W3C mette a disposizione un servizio online di validazione (lint) di pagine o siti HTML
- Il servizio \xE8 disponibile qui: [https://validator.w3.org/](https://validator.w3.org/)

<br>
<img src="/media/html5_12.png" />
`,title:"HTML linter",level:1,content:`# HTML linter

W3C Markup Validation Service

- Il W3C mette a disposizione un servizio online di validazione (lint) di pagine o siti HTML
- Il servizio \xE8 disponibile qui: [https://validator.w3.org/](https://validator.w3.org/)

<br>
<img src="/media/html5_12.png" />`,frontmatter:{},index:104,start:2190,end:2201,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:f6,meta:{slide:{raw:`
# HTML linter

W3C Markup Validation Service

Il servizio opera in 3 modalit\xE0:

1. **Validate by URI**: inserendo un URL valida (https://ats.agnelli.it) effettua la validazione del sito
2. **Validate by File Upload**: caricando un file .html effettua la validazione della pagina
3. **Validate by Direct Input**: inserendo il codice HTML manualmente, ne effettua la validazione

<br>
<img src="/media/html5_13.png" />
`,title:"HTML linter",level:1,content:`# HTML linter

W3C Markup Validation Service

Il servizio opera in 3 modalit\xE0:

1. **Validate by URI**: inserendo un URL valida (https://ats.agnelli.it) effettua la validazione del sito
2. **Validate by File Upload**: caricando un file .html effettua la validazione della pagina
3. **Validate by Direct Input**: inserendo il codice HTML manualmente, ne effettua la validazione

<br>
<img src="/media/html5_13.png" />`,frontmatter:{},index:105,start:2202,end:2216,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:y6,meta:{slide:{raw:`
# HTML linter

W3C Markup Validation Service

<br>
<img src="/media/html5_14.png" />

- Il sito viene analizzato e viene generato un report
  - **Error**: segnala errori sintattici indicando la linea dove occorre
  - **Warning**: evidenzia potenziali problemi ma non necessariamente errori sintattici

`,title:"HTML linter",level:1,content:`# HTML linter

W3C Markup Validation Service

<br>
<img src="/media/html5_14.png" />

- Il sito viene analizzato e viene generato un report
  - **Error**: segnala errori sintattici indicando la linea dove occorre
  - **Warning**: evidenzia potenziali problemi ma non necessariamente errori sintattici`,frontmatter:{},index:106,start:2217,end:2230,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:$6,meta:{slide:{raw:`
# Esercizio html_15

HTML lint

Mediante il servizio di validazione HTML del W3C si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente


`,title:"Esercizio html_15",level:1,content:`# Esercizio html_15

HTML lint

Mediante il servizio di validazione HTML del W3C si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente`,frontmatter:{},index:107,start:2231,end:2242,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:O6,meta:{slide:{raw:`
# HTML linter

Command Line Linter

- Chiaramente per quanto valido sia il linter del W3C, risulta di difficile applicazione nel processo di sviluppo
- Caricare ad ogni modifica la propria pagina risulta particolarmente scomodo e time consuming
- Per tale motivo esistono svariati tipi di linter HTML che operano da linea di comando
- Questi strumenti sono molto versatili e possono essere integrati in pipeline automatiche (github)
- Un linter valido \xE8 \`node-w3c-validator\` scirtto in JavaScript che implementa un wrapper al servizio W3C

<br>
<img src="/media/html5_15.png" width="500" />

`,title:"HTML linter",level:1,content:`# HTML linter

Command Line Linter

- Chiaramente per quanto valido sia il linter del W3C, risulta di difficile applicazione nel processo di sviluppo
- Caricare ad ogni modifica la propria pagina risulta particolarmente scomodo e time consuming
- Per tale motivo esistono svariati tipi di linter HTML che operano da linea di comando
- Questi strumenti sono molto versatili e possono essere integrati in pipeline automatiche (github)
- Un linter valido \xE8 \`node-w3c-validator\` scirtto in JavaScript che implementa un wrapper al servizio W3C

<br>
<img src="/media/html5_15.png" width="500" />`,frontmatter:{},index:108,start:2243,end:2258,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:W6,meta:{slide:{raw:`
# HTML linter

Command Line Linter

- Per installare il linter basta eseguire


\`\`\`js
npm i -g node-w3c-validator
\`\`\`

<br>
<img src="/media/html5_16.png" width="700" />
 `,title:"HTML linter",level:1,content:`# HTML linter

Command Line Linter

- Per installare il linter basta eseguire


\`\`\`js
npm i -g node-w3c-validator
\`\`\`

<br>
<img src="/media/html5_16.png" width="700" />`,frontmatter:{},index:109,start:2259,end:2274,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:V6,meta:{slide:{raw:`
# HTML linter

Command Line Linter

I parametri pi\xF9 importanti sono
- \`-i\`: specifica il file HTML da validare
- \`-f\`: specifica il formate del report generato
  - **txt**: genera un report puramente testuale
  - **lint**: genera un report in formato lint con informazioni addizionali
  - **html**: genera un report in formato HTML esattamente come quello generato dal servizio W3C

`,title:"HTML linter",level:1,content:`# HTML linter

Command Line Linter

I parametri pi\xF9 importanti sono
- \`-i\`: specifica il file HTML da validare
- \`-f\`: specifica il formate del report generato
  - **txt**: genera un report puramente testuale
  - **lint**: genera un report in formato lint con informazioni addizionali
  - **html**: genera un report in formato HTML esattamente come quello generato dal servizio W3C`,frontmatter:{},index:110,start:2275,end:2288,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:n4,meta:{slide:{raw:`
# HTML linter

Command Line Linter

- Per fare il lint di un file HTML e generare un report testuale basta eseguire il seguente comando

\`\`\`js
node-w3c-validator -i /path/to/file.html -f txt
\`\`\`

<br>
<img src="/media/html5_17.png" />
 `,title:"HTML linter",level:1,content:`# HTML linter

Command Line Linter

- Per fare il lint di un file HTML e generare un report testuale basta eseguire il seguente comando

\`\`\`js
node-w3c-validator -i /path/to/file.html -f txt
\`\`\`

<br>
<img src="/media/html5_17.png" />`,frontmatter:{},index:111,start:2289,end:2303,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:r4,meta:{slide:{raw:`
# HTML linter

Command Line Linter

- Per fare il lint di un file HTML e generare un report in formato lint basta eseguire il seguente comando

\`\`\`js
node-w3c-validator -i /path/to/file.html -f lint
\`\`\`

<br>
<img src="/media/html5_18.png" width="650"/>

`,title:"HTML linter",level:1,content:`# HTML linter

Command Line Linter

- Per fare il lint di un file HTML e generare un report in formato lint basta eseguire il seguente comando

\`\`\`js
node-w3c-validator -i /path/to/file.html -f lint
\`\`\`

<br>
<img src="/media/html5_18.png" width="650"/>`,frontmatter:{},index:112,start:2304,end:2319,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:h4,meta:{slide:{raw:`
# HTML linter

Command Line Linter

- Per fare il lint di un file HTML e generare un report in formato html basta eseguire il seguente comando

\`\`\`js
node-w3c-validator -i /path/to/file.html -f html > report.html
\`\`\`

<br>
<img src="/media/html5_19.png" width="650"/>
`,title:"HTML linter",level:1,content:`# HTML linter

Command Line Linter

- Per fare il lint di un file HTML e generare un report in formato html basta eseguire il seguente comando

\`\`\`js
node-w3c-validator -i /path/to/file.html -f html > report.html
\`\`\`

<br>
<img src="/media/html5_19.png" width="650"/>`,frontmatter:{},index:113,start:2320,end:2334,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:y4,meta:{slide:{raw:`
# Esercizio html_16

HTML lint

Mediante il linter da liena di comando si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente
3. Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato txt
4. Consegnare su github il file |cognome|_esercizio_html_16.txt
5. Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato lint
6. Consegnare su github il file |cognome|_esercizio_html_16.lint
7. Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato html
8. Consegnare su github il file |cognome|_esercizio_html_16.html


`,title:"Esercizio html_16",level:1,content:`# Esercizio html_16

HTML lint

Mediante il linter da liena di comando si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente
3. Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato txt
4. Consegnare su github il file |cognome|_esercizio_html_16.txt
5. Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato lint
6. Consegnare su github il file |cognome|_esercizio_html_16.lint
7. Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato html
8. Consegnare su github il file |cognome|_esercizio_html_16.html`,frontmatter:{},index:114,start:2335,end:2352,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:$4,meta:{slide:{raw:`
# Esercizio html_17

HTML lint

Mediante il linter da liena di comando si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente
3. Correggere gli errori ed i warning
4. Consegnare su github il file |cognome|_esercizio_html_17_glossario_corretto.html


`,title:"Esercizio html_17",level:1,content:`# Esercizio html_17

HTML lint

Mediante il linter da liena di comando si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente
3. Correggere gli errori ed i warning
4. Consegnare su github il file |cognome|_esercizio_html_17_glossario_corretto.html`,frontmatter:{},index:115,start:2353,end:2366,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:I4,meta:{slide:{raw:`
&nbsp;
<center>
<img src="/media/html5_11.jpg" width="800" />
</center>
`,content:`&nbsp;
<center>
<img src="/media/html5_11.jpg" width="800" />
</center>`,frontmatter:{},index:116,start:2367,end:2373,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",component:rb,meta:{layout:"end"}}],jn=S4,A4=[{name:"play",path:"/",component:nb,children:[...jn]},{name:"print",path:"/print",component:ob},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>da(()=>import("./Presenter.8e6a23a1.js"),["assets/Presenter.8e6a23a1.js","assets/Presenter.1ea605f8.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.eabd50f5.js"]),beforeEnter:e=>{if(!$t.remote||$t.remote===e.query.password)return!0;if($t.remote&&e.query.password===void 0){const t=prompt("Enter password");if($t.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],_e=q_({history:e_("/TPSI/4/html/"),routes:A4});function O4(e,t,{mode:s="replace"}={}){return P({get(){const o=_e.currentRoute.value.query[e];return o==null?t!=null?t:null:Array.isArray(o)?o.filter(Boolean):o},set(o){Gn(()=>{_e[z(s)]({query:{..._e.currentRoute.value.query,[e]:o}})})}})}const yp=Q(0);Gn(()=>{_e.afterEach(async()=>{await Gn(),yp.value+=1})});const Xe=P(()=>_e.currentRoute.value),al=P(()=>Xe.value.query.print!==void 0),C4=P(()=>Xe.value.query.print==="clicks"),Ke=P(()=>Xe.value.query.embedded!==void 0),We=P(()=>Xe.value.path.startsWith("/presenter")),Ha=P(()=>al.value&&!C4.value),ui=P(()=>Xe.value.query.password),P4=P(()=>!We.value&&(!xn.remote||ui.value===xn.remote)),nc=O4("clicks","0"),wp=P(()=>jn.length-1),H4=P(()=>Xe.value.path),Bn=P(()=>parseInt(H4.value.split(/\//g).slice(-1)[0])||1);P(()=>ao(Bn.value));const me=P(()=>jn.find(e=>e.path===`${Bn.value}`));P(()=>{var e,t,s;return(s=(t=(e=me.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:s.id});P(()=>{var e,t;return(t=(e=me.value)==null?void 0:e.meta)==null?void 0:t.layout});const zo=P(()=>jn.find(e=>e.path===`${Math.min(jn.length,Bn.value+1)}`)),R4=P(()=>{var e,t;return yp.value,((t=(e=me.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Oe=P({get(){if(Ha.value)return 99999;let e=+(nc.value||0);return isNaN(e)&&(e=0),e},set(e){nc.value=e.toString()}}),Hs=P(()=>{var e,t,s;return+((s=(t=(e=me.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?s:R4.value.length)}),F4=P(()=>Bn.value<jn.length-1||Oe.value<Hs.value),N4=P(()=>Bn.value>1||Oe.value>0),q4=P(()=>jn.filter(e=>{var t,s;return(s=(t=e.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((e,t)=>(sl(e,t),e),[])),W4=P(()=>ol(q4.value,me.value));P(()=>il(W4.value));function pt(){Hs.value<=Oe.value?Za():Oe.value+=1}async function dt(){Oe.value<=0?await Ja():Oe.value-=1}function ao(e){return We.value?`/presenter/${e}`:`/${e}`}function Za(){const e=Math.min(jn.length,Bn.value+1);return ra(e)}async function Ja(e=!0){const t=Math.max(1,Bn.value-1);await ra(t),e&&Hs.value&&_e.replace({query:{...Xe.value.query,clicks:Hs.value}})}function ra(e,t){return _e.push({path:ao(e),query:{...Xe.value.query,clicks:t}})}function D4(e){const t=Q(0),{direction:s,distanceX:o,distanceY:i}=$h(e,{onSwipeStart(l){l.pointerType==="touch"&&(Ga.value||(t.value=Jo()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||Ga.value)return;const r=Math.abs(o.value),c=Math.abs(i.value);r/window.innerWidth>.3||r>100?s.value===Ye.LEFT?pt():dt():(c/window.innerHeight>.4||c>200)&&(s.value===Ye.DOWN?Ja():Za())}})}async function pi(){const{saveAs:e}=await da(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(Hu(xn.download)?xn.download:xn.exportFilename?`${xn.exportFilename}.pdf`:"/TPSI/4/html/slidev-exported.pdf",`${xn.title}.pdf`)}async function j4(e){var t,s;if(e==null){const o=(s=(t=me.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function sl(e,t,s=1){var i,l,r,c,u;const o=(l=(i=t.meta)==null?void 0:i.slide)==null?void 0:l.level;o&&o>s&&e.length>0?sl(e[e.length-1].children,t,s+1):e.push({children:[],level:s,path:t.path,hideInToc:Boolean((r=t.meta)==null?void 0:r.hideInToc),title:(u=(c=t.meta)==null?void 0:c.slide)==null?void 0:u.title})}function ol(e,t,s=!1,o){return e.map(i=>{const l={...i,active:i.path===(t==null?void 0:t.path),hasActiveParent:s};return l.children.length>0&&(l.children=ol(l.children,t,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function il(e,t=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:il(s.children,t+1)}))}function B4(){const e=xn.titleTemplate.replace("%s",xn.title||"Slidev");Qf({title:e}),sg(`${e} - shared`),rg(`${e} - drawings`);function t(){We.value&&(sr("page",+Bn.value),sr("clicks",Oe.value))}_e.afterEach(t),fn(Oe,t),og(s=>{(+s.page!=+Bn.value||Oe.value!==s.clicks)&&_e.replace({path:ao(s.page),query:{..._e.currentRoute.value.query,clicks:s.clicks||0}})})}const U4=En({__name:"App",setup(e){return x($),B4(),(t,s)=>{const o=aa("RouterView"),i=aa("StarportCarrier");return k(),Z(Mn,null,[L(o),L(i)],64)}}});function xo(e){return e!==null&&typeof e=="object"}function di(e,t,s=".",o){if(!xo(t))return di(e,{},s,o);const i=Object.assign({},t);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const r=e[l];r!=null&&(o&&o(i,l,r,s)||(Array.isArray(r)&&Array.isArray(i[l])?i[l]=r.concat(i[l]):xo(r)&&xo(i[l])?i[l]=di(r,i[l],(s?`${s}.`:"")+l.toString(),o):i[l]=r))}return i}function V4(e){return(...t)=>t.reduce((s,o)=>di(s,o,"",e),{})}const K4=V4();var ec;const zp=typeof window<"u",G4=Object.prototype.toString,Q4=e=>typeof e=="number",Y4=e=>typeof e=="string",mi=e=>G4.call(e)==="[object Object]",Ot=()=>{};zp&&((ec=window==null?void 0:window.navigator)==null?void 0:ec.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function xp(e){return Si()?(Ai(e),!0):!1}function ll(e){Rt()&&Js(e)}function Z4(e,t,s){const o=fn(e,(...i)=>(Gn(()=>o()),t(...i)),s)}function Pt(e){var t;const s=z(e);return(t=s==null?void 0:s.$el)!=null?t:s}const Tp=zp?window:void 0;function J4(...e){let t,s,o,i;if(Y4(e[0])?([s,o,i]=e,t=Tp):[t,s,o,i]=e,!t)return Ot;let l=Ot;const r=fn(()=>Pt(t),u=>{l(),u&&(u.addEventListener(s,o,i),l=()=>{u.removeEventListener(s,o,i),l=Ot})},{immediate:!0,flush:"post"}),c=()=>{r(),l()};return xp(c),c}const fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gi="__vueuse_ssr_handlers__";fi[gi]=fi[gi]||{};fi[gi];function X4(e,t,s={}){const{root:o,rootMargin:i="0px",threshold:l=.1,window:r=Tp}=s,c=r&&"IntersectionObserver"in r;let u=Ot;const p=c?fn(()=>({el:Pt(e),root:Pt(o)}),({el:f,root:m})=>{if(u(),!f)return;const g=new IntersectionObserver(t,{root:m,rootMargin:i,threshold:l});g.observe(f),u=()=>{g.disconnect(),u=Ot}},{immediate:!0,flush:"post"}):Ot,d=()=>{u(),p()};return xp(d),{isSupported:c,stop:d}}var tc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(tc||(tc={}));const $p=1/60*1e3,nS=typeof performance<"u"?()=>performance.now():()=>Date.now(),Mp=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(nS()),$p);function eS(e){let t=[],s=[],o=0,i=!1,l=!1;const r=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const f=d&&i,m=f?t:s;return p&&r.add(u),m.indexOf(u)===-1&&(m.push(u),f&&i&&(o=t.length)),u},cancel:u=>{const p=s.indexOf(u);p!==-1&&s.splice(p,1),r.delete(u)},process:u=>{if(i){l=!0;return}if(i=!0,[t,s]=[s,t],s.length=0,o=t.length,o)for(let p=0;p<o;p++){const d=t[p];d(u),r.has(d)&&(c.schedule(d),e())}i=!1,l&&(l=!1,c.process(u))}};return c}const tS=40;let hi=!0,Xa=!1,_i=!1;const ta={delta:0,timestamp:0},as=["read","update","preRender","render","postRender"],so=as.reduce((e,t)=>(e[t]=eS(()=>Xa=!0),e),{}),ki=as.reduce((e,t)=>{const s=so[t];return e[t]=(o,i=!1,l=!1)=>(Xa||oS(),s.schedule(o,i,l)),e},{}),aS=as.reduce((e,t)=>(e[t]=so[t].cancel,e),{});as.reduce((e,t)=>(e[t]=()=>so[t].process(ta),e),{});const sS=e=>so[e].process(ta),Lp=e=>{Xa=!1,ta.delta=hi?$p:Math.max(Math.min(e-ta.timestamp,tS),1),ta.timestamp=e,_i=!0,as.forEach(sS),_i=!1,Xa&&(hi=!1,Mp(Lp))},oS=()=>{Xa=!0,hi=!0,_i||Mp(Lp)},Ep=()=>ta;function Ip(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]]);return s}var iS=function(){},ac=function(){};const vi=(e,t,s)=>Math.min(Math.max(s,e),t),To=.001,lS=.01,sc=10,rS=.05,cS=1;function uS({duration:e=800,bounce:t=.25,velocity:s=0,mass:o=1}){let i,l;iS(e<=sc*1e3);let r=1-t;r=vi(rS,cS,r),e=vi(lS,sc,e/1e3),r<1?(i=p=>{const d=p*r,f=d*e,m=d-s,g=bi(p,r),h=Math.exp(-f);return To-m/g*h},l=p=>{const f=p*r*e,m=f*s+s,g=Math.pow(r,2)*Math.pow(p,2)*e,h=Math.exp(-f),w=bi(Math.pow(p,2),r);return(-i(p)+To>0?-1:1)*((m-g)*h)/w}):(i=p=>{const d=Math.exp(-p*e),f=(p-s)*e+1;return-To+d*f},l=p=>{const d=Math.exp(-p*e),f=(s-p)*(e*e);return d*f});const c=5/e,u=dS(i,l,c);if(e=e*1e3,isNaN(u))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(u,2)*o;return{stiffness:p,damping:r*2*Math.sqrt(o*p),duration:e}}}const pS=12;function dS(e,t,s){let o=s;for(let i=1;i<pS;i++)o=o-e(o)/t(o);return o}function bi(e,t){return e*Math.sqrt(1-t*t)}const mS=["duration","bounce"],fS=["stiffness","damping","mass"];function oc(e,t){return t.some(s=>e[s]!==void 0)}function gS(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!oc(e,fS)&&oc(e,mS)){const s=uS(e);t=Object.assign(Object.assign(Object.assign({},t),s),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function rl(e){var{from:t=0,to:s=1,restSpeed:o=2,restDelta:i}=e,l=Ip(e,["from","to","restSpeed","restDelta"]);const r={done:!1,value:t};let{stiffness:c,damping:u,mass:p,velocity:d,duration:f,isResolvedFromDuration:m}=gS(l),g=ic,h=ic;function w(){const y=d?-(d/1e3):0,S=s-t,I=u/(2*Math.sqrt(c*p)),E=Math.sqrt(c/p)/1e3;if(i===void 0&&(i=Math.min(Math.abs(s-t)/100,.4)),I<1){const C=bi(E,I);g=B=>{const D=Math.exp(-I*E*B);return s-D*((y+I*E*S)/C*Math.sin(C*B)+S*Math.cos(C*B))},h=B=>{const D=Math.exp(-I*E*B);return I*E*D*(Math.sin(C*B)*(y+I*E*S)/C+S*Math.cos(C*B))-D*(Math.cos(C*B)*(y+I*E*S)-C*S*Math.sin(C*B))}}else if(I===1)g=C=>s-Math.exp(-E*C)*(S+(y+E*S)*C);else{const C=E*Math.sqrt(I*I-1);g=B=>{const D=Math.exp(-I*E*B),G=Math.min(C*B,300);return s-D*((y+I*E*S)*Math.sinh(G)+C*S*Math.cosh(G))/C}}}return w(),{next:y=>{const S=g(y);if(m)r.done=y>=f;else{const I=h(y)*1e3,E=Math.abs(I)<=o,C=Math.abs(s-S)<=i;r.done=E&&C}return r.value=r.done?s:S,r},flipTarget:()=>{d=-d,[t,s]=[s,t],w()}}}rl.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const ic=e=>0,Sp=(e,t,s)=>{const o=t-e;return o===0?1:(s-e)/o},cl=(e,t,s)=>-s*e+s*t+e,Ap=(e,t)=>s=>Math.max(Math.min(s,t),e),Ra=e=>e%1?Number(e.toFixed(5)):e,ns=/(-)?([\d]*\.?[\d])+/g,yi=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,hS=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ss(e){return typeof e=="string"}const os={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Fa=Object.assign(Object.assign({},os),{transform:Ap(0,1)}),gs=Object.assign(Object.assign({},os),{default:1}),ul=e=>({test:t=>ss(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),kt=ul("deg"),Na=ul("%"),dn=ul("px"),lc=Object.assign(Object.assign({},Na),{parse:e=>Na.parse(e)/100,transform:e=>Na.transform(e*100)}),pl=(e,t)=>s=>Boolean(ss(s)&&hS.test(s)&&s.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(s,t)),Op=(e,t,s)=>o=>{if(!ss(o))return o;const[i,l,r,c]=o.match(ns);return{[e]:parseFloat(i),[t]:parseFloat(l),[s]:parseFloat(r),alpha:c!==void 0?parseFloat(c):1}},Lt={test:pl("hsl","hue"),parse:Op("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:s,alpha:o=1})=>"hsla("+Math.round(e)+", "+Na.transform(Ra(t))+", "+Na.transform(Ra(s))+", "+Ra(Fa.transform(o))+")"},_S=Ap(0,255),$o=Object.assign(Object.assign({},os),{transform:e=>Math.round(_S(e))}),lt={test:pl("rgb","red"),parse:Op("red","green","blue"),transform:({red:e,green:t,blue:s,alpha:o=1})=>"rgba("+$o.transform(e)+", "+$o.transform(t)+", "+$o.transform(s)+", "+Ra(Fa.transform(o))+")"};function kS(e){let t="",s="",o="",i="";return e.length>5?(t=e.substr(1,2),s=e.substr(3,2),o=e.substr(5,2),i=e.substr(7,2)):(t=e.substr(1,1),s=e.substr(2,1),o=e.substr(3,1),i=e.substr(4,1),t+=t,s+=s,o+=o,i+=i),{red:parseInt(t,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:i?parseInt(i,16)/255:1}}const wi={test:pl("#"),parse:kS,transform:lt.transform},le={test:e=>lt.test(e)||wi.test(e)||Lt.test(e),parse:e=>lt.test(e)?lt.parse(e):Lt.test(e)?Lt.parse(e):wi.parse(e),transform:e=>ss(e)?e:e.hasOwnProperty("red")?lt.transform(e):Lt.transform(e)},Cp="${c}",Pp="${n}";function vS(e){var t,s,o,i;return isNaN(e)&&ss(e)&&((s=(t=e.match(ns))===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:0)+((i=(o=e.match(yi))===null||o===void 0?void 0:o.length)!==null&&i!==void 0?i:0)>0}function Hp(e){typeof e=="number"&&(e=`${e}`);const t=[];let s=0;const o=e.match(yi);o&&(s=o.length,e=e.replace(yi,Cp),t.push(...o.map(le.parse)));const i=e.match(ns);return i&&(e=e.replace(ns,Pp),t.push(...i.map(os.parse))),{values:t,numColors:s,tokenised:e}}function Rp(e){return Hp(e).values}function Fp(e){const{values:t,numColors:s,tokenised:o}=Hp(e),i=t.length;return l=>{let r=o;for(let c=0;c<i;c++)r=r.replace(c<s?Cp:Pp,c<s?le.transform(l[c]):Ra(l[c]));return r}}const bS=e=>typeof e=="number"?0:e;function yS(e){const t=Rp(e);return Fp(e)(t.map(bS))}const is={test:vS,parse:Rp,createTransformer:Fp,getAnimatableNone:yS},wS=new Set(["brightness","contrast","saturate","opacity"]);function zS(e){let[t,s]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=s.match(ns)||[];if(!o)return e;const i=s.replace(o,"");let l=wS.has(t)?1:0;return o!==s&&(l*=100),t+"("+l+i+")"}const xS=/([a-z-]*)\(.*?\)/g,zi=Object.assign(Object.assign({},is),{getAnimatableNone:e=>{const t=e.match(xS);return t?t.map(zS).join(" "):e}});function Mo(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*6*s:s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function rc({hue:e,saturation:t,lightness:s,alpha:o}){e/=360,t/=100,s/=100;let i=0,l=0,r=0;if(!t)i=l=r=s;else{const c=s<.5?s*(1+t):s+t-s*t,u=2*s-c;i=Mo(u,c,e+1/3),l=Mo(u,c,e),r=Mo(u,c,e-1/3)}return{red:Math.round(i*255),green:Math.round(l*255),blue:Math.round(r*255),alpha:o}}const TS=(e,t,s)=>{const o=e*e,i=t*t;return Math.sqrt(Math.max(0,s*(i-o)+o))},$S=[wi,lt,Lt],cc=e=>$S.find(t=>t.test(e)),Np=(e,t)=>{let s=cc(e),o=cc(t),i=s.parse(e),l=o.parse(t);s===Lt&&(i=rc(i),s=lt),o===Lt&&(l=rc(l),o=lt);const r=Object.assign({},i);return c=>{for(const u in r)u!=="alpha"&&(r[u]=TS(i[u],l[u],c));return r.alpha=cl(i.alpha,l.alpha,c),s.transform(r)}},MS=e=>typeof e=="number",LS=(e,t)=>s=>t(e(s)),qp=(...e)=>e.reduce(LS);function Wp(e,t){return MS(e)?s=>cl(e,t,s):le.test(e)?Np(e,t):jp(e,t)}const Dp=(e,t)=>{const s=[...e],o=s.length,i=e.map((l,r)=>Wp(l,t[r]));return l=>{for(let r=0;r<o;r++)s[r]=i[r](l);return s}},ES=(e,t)=>{const s=Object.assign(Object.assign({},e),t),o={};for(const i in s)e[i]!==void 0&&t[i]!==void 0&&(o[i]=Wp(e[i],t[i]));return i=>{for(const l in o)s[l]=o[l](i);return s}};function uc(e){const t=is.parse(e),s=t.length;let o=0,i=0,l=0;for(let r=0;r<s;r++)o||typeof t[r]=="number"?o++:t[r].hue!==void 0?l++:i++;return{parsed:t,numNumbers:o,numRGB:i,numHSL:l}}const jp=(e,t)=>{const s=is.createTransformer(t),o=uc(e),i=uc(t);return o.numHSL===i.numHSL&&o.numRGB===i.numRGB&&o.numNumbers>=i.numNumbers?qp(Dp(o.parsed,i.parsed),s):r=>`${r>0?t:e}`},IS=(e,t)=>s=>cl(e,t,s);function SS(e){if(typeof e=="number")return IS;if(typeof e=="string")return le.test(e)?Np:jp;if(Array.isArray(e))return Dp;if(typeof e=="object")return ES}function AS(e,t,s){const o=[],i=s||SS(e[0]),l=e.length-1;for(let r=0;r<l;r++){let c=i(e[r],e[r+1]);if(t){const u=Array.isArray(t)?t[r]:t;c=qp(u,c)}o.push(c)}return o}function OS([e,t],[s]){return o=>s(Sp(e,t,o))}function CS(e,t){const s=e.length,o=s-1;return i=>{let l=0,r=!1;if(i<=e[0]?r=!0:i>=e[o]&&(l=o-1,r=!0),!r){let u=1;for(;u<s&&!(e[u]>i||u===o);u++);l=u-1}const c=Sp(e[l],e[l+1],i);return t[l](c)}}function Bp(e,t,{clamp:s=!0,ease:o,mixer:i}={}){const l=e.length;ac(l===t.length),ac(!o||!Array.isArray(o)||o.length===l-1),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const r=AS(t,o,i),c=l===2?OS(e,r):CS(e,r);return s?u=>c(vi(e[0],e[l-1],u)):c}const oo=e=>t=>1-e(1-t),dl=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,PS=e=>t=>Math.pow(t,e),Up=e=>t=>t*t*((e+1)*t-e),HS=e=>{const t=Up(e);return s=>(s*=2)<1?.5*t(s):.5*(2-Math.pow(2,-10*(s-1)))},Vp=1.525,RS=4/11,FS=8/11,NS=9/10,Kp=e=>e,ml=PS(2),qS=oo(ml),Gp=dl(ml),Qp=e=>1-Math.sin(Math.acos(e)),Yp=oo(Qp),WS=dl(Yp),fl=Up(Vp),DS=oo(fl),jS=dl(fl),BS=HS(Vp),US=4356/361,VS=35442/1805,KS=16061/1805,Rs=e=>{if(e===1||e===0)return e;const t=e*e;return e<RS?7.5625*t:e<FS?9.075*t-9.9*e+3.4:e<NS?US*t-VS*e+KS:10.8*e*e-20.52*e+10.72},GS=oo(Rs),QS=e=>e<.5?.5*(1-Rs(1-e*2)):.5*Rs(e*2-1)+.5;function YS(e,t){return e.map(()=>t||Gp).splice(0,e.length-1)}function ZS(e){const t=e.length;return e.map((s,o)=>o!==0?o/(t-1):0)}function JS(e,t){return e.map(s=>s*t)}function xs({from:e=0,to:t=1,ease:s,offset:o,duration:i=300}){const l={done:!1,value:e},r=Array.isArray(t)?t:[e,t],c=JS(o&&o.length===r.length?o:ZS(r),i);function u(){return Bp(c,r,{ease:Array.isArray(s)?s:YS(r,s)})}let p=u();return{next:d=>(l.value=p(d),l.done=d>=i,l),flipTarget:()=>{r.reverse(),p=u()}}}function XS({velocity:e=0,from:t=0,power:s=.8,timeConstant:o=350,restDelta:i=.5,modifyTarget:l}){const r={done:!1,value:t};let c=s*e;const u=t+c,p=l===void 0?u:l(u);return p!==u&&(c=p-t),{next:d=>{const f=-c*Math.exp(-d/o);return r.done=!(f>i||f<-i),r.value=r.done?p:p+f,r},flipTarget:()=>{}}}const pc={keyframes:xs,spring:rl,decay:XS};function nA(e){if(Array.isArray(e.to))return xs;if(pc[e.type])return pc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?xs:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?rl:xs}function Zp(e,t,s=0){return e-t-s}function eA(e,t,s=0,o=!0){return o?Zp(t+-e,t,s):t-(e-t)+s}function tA(e,t,s,o){return o?e>=t+s:e<=-s}const aA=e=>{const t=({delta:s})=>e(s);return{start:()=>ki.update(t,!0),stop:()=>aS.update(t)}};function Jp(e){var t,s,{from:o,autoplay:i=!0,driver:l=aA,elapsed:r=0,repeat:c=0,repeatType:u="loop",repeatDelay:p=0,onPlay:d,onStop:f,onComplete:m,onRepeat:g,onUpdate:h}=e,w=Ip(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=w,S,I=0,E=w.duration,C,B=!1,D=!0,G;const on=nA(w);!((s=(t=on).needsInterpolation)===null||s===void 0)&&s.call(t,o,y)&&(G=Bp([0,100],[o,y],{clamp:!1}),o=0,y=100);const pn=on(Object.assign(Object.assign({},w),{from:o,to:y}));function kn(){I++,u==="reverse"?(D=I%2===0,r=eA(r,E,p,D)):(r=Zp(r,E,p),u==="mirror"&&pn.flipTarget()),B=!1,g&&g()}function yn(){S.stop(),m&&m()}function Rn(Qn){if(D||(Qn=-Qn),r+=Qn,!B){const In=pn.next(Math.max(0,r));C=In.value,G&&(C=G(C)),B=D?In.done:r<=0}h==null||h(C),B&&(I===0&&(E!=null||(E=r)),I<c?tA(r,E,p,D)&&kn():yn())}function Wn(){d==null||d(),S=l(Rn),S.start()}return i&&Wn(),{stop:()=>{f==null||f(),S.stop()}}}function Xp(e,t){return t?e*(1e3/t):0}function sA({from:e=0,velocity:t=0,min:s,max:o,power:i=.8,timeConstant:l=750,bounceStiffness:r=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:p,driver:d,onUpdate:f,onComplete:m,onStop:g}){let h;function w(E){return s!==void 0&&E<s||o!==void 0&&E>o}function y(E){return s===void 0?o:o===void 0||Math.abs(s-E)<Math.abs(o-E)?s:o}function S(E){h==null||h.stop(),h=Jp(Object.assign(Object.assign({},E),{driver:d,onUpdate:C=>{var B;f==null||f(C),(B=E.onUpdate)===null||B===void 0||B.call(E,C)},onComplete:m,onStop:g}))}function I(E){S(Object.assign({type:"spring",stiffness:r,damping:c,restDelta:u},E))}if(w(e))I({from:e,velocity:t,to:y(e)});else{let E=i*t+e;typeof p<"u"&&(E=p(E));const C=y(E),B=C===s?-1:1;let D,G;const on=pn=>{D=G,G=pn,t=Xp(pn-D,Ep().delta),(B===1&&pn>C||B===-1&&pn<C)&&I({from:pn,to:C,velocity:t})};S({type:"decay",from:e,velocity:t,timeConstant:l,power:i,restDelta:u,modifyTarget:p,onUpdate:w(E)?on:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const nd=(e,t)=>1-3*t+3*e,ed=(e,t)=>3*t-6*e,td=e=>3*e,Fs=(e,t,s)=>((nd(t,s)*e+ed(t,s))*e+td(t))*e,ad=(e,t,s)=>3*nd(t,s)*e*e+2*ed(t,s)*e+td(t),oA=1e-7,iA=10;function lA(e,t,s,o,i){let l,r,c=0;do r=t+(s-t)/2,l=Fs(r,o,i)-e,l>0?s=r:t=r;while(Math.abs(l)>oA&&++c<iA);return r}const rA=8,cA=.001;function uA(e,t,s,o){for(let i=0;i<rA;++i){const l=ad(t,s,o);if(l===0)return t;t-=(Fs(t,s,o)-e)/l}return t}const Ts=11,hs=1/(Ts-1);function pA(e,t,s,o){if(e===t&&s===o)return Kp;const i=new Float32Array(Ts);for(let r=0;r<Ts;++r)i[r]=Fs(r*hs,e,s);function l(r){let c=0,u=1;const p=Ts-1;for(;u!==p&&i[u]<=r;++u)c+=hs;--u;const d=(r-i[u])/(i[u+1]-i[u]),f=c+d*hs,m=ad(f,e,s);return m>=cA?uA(r,f,e,s):m===0?f:lA(r,c,c+hs,e,s)}return r=>r===0||r===1?r:Fs(l(r),t,o)}const Lo={};class dA{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,s,o){if(!!this.subscriptions.size)for(const i of this.subscriptions)i(t,s,o)}clear(){this.subscriptions.clear()}}const dc=e=>!isNaN(parseFloat(e));class mA{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new dA,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:i}=Ep();this.lastUpdated!==i&&(this.timeDelta=o,this.lastUpdated=i),ki.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ki.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=dc(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=dc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Xp(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(s=>{const{stop:o}=t(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function fA(e){return new mA(e)}const{isArray:gA}=Array;function hA(){const e=Q({}),t=o=>{const i=l=>{!e.value[l]||(e.value[l].stop(),e.value[l].destroy(),dg(e.value,l))};o?gA(o)?o.forEach(i):i(o):Object.keys(e.value).forEach(i)},s=(o,i,l)=>{if(e.value[o])return e.value[o];const r=fA(i);return r.onChange(c=>{re(l,o,c)}),re(e.value,o,r),r};return ll(t),{motionValues:e,get:s,stop:t}}const _A=e=>Array.isArray(e),vt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Eo=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),kA=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Io=()=>({type:"keyframes",ease:"linear",duration:300}),vA=e=>({type:"keyframes",duration:800,values:e}),mc={default:kA,x:vt,y:vt,z:vt,rotate:vt,rotateX:vt,rotateY:vt,rotateZ:vt,scaleX:Eo,scaleY:Eo,scale:Eo,backgroundColor:Io,color:Io,opacity:Io},sd=(e,t)=>{let s;return _A(t)?s=vA:s=mc[e]||mc.default,{to:t,...s(t)}},fc={...os,transform:Math.round},od={color:le,backgroundColor:le,outlineColor:le,fill:le,stroke:le,borderColor:le,borderTopColor:le,borderRightColor:le,borderBottomColor:le,borderLeftColor:le,borderWidth:dn,borderTopWidth:dn,borderRightWidth:dn,borderBottomWidth:dn,borderLeftWidth:dn,borderRadius:dn,radius:dn,borderTopLeftRadius:dn,borderTopRightRadius:dn,borderBottomRightRadius:dn,borderBottomLeftRadius:dn,width:dn,maxWidth:dn,height:dn,maxHeight:dn,size:dn,top:dn,right:dn,bottom:dn,left:dn,padding:dn,paddingTop:dn,paddingRight:dn,paddingBottom:dn,paddingLeft:dn,margin:dn,marginTop:dn,marginRight:dn,marginBottom:dn,marginLeft:dn,rotate:kt,rotateX:kt,rotateY:kt,rotateZ:kt,scale:gs,scaleX:gs,scaleY:gs,scaleZ:gs,skew:kt,skewX:kt,skewY:kt,distance:dn,translateX:dn,translateY:dn,translateZ:dn,x:dn,y:dn,z:dn,perspective:dn,transformPerspective:dn,opacity:Fa,originX:lc,originY:lc,originZ:dn,zIndex:fc,filter:zi,WebkitFilter:zi,fillOpacity:Fa,strokeOpacity:Fa,numOctaves:fc},gl=e=>od[e],id=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function bA(e,t){let s=gl(e);return s!==zi&&(s=is),s.getAnimatableNone?s.getAnimatableNone(t):void 0}const yA={linear:Kp,easeIn:ml,easeInOut:Gp,easeOut:qS,circIn:Qp,circInOut:WS,circOut:Yp,backIn:fl,backInOut:jS,backOut:DS,anticipate:BS,bounceIn:GS,bounceInOut:QS,bounceOut:Rs},gc=e=>{if(Array.isArray(e)){const[t,s,o,i]=e;return pA(t,s,o,i)}else if(typeof e=="string")return yA[e];return e},wA=e=>Array.isArray(e)&&typeof e[0]!="number",hc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&is.test(t)&&!t.startsWith("url("));function zA(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function xA({ease:e,times:t,delay:s,...o}){const i={...o};return t&&(i.offset=t),e&&(i.ease=wA(e)?e.map(gc):gc(e)),s&&(i.elapsed=-s),i}function TA(e,t,s){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),zA(t),$A(e)||(e={...e,...sd(s,t.to)}),{...t,...xA(e)}}function $A({delay:e,repeat:t,repeatType:s,repeatDelay:o,from:i,...l}){return!!Object.keys(l).length}function MA(e,t){return e[t]||e.default||e}function LA(e,t,s,o,i){const l=MA(o,e);let r=l.from===null||l.from===void 0?t.get():l.from;const c=hc(e,s);r==="none"&&c&&typeof s=="string"&&(r=bA(e,s));const u=hc(e,r);function p(f){const m={from:r,to:s,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:g=>t.set(g)};return l.type==="inertia"||l.type==="decay"?sA({...m,...l}):Jp({...TA(l,m,e),onUpdate:g=>{m.onUpdate(g),l.onUpdate&&l.onUpdate(g)},onComplete:()=>{o.onComplete&&o.onComplete(),i&&i(),f&&f()}})}function d(f){return t.set(s),o.onComplete&&o.onComplete(),i&&i(),f&&f(),{stop:()=>{}}}return!u||!c||l.type===!1?d:p}function EA(){const{motionValues:e,stop:t,get:s}=hA();return{motionValues:e,stop:t,push:(i,l,r,c={},u)=>{const p=r[i],d=s(i,p,r);if(c&&c.immediate){d.set(l);return}const f=LA(i,d,l,c,u);d.start(f)}}}function IA(e,t={},{motionValues:s,push:o,stop:i}=EA()){const l=z(t),r=Q(!1),c=fn(s,m=>{r.value=Object.values(m).filter(g=>g.isAnimating()).length>0},{immediate:!0,deep:!0}),u=m=>{if(!l||!l[m])throw new Error(`The variant ${m} does not exist.`);return l[m]},p=m=>(typeof m=="string"&&(m=u(m)),Promise.all(Object.entries(m).map(([g,h])=>{if(g!=="transition")return new Promise(w=>{o(g,h,e,m.transition||sd(g,m[g]),w)})}).filter(Boolean)));return{isAnimating:r,apply:p,set:m=>{const g=mi(m)?m:u(m);Object.entries(g).forEach(([h,w])=>{h!=="transition"&&o(h,w,e,{immediate:!0})})},stopTransitions:()=>{c(),i()},leave:async m=>{let g;if(l&&(l.leave&&(g=l.leave),!l.leave&&l.initial&&(g=l.initial)),!g){m();return}await p(g),m()}}}const hl=typeof window<"u",SA=()=>hl&&window.onpointerdown===null,AA=()=>hl&&window.ontouchstart===null,OA=()=>hl&&window.onmousedown===null;function CA({target:e,state:t,variants:s,apply:o}){const i=z(s),l=[],r=(...h)=>{const w=J4.apply(null,h);return l.push(w),w},c=Q(!1),u=Q(!1),p=Q(!1),d=P(()=>{let h=[];return i&&(i.hovered&&(h=[...h,...Object.keys(i.hovered)]),i.tapped&&(h=[...h,...Object.keys(i.tapped)]),i.focused&&(h=[...h,...Object.keys(i.focused)])),h}),f=P(()=>{const h={};Object.assign(h,t.value),c.value&&i.hovered&&Object.assign(h,i.hovered),u.value&&i.tapped&&Object.assign(h,i.tapped),p.value&&i.focused&&Object.assign(h,i.focused);for(const w in h)d.value.includes(w)||delete h[w];return h});i.hovered&&(r(e,"mouseenter",()=>{c.value=!0}),r(e,"mouseleave",()=>{c.value=!1,u.value=!1}),r(e,"mouseout",()=>{c.value=!1,u.value=!1})),i.tapped&&(OA()&&(r(e,"mousedown",()=>{u.value=!0}),r(e,"mouseup",()=>{u.value=!1})),SA()&&(r(e,"pointerdown",()=>{u.value=!0}),r(e,"pointerup",()=>{u.value=!1})),AA()&&(r(e,"touchstart",()=>{u.value=!0}),r(e,"touchend",()=>{u.value=!1}))),i.focused&&(r(e,"focus",()=>{p.value=!0}),r(e,"blur",()=>{p.value=!1}));const m=fn(f,o);return{stop:()=>{l.forEach(h=>h()),m()}}}function PA({set:e,target:t,variants:s,variant:o}){const i=z(s);return{stop:fn(()=>t,()=>{!i||(i.initial&&e("initial"),i.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}}function HA({state:e,apply:t}){return{stop:fn(e,o=>{o&&t(o)},{immediate:!0})}}function RA({target:e,variants:t,variant:s}){const o=z(t);let i=Ot;if(o&&(o.visible||o.visibleOnce)){const{stop:l}=X4(e,([{isIntersecting:r}])=>{o.visible?r?s.value="visible":s.value="initial":o.visibleOnce&&(r?s.value!=="visibleOnce"&&(s.value="visibleOnce"):s.value||(s.value="initial"))});i=l}return{stop:i}}function FA(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const s=Q([]);if(t.lifeCycleHooks){const{stop:i}=PA(e);s.value.push(i)}if(t.syncVariants){const{stop:i}=HA(e);s.value.push(i)}if(t.visibilityHooks){const{stop:i}=RA(e);s.value.push(i)}if(t.eventListeners){const{stop:i}=CA(e);s.value.push(i)}const o=()=>s.value.forEach(i=>i());return ll(o),{stop:o}}function ld(e={}){const t=Fn({...e}),s=Q({});return fn(t,()=>{const o={};for(const[i,l]of Object.entries(t)){const r=gl(i),c=id(l,r);o[i]=c}s.value=o},{immediate:!0,deep:!0}),{state:t,style:s}}const NA=["","X","Y","Z"],qA=["perspective","translate","scale","rotate","skew"],rd=["transformPerspective","x","y","z"];qA.forEach(e=>{NA.forEach(t=>{const s=e+t;rd.push(s)})});const WA=new Set(rd);function _l(e){return WA.has(e)}const DA=new Set(["originX","originY","originZ"]);function cd(e){return DA.has(e)}function jA(e){const t={},s={};return Object.entries(e).forEach(([o,i])=>{_l(o)||cd(o)?t[o]=i:s[o]=i}),{transform:t,style:s}}function BA(e,t){let s,o;const{state:i,style:l}=ld(),r=fn(()=>Pt(e),p=>{if(!!p){o=p;for(const d of Object.keys(od))p.style[d]===null||p.style[d]===""||_l(d)||cd(d)||re(i,d,p.style[d]);s&&Object.entries(s).forEach(([d,f])=>re(p.style,d,f)),t&&t(i)}},{immediate:!0}),c=fn(l,p=>{if(!o){s=p;return}for(const d in p)re(o.style,d,p[d])},{immediate:!0});return{style:i,stop:()=>{o=void 0,s=void 0,r(),c()}}}const UA={x:"translateX",y:"translateY",z:"translateZ"};function ud(e={},t=!0){const s=Fn({...e}),o=Q("");return fn(s,i=>{let l="",r=!1;t&&(i.x||i.y||i.z)&&(l+=`translate3d(${[i.x||0,i.y||0,i.z||0].map(dn.transform).join(",")}) `,r=!0);for(const[c,u]of Object.entries(i)){if(t&&(c==="x"||c==="y"||c==="z"))continue;const p=gl(c),d=id(u,p);l+=`${UA[c]||c}(${d}) `}t&&!r&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}function VA(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,i)=>{if(!i)return o;const[l,r]=i.split("("),u=r.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),p=u.length===1?u[0]:u;return{...o,[l]:p}},{})}function KA(e,t){Object.entries(VA(t)).forEach(([s,o])=>{o=parseFloat(o);const i=["x","y","z"];if(s==="translate3d"){if(o===0){i.forEach(l=>{re(e,l,0)});return}o.forEach((l,r)=>{re(e,i[r],l)});return}if(s==="translateX"){re(e,"x",o);return}if(s==="translateY"){re(e,"y",o);return}if(s==="translateZ"){re(e,"z",o);return}re(e,s,o)})}function GA(e,t){let s,o;const{state:i,transform:l}=ud(),r=fn(()=>Pt(e),p=>{!p||(o=p,p.style.transform&&KA(i,p.style.transform),s&&(p.style.transform=s),t&&t(i))},{immediate:!0}),c=fn(l,p=>{if(!o){s=p;return}o.style.transform=p},{immediate:!0});return{transform:i,stop:()=>{s=void 0,o=void 0,r(),c()}}}function QA(e,t){const s=Fn({}),o=f=>{Object.entries(f).forEach(([m,g])=>{re(s,m,g)})},{style:i,stop:l}=BA(e,o),{transform:r,stop:c}=GA(e,o),u=fn(s,f=>{Object.entries(f).forEach(([m,g])=>{const h=_l(m)?r:i;h[m]&&h[m]===g||re(h,m,g)})},{immediate:!0,deep:!0}),p=fn(()=>Pt(e),f=>{!f||t&&o(t)},{immediate:!0});return{motionProperties:s,style:i,transform:r,stop:()=>{l(),c(),u(),p()}}}function YA(e={}){const t=z(e),s=Q();return{state:P(()=>{if(!!s.value)return t[s.value]}),variant:s}}function ZA(e,t={},s){const{motionProperties:o,stop:i}=QA(e),{variant:l,state:r}=YA(t),c=IA(o,t),u={target:e,variant:l,variants:t,state:r,motionProperties:o,...c,stop:(d=!1)=>{}},{stop:p}=FA(u,s);return u.stop=(d=!1)=>{const f=()=>{u.stopTransitions(),i(),p()};if(!d&&t.value&&t.value.leave){const m=fn(u.isAnimating,g=>{g||(m(),f())})}else f()},ll(()=>u.stop()),Z4(()=>Pt(e),d=>{!d||d!=null&&d.motionInstance&&(u.stop(),Object.assign(u,d.motionInstance))}),u}const JA=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],XA=(e,t)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&mi(s.variants)&&(t.value={...t.value,...s.variants}),JA.forEach(o=>{if(o==="delay"){if(s&&s[o]&&Q4(s[o])){const i=s[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={...t.value.enter.transition,delay:i}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={...t.value.visible.transition,delay:i}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={...t.value.visibleOnce.transition,delay:i}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&mi(s[o])&&(t.value[o]=s[o])}))},So=e=>{const t=(o,i,l)=>{const r=i.value&&typeof i.value=="string"?i.value:l.key;r&&Lo[r]&&Lo[r].stop();const c=Q(e||{});typeof i.value=="object"&&(c.value=i.value),XA(l,c);const u=ZA(o,c);o.motionInstance=u,r&&re(Lo,r,u)},s=o=>{o.motionInstance&&o.motionInstance.stop()};return{created:t,unmounted:s,bind:t,unbind:s,getSSRProps(o,i){const{initial:l}=o.value||i&&i.props||{},r=K4((e==null?void 0:e.initial)||{},l||{});if(!r||Object.keys(r).length===0)return;const{transform:c,style:u}=jA(r),{transform:p}=ud(c),{style:d}=ld(u);return p.value&&(d.value.transform=p.value),{style:d.value}}}},nO={initial:{opacity:0},enter:{opacity:1}},eO={initial:{opacity:0},visible:{opacity:1}},tO={initial:{opacity:0},visibleOnce:{opacity:1}},aO={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},sO={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},oO={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},iO={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},lO={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},rO={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},cO={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},uO={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},pO={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},dO={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},mO={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},fO={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},gO={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},hO={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},_O={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},kO={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},vO={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},bO={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},yO={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},wO={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},zO={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},xO={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},TO={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},$O={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},MO={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},LO={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},EO={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},_c={__proto__:null,fade:nO,fadeVisible:eO,fadeVisibleOnce:tO,pop:aO,popVisible:sO,popVisibleOnce:oO,rollBottom:gO,rollLeft:iO,rollRight:cO,rollTop:dO,rollVisibleBottom:hO,rollVisibleLeft:lO,rollVisibleRight:uO,rollVisibleTop:mO,rollVisibleOnceBottom:_O,rollVisibleOnceLeft:rO,rollVisibleOnceRight:pO,rollVisibleOnceTop:fO,slideBottom:MO,slideLeft:kO,slideRight:yO,slideTop:xO,slideVisibleBottom:LO,slideVisibleLeft:vO,slideVisibleRight:wO,slideVisibleTop:TO,slideVisibleOnceBottom:EO,slideVisibleOnceLeft:bO,slideVisibleOnceRight:zO,slideVisibleOnceTop:$O};function IO(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(o,i=>s.charAt(t.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const SO={install(e,t){if(e.directive("motion",So()),!t||t&&!t.excludePresets)for(const s in _c){const o=_c[s];e.directive(`motion-${IO(s)}`,So(o))}if(t&&t.directives)for(const s in t.directives){const o=t.directives[s];o.initial,e.directive(`motion-${s}`,So(o))}}};var kc;const qa=typeof window<"u",AO=Object.prototype.toString,OO=e=>AO.call(e)==="[object Object]";qa&&((kc=window==null?void 0:window.navigator)==null?void 0:kc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function CO(e){return Si()?(Ai(e),!0):!1}function PO(e){var t;const s=z(e);return(t=s==null?void 0:s.$el)!=null?t:s}const HO=qa?window:void 0,xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ti="__vueuse_ssr_handlers__";xi[Ti]=xi[Ti]||{};xi[Ti];function RO(e,t={}){const{immediate:s=!0,window:o=HO}=t,i=Q(!1);let l=null;function r(){!i.value||!o||(e(),l=o.requestAnimationFrame(r))}function c(){!i.value&&o&&(i.value=!0,r())}function u(){i.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return s&&c(),CO(u),{isActive:i,pause:u,resume:c}}var vc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(vc||(vc={}));const kl="vue-starport-injection",pd="vue-starport-options",FO={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},dd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var NO=Object.defineProperty,Ns=Object.getOwnPropertySymbols,md=Object.prototype.hasOwnProperty,fd=Object.prototype.propertyIsEnumerable,bc=(e,t,s)=>t in e?NO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,qO=(e,t)=>{for(var s in t||(t={}))md.call(t,s)&&bc(e,s,t[s]);if(Ns)for(var s of Ns(t))fd.call(t,s)&&bc(e,s,t[s]);return e},yc=(e,t)=>{var s={};for(var o in e)md.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Ns)for(var o of Ns(e))t.indexOf(o)<0&&fd.call(e,o)&&(s[o]=e[o]);return s};const WO=En({name:"StarportProxy",props:qO({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},dd),setup(e,t){const s=x(kl),o=P(()=>s.getInstance(e.port,e.component)),i=Q(),l=o.value.generateId(),r=Q(!1);return o.value.isVisible||(o.value.land(),r.value=!0),pa(async()=>{o.value.el||(o.value.el=i.value,await Gn(),r.value=!0,o.value.rect.update())}),Zs(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,r.value=!1,!o.value.options.keepAlive&&(await Gn(),await Gn(),!o.value.el&&s.dispose(o.value.port))}),fn(()=>e,async()=>{o.value.props&&await Gn();const c=e,{props:u}=c,p=yc(c,["props"]);o.value.props=u||{},o.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=e,{initialProps:u,mountedProps:p}=c,d=yc(c,["initialProps","mountedProps"]),f=U(d,(r.value?p:u)||{});return ze("div",U(f,{id:l,ref:i,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?ze(t.slots.default):void 0)}}});var DO=Object.defineProperty,jO=Object.defineProperties,BO=Object.getOwnPropertyDescriptors,wc=Object.getOwnPropertySymbols,UO=Object.prototype.hasOwnProperty,VO=Object.prototype.propertyIsEnumerable,zc=(e,t,s)=>t in e?DO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,KO=(e,t)=>{for(var s in t||(t={}))UO.call(t,s)&&zc(e,s,t[s]);if(wc)for(var s of wc(t))VO.call(t,s)&&zc(e,s,t[s]);return e},GO=(e,t)=>jO(e,BO(t));const QO=En({name:"Starport",inheritAttrs:!0,props:dd,setup(e,t){const s=Q(!1);return pa(()=>{s.value=!0}),()=>{var r,c;const o=(c=(r=t.slots).default)==null?void 0:c.call(r);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const i=o[0];let l=i.type;return(!OO(l)||sa(l))&&(l={render(){return o}}),ze(WO,GO(KO({},e),{key:e.port,component:Us(l),props:i.props}))}}});function YO(e){const t=Fn({height:0,width:0,left:0,top:0,update:o,listen:l,pause:r,margin:"0px",padding:"0px"}),s=qa?document.documentElement||document.body:void 0;function o(){if(!qa)return;const c=PO(e);if(!c)return;const{height:u,width:p,left:d,top:f}=c.getBoundingClientRect(),m=window.getComputedStyle(c),g=m.margin,h=m.padding;Object.assign(t,{height:u,width:p,left:d,top:s.scrollTop+f,margin:g,padding:h})}const i=RO(o,{immediate:!1});function l(){!qa||(o(),i.resume())}function r(){i.pause()}return t}let ZO=(e,t=21)=>(s=t)=>{let o="",i=s;for(;i--;)o+=e[Math.random()*e.length|0];return o};const xc=ZO("abcdefghijklmnopqrstuvwxyz",5);function Tc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function JO(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var XO=Object.defineProperty,$c=Object.getOwnPropertySymbols,nC=Object.prototype.hasOwnProperty,eC=Object.prototype.propertyIsEnumerable,Mc=(e,t,s)=>t in e?XO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ao=(e,t)=>{for(var s in t||(t={}))nC.call(t,s)&&Mc(e,s,t[s]);if($c)for(var s of $c(t))eC.call(t,s)&&Mc(e,s,t[s]);return e};function tC(e,t,s={}){const o=JO(t),i=Tc(o)||xc(),l=Q(),r=Q(null),c=Q(!1),u=Q(!1),p=Md(!0),d=Q({}),f=P(()=>Ao(Ao(Ao({},FO),s),d.value)),m=Q(0);let g;p.run(()=>{g=YO(l),fn(l,async S=>{S&&(u.value=!0),await Gn(),l.value||(u.value=!1)})});const h=Tc(e);function w(){return`starport-${i}-${h}-${xc()}`}const y=w();return Fn({el:l,id:y,port:e,props:r,rect:g,scope:p,isLanded:c,isVisible:u,options:f,liftOffTime:m,component:t,componentName:o,componentId:i,generateId:w,setLocalOptions(S={}){d.value=JSON.parse(JSON.stringify(S))},elRef(){return l},liftOff(){!c.value||(c.value=!1,m.value=Date.now(),g.listen())},land(){c.value||(c.value=!0,g.pause())}})}function aC(e){const t=Fn(new Map);function s(i,l){let r=t.get(i);return r||(r=tC(i,l,e),t.set(i,r)),r.component=l,r}function o(i){var l;(l=t.get(i))==null||l.scope.stop(),t.delete(i)}return{portMap:t,dispose:o,getInstance:s}}var sC=Object.defineProperty,oC=Object.defineProperties,iC=Object.getOwnPropertyDescriptors,Lc=Object.getOwnPropertySymbols,lC=Object.prototype.hasOwnProperty,rC=Object.prototype.propertyIsEnumerable,Ec=(e,t,s)=>t in e?sC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,cC=(e,t)=>{for(var s in t||(t={}))lC.call(t,s)&&Ec(e,s,t[s]);if(Lc)for(var s of Lc(t))rC.call(t,s)&&Ec(e,s,t[s]);return e},uC=(e,t)=>oC(e,iC(t));const pC=En({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=x(kl);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=P(()=>t.getInstance(e.port,e.component)),o=P(()=>{var r;return((r=s.value.el)==null?void 0:r.id)||s.value.id}),i=P(()=>{const r=Date.now()-s.value.liftOffTime,c=Math.max(0,s.value.options.duration-r),u=s.value.rect,p={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!s.value.isVisible||!s.value.el?uC(cC({},p),{zIndex:-1,display:"none"}):(s.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:s.value.options.easing}),p)}),l={};return()=>{const r=!!(s.value.isLanded&&s.value.el);return ze("div",{style:i.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},ze(Jm,{to:r?`#${o.value}`:"body",disabled:!r},ze(s.value.component,U(l,s.value.props))))}}}),dC=En({name:"StarportCarrier",setup(e,{slots:t}){const s=aC(x(pd,{}));return Rt().appContext.app.provide(kl,s),()=>{var i;return[(i=t.default)==null?void 0:i.call(t),Array.from(s.portMap.entries()).map(([l,{component:r}])=>ze(pC,{key:l,port:l,component:r}))]}}});function mC(e={}){return{install(t){t.provide(pd,e),t.component("Starport",QO),t.component("StarportCarrier",dC)}}}function fC(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(SO),e.app.use(mC({keepAlive:!0}))}function ue(e,t,s){var o,i;return(i=((o=e.instance)==null?void 0:o.$).provides[t])!=null?i:s}function gC(){return{install(e){e.directive("click",{name:"v-click",mounted(t,s){var d,f,m,g;if(Ha.value||((d=ue(s,Aa))==null?void 0:d.value))return;const o=ue(s,zt),i=ue(s,Sa),l=ue(s,Yo),r=s.modifiers.hide!==!1&&s.modifiers.hide!=null,c=s.modifiers.fade!==!1&&s.modifiers.fade!=null,u=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,p=c?Jf:fo;if(o&&!((m=o==null?void 0:o.value)!=null&&m.includes(t))&&o.value.push(t),s.value===null&&(s.value=o==null?void 0:o.value.length),!(l!=null&&l.value.has(s.value)))l==null||l.value.set(s.value,[t]);else if(!((g=l==null?void 0:l.value.get(s.value))!=null&&g.includes(t))){const h=(l==null?void 0:l.value.get(s.value))||[];l==null||l.value.set(s.value,[t].concat(h))}t==null||t.classList.toggle(yt,!0),i&&fn(i,()=>{var S;const h=(S=i==null?void 0:i.value)!=null?S:0,w=s.value!=null?h>=s.value:h>u;t.classList.contains(go)||t.classList.toggle(p,!w),r!==!1&&r!==void 0&&t.classList.toggle(p,w),t.classList.toggle(ka,!1);const y=l==null?void 0:l.value.get(h);y==null||y.forEach((I,E)=>{I.classList.toggle(ms,!1),E===y.length-1?I.classList.toggle(ka,!0):I.classList.toggle(ms,!0)}),t.classList.contains(ka)||t.classList.toggle(ms,w)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(yt,!1);const o=ue(s,zt);o!=null&&o.value&&Zo(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,s){var c,u;if(Ha.value||((c=ue(s,Aa))==null?void 0:c.value))return;const o=ue(s,zt),i=ue(s,Sa),l=ue(s,Yo),r=o==null?void 0:o.value.length;s.value===void 0&&(s.value=o==null?void 0:o.value.length),l!=null&&l.value.has(s.value)?(u=l==null?void 0:l.value.get(s.value))==null||u.push(t):l==null||l.value.set(s.value,[t]),t==null||t.classList.toggle(yt,!0),i&&fn(i,()=>{var d,f,m;const p=((d=i.value)!=null?d:0)>=((m=(f=s.value)!=null?f:r)!=null?m:0);t.classList.contains(go)||t.classList.toggle(fo,!p),t.classList.toggle(ka,!1),t.classList.contains(ka)||t.classList.toggle(ms,p)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(yt,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,s){var r,c,u;if(Ha.value||((r=ue(s,Aa))==null?void 0:r.value))return;const o=ue(s,zt),i=ue(s,Sa),l=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((u=o==null?void 0:o.value)!=null&&u.includes(t))&&o.value.push(t),t==null||t.classList.toggle(yt,!0),i&&fn(i,()=>{var f;const p=(f=i==null?void 0:i.value)!=null?f:0,d=s.value!=null?p>=s.value:p>l;t.classList.toggle(fo,d),t.classList.toggle(go,d)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(yt,!1);const o=ue(s,zt);o!=null&&o.value&&Zo(o.value,t)}})}}}function hC(e,t){const s=gp(e),o=hp(t,s.currentRoute,s.currentPage);return{nav:{...s,...o,downloadPDF:pi,next:pt,nextSlide:Za,openInEditor:j4,prev:dt,prevSlide:Ja},configs:xn,themeConfigs:P(()=>xn.themeConfig)}}function _C(){return{install(e){const t=hC(Xe,Oe);e.provide($,Fn(t))}}}const fa=Cf(U4);fa.use(_e);fa.use(Kf());fa.use(gC());fa.use(_C());fC({app:fa,router:_e});fa.mount("#app");export{za as $,_n as A,$n as B,ee as C,Bk as D,kC as E,Mn as F,vC as G,Oe as H,Hs as I,F4 as J,zo as K,ho as L,Ga as M,yo as N,Ou as O,Xv as P,Xi as Q,Uv as R,nl as S,Bn as T,wp as U,Xk as V,dp as W,Re as X,bC as Y,Ue as Z,cp as _,n as a,fs as a0,ts as a1,Mt as a2,je as a3,li as a4,yk as a5,wk as a6,zk as a7,Tk as a8,Bi as a9,Lu as aa,xC as ab,ae as ac,O1 as ad,Su as ae,$k as af,Zs as ag,Wk as ah,P as b,Z as c,En as d,$ as e,me as f,T as g,z as h,x as i,Ck as j,D4 as k,xn as l,Qf as m,Nn as n,k as o,pa as p,Fn as q,Q as r,yC as s,we as t,wC as u,zC as v,fn as w,L as x,Jn as y,v as z};
