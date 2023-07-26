(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=a(i);fetch(i.href,l)}})();function jn(t,n){const a=Object.create(null),o=t.split(",");for(let i=0;i<o.length;i++)a[o[i]]=!0;return n?i=>!!a[i.toLowerCase()]:i=>!!a[i]}const qe=Object.freeze({}),Sa=Object.freeze([]),kt=()=>{},fp=()=>!1,Wf=/^on[^a-z]/,Ns=t=>Wf.test(t),To=t=>t.startsWith("onUpdate:"),De=Object.assign,Ql=(t,n)=>{const a=t.indexOf(n);a>-1&&t.splice(a,1)},Bf=Object.prototype.hasOwnProperty,Me=(t,n)=>Bf.call(t,n),ue=Array.isArray,ra=t=>qs(t)==="[object Map]",hp=t=>qs(t)==="[object Set]",Vf=t=>qs(t)==="[object RegExp]",fe=t=>typeof t=="function",We=t=>typeof t=="string",Yl=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Zl=t=>Ae(t)&&fe(t.then)&&fe(t.catch),gp=Object.prototype.toString,qs=t=>gp.call(t),Jl=t=>qs(t).slice(8,-1),_p=t=>qs(t)==="[object Object]",Xl=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fo=jn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uf=jn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Qo=t=>{const n=Object.create(null);return a=>n[a]||(n[a]=t(a))},Kf=/-(\w)/g,an=Qo(t=>t.replace(Kf,(n,a)=>a?a.toUpperCase():"")),Gf=/\B([A-Z])/g,_n=Qo(t=>t.replace(Gf,"-$1").toLowerCase()),ga=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yn=Qo(t=>t?`on${ga(t)}`:""),ws=(t,n)=>!Object.is(t,n),Jn=(t,n)=>{for(let a=0;a<t.length;a++)t[a](n)},$o=(t,n,a)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:a})},Qf=t=>{const n=parseFloat(t);return isNaN(n)?t:n},Yf=t=>{const n=We(t)?Number(t):NaN;return isNaN(n)?t:n};let Yr;const zo=()=>Yr||(Yr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tt(t){if(ue(t)){const n={};for(let a=0;a<t.length;a++){const o=t[a],i=We(o)?eh(o):tt(o);if(i)for(const l in i)n[l]=i[l]}return n}else{if(We(t))return t;if(Ae(t))return t}}const Zf=/;(?![^(]*\))/g,Jf=/:([^]+)/,Xf=/\/\*[^]*?\*\//g;function eh(t){const n={};return t.replace(Xf,"").split(Zf).forEach(a=>{if(a){const o=a.split(Jf);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Ve(t){let n="";if(We(t))n=t;else if(ue(t))for(let a=0;a<t.length;a++){const o=Ve(t[a]);o&&(n+=o+" ")}else if(Ae(t))for(const a in t)t[a]&&(n+=a+" ");return n.trim()}function j(t){if(!t)return null;let{class:n,style:a}=t;return n&&!We(n)&&(t.class=Ve(n)),a&&(t.style=tt(a)),t}const th="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",nh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",vp=jn(th),ah=jn(nh),sh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oh=jn(sh);function kp(t){return!!t||t===""}const vt=t=>We(t)?t:t==null?"":ue(t)||Ae(t)&&(t.toString===gp||!fe(t.toString))?JSON.stringify(t,bp,2):String(t),bp=(t,n)=>n&&n.__v_isRef?bp(t,n.value):ra(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((a,[o,i])=>(a[`${o} =>`]=i,a),{})}:hp(n)?{[`Set(${n.size})`]:[...n.values()]}:Ae(n)&&!ue(n)&&!_p(n)?String(n):n;function Mo(t,...n){console.warn(`[Vue warn] ${t}`,...n)}let Tt;class yp{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tt,!n&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const a=Tt;try{return Tt=this,n()}finally{Tt=a}}else Mo("cannot run an inactive effect scope.")}on(){Tt=this}off(){Tt=this.parent}stop(n){if(this._active){let a,o;for(a=0,o=this.effects.length;a<o;a++)this.effects[a].stop();for(a=0,o=this.cleanups.length;a<o;a++)this.cleanups[a]();if(this.scopes)for(a=0,o=this.scopes.length;a<o;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ih(t){return new yp(t)}function lh(t,n=Tt){n&&n.active&&n.effects.push(t)}function er(){return Tt}function wp(t){Tt?Tt.cleanups.push(t):Mo("onScopeDispose() is called when there is no active effect scope to be associated with.")}const tr=t=>{const n=new Set(t);return n.w=0,n.n=0,n},xp=t=>(t.w&Rn)>0,Tp=t=>(t.n&Rn)>0,rh=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=Rn},ch=t=>{const{deps:n}=t;if(n.length){let a=0;for(let o=0;o<n.length;o++){const i=n[o];xp(i)&&!Tp(i)?i.delete(t):n[a++]=i,i.w&=~Rn,i.n&=~Rn}n.length=a}},Lo=new WeakMap;let as=0,Rn=1;const Gi=30;let dt;const ca=Symbol("iterate"),Qi=Symbol("Map key iterate");class nr{constructor(n,a=null,o){this.fn=n,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,lh(this,o)}run(){if(!this.active)return this.fn();let n=dt,a=In;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=dt,dt=this,In=!0,Rn=1<<++as,as<=Gi?rh(this):Zr(this),this.fn()}finally{as<=Gi&&ch(this),Rn=1<<--as,dt=this.parent,In=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dt===this?this.deferStop=!0:this.active&&(Zr(this),this.onStop&&this.onStop(),this.active=!1)}}function Zr(t){const{deps:n}=t;if(n.length){for(let a=0;a<n.length;a++)n[a].delete(t);n.length=0}}let In=!0;const $p=[];function ka(){$p.push(In),In=!1}function ba(){const t=$p.pop();In=t===void 0?!0:t}function lt(t,n,a){if(In&&dt){let o=Lo.get(t);o||Lo.set(t,o=new Map);let i=o.get(a);i||o.set(a,i=tr()),zp(i,{effect:dt,target:t,type:n,key:a})}}function zp(t,n){let a=!1;as<=Gi?Tp(t)||(t.n|=Rn,a=!xp(t)):a=!t.has(dt),a&&(t.add(dt),dt.deps.push(t),dt.onTrack&&dt.onTrack(De({effect:dt},n)))}function sn(t,n,a,o,i,l){const r=Lo.get(t);if(!r)return;let c=[];if(n==="clear")c=[...r.values()];else if(a==="length"&&ue(t)){const p=Number(o);r.forEach((d,m)=>{(m==="length"||m>=p)&&c.push(d)})}else switch(a!==void 0&&c.push(r.get(a)),n){case"add":ue(t)?Xl(a)&&c.push(r.get("length")):(c.push(r.get(ca)),ra(t)&&c.push(r.get(Qi)));break;case"delete":ue(t)||(c.push(r.get(ca)),ra(t)&&c.push(r.get(Qi)));break;case"set":ra(t)&&c.push(r.get(ca));break}const u={target:t,type:n,key:a,newValue:o,oldValue:i,oldTarget:l};if(c.length===1)c[0]&&Yi(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);Yi(tr(p),u)}}function Yi(t,n){const a=ue(t)?t:[...t];for(const o of a)o.computed&&Jr(o,n);for(const o of a)o.computed||Jr(o,n)}function Jr(t,n){(t!==dt||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(De({effect:t},n)),t.scheduler?t.scheduler():t.run())}function uh(t,n){var a;return(a=Lo.get(t))==null?void 0:a.get(n)}const ph=jn("__proto__,__v_isRef,__isVue"),Mp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yl)),dh=Yo(),mh=Yo(!1,!0),fh=Yo(!0),hh=Yo(!0,!0),Xr=gh();function gh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...a){const o=_e(this);for(let l=0,r=this.length;l<r;l++)lt(o,"get",l+"");const i=o[n](...a);return i===-1||i===!1?o[n](...a.map(_e)):i}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...a){ka();const o=_e(this)[n].apply(this,a);return ba(),o}}),t}function _h(t){const n=_e(this);return lt(n,"has",t),n.hasOwnProperty(t)}function Yo(t=!1,n=!1){return function(o,i,l){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return n;if(i==="__v_raw"&&l===(t?n?Pp:Op:n?Ap:Cp).get(o))return o;const r=ue(o);if(!t){if(r&&Me(Xr,i))return Reflect.get(Xr,i,l);if(i==="hasOwnProperty")return _h}const c=Reflect.get(o,i,l);return(Yl(i)?Mp.has(i):ph(i))||(t||lt(o,"get",i),n)?c:Se(c)?r&&Xl(i)?c:c.value:Ae(c)?t?Bt(c):Be(c):c}}const vh=Lp(),kh=Lp(!0);function Lp(t=!1){return function(a,o,i,l){let r=a[o];if(Fn(r)&&Se(r)&&!Se(i))return!1;if(!t&&(!Io(i)&&!Fn(i)&&(r=_e(r),i=_e(i)),!ue(a)&&Se(r)&&!Se(i)))return r.value=i,!0;const c=ue(a)&&Xl(o)?Number(o)<a.length:Me(a,o),u=Reflect.set(a,o,i,l);return a===_e(l)&&(c?ws(i,r)&&sn(a,"set",o,i,r):sn(a,"add",o,i)),u}}function bh(t,n){const a=Me(t,n),o=t[n],i=Reflect.deleteProperty(t,n);return i&&a&&sn(t,"delete",n,void 0,o),i}function yh(t,n){const a=Reflect.has(t,n);return(!Yl(n)||!Mp.has(n))&&lt(t,"has",n),a}function wh(t){return lt(t,"iterate",ue(t)?"length":ca),Reflect.ownKeys(t)}const Ip={get:dh,set:vh,deleteProperty:bh,has:yh,ownKeys:wh},Ep={get:fh,set(t,n){return Mo(`Set operation on key "${String(n)}" failed: target is readonly.`,t),!0},deleteProperty(t,n){return Mo(`Delete operation on key "${String(n)}" failed: target is readonly.`,t),!0}},xh=De({},Ip,{get:mh,set:kh}),Th=De({},Ep,{get:hh}),ar=t=>t,Zo=t=>Reflect.getPrototypeOf(t);function Qs(t,n,a=!1,o=!1){t=t.__v_raw;const i=_e(t),l=_e(n);a||(n!==l&&lt(i,"get",n),lt(i,"get",l));const{has:r}=Zo(i),c=o?ar:a?sr:xs;if(r.call(i,n))return c(t.get(n));if(r.call(i,l))return c(t.get(l));t!==i&&t.get(n)}function Ys(t,n=!1){const a=this.__v_raw,o=_e(a),i=_e(t);return n||(t!==i&&lt(o,"has",t),lt(o,"has",i)),t===i?a.has(t):a.has(t)||a.has(i)}function Zs(t,n=!1){return t=t.__v_raw,!n&&lt(_e(t),"iterate",ca),Reflect.get(t,"size",t)}function ec(t){t=_e(t);const n=_e(this);return Zo(n).has.call(n,t)||(n.add(t),sn(n,"add",t,t)),this}function tc(t,n){n=_e(n);const a=_e(this),{has:o,get:i}=Zo(a);let l=o.call(a,t);l?Sp(a,o,t):(t=_e(t),l=o.call(a,t));const r=i.call(a,t);return a.set(t,n),l?ws(n,r)&&sn(a,"set",t,n,r):sn(a,"add",t,n),this}function nc(t){const n=_e(this),{has:a,get:o}=Zo(n);let i=a.call(n,t);i?Sp(n,a,t):(t=_e(t),i=a.call(n,t));const l=o?o.call(n,t):void 0,r=n.delete(t);return i&&sn(n,"delete",t,void 0,l),r}function ac(){const t=_e(this),n=t.size!==0,a=ra(t)?new Map(t):new Set(t),o=t.clear();return n&&sn(t,"clear",void 0,void 0,a),o}function Js(t,n){return function(o,i){const l=this,r=l.__v_raw,c=_e(r),u=n?ar:t?sr:xs;return!t&&lt(c,"iterate",ca),r.forEach((p,d)=>o.call(i,u(p),u(d),l))}}function Xs(t,n,a){return function(...o){const i=this.__v_raw,l=_e(i),r=ra(l),c=t==="entries"||t===Symbol.iterator&&r,u=t==="keys"&&r,p=i[t](...o),d=a?ar:n?sr:xs;return!n&&lt(l,"iterate",u?Qi:ca),{next(){const{value:m,done:f}=p.next();return f?{value:m,done:f}:{value:c?[d(m[0]),d(m[1])]:d(m),done:f}},[Symbol.iterator](){return this}}}}function bn(t){return function(...n){{const a=n[0]?`on key "${n[0]}" `:"";console.warn(`${ga(t)} operation ${a}failed: target is readonly.`,_e(this))}return t==="delete"?!1:this}}function $h(){const t={get(l){return Qs(this,l)},get size(){return Zs(this)},has:Ys,add:ec,set:tc,delete:nc,clear:ac,forEach:Js(!1,!1)},n={get(l){return Qs(this,l,!1,!0)},get size(){return Zs(this)},has:Ys,add:ec,set:tc,delete:nc,clear:ac,forEach:Js(!1,!0)},a={get(l){return Qs(this,l,!0)},get size(){return Zs(this,!0)},has(l){return Ys.call(this,l,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Js(!0,!1)},o={get(l){return Qs(this,l,!0,!0)},get size(){return Zs(this,!0)},has(l){return Ys.call(this,l,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{t[l]=Xs(l,!1,!1),a[l]=Xs(l,!0,!1),n[l]=Xs(l,!1,!0),o[l]=Xs(l,!0,!0)}),[t,a,n,o]}const[zh,Mh,Lh,Ih]=$h();function Jo(t,n){const a=n?t?Ih:Lh:t?Mh:zh;return(o,i,l)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?o:Reflect.get(Me(a,i)&&i in o?a:o,i,l)}const Eh={get:Jo(!1,!1)},Sh={get:Jo(!1,!0)},Ch={get:Jo(!0,!1)},Ah={get:Jo(!0,!0)};function Sp(t,n,a){const o=_e(a);if(o!==a&&n.call(t,o)){const i=Jl(t);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Cp=new WeakMap,Ap=new WeakMap,Op=new WeakMap,Pp=new WeakMap;function Oh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ph(t){return t.__v_skip||!Object.isExtensible(t)?0:Oh(Jl(t))}function Be(t){return Fn(t)?t:Xo(t,!1,Ip,Eh,Cp)}function Hh(t){return Xo(t,!1,xh,Sh,Ap)}function Bt(t){return Xo(t,!0,Ep,Ch,Op)}function ss(t){return Xo(t,!0,Th,Ah,Pp)}function Xo(t,n,a,o,i){if(!Ae(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(n&&t.__v_isReactive))return t;const l=i.get(t);if(l)return l;const r=Ph(t);if(r===0)return t;const c=new Proxy(t,r===2?o:a);return i.set(t,c),c}function ua(t){return Fn(t)?ua(t.__v_raw):!!(t&&t.__v_isReactive)}function Fn(t){return!!(t&&t.__v_isReadonly)}function Io(t){return!!(t&&t.__v_isShallow)}function Eo(t){return ua(t)||Fn(t)}function _e(t){const n=t&&t.__v_raw;return n?_e(n):t}function ei(t){return $o(t,"__v_skip",!0),t}const xs=t=>Ae(t)?Be(t):t,sr=t=>Ae(t)?Bt(t):t;function or(t){In&&dt&&(t=_e(t),zp(t.dep||(t.dep=tr()),{target:t,type:"get",key:"value"}))}function ir(t,n){t=_e(t);const a=t.dep;a&&Yi(a,{target:t,type:"set",key:"value",newValue:n})}function Se(t){return!!(t&&t.__v_isRef===!0)}function J(t){return Hp(t,!1)}function on(t){return Hp(t,!0)}function Hp(t,n){return Se(t)?t:new Rh(t,n)}class Rh{constructor(n,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?n:_e(n),this._value=a?n:xs(n)}get value(){return or(this),this._value}set value(n){const a=this.__v_isShallow||Io(n)||Fn(n);n=a?n:_e(n),ws(n,this._rawValue)&&(this._rawValue=n,this._value=a?n:xs(n),ir(this,n))}}function A(t){return Se(t)?t.value:t}const Fh={get:(t,n,a)=>A(Reflect.get(t,n,a)),set:(t,n,a,o)=>{const i=t[n];return Se(i)&&!Se(a)?(i.value=a,!0):Reflect.set(t,n,a,o)}};function Rp(t){return ua(t)?t:new Proxy(t,Fh)}class Nh{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:o}=n(()=>or(this),()=>ir(this));this._get=a,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function lr(t){return new Nh(t)}function qh(t){Eo(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=ue(t)?new Array(t.length):{};for(const a in t)n[a]=Fp(t,a);return n}class jh{constructor(n,a,o){this._object=n,this._key=a,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return uh(_e(this._object),this._key)}}class Dh{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Wh(t,n,a){return Se(t)?t:fe(t)?new Dh(t):Ae(t)&&arguments.length>1?Fp(t,n,a):J(t)}function Fp(t,n,a){const o=t[n];return Se(o)?o:new jh(t,n,a)}class Bh{constructor(n,a,o,i){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new nr(n,()=>{this._dirty||(this._dirty=!0,ir(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=o}get value(){const n=_e(this);return or(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function Vh(t,n,a=!1){let o,i;const l=fe(t);l?(o=t,i=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=t.get,i=t.set);const r=new Bh(o,i,l||!i,a);return n&&!a&&(r.effect.onTrack=n.onTrack,r.effect.onTrigger=n.onTrigger),r}const pa=[];function ho(t){pa.push(t)}function go(){pa.pop()}function V(t,...n){ka();const a=pa.length?pa[pa.length-1].component:null,o=a&&a.appContext.config.warnHandler,i=Uh();if(o)gn(o,a,11,[t+n.join(""),a&&a.proxy,i.map(({vnode:l})=>`at <${ui(a,l.type)}>`).join(`
`),i]);else{const l=[`[Vue warn]: ${t}`,...n];i.length&&l.push(`
`,...Kh(i)),console.warn(...l)}ba()}function Uh(){let t=pa[pa.length-1];if(!t)return[];const n=[];for(;t;){const a=n[0];a&&a.vnode===t?a.recurseCount++:n.push({vnode:t,recurseCount:0});const o=t.component&&t.component.parent;t=o&&o.vnode}return n}function Kh(t){const n=[];return t.forEach((a,o)=>{n.push(...o===0?[]:[`
`],...Gh(a))}),n}function Gh({vnode:t,recurseCount:n}){const a=n>0?`... (${n} recursive calls)`:"",o=t.component?t.component.parent==null:!1,i=` at <${ui(t.component,t.type,o)}`,l=">"+a;return t.props?[i,...Qh(t.props),l]:[i+l]}function Qh(t){const n=[],a=Object.keys(t);return a.slice(0,3).forEach(o=>{n.push(...Np(o,t[o]))}),a.length>3&&n.push(" ..."),n}function Np(t,n,a){return We(n)?(n=JSON.stringify(n),a?n:[`${t}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?a?n:[`${t}=${n}`]:Se(n)?(n=Np(t,_e(n.value),!0),a?n:[`${t}=Ref<`,n,">"]):fe(n)?[`${t}=fn${n.name?`<${n.name}>`:""}`]:(n=_e(n),a?n:[`${t}=`,n])}function Yh(t,n){t!==void 0&&(typeof t!="number"?V(`${n} is not a valid number - got ${JSON.stringify(t)}.`):isNaN(t)&&V(`${n} is NaN - the duration expression might be incorrect.`))}const rr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function gn(t,n,a,o){let i;try{i=o?t(...o):t()}catch(l){ti(l,n,a)}return i}function Ht(t,n,a,o){if(fe(t)){const l=gn(t,n,a,o);return l&&Zl(l)&&l.catch(r=>{ti(r,n,a)}),l}const i=[];for(let l=0;l<t.length;l++)i.push(Ht(t[l],n,a,o));return i}function ti(t,n,a,o=!0){const i=n?n.vnode:null;if(n){let l=n.parent;const r=n.proxy,c=rr[a];for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](t,r,c)===!1)return}l=l.parent}const u=n.appContext.config.errorHandler;if(u){gn(u,null,10,[t,r,c]);return}}Zh(t,a,i,o)}function Zh(t,n,a,o=!0){{const i=rr[n];if(a&&ho(a),V(`Unhandled error${i?` during execution of ${i}`:""}`),a&&go(),o)throw t;console.error(t)}}let Ts=!1,Zi=!1;const at=[];let Jt=0;const Ca=[];let Zt=null,Tn=0;const qp=Promise.resolve();let cr=null;const Jh=100;function st(t){const n=cr||qp;return t?n.then(this?t.bind(this):t):n}function Xh(t){let n=Jt+1,a=at.length;for(;n<a;){const o=n+a>>>1;$s(at[o])<t?n=o+1:a=o}return n}function ni(t){(!at.length||!at.includes(t,Ts&&t.allowRecurse?Jt+1:Jt))&&(t.id==null?at.push(t):at.splice(Xh(t.id),0,t),jp())}function jp(){!Ts&&!Zi&&(Zi=!0,cr=qp.then(Bp))}function eg(t){const n=at.indexOf(t);n>Jt&&at.splice(n,1)}function Dp(t){ue(t)?Ca.push(...t):(!Zt||!Zt.includes(t,t.allowRecurse?Tn+1:Tn))&&Ca.push(t),jp()}function sc(t,n=Ts?Jt+1:0){for(t=t||new Map;n<at.length;n++){const a=at[n];if(a&&a.pre){if(ur(t,a))continue;at.splice(n,1),n--,a()}}}function Wp(t){if(Ca.length){const n=[...new Set(Ca)];if(Ca.length=0,Zt){Zt.push(...n);return}for(Zt=n,t=t||new Map,Zt.sort((a,o)=>$s(a)-$s(o)),Tn=0;Tn<Zt.length;Tn++)ur(t,Zt[Tn])||Zt[Tn]();Zt=null,Tn=0}}const $s=t=>t.id==null?1/0:t.id,tg=(t,n)=>{const a=$s(t)-$s(n);if(a===0){if(t.pre&&!n.pre)return-1;if(n.pre&&!t.pre)return 1}return a};function Bp(t){Zi=!1,Ts=!0,t=t||new Map,at.sort(tg);const n=a=>ur(t,a);try{for(Jt=0;Jt<at.length;Jt++){const a=at[Jt];if(a&&a.active!==!1){if(n(a))continue;gn(a,null,14)}}}finally{Jt=0,at.length=0,Wp(t),Ts=!1,cr=null,(at.length||Ca.length)&&Bp(t)}}function ur(t,n){if(!t.has(n))t.set(n,1);else{const a=t.get(n);if(a>Jh){const o=n.ownerInstance,i=o&&Ls(o.type);return V(`Maximum recursive updates exceeded${i?` in component <${i}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(n,a+1)}}let En=!1;const Ia=new Set;zo().__VUE_HMR_RUNTIME__={createRecord:gi(Vp),rerender:gi(sg),reload:gi(og)};const _a=new Map;function ng(t){const n=t.type.__hmrId;let a=_a.get(n);a||(Vp(n,t.type),a=_a.get(n)),a.instances.add(t)}function ag(t){_a.get(t.type.__hmrId).instances.delete(t)}function Vp(t,n){return _a.has(t)?!1:(_a.set(t,{initialDef:us(n),instances:new Set}),!0)}function us(t){return xd(t)?t.__vccOpts:t}function sg(t,n){const a=_a.get(t);a&&(a.initialDef.render=n,[...a.instances].forEach(o=>{n&&(o.render=n,us(o.type).render=n),o.renderCache=[],En=!0,o.update(),En=!1}))}function og(t,n){const a=_a.get(t);if(!a)return;n=us(n),oc(a.initialDef,n);const o=[...a.instances];for(const i of o){const l=us(i.type);Ia.has(l)||(l!==a.initialDef&&oc(l,n),Ia.add(l)),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(Ia.add(l),i.ceReload(n.styles),Ia.delete(l)):i.parent?ni(i.parent.update):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Dp(()=>{for(const i of o)Ia.delete(us(i.type))})}function oc(t,n){De(t,n);for(const a in t)a!=="__file"&&!(a in n)&&delete t[a]}function gi(t){return(n,a)=>{try{return t(n,a)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Xt,os=[],Ji=!1;function js(t,...n){Xt?Xt.emit(t,...n):Ji||os.push({event:t,args:n})}function Up(t,n){var a,o;Xt=t,Xt?(Xt.enabled=!0,os.forEach(({event:i,args:l})=>Xt.emit(i,...l)),os=[]):typeof window<"u"&&window.HTMLElement&&!((o=(a=window.navigator)==null?void 0:a.userAgent)!=null&&o.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Up(l,n)}),setTimeout(()=>{Xt||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ji=!0,os=[])},3e3)):(Ji=!0,os=[])}function ig(t,n){js("app:init",t,n,{Fragment:Ce,Text:Ws,Comment:mt,Static:_o})}function lg(t){js("app:unmount",t)}const Xi=pr("component:added"),Kp=pr("component:updated"),rg=pr("component:removed"),cg=t=>{Xt&&typeof Xt.cleanupBuffer=="function"&&!Xt.cleanupBuffer(t)&&rg(t)};function pr(t){return n=>{js(t,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const ug=Gp("perf:start"),pg=Gp("perf:end");function Gp(t){return(n,a,o)=>{js(t,n.appContext.app,n.uid,n,a,o)}}function dg(t,n,a){js("component:emit",t.appContext.app,t,n,a)}function mg(t,n,...a){if(t.isUnmounted)return;const o=t.vnode.props||qe;{const{emitsOptions:d,propsOptions:[m]}=t;if(d)if(!(n in d))(!m||!(Yn(n)in m))&&V(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${Yn(n)}" prop.`);else{const f=d[n];fe(f)&&(f(...a)||V(`Invalid event arguments: event validation failed for event "${n}".`))}}let i=a;const l=n.startsWith("update:"),r=l&&n.slice(7);if(r&&r in o){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:m,trim:f}=o[d]||qe;f&&(i=a.map(h=>We(h)?h.trim():h)),m&&(i=a.map(Qf))}dg(t,n,i);{const d=n.toLowerCase();d!==n&&o[Yn(d)]&&V(`Event "${d}" is emitted in component ${ui(t,t.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_n(n)}" instead of "${n}".`)}let c,u=o[c=Yn(n)]||o[c=Yn(an(n))];!u&&l&&(u=o[c=Yn(_n(n))]),u&&Ht(u,t,6,i);const p=o[c+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ht(p,t,6,i)}}function Qp(t,n,a=!1){const o=n.emitsCache,i=o.get(t);if(i!==void 0)return i;const l=t.emits;let r={},c=!1;if(!fe(t)){const u=p=>{const d=Qp(p,n,!0);d&&(c=!0,De(r,d))};!a&&n.mixins.length&&n.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!l&&!c?(Ae(t)&&o.set(t,null),null):(ue(l)?l.forEach(u=>r[u]=null):De(r,l),Ae(t)&&o.set(t,r),r)}function ai(t,n){return!t||!Ns(n)?!1:(n=n.slice(2).replace(/Once$/,""),Me(t,n[0].toLowerCase()+n.slice(1))||Me(t,_n(n))||Me(t,n))}let Je=null,si=null;function So(t){const n=Je;return Je=t,si=t&&t.type.__scopeId||null,n}function x9(t){si=t}function T9(){si=null}function w(t,n=Je,a){if(!n||t._n)return t;const o=(...i)=>{o._d&&kc(-1);const l=So(n);let r;try{r=t(...i)}finally{So(l),o._d&&kc(1)}return Kp(n),r};return o._n=!0,o._c=!0,o._d=!0,o}let el=!1;function Co(){el=!0}function _i(t){const{type:n,vnode:a,proxy:o,withProxy:i,props:l,propsOptions:[r],slots:c,attrs:u,emit:p,render:d,renderCache:m,data:f,setupState:h,ctx:g,inheritAttrs:y}=t;let x,T;const $=So(t);el=!1;try{if(a.shapeFlag&4){const M=i||o;x=Wt(d.call(M,M,m,l,h,f,g)),T=u}else{const M=n;u===l&&Co(),x=Wt(M.length>1?M(l,{get attrs(){return Co(),u},slots:c,emit:p}):M(l,null)),T=n.props?u:hg(u)}}catch(M){ps.length=0,ti(M,t,1),x=O(mt)}let v=x,E;if(x.patchFlag>0&&x.patchFlag&2048&&([v,E]=fg(x)),T&&y!==!1){const M=Object.keys(T),{shapeFlag:P}=v;if(M.length){if(P&7)r&&M.some(To)&&(T=gg(T,r)),v=ln(v,T);else if(!el&&v.type!==mt){const B=Object.keys(u),R=[],K=[];for(let ie=0,me=B.length;ie<me;ie++){const X=B[ie];Ns(X)?To(X)||R.push(X[2].toLowerCase()+X.slice(3)):K.push(X)}K.length&&V(`Extraneous non-props attributes (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),R.length&&V(`Extraneous non-emits event listeners (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return a.dirs&&(ic(v)||V("Runtime directive used on component with non-element root node. The directives will not function as intended."),v=ln(v),v.dirs=v.dirs?v.dirs.concat(a.dirs):a.dirs),a.transition&&(ic(v)||V("Component inside <Transition> renders non-element root node that cannot be animated."),v.transition=a.transition),E?E(v):x=v,So($),x}const fg=t=>{const n=t.children,a=t.dynamicChildren,o=Yp(n);if(!o)return[t,void 0];const i=n.indexOf(o),l=a?a.indexOf(o):-1,r=c=>{n[i]=c,a&&(l>-1?a[l]=c:c.patchFlag>0&&(t.dynamicChildren=[...a,c]))};return[Wt(o),r]};function Yp(t){let n;for(let a=0;a<t.length;a++){const o=t[a];if(Nn(o)){if(o.type!==mt||o.children==="v-if"){if(n)return;n=o}}else return}return n}const hg=t=>{let n;for(const a in t)(a==="class"||a==="style"||Ns(a))&&((n||(n={}))[a]=t[a]);return n},gg=(t,n)=>{const a={};for(const o in t)(!To(o)||!(o.slice(9)in n))&&(a[o]=t[o]);return a},ic=t=>t.shapeFlag&7||t.type===mt;function _g(t,n,a){const{props:o,children:i,component:l}=t,{props:r,children:c,patchFlag:u}=n,p=l.emitsOptions;if((i||c)&&En||n.dirs||n.transition)return!0;if(a&&u>=0){if(u&1024)return!0;if(u&16)return o?lc(o,r,p):!!r;if(u&8){const d=n.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(r[f]!==o[f]&&!ai(p,f))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:o===r?!1:o?r?lc(o,r,p):!0:!!r;return!1}function lc(t,n,a){const o=Object.keys(n);if(o.length!==Object.keys(t).length)return!0;for(let i=0;i<o.length;i++){const l=o[i];if(n[l]!==t[l]&&!ai(a,l))return!0}return!1}function vg({vnode:t,parent:n},a){for(;n&&n.subTree===t;)(t=n.vnode).el=a,n=n.parent}const Zp=t=>t.__isSuspense;function kg(t,n){n&&n.pendingBranch?ue(t)?n.effects.push(...t):n.effects.push(t):Dp(t)}function ya(t,n){return dr(t,null,n)}const eo={};function ke(t,n,a){return fe(n)||V("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),dr(t,n,a)}function dr(t,n,{immediate:a,deep:o,flush:i,onTrack:l,onTrigger:r}=qe){var c;n||(a!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const u=M=>{V("Invalid watch source: ",M,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=er()===((c=Ze)==null?void 0:c.scope)?Ze:null;let d,m=!1,f=!1;if(Se(t)?(d=()=>t.value,m=Io(t)):ua(t)?(d=()=>t,o=!0):ue(t)?(f=!0,m=t.some(M=>ua(M)||Io(M)),d=()=>t.map(M=>{if(Se(M))return M.value;if(ua(M))return oa(M);if(fe(M))return gn(M,p,2);u(M)})):fe(t)?n?d=()=>gn(t,p,2):d=()=>{if(!(p&&p.isUnmounted))return h&&h(),Ht(t,p,3,[g])}:(d=kt,u(t)),n&&o){const M=d;d=()=>oa(M())}let h,g=M=>{h=v.onStop=()=>{gn(M,p,4)}},y;if(Ms)if(g=kt,n?a&&Ht(n,p,3,[d(),f?[]:void 0,g]):d(),i==="sync"){const M=M_();y=M.__watcherHandles||(M.__watcherHandles=[])}else return kt;let x=f?new Array(t.length).fill(eo):eo;const T=()=>{if(v.active)if(n){const M=v.run();(o||m||(f?M.some((P,B)=>ws(P,x[B])):ws(M,x)))&&(h&&h(),Ht(n,p,3,[M,x===eo?void 0:f&&x[0]===eo?[]:x,g]),x=M)}else v.run()};T.allowRecurse=!!n;let $;i==="sync"?$=T:i==="post"?$=()=>et(T,p&&p.suspense):(T.pre=!0,p&&(T.id=p.uid),$=()=>ni(T));const v=new nr(d,$);v.onTrack=l,v.onTrigger=r,n?a?T():x=v.run():i==="post"?et(v.run.bind(v),p&&p.suspense):v.run();const E=()=>{v.stop(),p&&p.scope&&Ql(p.scope.effects,v)};return y&&y.push(E),E}function bg(t,n,a){const o=this.proxy,i=We(t)?t.includes(".")?Jp(o,t):()=>o[t]:t.bind(o,o);let l;fe(n)?l=n:(l=n.handler,a=n);const r=Ze;Ha(this);const c=dr(i,l.bind(o),a);return r?Ha(r):ma(),c}function Jp(t,n){const a=n.split(".");return()=>{let o=t;for(let i=0;i<a.length&&o;i++)o=o[a[i]];return o}}function oa(t,n){if(!Ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),Se(t))oa(t.value,n);else if(ue(t))for(let a=0;a<t.length;a++)oa(t[a],n);else if(hp(t)||ra(t))t.forEach(a=>{oa(a,n)});else if(_p(t))for(const a in t)oa(t[a],n);return t}function Xp(t){Uf(t)&&V("Do not use built-in directive ids as custom directive id: "+t)}function ed(t,n){const a=Je;if(a===null)return V("withDirectives can only be used inside render functions."),t;const o=ci(a)||a.proxy,i=t.dirs||(t.dirs=[]);for(let l=0;l<n.length;l++){let[r,c,u,p=qe]=n[l];r&&(fe(r)&&(r={mounted:r,updated:r}),r.deep&&oa(c),i.push({dir:r,instance:o,value:c,oldValue:void 0,arg:u,modifiers:p}))}return t}function Vn(t,n,a,o){const i=t.dirs,l=n&&n.dirs;for(let r=0;r<i.length;r++){const c=i[r];l&&(c.oldValue=l[r].value);let u=c.dir[o];u&&(ka(),Ht(u,a,8,[t.el,c,t,n]),ba())}}function yg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dn(()=>{t.isMounted=!0}),Ds(()=>{t.isUnmounting=!0}),t}const Ct=[Function,Array],wg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ct,onEnter:Ct,onAfterEnter:Ct,onEnterCancelled:Ct,onBeforeLeave:Ct,onLeave:Ct,onAfterLeave:Ct,onLeaveCancelled:Ct,onBeforeAppear:Ct,onAppear:Ct,onAfterAppear:Ct,onAppearCancelled:Ct};function xg(t,n){const{leavingVNodes:a}=t;let o=a.get(n.type);return o||(o=Object.create(null),a.set(n.type,o)),o}function tl(t,n,a,o){const{appear:i,mode:l,persisted:r=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:m,onLeave:f,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:y,onAppear:x,onAfterAppear:T,onAppearCancelled:$}=n,v=String(t.key),E=xg(a,t),M=(R,K)=>{R&&Ht(R,o,9,K)},P=(R,K)=>{const ie=K[1];M(R,K),ue(R)?R.every(me=>me.length<=1)&&ie():R.length<=1&&ie()},B={mode:l,persisted:r,beforeEnter(R){let K=c;if(!a.isMounted)if(i)K=y||c;else return;R._leaveCb&&R._leaveCb(!0);const ie=E[v];ie&&Xn(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),M(K,[R])},enter(R){let K=u,ie=p,me=d;if(!a.isMounted)if(i)K=x||u,ie=T||p,me=$||d;else return;let X=!1;const ve=R._enterCb=be=>{X||(X=!0,be?M(me,[R]):M(ie,[R]),B.delayedLeave&&B.delayedLeave(),R._enterCb=void 0)};K?P(K,[R,ve]):ve()},leave(R,K){const ie=String(t.key);if(R._enterCb&&R._enterCb(!0),a.isUnmounting)return K();M(m,[R]);let me=!1;const X=R._leaveCb=ve=>{me||(me=!0,K(),ve?M(g,[R]):M(h,[R]),R._leaveCb=void 0,E[ie]===t&&delete E[ie])};E[ie]=t,f?P(f,[R,X]):X()},clone(R){return tl(R,n,a,o)}};return B}function Ao(t,n){t.shapeFlag&6&&t.component?Ao(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function td(t,n=!1,a){let o=[],i=0;for(let l=0;l<t.length;l++){let r=t[l];const c=a==null?r.key:String(a)+String(r.key!=null?r.key:l);r.type===Ce?(r.patchFlag&128&&i++,o=o.concat(td(r.children,n,c))):(n||r.type!==mt)&&o.push(c!=null?ln(r,{key:c}):r)}if(i>1)for(let l=0;l<o.length;l++)o[l].patchFlag=-2;return o}function Pe(t,n){return fe(t)?(()=>De({name:t.name},n,{setup:t}))():t}const Aa=t=>!!t.type.__asyncLoader,mr=t=>t.type.__isKeepAlive,Tg={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:n}){const a=It(),o=a.ctx;if(!o.renderer)return()=>{const $=n.default&&n.default();return $&&$.length===1?$[0]:$};const i=new Map,l=new Set;let r=null;a.__v_cache=i;const c=a.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:m}}}=o,f=m("div");o.activate=($,v,E,M,P)=>{const B=$.component;p($,v,E,0,c),u(B.vnode,$,v,E,B,c,M,$.slotScopeIds,P),et(()=>{B.isDeactivated=!1,B.a&&Jn(B.a);const R=$.props&&$.props.onVnodeMounted;R&&At(R,B.parent,$)},c),Xi(B)},o.deactivate=$=>{const v=$.component;p($,f,null,1,c),et(()=>{v.da&&Jn(v.da);const E=$.props&&$.props.onVnodeUnmounted;E&&At(E,v.parent,$),v.isDeactivated=!0},c),Xi(v)};function h($){vi($),d($,a,c,!0)}function g($){i.forEach((v,E)=>{const M=Ls(v.type);M&&(!$||!$(M))&&y(E)})}function y($){const v=i.get($);!r||!Xn(v,r)?h(v):r&&vi(r),i.delete($),l.delete($)}ke(()=>[t.include,t.exclude],([$,v])=>{$&&g(E=>is($,E)),v&&g(E=>!is(v,E))},{flush:"post",deep:!0});let x=null;const T=()=>{x!=null&&i.set(x,ki(a.subTree))};return Dn(T),ii(T),Ds(()=>{i.forEach($=>{const{subTree:v,suspense:E}=a,M=ki(v);if($.type===M.type&&$.key===M.key){vi(M);const P=M.component.da;P&&et(P,E);return}h($)})}),()=>{if(x=null,!n.default)return null;const $=n.default(),v=$[0];if($.length>1)return V("KeepAlive should contain exactly one component child."),r=null,$;if(!Nn(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return r=null,v;let E=ki(v);const M=E.type,P=Ls(Aa(E)?E.type.__asyncResolved||{}:M),{include:B,exclude:R,max:K}=t;if(B&&(!P||!is(B,P))||R&&P&&is(R,P))return r=E,v;const ie=E.key==null?M:E.key,me=i.get(ie);return E.el&&(E=ln(E),v.shapeFlag&128&&(v.ssContent=E)),x=ie,me?(E.el=me.el,E.component=me.component,E.transition&&Ao(E,E.transition),E.shapeFlag|=512,l.delete(ie),l.add(ie)):(l.add(ie),K&&l.size>parseInt(K,10)&&y(l.values().next().value)),E.shapeFlag|=256,r=E,Zp(v.type)?v:E}}},nd=Tg;function is(t,n){return ue(t)?t.some(a=>is(a,n)):We(t)?t.split(",").includes(n):Vf(t)?t.test(n):!1}function ad(t,n){od(t,"a",n)}function sd(t,n){od(t,"da",n)}function od(t,n,a=Ze){const o=t.__wdc||(t.__wdc=()=>{let i=a;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(oi(n,o,a),a){let i=a.parent;for(;i&&i.parent;)mr(i.parent.vnode)&&$g(o,n,a,i),i=i.parent}}function $g(t,n,a,o){const i=oi(n,t,o,!0);li(()=>{Ql(o[n],i)},a)}function vi(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ki(t){return t.shapeFlag&128?t.ssContent:t}function oi(t,n,a=Ze,o=!1){if(a){const i=a[t]||(a[t]=[]),l=n.__weh||(n.__weh=(...r)=>{if(a.isUnmounted)return;ka(),Ha(a);const c=Ht(n,a,t,r);return ma(),ba(),c});return o?i.unshift(l):i.push(l),l}else{const i=Yn(rr[t].replace(/ hook$/,""));V(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const kn=t=>(n,a=Ze)=>(!Ms||t==="sp")&&oi(t,(...o)=>n(...o),a),zg=kn("bm"),Dn=kn("m"),Mg=kn("bu"),ii=kn("u"),Ds=kn("bum"),li=kn("um"),Lg=kn("sp"),Ig=kn("rtg"),Eg=kn("rtc");function Sg(t,n=Ze){oi("ec",t,n)}const nl="components";function va(t,n){return Ag(nl,t,!0,n)||t}const Cg=Symbol.for("v-ndc");function Ag(t,n,a=!0,o=!1){const i=Je||Ze;if(i){const l=i.type;if(t===nl){const c=Ls(l,!1);if(c&&(c===n||c===an(n)||c===ga(an(n))))return l}const r=rc(i[t]||l[t],n)||rc(i.appContext[t],n);if(!r&&o)return l;if(a&&!r){const c=t===nl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";V(`Failed to resolve ${t.slice(0,-1)}: ${n}${c}`)}return r}else V(`resolve${ga(t.slice(0,-1))} can only be used in render() or setup().`)}function rc(t,n){return t&&(t[n]||t[an(n)]||t[ga(an(n))])}function qa(t,n,a,o){let i;const l=a&&a[o];if(ue(t)||We(t)){i=new Array(t.length);for(let r=0,c=t.length;r<c;r++)i[r]=n(t[r],r,void 0,l&&l[r])}else if(typeof t=="number"){Number.isInteger(t)||V(`The v-for range expect an integer value but got ${t}.`),i=new Array(t);for(let r=0;r<t;r++)i[r]=n(r+1,r,void 0,l&&l[r])}else if(Ae(t))if(t[Symbol.iterator])i=Array.from(t,(r,c)=>n(r,c,void 0,l&&l[c]));else{const r=Object.keys(t);i=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const p=r[c];i[c]=n(t[p],p,c,l&&l[c])}}else i=[];return a&&(a[o]=i),i}function Ut(t,n,a={},o,i){if(Je.isCE||Je.parent&&Aa(Je.parent)&&Je.parent.isCE)return n!=="default"&&(a.name=n),O("slot",a,o&&o());let l=t[n];l&&l.length>1&&(V("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),b();const r=l&&id(l(a)),c=L(Ce,{key:a.key||r&&r.key||`_${n}`},r||(o?o():[]),r&&t._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function id(t){return t.some(n=>Nn(n)?!(n.type===mt||n.type===Ce&&!id(n.children)):!0)?t:null}const al=t=>t?bd(t)?ci(t)||t.proxy:al(t.parent):null,da=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>ss(t.props),$attrs:t=>ss(t.attrs),$slots:t=>ss(t.slots),$refs:t=>ss(t.refs),$parent:t=>al(t.parent),$root:t=>al(t.root),$emit:t=>t.emit,$options:t=>hr(t),$forceUpdate:t=>t.f||(t.f=()=>ni(t.update)),$nextTick:t=>t.n||(t.n=st.bind(t.proxy)),$watch:t=>bg.bind(t)}),fr=t=>t==="_"||t==="$",bi=(t,n)=>t!==qe&&!t.__isScriptSetup&&Me(t,n),ld={get({_:t},n){const{ctx:a,setupState:o,data:i,props:l,accessCache:r,type:c,appContext:u}=t;if(n==="__isVue")return!0;let p;if(n[0]!=="$"){const h=r[n];if(h!==void 0)switch(h){case 1:return o[n];case 2:return i[n];case 4:return a[n];case 3:return l[n]}else{if(bi(o,n))return r[n]=1,o[n];if(i!==qe&&Me(i,n))return r[n]=2,i[n];if((p=t.propsOptions[0])&&Me(p,n))return r[n]=3,l[n];if(a!==qe&&Me(a,n))return r[n]=4,a[n];sl&&(r[n]=0)}}const d=da[n];let m,f;if(d)return n==="$attrs"?(lt(t,"get",n),Co()):n==="$slots"&&lt(t,"get",n),d(t);if((m=c.__cssModules)&&(m=m[n]))return m;if(a!==qe&&Me(a,n))return r[n]=4,a[n];if(f=u.config.globalProperties,Me(f,n))return f[n];Je&&(!We(n)||n.indexOf("__v")!==0)&&(i!==qe&&fr(n[0])&&Me(i,n)?V(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===Je&&V(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:t},n,a){const{data:o,setupState:i,ctx:l}=t;return bi(i,n)?(i[n]=a,!0):i.__isScriptSetup&&Me(i,n)?(V(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):o!==qe&&Me(o,n)?(o[n]=a,!0):Me(t.props,n)?(V(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in t?(V(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in t.appContext.config.globalProperties?Object.defineProperty(l,n,{enumerable:!0,configurable:!0,value:a}):l[n]=a,!0)},has({_:{data:t,setupState:n,accessCache:a,ctx:o,appContext:i,propsOptions:l}},r){let c;return!!a[r]||t!==qe&&Me(t,r)||bi(n,r)||(c=l[0])&&Me(c,r)||Me(o,r)||Me(da,r)||Me(i.config.globalProperties,r)},defineProperty(t,n,a){return a.get!=null?t._.accessCache[n]=0:Me(a,"value")&&this.set(t,n,a.value,null),Reflect.defineProperty(t,n,a)}};ld.ownKeys=t=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function Og(t){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(da).forEach(a=>{Object.defineProperty(n,a,{configurable:!0,enumerable:!1,get:()=>da[a](t),set:kt})}),n}function Pg(t){const{ctx:n,propsOptions:[a]}=t;a&&Object.keys(a).forEach(o=>{Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>t.props[o],set:kt})})}function Hg(t){const{ctx:n,setupState:a}=t;Object.keys(_e(a)).forEach(o=>{if(!a.__isScriptSetup){if(fr(o[0])){V(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>a[o],set:kt})}})}function Rg(){return Fg().slots}function Fg(){const t=It();return t||V("useContext() called without active instance."),t.setupContext||(t.setupContext=wd(t))}function cc(t){return ue(t)?t.reduce((n,a)=>(n[a]=null,n),{}):t}function Ng(){const t=Object.create(null);return(n,a)=>{t[a]?V(`${n} property "${a}" is already defined in ${t[a]}.`):t[a]=n}}let sl=!0;function qg(t){const n=hr(t),a=t.proxy,o=t.ctx;sl=!1,n.beforeCreate&&uc(n.beforeCreate,t,"bc");const{data:i,computed:l,methods:r,watch:c,provide:u,inject:p,created:d,beforeMount:m,mounted:f,beforeUpdate:h,updated:g,activated:y,deactivated:x,beforeDestroy:T,beforeUnmount:$,destroyed:v,unmounted:E,render:M,renderTracked:P,renderTriggered:B,errorCaptured:R,serverPrefetch:K,expose:ie,inheritAttrs:me,components:X,directives:ve,filters:be}=n,we=Ng();{const[ae]=t.propsOptions;if(ae)for(const pe in ae)we("Props",pe)}if(p&&jg(p,o,we),r)for(const ae in r){const pe=r[ae];fe(pe)?(Object.defineProperty(o,ae,{value:pe.bind(a),configurable:!0,enumerable:!0,writable:!0}),we("Methods",ae)):V(`Method "${ae}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(i){fe(i)||V("The data option must be a function. Plain object usage is no longer supported.");const ae=i.call(a,a);if(Zl(ae)&&V("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ae(ae))V("data() should return an object.");else{t.data=Be(ae);for(const pe in ae)we("Data",pe),fr(pe[0])||Object.defineProperty(o,pe,{configurable:!0,enumerable:!0,get:()=>ae[pe],set:kt})}}if(sl=!0,l)for(const ae in l){const pe=l[ae],ze=fe(pe)?pe.bind(a,a):fe(pe.get)?pe.get.bind(a,a):kt;ze===kt&&V(`Computed property "${ae}" has no getter.`);const He=!fe(pe)&&fe(pe.set)?pe.set.bind(a):()=>{V(`Write operation failed: computed property "${ae}" is readonly.`)},Et=F({get:ze,set:He});Object.defineProperty(o,ae,{enumerable:!0,configurable:!0,get:()=>Et.value,set:nt=>Et.value=nt}),we("Computed",ae)}if(c)for(const ae in c)rd(c[ae],o,a,ae);if(u){const ae=fe(u)?u.call(a):u;Reflect.ownKeys(ae).forEach(pe=>{$t(pe,ae[pe])})}d&&uc(d,t,"c");function Re(ae,pe){ue(pe)?pe.forEach(ze=>ae(ze.bind(a))):pe&&ae(pe.bind(a))}if(Re(zg,m),Re(Dn,f),Re(Mg,h),Re(ii,g),Re(ad,y),Re(sd,x),Re(Sg,R),Re(Eg,P),Re(Ig,B),Re(Ds,$),Re(li,E),Re(Lg,K),ue(ie))if(ie.length){const ae=t.exposed||(t.exposed={});ie.forEach(pe=>{Object.defineProperty(ae,pe,{get:()=>a[pe],set:ze=>a[pe]=ze})})}else t.exposed||(t.exposed={});M&&t.render===kt&&(t.render=M),me!=null&&(t.inheritAttrs=me),X&&(t.components=X),ve&&(t.directives=ve)}function jg(t,n,a=kt){ue(t)&&(t=ol(t));for(const o in t){const i=t[o];let l;Ae(i)?"default"in i?l=z(i.from||o,i.default,!0):l=z(i.from||o):l=z(i),Se(l)?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):n[o]=l,a("Inject",o)}}function uc(t,n,a){Ht(ue(t)?t.map(o=>o.bind(n.proxy)):t.bind(n.proxy),n,a)}function rd(t,n,a,o){const i=o.includes(".")?Jp(a,o):()=>a[o];if(We(t)){const l=n[t];fe(l)?ke(i,l):V(`Invalid watch handler specified by key "${t}"`,l)}else if(fe(t))ke(i,t.bind(a));else if(Ae(t))if(ue(t))t.forEach(l=>rd(l,n,a,o));else{const l=fe(t.handler)?t.handler.bind(a):n[t.handler];fe(l)?ke(i,l,t):V(`Invalid watch handler specified by key "${t.handler}"`,l)}else V(`Invalid watch option: "${o}"`,t)}function hr(t){const n=t.type,{mixins:a,extends:o}=n,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=t.appContext,c=l.get(n);let u;return c?u=c:!i.length&&!a&&!o?u=n:(u={},i.length&&i.forEach(p=>Oo(u,p,r,!0)),Oo(u,n,r)),Ae(n)&&l.set(n,u),u}function Oo(t,n,a,o=!1){const{mixins:i,extends:l}=n;l&&Oo(t,l,a,!0),i&&i.forEach(r=>Oo(t,r,a,!0));for(const r in n)if(o&&r==="expose")V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=Dg[r]||a&&a[r];t[r]=c?c(t[r],n[r]):n[r]}return t}const Dg={data:pc,props:dc,emits:dc,methods:ls,computed:ls,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:ls,directives:ls,watch:Bg,provide:pc,inject:Wg};function pc(t,n){return n?t?function(){return De(fe(t)?t.call(this,this):t,fe(n)?n.call(this,this):n)}:n:t}function Wg(t,n){return ls(ol(t),ol(n))}function ol(t){if(ue(t)){const n={};for(let a=0;a<t.length;a++)n[t[a]]=t[a];return n}return t}function ct(t,n){return t?[...new Set([].concat(t,n))]:n}function ls(t,n){return t?De(Object.create(null),t,n):n}function dc(t,n){return t?ue(t)&&ue(n)?[...new Set([...t,...n])]:De(Object.create(null),cc(t),cc(n??{})):n}function Bg(t,n){if(!t)return n;if(!n)return t;const a=De(Object.create(null),t);for(const o in n)a[o]=ct(t[o],n[o]);return a}function cd(){return{app:null,config:{isNativeTag:fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vg=0;function Ug(t,n){return function(o,i=null){fe(o)||(o=De({},o)),i!=null&&!Ae(i)&&(V("root props passed to app.mount() must be an object."),i=null);const l=cd();Object.defineProperty(l.config,"unwrapInjectedRef",{get(){return!0},set(){V("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const r=new Set;let c=!1;const u=l.app={_uid:Vg++,_component:o,_props:i,_container:null,_context:l,_instance:null,version:Fo,get config(){return l.config},set config(p){V("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return r.has(p)?V("Plugin has already been applied to target app."):p&&fe(p.install)?(r.add(p),p.install(u,...d)):fe(p)?(r.add(p),p(u,...d)):V('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return l.mixins.includes(p)?V("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):l.mixins.push(p),u},component(p,d){return ul(p,l.config),d?(l.components[p]&&V(`Component "${p}" has already been registered in target app.`),l.components[p]=d,u):l.components[p]},directive(p,d){return Xp(p),d?(l.directives[p]&&V(`Directive "${p}" has already been registered in target app.`),l.directives[p]=d,u):l.directives[p]},mount(p,d,m){if(c)V("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&V("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=O(o,i);return f.appContext=l,l.reload=()=>{t(ln(f),p,m)},d&&n?n(f,p):t(f,p,m),c=!0,u._container=p,p.__vue_app__=u,u._instance=f.component,ig(u,Fo),ci(f.component)||f.component.proxy}},unmount(){c?(t(null,u._container),u._instance=null,lg(u),delete u._container.__vue_app__):V("Cannot unmount an app that is not mounted.")},provide(p,d){return p in l.provides&&V(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),l.provides[p]=d,u},runWithContext(p){Po=u;try{return p()}finally{Po=null}}};return u}}let Po=null;function $t(t,n){if(!Ze)V("provide() can only be used inside setup().");else{let a=Ze.provides;const o=Ze.parent&&Ze.parent.provides;o===a&&(a=Ze.provides=Object.create(o)),a[t]=n}}function z(t,n,a=!1){const o=Ze||Je;if(o||Po){const i=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Po._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return a&&fe(n)?n.call(o&&o.proxy):n;V(`injection "${String(t)}" not found.`)}else V("inject() can only be used inside setup() or functional components.")}function Kg(t,n,a,o=!1){const i={},l={};$o(l,ri,1),t.propsDefaults=Object.create(null),ud(t,n,i,l);for(const r in t.propsOptions[0])r in i||(i[r]=void 0);dd(n||{},i,t),a?t.props=o?i:Hh(i):t.type.props?t.props=i:t.props=l,t.attrs=l}function Gg(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function Qg(t,n,a,o){const{props:i,attrs:l,vnode:{patchFlag:r}}=t,c=_e(i),[u]=t.propsOptions;let p=!1;if(!Gg(t)&&(o||r>0)&&!(r&16)){if(r&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];if(ai(t.emitsOptions,f))continue;const h=n[f];if(u)if(Me(l,f))h!==l[f]&&(l[f]=h,p=!0);else{const g=an(f);i[g]=il(u,c,g,h,t,!1)}else h!==l[f]&&(l[f]=h,p=!0)}}}else{ud(t,n,i,l)&&(p=!0);let d;for(const m in c)(!n||!Me(n,m)&&((d=_n(m))===m||!Me(n,d)))&&(u?a&&(a[m]!==void 0||a[d]!==void 0)&&(i[m]=il(u,c,m,void 0,t,!0)):delete i[m]);if(l!==c)for(const m in l)(!n||!Me(n,m))&&(delete l[m],p=!0)}p&&sn(t,"set","$attrs"),dd(n||{},i,t)}function ud(t,n,a,o){const[i,l]=t.propsOptions;let r=!1,c;if(n)for(let u in n){if(fo(u))continue;const p=n[u];let d;i&&Me(i,d=an(u))?!l||!l.includes(d)?a[d]=p:(c||(c={}))[d]=p:ai(t.emitsOptions,u)||(!(u in o)||p!==o[u])&&(o[u]=p,r=!0)}if(l){const u=_e(a),p=c||qe;for(let d=0;d<l.length;d++){const m=l[d];a[m]=il(i,u,m,p[m],t,!Me(p,m))}}return r}function il(t,n,a,o,i,l){const r=t[a];if(r!=null){const c=Me(r,"default");if(c&&o===void 0){const u=r.default;if(r.type!==Function&&!r.skipFactory&&fe(u)){const{propsDefaults:p}=i;a in p?o=p[a]:(Ha(i),o=p[a]=u.call(null,n),ma())}else o=u}r[0]&&(l&&!c?o=!1:r[1]&&(o===""||o===_n(a))&&(o=!0))}return o}function pd(t,n,a=!1){const o=n.propsCache,i=o.get(t);if(i)return i;const l=t.props,r={},c=[];let u=!1;if(!fe(t)){const d=m=>{u=!0;const[f,h]=pd(m,n,!0);De(r,f),h&&c.push(...h)};!a&&n.mixins.length&&n.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!l&&!u)return Ae(t)&&o.set(t,Sa),Sa;if(ue(l))for(let d=0;d<l.length;d++){We(l[d])||V("props must be strings when using array syntax.",l[d]);const m=an(l[d]);mc(m)&&(r[m]=qe)}else if(l){Ae(l)||V("invalid props options",l);for(const d in l){const m=an(d);if(mc(m)){const f=l[d],h=r[m]=ue(f)||fe(f)?{type:f}:De({},f);if(h){const g=hc(Boolean,h.type),y=hc(String,h.type);h[0]=g>-1,h[1]=y<0||g<y,(g>-1||Me(h,"default"))&&c.push(m)}}}}const p=[r,c];return Ae(t)&&o.set(t,p),p}function mc(t){return t[0]!=="$"?!0:(V(`Invalid prop name: "${t}" is a reserved property.`),!1)}function ll(t){const n=t&&t.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:t===null?"null":""}function fc(t,n){return ll(t)===ll(n)}function hc(t,n){return ue(n)?n.findIndex(a=>fc(a,t)):fe(n)&&fc(n,t)?0:-1}function dd(t,n,a){const o=_e(n),i=a.propsOptions[0];for(const l in i){let r=i[l];r!=null&&Yg(l,o[l],r,!Me(t,l)&&!Me(t,_n(l)))}}function Yg(t,n,a,o){const{type:i,required:l,validator:r,skipCheck:c}=a;if(l&&o){V('Missing required prop: "'+t+'"');return}if(!(n==null&&!l)){if(i!=null&&i!==!0&&!c){let u=!1;const p=ue(i)?i:[i],d=[];for(let m=0;m<p.length&&!u;m++){const{valid:f,expectedType:h}=Jg(n,p[m]);d.push(h||""),u=f}if(!u){V(Xg(t,n,d));return}}r&&!r(n)&&V('Invalid prop: custom validator check failed for prop "'+t+'".')}}const Zg=jn("String,Number,Boolean,Function,Symbol,BigInt");function Jg(t,n){let a;const o=ll(n);if(Zg(o)){const i=typeof t;a=i===o.toLowerCase(),!a&&i==="object"&&(a=t instanceof n)}else o==="Object"?a=Ae(t):o==="Array"?a=ue(t):o==="null"?a=t===null:a=t instanceof n;return{valid:a,expectedType:o}}function Xg(t,n,a){let o=`Invalid prop: type check failed for prop "${t}". Expected ${a.map(ga).join(" | ")}`;const i=a[0],l=Jl(n),r=gc(n,i),c=gc(n,l);return a.length===1&&_c(i)&&!e_(i,l)&&(o+=` with value ${r}`),o+=`, got ${l} `,_c(l)&&(o+=`with value ${c}.`),o}function gc(t,n){return n==="String"?`"${t}"`:n==="Number"?`${Number(t)}`:`${t}`}function _c(t){return["string","number","boolean"].some(a=>t.toLowerCase()===a)}function e_(...t){return t.some(n=>n.toLowerCase()==="boolean")}const md=t=>t[0]==="_"||t==="$stable",gr=t=>ue(t)?t.map(Wt):[Wt(t)],t_=(t,n,a)=>{if(n._n)return n;const o=w((...i)=>(Ze&&V(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),gr(n(...i))),a);return o._c=!1,o},fd=(t,n,a)=>{const o=t._ctx;for(const i in t){if(md(i))continue;const l=t[i];if(fe(l))n[i]=t_(i,l,o);else if(l!=null){V(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);const r=gr(l);n[i]=()=>r}}},hd=(t,n)=>{mr(t.vnode)||V("Non-function value encountered for default slot. Prefer function slots for better performance.");const a=gr(n);t.slots.default=()=>a},n_=(t,n)=>{if(t.vnode.shapeFlag&32){const a=n._;a?(t.slots=_e(n),$o(n,"_",a)):fd(n,t.slots={})}else t.slots={},n&&hd(t,n);$o(t.slots,ri,1)},a_=(t,n,a)=>{const{vnode:o,slots:i}=t;let l=!0,r=qe;if(o.shapeFlag&32){const c=n._;c?En?(De(i,n),sn(t,"set","$slots")):a&&c===1?l=!1:(De(i,n),!a&&c===1&&delete i._):(l=!n.$stable,fd(n,i)),r=n}else n&&(hd(t,n),r={default:1});if(l)for(const c in i)!md(c)&&!(c in r)&&delete i[c]};function rl(t,n,a,o,i=!1){if(ue(t)){t.forEach((f,h)=>rl(f,n&&(ue(n)?n[h]:n),a,o,i));return}if(Aa(o)&&!i)return;const l=o.shapeFlag&4?ci(o.component)||o.component.proxy:o.el,r=i?null:l,{i:c,r:u}=t;if(!c){V("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=n&&n.r,d=c.refs===qe?c.refs={}:c.refs,m=c.setupState;if(p!=null&&p!==u&&(We(p)?(d[p]=null,Me(m,p)&&(m[p]=null)):Se(p)&&(p.value=null)),fe(u))gn(u,c,12,[r,d]);else{const f=We(u),h=Se(u);if(f||h){const g=()=>{if(t.f){const y=f?Me(m,u)?m[u]:d[u]:u.value;i?ue(y)&&Ql(y,l):ue(y)?y.includes(l)||y.push(l):f?(d[u]=[l],Me(m,u)&&(m[u]=d[u])):(u.value=[l],t.k&&(d[t.k]=u.value))}else f?(d[u]=r,Me(m,u)&&(m[u]=r)):h?(u.value=r,t.k&&(d[t.k]=r)):V("Invalid template ref type:",u,`(${typeof u})`)};r?(g.id=-1,et(g,a)):g()}else V("Invalid template ref type:",u,`(${typeof u})`)}}let Va,Mn;function un(t,n){t.appContext.config.performance&&Ho()&&Mn.mark(`vue-${n}-${t.uid}`),ug(t,n,Ho()?Mn.now():Date.now())}function pn(t,n){if(t.appContext.config.performance&&Ho()){const a=`vue-${n}-${t.uid}`,o=a+":end";Mn.mark(o),Mn.measure(`<${ui(t,t.type)}> ${n}`,a,o),Mn.clearMarks(a),Mn.clearMarks(o)}pg(t,n,Ho()?Mn.now():Date.now())}function Ho(){return Va!==void 0||(typeof window<"u"&&window.performance?(Va=!0,Mn=window.performance):Va=!1),Va}function s_(){const t=[];if(t.length){const n=t.length>1;console.warn(`Feature flag${n?"s":""} ${t.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const et=kg;function o_(t){return i_(t)}function i_(t,n){s_();const a=zo();a.__VUE__=!0,Up(a.__VUE_DEVTOOLS_GLOBAL_HOOK__,a);const{insert:o,remove:i,patchProp:l,createElement:r,createText:c,createComment:u,setText:p,setElementText:d,parentNode:m,nextSibling:f,setScopeId:h=kt,insertStaticContent:g}=t,y=(_,k,I,D=null,N=null,Q=null,te=!1,G=null,Z=En?!1:!!k.dynamicChildren)=>{if(_===k)return;_&&!Xn(_,k)&&(D=ee(_),ht(_,N,Q,!0),_=null),k.patchFlag===-2&&(Z=!1,k.dynamicChildren=null);const{type:U,ref:ce,shapeFlag:le}=k;switch(U){case Ws:x(_,k,I,D);break;case mt:T(_,k,I,D);break;case _o:_==null?$(k,I,D,te):v(_,k,I,te);break;case Ce:ve(_,k,I,D,N,Q,te,G,Z);break;default:le&1?P(_,k,I,D,N,Q,te,G,Z):le&6?be(_,k,I,D,N,Q,te,G,Z):le&64||le&128?U.process(_,k,I,D,N,Q,te,G,Z,se):V("Invalid VNode type:",U,`(${typeof U})`)}ce!=null&&N&&rl(ce,_&&_.ref,Q,k||_,!k)},x=(_,k,I,D)=>{if(_==null)o(k.el=c(k.children),I,D);else{const N=k.el=_.el;k.children!==_.children&&p(N,k.children)}},T=(_,k,I,D)=>{_==null?o(k.el=u(k.children||""),I,D):k.el=_.el},$=(_,k,I,D)=>{[_.el,_.anchor]=g(_.children,k,I,D,_.el,_.anchor)},v=(_,k,I,D)=>{if(k.children!==_.children){const N=f(_.anchor);M(_),[k.el,k.anchor]=g(k.children,I,N,D)}else k.el=_.el,k.anchor=_.anchor},E=({el:_,anchor:k},I,D)=>{let N;for(;_&&_!==k;)N=f(_),o(_,I,D),_=N;o(k,I,D)},M=({el:_,anchor:k})=>{let I;for(;_&&_!==k;)I=f(_),i(_),_=I;i(k)},P=(_,k,I,D,N,Q,te,G,Z)=>{te=te||k.type==="svg",_==null?B(k,I,D,N,Q,te,G,Z):ie(_,k,N,Q,te,G,Z)},B=(_,k,I,D,N,Q,te,G)=>{let Z,U;const{type:ce,props:le,shapeFlag:de,transition:ge,dirs:Le}=_;if(Z=_.el=r(_.type,Q,le&&le.is,le),de&8?d(Z,_.children):de&16&&K(_.children,Z,null,D,N,Q&&ce!=="foreignObject",te,G),Le&&Vn(_,null,D,"created"),R(Z,_,_.scopeId,te,D),le){for(const Ne in le)Ne!=="value"&&!fo(Ne)&&l(Z,Ne,null,le[Ne],Q,_.children,D,N,H);"value"in le&&l(Z,"value",null,le.value),(U=le.onVnodeBeforeMount)&&At(U,D,_)}Object.defineProperty(Z,"__vnode",{value:_,enumerable:!1}),Object.defineProperty(Z,"__vueParentComponent",{value:D,enumerable:!1}),Le&&Vn(_,null,D,"beforeMount");const je=(!N||N&&!N.pendingBranch)&&ge&&!ge.persisted;je&&ge.beforeEnter(Z),o(Z,k,I),((U=le&&le.onVnodeMounted)||je||Le)&&et(()=>{U&&At(U,D,_),je&&ge.enter(Z),Le&&Vn(_,null,D,"mounted")},N)},R=(_,k,I,D,N)=>{if(I&&h(_,I),D)for(let Q=0;Q<D.length;Q++)h(_,D[Q]);if(N){let Q=N.subTree;if(Q.patchFlag>0&&Q.patchFlag&2048&&(Q=Yp(Q.children)||Q),k===Q){const te=N.vnode;R(_,te,te.scopeId,te.slotScopeIds,N.parent)}}},K=(_,k,I,D,N,Q,te,G,Z=0)=>{for(let U=Z;U<_.length;U++){const ce=_[U]=G?$n(_[U]):Wt(_[U]);y(null,ce,k,I,D,N,Q,te,G)}},ie=(_,k,I,D,N,Q,te)=>{const G=k.el=_.el;let{patchFlag:Z,dynamicChildren:U,dirs:ce}=k;Z|=_.patchFlag&16;const le=_.props||qe,de=k.props||qe;let ge;I&&Un(I,!1),(ge=de.onVnodeBeforeUpdate)&&At(ge,I,k,_),ce&&Vn(k,_,I,"beforeUpdate"),I&&Un(I,!0),En&&(Z=0,te=!1,U=null);const Le=N&&k.type!=="foreignObject";if(U?(me(_.dynamicChildren,U,G,I,D,Le,Q),Ro(_,k)):te||ze(_,k,G,null,I,D,Le,Q,!1),Z>0){if(Z&16)X(G,k,le,de,I,D,N);else if(Z&2&&le.class!==de.class&&l(G,"class",null,de.class,N),Z&4&&l(G,"style",le.style,de.style,N),Z&8){const je=k.dynamicProps;for(let Ne=0;Ne<je.length;Ne++){const Ke=je[Ne],qt=le[Ke],Ta=de[Ke];(Ta!==qt||Ke==="value")&&l(G,Ke,qt,Ta,N,_.children,I,D,H)}}Z&1&&_.children!==k.children&&d(G,k.children)}else!te&&U==null&&X(G,k,le,de,I,D,N);((ge=de.onVnodeUpdated)||ce)&&et(()=>{ge&&At(ge,I,k,_),ce&&Vn(k,_,I,"updated")},D)},me=(_,k,I,D,N,Q,te)=>{for(let G=0;G<k.length;G++){const Z=_[G],U=k[G],ce=Z.el&&(Z.type===Ce||!Xn(Z,U)||Z.shapeFlag&70)?m(Z.el):I;y(Z,U,ce,null,D,N,Q,te,!0)}},X=(_,k,I,D,N,Q,te)=>{if(I!==D){if(I!==qe)for(const G in I)!fo(G)&&!(G in D)&&l(_,G,I[G],null,te,k.children,N,Q,H);for(const G in D){if(fo(G))continue;const Z=D[G],U=I[G];Z!==U&&G!=="value"&&l(_,G,U,Z,te,k.children,N,Q,H)}"value"in D&&l(_,"value",I.value,D.value)}},ve=(_,k,I,D,N,Q,te,G,Z)=>{const U=k.el=_?_.el:c(""),ce=k.anchor=_?_.anchor:c("");let{patchFlag:le,dynamicChildren:de,slotScopeIds:ge}=k;(En||le&2048)&&(le=0,Z=!1,de=null),ge&&(G=G?G.concat(ge):ge),_==null?(o(U,I,D),o(ce,I,D),K(k.children,I,ce,N,Q,te,G,Z)):le>0&&le&64&&de&&_.dynamicChildren?(me(_.dynamicChildren,de,I,N,Q,te,G),Ro(_,k)):ze(_,k,I,ce,N,Q,te,G,Z)},be=(_,k,I,D,N,Q,te,G,Z)=>{k.slotScopeIds=G,_==null?k.shapeFlag&512?N.ctx.activate(k,I,D,te,Z):we(k,I,D,N,Q,te,Z):Re(_,k,Z)},we=(_,k,I,D,N,Q,te)=>{const G=_.component=__(_,D,N);if(G.type.__hmrId&&ng(G),ho(_),un(G,"mount"),mr(_)&&(G.ctx.renderer=se),un(G,"init"),k_(G),pn(G,"init"),G.asyncDep){if(N&&N.registerDep(G,ae),!_.el){const Z=G.subTree=O(mt);T(null,Z,k,I)}return}ae(G,_,k,I,N,Q,te),go(),pn(G,"mount")},Re=(_,k,I)=>{const D=k.component=_.component;if(_g(_,k,I))if(D.asyncDep&&!D.asyncResolved){ho(k),pe(D,k,I),go();return}else D.next=k,eg(D.update),D.update();else k.el=_.el,D.vnode=k},ae=(_,k,I,D,N,Q,te)=>{const G=()=>{if(_.isMounted){let{next:ce,bu:le,u:de,parent:ge,vnode:Le}=_,je=ce,Ne;ho(ce||_.vnode),Un(_,!1),ce?(ce.el=Le.el,pe(_,ce,te)):ce=Le,le&&Jn(le),(Ne=ce.props&&ce.props.onVnodeBeforeUpdate)&&At(Ne,ge,ce,Le),Un(_,!0),un(_,"render");const Ke=_i(_);pn(_,"render");const qt=_.subTree;_.subTree=Ke,un(_,"patch"),y(qt,Ke,m(qt.el),ee(qt),_,N,Q),pn(_,"patch"),ce.el=Ke.el,je===null&&vg(_,Ke.el),de&&et(de,N),(Ne=ce.props&&ce.props.onVnodeUpdated)&&et(()=>At(Ne,ge,ce,Le),N),Kp(_),go()}else{let ce;const{el:le,props:de}=k,{bm:ge,m:Le,parent:je}=_,Ne=Aa(k);if(Un(_,!1),ge&&Jn(ge),!Ne&&(ce=de&&de.onVnodeBeforeMount)&&At(ce,je,k),Un(_,!0),le&&Fe){const Ke=()=>{un(_,"render"),_.subTree=_i(_),pn(_,"render"),un(_,"hydrate"),Fe(le,_.subTree,_,N,null),pn(_,"hydrate")};Ne?k.type.__asyncLoader().then(()=>!_.isUnmounted&&Ke()):Ke()}else{un(_,"render");const Ke=_.subTree=_i(_);pn(_,"render"),un(_,"patch"),y(null,Ke,I,D,_,N,Q),pn(_,"patch"),k.el=Ke.el}if(Le&&et(Le,N),!Ne&&(ce=de&&de.onVnodeMounted)){const Ke=k;et(()=>At(ce,je,Ke),N)}(k.shapeFlag&256||je&&Aa(je.vnode)&&je.vnode.shapeFlag&256)&&_.a&&et(_.a,N),_.isMounted=!0,Xi(_),k=I=D=null}},Z=_.effect=new nr(G,()=>ni(U),_.scope),U=_.update=()=>Z.run();U.id=_.uid,Un(_,!0),Z.onTrack=_.rtc?ce=>Jn(_.rtc,ce):void 0,Z.onTrigger=_.rtg?ce=>Jn(_.rtg,ce):void 0,U.ownerInstance=_,U()},pe=(_,k,I)=>{k.component=_;const D=_.vnode.props;_.vnode=k,_.next=null,Qg(_,k.props,D,I),a_(_,k.children,I),ka(),sc(),ba()},ze=(_,k,I,D,N,Q,te,G,Z=!1)=>{const U=_&&_.children,ce=_?_.shapeFlag:0,le=k.children,{patchFlag:de,shapeFlag:ge}=k;if(de>0){if(de&128){Et(U,le,I,D,N,Q,te,G,Z);return}else if(de&256){He(U,le,I,D,N,Q,te,G,Z);return}}ge&8?(ce&16&&H(U,N,Q),le!==U&&d(I,le)):ce&16?ge&16?Et(U,le,I,D,N,Q,te,G,Z):H(U,N,Q,!0):(ce&8&&d(I,""),ge&16&&K(le,I,D,N,Q,te,G,Z))},He=(_,k,I,D,N,Q,te,G,Z)=>{_=_||Sa,k=k||Sa;const U=_.length,ce=k.length,le=Math.min(U,ce);let de;for(de=0;de<le;de++){const ge=k[de]=Z?$n(k[de]):Wt(k[de]);y(_[de],ge,I,null,N,Q,te,G,Z)}U>ce?H(_,N,Q,!0,!1,le):K(k,I,D,N,Q,te,G,Z,le)},Et=(_,k,I,D,N,Q,te,G,Z)=>{let U=0;const ce=k.length;let le=_.length-1,de=ce-1;for(;U<=le&&U<=de;){const ge=_[U],Le=k[U]=Z?$n(k[U]):Wt(k[U]);if(Xn(ge,Le))y(ge,Le,I,null,N,Q,te,G,Z);else break;U++}for(;U<=le&&U<=de;){const ge=_[le],Le=k[de]=Z?$n(k[de]):Wt(k[de]);if(Xn(ge,Le))y(ge,Le,I,null,N,Q,te,G,Z);else break;le--,de--}if(U>le){if(U<=de){const ge=de+1,Le=ge<ce?k[ge].el:D;for(;U<=de;)y(null,k[U]=Z?$n(k[U]):Wt(k[U]),I,Le,N,Q,te,G,Z),U++}}else if(U>de)for(;U<=le;)ht(_[U],N,Q,!0),U++;else{const ge=U,Le=U,je=new Map;for(U=Le;U<=de;U++){const rt=k[U]=Z?$n(k[U]):Wt(k[U]);rt.key!=null&&(je.has(rt.key)&&V("Duplicate keys found during update:",JSON.stringify(rt.key),"Make sure keys are unique."),je.set(rt.key,U))}let Ne,Ke=0;const qt=de-Le+1;let Ta=!1,Kr=0;const Ba=new Array(qt);for(U=0;U<qt;U++)Ba[U]=0;for(U=ge;U<=le;U++){const rt=_[U];if(Ke>=qt){ht(rt,N,Q,!0);continue}let Yt;if(rt.key!=null)Yt=je.get(rt.key);else for(Ne=Le;Ne<=de;Ne++)if(Ba[Ne-Le]===0&&Xn(rt,k[Ne])){Yt=Ne;break}Yt===void 0?ht(rt,N,Q,!0):(Ba[Yt-Le]=U+1,Yt>=Kr?Kr=Yt:Ta=!0,y(rt,k[Yt],I,null,N,Q,te,G,Z),Ke++)}const Gr=Ta?l_(Ba):Sa;for(Ne=Gr.length-1,U=qt-1;U>=0;U--){const rt=Le+U,Yt=k[rt],Qr=rt+1<ce?k[rt+1].el:D;Ba[U]===0?y(null,Yt,I,Qr,N,Q,te,G,Z):Ta&&(Ne<0||U!==Gr[Ne]?nt(Yt,I,Qr,2):Ne--)}}},nt=(_,k,I,D,N=null)=>{const{el:Q,type:te,transition:G,children:Z,shapeFlag:U}=_;if(U&6){nt(_.component.subTree,k,I,D);return}if(U&128){_.suspense.move(k,I,D);return}if(U&64){te.move(_,k,I,se);return}if(te===Ce){o(Q,k,I);for(let le=0;le<Z.length;le++)nt(Z[le],k,I,D);o(_.anchor,k,I);return}if(te===_o){E(_,k,I);return}if(D!==2&&U&1&&G)if(D===0)G.beforeEnter(Q),o(Q,k,I),et(()=>G.enter(Q),N);else{const{leave:le,delayLeave:de,afterLeave:ge}=G,Le=()=>o(Q,k,I),je=()=>{le(Q,()=>{Le(),ge&&ge()})};de?de(Q,Le,je):je()}else o(Q,k,I)},ht=(_,k,I,D=!1,N=!1)=>{const{type:Q,props:te,ref:G,children:Z,dynamicChildren:U,shapeFlag:ce,patchFlag:le,dirs:de}=_;if(G!=null&&rl(G,null,I,_,!0),ce&256){k.ctx.deactivate(_);return}const ge=ce&1&&de,Le=!Aa(_);let je;if(Le&&(je=te&&te.onVnodeBeforeUnmount)&&At(je,k,_),ce&6)St(_.component,I,D);else{if(ce&128){_.suspense.unmount(I,D);return}ge&&Vn(_,null,k,"beforeUnmount"),ce&64?_.type.remove(_,k,I,N,se,D):U&&(Q!==Ce||le>0&&le&64)?H(U,k,I,!1,!0):(Q===Ce&&le&384||!N&&ce&16)&&H(Z,k,I),D&&Qt(_)}(Le&&(je=te&&te.onVnodeUnmounted)||ge)&&et(()=>{je&&At(je,k,_),ge&&Vn(_,null,k,"unmounted")},I)},Qt=_=>{const{type:k,el:I,anchor:D,transition:N}=_;if(k===Ce){_.patchFlag>0&&_.patchFlag&2048&&N&&!N.persisted?_.children.forEach(te=>{te.type===mt?i(te.el):Qt(te)}):Bn(I,D);return}if(k===_o){M(_);return}const Q=()=>{i(I),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(_.shapeFlag&1&&N&&!N.persisted){const{leave:te,delayLeave:G}=N,Z=()=>te(I,Q);G?G(_.el,Q,Z):Z()}else Q()},Bn=(_,k)=>{let I;for(;_!==k;)I=f(_),i(_),_=I;i(k)},St=(_,k,I)=>{_.type.__hmrId&&ag(_);const{bum:D,scope:N,update:Q,subTree:te,um:G}=_;D&&Jn(D),N.stop(),Q&&(Q.active=!1,ht(te,_,k,I)),G&&et(G,k),et(()=>{_.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve()),cg(_)},H=(_,k,I,D=!1,N=!1,Q=0)=>{for(let te=Q;te<_.length;te++)ht(_[te],k,I,D,N)},ee=_=>_.shapeFlag&6?ee(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),ne=(_,k,I)=>{_==null?k._vnode&&ht(k._vnode,null,null,!0):y(k._vnode||null,_,k,null,null,null,I),sc(),Wp(),k._vnode=_},se={p:y,um:ht,m:nt,r:Qt,mt:we,mc:K,pc:ze,pbc:me,n:ee,o:t};let $e,Fe;return n&&([$e,Fe]=n(se)),{render:ne,hydrate:$e,createApp:Ug(ne,$e)}}function Un({effect:t,update:n},a){t.allowRecurse=n.allowRecurse=a}function Ro(t,n,a=!1){const o=t.children,i=n.children;if(ue(o)&&ue(i))for(let l=0;l<o.length;l++){const r=o[l];let c=i[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[l]=$n(i[l]),c.el=r.el),a||Ro(r,c)),c.type===Ws&&(c.el=r.el),c.type===mt&&!c.el&&(c.el=r.el)}}function l_(t){const n=t.slice(),a=[0];let o,i,l,r,c;const u=t.length;for(o=0;o<u;o++){const p=t[o];if(p!==0){if(i=a[a.length-1],t[i]<p){n[o]=i,a.push(o);continue}for(l=0,r=a.length-1;l<r;)c=l+r>>1,t[a[c]]<p?l=c+1:r=c;p<t[a[l]]&&(l>0&&(n[o]=a[l-1]),a[l]=o)}}for(l=a.length,r=a[l-1];l-- >0;)a[l]=r,r=n[r];return a}const r_=t=>t.__isTeleport,Oa=t=>t&&(t.disabled||t.disabled===""),vc=t=>typeof SVGElement<"u"&&t instanceof SVGElement,cl=(t,n)=>{const a=t&&t.to;if(We(a))if(n){const o=n(a);return o||V(`Failed to locate Teleport target with selector "${a}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return V("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!a&&!Oa(t)&&V(`Invalid Teleport target: ${a}`),a},c_={__isTeleport:!0,process(t,n,a,o,i,l,r,c,u,p){const{mc:d,pc:m,pbc:f,o:{insert:h,querySelector:g,createText:y,createComment:x}}=p,T=Oa(n.props);let{shapeFlag:$,children:v,dynamicChildren:E}=n;if(En&&(u=!1,E=null),t==null){const M=n.el=x("teleport start"),P=n.anchor=x("teleport end");h(M,a,o),h(P,a,o);const B=n.target=cl(n.props,g),R=n.targetAnchor=y("");B?(h(R,B),r=r||vc(B)):T||V("Invalid Teleport target on mount:",B,`(${typeof B})`);const K=(ie,me)=>{$&16&&d(v,ie,me,i,l,r,c,u)};T?K(a,P):B&&K(B,R)}else{n.el=t.el;const M=n.anchor=t.anchor,P=n.target=t.target,B=n.targetAnchor=t.targetAnchor,R=Oa(t.props),K=R?a:P,ie=R?M:B;if(r=r||vc(P),E?(f(t.dynamicChildren,E,K,i,l,r,c),Ro(t,n,!0)):u||m(t,n,K,ie,i,l,r,c,!1),T)R||to(n,a,M,p,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const me=n.target=cl(n.props,g);me?to(n,me,null,p,0):V("Invalid Teleport target on update:",P,`(${typeof P})`)}else R&&to(n,P,B,p,1)}gd(n)},remove(t,n,a,o,{um:i,o:{remove:l}},r){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:m,props:f}=t;if(m&&l(d),(r||!Oa(f))&&(l(p),c&16))for(let h=0;h<u.length;h++){const g=u[h];i(g,n,a,!0,!!g.dynamicChildren)}},move:to,hydrate:u_};function to(t,n,a,{o:{insert:o},m:i},l=2){l===0&&o(t.targetAnchor,n,a);const{el:r,anchor:c,shapeFlag:u,children:p,props:d}=t,m=l===2;if(m&&o(r,n,a),(!m||Oa(d))&&u&16)for(let f=0;f<p.length;f++)i(p[f],n,a,2);m&&o(c,n,a)}function u_(t,n,a,o,i,l,{o:{nextSibling:r,parentNode:c,querySelector:u}},p){const d=n.target=cl(n.props,u);if(d){const m=d._lpa||d.firstChild;if(n.shapeFlag&16)if(Oa(n.props))n.anchor=p(r(t),n,c(t),a,o,i,l),n.targetAnchor=m;else{n.anchor=r(t);let f=m;for(;f;)if(f=r(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,d._lpa=n.targetAnchor&&r(n.targetAnchor);break}p(m,n,d,a,o,i,l)}gd(n)}return n.anchor&&r(n.anchor)}const p_=c_;function gd(t){const n=t.ctx;if(n&&n.ut){let a=t.children[0].el;for(;a!==t.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",n.uid),a=a.nextSibling;n.ut()}}const Ce=Symbol.for("v-fgt"),Ws=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),_o=Symbol.for("v-stc"),ps=[];let Vt=null;function b(t=!1){ps.push(Vt=t?null:[])}function d_(){ps.pop(),Vt=ps[ps.length-1]||null}let zs=1;function kc(t){zs+=t}function _d(t){return t.dynamicChildren=zs>0?Vt||Sa:null,d_(),zs>0&&Vt&&Vt.push(t),t}function oe(t,n,a,o,i,l){return _d(e(t,n,a,o,i,l,!0))}function L(t,n,a,o,i){return _d(O(t,n,a,o,i,!0))}function Nn(t){return t?t.__v_isVNode===!0:!1}function Xn(t,n){return n.shapeFlag&6&&Ia.has(n.type)?(t.shapeFlag&=-257,n.shapeFlag&=-513,!1):t.type===n.type&&t.key===n.key}const m_=(...t)=>f_(...t),ri="__vInternal",vd=({key:t})=>t??null,vo=({ref:t,ref_key:n,ref_for:a})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||Se(t)||fe(t)?{i:Je,r:t,k:n,f:!!a}:t:null);function e(t,n=null,a=null,o=0,i=null,l=t===Ce?0:1,r=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&vd(n),ref:n&&vo(n),scopeId:si,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Je};return c?(_r(u,a),l&128&&t.normalize(u)):a&&(u.shapeFlag|=We(a)?8:16),u.key!==u.key&&V("VNode created with invalid key (NaN). VNode type:",u.type),zs>0&&!r&&Vt&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&Vt.push(u),u}const O=m_;function f_(t,n=null,a=null,o=0,i=null,l=!1){if((!t||t===Cg)&&(t||V(`Invalid vnode type when creating vnode: ${t}.`),t=mt),Nn(t)){const c=ln(t,n,!0);return a&&_r(c,a),zs>0&&!l&&Vt&&(c.shapeFlag&6?Vt[Vt.indexOf(t)]=c:Vt.push(c)),c.patchFlag|=-2,c}if(xd(t)&&(t=t.__vccOpts),n){n=q(n);let{class:c,style:u}=n;c&&!We(c)&&(n.class=Ve(c)),Ae(u)&&(Eo(u)&&!ue(u)&&(u=De({},u)),n.style=tt(u))}const r=We(t)?1:Zp(t)?128:r_(t)?64:Ae(t)?4:fe(t)?2:0;return r&4&&Eo(t)&&(t=_e(t),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),e(t,n,a,o,i,r,l,!0)}function q(t){return t?Eo(t)||ri in t?De({},t):t:null}function ln(t,n,a=!1){const{props:o,ref:i,patchFlag:l,children:r}=t,c=n?Y(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&vd(c),ref:n&&n.ref?a&&i?ue(i)?i.concat(vo(n)):[i,vo(n)]:vo(n):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l===-1&&ue(r)?r.map(kd):r,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Ce?l===-1?16:l|16:l,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function kd(t){const n=ln(t);return ue(t.children)&&(n.children=t.children.map(kd)),n}function s(t=" ",n=0){return O(Ws,null,t,n)}function xe(t="",n=!1){return n?(b(),L(mt,null,t)):O(mt,null,t)}function Wt(t){return t==null||typeof t=="boolean"?O(mt):ue(t)?O(Ce,null,t.slice()):typeof t=="object"?$n(t):O(Ws,null,String(t))}function $n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ln(t)}function _r(t,n){let a=0;const{shapeFlag:o}=t;if(n==null)n=null;else if(ue(n))a=16;else if(typeof n=="object")if(o&65){const i=n.default;i&&(i._c&&(i._d=!1),_r(t,i()),i._c&&(i._d=!0));return}else{a=32;const i=n._;!i&&!(ri in n)?n._ctx=Je:i===3&&Je&&(Je.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else fe(n)?(n={default:n,_ctx:Je},a=32):(n=String(n),o&64?(a=16,n=[s(n)]):a=8);t.children=n,t.shapeFlag|=a}function Y(...t){const n={};for(let a=0;a<t.length;a++){const o=t[a];for(const i in o)if(i==="class")n.class!==o.class&&(n.class=Ve([n.class,o.class]));else if(i==="style")n.style=tt([n.style,o.style]);else if(Ns(i)){const l=n[i],r=o[i];r&&l!==r&&!(ue(l)&&l.includes(r))&&(n[i]=l?[].concat(l,r):r)}else i!==""&&(n[i]=o[i])}return n}function At(t,n,a,o=null){Ht(t,n,7,[a,o])}const h_=cd();let g_=0;function __(t,n,a){const o=t.type,i=(n?n.appContext:t.appContext)||h_,l={uid:g_++,vnode:t,type:o,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pd(o,i),emitsOptions:Qp(o,i),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:o.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=Og(l),l.root=n?n.root:l,l.emit=mg.bind(null,l),t.ce&&t.ce(l),l}let Ze=null;const It=()=>Ze||Je;let vr,$a,bc="__VUE_INSTANCE_SETTERS__";($a=zo()[bc])||($a=zo()[bc]=[]),$a.push(t=>Ze=t),vr=t=>{$a.length>1?$a.forEach(n=>n(t)):$a[0](t)};const Ha=t=>{vr(t),t.scope.on()},ma=()=>{Ze&&Ze.scope.off(),vr(null)},v_=jn("slot,component");function ul(t,n){const a=n.isNativeTag||fp;(v_(t)||a(t))&&V("Do not use built-in or reserved HTML elements as component id: "+t)}function bd(t){return t.vnode.shapeFlag&4}let Ms=!1;function k_(t,n=!1){Ms=n;const{props:a,children:o}=t.vnode,i=bd(t);Kg(t,a,i,n),n_(t,o);const l=i?b_(t,n):void 0;return Ms=!1,l}function b_(t,n){var a;const o=t.type;{if(o.name&&ul(o.name,t.appContext.config),o.components){const l=Object.keys(o.components);for(let r=0;r<l.length;r++)ul(l[r],t.appContext.config)}if(o.directives){const l=Object.keys(o.directives);for(let r=0;r<l.length;r++)Xp(l[r])}o.compilerOptions&&y_()&&V('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=ei(new Proxy(t.ctx,ld)),Pg(t);const{setup:i}=o;if(i){const l=t.setupContext=i.length>1?wd(t):null;Ha(t),ka();const r=gn(i,t,0,[ss(t.props),l]);if(ba(),ma(),Zl(r)){if(r.then(ma,ma),n)return r.then(c=>{yc(t,c,n)}).catch(c=>{ti(c,t,0)});if(t.asyncDep=r,!t.suspense){const c=(a=o.name)!=null?a:"Anonymous";V(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else yc(t,r,n)}else yd(t,n)}function yc(t,n,a){fe(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:Ae(n)?(Nn(n)&&V("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=n,t.setupState=Rp(n),Hg(t)):n!==void 0&&V(`setup() should return an object. Received: ${n===null?"null":typeof n}`),yd(t,a)}let pl;const y_=()=>!pl;function yd(t,n,a){const o=t.type;if(!t.render){if(!n&&pl&&!o.render){const i=o.template||hr(t).template;if(i){un(t,"compile");const{isCustomElement:l,compilerOptions:r}=t.appContext.config,{delimiters:c,compilerOptions:u}=o,p=De(De({isCustomElement:l,delimiters:c},r),u);o.render=pl(i,p),pn(t,"compile")}}t.render=o.render||kt}Ha(t),ka(),qg(t),ba(),ma(),!o.render&&t.render===kt&&!n&&(o.template?V('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):V("Component is missing template or render function."))}function w_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(n,a){return Co(),lt(t,"get","$attrs"),n[a]},set(){return V("setupContext.attrs is readonly."),!1},deleteProperty(){return V("setupContext.attrs is readonly."),!1}}))}function x_(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(n,a){return lt(t,"get","$slots"),n[a]}}))}function wd(t){return Object.freeze({get attrs(){return w_(t)},get slots(){return x_(t)},get emit(){return(a,...o)=>t.emit(a,...o)},expose:a=>{if(t.exposed&&V("expose() should be called only once per setup()."),a!=null){let o=typeof a;o==="object"&&(ue(a)?o="array":Se(a)&&(o="ref")),o!=="object"&&V(`expose() should be passed a plain object, received ${o}.`)}t.exposed=a||{}}})}function ci(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rp(ei(t.exposed)),{get(n,a){if(a in n)return n[a];if(a in da)return da[a](t)},has(n,a){return a in n||a in da}}))}const T_=/(?:^|[-_])(\w)/g,$_=t=>t.replace(T_,n=>n.toUpperCase()).replace(/[-_]/g,"");function Ls(t,n=!0){return fe(t)?t.displayName||t.name:t.name||n&&t.__name}function ui(t,n,a=!1){let o=Ls(n);if(!o&&n.__file){const i=n.__file.match(/([^/\\]+)\.\w+$/);i&&(o=i[1])}if(!o&&t&&t.parent){const i=l=>{for(const r in l)if(l[r]===n)return r};o=i(t.components||t.parent.type.components)||i(t.appContext.components)}return o?$_(o):a?"App":"Anonymous"}function xd(t){return fe(t)&&"__vccOpts"in t}const F=(t,n)=>Vh(t,n,Ms);function yt(t,n,a){const o=arguments.length;return o===2?Ae(n)&&!ue(n)?Nn(n)?O(t,null,[n]):O(t,n):O(t,null,n):(o>3?a=Array.prototype.slice.call(arguments,2):o===3&&Nn(a)&&(a=[a]),O(t,n,a))}const z_=Symbol.for("v-scx"),M_=()=>{{const t=z(z_);return t||V("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function yi(t){return!!(t&&t.__v_isShallow)}function L_(){if(typeof window>"u")return;const t={style:"color:#3ba776"},n={style:"color:#0b1bc9"},a={style:"color:#b62e24"},o={style:"color:#9d288c"},i={header(m){return Ae(m)?m.__isVue?["div",t,"VueInstance"]:Se(m)?["div",{},["span",t,d(m)],"<",c(m.value),">"]:ua(m)?["div",{},["span",t,yi(m)?"ShallowReactive":"Reactive"],"<",c(m),`>${Fn(m)?" (readonly)":""}`]:Fn(m)?["div",{},["span",t,yi(m)?"ShallowReadonly":"Readonly"],"<",c(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...l(m.$)]}};function l(m){const f=[];m.type.props&&m.props&&f.push(r("props",_e(m.props))),m.setupState!==qe&&f.push(r("setup",m.setupState)),m.data!==qe&&f.push(r("data",_e(m.data)));const h=u(m,"computed");h&&f.push(r("computed",h));const g=u(m,"inject");return g&&f.push(r("injected",g)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),f}function r(m,f){return f=De({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",o,h+": "],c(f[h],!1)])]]:["span",{}]}function c(m,f=!0){return typeof m=="number"?["span",n,m]:typeof m=="string"?["span",a,JSON.stringify(m)]:typeof m=="boolean"?["span",o,m]:Ae(m)?["object",{object:f?_e(m):m}]:["span",a,String(m)]}function u(m,f){const h=m.type;if(fe(h))return;const g={};for(const y in m.ctx)p(h,y,f)&&(g[y]=m.ctx[y]);return g}function p(m,f,h){const g=m[h];if(ue(g)&&g.includes(f)||Ae(g)&&f in g||m.extends&&p(m.extends,f,h)||m.mixins&&m.mixins.some(y=>p(y,f,h)))return!0}function d(m){return yi(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(i):window.devtoolsFormatters=[i]}const Fo="3.3.4",I_="http://www.w3.org/2000/svg",ea=typeof document<"u"?document:null,wc=ea&&ea.createElement("template"),E_={insert:(t,n,a)=>{n.insertBefore(t,a||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,a,o)=>{const i=n?ea.createElementNS(I_,t):ea.createElement(t,a?{is:a}:void 0);return t==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:t=>ea.createTextNode(t),createComment:t=>ea.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ea.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,a,o,i,l){const r=a?a.previousSibling:n.lastChild;if(i&&(i===l||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),a),!(i===l||!(i=i.nextSibling)););else{wc.innerHTML=o?`<svg>${t}</svg>`:t;const c=wc.content;if(o){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}n.insertBefore(c,a)}return[r?r.nextSibling:n.firstChild,a?a.previousSibling:n.lastChild]}};function S_(t,n,a){const o=t._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?t.removeAttribute("class"):a?t.setAttribute("class",n):t.className=n}function C_(t,n,a){const o=t.style,i=We(a);if(a&&!i){if(n&&!We(n))for(const l in n)a[l]==null&&dl(o,l,"");for(const l in a)dl(o,l,a[l])}else{const l=o.display;i?n!==a&&(o.cssText=a):n&&t.removeAttribute("style"),"_vod"in t&&(o.display=l)}}const A_=/[^\\];\s*$/,xc=/\s*!important$/;function dl(t,n,a){if(ue(a))a.forEach(o=>dl(t,n,o));else if(a==null&&(a=""),A_.test(a)&&V(`Unexpected semicolon at the end of '${n}' style value: '${a}'`),n.startsWith("--"))t.setProperty(n,a);else{const o=O_(t,n);xc.test(a)?t.setProperty(_n(o),a.replace(xc,""),"important"):t[o]=a}}const Tc=["Webkit","Moz","ms"],wi={};function O_(t,n){const a=wi[n];if(a)return a;let o=an(n);if(o!=="filter"&&o in t)return wi[n]=o;o=ga(o);for(let i=0;i<Tc.length;i++){const l=Tc[i]+o;if(l in t)return wi[n]=l}return n}const $c="http://www.w3.org/1999/xlink";function P_(t,n,a,o,i){if(o&&n.startsWith("xlink:"))a==null?t.removeAttributeNS($c,n.slice(6,n.length)):t.setAttributeNS($c,n,a);else{const l=oh(n);a==null||l&&!kp(a)?t.removeAttribute(n):t.setAttribute(n,l?"":a)}}function H_(t,n,a,o,i,l,r){if(n==="innerHTML"||n==="textContent"){o&&r(o,i,l),t[n]=a??"";return}const c=t.tagName;if(n==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=a;const p=c==="OPTION"?t.getAttribute("value"):t.value,d=a??"";p!==d&&(t.value=d),a==null&&t.removeAttribute(n);return}let u=!1;if(a===""||a==null){const p=typeof t[n];p==="boolean"?a=kp(a):a==null&&p==="string"?(a="",u=!0):p==="number"&&(a=0,u=!0)}try{t[n]=a}catch(p){u||V(`Failed setting prop "${n}" on <${c.toLowerCase()}>: value ${a} is invalid.`,p)}u&&t.removeAttribute(n)}function R_(t,n,a,o){t.addEventListener(n,a,o)}function F_(t,n,a,o){t.removeEventListener(n,a,o)}function N_(t,n,a,o,i=null){const l=t._vei||(t._vei={}),r=l[n];if(o&&r)r.value=o;else{const[c,u]=q_(n);if(o){const p=l[n]=W_(o,i);R_(t,c,p,u)}else r&&(F_(t,c,r,u),l[n]=void 0)}}const zc=/(?:Once|Passive|Capture)$/;function q_(t){let n;if(zc.test(t)){n={};let o;for(;o=t.match(zc);)t=t.slice(0,t.length-o[0].length),n[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_n(t.slice(2)),n]}let xi=0;const j_=Promise.resolve(),D_=()=>xi||(j_.then(()=>xi=0),xi=Date.now());function W_(t,n){const a=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=a.attached)return;Ht(B_(o,a.value),n,5,[o])};return a.value=t,a.attached=D_(),a}function B_(t,n){if(ue(n)){const a=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{a.call(t),t._stopped=!0},n.map(o=>i=>!i._stopped&&o&&o(i))}else return n}const Mc=/^on[a-z]/,V_=(t,n,a,o,i=!1,l,r,c,u)=>{n==="class"?S_(t,o,i):n==="style"?C_(t,a,o):Ns(n)?To(n)||N_(t,n,a,o,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):U_(t,n,o,i))?H_(t,n,o,l,r,c,u):(n==="true-value"?t._trueValue=o:n==="false-value"&&(t._falseValue=o),P_(t,n,o,i))};function U_(t,n,a,o){return o?!!(n==="innerHTML"||n==="textContent"||n in t&&Mc.test(n)&&fe(a)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||Mc.test(n)&&We(a)?!1:n in t}const yn="transition",Ua="animation",Td={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},K_=De({},wg,Td),Kn=(t,n=[])=>{ue(t)?t.forEach(a=>a(...n)):t&&t(...n)},Lc=t=>t?ue(t)?t.some(n=>n.length>1):t.length>1:!1;function G_(t){const n={};for(const X in t)X in Td||(n[X]=t[X]);if(t.css===!1)return n;const{name:a="v",type:o,duration:i,enterFromClass:l=`${a}-enter-from`,enterActiveClass:r=`${a}-enter-active`,enterToClass:c=`${a}-enter-to`,appearFromClass:u=l,appearActiveClass:p=r,appearToClass:d=c,leaveFromClass:m=`${a}-leave-from`,leaveActiveClass:f=`${a}-leave-active`,leaveToClass:h=`${a}-leave-to`}=t,g=Q_(i),y=g&&g[0],x=g&&g[1],{onBeforeEnter:T,onEnter:$,onEnterCancelled:v,onLeave:E,onLeaveCancelled:M,onBeforeAppear:P=T,onAppear:B=$,onAppearCancelled:R=v}=n,K=(X,ve,be)=>{xn(X,ve?d:c),xn(X,ve?p:r),be&&be()},ie=(X,ve)=>{X._isLeaving=!1,xn(X,m),xn(X,h),xn(X,f),ve&&ve()},me=X=>(ve,be)=>{const we=X?B:$,Re=()=>K(ve,X,be);Kn(we,[ve,Re]),Ic(()=>{xn(ve,X?u:l),dn(ve,X?d:c),Lc(we)||Ec(ve,o,y,Re)})};return De(n,{onBeforeEnter(X){Kn(T,[X]),dn(X,l),dn(X,r)},onBeforeAppear(X){Kn(P,[X]),dn(X,u),dn(X,p)},onEnter:me(!1),onAppear:me(!0),onLeave(X,ve){X._isLeaving=!0;const be=()=>ie(X,ve);dn(X,m),zd(),dn(X,f),Ic(()=>{X._isLeaving&&(xn(X,m),dn(X,h),Lc(E)||Ec(X,o,x,be))}),Kn(E,[X,be])},onEnterCancelled(X){K(X,!1),Kn(v,[X])},onAppearCancelled(X){K(X,!0),Kn(R,[X])},onLeaveCancelled(X){ie(X),Kn(M,[X])}})}function Q_(t){if(t==null)return null;if(Ae(t))return[Ti(t.enter),Ti(t.leave)];{const n=Ti(t);return[n,n]}}function Ti(t){const n=Yf(t);return Yh(n,"<transition> explicit duration"),n}function dn(t,n){n.split(/\s+/).forEach(a=>a&&t.classList.add(a)),(t._vtc||(t._vtc=new Set)).add(n)}function xn(t,n){n.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const{_vtc:a}=t;a&&(a.delete(n),a.size||(t._vtc=void 0))}function Ic(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Y_=0;function Ec(t,n,a,o){const i=t._endId=++Y_,l=()=>{i===t._endId&&o()};if(a)return setTimeout(l,a);const{type:r,timeout:c,propCount:u}=$d(t,n);if(!r)return o();const p=r+"end";let d=0;const m=()=>{t.removeEventListener(p,f),l()},f=h=>{h.target===t&&++d>=u&&m()};setTimeout(()=>{d<u&&m()},c+1),t.addEventListener(p,f)}function $d(t,n){const a=window.getComputedStyle(t),o=g=>(a[g]||"").split(", "),i=o(`${yn}Delay`),l=o(`${yn}Duration`),r=Sc(i,l),c=o(`${Ua}Delay`),u=o(`${Ua}Duration`),p=Sc(c,u);let d=null,m=0,f=0;n===yn?r>0&&(d=yn,m=r,f=l.length):n===Ua?p>0&&(d=Ua,m=p,f=u.length):(m=Math.max(r,p),d=m>0?r>p?yn:Ua:null,f=d?d===yn?l.length:u.length:0);const h=d===yn&&/\b(transform|all)(,|$)/.test(o(`${yn}Property`).toString());return{type:d,timeout:m,propCount:f,hasTransform:h}}function Sc(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max(...n.map((a,o)=>Cc(a)+Cc(t[o])))}function Cc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function zd(){return document.body.offsetHeight}const Md=new WeakMap,Ld=new WeakMap,Id={name:"TransitionGroup",props:De({},K_,{tag:String,moveClass:String}),setup(t,{slots:n}){const a=It(),o=yg();let i,l;return ii(()=>{if(!i.length)return;const r=t.moveClass||`${t.name||"v"}-move`;if(!nv(i[0].el,a.vnode.el,r))return;i.forEach(X_),i.forEach(ev);const c=i.filter(tv);zd(),c.forEach(u=>{const p=u.el,d=p.style;dn(p,r),d.transform=d.webkitTransform=d.transitionDuration="";const m=p._moveCb=f=>{f&&f.target!==p||(!f||/transform$/.test(f.propertyName))&&(p.removeEventListener("transitionend",m),p._moveCb=null,xn(p,r))};p.addEventListener("transitionend",m)})}),()=>{const r=_e(t),c=G_(r);let u=r.tag||Ce;i=l,l=n.default?td(n.default()):[];for(let p=0;p<l.length;p++){const d=l[p];d.key!=null?Ao(d,tl(d,c,o,a)):V("<TransitionGroup> children must be keyed.")}if(i)for(let p=0;p<i.length;p++){const d=i[p];Ao(d,tl(d,c,o,a)),Md.set(d,d.el.getBoundingClientRect())}return O(u,null,l)}}},Z_=t=>delete t.mode;Id.props;const J_=Id;function X_(t){const n=t.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function ev(t){Ld.set(t,t.el.getBoundingClientRect())}function tv(t){const n=Md.get(t),a=Ld.get(t),o=n.left-a.left,i=n.top-a.top;if(o||i){const l=t.el.style;return l.transform=l.webkitTransform=`translate(${o}px,${i}px)`,l.transitionDuration="0s",t}}function nv(t,n,a){const o=t.cloneNode();t._vtc&&t._vtc.forEach(r=>{r.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),a.split(/\s+/).forEach(r=>r&&o.classList.add(r)),o.style.display="none";const i=n.nodeType===1?n:n.parentNode;i.appendChild(o);const{hasTransform:l}=$d(o);return i.removeChild(o),l}const av=["ctrl","shift","alt","meta"],sv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,n)=>av.some(a=>t[`${a}Key`]&&!n.includes(a))},ov=(t,n)=>(a,...o)=>{for(let i=0;i<n.length;i++){const l=sv[n[i]];if(l&&l(a,n))return}return t(a,...o)},iv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},no=(t,n)=>a=>{if(!("key"in a))return;const o=_n(a.key);if(n.some(i=>i===o||iv[i]===o))return t(a)},Ed={beforeMount(t,{value:n},{transition:a}){t._vod=t.style.display==="none"?"":t.style.display,a&&n?a.beforeEnter(t):Ka(t,n)},mounted(t,{value:n},{transition:a}){a&&n&&a.enter(t)},updated(t,{value:n,oldValue:a},{transition:o}){!n!=!a&&(o?n?(o.beforeEnter(t),Ka(t,!0),o.enter(t)):o.leave(t,()=>{Ka(t,!1)}):Ka(t,n))},beforeUnmount(t,{value:n}){Ka(t,n)}};function Ka(t,n){t.style.display=n?t._vod:"none"}const lv=De({patchProp:V_},E_);let Ac;function rv(){return Ac||(Ac=o_(lv))}const cv=(...t)=>{const n=rv().createApp(...t);uv(n),pv(n);const{mount:a}=n;return n.mount=o=>{const i=dv(o);if(!i)return;const l=n._component;!fe(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.innerHTML="";const r=a(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},n};function uv(t){Object.defineProperty(t.config,"isNativeTag",{value:n=>vp(n)||ah(n),writable:!1})}function pv(t){{const n=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return n},set(){V("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const a=t.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return V(o),a},set(){V(o)}})}}function dv(t){if(We(t)){const n=document.querySelector(t);return n||V(`Failed to mount app: mount target selector "${t}" returned null.`),n}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&V('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function mv(){L_()}mv();function ml(t,n={},a){for(const o in t){const i=t[o],l=a?`${a}:${o}`:o;typeof i=="object"&&i!==null?ml(i,n,l):typeof i=="function"&&(n[l]=i)}return n}const fv={run:t=>t()},hv=()=>fv,Sd=typeof console.createTask<"u"?console.createTask:hv;function gv(t,n){const a=n.shift(),o=Sd(a);return t.reduce((i,l)=>i.then(()=>o.run(()=>l(...n))),Promise.resolve())}function _v(t,n){const a=n.shift(),o=Sd(a);return Promise.all(t.map(i=>o.run(()=>i(...n))))}function $i(t,n){for(const a of[...t])a(n)}class vv{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,a,o={}){if(!n||typeof a!="function")return()=>{};const i=n;let l;for(;this._deprecatedHooks[n];)l=this._deprecatedHooks[n],n=l.to;if(l&&!o.allowDeprecated){let r=l.message;r||(r=`${i} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!a.name)try{Object.defineProperty(a,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(a),()=>{a&&(this.removeHook(n,a),a=void 0)}}hookOnce(n,a){let o,i=(...l)=>(typeof o=="function"&&o(),o=void 0,i=void 0,a(...l));return o=this.hook(n,i),o}removeHook(n,a){if(this._hooks[n]){const o=this._hooks[n].indexOf(a);o!==-1&&this._hooks[n].splice(o,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,a){this._deprecatedHooks[n]=typeof a=="string"?{to:a}:a;const o=this._hooks[n]||[];delete this._hooks[n];for(const i of o)this.hook(n,i)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const a in n)this.deprecateHook(a,n[a])}addHooks(n){const a=ml(n),o=Object.keys(a).map(i=>this.hook(i,a[i]));return()=>{for(const i of o.splice(0,o.length))i()}}removeHooks(n){const a=ml(n);for(const o in a)this.removeHook(o,a[o])}removeAllHooks(){for(const n in this._hooks)delete this._hooks[n]}callHook(n,...a){return a.unshift(n),this.callHookWith(gv,n,...a)}callHookParallel(n,...a){return a.unshift(n),this.callHookWith(_v,n,...a)}callHookWith(n,a,...o){const i=this._before||this._after?{name:a,args:o,context:{}}:void 0;this._before&&$i(this._before,i);const l=n(a in this._hooks?[...this._hooks[a]]:[],o);return l instanceof Promise?l.finally(()=>{this._after&&i&&$i(this._after,i)}):(this._after&&i&&$i(this._after,i),l)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const a=this._before.indexOf(n);a!==-1&&this._before.splice(a,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const a=this._after.indexOf(n);a!==-1&&this._after.splice(a,1)}}}}function kv(){return new vv}function bv(t){return Array.isArray(t)?t:[t]}const Cd=["title","script","style","noscript"],Ad=["base","meta","link","style","script","noscript"],yv=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],wv=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],xv=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Od(t){let n=9;for(let a=0;a<t.length;)n=Math.imul(n^t.charCodeAt(a++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function fl(t){return Od(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([n,a])=>`${n}:${String(a)}`).join(",")}`)}function Tv(t){let n=9;for(const a of t)for(let o=0;o<a.length;)n=Math.imul(n^a.charCodeAt(o++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Pd(t,n){const{props:a,tag:o}=t;if(wv.includes(o))return o;if(o==="link"&&a.rel==="canonical")return"canonical";if(a.charset)return"charset";const i=["id"];o==="meta"&&i.push("name","property","http-equiv");for(const l of i)if(typeof a[l]<"u"){const r=String(a[l]);return n&&!n(r)?!1:`${o}:${l}:${r}`}return!1}function Oc(t,n){return t==null?n||null:typeof t=="function"?t(n):t}function ao(t,n=!1,a){const{tag:o,$el:i}=t;i&&(Object.entries(o.props).forEach(([l,r])=>{r=String(r);const c=`attr:${l}`;if(l==="class"){if(!r)return;for(const u of r.split(" ")){const p=`${c}:${u}`;a&&a(t,p,()=>i.classList.remove(u)),i.classList.contains(u)||i.classList.add(u)}return}a&&!l.startsWith("data-h-")&&a(t,c,()=>i.removeAttribute(l)),(n||i.getAttribute(l)!==r)&&i.setAttribute(l,r)}),Cd.includes(o.tag)&&(o.textContent&&o.textContent!==i.textContent?i.textContent=o.textContent:o.innerHTML&&o.innerHTML!==i.innerHTML&&(i.innerHTML=o.innerHTML)))}let Ga=!1;async function Hd(t,n={}){var f,h;const a={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",a),!a.shouldRender)return;const o=n.document||t.resolvedOptions.document||window.document,i=(await t.resolveTags()).map(c);if(t.resolvedOptions.experimentalHashHydration&&(Ga=Ga||t._hash||!1,Ga)){const g=Tv(i.map(y=>y.tag._h));if(Ga===g)return;Ga=g}const l=t._popSideEffectQueue();t.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([y,x])=>{l[y]=x})});const r=(g,y,x)=>{y=`${g.renderId}:${y}`,g.entry&&(g.entry._sde[y]=x),delete l[y]};function c(g){const y=t.headEntries().find(T=>T._i===g._e),x={renderId:g._d||fl(g),$el:null,shouldRender:!0,tag:g,entry:y,markSideEffect:(T,$)=>r(x,T,$)};return x}const u=[],p={body:[],head:[]},d=g=>{t._elMap[g.renderId]=g.$el,u.push(g),r(g,"el",()=>{var y;(y=g.$el)==null||y.remove(),delete t._elMap[g.renderId]})};for(const g of i){if(await t.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:y}=g;if(y.tag==="title"){o.title=y.textContent||"",u.push(g);continue}if(y.tag==="htmlAttrs"||y.tag==="bodyAttrs"){g.$el=o[y.tag==="htmlAttrs"?"documentElement":"body"],ao(g,!1,r),u.push(g);continue}if(g.$el=t._elMap[g.renderId],!g.$el&&y.key&&(g.$el=o.querySelector(`${(f=y.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${y.tag}[data-h-${y._h}]`)),g.$el){g.tag._d&&ao(g),d(g);continue}p[(h=y.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(g)}const m={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([g,y])=>{var T;if(!y.length)return;const x=(T=o==null?void 0:o[g])==null?void 0:T.children;if(x){for(const $ of[...x].reverse()){const v=$.tagName.toLowerCase();if(!Ad.includes(v))continue;const E=$.getAttributeNames().reduce((R,K)=>({...R,[K]:$.getAttribute(K)}),{}),M={tag:v,props:E};$.innerHTML&&(M.innerHTML=$.innerHTML);const P=fl(M);let B=y.findIndex(R=>(R==null?void 0:R.renderId)===P);if(B===-1){const R=Pd(M);B=y.findIndex(K=>(K==null?void 0:K.tag._d)&&K.tag._d===R)}if(B!==-1){const R=y[B];R.$el=$,ao(R),d(R),delete y[B]}}y.forEach($=>{const v=$.tag.tagPosition||"head";m[v]=m[v]||o.createDocumentFragment(),$.$el||($.$el=o.createElement($.tag.tag),ao($,!0)),m[v].appendChild($.$el),d($)})}}),m.head&&o.head.appendChild(m.head),m.bodyOpen&&o.body.insertBefore(m.bodyOpen,o.body.firstChild),m.bodyClose&&o.body.appendChild(m.bodyClose);for(const g of u)await t.hooks.callHook("dom:renderTag",g);Object.values(l).forEach(g=>g())}let zi=null;async function Rd(t,n={}){function a(){return zi=null,Hd(t,n)}const o=n.delayFn||(i=>setTimeout(i,10));return zi=zi||new Promise(i=>o(()=>i(a())))}function $v(t){return{hooks:{"entries:updated":function(n){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let a=t==null?void 0:t.delayFn;!a&&typeof requestAnimationFrame<"u"&&(a=requestAnimationFrame),Rd(n,{document:(t==null?void 0:t.document)||window.document,delayFn:a})}}}}function zv(t){var n;return((n=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const Pc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Hc(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const n=t.tagPriority||t.tag;return n in Pc?Pc[n]:10}const Mv=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Lv(){return{hooks:{"tags:resolve":t=>{const n=a=>{var o;return(o=t.tags.find(i=>i._d===a))==null?void 0:o._p};for(const{prefix:a,offset:o}of Mv)for(const i of t.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(a))){const l=n(i.tagPriority.replace(a,""));typeof l<"u"&&(i._p=l+o)}t.tags.sort((a,o)=>a._p-o._p).sort((a,o)=>Hc(a)-Hc(o))}}}}function Iv(){return{hooks:{"tags:resolve":t=>{const{tags:n}=t;let a=n.findIndex(i=>i.tag==="titleTemplate");const o=n.findIndex(i=>i.tag==="title");if(o!==-1&&a!==-1){const i=Oc(n[a].textContent,n[o].textContent);i!==null?n[o].textContent=i||n[o].textContent:delete n[o]}else if(a!==-1){const i=Oc(n[a].textContent);i!==null&&(n[a].textContent=i,n[a].tag="title",a=-1)}a!==-1&&delete n[a],t.tags=n.filter(Boolean)}}}}function Ev(){return{hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}}const Sv=["link","style","script","noscript"];function Cv(){return{hooks:{"tag:normalise":({tag:t,resolvedOptions:n})=>{n.experimentalHashHydration===!0&&(t._h=fl(t)),t.key&&Sv.includes(t.tag)&&(t._h=Od(t.key),t.props[`data-h-${t._h}`]="")}}}}const Rc=["script","link","bodyAttrs"];function Av(){const t=(n,a)=>{const o={},i={};Object.entries(a.props).forEach(([r,c])=>{r.startsWith("on")&&typeof c=="function"?i[r]=c:o[r]=c});let l;return n==="dom"&&a.tag==="script"&&typeof o.src=="string"&&typeof i.onload<"u"&&(l=o.src,delete o.src),{props:o,eventHandlers:i,delayedSrc:l}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(a=>(!Rc.includes(a.tag)||!Object.entries(a.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function")||(a.props=t("ssr",a).props),a))},"dom:beforeRenderTag":function(n){if(!Rc.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([l,r])=>l.startsWith("on")&&typeof r=="function"))return;const{props:a,eventHandlers:o,delayedSrc:i}=t("dom",n.tag);Object.keys(o).length&&(n.tag.props=a,n.tag._eventHandlers=o,n.tag._delayedSrc=i)},"dom:renderTag":function(n){const a=n.$el;if(!n.tag._eventHandlers||!a)return;const o=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:a;Object.entries(n.tag._eventHandlers).forEach(([i,l])=>{const r=`${n.tag._d||n.tag._p}:${i}`,c=i.slice(2).toLowerCase(),u=`data-h-${c}`;if(n.markSideEffect(r,()=>{}),a.hasAttribute(u))return;const p=l;a.setAttribute(u,""),o.addEventListener(c,p),n.entry&&(n.entry._sde[r]=()=>{o.removeEventListener(c,p),a.removeAttribute(u)})}),n.tag._delayedSrc&&a.setAttribute("src",n.tag._delayedSrc)}}}}const Ov=["templateParams","htmlAttrs","bodyAttrs"];function Pv(){return{hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(o=>{t.props[o]&&(t.key=t.props[o],delete t.props[o])});const a=Pd(t)||(t.key?`${t.tag}:${t.key}`:!1);a&&(t._d=a)},"tags:resolve":function(t){const n={};t.tags.forEach(o=>{const i=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,l=n[i];if(l){let c=o==null?void 0:o.tagDuplicateStrategy;if(!c&&Ov.includes(o.tag)&&(c="merge"),c==="merge"){const u=l.props;["class","style"].forEach(p=>{o.props[p]&&u[p]&&(p==="style"&&!u[p].endsWith(";")&&(u[p]+=";"),o.props[p]=`${u[p]} ${o.props[p]}`)}),n[i].props={...u,...o.props};return}else if(o._e===l._e){l._duped=l._duped||[],o._d=`${l._d}:${l._duped.length+1}`,l._duped.push(o);return}}const r=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(Ad.includes(o.tag)&&r===0){delete n[i];return}n[i]=o});const a=[];Object.values(n).forEach(o=>{const i=o._duped;delete o._duped,a.push(o),i&&a.push(...i)}),t.tags=a}}}}function so(t,n){function a(l){if(["s","pageTitle"].includes(l))return n.pageTitle;let r;return l.includes(".")?r=l.split(".").reduce((c,u)=>c&&c[u]||void 0,n):r=n[l],typeof r<"u"?r||"":!1}let o=t;try{o=decodeURI(t)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const r=a(l.slice(1));typeof r=="string"&&(t=t.replace(new RegExp(`\\${l}(\\W|$)`,"g"),`${r}$1`).trim())}),n.separator&&(t.endsWith(n.separator)&&(t=t.slice(0,-n.separator.length).trim()),t.startsWith(n.separator)&&(t=t.slice(n.separator.length).trim()),t=t.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),t}function Hv(){return{hooks:{"tags:resolve":t=>{var l;const{tags:n}=t,a=(l=n.find(r=>r.tag==="title"))==null?void 0:l.textContent,o=n.findIndex(r=>r.tag==="templateParams"),i=o!==-1?n[o].props:{};i.pageTitle=i.pageTitle||a||"";for(const r of n)if(["titleTemplate","title"].includes(r.tag)&&typeof r.textContent=="string")r.textContent=so(r.textContent,i);else if(r.tag==="meta"&&typeof r.props.content=="string")r.props.content=so(r.props.content,i);else if(r.tag==="link"&&typeof r.props.href=="string")r.props.href=so(r.props.href,i);else if(r.tag==="script"&&["application/json","application/ld+json"].includes(r.props.type)&&typeof r.innerHTML=="string")try{r.innerHTML=JSON.stringify(JSON.parse(r.innerHTML),(c,u)=>typeof u=="string"?so(u,i):u)}catch{}t.tags=n.filter(r=>r.tag!=="templateParams")}}}}const Rv=typeof window<"u";let Fd;function Fv(t){return Fd=t}function Nv(){return Fd}async function qv(t,n){const a={tag:t,props:{}};return t==="templateParams"?(a.props=n,a):["title","titleTemplate"].includes(t)?(a.textContent=n instanceof Promise?await n:n,a):typeof n=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?a.props.src=n:a.innerHTML=n,a):!1:(a.props=await Dv(t,{...n}),a.props.children&&(a.props.innerHTML=a.props.children),delete a.props.children,Object.keys(a.props).filter(o=>xv.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Cd.includes(a.tag))&&(a[o]=a.props[o]),delete a.props[o]}),["innerHTML","textContent"].forEach(o=>{if(a.tag==="script"&&typeof a[o]=="string"&&["application/ld+json","application/json"].includes(a.props.type))try{a[o]=JSON.parse(a[o])}catch{a[o]=""}typeof a[o]=="object"&&(a[o]=JSON.stringify(a[o]))}),a.props.class&&(a.props.class=jv(a.props.class)),a.props.content&&Array.isArray(a.props.content)?a.props.content.map(o=>({...a,props:{...a.props,content:o}})):a)}function jv(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(n=>t[n])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function Dv(t,n){for(const a of Object.keys(n)){const o=a.startsWith("data-");n[a]instanceof Promise&&(n[a]=await n[a]),String(n[a])==="true"?n[a]=o?"true":"":String(n[a])==="false"&&(o?n[a]="false":delete n[a])}return n}const Wv=10;async function Bv(t){const n=[];return Object.entries(t.resolvedInput).filter(([a,o])=>typeof o<"u"&&yv.includes(a)).forEach(([a,o])=>{const i=bv(o);n.push(...i.map(l=>qv(a,l)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((a,o)=>(a._e=t._i,a._p=(t._i<<Wv)+o,a))}function Vv(){return[Pv(),Lv(),Hv(),Iv(),Cv(),Av(),Ev()]}function Uv(t={}){return[$v({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function Kv(t={}){const n=Gv({...t,plugins:[...Uv(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=zv(n.resolvedOptions.document)),Fv(n),n}function Gv(t={}){let n=[],a={},o=0;const i=kv();t!=null&&t.hooks&&i.addHooks(t.hooks),t.plugins=[...Vv(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(c=>c.hooks&&i.addHooks(c.hooks)),t.document=t.document||(Rv?document:void 0);const l=()=>i.callHook("entries:updated",r),r={resolvedOptions:t,headEntries(){return n},get hooks(){return i},use(c){c.hooks&&i.addHooks(c.hooks)},push(c,u){const p={_i:o++,input:c,_sde:{}};return u!=null&&u.mode&&(p._m=u==null?void 0:u.mode),u!=null&&u.transform&&(p._t=u==null?void 0:u.transform),n.push(p),l(),{dispose(){n=n.filter(d=>d._i!==p._i?!0:(a={...a,...d._sde||{}},d._sde={},l(),!1))},patch(d){n=n.map(m=>(m._i===p._i&&(p.input=m.input=d,l()),m))}}},async resolveTags(){const c={tags:[],entries:[...n]};await i.callHook("entries:resolve",c);for(const u of c.entries){const p=u._t||(d=>d);if(u.resolvedInput=p(u.resolvedInput||u.input),u.resolvedInput)for(const d of await Bv(u)){const m={tag:d,entry:u,resolvedOptions:r.resolvedOptions};await i.callHook("tag:normalise",m),c.tags.push(m.tag)}}return await i.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...a};return a={},c},_elMap:{}};return r.hooks.callHook("init",r),r}function Qv(t){return typeof t=="function"?t():A(t)}function No(t,n=""){if(t instanceof Promise)return t;const a=Qv(t);return!t||!a?a:Array.isArray(a)?a.map(o=>No(o,n)):typeof a=="object"?Object.fromEntries(Object.entries(a).map(([o,i])=>o==="titleTemplate"||o.startsWith("on")?[o,A(i)]:[o,No(i,o)])):a}const Yv=Fo.startsWith("3"),Zv=typeof window<"u",Nd="usehead";function kr(){return It()&&z(Nd)||Nv()}function Jv(t){return{install(a){Yv&&(a.config.globalProperties.$unhead=t,a.config.globalProperties.$head=t,a.provide(Nd,t))}}.install}function Xv(t={}){const n=Kv({...t,domDelayFn:a=>setTimeout(()=>st(()=>a()),10),plugins:[ek(),...(t==null?void 0:t.plugins)||[]]});return n.install=Jv(n),n}function ek(){return{hooks:{"entries:resolve":function(t){for(const n of t.entries)n.resolvedInput=No(n.input)}}}}function tk(t,n={}){const a=kr(),o=J(!1),i=J({});ya(()=>{i.value=o.value?{}:No(t)});const l=a.push(i.value,n);return ke(i,c=>{l.patch(c)}),It()&&(Ds(()=>{l.dispose()}),sd(()=>{o.value=!0}),ad(()=>{o.value=!1})),l}function nk(t,n={}){return kr().push(t,n)}function qd(t,n={}){var o;const a=kr();if(a){const i=Zv||!!((o=a.resolvedOptions)!=null&&o.document);return n.mode==="server"&&i||n.mode==="client"&&!i?void 0:i?tk(t,n):nk(t,n)}}function ak(t,n){const a=Xv(n||{}),o={unhead:a,install(i){Fo.startsWith("3")&&(i.config.globalProperties.$head=a,i.provide("usehead",a))},use(i){a.use(i)},resolveTags(){return a.resolveTags()},headEntries(){return a.headEntries()},headTags(){return a.resolveTags()},push(i,l){return a.push(i,l)},addEntry(i,l){return a.push(i,l)},addHeadObjs(i,l){return a.push(i,l)},addReactiveEntry(i,l){const r=qd(i,l);return typeof r<"u"?r.dispose:()=>{}},removeHeadObjs(){},updateDOM(i,l){l?Hd(a,{document:i}):Rd(a,{delayFn:r=>setTimeout(()=>r(),50),document:i})},internalHooks:a.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return a.addHeadObjs=o.addHeadObjs,a.updateDOM=o.updateDOM,a.hooks.hook("dom:beforeRender",i=>{for(const l of o.hooks["before:dom"])l()===!1&&(i.shouldRender=!1)}),t&&o.addHeadObjs(t),o}const ds=Symbol("v-click-clicks"),ta=Symbol("v-click-clicks-elements"),hl=Symbol("v-click-clicks-order-map"),ms=Symbol("v-click-clicks-disabled"),jd=Symbol("slidev-slide-scale"),S=Symbol("slidev-slidev-context"),sk=Symbol("slidev-route"),ok=Symbol("slidev-slide-context"),Zn="slidev-vclick-target",Mi="slidev-vclick-hidden",ik="slidev-vclick-fade",Li="slidev-vclick-hidden-explicitly",Qa="slidev-vclick-current",oo="slidev-vclick-prior",lk=["localhost","127.0.0.1"];let rk=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((n,a)=>(a&=63,a<36?n+=a.toString(36):a<62?n+=(a-26).toString(36).toUpperCase():a>62?n+="-":n+="_",n),"");function gl(t,n){if(!t)return!1;const a=t.indexOf(n);return a>=0?(t.splice(a,1),!0):!1}function ck(...t){let n,a,o;t.length===1?(n=0,o=1,[a]=t):[n,a,o=1]=t;const i=[];let l=n;for(;l<a;)i.push(l),l+=o||1;return i}function uk(t){return t!=null}function pk(t,n){return Object.fromEntries(Object.entries(t).map(([a,o])=>n(a,o)).filter(uk))}const rs={theme:"default",title:"Hyper Text Markup Language",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",version:"1.4.3"},Ee=rs,Sn=Ee.aspectRatio??16/9,Cn=Ee.canvasWidth??980,br=Math.ceil(Cn/Sn),yr=F(()=>pk(Ee.themeConfig||{},(t,n)=>[`--slidev-theme-${t}`,n]));function Dd(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Ft(t,n,a){Object.defineProperty(t,n,{value:a,writable:!0,enumerable:!1})}const wa=Be({page:0,clicks:0});let dk=[],mk=[];Ft(wa,"$syncUp",!0);Ft(wa,"$syncDown",!0);Ft(wa,"$paused",!1);Ft(wa,"$onSet",t=>dk.push(t));Ft(wa,"$onPatch",t=>mk.push(t));Dd();Ft(wa,"$patch",async()=>!1);function Wd(t,n,a=!1){const o=[];let i=!1,l=!1,r,c;const u=Be(n);function p(h){o.push(h)}function d(h,g){u[h]!==g&&(clearTimeout(r),i=!0,u[h]=g,r=setTimeout(()=>i=!1,0))}function m(h){i||(clearTimeout(c),l=!0,Object.entries(h).forEach(([g,y])=>{u[g]=y}),c=setTimeout(()=>l=!1,0))}function f(h){let g;a?a&&window.addEventListener("storage",x=>{x&&x.key===h&&x.newValue&&m(JSON.parse(x.newValue))}):(g=new BroadcastChannel(h),g.addEventListener("message",x=>m(x.data)));function y(){!a&&g&&!l?g.postMessage(_e(u)):a&&!l&&window.localStorage.setItem(h,JSON.stringify(u)),i||o.forEach(x=>x(u))}if(ke(u,y,{deep:!0,flush:"sync"}),a){const x=window.localStorage.getItem(h);x&&m(JSON.parse(x))}}return{init:f,onPatch:p,patch:d,state:u}}const{init:fk,onPatch:hk,patch:Ya,state:Ii}=Wd(wa,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),xa=Be({});let gk=[],_k=[];Ft(xa,"$syncUp",!0);Ft(xa,"$syncDown",!0);Ft(xa,"$paused",!1);Ft(xa,"$onSet",t=>gk.push(t));Ft(xa,"$onPatch",t=>_k.push(t));Dd();Ft(xa,"$patch",async()=>!1);const{init:vk,onPatch:kk,patch:Bd,state:qo}=Wd(xa,{},!1),bk="modulepreload",yk=function(t){return"/4/html/"+t},Fc={},An=function(n,a,o){if(!a||a.length===0)return n();const i=document.getElementsByTagName("link");return Promise.all(a.map(l=>{if(l=yk(l),l in Fc)return;Fc[l]=!0;const r=l.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!o)for(let d=i.length-1;d>=0;d--){const m=i[d];if(m.href===l&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":bk,r||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),r)return new Promise((d,m)=>{p.addEventListener("load",d),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>n())};function wk(t,n){let a,o,i;const l=J(!0),r=()=>{l.value=!0,i()};ke(t,r,{flush:"sync"});const c=typeof n=="function"?n:n.get,u=typeof n=="function"?void 0:n.set,p=lr((d,m)=>(o=d,i=m,{get(){return l.value&&(a=c(),l.value=!1),o(),a},set(f){u==null||u(f)}}));return Object.isExtensible(p)&&(p.trigger=r),p}function rn(t){return er()?(wp(t),!0):!1}function Ge(t){return typeof t=="function"?t():A(t)}function xk(t){if(!Se(t))return Be(t);const n=new Proxy({},{get(a,o,i){return A(Reflect.get(t.value,o,i))},set(a,o,i){return Se(t.value[o])&&!Se(i)?t.value[o].value=i:t.value[o]=i,!0},deleteProperty(a,o){return Reflect.deleteProperty(t.value,o)},has(a,o){return Reflect.has(t.value,o)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Be(n)}const Kt=typeof window<"u",Tk=t=>typeof t<"u",$k=t=>t!=null,zk=Object.prototype.toString,_l=t=>zk.call(t)==="[object Object]",vl=()=>+Date.now(),fa=()=>{},Mk=Lk();function Lk(){var t;return Kt&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Ik(t,n){function a(...o){return new Promise((i,l)=>{Promise.resolve(t(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(i).catch(l)})}return a}const Vd=t=>t();function Ek(t=Vd){const n=J(!0);function a(){n.value=!1}function o(){n.value=!0}const i=(...l)=>{n.value&&t(...l)};return{isActive:Bt(n),pause:a,resume:o,eventFilter:i}}function Sk(t,n){var a;if(typeof t=="number")return t+n;const o=((a=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:a[0])||"",i=t.slice(o.length),l=parseFloat(o)+n;return Number.isNaN(l)?t:l+i}function Ud(...t){if(t.length!==1)return Wh(...t);const n=t[0];return typeof n=="function"?Bt(lr(()=>({get:n,set:fa}))):J(n)}var Ck=Object.defineProperty,Ak=Object.defineProperties,Ok=Object.getOwnPropertyDescriptors,Nc=Object.getOwnPropertySymbols,Pk=Object.prototype.hasOwnProperty,Hk=Object.prototype.propertyIsEnumerable,qc=(t,n,a)=>n in t?Ck(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,Rk=(t,n)=>{for(var a in n||(n={}))Pk.call(n,a)&&qc(t,a,n[a]);if(Nc)for(var a of Nc(n))Hk.call(n,a)&&qc(t,a,n[a]);return t},Fk=(t,n)=>Ak(t,Ok(n));function Nk(t){if(!Se(t))return qh(t);const n=Array.isArray(t.value)?new Array(t.value.length):{};for(const a in t.value)n[a]=lr(()=>({get(){return t.value[a]},set(o){if(Array.isArray(t.value)){const i=[...t.value];i[a]=o,t.value=i}else{const i=Fk(Rk({},t.value),{[a]:o});Object.setPrototypeOf(i,t.value),t.value=i}}}));return n}function Kd(t,n=!0){It()?Dn(t):n?t():st(t)}function qk(t){It()&&li(t)}function jk(t,n=1e3,a={}){const{immediate:o=!0,immediateCallback:i=!1}=a;let l=null;const r=J(!1);function c(){l&&(clearInterval(l),l=null)}function u(){r.value=!1,c()}function p(){const d=Ge(n);d<=0||(r.value=!0,i&&t(),c(),l=setInterval(t,d))}if(o&&Kt&&p(),Se(n)||typeof n=="function"){const d=ke(n,()=>{r.value&&Kt&&p()});rn(d)}return rn(u),{isActive:r,pause:u,resume:p}}function Dk(t,n,a={}){const{immediate:o=!0}=a,i=J(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){i.value=!1,r()}function u(...p){r(),i.value=!0,l=setTimeout(()=>{i.value=!1,l=null,t(...p)},Ge(n))}return o&&(i.value=!0,Kt&&u()),rn(c),{isPending:Bt(i),start:u,stop:c}}function Gd(t=!1,n={}){const{truthyValue:a=!0,falsyValue:o=!1}=n,i=Se(t),l=J(t);function r(c){if(arguments.length)return l.value=c,l.value;{const u=Ge(a);return l.value=l.value===u?Ge(o):u,l.value}}return i?r:[l,r]}var jc=Object.getOwnPropertySymbols,Wk=Object.prototype.hasOwnProperty,Bk=Object.prototype.propertyIsEnumerable,Vk=(t,n)=>{var a={};for(var o in t)Wk.call(t,o)&&n.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&jc)for(var o of jc(t))n.indexOf(o)<0&&Bk.call(t,o)&&(a[o]=t[o]);return a};function Uk(t,n,a={}){const o=a,{eventFilter:i=Vd}=o,l=Vk(o,["eventFilter"]);return ke(t,Ik(i,n),l)}var Kk=Object.defineProperty,Gk=Object.defineProperties,Qk=Object.getOwnPropertyDescriptors,jo=Object.getOwnPropertySymbols,Qd=Object.prototype.hasOwnProperty,Yd=Object.prototype.propertyIsEnumerable,Dc=(t,n,a)=>n in t?Kk(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,Yk=(t,n)=>{for(var a in n||(n={}))Qd.call(n,a)&&Dc(t,a,n[a]);if(jo)for(var a of jo(n))Yd.call(n,a)&&Dc(t,a,n[a]);return t},Zk=(t,n)=>Gk(t,Qk(n)),Jk=(t,n)=>{var a={};for(var o in t)Qd.call(t,o)&&n.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&jo)for(var o of jo(t))n.indexOf(o)<0&&Yd.call(t,o)&&(a[o]=t[o]);return a};function Xk(t,n,a={}){const o=a,{eventFilter:i}=o,l=Jk(o,["eventFilter"]),{eventFilter:r,pause:c,resume:u,isActive:p}=Ek(i);return{stop:Uk(t,n,Zk(Yk({},l),{eventFilter:r})),pause:c,resume:u,isActive:p}}function ot(t){var n;const a=Ge(t);return(n=a==null?void 0:a.$el)!=null?n:a}const Xe=Kt?window:void 0,Zd=Kt?window.document:void 0,e1=Kt?window.navigator:void 0;function Te(...t){let n,a,o,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([a,o,i]=t,n=Xe):[n,a,o,i]=t,!n)return fa;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const l=[],r=()=>{l.forEach(d=>d()),l.length=0},c=(d,m,f,h)=>(d.addEventListener(m,f,h),()=>d.removeEventListener(m,f,h)),u=ke(()=>[ot(n),Ge(i)],([d,m])=>{r(),d&&l.push(...a.flatMap(f=>o.map(h=>c(d,f,h,m))))},{immediate:!0,flush:"post"}),p=()=>{u(),r()};return rn(p),p}let Wc=!1;function t1(t,n,a={}){const{window:o=Xe,ignore:i=[],capture:l=!0,detectIframe:r=!1}=a;if(!o)return;Mk&&!Wc&&(Wc=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",fa)));let c=!0;const u=f=>i.some(h=>{if(typeof h=="string")return Array.from(o.document.querySelectorAll(h)).some(g=>g===f.target||f.composedPath().includes(g));{const g=ot(h);return g&&(f.target===g||f.composedPath().includes(g))}}),d=[Te(o,"click",f=>{const h=ot(t);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(c=!u(f)),!c){c=!0;return}n(f)}},{passive:!0,capture:l}),Te(o,"pointerdown",f=>{const h=ot(t);h&&(c=!f.composedPath().includes(h)&&!u(f))},{passive:!0}),r&&Te(o,"blur",f=>{var h;const g=ot(t);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(g!=null&&g.contains(o.document.activeElement))&&n(f)})].filter(Boolean);return()=>d.forEach(f=>f())}function n1(t){return typeof t=="function"?t:typeof t=="string"?n=>n.key===t:Array.isArray(t)?n=>t.includes(n.key):()=>!0}function a1(...t){let n,a,o={};t.length===3?(n=t[0],a=t[1],o=t[2]):t.length===2?typeof t[1]=="object"?(n=!0,a=t[0],o=t[1]):(n=t[0],a=t[1]):(n=!0,a=t[0]);const{target:i=Xe,eventName:l="keydown",passive:r=!1,dedupe:c=!1}=o,u=n1(n);return Te(i,l,d=>{d.repeat&&Ge(c)||u(d)&&a(d)},r)}function s1(t={}){var n;const{window:a=Xe}=t,o=(n=t.document)!=null?n:a==null?void 0:a.document,i=wk(()=>null,()=>o==null?void 0:o.activeElement);return a&&(Te(a,"blur",l=>{l.relatedTarget===null&&i.trigger()},!0),Te(a,"focus",i.trigger,!0)),i}function o1(){const t=J(!1);return It()&&Dn(()=>{t.value=!0}),t}function Bs(t){const n=o1();return F(()=>(n.value,!!t()))}function i1(t,n={}){const{immediate:a=!0,window:o=Xe}=n,i=J(!1);let l=0,r=null;function c(d){if(!i.value||!o)return;const m=d-l;t({delta:m,timestamp:d}),l=d,r=o.requestAnimationFrame(c)}function u(){!i.value&&o&&(i.value=!0,r=o.requestAnimationFrame(c))}function p(){i.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return a&&u(),rn(p),{isActive:Bt(i),pause:p,resume:u}}function na(t,n={}){const{window:a=Xe}=n,o=Bs(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let i;const l=J(!1),r=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",c):i.removeListener(c))},c=()=>{o.value&&(r(),i=a.matchMedia(Ud(t).value),l.value=!!(i!=null&&i.matches),i&&("addEventListener"in i?i.addEventListener("change",c):i.addListener(c)))};return ya(c),rn(()=>r()),l}const l1={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function r1(t,n={}){function a(c,u){let p=t[c];return u!=null&&(p=Sk(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=Xe}=n;function i(c){return o?o.matchMedia(c).matches:!1}const l=c=>na(`(min-width: ${a(c)})`,n),r=Object.keys(t).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>l(u),enumerable:!0,configurable:!0}),c),{});return Object.assign(r,{greater(c){return na(`(min-width: ${a(c,.1)})`,n)},greaterOrEqual:l,smaller(c){return na(`(max-width: ${a(c,-.1)})`,n)},smallerOrEqual(c){return na(`(max-width: ${a(c)})`,n)},between(c,u){return na(`(min-width: ${a(c)}) and (max-width: ${a(u,-.1)})`,n)},isGreater(c){return i(`(min-width: ${a(c,.1)})`)},isGreaterOrEqual(c){return i(`(min-width: ${a(c)})`)},isSmaller(c){return i(`(max-width: ${a(c,-.1)})`)},isSmallerOrEqual(c){return i(`(max-width: ${a(c)})`)},isInBetween(c,u){return i(`(min-width: ${a(c)}) and (max-width: ${a(u,-.1)})`)},current(){const c=Object.keys(t).map(u=>[u,l(u)]);return F(()=>c.filter(([,u])=>u.value).map(([u])=>u))}})}function c1(t={}){const{navigator:n=e1,read:a=!1,source:o,copiedDuring:i=1500,legacy:l=!1}=t,r=["copy","cut"],c=Bs(()=>n&&"clipboard"in n),u=F(()=>c.value||l),p=J(""),d=J(!1),m=Dk(()=>d.value=!1,i);function f(){c.value?n.clipboard.readText().then(x=>{p.value=x}):p.value=y()}if(u.value&&a)for(const x of r)Te(x,f);async function h(x=Ge(o)){u.value&&x!=null&&(c.value?await n.clipboard.writeText(x):g(x),p.value=x,d.value=!0,m.start())}function g(x){const T=document.createElement("textarea");T.value=x??"",T.style.position="absolute",T.style.opacity="0",document.body.appendChild(T),T.select(),document.execCommand("copy"),T.remove()}function y(){var x,T,$;return($=(T=(x=document==null?void 0:document.getSelection)==null?void 0:x.call(document))==null?void 0:T.toString())!=null?$:""}return{isSupported:u,text:p,copied:d,copy:h}}function u1(t){return JSON.parse(JSON.stringify(t))}const io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lo="__vueuse_ssr_handlers__",p1=d1();function d1(){return lo in io||(io[lo]=io[lo]||{}),io[lo]}function m1(t,n){return p1[t]||n}function f1(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var h1=Object.defineProperty,Bc=Object.getOwnPropertySymbols,g1=Object.prototype.hasOwnProperty,_1=Object.prototype.propertyIsEnumerable,Vc=(t,n,a)=>n in t?h1(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,Uc=(t,n)=>{for(var a in n||(n={}))g1.call(n,a)&&Vc(t,a,n[a]);if(Bc)for(var a of Bc(n))_1.call(n,a)&&Vc(t,a,n[a]);return t};const v1={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Kc="vueuse-storage";function k1(t,n,a,o={}){var i;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:m=Xe,eventFilter:f,onError:h=R=>{console.error(R)}}=o,g=(d?on:J)(n);if(!a)try{a=m1("getDefaultStorage",()=>{var R;return(R=Xe)==null?void 0:R.localStorage})()}catch(R){h(R)}if(!a)return g;const y=Ge(n),x=f1(y),T=(i=o.serializer)!=null?i:v1[x],{pause:$,resume:v}=Xk(g,()=>E(g.value),{flush:l,deep:r,eventFilter:f});return m&&c&&(Te(m,"storage",B),Te(m,Kc,P)),B(),g;function E(R){try{if(R==null)a.removeItem(t);else{const K=T.write(R),ie=a.getItem(t);ie!==K&&(a.setItem(t,K),m&&m.dispatchEvent(new CustomEvent(Kc,{detail:{key:t,oldValue:ie,newValue:K,storageArea:a}})))}}catch(K){h(K)}}function M(R){const K=R?R.newValue:a.getItem(t);if(K==null)return u&&y!==null&&a.setItem(t,T.write(y)),y;if(!R&&p){const ie=T.read(K);return typeof p=="function"?p(ie,y):x==="object"&&!Array.isArray(ie)?Uc(Uc({},y),ie):ie}else return typeof K!="string"?K:T.read(K)}function P(R){B(R.detail)}function B(R){if(!(R&&R.storageArea!==a)){if(R&&R.key==null){g.value=y;return}if(!(R&&R.key!==t)){$();try{g.value=M(R)}catch(K){h(K)}finally{R?st(v):v()}}}}}function b1(t){return na("(prefers-color-scheme: dark)",t)}var y1=Object.defineProperty,w1=Object.defineProperties,x1=Object.getOwnPropertyDescriptors,Gc=Object.getOwnPropertySymbols,T1=Object.prototype.hasOwnProperty,$1=Object.prototype.propertyIsEnumerable,Qc=(t,n,a)=>n in t?y1(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,z1=(t,n)=>{for(var a in n||(n={}))T1.call(n,a)&&Qc(t,a,n[a]);if(Gc)for(var a of Gc(n))$1.call(n,a)&&Qc(t,a,n[a]);return t},M1=(t,n)=>w1(t,x1(n));function $9(t,n={}){var a,o;const{pointerTypes:i,preventDefault:l,stopPropagation:r,exact:c,onMove:u,onEnd:p,onStart:d,initialValue:m,axis:f="both",draggingElement:h=Xe,handle:g=t}=n,y=J((a=Ge(m))!=null?a:{x:0,y:0}),x=J(),T=P=>i?i.includes(P.pointerType):!0,$=P=>{Ge(l)&&P.preventDefault(),Ge(r)&&P.stopPropagation()},v=P=>{if(!T(P)||Ge(c)&&P.target!==Ge(t))return;const B=Ge(t).getBoundingClientRect(),R={x:P.clientX-B.left,y:P.clientY-B.top};(d==null?void 0:d(R,P))!==!1&&(x.value=R,$(P))},E=P=>{if(!T(P)||!x.value)return;let{x:B,y:R}=y.value;(f==="x"||f==="both")&&(B=P.clientX-x.value.x),(f==="y"||f==="both")&&(R=P.clientY-x.value.y),y.value={x:B,y:R},u==null||u(y.value,P),$(P)},M=P=>{T(P)&&x.value&&(x.value=void 0,p==null||p(y.value,P),$(P))};if(Kt){const P={capture:(o=n.capture)!=null?o:!0};Te(g,"pointerdown",v,P),Te(h,"pointermove",E,P),Te(h,"pointerup",M,P)}return M1(z1({},Nk(y)),{position:y,isDragging:F(()=>!!x.value),style:F(()=>`left:${y.value.x}px;top:${y.value.y}px;`)})}var Yc=Object.getOwnPropertySymbols,L1=Object.prototype.hasOwnProperty,I1=Object.prototype.propertyIsEnumerable,E1=(t,n)=>{var a={};for(var o in t)L1.call(t,o)&&n.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&Yc)for(var o of Yc(t))n.indexOf(o)<0&&I1.call(t,o)&&(a[o]=t[o]);return a};function S1(t,n,a={}){const o=a,{window:i=Xe}=o,l=E1(o,["window"]);let r;const c=Bs(()=>i&&"ResizeObserver"in i),u=()=>{r&&(r.disconnect(),r=void 0)},p=F(()=>Array.isArray(t)?t.map(f=>ot(f)):[ot(t)]),d=ke(p,f=>{if(u(),c.value&&i){r=new ResizeObserver(n);for(const h of f)h&&r.observe(h,l)}},{immediate:!0,flush:"post",deep:!0}),m=()=>{u(),d()};return rn(m),{isSupported:c,stop:m}}function C1(t,n={width:0,height:0},a={}){const{window:o=Xe,box:i="content-box"}=a,l=F(()=>{var u,p;return(p=(u=ot(t))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),r=J(n.width),c=J(n.height);return S1(t,([u])=>{const p=i==="border-box"?u.borderBoxSize:i==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(o&&l.value){const d=ot(t);if(d){const m=o.getComputedStyle(d);r.value=parseFloat(m.width),c.value=parseFloat(m.height)}}else if(p){const d=Array.isArray(p)?p:[p];r.value=d.reduce((m,{inlineSize:f})=>m+f,0),c.value=d.reduce((m,{blockSize:f})=>m+f,0)}else r.value=u.contentRect.width,c.value=u.contentRect.height},a),ke(()=>ot(t),u=>{r.value=u?n.width:0,c.value=u?n.height:0}),{width:r,height:c}}function A1(t,n,a={}){const{root:o,rootMargin:i="0px",threshold:l=.1,window:r=Xe,immediate:c=!0}=a,u=Bs(()=>r&&"IntersectionObserver"in r),p=F(()=>{const g=Ge(t);return(Array.isArray(g)?g:[g]).map(ot).filter($k)});let d=fa;const m=J(c),f=u.value?ke(()=>[p.value,ot(o),m.value],([g,y])=>{if(d(),!m.value||!g.length)return;const x=new IntersectionObserver(n,{root:ot(y),rootMargin:i,threshold:l});g.forEach(T=>T&&x.observe(T)),d=()=>{x.disconnect(),d=fa}},{immediate:c,flush:"post"}):fa,h=()=>{d(),f(),m.value=!1};return rn(h),{isSupported:u,isActive:m,pause(){d(),m.value=!1},resume(){m.value=!0},stop:h}}const Zc=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function O1(t,n={}){const{document:a=Zd,autoExit:o=!1}=n,i=F(()=>{var T;return(T=ot(t))!=null?T:a==null?void 0:a.querySelector("html")}),l=J(!1),r=F(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(T=>a&&T in a||i.value&&T in i.value)),c=F(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(T=>a&&T in a||i.value&&T in i.value)),u=F(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(T=>a&&T in a||i.value&&T in i.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(T=>a&&T in a),d=Bs(()=>i.value&&a&&r.value!==void 0&&c.value!==void 0&&u.value!==void 0),m=()=>p?(a==null?void 0:a[p])===i.value:!1,f=()=>{if(u.value){if(a&&a[u.value]!=null)return a[u.value];{const T=i.value;if((T==null?void 0:T[u.value])!=null)return!!T[u.value]}}return!1};async function h(){if(d.value){if(c.value)if((a==null?void 0:a[c.value])!=null)await a[c.value]();else{const T=i.value;(T==null?void 0:T[c.value])!=null&&await T[c.value]()}l.value=!1}}async function g(){if(!d.value)return;f()&&await h();const T=i.value;r.value&&(T==null?void 0:T[r.value])!=null&&(await T[r.value](),l.value=!0)}async function y(){await(l.value?h():g())}const x=()=>{const T=f();(!T||T&&m())&&(l.value=T)};return Te(a,Zc,x,!1),Te(()=>ot(i),Zc,x,!1),o&&rn(h),{isSupported:d,isFullscreen:l,enter:g,exit:h,toggle:y}}function Gt(t,n,a={}){const{window:o=Xe}=a;return k1(t,n,o==null?void 0:o.localStorage,a)}const P1={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function H1(t={}){const{reactive:n=!1,target:a=Xe,aliasMap:o=P1,passive:i=!0,onEventFired:l=fa}=t,r=Be(new Set),c={toJSON(){return{}},current:r},u=n?Be(c):c,p=new Set,d=new Set;function m(y,x){y in u&&(n?u[y]=x:u[y].value=x)}function f(){r.clear();for(const y of d)m(y,!1)}function h(y,x){var T,$;const v=(T=y.key)==null?void 0:T.toLowerCase(),M=[($=y.code)==null?void 0:$.toLowerCase(),v].filter(Boolean);v&&(x?r.add(v):r.delete(v));for(const P of M)d.add(P),m(P,x);v==="meta"&&!x?(p.forEach(P=>{r.delete(P),m(P,!1)}),p.clear()):typeof y.getModifierState=="function"&&y.getModifierState("Meta")&&x&&[...r,...M].forEach(P=>p.add(P))}Te(a,"keydown",y=>(h(y,!0),l(y)),{passive:i}),Te(a,"keyup",y=>(h(y,!1),l(y)),{passive:i}),Te("blur",f,{passive:!0}),Te("focus",f,{passive:!0});const g=new Proxy(u,{get(y,x,T){if(typeof x!="string")return Reflect.get(y,x,T);if(x=x.toLowerCase(),x in o&&(x=o[x]),!(x in u))if(/[+_-]/.test(x)){const v=x.split(/[+_-]/g).map(E=>E.trim());u[x]=F(()=>v.every(E=>Ge(g[E])))}else u[x]=J(!1);const $=Reflect.get(y,x,T);return n?Ge($):$}});return g}const R1={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof Touch?null:[t.movementX,t.movementY]};function z9(t={}){const{type:n="page",touch:a=!0,resetOnTouchEnds:o=!1,initialValue:i={x:0,y:0},window:l=Xe,target:r=l,eventFilter:c}=t,u=J(i.x),p=J(i.y),d=J(null),m=typeof n=="function"?n:R1[n],f=T=>{const $=m(T);$&&([u.value,p.value]=$,d.value="mouse")},h=T=>{if(T.touches.length>0){const $=m(T.touches[0]);$&&([u.value,p.value]=$,d.value="touch")}},g=()=>{u.value=i.x,p.value=i.y},y=c?T=>c(()=>f(T),{}):T=>f(T),x=c?T=>c(()=>h(T),{}):T=>h(T);return r&&(Te(r,"mousemove",y,{passive:!0}),Te(r,"dragover",y,{passive:!0}),a&&n!=="movement"&&(Te(r,"touchstart",x,{passive:!0}),Te(r,"touchmove",x,{passive:!0}),o&&Te(r,"touchend",g,{passive:!0}))),{x:u,y:p,sourceType:d}}function F1(t,n={}){const a=Ud(t),{threshold:o=50,onSwipe:i,onSwipeEnd:l,onSwipeStart:r}=n,c=Be({x:0,y:0}),u=(P,B)=>{c.x=P,c.y=B},p=Be({x:0,y:0}),d=(P,B)=>{p.x=P,p.y=B},m=F(()=>c.x-p.x),f=F(()=>c.y-p.y),{max:h,abs:g}=Math,y=F(()=>h(g(m.value),g(f.value))>=o),x=J(!1),T=J(!1),$=F(()=>y.value?g(m.value)>g(f.value)?m.value>0?"left":"right":f.value>0?"up":"down":"none"),v=P=>{var B,R,K;const ie=P.buttons===0,me=P.buttons===1;return(K=(R=(B=n.pointerTypes)==null?void 0:B.includes(P.pointerType))!=null?R:ie||me)!=null?K:!0},E=[Te(t,"pointerdown",P=>{var B,R;if(!v(P))return;T.value=!0,(R=(B=a.value)==null?void 0:B.style)==null||R.setProperty("touch-action","none");const K=P.target;K==null||K.setPointerCapture(P.pointerId);const{clientX:ie,clientY:me}=P;u(ie,me),d(ie,me),r==null||r(P)}),Te(t,"pointermove",P=>{if(!v(P)||!T.value)return;const{clientX:B,clientY:R}=P;d(B,R),!x.value&&y.value&&(x.value=!0),x.value&&(i==null||i(P))}),Te(t,"pointerup",P=>{var B,R;v(P)&&(x.value&&(l==null||l(P,$.value)),T.value=!1,x.value=!1,(R=(B=a.value)==null?void 0:B.style)==null||R.setProperty("touch-action","initial"))})],M=()=>E.forEach(P=>P());return{isSwiping:Bt(x),direction:Bt($),posStart:Bt(c),posEnd:Bt(p),distanceX:m,distanceY:f,stop:M}}let N1=0;function M9(t,n={}){const a=J(!1),{document:o=Zd,immediate:i=!0,manual:l=!1,id:r=`vueuse_styletag_${++N1}`}=n,c=J(t);let u=()=>{};const p=()=>{if(!o)return;const m=o.getElementById(r)||o.createElement("style");m.isConnected||(m.type="text/css",m.id=r,n.media&&(m.media=n.media),o.head.appendChild(m)),!a.value&&(u=ke(c,f=>{m.textContent=f},{immediate:!0}),a.value=!0)},d=()=>{!o||!a.value||(u(),o.head.removeChild(o.getElementById(r)),a.value=!1)};return i&&!l&&Kd(p),l||rn(d),{id:r,css:c,unload:d,load:p,isLoaded:Bt(a)}}var q1=Object.defineProperty,Jc=Object.getOwnPropertySymbols,j1=Object.prototype.hasOwnProperty,D1=Object.prototype.propertyIsEnumerable,Xc=(t,n,a)=>n in t?q1(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,W1=(t,n)=>{for(var a in n||(n={}))j1.call(n,a)&&Xc(t,a,n[a]);if(Jc)for(var a of Jc(n))D1.call(n,a)&&Xc(t,a,n[a]);return t};function L9(t={}){const{controls:n=!1,offset:a=0,immediate:o=!0,interval:i="requestAnimationFrame",callback:l}=t,r=J(vl()+a),c=()=>r.value=vl()+a,u=l?()=>{c(),l(r.value)}:c,p=i==="requestAnimationFrame"?i1(u,{immediate:o}):jk(u,i,{immediate:o});return n?W1({timestamp:r},p):r}function en(t,n,a,o={}){var i,l,r;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:m,shouldEmit:f}=o,h=It(),g=a||(h==null?void 0:h.emit)||((i=h==null?void 0:h.$emit)==null?void 0:i.bind(h))||((r=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(h==null?void 0:h.proxy));let y=p;n||(n="modelValue"),y=p||y||`update:${n.toString()}`;const x=v=>c?typeof c=="function"?c(v):u1(v):v,T=()=>Tk(t[n])?x(t[n]):m,$=v=>{f?f(v)&&g(y,v):g(y,v)};if(u){const v=T(),E=J(v);return ke(()=>t[n],M=>E.value=x(M)),ke(E,M=>{(M!==t[n]||d)&&$(M)},{deep:d}),E}else return F({get(){return T()},set(v){$(v)}})}function I9({window:t=Xe}={}){if(!t)return J(!1);const n=J(t.document.hasFocus());return Te(t,"blur",()=>{n.value=!1}),Te(t,"focus",()=>{n.value=!0}),n}function B1(t={}){const{window:n=Xe,initialWidth:a=1/0,initialHeight:o=1/0,listenOrientation:i=!0,includeScrollbar:l=!0}=t,r=J(a),c=J(o),u=()=>{n&&(l?(r.value=n.innerWidth,c.value=n.innerHeight):(r.value=n.document.documentElement.clientWidth,c.value=n.document.documentElement.clientHeight))};if(u(),Kd(u),Te("resize",u,{passive:!0}),i){const p=na("(orientation: portrait)");ke(p,()=>u())}return{width:r,height:c}}function V1(){return Jd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Jd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const U1=typeof Proxy=="function",K1="devtools-plugin:setup",G1="plugin:settings:set";let za,kl;function Q1(){var t;return za!==void 0||(typeof window<"u"&&window.performance?(za=!0,kl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(za=!0,kl=global.perf_hooks.performance):za=!1),za}function Y1(){return Q1()?kl.now():Date.now()}class Z1{constructor(n,a){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=a;const o={};if(n.settings)for(const r in n.settings){const c=n.settings[r];o[r]=c.defaultValue}const i=`__vue-devtools-plugin-settings__${n.id}`;let l=Object.assign({},o);try{const r=localStorage.getItem(i),c=JSON.parse(r);Object.assign(l,c)}catch{}this.fallbacks={getSettings(){return l},setSettings(r){try{localStorage.setItem(i,JSON.stringify(r))}catch{}l=r},now(){return Y1()}},a&&a.on(G1,(r,c)=>{r===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(r,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(r,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(n){this.target=n;for(const a of this.onQueue)this.target.on[a.method](...a.args);for(const a of this.targetQueue)a.resolve(await this.target[a.method](...a.args))}}function J1(t,n){const a=t,o=Jd(),i=V1(),l=U1&&a.enableEarlyProxy;if(i&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))i.emit(K1,t,n);else{const r=l?new Z1(a,i):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:a,setupFn:n,proxy:r}),r&&n(r.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const fn=typeof window<"u";function X1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Ei(t,n){const a={};for(const o in n){const i=n[o];a[o]=Lt(i)?i.map(t):t(i)}return a}const fs=()=>{},Lt=Array.isArray;function Ie(t){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(n))}const eb=/\/$/,tb=t=>t.replace(eb,"");function Si(t,n,a="/"){let o,i={},l="",r="";const c=n.indexOf("#");let u=n.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(o=n.slice(0,u),l=n.slice(u+1,c>-1?c:n.length),i=t(l)),c>-1&&(o=o||n.slice(0,c),r=n.slice(c,n.length)),o=sb(o??n,a),{fullPath:o+(l&&"?")+l+r,path:o,query:i,hash:r}}function nb(t,n){const a=n.query?t(n.query):"";return n.path+(a&&"?")+a+(n.hash||"")}function eu(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function tu(t,n,a){const o=n.matched.length-1,i=a.matched.length-1;return o>-1&&o===i&&qn(n.matched[o],a.matched[i])&&Xd(n.params,a.params)&&t(n.query)===t(a.query)&&n.hash===a.hash}function qn(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Xd(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const a in t)if(!ab(t[a],n[a]))return!1;return!0}function ab(t,n){return Lt(t)?nu(t,n):Lt(n)?nu(n,t):t===n}function nu(t,n){return Lt(n)?t.length===n.length&&t.every((a,o)=>a===n[o]):t.length===1&&t[0]===n}function sb(t,n){if(t.startsWith("/"))return t;if(!n.startsWith("/"))return Ie(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${n}". It should look like "/${n}".`),t;if(!t)return n;const a=n.split("/"),o=t.split("/"),i=o[o.length-1];(i===".."||i===".")&&o.push("");let l=a.length-1,r,c;for(r=0;r<o.length;r++)if(c=o[r],c!==".")if(c==="..")l>1&&l--;else break;return a.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Is;(function(t){t.pop="pop",t.push="push"})(Is||(Is={}));var hs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hs||(hs={}));function ob(t){if(!t)if(fn){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tb(t)}const ib=/^[^#]+#/;function lb(t,n){return t.replace(ib,"#")+n}function rb(t,n){const a=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:n.behavior,left:o.left-a.left-(n.left||0),top:o.top-a.top-(n.top||0)}}const pi=()=>({left:window.pageXOffset,top:window.pageYOffset});function cb(t){let n;if("el"in t){const a=t.el,o=typeof a=="string"&&a.startsWith("#");if(typeof t.el=="string"&&(!o||!document.getElementById(t.el.slice(1))))try{const l=document.querySelector(t.el);if(o&&l){Ie(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{Ie(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const i=typeof a=="string"?o?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!i){Ie(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}n=rb(i,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function au(t,n){return(history.state?history.state.position-n:-1)+t}const bl=new Map;function ub(t,n){bl.set(t,n)}function pb(t){const n=bl.get(t);return bl.delete(t),n}let db=()=>location.protocol+"//"+location.host;function em(t,n){const{pathname:a,search:o,hash:i}=n,l=t.indexOf("#");if(l>-1){let c=i.includes(t.slice(l))?t.slice(l).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),eu(u,"")}return eu(a,t)+o+i}function mb(t,n,a,o){let i=[],l=[],r=null;const c=({state:f})=>{const h=em(t,location),g=a.value,y=n.value;let x=0;if(f){if(a.value=h,n.value=f,r&&r===g){r=null;return}x=y?f.position-y.position:0}else o(h);i.forEach(T=>{T(a.value,g,{delta:x,type:Is.pop,direction:x?x>0?hs.forward:hs.back:hs.unknown})})};function u(){r=a.value}function p(f){i.push(f);const h=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return l.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(Oe({},f.state,{scroll:pi()}),"")}function m(){for(const f of l)f();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:p,destroy:m}}function su(t,n,a,o=!1,i=!1){return{back:t,current:n,forward:a,replaced:o,position:window.history.length,scroll:i?pi():null}}function fb(t){const{history:n,location:a}=window,o={value:em(t,a)},i={value:n.state};i.value||l(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(u,p,d){const m=t.indexOf("#"),f=m>-1?(a.host&&document.querySelector("base")?t:t.slice(m))+u:db()+t+u;try{n[d?"replaceState":"pushState"](p,"",f),i.value=p}catch(h){Ie("Error with push/replace State",h),a[d?"replace":"assign"](f)}}function r(u,p){const d=Oe({},n.state,su(i.value.back,u,i.value.forward,!0),p,{position:i.value.position});l(u,d,!0),o.value=u}function c(u,p){const d=Oe({},i.value,n.state,{forward:u,scroll:pi()});n.state||Ie(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(d.current,d,!0);const m=Oe({},su(o.value,u,null),{position:d.position+1},p);l(u,m,!1),o.value=u}return{location:o,state:i,push:c,replace:r}}function hb(t){t=ob(t);const n=fb(t),a=mb(t,n.state,n.location,n.replace);function o(l,r=!0){r||a.pauseListeners(),history.go(l)}const i=Oe({location:"",base:t,go:o,createHref:lb.bind(null,t)},n,a);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>n.state.value}),i}function gb(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),!t.endsWith("#/")&&!t.endsWith("#")&&Ie(`A hash base must end with a "#":
"${t}" should be "${t.replace(/#.*$/,"#")}".`),hb(t)}function _b(t){return typeof t=="string"||t&&typeof t=="object"}function tm(t){return typeof t=="string"||typeof t=="symbol"}const wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nm=Symbol("navigation failure");var ou;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ou||(ou={}));const vb={[1]({location:t,currentLocation:n}){return`No match for
 ${JSON.stringify(t)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:t,to:n}){return`Redirected from "${t.fullPath}" to "${bb(n)}" via a navigation guard.`},[4]({from:t,to:n}){return`Navigation aborted from "${t.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:t,to:n}){return`Navigation cancelled from "${t.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:t,to:n}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function Ra(t,n){return Oe(new Error(vb[t](n)),{type:t,[nm]:!0},n)}function cn(t,n){return t instanceof Error&&nm in t&&(n==null||!!(t.type&n))}const kb=["params","query","hash"];function bb(t){if(typeof t=="string")return t;if("path"in t)return t.path;const n={};for(const a of kb)a in t&&(n[a]=t[a]);return JSON.stringify(n,null,2)}const iu="[^/]+?",yb={sensitive:!1,strict:!1,start:!0,end:!0},wb=/[.+*?^${}()[\]/\\]/g;function xb(t,n){const a=Oe({},yb,n),o=[];let i=a.start?"^":"";const l=[];for(const p of t){const d=p.length?[]:[90];a.strict&&!p.length&&(i+="/");for(let m=0;m<p.length;m++){const f=p[m];let h=40+(a.sensitive?.25:0);if(f.type===0)m||(i+="/"),i+=f.value.replace(wb,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:y,optional:x,regexp:T}=f;l.push({name:g,repeatable:y,optional:x});const $=T||iu;if($!==iu){h+=10;try{new RegExp(`(${$})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${$}): `+E.message)}}let v=y?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;m||(v=x&&p.length<2?`(?:/${v})`:"/"+v),x&&(v+="?"),i+=v,h+=20,x&&(h+=-8),y&&(h+=-20),$===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(a.strict&&a.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}a.strict||(i+="/?"),a.end?i+="$":a.strict&&(i+="(?:/|$)");const r=new RegExp(i,a.sensitive?"":"i");function c(p){const d=p.match(r),m={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",g=l[f-1];m[g.name]=h&&g.repeatable?h.split("/"):h}return m}function u(p){let d="",m=!1;for(const f of t){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:g,repeatable:y,optional:x}=h,T=g in p?p[g]:"";if(Lt(T)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const $=Lt(T)?T.join("/"):T;if(!$)if(x)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${g}"`);d+=$}}return d||"/"}return{re:r,score:o,keys:l,parse:c,stringify:u}}function Tb(t,n){let a=0;for(;a<t.length&&a<n.length;){const o=n[a]-t[a];if(o)return o;a++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function $b(t,n){let a=0;const o=t.score,i=n.score;for(;a<o.length&&a<i.length;){const l=Tb(o[a],i[a]);if(l)return l;a++}if(Math.abs(i.length-o.length)===1){if(lu(o))return 1;if(lu(i))return-1}return i.length-o.length}function lu(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const zb={type:0,value:""},Mb=/[a-zA-Z0-9_]/;function Lb(t){if(!t)return[[]];if(t==="/")return[[zb]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function n(h){throw new Error(`ERR (${a})/"${p}": ${h}`)}let a=0,o=a;const i=[];let l;function r(){l&&i.push(l),l=[]}let c=0,u,p="",d="";function m(){p&&(a===0?l.push({type:0,value:p}):a===1||a===2||a===3?(l.length>1&&(u==="*"||u==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):n("Invalid state to consume buffer"),p="")}function f(){p+=u}for(;c<t.length;){if(u=t[c++],u==="\\"&&a!==2){o=a,a=4;continue}switch(a){case 0:u==="/"?(p&&m(),r()):u===":"?(m(),a=1):f();break;case 4:f(),a=o;break;case 1:u==="("?a=2:Mb.test(u)?f():(m(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:a=3:d+=u;break;case 3:m(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:n("Unknown state");break}}return a===2&&n(`Unfinished custom RegExp for param "${p}"`),m(),r(),i}function Ib(t,n,a){const o=xb(Lb(t.path),a);{const l=new Set;for(const r of o.keys)l.has(r.name)&&Ie(`Found duplicated params with name "${r.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),l.add(r.name)}const i=Oe(o,{record:t,parent:n,children:[],alias:[]});return n&&!i.record.aliasOf==!n.record.aliasOf&&n.children.push(i),i}function Eb(t,n){const a=[],o=new Map;n=uu({strict:!1,end:!0,sensitive:!1},n);function i(d){return o.get(d)}function l(d,m,f){const h=!f,g=Sb(d);Pb(g,m),g.aliasOf=f&&f.record;const y=uu(n,d),x=[g];if("alias"in d){const v=typeof d.alias=="string"?[d.alias]:d.alias;for(const E of v)x.push(Oe({},g,{components:f?f.record.components:g.components,path:E,aliasOf:f?f.record:g}))}let T,$;for(const v of x){const{path:E}=v;if(m&&E[0]!=="/"){const M=m.record.path,P=M[M.length-1]==="/"?"":"/";v.path=m.record.path+(E&&P+E)}if(v.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(T=Ib(v,m,y),m&&E[0]==="/"&&Hb(T,m),f?(f.alias.push(T),Ob(f,T)):($=$||T,$!==T&&$.alias.push(T),h&&d.name&&!cu(T)&&r(d.name)),g.children){const M=g.children;for(let P=0;P<M.length;P++)l(M[P],T,f&&f.children[P])}f=f||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&u(T)}return $?()=>{r($)}:fs}function r(d){if(tm(d)){const m=o.get(d);m&&(o.delete(d),a.splice(a.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=a.indexOf(d);m>-1&&(a.splice(m,1),d.record.name&&o.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return a}function u(d){let m=0;for(;m<a.length&&$b(d,a[m])>=0&&(d.record.path!==a[m].record.path||!am(d,a[m]));)m++;a.splice(m,0,d),d.record.name&&!cu(d)&&o.set(d.record.name,d)}function p(d,m){let f,h={},g,y;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw Ra(1,{location:d});{const $=Object.keys(d.params||{}).filter(v=>!f.keys.find(E=>E.name===v));$.length&&Ie(`Discarded invalid param(s) "${$.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}y=f.record.name,h=Oe(ru(m.params,f.keys.filter($=>!$.optional).map($=>$.name)),d.params&&ru(d.params,f.keys.map($=>$.name))),g=f.stringify(h)}else if("path"in d)g=d.path,g.startsWith("/")||Ie(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=a.find($=>$.re.test(g)),f&&(h=f.parse(g),y=f.record.name);else{if(f=m.name?o.get(m.name):a.find($=>$.re.test(m.path)),!f)throw Ra(1,{location:d,currentLocation:m});y=f.record.name,h=Oe({},m.params,d.params),g=f.stringify(h)}const x=[];let T=f;for(;T;)x.unshift(T.record),T=T.parent;return{name:y,path:g,params:h,matched:x,meta:Ab(x)}}return t.forEach(d=>l(d)),{addRoute:l,resolve:p,removeRoute:r,getRoutes:c,getRecordMatcher:i}}function ru(t,n){const a={};for(const o of n)o in t&&(a[o]=t[o]);return a}function Sb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Cb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Cb(t){const n={},a=t.props||!1;if("component"in t)n.default=a;else for(const o in t.components)n[o]=typeof a=="boolean"?a:a[o];return n}function cu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ab(t){return t.reduce((n,a)=>Oe(n,a.meta),{})}function uu(t,n){const a={};for(const o in t)a[o]=o in n?n[o]:t[o];return a}function yl(t,n){return t.name===n.name&&t.optional===n.optional&&t.repeatable===n.repeatable}function Ob(t,n){for(const a of t.keys)if(!a.optional&&!n.keys.find(yl.bind(null,a)))return Ie(`Alias "${n.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${a.name}"`);for(const a of n.keys)if(!a.optional&&!t.keys.find(yl.bind(null,a)))return Ie(`Alias "${n.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${a.name}"`)}function Pb(t,n){n&&n.record.name&&!t.name&&!t.path&&Ie(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Hb(t,n){for(const a of n.keys)if(!t.keys.find(yl.bind(null,a)))return Ie(`Absolute path "${t.record.path}" must have the exact same param named "${a.name}" as its parent "${n.record.path}".`)}function am(t,n){return n.children.some(a=>a===t||am(t,a))}const sm=/#/g,Rb=/&/g,Fb=/\//g,Nb=/=/g,qb=/\?/g,om=/\+/g,jb=/%5B/g,Db=/%5D/g,im=/%5E/g,Wb=/%60/g,lm=/%7B/g,Bb=/%7C/g,rm=/%7D/g,Vb=/%20/g;function wr(t){return encodeURI(""+t).replace(Bb,"|").replace(jb,"[").replace(Db,"]")}function Ub(t){return wr(t).replace(lm,"{").replace(rm,"}").replace(im,"^")}function wl(t){return wr(t).replace(om,"%2B").replace(Vb,"+").replace(sm,"%23").replace(Rb,"%26").replace(Wb,"`").replace(lm,"{").replace(rm,"}").replace(im,"^")}function Kb(t){return wl(t).replace(Nb,"%3D")}function Gb(t){return wr(t).replace(sm,"%23").replace(qb,"%3F")}function Qb(t){return t==null?"":Gb(t).replace(Fb,"%2F")}function Es(t){try{return decodeURIComponent(""+t)}catch{Ie(`Error decoding "${t}". Using original value`)}return""+t}function Yb(t){const n={};if(t===""||t==="?")return n;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<o.length;++i){const l=o[i].replace(om," "),r=l.indexOf("="),c=Es(r<0?l:l.slice(0,r)),u=r<0?null:Es(l.slice(r+1));if(c in n){let p=n[c];Lt(p)||(p=n[c]=[p]),p.push(u)}else n[c]=u}return n}function pu(t){let n="";for(let a in t){const o=t[a];if(a=Kb(a),o==null){o!==void 0&&(n+=(n.length?"&":"")+a);continue}(Lt(o)?o.map(l=>l&&wl(l)):[o&&wl(o)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+a,l!=null&&(n+="="+l))})}return n}function Zb(t){const n={};for(const a in t){const o=t[a];o!==void 0&&(n[a]=Lt(o)?o.map(i=>i==null?null:""+i):o==null?o:""+o)}return n}const Jb=Symbol("router view location matched"),du=Symbol("router view depth"),xr=Symbol("router"),cm=Symbol("route location"),xl=Symbol("router view location");function Za(){let t=[];function n(o){return t.push(o),()=>{const i=t.indexOf(o);i>-1&&t.splice(i,1)}}function a(){t=[]}return{add:n,list:()=>t,reset:a}}function zn(t,n,a,o,i){const l=o&&(o.enterCallbacks[i]=o.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const u=m=>{m===!1?c(Ra(4,{from:a,to:n})):m instanceof Error?c(m):_b(m)?c(Ra(2,{from:n,to:m})):(l&&o.enterCallbacks[i]===l&&typeof m=="function"&&l.push(m),r())},p=t.call(o&&o.instances[i],n,a,Xb(u,n,a));let d=Promise.resolve(p);if(t.length<3&&(d=d.then(u)),t.length>2){const m=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(f=>u._called?f:(Ie(m),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){Ie(m),c(new Error("Invalid navigation guard"));return}}d.catch(m=>c(m))})}function Xb(t,n,a){let o=0;return function(){o++===1&&Ie(`The "next" callback was called more than once in one navigation guard when going from "${a.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,o===1&&t.apply(null,arguments)}}function Ci(t,n,a,o){const i=[];for(const l of t){!l.components&&!l.children.length&&Ie(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const r in l.components){let c=l.components[r];{if(!c||typeof c!="object"&&typeof c!="function")throw Ie(`Component "${r}" in record with path "${l.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Ie(`Component "${r}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Ie(`Component "${r}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!l.instances[r]))if(e0(c)){const p=(c.__vccOpts||c)[n];p&&i.push(zn(p,a,o,l,r))}else{let u=c();"catch"in u||(Ie(`Component "${r}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),i.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=X1(p)?p.default:p;l.components[r]=d;const f=(d.__vccOpts||d)[n];return f&&zn(f,a,o,l,r)()}))}}}return i}function e0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function mu(t){const n=z(xr),a=z(cm),o=F(()=>n.resolve(A(t.to))),i=F(()=>{const{matched:u}=o.value,{length:p}=u,d=u[p-1],m=a.matched;if(!d||!m.length)return-1;const f=m.findIndex(qn.bind(null,d));if(f>-1)return f;const h=fu(u[p-2]);return p>1&&fu(d)===h&&m[m.length-1].path!==h?m.findIndex(qn.bind(null,u[p-2])):f}),l=F(()=>i.value>-1&&s0(a.params,o.value.params)),r=F(()=>i.value>-1&&i.value===a.matched.length-1&&Xd(a.params,o.value.params));function c(u={}){return a0(u)?n[A(t.replace)?"replace":"push"](A(t.to)).catch(fs):Promise.resolve()}if(fn){const u=It();if(u){const p={route:o.value,isActive:l.value,isExactActive:r.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),ya(()=>{p.route=o.value,p.isActive=l.value,p.isExactActive=r.value},{flush:"post"})}}return{route:o,href:F(()=>o.value.href),isActive:l,isExactActive:r,navigate:c}}const t0=Pe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mu,setup(t,{slots:n}){const a=Be(mu(t)),{options:o}=z(xr),i=F(()=>({[hu(t.activeClass,o.linkActiveClass,"router-link-active")]:a.isActive,[hu(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const l=n.default&&n.default(a);return t.custom?l:yt("a",{"aria-current":a.isExactActive?t.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:i.value},l)}}}),n0=t0;function a0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function s0(t,n){for(const a in n){const o=n[a],i=t[a];if(typeof o=="string"){if(o!==i)return!1}else if(!Lt(i)||i.length!==o.length||o.some((l,r)=>l!==i[r]))return!1}return!0}function fu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hu=(t,n,a)=>t??n??a,o0=Pe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:a}){l0();const o=z(xl),i=F(()=>t.route||o.value),l=z(du,0),r=F(()=>{let p=A(l);const{matched:d}=i.value;let m;for(;(m=d[p])&&!m.components;)p++;return p}),c=F(()=>i.value.matched[r.value]);$t(du,F(()=>r.value+1)),$t(Jb,c),$t(xl,i);const u=J();return ke(()=>[u.value,c.value,t.name],([p,d,m],[f,h,g])=>{d&&(d.instances[m]=p,h&&h!==d&&p&&p===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),p&&d&&(!h||!qn(d,h)||!f)&&(d.enterCallbacks[m]||[]).forEach(y=>y(p))},{flush:"post"}),()=>{const p=i.value,d=t.name,m=c.value,f=m&&m.components[d];if(!f)return gu(a.default,{Component:f,route:p});const h=m.props[d],g=h?h===!0?p.params:typeof h=="function"?h(p):h:null,x=yt(f,Oe({},g,n,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(m.instances[d]=null)},ref:u}));if(fn&&x.ref){const T={depth:r.value,name:m.name,path:m.path,meta:m.meta};(Lt(x.ref)?x.ref.map(v=>v.i):[x.ref.i]).forEach(v=>{v.__vrv_devtools=T})}return gu(a.default,{Component:x,route:p})||x}}});function gu(t,n){if(!t)return null;const a=t(n);return a.length===1?a[0]:a}const i0=o0;function l0(){const t=It(),n=t.parent&&t.parent.type.name,a=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(n&&(n==="KeepAlive"||n.includes("Transition"))&&typeof a=="object"&&a.name==="RouterView"){const o=n==="KeepAlive"?"keep-alive":"transition";Ie(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function Ja(t,n){const a=Oe({},t,{matched:t.matched.map(o=>g0(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:n,value:a}}}function ro(t){return{_custom:{display:t}}}let r0=0;function c0(t,n,a){if(n.__hasDevtools)return;n.__hasDevtools=!0;const o=r0++;J1({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},i=>{typeof i.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.on.inspectComponent((d,m)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ja(n.currentRoute.value,"Current Route")})}),i.on.visitComponentTree(({treeNode:d,componentInstance:m})=>{if(m.__vrv_devtools){const f=m.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:um})}Lt(m.__vrl_devtools)&&(m.__devtoolsApi=i,m.__vrl_devtools.forEach(f=>{let h=mm,g="";f.isExactActive?(h=dm,g="This is exactly active"):f.isActive&&(h=pm,g="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:g,backgroundColor:h})}))}),ke(n.currentRoute,()=>{u(),i.notifyComponentUpdate(),i.sendInspectorTree(c),i.sendInspectorState(c)});const l="router:navigations:"+o;i.addTimelineLayer({id:l,label:`Router${o?" "+o:""} Navigations`,color:4237508}),n.onError((d,m)=>{i.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:i.now(),data:{error:d},groupId:m.meta.__navigationId}})});let r=0;n.beforeEach((d,m)=>{const f={guard:ro("beforeEach"),from:Ja(m,"Current Location during this navigation"),to:Ja(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:r++}),i.addTimelineEvent({layerId:l,event:{time:i.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),n.afterEach((d,m,f)=>{const h={guard:ro("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=ro("❌")):h.status=ro("✅"),h.from=Ja(m,"Current Location during this navigation"),h.to=Ja(d,"Target location"),i.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:d.fullPath,time:i.now(),data:h,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+o;i.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let m=a.getRoutes().filter(f=>!f.parent);m.forEach(gm),d.filter&&(m=m.filter(f=>Tl(f,d.filter.toLowerCase()))),m.forEach(f=>hm(f,n.currentRoute.value)),d.rootNodes=m.map(fm)}let p;i.on.getInspectorTree(d=>{p=d,d.app===t&&d.inspectorId===c&&u()}),i.on.getInspectorState(d=>{if(d.app===t&&d.inspectorId===c){const f=a.getRoutes().find(h=>h.record.__vd_id===d.nodeId);f&&(d.state={options:p0(f)})}}),i.sendInspectorTree(c),i.sendInspectorState(c)})}function u0(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function p0(t){const{record:n}=t,a=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&a.push({editable:!1,key:"name",value:n.name}),a.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&a.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(o=>`${o.name}${u0(o)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),n.redirect!=null&&a.push({editable:!1,key:"redirect",value:n.redirect}),t.alias.length&&a.push({editable:!1,key:"aliases",value:t.alias.map(o=>o.record.path)}),Object.keys(t.record.meta).length&&a.push({editable:!1,key:"meta",value:t.record.meta}),a.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),a}const um=15485081,pm=2450411,dm=8702998,d0=2282478,mm=16486972,m0=6710886;function fm(t){const n=[],{record:a}=t;a.name!=null&&n.push({label:String(a.name),textColor:0,backgroundColor:d0}),a.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:mm}),t.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:um}),t.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:dm}),t.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:pm}),a.redirect&&n.push({label:typeof a.redirect=="string"?`redirect: ${a.redirect}`:"redirects",textColor:16777215,backgroundColor:m0});let o=a.__vd_id;return o==null&&(o=String(f0++),a.__vd_id=o),{id:o,label:a.path,tags:n,children:t.children.map(fm)}}let f0=0;const h0=/^\/(.*)\/([a-z]*)$/;function hm(t,n){const a=n.matched.length&&qn(n.matched[n.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=a,a||(t.__vd_active=n.matched.some(o=>qn(o,t.record))),t.children.forEach(o=>hm(o,n))}function gm(t){t.__vd_match=!1,t.children.forEach(gm)}function Tl(t,n){const a=String(t.re).match(h0);if(t.__vd_match=!1,!a||a.length<3)return!1;if(new RegExp(a[1].replace(/\$$/,""),a[2]).test(n))return t.children.forEach(r=>Tl(r,n)),t.record.path!=="/"||n==="/"?(t.__vd_match=t.re.test(n),!0):!1;const i=t.record.path.toLowerCase(),l=Es(i);return!n.startsWith("/")&&(l.includes(n)||i.includes(n))||l.startsWith(n)||i.startsWith(n)||t.record.name&&String(t.record.name).includes(n)?!0:t.children.some(r=>Tl(r,n))}function g0(t,n){const a={};for(const o in t)n.includes(o)||(a[o]=t[o]);return a}function _0(t){const n=Eb(t.routes,t),a=t.parseQuery||Yb,o=t.stringifyQuery||pu,i=t.history;if(!i)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Za(),r=Za(),c=Za(),u=on(wn);let p=wn;fn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ei.bind(null,H=>""+H),m=Ei.bind(null,Qb),f=Ei.bind(null,Es);function h(H,ee){let ne,se;return tm(H)?(ne=n.getRecordMatcher(H),se=ee):se=H,n.addRoute(se,ne)}function g(H){const ee=n.getRecordMatcher(H);ee?n.removeRoute(ee):Ie(`Cannot remove non-existent route "${String(H)}"`)}function y(){return n.getRoutes().map(H=>H.record)}function x(H){return!!n.getRecordMatcher(H)}function T(H,ee){if(ee=Oe({},ee||u.value),typeof H=="string"){const k=Si(a,H,ee.path),I=n.resolve({path:k.path},ee),D=i.createHref(k.fullPath);return D.startsWith("//")?Ie(`Location "${H}" resolved to "${D}". A resolved location cannot start with multiple slashes.`):I.matched.length||Ie(`No match found for location with path "${H}"`),Oe(k,I,{params:f(I.params),hash:Es(k.hash),redirectedFrom:void 0,href:D})}let ne;if("path"in H)"params"in H&&!("name"in H)&&Object.keys(H.params).length&&Ie(`Path "${H.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),ne=Oe({},H,{path:Si(a,H.path,ee.path).path});else{const k=Oe({},H.params);for(const I in k)k[I]==null&&delete k[I];ne=Oe({},H,{params:m(k)}),ee.params=m(ee.params)}const se=n.resolve(ne,ee),$e=H.hash||"";$e&&!$e.startsWith("#")&&Ie(`A \`hash\` should always start with the character "#". Replace "${$e}" with "#${$e}".`),se.params=d(f(se.params));const Fe=nb(o,Oe({},H,{hash:Ub($e),path:se.path})),_=i.createHref(Fe);return _.startsWith("//")?Ie(`Location "${H}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):se.matched.length||Ie(`No match found for location with path "${"path"in H?H.path:H}"`),Oe({fullPath:Fe,hash:$e,query:o===pu?Zb(H.query):H.query||{}},se,{redirectedFrom:void 0,href:_})}function $(H){return typeof H=="string"?Si(a,H,u.value.path):Oe({},H)}function v(H,ee){if(p!==H)return Ra(8,{from:ee,to:H})}function E(H){return B(H)}function M(H){return E(Oe($(H),{replace:!0}))}function P(H){const ee=H.matched[H.matched.length-1];if(ee&&ee.redirect){const{redirect:ne}=ee;let se=typeof ne=="function"?ne(H):ne;if(typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=$(se):{path:se},se.params={}),!("path"in se)&&!("name"in se))throw Ie(`Invalid redirect found:
${JSON.stringify(se,null,2)}
 when navigating to "${H.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Oe({query:H.query,hash:H.hash,params:"path"in se?{}:H.params},se)}}function B(H,ee){const ne=p=T(H),se=u.value,$e=H.state,Fe=H.force,_=H.replace===!0,k=P(ne);if(k)return B(Oe($(k),{state:typeof k=="object"?Oe({},$e,k.state):$e,force:Fe,replace:_}),ee||ne);const I=ne;I.redirectedFrom=ee;let D;return!Fe&&tu(o,se,ne)&&(D=Ra(16,{to:I,from:se}),Et(se,se,!0,!1)),(D?Promise.resolve(D):ie(I,se)).catch(N=>cn(N)?cn(N,2)?N:He(N):pe(N,I,se)).then(N=>{if(N){if(cn(N,2))return tu(o,T(N.to),I)&&ee&&(ee._count=ee._count?ee._count+1:1)>30?(Ie(`Detected a possibly infinite redirection in a navigation guard when going from "${se.fullPath}" to "${I.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):B(Oe({replace:_},$(N.to),{state:typeof N.to=="object"?Oe({},$e,N.to.state):$e,force:Fe}),ee||I)}else N=X(I,se,!0,_,$e);return me(I,se,N),N})}function R(H,ee){const ne=v(H,ee);return ne?Promise.reject(ne):Promise.resolve()}function K(H){const ee=Qt.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(H):H()}function ie(H,ee){let ne;const[se,$e,Fe]=v0(H,ee);ne=Ci(se.reverse(),"beforeRouteLeave",H,ee);for(const k of se)k.leaveGuards.forEach(I=>{ne.push(zn(I,H,ee))});const _=R.bind(null,H,ee);return ne.push(_),St(ne).then(()=>{ne=[];for(const k of l.list())ne.push(zn(k,H,ee));return ne.push(_),St(ne)}).then(()=>{ne=Ci($e,"beforeRouteUpdate",H,ee);for(const k of $e)k.updateGuards.forEach(I=>{ne.push(zn(I,H,ee))});return ne.push(_),St(ne)}).then(()=>{ne=[];for(const k of H.matched)if(k.beforeEnter&&!ee.matched.includes(k))if(Lt(k.beforeEnter))for(const I of k.beforeEnter)ne.push(zn(I,H,ee));else ne.push(zn(k.beforeEnter,H,ee));return ne.push(_),St(ne)}).then(()=>(H.matched.forEach(k=>k.enterCallbacks={}),ne=Ci(Fe,"beforeRouteEnter",H,ee),ne.push(_),St(ne))).then(()=>{ne=[];for(const k of r.list())ne.push(zn(k,H,ee));return ne.push(_),St(ne)}).catch(k=>cn(k,8)?k:Promise.reject(k))}function me(H,ee,ne){for(const se of c.list())K(()=>se(H,ee,ne))}function X(H,ee,ne,se,$e){const Fe=v(H,ee);if(Fe)return Fe;const _=ee===wn,k=fn?history.state:{};ne&&(se||_?i.replace(H.fullPath,Oe({scroll:_&&k&&k.scroll},$e)):i.push(H.fullPath,$e)),u.value=H,Et(H,ee,ne,_),He()}let ve;function be(){ve||(ve=i.listen((H,ee,ne)=>{if(!Bn.listening)return;const se=T(H),$e=P(se);if($e){B(Oe($e,{replace:!0}),se).catch(fs);return}p=se;const Fe=u.value;fn&&ub(au(Fe.fullPath,ne.delta),pi()),ie(se,Fe).catch(_=>cn(_,12)?_:cn(_,2)?(B(_.to,se).then(k=>{cn(k,20)&&!ne.delta&&ne.type===Is.pop&&i.go(-1,!1)}).catch(fs),Promise.reject()):(ne.delta&&i.go(-ne.delta,!1),pe(_,se,Fe))).then(_=>{_=_||X(se,Fe,!1),_&&(ne.delta&&!cn(_,8)?i.go(-ne.delta,!1):ne.type===Is.pop&&cn(_,20)&&i.go(-1,!1)),me(se,Fe,_)}).catch(fs)}))}let we=Za(),Re=Za(),ae;function pe(H,ee,ne){He(H);const se=Re.list();return se.length?se.forEach($e=>$e(H,ee,ne)):(Ie("uncaught error during route navigation:"),console.error(H)),Promise.reject(H)}function ze(){return ae&&u.value!==wn?Promise.resolve():new Promise((H,ee)=>{we.add([H,ee])})}function He(H){return ae||(ae=!H,be(),we.list().forEach(([ee,ne])=>H?ne(H):ee()),we.reset()),H}function Et(H,ee,ne,se){const{scrollBehavior:$e}=t;if(!fn||!$e)return Promise.resolve();const Fe=!ne&&pb(au(H.fullPath,0))||(se||!ne)&&history.state&&history.state.scroll||null;return st().then(()=>$e(H,ee,Fe)).then(_=>_&&cb(_)).catch(_=>pe(_,H,ee))}const nt=H=>i.go(H);let ht;const Qt=new Set,Bn={currentRoute:u,listening:!0,addRoute:h,removeRoute:g,hasRoute:x,getRoutes:y,resolve:T,options:t,push:E,replace:M,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:Re.add,isReady:ze,install(H){const ee=this;H.component("RouterLink",n0),H.component("RouterView",i0),H.config.globalProperties.$router=ee,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>A(u)}),fn&&!ht&&u.value===wn&&(ht=!0,E(i.location).catch($e=>{Ie("Unexpected error when starting the router:",$e)}));const ne={};for(const $e in wn)ne[$e]=F(()=>u.value[$e]);H.provide(xr,ee),H.provide(cm,Be(ne)),H.provide(xl,u);const se=H.unmount;Qt.add(H),H.unmount=function(){Qt.delete(H),Qt.size<1&&(p=wn,ve&&ve(),ve=null,u.value=wn,ht=!1,ae=!1),se()},fn&&c0(H,ee,n)}};function St(H){return H.reduce((ee,ne)=>ee.then(()=>K(ne)),Promise.resolve())}return Bn}function v0(t,n){const a=[],o=[],i=[],l=Math.max(n.matched.length,t.matched.length);for(let r=0;r<l;r++){const c=n.matched[r];c&&(t.matched.find(p=>qn(p,c))?o.push(c):a.push(c));const u=t.matched[r];u&&(n.matched.find(p=>qn(p,u))||i.push(u))}return[a,o,i]}const Ai=J(!1),gs=J(!1),Ea=J(!1),k0=J(!0),$l=r1({xs:460,...l1}),ha=B1(),_m=H1(),b0=F(()=>ha.height.value-ha.width.value/Sn>180),vm=O1(Kt?document.body:null),On=s1(),y0=F(()=>{var t,n;return["INPUT","TEXTAREA"].includes(((t=On.value)==null?void 0:t.tagName)||"")||((n=On.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),w0=F(()=>{var t;return["BUTTON","A"].includes(((t=On.value)==null?void 0:t.tagName)||"")});Gt("slidev-camera","default");Gt("slidev-mic","default");const ko=Gt("slidev-scale",0),ut=Gt("slidev-show-overview",!1),Oi=Gt("slidev-presenter-cursor",!0),_u=Gt("slidev-show-editor",!1);Gt("slidev-editor-width",Kt?window.innerWidth*.4:100);const km=Gd(ut);function vu(t,n,a,o=i=>i){return t*o(.5-n*(.5-a))}function x0(t){return[-t[0],-t[1]]}function Dt(t,n){return[t[0]+n[0],t[1]+n[1]]}function Ot(t,n){return[t[0]-n[0],t[1]-n[1]]}function jt(t,n){return[t[0]*n,t[1]*n]}function T0(t,n){return[t[0]/n,t[1]/n]}function Xa(t){return[t[1],-t[0]]}function ku(t,n){return t[0]*n[0]+t[1]*n[1]}function $0(t,n){return t[0]===n[0]&&t[1]===n[1]}function z0(t){return Math.hypot(t[0],t[1])}function M0(t){return t[0]*t[0]+t[1]*t[1]}function bu(t,n){return M0(Ot(t,n))}function bm(t){return T0(t,z0(t))}function L0(t,n){return Math.hypot(t[1]-n[1],t[0]-n[0])}function es(t,n,a){let o=Math.sin(a),i=Math.cos(a),l=t[0]-n[0],r=t[1]-n[1],c=l*i-r*o,u=l*o+r*i;return[c+n[0],u+n[1]]}function zl(t,n,a){return Dt(t,jt(Ot(n,t),a))}function yu(t,n,a){return Dt(t,jt(n,a))}var{min:Ma,PI:I0}=Math,wu=.275,ts=I0+1e-4;function E0(t,n={}){let{size:a=16,smoothing:o=.5,thinning:i=.5,simulatePressure:l=!0,easing:r=ae=>ae,start:c={},end:u={},last:p=!1}=n,{cap:d=!0,easing:m=ae=>ae*(2-ae)}=c,{cap:f=!0,easing:h=ae=>--ae*ae*ae+1}=u;if(t.length===0||a<=0)return[];let g=t[t.length-1].runningLength,y=c.taper===!1?0:c.taper===!0?Math.max(a,g):c.taper,x=u.taper===!1?0:u.taper===!0?Math.max(a,g):u.taper,T=Math.pow(a*o,2),$=[],v=[],E=t.slice(0,10).reduce((ae,pe)=>{let ze=pe.pressure;if(l){let He=Ma(1,pe.distance/a),Et=Ma(1,1-He);ze=Ma(1,ae+(Et-ae)*(He*wu))}return(ae+ze)/2},t[0].pressure),M=vu(a,i,t[t.length-1].pressure,r),P,B=t[0].vector,R=t[0].point,K=R,ie=R,me=K,X=!1;for(let ae=0;ae<t.length;ae++){let{pressure:pe}=t[ae],{point:ze,vector:He,distance:Et,runningLength:nt}=t[ae];if(ae<t.length-1&&g-nt<3)continue;if(i){if(l){let se=Ma(1,Et/a),$e=Ma(1,1-se);pe=Ma(1,E+($e-E)*(se*wu))}M=vu(a,i,pe,r)}else M=a/2;P===void 0&&(P=M);let ht=nt<y?m(nt/y):1,Qt=g-nt<x?h((g-nt)/x):1;M=Math.max(.01,M*Math.min(ht,Qt));let Bn=(ae<t.length-1?t[ae+1]:t[ae]).vector,St=ae<t.length-1?ku(He,Bn):1,H=ku(He,B)<0&&!X,ee=St!==null&&St<0;if(H||ee){let se=jt(Xa(B),M);for(let $e=1/13,Fe=0;Fe<=1;Fe+=$e)ie=es(Ot(ze,se),ze,ts*Fe),$.push(ie),me=es(Dt(ze,se),ze,ts*-Fe),v.push(me);R=ie,K=me,ee&&(X=!0);continue}if(X=!1,ae===t.length-1){let se=jt(Xa(He),M);$.push(Ot(ze,se)),v.push(Dt(ze,se));continue}let ne=jt(Xa(zl(Bn,He,St)),M);ie=Ot(ze,ne),(ae<=1||bu(R,ie)>T)&&($.push(ie),R=ie),me=Dt(ze,ne),(ae<=1||bu(K,me)>T)&&(v.push(me),K=me),E=pe,B=He}let ve=t[0].point.slice(0,2),be=t.length>1?t[t.length-1].point.slice(0,2):Dt(t[0].point,[1,1]),we=[],Re=[];if(t.length===1){if(!(y||x)||p){let ae=yu(ve,bm(Xa(Ot(ve,be))),-(P||M)),pe=[];for(let ze=1/13,He=ze;He<=1;He+=ze)pe.push(es(ae,ve,ts*2*He));return pe}}else{if(!(y||x&&t.length===1))if(d)for(let pe=1/13,ze=pe;ze<=1;ze+=pe){let He=es(v[0],ve,ts*ze);we.push(He)}else{let pe=Ot($[0],v[0]),ze=jt(pe,.5),He=jt(pe,.51);we.push(Ot(ve,ze),Ot(ve,He),Dt(ve,He),Dt(ve,ze))}let ae=Xa(x0(t[t.length-1].vector));if(x||y&&t.length===1)Re.push(be);else if(f){let pe=yu(be,ae,M);for(let ze=1/29,He=ze;He<1;He+=ze)Re.push(es(pe,be,ts*3*He))}else Re.push(Dt(be,jt(ae,M)),Dt(be,jt(ae,M*.99)),Ot(be,jt(ae,M*.99)),Ot(be,jt(ae,M)))}return $.concat(Re,v.reverse(),we)}function S0(t,n={}){var a;let{streamline:o=.5,size:i=16,last:l=!1}=n;if(t.length===0)return[];let r=.15+(1-o)*.85,c=Array.isArray(t[0])?t:t.map(({x:h,y:g,pressure:y=.5})=>[h,g,y]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let g=1;g<5;g++)c.push(zl(c[0],h,g/4))}c.length===1&&(c=[...c,[...Dt(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,m=u[0],f=c.length-1;for(let h=1;h<c.length;h++){let g=l&&h===f?c[h].slice(0,2):zl(m.point,c[h],r);if($0(m.point,g))continue;let y=L0(g,m.point);if(d+=y,h<f&&!p){if(d<i)continue;p=!0}m={point:g,pressure:c[h][2]>=0?c[h][2]:.5,vector:bm(Ot(m.point,g)),distance:y,runningLength:d},u.push(m)}return u[0].vector=((a=u[1])==null?void 0:a.vector)||[0,0],u}function C0(t,n={}){return E0(S0(t,n),n)}var A0=()=>({events:{},emit(t,...n){let a=this.events[t]||[];for(let o=0,i=a.length;o<i;o++)a[o](...n)},on(t,n){var a;return(a=this.events[t])!=null&&a.push(n)||(this.events[t]=[n]),()=>{var o;this.events[t]=(o=this.events[t])==null?void 0:o.filter(i=>n!==i)}}});function Do(t,n){return t-n}function O0(t){return t<0?-1:1}function Wo(t){return[Math.abs(t),O0(t)]}function ym(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var P0=2,hn=P0,ja=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var n;const a=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-i.left)*o,y:(t.pageY-i.top)*o,pressure:t.pressure}}else{const i=this.drauu.svgPoint;i.x=t.clientX,i.y=t.clientY;const l=i.matrixTransform((n=a.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*o,y:l.y*o,pressure:t.pressure}}}createElement(t,n){const a=document.createElementNS("http://www.w3.org/2000/svg",t),o=n?{...this.brush,...n}:this.brush;return a.setAttribute("fill",o.fill??"transparent"),a.setAttribute("stroke",o.color),a.setAttribute("stroke-width",o.size.toString()),a.setAttribute("stroke-linecap","round"),o.dasharray&&a.setAttribute("stroke-dasharray",o.dasharray),a}attr(t,n){this.el.setAttribute(t,typeof n=="string"?n:n.toFixed(hn))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},H0=class extends ja{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const n=C0(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const a=n.reduce((o,[i,l],r,c)=>{const[u,p]=c[(r+1)%c.length];return o.push(i,l,(i+u)/2,(l+p)/2),o},["M",...n[0],"Q"]);return a.push("Z"),a.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},R0=class extends ja{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,a]=Wo(t.x-this.start.x),[o,i]=Wo(t.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,o);n=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[l,r]=[this.start.x,this.start.x+n*a].sort(Do),[c,u]=[this.start.y,this.start.y+o*i].sort(Do);this.attr("cx",(l+r)/2),this.attr("cy",(c+u)/2),this.attr("rx",(r-l)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function wm(t,n){const a=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",n),o.setAttribute("id",t),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(i),a.appendChild(o),a}var F0=class extends ja{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const n=ym(),a=document.createElementNS("http://www.w3.org/2000/svg","g");return a.append(wm(n,this.brush.color)),a.append(this.el),this.attr("marker-end",`url(#${n})`),a}return this.el}onMove(t){if(!this.el)return!1;let{x:n,y:a}=t;if(this.shiftPressed){const o=t.x-this.start.x,i=t.y-this.start.y;if(i!==0){let l=o/i;l=Math.round(l),Math.abs(l)<=1?(n=this.start.x+i*l,a=this.start.y+i):(n=this.start.x+o,a=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-a),this.attr("x2",n),this.attr("y2",a)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",a)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},N0=class extends ja{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,a]=Wo(t.x-this.start.x),[o,i]=Wo(t.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,o);n=l,o=l}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[l,r]=[this.start.x,this.start.x+n*a].sort(Do),[c,u]=[this.start.y,this.start.y+o*i].sort(Do);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",u-c)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function q0(t,n){const a=t.x-n.x,o=t.y-n.y;return a*a+o*o}function j0(t,n,a){let o=n.x,i=n.y,l=a.x-o,r=a.y-i;if(l!==0||r!==0){const c=((t.x-o)*l+(t.y-i)*r)/(l*l+r*r);c>1?(o=a.x,i=a.y):c>0&&(o+=l*c,i+=r*c)}return l=t.x-o,r=t.y-i,l*l+r*r}function D0(t,n){let a=t[0];const o=[a];let i;for(let l=1,r=t.length;l<r;l++)i=t[l],q0(i,a)>n&&(o.push(i),a=i);return a!==i&&i&&o.push(i),o}function Ml(t,n,a,o,i){let l=o,r=0;for(let c=n+1;c<a;c++){const u=j0(t[c],t[n],t[a]);u>l&&(r=c,l=u)}l>o&&(r-n>1&&Ml(t,n,r,o,i),i.push(t[r]),a-r>1&&Ml(t,r,a,o,i))}function W0(t,n){const a=t.length-1,o=[t[0]];return Ml(t,0,a,n,o),o.push(t[a]),o}function xu(t,n,a=!1){if(t.length<=2)return t;const o=n!==void 0?n*n:1;return t=a?t:D0(t,o),t=W0(t,o),t}var B0=class extends ja{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=ym();const n=wm(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=xu(this.points,1,!0),this.count=0),this.attr("d",$u(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",$u(xu(this.points,1,!0))),!t.getTotalLength()))}};function V0(t,n){const a=n.x-t.x,o=n.y-t.y;return{length:Math.sqrt(a**2+o**2),angle:Math.atan2(o,a)}}function Tu(t,n,a,o){const i=n||t,l=a||t,r=.2,c=V0(i,l),u=c.angle+(o?Math.PI:0),p=c.length*r,d=t.x+Math.cos(u)*p,m=t.y+Math.sin(u)*p;return{x:d,y:m}}function U0(t,n,a){const o=Tu(a[n-1],a[n-2],t),i=Tu(t,a[n-1],a[n+1],!0);return`C ${o.x.toFixed(hn)},${o.y.toFixed(hn)} ${i.x.toFixed(hn)},${i.y.toFixed(hn)} ${t.x.toFixed(hn)},${t.y.toFixed(hn)}`}function $u(t){return t.reduce((n,a,o,i)=>o===0?`M ${a.x.toFixed(hn)},${a.y.toFixed(hn)}`:`${n} ${U0(a,o,i)}`,"")}var K0=class extends ja{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const n=(a,o)=>{if(a&&a.length)for(let i=0;i<a.length;i++){const l=a[i];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=l.getPointAtLength(r*c/this.pathSubFactor),p=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:o||l})}}else l.children&&n(l.children,l)}};t&&n(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const a=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(a,o)&&(a.element.remove(),t.push(n))}return t.length&&(this.pathFragments=this.pathFragments.filter((n,a)=>!t.includes(a))),t.length>0}lineLineIntersect(t,n){const a=t.x1,o=t.x2,i=n.x1,l=n.x2,r=t.y1,c=t.y2,u=n.y1,p=n.y2,d=(a-o)*(u-p)-(r-c)*(i-l),m=(a*c-r*o)*(i-l)-(a-o)*(i*p-u*l),f=(a*c-r*o)*(u-p)-(r-c)*(i*p-u*l),h=(g,y,x)=>g>=y&&g<=x?!0:g>=x&&g<=y;if(d===0)return!1;{const g={x:m/d,y:f/d};return h(g.x,a,o)&&h(g.y,r,c)&&h(g.x,i,l)&&h(g.y,u,p)}}};function G0(t){return{draw:new B0(t),stylus:new H0(t),line:new F0(t),rectangle:new N0(t),ellipse:new R0(t),eraseLine:new K0(t)}}var Q0=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=A0(),this._models=G0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const a=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),i=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);a.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{a.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,n){return this._emitter.on(t,n)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const n=this.model._eventUp(t);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function Y0(t){return new Q0(t)}const Ll=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],tn=Gt("slidev-drawing-enabled",!1),E9=Gt("slidev-drawing-pinned",!1),Z0=J(!1),J0=J(!1),X0=J(!1),Ss=J(!1),ia=xk(Gt("slidev-drawing-brush",{color:Ll[0],size:4,mode:"stylus"})),zu=J("stylus"),xm=F(()=>Ee.drawings.syncAll||_t.value);let Cs=!1;const ns=F({get(){return zu.value},set(t){zu.value=t,t==="arrow"?(ia.mode="line",ia.arrowEnd=!0):(ia.mode=t,ia.arrowEnd=!1)}}),ey=Be({brush:ia,acceptsInputTypes:F(()=>tn.value&&(!Ee.drawings.presenterOnly||_t.value)?void 0:["pen"]),coordinateTransform:!1}),ft=ei(Y0(ey));function ty(){ft.clear(),xm.value&&Bd(Ue.value,"")}function Tr(){var t;J0.value=ft.canRedo(),Z0.value=ft.canUndo(),X0.value=!!((t=ft.el)!=null&&t.children.length)}function ny(t){Cs=!0;const n=qo[t||Ue.value];n!=null?ft.load(n):ft.clear(),Tr(),Cs=!1}ft.on("changed",()=>{if(Tr(),!Cs){const t=ft.dump(),n=Ue.value;(qo[n]||"")!==t&&xm.value&&Bd(n,ft.dump())}});kk(t=>{Cs=!0,t[Ue.value]!=null&&ft.load(t[Ue.value]||""),Cs=!1,Tr()});st(()=>{ke(Ue,()=>{ft.mounted&&ny()},{immediate:!0})});ft.on("start",()=>Ss.value=!0);ft.on("end",()=>Ss.value=!1);window.addEventListener("keydown",t=>{if(!tn.value)return;const n=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let a=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?ft.redo():ft.undo():t.code==="Escape"?tn.value=!1:t.code==="KeyL"&&n?ns.value="line":t.code==="KeyA"&&n?ns.value="arrow":t.code==="KeyS"&&n?ns.value="stylus":t.code==="KeyR"&&n?ns.value="rectangle":t.code==="KeyE"&&n?ns.value="ellipse":t.code==="KeyC"&&n?ty():t.code.startsWith("Digit")&&n&&+t.code[5]<=Ll.length?ia.color=Ll[+t.code[5]-1]:a=!1,a&&(t.preventDefault(),t.stopPropagation())},!1);function Ye(...t){return F(()=>t.every(n=>Ge(n)))}function xt(t){return F(()=>!Ge(t))}const Mu=b1(),Pi=Gt("slidev-color-schema","auto"),Il=F(()=>Ee.colorSchema!=="auto"),$r=F({get(){return Il.value?Ee.colorSchema==="dark":Pi.value==="auto"?Mu.value:Pi.value==="dark"},set(t){Il.value||(Pi.value=t===Mu.value?"auto":t?"dark":"light")}}),Tm=Gd($r);Kt&&ke($r,t=>{const n=document.querySelector("html");n.classList.toggle("dark",t),n.classList.toggle("light",!t)},{immediate:!0});const bo=J(1),yo=F(()=>Qe.length-1),Mt=J(0),zr=J(0);function ay(){Mt.value>bo.value&&(Mt.value-=1)}function sy(){Mt.value<yo.value&&(Mt.value+=1)}function oy(){if(Mt.value>bo.value){let t=Mt.value-zr.value;t<bo.value&&(t=bo.value),Mt.value=t}}function iy(){if(Mt.value<yo.value){let t=Mt.value+zr.value;t>yo.value&&(t=yo.value),Mt.value=t}}function ly(){const{escape:t,space:n,shift:a,left:o,right:i,up:l,down:r,enter:c,d:u,g:p,o:d}=_m;let m=[{name:"next_space",key:Ye(n,xt(a)),fn:Pn,autoRepeat:!0},{name:"prev_space",key:Ye(n,a),fn:Hn,autoRepeat:!0},{name:"next_right",key:Ye(i,xt(a),xt(ut)),fn:Pn,autoRepeat:!0},{name:"prev_left",key:Ye(o,xt(a),xt(ut)),fn:Hn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Pn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Hn,autoRepeat:!0},{name:"next_down",key:Ye(r,xt(ut)),fn:Os,autoRepeat:!0},{name:"prev_up",key:Ye(l,xt(ut)),fn:()=>Ps(!1),autoRepeat:!0},{name:"next_shift",key:Ye(i,a),fn:Os,autoRepeat:!0},{name:"prev_shift",key:Ye(o,a),fn:()=>Ps(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(u,xt(tn)),fn:Tm},{name:"toggle_overview",key:Ye(d,xt(tn)),fn:km},{name:"hide_overview",key:Ye(t,xt(tn)),fn:()=>ut.value=!1},{name:"goto",key:Ye(p,xt(tn)),fn:()=>Ea.value=!Ea.value},{name:"next_overview",key:Ye(i,ut),fn:sy},{name:"prev_overview",key:Ye(o,ut),fn:ay},{name:"up_overview",key:Ye(l,ut),fn:oy},{name:"down_overview",key:Ye(r,ut),fn:iy},{name:"goto_from_overview",key:Ye(c,ut),fn:()=>{Na(Mt.value),ut.value=!1}}];const f=new Set(m.map(g=>g.name));if(m.filter(g=>g.name&&f.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return m}const $m=Ye(xt(y0),xt(w0),k0);function ry(t,n,a=!1){typeof t=="string"&&(t=_m[t]);const o=Ye(t,$m);let i=0,l;const r=()=>{if(clearTimeout(l),!o.value){i=0;return}a&&(l=setTimeout(r,Math.max(1e3-i*250,150)),i++),n()};return ke(o,r,{flush:"sync"})}function cy(t,n){return a1(t,a=>{$m.value&&(a.repeat||n())})}function uy(){const t=ly();new Map(t.map(a=>[a.key,a])).forEach(a=>{a.fn&&ry(a.key,a.fn,a.autoRepeat)}),cy("f",()=>vm.toggle())}const py={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},dy=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),my=[dy];function fy(t,n){return b(),oe("svg",py,my)}const hy={name:"carbon-close",render:fy};function Mr(t,n=""){var i,l;const a=["slidev-page",n],o=(l=(i=t==null?void 0:t.meta)==null?void 0:i.slide)==null?void 0:l.no;return o!=null&&a.push(`slidev-page-${o}`),a.filter(Boolean).join(" ")}const gy=Pe({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const n=t;z(S);const a=J(),o=C1(a),i=F(()=>n.width?n.width:o.width.value),l=F(()=>n.width?n.width/Sn:o.height.value);n.width&&ya(()=>{a.value&&(a.value.style.width=`${i.value}px`,a.value.style.height=`${l.value}px`)});const r=F(()=>i.value/l.value),c=F(()=>n.scale&&!Fa.value?n.scale:r.value<Sn?i.value/Cn:l.value*Sn/Cn),u=F(()=>({height:`${br}px`,width:`${Cn}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=F(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return $t(jd,c),(d,m)=>(b(),oe("div",{id:"slide-container",ref_key:"root",ref:a,class:Ve(p.value)},[e("div",{id:"slide-content",style:tt(u.value)},[Ut(d.$slots,"default")],4),Ut(d.$slots,"controls")],2))}});const C=(t,n)=>{const a=t.__vccOpts||t;for(const[o,i]of n)a[o]=i;return a},zm=C(gy,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Lr=Pe({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:n}){const a=en(t,"clicks",n),o=en(t,"clicksElements",n),i=en(t,"clicksDisabled",n),l=en(t,"clicksOrderMap",n);o.value.length=0,$t(sk,t.route),$t(ok,t.context),$t(ds,a),$t(ms,i),$t(ta,o),$t(hl,l)},render(){var t,n;return this.$props.is?yt(this.$props.is):(n=(t=this.$slots)==null?void 0:t.default)==null?void 0:n.call(t)}}),_y=["innerHTML"],vy=Pe({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){return z(S),(n,a)=>A(qo)[n.page]?(b(),oe("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:A(qo)[n.page]},null,8,_y)):xe("v-if",!0)}}),Mm=C(vy,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),ky=Object.freeze(Object.defineProperty({__proto__:null,default:Mm},Symbol.toStringTag,{value:"Module"})),by={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},yy=["onClick"],Hi=4*16*2,Lu=2*16,wy=Pe({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(t,{emit:n}){const a=t;z(S);const o=en(a,"modelValue",n);function i(){o.value=!1}function l(m){Na(m),i()}function r(m){return m===Mt.value}const c=$l.smaller("xs"),u=$l.smaller("sm"),p=F(()=>c.value?ha.width.value-Hi:u.value?(ha.width.value-Hi-Lu)/2:300),d=F(()=>Math.floor((ha.width.value-Hi)/(p.value+Lu)));return ya(()=>{Mt.value=Ue.value,zr.value=d.value}),(m,f)=>{const h=hy;return b(),oe(Ce,null,[ed(e("div",by,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tt(`grid-template-columns: repeat(auto-fit,minmax(${p.value}px,1fr))`)},[(b(!0),oe(Ce,null,qa(A(Qe).slice(0,-1),(g,y)=>(b(),oe("div",{key:g.path,class:"relative"},[e("div",{class:Ve(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(y+1),"border-gray-400":!r(y+1)}]),style:tt(A(yr)),onClick:x=>l(+g.path)},[(b(),L(zm,{key:g.path,width:p.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:w(()=>[g!=null&&g.component?(b(),L(A(Lr),{key:0,is:g.component,"clicks-disabled":!0,class:Ve(A(Mr)(g)),route:g,context:"overview"},null,8,["is","class","route"])):xe("v-if",!0),O(Mm,{page:+g.path},null,8,["page"])]),_:2},1032,["width"]))],14,yy),e("div",{class:"absolute top-0 opacity-50",style:tt(`left: ${p.value+5}px`)},vt(y+1),5)]))),128))],4)],512),[[Ed,A(o)]]),A(o)?(b(),oe("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:i},[O(h)])):xe("v-if",!0)],64)}}});const xy=C(wy,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Ty="/4/html/assets/logo-b72bde5d.png",$y={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},zy=Pe({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:n}){const a=t;z(S);const o=en(a,"modelValue",n);function i(){o.value=!1}return(l,r)=>(b(),L(nd,null,[A(o)?(b(),oe("div",$y,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>i())}),e("div",{class:Ve(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[Ut(l.$slots,"default")],2)])):xe("v-if",!0)],1024))}}),My=C(zy,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),Ly={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Iy=["innerHTML"],Ey=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Ty,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),s("dev ")])])],-1),Sy=Pe({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:n}){const a=t;z(S);const o=en(a,"modelValue",n),i=F(()=>typeof Ee.info=="string");return(l,r)=>(b(),L(My,{modelValue:A(o),"onUpdate:modelValue":r[0]||(r[0]=c=>Se(o)?o.value=c:null),class:"px-6 py-4"},{default:w(()=>[e("div",Ly,[i.value?(b(),oe("div",{key:0,class:"mb-4",innerHTML:A(Ee).info},null,8,Iy)):xe("v-if",!0),Ey])]),_:1},8,["modelValue"]))}});const Cy=C(Sy,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function vn(t){return Array.isArray?Array.isArray(t):Em(t)==="[object Array]"}const Ay=1/0;function Oy(t){if(typeof t=="string")return t;let n=t+"";return n=="0"&&1/t==-Ay?"-0":n}function Py(t){return t==null?"":Oy(t)}function nn(t){return typeof t=="string"}function Lm(t){return typeof t=="number"}function Hy(t){return t===!0||t===!1||Ry(t)&&Em(t)=="[object Boolean]"}function Im(t){return typeof t=="object"}function Ry(t){return Im(t)&&t!==null}function zt(t){return t!=null}function Ri(t){return!t.trim().length}function Em(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Fy="Incorrect 'index' type",Ny=t=>`Invalid value for key ${t}`,qy=t=>`Pattern length exceeds max of ${t}.`,jy=t=>`Missing ${t} property in key`,Dy=t=>`Property 'weight' in key '${t}' must be a positive integer`,Iu=Object.prototype.hasOwnProperty;class Wy{constructor(n){this._keys=[],this._keyMap={};let a=0;n.forEach(o=>{let i=Sm(o);a+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,a+=i.weight}),this._keys.forEach(o=>{o.weight/=a})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Sm(t){let n=null,a=null,o=null,i=1,l=null;if(nn(t)||vn(t))o=t,n=Eu(t),a=El(t);else{if(!Iu.call(t,"name"))throw new Error(jy("name"));const r=t.name;if(o=r,Iu.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Dy(r));n=Eu(r),a=El(r),l=t.getFn}return{path:n,id:a,weight:i,src:o,getFn:l}}function Eu(t){return vn(t)?t:t.split(".")}function El(t){return vn(t)?t.join("."):t}function By(t,n){let a=[],o=!1;const i=(l,r,c)=>{if(zt(l))if(!r[c])a.push(l);else{let u=r[c];const p=l[u];if(!zt(p))return;if(c===r.length-1&&(nn(p)||Lm(p)||Hy(p)))a.push(Py(p));else if(vn(p)){o=!0;for(let d=0,m=p.length;d<m;d+=1)i(p[d],r,c+1)}else r.length&&i(p,r,c+1)}};return i(t,nn(n)?n.split("."):n,0),o?a:a[0]}const Vy={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Uy={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,n)=>t.score===n.score?t.idx<n.idx?-1:1:t.score<n.score?-1:1},Ky={location:0,threshold:.6,distance:100},Gy={useExtendedSearch:!1,getFn:By,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var he={...Uy,...Vy,...Ky,...Gy};const Qy=/[^ ]+/g;function Yy(t=1,n=3){const a=new Map,o=Math.pow(10,n);return{get(i){const l=i.match(Qy).length;if(a.has(l))return a.get(l);const r=1/Math.pow(l,.5*t),c=parseFloat(Math.round(r*o)/o);return a.set(l,c),c},clear(){a.clear()}}}class Ir{constructor({getFn:n=he.getFn,fieldNormWeight:a=he.fieldNormWeight}={}){this.norm=Yy(a,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((a,o)=>{this._keysMap[a.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,nn(this.docs[0])?this.docs.forEach((n,a)=>{this._addString(n,a)}):this.docs.forEach((n,a)=>{this._addObject(n,a)}),this.norm.clear())}add(n){const a=this.size();nn(n)?this._addString(n,a):this._addObject(n,a)}removeAt(n){this.records.splice(n,1);for(let a=n,o=this.size();a<o;a+=1)this.records[a].i-=1}getValueForItemAtKeyId(n,a){return n[this._keysMap[a]]}size(){return this.records.length}_addString(n,a){if(!zt(n)||Ri(n))return;let o={v:n,i:a,n:this.norm.get(n)};this.records.push(o)}_addObject(n,a){let o={i:a,$:{}};this.keys.forEach((i,l)=>{let r=i.getFn?i.getFn(n):this.getFn(n,i.path);if(zt(r)){if(vn(r)){let c=[];const u=[{nestedArrIndex:-1,value:r}];for(;u.length;){const{nestedArrIndex:p,value:d}=u.pop();if(zt(d))if(nn(d)&&!Ri(d)){let m={v:d,i:p,n:this.norm.get(d)};c.push(m)}else vn(d)&&d.forEach((m,f)=>{u.push({nestedArrIndex:f,value:m})})}o.$[l]=c}else if(nn(r)&&!Ri(r)){let c={v:r,n:this.norm.get(r)};o.$[l]=c}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Cm(t,n,{getFn:a=he.getFn,fieldNormWeight:o=he.fieldNormWeight}={}){const i=new Ir({getFn:a,fieldNormWeight:o});return i.setKeys(t.map(Sm)),i.setSources(n),i.create(),i}function Zy(t,{getFn:n=he.getFn,fieldNormWeight:a=he.fieldNormWeight}={}){const{keys:o,records:i}=t,l=new Ir({getFn:n,fieldNormWeight:a});return l.setKeys(o),l.setIndexRecords(i),l}function co(t,{errors:n=0,currentLocation:a=0,expectedLocation:o=0,distance:i=he.distance,ignoreLocation:l=he.ignoreLocation}={}){const r=n/t.length;if(l)return r;const c=Math.abs(o-a);return i?r+c/i:c?1:r}function Jy(t=[],n=he.minMatchCharLength){let a=[],o=-1,i=-1,l=0;for(let r=t.length;l<r;l+=1){let c=t[l];c&&o===-1?o=l:!c&&o!==-1&&(i=l-1,i-o+1>=n&&a.push([o,i]),o=-1)}return t[l-1]&&l-o>=n&&a.push([o,l-1]),a}const aa=32;function Xy(t,n,a,{location:o=he.location,distance:i=he.distance,threshold:l=he.threshold,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,includeMatches:u=he.includeMatches,ignoreLocation:p=he.ignoreLocation}={}){if(n.length>aa)throw new Error(qy(aa));const d=n.length,m=t.length,f=Math.max(0,Math.min(o,m));let h=l,g=f;const y=c>1||u,x=y?Array(m):[];let T;for(;(T=t.indexOf(n,g))>-1;){let B=co(n,{currentLocation:T,expectedLocation:f,distance:i,ignoreLocation:p});if(h=Math.min(B,h),g=T+d,y){let R=0;for(;R<d;)x[T+R]=1,R+=1}}g=-1;let $=[],v=1,E=d+m;const M=1<<d-1;for(let B=0;B<d;B+=1){let R=0,K=E;for(;R<K;)co(n,{errors:B,currentLocation:f+K,expectedLocation:f,distance:i,ignoreLocation:p})<=h?R=K:E=K,K=Math.floor((E-R)/2+R);E=K;let ie=Math.max(1,f-K+1),me=r?m:Math.min(f+K,m)+d,X=Array(me+2);X[me+1]=(1<<B)-1;for(let be=me;be>=ie;be-=1){let we=be-1,Re=a[t.charAt(we)];if(y&&(x[we]=+!!Re),X[be]=(X[be+1]<<1|1)&Re,B&&(X[be]|=($[be+1]|$[be])<<1|1|$[be+1]),X[be]&M&&(v=co(n,{errors:B,currentLocation:we,expectedLocation:f,distance:i,ignoreLocation:p}),v<=h)){if(h=v,g=we,g<=f)break;ie=Math.max(1,2*f-g)}}if(co(n,{errors:B+1,currentLocation:f,expectedLocation:f,distance:i,ignoreLocation:p})>h)break;$=X}const P={isMatch:g>=0,score:Math.max(.001,v)};if(y){const B=Jy(x,c);B.length?u&&(P.indices=B):P.isMatch=!1}return P}function ew(t){let n={};for(let a=0,o=t.length;a<o;a+=1){const i=t.charAt(a);n[i]=(n[i]||0)|1<<o-a-1}return n}class Am{constructor(n,{location:a=he.location,threshold:o=he.threshold,distance:i=he.distance,includeMatches:l=he.includeMatches,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:u=he.isCaseSensitive,ignoreLocation:p=he.ignoreLocation}={}){if(this.options={location:a,threshold:o,distance:i,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p},this.pattern=u?n:n.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(f,h)=>{this.chunks.push({pattern:f,alphabet:ew(f),startIndex:h})},m=this.pattern.length;if(m>aa){let f=0;const h=m%aa,g=m-h;for(;f<g;)d(this.pattern.substr(f,aa),f),f+=aa;if(h){const y=m-aa;d(this.pattern.substr(y),y)}}else d(this.pattern,0)}searchIn(n){const{isCaseSensitive:a,includeMatches:o}=this.options;if(a||(n=n.toLowerCase()),this.pattern===n){let g={isMatch:!0,score:0};return o&&(g.indices=[[0,n.length-1]]),g}const{location:i,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,ignoreLocation:p}=this.options;let d=[],m=0,f=!1;this.chunks.forEach(({pattern:g,alphabet:y,startIndex:x})=>{const{isMatch:T,score:$,indices:v}=Xy(n,g,y,{location:i+x,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,includeMatches:o,ignoreLocation:p});T&&(f=!0),m+=$,T&&v&&(d=[...d,...v])});let h={isMatch:f,score:f?m/this.chunks.length:1};return f&&o&&(h.indices=d),h}}class Wn{constructor(n){this.pattern=n}static isMultiMatch(n){return Su(n,this.multiRegex)}static isSingleMatch(n){return Su(n,this.singleRegex)}search(){}}function Su(t,n){const a=t.match(n);return a?a[1]:null}class tw extends Wn{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const a=n===this.pattern;return{isMatch:a,score:a?0:1,indices:[0,this.pattern.length-1]}}}class nw extends Wn{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const o=n.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,n.length-1]}}}class aw extends Wn{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const a=n.startsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,this.pattern.length-1]}}}class sw extends Wn{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const a=!n.startsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,n.length-1]}}}class ow extends Wn{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const a=n.endsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class iw extends Wn{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const a=!n.endsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,n.length-1]}}}class Om extends Wn{constructor(n,{location:a=he.location,threshold:o=he.threshold,distance:i=he.distance,includeMatches:l=he.includeMatches,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:u=he.isCaseSensitive,ignoreLocation:p=he.ignoreLocation}={}){super(n),this._bitapSearch=new Am(n,{location:a,threshold:o,distance:i,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class Pm extends Wn{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let a=0,o;const i=[],l=this.pattern.length;for(;(o=n.indexOf(this.pattern,a))>-1;)a=o+l,i.push([o,a-1]);const r=!!i.length;return{isMatch:r,score:r?0:1,indices:i}}}const Sl=[tw,Pm,aw,sw,iw,ow,nw,Om],Cu=Sl.length,lw=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,rw="|";function cw(t,n={}){return t.split(rw).map(a=>{let o=a.trim().split(lw).filter(l=>l&&!!l.trim()),i=[];for(let l=0,r=o.length;l<r;l+=1){const c=o[l];let u=!1,p=-1;for(;!u&&++p<Cu;){const d=Sl[p];let m=d.isMultiMatch(c);m&&(i.push(new d(m,n)),u=!0)}if(!u)for(p=-1;++p<Cu;){const d=Sl[p];let m=d.isSingleMatch(c);if(m){i.push(new d(m,n));break}}}return i})}const uw=new Set([Om.type,Pm.type]);class pw{constructor(n,{isCaseSensitive:a=he.isCaseSensitive,includeMatches:o=he.includeMatches,minMatchCharLength:i=he.minMatchCharLength,ignoreLocation:l=he.ignoreLocation,findAllMatches:r=he.findAllMatches,location:c=he.location,threshold:u=he.threshold,distance:p=he.distance}={}){this.query=null,this.options={isCaseSensitive:a,includeMatches:o,minMatchCharLength:i,findAllMatches:r,ignoreLocation:l,location:c,threshold:u,distance:p},this.pattern=a?n:n.toLowerCase(),this.query=cw(this.pattern,this.options)}static condition(n,a){return a.useExtendedSearch}searchIn(n){const a=this.query;if(!a)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:i}=this.options;n=i?n:n.toLowerCase();let l=0,r=[],c=0;for(let u=0,p=a.length;u<p;u+=1){const d=a[u];r.length=0,l=0;for(let m=0,f=d.length;m<f;m+=1){const h=d[m],{isMatch:g,indices:y,score:x}=h.search(n);if(g){if(l+=1,c+=x,o){const T=h.constructor.type;uw.has(T)?r=[...r,...y]:r.push(y)}}else{c=0,l=0,r.length=0;break}}if(l){let m={isMatch:!0,score:c/l};return o&&(m.indices=r),m}}return{isMatch:!1,score:1}}}const Cl=[];function dw(...t){Cl.push(...t)}function Al(t,n){for(let a=0,o=Cl.length;a<o;a+=1){let i=Cl[a];if(i.condition(t,n))return new i(t,n)}return new Am(t,n)}const Bo={AND:"$and",OR:"$or"},Ol={PATH:"$path",PATTERN:"$val"},Pl=t=>!!(t[Bo.AND]||t[Bo.OR]),mw=t=>!!t[Ol.PATH],fw=t=>!vn(t)&&Im(t)&&!Pl(t),Au=t=>({[Bo.AND]:Object.keys(t).map(n=>({[n]:t[n]}))});function Hm(t,n,{auto:a=!0}={}){const o=i=>{let l=Object.keys(i);const r=mw(i);if(!r&&l.length>1&&!Pl(i))return o(Au(i));if(fw(i)){const u=r?i[Ol.PATH]:l[0],p=r?i[Ol.PATTERN]:i[u];if(!nn(p))throw new Error(Ny(u));const d={keyId:El(u),pattern:p};return a&&(d.searcher=Al(p,n)),d}let c={children:[],operator:l[0]};return l.forEach(u=>{const p=i[u];vn(p)&&p.forEach(d=>{c.children.push(o(d))})}),c};return Pl(t)||(t=Au(t)),o(t)}function hw(t,{ignoreFieldNorm:n=he.ignoreFieldNorm}){t.forEach(a=>{let o=1;a.matches.forEach(({key:i,norm:l,score:r})=>{const c=i?i.weight:null;o*=Math.pow(r===0&&c?Number.EPSILON:r,(c||1)*(n?1:l))}),a.score=o})}function gw(t,n){const a=t.matches;n.matches=[],zt(a)&&a.forEach(o=>{if(!zt(o.indices)||!o.indices.length)return;const{indices:i,value:l}=o;let r={indices:i,value:l};o.key&&(r.key=o.key.src),o.idx>-1&&(r.refIndex=o.idx),n.matches.push(r)})}function _w(t,n){n.score=t.score}function vw(t,n,{includeMatches:a=he.includeMatches,includeScore:o=he.includeScore}={}){const i=[];return a&&i.push(gw),o&&i.push(_w),t.map(l=>{const{idx:r}=l,c={item:n[r],refIndex:r};return i.length&&i.forEach(u=>{u(l,c)}),c})}class Da{constructor(n,a={},o){this.options={...he,...a},this.options.useExtendedSearch,this._keyStore=new Wy(this.options.keys),this.setCollection(n,o)}setCollection(n,a){if(this._docs=n,a&&!(a instanceof Ir))throw new Error(Fy);this._myIndex=a||Cm(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(n){zt(n)&&(this._docs.push(n),this._myIndex.add(n))}remove(n=()=>!1){const a=[];for(let o=0,i=this._docs.length;o<i;o+=1){const l=this._docs[o];n(l,o)&&(this.removeAt(o),o-=1,i-=1,a.push(l))}return a}removeAt(n){this._docs.splice(n,1),this._myIndex.removeAt(n)}getIndex(){return this._myIndex}search(n,{limit:a=-1}={}){const{includeMatches:o,includeScore:i,shouldSort:l,sortFn:r,ignoreFieldNorm:c}=this.options;let u=nn(n)?nn(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n);return hw(u,{ignoreFieldNorm:c}),l&&u.sort(r),Lm(a)&&a>-1&&(u=u.slice(0,a)),vw(u,this._docs,{includeMatches:o,includeScore:i})}_searchStringList(n){const a=Al(n,this.options),{records:o}=this._myIndex,i=[];return o.forEach(({v:l,i:r,n:c})=>{if(!zt(l))return;const{isMatch:u,score:p,indices:d}=a.searchIn(l);u&&i.push({item:l,idx:r,matches:[{score:p,value:l,norm:c,indices:d}]})}),i}_searchLogical(n){const a=Hm(n,this.options),o=(c,u,p)=>{if(!c.children){const{keyId:m,searcher:f}=c,h=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(u,m),searcher:f});return h&&h.length?[{idx:p,item:u,matches:h}]:[]}const d=[];for(let m=0,f=c.children.length;m<f;m+=1){const h=c.children[m],g=o(h,u,p);if(g.length)d.push(...g);else if(c.operator===Bo.AND)return[]}return d},i=this._myIndex.records,l={},r=[];return i.forEach(({$:c,i:u})=>{if(zt(c)){let p=o(a,c,u);p.length&&(l[u]||(l[u]={idx:u,item:c,matches:[]},r.push(l[u])),p.forEach(({matches:d})=>{l[u].matches.push(...d)}))}}),r}_searchObjectList(n){const a=Al(n,this.options),{keys:o,records:i}=this._myIndex,l=[];return i.forEach(({$:r,i:c})=>{if(!zt(r))return;let u=[];o.forEach((p,d)=>{u.push(...this._findMatches({key:p,value:r[d],searcher:a}))}),u.length&&l.push({idx:c,item:r,matches:u})}),l}_findMatches({key:n,value:a,searcher:o}){if(!zt(a))return[];let i=[];if(vn(a))a.forEach(({v:l,i:r,n:c})=>{if(!zt(l))return;const{isMatch:u,score:p,indices:d}=o.searchIn(l);u&&i.push({score:p,key:n,value:l,idx:r,norm:c,indices:d})});else{const{v:l,n:r}=a,{isMatch:c,score:u,indices:p}=o.searchIn(l);c&&i.push({score:u,key:n,value:l,norm:r,indices:p})}return i}}Da.version="6.6.2";Da.createIndex=Cm;Da.parseIndex=Zy;Da.config=he;Da.parseQuery=Hm;dw(pw);const kw={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},bw=["value","disabled","onKeydown"],yw=["border","onClick"],ww={"w-4":"","text-right":"",op50:"","text-sm":""},xw=Pe({__name:"Goto",setup(t){z(S);const n=J(),a=J(),o=J(),i=J(),l=J(""),r=J(0);function c(v){return v!=null}const u=F(()=>new Da(Qe.map(v=>{var E;return(E=v.meta)==null?void 0:E.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),p=F(()=>l.value.startsWith("/")?l.value.substring(1):l.value),d=F(()=>u.value.search(p.value).map(v=>v.item)),m=F(()=>!!d.value.length);function f(){if(m.value){const v=d.value.at(r.value||0);v&&Na(v.no)}h()}function h(){l.value="",Ea.value=!1}function g(v){v.preventDefault(),r.value++,r.value>=d.value.length&&(r.value=0),x()}function y(v){v.preventDefault(),r.value--,r.value<=-2&&(r.value=d.value.length-1),x()}function x(){var E;const v=(E=i.value)==null?void 0:E[r.value];v&&o.value&&(v.offsetTop+v.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:v.offsetTop+v.offsetHeight-o.value.offsetHeight+1}):v.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:v.offsetTop}))}function T(v){r.value=0,l.value=v.target.value}function $(v){Na(v),h()}return ke(Ea,async v=>{var E;v?(l.value="",r.value=0,setTimeout(()=>{var M;return(M=a.value)==null?void 0:M.focus()},0)):(E=a.value)==null||E.blur()}),ke(On,()=>{var v;(v=n.value)!=null&&v.contains(On.value)||h()}),(v,E)=>(b(),oe("div",{id:"slidev-goto-dialog",ref_key:"container",ref:n,class:Ve(["fixed right-5 transition-all",A(Ea)?"top-5":"-top-20"]),"w-90":""},[e("div",kw,[e("input",{ref_key:"input",ref:a,value:l.value,type:"text",disabled:!A(Ea),class:Ve(["outline-none bg-transparent",{"text-red-400":!m.value&&l.value}]),placeholder:"Goto...",onKeydown:[no(f,["enter"]),no(h,["escape"]),no(g,["down"]),no(y,["up"])],onInput:T},null,42,bw)]),d.value.length>0?(b(),oe("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(b(!0),oe(Ce,null,qa(d.value,(M,P)=>(b(),oe("li",{ref_for:!0,ref_key:"items",ref:i,key:M.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:P===0?"":"t main",class:Ve(r.value===P?"bg-active op100":"op80"),onClick:ov(B=>$(M.no),["stop"])},[e("div",ww,vt(M.no),1),s(" "+vt(M.title),1)],10,yw))),128))],512)):xe("v-if",!0)],2))}});const Tw=C(xw,[["__scopeId","data-v-f5ee02a7"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),$w=Pe({__name:"Controls",setup(t){z(S);const n=on(),a=on();return(o,i)=>(b(),oe(Ce,null,[O(xy,{modelValue:A(ut),"onUpdate:modelValue":i[0]||(i[0]=l=>Se(ut)?ut.value=l:null)},null,8,["modelValue"]),O(Tw),n.value?(b(),L(A(n),{key:0})):xe("v-if",!0),a.value?(b(),L(A(a),{key:1,modelValue:A(Ai),"onUpdate:modelValue":i[1]||(i[1]=l=>Se(Ai)?Ai.value=l:null)},null,8,["modelValue"])):xe("v-if",!0),A(Ee).info?(b(),L(Cy,{key:2,modelValue:A(gs),"onUpdate:modelValue":i[2]||(i[2]=l=>Se(gs)?gs.value=l:null)},null,8,["modelValue"])):xe("v-if",!0)],64))}}),zw=C($w,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),Mw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lw=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Iw=[Lw];function Ew(t,n){return b(),oe("svg",Mw,Iw)}const Sw={name:"carbon-settings-adjust",render:Ew},Cw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Aw=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Ow=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Pw=[Aw,Ow];function Hw(t,n){return b(),oe("svg",Cw,Pw)}const Rw={name:"carbon-information",render:Hw},Fw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nw=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),qw=[Nw];function jw(t,n){return b(),oe("svg",Fw,qw)}const Dw={name:"carbon-download",render:jw},Ww={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bw=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Vw=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Uw=[Bw,Vw];function Kw(t,n){return b(),oe("svg",Ww,Uw)}const Gw={name:"carbon-user-speaker",render:Kw},Qw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yw=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Zw=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Jw=[Yw,Zw];function Xw(t,n){return b(),oe("svg",Qw,Jw)}const ex={name:"carbon-presentation-file",render:Xw},tx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nx=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),ax=[nx];function sx(t,n){return b(),oe("svg",tx,ax)}const ox={name:"carbon-pen",render:sx},ix={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},lx=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),rx=[lx];function cx(t,n){return b(),oe("svg",ix,rx)}const ux={name:"ph-cursor-duotone",render:cx},px={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},dx=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),mx=[dx];function fx(t,n){return b(),oe("svg",px,mx)}const Rm={name:"ph-cursor-fill",render:fx},hx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gx=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),_x=[gx];function vx(t,n){return b(),oe("svg",hx,_x)}const kx={name:"carbon-sun",render:vx},bx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yx=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),wx=[yx];function xx(t,n){return b(),oe("svg",bx,wx)}const Tx={name:"carbon-moon",render:xx},$x={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zx=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Mx=[zx];function Lx(t,n){return b(),oe("svg",$x,Mx)}const Ix={name:"carbon-apps",render:Lx},Ex={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sx=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Cx=[Sx];function Ax(t,n){return b(),oe("svg",Ex,Cx)}const Fm={name:"carbon-arrow-right",render:Ax},Ox={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Px=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Hx=[Px];function Rx(t,n){return b(),oe("svg",Ox,Hx)}const Fx={name:"carbon-arrow-left",render:Rx},Nx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qx=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),jx=[qx];function Dx(t,n){return b(),oe("svg",Nx,jx)}const Wx={name:"carbon-maximize",render:Dx},Bx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vx=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Ux=[Vx];function Kx(t,n){return b(),oe("svg",Bx,Ux)}const Gx={name:"carbon-minimize",render:Kx},Qx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yx=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Zx=[Yx];function Jx(t,n){return b(),oe("svg",Qx,Zx)}const Xx={name:"carbon-checkmark",render:Jx},eT={class:"select-list"},tT={class:"title"},nT={class:"items"},aT=["onClick"],sT=Pe({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:n}){const a=t;z(S);const o=en(a,"modelValue",n,{passive:!0});return(i,l)=>{const r=Xx;return b(),oe("div",eT,[e("div",tT,vt(t.title),1),e("div",nT,[(b(!0),oe(Ce,null,qa(t.items,c=>(b(),oe("div",{key:c.value,class:Ve(["item",{active:A(o)===c.value}]),onClick:()=>{var u;o.value=c.value,(u=c.onClick)==null||u.call(c)}},[O(r,{class:Ve(["text-green-500",{"opacity-0":A(o)!==c.value}])},null,8,["class"]),s(" "+vt(c.display||c.value),1)],10,aT))),128))])])}}});const oT=C(sT,[["__scopeId","data-v-3f89fa11"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),iT={class:"text-sm"},lT=Pe({__name:"Settings",setup(t){z(S);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(a,o)=>(b(),oe("div",iT,[O(oT,{modelValue:A(ko),"onUpdate:modelValue":o[0]||(o[0]=i=>Se(ko)?ko.value=i:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),rT=C(lT,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),cT={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},uT=Pe({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:n}){const a=t;z(S);const o=en(a,"modelValue",n,{passive:!0}),i=J();return t1(i,()=>{o.value=!1}),(l,r)=>(b(),oe("div",{ref_key:"el",ref:i,class:"flex relative"},[e("button",{class:Ve({disabled:t.disabled}),onClick:r[0]||(r[0]=c=>o.value=!A(o))},[Ut(l.$slots,"button",{class:Ve({disabled:t.disabled})})],2),(b(),L(nd,null,[A(o)?(b(),oe("div",cT,[Ut(l.$slots,"menu")])):xe("v-if",!0)],1024))],512))}}),pT=C(uT,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),dT={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},mT={__name:"VerticalDivider",setup(t){return z(S),(n,a)=>(b(),oe("div",dT))}},uo=C(mT,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),fT={render(){return[]}},hT={class:"slidev-icon-btn"},gT={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},_T={class:"my-auto"},vT={class:"opacity-50"},kT=Pe({__name:"NavControls",props:{persist:{default:!1}},setup(t){const n=t;z(S);const a=$l.smaller("md"),{isFullscreen:o,toggle:i}=vm,l=F(()=>Rl.value?`?password=${Rl.value}`:""),r=F(()=>`/presenter/${Ue.value}${l.value}`),c=F(()=>`/${Ue.value}${l.value}`),u=J();function p(){u.value&&On.value&&u.value.contains(On.value)&&On.value.blur()}const d=F(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=on(),f=on();return An(()=>import("./DrawingControls-1d54ed4e.js"),[]).then(h=>f.value=h.default),(h,g)=>{const y=Gx,x=Wx,T=Fx,$=Fm,v=Ix,E=Tx,M=kx,P=Rm,B=ux,R=ox,K=ex,ie=va("RouterLink"),me=Gw,X=Dw,ve=Rw,be=Sw;return b(),oe("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[e("div",{class:Ve(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:p},[A(mn)?xe("v-if",!0):(b(),oe("button",{key:0,class:"slidev-icon-btn",onClick:g[0]||(g[0]=(...we)=>A(i)&&A(i)(...we))},[A(o)?(b(),L(y,{key:0})):(b(),L(x,{key:1}))])),e("button",{class:Ve(["slidev-icon-btn",{disabled:!A(U8)}]),onClick:g[1]||(g[1]=(...we)=>A(Hn)&&A(Hn)(...we))},[O(T)],2),e("button",{class:Ve(["slidev-icon-btn",{disabled:!A(V8)}]),title:"Next",onClick:g[2]||(g[2]=(...we)=>A(Pn)&&A(Pn)(...we))},[O($)],2),A(mn)?xe("v-if",!0):(b(),oe("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=we=>A(km)())},[O(v)])),A(Il)?xe("v-if",!0):(b(),oe("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=we=>A(Tm)())},[A($r)?(b(),L(E,{key:0})):(b(),L(M,{key:1}))])),O(uo),A(mn)?xe("v-if",!0):(b(),oe(Ce,{key:3},[!A(_t)&&!A(a)&&m.value?(b(),oe(Ce,{key:0},[O(A(m)),O(uo)],64)):xe("v-if",!0),A(_t)?(b(),oe("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=we=>Oi.value=!A(Oi))},[A(Oi)?(b(),L(P,{key:0})):(b(),L(B,{key:1,class:"opacity-50"}))])):xe("v-if",!0)],64)),(!A(Ee).drawings.presenterOnly||A(_t))&&!A(mn)?(b(),oe(Ce,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=we=>tn.value=!A(tn))},[O(R),A(tn)?(b(),oe("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tt({background:A(ia).color})},null,4)):xe("v-if",!0)]),O(uo)],64)):xe("v-if",!0),A(mn)?xe("v-if",!0):(b(),oe(Ce,{key:5},[A(_t)?(b(),L(ie,{key:0,to:c.value,class:"slidev-icon-btn",title:"Play Mode"},{default:w(()=>[O(K)]),_:1},8,["to"])):xe("v-if",!0),A(q8)?(b(),L(ie,{key:1,to:r.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:w(()=>[O(me)]),_:1},8,["to"])):xe("v-if",!0),xe("v-if",!0)],64)),(b(),oe(Ce,{key:6},[A(Ee).download?(b(),oe("button",{key:0,class:"slidev-icon-btn",onClick:g[8]||(g[8]=(...we)=>A(Fl)&&A(Fl)(...we))},[O(X)])):xe("v-if",!0)],64)),!A(_t)&&A(Ee).info&&!A(mn)?(b(),oe("button",{key:7,class:"slidev-icon-btn",onClick:g[9]||(g[9]=we=>gs.value=!A(gs))},[O(ve)])):xe("v-if",!0),!A(_t)&&!A(mn)?(b(),L(pT,{key:8},{button:w(()=>[e("button",hT,[O(be)])]),menu:w(()=>[O(rT)]),_:1})):xe("v-if",!0),A(mn)?xe("v-if",!0):(b(),L(uo,{key:9})),e("div",gT,[e("div",_T,[s(vt(A(Ue))+" ",1),e("span",vT,"/ "+vt(A(j8)),1)])]),O(A(fT))],34)],512)}}}),bT=C(kT,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),yT={style:{"font-size":"0.55rem","line-height":"1rem"}},wT=e("div",{class:"absolute bottom-0 left-1"},[e("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),xT={class:"absolute bottom-1 left-89 text-gray-700"},TT={key:0,class:"absolute bottom-1 right-1 text-gray-700"},$T={__name:"global-top",setup(t){const n=z(S);return(a,o)=>(b(),oe("footer",yT,[wT,e("div",xT," ITT E.Agnelli - Informatica - "+vt(A(n).configs.materia)+" - prof. Antonio Mancuso - a.s. "+vt(A(n).configs.as)+" - v "+vt(A(n).configs.version||0),1),A(n).nav.currentPage!==1&&A(n).nav.currentPage!=A(n).nav.total+1?(b(),oe("div",TT,vt(A(n).nav.currentPage-1)+" / "+vt(A(n).nav.total-1),1)):xe("v-if",!0)]))}},zT=C($T,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),Nm={render(){return[yt(zT)]}},qm={render(){return[]}},MT={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},LT=Pe({__name:"PresenterMouse",setup(t){return z(S),(n,a)=>{const o=Rm;return A(Ii).cursor?(b(),oe("div",MT,[O(o,{class:"absolute",style:tt({left:`${A(Ii).cursor.x}%`,top:`${A(Ii).cursor.y}%`})},null,8,["style"])])):xe("v-if",!0)}}}),IT=C(LT,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),ET=Pe({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(t){z(S),ke(pt,()=>{var o,i;(o=pt.value)!=null&&o.meta&&pt.value.meta.preload!==!1&&(pt.value.meta.__preloaded=!0),(i=Fi.value)!=null&&i.meta&&Fi.value.meta.preload!==!1&&(Fi.value.meta.__preloaded=!0)},{immediate:!0});const n=on();An(()=>import("./DrawingLayer-546662a9.js"),[]).then(o=>n.value=o.default);const a=F(()=>Qe.filter(o=>{var i;return((i=o.meta)==null?void 0:i.__preloaded)||o===pt.value}));return(o,i)=>(b(),oe(Ce,null,[xe(" Global Bottom "),O(A(qm)),xe(" Slides "),O(J_,Y(A(Q8),{id:"slideshow",tag:"div"}),{default:w(()=>[(b(!0),oe(Ce,null,qa(a.value,l=>{var r;return ed((b(),L(A(Lr),{key:l.path,is:l==null?void 0:l.component,clicks:l===A(pt)?A(Pt):0,"clicks-elements":((r=l.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:Ve(A(Mr)(l)),route:l,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ed,l===A(pt)]])}),128))]),_:1},16),xe(" Global Top "),O(A(Nm)),n.value?(b(),L(A(n),{key:0})):xe("v-if",!0),A(_t)?xe("v-if",!0):(b(),L(IT,{key:1}))],64))}});const ST=C(ET,[["__scopeId","data-v-afb4231e"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),CT=Pe({__name:"PrintStyle",setup(t){z(S);function n(a,{slots:o}){if(o.default)return yt("style",o.default())}return(a,o)=>(b(),L(n,null,{default:w(()=>[s(" @page { size: "+vt(A(Cn))+"px "+vt(A(br))+"px; margin: 0px; } ",1)]),_:1}))}}),jm=C(CT,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),AT=Pe({__name:"Play",setup(t){z(S),uy();const n=J();function a(l){var r;_u.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?Pn():Hn())}Y8(n);const o=F(()=>b0.value||_u.value);on();const i=on();return An(()=>import("./DrawingControls-1d54ed4e.js"),[]).then(l=>i.value=l.default),(l,r)=>(b(),oe(Ce,null,[A(Fa)?(b(),L(jm,{key:0})):xe("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:tt(A(yr))},[O(zm,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:A(Fa)?A(ha).width.value:void 0,scale:A(ko),onPointerdown:a},{default:w(()=>[O(ST,{context:"slide"})]),controls:w(()=>[e("div",{class:Ve(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",A(Ss)?"pointer-events-none":""]])},[O(bT,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!A(Ee).drawings.presenterOnly&&!A(mn)&&i.value?(b(),L(A(i),{key:0,class:"ml-0"})):xe("v-if",!0)]),_:1},8,["style","width","scale"]),xe("v-if",!0)],4),O(zw)],64))}}),OT=C(AT,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Dm(t){return typeof t>"u"||t===null}function PT(t){return typeof t=="object"&&t!==null}function HT(t){return Array.isArray(t)?t:Dm(t)?[]:[t]}function RT(t,n){var a,o,i,l;if(n)for(l=Object.keys(n),a=0,o=l.length;a<o;a+=1)i=l[a],t[i]=n[i];return t}function FT(t,n){var a="",o;for(o=0;o<n;o+=1)a+=t;return a}function NT(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var qT=Dm,jT=PT,DT=HT,WT=FT,BT=NT,VT=RT,Er={isNothing:qT,isObject:jT,toArray:DT,repeat:WT,isNegativeZero:BT,extend:VT};function Wm(t,n){var a="",o=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(a+='in "'+t.mark.name+'" '),a+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!n&&t.mark.snippet&&(a+=`

`+t.mark.snippet),o+" "+a):o}function As(t,n){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=n,this.message=Wm(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}As.prototype=Object.create(Error.prototype);As.prototype.constructor=As;As.prototype.toString=function(n){return this.name+": "+Wm(this,n)};var sa=As,UT=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],KT=["scalar","sequence","mapping"];function GT(t){var n={};return t!==null&&Object.keys(t).forEach(function(a){t[a].forEach(function(o){n[String(o)]=a})}),n}function QT(t,n){if(n=n||{},Object.keys(n).forEach(function(a){if(UT.indexOf(a)===-1)throw new sa('Unknown option "'+a+'" is met in definition of "'+t+'" YAML type.')}),this.options=n,this.tag=t,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(a){return a},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=GT(n.styleAliases||null),KT.indexOf(this.kind)===-1)throw new sa('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var it=QT;function Ou(t,n){var a=[];return t[n].forEach(function(o){var i=a.length;a.forEach(function(l,r){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(i=r)}),a[i]=o}),a}function YT(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,a;function o(i){i.multi?(t.multi[i.kind].push(i),t.multi.fallback.push(i)):t[i.kind][i.tag]=t.fallback[i.tag]=i}for(n=0,a=arguments.length;n<a;n+=1)arguments[n].forEach(o);return t}function Hl(t){return this.extend(t)}Hl.prototype.extend=function(n){var a=[],o=[];if(n instanceof it)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(a=a.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new sa("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");a.forEach(function(l){if(!(l instanceof it))throw new sa("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new sa("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new sa("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof it))throw new sa("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Hl.prototype);return i.implicit=(this.implicit||[]).concat(a),i.explicit=(this.explicit||[]).concat(o),i.compiledImplicit=Ou(i,"implicit"),i.compiledExplicit=Ou(i,"explicit"),i.compiledTypeMap=YT(i.compiledImplicit,i.compiledExplicit),i};var ZT=Hl,JT=new it("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),XT=new it("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),e$=new it("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),t$=new ZT({explicit:[JT,XT,e$]});function n$(t){if(t===null)return!0;var n=t.length;return n===1&&t==="~"||n===4&&(t==="null"||t==="Null"||t==="NULL")}function a$(){return null}function s$(t){return t===null}var o$=new it("tag:yaml.org,2002:null",{kind:"scalar",resolve:n$,construct:a$,predicate:s$,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function i$(t){if(t===null)return!1;var n=t.length;return n===4&&(t==="true"||t==="True"||t==="TRUE")||n===5&&(t==="false"||t==="False"||t==="FALSE")}function l$(t){return t==="true"||t==="True"||t==="TRUE"}function r$(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var c$=new it("tag:yaml.org,2002:bool",{kind:"scalar",resolve:i$,construct:l$,predicate:r$,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function u$(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function p$(t){return 48<=t&&t<=55}function d$(t){return 48<=t&&t<=57}function m$(t){if(t===null)return!1;var n=t.length,a=0,o=!1,i;if(!n)return!1;if(i=t[a],(i==="-"||i==="+")&&(i=t[++a]),i==="0"){if(a+1===n)return!0;if(i=t[++a],i==="b"){for(a++;a<n;a++)if(i=t[a],i!=="_"){if(i!=="0"&&i!=="1")return!1;o=!0}return o&&i!=="_"}if(i==="x"){for(a++;a<n;a++)if(i=t[a],i!=="_"){if(!u$(t.charCodeAt(a)))return!1;o=!0}return o&&i!=="_"}if(i==="o"){for(a++;a<n;a++)if(i=t[a],i!=="_"){if(!p$(t.charCodeAt(a)))return!1;o=!0}return o&&i!=="_"}}if(i==="_")return!1;for(;a<n;a++)if(i=t[a],i!=="_"){if(!d$(t.charCodeAt(a)))return!1;o=!0}return!(!o||i==="_")}function f$(t){var n=t,a=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(a=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return a*parseInt(n.slice(2),2);if(n[1]==="x")return a*parseInt(n.slice(2),16);if(n[1]==="o")return a*parseInt(n.slice(2),8)}return a*parseInt(n,10)}function h$(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!Er.isNegativeZero(t)}var g$=new it("tag:yaml.org,2002:int",{kind:"scalar",resolve:m$,construct:f$,predicate:h$,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),_$=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function v$(t){return!(t===null||!_$.test(t)||t[t.length-1]==="_")}function k$(t){var n,a;return n=t.replace(/_/g,"").toLowerCase(),a=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?a===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:a*parseFloat(n,10)}var b$=/^[-+]?[0-9]+e/;function y$(t,n){var a;if(isNaN(t))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Er.isNegativeZero(t))return"-0.0";return a=t.toString(10),b$.test(a)?a.replace("e",".e"):a}function w$(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||Er.isNegativeZero(t))}var x$=new it("tag:yaml.org,2002:float",{kind:"scalar",resolve:v$,construct:k$,predicate:w$,represent:y$,defaultStyle:"lowercase"}),T$=t$.extend({implicit:[o$,c$,g$,x$]}),$$=T$,Bm=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Vm=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function z$(t){return t===null?!1:Bm.exec(t)!==null||Vm.exec(t)!==null}function M$(t){var n,a,o,i,l,r,c,u=0,p=null,d,m,f;if(n=Bm.exec(t),n===null&&(n=Vm.exec(t)),n===null)throw new Error("Date resolve error");if(a=+n[1],o=+n[2]-1,i=+n[3],!n[4])return new Date(Date.UTC(a,o,i));if(l=+n[4],r=+n[5],c=+n[6],n[7]){for(u=n[7].slice(0,3);u.length<3;)u+="0";u=+u}return n[9]&&(d=+n[10],m=+(n[11]||0),p=(d*60+m)*6e4,n[9]==="-"&&(p=-p)),f=new Date(Date.UTC(a,o,i,l,r,c,u)),p&&f.setTime(f.getTime()-p),f}function L$(t){return t.toISOString()}var I$=new it("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:z$,construct:M$,instanceOf:Date,represent:L$});function E$(t){return t==="<<"||t===null}var S$=new it("tag:yaml.org,2002:merge",{kind:"scalar",resolve:E$}),Sr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function C$(t){if(t===null)return!1;var n,a,o=0,i=t.length,l=Sr;for(a=0;a<i;a++)if(n=l.indexOf(t.charAt(a)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function A$(t){var n,a,o=t.replace(/[\r\n=]/g,""),i=o.length,l=Sr,r=0,c=[];for(n=0;n<i;n++)n%4===0&&n&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(o.charAt(n));return a=i%4*6,a===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):a===18?(c.push(r>>10&255),c.push(r>>2&255)):a===12&&c.push(r>>4&255),new Uint8Array(c)}function O$(t){var n="",a=0,o,i,l=t.length,r=Sr;for(o=0;o<l;o++)o%3===0&&o&&(n+=r[a>>18&63],n+=r[a>>12&63],n+=r[a>>6&63],n+=r[a&63]),a=(a<<8)+t[o];return i=l%3,i===0?(n+=r[a>>18&63],n+=r[a>>12&63],n+=r[a>>6&63],n+=r[a&63]):i===2?(n+=r[a>>10&63],n+=r[a>>4&63],n+=r[a<<2&63],n+=r[64]):i===1&&(n+=r[a>>2&63],n+=r[a<<4&63],n+=r[64],n+=r[64]),n}function P$(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var H$=new it("tag:yaml.org,2002:binary",{kind:"scalar",resolve:C$,construct:A$,predicate:P$,represent:O$}),R$=Object.prototype.hasOwnProperty,F$=Object.prototype.toString;function N$(t){if(t===null)return!0;var n=[],a,o,i,l,r,c=t;for(a=0,o=c.length;a<o;a+=1){if(i=c[a],r=!1,F$.call(i)!=="[object Object]")return!1;for(l in i)if(R$.call(i,l))if(!r)r=!0;else return!1;if(!r)return!1;if(n.indexOf(l)===-1)n.push(l);else return!1}return!0}function q$(t){return t!==null?t:[]}var j$=new it("tag:yaml.org,2002:omap",{kind:"sequence",resolve:N$,construct:q$}),D$=Object.prototype.toString;function W$(t){if(t===null)return!0;var n,a,o,i,l,r=t;for(l=new Array(r.length),n=0,a=r.length;n<a;n+=1){if(o=r[n],D$.call(o)!=="[object Object]"||(i=Object.keys(o),i.length!==1))return!1;l[n]=[i[0],o[i[0]]]}return!0}function B$(t){if(t===null)return[];var n,a,o,i,l,r=t;for(l=new Array(r.length),n=0,a=r.length;n<a;n+=1)o=r[n],i=Object.keys(o),l[n]=[i[0],o[i[0]]];return l}var V$=new it("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:W$,construct:B$}),U$=Object.prototype.hasOwnProperty;function K$(t){if(t===null)return!0;var n,a=t;for(n in a)if(U$.call(a,n)&&a[n]!==null)return!1;return!0}function G$(t){return t!==null?t:{}}var Q$=new it("tag:yaml.org,2002:set",{kind:"mapping",resolve:K$,construct:G$});$$.extend({implicit:[I$,S$],explicit:[H$,j$,V$,Q$]});function Pu(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"":t===95?" ":t===76?"\u2028":t===80?"\u2029":""}var Y$=new Array(256),Z$=new Array(256);for(var La=0;La<256;La++)Y$[La]=Pu(La)?1:0,Z$[La]=Pu(La);function J$(t){return Array.from(new Set(t))}function Hu(...t){let n,a,o;t.length===1?(n=0,o=1,[a]=t):[n,a,o=1]=t;const i=[];let l=n;for(;l<a;)i.push(l),l+=o||1;return i}function Um(t,n){if(!n||n==="all"||n==="*")return Hu(1,t+1);const a=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))a.push(+o);else{const[i,l]=o.split("-",2);a.push(...Hu(+i,l?+l+1:t+1))}return J$(a).filter(o=>o<=t).sort((o,i)=>o-i)}function Km(t){const n=F(()=>t.value.path),a=F(()=>Qe.length-1),o=F(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),i=F(()=>di(o.value)),l=F(()=>Qe.find(f=>f.path===`${o.value}`)),r=F(()=>{var f,h,g;return(g=(h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:g.id}),c=F(()=>{var f,h;return((h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.layout)||(o.value===1?"cover":"default")}),u=F(()=>Qe.find(f=>f.path===`${Math.min(Qe.length,o.value+1)}`)),p=F(()=>Qe.filter(f=>{var h,g;return(g=(h=f.meta)==null?void 0:h.slide)==null?void 0:g.title}).reduce((f,h)=>(Cr(f,h),f),[])),d=F(()=>Ar(p.value,l.value)),m=F(()=>Or(d.value));return{route:t,path:n,total:a,currentPage:o,currentPath:i,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:m,downloadPDF:Fl,next:Pn,nextSlide:Os,openInEditor:Z8,prev:Hn,prevSlide:Ps}}function Gm(t,n,a){const o=J(0);st(()=>{bt.afterEach(async()=>{await st(),o.value+=1})});const i=F(()=>{var u,p;return o.value,((p=(u=n.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),l=F(()=>{var u,p;return+(((p=(u=n.value)==null?void 0:u.meta)==null?void 0:p.clicks)??i.value.length)}),r=F(()=>a.value<Qe.length-1||t.value<l.value),c=F(()=>a.value>1||t.value>0);return{clicks:t,clicksElements:i,clicksTotal:l,hasNext:r,hasPrev:c}}const X$=["id"],ez=Pe({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(t,{emit:n}){const a=t,o=en(a,"clicksElements",n),i=F(()=>({height:`${br}px`,width:`${Cn}px`})),l=on();An(()=>Promise.resolve().then(()=>ky),void 0).then(p=>l.value=p.default);const r=F(()=>a.clicks),c=Gm(r,a.nav.currentRoute,a.nav.currentPage),u=F(()=>`${a.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return $t(S,Be({nav:{...a.nav,...c},configs:Ee,themeConfigs:F(()=>Ee.themeConfig)})),(p,d)=>{var m;return b(),oe("div",{id:u.value,class:"print-slide-container",style:tt(i.value)},[O(A(qm)),O(A(Lr),{is:(m=p.route)==null?void 0:m.component,"clicks-elements":A(o),"onUpdate:clicksElements":d[0]||(d[0]=f=>Se(o)?o.value=f:null),clicks:r.value,"clicks-disabled":!1,class:Ve(A(Mr)(p.route)),route:p.route},null,8,["is","clicks-elements","clicks","class","route"]),l.value?(b(),L(A(l),{key:0,page:+p.route.path},null,8,["page"])):xe("v-if",!0),O(A(Nm))],12,X$)}}}),Ru=C(ez,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),tz=Pe({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(t){var l;const n=t;z(S);const a=J(((l=n.route.meta)==null?void 0:l.__clicksElements)||[]),o=F(()=>n.route),i=Km(o);return(r,c)=>(b(),oe(Ce,null,[O(Ru,{"clicks-elements":a.value,"onUpdate:clicksElements":c[0]||(c[0]=u=>a.value=u),clicks:0,nav:A(i),route:o.value},null,8,["clicks-elements","nav","route"]),A(_s)?xe("v-if",!0):(b(!0),oe(Ce,{key:0},qa(a.value.length,u=>(b(),L(Ru,{key:u,clicks:u,nav:A(i),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),nz=C(tz,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),az={id:"print-content"},sz=Pe({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(t){const n=t;z(S);const a=F(()=>n.width),o=F(()=>n.width/Sn),i=F(()=>a.value/o.value),l=F(()=>i.value<Sn?a.value/Cn:o.value*Sn/Cn);let r=Qe.slice(0,-1);Rt.value.query.range&&(r=Um(r.length,Rt.value.query.range).map(p=>r[p-1]));const c=F(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return $t(jd,l),(u,p)=>(b(),oe("div",{id:"print-container",class:Ve(c.value)},[e("div",az,[(b(!0),oe(Ce,null,qa(A(r),d=>(b(),L(nz,{key:d.path,route:d},null,8,["route"]))),128))]),Ut(u.$slots,"controls")],2))}});const oz=C(sz,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),iz=Pe({__name:"Print",setup(t){return z(S),ya(()=>{Fa?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,a)=>(b(),oe(Ce,null,[A(Fa)?(b(),L(jm,{key:0})):xe("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tt(A(yr))},[O(oz,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:A(ha).width.value},null,8,["style","width"])],4)],64))}});const lz=C(iz,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const rz={class:"slidev-layout end"},cz={__name:"end",setup(t){return z(S),(n,a)=>(b(),oe("div",rz,[Ut(n.$slots,"default",{},()=>[s("END")],!0)]))}},uz=C(cz,[["__scopeId","data-v-e532b98d"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function Fu(t){return t.startsWith("/")?"/4/html/"+t.slice(1):t}function pz(t,n=!1){const a=t&&["#","rgb","hsl"].some(i=>t.indexOf(i)===0),o={background:a?t:void 0,color:t&&!a?"white":void 0,backgroundImage:a?void 0:t?n?`linear-gradient(#0005, #0008), url(${Fu(t)})`:`url("${Fu(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const dz={class:"my-auto w-full"},mz=Pe({__name:"cover",props:{background:{default:""}},setup(t){const n=t;z(S);const a=F(()=>pz(n.background,!0));return(o,i)=>(b(),oe("div",{class:"slidev-layout cover",style:tt(a.value)},[e("div",dz,[Ut(o.$slots,"default")])],4))}}),fz=C(mz,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),hz=e("h1",null,"Hyper Text Markup Language",-1),gz=e("p",null,"HTML per sviluppatori",-1),_z={class:"pt-12"},vz={class:"px-2 py-1"},kz={__name:"1",setup(t){const n={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.4.3"};return z(S),(a,o)=>{const i=Fm;return b(),L(fz,j(q(n)),{default:w(()=>[hz,gz,e("div",_z,[e("span",vz,[s(" Premi spazio o "),O(i,{class:"inline"}),s(" per la prossima slide ")])])]),_:1},16)}}},bz=C(kz,[["__file","/@slidev/slides/1.md"]]),yz={class:"slidev-layout default"},wz={__name:"default",setup(t){return z(S),(n,a)=>(b(),oe("div",yz,[Ut(n.$slots,"default")]))}},W=C(wz,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),xz=e("h1",null,"HTML",-1),Tz=e("p",null,[e("em",null,"H"),s("yper "),e("em",null,"T"),s("ext "),e("em",null,"M"),s("arkup "),e("em",null,"L"),s("anguage (linguaggio di markup per ipertesti), comunemente noto con l’acronimo di "),e("strong",null,"HTML"),s(", è un "),e("strong",null,"linguaggio di markup"),s(" per la creazione di una pagina web.")],-1),$z=e("ul",null,[e("li",null,[e("p",null,"Originariamente nato per la formattazione e impaginazione di documenti ipertestuali (web 1.0), oggi è alla base dello sviluppo di siti ed applicazioni web.")]),e("li",null,[e("p",null,[s("Viene utilizzato principalmente per il disaccoppiamento della struttura logica di una pagina web (definita appunto dal markup "),e("strong",null,"HTML"),s(") dalla sua rappresentazione, gestita tramite gli stili "),e("strong",null,"CSS"),s(" e dalla sua logica di funzionamento implementata tramite il linguaggio "),e("strong",null,"JavaScript"),s(".")])]),e("li",null,[e("p",null,"L’HTML è un linguaggio di pubblico dominio, la cui sintassi è stabilita dal World Wide Web Consortium (W3C). La versione attuale, la quinta, è stata rilasciata dal W3C nell’ottobre 2014.")]),e("li",null,[e("p",null,"Il motivo principale che ha spinto il W3C e i suoi membri a sviluppare HTML5 è stata la necessità di fornire direttamente le funzionalità che in precedenza erano fruibili tramite estensioni proprietarie all’esterno dei browser, come Adobe Flash e simili. Un secondo obiettivo che gli sviluppatori si erano prefissati era quello di garantire una maggiore compatibilità tra i diversi browser, indipendentemente dalla piattaforma software utilizzata, e principalmente mirata all’espansione dei dispositivi mobili.")])],-1),zz={__name:"2",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[xz,Tz,$z]),_:1},16))}},Mz=C(zz,[["__file","/@slidev/slides/2.md"]]),Lz="/4/html/assets/html5_1-9e65f7ef.jpg",Iz=e("h1",null,"HTML",-1),Ez=e("p",null," ",-1),Sz=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ul",null,[e("li",null,"HTML5 linguaggio evoluto per il markup o descrizione delle pagine HTML"),e("li",null,"Definito e standardizzato dal W3C (WWW Consortium)"),e("li",null,"Descrive la semantica ed il contenuto di una pagina Web"),e("li",null,"Definisce una serie di tecnologie correlate"),e("li",null,"Note come HTML Living Standard (è in continua evoluzione)")])]),e("div",null,[e("p",null,[e("img",{src:Lz,alt:"html5_1.jpg"})])])],-1),Cz={__name:"3",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[Iz,Ez,Sz]),_:1},16))}},Az=C(Cz,[["__file","/@slidev/slides/3.md"]]),Oz="/4/html/assets/html5_2-f6246604.jpg",Pz=e("h1",null,"HTML",-1),Hz=e("p",null," ",-1),Rz=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("p",null,[s("Una "),e("strong",null,"pagina Web"),s(" contiene:")]),e("ul",null,[e("li",null,"immagini"),e("li",null,"audio"),e("li",null,"file multimediali"),e("li",null,"testo"),e("li",null,"hotword")]),e("p",null,[s("Le "),e("strong",null,"hotword"),s(" sono parti della pagina legate a link.")]),e("p",null,[s("I "),e("strong",null,"link"),s(" sono collegamenti che portano ad altre pagine o altre risorse.")])]),e("div",null,[e("p",null,[e("img",{src:Oz,alt:"html5_2.jpg"})])])],-1),Fz={__name:"4",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[Pz,Hz,Rz]),_:1},16))}},Nz=C(Fz,[["__file","/@slidev/slides/4.md"]]),qz=e("h1",null,"HTML",-1),jz=e("p",null,[s("Il "),e("a",{href:"https://www.w3schools.com/",target:"_blank",rel:"noopener"},"sito web"),s(" del consorzio W3C, offre una preziosa fonte di informazioni per apprendere le tecnologie del web.")],-1),Dz=e("h3",null,"HTML",-1),Wz=e("ul",null,[e("li",null,[e("a",{href:"https://www.w3schools.com/html/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/html/default.asp")]),e("li",null,[e("a",{href:"https://www.w3schools.com/tags/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/tags/default.asp")]),e("li",null,[e("a",{href:"https://htmlreference.io/",target:"_blank",rel:"noopener"},"https://htmlreference.io/")])],-1),Bz=e("h3",null,"CSS",-1),Vz=e("ul",null,[e("li",null,[e("a",{href:"https://www.w3schools.com/css/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/css/default.asp")]),e("li",null,[e("a",{href:"https://www.w3schools.com/cssref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/cssref/default.asp")]),e("li",null,[e("a",{href:"https://cssreference.io/",target:"_blank",rel:"noopener"},"https://cssreference.io/")])],-1),Uz=e("h3",null,"Java Script",-1),Kz=e("ul",null,[e("li",null,[e("a",{href:"https://www.w3schools.com/js/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/js/default.asp")]),e("li",null,[e("a",{href:"https://www.w3schools.com/jsref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/jsref/default.asp")]),e("li",null,[e("a",{href:"https://devdocs.io/javascript/",target:"_blank",rel:"noopener"},"https://devdocs.io/javascript/")]),e("li",null,[e("a",{href:"https://javascript.info/",target:"_blank",rel:"noopener"},"https://javascript.info/")])],-1),Gz={__name:"5",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[qz,jz,Dz,Wz,Bz,Vz,Uz,Kz]),_:1},16))}},Qz=C(Gz,[["__file","/@slidev/slides/5.md"]]),Yz={class:"slidev-layout section w-full h-full grid"},Zz={class:"my-auto text-center"},Jz={__name:"section",setup(t){return z(S),(n,a)=>(b(),oe("div",Yz,[e("div",Zz,[Ut(n.$slots,"default")])]))}},Nt=C(Jz,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/section.vue"]]),Xz=e("h1",{class:"sezione"},"Ambiente di Sviluppo",-1),e2={__name:"6",setup(t){const n={layout:"section"};return z(S),(a,o)=>(b(),L(Nt,j(q(n)),{default:w(()=>[Xz]),_:1},16))}},t2=C(e2,[["__file","/@slidev/slides/6.md"]]),n2=e("h1",null,"HTML - Ambiente di sviluppo",-1),a2=e("p",null," ",-1),s2=e("ul",null,[e("li",null,"Al fine di comprendere appieno lo sviluppo web, è preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice"),e("li",null,"Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web"),e("li",null,"Il passaggio ad un sistema autore o ad un CMS risulta poi più facile e intuitivo.")],-1),o2={__name:"7",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[n2,a2,s2]),_:1},16))}},i2=C(o2,[["__file","/@slidev/slides/7.md"]]),l2="/4/html/assets/html5_3-98b93fb7.jpg",r2=e("h1",null,"HTML - Ambiente di sviluppo",-1),c2=e("p",null,[e("a",{href:"https://code.visualstudio.com/docs/languages/html",target:"_blank",rel:"noopener"},"Visual Studio Code")],-1),u2=e("div",{grid:"~ cols-2 gap-32"},[e("div",null,[e("ul",null,[e("li",null,"Qualsiasi editor testuale è adatto allo sviluppo web"),e("li",null,[e("strong",null,"Visual Studio Code"),s(" fornisce supporto al HTML in modo nativo")]),e("li",null,"Fornisce il syntax highlighting, smart completions con IntelliSense e formattazione customizzabile"),e("li",null,"In aggiunta sono disponibili moltissime estensioni per facilitare lo sviluppo web")])]),e("div",null,[e("p",null,[e("img",{src:l2,alt:"html5_3.jpg"})])])],-1),p2={__name:"8",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[r2,c2,u2]),_:1},16))}},d2=C(p2,[["__file","/@slidev/slides/8.md"]]),m2="/4/html/assets/html5_4-d48b4fdd.jpg",f2=e("h1",null,"HTML - Ambiente di sviluppo",-1),h2=e("p",null,"Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.",-1),g2=e("p",null,[e("img",{src:m2,alt:"html5_4.jpg"})],-1),_2={__name:"9",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[f2,h2,g2]),_:1},16))}},v2=C(_2,[["__file","/@slidev/slides/9.md"]]),k2=e("h1",null,"HTML - Ambiente di sviluppo",-1),b2=e("p",null," ",-1),y2=e("ul",null,[e("li",null,"Quindi per sviluppare una pagina web usiamo vscode (o il nostro editor preferito)"),e("li",null,"Scriviamo il codice di markup della pagina"),e("li",null,"Salviamo con estensione .html"),e("li",null,"Apriamo il file nel browser (CTRL + o o drag’n drop)"),e("li",null,"La pagina viene visualizzata all’interno del browser")],-1),w2={__name:"10",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[k2,b2,y2]),_:1},16))}},x2=C(w2,[["__file","/@slidev/slides/10.md"]]),T2=e("h1",{class:"sezione"},"Tag e Attributi",-1),$2={__name:"11",setup(t){const n={layout:"section"};return z(S),(a,o)=>(b(),L(Nt,j(q(n)),{default:w(()=>[T2]),_:1},16))}},z2=C($2,[["__file","/@slidev/slides/11.md"]]),M2={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},L2=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),I2=[L2];function E2(t,n){return b(),oe("svg",M2,I2)}const S2={name:"ph-clipboard",render:E2},C2={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},A2=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),O2=[A2];function P2(t,n){return b(),oe("svg",C2,O2)}const H2={name:"ph-check-circle",render:P2},R2=["title"],F2=Pe({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(t){const n=t;z(S);const a=z(ds),o=z(ta),i=z(ms);function l(m=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=h.length;for(let y=0;y<m;y++)f.push(h.charAt(Math.floor(Math.random()*g)));return f.join("")}const r=J(),c=It();Dn(()=>{const m=n.at==null?o==null?void 0:o.value.length:n.at,f=F(()=>i!=null&&i.value?n.ranges.length-1:Math.min(Math.max(0,((a==null?void 0:a.value)||0)-(m||0)),n.ranges.length-1)),h=F(()=>n.ranges[f.value]||"");if(n.ranges.length>=2&&!(i!=null&&i.value)){const g=l(),y=ck(n.ranges.length-1).map(x=>g+x);o!=null&&o.value&&(o.value.push(...y),li(()=>y.forEach(x=>gl(o.value,x)),c))}ya(()=>{if(!r.value)return;const y=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const x of y){const T=Array.from(x.querySelectorAll(".line")),$=Um(T.length,h.value);if(T.forEach((v,E)=>{const M=$.includes(E+1);v.classList.toggle(Zn,!0),v.classList.toggle("highlighted",M),v.classList.toggle("dishonored",!M)}),n.maxHeight){const v=Array.from(x.querySelectorAll(".line.highlighted"));v.reduce((M,P)=>P.offsetHeight+M,0)>r.value.offsetHeight?v[0].scrollIntoView({behavior:"smooth",block:"start"}):v.length>0&&v[Math.round((v.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=c1();function d(){var f,h;const m=(h=(f=r.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;m&&p(m)}return(m,f)=>{const h=H2,g=S2;return b(),oe("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:tt({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[Ut(m.$slots,"default"),A(Ee).codeCopy?(b(),oe("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:A(u)?"Copied":"Copy",onClick:f[0]||(f[0]=y=>d())},[A(u)?(b(),L(h,{key:0,class:"p-2 w-8 h-8"})):(b(),L(g,{key:1,class:"p-2 w-8 h-8"}))],8,R2)):xe("v-if",!0)],4)}}}),re=C(F2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),N2=e("h1",null,"TAG",-1),q2=e("p",null,"I TAG HTML sono marcatori (Markup Language) che modificano la semantica (senso, ruolo organizzazione) dei contenuti di una pagina.",-1),j2=e("h3",null,"Anatomia di un TAG",-1),D2=e("ul",null,[e("li",null,"Un tag è racchiuso tra < e >"),e("li",null,"Il nome del tag è sempre scritto in minuscolo"),e("li",null,[s("Se non specificato deve sempre esserci un tag di "),e("strong",null,"apertura"),s(" ed un tag di "),e("strong",null,"chiusura")])],-1),W2=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),e("span",{class:"token punctuation"},">")]),s(" --> TAG di apertura")])])],-1),B2=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")]),s(" --> TAG di chiusura")])])],-1),V2=e("p",null,"Il contenuto da modificare è compreso tra il tag di apertura ed il tag di chiusura",-1),U2=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])])])],-1),K2={__name:"12",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[N2,q2,j2,D2,O(i,Y({},{ranges:[""]}),{default:w(()=>[W2]),_:1},16),O(i,Y({},{ranges:[""]}),{default:w(()=>[B2]),_:1},16),V2,O(i,Y({},{ranges:[""]}),{default:w(()=>[U2]),_:1},16)]),_:1},16)}}},G2=C(K2,[["__file","/@slidev/slides/12.md"]]),Q2=e("h1",null,"TAG singleton",-1),Y2=e("p",null,"Elementi HTML con il solo tag di apertura.",-1),Z2=e("ul",null,[e("li",null,[s("In HTML sono definiti una serie di tag, detti "),e("em",null,"singleton"),s(" che non richiedono il tag di chiusura.")]),e("li",null,"Per essere formalmente corretti questi elementi devono essere scritti in questo modo:")],-1),J2=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tag")]),s(),e("span",{class:"token punctuation"},"/>")]),s(": notare lo slash finale che indica la mancanza di un tag di chiusura.")])])],-1),X2=e("p",null,"Qui la lista dei tag singleton che non richiedono una chiusura.",-1),eM=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("area")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("base")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("col")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("embed")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("command")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("hr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),e("span",{class:"token punctuation"},">")])])])])]),e("div",null,[e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("keygen")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("link")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meta")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("param")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("source")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("track")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("wbr")]),e("span",{class:"token punctuation"},">")])])])])])],-1),tM={__name:"13",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[Q2,Y2,Z2,O(i,Y({},{ranges:[""]}),{default:w(()=>[J2]),_:1},16),X2,eM]),_:1},16)}}},nM=C(tM,[["__file","/@slidev/slides/13.md"]]),aM=e("h1",null,"Attributi",-1),sM=e("p",null,"Caratteristiche addizionali di un TAG",-1),oM=e("ul",null,[e("li",null,[s("I tag HTML possono avere degli "),e("strong",null,"attributi"),s(" che forniscono delle informazioni addizionali al browser.")]),e("li",null,[s("Gli attributi sono "),e("strong",null,"sempre"),s(" specificati nel tag di apertura.")]),e("li",null,"Gli attributi sono definiti da una coppia nome-valore")],-1),iM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),s(),e("span",{class:"token attr-name"},"nome"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])])])],-1),lM=e("ul",null,[e("li",null,"Un tag può avere 0, 1 o più attributi")],-1),rM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),s(),e("span",{class:"token attr-name"},"nome"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),s(),e("span",{class:"token attr-name"},"nome1"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore1"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"nome2"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore2"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"nome3"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore3"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])])])],-1),cM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meta")]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("author"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Antonio Mancuso"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),s(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://www.w3schools.com"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Visit W3Schools"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("a")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("p")]),s(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"color"),e("span",{class:"token punctuation"},":"),s("red"),e("span",{class:"token punctuation"},";")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")]),s("This is a red paragraph."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("p")]),e("span",{class:"token punctuation"},">")])])])],-1),uM={__name:"14",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[aM,sM,oM,O(i,Y({},{ranges:[""]}),{default:w(()=>[iM]),_:1},16),lM,O(i,Y({},{ranges:[""]}),{default:w(()=>[rM]),_:1},16),s(" ### Esempio: "),O(i,Y({},{ranges:[""]}),{default:w(()=>[cM]),_:1},16)]),_:1},16)}}},pM=C(uM,[["__file","/@slidev/slides/14.md"]]),dM=e("h1",{class:"sezione"},"La struttura di una pagina Web",-1),mM={__name:"15",setup(t){const n={layout:"section"};return z(S),(a,o)=>(b(),L(Nt,j(q(n)),{default:w(()=>[dM]),_:1},16))}},fM=C(mM,[["__file","/@slidev/slides/15.md"]]),hM=e("h1",null,"Struttura pagina HTML",-1),gM=e("p",null,"Una pagina HTML ha una struttuta fissa che deve sempre essere rispettata.",-1),_M=e("p",null,"Una generica pagina HTML è composta da 3 sezioni principali:",-1),vM=e("ol",null,[e("li",null,[e("strong",null,"Documento"),s(": il contenitore di più alto livello, che racchiude tutte le altre sezioni della pagina HTML.")]),e("li",null,[e("strong",null,"Head"),s(": il contenitore per i metadati (dato che descrive un dato) del documento e va inserito in testa al docuemnto.")]),e("li",null,[e("strong",null,"Body"),s(": consiste nel contenuto principale della pagina HTML.")])],-1),kM={__name:"16",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[hM,gM,_M,vM]),_:1},16))}},bM=C(kM,[["__file","/@slidev/slides/16.md"]]),yM="/4/html/assets/html5_5-a532b0f3.jpg",wM=e("h1",null,"Struttura pagina HTML",-1),xM=e("p",null,"Rappresentazione grafica della struttura di una pagina HTML",-1),TM=e("p",null,[e("img",{src:yM,alt:"html5_5.jpg"})],-1),$M={__name:"17",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[wM,xM,TM]),_:1},16))}},zM=C($M,[["__file","/@slidev/slides/17.md"]]),MM=e("h1",null,"Struttura pagina HTML",-1),LM=e("p",null,"Documento HTML",-1),IM=e("ul",null,[e("li",null,"Tutti i documenti HTML devono iniziare con la dichiarazione DOCTYPE che deve essere seguita dal TAG di più alto livello")],-1),EM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token doctype"},[e("span",{class:"token punctuation"},"<!"),e("span",{class:"token doctype-tag"},"DOCTYPE"),s(),e("span",{class:"token name"},"html"),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("html")]),e("span",{class:"token punctuation"},">")])])])],-1),SM=e("ul",null,[e("li",null,[e("strong",null,"<!DOCTYPE html>"),s(": rappresenta il tipo di documento (html) e permette al browser di visualizzare la pagina HTML in modo corretto.")]),e("li",null,"Deve apparire nella pagina 1 sola volta come prima linea e prima di qualsiasi altro elemento o tag."),e("li",null,[e("strong",null,"<html>"),s(": è il primo tag di apertura che indica l’inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.")])],-1),CM={__name:"18",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[MM,LM,IM,O(i,Y({},{ranges:[""]}),{default:w(()=>[EM]),_:1},16),SM]),_:1},16)}}},AM=C(CM,[["__file","/@slidev/slides/18.md"]]),OM=e("h1",null,"Struttura pagina HTML",-1),PM=e("p",null,"Header del documento",-1),HM=e("ul",null,[e("li",null,[s("Il primo elemento di apertura della pagina HTML è l’"),e("em",null,[e("strong",null,"HEAD"),s("er")]),s(" o intestazione.")]),e("li",null,[e("strong",null,"<head>"),s(": tag di apertura dell’header che contiene la descrizione dei "),e("em",null,"metadati"),s(" del documento HTML.")]),e("li",null,"I metadati sono dati che descrivono delle caratteristiche del documento, per esempip il titolo, il set di caratteri, l’autore,etc…"),e("li",null,[s("La sezione header ed i metadati contenuti "),e("strong",null,"NON"),s(" sono visualizzati.")]),e("li",null,"Il più importante elemento della sezione head è il titolo identificato dal tag")],-1),RM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("title")]),e("span",{class:"token punctuation"},">")]),s("Titolo della pagina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("title")]),e("span",{class:"token punctuation"},">")])])])],-1),FM={__name:"19",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[OM,PM,HM,O(i,Y({},{ranges:[""]}),{default:w(()=>[RM]),_:1},16)]),_:1},16)}}},NM=C(FM,[["__file","/@slidev/slides/19.md"]]),qM=e("h1",null,"Struttura pagina HTML",-1),jM=e("p",null,"Body e contenuto del documento",-1),DM=e("ul",null,[e("li",null,"La sezione del documento identificata dal tag")],-1),WM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("body")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"  ..."),s(`
`),e("span",{class:"line"},"  ..."),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("body")]),e("span",{class:"token punctuation"},">")])])])],-1),BM={__name:"20",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[qM,jM,DM,O(i,Y({},{ranges:[""]}),{default:w(()=>[WM]),_:1},16),s(" - Rappresenta e contiene tutti i tag di descrizione e markup della pagina. - In questa sezione viene definito il contenuto che si vuole visualizzare nel browser. ")]),_:1},16)}}},VM=C(BM,[["__file","/@slidev/slides/20.md"]]),UM=e("h1",null,"Struttura pagina HTML",-1),KM=e("p",null,"Pagina HTML base",-1),GM=e("p",null,"Questo è il codice della pagina HTML minimale, che contiene solo le sezioni principali",-1),QM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token doctype"},[e("span",{class:"token punctuation"},"<!"),e("span",{class:"token doctype-tag"},"DOCTYPE"),s(),e("span",{class:"token name"},"html"),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token comment"},"<!-- HTML5-->")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"<!-- Questo è un commento su una singola riga -->")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},"<!-- Questo è un commento "),s(`
`),e("span",{class:"line"},"     su più righe"),s(`
`),e("span",{class:"line"},"-->"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("html")]),s(),e("span",{class:"token attr-name"},"lang"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("it"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token comment"},"<!-- Pagina HTML -->")]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("head")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token comment"},"<!-- Header della pagina -->")]),s(`
`),e("span",{class:"line"},"    "),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token comment"},"<!-- Qui vanno inserite informazioni relative alla pagina ma che non saranno visualizzate -->")]),s(`
`),e("span",{class:"line"},"  "),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("head")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("body")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token comment"},"<!-- Corpo principale della pagina HTML -->")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token comment"},"<!-- Questa sezione cotiene il contenuto della pagina HTML che viene visualizzato nel browser -->")]),s(`
`),e("span",{class:"line"},"  "),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("body")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("html")]),e("span",{class:"token punctuation"},">")])])])],-1),YM={__name:"21",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[UM,KM,GM,O(i,Y({},{ranges:[""]}),{default:w(()=>[QM]),_:1},16)]),_:1},16)}}},ZM=C(YM,[["__file","/@slidev/slides/21.md"]]),JM=e("h1",null,"Struttura pagina HTML",-1),XM=e("p",null,"I tag dell’header",-1),eL=e("p",null,"La sezione <head> può contenere i seguenti tag:",-1),tL=e("ul",null,[e("li",null,"<title>: definisce il titolo della pagina HTML."),e("li",null,"<style>: definisce lo stile da applicare alla pagina HTML."),e("li",null,"<meta>: definisce specifici metadata per il documento."),e("li",null,"<link>: utilizzato per referenziare elementi o documenti esterni."),e("li",null,"<script>: definisce la logica da eseguire durante la visualizzazione delle pagina."),e("li",null,"<base>: specifica un UTL di base da applicare a tutto il documento.")],-1),nL={__name:"22",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[JM,XM,eL,tL]),_:1},16))}},aL=C(nL,[["__file","/@slidev/slides/22.md"]]),sL=e("h1",null,"Struttura pagina HTML",-1),oL=e("p",null,"I tag dell’header: <title>",-1),iL=e("ul",null,[e("li",null,"Il più importante elemento della sezione head è il titolo identificato dal tag")],-1),lL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("title")]),e("span",{class:"token punctuation"},">")]),s("Titolo della pagina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("title")]),e("span",{class:"token punctuation"},">")])])])],-1),rL={__name:"23",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[sL,oL,iL,O(i,Y({},{ranges:[""]}),{default:w(()=>[lL]),_:1},16),s(" - Il titolo deve contenere solo informazioni testuali ed è visualizzato nel bordo o tab della finestra del browser. - Il titolo è molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull'algoritmo che decide in quale ordine visualizzare le pagine trovate. ")]),_:1},16)}}},cL=C(rL,[["__file","/@slidev/slides/23.md"]]),uL=e("h1",null,"Struttura pagina HTML",-1),pL=e("p",null,"I tag dell’header: <meta>",-1),dL=e("p",null,"Viene utilizzato per specificare vari tipi di metadati, tra cui:",-1),mL=e("ul",null,[e("li",null,[e("em",null,"character set"),s(": set di caratteri usato dalla pagina web")]),e("li",null,[e("em",null,"descrizione pagina"),s(": descrizione della pagina e dei suoi contenuti")]),e("li",null,[e("em",null,"keywords"),s(": parole chiave per le ricerche web")]),e("li",null,[e("em",null,"autore del documento"),s(": autore/i del documento")]),e("li",null,[e("em",null,"viewport settings"),s(": impostazioni del viewport, spesso utile per dispositivi mobili")])],-1),fL=e("p",null,"Importante notare che i metadati, non sono visualizzati dal browser, ma utilizzati dai motori di ricerca per comprendere meglio il contenuto della pagina stessa.",-1),hL={__name:"24",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[uL,pL,dL,mL,fL]),_:1},16))}},gL=C(hL,[["__file","/@slidev/slides/24.md"]]),_L=e("h1",null,"Struttura pagina HTML",-1),vL=e("p",null,"I tag dell’header: <style>",-1),kL=e("ul",null,[e("li",null,"Definisce uno o più stili che vanno a modificare la visualizzazione della pagina HTML")],-1),bL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("style")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"  body {background-color: powderblue;}"),s(`
`),e("span",{class:"line"},"  h1 {color: red;}"),s(`
`),e("span",{class:"line"},"  p {color: blue;}"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("style")]),e("span",{class:"token punctuation"},">")])])])],-1),yL=e("ul",null,[e("li",null,"Normalmente non si usa mai in quanto non è una buona pratica di programmazione"),e("li",null,[s("Per pagine di media/alta complessità non si include in quanto è più pulito definire gli stili della pagina in un file esterno di tipo "),e("strong",null,"CSS")])],-1),wL={__name:"25",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[_L,vL,kL,O(i,Y({},{ranges:[""]}),{default:w(()=>[bL]),_:1},16),yL]),_:1},16)}}},xL=C(wL,[["__file","/@slidev/slides/25.md"]]),TL=e("h1",null,"Struttura pagina HTML",-1),$L=e("p",null,"I tag dell’header: <script>",-1),zL=e("ul",null,[e("li",null,[s("Desinisce uno script in "),e("strong",null,"Javascript"),s(" che viene eseguito dal browser durante la visualizzazione della pagina.")]),e("li",null,"Permette di eseguire un programma lato client direttamente all’interno del browser."),e("li",null,"Normalmente utilizzato per interagire con l’utente o per modificare l’aspetto della pagina stessa.")],-1),ML=e("pre",{class:"slidev-code language-ts"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token operator"},"<"),s("script"),e("span",{class:"token operator"},">")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token keyword"},"function"),s(),e("span",{class:"token function"},"myFunction"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),s(),e("span",{class:"token punctuation"},"{"),s()]),s(`
`),e("span",{class:"line"},[s("        document"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"getElementById"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"titolo"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),s("innerHTML "),e("span",{class:"token operator"},"="),s(),e("span",{class:"token string"},'"STRUTTURA BASE DI UNA PAGINA WEB"'),e("span",{class:"token punctuation"},";")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token punctuation"},"}")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token operator"},"<"),e("span",{class:"token operator"},"/"),s("script"),e("span",{class:"token operator"},">")])])],-1),LL=e("ul",null,[e("li",null,"Normalmente non si usa mai in quanto non è una buona pratica di programmazione"),e("li",null,[s("Per pagine di media/alta complessità non si include in quanto è più pulito definire gli script della pagina in un file esterno di tipo "),e("strong",null,"JS")])],-1),IL={__name:"26",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[TL,$L,zL,O(i,Y({},{ranges:[""]}),{default:w(()=>[ML]),_:1},16),LL]),_:1},16)}}},EL=C(IL,[["__file","/@slidev/slides/26.md"]]),SL=e("h1",null,"Struttura pagina HTML",-1),CL=e("p",null,"Pagina HTML base",-1),AL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token doctype"},[e("span",{class:"token punctuation"},"<!"),e("span",{class:"token doctype-tag"},"DOCTYPE"),s(),e("span",{class:"token name"},"html"),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token comment"},"<!-- HTML5-->")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("html")]),s(),e("span",{class:"token attr-name"},"lang"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("it"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token comment"},"<!-- Pagina HTML -->")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("head")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token comment"},"<!-- Qui vanno inserite informazioni relative alla pagina ma che non saranno visualizzate -->")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token comment"},"<!-- sezione meta Fornisce informazioni al web browser e ai motori di ricerca per il processo di indicizzazione -->")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meta")]),s(),e("span",{class:"token attr-name"},"charset"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("UTF-8"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meta")]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("author"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Antonio Mancuso"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meta")]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("description"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Template HTML"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meta")]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("keywords"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("template, html, lezioni, scuola"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meta")]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("viewport"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("width=device-width, initial-scale=1.0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meta")]),s(),e("span",{class:"token attr-name"},"http-equiv"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("refresh"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("100"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token comment"},"<!-- Duranbte la fase di sviluppo permette il refresh  automatico della pagina  -->")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("title")]),e("span",{class:"token punctuation"},">")]),s("Prima pagina HTML"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("title")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token comment"},"<!-- titolo della pagina -->")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("style")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"      body {background-color: powderblue;}"),s(`
`),e("span",{class:"line"},"      h1 {color: blue;}"),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("style")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("script")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"      function myFunction() { "),s(`
`),e("span",{class:"line"},'        document.getElementById("titolo").innerHTML = "STRUTTURA BASE DI UNA PAGINA WEB";'),s(`
`),e("span",{class:"line"},"      }"),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("script")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("head")]),e("span",{class:"token punctuation"},">")])])])],-1),OL={__name:"27",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[SL,CL,O(i,Y({},{ranges:[""]}),{default:w(()=>[AL]),_:1},16)]),_:1},16)}}},PL=C(OL,[["__file","/@slidev/slides/27.md"]]),HL=e("h1",null,"Struttura pagina HTML",-1),RL=e("p",null,"Pagina HTML base",-1),FL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("body")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token comment"},"<!-- Corpo principale della pagina HTML-->")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("center")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h1")]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("titolo"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Struttura base di una pagina web"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h1")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},"/>")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),s(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://source.unsplash.com/collection/94734566/1920x1080"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("60%"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("div")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("button")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("button"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"onclick"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value javascript language-javascript"},[e("span",{class:"token function"},"myFunction"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")]),s("Prova a premere"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("button")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("div")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("center")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("body")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("html")]),e("span",{class:"token punctuation"},">")])])])],-1),NL={__name:"28",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[HL,RL,O(i,Y({},{ranges:[""]}),{default:w(()=>[FL]),_:1},16)]),_:1},16)}}},qL=C(NL,[["__file","/@slidev/slides/28.md"]]),jL=e("h1",null,"Esercizio html_01",-1),DL=e("p",null,"Pagina HTML base",-1),WL=e("ol",null,[e("li",null,[s("Creare una pagina HTML come visto nelle slide precedenti e nominarlo "),e("em",null,"pagina.html")]),e("li",null,"Aprire la pagina nel browser e verificarne il funzionamento"),e("li",null,[s("Provare a modificare la sezione "),e("em",null,"body"),s(" e verificare i cambiamenti")]),e("li",null,[s("Provare a modificare la sezione "),e("em",null,"style"),s(" e verificare i cambiamenti")]),e("li",null,[s("Provare a modificare la sezione "),e("em",null,"script"),s(" e verificare i cambiamenti")])],-1),BL={__name:"29",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[jL,DL,WL]),_:1},16))}},VL=C(BL,[["__file","/@slidev/slides/29.md"]]),UL=e("h1",{class:"sezione"},"Titoli e Paragrafi in HTML",-1),KL={__name:"30",setup(t){const n={layout:"section"};return z(S),(a,o)=>(b(),L(Nt,j(q(n)),{default:w(()=>[UL]),_:1},16))}},GL=C(KL,[["__file","/@slidev/slides/30.md"]]),QL="/4/html/assets/html5_7-c1d52ad4.jpg",YL=e("h1",null,"HTML Headings",-1),ZL=e("p",null,"Titoli e sottotitoli",-1),JL=e("ul",null,[e("li",null,"Heading o intestazione: sono marcatori HTML che permettono di definire titoli e sottotitoli in una pagina web."),e("li",null,"HTML definisce 6 livelli di heading, dal più importante al meno importante:")],-1),XL={grid:"~ cols-2 gap-32"},eI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"<!--livello più importante-->")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h1")]),e("span",{class:"token punctuation"},">")]),s("Heading 1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h1")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h2")]),e("span",{class:"token punctuation"},">")]),s("Heading 2"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h2")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Heading 3"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h4")]),e("span",{class:"token punctuation"},">")]),s("Heading 4"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h4")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h5")]),e("span",{class:"token punctuation"},">")]),s("Heading 5"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h5")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h6")]),e("span",{class:"token punctuation"},">")]),s("Heading 6"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h6")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"<!--livello meno importante-->")])])],-1),tI=e("ul",null,[e("li",null,[s("I motori di ricerca usano i tag di "),e("em",null,"heading"),s(" per capire e definire un indice del contenuto di una pagina")]),e("li",null,[e("strong",null,"NOTA"),s(": "),e("em",null,[s("Usa i tag <hN> solo per i titoli e sottotitoli. "),e("strong",null,"NON"),s(" usarli per visualizzare testo in grassetto o con font più grande.")])])],-1),nI=e("div",null,[e("p",null,[e("img",{src:QL,alt:"html5_7.jpg"})])],-1),aI={__name:"31",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[YL,ZL,JL,e("div",XL,[e("div",null,[O(i,Y({},{ranges:[""]}),{default:w(()=>[eI]),_:1},16),tI]),nI])]),_:1},16)}}},sI=C(aI,[["__file","/@slidev/slides/31.md"]]),oI=e("h1",null,"HTML Paragrafi",-1),iI=e("p",null,"Blocchi di testo",-1),lI=e("ul",null,[e("li",null,"Nell’editing di una pagina HTML, è spesso utile poter inserire un blocco di testo o paragrafo"),e("li",null,[s("HTML mette a disposizione un tag specifico "),e("strong",null,"<p>"),s(" che definisce un paragrafo di testo, lungo a piacere, da visualizzare in una pagina web")])],-1),rI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("p")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"  ..."),s(`
`),e("span",{class:"line"},"  ... Blocco di testo"),s(`
`),e("span",{class:"line"},"  ..."),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("p")]),e("span",{class:"token punctuation"},">")])])])],-1),cI={__name:"32",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[oI,iI,lI,O(i,Y({},{ranges:[""]}),{default:w(()=>[rI]),_:1},16),s(" - Ogni paragrafo è preceduto e seguito da una linea bianca distanziatrice. - Il browser è libero di aggiunge automaticamente degli spazi (un margine) prima e dopo il testo. - Non si può essere sicuri di come il browser visualizzi il paragrafo. - Il risultato può essere diverso su uno schermo grande rispetto ad uno piccolo. - Pertanto l'aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser. ")]),_:1},16)}}},uI=C(cI,[["__file","/@slidev/slides/32.md"]]),pI=e("h1",null,"Esercizio html_02",-1),dI=e("p",null,"Heading e paragrafi",-1),mI=e("ol",null,[e("li",null,[s("Trasformare il file di test "),e("a",{href:"../../support/esercizio_html_02.txt",target:"_blank",rel:"noopener"},[e("em",null,"esercizio_html_02.txt")]),s(" in "),e("em",null,"|cognome|_esercizio_html_02.html")]),e("li",null,"Creare la struttura della pagina HTML inserendo anche i metadati appropriati"),e("li",null,"Impaginare il testo inserendo, in modo appropriato, gli heading necessari per titoli e sottotitoli"),e("li",null,"Suddividere il testo in paragrafi in modo opportuno"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_02.html")],-1),fI={__name:"33",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[pI,dI,mI]),_:1},16))}},hI=C(fI,[["__file","/@slidev/slides/33.md"]]),gI=e("h1",{class:"sezione"},"Elementi block e inline",-1),_I={__name:"34",setup(t){const n={layout:"section"};return z(S),(a,o)=>(b(),L(Nt,j(q(n)),{default:w(()=>[gI]),_:1},16))}},vI=C(_I,[["__file","/@slidev/slides/34.md"]]),kI=e("h1",null,"Display Value",-1),bI=e("p",null,"Elementi inline e block",-1),yI=e("p",null,"Ogni elemento HTML ha un valore di display in funzione del tipo di elemento:",-1),wI=e("h3",null,[e("strong",null,"block"),s(" element")],-1),xI=e("ul",null,[e("li",null,"Un elemento block comincia sempre su una nuova linea"),e("li",null,"Un elemento block occupa tutta la larghezza possibile anche se non necessaria"),e("li",null,"Un elemento block ha un margine superiore ed inferiore")],-1),TI=e("pre",null,[s(`
`),e("div",{style:{border:"1px solid black",padding:"8px 0px 8px 5px"}},"The <div> element is a block-level element."),s(`
`),e("div",{style:{border:"1px solid black",padding:"8px 0px 8px 5px"}},"The <h1> element is another block-level element."),s(`
`)],-1),$I=e("p",null,"Qui la lista di tag di tipo block:",-1),zI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("address")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("article")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("aside")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("blockquote")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("canvas")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("dd")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("div")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("dl")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("dt")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("fieldset")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("figcaption")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("figure")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("footer")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h1")]),e("span",{class:"token punctuation"},">")]),s("-"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h6")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("header")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("hr")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("main")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("nav")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("noscript")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ol")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("p")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("pre")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("section")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tfoot")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ul")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("video")]),e("span",{class:"token punctuation"},">")])])])],-1),MI={__name:"35",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[kI,bI,yI,wI,xI,TI,$I,O(i,Y({},{ranges:[""]}),{default:w(()=>[zI]),_:1},16)]),_:1},16)}}},LI=C(MI,[["__file","/@slidev/slides/35.md"]]),II=e("h1",null,"Display Value",-1),EI=e("p",null,"Elementi inline e block",-1),SI=e("h3",null,[e("strong",null,"inline"),s(" element")],-1),CI=e("ul",null,[e("li",null,"Un elemento inline non comincia su una nuova linea"),e("li",null,"Un elemento inline occupa solo la larghezza minima necessaria")],-1),AI=e("pre",null,[s(`
`),e("span",{style:{padding:"0px 5px 0px 5px",border:"1px solid black"}},"<span> is a inline-level element."),e("span",{style:{padding:"0px 5px 0px 5px",border:"1px solid black"}},"<input> is another inline-level element."),s(`
`)],-1),OI=e("p",null,"Qui la lista di tag di tipo block:",-1),PI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("abbr")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("acronym")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("bdo")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("big")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("button")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("cite")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("code")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("dfn")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("em")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("i")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("kbd")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("map")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("object")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("output")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("q")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("samp")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("script")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("select")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("small")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("span")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("strong")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sub")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sup")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("textarea")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("time")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tt")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("var")]),e("span",{class:"token punctuation"},">")])])])],-1),HI={__name:"36",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[II,EI,SI,CI,AI,OI,O(i,Y({},{ranges:[""]}),{default:w(()=>[PI]),_:1},16)]),_:1},16)}}},RI=C(HI,[["__file","/@slidev/slides/36.md"]]),FI=e("h1",null,"DIV",-1),NI=e("p",null,"Contenitore di contenitori block",-1),qI=e("ul",null,[e("li",null,[s("Un tag estremamente importante nello sviluppo web moderno è "),e("strong",null,"<div>"),s(".")]),e("li",null,[e("strong",null,"<DIV>"),s(" è di tipo "),e("strong",null,"block"),s(" e definisce un generico blocco di contenuto senza una semantica particolare.")]),e("li",null,"E’ comunemente usato come contenitore per altri elementi HTML o altri div"),e("li",null,"Pertanto DIV è utilizzato per creare delle strutture di layout del contenuto web."),e("li",null,"Insieme a CSS è utilizzato per definire lo stile di blocchi di contenuto")],-1),jI=e("h3",null,"esempio",-1),DI=e("div",{style:{"background-color":"red",color:"white",padding:"20px"}},[e("h2",null,"ATTENZIONE"),e("p",null,"Si richiede a tutti gli studenti di studiare e sperimentare il più possibile con HTML."),e("p",null,"Oggi tutte le moderne applicazioni sono sviluppate in HTML - CSS e JavaScript")],-1),WI={__name:"37",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[FI,NI,qI,jI,DI]),_:1},16))}},BI=C(WI,[["__file","/@slidev/slides/37.md"]]),VI=e("h1",null,"SPAN",-1),UI=e("p",null,"Contenitore di contenitori inline",-1),KI=e("ul",null,[e("li",null,[s("Un tag estremamente importante nello sviluppo web moderno è "),e("strong",null,"<span>"),s(".")]),e("li",null,[s("Il tag "),e("strong",null,"<span>"),s(" definisce un generico contenitore di tipo "),e("strong",null,"inline"),s(" a cui non è associata nessuna semantica particolare.")]),e("li",null,"E’ comunemente usato per modificare una parte di testo in un paragrafo on in altre sezione di un documento HTML."),e("li",null,"Insieme a CSS è utilizzato per definire lo stile di parti di testo.")],-1),GI=e("h3",null,"esempio",-1),QI=e("p",null,[s("Comunicato a tutti gli studenti: "),e("span",{style:{color:"white",background:"red","font-weight":"bold"}},"ATTENZIONE"),s(" Si richiede a tutti gli studenti di "),e("span",{style:{color:"darkolivegreen","font-weight":"bold"}},"studiare"),s(" e sperimentare il più possibile con HTML.")],-1),YI={__name:"38",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[VI,UI,KI,GI,QI]),_:1},16))}},ZI=C(YI,[["__file","/@slidev/slides/38.md"]]),JI=e("h1",{class:"sezione"},"Ancore e Link",-1),XI={__name:"39",setup(t){const n={layout:"section"};return z(S),(a,o)=>(b(),L(Nt,j(q(n)),{default:w(()=>[JI]),_:1},16))}},eE=C(XI,[["__file","/@slidev/slides/39.md"]]),tE=e("h1",null,"Ancore e Link",-1),nE=e("p",null,"Collegamenti a contenuti esterni",-1),aE=e("ul",null,[e("li",null,[s("I link sono alla base del concetto di "),e("em",null,"iptertesto"),s(", che a sua volta è alla base dello WWW.")]),e("li",null,[s("I link servono per creare dei "),e("em",null,"collegamenti"),s(" tra documenti diversi in modo da formare un unico "),e("em",null,"ipertesto"),s(".")]),e("li",null,[s("Un link ad una risorsa o documento esterno si crea usando il tag "),e("em",null,"ancora"),s(),e("strong",null,"<a>")])],-1),sE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),s(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("url"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("link text"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("a")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},"Esempio"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),s(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://agnelli.it/"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"target"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("_blank"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Istituto Internazionale E.Agnelli"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("a")]),e("span",{class:"token punctuation"},">")])])])],-1),oE=e("a",{href:"https://agnelli.it/",target:"_parent"},"Istituto Internazionale E.Agnelli",-1),iE=e("ul",null,[e("li",null,[e("strong",null,"href"),s(": attributo che definisce la destinazione dell’ancora e pertanto il link")]),e("li",null,[e("strong",null,"target"),s(": per default il link viene visualizzato nella finestra corrente del browser. Questo attributo permette di modificare il comportamento standard.")])],-1),lE=e("p",null,[s("Il principale valore per "),e("em",null,"target"),s(" è "),e("strong",null,"_blank"),s(", e permette di aprire il documento in un una nuova finestra o tab del browser.")],-1),rE={__name:"40",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[tE,nE,aE,O(i,Y({},{ranges:[""]}),{default:w(()=>[sE]),_:1},16),s(" Qui puoi visitare L'"),oE,iE,lE]),_:1},16)}}},cE=C(rE,[["__file","/@slidev/slides/40.md"]]),uE=e("h1",null,"Ancore e Link",-1),pE=e("p",null,"Collegamenti a contenuti esterni",-1),dE=e("p",null,[s("L’URL specificato nell’attributo "),e("em",null,"href"),s(" può essere:")],-1),mE=e("ul",null,[e("li",null,[e("strong",null,"assoluto"),s(": link ad una risorsa esterna nella forma canonica "),e("em",null,[e("a",{href:"https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",target:"_blank",rel:"noopener"},"https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")])]),e("li",null,[e("strong",null,"relativo"),s(": link relativo ad una risorsa locale, presente nello stesso server "),e("em",null,"/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")])],-1),fE=e("p",null,[s("Questo perchè, tutte le URL relative fanno riferimento ad una directory chiamata "),e("strong",null,"document root"),s(" che rappresenta la root del web server.")],-1),hE={__name:"41",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[uE,pE,dE,mE,fE]),_:1},16))}},gE=C(hE,[["__file","/@slidev/slides/41.md"]]),_E=e("h1",null,"Esercizio html_03",-1),vE=e("p",null,"Link",-1),kE=e("ol",null,[e("li",null,[s("Modificare il file "),e("em",null,"|cognome|_esercizio_html_02.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_03.html")]),e("li",null,"Trasformare almeno 5 parole in link a risorse esterne"),e("li",null,"Trasformare altre 5 parole in modo che siano visualizzate in verde, blue o rosso"),e("li",null,"Selezionare almeno 2 frasi particolarmente importanti e inserirle in un rettangolo con sfondo blue e testo di color bianco."),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_03.html")],-1),bE=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),yE={__name:"42",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[_E,vE,kE,bE]),_:1},16))}},wE=C(yE,[["__file","/@slidev/slides/42.md"]]),xE=e("h1",{class:"sezione"},"Web grafico con le Immagini",-1),TE={__name:"43",setup(t){const n={layout:"section"};return z(S),(a,o)=>(b(),L(Nt,j(q(n)),{default:w(()=>[xE]),_:1},16))}},$E=C(TE,[["__file","/@slidev/slides/43.md"]]),zE=e("h1",null,"Immagini",-1),ME=e("p",null,"Il Web diventa grafico",-1),LE=e("ul",null,[e("li",null,"La versione iniziale del WWW, prevedeva solo l’uso di informazioni testuali e non supportava l’uso di immagini all’interno delle pagine web."),e("li",null,"Con la nuova specifica HTML 2.0 del 1995, viene introdotto il nuovo tag <img> che permette di inserire immagini nelle pagine web.")],-1),IE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),s(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("url"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"alt"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("alternatetext"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),EE=e("p",null,"Normalmente si specificano anche gli attributi:",-1),SE=e("ul",null,[e("li",null,[e("strong",null,"width"),s(": specifica la larghezza dell’immaggine in pixel")]),e("li",null,[e("strong",null,"height"),s(": specifica l’altezza dell’immagine in pixel")])],-1),CE={__name:"44",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[zE,ME,LE,O(i,Y({},{ranges:[""]}),{default:w(()=>[IE]),_:1},16),s(" - **src**: attributo che specifica il percorso/link (relativo o assoluto) all'immagine - **alt**: in caso in cui l'immagine non possa essere visualizzata, specifica un testo alternativo "),EE,SE]),_:1},16)}}},AE=C(CE,[["__file","/@slidev/slides/44.md"]]),OE=e("h1",null,"Immagini",-1),PE=e("p",null,"Il Web diventa grafico",-1),HE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),s(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("250"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"alt"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("primo web server"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},"/>")])])])],-1),RE=e("img",{src:"https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg",width:"250",alt:"primo web server"},null,-1),FE={__name:"45",setup(t){const n={};return z(S),(a,o)=>{const i=re,l=va("center");return b(),L(W,j(q(n)),{default:w(()=>[OE,PE,O(i,Y({},{ranges:[""]}),{default:w(()=>[HE]),_:1},16),O(l,null,{default:w(()=>[RE]),_:1})]),_:1},16)}}},NE=C(FE,[["__file","/@slidev/slides/45.md"]]),qE=e("h1",null,"Immagini",-1),jE=e("p",null,"Il Web diventa grafico",-1),DE=e("ul",null,[e("li",null,"I tag HTML possono essere nidificati, cioè dichiarati uno dentro l’altro."),e("li",null,"Questa importante proprietà ci permette di creare un link grafico all’interno di una pagina web.")],-1),WE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),s(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("http://info.cern.ch/hypertext/WWW/TheProject.html"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"target"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("_blank"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),s(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("250"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"alt"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("primo web server"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("a")]),e("span",{class:"token punctuation"},">")])])])],-1),BE=e("a",{href:"http://info.cern.ch/hypertext/WWW/TheProject.html",target:"_blank"},[e("img",{src:"https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg",width:"200",alt:"primo web server"})],-1),VE={__name:"46",setup(t){const n={};return z(S),(a,o)=>{const i=re,l=va("center");return b(),L(W,j(q(n)),{default:w(()=>[qE,jE,DE,O(i,Y({},{ranges:[""]}),{default:w(()=>[WE]),_:1},16),O(l,null,{default:w(()=>[BE]),_:1})]),_:1},16)}}},UE=C(VE,[["__file","/@slidev/slides/46.md"]]),KE=e("h1",null,"Esercizio html_04",-1),GE=e("p",null,"Link",-1),QE=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_03.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_04.html")]),e("li",null,"Aggiungere almeno 1 immagine, relative al testo, come risorsa esterna (link assoluto)"),e("li",null,"Aggiungere almeno 1 immagine, relative al testo, come risorsa interna (link relativo)"),e("li",null,"Aggiungere almeno 1 immagine, relative al testo, che sia anche un link ad una pagina esterna"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_04.html")],-1),YE=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),ZE={__name:"47",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[KE,GE,QE,YE]),_:1},16))}},JE=C(ZE,[["__file","/@slidev/slides/47.md"]]),XE=e("h1",{class:"sezione"},"Formattazione del testo in HTML",-1),eS={__name:"48",setup(t){const n={layout:"section"};return z(S),(a,o)=>(b(),L(Nt,j(q(n)),{default:w(()=>[XE]),_:1},16))}},tS=C(eS,[["__file","/@slidev/slides/48.md"]]),nS=e("h1",null,"Formattazione del Testo",-1),aS=e("p",null,"Tag di formattazione",-1),sS=e("ul",null,[e("li",null,"HTML mette a disposizione 10 tag specifici per la definizione di testo con particolare significato."),e("li",null,"Questi tag definiscono la semantica e cioè il significato del testo che racchiudono."),e("li",null,"Il browser decide come visualizzare il testo racchiuso in questi tag")],-1),oS=e("br",null,null,-1),iS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s(": testo in grassetto senza significato aggiuntivo")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("strong")]),e("span",{class:"token punctuation"},">")]),s(": testo con molta importanza. Normalmente visualizzatto in grassetto")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("i")]),e("span",{class:"token punctuation"},">")]),s(": testo alternativo, un termine tecnico, una parola straniera. Normalmente visualizzato in italico")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("em")]),e("span",{class:"token punctuation"},">")]),s(": testo con particolare enfasi.Normalmente viene visualizzato in italico")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("mark")]),e("span",{class:"token punctuation"},">")]),s(": testo che deve essere evidenziato")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("small")]),e("span",{class:"token punctuation"},">")]),s(": testo con dimensioni minori e quindi con meno importanza")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("del")]),e("span",{class:"token punctuation"},">")]),s(": testo che è stato eliminato dal documento. Normalmente visualizzato con una linea sul testo")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ins")]),e("span",{class:"token punctuation"},">")]),s(": testo che è stato aggiunto al documento. Normalmente visualizzato come testo sottolineato")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sub")]),e("span",{class:"token punctuation"},">")]),s(": - definisce un testo come pedice")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sup")]),e("span",{class:"token punctuation"},">")]),s(": - definisce un testo come apice")])])],-1),lS={__name:"49",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[nS,aS,sS,oS,O(i,Y({},{ranges:[""]}),{default:w(()=>[iS]),_:1},16)]),_:1},16)}}},rS=C(lS,[["__file","/@slidev/slides/49.md"]]),cS=e("h1",null,"Formattazione del Testo",-1),uS=e("p",null,"Tag di formattazione",-1),pS=e("ul",null,[e("li",null,"bold")],-1),dS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("In un paragrafo spesso vogliamo poter evidenziare una parola in "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("grassetto"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s(".")])])],-1),mS=e("b",null,"grassetto",-1),fS=e("ul",null,[e("li",null,"strong")],-1),hS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Spesso è necessario definire una parola "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("strong")]),e("span",{class:"token punctuation"},">")]),s("molto importante"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("strong")]),e("span",{class:"token punctuation"},">")]),s(".")])])],-1),gS=e("strong",null,"molto importante",-1),_S=e("ul",null,[e("li",null,"italico")],-1),vS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Alcune volte è necessario definire un termine tecnico come "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("i")]),e("span",{class:"token punctuation"},">")]),s("Web Server"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("i")]),e("span",{class:"token punctuation"},">")])])])],-1),kS=e("i",null,"Web Server",-1),bS={__name:"50",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[cS,uS,pS,O(i,Y({},{ranges:[""]}),{default:w(()=>[dS]),_:1},16),s(" In un paragrafo spesso vogliamo poter evidenziare una parola in "),mS,s(". "),fS,O(i,Y({},{ranges:[""]}),{default:w(()=>[hS]),_:1},16),s(" Spesso è necessario definire una parola "),gS,s(". "),_S,O(i,Y({},{ranges:[""]}),{default:w(()=>[vS]),_:1},16),s(" Alcune volte è necessario definire un termine tecnico come "),kS]),_:1},16)}}},yS=C(bS,[["__file","/@slidev/slides/50.md"]]),wS=e("h1",null,"Formattazione del Testo",-1),xS=e("p",null,"Tag di formattazione",-1),TS=e("ul",null,[e("li",null,"enfasi")],-1),$S=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("In un testo ci sono specifiche parole a cui si vuole dare "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("em")]),e("span",{class:"token punctuation"},">")]),s("enfasi"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("em")]),e("span",{class:"token punctuation"},">")]),s(".")])])],-1),zS=e("em",null,"enfasi",-1),MS=e("ul",null,[e("li",null,"mark")],-1),LS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Un altro modo per "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("mark")]),e("span",{class:"token punctuation"},">")]),s("evidenziare"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("mark")]),e("span",{class:"token punctuation"},">")]),s(" una o più parole è usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("mark"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")])])])],-1),IS=e("mark",null,"evidenziare",-1),ES=e("b",null,"mark",-1),SS=e("ul",null,[e("li",null,"small")],-1),CS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Al contrario quando un testo "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("small")]),e("span",{class:"token punctuation"},">")]),s("è di poca importanza"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("small")]),e("span",{class:"token punctuation"},">")]),s(" si può usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("small"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")])])])],-1),AS=e("small",null,"è di poca importanza",-1),OS=e("b",null,"small",-1),PS={__name:"51",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[wS,xS,TS,O(i,Y({},{ranges:[""]}),{default:w(()=>[$S]),_:1},16),s(" In un testo ci sono specifiche parole a cui si vuole dare "),zS,s(". "),MS,O(i,Y({},{ranges:[""]}),{default:w(()=>[LS]),_:1},16),s(" Un altro modo per "),IS,s(" una o più parole è usare il tag "),ES,SS,O(i,Y({},{ranges:[""]}),{default:w(()=>[CS]),_:1},16),s(" Al contrario quando un testo "),AS,s(" si può usare il tag "),OS]),_:1},16)}}},HS=C(PS,[["__file","/@slidev/slides/51.md"]]),RS=e("h1",null,"Formattazione del Testo",-1),FS=e("p",null,"Tag di formattazione",-1),NS=e("ul",null,[e("li",null,"del e ins")],-1),qS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Il mio cibo preferito è il "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("del")]),e("span",{class:"token punctuation"},">")]),s("pollo"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("del")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ins")]),e("span",{class:"token punctuation"},">")]),s("tacchino"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("ins")]),e("span",{class:"token punctuation"},">")]),s(".")])])],-1),jS=e("del",null,"pollo",-1),DS=e("ins",null,"tacchino",-1),WS=e("ul",null,[e("li",null,"sub e sup")],-1),BS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Il logaritmo in base 2 di 8 è 3: log"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sub")]),e("span",{class:"token punctuation"},">")]),s("2"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("sub")]),e("span",{class:"token punctuation"},">")]),s(" 8 = 3")]),s(`
`),e("span",{class:"line"},[s("In modo analogo 2 elevato alla 3 fa 8: 2"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sup")]),e("span",{class:"token punctuation"},">")]),s("3"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("sup")]),e("span",{class:"token punctuation"},">")]),s(" = 8")]),s(`
`),e("span",{class:"line"},[s("In generale gli "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sup")]),e("span",{class:"token punctuation"},">")]),s("apici"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("sup")]),e("span",{class:"token punctuation"},">")]),s(" si ottengono son il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("sup"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[s("mentre i "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sub")]),e("span",{class:"token punctuation"},">")]),s("pedici"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("sub")]),e("span",{class:"token punctuation"},">")]),s(" con il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("sub"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")])])])],-1),VS=e("sub",null,"2",-1),US=e("p",null,[s("In modo analogo 2 elevato alla 3 fa 8: 2"),e("sup",null,"3"),s(" = 8")],-1),KS=e("p",null,[s("In generale gli "),e("sup",null,"apici"),s(" si ottengono son il tag "),e("b",null,"sup"),s(" mentre i "),e("sub",null,"pedici"),s(" con il tag "),e("b",null,"sub")],-1),GS={__name:"52",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[RS,FS,NS,O(i,Y({},{ranges:[""]}),{default:w(()=>[qS]),_:1},16),s(" Il mio cibo preferito è il "),jS,s(),DS,s(". "),WS,O(i,Y({},{ranges:[""]}),{default:w(()=>[BS]),_:1},16),s(" Il logaritmo in base 2 di 8 è 3: log"),VS,s(" 8 = 3 "),US,KS]),_:1},16)}}},QS=C(GS,[["__file","/@slidev/slides/52.md"]]),YS=e("h1",null,"Esercizio html_05",-1),ZS=e("p",null,"Link",-1),JS=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_04.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_05.html")]),e("li",null,"evidenziare 5 parole in bold"),e("li",null,"marcare 5 parole particolarmente importanti"),e("li",null,"evidenziare 5 parole alternative o termini tecnici"),e("li",null,"dare enfasi a 5 parole"),e("li",null,"evidenziare (mark) 5 parole significative"),e("li",null,"rendere più piccole 5 parole poco significative"),e("li",null,"marcare 5 parole come eliminate dal testo"),e("li",null,"marcare 5 parole come inserite nel testo"),e("li",null,"dove possibile marcare almeno 1 parola come apice ed 1 come pedice"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_05.html")],-1),XS=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),e3={__name:"53",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[YS,ZS,JS,XS]),_:1},16))}},t3=C(e3,[["__file","/@slidev/slides/53.md"]]),n3=e("h1",null,"Formattazione del Testo",-1),a3=e("p",null,"Tag per Quotazioni e Citazioni",-1),s3=e("ul",null,[e("li",null,"HTML mette a disposizione 4 tag specifici per la definizione di testo che rappresenta una citazione o una quote."),e("li",null,"Questi tag definiscono la semantica e cioè il significato del testo che racchiudono."),e("li",null,"Il browser decide come visualizzare il testo racchiuso in questi tag")],-1),o3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("blockquote")]),e("span",{class:"token punctuation"},">")]),s(": definisce una porzione di testo come una citazione esterna")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("q")]),e("span",{class:"token punctuation"},">")]),s(": definisce una breve citazione")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("abbr")]),e("span",{class:"token punctuation"},">")]),s(": definisce un'abbreviazione o un acronimo")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("cite")]),e("span",{class:"token punctuation"},">")]),s(": citazione ad un lavoro altrui (libro, sito web, ...)")])])],-1),i3={__name:"54",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[n3,a3,s3,O(i,Y({},{ranges:[""]}),{default:w(()=>[o3]),_:1},16)]),_:1},16)}}},l3=C(i3,[["__file","/@slidev/slides/54.md"]]),r3=e("h1",null,"Formattazione del Testo",-1),c3=e("p",null,"Tag per Quotazioni e Citazioni",-1),u3=e("ul",null,[e("li",null,"blockquote")],-1),p3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},'Alle volte in un testo si vuole "quotare" un altro autore.'),s(`
`),e("span",{class:"line"},"Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale."),s(`
`),e("span",{class:"line"},[s("Quindi con il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("blockquote"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s(" si può definire una quotazione")]),s(`
`),e("span",{class:"line"},"indicando la sorgente dell'informazione"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("blockquote")]),s(),e("span",{class:"token attr-name"},"cite"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://it.wikipedia.org/wiki/Giovanni_Bosco"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"  La sottrazione di benevolenza è un castigo che eccita l'emulazione"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("blockquote")]),e("span",{class:"token punctuation"},">")])])])],-1),d3=e("b",null,"blockquote",-1),m3=e("blockquote",{cite:"https://it.wikipedia.org/wiki/Giovanni_Bosco"}," La sottrazione di benevolenza è un castigo che eccita l'emulazione ",-1),f3=e("ul",null,[e("li",null,"Come si può notare la citazione è indentata. Il link alla citazione non ha un effetto visivo ma può essere utile al motore di ricerca o altri tool.")],-1),h3={__name:"55",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[r3,c3,u3,O(i,Y({},{ranges:[""]}),{default:w(()=>[p3]),_:1},16),s(` Alle volte in un testo si vuole "quotare" un altro autore. Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale. Quindi con il tag `),d3,s(" si può definire una quotazione indicando la sorgente dell'informazione "),m3,f3]),_:1},16)}}},g3=C(h3,[["__file","/@slidev/slides/55.md"]]),_3=e("h1",null,"Formattazione del Testo",-1),v3=e("p",null,"Tag per Quotazioni e Citazioni",-1),k3=e("ul",null,[e("li",null,"quotazione")],-1),b3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Quando in un testo vogliamo fare una "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("q")]),e("span",{class:"token punctuation"},">")]),s("breve citazione"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("q")]),e("span",{class:"token punctuation"},">")]),s(", basta inserire il testo nel tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("q"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")])])])],-1),y3=e("q",null,"breve citazione",-1),w3=e("b",null,"q",-1),x3=e("ul",null,[e("li",null,"abbreviazione")],-1),T3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("abbr")]),s(),e("span",{class:"token attr-name"},"title"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Gnu is Not Unix"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("GNU"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("abbr")]),e("span",{class:"token punctuation"},">")]),s("di GNU/Linux sembra una  parola ma in realtà è un acronimo.")])])],-1),$3=e("abbr",{title:"Gnu is Not Unix"},"GNU",-1),z3=e("ul",null,[e("li",null,"citazione lavoro altrui")],-1),M3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Un alternativa per una citazione è usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("cite"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s(". ")]),s(`
`),e("span",{class:"line"},[s("In una disicussione accesa Linus disse: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("cite")]),e("span",{class:"token punctuation"},">")]),s('"Parlare è facile. Mostrami il codice".'),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("cite")]),e("span",{class:"token punctuation"},">")])])])],-1),L3=e("b",null,"cite",-1),I3=e("cite",null,'"Parlare è facile. Mostrami il codice".',-1),E3={__name:"56",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[_3,v3,k3,O(i,Y({},{ranges:[""]}),{default:w(()=>[b3]),_:1},16),s(" Quando in un testo vogliamo fare una "),y3,s(", basta inserire il testo nel tag "),w3,x3,O(i,Y({},{ranges:[""]}),{default:w(()=>[T3]),_:1},16),$3,s(" di GNU/Linux sembra una parola ma in realtà è un acronimo. "),z3,O(i,Y({},{ranges:[""]}),{default:w(()=>[M3]),_:1},16),s(" Un alternativa per una citazione è usare il tag "),L3,s(". In una disicussione accesa Linus disse: "),I3]),_:1},16)}}},S3=C(E3,[["__file","/@slidev/slides/56.md"]]),C3=e("h1",null,"Esercizio html_06",-1),A3=e("p",null,"Link",-1),O3=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_05.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_06.html")]),e("li",null,"creare una citazione per un blocco di testo"),e("li",null,"marcare 3 frasi o parole come brevi citazioni"),e("li",null,"marcare almeno 3 abbreviazioni"),e("li",null,"marcare 1 citazione (cite) di qualche altro autore"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_06.html")],-1),P3=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),H3={__name:"57",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[C3,A3,O3,P3]),_:1},16))}},R3=C(H3,[["__file","/@slidev/slides/57.md"]]),F3=e("h1",null,"Formattazione del Testo",-1),N3=e("p",null,"Tag addizionali",-1),q3=e("ul",null,[e("li",null,"Ci sono altri tag che formattano il testo ma che non hanno una semantica particolare.")],-1),j3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("u")]),e("span",{class:"token punctuation"},">")]),s(": definisce un testo sottolineato")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("s")]),e("span",{class:"token punctuation"},">")]),s(": definisce una testo sbarrato")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("code")]),e("span",{class:"token punctuation"},">")]),s(": definisce un blocco di testo come codice sorgente")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("pre")]),e("span",{class:"token punctuation"},">")]),s(": marca una porzione di testo come pre formattato")])])],-1),D3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Se si vuole "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("u")]),e("span",{class:"token punctuation"},">")]),s("sottolineare"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("u")]),e("span",{class:"token punctuation"},">")]),s(" una parola basta usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("u")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("u")]),e("span",{class:"token punctuation"},">")])])])],-1),W3=e("u",null,"sottolineare",-1),B3=e("ul",null,[e("li",null,"sbarrato")],-1),V3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Se si vuole "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("s")]),e("span",{class:"token punctuation"},">")]),s("sbarrare"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("s")]),e("span",{class:"token punctuation"},">")]),s(" una parola basta usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("s")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("s")]),e("span",{class:"token punctuation"},">")])])])],-1),U3=e("s",null,"sbarrare",-1),K3={__name:"58",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[F3,N3,q3,O(i,Y({},{ranges:[""]}),{default:w(()=>[j3]),_:1},16),s(" - sottolineato "),O(i,Y({},{ranges:[""]}),{default:w(()=>[D3]),_:1},16),s(" Se si vuole "),W3,s(" una parola basta usare il tag <u> "),B3,O(i,Y({},{ranges:[""]}),{default:w(()=>[V3]),_:1},16),s(" Se si vuole "),U3,s(" una parola basta usare il tag <s> ")]),_:1},16)}}},G3=C(K3,[["__file","/@slidev/slides/58.md"]]),Q3=e("h1",null,"Formattazione del Testo",-1),Y3=e("p",null,"Tag addizionali",-1),Z3=e("ul",null,[e("li",null,"codice sorgente")],-1),J3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Spesso negli articoli informatici vengono riportati comandi o porzioni di codice."),s(`
`),e("span",{class:"line"},[s("Per farlo in modo corretto usa il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("code"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s("."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("Per installare vscode in Linux usa il comando: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("code")]),e("span",{class:"token punctuation"},">")]),s("apt install vscode"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("code")]),e("span",{class:"token punctuation"},">")])])])],-1),X3=e("b",null,"code",-1),eC=e("br",null,null,-1),tC=e("p",null,[s("Per installare vscode in Linux usa il comando: "),e("code",null,"apt install vscode")],-1),nC={__name:"59",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[Q3,Y3,Z3,O(i,Y({},{ranges:[""]}),{default:w(()=>[J3]),_:1},16),s(" Spesso negli articoli informatici vengono riportati comandi o porzioni di codice. Per farlo in modo corretto usa il tag "),X3,s("."),eC,tC]),_:1},16)}}},aC=C(nC,[["__file","/@slidev/slides/59.md"]]),sC=e("h1",null,"Formattazione del Testo",-1),oC=e("p",null,"Tag addizionali",-1),iC=e("ul",null,[e("li",null,"pre formattato")],-1),lC=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Negli articoli può essere necessario riportare una porzione di testo con una formattazione specifica."),s(`
`),e("span",{class:"line"},[s("Per evitare che il browser foramtti il testo in modo autonomo usa il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("pre"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s(". "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("pre")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"    Questo testo       viene visualizzato esatta "),s(`
`),e("span",{class:"line"},"    mente come fornito dallo sviluppatore.    "),s(`
`),e("span",{class:"line"},"    Venogno rispettrati    gli spazi e i ritorni "),s(`
`),e("span",{class:"line"},"    a "),s(`
`),e("span",{class:"line"},"    capo."),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("pre")]),e("span",{class:"token punctuation"},">")])])])],-1),rC=e("br",null,null,-1),cC=e("pre",null,`    Questo testo       viene visualizzato esatta 
    mente come fornito dallo sviluppatore.    
    Venogno rispettrati    gli spazi e i ritorni 
    a 
    capo.
`,-1),uC={__name:"60",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[sC,oC,iC,O(i,Y({},{ranges:[""]}),{default:w(()=>[lC]),_:1},16),rC,cC]),_:1},16)}}},pC=C(uC,[["__file","/@slidev/slides/60.md"]]),dC=e("h1",null,"Esercizio html_07",-1),mC=e("p",null,"Link",-1),fC=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_06.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_07.html")]),e("li",null,"marcare 5 parole come sottolineate"),e("li",null,"marcare 5 parole come sbarrate"),e("li",null,"aggiungere una porzione di codice sorgente o comando linux"),e("li",null,"aggiungere una sezione di testo pre formattata"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_07.html")],-1),hC=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),gC={__name:"61",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[dC,mC,fC,hC]),_:1},16))}},_C=C(gC,[["__file","/@slidev/slides/61.md"]]),vC=e("h1",null,"Formattazione del Testo",-1),kC=e("p",null,"Tag addizionali",-1),bC=e("ul",null,[e("li",null,[e("p",null,"Durante la realizzazione di una pagina web ci possono essere delle esigenze particolari di formattazione.")]),e("li",null,[e("p",null,"HTML fornisce altri tag aggiuntivi utili per forzare un ritorno a capo e per visualizzare una linea di suddivisione orizzontale")]),e("li",null,[e("p",null,"ritorno a capo")])],-1),yC=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("In alcuni casi è necessario forzare un ritorno a capo. "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Per fare ciò basta usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},"/>")])])])],-1),wC=e("br",null,null,-1),xC=e("ul",null,[e("li",null,"linea orizzontale")],-1),TC=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Per inserire una linea orizzontale di separazione usa "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("hr")]),s(),e("span",{class:"token punctuation"},"/>")])])])],-1),$C=e("hr",{style:{height:"5px","background-color":"grey"}},null,-1),zC={__name:"62",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[vC,kC,bC,O(i,Y({},{ranges:[""]}),{default:w(()=>[yC]),_:1},16),s(" In alcuni casi è necessario forzare un ritorno a capo. "),wC,s(" Per fare ciò basta usare il tag <br/> "),xC,O(i,Y({},{ranges:[""]}),{default:w(()=>[TC]),_:1},16),$C]),_:1},16)}}},MC=C(zC,[["__file","/@slidev/slides/62.md"]]),LC=e("h1",null,"Formattazione del Testo",-1),IC=e("p",null,"Tag addizionali",-1),EC=e("ul",null,[e("li",null,"barra per metrica")],-1),SC=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("Andamento dei voti:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("Studente 1 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("8.0"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("8 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 2 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("6.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("6.5 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 3 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("9.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("9.5 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 4 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("4.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("4.5 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])])])],-1),CC=e("p",null,[s("Andamento dei voti:"),e("br")],-1),AC=e("p",null,[s("Studente 1 "),e("meter",{min:"0",max:"10",value:"8.0"},"8 su 10"),e("br"),s(" Studente 2 "),e("meter",{min:"0",max:"10",value:"6.5"},"6.5 su 10"),e("br"),s(" Studente 3 "),e("meter",{min:"0",max:"10",value:"9.5"},"9.5 su 10"),e("br"),s(" Studente 4 "),e("meter",{min:"0",max:"10",value:"4.5"},"4.5 su 10"),e("br")],-1),OC={__name:"63",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[LC,IC,EC,O(i,Y({},{ranges:[""]}),{default:w(()=>[SC]),_:1},16),s(" Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag <meter> "),CC,AC]),_:1},16)}}},PC=C(OC,[["__file","/@slidev/slides/63.md"]]),HC=e("h1",null,"Formattazione del Testo",-1),RC=e("p",null,"Tag addizionali",-1),FC=e("ul",null,[e("li",null,"barra di progresso")],-1),NC=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("In alternativa si può visualizzare un progress bar tramite l'uso del tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("Andamento dei voti:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("Studente 1 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("8"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("8 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 2 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("6.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("6.5 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 3 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("9.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("9.5 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 4 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("4.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("4.5 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])])])],-1),qC=e("p",null,[s("Andamento dei voti:"),e("br")],-1),jC=e("p",null,[s("Studente 1 "),e("progress",{min:"0",max:"10",value:"8"},"8 di 10"),e("br"),s(" Studente 2 "),e("progress",{min:"0",max:"10",value:"6.5"},"6.5 di 10"),e("br"),s(" Studente 3 "),e("progress",{min:"0",max:"10",value:"9.5"},"9.5 di 10"),e("br"),s(" Studente 4 "),e("progress",{min:"0",max:"10",value:"4.5"},"4.5 di 10"),e("br")],-1),DC={__name:"64",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[HC,RC,FC,O(i,Y({},{ranges:[""]}),{default:w(()=>[NC]),_:1},16),s(" In alternativa si può visualizzare un progress bar tramite l'uso del tag <progress> "),qC,jC]),_:1},16)}}},WC=C(DC,[["__file","/@slidev/slides/64.md"]]),BC=e("h1",null,"Esercizio html_08",-1),VC=e("p",null,"Link",-1),UC=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_07.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_08.html")]),e("li",null,"Inserire 5 ritorni a capo forzati"),e("li",null,"Inserire 3 linee orizzontali di separazione"),e("li",null,"Inserire 5 meter bar"),e("li",null,"Inserire 5 progress bar"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_08.html")],-1),KC=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),GC={__name:"65",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[BC,VC,UC,KC]),_:1},16))}},QC=C(GC,[["__file","/@slidev/slides/65.md"]]),YC=e("h1",{class:"sezione"},"Caratteri speciali in HTML",-1),ZC={__name:"66",setup(t){const n={layout:"section"};return z(S),(a,o)=>(b(),L(Nt,j(q(n)),{default:w(()=>[YC]),_:1},16))}},JC=C(ZC,[["__file","/@slidev/slides/66.md"]]),XC=e("h1",null,"HTML Entities",-1),eA=e("p",null,"Uso di caratteri riservati",-1),tA=e("ul",null,[e("li",null,"Nella realizzazione di una pagina web, non è possibile usare tutti i caratteri disponibili."),e("li",null,"Alcuni caratteri sono riservati dallo standard HTML per usi specifici."),e("li",null,"Per esempio i caratteri < e > sono riservati in quanto servono per delimitare un tag HTML."),e("li",null,[s("Per inserire i caratteri riservati come parte del contenuto di una pagina HTML, si devono sostituire con "),e("em",null,[e("strong",null,"HTML entities")])])],-1),nA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"&entity_name;"),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},"oppure "),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},"&#entity_number;")])],-1),aA=e("ul",null,[e("li",null,"Pertanto il carattere < e > sono rappresentati in questo modo")],-1),sA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("< --> "),e("span",{class:"token entity named-entity",title:"<"},"&lt;"),s(" o "),e("span",{class:"token entity",title:"<"},"&#60;")]),s(`
`),e("span",{class:"line"},[s("> --> "),e("span",{class:"token entity named-entity",title:">"},"&gt;"),s(" o "),e("span",{class:"token entity",title:">"},"&#62;")])])],-1),oA={__name:"67",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[XC,eA,tA,O(i,Y({},{ranges:[""]}),{default:w(()=>[nA]),_:1},16),aA,O(i,Y({},{ranges:[""]}),{default:w(()=>[sA]),_:1},16),s(" [Qui si può consultare la lista completa di entities HTML.](https://www.freeformatter.com/html-entities.html) ")]),_:1},16)}}},iA=C(oA,[["__file","/@slidev/slides/67.md"]]),lA=e("h1",null,"HTML Entities",-1),rA=e("p",null,"Uso di caratteri riservati",-1),cA=e("ul",null,[e("li",null,"In alcune occasioni è necessario indicare al browser di non andare a capo."),e("li",null,[s("Per fare ciò si usa il carattere "),e("em",null,"non breaking space")]),e("li",null,"In altre parole inserendo questo carattere, si inserisce uno spazio che non può mandare la linea a capo")],-1),uA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"non breaking space"),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{class:"token entity named-entity",title:" "},"&nbsp;")])])],-1),pA=e("ul",null,[e("li",null,"In modo analogo, ricordiamoci che se inserisco 10 spazi, il browser ne rimuove 9"),e("li",null,[s("Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte "),e("code",null,"&nbsp;")])],-1),dA={__name:"68",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[lA,rA,cA,O(i,Y({},{ranges:[""]}),{default:w(()=>[uA]),_:1},16),pA]),_:1},16)}}},mA=C(dA,[["__file","/@slidev/slides/68.md"]]),fA=e("h1",null,"HTML Entities",-1),hA=e("p",null,"Uso di caratteri riservati",-1),gA=e("ul",null,[e("li",null,"Qui una lista di HTML entities comuemente usate")],-1),_A=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Carattere"),e("th",null,"Descizione"),e("th",null,"Nome Entità"),e("th",null,"Numero Entità")])]),e("tbody",null,[e("tr",null,[e("td"),e("td",null,"non-breaking space"),e("td",null,[e("code",null,"&nbsp;")]),e("td",null,[e("code",null,"&#160;")])]),e("tr",null,[e("td",null,"<"),e("td",null,"less than"),e("td",null,[e("code",null,"&lt;")]),e("td",null,[e("code",null,"&#60;")])]),e("tr",null,[e("td",null,">"),e("td",null,"greater than"),e("td",null,[e("code",null,"&gt;")]),e("td",null,[e("code",null,"&#62;")])]),e("tr",null,[e("td",null,[e("code",null,"&")]),e("td",null,"ampersand"),e("td",null,[e("code",null,"&amp;")]),e("td",null,[e("code",null,"&#38;")])]),e("tr",null,[e("td",null,'"'),e("td",null,"double quotation mark"),e("td",null,[e("code",null,"&quot;")]),e("td",null,[e("code",null,"&#34;")])]),e("tr",null,[e("td",null,"’"),e("td",null,"single quotation mark (apostrophe)"),e("td",null,[e("code",null,"&apos;")]),e("td",null,[e("code",null,"&#39;")])]),e("tr",null,[e("td",null,"€"),e("td",null,"euro"),e("td",null,[e("code",null,"&euro;")]),e("td",null,[e("code",null,"&#8364;")])]),e("tr",null,[e("td",null,"©"),e("td",null,"copyright"),e("td",null,[e("code",null,"&copy;")]),e("td",null,[e("code",null,"&#169;")])])])],-1),vA={__name:"69",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[fA,hA,gA,_A]),_:1},16))}},kA=C(vA,[["__file","/@slidev/slides/69.md"]]),bA=e("h1",{class:"sezione"},"Liste (non)ordinate",-1),yA={__name:"70",setup(t){const n={layout:"section"};return z(S),(a,o)=>(b(),L(Nt,j(q(n)),{default:w(()=>[bA]),_:1},16))}},wA=C(yA,[["__file","/@slidev/slides/70.md"]]),xA=e("h1",null,"Liste",-1),TA=e("p",null,"Lista di elementi correlati",-1),$A=e("ul",null,[e("li",null,"In un testo o un articolo, risulta particolarmente utile organizzare il contenuto in modo schematico e rappresentare le informazioni tramite una lista."),e("li",null,"HTML mette a disposizione specifici tag per la generazione di liste di elementi")],-1),zA=e("p",null,"Ci sono 2 tipi principali di liste:",-1),MA=e("ol",null,[e("li",null,[e("strong",null,"Unordered List"),s(" (Liste non ordinate)")]),e("li",null,[e("strong",null,"Ordered List"),s(" (Liste ordinate)")])],-1),LA=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("h3",null,"Lista non ordinata"),e("ul",null,[e("li",null,"Pere"),e("li",null,"Patate"),e("li",null,"Mele"),e("li",null,"Carote")])]),e("div",null,[e("h3",null,"Lista ordinata"),e("ol",null,[e("li",null,"CPU: Central Processing Unit"),e("li",null,"RAM: Random Access Memeory"),e("li",null,"HDD: Hard Disk Drive"),e("li",null,"SSD: Solid State Disk")])])],-1),IA={__name:"71",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[xA,TA,$A,zA,MA,LA]),_:1},16))}},EA=C(IA,[["__file","/@slidev/slides/71.md"]]),SA=e("h1",null,"Liste",-1),CA=e("p",null,"Lista di elementi correlati",-1),AA=e("h3",null,"Lista non ordinata",-1),OA=e("p",null,"Le liste di tipo non ordinato che si creano con 2 tag:",-1),PA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ul")]),e("span",{class:"token punctuation"},">")]),s(": Unordered List - tag che definisce la lista non ordinata ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s(": List Item - tag che definisce l'elemento/item della lista")])])],-1),HA=e("br",null,null,-1),RA={grid:"~ cols-2 gap-4"},FA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Esempio: Vegetali"),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ul")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("Pere"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("Patate"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("Mele"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("Carote"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("ul")]),e("span",{class:"token punctuation"},">")])])])],-1),NA=e("div",null,[e("p",null,"Esempio: Vegetali"),e("ul",null,[e("li",null,"Pere"),e("li",null,"Patate"),e("li",null,"Mele"),e("li",null,"Carote")])],-1),qA={__name:"72",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[SA,CA,AA,OA,O(i,Y({},{ranges:[""]}),{default:w(()=>[PA]),_:1},16),HA,e("div",RA,[e("div",null,[O(i,Y({},{ranges:[""]}),{default:w(()=>[FA]),_:1},16)]),NA])]),_:1},16)}}},jA=C(qA,[["__file","/@slidev/slides/72.md"]]),DA=e("h1",null,"Liste",-1),WA=e("p",null,"Lista di elementi correlati",-1),BA=e("h3",null,"Lista ordinata",-1),VA=e("p",null,"Le liste di tipo ordinato che si creano con 2 tag:",-1),UA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ol")]),e("span",{class:"token punctuation"},">")]),s(": Ordered List - tag che definisce la lista ordinata ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s(": List Item - tag che definisce l'elemento/item della lista")])])],-1),KA=e("br",null,null,-1),GA={grid:"~ cols-2 gap-4"},QA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Esempio: I componenti di un computer"),s(`
`),e("span",{class:"line"},"       "),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ol")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("CPU: Central Processing Unit"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("RAM: Random Access Memeory"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("HDD: Hard Disk Drive"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("SSD: Solid State Disk"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("ol")]),e("span",{class:"token punctuation"},">")])])])],-1),YA=e("div",null,[e("p",null,"Esempio: I componenti di un computer"),e("ol",null,[e("li",null,"CPU: Central Processing Unit"),e("li",null,"RAM: Random Access Memeory"),e("li",null,"HDD: Hard Disk Drive"),e("li",null,"SSD: Solid State Disk")])],-1),ZA={__name:"73",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[DA,WA,BA,VA,O(i,Y({},{ranges:[""]}),{default:w(()=>[UA]),_:1},16),KA,e("div",GA,[e("div",null,[O(i,Y({},{ranges:[""]}),{default:w(()=>[QA]),_:1},16)]),YA])]),_:1},16)}}},JA=C(ZA,[["__file","/@slidev/slides/73.md"]]),XA=e("h1",null,"Esercizio html_09",-1),eO=e("p",null,"Link",-1),tO=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_08.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_09.html")]),e("li",null,"Inserire 5 caratteri speciali in modo congruo con il testo"),e("li",null,"Creare 1 lista ordinata in modo congruo con il testo"),e("li",null,"Creare 1 lista non ordinata in modo congruo con il testo"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_09.html")],-1),nO=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),aO={__name:"74",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[XA,eO,tO,nO]),_:1},16))}},sO=C(aO,[["__file","/@slidev/slides/74.md"]]),oO=e("h1",{class:"sezione"},"Rappresentazioni tabulari con le Tabelle",-1),iO={__name:"75",setup(t){const n={layout:"section"};return z(S),(a,o)=>(b(),L(Nt,j(q(n)),{default:w(()=>[oO]),_:1},16))}},lO=C(iO,[["__file","/@slidev/slides/75.md"]]),rO=e("h1",null,"Tabelle",-1),cO=e("p",null,"Organizzazione tabulare dei contenuti",-1),uO=e("ul",null,[e("li",null,"In passato lo sviluppo web era ampiamente basato sull’uso di tabelle"),e("li",null,"Principalmente le tabelle venivano usato per creare il layout della pagina Web"),e("li",null,"Tuttavia questo metodo era laborioso e poco funzionale in quanto il supporto delle tabelle dai vari browser non era omogeneo."),e("li",null,"Oggi il layout di una pagine, NON si realizza più con le tabelle ma con il blocco DIV."),e("li",null,"Tuttavia lo scopo originario delle tabelle, cioè visualizzare contenuti in formato tabellare rimane valido.")],-1),pO=e("p",null,"I principlai tag per la definizione di una tabella sono:",-1),dO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),e("span",{class:"token punctuation"},">")]),s(": definisce un contenitore per dati organizzati in formato tabellare")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("caption")]),e("span",{class:"token punctuation"},">")]),s(": definisce il titolo di una tabella")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("thead")]),e("span",{class:"token punctuation"},">")]),s(": definisce l'header della tabella")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")]),s(": definisce una riga della tabella")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s(": definisce una cella della tabella.")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tbody")]),e("span",{class:"token punctuation"},">")]),s(": definisce il corpo principale della tabella")])])],-1),mO={__name:"76",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[rO,cO,uO,pO,O(i,Y({},{ranges:[""]}),{default:w(()=>[dO]),_:1},16)]),_:1},16)}}},fO=C(mO,[["__file","/@slidev/slides/76.md"]]),hO=e("h1",null,"Tabelle",-1),gO=e("p",null,"Organizzazione tabulare dei contenuti",-1),_O={grid:"~ cols-2 gap-4"},vO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),s(),e("span",{class:"token attr-name"},"border"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("1"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("caption")]),e("span",{class:"token punctuation"},">")]),s("A AND B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("caption")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("thead")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("A"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("A & B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("thead")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tbody")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tbody")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("table")]),e("span",{class:"token punctuation"},">")])])])],-1),kO=e("div",null,[e("table",{border:"1"},[e("caption",null,"A AND B"),e("thead",null,[e("tr",null,[e("td",null,"A"),s(),e("td",null,"B"),s(),e("td",null,"A & B")])]),e("tbody",null,[e("tr",null,[e("td",null,"0"),s(),e("td",null,"0"),s(),e("td",null,"0")]),e("tr",null,[e("td",null,"0"),s(),e("td",null,"1"),s(),e("td",null,"0")]),e("tr",null,[e("td",null,"1"),s(),e("td",null,"0"),s(),e("td",null,"0")]),e("tr",null,[e("td",null,"1"),s(),e("td",null,"1"),s(),e("td",null,"1")])])])],-1),bO={__name:"77",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[hO,gO,e("div",_O,[e("div",null,[O(i,Y({},{ranges:[""]}),{default:w(()=>[vO]),_:1},16)]),kO])]),_:1},16)}}},yO=C(bO,[["__file","/@slidev/slides/77.md"]]),wO=e("h1",null,"Tabelle",-1),xO=e("p",null,"Organizzazione tabulare dei contenuti",-1),TO={grid:"~ cols-2 gap-4"},$O=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),s(),e("span",{class:"token attr-name"},"border"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("1"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("caption")]),e("span",{class:"token punctuation"},">")]),s("A AND B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("caption")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("thead")]),s(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"background"),e("span",{class:"token punctuation"},":"),s("gray"),e("span",{class:"token punctuation"},";"),e("span",{class:"token property"},"text-align"),e("span",{class:"token punctuation"},":"),s(" center"),e("span",{class:"token punctuation"},";")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("A"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("A | B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("thead")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tbody")]),s(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"color"),e("span",{class:"token punctuation"},":"),s("blue"),e("span",{class:"token punctuation"},";"),e("span",{class:"token property"},"text-align"),e("span",{class:"token punctuation"},":"),s(" center"),e("span",{class:"token punctuation"},";")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),s(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"background"),e("span",{class:"token punctuation"},":"),s("Gainsboro"),e("span",{class:"token punctuation"},";")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),s(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"background"),e("span",{class:"token punctuation"},":"),s("Gainsboro"),e("span",{class:"token punctuation"},";")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tbody")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("table")]),e("span",{class:"token punctuation"},">")])])])],-1),zO=e("div",null,[e("table",{border:"1"},[e("caption",null,"A OR B"),e("thead",{style:{background:"gray","text-align":"center"}},[e("tr",null,[e("td",null,"A"),s(),e("td",null,"B"),s(),e("td",null,"A | B")])]),e("tbody",{style:{color:"blue","text-align":"center"}},[e("tr",null,[e("td",null,"0"),s(),e("td",null,"0"),s(),e("td",null,"0")]),e("tr",{style:{background:"Gainsboro"}},[e("td",null,"0"),s(),e("td",null,"1"),s(),e("td",null,"1")]),e("tr",null,[e("td",null,"1"),s(),e("td",null,"0"),s(),e("td",null,"1")]),e("tr",{style:{background:"Gainsboro"}},[e("td",null,"1"),s(),e("td",null,"1"),s(),e("td",null,"1")])])])],-1),MO={__name:"78",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[wO,xO,e("div",TO,[e("div",null,[O(i,Y({},{ranges:[""]}),{default:w(()=>[$O]),_:1},16)]),zO])]),_:1},16)}}},LO=C(MO,[["__file","/@slidev/slides/78.md"]]),IO=e("h1",null,"Esercizio html_10",-1),EO=e("p",null,"Link",-1),SO=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_09.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_10.html")]),e("li",null,"Creare 1 tabella modo congruo con il testo"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_10.html")],-1),CO=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),AO={__name:"79",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[IO,EO,SO,CO]),_:1},16))}},OO=C(AO,[["__file","/@slidev/slides/79.md"]]),PO=e("h1",{class:"sezione"},"Interagiamo con l'utente attraverso i Form",-1),HO={__name:"80",setup(t){const n={layout:"section"};return z(S),(a,o)=>(b(),L(Nt,j(q(n)),{default:w(()=>[PO]),_:1},16))}},RO=C(HO,[["__file","/@slidev/slides/80.md"]]),FO=e("h1",null,"Form",-1),NO=e("p",null,"Input dall’utente",-1),qO=e("ul",null,[e("li",null,"Il form (letteralmente modulo) indica la parte di interfaccia utente di un’applicazione web che consente all’utente di inserire e inviare al web server/application server uno o più dati."),e("li",null,[s("Il form è composto da un contenitore e da componenti grafici detti "),e("strong",null,"widget"),s(" che compongono il form stesso.")]),e("li",null,"I widget comunemente presenti nelle pagine web sono: le caselle di testo, i menu a tendina, i date-picker, …")],-1),jO=e("p",null,"Il form si crea usando il tag:",-1),DO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"..."),s(`
`),e("span",{class:"line"},"...widget del form"),s(`
`),e("span",{class:"line"},"...."),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),WO=e("p",null,"I principali widget sono:",-1),BO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("select")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("textarea")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("button")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("fieldset")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("legend")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("datalist")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),e("span",{class:"token punctuation"},">")])])])],-1),VO={__name:"81",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[FO,NO,qO,jO,O(i,Y({},{ranges:[""]}),{default:w(()=>[DO]),_:1},16),WO,O(i,Y({},{ranges:[""]}),{default:w(()=>[BO]),_:1},16)]),_:1},16)}}},UO=C(VO,[["__file","/@slidev/slides/81.md"]]),KO=e("h1",null,"Form",-1),GO=e("p",null,"<input>",-1),QO=e("ul",null,[e("li",null,"Uno dei widget più importanti ed utilizzati è <input>"),e("li",null,"Permette di ricevere un input dall’utente"),e("li",null,[s("Questo widget può assumere molte forme diverse in funzione dell’attributo "),e("em",null,"type")])],-1),YO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idnome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Nome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idcognome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cognnome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Cognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),ZO=e("input",{type:"text",id:"idnome",name:"nome",placeholder:"Nome",style:{border:"1px solid black",background:"Gainsboro"}},null,-1),JO=e("br",null,null,-1),XO=e("br",null,null,-1),e5=e("input",{type:"text",id:"idcognome",name:"cognome",placeholder:"Cognome",style:{border:"1px solid black",background:"Gainsboro"}},null,-1),t5={__name:"82",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[KO,GO,QO,O(i,Y({},{ranges:[""]}),{default:w(()=>[YO]),_:1},16),ZO,s(),JO,XO,e5]),_:1},16)}}},n5=C(t5,[["__file","/@slidev/slides/82.md"]]),a5=e("h1",null,"Form",-1),s5=e("p",null,"<label>",-1),o5=e("ul",null,[e("li",null,[s("L’elemento "),e("em",null,"label"),s(" specifica una label per diversi tipi di widget di un form")]),e("li",null,"Questo tag è molto importante in quanto gli screen-reader, per persone ipovedenti, leggono ad alta voce la label di un widget"),e("li",null,[s("Per associare una label ad un widget, si usa l’attributo "),e("em",null,"for"),s(" che deve coincidere con l’attributo "),e("em",null,"id"),s(" del widget")])],-1),i5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idnome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Nome: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idnome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Nome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idcognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Cognome: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idcognome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cognnome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Cognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),l5=e("label",{for:"idnome"},"      Nome: ",-1),r5=e("input",{type:"text",id:"idnome",name:"nome",placeholder:"Nome",style:{border:"1px solid black",background:"Gainsboro"}},null,-1),c5=e("br",null,null,-1),u5=e("br",null,null,-1),p5=e("p",null,[e("label",{for:"idcognome"},"Cognome: "),e("input",{type:"text",id:"idcognome",name:"cognome",placeholder:"Cognome",style:{border:"1px solid black",background:"Gainsboro"}})],-1),d5={__name:"83",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[a5,s5,o5,O(i,Y({},{ranges:[""]}),{default:w(()=>[i5]),_:1},16),l5,r5,s(),c5,u5,p5]),_:1},16)}}},m5=C(d5,[["__file","/@slidev/slides/83.md"]]),f5=e("h1",null,"Form",-1),h5=e("p",null,"<input>",-1),g5=e("ul",null,[e("li",null,[s("Come detto l’elemento "),e("em",null,"input"),s(" può assumere forme diverse in funzione dell’attributo "),e("em",null,"type")]),e("li",null,[s("I vari tipi di "),e("em",null,"input"),s(" sono:")])],-1),_5=e("br",null,null,-1),v5={grid:"~ cols-2 gap-4"},k5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("button"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("checkbox"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("color"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("date"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("datetime-local"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("email"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("file"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("hidden"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("image"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("month"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("number"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),b5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("password"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("radio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("range"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("reset"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("search"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("submit"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("tel"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("time"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("url"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("week"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),y5={__name:"84",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[f5,h5,g5,_5,e("div",v5,[e("div",null,[O(i,Y({},{ranges:[""]}),{default:w(()=>[k5]),_:1},16)]),e("div",null,[O(i,Y({},{ranges:[""]}),{default:w(()=>[b5]),_:1},16)])])]),_:1},16)}}},w5=C(y5,[["__file","/@slidev/slides/84.md"]]),x5=e("h1",null,"Form",-1),T5=e("p",null,"<input>",-1),$5=e("h3",null,"button",-1),z5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idbutton"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Premi il pulsante: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("button"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idbutton"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Cliccami!!"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),M5=e("label",{for:"idbutton"},"Premi il pulsante: ",-1),L5=e("input",{type:"button",id:"idbutton",onclick:"alert('Magie di JavaScript!! :)')",value:"Cliccami!!"},null,-1),I5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idpulsante"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Premi il pulsante: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("button")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("button"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idpulsante"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Click Me!"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("button")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),E5=e("label",{for:"idpulsante"},"Premi il pulsante: ",-1),S5=e("button",{type:"button",style:{border:"1px solid red"}},"Click Me!",-1),C5={__name:"85",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[x5,T5,$5,O(i,Y({},{ranges:[""]}),{default:w(()=>[z5]),_:1},16),M5,L5,O(i,Y({},{ranges:[""]}),{default:w(()=>[I5]),_:1},16),E5,S5]),_:1},16)}}},A5=C(C5,[["__file","/@slidev/slides/85.md"]]),O5=e("h1",null,"Form",-1),P5=e("p",null,"<input>",-1),H5=e("h3",null,"radio",-1),R5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Occupazione:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("radio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("studente"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupazione"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("studente"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("studente"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Studente"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("radio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupato"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupazione"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Occupato"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("radio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("disoccupato"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupazione"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("disoccupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("disoccupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Disoccupato"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),F5=e("br",null,null,-1),N5=e("h3",null,"Occupazione:",-1),q5=e("br",null,null,-1),j5=e("input",{type:"radio",id:"studente",name:"occupazione",value:"studente"},null,-1),D5=e("label",{for:"studente"}," Studente",-1),W5=e("br",null,null,-1),B5=e("input",{type:"radio",id:"occupato",name:"occupazione",value:"occupato"},null,-1),V5=e("label",{for:"occupato"}," Occupato",-1),U5=e("br",null,null,-1),K5=e("input",{type:"radio",id:"disoccupato",name:"occupazione",value:"disoccupato"},null,-1),G5=e("label",{for:"disoccupato"}," Disoccupato",-1),Q5=e("br",null,null,-1),Y5=e("br",null,null,-1),Z5={__name:"86",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[O5,P5,H5,O(i,Y({},{ranges:[""]}),{default:w(()=>[R5]),_:1},16),F5,N5,q5,j5,D5,W5,B5,V5,U5,K5,G5,Q5,Y5]),_:1},16)}}},J5=C(Z5,[["__file","/@slidev/slides/86.md"]]),X5=e("h1",null,"Form",-1),e6=e("p",null,"<input>",-1),t6=e("h3",null,"checkbox",-1),n6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Sport"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("checkbox"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("tennis"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("sport"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("tennis"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("tennis"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Tennis"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("checkbox"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("calcio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("sport"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("calcio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("calcio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Calcio"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("checkbox"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nuoto"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("sport"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nuoto"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nuoto"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s(" Nuoto"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),a6=e("br",null,null,-1),s6=e("h3",null,"Sport",-1),o6=e("br",null,null,-1),i6=e("input",{type:"checkbox",id:"tennis",name:"sport",value:"tennis"},null,-1),l6=e("label",{for:"tennis"}," Tennis",-1),r6=e("br",null,null,-1),c6=e("input",{type:"checkbox",id:"calcio",name:"sport",value:"calcio"},null,-1),u6=e("label",{for:"calcio"}," Calcio",-1),p6=e("br",null,null,-1),d6=e("input",{type:"checkbox",id:"nuoto",name:"sport",value:"nuoto"},null,-1),m6=e("label",{for:"nuoto"}," Nuoto",-1),f6=e("br",null,null,-1),h6=e("br",null,null,-1),g6={__name:"87",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[X5,e6,t6,O(i,Y({},{ranges:[""]}),{default:w(()=>[n6]),_:1},16),a6,s6,o6,i6,l6,r6,c6,u6,p6,d6,m6,f6,h6]),_:1},16)}}},_6=C(g6,[["__file","/@slidev/slides/87.md"]]),v6=e("h1",null,"Form",-1),k6=e("p",null,"<input>",-1),b6=e("h3",null,"date",-1),y6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Data di Nascita"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("date"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("iddata"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("birthday"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),w6=e("br",null,null,-1),x6=e("h3",null,"Data di Nascita",-1),T6=e("br",null,null,-1),$6=e("input",{type:"date",id:"iddata",name:"birthday"},null,-1),z6=e("br",null,null,-1),M6=e("br",null,null,-1),L6={__name:"88",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[v6,k6,b6,O(i,Y({},{ranges:[""]}),{default:w(()=>[y6]),_:1},16),w6,x6,T6,$6,z6,M6]),_:1},16)}}},I6=C(L6,[["__file","/@slidev/slides/88.md"]]),E6=e("h1",null,"Esercizio html_11",-1),S6=e("p",null,"Form",-1),C6=e("ol",null,[e("li",null,[s("Creare un file con nome "),e("em",null,"|cognome|_esercizio_html_11.html")]),e("li",null,"Creare 1 form per la raccolta di dati in uno scenario scelto dallo studente"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_11.html")],-1),A6=e("p",null,"Il form deve contenere i seguenti widgets:",-1),O6=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ul",null,[e("li",null,"almeno 2 widget di testo"),e("li",null,"almeno 1 bottone"),e("li",null,"almeno 3 scelte mutuamente esclusive tramite radio"),e("li",null,"almeeno 5 scelte multiple tramite checkbox"),e("li",null,"almeno 1 campo data"),e("li",null,"ogni widget deve essere dotato della propria label")])])],-1),P6={__name:"89",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[E6,S6,C6,A6,O6]),_:1},16))}},H6=C(P6,[["__file","/@slidev/slides/89.md"]]),R6=e("h1",null,"Form",-1),F6=e("p",null,"<input>",-1),N6=e("h3",null,"number",-1),q6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Altezza"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("number"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("altezza"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("altezza"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("150"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("200"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),j6=e("br",null,null,-1),D6=e("h3",null,"Altezza",-1),W6=e("br",null,null,-1),B6=e("input",{type:"number",id:"altezza",name:"altezza",min:"150",max:"200",style:{border:"1px solid black"}},null,-1),V6=e("br",null,null,-1),U6=e("br",null,null,-1),K6={__name:"90",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[R6,F6,N6,O(i,Y({},{ranges:[""]}),{default:w(()=>[q6]),_:1},16),j6,D6,W6,B6,V6,U6]),_:1},16)}}},G6=C(K6,[["__file","/@slidev/slides/90.md"]]),Q6=e("h1",null,"Form",-1),Y6=e("p",null,"<input>",-1),Z6=e("h3",null,"color",-1),J6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Colore preferito"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("   "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("color"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("favcolor"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("favcolor"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("#ff0000"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),X6=e("br",null,null,-1),e4=e("h3",null,"Colore preferito",-1),t4=e("br",null,null,-1),n4=e("input",{type:"color",id:"favcolor",name:"favcolor",value:"#ff0000",onchange:"alert(`Hai selezionato il colore: ${event.target.value}`)"},null,-1),a4=e("br",null,null,-1),s4=e("br",null,null,-1),o4={__name:"91",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[Q6,Y6,Z6,O(i,Y({},{ranges:[""]}),{default:w(()=>[J6]),_:1},16),X6,e4,t4,n4,a4,s4]),_:1},16)}}},i4=C(o4,[["__file","/@slidev/slides/91.md"]]),l4=e("h1",null,"Form",-1),r4=e("p",null,"<input>",-1),c4=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("peso"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Peso: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("range"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("50"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("100"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("60"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"class"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("slider"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("peso"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),u4=e("br",null,null,-1),p4=e("label",{for:"peso"},"Peso: ",-1),d4=e("input",{type:"range",min:"50",max:"100",value:"60",class:"slider",id:"peso"},null,-1),m4=e("br",null,null,-1),f4={__name:"92",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[l4,r4,O(i,Y({},{ranges:[""]}),{default:w(()=>[c4]),_:1},16),u4,p4,d4,m4]),_:1},16)}}},h4=C(f4,[["__file","/@slidev/slides/92.md"]]),g4=e("h1",null,"Form",-1),_4=e("p",null,"<select>",-1),v4=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cars"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Genere:  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("select")]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("genere"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cars"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("maschio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Maschio"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("option")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("femmina"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Femmina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("option")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("select")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),k4=e("br",null,null,-1),b4=e("label",{for:"cars"},"Genere: ",-1),y4=e("select",{name:"genere",id:"cars"},[e("option",{value:"maschio"},"Maschio"),e("option",{value:"femmina"},"Femmina")],-1),w4=e("br",null,null,-1),x4=e("br",null,null,-1),T4={__name:"93",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[g4,_4,O(i,Y({},{ranges:[""]}),{default:w(()=>[v4]),_:1},16),k4,b4,y4,w4,x4]),_:1},16)}}},$4=C(T4,[["__file","/@slidev/slides/93.md"]]),z4=e("h1",null,"Form",-1),M4=e("p",null,"<textarea>",-1),L4=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("bio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Biografia:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("textarea")]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("bio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("bio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"rows"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("4"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"cols"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("50"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Inserisci la tua biografia"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("textarea")]),e("span",{class:"token punctuation"},">")]),s("    ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),I4=e("p",null,[e("label",{for:"bio"},"Biografia:"),e("textarea",{id:"bio",name:"bio",rows:"4",cols:"50",placeholder:"Inserisci la tua biografia",style:{border:"1px solid black"}})],-1),E4={__name:"94",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[z4,M4,O(i,Y({},{ranges:[""]}),{default:w(()=>[L4]),_:1},16),I4]),_:1},16)}}},S4=C(E4,[["__file","/@slidev/slides/94.md"]]),C4=e("h1",null,"Esercizio html_12",-1),A4=e("p",null,"Form",-1),O4=e("ol",null,[e("li",null,[s("Modificare il file "),e("em",null,"|cognome|_esercizio_html_11.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_12.html")]),e("li",null,"Modificare il form (vedi dettagli sotto)"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_12.html")],-1),P4=e("p",null,"Il form deve contenere i seguenti widgets aggiuntivi:",-1),H4=e("ul",null,[e("li",null,"almeno 4 widget number con valore minimo e massimo"),e("li",null,"almeno 1 widget color picker"),e("li",null,"almeno 3 widget range con valore minimo e massimo"),e("li",null,"almeeno 2 combo box o select con almeno 5 valori ciascuna"),e("li",null,"almeno 1 campo text area con dimensione minima 6 righe e 60 colonne"),e("li",null,"ogni widget deve essere dotato della propria label")],-1),R4={__name:"95",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[C4,A4,O4,P4,H4]),_:1},16))}},F4=C(R4,[["__file","/@slidev/slides/95.md"]]),N4="/4/html/assets/html5_8-8ebdebac.jpg",q4=e("h1",null,"Form",-1),j4=e("p",null,"<datalist>",-1),D4={grid:"~ cols-2 gap-8"},W4=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nazioni"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Nazionalità: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"list"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nations"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nazioni"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nazioni"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("datalist")]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nations"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Albanese"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Argentina"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Belga"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Biellorussa"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Italiana"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Irlandese"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Israeliana"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("datalist")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),B4=e("div",null,[e("p",null,[e("img",{src:N4,alt:"html5_8.jpg"})])],-1),V4={__name:"96",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[q4,j4,e("div",D4,[e("div",null,[O(i,Y({},{ranges:[""]}),{default:w(()=>[W4]),_:1},16)]),B4])]),_:1},16)}}},U4=C(V4,[["__file","/@slidev/slides/96.md"]]),K4=e("h1",null,"Form",-1),G4=e("p",null,"<fieldset>",-1),Q4={grid:"~ cols-2 gap-8"},Y4=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("fieldset")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("legend")]),e("span",{class:"token punctuation"},">")]),s("Dati Personali"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("legend")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Nome:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Cognome:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cognome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("genere"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Genere:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("select")]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("genere"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cars"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("maschio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Maschio"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("option")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("femmina"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Femmina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("option")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("select")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("email"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Email:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("email"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("email"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("email"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("submit"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Invia"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("fieldset")]),e("span",{class:"token punctuation"},">")]),s("      ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),Z4=e("div",null,[e("fieldset",{style:{border:"1px solid black"}},[e("legend",null,"Dati Personali"),e("br"),e("label",{for:"nome"},"Nome: "),e("input",{type:"text",id:"nome",name:"nome",style:{border:"1px solid black"}}),e("br"),e("br"),e("label",{for:"cognome"},"Cognome: "),e("input",{type:"text",id:"cognome",name:"cognome",style:{border:"1px solid black"}}),e("br"),e("br"),e("label",{for:"genere"},"Genere: "),e("select",{name:"genere",id:"cars"},[e("option",{value:"maschio"},"Maschio"),e("option",{value:"femmina"},"Femmina")]),e("br"),e("br"),e("label",{for:"email"},"Email: "),e("input",{type:"email",id:"email",name:"email",style:{border:"1px solid black"}}),e("br"),e("br"),e("input",{type:"submit",value:"Invia",style:{border:"1px solid black"}}),s(),e("br"),e("br")])],-1),J4={__name:"97",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[K4,G4,e("div",Q4,[e("div",null,[O(i,Y({},{ranges:[""]}),{default:w(()=>[Y4]),_:1},16)]),Z4])]),_:1},16)}}},X4=C(J4,[["__file","/@slidev/slides/97.md"]]),eP=e("h1",null,"Esercizio html_13",-1),tP=e("p",null,"Form",-1),nP=e("ol",null,[e("li",null,[s("Creare un file con nome "),e("em",null,"|cognome|_esercizio_html_13.html")]),e("li",null,"Creare 1 form per la raccolta di dati personali"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_13.html")],-1),aP=e("p",null,"Il form deve contenere i seguenti campi:",-1),sP=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ul",null,[e("li",null,"Nome e Cognome"),e("li",null,"Genere"),e("li",null,[e("a",{href:"https://www.w3schools.com/tags/att_input_type_email.asp",target:"_blank",rel:"noopener"},"Email")]),e("li",null,[e("a",{href:"https://www.w3schools.com/tags/att_input_type_password.asp",target:"_blank",rel:"noopener"},"Password")]),e("li",null,"Data di nascita"),e("li",null,"Nazionalità")])]),e("div",null,[e("ul",null,[e("li",null,"Attività lavorativa"),e("li",null,"Hobby"),e("li",null,"Altezza"),e("li",null,"Peso"),e("li",null,"Colore preferito"),e("li",null,"Note personali")])])],-1),oP={__name:"98",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[eP,tP,nP,aP,sP]),_:1},16))}},iP=C(oP,[["__file","/@slidev/slides/98.md"]]),lP="/4/html/assets/html5_9-a352818c.jpg",rP=e("h1",null,"Form",-1),cP=e("p",null,"Form lifecycle server-side",-1),uP=e("img",{src:lP,width:"500",style:{float:"right"}},null,-1),pP=e("ol",null,[e("li",null,"L’utente richiede la pagina web contenente il form [GET]"),e("li",null,"Il web server risponde con l’HTML della pagina e del form"),e("li",null,[s("L’utente compila il form e fa il "),e("em",null,"submit"),s(" inviando i dati al server [POST]")]),e("li",null,"Il server effettua una validazione dei dati ricevuti (OK | ERROR)"),e("li",null,"ERROR: viene inviato nuovamente il form ed eventuali messaggi di errore"),e("li",null,"OK: il web server processa i dati ed esegue le operazioni previste (DB)"),e("li",null,"Viene inviata la risposta finale al browser")],-1),dP={__name:"99",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[rP,cP,uP,pP]),_:1},16))}},mP=C(dP,[["__file","/@slidev/slides/99.md"]]),fP=e("h1",null,"Form",-1),hP=e("p",null,"Form lifecycle",-1),gP=e("ul",null,[e("li",null,"Il ciclo di vita di gestione dei form appena visto, è quello classico"),e("li",null,"Come si vede questo è molto inefficente siccome richiede sempre una comunicazione tra client e server"),e("li",null,"Questo introduce latenze indesiderate e carico sul server"),e("li",null,"Il motivo principale è che HTML non essendo un linguaggio di programmazione non ha modo di fare una validazione del form prima dell’invio"),e("li",null,"Per ovviare a queste problematiche, normalmente si effettua la validazione del form in JavaScript, quindi direttamente nel browser riducendo così il numero di messaggi con il server")],-1),_P={__name:"100",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[fP,hP,gP]),_:1},16))}},vP=C(_P,[["__file","/@slidev/slides/100.md"]]),kP="/4/html/assets/html5_10-d0dadebe.jpg",bP=e("h1",null,"Form",-1),yP=e("p",null,"Form lifecycle client-side",-1),wP=e("img",{src:kP,width:"400",style:{float:"right"}},null,-1),xP=e("ol",null,[e("li",null,"L’utente richiede la pagina web contenente il form [GET]"),e("li",null,"Il web server risponde con l’HTML della pagina e del form"),e("li",null,[s("L’utente compila il form e fa il "),e("em",null,"submit"),s(" inviando i dati al server [POST]")]),e("li",null,"Il browser effettua una validazione dei dati ricevuti (OK | ERROR)"),e("li",null,"ERROR: viene visualizzato nuovamente il form ed eventuali messaggi di errore"),e("li",null,"OK: il web server processa i dati ed esegue le operazioni previste (DB)"),e("li",null,"Viene inviata la risposta finale al browser")],-1),TP={__name:"101",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[bP,yP,wP,xP]),_:1},16))}},$P=C(TP,[["__file","/@slidev/slides/101.md"]]),zP=e("h1",null,"Esercizio html_14",-1),MP=e("p",null,"Form validation server-side",-1),LP=e("ul",null,[e("li",null,"In questo esercizio/esercitazione si vuole comprendere a fondo il meccanismo di validazione dei form server-side")],-1),IP=e("p",null,"Per fare ciò abbiamo bisonog di due componenti fondamentali:",-1),EP=e("ol",null,[e("li",null,"Una pagina HTML contenente un form"),e("li",null,"Un web server che implementa la logica di validazione")],-1),SP=e("p",null,"Per questa esercitazione il form e il web server sono forniti",-1),CP=e("ol",null,[e("li",null,[s("Scaricare il seguente pacchetto:"),e("a",{href:"https://profmancusoa.github.io/TPSI/support/esercizio_html_14.tgz",target:"_blank",rel:"noopener"},"esercizio_html_14.tgz")]),e("li",null,[s("Installare i pacchetti necessari con "),e("code",null,"npm install")]),e("li",null,[s("Lanciare il web server con "),e("code",null,"node form_server.js")]),e("li",null,"Aprire la pagina fornita dal server locale sulla posta 8080")],-1),AP={__name:"102",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[zP,MP,LP,IP,EP,SP,CP]),_:1},16))}},OP=C(AP,[["__file","/@slidev/slides/102.md"]]),PP=e("h1",null,"Esercizio html_14",-1),HP=e("p",null," ",-1),RP=e("p",null,"Si richiede di:",-1),FP=e("ol",null,[e("li",null,"Verificare il funzionamento del form e della validazione dei campi"),e("li",null,"Analizzaere il codice del form e del server in JavaScript"),e("li",null,[s("Modificare il form in modo che l’età venga fornita come un "),e("code",null,"range")]),e("li",null,[s("Modificare il form in modo che sia presente anche il campo "),e("code",null,"Cognome")]),e("li",null,[s("Modificare il codice del server in modo che sia presente "),e("strong",null,"anche"),s(" la validazione dell’età, in modo che siano accettati solo valori compresi tra 19 e 31")]),e("li",null,[s("Fornire il link github alla directory con nome |cognome|_esercizio_html_14 contenente i file aggiornati "),e("em",null,"form.html"),s(" e "),e("em",null,"form_server.js")]),e("li",null,[e("code",null,"NON deve essere presente nel repository la directory **node_modules**")])],-1),NP={__name:"103",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[PP,HP,RP,FP]),_:1},16))}},qP=C(NP,[["__file","/@slidev/slides/103.md"]]),jP=e("h1",null,"HTML linter",-1),DP=e("p",null,"Verifica errori",-1),WP=e("ul",null,[e("li",null,[e("p",null,[s("Il "),e("code",null,"linter"),s(" è uno strumento che analizza il codice sorgente per contrassegnare errori di sintassi, di programmazione, bug, errori stilistici e costrutti sospetti.")])]),e("li",null,[e("p",null,[s("Il termine deriva dall’"),e("a",{href:"https://it.wikipedia.org/wiki/Lint_(software)",target:"_blank",rel:"noopener"},"omonimo strumento Unix"),s(" che esamina il codice sorgente del linguaggio C")])]),e("li",null,[e("p",null,"Pertanto il linter HTML è uno strumento che ci fornisce utili informazioni sulla pagina HTML in esame:"),e("ul",null,[e("li",null,"errori di sintassi HTML"),e("li",null,"uso di tag obsoleti"),e("li",null,"uso errato di tag"),e("li",null,"uso errato di attributi"),e("li",null,"mancata chiusura di tag"),e("li",null,"…")])]),e("li",null,[e("p",null,"Il lineter è uno strumento fondamentale per lo sviluppatore.")])],-1),BP={__name:"104",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[jP,DP,WP]),_:1},16))}},VP=C(BP,[["__file","/@slidev/slides/104.md"]]),UP="/4/html/assets/html5_12-88d9b140.png",KP=e("h1",null,"HTML linter",-1),GP=e("p",null,"W3C Markup Validation Service",-1),QP=e("ul",null,[e("li",null,"Il W3C mette a disposizione un servizio online di validazione (lint) di pagine o siti HTML"),e("li",null,[s("Il servizio è disponibile qui: "),e("a",{href:"https://validator.w3.org/",target:"_blank",rel:"noopener"},"https://validator.w3.org/")])],-1),YP=e("br",null,null,-1),ZP=e("img",{src:UP},null,-1),JP={__name:"105",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[KP,GP,QP,YP,ZP]),_:1},16))}},XP=C(JP,[["__file","/@slidev/slides/105.md"]]),eH="/4/html/assets/html5_13-f3e0e30d.png",tH=e("h1",null,"HTML linter",-1),nH=e("p",null,"W3C Markup Validation Service",-1),aH=e("p",null,"Il servizio opera in 3 modalità:",-1),sH=e("ol",null,[e("li",null,[e("strong",null,"Validate by URI"),s(": inserendo un URL valida ("),e("a",{href:"https://ats.agnelli.it",target:"_blank",rel:"noopener"},"https://ats.agnelli.it"),s(") effettua la validazione del sito")]),e("li",null,[e("strong",null,"Validate by File Upload"),s(": caricando un file .html effettua la validazione della pagina")]),e("li",null,[e("strong",null,"Validate by Direct Input"),s(": inserendo il codice HTML manualmente, ne effettua la validazione")])],-1),oH=e("br",null,null,-1),iH=e("img",{src:eH},null,-1),lH={__name:"106",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[tH,nH,aH,sH,oH,iH]),_:1},16))}},rH=C(lH,[["__file","/@slidev/slides/106.md"]]),cH="/4/html/assets/html5_14-f69c6914.png",uH=e("h1",null,"HTML linter",-1),pH=e("p",null,"W3C Markup Validation Service",-1),dH=e("br",null,null,-1),mH=e("img",{src:cH},null,-1),fH=e("ul",null,[e("li",null,[s("Il sito viene analizzato e viene generato un report "),e("ul",null,[e("li",null,[e("strong",null,"Error"),s(": segnala errori sintattici indicando la linea dove occorre")]),e("li",null,[e("strong",null,"Warning"),s(": evidenzia potenziali problemi ma non necessariamente errori sintattici")])])])],-1),hH={__name:"107",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[uH,pH,dH,mH,fH]),_:1},16))}},gH=C(hH,[["__file","/@slidev/slides/107.md"]]),_H=e("h1",null,"Esercizio html_15",-1),vH=e("p",null,"HTML lint",-1),kH=e("p",null,"Mediante il servizio di validazione HTML del W3C si richiede di:",-1),bH=e("ol",null,[e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html"),e("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente")],-1),yH={__name:"108",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[_H,vH,kH,bH]),_:1},16))}},wH=C(yH,[["__file","/@slidev/slides/108.md"]]),xH="/4/html/assets/html5_15-635ed653.png",TH=e("h1",null,"HTML linter",-1),$H=e("p",null,"Command Line Linter",-1),zH=e("ul",null,[e("li",null,"Chiaramente per quanto valido sia il linter del W3C, risulta di difficile applicazione nel processo di sviluppo"),e("li",null,"Caricare ad ogni modifica la propria pagina risulta particolarmente scomodo e time consuming"),e("li",null,"Per tale motivo esistono svariati tipi di linter HTML che operano da linea di comando"),e("li",null,"Questi strumenti sono molto versatili e possono essere integrati in pipeline automatiche (github)"),e("li",null,[s("Un linter valido è "),e("code",null,"node-w3c-validator"),s(" scirtto in JavaScript che implementa un wrapper al servizio W3C")])],-1),MH=e("br",null,null,-1),LH=e("img",{src:xH,width:"500"},null,-1),IH={__name:"109",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[TH,$H,zH,MH,LH]),_:1},16))}},EH=C(IH,[["__file","/@slidev/slides/109.md"]]),SH="/4/html/assets/html5_16-37784c29.png",CH=e("h1",null,"HTML linter",-1),AH=e("p",null,"Command Line Linter",-1),OH=e("ul",null,[e("li",null,"Per installare il linter basta eseguire")],-1),PH=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[s("npm i "),e("span",{class:"token operator"},"-"),s("g node"),e("span",{class:"token operator"},"-"),s("w3c"),e("span",{class:"token operator"},"-"),s("validator")])])],-1),HH=e("br",null,null,-1),RH=e("img",{src:SH,width:"700"},null,-1),FH={__name:"110",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[CH,AH,OH,O(i,Y({},{ranges:[""]}),{default:w(()=>[PH]),_:1},16),HH,RH]),_:1},16)}}},NH=C(FH,[["__file","/@slidev/slides/110.md"]]),qH=e("h1",null,"HTML linter",-1),jH=e("p",null,"Command Line Linter",-1),DH=e("p",null,"I parametri più importanti sono",-1),WH=e("ul",null,[e("li",null,[e("code",null,"-i"),s(": specifica il file HTML da validare")]),e("li",null,[e("code",null,"-f"),s(": specifica il formate del report generato "),e("ul",null,[e("li",null,[e("strong",null,"txt"),s(": genera un report puramente testuale")]),e("li",null,[e("strong",null,"lint"),s(": genera un report in formato lint con informazioni addizionali")]),e("li",null,[e("strong",null,"html"),s(": genera un report in formato HTML esattamente come quello generato dal servizio W3C")])])])],-1),BH={__name:"111",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[qH,jH,DH,WH]),_:1},16))}},VH=C(BH,[["__file","/@slidev/slides/111.md"]]),UH="/4/html/assets/html5_17-8d11820a.png",KH=e("h1",null,"HTML linter",-1),GH=e("p",null,"Command Line Linter",-1),QH=e("ul",null,[e("li",null,"Per fare il lint di un file HTML e generare un report testuale basta eseguire il seguente comando")],-1),YH=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[s("node"),e("span",{class:"token operator"},"-"),s("w3c"),e("span",{class:"token operator"},"-"),s("validator "),e("span",{class:"token operator"},"-"),s("i "),e("span",{class:"token operator"},"/"),s("path"),e("span",{class:"token operator"},"/"),s("to"),e("span",{class:"token operator"},"/"),s("file"),e("span",{class:"token punctuation"},"."),s("html "),e("span",{class:"token operator"},"-"),s("f txt")])])],-1),ZH=e("br",null,null,-1),JH=e("img",{src:UH},null,-1),XH={__name:"112",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[KH,GH,QH,O(i,Y({},{ranges:[""]}),{default:w(()=>[YH]),_:1},16),ZH,JH]),_:1},16)}}},e8=C(XH,[["__file","/@slidev/slides/112.md"]]),t8="/4/html/assets/html5_18-970bde4d.png",n8=e("h1",null,"HTML linter",-1),a8=e("p",null,"Command Line Linter",-1),s8=e("ul",null,[e("li",null,"Per fare il lint di un file HTML e generare un report in formato lint basta eseguire il seguente comando")],-1),o8=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[s("node"),e("span",{class:"token operator"},"-"),s("w3c"),e("span",{class:"token operator"},"-"),s("validator "),e("span",{class:"token operator"},"-"),s("i "),e("span",{class:"token operator"},"/"),s("path"),e("span",{class:"token operator"},"/"),s("to"),e("span",{class:"token operator"},"/"),s("file"),e("span",{class:"token punctuation"},"."),s("html "),e("span",{class:"token operator"},"-"),s("f lint")])])],-1),i8=e("br",null,null,-1),l8=e("img",{src:t8,width:"650"},null,-1),r8={__name:"113",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[n8,a8,s8,O(i,Y({},{ranges:[""]}),{default:w(()=>[o8]),_:1},16),i8,l8]),_:1},16)}}},c8=C(r8,[["__file","/@slidev/slides/113.md"]]),u8="/4/html/assets/html5_19-d96648e9.png",p8=e("h1",null,"HTML linter",-1),d8=e("p",null,"Command Line Linter",-1),m8=e("ul",null,[e("li",null,"Per fare il lint di un file HTML e generare un report in formato html basta eseguire il seguente comando")],-1),f8=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[s("node"),e("span",{class:"token operator"},"-"),s("w3c"),e("span",{class:"token operator"},"-"),s("validator "),e("span",{class:"token operator"},"-"),s("i "),e("span",{class:"token operator"},"/"),s("path"),e("span",{class:"token operator"},"/"),s("to"),e("span",{class:"token operator"},"/"),s("file"),e("span",{class:"token punctuation"},"."),s("html "),e("span",{class:"token operator"},"-"),s("f html "),e("span",{class:"token operator"},">"),s(" report"),e("span",{class:"token punctuation"},"."),s("html")])])],-1),h8=e("br",null,null,-1),g8=e("img",{src:u8,width:"650"},null,-1),_8={__name:"114",setup(t){const n={};return z(S),(a,o)=>{const i=re;return b(),L(W,j(q(n)),{default:w(()=>[p8,d8,m8,O(i,Y({},{ranges:[""]}),{default:w(()=>[f8]),_:1},16),h8,g8]),_:1},16)}}},v8=C(_8,[["__file","/@slidev/slides/114.md"]]),k8=e("h1",null,"Esercizio html_16",-1),b8=e("p",null,"HTML lint",-1),y8=e("p",null,"Mediante il linter da liena di comando si richiede di:",-1),w8=e("ol",null,[e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html"),e("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente"),e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato txt"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_16.txt"),e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato lint"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_16.lint"),e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato html"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_16.html")],-1),x8={__name:"115",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[k8,b8,y8,w8]),_:1},16))}},T8=C(x8,[["__file","/@slidev/slides/115.md"]]),$8=e("h1",null,"Esercizio html_17",-1),z8=e("p",null,"HTML lint",-1),M8=e("p",null,"Mediante il linter da liena di comando si richiede di:",-1),L8=e("ol",null,[e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html"),e("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente"),e("li",null,"Correggere gli errori ed i warning"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_17_glossario_corretto.html")],-1),I8={__name:"116",setup(t){const n={};return z(S),(a,o)=>(b(),L(W,j(q(n)),{default:w(()=>[$8,z8,M8,L8]),_:1},16))}},E8=C(I8,[["__file","/@slidev/slides/116.md"]]),S8="/4/html/assets/html5_11-d37e4564.jpg",C8=e("p",null," ",-1),A8=e("img",{src:S8,width:"800"},null,-1),O8={__name:"117",setup(t){const n={};return z(S),(a,o)=>{const i=va("center");return b(),L(W,j(q(n)),{default:w(()=>[C8,O(i,null,{default:w(()=>[A8]),_:1})]),_:1},16)}}},P8=C(O8,[["__file","/@slidev/slides/117.md"]]),H8=[{path:"1",name:"page-1",component:bz,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.4.3",title:"Hyper Text Markup Language",slide:{raw:`---
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
</div>`,frontmatter:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.4.3",title:"Hyper Text Markup Language"},index:0,start:0,end:26,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Mz,meta:{slide:{raw:`
# HTML

*H*yper *T*ext *M*arkup *L*anguage (linguaggio di markup per ipertesti), comunemente noto con l'acronimo di **HTML**, è un **linguaggio di markup** per la creazione di una pagina web. 

- Originariamente nato per la formattazione e impaginazione di documenti ipertestuali (web 1.0), oggi è alla base dello sviluppo di siti ed applicazioni web.

- Viene utilizzato principalmente per il disaccoppiamento della struttura logica di una pagina web (definita appunto dal markup **HTML**) dalla sua rappresentazione, gestita tramite gli stili **CSS** e dalla sua logica di funzionamento implementata tramite il linguaggio **JavaScript**.

- L'HTML è un linguaggio di pubblico dominio, la cui sintassi è stabilita dal World Wide Web Consortium (W3C). La versione attuale, la quinta, è stata rilasciata dal W3C nell'ottobre 2014.

- Il motivo principale che ha spinto il W3C e i suoi membri a sviluppare HTML5 è stata la necessità di fornire direttamente le funzionalità che in precedenza erano fruibili tramite estensioni proprietarie all'esterno dei browser, come Adobe Flash e simili. Un secondo obiettivo che gli sviluppatori si erano prefissati era quello di garantire una maggiore compatibilità tra i diversi browser, indipendentemente dalla piattaforma software utilizzata, e principalmente mirata all'espansione dei dispositivi mobili.
`,title:"HTML",level:1,content:`# HTML

*H*yper *T*ext *M*arkup *L*anguage (linguaggio di markup per ipertesti), comunemente noto con l'acronimo di **HTML**, è un **linguaggio di markup** per la creazione di una pagina web. 

- Originariamente nato per la formattazione e impaginazione di documenti ipertestuali (web 1.0), oggi è alla base dello sviluppo di siti ed applicazioni web.

- Viene utilizzato principalmente per il disaccoppiamento della struttura logica di una pagina web (definita appunto dal markup **HTML**) dalla sua rappresentazione, gestita tramite gli stili **CSS** e dalla sua logica di funzionamento implementata tramite il linguaggio **JavaScript**.

- L'HTML è un linguaggio di pubblico dominio, la cui sintassi è stabilita dal World Wide Web Consortium (W3C). La versione attuale, la quinta, è stata rilasciata dal W3C nell'ottobre 2014.

- Il motivo principale che ha spinto il W3C e i suoi membri a sviluppare HTML5 è stata la necessità di fornire direttamente le funzionalità che in precedenza erano fruibili tramite estensioni proprietarie all'esterno dei browser, come Adobe Flash e simili. Un secondo obiettivo che gli sviluppatori si erano prefissati era quello di garantire una maggiore compatibilità tra i diversi browser, indipendentemente dalla piattaforma software utilizzata, e principalmente mirata all'espansione dei dispositivi mobili.`,frontmatter:{},index:1,start:27,end:40,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Az,meta:{slide:{raw:`
# HTML

&nbsp;

<div grid="~ cols-2 gap-4">
<div>

- HTML5 linguaggio evoluto per il markup o descrizione delle pagine HTML
- Definito e standardizzato dal W3C (WWW Consortium)
- Descrive la semantica ed il contenuto di una pagina Web
- Definisce una serie di tecnologie correlate
- Note come HTML Living Standard (è in continua evoluzione)

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
- Note come HTML Living Standard (è in continua evoluzione)

</div>

<div>

![html5_1.jpg](/media/html5_1.jpg)

</div>
</div>`,frontmatter:{},index:2,start:41,end:64,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Nz,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:3,start:65,end:93,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Qz,meta:{slide:{raw:`
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
- [https://javascript.info/](https://javascript.info/)`,frontmatter:{},index:4,start:94,end:117,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:t2,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Ambiente di Sviluppo</h1>
`,content:'<h1 class="sezione">Ambiente di Sviluppo</h1>',frontmatter:{layout:"section"},index:5,start:117,end:122,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:i2,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

&nbsp;

- Al fine di comprendere appieno lo sviluppo web, è preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice
- Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web
- Il passaggio ad un sistema autore o ad un CMS risulta poi più facile e intuitivo.
`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

&nbsp;

- Al fine di comprendere appieno lo sviluppo web, è preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice
- Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web
- Il passaggio ad un sistema autore o ad un CMS risulta poi più facile e intuitivo.`,frontmatter:{},index:6,start:123,end:132,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:d2,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

[Visual Studio Code](https://code.visualstudio.com/docs/languages/html)

<div grid="~ cols-2 gap-32">
<div>

- Qualsiasi editor testuale è adatto allo sviluppo web
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

- Qualsiasi editor testuale è adatto allo sviluppo web
- **Visual Studio Code** fornisce supporto al HTML in modo nativo
- Fornisce il syntax highlighting, smart completions con IntelliSense e formattazione customizzabile
- In aggiunta sono disponibili moltissime estensioni per facilitare lo sviluppo web

</div>
<div>

![html5_3.jpg](/media/html5_3.jpg)

</div>
</div>`,frontmatter:{},index:7,start:133,end:155,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:v2,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.


![html5_4.jpg](/media/html5_4.jpg)

`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.


![html5_4.jpg](/media/html5_4.jpg)`,frontmatter:{},index:8,start:156,end:165,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:x2,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

&nbsp;

- Quindi per sviluppare una pagina web usiamo vscode (o il nostro editor preferito)
- Scriviamo il codice di markup della pagina
- Salviamo con estensione .html
- Apriamo il file nel browser (CTRL + o o drag’n drop)
- La pagina viene visualizzata all'interno del browser
`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

&nbsp;

- Quindi per sviluppare una pagina web usiamo vscode (o il nostro editor preferito)
- Scriviamo il codice di markup della pagina
- Salviamo con estensione .html
- Apriamo il file nel browser (CTRL + o o drag’n drop)
- La pagina viene visualizzata all'interno del browser`,frontmatter:{},index:9,start:166,end:177,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:z2,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Tag e Attributi</h1>
`,content:'<h1 class="sezione">Tag e Attributi</h1>',frontmatter:{layout:"section"},index:10,start:177,end:182,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:G2,meta:{slide:{raw:`
# TAG 

I TAG HTML sono marcatori (Markup Language) che modificano la semantica (senso, ruolo organizzazione) dei contenuti di una pagina.

### Anatomia di un TAG

- Un tag è racchiuso tra < e >
- Il nome del tag è sempre scritto in minuscolo
- Se non specificato deve sempre esserci un tag di **apertura** ed un tag di **chiusura**
\`\`\`html
<tagname> --> TAG di apertura
\`\`\`
\`\`\`html
</tagname> --> TAG di chiusura
\`\`\`

Il contenuto da modificare è compreso tra il tag di apertura ed il tag di chiusura
\`\`\`html
<tagname>...Contenuto del tag...</tagname>
\`\`\`
`,title:"TAG",level:1,content:`# TAG 

I TAG HTML sono marcatori (Markup Language) che modificano la semantica (senso, ruolo organizzazione) dei contenuti di una pagina.

### Anatomia di un TAG

- Un tag è racchiuso tra < e >
- Il nome del tag è sempre scritto in minuscolo
- Se non specificato deve sempre esserci un tag di **apertura** ed un tag di **chiusura**
\`\`\`html
<tagname> --> TAG di apertura
\`\`\`
\`\`\`html
</tagname> --> TAG di chiusura
\`\`\`

Il contenuto da modificare è compreso tra il tag di apertura ed il tag di chiusura
\`\`\`html
<tagname>...Contenuto del tag...</tagname>
\`\`\``,frontmatter:{},index:11,start:183,end:205,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:nM,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:12,start:206,end:250,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:pM,meta:{slide:{raw:`
# Attributi

Caratteristiche addizionali di un TAG

- I tag HTML possono avere degli **attributi** che forniscono delle informazioni addizionali al browser.
- Gli attributi sono **sempre** specificati nel tag di apertura.
- Gli attributi sono definiti da una coppia nome-valore

\`\`\`html
<tagname nome="valore">...Contenuto del tag...</tagname>
\`\`\`

- Un tag può avere 0, 1 o più attributi
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

- Un tag può avere 0, 1 o più attributi
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
\`\`\``,frontmatter:{},index:13,start:251,end:277,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:fM,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">La struttura di una pagina Web</h1>

`,content:'<h1 class="sezione">La struttura di una pagina Web</h1>',frontmatter:{layout:"section"},index:14,start:277,end:283,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:bM,meta:{slide:{raw:`
# Struttura pagina HTML

Una pagina HTML ha una struttuta fissa che deve sempre essere rispettata.

Una generica pagina HTML è composta da 3 sezioni principali:

1. **Documento**: il contenitore di più alto livello, che racchiude tutte le altre sezioni della pagina HTML.
2. **Head**: il contenitore per i metadati (dato che descrive un dato) del documento e va inserito in testa al docuemnto.
3. **Body**: consiste nel contenuto principale della pagina HTML.
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Una pagina HTML ha una struttuta fissa che deve sempre essere rispettata.

Una generica pagina HTML è composta da 3 sezioni principali:

1. **Documento**: il contenitore di più alto livello, che racchiude tutte le altre sezioni della pagina HTML.
2. **Head**: il contenitore per i metadati (dato che descrive un dato) del documento e va inserito in testa al docuemnto.
3. **Body**: consiste nel contenuto principale della pagina HTML.`,frontmatter:{},index:15,start:284,end:295,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:zM,meta:{slide:{raw:`
# Struttura pagina HTML

Rappresentazione grafica della struttura di una pagina HTML

![html5_5.jpg](/media/html5_5.jpg)

`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Rappresentazione grafica della struttura di una pagina HTML

![html5_5.jpg](/media/html5_5.jpg)`,frontmatter:{},index:16,start:296,end:304,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:AM,meta:{slide:{raw:`
# Struttura pagina HTML

Documento HTML

- Tutti i documenti HTML devono iniziare con la dichiarazione DOCTYPE che deve essere seguita dal TAG di più alto livello 
\`\`\`html
<!DOCTYPE html>
<html>
\`\`\`

- **&lt;!DOCTYPE html&gt;**: rappresenta il tipo di documento (html) e permette al browser di visualizzare la pagina HTML in modo corretto.
- Deve apparire nella pagina 1 sola volta come prima linea e prima di qualsiasi altro elemento o tag.
- **&lt;html&gt;**: è il primo tag di apertura che indica l'inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.

`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Documento HTML

- Tutti i documenti HTML devono iniziare con la dichiarazione DOCTYPE che deve essere seguita dal TAG di più alto livello 
\`\`\`html
<!DOCTYPE html>
<html>
\`\`\`

- **&lt;!DOCTYPE html&gt;**: rappresenta il tipo di documento (html) e permette al browser di visualizzare la pagina HTML in modo corretto.
- Deve apparire nella pagina 1 sola volta come prima linea e prima di qualsiasi altro elemento o tag.
- **&lt;html&gt;**: è il primo tag di apertura che indica l'inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.`,frontmatter:{},index:17,start:305,end:321,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:NM,meta:{slide:{raw:`
# Struttura pagina HTML

Header del documento

- Il primo elemento di apertura della pagina HTML è l'***HEAD**er* o intestazione.
- **&lt;head&gt;**: tag di apertura dell'header che contiene la descrizione dei *metadati* del documento HTML.
- I metadati sono dati che descrivono delle caratteristiche del documento, per esempip il titolo, il set di caratteri, l'autore,etc...
- La sezione header ed i metadati contenuti  **NON** sono visualizzati.
- Il più importante elemento della sezione head è il titolo identificato dal tag
\`\`\`html
<title>Titolo della pagina</title>
\`\`\`
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Header del documento

- Il primo elemento di apertura della pagina HTML è l'***HEAD**er* o intestazione.
- **&lt;head&gt;**: tag di apertura dell'header che contiene la descrizione dei *metadati* del documento HTML.
- I metadati sono dati che descrivono delle caratteristiche del documento, per esempip il titolo, il set di caratteri, l'autore,etc...
- La sezione header ed i metadati contenuti  **NON** sono visualizzati.
- Il più importante elemento della sezione head è il titolo identificato dal tag
\`\`\`html
<title>Titolo della pagina</title>
\`\`\``,frontmatter:{},index:18,start:322,end:336,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:VM,meta:{slide:{raw:`
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
- In questa sezione viene definito il contenuto che si vuole visualizzare nel browser.`,frontmatter:{},index:19,start:337,end:352,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:ZM,meta:{slide:{raw:`
# Struttura pagina HTML

Pagina HTML base

Questo è il codice della pagina HTML minimale, che contiene solo le sezioni principali

\`\`\`html
<!DOCTYPE html> <!-- HTML5-->
<!-- Questo è un commento su una singola riga -->

<!-- Questo è un commento 
     su più righe
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

Questo è il codice della pagina HTML minimale, che contiene solo le sezioni principali

\`\`\`html
<!DOCTYPE html> <!-- HTML5-->
<!-- Questo è un commento su una singola riga -->

<!-- Questo è un commento 
     su più righe
-->
<html lang="it"> <!-- Pagina HTML -->
  <head> <!-- Header della pagina -->
    
    <!-- Qui vanno inserite informazioni relative alla pagina ma che non saranno visualizzate -->
  
  </head>
  <body><!-- Corpo principale della pagina HTML -->

    <!-- Questa sezione cotiene il contenuto della pagina HTML che viene visualizzato nel browser -->
  
  </body>
</html>
\`\`\``,frontmatter:{},index:20,start:353,end:381,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:aL,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header

La sezione &lt;head&gt; può contenere i seguenti tag:
- &lt;title&gt;: definisce il titolo della pagina HTML.
- &lt;style&gt;: definisce lo stile da applicare alla pagina HTML.
- &lt;meta&gt;: definisce specifici metadata per il documento.
- &lt;link&gt;: utilizzato per referenziare elementi o documenti esterni.
- &lt;script&gt;: definisce la logica da eseguire durante la visualizzazione delle pagina.
- &lt;base&gt;: specifica un UTL di base da applicare a tutto il documento.

`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header

La sezione &lt;head&gt; può contenere i seguenti tag:
- &lt;title&gt;: definisce il titolo della pagina HTML.
- &lt;style&gt;: definisce lo stile da applicare alla pagina HTML.
- &lt;meta&gt;: definisce specifici metadata per il documento.
- &lt;link&gt;: utilizzato per referenziare elementi o documenti esterni.
- &lt;script&gt;: definisce la logica da eseguire durante la visualizzazione delle pagina.
- &lt;base&gt;: specifica un UTL di base da applicare a tutto il documento.`,frontmatter:{},index:21,start:382,end:396,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:cL,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header: &lt;title&gt;

- Il più importante elemento della sezione head è il titolo identificato dal tag

\`\`\`html
<title>Titolo della pagina</title>
\`\`\`
- Il titolo deve contenere solo informazioni testuali ed è visualizzato nel bordo o tab della finestra del browser.
- Il titolo è molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull'algoritmo che decide in quale ordine visualizzare le pagine trovate.
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header: &lt;title&gt;

- Il più importante elemento della sezione head è il titolo identificato dal tag

\`\`\`html
<title>Titolo della pagina</title>
\`\`\`
- Il titolo deve contenere solo informazioni testuali ed è visualizzato nel bordo o tab della finestra del browser.
- Il titolo è molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull'algoritmo che decide in quale ordine visualizzare le pagine trovate.`,frontmatter:{},index:22,start:397,end:410,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:gL,meta:{slide:{raw:`
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


Importante notare che i metadati, non sono visualizzati dal browser, ma utilizzati dai motori di ricerca per comprendere meglio il contenuto della pagina stessa.`,frontmatter:{},index:23,start:411,end:426,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:xL,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header: &lt;style&gt;

- Definisce uno o più stili che vanno a modificare la visualizzazione della pagina HTML
\`\`\`html
<style>
  body {background-color: powderblue;}
  h1 {color: red;}
  p {color: blue;}
</style>
\`\`\`

- Normalmente non si usa mai in quanto non è una buona pratica di programmazione
- Per pagine di media/alta complessità non si include in quanto è più pulito definire gli stili della pagina in un file esterno di tipo **CSS**
 `,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header: &lt;style&gt;

- Definisce uno o più stili che vanno a modificare la visualizzazione della pagina HTML
\`\`\`html
<style>
  body {background-color: powderblue;}
  h1 {color: red;}
  p {color: blue;}
</style>
\`\`\`

- Normalmente non si usa mai in quanto non è una buona pratica di programmazione
- Per pagine di media/alta complessità non si include in quanto è più pulito definire gli stili della pagina in un file esterno di tipo **CSS**`,frontmatter:{},index:24,start:427,end:444,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:EL,meta:{slide:{raw:`
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


- Normalmente non si usa mai in quanto non è una buona pratica di programmazione
- Per pagine di media/alta complessità non si include in quanto è più pulito definire gli script della pagina in un file esterno di tipo **JS** 
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


- Normalmente non si usa mai in quanto non è una buona pratica di programmazione
- Per pagine di media/alta complessità non si include in quanto è più pulito definire gli script della pagina in un file esterno di tipo **JS**`,frontmatter:{},index:25,start:445,end:466,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:PL,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:26,start:467,end:497,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:qL,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:27,start:498,end:515,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:VL,meta:{slide:{raw:`
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
5. Provare a modificare la sezione *script* e verificare i cambiamenti`,frontmatter:{},index:28,start:516,end:529,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:GL,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Titoli e Paragrafi in HTML</h1>
`,content:'<h1 class="sezione">Titoli e Paragrafi in HTML</h1>',frontmatter:{layout:"section"},index:29,start:529,end:534,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:sI,meta:{slide:{raw:`
# HTML Headings

Titoli e sottotitoli

- Heading o intestazione: sono marcatori HTML che permettono di definire titoli e sottotitoli in una pagina web.
- HTML definisce 6 livelli di heading, dal più importante al meno importante:

<div grid="~ cols-2 gap-32">
<div>

\`\`\`html
<!--livello più importante-->
<h1>Heading 1</h1> 
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<!--livello meno importante-->
\`\`\`

- I motori di ricerca usano i tag di *heading* per capire e definire un indice del contenuto di una pagina
- **NOTA**: *Usa i tag &lt;hN&gt; solo per i titoli e sottotitoli. **NON** usarli per visualizzare testo in grassetto o con font più grande.*

</div>
<div>

![html5_7.jpg](/media/html5_7.jpg)

</div>
</div>
`,title:"HTML Headings",level:1,content:`# HTML Headings

Titoli e sottotitoli

- Heading o intestazione: sono marcatori HTML che permettono di definire titoli e sottotitoli in una pagina web.
- HTML definisce 6 livelli di heading, dal più importante al meno importante:

<div grid="~ cols-2 gap-32">
<div>

\`\`\`html
<!--livello più importante-->
<h1>Heading 1</h1> 
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<!--livello meno importante-->
\`\`\`

- I motori di ricerca usano i tag di *heading* per capire e definire un indice del contenuto di una pagina
- **NOTA**: *Usa i tag &lt;hN&gt; solo per i titoli e sottotitoli. **NON** usarli per visualizzare testo in grassetto o con font più grande.*

</div>
<div>

![html5_7.jpg](/media/html5_7.jpg)

</div>
</div>`,frontmatter:{},index:30,start:535,end:568,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:uI,meta:{slide:{raw:`
# HTML Paragrafi

Blocchi di testo

- Nell'editing di una pagina HTML, è spesso utile poter inserire un blocco di testo o paragrafo
- HTML mette a disposizione un tag specifico **&lt;p&gt;** che definisce un paragrafo di testo, lungo a piacere, da visualizzare in una pagina web 
\`\`\`html
<p>
  ...
  ... Blocco di testo
  ...
</p>
\`\`\`
- Ogni paragrafo è preceduto e seguito da una linea bianca distanziatrice.
- Il browser è libero di aggiunge automaticamente degli spazi (un margine) prima e dopo il testo.
- Non si può essere sicuri di come il browser visualizzi il paragrafo. 
- Il risultato può essere diverso su uno schermo grande rispetto ad uno piccolo. 
- Pertanto l'aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser.
`,title:"HTML Paragrafi",level:1,content:`# HTML Paragrafi

Blocchi di testo

- Nell'editing di una pagina HTML, è spesso utile poter inserire un blocco di testo o paragrafo
- HTML mette a disposizione un tag specifico **&lt;p&gt;** che definisce un paragrafo di testo, lungo a piacere, da visualizzare in una pagina web 
\`\`\`html
<p>
  ...
  ... Blocco di testo
  ...
</p>
\`\`\`
- Ogni paragrafo è preceduto e seguito da una linea bianca distanziatrice.
- Il browser è libero di aggiunge automaticamente degli spazi (un margine) prima e dopo il testo.
- Non si può essere sicuri di come il browser visualizzi il paragrafo. 
- Il risultato può essere diverso su uno schermo grande rispetto ad uno piccolo. 
- Pertanto l'aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser.`,frontmatter:{},index:31,start:569,end:589,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:hI,meta:{slide:{raw:`
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
5. Fornire il link github al file con nome |cognome|_esercizio_html_02.html`,frontmatter:{},index:32,start:590,end:601,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:vI,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Elementi block e inline</h1>

`,content:'<h1 class="sezione">Elementi block e inline</h1>',frontmatter:{layout:"section"},index:33,start:601,end:607,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:LI,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:34,start:608,end:634,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:RI,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:35,start:635,end:658,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:BI,meta:{slide:{raw:`
# DIV

Contenitore di contenitori block

- Un tag estremamente importante nello sviluppo web moderno è **&lt;div&gt;**.
- **&lt;DIV&gt;** è di tipo **block** e definisce un generico blocco di contenuto senza una semantica particolare. 
- E' comunemente usato come contenitore per altri elementi HTML o altri div
- Pertanto DIV è utilizzato per creare delle strutture di layout del contenuto web.
- Insieme a CSS è utilizzato per definire lo stile di blocchi di contenuto

### esempio
<div style="background-color:red;color:white;padding:20px;">
  <h2>ATTENZIONE</h2>
  <p>Si richiede a tutti gli studenti di studiare e sperimentare il più possibile con HTML.</p>
  <p>Oggi tutte le moderne applicazioni sono sviluppate in HTML - CSS e JavaScript</p>
</div> 
`,title:"DIV",level:1,content:`# DIV

Contenitore di contenitori block

- Un tag estremamente importante nello sviluppo web moderno è **&lt;div&gt;**.
- **&lt;DIV&gt;** è di tipo **block** e definisce un generico blocco di contenuto senza una semantica particolare. 
- E' comunemente usato come contenitore per altri elementi HTML o altri div
- Pertanto DIV è utilizzato per creare delle strutture di layout del contenuto web.
- Insieme a CSS è utilizzato per definire lo stile di blocchi di contenuto

### esempio
<div style="background-color:red;color:white;padding:20px;">
  <h2>ATTENZIONE</h2>
  <p>Si richiede a tutti gli studenti di studiare e sperimentare il più possibile con HTML.</p>
  <p>Oggi tutte le moderne applicazioni sono sviluppate in HTML - CSS e JavaScript</p>
</div>`,frontmatter:{},index:36,start:659,end:677,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:ZI,meta:{slide:{raw:`
# SPAN

Contenitore di contenitori inline

- Un tag estremamente importante nello sviluppo web moderno è **&lt;span&gt;**.
- Il tag **&lt;span&gt;** definisce un generico contenitore di tipo **inline** a cui non è associata nessuna semantica particolare.
- E' comunemente usato per modificare una parte di testo in un paragrafo on in altre sezione di un documento HTML.
- Insieme a CSS è utilizzato per definire lo stile di parti di testo.

### esempio
<p>Comunicato a tutti gli studenti: <span style="color:white;background:red;font-weight:bold">ATTENZIONE</span> Si richiede a tutti gli studenti di <span style="color:darkolivegreen;font-weight:bold">studiare</span> e sperimentare il più possibile con HTML.</p>
`,title:"SPAN",level:1,content:`# SPAN

Contenitore di contenitori inline

- Un tag estremamente importante nello sviluppo web moderno è **&lt;span&gt;**.
- Il tag **&lt;span&gt;** definisce un generico contenitore di tipo **inline** a cui non è associata nessuna semantica particolare.
- E' comunemente usato per modificare una parte di testo in un paragrafo on in altre sezione di un documento HTML.
- Insieme a CSS è utilizzato per definire lo stile di parti di testo.

### esempio
<p>Comunicato a tutti gli studenti: <span style="color:white;background:red;font-weight:bold">ATTENZIONE</span> Si richiede a tutti gli studenti di <span style="color:darkolivegreen;font-weight:bold">studiare</span> e sperimentare il più possibile con HTML.</p>`,frontmatter:{},index:37,start:678,end:691,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:eE,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Ancore e Link</h1>

`,content:'<h1 class="sezione">Ancore e Link</h1>',frontmatter:{layout:"section"},index:38,start:691,end:697,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:cE,meta:{slide:{raw:`
# Ancore e Link

Collegamenti a contenuti esterni

- I link sono alla base del concetto di *iptertesto*, che a sua volta è alla base dello WWW.
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

Il principale valore per *target* è **_blank**, e permette di aprire il documento in un una nuova finestra o tab del browser.

`,title:"Ancore e Link",level:1,content:`# Ancore e Link

Collegamenti a contenuti esterni

- I link sono alla base del concetto di *iptertesto*, che a sua volta è alla base dello WWW.
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

Il principale valore per *target* è **_blank**, e permette di aprire il documento in un una nuova finestra o tab del browser.`,frontmatter:{},index:39,start:698,end:721,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:gE,meta:{slide:{raw:`
# Ancore e Link

Collegamenti a contenuti esterni

L'URL specificato nell'attributo *href* può essere:
- **assoluto**: link ad una risorsa esterna nella forma canonica *https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png*
- **relativo**: link relativo ad una risorsa locale, presente nello stesso server */images/branding/googlelogo/1x/googlelogo_color_272x92dp.png*

Questo perchè, tutte le URL relative fanno riferimento ad una directory chiamata **document root** che rappresenta la root del web server.
`,title:"Ancore e Link",level:1,content:`# Ancore e Link

Collegamenti a contenuti esterni

L'URL specificato nell'attributo *href* può essere:
- **assoluto**: link ad una risorsa esterna nella forma canonica *https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png*
- **relativo**: link relativo ad una risorsa locale, presente nello stesso server */images/branding/googlelogo/1x/googlelogo_color_272x92dp.png*

Questo perchè, tutte le URL relative fanno riferimento ad una directory chiamata **document root** che rappresenta la root del web server.`,frontmatter:{},index:40,start:722,end:733,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:wE,meta:{slide:{raw:`
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


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:41,start:734,end:750,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:$E,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Web grafico con le Immagini</h1>

`,content:'<h1 class="sezione">Web grafico con le Immagini</h1>',frontmatter:{layout:"section"},index:42,start:750,end:756,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:AE,meta:{slide:{raw:`
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
- **height**: specifica l'altezza dell'immagine in pixel`,frontmatter:{},index:43,start:757,end:775,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:NE,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:44,start:776,end:788,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:UE,meta:{slide:{raw:`
# Immagini

Il Web diventa grafico

- I tag HTML possono essere nidificati, cioè dichiarati uno dentro l'altro.
- Questa importante proprietà ci permette di creare un link grafico all'interno di una pagina web.

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

- I tag HTML possono essere nidificati, cioè dichiarati uno dentro l'altro.
- Questa importante proprietà ci permette di creare un link grafico all'interno di una pagina web.

\`\`\`html
<a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank">
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
</a>
\`\`\`
<center>
<a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank">
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="200" alt="primo web server"/>
</a>
</center>`,frontmatter:{},index:45,start:789,end:808,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:JE,meta:{slide:{raw:`
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

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:46,start:809,end:826,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:tS,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Formattazione del testo in HTML</h1>

`,content:'<h1 class="sezione">Formattazione del testo in HTML</h1>',frontmatter:{layout:"section"},index:47,start:826,end:832,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:rS,meta:{slide:{raw:`
# Formattazione del Testo

Tag di formattazione

- HTML mette a disposizione 10 tag specifici per la definizione di testo con particolare significato.
- Questi tag definiscono la semantica e cioè il significato del testo che racchiudono.
- Il browser decide come visualizzare il testo racchiuso in questi tag

<br />

\`\`\`html
<b>: testo in grassetto senza significato aggiuntivo
<strong>: testo con molta importanza. Normalmente visualizzatto in grassetto
<i>: testo alternativo, un termine tecnico, una parola straniera. Normalmente visualizzato in italico
<em>: testo con particolare enfasi.Normalmente viene visualizzato in italico
<mark>: testo che deve essere evidenziato
<small>: testo con dimensioni minori e quindi con meno importanza
<del>: testo che è stato eliminato dal documento. Normalmente visualizzato con una linea sul testo
<ins>: testo che è stato aggiunto al documento. Normalmente visualizzato come testo sottolineato
<sub>: - definisce un testo come pedice
<sup>: - definisce un testo come apice
\`\`\`
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag di formattazione

- HTML mette a disposizione 10 tag specifici per la definizione di testo con particolare significato.
- Questi tag definiscono la semantica e cioè il significato del testo che racchiudono.
- Il browser decide come visualizzare il testo racchiuso in questi tag

<br />

\`\`\`html
<b>: testo in grassetto senza significato aggiuntivo
<strong>: testo con molta importanza. Normalmente visualizzatto in grassetto
<i>: testo alternativo, un termine tecnico, una parola straniera. Normalmente visualizzato in italico
<em>: testo con particolare enfasi.Normalmente viene visualizzato in italico
<mark>: testo che deve essere evidenziato
<small>: testo con dimensioni minori e quindi con meno importanza
<del>: testo che è stato eliminato dal documento. Normalmente visualizzato con una linea sul testo
<ins>: testo che è stato aggiunto al documento. Normalmente visualizzato come testo sottolineato
<sub>: - definisce un testo come pedice
<sup>: - definisce un testo come apice
\`\`\``,frontmatter:{},index:48,start:833,end:857,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:yS,meta:{slide:{raw:`
# Formattazione del Testo

Tag di formattazione

- bold
\`\`\`html
In un paragrafo spesso vogliamo poter evidenziare una parola in <b>grassetto</b>.
\`\`\`
In un paragrafo spesso vogliamo poter evidenziare una parola in <b>grassetto</b>.

- strong
\`\`\`html
Spesso è necessario definire una parola <strong>molto importante</strong>.
\`\`\` 
Spesso è necessario definire una parola <strong>molto importante</strong>.

- italico
\`\`\`html
Alcune volte è necessario definire un termine tecnico come <i>Web Server</i>
\`\`\`
Alcune volte è necessario definire un termine tecnico come <i>Web Server</i>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag di formattazione

- bold
\`\`\`html
In un paragrafo spesso vogliamo poter evidenziare una parola in <b>grassetto</b>.
\`\`\`
In un paragrafo spesso vogliamo poter evidenziare una parola in <b>grassetto</b>.

- strong
\`\`\`html
Spesso è necessario definire una parola <strong>molto importante</strong>.
\`\`\` 
Spesso è necessario definire una parola <strong>molto importante</strong>.

- italico
\`\`\`html
Alcune volte è necessario definire un termine tecnico come <i>Web Server</i>
\`\`\`
Alcune volte è necessario definire un termine tecnico come <i>Web Server</i>`,frontmatter:{},index:49,start:858,end:881,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:HS,meta:{slide:{raw:`
# Formattazione del Testo

Tag di formattazione

- enfasi
\`\`\`html
In un testo ci sono specifiche parole a cui si vuole dare <em>enfasi</em>.
\`\`\`
In un testo ci sono specifiche parole a cui si vuole dare <em>enfasi</em>.

- mark
\`\`\`html
Un altro modo per <mark>evidenziare</mark> una o più parole è usare il tag <b>mark</b>
\`\`\`
Un altro modo per <mark>evidenziare</mark> una o più parole è usare il tag <b>mark</b>

- small
\`\`\`html
Al contrario quando un testo <small>è di poca importanza</small> si può usare il tag <b>small</b>
\`\`\`
Al contrario quando un testo <small>è di poca importanza</small> si può usare il tag <b>small</b>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag di formattazione

- enfasi
\`\`\`html
In un testo ci sono specifiche parole a cui si vuole dare <em>enfasi</em>.
\`\`\`
In un testo ci sono specifiche parole a cui si vuole dare <em>enfasi</em>.

- mark
\`\`\`html
Un altro modo per <mark>evidenziare</mark> una o più parole è usare il tag <b>mark</b>
\`\`\`
Un altro modo per <mark>evidenziare</mark> una o più parole è usare il tag <b>mark</b>

- small
\`\`\`html
Al contrario quando un testo <small>è di poca importanza</small> si può usare il tag <b>small</b>
\`\`\`
Al contrario quando un testo <small>è di poca importanza</small> si può usare il tag <b>small</b>`,frontmatter:{},index:50,start:882,end:905,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:QS,meta:{slide:{raw:`
# Formattazione del Testo

Tag di formattazione

- del e ins
\`\`\`html
Il mio cibo preferito è il <del>pollo</del> <ins>tacchino</ins>.
\`\`\`
Il mio cibo preferito è il <del>pollo</del> <ins>tacchino</ins>.

- sub e sup
\`\`\`html
Il logaritmo in base 2 di 8 è 3: log<sub>2</sub> 8 = 3
In modo analogo 2 elevato alla 3 fa 8: 2<sup>3</sup> = 8
In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> 
mentre i <sub>pedici</sub> con il tag <b>sub</b>

\`\`\`
Il logaritmo in base 2 di 8 è 3: log<sub>2</sub> 8 = 3

In modo analogo 2 elevato alla 3 fa 8: 2<sup>3</sup> = 8

In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> mentre i <sub>pedici</sub> con il tag <b>sub</b>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag di formattazione

- del e ins
\`\`\`html
Il mio cibo preferito è il <del>pollo</del> <ins>tacchino</ins>.
\`\`\`
Il mio cibo preferito è il <del>pollo</del> <ins>tacchino</ins>.

- sub e sup
\`\`\`html
Il logaritmo in base 2 di 8 è 3: log<sub>2</sub> 8 = 3
In modo analogo 2 elevato alla 3 fa 8: 2<sup>3</sup> = 8
In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> 
mentre i <sub>pedici</sub> con il tag <b>sub</b>

\`\`\`
Il logaritmo in base 2 di 8 è 3: log<sub>2</sub> 8 = 3

In modo analogo 2 elevato alla 3 fa 8: 2<sup>3</sup> = 8

In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> mentre i <sub>pedici</sub> con il tag <b>sub</b>`,frontmatter:{},index:51,start:906,end:931,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:t3,meta:{slide:{raw:`
# Esercizio html_05

Link

1. Editare il file *|cognome|_esercizio_html_04.html* e salvarlo come *|cognome|_esercizio_html_05.html*
2. evidenziare 5 parole in bold
3. marcare 5 parole particolarmente importanti
4. evidenziare 5 parole alternative o termini tecnici
5. dare enfasi a 5 parole
6. evidenziare (mark) 5 parole significative
7. rendere più piccole 5 parole poco significative
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
7. rendere più piccole 5 parole poco significative
8. marcare 5 parole come eliminate dal testo
9. marcare 5 parole come inserite nel testo
10. dove possibile marcare almeno 1 parola come apice ed 1 come pedice
11. Fornire il link github al file con nome |cognome|_esercizio_html_05.html

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:52,start:932,end:954,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:l3,meta:{slide:{raw:`
# Formattazione del Testo

Tag per Quotazioni e Citazioni


- HTML mette a disposizione 4 tag specifici per la definizione di testo che rappresenta una citazione o una quote.
- Questi tag definiscono la semantica e cioè il significato del testo che racchiudono.
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
- Questi tag definiscono la semantica e cioè il significato del testo che racchiudono.
- Il browser decide come visualizzare il testo racchiuso in questi tag
  
\`\`\`html
<blockquote>: definisce una porzione di testo come una citazione esterna
<q>: definisce una breve citazione
<abbr>: definisce un'abbreviazione o un acronimo
<cite>: citazione ad un lavoro altrui (libro, sito web, ...)
\`\`\``,frontmatter:{},index:53,start:955,end:972,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:g3,meta:{slide:{raw:`
# Formattazione del Testo

Tag per Quotazioni e Citazioni

- blockquote
\`\`\`html
Alle volte in un testo si vuole "quotare" un altro autore.
Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale.
Quindi con il tag <b>blockquote</b> si può definire una quotazione
indicando la sorgente dell'informazione
<blockquote cite="https://it.wikipedia.org/wiki/Giovanni_Bosco">
  La sottrazione di benevolenza è un castigo che eccita l'emulazione
</blockquote>
\`\`\`
Alle volte in un testo si vuole "quotare" un altro autore.
Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale.
Quindi con il tag <b>blockquote</b> si può definire una quotazione
indicando la sorgente dell'informazione
<blockquote cite="https://it.wikipedia.org/wiki/Giovanni_Bosco">
  La sottrazione di benevolenza è un castigo che eccita l'emulazione
</blockquote>

-  Come si può notare la citazione è indentata. Il link alla citazione  non ha un effetto visivo ma può essere utile al motore di ricerca o altri tool.
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag per Quotazioni e Citazioni

- blockquote
\`\`\`html
Alle volte in un testo si vuole "quotare" un altro autore.
Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale.
Quindi con il tag <b>blockquote</b> si può definire una quotazione
indicando la sorgente dell'informazione
<blockquote cite="https://it.wikipedia.org/wiki/Giovanni_Bosco">
  La sottrazione di benevolenza è un castigo che eccita l'emulazione
</blockquote>
\`\`\`
Alle volte in un testo si vuole "quotare" un altro autore.
Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale.
Quindi con il tag <b>blockquote</b> si può definire una quotazione
indicando la sorgente dell'informazione
<blockquote cite="https://it.wikipedia.org/wiki/Giovanni_Bosco">
  La sottrazione di benevolenza è un castigo che eccita l'emulazione
</blockquote>

-  Come si può notare la citazione è indentata. Il link alla citazione  non ha un effetto visivo ma può essere utile al motore di ricerca o altri tool.`,frontmatter:{},index:54,start:973,end:998,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:S3,meta:{slide:{raw:`
# Formattazione del Testo

Tag per Quotazioni e Citazioni

- quotazione
\`\`\`html
Quando in un testo vogliamo fare una <q>breve citazione</q>, basta inserire il testo nel tag <b>q</b> 
\`\`\` 
Quando in un testo vogliamo fare una <q>breve citazione</q>, basta inserire il testo nel tag <b>q</b> 

- abbreviazione
\`\`\`html
<abbr title="Gnu is Not Unix">GNU</abbr>di GNU/Linux sembra una  parola ma in realtà è un acronimo.
\`\`\`
<abbr title="Gnu is Not Unix">GNU</abbr> di GNU/Linux sembra una parola ma in realtà è un acronimo.

- citazione lavoro altrui
\`\`\`html
Un alternativa per una citazione è usare il tag <b>cite</b>. 
In una disicussione accesa Linus disse: <cite>"Parlare è facile. Mostrami il codice".</cite>
\`\`\`
Un alternativa per una citazione è usare il tag <b>cite</b>. In una disicussione accesa Linus disse: <cite>"Parlare è facile. Mostrami il codice".</cite>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag per Quotazioni e Citazioni

- quotazione
\`\`\`html
Quando in un testo vogliamo fare una <q>breve citazione</q>, basta inserire il testo nel tag <b>q</b> 
\`\`\` 
Quando in un testo vogliamo fare una <q>breve citazione</q>, basta inserire il testo nel tag <b>q</b> 

- abbreviazione
\`\`\`html
<abbr title="Gnu is Not Unix">GNU</abbr>di GNU/Linux sembra una  parola ma in realtà è un acronimo.
\`\`\`
<abbr title="Gnu is Not Unix">GNU</abbr> di GNU/Linux sembra una parola ma in realtà è un acronimo.

- citazione lavoro altrui
\`\`\`html
Un alternativa per una citazione è usare il tag <b>cite</b>. 
In una disicussione accesa Linus disse: <cite>"Parlare è facile. Mostrami il codice".</cite>
\`\`\`
Un alternativa per una citazione è usare il tag <b>cite</b>. In una disicussione accesa Linus disse: <cite>"Parlare è facile. Mostrami il codice".</cite>`,frontmatter:{},index:55,start:999,end:1023,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:R3,meta:{slide:{raw:`
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

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:56,start:1024,end:1042,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:G3,meta:{slide:{raw:`
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
Se si vuole <s>sbarrare</s> una parola basta usare il tag &lt;s&gt;`,frontmatter:{},index:57,start:1043,end:1070,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:aC,meta:{slide:{raw:`
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

Per installare vscode in Linux usa il comando: <code>apt install vscode</code>`,frontmatter:{},index:58,start:1071,end:1088,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:pC,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- pre formattato
\`\`\`html
Negli articoli può essere necessario riportare una porzione di testo con una formattazione specifica.
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
Negli articoli può essere necessario riportare una porzione di testo con una formattazione specifica.
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
</pre>`,frontmatter:{},index:59,start:1089,end:1115,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:_C,meta:{slide:{raw:`
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

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:60,start:1116,end:1133,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:MC,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- Durante la realizzazione di una pagina web ci possono essere delle esigenze particolari di formattazione.
- HTML fornisce altri tag aggiuntivi utili per forzare un ritorno a capo e per visualizzare una linea di suddivisione orizzontale


- ritorno a capo
\`\`\`html
In alcuni casi è necessario forzare un ritorno a capo. <br/>
Per fare ciò basta usare il tag <br/>
\`\`\`
In alcuni casi è necessario forzare un ritorno a capo. <br/>
Per fare ciò basta usare il tag &lt;br/&gt;

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
In alcuni casi è necessario forzare un ritorno a capo. <br/>
Per fare ciò basta usare il tag <br/>
\`\`\`
In alcuni casi è necessario forzare un ritorno a capo. <br/>
Per fare ciò basta usare il tag &lt;br/&gt;

- linea orizzontale
\`\`\`html
Per inserire una linea orizzontale di separazione usa <hr />
\`\`\`
<hr style="height:5px; background-color:grey">`,frontmatter:{},index:61,start:1134,end:1157,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:PC,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- barra per metrica
\`\`\`html
Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag <meter>

Andamento dei voti:<br>

Studente 1 <meter min="0" max="10" value="8.0">8 su 10</meter><br />
Studente 2 <meter min="0" max="10" value="6.5">6.5 su 10</meter><br />
Studente 3 <meter min="0" max="10" value="9.5">9.5 su 10</meter><br />
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />
\`\`\`
Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag &lt;meter&gt;

Andamento dei voti:<br>

Studente 1 <meter min="0" max="10" value="8.0">8 su 10</meter><br />
Studente 2 <meter min="0" max="10" value="6.5">6.5 su 10</meter><br />
Studente 3 <meter min="0" max="10" value="9.5">9.5 su 10</meter><br />
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag addizionali

- barra per metrica
\`\`\`html
Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag <meter>

Andamento dei voti:<br>

Studente 1 <meter min="0" max="10" value="8.0">8 su 10</meter><br />
Studente 2 <meter min="0" max="10" value="6.5">6.5 su 10</meter><br />
Studente 3 <meter min="0" max="10" value="9.5">9.5 su 10</meter><br />
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />
\`\`\`
Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag &lt;meter&gt;

Andamento dei voti:<br>

Studente 1 <meter min="0" max="10" value="8.0">8 su 10</meter><br />
Studente 2 <meter min="0" max="10" value="6.5">6.5 su 10</meter><br />
Studente 3 <meter min="0" max="10" value="9.5">9.5 su 10</meter><br />
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />`,frontmatter:{},index:62,start:1158,end:1183,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:WC,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- barra di progresso
\`\`\`html
In alternativa si può visualizzare un progress bar tramite l'uso del tag <progress>

Andamento dei voti:<br>

Studente 1 <progress min="0" max="10" value="8">8 di 10</progress><br />
Studente 2 <progress min="0" max="10" value="6.5">6.5 di 10</progress><br />
Studente 3 <progress min="0" max="10" value="9.5">9.5 di 10</progress><br />
Studente 4 <progress min="0" max="10" value="4.5">4.5 di 10</progress><br />
\`\`\`
In alternativa si può visualizzare un progress bar tramite l'uso del tag &lt;progress&gt;

Andamento dei voti:<br>

Studente 1 <progress min="0" max="10" value="8">8 di 10</progress><br />
Studente 2 <progress min="0" max="10" value="6.5">6.5 di 10</progress><br />
Studente 3 <progress min="0" max="10" value="9.5">9.5 di 10</progress><br />
Studente 4 <progress min="0" max="10" value="4.5">4.5 di 10</progress><br />
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag addizionali

- barra di progresso
\`\`\`html
In alternativa si può visualizzare un progress bar tramite l'uso del tag <progress>

Andamento dei voti:<br>

Studente 1 <progress min="0" max="10" value="8">8 di 10</progress><br />
Studente 2 <progress min="0" max="10" value="6.5">6.5 di 10</progress><br />
Studente 3 <progress min="0" max="10" value="9.5">9.5 di 10</progress><br />
Studente 4 <progress min="0" max="10" value="4.5">4.5 di 10</progress><br />
\`\`\`
In alternativa si può visualizzare un progress bar tramite l'uso del tag &lt;progress&gt;

Andamento dei voti:<br>

Studente 1 <progress min="0" max="10" value="8">8 di 10</progress><br />
Studente 2 <progress min="0" max="10" value="6.5">6.5 di 10</progress><br />
Studente 3 <progress min="0" max="10" value="9.5">9.5 di 10</progress><br />
Studente 4 <progress min="0" max="10" value="4.5">4.5 di 10</progress><br />`,frontmatter:{},index:63,start:1184,end:1209,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:QC,meta:{slide:{raw:`
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


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:64,start:1210,end:1228,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:JC,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Caratteri speciali in HTML</h1>

`,content:'<h1 class="sezione">Caratteri speciali in HTML</h1>',frontmatter:{layout:"section"},index:65,start:1228,end:1234,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:iA,meta:{slide:{raw:`
# HTML Entities

Uso di caratteri riservati

- Nella realizzazione di una pagina web, non è possibile usare tutti i caratteri disponibili.
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
[Qui si può consultare la lista completa di entities HTML.](https://www.freeformatter.com/html-entities.html)
`,title:"HTML Entities",level:1,content:`# HTML Entities

Uso di caratteri riservati

- Nella realizzazione di una pagina web, non è possibile usare tutti i caratteri disponibili.
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
[Qui si può consultare la lista completa di entities HTML.](https://www.freeformatter.com/html-entities.html)`,frontmatter:{},index:66,start:1235,end:1259,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:mA,meta:{slide:{raw:`
# HTML Entities

Uso di caratteri riservati

- In alcune occasioni è necessario indicare al browser di non andare a capo.
- Per fare ciò si usa il carattere *non breaking space*
- In altre parole inserendo questo carattere, si inserisce uno spazio che non può mandare la linea a capo

\`\`\`html
non breaking space

&nbsp;
\`\`\`

- In modo analogo, ricordiamoci che se inserisco 10 spazi, il browser ne rimuove 9
- Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte \`&nbsp;\`
`,title:"HTML Entities",level:1,content:`# HTML Entities

Uso di caratteri riservati

- In alcune occasioni è necessario indicare al browser di non andare a capo.
- Per fare ciò si usa il carattere *non breaking space*
- In altre parole inserendo questo carattere, si inserisce uno spazio che non può mandare la linea a capo

\`\`\`html
non breaking space

&nbsp;
\`\`\`

- In modo analogo, ricordiamoci che se inserisco 10 spazi, il browser ne rimuove 9
- Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte \`&nbsp;\``,frontmatter:{},index:67,start:1260,end:1278,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:kA,meta:{slide:{raw:"\n# HTML Entities\n\nUso di caratteri riservati\n\n- Qui una lista di HTML entities comuemente usate\n\n| Carattere | Descizione   | Nome Entità  | Numero Entità  | \n|---|---|---|---|\n| |non-breaking space	| `&nbsp;`	| `&#160;`| \n|<	|less than|	`&lt;`|	`&#60;`|\n|>	|greater than	|`&gt;`	|`&#62;`|\n|`&` |ampersand	|`&amp;`	|`&#38;`|\n|\"	|double quotation mark	|`&quot;`	|`&#34;`|\n|'	|single quotation mark (apostrophe)	|`&apos;`	|`&#39;`|\n|€	|euro	|`&euro;`	|`&#8364;`|\n|©	|copyright	|`&copy;`	|`&#169;`|\n\n",title:"HTML Entities",level:1,content:"# HTML Entities\n\nUso di caratteri riservati\n\n- Qui una lista di HTML entities comuemente usate\n\n| Carattere | Descizione   | Nome Entità  | Numero Entità  | \n|---|---|---|---|\n| |non-breaking space	| `&nbsp;`	| `&#160;`| \n|<	|less than|	`&lt;`|	`&#60;`|\n|>	|greater than	|`&gt;`	|`&#62;`|\n|`&` |ampersand	|`&amp;`	|`&#38;`|\n|\"	|double quotation mark	|`&quot;`	|`&#34;`|\n|'	|single quotation mark (apostrophe)	|`&apos;`	|`&#39;`|\n|€	|euro	|`&euro;`	|`&#8364;`|\n|©	|copyright	|`&copy;`	|`&#169;`|",frontmatter:{},index:68,start:1279,end:1298,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:wA,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Liste (non)ordinate</h1>
`,content:'<h1 class="sezione">Liste (non)ordinate</h1>',frontmatter:{layout:"section"},index:69,start:1298,end:1303,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:EA,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:70,start:1304,end:1339,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:jA,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:71,start:1340,end:1381,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:JA,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:72,start:1382,end:1422,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:sO,meta:{slide:{raw:`
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

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:73,start:1423,end:1439,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:lO,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Rappresentazioni tabulari con le Tabelle</h1>

`,content:'<h1 class="sezione">Rappresentazioni tabulari con le Tabelle</h1>',frontmatter:{layout:"section"},index:74,start:1439,end:1445,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:fO,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

- In passato lo sviluppo web era ampiamente basato sull'uso di tabelle
- Principalmente le tabelle venivano usato per creare il layout della pagina Web
- Tuttavia questo metodo era laborioso e poco funzionale in quanto il supporto delle tabelle dai vari browser non era omogeneo.
- Oggi il layout di una pagine, NON si realizza più con le tabelle ma con il blocco DIV.
- Tuttavia lo scopo originario delle tabelle, cioè visualizzare contenuti in formato tabellare rimane valido.

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
- Oggi il layout di una pagine, NON si realizza più con le tabelle ma con il blocco DIV.
- Tuttavia lo scopo originario delle tabelle, cioè visualizzare contenuti in formato tabellare rimane valido.

I principlai tag per la definizione di una tabella sono:

\`\`\`html
<table>: definisce un contenitore per dati organizzati in formato tabellare
<caption>: definisce il titolo di una tabella
<thead>: definisce l'header della tabella
<tr>: definisce una riga della tabella
<td>: definisce una cella della tabella.
<tbody>: definisce il corpo principale della tabella
\`\`\``,frontmatter:{},index:75,start:1446,end:1468,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:yO,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:76,start:1469,end:1531,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:LO,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:77,start:1532,end:1594,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:OO,meta:{slide:{raw:`
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

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:78,start:1595,end:1609,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:RO,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Interagiamo con l'utente attraverso i Form</h1>

`,content:`<h1 class="sezione">Interagiamo con l'utente attraverso i Form</h1>`,frontmatter:{layout:"section"},index:79,start:1609,end:1615,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:UO,meta:{slide:{raw:`
# Form

Input dall'utente

- Il form (letteralmente modulo) indica la parte di interfaccia utente di un'applicazione web che consente all'utente di inserire e inviare al web server/application server uno o più dati.
- Il form è composto da un contenitore e da componenti grafici detti **widget** che compongono il form stesso. 
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

- Il form (letteralmente modulo) indica la parte di interfaccia utente di un'applicazione web che consente all'utente di inserire e inviare al web server/application server uno o più dati.
- Il form è composto da un contenitore e da componenti grafici detti **widget** che compongono il form stesso. 
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
\`\`\``,frontmatter:{},index:80,start:1616,end:1640,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:n5,meta:{slide:{raw:`
# Form

&lt;input&gt;

- Uno dei widget più importanti ed utilizzati è &lt;input&gt;
- Permette di ricevere un input dall'utente
- Questo widget può assumere molte forme diverse in funzione dell'attributo *type*

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

- Uno dei widget più importanti ed utilizzati è &lt;input&gt;
- Permette di ricevere un input dall'utente
- Questo widget può assumere molte forme diverse in funzione dell'attributo *type*

\`\`\`html
<form>
  <input type="text" id="idnome" name="nome" placeholder="Nome">
  <input type="text" id="idcognome" name="cognnome" placeholder="Cognome">
</form>
\`\`\`
<input type="text" id="idnome" name="nome" placeholder="Nome" style="border: 1px solid black;background:Gainsboro;"> <br /><br />
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">`,frontmatter:{},index:81,start:1641,end:1659,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:m5,meta:{slide:{raw:`
# Form

&lt;label&gt;

- L'elemento *label* specifica una label per diversi tipi di widget di un form
- Questo tag è molto importante in quanto gli screen-reader, per persone ipovedenti, leggono ad alta voce la label di un widget
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
- Questo tag è molto importante in quanto gli screen-reader, per persone ipovedenti, leggono ad alta voce la label di un widget
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
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">`,frontmatter:{},index:82,start:1660,end:1684,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:w5,meta:{slide:{raw:`
# Form

&lt;input&gt;

- Come detto l'elemento *input* può assumere forme diverse in funzione dell'attributo *type*
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

- Come detto l'elemento *input* può assumere forme diverse in funzione dell'attributo *type*
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
</div>`,frontmatter:{},index:83,start:1685,end:1733,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:A5,meta:{slide:{raw:`
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
<button type="button" style="border: 1px solid red;">Click Me!</button>`,frontmatter:{},index:84,start:1734,end:1759,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:J5,meta:{slide:{raw:`
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
<label for="disoccupato">  Disoccupato</label><br><br>`,frontmatter:{},index:85,start:1760,end:1786,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:_6,meta:{slide:{raw:`
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
<label for="nuoto"> Nuoto</label><br><br>`,frontmatter:{},index:86,start:1787,end:1813,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:I6,meta:{slide:{raw:`
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
<input type="date" id="iddata" name="birthday"><br><br>`,frontmatter:{},index:87,start:1814,end:1830,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:H6,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:88,start:1831,end:1857,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:G6,meta:{slide:{raw:`
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
<input type="number" id="altezza" name="altezza" min="150" max="200" style="border: 1px solid black;"><br><br>`,frontmatter:{},index:89,start:1858,end:1874,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:i4,meta:{slide:{raw:`
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
 <input type="color" id="favcolor" name="favcolor" value="#ff0000" onchange="alert(\`Hai selezionato il colore: \${event.target.value}\`)"><br><br>`,frontmatter:{},index:90,start:1875,end:1891,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:h4,meta:{slide:{raw:`
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
<input type="range" min="50" max="100" value="60" class="slider" id="peso"><br>`,frontmatter:{},index:91,start:1892,end:1907,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:$4,meta:{slide:{raw:`
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
</select><br><br>`,frontmatter:{},index:92,start:1908,end:1929,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:S4,meta:{slide:{raw:`
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
<textarea id="bio" name="bio" rows="4" cols="50" placeholder="Inserisci la tua biografia" style="border: 1px solid black;"></textarea>`,frontmatter:{},index:93,start:1930,end:1945,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:F4,meta:{slide:{raw:`
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
- ogni widget deve essere dotato della propria label`,frontmatter:{},index:94,start:1946,end:1967,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:U4,meta:{slide:{raw:`
# Form

&lt;datalist&gt;

<div grid="~ cols-2 gap-8">
<div>

\`\`\`html
<form>
  <label for="nazioni">Nazionalità: </label><br>
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
  <label for="nazioni">Nazionalità: </label><br>
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
</div>`,frontmatter:{},index:95,start:1968,end:1998,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:X4,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:96,start:1999,end:2050,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:iP,meta:{slide:{raw:`
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
- Nazionalità
</div>
<div>

- Attività lavorativa
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
- Nazionalità
</div>
<div>

- Attività lavorativa
- Hobby
- Altezza
- Peso
- Colore preferito
- Note personali

</div>
</div>`,frontmatter:{},index:97,start:2051,end:2086,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:mP,meta:{slide:{raw:`
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
7. Viene inviata la risposta finale al browser`,frontmatter:{},index:98,start:2087,end:2103,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:vP,meta:{slide:{raw:`
# Form

Form lifecycle

- Il ciclo di vita di gestione dei form appena visto, è quello classico
- Come si vede questo è molto inefficente siccome richiede sempre una comunicazione tra client e server
- Questo introduce latenze indesiderate e carico sul server
- Il motivo principale è che HTML non essendo un linguaggio di programmazione non ha modo di fare una validazione del form prima dell'invio
- Per ovviare a queste problematiche, normalmente si effettua la validazione del form in JavaScript, quindi direttamente nel browser riducendo così il numero di messaggi con il server
`,title:"Form",level:1,content:`# Form

Form lifecycle

- Il ciclo di vita di gestione dei form appena visto, è quello classico
- Come si vede questo è molto inefficente siccome richiede sempre una comunicazione tra client e server
- Questo introduce latenze indesiderate e carico sul server
- Il motivo principale è che HTML non essendo un linguaggio di programmazione non ha modo di fare una validazione del form prima dell'invio
- Per ovviare a queste problematiche, normalmente si effettua la validazione del form in JavaScript, quindi direttamente nel browser riducendo così il numero di messaggi con il server`,frontmatter:{},index:99,start:2104,end:2115,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:$P,meta:{slide:{raw:`
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
7. Viene inviata la risposta finale al browser`,frontmatter:{},index:100,start:2116,end:2132,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:OP,meta:{slide:{raw:`
# Esercizio html_14

Form validation server-side

- In questo esercizio/esercitazione si vuole comprendere a fondo il meccanismo di validazione dei form server-side

Per fare ciò abbiamo bisonog di due componenti fondamentali:
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

Per fare ciò abbiamo bisonog di due componenti fondamentali:
1. Una pagina HTML contenente un form
2. Un web server che implementa la logica di validazione

Per questa esercitazione il form e il web server sono forniti
1. Scaricare il seguente pacchetto:[esercizio_html_14.tgz](https://profmancusoa.github.io/TPSI/support/esercizio_html_14.tgz)
2. Installare i pacchetti necessari con \`npm install\`
4. Lanciare il web server con \`node form_server.js\`
5. Aprire la pagina fornita dal server locale sulla posta 8080`,frontmatter:{},index:101,start:2133,end:2152,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:qP,meta:{slide:{raw:`
# Esercizio html_14


&nbsp;

Si richiede di:
1. Verificare il funzionamento del form e della validazione dei campi
2. Analizzaere il codice del form e del server in JavaScript
3. Modificare il form in modo che l'età venga fornita come un \`\`\`range\`\`\`
4. Modificare il form in modo che sia presente anche il campo \`Cognome\`
5. Modificare il codice del server in modo che sia presente **anche** la validazione dell'età, in modo che siano accettati solo valori compresi tra 19 e 31
6. Fornire il link github alla directory con nome |cognome|_esercizio_html_14 contenente i file aggiornati *form.html* e *form_server.js*
7. \`\`\`NON deve essere presente nel repository la directory **node_modules**\`\`\`


`,title:"Esercizio html_14",level:1,content:"# Esercizio html_14\n\n\n&nbsp;\n\nSi richiede di:\n1. Verificare il funzionamento del form e della validazione dei campi\n2. Analizzaere il codice del form e del server in JavaScript\n3. Modificare il form in modo che l'età venga fornita come un ```range```\n4. Modificare il form in modo che sia presente anche il campo `Cognome`\n5. Modificare il codice del server in modo che sia presente **anche** la validazione dell'età, in modo che siano accettati solo valori compresi tra 19 e 31\n6. Fornire il link github alla directory con nome |cognome|_esercizio_html_14 contenente i file aggiornati *form.html* e *form_server.js*\n7. ```NON deve essere presente nel repository la directory **node_modules**```",frontmatter:{},index:102,start:2153,end:2170,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:VP,meta:{slide:{raw:`
# HTML linter

Verifica errori

- Il \`linter\` è uno strumento che analizza il codice sorgente per contrassegnare errori di sintassi, di programmazione, bug, errori stilistici e costrutti sospetti. 
- Il termine deriva dall'[omonimo strumento Unix](https://it.wikipedia.org/wiki/Lint_(software)) che esamina il codice sorgente del linguaggio C
- Pertanto il linter HTML è uno strumento che ci fornisce utili informazioni sulla pagina HTML in esame:
  - errori di sintassi HTML
  - uso di tag obsoleti
  - uso errato di tag
  - uso errato di attributi
  - mancata chiusura di tag
  - ...


- Il lineter è uno strumento fondamentale per lo sviluppatore.
`,title:"HTML linter",level:1,content:`# HTML linter

Verifica errori

- Il \`linter\` è uno strumento che analizza il codice sorgente per contrassegnare errori di sintassi, di programmazione, bug, errori stilistici e costrutti sospetti. 
- Il termine deriva dall'[omonimo strumento Unix](https://it.wikipedia.org/wiki/Lint_(software)) che esamina il codice sorgente del linguaggio C
- Pertanto il linter HTML è uno strumento che ci fornisce utili informazioni sulla pagina HTML in esame:
  - errori di sintassi HTML
  - uso di tag obsoleti
  - uso errato di tag
  - uso errato di attributi
  - mancata chiusura di tag
  - ...


- Il lineter è uno strumento fondamentale per lo sviluppatore.`,frontmatter:{},index:103,start:2171,end:2189,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:XP,meta:{slide:{raw:`
# HTML linter

W3C Markup Validation Service

- Il W3C mette a disposizione un servizio online di validazione (lint) di pagine o siti HTML
- Il servizio è disponibile qui: [https://validator.w3.org/](https://validator.w3.org/)

<br>
<img src="/media/html5_12.png" />
`,title:"HTML linter",level:1,content:`# HTML linter

W3C Markup Validation Service

- Il W3C mette a disposizione un servizio online di validazione (lint) di pagine o siti HTML
- Il servizio è disponibile qui: [https://validator.w3.org/](https://validator.w3.org/)

<br>
<img src="/media/html5_12.png" />`,frontmatter:{},index:104,start:2190,end:2201,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:rH,meta:{slide:{raw:`
# HTML linter

W3C Markup Validation Service

Il servizio opera in 3 modalità:

1. **Validate by URI**: inserendo un URL valida (https://ats.agnelli.it) effettua la validazione del sito
2. **Validate by File Upload**: caricando un file .html effettua la validazione della pagina
3. **Validate by Direct Input**: inserendo il codice HTML manualmente, ne effettua la validazione

<br>
<img src="/media/html5_13.png" />
`,title:"HTML linter",level:1,content:`# HTML linter

W3C Markup Validation Service

Il servizio opera in 3 modalità:

1. **Validate by URI**: inserendo un URL valida (https://ats.agnelli.it) effettua la validazione del sito
2. **Validate by File Upload**: caricando un file .html effettua la validazione della pagina
3. **Validate by Direct Input**: inserendo il codice HTML manualmente, ne effettua la validazione

<br>
<img src="/media/html5_13.png" />`,frontmatter:{},index:105,start:2202,end:2216,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:gH,meta:{slide:{raw:`
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
  - **Warning**: evidenzia potenziali problemi ma non necessariamente errori sintattici`,frontmatter:{},index:106,start:2217,end:2230,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:wH,meta:{slide:{raw:`
# Esercizio html_15

HTML lint

Mediante il servizio di validazione HTML del W3C si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente


`,title:"Esercizio html_15",level:1,content:`# Esercizio html_15

HTML lint

Mediante il servizio di validazione HTML del W3C si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente`,frontmatter:{},index:107,start:2231,end:2242,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:EH,meta:{slide:{raw:`
# HTML linter

Command Line Linter

- Chiaramente per quanto valido sia il linter del W3C, risulta di difficile applicazione nel processo di sviluppo
- Caricare ad ogni modifica la propria pagina risulta particolarmente scomodo e time consuming
- Per tale motivo esistono svariati tipi di linter HTML che operano da linea di comando
- Questi strumenti sono molto versatili e possono essere integrati in pipeline automatiche (github)
- Un linter valido è \`node-w3c-validator\` scirtto in JavaScript che implementa un wrapper al servizio W3C

<br>
<img src="/media/html5_15.png" width="500" />

`,title:"HTML linter",level:1,content:`# HTML linter

Command Line Linter

- Chiaramente per quanto valido sia il linter del W3C, risulta di difficile applicazione nel processo di sviluppo
- Caricare ad ogni modifica la propria pagina risulta particolarmente scomodo e time consuming
- Per tale motivo esistono svariati tipi di linter HTML che operano da linea di comando
- Questi strumenti sono molto versatili e possono essere integrati in pipeline automatiche (github)
- Un linter valido è \`node-w3c-validator\` scirtto in JavaScript che implementa un wrapper al servizio W3C

<br>
<img src="/media/html5_15.png" width="500" />`,frontmatter:{},index:108,start:2243,end:2258,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:NH,meta:{slide:{raw:`
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
<img src="/media/html5_16.png" width="700" />`,frontmatter:{},index:109,start:2259,end:2274,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:VH,meta:{slide:{raw:`
# HTML linter

Command Line Linter

I parametri più importanti sono
- \`-i\`: specifica il file HTML da validare
- \`-f\`: specifica il formate del report generato
  - **txt**: genera un report puramente testuale
  - **lint**: genera un report in formato lint con informazioni addizionali
  - **html**: genera un report in formato HTML esattamente come quello generato dal servizio W3C

`,title:"HTML linter",level:1,content:`# HTML linter

Command Line Linter

I parametri più importanti sono
- \`-i\`: specifica il file HTML da validare
- \`-f\`: specifica il formate del report generato
  - **txt**: genera un report puramente testuale
  - **lint**: genera un report in formato lint con informazioni addizionali
  - **html**: genera un report in formato HTML esattamente come quello generato dal servizio W3C`,frontmatter:{},index:110,start:2275,end:2288,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:e8,meta:{slide:{raw:`
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
<img src="/media/html5_17.png" />`,frontmatter:{},index:111,start:2289,end:2303,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:c8,meta:{slide:{raw:`
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
<img src="/media/html5_18.png" width="650"/>`,frontmatter:{},index:112,start:2304,end:2319,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:v8,meta:{slide:{raw:`
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
<img src="/media/html5_19.png" width="650"/>`,frontmatter:{},index:113,start:2320,end:2334,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:T8,meta:{slide:{raw:`
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
8. Consegnare su github il file |cognome|_esercizio_html_16.html`,frontmatter:{},index:114,start:2335,end:2352,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:E8,meta:{slide:{raw:`
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
4. Consegnare su github il file |cognome|_esercizio_html_17_glossario_corretto.html`,frontmatter:{},index:115,start:2353,end:2366,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:P8,meta:{slide:{raw:`
&nbsp;
<center>
<img src="/media/html5_11.jpg" width="800" />
</center>
`,content:`&nbsp;
<center>
<img src="/media/html5_11.jpg" width="800" />
</center>`,frontmatter:{},index:116,start:2367,end:2373,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",component:uz,meta:{layout:"end"}}],Qe=H8,cs=[{name:"play",path:"/",component:OT,children:[...Qe]},{name:"print",path:"/print",component:lz},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let t=function(n){if(!rs.remote||rs.remote===n.query.password)return!0;if(rs.remote&&n.query.password===void 0){const a=prompt("Enter password");if(rs.remote===a)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};cs.push({path:"/presenter/print",component:()=>An(()=>import("./PresenterPrint-dbe6eb79.js"),["assets/PresenterPrint-dbe6eb79.js","assets/NoteDisplay-cea0612a.js"])}),cs.push({name:"notes",path:"/notes",component:()=>An(()=>import("./NotesView-bc87f516.js"),["assets/NotesView-bc87f516.js","assets/NoteDisplay-cea0612a.js"]),beforeEnter:t}),cs.push({name:"presenter",path:"/presenter/:no",component:()=>An(()=>import("./Presenter-5f4c140d.js"),["assets/Presenter-5f4c140d.js","assets/NoteDisplay-cea0612a.js","assets/DrawingControls-1d54ed4e.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:t}),cs.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const bt=_0({history:gb("/4/html/"),routes:cs});function R8(t,n,{mode:a="replace"}={}){return F({get(){const o=bt.currentRoute.value.query[t];return o==null?n??null:Array.isArray(o)?o.filter(Boolean):o},set(o){st(()=>{bt[A(a)]({query:{...bt.currentRoute.value.query,[t]:o}})})}})}const Qm=J(0);st(()=>{bt.afterEach(async()=>{await st(),Qm.value+=1})});const Ym=J(0),Rt=F(()=>bt.currentRoute.value),Fa=F(()=>Rt.value.query.print!==void 0),F8=F(()=>Rt.value.query.print==="clicks"),mn=F(()=>Rt.value.query.embedded!==void 0),_t=F(()=>Rt.value.path.startsWith("/presenter")),N8=F(()=>Rt.value.path.startsWith("/notes")),_s=F(()=>Fa.value&&!F8.value),Rl=F(()=>Rt.value.query.password),q8=F(()=>!_t.value&&(!Ee.remote||Rl.value===Ee.remote)),Nu=R8("clicks","0"),j8=F(()=>Qe.length-1),D8=F(()=>Rt.value.path),Ue=F(()=>parseInt(D8.value.split(/\//g).slice(-1)[0])||1);F(()=>di(Ue.value));const pt=F(()=>Qe.find(t=>t.path===`${Ue.value}`));F(()=>{var t,n,a;return(a=(n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:a.id});F(()=>{var t,n;return((n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.layout)||(Ue.value===1?"cover":"default")});const Fi=F(()=>Qe.find(t=>t.path===`${Math.min(Qe.length,Ue.value+1)}`)),W8=F(()=>Qe.find(t=>t.path===`${Math.max(1,Ue.value-1)}`)),B8=F(()=>{var t,n;return Qm.value,((n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.__clicksElements)||[]}),Pt=F({get(){if(_s.value)return 99999;let t=+(Nu.value||0);return isNaN(t)&&(t=0),t},set(t){Nu.value=t.toString()}}),Vo=F(()=>{var t,n;return+(((n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.clicks)??B8.value.length)}),V8=F(()=>Ue.value<Qe.length-1||Pt.value<Vo.value),U8=F(()=>Ue.value>1||Pt.value>0),K8=F(()=>Qe.filter(t=>{var n,a;return(a=(n=t.meta)==null?void 0:n.slide)==null?void 0:a.title}).reduce((t,n)=>(Cr(t,n),t),[])),G8=F(()=>Ar(K8.value,pt.value));F(()=>Or(G8.value));const Q8=F(()=>eR(Ym.value,pt.value,W8.value));ke(pt,(t,n)=>{Ym.value=Number(t==null?void 0:t.path)-Number(n==null?void 0:n.path)});function Pn(){Vo.value<=Pt.value?Os():Pt.value+=1}async function Hn(){Pt.value<=0?await Ps():Pt.value-=1}function di(t){return _t.value?`/presenter/${t}`:`/${t}`}function Os(){const t=Math.min(Qe.length,Ue.value+1);return Na(t)}async function Ps(t=!0){const n=Math.max(1,Ue.value-1);await Na(n),t&&Vo.value&&bt.replace({query:{...Rt.value.query,clicks:Vo.value}})}function Na(t,n){return bt.push({path:di(t),query:{...Rt.value.query,clicks:n}})}function Y8(t){const n=J(0),{direction:a,distanceX:o,distanceY:i}=F1(t,{onSwipeStart(l){l.pointerType==="touch"&&(Ss.value||(n.value=vl()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!n.value||Ss.value)return;const r=Math.abs(o.value),c=Math.abs(i.value);r/window.innerWidth>.3||r>100?a.value==="left"?Pn():Hn():(c/window.innerHeight>.4||c>200)&&(a.value==="down"?Ps():Os())}})}async function Fl(){const{saveAs:t}=await An(()=>import("./FileSaver.min-23a5d44b.js").then(n=>n.F),[]);t(typeof Ee.download=="string"?Ee.download:Ee.exportFilename?`${Ee.exportFilename}.pdf`:"/4/html/slidev-exported.pdf",`${Ee.title}.pdf`)}async function Z8(t){var n,a;if(t==null){const o=(a=(n=pt.value)==null?void 0:n.meta)==null?void 0:a.slide;if(!(o!=null&&o.filepath))return!1;t=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function Cr(t,n,a=1){var i,l,r,c,u;const o=(l=(i=n.meta)==null?void 0:i.slide)==null?void 0:l.level;o&&o>a&&t.length>0?Cr(t[t.length-1].children,n,a+1):t.push({children:[],level:a,path:n.path,hideInToc:!!((r=n.meta)!=null&&r.hideInToc),title:(u=(c=n.meta)==null?void 0:c.slide)==null?void 0:u.title})}function Ar(t,n,a=!1,o){return t.map(i=>{const l={...i,active:i.path===(n==null?void 0:n.path),hasActiveParent:a};return l.children.length>0&&(l.children=Ar(l.children,n,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function Or(t,n=1){return t.filter(a=>!a.hideInToc).map(a=>({...a,children:Or(a.children,n+1)}))}const J8={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function X8(t,n=!1){if(!t||(typeof t=="string"&&(t={name:t}),!t.name))return;let a=t.name.includes("|")?t.name:J8[t.name]||t.name;if(a.includes("|")){const[o,i]=a.split("|").map(l=>l.trim());a=n?i:o}if(a)return{...t,name:a}}function eR(t,n,a){var i,l;let o=t>0?(i=a==null?void 0:a.meta)==null?void 0:i.transition:(l=n==null?void 0:n.meta)==null?void 0:l.transition;return o||(o=Ee.transition),X8(o,t<0)}function tR(){const t=Ee.titleTemplate.replace("%s",Ee.title||"Slidev");qd({title:t,htmlAttrs:Ee.htmlAttrs}),fk(`${t} - shared`),vk(`${t} - drawings`);const n=`${location.origin}_${rk()}`;function a(){N8.value||!_t.value&&!lk.includes(location.host.split(":")[0])||(_t.value?(Ya("page",+Ue.value),Ya("clicks",Pt.value)):(Ya("viewerPage",+Ue.value),Ya("viewerClicks",Pt.value)),Ya("lastUpdate",{id:n,type:_t.value?"presenter":"viewer",time:new Date().getTime()}))}bt.afterEach(a),ke(Pt,a),hk(o=>{var l;bt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=o.lastUpdate)==null?void 0:l.type)==="presenter"&&(+o.page!=+Ue.value||+Pt.value!=+o.clicks)&&bt.replace({path:di(o.page),query:{...bt.currentRoute.value.query,clicks:o.clicks||0}})})}const nR=Pe({__name:"App",setup(t){return z(S),tR(),(n,a)=>{const o=va("RouterView"),i=va("StarportCarrier");return b(),oe(Ce,null,[O(o),O(i)],64)}}}),aR=C(nR,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/App.vue"]]);function Ni(t){return t!==null&&typeof t=="object"}function Nl(t,n,a=".",o){if(!Ni(n))return Nl(t,{},a,o);const i=Object.assign({},n);for(const l in t){if(l==="__proto__"||l==="constructor")continue;const r=t[l];r!=null&&(o&&o(i,l,r,a)||(Array.isArray(r)&&Array.isArray(i[l])?i[l]=[...r,...i[l]]:Ni(r)&&Ni(i[l])?i[l]=Nl(r,i[l],(a?`${a}.`:"")+l.toString(),o):i[l]=r))}return i}function sR(t){return(...n)=>n.reduce((a,o)=>Nl(a,o,"",t),{})}const oR=sR(),Zm=1/60*1e3,iR=typeof performance<"u"?()=>performance.now():()=>Date.now(),Jm=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(iR()),Zm);function lR(t){let n=[],a=[],o=0,i=!1,l=!1;const r=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const m=d&&i,f=m?n:a;return p&&r.add(u),f.indexOf(u)===-1&&(f.push(u),m&&i&&(o=n.length)),u},cancel:u=>{const p=a.indexOf(u);p!==-1&&a.splice(p,1),r.delete(u)},process:u=>{if(i){l=!0;return}if(i=!0,[n,a]=[a,n],a.length=0,o=n.length,o)for(let p=0;p<o;p++){const d=n[p];d(u),r.has(d)&&(c.schedule(d),t())}i=!1,l&&(l=!1,c.process(u))}};return c}const rR=40;let ql=!0,Hs=!1,jl=!1;const Pa={delta:0,timestamp:0},Vs=["read","update","preRender","render","postRender"],mi=Vs.reduce((t,n)=>(t[n]=lR(()=>Hs=!0),t),{}),Dl=Vs.reduce((t,n)=>{const a=mi[n];return t[n]=(o,i=!1,l=!1)=>(Hs||pR(),a.schedule(o,i,l)),t},{}),cR=Vs.reduce((t,n)=>(t[n]=mi[n].cancel,t),{});Vs.reduce((t,n)=>(t[n]=()=>mi[n].process(Pa),t),{});const uR=t=>mi[t].process(Pa),Xm=t=>{Hs=!1,Pa.delta=ql?Zm:Math.max(Math.min(t-Pa.timestamp,rR),1),Pa.timestamp=t,jl=!0,Vs.forEach(uR),jl=!1,Hs&&(ql=!1,Jm(Xm))},pR=()=>{Hs=!0,ql=!0,jl||Jm(Xm)},ef=()=>Pa;function tf(t,n){var a={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(a[o[i]]=t[o[i]]);return a}var Pr=function(){},Rs=function(){};Pr=function(t,n){!t&&typeof console<"u"&&console.warn(n)},Rs=function(t,n){if(!t)throw new Error(n)};const Wl=(t,n,a)=>Math.min(Math.max(a,t),n),qi=.001,dR=.01,qu=10,mR=.05,fR=1;function hR({duration:t=800,bounce:n=.25,velocity:a=0,mass:o=1}){let i,l;Pr(t<=qu*1e3,"Spring duration must be 10 seconds or less");let r=1-n;r=Wl(mR,fR,r),t=Wl(dR,qu,t/1e3),r<1?(i=p=>{const d=p*r,m=d*t,f=d-a,h=Bl(p,r),g=Math.exp(-m);return qi-f/h*g},l=p=>{const m=p*r*t,f=m*a+a,h=Math.pow(r,2)*Math.pow(p,2)*t,g=Math.exp(-m),y=Bl(Math.pow(p,2),r);return(-i(p)+qi>0?-1:1)*((f-h)*g)/y}):(i=p=>{const d=Math.exp(-p*t),m=(p-a)*t+1;return-qi+d*m},l=p=>{const d=Math.exp(-p*t),m=(a-p)*(t*t);return d*m});const c=5/t,u=_R(i,l,c);if(t=t*1e3,isNaN(u))return{stiffness:100,damping:10,duration:t};{const p=Math.pow(u,2)*o;return{stiffness:p,damping:r*2*Math.sqrt(o*p),duration:t}}}const gR=12;function _R(t,n,a){let o=a;for(let i=1;i<gR;i++)o=o-t(o)/n(o);return o}function Bl(t,n){return t*Math.sqrt(1-n*n)}const vR=["duration","bounce"],kR=["stiffness","damping","mass"];function ju(t,n){return n.some(a=>t[a]!==void 0)}function bR(t){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!ju(t,kR)&&ju(t,vR)){const a=hR(t);n=Object.assign(Object.assign(Object.assign({},n),a),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function Hr(t){var{from:n=0,to:a=1,restSpeed:o=2,restDelta:i}=t,l=tf(t,["from","to","restSpeed","restDelta"]);const r={done:!1,value:n};let{stiffness:c,damping:u,mass:p,velocity:d,duration:m,isResolvedFromDuration:f}=bR(l),h=Du,g=Du;function y(){const x=d?-(d/1e3):0,T=a-n,$=u/(2*Math.sqrt(c*p)),v=Math.sqrt(c/p)/1e3;if(i===void 0&&(i=Math.min(Math.abs(a-n)/100,.4)),$<1){const E=Bl(v,$);h=M=>{const P=Math.exp(-$*v*M);return a-P*((x+$*v*T)/E*Math.sin(E*M)+T*Math.cos(E*M))},g=M=>{const P=Math.exp(-$*v*M);return $*v*P*(Math.sin(E*M)*(x+$*v*T)/E+T*Math.cos(E*M))-P*(Math.cos(E*M)*(x+$*v*T)-E*T*Math.sin(E*M))}}else if($===1)h=E=>a-Math.exp(-v*E)*(T+(x+v*T)*E);else{const E=v*Math.sqrt($*$-1);h=M=>{const P=Math.exp(-$*v*M),B=Math.min(E*M,300);return a-P*((x+$*v*T)*Math.sinh(B)+E*T*Math.cosh(B))/E}}}return y(),{next:x=>{const T=h(x);if(f)r.done=x>=m;else{const $=g(x)*1e3,v=Math.abs($)<=o,E=Math.abs(a-T)<=i;r.done=v&&E}return r.value=r.done?a:T,r},flipTarget:()=>{d=-d,[n,a]=[a,n],y()}}}Hr.needsInterpolation=(t,n)=>typeof t=="string"||typeof n=="string";const Du=t=>0,nf=(t,n,a)=>{const o=n-t;return o===0?1:(a-t)/o},Rr=(t,n,a)=>-a*t+a*n+t,af=(t,n)=>a=>Math.max(Math.min(a,n),t),vs=t=>t%1?Number(t.toFixed(5)):t,Fs=/(-)?([\d]*\.?[\d])+/g,Vl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,yR=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Us(t){return typeof t=="string"}const Ks={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ks=Object.assign(Object.assign({},Ks),{transform:af(0,1)}),po=Object.assign(Object.assign({},Ks),{default:1}),Fr=t=>({test:n=>Us(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Gn=Fr("deg"),bs=Fr("%"),ye=Fr("px"),Wu=Object.assign(Object.assign({},bs),{parse:t=>bs.parse(t)/100,transform:t=>bs.transform(t*100)}),Nr=(t,n)=>a=>!!(Us(a)&&yR.test(a)&&a.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(a,n)),sf=(t,n,a)=>o=>{if(!Us(o))return o;const[i,l,r,c]=o.match(Fs);return{[t]:parseFloat(i),[n]:parseFloat(l),[a]:parseFloat(r),alpha:c!==void 0?parseFloat(c):1}},la={test:Nr("hsl","hue"),parse:sf("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:a,alpha:o=1})=>"hsla("+Math.round(t)+", "+bs.transform(vs(n))+", "+bs.transform(vs(a))+", "+vs(ks.transform(o))+")"},wR=af(0,255),ji=Object.assign(Object.assign({},Ks),{transform:t=>Math.round(wR(t))}),Ln={test:Nr("rgb","red"),parse:sf("red","green","blue"),transform:({red:t,green:n,blue:a,alpha:o=1})=>"rgba("+ji.transform(t)+", "+ji.transform(n)+", "+ji.transform(a)+", "+vs(ks.transform(o))+")"};function xR(t){let n="",a="",o="",i="";return t.length>5?(n=t.substr(1,2),a=t.substr(3,2),o=t.substr(5,2),i=t.substr(7,2)):(n=t.substr(1,1),a=t.substr(2,1),o=t.substr(3,1),i=t.substr(4,1),n+=n,a+=a,o+=o,i+=i),{red:parseInt(n,16),green:parseInt(a,16),blue:parseInt(o,16),alpha:i?parseInt(i,16)/255:1}}const Ul={test:Nr("#"),parse:xR,transform:Ln.transform},gt={test:t=>Ln.test(t)||Ul.test(t)||la.test(t),parse:t=>Ln.test(t)?Ln.parse(t):la.test(t)?la.parse(t):Ul.parse(t),transform:t=>Us(t)?t:t.hasOwnProperty("red")?Ln.transform(t):la.transform(t)},of="${c}",lf="${n}";function TR(t){var n,a,o,i;return isNaN(t)&&Us(t)&&((a=(n=t.match(Fs))===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:0)+((i=(o=t.match(Vl))===null||o===void 0?void 0:o.length)!==null&&i!==void 0?i:0)>0}function rf(t){typeof t=="number"&&(t=`${t}`);const n=[];let a=0;const o=t.match(Vl);o&&(a=o.length,t=t.replace(Vl,of),n.push(...o.map(gt.parse)));const i=t.match(Fs);return i&&(t=t.replace(Fs,lf),n.push(...i.map(Ks.parse))),{values:n,numColors:a,tokenised:t}}function cf(t){return rf(t).values}function uf(t){const{values:n,numColors:a,tokenised:o}=rf(t),i=n.length;return l=>{let r=o;for(let c=0;c<i;c++)r=r.replace(c<a?of:lf,c<a?gt.transform(l[c]):vs(l[c]));return r}}const $R=t=>typeof t=="number"?0:t;function zR(t){const n=cf(t);return uf(t)(n.map($R))}const Gs={test:TR,parse:cf,createTransformer:uf,getAnimatableNone:zR},MR=new Set(["brightness","contrast","saturate","opacity"]);function LR(t){let[n,a]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[o]=a.match(Fs)||[];if(!o)return t;const i=a.replace(o,"");let l=MR.has(n)?1:0;return o!==a&&(l*=100),n+"("+l+i+")"}const IR=/([a-z-]*)\(.*?\)/g,Kl=Object.assign(Object.assign({},Gs),{getAnimatableNone:t=>{const n=t.match(IR);return n?n.map(LR).join(" "):t}});function Di(t,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(n-t)*6*a:a<1/2?n:a<2/3?t+(n-t)*(2/3-a)*6:t}function Bu({hue:t,saturation:n,lightness:a,alpha:o}){t/=360,n/=100,a/=100;let i=0,l=0,r=0;if(!n)i=l=r=a;else{const c=a<.5?a*(1+n):a+n-a*n,u=2*a-c;i=Di(u,c,t+1/3),l=Di(u,c,t),r=Di(u,c,t-1/3)}return{red:Math.round(i*255),green:Math.round(l*255),blue:Math.round(r*255),alpha:o}}const ER=(t,n,a)=>{const o=t*t,i=n*n;return Math.sqrt(Math.max(0,a*(i-o)+o))},SR=[Ul,Ln,la],Vu=t=>SR.find(n=>n.test(t)),Uu=t=>`'${t}' is not an animatable color. Use the equivalent color code instead.`,pf=(t,n)=>{let a=Vu(t),o=Vu(n);Rs(!!a,Uu(t)),Rs(!!o,Uu(n));let i=a.parse(t),l=o.parse(n);a===la&&(i=Bu(i),a=Ln),o===la&&(l=Bu(l),o=Ln);const r=Object.assign({},i);return c=>{for(const u in r)u!=="alpha"&&(r[u]=ER(i[u],l[u],c));return r.alpha=Rr(i.alpha,l.alpha,c),a.transform(r)}},CR=t=>typeof t=="number",AR=(t,n)=>a=>n(t(a)),df=(...t)=>t.reduce(AR);function mf(t,n){return CR(t)?a=>Rr(t,n,a):gt.test(t)?pf(t,n):hf(t,n)}const ff=(t,n)=>{const a=[...t],o=a.length,i=t.map((l,r)=>mf(l,n[r]));return l=>{for(let r=0;r<o;r++)a[r]=i[r](l);return a}},OR=(t,n)=>{const a=Object.assign(Object.assign({},t),n),o={};for(const i in a)t[i]!==void 0&&n[i]!==void 0&&(o[i]=mf(t[i],n[i]));return i=>{for(const l in o)a[l]=o[l](i);return a}};function Ku(t){const n=Gs.parse(t),a=n.length;let o=0,i=0,l=0;for(let r=0;r<a;r++)o||typeof n[r]=="number"?o++:n[r].hue!==void 0?l++:i++;return{parsed:n,numNumbers:o,numRGB:i,numHSL:l}}const hf=(t,n)=>{const a=Gs.createTransformer(n),o=Ku(t),i=Ku(n);return o.numHSL===i.numHSL&&o.numRGB===i.numRGB&&o.numNumbers>=i.numNumbers?df(ff(o.parsed,i.parsed),a):(Pr(!0,`Complex values '${t}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),r=>`${r>0?n:t}`)},PR=(t,n)=>a=>Rr(t,n,a);function HR(t){if(typeof t=="number")return PR;if(typeof t=="string")return gt.test(t)?pf:hf;if(Array.isArray(t))return ff;if(typeof t=="object")return OR}function RR(t,n,a){const o=[],i=a||HR(t[0]),l=t.length-1;for(let r=0;r<l;r++){let c=i(t[r],t[r+1]);if(n){const u=Array.isArray(n)?n[r]:n;c=df(u,c)}o.push(c)}return o}function FR([t,n],[a]){return o=>a(nf(t,n,o))}function NR(t,n){const a=t.length,o=a-1;return i=>{let l=0,r=!1;if(i<=t[0]?r=!0:i>=t[o]&&(l=o-1,r=!0),!r){let u=1;for(;u<a&&!(t[u]>i||u===o);u++);l=u-1}const c=nf(t[l],t[l+1],i);return n[l](c)}}function gf(t,n,{clamp:a=!0,ease:o,mixer:i}={}){const l=t.length;Rs(l===n.length,"Both input and output ranges must be the same length"),Rs(!o||!Array.isArray(o)||o.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[l-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());const r=RR(n,o,i),c=l===2?FR(t,r):NR(t,r);return a?u=>c(Wl(t[0],t[l-1],u)):c}const fi=t=>n=>1-t(1-n),qr=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,qR=t=>n=>Math.pow(n,t),_f=t=>n=>n*n*((t+1)*n-t),jR=t=>{const n=_f(t);return a=>(a*=2)<1?.5*n(a):.5*(2-Math.pow(2,-10*(a-1)))},vf=1.525,DR=4/11,WR=8/11,BR=9/10,kf=t=>t,jr=qR(2),VR=fi(jr),bf=qr(jr),yf=t=>1-Math.sin(Math.acos(t)),wf=fi(yf),UR=qr(wf),Dr=_f(vf),KR=fi(Dr),GR=qr(Dr),QR=jR(vf),YR=4356/361,ZR=35442/1805,JR=16061/1805,Uo=t=>{if(t===1||t===0)return t;const n=t*t;return t<DR?7.5625*n:t<WR?9.075*n-9.9*t+3.4:t<BR?YR*n-ZR*t+JR:10.8*t*t-20.52*t+10.72},XR=fi(Uo),eF=t=>t<.5?.5*(1-Uo(1-t*2)):.5*Uo(t*2-1)+.5;function tF(t,n){return t.map(()=>n||bf).splice(0,t.length-1)}function nF(t){const n=t.length;return t.map((a,o)=>o!==0?o/(n-1):0)}function aF(t,n){return t.map(a=>a*n)}function wo({from:t=0,to:n=1,ease:a,offset:o,duration:i=300}){const l={done:!1,value:t},r=Array.isArray(n)?n:[t,n],c=aF(o&&o.length===r.length?o:nF(r),i);function u(){return gf(c,r,{ease:Array.isArray(a)?a:tF(r,a)})}let p=u();return{next:d=>(l.value=p(d),l.done=d>=i,l),flipTarget:()=>{r.reverse(),p=u()}}}function sF({velocity:t=0,from:n=0,power:a=.8,timeConstant:o=350,restDelta:i=.5,modifyTarget:l}){const r={done:!1,value:n};let c=a*t;const u=n+c,p=l===void 0?u:l(u);return p!==u&&(c=p-n),{next:d=>{const m=-c*Math.exp(-d/o);return r.done=!(m>i||m<-i),r.value=r.done?p:p+m,r},flipTarget:()=>{}}}const Gu={keyframes:wo,spring:Hr,decay:sF};function oF(t){if(Array.isArray(t.to))return wo;if(Gu[t.type])return Gu[t.type];const n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?wo:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?Hr:wo}function xf(t,n,a=0){return t-n-a}function iF(t,n,a=0,o=!0){return o?xf(n+-t,n,a):n-(t-n)+a}function lF(t,n,a,o){return o?t>=n+a:t<=-a}const rF=t=>{const n=({delta:a})=>t(a);return{start:()=>Dl.update(n,!0),stop:()=>cR.update(n)}};function Tf(t){var n,a,{from:o,autoplay:i=!0,driver:l=rF,elapsed:r=0,repeat:c=0,repeatType:u="loop",repeatDelay:p=0,onPlay:d,onStop:m,onComplete:f,onRepeat:h,onUpdate:g}=t,y=tf(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:x}=y,T,$=0,v=y.duration,E,M=!1,P=!0,B;const R=oF(y);!((a=(n=R).needsInterpolation)===null||a===void 0)&&a.call(n,o,x)&&(B=gf([0,100],[o,x],{clamp:!1}),o=0,x=100);const K=R(Object.assign(Object.assign({},y),{from:o,to:x}));function ie(){$++,u==="reverse"?(P=$%2===0,r=iF(r,v,p,P)):(r=xf(r,v,p),u==="mirror"&&K.flipTarget()),M=!1,h&&h()}function me(){T.stop(),f&&f()}function X(be){if(P||(be=-be),r+=be,!M){const we=K.next(Math.max(0,r));E=we.value,B&&(E=B(E)),M=P?we.done:r<=0}g==null||g(E),M&&($===0&&(v??(v=r)),$<c?lF(r,v,p,P)&&ie():me())}function ve(){d==null||d(),T=l(X),T.start()}return i&&ve(),{stop:()=>{m==null||m(),T.stop()}}}function $f(t,n){return n?t*(1e3/n):0}function cF({from:t=0,velocity:n=0,min:a,max:o,power:i=.8,timeConstant:l=750,bounceStiffness:r=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:p,driver:d,onUpdate:m,onComplete:f,onStop:h}){let g;function y(v){return a!==void 0&&v<a||o!==void 0&&v>o}function x(v){return a===void 0?o:o===void 0||Math.abs(a-v)<Math.abs(o-v)?a:o}function T(v){g==null||g.stop(),g=Tf(Object.assign(Object.assign({},v),{driver:d,onUpdate:E=>{var M;m==null||m(E),(M=v.onUpdate)===null||M===void 0||M.call(v,E)},onComplete:f,onStop:h}))}function $(v){T(Object.assign({type:"spring",stiffness:r,damping:c,restDelta:u},v))}if(y(t))$({from:t,velocity:n,to:x(t)});else{let v=i*n+t;typeof p<"u"&&(v=p(v));const E=x(v),M=E===a?-1:1;let P,B;const R=K=>{P=B,B=K,n=$f(K-P,ef().delta),(M===1&&K>E||M===-1&&K<E)&&$({from:K,to:E,velocity:n})};T({type:"decay",from:t,velocity:n,timeConstant:l,power:i,restDelta:u,modifyTarget:p,onUpdate:y(v)?R:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const zf=(t,n)=>1-3*n+3*t,Mf=(t,n)=>3*n-6*t,Lf=t=>3*t,Ko=(t,n,a)=>((zf(n,a)*t+Mf(n,a))*t+Lf(n))*t,If=(t,n,a)=>3*zf(n,a)*t*t+2*Mf(n,a)*t+Lf(n),uF=1e-7,pF=10;function dF(t,n,a,o,i){let l,r,c=0;do r=n+(a-n)/2,l=Ko(r,o,i)-t,l>0?a=r:n=r;while(Math.abs(l)>uF&&++c<pF);return r}const mF=8,fF=.001;function hF(t,n,a,o){for(let i=0;i<mF;++i){const l=If(n,a,o);if(l===0)return n;const r=Ko(n,a,o)-t;n-=r/l}return n}const xo=11,mo=1/(xo-1);function gF(t,n,a,o){if(t===n&&a===o)return kf;const i=new Float32Array(xo);for(let r=0;r<xo;++r)i[r]=Ko(r*mo,t,a);function l(r){let c=0,u=1;const p=xo-1;for(;u!==p&&i[u]<=r;++u)c+=mo;--u;const d=(r-i[u])/(i[u+1]-i[u]),m=c+d*mo,f=If(m,t,a);return f>=fF?hF(r,m,t,a):f===0?m:dF(r,c,c+mo,t,a)}return r=>r===0||r===1?r:Ko(l(r),n,o)}const Wi={};class _F{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,a,o){if(this.subscriptions.size)for(const i of this.subscriptions)i(n,a,o)}clear(){this.subscriptions.clear()}}function Qu(t){return!isNaN(parseFloat(t))}class vF{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new _F,this.canTrackVelocity=!1,this.updateAndNotify=a=>{this.prev=this.current,this.current=a;const{delta:o,timestamp:i}=ef();this.lastUpdated!==i&&(this.timeDelta=o,this.lastUpdated=i),Dl.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Dl.postRender(this.velocityCheck),this.velocityCheck=({timestamp:a})=>{this.canTrackVelocity||(this.canTrackVelocity=Qu(this.current)),a!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=Qu(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?$f(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(a=>{const{stop:o}=n(a);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function kF(t){return new vF(t)}const{isArray:bF}=Array;function yF(){const t=J({}),n=o=>{const i=l=>{t.value[l]&&(t.value[l].stop(),t.value[l].destroy(),delete t.value[l])};o?bF(o)?o.forEach(i):i(o):Object.keys(t.value).forEach(i)},a=(o,i,l)=>{if(t.value[o])return t.value[o];const r=kF(i);return r.onChange(c=>l[o]=c),t.value[o]=r,r};return qk(n),{motionValues:t,get:a,stop:n}}function wF(t){return Array.isArray(t)}function Qn(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Bi(t){return{type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function xF(t){return{type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}}function Vi(){return{type:"keyframes",ease:"linear",duration:300}}function TF(t){return{type:"keyframes",duration:800,values:t}}const Yu={default:xF,x:Qn,y:Qn,z:Qn,rotate:Qn,rotateX:Qn,rotateY:Qn,rotateZ:Qn,scaleX:Bi,scaleY:Bi,scale:Bi,backgroundColor:Vi,color:Vi,opacity:Vi};function Ef(t,n){let a;return wF(n)?a=TF:a=Yu[t]||Yu.default,{to:n,...a(n)}}const Zu={...Ks,transform:Math.round},Sf={color:gt,backgroundColor:gt,outlineColor:gt,fill:gt,stroke:gt,borderColor:gt,borderTopColor:gt,borderRightColor:gt,borderBottomColor:gt,borderLeftColor:gt,borderWidth:ye,borderTopWidth:ye,borderRightWidth:ye,borderBottomWidth:ye,borderLeftWidth:ye,borderRadius:ye,radius:ye,borderTopLeftRadius:ye,borderTopRightRadius:ye,borderBottomRightRadius:ye,borderBottomLeftRadius:ye,width:ye,maxWidth:ye,height:ye,maxHeight:ye,size:ye,top:ye,right:ye,bottom:ye,left:ye,padding:ye,paddingTop:ye,paddingRight:ye,paddingBottom:ye,paddingLeft:ye,margin:ye,marginTop:ye,marginRight:ye,marginBottom:ye,marginLeft:ye,rotate:Gn,rotateX:Gn,rotateY:Gn,rotateZ:Gn,scale:po,scaleX:po,scaleY:po,scaleZ:po,skew:Gn,skewX:Gn,skewY:Gn,distance:ye,translateX:ye,translateY:ye,translateZ:ye,x:ye,y:ye,z:ye,perspective:ye,transformPerspective:ye,opacity:ks,originX:Wu,originY:Wu,originZ:ye,zIndex:Zu,filter:Kl,WebkitFilter:Kl,fillOpacity:ks,strokeOpacity:ks,numOctaves:Zu},Wr=t=>Sf[t];function Cf(t,n){return n&&typeof t=="number"&&n.transform?n.transform(t):t}function $F(t,n){let a=Wr(t);return a!==Kl&&(a=Gs),a.getAnimatableNone?a.getAnimatableNone(n):void 0}const zF={linear:kf,easeIn:jr,easeInOut:bf,easeOut:VR,circIn:yf,circInOut:UR,circOut:wf,backIn:Dr,backInOut:GR,backOut:KR,anticipate:QR,bounceIn:XR,bounceInOut:eF,bounceOut:Uo};function Ju(t){if(Array.isArray(t)){const[n,a,o,i]=t;return gF(n,a,o,i)}else if(typeof t=="string")return zF[t];return t}function MF(t){return Array.isArray(t)&&typeof t[0]!="number"}function Xu(t,n){return t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Gs.test(n)&&!n.startsWith("url("))}function LF(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function IF({ease:t,times:n,delay:a,...o}){const i={...o};return n&&(i.offset=n),t&&(i.ease=MF(t)?t.map(Ju):Ju(t)),a&&(i.elapsed=-a),i}function EF(t,n,a){return Array.isArray(n.to)&&(t.duration||(t.duration=800)),LF(n),SF(t)||(t={...t,...Ef(a,n.to)}),{...n,...IF(t)}}function SF({delay:t,repeat:n,repeatType:a,repeatDelay:o,from:i,...l}){return!!Object.keys(l).length}function CF(t,n){return t[n]||t.default||t}function AF(t,n,a,o,i){const l=CF(o,t);let r=l.from===null||l.from===void 0?n.get():l.from;const c=Xu(t,a);r==="none"&&c&&typeof a=="string"&&(r=$F(t,a));const u=Xu(t,r);function p(m){const f={from:r,to:a,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:h=>n.set(h)};return l.type==="inertia"||l.type==="decay"?cF({...f,...l}):Tf({...EF(l,f,t),onUpdate:h=>{f.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),i&&i(),m&&m()}})}function d(m){return n.set(a),o.onComplete&&o.onComplete(),i&&i(),m&&m(),{stop:()=>{}}}return!u||!c||l.type===!1?d:p}function OF(){const{motionValues:t,stop:n,get:a}=yF();return{motionValues:t,stop:n,push:(i,l,r,c={},u)=>{const p=r[i],d=a(i,p,r);if(c&&c.immediate){d.set(l);return}const m=AF(i,d,l,c,u);d.start(m)}}}function PF(t,n={},{motionValues:a,push:o,stop:i}=OF()){const l=A(n),r=J(!1);ke(a,m=>{r.value=Object.values(m).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const c=m=>{if(!l||!l[m])throw new Error(`The variant ${m} does not exist.`);return l[m]},u=m=>(typeof m=="string"&&(m=c(m)),Promise.all(Object.entries(m).map(([f,h])=>{if(f!=="transition")return new Promise(g=>o(f,h,t,m.transition||Ef(f,m[f]),g))}).filter(Boolean)));return{isAnimating:r,apply:u,set:m=>{const f=_l(m)?m:c(m);Object.entries(f).forEach(([h,g])=>{h!=="transition"&&o(h,g,t,{immediate:!0})})},leave:async m=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){m();return}await u(f),m()},stop:i}}const Br=typeof window<"u",HF=()=>Br&&window.onpointerdown===null,RF=()=>Br&&window.ontouchstart===null,FF=()=>Br&&window.onmousedown===null;function NF({target:t,state:n,variants:a,apply:o}){const i=A(a),l=J(!1),r=J(!1),c=J(!1),u=F(()=>{let d=[];return i&&(i.hovered&&(d=[...d,...Object.keys(i.hovered)]),i.tapped&&(d=[...d,...Object.keys(i.tapped)]),i.focused&&(d=[...d,...Object.keys(i.focused)])),d}),p=F(()=>{const d={};Object.assign(d,n.value),l.value&&i.hovered&&Object.assign(d,i.hovered),r.value&&i.tapped&&Object.assign(d,i.tapped),c.value&&i.focused&&Object.assign(d,i.focused);for(const m in d)u.value.includes(m)||delete d[m];return d});i.hovered&&(Te(t,"mouseenter",()=>l.value=!0),Te(t,"mouseleave",()=>{l.value=!1,r.value=!1}),Te(t,"mouseout",()=>{l.value=!1,r.value=!1})),i.tapped&&(FF()&&(Te(t,"mousedown",()=>r.value=!0),Te(t,"mouseup",()=>r.value=!1)),HF()&&(Te(t,"pointerdown",()=>r.value=!0),Te(t,"pointerup",()=>r.value=!1)),RF()&&(Te(t,"touchstart",()=>r.value=!0),Te(t,"touchend",()=>r.value=!1))),i.focused&&(Te(t,"focus",()=>c.value=!0),Te(t,"blur",()=>c.value=!1)),ke(p,o)}function qF({set:t,target:n,variants:a,variant:o}){const i=A(a);ke(()=>n,()=>{i&&(i.initial&&t("initial"),i.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function jF({state:t,apply:n}){ke(t,a=>{a&&n(a)},{immediate:!0})}function DF({target:t,variants:n,variant:a}){const o=A(n);o&&(o.visible||o.visibleOnce)&&A1(t,([{isIntersecting:i}])=>{o.visible?i?a.value="visible":a.value="initial":o.visibleOnce&&(i&&a.value!=="visibleOnce"?a.value="visibleOnce":a.value||(a.value="initial"))})}function WF(t,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&qF(t),n.syncVariants&&jF(t),n.visibilityHooks&&DF(t),n.eventListeners&&NF(t)}function Af(t={}){const n=Be({...t}),a=J({});return ke(n,()=>{const o={};for(const[i,l]of Object.entries(n)){const r=Wr(i),c=Cf(l,r);o[i]=c}a.value=o},{immediate:!0,deep:!0}),{state:n,style:a}}function Vr(t,n){ke(()=>ot(t),a=>{a&&n(a)},{immediate:!0})}const BF={x:"translateX",y:"translateY",z:"translateZ"};function Of(t={},n=!0){const a=Be({...t}),o=J("");return ke(a,i=>{let l="",r=!1;if(n&&(i.x||i.y||i.z)){const c=[i.x||0,i.y||0,i.z||0].map(ye.transform).join(",");l+=`translate3d(${c}) `,r=!0}for(const[c,u]of Object.entries(i)){if(n&&(c==="x"||c==="y"||c==="z"))continue;const p=Wr(c),d=Cf(u,p);l+=`${BF[c]||c}(${d}) `}n&&!r&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:a,transform:o}}const VF=["","X","Y","Z"],UF=["perspective","translate","scale","rotate","skew"],Pf=["transformPerspective","x","y","z"];UF.forEach(t=>{VF.forEach(n=>{const a=t+n;Pf.push(a)})});const KF=new Set(Pf);function Ur(t){return KF.has(t)}const GF=new Set(["originX","originY","originZ"]);function Hf(t){return GF.has(t)}function QF(t){const n={},a={};return Object.entries(t).forEach(([o,i])=>{Ur(o)||Hf(o)?n[o]=i:a[o]=i}),{transform:n,style:a}}function Rf(t){const{transform:n,style:a}=QF(t),{transform:o}=Of(n),{style:i}=Af(a);return o.value&&(i.value.transform=o.value),i.value}function YF(t,n){let a,o;const{state:i,style:l}=Af();return Vr(t,r=>{o=r;for(const c of Object.keys(Sf))r.style[c]===null||r.style[c]===""||Ur(c)||Hf(c)||(i[c]=r.style[c]);a&&Object.entries(a).forEach(([c,u])=>r.style[c]=u),n&&n(i)}),ke(l,r=>{if(!o){a=r;return}for(const c in r)o.style[c]=r[c]},{immediate:!0}),{style:i}}function ZF(t){const n=t.trim().split(/\) |\)/);if(n.length===1)return{};const a=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,i)=>{if(!i)return o;const[l,r]=i.split("("),u=r.split(",").map(d=>a(d.endsWith(")")?d.replace(")",""):d.trim())),p=u.length===1?u[0]:u;return{...o,[l]:p}},{})}function JF(t,n){Object.entries(ZF(n)).forEach(([a,o])=>{const i=["x","y","z"];if(a==="translate3d"){if(o===0){i.forEach(l=>t[l]=0);return}o.forEach((l,r)=>t[i[r]]=l);return}if(o=parseFloat(o),a==="translateX"){t.x=o;return}if(a==="translateY"){t.y=o;return}if(a==="translateZ"){t.z=o;return}t[a]=o})}function XF(t,n){let a,o;const{state:i,transform:l}=Of();return Vr(t,r=>{o=r,r.style.transform&&JF(i,r.style.transform),a&&(r.style.transform=a),n&&n(i)}),ke(l,r=>{if(!o){a=r;return}o.style.transform=r},{immediate:!0}),{transform:i}}function eN(t,n){const a=Be({}),o=r=>Object.entries(r).forEach(([c,u])=>a[c]=u),{style:i}=YF(t,o),{transform:l}=XF(t,o);return ke(a,r=>{Object.entries(r).forEach(([c,u])=>{const p=Ur(c)?l:i;p[c]&&p[c]===u||(p[c]=u)})},{immediate:!0,deep:!0}),Vr(t,()=>n&&o(n)),{motionProperties:a,style:i,transform:l}}function tN(t={}){const n=A(t),a=J();return{state:F(()=>{if(a.value)return n[a.value]}),variant:a}}function Ff(t,n={},a){const{motionProperties:o}=eN(t),{variant:i,state:l}=tN(n),r=PF(o,n),c={target:t,variant:i,variants:n,state:l,motionProperties:o,...r};return WF(c,a),c}const nN=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function aN(t,n){const a=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};a&&(a.variants&&_l(a.variants)&&(n.value={...n.value,...a.variants}),nN.forEach(o=>{if(o==="delay"){if(a&&a[o]&&typeof a[o]=="number"){const i=a[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:i,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:i,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:i,...n.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),a&&a[o]&&_l(a[o])&&(n.value[o]=a[o])}))}function Ui(t){return{created:(a,o,i)=>{const l=o.value&&typeof o.value=="string"?o.value:i.key;l&&Wi[l]&&Wi[l].stop();const r=J(t||{});typeof o.value=="object"&&(r.value=o.value),aN(i,r);const c=Ff(a,r);a.motionInstance=c,l&&(Wi[l]=c)},getSSRProps(a,o){let{initial:i}=a.value||o&&(o==null?void 0:o.props)||{};i=A(i);const l=oR((t==null?void 0:t.initial)||{},i||{});return!l||Object.keys(l).length===0?void 0:{style:Rf(l)}}}}const sN={initial:{opacity:0},enter:{opacity:1}},oN={initial:{opacity:0},visible:{opacity:1}},iN={initial:{opacity:0},visibleOnce:{opacity:1}},lN={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},rN={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},cN={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},uN={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},pN={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},dN={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},mN={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},fN={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},hN={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},gN={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},_N={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},vN={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},kN={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},bN={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},yN={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},wN={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},xN={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},TN={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},$N={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},zN={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},MN={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},LN={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},IN={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},EN={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},SN={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},CN={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},AN={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Gl={__proto__:null,fade:sN,fadeVisible:oN,fadeVisibleOnce:iN,pop:lN,popVisible:rN,popVisibleOnce:cN,rollBottom:kN,rollLeft:uN,rollRight:mN,rollTop:gN,rollVisibleBottom:bN,rollVisibleLeft:pN,rollVisibleOnceBottom:yN,rollVisibleOnceLeft:dN,rollVisibleOnceRight:hN,rollVisibleOnceTop:vN,rollVisibleRight:fN,rollVisibleTop:_N,slideBottom:SN,slideLeft:wN,slideRight:$N,slideTop:LN,slideVisibleBottom:CN,slideVisibleLeft:xN,slideVisibleOnceBottom:AN,slideVisibleOnceLeft:TN,slideVisibleOnceRight:MN,slideVisibleOnceTop:EN,slideVisibleRight:zN,slideVisibleTop:IN},ON=Pe({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var c;const n=Rg(),a=Be({});if(!t.is&&!n.default)return()=>yt("div",{});const o=F(()=>{let u;return t.preset&&(u=Gl[t.preset]),u}),i=F(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),l=F(()=>{const u={...i.value,...o.value||{},...t.variants||{}};return t.delay&&(u.enter.transition={...u.enter.transition},u.enter.transition.delay=parseInt(t.delay)),u}),r=F(()=>{if(!t.is)return;let u=t.is;return typeof r.value=="string"&&!vp(u)&&(u=va(u)),u});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const u=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var m,f,h;(m=p.variants)!=null&&m.enter&&p.apply("enter"),(f=p.variants)!=null&&f.visible&&p.apply("visible"),(h=p.variants)!=null&&h.visibleOnce&&p.apply("visibleOnce")},10)};ii(()=>Object.entries(a).forEach(([p,d])=>u(d)))}return{slots:n,component:r,motionConfig:l,instances:a}},render({slots:t,motionConfig:n,instances:a,component:o}){var c;const i=Rf(n.initial||{}),l=(u,p)=>(u.props||(u.props={}),u.props.style=i,u.props.onVnodeMounted=({el:d})=>{const m=Ff(d,n);a[p]=m},u);if(o){const u=yt(o,void 0,t);return l(u,0),u}return(((c=t.default)==null?void 0:c.call(t))||[]).map((u,p)=>l(u,p))}});function PN(t){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",a="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(o,i=>a.charAt(n.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const HN={install(t,n){if(t.directive("motion",Ui()),t.component("Motion",ON),!n||n&&!n.excludePresets)for(const a in Gl){const o=Gl[a];t.directive(`motion-${PN(a)}`,Ui(o))}if(n&&n.directives)for(const a in n.directives){const o=n.directives[a];o.initial,t.directive(`motion-${a}`,Ui(o))}}};var ep;const ys=typeof window<"u",RN=Object.prototype.toString,FN=t=>RN.call(t)==="[object Object]";ys&&((ep=window==null?void 0:window.navigator)!=null&&ep.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function NN(t){return er()?(wp(t),!0):!1}function qN(t){var n;const a=A(t);return(n=a==null?void 0:a.$el)!=null?n:a}const jN=ys?window:void 0,tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},np="__vueuse_ssr_handlers__";tp[np]=tp[np]||{};function DN(t,n={}){const{immediate:a=!0,window:o=jN}=n,i=J(!1);let l=null;function r(){!i.value||!o||(t(),l=o.requestAnimationFrame(r))}function c(){!i.value&&o&&(i.value=!0,r())}function u(){i.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return a&&c(),NN(u),{isActive:i,pause:u,resume:c}}var ap;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(ap||(ap={}));const hi="vue-starport-injection",Nf="vue-starport-options",WN={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},qf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var BN=Object.defineProperty,Go=Object.getOwnPropertySymbols,jf=Object.prototype.hasOwnProperty,Df=Object.prototype.propertyIsEnumerable,sp=(t,n,a)=>n in t?BN(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,VN=(t,n)=>{for(var a in n||(n={}))jf.call(n,a)&&sp(t,a,n[a]);if(Go)for(var a of Go(n))Df.call(n,a)&&sp(t,a,n[a]);return t},op=(t,n)=>{var a={};for(var o in t)jf.call(t,o)&&n.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&Go)for(var o of Go(t))n.indexOf(o)<0&&Df.call(t,o)&&(a[o]=t[o]);return a};const UN=Pe({name:"StarportProxy",props:VN({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},qf),setup(t,n){const a=z(hi),o=F(()=>a.getInstance(t.port,t.component)),i=J(),l=o.value.generateId(),r=J(!1);return o.value.isVisible||(o.value.land(),r.value=!0),Dn(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${t.port}" detected. The later one will be ignored.`);return}if(o.value.el=i.value,await st(),r.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const c=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${t.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Ds(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,r.value=!1,!o.value.options.keepAlive&&(await st(),await st(),!o.value.el&&a.dispose(o.value.port))}),ke(()=>t,async()=>{o.value.props&&await st();const c=t,{props:u}=c,p=op(c,["props"]);o.value.props=u||{},o.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=t,{initialProps:u,mountedProps:p}=c,d=op(c,["initialProps","mountedProps"]),m=Y(d,(r.value?p:u)||{});return yt("div",Y(m,{id:l,ref:i,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?yt(n.slots.default):void 0)}}});var KN=Object.defineProperty,GN=Object.defineProperties,QN=Object.getOwnPropertyDescriptors,ip=Object.getOwnPropertySymbols,YN=Object.prototype.hasOwnProperty,ZN=Object.prototype.propertyIsEnumerable,lp=(t,n,a)=>n in t?KN(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,JN=(t,n)=>{for(var a in n||(n={}))YN.call(n,a)&&lp(t,a,n[a]);if(ip)for(var a of ip(n))ZN.call(n,a)&&lp(t,a,n[a]);return t},XN=(t,n)=>GN(t,QN(n));const e9=Pe({name:"Starport",inheritAttrs:!0,props:qf,setup(t,n){const a=J(!1);return Dn(()=>{if(a.value=!0,!z(hi))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var r,c;const o=(c=(r=n.slots).default)==null?void 0:c.call(r);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const i=o[0];let l=i.type;return(!FN(l)||Nn(l))&&(l={render(){return o}}),yt(UN,XN(JN({},t),{key:t.port,component:ei(l),props:i.props}))}}});function t9(t){const n=Be({height:0,width:0,left:0,top:0,update:o,listen:l,pause:r,margin:"0px",padding:"0px"}),a=ys?document.documentElement||document.body:void 0;function o(){if(!ys)return;const c=qN(t);if(!c)return;const{height:u,width:p,left:d,top:m}=c.getBoundingClientRect(),f=window.getComputedStyle(c),h=f.margin,g=f.padding;Object.assign(n,{height:u,width:p,left:d,top:a.scrollTop+m,margin:h,padding:g})}const i=DN(o,{immediate:!1});function l(){ys&&(o(),i.resume())}function r(){i.pause()}return n}let n9=(t,n=21)=>(a=n)=>{let o="",i=a;for(;i--;)o+=t[Math.random()*t.length|0];return o};const rp=n9("abcdefghijklmnopqrstuvwxyz",5);function cp(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function a9(t){var n;return t.name||((n=t.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var s9=Object.defineProperty,up=Object.getOwnPropertySymbols,o9=Object.prototype.hasOwnProperty,i9=Object.prototype.propertyIsEnumerable,pp=(t,n,a)=>n in t?s9(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,Ki=(t,n)=>{for(var a in n||(n={}))o9.call(n,a)&&pp(t,a,n[a]);if(up)for(var a of up(n))i9.call(n,a)&&pp(t,a,n[a]);return t};function l9(t,n,a={}){const o=a9(n),i=cp(o)||rp(),l=J(),r=J(null),c=J(!1),u=J(!1),p=ih(!0),d=J({}),m=F(()=>Ki(Ki(Ki({},WN),a),d.value)),f=J(0);let h;p.run(()=>{h=t9(l),ke(l,async T=>{T&&(u.value=!0),await st(),l.value||(u.value=!1)})});const g=cp(t);function y(){return`starport-${i}-${g}-${rp()}`}const x=y();return Be({el:l,id:x,port:t,props:r,rect:h,scope:p,isLanded:c,isVisible:u,options:m,liftOffTime:f,component:n,componentName:o,componentId:i,generateId:y,setLocalOptions(T={}){d.value=JSON.parse(JSON.stringify(T))},elRef(){return l},liftOff(){c.value&&(c.value=!1,f.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function r9(t){const n=Be(new Map);function a(i,l){let r=n.get(i);return r||(r=l9(i,l,t),n.set(i,r)),r.component=l,r}function o(i){var l;(l=n.get(i))==null||l.scope.stop(),n.delete(i)}return{portMap:n,dispose:o,getInstance:a}}var c9=Object.defineProperty,u9=Object.defineProperties,p9=Object.getOwnPropertyDescriptors,dp=Object.getOwnPropertySymbols,d9=Object.prototype.hasOwnProperty,m9=Object.prototype.propertyIsEnumerable,mp=(t,n,a)=>n in t?c9(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,f9=(t,n)=>{for(var a in n||(n={}))d9.call(n,a)&&mp(t,a,n[a]);if(dp)for(var a of dp(n))m9.call(n,a)&&mp(t,a,n[a]);return t},h9=(t,n)=>u9(t,p9(n));const g9=Pe({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const n=z(hi);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const a=F(()=>n.getInstance(t.port,t.component)),o=F(()=>{var r;return((r=a.value.el)==null?void 0:r.id)||a.value.id}),i=F(()=>{const r=Date.now()-a.value.liftOffTime,c=Math.max(0,a.value.options.duration-r),u=a.value.rect,p={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!a.value.isVisible||!a.value.el?h9(f9({},p),{zIndex:-1,display:"none"}):(a.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:a.value.options.easing}),p)}),l={onTransitionend(r){a.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${a.value.componentName}" is too short (${r.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${a.value.options.duration/1e3}s).`)}};return()=>{const r=!!(a.value.isLanded&&a.value.el);return yt("div",{style:i.value,"data-starport-craft":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true",onTransitionend:a.value.land},yt(p_,{to:r?`#${o.value}`:"body",disabled:!r},yt(a.value.component,Y(l,a.value.props))))}}}),_9=Pe({name:"StarportCarrier",setup(t,{slots:n}){const a=r9(z(Nf,{}));return It().appContext.app.provide(hi,a),()=>{var i;return[(i=n.default)==null?void 0:i.call(n),Array.from(a.portMap.entries()).map(([l,{component:r}])=>yt(g9,{key:l,port:l,component:r}))]}}});function v9(t={}){return{install(n){n.provide(Nf,t),n.component("Starport",e9),n.component("StarportCarrier",_9)}}}function k9(t){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),t.app.use(HN),t.app.use(v9({keepAlive:!0}))}function wt(t,n,a){var o;return((o=t.instance)==null?void 0:o.$).provides[n]??a}function b9(){return{install(t){t.directive("click",{name:"v-click",mounted(n,a){var d,m,f,h,g,y;if(_s.value||(d=wt(a,ms))!=null&&d.value)return;const o=wt(a,ta),i=wt(a,ds),l=wt(a,hl),r=a.modifiers.hide!==!1&&a.modifiers.hide!=null,c=a.modifiers.fade!==!1&&a.modifiers.fade!=null,u=((m=o==null?void 0:o.value)==null?void 0:m.length)||0,p=c?ik:Mi;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(n))&&o.value.push(n),a.value==null&&(a.value=(h=o==null?void 0:o.value)==null?void 0:h.length),typeof a.value=="string"&&(a.value.startsWith("+")||a.value.startsWith("-"))&&(a.value=(((g=o==null?void 0:o.value)==null?void 0:g.length)||0)+Number(a.value)),!(l!=null&&l.value.has(a.value)))l==null||l.value.set(a.value,[n]);else if(!((y=l==null?void 0:l.value.get(a.value))!=null&&y.includes(n))){const x=(l==null?void 0:l.value.get(a.value))||[];l==null||l.value.set(a.value,[n].concat(x))}n==null||n.classList.toggle(Zn,!0),i&&ke(i,()=>{const x=(i==null?void 0:i.value)??0,T=a.value!=null?x>=a.value:x>u;n.classList.contains(Li)||n.classList.toggle(p,!T),r!==!1&&r!==void 0&&n.classList.toggle(p,T),n.classList.toggle(Qa,!1);const $=l==null?void 0:l.value.get(x);$==null||$.forEach((v,E)=>{v.classList.toggle(oo,!1),E===$.length-1?v.classList.toggle(Qa,!0):v.classList.toggle(oo,!0)}),n.classList.contains(Qa)||n.classList.toggle(oo,T)},{immediate:!0})},unmounted(n,a){n==null||n.classList.toggle(Zn,!1);const o=wt(a,ta);o!=null&&o.value&&gl(o.value,n)}}),t.directive("after",{name:"v-after",mounted(n,a){var c,u,p;if(_s.value||(c=wt(a,ms))!=null&&c.value)return;const o=wt(a,ta),i=wt(a,ds),l=wt(a,hl),r=o==null?void 0:o.value.length;a.value==null&&(a.value=o==null?void 0:o.value.length),typeof a.value=="string"&&(a.value.startsWith("+")||a.value.startsWith("-"))&&(a.value=(((u=o==null?void 0:o.value)==null?void 0:u.length)||0)+Number(a.value)),l!=null&&l.value.has(a.value)?(p=l==null?void 0:l.value.get(a.value))==null||p.push(n):l==null||l.value.set(a.value,[n]),n==null||n.classList.toggle(Zn,!0),i&&ke(i,()=>{const d=(i.value??0)>=(a.value??r??0);n.classList.contains(Li)||n.classList.toggle(Mi,!d),n.classList.toggle(Qa,!1),n.classList.contains(Qa)||n.classList.toggle(oo,d)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(Zn,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(n,a){var r,c,u;if(_s.value||(r=wt(a,ms))!=null&&r.value)return;const o=wt(a,ta),i=wt(a,ds),l=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((u=o==null?void 0:o.value)!=null&&u.includes(n))&&o.value.push(n),n==null||n.classList.toggle(Zn,!0),i&&ke(i,()=>{const p=(i==null?void 0:i.value)??0,d=a.value!=null?p>=a.value:p>l;n.classList.toggle(Mi,d),n.classList.toggle(Li,d)},{immediate:!0})},unmounted(n,a){n==null||n.classList.toggle(Zn,!1);const o=wt(a,ta);o!=null&&o.value&&gl(o.value,n)}})}}}function y9(t,n){const a=Km(t),o=Gm(n,a.currentRoute,a.currentPage);return{nav:{...a,...o},configs:Ee,themeConfigs:F(()=>Ee.themeConfig)}}function w9(){return{install(t){const n=y9(Rt,Pt);t.provide(S,Be(n))}}}const Wa=cv(aR);Wa.use(bt);Wa.use(ak());Wa.use(b9());Wa.use(w9());k9({app:Wa,router:bt});Wa.mount("#app");export{ST as $,Wx as A,J as B,L9 as C,pt as D,Ve as E,Ce as F,uy as G,Y8 as H,Pt as I,Vo as J,V8 as K,Fi as L,Dn as M,Be as N,z9 as O,I9 as P,ke as Q,w as R,zm as S,Se as T,ut as U,xy as V,x9 as W,T9 as X,Ss as Y,Oi as Z,C as _,S as a,Mr as a0,Lr as a1,Ue as a2,bT as a3,Tw as a4,$9 as a5,Ut as a6,ns as a7,ia as a8,tn as a9,Ll as aa,Z0 as ab,J0 as ac,X0 as ad,ty as ae,ed as af,Ed as ag,E9 as ah,ft as ai,uo as aj,ox as ak,jd as al,ny as am,Ds as an,qd as b,Ee as c,Pe as d,Vh as e,oe as f,e as g,A as h,z as i,Qe as j,j8 as k,s as l,O as m,tt as n,b as o,xe as p,yr as q,qa as r,Gt as s,vt as t,M9 as u,F as v,Ii as w,L as x,vm as y,Gx as z};
