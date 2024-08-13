(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=a(i);fetch(i.href,l)}})();function Dt(n,t){const a=Object.create(null),o=n.split(",");for(let i=0;i<o.length;i++)a[o[i]]=!0;return t?i=>!!a[i.toLowerCase()]:i=>!!a[i]}const qe=Object.freeze({}),Ea=Object.freeze([]),yn=()=>{},gp=()=>!1,Uf=/^on[^a-z]/,qs=n=>Uf.test(n),$o=n=>n.startsWith("onUpdate:"),We=Object.assign,Zl=(n,t)=>{const a=n.indexOf(t);a>-1&&n.splice(a,1)},Kf=Object.prototype.hasOwnProperty,Me=(n,t)=>Kf.call(n,t),ue=Array.isArray,ra=n=>Ws(n)==="[object Map]",_p=n=>Ws(n)==="[object Set]",Gf=n=>Ws(n)==="[object RegExp]",fe=n=>typeof n=="function",je=n=>typeof n=="string",Xl=n=>typeof n=="symbol",Oe=n=>n!==null&&typeof n=="object",er=n=>Oe(n)&&fe(n.then)&&fe(n.catch),vp=Object.prototype.toString,Ws=n=>vp.call(n),nr=n=>Ws(n).slice(8,-1),kp=n=>Ws(n)==="[object Object]",tr=n=>je(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,go=Dt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qf=Dt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Yo=n=>{const t=Object.create(null);return a=>t[a]||(t[a]=n(a))},Yf=/-(\w)/g,st=Yo(n=>n.replace(Yf,(t,a)=>a?a.toUpperCase():"")),Jf=/\B([A-Z])/g,_t=Yo(n=>n.replace(Jf,"-$1").toLowerCase()),ga=Yo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Yt=Yo(n=>n?`on${ga(n)}`:""),xs=(n,t)=>!Object.is(n,t),Zt=(n,t)=>{for(let a=0;a<n.length;a++)n[a](t)},zo=(n,t,a)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:a})},Zf=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Xf=n=>{const t=je(n)?Number(n):NaN;return isNaN(t)?n:t};let Zr;const Mo=()=>Zr||(Zr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tn(n){if(ue(n)){const t={};for(let a=0;a<n.length;a++){const o=n[a],i=je(o)?ah(o):tn(o);if(i)for(const l in i)t[l]=i[l]}return t}else{if(je(n))return n;if(Oe(n))return n}}const eh=/;(?![^(]*\))/g,nh=/:([^]+)/,th=/\/\*[^]*?\*\//g;function ah(n){const t={};return n.replace(th,"").split(eh).forEach(a=>{if(a){const o=a.split(nh);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ve(n){let t="";if(je(n))t=n;else if(ue(n))for(let a=0;a<n.length;a++){const o=Ve(n[a]);o&&(t+=o+" ")}else if(Oe(n))for(const a in n)n[a]&&(t+=a+" ");return t.trim()}function q(n){if(!n)return null;let{class:t,style:a}=n;return t&&!je(t)&&(n.class=Ve(t)),a&&(n.style=tn(a)),n}const sh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",oh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",bp=Dt(sh),ih=Dt(oh),lh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rh=Dt(lh);function yp(n){return!!n||n===""}const bn=n=>je(n)?n:n==null?"":ue(n)||Oe(n)&&(n.toString===vp||!fe(n.toString))?JSON.stringify(n,wp,2):String(n),wp=(n,t)=>t&&t.__v_isRef?wp(n,t.value):ra(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[o,i])=>(a[`${o} =>`]=i,a),{})}:_p(t)?{[`Set(${t.size})`]:[...t.values()]}:Oe(t)&&!ue(t)&&!kp(t)?String(t):t;function Lo(n,...t){console.warn(`[Vue warn] ${n}`,...t)}let Ln;class xp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ln,!t&&Ln&&(this.index=(Ln.scopes||(Ln.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const a=Ln;try{return Ln=this,t()}finally{Ln=a}}else Lo("cannot run an inactive effect scope.")}on(){Ln=this}off(){Ln=this.parent}stop(t){if(this._active){let a,o;for(a=0,o=this.effects.length;a<o;a++)this.effects[a].stop();for(a=0,o=this.cleanups.length;a<o;a++)this.cleanups[a]();if(this.scopes)for(a=0,o=this.scopes.length;a<o;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ch(n){return new xp(n)}function uh(n,t=Ln){t&&t.active&&t.effects.push(n)}function ar(){return Ln}function Tp(n){Ln?Ln.cleanups.push(n):Lo("onScopeDispose() is called when there is no active effect scope to be associated with.")}const sr=n=>{const t=new Set(n);return t.w=0,t.n=0,t},$p=n=>(n.w&Nt)>0,zp=n=>(n.n&Nt)>0,ph=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=Nt},dh=n=>{const{deps:t}=n;if(t.length){let a=0;for(let o=0;o<t.length;o++){const i=t[o];$p(i)&&!zp(i)?i.delete(n):t[a++]=i,i.w&=~Nt,i.n&=~Nt}t.length=a}},Co=new WeakMap;let as=0,Nt=1;const Qi=30;let fn;const ca=Symbol("iterate"),Yi=Symbol("Map key iterate");class or{constructor(t,a=null,o){this.fn=t,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,uh(this,o)}run(){if(!this.active)return this.fn();let t=fn,a=Et;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=fn,fn=this,Et=!0,Nt=1<<++as,as<=Qi?ph(this):Xr(this),this.fn()}finally{as<=Qi&&dh(this),Nt=1<<--as,fn=this.parent,Et=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(Xr(this),this.onStop&&this.onStop(),this.active=!1)}}function Xr(n){const{deps:t}=n;if(t.length){for(let a=0;a<t.length;a++)t[a].delete(n);t.length=0}}let Et=!0;const Mp=[];function va(){Mp.push(Et),Et=!1}function ka(){const n=Mp.pop();Et=n===void 0?!0:n}function cn(n,t,a){if(Et&&fn){let o=Co.get(n);o||Co.set(n,o=new Map);let i=o.get(a);i||o.set(a,i=sr()),Lp(i,{effect:fn,target:n,type:t,key:a})}}function Lp(n,t){let a=!1;as<=Qi?zp(n)||(n.n|=Nt,a=!$p(n)):a=!n.has(fn),a&&(n.add(fn),fn.deps.push(n),fn.onTrack&&fn.onTrack(We({effect:fn},t)))}function ot(n,t,a,o,i,l){const r=Co.get(n);if(!r)return;let c=[];if(t==="clear")c=[...r.values()];else if(a==="length"&&ue(n)){const p=Number(o);r.forEach((d,m)=>{(m==="length"||m>=p)&&c.push(d)})}else switch(a!==void 0&&c.push(r.get(a)),t){case"add":ue(n)?tr(a)&&c.push(r.get("length")):(c.push(r.get(ca)),ra(n)&&c.push(r.get(Yi)));break;case"delete":ue(n)||(c.push(r.get(ca)),ra(n)&&c.push(r.get(Yi)));break;case"set":ra(n)&&c.push(r.get(ca));break}const u={target:n,type:t,key:a,newValue:o,oldValue:i,oldTarget:l};if(c.length===1)c[0]&&Ji(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);Ji(sr(p),u)}}function Ji(n,t){const a=ue(n)?n:[...n];for(const o of a)o.computed&&ec(o,t);for(const o of a)o.computed||ec(o,t)}function ec(n,t){(n!==fn||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(We({effect:n},t)),n.scheduler?n.scheduler():n.run())}function mh(n,t){var a;return(a=Co.get(n))==null?void 0:a.get(t)}const fh=Dt("__proto__,__v_isRef,__isVue"),Cp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xl)),hh=Jo(),gh=Jo(!1,!0),_h=Jo(!0),vh=Jo(!0,!0),nc=kh();function kh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...a){const o=_e(this);for(let l=0,r=this.length;l<r;l++)cn(o,"get",l+"");const i=o[t](...a);return i===-1||i===!1?o[t](...a.map(_e)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...a){va();const o=_e(this)[t].apply(this,a);return ka(),o}}),n}function bh(n){const t=_e(this);return cn(t,"has",n),t.hasOwnProperty(n)}function Jo(n=!1,t=!1){return function(o,i,l){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&l===(n?t?Rp:Pp:t?Hp:Op).get(o))return o;const r=ue(o);if(!n){if(r&&Me(nc,i))return Reflect.get(nc,i,l);if(i==="hasOwnProperty")return bh}const c=Reflect.get(o,i,l);return(Xl(i)?Cp.has(i):fh(i))||(n||cn(o,"get",i),t)?c:Se(c)?r&&tr(i)?c:c.value:Oe(c)?n?Kn(c):Be(c):c}}const yh=Ep(),wh=Ep(!0);function Ep(n=!1){return function(a,o,i,l){let r=a[o];if(Ft(r)&&Se(r)&&!Se(i))return!1;if(!n&&(!Eo(i)&&!Ft(i)&&(r=_e(r),i=_e(i)),!ue(a)&&Se(r)&&!Se(i)))return r.value=i,!0;const c=ue(a)&&tr(o)?Number(o)<a.length:Me(a,o),u=Reflect.set(a,o,i,l);return a===_e(l)&&(c?xs(i,r)&&ot(a,"set",o,i,r):ot(a,"add",o,i)),u}}function xh(n,t){const a=Me(n,t),o=n[t],i=Reflect.deleteProperty(n,t);return i&&a&&ot(n,"delete",t,void 0,o),i}function Th(n,t){const a=Reflect.has(n,t);return(!Xl(t)||!Cp.has(t))&&cn(n,"has",t),a}function $h(n){return cn(n,"iterate",ue(n)?"length":ca),Reflect.ownKeys(n)}const Ip={get:hh,set:yh,deleteProperty:xh,has:Th,ownKeys:$h},Sp={get:_h,set(n,t){return Lo(`Set operation on key "${String(t)}" failed: target is readonly.`,n),!0},deleteProperty(n,t){return Lo(`Delete operation on key "${String(t)}" failed: target is readonly.`,n),!0}},zh=We({},Ip,{get:gh,set:wh}),Mh=We({},Sp,{get:vh}),ir=n=>n,Zo=n=>Reflect.getPrototypeOf(n);function Js(n,t,a=!1,o=!1){n=n.__v_raw;const i=_e(n),l=_e(t);a||(t!==l&&cn(i,"get",t),cn(i,"get",l));const{has:r}=Zo(i),c=o?ir:a?lr:Ts;if(r.call(i,t))return c(n.get(t));if(r.call(i,l))return c(n.get(l));n!==i&&n.get(t)}function Zs(n,t=!1){const a=this.__v_raw,o=_e(a),i=_e(n);return t||(n!==i&&cn(o,"has",n),cn(o,"has",i)),n===i?a.has(n):a.has(n)||a.has(i)}function Xs(n,t=!1){return n=n.__v_raw,!t&&cn(_e(n),"iterate",ca),Reflect.get(n,"size",n)}function tc(n){n=_e(n);const t=_e(this);return Zo(t).has.call(t,n)||(t.add(n),ot(t,"add",n,n)),this}function ac(n,t){t=_e(t);const a=_e(this),{has:o,get:i}=Zo(a);let l=o.call(a,n);l?Ap(a,o,n):(n=_e(n),l=o.call(a,n));const r=i.call(a,n);return a.set(n,t),l?xs(t,r)&&ot(a,"set",n,t,r):ot(a,"add",n,t),this}function sc(n){const t=_e(this),{has:a,get:o}=Zo(t);let i=a.call(t,n);i?Ap(t,a,n):(n=_e(n),i=a.call(t,n));const l=o?o.call(t,n):void 0,r=t.delete(n);return i&&ot(t,"delete",n,void 0,l),r}function oc(){const n=_e(this),t=n.size!==0,a=ra(n)?new Map(n):new Set(n),o=n.clear();return t&&ot(n,"clear",void 0,void 0,a),o}function eo(n,t){return function(o,i){const l=this,r=l.__v_raw,c=_e(r),u=t?ir:n?lr:Ts;return!n&&cn(c,"iterate",ca),r.forEach((p,d)=>o.call(i,u(p),u(d),l))}}function no(n,t,a){return function(...o){const i=this.__v_raw,l=_e(i),r=ra(l),c=n==="entries"||n===Symbol.iterator&&r,u=n==="keys"&&r,p=i[n](...o),d=a?ir:t?lr:Ts;return!t&&cn(l,"iterate",u?Yi:ca),{next(){const{value:m,done:f}=p.next();return f?{value:m,done:f}:{value:c?[d(m[0]),d(m[1])]:d(m),done:f}},[Symbol.iterator](){return this}}}}function yt(n){return function(...t){{const a=t[0]?`on key "${t[0]}" `:"";console.warn(`${ga(n)} operation ${a}failed: target is readonly.`,_e(this))}return n==="delete"?!1:this}}function Lh(){const n={get(l){return Js(this,l)},get size(){return Xs(this)},has:Zs,add:tc,set:ac,delete:sc,clear:oc,forEach:eo(!1,!1)},t={get(l){return Js(this,l,!1,!0)},get size(){return Xs(this)},has:Zs,add:tc,set:ac,delete:sc,clear:oc,forEach:eo(!1,!0)},a={get(l){return Js(this,l,!0)},get size(){return Xs(this,!0)},has(l){return Zs.call(this,l,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:eo(!0,!1)},o={get(l){return Js(this,l,!0,!0)},get size(){return Xs(this,!0)},has(l){return Zs.call(this,l,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=no(l,!1,!1),a[l]=no(l,!0,!1),t[l]=no(l,!1,!0),o[l]=no(l,!0,!0)}),[n,a,t,o]}const[Ch,Eh,Ih,Sh]=Lh();function Xo(n,t){const a=t?n?Sh:Ih:n?Eh:Ch;return(o,i,l)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?o:Reflect.get(Me(a,i)&&i in o?a:o,i,l)}const Ah={get:Xo(!1,!1)},Oh={get:Xo(!1,!0)},Hh={get:Xo(!0,!1)},Ph={get:Xo(!0,!0)};function Ap(n,t,a){const o=_e(a);if(o!==a&&t.call(n,o)){const i=nr(n);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Op=new WeakMap,Hp=new WeakMap,Pp=new WeakMap,Rp=new WeakMap;function Rh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nh(n){return n.__v_skip||!Object.isExtensible(n)?0:Rh(nr(n))}function Be(n){return Ft(n)?n:ei(n,!1,Ip,Ah,Op)}function Fh(n){return ei(n,!1,zh,Oh,Hp)}function Kn(n){return ei(n,!0,Sp,Hh,Pp)}function ss(n){return ei(n,!0,Mh,Ph,Rp)}function ei(n,t,a,o,i){if(!Oe(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(t&&n.__v_isReactive))return n;const l=i.get(n);if(l)return l;const r=Nh(n);if(r===0)return n;const c=new Proxy(n,r===2?o:a);return i.set(n,c),c}function ua(n){return Ft(n)?ua(n.__v_raw):!!(n&&n.__v_isReactive)}function Ft(n){return!!(n&&n.__v_isReadonly)}function Eo(n){return!!(n&&n.__v_isShallow)}function Io(n){return ua(n)||Ft(n)}function _e(n){const t=n&&n.__v_raw;return t?_e(t):n}function ni(n){return zo(n,"__v_skip",!0),n}const Ts=n=>Oe(n)?Be(n):n,lr=n=>Oe(n)?Kn(n):n;function rr(n){Et&&fn&&(n=_e(n),Lp(n.dep||(n.dep=sr()),{target:n,type:"get",key:"value"}))}function cr(n,t){n=_e(n);const a=n.dep;a&&Ji(a,{target:n,type:"set",key:"value",newValue:t})}function Se(n){return!!(n&&n.__v_isRef===!0)}function Z(n){return Np(n,!1)}function it(n){return Np(n,!0)}function Np(n,t){return Se(n)?n:new qh(n,t)}class qh{constructor(t,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?t:_e(t),this._value=a?t:Ts(t)}get value(){return rr(this),this._value}set value(t){const a=this.__v_isShallow||Eo(t)||Ft(t);t=a?t:_e(t),xs(t,this._rawValue)&&(this._rawValue=t,this._value=a?t:Ts(t),cr(this,t))}}function O(n){return Se(n)?n.value:n}const Wh={get:(n,t,a)=>O(Reflect.get(n,t,a)),set:(n,t,a,o)=>{const i=n[t];return Se(i)&&!Se(a)?(i.value=a,!0):Reflect.set(n,t,a,o)}};function Fp(n){return ua(n)?n:new Proxy(n,Wh)}class Dh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:o}=t(()=>rr(this),()=>cr(this));this._get=a,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function ur(n){return new Dh(n)}function jh(n){Io(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ue(n)?new Array(n.length):{};for(const a in n)t[a]=qp(n,a);return t}class Bh{constructor(t,a,o){this._object=t,this._key=a,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return mh(_e(this._object),this._key)}}class Vh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Uh(n,t,a){return Se(n)?n:fe(n)?new Vh(n):Oe(n)&&arguments.length>1?qp(n,t,a):Z(n)}function qp(n,t,a){const o=n[t];return Se(o)?o:new Bh(n,t,a)}class Kh{constructor(t,a,o,i){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new or(t,()=>{this._dirty||(this._dirty=!0,cr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=o}get value(){const t=_e(this);return rr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Gh(n,t,a=!1){let o,i;const l=fe(n);l?(o=n,i=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=n.get,i=n.set);const r=new Kh(o,i,l||!i,a);return t&&!a&&(r.effect.onTrack=t.onTrack,r.effect.onTrigger=t.onTrigger),r}const pa=[];function _o(n){pa.push(n)}function vo(){pa.pop()}function V(n,...t){va();const a=pa.length?pa[pa.length-1].component:null,o=a&&a.appContext.config.warnHandler,i=Qh();if(o)gt(o,a,11,[n+t.join(""),a&&a.proxy,i.map(({vnode:l})=>`at <${pi(a,l.type)}>`).join(`
`),i]);else{const l=[`[Vue warn]: ${n}`,...t];i.length&&l.push(`
`,...Yh(i)),console.warn(...l)}ka()}function Qh(){let n=pa[pa.length-1];if(!n)return[];const t=[];for(;n;){const a=t[0];a&&a.vnode===n?a.recurseCount++:t.push({vnode:n,recurseCount:0});const o=n.component&&n.component.parent;n=o&&o.vnode}return t}function Yh(n){const t=[];return n.forEach((a,o)=>{t.push(...o===0?[]:[`
`],...Jh(a))}),t}function Jh({vnode:n,recurseCount:t}){const a=t>0?`... (${t} recursive calls)`:"",o=n.component?n.component.parent==null:!1,i=` at <${pi(n.component,n.type,o)}`,l=">"+a;return n.props?[i,...Zh(n.props),l]:[i+l]}function Zh(n){const t=[],a=Object.keys(n);return a.slice(0,3).forEach(o=>{t.push(...Wp(o,n[o]))}),a.length>3&&t.push(" ..."),t}function Wp(n,t,a){return je(t)?(t=JSON.stringify(t),a?t:[`${n}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?a?t:[`${n}=${t}`]:Se(t)?(t=Wp(n,_e(t.value),!0),a?t:[`${n}=Ref<`,t,">"]):fe(t)?[`${n}=fn${t.name?`<${t.name}>`:""}`]:(t=_e(t),a?t:[`${n}=`,t])}function Xh(n,t){n!==void 0&&(typeof n!="number"?V(`${t} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&V(`${t} is NaN - the duration expression might be incorrect.`))}const pr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function gt(n,t,a,o){let i;try{i=o?n(...o):n()}catch(l){ti(l,t,a)}return i}function Fn(n,t,a,o){if(fe(n)){const l=gt(n,t,a,o);return l&&er(l)&&l.catch(r=>{ti(r,t,a)}),l}const i=[];for(let l=0;l<n.length;l++)i.push(Fn(n[l],t,a,o));return i}function ti(n,t,a,o=!0){const i=t?t.vnode:null;if(t){let l=t.parent;const r=t.proxy,c=pr[a];for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](n,r,c)===!1)return}l=l.parent}const u=t.appContext.config.errorHandler;if(u){gt(u,null,10,[n,r,c]);return}}eg(n,a,i,o)}function eg(n,t,a,o=!0){{const i=pr[t];if(a&&_o(a),V(`Unhandled error${i?` during execution of ${i}`:""}`),a&&vo(),o)throw n;console.error(n)}}let $s=!1,Zi=!1;const sn=[];let et=0;const Ia=[];let Xn=null,$t=0;const Dp=Promise.resolve();let dr=null;const ng=100;function on(n){const t=dr||Dp;return n?t.then(this?n.bind(this):n):t}function tg(n){let t=et+1,a=sn.length;for(;t<a;){const o=t+a>>>1;zs(sn[o])<n?t=o+1:a=o}return t}function ai(n){(!sn.length||!sn.includes(n,$s&&n.allowRecurse?et+1:et))&&(n.id==null?sn.push(n):sn.splice(tg(n.id),0,n),jp())}function jp(){!$s&&!Zi&&(Zi=!0,dr=Dp.then(Up))}function ag(n){const t=sn.indexOf(n);t>et&&sn.splice(t,1)}function Bp(n){ue(n)?Ia.push(...n):(!Xn||!Xn.includes(n,n.allowRecurse?$t+1:$t))&&Ia.push(n),jp()}function ic(n,t=$s?et+1:0){for(n=n||new Map;t<sn.length;t++){const a=sn[t];if(a&&a.pre){if(mr(n,a))continue;sn.splice(t,1),t--,a()}}}function Vp(n){if(Ia.length){const t=[...new Set(Ia)];if(Ia.length=0,Xn){Xn.push(...t);return}for(Xn=t,n=n||new Map,Xn.sort((a,o)=>zs(a)-zs(o)),$t=0;$t<Xn.length;$t++)mr(n,Xn[$t])||Xn[$t]();Xn=null,$t=0}}const zs=n=>n.id==null?1/0:n.id,sg=(n,t)=>{const a=zs(n)-zs(t);if(a===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return a};function Up(n){Zi=!1,$s=!0,n=n||new Map,sn.sort(sg);const t=a=>mr(n,a);try{for(et=0;et<sn.length;et++){const a=sn[et];if(a&&a.active!==!1){if(t(a))continue;gt(a,null,14)}}}finally{et=0,sn.length=0,Vp(n),$s=!1,dr=null,(sn.length||Ia.length)&&Up(n)}}function mr(n,t){if(!n.has(t))n.set(t,1);else{const a=n.get(t);if(a>ng){const o=t.ownerInstance,i=o&&Cs(o.type);return V(`Maximum recursive updates exceeded${i?` in component <${i}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(t,a+1)}}let It=!1;const La=new Set;Mo().__VUE_HMR_RUNTIME__={createRecord:_i(Kp),rerender:_i(lg),reload:_i(rg)};const _a=new Map;function og(n){const t=n.type.__hmrId;let a=_a.get(t);a||(Kp(t,n.type),a=_a.get(t)),a.instances.add(n)}function ig(n){_a.get(n.type.__hmrId).instances.delete(n)}function Kp(n,t){return _a.has(n)?!1:(_a.set(n,{initialDef:us(t),instances:new Set}),!0)}function us(n){return $d(n)?n.__vccOpts:n}function lg(n,t){const a=_a.get(n);a&&(a.initialDef.render=t,[...a.instances].forEach(o=>{t&&(o.render=t,us(o.type).render=t),o.renderCache=[],It=!0,o.update(),It=!1}))}function rg(n,t){const a=_a.get(n);if(!a)return;t=us(t),lc(a.initialDef,t);const o=[...a.instances];for(const i of o){const l=us(i.type);La.has(l)||(l!==a.initialDef&&lc(l,t),La.add(l)),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(La.add(l),i.ceReload(t.styles),La.delete(l)):i.parent?ai(i.parent.update):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Bp(()=>{for(const i of o)La.delete(us(i.type))})}function lc(n,t){We(n,t);for(const a in n)a!=="__file"&&!(a in t)&&delete n[a]}function _i(n){return(t,a)=>{try{return n(t,a)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let nt,os=[],Xi=!1;function Ds(n,...t){nt?nt.emit(n,...t):Xi||os.push({event:n,args:t})}function Gp(n,t){var a,o;nt=n,nt?(nt.enabled=!0,os.forEach(({event:i,args:l})=>nt.emit(i,...l)),os=[]):typeof window<"u"&&window.HTMLElement&&!((o=(a=window.navigator)==null?void 0:a.userAgent)!=null&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Gp(l,t)}),setTimeout(()=>{nt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Xi=!0,os=[])},3e3)):(Xi=!0,os=[])}function cg(n,t){Ds("app:init",n,t,{Fragment:Ie,Text:Vs,Comment:hn,Static:ps})}function ug(n){Ds("app:unmount",n)}const el=fr("component:added"),Qp=fr("component:updated"),pg=fr("component:removed"),dg=n=>{nt&&typeof nt.cleanupBuffer=="function"&&!nt.cleanupBuffer(n)&&pg(n)};function fr(n){return t=>{Ds(n,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const mg=Yp("perf:start"),fg=Yp("perf:end");function Yp(n){return(t,a,o)=>{Ds(n,t.appContext.app,t.uid,t,a,o)}}function hg(n,t,a){Ds("component:emit",n.appContext.app,n,t,a)}function gg(n,t,...a){if(n.isUnmounted)return;const o=n.vnode.props||qe;{const{emitsOptions:d,propsOptions:[m]}=n;if(d)if(!(t in d))(!m||!(Yt(t)in m))&&V(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Yt(t)}" prop.`);else{const f=d[t];fe(f)&&(f(...a)||V(`Invalid event arguments: event validation failed for event "${t}".`))}}let i=a;const l=t.startsWith("update:"),r=l&&t.slice(7);if(r&&r in o){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:m,trim:f}=o[d]||qe;f&&(i=a.map(h=>je(h)?h.trim():h)),m&&(i=a.map(Zf))}hg(n,t,i);{const d=t.toLowerCase();d!==t&&o[Yt(d)]&&V(`Event "${d}" is emitted in component ${pi(n,n.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_t(t)}" instead of "${t}".`)}let c,u=o[c=Yt(t)]||o[c=Yt(st(t))];!u&&l&&(u=o[c=Yt(_t(t))]),u&&Fn(u,n,6,i);const p=o[c+"Once"];if(p){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Fn(p,n,6,i)}}function Jp(n,t,a=!1){const o=t.emitsCache,i=o.get(n);if(i!==void 0)return i;const l=n.emits;let r={},c=!1;if(!fe(n)){const u=p=>{const d=Jp(p,t,!0);d&&(c=!0,We(r,d))};!a&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!l&&!c?(Oe(n)&&o.set(n,null),null):(ue(l)?l.forEach(u=>r[u]=null):We(r,l),Oe(n)&&o.set(n,r),r)}function si(n,t){return!n||!qs(t)?!1:(t=t.slice(2).replace(/Once$/,""),Me(n,t[0].toLowerCase()+t.slice(1))||Me(n,_t(t))||Me(n,t))}let Xe=null,oi=null;function So(n){const t=Xe;return Xe=n,oi=n&&n.type.__scopeId||null,t}function AW(n){oi=n}function OW(){oi=null}function v(n,t=Xe,a){if(!t||n._n)return n;const o=(...i)=>{o._d&&yc(-1);const l=So(t);let r;try{r=n(...i)}finally{So(l),o._d&&yc(1)}return Qp(t),r};return o._n=!0,o._c=!0,o._d=!0,o}let nl=!1;function Ao(){nl=!0}function vi(n){const{type:t,vnode:a,proxy:o,withProxy:i,props:l,propsOptions:[r],slots:c,attrs:u,emit:p,render:d,renderCache:m,data:f,setupState:h,ctx:g,inheritAttrs:w}=n;let x,T;const $=So(n);nl=!1;try{if(a.shapeFlag&4){const L=i||o;x=Un(d.call(L,L,m,l,h,f,g)),T=u}else{const L=t;u===l&&Ao(),x=Un(L.length>1?L(l,{get attrs(){return Ao(),u},slots:c,emit:p}):L(l,null)),T=t.props?u:vg(u)}}catch(L){ds.length=0,ti(L,n,1),x=S(hn)}let k=x,A;if(x.patchFlag>0&&x.patchFlag&2048&&([k,A]=_g(x)),T&&w!==!1){const L=Object.keys(T),{shapeFlag:H}=k;if(L.length){if(H&7)r&&L.some($o)&&(T=kg(T,r)),k=lt(k,T);else if(!nl&&k.type!==hn){const B=Object.keys(u),R=[],K=[];for(let ie=0,me=B.length;ie<me;ie++){const X=B[ie];qs(X)?$o(X)||R.push(X[2].toLowerCase()+X.slice(3)):K.push(X)}K.length&&V(`Extraneous non-props attributes (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),R.length&&V(`Extraneous non-emits event listeners (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return a.dirs&&(rc(k)||V("Runtime directive used on component with non-element root node. The directives will not function as intended."),k=lt(k),k.dirs=k.dirs?k.dirs.concat(a.dirs):a.dirs),a.transition&&(rc(k)||V("Component inside <Transition> renders non-element root node that cannot be animated."),k.transition=a.transition),A?A(k):x=k,So($),x}const _g=n=>{const t=n.children,a=n.dynamicChildren,o=Zp(t);if(!o)return[n,void 0];const i=t.indexOf(o),l=a?a.indexOf(o):-1,r=c=>{t[i]=c,a&&(l>-1?a[l]=c:c.patchFlag>0&&(n.dynamicChildren=[...a,c]))};return[Un(o),r]};function Zp(n){let t;for(let a=0;a<n.length;a++){const o=n[a];if(qt(o)){if(o.type!==hn||o.children==="v-if"){if(t)return;t=o}}else return}return t}const vg=n=>{let t;for(const a in n)(a==="class"||a==="style"||qs(a))&&((t||(t={}))[a]=n[a]);return t},kg=(n,t)=>{const a={};for(const o in n)(!$o(o)||!(o.slice(9)in t))&&(a[o]=n[o]);return a},rc=n=>n.shapeFlag&7||n.type===hn;function bg(n,t,a){const{props:o,children:i,component:l}=n,{props:r,children:c,patchFlag:u}=t,p=l.emitsOptions;if((i||c)&&It||t.dirs||t.transition)return!0;if(a&&u>=0){if(u&1024)return!0;if(u&16)return o?cc(o,r,p):!!r;if(u&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(r[f]!==o[f]&&!si(p,f))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:o===r?!1:o?r?cc(o,r,p):!0:!!r;return!1}function cc(n,t,a){const o=Object.keys(t);if(o.length!==Object.keys(n).length)return!0;for(let i=0;i<o.length;i++){const l=o[i];if(t[l]!==n[l]&&!si(a,l))return!0}return!1}function yg({vnode:n,parent:t},a){for(;t&&t.subTree===n;)(n=t.vnode).el=a,t=t.parent}const Xp=n=>n.__isSuspense;function wg(n,t){t&&t.pendingBranch?ue(n)?t.effects.push(...n):t.effects.push(n):Bp(n)}function ba(n,t){return ii(n,null,t)}function xg(n,t){return ii(n,null,We({},t,{flush:"post"}))}const to={};function ke(n,t,a){return fe(t)||V("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ii(n,t,a)}function ii(n,t,{immediate:a,deep:o,flush:i,onTrack:l,onTrigger:r}=qe){var c;t||(a!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const u=L=>{V("Invalid watch source: ",L,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=ar()===((c=Ze)==null?void 0:c.scope)?Ze:null;let d,m=!1,f=!1;if(Se(n)?(d=()=>n.value,m=Eo(n)):ua(n)?(d=()=>n,o=!0):ue(n)?(f=!0,m=n.some(L=>ua(L)||Eo(L)),d=()=>n.map(L=>{if(Se(L))return L.value;if(ua(L))return oa(L);if(fe(L))return gt(L,p,2);u(L)})):fe(n)?t?d=()=>gt(n,p,2):d=()=>{if(!(p&&p.isUnmounted))return h&&h(),Fn(n,p,3,[g])}:(d=yn,u(n)),t&&o){const L=d;d=()=>oa(L())}let h,g=L=>{h=k.onStop=()=>{gt(L,p,4)}},w;if(Ls)if(g=yn,t?a&&Fn(t,p,3,[d(),f?[]:void 0,g]):d(),i==="sync"){const L=I_();w=L.__watcherHandles||(L.__watcherHandles=[])}else return yn;let x=f?new Array(n.length).fill(to):to;const T=()=>{if(k.active)if(t){const L=k.run();(o||m||(f?L.some((H,B)=>xs(H,x[B])):xs(L,x)))&&(h&&h(),Fn(t,p,3,[L,x===to?void 0:f&&x[0]===to?[]:x,g]),x=L)}else k.run()};T.allowRecurse=!!t;let $;i==="sync"?$=T:i==="post"?$=()=>nn(T,p&&p.suspense):(T.pre=!0,p&&(T.id=p.uid),$=()=>ai(T));const k=new or(d,$);k.onTrack=l,k.onTrigger=r,t?a?T():x=k.run():i==="post"?nn(k.run.bind(k),p&&p.suspense):k.run();const A=()=>{k.stop(),p&&p.scope&&Zl(p.scope.effects,k)};return w&&w.push(A),A}function Tg(n,t,a){const o=this.proxy,i=je(n)?n.includes(".")?ed(o,n):()=>o[n]:n.bind(o,o);let l;fe(t)?l=t:(l=t.handler,a=t);const r=Ze;Pa(this);const c=ii(i,l.bind(o),a);return r?Pa(r):ma(),c}function ed(n,t){const a=t.split(".");return()=>{let o=n;for(let i=0;i<a.length&&o;i++)o=o[a[i]];return o}}function oa(n,t){if(!Oe(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),Se(n))oa(n.value,t);else if(ue(n))for(let a=0;a<n.length;a++)oa(n[a],t);else if(_p(n)||ra(n))n.forEach(a=>{oa(a,t)});else if(kp(n))for(const a in n)oa(n[a],t);return n}function nd(n){Qf(n)&&V("Do not use built-in directive ids as custom directive id: "+n)}function td(n,t){const a=Xe;if(a===null)return V("withDirectives can only be used inside render functions."),n;const o=ui(a)||a.proxy,i=n.dirs||(n.dirs=[]);for(let l=0;l<t.length;l++){let[r,c,u,p=qe]=t[l];r&&(fe(r)&&(r={mounted:r,updated:r}),r.deep&&oa(c),i.push({dir:r,instance:o,value:c,oldValue:void 0,arg:u,modifiers:p}))}return n}function Vt(n,t,a,o){const i=n.dirs,l=t&&t.dirs;for(let r=0;r<i.length;r++){const c=i[r];l&&(c.oldValue=l[r].value);let u=c.dir[o];u&&(va(),Fn(u,a,8,[n.el,c,n,t]),ka())}}function $g(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bt(()=>{n.isMounted=!0}),js(()=>{n.isUnmounting=!0}),n}const Hn=[Function,Array],zg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Hn,onEnter:Hn,onAfterEnter:Hn,onEnterCancelled:Hn,onBeforeLeave:Hn,onLeave:Hn,onAfterLeave:Hn,onLeaveCancelled:Hn,onBeforeAppear:Hn,onAppear:Hn,onAfterAppear:Hn,onAppearCancelled:Hn};function Mg(n,t){const{leavingVNodes:a}=n;let o=a.get(t.type);return o||(o=Object.create(null),a.set(t.type,o)),o}function tl(n,t,a,o){const{appear:i,mode:l,persisted:r=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:m,onLeave:f,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:w,onAppear:x,onAfterAppear:T,onAppearCancelled:$}=t,k=String(n.key),A=Mg(a,n),L=(R,K)=>{R&&Fn(R,o,9,K)},H=(R,K)=>{const ie=K[1];L(R,K),ue(R)?R.every(me=>me.length<=1)&&ie():R.length<=1&&ie()},B={mode:l,persisted:r,beforeEnter(R){let K=c;if(!a.isMounted)if(i)K=w||c;else return;R._leaveCb&&R._leaveCb(!0);const ie=A[k];ie&&Xt(n,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),L(K,[R])},enter(R){let K=u,ie=p,me=d;if(!a.isMounted)if(i)K=x||u,ie=T||p,me=$||d;else return;let X=!1;const ve=R._enterCb=be=>{X||(X=!0,be?L(me,[R]):L(ie,[R]),B.delayedLeave&&B.delayedLeave(),R._enterCb=void 0)};K?H(K,[R,ve]):ve()},leave(R,K){const ie=String(n.key);if(R._enterCb&&R._enterCb(!0),a.isUnmounting)return K();L(m,[R]);let me=!1;const X=R._leaveCb=ve=>{me||(me=!0,K(),ve?L(g,[R]):L(h,[R]),R._leaveCb=void 0,A[ie]===n&&delete A[ie])};A[ie]=n,f?H(f,[R,X]):X()},clone(R){return tl(R,t,a,o)}};return B}function Oo(n,t){n.shapeFlag&6&&n.component?Oo(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function ad(n,t=!1,a){let o=[],i=0;for(let l=0;l<n.length;l++){let r=n[l];const c=a==null?r.key:String(a)+String(r.key!=null?r.key:l);r.type===Ie?(r.patchFlag&128&&i++,o=o.concat(ad(r.children,t,c))):(t||r.type!==hn)&&o.push(c!=null?lt(r,{key:c}):r)}if(i>1)for(let l=0;l<o.length;l++)o[l].patchFlag=-2;return o}function Ae(n,t){return fe(n)?(()=>We({name:n.name},t,{setup:n}))():n}const Sa=n=>!!n.type.__asyncLoader,hr=n=>n.type.__isKeepAlive,Lg={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:t}){const a=Tn(),o=a.ctx;if(!o.renderer)return()=>{const $=t.default&&t.default();return $&&$.length===1?$[0]:$};const i=new Map,l=new Set;let r=null;a.__v_cache=i;const c=a.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:m}}}=o,f=m("div");o.activate=($,k,A,L,H)=>{const B=$.component;p($,k,A,0,c),u(B.vnode,$,k,A,B,c,L,$.slotScopeIds,H),nn(()=>{B.isDeactivated=!1,B.a&&Zt(B.a);const R=$.props&&$.props.onVnodeMounted;R&&Pn(R,B.parent,$)},c),el(B)},o.deactivate=$=>{const k=$.component;p($,f,null,1,c),nn(()=>{k.da&&Zt(k.da);const A=$.props&&$.props.onVnodeUnmounted;A&&Pn(A,k.parent,$),k.isDeactivated=!0},c),el(k)};function h($){ki($),d($,a,c,!0)}function g($){i.forEach((k,A)=>{const L=Cs(k.type);L&&(!$||!$(L))&&w(A)})}function w($){const k=i.get($);!r||!Xt(k,r)?h(k):r&&ki(r),i.delete($),l.delete($)}ke(()=>[n.include,n.exclude],([$,k])=>{$&&g(A=>is($,A)),k&&g(A=>!is(k,A))},{flush:"post",deep:!0});let x=null;const T=()=>{x!=null&&i.set(x,bi(a.subTree))};return bt(T),ri(T),js(()=>{i.forEach($=>{const{subTree:k,suspense:A}=a,L=bi(k);if($.type===L.type&&$.key===L.key){ki(L);const H=L.component.da;H&&nn(H,A);return}h($)})}),()=>{if(x=null,!t.default)return null;const $=t.default(),k=$[0];if($.length>1)return V("KeepAlive should contain exactly one component child."),r=null,$;if(!qt(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return r=null,k;let A=bi(k);const L=A.type,H=Cs(Sa(A)?A.type.__asyncResolved||{}:L),{include:B,exclude:R,max:K}=n;if(B&&(!H||!is(B,H))||R&&H&&is(R,H))return r=A,k;const ie=A.key==null?L:A.key,me=i.get(ie);return A.el&&(A=lt(A),k.shapeFlag&128&&(k.ssContent=A)),x=ie,me?(A.el=me.el,A.component=me.component,A.transition&&Oo(A,A.transition),A.shapeFlag|=512,l.delete(ie),l.add(ie)):(l.add(ie),K&&l.size>parseInt(K,10)&&w(l.values().next().value)),A.shapeFlag|=256,r=A,Xp(k.type)?k:A}}},sd=Lg;function is(n,t){return ue(n)?n.some(a=>is(a,t)):je(n)?n.split(",").includes(t):Gf(n)?n.test(t):!1}function od(n,t){ld(n,"a",t)}function id(n,t){ld(n,"da",t)}function ld(n,t,a=Ze){const o=n.__wdc||(n.__wdc=()=>{let i=a;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(li(t,o,a),a){let i=a.parent;for(;i&&i.parent;)hr(i.parent.vnode)&&Cg(o,t,a,i),i=i.parent}}function Cg(n,t,a,o){const i=li(t,n,o,!0);Bs(()=>{Zl(o[t],i)},a)}function ki(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function bi(n){return n.shapeFlag&128?n.ssContent:n}function li(n,t,a=Ze,o=!1){if(a){const i=a[n]||(a[n]=[]),l=t.__weh||(t.__weh=(...r)=>{if(a.isUnmounted)return;va(),Pa(a);const c=Fn(t,a,n,r);return ma(),ka(),c});return o?i.unshift(l):i.push(l),l}else{const i=Yt(pr[n].replace(/ hook$/,""));V(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const kt=n=>(t,a=Ze)=>(!Ls||n==="sp")&&li(n,(...o)=>t(...o),a),Eg=kt("bm"),bt=kt("m"),Ig=kt("bu"),ri=kt("u"),js=kt("bum"),Bs=kt("um"),Sg=kt("sp"),Ag=kt("rtg"),Og=kt("rtc");function Hg(n,t=Ze){li("ec",n,t)}const al="components";function Ha(n,t){return Rg(al,n,!0,t)||n}const Pg=Symbol.for("v-ndc");function Rg(n,t,a=!0,o=!1){const i=Xe||Ze;if(i){const l=i.type;if(n===al){const c=Cs(l,!1);if(c&&(c===t||c===st(t)||c===ga(st(t))))return l}const r=uc(i[n]||l[n],t)||uc(i.appContext[n],t);if(!r&&o)return l;if(a&&!r){const c=n===al?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";V(`Failed to resolve ${n.slice(0,-1)}: ${t}${c}`)}return r}else V(`resolve${ga(n.slice(0,-1))} can only be used in render() or setup().`)}function uc(n,t){return n&&(n[t]||n[st(t)]||n[ga(st(t))])}function qa(n,t,a,o){let i;const l=a&&a[o];if(ue(n)||je(n)){i=new Array(n.length);for(let r=0,c=n.length;r<c;r++)i[r]=t(n[r],r,void 0,l&&l[r])}else if(typeof n=="number"){Number.isInteger(n)||V(`The v-for range expect an integer value but got ${n}.`),i=new Array(n);for(let r=0;r<n;r++)i[r]=t(r+1,r,void 0,l&&l[r])}else if(Oe(n))if(n[Symbol.iterator])i=Array.from(n,(r,c)=>t(r,c,void 0,l&&l[c]));else{const r=Object.keys(n);i=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const p=r[c];i[c]=t(n[p],p,c,l&&l[c])}}else i=[];return a&&(a[o]=i),i}function qn(n,t,a={},o,i){if(Xe.isCE||Xe.parent&&Sa(Xe.parent)&&Xe.parent.isCE)return t!=="default"&&(a.name=t),S("slot",a,o&&o());let l=n[t];l&&l.length>1&&(V("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),b();const r=l&&rd(l(a)),c=M(Ie,{key:a.key||r&&r.key||`_${t}`},r||(o?o():[]),r&&n._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function rd(n){return n.some(t=>qt(t)?!(t.type===hn||t.type===Ie&&!rd(t.children)):!0)?n:null}const sl=n=>n?wd(n)?ui(n)||n.proxy:sl(n.parent):null,da=We(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>ss(n.props),$attrs:n=>ss(n.attrs),$slots:n=>ss(n.slots),$refs:n=>ss(n.refs),$parent:n=>sl(n.parent),$root:n=>sl(n.root),$emit:n=>n.emit,$options:n=>_r(n),$forceUpdate:n=>n.f||(n.f=()=>ai(n.update)),$nextTick:n=>n.n||(n.n=on.bind(n.proxy)),$watch:n=>Tg.bind(n)}),gr=n=>n==="_"||n==="$",yi=(n,t)=>n!==qe&&!n.__isScriptSetup&&Me(n,t),cd={get({_:n},t){const{ctx:a,setupState:o,data:i,props:l,accessCache:r,type:c,appContext:u}=n;if(t==="__isVue")return!0;let p;if(t[0]!=="$"){const h=r[t];if(h!==void 0)switch(h){case 1:return o[t];case 2:return i[t];case 4:return a[t];case 3:return l[t]}else{if(yi(o,t))return r[t]=1,o[t];if(i!==qe&&Me(i,t))return r[t]=2,i[t];if((p=n.propsOptions[0])&&Me(p,t))return r[t]=3,l[t];if(a!==qe&&Me(a,t))return r[t]=4,a[t];ol&&(r[t]=0)}}const d=da[t];let m,f;if(d)return t==="$attrs"?(cn(n,"get",t),Ao()):t==="$slots"&&cn(n,"get",t),d(n);if((m=c.__cssModules)&&(m=m[t]))return m;if(a!==qe&&Me(a,t))return r[t]=4,a[t];if(f=u.config.globalProperties,Me(f,t))return f[t];Xe&&(!je(t)||t.indexOf("__v")!==0)&&(i!==qe&&gr(t[0])&&Me(i,t)?V(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===Xe&&V(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:n},t,a){const{data:o,setupState:i,ctx:l}=n;return yi(i,t)?(i[t]=a,!0):i.__isScriptSetup&&Me(i,t)?(V(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==qe&&Me(o,t)?(o[t]=a,!0):Me(n.props,t)?(V(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in n?(V(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in n.appContext.config.globalProperties?Object.defineProperty(l,t,{enumerable:!0,configurable:!0,value:a}):l[t]=a,!0)},has({_:{data:n,setupState:t,accessCache:a,ctx:o,appContext:i,propsOptions:l}},r){let c;return!!a[r]||n!==qe&&Me(n,r)||yi(t,r)||(c=l[0])&&Me(c,r)||Me(o,r)||Me(da,r)||Me(i.config.globalProperties,r)},defineProperty(n,t,a){return a.get!=null?n._.accessCache[t]=0:Me(a,"value")&&this.set(n,t,a.value,null),Reflect.defineProperty(n,t,a)}};cd.ownKeys=n=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function Ng(n){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(da).forEach(a=>{Object.defineProperty(t,a,{configurable:!0,enumerable:!1,get:()=>da[a](n),set:yn})}),t}function Fg(n){const{ctx:t,propsOptions:[a]}=n;a&&Object.keys(a).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n.props[o],set:yn})})}function qg(n){const{ctx:t,setupState:a}=n;Object.keys(_e(a)).forEach(o=>{if(!a.__isScriptSetup){if(gr(o[0])){V(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a[o],set:yn})}})}function Wg(){return Dg().slots}function Dg(){const n=Tn();return n||V("useContext() called without active instance."),n.setupContext||(n.setupContext=Td(n))}function pc(n){return ue(n)?n.reduce((t,a)=>(t[a]=null,t),{}):n}function jg(){const n=Object.create(null);return(t,a)=>{n[a]?V(`${t} property "${a}" is already defined in ${n[a]}.`):n[a]=t}}let ol=!0;function Bg(n){const t=_r(n),a=n.proxy,o=n.ctx;ol=!1,t.beforeCreate&&dc(t.beforeCreate,n,"bc");const{data:i,computed:l,methods:r,watch:c,provide:u,inject:p,created:d,beforeMount:m,mounted:f,beforeUpdate:h,updated:g,activated:w,deactivated:x,beforeDestroy:T,beforeUnmount:$,destroyed:k,unmounted:A,render:L,renderTracked:H,renderTriggered:B,errorCaptured:R,serverPrefetch:K,expose:ie,inheritAttrs:me,components:X,directives:ve,filters:be}=t,xe=jg();{const[ae]=n.propsOptions;if(ae)for(const pe in ae)xe("Props",pe)}if(p&&Vg(p,o,xe),r)for(const ae in r){const pe=r[ae];fe(pe)?(Object.defineProperty(o,ae,{value:pe.bind(a),configurable:!0,enumerable:!0,writable:!0}),xe("Methods",ae)):V(`Method "${ae}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(i){fe(i)||V("The data option must be a function. Plain object usage is no longer supported.");const ae=i.call(a,a);if(er(ae)&&V("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Oe(ae))V("data() should return an object.");else{n.data=Be(ae);for(const pe in ae)xe("Data",pe),gr(pe[0])||Object.defineProperty(o,pe,{configurable:!0,enumerable:!0,get:()=>ae[pe],set:yn})}}if(ol=!0,l)for(const ae in l){const pe=l[ae],ze=fe(pe)?pe.bind(a,a):fe(pe.get)?pe.get.bind(a,a):yn;ze===yn&&V(`Computed property "${ae}" has no getter.`);const Pe=!fe(pe)&&fe(pe.set)?pe.set.bind(a):()=>{V(`Write operation failed: computed property "${ae}" is readonly.`)},An=N({get:ze,set:Pe});Object.defineProperty(o,ae,{enumerable:!0,configurable:!0,get:()=>An.value,set:an=>An.value=an}),xe("Computed",ae)}if(c)for(const ae in c)ud(c[ae],o,a,ae);if(u){const ae=fe(u)?u.call(a):u;Reflect.ownKeys(ae).forEach(pe=>{Cn(pe,ae[pe])})}d&&dc(d,n,"c");function Re(ae,pe){ue(pe)?pe.forEach(ze=>ae(ze.bind(a))):pe&&ae(pe.bind(a))}if(Re(Eg,m),Re(bt,f),Re(Ig,h),Re(ri,g),Re(od,w),Re(id,x),Re(Hg,R),Re(Og,H),Re(Ag,B),Re(js,$),Re(Bs,A),Re(Sg,K),ue(ie))if(ie.length){const ae=n.exposed||(n.exposed={});ie.forEach(pe=>{Object.defineProperty(ae,pe,{get:()=>a[pe],set:ze=>a[pe]=ze})})}else n.exposed||(n.exposed={});L&&n.render===yn&&(n.render=L),me!=null&&(n.inheritAttrs=me),X&&(n.components=X),ve&&(n.directives=ve)}function Vg(n,t,a=yn){ue(n)&&(n=il(n));for(const o in n){const i=n[o];let l;Oe(i)?"default"in i?l=z(i.from||o,i.default,!0):l=z(i.from||o):l=z(i),Se(l)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):t[o]=l,a("Inject",o)}}function dc(n,t,a){Fn(ue(n)?n.map(o=>o.bind(t.proxy)):n.bind(t.proxy),t,a)}function ud(n,t,a,o){const i=o.includes(".")?ed(a,o):()=>a[o];if(je(n)){const l=t[n];fe(l)?ke(i,l):V(`Invalid watch handler specified by key "${n}"`,l)}else if(fe(n))ke(i,n.bind(a));else if(Oe(n))if(ue(n))n.forEach(l=>ud(l,t,a,o));else{const l=fe(n.handler)?n.handler.bind(a):t[n.handler];fe(l)?ke(i,l,n):V(`Invalid watch handler specified by key "${n.handler}"`,l)}else V(`Invalid watch option: "${o}"`,n)}function _r(n){const t=n.type,{mixins:a,extends:o}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=n.appContext,c=l.get(t);let u;return c?u=c:!i.length&&!a&&!o?u=t:(u={},i.length&&i.forEach(p=>Ho(u,p,r,!0)),Ho(u,t,r)),Oe(t)&&l.set(t,u),u}function Ho(n,t,a,o=!1){const{mixins:i,extends:l}=t;l&&Ho(n,l,a,!0),i&&i.forEach(r=>Ho(n,r,a,!0));for(const r in t)if(o&&r==="expose")V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=Ug[r]||a&&a[r];n[r]=c?c(n[r],t[r]):t[r]}return n}const Ug={data:mc,props:fc,emits:fc,methods:ls,computed:ls,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:ls,directives:ls,watch:Gg,provide:mc,inject:Kg};function mc(n,t){return t?n?function(){return We(fe(n)?n.call(this,this):n,fe(t)?t.call(this,this):t)}:t:n}function Kg(n,t){return ls(il(n),il(t))}function il(n){if(ue(n)){const t={};for(let a=0;a<n.length;a++)t[n[a]]=n[a];return t}return n}function pn(n,t){return n?[...new Set([].concat(n,t))]:t}function ls(n,t){return n?We(Object.create(null),n,t):t}function fc(n,t){return n?ue(n)&&ue(t)?[...new Set([...n,...t])]:We(Object.create(null),pc(n),pc(t??{})):t}function Gg(n,t){if(!n)return t;if(!t)return n;const a=We(Object.create(null),n);for(const o in t)a[o]=pn(n[o],t[o]);return a}function pd(){return{app:null,config:{isNativeTag:gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qg=0;function Yg(n,t){return function(o,i=null){fe(o)||(o=We({},o)),i!=null&&!Oe(i)&&(V("root props passed to app.mount() must be an object."),i=null);const l=pd();Object.defineProperty(l.config,"unwrapInjectedRef",{get(){return!0},set(){V("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const r=new Set;let c=!1;const u=l.app={_uid:Qg++,_component:o,_props:i,_container:null,_context:l,_instance:null,version:Fo,get config(){return l.config},set config(p){V("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return r.has(p)?V("Plugin has already been applied to target app."):p&&fe(p.install)?(r.add(p),p.install(u,...d)):fe(p)?(r.add(p),p(u,...d)):V('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return l.mixins.includes(p)?V("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):l.mixins.push(p),u},component(p,d){return pl(p,l.config),d?(l.components[p]&&V(`Component "${p}" has already been registered in target app.`),l.components[p]=d,u):l.components[p]},directive(p,d){return nd(p),d?(l.directives[p]&&V(`Directive "${p}" has already been registered in target app.`),l.directives[p]=d,u):l.directives[p]},mount(p,d,m){if(c)V("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&V("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=S(o,i);return f.appContext=l,l.reload=()=>{n(lt(f),p,m)},d&&t?t(f,p):n(f,p,m),c=!0,u._container=p,p.__vue_app__=u,u._instance=f.component,cg(u,Fo),ui(f.component)||f.component.proxy}},unmount(){c?(n(null,u._container),u._instance=null,ug(u),delete u._container.__vue_app__):V("Cannot unmount an app that is not mounted.")},provide(p,d){return p in l.provides&&V(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),l.provides[p]=d,u},runWithContext(p){Po=u;try{return p()}finally{Po=null}}};return u}}let Po=null;function Cn(n,t){if(!Ze)V("provide() can only be used inside setup().");else{let a=Ze.provides;const o=Ze.parent&&Ze.parent.provides;o===a&&(a=Ze.provides=Object.create(o)),a[n]=t}}function z(n,t,a=!1){const o=Ze||Xe;if(o||Po){const i=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Po._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return a&&fe(t)?t.call(o&&o.proxy):t;V(`injection "${String(n)}" not found.`)}else V("inject() can only be used inside setup() or functional components.")}function Jg(n,t,a,o=!1){const i={},l={};zo(l,ci,1),n.propsDefaults=Object.create(null),dd(n,t,i,l);for(const r in n.propsOptions[0])r in i||(i[r]=void 0);fd(t||{},i,n),a?n.props=o?i:Fh(i):n.type.props?n.props=i:n.props=l,n.attrs=l}function Zg(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function Xg(n,t,a,o){const{props:i,attrs:l,vnode:{patchFlag:r}}=n,c=_e(i),[u]=n.propsOptions;let p=!1;if(!Zg(n)&&(o||r>0)&&!(r&16)){if(r&8){const d=n.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];if(si(n.emitsOptions,f))continue;const h=t[f];if(u)if(Me(l,f))h!==l[f]&&(l[f]=h,p=!0);else{const g=st(f);i[g]=ll(u,c,g,h,n,!1)}else h!==l[f]&&(l[f]=h,p=!0)}}}else{dd(n,t,i,l)&&(p=!0);let d;for(const m in c)(!t||!Me(t,m)&&((d=_t(m))===m||!Me(t,d)))&&(u?a&&(a[m]!==void 0||a[d]!==void 0)&&(i[m]=ll(u,c,m,void 0,n,!0)):delete i[m]);if(l!==c)for(const m in l)(!t||!Me(t,m))&&(delete l[m],p=!0)}p&&ot(n,"set","$attrs"),fd(t||{},i,n)}function dd(n,t,a,o){const[i,l]=n.propsOptions;let r=!1,c;if(t)for(let u in t){if(go(u))continue;const p=t[u];let d;i&&Me(i,d=st(u))?!l||!l.includes(d)?a[d]=p:(c||(c={}))[d]=p:si(n.emitsOptions,u)||(!(u in o)||p!==o[u])&&(o[u]=p,r=!0)}if(l){const u=_e(a),p=c||qe;for(let d=0;d<l.length;d++){const m=l[d];a[m]=ll(i,u,m,p[m],n,!Me(p,m))}}return r}function ll(n,t,a,o,i,l){const r=n[a];if(r!=null){const c=Me(r,"default");if(c&&o===void 0){const u=r.default;if(r.type!==Function&&!r.skipFactory&&fe(u)){const{propsDefaults:p}=i;a in p?o=p[a]:(Pa(i),o=p[a]=u.call(null,t),ma())}else o=u}r[0]&&(l&&!c?o=!1:r[1]&&(o===""||o===_t(a))&&(o=!0))}return o}function md(n,t,a=!1){const o=t.propsCache,i=o.get(n);if(i)return i;const l=n.props,r={},c=[];let u=!1;if(!fe(n)){const d=m=>{u=!0;const[f,h]=md(m,t,!0);We(r,f),h&&c.push(...h)};!a&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!l&&!u)return Oe(n)&&o.set(n,Ea),Ea;if(ue(l))for(let d=0;d<l.length;d++){je(l[d])||V("props must be strings when using array syntax.",l[d]);const m=st(l[d]);hc(m)&&(r[m]=qe)}else if(l){Oe(l)||V("invalid props options",l);for(const d in l){const m=st(d);if(hc(m)){const f=l[d],h=r[m]=ue(f)||fe(f)?{type:f}:We({},f);if(h){const g=_c(Boolean,h.type),w=_c(String,h.type);h[0]=g>-1,h[1]=w<0||g<w,(g>-1||Me(h,"default"))&&c.push(m)}}}}const p=[r,c];return Oe(n)&&o.set(n,p),p}function hc(n){return n[0]!=="$"?!0:(V(`Invalid prop name: "${n}" is a reserved property.`),!1)}function rl(n){const t=n&&n.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:n===null?"null":""}function gc(n,t){return rl(n)===rl(t)}function _c(n,t){return ue(t)?t.findIndex(a=>gc(a,n)):fe(t)&&gc(t,n)?0:-1}function fd(n,t,a){const o=_e(t),i=a.propsOptions[0];for(const l in i){let r=i[l];r!=null&&e_(l,o[l],r,!Me(n,l)&&!Me(n,_t(l)))}}function e_(n,t,a,o){const{type:i,required:l,validator:r,skipCheck:c}=a;if(l&&o){V('Missing required prop: "'+n+'"');return}if(!(t==null&&!l)){if(i!=null&&i!==!0&&!c){let u=!1;const p=ue(i)?i:[i],d=[];for(let m=0;m<p.length&&!u;m++){const{valid:f,expectedType:h}=t_(t,p[m]);d.push(h||""),u=f}if(!u){V(a_(n,t,d));return}}r&&!r(t)&&V('Invalid prop: custom validator check failed for prop "'+n+'".')}}const n_=Dt("String,Number,Boolean,Function,Symbol,BigInt");function t_(n,t){let a;const o=rl(t);if(n_(o)){const i=typeof n;a=i===o.toLowerCase(),!a&&i==="object"&&(a=n instanceof t)}else o==="Object"?a=Oe(n):o==="Array"?a=ue(n):o==="null"?a=n===null:a=n instanceof t;return{valid:a,expectedType:o}}function a_(n,t,a){let o=`Invalid prop: type check failed for prop "${n}". Expected ${a.map(ga).join(" | ")}`;const i=a[0],l=nr(t),r=vc(t,i),c=vc(t,l);return a.length===1&&kc(i)&&!s_(i,l)&&(o+=` with value ${r}`),o+=`, got ${l} `,kc(l)&&(o+=`with value ${c}.`),o}function vc(n,t){return t==="String"?`"${n}"`:t==="Number"?`${Number(n)}`:`${n}`}function kc(n){return["string","number","boolean"].some(a=>n.toLowerCase()===a)}function s_(...n){return n.some(t=>t.toLowerCase()==="boolean")}const hd=n=>n[0]==="_"||n==="$stable",vr=n=>ue(n)?n.map(Un):[Un(n)],o_=(n,t,a)=>{if(t._n)return t;const o=v((...i)=>(Ze&&V(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),vr(t(...i))),a);return o._c=!1,o},gd=(n,t,a)=>{const o=n._ctx;for(const i in n){if(hd(i))continue;const l=n[i];if(fe(l))t[i]=o_(i,l,o);else if(l!=null){V(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);const r=vr(l);t[i]=()=>r}}},_d=(n,t)=>{hr(n.vnode)||V("Non-function value encountered for default slot. Prefer function slots for better performance.");const a=vr(t);n.slots.default=()=>a},i_=(n,t)=>{if(n.vnode.shapeFlag&32){const a=t._;a?(n.slots=_e(t),zo(t,"_",a)):gd(t,n.slots={})}else n.slots={},t&&_d(n,t);zo(n.slots,ci,1)},l_=(n,t,a)=>{const{vnode:o,slots:i}=n;let l=!0,r=qe;if(o.shapeFlag&32){const c=t._;c?It?(We(i,t),ot(n,"set","$slots")):a&&c===1?l=!1:(We(i,t),!a&&c===1&&delete i._):(l=!t.$stable,gd(t,i)),r=t}else t&&(_d(n,t),r={default:1});if(l)for(const c in i)!hd(c)&&!(c in r)&&delete i[c]};function cl(n,t,a,o,i=!1){if(ue(n)){n.forEach((f,h)=>cl(f,t&&(ue(t)?t[h]:t),a,o,i));return}if(Sa(o)&&!i)return;const l=o.shapeFlag&4?ui(o.component)||o.component.proxy:o.el,r=i?null:l,{i:c,r:u}=n;if(!c){V("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=t&&t.r,d=c.refs===qe?c.refs={}:c.refs,m=c.setupState;if(p!=null&&p!==u&&(je(p)?(d[p]=null,Me(m,p)&&(m[p]=null)):Se(p)&&(p.value=null)),fe(u))gt(u,c,12,[r,d]);else{const f=je(u),h=Se(u);if(f||h){const g=()=>{if(n.f){const w=f?Me(m,u)?m[u]:d[u]:u.value;i?ue(w)&&Zl(w,l):ue(w)?w.includes(l)||w.push(l):f?(d[u]=[l],Me(m,u)&&(m[u]=d[u])):(u.value=[l],n.k&&(d[n.k]=u.value))}else f?(d[u]=r,Me(m,u)&&(m[u]=r)):h?(u.value=r,n.k&&(d[n.k]=r)):V("Invalid template ref type:",u,`(${typeof u})`)};r?(g.id=-1,nn(g,a)):g()}else V("Invalid template ref type:",u,`(${typeof u})`)}}let Va,Lt;function ut(n,t){n.appContext.config.performance&&Ro()&&Lt.mark(`vue-${t}-${n.uid}`),mg(n,t,Ro()?Lt.now():Date.now())}function pt(n,t){if(n.appContext.config.performance&&Ro()){const a=`vue-${t}-${n.uid}`,o=a+":end";Lt.mark(o),Lt.measure(`<${pi(n,n.type)}> ${t}`,a,o),Lt.clearMarks(a),Lt.clearMarks(o)}fg(n,t,Ro()?Lt.now():Date.now())}function Ro(){return Va!==void 0||(typeof window<"u"&&window.performance?(Va=!0,Lt=window.performance):Va=!1),Va}function r_(){const n=[];if(n.length){const t=n.length>1;console.warn(`Feature flag${t?"s":""} ${n.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const nn=wg;function c_(n){return u_(n)}function u_(n,t){r_();const a=Mo();a.__VUE__=!0,Gp(a.__VUE_DEVTOOLS_GLOBAL_HOOK__,a);const{insert:o,remove:i,patchProp:l,createElement:r,createText:c,createComment:u,setText:p,setElementText:d,parentNode:m,nextSibling:f,setScopeId:h=yn,insertStaticContent:g}=n,w=(_,y,I,j=null,D=null,Q=null,ne=!1,G=null,J=It?!1:!!y.dynamicChildren)=>{if(_===y)return;_&&!Xt(_,y)&&(j=ee(_),_n(_,D,Q,!0),_=null),y.patchFlag===-2&&(J=!1,y.dynamicChildren=null);const{type:U,ref:ce,shapeFlag:le}=y;switch(U){case Vs:x(_,y,I,j);break;case hn:T(_,y,I,j);break;case ps:_==null?$(y,I,j,ne):k(_,y,I,ne);break;case Ie:ve(_,y,I,j,D,Q,ne,G,J);break;default:le&1?H(_,y,I,j,D,Q,ne,G,J):le&6?be(_,y,I,j,D,Q,ne,G,J):le&64||le&128?U.process(_,y,I,j,D,Q,ne,G,J,se):V("Invalid VNode type:",U,`(${typeof U})`)}ce!=null&&D&&cl(ce,_&&_.ref,Q,y||_,!y)},x=(_,y,I,j)=>{if(_==null)o(y.el=c(y.children),I,j);else{const D=y.el=_.el;y.children!==_.children&&p(D,y.children)}},T=(_,y,I,j)=>{_==null?o(y.el=u(y.children||""),I,j):y.el=_.el},$=(_,y,I,j)=>{[_.el,_.anchor]=g(_.children,y,I,j,_.el,_.anchor)},k=(_,y,I,j)=>{if(y.children!==_.children){const D=f(_.anchor);L(_),[y.el,y.anchor]=g(y.children,I,D,j)}else y.el=_.el,y.anchor=_.anchor},A=({el:_,anchor:y},I,j)=>{let D;for(;_&&_!==y;)D=f(_),o(_,I,j),_=D;o(y,I,j)},L=({el:_,anchor:y})=>{let I;for(;_&&_!==y;)I=f(_),i(_),_=I;i(y)},H=(_,y,I,j,D,Q,ne,G,J)=>{ne=ne||y.type==="svg",_==null?B(y,I,j,D,Q,ne,G,J):ie(_,y,D,Q,ne,G,J)},B=(_,y,I,j,D,Q,ne,G)=>{let J,U;const{type:ce,props:le,shapeFlag:de,transition:ge,dirs:Le}=_;if(J=_.el=r(_.type,Q,le&&le.is,le),de&8?d(J,_.children):de&16&&K(_.children,J,null,j,D,Q&&ce!=="foreignObject",ne,G),Le&&Vt(_,null,j,"created"),R(J,_,_.scopeId,ne,j),le){for(const Fe in le)Fe!=="value"&&!go(Fe)&&l(J,Fe,null,le[Fe],Q,_.children,j,D,P);"value"in le&&l(J,"value",null,le.value),(U=le.onVnodeBeforeMount)&&Pn(U,j,_)}Object.defineProperty(J,"__vnode",{value:_,enumerable:!1}),Object.defineProperty(J,"__vueParentComponent",{value:j,enumerable:!1}),Le&&Vt(_,null,j,"beforeMount");const De=(!D||D&&!D.pendingBranch)&&ge&&!ge.persisted;De&&ge.beforeEnter(J),o(J,y,I),((U=le&&le.onVnodeMounted)||De||Le)&&nn(()=>{U&&Pn(U,j,_),De&&ge.enter(J),Le&&Vt(_,null,j,"mounted")},D)},R=(_,y,I,j,D)=>{if(I&&h(_,I),j)for(let Q=0;Q<j.length;Q++)h(_,j[Q]);if(D){let Q=D.subTree;if(Q.patchFlag>0&&Q.patchFlag&2048&&(Q=Zp(Q.children)||Q),y===Q){const ne=D.vnode;R(_,ne,ne.scopeId,ne.slotScopeIds,D.parent)}}},K=(_,y,I,j,D,Q,ne,G,J=0)=>{for(let U=J;U<_.length;U++){const ce=_[U]=G?zt(_[U]):Un(_[U]);w(null,ce,y,I,j,D,Q,ne,G)}},ie=(_,y,I,j,D,Q,ne)=>{const G=y.el=_.el;let{patchFlag:J,dynamicChildren:U,dirs:ce}=y;J|=_.patchFlag&16;const le=_.props||qe,de=y.props||qe;let ge;I&&Ut(I,!1),(ge=de.onVnodeBeforeUpdate)&&Pn(ge,I,y,_),ce&&Vt(y,_,I,"beforeUpdate"),I&&Ut(I,!0),It&&(J=0,ne=!1,U=null);const Le=D&&y.type!=="foreignObject";if(U?(me(_.dynamicChildren,U,G,I,j,Le,Q),No(_,y)):ne||ze(_,y,G,null,I,j,Le,Q,!1),J>0){if(J&16)X(G,y,le,de,I,j,D);else if(J&2&&le.class!==de.class&&l(G,"class",null,de.class,D),J&4&&l(G,"style",le.style,de.style,D),J&8){const De=y.dynamicProps;for(let Fe=0;Fe<De.length;Fe++){const Ke=De[Fe],jn=le[Ke],xa=de[Ke];(xa!==jn||Ke==="value")&&l(G,Ke,jn,xa,D,_.children,I,j,P)}}J&1&&_.children!==y.children&&d(G,y.children)}else!ne&&U==null&&X(G,y,le,de,I,j,D);((ge=de.onVnodeUpdated)||ce)&&nn(()=>{ge&&Pn(ge,I,y,_),ce&&Vt(y,_,I,"updated")},j)},me=(_,y,I,j,D,Q,ne)=>{for(let G=0;G<y.length;G++){const J=_[G],U=y[G],ce=J.el&&(J.type===Ie||!Xt(J,U)||J.shapeFlag&70)?m(J.el):I;w(J,U,ce,null,j,D,Q,ne,!0)}},X=(_,y,I,j,D,Q,ne)=>{if(I!==j){if(I!==qe)for(const G in I)!go(G)&&!(G in j)&&l(_,G,I[G],null,ne,y.children,D,Q,P);for(const G in j){if(go(G))continue;const J=j[G],U=I[G];J!==U&&G!=="value"&&l(_,G,U,J,ne,y.children,D,Q,P)}"value"in j&&l(_,"value",I.value,j.value)}},ve=(_,y,I,j,D,Q,ne,G,J)=>{const U=y.el=_?_.el:c(""),ce=y.anchor=_?_.anchor:c("");let{patchFlag:le,dynamicChildren:de,slotScopeIds:ge}=y;(It||le&2048)&&(le=0,J=!1,de=null),ge&&(G=G?G.concat(ge):ge),_==null?(o(U,I,j),o(ce,I,j),K(y.children,I,ce,D,Q,ne,G,J)):le>0&&le&64&&de&&_.dynamicChildren?(me(_.dynamicChildren,de,I,D,Q,ne,G),No(_,y)):ze(_,y,I,ce,D,Q,ne,G,J)},be=(_,y,I,j,D,Q,ne,G,J)=>{y.slotScopeIds=G,_==null?y.shapeFlag&512?D.ctx.activate(y,I,j,ne,J):xe(y,I,j,D,Q,ne,J):Re(_,y,J)},xe=(_,y,I,j,D,Q,ne)=>{const G=_.component=y_(_,j,D);if(G.type.__hmrId&&og(G),_o(_),ut(G,"mount"),hr(_)&&(G.ctx.renderer=se),ut(G,"init"),x_(G),pt(G,"init"),G.asyncDep){if(D&&D.registerDep(G,ae),!_.el){const J=G.subTree=S(hn);T(null,J,y,I)}return}ae(G,_,y,I,D,Q,ne),vo(),pt(G,"mount")},Re=(_,y,I)=>{const j=y.component=_.component;if(bg(_,y,I))if(j.asyncDep&&!j.asyncResolved){_o(y),pe(j,y,I),vo();return}else j.next=y,ag(j.update),j.update();else y.el=_.el,j.vnode=y},ae=(_,y,I,j,D,Q,ne)=>{const G=()=>{if(_.isMounted){let{next:ce,bu:le,u:de,parent:ge,vnode:Le}=_,De=ce,Fe;_o(ce||_.vnode),Ut(_,!1),ce?(ce.el=Le.el,pe(_,ce,ne)):ce=Le,le&&Zt(le),(Fe=ce.props&&ce.props.onVnodeBeforeUpdate)&&Pn(Fe,ge,ce,Le),Ut(_,!0),ut(_,"render");const Ke=vi(_);pt(_,"render");const jn=_.subTree;_.subTree=Ke,ut(_,"patch"),w(jn,Ke,m(jn.el),ee(jn),_,D,Q),pt(_,"patch"),ce.el=Ke.el,De===null&&yg(_,Ke.el),de&&nn(de,D),(Fe=ce.props&&ce.props.onVnodeUpdated)&&nn(()=>Pn(Fe,ge,ce,Le),D),Qp(_),vo()}else{let ce;const{el:le,props:de}=y,{bm:ge,m:Le,parent:De}=_,Fe=Sa(y);if(Ut(_,!1),ge&&Zt(ge),!Fe&&(ce=de&&de.onVnodeBeforeMount)&&Pn(ce,De,y),Ut(_,!0),le&&Ne){const Ke=()=>{ut(_,"render"),_.subTree=vi(_),pt(_,"render"),ut(_,"hydrate"),Ne(le,_.subTree,_,D,null),pt(_,"hydrate")};Fe?y.type.__asyncLoader().then(()=>!_.isUnmounted&&Ke()):Ke()}else{ut(_,"render");const Ke=_.subTree=vi(_);pt(_,"render"),ut(_,"patch"),w(null,Ke,I,j,_,D,Q),pt(_,"patch"),y.el=Ke.el}if(Le&&nn(Le,D),!Fe&&(ce=de&&de.onVnodeMounted)){const Ke=y;nn(()=>Pn(ce,De,Ke),D)}(y.shapeFlag&256||De&&Sa(De.vnode)&&De.vnode.shapeFlag&256)&&_.a&&nn(_.a,D),_.isMounted=!0,el(_),y=I=j=null}},J=_.effect=new or(G,()=>ai(U),_.scope),U=_.update=()=>J.run();U.id=_.uid,Ut(_,!0),J.onTrack=_.rtc?ce=>Zt(_.rtc,ce):void 0,J.onTrigger=_.rtg?ce=>Zt(_.rtg,ce):void 0,U.ownerInstance=_,U()},pe=(_,y,I)=>{y.component=_;const j=_.vnode.props;_.vnode=y,_.next=null,Xg(_,y.props,j,I),l_(_,y.children,I),va(),ic(),ka()},ze=(_,y,I,j,D,Q,ne,G,J=!1)=>{const U=_&&_.children,ce=_?_.shapeFlag:0,le=y.children,{patchFlag:de,shapeFlag:ge}=y;if(de>0){if(de&128){An(U,le,I,j,D,Q,ne,G,J);return}else if(de&256){Pe(U,le,I,j,D,Q,ne,G,J);return}}ge&8?(ce&16&&P(U,D,Q),le!==U&&d(I,le)):ce&16?ge&16?An(U,le,I,j,D,Q,ne,G,J):P(U,D,Q,!0):(ce&8&&d(I,""),ge&16&&K(le,I,j,D,Q,ne,G,J))},Pe=(_,y,I,j,D,Q,ne,G,J)=>{_=_||Ea,y=y||Ea;const U=_.length,ce=y.length,le=Math.min(U,ce);let de;for(de=0;de<le;de++){const ge=y[de]=J?zt(y[de]):Un(y[de]);w(_[de],ge,I,null,D,Q,ne,G,J)}U>ce?P(_,D,Q,!0,!1,le):K(y,I,j,D,Q,ne,G,J,le)},An=(_,y,I,j,D,Q,ne,G,J)=>{let U=0;const ce=y.length;let le=_.length-1,de=ce-1;for(;U<=le&&U<=de;){const ge=_[U],Le=y[U]=J?zt(y[U]):Un(y[U]);if(Xt(ge,Le))w(ge,Le,I,null,D,Q,ne,G,J);else break;U++}for(;U<=le&&U<=de;){const ge=_[le],Le=y[de]=J?zt(y[de]):Un(y[de]);if(Xt(ge,Le))w(ge,Le,I,null,D,Q,ne,G,J);else break;le--,de--}if(U>le){if(U<=de){const ge=de+1,Le=ge<ce?y[ge].el:j;for(;U<=de;)w(null,y[U]=J?zt(y[U]):Un(y[U]),I,Le,D,Q,ne,G,J),U++}}else if(U>de)for(;U<=le;)_n(_[U],D,Q,!0),U++;else{const ge=U,Le=U,De=new Map;for(U=Le;U<=de;U++){const un=y[U]=J?zt(y[U]):Un(y[U]);un.key!=null&&(De.has(un.key)&&V("Duplicate keys found during update:",JSON.stringify(un.key),"Make sure keys are unique."),De.set(un.key,U))}let Fe,Ke=0;const jn=de-Le+1;let xa=!1,Qr=0;const Ba=new Array(jn);for(U=0;U<jn;U++)Ba[U]=0;for(U=ge;U<=le;U++){const un=_[U];if(Ke>=jn){_n(un,D,Q,!0);continue}let Zn;if(un.key!=null)Zn=De.get(un.key);else for(Fe=Le;Fe<=de;Fe++)if(Ba[Fe-Le]===0&&Xt(un,y[Fe])){Zn=Fe;break}Zn===void 0?_n(un,D,Q,!0):(Ba[Zn-Le]=U+1,Zn>=Qr?Qr=Zn:xa=!0,w(un,y[Zn],I,null,D,Q,ne,G,J),Ke++)}const Yr=xa?p_(Ba):Ea;for(Fe=Yr.length-1,U=jn-1;U>=0;U--){const un=Le+U,Zn=y[un],Jr=un+1<ce?y[un+1].el:j;Ba[U]===0?w(null,Zn,I,Jr,D,Q,ne,G,J):xa&&(Fe<0||U!==Yr[Fe]?an(Zn,I,Jr,2):Fe--)}}},an=(_,y,I,j,D=null)=>{const{el:Q,type:ne,transition:G,children:J,shapeFlag:U}=_;if(U&6){an(_.component.subTree,y,I,j);return}if(U&128){_.suspense.move(y,I,j);return}if(U&64){ne.move(_,y,I,se);return}if(ne===Ie){o(Q,y,I);for(let le=0;le<J.length;le++)an(J[le],y,I,j);o(_.anchor,y,I);return}if(ne===ps){A(_,y,I);return}if(j!==2&&U&1&&G)if(j===0)G.beforeEnter(Q),o(Q,y,I),nn(()=>G.enter(Q),D);else{const{leave:le,delayLeave:de,afterLeave:ge}=G,Le=()=>o(Q,y,I),De=()=>{le(Q,()=>{Le(),ge&&ge()})};de?de(Q,Le,De):De()}else o(Q,y,I)},_n=(_,y,I,j=!1,D=!1)=>{const{type:Q,props:ne,ref:G,children:J,dynamicChildren:U,shapeFlag:ce,patchFlag:le,dirs:de}=_;if(G!=null&&cl(G,null,I,_,!0),ce&256){y.ctx.deactivate(_);return}const ge=ce&1&&de,Le=!Sa(_);let De;if(Le&&(De=ne&&ne.onVnodeBeforeUnmount)&&Pn(De,y,_),ce&6)On(_.component,I,j);else{if(ce&128){_.suspense.unmount(I,j);return}ge&&Vt(_,null,y,"beforeUnmount"),ce&64?_.type.remove(_,y,I,D,se,j):U&&(Q!==Ie||le>0&&le&64)?P(U,y,I,!1,!0):(Q===Ie&&le&384||!D&&ce&16)&&P(J,y,I),j&&Jn(_)}(Le&&(De=ne&&ne.onVnodeUnmounted)||ge)&&nn(()=>{De&&Pn(De,y,_),ge&&Vt(_,null,y,"unmounted")},I)},Jn=_=>{const{type:y,el:I,anchor:j,transition:D}=_;if(y===Ie){_.patchFlag>0&&_.patchFlag&2048&&D&&!D.persisted?_.children.forEach(ne=>{ne.type===hn?i(ne.el):Jn(ne)}):Bt(I,j);return}if(y===ps){L(_);return}const Q=()=>{i(I),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:ne,delayLeave:G}=D,J=()=>ne(I,Q);G?G(_.el,Q,J):J()}else Q()},Bt=(_,y)=>{let I;for(;_!==y;)I=f(_),i(_),_=I;i(y)},On=(_,y,I)=>{_.type.__hmrId&&ig(_);const{bum:j,scope:D,update:Q,subTree:ne,um:G}=_;j&&Zt(j),D.stop(),Q&&(Q.active=!1,_n(ne,_,y,I)),G&&nn(G,y),nn(()=>{_.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve()),dg(_)},P=(_,y,I,j=!1,D=!1,Q=0)=>{for(let ne=Q;ne<_.length;ne++)_n(_[ne],y,I,j,D)},ee=_=>_.shapeFlag&6?ee(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),te=(_,y,I)=>{_==null?y._vnode&&_n(y._vnode,null,null,!0):w(y._vnode||null,_,y,null,null,null,I),ic(),Vp(),y._vnode=_},se={p:w,um:_n,m:an,r:Jn,mt:xe,mc:K,pc:ze,pbc:me,n:ee,o:n};let $e,Ne;return t&&([$e,Ne]=t(se)),{render:te,hydrate:$e,createApp:Yg(te,$e)}}function Ut({effect:n,update:t},a){n.allowRecurse=t.allowRecurse=a}function No(n,t,a=!1){const o=n.children,i=t.children;if(ue(o)&&ue(i))for(let l=0;l<o.length;l++){const r=o[l];let c=i[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[l]=zt(i[l]),c.el=r.el),a||No(r,c)),c.type===Vs&&(c.el=r.el),c.type===hn&&!c.el&&(c.el=r.el)}}function p_(n){const t=n.slice(),a=[0];let o,i,l,r,c;const u=n.length;for(o=0;o<u;o++){const p=n[o];if(p!==0){if(i=a[a.length-1],n[i]<p){t[o]=i,a.push(o);continue}for(l=0,r=a.length-1;l<r;)c=l+r>>1,n[a[c]]<p?l=c+1:r=c;p<n[a[l]]&&(l>0&&(t[o]=a[l-1]),a[l]=o)}}for(l=a.length,r=a[l-1];l-- >0;)a[l]=r,r=t[r];return a}const d_=n=>n.__isTeleport,Aa=n=>n&&(n.disabled||n.disabled===""),bc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,ul=(n,t)=>{const a=n&&n.to;if(je(a))if(t){const o=t(a);return o||V(`Failed to locate Teleport target with selector "${a}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return V("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!a&&!Aa(n)&&V(`Invalid Teleport target: ${a}`),a},m_={__isTeleport:!0,process(n,t,a,o,i,l,r,c,u,p){const{mc:d,pc:m,pbc:f,o:{insert:h,querySelector:g,createText:w,createComment:x}}=p,T=Aa(t.props);let{shapeFlag:$,children:k,dynamicChildren:A}=t;if(It&&(u=!1,A=null),n==null){const L=t.el=x("teleport start"),H=t.anchor=x("teleport end");h(L,a,o),h(H,a,o);const B=t.target=ul(t.props,g),R=t.targetAnchor=w("");B?(h(R,B),r=r||bc(B)):T||V("Invalid Teleport target on mount:",B,`(${typeof B})`);const K=(ie,me)=>{$&16&&d(k,ie,me,i,l,r,c,u)};T?K(a,H):B&&K(B,R)}else{t.el=n.el;const L=t.anchor=n.anchor,H=t.target=n.target,B=t.targetAnchor=n.targetAnchor,R=Aa(n.props),K=R?a:H,ie=R?L:B;if(r=r||bc(H),A?(f(n.dynamicChildren,A,K,i,l,r,c),No(n,t,!0)):u||m(n,t,K,ie,i,l,r,c,!1),T)R||ao(t,a,L,p,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const me=t.target=ul(t.props,g);me?ao(t,me,null,p,0):V("Invalid Teleport target on update:",H,`(${typeof H})`)}else R&&ao(t,H,B,p,1)}vd(t)},remove(n,t,a,o,{um:i,o:{remove:l}},r){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:m,props:f}=n;if(m&&l(d),(r||!Aa(f))&&(l(p),c&16))for(let h=0;h<u.length;h++){const g=u[h];i(g,t,a,!0,!!g.dynamicChildren)}},move:ao,hydrate:f_};function ao(n,t,a,{o:{insert:o},m:i},l=2){l===0&&o(n.targetAnchor,t,a);const{el:r,anchor:c,shapeFlag:u,children:p,props:d}=n,m=l===2;if(m&&o(r,t,a),(!m||Aa(d))&&u&16)for(let f=0;f<p.length;f++)i(p[f],t,a,2);m&&o(c,t,a)}function f_(n,t,a,o,i,l,{o:{nextSibling:r,parentNode:c,querySelector:u}},p){const d=t.target=ul(t.props,u);if(d){const m=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Aa(t.props))t.anchor=p(r(n),t,c(n),a,o,i,l),t.targetAnchor=m;else{t.anchor=r(n);let f=m;for(;f;)if(f=r(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,d._lpa=t.targetAnchor&&r(t.targetAnchor);break}p(m,t,d,a,o,i,l)}vd(t)}return t.anchor&&r(t.anchor)}const h_=m_;function vd(n){const t=n.ctx;if(t&&t.ut){let a=n.children[0].el;for(;a!==n.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",t.uid),a=a.nextSibling;t.ut()}}const Ie=Symbol.for("v-fgt"),Vs=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),ps=Symbol.for("v-stc"),ds=[];let Gn=null;function b(n=!1){ds.push(Gn=n?null:[])}function g_(){ds.pop(),Gn=ds[ds.length-1]||null}let Ms=1;function yc(n){Ms+=n}function kd(n){return n.dynamicChildren=Ms>0?Gn||Ea:null,g_(),Ms>0&&Gn&&Gn.push(n),n}function oe(n,t,a,o,i,l){return kd(e(n,t,a,o,i,l,!0))}function M(n,t,a,o,i){return kd(S(n,t,a,o,i,!0))}function qt(n){return n?n.__v_isVNode===!0:!1}function Xt(n,t){return t.shapeFlag&6&&La.has(t.type)?(n.shapeFlag&=-257,t.shapeFlag&=-513,!1):n.type===t.type&&n.key===t.key}const __=(...n)=>v_(...n),ci="__vInternal",bd=({key:n})=>n??null,ko=({ref:n,ref_key:t,ref_for:a})=>(typeof n=="number"&&(n=""+n),n!=null?je(n)||Se(n)||fe(n)?{i:Xe,r:n,k:t,f:!!a}:n:null);function e(n,t=null,a=null,o=0,i=null,l=n===Ie?0:1,r=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&bd(t),ref:t&&ko(t),scopeId:oi,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xe};return c?(kr(u,a),l&128&&n.normalize(u)):a&&(u.shapeFlag|=je(a)?8:16),u.key!==u.key&&V("VNode created with invalid key (NaN). VNode type:",u.type),Ms>0&&!r&&Gn&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&Gn.push(u),u}const S=__;function v_(n,t=null,a=null,o=0,i=null,l=!1){if((!n||n===Pg)&&(n||V(`Invalid vnode type when creating vnode: ${n}.`),n=hn),qt(n)){const c=lt(n,t,!0);return a&&kr(c,a),Ms>0&&!l&&Gn&&(c.shapeFlag&6?Gn[Gn.indexOf(n)]=c:Gn.push(c)),c.patchFlag|=-2,c}if($d(n)&&(n=n.__vccOpts),t){t=F(t);let{class:c,style:u}=t;c&&!je(c)&&(t.class=Ve(c)),Oe(u)&&(Io(u)&&!ue(u)&&(u=We({},u)),t.style=tn(u))}const r=je(n)?1:Xp(n)?128:d_(n)?64:Oe(n)?4:fe(n)?2:0;return r&4&&Io(n)&&(n=_e(n),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,t,a,o,i,r,l,!0)}function F(n){return n?Io(n)||ci in n?We({},n):n:null}function lt(n,t,a=!1){const{props:o,ref:i,patchFlag:l,children:r}=n,c=t?Y(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&bd(c),ref:t&&t.ref?a&&i?ue(i)?i.concat(ko(t)):[i,ko(t)]:ko(t):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l===-1&&ue(r)?r.map(yd):r,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ie?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&lt(n.ssContent),ssFallback:n.ssFallback&&lt(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function yd(n){const t=lt(n);return ue(n.children)&&(t.children=n.children.map(yd)),t}function s(n=" ",t=0){return S(Vs,null,n,t)}function we(n="",t=!1){return t?(b(),M(hn,null,n)):S(hn,null,n)}function Un(n){return n==null||typeof n=="boolean"?S(hn):ue(n)?S(Ie,null,n.slice()):typeof n=="object"?zt(n):S(Vs,null,String(n))}function zt(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:lt(n)}function kr(n,t){let a=0;const{shapeFlag:o}=n;if(t==null)t=null;else if(ue(t))a=16;else if(typeof t=="object")if(o&65){const i=t.default;i&&(i._c&&(i._d=!1),kr(n,i()),i._c&&(i._d=!0));return}else{a=32;const i=t._;!i&&!(ci in t)?t._ctx=Xe:i===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else fe(t)?(t={default:t,_ctx:Xe},a=32):(t=String(t),o&64?(a=16,t=[s(t)]):a=8);n.children=t,n.shapeFlag|=a}function Y(...n){const t={};for(let a=0;a<n.length;a++){const o=n[a];for(const i in o)if(i==="class")t.class!==o.class&&(t.class=Ve([t.class,o.class]));else if(i==="style")t.style=tn([t.style,o.style]);else if(qs(i)){const l=t[i],r=o[i];r&&l!==r&&!(ue(l)&&l.includes(r))&&(t[i]=l?[].concat(l,r):r)}else i!==""&&(t[i]=o[i])}return t}function Pn(n,t,a,o=null){Fn(n,t,7,[a,o])}const k_=pd();let b_=0;function y_(n,t,a){const o=n.type,i=(t?t.appContext:n.appContext)||k_,l={uid:b_++,vnode:n,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new xp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:md(o,i),emitsOptions:Jp(o,i),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:o.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=Ng(l),l.root=t?t.root:l,l.emit=gg.bind(null,l),n.ce&&n.ce(l),l}let Ze=null;const Tn=()=>Ze||Xe;let br,Ta,wc="__VUE_INSTANCE_SETTERS__";(Ta=Mo()[wc])||(Ta=Mo()[wc]=[]),Ta.push(n=>Ze=n),br=n=>{Ta.length>1?Ta.forEach(t=>t(n)):Ta[0](n)};const Pa=n=>{br(n),n.scope.on()},ma=()=>{Ze&&Ze.scope.off(),br(null)},w_=Dt("slot,component");function pl(n,t){const a=t.isNativeTag||gp;(w_(n)||a(n))&&V("Do not use built-in or reserved HTML elements as component id: "+n)}function wd(n){return n.vnode.shapeFlag&4}let Ls=!1;function x_(n,t=!1){Ls=t;const{props:a,children:o}=n.vnode,i=wd(n);Jg(n,a,i,t),i_(n,o);const l=i?T_(n,t):void 0;return Ls=!1,l}function T_(n,t){var a;const o=n.type;{if(o.name&&pl(o.name,n.appContext.config),o.components){const l=Object.keys(o.components);for(let r=0;r<l.length;r++)pl(l[r],n.appContext.config)}if(o.directives){const l=Object.keys(o.directives);for(let r=0;r<l.length;r++)nd(l[r])}o.compilerOptions&&$_()&&V('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=ni(new Proxy(n.ctx,cd)),Fg(n);const{setup:i}=o;if(i){const l=n.setupContext=i.length>1?Td(n):null;Pa(n),va();const r=gt(i,n,0,[ss(n.props),l]);if(ka(),ma(),er(r)){if(r.then(ma,ma),t)return r.then(c=>{xc(n,c,t)}).catch(c=>{ti(c,n,0)});if(n.asyncDep=r,!n.suspense){const c=(a=o.name)!=null?a:"Anonymous";V(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else xc(n,r,t)}else xd(n,t)}function xc(n,t,a){fe(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Oe(t)?(qt(t)&&V("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=t,n.setupState=Fp(t),qg(n)):t!==void 0&&V(`setup() should return an object. Received: ${t===null?"null":typeof t}`),xd(n,a)}let dl;const $_=()=>!dl;function xd(n,t,a){const o=n.type;if(!n.render){if(!t&&dl&&!o.render){const i=o.template||_r(n).template;if(i){ut(n,"compile");const{isCustomElement:l,compilerOptions:r}=n.appContext.config,{delimiters:c,compilerOptions:u}=o,p=We(We({isCustomElement:l,delimiters:c},r),u);o.render=dl(i,p),pt(n,"compile")}}n.render=o.render||yn}Pa(n),va(),Bg(n),ka(),ma(),!o.render&&n.render===yn&&!t&&(o.template?V('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):V("Component is missing template or render function."))}function z_(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(t,a){return Ao(),cn(n,"get","$attrs"),t[a]},set(){return V("setupContext.attrs is readonly."),!1},deleteProperty(){return V("setupContext.attrs is readonly."),!1}}))}function M_(n){return n.slotsProxy||(n.slotsProxy=new Proxy(n.slots,{get(t,a){return cn(n,"get","$slots"),t[a]}}))}function Td(n){return Object.freeze({get attrs(){return z_(n)},get slots(){return M_(n)},get emit(){return(a,...o)=>n.emit(a,...o)},expose:a=>{if(n.exposed&&V("expose() should be called only once per setup()."),a!=null){let o=typeof a;o==="object"&&(ue(a)?o="array":Se(a)&&(o="ref")),o!=="object"&&V(`expose() should be passed a plain object, received ${o}.`)}n.exposed=a||{}}})}function ui(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Fp(ni(n.exposed)),{get(t,a){if(a in t)return t[a];if(a in da)return da[a](n)},has(t,a){return a in t||a in da}}))}const L_=/(?:^|[-_])(\w)/g,C_=n=>n.replace(L_,t=>t.toUpperCase()).replace(/[-_]/g,"");function Cs(n,t=!0){return fe(n)?n.displayName||n.name:n.name||t&&n.__name}function pi(n,t,a=!1){let o=Cs(t);if(!o&&t.__file){const i=t.__file.match(/([^/\\]+)\.\w+$/);i&&(o=i[1])}if(!o&&n&&n.parent){const i=l=>{for(const r in l)if(l[r]===t)return r};o=i(n.components||n.parent.type.components)||i(n.appContext.components)}return o?C_(o):a?"App":"Anonymous"}function $d(n){return fe(n)&&"__vccOpts"in n}const N=(n,t)=>Gh(n,t,Ls);function xn(n,t,a){const o=arguments.length;return o===2?Oe(t)&&!ue(t)?qt(t)?S(n,null,[t]):S(n,t):S(n,null,t):(o>3?a=Array.prototype.slice.call(arguments,2):o===3&&qt(a)&&(a=[a]),S(n,t,a))}const E_=Symbol.for("v-scx"),I_=()=>{{const n=z(E_);return n||V("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function wi(n){return!!(n&&n.__v_isShallow)}function S_(){if(typeof window>"u")return;const n={style:"color:#3ba776"},t={style:"color:#0b1bc9"},a={style:"color:#b62e24"},o={style:"color:#9d288c"},i={header(m){return Oe(m)?m.__isVue?["div",n,"VueInstance"]:Se(m)?["div",{},["span",n,d(m)],"<",c(m.value),">"]:ua(m)?["div",{},["span",n,wi(m)?"ShallowReactive":"Reactive"],"<",c(m),`>${Ft(m)?" (readonly)":""}`]:Ft(m)?["div",{},["span",n,wi(m)?"ShallowReadonly":"Readonly"],"<",c(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...l(m.$)]}};function l(m){const f=[];m.type.props&&m.props&&f.push(r("props",_e(m.props))),m.setupState!==qe&&f.push(r("setup",m.setupState)),m.data!==qe&&f.push(r("data",_e(m.data)));const h=u(m,"computed");h&&f.push(r("computed",h));const g=u(m,"inject");return g&&f.push(r("injected",g)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),f}function r(m,f){return f=We({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",o,h+": "],c(f[h],!1)])]]:["span",{}]}function c(m,f=!0){return typeof m=="number"?["span",t,m]:typeof m=="string"?["span",a,JSON.stringify(m)]:typeof m=="boolean"?["span",o,m]:Oe(m)?["object",{object:f?_e(m):m}]:["span",a,String(m)]}function u(m,f){const h=m.type;if(fe(h))return;const g={};for(const w in m.ctx)p(h,w,f)&&(g[w]=m.ctx[w]);return g}function p(m,f,h){const g=m[h];if(ue(g)&&g.includes(f)||Oe(g)&&f in g||m.extends&&p(m.extends,f,h)||m.mixins&&m.mixins.some(w=>p(w,f,h)))return!0}function d(m){return wi(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(i):window.devtoolsFormatters=[i]}const Fo="3.3.4",A_="http://www.w3.org/2000/svg",ea=typeof document<"u"?document:null,Tc=ea&&ea.createElement("template"),O_={insert:(n,t,a)=>{t.insertBefore(n,a||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,a,o)=>{const i=t?ea.createElementNS(A_,n):ea.createElement(n,a?{is:a}:void 0);return n==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:n=>ea.createTextNode(n),createComment:n=>ea.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ea.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,a,o,i,l){const r=a?a.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),a),!(i===l||!(i=i.nextSibling)););else{Tc.innerHTML=o?`<svg>${n}</svg>`:n;const c=Tc.content;if(o){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,a)}return[r?r.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}};function H_(n,t,a){const o=n._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?n.removeAttribute("class"):a?n.setAttribute("class",t):n.className=t}function P_(n,t,a){const o=n.style,i=je(a);if(a&&!i){if(t&&!je(t))for(const l in t)a[l]==null&&ml(o,l,"");for(const l in a)ml(o,l,a[l])}else{const l=o.display;i?t!==a&&(o.cssText=a):t&&n.removeAttribute("style"),"_vod"in n&&(o.display=l)}}const R_=/[^\\];\s*$/,$c=/\s*!important$/;function ml(n,t,a){if(ue(a))a.forEach(o=>ml(n,t,o));else if(a==null&&(a=""),R_.test(a)&&V(`Unexpected semicolon at the end of '${t}' style value: '${a}'`),t.startsWith("--"))n.setProperty(t,a);else{const o=N_(n,t);$c.test(a)?n.setProperty(_t(o),a.replace($c,""),"important"):n[o]=a}}const zc=["Webkit","Moz","ms"],xi={};function N_(n,t){const a=xi[t];if(a)return a;let o=st(t);if(o!=="filter"&&o in n)return xi[t]=o;o=ga(o);for(let i=0;i<zc.length;i++){const l=zc[i]+o;if(l in n)return xi[t]=l}return t}const Mc="http://www.w3.org/1999/xlink";function F_(n,t,a,o,i){if(o&&t.startsWith("xlink:"))a==null?n.removeAttributeNS(Mc,t.slice(6,t.length)):n.setAttributeNS(Mc,t,a);else{const l=rh(t);a==null||l&&!yp(a)?n.removeAttribute(t):n.setAttribute(t,l?"":a)}}function q_(n,t,a,o,i,l,r){if(t==="innerHTML"||t==="textContent"){o&&r(o,i,l),n[t]=a??"";return}const c=n.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){n._value=a;const p=c==="OPTION"?n.getAttribute("value"):n.value,d=a??"";p!==d&&(n.value=d),a==null&&n.removeAttribute(t);return}let u=!1;if(a===""||a==null){const p=typeof n[t];p==="boolean"?a=yp(a):a==null&&p==="string"?(a="",u=!0):p==="number"&&(a=0,u=!0)}try{n[t]=a}catch(p){u||V(`Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${a} is invalid.`,p)}u&&n.removeAttribute(t)}function W_(n,t,a,o){n.addEventListener(t,a,o)}function D_(n,t,a,o){n.removeEventListener(t,a,o)}function j_(n,t,a,o,i=null){const l=n._vei||(n._vei={}),r=l[t];if(o&&r)r.value=o;else{const[c,u]=B_(t);if(o){const p=l[t]=K_(o,i);W_(n,c,p,u)}else r&&(D_(n,c,r,u),l[t]=void 0)}}const Lc=/(?:Once|Passive|Capture)$/;function B_(n){let t;if(Lc.test(n)){t={};let o;for(;o=n.match(Lc);)n=n.slice(0,n.length-o[0].length),t[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_t(n.slice(2)),t]}let Ti=0;const V_=Promise.resolve(),U_=()=>Ti||(V_.then(()=>Ti=0),Ti=Date.now());function K_(n,t){const a=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=a.attached)return;Fn(G_(o,a.value),t,5,[o])};return a.value=n,a.attached=U_(),a}function G_(n,t){if(ue(t)){const a=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{a.call(n),n._stopped=!0},t.map(o=>i=>!i._stopped&&o&&o(i))}else return t}const Cc=/^on[a-z]/,Q_=(n,t,a,o,i=!1,l,r,c,u)=>{t==="class"?H_(n,o,i):t==="style"?P_(n,a,o):qs(t)?$o(t)||j_(n,t,a,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Y_(n,t,o,i))?q_(n,t,o,l,r,c,u):(t==="true-value"?n._trueValue=o:t==="false-value"&&(n._falseValue=o),F_(n,t,o,i))};function Y_(n,t,a,o){return o?!!(t==="innerHTML"||t==="textContent"||t in n&&Cc.test(t)&&fe(a)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||Cc.test(t)&&je(a)?!1:t in n}function zd(n){const t=Tn();if(!t){V("useCssVars is called without current active component instance.");return}const a=t.ut=(i=n(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(l=>hl(l,i))},o=()=>{const i=n(t.proxy);fl(t.subTree,i),a(i)};xg(o),bt(()=>{const i=new MutationObserver(o);i.observe(t.subTree.el.parentNode,{childList:!0}),Bs(()=>i.disconnect())})}function fl(n,t){if(n.shapeFlag&128){const a=n.suspense;n=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{fl(a.activeBranch,t)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)hl(n.el,t);else if(n.type===Ie)n.children.forEach(a=>fl(a,t));else if(n.type===ps){let{el:a,anchor:o}=n;for(;a&&(hl(a,t),a!==o);)a=a.nextSibling}}function hl(n,t){if(n.nodeType===1){const a=n.style;for(const o in t)a.setProperty(`--${o}`,t[o])}}const wt="transition",Ua="animation",Md={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},J_=We({},zg,Md),Kt=(n,t=[])=>{ue(n)?n.forEach(a=>a(...t)):n&&n(...t)},Ec=n=>n?ue(n)?n.some(t=>t.length>1):n.length>1:!1;function Z_(n){const t={};for(const X in n)X in Md||(t[X]=n[X]);if(n.css===!1)return t;const{name:a="v",type:o,duration:i,enterFromClass:l=`${a}-enter-from`,enterActiveClass:r=`${a}-enter-active`,enterToClass:c=`${a}-enter-to`,appearFromClass:u=l,appearActiveClass:p=r,appearToClass:d=c,leaveFromClass:m=`${a}-leave-from`,leaveActiveClass:f=`${a}-leave-active`,leaveToClass:h=`${a}-leave-to`}=n,g=X_(i),w=g&&g[0],x=g&&g[1],{onBeforeEnter:T,onEnter:$,onEnterCancelled:k,onLeave:A,onLeaveCancelled:L,onBeforeAppear:H=T,onAppear:B=$,onAppearCancelled:R=k}=t,K=(X,ve,be)=>{Tt(X,ve?d:c),Tt(X,ve?p:r),be&&be()},ie=(X,ve)=>{X._isLeaving=!1,Tt(X,m),Tt(X,h),Tt(X,f),ve&&ve()},me=X=>(ve,be)=>{const xe=X?B:$,Re=()=>K(ve,X,be);Kt(xe,[ve,Re]),Ic(()=>{Tt(ve,X?u:l),dt(ve,X?d:c),Ec(xe)||Sc(ve,o,w,Re)})};return We(t,{onBeforeEnter(X){Kt(T,[X]),dt(X,l),dt(X,r)},onBeforeAppear(X){Kt(H,[X]),dt(X,u),dt(X,p)},onEnter:me(!1),onAppear:me(!0),onLeave(X,ve){X._isLeaving=!0;const be=()=>ie(X,ve);dt(X,m),Cd(),dt(X,f),Ic(()=>{X._isLeaving&&(Tt(X,m),dt(X,h),Ec(A)||Sc(X,o,x,be))}),Kt(A,[X,be])},onEnterCancelled(X){K(X,!1),Kt(k,[X])},onAppearCancelled(X){K(X,!0),Kt(R,[X])},onLeaveCancelled(X){ie(X),Kt(L,[X])}})}function X_(n){if(n==null)return null;if(Oe(n))return[$i(n.enter),$i(n.leave)];{const t=$i(n);return[t,t]}}function $i(n){const t=Xf(n);return Xh(t,"<transition> explicit duration"),t}function dt(n,t){t.split(/\s+/).forEach(a=>a&&n.classList.add(a)),(n._vtc||(n._vtc=new Set)).add(t)}function Tt(n,t){t.split(/\s+/).forEach(o=>o&&n.classList.remove(o));const{_vtc:a}=n;a&&(a.delete(t),a.size||(n._vtc=void 0))}function Ic(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let ev=0;function Sc(n,t,a,o){const i=n._endId=++ev,l=()=>{i===n._endId&&o()};if(a)return setTimeout(l,a);const{type:r,timeout:c,propCount:u}=Ld(n,t);if(!r)return o();const p=r+"end";let d=0;const m=()=>{n.removeEventListener(p,f),l()},f=h=>{h.target===n&&++d>=u&&m()};setTimeout(()=>{d<u&&m()},c+1),n.addEventListener(p,f)}function Ld(n,t){const a=window.getComputedStyle(n),o=g=>(a[g]||"").split(", "),i=o(`${wt}Delay`),l=o(`${wt}Duration`),r=Ac(i,l),c=o(`${Ua}Delay`),u=o(`${Ua}Duration`),p=Ac(c,u);let d=null,m=0,f=0;t===wt?r>0&&(d=wt,m=r,f=l.length):t===Ua?p>0&&(d=Ua,m=p,f=u.length):(m=Math.max(r,p),d=m>0?r>p?wt:Ua:null,f=d?d===wt?l.length:u.length:0);const h=d===wt&&/\b(transform|all)(,|$)/.test(o(`${wt}Property`).toString());return{type:d,timeout:m,propCount:f,hasTransform:h}}function Ac(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((a,o)=>Oc(a)+Oc(n[o])))}function Oc(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function Cd(){return document.body.offsetHeight}const Ed=new WeakMap,Id=new WeakMap,Sd={name:"TransitionGroup",props:We({},J_,{tag:String,moveClass:String}),setup(n,{slots:t}){const a=Tn(),o=$g();let i,l;return ri(()=>{if(!i.length)return;const r=n.moveClass||`${n.name||"v"}-move`;if(!iv(i[0].el,a.vnode.el,r))return;i.forEach(av),i.forEach(sv);const c=i.filter(ov);Cd(),c.forEach(u=>{const p=u.el,d=p.style;dt(p,r),d.transform=d.webkitTransform=d.transitionDuration="";const m=p._moveCb=f=>{f&&f.target!==p||(!f||/transform$/.test(f.propertyName))&&(p.removeEventListener("transitionend",m),p._moveCb=null,Tt(p,r))};p.addEventListener("transitionend",m)})}),()=>{const r=_e(n),c=Z_(r);let u=r.tag||Ie;i=l,l=t.default?ad(t.default()):[];for(let p=0;p<l.length;p++){const d=l[p];d.key!=null?Oo(d,tl(d,c,o,a)):V("<TransitionGroup> children must be keyed.")}if(i)for(let p=0;p<i.length;p++){const d=i[p];Oo(d,tl(d,c,o,a)),Ed.set(d,d.el.getBoundingClientRect())}return S(u,null,l)}}},nv=n=>delete n.mode;Sd.props;const tv=Sd;function av(n){const t=n.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function sv(n){Id.set(n,n.el.getBoundingClientRect())}function ov(n){const t=Ed.get(n),a=Id.get(n),o=t.left-a.left,i=t.top-a.top;if(o||i){const l=n.el.style;return l.transform=l.webkitTransform=`translate(${o}px,${i}px)`,l.transitionDuration="0s",n}}function iv(n,t,a){const o=n.cloneNode();n._vtc&&n._vtc.forEach(r=>{r.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),a.split(/\s+/).forEach(r=>r&&o.classList.add(r)),o.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(o);const{hasTransform:l}=Ld(o);return i.removeChild(o),l}const lv=["ctrl","shift","alt","meta"],rv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>lv.some(a=>n[`${a}Key`]&&!t.includes(a))},cv=(n,t)=>(a,...o)=>{for(let i=0;i<t.length;i++){const l=rv[t[i]];if(l&&l(a,t))return}return n(a,...o)},uv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},so=(n,t)=>a=>{if(!("key"in a))return;const o=_t(a.key);if(t.some(i=>i===o||uv[i]===o))return n(a)},Ad={beforeMount(n,{value:t},{transition:a}){n._vod=n.style.display==="none"?"":n.style.display,a&&t?a.beforeEnter(n):Ka(n,t)},mounted(n,{value:t},{transition:a}){a&&t&&a.enter(n)},updated(n,{value:t,oldValue:a},{transition:o}){!t!=!a&&(o?t?(o.beforeEnter(n),Ka(n,!0),o.enter(n)):o.leave(n,()=>{Ka(n,!1)}):Ka(n,t))},beforeUnmount(n,{value:t}){Ka(n,t)}};function Ka(n,t){n.style.display=t?n._vod:"none"}const pv=We({patchProp:Q_},O_);let Hc;function dv(){return Hc||(Hc=c_(pv))}const mv=(...n)=>{const t=dv().createApp(...n);fv(t),hv(t);const{mount:a}=t;return t.mount=o=>{const i=gv(o);if(!i)return;const l=t._component;!fe(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.innerHTML="";const r=a(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function fv(n){Object.defineProperty(n.config,"isNativeTag",{value:t=>bp(t)||ih(t),writable:!1})}function hv(n){{const t=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return t},set(){V("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const a=n.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(n.config,"compilerOptions",{get(){return V(o),a},set(){V(o)}})}}function gv(n){if(je(n)){const t=document.querySelector(n);return t||V(`Failed to mount app: mount target selector "${n}" returned null.`),t}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&V('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function _v(){S_()}_v();function gl(n,t={},a){for(const o in n){const i=n[o],l=a?`${a}:${o}`:o;typeof i=="object"&&i!==null?gl(i,t,l):typeof i=="function"&&(t[l]=i)}return t}const vv={run:n=>n()},kv=()=>vv,Od=typeof console.createTask<"u"?console.createTask:kv;function bv(n,t){const a=t.shift(),o=Od(a);return n.reduce((i,l)=>i.then(()=>o.run(()=>l(...t))),Promise.resolve())}function yv(n,t){const a=t.shift(),o=Od(a);return Promise.all(n.map(i=>o.run(()=>i(...t))))}function zi(n,t){for(const a of[...n])a(t)}class wv{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,a,o={}){if(!t||typeof a!="function")return()=>{};const i=t;let l;for(;this._deprecatedHooks[t];)l=this._deprecatedHooks[t],t=l.to;if(l&&!o.allowDeprecated){let r=l.message;r||(r=`${i} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!a.name)try{Object.defineProperty(a,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(a),()=>{a&&(this.removeHook(t,a),a=void 0)}}hookOnce(t,a){let o,i=(...l)=>(typeof o=="function"&&o(),o=void 0,i=void 0,a(...l));return o=this.hook(t,i),o}removeHook(t,a){if(this._hooks[t]){const o=this._hooks[t].indexOf(a);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,a){this._deprecatedHooks[t]=typeof a=="string"?{to:a}:a;const o=this._hooks[t]||[];delete this._hooks[t];for(const i of o)this.hook(t,i)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const a in t)this.deprecateHook(a,t[a])}addHooks(t){const a=gl(t),o=Object.keys(a).map(i=>this.hook(i,a[i]));return()=>{for(const i of o.splice(0,o.length))i()}}removeHooks(t){const a=gl(t);for(const o in a)this.removeHook(o,a[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...a){return a.unshift(t),this.callHookWith(bv,t,...a)}callHookParallel(t,...a){return a.unshift(t),this.callHookWith(yv,t,...a)}callHookWith(t,a,...o){const i=this._before||this._after?{name:a,args:o,context:{}}:void 0;this._before&&zi(this._before,i);const l=t(a in this._hooks?[...this._hooks[a]]:[],o);return l instanceof Promise?l.finally(()=>{this._after&&i&&zi(this._after,i)}):(this._after&&i&&zi(this._after,i),l)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const a=this._before.indexOf(t);a!==-1&&this._before.splice(a,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const a=this._after.indexOf(t);a!==-1&&this._after.splice(a,1)}}}}function xv(){return new wv}function Tv(n){return Array.isArray(n)?n:[n]}const Hd=["title","script","style","noscript"],Pd=["base","meta","link","style","script","noscript"],$v=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],zv=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Mv=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Rd(n){let t=9;for(let a=0;a<n.length;)t=Math.imul(t^n.charCodeAt(a++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function _l(n){return Rd(`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([t,a])=>`${t}:${String(a)}`).join(",")}`)}function Lv(n){let t=9;for(const a of n)for(let o=0;o<a.length;)t=Math.imul(t^a.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Nd(n,t){const{props:a,tag:o}=n;if(zv.includes(o))return o;if(o==="link"&&a.rel==="canonical")return"canonical";if(a.charset)return"charset";const i=["id"];o==="meta"&&i.push("name","property","http-equiv");for(const l of i)if(typeof a[l]<"u"){const r=String(a[l]);return t&&!t(r)?!1:`${o}:${l}:${r}`}return!1}function Pc(n,t){return n==null?t||null:typeof n=="function"?n(t):n}function oo(n,t=!1,a){const{tag:o,$el:i}=n;i&&(Object.entries(o.props).forEach(([l,r])=>{r=String(r);const c=`attr:${l}`;if(l==="class"){if(!r)return;for(const u of r.split(" ")){const p=`${c}:${u}`;a&&a(n,p,()=>i.classList.remove(u)),i.classList.contains(u)||i.classList.add(u)}return}a&&!l.startsWith("data-h-")&&a(n,c,()=>i.removeAttribute(l)),(t||i.getAttribute(l)!==r)&&i.setAttribute(l,r)}),Hd.includes(o.tag)&&(o.textContent&&o.textContent!==i.textContent?i.textContent=o.textContent:o.innerHTML&&o.innerHTML!==i.innerHTML&&(i.innerHTML=o.innerHTML)))}let Ga=!1;async function Fd(n,t={}){var f,h;const a={shouldRender:!0};if(await n.hooks.callHook("dom:beforeRender",a),!a.shouldRender)return;const o=t.document||n.resolvedOptions.document||window.document,i=(await n.resolveTags()).map(c);if(n.resolvedOptions.experimentalHashHydration&&(Ga=Ga||n._hash||!1,Ga)){const g=Lv(i.map(w=>w.tag._h));if(Ga===g)return;Ga=g}const l=n._popSideEffectQueue();n.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([w,x])=>{l[w]=x})});const r=(g,w,x)=>{w=`${g.renderId}:${w}`,g.entry&&(g.entry._sde[w]=x),delete l[w]};function c(g){const w=n.headEntries().find(T=>T._i===g._e),x={renderId:g._d||_l(g),$el:null,shouldRender:!0,tag:g,entry:w,markSideEffect:(T,$)=>r(x,T,$)};return x}const u=[],p={body:[],head:[]},d=g=>{n._elMap[g.renderId]=g.$el,u.push(g),r(g,"el",()=>{var w;(w=g.$el)==null||w.remove(),delete n._elMap[g.renderId]})};for(const g of i){if(await n.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:w}=g;if(w.tag==="title"){o.title=w.textContent||"",u.push(g);continue}if(w.tag==="htmlAttrs"||w.tag==="bodyAttrs"){g.$el=o[w.tag==="htmlAttrs"?"documentElement":"body"],oo(g,!1,r),u.push(g);continue}if(g.$el=n._elMap[g.renderId],!g.$el&&w.key&&(g.$el=o.querySelector(`${(f=w.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${w.tag}[data-h-${w._h}]`)),g.$el){g.tag._d&&oo(g),d(g);continue}p[(h=w.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(g)}const m={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([g,w])=>{var T;if(!w.length)return;const x=(T=o==null?void 0:o[g])==null?void 0:T.children;if(x){for(const $ of[...x].reverse()){const k=$.tagName.toLowerCase();if(!Pd.includes(k))continue;const A=$.getAttributeNames().reduce((R,K)=>({...R,[K]:$.getAttribute(K)}),{}),L={tag:k,props:A};$.innerHTML&&(L.innerHTML=$.innerHTML);const H=_l(L);let B=w.findIndex(R=>(R==null?void 0:R.renderId)===H);if(B===-1){const R=Nd(L);B=w.findIndex(K=>(K==null?void 0:K.tag._d)&&K.tag._d===R)}if(B!==-1){const R=w[B];R.$el=$,oo(R),d(R),delete w[B]}}w.forEach($=>{const k=$.tag.tagPosition||"head";m[k]=m[k]||o.createDocumentFragment(),$.$el||($.$el=o.createElement($.tag.tag),oo($,!0)),m[k].appendChild($.$el),d($)})}}),m.head&&o.head.appendChild(m.head),m.bodyOpen&&o.body.insertBefore(m.bodyOpen,o.body.firstChild),m.bodyClose&&o.body.appendChild(m.bodyClose);for(const g of u)await n.hooks.callHook("dom:renderTag",g);Object.values(l).forEach(g=>g())}let Mi=null;async function qd(n,t={}){function a(){return Mi=null,Fd(n,t)}const o=t.delayFn||(i=>setTimeout(i,10));return Mi=Mi||new Promise(i=>o(()=>i(a())))}function Cv(n){return{hooks:{"entries:updated":function(t){if(typeof(n==null?void 0:n.document)>"u"&&typeof window>"u")return;let a=n==null?void 0:n.delayFn;!a&&typeof requestAnimationFrame<"u"&&(a=requestAnimationFrame),qd(t,{document:(n==null?void 0:n.document)||window.document,delayFn:a})}}}}function Ev(n){var t;return((t=n==null?void 0:n.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const Rc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Nc(n){if(typeof n.tagPriority=="number")return n.tagPriority;if(n.tag==="meta"){if(n.props.charset)return-2;if(n.props["http-equiv"]==="content-security-policy")return 0}const t=n.tagPriority||n.tag;return t in Rc?Rc[t]:10}const Iv=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Sv(){return{hooks:{"tags:resolve":n=>{const t=a=>{var o;return(o=n.tags.find(i=>i._d===a))==null?void 0:o._p};for(const{prefix:a,offset:o}of Iv)for(const i of n.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(a))){const l=t(i.tagPriority.replace(a,""));typeof l<"u"&&(i._p=l+o)}n.tags.sort((a,o)=>a._p-o._p).sort((a,o)=>Nc(a)-Nc(o))}}}}function Av(){return{hooks:{"tags:resolve":n=>{const{tags:t}=n;let a=t.findIndex(i=>i.tag==="titleTemplate");const o=t.findIndex(i=>i.tag==="title");if(o!==-1&&a!==-1){const i=Pc(t[a].textContent,t[o].textContent);i!==null?t[o].textContent=i||t[o].textContent:delete t[o]}else if(a!==-1){const i=Pc(t[a].textContent);i!==null&&(t[a].textContent=i,t[a].tag="title",a=-1)}a!==-1&&delete t[a],n.tags=t.filter(Boolean)}}}}function Ov(){return{hooks:{"tag:normalise":function({tag:n}){typeof n.props.body<"u"&&(n.tagPosition="bodyClose",delete n.props.body)}}}}const Hv=["link","style","script","noscript"];function Pv(){return{hooks:{"tag:normalise":({tag:n,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(n._h=_l(n)),n.key&&Hv.includes(n.tag)&&(n._h=Rd(n.key),n.props[`data-h-${n._h}`]="")}}}}const Fc=["script","link","bodyAttrs"];function Rv(){const n=(t,a)=>{const o={},i={};Object.entries(a.props).forEach(([r,c])=>{r.startsWith("on")&&typeof c=="function"?i[r]=c:o[r]=c});let l;return t==="dom"&&a.tag==="script"&&typeof o.src=="string"&&typeof i.onload<"u"&&(l=o.src,delete o.src),{props:o,eventHandlers:i,delayedSrc:l}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(a=>(!Fc.includes(a.tag)||!Object.entries(a.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function")||(a.props=n("ssr",a).props),a))},"dom:beforeRenderTag":function(t){if(!Fc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([l,r])=>l.startsWith("on")&&typeof r=="function"))return;const{props:a,eventHandlers:o,delayedSrc:i}=n("dom",t.tag);Object.keys(o).length&&(t.tag.props=a,t.tag._eventHandlers=o,t.tag._delayedSrc=i)},"dom:renderTag":function(t){const a=t.$el;if(!t.tag._eventHandlers||!a)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:a;Object.entries(t.tag._eventHandlers).forEach(([i,l])=>{const r=`${t.tag._d||t.tag._p}:${i}`,c=i.slice(2).toLowerCase(),u=`data-h-${c}`;if(t.markSideEffect(r,()=>{}),a.hasAttribute(u))return;const p=l;a.setAttribute(u,""),o.addEventListener(c,p),t.entry&&(t.entry._sde[r]=()=>{o.removeEventListener(c,p),a.removeAttribute(u)})}),t.tag._delayedSrc&&a.setAttribute("src",t.tag._delayedSrc)}}}}const Nv=["templateParams","htmlAttrs","bodyAttrs"];function Fv(){return{hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(o=>{n.props[o]&&(n.key=n.props[o],delete n.props[o])});const a=Nd(n)||(n.key?`${n.tag}:${n.key}`:!1);a&&(n._d=a)},"tags:resolve":function(n){const t={};n.tags.forEach(o=>{const i=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,l=t[i];if(l){let c=o==null?void 0:o.tagDuplicateStrategy;if(!c&&Nv.includes(o.tag)&&(c="merge"),c==="merge"){const u=l.props;["class","style"].forEach(p=>{o.props[p]&&u[p]&&(p==="style"&&!u[p].endsWith(";")&&(u[p]+=";"),o.props[p]=`${u[p]} ${o.props[p]}`)}),t[i].props={...u,...o.props};return}else if(o._e===l._e){l._duped=l._duped||[],o._d=`${l._d}:${l._duped.length+1}`,l._duped.push(o);return}}const r=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(Pd.includes(o.tag)&&r===0){delete t[i];return}t[i]=o});const a=[];Object.values(t).forEach(o=>{const i=o._duped;delete o._duped,a.push(o),i&&a.push(...i)}),n.tags=a}}}}function io(n,t){function a(l){if(["s","pageTitle"].includes(l))return t.pageTitle;let r;return l.includes(".")?r=l.split(".").reduce((c,u)=>c&&c[u]||void 0,t):r=t[l],typeof r<"u"?r||"":!1}let o=n;try{o=decodeURI(n)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const r=a(l.slice(1));typeof r=="string"&&(n=n.replace(new RegExp(`\\${l}(\\W|$)`,"g"),`${r}$1`).trim())}),t.separator&&(n.endsWith(t.separator)&&(n=n.slice(0,-t.separator.length).trim()),n.startsWith(t.separator)&&(n=n.slice(t.separator.length).trim()),n=n.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),n}function qv(){return{hooks:{"tags:resolve":n=>{var l;const{tags:t}=n,a=(l=t.find(r=>r.tag==="title"))==null?void 0:l.textContent,o=t.findIndex(r=>r.tag==="templateParams"),i=o!==-1?t[o].props:{};i.pageTitle=i.pageTitle||a||"";for(const r of t)if(["titleTemplate","title"].includes(r.tag)&&typeof r.textContent=="string")r.textContent=io(r.textContent,i);else if(r.tag==="meta"&&typeof r.props.content=="string")r.props.content=io(r.props.content,i);else if(r.tag==="link"&&typeof r.props.href=="string")r.props.href=io(r.props.href,i);else if(r.tag==="script"&&["application/json","application/ld+json"].includes(r.props.type)&&typeof r.innerHTML=="string")try{r.innerHTML=JSON.stringify(JSON.parse(r.innerHTML),(c,u)=>typeof u=="string"?io(u,i):u)}catch{}n.tags=t.filter(r=>r.tag!=="templateParams")}}}}const Wv=typeof window<"u";let Wd;function Dv(n){return Wd=n}function jv(){return Wd}async function Bv(n,t){const a={tag:n,props:{}};return n==="templateParams"?(a.props=t,a):["title","titleTemplate"].includes(n)?(a.textContent=t instanceof Promise?await t:t,a):typeof t=="string"?["script","noscript","style"].includes(n)?(n==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?a.props.src=t:a.innerHTML=t,a):!1:(a.props=await Uv(n,{...t}),a.props.children&&(a.props.innerHTML=a.props.children),delete a.props.children,Object.keys(a.props).filter(o=>Mv.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Hd.includes(a.tag))&&(a[o]=a.props[o]),delete a.props[o]}),["innerHTML","textContent"].forEach(o=>{if(a.tag==="script"&&typeof a[o]=="string"&&["application/ld+json","application/json"].includes(a.props.type))try{a[o]=JSON.parse(a[o])}catch{a[o]=""}typeof a[o]=="object"&&(a[o]=JSON.stringify(a[o]))}),a.props.class&&(a.props.class=Vv(a.props.class)),a.props.content&&Array.isArray(a.props.content)?a.props.content.map(o=>({...a,props:{...a.props,content:o}})):a)}function Vv(n){return typeof n=="object"&&!Array.isArray(n)&&(n=Object.keys(n).filter(t=>n[t])),(Array.isArray(n)?n.join(" "):n).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Uv(n,t){for(const a of Object.keys(t)){const o=a.startsWith("data-");t[a]instanceof Promise&&(t[a]=await t[a]),String(t[a])==="true"?t[a]=o?"true":"":String(t[a])==="false"&&(o?t[a]="false":delete t[a])}return t}const Kv=10;async function Gv(n){const t=[];return Object.entries(n.resolvedInput).filter(([a,o])=>typeof o<"u"&&$v.includes(a)).forEach(([a,o])=>{const i=Tv(o);t.push(...i.map(l=>Bv(a,l)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((a,o)=>(a._e=n._i,a._p=(n._i<<Kv)+o,a))}function Qv(){return[Fv(),Sv(),qv(),Av(),Pv(),Rv(),Ov()]}function Yv(n={}){return[Cv({document:n==null?void 0:n.document,delayFn:n==null?void 0:n.domDelayFn})]}function Jv(n={}){const t=Zv({...n,plugins:[...Yv(n),...(n==null?void 0:n.plugins)||[]]});return n.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Ev(t.resolvedOptions.document)),Dv(t),t}function Zv(n={}){let t=[],a={},o=0;const i=xv();n!=null&&n.hooks&&i.addHooks(n.hooks),n.plugins=[...Qv(),...(n==null?void 0:n.plugins)||[]],n.plugins.forEach(c=>c.hooks&&i.addHooks(c.hooks)),n.document=n.document||(Wv?document:void 0);const l=()=>i.callHook("entries:updated",r),r={resolvedOptions:n,headEntries(){return t},get hooks(){return i},use(c){c.hooks&&i.addHooks(c.hooks)},push(c,u){const p={_i:o++,input:c,_sde:{}};return u!=null&&u.mode&&(p._m=u==null?void 0:u.mode),u!=null&&u.transform&&(p._t=u==null?void 0:u.transform),t.push(p),l(),{dispose(){t=t.filter(d=>d._i!==p._i?!0:(a={...a,...d._sde||{}},d._sde={},l(),!1))},patch(d){t=t.map(m=>(m._i===p._i&&(p.input=m.input=d,l()),m))}}},async resolveTags(){const c={tags:[],entries:[...t]};await i.callHook("entries:resolve",c);for(const u of c.entries){const p=u._t||(d=>d);if(u.resolvedInput=p(u.resolvedInput||u.input),u.resolvedInput)for(const d of await Gv(u)){const m={tag:d,entry:u,resolvedOptions:r.resolvedOptions};await i.callHook("tag:normalise",m),c.tags.push(m.tag)}}return await i.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...a};return a={},c},_elMap:{}};return r.hooks.callHook("init",r),r}function Xv(n){return typeof n=="function"?n():O(n)}function qo(n,t=""){if(n instanceof Promise)return n;const a=Xv(n);return!n||!a?a:Array.isArray(a)?a.map(o=>qo(o,t)):typeof a=="object"?Object.fromEntries(Object.entries(a).map(([o,i])=>o==="titleTemplate"||o.startsWith("on")?[o,O(i)]:[o,qo(i,o)])):a}const ek=Fo.startsWith("3"),nk=typeof window<"u",Dd="usehead";function yr(){return Tn()&&z(Dd)||jv()}function tk(n){return{install(a){ek&&(a.config.globalProperties.$unhead=n,a.config.globalProperties.$head=n,a.provide(Dd,n))}}.install}function ak(n={}){const t=Jv({...n,domDelayFn:a=>setTimeout(()=>on(()=>a()),10),plugins:[sk(),...(n==null?void 0:n.plugins)||[]]});return t.install=tk(t),t}function sk(){return{hooks:{"entries:resolve":function(n){for(const t of n.entries)t.resolvedInput=qo(t.input)}}}}function ok(n,t={}){const a=yr(),o=Z(!1),i=Z({});ba(()=>{i.value=o.value?{}:qo(n)});const l=a.push(i.value,t);return ke(i,c=>{l.patch(c)}),Tn()&&(js(()=>{l.dispose()}),id(()=>{o.value=!0}),od(()=>{o.value=!1})),l}function ik(n,t={}){return yr().push(n,t)}function jd(n,t={}){var o;const a=yr();if(a){const i=nk||!!((o=a.resolvedOptions)!=null&&o.document);return t.mode==="server"&&i||t.mode==="client"&&!i?void 0:i?ok(n,t):ik(n,t)}}function lk(n,t){const a=ak(t||{}),o={unhead:a,install(i){Fo.startsWith("3")&&(i.config.globalProperties.$head=a,i.provide("usehead",a))},use(i){a.use(i)},resolveTags(){return a.resolveTags()},headEntries(){return a.headEntries()},headTags(){return a.resolveTags()},push(i,l){return a.push(i,l)},addEntry(i,l){return a.push(i,l)},addHeadObjs(i,l){return a.push(i,l)},addReactiveEntry(i,l){const r=jd(i,l);return typeof r<"u"?r.dispose:()=>{}},removeHeadObjs(){},updateDOM(i,l){l?Fd(a,{document:i}):qd(a,{delayFn:r=>setTimeout(()=>r(),50),document:i})},internalHooks:a.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return a.addHeadObjs=o.addHeadObjs,a.updateDOM=o.updateDOM,a.hooks.hook("dom:beforeRender",i=>{for(const l of o.hooks["before:dom"])l()===!1&&(i.shouldRender=!1)}),n&&o.addHeadObjs(n),o}const ms=Symbol("v-click-clicks"),na=Symbol("v-click-clicks-elements"),vl=Symbol("v-click-clicks-order-map"),fs=Symbol("v-click-clicks-disabled"),Bd=Symbol("slidev-slide-scale"),C=Symbol("slidev-slidev-context"),rk=Symbol("slidev-route"),ck=Symbol("slidev-slide-context"),Jt="slidev-vclick-target",Li="slidev-vclick-hidden",uk="slidev-vclick-fade",Ci="slidev-vclick-hidden-explicitly",Qa="slidev-vclick-current",lo="slidev-vclick-prior",pk=["localhost","127.0.0.1"];let dk=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,a)=>(a&=63,a<36?t+=a.toString(36):a<62?t+=(a-26).toString(36).toUpperCase():a>62?t+="-":t+="_",t),"");function kl(n,t){if(!n)return!1;const a=n.indexOf(t);return a>=0?(n.splice(a,1),!0):!1}function mk(...n){let t,a,o;n.length===1?(t=0,o=1,[a]=n):[t,a,o=1]=n;const i=[];let l=t;for(;l<a;)i.push(l),l+=o||1;return i}function fk(n){return n!=null}function hk(n,t){return Object.fromEntries(Object.entries(n).map(([a,o])=>t(a,o)).filter(fk))}const rs={theme:"default",title:"Hyper Text Markup Language",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"/cover.webp",class:"text-center",materia:"TPSI",as:"2024/2025",version:"1.5.4"},Ee=rs,St=Ee.aspectRatio??16/9,At=Ee.canvasWidth??980,wr=Math.ceil(At/St),xr=N(()=>hk(Ee.themeConfig||{},(n,t)=>[`--slidev-theme-${n}`,t]));function Vd(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Dn(n,t,a){Object.defineProperty(n,t,{value:a,writable:!0,enumerable:!1})}const ya=Be({page:0,clicks:0});let gk=[],_k=[];Dn(ya,"$syncUp",!0);Dn(ya,"$syncDown",!0);Dn(ya,"$paused",!1);Dn(ya,"$onSet",n=>gk.push(n));Dn(ya,"$onPatch",n=>_k.push(n));Vd();Dn(ya,"$patch",async()=>!1);function Ud(n,t,a=!1){const o=[];let i=!1,l=!1,r,c;const u=Be(t);function p(h){o.push(h)}function d(h,g){u[h]!==g&&(clearTimeout(r),i=!0,u[h]=g,r=setTimeout(()=>i=!1,0))}function m(h){i||(clearTimeout(c),l=!0,Object.entries(h).forEach(([g,w])=>{u[g]=w}),c=setTimeout(()=>l=!1,0))}function f(h){let g;a?a&&window.addEventListener("storage",x=>{x&&x.key===h&&x.newValue&&m(JSON.parse(x.newValue))}):(g=new BroadcastChannel(h),g.addEventListener("message",x=>m(x.data)));function w(){!a&&g&&!l?g.postMessage(_e(u)):a&&!l&&window.localStorage.setItem(h,JSON.stringify(u)),i||o.forEach(x=>x(u))}if(ke(u,w,{deep:!0,flush:"sync"}),a){const x=window.localStorage.getItem(h);x&&m(JSON.parse(x))}}return{init:f,onPatch:p,patch:d,state:u}}const{init:vk,onPatch:kk,patch:Ya,state:Ei}=Ud(ya,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),wa=Be({});let bk=[],yk=[];Dn(wa,"$syncUp",!0);Dn(wa,"$syncDown",!0);Dn(wa,"$paused",!1);Dn(wa,"$onSet",n=>bk.push(n));Dn(wa,"$onPatch",n=>yk.push(n));Vd();Dn(wa,"$patch",async()=>!1);const{init:wk,onPatch:xk,patch:Kd,state:Wo}=Ud(wa,{},!1),Tk="modulepreload",$k=function(n){return"/3/html/"+n},qc={},Ot=function(t,a,o){if(!a||a.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(a.map(l=>{if(l=$k(l),l in qc)return;qc[l]=!0;const r=l.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!o)for(let d=i.length-1;d>=0;d--){const m=i[d];if(m.href===l&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":Tk,r||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),r)return new Promise((d,m)=>{p.addEventListener("load",d),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};function zk(n,t){let a,o,i;const l=Z(!0),r=()=>{l.value=!0,i()};ke(n,r,{flush:"sync"});const c=typeof t=="function"?t:t.get,u=typeof t=="function"?void 0:t.set,p=ur((d,m)=>(o=d,i=m,{get(){return l.value&&(a=c(),l.value=!1),o(),a},set(f){u==null||u(f)}}));return Object.isExtensible(p)&&(p.trigger=r),p}function rt(n){return ar()?(Tp(n),!0):!1}function Ge(n){return typeof n=="function"?n():O(n)}function Mk(n){if(!Se(n))return Be(n);const t=new Proxy({},{get(a,o,i){return O(Reflect.get(n.value,o,i))},set(a,o,i){return Se(n.value[o])&&!Se(i)?n.value[o].value=i:n.value[o]=i,!0},deleteProperty(a,o){return Reflect.deleteProperty(n.value,o)},has(a,o){return Reflect.has(n.value,o)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Be(t)}const Qn=typeof window<"u",Lk=n=>typeof n<"u",Ck=n=>n!=null,Ek=Object.prototype.toString,bl=n=>Ek.call(n)==="[object Object]",yl=()=>+Date.now(),fa=()=>{},Ik=Sk();function Sk(){var n;return Qn&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Ak(n,t){function a(...o){return new Promise((i,l)=>{Promise.resolve(n(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(i).catch(l)})}return a}const Gd=n=>n();function Ok(n=Gd){const t=Z(!0);function a(){t.value=!1}function o(){t.value=!0}const i=(...l)=>{t.value&&n(...l)};return{isActive:Kn(t),pause:a,resume:o,eventFilter:i}}function Hk(n,t){var a;if(typeof n=="number")return n+t;const o=((a=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:a[0])||"",i=n.slice(o.length),l=parseFloat(o)+t;return Number.isNaN(l)?n:l+i}function Qd(...n){if(n.length!==1)return Uh(...n);const t=n[0];return typeof t=="function"?Kn(ur(()=>({get:t,set:fa}))):Z(t)}var Pk=Object.defineProperty,Rk=Object.defineProperties,Nk=Object.getOwnPropertyDescriptors,Wc=Object.getOwnPropertySymbols,Fk=Object.prototype.hasOwnProperty,qk=Object.prototype.propertyIsEnumerable,Dc=(n,t,a)=>t in n?Pk(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,Wk=(n,t)=>{for(var a in t||(t={}))Fk.call(t,a)&&Dc(n,a,t[a]);if(Wc)for(var a of Wc(t))qk.call(t,a)&&Dc(n,a,t[a]);return n},Dk=(n,t)=>Rk(n,Nk(t));function jk(n){if(!Se(n))return jh(n);const t=Array.isArray(n.value)?new Array(n.value.length):{};for(const a in n.value)t[a]=ur(()=>({get(){return n.value[a]},set(o){if(Array.isArray(n.value)){const i=[...n.value];i[a]=o,n.value=i}else{const i=Dk(Wk({},n.value),{[a]:o});Object.setPrototypeOf(i,n.value),n.value=i}}}));return t}function Yd(n,t=!0){Tn()?bt(n):t?n():on(n)}function Bk(n){Tn()&&Bs(n)}function Vk(n,t=1e3,a={}){const{immediate:o=!0,immediateCallback:i=!1}=a;let l=null;const r=Z(!1);function c(){l&&(clearInterval(l),l=null)}function u(){r.value=!1,c()}function p(){const d=Ge(t);d<=0||(r.value=!0,i&&n(),c(),l=setInterval(n,d))}if(o&&Qn&&p(),Se(t)||typeof t=="function"){const d=ke(t,()=>{r.value&&Qn&&p()});rt(d)}return rt(u),{isActive:r,pause:u,resume:p}}function Uk(n,t,a={}){const{immediate:o=!0}=a,i=Z(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){i.value=!1,r()}function u(...p){r(),i.value=!0,l=setTimeout(()=>{i.value=!1,l=null,n(...p)},Ge(t))}return o&&(i.value=!0,Qn&&u()),rt(c),{isPending:Kn(i),start:u,stop:c}}function Jd(n=!1,t={}){const{truthyValue:a=!0,falsyValue:o=!1}=t,i=Se(n),l=Z(n);function r(c){if(arguments.length)return l.value=c,l.value;{const u=Ge(a);return l.value=l.value===u?Ge(o):u,l.value}}return i?r:[l,r]}var jc=Object.getOwnPropertySymbols,Kk=Object.prototype.hasOwnProperty,Gk=Object.prototype.propertyIsEnumerable,Qk=(n,t)=>{var a={};for(var o in n)Kk.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&jc)for(var o of jc(n))t.indexOf(o)<0&&Gk.call(n,o)&&(a[o]=n[o]);return a};function Yk(n,t,a={}){const o=a,{eventFilter:i=Gd}=o,l=Qk(o,["eventFilter"]);return ke(n,Ak(i,t),l)}var Jk=Object.defineProperty,Zk=Object.defineProperties,Xk=Object.getOwnPropertyDescriptors,Do=Object.getOwnPropertySymbols,Zd=Object.prototype.hasOwnProperty,Xd=Object.prototype.propertyIsEnumerable,Bc=(n,t,a)=>t in n?Jk(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,e1=(n,t)=>{for(var a in t||(t={}))Zd.call(t,a)&&Bc(n,a,t[a]);if(Do)for(var a of Do(t))Xd.call(t,a)&&Bc(n,a,t[a]);return n},n1=(n,t)=>Zk(n,Xk(t)),t1=(n,t)=>{var a={};for(var o in n)Zd.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&Do)for(var o of Do(n))t.indexOf(o)<0&&Xd.call(n,o)&&(a[o]=n[o]);return a};function a1(n,t,a={}){const o=a,{eventFilter:i}=o,l=t1(o,["eventFilter"]),{eventFilter:r,pause:c,resume:u,isActive:p}=Ok(i);return{stop:Yk(n,t,n1(e1({},l),{eventFilter:r})),pause:c,resume:u,isActive:p}}function ln(n){var t;const a=Ge(n);return(t=a==null?void 0:a.$el)!=null?t:a}const en=Qn?window:void 0,em=Qn?window.document:void 0,s1=Qn?window.navigator:void 0;function Te(...n){let t,a,o,i;if(typeof n[0]=="string"||Array.isArray(n[0])?([a,o,i]=n,t=en):[t,a,o,i]=n,!t)return fa;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const l=[],r=()=>{l.forEach(d=>d()),l.length=0},c=(d,m,f,h)=>(d.addEventListener(m,f,h),()=>d.removeEventListener(m,f,h)),u=ke(()=>[ln(t),Ge(i)],([d,m])=>{r(),d&&l.push(...a.flatMap(f=>o.map(h=>c(d,f,h,m))))},{immediate:!0,flush:"post"}),p=()=>{u(),r()};return rt(p),p}let Vc=!1;function o1(n,t,a={}){const{window:o=en,ignore:i=[],capture:l=!0,detectIframe:r=!1}=a;if(!o)return;Ik&&!Vc&&(Vc=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",fa)));let c=!0;const u=f=>i.some(h=>{if(typeof h=="string")return Array.from(o.document.querySelectorAll(h)).some(g=>g===f.target||f.composedPath().includes(g));{const g=ln(h);return g&&(f.target===g||f.composedPath().includes(g))}}),d=[Te(o,"click",f=>{const h=ln(n);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(c=!u(f)),!c){c=!0;return}t(f)}},{passive:!0,capture:l}),Te(o,"pointerdown",f=>{const h=ln(n);h&&(c=!f.composedPath().includes(h)&&!u(f))},{passive:!0}),r&&Te(o,"blur",f=>{var h;const g=ln(n);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(g!=null&&g.contains(o.document.activeElement))&&t(f)})].filter(Boolean);return()=>d.forEach(f=>f())}function i1(n){return typeof n=="function"?n:typeof n=="string"?t=>t.key===n:Array.isArray(n)?t=>n.includes(t.key):()=>!0}function l1(...n){let t,a,o={};n.length===3?(t=n[0],a=n[1],o=n[2]):n.length===2?typeof n[1]=="object"?(t=!0,a=n[0],o=n[1]):(t=n[0],a=n[1]):(t=!0,a=n[0]);const{target:i=en,eventName:l="keydown",passive:r=!1,dedupe:c=!1}=o,u=i1(t);return Te(i,l,d=>{d.repeat&&Ge(c)||u(d)&&a(d)},r)}function r1(n={}){var t;const{window:a=en}=n,o=(t=n.document)!=null?t:a==null?void 0:a.document,i=zk(()=>null,()=>o==null?void 0:o.activeElement);return a&&(Te(a,"blur",l=>{l.relatedTarget===null&&i.trigger()},!0),Te(a,"focus",i.trigger,!0)),i}function c1(){const n=Z(!1);return Tn()&&bt(()=>{n.value=!0}),n}function Us(n){const t=c1();return N(()=>(t.value,!!n()))}function u1(n,t={}){const{immediate:a=!0,window:o=en}=t,i=Z(!1);let l=0,r=null;function c(d){if(!i.value||!o)return;const m=d-l;n({delta:m,timestamp:d}),l=d,r=o.requestAnimationFrame(c)}function u(){!i.value&&o&&(i.value=!0,r=o.requestAnimationFrame(c))}function p(){i.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return a&&u(),rt(p),{isActive:Kn(i),pause:p,resume:u}}function ta(n,t={}){const{window:a=en}=t,o=Us(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let i;const l=Z(!1),r=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",c):i.removeListener(c))},c=()=>{o.value&&(r(),i=a.matchMedia(Qd(n).value),l.value=!!(i!=null&&i.matches),i&&("addEventListener"in i?i.addEventListener("change",c):i.addListener(c)))};return ba(c),rt(()=>r()),l}const p1={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function d1(n,t={}){function a(c,u){let p=n[c];return u!=null&&(p=Hk(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=en}=t;function i(c){return o?o.matchMedia(c).matches:!1}const l=c=>ta(`(min-width: ${a(c)})`,t),r=Object.keys(n).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>l(u),enumerable:!0,configurable:!0}),c),{});return Object.assign(r,{greater(c){return ta(`(min-width: ${a(c,.1)})`,t)},greaterOrEqual:l,smaller(c){return ta(`(max-width: ${a(c,-.1)})`,t)},smallerOrEqual(c){return ta(`(max-width: ${a(c)})`,t)},between(c,u){return ta(`(min-width: ${a(c)}) and (max-width: ${a(u,-.1)})`,t)},isGreater(c){return i(`(min-width: ${a(c,.1)})`)},isGreaterOrEqual(c){return i(`(min-width: ${a(c)})`)},isSmaller(c){return i(`(max-width: ${a(c,-.1)})`)},isSmallerOrEqual(c){return i(`(max-width: ${a(c)})`)},isInBetween(c,u){return i(`(min-width: ${a(c)}) and (max-width: ${a(u,-.1)})`)},current(){const c=Object.keys(n).map(u=>[u,l(u)]);return N(()=>c.filter(([,u])=>u.value).map(([u])=>u))}})}function m1(n={}){const{navigator:t=s1,read:a=!1,source:o,copiedDuring:i=1500,legacy:l=!1}=n,r=["copy","cut"],c=Us(()=>t&&"clipboard"in t),u=N(()=>c.value||l),p=Z(""),d=Z(!1),m=Uk(()=>d.value=!1,i);function f(){c.value?t.clipboard.readText().then(x=>{p.value=x}):p.value=w()}if(u.value&&a)for(const x of r)Te(x,f);async function h(x=Ge(o)){u.value&&x!=null&&(c.value?await t.clipboard.writeText(x):g(x),p.value=x,d.value=!0,m.start())}function g(x){const T=document.createElement("textarea");T.value=x??"",T.style.position="absolute",T.style.opacity="0",document.body.appendChild(T),T.select(),document.execCommand("copy"),T.remove()}function w(){var x,T,$;return($=(T=(x=document==null?void 0:document.getSelection)==null?void 0:x.call(document))==null?void 0:T.toString())!=null?$:""}return{isSupported:u,text:p,copied:d,copy:h}}function f1(n){return JSON.parse(JSON.stringify(n))}const ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},co="__vueuse_ssr_handlers__",h1=g1();function g1(){return co in ro||(ro[co]=ro[co]||{}),ro[co]}function _1(n,t){return h1[n]||t}function v1(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var k1=Object.defineProperty,Uc=Object.getOwnPropertySymbols,b1=Object.prototype.hasOwnProperty,y1=Object.prototype.propertyIsEnumerable,Kc=(n,t,a)=>t in n?k1(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,Gc=(n,t)=>{for(var a in t||(t={}))b1.call(t,a)&&Kc(n,a,t[a]);if(Uc)for(var a of Uc(t))y1.call(t,a)&&Kc(n,a,t[a]);return n};const w1={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Qc="vueuse-storage";function x1(n,t,a,o={}){var i;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:m=en,eventFilter:f,onError:h=R=>{console.error(R)}}=o,g=(d?it:Z)(t);if(!a)try{a=_1("getDefaultStorage",()=>{var R;return(R=en)==null?void 0:R.localStorage})()}catch(R){h(R)}if(!a)return g;const w=Ge(t),x=v1(w),T=(i=o.serializer)!=null?i:w1[x],{pause:$,resume:k}=a1(g,()=>A(g.value),{flush:l,deep:r,eventFilter:f});return m&&c&&(Te(m,"storage",B),Te(m,Qc,H)),B(),g;function A(R){try{if(R==null)a.removeItem(n);else{const K=T.write(R),ie=a.getItem(n);ie!==K&&(a.setItem(n,K),m&&m.dispatchEvent(new CustomEvent(Qc,{detail:{key:n,oldValue:ie,newValue:K,storageArea:a}})))}}catch(K){h(K)}}function L(R){const K=R?R.newValue:a.getItem(n);if(K==null)return u&&w!==null&&a.setItem(n,T.write(w)),w;if(!R&&p){const ie=T.read(K);return typeof p=="function"?p(ie,w):x==="object"&&!Array.isArray(ie)?Gc(Gc({},w),ie):ie}else return typeof K!="string"?K:T.read(K)}function H(R){B(R.detail)}function B(R){if(!(R&&R.storageArea!==a)){if(R&&R.key==null){g.value=w;return}if(!(R&&R.key!==n)){$();try{g.value=L(R)}catch(K){h(K)}finally{R?on(k):k()}}}}}function T1(n){return ta("(prefers-color-scheme: dark)",n)}var $1=Object.defineProperty,z1=Object.defineProperties,M1=Object.getOwnPropertyDescriptors,Yc=Object.getOwnPropertySymbols,L1=Object.prototype.hasOwnProperty,C1=Object.prototype.propertyIsEnumerable,Jc=(n,t,a)=>t in n?$1(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,E1=(n,t)=>{for(var a in t||(t={}))L1.call(t,a)&&Jc(n,a,t[a]);if(Yc)for(var a of Yc(t))C1.call(t,a)&&Jc(n,a,t[a]);return n},I1=(n,t)=>z1(n,M1(t));function HW(n,t={}){var a,o;const{pointerTypes:i,preventDefault:l,stopPropagation:r,exact:c,onMove:u,onEnd:p,onStart:d,initialValue:m,axis:f="both",draggingElement:h=en,handle:g=n}=t,w=Z((a=Ge(m))!=null?a:{x:0,y:0}),x=Z(),T=H=>i?i.includes(H.pointerType):!0,$=H=>{Ge(l)&&H.preventDefault(),Ge(r)&&H.stopPropagation()},k=H=>{if(!T(H)||Ge(c)&&H.target!==Ge(n))return;const B=Ge(n).getBoundingClientRect(),R={x:H.clientX-B.left,y:H.clientY-B.top};(d==null?void 0:d(R,H))!==!1&&(x.value=R,$(H))},A=H=>{if(!T(H)||!x.value)return;let{x:B,y:R}=w.value;(f==="x"||f==="both")&&(B=H.clientX-x.value.x),(f==="y"||f==="both")&&(R=H.clientY-x.value.y),w.value={x:B,y:R},u==null||u(w.value,H),$(H)},L=H=>{T(H)&&x.value&&(x.value=void 0,p==null||p(w.value,H),$(H))};if(Qn){const H={capture:(o=t.capture)!=null?o:!0};Te(g,"pointerdown",k,H),Te(h,"pointermove",A,H),Te(h,"pointerup",L,H)}return I1(E1({},jk(w)),{position:w,isDragging:N(()=>!!x.value),style:N(()=>`left:${w.value.x}px;top:${w.value.y}px;`)})}var Zc=Object.getOwnPropertySymbols,S1=Object.prototype.hasOwnProperty,A1=Object.prototype.propertyIsEnumerable,O1=(n,t)=>{var a={};for(var o in n)S1.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&Zc)for(var o of Zc(n))t.indexOf(o)<0&&A1.call(n,o)&&(a[o]=n[o]);return a};function H1(n,t,a={}){const o=a,{window:i=en}=o,l=O1(o,["window"]);let r;const c=Us(()=>i&&"ResizeObserver"in i),u=()=>{r&&(r.disconnect(),r=void 0)},p=N(()=>Array.isArray(n)?n.map(f=>ln(f)):[ln(n)]),d=ke(p,f=>{if(u(),c.value&&i){r=new ResizeObserver(t);for(const h of f)h&&r.observe(h,l)}},{immediate:!0,flush:"post",deep:!0}),m=()=>{u(),d()};return rt(m),{isSupported:c,stop:m}}function P1(n,t={width:0,height:0},a={}){const{window:o=en,box:i="content-box"}=a,l=N(()=>{var u,p;return(p=(u=ln(n))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),r=Z(t.width),c=Z(t.height);return H1(n,([u])=>{const p=i==="border-box"?u.borderBoxSize:i==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(o&&l.value){const d=ln(n);if(d){const m=o.getComputedStyle(d);r.value=parseFloat(m.width),c.value=parseFloat(m.height)}}else if(p){const d=Array.isArray(p)?p:[p];r.value=d.reduce((m,{inlineSize:f})=>m+f,0),c.value=d.reduce((m,{blockSize:f})=>m+f,0)}else r.value=u.contentRect.width,c.value=u.contentRect.height},a),ke(()=>ln(n),u=>{r.value=u?t.width:0,c.value=u?t.height:0}),{width:r,height:c}}function R1(n,t,a={}){const{root:o,rootMargin:i="0px",threshold:l=.1,window:r=en,immediate:c=!0}=a,u=Us(()=>r&&"IntersectionObserver"in r),p=N(()=>{const g=Ge(n);return(Array.isArray(g)?g:[g]).map(ln).filter(Ck)});let d=fa;const m=Z(c),f=u.value?ke(()=>[p.value,ln(o),m.value],([g,w])=>{if(d(),!m.value||!g.length)return;const x=new IntersectionObserver(t,{root:ln(w),rootMargin:i,threshold:l});g.forEach(T=>T&&x.observe(T)),d=()=>{x.disconnect(),d=fa}},{immediate:c,flush:"post"}):fa,h=()=>{d(),f(),m.value=!1};return rt(h),{isSupported:u,isActive:m,pause(){d(),m.value=!1},resume(){m.value=!0},stop:h}}const Xc=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function N1(n,t={}){const{document:a=em,autoExit:o=!1}=t,i=N(()=>{var T;return(T=ln(n))!=null?T:a==null?void 0:a.querySelector("html")}),l=Z(!1),r=N(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(T=>a&&T in a||i.value&&T in i.value)),c=N(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(T=>a&&T in a||i.value&&T in i.value)),u=N(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(T=>a&&T in a||i.value&&T in i.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(T=>a&&T in a),d=Us(()=>i.value&&a&&r.value!==void 0&&c.value!==void 0&&u.value!==void 0),m=()=>p?(a==null?void 0:a[p])===i.value:!1,f=()=>{if(u.value){if(a&&a[u.value]!=null)return a[u.value];{const T=i.value;if((T==null?void 0:T[u.value])!=null)return!!T[u.value]}}return!1};async function h(){if(d.value){if(c.value)if((a==null?void 0:a[c.value])!=null)await a[c.value]();else{const T=i.value;(T==null?void 0:T[c.value])!=null&&await T[c.value]()}l.value=!1}}async function g(){if(!d.value)return;f()&&await h();const T=i.value;r.value&&(T==null?void 0:T[r.value])!=null&&(await T[r.value](),l.value=!0)}async function w(){await(l.value?h():g())}const x=()=>{const T=f();(!T||T&&m())&&(l.value=T)};return Te(a,Xc,x,!1),Te(()=>ln(i),Xc,x,!1),o&&rt(h),{isSupported:d,isFullscreen:l,enter:g,exit:h,toggle:w}}function Yn(n,t,a={}){const{window:o=en}=a;return x1(n,t,o==null?void 0:o.localStorage,a)}const F1={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function q1(n={}){const{reactive:t=!1,target:a=en,aliasMap:o=F1,passive:i=!0,onEventFired:l=fa}=n,r=Be(new Set),c={toJSON(){return{}},current:r},u=t?Be(c):c,p=new Set,d=new Set;function m(w,x){w in u&&(t?u[w]=x:u[w].value=x)}function f(){r.clear();for(const w of d)m(w,!1)}function h(w,x){var T,$;const k=(T=w.key)==null?void 0:T.toLowerCase(),L=[($=w.code)==null?void 0:$.toLowerCase(),k].filter(Boolean);k&&(x?r.add(k):r.delete(k));for(const H of L)d.add(H),m(H,x);k==="meta"&&!x?(p.forEach(H=>{r.delete(H),m(H,!1)}),p.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&x&&[...r,...L].forEach(H=>p.add(H))}Te(a,"keydown",w=>(h(w,!0),l(w)),{passive:i}),Te(a,"keyup",w=>(h(w,!1),l(w)),{passive:i}),Te("blur",f,{passive:!0}),Te("focus",f,{passive:!0});const g=new Proxy(u,{get(w,x,T){if(typeof x!="string")return Reflect.get(w,x,T);if(x=x.toLowerCase(),x in o&&(x=o[x]),!(x in u))if(/[+_-]/.test(x)){const k=x.split(/[+_-]/g).map(A=>A.trim());u[x]=N(()=>k.every(A=>Ge(g[A])))}else u[x]=Z(!1);const $=Reflect.get(w,x,T);return t?Ge($):$}});return g}const W1={page:n=>[n.pageX,n.pageY],client:n=>[n.clientX,n.clientY],screen:n=>[n.screenX,n.screenY],movement:n=>n instanceof Touch?null:[n.movementX,n.movementY]};function PW(n={}){const{type:t="page",touch:a=!0,resetOnTouchEnds:o=!1,initialValue:i={x:0,y:0},window:l=en,target:r=l,eventFilter:c}=n,u=Z(i.x),p=Z(i.y),d=Z(null),m=typeof t=="function"?t:W1[t],f=T=>{const $=m(T);$&&([u.value,p.value]=$,d.value="mouse")},h=T=>{if(T.touches.length>0){const $=m(T.touches[0]);$&&([u.value,p.value]=$,d.value="touch")}},g=()=>{u.value=i.x,p.value=i.y},w=c?T=>c(()=>f(T),{}):T=>f(T),x=c?T=>c(()=>h(T),{}):T=>h(T);return r&&(Te(r,"mousemove",w,{passive:!0}),Te(r,"dragover",w,{passive:!0}),a&&t!=="movement"&&(Te(r,"touchstart",x,{passive:!0}),Te(r,"touchmove",x,{passive:!0}),o&&Te(r,"touchend",g,{passive:!0}))),{x:u,y:p,sourceType:d}}function D1(n,t={}){const a=Qd(n),{threshold:o=50,onSwipe:i,onSwipeEnd:l,onSwipeStart:r}=t,c=Be({x:0,y:0}),u=(H,B)=>{c.x=H,c.y=B},p=Be({x:0,y:0}),d=(H,B)=>{p.x=H,p.y=B},m=N(()=>c.x-p.x),f=N(()=>c.y-p.y),{max:h,abs:g}=Math,w=N(()=>h(g(m.value),g(f.value))>=o),x=Z(!1),T=Z(!1),$=N(()=>w.value?g(m.value)>g(f.value)?m.value>0?"left":"right":f.value>0?"up":"down":"none"),k=H=>{var B,R,K;const ie=H.buttons===0,me=H.buttons===1;return(K=(R=(B=t.pointerTypes)==null?void 0:B.includes(H.pointerType))!=null?R:ie||me)!=null?K:!0},A=[Te(n,"pointerdown",H=>{var B,R;if(!k(H))return;T.value=!0,(R=(B=a.value)==null?void 0:B.style)==null||R.setProperty("touch-action","none");const K=H.target;K==null||K.setPointerCapture(H.pointerId);const{clientX:ie,clientY:me}=H;u(ie,me),d(ie,me),r==null||r(H)}),Te(n,"pointermove",H=>{if(!k(H)||!T.value)return;const{clientX:B,clientY:R}=H;d(B,R),!x.value&&w.value&&(x.value=!0),x.value&&(i==null||i(H))}),Te(n,"pointerup",H=>{var B,R;k(H)&&(x.value&&(l==null||l(H,$.value)),T.value=!1,x.value=!1,(R=(B=a.value)==null?void 0:B.style)==null||R.setProperty("touch-action","initial"))})],L=()=>A.forEach(H=>H());return{isSwiping:Kn(x),direction:Kn($),posStart:Kn(c),posEnd:Kn(p),distanceX:m,distanceY:f,stop:L}}let j1=0;function RW(n,t={}){const a=Z(!1),{document:o=em,immediate:i=!0,manual:l=!1,id:r=`vueuse_styletag_${++j1}`}=t,c=Z(n);let u=()=>{};const p=()=>{if(!o)return;const m=o.getElementById(r)||o.createElement("style");m.isConnected||(m.type="text/css",m.id=r,t.media&&(m.media=t.media),o.head.appendChild(m)),!a.value&&(u=ke(c,f=>{m.textContent=f},{immediate:!0}),a.value=!0)},d=()=>{!o||!a.value||(u(),o.head.removeChild(o.getElementById(r)),a.value=!1)};return i&&!l&&Yd(p),l||rt(d),{id:r,css:c,unload:d,load:p,isLoaded:Kn(a)}}var B1=Object.defineProperty,eu=Object.getOwnPropertySymbols,V1=Object.prototype.hasOwnProperty,U1=Object.prototype.propertyIsEnumerable,nu=(n,t,a)=>t in n?B1(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,K1=(n,t)=>{for(var a in t||(t={}))V1.call(t,a)&&nu(n,a,t[a]);if(eu)for(var a of eu(t))U1.call(t,a)&&nu(n,a,t[a]);return n};function NW(n={}){const{controls:t=!1,offset:a=0,immediate:o=!0,interval:i="requestAnimationFrame",callback:l}=n,r=Z(yl()+a),c=()=>r.value=yl()+a,u=l?()=>{c(),l(r.value)}:c,p=i==="requestAnimationFrame"?u1(u,{immediate:o}):Vk(u,i,{immediate:o});return t?K1({timestamp:r},p):r}function Je(n,t,a,o={}){var i,l,r;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:m,shouldEmit:f}=o,h=Tn(),g=a||(h==null?void 0:h.emit)||((i=h==null?void 0:h.$emit)==null?void 0:i.bind(h))||((r=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(h==null?void 0:h.proxy));let w=p;t||(t="modelValue"),w=p||w||`update:${t.toString()}`;const x=k=>c?typeof c=="function"?c(k):f1(k):k,T=()=>Lk(n[t])?x(n[t]):m,$=k=>{f?f(k)&&g(w,k):g(w,k)};if(u){const k=T(),A=Z(k);return ke(()=>n[t],L=>A.value=x(L)),ke(A,L=>{(L!==n[t]||d)&&$(L)},{deep:d}),A}else return N({get(){return T()},set(k){$(k)}})}function FW({window:n=en}={}){if(!n)return Z(!1);const t=Z(n.document.hasFocus());return Te(n,"blur",()=>{t.value=!1}),Te(n,"focus",()=>{t.value=!0}),t}function G1(n={}){const{window:t=en,initialWidth:a=1/0,initialHeight:o=1/0,listenOrientation:i=!0,includeScrollbar:l=!0}=n,r=Z(a),c=Z(o),u=()=>{t&&(l?(r.value=t.innerWidth,c.value=t.innerHeight):(r.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight))};if(u(),Yd(u),Te("resize",u,{passive:!0}),i){const p=ta("(orientation: portrait)");ke(p,()=>u())}return{width:r,height:c}}function Q1(){return nm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function nm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Y1=typeof Proxy=="function",J1="devtools-plugin:setup",Z1="plugin:settings:set";let $a,wl;function X1(){var n;return $a!==void 0||(typeof window<"u"&&window.performance?($a=!0,wl=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?($a=!0,wl=global.perf_hooks.performance):$a=!1),$a}function eb(){return X1()?wl.now():Date.now()}class nb{constructor(t,a){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=a;const o={};if(t.settings)for(const r in t.settings){const c=t.settings[r];o[r]=c.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let l=Object.assign({},o);try{const r=localStorage.getItem(i),c=JSON.parse(r);Object.assign(l,c)}catch{}this.fallbacks={getSettings(){return l},setSettings(r){try{localStorage.setItem(i,JSON.stringify(r))}catch{}l=r},now(){return eb()}},a&&a.on(Z1,(r,c)=>{r===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(r,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(r,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(t){this.target=t;for(const a of this.onQueue)this.target.on[a.method](...a.args);for(const a of this.targetQueue)a.resolve(await this.target[a.method](...a.args))}}function tb(n,t){const a=n,o=nm(),i=Q1(),l=Y1&&a.enableEarlyProxy;if(i&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))i.emit(J1,n,t);else{const r=l?new nb(a,i):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:a,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ft=typeof window<"u";function ab(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const He=Object.assign;function Ii(n,t){const a={};for(const o in t){const i=t[o];a[o]=Sn(i)?i.map(n):n(i)}return a}const hs=()=>{},Sn=Array.isArray;function Ce(n){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(t))}const sb=/\/$/,ob=n=>n.replace(sb,"");function Si(n,t,a="/"){let o,i={},l="",r="";const c=t.indexOf("#");let u=t.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(o=t.slice(0,u),l=t.slice(u+1,c>-1?c:t.length),i=n(l)),c>-1&&(o=o||t.slice(0,c),r=t.slice(c,t.length)),o=rb(o??t,a),{fullPath:o+(l&&"?")+l+r,path:o,query:i,hash:r}}function ib(n,t){const a=t.query?n(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function tu(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function au(n,t,a){const o=t.matched.length-1,i=a.matched.length-1;return o>-1&&o===i&&Wt(t.matched[o],a.matched[i])&&tm(t.params,a.params)&&n(t.query)===n(a.query)&&t.hash===a.hash}function Wt(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function tm(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const a in n)if(!lb(n[a],t[a]))return!1;return!0}function lb(n,t){return Sn(n)?su(n,t):Sn(t)?su(t,n):n===t}function su(n,t){return Sn(t)?n.length===t.length&&n.every((a,o)=>a===t[o]):n.length===1&&n[0]===t}function rb(n,t){if(n.startsWith("/"))return n;if(!t.startsWith("/"))return Ce(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${t}". It should look like "/${t}".`),n;if(!n)return t;const a=t.split("/"),o=n.split("/"),i=o[o.length-1];(i===".."||i===".")&&o.push("");let l=a.length-1,r,c;for(r=0;r<o.length;r++)if(c=o[r],c!==".")if(c==="..")l>1&&l--;else break;return a.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Es;(function(n){n.pop="pop",n.push="push"})(Es||(Es={}));var gs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(gs||(gs={}));function cb(n){if(!n)if(ft){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ob(n)}const ub=/^[^#]+#/;function pb(n,t){return n.replace(ub,"#")+t}function db(n,t){const a=document.documentElement.getBoundingClientRect(),o=n.getBoundingClientRect();return{behavior:t.behavior,left:o.left-a.left-(t.left||0),top:o.top-a.top-(t.top||0)}}const di=()=>({left:window.pageXOffset,top:window.pageYOffset});function mb(n){let t;if("el"in n){const a=n.el,o=typeof a=="string"&&a.startsWith("#");if(typeof n.el=="string"&&(!o||!document.getElementById(n.el.slice(1))))try{const l=document.querySelector(n.el);if(o&&l){Ce(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{Ce(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const i=typeof a=="string"?o?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!i){Ce(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}t=db(i,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ou(n,t){return(history.state?history.state.position-t:-1)+n}const xl=new Map;function fb(n,t){xl.set(n,t)}function hb(n){const t=xl.get(n);return xl.delete(n),t}let gb=()=>location.protocol+"//"+location.host;function am(n,t){const{pathname:a,search:o,hash:i}=t,l=n.indexOf("#");if(l>-1){let c=i.includes(n.slice(l))?n.slice(l).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),tu(u,"")}return tu(a,n)+o+i}function _b(n,t,a,o){let i=[],l=[],r=null;const c=({state:f})=>{const h=am(n,location),g=a.value,w=t.value;let x=0;if(f){if(a.value=h,t.value=f,r&&r===g){r=null;return}x=w?f.position-w.position:0}else o(h);i.forEach(T=>{T(a.value,g,{delta:x,type:Es.pop,direction:x?x>0?gs.forward:gs.back:gs.unknown})})};function u(){r=a.value}function p(f){i.push(f);const h=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return l.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(He({},f.state,{scroll:di()}),"")}function m(){for(const f of l)f();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:p,destroy:m}}function iu(n,t,a,o=!1,i=!1){return{back:n,current:t,forward:a,replaced:o,position:window.history.length,scroll:i?di():null}}function vb(n){const{history:t,location:a}=window,o={value:am(n,a)},i={value:t.state};i.value||l(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(u,p,d){const m=n.indexOf("#"),f=m>-1?(a.host&&document.querySelector("base")?n:n.slice(m))+u:gb()+n+u;try{t[d?"replaceState":"pushState"](p,"",f),i.value=p}catch(h){Ce("Error with push/replace State",h),a[d?"replace":"assign"](f)}}function r(u,p){const d=He({},t.state,iu(i.value.back,u,i.value.forward,!0),p,{position:i.value.position});l(u,d,!0),o.value=u}function c(u,p){const d=He({},i.value,t.state,{forward:u,scroll:di()});t.state||Ce(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(d.current,d,!0);const m=He({},iu(o.value,u,null),{position:d.position+1},p);l(u,m,!1),o.value=u}return{location:o,state:i,push:c,replace:r}}function kb(n){n=cb(n);const t=vb(n),a=_b(n,t.state,t.location,t.replace);function o(l,r=!0){r||a.pauseListeners(),history.go(l)}const i=He({location:"",base:n,go:o,createHref:pb.bind(null,n)},t,a);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function bb(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),!n.endsWith("#/")&&!n.endsWith("#")&&Ce(`A hash base must end with a "#":
"${n}" should be "${n.replace(/#.*$/,"#")}".`),kb(n)}function yb(n){return typeof n=="string"||n&&typeof n=="object"}function sm(n){return typeof n=="string"||typeof n=="symbol"}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},om=Symbol("navigation failure");var lu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(lu||(lu={}));const wb={[1]({location:n,currentLocation:t}){return`No match for
 ${JSON.stringify(n)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:n,to:t}){return`Redirected from "${n.fullPath}" to "${Tb(t)}" via a navigation guard.`},[4]({from:n,to:t}){return`Navigation aborted from "${n.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:n,to:t}){return`Navigation cancelled from "${n.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:n,to:t}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function Ra(n,t){return He(new Error(wb[n](t)),{type:n,[om]:!0},t)}function ct(n,t){return n instanceof Error&&om in n&&(t==null||!!(n.type&t))}const xb=["params","query","hash"];function Tb(n){if(typeof n=="string")return n;if("path"in n)return n.path;const t={};for(const a of xb)a in n&&(t[a]=n[a]);return JSON.stringify(t,null,2)}const ru="[^/]+?",$b={sensitive:!1,strict:!1,start:!0,end:!0},zb=/[.+*?^${}()[\]/\\]/g;function Mb(n,t){const a=He({},$b,t),o=[];let i=a.start?"^":"";const l=[];for(const p of n){const d=p.length?[]:[90];a.strict&&!p.length&&(i+="/");for(let m=0;m<p.length;m++){const f=p[m];let h=40+(a.sensitive?.25:0);if(f.type===0)m||(i+="/"),i+=f.value.replace(zb,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:w,optional:x,regexp:T}=f;l.push({name:g,repeatable:w,optional:x});const $=T||ru;if($!==ru){h+=10;try{new RegExp(`(${$})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${$}): `+A.message)}}let k=w?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;m||(k=x&&p.length<2?`(?:/${k})`:"/"+k),x&&(k+="?"),i+=k,h+=20,x&&(h+=-8),w&&(h+=-20),$===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(a.strict&&a.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}a.strict||(i+="/?"),a.end?i+="$":a.strict&&(i+="(?:/|$)");const r=new RegExp(i,a.sensitive?"":"i");function c(p){const d=p.match(r),m={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",g=l[f-1];m[g.name]=h&&g.repeatable?h.split("/"):h}return m}function u(p){let d="",m=!1;for(const f of n){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:g,repeatable:w,optional:x}=h,T=g in p?p[g]:"";if(Sn(T)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const $=Sn(T)?T.join("/"):T;if(!$)if(x)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${g}"`);d+=$}}return d||"/"}return{re:r,score:o,keys:l,parse:c,stringify:u}}function Lb(n,t){let a=0;for(;a<n.length&&a<t.length;){const o=t[a]-n[a];if(o)return o;a++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Cb(n,t){let a=0;const o=n.score,i=t.score;for(;a<o.length&&a<i.length;){const l=Lb(o[a],i[a]);if(l)return l;a++}if(Math.abs(i.length-o.length)===1){if(cu(o))return 1;if(cu(i))return-1}return i.length-o.length}function cu(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Eb={type:0,value:""},Ib=/[a-zA-Z0-9_]/;function Sb(n){if(!n)return[[]];if(n==="/")return[[Eb]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function t(h){throw new Error(`ERR (${a})/"${p}": ${h}`)}let a=0,o=a;const i=[];let l;function r(){l&&i.push(l),l=[]}let c=0,u,p="",d="";function m(){p&&(a===0?l.push({type:0,value:p}):a===1||a===2||a===3?(l.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),p="")}function f(){p+=u}for(;c<n.length;){if(u=n[c++],u==="\\"&&a!==2){o=a,a=4;continue}switch(a){case 0:u==="/"?(p&&m(),r()):u===":"?(m(),a=1):f();break;case 4:f(),a=o;break;case 1:u==="("?a=2:Ib.test(u)?f():(m(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:a=3:d+=u;break;case 3:m(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:t("Unknown state");break}}return a===2&&t(`Unfinished custom RegExp for param "${p}"`),m(),r(),i}function Ab(n,t,a){const o=Mb(Sb(n.path),a);{const l=new Set;for(const r of o.keys)l.has(r.name)&&Ce(`Found duplicated params with name "${r.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),l.add(r.name)}const i=He(o,{record:n,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Ob(n,t){const a=[],o=new Map;t=du({strict:!1,end:!0,sensitive:!1},t);function i(d){return o.get(d)}function l(d,m,f){const h=!f,g=Hb(d);Fb(g,m),g.aliasOf=f&&f.record;const w=du(t,d),x=[g];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const A of k)x.push(He({},g,{components:f?f.record.components:g.components,path:A,aliasOf:f?f.record:g}))}let T,$;for(const k of x){const{path:A}=k;if(m&&A[0]!=="/"){const L=m.record.path,H=L[L.length-1]==="/"?"":"/";k.path=m.record.path+(A&&H+A)}if(k.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(T=Ab(k,m,w),m&&A[0]==="/"&&qb(T,m),f?(f.alias.push(T),Nb(f,T)):($=$||T,$!==T&&$.alias.push(T),h&&d.name&&!pu(T)&&r(d.name)),g.children){const L=g.children;for(let H=0;H<L.length;H++)l(L[H],T,f&&f.children[H])}f=f||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&u(T)}return $?()=>{r($)}:hs}function r(d){if(sm(d)){const m=o.get(d);m&&(o.delete(d),a.splice(a.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=a.indexOf(d);m>-1&&(a.splice(m,1),d.record.name&&o.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return a}function u(d){let m=0;for(;m<a.length&&Cb(d,a[m])>=0&&(d.record.path!==a[m].record.path||!im(d,a[m]));)m++;a.splice(m,0,d),d.record.name&&!pu(d)&&o.set(d.record.name,d)}function p(d,m){let f,h={},g,w;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw Ra(1,{location:d});{const $=Object.keys(d.params||{}).filter(k=>!f.keys.find(A=>A.name===k));$.length&&Ce(`Discarded invalid param(s) "${$.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}w=f.record.name,h=He(uu(m.params,f.keys.filter($=>!$.optional).map($=>$.name)),d.params&&uu(d.params,f.keys.map($=>$.name))),g=f.stringify(h)}else if("path"in d)g=d.path,g.startsWith("/")||Ce(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=a.find($=>$.re.test(g)),f&&(h=f.parse(g),w=f.record.name);else{if(f=m.name?o.get(m.name):a.find($=>$.re.test(m.path)),!f)throw Ra(1,{location:d,currentLocation:m});w=f.record.name,h=He({},m.params,d.params),g=f.stringify(h)}const x=[];let T=f;for(;T;)x.unshift(T.record),T=T.parent;return{name:w,path:g,params:h,matched:x,meta:Rb(x)}}return n.forEach(d=>l(d)),{addRoute:l,resolve:p,removeRoute:r,getRoutes:c,getRecordMatcher:i}}function uu(n,t){const a={};for(const o of t)o in n&&(a[o]=n[o]);return a}function Hb(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Pb(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Pb(n){const t={},a=n.props||!1;if("component"in n)t.default=a;else for(const o in n.components)t[o]=typeof a=="boolean"?a:a[o];return t}function pu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Rb(n){return n.reduce((t,a)=>He(t,a.meta),{})}function du(n,t){const a={};for(const o in n)a[o]=o in t?t[o]:n[o];return a}function Tl(n,t){return n.name===t.name&&n.optional===t.optional&&n.repeatable===t.repeatable}function Nb(n,t){for(const a of n.keys)if(!a.optional&&!t.keys.find(Tl.bind(null,a)))return Ce(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${a.name}"`);for(const a of t.keys)if(!a.optional&&!n.keys.find(Tl.bind(null,a)))return Ce(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${a.name}"`)}function Fb(n,t){t&&t.record.name&&!n.name&&!n.path&&Ce(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function qb(n,t){for(const a of t.keys)if(!n.keys.find(Tl.bind(null,a)))return Ce(`Absolute path "${n.record.path}" must have the exact same param named "${a.name}" as its parent "${t.record.path}".`)}function im(n,t){return t.children.some(a=>a===n||im(n,a))}const lm=/#/g,Wb=/&/g,Db=/\//g,jb=/=/g,Bb=/\?/g,rm=/\+/g,Vb=/%5B/g,Ub=/%5D/g,cm=/%5E/g,Kb=/%60/g,um=/%7B/g,Gb=/%7C/g,pm=/%7D/g,Qb=/%20/g;function Tr(n){return encodeURI(""+n).replace(Gb,"|").replace(Vb,"[").replace(Ub,"]")}function Yb(n){return Tr(n).replace(um,"{").replace(pm,"}").replace(cm,"^")}function $l(n){return Tr(n).replace(rm,"%2B").replace(Qb,"+").replace(lm,"%23").replace(Wb,"%26").replace(Kb,"`").replace(um,"{").replace(pm,"}").replace(cm,"^")}function Jb(n){return $l(n).replace(jb,"%3D")}function Zb(n){return Tr(n).replace(lm,"%23").replace(Bb,"%3F")}function Xb(n){return n==null?"":Zb(n).replace(Db,"%2F")}function Is(n){try{return decodeURIComponent(""+n)}catch{Ce(`Error decoding "${n}". Using original value`)}return""+n}function e0(n){const t={};if(n===""||n==="?")return t;const o=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<o.length;++i){const l=o[i].replace(rm," "),r=l.indexOf("="),c=Is(r<0?l:l.slice(0,r)),u=r<0?null:Is(l.slice(r+1));if(c in t){let p=t[c];Sn(p)||(p=t[c]=[p]),p.push(u)}else t[c]=u}return t}function mu(n){let t="";for(let a in n){const o=n[a];if(a=Jb(a),o==null){o!==void 0&&(t+=(t.length?"&":"")+a);continue}(Sn(o)?o.map(l=>l&&$l(l)):[o&&$l(o)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+a,l!=null&&(t+="="+l))})}return t}function n0(n){const t={};for(const a in n){const o=n[a];o!==void 0&&(t[a]=Sn(o)?o.map(i=>i==null?null:""+i):o==null?o:""+o)}return t}const t0=Symbol("router view location matched"),fu=Symbol("router view depth"),$r=Symbol("router"),dm=Symbol("route location"),zl=Symbol("router view location");function Ja(){let n=[];function t(o){return n.push(o),()=>{const i=n.indexOf(o);i>-1&&n.splice(i,1)}}function a(){n=[]}return{add:t,list:()=>n,reset:a}}function Mt(n,t,a,o,i){const l=o&&(o.enterCallbacks[i]=o.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const u=m=>{m===!1?c(Ra(4,{from:a,to:t})):m instanceof Error?c(m):yb(m)?c(Ra(2,{from:t,to:m})):(l&&o.enterCallbacks[i]===l&&typeof m=="function"&&l.push(m),r())},p=n.call(o&&o.instances[i],t,a,a0(u,t,a));let d=Promise.resolve(p);if(n.length<3&&(d=d.then(u)),n.length>2){const m=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(f=>u._called?f:(Ce(m),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){Ce(m),c(new Error("Invalid navigation guard"));return}}d.catch(m=>c(m))})}function a0(n,t,a){let o=0;return function(){o++===1&&Ce(`The "next" callback was called more than once in one navigation guard when going from "${a.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,o===1&&n.apply(null,arguments)}}function Ai(n,t,a,o){const i=[];for(const l of n){!l.components&&!l.children.length&&Ce(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const r in l.components){let c=l.components[r];{if(!c||typeof c!="object"&&typeof c!="function")throw Ce(`Component "${r}" in record with path "${l.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Ce(`Component "${r}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Ce(`Component "${r}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!l.instances[r]))if(s0(c)){const p=(c.__vccOpts||c)[t];p&&i.push(Mt(p,a,o,l,r))}else{let u=c();"catch"in u||(Ce(`Component "${r}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),i.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=ab(p)?p.default:p;l.components[r]=d;const f=(d.__vccOpts||d)[t];return f&&Mt(f,a,o,l,r)()}))}}}return i}function s0(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function hu(n){const t=z($r),a=z(dm),o=N(()=>t.resolve(O(n.to))),i=N(()=>{const{matched:u}=o.value,{length:p}=u,d=u[p-1],m=a.matched;if(!d||!m.length)return-1;const f=m.findIndex(Wt.bind(null,d));if(f>-1)return f;const h=gu(u[p-2]);return p>1&&gu(d)===h&&m[m.length-1].path!==h?m.findIndex(Wt.bind(null,u[p-2])):f}),l=N(()=>i.value>-1&&r0(a.params,o.value.params)),r=N(()=>i.value>-1&&i.value===a.matched.length-1&&tm(a.params,o.value.params));function c(u={}){return l0(u)?t[O(n.replace)?"replace":"push"](O(n.to)).catch(hs):Promise.resolve()}if(ft){const u=Tn();if(u){const p={route:o.value,isActive:l.value,isExactActive:r.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),ba(()=>{p.route=o.value,p.isActive=l.value,p.isExactActive=r.value},{flush:"post"})}}return{route:o,href:N(()=>o.value.href),isActive:l,isExactActive:r,navigate:c}}const o0=Ae({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hu,setup(n,{slots:t}){const a=Be(hu(n)),{options:o}=z($r),i=N(()=>({[_u(n.activeClass,o.linkActiveClass,"router-link-active")]:a.isActive,[_u(n.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const l=t.default&&t.default(a);return n.custom?l:xn("a",{"aria-current":a.isExactActive?n.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:i.value},l)}}}),i0=o0;function l0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function r0(n,t){for(const a in t){const o=t[a],i=n[a];if(typeof o=="string"){if(o!==i)return!1}else if(!Sn(i)||i.length!==o.length||o.some((l,r)=>l!==i[r]))return!1}return!0}function gu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const _u=(n,t,a)=>n??t??a,c0=Ae({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:a}){p0();const o=z(zl),i=N(()=>n.route||o.value),l=z(fu,0),r=N(()=>{let p=O(l);const{matched:d}=i.value;let m;for(;(m=d[p])&&!m.components;)p++;return p}),c=N(()=>i.value.matched[r.value]);Cn(fu,N(()=>r.value+1)),Cn(t0,c),Cn(zl,i);const u=Z();return ke(()=>[u.value,c.value,n.name],([p,d,m],[f,h,g])=>{d&&(d.instances[m]=p,h&&h!==d&&p&&p===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),p&&d&&(!h||!Wt(d,h)||!f)&&(d.enterCallbacks[m]||[]).forEach(w=>w(p))},{flush:"post"}),()=>{const p=i.value,d=n.name,m=c.value,f=m&&m.components[d];if(!f)return vu(a.default,{Component:f,route:p});const h=m.props[d],g=h?h===!0?p.params:typeof h=="function"?h(p):h:null,x=xn(f,He({},g,t,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(m.instances[d]=null)},ref:u}));if(ft&&x.ref){const T={depth:r.value,name:m.name,path:m.path,meta:m.meta};(Sn(x.ref)?x.ref.map(k=>k.i):[x.ref.i]).forEach(k=>{k.__vrv_devtools=T})}return vu(a.default,{Component:x,route:p})||x}}});function vu(n,t){if(!n)return null;const a=n(t);return a.length===1?a[0]:a}const u0=c0;function p0(){const n=Tn(),t=n.parent&&n.parent.type.name,a=n.parent&&n.parent.subTree&&n.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof a=="object"&&a.name==="RouterView"){const o=t==="KeepAlive"?"keep-alive":"transition";Ce(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function Za(n,t){const a=He({},n,{matched:n.matched.map(o=>b0(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:t,value:a}}}function uo(n){return{_custom:{display:n}}}let d0=0;function m0(n,t,a){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=d0++;tb({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},i=>{typeof i.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.on.inspectComponent((d,m)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Za(t.currentRoute.value,"Current Route")})}),i.on.visitComponentTree(({treeNode:d,componentInstance:m})=>{if(m.__vrv_devtools){const f=m.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:mm})}Sn(m.__vrl_devtools)&&(m.__devtoolsApi=i,m.__vrl_devtools.forEach(f=>{let h=gm,g="";f.isExactActive?(h=hm,g="This is exactly active"):f.isActive&&(h=fm,g="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:g,backgroundColor:h})}))}),ke(t.currentRoute,()=>{u(),i.notifyComponentUpdate(),i.sendInspectorTree(c),i.sendInspectorState(c)});const l="router:navigations:"+o;i.addTimelineLayer({id:l,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((d,m)=>{i.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:i.now(),data:{error:d},groupId:m.meta.__navigationId}})});let r=0;t.beforeEach((d,m)=>{const f={guard:uo("beforeEach"),from:Za(m,"Current Location during this navigation"),to:Za(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:r++}),i.addTimelineEvent({layerId:l,event:{time:i.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),t.afterEach((d,m,f)=>{const h={guard:uo("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=uo("❌")):h.status=uo("✅"),h.from=Za(m,"Current Location during this navigation"),h.to=Za(d,"Target location"),i.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:d.fullPath,time:i.now(),data:h,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+o;i.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let m=a.getRoutes().filter(f=>!f.parent);m.forEach(km),d.filter&&(m=m.filter(f=>Ml(f,d.filter.toLowerCase()))),m.forEach(f=>vm(f,t.currentRoute.value)),d.rootNodes=m.map(_m)}let p;i.on.getInspectorTree(d=>{p=d,d.app===n&&d.inspectorId===c&&u()}),i.on.getInspectorState(d=>{if(d.app===n&&d.inspectorId===c){const f=a.getRoutes().find(h=>h.record.__vd_id===d.nodeId);f&&(d.state={options:h0(f)})}}),i.sendInspectorTree(c),i.sendInspectorState(c)})}function f0(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function h0(n){const{record:t}=n,a=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&a.push({editable:!1,key:"name",value:t.name}),a.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&a.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(o=>`${o.name}${f0(o)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),t.redirect!=null&&a.push({editable:!1,key:"redirect",value:t.redirect}),n.alias.length&&a.push({editable:!1,key:"aliases",value:n.alias.map(o=>o.record.path)}),Object.keys(n.record.meta).length&&a.push({editable:!1,key:"meta",value:n.record.meta}),a.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),a}const mm=15485081,fm=2450411,hm=8702998,g0=2282478,gm=16486972,_0=6710886;function _m(n){const t=[],{record:a}=n;a.name!=null&&t.push({label:String(a.name),textColor:0,backgroundColor:g0}),a.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:gm}),n.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:mm}),n.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:hm}),n.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:fm}),a.redirect&&t.push({label:typeof a.redirect=="string"?`redirect: ${a.redirect}`:"redirects",textColor:16777215,backgroundColor:_0});let o=a.__vd_id;return o==null&&(o=String(v0++),a.__vd_id=o),{id:o,label:a.path,tags:t,children:n.children.map(_m)}}let v0=0;const k0=/^\/(.*)\/([a-z]*)$/;function vm(n,t){const a=t.matched.length&&Wt(t.matched[t.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=a,a||(n.__vd_active=t.matched.some(o=>Wt(o,n.record))),n.children.forEach(o=>vm(o,t))}function km(n){n.__vd_match=!1,n.children.forEach(km)}function Ml(n,t){const a=String(n.re).match(k0);if(n.__vd_match=!1,!a||a.length<3)return!1;if(new RegExp(a[1].replace(/\$$/,""),a[2]).test(t))return n.children.forEach(r=>Ml(r,t)),n.record.path!=="/"||t==="/"?(n.__vd_match=n.re.test(t),!0):!1;const i=n.record.path.toLowerCase(),l=Is(i);return!t.startsWith("/")&&(l.includes(t)||i.includes(t))||l.startsWith(t)||i.startsWith(t)||n.record.name&&String(n.record.name).includes(t)?!0:n.children.some(r=>Ml(r,t))}function b0(n,t){const a={};for(const o in n)t.includes(o)||(a[o]=n[o]);return a}function y0(n){const t=Ob(n.routes,n),a=n.parseQuery||e0,o=n.stringifyQuery||mu,i=n.history;if(!i)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Ja(),r=Ja(),c=Ja(),u=it(xt);let p=xt;ft&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ii.bind(null,P=>""+P),m=Ii.bind(null,Xb),f=Ii.bind(null,Is);function h(P,ee){let te,se;return sm(P)?(te=t.getRecordMatcher(P),se=ee):se=P,t.addRoute(se,te)}function g(P){const ee=t.getRecordMatcher(P);ee?t.removeRoute(ee):Ce(`Cannot remove non-existent route "${String(P)}"`)}function w(){return t.getRoutes().map(P=>P.record)}function x(P){return!!t.getRecordMatcher(P)}function T(P,ee){if(ee=He({},ee||u.value),typeof P=="string"){const y=Si(a,P,ee.path),I=t.resolve({path:y.path},ee),j=i.createHref(y.fullPath);return j.startsWith("//")?Ce(`Location "${P}" resolved to "${j}". A resolved location cannot start with multiple slashes.`):I.matched.length||Ce(`No match found for location with path "${P}"`),He(y,I,{params:f(I.params),hash:Is(y.hash),redirectedFrom:void 0,href:j})}let te;if("path"in P)"params"in P&&!("name"in P)&&Object.keys(P.params).length&&Ce(`Path "${P.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),te=He({},P,{path:Si(a,P.path,ee.path).path});else{const y=He({},P.params);for(const I in y)y[I]==null&&delete y[I];te=He({},P,{params:m(y)}),ee.params=m(ee.params)}const se=t.resolve(te,ee),$e=P.hash||"";$e&&!$e.startsWith("#")&&Ce(`A \`hash\` should always start with the character "#". Replace "${$e}" with "#${$e}".`),se.params=d(f(se.params));const Ne=ib(o,He({},P,{hash:Yb($e),path:se.path})),_=i.createHref(Ne);return _.startsWith("//")?Ce(`Location "${P}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):se.matched.length||Ce(`No match found for location with path "${"path"in P?P.path:P}"`),He({fullPath:Ne,hash:$e,query:o===mu?n0(P.query):P.query||{}},se,{redirectedFrom:void 0,href:_})}function $(P){return typeof P=="string"?Si(a,P,u.value.path):He({},P)}function k(P,ee){if(p!==P)return Ra(8,{from:ee,to:P})}function A(P){return B(P)}function L(P){return A(He($(P),{replace:!0}))}function H(P){const ee=P.matched[P.matched.length-1];if(ee&&ee.redirect){const{redirect:te}=ee;let se=typeof te=="function"?te(P):te;if(typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=$(se):{path:se},se.params={}),!("path"in se)&&!("name"in se))throw Ce(`Invalid redirect found:
${JSON.stringify(se,null,2)}
 when navigating to "${P.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return He({query:P.query,hash:P.hash,params:"path"in se?{}:P.params},se)}}function B(P,ee){const te=p=T(P),se=u.value,$e=P.state,Ne=P.force,_=P.replace===!0,y=H(te);if(y)return B(He($(y),{state:typeof y=="object"?He({},$e,y.state):$e,force:Ne,replace:_}),ee||te);const I=te;I.redirectedFrom=ee;let j;return!Ne&&au(o,se,te)&&(j=Ra(16,{to:I,from:se}),An(se,se,!0,!1)),(j?Promise.resolve(j):ie(I,se)).catch(D=>ct(D)?ct(D,2)?D:Pe(D):pe(D,I,se)).then(D=>{if(D){if(ct(D,2))return au(o,T(D.to),I)&&ee&&(ee._count=ee._count?ee._count+1:1)>30?(Ce(`Detected a possibly infinite redirection in a navigation guard when going from "${se.fullPath}" to "${I.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):B(He({replace:_},$(D.to),{state:typeof D.to=="object"?He({},$e,D.to.state):$e,force:Ne}),ee||I)}else D=X(I,se,!0,_,$e);return me(I,se,D),D})}function R(P,ee){const te=k(P,ee);return te?Promise.reject(te):Promise.resolve()}function K(P){const ee=Jn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(P):P()}function ie(P,ee){let te;const[se,$e,Ne]=w0(P,ee);te=Ai(se.reverse(),"beforeRouteLeave",P,ee);for(const y of se)y.leaveGuards.forEach(I=>{te.push(Mt(I,P,ee))});const _=R.bind(null,P,ee);return te.push(_),On(te).then(()=>{te=[];for(const y of l.list())te.push(Mt(y,P,ee));return te.push(_),On(te)}).then(()=>{te=Ai($e,"beforeRouteUpdate",P,ee);for(const y of $e)y.updateGuards.forEach(I=>{te.push(Mt(I,P,ee))});return te.push(_),On(te)}).then(()=>{te=[];for(const y of P.matched)if(y.beforeEnter&&!ee.matched.includes(y))if(Sn(y.beforeEnter))for(const I of y.beforeEnter)te.push(Mt(I,P,ee));else te.push(Mt(y.beforeEnter,P,ee));return te.push(_),On(te)}).then(()=>(P.matched.forEach(y=>y.enterCallbacks={}),te=Ai(Ne,"beforeRouteEnter",P,ee),te.push(_),On(te))).then(()=>{te=[];for(const y of r.list())te.push(Mt(y,P,ee));return te.push(_),On(te)}).catch(y=>ct(y,8)?y:Promise.reject(y))}function me(P,ee,te){for(const se of c.list())K(()=>se(P,ee,te))}function X(P,ee,te,se,$e){const Ne=k(P,ee);if(Ne)return Ne;const _=ee===xt,y=ft?history.state:{};te&&(se||_?i.replace(P.fullPath,He({scroll:_&&y&&y.scroll},$e)):i.push(P.fullPath,$e)),u.value=P,An(P,ee,te,_),Pe()}let ve;function be(){ve||(ve=i.listen((P,ee,te)=>{if(!Bt.listening)return;const se=T(P),$e=H(se);if($e){B(He($e,{replace:!0}),se).catch(hs);return}p=se;const Ne=u.value;ft&&fb(ou(Ne.fullPath,te.delta),di()),ie(se,Ne).catch(_=>ct(_,12)?_:ct(_,2)?(B(_.to,se).then(y=>{ct(y,20)&&!te.delta&&te.type===Es.pop&&i.go(-1,!1)}).catch(hs),Promise.reject()):(te.delta&&i.go(-te.delta,!1),pe(_,se,Ne))).then(_=>{_=_||X(se,Ne,!1),_&&(te.delta&&!ct(_,8)?i.go(-te.delta,!1):te.type===Es.pop&&ct(_,20)&&i.go(-1,!1)),me(se,Ne,_)}).catch(hs)}))}let xe=Ja(),Re=Ja(),ae;function pe(P,ee,te){Pe(P);const se=Re.list();return se.length?se.forEach($e=>$e(P,ee,te)):(Ce("uncaught error during route navigation:"),console.error(P)),Promise.reject(P)}function ze(){return ae&&u.value!==xt?Promise.resolve():new Promise((P,ee)=>{xe.add([P,ee])})}function Pe(P){return ae||(ae=!P,be(),xe.list().forEach(([ee,te])=>P?te(P):ee()),xe.reset()),P}function An(P,ee,te,se){const{scrollBehavior:$e}=n;if(!ft||!$e)return Promise.resolve();const Ne=!te&&hb(ou(P.fullPath,0))||(se||!te)&&history.state&&history.state.scroll||null;return on().then(()=>$e(P,ee,Ne)).then(_=>_&&mb(_)).catch(_=>pe(_,P,ee))}const an=P=>i.go(P);let _n;const Jn=new Set,Bt={currentRoute:u,listening:!0,addRoute:h,removeRoute:g,hasRoute:x,getRoutes:w,resolve:T,options:n,push:A,replace:L,go:an,back:()=>an(-1),forward:()=>an(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:Re.add,isReady:ze,install(P){const ee=this;P.component("RouterLink",i0),P.component("RouterView",u0),P.config.globalProperties.$router=ee,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>O(u)}),ft&&!_n&&u.value===xt&&(_n=!0,A(i.location).catch($e=>{Ce("Unexpected error when starting the router:",$e)}));const te={};for(const $e in xt)te[$e]=N(()=>u.value[$e]);P.provide($r,ee),P.provide(dm,Be(te)),P.provide(zl,u);const se=P.unmount;Jn.add(P),P.unmount=function(){Jn.delete(P),Jn.size<1&&(p=xt,ve&&ve(),ve=null,u.value=xt,_n=!1,ae=!1),se()},ft&&m0(P,ee,t)}};function On(P){return P.reduce((ee,te)=>ee.then(()=>K(te)),Promise.resolve())}return Bt}function w0(n,t){const a=[],o=[],i=[],l=Math.max(t.matched.length,n.matched.length);for(let r=0;r<l;r++){const c=t.matched[r];c&&(n.matched.find(p=>Wt(p,c))?o.push(c):a.push(c));const u=n.matched[r];u&&(t.matched.find(p=>Wt(p,u))||i.push(u))}return[a,o,i]}const Oi=Z(!1),_s=Z(!1),Ca=Z(!1),x0=Z(!0),Ll=d1({xs:460,...p1}),ha=G1(),bm=q1(),T0=N(()=>ha.height.value-ha.width.value/St>180),ym=N1(Qn?document.body:null),Ht=r1(),$0=N(()=>{var n,t;return["INPUT","TEXTAREA"].includes(((n=Ht.value)==null?void 0:n.tagName)||"")||((t=Ht.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),z0=N(()=>{var n;return["BUTTON","A"].includes(((n=Ht.value)==null?void 0:n.tagName)||"")});Yn("slidev-camera","default");Yn("slidev-mic","default");const bo=Yn("slidev-scale",0),dn=Yn("slidev-show-overview",!1),Hi=Yn("slidev-presenter-cursor",!0),ku=Yn("slidev-show-editor",!1);Yn("slidev-editor-width",Qn?window.innerWidth*.4:100);const wm=Jd(dn);function bu(n,t,a,o=i=>i){return n*o(.5-t*(.5-a))}function M0(n){return[-n[0],-n[1]]}function Vn(n,t){return[n[0]+t[0],n[1]+t[1]]}function Rn(n,t){return[n[0]-t[0],n[1]-t[1]]}function Bn(n,t){return[n[0]*t,n[1]*t]}function L0(n,t){return[n[0]/t,n[1]/t]}function Xa(n){return[n[1],-n[0]]}function yu(n,t){return n[0]*t[0]+n[1]*t[1]}function C0(n,t){return n[0]===t[0]&&n[1]===t[1]}function E0(n){return Math.hypot(n[0],n[1])}function I0(n){return n[0]*n[0]+n[1]*n[1]}function wu(n,t){return I0(Rn(n,t))}function xm(n){return L0(n,E0(n))}function S0(n,t){return Math.hypot(n[1]-t[1],n[0]-t[0])}function es(n,t,a){let o=Math.sin(a),i=Math.cos(a),l=n[0]-t[0],r=n[1]-t[1],c=l*i-r*o,u=l*o+r*i;return[c+t[0],u+t[1]]}function Cl(n,t,a){return Vn(n,Bn(Rn(t,n),a))}function xu(n,t,a){return Vn(n,Bn(t,a))}var{min:za,PI:A0}=Math,Tu=.275,ns=A0+1e-4;function O0(n,t={}){let{size:a=16,smoothing:o=.5,thinning:i=.5,simulatePressure:l=!0,easing:r=ae=>ae,start:c={},end:u={},last:p=!1}=t,{cap:d=!0,easing:m=ae=>ae*(2-ae)}=c,{cap:f=!0,easing:h=ae=>--ae*ae*ae+1}=u;if(n.length===0||a<=0)return[];let g=n[n.length-1].runningLength,w=c.taper===!1?0:c.taper===!0?Math.max(a,g):c.taper,x=u.taper===!1?0:u.taper===!0?Math.max(a,g):u.taper,T=Math.pow(a*o,2),$=[],k=[],A=n.slice(0,10).reduce((ae,pe)=>{let ze=pe.pressure;if(l){let Pe=za(1,pe.distance/a),An=za(1,1-Pe);ze=za(1,ae+(An-ae)*(Pe*Tu))}return(ae+ze)/2},n[0].pressure),L=bu(a,i,n[n.length-1].pressure,r),H,B=n[0].vector,R=n[0].point,K=R,ie=R,me=K,X=!1;for(let ae=0;ae<n.length;ae++){let{pressure:pe}=n[ae],{point:ze,vector:Pe,distance:An,runningLength:an}=n[ae];if(ae<n.length-1&&g-an<3)continue;if(i){if(l){let se=za(1,An/a),$e=za(1,1-se);pe=za(1,A+($e-A)*(se*Tu))}L=bu(a,i,pe,r)}else L=a/2;H===void 0&&(H=L);let _n=an<w?m(an/w):1,Jn=g-an<x?h((g-an)/x):1;L=Math.max(.01,L*Math.min(_n,Jn));let Bt=(ae<n.length-1?n[ae+1]:n[ae]).vector,On=ae<n.length-1?yu(Pe,Bt):1,P=yu(Pe,B)<0&&!X,ee=On!==null&&On<0;if(P||ee){let se=Bn(Xa(B),L);for(let $e=1/13,Ne=0;Ne<=1;Ne+=$e)ie=es(Rn(ze,se),ze,ns*Ne),$.push(ie),me=es(Vn(ze,se),ze,ns*-Ne),k.push(me);R=ie,K=me,ee&&(X=!0);continue}if(X=!1,ae===n.length-1){let se=Bn(Xa(Pe),L);$.push(Rn(ze,se)),k.push(Vn(ze,se));continue}let te=Bn(Xa(Cl(Bt,Pe,On)),L);ie=Rn(ze,te),(ae<=1||wu(R,ie)>T)&&($.push(ie),R=ie),me=Vn(ze,te),(ae<=1||wu(K,me)>T)&&(k.push(me),K=me),A=pe,B=Pe}let ve=n[0].point.slice(0,2),be=n.length>1?n[n.length-1].point.slice(0,2):Vn(n[0].point,[1,1]),xe=[],Re=[];if(n.length===1){if(!(w||x)||p){let ae=xu(ve,xm(Xa(Rn(ve,be))),-(H||L)),pe=[];for(let ze=1/13,Pe=ze;Pe<=1;Pe+=ze)pe.push(es(ae,ve,ns*2*Pe));return pe}}else{if(!(w||x&&n.length===1))if(d)for(let pe=1/13,ze=pe;ze<=1;ze+=pe){let Pe=es(k[0],ve,ns*ze);xe.push(Pe)}else{let pe=Rn($[0],k[0]),ze=Bn(pe,.5),Pe=Bn(pe,.51);xe.push(Rn(ve,ze),Rn(ve,Pe),Vn(ve,Pe),Vn(ve,ze))}let ae=Xa(M0(n[n.length-1].vector));if(x||w&&n.length===1)Re.push(be);else if(f){let pe=xu(be,ae,L);for(let ze=1/29,Pe=ze;Pe<1;Pe+=ze)Re.push(es(pe,be,ns*3*Pe))}else Re.push(Vn(be,Bn(ae,L)),Vn(be,Bn(ae,L*.99)),Rn(be,Bn(ae,L*.99)),Rn(be,Bn(ae,L)))}return $.concat(Re,k.reverse(),xe)}function H0(n,t={}){var a;let{streamline:o=.5,size:i=16,last:l=!1}=t;if(n.length===0)return[];let r=.15+(1-o)*.85,c=Array.isArray(n[0])?n:n.map(({x:h,y:g,pressure:w=.5})=>[h,g,w]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let g=1;g<5;g++)c.push(Cl(c[0],h,g/4))}c.length===1&&(c=[...c,[...Vn(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,m=u[0],f=c.length-1;for(let h=1;h<c.length;h++){let g=l&&h===f?c[h].slice(0,2):Cl(m.point,c[h],r);if(C0(m.point,g))continue;let w=S0(g,m.point);if(d+=w,h<f&&!p){if(d<i)continue;p=!0}m={point:g,pressure:c[h][2]>=0?c[h][2]:.5,vector:xm(Rn(m.point,g)),distance:w,runningLength:d},u.push(m)}return u[0].vector=((a=u[1])==null?void 0:a.vector)||[0,0],u}function P0(n,t={}){return O0(H0(n,t),t)}var R0=()=>({events:{},emit(n,...t){let a=this.events[n]||[];for(let o=0,i=a.length;o<i;o++)a[o](...t)},on(n,t){var a;return(a=this.events[n])!=null&&a.push(t)||(this.events[n]=[t]),()=>{var o;this.events[n]=(o=this.events[n])==null?void 0:o.filter(i=>t!==i)}}});function jo(n,t){return n-t}function N0(n){return n<0?-1:1}function Bo(n){return[Math.abs(n),N0(n)]}function Tm(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var F0=2,ht=F0,Wa=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var t;const a=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-i.left)*o,y:(n.pageY-i.top)*o,pressure:n.pressure}}else{const i=this.drauu.svgPoint;i.x=n.clientX,i.y=n.clientY;const l=i.matrixTransform((t=a.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*o,y:l.y*o,pressure:n.pressure}}}createElement(n,t){const a=document.createElementNS("http://www.w3.org/2000/svg",n),o=t?{...this.brush,...t}:this.brush;return a.setAttribute("fill",o.fill??"transparent"),a.setAttribute("stroke",o.color),a.setAttribute("stroke-width",o.size.toString()),a.setAttribute("stroke-linecap","round"),o.dasharray&&a.setAttribute("stroke-dasharray",o.dasharray),a}attr(n,t){this.el.setAttribute(n,typeof t=="string"?t:t.toFixed(ht))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},q0=class extends Wa{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const t=P0(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const a=t.reduce((o,[i,l],r,c)=>{const[u,p]=c[(r+1)%c.length];return o.push(i,l,(i+u)/2,(l+p)/2),o},["M",...t[0],"Q"]);return a.push("Z"),a.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},W0=class extends Wa{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,a]=Bo(n.x-this.start.x),[o,i]=Bo(n.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[l,r]=[this.start.x,this.start.x+t*a].sort(jo),[c,u]=[this.start.y,this.start.y+o*i].sort(jo);this.attr("cx",(l+r)/2),this.attr("cy",(c+u)/2),this.attr("rx",(r-l)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function $m(n,t){const a=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",t),o.setAttribute("id",n),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(i),a.appendChild(o),a}var D0=class extends Wa{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const t=Tm(),a=document.createElementNS("http://www.w3.org/2000/svg","g");return a.append($m(t,this.brush.color)),a.append(this.el),this.attr("marker-end",`url(#${t})`),a}return this.el}onMove(n){if(!this.el)return!1;let{x:t,y:a}=n;if(this.shiftPressed){const o=n.x-this.start.x,i=n.y-this.start.y;if(i!==0){let l=o/i;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+i*l,a=this.start.y+i):(t=this.start.x+o,a=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-a),this.attr("x2",t),this.attr("y2",a)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",a)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},j0=class extends Wa{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,a]=Bo(n.x-this.start.x),[o,i]=Bo(n.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[l,r]=[this.start.x,this.start.x+t*a].sort(jo),[c,u]=[this.start.y,this.start.y+o*i].sort(jo);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",u-c)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function B0(n,t){const a=n.x-t.x,o=n.y-t.y;return a*a+o*o}function V0(n,t,a){let o=t.x,i=t.y,l=a.x-o,r=a.y-i;if(l!==0||r!==0){const c=((n.x-o)*l+(n.y-i)*r)/(l*l+r*r);c>1?(o=a.x,i=a.y):c>0&&(o+=l*c,i+=r*c)}return l=n.x-o,r=n.y-i,l*l+r*r}function U0(n,t){let a=n[0];const o=[a];let i;for(let l=1,r=n.length;l<r;l++)i=n[l],B0(i,a)>t&&(o.push(i),a=i);return a!==i&&i&&o.push(i),o}function El(n,t,a,o,i){let l=o,r=0;for(let c=t+1;c<a;c++){const u=V0(n[c],n[t],n[a]);u>l&&(r=c,l=u)}l>o&&(r-t>1&&El(n,t,r,o,i),i.push(n[r]),a-r>1&&El(n,r,a,o,i))}function K0(n,t){const a=n.length-1,o=[n[0]];return El(n,0,a,t,o),o.push(n[a]),o}function $u(n,t,a=!1){if(n.length<=2)return n;const o=t!==void 0?t*t:1;return n=a?n:U0(n,o),n=K0(n,o),n}var G0=class extends Wa{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=Tm();const t=$m(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=$u(this.points,1,!0),this.count=0),this.attr("d",Mu(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",Mu($u(this.points,1,!0))),!n.getTotalLength()))}};function Q0(n,t){const a=t.x-n.x,o=t.y-n.y;return{length:Math.sqrt(a**2+o**2),angle:Math.atan2(o,a)}}function zu(n,t,a,o){const i=t||n,l=a||n,r=.2,c=Q0(i,l),u=c.angle+(o?Math.PI:0),p=c.length*r,d=n.x+Math.cos(u)*p,m=n.y+Math.sin(u)*p;return{x:d,y:m}}function Y0(n,t,a){const o=zu(a[t-1],a[t-2],n),i=zu(n,a[t-1],a[t+1],!0);return`C ${o.x.toFixed(ht)},${o.y.toFixed(ht)} ${i.x.toFixed(ht)},${i.y.toFixed(ht)} ${n.x.toFixed(ht)},${n.y.toFixed(ht)}`}function Mu(n){return n.reduce((t,a,o,i)=>o===0?`M ${a.x.toFixed(ht)},${a.y.toFixed(ht)}`:`${t} ${Y0(a,o,i)}`,"")}var J0=class extends Wa{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const t=(a,o)=>{if(a&&a.length)for(let i=0;i<a.length;i++){const l=a[i];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=l.getPointAtLength(r*c/this.pathSubFactor),p=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:o||l})}}else l.children&&t(l.children,l)}};n&&t(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const a=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(a,o)&&(a.element.remove(),n.push(t))}return n.length&&(this.pathFragments=this.pathFragments.filter((t,a)=>!n.includes(a))),n.length>0}lineLineIntersect(n,t){const a=n.x1,o=n.x2,i=t.x1,l=t.x2,r=n.y1,c=n.y2,u=t.y1,p=t.y2,d=(a-o)*(u-p)-(r-c)*(i-l),m=(a*c-r*o)*(i-l)-(a-o)*(i*p-u*l),f=(a*c-r*o)*(u-p)-(r-c)*(i*p-u*l),h=(g,w,x)=>g>=w&&g<=x?!0:g>=x&&g<=w;if(d===0)return!1;{const g={x:m/d,y:f/d};return h(g.x,a,o)&&h(g.y,r,c)&&h(g.x,i,l)&&h(g.y,u,p)}}};function Z0(n){return{draw:new G0(n),stylus:new q0(n),line:new D0(n),rectangle:new j0(n),ellipse:new W0(n),eraseLine:new J0(n)}}var X0=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=R0(),this._models=Z0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const a=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),i=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);a.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{a.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,t){return this._emitter.on(n,t)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const t=this.model._eventUp(n);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function ey(n){return new X0(n)}const Il=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],tt=Yn("slidev-drawing-enabled",!1),qW=Yn("slidev-drawing-pinned",!1),ny=Z(!1),ty=Z(!1),ay=Z(!1),Ss=Z(!1),ia=Mk(Yn("slidev-drawing-brush",{color:Il[0],size:4,mode:"stylus"})),Lu=Z("stylus"),zm=N(()=>Ee.drawings.syncAll||kn.value);let As=!1;const ts=N({get(){return Lu.value},set(n){Lu.value=n,n==="arrow"?(ia.mode="line",ia.arrowEnd=!0):(ia.mode=n,ia.arrowEnd=!1)}}),sy=Be({brush:ia,acceptsInputTypes:N(()=>tt.value&&(!Ee.drawings.presenterOnly||kn.value)?void 0:["pen"]),coordinateTransform:!1}),gn=ni(ey(sy));function oy(){gn.clear(),zm.value&&Kd(Ue.value,"")}function zr(){var n;ty.value=gn.canRedo(),ny.value=gn.canUndo(),ay.value=!!((n=gn.el)!=null&&n.children.length)}function iy(n){As=!0;const t=Wo[n||Ue.value];t!=null?gn.load(t):gn.clear(),zr(),As=!1}gn.on("changed",()=>{if(zr(),!As){const n=gn.dump(),t=Ue.value;(Wo[t]||"")!==n&&zm.value&&Kd(t,gn.dump())}});xk(n=>{As=!0,n[Ue.value]!=null&&gn.load(n[Ue.value]||""),As=!1,zr()});on(()=>{ke(Ue,()=>{gn.mounted&&iy()},{immediate:!0})});gn.on("start",()=>Ss.value=!0);gn.on("end",()=>Ss.value=!1);window.addEventListener("keydown",n=>{if(!tt.value)return;const t=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let a=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?gn.redo():gn.undo():n.code==="Escape"?tt.value=!1:n.code==="KeyL"&&t?ts.value="line":n.code==="KeyA"&&t?ts.value="arrow":n.code==="KeyS"&&t?ts.value="stylus":n.code==="KeyR"&&t?ts.value="rectangle":n.code==="KeyE"&&t?ts.value="ellipse":n.code==="KeyC"&&t?oy():n.code.startsWith("Digit")&&t&&+n.code[5]<=Il.length?ia.color=Il[+n.code[5]-1]:a=!1,a&&(n.preventDefault(),n.stopPropagation())},!1);function Ye(...n){return N(()=>n.every(t=>Ge(t)))}function Mn(n){return N(()=>!Ge(n))}const Cu=T1(),Pi=Yn("slidev-color-schema","auto"),Sl=N(()=>Ee.colorSchema!=="auto"),Mr=N({get(){return Sl.value?Ee.colorSchema==="dark":Pi.value==="auto"?Cu.value:Pi.value==="dark"},set(n){Sl.value||(Pi.value=n===Cu.value?"auto":n?"dark":"light")}}),Mm=Jd(Mr);Qn&&ke(Mr,n=>{const t=document.querySelector("html");t.classList.toggle("dark",n),t.classList.toggle("light",!n)},{immediate:!0});const yo=Z(1),wo=N(()=>Qe.length-1),In=Z(0),Lr=Z(0);function ly(){In.value>yo.value&&(In.value-=1)}function ry(){In.value<wo.value&&(In.value+=1)}function cy(){if(In.value>yo.value){let n=In.value-Lr.value;n<yo.value&&(n=yo.value),In.value=n}}function uy(){if(In.value<wo.value){let n=In.value+Lr.value;n>wo.value&&(n=wo.value),In.value=n}}function py(){const{escape:n,space:t,shift:a,left:o,right:i,up:l,down:r,enter:c,d:u,g:p,o:d}=bm;let m=[{name:"next_space",key:Ye(t,Mn(a)),fn:Pt,autoRepeat:!0},{name:"prev_space",key:Ye(t,a),fn:Rt,autoRepeat:!0},{name:"next_right",key:Ye(i,Mn(a),Mn(dn)),fn:Pt,autoRepeat:!0},{name:"prev_left",key:Ye(o,Mn(a),Mn(dn)),fn:Rt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Pt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Rt,autoRepeat:!0},{name:"next_down",key:Ye(r,Mn(dn)),fn:Hs,autoRepeat:!0},{name:"prev_up",key:Ye(l,Mn(dn)),fn:()=>Ps(!1),autoRepeat:!0},{name:"next_shift",key:Ye(i,a),fn:Hs,autoRepeat:!0},{name:"prev_shift",key:Ye(o,a),fn:()=>Ps(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(u,Mn(tt)),fn:Mm},{name:"toggle_overview",key:Ye(d,Mn(tt)),fn:wm},{name:"hide_overview",key:Ye(n,Mn(tt)),fn:()=>dn.value=!1},{name:"goto",key:Ye(p,Mn(tt)),fn:()=>Ca.value=!Ca.value},{name:"next_overview",key:Ye(i,dn),fn:ry},{name:"prev_overview",key:Ye(o,dn),fn:ly},{name:"up_overview",key:Ye(l,dn),fn:cy},{name:"down_overview",key:Ye(r,dn),fn:uy},{name:"goto_from_overview",key:Ye(c,dn),fn:()=>{Fa(In.value),dn.value=!1}}];const f=new Set(m.map(g=>g.name));if(m.filter(g=>g.name&&f.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return m}const Lm=Ye(Mn($0),Mn(z0),x0);function dy(n,t,a=!1){typeof n=="string"&&(n=bm[n]);const o=Ye(n,Lm);let i=0,l;const r=()=>{if(clearTimeout(l),!o.value){i=0;return}a&&(l=setTimeout(r,Math.max(1e3-i*250,150)),i++),t()};return ke(o,r,{flush:"sync"})}function my(n,t){return l1(n,a=>{Lm.value&&(a.repeat||t())})}function fy(){const n=py();new Map(n.map(a=>[a.key,a])).forEach(a=>{a.fn&&dy(a.key,a.fn,a.autoRepeat)}),my("f",()=>ym.toggle())}const hy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gy=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),_y=[gy];function vy(n,t){return b(),oe("svg",hy,_y)}const ky={name:"carbon-close",render:vy};function Cr(n,t=""){var i,l;const a=["slidev-page",t],o=(l=(i=n==null?void 0:n.meta)==null?void 0:i.slide)==null?void 0:l.no;return o!=null&&a.push(`slidev-page-${o}`),a.filter(Boolean).join(" ")}const by=Ae({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const t=n;z(C);const a=Z(),o=P1(a),i=N(()=>t.width?t.width:o.width.value),l=N(()=>t.width?t.width/St:o.height.value);t.width&&ba(()=>{a.value&&(a.value.style.width=`${i.value}px`,a.value.style.height=`${l.value}px`)});const r=N(()=>i.value/l.value),c=N(()=>t.scale&&!Na.value?t.scale:r.value<St?i.value/At:l.value*St/At),u=N(()=>({height:`${wr}px`,width:`${At}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=N(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return Cn(Bd,c),(d,m)=>(b(),oe("div",{id:"slide-container",ref_key:"root",ref:a,class:Ve(p.value)},[e("div",{id:"slide-content",style:tn(u.value)},[qn(d.$slots,"default")],4),qn(d.$slots,"controls")],2))}});const E=(n,t)=>{const a=n.__vccOpts||n;for(const[o,i]of t)a[o]=i;return a},Cm=E(by,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Er=Ae({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:t}){const a=Je(n,"clicks",t),o=Je(n,"clicksElements",t),i=Je(n,"clicksDisabled",t),l=Je(n,"clicksOrderMap",t);o.value.length=0,Cn(rk,n.route),Cn(ck,n.context),Cn(ms,a),Cn(fs,i),Cn(na,o),Cn(vl,l)},render(){var n,t;return this.$props.is?xn(this.$props.is):(t=(n=this.$slots)==null?void 0:n.default)==null?void 0:t.call(n)}}),yy=["innerHTML"],wy=Ae({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return z(C),(t,a)=>O(Wo)[t.page]?(b(),oe("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:O(Wo)[t.page]},null,8,yy)):we("v-if",!0)}}),Em=E(wy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),xy=Object.freeze(Object.defineProperty({__proto__:null,default:Em},Symbol.toStringTag,{value:"Module"})),Ty={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},$y=["onClick"],Ri=4*16*2,Eu=2*16,zy=Ae({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:t}){const a=n;z(C);const o=Je(a,"modelValue",t);function i(){o.value=!1}function l(m){Fa(m),i()}function r(m){return m===In.value}const c=Ll.smaller("xs"),u=Ll.smaller("sm"),p=N(()=>c.value?ha.width.value-Ri:u.value?(ha.width.value-Ri-Eu)/2:300),d=N(()=>Math.floor((ha.width.value-Ri)/(p.value+Eu)));return ba(()=>{In.value=Ue.value,Lr.value=d.value}),(m,f)=>{const h=ky;return b(),oe(Ie,null,[td(e("div",Ty,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tn(`grid-template-columns: repeat(auto-fit,minmax(${p.value}px,1fr))`)},[(b(!0),oe(Ie,null,qa(O(Qe).slice(0,-1),(g,w)=>(b(),oe("div",{key:g.path,class:"relative"},[e("div",{class:Ve(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(w+1),"border-gray-400":!r(w+1)}]),style:tn(O(xr)),onClick:x=>l(+g.path)},[(b(),M(Cm,{key:g.path,width:p.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:v(()=>[g!=null&&g.component?(b(),M(O(Er),{key:0,is:g.component,"clicks-disabled":!0,class:Ve(O(Cr)(g)),route:g,context:"overview"},null,8,["is","class","route"])):we("v-if",!0),S(Em,{page:+g.path},null,8,["page"])]),_:2},1032,["width"]))],14,$y),e("div",{class:"absolute top-0 opacity-50",style:tn(`left: ${p.value+5}px`)},bn(w+1),5)]))),128))],4)],512),[[Ad,O(o)]]),O(o)?(b(),oe("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:i},[S(h)])):we("v-if",!0)],64)}}});const My=E(zy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Ly="/3/html/assets/logo-b72bde5d.png",Cy={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Ey=Ae({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:t}){const a=n;z(C);const o=Je(a,"modelValue",t);function i(){o.value=!1}return(l,r)=>(b(),M(sd,null,[O(o)?(b(),oe("div",Cy,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>i())}),e("div",{class:Ve(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[qn(l.$slots,"default")],2)])):we("v-if",!0)],1024))}}),Iy=E(Ey,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),Sy={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Ay=["innerHTML"],Oy=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Ly,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),s("dev ")])])],-1),Hy=Ae({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:t}){const a=n;z(C);const o=Je(a,"modelValue",t),i=N(()=>typeof Ee.info=="string");return(l,r)=>(b(),M(Iy,{modelValue:O(o),"onUpdate:modelValue":r[0]||(r[0]=c=>Se(o)?o.value=c:null),class:"px-6 py-4"},{default:v(()=>[e("div",Sy,[i.value?(b(),oe("div",{key:0,class:"mb-4",innerHTML:O(Ee).info},null,8,Ay)):we("v-if",!0),Oy])]),_:1},8,["modelValue"]))}});const Py=E(Hy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function vt(n){return Array.isArray?Array.isArray(n):Am(n)==="[object Array]"}const Ry=1/0;function Ny(n){if(typeof n=="string")return n;let t=n+"";return t=="0"&&1/n==-Ry?"-0":t}function Fy(n){return n==null?"":Ny(n)}function at(n){return typeof n=="string"}function Im(n){return typeof n=="number"}function qy(n){return n===!0||n===!1||Wy(n)&&Am(n)=="[object Boolean]"}function Sm(n){return typeof n=="object"}function Wy(n){return Sm(n)&&n!==null}function En(n){return n!=null}function Ni(n){return!n.trim().length}function Am(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const Dy="Incorrect 'index' type",jy=n=>`Invalid value for key ${n}`,By=n=>`Pattern length exceeds max of ${n}.`,Vy=n=>`Missing ${n} property in key`,Uy=n=>`Property 'weight' in key '${n}' must be a positive integer`,Iu=Object.prototype.hasOwnProperty;class Ky{constructor(t){this._keys=[],this._keyMap={};let a=0;t.forEach(o=>{let i=Om(o);a+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,a+=i.weight}),this._keys.forEach(o=>{o.weight/=a})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Om(n){let t=null,a=null,o=null,i=1,l=null;if(at(n)||vt(n))o=n,t=Su(n),a=Al(n);else{if(!Iu.call(n,"name"))throw new Error(Vy("name"));const r=n.name;if(o=r,Iu.call(n,"weight")&&(i=n.weight,i<=0))throw new Error(Uy(r));t=Su(r),a=Al(r),l=n.getFn}return{path:t,id:a,weight:i,src:o,getFn:l}}function Su(n){return vt(n)?n:n.split(".")}function Al(n){return vt(n)?n.join("."):n}function Gy(n,t){let a=[],o=!1;const i=(l,r,c)=>{if(En(l))if(!r[c])a.push(l);else{let u=r[c];const p=l[u];if(!En(p))return;if(c===r.length-1&&(at(p)||Im(p)||qy(p)))a.push(Fy(p));else if(vt(p)){o=!0;for(let d=0,m=p.length;d<m;d+=1)i(p[d],r,c+1)}else r.length&&i(p,r,c+1)}};return i(n,at(t)?t.split("."):t,0),o?a:a[0]}const Qy={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Yy={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,t)=>n.score===t.score?n.idx<t.idx?-1:1:n.score<t.score?-1:1},Jy={location:0,threshold:.6,distance:100},Zy={useExtendedSearch:!1,getFn:Gy,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var he={...Yy,...Qy,...Jy,...Zy};const Xy=/[^ ]+/g;function ew(n=1,t=3){const a=new Map,o=Math.pow(10,t);return{get(i){const l=i.match(Xy).length;if(a.has(l))return a.get(l);const r=1/Math.pow(l,.5*n),c=parseFloat(Math.round(r*o)/o);return a.set(l,c),c},clear(){a.clear()}}}class Ir{constructor({getFn:t=he.getFn,fieldNormWeight:a=he.fieldNormWeight}={}){this.norm=ew(a,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((a,o)=>{this._keysMap[a.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,at(this.docs[0])?this.docs.forEach((t,a)=>{this._addString(t,a)}):this.docs.forEach((t,a)=>{this._addObject(t,a)}),this.norm.clear())}add(t){const a=this.size();at(t)?this._addString(t,a):this._addObject(t,a)}removeAt(t){this.records.splice(t,1);for(let a=t,o=this.size();a<o;a+=1)this.records[a].i-=1}getValueForItemAtKeyId(t,a){return t[this._keysMap[a]]}size(){return this.records.length}_addString(t,a){if(!En(t)||Ni(t))return;let o={v:t,i:a,n:this.norm.get(t)};this.records.push(o)}_addObject(t,a){let o={i:a,$:{}};this.keys.forEach((i,l)=>{let r=i.getFn?i.getFn(t):this.getFn(t,i.path);if(En(r)){if(vt(r)){let c=[];const u=[{nestedArrIndex:-1,value:r}];for(;u.length;){const{nestedArrIndex:p,value:d}=u.pop();if(En(d))if(at(d)&&!Ni(d)){let m={v:d,i:p,n:this.norm.get(d)};c.push(m)}else vt(d)&&d.forEach((m,f)=>{u.push({nestedArrIndex:f,value:m})})}o.$[l]=c}else if(at(r)&&!Ni(r)){let c={v:r,n:this.norm.get(r)};o.$[l]=c}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Hm(n,t,{getFn:a=he.getFn,fieldNormWeight:o=he.fieldNormWeight}={}){const i=new Ir({getFn:a,fieldNormWeight:o});return i.setKeys(n.map(Om)),i.setSources(t),i.create(),i}function nw(n,{getFn:t=he.getFn,fieldNormWeight:a=he.fieldNormWeight}={}){const{keys:o,records:i}=n,l=new Ir({getFn:t,fieldNormWeight:a});return l.setKeys(o),l.setIndexRecords(i),l}function po(n,{errors:t=0,currentLocation:a=0,expectedLocation:o=0,distance:i=he.distance,ignoreLocation:l=he.ignoreLocation}={}){const r=t/n.length;if(l)return r;const c=Math.abs(o-a);return i?r+c/i:c?1:r}function tw(n=[],t=he.minMatchCharLength){let a=[],o=-1,i=-1,l=0;for(let r=n.length;l<r;l+=1){let c=n[l];c&&o===-1?o=l:!c&&o!==-1&&(i=l-1,i-o+1>=t&&a.push([o,i]),o=-1)}return n[l-1]&&l-o>=t&&a.push([o,l-1]),a}const aa=32;function aw(n,t,a,{location:o=he.location,distance:i=he.distance,threshold:l=he.threshold,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,includeMatches:u=he.includeMatches,ignoreLocation:p=he.ignoreLocation}={}){if(t.length>aa)throw new Error(By(aa));const d=t.length,m=n.length,f=Math.max(0,Math.min(o,m));let h=l,g=f;const w=c>1||u,x=w?Array(m):[];let T;for(;(T=n.indexOf(t,g))>-1;){let B=po(t,{currentLocation:T,expectedLocation:f,distance:i,ignoreLocation:p});if(h=Math.min(B,h),g=T+d,w){let R=0;for(;R<d;)x[T+R]=1,R+=1}}g=-1;let $=[],k=1,A=d+m;const L=1<<d-1;for(let B=0;B<d;B+=1){let R=0,K=A;for(;R<K;)po(t,{errors:B,currentLocation:f+K,expectedLocation:f,distance:i,ignoreLocation:p})<=h?R=K:A=K,K=Math.floor((A-R)/2+R);A=K;let ie=Math.max(1,f-K+1),me=r?m:Math.min(f+K,m)+d,X=Array(me+2);X[me+1]=(1<<B)-1;for(let be=me;be>=ie;be-=1){let xe=be-1,Re=a[n.charAt(xe)];if(w&&(x[xe]=+!!Re),X[be]=(X[be+1]<<1|1)&Re,B&&(X[be]|=($[be+1]|$[be])<<1|1|$[be+1]),X[be]&L&&(k=po(t,{errors:B,currentLocation:xe,expectedLocation:f,distance:i,ignoreLocation:p}),k<=h)){if(h=k,g=xe,g<=f)break;ie=Math.max(1,2*f-g)}}if(po(t,{errors:B+1,currentLocation:f,expectedLocation:f,distance:i,ignoreLocation:p})>h)break;$=X}const H={isMatch:g>=0,score:Math.max(.001,k)};if(w){const B=tw(x,c);B.length?u&&(H.indices=B):H.isMatch=!1}return H}function sw(n){let t={};for(let a=0,o=n.length;a<o;a+=1){const i=n.charAt(a);t[i]=(t[i]||0)|1<<o-a-1}return t}class Pm{constructor(t,{location:a=he.location,threshold:o=he.threshold,distance:i=he.distance,includeMatches:l=he.includeMatches,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:u=he.isCaseSensitive,ignoreLocation:p=he.ignoreLocation}={}){if(this.options={location:a,threshold:o,distance:i,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p},this.pattern=u?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(f,h)=>{this.chunks.push({pattern:f,alphabet:sw(f),startIndex:h})},m=this.pattern.length;if(m>aa){let f=0;const h=m%aa,g=m-h;for(;f<g;)d(this.pattern.substr(f,aa),f),f+=aa;if(h){const w=m-aa;d(this.pattern.substr(w),w)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:a,includeMatches:o}=this.options;if(a||(t=t.toLowerCase()),this.pattern===t){let g={isMatch:!0,score:0};return o&&(g.indices=[[0,t.length-1]]),g}const{location:i,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,ignoreLocation:p}=this.options;let d=[],m=0,f=!1;this.chunks.forEach(({pattern:g,alphabet:w,startIndex:x})=>{const{isMatch:T,score:$,indices:k}=aw(t,g,w,{location:i+x,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,includeMatches:o,ignoreLocation:p});T&&(f=!0),m+=$,T&&k&&(d=[...d,...k])});let h={isMatch:f,score:f?m/this.chunks.length:1};return f&&o&&(h.indices=d),h}}class jt{constructor(t){this.pattern=t}static isMultiMatch(t){return Au(t,this.multiRegex)}static isSingleMatch(t){return Au(t,this.singleRegex)}search(){}}function Au(n,t){const a=n.match(t);return a?a[1]:null}class ow extends jt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const a=t===this.pattern;return{isMatch:a,score:a?0:1,indices:[0,this.pattern.length-1]}}}class iw extends jt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class lw extends jt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const a=t.startsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,this.pattern.length-1]}}}class rw extends jt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const a=!t.startsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,t.length-1]}}}class cw extends jt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const a=t.endsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class uw extends jt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const a=!t.endsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,t.length-1]}}}class Rm extends jt{constructor(t,{location:a=he.location,threshold:o=he.threshold,distance:i=he.distance,includeMatches:l=he.includeMatches,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:u=he.isCaseSensitive,ignoreLocation:p=he.ignoreLocation}={}){super(t),this._bitapSearch=new Pm(t,{location:a,threshold:o,distance:i,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Nm extends jt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let a=0,o;const i=[],l=this.pattern.length;for(;(o=t.indexOf(this.pattern,a))>-1;)a=o+l,i.push([o,a-1]);const r=!!i.length;return{isMatch:r,score:r?0:1,indices:i}}}const Ol=[ow,Nm,lw,rw,uw,cw,iw,Rm],Ou=Ol.length,pw=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,dw="|";function mw(n,t={}){return n.split(dw).map(a=>{let o=a.trim().split(pw).filter(l=>l&&!!l.trim()),i=[];for(let l=0,r=o.length;l<r;l+=1){const c=o[l];let u=!1,p=-1;for(;!u&&++p<Ou;){const d=Ol[p];let m=d.isMultiMatch(c);m&&(i.push(new d(m,t)),u=!0)}if(!u)for(p=-1;++p<Ou;){const d=Ol[p];let m=d.isSingleMatch(c);if(m){i.push(new d(m,t));break}}}return i})}const fw=new Set([Rm.type,Nm.type]);class hw{constructor(t,{isCaseSensitive:a=he.isCaseSensitive,includeMatches:o=he.includeMatches,minMatchCharLength:i=he.minMatchCharLength,ignoreLocation:l=he.ignoreLocation,findAllMatches:r=he.findAllMatches,location:c=he.location,threshold:u=he.threshold,distance:p=he.distance}={}){this.query=null,this.options={isCaseSensitive:a,includeMatches:o,minMatchCharLength:i,findAllMatches:r,ignoreLocation:l,location:c,threshold:u,distance:p},this.pattern=a?t:t.toLowerCase(),this.query=mw(this.pattern,this.options)}static condition(t,a){return a.useExtendedSearch}searchIn(t){const a=this.query;if(!a)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let l=0,r=[],c=0;for(let u=0,p=a.length;u<p;u+=1){const d=a[u];r.length=0,l=0;for(let m=0,f=d.length;m<f;m+=1){const h=d[m],{isMatch:g,indices:w,score:x}=h.search(t);if(g){if(l+=1,c+=x,o){const T=h.constructor.type;fw.has(T)?r=[...r,...w]:r.push(w)}}else{c=0,l=0,r.length=0;break}}if(l){let m={isMatch:!0,score:c/l};return o&&(m.indices=r),m}}return{isMatch:!1,score:1}}}const Hl=[];function gw(...n){Hl.push(...n)}function Pl(n,t){for(let a=0,o=Hl.length;a<o;a+=1){let i=Hl[a];if(i.condition(n,t))return new i(n,t)}return new Pm(n,t)}const Vo={AND:"$and",OR:"$or"},Rl={PATH:"$path",PATTERN:"$val"},Nl=n=>!!(n[Vo.AND]||n[Vo.OR]),_w=n=>!!n[Rl.PATH],vw=n=>!vt(n)&&Sm(n)&&!Nl(n),Hu=n=>({[Vo.AND]:Object.keys(n).map(t=>({[t]:n[t]}))});function Fm(n,t,{auto:a=!0}={}){const o=i=>{let l=Object.keys(i);const r=_w(i);if(!r&&l.length>1&&!Nl(i))return o(Hu(i));if(vw(i)){const u=r?i[Rl.PATH]:l[0],p=r?i[Rl.PATTERN]:i[u];if(!at(p))throw new Error(jy(u));const d={keyId:Al(u),pattern:p};return a&&(d.searcher=Pl(p,t)),d}let c={children:[],operator:l[0]};return l.forEach(u=>{const p=i[u];vt(p)&&p.forEach(d=>{c.children.push(o(d))})}),c};return Nl(n)||(n=Hu(n)),o(n)}function kw(n,{ignoreFieldNorm:t=he.ignoreFieldNorm}){n.forEach(a=>{let o=1;a.matches.forEach(({key:i,norm:l,score:r})=>{const c=i?i.weight:null;o*=Math.pow(r===0&&c?Number.EPSILON:r,(c||1)*(t?1:l))}),a.score=o})}function bw(n,t){const a=n.matches;t.matches=[],En(a)&&a.forEach(o=>{if(!En(o.indices)||!o.indices.length)return;const{indices:i,value:l}=o;let r={indices:i,value:l};o.key&&(r.key=o.key.src),o.idx>-1&&(r.refIndex=o.idx),t.matches.push(r)})}function yw(n,t){t.score=n.score}function ww(n,t,{includeMatches:a=he.includeMatches,includeScore:o=he.includeScore}={}){const i=[];return a&&i.push(bw),o&&i.push(yw),n.map(l=>{const{idx:r}=l,c={item:t[r],refIndex:r};return i.length&&i.forEach(u=>{u(l,c)}),c})}class Da{constructor(t,a={},o){this.options={...he,...a},this.options.useExtendedSearch,this._keyStore=new Ky(this.options.keys),this.setCollection(t,o)}setCollection(t,a){if(this._docs=t,a&&!(a instanceof Ir))throw new Error(Dy);this._myIndex=a||Hm(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){En(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const a=[];for(let o=0,i=this._docs.length;o<i;o+=1){const l=this._docs[o];t(l,o)&&(this.removeAt(o),o-=1,i-=1,a.push(l))}return a}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:a=-1}={}){const{includeMatches:o,includeScore:i,shouldSort:l,sortFn:r,ignoreFieldNorm:c}=this.options;let u=at(t)?at(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return kw(u,{ignoreFieldNorm:c}),l&&u.sort(r),Im(a)&&a>-1&&(u=u.slice(0,a)),ww(u,this._docs,{includeMatches:o,includeScore:i})}_searchStringList(t){const a=Pl(t,this.options),{records:o}=this._myIndex,i=[];return o.forEach(({v:l,i:r,n:c})=>{if(!En(l))return;const{isMatch:u,score:p,indices:d}=a.searchIn(l);u&&i.push({item:l,idx:r,matches:[{score:p,value:l,norm:c,indices:d}]})}),i}_searchLogical(t){const a=Fm(t,this.options),o=(c,u,p)=>{if(!c.children){const{keyId:m,searcher:f}=c,h=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(u,m),searcher:f});return h&&h.length?[{idx:p,item:u,matches:h}]:[]}const d=[];for(let m=0,f=c.children.length;m<f;m+=1){const h=c.children[m],g=o(h,u,p);if(g.length)d.push(...g);else if(c.operator===Vo.AND)return[]}return d},i=this._myIndex.records,l={},r=[];return i.forEach(({$:c,i:u})=>{if(En(c)){let p=o(a,c,u);p.length&&(l[u]||(l[u]={idx:u,item:c,matches:[]},r.push(l[u])),p.forEach(({matches:d})=>{l[u].matches.push(...d)}))}}),r}_searchObjectList(t){const a=Pl(t,this.options),{keys:o,records:i}=this._myIndex,l=[];return i.forEach(({$:r,i:c})=>{if(!En(r))return;let u=[];o.forEach((p,d)=>{u.push(...this._findMatches({key:p,value:r[d],searcher:a}))}),u.length&&l.push({idx:c,item:r,matches:u})}),l}_findMatches({key:t,value:a,searcher:o}){if(!En(a))return[];let i=[];if(vt(a))a.forEach(({v:l,i:r,n:c})=>{if(!En(l))return;const{isMatch:u,score:p,indices:d}=o.searchIn(l);u&&i.push({score:p,key:t,value:l,idx:r,norm:c,indices:d})});else{const{v:l,n:r}=a,{isMatch:c,score:u,indices:p}=o.searchIn(l);c&&i.push({score:u,key:t,value:l,norm:r,indices:p})}return i}}Da.version="6.6.2";Da.createIndex=Hm;Da.parseIndex=nw;Da.config=he;Da.parseQuery=Fm;gw(hw);const xw={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Tw=["value","disabled","onKeydown"],$w=["border","onClick"],zw={"w-4":"","text-right":"",op50:"","text-sm":""},Mw=Ae({__name:"Goto",setup(n){z(C);const t=Z(),a=Z(),o=Z(),i=Z(),l=Z(""),r=Z(0);function c(k){return k!=null}const u=N(()=>new Da(Qe.map(k=>{var A;return(A=k.meta)==null?void 0:A.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),p=N(()=>l.value.startsWith("/")?l.value.substring(1):l.value),d=N(()=>u.value.search(p.value).map(k=>k.item)),m=N(()=>!!d.value.length);function f(){if(m.value){const k=d.value.at(r.value||0);k&&Fa(k.no)}h()}function h(){l.value="",Ca.value=!1}function g(k){k.preventDefault(),r.value++,r.value>=d.value.length&&(r.value=0),x()}function w(k){k.preventDefault(),r.value--,r.value<=-2&&(r.value=d.value.length-1),x()}function x(){var A;const k=(A=i.value)==null?void 0:A[r.value];k&&o.value&&(k.offsetTop+k.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:k.offsetTop+k.offsetHeight-o.value.offsetHeight+1}):k.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:k.offsetTop}))}function T(k){r.value=0,l.value=k.target.value}function $(k){Fa(k),h()}return ke(Ca,async k=>{var A;k?(l.value="",r.value=0,setTimeout(()=>{var L;return(L=a.value)==null?void 0:L.focus()},0)):(A=a.value)==null||A.blur()}),ke(Ht,()=>{var k;(k=t.value)!=null&&k.contains(Ht.value)||h()}),(k,A)=>(b(),oe("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:Ve(["fixed right-5 transition-all",O(Ca)?"top-5":"-top-20"]),"w-90":""},[e("div",xw,[e("input",{ref_key:"input",ref:a,value:l.value,type:"text",disabled:!O(Ca),class:Ve(["outline-none bg-transparent",{"text-red-400":!m.value&&l.value}]),placeholder:"Goto...",onKeydown:[so(f,["enter"]),so(h,["escape"]),so(g,["down"]),so(w,["up"])],onInput:T},null,42,Tw)]),d.value.length>0?(b(),oe("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(b(!0),oe(Ie,null,qa(d.value,(L,H)=>(b(),oe("li",{ref_for:!0,ref_key:"items",ref:i,key:L.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:H===0?"":"t main",class:Ve(r.value===H?"bg-active op100":"op80"),onClick:cv(B=>$(L.no),["stop"])},[e("div",zw,bn(L.no),1),s(" "+bn(L.title),1)],10,$w))),128))],512)):we("v-if",!0)],2))}});const Lw=E(Mw,[["__scopeId","data-v-f5ee02a7"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),Cw=Ae({__name:"Controls",setup(n){z(C);const t=it(),a=it();return(o,i)=>(b(),oe(Ie,null,[S(My,{modelValue:O(dn),"onUpdate:modelValue":i[0]||(i[0]=l=>Se(dn)?dn.value=l:null)},null,8,["modelValue"]),S(Lw),t.value?(b(),M(O(t),{key:0})):we("v-if",!0),a.value?(b(),M(O(a),{key:1,modelValue:O(Oi),"onUpdate:modelValue":i[1]||(i[1]=l=>Se(Oi)?Oi.value=l:null)},null,8,["modelValue"])):we("v-if",!0),O(Ee).info?(b(),M(Py,{key:2,modelValue:O(_s),"onUpdate:modelValue":i[2]||(i[2]=l=>Se(_s)?_s.value=l:null)},null,8,["modelValue"])):we("v-if",!0)],64))}}),Ew=E(Cw,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),Iw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sw=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Aw=[Sw];function Ow(n,t){return b(),oe("svg",Iw,Aw)}const Hw={name:"carbon-settings-adjust",render:Ow},Pw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rw=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Nw=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Fw=[Rw,Nw];function qw(n,t){return b(),oe("svg",Pw,Fw)}const Ww={name:"carbon-information",render:qw},Dw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jw=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Bw=[jw];function Vw(n,t){return b(),oe("svg",Dw,Bw)}const Uw={name:"carbon-download",render:Vw},Kw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Gw=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Qw=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Yw=[Gw,Qw];function Jw(n,t){return b(),oe("svg",Kw,Yw)}const Zw={name:"carbon-user-speaker",render:Jw},Xw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ex=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),nx=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),tx=[ex,nx];function ax(n,t){return b(),oe("svg",Xw,tx)}const sx={name:"carbon-presentation-file",render:ax},ox={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ix=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),lx=[ix];function rx(n,t){return b(),oe("svg",ox,lx)}const cx={name:"carbon-pen",render:rx},ux={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},px=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),dx=[px];function mx(n,t){return b(),oe("svg",ux,dx)}const fx={name:"ph-cursor-duotone",render:mx},hx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},gx=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),_x=[gx];function vx(n,t){return b(),oe("svg",hx,_x)}const qm={name:"ph-cursor-fill",render:vx},kx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bx=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),yx=[bx];function wx(n,t){return b(),oe("svg",kx,yx)}const xx={name:"carbon-sun",render:wx},Tx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$x=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),zx=[$x];function Mx(n,t){return b(),oe("svg",Tx,zx)}const Lx={name:"carbon-moon",render:Mx},Cx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ex=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Ix=[Ex];function Sx(n,t){return b(),oe("svg",Cx,Ix)}const Ax={name:"carbon-apps",render:Sx},Ox={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hx=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Px=[Hx];function Rx(n,t){return b(),oe("svg",Ox,Px)}const Wm={name:"carbon-arrow-right",render:Rx},Nx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Fx=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),qx=[Fx];function Wx(n,t){return b(),oe("svg",Nx,qx)}const Dx={name:"carbon-arrow-left",render:Wx},jx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bx=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Vx=[Bx];function Ux(n,t){return b(),oe("svg",jx,Vx)}const Kx={name:"carbon-maximize",render:Ux},Gx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qx=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Yx=[Qx];function Jx(n,t){return b(),oe("svg",Gx,Yx)}const Zx={name:"carbon-minimize",render:Jx},Xx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},eT=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),nT=[eT];function tT(n,t){return b(),oe("svg",Xx,nT)}const aT={name:"carbon-checkmark",render:tT},sT={class:"select-list"},oT={class:"title"},iT={class:"items"},lT=["onClick"],rT=Ae({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:t}){const a=n;z(C);const o=Je(a,"modelValue",t,{passive:!0});return(i,l)=>{const r=aT;return b(),oe("div",sT,[e("div",oT,bn(n.title),1),e("div",iT,[(b(!0),oe(Ie,null,qa(n.items,c=>(b(),oe("div",{key:c.value,class:Ve(["item",{active:O(o)===c.value}]),onClick:()=>{var u;o.value=c.value,(u=c.onClick)==null||u.call(c)}},[S(r,{class:Ve(["text-green-500",{"opacity-0":O(o)!==c.value}])},null,8,["class"]),s(" "+bn(c.display||c.value),1)],10,lT))),128))])])}}});const cT=E(rT,[["__scopeId","data-v-3f89fa11"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),uT={class:"text-sm"},pT=Ae({__name:"Settings",setup(n){z(C);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(a,o)=>(b(),oe("div",uT,[S(cT,{modelValue:O(bo),"onUpdate:modelValue":o[0]||(o[0]=i=>Se(bo)?bo.value=i:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),dT=E(pT,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),mT={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},fT=Ae({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:t}){const a=n;z(C);const o=Je(a,"modelValue",t,{passive:!0}),i=Z();return o1(i,()=>{o.value=!1}),(l,r)=>(b(),oe("div",{ref_key:"el",ref:i,class:"flex relative"},[e("button",{class:Ve({disabled:n.disabled}),onClick:r[0]||(r[0]=c=>o.value=!O(o))},[qn(l.$slots,"button",{class:Ve({disabled:n.disabled})})],2),(b(),M(sd,null,[O(o)?(b(),oe("div",mT,[qn(l.$slots,"menu")])):we("v-if",!0)],1024))],512))}}),hT=E(fT,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),gT={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},_T={__name:"VerticalDivider",setup(n){return z(C),(t,a)=>(b(),oe("div",gT))}},mo=E(_T,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),vT={render(){return[]}},kT={class:"slidev-icon-btn"},bT={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},yT={class:"my-auto"},wT={class:"opacity-50"},xT=Ae({__name:"NavControls",props:{persist:{default:!1}},setup(n){const t=n;z(C);const a=Ll.smaller("md"),{isFullscreen:o,toggle:i}=ym,l=N(()=>ql.value?`?password=${ql.value}`:""),r=N(()=>`/presenter/${Ue.value}${l.value}`),c=N(()=>`/${Ue.value}${l.value}`),u=Z();function p(){u.value&&Ht.value&&u.value.contains(Ht.value)&&Ht.value.blur()}const d=N(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=it(),f=it();return Ot(()=>import("./DrawingControls-1bd94a7e.js"),[]).then(h=>f.value=h.default),(h,g)=>{const w=Zx,x=Kx,T=Dx,$=Wm,k=Ax,A=Lx,L=xx,H=qm,B=fx,R=cx,K=sx,ie=Ha("RouterLink"),me=Zw,X=Uw,ve=Ww,be=Hw;return b(),oe("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[e("div",{class:Ve(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:p},[O(mt)?we("v-if",!0):(b(),oe("button",{key:0,class:"slidev-icon-btn",onClick:g[0]||(g[0]=(...xe)=>O(i)&&O(i)(...xe))},[O(o)?(b(),M(w,{key:0})):(b(),M(x,{key:1}))])),e("button",{class:Ve(["slidev-icon-btn",{disabled:!O(tF)}]),onClick:g[1]||(g[1]=(...xe)=>O(Rt)&&O(Rt)(...xe))},[S(T)],2),e("button",{class:Ve(["slidev-icon-btn",{disabled:!O(nF)}]),title:"Next",onClick:g[2]||(g[2]=(...xe)=>O(Pt)&&O(Pt)(...xe))},[S($)],2),O(mt)?we("v-if",!0):(b(),oe("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=xe=>O(wm)())},[S(k)])),O(Sl)?we("v-if",!0):(b(),oe("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=xe=>O(Mm)())},[O(Mr)?(b(),M(A,{key:0})):(b(),M(L,{key:1}))])),S(mo),O(mt)?we("v-if",!0):(b(),oe(Ie,{key:3},[!O(kn)&&!O(a)&&m.value?(b(),oe(Ie,{key:0},[S(O(m)),S(mo)],64)):we("v-if",!0),O(kn)?(b(),oe("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=xe=>Hi.value=!O(Hi))},[O(Hi)?(b(),M(H,{key:0})):(b(),M(B,{key:1,class:"opacity-50"}))])):we("v-if",!0)],64)),(!O(Ee).drawings.presenterOnly||O(kn))&&!O(mt)?(b(),oe(Ie,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=xe=>tt.value=!O(tt))},[S(R),O(tt)?(b(),oe("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tn({background:O(ia).color})},null,4)):we("v-if",!0)]),S(mo)],64)):we("v-if",!0),O(mt)?we("v-if",!0):(b(),oe(Ie,{key:5},[O(kn)?(b(),M(ie,{key:0,to:c.value,class:"slidev-icon-btn",title:"Play Mode"},{default:v(()=>[S(K)]),_:1},8,["to"])):we("v-if",!0),O(YN)?(b(),M(ie,{key:1,to:r.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:v(()=>[S(me)]),_:1},8,["to"])):we("v-if",!0),we("v-if",!0)],64)),(b(),oe(Ie,{key:6},[O(Ee).download?(b(),oe("button",{key:0,class:"slidev-icon-btn",onClick:g[8]||(g[8]=(...xe)=>O(Wl)&&O(Wl)(...xe))},[S(X)])):we("v-if",!0)],64)),!O(kn)&&O(Ee).info&&!O(mt)?(b(),oe("button",{key:7,class:"slidev-icon-btn",onClick:g[9]||(g[9]=xe=>_s.value=!O(_s))},[S(ve)])):we("v-if",!0),!O(kn)&&!O(mt)?(b(),M(hT,{key:8},{button:v(()=>[e("button",kT,[S(be)])]),menu:v(()=>[S(dT)]),_:1})):we("v-if",!0),O(mt)?we("v-if",!0):(b(),M(mo,{key:9})),e("div",bT,[e("div",yT,[s(bn(O(Ue))+" ",1),e("span",wT,"/ "+bn(O(JN)),1)])]),S(O(vT))],34)],512)}}}),TT=E(xT,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),$T={style:{"font-size":"0.55rem","line-height":"1rem"}},zT=e("div",{class:"absolute bottom-0 left-1"},[e("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),MT={class:"absolute bottom-1 left-89 text-gray-700"},LT={key:0,class:"absolute bottom-1 right-1 text-gray-700"},CT={__name:"global-top",setup(n){const t=z(C);return(a,o)=>(b(),oe("footer",$T,[zT,e("div",MT," ITT E.Agnelli - Informatica - "+bn(O(t).configs.materia)+" - prof. Antonio Mancuso - a.s. "+bn(O(t).configs.as)+" - v "+bn(O(t).configs.version||0),1),O(t).nav.currentPage!==1&&O(t).nav.currentPage!=O(t).nav.total+1?(b(),oe("div",LT,bn(O(t).nav.currentPage-1)+" / "+bn(O(t).nav.total-1),1)):we("v-if",!0)]))}},ET=E(CT,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),Dm={render(){return[xn(ET)]}},jm={render(){return[]}},IT={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ST=Ae({__name:"PresenterMouse",setup(n){return z(C),(t,a)=>{const o=qm;return O(Ei).cursor?(b(),oe("div",IT,[S(o,{class:"absolute",style:tn({left:`${O(Ei).cursor.x}%`,top:`${O(Ei).cursor.y}%`})},null,8,["style"])])):we("v-if",!0)}}}),AT=E(ST,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),OT=Ae({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){z(C),ke(mn,()=>{var o,i;(o=mn.value)!=null&&o.meta&&mn.value.meta.preload!==!1&&(mn.value.meta.__preloaded=!0),(i=Fi.value)!=null&&i.meta&&Fi.value.meta.preload!==!1&&(Fi.value.meta.__preloaded=!0)},{immediate:!0});const t=it();Ot(()=>import("./DrawingLayer-bfe2c22e.js"),[]).then(o=>t.value=o.default);const a=N(()=>Qe.filter(o=>{var i;return((i=o.meta)==null?void 0:i.__preloaded)||o===mn.value}));return(o,i)=>(b(),oe(Ie,null,[we(" Global Bottom "),S(O(jm)),we(" Slides "),S(tv,Y(O(oF),{id:"slideshow",tag:"div"}),{default:v(()=>[(b(!0),oe(Ie,null,qa(a.value,l=>{var r;return td((b(),M(O(Er),{key:l.path,is:l==null?void 0:l.component,clicks:l===O(mn)?O(Nn):0,"clicks-elements":((r=l.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:Ve(O(Cr)(l)),route:l,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ad,l===O(mn)]])}),128))]),_:1},16),we(" Global Top "),S(O(Dm)),t.value?(b(),M(O(t),{key:0})):we("v-if",!0),O(kn)?we("v-if",!0):(b(),M(AT,{key:1}))],64))}});const HT=E(OT,[["__scopeId","data-v-afb4231e"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),PT=Ae({__name:"PrintStyle",setup(n){z(C);function t(a,{slots:o}){if(o.default)return xn("style",o.default())}return(a,o)=>(b(),M(t,null,{default:v(()=>[s(" @page { size: "+bn(O(At))+"px "+bn(O(wr))+"px; margin: 0px; } ",1)]),_:1}))}}),Bm=E(PT,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),RT=Ae({__name:"Play",setup(n){z(C),fy();const t=Z();function a(l){var r;ku.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?Pt():Rt())}iF(t);const o=N(()=>T0.value||ku.value);it();const i=it();return Ot(()=>import("./DrawingControls-1bd94a7e.js"),[]).then(l=>i.value=l.default),(l,r)=>(b(),oe(Ie,null,[O(Na)?(b(),M(Bm,{key:0})):we("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:tn(O(xr))},[S(Cm,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:O(Na)?O(ha).width.value:void 0,scale:O(bo),onPointerdown:a},{default:v(()=>[S(HT,{context:"slide"})]),controls:v(()=>[e("div",{class:Ve(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",O(Ss)?"pointer-events-none":""]])},[S(TT,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!O(Ee).drawings.presenterOnly&&!O(mt)&&i.value?(b(),M(O(i),{key:0,class:"ml-0"})):we("v-if",!0)]),_:1},8,["style","width","scale"]),we("v-if",!0)],4),S(Ew)],64))}}),NT=E(RT,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Vm(n){return typeof n>"u"||n===null}function FT(n){return typeof n=="object"&&n!==null}function qT(n){return Array.isArray(n)?n:Vm(n)?[]:[n]}function WT(n,t){var a,o,i,l;if(t)for(l=Object.keys(t),a=0,o=l.length;a<o;a+=1)i=l[a],n[i]=t[i];return n}function DT(n,t){var a="",o;for(o=0;o<t;o+=1)a+=n;return a}function jT(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var BT=Vm,VT=FT,UT=qT,KT=DT,GT=jT,QT=WT,Sr={isNothing:BT,isObject:VT,toArray:UT,repeat:KT,isNegativeZero:GT,extend:QT};function Um(n,t){var a="",o=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(a+='in "'+n.mark.name+'" '),a+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!t&&n.mark.snippet&&(a+=`

`+n.mark.snippet),o+" "+a):o}function Os(n,t){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=t,this.message=Um(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Os.prototype=Object.create(Error.prototype);Os.prototype.constructor=Os;Os.prototype.toString=function(t){return this.name+": "+Um(this,t)};var sa=Os,YT=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],JT=["scalar","sequence","mapping"];function ZT(n){var t={};return n!==null&&Object.keys(n).forEach(function(a){n[a].forEach(function(o){t[String(o)]=a})}),t}function XT(n,t){if(t=t||{},Object.keys(t).forEach(function(a){if(YT.indexOf(a)===-1)throw new sa('Unknown option "'+a+'" is met in definition of "'+n+'" YAML type.')}),this.options=t,this.tag=n,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(a){return a},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=ZT(t.styleAliases||null),JT.indexOf(this.kind)===-1)throw new sa('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var rn=XT;function Pu(n,t){var a=[];return n[t].forEach(function(o){var i=a.length;a.forEach(function(l,r){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(i=r)}),a[i]=o}),a}function e$(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,a;function o(i){i.multi?(n.multi[i.kind].push(i),n.multi.fallback.push(i)):n[i.kind][i.tag]=n.fallback[i.tag]=i}for(t=0,a=arguments.length;t<a;t+=1)arguments[t].forEach(o);return n}function Fl(n){return this.extend(n)}Fl.prototype.extend=function(t){var a=[],o=[];if(t instanceof rn)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(a=a.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new sa("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");a.forEach(function(l){if(!(l instanceof rn))throw new sa("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new sa("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new sa("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof rn))throw new sa("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Fl.prototype);return i.implicit=(this.implicit||[]).concat(a),i.explicit=(this.explicit||[]).concat(o),i.compiledImplicit=Pu(i,"implicit"),i.compiledExplicit=Pu(i,"explicit"),i.compiledTypeMap=e$(i.compiledImplicit,i.compiledExplicit),i};var n$=Fl,t$=new rn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),a$=new rn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),s$=new rn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),o$=new n$({explicit:[t$,a$,s$]});function i$(n){if(n===null)return!0;var t=n.length;return t===1&&n==="~"||t===4&&(n==="null"||n==="Null"||n==="NULL")}function l$(){return null}function r$(n){return n===null}var c$=new rn("tag:yaml.org,2002:null",{kind:"scalar",resolve:i$,construct:l$,predicate:r$,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function u$(n){if(n===null)return!1;var t=n.length;return t===4&&(n==="true"||n==="True"||n==="TRUE")||t===5&&(n==="false"||n==="False"||n==="FALSE")}function p$(n){return n==="true"||n==="True"||n==="TRUE"}function d$(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var m$=new rn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:u$,construct:p$,predicate:d$,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function f$(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function h$(n){return 48<=n&&n<=55}function g$(n){return 48<=n&&n<=57}function _$(n){if(n===null)return!1;var t=n.length,a=0,o=!1,i;if(!t)return!1;if(i=n[a],(i==="-"||i==="+")&&(i=n[++a]),i==="0"){if(a+1===t)return!0;if(i=n[++a],i==="b"){for(a++;a<t;a++)if(i=n[a],i!=="_"){if(i!=="0"&&i!=="1")return!1;o=!0}return o&&i!=="_"}if(i==="x"){for(a++;a<t;a++)if(i=n[a],i!=="_"){if(!f$(n.charCodeAt(a)))return!1;o=!0}return o&&i!=="_"}if(i==="o"){for(a++;a<t;a++)if(i=n[a],i!=="_"){if(!h$(n.charCodeAt(a)))return!1;o=!0}return o&&i!=="_"}}if(i==="_")return!1;for(;a<t;a++)if(i=n[a],i!=="_"){if(!g$(n.charCodeAt(a)))return!1;o=!0}return!(!o||i==="_")}function v$(n){var t=n,a=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(a=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return a*parseInt(t.slice(2),2);if(t[1]==="x")return a*parseInt(t.slice(2),16);if(t[1]==="o")return a*parseInt(t.slice(2),8)}return a*parseInt(t,10)}function k$(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Sr.isNegativeZero(n)}var b$=new rn("tag:yaml.org,2002:int",{kind:"scalar",resolve:_$,construct:v$,predicate:k$,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),y$=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function w$(n){return!(n===null||!y$.test(n)||n[n.length-1]==="_")}function x$(n){var t,a;return t=n.replace(/_/g,"").toLowerCase(),a=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?a===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:a*parseFloat(t,10)}var T$=/^[-+]?[0-9]+e/;function $$(n,t){var a;if(isNaN(n))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Sr.isNegativeZero(n))return"-0.0";return a=n.toString(10),T$.test(a)?a.replace("e",".e"):a}function z$(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Sr.isNegativeZero(n))}var M$=new rn("tag:yaml.org,2002:float",{kind:"scalar",resolve:w$,construct:x$,predicate:z$,represent:$$,defaultStyle:"lowercase"}),L$=o$.extend({implicit:[c$,m$,b$,M$]}),C$=L$,Km=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Gm=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function E$(n){return n===null?!1:Km.exec(n)!==null||Gm.exec(n)!==null}function I$(n){var t,a,o,i,l,r,c,u=0,p=null,d,m,f;if(t=Km.exec(n),t===null&&(t=Gm.exec(n)),t===null)throw new Error("Date resolve error");if(a=+t[1],o=+t[2]-1,i=+t[3],!t[4])return new Date(Date.UTC(a,o,i));if(l=+t[4],r=+t[5],c=+t[6],t[7]){for(u=t[7].slice(0,3);u.length<3;)u+="0";u=+u}return t[9]&&(d=+t[10],m=+(t[11]||0),p=(d*60+m)*6e4,t[9]==="-"&&(p=-p)),f=new Date(Date.UTC(a,o,i,l,r,c,u)),p&&f.setTime(f.getTime()-p),f}function S$(n){return n.toISOString()}var A$=new rn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:E$,construct:I$,instanceOf:Date,represent:S$});function O$(n){return n==="<<"||n===null}var H$=new rn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:O$}),Ar=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function P$(n){if(n===null)return!1;var t,a,o=0,i=n.length,l=Ar;for(a=0;a<i;a++)if(t=l.indexOf(n.charAt(a)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function R$(n){var t,a,o=n.replace(/[\r\n=]/g,""),i=o.length,l=Ar,r=0,c=[];for(t=0;t<i;t++)t%4===0&&t&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(o.charAt(t));return a=i%4*6,a===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):a===18?(c.push(r>>10&255),c.push(r>>2&255)):a===12&&c.push(r>>4&255),new Uint8Array(c)}function N$(n){var t="",a=0,o,i,l=n.length,r=Ar;for(o=0;o<l;o++)o%3===0&&o&&(t+=r[a>>18&63],t+=r[a>>12&63],t+=r[a>>6&63],t+=r[a&63]),a=(a<<8)+n[o];return i=l%3,i===0?(t+=r[a>>18&63],t+=r[a>>12&63],t+=r[a>>6&63],t+=r[a&63]):i===2?(t+=r[a>>10&63],t+=r[a>>4&63],t+=r[a<<2&63],t+=r[64]):i===1&&(t+=r[a>>2&63],t+=r[a<<4&63],t+=r[64],t+=r[64]),t}function F$(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var q$=new rn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:P$,construct:R$,predicate:F$,represent:N$}),W$=Object.prototype.hasOwnProperty,D$=Object.prototype.toString;function j$(n){if(n===null)return!0;var t=[],a,o,i,l,r,c=n;for(a=0,o=c.length;a<o;a+=1){if(i=c[a],r=!1,D$.call(i)!=="[object Object]")return!1;for(l in i)if(W$.call(i,l))if(!r)r=!0;else return!1;if(!r)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function B$(n){return n!==null?n:[]}var V$=new rn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:j$,construct:B$}),U$=Object.prototype.toString;function K$(n){if(n===null)return!0;var t,a,o,i,l,r=n;for(l=new Array(r.length),t=0,a=r.length;t<a;t+=1){if(o=r[t],U$.call(o)!=="[object Object]"||(i=Object.keys(o),i.length!==1))return!1;l[t]=[i[0],o[i[0]]]}return!0}function G$(n){if(n===null)return[];var t,a,o,i,l,r=n;for(l=new Array(r.length),t=0,a=r.length;t<a;t+=1)o=r[t],i=Object.keys(o),l[t]=[i[0],o[i[0]]];return l}var Q$=new rn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:K$,construct:G$}),Y$=Object.prototype.hasOwnProperty;function J$(n){if(n===null)return!0;var t,a=n;for(t in a)if(Y$.call(a,t)&&a[t]!==null)return!1;return!0}function Z$(n){return n!==null?n:{}}var X$=new rn("tag:yaml.org,2002:set",{kind:"mapping",resolve:J$,construct:Z$});C$.extend({implicit:[A$,H$],explicit:[q$,V$,Q$,X$]});function Ru(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var e2=new Array(256),n2=new Array(256);for(var Ma=0;Ma<256;Ma++)e2[Ma]=Ru(Ma)?1:0,n2[Ma]=Ru(Ma);function t2(n){return Array.from(new Set(n))}function Nu(...n){let t,a,o;n.length===1?(t=0,o=1,[a]=n):[t,a,o=1]=n;const i=[];let l=t;for(;l<a;)i.push(l),l+=o||1;return i}function Qm(n,t){if(!t||t==="all"||t==="*")return Nu(1,n+1);const a=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))a.push(+o);else{const[i,l]=o.split("-",2);a.push(...Nu(+i,l?+l+1:n+1))}return t2(a).filter(o=>o<=n).sort((o,i)=>o-i)}function Ym(n){const t=N(()=>n.value.path),a=N(()=>Qe.length-1),o=N(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),i=N(()=>mi(o.value)),l=N(()=>Qe.find(f=>f.path===`${o.value}`)),r=N(()=>{var f,h,g;return(g=(h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:g.id}),c=N(()=>{var f,h;return((h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.layout)||(o.value===1?"cover":"default")}),u=N(()=>Qe.find(f=>f.path===`${Math.min(Qe.length,o.value+1)}`)),p=N(()=>Qe.filter(f=>{var h,g;return(g=(h=f.meta)==null?void 0:h.slide)==null?void 0:g.title}).reduce((f,h)=>(Or(f,h),f),[])),d=N(()=>Hr(p.value,l.value)),m=N(()=>Pr(d.value));return{route:n,path:t,total:a,currentPage:o,currentPath:i,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:m,downloadPDF:Wl,next:Pt,nextSlide:Hs,openInEditor:lF,prev:Rt,prevSlide:Ps}}function Jm(n,t,a){const o=Z(0);on(()=>{wn.afterEach(async()=>{await on(),o.value+=1})});const i=N(()=>{var u,p;return o.value,((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),l=N(()=>{var u,p;return+(((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.clicks)??i.value.length)}),r=N(()=>a.value<Qe.length-1||n.value<l.value),c=N(()=>a.value>1||n.value>0);return{clicks:n,clicksElements:i,clicksTotal:l,hasNext:r,hasPrev:c}}const a2=["id"],s2=Ae({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:t}){const a=n,o=Je(a,"clicksElements",t),i=N(()=>({height:`${wr}px`,width:`${At}px`})),l=it();Ot(()=>Promise.resolve().then(()=>xy),void 0).then(p=>l.value=p.default);const r=N(()=>a.clicks),c=Jm(r,a.nav.currentRoute,a.nav.currentPage),u=N(()=>`${a.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return Cn(C,Be({nav:{...a.nav,...c},configs:Ee,themeConfigs:N(()=>Ee.themeConfig)})),(p,d)=>{var m;return b(),oe("div",{id:u.value,class:"print-slide-container",style:tn(i.value)},[S(O(jm)),S(O(Er),{is:(m=p.route)==null?void 0:m.component,"clicks-elements":O(o),"onUpdate:clicksElements":d[0]||(d[0]=f=>Se(o)?o.value=f:null),clicks:r.value,"clicks-disabled":!1,class:Ve(O(Cr)(p.route)),route:p.route},null,8,["is","clicks-elements","clicks","class","route"]),l.value?(b(),M(O(l),{key:0,page:+p.route.path},null,8,["page"])):we("v-if",!0),S(O(Dm))],12,a2)}}}),Fu=E(s2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),o2=Ae({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var l;const t=n;z(C);const a=Z(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),o=N(()=>t.route),i=Ym(o);return(r,c)=>(b(),oe(Ie,null,[S(Fu,{"clicks-elements":a.value,"onUpdate:clicksElements":c[0]||(c[0]=u=>a.value=u),clicks:0,nav:O(i),route:o.value},null,8,["clicks-elements","nav","route"]),O(vs)?we("v-if",!0):(b(!0),oe(Ie,{key:0},qa(a.value.length,u=>(b(),M(Fu,{key:u,clicks:u,nav:O(i),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),i2=E(o2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),l2={id:"print-content"},r2=Ae({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const t=n;z(C);const a=N(()=>t.width),o=N(()=>t.width/St),i=N(()=>a.value/o.value),l=N(()=>i.value<St?a.value/At:o.value*St/At);let r=Qe.slice(0,-1);Wn.value.query.range&&(r=Qm(r.length,Wn.value.query.range).map(p=>r[p-1]));const c=N(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return Cn(Bd,l),(u,p)=>(b(),oe("div",{id:"print-container",class:Ve(c.value)},[e("div",l2,[(b(!0),oe(Ie,null,qa(O(r),d=>(b(),M(i2,{key:d.path,route:d},null,8,["route"]))),128))]),qn(u.$slots,"controls")],2))}});const c2=E(r2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),u2=Ae({__name:"Print",setup(n){return z(C),ba(()=>{Na?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,a)=>(b(),oe(Ie,null,[O(Na)?(b(),M(Bm,{key:0})):we("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tn(O(xr))},[S(c2,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:O(ha).width.value},null,8,["style","width"])],4)],64))}});const p2=E(u2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const d2={class:"slidev-layout end"},m2={__name:"end",setup(n){return z(C),(t,a)=>(b(),oe("div",d2,[qn(t.$slots,"default",{},()=>[s("END")],!0)]))}},f2=E(m2,[["__scopeId","data-v-e532b98d"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function qu(n){return n.startsWith("/")?"/3/html/"+n.slice(1):n}function h2(n,t=!1){const a=n&&["#","rgb","hsl"].some(i=>n.indexOf(i)===0),o={background:a?n:void 0,color:n&&!a?"white":void 0,backgroundImage:a?void 0:n?t?`linear-gradient(#0005, #0008), url(${qu(n)})`:`url("${qu(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const g2={class:"my-auto w-full"},_2=Ae({__name:"cover",props:{background:{default:""}},setup(n){const t=n;z(C);const a=N(()=>h2(t.background,!0));return(o,i)=>(b(),oe("div",{class:"slidev-layout cover",style:tn(a.value)},[e("div",g2,[qn(o.$slots,"default")])],4))}}),v2=E(_2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),k2=e("h1",null,"Hyper Text Markup Language",-1),b2=e("p",null,"HTML per sviluppatori",-1),y2={class:"pt-12"},w2={class:"px-2 py-1"},x2={__name:"1",setup(n){const t={theme:"default",background:"/cover.webp",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"TPSI",as:"2024/2025",version:"1.5.4"};return z(C),(a,o)=>{const i=Wm;return b(),M(v2,q(F(t)),{default:v(()=>[we(` mapping esercizi

1-10 -> 1-10
10a -> 11
11 -> 12
11a -> 13
12 -> 14
12a -> 15
13 -> 16
13a -> 17
14 -> 18
15 -> 19
16 -> 20 `),k2,b2,e("div",y2,[e("span",w2,[s(" Premi spazio o "),S(i,{class:"inline"}),s(" per la prossima slide ")])])]),_:1},16)}}},T2=E(x2,[["__file","/@slidev/slides/1.md"]]),$2={class:"cover"},z2=Ae({__name:"Cover",props:{bg:{default:"yellow"},fg:{default:"black"},fs:{default:"80px"}},setup(n,{emit:t}){const a=n;zd(r=>({"759f654d-fs":O(l),"759f654d-bgcol":O(o),"759f654d-fgcol":O(i)})),z(C);const o=Je(a,"bg",t),i=Je(a,"fg",t),l=Je(a,"fs",t);return(r,c)=>(b(),oe("div",$2,[qn(r.$slots,"default")]))}});const $n=E(z2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/components/Cover.vue"]]),M2={class:"slidev-layout default"},L2={__name:"default",setup(n){return z(C),(t,a)=>(b(),oe("div",M2,[qn(t.$slots,"default")]))}},W=E(L2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),C2=e("p",null," ",-1),E2={__name:"2",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[C2,S(i,{fs:"100px"},{default:v(()=>[s(" Introduzione ")]),_:1})]),_:1},16)}}},I2=E(E2,[["__file","/@slidev/slides/2.md"]]),S2=e("h1",null,"HTML",-1),A2=e("p",null,[e("em",null,"H"),s("yper "),e("em",null,"T"),s("ext "),e("em",null,"M"),s("arkup "),e("em",null,"L"),s("anguage (linguaggio di markup per ipertesti), comunemente noto con l’acronimo di "),e("strong",null,"HTML"),s(", è un "),e("strong",null,"linguaggio di markup"),s(" per la creazione di una pagina web.")],-1),O2=e("ul",null,[e("li",null,[e("p",null,"Originariamente nato per la formattazione e impaginazione di documenti ipertestuali (web 1.0), oggi è alla base dello sviluppo di siti ed applicazioni web.")]),e("li",null,[e("p",null,[s("Viene utilizzato principalmente per il disaccoppiamento della struttura logica di una pagina web (definita appunto dal markup "),e("strong",null,"HTML"),s(") dalla sua rappresentazione, gestita tramite gli stili "),e("strong",null,"CSS"),s(" e dalla sua logica di funzionamento implementata tramite il linguaggio "),e("strong",null,"JavaScript"),s(".")])]),e("li",null,[e("p",null,"L’HTML è un linguaggio di pubblico dominio, la cui sintassi è stabilita dal World Wide Web Consortium (W3C). La versione attuale, la quinta, è stata rilasciata dal W3C nell’ottobre 2014.")]),e("li",null,[e("p",null,"Il motivo principale che ha spinto il W3C e i suoi membri a sviluppare HTML5 è stata la necessità di fornire direttamente le funzionalità che in precedenza erano fruibili tramite estensioni proprietarie all’esterno dei browser, come Adobe Flash e simili. Un secondo obiettivo che gli sviluppatori si erano prefissati era quello di garantire una maggiore compatibilità tra i diversi browser, indipendentemente dalla piattaforma software utilizzata, e principalmente mirata all’espansione dei dispositivi mobili.")])],-1),H2={__name:"3",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[S2,A2,O2]),_:1},16))}},P2=E(H2,[["__file","/@slidev/slides/3.md"]]),R2="/3/html/assets/html5_1-9e65f7ef.jpg",N2=e("h1",null,"HTML",-1),F2=e("p",null," ",-1),q2=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ul",null,[e("li",null,"HTML5 linguaggio evoluto per il markup o descrizione delle pagine HTML"),e("li",null,"Definito e standardizzato dal W3C (WWW Consortium)"),e("li",null,"Descrive la semantica ed il contenuto di una pagina Web"),e("li",null,"Definisce una serie di tecnologie correlate"),e("li",null,"Note come HTML Living Standard (è in continua evoluzione)")])]),e("div",null,[e("p",null,[e("img",{src:R2,alt:"html5_1.jpg"})])])],-1),W2={__name:"4",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[N2,F2,q2]),_:1},16))}},D2=E(W2,[["__file","/@slidev/slides/4.md"]]),j2="/3/html/assets/html5_2-f6246604.jpg",B2=e("h1",null,"HTML",-1),V2=e("p",null," ",-1),U2=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("p",null,[s("Una "),e("strong",null,"pagina Web"),s(" contiene:")]),e("ul",null,[e("li",null,"immagini"),e("li",null,"audio"),e("li",null,"file multimediali"),e("li",null,"testo"),e("li",null,"hotword")]),e("p",null,[s("Le "),e("strong",null,"hotword"),s(" sono parti della pagina legate a link.")]),e("p",null,[s("I "),e("strong",null,"link"),s(" sono collegamenti che portano ad altre pagine o altre risorse.")])]),e("div",null,[e("p",null,[e("img",{src:j2,alt:"html5_2.jpg"})])])],-1),K2={__name:"5",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[B2,V2,U2]),_:1},16))}},G2=E(K2,[["__file","/@slidev/slides/5.md"]]),Q2=e("h1",null,"HTML",-1),Y2=e("p",null,[s("Il "),e("a",{href:"https://www.w3schools.com/",target:"_blank",rel:"noopener"},"sito web"),s(" del consorzio W3C, offre una preziosa fonte di informazioni per apprendere le tecnologie del web.")],-1),J2=e("br",null,null,-1),Z2=e("div",{grid:"~ cols-2 gap-32"},[e("div",null,[e("h3",null,"HTML"),e("ul",null,[e("li",null,[e("a",{href:"https://www.w3schools.com/html/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/html/default.asp")]),e("li",null,[e("a",{href:"https://www.w3schools.com/tags/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/tags/default.asp")]),e("li",null,[e("a",{href:"https://htmlreference.io/",target:"_blank",rel:"noopener"},"https://htmlreference.io/")])])]),e("div",null,[e("h3",null,"CSS"),e("ul",null,[e("li",null,[e("a",{href:"https://www.w3schools.com/css/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/css/default.asp")]),e("li",null,[e("a",{href:"https://www.w3schools.com/cssref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/cssref/default.asp")]),e("li",null,[e("a",{href:"https://cssreference.io/",target:"_blank",rel:"noopener"},"https://cssreference.io/")])])])],-1),X2=e("br",null,null,-1),ez=e("h3",null,"Java Script",-1),nz=e("ul",null,[e("li",null,[e("a",{href:"https://www.w3schools.com/js/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/js/default.asp")]),e("li",null,[e("a",{href:"https://www.w3schools.com/jsref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/jsref/default.asp")]),e("li",null,[e("a",{href:"https://devdocs.io/javascript/",target:"_blank",rel:"noopener"},"https://devdocs.io/javascript/")]),e("li",null,[e("a",{href:"https://javascript.info/",target:"_blank",rel:"noopener"},"https://javascript.info/")])],-1),tz={__name:"6",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[Q2,Y2,J2,Z2,X2,ez,nz]),_:1},16))}},az=E(tz,[["__file","/@slidev/slides/6.md"]]),sz=e("h1",null,"HTML",-1),oz=e("p",null,"Allenarsi con HTML",-1),iz=e("p",null,"Qui una serie di link a risorse esterne molto utili per mettere a frutto quando si apprenderà durante il corso",-1),lz=e("p",null,"Per apprendere correttamente ed efficaciemente HTML è necessario fare tanto esercizio sviluppando pagine di complessità crescente in modo da capire come usare i vari tag ed imparare a risolvere i problemi che si presentano durante la realizzazione di una pagina web",-1),rz=e("div",{grid:"~ cols-2 gap-32"},[e("div",null,[e("ul",null,[e("li",null,[e("a",{href:"https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app",target:"_blank",rel:"noopener"},"Build a Cat Photo App")]),e("li",null,[e("a",{href:"https://www.w3docs.com/exercise/html",target:"_blank",rel:"noopener"},"W3Docs HTML Excercie")]),e("li",null,[e("a",{href:"https://web.dev/learn/html/welcome",target:"_blank",rel:"noopener"},"Google Web.dev HTML")]),e("li",null,[e("a",{href:"https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-forms-by-building-a-registration-form",target:"_blank",rel:"noopener"},"Learn HTML Forms by Building a Registration Form")]),e("li",null,[e("a",{href:"https://www.codecademy.com/learn/learn-html",target:"_blank",rel:"noopener"},"Learn HTML on Codecademy")]),e("li",null,[e("a",{href:"https://codier.io/",target:"_blank",rel:"noopener"},"Codier")]),e("li",null,[e("a",{href:"https://codedamn.com/challenge/30-days-of-html-css",target:"_blank",rel:"noopener"},"30 Days of Challenges")]),e("li",null,[e("a",{href:"https://www.codecademy.com/resources/blog/html-and-css-code-challenges-for-beginners/",target:"_blank",rel:"noopener"},"10 Challenges")])])]),e("div",null,[e("ul",null,[e("li",null,[e("a",{href:"https://www.codecademy.com/learn/learn-html",target:"_blank",rel:"noopener"},"Learn HTML")]),e("li",null,[e("a",{href:"https://brainstation.io/learn/html",target:"_blank",rel:"noopener"},"Brainstation HTML")]),e("li",null,[e("a",{href:"https://www.geeksforgeeks.org/html-exercises/",target:"_blank",rel:"noopener"},"Geek for Geek")]),e("li",null,[e("a",{href:"https://www.101computing.net/html-css-javascript-challenges/",target:"_blank",rel:"noopener"},"HTML Challenges")]),e("li",null,[e("a",{href:"http://testingchallenges.thetestingmap.org/",target:"_blank",rel:"noopener"},"Testing Challenge")]),e("li",null,[e("a",{href:"https://www.w3schools.com/html/html_quiz.asp",target:"_blank",rel:"noopener"},"W3C HTML Quiz")]),e("li",null,[e("a",{href:"https://www.w3schools.com/html/html_exercises.asp",target:"_blank",rel:"noopener"},"W3C HTML Excerices")]),e("li",null,[e("a",{href:"https://www.codechef.com/practice/html",target:"_blank",rel:"noopener"},"7 Projects")]),e("li",null,[e("a",{href:"https://www.w3resource.com/html-css-exercise/basic/",target:"_blank",rel:"noopener"},"W3 Resouce")])])])],-1),cz={__name:"7",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[sz,oz,iz,lz,rz]),_:1},16))}},uz=E(cz,[["__file","/@slidev/slides/7.md"]]),pz=e("h1",null,"HTML",-1),dz=e("p",null,"Materiale Aggiuntivo",-1),mz=e("br",null,null,-1),fz=e("div",{class:"grid grid-cols-2 grid-rows-1 gap-4",style:{padding:"0px","margin-left":"0%"}},[e("div",null,[e("ul",null,[e("li",null,[e("a",{href:"/support/3/html/pdf/html_attributes_01.pdf",target:"_blank",rel:"noopener"},"HTML Attributes 1")]),e("li",null,[e("a",{href:"/support/3/html/pdf/html_attributes_02.pdf",target:"_blank",rel:"noopener"},"HTML Attributes 2")]),e("li",null,[e("a",{href:"/support/3/html/pdf/html_ui_design.pdf",target:"_blank",rel:"noopener"},"HTML UI design")]),e("li",null,[e("a",{href:"/support/3/html/pdf/PWA.pdf",target:"_blank",rel:"noopener"},"PWA")]),e("li",null,[e("a",{href:"/support/3/html/pdf/Cookies.pdf",target:"_blank",rel:"noopener"},"Cookies")]),e("li",null,[e("a",{href:"/support/3/html/pdf/Free_websites_to_deploy_code.pdf",target:"_blank",rel:"noopener"},"Free_websites_to_deploy_code")]),e("li",null,[e("a",{href:"/support/3/html/pdf/duckett.pdf",target:"_blank",rel:"noopener"},"Ducket")]),e("li",null,[e("a",{href:"/support/3/html/epub/Build_an_HTML5_Game_Karl_Bunyan.epub",target:"_blank",rel:"noopener"},"Build HTML5 Game")]),e("li",null,[e("a",{href:"/support/3/html/epub/Foundation_HTML5_Canvas_Rob_Hawkes.epub",target:"_blank",rel:"noopener"},"HTML5 Canvas")]),e("li",null,[e("a",{href:"/support/3/html/epub/HTML5_Game_Development_by_Example.epub",target:"_blank",rel:"noopener"},"HTML5 Game Development")])])]),e("div",null,[e("ul",null,[e("li",null,[e("a",{href:"/support/3/html/epub/HTML5_Games_Most_Wanted_Build_the_Best_HTML5_Games.epub",target:"_blank",rel:"noopener"},"HTML5 Game MOst Wanted")]),e("li",null,[e("a",{href:"/support/3/html/epub/HTML5_Games_Novice_to_Ninja_Earle_Castledine.epub",target:"_blank",rel:"noopener"},"HTML5 Game Novice to Ninja")]),e("li",null,[e("a",{href:"/support/3/html/pdf/html_seo.pdf",target:"_blank",rel:"noopener"},"HTML SEO")]),e("li",null,[e("a",{href:"/support/3/html/pdf/html_cheatsheet_01.pdf",target:"_blank",rel:"noopener"},"HTML Cheatsheet 1")]),e("li",null,[e("a",{href:"/support/3/html/pdf/html_cheatsheet_02.pdf",target:"_blank",rel:"noopener"},"HTML Cheatsheet 2")]),e("li",null,[e("a",{href:"/support/3/html/epub/HTML5_Quick_Markup_Reference_Wallace_Jackson.epub",target:"_blank",rel:"noopener"},"HTML5 Quick Markup Guide")]),e("li",null,[e("a",{href:"/support/3/html/epub/HTML_Manual_of_Style_A_Clear_Concise_Reference.epub",target:"_blank",rel:"noopener"},"HTML Manual of Style")]),e("li",null,[e("a",{href:"/support/3/html/epub/The_Essential_Guide_to_HTML5_Games.epub",target:"_blank",rel:"noopener"},"Essential Guide to HTML5")]),e("li",null,[e("a",{href:"/support/3/html/epub/The_HTML_Handbook_Flavio_Copes.epub",target:"_blank",rel:"noopener"},"HTML Handkbook")]),e("li",null,[e("a",{href:"/support/3/html/epub/Web_Coding_Development_AllinOne_For_Dummies_Paul_McFedries.epub",target:"_blank",rel:"noopener"},"Web Coding Development")])])])],-1),hz={__name:"8",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[pz,dz,mz,fz]),_:1},16))}},gz=E(hz,[["__file","/@slidev/slides/8.md"]]),_z=e("p",null," ",-1),vz={__name:"9",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[_z,S(i,{fs:"100px"},{default:v(()=>[s(" Ambiente di Sviluppo ")]),_:1})]),_:1},16)}}},kz=E(vz,[["__file","/@slidev/slides/9.md"]]),bz=e("h1",null,"HTML - Ambiente di sviluppo",-1),yz=e("p",null," ",-1),wz=e("ul",null,[e("li",null,"Al fine di comprendere appieno lo sviluppo web, è preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice"),e("li",null,"Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web"),e("li",null,"Il passaggio ad un sistema autore o ad un CMS risulta poi più facile e intuitivo.")],-1),xz={__name:"10",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[bz,yz,wz]),_:1},16))}},Tz=E(xz,[["__file","/@slidev/slides/10.md"]]),$z="/3/html/assets/html5_3-98b93fb7.jpg",zz=e("h1",null,"HTML - Ambiente di sviluppo",-1),Mz=e("p",null,[e("a",{href:"https://code.visualstudio.com/docs/languages/html",target:"_blank",rel:"noopener"},"Visual Studio Code")],-1),Lz=e("div",{grid:"~ cols-2 gap-32"},[e("div",null,[e("ul",null,[e("li",null,"Qualsiasi editor testuale è adatto allo sviluppo web"),e("li",null,[e("strong",null,"Visual Studio Code"),s(" fornisce supporto al HTML in modo nativo")]),e("li",null,"Fornisce il syntax highlighting, smart completions con IntelliSense e formattazione customizzabile"),e("li",null,"In aggiunta sono disponibili moltissime estensioni per facilitare lo sviluppo web")])]),e("div",null,[e("p",null,[e("img",{src:$z,alt:"html5_3.jpg"})])])],-1),Cz={__name:"11",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[zz,Mz,Lz]),_:1},16))}},Ez=E(Cz,[["__file","/@slidev/slides/11.md"]]),Iz="/3/html/assets/html5_4-d48b4fdd.jpg",Sz=e("h1",null,"HTML - Ambiente di sviluppo",-1),Az=e("p",null,"Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.",-1),Oz=e("p",null,[e("img",{src:Iz,alt:"html5_4.jpg"})],-1),Hz={__name:"12",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[Sz,Az,Oz]),_:1},16))}},Pz=E(Hz,[["__file","/@slidev/slides/12.md"]]),Rz=e("h1",null,"HTML - Ambiente di sviluppo",-1),Nz=e("p",null," ",-1),Fz=e("ul",null,[e("li",null,"Quindi per sviluppare una pagina web usiamo vscode (o il nostro editor preferito)"),e("li",null,"Scriviamo il codice di markup della pagina"),e("li",null,"Salviamo con estensione .html"),e("li",null,"Apriamo il file nel browser (CTRL + o o drag’n drop)"),e("li",null,"La pagina viene visualizzata all’interno del browser")],-1),qz={__name:"13",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[Rz,Nz,Fz]),_:1},16))}},Wz=E(qz,[["__file","/@slidev/slides/13.md"]]),Dz=e("p",null," ",-1),jz={__name:"14",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[Dz,S(i,{fs:"100px"},{default:v(()=>[s(" Tag e Attributi ")]),_:1})]),_:1},16)}}},Bz=E(jz,[["__file","/@slidev/slides/14.md"]]),Vz={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Uz=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),Kz=[Uz];function Gz(n,t){return b(),oe("svg",Vz,Kz)}const Qz={name:"ph-clipboard",render:Gz},Yz={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Jz=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Zz=[Jz];function Xz(n,t){return b(),oe("svg",Yz,Zz)}const eM={name:"ph-check-circle",render:Xz},nM=["title"],tM=Ae({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const t=n;z(C);const a=z(ms),o=z(na),i=z(fs);function l(m=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=h.length;for(let w=0;w<m;w++)f.push(h.charAt(Math.floor(Math.random()*g)));return f.join("")}const r=Z(),c=Tn();bt(()=>{const m=t.at==null?o==null?void 0:o.value.length:t.at,f=N(()=>i!=null&&i.value?t.ranges.length-1:Math.min(Math.max(0,((a==null?void 0:a.value)||0)-(m||0)),t.ranges.length-1)),h=N(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(i!=null&&i.value)){const g=l(),w=mk(t.ranges.length-1).map(x=>g+x);o!=null&&o.value&&(o.value.push(...w),Bs(()=>w.forEach(x=>kl(o.value,x)),c))}ba(()=>{if(!r.value)return;const w=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const x of w){const T=Array.from(x.querySelectorAll(".line")),$=Qm(T.length,h.value);if(T.forEach((k,A)=>{const L=$.includes(A+1);k.classList.toggle(Jt,!0),k.classList.toggle("highlighted",L),k.classList.toggle("dishonored",!L)}),t.maxHeight){const k=Array.from(x.querySelectorAll(".line.highlighted"));k.reduce((L,H)=>H.offsetHeight+L,0)>r.value.offsetHeight?k[0].scrollIntoView({behavior:"smooth",block:"start"}):k.length>0&&k[Math.round((k.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=m1();function d(){var f,h;const m=(h=(f=r.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;m&&p(m)}return(m,f)=>{const h=eM,g=Qz;return b(),oe("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:tn({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[qn(m.$slots,"default"),O(Ee).codeCopy?(b(),oe("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:O(u)?"Copied":"Copy",onClick:f[0]||(f[0]=w=>d())},[O(u)?(b(),M(h,{key:0,class:"p-2 w-8 h-8"})):(b(),M(g,{key:1,class:"p-2 w-8 h-8"}))],8,nM)):we("v-if",!0)],4)}}}),re=E(tM,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),aM=e("h1",null,"TAG",-1),sM=e("p",null,"I TAG HTML sono marcatori (Markup Language) che modificano la semantica (senso, ruolo organizzazione) dei contenuti di una pagina.",-1),oM=e("h3",null,"Anatomia di un TAG",-1),iM=e("ul",null,[e("li",null,"Un tag è racchiuso tra < e >"),e("li",null,"Il nome del tag è sempre scritto in minuscolo"),e("li",null,[s("Se non specificato deve sempre esserci un tag di "),e("strong",null,"apertura"),s(" ed un tag di "),e("strong",null,"chiusura")])],-1),lM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),e("span",{class:"token punctuation"},">")]),s(" --> TAG di apertura")])])],-1),rM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")]),s(" --> TAG di chiusura")])])],-1),cM=e("p",null,"Il contenuto da modificare è compreso tra il tag di apertura ed il tag di chiusura",-1),uM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])])])],-1),pM={__name:"15",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[aM,sM,oM,iM,S(i,Y({},{ranges:[""]}),{default:v(()=>[lM]),_:1},16),S(i,Y({},{ranges:[""]}),{default:v(()=>[rM]),_:1},16),cM,S(i,Y({},{ranges:[""]}),{default:v(()=>[uM]),_:1},16)]),_:1},16)}}},dM=E(pM,[["__file","/@slidev/slides/15.md"]]),mM=e("h1",null,"TAG singleton",-1),fM=e("p",null,"Elementi HTML con il solo tag di apertura.",-1),hM=e("ul",null,[e("li",null,[s("In HTML sono definiti una serie di tag, detti "),e("em",null,"singleton"),s(" che non richiedono il tag di chiusura.")]),e("li",null,"Per essere formalmente corretti questi elementi devono essere scritti in questo modo:")],-1),gM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tag")]),s(),e("span",{class:"token punctuation"},"/>")]),s(": notare lo slash finale che indica la mancanza di un tag di chiusura.")])])],-1),_M=e("p",null,"Qui la lista dei tag singleton che non richiedono una chiusura.",-1),vM=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("area")]),e("span",{class:"token punctuation"},">")])]),s(`
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
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("wbr")]),e("span",{class:"token punctuation"},">")])])])])])],-1),kM={__name:"16",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[mM,fM,hM,S(i,Y({},{ranges:[""]}),{default:v(()=>[gM]),_:1},16),_M,vM]),_:1},16)}}},bM=E(kM,[["__file","/@slidev/slides/16.md"]]),yM=e("h1",null,"Attributi",-1),wM=e("p",null,"Caratteristiche addizionali di un TAG",-1),xM=e("ul",null,[e("li",null,[s("I tag HTML possono avere degli "),e("strong",null,"attributi"),s(" che forniscono delle informazioni addizionali al browser.")]),e("li",null,[s("Gli attributi sono "),e("strong",null,"sempre"),s(" specificati nel tag di apertura.")]),e("li",null,"Gli attributi sono definiti da una coppia nome-valore")],-1),TM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),s(),e("span",{class:"token attr-name"},"nome"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])])])],-1),$M=e("ul",null,[e("li",null,"Un tag può avere 0, 1 o più attributi")],-1),zM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),s(),e("span",{class:"token attr-name"},"nome"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),s(),e("span",{class:"token attr-name"},"nome1"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore1"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"nome2"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore2"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"nome3"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore3"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])])])],-1),MM=e("p",null,[e("br"),e("strong",null,"Esempio:")],-1),LM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meta")]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("author"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Antonio Mancuso"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),s(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://www.w3schools.com"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Visit W3Schools"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("a")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("p")]),s(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"color"),e("span",{class:"token punctuation"},":"),s("red"),e("span",{class:"token punctuation"},";")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")]),s("This is a red paragraph."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("p")]),e("span",{class:"token punctuation"},">")])])])],-1),CM={__name:"17",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[yM,wM,xM,S(i,Y({},{ranges:[""]}),{default:v(()=>[TM]),_:1},16),$M,S(i,Y({},{ranges:[""]}),{default:v(()=>[zM]),_:1},16),MM,S(i,Y({},{ranges:[""]}),{default:v(()=>[LM]),_:1},16)]),_:1},16)}}},EM=E(CM,[["__file","/@slidev/slides/17.md"]]),IM=e("p",null," ",-1),SM={__name:"18",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[IM,S(i,{fs:"80px"},{default:v(()=>[s(" La struttura di una pagina Web ")]),_:1})]),_:1},16)}}},AM=E(SM,[["__file","/@slidev/slides/18.md"]]),OM=e("h1",null,"Struttura pagina HTML",-1),HM=e("p",null,"Una pagina HTML ha una struttuta fissa che deve sempre essere rispettata.",-1),PM=e("p",null,"Una generica pagina HTML è composta da 3 sezioni principali:",-1),RM=e("ol",null,[e("li",null,[e("strong",null,"Documento"),s(": il contenitore di più alto livello, che racchiude tutte le altre sezioni della pagina HTML.")]),e("li",null,[e("strong",null,"Head"),s(": il contenitore per i metadati (dato che descrive un dato) del documento e va inserito in testa al docuemnto.")]),e("li",null,[e("strong",null,"Body"),s(": consiste nel contenuto principale della pagina HTML.")])],-1),NM={__name:"19",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[OM,HM,PM,RM]),_:1},16))}},FM=E(NM,[["__file","/@slidev/slides/19.md"]]),qM="/3/html/assets/html5_5-a532b0f3.jpg",WM=e("h1",null,"Struttura pagina HTML",-1),DM=e("p",null,"Rappresentazione grafica della struttura di una pagina HTML",-1),jM=e("p",null,[e("img",{src:qM,alt:"html5_5.jpg"})],-1),BM={__name:"20",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[WM,DM,jM]),_:1},16))}},VM=E(BM,[["__file","/@slidev/slides/20.md"]]),UM=e("h1",null,"Struttura pagina HTML",-1),KM=e("p",null,"Documento HTML",-1),GM=e("ul",null,[e("li",null,"Tutti i documenti HTML devono iniziare con la dichiarazione DOCTYPE che deve essere seguita dal TAG di più alto livello")],-1),QM=e("br",null,null,-1),YM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token doctype"},[e("span",{class:"token punctuation"},"<!"),e("span",{class:"token doctype-tag"},"DOCTYPE"),s(),e("span",{class:"token name"},"html"),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("html")]),e("span",{class:"token punctuation"},">")])])])],-1),JM=e("br",null,null,-1),ZM=e("ul",null,[e("li",null,[e("strong",null,"<!DOCTYPE html>"),s(": rappresenta il tipo di documento (html) e permette al browser di visualizzare la pagina HTML in modo corretto.")]),e("li",null,"Deve apparire nella pagina 1 sola volta come prima linea e prima di qualsiasi altro elemento o tag."),e("li",null,[e("strong",null,"<html>"),s(": è il primo tag di apertura che indica l’inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.")])],-1),XM={__name:"21",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[UM,KM,GM,QM,S(i,Y({},{ranges:[""]}),{default:v(()=>[YM]),_:1},16),JM,ZM]),_:1},16)}}},eL=E(XM,[["__file","/@slidev/slides/21.md"]]),nL=e("h1",null,"Struttura pagina HTML",-1),tL=e("p",null,"Header del documento",-1),aL=e("ul",null,[e("li",null,[s("Il primo elemento di apertura della pagina HTML è l’"),e("em",null,[e("strong",null,"HEAD"),s("er")]),s(" o intestazione.")]),e("li",null,[e("strong",null,"<head>"),s(": tag di apertura dell’header che contiene la descrizione dei "),e("em",null,"metadati"),s(" del documento HTML.")]),e("li",null,"I metadati sono dati che descrivono delle caratteristiche del documento, per esempip il titolo, il set di caratteri, l’autore,etc…"),e("li",null,[s("La sezione header ed i metadati contenuti "),e("strong",null,"NON"),s(" sono visualizzati.")]),e("li",null,"Il più importante elemento della sezione head è il titolo identificato dal tag")],-1),sL=e("br",null,null,-1),oL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("title")]),e("span",{class:"token punctuation"},">")]),s("Titolo della pagina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("title")]),e("span",{class:"token punctuation"},">")])])])],-1),iL={__name:"22",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[nL,tL,aL,sL,S(i,Y({},{ranges:[""]}),{default:v(()=>[oL]),_:1},16)]),_:1},16)}}},lL=E(iL,[["__file","/@slidev/slides/22.md"]]),rL=e("h1",null,"Struttura pagina HTML",-1),cL=e("p",null,"Body e contenuto del documento",-1),uL=e("ul",null,[e("li",null,"La sezione del documento identificata dal tag")],-1),pL=e("br",null,null,-1),dL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("body")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"  ..."),s(`
`),e("span",{class:"line"},"  ..."),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("body")]),e("span",{class:"token punctuation"},">")])])])],-1),mL=e("br",null,null,-1),fL=e("ul",null,[e("li",null,"Rappresenta e contiene tutti i tag di descrizione e markup della pagina."),e("li",null,"In questa sezione viene definito il contenuto che si vuole visualizzare nel browser.")],-1),hL={__name:"23",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[rL,cL,uL,pL,S(i,Y({},{ranges:[""]}),{default:v(()=>[dL]),_:1},16),mL,fL]),_:1},16)}}},gL=E(hL,[["__file","/@slidev/slides/23.md"]]),_L=e("h1",null,"Struttura pagina HTML",-1),vL=e("p",null,"Pagina HTML base",-1),kL=e("p",null,"Questo è il codice della pagina HTML minimale, che contiene solo le sezioni principali",-1),bL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token doctype"},[e("span",{class:"token punctuation"},"<!"),e("span",{class:"token doctype-tag"},"DOCTYPE"),s(),e("span",{class:"token name"},"html"),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token comment"},"<!-- HTML5-->")]),s(`
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
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("html")]),e("span",{class:"token punctuation"},">")])])])],-1),yL={__name:"24",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[_L,vL,kL,S(i,Y({},{ranges:[""]}),{default:v(()=>[bL]),_:1},16)]),_:1},16)}}},wL=E(yL,[["__file","/@slidev/slides/24.md"]]),xL=e("h1",null,"Struttura pagina HTML",-1),TL=e("p",null,"I tag dell’header",-1),$L=e("p",null,"La sezione <head> può contenere i seguenti tag:",-1),zL=e("ul",null,[e("li",null,[e("strong",null,"<title>:"),s(" definisce il titolo della pagina HTML.")]),e("li",null,[e("strong",null,"<style>:"),s(" definisce lo stile da applicare alla pagina HTML.")]),e("li",null,[e("strong",null,"<meta>:"),s(" definisce specifici metadata per il documento.")]),e("li",null,[e("strong",null,"<link>:"),s(" utilizzato per referenziare elementi o documenti esterni.")]),e("li",null,[e("strong",null,"<script>:"),s(" definisce la logica da eseguire durante la visualizzazione delle pagina.")]),e("li",null,[e("strong",null,"<base>:"),s(" specifica un UTL di base da applicare a tutto il documento.")])],-1),ML={__name:"25",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[xL,TL,$L,zL]),_:1},16))}},LL=E(ML,[["__file","/@slidev/slides/25.md"]]),CL=e("h1",null,"Struttura pagina HTML",-1),EL=e("p",null,"I tag dell’header: <title>",-1),IL=e("ul",null,[e("li",null,"Il più importante elemento della sezione head è il titolo identificato dal tag")],-1),SL=e("br",null,null,-1),AL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("title")]),e("span",{class:"token punctuation"},">")]),s("Titolo della pagina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("title")]),e("span",{class:"token punctuation"},">")])])])],-1),OL=e("br",null,null,-1),HL=e("ul",null,[e("li",null,"Il titolo deve contenere solo informazioni testuali ed è visualizzato nel bordo o tab della finestra del browser."),e("li",null,"Il titolo è molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull’algoritmo che decide in quale ordine visualizzare le pagine trovate.")],-1),PL={__name:"26",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[CL,EL,IL,SL,S(i,Y({},{ranges:[""]}),{default:v(()=>[AL]),_:1},16),OL,HL]),_:1},16)}}},RL=E(PL,[["__file","/@slidev/slides/26.md"]]),NL={class:"banner"},FL=Ae({__name:"Banner",props:{bg:{default:"green"},fg:{default:"yellow"},padding:{default:"10px"},mt:{default:"0px"},mb:{default:"0px"},ml:{default:"0px"},mr:{default:"0px"}},setup(n,{emit:t}){const a=n;zd(p=>({"76049b2e-bgcol":O(o),"76049b2e-fgcol":O(i),"76049b2e-padding":O(l),"76049b2e-marginTop":O(r),"76049b2e-marginBottom":O(c),"76049b2e-marginLeft":p.marginLeft,"76049b2e-marginRight":O(u)})),z(C);const o=Je(a,"bg",t),i=Je(a,"fg",t),l=Je(a,"padding",t),r=Je(a,"mt",t),c=Je(a,"mb",t),u=Je(a,"mr",t);return(p,d)=>(b(),oe("div",NL,[qn(p.$slots,"default")]))}});const qL=E(FL,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/components/Banner.vue"]]),WL=e("h1",null,"Struttura pagina HTML",-1),DL=e("p",null,"I tag dell’header: <meta>",-1),jL=e("p",null,"Viene utilizzato per specificare vari tipi di metadati, tra cui:",-1),BL=e("ul",null,[e("li",null,[e("strong",null,"character set"),s(": set di caratteri usato dalla pagina web")]),e("li",null,[e("strong",null,"descrizione pagina"),s(": descrizione della pagina e dei suoi contenuti")]),e("li",null,[e("strong",null,"keywords"),s(": parole chiave per le ricerche web")]),e("li",null,[e("strong",null,"autore del documento"),s(": autore/i del documento")]),e("li",null,[e("strong",null,"viewport settings"),s(": impostazioni del viewport, spesso utile per dispositivi mobili")])],-1),VL={__name:"27",setup(n){const t={};return z(C),(a,o)=>{const i=qL;return b(),M(W,q(F(t)),{default:v(()=>[WL,DL,jL,BL,S(i,{padding:"25px",mt:"25px"},{default:v(()=>[s(" Importante notare che i metadati, non sono visualizzati dal browser, ma utilizzati dai motori di ricerca per comprendere meglio il contenuto della pagina stessa. ")]),_:1})]),_:1},16)}}},UL=E(VL,[["__file","/@slidev/slides/27.md"]]),KL=e("h1",null,"Struttura pagina HTML",-1),GL=e("p",null,"I tag dell’header: <style>",-1),QL=e("ul",null,[e("li",null,"Definisce uno o più stili che vanno a modificare la visualizzazione della pagina HTML")],-1),YL=e("br",null,null,-1),JL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("style")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"  body {background-color: powderblue;}"),s(`
`),e("span",{class:"line"},"  h1 {color: red;}"),s(`
`),e("span",{class:"line"},"  p {color: blue;}"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("style")]),e("span",{class:"token punctuation"},">")])])])],-1),ZL=e("br",null,null,-1),XL=e("ul",null,[e("li",null,"Normalmente non si usa mai in quanto non è una buona pratica di programmazione"),e("li",null,[s("Per pagine di media/alta complessità non si include in quanto è più pulito definire gli stili della pagina in un file esterno di tipo "),e("strong",null,"CSS")])],-1),e3={__name:"28",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[KL,GL,QL,YL,S(i,Y({},{ranges:[""]}),{default:v(()=>[JL]),_:1},16),ZL,XL]),_:1},16)}}},n3=E(e3,[["__file","/@slidev/slides/28.md"]]),t3=e("h1",null,"Struttura pagina HTML",-1),a3=e("p",null,"I tag dell’header: <script>",-1),s3=e("ul",null,[e("li",null,[s("Desinisce uno script in "),e("strong",null,"Javascript"),s(" che viene eseguito dal browser durante la visualizzazione della pagina.")]),e("li",null,"Permette di eseguire un programma lato client direttamente all’interno del browser."),e("li",null,"Normalmente utilizzato per interagire con l’utente o per modificare l’aspetto della pagina stessa.")],-1),o3=e("br",null,null,-1),i3=e("pre",{class:"slidev-code language-ts"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token operator"},"<"),s("script"),e("span",{class:"token operator"},">")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token keyword"},"function"),s(),e("span",{class:"token function"},"myFunction"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),s(),e("span",{class:"token punctuation"},"{"),s()]),s(`
`),e("span",{class:"line"},[s("        document"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"getElementById"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"titolo"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),s("innerHTML "),e("span",{class:"token operator"},"="),s(),e("span",{class:"token string"},'"STRUTTURA BASE DI UNA PAGINA WEB"'),e("span",{class:"token punctuation"},";")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token punctuation"},"}")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token operator"},"<"),e("span",{class:"token operator"},"/"),s("script"),e("span",{class:"token operator"},">")])])],-1),l3=e("br",null,null,-1),r3=e("ul",null,[e("li",null,"Normalmente non si usa mai in quanto non è una buona pratica di programmazione"),e("li",null,[s("Per pagine di media/alta complessità non si include in quanto è più pulito definire gli script della pagina in un file esterno di tipo "),e("strong",null,"JS")])],-1),c3={__name:"29",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[t3,a3,s3,o3,S(i,Y({},{ranges:[""]}),{default:v(()=>[i3]),_:1},16),l3,r3]),_:1},16)}}},u3=E(c3,[["__file","/@slidev/slides/29.md"]]),p3=e("h1",null,"Struttura pagina HTML",-1),d3=e("p",null,"Pagina HTML base",-1),m3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token doctype"},[e("span",{class:"token punctuation"},"<!"),e("span",{class:"token doctype-tag"},"DOCTYPE"),s(),e("span",{class:"token name"},"html"),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token comment"},"<!-- HTML5-->")]),s(`
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
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("head")]),e("span",{class:"token punctuation"},">")])])])],-1),f3={__name:"30",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[p3,d3,S(i,Y({},{ranges:[""]}),{default:v(()=>[m3]),_:1},16)]),_:1},16)}}},h3=E(f3,[["__file","/@slidev/slides/30.md"]]),g3=e("h1",null,"Struttura pagina HTML",-1),_3=e("p",null,"Pagina HTML base",-1),v3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("body")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token comment"},"<!-- Corpo principale della pagina HTML-->")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("center")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h1")]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("titolo"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Struttura base di una pagina web"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h1")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},"/>")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),s(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://source.unsplash.com/collection/94734566/1920x1080"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("60%"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("div")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("button")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("button"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"onclick"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value javascript language-javascript"},[e("span",{class:"token function"},"myFunction"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")]),s("Prova a premere"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("button")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("div")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("center")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("body")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("html")]),e("span",{class:"token punctuation"},">")])])])],-1),k3={__name:"31",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[g3,_3,S(i,Y({},{ranges:[""]}),{default:v(()=>[v3]),_:1},16)]),_:1},16)}}},b3=E(k3,[["__file","/@slidev/slides/31.md"]]),y3=e("h1",null,"Esercizio html_01",-1),w3=e("p",null,"Pagina HTML base",-1),x3=e("ol",null,[e("li",null,[s("Creare una pagina HTML come visto nelle slide precedenti e nominarlo "),e("em",null,"pagina.html")]),e("li",null,"Aprire la pagina nel browser e verificarne il funzionamento"),e("li",null,[s("Provare a modificare la sezione "),e("em",null,"body"),s(" e verificare i cambiamenti")]),e("li",null,[s("Provare a modificare la sezione "),e("em",null,"style"),s(" e verificare i cambiamenti")]),e("li",null,[s("Provare a modificare la sezione "),e("em",null,"script"),s(" e verificare i cambiamenti")])],-1),T3={__name:"32",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[y3,w3,x3]),_:1},16))}},$3=E(T3,[["__file","/@slidev/slides/32.md"]]),z3=e("p",null," ",-1),M3={__name:"33",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[z3,S(i,{fs:"100px"},{default:v(()=>[s(" Titoli e Paragrafi in HTML ")]),_:1})]),_:1},16)}}},L3=E(M3,[["__file","/@slidev/slides/33.md"]]),C3="/3/html/assets/html5_7-c1d52ad4.jpg",E3=e("h1",null,"HTML Headings",-1),I3=e("p",null,"Titoli e sottotitoli",-1),S3=e("ul",null,[e("li",null,"Heading/intestazione: sono marcatori HTML che permettono di definire titoli e sottotitoli in una pagina web."),e("li",null,"HTML definisce 6 livelli di heading, dal più importante al meno importante:")],-1),A3={grid:"~ cols-2 gap-32"},O3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"<!--livello più importante-->")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h1")]),e("span",{class:"token punctuation"},">")]),s("Heading 1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h1")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h2")]),e("span",{class:"token punctuation"},">")]),s("Heading 2"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h2")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Heading 3"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h4")]),e("span",{class:"token punctuation"},">")]),s("Heading 4"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h4")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h5")]),e("span",{class:"token punctuation"},">")]),s("Heading 5"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h5")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h6")]),e("span",{class:"token punctuation"},">")]),s("Heading 6"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h6")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"<!--livello meno importante-->")])])],-1),H3=e("ul",null,[e("li",null,[s("I motori di ricerca usano i tag di "),e("em",null,"heading"),s(" per capire e definire un indice del contenuto di una pagina")]),e("li",null,[e("strong",null,"NOTA"),s(": "),e("em",null,[s("Usa i tag <hN> solo per i titoli e sottotitoli. "),e("strong",null,"NON"),s(" usarli per visualizzare testo in grassetto o con font più grande.")])])],-1),P3=e("div",null,[e("p",null,[e("img",{src:C3,alt:"html5_7.jpg"})])],-1),R3={__name:"34",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[E3,I3,S3,e("div",A3,[e("div",null,[S(i,Y({},{ranges:[""]}),{default:v(()=>[O3]),_:1},16),H3]),P3])]),_:1},16)}}},N3=E(R3,[["__file","/@slidev/slides/34.md"]]),F3=e("h1",null,"HTML Paragrafi",-1),q3=e("p",null,"Blocchi di testo",-1),W3=e("ul",null,[e("li",null,"Nell’editing di una pagina HTML, è spesso utile poter inserire un blocco di testo o paragrafo"),e("li",null,[s("HTML mette a disposizione un tag specifico "),e("strong",null,"<p>"),s(" che definisce un paragrafo di testo, lungo a piacere, da visualizzare in una pagina web")])],-1),D3=e("br",null,null,-1),j3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("p")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"  ..."),s(`
`),e("span",{class:"line"},"  ... Blocco di testo"),s(`
`),e("span",{class:"line"},"  ..."),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("p")]),e("span",{class:"token punctuation"},">")])])])],-1),B3=e("br",null,null,-1),V3=e("ul",null,[e("li",null,"Ogni paragrafo è preceduto e seguito da una linea bianca distanziatrice."),e("li",null,"Il browser è libero di aggiunge automaticamente degli spazi (un margine) prima e dopo il testo."),e("li",null,"Non si può essere sicuri di come il browser visualizzi il paragrafo."),e("li",null,"Il risultato può essere diverso su uno schermo grande rispetto ad uno piccolo."),e("li",null,"Pertanto l’aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser.")],-1),U3={__name:"35",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[F3,q3,W3,D3,S(i,Y({},{ranges:[""]}),{default:v(()=>[j3]),_:1},16),B3,V3]),_:1},16)}}},K3=E(U3,[["__file","/@slidev/slides/35.md"]]),G3=e("h1",null,"Esercizio html_02",-1),Q3=e("p",null,"Heading e paragrafi",-1),Y3=e("ol",null,[e("li",null,[s("Trasformare il file di test "),e("a",{href:"/support/3/html/esercizio_html_02.txt",target:"_blank",rel:"noopener"},[e("em",null,"esercizio_html_02.txt")]),s(" in "),e("em",null,"|cognome|_esercizio_html_02.html")]),e("li",null,"Creare la struttura della pagina HTML inserendo anche i metadati appropriati"),e("li",null,"Impaginare il testo inserendo, in modo appropriato, gli heading necessari per titoli e sottotitoli"),e("li",null,"Suddividere il testo in paragrafi in modo opportuno"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_02.html")],-1),J3={__name:"36",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[G3,Q3,Y3]),_:1},16))}},Z3=E(J3,[["__file","/@slidev/slides/36.md"]]),X3=e("p",null," ",-1),eC={__name:"37",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[X3,S(i,{fs:"100px"},{default:v(()=>[s(" Elementi block e inline ")]),_:1})]),_:1},16)}}},nC=E(eC,[["__file","/@slidev/slides/37.md"]]),tC=e("h1",null,"Display Value",-1),aC=e("p",null,"Elementi inline e block",-1),sC=e("p",null,"Ogni elemento HTML ha un valore di display in funzione del tipo di elemento:",-1),oC=e("h3",null,[e("strong",null,"block"),s(" element")],-1),iC=e("ul",null,[e("li",null,"Un elemento block comincia sempre su una nuova linea"),e("li",null,"Un elemento block occupa tutta la larghezza possibile anche se non necessaria"),e("li",null,"Un elemento block ha un margine superiore ed inferiore")],-1),lC=e("pre",null,[s(`
`),e("div",{style:{border:"1px solid black",padding:"8px 0px 8px 5px"}},"The <div> element is a block-level element."),s(`
`),e("div",{style:{border:"1px solid black",padding:"8px 0px 8px 5px"}},"The <h1> element is another block-level element."),s(`
`)],-1),rC=e("p",null,"Qui la lista di tag di tipo block:",-1),cC=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("address")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("article")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("aside")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("blockquote")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("canvas")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("dd")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("div")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("dl")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("dt")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("fieldset")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("figcaption")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("figure")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("footer")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h1")]),e("span",{class:"token punctuation"},">")]),s("-"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h6")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("header")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("hr")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("main")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("nav")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("noscript")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ol")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("p")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("pre")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("section")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tfoot")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ul")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("video")]),e("span",{class:"token punctuation"},">")])])])],-1),uC={__name:"38",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[tC,aC,sC,oC,iC,lC,rC,S(i,Y({},{ranges:[""]}),{default:v(()=>[cC]),_:1},16)]),_:1},16)}}},pC=E(uC,[["__file","/@slidev/slides/38.md"]]),dC=e("h1",null,"Display Value",-1),mC=e("p",null,"Elementi inline e block",-1),fC=e("h3",null,[e("strong",null,"inline"),s(" element")],-1),hC=e("ul",null,[e("li",null,"Un elemento inline non comincia su una nuova linea"),e("li",null,"Un elemento inline occupa solo la larghezza minima necessaria")],-1),gC=e("br",null,null,-1),_C=e("pre",null,[s(""),e("p",null,[e("span",{style:{padding:"0px 5px 0px 5px",border:"1px solid black"}},"<span> is a inline-level element."),e("span",{style:{padding:"0px 5px 0px 5px",border:"1px solid black"}},"<input> is another inline-level element.")]),s(`
`)],-1),vC=e("p",null,"Qui la lista di tag di tipo block:",-1),kC=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("abbr")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("acronym")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("bdo")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("big")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("button")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("cite")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("code")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("dfn")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("em")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("i")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("kbd")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("map")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("object")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("output")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("q")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("samp")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("script")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("select")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("small")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("span")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("strong")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sub")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sup")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("textarea")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("time")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tt")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("var")]),e("span",{class:"token punctuation"},">")])])])],-1),bC={__name:"39",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[dC,mC,fC,hC,gC,_C,vC,S(i,Y({},{ranges:[""]}),{default:v(()=>[kC]),_:1},16)]),_:1},16)}}},yC=E(bC,[["__file","/@slidev/slides/39.md"]]),wC=e("h1",null,"DIV",-1),xC=e("p",null,"Contenitore di contenitori block",-1),TC=e("ul",null,[e("li",null,[s("Un tag estremamente importante nello sviluppo web moderno è "),e("strong",null,"<div>"),s(".")]),e("li",null,[e("strong",null,"<DIV>"),s(" è di tipo "),e("strong",null,"block"),s(" e definisce un generico blocco di contenuto senza una semantica particolare.")]),e("li",null,"E’ comunemente usato come contenitore per altri elementi HTML o altri div"),e("li",null,"Pertanto DIV è utilizzato per creare delle strutture di layout del contenuto web."),e("li",null,"Insieme a CSS è utilizzato per definire lo stile di blocchi di contenuto")],-1),$C=e("br",null,null,-1),zC=e("h3",null,"Esempio",-1),MC=e("div",{style:{"background-color":"red",color:"white",padding:"20px"}},[e("h2",null,"ATTENZIONE"),e("p",null,"Si richiede a tutti gli studenti di studiare e sperimentare il più possibile con HTML."),e("p",null,"Oggi tutte le moderne applicazioni sono sviluppate in HTML - CSS e JavaScript")],-1),LC={__name:"40",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[wC,xC,TC,$C,zC,MC]),_:1},16))}},CC=E(LC,[["__file","/@slidev/slides/40.md"]]),EC=e("h1",null,"SPAN",-1),IC=e("p",null,"Contenitore di contenitori inline",-1),SC=e("ul",null,[e("li",null,[s("Un tag estremamente importante nello sviluppo web moderno è "),e("strong",null,"<span>"),s(".")]),e("li",null,[s("Il tag "),e("strong",null,"<span>"),s(" definisce un generico contenitore di tipo "),e("strong",null,"inline"),s(" a cui non è associata nessuna semantica particolare.")]),e("li",null,"E’ comunemente usato per modificare una parte di testo in un paragrafo on in altre sezione di un documento HTML."),e("li",null,"Insieme a CSS è utilizzato per definire lo stile di parti di testo.")],-1),AC=e("br",null,null,-1),OC=e("h3",null,"Esempio",-1),HC=e("p",null,[s("Comunicato a tutti gli studenti: "),e("span",{style:{color:"white",background:"red","font-weight":"bold"}},"ATTENZIONE"),s(" Si richiede a tutti gli studenti di "),e("span",{style:{color:"darkolivegreen","font-weight":"bold"}},"studiare"),s(" e sperimentare il più possibile con HTML.")],-1),PC={__name:"41",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[EC,IC,SC,AC,OC,HC]),_:1},16))}},RC=E(PC,[["__file","/@slidev/slides/41.md"]]),NC=e("p",null," ",-1),FC={__name:"42",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[NC,S(i,{fs:"100px"},{default:v(()=>[s(" Ancore e Link ")]),_:1})]),_:1},16)}}},qC=E(FC,[["__file","/@slidev/slides/42.md"]]),WC=e("h1",null,"Ancore e Link",-1),DC=e("p",null,"Collegamenti a contenuti esterni",-1),jC=e("ul",null,[e("li",null,[s("I link sono alla base del concetto di "),e("em",null,"iptertesto"),s(", che a sua volta è alla base dello WWW.")]),e("li",null,[s("I link servono per creare dei "),e("em",null,"collegamenti"),s(" tra documenti diversi in modo da formare un unico "),e("em",null,"ipertesto"),s(".")]),e("li",null,[s("Un link ad una risorsa o documento esterno si crea usando il tag "),e("em",null,"ancora"),s(),e("strong",null,"<a>")])],-1),BC=e("br",null,null,-1),VC=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),s(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("url"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("link text"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("a")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},"Esempio"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),s(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://agnelli.it/"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"target"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("_blank"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Istituto Internazionale E.Agnelli"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("a")]),e("span",{class:"token punctuation"},">")])])])],-1),UC=e("p",null,[s("Qui puoi visitare L’"),e("a",{href:"https://agnelli.it/",target:"_parent"},"Istituto Internazionale E.Agnelli")],-1),KC=e("ul",null,[e("li",null,[e("strong",null,"href"),s(": attributo che definisce la destinazione dell’ancora e pertanto il link")]),e("li",null,[e("strong",null,"target"),s(": per default il link viene visualizzato nella finestra corrente del browser. Questo attributo permette di modificare il comportamento standard.")])],-1),GC=e("p",null,[s("Il principale valore per "),e("em",null,"target"),s(" è "),e("strong",null,"_blank"),s(", e permette di aprire il documento in un una nuova tab del browser.")],-1),QC={__name:"43",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[WC,DC,jC,BC,S(i,Y({},{ranges:[""]}),{default:v(()=>[VC]),_:1},16),UC,KC,GC]),_:1},16)}}},YC=E(QC,[["__file","/@slidev/slides/43.md"]]),JC=e("h1",null,"Ancore e Link",-1),ZC=e("p",null,"Collegamenti a contenuti esterni",-1),XC=e("p",null,[s("L’URL specificato nell’attributo "),e("em",null,"href"),s(" può essere:")],-1),eE=e("ul",null,[e("li",null,[e("strong",null,"assoluto"),s(": link ad una risorsa esterna nella forma canonica "),e("em",null,[e("a",{href:"https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",target:"_blank",rel:"noopener"},"https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")])]),e("li",null,[e("strong",null,"relativo"),s(": link relativo ad una risorsa locale, presente nello stesso server "),e("em",null,"/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")])],-1),nE=e("p",null,[s("Questo perchè, tutte le URL relative fanno riferimento ad una directory chiamata "),e("strong",null,"document root"),s(" che rappresenta la root del web server.")],-1),tE={__name:"44",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[JC,ZC,XC,eE,nE]),_:1},16))}},aE=E(tE,[["__file","/@slidev/slides/44.md"]]),sE=e("h1",null,"Esercizio html_03",-1),oE=e("p",null,"Link",-1),iE=e("ol",null,[e("li",null,[s("Modificare il file "),e("em",null,"|cognome|_esercizio_html_02.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_03.html")]),e("li",null,"Trasformare almeno 5 parole in link a risorse esterne"),e("li",null,"Trasformare altre 5 parole in modo che siano visualizzate in verde, blue o rosso"),e("li",null,"Selezionare almeno 2 frasi particolarmente importanti e inserirle in un rettangolo con sfondo blue e testo di color bianco."),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_03.html")],-1),lE=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),rE={__name:"45",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[sE,oE,iE,lE]),_:1},16))}},cE=E(rE,[["__file","/@slidev/slides/45.md"]]),uE=e("p",null," ",-1),pE={__name:"46",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[uE,S(i,{fs:"100px"},{default:v(()=>[s(" Web grafico con le immagini ")]),_:1})]),_:1},16)}}},dE=E(pE,[["__file","/@slidev/slides/46.md"]]),mE=e("h1",null,"Immagini",-1),fE=e("p",null,"Il Web diventa grafico",-1),hE=e("ul",null,[e("li",null,"La versione iniziale del WWW, prevedeva solo l’uso di informazioni testuali e non supportava l’uso di immagini all’interno delle pagine web."),e("li",null,"Con la nuova specifica HTML 2.0 del 1995, viene introdotto il nuovo tag <img> che permette di inserire immagini nelle pagine web.")],-1),gE=e("br",null,null,-1),_E=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),s(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("url"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"alt"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("alternatetext"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),vE=e("br",null,null,-1),kE=e("ul",null,[e("li",null,[e("strong",null,"src"),s(": attributo che specifica il percorso/link (relativo o assoluto) all’immagine")]),e("li",null,[e("strong",null,"alt"),s(": in caso in cui l’immagine non possa essere visualizzata, specifica un testo alternativo")])],-1),bE=e("p",null,"Normalmente si specificano anche gli attributi:",-1),yE=e("ul",null,[e("li",null,[e("strong",null,"width"),s(": specifica la larghezza dell’immaggine in pixel")]),e("li",null,[e("strong",null,"height"),s(": specifica l’altezza dell’immagine in pixel")])],-1),wE={__name:"47",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[mE,fE,hE,gE,S(i,Y({},{ranges:[""]}),{default:v(()=>[_E]),_:1},16),vE,kE,bE,yE]),_:1},16)}}},xE=E(wE,[["__file","/@slidev/slides/47.md"]]),TE=e("h1",null,"Immagini",-1),$E=e("p",null,"Il Web diventa grafico",-1),zE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),s(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("250"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"alt"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("primo web server"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},"/>")])])])],-1),ME=e("br",null,null,-1),LE=e("img",{src:"https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg",width:"250",alt:"primo web server"},null,-1),CE={__name:"48",setup(n){const t={};return z(C),(a,o)=>{const i=re,l=Ha("center");return b(),M(W,q(F(t)),{default:v(()=>[TE,$E,S(i,Y({},{ranges:[""]}),{default:v(()=>[zE]),_:1},16),ME,S(l,null,{default:v(()=>[LE]),_:1})]),_:1},16)}}},EE=E(CE,[["__file","/@slidev/slides/48.md"]]),IE=e("h1",null,"Immagini",-1),SE=e("p",null,"Il Web diventa grafico",-1),AE=e("ul",null,[e("li",null,"I tag HTML possono essere nidificati, cioè dichiarati uno dentro l’altro."),e("li",null,"Questa importante proprietà ci permette di creare un link grafico all’interno di una pagina web.")],-1),OE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),s(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("http://info.cern.ch/hypertext/WWW/TheProject.html"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"target"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("_blank"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),s(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("250"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"alt"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("primo web server"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("a")]),e("span",{class:"token punctuation"},">")])])])],-1),HE=e("a",{href:"http://info.cern.ch/hypertext/WWW/TheProject.html",target:"_blank"},[e("img",{src:"https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg",width:"200",alt:"primo web server"})],-1),PE={__name:"49",setup(n){const t={};return z(C),(a,o)=>{const i=re,l=Ha("center");return b(),M(W,q(F(t)),{default:v(()=>[IE,SE,AE,S(i,Y({},{ranges:[""]}),{default:v(()=>[OE]),_:1},16),S(l,null,{default:v(()=>[HE]),_:1})]),_:1},16)}}},RE=E(PE,[["__file","/@slidev/slides/49.md"]]),NE=e("h1",null,"Esercizio html_04",-1),FE=e("p",null,"Link",-1),qE=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_03.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_04.html")]),e("li",null,"Aggiungere almeno 1 immagine, relative al testo, come risorsa esterna (link assoluto)"),e("li",null,"Aggiungere almeno 1 immagine, relative al testo, come risorsa interna (link relativo)"),e("li",null,"Aggiungere almeno 1 immagine, relative al testo, che sia anche un link ad una pagina esterna"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_04.html")],-1),WE=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),DE={__name:"50",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[NE,FE,qE,WE]),_:1},16))}},jE=E(DE,[["__file","/@slidev/slides/50.md"]]),BE=e("p",null," ",-1),VE={__name:"51",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[BE,S(i,{fs:"80px"},{default:v(()=>[s(" Formattazione del testo in HTML ")]),_:1})]),_:1},16)}}},UE=E(VE,[["__file","/@slidev/slides/51.md"]]),KE=e("h1",null,"Formattazione del Testo",-1),GE=e("p",null,"Tag di formattazione",-1),QE=e("ul",null,[e("li",null,"HTML mette a disposizione 10 tag specifici per la definizione di testo con particolare significato."),e("li",null,"Questi tag definiscono la semantica e cioè il significato del testo che racchiudono."),e("li",null,"Il browser decide come visualizzare il testo racchiuso in questi tag")],-1),YE=e("br",null,null,-1),JE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s(": testo in grassetto senza significato aggiuntivo")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("strong")]),e("span",{class:"token punctuation"},">")]),s(": testo con molta importanza. Normalmente visualizzatto in grassetto")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("i")]),e("span",{class:"token punctuation"},">")]),s(": testo alternativo, un termine tecnico, una parola straniera. Normalmente visualizzato in italico")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("em")]),e("span",{class:"token punctuation"},">")]),s(": testo con particolare enfasi.Normalmente viene visualizzato in italico")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("mark")]),e("span",{class:"token punctuation"},">")]),s(": testo che deve essere evidenziato")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("small")]),e("span",{class:"token punctuation"},">")]),s(": testo con dimensioni minori e quindi con meno importanza")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("del")]),e("span",{class:"token punctuation"},">")]),s(": testo che è stato eliminato dal documento. Normalmente visualizzato con una linea sul testo")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ins")]),e("span",{class:"token punctuation"},">")]),s(": testo che è stato aggiunto al documento. Normalmente visualizzato come testo sottolineato")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sub")]),e("span",{class:"token punctuation"},">")]),s(": - definisce un testo come pedice")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sup")]),e("span",{class:"token punctuation"},">")]),s(": - definisce un testo come apice")])])],-1),ZE={__name:"52",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[KE,GE,QE,YE,S(i,Y({},{ranges:[""]}),{default:v(()=>[JE]),_:1},16)]),_:1},16)}}},XE=E(ZE,[["__file","/@slidev/slides/52.md"]]),eI=e("h1",null,"Formattazione del Testo",-1),nI=e("p",null,"Tag di formattazione",-1),tI=e("ul",null,[e("li",null,"bold")],-1),aI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("In un paragrafo spesso vogliamo poter evidenziare una parola in "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("grassetto"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s(".")])])],-1),sI=e("br",null,null,-1),oI=e("b",null,"grassetto",-1),iI=e("br",null,null,-1),lI=e("br",null,null,-1),rI=e("ul",null,[e("li",null,"strong")],-1),cI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Spesso è necessario definire una parola "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("strong")]),e("span",{class:"token punctuation"},">")]),s("molto importante"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("strong")]),e("span",{class:"token punctuation"},">")]),s(".")])])],-1),uI=e("br",null,null,-1),pI=e("strong",null,"molto importante",-1),dI=e("br",null,null,-1),mI=e("br",null,null,-1),fI=e("ul",null,[e("li",null,"italico")],-1),hI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Alcune volte è necessario definire un termine tecnico come "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("i")]),e("span",{class:"token punctuation"},">")]),s("Web Server"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("i")]),e("span",{class:"token punctuation"},">")])])])],-1),gI=e("br",null,null,-1),_I=e("i",null,"Web Server",-1),vI={__name:"53",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[eI,nI,tI,S(i,Y({},{ranges:[""]}),{default:v(()=>[aI]),_:1},16),sI,s("In un paragrafo spesso vogliamo poter evidenziare una parola in "),oI,s("."),iI,lI,rI,S(i,Y({},{ranges:[""]}),{default:v(()=>[cI]),_:1},16),uI,s("Spesso è necessario definire una parola "),pI,s("."),dI,mI,fI,S(i,Y({},{ranges:[""]}),{default:v(()=>[hI]),_:1},16),gI,s("Alcune volte è necessario definire un termine tecnico come "),_I]),_:1},16)}}},kI=E(vI,[["__file","/@slidev/slides/53.md"]]),bI=e("h1",null,"Formattazione del Testo",-1),yI=e("p",null,"Tag di formattazione",-1),wI=e("ul",null,[e("li",null,"enfasi")],-1),xI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("In un testo ci sono specifiche parole a cui si vuole dare "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("em")]),e("span",{class:"token punctuation"},">")]),s("enfasi"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("em")]),e("span",{class:"token punctuation"},">")]),s(".")])])],-1),TI=e("br",null,null,-1),$I=e("em",null,"enfasi",-1),zI=e("br",null,null,-1),MI=e("br",null,null,-1),LI=e("ul",null,[e("li",null,"mark")],-1),CI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Un altro modo per "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("mark")]),e("span",{class:"token punctuation"},">")]),s("evidenziare"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("mark")]),e("span",{class:"token punctuation"},">")]),s(" una o più parole è usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("mark"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")])])])],-1),EI=e("br",null,null,-1),II=e("mark",null,"evidenziare",-1),SI=e("b",null,"mark",-1),AI=e("br",null,null,-1),OI=e("br",null,null,-1),HI=e("ul",null,[e("li",null,"small")],-1),PI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Al contrario quando un testo "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("small")]),e("span",{class:"token punctuation"},">")]),s("è di poca importanza"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("small")]),e("span",{class:"token punctuation"},">")]),s(" si può usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("small"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")])])])],-1),RI=e("br",null,null,-1),NI=e("small",null,"è di poca importanza",-1),FI=e("b",null,"small",-1),qI={__name:"54",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[bI,yI,wI,S(i,Y({},{ranges:[""]}),{default:v(()=>[xI]),_:1},16),TI,s("In un testo ci sono specifiche parole a cui si vuole dare "),$I,s("."),zI,MI,LI,S(i,Y({},{ranges:[""]}),{default:v(()=>[CI]),_:1},16),EI,s("Un altro modo per "),II,s(" una o più parole è usare il tag "),SI,AI,OI,HI,S(i,Y({},{ranges:[""]}),{default:v(()=>[PI]),_:1},16),RI,s("Al contrario quando un testo "),NI,s(" si può usare il tag "),FI]),_:1},16)}}},WI=E(qI,[["__file","/@slidev/slides/54.md"]]),DI=e("h1",null,"Formattazione del Testo",-1),jI=e("p",null,"Tag di formattazione",-1),BI=e("ul",null,[e("li",null,"del e ins")],-1),VI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Il mio cibo preferito è il "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("del")]),e("span",{class:"token punctuation"},">")]),s("pollo"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("del")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ins")]),e("span",{class:"token punctuation"},">")]),s("tacchino"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("ins")]),e("span",{class:"token punctuation"},">")]),s(".")])])],-1),UI=e("br",null,null,-1),KI=e("del",null,"pollo",-1),GI=e("ins",null,"tacchino",-1),QI=e("br",null,null,-1),YI=e("br",null,null,-1),JI=e("ul",null,[e("li",null,"sub e sup")],-1),ZI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Il logaritmo in base 2 di 8 è 3: log"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sub")]),e("span",{class:"token punctuation"},">")]),s("2"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("sub")]),e("span",{class:"token punctuation"},">")]),s(" 8 = 3")]),s(`
`),e("span",{class:"line"},[s("In modo analogo 2 elevato alla 3 fa 8: 2"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sup")]),e("span",{class:"token punctuation"},">")]),s("3"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("sup")]),e("span",{class:"token punctuation"},">")]),s(" = 8")]),s(`
`),e("span",{class:"line"},[s("In generale gli "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sup")]),e("span",{class:"token punctuation"},">")]),s("apici"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("sup")]),e("span",{class:"token punctuation"},">")]),s(" si ottengono son il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("sup"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[s("mentre i "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sub")]),e("span",{class:"token punctuation"},">")]),s("pedici"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("sub")]),e("span",{class:"token punctuation"},">")]),s(" con il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("sub"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")])])])],-1),XI=e("br",null,null,-1),eS=e("sub",null,"2",-1),nS=e("p",null,[s("In modo analogo 2 elevato alla 3 fa 8: 2"),e("sup",null,"3"),s(" = 8")],-1),tS=e("p",null,[s("In generale gli "),e("sup",null,"apici"),s(" si ottengono son il tag "),e("b",null,"sup"),s(" mentre i "),e("sub",null,"pedici"),s(" con il tag "),e("b",null,"sub")],-1),aS={__name:"55",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[DI,jI,BI,S(i,Y({},{ranges:[""]}),{default:v(()=>[VI]),_:1},16),UI,s("Il mio cibo preferito è il "),KI,s(),GI,s("."),QI,YI,JI,S(i,Y({},{ranges:[""]}),{default:v(()=>[ZI]),_:1},16),XI,s("Il logaritmo in base 2 di 8 è 3: log"),eS,s(" 8 = 3 "),nS,tS]),_:1},16)}}},sS=E(aS,[["__file","/@slidev/slides/55.md"]]),oS=e("h1",null,"Esercizio html_05",-1),iS=e("p",null,"Link",-1),lS=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_04.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_05.html")]),e("li",null,"evidenziare 5 parole in bold"),e("li",null,"marcare 5 parole particolarmente importanti"),e("li",null,"evidenziare 5 parole alternative o termini tecnici"),e("li",null,"dare enfasi a 5 parole"),e("li",null,"evidenziare (mark) 5 parole significative"),e("li",null,"rendere più piccole 5 parole poco significative"),e("li",null,"marcare 5 parole come eliminate dal testo"),e("li",null,"marcare 5 parole come inserite nel testo"),e("li",null,"dove possibile marcare almeno 1 parola come apice ed 1 come pedice"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_05.html")],-1),rS=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),cS={__name:"56",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[oS,iS,lS,rS]),_:1},16))}},uS=E(cS,[["__file","/@slidev/slides/56.md"]]),pS=e("h1",null,"Formattazione del Testo",-1),dS=e("p",null,"Tag per Quotazioni e Citazioni",-1),mS=e("ul",null,[e("li",null,"HTML mette a disposizione 4 tag specifici per la definizione di testo che rappresenta una citazione o una quote."),e("li",null,"Questi tag definiscono la semantica e cioè il significato del testo che racchiudono."),e("li",null,"Il browser decide come visualizzare il testo racchiuso in questi tag")],-1),fS=e("br",null,null,-1),hS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("blockquote")]),e("span",{class:"token punctuation"},">")]),s(": definisce una porzione di testo come una citazione esterna")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("q")]),e("span",{class:"token punctuation"},">")]),s(": definisce una breve citazione")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("abbr")]),e("span",{class:"token punctuation"},">")]),s(": definisce un'abbreviazione o un acronimo")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("cite")]),e("span",{class:"token punctuation"},">")]),s(": citazione ad un lavoro altrui (libro, sito web, ...)")])])],-1),gS={__name:"57",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[pS,dS,mS,fS,S(i,Y({},{ranges:[""]}),{default:v(()=>[hS]),_:1},16)]),_:1},16)}}},_S=E(gS,[["__file","/@slidev/slides/57.md"]]),vS=e("h1",null,"Formattazione del Testo",-1),kS=e("p",null,"Tag per Quotazioni e Citazioni",-1),bS=e("ul",null,[e("li",null,"blockquote")],-1),yS=e("br",null,null,-1),wS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},'Alle volte in un testo si vuole "quotare" un altro autore.'),s(`
`),e("span",{class:"line"},"Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale."),s(`
`),e("span",{class:"line"},[s("Quindi con il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("blockquote"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s(" si può definire una quotazione")]),s(`
`),e("span",{class:"line"},"indicando la sorgente dell'informazione"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("blockquote")]),s(),e("span",{class:"token attr-name"},"cite"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://it.wikipedia.org/wiki/Giovanni_Bosco"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"  La sottrazione di benevolenza è un castigo che eccita l'emulazione"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("blockquote")]),e("span",{class:"token punctuation"},">")])])])],-1),xS=e("br",null,null,-1),TS=e("b",null,"blockquote",-1),$S=e("blockquote",{cite:"https://it.wikipedia.org/wiki/Giovanni_Bosco"}," La sottrazione di benevolenza è un castigo che eccita l'emulazione ",-1),zS=e("br",null,null,-1),MS=e("ul",null,[e("li",null,"Come si può notare la citazione è indentata. Il link alla citazione non ha un effetto visivo ma può essere utile al motore di ricerca o altri tool.")],-1),LS={__name:"58",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[vS,kS,bS,yS,S(i,Y({},{ranges:[""]}),{default:v(()=>[wS]),_:1},16),xS,s(` Alle volte in un testo si vuole "quotare" un altro autore. Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale. Quindi con il tag `),TS,s(" si può definire una quotazione indicando la sorgente dell'informazione "),$S,zS,MS]),_:1},16)}}},CS=E(LS,[["__file","/@slidev/slides/58.md"]]),ES=e("h1",null,"Formattazione del Testo",-1),IS=e("p",null,"Tag per Quotazioni e Citazioni",-1),SS=e("ul",null,[e("li",null,"quotazione")],-1),AS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Quando in un testo vogliamo fare una "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("q")]),e("span",{class:"token punctuation"},">")]),s("breve citazione"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("q")]),e("span",{class:"token punctuation"},">")]),s(", basta inserire il testo nel tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("q"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")])])])],-1),OS=e("br",null,null,-1),HS=e("q",null,"breve citazione",-1),PS=e("b",null,"q",-1),RS=e("br",null,null,-1),NS=e("br",null,null,-1),FS=e("ul",null,[e("li",null,"abbreviazione")],-1),qS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("abbr")]),s(),e("span",{class:"token attr-name"},"title"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Gnu is Not Unix"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("GNU"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("abbr")]),e("span",{class:"token punctuation"},">")]),s("di GNU/Linux sembra una  parola ma in realtà è un acronimo.")])])],-1),WS=e("br",null,null,-1),DS=e("abbr",{title:"Gnu is Not Unix"},"GNU",-1),jS=e("br",null,null,-1),BS=e("br",null,null,-1),VS=e("ul",null,[e("li",null,"citazione lavoro altrui")],-1),US=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Un alternativa per una citazione è usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("cite"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s(". ")]),s(`
`),e("span",{class:"line"},[s("In una disicussione accesa Linus disse: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("cite")]),e("span",{class:"token punctuation"},">")]),s('"Parlare è facile. Mostrami il codice".'),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("cite")]),e("span",{class:"token punctuation"},">")])])])],-1),KS=e("br",null,null,-1),GS=e("b",null,"cite",-1),QS=e("cite",null,'"Parlare è facile. Mostrami il codice".',-1),YS={__name:"59",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[ES,IS,SS,S(i,Y({},{ranges:[""]}),{default:v(()=>[AS]),_:1},16),OS,s("Quando in un testo vogliamo fare una "),HS,s(", basta inserire il testo nel tag "),PS,s(),RS,NS,FS,S(i,Y({},{ranges:[""]}),{default:v(()=>[qS]),_:1},16),WS,DS,s(" di GNU/Linux sembra una parola ma in realtà è un acronimo."),jS,BS,VS,S(i,Y({},{ranges:[""]}),{default:v(()=>[US]),_:1},16),KS,s("Un alternativa per una citazione è usare il tag "),GS,s(". In una disicussione accesa Linus disse: "),QS]),_:1},16)}}},JS=E(YS,[["__file","/@slidev/slides/59.md"]]),ZS=e("h1",null,"Esercizio html_06",-1),XS=e("p",null,"Link",-1),e5=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_05.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_06.html")]),e("li",null,"creare una citazione per un blocco di testo"),e("li",null,"marcare 3 frasi o parole come brevi citazioni"),e("li",null,"marcare almeno 3 abbreviazioni"),e("li",null,"marcare 1 citazione (cite) di qualche altro autore"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_06.html")],-1),n5=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),t5={__name:"60",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[ZS,XS,e5,n5]),_:1},16))}},a5=E(t5,[["__file","/@slidev/slides/60.md"]]),s5=e("h1",null,"Formattazione del Testo",-1),o5=e("p",null,"Tag addizionali",-1),i5=e("ul",null,[e("li",null,"Ci sono altri tag che formattano il testo ma che non hanno una semantica particolare.")],-1),l5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("u")]),e("span",{class:"token punctuation"},">")]),s(": definisce un testo sottolineato")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("s")]),e("span",{class:"token punctuation"},">")]),s(": definisce una testo sbarrato")]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("pre")]),e("span",{class:"token punctuation"},">")]),s(": marca una porzione di testo come pre formattato")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("code")]),e("span",{class:"token punctuation"},">")]),s(": definisce un blocco di testo come codice sorgente")])])],-1),r5=e("br",null,null,-1),c5=e("ul",null,[e("li",null,"sottolineato")],-1),u5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Se si vuole "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("u")]),e("span",{class:"token punctuation"},">")]),s("sottolineare"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("u")]),e("span",{class:"token punctuation"},">")]),s(" una parola basta usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("u")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("u")]),e("span",{class:"token punctuation"},">")])])])],-1),p5=e("br",null,null,-1),d5=e("u",null,"sottolineare",-1),m5=e("br",null,null,-1),f5=e("br",null,null,-1),h5=e("ul",null,[e("li",null,"sbarrato")],-1),g5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Se si vuole "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("s")]),e("span",{class:"token punctuation"},">")]),s("sbarrare"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("s")]),e("span",{class:"token punctuation"},">")]),s(" una parola basta usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("s")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("s")]),e("span",{class:"token punctuation"},">")])])])],-1),_5=e("br",null,null,-1),v5=e("s",null,"sbarrare",-1),k5={__name:"61",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[s5,o5,i5,S(i,Y({},{ranges:[""]}),{default:v(()=>[l5]),_:1},16),r5,c5,S(i,Y({},{ranges:[""]}),{default:v(()=>[u5]),_:1},16),p5,s("Se si vuole "),d5,s(" una parola basta usare il tag <u> "),m5,f5,h5,S(i,Y({},{ranges:[""]}),{default:v(()=>[g5]),_:1},16),_5,s("Se si vuole "),v5,s(" una parola basta usare il tag <s> ")]),_:1},16)}}},b5=E(k5,[["__file","/@slidev/slides/61.md"]]),y5=e("h1",null,"Formattazione del Testo",-1),w5=e("p",null,"Tag addizionali",-1),x5=e("ul",null,[e("li",null,"codice sorgente")],-1),T5=e("br",null,null,-1),$5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Spesso negli articoli informatici vengono riportati comandi o porzioni di codice."),s(`
`),e("span",{class:"line"},[s("Per farlo in modo corretto usa il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("code"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s("."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("Per installare vscode in Linux usa il comando: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("code")]),e("span",{class:"token punctuation"},">")]),s("apt install vscode"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("code")]),e("span",{class:"token punctuation"},">")])])])],-1),z5=e("br",null,null,-1),M5=e("ul",null,[e("li",null,"Spesso negli articoli informatici vengono riportati comandi o porzioni di codice."),e("li",null,[s("Per farlo in modo corretto usa il tag "),e("b",null,"code"),s("."),e("br")])],-1),L5=e("br",null,null,-1),C5=e("code",null,"apt install vscode",-1),E5={__name:"62",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[y5,w5,x5,T5,S(i,Y({},{ranges:[""]}),{default:v(()=>[$5]),_:1},16),z5,M5,L5,s(" Per installare vscode in Linux usa il comando: "),C5]),_:1},16)}}},I5=E(E5,[["__file","/@slidev/slides/62.md"]]),S5=e("h1",null,"Formattazione del Testo",-1),A5=e("p",null,"Tag addizionali",-1),O5=e("ul",null,[e("li",null,"pre formattato")],-1),H5=e("br",null,null,-1),P5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Negli articoli può essere necessario riportare una porzione di testo con una formattazione specifica."),s(`
`),e("span",{class:"line"},[s("Per evitare che il browser foramtti il testo in modo autonomo usa il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("pre"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s(". "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("pre")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"    Questo testo       viene visualizzato esatta "),s(`
`),e("span",{class:"line"},"    mente come fornito dallo sviluppatore.    "),s(`
`),e("span",{class:"line"},"    Venogno rispettrati    gli spazi e i ritorni "),s(`
`),e("span",{class:"line"},"    a "),s(`
`),e("span",{class:"line"},"    capo."),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("pre")]),e("span",{class:"token punctuation"},">")])])])],-1),R5=e("br",null,null,-1),N5=e("br",null,null,-1),F5=e("pre",null,`    Questo testo       viene visualizzato esatta 
    mente come fornito dallo sviluppatore.    
    Venogno rispettrati    gli spazi e i ritorni 
    a 
    capo.
`,-1),q5={__name:"63",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[S5,A5,O5,H5,S(i,Y({},{ranges:[""]}),{default:v(()=>[P5]),_:1},16),R5,N5,F5]),_:1},16)}}},W5=E(q5,[["__file","/@slidev/slides/63.md"]]),D5=e("h1",null,"Esercizio html_07",-1),j5=e("p",null,"Link",-1),B5=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_06.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_07.html")]),e("li",null,"marcare 5 parole come sottolineate"),e("li",null,"marcare 5 parole come sbarrate"),e("li",null,"aggiungere una porzione di codice sorgente o comando linux"),e("li",null,"aggiungere una sezione di testo pre formattata"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_07.html")],-1),V5=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),U5={__name:"64",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[D5,j5,B5,V5]),_:1},16))}},K5=E(U5,[["__file","/@slidev/slides/64.md"]]),G5=e("h1",null,"Formattazione del Testo",-1),Q5=e("p",null,"Tag addizionali",-1),Y5=e("ul",null,[e("li",null,[e("p",null,"Durante la realizzazione di una pagina web ci possono essere delle esigenze particolari di formattazione.")]),e("li",null,[e("p",null,"HTML fornisce altri tag aggiuntivi utili per forzare un ritorno a capo e per visualizzare una linea di suddivisione orizzontale")]),e("li",null,[e("p",null,"ritorno a capo")])],-1),J5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("In alcuni casi è necessario forzare un ritorno a capo. "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("Per fare ciò basta usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])])])],-1),Z5=e("br",null,null,-1),X5=e("br",null,null,-1),eA=e("br",null,null,-1),nA=e("br",null,null,-1),tA=e("br",null,null,-1),aA=e("ul",null,[e("li",null,"linea orizzontale")],-1),sA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Per inserire una linea orizzontale di separazione usa "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("hr")]),e("span",{class:"token punctuation"},">")])])])],-1),oA=e("br",null,null,-1),iA=e("hr",{style:{height:"5px","background-color":"grey"}},null,-1),lA={__name:"65",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[G5,Q5,Y5,S(i,Y({},{ranges:[""]}),{default:v(()=>[J5]),_:1},16),Z5,s(" In alcuni casi è necessario forzare un ritorno a capo. "),X5,eA,s("Per fare ciò basta usare il tag <br>"),nA,tA,aA,S(i,Y({},{ranges:[""]}),{default:v(()=>[sA]),_:1},16),oA,iA]),_:1},16)}}},rA=E(lA,[["__file","/@slidev/slides/65.md"]]),cA=e("h1",null,"Formattazione del Testo",-1),uA=e("p",null,"Tag addizionali",-1),pA=e("ul",null,[e("li",null,"barra per metrica")],-1),dA=e("br",null,null,-1),mA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("Andamento dei voti:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("Studente 1 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("8.0"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("8 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 2 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("6.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("6.5 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 3 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("9.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("9.5 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 4 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("4.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("4.5 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])])])],-1),fA=e("br",null,null,-1),hA=e("p",null,[s("Andamento dei voti:"),e("br")],-1),gA=e("p",null,[s("Studente 1 "),e("meter",{min:"0",max:"10",value:"8.0"},"8 su 10"),e("br"),s(" Studente 2 "),e("meter",{min:"0",max:"10",value:"6.5"},"6.5 su 10"),e("br"),s(" Studente 3 "),e("meter",{min:"0",max:"10",value:"9.5"},"9.5 su 10"),e("br"),s(" Studente 4 "),e("meter",{min:"0",max:"10",value:"4.5"},"4.5 su 10"),e("br")],-1),_A={__name:"66",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[cA,uA,pA,dA,S(i,Y({},{ranges:[""]}),{default:v(()=>[mA]),_:1},16),fA,s(" Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag <meter> "),hA,gA]),_:1},16)}}},vA=E(_A,[["__file","/@slidev/slides/66.md"]]),kA=e("h1",null,"Formattazione del Testo",-1),bA=e("p",null,"Tag addizionali",-1),yA=e("ul",null,[e("li",null,"barra di progresso")],-1),wA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("In alternativa si può visualizzare un progress bar tramite l'uso del tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("Andamento dei voti:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("Studente 1 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("8"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("8 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 2 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("6.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("6.5 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 3 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("9.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("9.5 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 4 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("4.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("4.5 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])])])],-1),xA=e("br",null,null,-1),TA=e("p",null,[s("Andamento dei voti:"),e("br")],-1),$A=e("p",null,[s("Studente 1 "),e("progress",{min:"0",max:"10",value:"8"},"8 di 10"),e("br"),s(" Studente 2 "),e("progress",{min:"0",max:"10",value:"6.5"},"6.5 di 10"),e("br"),s(" Studente 3 "),e("progress",{min:"0",max:"10",value:"9.5"},"9.5 di 10"),e("br"),s(" Studente 4 "),e("progress",{min:"0",max:"10",value:"4.5"},"4.5 di 10"),e("br")],-1),zA={__name:"67",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[kA,bA,yA,S(i,Y({},{ranges:[""]}),{default:v(()=>[wA]),_:1},16),xA,s(" In alternativa si può visualizzare un progress bar tramite l'uso del tag <progress> "),TA,$A]),_:1},16)}}},MA=E(zA,[["__file","/@slidev/slides/67.md"]]),LA=e("h1",null,"Esercizio html_08",-1),CA=e("p",null,"Link",-1),EA=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_07.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_08.html")]),e("li",null,"Inserire 5 ritorni a capo forzati"),e("li",null,"Inserire 3 linee orizzontali di separazione"),e("li",null,"Inserire 5 meter bar"),e("li",null,"Inserire 5 progress bar"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_08.html")],-1),IA=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),SA={__name:"68",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[LA,CA,EA,IA]),_:1},16))}},AA=E(SA,[["__file","/@slidev/slides/68.md"]]),OA=e("p",null," ",-1),HA={__name:"69",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[OA,S(i,{fs:"100px"},{default:v(()=>[s(" Caratteri speciali in HTML ")]),_:1})]),_:1},16)}}},PA=E(HA,[["__file","/@slidev/slides/69.md"]]),RA=e("h1",null,"HTML Entities",-1),NA=e("p",null,"Uso di caratteri riservati",-1),FA=e("ul",null,[e("li",null,"Nella realizzazione di una pagina web, non è possibile usare tutti i caratteri disponibili."),e("li",null,"Alcuni caratteri sono riservati dallo standard HTML per usi specifici."),e("li",null,"Per esempio i caratteri < e > sono riservati in quanto servono per delimitare un tag HTML."),e("li",null,[s("Per inserire i caratteri riservati come parte del contenuto di una pagina HTML, si devono sostituire con "),e("em",null,[e("strong",null,"HTML entities")])])],-1),qA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"&entity_name;"),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},"oppure "),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},"&#entity_number;")])],-1),WA=e("ul",null,[e("li",null,"Pertanto il carattere < e > sono rappresentati in questo modo")],-1),DA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("< --> "),e("span",{class:"token entity named-entity",title:"<"},"&lt;"),s(" o "),e("span",{class:"token entity",title:"<"},"&#60;")]),s(`
`),e("span",{class:"line"},[s("> --> "),e("span",{class:"token entity named-entity",title:">"},"&gt;"),s(" o "),e("span",{class:"token entity",title:">"},"&#62;")])])],-1),jA={__name:"70",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[RA,NA,FA,S(i,Y({},{ranges:[""]}),{default:v(()=>[qA]),_:1},16),WA,S(i,Y({},{ranges:[""]}),{default:v(()=>[DA]),_:1},16),s(" [Qui si può consultare la lista completa di entities HTML.](https://www.freeformatter.com/html-entities.html) ")]),_:1},16)}}},BA=E(jA,[["__file","/@slidev/slides/70.md"]]),VA=e("h1",null,"HTML Entities",-1),UA=e("p",null,"Uso di caratteri riservati",-1),KA=e("ul",null,[e("li",null,"In alcune occasioni è necessario indicare al browser di non andare a capo."),e("li",null,[s("Per fare ciò si usa il carattere "),e("em",null,"non breaking space")]),e("li",null,"In altre parole inserendo questo carattere, si inserisce uno spazio che non può mandare la linea a capo")],-1),GA=e("br",null,null,-1),QA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"non breaking space"),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{class:"token entity named-entity",title:" "},"&nbsp;")])])],-1),YA=e("br",null,null,-1),JA=e("ul",null,[e("li",null,"In modo analogo, ricordiamoci che se inserisco 10 spazi, il browser ne rimuove 9"),e("li",null,[s("Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte "),e("code",null,"&nbsp;")])],-1),ZA={__name:"71",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[VA,UA,KA,GA,S(i,Y({},{ranges:[""]}),{default:v(()=>[QA]),_:1},16),YA,JA]),_:1},16)}}},XA=E(ZA,[["__file","/@slidev/slides/71.md"]]),e6=e("h1",null,"HTML Entities",-1),n6=e("p",null,"Uso di caratteri riservati",-1),t6=e("ul",null,[e("li",null,"Qui una lista di HTML entities comuemente usate")],-1),a6=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Carattere"),e("th",null,"Descizione"),e("th",null,"Nome Entità"),e("th",null,"Numero Entità")])]),e("tbody",null,[e("tr",null,[e("td"),e("td",null,"non-breaking space"),e("td",null,[e("code",null,"&nbsp;")]),e("td",null,[e("code",null,"&#160;")])]),e("tr",null,[e("td",null,"<"),e("td",null,"less than"),e("td",null,[e("code",null,"&lt;")]),e("td",null,[e("code",null,"&#60;")])]),e("tr",null,[e("td",null,">"),e("td",null,"greater than"),e("td",null,[e("code",null,"&gt;")]),e("td",null,[e("code",null,"&#62;")])]),e("tr",null,[e("td",null,[e("code",null,"&")]),e("td",null,"ampersand"),e("td",null,[e("code",null,"&amp;")]),e("td",null,[e("code",null,"&#38;")])]),e("tr",null,[e("td",null,'"'),e("td",null,"double quotation mark"),e("td",null,[e("code",null,"&quot;")]),e("td",null,[e("code",null,"&#34;")])]),e("tr",null,[e("td",null,"’"),e("td",null,"single quotation mark (apostrophe)"),e("td",null,[e("code",null,"&apos;")]),e("td",null,[e("code",null,"&#39;")])]),e("tr",null,[e("td",null,"€"),e("td",null,"euro"),e("td",null,[e("code",null,"&euro;")]),e("td",null,[e("code",null,"&#8364;")])]),e("tr",null,[e("td",null,"©"),e("td",null,"copyright"),e("td",null,[e("code",null,"&copy;")]),e("td",null,[e("code",null,"&#169;")])])])],-1),s6={__name:"72",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[e6,n6,t6,a6]),_:1},16))}},o6=E(s6,[["__file","/@slidev/slides/72.md"]]),i6=e("p",null," ",-1),l6={__name:"73",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[i6,S(i,{fs:"90px"},{default:v(()=>[s(" Liste (non)ordinate ")]),_:1})]),_:1},16)}}},r6=E(l6,[["__file","/@slidev/slides/73.md"]]),c6=e("h1",null,"Liste",-1),u6=e("p",null,"Lista di elementi correlati",-1),p6=e("ul",null,[e("li",null,"In un testo o un articolo, risulta particolarmente utile organizzare il contenuto in modo schematico e rappresentare le informazioni tramite una lista."),e("li",null,"HTML mette a disposizione specifici tag per la generazione di liste di elementi")],-1),d6=e("p",null,"Ci sono 2 tipi principali di liste:",-1),m6=e("ol",null,[e("li",null,[e("strong",null,"Unordered List"),s(" (Liste non ordinate)")]),e("li",null,[e("strong",null,"Ordered List"),s(" (Liste ordinate)")])],-1),f6=e("br",null,null,-1),h6=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("h3",null,"Lista non ordinata"),e("ul",null,[e("li",null,"Pere"),e("li",null,"Patate"),e("li",null,"Mele"),e("li",null,"Carote")])]),e("div",null,[e("h3",null,"Lista ordinata"),e("ol",null,[e("li",null,"CPU: Central Processing Unit"),e("li",null,"RAM: Random Access Memeory"),e("li",null,"HDD: Hard Disk Drive"),e("li",null,"SSD: Solid State Disk")])])],-1),g6={__name:"74",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[c6,u6,p6,d6,m6,f6,h6]),_:1},16))}},_6=E(g6,[["__file","/@slidev/slides/74.md"]]),v6=e("h1",null,"Liste",-1),k6=e("p",null,"Lista di elementi correlati",-1),b6=e("h3",null,"Lista non ordinata",-1),y6=e("p",null,"Le liste di tipo non ordinato che si creano con 2 tag:",-1),w6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ul")]),e("span",{class:"token punctuation"},">")]),s(": Unordered List - tag che definisce la lista non ordinata ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s(": List Item - tag che definisce l'elemento/item della lista")])])],-1),x6=e("br",null,null,-1),T6={grid:"~ cols-2 gap-32"},$6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Esempio: Vegetali"),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ul")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("Pere"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("Patate"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("Mele"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("Carote"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("ul")]),e("span",{class:"token punctuation"},">")])])])],-1),z6=e("div",null,[e("p",null,"Esempio: Vegetali"),e("ul",null,[e("li",null,"Pere"),e("li",null,"Patate"),e("li",null,"Mele"),e("li",null,"Carote")])],-1),M6={__name:"75",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[v6,k6,b6,y6,S(i,Y({},{ranges:[""]}),{default:v(()=>[w6]),_:1},16),x6,e("div",T6,[e("div",null,[S(i,Y({},{ranges:[""]}),{default:v(()=>[$6]),_:1},16)]),z6])]),_:1},16)}}},L6=E(M6,[["__file","/@slidev/slides/75.md"]]),C6=e("h1",null,"Liste",-1),E6=e("p",null,"Lista di elementi correlati",-1),I6=e("h3",null,"Lista ordinata",-1),S6=e("p",null,"Le liste di tipo ordinato che si creano con 2 tag:",-1),A6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ol")]),e("span",{class:"token punctuation"},">")]),s(": Ordered List - tag che definisce la lista ordinata ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s(": List Item - tag che definisce l'elemento/item della lista")])])],-1),O6=e("br",null,null,-1),H6={grid:"~ cols-2 gap-32"},P6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Esempio: I componenti di un computer"),s(`
`),e("span",{class:"line"},"       "),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ol")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("CPU: Central Processing Unit"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("RAM: Random Access Memeory"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("HDD: Hard Disk Drive"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("SSD: Solid State Disk"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("ol")]),e("span",{class:"token punctuation"},">")])])])],-1),R6=e("div",null,[e("p",null,"Esempio: I componenti di un computer"),e("ol",null,[e("li",null,"CPU: Central Processing Unit"),e("li",null,"RAM: Random Access Memeory"),e("li",null,"HDD: Hard Disk Drive"),e("li",null,"SSD: Solid State Disk")])],-1),N6={__name:"76",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[C6,E6,I6,S6,S(i,Y({},{ranges:[""]}),{default:v(()=>[A6]),_:1},16),O6,e("div",H6,[e("div",null,[S(i,Y({},{ranges:[""]}),{default:v(()=>[P6]),_:1},16)]),R6])]),_:1},16)}}},F6=E(N6,[["__file","/@slidev/slides/76.md"]]),q6=e("h1",null,"Esercizio html_09",-1),W6=e("p",null,"Link",-1),D6=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_08.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_09.html")]),e("li",null,"Inserire 5 caratteri speciali in modo congruo con il testo"),e("li",null,"Creare 1 lista ordinata in modo congruo con il testo"),e("li",null,"Creare 1 lista non ordinata in modo congruo con il testo"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_09.html")],-1),j6=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),B6={__name:"77",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[q6,W6,D6,j6]),_:1},16))}},V6=E(B6,[["__file","/@slidev/slides/77.md"]]),U6=e("p",null," ",-1),K6={__name:"78",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[U6,S(i,{fs:"75px"},{default:v(()=>[s(" Rappresentazioni tabulari con le Tabelle ")]),_:1})]),_:1},16)}}},G6=E(K6,[["__file","/@slidev/slides/78.md"]]),Q6=e("h1",null,"Tabelle",-1),Y6=e("p",null,"Organizzazione tabulare dei contenuti",-1),J6=e("ul",null,[e("li",null,"In passato lo sviluppo web era ampiamente basato sull’uso di tabelle"),e("li",null,"Principalmente le tabelle venivano usato per creare il layout della pagina Web"),e("li",null,"Tuttavia questo metodo era laborioso e poco funzionale in quanto il supporto delle tabelle dai vari browser non era omogeneo."),e("li",null,"Oggi il layout di una pagine, NON si realizza più con le tabelle ma con il blocco DIV."),e("li",null,"Tuttavia lo scopo originario delle tabelle, cioè visualizzare contenuti in formato tabellare rimane valido.")],-1),Z6=e("p",null,"I principlai tag per la definizione di una tabella sono:",-1),X6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),e("span",{class:"token punctuation"},">")]),s(": definisce un contenitore per dati organizzati in formato tabellare")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("caption")]),e("span",{class:"token punctuation"},">")]),s(": definisce il titolo di una tabella")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("thead")]),e("span",{class:"token punctuation"},">")]),s(": definisce l'header della tabella")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")]),s(": definisce una riga della tabella")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s(": definisce una cella della tabella.")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tbody")]),e("span",{class:"token punctuation"},">")]),s(": definisce il corpo principale della tabella")])])],-1),eO={__name:"79",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[Q6,Y6,J6,Z6,S(i,Y({},{ranges:[""]}),{default:v(()=>[X6]),_:1},16)]),_:1},16)}}},nO=E(eO,[["__file","/@slidev/slides/79.md"]]),tO=e("h1",null,"Tabelle",-1),aO=e("p",null,"Organizzazione tabulare dei contenuti",-1),sO={grid:"~ cols-2 gap-4"},oO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),s(),e("span",{class:"token attr-name"},"border"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("1"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
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
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("table")]),e("span",{class:"token punctuation"},">")])])])],-1),iO=e("div",null,[e("table",{border:"1"},[e("caption",null,"A AND B"),e("thead",null,[e("tr",null,[e("td",null,"A"),s(),e("td",null,"B"),s(),e("td",null,"A & B")])]),e("tbody",null,[e("tr",null,[e("td",null,"0"),s(),e("td",null,"0"),s(),e("td",null,"0")]),e("tr",null,[e("td",null,"0"),s(),e("td",null,"1"),s(),e("td",null,"0")]),e("tr",null,[e("td",null,"1"),s(),e("td",null,"0"),s(),e("td",null,"0")]),e("tr",null,[e("td",null,"1"),s(),e("td",null,"1"),s(),e("td",null,"1")])])])],-1),lO={__name:"80",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[tO,aO,e("div",sO,[e("div",null,[S(i,Y({},{ranges:[""]}),{default:v(()=>[oO]),_:1},16)]),iO])]),_:1},16)}}},rO=E(lO,[["__file","/@slidev/slides/80.md"]]),cO=e("h1",null,"Tabelle",-1),uO=e("p",null,"Organizzazione tabulare dei contenuti",-1),pO={grid:"~ cols-2 gap-4"},dO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),s(),e("span",{class:"token attr-name"},"border"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("1"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
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
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("table")]),e("span",{class:"token punctuation"},">")])])])],-1),mO=e("div",null,[e("table",{border:"1"},[e("caption",null,"A OR B"),e("thead",{style:{background:"gray","text-align":"center"}},[e("tr",null,[e("td",null,"A"),s(),e("td",null,"B"),s(),e("td",null,"A | B")])]),e("tbody",{style:{color:"blue","text-align":"center"}},[e("tr",null,[e("td",null,"0"),s(),e("td",null,"0"),s(),e("td",null,"0")]),e("tr",{style:{background:"Gainsboro"}},[e("td",null,"0"),s(),e("td",null,"1"),s(),e("td",null,"1")]),e("tr",null,[e("td",null,"1"),s(),e("td",null,"0"),s(),e("td",null,"1")]),e("tr",{style:{background:"Gainsboro"}},[e("td",null,"1"),s(),e("td",null,"1"),s(),e("td",null,"1")])])])],-1),fO={__name:"81",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[cO,uO,e("div",pO,[e("div",null,[S(i,Y({},{ranges:[""]}),{default:v(()=>[dO]),_:1},16)]),mO])]),_:1},16)}}},hO=E(fO,[["__file","/@slidev/slides/81.md"]]),gO=e("h1",null,"Esercizio html_10",-1),_O=e("p",null,"Link",-1),vO=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_09.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_10.html")]),e("li",null,"Creare 1 tabella modo congruo con il testo"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_10.html")],-1),kO=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),bO={__name:"82",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[gO,_O,vO,kO]),_:1},16))}},yO=E(bO,[["__file","/@slidev/slides/82.md"]]),wO="/3/html/assets/html5_12-3c070a3c.jpg",xO=e("h1",null,"Esercizio html_11",-1),TO=e("p",null,"Tabelle",-1),$O=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ol",null,[e("li",null,"Realizzare in HTML con l’uso delle tabelle il menù del ristorante qui a fianco"),e("li",null,"Obiettivo non è riprodurlo fedelmente con colori ed effetti, ma riprodurne il layout tramite l’uso delle tabelle"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_11.html")])]),e("div",null,[e("img",{src:wO,width:"370",style:{float:"right",position:"relative",top:"-100px"}})])],-1),zO={__name:"83",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[xO,TO,$O]),_:1},16))}},MO=E(zO,[["__file","/@slidev/slides/83.md"]]),LO=e("p",null," ",-1),CO={__name:"84",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[LO,S(i,{fs:"80px"},{default:v(()=>[s(" Interagiamo con l'utente attraverso i From ")]),_:1})]),_:1},16)}}},EO=E(CO,[["__file","/@slidev/slides/84.md"]]),IO=e("h1",null,"Form",-1),SO=e("p",null,"Input dall’utente",-1),AO=e("ul",null,[e("li",null,"Il form (letteralmente modulo) indica la parte di interfaccia utente di un’applicazione web che consente all’utente di inserire e inviare al web server/application server uno o più dati."),e("li",null,[s("Il form è composto da un contenitore e da componenti grafici detti "),e("strong",null,"widget"),s(" che compongono il form stesso.")]),e("li",null,"I widget comunemente presenti nelle pagine web sono: le caselle di testo, i menu a tendina, i date-picker, …")],-1),OO=e("p",null,"Il form si crea usando il tag:",-1),HO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"..."),s(`
`),e("span",{class:"line"},"...widget del form"),s(`
`),e("span",{class:"line"},"...."),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),PO=e("p",null,"I principali widget sono:",-1),RO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("select")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("textarea")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("button")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("fieldset")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("legend")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("datalist")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),e("span",{class:"token punctuation"},">")])])])],-1),NO={__name:"85",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[IO,SO,AO,OO,S(i,Y({},{ranges:[""]}),{default:v(()=>[HO]),_:1},16),PO,S(i,Y({},{ranges:[""]}),{default:v(()=>[RO]),_:1},16)]),_:1},16)}}},FO=E(NO,[["__file","/@slidev/slides/85.md"]]),qO=e("h1",null,"Form",-1),WO=e("p",null,"<input>",-1),DO=e("ul",null,[e("li",null,"Uno dei widget più importanti ed utilizzati è <input>"),e("li",null,"Permette di ricevere un input dall’utente"),e("li",null,[s("Questo widget può assumere molte forme diverse in funzione dell’attributo "),e("em",null,"type")])],-1),jO=e("br",null,null,-1),BO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idnome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Nome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idcognome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cognnome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Cognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),VO=e("p",null,[e("br"),e("br"),e("input",{type:"text",id:"idnome",name:"nome",placeholder:"Nome",style:{border:"1px solid black",background:"Gainsboro"}}),s(),e("br"),e("br"),e("input",{type:"text",id:"idcognome",name:"cognome",placeholder:"Cognome",style:{border:"1px solid black",background:"Gainsboro"}})],-1),UO={__name:"86",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[qO,WO,DO,jO,S(i,Y({},{ranges:[""]}),{default:v(()=>[BO]),_:1},16),VO]),_:1},16)}}},KO=E(UO,[["__file","/@slidev/slides/86.md"]]),GO=e("h1",null,"Form",-1),QO=e("p",null,"<label>",-1),YO=e("ul",null,[e("li",null,[s("L’elemento "),e("em",null,"label"),s(" specifica una label per diversi tipi di widget di un form")]),e("li",null,"Questo tag è molto importante in quanto gli screen-reader, per persone ipovedenti, leggono ad alta voce la label di un widget"),e("li",null,[s("Per associare una label ad un widget, si usa l’attributo "),e("em",null,"for"),s(" che deve coincidere con l’attributo "),e("em",null,"id"),s(" del widget")])],-1),JO=e("br",null,null,-1),ZO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idnome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Nome: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idnome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Nome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idcognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Cognome: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idcognome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cognnome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Cognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),XO=e("br",null,null,-1),eH=e("label",{for:"idnome"},"      Nome: ",-1),nH=e("input",{type:"text",id:"idnome",name:"nome",placeholder:"Nome",style:{border:"1px solid black",background:"Gainsboro"}},null,-1),tH=e("br",null,null,-1),aH=e("br",null,null,-1),sH=e("p",null,[e("label",{for:"idcognome"},"Cognome: "),e("input",{type:"text",id:"idcognome",name:"cognome",placeholder:"Cognome",style:{border:"1px solid black",background:"Gainsboro"}})],-1),oH={__name:"87",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[GO,QO,YO,JO,S(i,Y({},{ranges:[""]}),{default:v(()=>[ZO]),_:1},16),XO,eH,nH,s(),tH,aH,sH]),_:1},16)}}},iH=E(oH,[["__file","/@slidev/slides/87.md"]]),lH=e("h1",null,"Form",-1),rH=e("p",null,"<input>",-1),cH=e("ul",null,[e("li",null,[s("Come detto l’elemento "),e("em",null,"input"),s(" può assumere forme diverse in funzione dell’attributo "),e("em",null,"type")]),e("li",null,[s("I vari tipi di "),e("em",null,"input"),s(" sono:")])],-1),uH=e("br",null,null,-1),pH={grid:"~ cols-2 gap-4"},dH=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("button"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("checkbox"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("color"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("date"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("datetime-local"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("email"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("file"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("hidden"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("image"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("month"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("number"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),mH=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("password"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("radio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("range"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("reset"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("search"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("submit"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("tel"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("time"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("url"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("week"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),fH={__name:"88",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[lH,rH,cH,uH,e("div",pH,[e("div",null,[S(i,Y({},{ranges:[""]}),{default:v(()=>[dH]),_:1},16)]),e("div",null,[S(i,Y({},{ranges:[""]}),{default:v(()=>[mH]),_:1},16)])])]),_:1},16)}}},hH=E(fH,[["__file","/@slidev/slides/88.md"]]),gH=e("h1",null,"Form",-1),_H=e("p",null,"<input>",-1),vH=e("h3",null,"button",-1),kH=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idbutton"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Premi il pulsante: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("button"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idbutton"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Cliccami!!"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),bH=e("p",null,[e("label",{for:"idbutton"},"Premi il pulsante: "),e("input",{type:"button",id:"idbutton",onclick:"alert('Magie di JavaScript!! :)')",value:"Cliccami!!"})],-1),yH=e("br",null,null,-1),wH=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idpulsante"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Premi il pulsante: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("button")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("button"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idpulsante"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Click Me!"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("button")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),xH=e("label",{for:"idpulsante"},"Premi il pulsante: ",-1),TH=e("button",{type:"button",style:{border:"1px solid red"}},"Click Me!",-1),$H={__name:"89",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[gH,_H,vH,S(i,Y({},{ranges:[""]}),{default:v(()=>[kH]),_:1},16),bH,yH,S(i,Y({},{ranges:[""]}),{default:v(()=>[wH]),_:1},16),xH,TH]),_:1},16)}}},zH=E($H,[["__file","/@slidev/slides/89.md"]]),MH=e("h1",null,"Form",-1),LH=e("p",null,"<input>",-1),CH=e("h3",null,"radio",-1),EH=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Occupazione:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("radio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("studente"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupazione"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("studente"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("studente"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Studente"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("radio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupato"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupazione"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Occupato"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("radio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("disoccupato"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupazione"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("disoccupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("disoccupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Disoccupato"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),IH=e("br",null,null,-1),SH=e("h3",null,"Occupazione:",-1),AH=e("br",null,null,-1),OH=e("input",{type:"radio",id:"studente",name:"occupazione",value:"studente"},null,-1),HH=e("label",{for:"studente"}," Studente",-1),PH=e("br",null,null,-1),RH=e("input",{type:"radio",id:"occupato",name:"occupazione",value:"occupato"},null,-1),NH=e("label",{for:"occupato"}," Occupato",-1),FH=e("br",null,null,-1),qH=e("input",{type:"radio",id:"disoccupato",name:"occupazione",value:"disoccupato"},null,-1),WH=e("label",{for:"disoccupato"}," Disoccupato",-1),DH=e("br",null,null,-1),jH=e("br",null,null,-1),BH={__name:"90",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[MH,LH,CH,S(i,Y({},{ranges:[""]}),{default:v(()=>[EH]),_:1},16),IH,SH,AH,OH,HH,PH,RH,NH,FH,qH,WH,DH,jH]),_:1},16)}}},VH=E(BH,[["__file","/@slidev/slides/90.md"]]),UH=e("h1",null,"Form",-1),KH=e("p",null,"<input>",-1),GH=e("h3",null,"checkbox",-1),QH=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Sport"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("checkbox"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("tennis"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("sport"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("tennis"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("tennis"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Tennis"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("checkbox"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("calcio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("sport"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("calcio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("calcio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Calcio"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("checkbox"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nuoto"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("sport"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nuoto"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nuoto"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s(" Nuoto"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),YH=e("br",null,null,-1),JH=e("h3",null,"Sport",-1),ZH=e("br",null,null,-1),XH=e("input",{type:"checkbox",id:"tennis",name:"sport",value:"tennis"},null,-1),e4=e("label",{for:"tennis"}," Tennis",-1),n4=e("br",null,null,-1),t4=e("input",{type:"checkbox",id:"calcio",name:"sport",value:"calcio"},null,-1),a4=e("label",{for:"calcio"}," Calcio",-1),s4=e("br",null,null,-1),o4=e("input",{type:"checkbox",id:"nuoto",name:"sport",value:"nuoto"},null,-1),i4=e("label",{for:"nuoto"}," Nuoto",-1),l4=e("br",null,null,-1),r4=e("br",null,null,-1),c4={__name:"91",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[UH,KH,GH,S(i,Y({},{ranges:[""]}),{default:v(()=>[QH]),_:1},16),YH,JH,ZH,XH,e4,n4,t4,a4,s4,o4,i4,l4,r4]),_:1},16)}}},u4=E(c4,[["__file","/@slidev/slides/91.md"]]),p4=e("h1",null,"Form",-1),d4=e("p",null,"<input>",-1),m4=e("h3",null,"date",-1),f4=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Data di Nascita"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("date"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("iddata"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("birthday"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),h4=e("br",null,null,-1),g4=e("br",null,null,-1),_4=e("h3",null,"Data di Nascita",-1),v4=e("br",null,null,-1),k4=e("input",{type:"date",id:"iddata",name:"birthday"},null,-1),b4=e("br",null,null,-1),y4=e("br",null,null,-1),w4={__name:"92",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[p4,d4,m4,S(i,Y({},{ranges:[""]}),{default:v(()=>[f4]),_:1},16),h4,g4,_4,v4,k4,b4,y4]),_:1},16)}}},x4=E(w4,[["__file","/@slidev/slides/92.md"]]),T4=e("h1",null,"Esercizio html_12",-1),$4=e("p",null,"Form",-1),z4=e("ol",null,[e("li",null,[s("Creare un file con nome "),e("em",null,"|cognome|_esercizio_html_12.html")]),e("li",null,"Creare 1 form per la raccolta di dati in uno scenario scelto dallo studente"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_12.html")],-1),M4=e("br",null,null,-1),L4=e("p",null,[s("Il form deve contenere i seguenti widgets: "),e("br")],-1),C4=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ul",null,[e("li",null,"almeno 2 widget di testo"),e("li",null,"almeno 1 bottone"),e("li",null,"almeno 3 scelte mutuamente esclusive tramite radio")])]),e("div",null,[e("ul",null,[e("li",null,"almeeno 5 scelte multiple tramite checkbox"),e("li",null,"almeno 1 campo data"),e("li",null,"ogni widget deve essere dotato della propria label")])])],-1),E4={__name:"93",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[T4,$4,z4,M4,L4,C4]),_:1},16))}},I4=E(E4,[["__file","/@slidev/slides/93.md"]]),S4=e("h1",null,"Esercizio html_13",-1),A4=e("p",null,"Form",-1),O4=e("ol",null,[e("li",null,[s("Progettare e realizzare un documento HTML contenente una form contenente i seguenti campi: "),e("ul",null,[e("li",null,"cognome e nome (casella di testo editabile lunga 50 caratteri)"),e("li",null,"sesso (selezionabile tramite due bottoni radio)"),e("li",null,"ateneo (da scegliere da un menu che riporta le 3 universit romane)"),e("li",null,"CAP (casella di testo editabile lunga 5 caratteri)"),e("li",null,"studente lavoratore (selezionabile tramite checkbox)"),e("li",null,"descrizione del lavoro svolto (casella di testo editabile lunga 80 caratteri)"),e("li",null,"bottone di invio"),e("li",null,"bottone di reset")])]),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_13.html")],-1),H4={__name:"94",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[S4,A4,O4]),_:1},16))}},P4=E(H4,[["__file","/@slidev/slides/94.md"]]),R4=e("h1",null,"Form",-1),N4=e("p",null,"<input>",-1),F4=e("h3",null,"number",-1),q4=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Altezza"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("number"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("altezza"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("altezza"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("150"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("200"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),W4=e("br",null,null,-1),D4=e("h3",null,"Altezza",-1),j4=e("br",null,null,-1),B4=e("input",{type:"number",id:"altezza",name:"altezza",min:"150",max:"200",style:{border:"1px solid black"}},null,-1),V4=e("br",null,null,-1),U4=e("br",null,null,-1),K4={__name:"95",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[R4,N4,F4,S(i,Y({},{ranges:[""]}),{default:v(()=>[q4]),_:1},16),W4,D4,j4,B4,V4,U4]),_:1},16)}}},G4=E(K4,[["__file","/@slidev/slides/95.md"]]),Q4=e("h1",null,"Form",-1),Y4=e("p",null,"<input>",-1),J4=e("h3",null,"color",-1),Z4=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Colore preferito"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("   "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("color"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("favcolor"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("favcolor"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("#ff0000"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),X4=e("br",null,null,-1),eP=e("h3",null,"Colore preferito",-1),nP=e("br",null,null,-1),tP=e("input",{type:"color",id:"favcolor",name:"favcolor",value:"#ff0000",onchange:"alert(`Hai selezionato il colore: ${event.target.value}`)"},null,-1),aP=e("br",null,null,-1),sP=e("br",null,null,-1),oP={__name:"96",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[Q4,Y4,J4,S(i,Y({},{ranges:[""]}),{default:v(()=>[Z4]),_:1},16),X4,eP,nP,tP,aP,sP]),_:1},16)}}},iP=E(oP,[["__file","/@slidev/slides/96.md"]]),lP=e("h1",null,"Form",-1),rP=e("p",null,"<input>",-1),cP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("peso"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Peso: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("range"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("50"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("100"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("60"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"class"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("slider"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("peso"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),uP=e("br",null,null,-1),pP=e("label",{for:"peso"},"Peso: ",-1),dP=e("input",{type:"range",min:"50",max:"100",value:"60",class:"slider",id:"peso"},null,-1),mP=e("br",null,null,-1),fP={__name:"97",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[lP,rP,S(i,Y({},{ranges:[""]}),{default:v(()=>[cP]),_:1},16),uP,pP,dP,mP]),_:1},16)}}},hP=E(fP,[["__file","/@slidev/slides/97.md"]]),gP=e("h1",null,"Form",-1),_P=e("p",null,"<select>",-1),vP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cars"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Genere:  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("select")]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("genere"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cars"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("maschio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Maschio"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("option")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("femmina"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Femmina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("option")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("select")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),kP=e("br",null,null,-1),bP=e("label",{for:"cars"},"Genere: ",-1),yP=e("select",{name:"genere",id:"cars"},[e("option",{value:"maschio"},"Maschio"),e("option",{value:"femmina"},"Femmina")],-1),wP=e("br",null,null,-1),xP=e("br",null,null,-1),TP={__name:"98",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[gP,_P,S(i,Y({},{ranges:[""]}),{default:v(()=>[vP]),_:1},16),kP,bP,yP,wP,xP]),_:1},16)}}},$P=E(TP,[["__file","/@slidev/slides/98.md"]]),zP=e("h1",null,"Form",-1),MP=e("p",null,"<textarea>",-1),LP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("bio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Biografia:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("textarea")]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("bio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("bio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"rows"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("4"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"cols"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("50"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Inserisci la tua biografia"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("textarea")]),e("span",{class:"token punctuation"},">")]),s("    ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),CP=e("br",null,null,-1),EP=e("p",null,[e("label",{for:"bio"},"Biografia:"),e("textarea",{id:"bio",name:"bio",rows:"4",cols:"50",placeholder:"Inserisci la tua biografia",style:{border:"1px solid black"}})],-1),IP={__name:"99",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[zP,MP,S(i,Y({},{ranges:[""]}),{default:v(()=>[LP]),_:1},16),CP,EP]),_:1},16)}}},SP=E(IP,[["__file","/@slidev/slides/99.md"]]),AP=e("h1",null,"Esercizio html_14",-1),OP=e("p",null,"Form",-1),HP=e("ol",null,[e("li",null,[s("Modificare il file "),e("em",null,"|cognome|_esercizio_html_12.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_14.html")]),e("li",null,"Modificare il form (vedi dettagli sotto)"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_14.html")],-1),PP=e("p",null,"Il form deve contenere i seguenti widgets aggiuntivi:",-1),RP=e("ul",null,[e("li",null,"almeno 4 widget number con valore minimo e massimo"),e("li",null,"almeno 1 widget color picker"),e("li",null,"almeno 3 widget range con valore minimo e massimo"),e("li",null,"almeeno 2 combo box o select con almeno 5 valori ciascuna"),e("li",null,"almeno 1 campo text area con dimensione minima 6 righe e 60 colonne"),e("li",null,"ogni widget deve essere dotato della propria label")],-1),NP={__name:"100",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[AP,OP,HP,PP,RP]),_:1},16))}},FP=E(NP,[["__file","/@slidev/slides/100.md"]]),qP="/3/html/assets/html5_8-8ebdebac.jpg",WP=e("h1",null,"Form",-1),DP=e("p",null,"<datalist>",-1),jP={grid:"~ cols-2 gap-8"},BP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
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
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),VP=e("div",null,[e("p",null,[e("img",{src:qP,alt:"html5_8.jpg"})])],-1),UP={__name:"101",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[WP,DP,e("div",jP,[e("div",null,[S(i,Y({},{ranges:[""]}),{default:v(()=>[BP]),_:1},16)]),VP])]),_:1},16)}}},KP=E(UP,[["__file","/@slidev/slides/101.md"]]),GP=e("h1",null,"Form",-1),QP=e("p",null,"<fieldset>",-1),YP={grid:"~ cols-2 gap-8"},JP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
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
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),ZP=e("div",null,[e("fieldset",{style:{border:"1px solid black"}},[e("legend",null,"Dati Personali"),e("br"),e("label",{for:"nome"},"Nome: "),e("input",{type:"text",id:"nome",name:"nome",style:{border:"1px solid black"}}),e("br"),e("br"),e("label",{for:"cognome"},"Cognome: "),e("input",{type:"text",id:"cognome",name:"cognome",style:{border:"1px solid black"}}),e("br"),e("br"),e("label",{for:"genere"},"Genere: "),e("select",{name:"genere",id:"cars"},[e("option",{value:"maschio"},"Maschio"),e("option",{value:"femmina"},"Femmina")]),e("br"),e("br"),e("label",{for:"email"},"Email: "),e("input",{type:"email",id:"email",name:"email",style:{border:"1px solid black"}}),e("br"),e("br"),e("input",{type:"submit",value:"Invia",style:{border:"1px solid black"}}),s(),e("br"),e("br")])],-1),XP={__name:"102",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[GP,QP,e("div",YP,[e("div",null,[S(i,Y({},{ranges:[""]}),{default:v(()=>[JP]),_:1},16)]),ZP])]),_:1},16)}}},e8=E(XP,[["__file","/@slidev/slides/102.md"]]),n8=e("h1",null,"Esercizio html_15",-1),t8=e("p",null,"Form",-1),a8=e("ol",null,[e("li",null,"Progettare e realizzare un documento HTML contenente una form contenente i seguenti campi:")],-1),s8=e("ul",null,[e("li",null,"cognome (casella di testo editabile lunga 40 caratteri)"),e("li",null,"nome (casella di testo editabile lunga 30 caratteri)"),e("li",null,"matricola (casella di testo editabile lunga 12 caratteri)"),e("li",null,"regione di residenza (da scegliere da un menu che riporta le 20 regioni italiane)"),e("li",null,"email (casella di testo editabile lunga 30 caratteri)"),e("li",null,"telefono (casella di testo editabile lunga 15 caratteri)"),e("li",null,"richieste particolari (area di testo editabile di 12 righe per 60 colonne)"),e("li",null,"bottone di invio"),e("li",null,"bottone di reset")],-1),o8=e("ol",{start:"2"},[e("li",null,"Consgenare su github il file |cognome|_es15.html")],-1),i8={__name:"103",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[n8,t8,a8,s8,o8]),_:1},16))}},l8=E(i8,[["__file","/@slidev/slides/103.md"]]),r8=e("h1",null,"Esercizio html_16",-1),c8=e("p",null,"Form",-1),u8=e("ol",null,[e("li",null,[s("Creare un file con nome "),e("em",null,"|cognome|_esercizio_html_16.html")]),e("li",null,"Creare 1 form per la raccolta di dati personali"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_16.html")],-1),p8=e("p",null,"Il form deve contenere i seguenti campi:",-1),d8=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ul",null,[e("li",null,"Nome e Cognome"),e("li",null,"Genere"),e("li",null,[e("a",{href:"https://www.w3schools.com/tags/att_input_type_email.asp",target:"_blank",rel:"noopener"},"Email")]),e("li",null,[e("a",{href:"https://www.w3schools.com/tags/att_input_type_password.asp",target:"_blank",rel:"noopener"},"Password")]),e("li",null,"Data di nascita"),e("li",null,"Nazionalità")])]),e("div",null,[e("ul",null,[e("li",null,"Attività lavorativa"),e("li",null,"Hobby"),e("li",null,"Altezza"),e("li",null,"Peso"),e("li",null,"Colore preferito"),e("li",null,"Note personali")])])],-1),m8={__name:"104",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[r8,c8,u8,p8,d8]),_:1},16))}},f8=E(m8,[["__file","/@slidev/slides/104.md"]]),h8="/3/html/assets/html5_20-1c88279a.png",g8=e("h1",null,"Esercizio html_17",-1),_8=e("p",null,"Form",-1),v8=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ol",null,[e("li",null,[s("Progettare e realizzare in HTML il form di di iscrizione al PCTO rappresentato qui a fianco e disponibile "),e("a",{href:"/support/3/html/convenzione_pcto.pdf",target:"_blank",rel:"noopener"},"qui")]),e("li",null,"Obiettivo è riprodurlo il più fedelmente possibile"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_17.html")])]),e("div",null,[e("img",{src:h8,width:"450",style:{float:"right",position:"relative",top:"-100px"}})])],-1),k8={__name:"105",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[g8,_8,v8]),_:1},16))}},b8=E(k8,[["__file","/@slidev/slides/105.md"]]),y8="/3/html/assets/html5_9-a352818c.jpg",w8=e("h1",null,"Form",-1),x8=e("p",null,"Form lifecycle server-side",-1),T8=e("img",{src:y8,width:"500",style:{float:"right"}},null,-1),$8=e("ol",null,[e("li",null,"L’utente richiede la pagina web contenente il form [GET]"),e("li",null,"Il web server risponde con l’HTML della pagina e del form"),e("li",null,[s("L’utente compila il form e fa il "),e("em",null,"submit"),s(" inviando i dati al server [POST]")]),e("li",null,"Il server effettua una validazione dei dati ricevuti (OK | ERROR)"),e("li",null,"ERROR: viene inviato nuovamente il form ed eventuali messaggi di errore"),e("li",null,"OK: il web server processa i dati ed esegue le operazioni previste (DB)"),e("li",null,"Viene inviata la risposta finale al browser")],-1),z8={__name:"106",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[w8,x8,T8,$8]),_:1},16))}},M8=E(z8,[["__file","/@slidev/slides/106.md"]]),L8=e("h1",null,"Form",-1),C8=e("p",null,"Form lifecycle",-1),E8=e("ul",null,[e("li",null,"Il ciclo di vita di gestione dei form appena visto, è quello classico"),e("li",null,"Come si vede questo è molto inefficente siccome richiede sempre una comunicazione tra client e server"),e("li",null,"Questo introduce latenze indesiderate e carico sul server"),e("li",null,"Il motivo principale è che HTML non essendo un linguaggio di programmazione non ha modo di fare una validazione del form prima dell’invio"),e("li",null,"Per ovviare a queste problematiche, normalmente si effettua la validazione del form in JavaScript, quindi direttamente nel browser riducendo così il numero di messaggi con il server")],-1),I8={__name:"107",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[L8,C8,E8]),_:1},16))}},S8=E(I8,[["__file","/@slidev/slides/107.md"]]),A8="/3/html/assets/html5_10-d0dadebe.jpg",O8=e("h1",null,"Form",-1),H8=e("p",null,"Form lifecycle client-side",-1),P8=e("img",{src:A8,width:"400",style:{float:"right"}},null,-1),R8=e("ol",null,[e("li",null,"L’utente richiede la pagina web contenente il form [GET]"),e("li",null,"Il web server risponde con l’HTML della pagina e del form"),e("li",null,[s("L’utente compila il form e fa il "),e("em",null,"submit"),s(" inviando i dati al server [POST]")]),e("li",null,"Il browser effettua una validazione dei dati ricevuti (OK | ERROR)"),e("li",null,"ERROR: viene visualizzato nuovamente il form ed eventuali messaggi di errore"),e("li",null,"OK: il web server processa i dati ed esegue le operazioni previste (DB)"),e("li",null,"Viene inviata la risposta finale al browser")],-1),N8={__name:"108",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[O8,H8,P8,R8]),_:1},16))}},F8=E(N8,[["__file","/@slidev/slides/108.md"]]),q8=e("h1",null,"Esercizio html_18",-1),W8=e("p",null,"Form validation server-side",-1),D8=e("ul",null,[e("li",null,"In questo esercizio/esercitazione si vuole comprendere a fondo il meccanismo di validazione dei form server-side")],-1),j8=e("p",null,"Per fare ciò abbiamo bisonog di due componenti fondamentali:",-1),B8=e("ol",null,[e("li",null,"Una pagina HTML contenente un form"),e("li",null,"Un web server che implementa la logica di validazione")],-1),V8=e("p",null,"Per questa esercitazione il form e il web server sono forniti",-1),U8=e("ol",null,[e("li",null,[s("Scaricare il seguente pacchetto:"),e("a",{href:"/support/3/html/esercizio_html_18.tgz",target:"_blank",rel:"noopener"},"esercizio_html_18.tgz")]),e("li",null,[s("Installare i pacchetti necessari con "),e("code",null,"npm install")]),e("li",null,[s("Lanciare il web server con "),e("code",null,"node form_server.js")]),e("li",null,"Aprire la pagina fornita dal server locale sulla posta 8080")],-1),K8={__name:"109",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[q8,W8,D8,j8,B8,V8,U8]),_:1},16))}},G8=E(K8,[["__file","/@slidev/slides/109.md"]]),Q8=e("h1",null,"Esercizio html_18",-1),Y8=e("p",null," ",-1),J8=e("p",null,"Si richiede di:",-1),Z8=e("ol",null,[e("li",null,"Verificare il funzionamento del form e della validazione dei campi"),e("li",null,"Analizzaere il codice del form e del server in JavaScript"),e("li",null,[s("Modificare il form in modo che l’età venga fornita come un "),e("code",null,"range")]),e("li",null,[s("Modificare il form in modo che sia presente anche il campo "),e("code",null,"Cognome")]),e("li",null,[s("Modificare il codice del server in modo che sia presente "),e("strong",null,"anche"),s(" la validazione dell’età, in modo che siano accettati solo valori compresi tra 19 e 31")]),e("li",null,[s("Fornire il link github alla directory con nome |cognome|_esercizio_html_18 contenente i file aggiornati "),e("em",null,"form.html"),s(" e "),e("em",null,"form_server.js")]),e("li",null,[e("code",null,"NON deve essere presente nel repository la directory **node_modules**")])],-1),X8={__name:"110",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[Q8,Y8,J8,Z8]),_:1},16))}},eR=E(X8,[["__file","/@slidev/slides/110.md"]]),nR=e("p",null," ",-1),tR={__name:"111",setup(n){const t={};return z(C),(a,o)=>{const i=$n;return b(),M(W,q(F(t)),{default:v(()=>[nR,S(i,{fs:"90px"},{default:v(()=>[s(" HTML Linter e validità sintattica ")]),_:1})]),_:1},16)}}},aR=E(tR,[["__file","/@slidev/slides/111.md"]]),sR=e("h1",null,"HTML linter",-1),oR=e("p",null,"Verifica errori",-1),iR=e("ul",null,[e("li",null,[e("p",null,[s("Il "),e("code",null,"linter"),s(" è uno strumento che analizza il codice sorgente per contrassegnare errori di sintassi, di programmazione, bug, errori stilistici e costrutti sospetti.")])]),e("li",null,[e("p",null,[s("Il termine deriva dall’"),e("a",{href:"https://it.wikipedia.org/wiki/Lint_(software)",target:"_blank",rel:"noopener"},"omonimo strumento Unix"),s(" che esamina il codice sorgente del linguaggio C")])]),e("li",null,[e("p",null,"Pertanto il linter HTML è uno strumento che ci fornisce utili informazioni sulla pagina HTML in esame:"),e("ul",null,[e("li",null,"errori di sintassi HTML"),e("li",null,"uso di tag obsoleti"),e("li",null,"uso errato di tag"),e("li",null,"uso errato di attributi"),e("li",null,"mancata chiusura di tag"),e("li",null,"…")])]),e("li",null,[e("p",null,"Il lineter è uno strumento fondamentale per lo sviluppatore.")])],-1),lR={__name:"112",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[sR,oR,iR]),_:1},16))}},rR=E(lR,[["__file","/@slidev/slides/112.md"]]),cR="/3/html/assets/html5_12-88d9b140.png",uR=e("h1",null,"HTML linter",-1),pR=e("p",null,"W3C Markup Validation Service",-1),dR=e("ul",null,[e("li",null,"Il W3C mette a disposizione un servizio online di validazione (lint) di pagine o siti HTML"),e("li",null,[s("Il servizio è disponibile qui: "),e("a",{href:"https://validator.w3.org/",target:"_blank",rel:"noopener"},"https://validator.w3.org/")])],-1),mR=e("br",null,null,-1),fR=e("img",{src:cR},null,-1),hR={__name:"113",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[uR,pR,dR,mR,fR]),_:1},16))}},gR=E(hR,[["__file","/@slidev/slides/113.md"]]),_R="/3/html/assets/html5_13-f3e0e30d.png",vR=e("h1",null,"HTML linter",-1),kR=e("p",null,"W3C Markup Validation Service",-1),bR=e("p",null,"Il servizio opera in 3 modalità:",-1),yR=e("ol",null,[e("li",null,[e("strong",null,"Validate by URI"),s(": inserendo un URL valida ("),e("a",{href:"https://ats.agnelli.it",target:"_blank",rel:"noopener"},"https://ats.agnelli.it"),s(") effettua la validazione del sito")]),e("li",null,[e("strong",null,"Validate by File Upload"),s(": caricando un file .html effettua la validazione della pagina")]),e("li",null,[e("strong",null,"Validate by Direct Input"),s(": inserendo il codice HTML manualmente, ne effettua la validazione")])],-1),wR=e("br",null,null,-1),xR=e("img",{src:_R},null,-1),TR={__name:"114",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[vR,kR,bR,yR,wR,xR]),_:1},16))}},$R=E(TR,[["__file","/@slidev/slides/114.md"]]),zR="/3/html/assets/html5_14-f69c6914.png",MR=e("h1",null,"HTML linter",-1),LR=e("p",null,"W3C Markup Validation Service",-1),CR=e("br",null,null,-1),ER=e("img",{src:zR},null,-1),IR=e("ul",null,[e("li",null,[s("Il sito viene analizzato e viene generato un report "),e("ul",null,[e("li",null,[e("strong",null,"Error"),s(": segnala errori sintattici indicando la linea dove occorre")]),e("li",null,[e("strong",null,"Warning"),s(": evidenzia potenziali problemi ma non necessariamente errori sintattici")])])])],-1),SR={__name:"115",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[MR,LR,CR,ER,IR]),_:1},16))}},AR=E(SR,[["__file","/@slidev/slides/115.md"]]),OR=e("h1",null,"Esercizio html_19",-1),HR=e("p",null,"HTML lint",-1),PR=e("p",null,"Mediante il servizio di validazione HTML del W3C si richiede di:",-1),RR=e("ol",null,[e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html"),e("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente")],-1),NR={__name:"116",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[OR,HR,PR,RR]),_:1},16))}},FR=E(NR,[["__file","/@slidev/slides/116.md"]]),qR="/3/html/assets/html5_15-635ed653.png",WR=e("h1",null,"HTML linter",-1),DR=e("p",null,"Command Line Linter",-1),jR=e("ul",null,[e("li",null,"Chiaramente per quanto valido sia il linter del W3C, risulta di difficile applicazione nel processo di sviluppo"),e("li",null,"Caricare ad ogni modifica la propria pagina risulta particolarmente scomodo e time consuming"),e("li",null,"Per tale motivo esistono svariati tipi di linter HTML che operano da linea di comando"),e("li",null,"Questi strumenti sono molto versatili e possono essere integrati in pipeline automatiche (github)"),e("li",null,[s("Un linter valido è "),e("code",null,"node-w3c-validator"),s(" scirtto in JavaScript che implementa un wrapper al servizio W3C")])],-1),BR=e("br",null,null,-1),VR=e("img",{src:qR,width:"500"},null,-1),UR={__name:"117",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[WR,DR,jR,BR,VR]),_:1},16))}},KR=E(UR,[["__file","/@slidev/slides/117.md"]]),GR="/3/html/assets/html5_16-37784c29.png",QR=e("h1",null,"HTML linter",-1),YR=e("p",null,"Command Line Linter",-1),JR=e("ul",null,[e("li",null,"Per installare il linter basta eseguire")],-1),ZR=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[s("npm i "),e("span",{class:"token operator"},"-"),s("g node"),e("span",{class:"token operator"},"-"),s("w3c"),e("span",{class:"token operator"},"-"),s("validator")])])],-1),XR=e("br",null,null,-1),eN=e("img",{src:GR,width:"700"},null,-1),nN={__name:"118",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[QR,YR,JR,S(i,Y({},{ranges:[""]}),{default:v(()=>[ZR]),_:1},16),XR,eN]),_:1},16)}}},tN=E(nN,[["__file","/@slidev/slides/118.md"]]),aN=e("h1",null,"HTML linter",-1),sN=e("p",null,"Command Line Linter",-1),oN=e("p",null,"I parametri più importanti sono",-1),iN=e("ul",null,[e("li",null,[e("code",null,"-i"),s(": specifica il file HTML da validare")]),e("li",null,[e("code",null,"-f"),s(": specifica il formate del report generato "),e("ul",null,[e("li",null,[e("strong",null,"txt"),s(": genera un report puramente testuale")]),e("li",null,[e("strong",null,"lint"),s(": genera un report in formato lint con informazioni addizionali")]),e("li",null,[e("strong",null,"html"),s(": genera un report in formato HTML esattamente come quello generato dal servizio W3C")])])])],-1),lN={__name:"119",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[aN,sN,oN,iN]),_:1},16))}},rN=E(lN,[["__file","/@slidev/slides/119.md"]]),cN="/3/html/assets/html5_17-8d11820a.png",uN=e("h1",null,"HTML linter",-1),pN=e("p",null,"Command Line Linter",-1),dN=e("ul",null,[e("li",null,"Per fare il lint di un file HTML e generare un report testuale basta eseguire il seguente comando")],-1),mN=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[s("node"),e("span",{class:"token operator"},"-"),s("w3c"),e("span",{class:"token operator"},"-"),s("validator "),e("span",{class:"token operator"},"-"),s("i "),e("span",{class:"token operator"},"/"),s("path"),e("span",{class:"token operator"},"/"),s("to"),e("span",{class:"token operator"},"/"),s("file"),e("span",{class:"token punctuation"},"."),s("html "),e("span",{class:"token operator"},"-"),s("f txt")])])],-1),fN=e("br",null,null,-1),hN=e("img",{src:cN},null,-1),gN={__name:"120",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[uN,pN,dN,S(i,Y({},{ranges:[""]}),{default:v(()=>[mN]),_:1},16),fN,hN]),_:1},16)}}},_N=E(gN,[["__file","/@slidev/slides/120.md"]]),vN="/3/html/assets/html5_18-970bde4d.png",kN=e("h1",null,"HTML linter",-1),bN=e("p",null,"Command Line Linter",-1),yN=e("ul",null,[e("li",null,"Per fare il lint di un file HTML e generare un report in formato lint basta eseguire il seguente comando")],-1),wN=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[s("node"),e("span",{class:"token operator"},"-"),s("w3c"),e("span",{class:"token operator"},"-"),s("validator "),e("span",{class:"token operator"},"-"),s("i "),e("span",{class:"token operator"},"/"),s("path"),e("span",{class:"token operator"},"/"),s("to"),e("span",{class:"token operator"},"/"),s("file"),e("span",{class:"token punctuation"},"."),s("html "),e("span",{class:"token operator"},"-"),s("f lint")])])],-1),xN=e("br",null,null,-1),TN=e("img",{src:vN,width:"650"},null,-1),$N={__name:"121",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[kN,bN,yN,S(i,Y({},{ranges:[""]}),{default:v(()=>[wN]),_:1},16),xN,TN]),_:1},16)}}},zN=E($N,[["__file","/@slidev/slides/121.md"]]),MN="/3/html/assets/html5_19-d96648e9.png",LN=e("h1",null,"HTML linter",-1),CN=e("p",null,"Command Line Linter",-1),EN=e("ul",null,[e("li",null,"Per fare il lint di un file HTML e generare un report in formato html basta eseguire il seguente comando")],-1),IN=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[s("node"),e("span",{class:"token operator"},"-"),s("w3c"),e("span",{class:"token operator"},"-"),s("validator "),e("span",{class:"token operator"},"-"),s("i "),e("span",{class:"token operator"},"/"),s("path"),e("span",{class:"token operator"},"/"),s("to"),e("span",{class:"token operator"},"/"),s("file"),e("span",{class:"token punctuation"},"."),s("html "),e("span",{class:"token operator"},"-"),s("f html "),e("span",{class:"token operator"},">"),s(" report"),e("span",{class:"token punctuation"},"."),s("html")])])],-1),SN=e("br",null,null,-1),AN=e("img",{src:MN,width:"650"},null,-1),ON={__name:"122",setup(n){const t={};return z(C),(a,o)=>{const i=re;return b(),M(W,q(F(t)),{default:v(()=>[LN,CN,EN,S(i,Y({},{ranges:[""]}),{default:v(()=>[IN]),_:1},16),SN,AN]),_:1},16)}}},HN=E(ON,[["__file","/@slidev/slides/122.md"]]),PN=e("h1",null,"Esercizio html_20",-1),RN=e("p",null,"HTML lint",-1),NN=e("p",null,"Mediante il linter da liena di comando si richiede di:",-1),FN=e("ol",null,[e("li",null,"Effettuare la verifica sintattica del file |cognome|_esercizio_html_11.html generando un report in formato txt"),e("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_20.txt"),e("li",null,"Effettuare la verifica sintattica del file |cognome|_esercizio_html_11.html generando un report in formato lint"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_20.lint"),e("li",null,"Effettuare la verifica sintattica del file |cognome|_esercizio_html_11.html generando un report in formato html"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_20.html")],-1),qN={__name:"123",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[PN,RN,NN,FN]),_:1},16))}},WN=E(qN,[["__file","/@slidev/slides/123.md"]]),DN="/3/html/assets/hh03-2c0d4cdf.webp",jN=e("img",{src:DN,style:{position:"relative",top:"-20px"}},null,-1),BN={__name:"124",setup(n){const t={};return z(C),(a,o)=>(b(),M(W,q(F(t)),{default:v(()=>[jN]),_:1},16))}},VN=E(BN,[["__file","/@slidev/slides/124.md"]]),UN=[{path:"1",name:"page-1",component:T2,meta:{theme:"default",background:"/cover.webp",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"TPSI",as:"2024/2025",version:"1.5.4",title:"Hyper Text Markup Language",slide:{raw:`---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /cover.webp
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
materia: "TPSI"
as: "2024/2025"
version: '1.5.4'
--- 

<!-- mapping esercizi

1-10 -> 1-10
10a -> 11
11 -> 12
11a -> 13
12 -> 14
12a -> 15
13 -> 16
13a -> 17
14 -> 18
15 -> 19
16 -> 20 -->


# Hyper Text Markup Language

HTML per sviluppatori

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>
`,title:"Hyper Text Markup Language",level:1,content:`<!-- mapping esercizi

1-10 -> 1-10
10a -> 11
11 -> 12
11a -> 13
12 -> 14
12a -> 15
13 -> 16
13a -> 17
14 -> 18
15 -> 19
16 -> 20 -->


# Hyper Text Markup Language

HTML per sviluppatori

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>`,frontmatter:{theme:"default",background:"/cover.webp",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"TPSI",as:"2024/2025",version:"1.5.4",title:"Hyper Text Markup Language"},index:0,start:0,end:43,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:I2,meta:{slide:{raw:`
&nbsp;

<Cover fs="100px">
    Introduzione
</Cover>

`,content:`&nbsp;

<Cover fs="100px">
    Introduzione
</Cover>`,frontmatter:{},index:1,start:44,end:52,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:P2,meta:{slide:{raw:`
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

- Il motivo principale che ha spinto il W3C e i suoi membri a sviluppare HTML5 è stata la necessità di fornire direttamente le funzionalità che in precedenza erano fruibili tramite estensioni proprietarie all'esterno dei browser, come Adobe Flash e simili. Un secondo obiettivo che gli sviluppatori si erano prefissati era quello di garantire una maggiore compatibilità tra i diversi browser, indipendentemente dalla piattaforma software utilizzata, e principalmente mirata all'espansione dei dispositivi mobili.`,frontmatter:{},index:2,start:53,end:66,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:D2,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:3,start:67,end:90,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:G2,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:4,start:91,end:119,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:az,meta:{slide:{raw:`
# HTML

Il [sito web](https://www.w3schools.com/) del consorzio W3C, offre una preziosa fonte di informazioni per apprendere le tecnologie del web.

<br>

<div grid="~ cols-2 gap-32">
<div>

### HTML
- [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)
- [https://www.w3schools.com/tags/default.asp](https://www.w3schools.com/tags/default.asp)
- [https://htmlreference.io/](https://htmlreference.io/)

</div>
<div>

### CSS

- [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)
- [https://www.w3schools.com/cssref/default.asp](https://www.w3schools.com/cssref/default.asp)
- [https://cssreference.io/](https://cssreference.io/)


</div>
</div>

<br>

### Java Script

- [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)
- [https://www.w3schools.com/jsref/default.asp](https://www.w3schools.com/jsref/default.asp)
- [https://devdocs.io/javascript/](https://devdocs.io/javascript/)
- [https://javascript.info/](https://javascript.info/)
`,title:"HTML",level:1,content:`# HTML

Il [sito web](https://www.w3schools.com/) del consorzio W3C, offre una preziosa fonte di informazioni per apprendere le tecnologie del web.

<br>

<div grid="~ cols-2 gap-32">
<div>

### HTML
- [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)
- [https://www.w3schools.com/tags/default.asp](https://www.w3schools.com/tags/default.asp)
- [https://htmlreference.io/](https://htmlreference.io/)

</div>
<div>

### CSS

- [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)
- [https://www.w3schools.com/cssref/default.asp](https://www.w3schools.com/cssref/default.asp)
- [https://cssreference.io/](https://cssreference.io/)


</div>
</div>

<br>

### Java Script

- [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)
- [https://www.w3schools.com/jsref/default.asp](https://www.w3schools.com/jsref/default.asp)
- [https://devdocs.io/javascript/](https://devdocs.io/javascript/)
- [https://javascript.info/](https://javascript.info/)`,frontmatter:{},index:5,start:120,end:157,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:uz,meta:{slide:{raw:`
# HTML

Allenarsi con HTML

Qui una serie di link a risorse esterne molto utili per mettere a frutto quando si apprenderà durante il corso

Per apprendere correttamente ed efficaciemente HTML è necessario fare tanto esercizio sviluppando pagine di complessità crescente in modo da capire come usare i vari tag ed imparare a risolvere i problemi che si presentano durante la realizzazione di una pagina web

<div grid="~ cols-2 gap-32">
<div>

- [Build a Cat Photo App](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app)
- [W3Docs HTML Excercie](https://www.w3docs.com/exercise/html)
- [Google Web.dev HTML](https://web.dev/learn/html/welcome)
- [Learn HTML Forms by Building a Registration Form](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-forms-by-building-a-registration-form)
- [Learn HTML on Codecademy](https://www.codecademy.com/learn/learn-html)
- [Codier](https://codier.io/)
- [30 Days of Challenges](https://codedamn.com/challenge/30-days-of-html-css)
- [10 Challenges](https://www.codecademy.com/resources/blog/html-and-css-code-challenges-for-beginners/)

</div>
<div>

- [Learn HTML](https://www.codecademy.com/learn/learn-html)
- [Brainstation HTML](https://brainstation.io/learn/html)
- [Geek for Geek](https://www.geeksforgeeks.org/html-exercises/)
- [HTML Challenges](https://www.101computing.net/html-css-javascript-challenges/)
- [Testing Challenge](http://testingchallenges.thetestingmap.org/)
- [W3C HTML Quiz](https://www.w3schools.com/html/html_quiz.asp)
- [W3C HTML Excerices](https://www.w3schools.com/html/html_exercises.asp)
- [7 Projects](https://www.codechef.com/practice/html)
- [W3 Resouce](https://www.w3resource.com/html-css-exercise/basic/)

</div>
</div>
`,title:"HTML",level:1,content:`# HTML

Allenarsi con HTML

Qui una serie di link a risorse esterne molto utili per mettere a frutto quando si apprenderà durante il corso

Per apprendere correttamente ed efficaciemente HTML è necessario fare tanto esercizio sviluppando pagine di complessità crescente in modo da capire come usare i vari tag ed imparare a risolvere i problemi che si presentano durante la realizzazione di una pagina web

<div grid="~ cols-2 gap-32">
<div>

- [Build a Cat Photo App](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app)
- [W3Docs HTML Excercie](https://www.w3docs.com/exercise/html)
- [Google Web.dev HTML](https://web.dev/learn/html/welcome)
- [Learn HTML Forms by Building a Registration Form](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-forms-by-building-a-registration-form)
- [Learn HTML on Codecademy](https://www.codecademy.com/learn/learn-html)
- [Codier](https://codier.io/)
- [30 Days of Challenges](https://codedamn.com/challenge/30-days-of-html-css)
- [10 Challenges](https://www.codecademy.com/resources/blog/html-and-css-code-challenges-for-beginners/)

</div>
<div>

- [Learn HTML](https://www.codecademy.com/learn/learn-html)
- [Brainstation HTML](https://brainstation.io/learn/html)
- [Geek for Geek](https://www.geeksforgeeks.org/html-exercises/)
- [HTML Challenges](https://www.101computing.net/html-css-javascript-challenges/)
- [Testing Challenge](http://testingchallenges.thetestingmap.org/)
- [W3C HTML Quiz](https://www.w3schools.com/html/html_quiz.asp)
- [W3C HTML Excerices](https://www.w3schools.com/html/html_exercises.asp)
- [7 Projects](https://www.codechef.com/practice/html)
- [W3 Resouce](https://www.w3resource.com/html-css-exercise/basic/)

</div>
</div>`,frontmatter:{},index:6,start:158,end:195,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:gz,meta:{slide:{raw:`
# HTML

Materiale Aggiuntivo

<br>

<div class="grid grid-cols-2 grid-rows-1 gap-4" style="padding: 0px; margin-left:0%;">
 <div>

 - [HTML Attributes 1](/support/3/html/pdf/html_attributes_01.pdf)
 - [HTML Attributes 2](/support/3/html/pdf/html_attributes_02.pdf)
 - [HTML UI design](/support/3/html/pdf/html_ui_design.pdf)
 - [PWA](/support/3/html/pdf/PWA.pdf)
 - [Cookies](/support/3/html/pdf/Cookies.pdf)
 - [Free_websites_to_deploy_code](/support/3/html/pdf/Free_websites_to_deploy_code.pdf)
 - [Ducket](/support/3/html/pdf/duckett.pdf)
 - [Build HTML5 Game](/support/3/html/epub/Build_an_HTML5_Game_Karl_Bunyan.epub)
 - [HTML5 Canvas](/support/3/html/epub/Foundation_HTML5_Canvas_Rob_Hawkes.epub)
 - [HTML5 Game Development](/support/3/html/epub/HTML5_Game_Development_by_Example.epub)
 
</div>

 <div>

 - [HTML5 Game MOst Wanted](/support/3/html/epub/HTML5_Games_Most_Wanted_Build_the_Best_HTML5_Games.epub)
 - [HTML5 Game Novice to Ninja](/support/3/html/epub/HTML5_Games_Novice_to_Ninja_Earle_Castledine.epub)
 - [HTML SEO](/support/3/html/pdf/html_seo.pdf)
 - [HTML Cheatsheet 1](/support/3/html/pdf/html_cheatsheet_01.pdf)
 - [HTML Cheatsheet 2](/support/3/html/pdf/html_cheatsheet_02.pdf)
 - [HTML5 Quick Markup Guide](/support/3/html/epub/HTML5_Quick_Markup_Reference_Wallace_Jackson.epub)
 - [HTML Manual of Style](/support/3/html/epub/HTML_Manual_of_Style_A_Clear_Concise_Reference.epub)
 - [Essential Guide to HTML5](/support/3/html/epub/The_Essential_Guide_to_HTML5_Games.epub)
 - [HTML Handkbook](/support/3/html/epub/The_HTML_Handbook_Flavio_Copes.epub)
 - [Web Coding Development](/support/3/html/epub/Web_Coding_Development_AllinOne_For_Dummies_Paul_McFedries.epub)

</div>
</div>

`,title:"HTML",level:1,content:`# HTML

Materiale Aggiuntivo

<br>

<div class="grid grid-cols-2 grid-rows-1 gap-4" style="padding: 0px; margin-left:0%;">
 <div>

 - [HTML Attributes 1](/support/3/html/pdf/html_attributes_01.pdf)
 - [HTML Attributes 2](/support/3/html/pdf/html_attributes_02.pdf)
 - [HTML UI design](/support/3/html/pdf/html_ui_design.pdf)
 - [PWA](/support/3/html/pdf/PWA.pdf)
 - [Cookies](/support/3/html/pdf/Cookies.pdf)
 - [Free_websites_to_deploy_code](/support/3/html/pdf/Free_websites_to_deploy_code.pdf)
 - [Ducket](/support/3/html/pdf/duckett.pdf)
 - [Build HTML5 Game](/support/3/html/epub/Build_an_HTML5_Game_Karl_Bunyan.epub)
 - [HTML5 Canvas](/support/3/html/epub/Foundation_HTML5_Canvas_Rob_Hawkes.epub)
 - [HTML5 Game Development](/support/3/html/epub/HTML5_Game_Development_by_Example.epub)
 
</div>

 <div>

 - [HTML5 Game MOst Wanted](/support/3/html/epub/HTML5_Games_Most_Wanted_Build_the_Best_HTML5_Games.epub)
 - [HTML5 Game Novice to Ninja](/support/3/html/epub/HTML5_Games_Novice_to_Ninja_Earle_Castledine.epub)
 - [HTML SEO](/support/3/html/pdf/html_seo.pdf)
 - [HTML Cheatsheet 1](/support/3/html/pdf/html_cheatsheet_01.pdf)
 - [HTML Cheatsheet 2](/support/3/html/pdf/html_cheatsheet_02.pdf)
 - [HTML5 Quick Markup Guide](/support/3/html/epub/HTML5_Quick_Markup_Reference_Wallace_Jackson.epub)
 - [HTML Manual of Style](/support/3/html/epub/HTML_Manual_of_Style_A_Clear_Concise_Reference.epub)
 - [Essential Guide to HTML5](/support/3/html/epub/The_Essential_Guide_to_HTML5_Games.epub)
 - [HTML Handkbook](/support/3/html/epub/The_HTML_Handbook_Flavio_Copes.epub)
 - [Web Coding Development](/support/3/html/epub/Web_Coding_Development_AllinOne_For_Dummies_Paul_McFedries.epub)

</div>
</div>`,frontmatter:{},index:7,start:196,end:236,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:kz,meta:{slide:{raw:`
&nbsp;

<Cover fs="100px">
    Ambiente di Sviluppo
</Cover>
`,content:`&nbsp;

<Cover fs="100px">
    Ambiente di Sviluppo
</Cover>`,frontmatter:{},index:8,start:237,end:244,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Tz,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

&nbsp;

- Al fine di comprendere appieno lo sviluppo web, è preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice
- Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web
- Il passaggio ad un sistema autore o ad un CMS risulta poi più facile e intuitivo.
`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

&nbsp;

- Al fine di comprendere appieno lo sviluppo web, è preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice
- Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web
- Il passaggio ad un sistema autore o ad un CMS risulta poi più facile e intuitivo.`,frontmatter:{},index:9,start:245,end:254,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Ez,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:10,start:255,end:277,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Pz,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.


![html5_4.jpg](/media/html5_4.jpg)

`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.


![html5_4.jpg](/media/html5_4.jpg)`,frontmatter:{},index:11,start:278,end:287,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Wz,meta:{slide:{raw:`
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
- La pagina viene visualizzata all'interno del browser`,frontmatter:{},index:12,start:288,end:299,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Bz,meta:{slide:{raw:`
&nbsp;

<Cover fs="100px">
    Tag e Attributi
</Cover>


`,content:`&nbsp;

<Cover fs="100px">
    Tag e Attributi
</Cover>`,frontmatter:{},index:13,start:300,end:309,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:dM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:14,start:310,end:332,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:bM,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:15,start:333,end:377,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:EM,meta:{slide:{raw:`
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

<br>**Esempio:**
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

<br>**Esempio:**
\`\`\`html
<meta name="author" content="Antonio Mancuso" />
<a href="https://www.w3schools.com">Visit W3Schools</a>
<p style="color:red;">This is a red paragraph.</p>
\`\`\``,frontmatter:{},index:16,start:378,end:405,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:AM,meta:{slide:{raw:`
&nbsp;

<Cover fs="80px">
    La struttura di una pagina Web
</Cover>

`,content:`&nbsp;

<Cover fs="80px">
    La struttura di una pagina Web
</Cover>`,frontmatter:{},index:17,start:406,end:414,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:FM,meta:{slide:{raw:`
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
3. **Body**: consiste nel contenuto principale della pagina HTML.`,frontmatter:{},index:18,start:415,end:426,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:VM,meta:{slide:{raw:`
# Struttura pagina HTML

Rappresentazione grafica della struttura di una pagina HTML

![html5_5.jpg](/media/html5_5.jpg)

`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Rappresentazione grafica della struttura di una pagina HTML

![html5_5.jpg](/media/html5_5.jpg)`,frontmatter:{},index:19,start:427,end:435,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:eL,meta:{slide:{raw:`
# Struttura pagina HTML

Documento HTML

- Tutti i documenti HTML devono iniziare con la dichiarazione DOCTYPE che deve essere seguita dal TAG di più alto livello 

<br>
\`\`\`html
<!DOCTYPE html>
<html>
\`\`\`

<br>

- **&lt;!DOCTYPE html&gt;**: rappresenta il tipo di documento (html) e permette al browser di visualizzare la pagina HTML in modo corretto.
- Deve apparire nella pagina 1 sola volta come prima linea e prima di qualsiasi altro elemento o tag.
- **&lt;html&gt;**: è il primo tag di apertura che indica l'inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.

`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Documento HTML

- Tutti i documenti HTML devono iniziare con la dichiarazione DOCTYPE che deve essere seguita dal TAG di più alto livello 

<br>
\`\`\`html
<!DOCTYPE html>
<html>
\`\`\`

<br>

- **&lt;!DOCTYPE html&gt;**: rappresenta il tipo di documento (html) e permette al browser di visualizzare la pagina HTML in modo corretto.
- Deve apparire nella pagina 1 sola volta come prima linea e prima di qualsiasi altro elemento o tag.
- **&lt;html&gt;**: è il primo tag di apertura che indica l'inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.`,frontmatter:{},index:20,start:436,end:456,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:lL,meta:{slide:{raw:`
# Struttura pagina HTML

Header del documento

- Il primo elemento di apertura della pagina HTML è l'***HEAD**er* o intestazione.
- **&lt;head&gt;**: tag di apertura dell'header che contiene la descrizione dei *metadati* del documento HTML.
- I metadati sono dati che descrivono delle caratteristiche del documento, per esempip il titolo, il set di caratteri, l'autore,etc...
- La sezione header ed i metadati contenuti  **NON** sono visualizzati.
- Il più importante elemento della sezione head è il titolo identificato dal tag

<br>

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

<br>

\`\`\`html
<title>Titolo della pagina</title>
\`\`\``,frontmatter:{},index:21,start:457,end:474,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:gL,meta:{slide:{raw:`
# Struttura pagina HTML

Body e contenuto del documento

- La sezione del documento identificata dal tag

<br>

\`\`\`html
<body>
  ...
  ...
</body>
\`\`\`

<br>

- Rappresenta e contiene tutti i tag di descrizione e markup della pagina.
- In questa sezione viene definito il contenuto che si vuole visualizzare nel browser.
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Body e contenuto del documento

- La sezione del documento identificata dal tag

<br>

\`\`\`html
<body>
  ...
  ...
</body>
\`\`\`

<br>

- Rappresenta e contiene tutti i tag di descrizione e markup della pagina.
- In questa sezione viene definito il contenuto che si vuole visualizzare nel browser.`,frontmatter:{},index:22,start:475,end:496,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:wL,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:23,start:497,end:525,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:LL,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header

La sezione &lt;head&gt; può contenere i seguenti tag:
- **&lt;title&gt;:** definisce il titolo della pagina HTML.
- **&lt;style&gt;:** definisce lo stile da applicare alla pagina HTML.
- **&lt;meta&gt;:** definisce specifici metadata per il documento.
- **&lt;link&gt;:** utilizzato per referenziare elementi o documenti esterni.
- **&lt;script&gt;:** definisce la logica da eseguire durante la visualizzazione delle pagina.
- **&lt;base&gt;:** specifica un UTL di base da applicare a tutto il documento.

`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header

La sezione &lt;head&gt; può contenere i seguenti tag:
- **&lt;title&gt;:** definisce il titolo della pagina HTML.
- **&lt;style&gt;:** definisce lo stile da applicare alla pagina HTML.
- **&lt;meta&gt;:** definisce specifici metadata per il documento.
- **&lt;link&gt;:** utilizzato per referenziare elementi o documenti esterni.
- **&lt;script&gt;:** definisce la logica da eseguire durante la visualizzazione delle pagina.
- **&lt;base&gt;:** specifica un UTL di base da applicare a tutto il documento.`,frontmatter:{},index:24,start:526,end:540,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:RL,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header: &lt;title&gt;

- Il più importante elemento della sezione head è il titolo identificato dal tag

<br>

\`\`\`html
<title>Titolo della pagina</title>
\`\`\`

<br>

- Il titolo deve contenere solo informazioni testuali ed è visualizzato nel bordo o tab della finestra del browser.
- Il titolo è molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull'algoritmo che decide in quale ordine visualizzare le pagine trovate.
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header: &lt;title&gt;

- Il più importante elemento della sezione head è il titolo identificato dal tag

<br>

\`\`\`html
<title>Titolo della pagina</title>
\`\`\`

<br>

- Il titolo deve contenere solo informazioni testuali ed è visualizzato nel bordo o tab della finestra del browser.
- Il titolo è molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull'algoritmo che decide in quale ordine visualizzare le pagine trovate.`,frontmatter:{},index:25,start:541,end:559,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:UL,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header: &lt;meta&gt;

Viene utilizzato per specificare vari tipi di metadati, tra cui:
- **character set**: set di caratteri usato dalla pagina web
- **descrizione pagina**: descrizione della pagina e dei suoi contenuti
- **keywords**: parole chiave per le ricerche web
- **autore del documento**: autore/i del documento
- **viewport settings**: impostazioni del viewport, spesso utile per dispositivi mobili

<Banner padding=25px mt=25px>
Importante notare che i metadati, non sono visualizzati dal browser, ma utilizzati dai motori di ricerca per comprendere meglio il contenuto della pagina stessa.
</Banner>
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header: &lt;meta&gt;

Viene utilizzato per specificare vari tipi di metadati, tra cui:
- **character set**: set di caratteri usato dalla pagina web
- **descrizione pagina**: descrizione della pagina e dei suoi contenuti
- **keywords**: parole chiave per le ricerche web
- **autore del documento**: autore/i del documento
- **viewport settings**: impostazioni del viewport, spesso utile per dispositivi mobili

<Banner padding=25px mt=25px>
Importante notare che i metadati, non sono visualizzati dal browser, ma utilizzati dai motori di ricerca per comprendere meglio il contenuto della pagina stessa.
</Banner>`,frontmatter:{},index:26,start:560,end:576,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:n3,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header: &lt;style&gt;

- Definisce uno o più stili che vanno a modificare la visualizzazione della pagina HTML

<br>

\`\`\`html
<style>
  body {background-color: powderblue;}
  h1 {color: red;}
  p {color: blue;}
</style>
\`\`\`

<br>

- Normalmente non si usa mai in quanto non è una buona pratica di programmazione
- Per pagine di media/alta complessità non si include in quanto è più pulito definire gli stili della pagina in un file esterno di tipo **CSS**
 `,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header: &lt;style&gt;

- Definisce uno o più stili che vanno a modificare la visualizzazione della pagina HTML

<br>

\`\`\`html
<style>
  body {background-color: powderblue;}
  h1 {color: red;}
  p {color: blue;}
</style>
\`\`\`

<br>

- Normalmente non si usa mai in quanto non è una buona pratica di programmazione
- Per pagine di media/alta complessità non si include in quanto è più pulito definire gli stili della pagina in un file esterno di tipo **CSS**`,frontmatter:{},index:27,start:577,end:599,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:u3,meta:{slide:{raw:`
# Struttura pagina HTML

I tag dell'header: &lt;script&gt;

- Desinisce uno script in **Javascript** che viene eseguito dal browser durante la visualizzazione della pagina.
- Permette di eseguire un programma lato client direttamente all'interno del browser.
- Normalmente utilizzato per interagire con l'utente o per modificare l'aspetto della pagina stessa.

<br>

\`\`\`ts
<script>
    function myFunction() { 
        document.getElementById("titolo").innerHTML = "STRUTTURA BASE DI UNA PAGINA WEB";
    }
<\/script>
\`\`\`

<br>

- Normalmente non si usa mai in quanto non è una buona pratica di programmazione
- Per pagine di media/alta complessità non si include in quanto è più pulito definire gli script della pagina in un file esterno di tipo **JS** 
`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

I tag dell'header: &lt;script&gt;

- Desinisce uno script in **Javascript** che viene eseguito dal browser durante la visualizzazione della pagina.
- Permette di eseguire un programma lato client direttamente all'interno del browser.
- Normalmente utilizzato per interagire con l'utente o per modificare l'aspetto della pagina stessa.

<br>

\`\`\`ts
<script>
    function myFunction() { 
        document.getElementById("titolo").innerHTML = "STRUTTURA BASE DI UNA PAGINA WEB";
    }
<\/script>
\`\`\`

<br>

- Normalmente non si usa mai in quanto non è una buona pratica di programmazione
- Per pagine di media/alta complessità non si include in quanto è più pulito definire gli script della pagina in un file esterno di tipo **JS**`,frontmatter:{},index:28,start:600,end:624,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:h3,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:29,start:625,end:655,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:b3,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:30,start:656,end:673,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:$3,meta:{slide:{raw:`
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
5. Provare a modificare la sezione *script* e verificare i cambiamenti`,frontmatter:{},index:31,start:674,end:686,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:L3,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
  Titoli e Paragrafi in HTML
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
  Titoli e Paragrafi in HTML
</Cover>`,frontmatter:{},index:32,start:687,end:694,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:N3,meta:{slide:{raw:`
# HTML Headings

Titoli e sottotitoli

- Heading/intestazione: sono marcatori HTML che permettono di definire titoli e sottotitoli in una pagina web.
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

- Heading/intestazione: sono marcatori HTML che permettono di definire titoli e sottotitoli in una pagina web.
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
</div>`,frontmatter:{},index:33,start:695,end:728,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:K3,meta:{slide:{raw:`
# HTML Paragrafi

Blocchi di testo

- Nell'editing di una pagina HTML, è spesso utile poter inserire un blocco di testo o paragrafo
- HTML mette a disposizione un tag specifico **&lt;p&gt;** che definisce un paragrafo di testo, lungo a piacere, da visualizzare in una pagina web 

<br>

\`\`\`html
<p>
  ...
  ... Blocco di testo
  ...
</p>
\`\`\`

<br>

- Ogni paragrafo è preceduto e seguito da una linea bianca distanziatrice.
- Il browser è libero di aggiunge automaticamente degli spazi (un margine) prima e dopo il testo.
- Non si può essere sicuri di come il browser visualizzi il paragrafo. 
- Il risultato può essere diverso su uno schermo grande rispetto ad uno piccolo. 
- Pertanto l'aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser.
`,title:"HTML Paragrafi",level:1,content:`# HTML Paragrafi

Blocchi di testo

- Nell'editing di una pagina HTML, è spesso utile poter inserire un blocco di testo o paragrafo
- HTML mette a disposizione un tag specifico **&lt;p&gt;** che definisce un paragrafo di testo, lungo a piacere, da visualizzare in una pagina web 

<br>

\`\`\`html
<p>
  ...
  ... Blocco di testo
  ...
</p>
\`\`\`

<br>

- Ogni paragrafo è preceduto e seguito da una linea bianca distanziatrice.
- Il browser è libero di aggiunge automaticamente degli spazi (un margine) prima e dopo il testo.
- Non si può essere sicuri di come il browser visualizzi il paragrafo. 
- Il risultato può essere diverso su uno schermo grande rispetto ad uno piccolo. 
- Pertanto l'aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser.`,frontmatter:{},index:34,start:729,end:755,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:Z3,meta:{slide:{raw:`
# Esercizio html_02

Heading e paragrafi

1. Trasformare il file di test [*esercizio_html_02.txt*](/support/3/html/esercizio_html_02.txt) in *|cognome|_esercizio_html_02.html*
2. Creare la struttura della pagina HTML inserendo anche i metadati appropriati
3. Impaginare il testo inserendo, in modo appropriato, gli heading necessari per titoli e sottotitoli
4. Suddividere il testo in paragrafi in modo opportuno
5. Consegnare su github il file con nome |cognome|_esercizio_html_02.html
`,title:"Esercizio html_02",level:1,content:`# Esercizio html_02

Heading e paragrafi

1. Trasformare il file di test [*esercizio_html_02.txt*](/support/3/html/esercizio_html_02.txt) in *|cognome|_esercizio_html_02.html*
2. Creare la struttura della pagina HTML inserendo anche i metadati appropriati
3. Impaginare il testo inserendo, in modo appropriato, gli heading necessari per titoli e sottotitoli
4. Suddividere il testo in paragrafi in modo opportuno
5. Consegnare su github il file con nome |cognome|_esercizio_html_02.html`,frontmatter:{},index:35,start:756,end:767,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:nC,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
  Elementi block e inline
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
  Elementi block e inline
</Cover>`,frontmatter:{},index:36,start:768,end:775,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:pC,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:37,start:776,end:802,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:yC,meta:{slide:{raw:`
# Display Value

Elementi inline e block

### **inline** element

- Un elemento inline non comincia su una nuova linea
- Un elemento inline occupa solo la larghezza minima necessaria

<br>
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

<br>
<pre>

<span style="padding:0px 5px 0px 5px; border: 1px solid black;">&lt;span&gt; is a inline-level element.</span><span style="padding:0px 5px 0px 5px; border: 1px solid black;">&lt;input&gt; is another inline-level element.</span>
</pre>


Qui la lista di tag di tipo block:
\`\`\`html
<a> <abbr> <acronym> <b> <bdo> <big> <br> <button> <cite> <code> <dfn> <em> <i> <img> <input> 
<kbd> <label> <map> <object> <output> <q> <samp> <script> <select> <small> <span> <strong> <sub> 
<sup> <textarea> <time> <tt> <var>
\`\`\``,frontmatter:{},index:38,start:803,end:827,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:CC,meta:{slide:{raw:`
# DIV

Contenitore di contenitori block

- Un tag estremamente importante nello sviluppo web moderno è **&lt;div&gt;**.
- **&lt;DIV&gt;** è di tipo **block** e definisce un generico blocco di contenuto senza una semantica particolare. 
- E' comunemente usato come contenitore per altri elementi HTML o altri div
- Pertanto DIV è utilizzato per creare delle strutture di layout del contenuto web.
- Insieme a CSS è utilizzato per definire lo stile di blocchi di contenuto

<br>

### Esempio
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

<br>

### Esempio
<div style="background-color:red;color:white;padding:20px;">
  <h2>ATTENZIONE</h2>
  <p>Si richiede a tutti gli studenti di studiare e sperimentare il più possibile con HTML.</p>
  <p>Oggi tutte le moderne applicazioni sono sviluppate in HTML - CSS e JavaScript</p>
</div>`,frontmatter:{},index:39,start:828,end:848,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:RC,meta:{slide:{raw:`
# SPAN

Contenitore di contenitori inline

- Un tag estremamente importante nello sviluppo web moderno è **&lt;span&gt;**.
- Il tag **&lt;span&gt;** definisce un generico contenitore di tipo **inline** a cui non è associata nessuna semantica particolare.
- E' comunemente usato per modificare una parte di testo in un paragrafo on in altre sezione di un documento HTML.
- Insieme a CSS è utilizzato per definire lo stile di parti di testo.

<br>

### Esempio
<p>Comunicato a tutti gli studenti: <span style="color:white;background:red;font-weight:bold">ATTENZIONE</span> Si richiede a tutti gli studenti di <span style="color:darkolivegreen;font-weight:bold">studiare</span> e sperimentare il più possibile con HTML.</p>
`,title:"SPAN",level:1,content:`# SPAN

Contenitore di contenitori inline

- Un tag estremamente importante nello sviluppo web moderno è **&lt;span&gt;**.
- Il tag **&lt;span&gt;** definisce un generico contenitore di tipo **inline** a cui non è associata nessuna semantica particolare.
- E' comunemente usato per modificare una parte di testo in un paragrafo on in altre sezione di un documento HTML.
- Insieme a CSS è utilizzato per definire lo stile di parti di testo.

<br>

### Esempio
<p>Comunicato a tutti gli studenti: <span style="color:white;background:red;font-weight:bold">ATTENZIONE</span> Si richiede a tutti gli studenti di <span style="color:darkolivegreen;font-weight:bold">studiare</span> e sperimentare il più possibile con HTML.</p>`,frontmatter:{},index:40,start:849,end:864,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:qC,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
  Ancore e Link
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
  Ancore e Link
</Cover>`,frontmatter:{},index:41,start:865,end:872,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:YC,meta:{slide:{raw:`
# Ancore e Link

Collegamenti a contenuti esterni

- I link sono alla base del concetto di *iptertesto*, che a sua volta è alla base dello WWW.
- I link servono per creare dei *collegamenti* tra documenti diversi in modo da formare un unico *ipertesto*.
- Un link ad una risorsa o documento esterno si crea usando il tag *ancora* **&lt;a&gt;**

<br>

\`\`\`html
<a href="url">link text</a>

Esempio
<a href="https://agnelli.it/" target="_blank">Istituto Internazionale E.Agnelli</a>
\`\`\`

Qui puoi visitare L'<a href="https://agnelli.it/" target="_parent">Istituto Internazionale E.Agnelli</a>

- **href**: attributo che definisce la destinazione dell'ancora e pertanto il link
- **target**: per default il link viene visualizzato nella finestra corrente del browser. Questo attributo permette di modificare il comportamento standard.

Il principale valore per *target* è **_blank**, e permette di aprire il documento in un una nuova tab del browser.
`,title:"Ancore e Link",level:1,content:`# Ancore e Link

Collegamenti a contenuti esterni

- I link sono alla base del concetto di *iptertesto*, che a sua volta è alla base dello WWW.
- I link servono per creare dei *collegamenti* tra documenti diversi in modo da formare un unico *ipertesto*.
- Un link ad una risorsa o documento esterno si crea usando il tag *ancora* **&lt;a&gt;**

<br>

\`\`\`html
<a href="url">link text</a>

Esempio
<a href="https://agnelli.it/" target="_blank">Istituto Internazionale E.Agnelli</a>
\`\`\`

Qui puoi visitare L'<a href="https://agnelli.it/" target="_parent">Istituto Internazionale E.Agnelli</a>

- **href**: attributo che definisce la destinazione dell'ancora e pertanto il link
- **target**: per default il link viene visualizzato nella finestra corrente del browser. Questo attributo permette di modificare il comportamento standard.

Il principale valore per *target* è **_blank**, e permette di aprire il documento in un una nuova tab del browser.`,frontmatter:{},index:42,start:873,end:898,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:aE,meta:{slide:{raw:`
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

Questo perchè, tutte le URL relative fanno riferimento ad una directory chiamata **document root** che rappresenta la root del web server.`,frontmatter:{},index:43,start:899,end:910,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:cE,meta:{slide:{raw:`
# Esercizio html_03

Link

1. Modificare il file *|cognome|_esercizio_html_02.html* e salvarlo come *|cognome|_esercizio_html_03.html*
2. Trasformare almeno 5 parole in link a risorse esterne
3. Trasformare altre 5 parole in modo che siano visualizzate in verde, blue o rosso
4. Selezionare almeno 2 frasi particolarmente importanti e inserirle in un rettangolo con sfondo blue e testo di color bianco.
5. Consegnare su github il file con nome |cognome|_esercizio_html_03.html


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*

`,title:"Esercizio html_03",level:1,content:`# Esercizio html_03

Link

1. Modificare il file *|cognome|_esercizio_html_02.html* e salvarlo come *|cognome|_esercizio_html_03.html*
2. Trasformare almeno 5 parole in link a risorse esterne
3. Trasformare altre 5 parole in modo che siano visualizzate in verde, blue o rosso
4. Selezionare almeno 2 frasi particolarmente importanti e inserirle in un rettangolo con sfondo blue e testo di color bianco.
5. Consegnare su github il file con nome |cognome|_esercizio_html_03.html


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:44,start:911,end:926,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:dE,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
  Web grafico con le immagini
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
  Web grafico con le immagini
</Cover>`,frontmatter:{},index:45,start:927,end:934,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:xE,meta:{slide:{raw:`
# Immagini

Il Web diventa grafico

- La versione iniziale del WWW, prevedeva solo l'uso di informazioni testuali e non supportava l'uso di immagini all'interno delle pagine web.
- Con la nuova specifica HTML 2.0 del 1995, viene introdotto il nuovo tag &lt;img&gt; che permette di inserire immagini nelle pagine web.

<br>

\`\`\`html
<img src="url" alt="alternatetext">
\`\`\` 

<br>

- **src**: attributo che specifica il percorso/link (relativo o assoluto) all'immagine
- **alt**: in caso in cui l'immagine non possa essere visualizzata, specifica un testo alternativo

Normalmente si specificano anche gli attributi:
- **width**: specifica la larghezza dell'immaggine in pixel
- **height**: specifica l'altezza dell'immagine in pixel
`,title:"Immagini",level:1,content:`# Immagini

Il Web diventa grafico

- La versione iniziale del WWW, prevedeva solo l'uso di informazioni testuali e non supportava l'uso di immagini all'interno delle pagine web.
- Con la nuova specifica HTML 2.0 del 1995, viene introdotto il nuovo tag &lt;img&gt; che permette di inserire immagini nelle pagine web.

<br>

\`\`\`html
<img src="url" alt="alternatetext">
\`\`\` 

<br>

- **src**: attributo che specifica il percorso/link (relativo o assoluto) all'immagine
- **alt**: in caso in cui l'immagine non possa essere visualizzata, specifica un testo alternativo

Normalmente si specificano anche gli attributi:
- **width**: specifica la larghezza dell'immaggine in pixel
- **height**: specifica l'altezza dell'immagine in pixel`,frontmatter:{},index:46,start:935,end:958,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:EE,meta:{slide:{raw:`
# Immagini

Il Web diventa grafico

\`\`\`html
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
\`\`\`

<br>
<center>
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
</center>
`,title:"Immagini",level:1,content:`# Immagini

Il Web diventa grafico

\`\`\`html
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
\`\`\`

<br>
<center>
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
</center>`,frontmatter:{},index:47,start:959,end:973,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:RE,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:48,start:974,end:993,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:jE,meta:{slide:{raw:`
# Esercizio html_04


Link

1. Editare il file *|cognome|_esercizio_html_03.html* e salvarlo come *|cognome|_esercizio_html_04.html*
2. Aggiungere almeno 1 immagine, relative al testo, come risorsa esterna (link assoluto)
3. Aggiungere almeno 1 immagine, relative al testo, come risorsa interna (link relativo)
4. Aggiungere almeno 1 immagine, relative al testo, che sia anche un link ad una pagina esterna
5. Consegnare su github il file con nome |cognome|_esercizio_html_04.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*
`,title:"Esercizio html_04",level:1,content:`# Esercizio html_04


Link

1. Editare il file *|cognome|_esercizio_html_03.html* e salvarlo come *|cognome|_esercizio_html_04.html*
2. Aggiungere almeno 1 immagine, relative al testo, come risorsa esterna (link assoluto)
3. Aggiungere almeno 1 immagine, relative al testo, come risorsa interna (link relativo)
4. Aggiungere almeno 1 immagine, relative al testo, che sia anche un link ad una pagina esterna
5. Consegnare su github il file con nome |cognome|_esercizio_html_04.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:49,start:994,end:1009,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:UE,meta:{slide:{raw:`
&nbsp;

<Cover fs=80px>
  Formattazione del testo in HTML
</Cover>
`,content:`&nbsp;

<Cover fs=80px>
  Formattazione del testo in HTML
</Cover>`,frontmatter:{},index:50,start:1010,end:1017,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:XE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:51,start:1018,end:1042,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:kI,meta:{slide:{raw:`
# Formattazione del Testo

Tag di formattazione

- bold
\`\`\`html
In un paragrafo spesso vogliamo poter evidenziare una parola in <b>grassetto</b>.
\`\`\`
<br>In un paragrafo spesso vogliamo poter evidenziare una parola in <b>grassetto</b>.<br><br>

- strong
\`\`\`html
Spesso è necessario definire una parola <strong>molto importante</strong>.
\`\`\` 
<br>Spesso è necessario definire una parola <strong>molto importante</strong>.<br><br>

- italico
\`\`\`html
Alcune volte è necessario definire un termine tecnico come <i>Web Server</i>
\`\`\`
<br>Alcune volte è necessario definire un termine tecnico come <i>Web Server</i>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag di formattazione

- bold
\`\`\`html
In un paragrafo spesso vogliamo poter evidenziare una parola in <b>grassetto</b>.
\`\`\`
<br>In un paragrafo spesso vogliamo poter evidenziare una parola in <b>grassetto</b>.<br><br>

- strong
\`\`\`html
Spesso è necessario definire una parola <strong>molto importante</strong>.
\`\`\` 
<br>Spesso è necessario definire una parola <strong>molto importante</strong>.<br><br>

- italico
\`\`\`html
Alcune volte è necessario definire un termine tecnico come <i>Web Server</i>
\`\`\`
<br>Alcune volte è necessario definire un termine tecnico come <i>Web Server</i>`,frontmatter:{},index:52,start:1043,end:1066,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:WI,meta:{slide:{raw:`
# Formattazione del Testo

Tag di formattazione

- enfasi
\`\`\`html
In un testo ci sono specifiche parole a cui si vuole dare <em>enfasi</em>.
\`\`\`
<br>In un testo ci sono specifiche parole a cui si vuole dare <em>enfasi</em>.<br><br>

- mark
\`\`\`html
Un altro modo per <mark>evidenziare</mark> una o più parole è usare il tag <b>mark</b>
\`\`\`
<br>Un altro modo per <mark>evidenziare</mark> una o più parole è usare il tag <b>mark</b><br><br>

- small
\`\`\`html
Al contrario quando un testo <small>è di poca importanza</small> si può usare il tag <b>small</b>
\`\`\`
<br>Al contrario quando un testo <small>è di poca importanza</small> si può usare il tag <b>small</b>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag di formattazione

- enfasi
\`\`\`html
In un testo ci sono specifiche parole a cui si vuole dare <em>enfasi</em>.
\`\`\`
<br>In un testo ci sono specifiche parole a cui si vuole dare <em>enfasi</em>.<br><br>

- mark
\`\`\`html
Un altro modo per <mark>evidenziare</mark> una o più parole è usare il tag <b>mark</b>
\`\`\`
<br>Un altro modo per <mark>evidenziare</mark> una o più parole è usare il tag <b>mark</b><br><br>

- small
\`\`\`html
Al contrario quando un testo <small>è di poca importanza</small> si può usare il tag <b>small</b>
\`\`\`
<br>Al contrario quando un testo <small>è di poca importanza</small> si può usare il tag <b>small</b>`,frontmatter:{},index:53,start:1067,end:1090,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:sS,meta:{slide:{raw:`
# Formattazione del Testo

Tag di formattazione

- del e ins
\`\`\`html
Il mio cibo preferito è il <del>pollo</del> <ins>tacchino</ins>.
\`\`\`
<br>Il mio cibo preferito è il <del>pollo</del> <ins>tacchino</ins>.<br><br>

- sub e sup
\`\`\`html
Il logaritmo in base 2 di 8 è 3: log<sub>2</sub> 8 = 3
In modo analogo 2 elevato alla 3 fa 8: 2<sup>3</sup> = 8
In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> 
mentre i <sub>pedici</sub> con il tag <b>sub</b>
\`\`\`
<br>Il logaritmo in base 2 di 8 è 3: log<sub>2</sub> 8 = 3

In modo analogo 2 elevato alla 3 fa 8: 2<sup>3</sup> = 8

In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> mentre i <sub>pedici</sub> con il tag <b>sub</b>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag di formattazione

- del e ins
\`\`\`html
Il mio cibo preferito è il <del>pollo</del> <ins>tacchino</ins>.
\`\`\`
<br>Il mio cibo preferito è il <del>pollo</del> <ins>tacchino</ins>.<br><br>

- sub e sup
\`\`\`html
Il logaritmo in base 2 di 8 è 3: log<sub>2</sub> 8 = 3
In modo analogo 2 elevato alla 3 fa 8: 2<sup>3</sup> = 8
In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> 
mentre i <sub>pedici</sub> con il tag <b>sub</b>
\`\`\`
<br>Il logaritmo in base 2 di 8 è 3: log<sub>2</sub> 8 = 3

In modo analogo 2 elevato alla 3 fa 8: 2<sup>3</sup> = 8

In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> mentre i <sub>pedici</sub> con il tag <b>sub</b>`,frontmatter:{},index:54,start:1091,end:1115,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:uS,meta:{slide:{raw:`
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
11. Consegnare su github il file con nome |cognome|_esercizio_html_05.html

    
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
11. Consegnare su github il file con nome |cognome|_esercizio_html_05.html

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:55,start:1116,end:1138,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:_S,meta:{slide:{raw:`
# Formattazione del Testo

Tag per Quotazioni e Citazioni


- HTML mette a disposizione 4 tag specifici per la definizione di testo che rappresenta una citazione o una quote.
- Questi tag definiscono la semantica e cioè il significato del testo che racchiudono.
- Il browser decide come visualizzare il testo racchiuso in questi tag

<br>

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

<br>

\`\`\`html
<blockquote>: definisce una porzione di testo come una citazione esterna
<q>: definisce una breve citazione
<abbr>: definisce un'abbreviazione o un acronimo
<cite>: citazione ad un lavoro altrui (libro, sito web, ...)
\`\`\``,frontmatter:{},index:56,start:1139,end:1158,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:CS,meta:{slide:{raw:`
# Formattazione del Testo

Tag per Quotazioni e Citazioni

- blockquote

<br>

\`\`\`html
Alle volte in un testo si vuole "quotare" un altro autore.
Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale.
Quindi con il tag <b>blockquote</b> si può definire una quotazione
indicando la sorgente dell'informazione
<blockquote cite="https://it.wikipedia.org/wiki/Giovanni_Bosco">
  La sottrazione di benevolenza è un castigo che eccita l'emulazione
</blockquote>
\`\`\`

<br>
Alle volte in un testo si vuole "quotare" un altro autore.
Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale.
Quindi con il tag <b>blockquote</b> si può definire una quotazione
indicando la sorgente dell'informazione
<blockquote cite="https://it.wikipedia.org/wiki/Giovanni_Bosco">
  La sottrazione di benevolenza è un castigo che eccita l'emulazione
</blockquote>

<br>

-  Come si può notare la citazione è indentata. Il link alla citazione  non ha un effetto visivo ma può essere utile al motore di ricerca o altri tool.
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag per Quotazioni e Citazioni

- blockquote

<br>

\`\`\`html
Alle volte in un testo si vuole "quotare" un altro autore.
Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale.
Quindi con il tag <b>blockquote</b> si può definire una quotazione
indicando la sorgente dell'informazione
<blockquote cite="https://it.wikipedia.org/wiki/Giovanni_Bosco">
  La sottrazione di benevolenza è un castigo che eccita l'emulazione
</blockquote>
\`\`\`

<br>
Alle volte in un testo si vuole "quotare" un altro autore.
Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale.
Quindi con il tag <b>blockquote</b> si può definire una quotazione
indicando la sorgente dell'informazione
<blockquote cite="https://it.wikipedia.org/wiki/Giovanni_Bosco">
  La sottrazione di benevolenza è un castigo che eccita l'emulazione
</blockquote>

<br>

-  Come si può notare la citazione è indentata. Il link alla citazione  non ha un effetto visivo ma può essere utile al motore di ricerca o altri tool.`,frontmatter:{},index:57,start:1159,end:1191,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:JS,meta:{slide:{raw:`
# Formattazione del Testo

Tag per Quotazioni e Citazioni

- quotazione
\`\`\`html
Quando in un testo vogliamo fare una <q>breve citazione</q>, basta inserire il testo nel tag <b>q</b> 
\`\`\` 
<br>Quando in un testo vogliamo fare una <q>breve citazione</q>, basta inserire il testo nel tag <b>q</b> <br><br>

- abbreviazione
\`\`\`html
<abbr title="Gnu is Not Unix">GNU</abbr>di GNU/Linux sembra una  parola ma in realtà è un acronimo.
\`\`\`
<br><abbr title="Gnu is Not Unix">GNU</abbr> di GNU/Linux sembra una parola ma in realtà è un acronimo.<br><br>

- citazione lavoro altrui
\`\`\`html
Un alternativa per una citazione è usare il tag <b>cite</b>. 
In una disicussione accesa Linus disse: <cite>"Parlare è facile. Mostrami il codice".</cite>
\`\`\`
<br>Un alternativa per una citazione è usare il tag <b>cite</b>. In una disicussione accesa Linus disse: <cite>"Parlare è facile. Mostrami il codice".</cite>
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag per Quotazioni e Citazioni

- quotazione
\`\`\`html
Quando in un testo vogliamo fare una <q>breve citazione</q>, basta inserire il testo nel tag <b>q</b> 
\`\`\` 
<br>Quando in un testo vogliamo fare una <q>breve citazione</q>, basta inserire il testo nel tag <b>q</b> <br><br>

- abbreviazione
\`\`\`html
<abbr title="Gnu is Not Unix">GNU</abbr>di GNU/Linux sembra una  parola ma in realtà è un acronimo.
\`\`\`
<br><abbr title="Gnu is Not Unix">GNU</abbr> di GNU/Linux sembra una parola ma in realtà è un acronimo.<br><br>

- citazione lavoro altrui
\`\`\`html
Un alternativa per una citazione è usare il tag <b>cite</b>. 
In una disicussione accesa Linus disse: <cite>"Parlare è facile. Mostrami il codice".</cite>
\`\`\`
<br>Un alternativa per una citazione è usare il tag <b>cite</b>. In una disicussione accesa Linus disse: <cite>"Parlare è facile. Mostrami il codice".</cite>`,frontmatter:{},index:58,start:1192,end:1216,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:a5,meta:{slide:{raw:`
# Esercizio html_06


Link

1. Editare il file *|cognome|_esercizio_html_05.html* e salvarlo come *|cognome|_esercizio_html_06.html*
2. creare una citazione per un blocco di testo
3. marcare 3 frasi o parole come brevi citazioni
4. marcare almeno 3 abbreviazioni
5. marcare 1 citazione (cite) di qualche altro autore
6. Consegnare su github il file con nome |cognome|_esercizio_html_06.html

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*


`,title:"Esercizio html_06",level:1,content:`# Esercizio html_06


Link

1. Editare il file *|cognome|_esercizio_html_05.html* e salvarlo come *|cognome|_esercizio_html_06.html*
2. creare una citazione per un blocco di testo
3. marcare 3 frasi o parole come brevi citazioni
4. marcare almeno 3 abbreviazioni
5. marcare 1 citazione (cite) di qualche altro autore
6. Consegnare su github il file con nome |cognome|_esercizio_html_06.html

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:59,start:1217,end:1235,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:b5,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- Ci sono altri tag che formattano il testo ma che non hanno una semantica particolare.
  
\`\`\`html
<u>: definisce un testo sottolineato
<s>: definisce una testo sbarrato
  <pre>: marca una porzione di testo come pre formattato
<code>: definisce un blocco di testo come codice sorgente
\`\`\`

<br>

- sottolineato
\`\`\`html
Se si vuole <u>sottolineare</u> una parola basta usare il tag <u></u> 
\`\`\` 
<br>Se si vuole <u>sottolineare</u> una parola basta usare il tag &lt;u&gt; <br><br>

- sbarrato
\`\`\`html
Se si vuole <s>sbarrare</s> una parola basta usare il tag <s></s>
\`\`\`
<br>Se si vuole <s>sbarrare</s> una parola basta usare il tag &lt;s&gt;


`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag addizionali

- Ci sono altri tag che formattano il testo ma che non hanno una semantica particolare.
  
\`\`\`html
<u>: definisce un testo sottolineato
<s>: definisce una testo sbarrato
  <pre>: marca una porzione di testo come pre formattato
<code>: definisce un blocco di testo come codice sorgente
\`\`\`

<br>

- sottolineato
\`\`\`html
Se si vuole <u>sottolineare</u> una parola basta usare il tag <u></u> 
\`\`\` 
<br>Se si vuole <u>sottolineare</u> una parola basta usare il tag &lt;u&gt; <br><br>

- sbarrato
\`\`\`html
Se si vuole <s>sbarrare</s> una parola basta usare il tag <s></s>
\`\`\`
<br>Se si vuole <s>sbarrare</s> una parola basta usare il tag &lt;s&gt;`,frontmatter:{},index:60,start:1236,end:1266,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:I5,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- codice sorgente

<br>

\`\`\`html
Spesso negli articoli informatici vengono riportati comandi o porzioni di codice.
Per farlo in modo corretto usa il tag <b>code</b>.<br>
Per installare vscode in Linux usa il comando: <code>apt install vscode</code>
\`\`\` 
<br>

- Spesso negli articoli informatici vengono riportati comandi o porzioni di codice.
- Per farlo in modo corretto usa il tag <b>code</b>.<br>

<br>
Per installare vscode in Linux usa il comando: <code>apt install vscode</code>

`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag addizionali

- codice sorgente

<br>

\`\`\`html
Spesso negli articoli informatici vengono riportati comandi o porzioni di codice.
Per farlo in modo corretto usa il tag <b>code</b>.<br>
Per installare vscode in Linux usa il comando: <code>apt install vscode</code>
\`\`\` 
<br>

- Spesso negli articoli informatici vengono riportati comandi o porzioni di codice.
- Per farlo in modo corretto usa il tag <b>code</b>.<br>

<br>
Per installare vscode in Linux usa il comando: <code>apt install vscode</code>`,frontmatter:{},index:61,start:1267,end:1290,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:W5,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- pre formattato

<br>

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
<br><br>
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

<br>

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
<br><br>
<pre>
    Questo testo       viene visualizzato esatta 
    mente come fornito dallo sviluppatore.    
    Venogno rispettrati    gli spazi e i ritorni 
    a 
    capo.
</pre>`,frontmatter:{},index:62,start:1291,end:1320,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:K5,meta:{slide:{raw:`
# Esercizio html_07

Link

1. Editare il file *|cognome|_esercizio_html_06.html* e salvarlo come *|cognome|_esercizio_html_07.html*
2. marcare 5 parole come sottolineate
3. marcare 5 parole come sbarrate
4. aggiungere una porzione di codice sorgente o comando linux
5. aggiungere una sezione di testo pre formattata
6. Consegnare su github il file con nome |cognome|_esercizio_html_07.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*


`,title:"Esercizio html_07",level:1,content:`# Esercizio html_07

Link

1. Editare il file *|cognome|_esercizio_html_06.html* e salvarlo come *|cognome|_esercizio_html_07.html*
2. marcare 5 parole come sottolineate
3. marcare 5 parole come sbarrate
4. aggiungere una porzione di codice sorgente o comando linux
5. aggiungere una sezione di testo pre formattata
6. Consegnare su github il file con nome |cognome|_esercizio_html_07.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:63,start:1321,end:1338,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:rA,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- Durante la realizzazione di una pagina web ci possono essere delle esigenze particolari di formattazione.
- HTML fornisce altri tag aggiuntivi utili per forzare un ritorno a capo e per visualizzare una linea di suddivisione orizzontale


- ritorno a capo
\`\`\`html
In alcuni casi è necessario forzare un ritorno a capo. <br>
Per fare ciò basta usare il tag <br>
\`\`\`

<br>
In alcuni casi è necessario forzare un ritorno a capo. <br>
<br>Per fare ciò basta usare il tag &lt;br&gt;<br>

<br>

- linea orizzontale
\`\`\`html
Per inserire una linea orizzontale di separazione usa <hr>
\`\`\`

<br>

<hr style="height:5px; background-color:grey">
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag addizionali

- Durante la realizzazione di una pagina web ci possono essere delle esigenze particolari di formattazione.
- HTML fornisce altri tag aggiuntivi utili per forzare un ritorno a capo e per visualizzare una linea di suddivisione orizzontale


- ritorno a capo
\`\`\`html
In alcuni casi è necessario forzare un ritorno a capo. <br>
Per fare ciò basta usare il tag <br>
\`\`\`

<br>
In alcuni casi è necessario forzare un ritorno a capo. <br>
<br>Per fare ciò basta usare il tag &lt;br&gt;<br>

<br>

- linea orizzontale
\`\`\`html
Per inserire una linea orizzontale di separazione usa <hr>
\`\`\`

<br>

<hr style="height:5px; background-color:grey">`,frontmatter:{},index:64,start:1339,end:1369,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:vA,meta:{slide:{raw:`
# Formattazione del Testo

Tag addizionali

- barra per metrica

<br>

\`\`\`html
Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag <meter>

Andamento dei voti:<br>

Studente 1 <meter min="0" max="10" value="8.0">8 su 10</meter><br />
Studente 2 <meter min="0" max="10" value="6.5">6.5 su 10</meter><br />
Studente 3 <meter min="0" max="10" value="9.5">9.5 su 10</meter><br />
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />
\`\`\`

<br>
Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag &lt;meter&gt;

Andamento dei voti:<br>

Studente 1 <meter min="0" max="10" value="8.0">8 su 10</meter><br />
Studente 2 <meter min="0" max="10" value="6.5">6.5 su 10</meter><br />
Studente 3 <meter min="0" max="10" value="9.5">9.5 su 10</meter><br />
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />
`,title:"Formattazione del Testo",level:1,content:`# Formattazione del Testo

Tag addizionali

- barra per metrica

<br>

\`\`\`html
Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag <meter>

Andamento dei voti:<br>

Studente 1 <meter min="0" max="10" value="8.0">8 su 10</meter><br />
Studente 2 <meter min="0" max="10" value="6.5">6.5 su 10</meter><br />
Studente 3 <meter min="0" max="10" value="9.5">9.5 su 10</meter><br />
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />
\`\`\`

<br>
Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag &lt;meter&gt;

Andamento dei voti:<br>

Studente 1 <meter min="0" max="10" value="8.0">8 su 10</meter><br />
Studente 2 <meter min="0" max="10" value="6.5">6.5 su 10</meter><br />
Studente 3 <meter min="0" max="10" value="9.5">9.5 su 10</meter><br />
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />`,frontmatter:{},index:65,start:1370,end:1400,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:MA,meta:{slide:{raw:`
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

<br>
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

<br>
In alternativa si può visualizzare un progress bar tramite l'uso del tag &lt;progress&gt;

Andamento dei voti:<br>

Studente 1 <progress min="0" max="10" value="8">8 di 10</progress><br />
Studente 2 <progress min="0" max="10" value="6.5">6.5 di 10</progress><br />
Studente 3 <progress min="0" max="10" value="9.5">9.5 di 10</progress><br />
Studente 4 <progress min="0" max="10" value="4.5">4.5 di 10</progress><br />`,frontmatter:{},index:66,start:1401,end:1428,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:AA,meta:{slide:{raw:`
# Esercizio html_08


Link

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_html_08.html*
2. Inserire 5 ritorni a capo forzati
3. Inserire 3 linee orizzontali di separazione
4. Inserire 5 meter bar
5. Inserire 5 progress bar
6. Consegnare su github il file con nome |cognome|_esercizio_html_08.html


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*
`,title:"Esercizio html_08",level:1,content:`# Esercizio html_08


Link

1. Editare il file *|cognome|_esercizio_html_07.html* e salvarlo come *|cognome|_esercizio_html_08.html*
2. Inserire 5 ritorni a capo forzati
3. Inserire 3 linee orizzontali di separazione
4. Inserire 5 meter bar
5. Inserire 5 progress bar
6. Consegnare su github il file con nome |cognome|_esercizio_html_08.html


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:67,start:1429,end:1445,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:PA,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
  Caratteri speciali in HTML
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
  Caratteri speciali in HTML
</Cover>`,frontmatter:{},index:68,start:1446,end:1453,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:BA,meta:{slide:{raw:`
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
[Qui si può consultare la lista completa di entities HTML.](https://www.freeformatter.com/html-entities.html)`,frontmatter:{},index:69,start:1454,end:1478,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:XA,meta:{slide:{raw:`
# HTML Entities

Uso di caratteri riservati

- In alcune occasioni è necessario indicare al browser di non andare a capo.
- Per fare ciò si usa il carattere *non breaking space*
- In altre parole inserendo questo carattere, si inserisce uno spazio che non può mandare la linea a capo

<br>

\`\`\`html
non breaking space

&nbsp;
\`\`\`

<br>

- In modo analogo, ricordiamoci che se inserisco 10 spazi, il browser ne rimuove 9
- Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte \`&nbsp;\`
`,title:"HTML Entities",level:1,content:`# HTML Entities

Uso di caratteri riservati

- In alcune occasioni è necessario indicare al browser di non andare a capo.
- Per fare ciò si usa il carattere *non breaking space*
- In altre parole inserendo questo carattere, si inserisce uno spazio che non può mandare la linea a capo

<br>

\`\`\`html
non breaking space

&nbsp;
\`\`\`

<br>

- In modo analogo, ricordiamoci che se inserisco 10 spazi, il browser ne rimuove 9
- Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte \`&nbsp;\``,frontmatter:{},index:70,start:1479,end:1501,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:o6,meta:{slide:{raw:"\n# HTML Entities\n\nUso di caratteri riservati\n\n- Qui una lista di HTML entities comuemente usate\n\n| Carattere | Descizione   | Nome Entità  | Numero Entità  | \n|---|---|---|---|\n| |non-breaking space	| `&nbsp;`	| `&#160;`| \n|<	|less than|	`&lt;`|	`&#60;`|\n|>	|greater than	|`&gt;`	|`&#62;`|\n|`&` |ampersand	|`&amp;`	|`&#38;`|\n|\"	|double quotation mark	|`&quot;`	|`&#34;`|\n|'	|single quotation mark (apostrophe)	|`&apos;`	|`&#39;`|\n|€	|euro	|`&euro;`	|`&#8364;`|\n|©	|copyright	|`&copy;`	|`&#169;`|\n",title:"HTML Entities",level:1,content:"# HTML Entities\n\nUso di caratteri riservati\n\n- Qui una lista di HTML entities comuemente usate\n\n| Carattere | Descizione   | Nome Entità  | Numero Entità  | \n|---|---|---|---|\n| |non-breaking space	| `&nbsp;`	| `&#160;`| \n|<	|less than|	`&lt;`|	`&#60;`|\n|>	|greater than	|`&gt;`	|`&#62;`|\n|`&` |ampersand	|`&amp;`	|`&#38;`|\n|\"	|double quotation mark	|`&quot;`	|`&#34;`|\n|'	|single quotation mark (apostrophe)	|`&apos;`	|`&#39;`|\n|€	|euro	|`&euro;`	|`&#8364;`|\n|©	|copyright	|`&copy;`	|`&#169;`|",frontmatter:{},index:71,start:1502,end:1520,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:r6,meta:{slide:{raw:`
&nbsp;

<Cover fs=90px>
  Liste (non)ordinate
</Cover>
`,content:`&nbsp;

<Cover fs=90px>
  Liste (non)ordinate
</Cover>`,frontmatter:{},index:72,start:1521,end:1528,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:_6,meta:{slide:{raw:`
# Liste

Lista di elementi correlati

- In un testo o un articolo, risulta particolarmente utile organizzare il contenuto in modo schematico e rappresentare le informazioni tramite una lista.
- HTML mette a disposizione specifici tag per la generazione di liste di elementi

Ci sono 2 tipi principali di liste:
1. **Unordered List** (Liste non ordinate)
2. **Ordered List** (Liste ordinate)

<br>
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

<br>
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
</div>`,frontmatter:{},index:73,start:1529,end:1564,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:L6,meta:{slide:{raw:`
# Liste

Lista di elementi correlati

### Lista non ordinata

Le liste di tipo non ordinato che si creano con 2 tag:
\`\`\`html
<ul>: Unordered List - tag che definisce la lista non ordinata 
<li>: List Item - tag che definisce l'elemento/item della lista 
\`\`\`
<br />
<div grid="~ cols-2 gap-32">
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
<div grid="~ cols-2 gap-32">
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
</div>`,frontmatter:{},index:74,start:1565,end:1606,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:F6,meta:{slide:{raw:`
# Liste

Lista di elementi correlati

### Lista ordinata

Le liste di tipo ordinato che si creano con 2 tag:
\`\`\`html
<ol>: Ordered List - tag che definisce la lista ordinata 
<li>: List Item - tag che definisce l'elemento/item della lista 
\`\`\`
<br />
<div grid="~ cols-2 gap-32">
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
<div grid="~ cols-2 gap-32">
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
</div>`,frontmatter:{},index:75,start:1607,end:1647,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:V6,meta:{slide:{raw:`
# Esercizio html_09

Link

1. Editare il file *|cognome|_esercizio_html_08.html* e salvarlo come *|cognome|_esercizio_html_09.html*
2. Inserire 5 caratteri speciali in modo congruo con il testo
3. Creare 1 lista ordinata in modo congruo con il testo
4. Creare 1 lista non ordinata in modo congruo con il testo
5. Consegnare su github il file con nome |cognome|_esercizio_html_09.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*
`,title:"Esercizio html_09",level:1,content:`# Esercizio html_09

Link

1. Editare il file *|cognome|_esercizio_html_08.html* e salvarlo come *|cognome|_esercizio_html_09.html*
2. Inserire 5 caratteri speciali in modo congruo con il testo
3. Creare 1 lista ordinata in modo congruo con il testo
4. Creare 1 lista non ordinata in modo congruo con il testo
5. Consegnare su github il file con nome |cognome|_esercizio_html_09.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:76,start:1648,end:1662,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:G6,meta:{slide:{raw:`
&nbsp;

<Cover fs=75px>
  Rappresentazioni tabulari con le Tabelle
</Cover>
`,content:`&nbsp;

<Cover fs=75px>
  Rappresentazioni tabulari con le Tabelle
</Cover>`,frontmatter:{},index:77,start:1663,end:1670,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:nO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:78,start:1671,end:1693,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:rO,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:79,start:1694,end:1756,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:hO,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:80,start:1757,end:1819,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:yO,meta:{slide:{raw:`
# Esercizio html_10

Link

1. Editare il file *|cognome|_esercizio_html_09.html* e salvarlo come *|cognome|_esercizio_html_10.html*
2. Creare 1 tabella modo congruo con il testo
3. Consegnare su  github il file con nome |cognome|_esercizio_html_10.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*
`,title:"Esercizio html_10",level:1,content:`# Esercizio html_10

Link

1. Editare il file *|cognome|_esercizio_html_09.html* e salvarlo come *|cognome|_esercizio_html_10.html*
2. Creare 1 tabella modo congruo con il testo
3. Consegnare su  github il file con nome |cognome|_esercizio_html_10.html

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:81,start:1820,end:1832,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:MO,meta:{slide:{raw:`
# Esercizio html_11

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle il menù del ristorante qui a fianco
2. Obiettivo non è riprodurlo fedelmente con colori ed effetti, ma riprodurne il layout tramite l'uso delle tabelle
3. Consegnare su github il file con nome |cognome|_esercizio_html_11.html
</div>
<div>
<img src="/media/html5_12.jpg" width="370" style="float:right; position:relative;top:-100px;"/>
</div>
</div>
`,title:"Esercizio html_11",level:1,content:`# Esercizio html_11

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle il menù del ristorante qui a fianco
2. Obiettivo non è riprodurlo fedelmente con colori ed effetti, ma riprodurne il layout tramite l'uso delle tabelle
3. Consegnare su github il file con nome |cognome|_esercizio_html_11.html
</div>
<div>
<img src="/media/html5_12.jpg" width="370" style="float:right; position:relative;top:-100px;"/>
</div>
</div>`,frontmatter:{},index:82,start:1833,end:1850,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:EO,meta:{slide:{raw:`
&nbsp;

<Cover fs=80px>
  Interagiamo con l'utente attraverso i From
</Cover>
`,content:`&nbsp;

<Cover fs=80px>
  Interagiamo con l'utente attraverso i From
</Cover>`,frontmatter:{},index:83,start:1851,end:1858,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:FO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:84,start:1859,end:1883,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:KO,meta:{slide:{raw:`
# Form

&lt;input&gt;

- Uno dei widget più importanti ed utilizzati è &lt;input&gt;
- Permette di ricevere un input dall'utente
- Questo widget può assumere molte forme diverse in funzione dell'attributo *type*

<br>

\`\`\`html
<form>
  <input type="text" id="idnome" name="nome" placeholder="Nome">
  <input type="text" id="idcognome" name="cognnome" placeholder="Cognome">
</form>
\`\`\`

<br><br>
<input type="text" id="idnome" name="nome" placeholder="Nome" style="border: 1px solid black;background:Gainsboro;"> <br /><br />
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">
`,title:"Form",level:1,content:`# Form

&lt;input&gt;

- Uno dei widget più importanti ed utilizzati è &lt;input&gt;
- Permette di ricevere un input dall'utente
- Questo widget può assumere molte forme diverse in funzione dell'attributo *type*

<br>

\`\`\`html
<form>
  <input type="text" id="idnome" name="nome" placeholder="Nome">
  <input type="text" id="idcognome" name="cognnome" placeholder="Cognome">
</form>
\`\`\`

<br><br>
<input type="text" id="idnome" name="nome" placeholder="Nome" style="border: 1px solid black;background:Gainsboro;"> <br /><br />
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">`,frontmatter:{},index:85,start:1884,end:1906,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:iH,meta:{slide:{raw:`
# Form

&lt;label&gt;

- L'elemento *label* specifica una label per diversi tipi di widget di un form
- Questo tag è molto importante in quanto gli screen-reader, per persone ipovedenti, leggono ad alta voce la label di un widget
- Per associare una label ad un widget, si usa l'attributo *for* che deve coincidere con l'attributo *id* del widget
  
<br>

\`\`\`html
<form>
  <label for="idnome">Nome: </label>
  <input type="text" id="idnome" name="nome" placeholder="Nome">
  <label for="idcognome">Cognome: </label>
  <input type="text" id="idcognome" name="cognnome" placeholder="Cognome">
</form>
\`\`\`

<br>
<label for="idnome">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nome:&nbsp;</label>
<input type="text" id="idnome" name="nome" placeholder="Nome" style="border: 1px solid black;background:Gainsboro;"> <br /><br />

<label for="idcognome">Cognome:&nbsp;</label>
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">

`,title:"Form",level:1,content:`# Form

&lt;label&gt;

- L'elemento *label* specifica una label per diversi tipi di widget di un form
- Questo tag è molto importante in quanto gli screen-reader, per persone ipovedenti, leggono ad alta voce la label di un widget
- Per associare una label ad un widget, si usa l'attributo *for* che deve coincidere con l'attributo *id* del widget
  
<br>

\`\`\`html
<form>
  <label for="idnome">Nome: </label>
  <input type="text" id="idnome" name="nome" placeholder="Nome">
  <label for="idcognome">Cognome: </label>
  <input type="text" id="idcognome" name="cognnome" placeholder="Cognome">
</form>
\`\`\`

<br>
<label for="idnome">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nome:&nbsp;</label>
<input type="text" id="idnome" name="nome" placeholder="Nome" style="border: 1px solid black;background:Gainsboro;"> <br /><br />

<label for="idcognome">Cognome:&nbsp;</label>
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">`,frontmatter:{},index:86,start:1907,end:1935,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:hH,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:87,start:1936,end:1984,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:zH,meta:{slide:{raw:`
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

<br>

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

<br>

\`\`\`html
<form>
  <label for="idpulsante">Premi il pulsante: </label>
  <button type="button" id="idpulsante">Click Me!</button>
</form>
\`\`\`
<label for="idpulsante">Premi il pulsante: </label>
<button type="button" style="border: 1px solid red;">Click Me!</button>`,frontmatter:{},index:88,start:1985,end:2013,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:VH,meta:{slide:{raw:`
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
<label for="disoccupato">  Disoccupato</label><br><br>`,frontmatter:{},index:89,start:2014,end:2040,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:u4,meta:{slide:{raw:`
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
<label for="nuoto"> Nuoto</label><br><br>`,frontmatter:{},index:90,start:2041,end:2067,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:x4,meta:{slide:{raw:`
# Form

&lt;input&gt;

### date
\`\`\`html
<h3>Data di Nascita</h3><br>
<form>
  <input type="date" id="iddata" name="birthday"><br><br>
</form>
\`\`\`<br>
<br>
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
\`\`\`<br>
<br>
<h3>Data di Nascita</h3><br>
<input type="date" id="iddata" name="birthday"><br><br>`,frontmatter:{},index:91,start:2068,end:2084,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:I4,meta:{slide:{raw:`
# Esercizio html_12

Form

1. Creare un file con nome *|cognome|_esercizio_html_12.html*
2. Creare 1 form per la raccolta di dati in uno scenario scelto dallo studente
3. Consegnare su github il file con nome |cognome|_esercizio_html_12.html


<br>

Il form deve contenere i seguenti widgets:
<br>
<div grid="~ cols-2 gap-4">
<div>

  - almeno 2 widget di testo
  - almeno 1 bottone
  - almeno 3 scelte mutuamente esclusive tramite radio
</div>
<div>

  - almeeno 5 scelte multiple tramite checkbox
  - almeno 1 campo data
  - ogni widget deve essere dotato della propria label

</div>
</div>
`,title:"Esercizio html_12",level:1,content:`# Esercizio html_12

Form

1. Creare un file con nome *|cognome|_esercizio_html_12.html*
2. Creare 1 form per la raccolta di dati in uno scenario scelto dallo studente
3. Consegnare su github il file con nome |cognome|_esercizio_html_12.html


<br>

Il form deve contenere i seguenti widgets:
<br>
<div grid="~ cols-2 gap-4">
<div>

  - almeno 2 widget di testo
  - almeno 1 bottone
  - almeno 3 scelte mutuamente esclusive tramite radio
</div>
<div>

  - almeeno 5 scelte multiple tramite checkbox
  - almeno 1 campo data
  - ogni widget deve essere dotato della propria label

</div>
</div>`,frontmatter:{},index:92,start:2085,end:2115,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:P4,meta:{slide:{raw:`
# Esercizio html_13

Form

1. Progettare e realizzare un documento HTML contenente una form contenente i seguenti campi:
    - cognome e nome (casella di testo editabile lunga 50 caratteri)
    - sesso (selezionabile tramite due bottoni radio)
    - ateneo (da scegliere da un menu che riporta le 3 universit romane)
    - CAP (casella di testo editabile lunga 5 caratteri)
    - studente lavoratore (selezionabile tramite checkbox)
    - descrizione del lavoro svolto (casella di testo editabile lunga 80 caratteri)
    - bottone di invio
    - bottone di reset
2. Consegnare su github il file con nome |cognome|_esercizio_html_13.html



`,title:"Esercizio html_13",level:1,content:`# Esercizio html_13

Form

1. Progettare e realizzare un documento HTML contenente una form contenente i seguenti campi:
    - cognome e nome (casella di testo editabile lunga 50 caratteri)
    - sesso (selezionabile tramite due bottoni radio)
    - ateneo (da scegliere da un menu che riporta le 3 universit romane)
    - CAP (casella di testo editabile lunga 5 caratteri)
    - studente lavoratore (selezionabile tramite checkbox)
    - descrizione del lavoro svolto (casella di testo editabile lunga 80 caratteri)
    - bottone di invio
    - bottone di reset
2. Consegnare su github il file con nome |cognome|_esercizio_html_13.html`,frontmatter:{},index:93,start:2116,end:2135,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:G4,meta:{slide:{raw:`
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
<input type="number" id="altezza" name="altezza" min="150" max="200" style="border: 1px solid black;"><br><br>`,frontmatter:{},index:94,start:2136,end:2152,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:iP,meta:{slide:{raw:`
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
 <input type="color" id="favcolor" name="favcolor" value="#ff0000" onchange="alert(\`Hai selezionato il colore: \${event.target.value}\`)"><br><br>`,frontmatter:{},index:95,start:2153,end:2169,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:hP,meta:{slide:{raw:`
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
<input type="range" min="50" max="100" value="60" class="slider" id="peso"><br>`,frontmatter:{},index:96,start:2170,end:2185,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:$P,meta:{slide:{raw:`
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
</select><br><br>`,frontmatter:{},index:97,start:2186,end:2207,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:SP,meta:{slide:{raw:`
# Form

&lt;textarea&gt;

\`\`\`html
<form>
  <label for="bio">Biografia:</label>
  <textarea id="bio" name="bio" rows="4" cols="50" placeholder="Inserisci la tua biografia"></textarea>    
</form>
\`\`\`<br>


<label for="bio">Biografia:</label>
<textarea id="bio" name="bio" rows="4" cols="50" placeholder="Inserisci la tua biografia" style="border: 1px solid black;"></textarea>
      `,title:"Form",level:1,content:`# Form

&lt;textarea&gt;

\`\`\`html
<form>
  <label for="bio">Biografia:</label>
  <textarea id="bio" name="bio" rows="4" cols="50" placeholder="Inserisci la tua biografia"></textarea>    
</form>
\`\`\`<br>


<label for="bio">Biografia:</label>
<textarea id="bio" name="bio" rows="4" cols="50" placeholder="Inserisci la tua biografia" style="border: 1px solid black;"></textarea>`,frontmatter:{},index:98,start:2208,end:2224,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:FP,meta:{slide:{raw:`
# Esercizio html_14

Form

1. Modificare il file *|cognome|_esercizio_html_12.html* e salvarlo come *|cognome|_esercizio_html_14.html*
2. Modificare il form (vedi dettagli sotto)
3. Consegnare su github il file con nome |cognome|_esercizio_html_14.html


Il form deve contenere i seguenti widgets aggiuntivi:
  - almeno 4 widget number con valore minimo e massimo
  - almeno 1 widget color picker
  - almeno 3 widget range con valore minimo e massimo
  - almeeno 2 combo box o select con almeno 5 valori ciascuna
  - almeno 1 campo text area con dimensione minima 6 righe e 60 colonne
  - ogni widget deve essere dotato della propria label


`,title:"Esercizio html_14",level:1,content:`# Esercizio html_14

Form

1. Modificare il file *|cognome|_esercizio_html_12.html* e salvarlo come *|cognome|_esercizio_html_14.html*
2. Modificare il form (vedi dettagli sotto)
3. Consegnare su github il file con nome |cognome|_esercizio_html_14.html


Il form deve contenere i seguenti widgets aggiuntivi:
  - almeno 4 widget number con valore minimo e massimo
  - almeno 1 widget color picker
  - almeno 3 widget range con valore minimo e massimo
  - almeeno 2 combo box o select con almeno 5 valori ciascuna
  - almeno 1 campo text area con dimensione minima 6 righe e 60 colonne
  - ogni widget deve essere dotato della propria label`,frontmatter:{},index:99,start:2225,end:2245,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:KP,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:100,start:2246,end:2276,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:e8,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:101,start:2277,end:2328,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:l8,meta:{slide:{raw:`
# Esercizio html_15

Form

1. Progettare e realizzare un documento HTML contenente una form contenente i seguenti campi:
- cognome (casella di testo editabile lunga 40 caratteri)
- nome (casella di testo editabile lunga 30 caratteri)
- matricola (casella di testo editabile lunga 12 caratteri)
- regione di residenza (da scegliere da un menu che riporta le 20 regioni italiane)
- email (casella di testo editabile lunga 30 caratteri)
- telefono (casella di testo editabile lunga 15 caratteri)
- richieste particolari (area di testo editabile di 12 righe per 60 colonne)
- bottone di invio
- bottone di reset
2. Consgenare su github il file |cognome|_es15.html

`,title:"Esercizio html_15",level:1,content:`# Esercizio html_15

Form

1. Progettare e realizzare un documento HTML contenente una form contenente i seguenti campi:
- cognome (casella di testo editabile lunga 40 caratteri)
- nome (casella di testo editabile lunga 30 caratteri)
- matricola (casella di testo editabile lunga 12 caratteri)
- regione di residenza (da scegliere da un menu che riporta le 20 regioni italiane)
- email (casella di testo editabile lunga 30 caratteri)
- telefono (casella di testo editabile lunga 15 caratteri)
- richieste particolari (area di testo editabile di 12 righe per 60 colonne)
- bottone di invio
- bottone di reset
2. Consgenare su github il file |cognome|_es15.html`,frontmatter:{},index:102,start:2329,end:2347,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:f8,meta:{slide:{raw:`
# Esercizio html_16

Form

1. Creare un file con nome *|cognome|_esercizio_html_16.html*
2. Creare 1 form per la raccolta di dati personali
3. Consegnare su github il file con nome |cognome|_esercizio_html_16.html


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
`,title:"Esercizio html_16",level:1,content:`# Esercizio html_16

Form

1. Creare un file con nome *|cognome|_esercizio_html_16.html*
2. Creare 1 form per la raccolta di dati personali
3. Consegnare su github il file con nome |cognome|_esercizio_html_16.html


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
</div>`,frontmatter:{},index:103,start:2348,end:2381,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:b8,meta:{slide:{raw:`
# Esercizio html_17

Form

<div grid="~ cols-2 gap-4">
<div>

1. Progettare e realizzare in HTML il form di di iscrizione al PCTO rappresentato qui a fianco e disponibile [qui](/support/3/html/convenzione_pcto.pdf)
2. Obiettivo è riprodurlo il più fedelmente possibile
3. Consegnare su github il file con nome |cognome|_esercizio_html_17.html

</div>
<div>
<img src="/media/html5_20.png" width="450" style="float:right; position:relative;top:-100px;"/>
</div>
</div>
`,title:"Esercizio html_17",level:1,content:`# Esercizio html_17

Form

<div grid="~ cols-2 gap-4">
<div>

1. Progettare e realizzare in HTML il form di di iscrizione al PCTO rappresentato qui a fianco e disponibile [qui](/support/3/html/convenzione_pcto.pdf)
2. Obiettivo è riprodurlo il più fedelmente possibile
3. Consegnare su github il file con nome |cognome|_esercizio_html_17.html

</div>
<div>
<img src="/media/html5_20.png" width="450" style="float:right; position:relative;top:-100px;"/>
</div>
</div>`,frontmatter:{},index:104,start:2382,end:2400,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:M8,meta:{slide:{raw:`
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
7. Viene inviata la risposta finale al browser`,frontmatter:{},index:105,start:2401,end:2417,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:S8,meta:{slide:{raw:`
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
- Per ovviare a queste problematiche, normalmente si effettua la validazione del form in JavaScript, quindi direttamente nel browser riducendo così il numero di messaggi con il server`,frontmatter:{},index:106,start:2418,end:2429,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:F8,meta:{slide:{raw:`
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
7. Viene inviata la risposta finale al browser`,frontmatter:{},index:107,start:2430,end:2446,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:G8,meta:{slide:{raw:`
# Esercizio html_18

Form validation server-side

- In questo esercizio/esercitazione si vuole comprendere a fondo il meccanismo di validazione dei form server-side

Per fare ciò abbiamo bisonog di due componenti fondamentali:
1. Una pagina HTML contenente un form
2. Un web server che implementa la logica di validazione

Per questa esercitazione il form e il web server sono forniti
1. Scaricare il seguente pacchetto:[esercizio_html_18.tgz](/support/3/html/esercizio_html_18.tgz)
2. Installare i pacchetti necessari con \`npm install\`
4. Lanciare il web server con \`node form_server.js\`
5. Aprire la pagina fornita dal server locale sulla posta 8080


`,title:"Esercizio html_18",level:1,content:`# Esercizio html_18

Form validation server-side

- In questo esercizio/esercitazione si vuole comprendere a fondo il meccanismo di validazione dei form server-side

Per fare ciò abbiamo bisonog di due componenti fondamentali:
1. Una pagina HTML contenente un form
2. Un web server che implementa la logica di validazione

Per questa esercitazione il form e il web server sono forniti
1. Scaricare il seguente pacchetto:[esercizio_html_18.tgz](/support/3/html/esercizio_html_18.tgz)
2. Installare i pacchetti necessari con \`npm install\`
4. Lanciare il web server con \`node form_server.js\`
5. Aprire la pagina fornita dal server locale sulla posta 8080`,frontmatter:{},index:108,start:2447,end:2466,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:eR,meta:{slide:{raw:`
# Esercizio html_18


&nbsp;

Si richiede di:
1. Verificare il funzionamento del form e della validazione dei campi
2. Analizzaere il codice del form e del server in JavaScript
3. Modificare il form in modo che l'età venga fornita come un \`\`\`range\`\`\`
4. Modificare il form in modo che sia presente anche il campo \`Cognome\`
5. Modificare il codice del server in modo che sia presente **anche** la validazione dell'età, in modo che siano accettati solo valori compresi tra 19 e 31
6. Fornire il link github alla directory con nome |cognome|_esercizio_html_18 contenente i file aggiornati *form.html* e *form_server.js*
7. \`\`\`NON deve essere presente nel repository la directory **node_modules**\`\`\`

`,title:"Esercizio html_18",level:1,content:"# Esercizio html_18\n\n\n&nbsp;\n\nSi richiede di:\n1. Verificare il funzionamento del form e della validazione dei campi\n2. Analizzaere il codice del form e del server in JavaScript\n3. Modificare il form in modo che l'età venga fornita come un ```range```\n4. Modificare il form in modo che sia presente anche il campo `Cognome`\n5. Modificare il codice del server in modo che sia presente **anche** la validazione dell'età, in modo che siano accettati solo valori compresi tra 19 e 31\n6. Fornire il link github alla directory con nome |cognome|_esercizio_html_18 contenente i file aggiornati *form.html* e *form_server.js*\n7. ```NON deve essere presente nel repository la directory **node_modules**```",frontmatter:{},index:109,start:2467,end:2483,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:aR,meta:{slide:{raw:`
&nbsp;

<Cover fs=90px>
  HTML Linter e validità sintattica
</Cover>
`,content:`&nbsp;

<Cover fs=90px>
  HTML Linter e validità sintattica
</Cover>`,frontmatter:{},index:110,start:2484,end:2491,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:rR,meta:{slide:{raw:`
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


- Il lineter è uno strumento fondamentale per lo sviluppatore.`,frontmatter:{},index:111,start:2492,end:2510,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:gR,meta:{slide:{raw:`
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
<img src="/media/html5_12.png" />`,frontmatter:{},index:112,start:2511,end:2522,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:$R,meta:{slide:{raw:`
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
<img src="/media/html5_13.png" />`,frontmatter:{},index:113,start:2523,end:2537,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:AR,meta:{slide:{raw:`
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
  - **Warning**: evidenzia potenziali problemi ma non necessariamente errori sintattici`,frontmatter:{},index:114,start:2538,end:2551,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:FR,meta:{slide:{raw:`
# Esercizio html_19

HTML lint

Mediante il servizio di validazione HTML del W3C si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente


`,title:"Esercizio html_19",level:1,content:`# Esercizio html_19

HTML lint

Mediante il servizio di validazione HTML del W3C si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente`,frontmatter:{},index:115,start:2552,end:2563,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:KR,meta:{slide:{raw:`
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
<img src="/media/html5_15.png" width="500" />`,frontmatter:{},index:116,start:2564,end:2579,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",name:"page-118",component:tN,meta:{slide:{raw:`
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
<img src="/media/html5_16.png" width="700" />`,frontmatter:{},index:117,start:2580,end:2595,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:117,no:118},__clicksElements:[],__preloaded:!1}},{path:"119",name:"page-119",component:rN,meta:{slide:{raw:`
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
  - **html**: genera un report in formato HTML esattamente come quello generato dal servizio W3C`,frontmatter:{},index:118,start:2596,end:2609,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:118,no:119},__clicksElements:[],__preloaded:!1}},{path:"120",name:"page-120",component:_N,meta:{slide:{raw:`
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
<img src="/media/html5_17.png" />`,frontmatter:{},index:119,start:2610,end:2624,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:119,no:120},__clicksElements:[],__preloaded:!1}},{path:"121",name:"page-121",component:zN,meta:{slide:{raw:`
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
<img src="/media/html5_18.png" width="650"/>`,frontmatter:{},index:120,start:2625,end:2640,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:120,no:121},__clicksElements:[],__preloaded:!1}},{path:"122",name:"page-122",component:HN,meta:{slide:{raw:`
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
<img src="/media/html5_19.png" width="650"/>`,frontmatter:{},index:121,start:2641,end:2655,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:121,no:122},__clicksElements:[],__preloaded:!1}},{path:"123",name:"page-123",component:WN,meta:{slide:{raw:`
# Esercizio html_20

HTML lint

Mediante il linter da liena di comando si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_esercizio_html_11.html generando un report in formato txt
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente
3. Consegnare su github il file |cognome|_esercizio_html_20.txt
4. Effettuare la verifica sintattica del file |cognome|_esercizio_html_11.html generando un report in formato lint
5. Consegnare su github il file |cognome|_esercizio_html_20.lint
6. Effettuare la verifica sintattica del file |cognome|_esercizio_html_11.html generando un report in formato html
7. Consegnare su github il file |cognome|_esercizio_html_20.html

`,title:"Esercizio html_20",level:1,content:`# Esercizio html_20

HTML lint

Mediante il linter da liena di comando si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_esercizio_html_11.html generando un report in formato txt
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente
3. Consegnare su github il file |cognome|_esercizio_html_20.txt
4. Effettuare la verifica sintattica del file |cognome|_esercizio_html_11.html generando un report in formato lint
5. Consegnare su github il file |cognome|_esercizio_html_20.lint
6. Effettuare la verifica sintattica del file |cognome|_esercizio_html_11.html generando un report in formato html
7. Consegnare su github il file |cognome|_esercizio_html_20.html`,frontmatter:{},index:122,start:2656,end:2671,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:122,no:123},__clicksElements:[],__preloaded:!1}},{path:"124",name:"page-124",component:VN,meta:{slide:{raw:`
<img src="/media/hh03.webp" style="position:relative;top:-20px;">

`,content:'<img src="/media/hh03.webp" style="position:relative;top:-20px;">',frontmatter:{},index:123,start:2672,end:2676,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:123,no:124},__clicksElements:[],__preloaded:!1}},{path:"125",component:f2,meta:{layout:"end"}}],Qe=UN,cs=[{name:"play",path:"/",component:NT,children:[...Qe]},{name:"print",path:"/print",component:p2},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(t){if(!rs.remote||rs.remote===t.query.password)return!0;if(rs.remote&&t.query.password===void 0){const a=prompt("Enter password");if(rs.remote===a)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};cs.push({path:"/presenter/print",component:()=>Ot(()=>import("./PresenterPrint-397ae701.js"),["assets/PresenterPrint-397ae701.js","assets/NoteDisplay-22f02d13.js"])}),cs.push({name:"notes",path:"/notes",component:()=>Ot(()=>import("./NotesView-ff407c77.js"),["assets/NotesView-ff407c77.js","assets/NoteDisplay-22f02d13.js"]),beforeEnter:n}),cs.push({name:"presenter",path:"/presenter/:no",component:()=>Ot(()=>import("./Presenter-52de4d4c.js"),["assets/Presenter-52de4d4c.js","assets/NoteDisplay-22f02d13.js","assets/DrawingControls-1bd94a7e.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:n}),cs.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const wn=y0({history:bb("/3/html/"),routes:cs});function KN(n,t,{mode:a="replace"}={}){return N({get(){const o=wn.currentRoute.value.query[n];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){on(()=>{wn[O(a)]({query:{...wn.currentRoute.value.query,[n]:o}})})}})}const Zm=Z(0);on(()=>{wn.afterEach(async()=>{await on(),Zm.value+=1})});const Xm=Z(0),Wn=N(()=>wn.currentRoute.value),Na=N(()=>Wn.value.query.print!==void 0),GN=N(()=>Wn.value.query.print==="clicks"),mt=N(()=>Wn.value.query.embedded!==void 0),kn=N(()=>Wn.value.path.startsWith("/presenter")),QN=N(()=>Wn.value.path.startsWith("/notes")),vs=N(()=>Na.value&&!GN.value),ql=N(()=>Wn.value.query.password),YN=N(()=>!kn.value&&(!Ee.remote||ql.value===Ee.remote)),Wu=KN("clicks","0"),JN=N(()=>Qe.length-1),ZN=N(()=>Wn.value.path),Ue=N(()=>parseInt(ZN.value.split(/\//g).slice(-1)[0])||1);N(()=>mi(Ue.value));const mn=N(()=>Qe.find(n=>n.path===`${Ue.value}`));N(()=>{var n,t,a;return(a=(t=(n=mn.value)==null?void 0:n.meta)==null?void 0:t.slide)==null?void 0:a.id});N(()=>{var n,t;return((t=(n=mn.value)==null?void 0:n.meta)==null?void 0:t.layout)||(Ue.value===1?"cover":"default")});const Fi=N(()=>Qe.find(n=>n.path===`${Math.min(Qe.length,Ue.value+1)}`)),XN=N(()=>Qe.find(n=>n.path===`${Math.max(1,Ue.value-1)}`)),eF=N(()=>{var n,t;return Zm.value,((t=(n=mn.value)==null?void 0:n.meta)==null?void 0:t.__clicksElements)||[]}),Nn=N({get(){if(vs.value)return 99999;let n=+(Wu.value||0);return isNaN(n)&&(n=0),n},set(n){Wu.value=n.toString()}}),Uo=N(()=>{var n,t;return+(((t=(n=mn.value)==null?void 0:n.meta)==null?void 0:t.clicks)??eF.value.length)}),nF=N(()=>Ue.value<Qe.length-1||Nn.value<Uo.value),tF=N(()=>Ue.value>1||Nn.value>0),aF=N(()=>Qe.filter(n=>{var t,a;return(a=(t=n.meta)==null?void 0:t.slide)==null?void 0:a.title}).reduce((n,t)=>(Or(n,t),n),[])),sF=N(()=>Hr(aF.value,mn.value));N(()=>Pr(sF.value));const oF=N(()=>uF(Xm.value,mn.value,XN.value));ke(mn,(n,t)=>{Xm.value=Number(n==null?void 0:n.path)-Number(t==null?void 0:t.path)});function Pt(){Uo.value<=Nn.value?Hs():Nn.value+=1}async function Rt(){Nn.value<=0?await Ps():Nn.value-=1}function mi(n){return kn.value?`/presenter/${n}`:`/${n}`}function Hs(){const n=Math.min(Qe.length,Ue.value+1);return Fa(n)}async function Ps(n=!0){const t=Math.max(1,Ue.value-1);await Fa(t),n&&Uo.value&&wn.replace({query:{...Wn.value.query,clicks:Uo.value}})}function Fa(n,t){return wn.push({path:mi(n),query:{...Wn.value.query,clicks:t}})}function iF(n){const t=Z(0),{direction:a,distanceX:o,distanceY:i}=D1(n,{onSwipeStart(l){l.pointerType==="touch"&&(Ss.value||(t.value=yl()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||Ss.value)return;const r=Math.abs(o.value),c=Math.abs(i.value);r/window.innerWidth>.3||r>100?a.value==="left"?Pt():Rt():(c/window.innerHeight>.4||c>200)&&(a.value==="down"?Ps():Hs())}})}async function Wl(){const{saveAs:n}=await Ot(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);n(typeof Ee.download=="string"?Ee.download:Ee.exportFilename?`${Ee.exportFilename}.pdf`:"/3/html/slidev-exported.pdf",`${Ee.title}.pdf`)}async function lF(n){var t,a;if(n==null){const o=(a=(t=mn.value)==null?void 0:t.meta)==null?void 0:a.slide;if(!(o!=null&&o.filepath))return!1;n=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function Or(n,t,a=1){var i,l,r,c,u;const o=(l=(i=t.meta)==null?void 0:i.slide)==null?void 0:l.level;o&&o>a&&n.length>0?Or(n[n.length-1].children,t,a+1):n.push({children:[],level:a,path:t.path,hideInToc:!!((r=t.meta)!=null&&r.hideInToc),title:(u=(c=t.meta)==null?void 0:c.slide)==null?void 0:u.title})}function Hr(n,t,a=!1,o){return n.map(i=>{const l={...i,active:i.path===(t==null?void 0:t.path),hasActiveParent:a};return l.children.length>0&&(l.children=Hr(l.children,t,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function Pr(n,t=1){return n.filter(a=>!a.hideInToc).map(a=>({...a,children:Pr(a.children,t+1)}))}const rF={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function cF(n,t=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let a=n.name.includes("|")?n.name:rF[n.name]||n.name;if(a.includes("|")){const[o,i]=a.split("|").map(l=>l.trim());a=t?i:o}if(a)return{...n,name:a}}function uF(n,t,a){var i,l;let o=n>0?(i=a==null?void 0:a.meta)==null?void 0:i.transition:(l=t==null?void 0:t.meta)==null?void 0:l.transition;return o||(o=Ee.transition),cF(o,n<0)}function pF(){const n=Ee.titleTemplate.replace("%s",Ee.title||"Slidev");jd({title:n,htmlAttrs:Ee.htmlAttrs}),vk(`${n} - shared`),wk(`${n} - drawings`);const t=`${location.origin}_${dk()}`;function a(){QN.value||!kn.value&&!pk.includes(location.host.split(":")[0])||(kn.value?(Ya("page",+Ue.value),Ya("clicks",Nn.value)):(Ya("viewerPage",+Ue.value),Ya("viewerClicks",Nn.value)),Ya("lastUpdate",{id:t,type:kn.value?"presenter":"viewer",time:new Date().getTime()}))}wn.afterEach(a),ke(Nn,a),kk(o=>{var l;wn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=o.lastUpdate)==null?void 0:l.type)==="presenter"&&(+o.page!=+Ue.value||+Nn.value!=+o.clicks)&&wn.replace({path:mi(o.page),query:{...wn.currentRoute.value.query,clicks:o.clicks||0}})})}const dF=Ae({__name:"App",setup(n){return z(C),pF(),(t,a)=>{const o=Ha("RouterView"),i=Ha("StarportCarrier");return b(),oe(Ie,null,[S(o),S(i)],64)}}}),mF=E(dF,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/App.vue"]]);function qi(n){return n!==null&&typeof n=="object"}function Dl(n,t,a=".",o){if(!qi(t))return Dl(n,{},a,o);const i=Object.assign({},t);for(const l in n){if(l==="__proto__"||l==="constructor")continue;const r=n[l];r!=null&&(o&&o(i,l,r,a)||(Array.isArray(r)&&Array.isArray(i[l])?i[l]=[...r,...i[l]]:qi(r)&&qi(i[l])?i[l]=Dl(r,i[l],(a?`${a}.`:"")+l.toString(),o):i[l]=r))}return i}function fF(n){return(...t)=>t.reduce((a,o)=>Dl(a,o,"",n),{})}const hF=fF(),ef=1/60*1e3,gF=typeof performance<"u"?()=>performance.now():()=>Date.now(),nf=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(gF()),ef);function _F(n){let t=[],a=[],o=0,i=!1,l=!1;const r=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const m=d&&i,f=m?t:a;return p&&r.add(u),f.indexOf(u)===-1&&(f.push(u),m&&i&&(o=t.length)),u},cancel:u=>{const p=a.indexOf(u);p!==-1&&a.splice(p,1),r.delete(u)},process:u=>{if(i){l=!0;return}if(i=!0,[t,a]=[a,t],a.length=0,o=t.length,o)for(let p=0;p<o;p++){const d=t[p];d(u),r.has(d)&&(c.schedule(d),n())}i=!1,l&&(l=!1,c.process(u))}};return c}const vF=40;let jl=!0,Rs=!1,Bl=!1;const Oa={delta:0,timestamp:0},Ks=["read","update","preRender","render","postRender"],fi=Ks.reduce((n,t)=>(n[t]=_F(()=>Rs=!0),n),{}),Vl=Ks.reduce((n,t)=>{const a=fi[t];return n[t]=(o,i=!1,l=!1)=>(Rs||yF(),a.schedule(o,i,l)),n},{}),kF=Ks.reduce((n,t)=>(n[t]=fi[t].cancel,n),{});Ks.reduce((n,t)=>(n[t]=()=>fi[t].process(Oa),n),{});const bF=n=>fi[n].process(Oa),tf=n=>{Rs=!1,Oa.delta=jl?ef:Math.max(Math.min(n-Oa.timestamp,vF),1),Oa.timestamp=n,Bl=!0,Ks.forEach(bF),Bl=!1,Rs&&(jl=!1,nf(tf))},yF=()=>{Rs=!0,jl=!0,Bl||nf(tf)},af=()=>Oa;function sf(n,t){var a={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(n);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(a[o[i]]=n[o[i]]);return a}var Rr=function(){},Ns=function(){};Rr=function(n,t){!n&&typeof console<"u"&&console.warn(t)},Ns=function(n,t){if(!n)throw new Error(t)};const Ul=(n,t,a)=>Math.min(Math.max(a,n),t),Wi=.001,wF=.01,Du=10,xF=.05,TF=1;function $F({duration:n=800,bounce:t=.25,velocity:a=0,mass:o=1}){let i,l;Rr(n<=Du*1e3,"Spring duration must be 10 seconds or less");let r=1-t;r=Ul(xF,TF,r),n=Ul(wF,Du,n/1e3),r<1?(i=p=>{const d=p*r,m=d*n,f=d-a,h=Kl(p,r),g=Math.exp(-m);return Wi-f/h*g},l=p=>{const m=p*r*n,f=m*a+a,h=Math.pow(r,2)*Math.pow(p,2)*n,g=Math.exp(-m),w=Kl(Math.pow(p,2),r);return(-i(p)+Wi>0?-1:1)*((f-h)*g)/w}):(i=p=>{const d=Math.exp(-p*n),m=(p-a)*n+1;return-Wi+d*m},l=p=>{const d=Math.exp(-p*n),m=(a-p)*(n*n);return d*m});const c=5/n,u=MF(i,l,c);if(n=n*1e3,isNaN(u))return{stiffness:100,damping:10,duration:n};{const p=Math.pow(u,2)*o;return{stiffness:p,damping:r*2*Math.sqrt(o*p),duration:n}}}const zF=12;function MF(n,t,a){let o=a;for(let i=1;i<zF;i++)o=o-n(o)/t(o);return o}function Kl(n,t){return n*Math.sqrt(1-t*t)}const LF=["duration","bounce"],CF=["stiffness","damping","mass"];function ju(n,t){return t.some(a=>n[a]!==void 0)}function EF(n){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!ju(n,CF)&&ju(n,LF)){const a=$F(n);t=Object.assign(Object.assign(Object.assign({},t),a),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Nr(n){var{from:t=0,to:a=1,restSpeed:o=2,restDelta:i}=n,l=sf(n,["from","to","restSpeed","restDelta"]);const r={done:!1,value:t};let{stiffness:c,damping:u,mass:p,velocity:d,duration:m,isResolvedFromDuration:f}=EF(l),h=Bu,g=Bu;function w(){const x=d?-(d/1e3):0,T=a-t,$=u/(2*Math.sqrt(c*p)),k=Math.sqrt(c/p)/1e3;if(i===void 0&&(i=Math.min(Math.abs(a-t)/100,.4)),$<1){const A=Kl(k,$);h=L=>{const H=Math.exp(-$*k*L);return a-H*((x+$*k*T)/A*Math.sin(A*L)+T*Math.cos(A*L))},g=L=>{const H=Math.exp(-$*k*L);return $*k*H*(Math.sin(A*L)*(x+$*k*T)/A+T*Math.cos(A*L))-H*(Math.cos(A*L)*(x+$*k*T)-A*T*Math.sin(A*L))}}else if($===1)h=A=>a-Math.exp(-k*A)*(T+(x+k*T)*A);else{const A=k*Math.sqrt($*$-1);h=L=>{const H=Math.exp(-$*k*L),B=Math.min(A*L,300);return a-H*((x+$*k*T)*Math.sinh(B)+A*T*Math.cosh(B))/A}}}return w(),{next:x=>{const T=h(x);if(f)r.done=x>=m;else{const $=g(x)*1e3,k=Math.abs($)<=o,A=Math.abs(a-T)<=i;r.done=k&&A}return r.value=r.done?a:T,r},flipTarget:()=>{d=-d,[t,a]=[a,t],w()}}}Nr.needsInterpolation=(n,t)=>typeof n=="string"||typeof t=="string";const Bu=n=>0,of=(n,t,a)=>{const o=t-n;return o===0?1:(a-n)/o},Fr=(n,t,a)=>-a*n+a*t+n,lf=(n,t)=>a=>Math.max(Math.min(a,t),n),ks=n=>n%1?Number(n.toFixed(5)):n,Fs=/(-)?([\d]*\.?[\d])+/g,Gl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,IF=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Gs(n){return typeof n=="string"}const Qs={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},bs=Object.assign(Object.assign({},Qs),{transform:lf(0,1)}),fo=Object.assign(Object.assign({},Qs),{default:1}),qr=n=>({test:t=>Gs(t)&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),Gt=qr("deg"),ys=qr("%"),ye=qr("px"),Vu=Object.assign(Object.assign({},ys),{parse:n=>ys.parse(n)/100,transform:n=>ys.transform(n*100)}),Wr=(n,t)=>a=>!!(Gs(a)&&IF.test(a)&&a.startsWith(n)||t&&Object.prototype.hasOwnProperty.call(a,t)),rf=(n,t,a)=>o=>{if(!Gs(o))return o;const[i,l,r,c]=o.match(Fs);return{[n]:parseFloat(i),[t]:parseFloat(l),[a]:parseFloat(r),alpha:c!==void 0?parseFloat(c):1}},la={test:Wr("hsl","hue"),parse:rf("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:a,alpha:o=1})=>"hsla("+Math.round(n)+", "+ys.transform(ks(t))+", "+ys.transform(ks(a))+", "+ks(bs.transform(o))+")"},SF=lf(0,255),Di=Object.assign(Object.assign({},Qs),{transform:n=>Math.round(SF(n))}),Ct={test:Wr("rgb","red"),parse:rf("red","green","blue"),transform:({red:n,green:t,blue:a,alpha:o=1})=>"rgba("+Di.transform(n)+", "+Di.transform(t)+", "+Di.transform(a)+", "+ks(bs.transform(o))+")"};function AF(n){let t="",a="",o="",i="";return n.length>5?(t=n.substr(1,2),a=n.substr(3,2),o=n.substr(5,2),i=n.substr(7,2)):(t=n.substr(1,1),a=n.substr(2,1),o=n.substr(3,1),i=n.substr(4,1),t+=t,a+=a,o+=o,i+=i),{red:parseInt(t,16),green:parseInt(a,16),blue:parseInt(o,16),alpha:i?parseInt(i,16)/255:1}}const Ql={test:Wr("#"),parse:AF,transform:Ct.transform},vn={test:n=>Ct.test(n)||Ql.test(n)||la.test(n),parse:n=>Ct.test(n)?Ct.parse(n):la.test(n)?la.parse(n):Ql.parse(n),transform:n=>Gs(n)?n:n.hasOwnProperty("red")?Ct.transform(n):la.transform(n)},cf="${c}",uf="${n}";function OF(n){var t,a,o,i;return isNaN(n)&&Gs(n)&&((a=(t=n.match(Fs))===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:0)+((i=(o=n.match(Gl))===null||o===void 0?void 0:o.length)!==null&&i!==void 0?i:0)>0}function pf(n){typeof n=="number"&&(n=`${n}`);const t=[];let a=0;const o=n.match(Gl);o&&(a=o.length,n=n.replace(Gl,cf),t.push(...o.map(vn.parse)));const i=n.match(Fs);return i&&(n=n.replace(Fs,uf),t.push(...i.map(Qs.parse))),{values:t,numColors:a,tokenised:n}}function df(n){return pf(n).values}function mf(n){const{values:t,numColors:a,tokenised:o}=pf(n),i=t.length;return l=>{let r=o;for(let c=0;c<i;c++)r=r.replace(c<a?cf:uf,c<a?vn.transform(l[c]):ks(l[c]));return r}}const HF=n=>typeof n=="number"?0:n;function PF(n){const t=df(n);return mf(n)(t.map(HF))}const Ys={test:OF,parse:df,createTransformer:mf,getAnimatableNone:PF},RF=new Set(["brightness","contrast","saturate","opacity"]);function NF(n){let[t,a]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[o]=a.match(Fs)||[];if(!o)return n;const i=a.replace(o,"");let l=RF.has(t)?1:0;return o!==a&&(l*=100),t+"("+l+i+")"}const FF=/([a-z-]*)\(.*?\)/g,Yl=Object.assign(Object.assign({},Ys),{getAnimatableNone:n=>{const t=n.match(FF);return t?t.map(NF).join(" "):n}});function ji(n,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?n+(t-n)*6*a:a<1/2?t:a<2/3?n+(t-n)*(2/3-a)*6:n}function Uu({hue:n,saturation:t,lightness:a,alpha:o}){n/=360,t/=100,a/=100;let i=0,l=0,r=0;if(!t)i=l=r=a;else{const c=a<.5?a*(1+t):a+t-a*t,u=2*a-c;i=ji(u,c,n+1/3),l=ji(u,c,n),r=ji(u,c,n-1/3)}return{red:Math.round(i*255),green:Math.round(l*255),blue:Math.round(r*255),alpha:o}}const qF=(n,t,a)=>{const o=n*n,i=t*t;return Math.sqrt(Math.max(0,a*(i-o)+o))},WF=[Ql,Ct,la],Ku=n=>WF.find(t=>t.test(n)),Gu=n=>`'${n}' is not an animatable color. Use the equivalent color code instead.`,ff=(n,t)=>{let a=Ku(n),o=Ku(t);Ns(!!a,Gu(n)),Ns(!!o,Gu(t));let i=a.parse(n),l=o.parse(t);a===la&&(i=Uu(i),a=Ct),o===la&&(l=Uu(l),o=Ct);const r=Object.assign({},i);return c=>{for(const u in r)u!=="alpha"&&(r[u]=qF(i[u],l[u],c));return r.alpha=Fr(i.alpha,l.alpha,c),a.transform(r)}},DF=n=>typeof n=="number",jF=(n,t)=>a=>t(n(a)),hf=(...n)=>n.reduce(jF);function gf(n,t){return DF(n)?a=>Fr(n,t,a):vn.test(n)?ff(n,t):vf(n,t)}const _f=(n,t)=>{const a=[...n],o=a.length,i=n.map((l,r)=>gf(l,t[r]));return l=>{for(let r=0;r<o;r++)a[r]=i[r](l);return a}},BF=(n,t)=>{const a=Object.assign(Object.assign({},n),t),o={};for(const i in a)n[i]!==void 0&&t[i]!==void 0&&(o[i]=gf(n[i],t[i]));return i=>{for(const l in o)a[l]=o[l](i);return a}};function Qu(n){const t=Ys.parse(n),a=t.length;let o=0,i=0,l=0;for(let r=0;r<a;r++)o||typeof t[r]=="number"?o++:t[r].hue!==void 0?l++:i++;return{parsed:t,numNumbers:o,numRGB:i,numHSL:l}}const vf=(n,t)=>{const a=Ys.createTransformer(t),o=Qu(n),i=Qu(t);return o.numHSL===i.numHSL&&o.numRGB===i.numRGB&&o.numNumbers>=i.numNumbers?hf(_f(o.parsed,i.parsed),a):(Rr(!0,`Complex values '${n}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),r=>`${r>0?t:n}`)},VF=(n,t)=>a=>Fr(n,t,a);function UF(n){if(typeof n=="number")return VF;if(typeof n=="string")return vn.test(n)?ff:vf;if(Array.isArray(n))return _f;if(typeof n=="object")return BF}function KF(n,t,a){const o=[],i=a||UF(n[0]),l=n.length-1;for(let r=0;r<l;r++){let c=i(n[r],n[r+1]);if(t){const u=Array.isArray(t)?t[r]:t;c=hf(u,c)}o.push(c)}return o}function GF([n,t],[a]){return o=>a(of(n,t,o))}function QF(n,t){const a=n.length,o=a-1;return i=>{let l=0,r=!1;if(i<=n[0]?r=!0:i>=n[o]&&(l=o-1,r=!0),!r){let u=1;for(;u<a&&!(n[u]>i||u===o);u++);l=u-1}const c=of(n[l],n[l+1],i);return t[l](c)}}function kf(n,t,{clamp:a=!0,ease:o,mixer:i}={}){const l=n.length;Ns(l===t.length,"Both input and output ranges must be the same length"),Ns(!o||!Array.isArray(o)||o.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[l-1]&&(n=[].concat(n),t=[].concat(t),n.reverse(),t.reverse());const r=KF(t,o,i),c=l===2?GF(n,r):QF(n,r);return a?u=>c(Ul(n[0],n[l-1],u)):c}const hi=n=>t=>1-n(1-t),Dr=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,YF=n=>t=>Math.pow(t,n),bf=n=>t=>t*t*((n+1)*t-n),JF=n=>{const t=bf(n);return a=>(a*=2)<1?.5*t(a):.5*(2-Math.pow(2,-10*(a-1)))},yf=1.525,ZF=4/11,XF=8/11,e9=9/10,wf=n=>n,jr=YF(2),n9=hi(jr),xf=Dr(jr),Tf=n=>1-Math.sin(Math.acos(n)),$f=hi(Tf),t9=Dr($f),Br=bf(yf),a9=hi(Br),s9=Dr(Br),o9=JF(yf),i9=4356/361,l9=35442/1805,r9=16061/1805,Ko=n=>{if(n===1||n===0)return n;const t=n*n;return n<ZF?7.5625*t:n<XF?9.075*t-9.9*n+3.4:n<e9?i9*t-l9*n+r9:10.8*n*n-20.52*n+10.72},c9=hi(Ko),u9=n=>n<.5?.5*(1-Ko(1-n*2)):.5*Ko(n*2-1)+.5;function p9(n,t){return n.map(()=>t||xf).splice(0,n.length-1)}function d9(n){const t=n.length;return n.map((a,o)=>o!==0?o/(t-1):0)}function m9(n,t){return n.map(a=>a*t)}function xo({from:n=0,to:t=1,ease:a,offset:o,duration:i=300}){const l={done:!1,value:n},r=Array.isArray(t)?t:[n,t],c=m9(o&&o.length===r.length?o:d9(r),i);function u(){return kf(c,r,{ease:Array.isArray(a)?a:p9(r,a)})}let p=u();return{next:d=>(l.value=p(d),l.done=d>=i,l),flipTarget:()=>{r.reverse(),p=u()}}}function f9({velocity:n=0,from:t=0,power:a=.8,timeConstant:o=350,restDelta:i=.5,modifyTarget:l}){const r={done:!1,value:t};let c=a*n;const u=t+c,p=l===void 0?u:l(u);return p!==u&&(c=p-t),{next:d=>{const m=-c*Math.exp(-d/o);return r.done=!(m>i||m<-i),r.value=r.done?p:p+m,r},flipTarget:()=>{}}}const Yu={keyframes:xo,spring:Nr,decay:f9};function h9(n){if(Array.isArray(n.to))return xo;if(Yu[n.type])return Yu[n.type];const t=new Set(Object.keys(n));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?xo:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Nr:xo}function zf(n,t,a=0){return n-t-a}function g9(n,t,a=0,o=!0){return o?zf(t+-n,t,a):t-(n-t)+a}function _9(n,t,a,o){return o?n>=t+a:n<=-a}const v9=n=>{const t=({delta:a})=>n(a);return{start:()=>Vl.update(t,!0),stop:()=>kF.update(t)}};function Mf(n){var t,a,{from:o,autoplay:i=!0,driver:l=v9,elapsed:r=0,repeat:c=0,repeatType:u="loop",repeatDelay:p=0,onPlay:d,onStop:m,onComplete:f,onRepeat:h,onUpdate:g}=n,w=sf(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:x}=w,T,$=0,k=w.duration,A,L=!1,H=!0,B;const R=h9(w);!((a=(t=R).needsInterpolation)===null||a===void 0)&&a.call(t,o,x)&&(B=kf([0,100],[o,x],{clamp:!1}),o=0,x=100);const K=R(Object.assign(Object.assign({},w),{from:o,to:x}));function ie(){$++,u==="reverse"?(H=$%2===0,r=g9(r,k,p,H)):(r=zf(r,k,p),u==="mirror"&&K.flipTarget()),L=!1,h&&h()}function me(){T.stop(),f&&f()}function X(be){if(H||(be=-be),r+=be,!L){const xe=K.next(Math.max(0,r));A=xe.value,B&&(A=B(A)),L=H?xe.done:r<=0}g==null||g(A),L&&($===0&&(k??(k=r)),$<c?_9(r,k,p,H)&&ie():me())}function ve(){d==null||d(),T=l(X),T.start()}return i&&ve(),{stop:()=>{m==null||m(),T.stop()}}}function Lf(n,t){return t?n*(1e3/t):0}function k9({from:n=0,velocity:t=0,min:a,max:o,power:i=.8,timeConstant:l=750,bounceStiffness:r=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:p,driver:d,onUpdate:m,onComplete:f,onStop:h}){let g;function w(k){return a!==void 0&&k<a||o!==void 0&&k>o}function x(k){return a===void 0?o:o===void 0||Math.abs(a-k)<Math.abs(o-k)?a:o}function T(k){g==null||g.stop(),g=Mf(Object.assign(Object.assign({},k),{driver:d,onUpdate:A=>{var L;m==null||m(A),(L=k.onUpdate)===null||L===void 0||L.call(k,A)},onComplete:f,onStop:h}))}function $(k){T(Object.assign({type:"spring",stiffness:r,damping:c,restDelta:u},k))}if(w(n))$({from:n,velocity:t,to:x(n)});else{let k=i*t+n;typeof p<"u"&&(k=p(k));const A=x(k),L=A===a?-1:1;let H,B;const R=K=>{H=B,B=K,t=Lf(K-H,af().delta),(L===1&&K>A||L===-1&&K<A)&&$({from:K,to:A,velocity:t})};T({type:"decay",from:n,velocity:t,timeConstant:l,power:i,restDelta:u,modifyTarget:p,onUpdate:w(k)?R:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Cf=(n,t)=>1-3*t+3*n,Ef=(n,t)=>3*t-6*n,If=n=>3*n,Go=(n,t,a)=>((Cf(t,a)*n+Ef(t,a))*n+If(t))*n,Sf=(n,t,a)=>3*Cf(t,a)*n*n+2*Ef(t,a)*n+If(t),b9=1e-7,y9=10;function w9(n,t,a,o,i){let l,r,c=0;do r=t+(a-t)/2,l=Go(r,o,i)-n,l>0?a=r:t=r;while(Math.abs(l)>b9&&++c<y9);return r}const x9=8,T9=.001;function $9(n,t,a,o){for(let i=0;i<x9;++i){const l=Sf(t,a,o);if(l===0)return t;const r=Go(t,a,o)-n;t-=r/l}return t}const To=11,ho=1/(To-1);function z9(n,t,a,o){if(n===t&&a===o)return wf;const i=new Float32Array(To);for(let r=0;r<To;++r)i[r]=Go(r*ho,n,a);function l(r){let c=0,u=1;const p=To-1;for(;u!==p&&i[u]<=r;++u)c+=ho;--u;const d=(r-i[u])/(i[u+1]-i[u]),m=c+d*ho,f=Sf(m,n,a);return f>=T9?$9(r,m,n,a):f===0?m:w9(r,c,c+ho,n,a)}return r=>r===0||r===1?r:Go(l(r),t,o)}const Bi={};class M9{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,a,o){if(this.subscriptions.size)for(const i of this.subscriptions)i(t,a,o)}clear(){this.subscriptions.clear()}}function Ju(n){return!isNaN(parseFloat(n))}class L9{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new M9,this.canTrackVelocity=!1,this.updateAndNotify=a=>{this.prev=this.current,this.current=a;const{delta:o,timestamp:i}=af();this.lastUpdated!==i&&(this.timeDelta=o,this.lastUpdated=i),Vl.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Vl.postRender(this.velocityCheck),this.velocityCheck=({timestamp:a})=>{this.canTrackVelocity||(this.canTrackVelocity=Ju(this.current)),a!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Ju(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Lf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(a=>{const{stop:o}=t(a);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function C9(n){return new L9(n)}const{isArray:E9}=Array;function I9(){const n=Z({}),t=o=>{const i=l=>{n.value[l]&&(n.value[l].stop(),n.value[l].destroy(),delete n.value[l])};o?E9(o)?o.forEach(i):i(o):Object.keys(n.value).forEach(i)},a=(o,i,l)=>{if(n.value[o])return n.value[o];const r=C9(i);return r.onChange(c=>l[o]=c),n.value[o]=r,r};return Bk(t),{motionValues:n,get:a,stop:t}}function S9(n){return Array.isArray(n)}function Qt(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Vi(n){return{type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function A9(n){return{type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}}function Ui(){return{type:"keyframes",ease:"linear",duration:300}}function O9(n){return{type:"keyframes",duration:800,values:n}}const Zu={default:A9,x:Qt,y:Qt,z:Qt,rotate:Qt,rotateX:Qt,rotateY:Qt,rotateZ:Qt,scaleX:Vi,scaleY:Vi,scale:Vi,backgroundColor:Ui,color:Ui,opacity:Ui};function Af(n,t){let a;return S9(t)?a=O9:a=Zu[n]||Zu.default,{to:t,...a(t)}}const Xu={...Qs,transform:Math.round},Of={color:vn,backgroundColor:vn,outlineColor:vn,fill:vn,stroke:vn,borderColor:vn,borderTopColor:vn,borderRightColor:vn,borderBottomColor:vn,borderLeftColor:vn,borderWidth:ye,borderTopWidth:ye,borderRightWidth:ye,borderBottomWidth:ye,borderLeftWidth:ye,borderRadius:ye,radius:ye,borderTopLeftRadius:ye,borderTopRightRadius:ye,borderBottomRightRadius:ye,borderBottomLeftRadius:ye,width:ye,maxWidth:ye,height:ye,maxHeight:ye,size:ye,top:ye,right:ye,bottom:ye,left:ye,padding:ye,paddingTop:ye,paddingRight:ye,paddingBottom:ye,paddingLeft:ye,margin:ye,marginTop:ye,marginRight:ye,marginBottom:ye,marginLeft:ye,rotate:Gt,rotateX:Gt,rotateY:Gt,rotateZ:Gt,scale:fo,scaleX:fo,scaleY:fo,scaleZ:fo,skew:Gt,skewX:Gt,skewY:Gt,distance:ye,translateX:ye,translateY:ye,translateZ:ye,x:ye,y:ye,z:ye,perspective:ye,transformPerspective:ye,opacity:bs,originX:Vu,originY:Vu,originZ:ye,zIndex:Xu,filter:Yl,WebkitFilter:Yl,fillOpacity:bs,strokeOpacity:bs,numOctaves:Xu},Vr=n=>Of[n];function Hf(n,t){return t&&typeof n=="number"&&t.transform?t.transform(n):n}function H9(n,t){let a=Vr(n);return a!==Yl&&(a=Ys),a.getAnimatableNone?a.getAnimatableNone(t):void 0}const P9={linear:wf,easeIn:jr,easeInOut:xf,easeOut:n9,circIn:Tf,circInOut:t9,circOut:$f,backIn:Br,backInOut:s9,backOut:a9,anticipate:o9,bounceIn:c9,bounceInOut:u9,bounceOut:Ko};function ep(n){if(Array.isArray(n)){const[t,a,o,i]=n;return z9(t,a,o,i)}else if(typeof n=="string")return P9[n];return n}function R9(n){return Array.isArray(n)&&typeof n[0]!="number"}function np(n,t){return n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Ys.test(t)&&!t.startsWith("url("))}function N9(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function F9({ease:n,times:t,delay:a,...o}){const i={...o};return t&&(i.offset=t),n&&(i.ease=R9(n)?n.map(ep):ep(n)),a&&(i.elapsed=-a),i}function q9(n,t,a){return Array.isArray(t.to)&&(n.duration||(n.duration=800)),N9(t),W9(n)||(n={...n,...Af(a,t.to)}),{...t,...F9(n)}}function W9({delay:n,repeat:t,repeatType:a,repeatDelay:o,from:i,...l}){return!!Object.keys(l).length}function D9(n,t){return n[t]||n.default||n}function j9(n,t,a,o,i){const l=D9(o,n);let r=l.from===null||l.from===void 0?t.get():l.from;const c=np(n,a);r==="none"&&c&&typeof a=="string"&&(r=H9(n,a));const u=np(n,r);function p(m){const f={from:r,to:a,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return l.type==="inertia"||l.type==="decay"?k9({...f,...l}):Mf({...q9(l,f,n),onUpdate:h=>{f.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),i&&i(),m&&m()}})}function d(m){return t.set(a),o.onComplete&&o.onComplete(),i&&i(),m&&m(),{stop:()=>{}}}return!u||!c||l.type===!1?d:p}function B9(){const{motionValues:n,stop:t,get:a}=I9();return{motionValues:n,stop:t,push:(i,l,r,c={},u)=>{const p=r[i],d=a(i,p,r);if(c&&c.immediate){d.set(l);return}const m=j9(i,d,l,c,u);d.start(m)}}}function V9(n,t={},{motionValues:a,push:o,stop:i}=B9()){const l=O(t),r=Z(!1);ke(a,m=>{r.value=Object.values(m).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const c=m=>{if(!l||!l[m])throw new Error(`The variant ${m} does not exist.`);return l[m]},u=m=>(typeof m=="string"&&(m=c(m)),Promise.all(Object.entries(m).map(([f,h])=>{if(f!=="transition")return new Promise(g=>o(f,h,n,m.transition||Af(f,m[f]),g))}).filter(Boolean)));return{isAnimating:r,apply:u,set:m=>{const f=bl(m)?m:c(m);Object.entries(f).forEach(([h,g])=>{h!=="transition"&&o(h,g,n,{immediate:!0})})},leave:async m=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){m();return}await u(f),m()},stop:i}}const Ur=typeof window<"u",U9=()=>Ur&&window.onpointerdown===null,K9=()=>Ur&&window.ontouchstart===null,G9=()=>Ur&&window.onmousedown===null;function Q9({target:n,state:t,variants:a,apply:o}){const i=O(a),l=Z(!1),r=Z(!1),c=Z(!1),u=N(()=>{let d=[];return i&&(i.hovered&&(d=[...d,...Object.keys(i.hovered)]),i.tapped&&(d=[...d,...Object.keys(i.tapped)]),i.focused&&(d=[...d,...Object.keys(i.focused)])),d}),p=N(()=>{const d={};Object.assign(d,t.value),l.value&&i.hovered&&Object.assign(d,i.hovered),r.value&&i.tapped&&Object.assign(d,i.tapped),c.value&&i.focused&&Object.assign(d,i.focused);for(const m in d)u.value.includes(m)||delete d[m];return d});i.hovered&&(Te(n,"mouseenter",()=>l.value=!0),Te(n,"mouseleave",()=>{l.value=!1,r.value=!1}),Te(n,"mouseout",()=>{l.value=!1,r.value=!1})),i.tapped&&(G9()&&(Te(n,"mousedown",()=>r.value=!0),Te(n,"mouseup",()=>r.value=!1)),U9()&&(Te(n,"pointerdown",()=>r.value=!0),Te(n,"pointerup",()=>r.value=!1)),K9()&&(Te(n,"touchstart",()=>r.value=!0),Te(n,"touchend",()=>r.value=!1))),i.focused&&(Te(n,"focus",()=>c.value=!0),Te(n,"blur",()=>c.value=!1)),ke(p,o)}function Y9({set:n,target:t,variants:a,variant:o}){const i=O(a);ke(()=>t,()=>{i&&(i.initial&&n("initial"),i.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function J9({state:n,apply:t}){ke(n,a=>{a&&t(a)},{immediate:!0})}function Z9({target:n,variants:t,variant:a}){const o=O(t);o&&(o.visible||o.visibleOnce)&&R1(n,([{isIntersecting:i}])=>{o.visible?i?a.value="visible":a.value="initial":o.visibleOnce&&(i&&a.value!=="visibleOnce"?a.value="visibleOnce":a.value||(a.value="initial"))})}function X9(n,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&Y9(n),t.syncVariants&&J9(n),t.visibilityHooks&&Z9(n),t.eventListeners&&Q9(n)}function Pf(n={}){const t=Be({...n}),a=Z({});return ke(t,()=>{const o={};for(const[i,l]of Object.entries(t)){const r=Vr(i),c=Hf(l,r);o[i]=c}a.value=o},{immediate:!0,deep:!0}),{state:t,style:a}}function Kr(n,t){ke(()=>ln(n),a=>{a&&t(a)},{immediate:!0})}const eq={x:"translateX",y:"translateY",z:"translateZ"};function Rf(n={},t=!0){const a=Be({...n}),o=Z("");return ke(a,i=>{let l="",r=!1;if(t&&(i.x||i.y||i.z)){const c=[i.x||0,i.y||0,i.z||0].map(ye.transform).join(",");l+=`translate3d(${c}) `,r=!0}for(const[c,u]of Object.entries(i)){if(t&&(c==="x"||c==="y"||c==="z"))continue;const p=Vr(c),d=Hf(u,p);l+=`${eq[c]||c}(${d}) `}t&&!r&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:a,transform:o}}const nq=["","X","Y","Z"],tq=["perspective","translate","scale","rotate","skew"],Nf=["transformPerspective","x","y","z"];tq.forEach(n=>{nq.forEach(t=>{const a=n+t;Nf.push(a)})});const aq=new Set(Nf);function Gr(n){return aq.has(n)}const sq=new Set(["originX","originY","originZ"]);function Ff(n){return sq.has(n)}function oq(n){const t={},a={};return Object.entries(n).forEach(([o,i])=>{Gr(o)||Ff(o)?t[o]=i:a[o]=i}),{transform:t,style:a}}function qf(n){const{transform:t,style:a}=oq(n),{transform:o}=Rf(t),{style:i}=Pf(a);return o.value&&(i.value.transform=o.value),i.value}function iq(n,t){let a,o;const{state:i,style:l}=Pf();return Kr(n,r=>{o=r;for(const c of Object.keys(Of))r.style[c]===null||r.style[c]===""||Gr(c)||Ff(c)||(i[c]=r.style[c]);a&&Object.entries(a).forEach(([c,u])=>r.style[c]=u),t&&t(i)}),ke(l,r=>{if(!o){a=r;return}for(const c in r)o.style[c]=r[c]},{immediate:!0}),{style:i}}function lq(n){const t=n.trim().split(/\) |\)/);if(t.length===1)return{};const a=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,i)=>{if(!i)return o;const[l,r]=i.split("("),u=r.split(",").map(d=>a(d.endsWith(")")?d.replace(")",""):d.trim())),p=u.length===1?u[0]:u;return{...o,[l]:p}},{})}function rq(n,t){Object.entries(lq(t)).forEach(([a,o])=>{const i=["x","y","z"];if(a==="translate3d"){if(o===0){i.forEach(l=>n[l]=0);return}o.forEach((l,r)=>n[i[r]]=l);return}if(o=parseFloat(o),a==="translateX"){n.x=o;return}if(a==="translateY"){n.y=o;return}if(a==="translateZ"){n.z=o;return}n[a]=o})}function cq(n,t){let a,o;const{state:i,transform:l}=Rf();return Kr(n,r=>{o=r,r.style.transform&&rq(i,r.style.transform),a&&(r.style.transform=a),t&&t(i)}),ke(l,r=>{if(!o){a=r;return}o.style.transform=r},{immediate:!0}),{transform:i}}function uq(n,t){const a=Be({}),o=r=>Object.entries(r).forEach(([c,u])=>a[c]=u),{style:i}=iq(n,o),{transform:l}=cq(n,o);return ke(a,r=>{Object.entries(r).forEach(([c,u])=>{const p=Gr(c)?l:i;p[c]&&p[c]===u||(p[c]=u)})},{immediate:!0,deep:!0}),Kr(n,()=>t&&o(t)),{motionProperties:a,style:i,transform:l}}function pq(n={}){const t=O(n),a=Z();return{state:N(()=>{if(a.value)return t[a.value]}),variant:a}}function Wf(n,t={},a){const{motionProperties:o}=uq(n),{variant:i,state:l}=pq(t),r=V9(o,t),c={target:n,variant:i,variants:t,state:l,motionProperties:o,...r};return X9(c,a),c}const dq=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function mq(n,t){const a=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};a&&(a.variants&&bl(a.variants)&&(t.value={...t.value,...a.variants}),dq.forEach(o=>{if(o==="delay"){if(a&&a[o]&&typeof a[o]=="number"){const i=a[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:i,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:i,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:i,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),a&&a[o]&&bl(a[o])&&(t.value[o]=a[o])}))}function Ki(n){return{created:(a,o,i)=>{const l=o.value&&typeof o.value=="string"?o.value:i.key;l&&Bi[l]&&Bi[l].stop();const r=Z(n||{});typeof o.value=="object"&&(r.value=o.value),mq(i,r);const c=Wf(a,r);a.motionInstance=c,l&&(Bi[l]=c)},getSSRProps(a,o){let{initial:i}=a.value||o&&(o==null?void 0:o.props)||{};i=O(i);const l=hF((n==null?void 0:n.initial)||{},i||{});return!l||Object.keys(l).length===0?void 0:{style:qf(l)}}}}const fq={initial:{opacity:0},enter:{opacity:1}},hq={initial:{opacity:0},visible:{opacity:1}},gq={initial:{opacity:0},visibleOnce:{opacity:1}},_q={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},vq={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},kq={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},bq={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},yq={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},wq={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},xq={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Tq={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},$q={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},zq={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Mq={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Lq={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Cq={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Eq={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Iq={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Sq={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},Aq={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Oq={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Hq={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Pq={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Rq={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Nq={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Fq={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},qq={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Wq={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Dq={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},jq={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Jl={__proto__:null,fade:fq,fadeVisible:hq,fadeVisibleOnce:gq,pop:_q,popVisible:vq,popVisibleOnce:kq,rollBottom:Cq,rollLeft:bq,rollRight:xq,rollTop:zq,rollVisibleBottom:Eq,rollVisibleLeft:yq,rollVisibleOnceBottom:Iq,rollVisibleOnceLeft:wq,rollVisibleOnceRight:$q,rollVisibleOnceTop:Lq,rollVisibleRight:Tq,rollVisibleTop:Mq,slideBottom:Wq,slideLeft:Sq,slideRight:Hq,slideTop:Nq,slideVisibleBottom:Dq,slideVisibleLeft:Aq,slideVisibleOnceBottom:jq,slideVisibleOnceLeft:Oq,slideVisibleOnceRight:Rq,slideVisibleOnceTop:qq,slideVisibleRight:Pq,slideVisibleTop:Fq},Bq=Ae({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var c;const t=Wg(),a=Be({});if(!n.is&&!t.default)return()=>xn("div",{});const o=N(()=>{let u;return n.preset&&(u=Jl[n.preset]),u}),i=N(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),l=N(()=>{const u={...i.value,...o.value||{},...n.variants||{}};return n.delay&&(u.enter.transition={...u.enter.transition},u.enter.transition.delay=parseInt(n.delay)),u}),r=N(()=>{if(!n.is)return;let u=n.is;return typeof r.value=="string"&&!bp(u)&&(u=Ha(u)),u});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const u=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var m,f,h;(m=p.variants)!=null&&m.enter&&p.apply("enter"),(f=p.variants)!=null&&f.visible&&p.apply("visible"),(h=p.variants)!=null&&h.visibleOnce&&p.apply("visibleOnce")},10)};ri(()=>Object.entries(a).forEach(([p,d])=>u(d)))}return{slots:t,component:r,motionConfig:l,instances:a}},render({slots:n,motionConfig:t,instances:a,component:o}){var c;const i=qf(t.initial||{}),l=(u,p)=>(u.props||(u.props={}),u.props.style=i,u.props.onVnodeMounted=({el:d})=>{const m=Wf(d,t);a[p]=m},u);if(o){const u=xn(o,void 0,n);return l(u,0),u}return(((c=n.default)==null?void 0:c.call(n))||[]).map((u,p)=>l(u,p))}});function Vq(n){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",a="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(o,i=>a.charAt(t.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Uq={install(n,t){if(n.directive("motion",Ki()),n.component("Motion",Bq),!t||t&&!t.excludePresets)for(const a in Jl){const o=Jl[a];n.directive(`motion-${Vq(a)}`,Ki(o))}if(t&&t.directives)for(const a in t.directives){const o=t.directives[a];o.initial,n.directive(`motion-${a}`,Ki(o))}}};var tp;const ws=typeof window<"u",Kq=Object.prototype.toString,Gq=n=>Kq.call(n)==="[object Object]";ws&&((tp=window==null?void 0:window.navigator)!=null&&tp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Qq(n){return ar()?(Tp(n),!0):!1}function Yq(n){var t;const a=O(n);return(t=a==null?void 0:a.$el)!=null?t:a}const Jq=ws?window:void 0,ap=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sp="__vueuse_ssr_handlers__";ap[sp]=ap[sp]||{};function Zq(n,t={}){const{immediate:a=!0,window:o=Jq}=t,i=Z(!1);let l=null;function r(){!i.value||!o||(n(),l=o.requestAnimationFrame(r))}function c(){!i.value&&o&&(i.value=!0,r())}function u(){i.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return a&&c(),Qq(u),{isActive:i,pause:u,resume:c}}var op;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(op||(op={}));const gi="vue-starport-injection",Df="vue-starport-options",Xq={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},jf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var eW=Object.defineProperty,Qo=Object.getOwnPropertySymbols,Bf=Object.prototype.hasOwnProperty,Vf=Object.prototype.propertyIsEnumerable,ip=(n,t,a)=>t in n?eW(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,nW=(n,t)=>{for(var a in t||(t={}))Bf.call(t,a)&&ip(n,a,t[a]);if(Qo)for(var a of Qo(t))Vf.call(t,a)&&ip(n,a,t[a]);return n},lp=(n,t)=>{var a={};for(var o in n)Bf.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&Qo)for(var o of Qo(n))t.indexOf(o)<0&&Vf.call(n,o)&&(a[o]=n[o]);return a};const tW=Ae({name:"StarportProxy",props:nW({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},jf),setup(n,t){const a=z(gi),o=N(()=>a.getInstance(n.port,n.component)),i=Z(),l=o.value.generateId(),r=Z(!1);return o.value.isVisible||(o.value.land(),r.value=!0),bt(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${n.port}" detected. The later one will be ignored.`);return}if(o.value.el=i.value,await on(),r.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const c=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${n.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),js(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,r.value=!1,!o.value.options.keepAlive&&(await on(),await on(),!o.value.el&&a.dispose(o.value.port))}),ke(()=>n,async()=>{o.value.props&&await on();const c=n,{props:u}=c,p=lp(c,["props"]);o.value.props=u||{},o.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=n,{initialProps:u,mountedProps:p}=c,d=lp(c,["initialProps","mountedProps"]),m=Y(d,(r.value?p:u)||{});return xn("div",Y(m,{id:l,ref:i,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?xn(t.slots.default):void 0)}}});var aW=Object.defineProperty,sW=Object.defineProperties,oW=Object.getOwnPropertyDescriptors,rp=Object.getOwnPropertySymbols,iW=Object.prototype.hasOwnProperty,lW=Object.prototype.propertyIsEnumerable,cp=(n,t,a)=>t in n?aW(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,rW=(n,t)=>{for(var a in t||(t={}))iW.call(t,a)&&cp(n,a,t[a]);if(rp)for(var a of rp(t))lW.call(t,a)&&cp(n,a,t[a]);return n},cW=(n,t)=>sW(n,oW(t));const uW=Ae({name:"Starport",inheritAttrs:!0,props:jf,setup(n,t){const a=Z(!1);return bt(()=>{if(a.value=!0,!z(gi))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var r,c;const o=(c=(r=t.slots).default)==null?void 0:c.call(r);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const i=o[0];let l=i.type;return(!Gq(l)||qt(l))&&(l={render(){return o}}),xn(tW,cW(rW({},n),{key:n.port,component:ni(l),props:i.props}))}}});function pW(n){const t=Be({height:0,width:0,left:0,top:0,update:o,listen:l,pause:r,margin:"0px",padding:"0px"}),a=ws?document.documentElement||document.body:void 0;function o(){if(!ws)return;const c=Yq(n);if(!c)return;const{height:u,width:p,left:d,top:m}=c.getBoundingClientRect(),f=window.getComputedStyle(c),h=f.margin,g=f.padding;Object.assign(t,{height:u,width:p,left:d,top:a.scrollTop+m,margin:h,padding:g})}const i=Zq(o,{immediate:!1});function l(){ws&&(o(),i.resume())}function r(){i.pause()}return t}let dW=(n,t=21)=>(a=t)=>{let o="",i=a;for(;i--;)o+=n[Math.random()*n.length|0];return o};const up=dW("abcdefghijklmnopqrstuvwxyz",5);function pp(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function mW(n){var t;return n.name||((t=n.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var fW=Object.defineProperty,dp=Object.getOwnPropertySymbols,hW=Object.prototype.hasOwnProperty,gW=Object.prototype.propertyIsEnumerable,mp=(n,t,a)=>t in n?fW(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,Gi=(n,t)=>{for(var a in t||(t={}))hW.call(t,a)&&mp(n,a,t[a]);if(dp)for(var a of dp(t))gW.call(t,a)&&mp(n,a,t[a]);return n};function _W(n,t,a={}){const o=mW(t),i=pp(o)||up(),l=Z(),r=Z(null),c=Z(!1),u=Z(!1),p=ch(!0),d=Z({}),m=N(()=>Gi(Gi(Gi({},Xq),a),d.value)),f=Z(0);let h;p.run(()=>{h=pW(l),ke(l,async T=>{T&&(u.value=!0),await on(),l.value||(u.value=!1)})});const g=pp(n);function w(){return`starport-${i}-${g}-${up()}`}const x=w();return Be({el:l,id:x,port:n,props:r,rect:h,scope:p,isLanded:c,isVisible:u,options:m,liftOffTime:f,component:t,componentName:o,componentId:i,generateId:w,setLocalOptions(T={}){d.value=JSON.parse(JSON.stringify(T))},elRef(){return l},liftOff(){c.value&&(c.value=!1,f.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function vW(n){const t=Be(new Map);function a(i,l){let r=t.get(i);return r||(r=_W(i,l,n),t.set(i,r)),r.component=l,r}function o(i){var l;(l=t.get(i))==null||l.scope.stop(),t.delete(i)}return{portMap:t,dispose:o,getInstance:a}}var kW=Object.defineProperty,bW=Object.defineProperties,yW=Object.getOwnPropertyDescriptors,fp=Object.getOwnPropertySymbols,wW=Object.prototype.hasOwnProperty,xW=Object.prototype.propertyIsEnumerable,hp=(n,t,a)=>t in n?kW(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,TW=(n,t)=>{for(var a in t||(t={}))wW.call(t,a)&&hp(n,a,t[a]);if(fp)for(var a of fp(t))xW.call(t,a)&&hp(n,a,t[a]);return n},$W=(n,t)=>bW(n,yW(t));const zW=Ae({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const t=z(gi);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const a=N(()=>t.getInstance(n.port,n.component)),o=N(()=>{var r;return((r=a.value.el)==null?void 0:r.id)||a.value.id}),i=N(()=>{const r=Date.now()-a.value.liftOffTime,c=Math.max(0,a.value.options.duration-r),u=a.value.rect,p={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!a.value.isVisible||!a.value.el?$W(TW({},p),{zIndex:-1,display:"none"}):(a.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:a.value.options.easing}),p)}),l={onTransitionend(r){a.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${a.value.componentName}" is too short (${r.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${a.value.options.duration/1e3}s).`)}};return()=>{const r=!!(a.value.isLanded&&a.value.el);return xn("div",{style:i.value,"data-starport-craft":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true",onTransitionend:a.value.land},xn(h_,{to:r?`#${o.value}`:"body",disabled:!r},xn(a.value.component,Y(l,a.value.props))))}}}),MW=Ae({name:"StarportCarrier",setup(n,{slots:t}){const a=vW(z(Df,{}));return Tn().appContext.app.provide(gi,a),()=>{var i;return[(i=t.default)==null?void 0:i.call(t),Array.from(a.portMap.entries()).map(([l,{component:r}])=>xn(zW,{key:l,port:l,component:r}))]}}});function LW(n={}){return{install(t){t.provide(Df,n),t.component("Starport",uW),t.component("StarportCarrier",MW)}}}function CW(n){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),n.app.use(Uq),n.app.use(LW({keepAlive:!0}))}function zn(n,t,a){var o;return((o=n.instance)==null?void 0:o.$).provides[t]??a}function EW(){return{install(n){n.directive("click",{name:"v-click",mounted(t,a){var d,m,f,h,g,w;if(vs.value||(d=zn(a,fs))!=null&&d.value)return;const o=zn(a,na),i=zn(a,ms),l=zn(a,vl),r=a.modifiers.hide!==!1&&a.modifiers.hide!=null,c=a.modifiers.fade!==!1&&a.modifiers.fade!=null,u=((m=o==null?void 0:o.value)==null?void 0:m.length)||0,p=c?uk:Li;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),a.value==null&&(a.value=(h=o==null?void 0:o.value)==null?void 0:h.length),typeof a.value=="string"&&(a.value.startsWith("+")||a.value.startsWith("-"))&&(a.value=(((g=o==null?void 0:o.value)==null?void 0:g.length)||0)+Number(a.value)),!(l!=null&&l.value.has(a.value)))l==null||l.value.set(a.value,[t]);else if(!((w=l==null?void 0:l.value.get(a.value))!=null&&w.includes(t))){const x=(l==null?void 0:l.value.get(a.value))||[];l==null||l.value.set(a.value,[t].concat(x))}t==null||t.classList.toggle(Jt,!0),i&&ke(i,()=>{const x=(i==null?void 0:i.value)??0,T=a.value!=null?x>=a.value:x>u;t.classList.contains(Ci)||t.classList.toggle(p,!T),r!==!1&&r!==void 0&&t.classList.toggle(p,T),t.classList.toggle(Qa,!1);const $=l==null?void 0:l.value.get(x);$==null||$.forEach((k,A)=>{k.classList.toggle(lo,!1),A===$.length-1?k.classList.toggle(Qa,!0):k.classList.toggle(lo,!0)}),t.classList.contains(Qa)||t.classList.toggle(lo,T)},{immediate:!0})},unmounted(t,a){t==null||t.classList.toggle(Jt,!1);const o=zn(a,na);o!=null&&o.value&&kl(o.value,t)}}),n.directive("after",{name:"v-after",mounted(t,a){var c,u,p;if(vs.value||(c=zn(a,fs))!=null&&c.value)return;const o=zn(a,na),i=zn(a,ms),l=zn(a,vl),r=o==null?void 0:o.value.length;a.value==null&&(a.value=o==null?void 0:o.value.length),typeof a.value=="string"&&(a.value.startsWith("+")||a.value.startsWith("-"))&&(a.value=(((u=o==null?void 0:o.value)==null?void 0:u.length)||0)+Number(a.value)),l!=null&&l.value.has(a.value)?(p=l==null?void 0:l.value.get(a.value))==null||p.push(t):l==null||l.value.set(a.value,[t]),t==null||t.classList.toggle(Jt,!0),i&&ke(i,()=>{const d=(i.value??0)>=(a.value??r??0);t.classList.contains(Ci)||t.classList.toggle(Li,!d),t.classList.toggle(Qa,!1),t.classList.contains(Qa)||t.classList.toggle(lo,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Jt,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(t,a){var r,c,u;if(vs.value||(r=zn(a,fs))!=null&&r.value)return;const o=zn(a,na),i=zn(a,ms),l=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((u=o==null?void 0:o.value)!=null&&u.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Jt,!0),i&&ke(i,()=>{const p=(i==null?void 0:i.value)??0,d=a.value!=null?p>=a.value:p>l;t.classList.toggle(Li,d),t.classList.toggle(Ci,d)},{immediate:!0})},unmounted(t,a){t==null||t.classList.toggle(Jt,!1);const o=zn(a,na);o!=null&&o.value&&kl(o.value,t)}})}}}function IW(n,t){const a=Ym(n),o=Jm(t,a.currentRoute,a.currentPage);return{nav:{...a,...o},configs:Ee,themeConfigs:N(()=>Ee.themeConfig)}}function SW(){return{install(n){const t=IW(Wn,Nn);n.provide(C,Be(t))}}}const ja=mv(mF);ja.use(wn);ja.use(lk());ja.use(EW());ja.use(SW());CW({app:ja,router:wn});ja.mount("#app");export{HT as $,Kx as A,Z as B,NW as C,mn as D,Ve as E,Ie as F,fy as G,iF as H,Nn as I,Uo as J,nF as K,Fi as L,bt as M,Be as N,PW as O,FW as P,ke as Q,v as R,Cm as S,Se as T,dn as U,My as V,AW as W,OW as X,Ss as Y,Hi as Z,E as _,C as a,Cr as a0,Er as a1,Ue as a2,TT as a3,Lw as a4,HW as a5,qn as a6,ts as a7,ia as a8,tt as a9,Il as aa,ny as ab,ty as ac,ay as ad,oy as ae,td as af,Ad as ag,qW as ah,gn as ai,mo as aj,cx as ak,Bd as al,iy as am,js as an,jd as b,Ee as c,Ae as d,Gh as e,oe as f,e as g,O as h,z as i,Qe as j,JN as k,s as l,S as m,tn as n,b as o,we as p,xr as q,qa as r,Yn as s,bn as t,RW as u,N as v,Ei as w,M as x,ym as y,Zx as z};
