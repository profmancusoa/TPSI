(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=a(i);fetch(i.href,l)}})();function Dt(n,t){const a=Object.create(null),o=n.split(",");for(let i=0;i<o.length;i++)a[o[i]]=!0;return t?i=>!!a[i.toLowerCase()]:i=>!!a[i]}const Fe=Object.freeze({}),Ca=Object.freeze([]),yn=()=>{},gp=()=>!1,Uf=/^on[^a-z]/,Fs=n=>Uf.test(n),zo=n=>n.startsWith("onUpdate:"),We=Object.assign,Yl=(n,t)=>{const a=n.indexOf(t);a>-1&&n.splice(a,1)},Kf=Object.prototype.hasOwnProperty,Me=(n,t)=>Kf.call(n,t),ue=Array.isArray,ra=n=>Ws(n)==="[object Map]",_p=n=>Ws(n)==="[object Set]",Gf=n=>Ws(n)==="[object RegExp]",fe=n=>typeof n=="function",je=n=>typeof n=="string",Xl=n=>typeof n=="symbol",Oe=n=>n!==null&&typeof n=="object",er=n=>Oe(n)&&fe(n.then)&&fe(n.catch),vp=Object.prototype.toString,Ws=n=>vp.call(n),nr=n=>Ws(n).slice(8,-1),kp=n=>Ws(n)==="[object Object]",tr=n=>je(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,go=Dt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qf=Dt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Jo=n=>{const t=Object.create(null);return a=>t[a]||(t[a]=n(a))},Jf=/-(\w)/g,st=Jo(n=>n.replace(Jf,(t,a)=>a?a.toUpperCase():"")),Zf=/\B([A-Z])/g,_t=Jo(n=>n.replace(Zf,"-$1").toLowerCase()),ga=Jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Jt=Jo(n=>n?`on${ga(n)}`:""),Ts=(n,t)=>!Object.is(n,t),Yt=(n,t)=>{for(let a=0;a<n.length;a++)n[a](t)},$o=(n,t,a)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:a})},Yf=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Xf=n=>{const t=je(n)?Number(n):NaN;return isNaN(t)?n:t};let Yr;const Mo=()=>Yr||(Yr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tn(n){if(ue(n)){const t={};for(let a=0;a<n.length;a++){const o=n[a],i=je(o)?ah(o):tn(o);if(i)for(const l in i)t[l]=i[l]}return t}else{if(je(n))return n;if(Oe(n))return n}}const eh=/;(?![^(]*\))/g,nh=/:([^]+)/,th=/\/\*[^]*?\*\//g;function ah(n){const t={};return n.replace(th,"").split(eh).forEach(a=>{if(a){const o=a.split(nh);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ve(n){let t="";if(je(n))t=n;else if(ue(n))for(let a=0;a<n.length;a++){const o=Ve(n[a]);o&&(t+=o+" ")}else if(Oe(n))for(const a in n)n[a]&&(t+=a+" ");return t.trim()}function P(n){if(!n)return null;let{class:t,style:a}=n;return t&&!je(t)&&(n.class=Ve(t)),a&&(n.style=tn(a)),n}const sh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",oh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",bp=Dt(sh),ih=Dt(oh),lh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rh=Dt(lh);function yp(n){return!!n||n===""}const bn=n=>je(n)?n:n==null?"":ue(n)||Oe(n)&&(n.toString===vp||!fe(n.toString))?JSON.stringify(n,wp,2):String(n),wp=(n,t)=>t&&t.__v_isRef?wp(n,t.value):ra(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[o,i])=>(a[`${o} =>`]=i,a),{})}:_p(t)?{[`Set(${t.size})`]:[...t.values()]}:Oe(t)&&!ue(t)&&!kp(t)?String(t):t;function Lo(n,...t){console.warn(`[Vue warn] ${n}`,...t)}let Ln;class Tp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ln,!t&&Ln&&(this.index=(Ln.scopes||(Ln.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const a=Ln;try{return Ln=this,t()}finally{Ln=a}}else Lo("cannot run an inactive effect scope.")}on(){Ln=this}off(){Ln=this.parent}stop(t){if(this._active){let a,o;for(a=0,o=this.effects.length;a<o;a++)this.effects[a].stop();for(a=0,o=this.cleanups.length;a<o;a++)this.cleanups[a]();if(this.scopes)for(a=0,o=this.scopes.length;a<o;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ch(n){return new Tp(n)}function uh(n,t=Ln){t&&t.active&&t.effects.push(n)}function ar(){return Ln}function xp(n){Ln?Ln.cleanups.push(n):Lo("onScopeDispose() is called when there is no active effect scope to be associated with.")}const sr=n=>{const t=new Set(n);return t.w=0,t.n=0,t},zp=n=>(n.w&Nt)>0,$p=n=>(n.n&Nt)>0,ph=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=Nt},dh=n=>{const{deps:t}=n;if(t.length){let a=0;for(let o=0;o<t.length;o++){const i=t[o];zp(i)&&!$p(i)?i.delete(n):t[a++]=i,i.w&=~Nt,i.n&=~Nt}t.length=a}},Eo=new WeakMap;let as=0,Nt=1;const Qi=30;let fn;const ca=Symbol("iterate"),Ji=Symbol("Map key iterate");class or{constructor(t,a=null,o){this.fn=t,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,uh(this,o)}run(){if(!this.active)return this.fn();let t=fn,a=Ct;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=fn,fn=this,Ct=!0,Nt=1<<++as,as<=Qi?ph(this):Xr(this),this.fn()}finally{as<=Qi&&dh(this),Nt=1<<--as,fn=this.parent,Ct=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(Xr(this),this.onStop&&this.onStop(),this.active=!1)}}function Xr(n){const{deps:t}=n;if(t.length){for(let a=0;a<t.length;a++)t[a].delete(n);t.length=0}}let Ct=!0;const Mp=[];function va(){Mp.push(Ct),Ct=!1}function ka(){const n=Mp.pop();Ct=n===void 0?!0:n}function cn(n,t,a){if(Ct&&fn){let o=Eo.get(n);o||Eo.set(n,o=new Map);let i=o.get(a);i||o.set(a,i=sr()),Lp(i,{effect:fn,target:n,type:t,key:a})}}function Lp(n,t){let a=!1;as<=Qi?$p(n)||(n.n|=Nt,a=!zp(n)):a=!n.has(fn),a&&(n.add(fn),fn.deps.push(n),fn.onTrack&&fn.onTrack(We({effect:fn},t)))}function ot(n,t,a,o,i,l){const r=Eo.get(n);if(!r)return;let c=[];if(t==="clear")c=[...r.values()];else if(a==="length"&&ue(n)){const p=Number(o);r.forEach((d,m)=>{(m==="length"||m>=p)&&c.push(d)})}else switch(a!==void 0&&c.push(r.get(a)),t){case"add":ue(n)?tr(a)&&c.push(r.get("length")):(c.push(r.get(ca)),ra(n)&&c.push(r.get(Ji)));break;case"delete":ue(n)||(c.push(r.get(ca)),ra(n)&&c.push(r.get(Ji)));break;case"set":ra(n)&&c.push(r.get(ca));break}const u={target:n,type:t,key:a,newValue:o,oldValue:i,oldTarget:l};if(c.length===1)c[0]&&Zi(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);Zi(sr(p),u)}}function Zi(n,t){const a=ue(n)?n:[...n];for(const o of a)o.computed&&ec(o,t);for(const o of a)o.computed||ec(o,t)}function ec(n,t){(n!==fn||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(We({effect:n},t)),n.scheduler?n.scheduler():n.run())}function mh(n,t){var a;return(a=Eo.get(n))==null?void 0:a.get(t)}const fh=Dt("__proto__,__v_isRef,__isVue"),Ep=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xl)),hh=Zo(),gh=Zo(!1,!0),_h=Zo(!0),vh=Zo(!0,!0),nc=kh();function kh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...a){const o=_e(this);for(let l=0,r=this.length;l<r;l++)cn(o,"get",l+"");const i=o[t](...a);return i===-1||i===!1?o[t](...a.map(_e)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...a){va();const o=_e(this)[t].apply(this,a);return ka(),o}}),n}function bh(n){const t=_e(this);return cn(t,"has",n),t.hasOwnProperty(n)}function Zo(n=!1,t=!1){return function(o,i,l){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&l===(n?t?Rp:Pp:t?Hp:Op).get(o))return o;const r=ue(o);if(!n){if(r&&Me(nc,i))return Reflect.get(nc,i,l);if(i==="hasOwnProperty")return bh}const c=Reflect.get(o,i,l);return(Xl(i)?Ep.has(i):fh(i))||(n||cn(o,"get",i),t)?c:Ie(c)?r&&tr(i)?c:c.value:Oe(c)?n?Kn(c):Be(c):c}}const yh=Cp(),wh=Cp(!0);function Cp(n=!1){return function(a,o,i,l){let r=a[o];if(qt(r)&&Ie(r)&&!Ie(i))return!1;if(!n&&(!Co(i)&&!qt(i)&&(r=_e(r),i=_e(i)),!ue(a)&&Ie(r)&&!Ie(i)))return r.value=i,!0;const c=ue(a)&&tr(o)?Number(o)<a.length:Me(a,o),u=Reflect.set(a,o,i,l);return a===_e(l)&&(c?Ts(i,r)&&ot(a,"set",o,i,r):ot(a,"add",o,i)),u}}function Th(n,t){const a=Me(n,t),o=n[t],i=Reflect.deleteProperty(n,t);return i&&a&&ot(n,"delete",t,void 0,o),i}function xh(n,t){const a=Reflect.has(n,t);return(!Xl(t)||!Ep.has(t))&&cn(n,"has",t),a}function zh(n){return cn(n,"iterate",ue(n)?"length":ca),Reflect.ownKeys(n)}const Ap={get:hh,set:yh,deleteProperty:Th,has:xh,ownKeys:zh},Ip={get:_h,set(n,t){return Lo(`Set operation on key "${String(t)}" failed: target is readonly.`,n),!0},deleteProperty(n,t){return Lo(`Delete operation on key "${String(t)}" failed: target is readonly.`,n),!0}},$h=We({},Ap,{get:gh,set:wh}),Mh=We({},Ip,{get:vh}),ir=n=>n,Yo=n=>Reflect.getPrototypeOf(n);function Zs(n,t,a=!1,o=!1){n=n.__v_raw;const i=_e(n),l=_e(t);a||(t!==l&&cn(i,"get",t),cn(i,"get",l));const{has:r}=Yo(i),c=o?ir:a?lr:xs;if(r.call(i,t))return c(n.get(t));if(r.call(i,l))return c(n.get(l));n!==i&&n.get(t)}function Ys(n,t=!1){const a=this.__v_raw,o=_e(a),i=_e(n);return t||(n!==i&&cn(o,"has",n),cn(o,"has",i)),n===i?a.has(n):a.has(n)||a.has(i)}function Xs(n,t=!1){return n=n.__v_raw,!t&&cn(_e(n),"iterate",ca),Reflect.get(n,"size",n)}function tc(n){n=_e(n);const t=_e(this);return Yo(t).has.call(t,n)||(t.add(n),ot(t,"add",n,n)),this}function ac(n,t){t=_e(t);const a=_e(this),{has:o,get:i}=Yo(a);let l=o.call(a,n);l?Sp(a,o,n):(n=_e(n),l=o.call(a,n));const r=i.call(a,n);return a.set(n,t),l?Ts(t,r)&&ot(a,"set",n,t,r):ot(a,"add",n,t),this}function sc(n){const t=_e(this),{has:a,get:o}=Yo(t);let i=a.call(t,n);i?Sp(t,a,n):(n=_e(n),i=a.call(t,n));const l=o?o.call(t,n):void 0,r=t.delete(n);return i&&ot(t,"delete",n,void 0,l),r}function oc(){const n=_e(this),t=n.size!==0,a=ra(n)?new Map(n):new Set(n),o=n.clear();return t&&ot(n,"clear",void 0,void 0,a),o}function eo(n,t){return function(o,i){const l=this,r=l.__v_raw,c=_e(r),u=t?ir:n?lr:xs;return!n&&cn(c,"iterate",ca),r.forEach((p,d)=>o.call(i,u(p),u(d),l))}}function no(n,t,a){return function(...o){const i=this.__v_raw,l=_e(i),r=ra(l),c=n==="entries"||n===Symbol.iterator&&r,u=n==="keys"&&r,p=i[n](...o),d=a?ir:t?lr:xs;return!t&&cn(l,"iterate",u?Ji:ca),{next(){const{value:m,done:f}=p.next();return f?{value:m,done:f}:{value:c?[d(m[0]),d(m[1])]:d(m),done:f}},[Symbol.iterator](){return this}}}}function yt(n){return function(...t){{const a=t[0]?`on key "${t[0]}" `:"";console.warn(`${ga(n)} operation ${a}failed: target is readonly.`,_e(this))}return n==="delete"?!1:this}}function Lh(){const n={get(l){return Zs(this,l)},get size(){return Xs(this)},has:Ys,add:tc,set:ac,delete:sc,clear:oc,forEach:eo(!1,!1)},t={get(l){return Zs(this,l,!1,!0)},get size(){return Xs(this)},has:Ys,add:tc,set:ac,delete:sc,clear:oc,forEach:eo(!1,!0)},a={get(l){return Zs(this,l,!0)},get size(){return Xs(this,!0)},has(l){return Ys.call(this,l,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:eo(!0,!1)},o={get(l){return Zs(this,l,!0,!0)},get size(){return Xs(this,!0)},has(l){return Ys.call(this,l,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=no(l,!1,!1),a[l]=no(l,!0,!1),t[l]=no(l,!1,!0),o[l]=no(l,!0,!0)}),[n,a,t,o]}const[Eh,Ch,Ah,Ih]=Lh();function Xo(n,t){const a=t?n?Ih:Ah:n?Ch:Eh;return(o,i,l)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?o:Reflect.get(Me(a,i)&&i in o?a:o,i,l)}const Sh={get:Xo(!1,!1)},Oh={get:Xo(!1,!0)},Hh={get:Xo(!0,!1)},Ph={get:Xo(!0,!0)};function Sp(n,t,a){const o=_e(a);if(o!==a&&t.call(n,o)){const i=nr(n);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Op=new WeakMap,Hp=new WeakMap,Pp=new WeakMap,Rp=new WeakMap;function Rh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nh(n){return n.__v_skip||!Object.isExtensible(n)?0:Rh(nr(n))}function Be(n){return qt(n)?n:ei(n,!1,Ap,Sh,Op)}function qh(n){return ei(n,!1,$h,Oh,Hp)}function Kn(n){return ei(n,!0,Ip,Hh,Pp)}function ss(n){return ei(n,!0,Mh,Ph,Rp)}function ei(n,t,a,o,i){if(!Oe(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(t&&n.__v_isReactive))return n;const l=i.get(n);if(l)return l;const r=Nh(n);if(r===0)return n;const c=new Proxy(n,r===2?o:a);return i.set(n,c),c}function ua(n){return qt(n)?ua(n.__v_raw):!!(n&&n.__v_isReactive)}function qt(n){return!!(n&&n.__v_isReadonly)}function Co(n){return!!(n&&n.__v_isShallow)}function Ao(n){return ua(n)||qt(n)}function _e(n){const t=n&&n.__v_raw;return t?_e(t):n}function ni(n){return $o(n,"__v_skip",!0),n}const xs=n=>Oe(n)?Be(n):n,lr=n=>Oe(n)?Kn(n):n;function rr(n){Ct&&fn&&(n=_e(n),Lp(n.dep||(n.dep=sr()),{target:n,type:"get",key:"value"}))}function cr(n,t){n=_e(n);const a=n.dep;a&&Zi(a,{target:n,type:"set",key:"value",newValue:t})}function Ie(n){return!!(n&&n.__v_isRef===!0)}function Y(n){return Np(n,!1)}function it(n){return Np(n,!0)}function Np(n,t){return Ie(n)?n:new Fh(n,t)}class Fh{constructor(t,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?t:_e(t),this._value=a?t:xs(t)}get value(){return rr(this),this._value}set value(t){const a=this.__v_isShallow||Co(t)||qt(t);t=a?t:_e(t),Ts(t,this._rawValue)&&(this._rawValue=t,this._value=a?t:xs(t),cr(this,t))}}function O(n){return Ie(n)?n.value:n}const Wh={get:(n,t,a)=>O(Reflect.get(n,t,a)),set:(n,t,a,o)=>{const i=n[t];return Ie(i)&&!Ie(a)?(i.value=a,!0):Reflect.set(n,t,a,o)}};function qp(n){return ua(n)?n:new Proxy(n,Wh)}class Dh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:o}=t(()=>rr(this),()=>cr(this));this._get=a,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function ur(n){return new Dh(n)}function jh(n){Ao(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ue(n)?new Array(n.length):{};for(const a in n)t[a]=Fp(n,a);return t}class Bh{constructor(t,a,o){this._object=t,this._key=a,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return mh(_e(this._object),this._key)}}class Vh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Uh(n,t,a){return Ie(n)?n:fe(n)?new Vh(n):Oe(n)&&arguments.length>1?Fp(n,t,a):Y(n)}function Fp(n,t,a){const o=n[t];return Ie(o)?o:new Bh(n,t,a)}class Kh{constructor(t,a,o,i){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new or(t,()=>{this._dirty||(this._dirty=!0,cr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=o}get value(){const t=_e(this);return rr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Gh(n,t,a=!1){let o,i;const l=fe(n);l?(o=n,i=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=n.get,i=n.set);const r=new Kh(o,i,l||!i,a);return t&&!a&&(r.effect.onTrack=t.onTrack,r.effect.onTrigger=t.onTrigger),r}const pa=[];function _o(n){pa.push(n)}function vo(){pa.pop()}function V(n,...t){va();const a=pa.length?pa[pa.length-1].component:null,o=a&&a.appContext.config.warnHandler,i=Qh();if(o)gt(o,a,11,[n+t.join(""),a&&a.proxy,i.map(({vnode:l})=>`at <${pi(a,l.type)}>`).join(`
`),i]);else{const l=[`[Vue warn]: ${n}`,...t];i.length&&l.push(`
`,...Jh(i)),console.warn(...l)}ka()}function Qh(){let n=pa[pa.length-1];if(!n)return[];const t=[];for(;n;){const a=t[0];a&&a.vnode===n?a.recurseCount++:t.push({vnode:n,recurseCount:0});const o=n.component&&n.component.parent;n=o&&o.vnode}return t}function Jh(n){const t=[];return n.forEach((a,o)=>{t.push(...o===0?[]:[`
`],...Zh(a))}),t}function Zh({vnode:n,recurseCount:t}){const a=t>0?`... (${t} recursive calls)`:"",o=n.component?n.component.parent==null:!1,i=` at <${pi(n.component,n.type,o)}`,l=">"+a;return n.props?[i,...Yh(n.props),l]:[i+l]}function Yh(n){const t=[],a=Object.keys(n);return a.slice(0,3).forEach(o=>{t.push(...Wp(o,n[o]))}),a.length>3&&t.push(" ..."),t}function Wp(n,t,a){return je(t)?(t=JSON.stringify(t),a?t:[`${n}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?a?t:[`${n}=${t}`]:Ie(t)?(t=Wp(n,_e(t.value),!0),a?t:[`${n}=Ref<`,t,">"]):fe(t)?[`${n}=fn${t.name?`<${t.name}>`:""}`]:(t=_e(t),a?t:[`${n}=`,t])}function Xh(n,t){n!==void 0&&(typeof n!="number"?V(`${t} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&V(`${t} is NaN - the duration expression might be incorrect.`))}const pr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function gt(n,t,a,o){let i;try{i=o?n(...o):n()}catch(l){ti(l,t,a)}return i}function qn(n,t,a,o){if(fe(n)){const l=gt(n,t,a,o);return l&&er(l)&&l.catch(r=>{ti(r,t,a)}),l}const i=[];for(let l=0;l<n.length;l++)i.push(qn(n[l],t,a,o));return i}function ti(n,t,a,o=!0){const i=t?t.vnode:null;if(t){let l=t.parent;const r=t.proxy,c=pr[a];for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](n,r,c)===!1)return}l=l.parent}const u=t.appContext.config.errorHandler;if(u){gt(u,null,10,[n,r,c]);return}}eg(n,a,i,o)}function eg(n,t,a,o=!0){{const i=pr[t];if(a&&_o(a),V(`Unhandled error${i?` during execution of ${i}`:""}`),a&&vo(),o)throw n;console.error(n)}}let zs=!1,Yi=!1;const sn=[];let et=0;const Aa=[];let Xn=null,zt=0;const Dp=Promise.resolve();let dr=null;const ng=100;function on(n){const t=dr||Dp;return n?t.then(this?n.bind(this):n):t}function tg(n){let t=et+1,a=sn.length;for(;t<a;){const o=t+a>>>1;$s(sn[o])<n?t=o+1:a=o}return t}function ai(n){(!sn.length||!sn.includes(n,zs&&n.allowRecurse?et+1:et))&&(n.id==null?sn.push(n):sn.splice(tg(n.id),0,n),jp())}function jp(){!zs&&!Yi&&(Yi=!0,dr=Dp.then(Up))}function ag(n){const t=sn.indexOf(n);t>et&&sn.splice(t,1)}function Bp(n){ue(n)?Aa.push(...n):(!Xn||!Xn.includes(n,n.allowRecurse?zt+1:zt))&&Aa.push(n),jp()}function ic(n,t=zs?et+1:0){for(n=n||new Map;t<sn.length;t++){const a=sn[t];if(a&&a.pre){if(mr(n,a))continue;sn.splice(t,1),t--,a()}}}function Vp(n){if(Aa.length){const t=[...new Set(Aa)];if(Aa.length=0,Xn){Xn.push(...t);return}for(Xn=t,n=n||new Map,Xn.sort((a,o)=>$s(a)-$s(o)),zt=0;zt<Xn.length;zt++)mr(n,Xn[zt])||Xn[zt]();Xn=null,zt=0}}const $s=n=>n.id==null?1/0:n.id,sg=(n,t)=>{const a=$s(n)-$s(t);if(a===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return a};function Up(n){Yi=!1,zs=!0,n=n||new Map,sn.sort(sg);const t=a=>mr(n,a);try{for(et=0;et<sn.length;et++){const a=sn[et];if(a&&a.active!==!1){if(t(a))continue;gt(a,null,14)}}}finally{et=0,sn.length=0,Vp(n),zs=!1,dr=null,(sn.length||Aa.length)&&Up(n)}}function mr(n,t){if(!n.has(t))n.set(t,1);else{const a=n.get(t);if(a>ng){const o=t.ownerInstance,i=o&&Es(o.type);return V(`Maximum recursive updates exceeded${i?` in component <${i}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(t,a+1)}}let At=!1;const La=new Set;Mo().__VUE_HMR_RUNTIME__={createRecord:_i(Kp),rerender:_i(lg),reload:_i(rg)};const _a=new Map;function og(n){const t=n.type.__hmrId;let a=_a.get(t);a||(Kp(t,n.type),a=_a.get(t)),a.instances.add(n)}function ig(n){_a.get(n.type.__hmrId).instances.delete(n)}function Kp(n,t){return _a.has(n)?!1:(_a.set(n,{initialDef:us(t),instances:new Set}),!0)}function us(n){return zd(n)?n.__vccOpts:n}function lg(n,t){const a=_a.get(n);a&&(a.initialDef.render=t,[...a.instances].forEach(o=>{t&&(o.render=t,us(o.type).render=t),o.renderCache=[],At=!0,o.update(),At=!1}))}function rg(n,t){const a=_a.get(n);if(!a)return;t=us(t),lc(a.initialDef,t);const o=[...a.instances];for(const i of o){const l=us(i.type);La.has(l)||(l!==a.initialDef&&lc(l,t),La.add(l)),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(La.add(l),i.ceReload(t.styles),La.delete(l)):i.parent?ai(i.parent.update):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Bp(()=>{for(const i of o)La.delete(us(i.type))})}function lc(n,t){We(n,t);for(const a in n)a!=="__file"&&!(a in t)&&delete n[a]}function _i(n){return(t,a)=>{try{return n(t,a)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let nt,os=[],Xi=!1;function Ds(n,...t){nt?nt.emit(n,...t):Xi||os.push({event:n,args:t})}function Gp(n,t){var a,o;nt=n,nt?(nt.enabled=!0,os.forEach(({event:i,args:l})=>nt.emit(i,...l)),os=[]):typeof window<"u"&&window.HTMLElement&&!((o=(a=window.navigator)==null?void 0:a.userAgent)!=null&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Gp(l,t)}),setTimeout(()=>{nt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Xi=!0,os=[])},3e3)):(Xi=!0,os=[])}function cg(n,t){Ds("app:init",n,t,{Fragment:Ae,Text:Vs,Comment:hn,Static:ps})}function ug(n){Ds("app:unmount",n)}const el=fr("component:added"),Qp=fr("component:updated"),pg=fr("component:removed"),dg=n=>{nt&&typeof nt.cleanupBuffer=="function"&&!nt.cleanupBuffer(n)&&pg(n)};function fr(n){return t=>{Ds(n,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const mg=Jp("perf:start"),fg=Jp("perf:end");function Jp(n){return(t,a,o)=>{Ds(n,t.appContext.app,t.uid,t,a,o)}}function hg(n,t,a){Ds("component:emit",n.appContext.app,n,t,a)}function gg(n,t,...a){if(n.isUnmounted)return;const o=n.vnode.props||Fe;{const{emitsOptions:d,propsOptions:[m]}=n;if(d)if(!(t in d))(!m||!(Jt(t)in m))&&V(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Jt(t)}" prop.`);else{const f=d[t];fe(f)&&(f(...a)||V(`Invalid event arguments: event validation failed for event "${t}".`))}}let i=a;const l=t.startsWith("update:"),r=l&&t.slice(7);if(r&&r in o){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:m,trim:f}=o[d]||Fe;f&&(i=a.map(h=>je(h)?h.trim():h)),m&&(i=a.map(Yf))}hg(n,t,i);{const d=t.toLowerCase();d!==t&&o[Jt(d)]&&V(`Event "${d}" is emitted in component ${pi(n,n.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_t(t)}" instead of "${t}".`)}let c,u=o[c=Jt(t)]||o[c=Jt(st(t))];!u&&l&&(u=o[c=Jt(_t(t))]),u&&qn(u,n,6,i);const p=o[c+"Once"];if(p){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,qn(p,n,6,i)}}function Zp(n,t,a=!1){const o=t.emitsCache,i=o.get(n);if(i!==void 0)return i;const l=n.emits;let r={},c=!1;if(!fe(n)){const u=p=>{const d=Zp(p,t,!0);d&&(c=!0,We(r,d))};!a&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!l&&!c?(Oe(n)&&o.set(n,null),null):(ue(l)?l.forEach(u=>r[u]=null):We(r,l),Oe(n)&&o.set(n,r),r)}function si(n,t){return!n||!Fs(t)?!1:(t=t.slice(2).replace(/Once$/,""),Me(n,t[0].toLowerCase()+t.slice(1))||Me(n,_t(t))||Me(n,t))}let Xe=null,oi=null;function Io(n){const t=Xe;return Xe=n,oi=n&&n.type.__scopeId||null,t}function nj(n){oi=n}function tj(){oi=null}function v(n,t=Xe,a){if(!t||n._n)return n;const o=(...i)=>{o._d&&yc(-1);const l=Io(t);let r;try{r=n(...i)}finally{Io(l),o._d&&yc(1)}return Qp(t),r};return o._n=!0,o._c=!0,o._d=!0,o}let nl=!1;function So(){nl=!0}function vi(n){const{type:t,vnode:a,proxy:o,withProxy:i,props:l,propsOptions:[r],slots:c,attrs:u,emit:p,render:d,renderCache:m,data:f,setupState:h,ctx:g,inheritAttrs:w}=n;let T,x;const z=Io(n);nl=!1;try{if(a.shapeFlag&4){const A=i||o;T=Un(d.call(A,A,m,l,h,f,g)),x=u}else{const A=t;u===l&&So(),T=Un(A.length>1?A(l,{get attrs(){return So(),u},slots:c,emit:p}):A(l,null)),x=t.props?u:vg(u)}}catch(A){ds.length=0,ti(A,n,1),T=C(hn)}let b=T,S;if(T.patchFlag>0&&T.patchFlag&2048&&([b,S]=_g(T)),x&&w!==!1){const A=Object.keys(x),{shapeFlag:N}=b;if(A.length){if(N&7)r&&A.some(zo)&&(x=kg(x,r)),b=lt(b,x);else if(!nl&&b.type!==hn){const B=Object.keys(u),F=[],K=[];for(let ie=0,me=B.length;ie<me;ie++){const X=B[ie];Fs(X)?zo(X)||F.push(X[2].toLowerCase()+X.slice(3)):K.push(X)}K.length&&V(`Extraneous non-props attributes (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),F.length&&V(`Extraneous non-emits event listeners (${F.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return a.dirs&&(rc(b)||V("Runtime directive used on component with non-element root node. The directives will not function as intended."),b=lt(b),b.dirs=b.dirs?b.dirs.concat(a.dirs):a.dirs),a.transition&&(rc(b)||V("Component inside <Transition> renders non-element root node that cannot be animated."),b.transition=a.transition),S?S(b):T=b,Io(z),T}const _g=n=>{const t=n.children,a=n.dynamicChildren,o=Yp(t);if(!o)return[n,void 0];const i=t.indexOf(o),l=a?a.indexOf(o):-1,r=c=>{t[i]=c,a&&(l>-1?a[l]=c:c.patchFlag>0&&(n.dynamicChildren=[...a,c]))};return[Un(o),r]};function Yp(n){let t;for(let a=0;a<n.length;a++){const o=n[a];if(Ft(o)){if(o.type!==hn||o.children==="v-if"){if(t)return;t=o}}else return}return t}const vg=n=>{let t;for(const a in n)(a==="class"||a==="style"||Fs(a))&&((t||(t={}))[a]=n[a]);return t},kg=(n,t)=>{const a={};for(const o in n)(!zo(o)||!(o.slice(9)in t))&&(a[o]=n[o]);return a},rc=n=>n.shapeFlag&7||n.type===hn;function bg(n,t,a){const{props:o,children:i,component:l}=n,{props:r,children:c,patchFlag:u}=t,p=l.emitsOptions;if((i||c)&&At||t.dirs||t.transition)return!0;if(a&&u>=0){if(u&1024)return!0;if(u&16)return o?cc(o,r,p):!!r;if(u&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(r[f]!==o[f]&&!si(p,f))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:o===r?!1:o?r?cc(o,r,p):!0:!!r;return!1}function cc(n,t,a){const o=Object.keys(t);if(o.length!==Object.keys(n).length)return!0;for(let i=0;i<o.length;i++){const l=o[i];if(t[l]!==n[l]&&!si(a,l))return!0}return!1}function yg({vnode:n,parent:t},a){for(;t&&t.subTree===n;)(n=t.vnode).el=a,t=t.parent}const Xp=n=>n.__isSuspense;function wg(n,t){t&&t.pendingBranch?ue(n)?t.effects.push(...n):t.effects.push(n):Bp(n)}function ba(n,t){return ii(n,null,t)}function Tg(n,t){return ii(n,null,We({},t,{flush:"post"}))}const to={};function be(n,t,a){return fe(t)||V("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ii(n,t,a)}function ii(n,t,{immediate:a,deep:o,flush:i,onTrack:l,onTrigger:r}=Fe){var c;t||(a!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const u=A=>{V("Invalid watch source: ",A,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=ar()===((c=Ye)==null?void 0:c.scope)?Ye:null;let d,m=!1,f=!1;if(Ie(n)?(d=()=>n.value,m=Co(n)):ua(n)?(d=()=>n,o=!0):ue(n)?(f=!0,m=n.some(A=>ua(A)||Co(A)),d=()=>n.map(A=>{if(Ie(A))return A.value;if(ua(A))return oa(A);if(fe(A))return gt(A,p,2);u(A)})):fe(n)?t?d=()=>gt(n,p,2):d=()=>{if(!(p&&p.isUnmounted))return h&&h(),qn(n,p,3,[g])}:(d=yn,u(n)),t&&o){const A=d;d=()=>oa(A())}let h,g=A=>{h=b.onStop=()=>{gt(A,p,4)}},w;if(Ls)if(g=yn,t?a&&qn(t,p,3,[d(),f?[]:void 0,g]):d(),i==="sync"){const A=A_();w=A.__watcherHandles||(A.__watcherHandles=[])}else return yn;let T=f?new Array(n.length).fill(to):to;const x=()=>{if(b.active)if(t){const A=b.run();(o||m||(f?A.some((N,B)=>Ts(N,T[B])):Ts(A,T)))&&(h&&h(),qn(t,p,3,[A,T===to?void 0:f&&T[0]===to?[]:T,g]),T=A)}else b.run()};x.allowRecurse=!!t;let z;i==="sync"?z=x:i==="post"?z=()=>nn(x,p&&p.suspense):(x.pre=!0,p&&(x.id=p.uid),z=()=>ai(x));const b=new or(d,z);b.onTrack=l,b.onTrigger=r,t?a?x():T=b.run():i==="post"?nn(b.run.bind(b),p&&p.suspense):b.run();const S=()=>{b.stop(),p&&p.scope&&Yl(p.scope.effects,b)};return w&&w.push(S),S}function xg(n,t,a){const o=this.proxy,i=je(n)?n.includes(".")?ed(o,n):()=>o[n]:n.bind(o,o);let l;fe(t)?l=t:(l=t.handler,a=t);const r=Ye;Pa(this);const c=ii(i,l.bind(o),a);return r?Pa(r):ma(),c}function ed(n,t){const a=t.split(".");return()=>{let o=n;for(let i=0;i<a.length&&o;i++)o=o[a[i]];return o}}function oa(n,t){if(!Oe(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),Ie(n))oa(n.value,t);else if(ue(n))for(let a=0;a<n.length;a++)oa(n[a],t);else if(_p(n)||ra(n))n.forEach(a=>{oa(a,t)});else if(kp(n))for(const a in n)oa(n[a],t);return n}function nd(n){Qf(n)&&V("Do not use built-in directive ids as custom directive id: "+n)}function td(n,t){const a=Xe;if(a===null)return V("withDirectives can only be used inside render functions."),n;const o=ui(a)||a.proxy,i=n.dirs||(n.dirs=[]);for(let l=0;l<t.length;l++){let[r,c,u,p=Fe]=t[l];r&&(fe(r)&&(r={mounted:r,updated:r}),r.deep&&oa(c),i.push({dir:r,instance:o,value:c,oldValue:void 0,arg:u,modifiers:p}))}return n}function Vt(n,t,a,o){const i=n.dirs,l=t&&t.dirs;for(let r=0;r<i.length;r++){const c=i[r];l&&(c.oldValue=l[r].value);let u=c.dir[o];u&&(va(),qn(u,a,8,[n.el,c,n,t]),ka())}}function zg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bt(()=>{n.isMounted=!0}),js(()=>{n.isUnmounting=!0}),n}const Hn=[Function,Array],$g={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Hn,onEnter:Hn,onAfterEnter:Hn,onEnterCancelled:Hn,onBeforeLeave:Hn,onLeave:Hn,onAfterLeave:Hn,onLeaveCancelled:Hn,onBeforeAppear:Hn,onAppear:Hn,onAfterAppear:Hn,onAppearCancelled:Hn};function Mg(n,t){const{leavingVNodes:a}=n;let o=a.get(t.type);return o||(o=Object.create(null),a.set(t.type,o)),o}function tl(n,t,a,o){const{appear:i,mode:l,persisted:r=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:m,onLeave:f,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:w,onAppear:T,onAfterAppear:x,onAppearCancelled:z}=t,b=String(n.key),S=Mg(a,n),A=(F,K)=>{F&&qn(F,o,9,K)},N=(F,K)=>{const ie=K[1];A(F,K),ue(F)?F.every(me=>me.length<=1)&&ie():F.length<=1&&ie()},B={mode:l,persisted:r,beforeEnter(F){let K=c;if(!a.isMounted)if(i)K=w||c;else return;F._leaveCb&&F._leaveCb(!0);const ie=S[b];ie&&Xt(n,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),A(K,[F])},enter(F){let K=u,ie=p,me=d;if(!a.isMounted)if(i)K=T||u,ie=x||p,me=z||d;else return;let X=!1;const ve=F._enterCb=ye=>{X||(X=!0,ye?A(me,[F]):A(ie,[F]),B.delayedLeave&&B.delayedLeave(),F._enterCb=void 0)};K?N(K,[F,ve]):ve()},leave(F,K){const ie=String(n.key);if(F._enterCb&&F._enterCb(!0),a.isUnmounting)return K();A(m,[F]);let me=!1;const X=F._leaveCb=ve=>{me||(me=!0,K(),ve?A(g,[F]):A(h,[F]),F._leaveCb=void 0,S[ie]===n&&delete S[ie])};S[ie]=n,f?N(f,[F,X]):X()},clone(F){return tl(F,t,a,o)}};return B}function Oo(n,t){n.shapeFlag&6&&n.component?Oo(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function ad(n,t=!1,a){let o=[],i=0;for(let l=0;l<n.length;l++){let r=n[l];const c=a==null?r.key:String(a)+String(r.key!=null?r.key:l);r.type===Ae?(r.patchFlag&128&&i++,o=o.concat(ad(r.children,t,c))):(t||r.type!==hn)&&o.push(c!=null?lt(r,{key:c}):r)}if(i>1)for(let l=0;l<o.length;l++)o[l].patchFlag=-2;return o}function Se(n,t){return fe(n)?(()=>We({name:n.name},t,{setup:n}))():n}const Ia=n=>!!n.type.__asyncLoader,hr=n=>n.type.__isKeepAlive,Lg={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:t}){const a=xn(),o=a.ctx;if(!o.renderer)return()=>{const z=t.default&&t.default();return z&&z.length===1?z[0]:z};const i=new Map,l=new Set;let r=null;a.__v_cache=i;const c=a.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:m}}}=o,f=m("div");o.activate=(z,b,S,A,N)=>{const B=z.component;p(z,b,S,0,c),u(B.vnode,z,b,S,B,c,A,z.slotScopeIds,N),nn(()=>{B.isDeactivated=!1,B.a&&Yt(B.a);const F=z.props&&z.props.onVnodeMounted;F&&Pn(F,B.parent,z)},c),el(B)},o.deactivate=z=>{const b=z.component;p(z,f,null,1,c),nn(()=>{b.da&&Yt(b.da);const S=z.props&&z.props.onVnodeUnmounted;S&&Pn(S,b.parent,z),b.isDeactivated=!0},c),el(b)};function h(z){ki(z),d(z,a,c,!0)}function g(z){i.forEach((b,S)=>{const A=Es(b.type);A&&(!z||!z(A))&&w(S)})}function w(z){const b=i.get(z);!r||!Xt(b,r)?h(b):r&&ki(r),i.delete(z),l.delete(z)}be(()=>[n.include,n.exclude],([z,b])=>{z&&g(S=>is(z,S)),b&&g(S=>!is(b,S))},{flush:"post",deep:!0});let T=null;const x=()=>{T!=null&&i.set(T,bi(a.subTree))};return bt(x),ri(x),js(()=>{i.forEach(z=>{const{subTree:b,suspense:S}=a,A=bi(b);if(z.type===A.type&&z.key===A.key){ki(A);const N=A.component.da;N&&nn(N,S);return}h(z)})}),()=>{if(T=null,!t.default)return null;const z=t.default(),b=z[0];if(z.length>1)return V("KeepAlive should contain exactly one component child."),r=null,z;if(!Ft(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return r=null,b;let S=bi(b);const A=S.type,N=Es(Ia(S)?S.type.__asyncResolved||{}:A),{include:B,exclude:F,max:K}=n;if(B&&(!N||!is(B,N))||F&&N&&is(F,N))return r=S,b;const ie=S.key==null?A:S.key,me=i.get(ie);return S.el&&(S=lt(S),b.shapeFlag&128&&(b.ssContent=S)),T=ie,me?(S.el=me.el,S.component=me.component,S.transition&&Oo(S,S.transition),S.shapeFlag|=512,l.delete(ie),l.add(ie)):(l.add(ie),K&&l.size>parseInt(K,10)&&w(l.values().next().value)),S.shapeFlag|=256,r=S,Xp(b.type)?b:S}}},sd=Lg;function is(n,t){return ue(n)?n.some(a=>is(a,t)):je(n)?n.split(",").includes(t):Gf(n)?n.test(t):!1}function od(n,t){ld(n,"a",t)}function id(n,t){ld(n,"da",t)}function ld(n,t,a=Ye){const o=n.__wdc||(n.__wdc=()=>{let i=a;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(li(t,o,a),a){let i=a.parent;for(;i&&i.parent;)hr(i.parent.vnode)&&Eg(o,t,a,i),i=i.parent}}function Eg(n,t,a,o){const i=li(t,n,o,!0);Bs(()=>{Yl(o[t],i)},a)}function ki(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function bi(n){return n.shapeFlag&128?n.ssContent:n}function li(n,t,a=Ye,o=!1){if(a){const i=a[n]||(a[n]=[]),l=t.__weh||(t.__weh=(...r)=>{if(a.isUnmounted)return;va(),Pa(a);const c=qn(t,a,n,r);return ma(),ka(),c});return o?i.unshift(l):i.push(l),l}else{const i=Jt(pr[n].replace(/ hook$/,""));V(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const kt=n=>(t,a=Ye)=>(!Ls||n==="sp")&&li(n,(...o)=>t(...o),a),Cg=kt("bm"),bt=kt("m"),Ag=kt("bu"),ri=kt("u"),js=kt("bum"),Bs=kt("um"),Ig=kt("sp"),Sg=kt("rtg"),Og=kt("rtc");function Hg(n,t=Ye){li("ec",n,t)}const al="components";function Ha(n,t){return Rg(al,n,!0,t)||n}const Pg=Symbol.for("v-ndc");function Rg(n,t,a=!0,o=!1){const i=Xe||Ye;if(i){const l=i.type;if(n===al){const c=Es(l,!1);if(c&&(c===t||c===st(t)||c===ga(st(t))))return l}const r=uc(i[n]||l[n],t)||uc(i.appContext[n],t);if(!r&&o)return l;if(a&&!r){const c=n===al?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";V(`Failed to resolve ${n.slice(0,-1)}: ${t}${c}`)}return r}else V(`resolve${ga(n.slice(0,-1))} can only be used in render() or setup().`)}function uc(n,t){return n&&(n[t]||n[st(t)]||n[ga(st(t))])}function Fa(n,t,a,o){let i;const l=a&&a[o];if(ue(n)||je(n)){i=new Array(n.length);for(let r=0,c=n.length;r<c;r++)i[r]=t(n[r],r,void 0,l&&l[r])}else if(typeof n=="number"){Number.isInteger(n)||V(`The v-for range expect an integer value but got ${n}.`),i=new Array(n);for(let r=0;r<n;r++)i[r]=t(r+1,r,void 0,l&&l[r])}else if(Oe(n))if(n[Symbol.iterator])i=Array.from(n,(r,c)=>t(r,c,void 0,l&&l[c]));else{const r=Object.keys(n);i=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const p=r[c];i[c]=t(n[p],p,c,l&&l[c])}}else i=[];return a&&(a[o]=i),i}function Fn(n,t,a={},o,i){if(Xe.isCE||Xe.parent&&Ia(Xe.parent)&&Xe.parent.isCE)return t!=="default"&&(a.name=t),C("slot",a,o&&o());let l=n[t];l&&l.length>1&&(V("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),k();const r=l&&rd(l(a)),c=M(Ae,{key:a.key||r&&r.key||`_${t}`},r||(o?o():[]),r&&n._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function rd(n){return n.some(t=>Ft(t)?!(t.type===hn||t.type===Ae&&!rd(t.children)):!0)?n:null}const sl=n=>n?wd(n)?ui(n)||n.proxy:sl(n.parent):null,da=We(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>ss(n.props),$attrs:n=>ss(n.attrs),$slots:n=>ss(n.slots),$refs:n=>ss(n.refs),$parent:n=>sl(n.parent),$root:n=>sl(n.root),$emit:n=>n.emit,$options:n=>_r(n),$forceUpdate:n=>n.f||(n.f=()=>ai(n.update)),$nextTick:n=>n.n||(n.n=on.bind(n.proxy)),$watch:n=>xg.bind(n)}),gr=n=>n==="_"||n==="$",yi=(n,t)=>n!==Fe&&!n.__isScriptSetup&&Me(n,t),cd={get({_:n},t){const{ctx:a,setupState:o,data:i,props:l,accessCache:r,type:c,appContext:u}=n;if(t==="__isVue")return!0;let p;if(t[0]!=="$"){const h=r[t];if(h!==void 0)switch(h){case 1:return o[t];case 2:return i[t];case 4:return a[t];case 3:return l[t]}else{if(yi(o,t))return r[t]=1,o[t];if(i!==Fe&&Me(i,t))return r[t]=2,i[t];if((p=n.propsOptions[0])&&Me(p,t))return r[t]=3,l[t];if(a!==Fe&&Me(a,t))return r[t]=4,a[t];ol&&(r[t]=0)}}const d=da[t];let m,f;if(d)return t==="$attrs"?(cn(n,"get",t),So()):t==="$slots"&&cn(n,"get",t),d(n);if((m=c.__cssModules)&&(m=m[t]))return m;if(a!==Fe&&Me(a,t))return r[t]=4,a[t];if(f=u.config.globalProperties,Me(f,t))return f[t];Xe&&(!je(t)||t.indexOf("__v")!==0)&&(i!==Fe&&gr(t[0])&&Me(i,t)?V(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===Xe&&V(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:n},t,a){const{data:o,setupState:i,ctx:l}=n;return yi(i,t)?(i[t]=a,!0):i.__isScriptSetup&&Me(i,t)?(V(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Fe&&Me(o,t)?(o[t]=a,!0):Me(n.props,t)?(V(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in n?(V(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in n.appContext.config.globalProperties?Object.defineProperty(l,t,{enumerable:!0,configurable:!0,value:a}):l[t]=a,!0)},has({_:{data:n,setupState:t,accessCache:a,ctx:o,appContext:i,propsOptions:l}},r){let c;return!!a[r]||n!==Fe&&Me(n,r)||yi(t,r)||(c=l[0])&&Me(c,r)||Me(o,r)||Me(da,r)||Me(i.config.globalProperties,r)},defineProperty(n,t,a){return a.get!=null?n._.accessCache[t]=0:Me(a,"value")&&this.set(n,t,a.value,null),Reflect.defineProperty(n,t,a)}};cd.ownKeys=n=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function Ng(n){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(da).forEach(a=>{Object.defineProperty(t,a,{configurable:!0,enumerable:!1,get:()=>da[a](n),set:yn})}),t}function qg(n){const{ctx:t,propsOptions:[a]}=n;a&&Object.keys(a).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n.props[o],set:yn})})}function Fg(n){const{ctx:t,setupState:a}=n;Object.keys(_e(a)).forEach(o=>{if(!a.__isScriptSetup){if(gr(o[0])){V(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a[o],set:yn})}})}function Wg(){return Dg().slots}function Dg(){const n=xn();return n||V("useContext() called without active instance."),n.setupContext||(n.setupContext=xd(n))}function pc(n){return ue(n)?n.reduce((t,a)=>(t[a]=null,t),{}):n}function jg(){const n=Object.create(null);return(t,a)=>{n[a]?V(`${t} property "${a}" is already defined in ${n[a]}.`):n[a]=t}}let ol=!0;function Bg(n){const t=_r(n),a=n.proxy,o=n.ctx;ol=!1,t.beforeCreate&&dc(t.beforeCreate,n,"bc");const{data:i,computed:l,methods:r,watch:c,provide:u,inject:p,created:d,beforeMount:m,mounted:f,beforeUpdate:h,updated:g,activated:w,deactivated:T,beforeDestroy:x,beforeUnmount:z,destroyed:b,unmounted:S,render:A,renderTracked:N,renderTriggered:B,errorCaptured:F,serverPrefetch:K,expose:ie,inheritAttrs:me,components:X,directives:ve,filters:ye}=t,Te=jg();{const[ae]=n.propsOptions;if(ae)for(const pe in ae)Te("Props",pe)}if(p&&Vg(p,o,Te),r)for(const ae in r){const pe=r[ae];fe(pe)?(Object.defineProperty(o,ae,{value:pe.bind(a),configurable:!0,enumerable:!0,writable:!0}),Te("Methods",ae)):V(`Method "${ae}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(i){fe(i)||V("The data option must be a function. Plain object usage is no longer supported.");const ae=i.call(a,a);if(er(ae)&&V("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Oe(ae))V("data() should return an object.");else{n.data=Be(ae);for(const pe in ae)Te("Data",pe),gr(pe[0])||Object.defineProperty(o,pe,{configurable:!0,enumerable:!0,get:()=>ae[pe],set:yn})}}if(ol=!0,l)for(const ae in l){const pe=l[ae],$e=fe(pe)?pe.bind(a,a):fe(pe.get)?pe.get.bind(a,a):yn;$e===yn&&V(`Computed property "${ae}" has no getter.`);const Pe=!fe(pe)&&fe(pe.set)?pe.set.bind(a):()=>{V(`Write operation failed: computed property "${ae}" is readonly.`)},Sn=W({get:$e,set:Pe});Object.defineProperty(o,ae,{enumerable:!0,configurable:!0,get:()=>Sn.value,set:an=>Sn.value=an}),Te("Computed",ae)}if(c)for(const ae in c)ud(c[ae],o,a,ae);if(u){const ae=fe(u)?u.call(a):u;Reflect.ownKeys(ae).forEach(pe=>{En(pe,ae[pe])})}d&&dc(d,n,"c");function Re(ae,pe){ue(pe)?pe.forEach($e=>ae($e.bind(a))):pe&&ae(pe.bind(a))}if(Re(Cg,m),Re(bt,f),Re(Ag,h),Re(ri,g),Re(od,w),Re(id,T),Re(Hg,F),Re(Og,N),Re(Sg,B),Re(js,z),Re(Bs,S),Re(Ig,K),ue(ie))if(ie.length){const ae=n.exposed||(n.exposed={});ie.forEach(pe=>{Object.defineProperty(ae,pe,{get:()=>a[pe],set:$e=>a[pe]=$e})})}else n.exposed||(n.exposed={});A&&n.render===yn&&(n.render=A),me!=null&&(n.inheritAttrs=me),X&&(n.components=X),ve&&(n.directives=ve)}function Vg(n,t,a=yn){ue(n)&&(n=il(n));for(const o in n){const i=n[o];let l;Oe(i)?"default"in i?l=$(i.from||o,i.default,!0):l=$(i.from||o):l=$(i),Ie(l)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):t[o]=l,a("Inject",o)}}function dc(n,t,a){qn(ue(n)?n.map(o=>o.bind(t.proxy)):n.bind(t.proxy),t,a)}function ud(n,t,a,o){const i=o.includes(".")?ed(a,o):()=>a[o];if(je(n)){const l=t[n];fe(l)?be(i,l):V(`Invalid watch handler specified by key "${n}"`,l)}else if(fe(n))be(i,n.bind(a));else if(Oe(n))if(ue(n))n.forEach(l=>ud(l,t,a,o));else{const l=fe(n.handler)?n.handler.bind(a):t[n.handler];fe(l)?be(i,l,n):V(`Invalid watch handler specified by key "${n.handler}"`,l)}else V(`Invalid watch option: "${o}"`,n)}function _r(n){const t=n.type,{mixins:a,extends:o}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=n.appContext,c=l.get(t);let u;return c?u=c:!i.length&&!a&&!o?u=t:(u={},i.length&&i.forEach(p=>Ho(u,p,r,!0)),Ho(u,t,r)),Oe(t)&&l.set(t,u),u}function Ho(n,t,a,o=!1){const{mixins:i,extends:l}=t;l&&Ho(n,l,a,!0),i&&i.forEach(r=>Ho(n,r,a,!0));for(const r in t)if(o&&r==="expose")V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=Ug[r]||a&&a[r];n[r]=c?c(n[r],t[r]):t[r]}return n}const Ug={data:mc,props:fc,emits:fc,methods:ls,computed:ls,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:ls,directives:ls,watch:Gg,provide:mc,inject:Kg};function mc(n,t){return t?n?function(){return We(fe(n)?n.call(this,this):n,fe(t)?t.call(this,this):t)}:t:n}function Kg(n,t){return ls(il(n),il(t))}function il(n){if(ue(n)){const t={};for(let a=0;a<n.length;a++)t[n[a]]=n[a];return t}return n}function pn(n,t){return n?[...new Set([].concat(n,t))]:t}function ls(n,t){return n?We(Object.create(null),n,t):t}function fc(n,t){return n?ue(n)&&ue(t)?[...new Set([...n,...t])]:We(Object.create(null),pc(n),pc(t??{})):t}function Gg(n,t){if(!n)return t;if(!t)return n;const a=We(Object.create(null),n);for(const o in t)a[o]=pn(n[o],t[o]);return a}function pd(){return{app:null,config:{isNativeTag:gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qg=0;function Jg(n,t){return function(o,i=null){fe(o)||(o=We({},o)),i!=null&&!Oe(i)&&(V("root props passed to app.mount() must be an object."),i=null);const l=pd();Object.defineProperty(l.config,"unwrapInjectedRef",{get(){return!0},set(){V("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const r=new Set;let c=!1;const u=l.app={_uid:Qg++,_component:o,_props:i,_container:null,_context:l,_instance:null,version:qo,get config(){return l.config},set config(p){V("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return r.has(p)?V("Plugin has already been applied to target app."):p&&fe(p.install)?(r.add(p),p.install(u,...d)):fe(p)?(r.add(p),p(u,...d)):V('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return l.mixins.includes(p)?V("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):l.mixins.push(p),u},component(p,d){return pl(p,l.config),d?(l.components[p]&&V(`Component "${p}" has already been registered in target app.`),l.components[p]=d,u):l.components[p]},directive(p,d){return nd(p),d?(l.directives[p]&&V(`Directive "${p}" has already been registered in target app.`),l.directives[p]=d,u):l.directives[p]},mount(p,d,m){if(c)V("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&V("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=C(o,i);return f.appContext=l,l.reload=()=>{n(lt(f),p,m)},d&&t?t(f,p):n(f,p,m),c=!0,u._container=p,p.__vue_app__=u,u._instance=f.component,cg(u,qo),ui(f.component)||f.component.proxy}},unmount(){c?(n(null,u._container),u._instance=null,ug(u),delete u._container.__vue_app__):V("Cannot unmount an app that is not mounted.")},provide(p,d){return p in l.provides&&V(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),l.provides[p]=d,u},runWithContext(p){Po=u;try{return p()}finally{Po=null}}};return u}}let Po=null;function En(n,t){if(!Ye)V("provide() can only be used inside setup().");else{let a=Ye.provides;const o=Ye.parent&&Ye.parent.provides;o===a&&(a=Ye.provides=Object.create(o)),a[n]=t}}function $(n,t,a=!1){const o=Ye||Xe;if(o||Po){const i=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Po._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return a&&fe(t)?t.call(o&&o.proxy):t;V(`injection "${String(n)}" not found.`)}else V("inject() can only be used inside setup() or functional components.")}function Zg(n,t,a,o=!1){const i={},l={};$o(l,ci,1),n.propsDefaults=Object.create(null),dd(n,t,i,l);for(const r in n.propsOptions[0])r in i||(i[r]=void 0);fd(t||{},i,n),a?n.props=o?i:qh(i):n.type.props?n.props=i:n.props=l,n.attrs=l}function Yg(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function Xg(n,t,a,o){const{props:i,attrs:l,vnode:{patchFlag:r}}=n,c=_e(i),[u]=n.propsOptions;let p=!1;if(!Yg(n)&&(o||r>0)&&!(r&16)){if(r&8){const d=n.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];if(si(n.emitsOptions,f))continue;const h=t[f];if(u)if(Me(l,f))h!==l[f]&&(l[f]=h,p=!0);else{const g=st(f);i[g]=ll(u,c,g,h,n,!1)}else h!==l[f]&&(l[f]=h,p=!0)}}}else{dd(n,t,i,l)&&(p=!0);let d;for(const m in c)(!t||!Me(t,m)&&((d=_t(m))===m||!Me(t,d)))&&(u?a&&(a[m]!==void 0||a[d]!==void 0)&&(i[m]=ll(u,c,m,void 0,n,!0)):delete i[m]);if(l!==c)for(const m in l)(!t||!Me(t,m))&&(delete l[m],p=!0)}p&&ot(n,"set","$attrs"),fd(t||{},i,n)}function dd(n,t,a,o){const[i,l]=n.propsOptions;let r=!1,c;if(t)for(let u in t){if(go(u))continue;const p=t[u];let d;i&&Me(i,d=st(u))?!l||!l.includes(d)?a[d]=p:(c||(c={}))[d]=p:si(n.emitsOptions,u)||(!(u in o)||p!==o[u])&&(o[u]=p,r=!0)}if(l){const u=_e(a),p=c||Fe;for(let d=0;d<l.length;d++){const m=l[d];a[m]=ll(i,u,m,p[m],n,!Me(p,m))}}return r}function ll(n,t,a,o,i,l){const r=n[a];if(r!=null){const c=Me(r,"default");if(c&&o===void 0){const u=r.default;if(r.type!==Function&&!r.skipFactory&&fe(u)){const{propsDefaults:p}=i;a in p?o=p[a]:(Pa(i),o=p[a]=u.call(null,t),ma())}else o=u}r[0]&&(l&&!c?o=!1:r[1]&&(o===""||o===_t(a))&&(o=!0))}return o}function md(n,t,a=!1){const o=t.propsCache,i=o.get(n);if(i)return i;const l=n.props,r={},c=[];let u=!1;if(!fe(n)){const d=m=>{u=!0;const[f,h]=md(m,t,!0);We(r,f),h&&c.push(...h)};!a&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!l&&!u)return Oe(n)&&o.set(n,Ca),Ca;if(ue(l))for(let d=0;d<l.length;d++){je(l[d])||V("props must be strings when using array syntax.",l[d]);const m=st(l[d]);hc(m)&&(r[m]=Fe)}else if(l){Oe(l)||V("invalid props options",l);for(const d in l){const m=st(d);if(hc(m)){const f=l[d],h=r[m]=ue(f)||fe(f)?{type:f}:We({},f);if(h){const g=_c(Boolean,h.type),w=_c(String,h.type);h[0]=g>-1,h[1]=w<0||g<w,(g>-1||Me(h,"default"))&&c.push(m)}}}}const p=[r,c];return Oe(n)&&o.set(n,p),p}function hc(n){return n[0]!=="$"?!0:(V(`Invalid prop name: "${n}" is a reserved property.`),!1)}function rl(n){const t=n&&n.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:n===null?"null":""}function gc(n,t){return rl(n)===rl(t)}function _c(n,t){return ue(t)?t.findIndex(a=>gc(a,n)):fe(t)&&gc(t,n)?0:-1}function fd(n,t,a){const o=_e(t),i=a.propsOptions[0];for(const l in i){let r=i[l];r!=null&&e_(l,o[l],r,!Me(n,l)&&!Me(n,_t(l)))}}function e_(n,t,a,o){const{type:i,required:l,validator:r,skipCheck:c}=a;if(l&&o){V('Missing required prop: "'+n+'"');return}if(!(t==null&&!l)){if(i!=null&&i!==!0&&!c){let u=!1;const p=ue(i)?i:[i],d=[];for(let m=0;m<p.length&&!u;m++){const{valid:f,expectedType:h}=t_(t,p[m]);d.push(h||""),u=f}if(!u){V(a_(n,t,d));return}}r&&!r(t)&&V('Invalid prop: custom validator check failed for prop "'+n+'".')}}const n_=Dt("String,Number,Boolean,Function,Symbol,BigInt");function t_(n,t){let a;const o=rl(t);if(n_(o)){const i=typeof n;a=i===o.toLowerCase(),!a&&i==="object"&&(a=n instanceof t)}else o==="Object"?a=Oe(n):o==="Array"?a=ue(n):o==="null"?a=n===null:a=n instanceof t;return{valid:a,expectedType:o}}function a_(n,t,a){let o=`Invalid prop: type check failed for prop "${n}". Expected ${a.map(ga).join(" | ")}`;const i=a[0],l=nr(t),r=vc(t,i),c=vc(t,l);return a.length===1&&kc(i)&&!s_(i,l)&&(o+=` with value ${r}`),o+=`, got ${l} `,kc(l)&&(o+=`with value ${c}.`),o}function vc(n,t){return t==="String"?`"${n}"`:t==="Number"?`${Number(n)}`:`${n}`}function kc(n){return["string","number","boolean"].some(a=>n.toLowerCase()===a)}function s_(...n){return n.some(t=>t.toLowerCase()==="boolean")}const hd=n=>n[0]==="_"||n==="$stable",vr=n=>ue(n)?n.map(Un):[Un(n)],o_=(n,t,a)=>{if(t._n)return t;const o=v((...i)=>(Ye&&V(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),vr(t(...i))),a);return o._c=!1,o},gd=(n,t,a)=>{const o=n._ctx;for(const i in n){if(hd(i))continue;const l=n[i];if(fe(l))t[i]=o_(i,l,o);else if(l!=null){V(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);const r=vr(l);t[i]=()=>r}}},_d=(n,t)=>{hr(n.vnode)||V("Non-function value encountered for default slot. Prefer function slots for better performance.");const a=vr(t);n.slots.default=()=>a},i_=(n,t)=>{if(n.vnode.shapeFlag&32){const a=t._;a?(n.slots=_e(t),$o(t,"_",a)):gd(t,n.slots={})}else n.slots={},t&&_d(n,t);$o(n.slots,ci,1)},l_=(n,t,a)=>{const{vnode:o,slots:i}=n;let l=!0,r=Fe;if(o.shapeFlag&32){const c=t._;c?At?(We(i,t),ot(n,"set","$slots")):a&&c===1?l=!1:(We(i,t),!a&&c===1&&delete i._):(l=!t.$stable,gd(t,i)),r=t}else t&&(_d(n,t),r={default:1});if(l)for(const c in i)!hd(c)&&!(c in r)&&delete i[c]};function cl(n,t,a,o,i=!1){if(ue(n)){n.forEach((f,h)=>cl(f,t&&(ue(t)?t[h]:t),a,o,i));return}if(Ia(o)&&!i)return;const l=o.shapeFlag&4?ui(o.component)||o.component.proxy:o.el,r=i?null:l,{i:c,r:u}=n;if(!c){V("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=t&&t.r,d=c.refs===Fe?c.refs={}:c.refs,m=c.setupState;if(p!=null&&p!==u&&(je(p)?(d[p]=null,Me(m,p)&&(m[p]=null)):Ie(p)&&(p.value=null)),fe(u))gt(u,c,12,[r,d]);else{const f=je(u),h=Ie(u);if(f||h){const g=()=>{if(n.f){const w=f?Me(m,u)?m[u]:d[u]:u.value;i?ue(w)&&Yl(w,l):ue(w)?w.includes(l)||w.push(l):f?(d[u]=[l],Me(m,u)&&(m[u]=d[u])):(u.value=[l],n.k&&(d[n.k]=u.value))}else f?(d[u]=r,Me(m,u)&&(m[u]=r)):h?(u.value=r,n.k&&(d[n.k]=r)):V("Invalid template ref type:",u,`(${typeof u})`)};r?(g.id=-1,nn(g,a)):g()}else V("Invalid template ref type:",u,`(${typeof u})`)}}let Va,Lt;function ut(n,t){n.appContext.config.performance&&Ro()&&Lt.mark(`vue-${t}-${n.uid}`),mg(n,t,Ro()?Lt.now():Date.now())}function pt(n,t){if(n.appContext.config.performance&&Ro()){const a=`vue-${t}-${n.uid}`,o=a+":end";Lt.mark(o),Lt.measure(`<${pi(n,n.type)}> ${t}`,a,o),Lt.clearMarks(a),Lt.clearMarks(o)}fg(n,t,Ro()?Lt.now():Date.now())}function Ro(){return Va!==void 0||(typeof window<"u"&&window.performance?(Va=!0,Lt=window.performance):Va=!1),Va}function r_(){const n=[];if(n.length){const t=n.length>1;console.warn(`Feature flag${t?"s":""} ${n.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const nn=wg;function c_(n){return u_(n)}function u_(n,t){r_();const a=Mo();a.__VUE__=!0,Gp(a.__VUE_DEVTOOLS_GLOBAL_HOOK__,a);const{insert:o,remove:i,patchProp:l,createElement:r,createText:c,createComment:u,setText:p,setElementText:d,parentNode:m,nextSibling:f,setScopeId:h=yn,insertStaticContent:g}=n,w=(_,y,I,j=null,D=null,J=null,ne=!1,Q=null,Z=At?!1:!!y.dynamicChildren)=>{if(_===y)return;_&&!Xt(_,y)&&(j=ee(_),_n(_,D,J,!0),_=null),y.patchFlag===-2&&(Z=!1,y.dynamicChildren=null);const{type:U,ref:ce,shapeFlag:re}=y;switch(U){case Vs:T(_,y,I,j);break;case hn:x(_,y,I,j);break;case ps:_==null?z(y,I,j,ne):b(_,y,I,ne);break;case Ae:ve(_,y,I,j,D,J,ne,Q,Z);break;default:re&1?N(_,y,I,j,D,J,ne,Q,Z):re&6?ye(_,y,I,j,D,J,ne,Q,Z):re&64||re&128?U.process(_,y,I,j,D,J,ne,Q,Z,se):V("Invalid VNode type:",U,`(${typeof U})`)}ce!=null&&D&&cl(ce,_&&_.ref,J,y||_,!y)},T=(_,y,I,j)=>{if(_==null)o(y.el=c(y.children),I,j);else{const D=y.el=_.el;y.children!==_.children&&p(D,y.children)}},x=(_,y,I,j)=>{_==null?o(y.el=u(y.children||""),I,j):y.el=_.el},z=(_,y,I,j)=>{[_.el,_.anchor]=g(_.children,y,I,j,_.el,_.anchor)},b=(_,y,I,j)=>{if(y.children!==_.children){const D=f(_.anchor);A(_),[y.el,y.anchor]=g(y.children,I,D,j)}else y.el=_.el,y.anchor=_.anchor},S=({el:_,anchor:y},I,j)=>{let D;for(;_&&_!==y;)D=f(_),o(_,I,j),_=D;o(y,I,j)},A=({el:_,anchor:y})=>{let I;for(;_&&_!==y;)I=f(_),i(_),_=I;i(y)},N=(_,y,I,j,D,J,ne,Q,Z)=>{ne=ne||y.type==="svg",_==null?B(y,I,j,D,J,ne,Q,Z):ie(_,y,D,J,ne,Q,Z)},B=(_,y,I,j,D,J,ne,Q)=>{let Z,U;const{type:ce,props:re,shapeFlag:de,transition:ge,dirs:Le}=_;if(Z=_.el=r(_.type,J,re&&re.is,re),de&8?d(Z,_.children):de&16&&K(_.children,Z,null,j,D,J&&ce!=="foreignObject",ne,Q),Le&&Vt(_,null,j,"created"),F(Z,_,_.scopeId,ne,j),re){for(const qe in re)qe!=="value"&&!go(qe)&&l(Z,qe,null,re[qe],J,_.children,j,D,q);"value"in re&&l(Z,"value",null,re.value),(U=re.onVnodeBeforeMount)&&Pn(U,j,_)}Object.defineProperty(Z,"__vnode",{value:_,enumerable:!1}),Object.defineProperty(Z,"__vueParentComponent",{value:j,enumerable:!1}),Le&&Vt(_,null,j,"beforeMount");const De=(!D||D&&!D.pendingBranch)&&ge&&!ge.persisted;De&&ge.beforeEnter(Z),o(Z,y,I),((U=re&&re.onVnodeMounted)||De||Le)&&nn(()=>{U&&Pn(U,j,_),De&&ge.enter(Z),Le&&Vt(_,null,j,"mounted")},D)},F=(_,y,I,j,D)=>{if(I&&h(_,I),j)for(let J=0;J<j.length;J++)h(_,j[J]);if(D){let J=D.subTree;if(J.patchFlag>0&&J.patchFlag&2048&&(J=Yp(J.children)||J),y===J){const ne=D.vnode;F(_,ne,ne.scopeId,ne.slotScopeIds,D.parent)}}},K=(_,y,I,j,D,J,ne,Q,Z=0)=>{for(let U=Z;U<_.length;U++){const ce=_[U]=Q?$t(_[U]):Un(_[U]);w(null,ce,y,I,j,D,J,ne,Q)}},ie=(_,y,I,j,D,J,ne)=>{const Q=y.el=_.el;let{patchFlag:Z,dynamicChildren:U,dirs:ce}=y;Z|=_.patchFlag&16;const re=_.props||Fe,de=y.props||Fe;let ge;I&&Ut(I,!1),(ge=de.onVnodeBeforeUpdate)&&Pn(ge,I,y,_),ce&&Vt(y,_,I,"beforeUpdate"),I&&Ut(I,!0),At&&(Z=0,ne=!1,U=null);const Le=D&&y.type!=="foreignObject";if(U?(me(_.dynamicChildren,U,Q,I,j,Le,J),No(_,y)):ne||$e(_,y,Q,null,I,j,Le,J,!1),Z>0){if(Z&16)X(Q,y,re,de,I,j,D);else if(Z&2&&re.class!==de.class&&l(Q,"class",null,de.class,D),Z&4&&l(Q,"style",re.style,de.style,D),Z&8){const De=y.dynamicProps;for(let qe=0;qe<De.length;qe++){const Ke=De[qe],jn=re[Ke],Ta=de[Ke];(Ta!==jn||Ke==="value")&&l(Q,Ke,jn,Ta,D,_.children,I,j,q)}}Z&1&&_.children!==y.children&&d(Q,y.children)}else!ne&&U==null&&X(Q,y,re,de,I,j,D);((ge=de.onVnodeUpdated)||ce)&&nn(()=>{ge&&Pn(ge,I,y,_),ce&&Vt(y,_,I,"updated")},j)},me=(_,y,I,j,D,J,ne)=>{for(let Q=0;Q<y.length;Q++){const Z=_[Q],U=y[Q],ce=Z.el&&(Z.type===Ae||!Xt(Z,U)||Z.shapeFlag&70)?m(Z.el):I;w(Z,U,ce,null,j,D,J,ne,!0)}},X=(_,y,I,j,D,J,ne)=>{if(I!==j){if(I!==Fe)for(const Q in I)!go(Q)&&!(Q in j)&&l(_,Q,I[Q],null,ne,y.children,D,J,q);for(const Q in j){if(go(Q))continue;const Z=j[Q],U=I[Q];Z!==U&&Q!=="value"&&l(_,Q,U,Z,ne,y.children,D,J,q)}"value"in j&&l(_,"value",I.value,j.value)}},ve=(_,y,I,j,D,J,ne,Q,Z)=>{const U=y.el=_?_.el:c(""),ce=y.anchor=_?_.anchor:c("");let{patchFlag:re,dynamicChildren:de,slotScopeIds:ge}=y;(At||re&2048)&&(re=0,Z=!1,de=null),ge&&(Q=Q?Q.concat(ge):ge),_==null?(o(U,I,j),o(ce,I,j),K(y.children,I,ce,D,J,ne,Q,Z)):re>0&&re&64&&de&&_.dynamicChildren?(me(_.dynamicChildren,de,I,D,J,ne,Q),No(_,y)):$e(_,y,I,ce,D,J,ne,Q,Z)},ye=(_,y,I,j,D,J,ne,Q,Z)=>{y.slotScopeIds=Q,_==null?y.shapeFlag&512?D.ctx.activate(y,I,j,ne,Z):Te(y,I,j,D,J,ne,Z):Re(_,y,Z)},Te=(_,y,I,j,D,J,ne)=>{const Q=_.component=y_(_,j,D);if(Q.type.__hmrId&&og(Q),_o(_),ut(Q,"mount"),hr(_)&&(Q.ctx.renderer=se),ut(Q,"init"),T_(Q),pt(Q,"init"),Q.asyncDep){if(D&&D.registerDep(Q,ae),!_.el){const Z=Q.subTree=C(hn);x(null,Z,y,I)}return}ae(Q,_,y,I,D,J,ne),vo(),pt(Q,"mount")},Re=(_,y,I)=>{const j=y.component=_.component;if(bg(_,y,I))if(j.asyncDep&&!j.asyncResolved){_o(y),pe(j,y,I),vo();return}else j.next=y,ag(j.update),j.update();else y.el=_.el,j.vnode=y},ae=(_,y,I,j,D,J,ne)=>{const Q=()=>{if(_.isMounted){let{next:ce,bu:re,u:de,parent:ge,vnode:Le}=_,De=ce,qe;_o(ce||_.vnode),Ut(_,!1),ce?(ce.el=Le.el,pe(_,ce,ne)):ce=Le,re&&Yt(re),(qe=ce.props&&ce.props.onVnodeBeforeUpdate)&&Pn(qe,ge,ce,Le),Ut(_,!0),ut(_,"render");const Ke=vi(_);pt(_,"render");const jn=_.subTree;_.subTree=Ke,ut(_,"patch"),w(jn,Ke,m(jn.el),ee(jn),_,D,J),pt(_,"patch"),ce.el=Ke.el,De===null&&yg(_,Ke.el),de&&nn(de,D),(qe=ce.props&&ce.props.onVnodeUpdated)&&nn(()=>Pn(qe,ge,ce,Le),D),Qp(_),vo()}else{let ce;const{el:re,props:de}=y,{bm:ge,m:Le,parent:De}=_,qe=Ia(y);if(Ut(_,!1),ge&&Yt(ge),!qe&&(ce=de&&de.onVnodeBeforeMount)&&Pn(ce,De,y),Ut(_,!0),re&&Ne){const Ke=()=>{ut(_,"render"),_.subTree=vi(_),pt(_,"render"),ut(_,"hydrate"),Ne(re,_.subTree,_,D,null),pt(_,"hydrate")};qe?y.type.__asyncLoader().then(()=>!_.isUnmounted&&Ke()):Ke()}else{ut(_,"render");const Ke=_.subTree=vi(_);pt(_,"render"),ut(_,"patch"),w(null,Ke,I,j,_,D,J),pt(_,"patch"),y.el=Ke.el}if(Le&&nn(Le,D),!qe&&(ce=de&&de.onVnodeMounted)){const Ke=y;nn(()=>Pn(ce,De,Ke),D)}(y.shapeFlag&256||De&&Ia(De.vnode)&&De.vnode.shapeFlag&256)&&_.a&&nn(_.a,D),_.isMounted=!0,el(_),y=I=j=null}},Z=_.effect=new or(Q,()=>ai(U),_.scope),U=_.update=()=>Z.run();U.id=_.uid,Ut(_,!0),Z.onTrack=_.rtc?ce=>Yt(_.rtc,ce):void 0,Z.onTrigger=_.rtg?ce=>Yt(_.rtg,ce):void 0,U.ownerInstance=_,U()},pe=(_,y,I)=>{y.component=_;const j=_.vnode.props;_.vnode=y,_.next=null,Xg(_,y.props,j,I),l_(_,y.children,I),va(),ic(),ka()},$e=(_,y,I,j,D,J,ne,Q,Z=!1)=>{const U=_&&_.children,ce=_?_.shapeFlag:0,re=y.children,{patchFlag:de,shapeFlag:ge}=y;if(de>0){if(de&128){Sn(U,re,I,j,D,J,ne,Q,Z);return}else if(de&256){Pe(U,re,I,j,D,J,ne,Q,Z);return}}ge&8?(ce&16&&q(U,D,J),re!==U&&d(I,re)):ce&16?ge&16?Sn(U,re,I,j,D,J,ne,Q,Z):q(U,D,J,!0):(ce&8&&d(I,""),ge&16&&K(re,I,j,D,J,ne,Q,Z))},Pe=(_,y,I,j,D,J,ne,Q,Z)=>{_=_||Ca,y=y||Ca;const U=_.length,ce=y.length,re=Math.min(U,ce);let de;for(de=0;de<re;de++){const ge=y[de]=Z?$t(y[de]):Un(y[de]);w(_[de],ge,I,null,D,J,ne,Q,Z)}U>ce?q(_,D,J,!0,!1,re):K(y,I,j,D,J,ne,Q,Z,re)},Sn=(_,y,I,j,D,J,ne,Q,Z)=>{let U=0;const ce=y.length;let re=_.length-1,de=ce-1;for(;U<=re&&U<=de;){const ge=_[U],Le=y[U]=Z?$t(y[U]):Un(y[U]);if(Xt(ge,Le))w(ge,Le,I,null,D,J,ne,Q,Z);else break;U++}for(;U<=re&&U<=de;){const ge=_[re],Le=y[de]=Z?$t(y[de]):Un(y[de]);if(Xt(ge,Le))w(ge,Le,I,null,D,J,ne,Q,Z);else break;re--,de--}if(U>re){if(U<=de){const ge=de+1,Le=ge<ce?y[ge].el:j;for(;U<=de;)w(null,y[U]=Z?$t(y[U]):Un(y[U]),I,Le,D,J,ne,Q,Z),U++}}else if(U>de)for(;U<=re;)_n(_[U],D,J,!0),U++;else{const ge=U,Le=U,De=new Map;for(U=Le;U<=de;U++){const un=y[U]=Z?$t(y[U]):Un(y[U]);un.key!=null&&(De.has(un.key)&&V("Duplicate keys found during update:",JSON.stringify(un.key),"Make sure keys are unique."),De.set(un.key,U))}let qe,Ke=0;const jn=de-Le+1;let Ta=!1,Qr=0;const Ba=new Array(jn);for(U=0;U<jn;U++)Ba[U]=0;for(U=ge;U<=re;U++){const un=_[U];if(Ke>=jn){_n(un,D,J,!0);continue}let Yn;if(un.key!=null)Yn=De.get(un.key);else for(qe=Le;qe<=de;qe++)if(Ba[qe-Le]===0&&Xt(un,y[qe])){Yn=qe;break}Yn===void 0?_n(un,D,J,!0):(Ba[Yn-Le]=U+1,Yn>=Qr?Qr=Yn:Ta=!0,w(un,y[Yn],I,null,D,J,ne,Q,Z),Ke++)}const Jr=Ta?p_(Ba):Ca;for(qe=Jr.length-1,U=jn-1;U>=0;U--){const un=Le+U,Yn=y[un],Zr=un+1<ce?y[un+1].el:j;Ba[U]===0?w(null,Yn,I,Zr,D,J,ne,Q,Z):Ta&&(qe<0||U!==Jr[qe]?an(Yn,I,Zr,2):qe--)}}},an=(_,y,I,j,D=null)=>{const{el:J,type:ne,transition:Q,children:Z,shapeFlag:U}=_;if(U&6){an(_.component.subTree,y,I,j);return}if(U&128){_.suspense.move(y,I,j);return}if(U&64){ne.move(_,y,I,se);return}if(ne===Ae){o(J,y,I);for(let re=0;re<Z.length;re++)an(Z[re],y,I,j);o(_.anchor,y,I);return}if(ne===ps){S(_,y,I);return}if(j!==2&&U&1&&Q)if(j===0)Q.beforeEnter(J),o(J,y,I),nn(()=>Q.enter(J),D);else{const{leave:re,delayLeave:de,afterLeave:ge}=Q,Le=()=>o(J,y,I),De=()=>{re(J,()=>{Le(),ge&&ge()})};de?de(J,Le,De):De()}else o(J,y,I)},_n=(_,y,I,j=!1,D=!1)=>{const{type:J,props:ne,ref:Q,children:Z,dynamicChildren:U,shapeFlag:ce,patchFlag:re,dirs:de}=_;if(Q!=null&&cl(Q,null,I,_,!0),ce&256){y.ctx.deactivate(_);return}const ge=ce&1&&de,Le=!Ia(_);let De;if(Le&&(De=ne&&ne.onVnodeBeforeUnmount)&&Pn(De,y,_),ce&6)On(_.component,I,j);else{if(ce&128){_.suspense.unmount(I,j);return}ge&&Vt(_,null,y,"beforeUnmount"),ce&64?_.type.remove(_,y,I,D,se,j):U&&(J!==Ae||re>0&&re&64)?q(U,y,I,!1,!0):(J===Ae&&re&384||!D&&ce&16)&&q(Z,y,I),j&&Zn(_)}(Le&&(De=ne&&ne.onVnodeUnmounted)||ge)&&nn(()=>{De&&Pn(De,y,_),ge&&Vt(_,null,y,"unmounted")},I)},Zn=_=>{const{type:y,el:I,anchor:j,transition:D}=_;if(y===Ae){_.patchFlag>0&&_.patchFlag&2048&&D&&!D.persisted?_.children.forEach(ne=>{ne.type===hn?i(ne.el):Zn(ne)}):Bt(I,j);return}if(y===ps){A(_);return}const J=()=>{i(I),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:ne,delayLeave:Q}=D,Z=()=>ne(I,J);Q?Q(_.el,J,Z):Z()}else J()},Bt=(_,y)=>{let I;for(;_!==y;)I=f(_),i(_),_=I;i(y)},On=(_,y,I)=>{_.type.__hmrId&&ig(_);const{bum:j,scope:D,update:J,subTree:ne,um:Q}=_;j&&Yt(j),D.stop(),J&&(J.active=!1,_n(ne,_,y,I)),Q&&nn(Q,y),nn(()=>{_.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve()),dg(_)},q=(_,y,I,j=!1,D=!1,J=0)=>{for(let ne=J;ne<_.length;ne++)_n(_[ne],y,I,j,D)},ee=_=>_.shapeFlag&6?ee(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),te=(_,y,I)=>{_==null?y._vnode&&_n(y._vnode,null,null,!0):w(y._vnode||null,_,y,null,null,null,I),ic(),Vp(),y._vnode=_},se={p:w,um:_n,m:an,r:Zn,mt:Te,mc:K,pc:$e,pbc:me,n:ee,o:n};let ze,Ne;return t&&([ze,Ne]=t(se)),{render:te,hydrate:ze,createApp:Jg(te,ze)}}function Ut({effect:n,update:t},a){n.allowRecurse=t.allowRecurse=a}function No(n,t,a=!1){const o=n.children,i=t.children;if(ue(o)&&ue(i))for(let l=0;l<o.length;l++){const r=o[l];let c=i[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[l]=$t(i[l]),c.el=r.el),a||No(r,c)),c.type===Vs&&(c.el=r.el),c.type===hn&&!c.el&&(c.el=r.el)}}function p_(n){const t=n.slice(),a=[0];let o,i,l,r,c;const u=n.length;for(o=0;o<u;o++){const p=n[o];if(p!==0){if(i=a[a.length-1],n[i]<p){t[o]=i,a.push(o);continue}for(l=0,r=a.length-1;l<r;)c=l+r>>1,n[a[c]]<p?l=c+1:r=c;p<n[a[l]]&&(l>0&&(t[o]=a[l-1]),a[l]=o)}}for(l=a.length,r=a[l-1];l-- >0;)a[l]=r,r=t[r];return a}const d_=n=>n.__isTeleport,Sa=n=>n&&(n.disabled||n.disabled===""),bc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,ul=(n,t)=>{const a=n&&n.to;if(je(a))if(t){const o=t(a);return o||V(`Failed to locate Teleport target with selector "${a}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return V("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!a&&!Sa(n)&&V(`Invalid Teleport target: ${a}`),a},m_={__isTeleport:!0,process(n,t,a,o,i,l,r,c,u,p){const{mc:d,pc:m,pbc:f,o:{insert:h,querySelector:g,createText:w,createComment:T}}=p,x=Sa(t.props);let{shapeFlag:z,children:b,dynamicChildren:S}=t;if(At&&(u=!1,S=null),n==null){const A=t.el=T("teleport start"),N=t.anchor=T("teleport end");h(A,a,o),h(N,a,o);const B=t.target=ul(t.props,g),F=t.targetAnchor=w("");B?(h(F,B),r=r||bc(B)):x||V("Invalid Teleport target on mount:",B,`(${typeof B})`);const K=(ie,me)=>{z&16&&d(b,ie,me,i,l,r,c,u)};x?K(a,N):B&&K(B,F)}else{t.el=n.el;const A=t.anchor=n.anchor,N=t.target=n.target,B=t.targetAnchor=n.targetAnchor,F=Sa(n.props),K=F?a:N,ie=F?A:B;if(r=r||bc(N),S?(f(n.dynamicChildren,S,K,i,l,r,c),No(n,t,!0)):u||m(n,t,K,ie,i,l,r,c,!1),x)F||ao(t,a,A,p,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const me=t.target=ul(t.props,g);me?ao(t,me,null,p,0):V("Invalid Teleport target on update:",N,`(${typeof N})`)}else F&&ao(t,N,B,p,1)}vd(t)},remove(n,t,a,o,{um:i,o:{remove:l}},r){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:m,props:f}=n;if(m&&l(d),(r||!Sa(f))&&(l(p),c&16))for(let h=0;h<u.length;h++){const g=u[h];i(g,t,a,!0,!!g.dynamicChildren)}},move:ao,hydrate:f_};function ao(n,t,a,{o:{insert:o},m:i},l=2){l===0&&o(n.targetAnchor,t,a);const{el:r,anchor:c,shapeFlag:u,children:p,props:d}=n,m=l===2;if(m&&o(r,t,a),(!m||Sa(d))&&u&16)for(let f=0;f<p.length;f++)i(p[f],t,a,2);m&&o(c,t,a)}function f_(n,t,a,o,i,l,{o:{nextSibling:r,parentNode:c,querySelector:u}},p){const d=t.target=ul(t.props,u);if(d){const m=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Sa(t.props))t.anchor=p(r(n),t,c(n),a,o,i,l),t.targetAnchor=m;else{t.anchor=r(n);let f=m;for(;f;)if(f=r(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,d._lpa=t.targetAnchor&&r(t.targetAnchor);break}p(m,t,d,a,o,i,l)}vd(t)}return t.anchor&&r(t.anchor)}const h_=m_;function vd(n){const t=n.ctx;if(t&&t.ut){let a=n.children[0].el;for(;a!==n.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",t.uid),a=a.nextSibling;t.ut()}}const Ae=Symbol.for("v-fgt"),Vs=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),ps=Symbol.for("v-stc"),ds=[];let Gn=null;function k(n=!1){ds.push(Gn=n?null:[])}function g_(){ds.pop(),Gn=ds[ds.length-1]||null}let Ms=1;function yc(n){Ms+=n}function kd(n){return n.dynamicChildren=Ms>0?Gn||Ca:null,g_(),Ms>0&&Gn&&Gn.push(n),n}function oe(n,t,a,o,i,l){return kd(e(n,t,a,o,i,l,!0))}function M(n,t,a,o,i){return kd(C(n,t,a,o,i,!0))}function Ft(n){return n?n.__v_isVNode===!0:!1}function Xt(n,t){return t.shapeFlag&6&&La.has(t.type)?(n.shapeFlag&=-257,t.shapeFlag&=-513,!1):n.type===t.type&&n.key===t.key}const __=(...n)=>v_(...n),ci="__vInternal",bd=({key:n})=>n??null,ko=({ref:n,ref_key:t,ref_for:a})=>(typeof n=="number"&&(n=""+n),n!=null?je(n)||Ie(n)||fe(n)?{i:Xe,r:n,k:t,f:!!a}:n:null);function e(n,t=null,a=null,o=0,i=null,l=n===Ae?0:1,r=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&bd(t),ref:t&&ko(t),scopeId:oi,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xe};return c?(kr(u,a),l&128&&n.normalize(u)):a&&(u.shapeFlag|=je(a)?8:16),u.key!==u.key&&V("VNode created with invalid key (NaN). VNode type:",u.type),Ms>0&&!r&&Gn&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&Gn.push(u),u}const C=__;function v_(n,t=null,a=null,o=0,i=null,l=!1){if((!n||n===Pg)&&(n||V(`Invalid vnode type when creating vnode: ${n}.`),n=hn),Ft(n)){const c=lt(n,t,!0);return a&&kr(c,a),Ms>0&&!l&&Gn&&(c.shapeFlag&6?Gn[Gn.indexOf(n)]=c:Gn.push(c)),c.patchFlag|=-2,c}if(zd(n)&&(n=n.__vccOpts),t){t=H(t);let{class:c,style:u}=t;c&&!je(c)&&(t.class=Ve(c)),Oe(u)&&(Ao(u)&&!ue(u)&&(u=We({},u)),t.style=tn(u))}const r=je(n)?1:Xp(n)?128:d_(n)?64:Oe(n)?4:fe(n)?2:0;return r&4&&Ao(n)&&(n=_e(n),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,t,a,o,i,r,l,!0)}function H(n){return n?Ao(n)||ci in n?We({},n):n:null}function lt(n,t,a=!1){const{props:o,ref:i,patchFlag:l,children:r}=n,c=t?G(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&bd(c),ref:t&&t.ref?a&&i?ue(i)?i.concat(ko(t)):[i,ko(t)]:ko(t):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l===-1&&ue(r)?r.map(yd):r,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ae?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&lt(n.ssContent),ssFallback:n.ssFallback&&lt(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function yd(n){const t=lt(n);return ue(n.children)&&(t.children=n.children.map(yd)),t}function s(n=" ",t=0){return C(Vs,null,n,t)}function ke(n="",t=!1){return t?(k(),M(hn,null,n)):C(hn,null,n)}function Un(n){return n==null||typeof n=="boolean"?C(hn):ue(n)?C(Ae,null,n.slice()):typeof n=="object"?$t(n):C(Vs,null,String(n))}function $t(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:lt(n)}function kr(n,t){let a=0;const{shapeFlag:o}=n;if(t==null)t=null;else if(ue(t))a=16;else if(typeof t=="object")if(o&65){const i=t.default;i&&(i._c&&(i._d=!1),kr(n,i()),i._c&&(i._d=!0));return}else{a=32;const i=t._;!i&&!(ci in t)?t._ctx=Xe:i===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else fe(t)?(t={default:t,_ctx:Xe},a=32):(t=String(t),o&64?(a=16,t=[s(t)]):a=8);n.children=t,n.shapeFlag|=a}function G(...n){const t={};for(let a=0;a<n.length;a++){const o=n[a];for(const i in o)if(i==="class")t.class!==o.class&&(t.class=Ve([t.class,o.class]));else if(i==="style")t.style=tn([t.style,o.style]);else if(Fs(i)){const l=t[i],r=o[i];r&&l!==r&&!(ue(l)&&l.includes(r))&&(t[i]=l?[].concat(l,r):r)}else i!==""&&(t[i]=o[i])}return t}function Pn(n,t,a,o=null){qn(n,t,7,[a,o])}const k_=pd();let b_=0;function y_(n,t,a){const o=n.type,i=(t?t.appContext:n.appContext)||k_,l={uid:b_++,vnode:n,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:md(o,i),emitsOptions:Zp(o,i),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:o.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=Ng(l),l.root=t?t.root:l,l.emit=gg.bind(null,l),n.ce&&n.ce(l),l}let Ye=null;const xn=()=>Ye||Xe;let br,xa,wc="__VUE_INSTANCE_SETTERS__";(xa=Mo()[wc])||(xa=Mo()[wc]=[]),xa.push(n=>Ye=n),br=n=>{xa.length>1?xa.forEach(t=>t(n)):xa[0](n)};const Pa=n=>{br(n),n.scope.on()},ma=()=>{Ye&&Ye.scope.off(),br(null)},w_=Dt("slot,component");function pl(n,t){const a=t.isNativeTag||gp;(w_(n)||a(n))&&V("Do not use built-in or reserved HTML elements as component id: "+n)}function wd(n){return n.vnode.shapeFlag&4}let Ls=!1;function T_(n,t=!1){Ls=t;const{props:a,children:o}=n.vnode,i=wd(n);Zg(n,a,i,t),i_(n,o);const l=i?x_(n,t):void 0;return Ls=!1,l}function x_(n,t){var a;const o=n.type;{if(o.name&&pl(o.name,n.appContext.config),o.components){const l=Object.keys(o.components);for(let r=0;r<l.length;r++)pl(l[r],n.appContext.config)}if(o.directives){const l=Object.keys(o.directives);for(let r=0;r<l.length;r++)nd(l[r])}o.compilerOptions&&z_()&&V('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=ni(new Proxy(n.ctx,cd)),qg(n);const{setup:i}=o;if(i){const l=n.setupContext=i.length>1?xd(n):null;Pa(n),va();const r=gt(i,n,0,[ss(n.props),l]);if(ka(),ma(),er(r)){if(r.then(ma,ma),t)return r.then(c=>{Tc(n,c,t)}).catch(c=>{ti(c,n,0)});if(n.asyncDep=r,!n.suspense){const c=(a=o.name)!=null?a:"Anonymous";V(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Tc(n,r,t)}else Td(n,t)}function Tc(n,t,a){fe(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Oe(t)?(Ft(t)&&V("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=t,n.setupState=qp(t),Fg(n)):t!==void 0&&V(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Td(n,a)}let dl;const z_=()=>!dl;function Td(n,t,a){const o=n.type;if(!n.render){if(!t&&dl&&!o.render){const i=o.template||_r(n).template;if(i){ut(n,"compile");const{isCustomElement:l,compilerOptions:r}=n.appContext.config,{delimiters:c,compilerOptions:u}=o,p=We(We({isCustomElement:l,delimiters:c},r),u);o.render=dl(i,p),pt(n,"compile")}}n.render=o.render||yn}Pa(n),va(),Bg(n),ka(),ma(),!o.render&&n.render===yn&&!t&&(o.template?V('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):V("Component is missing template or render function."))}function $_(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(t,a){return So(),cn(n,"get","$attrs"),t[a]},set(){return V("setupContext.attrs is readonly."),!1},deleteProperty(){return V("setupContext.attrs is readonly."),!1}}))}function M_(n){return n.slotsProxy||(n.slotsProxy=new Proxy(n.slots,{get(t,a){return cn(n,"get","$slots"),t[a]}}))}function xd(n){return Object.freeze({get attrs(){return $_(n)},get slots(){return M_(n)},get emit(){return(a,...o)=>n.emit(a,...o)},expose:a=>{if(n.exposed&&V("expose() should be called only once per setup()."),a!=null){let o=typeof a;o==="object"&&(ue(a)?o="array":Ie(a)&&(o="ref")),o!=="object"&&V(`expose() should be passed a plain object, received ${o}.`)}n.exposed=a||{}}})}function ui(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(qp(ni(n.exposed)),{get(t,a){if(a in t)return t[a];if(a in da)return da[a](n)},has(t,a){return a in t||a in da}}))}const L_=/(?:^|[-_])(\w)/g,E_=n=>n.replace(L_,t=>t.toUpperCase()).replace(/[-_]/g,"");function Es(n,t=!0){return fe(n)?n.displayName||n.name:n.name||t&&n.__name}function pi(n,t,a=!1){let o=Es(t);if(!o&&t.__file){const i=t.__file.match(/([^/\\]+)\.\w+$/);i&&(o=i[1])}if(!o&&n&&n.parent){const i=l=>{for(const r in l)if(l[r]===t)return r};o=i(n.components||n.parent.type.components)||i(n.appContext.components)}return o?E_(o):a?"App":"Anonymous"}function zd(n){return fe(n)&&"__vccOpts"in n}const W=(n,t)=>Gh(n,t,Ls);function Tn(n,t,a){const o=arguments.length;return o===2?Oe(t)&&!ue(t)?Ft(t)?C(n,null,[t]):C(n,t):C(n,null,t):(o>3?a=Array.prototype.slice.call(arguments,2):o===3&&Ft(a)&&(a=[a]),C(n,t,a))}const C_=Symbol.for("v-scx"),A_=()=>{{const n=$(C_);return n||V("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function wi(n){return!!(n&&n.__v_isShallow)}function I_(){if(typeof window>"u")return;const n={style:"color:#3ba776"},t={style:"color:#0b1bc9"},a={style:"color:#b62e24"},o={style:"color:#9d288c"},i={header(m){return Oe(m)?m.__isVue?["div",n,"VueInstance"]:Ie(m)?["div",{},["span",n,d(m)],"<",c(m.value),">"]:ua(m)?["div",{},["span",n,wi(m)?"ShallowReactive":"Reactive"],"<",c(m),`>${qt(m)?" (readonly)":""}`]:qt(m)?["div",{},["span",n,wi(m)?"ShallowReadonly":"Readonly"],"<",c(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...l(m.$)]}};function l(m){const f=[];m.type.props&&m.props&&f.push(r("props",_e(m.props))),m.setupState!==Fe&&f.push(r("setup",m.setupState)),m.data!==Fe&&f.push(r("data",_e(m.data)));const h=u(m,"computed");h&&f.push(r("computed",h));const g=u(m,"inject");return g&&f.push(r("injected",g)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),f}function r(m,f){return f=We({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",o,h+": "],c(f[h],!1)])]]:["span",{}]}function c(m,f=!0){return typeof m=="number"?["span",t,m]:typeof m=="string"?["span",a,JSON.stringify(m)]:typeof m=="boolean"?["span",o,m]:Oe(m)?["object",{object:f?_e(m):m}]:["span",a,String(m)]}function u(m,f){const h=m.type;if(fe(h))return;const g={};for(const w in m.ctx)p(h,w,f)&&(g[w]=m.ctx[w]);return g}function p(m,f,h){const g=m[h];if(ue(g)&&g.includes(f)||Oe(g)&&f in g||m.extends&&p(m.extends,f,h)||m.mixins&&m.mixins.some(w=>p(w,f,h)))return!0}function d(m){return wi(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(i):window.devtoolsFormatters=[i]}const qo="3.3.4",S_="http://www.w3.org/2000/svg",ea=typeof document<"u"?document:null,xc=ea&&ea.createElement("template"),O_={insert:(n,t,a)=>{t.insertBefore(n,a||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,a,o)=>{const i=t?ea.createElementNS(S_,n):ea.createElement(n,a?{is:a}:void 0);return n==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:n=>ea.createTextNode(n),createComment:n=>ea.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ea.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,a,o,i,l){const r=a?a.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),a),!(i===l||!(i=i.nextSibling)););else{xc.innerHTML=o?`<svg>${n}</svg>`:n;const c=xc.content;if(o){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,a)}return[r?r.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}};function H_(n,t,a){const o=n._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?n.removeAttribute("class"):a?n.setAttribute("class",t):n.className=t}function P_(n,t,a){const o=n.style,i=je(a);if(a&&!i){if(t&&!je(t))for(const l in t)a[l]==null&&ml(o,l,"");for(const l in a)ml(o,l,a[l])}else{const l=o.display;i?t!==a&&(o.cssText=a):t&&n.removeAttribute("style"),"_vod"in n&&(o.display=l)}}const R_=/[^\\];\s*$/,zc=/\s*!important$/;function ml(n,t,a){if(ue(a))a.forEach(o=>ml(n,t,o));else if(a==null&&(a=""),R_.test(a)&&V(`Unexpected semicolon at the end of '${t}' style value: '${a}'`),t.startsWith("--"))n.setProperty(t,a);else{const o=N_(n,t);zc.test(a)?n.setProperty(_t(o),a.replace(zc,""),"important"):n[o]=a}}const $c=["Webkit","Moz","ms"],Ti={};function N_(n,t){const a=Ti[t];if(a)return a;let o=st(t);if(o!=="filter"&&o in n)return Ti[t]=o;o=ga(o);for(let i=0;i<$c.length;i++){const l=$c[i]+o;if(l in n)return Ti[t]=l}return t}const Mc="http://www.w3.org/1999/xlink";function q_(n,t,a,o,i){if(o&&t.startsWith("xlink:"))a==null?n.removeAttributeNS(Mc,t.slice(6,t.length)):n.setAttributeNS(Mc,t,a);else{const l=rh(t);a==null||l&&!yp(a)?n.removeAttribute(t):n.setAttribute(t,l?"":a)}}function F_(n,t,a,o,i,l,r){if(t==="innerHTML"||t==="textContent"){o&&r(o,i,l),n[t]=a??"";return}const c=n.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){n._value=a;const p=c==="OPTION"?n.getAttribute("value"):n.value,d=a??"";p!==d&&(n.value=d),a==null&&n.removeAttribute(t);return}let u=!1;if(a===""||a==null){const p=typeof n[t];p==="boolean"?a=yp(a):a==null&&p==="string"?(a="",u=!0):p==="number"&&(a=0,u=!0)}try{n[t]=a}catch(p){u||V(`Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${a} is invalid.`,p)}u&&n.removeAttribute(t)}function W_(n,t,a,o){n.addEventListener(t,a,o)}function D_(n,t,a,o){n.removeEventListener(t,a,o)}function j_(n,t,a,o,i=null){const l=n._vei||(n._vei={}),r=l[t];if(o&&r)r.value=o;else{const[c,u]=B_(t);if(o){const p=l[t]=K_(o,i);W_(n,c,p,u)}else r&&(D_(n,c,r,u),l[t]=void 0)}}const Lc=/(?:Once|Passive|Capture)$/;function B_(n){let t;if(Lc.test(n)){t={};let o;for(;o=n.match(Lc);)n=n.slice(0,n.length-o[0].length),t[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_t(n.slice(2)),t]}let xi=0;const V_=Promise.resolve(),U_=()=>xi||(V_.then(()=>xi=0),xi=Date.now());function K_(n,t){const a=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=a.attached)return;qn(G_(o,a.value),t,5,[o])};return a.value=n,a.attached=U_(),a}function G_(n,t){if(ue(t)){const a=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{a.call(n),n._stopped=!0},t.map(o=>i=>!i._stopped&&o&&o(i))}else return t}const Ec=/^on[a-z]/,Q_=(n,t,a,o,i=!1,l,r,c,u)=>{t==="class"?H_(n,o,i):t==="style"?P_(n,a,o):Fs(t)?zo(t)||j_(n,t,a,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):J_(n,t,o,i))?F_(n,t,o,l,r,c,u):(t==="true-value"?n._trueValue=o:t==="false-value"&&(n._falseValue=o),q_(n,t,o,i))};function J_(n,t,a,o){return o?!!(t==="innerHTML"||t==="textContent"||t in n&&Ec.test(t)&&fe(a)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||Ec.test(t)&&je(a)?!1:t in n}function $d(n){const t=xn();if(!t){V("useCssVars is called without current active component instance.");return}const a=t.ut=(i=n(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(l=>hl(l,i))},o=()=>{const i=n(t.proxy);fl(t.subTree,i),a(i)};Tg(o),bt(()=>{const i=new MutationObserver(o);i.observe(t.subTree.el.parentNode,{childList:!0}),Bs(()=>i.disconnect())})}function fl(n,t){if(n.shapeFlag&128){const a=n.suspense;n=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{fl(a.activeBranch,t)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)hl(n.el,t);else if(n.type===Ae)n.children.forEach(a=>fl(a,t));else if(n.type===ps){let{el:a,anchor:o}=n;for(;a&&(hl(a,t),a!==o);)a=a.nextSibling}}function hl(n,t){if(n.nodeType===1){const a=n.style;for(const o in t)a.setProperty(`--${o}`,t[o])}}const wt="transition",Ua="animation",Md={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Z_=We({},$g,Md),Kt=(n,t=[])=>{ue(n)?n.forEach(a=>a(...t)):n&&n(...t)},Cc=n=>n?ue(n)?n.some(t=>t.length>1):n.length>1:!1;function Y_(n){const t={};for(const X in n)X in Md||(t[X]=n[X]);if(n.css===!1)return t;const{name:a="v",type:o,duration:i,enterFromClass:l=`${a}-enter-from`,enterActiveClass:r=`${a}-enter-active`,enterToClass:c=`${a}-enter-to`,appearFromClass:u=l,appearActiveClass:p=r,appearToClass:d=c,leaveFromClass:m=`${a}-leave-from`,leaveActiveClass:f=`${a}-leave-active`,leaveToClass:h=`${a}-leave-to`}=n,g=X_(i),w=g&&g[0],T=g&&g[1],{onBeforeEnter:x,onEnter:z,onEnterCancelled:b,onLeave:S,onLeaveCancelled:A,onBeforeAppear:N=x,onAppear:B=z,onAppearCancelled:F=b}=t,K=(X,ve,ye)=>{xt(X,ve?d:c),xt(X,ve?p:r),ye&&ye()},ie=(X,ve)=>{X._isLeaving=!1,xt(X,m),xt(X,h),xt(X,f),ve&&ve()},me=X=>(ve,ye)=>{const Te=X?B:z,Re=()=>K(ve,X,ye);Kt(Te,[ve,Re]),Ac(()=>{xt(ve,X?u:l),dt(ve,X?d:c),Cc(Te)||Ic(ve,o,w,Re)})};return We(t,{onBeforeEnter(X){Kt(x,[X]),dt(X,l),dt(X,r)},onBeforeAppear(X){Kt(N,[X]),dt(X,u),dt(X,p)},onEnter:me(!1),onAppear:me(!0),onLeave(X,ve){X._isLeaving=!0;const ye=()=>ie(X,ve);dt(X,m),Ed(),dt(X,f),Ac(()=>{X._isLeaving&&(xt(X,m),dt(X,h),Cc(S)||Ic(X,o,T,ye))}),Kt(S,[X,ye])},onEnterCancelled(X){K(X,!1),Kt(b,[X])},onAppearCancelled(X){K(X,!0),Kt(F,[X])},onLeaveCancelled(X){ie(X),Kt(A,[X])}})}function X_(n){if(n==null)return null;if(Oe(n))return[zi(n.enter),zi(n.leave)];{const t=zi(n);return[t,t]}}function zi(n){const t=Xf(n);return Xh(t,"<transition> explicit duration"),t}function dt(n,t){t.split(/\s+/).forEach(a=>a&&n.classList.add(a)),(n._vtc||(n._vtc=new Set)).add(t)}function xt(n,t){t.split(/\s+/).forEach(o=>o&&n.classList.remove(o));const{_vtc:a}=n;a&&(a.delete(t),a.size||(n._vtc=void 0))}function Ac(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let ev=0;function Ic(n,t,a,o){const i=n._endId=++ev,l=()=>{i===n._endId&&o()};if(a)return setTimeout(l,a);const{type:r,timeout:c,propCount:u}=Ld(n,t);if(!r)return o();const p=r+"end";let d=0;const m=()=>{n.removeEventListener(p,f),l()},f=h=>{h.target===n&&++d>=u&&m()};setTimeout(()=>{d<u&&m()},c+1),n.addEventListener(p,f)}function Ld(n,t){const a=window.getComputedStyle(n),o=g=>(a[g]||"").split(", "),i=o(`${wt}Delay`),l=o(`${wt}Duration`),r=Sc(i,l),c=o(`${Ua}Delay`),u=o(`${Ua}Duration`),p=Sc(c,u);let d=null,m=0,f=0;t===wt?r>0&&(d=wt,m=r,f=l.length):t===Ua?p>0&&(d=Ua,m=p,f=u.length):(m=Math.max(r,p),d=m>0?r>p?wt:Ua:null,f=d?d===wt?l.length:u.length:0);const h=d===wt&&/\b(transform|all)(,|$)/.test(o(`${wt}Property`).toString());return{type:d,timeout:m,propCount:f,hasTransform:h}}function Sc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((a,o)=>Oc(a)+Oc(n[o])))}function Oc(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function Ed(){return document.body.offsetHeight}const Cd=new WeakMap,Ad=new WeakMap,Id={name:"TransitionGroup",props:We({},Z_,{tag:String,moveClass:String}),setup(n,{slots:t}){const a=xn(),o=zg();let i,l;return ri(()=>{if(!i.length)return;const r=n.moveClass||`${n.name||"v"}-move`;if(!iv(i[0].el,a.vnode.el,r))return;i.forEach(av),i.forEach(sv);const c=i.filter(ov);Ed(),c.forEach(u=>{const p=u.el,d=p.style;dt(p,r),d.transform=d.webkitTransform=d.transitionDuration="";const m=p._moveCb=f=>{f&&f.target!==p||(!f||/transform$/.test(f.propertyName))&&(p.removeEventListener("transitionend",m),p._moveCb=null,xt(p,r))};p.addEventListener("transitionend",m)})}),()=>{const r=_e(n),c=Y_(r);let u=r.tag||Ae;i=l,l=t.default?ad(t.default()):[];for(let p=0;p<l.length;p++){const d=l[p];d.key!=null?Oo(d,tl(d,c,o,a)):V("<TransitionGroup> children must be keyed.")}if(i)for(let p=0;p<i.length;p++){const d=i[p];Oo(d,tl(d,c,o,a)),Cd.set(d,d.el.getBoundingClientRect())}return C(u,null,l)}}},nv=n=>delete n.mode;Id.props;const tv=Id;function av(n){const t=n.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function sv(n){Ad.set(n,n.el.getBoundingClientRect())}function ov(n){const t=Cd.get(n),a=Ad.get(n),o=t.left-a.left,i=t.top-a.top;if(o||i){const l=n.el.style;return l.transform=l.webkitTransform=`translate(${o}px,${i}px)`,l.transitionDuration="0s",n}}function iv(n,t,a){const o=n.cloneNode();n._vtc&&n._vtc.forEach(r=>{r.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),a.split(/\s+/).forEach(r=>r&&o.classList.add(r)),o.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(o);const{hasTransform:l}=Ld(o);return i.removeChild(o),l}const lv=["ctrl","shift","alt","meta"],rv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>lv.some(a=>n[`${a}Key`]&&!t.includes(a))},cv=(n,t)=>(a,...o)=>{for(let i=0;i<t.length;i++){const l=rv[t[i]];if(l&&l(a,t))return}return n(a,...o)},uv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},so=(n,t)=>a=>{if(!("key"in a))return;const o=_t(a.key);if(t.some(i=>i===o||uv[i]===o))return n(a)},Sd={beforeMount(n,{value:t},{transition:a}){n._vod=n.style.display==="none"?"":n.style.display,a&&t?a.beforeEnter(n):Ka(n,t)},mounted(n,{value:t},{transition:a}){a&&t&&a.enter(n)},updated(n,{value:t,oldValue:a},{transition:o}){!t!=!a&&(o?t?(o.beforeEnter(n),Ka(n,!0),o.enter(n)):o.leave(n,()=>{Ka(n,!1)}):Ka(n,t))},beforeUnmount(n,{value:t}){Ka(n,t)}};function Ka(n,t){n.style.display=t?n._vod:"none"}const pv=We({patchProp:Q_},O_);let Hc;function dv(){return Hc||(Hc=c_(pv))}const mv=(...n)=>{const t=dv().createApp(...n);fv(t),hv(t);const{mount:a}=t;return t.mount=o=>{const i=gv(o);if(!i)return;const l=t._component;!fe(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.innerHTML="";const r=a(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function fv(n){Object.defineProperty(n.config,"isNativeTag",{value:t=>bp(t)||ih(t),writable:!1})}function hv(n){{const t=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return t},set(){V("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const a=n.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(n.config,"compilerOptions",{get(){return V(o),a},set(){V(o)}})}}function gv(n){if(je(n)){const t=document.querySelector(n);return t||V(`Failed to mount app: mount target selector "${n}" returned null.`),t}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&V('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function _v(){I_()}_v();function gl(n,t={},a){for(const o in n){const i=n[o],l=a?`${a}:${o}`:o;typeof i=="object"&&i!==null?gl(i,t,l):typeof i=="function"&&(t[l]=i)}return t}const vv={run:n=>n()},kv=()=>vv,Od=typeof console.createTask<"u"?console.createTask:kv;function bv(n,t){const a=t.shift(),o=Od(a);return n.reduce((i,l)=>i.then(()=>o.run(()=>l(...t))),Promise.resolve())}function yv(n,t){const a=t.shift(),o=Od(a);return Promise.all(n.map(i=>o.run(()=>i(...t))))}function $i(n,t){for(const a of[...n])a(t)}class wv{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,a,o={}){if(!t||typeof a!="function")return()=>{};const i=t;let l;for(;this._deprecatedHooks[t];)l=this._deprecatedHooks[t],t=l.to;if(l&&!o.allowDeprecated){let r=l.message;r||(r=`${i} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!a.name)try{Object.defineProperty(a,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(a),()=>{a&&(this.removeHook(t,a),a=void 0)}}hookOnce(t,a){let o,i=(...l)=>(typeof o=="function"&&o(),o=void 0,i=void 0,a(...l));return o=this.hook(t,i),o}removeHook(t,a){if(this._hooks[t]){const o=this._hooks[t].indexOf(a);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,a){this._deprecatedHooks[t]=typeof a=="string"?{to:a}:a;const o=this._hooks[t]||[];delete this._hooks[t];for(const i of o)this.hook(t,i)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const a in t)this.deprecateHook(a,t[a])}addHooks(t){const a=gl(t),o=Object.keys(a).map(i=>this.hook(i,a[i]));return()=>{for(const i of o.splice(0,o.length))i()}}removeHooks(t){const a=gl(t);for(const o in a)this.removeHook(o,a[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...a){return a.unshift(t),this.callHookWith(bv,t,...a)}callHookParallel(t,...a){return a.unshift(t),this.callHookWith(yv,t,...a)}callHookWith(t,a,...o){const i=this._before||this._after?{name:a,args:o,context:{}}:void 0;this._before&&$i(this._before,i);const l=t(a in this._hooks?[...this._hooks[a]]:[],o);return l instanceof Promise?l.finally(()=>{this._after&&i&&$i(this._after,i)}):(this._after&&i&&$i(this._after,i),l)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const a=this._before.indexOf(t);a!==-1&&this._before.splice(a,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const a=this._after.indexOf(t);a!==-1&&this._after.splice(a,1)}}}}function Tv(){return new wv}function xv(n){return Array.isArray(n)?n:[n]}const Hd=["title","script","style","noscript"],Pd=["base","meta","link","style","script","noscript"],zv=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],$v=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Mv=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Rd(n){let t=9;for(let a=0;a<n.length;)t=Math.imul(t^n.charCodeAt(a++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function _l(n){return Rd(`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([t,a])=>`${t}:${String(a)}`).join(",")}`)}function Lv(n){let t=9;for(const a of n)for(let o=0;o<a.length;)t=Math.imul(t^a.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Nd(n,t){const{props:a,tag:o}=n;if($v.includes(o))return o;if(o==="link"&&a.rel==="canonical")return"canonical";if(a.charset)return"charset";const i=["id"];o==="meta"&&i.push("name","property","http-equiv");for(const l of i)if(typeof a[l]<"u"){const r=String(a[l]);return t&&!t(r)?!1:`${o}:${l}:${r}`}return!1}function Pc(n,t){return n==null?t||null:typeof n=="function"?n(t):n}function oo(n,t=!1,a){const{tag:o,$el:i}=n;i&&(Object.entries(o.props).forEach(([l,r])=>{r=String(r);const c=`attr:${l}`;if(l==="class"){if(!r)return;for(const u of r.split(" ")){const p=`${c}:${u}`;a&&a(n,p,()=>i.classList.remove(u)),i.classList.contains(u)||i.classList.add(u)}return}a&&!l.startsWith("data-h-")&&a(n,c,()=>i.removeAttribute(l)),(t||i.getAttribute(l)!==r)&&i.setAttribute(l,r)}),Hd.includes(o.tag)&&(o.textContent&&o.textContent!==i.textContent?i.textContent=o.textContent:o.innerHTML&&o.innerHTML!==i.innerHTML&&(i.innerHTML=o.innerHTML)))}let Ga=!1;async function qd(n,t={}){var f,h;const a={shouldRender:!0};if(await n.hooks.callHook("dom:beforeRender",a),!a.shouldRender)return;const o=t.document||n.resolvedOptions.document||window.document,i=(await n.resolveTags()).map(c);if(n.resolvedOptions.experimentalHashHydration&&(Ga=Ga||n._hash||!1,Ga)){const g=Lv(i.map(w=>w.tag._h));if(Ga===g)return;Ga=g}const l=n._popSideEffectQueue();n.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([w,T])=>{l[w]=T})});const r=(g,w,T)=>{w=`${g.renderId}:${w}`,g.entry&&(g.entry._sde[w]=T),delete l[w]};function c(g){const w=n.headEntries().find(x=>x._i===g._e),T={renderId:g._d||_l(g),$el:null,shouldRender:!0,tag:g,entry:w,markSideEffect:(x,z)=>r(T,x,z)};return T}const u=[],p={body:[],head:[]},d=g=>{n._elMap[g.renderId]=g.$el,u.push(g),r(g,"el",()=>{var w;(w=g.$el)==null||w.remove(),delete n._elMap[g.renderId]})};for(const g of i){if(await n.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:w}=g;if(w.tag==="title"){o.title=w.textContent||"",u.push(g);continue}if(w.tag==="htmlAttrs"||w.tag==="bodyAttrs"){g.$el=o[w.tag==="htmlAttrs"?"documentElement":"body"],oo(g,!1,r),u.push(g);continue}if(g.$el=n._elMap[g.renderId],!g.$el&&w.key&&(g.$el=o.querySelector(`${(f=w.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${w.tag}[data-h-${w._h}]`)),g.$el){g.tag._d&&oo(g),d(g);continue}p[(h=w.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(g)}const m={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([g,w])=>{var x;if(!w.length)return;const T=(x=o==null?void 0:o[g])==null?void 0:x.children;if(T){for(const z of[...T].reverse()){const b=z.tagName.toLowerCase();if(!Pd.includes(b))continue;const S=z.getAttributeNames().reduce((F,K)=>({...F,[K]:z.getAttribute(K)}),{}),A={tag:b,props:S};z.innerHTML&&(A.innerHTML=z.innerHTML);const N=_l(A);let B=w.findIndex(F=>(F==null?void 0:F.renderId)===N);if(B===-1){const F=Nd(A);B=w.findIndex(K=>(K==null?void 0:K.tag._d)&&K.tag._d===F)}if(B!==-1){const F=w[B];F.$el=z,oo(F),d(F),delete w[B]}}w.forEach(z=>{const b=z.tag.tagPosition||"head";m[b]=m[b]||o.createDocumentFragment(),z.$el||(z.$el=o.createElement(z.tag.tag),oo(z,!0)),m[b].appendChild(z.$el),d(z)})}}),m.head&&o.head.appendChild(m.head),m.bodyOpen&&o.body.insertBefore(m.bodyOpen,o.body.firstChild),m.bodyClose&&o.body.appendChild(m.bodyClose);for(const g of u)await n.hooks.callHook("dom:renderTag",g);Object.values(l).forEach(g=>g())}let Mi=null;async function Fd(n,t={}){function a(){return Mi=null,qd(n,t)}const o=t.delayFn||(i=>setTimeout(i,10));return Mi=Mi||new Promise(i=>o(()=>i(a())))}function Ev(n){return{hooks:{"entries:updated":function(t){if(typeof(n==null?void 0:n.document)>"u"&&typeof window>"u")return;let a=n==null?void 0:n.delayFn;!a&&typeof requestAnimationFrame<"u"&&(a=requestAnimationFrame),Fd(t,{document:(n==null?void 0:n.document)||window.document,delayFn:a})}}}}function Cv(n){var t;return((t=n==null?void 0:n.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const Rc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Nc(n){if(typeof n.tagPriority=="number")return n.tagPriority;if(n.tag==="meta"){if(n.props.charset)return-2;if(n.props["http-equiv"]==="content-security-policy")return 0}const t=n.tagPriority||n.tag;return t in Rc?Rc[t]:10}const Av=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Iv(){return{hooks:{"tags:resolve":n=>{const t=a=>{var o;return(o=n.tags.find(i=>i._d===a))==null?void 0:o._p};for(const{prefix:a,offset:o}of Av)for(const i of n.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(a))){const l=t(i.tagPriority.replace(a,""));typeof l<"u"&&(i._p=l+o)}n.tags.sort((a,o)=>a._p-o._p).sort((a,o)=>Nc(a)-Nc(o))}}}}function Sv(){return{hooks:{"tags:resolve":n=>{const{tags:t}=n;let a=t.findIndex(i=>i.tag==="titleTemplate");const o=t.findIndex(i=>i.tag==="title");if(o!==-1&&a!==-1){const i=Pc(t[a].textContent,t[o].textContent);i!==null?t[o].textContent=i||t[o].textContent:delete t[o]}else if(a!==-1){const i=Pc(t[a].textContent);i!==null&&(t[a].textContent=i,t[a].tag="title",a=-1)}a!==-1&&delete t[a],n.tags=t.filter(Boolean)}}}}function Ov(){return{hooks:{"tag:normalise":function({tag:n}){typeof n.props.body<"u"&&(n.tagPosition="bodyClose",delete n.props.body)}}}}const Hv=["link","style","script","noscript"];function Pv(){return{hooks:{"tag:normalise":({tag:n,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(n._h=_l(n)),n.key&&Hv.includes(n.tag)&&(n._h=Rd(n.key),n.props[`data-h-${n._h}`]="")}}}}const qc=["script","link","bodyAttrs"];function Rv(){const n=(t,a)=>{const o={},i={};Object.entries(a.props).forEach(([r,c])=>{r.startsWith("on")&&typeof c=="function"?i[r]=c:o[r]=c});let l;return t==="dom"&&a.tag==="script"&&typeof o.src=="string"&&typeof i.onload<"u"&&(l=o.src,delete o.src),{props:o,eventHandlers:i,delayedSrc:l}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(a=>(!qc.includes(a.tag)||!Object.entries(a.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function")||(a.props=n("ssr",a).props),a))},"dom:beforeRenderTag":function(t){if(!qc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([l,r])=>l.startsWith("on")&&typeof r=="function"))return;const{props:a,eventHandlers:o,delayedSrc:i}=n("dom",t.tag);Object.keys(o).length&&(t.tag.props=a,t.tag._eventHandlers=o,t.tag._delayedSrc=i)},"dom:renderTag":function(t){const a=t.$el;if(!t.tag._eventHandlers||!a)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:a;Object.entries(t.tag._eventHandlers).forEach(([i,l])=>{const r=`${t.tag._d||t.tag._p}:${i}`,c=i.slice(2).toLowerCase(),u=`data-h-${c}`;if(t.markSideEffect(r,()=>{}),a.hasAttribute(u))return;const p=l;a.setAttribute(u,""),o.addEventListener(c,p),t.entry&&(t.entry._sde[r]=()=>{o.removeEventListener(c,p),a.removeAttribute(u)})}),t.tag._delayedSrc&&a.setAttribute("src",t.tag._delayedSrc)}}}}const Nv=["templateParams","htmlAttrs","bodyAttrs"];function qv(){return{hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(o=>{n.props[o]&&(n.key=n.props[o],delete n.props[o])});const a=Nd(n)||(n.key?`${n.tag}:${n.key}`:!1);a&&(n._d=a)},"tags:resolve":function(n){const t={};n.tags.forEach(o=>{const i=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,l=t[i];if(l){let c=o==null?void 0:o.tagDuplicateStrategy;if(!c&&Nv.includes(o.tag)&&(c="merge"),c==="merge"){const u=l.props;["class","style"].forEach(p=>{o.props[p]&&u[p]&&(p==="style"&&!u[p].endsWith(";")&&(u[p]+=";"),o.props[p]=`${u[p]} ${o.props[p]}`)}),t[i].props={...u,...o.props};return}else if(o._e===l._e){l._duped=l._duped||[],o._d=`${l._d}:${l._duped.length+1}`,l._duped.push(o);return}}const r=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(Pd.includes(o.tag)&&r===0){delete t[i];return}t[i]=o});const a=[];Object.values(t).forEach(o=>{const i=o._duped;delete o._duped,a.push(o),i&&a.push(...i)}),n.tags=a}}}}function io(n,t){function a(l){if(["s","pageTitle"].includes(l))return t.pageTitle;let r;return l.includes(".")?r=l.split(".").reduce((c,u)=>c&&c[u]||void 0,t):r=t[l],typeof r<"u"?r||"":!1}let o=n;try{o=decodeURI(n)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const r=a(l.slice(1));typeof r=="string"&&(n=n.replace(new RegExp(`\\${l}(\\W|$)`,"g"),`${r}$1`).trim())}),t.separator&&(n.endsWith(t.separator)&&(n=n.slice(0,-t.separator.length).trim()),n.startsWith(t.separator)&&(n=n.slice(t.separator.length).trim()),n=n.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),n}function Fv(){return{hooks:{"tags:resolve":n=>{var l;const{tags:t}=n,a=(l=t.find(r=>r.tag==="title"))==null?void 0:l.textContent,o=t.findIndex(r=>r.tag==="templateParams"),i=o!==-1?t[o].props:{};i.pageTitle=i.pageTitle||a||"";for(const r of t)if(["titleTemplate","title"].includes(r.tag)&&typeof r.textContent=="string")r.textContent=io(r.textContent,i);else if(r.tag==="meta"&&typeof r.props.content=="string")r.props.content=io(r.props.content,i);else if(r.tag==="link"&&typeof r.props.href=="string")r.props.href=io(r.props.href,i);else if(r.tag==="script"&&["application/json","application/ld+json"].includes(r.props.type)&&typeof r.innerHTML=="string")try{r.innerHTML=JSON.stringify(JSON.parse(r.innerHTML),(c,u)=>typeof u=="string"?io(u,i):u)}catch{}n.tags=t.filter(r=>r.tag!=="templateParams")}}}}const Wv=typeof window<"u";let Wd;function Dv(n){return Wd=n}function jv(){return Wd}async function Bv(n,t){const a={tag:n,props:{}};return n==="templateParams"?(a.props=t,a):["title","titleTemplate"].includes(n)?(a.textContent=t instanceof Promise?await t:t,a):typeof t=="string"?["script","noscript","style"].includes(n)?(n==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?a.props.src=t:a.innerHTML=t,a):!1:(a.props=await Uv(n,{...t}),a.props.children&&(a.props.innerHTML=a.props.children),delete a.props.children,Object.keys(a.props).filter(o=>Mv.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Hd.includes(a.tag))&&(a[o]=a.props[o]),delete a.props[o]}),["innerHTML","textContent"].forEach(o=>{if(a.tag==="script"&&typeof a[o]=="string"&&["application/ld+json","application/json"].includes(a.props.type))try{a[o]=JSON.parse(a[o])}catch{a[o]=""}typeof a[o]=="object"&&(a[o]=JSON.stringify(a[o]))}),a.props.class&&(a.props.class=Vv(a.props.class)),a.props.content&&Array.isArray(a.props.content)?a.props.content.map(o=>({...a,props:{...a.props,content:o}})):a)}function Vv(n){return typeof n=="object"&&!Array.isArray(n)&&(n=Object.keys(n).filter(t=>n[t])),(Array.isArray(n)?n.join(" "):n).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Uv(n,t){for(const a of Object.keys(t)){const o=a.startsWith("data-");t[a]instanceof Promise&&(t[a]=await t[a]),String(t[a])==="true"?t[a]=o?"true":"":String(t[a])==="false"&&(o?t[a]="false":delete t[a])}return t}const Kv=10;async function Gv(n){const t=[];return Object.entries(n.resolvedInput).filter(([a,o])=>typeof o<"u"&&zv.includes(a)).forEach(([a,o])=>{const i=xv(o);t.push(...i.map(l=>Bv(a,l)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((a,o)=>(a._e=n._i,a._p=(n._i<<Kv)+o,a))}function Qv(){return[qv(),Iv(),Fv(),Sv(),Pv(),Rv(),Ov()]}function Jv(n={}){return[Ev({document:n==null?void 0:n.document,delayFn:n==null?void 0:n.domDelayFn})]}function Zv(n={}){const t=Yv({...n,plugins:[...Jv(n),...(n==null?void 0:n.plugins)||[]]});return n.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Cv(t.resolvedOptions.document)),Dv(t),t}function Yv(n={}){let t=[],a={},o=0;const i=Tv();n!=null&&n.hooks&&i.addHooks(n.hooks),n.plugins=[...Qv(),...(n==null?void 0:n.plugins)||[]],n.plugins.forEach(c=>c.hooks&&i.addHooks(c.hooks)),n.document=n.document||(Wv?document:void 0);const l=()=>i.callHook("entries:updated",r),r={resolvedOptions:n,headEntries(){return t},get hooks(){return i},use(c){c.hooks&&i.addHooks(c.hooks)},push(c,u){const p={_i:o++,input:c,_sde:{}};return u!=null&&u.mode&&(p._m=u==null?void 0:u.mode),u!=null&&u.transform&&(p._t=u==null?void 0:u.transform),t.push(p),l(),{dispose(){t=t.filter(d=>d._i!==p._i?!0:(a={...a,...d._sde||{}},d._sde={},l(),!1))},patch(d){t=t.map(m=>(m._i===p._i&&(p.input=m.input=d,l()),m))}}},async resolveTags(){const c={tags:[],entries:[...t]};await i.callHook("entries:resolve",c);for(const u of c.entries){const p=u._t||(d=>d);if(u.resolvedInput=p(u.resolvedInput||u.input),u.resolvedInput)for(const d of await Gv(u)){const m={tag:d,entry:u,resolvedOptions:r.resolvedOptions};await i.callHook("tag:normalise",m),c.tags.push(m.tag)}}return await i.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...a};return a={},c},_elMap:{}};return r.hooks.callHook("init",r),r}function Xv(n){return typeof n=="function"?n():O(n)}function Fo(n,t=""){if(n instanceof Promise)return n;const a=Xv(n);return!n||!a?a:Array.isArray(a)?a.map(o=>Fo(o,t)):typeof a=="object"?Object.fromEntries(Object.entries(a).map(([o,i])=>o==="titleTemplate"||o.startsWith("on")?[o,O(i)]:[o,Fo(i,o)])):a}const e1=qo.startsWith("3"),n1=typeof window<"u",Dd="usehead";function yr(){return xn()&&$(Dd)||jv()}function t1(n){return{install(a){e1&&(a.config.globalProperties.$unhead=n,a.config.globalProperties.$head=n,a.provide(Dd,n))}}.install}function a1(n={}){const t=Zv({...n,domDelayFn:a=>setTimeout(()=>on(()=>a()),10),plugins:[s1(),...(n==null?void 0:n.plugins)||[]]});return t.install=t1(t),t}function s1(){return{hooks:{"entries:resolve":function(n){for(const t of n.entries)t.resolvedInput=Fo(t.input)}}}}function o1(n,t={}){const a=yr(),o=Y(!1),i=Y({});ba(()=>{i.value=o.value?{}:Fo(n)});const l=a.push(i.value,t);return be(i,c=>{l.patch(c)}),xn()&&(js(()=>{l.dispose()}),id(()=>{o.value=!0}),od(()=>{o.value=!1})),l}function i1(n,t={}){return yr().push(n,t)}function jd(n,t={}){var o;const a=yr();if(a){const i=n1||!!((o=a.resolvedOptions)!=null&&o.document);return t.mode==="server"&&i||t.mode==="client"&&!i?void 0:i?o1(n,t):i1(n,t)}}function l1(n,t){const a=a1(t||{}),o={unhead:a,install(i){qo.startsWith("3")&&(i.config.globalProperties.$head=a,i.provide("usehead",a))},use(i){a.use(i)},resolveTags(){return a.resolveTags()},headEntries(){return a.headEntries()},headTags(){return a.resolveTags()},push(i,l){return a.push(i,l)},addEntry(i,l){return a.push(i,l)},addHeadObjs(i,l){return a.push(i,l)},addReactiveEntry(i,l){const r=jd(i,l);return typeof r<"u"?r.dispose:()=>{}},removeHeadObjs(){},updateDOM(i,l){l?qd(a,{document:i}):Fd(a,{delayFn:r=>setTimeout(()=>r(),50),document:i})},internalHooks:a.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return a.addHeadObjs=o.addHeadObjs,a.updateDOM=o.updateDOM,a.hooks.hook("dom:beforeRender",i=>{for(const l of o.hooks["before:dom"])l()===!1&&(i.shouldRender=!1)}),n&&o.addHeadObjs(n),o}const ms=Symbol("v-click-clicks"),na=Symbol("v-click-clicks-elements"),vl=Symbol("v-click-clicks-order-map"),fs=Symbol("v-click-clicks-disabled"),Bd=Symbol("slidev-slide-scale"),L=Symbol("slidev-slidev-context"),r1=Symbol("slidev-route"),c1=Symbol("slidev-slide-context"),Zt="slidev-vclick-target",Li="slidev-vclick-hidden",u1="slidev-vclick-fade",Ei="slidev-vclick-hidden-explicitly",Qa="slidev-vclick-current",lo="slidev-vclick-prior",p1=["localhost","127.0.0.1"];let d1=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,a)=>(a&=63,a<36?t+=a.toString(36):a<62?t+=(a-26).toString(36).toUpperCase():a>62?t+="-":t+="_",t),"");function kl(n,t){if(!n)return!1;const a=n.indexOf(t);return a>=0?(n.splice(a,1),!0):!1}function m1(...n){let t,a,o;n.length===1?(t=0,o=1,[a]=n):[t,a,o=1]=n;const i=[];let l=t;for(;l<a;)i.push(l),l+=o||1;return i}function f1(n){return n!=null}function h1(n,t){return Object.fromEntries(Object.entries(n).map(([a,o])=>t(a,o)).filter(f1))}const rs={theme:"default",title:"Hyper Text Markup Language",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"/cover.webp",class:"text-center",materia:"TPSI",as:"2025/2026",version:"1.6.0"},Ce=rs,It=Ce.aspectRatio??16/9,St=Ce.canvasWidth??980,wr=Math.ceil(St/It),Tr=W(()=>h1(Ce.themeConfig||{},(n,t)=>[`--slidev-theme-${n}`,t]));function Vd(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Dn(n,t,a){Object.defineProperty(n,t,{value:a,writable:!0,enumerable:!1})}const ya=Be({page:0,clicks:0});let g1=[],_1=[];Dn(ya,"$syncUp",!0);Dn(ya,"$syncDown",!0);Dn(ya,"$paused",!1);Dn(ya,"$onSet",n=>g1.push(n));Dn(ya,"$onPatch",n=>_1.push(n));Vd();Dn(ya,"$patch",async()=>!1);function Ud(n,t,a=!1){const o=[];let i=!1,l=!1,r,c;const u=Be(t);function p(h){o.push(h)}function d(h,g){u[h]!==g&&(clearTimeout(r),i=!0,u[h]=g,r=setTimeout(()=>i=!1,0))}function m(h){i||(clearTimeout(c),l=!0,Object.entries(h).forEach(([g,w])=>{u[g]=w}),c=setTimeout(()=>l=!1,0))}function f(h){let g;a?a&&window.addEventListener("storage",T=>{T&&T.key===h&&T.newValue&&m(JSON.parse(T.newValue))}):(g=new BroadcastChannel(h),g.addEventListener("message",T=>m(T.data)));function w(){!a&&g&&!l?g.postMessage(_e(u)):a&&!l&&window.localStorage.setItem(h,JSON.stringify(u)),i||o.forEach(T=>T(u))}if(be(u,w,{deep:!0,flush:"sync"}),a){const T=window.localStorage.getItem(h);T&&m(JSON.parse(T))}}return{init:f,onPatch:p,patch:d,state:u}}const{init:v1,onPatch:k1,patch:Ja,state:Ci}=Ud(ya,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),wa=Be({});let b1=[],y1=[];Dn(wa,"$syncUp",!0);Dn(wa,"$syncDown",!0);Dn(wa,"$paused",!1);Dn(wa,"$onSet",n=>b1.push(n));Dn(wa,"$onPatch",n=>y1.push(n));Vd();Dn(wa,"$patch",async()=>!1);const{init:w1,onPatch:T1,patch:Kd,state:Wo}=Ud(wa,{},!1),x1="modulepreload",z1=function(n){return"/3/html/"+n},Fc={},Ot=function(t,a,o){if(!a||a.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(a.map(l=>{if(l=z1(l),l in Fc)return;Fc[l]=!0;const r=l.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!o)for(let d=i.length-1;d>=0;d--){const m=i[d];if(m.href===l&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":x1,r||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),r)return new Promise((d,m)=>{p.addEventListener("load",d),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};function $1(n,t){let a,o,i;const l=Y(!0),r=()=>{l.value=!0,i()};be(n,r,{flush:"sync"});const c=typeof t=="function"?t:t.get,u=typeof t=="function"?void 0:t.set,p=ur((d,m)=>(o=d,i=m,{get(){return l.value&&(a=c(),l.value=!1),o(),a},set(f){u==null||u(f)}}));return Object.isExtensible(p)&&(p.trigger=r),p}function rt(n){return ar()?(xp(n),!0):!1}function Ge(n){return typeof n=="function"?n():O(n)}function M1(n){if(!Ie(n))return Be(n);const t=new Proxy({},{get(a,o,i){return O(Reflect.get(n.value,o,i))},set(a,o,i){return Ie(n.value[o])&&!Ie(i)?n.value[o].value=i:n.value[o]=i,!0},deleteProperty(a,o){return Reflect.deleteProperty(n.value,o)},has(a,o){return Reflect.has(n.value,o)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Be(t)}const Qn=typeof window<"u",L1=n=>typeof n<"u",E1=n=>n!=null,C1=Object.prototype.toString,bl=n=>C1.call(n)==="[object Object]",yl=()=>+Date.now(),fa=()=>{},A1=I1();function I1(){var n;return Qn&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function S1(n,t){function a(...o){return new Promise((i,l)=>{Promise.resolve(n(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(i).catch(l)})}return a}const Gd=n=>n();function O1(n=Gd){const t=Y(!0);function a(){t.value=!1}function o(){t.value=!0}const i=(...l)=>{t.value&&n(...l)};return{isActive:Kn(t),pause:a,resume:o,eventFilter:i}}function H1(n,t){var a;if(typeof n=="number")return n+t;const o=((a=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:a[0])||"",i=n.slice(o.length),l=parseFloat(o)+t;return Number.isNaN(l)?n:l+i}function Qd(...n){if(n.length!==1)return Uh(...n);const t=n[0];return typeof t=="function"?Kn(ur(()=>({get:t,set:fa}))):Y(t)}var P1=Object.defineProperty,R1=Object.defineProperties,N1=Object.getOwnPropertyDescriptors,Wc=Object.getOwnPropertySymbols,q1=Object.prototype.hasOwnProperty,F1=Object.prototype.propertyIsEnumerable,Dc=(n,t,a)=>t in n?P1(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,W1=(n,t)=>{for(var a in t||(t={}))q1.call(t,a)&&Dc(n,a,t[a]);if(Wc)for(var a of Wc(t))F1.call(t,a)&&Dc(n,a,t[a]);return n},D1=(n,t)=>R1(n,N1(t));function j1(n){if(!Ie(n))return jh(n);const t=Array.isArray(n.value)?new Array(n.value.length):{};for(const a in n.value)t[a]=ur(()=>({get(){return n.value[a]},set(o){if(Array.isArray(n.value)){const i=[...n.value];i[a]=o,n.value=i}else{const i=D1(W1({},n.value),{[a]:o});Object.setPrototypeOf(i,n.value),n.value=i}}}));return t}function Jd(n,t=!0){xn()?bt(n):t?n():on(n)}function B1(n){xn()&&Bs(n)}function V1(n,t=1e3,a={}){const{immediate:o=!0,immediateCallback:i=!1}=a;let l=null;const r=Y(!1);function c(){l&&(clearInterval(l),l=null)}function u(){r.value=!1,c()}function p(){const d=Ge(t);d<=0||(r.value=!0,i&&n(),c(),l=setInterval(n,d))}if(o&&Qn&&p(),Ie(t)||typeof t=="function"){const d=be(t,()=>{r.value&&Qn&&p()});rt(d)}return rt(u),{isActive:r,pause:u,resume:p}}function U1(n,t,a={}){const{immediate:o=!0}=a,i=Y(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){i.value=!1,r()}function u(...p){r(),i.value=!0,l=setTimeout(()=>{i.value=!1,l=null,n(...p)},Ge(t))}return o&&(i.value=!0,Qn&&u()),rt(c),{isPending:Kn(i),start:u,stop:c}}function Zd(n=!1,t={}){const{truthyValue:a=!0,falsyValue:o=!1}=t,i=Ie(n),l=Y(n);function r(c){if(arguments.length)return l.value=c,l.value;{const u=Ge(a);return l.value=l.value===u?Ge(o):u,l.value}}return i?r:[l,r]}var jc=Object.getOwnPropertySymbols,K1=Object.prototype.hasOwnProperty,G1=Object.prototype.propertyIsEnumerable,Q1=(n,t)=>{var a={};for(var o in n)K1.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&jc)for(var o of jc(n))t.indexOf(o)<0&&G1.call(n,o)&&(a[o]=n[o]);return a};function J1(n,t,a={}){const o=a,{eventFilter:i=Gd}=o,l=Q1(o,["eventFilter"]);return be(n,S1(i,t),l)}var Z1=Object.defineProperty,Y1=Object.defineProperties,X1=Object.getOwnPropertyDescriptors,Do=Object.getOwnPropertySymbols,Yd=Object.prototype.hasOwnProperty,Xd=Object.prototype.propertyIsEnumerable,Bc=(n,t,a)=>t in n?Z1(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,ek=(n,t)=>{for(var a in t||(t={}))Yd.call(t,a)&&Bc(n,a,t[a]);if(Do)for(var a of Do(t))Xd.call(t,a)&&Bc(n,a,t[a]);return n},nk=(n,t)=>Y1(n,X1(t)),tk=(n,t)=>{var a={};for(var o in n)Yd.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&Do)for(var o of Do(n))t.indexOf(o)<0&&Xd.call(n,o)&&(a[o]=n[o]);return a};function ak(n,t,a={}){const o=a,{eventFilter:i}=o,l=tk(o,["eventFilter"]),{eventFilter:r,pause:c,resume:u,isActive:p}=O1(i);return{stop:J1(n,t,nk(ek({},l),{eventFilter:r})),pause:c,resume:u,isActive:p}}function ln(n){var t;const a=Ge(n);return(t=a==null?void 0:a.$el)!=null?t:a}const en=Qn?window:void 0,em=Qn?window.document:void 0,sk=Qn?window.navigator:void 0;function xe(...n){let t,a,o,i;if(typeof n[0]=="string"||Array.isArray(n[0])?([a,o,i]=n,t=en):[t,a,o,i]=n,!t)return fa;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const l=[],r=()=>{l.forEach(d=>d()),l.length=0},c=(d,m,f,h)=>(d.addEventListener(m,f,h),()=>d.removeEventListener(m,f,h)),u=be(()=>[ln(t),Ge(i)],([d,m])=>{r(),d&&l.push(...a.flatMap(f=>o.map(h=>c(d,f,h,m))))},{immediate:!0,flush:"post"}),p=()=>{u(),r()};return rt(p),p}let Vc=!1;function ok(n,t,a={}){const{window:o=en,ignore:i=[],capture:l=!0,detectIframe:r=!1}=a;if(!o)return;A1&&!Vc&&(Vc=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",fa)));let c=!0;const u=f=>i.some(h=>{if(typeof h=="string")return Array.from(o.document.querySelectorAll(h)).some(g=>g===f.target||f.composedPath().includes(g));{const g=ln(h);return g&&(f.target===g||f.composedPath().includes(g))}}),d=[xe(o,"click",f=>{const h=ln(n);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(c=!u(f)),!c){c=!0;return}t(f)}},{passive:!0,capture:l}),xe(o,"pointerdown",f=>{const h=ln(n);h&&(c=!f.composedPath().includes(h)&&!u(f))},{passive:!0}),r&&xe(o,"blur",f=>{var h;const g=ln(n);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(g!=null&&g.contains(o.document.activeElement))&&t(f)})].filter(Boolean);return()=>d.forEach(f=>f())}function ik(n){return typeof n=="function"?n:typeof n=="string"?t=>t.key===n:Array.isArray(n)?t=>n.includes(t.key):()=>!0}function lk(...n){let t,a,o={};n.length===3?(t=n[0],a=n[1],o=n[2]):n.length===2?typeof n[1]=="object"?(t=!0,a=n[0],o=n[1]):(t=n[0],a=n[1]):(t=!0,a=n[0]);const{target:i=en,eventName:l="keydown",passive:r=!1,dedupe:c=!1}=o,u=ik(t);return xe(i,l,d=>{d.repeat&&Ge(c)||u(d)&&a(d)},r)}function rk(n={}){var t;const{window:a=en}=n,o=(t=n.document)!=null?t:a==null?void 0:a.document,i=$1(()=>null,()=>o==null?void 0:o.activeElement);return a&&(xe(a,"blur",l=>{l.relatedTarget===null&&i.trigger()},!0),xe(a,"focus",i.trigger,!0)),i}function ck(){const n=Y(!1);return xn()&&bt(()=>{n.value=!0}),n}function Us(n){const t=ck();return W(()=>(t.value,!!n()))}function uk(n,t={}){const{immediate:a=!0,window:o=en}=t,i=Y(!1);let l=0,r=null;function c(d){if(!i.value||!o)return;const m=d-l;n({delta:m,timestamp:d}),l=d,r=o.requestAnimationFrame(c)}function u(){!i.value&&o&&(i.value=!0,r=o.requestAnimationFrame(c))}function p(){i.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return a&&u(),rt(p),{isActive:Kn(i),pause:p,resume:u}}function ta(n,t={}){const{window:a=en}=t,o=Us(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let i;const l=Y(!1),r=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",c):i.removeListener(c))},c=()=>{o.value&&(r(),i=a.matchMedia(Qd(n).value),l.value=!!(i!=null&&i.matches),i&&("addEventListener"in i?i.addEventListener("change",c):i.addListener(c)))};return ba(c),rt(()=>r()),l}const pk={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function dk(n,t={}){function a(c,u){let p=n[c];return u!=null&&(p=H1(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=en}=t;function i(c){return o?o.matchMedia(c).matches:!1}const l=c=>ta(`(min-width: ${a(c)})`,t),r=Object.keys(n).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>l(u),enumerable:!0,configurable:!0}),c),{});return Object.assign(r,{greater(c){return ta(`(min-width: ${a(c,.1)})`,t)},greaterOrEqual:l,smaller(c){return ta(`(max-width: ${a(c,-.1)})`,t)},smallerOrEqual(c){return ta(`(max-width: ${a(c)})`,t)},between(c,u){return ta(`(min-width: ${a(c)}) and (max-width: ${a(u,-.1)})`,t)},isGreater(c){return i(`(min-width: ${a(c,.1)})`)},isGreaterOrEqual(c){return i(`(min-width: ${a(c)})`)},isSmaller(c){return i(`(max-width: ${a(c,-.1)})`)},isSmallerOrEqual(c){return i(`(max-width: ${a(c)})`)},isInBetween(c,u){return i(`(min-width: ${a(c)}) and (max-width: ${a(u,-.1)})`)},current(){const c=Object.keys(n).map(u=>[u,l(u)]);return W(()=>c.filter(([,u])=>u.value).map(([u])=>u))}})}function mk(n={}){const{navigator:t=sk,read:a=!1,source:o,copiedDuring:i=1500,legacy:l=!1}=n,r=["copy","cut"],c=Us(()=>t&&"clipboard"in t),u=W(()=>c.value||l),p=Y(""),d=Y(!1),m=U1(()=>d.value=!1,i);function f(){c.value?t.clipboard.readText().then(T=>{p.value=T}):p.value=w()}if(u.value&&a)for(const T of r)xe(T,f);async function h(T=Ge(o)){u.value&&T!=null&&(c.value?await t.clipboard.writeText(T):g(T),p.value=T,d.value=!0,m.start())}function g(T){const x=document.createElement("textarea");x.value=T??"",x.style.position="absolute",x.style.opacity="0",document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function w(){var T,x,z;return(z=(x=(T=document==null?void 0:document.getSelection)==null?void 0:T.call(document))==null?void 0:x.toString())!=null?z:""}return{isSupported:u,text:p,copied:d,copy:h}}function fk(n){return JSON.parse(JSON.stringify(n))}const ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},co="__vueuse_ssr_handlers__",hk=gk();function gk(){return co in ro||(ro[co]=ro[co]||{}),ro[co]}function _k(n,t){return hk[n]||t}function vk(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var kk=Object.defineProperty,Uc=Object.getOwnPropertySymbols,bk=Object.prototype.hasOwnProperty,yk=Object.prototype.propertyIsEnumerable,Kc=(n,t,a)=>t in n?kk(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,Gc=(n,t)=>{for(var a in t||(t={}))bk.call(t,a)&&Kc(n,a,t[a]);if(Uc)for(var a of Uc(t))yk.call(t,a)&&Kc(n,a,t[a]);return n};const wk={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Qc="vueuse-storage";function Tk(n,t,a,o={}){var i;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:m=en,eventFilter:f,onError:h=F=>{console.error(F)}}=o,g=(d?it:Y)(t);if(!a)try{a=_k("getDefaultStorage",()=>{var F;return(F=en)==null?void 0:F.localStorage})()}catch(F){h(F)}if(!a)return g;const w=Ge(t),T=vk(w),x=(i=o.serializer)!=null?i:wk[T],{pause:z,resume:b}=ak(g,()=>S(g.value),{flush:l,deep:r,eventFilter:f});return m&&c&&(xe(m,"storage",B),xe(m,Qc,N)),B(),g;function S(F){try{if(F==null)a.removeItem(n);else{const K=x.write(F),ie=a.getItem(n);ie!==K&&(a.setItem(n,K),m&&m.dispatchEvent(new CustomEvent(Qc,{detail:{key:n,oldValue:ie,newValue:K,storageArea:a}})))}}catch(K){h(K)}}function A(F){const K=F?F.newValue:a.getItem(n);if(K==null)return u&&w!==null&&a.setItem(n,x.write(w)),w;if(!F&&p){const ie=x.read(K);return typeof p=="function"?p(ie,w):T==="object"&&!Array.isArray(ie)?Gc(Gc({},w),ie):ie}else return typeof K!="string"?K:x.read(K)}function N(F){B(F.detail)}function B(F){if(!(F&&F.storageArea!==a)){if(F&&F.key==null){g.value=w;return}if(!(F&&F.key!==n)){z();try{g.value=A(F)}catch(K){h(K)}finally{F?on(b):b()}}}}}function xk(n){return ta("(prefers-color-scheme: dark)",n)}var zk=Object.defineProperty,$k=Object.defineProperties,Mk=Object.getOwnPropertyDescriptors,Jc=Object.getOwnPropertySymbols,Lk=Object.prototype.hasOwnProperty,Ek=Object.prototype.propertyIsEnumerable,Zc=(n,t,a)=>t in n?zk(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,Ck=(n,t)=>{for(var a in t||(t={}))Lk.call(t,a)&&Zc(n,a,t[a]);if(Jc)for(var a of Jc(t))Ek.call(t,a)&&Zc(n,a,t[a]);return n},Ak=(n,t)=>$k(n,Mk(t));function aj(n,t={}){var a,o;const{pointerTypes:i,preventDefault:l,stopPropagation:r,exact:c,onMove:u,onEnd:p,onStart:d,initialValue:m,axis:f="both",draggingElement:h=en,handle:g=n}=t,w=Y((a=Ge(m))!=null?a:{x:0,y:0}),T=Y(),x=N=>i?i.includes(N.pointerType):!0,z=N=>{Ge(l)&&N.preventDefault(),Ge(r)&&N.stopPropagation()},b=N=>{if(!x(N)||Ge(c)&&N.target!==Ge(n))return;const B=Ge(n).getBoundingClientRect(),F={x:N.clientX-B.left,y:N.clientY-B.top};(d==null?void 0:d(F,N))!==!1&&(T.value=F,z(N))},S=N=>{if(!x(N)||!T.value)return;let{x:B,y:F}=w.value;(f==="x"||f==="both")&&(B=N.clientX-T.value.x),(f==="y"||f==="both")&&(F=N.clientY-T.value.y),w.value={x:B,y:F},u==null||u(w.value,N),z(N)},A=N=>{x(N)&&T.value&&(T.value=void 0,p==null||p(w.value,N),z(N))};if(Qn){const N={capture:(o=t.capture)!=null?o:!0};xe(g,"pointerdown",b,N),xe(h,"pointermove",S,N),xe(h,"pointerup",A,N)}return Ak(Ck({},j1(w)),{position:w,isDragging:W(()=>!!T.value),style:W(()=>`left:${w.value.x}px;top:${w.value.y}px;`)})}var Yc=Object.getOwnPropertySymbols,Ik=Object.prototype.hasOwnProperty,Sk=Object.prototype.propertyIsEnumerable,Ok=(n,t)=>{var a={};for(var o in n)Ik.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&Yc)for(var o of Yc(n))t.indexOf(o)<0&&Sk.call(n,o)&&(a[o]=n[o]);return a};function Hk(n,t,a={}){const o=a,{window:i=en}=o,l=Ok(o,["window"]);let r;const c=Us(()=>i&&"ResizeObserver"in i),u=()=>{r&&(r.disconnect(),r=void 0)},p=W(()=>Array.isArray(n)?n.map(f=>ln(f)):[ln(n)]),d=be(p,f=>{if(u(),c.value&&i){r=new ResizeObserver(t);for(const h of f)h&&r.observe(h,l)}},{immediate:!0,flush:"post",deep:!0}),m=()=>{u(),d()};return rt(m),{isSupported:c,stop:m}}function Pk(n,t={width:0,height:0},a={}){const{window:o=en,box:i="content-box"}=a,l=W(()=>{var u,p;return(p=(u=ln(n))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),r=Y(t.width),c=Y(t.height);return Hk(n,([u])=>{const p=i==="border-box"?u.borderBoxSize:i==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(o&&l.value){const d=ln(n);if(d){const m=o.getComputedStyle(d);r.value=parseFloat(m.width),c.value=parseFloat(m.height)}}else if(p){const d=Array.isArray(p)?p:[p];r.value=d.reduce((m,{inlineSize:f})=>m+f,0),c.value=d.reduce((m,{blockSize:f})=>m+f,0)}else r.value=u.contentRect.width,c.value=u.contentRect.height},a),be(()=>ln(n),u=>{r.value=u?t.width:0,c.value=u?t.height:0}),{width:r,height:c}}function Rk(n,t,a={}){const{root:o,rootMargin:i="0px",threshold:l=.1,window:r=en,immediate:c=!0}=a,u=Us(()=>r&&"IntersectionObserver"in r),p=W(()=>{const g=Ge(n);return(Array.isArray(g)?g:[g]).map(ln).filter(E1)});let d=fa;const m=Y(c),f=u.value?be(()=>[p.value,ln(o),m.value],([g,w])=>{if(d(),!m.value||!g.length)return;const T=new IntersectionObserver(t,{root:ln(w),rootMargin:i,threshold:l});g.forEach(x=>x&&T.observe(x)),d=()=>{T.disconnect(),d=fa}},{immediate:c,flush:"post"}):fa,h=()=>{d(),f(),m.value=!1};return rt(h),{isSupported:u,isActive:m,pause(){d(),m.value=!1},resume(){m.value=!0},stop:h}}const Xc=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Nk(n,t={}){const{document:a=em,autoExit:o=!1}=t,i=W(()=>{var x;return(x=ln(n))!=null?x:a==null?void 0:a.querySelector("html")}),l=Y(!1),r=W(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(x=>a&&x in a||i.value&&x in i.value)),c=W(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(x=>a&&x in a||i.value&&x in i.value)),u=W(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(x=>a&&x in a||i.value&&x in i.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(x=>a&&x in a),d=Us(()=>i.value&&a&&r.value!==void 0&&c.value!==void 0&&u.value!==void 0),m=()=>p?(a==null?void 0:a[p])===i.value:!1,f=()=>{if(u.value){if(a&&a[u.value]!=null)return a[u.value];{const x=i.value;if((x==null?void 0:x[u.value])!=null)return!!x[u.value]}}return!1};async function h(){if(d.value){if(c.value)if((a==null?void 0:a[c.value])!=null)await a[c.value]();else{const x=i.value;(x==null?void 0:x[c.value])!=null&&await x[c.value]()}l.value=!1}}async function g(){if(!d.value)return;f()&&await h();const x=i.value;r.value&&(x==null?void 0:x[r.value])!=null&&(await x[r.value](),l.value=!0)}async function w(){await(l.value?h():g())}const T=()=>{const x=f();(!x||x&&m())&&(l.value=x)};return xe(a,Xc,T,!1),xe(()=>ln(i),Xc,T,!1),o&&rt(h),{isSupported:d,isFullscreen:l,enter:g,exit:h,toggle:w}}function Jn(n,t,a={}){const{window:o=en}=a;return Tk(n,t,o==null?void 0:o.localStorage,a)}const qk={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Fk(n={}){const{reactive:t=!1,target:a=en,aliasMap:o=qk,passive:i=!0,onEventFired:l=fa}=n,r=Be(new Set),c={toJSON(){return{}},current:r},u=t?Be(c):c,p=new Set,d=new Set;function m(w,T){w in u&&(t?u[w]=T:u[w].value=T)}function f(){r.clear();for(const w of d)m(w,!1)}function h(w,T){var x,z;const b=(x=w.key)==null?void 0:x.toLowerCase(),A=[(z=w.code)==null?void 0:z.toLowerCase(),b].filter(Boolean);b&&(T?r.add(b):r.delete(b));for(const N of A)d.add(N),m(N,T);b==="meta"&&!T?(p.forEach(N=>{r.delete(N),m(N,!1)}),p.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&T&&[...r,...A].forEach(N=>p.add(N))}xe(a,"keydown",w=>(h(w,!0),l(w)),{passive:i}),xe(a,"keyup",w=>(h(w,!1),l(w)),{passive:i}),xe("blur",f,{passive:!0}),xe("focus",f,{passive:!0});const g=new Proxy(u,{get(w,T,x){if(typeof T!="string")return Reflect.get(w,T,x);if(T=T.toLowerCase(),T in o&&(T=o[T]),!(T in u))if(/[+_-]/.test(T)){const b=T.split(/[+_-]/g).map(S=>S.trim());u[T]=W(()=>b.every(S=>Ge(g[S])))}else u[T]=Y(!1);const z=Reflect.get(w,T,x);return t?Ge(z):z}});return g}const Wk={page:n=>[n.pageX,n.pageY],client:n=>[n.clientX,n.clientY],screen:n=>[n.screenX,n.screenY],movement:n=>n instanceof Touch?null:[n.movementX,n.movementY]};function sj(n={}){const{type:t="page",touch:a=!0,resetOnTouchEnds:o=!1,initialValue:i={x:0,y:0},window:l=en,target:r=l,eventFilter:c}=n,u=Y(i.x),p=Y(i.y),d=Y(null),m=typeof t=="function"?t:Wk[t],f=x=>{const z=m(x);z&&([u.value,p.value]=z,d.value="mouse")},h=x=>{if(x.touches.length>0){const z=m(x.touches[0]);z&&([u.value,p.value]=z,d.value="touch")}},g=()=>{u.value=i.x,p.value=i.y},w=c?x=>c(()=>f(x),{}):x=>f(x),T=c?x=>c(()=>h(x),{}):x=>h(x);return r&&(xe(r,"mousemove",w,{passive:!0}),xe(r,"dragover",w,{passive:!0}),a&&t!=="movement"&&(xe(r,"touchstart",T,{passive:!0}),xe(r,"touchmove",T,{passive:!0}),o&&xe(r,"touchend",g,{passive:!0}))),{x:u,y:p,sourceType:d}}function Dk(n,t={}){const a=Qd(n),{threshold:o=50,onSwipe:i,onSwipeEnd:l,onSwipeStart:r}=t,c=Be({x:0,y:0}),u=(N,B)=>{c.x=N,c.y=B},p=Be({x:0,y:0}),d=(N,B)=>{p.x=N,p.y=B},m=W(()=>c.x-p.x),f=W(()=>c.y-p.y),{max:h,abs:g}=Math,w=W(()=>h(g(m.value),g(f.value))>=o),T=Y(!1),x=Y(!1),z=W(()=>w.value?g(m.value)>g(f.value)?m.value>0?"left":"right":f.value>0?"up":"down":"none"),b=N=>{var B,F,K;const ie=N.buttons===0,me=N.buttons===1;return(K=(F=(B=t.pointerTypes)==null?void 0:B.includes(N.pointerType))!=null?F:ie||me)!=null?K:!0},S=[xe(n,"pointerdown",N=>{var B,F;if(!b(N))return;x.value=!0,(F=(B=a.value)==null?void 0:B.style)==null||F.setProperty("touch-action","none");const K=N.target;K==null||K.setPointerCapture(N.pointerId);const{clientX:ie,clientY:me}=N;u(ie,me),d(ie,me),r==null||r(N)}),xe(n,"pointermove",N=>{if(!b(N)||!x.value)return;const{clientX:B,clientY:F}=N;d(B,F),!T.value&&w.value&&(T.value=!0),T.value&&(i==null||i(N))}),xe(n,"pointerup",N=>{var B,F;b(N)&&(T.value&&(l==null||l(N,z.value)),x.value=!1,T.value=!1,(F=(B=a.value)==null?void 0:B.style)==null||F.setProperty("touch-action","initial"))})],A=()=>S.forEach(N=>N());return{isSwiping:Kn(T),direction:Kn(z),posStart:Kn(c),posEnd:Kn(p),distanceX:m,distanceY:f,stop:A}}let jk=0;function oj(n,t={}){const a=Y(!1),{document:o=em,immediate:i=!0,manual:l=!1,id:r=`vueuse_styletag_${++jk}`}=t,c=Y(n);let u=()=>{};const p=()=>{if(!o)return;const m=o.getElementById(r)||o.createElement("style");m.isConnected||(m.type="text/css",m.id=r,t.media&&(m.media=t.media),o.head.appendChild(m)),!a.value&&(u=be(c,f=>{m.textContent=f},{immediate:!0}),a.value=!0)},d=()=>{!o||!a.value||(u(),o.head.removeChild(o.getElementById(r)),a.value=!1)};return i&&!l&&Jd(p),l||rt(d),{id:r,css:c,unload:d,load:p,isLoaded:Kn(a)}}var Bk=Object.defineProperty,eu=Object.getOwnPropertySymbols,Vk=Object.prototype.hasOwnProperty,Uk=Object.prototype.propertyIsEnumerable,nu=(n,t,a)=>t in n?Bk(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,Kk=(n,t)=>{for(var a in t||(t={}))Vk.call(t,a)&&nu(n,a,t[a]);if(eu)for(var a of eu(t))Uk.call(t,a)&&nu(n,a,t[a]);return n};function ij(n={}){const{controls:t=!1,offset:a=0,immediate:o=!0,interval:i="requestAnimationFrame",callback:l}=n,r=Y(yl()+a),c=()=>r.value=yl()+a,u=l?()=>{c(),l(r.value)}:c,p=i==="requestAnimationFrame"?uk(u,{immediate:o}):V1(u,i,{immediate:o});return t?Kk({timestamp:r},p):r}function Ze(n,t,a,o={}){var i,l,r;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:m,shouldEmit:f}=o,h=xn(),g=a||(h==null?void 0:h.emit)||((i=h==null?void 0:h.$emit)==null?void 0:i.bind(h))||((r=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(h==null?void 0:h.proxy));let w=p;t||(t="modelValue"),w=p||w||`update:${t.toString()}`;const T=b=>c?typeof c=="function"?c(b):fk(b):b,x=()=>L1(n[t])?T(n[t]):m,z=b=>{f?f(b)&&g(w,b):g(w,b)};if(u){const b=x(),S=Y(b);return be(()=>n[t],A=>S.value=T(A)),be(S,A=>{(A!==n[t]||d)&&z(A)},{deep:d}),S}else return W({get(){return x()},set(b){z(b)}})}function lj({window:n=en}={}){if(!n)return Y(!1);const t=Y(n.document.hasFocus());return xe(n,"blur",()=>{t.value=!1}),xe(n,"focus",()=>{t.value=!0}),t}function Gk(n={}){const{window:t=en,initialWidth:a=1/0,initialHeight:o=1/0,listenOrientation:i=!0,includeScrollbar:l=!0}=n,r=Y(a),c=Y(o),u=()=>{t&&(l?(r.value=t.innerWidth,c.value=t.innerHeight):(r.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight))};if(u(),Jd(u),xe("resize",u,{passive:!0}),i){const p=ta("(orientation: portrait)");be(p,()=>u())}return{width:r,height:c}}function Qk(){return nm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function nm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Jk=typeof Proxy=="function",Zk="devtools-plugin:setup",Yk="plugin:settings:set";let za,wl;function Xk(){var n;return za!==void 0||(typeof window<"u"&&window.performance?(za=!0,wl=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(za=!0,wl=global.perf_hooks.performance):za=!1),za}function eb(){return Xk()?wl.now():Date.now()}class nb{constructor(t,a){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=a;const o={};if(t.settings)for(const r in t.settings){const c=t.settings[r];o[r]=c.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let l=Object.assign({},o);try{const r=localStorage.getItem(i),c=JSON.parse(r);Object.assign(l,c)}catch{}this.fallbacks={getSettings(){return l},setSettings(r){try{localStorage.setItem(i,JSON.stringify(r))}catch{}l=r},now(){return eb()}},a&&a.on(Yk,(r,c)=>{r===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(r,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(r,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(t){this.target=t;for(const a of this.onQueue)this.target.on[a.method](...a.args);for(const a of this.targetQueue)a.resolve(await this.target[a.method](...a.args))}}function tb(n,t){const a=n,o=nm(),i=Qk(),l=Jk&&a.enableEarlyProxy;if(i&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))i.emit(Zk,n,t);else{const r=l?new nb(a,i):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:a,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ft=typeof window<"u";function ab(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const He=Object.assign;function Ai(n,t){const a={};for(const o in t){const i=t[o];a[o]=In(i)?i.map(n):n(i)}return a}const hs=()=>{},In=Array.isArray;function Ee(n){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(t))}const sb=/\/$/,ob=n=>n.replace(sb,"");function Ii(n,t,a="/"){let o,i={},l="",r="";const c=t.indexOf("#");let u=t.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(o=t.slice(0,u),l=t.slice(u+1,c>-1?c:t.length),i=n(l)),c>-1&&(o=o||t.slice(0,c),r=t.slice(c,t.length)),o=rb(o??t,a),{fullPath:o+(l&&"?")+l+r,path:o,query:i,hash:r}}function ib(n,t){const a=t.query?n(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function tu(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function au(n,t,a){const o=t.matched.length-1,i=a.matched.length-1;return o>-1&&o===i&&Wt(t.matched[o],a.matched[i])&&tm(t.params,a.params)&&n(t.query)===n(a.query)&&t.hash===a.hash}function Wt(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function tm(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const a in n)if(!lb(n[a],t[a]))return!1;return!0}function lb(n,t){return In(n)?su(n,t):In(t)?su(t,n):n===t}function su(n,t){return In(t)?n.length===t.length&&n.every((a,o)=>a===t[o]):n.length===1&&n[0]===t}function rb(n,t){if(n.startsWith("/"))return n;if(!t.startsWith("/"))return Ee(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${t}". It should look like "/${t}".`),n;if(!n)return t;const a=t.split("/"),o=n.split("/"),i=o[o.length-1];(i===".."||i===".")&&o.push("");let l=a.length-1,r,c;for(r=0;r<o.length;r++)if(c=o[r],c!==".")if(c==="..")l>1&&l--;else break;return a.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Cs;(function(n){n.pop="pop",n.push="push"})(Cs||(Cs={}));var gs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(gs||(gs={}));function cb(n){if(!n)if(ft){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ob(n)}const ub=/^[^#]+#/;function pb(n,t){return n.replace(ub,"#")+t}function db(n,t){const a=document.documentElement.getBoundingClientRect(),o=n.getBoundingClientRect();return{behavior:t.behavior,left:o.left-a.left-(t.left||0),top:o.top-a.top-(t.top||0)}}const di=()=>({left:window.pageXOffset,top:window.pageYOffset});function mb(n){let t;if("el"in n){const a=n.el,o=typeof a=="string"&&a.startsWith("#");if(typeof n.el=="string"&&(!o||!document.getElementById(n.el.slice(1))))try{const l=document.querySelector(n.el);if(o&&l){Ee(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{Ee(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const i=typeof a=="string"?o?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!i){Ee(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}t=db(i,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ou(n,t){return(history.state?history.state.position-t:-1)+n}const Tl=new Map;function fb(n,t){Tl.set(n,t)}function hb(n){const t=Tl.get(n);return Tl.delete(n),t}let gb=()=>location.protocol+"//"+location.host;function am(n,t){const{pathname:a,search:o,hash:i}=t,l=n.indexOf("#");if(l>-1){let c=i.includes(n.slice(l))?n.slice(l).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),tu(u,"")}return tu(a,n)+o+i}function _b(n,t,a,o){let i=[],l=[],r=null;const c=({state:f})=>{const h=am(n,location),g=a.value,w=t.value;let T=0;if(f){if(a.value=h,t.value=f,r&&r===g){r=null;return}T=w?f.position-w.position:0}else o(h);i.forEach(x=>{x(a.value,g,{delta:T,type:Cs.pop,direction:T?T>0?gs.forward:gs.back:gs.unknown})})};function u(){r=a.value}function p(f){i.push(f);const h=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return l.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(He({},f.state,{scroll:di()}),"")}function m(){for(const f of l)f();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:p,destroy:m}}function iu(n,t,a,o=!1,i=!1){return{back:n,current:t,forward:a,replaced:o,position:window.history.length,scroll:i?di():null}}function vb(n){const{history:t,location:a}=window,o={value:am(n,a)},i={value:t.state};i.value||l(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(u,p,d){const m=n.indexOf("#"),f=m>-1?(a.host&&document.querySelector("base")?n:n.slice(m))+u:gb()+n+u;try{t[d?"replaceState":"pushState"](p,"",f),i.value=p}catch(h){Ee("Error with push/replace State",h),a[d?"replace":"assign"](f)}}function r(u,p){const d=He({},t.state,iu(i.value.back,u,i.value.forward,!0),p,{position:i.value.position});l(u,d,!0),o.value=u}function c(u,p){const d=He({},i.value,t.state,{forward:u,scroll:di()});t.state||Ee(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(d.current,d,!0);const m=He({},iu(o.value,u,null),{position:d.position+1},p);l(u,m,!1),o.value=u}return{location:o,state:i,push:c,replace:r}}function kb(n){n=cb(n);const t=vb(n),a=_b(n,t.state,t.location,t.replace);function o(l,r=!0){r||a.pauseListeners(),history.go(l)}const i=He({location:"",base:n,go:o,createHref:pb.bind(null,n)},t,a);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function bb(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),!n.endsWith("#/")&&!n.endsWith("#")&&Ee(`A hash base must end with a "#":
"${n}" should be "${n.replace(/#.*$/,"#")}".`),kb(n)}function yb(n){return typeof n=="string"||n&&typeof n=="object"}function sm(n){return typeof n=="string"||typeof n=="symbol"}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},om=Symbol("navigation failure");var lu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(lu||(lu={}));const wb={[1]({location:n,currentLocation:t}){return`No match for
 ${JSON.stringify(n)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:n,to:t}){return`Redirected from "${n.fullPath}" to "${xb(t)}" via a navigation guard.`},[4]({from:n,to:t}){return`Navigation aborted from "${n.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:n,to:t}){return`Navigation cancelled from "${n.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:n,to:t}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function Ra(n,t){return He(new Error(wb[n](t)),{type:n,[om]:!0},t)}function ct(n,t){return n instanceof Error&&om in n&&(t==null||!!(n.type&t))}const Tb=["params","query","hash"];function xb(n){if(typeof n=="string")return n;if("path"in n)return n.path;const t={};for(const a of Tb)a in n&&(t[a]=n[a]);return JSON.stringify(t,null,2)}const ru="[^/]+?",zb={sensitive:!1,strict:!1,start:!0,end:!0},$b=/[.+*?^${}()[\]/\\]/g;function Mb(n,t){const a=He({},zb,t),o=[];let i=a.start?"^":"";const l=[];for(const p of n){const d=p.length?[]:[90];a.strict&&!p.length&&(i+="/");for(let m=0;m<p.length;m++){const f=p[m];let h=40+(a.sensitive?.25:0);if(f.type===0)m||(i+="/"),i+=f.value.replace($b,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:w,optional:T,regexp:x}=f;l.push({name:g,repeatable:w,optional:T});const z=x||ru;if(z!==ru){h+=10;try{new RegExp(`(${z})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${z}): `+S.message)}}let b=w?`((?:${z})(?:/(?:${z}))*)`:`(${z})`;m||(b=T&&p.length<2?`(?:/${b})`:"/"+b),T&&(b+="?"),i+=b,h+=20,T&&(h+=-8),w&&(h+=-20),z===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(a.strict&&a.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}a.strict||(i+="/?"),a.end?i+="$":a.strict&&(i+="(?:/|$)");const r=new RegExp(i,a.sensitive?"":"i");function c(p){const d=p.match(r),m={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",g=l[f-1];m[g.name]=h&&g.repeatable?h.split("/"):h}return m}function u(p){let d="",m=!1;for(const f of n){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:g,repeatable:w,optional:T}=h,x=g in p?p[g]:"";if(In(x)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const z=In(x)?x.join("/"):x;if(!z)if(T)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${g}"`);d+=z}}return d||"/"}return{re:r,score:o,keys:l,parse:c,stringify:u}}function Lb(n,t){let a=0;for(;a<n.length&&a<t.length;){const o=t[a]-n[a];if(o)return o;a++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Eb(n,t){let a=0;const o=n.score,i=t.score;for(;a<o.length&&a<i.length;){const l=Lb(o[a],i[a]);if(l)return l;a++}if(Math.abs(i.length-o.length)===1){if(cu(o))return 1;if(cu(i))return-1}return i.length-o.length}function cu(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Cb={type:0,value:""},Ab=/[a-zA-Z0-9_]/;function Ib(n){if(!n)return[[]];if(n==="/")return[[Cb]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function t(h){throw new Error(`ERR (${a})/"${p}": ${h}`)}let a=0,o=a;const i=[];let l;function r(){l&&i.push(l),l=[]}let c=0,u,p="",d="";function m(){p&&(a===0?l.push({type:0,value:p}):a===1||a===2||a===3?(l.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),p="")}function f(){p+=u}for(;c<n.length;){if(u=n[c++],u==="\\"&&a!==2){o=a,a=4;continue}switch(a){case 0:u==="/"?(p&&m(),r()):u===":"?(m(),a=1):f();break;case 4:f(),a=o;break;case 1:u==="("?a=2:Ab.test(u)?f():(m(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:a=3:d+=u;break;case 3:m(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:t("Unknown state");break}}return a===2&&t(`Unfinished custom RegExp for param "${p}"`),m(),r(),i}function Sb(n,t,a){const o=Mb(Ib(n.path),a);{const l=new Set;for(const r of o.keys)l.has(r.name)&&Ee(`Found duplicated params with name "${r.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),l.add(r.name)}const i=He(o,{record:n,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Ob(n,t){const a=[],o=new Map;t=du({strict:!1,end:!0,sensitive:!1},t);function i(d){return o.get(d)}function l(d,m,f){const h=!f,g=Hb(d);qb(g,m),g.aliasOf=f&&f.record;const w=du(t,d),T=[g];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const S of b)T.push(He({},g,{components:f?f.record.components:g.components,path:S,aliasOf:f?f.record:g}))}let x,z;for(const b of T){const{path:S}=b;if(m&&S[0]!=="/"){const A=m.record.path,N=A[A.length-1]==="/"?"":"/";b.path=m.record.path+(S&&N+S)}if(b.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=Sb(b,m,w),m&&S[0]==="/"&&Fb(x,m),f?(f.alias.push(x),Nb(f,x)):(z=z||x,z!==x&&z.alias.push(x),h&&d.name&&!pu(x)&&r(d.name)),g.children){const A=g.children;for(let N=0;N<A.length;N++)l(A[N],x,f&&f.children[N])}f=f||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&u(x)}return z?()=>{r(z)}:hs}function r(d){if(sm(d)){const m=o.get(d);m&&(o.delete(d),a.splice(a.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=a.indexOf(d);m>-1&&(a.splice(m,1),d.record.name&&o.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return a}function u(d){let m=0;for(;m<a.length&&Eb(d,a[m])>=0&&(d.record.path!==a[m].record.path||!im(d,a[m]));)m++;a.splice(m,0,d),d.record.name&&!pu(d)&&o.set(d.record.name,d)}function p(d,m){let f,h={},g,w;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw Ra(1,{location:d});{const z=Object.keys(d.params||{}).filter(b=>!f.keys.find(S=>S.name===b));z.length&&Ee(`Discarded invalid param(s) "${z.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}w=f.record.name,h=He(uu(m.params,f.keys.filter(z=>!z.optional).map(z=>z.name)),d.params&&uu(d.params,f.keys.map(z=>z.name))),g=f.stringify(h)}else if("path"in d)g=d.path,g.startsWith("/")||Ee(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=a.find(z=>z.re.test(g)),f&&(h=f.parse(g),w=f.record.name);else{if(f=m.name?o.get(m.name):a.find(z=>z.re.test(m.path)),!f)throw Ra(1,{location:d,currentLocation:m});w=f.record.name,h=He({},m.params,d.params),g=f.stringify(h)}const T=[];let x=f;for(;x;)T.unshift(x.record),x=x.parent;return{name:w,path:g,params:h,matched:T,meta:Rb(T)}}return n.forEach(d=>l(d)),{addRoute:l,resolve:p,removeRoute:r,getRoutes:c,getRecordMatcher:i}}function uu(n,t){const a={};for(const o of t)o in n&&(a[o]=n[o]);return a}function Hb(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Pb(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Pb(n){const t={},a=n.props||!1;if("component"in n)t.default=a;else for(const o in n.components)t[o]=typeof a=="boolean"?a:a[o];return t}function pu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Rb(n){return n.reduce((t,a)=>He(t,a.meta),{})}function du(n,t){const a={};for(const o in n)a[o]=o in t?t[o]:n[o];return a}function xl(n,t){return n.name===t.name&&n.optional===t.optional&&n.repeatable===t.repeatable}function Nb(n,t){for(const a of n.keys)if(!a.optional&&!t.keys.find(xl.bind(null,a)))return Ee(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${a.name}"`);for(const a of t.keys)if(!a.optional&&!n.keys.find(xl.bind(null,a)))return Ee(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${a.name}"`)}function qb(n,t){t&&t.record.name&&!n.name&&!n.path&&Ee(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Fb(n,t){for(const a of t.keys)if(!n.keys.find(xl.bind(null,a)))return Ee(`Absolute path "${n.record.path}" must have the exact same param named "${a.name}" as its parent "${t.record.path}".`)}function im(n,t){return t.children.some(a=>a===n||im(n,a))}const lm=/#/g,Wb=/&/g,Db=/\//g,jb=/=/g,Bb=/\?/g,rm=/\+/g,Vb=/%5B/g,Ub=/%5D/g,cm=/%5E/g,Kb=/%60/g,um=/%7B/g,Gb=/%7C/g,pm=/%7D/g,Qb=/%20/g;function xr(n){return encodeURI(""+n).replace(Gb,"|").replace(Vb,"[").replace(Ub,"]")}function Jb(n){return xr(n).replace(um,"{").replace(pm,"}").replace(cm,"^")}function zl(n){return xr(n).replace(rm,"%2B").replace(Qb,"+").replace(lm,"%23").replace(Wb,"%26").replace(Kb,"`").replace(um,"{").replace(pm,"}").replace(cm,"^")}function Zb(n){return zl(n).replace(jb,"%3D")}function Yb(n){return xr(n).replace(lm,"%23").replace(Bb,"%3F")}function Xb(n){return n==null?"":Yb(n).replace(Db,"%2F")}function As(n){try{return decodeURIComponent(""+n)}catch{Ee(`Error decoding "${n}". Using original value`)}return""+n}function e0(n){const t={};if(n===""||n==="?")return t;const o=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<o.length;++i){const l=o[i].replace(rm," "),r=l.indexOf("="),c=As(r<0?l:l.slice(0,r)),u=r<0?null:As(l.slice(r+1));if(c in t){let p=t[c];In(p)||(p=t[c]=[p]),p.push(u)}else t[c]=u}return t}function mu(n){let t="";for(let a in n){const o=n[a];if(a=Zb(a),o==null){o!==void 0&&(t+=(t.length?"&":"")+a);continue}(In(o)?o.map(l=>l&&zl(l)):[o&&zl(o)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+a,l!=null&&(t+="="+l))})}return t}function n0(n){const t={};for(const a in n){const o=n[a];o!==void 0&&(t[a]=In(o)?o.map(i=>i==null?null:""+i):o==null?o:""+o)}return t}const t0=Symbol("router view location matched"),fu=Symbol("router view depth"),zr=Symbol("router"),dm=Symbol("route location"),$l=Symbol("router view location");function Za(){let n=[];function t(o){return n.push(o),()=>{const i=n.indexOf(o);i>-1&&n.splice(i,1)}}function a(){n=[]}return{add:t,list:()=>n,reset:a}}function Mt(n,t,a,o,i){const l=o&&(o.enterCallbacks[i]=o.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const u=m=>{m===!1?c(Ra(4,{from:a,to:t})):m instanceof Error?c(m):yb(m)?c(Ra(2,{from:t,to:m})):(l&&o.enterCallbacks[i]===l&&typeof m=="function"&&l.push(m),r())},p=n.call(o&&o.instances[i],t,a,a0(u,t,a));let d=Promise.resolve(p);if(n.length<3&&(d=d.then(u)),n.length>2){const m=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(f=>u._called?f:(Ee(m),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){Ee(m),c(new Error("Invalid navigation guard"));return}}d.catch(m=>c(m))})}function a0(n,t,a){let o=0;return function(){o++===1&&Ee(`The "next" callback was called more than once in one navigation guard when going from "${a.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,o===1&&n.apply(null,arguments)}}function Si(n,t,a,o){const i=[];for(const l of n){!l.components&&!l.children.length&&Ee(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const r in l.components){let c=l.components[r];{if(!c||typeof c!="object"&&typeof c!="function")throw Ee(`Component "${r}" in record with path "${l.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Ee(`Component "${r}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Ee(`Component "${r}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!l.instances[r]))if(s0(c)){const p=(c.__vccOpts||c)[t];p&&i.push(Mt(p,a,o,l,r))}else{let u=c();"catch"in u||(Ee(`Component "${r}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),i.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=ab(p)?p.default:p;l.components[r]=d;const f=(d.__vccOpts||d)[t];return f&&Mt(f,a,o,l,r)()}))}}}return i}function s0(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function hu(n){const t=$(zr),a=$(dm),o=W(()=>t.resolve(O(n.to))),i=W(()=>{const{matched:u}=o.value,{length:p}=u,d=u[p-1],m=a.matched;if(!d||!m.length)return-1;const f=m.findIndex(Wt.bind(null,d));if(f>-1)return f;const h=gu(u[p-2]);return p>1&&gu(d)===h&&m[m.length-1].path!==h?m.findIndex(Wt.bind(null,u[p-2])):f}),l=W(()=>i.value>-1&&r0(a.params,o.value.params)),r=W(()=>i.value>-1&&i.value===a.matched.length-1&&tm(a.params,o.value.params));function c(u={}){return l0(u)?t[O(n.replace)?"replace":"push"](O(n.to)).catch(hs):Promise.resolve()}if(ft){const u=xn();if(u){const p={route:o.value,isActive:l.value,isExactActive:r.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),ba(()=>{p.route=o.value,p.isActive=l.value,p.isExactActive=r.value},{flush:"post"})}}return{route:o,href:W(()=>o.value.href),isActive:l,isExactActive:r,navigate:c}}const o0=Se({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hu,setup(n,{slots:t}){const a=Be(hu(n)),{options:o}=$(zr),i=W(()=>({[_u(n.activeClass,o.linkActiveClass,"router-link-active")]:a.isActive,[_u(n.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const l=t.default&&t.default(a);return n.custom?l:Tn("a",{"aria-current":a.isExactActive?n.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:i.value},l)}}}),i0=o0;function l0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function r0(n,t){for(const a in t){const o=t[a],i=n[a];if(typeof o=="string"){if(o!==i)return!1}else if(!In(i)||i.length!==o.length||o.some((l,r)=>l!==i[r]))return!1}return!0}function gu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const _u=(n,t,a)=>n??t??a,c0=Se({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:a}){p0();const o=$($l),i=W(()=>n.route||o.value),l=$(fu,0),r=W(()=>{let p=O(l);const{matched:d}=i.value;let m;for(;(m=d[p])&&!m.components;)p++;return p}),c=W(()=>i.value.matched[r.value]);En(fu,W(()=>r.value+1)),En(t0,c),En($l,i);const u=Y();return be(()=>[u.value,c.value,n.name],([p,d,m],[f,h,g])=>{d&&(d.instances[m]=p,h&&h!==d&&p&&p===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),p&&d&&(!h||!Wt(d,h)||!f)&&(d.enterCallbacks[m]||[]).forEach(w=>w(p))},{flush:"post"}),()=>{const p=i.value,d=n.name,m=c.value,f=m&&m.components[d];if(!f)return vu(a.default,{Component:f,route:p});const h=m.props[d],g=h?h===!0?p.params:typeof h=="function"?h(p):h:null,T=Tn(f,He({},g,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(m.instances[d]=null)},ref:u}));if(ft&&T.ref){const x={depth:r.value,name:m.name,path:m.path,meta:m.meta};(In(T.ref)?T.ref.map(b=>b.i):[T.ref.i]).forEach(b=>{b.__vrv_devtools=x})}return vu(a.default,{Component:T,route:p})||T}}});function vu(n,t){if(!n)return null;const a=n(t);return a.length===1?a[0]:a}const u0=c0;function p0(){const n=xn(),t=n.parent&&n.parent.type.name,a=n.parent&&n.parent.subTree&&n.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof a=="object"&&a.name==="RouterView"){const o=t==="KeepAlive"?"keep-alive":"transition";Ee(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function Ya(n,t){const a=He({},n,{matched:n.matched.map(o=>b0(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:t,value:a}}}function uo(n){return{_custom:{display:n}}}let d0=0;function m0(n,t,a){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=d0++;tb({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},i=>{typeof i.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.on.inspectComponent((d,m)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ya(t.currentRoute.value,"Current Route")})}),i.on.visitComponentTree(({treeNode:d,componentInstance:m})=>{if(m.__vrv_devtools){const f=m.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:mm})}In(m.__vrl_devtools)&&(m.__devtoolsApi=i,m.__vrl_devtools.forEach(f=>{let h=gm,g="";f.isExactActive?(h=hm,g="This is exactly active"):f.isActive&&(h=fm,g="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:g,backgroundColor:h})}))}),be(t.currentRoute,()=>{u(),i.notifyComponentUpdate(),i.sendInspectorTree(c),i.sendInspectorState(c)});const l="router:navigations:"+o;i.addTimelineLayer({id:l,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((d,m)=>{i.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:i.now(),data:{error:d},groupId:m.meta.__navigationId}})});let r=0;t.beforeEach((d,m)=>{const f={guard:uo("beforeEach"),from:Ya(m,"Current Location during this navigation"),to:Ya(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:r++}),i.addTimelineEvent({layerId:l,event:{time:i.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),t.afterEach((d,m,f)=>{const h={guard:uo("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=uo("❌")):h.status=uo("✅"),h.from=Ya(m,"Current Location during this navigation"),h.to=Ya(d,"Target location"),i.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:d.fullPath,time:i.now(),data:h,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+o;i.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let m=a.getRoutes().filter(f=>!f.parent);m.forEach(km),d.filter&&(m=m.filter(f=>Ml(f,d.filter.toLowerCase()))),m.forEach(f=>vm(f,t.currentRoute.value)),d.rootNodes=m.map(_m)}let p;i.on.getInspectorTree(d=>{p=d,d.app===n&&d.inspectorId===c&&u()}),i.on.getInspectorState(d=>{if(d.app===n&&d.inspectorId===c){const f=a.getRoutes().find(h=>h.record.__vd_id===d.nodeId);f&&(d.state={options:h0(f)})}}),i.sendInspectorTree(c),i.sendInspectorState(c)})}function f0(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function h0(n){const{record:t}=n,a=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&a.push({editable:!1,key:"name",value:t.name}),a.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&a.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(o=>`${o.name}${f0(o)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),t.redirect!=null&&a.push({editable:!1,key:"redirect",value:t.redirect}),n.alias.length&&a.push({editable:!1,key:"aliases",value:n.alias.map(o=>o.record.path)}),Object.keys(n.record.meta).length&&a.push({editable:!1,key:"meta",value:n.record.meta}),a.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),a}const mm=15485081,fm=2450411,hm=8702998,g0=2282478,gm=16486972,_0=6710886;function _m(n){const t=[],{record:a}=n;a.name!=null&&t.push({label:String(a.name),textColor:0,backgroundColor:g0}),a.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:gm}),n.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:mm}),n.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:hm}),n.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:fm}),a.redirect&&t.push({label:typeof a.redirect=="string"?`redirect: ${a.redirect}`:"redirects",textColor:16777215,backgroundColor:_0});let o=a.__vd_id;return o==null&&(o=String(v0++),a.__vd_id=o),{id:o,label:a.path,tags:t,children:n.children.map(_m)}}let v0=0;const k0=/^\/(.*)\/([a-z]*)$/;function vm(n,t){const a=t.matched.length&&Wt(t.matched[t.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=a,a||(n.__vd_active=t.matched.some(o=>Wt(o,n.record))),n.children.forEach(o=>vm(o,t))}function km(n){n.__vd_match=!1,n.children.forEach(km)}function Ml(n,t){const a=String(n.re).match(k0);if(n.__vd_match=!1,!a||a.length<3)return!1;if(new RegExp(a[1].replace(/\$$/,""),a[2]).test(t))return n.children.forEach(r=>Ml(r,t)),n.record.path!=="/"||t==="/"?(n.__vd_match=n.re.test(t),!0):!1;const i=n.record.path.toLowerCase(),l=As(i);return!t.startsWith("/")&&(l.includes(t)||i.includes(t))||l.startsWith(t)||i.startsWith(t)||n.record.name&&String(n.record.name).includes(t)?!0:n.children.some(r=>Ml(r,t))}function b0(n,t){const a={};for(const o in n)t.includes(o)||(a[o]=n[o]);return a}function y0(n){const t=Ob(n.routes,n),a=n.parseQuery||e0,o=n.stringifyQuery||mu,i=n.history;if(!i)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Za(),r=Za(),c=Za(),u=it(Tt);let p=Tt;ft&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ai.bind(null,q=>""+q),m=Ai.bind(null,Xb),f=Ai.bind(null,As);function h(q,ee){let te,se;return sm(q)?(te=t.getRecordMatcher(q),se=ee):se=q,t.addRoute(se,te)}function g(q){const ee=t.getRecordMatcher(q);ee?t.removeRoute(ee):Ee(`Cannot remove non-existent route "${String(q)}"`)}function w(){return t.getRoutes().map(q=>q.record)}function T(q){return!!t.getRecordMatcher(q)}function x(q,ee){if(ee=He({},ee||u.value),typeof q=="string"){const y=Ii(a,q,ee.path),I=t.resolve({path:y.path},ee),j=i.createHref(y.fullPath);return j.startsWith("//")?Ee(`Location "${q}" resolved to "${j}". A resolved location cannot start with multiple slashes.`):I.matched.length||Ee(`No match found for location with path "${q}"`),He(y,I,{params:f(I.params),hash:As(y.hash),redirectedFrom:void 0,href:j})}let te;if("path"in q)"params"in q&&!("name"in q)&&Object.keys(q.params).length&&Ee(`Path "${q.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),te=He({},q,{path:Ii(a,q.path,ee.path).path});else{const y=He({},q.params);for(const I in y)y[I]==null&&delete y[I];te=He({},q,{params:m(y)}),ee.params=m(ee.params)}const se=t.resolve(te,ee),ze=q.hash||"";ze&&!ze.startsWith("#")&&Ee(`A \`hash\` should always start with the character "#". Replace "${ze}" with "#${ze}".`),se.params=d(f(se.params));const Ne=ib(o,He({},q,{hash:Jb(ze),path:se.path})),_=i.createHref(Ne);return _.startsWith("//")?Ee(`Location "${q}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):se.matched.length||Ee(`No match found for location with path "${"path"in q?q.path:q}"`),He({fullPath:Ne,hash:ze,query:o===mu?n0(q.query):q.query||{}},se,{redirectedFrom:void 0,href:_})}function z(q){return typeof q=="string"?Ii(a,q,u.value.path):He({},q)}function b(q,ee){if(p!==q)return Ra(8,{from:ee,to:q})}function S(q){return B(q)}function A(q){return S(He(z(q),{replace:!0}))}function N(q){const ee=q.matched[q.matched.length-1];if(ee&&ee.redirect){const{redirect:te}=ee;let se=typeof te=="function"?te(q):te;if(typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=z(se):{path:se},se.params={}),!("path"in se)&&!("name"in se))throw Ee(`Invalid redirect found:
${JSON.stringify(se,null,2)}
 when navigating to "${q.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return He({query:q.query,hash:q.hash,params:"path"in se?{}:q.params},se)}}function B(q,ee){const te=p=x(q),se=u.value,ze=q.state,Ne=q.force,_=q.replace===!0,y=N(te);if(y)return B(He(z(y),{state:typeof y=="object"?He({},ze,y.state):ze,force:Ne,replace:_}),ee||te);const I=te;I.redirectedFrom=ee;let j;return!Ne&&au(o,se,te)&&(j=Ra(16,{to:I,from:se}),Sn(se,se,!0,!1)),(j?Promise.resolve(j):ie(I,se)).catch(D=>ct(D)?ct(D,2)?D:Pe(D):pe(D,I,se)).then(D=>{if(D){if(ct(D,2))return au(o,x(D.to),I)&&ee&&(ee._count=ee._count?ee._count+1:1)>30?(Ee(`Detected a possibly infinite redirection in a navigation guard when going from "${se.fullPath}" to "${I.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):B(He({replace:_},z(D.to),{state:typeof D.to=="object"?He({},ze,D.to.state):ze,force:Ne}),ee||I)}else D=X(I,se,!0,_,ze);return me(I,se,D),D})}function F(q,ee){const te=b(q,ee);return te?Promise.reject(te):Promise.resolve()}function K(q){const ee=Zn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(q):q()}function ie(q,ee){let te;const[se,ze,Ne]=w0(q,ee);te=Si(se.reverse(),"beforeRouteLeave",q,ee);for(const y of se)y.leaveGuards.forEach(I=>{te.push(Mt(I,q,ee))});const _=F.bind(null,q,ee);return te.push(_),On(te).then(()=>{te=[];for(const y of l.list())te.push(Mt(y,q,ee));return te.push(_),On(te)}).then(()=>{te=Si(ze,"beforeRouteUpdate",q,ee);for(const y of ze)y.updateGuards.forEach(I=>{te.push(Mt(I,q,ee))});return te.push(_),On(te)}).then(()=>{te=[];for(const y of q.matched)if(y.beforeEnter&&!ee.matched.includes(y))if(In(y.beforeEnter))for(const I of y.beforeEnter)te.push(Mt(I,q,ee));else te.push(Mt(y.beforeEnter,q,ee));return te.push(_),On(te)}).then(()=>(q.matched.forEach(y=>y.enterCallbacks={}),te=Si(Ne,"beforeRouteEnter",q,ee),te.push(_),On(te))).then(()=>{te=[];for(const y of r.list())te.push(Mt(y,q,ee));return te.push(_),On(te)}).catch(y=>ct(y,8)?y:Promise.reject(y))}function me(q,ee,te){for(const se of c.list())K(()=>se(q,ee,te))}function X(q,ee,te,se,ze){const Ne=b(q,ee);if(Ne)return Ne;const _=ee===Tt,y=ft?history.state:{};te&&(se||_?i.replace(q.fullPath,He({scroll:_&&y&&y.scroll},ze)):i.push(q.fullPath,ze)),u.value=q,Sn(q,ee,te,_),Pe()}let ve;function ye(){ve||(ve=i.listen((q,ee,te)=>{if(!Bt.listening)return;const se=x(q),ze=N(se);if(ze){B(He(ze,{replace:!0}),se).catch(hs);return}p=se;const Ne=u.value;ft&&fb(ou(Ne.fullPath,te.delta),di()),ie(se,Ne).catch(_=>ct(_,12)?_:ct(_,2)?(B(_.to,se).then(y=>{ct(y,20)&&!te.delta&&te.type===Cs.pop&&i.go(-1,!1)}).catch(hs),Promise.reject()):(te.delta&&i.go(-te.delta,!1),pe(_,se,Ne))).then(_=>{_=_||X(se,Ne,!1),_&&(te.delta&&!ct(_,8)?i.go(-te.delta,!1):te.type===Cs.pop&&ct(_,20)&&i.go(-1,!1)),me(se,Ne,_)}).catch(hs)}))}let Te=Za(),Re=Za(),ae;function pe(q,ee,te){Pe(q);const se=Re.list();return se.length?se.forEach(ze=>ze(q,ee,te)):(Ee("uncaught error during route navigation:"),console.error(q)),Promise.reject(q)}function $e(){return ae&&u.value!==Tt?Promise.resolve():new Promise((q,ee)=>{Te.add([q,ee])})}function Pe(q){return ae||(ae=!q,ye(),Te.list().forEach(([ee,te])=>q?te(q):ee()),Te.reset()),q}function Sn(q,ee,te,se){const{scrollBehavior:ze}=n;if(!ft||!ze)return Promise.resolve();const Ne=!te&&hb(ou(q.fullPath,0))||(se||!te)&&history.state&&history.state.scroll||null;return on().then(()=>ze(q,ee,Ne)).then(_=>_&&mb(_)).catch(_=>pe(_,q,ee))}const an=q=>i.go(q);let _n;const Zn=new Set,Bt={currentRoute:u,listening:!0,addRoute:h,removeRoute:g,hasRoute:T,getRoutes:w,resolve:x,options:n,push:S,replace:A,go:an,back:()=>an(-1),forward:()=>an(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:Re.add,isReady:$e,install(q){const ee=this;q.component("RouterLink",i0),q.component("RouterView",u0),q.config.globalProperties.$router=ee,Object.defineProperty(q.config.globalProperties,"$route",{enumerable:!0,get:()=>O(u)}),ft&&!_n&&u.value===Tt&&(_n=!0,S(i.location).catch(ze=>{Ee("Unexpected error when starting the router:",ze)}));const te={};for(const ze in Tt)te[ze]=W(()=>u.value[ze]);q.provide(zr,ee),q.provide(dm,Be(te)),q.provide($l,u);const se=q.unmount;Zn.add(q),q.unmount=function(){Zn.delete(q),Zn.size<1&&(p=Tt,ve&&ve(),ve=null,u.value=Tt,_n=!1,ae=!1),se()},ft&&m0(q,ee,t)}};function On(q){return q.reduce((ee,te)=>ee.then(()=>K(te)),Promise.resolve())}return Bt}function w0(n,t){const a=[],o=[],i=[],l=Math.max(t.matched.length,n.matched.length);for(let r=0;r<l;r++){const c=t.matched[r];c&&(n.matched.find(p=>Wt(p,c))?o.push(c):a.push(c));const u=n.matched[r];u&&(t.matched.find(p=>Wt(p,u))||i.push(u))}return[a,o,i]}const Oi=Y(!1),_s=Y(!1),Ea=Y(!1),T0=Y(!0),Ll=dk({xs:460,...pk}),ha=Gk(),bm=Fk(),x0=W(()=>ha.height.value-ha.width.value/It>180),ym=Nk(Qn?document.body:null),Ht=rk(),z0=W(()=>{var n,t;return["INPUT","TEXTAREA"].includes(((n=Ht.value)==null?void 0:n.tagName)||"")||((t=Ht.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),$0=W(()=>{var n;return["BUTTON","A"].includes(((n=Ht.value)==null?void 0:n.tagName)||"")});Jn("slidev-camera","default");Jn("slidev-mic","default");const bo=Jn("slidev-scale",0),dn=Jn("slidev-show-overview",!1),Hi=Jn("slidev-presenter-cursor",!0),ku=Jn("slidev-show-editor",!1);Jn("slidev-editor-width",Qn?window.innerWidth*.4:100);const wm=Zd(dn);function bu(n,t,a,o=i=>i){return n*o(.5-t*(.5-a))}function M0(n){return[-n[0],-n[1]]}function Vn(n,t){return[n[0]+t[0],n[1]+t[1]]}function Rn(n,t){return[n[0]-t[0],n[1]-t[1]]}function Bn(n,t){return[n[0]*t,n[1]*t]}function L0(n,t){return[n[0]/t,n[1]/t]}function Xa(n){return[n[1],-n[0]]}function yu(n,t){return n[0]*t[0]+n[1]*t[1]}function E0(n,t){return n[0]===t[0]&&n[1]===t[1]}function C0(n){return Math.hypot(n[0],n[1])}function A0(n){return n[0]*n[0]+n[1]*n[1]}function wu(n,t){return A0(Rn(n,t))}function Tm(n){return L0(n,C0(n))}function I0(n,t){return Math.hypot(n[1]-t[1],n[0]-t[0])}function es(n,t,a){let o=Math.sin(a),i=Math.cos(a),l=n[0]-t[0],r=n[1]-t[1],c=l*i-r*o,u=l*o+r*i;return[c+t[0],u+t[1]]}function El(n,t,a){return Vn(n,Bn(Rn(t,n),a))}function Tu(n,t,a){return Vn(n,Bn(t,a))}var{min:$a,PI:S0}=Math,xu=.275,ns=S0+1e-4;function O0(n,t={}){let{size:a=16,smoothing:o=.5,thinning:i=.5,simulatePressure:l=!0,easing:r=ae=>ae,start:c={},end:u={},last:p=!1}=t,{cap:d=!0,easing:m=ae=>ae*(2-ae)}=c,{cap:f=!0,easing:h=ae=>--ae*ae*ae+1}=u;if(n.length===0||a<=0)return[];let g=n[n.length-1].runningLength,w=c.taper===!1?0:c.taper===!0?Math.max(a,g):c.taper,T=u.taper===!1?0:u.taper===!0?Math.max(a,g):u.taper,x=Math.pow(a*o,2),z=[],b=[],S=n.slice(0,10).reduce((ae,pe)=>{let $e=pe.pressure;if(l){let Pe=$a(1,pe.distance/a),Sn=$a(1,1-Pe);$e=$a(1,ae+(Sn-ae)*(Pe*xu))}return(ae+$e)/2},n[0].pressure),A=bu(a,i,n[n.length-1].pressure,r),N,B=n[0].vector,F=n[0].point,K=F,ie=F,me=K,X=!1;for(let ae=0;ae<n.length;ae++){let{pressure:pe}=n[ae],{point:$e,vector:Pe,distance:Sn,runningLength:an}=n[ae];if(ae<n.length-1&&g-an<3)continue;if(i){if(l){let se=$a(1,Sn/a),ze=$a(1,1-se);pe=$a(1,S+(ze-S)*(se*xu))}A=bu(a,i,pe,r)}else A=a/2;N===void 0&&(N=A);let _n=an<w?m(an/w):1,Zn=g-an<T?h((g-an)/T):1;A=Math.max(.01,A*Math.min(_n,Zn));let Bt=(ae<n.length-1?n[ae+1]:n[ae]).vector,On=ae<n.length-1?yu(Pe,Bt):1,q=yu(Pe,B)<0&&!X,ee=On!==null&&On<0;if(q||ee){let se=Bn(Xa(B),A);for(let ze=1/13,Ne=0;Ne<=1;Ne+=ze)ie=es(Rn($e,se),$e,ns*Ne),z.push(ie),me=es(Vn($e,se),$e,ns*-Ne),b.push(me);F=ie,K=me,ee&&(X=!0);continue}if(X=!1,ae===n.length-1){let se=Bn(Xa(Pe),A);z.push(Rn($e,se)),b.push(Vn($e,se));continue}let te=Bn(Xa(El(Bt,Pe,On)),A);ie=Rn($e,te),(ae<=1||wu(F,ie)>x)&&(z.push(ie),F=ie),me=Vn($e,te),(ae<=1||wu(K,me)>x)&&(b.push(me),K=me),S=pe,B=Pe}let ve=n[0].point.slice(0,2),ye=n.length>1?n[n.length-1].point.slice(0,2):Vn(n[0].point,[1,1]),Te=[],Re=[];if(n.length===1){if(!(w||T)||p){let ae=Tu(ve,Tm(Xa(Rn(ve,ye))),-(N||A)),pe=[];for(let $e=1/13,Pe=$e;Pe<=1;Pe+=$e)pe.push(es(ae,ve,ns*2*Pe));return pe}}else{if(!(w||T&&n.length===1))if(d)for(let pe=1/13,$e=pe;$e<=1;$e+=pe){let Pe=es(b[0],ve,ns*$e);Te.push(Pe)}else{let pe=Rn(z[0],b[0]),$e=Bn(pe,.5),Pe=Bn(pe,.51);Te.push(Rn(ve,$e),Rn(ve,Pe),Vn(ve,Pe),Vn(ve,$e))}let ae=Xa(M0(n[n.length-1].vector));if(T||w&&n.length===1)Re.push(ye);else if(f){let pe=Tu(ye,ae,A);for(let $e=1/29,Pe=$e;Pe<1;Pe+=$e)Re.push(es(pe,ye,ns*3*Pe))}else Re.push(Vn(ye,Bn(ae,A)),Vn(ye,Bn(ae,A*.99)),Rn(ye,Bn(ae,A*.99)),Rn(ye,Bn(ae,A)))}return z.concat(Re,b.reverse(),Te)}function H0(n,t={}){var a;let{streamline:o=.5,size:i=16,last:l=!1}=t;if(n.length===0)return[];let r=.15+(1-o)*.85,c=Array.isArray(n[0])?n:n.map(({x:h,y:g,pressure:w=.5})=>[h,g,w]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let g=1;g<5;g++)c.push(El(c[0],h,g/4))}c.length===1&&(c=[...c,[...Vn(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,m=u[0],f=c.length-1;for(let h=1;h<c.length;h++){let g=l&&h===f?c[h].slice(0,2):El(m.point,c[h],r);if(E0(m.point,g))continue;let w=I0(g,m.point);if(d+=w,h<f&&!p){if(d<i)continue;p=!0}m={point:g,pressure:c[h][2]>=0?c[h][2]:.5,vector:Tm(Rn(m.point,g)),distance:w,runningLength:d},u.push(m)}return u[0].vector=((a=u[1])==null?void 0:a.vector)||[0,0],u}function P0(n,t={}){return O0(H0(n,t),t)}var R0=()=>({events:{},emit(n,...t){let a=this.events[n]||[];for(let o=0,i=a.length;o<i;o++)a[o](...t)},on(n,t){var a;return(a=this.events[n])!=null&&a.push(t)||(this.events[n]=[t]),()=>{var o;this.events[n]=(o=this.events[n])==null?void 0:o.filter(i=>t!==i)}}});function jo(n,t){return n-t}function N0(n){return n<0?-1:1}function Bo(n){return[Math.abs(n),N0(n)]}function xm(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var q0=2,ht=q0,Wa=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var t;const a=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-i.left)*o,y:(n.pageY-i.top)*o,pressure:n.pressure}}else{const i=this.drauu.svgPoint;i.x=n.clientX,i.y=n.clientY;const l=i.matrixTransform((t=a.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*o,y:l.y*o,pressure:n.pressure}}}createElement(n,t){const a=document.createElementNS("http://www.w3.org/2000/svg",n),o=t?{...this.brush,...t}:this.brush;return a.setAttribute("fill",o.fill??"transparent"),a.setAttribute("stroke",o.color),a.setAttribute("stroke-width",o.size.toString()),a.setAttribute("stroke-linecap","round"),o.dasharray&&a.setAttribute("stroke-dasharray",o.dasharray),a}attr(n,t){this.el.setAttribute(n,typeof t=="string"?t:t.toFixed(ht))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},F0=class extends Wa{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const t=P0(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const a=t.reduce((o,[i,l],r,c)=>{const[u,p]=c[(r+1)%c.length];return o.push(i,l,(i+u)/2,(l+p)/2),o},["M",...t[0],"Q"]);return a.push("Z"),a.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},W0=class extends Wa{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,a]=Bo(n.x-this.start.x),[o,i]=Bo(n.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[l,r]=[this.start.x,this.start.x+t*a].sort(jo),[c,u]=[this.start.y,this.start.y+o*i].sort(jo);this.attr("cx",(l+r)/2),this.attr("cy",(c+u)/2),this.attr("rx",(r-l)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function zm(n,t){const a=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",t),o.setAttribute("id",n),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(i),a.appendChild(o),a}var D0=class extends Wa{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const t=xm(),a=document.createElementNS("http://www.w3.org/2000/svg","g");return a.append(zm(t,this.brush.color)),a.append(this.el),this.attr("marker-end",`url(#${t})`),a}return this.el}onMove(n){if(!this.el)return!1;let{x:t,y:a}=n;if(this.shiftPressed){const o=n.x-this.start.x,i=n.y-this.start.y;if(i!==0){let l=o/i;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+i*l,a=this.start.y+i):(t=this.start.x+o,a=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-a),this.attr("x2",t),this.attr("y2",a)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",a)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},j0=class extends Wa{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,a]=Bo(n.x-this.start.x),[o,i]=Bo(n.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[l,r]=[this.start.x,this.start.x+t*a].sort(jo),[c,u]=[this.start.y,this.start.y+o*i].sort(jo);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",u-c)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function B0(n,t){const a=n.x-t.x,o=n.y-t.y;return a*a+o*o}function V0(n,t,a){let o=t.x,i=t.y,l=a.x-o,r=a.y-i;if(l!==0||r!==0){const c=((n.x-o)*l+(n.y-i)*r)/(l*l+r*r);c>1?(o=a.x,i=a.y):c>0&&(o+=l*c,i+=r*c)}return l=n.x-o,r=n.y-i,l*l+r*r}function U0(n,t){let a=n[0];const o=[a];let i;for(let l=1,r=n.length;l<r;l++)i=n[l],B0(i,a)>t&&(o.push(i),a=i);return a!==i&&i&&o.push(i),o}function Cl(n,t,a,o,i){let l=o,r=0;for(let c=t+1;c<a;c++){const u=V0(n[c],n[t],n[a]);u>l&&(r=c,l=u)}l>o&&(r-t>1&&Cl(n,t,r,o,i),i.push(n[r]),a-r>1&&Cl(n,r,a,o,i))}function K0(n,t){const a=n.length-1,o=[n[0]];return Cl(n,0,a,t,o),o.push(n[a]),o}function zu(n,t,a=!1){if(n.length<=2)return n;const o=t!==void 0?t*t:1;return n=a?n:U0(n,o),n=K0(n,o),n}var G0=class extends Wa{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=xm();const t=zm(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=zu(this.points,1,!0),this.count=0),this.attr("d",Mu(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",Mu(zu(this.points,1,!0))),!n.getTotalLength()))}};function Q0(n,t){const a=t.x-n.x,o=t.y-n.y;return{length:Math.sqrt(a**2+o**2),angle:Math.atan2(o,a)}}function $u(n,t,a,o){const i=t||n,l=a||n,r=.2,c=Q0(i,l),u=c.angle+(o?Math.PI:0),p=c.length*r,d=n.x+Math.cos(u)*p,m=n.y+Math.sin(u)*p;return{x:d,y:m}}function J0(n,t,a){const o=$u(a[t-1],a[t-2],n),i=$u(n,a[t-1],a[t+1],!0);return`C ${o.x.toFixed(ht)},${o.y.toFixed(ht)} ${i.x.toFixed(ht)},${i.y.toFixed(ht)} ${n.x.toFixed(ht)},${n.y.toFixed(ht)}`}function Mu(n){return n.reduce((t,a,o,i)=>o===0?`M ${a.x.toFixed(ht)},${a.y.toFixed(ht)}`:`${t} ${J0(a,o,i)}`,"")}var Z0=class extends Wa{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const t=(a,o)=>{if(a&&a.length)for(let i=0;i<a.length;i++){const l=a[i];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=l.getPointAtLength(r*c/this.pathSubFactor),p=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:o||l})}}else l.children&&t(l.children,l)}};n&&t(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const a=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(a,o)&&(a.element.remove(),n.push(t))}return n.length&&(this.pathFragments=this.pathFragments.filter((t,a)=>!n.includes(a))),n.length>0}lineLineIntersect(n,t){const a=n.x1,o=n.x2,i=t.x1,l=t.x2,r=n.y1,c=n.y2,u=t.y1,p=t.y2,d=(a-o)*(u-p)-(r-c)*(i-l),m=(a*c-r*o)*(i-l)-(a-o)*(i*p-u*l),f=(a*c-r*o)*(u-p)-(r-c)*(i*p-u*l),h=(g,w,T)=>g>=w&&g<=T?!0:g>=T&&g<=w;if(d===0)return!1;{const g={x:m/d,y:f/d};return h(g.x,a,o)&&h(g.y,r,c)&&h(g.x,i,l)&&h(g.y,u,p)}}};function Y0(n){return{draw:new G0(n),stylus:new F0(n),line:new D0(n),rectangle:new j0(n),ellipse:new W0(n),eraseLine:new Z0(n)}}var X0=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=R0(),this._models=Y0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const a=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),i=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);a.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{a.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,t){return this._emitter.on(n,t)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const t=this.model._eventUp(n);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function ey(n){return new X0(n)}const Al=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],tt=Jn("slidev-drawing-enabled",!1),rj=Jn("slidev-drawing-pinned",!1),ny=Y(!1),ty=Y(!1),ay=Y(!1),Is=Y(!1),ia=M1(Jn("slidev-drawing-brush",{color:Al[0],size:4,mode:"stylus"})),Lu=Y("stylus"),$m=W(()=>Ce.drawings.syncAll||kn.value);let Ss=!1;const ts=W({get(){return Lu.value},set(n){Lu.value=n,n==="arrow"?(ia.mode="line",ia.arrowEnd=!0):(ia.mode=n,ia.arrowEnd=!1)}}),sy=Be({brush:ia,acceptsInputTypes:W(()=>tt.value&&(!Ce.drawings.presenterOnly||kn.value)?void 0:["pen"]),coordinateTransform:!1}),gn=ni(ey(sy));function oy(){gn.clear(),$m.value&&Kd(Ue.value,"")}function $r(){var n;ty.value=gn.canRedo(),ny.value=gn.canUndo(),ay.value=!!((n=gn.el)!=null&&n.children.length)}function iy(n){Ss=!0;const t=Wo[n||Ue.value];t!=null?gn.load(t):gn.clear(),$r(),Ss=!1}gn.on("changed",()=>{if($r(),!Ss){const n=gn.dump(),t=Ue.value;(Wo[t]||"")!==n&&$m.value&&Kd(t,gn.dump())}});T1(n=>{Ss=!0,n[Ue.value]!=null&&gn.load(n[Ue.value]||""),Ss=!1,$r()});on(()=>{be(Ue,()=>{gn.mounted&&iy()},{immediate:!0})});gn.on("start",()=>Is.value=!0);gn.on("end",()=>Is.value=!1);window.addEventListener("keydown",n=>{if(!tt.value)return;const t=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let a=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?gn.redo():gn.undo():n.code==="Escape"?tt.value=!1:n.code==="KeyL"&&t?ts.value="line":n.code==="KeyA"&&t?ts.value="arrow":n.code==="KeyS"&&t?ts.value="stylus":n.code==="KeyR"&&t?ts.value="rectangle":n.code==="KeyE"&&t?ts.value="ellipse":n.code==="KeyC"&&t?oy():n.code.startsWith("Digit")&&t&&+n.code[5]<=Al.length?ia.color=Al[+n.code[5]-1]:a=!1,a&&(n.preventDefault(),n.stopPropagation())},!1);function Je(...n){return W(()=>n.every(t=>Ge(t)))}function Mn(n){return W(()=>!Ge(n))}const Eu=xk(),Pi=Jn("slidev-color-schema","auto"),Il=W(()=>Ce.colorSchema!=="auto"),Mr=W({get(){return Il.value?Ce.colorSchema==="dark":Pi.value==="auto"?Eu.value:Pi.value==="dark"},set(n){Il.value||(Pi.value=n===Eu.value?"auto":n?"dark":"light")}}),Mm=Zd(Mr);Qn&&be(Mr,n=>{const t=document.querySelector("html");t.classList.toggle("dark",n),t.classList.toggle("light",!n)},{immediate:!0});const yo=Y(1),wo=W(()=>Qe.length-1),An=Y(0),Lr=Y(0);function ly(){An.value>yo.value&&(An.value-=1)}function ry(){An.value<wo.value&&(An.value+=1)}function cy(){if(An.value>yo.value){let n=An.value-Lr.value;n<yo.value&&(n=yo.value),An.value=n}}function uy(){if(An.value<wo.value){let n=An.value+Lr.value;n>wo.value&&(n=wo.value),An.value=n}}function py(){const{escape:n,space:t,shift:a,left:o,right:i,up:l,down:r,enter:c,d:u,g:p,o:d}=bm;let m=[{name:"next_space",key:Je(t,Mn(a)),fn:Pt,autoRepeat:!0},{name:"prev_space",key:Je(t,a),fn:Rt,autoRepeat:!0},{name:"next_right",key:Je(i,Mn(a),Mn(dn)),fn:Pt,autoRepeat:!0},{name:"prev_left",key:Je(o,Mn(a),Mn(dn)),fn:Rt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Pt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Rt,autoRepeat:!0},{name:"next_down",key:Je(r,Mn(dn)),fn:Hs,autoRepeat:!0},{name:"prev_up",key:Je(l,Mn(dn)),fn:()=>Ps(!1),autoRepeat:!0},{name:"next_shift",key:Je(i,a),fn:Hs,autoRepeat:!0},{name:"prev_shift",key:Je(o,a),fn:()=>Ps(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(u,Mn(tt)),fn:Mm},{name:"toggle_overview",key:Je(d,Mn(tt)),fn:wm},{name:"hide_overview",key:Je(n,Mn(tt)),fn:()=>dn.value=!1},{name:"goto",key:Je(p,Mn(tt)),fn:()=>Ea.value=!Ea.value},{name:"next_overview",key:Je(i,dn),fn:ry},{name:"prev_overview",key:Je(o,dn),fn:ly},{name:"up_overview",key:Je(l,dn),fn:cy},{name:"down_overview",key:Je(r,dn),fn:uy},{name:"goto_from_overview",key:Je(c,dn),fn:()=>{qa(An.value),dn.value=!1}}];const f=new Set(m.map(g=>g.name));if(m.filter(g=>g.name&&f.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return m}const Lm=Je(Mn(z0),Mn($0),T0);function dy(n,t,a=!1){typeof n=="string"&&(n=bm[n]);const o=Je(n,Lm);let i=0,l;const r=()=>{if(clearTimeout(l),!o.value){i=0;return}a&&(l=setTimeout(r,Math.max(1e3-i*250,150)),i++),t()};return be(o,r,{flush:"sync"})}function my(n,t){return lk(n,a=>{Lm.value&&(a.repeat||t())})}function fy(){const n=py();new Map(n.map(a=>[a.key,a])).forEach(a=>{a.fn&&dy(a.key,a.fn,a.autoRepeat)}),my("f",()=>ym.toggle())}const hy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gy=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),_y=[gy];function vy(n,t){return k(),oe("svg",hy,_y)}const ky={name:"carbon-close",render:vy};function Er(n,t=""){var i,l;const a=["slidev-page",t],o=(l=(i=n==null?void 0:n.meta)==null?void 0:i.slide)==null?void 0:l.no;return o!=null&&a.push(`slidev-page-${o}`),a.filter(Boolean).join(" ")}const by=Se({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const t=n;$(L);const a=Y(),o=Pk(a),i=W(()=>t.width?t.width:o.width.value),l=W(()=>t.width?t.width/It:o.height.value);t.width&&ba(()=>{a.value&&(a.value.style.width=`${i.value}px`,a.value.style.height=`${l.value}px`)});const r=W(()=>i.value/l.value),c=W(()=>t.scale&&!Na.value?t.scale:r.value<It?i.value/St:l.value*It/St),u=W(()=>({height:`${wr}px`,width:`${St}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=W(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return En(Bd,c),(d,m)=>(k(),oe("div",{id:"slide-container",ref_key:"root",ref:a,class:Ve(p.value)},[e("div",{id:"slide-content",style:tn(u.value)},[Fn(d.$slots,"default")],4),Fn(d.$slots,"controls")],2))}});const E=(n,t)=>{const a=n.__vccOpts||n;for(const[o,i]of t)a[o]=i;return a},Em=E(by,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Cr=Se({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:t}){const a=Ze(n,"clicks",t),o=Ze(n,"clicksElements",t),i=Ze(n,"clicksDisabled",t),l=Ze(n,"clicksOrderMap",t);o.value.length=0,En(r1,n.route),En(c1,n.context),En(ms,a),En(fs,i),En(na,o),En(vl,l)},render(){var n,t;return this.$props.is?Tn(this.$props.is):(t=(n=this.$slots)==null?void 0:n.default)==null?void 0:t.call(n)}}),yy=["innerHTML"],wy=Se({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return $(L),(t,a)=>O(Wo)[t.page]?(k(),oe("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:O(Wo)[t.page]},null,8,yy)):ke("v-if",!0)}}),Cm=E(wy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Ty=Object.freeze(Object.defineProperty({__proto__:null,default:Cm},Symbol.toStringTag,{value:"Module"})),xy={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},zy=["onClick"],Ri=4*16*2,Cu=2*16,$y=Se({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:t}){const a=n;$(L);const o=Ze(a,"modelValue",t);function i(){o.value=!1}function l(m){qa(m),i()}function r(m){return m===An.value}const c=Ll.smaller("xs"),u=Ll.smaller("sm"),p=W(()=>c.value?ha.width.value-Ri:u.value?(ha.width.value-Ri-Cu)/2:300),d=W(()=>Math.floor((ha.width.value-Ri)/(p.value+Cu)));return ba(()=>{An.value=Ue.value,Lr.value=d.value}),(m,f)=>{const h=ky;return k(),oe(Ae,null,[td(e("div",xy,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tn(`grid-template-columns: repeat(auto-fit,minmax(${p.value}px,1fr))`)},[(k(!0),oe(Ae,null,Fa(O(Qe).slice(0,-1),(g,w)=>(k(),oe("div",{key:g.path,class:"relative"},[e("div",{class:Ve(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(w+1),"border-gray-400":!r(w+1)}]),style:tn(O(Tr)),onClick:T=>l(+g.path)},[(k(),M(Em,{key:g.path,width:p.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:v(()=>[g!=null&&g.component?(k(),M(O(Cr),{key:0,is:g.component,"clicks-disabled":!0,class:Ve(O(Er)(g)),route:g,context:"overview"},null,8,["is","class","route"])):ke("v-if",!0),C(Cm,{page:+g.path},null,8,["page"])]),_:2},1032,["width"]))],14,zy),e("div",{class:"absolute top-0 opacity-50",style:tn(`left: ${p.value+5}px`)},bn(w+1),5)]))),128))],4)],512),[[Sd,O(o)]]),O(o)?(k(),oe("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:i},[C(h)])):ke("v-if",!0)],64)}}});const My=E($y,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Ly="/3/html/assets/logo-b72bde5d.png",Ey={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Cy=Se({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:t}){const a=n;$(L);const o=Ze(a,"modelValue",t);function i(){o.value=!1}return(l,r)=>(k(),M(sd,null,[O(o)?(k(),oe("div",Ey,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>i())}),e("div",{class:Ve(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[Fn(l.$slots,"default")],2)])):ke("v-if",!0)],1024))}}),Ay=E(Cy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),Iy={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Sy=["innerHTML"],Oy=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Ly,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),s("dev ")])])],-1),Hy=Se({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:t}){const a=n;$(L);const o=Ze(a,"modelValue",t),i=W(()=>typeof Ce.info=="string");return(l,r)=>(k(),M(Ay,{modelValue:O(o),"onUpdate:modelValue":r[0]||(r[0]=c=>Ie(o)?o.value=c:null),class:"px-6 py-4"},{default:v(()=>[e("div",Iy,[i.value?(k(),oe("div",{key:0,class:"mb-4",innerHTML:O(Ce).info},null,8,Sy)):ke("v-if",!0),Oy])]),_:1},8,["modelValue"]))}});const Py=E(Hy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function vt(n){return Array.isArray?Array.isArray(n):Sm(n)==="[object Array]"}const Ry=1/0;function Ny(n){if(typeof n=="string")return n;let t=n+"";return t=="0"&&1/n==-Ry?"-0":t}function qy(n){return n==null?"":Ny(n)}function at(n){return typeof n=="string"}function Am(n){return typeof n=="number"}function Fy(n){return n===!0||n===!1||Wy(n)&&Sm(n)=="[object Boolean]"}function Im(n){return typeof n=="object"}function Wy(n){return Im(n)&&n!==null}function Cn(n){return n!=null}function Ni(n){return!n.trim().length}function Sm(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const Dy="Incorrect 'index' type",jy=n=>`Invalid value for key ${n}`,By=n=>`Pattern length exceeds max of ${n}.`,Vy=n=>`Missing ${n} property in key`,Uy=n=>`Property 'weight' in key '${n}' must be a positive integer`,Au=Object.prototype.hasOwnProperty;class Ky{constructor(t){this._keys=[],this._keyMap={};let a=0;t.forEach(o=>{let i=Om(o);a+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,a+=i.weight}),this._keys.forEach(o=>{o.weight/=a})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Om(n){let t=null,a=null,o=null,i=1,l=null;if(at(n)||vt(n))o=n,t=Iu(n),a=Sl(n);else{if(!Au.call(n,"name"))throw new Error(Vy("name"));const r=n.name;if(o=r,Au.call(n,"weight")&&(i=n.weight,i<=0))throw new Error(Uy(r));t=Iu(r),a=Sl(r),l=n.getFn}return{path:t,id:a,weight:i,src:o,getFn:l}}function Iu(n){return vt(n)?n:n.split(".")}function Sl(n){return vt(n)?n.join("."):n}function Gy(n,t){let a=[],o=!1;const i=(l,r,c)=>{if(Cn(l))if(!r[c])a.push(l);else{let u=r[c];const p=l[u];if(!Cn(p))return;if(c===r.length-1&&(at(p)||Am(p)||Fy(p)))a.push(qy(p));else if(vt(p)){o=!0;for(let d=0,m=p.length;d<m;d+=1)i(p[d],r,c+1)}else r.length&&i(p,r,c+1)}};return i(n,at(t)?t.split("."):t,0),o?a:a[0]}const Qy={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Jy={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,t)=>n.score===t.score?n.idx<t.idx?-1:1:n.score<t.score?-1:1},Zy={location:0,threshold:.6,distance:100},Yy={useExtendedSearch:!1,getFn:Gy,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var he={...Jy,...Qy,...Zy,...Yy};const Xy=/[^ ]+/g;function ew(n=1,t=3){const a=new Map,o=Math.pow(10,t);return{get(i){const l=i.match(Xy).length;if(a.has(l))return a.get(l);const r=1/Math.pow(l,.5*n),c=parseFloat(Math.round(r*o)/o);return a.set(l,c),c},clear(){a.clear()}}}class Ar{constructor({getFn:t=he.getFn,fieldNormWeight:a=he.fieldNormWeight}={}){this.norm=ew(a,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((a,o)=>{this._keysMap[a.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,at(this.docs[0])?this.docs.forEach((t,a)=>{this._addString(t,a)}):this.docs.forEach((t,a)=>{this._addObject(t,a)}),this.norm.clear())}add(t){const a=this.size();at(t)?this._addString(t,a):this._addObject(t,a)}removeAt(t){this.records.splice(t,1);for(let a=t,o=this.size();a<o;a+=1)this.records[a].i-=1}getValueForItemAtKeyId(t,a){return t[this._keysMap[a]]}size(){return this.records.length}_addString(t,a){if(!Cn(t)||Ni(t))return;let o={v:t,i:a,n:this.norm.get(t)};this.records.push(o)}_addObject(t,a){let o={i:a,$:{}};this.keys.forEach((i,l)=>{let r=i.getFn?i.getFn(t):this.getFn(t,i.path);if(Cn(r)){if(vt(r)){let c=[];const u=[{nestedArrIndex:-1,value:r}];for(;u.length;){const{nestedArrIndex:p,value:d}=u.pop();if(Cn(d))if(at(d)&&!Ni(d)){let m={v:d,i:p,n:this.norm.get(d)};c.push(m)}else vt(d)&&d.forEach((m,f)=>{u.push({nestedArrIndex:f,value:m})})}o.$[l]=c}else if(at(r)&&!Ni(r)){let c={v:r,n:this.norm.get(r)};o.$[l]=c}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Hm(n,t,{getFn:a=he.getFn,fieldNormWeight:o=he.fieldNormWeight}={}){const i=new Ar({getFn:a,fieldNormWeight:o});return i.setKeys(n.map(Om)),i.setSources(t),i.create(),i}function nw(n,{getFn:t=he.getFn,fieldNormWeight:a=he.fieldNormWeight}={}){const{keys:o,records:i}=n,l=new Ar({getFn:t,fieldNormWeight:a});return l.setKeys(o),l.setIndexRecords(i),l}function po(n,{errors:t=0,currentLocation:a=0,expectedLocation:o=0,distance:i=he.distance,ignoreLocation:l=he.ignoreLocation}={}){const r=t/n.length;if(l)return r;const c=Math.abs(o-a);return i?r+c/i:c?1:r}function tw(n=[],t=he.minMatchCharLength){let a=[],o=-1,i=-1,l=0;for(let r=n.length;l<r;l+=1){let c=n[l];c&&o===-1?o=l:!c&&o!==-1&&(i=l-1,i-o+1>=t&&a.push([o,i]),o=-1)}return n[l-1]&&l-o>=t&&a.push([o,l-1]),a}const aa=32;function aw(n,t,a,{location:o=he.location,distance:i=he.distance,threshold:l=he.threshold,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,includeMatches:u=he.includeMatches,ignoreLocation:p=he.ignoreLocation}={}){if(t.length>aa)throw new Error(By(aa));const d=t.length,m=n.length,f=Math.max(0,Math.min(o,m));let h=l,g=f;const w=c>1||u,T=w?Array(m):[];let x;for(;(x=n.indexOf(t,g))>-1;){let B=po(t,{currentLocation:x,expectedLocation:f,distance:i,ignoreLocation:p});if(h=Math.min(B,h),g=x+d,w){let F=0;for(;F<d;)T[x+F]=1,F+=1}}g=-1;let z=[],b=1,S=d+m;const A=1<<d-1;for(let B=0;B<d;B+=1){let F=0,K=S;for(;F<K;)po(t,{errors:B,currentLocation:f+K,expectedLocation:f,distance:i,ignoreLocation:p})<=h?F=K:S=K,K=Math.floor((S-F)/2+F);S=K;let ie=Math.max(1,f-K+1),me=r?m:Math.min(f+K,m)+d,X=Array(me+2);X[me+1]=(1<<B)-1;for(let ye=me;ye>=ie;ye-=1){let Te=ye-1,Re=a[n.charAt(Te)];if(w&&(T[Te]=+!!Re),X[ye]=(X[ye+1]<<1|1)&Re,B&&(X[ye]|=(z[ye+1]|z[ye])<<1|1|z[ye+1]),X[ye]&A&&(b=po(t,{errors:B,currentLocation:Te,expectedLocation:f,distance:i,ignoreLocation:p}),b<=h)){if(h=b,g=Te,g<=f)break;ie=Math.max(1,2*f-g)}}if(po(t,{errors:B+1,currentLocation:f,expectedLocation:f,distance:i,ignoreLocation:p})>h)break;z=X}const N={isMatch:g>=0,score:Math.max(.001,b)};if(w){const B=tw(T,c);B.length?u&&(N.indices=B):N.isMatch=!1}return N}function sw(n){let t={};for(let a=0,o=n.length;a<o;a+=1){const i=n.charAt(a);t[i]=(t[i]||0)|1<<o-a-1}return t}class Pm{constructor(t,{location:a=he.location,threshold:o=he.threshold,distance:i=he.distance,includeMatches:l=he.includeMatches,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:u=he.isCaseSensitive,ignoreLocation:p=he.ignoreLocation}={}){if(this.options={location:a,threshold:o,distance:i,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p},this.pattern=u?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(f,h)=>{this.chunks.push({pattern:f,alphabet:sw(f),startIndex:h})},m=this.pattern.length;if(m>aa){let f=0;const h=m%aa,g=m-h;for(;f<g;)d(this.pattern.substr(f,aa),f),f+=aa;if(h){const w=m-aa;d(this.pattern.substr(w),w)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:a,includeMatches:o}=this.options;if(a||(t=t.toLowerCase()),this.pattern===t){let g={isMatch:!0,score:0};return o&&(g.indices=[[0,t.length-1]]),g}const{location:i,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,ignoreLocation:p}=this.options;let d=[],m=0,f=!1;this.chunks.forEach(({pattern:g,alphabet:w,startIndex:T})=>{const{isMatch:x,score:z,indices:b}=aw(t,g,w,{location:i+T,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,includeMatches:o,ignoreLocation:p});x&&(f=!0),m+=z,x&&b&&(d=[...d,...b])});let h={isMatch:f,score:f?m/this.chunks.length:1};return f&&o&&(h.indices=d),h}}class jt{constructor(t){this.pattern=t}static isMultiMatch(t){return Su(t,this.multiRegex)}static isSingleMatch(t){return Su(t,this.singleRegex)}search(){}}function Su(n,t){const a=n.match(t);return a?a[1]:null}class ow extends jt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const a=t===this.pattern;return{isMatch:a,score:a?0:1,indices:[0,this.pattern.length-1]}}}class iw extends jt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class lw extends jt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const a=t.startsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,this.pattern.length-1]}}}class rw extends jt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const a=!t.startsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,t.length-1]}}}class cw extends jt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const a=t.endsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class uw extends jt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const a=!t.endsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,t.length-1]}}}class Rm extends jt{constructor(t,{location:a=he.location,threshold:o=he.threshold,distance:i=he.distance,includeMatches:l=he.includeMatches,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:u=he.isCaseSensitive,ignoreLocation:p=he.ignoreLocation}={}){super(t),this._bitapSearch=new Pm(t,{location:a,threshold:o,distance:i,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Nm extends jt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let a=0,o;const i=[],l=this.pattern.length;for(;(o=t.indexOf(this.pattern,a))>-1;)a=o+l,i.push([o,a-1]);const r=!!i.length;return{isMatch:r,score:r?0:1,indices:i}}}const Ol=[ow,Nm,lw,rw,uw,cw,iw,Rm],Ou=Ol.length,pw=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,dw="|";function mw(n,t={}){return n.split(dw).map(a=>{let o=a.trim().split(pw).filter(l=>l&&!!l.trim()),i=[];for(let l=0,r=o.length;l<r;l+=1){const c=o[l];let u=!1,p=-1;for(;!u&&++p<Ou;){const d=Ol[p];let m=d.isMultiMatch(c);m&&(i.push(new d(m,t)),u=!0)}if(!u)for(p=-1;++p<Ou;){const d=Ol[p];let m=d.isSingleMatch(c);if(m){i.push(new d(m,t));break}}}return i})}const fw=new Set([Rm.type,Nm.type]);class hw{constructor(t,{isCaseSensitive:a=he.isCaseSensitive,includeMatches:o=he.includeMatches,minMatchCharLength:i=he.minMatchCharLength,ignoreLocation:l=he.ignoreLocation,findAllMatches:r=he.findAllMatches,location:c=he.location,threshold:u=he.threshold,distance:p=he.distance}={}){this.query=null,this.options={isCaseSensitive:a,includeMatches:o,minMatchCharLength:i,findAllMatches:r,ignoreLocation:l,location:c,threshold:u,distance:p},this.pattern=a?t:t.toLowerCase(),this.query=mw(this.pattern,this.options)}static condition(t,a){return a.useExtendedSearch}searchIn(t){const a=this.query;if(!a)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let l=0,r=[],c=0;for(let u=0,p=a.length;u<p;u+=1){const d=a[u];r.length=0,l=0;for(let m=0,f=d.length;m<f;m+=1){const h=d[m],{isMatch:g,indices:w,score:T}=h.search(t);if(g){if(l+=1,c+=T,o){const x=h.constructor.type;fw.has(x)?r=[...r,...w]:r.push(w)}}else{c=0,l=0,r.length=0;break}}if(l){let m={isMatch:!0,score:c/l};return o&&(m.indices=r),m}}return{isMatch:!1,score:1}}}const Hl=[];function gw(...n){Hl.push(...n)}function Pl(n,t){for(let a=0,o=Hl.length;a<o;a+=1){let i=Hl[a];if(i.condition(n,t))return new i(n,t)}return new Pm(n,t)}const Vo={AND:"$and",OR:"$or"},Rl={PATH:"$path",PATTERN:"$val"},Nl=n=>!!(n[Vo.AND]||n[Vo.OR]),_w=n=>!!n[Rl.PATH],vw=n=>!vt(n)&&Im(n)&&!Nl(n),Hu=n=>({[Vo.AND]:Object.keys(n).map(t=>({[t]:n[t]}))});function qm(n,t,{auto:a=!0}={}){const o=i=>{let l=Object.keys(i);const r=_w(i);if(!r&&l.length>1&&!Nl(i))return o(Hu(i));if(vw(i)){const u=r?i[Rl.PATH]:l[0],p=r?i[Rl.PATTERN]:i[u];if(!at(p))throw new Error(jy(u));const d={keyId:Sl(u),pattern:p};return a&&(d.searcher=Pl(p,t)),d}let c={children:[],operator:l[0]};return l.forEach(u=>{const p=i[u];vt(p)&&p.forEach(d=>{c.children.push(o(d))})}),c};return Nl(n)||(n=Hu(n)),o(n)}function kw(n,{ignoreFieldNorm:t=he.ignoreFieldNorm}){n.forEach(a=>{let o=1;a.matches.forEach(({key:i,norm:l,score:r})=>{const c=i?i.weight:null;o*=Math.pow(r===0&&c?Number.EPSILON:r,(c||1)*(t?1:l))}),a.score=o})}function bw(n,t){const a=n.matches;t.matches=[],Cn(a)&&a.forEach(o=>{if(!Cn(o.indices)||!o.indices.length)return;const{indices:i,value:l}=o;let r={indices:i,value:l};o.key&&(r.key=o.key.src),o.idx>-1&&(r.refIndex=o.idx),t.matches.push(r)})}function yw(n,t){t.score=n.score}function ww(n,t,{includeMatches:a=he.includeMatches,includeScore:o=he.includeScore}={}){const i=[];return a&&i.push(bw),o&&i.push(yw),n.map(l=>{const{idx:r}=l,c={item:t[r],refIndex:r};return i.length&&i.forEach(u=>{u(l,c)}),c})}class Da{constructor(t,a={},o){this.options={...he,...a},this.options.useExtendedSearch,this._keyStore=new Ky(this.options.keys),this.setCollection(t,o)}setCollection(t,a){if(this._docs=t,a&&!(a instanceof Ar))throw new Error(Dy);this._myIndex=a||Hm(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Cn(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const a=[];for(let o=0,i=this._docs.length;o<i;o+=1){const l=this._docs[o];t(l,o)&&(this.removeAt(o),o-=1,i-=1,a.push(l))}return a}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:a=-1}={}){const{includeMatches:o,includeScore:i,shouldSort:l,sortFn:r,ignoreFieldNorm:c}=this.options;let u=at(t)?at(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return kw(u,{ignoreFieldNorm:c}),l&&u.sort(r),Am(a)&&a>-1&&(u=u.slice(0,a)),ww(u,this._docs,{includeMatches:o,includeScore:i})}_searchStringList(t){const a=Pl(t,this.options),{records:o}=this._myIndex,i=[];return o.forEach(({v:l,i:r,n:c})=>{if(!Cn(l))return;const{isMatch:u,score:p,indices:d}=a.searchIn(l);u&&i.push({item:l,idx:r,matches:[{score:p,value:l,norm:c,indices:d}]})}),i}_searchLogical(t){const a=qm(t,this.options),o=(c,u,p)=>{if(!c.children){const{keyId:m,searcher:f}=c,h=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(u,m),searcher:f});return h&&h.length?[{idx:p,item:u,matches:h}]:[]}const d=[];for(let m=0,f=c.children.length;m<f;m+=1){const h=c.children[m],g=o(h,u,p);if(g.length)d.push(...g);else if(c.operator===Vo.AND)return[]}return d},i=this._myIndex.records,l={},r=[];return i.forEach(({$:c,i:u})=>{if(Cn(c)){let p=o(a,c,u);p.length&&(l[u]||(l[u]={idx:u,item:c,matches:[]},r.push(l[u])),p.forEach(({matches:d})=>{l[u].matches.push(...d)}))}}),r}_searchObjectList(t){const a=Pl(t,this.options),{keys:o,records:i}=this._myIndex,l=[];return i.forEach(({$:r,i:c})=>{if(!Cn(r))return;let u=[];o.forEach((p,d)=>{u.push(...this._findMatches({key:p,value:r[d],searcher:a}))}),u.length&&l.push({idx:c,item:r,matches:u})}),l}_findMatches({key:t,value:a,searcher:o}){if(!Cn(a))return[];let i=[];if(vt(a))a.forEach(({v:l,i:r,n:c})=>{if(!Cn(l))return;const{isMatch:u,score:p,indices:d}=o.searchIn(l);u&&i.push({score:p,key:t,value:l,idx:r,norm:c,indices:d})});else{const{v:l,n:r}=a,{isMatch:c,score:u,indices:p}=o.searchIn(l);c&&i.push({score:u,key:t,value:l,norm:r,indices:p})}return i}}Da.version="6.6.2";Da.createIndex=Hm;Da.parseIndex=nw;Da.config=he;Da.parseQuery=qm;gw(hw);const Tw={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},xw=["value","disabled","onKeydown"],zw=["border","onClick"],$w={"w-4":"","text-right":"",op50:"","text-sm":""},Mw=Se({__name:"Goto",setup(n){$(L);const t=Y(),a=Y(),o=Y(),i=Y(),l=Y(""),r=Y(0);function c(b){return b!=null}const u=W(()=>new Da(Qe.map(b=>{var S;return(S=b.meta)==null?void 0:S.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),p=W(()=>l.value.startsWith("/")?l.value.substring(1):l.value),d=W(()=>u.value.search(p.value).map(b=>b.item)),m=W(()=>!!d.value.length);function f(){if(m.value){const b=d.value.at(r.value||0);b&&qa(b.no)}h()}function h(){l.value="",Ea.value=!1}function g(b){b.preventDefault(),r.value++,r.value>=d.value.length&&(r.value=0),T()}function w(b){b.preventDefault(),r.value--,r.value<=-2&&(r.value=d.value.length-1),T()}function T(){var S;const b=(S=i.value)==null?void 0:S[r.value];b&&o.value&&(b.offsetTop+b.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:b.offsetTop+b.offsetHeight-o.value.offsetHeight+1}):b.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:b.offsetTop}))}function x(b){r.value=0,l.value=b.target.value}function z(b){qa(b),h()}return be(Ea,async b=>{var S;b?(l.value="",r.value=0,setTimeout(()=>{var A;return(A=a.value)==null?void 0:A.focus()},0)):(S=a.value)==null||S.blur()}),be(Ht,()=>{var b;(b=t.value)!=null&&b.contains(Ht.value)||h()}),(b,S)=>(k(),oe("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:Ve(["fixed right-5 transition-all",O(Ea)?"top-5":"-top-20"]),"w-90":""},[e("div",Tw,[e("input",{ref_key:"input",ref:a,value:l.value,type:"text",disabled:!O(Ea),class:Ve(["outline-none bg-transparent",{"text-red-400":!m.value&&l.value}]),placeholder:"Goto...",onKeydown:[so(f,["enter"]),so(h,["escape"]),so(g,["down"]),so(w,["up"])],onInput:x},null,42,xw)]),d.value.length>0?(k(),oe("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(k(!0),oe(Ae,null,Fa(d.value,(A,N)=>(k(),oe("li",{ref_for:!0,ref_key:"items",ref:i,key:A.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:N===0?"":"t main",class:Ve(r.value===N?"bg-active op100":"op80"),onClick:cv(B=>z(A.no),["stop"])},[e("div",$w,bn(A.no),1),s(" "+bn(A.title),1)],10,zw))),128))],512)):ke("v-if",!0)],2))}});const Lw=E(Mw,[["__scopeId","data-v-f5ee02a7"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),Ew=Se({__name:"Controls",setup(n){$(L);const t=it(),a=it();return(o,i)=>(k(),oe(Ae,null,[C(My,{modelValue:O(dn),"onUpdate:modelValue":i[0]||(i[0]=l=>Ie(dn)?dn.value=l:null)},null,8,["modelValue"]),C(Lw),t.value?(k(),M(O(t),{key:0})):ke("v-if",!0),a.value?(k(),M(O(a),{key:1,modelValue:O(Oi),"onUpdate:modelValue":i[1]||(i[1]=l=>Ie(Oi)?Oi.value=l:null)},null,8,["modelValue"])):ke("v-if",!0),O(Ce).info?(k(),M(Py,{key:2,modelValue:O(_s),"onUpdate:modelValue":i[2]||(i[2]=l=>Ie(_s)?_s.value=l:null)},null,8,["modelValue"])):ke("v-if",!0)],64))}}),Cw=E(Ew,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),Aw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Iw=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Sw=[Iw];function Ow(n,t){return k(),oe("svg",Aw,Sw)}const Hw={name:"carbon-settings-adjust",render:Ow},Pw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rw=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Nw=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),qw=[Rw,Nw];function Fw(n,t){return k(),oe("svg",Pw,qw)}const Ww={name:"carbon-information",render:Fw},Dw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jw=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Bw=[jw];function Vw(n,t){return k(),oe("svg",Dw,Bw)}const Uw={name:"carbon-download",render:Vw},Kw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Gw=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Qw=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Jw=[Gw,Qw];function Zw(n,t){return k(),oe("svg",Kw,Jw)}const Yw={name:"carbon-user-speaker",render:Zw},Xw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},eT=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),nT=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),tT=[eT,nT];function aT(n,t){return k(),oe("svg",Xw,tT)}const sT={name:"carbon-presentation-file",render:aT},oT={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iT=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),lT=[iT];function rT(n,t){return k(),oe("svg",oT,lT)}const cT={name:"carbon-pen",render:rT},uT={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},pT=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),dT=[pT];function mT(n,t){return k(),oe("svg",uT,dT)}const fT={name:"ph-cursor-duotone",render:mT},hT={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},gT=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),_T=[gT];function vT(n,t){return k(),oe("svg",hT,_T)}const Fm={name:"ph-cursor-fill",render:vT},kT={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bT=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),yT=[bT];function wT(n,t){return k(),oe("svg",kT,yT)}const TT={name:"carbon-sun",render:wT},xT={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zT=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),$T=[zT];function MT(n,t){return k(),oe("svg",xT,$T)}const LT={name:"carbon-moon",render:MT},ET={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},CT=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),AT=[CT];function IT(n,t){return k(),oe("svg",ET,AT)}const ST={name:"carbon-apps",render:IT},OT={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},HT=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),PT=[HT];function RT(n,t){return k(),oe("svg",OT,PT)}const Wm={name:"carbon-arrow-right",render:RT},NT={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qT=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),FT=[qT];function WT(n,t){return k(),oe("svg",NT,FT)}const DT={name:"carbon-arrow-left",render:WT},jT={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},BT=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),VT=[BT];function UT(n,t){return k(),oe("svg",jT,VT)}const KT={name:"carbon-maximize",render:UT},GT={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},QT=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),JT=[QT];function ZT(n,t){return k(),oe("svg",GT,JT)}const YT={name:"carbon-minimize",render:ZT},XT={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ex=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),nx=[ex];function tx(n,t){return k(),oe("svg",XT,nx)}const ax={name:"carbon-checkmark",render:tx},sx={class:"select-list"},ox={class:"title"},ix={class:"items"},lx=["onClick"],rx=Se({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:t}){const a=n;$(L);const o=Ze(a,"modelValue",t,{passive:!0});return(i,l)=>{const r=ax;return k(),oe("div",sx,[e("div",ox,bn(n.title),1),e("div",ix,[(k(!0),oe(Ae,null,Fa(n.items,c=>(k(),oe("div",{key:c.value,class:Ve(["item",{active:O(o)===c.value}]),onClick:()=>{var u;o.value=c.value,(u=c.onClick)==null||u.call(c)}},[C(r,{class:Ve(["text-green-500",{"opacity-0":O(o)!==c.value}])},null,8,["class"]),s(" "+bn(c.display||c.value),1)],10,lx))),128))])])}}});const cx=E(rx,[["__scopeId","data-v-3f89fa11"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),ux={class:"text-sm"},px=Se({__name:"Settings",setup(n){$(L);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(a,o)=>(k(),oe("div",ux,[C(cx,{modelValue:O(bo),"onUpdate:modelValue":o[0]||(o[0]=i=>Ie(bo)?bo.value=i:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),dx=E(px,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),mx={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},fx=Se({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:t}){const a=n;$(L);const o=Ze(a,"modelValue",t,{passive:!0}),i=Y();return ok(i,()=>{o.value=!1}),(l,r)=>(k(),oe("div",{ref_key:"el",ref:i,class:"flex relative"},[e("button",{class:Ve({disabled:n.disabled}),onClick:r[0]||(r[0]=c=>o.value=!O(o))},[Fn(l.$slots,"button",{class:Ve({disabled:n.disabled})})],2),(k(),M(sd,null,[O(o)?(k(),oe("div",mx,[Fn(l.$slots,"menu")])):ke("v-if",!0)],1024))],512))}}),hx=E(fx,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),gx={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},_x={__name:"VerticalDivider",setup(n){return $(L),(t,a)=>(k(),oe("div",gx))}},mo=E(_x,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),vx={render(){return[]}},kx={class:"slidev-icon-btn"},bx={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},yx={class:"my-auto"},wx={class:"opacity-50"},Tx=Se({__name:"NavControls",props:{persist:{default:!1}},setup(n){const t=n;$(L);const a=Ll.smaller("md"),{isFullscreen:o,toggle:i}=ym,l=W(()=>Fl.value?`?password=${Fl.value}`:""),r=W(()=>`/presenter/${Ue.value}${l.value}`),c=W(()=>`/${Ue.value}${l.value}`),u=Y();function p(){u.value&&Ht.value&&u.value.contains(Ht.value)&&Ht.value.blur()}const d=W(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=it(),f=it();return Ot(()=>import("./DrawingControls-f461b91d.js"),[]).then(h=>f.value=h.default),(h,g)=>{const w=YT,T=KT,x=DT,z=Wm,b=ST,S=LT,A=TT,N=Fm,B=fT,F=cT,K=sT,ie=Ha("RouterLink"),me=Yw,X=Uw,ve=Ww,ye=Hw;return k(),oe("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[e("div",{class:Ve(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:p},[O(mt)?ke("v-if",!0):(k(),oe("button",{key:0,class:"slidev-icon-btn",onClick:g[0]||(g[0]=(...Te)=>O(i)&&O(i)(...Te))},[O(o)?(k(),M(w,{key:0})):(k(),M(T,{key:1}))])),e("button",{class:Ve(["slidev-icon-btn",{disabled:!O(xq)}]),onClick:g[1]||(g[1]=(...Te)=>O(Rt)&&O(Rt)(...Te))},[C(x)],2),e("button",{class:Ve(["slidev-icon-btn",{disabled:!O(Tq)}]),title:"Next",onClick:g[2]||(g[2]=(...Te)=>O(Pt)&&O(Pt)(...Te))},[C(z)],2),O(mt)?ke("v-if",!0):(k(),oe("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=Te=>O(wm)())},[C(b)])),O(Il)?ke("v-if",!0):(k(),oe("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=Te=>O(Mm)())},[O(Mr)?(k(),M(S,{key:0})):(k(),M(A,{key:1}))])),C(mo),O(mt)?ke("v-if",!0):(k(),oe(Ae,{key:3},[!O(kn)&&!O(a)&&m.value?(k(),oe(Ae,{key:0},[C(O(m)),C(mo)],64)):ke("v-if",!0),O(kn)?(k(),oe("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=Te=>Hi.value=!O(Hi))},[O(Hi)?(k(),M(N,{key:0})):(k(),M(B,{key:1,class:"opacity-50"}))])):ke("v-if",!0)],64)),(!O(Ce).drawings.presenterOnly||O(kn))&&!O(mt)?(k(),oe(Ae,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=Te=>tt.value=!O(tt))},[C(F),O(tt)?(k(),oe("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tn({background:O(ia).color})},null,4)):ke("v-if",!0)]),C(mo)],64)):ke("v-if",!0),O(mt)?ke("v-if",!0):(k(),oe(Ae,{key:5},[O(kn)?(k(),M(ie,{key:0,to:c.value,class:"slidev-icon-btn",title:"Play Mode"},{default:v(()=>[C(K)]),_:1},8,["to"])):ke("v-if",!0),O(vq)?(k(),M(ie,{key:1,to:r.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:v(()=>[C(me)]),_:1},8,["to"])):ke("v-if",!0),ke("v-if",!0)],64)),(k(),oe(Ae,{key:6},[O(Ce).download?(k(),oe("button",{key:0,class:"slidev-icon-btn",onClick:g[8]||(g[8]=(...Te)=>O(Wl)&&O(Wl)(...Te))},[C(X)])):ke("v-if",!0)],64)),!O(kn)&&O(Ce).info&&!O(mt)?(k(),oe("button",{key:7,class:"slidev-icon-btn",onClick:g[9]||(g[9]=Te=>_s.value=!O(_s))},[C(ve)])):ke("v-if",!0),!O(kn)&&!O(mt)?(k(),M(hx,{key:8},{button:v(()=>[e("button",kx,[C(ye)])]),menu:v(()=>[C(dx)]),_:1})):ke("v-if",!0),O(mt)?ke("v-if",!0):(k(),M(mo,{key:9})),e("div",bx,[e("div",yx,[s(bn(O(Ue))+" ",1),e("span",wx,"/ "+bn(O(kq)),1)])]),C(O(vx))],34)],512)}}}),xx=E(Tx,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),zx={style:{"font-size":"0.55rem","line-height":"1rem"}},$x=e("div",{class:"absolute bottom-0 left-1"},[ke(' <img src="https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png" width="60"> '),e("img",{src:"https://agnelli.it/wp-content/uploads/2025/02/Logo_Salesiani_Torino_Agnelli_light.png",width:"60"})],-1),Mx={class:"absolute bottom-1 left-89 text-gray-700"},Lx={key:0,class:"absolute bottom-1 right-1 text-gray-700"},Ex={__name:"global-top",setup(n){const t=$(L);return(a,o)=>(k(),oe("footer",zx,[$x,e("div",Mx," ITT E.Agnelli - Informatica - "+bn(O(t).configs.materia)+" - prof. Antonio Mancuso - a.s. "+bn(O(t).configs.as)+" - v "+bn(O(t).configs.version||0),1),O(t).nav.currentPage!==1&&O(t).nav.currentPage!=O(t).nav.total+1?(k(),oe("div",Lx,bn(O(t).nav.currentPage-1)+" / "+bn(O(t).nav.total-1),1)):ke("v-if",!0)]))}},Cx=E(Ex,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),Dm={render(){return[Tn(Cx)]}},jm={render(){return[]}},Ax={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Ix=Se({__name:"PresenterMouse",setup(n){return $(L),(t,a)=>{const o=Fm;return O(Ci).cursor?(k(),oe("div",Ax,[C(o,{class:"absolute",style:tn({left:`${O(Ci).cursor.x}%`,top:`${O(Ci).cursor.y}%`})},null,8,["style"])])):ke("v-if",!0)}}}),Sx=E(Ix,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Ox=Se({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){$(L),be(mn,()=>{var o,i;(o=mn.value)!=null&&o.meta&&mn.value.meta.preload!==!1&&(mn.value.meta.__preloaded=!0),(i=qi.value)!=null&&i.meta&&qi.value.meta.preload!==!1&&(qi.value.meta.__preloaded=!0)},{immediate:!0});const t=it();Ot(()=>import("./DrawingLayer-bf687b18.js"),[]).then(o=>t.value=o.default);const a=W(()=>Qe.filter(o=>{var i;return((i=o.meta)==null?void 0:i.__preloaded)||o===mn.value}));return(o,i)=>(k(),oe(Ae,null,[ke(" Global Bottom "),C(O(jm)),ke(" Slides "),C(tv,G(O(Mq),{id:"slideshow",tag:"div"}),{default:v(()=>[(k(!0),oe(Ae,null,Fa(a.value,l=>{var r;return td((k(),M(O(Cr),{key:l.path,is:l==null?void 0:l.component,clicks:l===O(mn)?O(Nn):0,"clicks-elements":((r=l.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:Ve(O(Er)(l)),route:l,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Sd,l===O(mn)]])}),128))]),_:1},16),ke(" Global Top "),C(O(Dm)),t.value?(k(),M(O(t),{key:0})):ke("v-if",!0),O(kn)?ke("v-if",!0):(k(),M(Sx,{key:1}))],64))}});const Hx=E(Ox,[["__scopeId","data-v-afb4231e"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Px=Se({__name:"PrintStyle",setup(n){$(L);function t(a,{slots:o}){if(o.default)return Tn("style",o.default())}return(a,o)=>(k(),M(t,null,{default:v(()=>[s(" @page { size: "+bn(O(St))+"px "+bn(O(wr))+"px; margin: 0px; } ",1)]),_:1}))}}),Bm=E(Px,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Rx=Se({__name:"Play",setup(n){$(L),fy();const t=Y();function a(l){var r;ku.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?Pt():Rt())}Lq(t);const o=W(()=>x0.value||ku.value);it();const i=it();return Ot(()=>import("./DrawingControls-f461b91d.js"),[]).then(l=>i.value=l.default),(l,r)=>(k(),oe(Ae,null,[O(Na)?(k(),M(Bm,{key:0})):ke("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:tn(O(Tr))},[C(Em,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:O(Na)?O(ha).width.value:void 0,scale:O(bo),onPointerdown:a},{default:v(()=>[C(Hx,{context:"slide"})]),controls:v(()=>[e("div",{class:Ve(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",O(Is)?"pointer-events-none":""]])},[C(xx,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!O(Ce).drawings.presenterOnly&&!O(mt)&&i.value?(k(),M(O(i),{key:0,class:"ml-0"})):ke("v-if",!0)]),_:1},8,["style","width","scale"]),ke("v-if",!0)],4),C(Cw)],64))}}),Nx=E(Rx,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Vm(n){return typeof n>"u"||n===null}function qx(n){return typeof n=="object"&&n!==null}function Fx(n){return Array.isArray(n)?n:Vm(n)?[]:[n]}function Wx(n,t){var a,o,i,l;if(t)for(l=Object.keys(t),a=0,o=l.length;a<o;a+=1)i=l[a],n[i]=t[i];return n}function Dx(n,t){var a="",o;for(o=0;o<t;o+=1)a+=n;return a}function jx(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var Bx=Vm,Vx=qx,Ux=Fx,Kx=Dx,Gx=jx,Qx=Wx,Ir={isNothing:Bx,isObject:Vx,toArray:Ux,repeat:Kx,isNegativeZero:Gx,extend:Qx};function Um(n,t){var a="",o=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(a+='in "'+n.mark.name+'" '),a+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!t&&n.mark.snippet&&(a+=`

`+n.mark.snippet),o+" "+a):o}function Os(n,t){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=t,this.message=Um(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Os.prototype=Object.create(Error.prototype);Os.prototype.constructor=Os;Os.prototype.toString=function(t){return this.name+": "+Um(this,t)};var sa=Os,Jx=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Zx=["scalar","sequence","mapping"];function Yx(n){var t={};return n!==null&&Object.keys(n).forEach(function(a){n[a].forEach(function(o){t[String(o)]=a})}),t}function Xx(n,t){if(t=t||{},Object.keys(t).forEach(function(a){if(Jx.indexOf(a)===-1)throw new sa('Unknown option "'+a+'" is met in definition of "'+n+'" YAML type.')}),this.options=t,this.tag=n,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(a){return a},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Yx(t.styleAliases||null),Zx.indexOf(this.kind)===-1)throw new sa('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var rn=Xx;function Pu(n,t){var a=[];return n[t].forEach(function(o){var i=a.length;a.forEach(function(l,r){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(i=r)}),a[i]=o}),a}function e2(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,a;function o(i){i.multi?(n.multi[i.kind].push(i),n.multi.fallback.push(i)):n[i.kind][i.tag]=n.fallback[i.tag]=i}for(t=0,a=arguments.length;t<a;t+=1)arguments[t].forEach(o);return n}function ql(n){return this.extend(n)}ql.prototype.extend=function(t){var a=[],o=[];if(t instanceof rn)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(a=a.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new sa("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");a.forEach(function(l){if(!(l instanceof rn))throw new sa("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new sa("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new sa("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof rn))throw new sa("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(ql.prototype);return i.implicit=(this.implicit||[]).concat(a),i.explicit=(this.explicit||[]).concat(o),i.compiledImplicit=Pu(i,"implicit"),i.compiledExplicit=Pu(i,"explicit"),i.compiledTypeMap=e2(i.compiledImplicit,i.compiledExplicit),i};var n2=ql,t2=new rn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),a2=new rn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),s2=new rn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),o2=new n2({explicit:[t2,a2,s2]});function i2(n){if(n===null)return!0;var t=n.length;return t===1&&n==="~"||t===4&&(n==="null"||n==="Null"||n==="NULL")}function l2(){return null}function r2(n){return n===null}var c2=new rn("tag:yaml.org,2002:null",{kind:"scalar",resolve:i2,construct:l2,predicate:r2,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function u2(n){if(n===null)return!1;var t=n.length;return t===4&&(n==="true"||n==="True"||n==="TRUE")||t===5&&(n==="false"||n==="False"||n==="FALSE")}function p2(n){return n==="true"||n==="True"||n==="TRUE"}function d2(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var m2=new rn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:u2,construct:p2,predicate:d2,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function f2(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function h2(n){return 48<=n&&n<=55}function g2(n){return 48<=n&&n<=57}function _2(n){if(n===null)return!1;var t=n.length,a=0,o=!1,i;if(!t)return!1;if(i=n[a],(i==="-"||i==="+")&&(i=n[++a]),i==="0"){if(a+1===t)return!0;if(i=n[++a],i==="b"){for(a++;a<t;a++)if(i=n[a],i!=="_"){if(i!=="0"&&i!=="1")return!1;o=!0}return o&&i!=="_"}if(i==="x"){for(a++;a<t;a++)if(i=n[a],i!=="_"){if(!f2(n.charCodeAt(a)))return!1;o=!0}return o&&i!=="_"}if(i==="o"){for(a++;a<t;a++)if(i=n[a],i!=="_"){if(!h2(n.charCodeAt(a)))return!1;o=!0}return o&&i!=="_"}}if(i==="_")return!1;for(;a<t;a++)if(i=n[a],i!=="_"){if(!g2(n.charCodeAt(a)))return!1;o=!0}return!(!o||i==="_")}function v2(n){var t=n,a=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(a=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return a*parseInt(t.slice(2),2);if(t[1]==="x")return a*parseInt(t.slice(2),16);if(t[1]==="o")return a*parseInt(t.slice(2),8)}return a*parseInt(t,10)}function k2(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Ir.isNegativeZero(n)}var b2=new rn("tag:yaml.org,2002:int",{kind:"scalar",resolve:_2,construct:v2,predicate:k2,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),y2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function w2(n){return!(n===null||!y2.test(n)||n[n.length-1]==="_")}function T2(n){var t,a;return t=n.replace(/_/g,"").toLowerCase(),a=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?a===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:a*parseFloat(t,10)}var x2=/^[-+]?[0-9]+e/;function z2(n,t){var a;if(isNaN(n))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ir.isNegativeZero(n))return"-0.0";return a=n.toString(10),x2.test(a)?a.replace("e",".e"):a}function $2(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Ir.isNegativeZero(n))}var M2=new rn("tag:yaml.org,2002:float",{kind:"scalar",resolve:w2,construct:T2,predicate:$2,represent:z2,defaultStyle:"lowercase"}),L2=o2.extend({implicit:[c2,m2,b2,M2]}),E2=L2,Km=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Gm=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function C2(n){return n===null?!1:Km.exec(n)!==null||Gm.exec(n)!==null}function A2(n){var t,a,o,i,l,r,c,u=0,p=null,d,m,f;if(t=Km.exec(n),t===null&&(t=Gm.exec(n)),t===null)throw new Error("Date resolve error");if(a=+t[1],o=+t[2]-1,i=+t[3],!t[4])return new Date(Date.UTC(a,o,i));if(l=+t[4],r=+t[5],c=+t[6],t[7]){for(u=t[7].slice(0,3);u.length<3;)u+="0";u=+u}return t[9]&&(d=+t[10],m=+(t[11]||0),p=(d*60+m)*6e4,t[9]==="-"&&(p=-p)),f=new Date(Date.UTC(a,o,i,l,r,c,u)),p&&f.setTime(f.getTime()-p),f}function I2(n){return n.toISOString()}var S2=new rn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:C2,construct:A2,instanceOf:Date,represent:I2});function O2(n){return n==="<<"||n===null}var H2=new rn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:O2}),Sr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function P2(n){if(n===null)return!1;var t,a,o=0,i=n.length,l=Sr;for(a=0;a<i;a++)if(t=l.indexOf(n.charAt(a)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function R2(n){var t,a,o=n.replace(/[\r\n=]/g,""),i=o.length,l=Sr,r=0,c=[];for(t=0;t<i;t++)t%4===0&&t&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(o.charAt(t));return a=i%4*6,a===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):a===18?(c.push(r>>10&255),c.push(r>>2&255)):a===12&&c.push(r>>4&255),new Uint8Array(c)}function N2(n){var t="",a=0,o,i,l=n.length,r=Sr;for(o=0;o<l;o++)o%3===0&&o&&(t+=r[a>>18&63],t+=r[a>>12&63],t+=r[a>>6&63],t+=r[a&63]),a=(a<<8)+n[o];return i=l%3,i===0?(t+=r[a>>18&63],t+=r[a>>12&63],t+=r[a>>6&63],t+=r[a&63]):i===2?(t+=r[a>>10&63],t+=r[a>>4&63],t+=r[a<<2&63],t+=r[64]):i===1&&(t+=r[a>>2&63],t+=r[a<<4&63],t+=r[64],t+=r[64]),t}function q2(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var F2=new rn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:P2,construct:R2,predicate:q2,represent:N2}),W2=Object.prototype.hasOwnProperty,D2=Object.prototype.toString;function j2(n){if(n===null)return!0;var t=[],a,o,i,l,r,c=n;for(a=0,o=c.length;a<o;a+=1){if(i=c[a],r=!1,D2.call(i)!=="[object Object]")return!1;for(l in i)if(W2.call(i,l))if(!r)r=!0;else return!1;if(!r)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function B2(n){return n!==null?n:[]}var V2=new rn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:j2,construct:B2}),U2=Object.prototype.toString;function K2(n){if(n===null)return!0;var t,a,o,i,l,r=n;for(l=new Array(r.length),t=0,a=r.length;t<a;t+=1){if(o=r[t],U2.call(o)!=="[object Object]"||(i=Object.keys(o),i.length!==1))return!1;l[t]=[i[0],o[i[0]]]}return!0}function G2(n){if(n===null)return[];var t,a,o,i,l,r=n;for(l=new Array(r.length),t=0,a=r.length;t<a;t+=1)o=r[t],i=Object.keys(o),l[t]=[i[0],o[i[0]]];return l}var Q2=new rn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:K2,construct:G2}),J2=Object.prototype.hasOwnProperty;function Z2(n){if(n===null)return!0;var t,a=n;for(t in a)if(J2.call(a,t)&&a[t]!==null)return!1;return!0}function Y2(n){return n!==null?n:{}}var X2=new rn("tag:yaml.org,2002:set",{kind:"mapping",resolve:Z2,construct:Y2});E2.extend({implicit:[S2,H2],explicit:[F2,V2,Q2,X2]});function Ru(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var ez=new Array(256),nz=new Array(256);for(var Ma=0;Ma<256;Ma++)ez[Ma]=Ru(Ma)?1:0,nz[Ma]=Ru(Ma);function tz(n){return Array.from(new Set(n))}function Nu(...n){let t,a,o;n.length===1?(t=0,o=1,[a]=n):[t,a,o=1]=n;const i=[];let l=t;for(;l<a;)i.push(l),l+=o||1;return i}function Qm(n,t){if(!t||t==="all"||t==="*")return Nu(1,n+1);const a=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))a.push(+o);else{const[i,l]=o.split("-",2);a.push(...Nu(+i,l?+l+1:n+1))}return tz(a).filter(o=>o<=n).sort((o,i)=>o-i)}function Jm(n){const t=W(()=>n.value.path),a=W(()=>Qe.length-1),o=W(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),i=W(()=>mi(o.value)),l=W(()=>Qe.find(f=>f.path===`${o.value}`)),r=W(()=>{var f,h,g;return(g=(h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:g.id}),c=W(()=>{var f,h;return((h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.layout)||(o.value===1?"cover":"default")}),u=W(()=>Qe.find(f=>f.path===`${Math.min(Qe.length,o.value+1)}`)),p=W(()=>Qe.filter(f=>{var h,g;return(g=(h=f.meta)==null?void 0:h.slide)==null?void 0:g.title}).reduce((f,h)=>(Or(f,h),f),[])),d=W(()=>Hr(p.value,l.value)),m=W(()=>Pr(d.value));return{route:n,path:t,total:a,currentPage:o,currentPath:i,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:m,downloadPDF:Wl,next:Pt,nextSlide:Hs,openInEditor:Eq,prev:Rt,prevSlide:Ps}}function Zm(n,t,a){const o=Y(0);on(()=>{wn.afterEach(async()=>{await on(),o.value+=1})});const i=W(()=>{var u,p;return o.value,((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),l=W(()=>{var u,p;return+(((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.clicks)??i.value.length)}),r=W(()=>a.value<Qe.length-1||n.value<l.value),c=W(()=>a.value>1||n.value>0);return{clicks:n,clicksElements:i,clicksTotal:l,hasNext:r,hasPrev:c}}const az=["id"],sz=Se({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:t}){const a=n,o=Ze(a,"clicksElements",t),i=W(()=>({height:`${wr}px`,width:`${St}px`})),l=it();Ot(()=>Promise.resolve().then(()=>Ty),void 0).then(p=>l.value=p.default);const r=W(()=>a.clicks),c=Zm(r,a.nav.currentRoute,a.nav.currentPage),u=W(()=>`${a.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return En(L,Be({nav:{...a.nav,...c},configs:Ce,themeConfigs:W(()=>Ce.themeConfig)})),(p,d)=>{var m;return k(),oe("div",{id:u.value,class:"print-slide-container",style:tn(i.value)},[C(O(jm)),C(O(Cr),{is:(m=p.route)==null?void 0:m.component,"clicks-elements":O(o),"onUpdate:clicksElements":d[0]||(d[0]=f=>Ie(o)?o.value=f:null),clicks:r.value,"clicks-disabled":!1,class:Ve(O(Er)(p.route)),route:p.route},null,8,["is","clicks-elements","clicks","class","route"]),l.value?(k(),M(O(l),{key:0,page:+p.route.path},null,8,["page"])):ke("v-if",!0),C(O(Dm))],12,az)}}}),qu=E(sz,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),oz=Se({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var l;const t=n;$(L);const a=Y(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),o=W(()=>t.route),i=Jm(o);return(r,c)=>(k(),oe(Ae,null,[C(qu,{"clicks-elements":a.value,"onUpdate:clicksElements":c[0]||(c[0]=u=>a.value=u),clicks:0,nav:O(i),route:o.value},null,8,["clicks-elements","nav","route"]),O(vs)?ke("v-if",!0):(k(!0),oe(Ae,{key:0},Fa(a.value.length,u=>(k(),M(qu,{key:u,clicks:u,nav:O(i),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),iz=E(oz,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),lz={id:"print-content"},rz=Se({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const t=n;$(L);const a=W(()=>t.width),o=W(()=>t.width/It),i=W(()=>a.value/o.value),l=W(()=>i.value<It?a.value/St:o.value*It/St);let r=Qe.slice(0,-1);Wn.value.query.range&&(r=Qm(r.length,Wn.value.query.range).map(p=>r[p-1]));const c=W(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return En(Bd,l),(u,p)=>(k(),oe("div",{id:"print-container",class:Ve(c.value)},[e("div",lz,[(k(!0),oe(Ae,null,Fa(O(r),d=>(k(),M(iz,{key:d.path,route:d},null,8,["route"]))),128))]),Fn(u.$slots,"controls")],2))}});const cz=E(rz,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),uz=Se({__name:"Print",setup(n){return $(L),ba(()=>{Na?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,a)=>(k(),oe(Ae,null,[O(Na)?(k(),M(Bm,{key:0})):ke("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tn(O(Tr))},[C(cz,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:O(ha).width.value},null,8,["style","width"])],4)],64))}});const pz=E(uz,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const dz={class:"slidev-layout end"},mz={__name:"end",setup(n){return $(L),(t,a)=>(k(),oe("div",dz,[Fn(t.$slots,"default",{},()=>[s("END")],!0)]))}},fz=E(mz,[["__scopeId","data-v-e532b98d"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function Fu(n){return n.startsWith("/")?"/3/html/"+n.slice(1):n}function hz(n,t=!1){const a=n&&["#","rgb","hsl"].some(i=>n.indexOf(i)===0),o={background:a?n:void 0,color:n&&!a?"white":void 0,backgroundImage:a?void 0:n?t?`linear-gradient(#0005, #0008), url(${Fu(n)})`:`url("${Fu(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const gz={class:"my-auto w-full"},_z=Se({__name:"cover",props:{background:{default:""}},setup(n){const t=n;$(L);const a=W(()=>hz(t.background,!0));return(o,i)=>(k(),oe("div",{class:"slidev-layout cover",style:tn(a.value)},[e("div",gz,[Fn(o.$slots,"default")])],4))}}),vz=E(_z,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),kz=e("h1",null,"Hyper Text Markup Language",-1),bz=e("p",null,"HTML per sviluppatori",-1),yz={class:"pt-12"},wz={class:"px-2 py-1"},Tz={__name:"1",setup(n){const t={theme:"default",background:"/cover.webp",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"TPSI",as:"2025/2026",version:"1.6.0"};return $(L),(a,o)=>{const i=Wm;return k(),M(vz,P(H(t)),{default:v(()=>[ke(` mapping esercizi

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
16 -> 20 `),kz,bz,e("div",yz,[e("span",wz,[s(" Premi spazio o "),C(i,{class:"inline"}),s(" per la prossima slide ")])])]),_:1},16)}}},xz=E(Tz,[["__file","/@slidev/slides/1.md"]]),zz={class:"cover"},$z=Se({__name:"Cover",props:{bg:{default:"yellow"},fg:{default:"black"},fs:{default:"80px"}},setup(n,{emit:t}){const a=n;$d(r=>({"759f654d-fs":O(l),"759f654d-bgcol":O(o),"759f654d-fgcol":O(i)})),$(L);const o=Ze(a,"bg",t),i=Ze(a,"fg",t),l=Ze(a,"fs",t);return(r,c)=>(k(),oe("div",zz,[Fn(r.$slots,"default")]))}});const zn=E($z,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/components/Cover.vue"]]),Mz={class:"slidev-layout default"},Lz={__name:"default",setup(n){return $(L),(t,a)=>(k(),oe("div",Mz,[Fn(t.$slots,"default")]))}},R=E(Lz,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),Ez=e("p",null," ",-1),Cz={__name:"2",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[Ez,C(i,{fs:"100px"},{default:v(()=>[s(" Introduzione ")]),_:1})]),_:1},16)}}},Az=E(Cz,[["__file","/@slidev/slides/2.md"]]),Iz=e("h1",null,"HTML",-1),Sz=e("p",null,[e("em",null,"H"),s("yper "),e("em",null,"T"),s("ext "),e("em",null,"M"),s("arkup "),e("em",null,"L"),s("anguage (linguaggio di markup per ipertesti), comunemente noto con l’acronimo di "),e("strong",null,"HTML"),s(", è un "),e("strong",null,"linguaggio di markup"),s(" per la creazione di una pagina web.")],-1),Oz=e("ul",null,[e("li",null,[e("p",null,"Originariamente nato per la formattazione e impaginazione di documenti ipertestuali (web 1.0), oggi è alla base dello sviluppo di siti ed applicazioni web.")]),e("li",null,[e("p",null,[s("Viene utilizzato principalmente per il disaccoppiamento della struttura logica di una pagina web (definita appunto dal markup "),e("strong",null,"HTML"),s(") dalla sua rappresentazione, gestita tramite gli stili "),e("strong",null,"CSS"),s(" e dalla sua logica di funzionamento implementata tramite il linguaggio "),e("strong",null,"JavaScript"),s(".")])]),e("li",null,[e("p",null,"L’HTML è un linguaggio di pubblico dominio, la cui sintassi è stabilita dal World Wide Web Consortium (W3C). La versione attuale, la quinta, è stata rilasciata dal W3C nell’ottobre 2014.")]),e("li",null,[e("p",null,"Il motivo principale che ha spinto il W3C e i suoi membri a sviluppare HTML5 è stata la necessità di fornire direttamente le funzionalità che in precedenza erano fruibili tramite estensioni proprietarie all’esterno dei browser, come Adobe Flash e simili. Un secondo obiettivo che gli sviluppatori si erano prefissati era quello di garantire una maggiore compatibilità tra i diversi browser, indipendentemente dalla piattaforma software utilizzata, e principalmente mirata all’espansione dei dispositivi mobili.")])],-1),Hz={__name:"3",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[Iz,Sz,Oz]),_:1},16))}},Pz=E(Hz,[["__file","/@slidev/slides/3.md"]]),Rz="/3/html/assets/html5_1-9e65f7ef.jpg",Nz=e("h1",null,"HTML",-1),qz=e("p",null," ",-1),Fz=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ul",null,[e("li",null,"HTML5 linguaggio evoluto per il markup o descrizione delle pagine HTML"),e("li",null,"Definito e standardizzato dal W3C (WWW Consortium)"),e("li",null,"Descrive la semantica ed il contenuto di una pagina Web"),e("li",null,"Definisce una serie di tecnologie correlate"),e("li",null,"Note come HTML Living Standard (è in continua evoluzione)")])]),e("div",null,[e("p",null,[e("img",{src:Rz,alt:"html5_1.jpg"})])])],-1),Wz={__name:"4",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[Nz,qz,Fz]),_:1},16))}},Dz=E(Wz,[["__file","/@slidev/slides/4.md"]]),jz="/3/html/assets/html5_2-f6246604.jpg",Bz=e("h1",null,"HTML",-1),Vz=e("p",null," ",-1),Uz=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("p",null,[s("Una "),e("strong",null,"pagina Web"),s(" contiene:")]),e("ul",null,[e("li",null,"immagini"),e("li",null,"audio"),e("li",null,"file multimediali"),e("li",null,"testo"),e("li",null,"hotword")]),e("p",null,[s("Le "),e("strong",null,"hotword"),s(" sono parti della pagina legate a link.")]),e("p",null,[s("I "),e("strong",null,"link"),s(" sono collegamenti che portano ad altre pagine o altre risorse.")])]),e("div",null,[e("p",null,[e("img",{src:jz,alt:"html5_2.jpg"})])])],-1),Kz={__name:"5",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[Bz,Vz,Uz]),_:1},16))}},Gz=E(Kz,[["__file","/@slidev/slides/5.md"]]),Qz=e("h1",null,"HTML",-1),Jz=e("p",null,[s("Il "),e("a",{href:"https://www.w3schools.com/",target:"_blank",rel:"noopener"},"sito web"),s(" del consorzio W3C, offre una preziosa fonte di informazioni per apprendere le tecnologie del web.")],-1),Zz=e("br",null,null,-1),Yz=e("div",{grid:"~ cols-2 gap-32"},[e("div",null,[e("h3",null,"HTML"),e("ul",null,[e("li",null,[e("a",{href:"https://www.w3schools.com/html/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/html/default.asp")]),e("li",null,[e("a",{href:"https://www.w3schools.com/tags/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/tags/default.asp")]),e("li",null,[e("a",{href:"https://htmlreference.io/",target:"_blank",rel:"noopener"},"https://htmlreference.io/")])])]),e("div",null,[e("h3",null,"CSS"),e("ul",null,[e("li",null,[e("a",{href:"https://www.w3schools.com/css/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/css/default.asp")]),e("li",null,[e("a",{href:"https://www.w3schools.com/cssref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/cssref/default.asp")]),e("li",null,[e("a",{href:"https://cssreference.io/",target:"_blank",rel:"noopener"},"https://cssreference.io/")])])])],-1),Xz=e("br",null,null,-1),e$=e("h3",null,"Java Script",-1),n$=e("ul",null,[e("li",null,[e("a",{href:"https://www.w3schools.com/js/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/js/default.asp")]),e("li",null,[e("a",{href:"https://www.w3schools.com/jsref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/jsref/default.asp")]),e("li",null,[e("a",{href:"https://devdocs.io/javascript/",target:"_blank",rel:"noopener"},"https://devdocs.io/javascript/")]),e("li",null,[e("a",{href:"https://javascript.info/",target:"_blank",rel:"noopener"},"https://javascript.info/")])],-1),t$={__name:"6",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[Qz,Jz,Zz,Yz,Xz,e$,n$]),_:1},16))}},a$=E(t$,[["__file","/@slidev/slides/6.md"]]),s$=e("h1",null,"HTML",-1),o$=e("p",null,"Allenarsi con HTML",-1),i$=e("p",null,"Qui una serie di link a risorse esterne molto utili per mettere a frutto quando si apprenderà durante il corso",-1),l$=e("p",null,"Per apprendere correttamente ed efficaciemente HTML è necessario fare tanto esercizio sviluppando pagine di complessità crescente in modo da capire come usare i vari tag ed imparare a risolvere i problemi che si presentano durante la realizzazione di una pagina web",-1),r$=e("div",{grid:"~ cols-2 gap-32"},[e("div",null,[e("ul",null,[e("li",null,[e("a",{href:"https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app",target:"_blank",rel:"noopener"},"Build a Cat Photo App")]),e("li",null,[e("a",{href:"https://www.w3docs.com/exercise/html",target:"_blank",rel:"noopener"},"W3Docs HTML Excercie")]),e("li",null,[e("a",{href:"https://web.dev/learn/html/welcome",target:"_blank",rel:"noopener"},"Google Web.dev HTML")]),e("li",null,[e("a",{href:"https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-forms-by-building-a-registration-form",target:"_blank",rel:"noopener"},"Learn HTML Forms by Building a Registration Form")]),e("li",null,[e("a",{href:"https://www.codecademy.com/learn/learn-html",target:"_blank",rel:"noopener"},"Learn HTML on Codecademy")]),e("li",null,[e("a",{href:"https://codier.io/",target:"_blank",rel:"noopener"},"Codier")]),e("li",null,[e("a",{href:"https://codedamn.com/challenge/30-days-of-html-css",target:"_blank",rel:"noopener"},"30 Days of Challenges")]),e("li",null,[e("a",{href:"https://www.codecademy.com/resources/blog/html-and-css-code-challenges-for-beginners/",target:"_blank",rel:"noopener"},"10 Challenges")])])]),e("div",null,[e("ul",null,[e("li",null,[e("a",{href:"https://www.codecademy.com/learn/learn-html",target:"_blank",rel:"noopener"},"Learn HTML")]),e("li",null,[e("a",{href:"https://brainstation.io/learn/html",target:"_blank",rel:"noopener"},"Brainstation HTML")]),e("li",null,[e("a",{href:"https://www.geeksforgeeks.org/html-exercises/",target:"_blank",rel:"noopener"},"Geek for Geek")]),e("li",null,[e("a",{href:"https://www.101computing.net/html-css-javascript-challenges/",target:"_blank",rel:"noopener"},"HTML Challenges")]),e("li",null,[e("a",{href:"http://testingchallenges.thetestingmap.org/",target:"_blank",rel:"noopener"},"Testing Challenge")]),e("li",null,[e("a",{href:"https://www.w3schools.com/html/html_quiz.asp",target:"_blank",rel:"noopener"},"W3C HTML Quiz")]),e("li",null,[e("a",{href:"https://www.w3schools.com/html/html_exercises.asp",target:"_blank",rel:"noopener"},"W3C HTML Excerices")]),e("li",null,[e("a",{href:"https://www.codechef.com/practice/html",target:"_blank",rel:"noopener"},"7 Projects")]),e("li",null,[e("a",{href:"https://www.w3resource.com/html-css-exercise/basic/",target:"_blank",rel:"noopener"},"W3 Resouce")])])])],-1),c$={__name:"7",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[s$,o$,i$,l$,r$]),_:1},16))}},u$=E(c$,[["__file","/@slidev/slides/7.md"]]),p$=e("h1",null,"HTML",-1),d$=e("p",null,"Materiale Aggiuntivo",-1),m$=e("br",null,null,-1),f$=e("div",{class:"grid grid-cols-2 grid-rows-1 gap-4",style:{padding:"0px","margin-left":"0%"}},[e("div",null,[e("ul",null,[e("li",null,[e("a",{href:"/support/3/html/pdf/html_attributes_01.pdf",target:"_blank",rel:"noopener"},"HTML Attributes 1")]),e("li",null,[e("a",{href:"/support/3/html/pdf/html_attributes_02.pdf",target:"_blank",rel:"noopener"},"HTML Attributes 2")]),e("li",null,[e("a",{href:"/support/3/html/pdf/html_ui_design.pdf",target:"_blank",rel:"noopener"},"HTML UI design")]),e("li",null,[e("a",{href:"/support/3/html/pdf/PWA.pdf",target:"_blank",rel:"noopener"},"PWA")]),e("li",null,[e("a",{href:"/support/3/html/pdf/Cookies.pdf",target:"_blank",rel:"noopener"},"Cookies")]),e("li",null,[e("a",{href:"/support/3/html/pdf/Free_websites_to_deploy_code.pdf",target:"_blank",rel:"noopener"},"Free_websites_to_deploy_code")]),e("li",null,[e("a",{href:"/support/3/html/pdf/duckett.pdf",target:"_blank",rel:"noopener"},"Ducket")]),e("li",null,[e("a",{href:"/support/3/html/epub/Build_an_HTML5_Game_Karl_Bunyan.epub",target:"_blank",rel:"noopener"},"Build HTML5 Game")]),e("li",null,[e("a",{href:"/support/3/html/epub/Foundation_HTML5_Canvas_Rob_Hawkes.epub",target:"_blank",rel:"noopener"},"HTML5 Canvas")]),e("li",null,[e("a",{href:"/support/3/html/epub/HTML5_Game_Development_by_Example.epub",target:"_blank",rel:"noopener"},"HTML5 Game Development")])])]),e("div",null,[e("ul",null,[e("li",null,[e("a",{href:"/support/3/html/epub/HTML5_Games_Most_Wanted_Build_the_Best_HTML5_Games.epub",target:"_blank",rel:"noopener"},"HTML5 Game MOst Wanted")]),e("li",null,[e("a",{href:"/support/3/html/epub/HTML5_Games_Novice_to_Ninja_Earle_Castledine.epub",target:"_blank",rel:"noopener"},"HTML5 Game Novice to Ninja")]),e("li",null,[e("a",{href:"/support/3/html/pdf/html_seo.pdf",target:"_blank",rel:"noopener"},"HTML SEO")]),e("li",null,[e("a",{href:"/support/3/html/pdf/html_cheatsheet_01.pdf",target:"_blank",rel:"noopener"},"HTML Cheatsheet 1")]),e("li",null,[e("a",{href:"/support/3/html/pdf/html_cheatsheet_02.pdf",target:"_blank",rel:"noopener"},"HTML Cheatsheet 2")]),e("li",null,[e("a",{href:"/support/3/html/epub/HTML5_Quick_Markup_Reference_Wallace_Jackson.epub",target:"_blank",rel:"noopener"},"HTML5 Quick Markup Guide")]),e("li",null,[e("a",{href:"/support/3/html/epub/HTML_Manual_of_Style_A_Clear_Concise_Reference.epub",target:"_blank",rel:"noopener"},"HTML Manual of Style")]),e("li",null,[e("a",{href:"/support/3/html/epub/The_Essential_Guide_to_HTML5_Games.epub",target:"_blank",rel:"noopener"},"Essential Guide to HTML5")]),e("li",null,[e("a",{href:"/support/3/html/epub/The_HTML_Handbook_Flavio_Copes.epub",target:"_blank",rel:"noopener"},"HTML Handkbook")]),e("li",null,[e("a",{href:"/support/3/html/epub/Web_Coding_Development_AllinOne_For_Dummies_Paul_McFedries.epub",target:"_blank",rel:"noopener"},"Web Coding Development")])])])],-1),h$={__name:"8",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[p$,d$,m$,f$]),_:1},16))}},g$=E(h$,[["__file","/@slidev/slides/8.md"]]),_$=e("p",null," ",-1),v$={__name:"9",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[_$,C(i,{fs:"100px"},{default:v(()=>[s(" Ambiente di Sviluppo ")]),_:1})]),_:1},16)}}},k$=E(v$,[["__file","/@slidev/slides/9.md"]]),b$=e("h1",null,"HTML - Ambiente di sviluppo",-1),y$=e("p",null," ",-1),w$=e("ul",null,[e("li",null,"Al fine di comprendere appieno lo sviluppo web, è preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice"),e("li",null,"Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web"),e("li",null,"Il passaggio ad un sistema autore o ad un CMS risulta poi più facile e intuitivo.")],-1),T$={__name:"10",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[b$,y$,w$]),_:1},16))}},x$=E(T$,[["__file","/@slidev/slides/10.md"]]),z$="/3/html/assets/html5_3-98b93fb7.jpg",$$=e("h1",null,"HTML - Ambiente di sviluppo",-1),M$=e("p",null,[e("a",{href:"https://code.visualstudio.com/docs/languages/html",target:"_blank",rel:"noopener"},"Visual Studio Code")],-1),L$=e("div",{grid:"~ cols-2 gap-32"},[e("div",null,[e("ul",null,[e("li",null,"Qualsiasi editor testuale è adatto allo sviluppo web"),e("li",null,[e("strong",null,"Visual Studio Code"),s(" fornisce supporto al HTML in modo nativo")]),e("li",null,"Fornisce il syntax highlighting, smart completions con IntelliSense e formattazione customizzabile"),e("li",null,"In aggiunta sono disponibili moltissime estensioni per facilitare lo sviluppo web")])]),e("div",null,[e("p",null,[e("img",{src:z$,alt:"html5_3.jpg"})])])],-1),E$={__name:"11",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[$$,M$,L$]),_:1},16))}},C$=E(E$,[["__file","/@slidev/slides/11.md"]]),A$="/3/html/assets/html5_4-d48b4fdd.jpg",I$=e("h1",null,"HTML - Ambiente di sviluppo",-1),S$=e("p",null,"Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.",-1),O$=e("p",null,[e("img",{src:A$,alt:"html5_4.jpg"})],-1),H$={__name:"12",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[I$,S$,O$]),_:1},16))}},P$=E(H$,[["__file","/@slidev/slides/12.md"]]),R$=e("h1",null,"HTML - Ambiente di sviluppo",-1),N$=e("p",null," ",-1),q$=e("ul",null,[e("li",null,"Quindi per sviluppare una pagina web usiamo vscode (o il nostro editor preferito)"),e("li",null,"Scriviamo il codice di markup della pagina"),e("li",null,"Salviamo con estensione .html"),e("li",null,"Apriamo il file nel browser (CTRL + o o drag’n drop)"),e("li",null,"La pagina viene visualizzata all’interno del browser")],-1),F$={__name:"13",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[R$,N$,q$]),_:1},16))}},W$=E(F$,[["__file","/@slidev/slides/13.md"]]),D$=e("p",null," ",-1),j$={__name:"14",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[D$,C(i,{fs:"100px"},{default:v(()=>[s(" Tag e Attributi ")]),_:1})]),_:1},16)}}},B$=E(j$,[["__file","/@slidev/slides/14.md"]]),V$={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},U$=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),K$=[U$];function G$(n,t){return k(),oe("svg",V$,K$)}const Q$={name:"ph-clipboard",render:G$},J$={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Z$=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Y$=[Z$];function X$(n,t){return k(),oe("svg",J$,Y$)}const eM={name:"ph-check-circle",render:X$},nM=["title"],tM=Se({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const t=n;$(L);const a=$(ms),o=$(na),i=$(fs);function l(m=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=h.length;for(let w=0;w<m;w++)f.push(h.charAt(Math.floor(Math.random()*g)));return f.join("")}const r=Y(),c=xn();bt(()=>{const m=t.at==null?o==null?void 0:o.value.length:t.at,f=W(()=>i!=null&&i.value?t.ranges.length-1:Math.min(Math.max(0,((a==null?void 0:a.value)||0)-(m||0)),t.ranges.length-1)),h=W(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(i!=null&&i.value)){const g=l(),w=m1(t.ranges.length-1).map(T=>g+T);o!=null&&o.value&&(o.value.push(...w),Bs(()=>w.forEach(T=>kl(o.value,T)),c))}ba(()=>{if(!r.value)return;const w=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const T of w){const x=Array.from(T.querySelectorAll(".line")),z=Qm(x.length,h.value);if(x.forEach((b,S)=>{const A=z.includes(S+1);b.classList.toggle(Zt,!0),b.classList.toggle("highlighted",A),b.classList.toggle("dishonored",!A)}),t.maxHeight){const b=Array.from(T.querySelectorAll(".line.highlighted"));b.reduce((A,N)=>N.offsetHeight+A,0)>r.value.offsetHeight?b[0].scrollIntoView({behavior:"smooth",block:"start"}):b.length>0&&b[Math.round((b.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=mk();function d(){var f,h;const m=(h=(f=r.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;m&&p(m)}return(m,f)=>{const h=eM,g=Q$;return k(),oe("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:tn({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Fn(m.$slots,"default"),O(Ce).codeCopy?(k(),oe("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:O(u)?"Copied":"Copy",onClick:f[0]||(f[0]=w=>d())},[O(u)?(k(),M(h,{key:0,class:"p-2 w-8 h-8"})):(k(),M(g,{key:1,class:"p-2 w-8 h-8"}))],8,nM)):ke("v-if",!0)],4)}}}),le=E(tM,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),aM=e("h1",null,"TAG",-1),sM=e("p",null,"I TAG HTML sono marcatori (Markup Language) che modificano la semantica (senso, ruolo organizzazione) dei contenuti di una pagina.",-1),oM=e("h3",null,"Anatomia di un TAG",-1),iM=e("ul",null,[e("li",null,"Un tag è racchiuso tra < e >"),e("li",null,"Il nome del tag è sempre scritto in minuscolo"),e("li",null,[s("Se non specificato deve sempre esserci un tag di "),e("strong",null,"apertura"),s(" ed un tag di "),e("strong",null,"chiusura")])],-1),lM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),e("span",{class:"token punctuation"},">")]),s(" --> TAG di apertura")])])],-1),rM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")]),s(" --> TAG di chiusura")])])],-1),cM=e("p",null,"Il contenuto da modificare è compreso tra il tag di apertura ed il tag di chiusura",-1),uM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])])])],-1),pM={__name:"15",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[aM,sM,oM,iM,C(i,G({},{ranges:[""]}),{default:v(()=>[lM]),_:1},16),C(i,G({},{ranges:[""]}),{default:v(()=>[rM]),_:1},16),cM,C(i,G({},{ranges:[""]}),{default:v(()=>[uM]),_:1},16)]),_:1},16)}}},dM=E(pM,[["__file","/@slidev/slides/15.md"]]),mM=e("h1",null,"TAG singleton",-1),fM=e("p",null,"Elementi HTML con il solo tag di apertura.",-1),hM=e("ul",null,[e("li",null,[s("In HTML sono definiti una serie di tag, detti "),e("em",null,"singleton"),s(" che non richiedono il tag di chiusura.")]),e("li",null,"Per essere formalmente corretti questi elementi devono essere scritti in questo modo:")],-1),gM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tag")]),s(),e("span",{class:"token punctuation"},"/>")]),s(": notare lo slash finale che indica la mancanza di un tag di chiusura.")])])],-1),_M=e("p",null,"Qui la lista dei tag singleton che non richiedono una chiusura.",-1),vM=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("area")]),e("span",{class:"token punctuation"},">")])]),s(`
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
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("wbr")]),e("span",{class:"token punctuation"},">")])])])])])],-1),kM={__name:"16",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[mM,fM,hM,C(i,G({},{ranges:[""]}),{default:v(()=>[gM]),_:1},16),_M,vM]),_:1},16)}}},bM=E(kM,[["__file","/@slidev/slides/16.md"]]),yM=e("h1",null,"Attributi",-1),wM=e("p",null,"Caratteristiche addizionali di un TAG",-1),TM=e("ul",null,[e("li",null,[s("I tag HTML possono avere degli "),e("strong",null,"attributi"),s(" che forniscono delle informazioni addizionali al browser.")]),e("li",null,[s("Gli attributi sono "),e("strong",null,"sempre"),s(" specificati nel tag di apertura.")]),e("li",null,"Gli attributi sono definiti da una coppia nome-valore")],-1),xM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),s(),e("span",{class:"token attr-name"},"nome"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])])])],-1),zM=e("ul",null,[e("li",null,"Un tag può avere 0, 1 o più attributi")],-1),$M=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),s(),e("span",{class:"token attr-name"},"nome"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tagname")]),s(),e("span",{class:"token attr-name"},"nome1"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore1"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"nome2"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore2"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"nome3"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("valore3"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tagname")]),e("span",{class:"token punctuation"},">")])])])],-1),MM=e("p",null,[e("br"),e("strong",null,"Esempio:")],-1),LM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meta")]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("author"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Antonio Mancuso"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),s(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://www.w3schools.com"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Visit W3Schools"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("a")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("p")]),s(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"color"),e("span",{class:"token punctuation"},":"),s("red"),e("span",{class:"token punctuation"},";")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")]),s("This is a red paragraph."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("p")]),e("span",{class:"token punctuation"},">")])])])],-1),EM={__name:"17",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[yM,wM,TM,C(i,G({},{ranges:[""]}),{default:v(()=>[xM]),_:1},16),zM,C(i,G({},{ranges:[""]}),{default:v(()=>[$M]),_:1},16),MM,C(i,G({},{ranges:[""]}),{default:v(()=>[LM]),_:1},16)]),_:1},16)}}},CM=E(EM,[["__file","/@slidev/slides/17.md"]]),AM=e("p",null," ",-1),IM={__name:"18",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[AM,C(i,{fs:"80px"},{default:v(()=>[s(" La struttura di una pagina Web ")]),_:1})]),_:1},16)}}},SM=E(IM,[["__file","/@slidev/slides/18.md"]]),OM=e("h1",null,"Struttura pagina HTML",-1),HM=e("p",null,"Una pagina HTML ha una struttuta fissa che deve sempre essere rispettata.",-1),PM=e("p",null,"Una generica pagina HTML è composta da 3 sezioni principali:",-1),RM=e("ol",null,[e("li",null,[e("strong",null,"Documento"),s(": il contenitore di più alto livello, che racchiude tutte le altre sezioni della pagina HTML.")]),e("li",null,[e("strong",null,"Head"),s(": il contenitore per i metadati (dato che descrive un dato) del documento e va inserito in testa al docuemnto.")]),e("li",null,[e("strong",null,"Body"),s(": consiste nel contenuto principale della pagina HTML.")])],-1),NM={__name:"19",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[OM,HM,PM,RM]),_:1},16))}},qM=E(NM,[["__file","/@slidev/slides/19.md"]]),FM="/3/html/assets/html5_5-a532b0f3.jpg",WM=e("h1",null,"Struttura pagina HTML",-1),DM=e("p",null,"Rappresentazione grafica della struttura di una pagina HTML",-1),jM=e("p",null,[e("img",{src:FM,alt:"html5_5.jpg"})],-1),BM={__name:"20",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[WM,DM,jM]),_:1},16))}},VM=E(BM,[["__file","/@slidev/slides/20.md"]]),UM=e("h1",null,"Struttura pagina HTML",-1),KM=e("p",null,"Documento HTML",-1),GM=e("ul",null,[e("li",null,"Tutti i documenti HTML devono iniziare con la dichiarazione DOCTYPE che deve essere seguita dal TAG di più alto livello")],-1),QM=e("br",null,null,-1),JM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token doctype"},[e("span",{class:"token punctuation"},"<!"),e("span",{class:"token doctype-tag"},"DOCTYPE"),s(),e("span",{class:"token name"},"html"),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("html")]),e("span",{class:"token punctuation"},">")])])])],-1),ZM=e("br",null,null,-1),YM=e("ul",null,[e("li",null,[e("strong",null,"<!DOCTYPE html>"),s(": rappresenta il tipo di documento (html) e permette al browser di visualizzare la pagina HTML in modo corretto.")]),e("li",null,"Deve apparire nella pagina 1 sola volta come prima linea e prima di qualsiasi altro elemento o tag."),e("li",null,[e("strong",null,"<html>"),s(": è il primo tag di apertura che indica l’inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.")])],-1),XM={__name:"21",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[UM,KM,GM,QM,C(i,G({},{ranges:[""]}),{default:v(()=>[JM]),_:1},16),ZM,YM]),_:1},16)}}},e3=E(XM,[["__file","/@slidev/slides/21.md"]]),n3=e("h1",null,"Struttura pagina HTML",-1),t3=e("p",null,"Header del documento",-1),a3=e("ul",null,[e("li",null,[s("Il primo elemento di apertura della pagina HTML è l’"),e("em",null,[e("strong",null,"HEAD"),s("er")]),s(" o intestazione.")]),e("li",null,[e("strong",null,"<head>"),s(": tag di apertura dell’header che contiene la descrizione dei "),e("em",null,"metadati"),s(" del documento HTML.")]),e("li",null,"I metadati sono dati che descrivono delle caratteristiche del documento, per esempip il titolo, il set di caratteri, l’autore,etc…"),e("li",null,[s("La sezione header ed i metadati contenuti "),e("strong",null,"NON"),s(" sono visualizzati.")]),e("li",null,"Il più importante elemento della sezione head è il titolo identificato dal tag")],-1),s3=e("br",null,null,-1),o3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("title")]),e("span",{class:"token punctuation"},">")]),s("Titolo della pagina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("title")]),e("span",{class:"token punctuation"},">")])])])],-1),i3={__name:"22",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[n3,t3,a3,s3,C(i,G({},{ranges:[""]}),{default:v(()=>[o3]),_:1},16)]),_:1},16)}}},l3=E(i3,[["__file","/@slidev/slides/22.md"]]),r3=e("h1",null,"Struttura pagina HTML",-1),c3=e("p",null,"Body e contenuto del documento",-1),u3=e("ul",null,[e("li",null,"La sezione del documento identificata dal tag")],-1),p3=e("br",null,null,-1),d3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("body")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"  ..."),s(`
`),e("span",{class:"line"},"  ..."),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("body")]),e("span",{class:"token punctuation"},">")])])])],-1),m3=e("br",null,null,-1),f3=e("ul",null,[e("li",null,"Rappresenta e contiene tutti i tag di descrizione e markup della pagina."),e("li",null,"In questa sezione viene definito il contenuto che si vuole visualizzare nel browser.")],-1),h3={__name:"23",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[r3,c3,u3,p3,C(i,G({},{ranges:[""]}),{default:v(()=>[d3]),_:1},16),m3,f3]),_:1},16)}}},g3=E(h3,[["__file","/@slidev/slides/23.md"]]),_3=e("h1",null,"Struttura pagina HTML",-1),v3=e("p",null,"Pagina HTML base",-1),k3=e("p",null,"Questo è il codice della pagina HTML minimale, che contiene solo le sezioni principali",-1),b3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token doctype"},[e("span",{class:"token punctuation"},"<!"),e("span",{class:"token doctype-tag"},"DOCTYPE"),s(),e("span",{class:"token name"},"html"),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token comment"},"<!-- HTML5-->")]),s(`
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
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("html")]),e("span",{class:"token punctuation"},">")])])])],-1),y3={__name:"24",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[_3,v3,k3,C(i,G({},{ranges:[""]}),{default:v(()=>[b3]),_:1},16)]),_:1},16)}}},w3=E(y3,[["__file","/@slidev/slides/24.md"]]),T3=e("h1",null,"Struttura pagina HTML",-1),x3=e("p",null,"I tag dell’header",-1),z3=e("p",null,"La sezione <head> può contenere i seguenti tag:",-1),$3=e("ul",null,[e("li",null,[e("strong",null,"<title>:"),s(" definisce il titolo della pagina HTML.")]),e("li",null,[e("strong",null,"<style>:"),s(" definisce lo stile da applicare alla pagina HTML.")]),e("li",null,[e("strong",null,"<meta>:"),s(" definisce specifici metadata per il documento.")]),e("li",null,[e("strong",null,"<link>:"),s(" utilizzato per referenziare elementi o documenti esterni.")]),e("li",null,[e("strong",null,"<script>:"),s(" definisce la logica da eseguire durante la visualizzazione delle pagina.")]),e("li",null,[e("strong",null,"<base>:"),s(" specifica un UTL di base da applicare a tutto il documento.")])],-1),M3={__name:"25",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[T3,x3,z3,$3]),_:1},16))}},L3=E(M3,[["__file","/@slidev/slides/25.md"]]),E3=e("h1",null,"Struttura pagina HTML",-1),C3=e("p",null,"I tag dell’header: <title>",-1),A3=e("ul",null,[e("li",null,"Il più importante elemento della sezione head è il titolo identificato dal tag")],-1),I3=e("br",null,null,-1),S3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("title")]),e("span",{class:"token punctuation"},">")]),s("Titolo della pagina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("title")]),e("span",{class:"token punctuation"},">")])])])],-1),O3=e("br",null,null,-1),H3=e("ul",null,[e("li",null,"Il titolo deve contenere solo informazioni testuali ed è visualizzato nel bordo o tab della finestra del browser."),e("li",null,"Il titolo è molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull’algoritmo che decide in quale ordine visualizzare le pagine trovate.")],-1),P3={__name:"26",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[E3,C3,A3,I3,C(i,G({},{ranges:[""]}),{default:v(()=>[S3]),_:1},16),O3,H3]),_:1},16)}}},R3=E(P3,[["__file","/@slidev/slides/26.md"]]),N3={class:"banner"},q3=Se({__name:"Banner",props:{bg:{default:"green"},fg:{default:"yellow"},padding:{default:"10px"},mt:{default:"0px"},mb:{default:"0px"},ml:{default:"0px"},mr:{default:"0px"}},setup(n,{emit:t}){const a=n;$d(p=>({"76049b2e-bgcol":O(o),"76049b2e-fgcol":O(i),"76049b2e-padding":O(l),"76049b2e-marginTop":O(r),"76049b2e-marginBottom":O(c),"76049b2e-marginLeft":p.marginLeft,"76049b2e-marginRight":O(u)})),$(L);const o=Ze(a,"bg",t),i=Ze(a,"fg",t),l=Ze(a,"padding",t),r=Ze(a,"mt",t),c=Ze(a,"mb",t),u=Ze(a,"mr",t);return(p,d)=>(k(),oe("div",N3,[Fn(p.$slots,"default")]))}});const F3=E(q3,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/components/Banner.vue"]]),W3=e("h1",null,"Struttura pagina HTML",-1),D3=e("p",null,"I tag dell’header: <meta>",-1),j3=e("p",null,"Viene utilizzato per specificare vari tipi di metadati, tra cui:",-1),B3=e("ul",null,[e("li",null,[e("strong",null,"character set"),s(": set di caratteri usato dalla pagina web")]),e("li",null,[e("strong",null,"descrizione pagina"),s(": descrizione della pagina e dei suoi contenuti")]),e("li",null,[e("strong",null,"keywords"),s(": parole chiave per le ricerche web")]),e("li",null,[e("strong",null,"autore del documento"),s(": autore/i del documento")]),e("li",null,[e("strong",null,"viewport settings"),s(": impostazioni del viewport, spesso utile per dispositivi mobili")])],-1),V3={__name:"27",setup(n){const t={};return $(L),(a,o)=>{const i=F3;return k(),M(R,P(H(t)),{default:v(()=>[W3,D3,j3,B3,C(i,{padding:"25px",mt:"25px"},{default:v(()=>[s(" Importante notare che i metadati, non sono visualizzati dal browser, ma utilizzati dai motori di ricerca per comprendere meglio il contenuto della pagina stessa. ")]),_:1})]),_:1},16)}}},U3=E(V3,[["__file","/@slidev/slides/27.md"]]),K3=e("h1",null,"Struttura pagina HTML",-1),G3=e("p",null,"I tag dell’header: <style>",-1),Q3=e("ul",null,[e("li",null,"Definisce uno o più stili che vanno a modificare la visualizzazione della pagina HTML")],-1),J3=e("br",null,null,-1),Z3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("style")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"  body {background-color: powderblue;}"),s(`
`),e("span",{class:"line"},"  h1 {color: red;}"),s(`
`),e("span",{class:"line"},"  p {color: blue;}"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("style")]),e("span",{class:"token punctuation"},">")])])])],-1),Y3=e("br",null,null,-1),X3=e("ul",null,[e("li",null,"Normalmente non si usa mai in quanto non è una buona pratica di programmazione"),e("li",null,[s("Per pagine di media/alta complessità non si include in quanto è più pulito definire gli stili della pagina in un file esterno di tipo "),e("strong",null,"CSS")])],-1),eL={__name:"28",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[K3,G3,Q3,J3,C(i,G({},{ranges:[""]}),{default:v(()=>[Z3]),_:1},16),Y3,X3]),_:1},16)}}},nL=E(eL,[["__file","/@slidev/slides/28.md"]]),tL=e("h1",null,"Struttura pagina HTML",-1),aL=e("p",null,"I tag dell’header: <script>",-1),sL=e("ul",null,[e("li",null,[s("Desinisce uno script in "),e("strong",null,"Javascript"),s(" che viene eseguito dal browser durante la visualizzazione della pagina.")]),e("li",null,"Permette di eseguire un programma lato client direttamente all’interno del browser."),e("li",null,"Normalmente utilizzato per interagire con l’utente o per modificare l’aspetto della pagina stessa.")],-1),oL=e("br",null,null,-1),iL=e("pre",{class:"slidev-code language-ts"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token operator"},"<"),s("script"),e("span",{class:"token operator"},">")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token keyword"},"function"),s(),e("span",{class:"token function"},"myFunction"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),s(),e("span",{class:"token punctuation"},"{"),s()]),s(`
`),e("span",{class:"line"},[s("        document"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"getElementById"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"titolo"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),s("innerHTML "),e("span",{class:"token operator"},"="),s(),e("span",{class:"token string"},'"STRUTTURA BASE DI UNA PAGINA WEB"'),e("span",{class:"token punctuation"},";")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token punctuation"},"}")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token operator"},"<"),e("span",{class:"token operator"},"/"),s("script"),e("span",{class:"token operator"},">")])])],-1),lL=e("br",null,null,-1),rL=e("ul",null,[e("li",null,"Normalmente non si usa mai in quanto non è una buona pratica di programmazione"),e("li",null,[s("Per pagine di media/alta complessità non si include in quanto è più pulito definire gli script della pagina in un file esterno di tipo "),e("strong",null,"JS")])],-1),cL={__name:"29",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[tL,aL,sL,oL,C(i,G({},{ranges:[""]}),{default:v(()=>[iL]),_:1},16),lL,rL]),_:1},16)}}},uL=E(cL,[["__file","/@slidev/slides/29.md"]]),pL=e("h1",null,"Struttura pagina HTML",-1),dL=e("p",null,"Pagina HTML base",-1),mL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token doctype"},[e("span",{class:"token punctuation"},"<!"),e("span",{class:"token doctype-tag"},"DOCTYPE"),s(),e("span",{class:"token name"},"html"),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token comment"},"<!-- HTML5-->")]),s(`
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
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("head")]),e("span",{class:"token punctuation"},">")])])])],-1),fL={__name:"30",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[pL,dL,C(i,G({},{ranges:[""]}),{default:v(()=>[mL]),_:1},16)]),_:1},16)}}},hL=E(fL,[["__file","/@slidev/slides/30.md"]]),gL=e("h1",null,"Struttura pagina HTML",-1),_L=e("p",null,"Pagina HTML base",-1),vL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("body")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token comment"},"<!-- Corpo principale della pagina HTML-->")]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("center")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h1")]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("titolo"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Struttura base di una pagina web"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h1")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},"/>")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),s(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://source.unsplash.com/collection/94734566/1920x1080"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("60%"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("div")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("button")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("button"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"onclick"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value javascript language-javascript"},[e("span",{class:"token function"},"myFunction"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")]),s("Prova a premere"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("button")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("div")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("center")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("body")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("html")]),e("span",{class:"token punctuation"},">")])])])],-1),kL={__name:"31",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[gL,_L,C(i,G({},{ranges:[""]}),{default:v(()=>[vL]),_:1},16)]),_:1},16)}}},bL=E(kL,[["__file","/@slidev/slides/31.md"]]),yL=e("h1",null,"Esercizio html_01",-1),wL=e("p",null,"Pagina HTML base",-1),TL=e("ol",null,[e("li",null,[s("Creare una pagina HTML come visto nelle slide precedenti e nominarlo "),e("em",null,"pagina.html")]),e("li",null,"Aprire la pagina nel browser e verificarne il funzionamento"),e("li",null,[s("Provare a modificare la sezione "),e("em",null,"body"),s(" e verificare i cambiamenti")]),e("li",null,[s("Provare a modificare la sezione "),e("em",null,"style"),s(" e verificare i cambiamenti")]),e("li",null,[s("Provare a modificare la sezione "),e("em",null,"script"),s(" e verificare i cambiamenti")])],-1),xL={__name:"32",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[yL,wL,TL]),_:1},16))}},zL=E(xL,[["__file","/@slidev/slides/32.md"]]),$L=e("p",null," ",-1),ML={__name:"33",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[$L,C(i,{fs:"100px"},{default:v(()=>[s(" Titoli e Paragrafi in HTML ")]),_:1})]),_:1},16)}}},LL=E(ML,[["__file","/@slidev/slides/33.md"]]),EL="/3/html/assets/html5_7-c1d52ad4.jpg",CL=e("h1",null,"HTML Headings",-1),AL=e("p",null,"Titoli e sottotitoli",-1),IL=e("ul",null,[e("li",null,"Heading/intestazione: sono marcatori HTML che permettono di definire titoli e sottotitoli in una pagina web."),e("li",null,"HTML definisce 6 livelli di heading, dal più importante al meno importante:")],-1),SL={grid:"~ cols-2 gap-32"},OL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"<!--livello più importante-->")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h1")]),e("span",{class:"token punctuation"},">")]),s("Heading 1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h1")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h2")]),e("span",{class:"token punctuation"},">")]),s("Heading 2"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h2")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Heading 3"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h4")]),e("span",{class:"token punctuation"},">")]),s("Heading 4"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h4")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h5")]),e("span",{class:"token punctuation"},">")]),s("Heading 5"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h5")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h6")]),e("span",{class:"token punctuation"},">")]),s("Heading 6"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h6")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"<!--livello meno importante-->")])])],-1),HL=e("ul",null,[e("li",null,[s("I motori di ricerca usano i tag di "),e("em",null,"heading"),s(" per capire e definire un indice del contenuto di una pagina")]),e("li",null,[e("strong",null,"NOTA"),s(": "),e("em",null,[s("Usa i tag <hN> solo per i titoli e sottotitoli. "),e("strong",null,"NON"),s(" usarli per visualizzare testo in grassetto o con font più grande.")])])],-1),PL=e("div",null,[e("p",null,[e("img",{src:EL,alt:"html5_7.jpg"})])],-1),RL={__name:"34",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[CL,AL,IL,e("div",SL,[e("div",null,[C(i,G({},{ranges:[""]}),{default:v(()=>[OL]),_:1},16),HL]),PL])]),_:1},16)}}},NL=E(RL,[["__file","/@slidev/slides/34.md"]]),qL=e("h1",null,"HTML Paragrafi",-1),FL=e("p",null,"Blocchi di testo",-1),WL=e("ul",null,[e("li",null,"Nell’editing di una pagina HTML, è spesso utile poter inserire un blocco di testo o paragrafo"),e("li",null,[s("HTML mette a disposizione un tag specifico "),e("strong",null,"<p>"),s(" che definisce un paragrafo di testo, lungo a piacere, da visualizzare in una pagina web")])],-1),DL=e("br",null,null,-1),jL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("p")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"  ..."),s(`
`),e("span",{class:"line"},"  ... Blocco di testo"),s(`
`),e("span",{class:"line"},"  ..."),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("p")]),e("span",{class:"token punctuation"},">")])])])],-1),BL=e("br",null,null,-1),VL=e("ul",null,[e("li",null,"Ogni paragrafo è preceduto e seguito da una linea bianca distanziatrice."),e("li",null,"Il browser è libero di aggiunge automaticamente degli spazi (un margine) prima e dopo il testo."),e("li",null,"Non si può essere sicuri di come il browser visualizzi il paragrafo."),e("li",null,"Il risultato può essere diverso su uno schermo grande rispetto ad uno piccolo."),e("li",null,"Pertanto l’aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser.")],-1),UL={__name:"35",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[qL,FL,WL,DL,C(i,G({},{ranges:[""]}),{default:v(()=>[jL]),_:1},16),BL,VL]),_:1},16)}}},KL=E(UL,[["__file","/@slidev/slides/35.md"]]),GL=e("h1",null,"Esercizio html_02",-1),QL=e("p",null,"Heading e paragrafi",-1),JL=e("ol",null,[e("li",null,[s("Trasformare il file di test "),e("a",{href:"/support/3/html/esercizio_html_02.txt",target:"_blank",rel:"noopener"},[e("em",null,"esercizio_html_02.txt")]),s(" in "),e("em",null,"|cognome|_esercizio_html_02.html")]),e("li",null,"Creare la struttura della pagina HTML inserendo anche i metadati appropriati"),e("li",null,"Impaginare il testo inserendo, in modo appropriato, gli heading necessari per titoli e sottotitoli"),e("li",null,"Suddividere il testo in paragrafi in modo opportuno"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_02.html")],-1),ZL={__name:"36",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[GL,QL,JL]),_:1},16))}},YL=E(ZL,[["__file","/@slidev/slides/36.md"]]),XL=e("p",null," ",-1),eE={__name:"37",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[XL,C(i,{fs:"100px"},{default:v(()=>[s(" Elementi block e inline ")]),_:1})]),_:1},16)}}},nE=E(eE,[["__file","/@slidev/slides/37.md"]]),tE=e("h1",null,"Display Value",-1),aE=e("p",null,"Elementi inline e block",-1),sE=e("p",null,"Ogni elemento HTML ha un valore di display in funzione del tipo di elemento:",-1),oE=e("h3",null,[e("strong",null,"block"),s(" element")],-1),iE=e("ul",null,[e("li",null,"Un elemento block comincia sempre su una nuova linea"),e("li",null,"Un elemento block occupa tutta la larghezza possibile anche se non necessaria"),e("li",null,"Un elemento block ha un margine superiore ed inferiore")],-1),lE=e("pre",null,[s(`
`),e("div",{style:{border:"1px solid black",padding:"8px 0px 8px 5px"}},"The <div> element is a block-level element."),s(`
`),e("div",{style:{border:"1px solid black",padding:"8px 0px 8px 5px"}},"The <h1> element is another block-level element."),s(`
`)],-1),rE=e("p",null,"Qui la lista di tag di tipo block:",-1),cE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("address")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("article")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("aside")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("blockquote")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("canvas")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("dd")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("div")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("dl")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("dt")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("fieldset")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("figcaption")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("figure")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("footer")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h1")]),e("span",{class:"token punctuation"},">")]),s("-"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h6")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("header")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("hr")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("main")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("nav")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("noscript")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ol")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("p")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("pre")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("section")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tfoot")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ul")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("video")]),e("span",{class:"token punctuation"},">")])])])],-1),uE={__name:"38",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[tE,aE,sE,oE,iE,lE,rE,C(i,G({},{ranges:[""]}),{default:v(()=>[cE]),_:1},16)]),_:1},16)}}},pE=E(uE,[["__file","/@slidev/slides/38.md"]]),dE=e("h1",null,"Display Value",-1),mE=e("p",null,"Elementi inline e block",-1),fE=e("h3",null,[e("strong",null,"inline"),s(" element")],-1),hE=e("ul",null,[e("li",null,"Un elemento inline non comincia su una nuova linea"),e("li",null,"Un elemento inline occupa solo la larghezza minima necessaria")],-1),gE=e("br",null,null,-1),_E=e("pre",null,[s(""),e("p",null,[e("span",{style:{padding:"0px 5px 0px 5px",border:"1px solid black"}},"<span> is a inline-level element."),e("span",{style:{padding:"0px 5px 0px 5px",border:"1px solid black"}},"<input> is another inline-level element.")]),s(`
`)],-1),vE=e("p",null,"Qui la lista di tag di tipo block:",-1),kE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("abbr")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("acronym")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("bdo")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("big")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("button")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("cite")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("code")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("dfn")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("em")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("i")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("kbd")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("map")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("object")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("output")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("q")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("samp")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("script")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("select")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("small")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("span")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("strong")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sub")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sup")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("textarea")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("time")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tt")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("var")]),e("span",{class:"token punctuation"},">")])])])],-1),bE={__name:"39",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[dE,mE,fE,hE,gE,_E,vE,C(i,G({},{ranges:[""]}),{default:v(()=>[kE]),_:1},16)]),_:1},16)}}},yE=E(bE,[["__file","/@slidev/slides/39.md"]]),wE=e("h1",null,"DIV",-1),TE=e("p",null,"Contenitore di contenitori block",-1),xE=e("ul",null,[e("li",null,[s("Un tag estremamente importante nello sviluppo web moderno è "),e("strong",null,"<div>"),s(".")]),e("li",null,[e("strong",null,"<DIV>"),s(" è di tipo "),e("strong",null,"block"),s(" e definisce un generico blocco di contenuto senza una semantica particolare.")]),e("li",null,"E’ comunemente usato come contenitore per altri elementi HTML o altri div"),e("li",null,"Pertanto DIV è utilizzato per creare delle strutture di layout del contenuto web."),e("li",null,"Insieme a CSS è utilizzato per definire lo stile di blocchi di contenuto")],-1),zE=e("br",null,null,-1),$E=e("h3",null,"Esempio",-1),ME=e("div",{style:{"background-color":"red",color:"white",padding:"20px"}},[e("h2",null,"ATTENZIONE"),e("p",null,"Si richiede a tutti gli studenti di studiare e sperimentare il più possibile con HTML."),e("p",null,"Oggi tutte le moderne applicazioni sono sviluppate in HTML - CSS e JavaScript")],-1),LE={__name:"40",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[wE,TE,xE,zE,$E,ME]),_:1},16))}},EE=E(LE,[["__file","/@slidev/slides/40.md"]]),CE=e("h1",null,"SPAN",-1),AE=e("p",null,"Contenitore di contenitori inline",-1),IE=e("ul",null,[e("li",null,[s("Un tag estremamente importante nello sviluppo web moderno è "),e("strong",null,"<span>"),s(".")]),e("li",null,[s("Il tag "),e("strong",null,"<span>"),s(" definisce un generico contenitore di tipo "),e("strong",null,"inline"),s(" a cui non è associata nessuna semantica particolare.")]),e("li",null,"E’ comunemente usato per modificare una parte di testo in un paragrafo on in altre sezione di un documento HTML."),e("li",null,"Insieme a CSS è utilizzato per definire lo stile di parti di testo.")],-1),SE=e("br",null,null,-1),OE=e("h3",null,"Esempio",-1),HE=e("p",null,[s("Comunicato a tutti gli studenti: "),e("span",{style:{color:"white",background:"red","font-weight":"bold"}},"ATTENZIONE"),s(" Si richiede a tutti gli studenti di "),e("span",{style:{color:"darkolivegreen","font-weight":"bold"}},"studiare"),s(" e sperimentare il più possibile con HTML.")],-1),PE={__name:"41",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[CE,AE,IE,SE,OE,HE]),_:1},16))}},RE=E(PE,[["__file","/@slidev/slides/41.md"]]),NE=e("p",null," ",-1),qE={__name:"42",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[NE,C(i,{fs:"100px"},{default:v(()=>[s(" Ancore e Link ")]),_:1})]),_:1},16)}}},FE=E(qE,[["__file","/@slidev/slides/42.md"]]),WE=e("h1",null,"Ancore e Link",-1),DE=e("p",null,"Collegamenti a contenuti esterni",-1),jE=e("ul",null,[e("li",null,[s("I link sono alla base del concetto di "),e("em",null,"iptertesto"),s(", che a sua volta è alla base dello WWW.")]),e("li",null,[s("I link servono per creare dei "),e("em",null,"collegamenti"),s(" tra documenti diversi in modo da formare un unico "),e("em",null,"ipertesto"),s(".")]),e("li",null,[s("Un link ad una risorsa o documento esterno si crea usando il tag "),e("em",null,"ancora"),s(),e("strong",null,"<a>")])],-1),BE=e("br",null,null,-1),VE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),s(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("url"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("link text"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("a")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},"Esempio"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),s(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://agnelli.it/"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"target"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("_blank"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Istituto Internazionale E.Agnelli"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("a")]),e("span",{class:"token punctuation"},">")])])])],-1),UE=e("p",null,[s("Qui puoi visitare L’"),e("a",{href:"https://agnelli.it/",target:"_parent"},"Istituto Internazionale E.Agnelli")],-1),KE=e("ul",null,[e("li",null,[e("strong",null,"href"),s(": attributo che definisce la destinazione dell’ancora e pertanto il link")]),e("li",null,[e("strong",null,"target"),s(": per default il link viene visualizzato nella finestra corrente del browser. Questo attributo permette di modificare il comportamento standard.")])],-1),GE=e("p",null,[s("Il principale valore per "),e("em",null,"target"),s(" è "),e("strong",null,"_blank"),s(", e permette di aprire il documento in un una nuova tab del browser.")],-1),QE={__name:"43",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[WE,DE,jE,BE,C(i,G({},{ranges:[""]}),{default:v(()=>[VE]),_:1},16),UE,KE,GE]),_:1},16)}}},JE=E(QE,[["__file","/@slidev/slides/43.md"]]),ZE=e("h1",null,"Ancore e Link",-1),YE=e("p",null,"Collegamenti a contenuti esterni",-1),XE=e("p",null,[s("L’URL specificato nell’attributo "),e("em",null,"href"),s(" può essere:")],-1),eC=e("ul",null,[e("li",null,[e("strong",null,"assoluto"),s(": link ad una risorsa esterna nella forma canonica "),e("em",null,[e("a",{href:"https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",target:"_blank",rel:"noopener"},"https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")])]),e("li",null,[e("strong",null,"relativo"),s(": link relativo ad una risorsa locale, presente nello stesso server "),e("em",null,"/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")])],-1),nC=e("p",null,[s("Questo perchè, tutte le URL relative fanno riferimento ad una directory chiamata "),e("strong",null,"document root"),s(" che rappresenta la root del web server.")],-1),tC={__name:"44",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[ZE,YE,XE,eC,nC]),_:1},16))}},aC=E(tC,[["__file","/@slidev/slides/44.md"]]),sC=e("h1",null,"Esercizio html_03",-1),oC=e("p",null,"Link",-1),iC=e("ol",null,[e("li",null,[s("Modificare il file "),e("em",null,"|cognome|_esercizio_html_02.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_03.html")]),e("li",null,"Trasformare almeno 5 parole in link a risorse esterne"),e("li",null,"Trasformare altre 5 parole in modo che siano visualizzate in verde, blue o rosso"),e("li",null,"Selezionare almeno 2 frasi particolarmente importanti e inserirle in un rettangolo con sfondo blue e testo di color bianco."),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_03.html")],-1),lC=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),rC={__name:"45",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[sC,oC,iC,lC]),_:1},16))}},cC=E(rC,[["__file","/@slidev/slides/45.md"]]),uC=e("p",null," ",-1),pC={__name:"46",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[uC,C(i,{fs:"100px"},{default:v(()=>[s(" Web grafico con le immagini ")]),_:1})]),_:1},16)}}},dC=E(pC,[["__file","/@slidev/slides/46.md"]]),mC=e("h1",null,"Immagini",-1),fC=e("p",null,"Il Web diventa grafico",-1),hC=e("ul",null,[e("li",null,"La versione iniziale del WWW, prevedeva solo l’uso di informazioni testuali e non supportava l’uso di immagini all’interno delle pagine web."),e("li",null,"Con la nuova specifica HTML 2.0 del 1995, viene introdotto il nuovo tag <img> che permette di inserire immagini nelle pagine web.")],-1),gC=e("br",null,null,-1),_C=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),s(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("url"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"alt"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("alternatetext"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),vC=e("br",null,null,-1),kC=e("ul",null,[e("li",null,[e("strong",null,"src"),s(": attributo che specifica il percorso/link (relativo o assoluto) all’immagine")]),e("li",null,[e("strong",null,"alt"),s(": in caso in cui l’immagine non possa essere visualizzata, specifica un testo alternativo")])],-1),bC=e("p",null,"Attributi utili sono:",-1),yC=e("ul",null,[e("li",null,[e("strong",null,"width"),s(": specifica la larghezza dell’immagine in pixel")]),e("li",null,[e("strong",null,"height"),s(": specifica l’altezza dell’immagine in pixel")])],-1),wC={__name:"47",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[mC,fC,hC,gC,C(i,G({},{ranges:[""]}),{default:v(()=>[_C]),_:1},16),vC,kC,bC,yC]),_:1},16)}}},TC=E(wC,[["__file","/@slidev/slides/47.md"]]),xC=e("h1",null,"Immagini",-1),zC=e("p",null,"Il Web diventa grafico",-1),$C=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),s(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://tinyurl.com/59m2nndc"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("250"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"alt"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("primo web server"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},"/>")])])])],-1),MC=e("br",null,null,-1),LC=e("img",{src:"https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg",width:"250",alt:"primo web server"},null,-1),EC={__name:"48",setup(n){const t={};return $(L),(a,o)=>{const i=le,l=Ha("center");return k(),M(R,P(H(t)),{default:v(()=>[xC,zC,C(i,G({},{ranges:[""]}),{default:v(()=>[$C]),_:1},16),MC,C(l,null,{default:v(()=>[LC]),_:1})]),_:1},16)}}},CC=E(EC,[["__file","/@slidev/slides/48.md"]]),AC=e("h1",null,"Immagini",-1),IC=e("p",null,"Il Web diventa grafico",-1),SC=e("ul",null,[e("li",null,"I tag HTML possono essere nidificati, cioè dichiarati uno dentro l’altro."),e("li",null,"Questa importante proprietà ci permette di creare un link grafico all’interno di una pagina web.")],-1),OC=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("a")]),s(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("http://info.cern.ch/hypertext/WWW/TheProject.html"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"target"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("_blank"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("img")]),s(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://tinyurl.com/59m2nndc"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("250"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"alt"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("primo web server"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("a")]),e("span",{class:"token punctuation"},">")])])])],-1),HC=e("a",{href:"http://info.cern.ch/hypertext/WWW/TheProject.html",target:"_blank"},[e("img",{src:"https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg",width:"200",alt:"primo web server"})],-1),PC={__name:"49",setup(n){const t={};return $(L),(a,o)=>{const i=le,l=Ha("center");return k(),M(R,P(H(t)),{default:v(()=>[AC,IC,SC,C(i,G({},{ranges:[""]}),{default:v(()=>[OC]),_:1},16),C(l,null,{default:v(()=>[HC]),_:1})]),_:1},16)}}},RC=E(PC,[["__file","/@slidev/slides/49.md"]]),NC=e("h1",null,"Esercizio html_04",-1),qC=e("p",null,"Link",-1),FC=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_03.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_04.html")]),e("li",null,"Aggiungere almeno 1 immagine, relative al testo, come risorsa esterna (link assoluto)"),e("li",null,"Aggiungere almeno 1 immagine, relative al testo, come risorsa interna (link relativo)"),e("li",null,"Aggiungere almeno 1 immagine, relative al testo, che sia anche un link ad una pagina esterna"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_04.html")],-1),WC=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),DC={__name:"50",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[NC,qC,FC,WC]),_:1},16))}},jC=E(DC,[["__file","/@slidev/slides/50.md"]]),BC=e("p",null," ",-1),VC={__name:"51",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[BC,C(i,{fs:"80px"},{default:v(()=>[s(" Formattazione del testo in HTML ")]),_:1})]),_:1},16)}}},UC=E(VC,[["__file","/@slidev/slides/51.md"]]),KC=e("h1",null,"Formattazione del Testo",-1),GC=e("p",null,"Tag di formattazione",-1),QC=e("ul",null,[e("li",null,"HTML mette a disposizione 10 tag specifici per la definizione di testo con particolare significato."),e("li",null,"Questi tag definiscono la semantica e cioè il significato del testo che racchiudono."),e("li",null,"Il browser decide come visualizzare il testo racchiuso in questi tag")],-1),JC=e("br",null,null,-1),ZC=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s(": testo in grassetto senza significato aggiuntivo")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("strong")]),e("span",{class:"token punctuation"},">")]),s(": testo con molta importanza. Normalmente visualizzatto in grassetto")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("i")]),e("span",{class:"token punctuation"},">")]),s(": testo alternativo, un termine tecnico, una parola straniera. Normalmente visualizzato in italico")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("em")]),e("span",{class:"token punctuation"},">")]),s(": testo con particolare enfasi.Normalmente viene visualizzato in italico")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("mark")]),e("span",{class:"token punctuation"},">")]),s(": testo che deve essere evidenziato")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("small")]),e("span",{class:"token punctuation"},">")]),s(": testo con dimensioni minori e quindi con meno importanza")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("del")]),e("span",{class:"token punctuation"},">")]),s(": testo che è stato eliminato dal documento. Normalmente visualizzato con una linea sul testo")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ins")]),e("span",{class:"token punctuation"},">")]),s(": testo che è stato aggiunto al documento. Normalmente visualizzato come testo sottolineato")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sub")]),e("span",{class:"token punctuation"},">")]),s(": - definisce un testo come pedice")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sup")]),e("span",{class:"token punctuation"},">")]),s(": - definisce un testo come apice")])])],-1),YC={__name:"52",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[KC,GC,QC,JC,C(i,G({},{ranges:[""]}),{default:v(()=>[ZC]),_:1},16)]),_:1},16)}}},XC=E(YC,[["__file","/@slidev/slides/52.md"]]),eA=e("h1",null,"Formattazione del Testo",-1),nA=e("p",null,"Tag di formattazione",-1),tA=e("ul",null,[e("li",null,"bold")],-1),aA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("In un paragrafo spesso vogliamo poter evidenziare una parola in "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("grassetto"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s(".")])])],-1),sA=e("br",null,null,-1),oA=e("b",null,"grassetto",-1),iA=e("br",null,null,-1),lA=e("br",null,null,-1),rA=e("ul",null,[e("li",null,"strong")],-1),cA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Spesso è necessario definire una parola "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("strong")]),e("span",{class:"token punctuation"},">")]),s("molto importante"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("strong")]),e("span",{class:"token punctuation"},">")]),s(".")])])],-1),uA=e("br",null,null,-1),pA=e("strong",null,"molto importante",-1),dA=e("br",null,null,-1),mA=e("br",null,null,-1),fA=e("ul",null,[e("li",null,"italico")],-1),hA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Alcune volte è necessario definire un termine tecnico come "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("i")]),e("span",{class:"token punctuation"},">")]),s("Web Server"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("i")]),e("span",{class:"token punctuation"},">")])])])],-1),gA=e("br",null,null,-1),_A=e("i",null,"Web Server",-1),vA={__name:"53",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[eA,nA,tA,C(i,G({},{ranges:[""]}),{default:v(()=>[aA]),_:1},16),sA,s("In un paragrafo spesso vogliamo poter evidenziare una parola in "),oA,s("."),iA,lA,rA,C(i,G({},{ranges:[""]}),{default:v(()=>[cA]),_:1},16),uA,s("Spesso è necessario definire una parola "),pA,s("."),dA,mA,fA,C(i,G({},{ranges:[""]}),{default:v(()=>[hA]),_:1},16),gA,s("Alcune volte è necessario definire un termine tecnico come "),_A]),_:1},16)}}},kA=E(vA,[["__file","/@slidev/slides/53.md"]]),bA=e("h1",null,"Formattazione del Testo",-1),yA=e("p",null,"Tag di formattazione",-1),wA=e("ul",null,[e("li",null,"enfasi")],-1),TA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("In un testo ci sono specifiche parole a cui si vuole dare "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("em")]),e("span",{class:"token punctuation"},">")]),s("enfasi"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("em")]),e("span",{class:"token punctuation"},">")]),s(".")])])],-1),xA=e("br",null,null,-1),zA=e("em",null,"enfasi",-1),$A=e("br",null,null,-1),MA=e("br",null,null,-1),LA=e("ul",null,[e("li",null,"mark")],-1),EA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Un altro modo per "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("mark")]),e("span",{class:"token punctuation"},">")]),s("evidenziare"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("mark")]),e("span",{class:"token punctuation"},">")]),s(" una o più parole è usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("mark"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")])])])],-1),CA=e("br",null,null,-1),AA=e("mark",null,"evidenziare",-1),IA=e("b",null,"mark",-1),SA=e("br",null,null,-1),OA=e("br",null,null,-1),HA=e("ul",null,[e("li",null,"small")],-1),PA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Al contrario quando un testo "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("small")]),e("span",{class:"token punctuation"},">")]),s("è di poca importanza"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("small")]),e("span",{class:"token punctuation"},">")]),s(" si può usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("small"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")])])])],-1),RA=e("br",null,null,-1),NA=e("small",null,"è di poca importanza",-1),qA=e("b",null,"small",-1),FA={__name:"54",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[bA,yA,wA,C(i,G({},{ranges:[""]}),{default:v(()=>[TA]),_:1},16),xA,s("In un testo ci sono specifiche parole a cui si vuole dare "),zA,s("."),$A,MA,LA,C(i,G({},{ranges:[""]}),{default:v(()=>[EA]),_:1},16),CA,s("Un altro modo per "),AA,s(" una o più parole è usare il tag "),IA,SA,OA,HA,C(i,G({},{ranges:[""]}),{default:v(()=>[PA]),_:1},16),RA,s("Al contrario quando un testo "),NA,s(" si può usare il tag "),qA]),_:1},16)}}},WA=E(FA,[["__file","/@slidev/slides/54.md"]]),DA=e("h1",null,"Formattazione del Testo",-1),jA=e("p",null,"Tag di formattazione",-1),BA=e("ul",null,[e("li",null,"del e ins")],-1),VA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Il mio cibo preferito è il "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("del")]),e("span",{class:"token punctuation"},">")]),s("pollo"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("del")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ins")]),e("span",{class:"token punctuation"},">")]),s("tacchino"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("ins")]),e("span",{class:"token punctuation"},">")]),s(".")])])],-1),UA=e("br",null,null,-1),KA=e("del",null,"pollo",-1),GA=e("ins",null,"tacchino",-1),QA=e("br",null,null,-1),JA=e("br",null,null,-1),ZA=e("ul",null,[e("li",null,"sub e sup")],-1),YA=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Il logaritmo in base 2 di 8 è 3: log"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sub")]),e("span",{class:"token punctuation"},">")]),s("2"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("sub")]),e("span",{class:"token punctuation"},">")]),s(" 8 = 3")]),s(`
`),e("span",{class:"line"},[s("In modo analogo 2 elevato alla 3 fa 8: 2"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sup")]),e("span",{class:"token punctuation"},">")]),s("3"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("sup")]),e("span",{class:"token punctuation"},">")]),s(" = 8")]),s(`
`),e("span",{class:"line"},[s("In generale gli "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sup")]),e("span",{class:"token punctuation"},">")]),s("apici"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("sup")]),e("span",{class:"token punctuation"},">")]),s(" si ottengono son il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("sup"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[s("mentre i "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("sub")]),e("span",{class:"token punctuation"},">")]),s("pedici"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("sub")]),e("span",{class:"token punctuation"},">")]),s(" con il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("sub"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")])])])],-1),XA=e("br",null,null,-1),eI=e("sub",null,"2",-1),nI=e("p",null,[s("In modo analogo 2 elevato alla 3 fa 8: 2"),e("sup",null,"3"),s(" = 8")],-1),tI=e("p",null,[s("In generale gli "),e("sup",null,"apici"),s(" si ottengono son il tag "),e("b",null,"sup"),s(" mentre i "),e("sub",null,"pedici"),s(" con il tag "),e("b",null,"sub")],-1),aI={__name:"55",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[DA,jA,BA,C(i,G({},{ranges:[""]}),{default:v(()=>[VA]),_:1},16),UA,s("Il mio cibo preferito è il "),KA,s(),GA,s("."),QA,JA,ZA,C(i,G({},{ranges:[""]}),{default:v(()=>[YA]),_:1},16),XA,s("Il logaritmo in base 2 di 8 è 3: log"),eI,s(" 8 = 3 "),nI,tI]),_:1},16)}}},sI=E(aI,[["__file","/@slidev/slides/55.md"]]),oI=e("h1",null,"Esercizio html_05",-1),iI=e("p",null,"Link",-1),lI=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_04.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_05.html")]),e("li",null,"evidenziare 5 parole in bold"),e("li",null,"marcare 5 parole particolarmente importanti"),e("li",null,"evidenziare 5 parole alternative o termini tecnici"),e("li",null,"dare enfasi a 5 parole"),e("li",null,"evidenziare (mark) 5 parole significative"),e("li",null,"rendere più piccole 5 parole poco significative"),e("li",null,"marcare 5 parole come eliminate dal testo"),e("li",null,"marcare 5 parole come inserite nel testo"),e("li",null,"dove possibile marcare almeno 1 parola come apice ed 1 come pedice"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_05.html")],-1),rI=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),cI={__name:"56",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[oI,iI,lI,rI]),_:1},16))}},uI=E(cI,[["__file","/@slidev/slides/56.md"]]),pI=e("h1",null,"Formattazione del Testo",-1),dI=e("p",null,"Tag per Quotazioni e Citazioni",-1),mI=e("ul",null,[e("li",null,"HTML mette a disposizione 4 tag specifici per la definizione di testo che rappresenta una citazione o una quote."),e("li",null,"Questi tag definiscono la semantica e cioè il significato del testo che racchiudono."),e("li",null,"Il browser decide come visualizzare il testo racchiuso in questi tag")],-1),fI=e("br",null,null,-1),hI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("blockquote")]),e("span",{class:"token punctuation"},">")]),s(": definisce una porzione di testo come una citazione esterna")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("q")]),e("span",{class:"token punctuation"},">")]),s(": definisce una breve citazione")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("abbr")]),e("span",{class:"token punctuation"},">")]),s(": definisce un'abbreviazione o un acronimo")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("cite")]),e("span",{class:"token punctuation"},">")]),s(": citazione ad un lavoro altrui (libro, sito web, ...)")])])],-1),gI={__name:"57",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[pI,dI,mI,fI,C(i,G({},{ranges:[""]}),{default:v(()=>[hI]),_:1},16)]),_:1},16)}}},_I=E(gI,[["__file","/@slidev/slides/57.md"]]),vI=e("h1",null,"Formattazione del Testo",-1),kI=e("p",null,"Tag per Quotazioni e Citazioni",-1),bI=e("ul",null,[e("li",null,"blockquote")],-1),yI=e("br",null,null,-1),wI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},'Alle volte in un testo si vuole "quotare" un altro autore.'),s(`
`),e("span",{class:"line"},"Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale."),s(`
`),e("span",{class:"line"},[s("Quindi con il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("blockquote"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s(" si può definire una quotazione")]),s(`
`),e("span",{class:"line"},"indicando la sorgente dell'informazione"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("blockquote")]),s(),e("span",{class:"token attr-name"},"cite"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("https://it.wikipedia.org/wiki/Giovanni_Bosco"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"  La sottrazione di benevolenza è un castigo che eccita l'emulazione"),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("blockquote")]),e("span",{class:"token punctuation"},">")])])])],-1),TI=e("br",null,null,-1),xI=e("b",null,"blockquote",-1),zI=e("blockquote",{cite:"https://it.wikipedia.org/wiki/Giovanni_Bosco"}," La sottrazione di benevolenza è un castigo che eccita l'emulazione ",-1),$I=e("br",null,null,-1),MI=e("ul",null,[e("li",null,"Come si può notare la citazione è indentata. Il link alla citazione non ha un effetto visivo ma può essere utile al motore di ricerca o altri tool.")],-1),LI={__name:"58",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[vI,kI,bI,yI,C(i,G({},{ranges:[""]}),{default:v(()=>[wI]),_:1},16),TI,s(` Alle volte in un testo si vuole "quotare" un altro autore. Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale. Quindi con il tag `),xI,s(" si può definire una quotazione indicando la sorgente dell'informazione "),zI,$I,MI]),_:1},16)}}},EI=E(LI,[["__file","/@slidev/slides/58.md"]]),CI=e("h1",null,"Formattazione del Testo",-1),AI=e("p",null,"Tag per Quotazioni e Citazioni",-1),II=e("ul",null,[e("li",null,"quotazione")],-1),SI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Quando in un testo vogliamo fare una "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("q")]),e("span",{class:"token punctuation"},">")]),s("breve citazione"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("q")]),e("span",{class:"token punctuation"},">")]),s(", basta inserire il testo nel tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("q"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")])])])],-1),OI=e("br",null,null,-1),HI=e("q",null,"breve citazione",-1),PI=e("b",null,"q",-1),RI=e("br",null,null,-1),NI=e("br",null,null,-1),qI=e("ul",null,[e("li",null,"abbreviazione")],-1),FI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("abbr")]),s(),e("span",{class:"token attr-name"},"title"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Gnu is Not Unix"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("GNU"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("abbr")]),e("span",{class:"token punctuation"},">")]),s("di GNU/Linux sembra una  parola ma in realtà è un acronimo.")])])],-1),WI=e("br",null,null,-1),DI=e("abbr",{title:"Gnu is Not Unix"},"GNU",-1),jI=e("br",null,null,-1),BI=e("br",null,null,-1),VI=e("ul",null,[e("li",null,"citazione lavoro altrui")],-1),UI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Un alternativa per una citazione è usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("cite"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s(". ")]),s(`
`),e("span",{class:"line"},[s("In una disicussione accesa Linus disse: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("cite")]),e("span",{class:"token punctuation"},">")]),s('"Parlare è facile. Mostrami il codice".'),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("cite")]),e("span",{class:"token punctuation"},">")])])])],-1),KI=e("br",null,null,-1),GI=e("b",null,"cite",-1),QI=e("cite",null,'"Parlare è facile. Mostrami il codice".',-1),JI={__name:"59",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[CI,AI,II,C(i,G({},{ranges:[""]}),{default:v(()=>[SI]),_:1},16),OI,s("Quando in un testo vogliamo fare una "),HI,s(", basta inserire il testo nel tag "),PI,s(),RI,NI,qI,C(i,G({},{ranges:[""]}),{default:v(()=>[FI]),_:1},16),WI,DI,s(" di GNU/Linux sembra una parola ma in realtà è un acronimo."),jI,BI,VI,C(i,G({},{ranges:[""]}),{default:v(()=>[UI]),_:1},16),KI,s("Un alternativa per una citazione è usare il tag "),GI,s(". In una disicussione accesa Linus disse: "),QI]),_:1},16)}}},ZI=E(JI,[["__file","/@slidev/slides/59.md"]]),YI=e("h1",null,"Esercizio html_06",-1),XI=e("p",null,"Link",-1),eS=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_05.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_06.html")]),e("li",null,"creare una citazione per un blocco di testo"),e("li",null,"marcare 3 frasi o parole come brevi citazioni"),e("li",null,"marcare almeno 3 abbreviazioni"),e("li",null,"marcare 1 citazione (cite) di qualche altro autore"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_06.html")],-1),nS=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),tS={__name:"60",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[YI,XI,eS,nS]),_:1},16))}},aS=E(tS,[["__file","/@slidev/slides/60.md"]]),sS=e("h1",null,"Formattazione del Testo",-1),oS=e("p",null,"Tag addizionali",-1),iS=e("ul",null,[e("li",null,"Ci sono altri tag che formattano il testo ma che non hanno una semantica particolare.")],-1),lS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("u")]),e("span",{class:"token punctuation"},">")]),s(": definisce un testo sottolineato")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("s")]),e("span",{class:"token punctuation"},">")]),s(": definisce una testo sbarrato")]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("pre")]),e("span",{class:"token punctuation"},">")]),s(": marca una porzione di testo come pre formattato")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("code")]),e("span",{class:"token punctuation"},">")]),s(": definisce un blocco di testo come codice sorgente")])])],-1),rS=e("br",null,null,-1),cS=e("ul",null,[e("li",null,"sottolineato")],-1),uS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Se si vuole "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("u")]),e("span",{class:"token punctuation"},">")]),s("sottolineare"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("u")]),e("span",{class:"token punctuation"},">")]),s(" una parola basta usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("u")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("u")]),e("span",{class:"token punctuation"},">")])])])],-1),pS=e("br",null,null,-1),dS=e("u",null,"sottolineare",-1),mS=e("br",null,null,-1),fS=e("br",null,null,-1),hS=e("ul",null,[e("li",null,"sbarrato")],-1),gS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Se si vuole "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("s")]),e("span",{class:"token punctuation"},">")]),s("sbarrare"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("s")]),e("span",{class:"token punctuation"},">")]),s(" una parola basta usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("s")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("s")]),e("span",{class:"token punctuation"},">")])])])],-1),_S=e("br",null,null,-1),vS=e("s",null,"sbarrare",-1),kS={__name:"61",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[sS,oS,iS,C(i,G({},{ranges:[""]}),{default:v(()=>[lS]),_:1},16),rS,cS,C(i,G({},{ranges:[""]}),{default:v(()=>[uS]),_:1},16),pS,s("Se si vuole "),dS,s(" una parola basta usare il tag <u> "),mS,fS,hS,C(i,G({},{ranges:[""]}),{default:v(()=>[gS]),_:1},16),_S,s("Se si vuole "),vS,s(" una parola basta usare il tag <s> ")]),_:1},16)}}},bS=E(kS,[["__file","/@slidev/slides/61.md"]]),yS=e("h1",null,"Formattazione del Testo",-1),wS=e("p",null,"Tag addizionali",-1),TS=e("ul",null,[e("li",null,"codice sorgente")],-1),xS=e("br",null,null,-1),zS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Spesso negli articoli informatici vengono riportati comandi o porzioni di codice."),s(`
`),e("span",{class:"line"},[s("Per farlo in modo corretto usa il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("code"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s("."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("Per installare vscode in Linux usa il comando: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("code")]),e("span",{class:"token punctuation"},">")]),s("apt install vscode"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("code")]),e("span",{class:"token punctuation"},">")])])])],-1),$S=e("br",null,null,-1),MS=e("ul",null,[e("li",null,"Spesso negli articoli informatici vengono riportati comandi o porzioni di codice."),e("li",null,[s("Per farlo in modo corretto usa il tag "),e("b",null,"code"),s("."),e("br")])],-1),LS=e("br",null,null,-1),ES=e("code",null,"apt install vscode",-1),CS={__name:"62",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[yS,wS,TS,xS,C(i,G({},{ranges:[""]}),{default:v(()=>[zS]),_:1},16),$S,MS,LS,s(" Per installare vscode in Linux usa il comando: "),ES]),_:1},16)}}},AS=E(CS,[["__file","/@slidev/slides/62.md"]]),IS=e("h1",null,"Formattazione del Testo",-1),SS=e("p",null,"Tag addizionali",-1),OS=e("ul",null,[e("li",null,"pre formattato")],-1),HS=e("br",null,null,-1),PS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Negli articoli può essere necessario riportare una porzione di testo con una formattazione specifica."),s(`
`),e("span",{class:"line"},[s("Per evitare che il browser foramtti il testo in modo autonomo usa il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("b")]),e("span",{class:"token punctuation"},">")]),s("pre"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("b")]),e("span",{class:"token punctuation"},">")]),s(". "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("pre")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"    Questo testo       viene visualizzato esatta "),s(`
`),e("span",{class:"line"},"    mente come fornito dallo sviluppatore.    "),s(`
`),e("span",{class:"line"},"    Venogno rispettrati    gli spazi e i ritorni "),s(`
`),e("span",{class:"line"},"    a "),s(`
`),e("span",{class:"line"},"    capo."),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("pre")]),e("span",{class:"token punctuation"},">")])])])],-1),RS=e("br",null,null,-1),NS=e("br",null,null,-1),qS=e("pre",null,`    Questo testo       viene visualizzato esatta 
    mente come fornito dallo sviluppatore.    
    Venogno rispettrati    gli spazi e i ritorni 
    a 
    capo.
`,-1),FS={__name:"63",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[IS,SS,OS,HS,C(i,G({},{ranges:[""]}),{default:v(()=>[PS]),_:1},16),RS,NS,qS]),_:1},16)}}},WS=E(FS,[["__file","/@slidev/slides/63.md"]]),DS=e("h1",null,"Esercizio html_07",-1),jS=e("p",null,"Link",-1),BS=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_06.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_07.html")]),e("li",null,"marcare 5 parole come sottolineate"),e("li",null,"marcare 5 parole come sbarrate"),e("li",null,"aggiungere una porzione di codice sorgente o comando linux"),e("li",null,"aggiungere una sezione di testo pre formattata"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_07.html")],-1),VS=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),US={__name:"64",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[DS,jS,BS,VS]),_:1},16))}},KS=E(US,[["__file","/@slidev/slides/64.md"]]),GS=e("h1",null,"Formattazione del Testo",-1),QS=e("p",null,"Tag addizionali",-1),JS=e("ul",null,[e("li",null,[e("p",null,"Durante la realizzazione di una pagina web ci possono essere delle esigenze particolari di formattazione.")]),e("li",null,[e("p",null,"HTML fornisce altri tag aggiuntivi utili per forzare un ritorno a capo e per visualizzare una linea di suddivisione orizzontale")]),e("li",null,[e("p",null,"ritorno a capo")])],-1),ZS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("In alcuni casi è necessario forzare un ritorno a capo. "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("Per fare ciò basta usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])])])],-1),YS=e("br",null,null,-1),XS=e("br",null,null,-1),e5=e("br",null,null,-1),n5=e("br",null,null,-1),t5=e("br",null,null,-1),a5=e("ul",null,[e("li",null,"linea orizzontale")],-1),s5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Per inserire una linea orizzontale di separazione usa "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("hr")]),e("span",{class:"token punctuation"},">")])])])],-1),o5=e("br",null,null,-1),i5=e("hr",{style:{height:"5px","background-color":"grey"}},null,-1),l5={__name:"65",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[GS,QS,JS,C(i,G({},{ranges:[""]}),{default:v(()=>[ZS]),_:1},16),YS,s(" In alcuni casi è necessario forzare un ritorno a capo. "),XS,e5,s("Per fare ciò basta usare il tag <br>"),n5,t5,a5,C(i,G({},{ranges:[""]}),{default:v(()=>[s5]),_:1},16),o5,i5]),_:1},16)}}},r5=E(l5,[["__file","/@slidev/slides/65.md"]]),c5=e("h1",null,"Formattazione del Testo",-1),u5=e("p",null,"Tag addizionali",-1),p5=e("ul",null,[e("li",null,"barra per metrica")],-1),d5=e("br",null,null,-1),m5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("Andamento dei voti:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("Studente 1 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("8.0"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("8 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 2 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("6.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("6.5 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 3 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("9.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("9.5 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 4 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("meter")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("4.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("4.5 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])])])],-1),f5=e("br",null,null,-1),h5=e("p",null,[s("Andamento dei voti:"),e("br")],-1),g5=e("p",null,[s("Studente 1 "),e("meter",{min:"0",max:"10",value:"8.0"},"8 su 10"),e("br"),s(" Studente 2 "),e("meter",{min:"0",max:"10",value:"6.5"},"6.5 su 10"),e("br"),s(" Studente 3 "),e("meter",{min:"0",max:"10",value:"9.5"},"9.5 su 10"),e("br"),s(" Studente 4 "),e("meter",{min:"0",max:"10",value:"4.5"},"4.5 su 10"),e("br")],-1),_5={__name:"66",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[c5,u5,p5,d5,C(i,G({},{ranges:[""]}),{default:v(()=>[m5]),_:1},16),f5,s(" Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag <meter> "),h5,g5]),_:1},16)}}},v5=E(_5,[["__file","/@slidev/slides/66.md"]]),k5=e("h1",null,"Formattazione del Testo",-1),b5=e("p",null,"Tag addizionali",-1),y5=e("ul",null,[e("li",null,"barra di progresso")],-1),w5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("In alternativa si può visualizzare un progress bar tramite l'uso del tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("Andamento dei voti:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[s("Studente 1 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("8"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("8 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 2 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("6.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("6.5 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 3 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("9.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("9.5 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])]),s(`
`),e("span",{class:"line"},[s("Studente 4 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("progress")]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("0"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("10"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("4.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("4.5 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),s(),e("span",{class:"token punctuation"},"/>")])])])],-1),T5=e("br",null,null,-1),x5=e("p",null,[s("Andamento dei voti:"),e("br")],-1),z5=e("p",null,[s("Studente 1 "),e("progress",{min:"0",max:"10",value:"8"},"8 di 10"),e("br"),s(" Studente 2 "),e("progress",{min:"0",max:"10",value:"6.5"},"6.5 di 10"),e("br"),s(" Studente 3 "),e("progress",{min:"0",max:"10",value:"9.5"},"9.5 di 10"),e("br"),s(" Studente 4 "),e("progress",{min:"0",max:"10",value:"4.5"},"4.5 di 10"),e("br")],-1),$5={__name:"67",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[k5,b5,y5,C(i,G({},{ranges:[""]}),{default:v(()=>[w5]),_:1},16),T5,s(" In alternativa si può visualizzare un progress bar tramite l'uso del tag <progress> "),x5,z5]),_:1},16)}}},M5=E($5,[["__file","/@slidev/slides/67.md"]]),L5=e("h1",null,"Esercizio html_08",-1),E5=e("p",null,"Link",-1),C5=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_07.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_08.html")]),e("li",null,"Inserire 5 ritorni a capo forzati"),e("li",null,"Inserire 3 linee orizzontali di separazione"),e("li",null,"Inserire 5 meter bar"),e("li",null,"Inserire 5 progress bar"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_08.html")],-1),A5=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),I5={__name:"68",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[L5,E5,C5,A5]),_:1},16))}},S5=E(I5,[["__file","/@slidev/slides/68.md"]]),O5=e("p",null," ",-1),H5={__name:"69",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[O5,C(i,{fs:"100px"},{default:v(()=>[s(" Caratteri speciali in HTML ")]),_:1})]),_:1},16)}}},P5=E(H5,[["__file","/@slidev/slides/69.md"]]),R5=e("h1",null,"HTML Entities",-1),N5=e("p",null,"Uso di caratteri riservati",-1),q5=e("ul",null,[e("li",null,"Nella realizzazione di una pagina web, non è possibile usare tutti i caratteri disponibili."),e("li",null,"Alcuni caratteri sono riservati dallo standard HTML per usi specifici."),e("li",null,"Per esempio i caratteri < e > sono riservati in quanto servono per delimitare un tag HTML."),e("li",null,[s("Per inserire i caratteri riservati come parte del contenuto di una pagina HTML, si devono sostituire con "),e("em",null,[e("strong",null,"HTML entities")])])],-1),F5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"&entity_name;"),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},"oppure "),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},"&#entity_number;")])],-1),W5=e("ul",null,[e("li",null,"Pertanto il carattere < e > sono rappresentati in questo modo")],-1),D5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[s("< --> "),e("span",{class:"token entity named-entity",title:"<"},"&lt;"),s(" o "),e("span",{class:"token entity",title:"<"},"&#60;")]),s(`
`),e("span",{class:"line"},[s("> --> "),e("span",{class:"token entity named-entity",title:">"},"&gt;"),s(" o "),e("span",{class:"token entity",title:">"},"&#62;")])])],-1),j5=e("p",null,[e("a",{href:"https://www.freeformatter.com/html-entities.html",target:"_blank",rel:"noopener"},"Qui si può consultare la lista completa di entities HTML.")],-1),B5={__name:"70",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[R5,N5,q5,C(i,G({},{ranges:[""]}),{default:v(()=>[F5]),_:1},16),W5,C(i,G({},{ranges:[""]}),{default:v(()=>[D5]),_:1},16),j5]),_:1},16)}}},V5=E(B5,[["__file","/@slidev/slides/70.md"]]),U5=e("h1",null,"HTML Entities",-1),K5=e("p",null,"Uso di caratteri riservati",-1),G5=e("ul",null,[e("li",null,"In alcune occasioni è necessario indicare al browser di non andare a capo."),e("li",null,[s("Per fare ciò si usa il carattere "),e("em",null,"non breaking space")]),e("li",null,"In altre parole inserendo questo carattere, si inserisce uno spazio che non può mandare la linea a capo")],-1),Q5=e("br",null,null,-1),J5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"non breaking space"),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{class:"token entity named-entity",title:" "},"&nbsp;")])])],-1),Z5=e("br",null,null,-1),Y5=e("ul",null,[e("li",null,"In modo analogo, ricordiamoci che se inserisco 10 spazi, il browser ne rimuove 9"),e("li",null,[s("Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte "),e("code",null,"&nbsp;")])],-1),X5={__name:"71",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[U5,K5,G5,Q5,C(i,G({},{ranges:[""]}),{default:v(()=>[J5]),_:1},16),Z5,Y5]),_:1},16)}}},e6=E(X5,[["__file","/@slidev/slides/71.md"]]),n6=e("h1",null,"HTML Entities",-1),t6=e("p",null,"Uso di caratteri riservati",-1),a6=e("ul",null,[e("li",null,"Qui una lista di HTML entities comuemente usate")],-1),s6=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Carattere"),e("th",null,"Descizione"),e("th",null,"Nome Entità"),e("th",null,"Numero Entità")])]),e("tbody",null,[e("tr",null,[e("td"),e("td",null,"non-breaking space"),e("td",null,[e("code",null,"&nbsp;")]),e("td",null,[e("code",null,"&#160;")])]),e("tr",null,[e("td",null,"<"),e("td",null,"less than"),e("td",null,[e("code",null,"&lt;")]),e("td",null,[e("code",null,"&#60;")])]),e("tr",null,[e("td",null,">"),e("td",null,"greater than"),e("td",null,[e("code",null,"&gt;")]),e("td",null,[e("code",null,"&#62;")])]),e("tr",null,[e("td",null,[e("code",null,"&")]),e("td",null,"ampersand"),e("td",null,[e("code",null,"&amp;")]),e("td",null,[e("code",null,"&#38;")])]),e("tr",null,[e("td",null,'"'),e("td",null,"double quotation mark"),e("td",null,[e("code",null,"&quot;")]),e("td",null,[e("code",null,"&#34;")])]),e("tr",null,[e("td",null,"’"),e("td",null,"single quotation mark (apostrophe)"),e("td",null,[e("code",null,"&apos;")]),e("td",null,[e("code",null,"&#39;")])]),e("tr",null,[e("td",null,"€"),e("td",null,"euro"),e("td",null,[e("code",null,"&euro;")]),e("td",null,[e("code",null,"&#8364;")])]),e("tr",null,[e("td",null,"©"),e("td",null,"copyright"),e("td",null,[e("code",null,"&copy;")]),e("td",null,[e("code",null,"&#169;")])])])],-1),o6={__name:"72",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[n6,t6,a6,s6]),_:1},16))}},i6=E(o6,[["__file","/@slidev/slides/72.md"]]),l6=e("p",null," ",-1),r6={__name:"73",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[l6,C(i,{fs:"90px"},{default:v(()=>[s(" Liste (non)ordinate ")]),_:1})]),_:1},16)}}},c6=E(r6,[["__file","/@slidev/slides/73.md"]]),u6=e("h1",null,"Liste",-1),p6=e("p",null,"Lista di elementi correlati",-1),d6=e("ul",null,[e("li",null,"In un testo o un articolo, risulta particolarmente utile organizzare il contenuto in modo schematico e rappresentare le informazioni tramite una lista."),e("li",null,"HTML mette a disposizione specifici tag per la generazione di liste di elementi")],-1),m6=e("p",null,"Ci sono 2 tipi principali di liste:",-1),f6=e("ol",null,[e("li",null,[e("strong",null,"Unordered List"),s(" (Liste non ordinate)")]),e("li",null,[e("strong",null,"Ordered List"),s(" (Liste ordinate)")])],-1),h6=e("br",null,null,-1),g6=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("h3",null,"Lista non ordinata"),e("ul",null,[e("li",null,"Pere"),e("li",null,"Patate"),e("li",null,"Mele"),e("li",null,"Carote")])]),e("div",null,[e("h3",null,"Lista ordinata"),e("ol",null,[e("li",null,"CPU: Central Processing Unit"),e("li",null,"RAM: Random Access Memeory"),e("li",null,"HDD: Hard Disk Drive"),e("li",null,"SSD: Solid State Disk")])])],-1),_6={__name:"74",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[u6,p6,d6,m6,f6,h6,g6]),_:1},16))}},v6=E(_6,[["__file","/@slidev/slides/74.md"]]),k6=e("h1",null,"Liste",-1),b6=e("p",null,"Lista di elementi correlati",-1),y6=e("h3",null,"Lista non ordinata",-1),w6=e("p",null,"Le liste di tipo non ordinato che si creano con 2 tag:",-1),T6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ul")]),e("span",{class:"token punctuation"},">")]),s(": Unordered List - tag che definisce la lista non ordinata ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s(": List Item - tag che definisce l'elemento/item della lista")])])],-1),x6=e("br",null,null,-1),z6={grid:"~ cols-2 gap-32"},$6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Esempio: Vegetali"),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ul")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("Pere"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("Patate"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("Mele"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("Carote"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("ul")]),e("span",{class:"token punctuation"},">")])])])],-1),M6=e("div",null,[e("p",null,"Esempio: Vegetali"),e("ul",null,[e("li",null,"Pere"),e("li",null,"Patate"),e("li",null,"Mele"),e("li",null,"Carote")])],-1),L6={__name:"75",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[k6,b6,y6,w6,C(i,G({},{ranges:[""]}),{default:v(()=>[T6]),_:1},16),x6,e("div",z6,[e("div",null,[C(i,G({},{ranges:[""]}),{default:v(()=>[$6]),_:1},16)]),M6])]),_:1},16)}}},E6=E(L6,[["__file","/@slidev/slides/75.md"]]),C6=e("h1",null,"Liste",-1),A6=e("p",null,"Lista di elementi correlati",-1),I6=e("h3",null,"Lista ordinata",-1),S6=e("p",null,"Le liste di tipo ordinato che si creano con 2 tag:",-1),O6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ol")]),e("span",{class:"token punctuation"},">")]),s(": Ordered List - tag che definisce la lista ordinata ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s(": List Item - tag che definisce l'elemento/item della lista")])])],-1),H6=e("br",null,null,-1),P6={grid:"~ cols-2 gap-32"},R6=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Esempio: I componenti di un computer"),s(`
`),e("span",{class:"line"},"       "),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("ol")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("CPU: Central Processing Unit"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("RAM: Random Access Memeory"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("HDD: Hard Disk Drive"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("li")]),e("span",{class:"token punctuation"},">")]),s("SSD: Solid State Disk"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("li")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("ol")]),e("span",{class:"token punctuation"},">")])])])],-1),N6=e("div",null,[e("p",null,"Esempio: I componenti di un computer"),e("ol",null,[e("li",null,"CPU: Central Processing Unit"),e("li",null,"RAM: Random Access Memeory"),e("li",null,"HDD: Hard Disk Drive"),e("li",null,"SSD: Solid State Disk")])],-1),q6={__name:"76",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[C6,A6,I6,S6,C(i,G({},{ranges:[""]}),{default:v(()=>[O6]),_:1},16),H6,e("div",P6,[e("div",null,[C(i,G({},{ranges:[""]}),{default:v(()=>[R6]),_:1},16)]),N6])]),_:1},16)}}},F6=E(q6,[["__file","/@slidev/slides/76.md"]]),W6=e("h1",null,"Esercizio html_09",-1),D6=e("p",null,"Link",-1),j6=e("ol",null,[e("li",null,[s("Editare il file "),e("em",null,"|cognome|_esercizio_html_08.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_09.html")]),e("li",null,"Inserire 5 caratteri speciali in modo congruo con il testo"),e("li",null,"Creare 1 lista ordinata in modo congruo con il testo"),e("li",null,"Creare 1 lista non ordinata in modo congruo con il testo"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_09.html")],-1),B6=e("p",null,[e("em",null,[s("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),V6={__name:"77",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[W6,D6,j6,B6]),_:1},16))}},U6=E(V6,[["__file","/@slidev/slides/77.md"]]),K6=e("p",null," ",-1),G6={__name:"78",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[K6,C(i,{fs:"75px"},{default:v(()=>[s(" Rappresentazioni tabulari con le Tabelle ")]),_:1})]),_:1},16)}}},Q6=E(G6,[["__file","/@slidev/slides/78.md"]]),J6=e("h1",null,"Tabelle",-1),Z6=e("p",null,"Organizzazione tabulare dei contenuti",-1),Y6=e("ul",null,[e("li",null,"In passato lo sviluppo web era ampiamente basato sull’uso di tabelle"),e("li",null,"Principalmente le tabelle venivano usato per creare il layout della pagina Web"),e("li",null,"Tuttavia questo metodo era laborioso e poco funzionale in quanto il supporto delle tabelle dai vari browser non era omogeneo."),e("li",null,"Oggi il layout di una pagine, NON si realizza più con le tabelle ma con il blocco DIV e il CSS."),e("li",null,"Tuttavia lo scopo originario delle tabelle, cioè visualizzare contenuti in formato tabellare rimane valido.")],-1),X6=e("p",null,"I principali tag per la definizione di una tabella sono:",-1),eO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),e("span",{class:"token punctuation"},">")]),s(": definisce un contenitore per dati organizzati in formato tabellare")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("thead")]),e("span",{class:"token punctuation"},">")]),s(": definisce l'header della tabella, solitamente contiene i titoli delle colonne")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tbody")]),e("span",{class:"token punctuation"},">")]),s(": definisce il corpo principale della tabella, cioè i dati veri e propri")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")]),s(": definisce una riga della tabella")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s(": definisce una cella della tabella")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("th")]),e("span",{class:"token punctuation"},">")]),s(": definisce una cella dell'header in grassetto e centrato")])])],-1),nO={__name:"79",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[J6,Z6,Y6,X6,C(i,G({},{ranges:[""]}),{default:v(()=>[eO]),_:1},16)]),_:1},16)}}},tO=E(nO,[["__file","/@slidev/slides/79.md"]]),aO=e("h1",null,"Tabelle",-1),sO=e("p",null,"Organizzazione tabulare dei contenuti",-1),oO=e("ul",null,[e("li",null,"Struttura base di una tabella")],-1),iO={class:"flex gap-8"},lO={class:"w-2/3"},rO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),s(),e("span",{class:"token attr-name"},"border"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("1"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("thead")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("th")]),e("span",{class:"token punctuation"},">")]),s("Nome"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("th")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("th")]),e("span",{class:"token punctuation"},">")]),s("Cognome"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("th")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("th")]),e("span",{class:"token punctuation"},">")]),s("Età"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("th")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("thead")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tbody")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("Marco"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("Rossi"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("16"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tbody")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("table")]),e("span",{class:"token punctuation"},">")])])])],-1),cO=e("div",{class:"w-1/3"},[e("table",{border:"1"},[e("thead",null,[e("tr",null,[e("td",{align:"center"},[e("b",null,"Nome")]),e("td",{align:"center"},[e("b",null,"Cognome")]),e("td",{align:"center"},[e("b",null,"Età")])])]),e("tbody",null,[e("tr",null,[e("td",null,"Marco"),e("td",null,"Rossi"),e("td",null,"16")])])])],-1),uO={__name:"80",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[aO,sO,oO,e("div",iO,[e("div",lO,[C(i,G({},{ranges:[""]}),{default:v(()=>[rO]),_:1},16)]),cO])]),_:1},16)}}},pO=E(uO,[["__file","/@slidev/slides/80.md"]]),dO=e("h1",null,"Tabelle",-1),mO=e("p",null,"Organizzazione tabulare dei contenuti",-1),fO=e("ul",null,[e("li",null,"Per modificare e stilizzare la tabella ci sono degli attributi molto utili"),e("li",null,[s("Importante notare che nel web moderno questi attributi sono "),e("strong",null,"deprecati"),s(" in quanto sostituiti da CSS")]),e("li",null,"Vediamo gli attributi più utili")],-1),hO=e("br",null,null,-1),gO=e("p",null,[e("strong",null,"border")],-1),_O=e("ul",null,[e("li",null,[e("strong",null,"Scopo"),s(": server per specificare la larghezza del bordo della tabella in pixel.")]),e("li",null,[e("strong",null,"Uso"),s(": si può applicare a "),e("code",null,"<table>")]),e("li",null,[e("strong",null,"Valori possibili"),s(": un numero che rappresenta lo spessore del bordo")])],-1),vO=e("br",null,null,-1),kO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),s(),e("span",{class:"token attr-name"},"border"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("1"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),bO={__name:"81",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[dO,mO,fO,hO,gO,_O,vO,C(i,G({},{ranges:[""]}),{default:v(()=>[kO]),_:1},16)]),_:1},16)}}},yO=E(bO,[["__file","/@slidev/slides/81.md"]]),wO=e("h1",null,"Tabelle",-1),TO=e("p",null,"Organizzazione tabulare dei contenuti",-1),xO=e("p",null,[e("strong",null,"bgcolor")],-1),zO=e("ul",null,[e("li",null,[e("strong",null,"Scopo"),s(": imposta il colore di sfondo di una tabella, una riga o una cella.")]),e("li",null,[e("strong",null,"Uso"),s(": si può applicare a "),e("code",null,"<table>, <tr>, <td>, <th>")])],-1),$O=e("br",null,null,-1),MO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),s(),e("span",{class:"token attr-name"},"bgcolor"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("yellow"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Testo"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])])])],-1),LO=e("br",null,null,-1),EO=e("table",null,[e("tr",null,[e("td",null,"Nome"),e("td",null,"Cognome"),e("td",null,"Età")]),e("tr",null,[e("td",null,"Mario"),e("td",null,"Rossi"),e("td",{bgcolor:"yellow"},"20")])],-1),CO={__name:"82",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[wO,TO,xO,zO,$O,C(i,G({},{ranges:[""]}),{default:v(()=>[MO]),_:1},16),LO,EO]),_:1},16)}}},AO=E(CO,[["__file","/@slidev/slides/82.md"]]),IO=e("h1",null,"Tabelle",-1),SO=e("p",null,"Organizzazione tabulare dei contenuti",-1),OO=e("p",null,[e("strong",null,"align")],-1),HO=e("ul",null,[e("li",null,[e("strong",null,"Scopo"),s(": allinea il contenuto orizzontalmente (a sinistra, destra, centro) all’interno di una cella o di una tabella.")]),e("li",null,[e("strong",null,"Uso"),s(": "),e("code",null,'<table align="center"> oppure <td align="right">')]),e("li",null,[e("strong",null,"Valori possibili"),s(": "),e("code",null,"left, right, center")])],-1),PO=e("br",null,null,-1),RO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),s(),e("span",{class:"token attr-name"},"align"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("center"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Centrato"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])])])],-1),NO=e("br",null,null,-1),qO=e("table",null,[e("tr",null,[e("td",null,"Nome"),e("td",null,"Cognome"),e("td",null,"Età")]),e("tr",null,[e("td",null,"Mario"),e("td",null,"Rossi"),e("td",{align:"center"},"20")])],-1),FO={__name:"83",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[IO,SO,OO,HO,PO,C(i,G({},{ranges:[""]}),{default:v(()=>[RO]),_:1},16),NO,qO]),_:1},16)}}},WO=E(FO,[["__file","/@slidev/slides/83.md"]]),DO=e("h1",null,"Tabelle",-1),jO=e("p",null,"Organizzazione tabulare dei contenuti",-1),BO=e("p",null,[e("strong",null,"valign")],-1),VO=e("ul",null,[e("li",null,[e("strong",null,"Scopo"),s(": allinea verticalmente il contenuto dentro una cella.")]),e("li",null,[e("strong",null,"Uso"),s(": Su "),e("code",null,"<td>, <th>, <tr>"),s(".")]),e("li",null,[e("strong",null,"Valori possibili"),s(": "),e("code",null,"top, middle, bottom, baseline"),s(".")])],-1),UO=e("br",null,null,-1),KO=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),s(),e("span",{class:"token attr-name"},"valign"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("bottom"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("In basso"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])])])],-1),GO=e("br",null,null,-1),QO=e("table",null,[e("tr",null,[e("td",null,"Nome"),e("td",null,"Cognome"),e("td",null,"Età")]),e("tr",null,[e("td",{height:"120"},"Mario"),e("td",null,"Rossi"),e("td",{valign:"bottom"},"20")])],-1),JO={__name:"84",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[DO,jO,BO,VO,UO,C(i,G({},{ranges:[""]}),{default:v(()=>[KO]),_:1},16),GO,QO]),_:1},16)}}},ZO=E(JO,[["__file","/@slidev/slides/84.md"]]),YO=e("h1",null,"Tabelle",-1),XO=e("p",null,"Organizzazione tabulare dei contenuti",-1),eH=e("p",null,[e("strong",null,"rowspan")],-1),nH=e("ul",null,[e("li",null,[e("strong",null,"Scopo"),s(": fa “occupare” a una cella più righe, fondendo celle verticalmente.")]),e("li",null,[e("strong",null,"Uso"),s(": su "),e("code",null,"<td> o <th>"),s(".")]),e("li",null,[e("strong",null,"Valore"),s(": un numero che rappresenta quante righe occupa la cella.")])],-1),tH=e("br",null,null,-1),aH=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),s(),e("span",{class:"token attr-name"},"rowspan"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("2"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Testo"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])])])],-1),sH=e("br",null,null,-1),oH=e("table",null,[e("tr",null,[e("td",{rowspan:"2",border:"1"},"Num."),e("td",null,"Nome"),e("td",null,"Cognome"),e("td",null,"Età")]),e("tr",null,[e("td",null,"Mario"),e("td",null,"Rossi"),e("td",{align:"center"},"20")])],-1),iH={__name:"85",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[YO,XO,eH,nH,tH,C(i,G({},{ranges:[""]}),{default:v(()=>[aH]),_:1},16),sH,oH]),_:1},16)}}},lH=E(iH,[["__file","/@slidev/slides/85.md"]]),rH=e("h1",null,"Tabelle",-1),cH=e("p",null,"Organizzazione tabulare dei contenuti",-1),uH=e("p",null,[e("strong",null,"colspan")],-1),pH=e("ul",null,[e("li",null,[e("strong",null,"Scopo"),s(": fa “occupare” a una cella più colonne, fondendo celle orizzontalmente.")]),e("li",null,[e("strong",null,"Uso"),s(": su "),e("code",null,"<td> o <th>"),s(".")]),e("li",null,[e("strong",null,"Valore"),s(": un numero che rappresenta quante colonne occupa la cella.")])],-1),dH=e("br",null,null,-1),mH=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),s(),e("span",{class:"token attr-name"},"colspan"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("2"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Testo"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])])])],-1),fH=e("br",null,null,-1),hH=e("table",null,[e("tr",null,[e("td",null,"Nome"),e("td",null,"Cognome"),e("td",null,"Età")]),e("tr",null,[e("td",null,"Mario"),e("td",{colspan:"2",bgcolor:"red"},"Rossi")])],-1),gH={__name:"86",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[rH,cH,uH,pH,dH,C(i,G({},{ranges:[""]}),{default:v(()=>[mH]),_:1},16),fH,hH]),_:1},16)}}},_H=E(gH,[["__file","/@slidev/slides/86.md"]]),vH=e("h1",null,"Tabelle",-1),kH=e("p",null,"Organizzazione tabulare dei contenuti",-1),bH=e("p",null,[e("strong",null,"width")],-1),yH=e("ul",null,[e("li",null,[e("strong",null,"Scopo"),s(": imposta la larghezza (in pixel o percentuale) di celle, colonne o tabella.")]),e("li",null,[e("strong",null,"Uso"),s(": Su "),e("code",null,"<table>, <td>, <th>"),s(".")])],-1),wH=e("br",null,null,-1),TH=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),s(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("100"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Larga 100px"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),s(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("80%"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token comment"},"<!-- tabella larga l’80% del contenitore -->")])])],-1),xH=e("br",null,null,-1),zH=e("table",null,[e("tr",null,[e("td",null,"Nome"),e("td",null,"Cognome"),e("td",null,"Età")]),e("tr",null,[e("td",{bgcolor:"blue"},"Mario"),e("td",{bgcolor:"green"},"Rossi"),e("td",{width:"100",bgcolor:"red"},"20")])],-1),$H={__name:"87",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[vH,kH,bH,yH,wH,C(i,G({},{ranges:[""]}),{default:v(()=>[TH]),_:1},16),xH,zH]),_:1},16)}}},MH=E($H,[["__file","/@slidev/slides/87.md"]]),LH=e("h1",null,"Tabelle",-1),EH=e("p",null,"Organizzazione tabulare dei contenuti",-1),CH=e("p",null,[e("strong",null,"height")],-1),AH=e("ul",null,[e("li",null,[e("strong",null,"Scopo"),s(": definisce l’altezza di una cella o di una tabella.")]),e("li",null,[e("strong",null,"Uso"),s(": Su "),e("code",null,"<table>, <td>, <th>"),s(".")])],-1),IH=e("br",null,null,-1),SH=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),s(),e("span",{class:"token attr-name"},"height"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("100"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Alta 100px"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])])])],-1),OH=e("br",null,null,-1),HH=e("table",null,[e("tr",null,[e("td",null,"Nome"),e("td",null,"Cognome"),e("td",null,"Età")]),e("tr",null,[e("td",{bgcolor:"blue",height:"100"},"Mario"),e("td",{bgcolor:"green"},"Rossi"),e("td",{width:"100",bgcolor:"red"},"20")])],-1),PH={__name:"88",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[LH,EH,CH,AH,IH,C(i,G({},{ranges:[""]}),{default:v(()=>[SH]),_:1},16),OH,HH]),_:1},16)}}},RH=E(PH,[["__file","/@slidev/slides/88.md"]]),NH=e("h1",null,"Tabelle",-1),qH=e("p",null,"Organizzazione tabulare dei contenuti",-1),FH={class:"flex gap-8"},WH={class:"w-2/3"},DH=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),s(),e("span",{class:"token attr-name"},"border"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("1"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("thead")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("th")]),e("span",{class:"token punctuation"},">")]),s("A"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("th")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("th")]),e("span",{class:"token punctuation"},">")]),s("B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("th")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("th")]),e("span",{class:"token punctuation"},">")]),s("A & B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("th")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("thead")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tbody")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),s("  "),e("span",{class:"token attr-name"},"align"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("center"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),s("  "),e("span",{class:"token attr-name"},"align"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("center"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),s("  "),e("span",{class:"token attr-name"},"align"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("center"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),s("  "),e("span",{class:"token attr-name"},"align"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("center"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tbody")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("table")]),e("span",{class:"token punctuation"},">")])])])],-1),jH=e("div",{class:"w-1/3"},[e("table",{border:"1",style:{width:"300px"}},[e("thead",null,[e("tr",null,[e("td",{border:"1",align:"center"},[e("b",null,"A")]),s(),e("td",{border:"1",align:"center"},[e("b",null,"B")]),s(),e("td",{align:"center"},[e("b",null,"A & B")])])]),e("tbody",null,[e("tr",{align:"center"},[e("td",{border:"1"},"0"),s(),e("td",{border:"1"},"0"),s(),e("td",null,"0")]),e("tr",{align:"center"},[e("td",{border:"1"},"0"),s(),e("td",{border:"1"},"1"),s(),e("td",null,"0")]),e("tr",{align:"center"},[e("td",{border:"1"},"1"),s(),e("td",{border:"1"},"0"),s(),e("td",null,"0")]),e("tr",{align:"center"},[e("td",{border:"1"},"1"),s(),e("td",{border:"1"},"1"),s(),e("td",null,"1")])])])],-1),BH={__name:"89",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[NH,qH,e("div",FH,[e("div",WH,[C(i,G({},{ranges:[""]}),{default:v(()=>[DH]),_:1},16)]),jH])]),_:1},16)}}},VH=E(BH,[["__file","/@slidev/slides/89.md"]]),UH=e("h1",null,"Tabelle",-1),KH=e("p",null,"Organizzazione tabulare dei contenuti",-1),GH={class:"flex gap-8"},QH={class:"w-2/3"},JH=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("table")]),s(),e("span",{class:"token attr-name"},"border"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("1"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("thead")]),s(),e("span",{class:"token attr-name"},"bgcolor"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("grey"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"align"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("center"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("th")]),e("span",{class:"token punctuation"},">")]),s("A"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("th")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("th")]),e("span",{class:"token punctuation"},">")]),s("B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("th")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("th")]),e("span",{class:"token punctuation"},">")]),s("A | B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("th")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("thead")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tbody")]),s(),e("span",{class:"token attr-name"},"align"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("center"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),s(),e("span",{class:"token attr-name"},"bgcolor"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Gainsboro"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("tr")]),s(),e("span",{class:"token attr-name"},"bgcolor"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Gainsboro"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("td")]),e("span",{class:"token punctuation"},">")]),s("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("td")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tr")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("tbody")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("table")]),e("span",{class:"token punctuation"},">")])])])],-1),ZH=e("div",{class:"w-1/3"},[e("table",{border:"1",style:{width:"300px"}},[e("thead",{bgcolor:"grey",align:"center"},[e("tr",null,[e("td",null,"A"),s(),e("td",null,"B"),s(),e("td",null,"A | B")])]),e("tbody",{align:"center"},[e("tr",null,[e("td",null,"0"),s(),e("td",null,"0"),s(),e("td",null,"0")]),e("tr",{bgcolor:"Gainsboro"},[e("td",null,"0"),s(),e("td",null,"1"),s(),e("td",null,"1")]),e("tr",null,[e("td",null,"1"),s(),e("td",null,"0"),s(),e("td",null,"1")]),e("tr",{bgcolor:"Gainsboro"},[e("td",null,"1"),s(),e("td",null,"1"),s(),e("td",null,"1")])])])],-1),YH={__name:"90",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[UH,KH,e("div",GH,[e("div",QH,[C(i,G({},{ranges:[""]}),{default:v(()=>[JH]),_:1},16)]),ZH])]),_:1},16)}}},XH=E(YH,[["__file","/@slidev/slides/90.md"]]),e4="/3/html/assets/html6-b7505122.png",n4=e("h1",null,"Esercizio html_10a",-1),t4=e("p",null,"Tabelle",-1),a4=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ol",null,[e("li",null,"Realizzare in HTML con l’uso delle tabelle quanto rappresentato in figura"),e("li",null,"Obiettivo è riprodurlo il più fedelmente possibile tramite l’uso delle tabelle e di quanto appreso fino ad ora"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_10a.html")])]),e("div",null,[e("img",{src:e4,width:"470",style:{float:"right",position:"relative",top:"0px"}})])],-1),s4={__name:"91",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[n4,t4,a4]),_:1},16))}},o4=E(s4,[["__file","/@slidev/slides/91.md"]]),i4="/3/html/assets/html7-7ee31a19.png",l4=e("h1",null,"Esercizio html_10b",-1),r4=e("p",null,"Tabelle",-1),c4=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ol",null,[e("li",null,"Realizzare in HTML con l’uso delle tabelle quanto rappresentato in figura"),e("li",null,"Obiettivo è riprodurlo il più fedelmente possibile tramite l’uso delle tabelle e di quanto appreso fino ad ora"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_10b.html")])]),e("div",null,[e("img",{src:i4,width:"470",style:{float:"right",position:"relative",top:"0px"}})])],-1),u4={__name:"92",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[l4,r4,c4]),_:1},16))}},p4=E(u4,[["__file","/@slidev/slides/92.md"]]),d4="/3/html/assets/html8-9e707619.png",m4=e("h1",null,"Esercizio html_10c",-1),f4=e("p",null,"Tabelle",-1),h4=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ol",null,[e("li",null,"Realizzare in HTML con l’uso delle tabelle quanto rappresentato in figura"),e("li",null,"Obiettivo è riprodurlo il più fedelmente possibile tramite l’uso delle tabelle e di quanto appreso fino ad ora"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_10c.html")])]),e("div",null,[e("img",{src:d4,width:"270",style:{float:"right",position:"relative",left:"-100px"}})])],-1),g4={__name:"93",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[m4,f4,h4]),_:1},16))}},_4=E(g4,[["__file","/@slidev/slides/93.md"]]),v4="/3/html/assets/html9-a6604d8d.png",k4=e("h1",null,"Esercizio html_10d",-1),b4=e("p",null,"Tabelle",-1),y4=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ol",null,[e("li",null,"Realizzare in HTML con l’uso delle tabelle quanto rappresentato in figura"),e("li",null,"Obiettivo è riprodurlo il più fedelmente possibile tramite l’uso delle tabelle e di quanto appreso fino ad ora"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_10d.html")])]),e("div",null,[e("img",{src:v4,width:"470",style:{float:"right",position:"relative",top:"0px"}})])],-1),w4={__name:"94",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[k4,b4,y4]),_:1},16))}},T4=E(w4,[["__file","/@slidev/slides/94.md"]]),x4="/3/html/assets/html10-632e179d.png",z4=e("h1",null,"Esercizio html_10e",-1),$4=e("p",null,"Tabelle",-1),M4=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ol",null,[e("li",null,"Realizzare in HTML con l’uso delle tabelle quanto rappresentato in figura"),e("li",null,"Obiettivo è riprodurlo il più fedelmente possibile tramite l’uso delle tabelle e di quanto appreso fino ad ora"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_10e.html")])]),e("div",null,"   ")],-1),L4=e("img",{src:x4,style:{position:"relative",left:"0px",top:"20px"}},null,-1),E4={__name:"95",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[z4,$4,M4,L4]),_:1},16))}},C4=E(E4,[["__file","/@slidev/slides/95.md"]]),A4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhgAAAEVCAIAAAAtkAsEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAJeElEQVR4nO3cf6jV9R3H8c9VFypu3a4mqbluoUQnjxhZK0or/1pZ9HMGG9uKZVurRNqCyC27MRmjGOu2NaFGo/5YN8cixtqKctlmv7bW4oiJWpalYD/uveXVyvSe/XFBovToemXnqo/HX4fzPd7zPm/u5Xm/nwu21Ov1AgCf1ZBmDwDA/k1IAIgICQARIQEgIiQARIbt8tmOjo4veA4ABq2VK1d2dXXt7uquQ1JKWbhw4b6ZB4D9TLVabXDV0RYAkd3ekQxoXKEDWKVSGbiPswEbsAEbsIHG9hCSUkqtVvs85tnPfPyvRDZgAzZgAzbQgKMtACJCAkBESACICAkAESEBICIkAESEBICIkAAQERIAIkICQERIAIgICQARIQEgIiQARIQEgIiQABAREgAiQgJAREgAiAgJABEhASAiJABEhASAiJAAEBESACJCAkBESACICAkAESEBICIkAESEBICIkAAQERIAIkICQERIAIgICQARIQEgIiQARIQEgIiQABAREgAiQgJAREgAiAgJABEhASAiJABEhASAiJAAEBESACJCAkBESACICAkAESEBICIkAESEBICIkAAQERIAIkICQERIAIgICQARIQEgIiQARIQEgIiQABAREgAiQgJAREgAiAgJABEhASAiJABEhASAiJAAEBESACJCAkBESACICAkAESEBICIkAESEBICIkAAQERIAIsOaPcBgV6lUOjo6mj1FM9mADdgAjQnJHnR1dTV7hCazARuwARpztAVAxB3JHlSr1WaP0ByVSmXg99CDdgP4Hti5ARoTkj2r1WrNHqEJPn4mfsWTVzRxEpqlt7N352M/BTTgaAuAiJAAEBESACJCAkBESACICAkAESEBICIkAESEBICIkAAQERIAIkICQERIAIgICQARIQEgIiQARIQEgIiQABAREgAiQgJAREgAiAgJABEhASAiJABEhASAiJAAEBESACJCAkBESACICAkAESEBICIkAESEBICIkEAppdT+UrvxmBvnt81/vPPxvXn9a8+/dsu0W+a3zb9/3v1be7be/vXb57fNX3TSon09JwxCw5o9AHz+7rzwztXLVu/u6kU/v2jm92d+4snq7OrjnY+/+q9X9/ItjjrxqEmnTXpu/XOllJGHjTzl26ese27dZ50X9m9CwoHpphdvapvYVkq5ecrNvRt7z/zhmRf87IJSyrLfLmv2aHCgcbTFAailpaV1XOsuLx06/tDG/3bYIX67gv+PnxkOQFf96ardXZp2/rQ1T65ZdNKien99+7bthx152PQ500+7/LSdL1j/n/Wdszs31DaMP378+bec335Seynl7VfefnDBg93ru3d8tGPK2VNm/2T20C8NbTDA0juWLlu8bNSYUZs3bZ4wdcKsa2ZNnjn58/t8MLi4I+Gg0/dO3+nfO33BvxfMe3jeumfXLfnRkp43enZebZ3Qes1D18z55Zx1z667+1t3b3t/W//2/ru+edeqv6+a9/C8Y886dukdS5//4/ON36LnjZ65f5h7/bLrz7v5vJcee2nJj5fs488EzSQkHHROuPCEM35wRktLS9vEtoEbizfXvrnz6sjDRg4ZNuTES05sndDa93bfqsdWvfzUy5tWbxrTPmbEoSNaJ7SWUta/sL7xW1z8i4uPnHpkKWV0++iBr79j2459+JGgqRxtcdB5/YXXX3jwhZ4NPWOOGdO/o7+UUu+vf/plreNaezf0dr/RPeK9EaWUTas3zW+bP3Cp762+xm/x4p9ffHn5y5vf2jz8y8MHnumv9w8tjU7DYP8lJBxc3n/3/cXfWLyle8vVD109ecbkpZ1Ld/Tv+l5h+7btpZTho4bX6/VSythJY2987sa9eYs1/1hzz3fvGXX4qBuW3/Dm2jefvvfpz3F+GIQcbXFweefVd7Z0bymltJ/c3uBl9Xp94A8nRxx3xOivji6lvLfpvb18i40rNpZSxk4aO2rMqHBa2C8ICQeXcceNG/6V4aWU3jd6t/ZsHbjb+LTlv1u+pXvL0Scf3T69fdLpk8YdN+6DzR889fun6vX6jm07Gkdl4rSJpZS+t/o++vCjrT1b98WngEFFSDhgrfjrivuuvG/LO1tKKSv+tuKB6x7o3dg79JChsxfMHn/8+MWXLF7666Xjjx9fSnniN0/U++tTz53aPr390Vsfve2s2x67/bHpc6Zffu/lpZSWIS1z75877fxpj9z6yHWHX3fnRXe+8swra5evXbt8bSllzT/X1B6uPXPfM6WUdze++/S9Tx/9taNP/c6pH/Z92HlOZ/fr3UOGDRl4iyauAvYpfyPhgDXl7ClTzp7y6ednzJ0xY+6Mgcfn/vTcnc/PunbWrGtn7fJLtU1su+yeyz7x5E3/vWnn4+o51Y9fuvRXl+58PPPKT/53LHCAcUcCQERIAIgICQARIQEgIiQARIQEgIiQABAREgAiQgJAREgAiAgJABEhASAiJABEhASAiJAAEBESACJCAkBESACICAkAESEBICIkAESEBICIkAAQERIAIkICQERIAIgICQARIQEgIiQARIQEgIiQABAREgAiQgJAREgAiAgJAJFhzR5gsKtUKh0dHc2eopkqlUpvZ2+zp6CZ/BTQmJDsQVdXV7NHaDIbwPcAjTnaAiDijmQPqtVqs0dojkqlMvB7qA3YgA3QmJDsWa1Wa/YITfDxM3EbsAEboAFHWwBEhASAiJAAEBESACJCAkBESACICAkAESEBICIkAESEBICIkAAQERIAIkICQERIAIgICQARIQEgIiQARIQEgIiQABAREgAiQgJAREgAiAgJABEhASAiJABEhASAiJAAEBESACJCAkBESACICAkAESEBICIkAESEBICIkAAQERIAIkICQERIAIgICQARIQEgIiQARIQEgIiQABAREgAiQgJAREgAiAgJABEhASAiJABEhASAiJAAEBESACJCAkBESACICAkAESEBICIkAESEBICIkAAQERIAIkICQERIAIgICQARIQEgIiQARIQEgIiQABAREgAiQgJAREgAiAgJABEhASAiJABEhASAiJAAEBESACJCAkBESACICAkAESEBICIkAESGNb5cqVQ6Ojq+mFEGJxuwARuwARtorKVer3/62Y6OjoULF37x0wAwCFWr1VqttrurjrYAiOz6aGvlypXVavULHgWA/dGuj7YAYC852gIgIiQARIQEgIiQABAREgAiQgJAREgAiAgJAJH/Af69GL9lV6F7AAAAAElFTkSuQmCC",I4=e("h1",null,"Esercizio html_10f",-1),S4=e("p",null,"Tabelle",-1),O4=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ol",null,[e("li",null,"Realizzare in HTML con l’uso delle tabelle quanto rappresentato in figura"),e("li",null,"Obiettivo è riprodurlo il più fedelmente possibile tramite l’uso delle tabelle e di quanto appreso fino ad ora"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_10f.html")])]),e("div",null,[e("img",{src:A4,width:"400",style:{position:"relative",left:"0px",top:"20px"}})])],-1),H4={__name:"96",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[I4,S4,O4]),_:1},16))}},P4=E(H4,[["__file","/@slidev/slides/96.md"]]),R4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAADOCAIAAADQXwI9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGuUlEQVR4nO3aT2jedwHH8XfW2JRSxLrBCu0OaSe0j322gODBFuzhCWIV1sNzaWEMHLQnRSbDFQwlPh5GetNLrQhFLw2BHAz1oN0h6KbgaFKfGBRByyYRXTPpodB0wcdDaNfOxPzxSb6fX/Z+0cPD7/m1fPiRN88vT389nU4HSZGeKD1A0orsU8pln1Iu+5Ry2aeUq3elN4aHh7dyh/RxMDs7Ozo6uvbzV+wTuHDhwv+9R9KH6vX6us73/lbK9b8+P5est/htr1arLd2ieGU+wiuzkodXZr1W7xOYac5s4J/erpo0H75ut9sFl6R59DuL9ow/Mx8abjZXP2k53t9KuexTymWfUi77lHLZp5RrTd/fLuMn8Bd4GZ7p6pwKun79+uXLl8fGxvbv33/kyJGFhYW5ubn+/v5Tp06dO3eut3ejV3gbeRuGYB52w9NwAP4Jn4evlx6Wb0M/PbdhH7wHU/ZJo9E4ceLE2NhYo9G4cuUKsLCwMD4+fubMmXa7fenSpdIDC/sBvAYteOWRg3+Gl+1zDTZ0fzsNz8Pz0IZ73V5UfX19fadPnx4YGJiYmCi9pbBpeAW+9XicwGfgK2UWVcz6++zAHDwNA/AB+P/zy+l0OvPz83v37i09pLDXYRG+udxb397qLZW0/j7/BM8C8BQcgKluL6q+xcXF8+fP37lzZ2RkpPSWwm7CQfh06RnVtf7fP2/CVx+8fg5+Dn+DA10dVU0zMzOtVuv+/fsTExO3bt0aGRk5duxY6VGF/RG+UHpDpa3z8/Mu/AvehkmYhDvQB9ObM61qjh49OjQ01Gq1pqenb9y4MT4+fujQocnJydK7SqrBXOkNlbbOPm/CFx/5MwiH4Sbc35x1lXXw4MGrV6/Oz8+3Wq3SW0r6LLwDi6VnVNc6+/zDg18+HzoMH8Dvu7dou9izZ8+uXbt6enpKDynpG/AE/HS5t17c6i2VtJ4+34Un4ROPH3wW+uBGV0dtCxcvXrx3797Zs2dLDynpOPwQXodfPX78d/BWmUUVs+bvh34NbeiB69B4cPA2vAk7YA6uwgAc3pyZwZaeH1p6MTg4COzcuXP37t07duy4du3ayZMnSw8s7GvwAvwI3oIpmIdF+Dt8qfSwSlhzn8fh+H8dfApe6OqcCmo0Go1GY/XzPsaehNdKb6gon4+XctmnlMs+pVz2KeWyTymXfUq57FPKZZ9SLvuUctmnlMs+pVz2KeWyTymXfUq57FPKZZ9SLvuUctmnlMs+pVz2KeWyTymXfUq57FPKZZ9SLvuUctmnlMs+pVz2KeWyTymXfUq57FPKZZ9SLvuUctmnlMs+pVz2KeWyTymXfUq57FPKZZ9SLvuUctmnlMs+pVz2KeWyTymXfUq57FPKZZ9SLvuUctmnlMs+pVz2KeWyTymXfUq57FPKZZ9SLvuUctmnlMs+pVz2KeWyTymXfUq57FPKZZ9SLvuUctmnlMs+pVz2KeWyTymXfUq57FPKZZ9Srt7SA7QN1Wq14Waz9IrtwD7VfaOjo6UnbBPe30q5/PxU99Xr9dITstRqtY3dU9inNsXMTLv0hCDN5vDG/qL3t1Iu+5Ry2aeUyz6lXPYp5fL7W22ev8L34GdwF47Bv+F9WIR98BKc8eNhVV4gbZ5++DHUYR/8Et6AKXgTjsCLcBzul16Yzj61xT4J34ch+A18t/SYdPapIr4D++Fy6Rnp7FNF7ITPwXvwj9JLotmnSukH4J3CK7LZp0q5DcAzhVdks0+V8i58CvaVnhHNPlXEFPwWXi09I519auu9AV+Gl+B86SXpfH5Im2fp+aE23IVBAHphDxyAX8BzhddVgX1q8yw9P6SN8/5WymWfUi77lHLZp5TLPqVc9inlsk8pl31KuexTymWfUi77lHLZp5TLPqVc9inlsk8pl31KuexTymWfUi77lHLZp5TLPqVc9inlsk8pl31KuexTymWfUi77lHLZp5TLPqVc9inlsk8pl31KuexTymWfUi77lHLZp5TLPqVc9inlsk8pl31KuexTymWfUi77lHLZp5TLPqVc9inlsk8pl31KuexTymWfUi77lHLZp5TLPqVc9inlsk8pl31KuexTymWfUi77lHLZp5TLPqVc9inlsk8pl31KuexTymWfUi77lHLZp5TLPqVc9inlsk8pl31KuXpXPaNWqzVpbsGUyqnVasPDw6VXJKrVas2mV6YLVu9zdHR0C3ZUkVdmJV6ZbvH+Vsq14ufn7OxsvV7fyimSPqKn0+mU3iBped7fSrnsU8pln1Iu+5Ry2aeUyz6lXPYp5foPCdwDo60uxOYAAAAASUVORK5CYII=",N4=e("h1",null,"Esercizio html_10g",-1),q4=e("p",null,"Tabelle",-1),F4=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ol",null,[e("li",null,"Realizzare in HTML con l’uso delle tabelle quanto rappresentato in figura"),e("li",null,"Obiettivo è riprodurlo il più fedelmente possibile tramite l’uso delle tabelle e di quanto appreso fino ad ora"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_10g.html")])]),e("div",null,[e("img",{src:R4,width:"300",style:{position:"relative",left:"100px",top:"20px"}})])],-1),W4={__name:"97",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[N4,q4,F4]),_:1},16))}},D4=E(W4,[["__file","/@slidev/slides/97.md"]]),j4="/3/html/assets/html5_12-3c070a3c.jpg",B4=e("h1",null,"Esercizio html_11",-1),V4=e("p",null,"Tabelle",-1),U4=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ol",null,[e("li",null,"Realizzare in HTML con l’uso delle tabelle il menù del ristorante qui a fianco"),e("li",null,"Obiettivo è riprodurlo il più fedelmente possibile tramite l’uso delle tabelle e di quanto appreso fino ad ora"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_11.html")])]),e("div",null,[e("img",{src:j4,width:"370",style:{float:"right",position:"relative",top:"-100px"}})])],-1),K4={__name:"98",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[B4,V4,U4]),_:1},16))}},G4=E(K4,[["__file","/@slidev/slides/98.md"]]),Q4=e("p",null," ",-1),J4={__name:"99",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[Q4,C(i,{fs:"80px"},{default:v(()=>[s(" Interagiamo con l'utente attraverso i From ")]),_:1})]),_:1},16)}}},Z4=E(J4,[["__file","/@slidev/slides/99.md"]]),Y4=e("h1",null,"Form",-1),X4=e("p",null,"Input dall’utente",-1),eP=e("ul",null,[e("li",null,"Il form (letteralmente modulo) indica la parte di interfaccia utente di un’applicazione web che consente all’utente di inserire e inviare al web server/application server uno o più dati."),e("li",null,[s("Il form è composto da un contenitore e da componenti grafici detti "),e("strong",null,"widget"),s(" che compongono il form stesso.")]),e("li",null,"I widget comunemente presenti nelle pagine web sono: le caselle di testo, i menu a tendina, i date-picker, …")],-1),nP=e("p",null,"Il form si crea usando il tag:",-1),tP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},"..."),s(`
`),e("span",{class:"line"},"...widget del form"),s(`
`),e("span",{class:"line"},"...."),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),aP=e("p",null,"I principali widget sono:",-1),sP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("select")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("textarea")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("button")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("fieldset")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("legend")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("datalist")]),e("span",{class:"token punctuation"},">")]),s(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),e("span",{class:"token punctuation"},">")])])])],-1),oP={__name:"100",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[Y4,X4,eP,nP,C(i,G({},{ranges:[""]}),{default:v(()=>[tP]),_:1},16),aP,C(i,G({},{ranges:[""]}),{default:v(()=>[sP]),_:1},16)]),_:1},16)}}},iP=E(oP,[["__file","/@slidev/slides/100.md"]]),lP=e("h1",null,"Form",-1),rP=e("p",null,"<input>",-1),cP=e("ul",null,[e("li",null,"Uno dei widget più importanti ed utilizzati è <input>"),e("li",null,"Permette di ricevere un input dall’utente"),e("li",null,[s("Questo widget può assumere molte forme diverse in funzione dell’attributo "),e("em",null,"type")])],-1),uP=e("br",null,null,-1),pP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idnome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Nome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idcognome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cognnome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Cognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),dP=e("p",null,[e("br"),e("br"),e("input",{type:"text",id:"idnome",name:"nome",placeholder:"Nome",style:{border:"1px solid black",background:"Gainsboro"}}),s(),e("br"),e("br"),e("input",{type:"text",id:"idcognome",name:"cognome",placeholder:"Cognome",style:{border:"1px solid black",background:"Gainsboro"}})],-1),mP={__name:"101",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[lP,rP,cP,uP,C(i,G({},{ranges:[""]}),{default:v(()=>[pP]),_:1},16),dP]),_:1},16)}}},fP=E(mP,[["__file","/@slidev/slides/101.md"]]),hP=e("h1",null,"Form",-1),gP=e("p",null,"<label>",-1),_P=e("ul",null,[e("li",null,[s("L’elemento "),e("em",null,"label"),s(" specifica una label per diversi tipi di widget di un form")]),e("li",null,"Questo tag è molto importante in quanto gli screen-reader, per persone ipovedenti, leggono ad alta voce la label di un widget"),e("li",null,[s("Per associare una label ad un widget, si usa l’attributo "),e("em",null,"for"),s(" che deve coincidere con l’attributo "),e("em",null,"id"),s(" del widget")])],-1),vP=e("br",null,null,-1),kP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idnome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Nome: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idnome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Nome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idcognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Cognome: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idcognome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cognnome"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Cognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),bP=e("br",null,null,-1),yP=e("label",{for:"idnome"},"      Nome: ",-1),wP=e("input",{type:"text",id:"idnome",name:"nome",placeholder:"Nome",style:{border:"1px solid black",background:"Gainsboro"}},null,-1),TP=e("br",null,null,-1),xP=e("br",null,null,-1),zP=e("p",null,[e("label",{for:"idcognome"},"Cognome: "),e("input",{type:"text",id:"idcognome",name:"cognome",placeholder:"Cognome",style:{border:"1px solid black",background:"Gainsboro"}})],-1),$P={__name:"102",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[hP,gP,_P,vP,C(i,G({},{ranges:[""]}),{default:v(()=>[kP]),_:1},16),bP,yP,wP,s(),TP,xP,zP]),_:1},16)}}},MP=E($P,[["__file","/@slidev/slides/102.md"]]),LP=e("h1",null,"Form",-1),EP=e("p",null,"<input>",-1),CP=e("ul",null,[e("li",null,[s("Come detto l’elemento "),e("em",null,"input"),s(" può assumere forme diverse in funzione dell’attributo "),e("em",null,"type")]),e("li",null,[s("I vari tipi di "),e("em",null,"input"),s(" sono:")])],-1),AP=e("br",null,null,-1),IP={grid:"~ cols-2 gap-4"},SP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("button"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("checkbox"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("color"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("date"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("datetime-local"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("email"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("file"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("hidden"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("image"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("month"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("number"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),OP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("password"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("radio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("range"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("reset"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("search"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("submit"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("tel"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("text"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("time"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("url"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("week"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),HP={__name:"103",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[LP,EP,CP,AP,e("div",IP,[e("div",null,[C(i,G({},{ranges:[""]}),{default:v(()=>[SP]),_:1},16)]),e("div",null,[C(i,G({},{ranges:[""]}),{default:v(()=>[OP]),_:1},16)])])]),_:1},16)}}},PP=E(HP,[["__file","/@slidev/slides/103.md"]]),RP=e("h1",null,"Form",-1),NP=e("p",null,"<input>",-1),qP=e("h3",null,"button",-1),FP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idbutton"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Premi il pulsante: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("button"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idbutton"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Cliccami!!"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),WP=e("p",null,[e("label",{for:"idbutton"},"Premi il pulsante: "),e("input",{type:"button",id:"idbutton",onclick:"alert('Magie di JavaScript!! :)')",value:"Cliccami!!"})],-1),DP=e("br",null,null,-1),jP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idpulsante"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Premi il pulsante: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("button")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("button"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("idpulsante"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Click Me!"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("button")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),BP=e("label",{for:"idpulsante"},"Premi il pulsante: ",-1),VP=e("button",{type:"button",style:{border:"1px solid red"}},"Click Me!",-1),UP={__name:"104",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[RP,NP,qP,C(i,G({},{ranges:[""]}),{default:v(()=>[FP]),_:1},16),WP,DP,C(i,G({},{ranges:[""]}),{default:v(()=>[jP]),_:1},16),BP,VP]),_:1},16)}}},KP=E(UP,[["__file","/@slidev/slides/104.md"]]),GP=e("h1",null,"Form",-1),QP=e("p",null,"<input>",-1),JP=e("h3",null,"radio",-1),ZP=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Occupazione:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("radio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("studente"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupazione"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("studente"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("studente"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Studente"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("radio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupato"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupazione"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Occupato"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("radio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("disoccupato"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("occupazione"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("disoccupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("disoccupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Disoccupato"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),YP=e("br",null,null,-1),XP=e("h3",null,"Occupazione:",-1),e8=e("br",null,null,-1),n8=e("input",{type:"radio",id:"studente",name:"occupazione",value:"studente"},null,-1),t8=e("label",{for:"studente"}," Studente",-1),a8=e("br",null,null,-1),s8=e("input",{type:"radio",id:"occupato",name:"occupazione",value:"occupato"},null,-1),o8=e("label",{for:"occupato"}," Occupato",-1),i8=e("br",null,null,-1),l8=e("input",{type:"radio",id:"disoccupato",name:"occupazione",value:"disoccupato"},null,-1),r8=e("label",{for:"disoccupato"}," Disoccupato",-1),c8=e("br",null,null,-1),u8=e("br",null,null,-1),p8={__name:"105",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[GP,QP,JP,C(i,G({},{ranges:[""]}),{default:v(()=>[ZP]),_:1},16),YP,XP,e8,n8,t8,a8,s8,o8,i8,l8,r8,c8,u8]),_:1},16)}}},d8=E(p8,[["__file","/@slidev/slides/105.md"]]),m8=e("h1",null,"Form",-1),f8=e("p",null,"<input>",-1),h8=e("h3",null,"checkbox",-1),g8=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Sport"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("checkbox"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("tennis"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("sport"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("tennis"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("tennis"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Tennis"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("checkbox"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("calcio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("sport"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("calcio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("calcio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("  Calcio"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("checkbox"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nuoto"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("sport"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nuoto"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("nuoto"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s(" Nuoto"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),_8=e("br",null,null,-1),v8=e("h3",null,"Sport",-1),k8=e("br",null,null,-1),b8=e("input",{type:"checkbox",id:"tennis",name:"sport",value:"tennis"},null,-1),y8=e("label",{for:"tennis"}," Tennis",-1),w8=e("br",null,null,-1),T8=e("input",{type:"checkbox",id:"calcio",name:"sport",value:"calcio"},null,-1),x8=e("label",{for:"calcio"}," Calcio",-1),z8=e("br",null,null,-1),$8=e("input",{type:"checkbox",id:"nuoto",name:"sport",value:"nuoto"},null,-1),M8=e("label",{for:"nuoto"}," Nuoto",-1),L8=e("br",null,null,-1),E8=e("br",null,null,-1),C8={__name:"106",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[m8,f8,h8,C(i,G({},{ranges:[""]}),{default:v(()=>[g8]),_:1},16),_8,v8,k8,b8,y8,w8,T8,x8,z8,$8,M8,L8,E8]),_:1},16)}}},A8=E(C8,[["__file","/@slidev/slides/106.md"]]),I8=e("h1",null,"Form",-1),S8=e("p",null,"<input>",-1),O8=e("h3",null,"date",-1),H8=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Data di Nascita"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("date"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("iddata"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("birthday"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),P8=e("br",null,null,-1),R8=e("br",null,null,-1),N8=e("h3",null,"Data di Nascita",-1),q8=e("br",null,null,-1),F8=e("input",{type:"date",id:"iddata",name:"birthday"},null,-1),W8=e("br",null,null,-1),D8=e("br",null,null,-1),j8={__name:"107",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[I8,S8,O8,C(i,G({},{ranges:[""]}),{default:v(()=>[H8]),_:1},16),P8,R8,N8,q8,F8,W8,D8]),_:1},16)}}},B8=E(j8,[["__file","/@slidev/slides/107.md"]]),V8=e("h1",null,"Esercizio html_12",-1),U8=e("p",null,"Form",-1),K8=e("ol",null,[e("li",null,[s("Creare un file con nome "),e("em",null,"|cognome|_esercizio_html_12.html")]),e("li",null,"Creare 1 form per la raccolta di dati in uno scenario scelto dallo studente"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_12.html")],-1),G8=e("br",null,null,-1),Q8=e("p",null,[s("Il form deve contenere i seguenti widgets: "),e("br")],-1),J8=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ul",null,[e("li",null,"almeno 2 widget di testo"),e("li",null,"almeno 1 bottone"),e("li",null,"almeno 3 scelte mutuamente esclusive tramite radio")])]),e("div",null,[e("ul",null,[e("li",null,"almeeno 5 scelte multiple tramite checkbox"),e("li",null,"almeno 1 campo data"),e("li",null,"ogni widget deve essere dotato della propria label")])])],-1),Z8={__name:"108",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[V8,U8,K8,G8,Q8,J8]),_:1},16))}},Y8=E(Z8,[["__file","/@slidev/slides/108.md"]]),X8=e("h1",null,"Esercizio html_13",-1),eR=e("p",null,"Form",-1),nR=e("ol",null,[e("li",null,[s("Progettare e realizzare un documento HTML contenente una form contenente i seguenti campi: "),e("ul",null,[e("li",null,"cognome e nome (casella di testo editabile lunga 50 caratteri)"),e("li",null,"sesso (selezionabile tramite due bottoni radio)"),e("li",null,"ateneo (da scegliere da un menu che riporta le 3 universit romane)"),e("li",null,"CAP (casella di testo editabile lunga 5 caratteri)"),e("li",null,"studente lavoratore (selezionabile tramite checkbox)"),e("li",null,"descrizione del lavoro svolto (casella di testo editabile lunga 80 caratteri)"),e("li",null,"bottone di invio"),e("li",null,"bottone di reset")])]),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_13.html")],-1),tR={__name:"109",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[X8,eR,nR]),_:1},16))}},aR=E(tR,[["__file","/@slidev/slides/109.md"]]),sR=e("h1",null,"Form",-1),oR=e("p",null,"<input>",-1),iR=e("h3",null,"number",-1),lR=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Altezza"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("number"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("altezza"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("altezza"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("150"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("200"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),rR=e("br",null,null,-1),cR=e("h3",null,"Altezza",-1),uR=e("br",null,null,-1),pR=e("input",{type:"number",id:"altezza",name:"altezza",min:"150",max:"200",style:{border:"1px solid black"}},null,-1),dR=e("br",null,null,-1),mR=e("br",null,null,-1),fR={__name:"110",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[sR,oR,iR,C(i,G({},{ranges:[""]}),{default:v(()=>[lR]),_:1},16),rR,cR,uR,pR,dR,mR]),_:1},16)}}},hR=E(fR,[["__file","/@slidev/slides/110.md"]]),gR=e("h1",null,"Form",-1),_R=e("p",null,"<input>",-1),vR=e("h3",null,"color",-1),kR=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("h3")]),e("span",{class:"token punctuation"},">")]),s("Colore preferito"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("   "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("color"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("favcolor"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("favcolor"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("#ff0000"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),bR=e("br",null,null,-1),yR=e("h3",null,"Colore preferito",-1),wR=e("br",null,null,-1),TR=e("input",{type:"color",id:"favcolor",name:"favcolor",value:"#ff0000",onchange:"alert(`Hai selezionato il colore: ${event.target.value}`)"},null,-1),xR=e("br",null,null,-1),zR=e("br",null,null,-1),$R={__name:"111",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[gR,_R,vR,C(i,G({},{ranges:[""]}),{default:v(()=>[kR]),_:1},16),bR,yR,wR,TR,xR,zR]),_:1},16)}}},MR=E($R,[["__file","/@slidev/slides/111.md"]]),LR=e("h1",null,"Form",-1),ER=e("p",null,"<input>",-1),CR=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("peso"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Peso: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("input")]),s(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("range"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("50"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("100"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("60"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"class"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("slider"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("peso"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("br")]),e("span",{class:"token punctuation"},">")]),s()]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),AR=e("br",null,null,-1),IR=e("label",{for:"peso"},"Peso: ",-1),SR=e("input",{type:"range",min:"50",max:"100",value:"60",class:"slider",id:"peso"},null,-1),OR=e("br",null,null,-1),HR={__name:"112",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[LR,ER,C(i,G({},{ranges:[""]}),{default:v(()=>[CR]),_:1},16),AR,IR,SR,OR]),_:1},16)}}},PR=E(HR,[["__file","/@slidev/slides/112.md"]]),RR=e("h1",null,"Form",-1),NR=e("p",null,"<select>",-1),qR=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cars"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Genere:  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("select")]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("genere"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("cars"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("maschio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Maschio"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("option")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("option")]),s(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("femmina"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Femmina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("option")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("select")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),FR=e("br",null,null,-1),WR=e("label",{for:"cars"},"Genere: ",-1),DR=e("select",{name:"genere",id:"cars"},[e("option",{value:"maschio"},"Maschio"),e("option",{value:"femmina"},"Femmina")],-1),jR=e("br",null,null,-1),BR=e("br",null,null,-1),VR={__name:"113",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[RR,NR,C(i,G({},{ranges:[""]}),{default:v(()=>[qR]),_:1},16),FR,WR,DR,jR,BR]),_:1},16)}}},UR=E(VR,[["__file","/@slidev/slides/113.md"]]),KR=e("h1",null,"Form",-1),GR=e("p",null,"<textarea>",-1),QR=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("label")]),s(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("bio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),s("Biografia:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("label")]),e("span",{class:"token punctuation"},">")])]),s(`
`),e("span",{class:"line"},[s("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("textarea")]),s(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("bio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("bio"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"rows"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("4"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"cols"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("50"),e("span",{class:"token punctuation"},'"')]),s(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),s("Inserisci la tua biografia"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("textarea")]),e("span",{class:"token punctuation"},">")]),s("    ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),JR=e("br",null,null,-1),ZR=e("p",null,[e("label",{for:"bio"},"Biografia:"),e("textarea",{id:"bio",name:"bio",rows:"4",cols:"50",placeholder:"Inserisci la tua biografia",style:{border:"1px solid black"}})],-1),YR={__name:"114",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[KR,GR,C(i,G({},{ranges:[""]}),{default:v(()=>[QR]),_:1},16),JR,ZR]),_:1},16)}}},XR=E(YR,[["__file","/@slidev/slides/114.md"]]),e9=e("h1",null,"Esercizio html_14",-1),n9=e("p",null,"Form",-1),t9=e("ol",null,[e("li",null,[s("Modificare il file "),e("em",null,"|cognome|_esercizio_html_12.html"),s(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_14.html")]),e("li",null,"Modificare il form (vedi dettagli sotto)"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_14.html")],-1),a9=e("p",null,"Il form deve contenere i seguenti widgets aggiuntivi:",-1),s9=e("ul",null,[e("li",null,"almeno 4 widget number con valore minimo e massimo"),e("li",null,"almeno 1 widget color picker"),e("li",null,"almeno 3 widget range con valore minimo e massimo"),e("li",null,"almeno 1 combo box o select con almeno 5 valori"),e("li",null,"almeno 1 data list con almeno 5 valori"),e("li",null,"almeno 1 campo text area con dimensione minima 6 righe e 60 colonne"),e("li",null,"ogni widget deve essere dotato della propria label")],-1),o9=e("p",null,[s("Consegnare su github il file "),e("em",null,"|cognome|_esercizio_html_14.html")],-1),i9={__name:"115",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[e9,n9,t9,a9,s9,o9]),_:1},16))}},l9=E(i9,[["__file","/@slidev/slides/115.md"]]),r9="/3/html/assets/html5_8-8ebdebac.jpg",c9=e("h1",null,"Form",-1),u9=e("p",null,"<datalist>",-1),p9={grid:"~ cols-2 gap-8"},d9=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
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
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),m9=e("div",null,[e("p",null,[e("img",{src:r9,alt:"html5_8.jpg"})])],-1),f9={__name:"116",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[c9,u9,e("div",p9,[e("div",null,[C(i,G({},{ranges:[""]}),{default:v(()=>[d9]),_:1},16)]),m9])]),_:1},16)}}},h9=E(f9,[["__file","/@slidev/slides/116.md"]]),g9=e("h1",null,"Form",-1),_9=e("p",null,"<fieldset>",-1),v9={grid:"~ cols-2 gap-8"},k9=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),s("form")]),e("span",{class:"token punctuation"},">")])]),s(`
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
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),s("form")]),e("span",{class:"token punctuation"},">")])])])],-1),b9=e("div",null,[e("fieldset",{style:{border:"1px solid black"}},[e("legend",null,"Dati Personali"),e("br"),e("label",{for:"nome"},"Nome: "),e("input",{type:"text",id:"nome",name:"nome",style:{border:"1px solid black"}}),e("br"),e("br"),e("label",{for:"cognome"},"Cognome: "),e("input",{type:"text",id:"cognome",name:"cognome",style:{border:"1px solid black"}}),e("br"),e("br"),e("label",{for:"genere"},"Genere: "),e("select",{name:"genere",id:"cars"},[e("option",{value:"maschio"},"Maschio"),e("option",{value:"femmina"},"Femmina")]),e("br"),e("br"),e("label",{for:"email"},"Email: "),e("input",{type:"email",id:"email",name:"email",style:{border:"1px solid black"}}),e("br"),e("br"),e("input",{type:"submit",value:"Invia",style:{border:"1px solid black"}}),s(),e("br"),e("br")])],-1),y9={__name:"117",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[g9,_9,e("div",v9,[e("div",null,[C(i,G({},{ranges:[""]}),{default:v(()=>[k9]),_:1},16)]),b9])]),_:1},16)}}},w9=E(y9,[["__file","/@slidev/slides/117.md"]]),T9=e("h1",null,"Esercizio html_15",-1),x9=e("p",null,"Form",-1),z9=e("ol",null,[e("li",null,"Progettare e realizzare un documento HTML contenente una form contenente i seguenti campi:")],-1),$9=e("ul",null,[e("li",null,"cognome (casella di testo editabile lunga 40 caratteri)"),e("li",null,"nome (casella di testo editabile lunga 30 caratteri)"),e("li",null,"matricola (casella di testo editabile lunga 12 caratteri)"),e("li",null,"regione di residenza (da scegliere da un menu che riporta le 20 regioni italiane)"),e("li",null,"email (casella di testo editabile lunga 30 caratteri)"),e("li",null,"telefono (casella di testo editabile lunga 15 caratteri)"),e("li",null,"richieste particolari (area di testo editabile di 12 righe per 60 colonne)"),e("li",null,"bottone di invio"),e("li",null,"bottone di reset")],-1),M9=e("ol",{start:"2"},[e("li",null,"Consgenare su github il file |cognome|_es15.html")],-1),L9={__name:"118",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[T9,x9,z9,$9,M9]),_:1},16))}},E9=E(L9,[["__file","/@slidev/slides/118.md"]]),C9=e("h1",null,"Esercizio html_16",-1),A9=e("p",null,"Form",-1),I9=e("ol",null,[e("li",null,[s("Creare un file con nome "),e("em",null,"|cognome|_esercizio_html_16.html")]),e("li",null,"Creare 1 form per la raccolta di dati personali"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_16.html")],-1),S9=e("p",null,"Il form deve contenere i seguenti campi:",-1),O9=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ul",null,[e("li",null,"Nome e Cognome"),e("li",null,"Genere"),e("li",null,[e("a",{href:"https://www.w3schools.com/tags/att_input_type_email.asp",target:"_blank",rel:"noopener"},"Email")]),e("li",null,[e("a",{href:"https://www.w3schools.com/tags/att_input_type_password.asp",target:"_blank",rel:"noopener"},"Password")]),e("li",null,"Data di nascita"),e("li",null,"Nazionalità")])]),e("div",null,[e("ul",null,[e("li",null,"Attività lavorativa"),e("li",null,"Hobby"),e("li",null,"Altezza"),e("li",null,"Peso"),e("li",null,"Colore preferito"),e("li",null,"Note personali")])])],-1),H9={__name:"119",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[C9,A9,I9,S9,O9]),_:1},16))}},P9=E(H9,[["__file","/@slidev/slides/119.md"]]),R9="/3/html/assets/html5_20-1c88279a.png",N9=e("h1",null,"Esercizio html_17",-1),q9=e("p",null,"Form",-1),F9=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ol",null,[e("li",null,[s("Progettare e realizzare in HTML il form di di iscrizione al PCTO rappresentato qui a fianco e disponibile "),e("a",{href:"/support/3/html/convenzione_pcto.pdf",target:"_blank",rel:"noopener"},"qui")]),e("li",null,"Obiettivo è riprodurlo il più fedelmente possibile"),e("li",null,"Consegnare su github il file con nome |cognome|_esercizio_html_17.html")])]),e("div",null,[e("img",{src:R9,width:"450",style:{float:"right",position:"relative",top:"-100px"}})])],-1),W9={__name:"120",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[N9,q9,F9]),_:1},16))}},D9=E(W9,[["__file","/@slidev/slides/120.md"]]),j9="/3/html/assets/html5_9-a352818c.jpg",B9=e("h1",null,"Form",-1),V9=e("p",null,"Form lifecycle server-side",-1),U9=e("img",{src:j9,width:"500",style:{float:"right"}},null,-1),K9=e("ol",null,[e("li",null,"L’utente richiede la pagina web contenente il form [GET]"),e("li",null,"Il web server risponde con l’HTML della pagina e del form"),e("li",null,[s("L’utente compila il form e fa il "),e("em",null,"submit"),s(" inviando i dati al server [POST]")]),e("li",null,"Il server effettua una validazione dei dati ricevuti (OK | ERROR)"),e("li",null,"ERROR: viene inviato nuovamente il form ed eventuali messaggi di errore"),e("li",null,"OK: il web server processa i dati ed esegue le operazioni previste (DB)"),e("li",null,"Viene inviata la risposta finale al browser")],-1),G9={__name:"121",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[B9,V9,U9,K9]),_:1},16))}},Q9=E(G9,[["__file","/@slidev/slides/121.md"]]),J9=e("h1",null,"Form",-1),Z9=e("p",null,"Form lifecycle",-1),Y9=e("ul",null,[e("li",null,"Il ciclo di vita di gestione dei form appena visto, è quello classico"),e("li",null,"Come si vede questo è molto inefficente siccome richiede sempre una comunicazione tra client e server"),e("li",null,"Questo introduce latenze indesiderate e carico sul server"),e("li",null,"Il motivo principale è che HTML non essendo un linguaggio di programmazione non ha modo di fare una validazione del form prima dell’invio"),e("li",null,"Per ovviare a queste problematiche, normalmente si effettua la validazione del form in JavaScript, quindi direttamente nel browser riducendo così il numero di messaggi con il server")],-1),X9={__name:"122",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[J9,Z9,Y9]),_:1},16))}},eN=E(X9,[["__file","/@slidev/slides/122.md"]]),nN="/3/html/assets/html5_10-d0dadebe.jpg",tN=e("h1",null,"Form",-1),aN=e("p",null,"Form lifecycle client-side",-1),sN=e("img",{src:nN,width:"400",style:{float:"right"}},null,-1),oN=e("ol",null,[e("li",null,"L’utente richiede la pagina web contenente il form [GET]"),e("li",null,"Il web server risponde con l’HTML della pagina e del form"),e("li",null,[s("L’utente compila il form e fa il "),e("em",null,"submit"),s(" inviando i dati al server [POST]")]),e("li",null,"Il browser effettua una validazione dei dati ricevuti (OK | ERROR)"),e("li",null,"ERROR: viene visualizzato nuovamente il form ed eventuali messaggi di errore"),e("li",null,"OK: il web server processa i dati ed esegue le operazioni previste (DB)"),e("li",null,"Viene inviata la risposta finale al browser")],-1),iN={__name:"123",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[tN,aN,sN,oN]),_:1},16))}},lN=E(iN,[["__file","/@slidev/slides/123.md"]]),rN=e("h1",null,"Esercizio html_18",-1),cN=e("p",null,"Form validation server-side",-1),uN=e("ul",null,[e("li",null,"In questo esercizio/esercitazione si vuole comprendere a fondo il meccanismo di validazione dei form server-side")],-1),pN=e("p",null,"Per fare ciò abbiamo bisonog di due componenti fondamentali:",-1),dN=e("ol",null,[e("li",null,"Una pagina HTML contenente un form"),e("li",null,"Un web server che implementa la logica di validazione")],-1),mN=e("p",null,"Per questa esercitazione il form e il web server sono forniti",-1),fN=e("ol",null,[e("li",null,[s("Scaricare il seguente pacchetto:"),e("a",{href:"/support/3/html/esercizio_html_18.tgz",target:"_blank",rel:"noopener"},"esercizio_html_18.tgz")]),e("li",null,[s("Installare i pacchetti necessari con "),e("code",null,"npm install")]),e("li",null,[s("Lanciare il web server con "),e("code",null,"node form_server.js")]),e("li",null,"Aprire la pagina fornita dal server locale sulla posta 8080")],-1),hN={__name:"124",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[rN,cN,uN,pN,dN,mN,fN]),_:1},16))}},gN=E(hN,[["__file","/@slidev/slides/124.md"]]),_N=e("h1",null,"Esercizio html_18",-1),vN=e("p",null," ",-1),kN=e("p",null,"Si richiede di:",-1),bN=e("ol",null,[e("li",null,"Verificare il funzionamento del form e della validazione dei campi"),e("li",null,"Analizzaere il codice del form e del server in JavaScript"),e("li",null,[s("Modificare il form in modo che l’età venga fornita come un "),e("code",null,"range")]),e("li",null,[s("Modificare il form in modo che sia presente anche il campo "),e("code",null,"Cognome")]),e("li",null,[s("Modificare il codice del server in modo che sia presente "),e("strong",null,"anche"),s(" la validazione dell’età, in modo che siano accettati solo valori compresi tra 19 e 31")]),e("li",null,[s("Fornire il link github alla directory con nome |cognome|_esercizio_html_18 contenente i file aggiornati "),e("em",null,"form.html"),s(" e "),e("em",null,"form_server.js")]),e("li",null,[e("code",null,"NON deve essere presente nel repository la directory **node_modules**")])],-1),yN={__name:"125",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[_N,vN,kN,bN]),_:1},16))}},wN=E(yN,[["__file","/@slidev/slides/125.md"]]),TN=e("p",null," ",-1),xN={__name:"126",setup(n){const t={};return $(L),(a,o)=>{const i=zn;return k(),M(R,P(H(t)),{default:v(()=>[TN,C(i,{fs:"90px"},{default:v(()=>[s(" HTML Linter e validità sintattica ")]),_:1})]),_:1},16)}}},zN=E(xN,[["__file","/@slidev/slides/126.md"]]),$N=e("h1",null,"HTML linter",-1),MN=e("p",null,"Verifica errori",-1),LN=e("ul",null,[e("li",null,[e("p",null,[s("Il "),e("code",null,"linter"),s(" è uno strumento che analizza il codice sorgente per contrassegnare errori di sintassi, di programmazione, bug, errori stilistici e costrutti sospetti.")])]),e("li",null,[e("p",null,[s("Il termine deriva dall’"),e("a",{href:"https://it.wikipedia.org/wiki/Lint_(software)",target:"_blank",rel:"noopener"},"omonimo strumento Unix"),s(" che esamina il codice sorgente del linguaggio C")])]),e("li",null,[e("p",null,"Pertanto il linter HTML è uno strumento che ci fornisce utili informazioni sulla pagina HTML in esame:"),e("ul",null,[e("li",null,"errori di sintassi HTML"),e("li",null,"uso di tag obsoleti"),e("li",null,"uso errato di tag"),e("li",null,"uso errato di attributi"),e("li",null,"mancata chiusura di tag"),e("li",null,"…")])]),e("li",null,[e("p",null,"Il lineter è uno strumento fondamentale per lo sviluppatore.")])],-1),EN={__name:"127",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[$N,MN,LN]),_:1},16))}},CN=E(EN,[["__file","/@slidev/slides/127.md"]]),AN="/3/html/assets/html5_12-88d9b140.png",IN=e("h1",null,"HTML linter",-1),SN=e("p",null,"W3C Markup Validation Service",-1),ON=e("ul",null,[e("li",null,"Il W3C mette a disposizione un servizio online di validazione (lint) di pagine o siti HTML"),e("li",null,[s("Il servizio è disponibile qui: "),e("a",{href:"https://validator.w3.org/",target:"_blank",rel:"noopener"},"https://validator.w3.org/")])],-1),HN=e("br",null,null,-1),PN=e("img",{src:AN},null,-1),RN={__name:"128",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[IN,SN,ON,HN,PN]),_:1},16))}},NN=E(RN,[["__file","/@slidev/slides/128.md"]]),qN="/3/html/assets/html5_13-f3e0e30d.png",FN=e("h1",null,"HTML linter",-1),WN=e("p",null,"W3C Markup Validation Service",-1),DN=e("p",null,"Il servizio opera in 3 modalità:",-1),jN=e("ol",null,[e("li",null,[e("strong",null,"Validate by URI"),s(": inserendo un URL valida ("),e("a",{href:"https://ats.agnelli.it",target:"_blank",rel:"noopener"},"https://ats.agnelli.it"),s(") effettua la validazione del sito")]),e("li",null,[e("strong",null,"Validate by File Upload"),s(": caricando un file .html effettua la validazione della pagina")]),e("li",null,[e("strong",null,"Validate by Direct Input"),s(": inserendo il codice HTML manualmente, ne effettua la validazione")])],-1),BN=e("br",null,null,-1),VN=e("img",{src:qN},null,-1),UN={__name:"129",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[FN,WN,DN,jN,BN,VN]),_:1},16))}},KN=E(UN,[["__file","/@slidev/slides/129.md"]]),GN="/3/html/assets/html5_14-f69c6914.png",QN=e("h1",null,"HTML linter",-1),JN=e("p",null,"W3C Markup Validation Service",-1),ZN=e("br",null,null,-1),YN=e("img",{src:GN},null,-1),XN=e("ul",null,[e("li",null,[s("Il sito viene analizzato e viene generato un report "),e("ul",null,[e("li",null,[e("strong",null,"Error"),s(": segnala errori sintattici indicando la linea dove occorre")]),e("li",null,[e("strong",null,"Warning"),s(": evidenzia potenziali problemi ma non necessariamente errori sintattici")])])])],-1),e7={__name:"130",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[QN,JN,ZN,YN,XN]),_:1},16))}},n7=E(e7,[["__file","/@slidev/slides/130.md"]]),t7=e("h1",null,"Esercizio html_19",-1),a7=e("p",null,"HTML lint",-1),s7=e("p",null,"Mediante il servizio di validazione HTML del W3C si richiede di:",-1),o7=e("ol",null,[e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html"),e("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente")],-1),i7={__name:"131",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[t7,a7,s7,o7]),_:1},16))}},l7=E(i7,[["__file","/@slidev/slides/131.md"]]),r7="/3/html/assets/html5_15-635ed653.png",c7=e("h1",null,"HTML linter",-1),u7=e("p",null,"Command Line Linter",-1),p7=e("ul",null,[e("li",null,"Chiaramente per quanto valido sia il linter del W3C, risulta di difficile applicazione nel processo di sviluppo"),e("li",null,"Caricare ad ogni modifica la propria pagina risulta particolarmente scomodo e time consuming"),e("li",null,"Per tale motivo esistono svariati tipi di linter HTML che operano da linea di comando"),e("li",null,"Questi strumenti sono molto versatili e possono essere integrati in pipeline automatiche (github)"),e("li",null,[s("Un linter valido è "),e("code",null,"node-w3c-validator"),s(" scirtto in JavaScript che implementa un wrapper al servizio W3C")])],-1),d7=e("br",null,null,-1),m7=e("img",{src:r7,width:"500"},null,-1),f7={__name:"132",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[c7,u7,p7,d7,m7]),_:1},16))}},h7=E(f7,[["__file","/@slidev/slides/132.md"]]),g7="/3/html/assets/html5_16-37784c29.png",_7=e("h1",null,"HTML linter",-1),v7=e("p",null,"Command Line Linter",-1),k7=e("ul",null,[e("li",null,"Per installare il linter basta eseguire")],-1),b7=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[s("npm i "),e("span",{class:"token operator"},"-"),s("g node"),e("span",{class:"token operator"},"-"),s("w3c"),e("span",{class:"token operator"},"-"),s("validator")])])],-1),y7=e("br",null,null,-1),w7=e("img",{src:g7,width:"700"},null,-1),T7={__name:"133",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[_7,v7,k7,C(i,G({},{ranges:[""]}),{default:v(()=>[b7]),_:1},16),y7,w7]),_:1},16)}}},x7=E(T7,[["__file","/@slidev/slides/133.md"]]),z7=e("h1",null,"HTML linter",-1),$7=e("p",null,"Command Line Linter",-1),M7=e("p",null,"I parametri più importanti sono",-1),L7=e("ul",null,[e("li",null,[e("code",null,"-i"),s(": specifica il file HTML da validare")]),e("li",null,[e("code",null,"-f"),s(": specifica il formate del report generato "),e("ul",null,[e("li",null,[e("strong",null,"txt"),s(": genera un report puramente testuale")]),e("li",null,[e("strong",null,"lint"),s(": genera un report in formato lint con informazioni addizionali")]),e("li",null,[e("strong",null,"html"),s(": genera un report in formato HTML esattamente come quello generato dal servizio W3C")])])])],-1),E7={__name:"134",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[z7,$7,M7,L7]),_:1},16))}},C7=E(E7,[["__file","/@slidev/slides/134.md"]]),A7="/3/html/assets/html5_17-8d11820a.png",I7=e("h1",null,"HTML linter",-1),S7=e("p",null,"Command Line Linter",-1),O7=e("ul",null,[e("li",null,"Per fare il lint di un file HTML e generare un report testuale basta eseguire il seguente comando")],-1),H7=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[s("node"),e("span",{class:"token operator"},"-"),s("w3c"),e("span",{class:"token operator"},"-"),s("validator "),e("span",{class:"token operator"},"-"),s("i "),e("span",{class:"token operator"},"/"),s("path"),e("span",{class:"token operator"},"/"),s("to"),e("span",{class:"token operator"},"/"),s("file"),e("span",{class:"token punctuation"},"."),s("html "),e("span",{class:"token operator"},"-"),s("f txt")])])],-1),P7=e("br",null,null,-1),R7=e("img",{src:A7},null,-1),N7={__name:"135",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[I7,S7,O7,C(i,G({},{ranges:[""]}),{default:v(()=>[H7]),_:1},16),P7,R7]),_:1},16)}}},q7=E(N7,[["__file","/@slidev/slides/135.md"]]),F7="/3/html/assets/html5_18-970bde4d.png",W7=e("h1",null,"HTML linter",-1),D7=e("p",null,"Command Line Linter",-1),j7=e("ul",null,[e("li",null,"Per fare il lint di un file HTML e generare un report in formato lint basta eseguire il seguente comando")],-1),B7=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[s("node"),e("span",{class:"token operator"},"-"),s("w3c"),e("span",{class:"token operator"},"-"),s("validator "),e("span",{class:"token operator"},"-"),s("i "),e("span",{class:"token operator"},"/"),s("path"),e("span",{class:"token operator"},"/"),s("to"),e("span",{class:"token operator"},"/"),s("file"),e("span",{class:"token punctuation"},"."),s("html "),e("span",{class:"token operator"},"-"),s("f lint")])])],-1),V7=e("br",null,null,-1),U7=e("img",{src:F7,width:"650"},null,-1),K7={__name:"136",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[W7,D7,j7,C(i,G({},{ranges:[""]}),{default:v(()=>[B7]),_:1},16),V7,U7]),_:1},16)}}},G7=E(K7,[["__file","/@slidev/slides/136.md"]]),Q7="/3/html/assets/html5_19-d96648e9.png",J7=e("h1",null,"HTML linter",-1),Z7=e("p",null,"Command Line Linter",-1),Y7=e("ul",null,[e("li",null,"Per fare il lint di un file HTML e generare un report in formato html basta eseguire il seguente comando")],-1),X7=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[s("node"),e("span",{class:"token operator"},"-"),s("w3c"),e("span",{class:"token operator"},"-"),s("validator "),e("span",{class:"token operator"},"-"),s("i "),e("span",{class:"token operator"},"/"),s("path"),e("span",{class:"token operator"},"/"),s("to"),e("span",{class:"token operator"},"/"),s("file"),e("span",{class:"token punctuation"},"."),s("html "),e("span",{class:"token operator"},"-"),s("f html "),e("span",{class:"token operator"},">"),s(" report"),e("span",{class:"token punctuation"},"."),s("html")])])],-1),eq=e("br",null,null,-1),nq=e("img",{src:Q7,width:"650"},null,-1),tq={__name:"137",setup(n){const t={};return $(L),(a,o)=>{const i=le;return k(),M(R,P(H(t)),{default:v(()=>[J7,Z7,Y7,C(i,G({},{ranges:[""]}),{default:v(()=>[X7]),_:1},16),eq,nq]),_:1},16)}}},aq=E(tq,[["__file","/@slidev/slides/137.md"]]),sq=e("h1",null,"Esercizio html_20",-1),oq=e("p",null,"HTML lint",-1),iq=e("p",null,"Mediante il linter da liena di comando si richiede di:",-1),lq=e("ol",null,[e("li",null,"Effettuare la verifica sintattica del file |cognome|_esercizio_html_11.html generando un report in formato txt"),e("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_20.txt"),e("li",null,"Effettuare la verifica sintattica del file |cognome|_esercizio_html_11.html generando un report in formato lint"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_20.lint"),e("li",null,"Effettuare la verifica sintattica del file |cognome|_esercizio_html_11.html generando un report in formato html"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_20.html")],-1),rq={__name:"138",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[sq,oq,iq,lq]),_:1},16))}},cq=E(rq,[["__file","/@slidev/slides/138.md"]]),uq="/3/html/assets/hh03-2c0d4cdf.webp",pq=e("img",{src:uq,style:{position:"relative",top:"-20px"}},null,-1),dq={__name:"139",setup(n){const t={};return $(L),(a,o)=>(k(),M(R,P(H(t)),{default:v(()=>[pq]),_:1},16))}},mq=E(dq,[["__file","/@slidev/slides/139.md"]]),fq=[{path:"1",name:"page-1",component:xz,meta:{theme:"default",background:"/cover.webp",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"TPSI",as:"2025/2026",version:"1.6.0",title:"Hyper Text Markup Language",slide:{raw:`---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /cover.webp
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: "16_/9"
routerMode: "hash"
materia: "TPSI"
as: "2025/2026"
version: "1.6.0"
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
</div>`,frontmatter:{theme:"default",background:"/cover.webp",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"TPSI",as:"2025/2026",version:"1.6.0",title:"Hyper Text Markup Language"},index:0,start:0,end:43,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Az,meta:{slide:{raw:`
&nbsp;

<Cover fs="100px">
    Introduzione
</Cover>

`,content:`&nbsp;

<Cover fs="100px">
    Introduzione
</Cover>`,frontmatter:{},index:1,start:44,end:52,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Pz,meta:{slide:{raw:`
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

- Il motivo principale che ha spinto il W3C e i suoi membri a sviluppare HTML5 è stata la necessità di fornire direttamente le funzionalità che in precedenza erano fruibili tramite estensioni proprietarie all'esterno dei browser, come Adobe Flash e simili. Un secondo obiettivo che gli sviluppatori si erano prefissati era quello di garantire una maggiore compatibilità tra i diversi browser, indipendentemente dalla piattaforma software utilizzata, e principalmente mirata all'espansione dei dispositivi mobili.`,frontmatter:{},index:2,start:53,end:66,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Dz,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:3,start:67,end:90,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Gz,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:4,start:91,end:119,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:a$,meta:{slide:{raw:`
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
- [https://javascript.info/](https://javascript.info/)`,frontmatter:{},index:5,start:120,end:157,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:u$,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:6,start:158,end:195,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:g$,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:7,start:196,end:236,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:k$,meta:{slide:{raw:`
&nbsp;

<Cover fs="100px">
    Ambiente di Sviluppo
</Cover>
`,content:`&nbsp;

<Cover fs="100px">
    Ambiente di Sviluppo
</Cover>`,frontmatter:{},index:8,start:237,end:244,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:x$,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

&nbsp;

- Al fine di comprendere appieno lo sviluppo web, è preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice
- Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web
- Il passaggio ad un sistema autore o ad un CMS risulta poi più facile e intuitivo.
`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

&nbsp;

- Al fine di comprendere appieno lo sviluppo web, è preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice
- Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web
- Il passaggio ad un sistema autore o ad un CMS risulta poi più facile e intuitivo.`,frontmatter:{},index:9,start:245,end:254,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:C$,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:10,start:255,end:277,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:P$,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.


![html5_4.jpg](/media/html5_4.jpg)

`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.


![html5_4.jpg](/media/html5_4.jpg)`,frontmatter:{},index:11,start:278,end:287,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:W$,meta:{slide:{raw:`
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
- La pagina viene visualizzata all'interno del browser`,frontmatter:{},index:12,start:288,end:299,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:B$,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:15,start:333,end:377,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:CM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:16,start:378,end:405,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:SM,meta:{slide:{raw:`
&nbsp;

<Cover fs="80px">
    La struttura di una pagina Web
</Cover>

`,content:`&nbsp;

<Cover fs="80px">
    La struttura di una pagina Web
</Cover>`,frontmatter:{},index:17,start:406,end:414,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:qM,meta:{slide:{raw:`
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

![html5_5.jpg](/media/html5_5.jpg)`,frontmatter:{},index:19,start:427,end:435,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:e3,meta:{slide:{raw:`
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
- **&lt;html&gt;**: è il primo tag di apertura che indica l'inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.`,frontmatter:{},index:20,start:436,end:456,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:l3,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:21,start:457,end:474,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:g3,meta:{slide:{raw:`
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
- In questa sezione viene definito il contenuto che si vuole visualizzare nel browser.`,frontmatter:{},index:22,start:475,end:496,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:w3,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:23,start:497,end:525,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:L3,meta:{slide:{raw:`
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
- **&lt;base&gt;:** specifica un UTL di base da applicare a tutto il documento.`,frontmatter:{},index:24,start:526,end:540,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:R3,meta:{slide:{raw:`
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
- Il titolo è molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull'algoritmo che decide in quale ordine visualizzare le pagine trovate.`,frontmatter:{},index:25,start:541,end:559,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:U3,meta:{slide:{raw:`
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
</Banner>`,frontmatter:{},index:26,start:560,end:576,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:nL,meta:{slide:{raw:`
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
- Per pagine di media/alta complessità non si include in quanto è più pulito definire gli stili della pagina in un file esterno di tipo **CSS**`,frontmatter:{},index:27,start:577,end:599,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:uL,meta:{slide:{raw:`
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
- Per pagine di media/alta complessità non si include in quanto è più pulito definire gli script della pagina in un file esterno di tipo **JS**`,frontmatter:{},index:28,start:600,end:624,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:hL,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:29,start:625,end:655,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:bL,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:30,start:656,end:673,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:zL,meta:{slide:{raw:`
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
5. Provare a modificare la sezione *script* e verificare i cambiamenti`,frontmatter:{},index:31,start:674,end:686,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:LL,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
  Titoli e Paragrafi in HTML
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
  Titoli e Paragrafi in HTML
</Cover>`,frontmatter:{},index:32,start:687,end:694,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:NL,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:33,start:695,end:728,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:KL,meta:{slide:{raw:`
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
- Pertanto l'aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser.`,frontmatter:{},index:34,start:729,end:755,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:YL,meta:{slide:{raw:`
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
5. Consegnare su github il file con nome |cognome|_esercizio_html_02.html`,frontmatter:{},index:35,start:756,end:767,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:nE,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
  Elementi block e inline
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
  Elementi block e inline
</Cover>`,frontmatter:{},index:36,start:768,end:775,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:pE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:37,start:776,end:802,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:yE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:38,start:803,end:827,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:EE,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:39,start:828,end:848,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:RE,meta:{slide:{raw:`
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
<p>Comunicato a tutti gli studenti: <span style="color:white;background:red;font-weight:bold">ATTENZIONE</span> Si richiede a tutti gli studenti di <span style="color:darkolivegreen;font-weight:bold">studiare</span> e sperimentare il più possibile con HTML.</p>`,frontmatter:{},index:40,start:849,end:864,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:FE,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
  Ancore e Link
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
  Ancore e Link
</Cover>`,frontmatter:{},index:41,start:865,end:872,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:JE,meta:{slide:{raw:`
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

Il principale valore per *target* è **_blank**, e permette di aprire il documento in un una nuova tab del browser.`,frontmatter:{},index:42,start:873,end:898,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:aC,meta:{slide:{raw:`
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

Questo perchè, tutte le URL relative fanno riferimento ad una directory chiamata **document root** che rappresenta la root del web server.`,frontmatter:{},index:43,start:899,end:910,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:cC,meta:{slide:{raw:`
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


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:44,start:911,end:926,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:dC,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
  Web grafico con le immagini
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
  Web grafico con le immagini
</Cover>`,frontmatter:{},index:45,start:927,end:934,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:TC,meta:{slide:{raw:`
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

Attributi utili sono:
- **width**: specifica la larghezza dell'immagine in pixel
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

Attributi utili sono:
- **width**: specifica la larghezza dell'immagine in pixel
- **height**: specifica l'altezza dell'immagine in pixel`,frontmatter:{},index:46,start:935,end:958,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:CC,meta:{slide:{raw:`
# Immagini

Il Web diventa grafico

\`\`\`html
<img src="https://tinyurl.com/59m2nndc" width="250" alt="primo web server"/>
\`\`\`

<br>
<center>
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
</center>
`,title:"Immagini",level:1,content:`# Immagini

Il Web diventa grafico

\`\`\`html
<img src="https://tinyurl.com/59m2nndc" width="250" alt="primo web server"/>
\`\`\`

<br>
<center>
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="250" alt="primo web server"/>
</center>`,frontmatter:{},index:47,start:959,end:973,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:RC,meta:{slide:{raw:`
# Immagini

Il Web diventa grafico

- I tag HTML possono essere nidificati, cioè dichiarati uno dentro l'altro.
- Questa importante proprietà ci permette di creare un link grafico all'interno di una pagina web.

\`\`\`html
<a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank">
  <img src="https://tinyurl.com/59m2nndc" width="250" alt="primo web server"/>
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
  <img src="https://tinyurl.com/59m2nndc" width="250" alt="primo web server"/>
</a>
\`\`\`
<center>
<a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank">
<img src="https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg" width="200" alt="primo web server"/>
</a>
</center>`,frontmatter:{},index:48,start:974,end:993,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:jC,meta:{slide:{raw:`
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

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:49,start:994,end:1009,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:UC,meta:{slide:{raw:`
&nbsp;

<Cover fs=80px>
  Formattazione del testo in HTML
</Cover>
`,content:`&nbsp;

<Cover fs=80px>
  Formattazione del testo in HTML
</Cover>`,frontmatter:{},index:50,start:1010,end:1017,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:XC,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:51,start:1018,end:1042,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:kA,meta:{slide:{raw:`
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
<br>Alcune volte è necessario definire un termine tecnico come <i>Web Server</i>`,frontmatter:{},index:52,start:1043,end:1066,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:WA,meta:{slide:{raw:`
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
<br>Al contrario quando un testo <small>è di poca importanza</small> si può usare il tag <b>small</b>`,frontmatter:{},index:53,start:1067,end:1090,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:sI,meta:{slide:{raw:`
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

In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> mentre i <sub>pedici</sub> con il tag <b>sub</b>`,frontmatter:{},index:54,start:1091,end:1115,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:uI,meta:{slide:{raw:`
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

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:55,start:1116,end:1138,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:_I,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:56,start:1139,end:1158,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:EI,meta:{slide:{raw:`
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

-  Come si può notare la citazione è indentata. Il link alla citazione  non ha un effetto visivo ma può essere utile al motore di ricerca o altri tool.`,frontmatter:{},index:57,start:1159,end:1191,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:ZI,meta:{slide:{raw:`
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
<br>Un alternativa per una citazione è usare il tag <b>cite</b>. In una disicussione accesa Linus disse: <cite>"Parlare è facile. Mostrami il codice".</cite>`,frontmatter:{},index:58,start:1192,end:1216,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:aS,meta:{slide:{raw:`
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

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:59,start:1217,end:1235,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:bS,meta:{slide:{raw:`
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
<br>Se si vuole <s>sbarrare</s> una parola basta usare il tag &lt;s&gt;`,frontmatter:{},index:60,start:1236,end:1266,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:AS,meta:{slide:{raw:`
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
Per installare vscode in Linux usa il comando: <code>apt install vscode</code>`,frontmatter:{},index:61,start:1267,end:1290,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:WS,meta:{slide:{raw:`
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
</pre>`,frontmatter:{},index:62,start:1291,end:1320,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:KS,meta:{slide:{raw:`
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

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:63,start:1321,end:1338,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:r5,meta:{slide:{raw:`
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

<hr style="height:5px; background-color:grey">`,frontmatter:{},index:64,start:1339,end:1369,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:v5,meta:{slide:{raw:`
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
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />`,frontmatter:{},index:65,start:1370,end:1400,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:M5,meta:{slide:{raw:`
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
Studente 4 <progress min="0" max="10" value="4.5">4.5 di 10</progress><br />`,frontmatter:{},index:66,start:1401,end:1428,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:S5,meta:{slide:{raw:`
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


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:67,start:1429,end:1445,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:P5,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
  Caratteri speciali in HTML
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
  Caratteri speciali in HTML
</Cover>`,frontmatter:{},index:68,start:1446,end:1453,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:V5,meta:{slide:{raw:`
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

[Qui si può consultare la lista completa di entities HTML.](https://www.freeformatter.com/html-entities.html)`,frontmatter:{},index:69,start:1454,end:1479,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:e6,meta:{slide:{raw:`
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
- Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte \`&nbsp;\``,frontmatter:{},index:70,start:1480,end:1502,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:i6,meta:{slide:{raw:"\n# HTML Entities\n\nUso di caratteri riservati\n\n- Qui una lista di HTML entities comuemente usate\n\n| Carattere | Descizione   | Nome Entità  | Numero Entità  | \n|---|---|---|---|\n| |non-breaking space	| `&nbsp;`	| `&#160;`| \n|<	|less than|	`&lt;`|	`&#60;`|\n|>	|greater than	|`&gt;`	|`&#62;`|\n|`&` |ampersand	|`&amp;`	|`&#38;`|\n|\"	|double quotation mark	|`&quot;`	|`&#34;`|\n|'	|single quotation mark (apostrophe)	|`&apos;`	|`&#39;`|\n|€	|euro	|`&euro;`	|`&#8364;`|\n|©	|copyright	|`&copy;`	|`&#169;`|\n",title:"HTML Entities",level:1,content:"# HTML Entities\n\nUso di caratteri riservati\n\n- Qui una lista di HTML entities comuemente usate\n\n| Carattere | Descizione   | Nome Entità  | Numero Entità  | \n|---|---|---|---|\n| |non-breaking space	| `&nbsp;`	| `&#160;`| \n|<	|less than|	`&lt;`|	`&#60;`|\n|>	|greater than	|`&gt;`	|`&#62;`|\n|`&` |ampersand	|`&amp;`	|`&#38;`|\n|\"	|double quotation mark	|`&quot;`	|`&#34;`|\n|'	|single quotation mark (apostrophe)	|`&apos;`	|`&#39;`|\n|€	|euro	|`&euro;`	|`&#8364;`|\n|©	|copyright	|`&copy;`	|`&#169;`|",frontmatter:{},index:71,start:1503,end:1521,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:c6,meta:{slide:{raw:`
&nbsp;

<Cover fs=90px>
  Liste (non)ordinate
</Cover>
`,content:`&nbsp;

<Cover fs=90px>
  Liste (non)ordinate
</Cover>`,frontmatter:{},index:72,start:1522,end:1529,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:v6,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:73,start:1530,end:1565,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:E6,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:74,start:1566,end:1607,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:F6,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:75,start:1608,end:1648,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:U6,meta:{slide:{raw:`
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

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:76,start:1649,end:1663,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:Q6,meta:{slide:{raw:`
&nbsp;

<Cover fs=75px>
  Rappresentazioni tabulari con le Tabelle
</Cover>
`,content:`&nbsp;

<Cover fs=75px>
  Rappresentazioni tabulari con le Tabelle
</Cover>`,frontmatter:{},index:77,start:1664,end:1671,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:tO,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

- In passato lo sviluppo web era ampiamente basato sull'uso di tabelle
- Principalmente le tabelle venivano usato per creare il layout della pagina Web
- Tuttavia questo metodo era laborioso e poco funzionale in quanto il supporto delle tabelle dai vari browser non era omogeneo.
- Oggi il layout di una pagine, NON si realizza più con le tabelle ma con il blocco DIV e il CSS.
- Tuttavia lo scopo originario delle tabelle, cioè visualizzare contenuti in formato tabellare rimane valido.

I principali tag per la definizione di una tabella sono:

\`\`\`html
<table>: definisce un contenitore per dati organizzati in formato tabellare
<thead>: definisce l'header della tabella, solitamente contiene i titoli delle colonne
<tbody>: definisce il corpo principale della tabella, cioè i dati veri e propri
<tr>: definisce una riga della tabella
<td>: definisce una cella della tabella
<th>: definisce una cella dell'header in grassetto e centrato
\`\`\`
`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

- In passato lo sviluppo web era ampiamente basato sull'uso di tabelle
- Principalmente le tabelle venivano usato per creare il layout della pagina Web
- Tuttavia questo metodo era laborioso e poco funzionale in quanto il supporto delle tabelle dai vari browser non era omogeneo.
- Oggi il layout di una pagine, NON si realizza più con le tabelle ma con il blocco DIV e il CSS.
- Tuttavia lo scopo originario delle tabelle, cioè visualizzare contenuti in formato tabellare rimane valido.

I principali tag per la definizione di una tabella sono:

\`\`\`html
<table>: definisce un contenitore per dati organizzati in formato tabellare
<thead>: definisce l'header della tabella, solitamente contiene i titoli delle colonne
<tbody>: definisce il corpo principale della tabella, cioè i dati veri e propri
<tr>: definisce una riga della tabella
<td>: definisce una cella della tabella
<th>: definisce una cella dell'header in grassetto e centrato
\`\`\``,frontmatter:{},index:78,start:1672,end:1694,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:pO,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

- Struttura base di una tabella

<div class="flex gap-8">
<div class="w-2/3">
\`\`\`html
<table border="1">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Cognome</th>
      <th>Età</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Marco</td>
      <td>Rossi</td>
      <td>16</td>
    </tr>
  </tbody>
</table>
\`\`\`
</div>
<div class="w-1/3">

<table border="1">
  <thead>
    <tr>
      <td align="center"><b>Nome</b></td>
      <td align="center"><b>Cognome</b></td>
      <td align="center"><b>Età</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Marco</td>
      <td>Rossi</td>
      <td>16</td>
    </tr>
  </tbody>
</table>

</div>
</div>
`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

- Struttura base di una tabella

<div class="flex gap-8">
<div class="w-2/3">
\`\`\`html
<table border="1">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Cognome</th>
      <th>Età</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Marco</td>
      <td>Rossi</td>
      <td>16</td>
    </tr>
  </tbody>
</table>
\`\`\`
</div>
<div class="w-1/3">

<table border="1">
  <thead>
    <tr>
      <td align="center"><b>Nome</b></td>
      <td align="center"><b>Cognome</b></td>
      <td align="center"><b>Età</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Marco</td>
      <td>Rossi</td>
      <td>16</td>
    </tr>
  </tbody>
</table>

</div>
</div>`,frontmatter:{},index:79,start:1695,end:1745,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:yO,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

- Per modificare e stilizzare la tabella ci sono degli attributi molto utili
- Importante notare che nel web moderno questi attributi sono **deprecati** in quanto sostituiti da CSS
- Vediamo gli attributi più utili

<br>

**border**

- **Scopo**: server per specificare la larghezza del bordo della tabella in pixel.
- **Uso**: si può applicare a \`<table>\`
- **Valori possibili**: un numero che rappresenta lo spessore del bordo

<br>

\`\`\`html
<table border="1">
\`\`\`

`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

- Per modificare e stilizzare la tabella ci sono degli attributi molto utili
- Importante notare che nel web moderno questi attributi sono **deprecati** in quanto sostituiti da CSS
- Vediamo gli attributi più utili

<br>

**border**

- **Scopo**: server per specificare la larghezza del bordo della tabella in pixel.
- **Uso**: si può applicare a \`<table>\`
- **Valori possibili**: un numero che rappresenta lo spessore del bordo

<br>

\`\`\`html
<table border="1">
\`\`\``,frontmatter:{},index:80,start:1746,end:1770,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:AO,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

**bgcolor**

- **Scopo**: imposta il colore di sfondo di una tabella, una riga o una cella.
- **Uso**: si può applicare a \`<table>, <tr>, <td>, <th>\`

<br>

\`\`\`html
<td bgcolor="yellow">Testo</td>
\`\`\`

<br>
<table>
  <tr><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td>Mario</td><td>Rossi</td><td bgcolor="yellow">20</td></tr>
</table>


`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

**bgcolor**

- **Scopo**: imposta il colore di sfondo di una tabella, una riga o una cella.
- **Uso**: si può applicare a \`<table>, <tr>, <td>, <th>\`

<br>

\`\`\`html
<td bgcolor="yellow">Testo</td>
\`\`\`

<br>
<table>
  <tr><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td>Mario</td><td>Rossi</td><td bgcolor="yellow">20</td></tr>
</table>`,frontmatter:{},index:81,start:1771,end:1795,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:WO,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

**align**

- **Scopo**: allinea il contenuto orizzontalmente (a sinistra, destra, centro) all’interno di una cella o di una tabella.
- **Uso**: \`<table align="center"> oppure <td align="right">\`
- **Valori possibili**: \`left, right, center\`

<br>

\`\`\`html
<td align="center">Centrato</td>
\`\`\`

<br>
<table>
  <tr><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td>Mario</td><td>Rossi</td><td align="center">20</td></tr>
</table>
`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

**align**

- **Scopo**: allinea il contenuto orizzontalmente (a sinistra, destra, centro) all’interno di una cella o di una tabella.
- **Uso**: \`<table align="center"> oppure <td align="right">\`
- **Valori possibili**: \`left, right, center\`

<br>

\`\`\`html
<td align="center">Centrato</td>
\`\`\`

<br>
<table>
  <tr><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td>Mario</td><td>Rossi</td><td align="center">20</td></tr>
</table>`,frontmatter:{},index:82,start:1796,end:1819,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:ZO,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

**valign**

- **Scopo**: allinea verticalmente il contenuto dentro una cella.
- **Uso**: Su \`<td>, <th>, <tr>\`.
- **Valori possibili**: \`top, middle, bottom, baseline\`.

<br>

\`\`\`html
<td valign="bottom">In basso</td>
\`\`\`

<br>
<table>
  <tr><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td  height="120">Mario</td><td>Rossi</td><td valign="bottom">20</td></tr>
</table>
`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

**valign**

- **Scopo**: allinea verticalmente il contenuto dentro una cella.
- **Uso**: Su \`<td>, <th>, <tr>\`.
- **Valori possibili**: \`top, middle, bottom, baseline\`.

<br>

\`\`\`html
<td valign="bottom">In basso</td>
\`\`\`

<br>
<table>
  <tr><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td  height="120">Mario</td><td>Rossi</td><td valign="bottom">20</td></tr>
</table>`,frontmatter:{},index:83,start:1820,end:1843,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:lH,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

**rowspan**

- **Scopo**: fa “occupare” a una cella più righe, fondendo celle verticalmente.
- **Uso**: su \`<td> o <th>\`.
- **Valore**: un numero che rappresenta quante righe occupa la cella.

<br>

\`\`\`html
<td rowspan="2">Testo</td>
\`\`\`

<br>
<table>
  <tr><td rowspan="2" border="1">Num.</td><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td>Mario</td><td>Rossi</td><td align="center">20</td></tr>
</table>
`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

**rowspan**

- **Scopo**: fa “occupare” a una cella più righe, fondendo celle verticalmente.
- **Uso**: su \`<td> o <th>\`.
- **Valore**: un numero che rappresenta quante righe occupa la cella.

<br>

\`\`\`html
<td rowspan="2">Testo</td>
\`\`\`

<br>
<table>
  <tr><td rowspan="2" border="1">Num.</td><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td>Mario</td><td>Rossi</td><td align="center">20</td></tr>
</table>`,frontmatter:{},index:84,start:1844,end:1867,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:_H,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

**colspan**

- **Scopo**: fa “occupare” a una cella più colonne, fondendo celle orizzontalmente.
- **Uso**: su \`<td> o <th>\`.
- **Valore**: un numero che rappresenta quante colonne occupa la cella.

<br>

\`\`\`html
<td colspan="2">Testo</td>
\`\`\`
<br>
<table>
  <tr><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td>Mario</td><td colspan="2" bgcolor="red">Rossi</td></tr>
</table>

`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

**colspan**

- **Scopo**: fa “occupare” a una cella più colonne, fondendo celle orizzontalmente.
- **Uso**: su \`<td> o <th>\`.
- **Valore**: un numero che rappresenta quante colonne occupa la cella.

<br>

\`\`\`html
<td colspan="2">Testo</td>
\`\`\`
<br>
<table>
  <tr><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td>Mario</td><td colspan="2" bgcolor="red">Rossi</td></tr>
</table>`,frontmatter:{},index:85,start:1868,end:1891,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:MH,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

**width**

- **Scopo**: imposta la larghezza (in pixel o percentuale) di celle, colonne o tabella.
- **Uso**: Su \`<table>, <td>, <th>\`.

<br>

\`\`\`html
<td width="100">Larga 100px</td>
<table width="80%"> <!-- tabella larga l’80% del contenitore -->
\`\`\`
<br>
<table>
  <tr><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td bgcolor="blue">Mario</td><td bgcolor="green">Rossi</td><td width="100" bgcolor="red">20</td></tr>
</table>
`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

**width**

- **Scopo**: imposta la larghezza (in pixel o percentuale) di celle, colonne o tabella.
- **Uso**: Su \`<table>, <td>, <th>\`.

<br>

\`\`\`html
<td width="100">Larga 100px</td>
<table width="80%"> <!-- tabella larga l’80% del contenitore -->
\`\`\`
<br>
<table>
  <tr><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td bgcolor="blue">Mario</td><td bgcolor="green">Rossi</td><td width="100" bgcolor="red">20</td></tr>
</table>`,frontmatter:{},index:86,start:1892,end:1914,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:RH,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

**height**

- **Scopo**: definisce l’altezza di una cella o di una tabella.
- **Uso**: Su \`<table>, <td>, <th>\`.

<br>

\`\`\`html
<td height="100">Alta 100px</td>
\`\`\`

<br>
<table>
  <tr><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td bgcolor="blue" height="100">Mario</td><td bgcolor="green">Rossi</td><td width="100" bgcolor="red">20</td></tr>
</table>
`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

**height**

- **Scopo**: definisce l’altezza di una cella o di una tabella.
- **Uso**: Su \`<table>, <td>, <th>\`.

<br>

\`\`\`html
<td height="100">Alta 100px</td>
\`\`\`

<br>
<table>
  <tr><td>Nome</td><td>Cognome</td><td>Età</td></tr>
  <tr><td bgcolor="blue" height="100">Mario</td><td bgcolor="green">Rossi</td><td width="100" bgcolor="red">20</td></tr>
</table>`,frontmatter:{},index:87,start:1915,end:1937,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:VH,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

<div class="flex gap-8">
<div class="w-2/3">

\`\`\`html
<table border="1">
        <thead>
            <tr>
                <th>A</th> <th>B</th> <th>A & B</th>
            </tr>
        </thead>
        <tbody>
            <tr  align="center">
                <td>0</td> <td>0</td> <td>0</td>
            </tr>
            <tr  align="center">
                <td>0</td> <td>1</td> <td>0</td>
            </tr>
            <tr  align="center">
                <td>1</td> <td>0</td> <td>0</td>
            </tr>
            <tr  align="center">
                <td>1</td> <td>1</td> <td>1</td>
            </tr>
        </tbody>
    </table>
\`\`\`

</div>
<div class="w-1/3">

<table border="1" style="width:300px;">
        <thead>
            <tr>
                <td border="1" align="center"><b>A</b></td> <td border="1" align="center"><b>B</b></td> <td align="center"><b>A & B</b></td>
            </tr>
        </thead>
        <tbody>
            <tr  align="center">
                <td border="1">0</td> <td border="1">0</td> <td>0</td>
            </tr>
            <tr  align="center">
                <td border="1">0</td> <td border="1">1</td> <td>0</td>
            </tr>
            <tr  align="center">
                <td border="1">1</td> <td border="1">0</td> <td>0</td>
            </tr>
            <tr  align="center">
                <td border="1">1</td> <td border="1">1</td> <td>1</td>
            </tr>
        </tbody>
    </table>

</div>
</div>
`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

<div class="flex gap-8">
<div class="w-2/3">

\`\`\`html
<table border="1">
        <thead>
            <tr>
                <th>A</th> <th>B</th> <th>A & B</th>
            </tr>
        </thead>
        <tbody>
            <tr  align="center">
                <td>0</td> <td>0</td> <td>0</td>
            </tr>
            <tr  align="center">
                <td>0</td> <td>1</td> <td>0</td>
            </tr>
            <tr  align="center">
                <td>1</td> <td>0</td> <td>0</td>
            </tr>
            <tr  align="center">
                <td>1</td> <td>1</td> <td>1</td>
            </tr>
        </tbody>
    </table>
\`\`\`

</div>
<div class="w-1/3">

<table border="1" style="width:300px;">
        <thead>
            <tr>
                <td border="1" align="center"><b>A</b></td> <td border="1" align="center"><b>B</b></td> <td align="center"><b>A & B</b></td>
            </tr>
        </thead>
        <tbody>
            <tr  align="center">
                <td border="1">0</td> <td border="1">0</td> <td>0</td>
            </tr>
            <tr  align="center">
                <td border="1">0</td> <td border="1">1</td> <td>0</td>
            </tr>
            <tr  align="center">
                <td border="1">1</td> <td border="1">0</td> <td>0</td>
            </tr>
            <tr  align="center">
                <td border="1">1</td> <td border="1">1</td> <td>1</td>
            </tr>
        </tbody>
    </table>

</div>
</div>`,frontmatter:{},index:88,start:1938,end:1998,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:XH,meta:{slide:{raw:`
# Tabelle

Organizzazione tabulare dei contenuti

<div class="flex gap-8">
<div class="w-2/3">

\`\`\`html
<table border="1">
    <thead bgcolor="grey" align="center">
        <tr>
            <th>A</th> <th>B</th> <th>A | B</th>
        </tr>
    </thead>
    <tbody align="center">
        <tr>
            <td>0</td> <td>0</td> <td>0</td>
        </tr>
        <tr bgcolor="Gainsboro">
            <td>0</td> <td>1</td> <td>1</td>
        </tr>
        <tr>
            <td>1</td> <td>0</td> <td>1</td>
        </tr>
        <tr bgcolor="Gainsboro">
            <td>1</td> <td>1</td> <td>1</td>
        </tr>
    </tbody>
</table>
\`\`\`

</div>
<div class="w-1/3">

<table border="1" style="width:300px;">
    <thead bgcolor="grey" align="center">
        <tr>
            <td>A</td> <td>B</td> <td>A | B</td>
        </tr>
    </thead>
    <tbody align="center">
        <tr>
            <td>0</td> <td>0</td> <td>0</td>
        </tr>
        <tr bgcolor="Gainsboro">
            <td>0</td> <td>1</td> <td>1</td>
        </tr>
        <tr>
            <td>1</td> <td>0</td> <td>1</td>
        </tr>
        <tr bgcolor="Gainsboro">
            <td>1</td> <td>1</td> <td>1</td>
        </tr>
    </tbody>
</table>

</div>
</div>
`,title:"Tabelle",level:1,content:`# Tabelle

Organizzazione tabulare dei contenuti

<div class="flex gap-8">
<div class="w-2/3">

\`\`\`html
<table border="1">
    <thead bgcolor="grey" align="center">
        <tr>
            <th>A</th> <th>B</th> <th>A | B</th>
        </tr>
    </thead>
    <tbody align="center">
        <tr>
            <td>0</td> <td>0</td> <td>0</td>
        </tr>
        <tr bgcolor="Gainsboro">
            <td>0</td> <td>1</td> <td>1</td>
        </tr>
        <tr>
            <td>1</td> <td>0</td> <td>1</td>
        </tr>
        <tr bgcolor="Gainsboro">
            <td>1</td> <td>1</td> <td>1</td>
        </tr>
    </tbody>
</table>
\`\`\`

</div>
<div class="w-1/3">

<table border="1" style="width:300px;">
    <thead bgcolor="grey" align="center">
        <tr>
            <td>A</td> <td>B</td> <td>A | B</td>
        </tr>
    </thead>
    <tbody align="center">
        <tr>
            <td>0</td> <td>0</td> <td>0</td>
        </tr>
        <tr bgcolor="Gainsboro">
            <td>0</td> <td>1</td> <td>1</td>
        </tr>
        <tr>
            <td>1</td> <td>0</td> <td>1</td>
        </tr>
        <tr bgcolor="Gainsboro">
            <td>1</td> <td>1</td> <td>1</td>
        </tr>
    </tbody>
</table>

</div>
</div>`,frontmatter:{},index:89,start:1999,end:2059,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:o4,meta:{slide:{raw:`
# Esercizio html_10a

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10a.html
</div>
<div>
<img src="/media/html6.png" width="470" style="float:right; position:relative;top:0px;"/>
</div>
</div>
`,title:"Esercizio html_10a",level:1,content:`# Esercizio html_10a

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10a.html
</div>
<div>
<img src="/media/html6.png" width="470" style="float:right; position:relative;top:0px;"/>
</div>
</div>`,frontmatter:{},index:90,start:2060,end:2077,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:p4,meta:{slide:{raw:`
# Esercizio html_10b

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10b.html
</div>
<div>
<img src="/media/html7.png" width="470" style="float:right; position:relative;top:0px;"/>
</div>
</div>
`,title:"Esercizio html_10b",level:1,content:`# Esercizio html_10b

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10b.html
</div>
<div>
<img src="/media/html7.png" width="470" style="float:right; position:relative;top:0px;"/>
</div>
</div>`,frontmatter:{},index:91,start:2078,end:2095,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:_4,meta:{slide:{raw:`
# Esercizio html_10c

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10c.html
</div>
<div>
<img src="/media/html8.png" width="270" style="float:right; position:relative;left:-100px;"/>
</div>
</div>
`,title:"Esercizio html_10c",level:1,content:`# Esercizio html_10c

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10c.html
</div>
<div>
<img src="/media/html8.png" width="270" style="float:right; position:relative;left:-100px;"/>
</div>
</div>`,frontmatter:{},index:92,start:2096,end:2113,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:T4,meta:{slide:{raw:`
# Esercizio html_10d

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10d.html
</div>
<div>
<img src="/media/html9.png" width="470" style="float:right; position:relative;top:0px;"/>
</div>
</div>
`,title:"Esercizio html_10d",level:1,content:`# Esercizio html_10d

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10d.html
</div>
<div>
<img src="/media/html9.png" width="470" style="float:right; position:relative;top:0px;"/>
</div>
</div>`,frontmatter:{},index:93,start:2114,end:2131,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:C4,meta:{slide:{raw:`
# Esercizio html_10e

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10e.html
</div>
<div>
&nbsp;
</div>
</div>

<img src="/media/html10.png"  style="position:relative;left:0px;top:20px;"/>
`,title:"Esercizio html_10e",level:1,content:`# Esercizio html_10e

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10e.html
</div>
<div>
&nbsp;
</div>
</div>

<img src="/media/html10.png"  style="position:relative;left:0px;top:20px;"/>`,frontmatter:{},index:94,start:2132,end:2151,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:P4,meta:{slide:{raw:`
# Esercizio html_10f

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10f.html
</div>
<div>
<img src="/media/html11.png"  width="400" style="position:relative;left:0px;top:20px;"/>
</div>
</div>
`,title:"Esercizio html_10f",level:1,content:`# Esercizio html_10f

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10f.html
</div>
<div>
<img src="/media/html11.png"  width="400" style="position:relative;left:0px;top:20px;"/>
</div>
</div>`,frontmatter:{},index:95,start:2152,end:2169,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:D4,meta:{slide:{raw:`
# Esercizio html_10g

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10g.html
</div>
<div>
<img src="/media/html12.png"  width="300" style="position:relative;left:100px;top:20px;"/>
</div>
</div>

`,title:"Esercizio html_10g",level:1,content:`# Esercizio html_10g

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle quanto rappresentato in figura
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_10g.html
</div>
<div>
<img src="/media/html12.png"  width="300" style="position:relative;left:100px;top:20px;"/>
</div>
</div>`,frontmatter:{},index:96,start:2170,end:2188,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:G4,meta:{slide:{raw:`
# Esercizio html_11

Tabelle

<div grid="~ cols-2 gap-4">
<div>

1. Realizzare in HTML con l'uso delle tabelle il menù del ristorante qui a fianco
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
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
2. Obiettivo è riprodurlo il più fedelmente possibile tramite l'uso delle tabelle e di quanto appreso fino ad ora
3. Consegnare su github il file con nome |cognome|_esercizio_html_11.html
</div>
<div>
<img src="/media/html5_12.jpg" width="370" style="float:right; position:relative;top:-100px;"/>
</div>
</div>`,frontmatter:{},index:97,start:2189,end:2206,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:Z4,meta:{slide:{raw:`
&nbsp;

<Cover fs=80px>
  Interagiamo con l'utente attraverso i From
</Cover>
`,content:`&nbsp;

<Cover fs=80px>
  Interagiamo con l'utente attraverso i From
</Cover>`,frontmatter:{},index:98,start:2207,end:2214,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:iP,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:99,start:2215,end:2239,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:fP,meta:{slide:{raw:`
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
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">`,frontmatter:{},index:100,start:2240,end:2262,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:MP,meta:{slide:{raw:`
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
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">`,frontmatter:{},index:101,start:2263,end:2291,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:PP,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:102,start:2292,end:2340,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:KP,meta:{slide:{raw:`
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
<button type="button" style="border: 1px solid red;">Click Me!</button>`,frontmatter:{},index:103,start:2341,end:2369,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:d8,meta:{slide:{raw:`
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
<label for="disoccupato">  Disoccupato</label><br><br>`,frontmatter:{},index:104,start:2370,end:2396,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:A8,meta:{slide:{raw:`
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
<label for="nuoto"> Nuoto</label><br><br>`,frontmatter:{},index:105,start:2397,end:2423,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:B8,meta:{slide:{raw:`
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
<input type="date" id="iddata" name="birthday"><br><br>`,frontmatter:{},index:106,start:2424,end:2440,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:Y8,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:107,start:2441,end:2471,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:aR,meta:{slide:{raw:`
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
2. Consegnare su github il file con nome |cognome|_esercizio_html_13.html`,frontmatter:{},index:108,start:2472,end:2491,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:hR,meta:{slide:{raw:`
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
<input type="number" id="altezza" name="altezza" min="150" max="200" style="border: 1px solid black;"><br><br>`,frontmatter:{},index:109,start:2492,end:2508,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:MR,meta:{slide:{raw:`
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
 <input type="color" id="favcolor" name="favcolor" value="#ff0000" onchange="alert(\`Hai selezionato il colore: \${event.target.value}\`)"><br><br>`,frontmatter:{},index:110,start:2509,end:2525,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:PR,meta:{slide:{raw:`
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
<input type="range" min="50" max="100" value="60" class="slider" id="peso"><br>`,frontmatter:{},index:111,start:2526,end:2541,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:UR,meta:{slide:{raw:`
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
</select><br><br>`,frontmatter:{},index:112,start:2542,end:2563,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:XR,meta:{slide:{raw:`
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
<textarea id="bio" name="bio" rows="4" cols="50" placeholder="Inserisci la tua biografia" style="border: 1px solid black;"></textarea>`,frontmatter:{},index:113,start:2564,end:2580,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:l9,meta:{slide:{raw:`
# Esercizio html_14

Form

1. Modificare il file *|cognome|_esercizio_html_12.html* e salvarlo come *|cognome|_esercizio_html_14.html*
2. Modificare il form (vedi dettagli sotto)
3. Consegnare su github il file con nome |cognome|_esercizio_html_14.html


Il form deve contenere i seguenti widgets aggiuntivi:
  - almeno 4 widget number con valore minimo e massimo
  - almeno 1 widget color picker
  - almeno 3 widget range con valore minimo e massimo
  - almeno 1 combo box o select con almeno 5 valori
  - almeno 1 data list con almeno 5 valori
  - almeno 1 campo text area con dimensione minima 6 righe e 60 colonne
  - ogni widget deve essere dotato della propria label

Consegnare su github il file *|cognome|_esercizio_html_14.html*

`,title:"Esercizio html_14",level:1,content:`# Esercizio html_14

Form

1. Modificare il file *|cognome|_esercizio_html_12.html* e salvarlo come *|cognome|_esercizio_html_14.html*
2. Modificare il form (vedi dettagli sotto)
3. Consegnare su github il file con nome |cognome|_esercizio_html_14.html


Il form deve contenere i seguenti widgets aggiuntivi:
  - almeno 4 widget number con valore minimo e massimo
  - almeno 1 widget color picker
  - almeno 3 widget range con valore minimo e massimo
  - almeno 1 combo box o select con almeno 5 valori
  - almeno 1 data list con almeno 5 valori
  - almeno 1 campo text area con dimensione minima 6 righe e 60 colonne
  - ogni widget deve essere dotato della propria label

Consegnare su github il file *|cognome|_esercizio_html_14.html*`,frontmatter:{},index:114,start:2581,end:2603,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:h9,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:115,start:2604,end:2634,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:w9,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:116,start:2635,end:2686,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",name:"page-118",component:E9,meta:{slide:{raw:`
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
2. Consgenare su github il file |cognome|_es15.html`,frontmatter:{},index:117,start:2687,end:2705,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:117,no:118},__clicksElements:[],__preloaded:!1}},{path:"119",name:"page-119",component:P9,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:118,start:2706,end:2739,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:118,no:119},__clicksElements:[],__preloaded:!1}},{path:"120",name:"page-120",component:D9,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:119,start:2740,end:2758,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:119,no:120},__clicksElements:[],__preloaded:!1}},{path:"121",name:"page-121",component:Q9,meta:{slide:{raw:`
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
7. Viene inviata la risposta finale al browser`,frontmatter:{},index:120,start:2759,end:2775,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:120,no:121},__clicksElements:[],__preloaded:!1}},{path:"122",name:"page-122",component:eN,meta:{slide:{raw:`
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
- Per ovviare a queste problematiche, normalmente si effettua la validazione del form in JavaScript, quindi direttamente nel browser riducendo così il numero di messaggi con il server`,frontmatter:{},index:121,start:2776,end:2787,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:121,no:122},__clicksElements:[],__preloaded:!1}},{path:"123",name:"page-123",component:lN,meta:{slide:{raw:`
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
7. Viene inviata la risposta finale al browser`,frontmatter:{},index:122,start:2788,end:2804,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:122,no:123},__clicksElements:[],__preloaded:!1}},{path:"124",name:"page-124",component:gN,meta:{slide:{raw:`
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
5. Aprire la pagina fornita dal server locale sulla posta 8080`,frontmatter:{},index:123,start:2805,end:2824,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:123,no:124},__clicksElements:[],__preloaded:!1}},{path:"125",name:"page-125",component:wN,meta:{slide:{raw:`
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

`,title:"Esercizio html_18",level:1,content:"# Esercizio html_18\n\n\n&nbsp;\n\nSi richiede di:\n1. Verificare il funzionamento del form e della validazione dei campi\n2. Analizzaere il codice del form e del server in JavaScript\n3. Modificare il form in modo che l'età venga fornita come un ```range```\n4. Modificare il form in modo che sia presente anche il campo `Cognome`\n5. Modificare il codice del server in modo che sia presente **anche** la validazione dell'età, in modo che siano accettati solo valori compresi tra 19 e 31\n6. Fornire il link github alla directory con nome |cognome|_esercizio_html_18 contenente i file aggiornati *form.html* e *form_server.js*\n7. ```NON deve essere presente nel repository la directory **node_modules**```",frontmatter:{},index:124,start:2825,end:2841,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:124,no:125},__clicksElements:[],__preloaded:!1}},{path:"126",name:"page-126",component:zN,meta:{slide:{raw:`
&nbsp;

<Cover fs=90px>
  HTML Linter e validità sintattica
</Cover>
`,content:`&nbsp;

<Cover fs=90px>
  HTML Linter e validità sintattica
</Cover>`,frontmatter:{},index:125,start:2842,end:2849,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:125,no:126},__clicksElements:[],__preloaded:!1}},{path:"127",name:"page-127",component:CN,meta:{slide:{raw:`
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


- Il lineter è uno strumento fondamentale per lo sviluppatore.`,frontmatter:{},index:126,start:2850,end:2868,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:126,no:127},__clicksElements:[],__preloaded:!1}},{path:"128",name:"page-128",component:NN,meta:{slide:{raw:`
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
<img src="/media/html5_12.png" />`,frontmatter:{},index:127,start:2869,end:2880,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:127,no:128},__clicksElements:[],__preloaded:!1}},{path:"129",name:"page-129",component:KN,meta:{slide:{raw:`
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
<img src="/media/html5_13.png" />`,frontmatter:{},index:128,start:2881,end:2895,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:128,no:129},__clicksElements:[],__preloaded:!1}},{path:"130",name:"page-130",component:n7,meta:{slide:{raw:`
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
  - **Warning**: evidenzia potenziali problemi ma non necessariamente errori sintattici`,frontmatter:{},index:129,start:2896,end:2909,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:129,no:130},__clicksElements:[],__preloaded:!1}},{path:"131",name:"page-131",component:l7,meta:{slide:{raw:`
# Esercizio html_19

HTML lint

Mediante il servizio di validazione HTML del W3C si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente


`,title:"Esercizio html_19",level:1,content:`# Esercizio html_19

HTML lint

Mediante il servizio di validazione HTML del W3C si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente`,frontmatter:{},index:130,start:2910,end:2921,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:130,no:131},__clicksElements:[],__preloaded:!1}},{path:"132",name:"page-132",component:h7,meta:{slide:{raw:`
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
<img src="/media/html5_15.png" width="500" />`,frontmatter:{},index:131,start:2922,end:2937,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:131,no:132},__clicksElements:[],__preloaded:!1}},{path:"133",name:"page-133",component:x7,meta:{slide:{raw:`
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
<img src="/media/html5_16.png" width="700" />`,frontmatter:{},index:132,start:2938,end:2953,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:132,no:133},__clicksElements:[],__preloaded:!1}},{path:"134",name:"page-134",component:C7,meta:{slide:{raw:`
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
  - **html**: genera un report in formato HTML esattamente come quello generato dal servizio W3C`,frontmatter:{},index:133,start:2954,end:2967,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:133,no:134},__clicksElements:[],__preloaded:!1}},{path:"135",name:"page-135",component:q7,meta:{slide:{raw:`
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
<img src="/media/html5_17.png" />`,frontmatter:{},index:134,start:2968,end:2982,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:134,no:135},__clicksElements:[],__preloaded:!1}},{path:"136",name:"page-136",component:G7,meta:{slide:{raw:`
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
<img src="/media/html5_18.png" width="650"/>`,frontmatter:{},index:135,start:2983,end:2998,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:135,no:136},__clicksElements:[],__preloaded:!1}},{path:"137",name:"page-137",component:aq,meta:{slide:{raw:`
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
<img src="/media/html5_19.png" width="650"/>`,frontmatter:{},index:136,start:2999,end:3013,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:136,no:137},__clicksElements:[],__preloaded:!1}},{path:"138",name:"page-138",component:cq,meta:{slide:{raw:`
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
7. Consegnare su github il file |cognome|_esercizio_html_20.html`,frontmatter:{},index:137,start:3014,end:3029,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:137,no:138},__clicksElements:[],__preloaded:!1}},{path:"139",name:"page-139",component:mq,meta:{slide:{raw:`
<img src="/media/hh03.webp" style="position:relative;top:-20px;">

`,content:'<img src="/media/hh03.webp" style="position:relative;top:-20px;">',frontmatter:{},index:138,start:3030,end:3034,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:138,no:139},__clicksElements:[],__preloaded:!1}},{path:"140",component:fz,meta:{layout:"end"}}],Qe=fq,cs=[{name:"play",path:"/",component:Nx,children:[...Qe]},{name:"print",path:"/print",component:pz},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(t){if(!rs.remote||rs.remote===t.query.password)return!0;if(rs.remote&&t.query.password===void 0){const a=prompt("Enter password");if(rs.remote===a)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};cs.push({path:"/presenter/print",component:()=>Ot(()=>import("./PresenterPrint-800db0e6.js"),["assets/PresenterPrint-800db0e6.js","assets/NoteDisplay-cd2ccd7b.js"])}),cs.push({name:"notes",path:"/notes",component:()=>Ot(()=>import("./NotesView-193335a6.js"),["assets/NotesView-193335a6.js","assets/NoteDisplay-cd2ccd7b.js"]),beforeEnter:n}),cs.push({name:"presenter",path:"/presenter/:no",component:()=>Ot(()=>import("./Presenter-8d5cec4c.js"),["assets/Presenter-8d5cec4c.js","assets/NoteDisplay-cd2ccd7b.js","assets/DrawingControls-f461b91d.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:n}),cs.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const wn=y0({history:bb("/3/html/"),routes:cs});function hq(n,t,{mode:a="replace"}={}){return W({get(){const o=wn.currentRoute.value.query[n];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){on(()=>{wn[O(a)]({query:{...wn.currentRoute.value.query,[n]:o}})})}})}const Ym=Y(0);on(()=>{wn.afterEach(async()=>{await on(),Ym.value+=1})});const Xm=Y(0),Wn=W(()=>wn.currentRoute.value),Na=W(()=>Wn.value.query.print!==void 0),gq=W(()=>Wn.value.query.print==="clicks"),mt=W(()=>Wn.value.query.embedded!==void 0),kn=W(()=>Wn.value.path.startsWith("/presenter")),_q=W(()=>Wn.value.path.startsWith("/notes")),vs=W(()=>Na.value&&!gq.value),Fl=W(()=>Wn.value.query.password),vq=W(()=>!kn.value&&(!Ce.remote||Fl.value===Ce.remote)),Wu=hq("clicks","0"),kq=W(()=>Qe.length-1),bq=W(()=>Wn.value.path),Ue=W(()=>parseInt(bq.value.split(/\//g).slice(-1)[0])||1);W(()=>mi(Ue.value));const mn=W(()=>Qe.find(n=>n.path===`${Ue.value}`));W(()=>{var n,t,a;return(a=(t=(n=mn.value)==null?void 0:n.meta)==null?void 0:t.slide)==null?void 0:a.id});W(()=>{var n,t;return((t=(n=mn.value)==null?void 0:n.meta)==null?void 0:t.layout)||(Ue.value===1?"cover":"default")});const qi=W(()=>Qe.find(n=>n.path===`${Math.min(Qe.length,Ue.value+1)}`)),yq=W(()=>Qe.find(n=>n.path===`${Math.max(1,Ue.value-1)}`)),wq=W(()=>{var n,t;return Ym.value,((t=(n=mn.value)==null?void 0:n.meta)==null?void 0:t.__clicksElements)||[]}),Nn=W({get(){if(vs.value)return 99999;let n=+(Wu.value||0);return isNaN(n)&&(n=0),n},set(n){Wu.value=n.toString()}}),Uo=W(()=>{var n,t;return+(((t=(n=mn.value)==null?void 0:n.meta)==null?void 0:t.clicks)??wq.value.length)}),Tq=W(()=>Ue.value<Qe.length-1||Nn.value<Uo.value),xq=W(()=>Ue.value>1||Nn.value>0),zq=W(()=>Qe.filter(n=>{var t,a;return(a=(t=n.meta)==null?void 0:t.slide)==null?void 0:a.title}).reduce((n,t)=>(Or(n,t),n),[])),$q=W(()=>Hr(zq.value,mn.value));W(()=>Pr($q.value));const Mq=W(()=>Iq(Xm.value,mn.value,yq.value));be(mn,(n,t)=>{Xm.value=Number(n==null?void 0:n.path)-Number(t==null?void 0:t.path)});function Pt(){Uo.value<=Nn.value?Hs():Nn.value+=1}async function Rt(){Nn.value<=0?await Ps():Nn.value-=1}function mi(n){return kn.value?`/presenter/${n}`:`/${n}`}function Hs(){const n=Math.min(Qe.length,Ue.value+1);return qa(n)}async function Ps(n=!0){const t=Math.max(1,Ue.value-1);await qa(t),n&&Uo.value&&wn.replace({query:{...Wn.value.query,clicks:Uo.value}})}function qa(n,t){return wn.push({path:mi(n),query:{...Wn.value.query,clicks:t}})}function Lq(n){const t=Y(0),{direction:a,distanceX:o,distanceY:i}=Dk(n,{onSwipeStart(l){l.pointerType==="touch"&&(Is.value||(t.value=yl()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||Is.value)return;const r=Math.abs(o.value),c=Math.abs(i.value);r/window.innerWidth>.3||r>100?a.value==="left"?Pt():Rt():(c/window.innerHeight>.4||c>200)&&(a.value==="down"?Ps():Hs())}})}async function Wl(){const{saveAs:n}=await Ot(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);n(typeof Ce.download=="string"?Ce.download:Ce.exportFilename?`${Ce.exportFilename}.pdf`:"/3/html/slidev-exported.pdf",`${Ce.title}.pdf`)}async function Eq(n){var t,a;if(n==null){const o=(a=(t=mn.value)==null?void 0:t.meta)==null?void 0:a.slide;if(!(o!=null&&o.filepath))return!1;n=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function Or(n,t,a=1){var i,l,r,c,u;const o=(l=(i=t.meta)==null?void 0:i.slide)==null?void 0:l.level;o&&o>a&&n.length>0?Or(n[n.length-1].children,t,a+1):n.push({children:[],level:a,path:t.path,hideInToc:!!((r=t.meta)!=null&&r.hideInToc),title:(u=(c=t.meta)==null?void 0:c.slide)==null?void 0:u.title})}function Hr(n,t,a=!1,o){return n.map(i=>{const l={...i,active:i.path===(t==null?void 0:t.path),hasActiveParent:a};return l.children.length>0&&(l.children=Hr(l.children,t,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function Pr(n,t=1){return n.filter(a=>!a.hideInToc).map(a=>({...a,children:Pr(a.children,t+1)}))}const Cq={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function Aq(n,t=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let a=n.name.includes("|")?n.name:Cq[n.name]||n.name;if(a.includes("|")){const[o,i]=a.split("|").map(l=>l.trim());a=t?i:o}if(a)return{...n,name:a}}function Iq(n,t,a){var i,l;let o=n>0?(i=a==null?void 0:a.meta)==null?void 0:i.transition:(l=t==null?void 0:t.meta)==null?void 0:l.transition;return o||(o=Ce.transition),Aq(o,n<0)}function Sq(){const n=Ce.titleTemplate.replace("%s",Ce.title||"Slidev");jd({title:n,htmlAttrs:Ce.htmlAttrs}),v1(`${n} - shared`),w1(`${n} - drawings`);const t=`${location.origin}_${d1()}`;function a(){_q.value||!kn.value&&!p1.includes(location.host.split(":")[0])||(kn.value?(Ja("page",+Ue.value),Ja("clicks",Nn.value)):(Ja("viewerPage",+Ue.value),Ja("viewerClicks",Nn.value)),Ja("lastUpdate",{id:t,type:kn.value?"presenter":"viewer",time:new Date().getTime()}))}wn.afterEach(a),be(Nn,a),k1(o=>{var l;wn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=o.lastUpdate)==null?void 0:l.type)==="presenter"&&(+o.page!=+Ue.value||+Nn.value!=+o.clicks)&&wn.replace({path:mi(o.page),query:{...wn.currentRoute.value.query,clicks:o.clicks||0}})})}const Oq=Se({__name:"App",setup(n){return $(L),Sq(),(t,a)=>{const o=Ha("RouterView"),i=Ha("StarportCarrier");return k(),oe(Ae,null,[C(o),C(i)],64)}}}),Hq=E(Oq,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/App.vue"]]);function Fi(n){return n!==null&&typeof n=="object"}function Dl(n,t,a=".",o){if(!Fi(t))return Dl(n,{},a,o);const i=Object.assign({},t);for(const l in n){if(l==="__proto__"||l==="constructor")continue;const r=n[l];r!=null&&(o&&o(i,l,r,a)||(Array.isArray(r)&&Array.isArray(i[l])?i[l]=[...r,...i[l]]:Fi(r)&&Fi(i[l])?i[l]=Dl(r,i[l],(a?`${a}.`:"")+l.toString(),o):i[l]=r))}return i}function Pq(n){return(...t)=>t.reduce((a,o)=>Dl(a,o,"",n),{})}const Rq=Pq(),ef=1/60*1e3,Nq=typeof performance<"u"?()=>performance.now():()=>Date.now(),nf=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(Nq()),ef);function qq(n){let t=[],a=[],o=0,i=!1,l=!1;const r=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const m=d&&i,f=m?t:a;return p&&r.add(u),f.indexOf(u)===-1&&(f.push(u),m&&i&&(o=t.length)),u},cancel:u=>{const p=a.indexOf(u);p!==-1&&a.splice(p,1),r.delete(u)},process:u=>{if(i){l=!0;return}if(i=!0,[t,a]=[a,t],a.length=0,o=t.length,o)for(let p=0;p<o;p++){const d=t[p];d(u),r.has(d)&&(c.schedule(d),n())}i=!1,l&&(l=!1,c.process(u))}};return c}const Fq=40;let jl=!0,Rs=!1,Bl=!1;const Oa={delta:0,timestamp:0},Ks=["read","update","preRender","render","postRender"],fi=Ks.reduce((n,t)=>(n[t]=qq(()=>Rs=!0),n),{}),Vl=Ks.reduce((n,t)=>{const a=fi[t];return n[t]=(o,i=!1,l=!1)=>(Rs||jq(),a.schedule(o,i,l)),n},{}),Wq=Ks.reduce((n,t)=>(n[t]=fi[t].cancel,n),{});Ks.reduce((n,t)=>(n[t]=()=>fi[t].process(Oa),n),{});const Dq=n=>fi[n].process(Oa),tf=n=>{Rs=!1,Oa.delta=jl?ef:Math.max(Math.min(n-Oa.timestamp,Fq),1),Oa.timestamp=n,Bl=!0,Ks.forEach(Dq),Bl=!1,Rs&&(jl=!1,nf(tf))},jq=()=>{Rs=!0,jl=!0,Bl||nf(tf)},af=()=>Oa;function sf(n,t){var a={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(n);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(a[o[i]]=n[o[i]]);return a}var Rr=function(){},Ns=function(){};Rr=function(n,t){!n&&typeof console<"u"&&console.warn(t)},Ns=function(n,t){if(!n)throw new Error(t)};const Ul=(n,t,a)=>Math.min(Math.max(a,n),t),Wi=.001,Bq=.01,Du=10,Vq=.05,Uq=1;function Kq({duration:n=800,bounce:t=.25,velocity:a=0,mass:o=1}){let i,l;Rr(n<=Du*1e3,"Spring duration must be 10 seconds or less");let r=1-t;r=Ul(Vq,Uq,r),n=Ul(Bq,Du,n/1e3),r<1?(i=p=>{const d=p*r,m=d*n,f=d-a,h=Kl(p,r),g=Math.exp(-m);return Wi-f/h*g},l=p=>{const m=p*r*n,f=m*a+a,h=Math.pow(r,2)*Math.pow(p,2)*n,g=Math.exp(-m),w=Kl(Math.pow(p,2),r);return(-i(p)+Wi>0?-1:1)*((f-h)*g)/w}):(i=p=>{const d=Math.exp(-p*n),m=(p-a)*n+1;return-Wi+d*m},l=p=>{const d=Math.exp(-p*n),m=(a-p)*(n*n);return d*m});const c=5/n,u=Qq(i,l,c);if(n=n*1e3,isNaN(u))return{stiffness:100,damping:10,duration:n};{const p=Math.pow(u,2)*o;return{stiffness:p,damping:r*2*Math.sqrt(o*p),duration:n}}}const Gq=12;function Qq(n,t,a){let o=a;for(let i=1;i<Gq;i++)o=o-n(o)/t(o);return o}function Kl(n,t){return n*Math.sqrt(1-t*t)}const Jq=["duration","bounce"],Zq=["stiffness","damping","mass"];function ju(n,t){return t.some(a=>n[a]!==void 0)}function Yq(n){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!ju(n,Zq)&&ju(n,Jq)){const a=Kq(n);t=Object.assign(Object.assign(Object.assign({},t),a),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Nr(n){var{from:t=0,to:a=1,restSpeed:o=2,restDelta:i}=n,l=sf(n,["from","to","restSpeed","restDelta"]);const r={done:!1,value:t};let{stiffness:c,damping:u,mass:p,velocity:d,duration:m,isResolvedFromDuration:f}=Yq(l),h=Bu,g=Bu;function w(){const T=d?-(d/1e3):0,x=a-t,z=u/(2*Math.sqrt(c*p)),b=Math.sqrt(c/p)/1e3;if(i===void 0&&(i=Math.min(Math.abs(a-t)/100,.4)),z<1){const S=Kl(b,z);h=A=>{const N=Math.exp(-z*b*A);return a-N*((T+z*b*x)/S*Math.sin(S*A)+x*Math.cos(S*A))},g=A=>{const N=Math.exp(-z*b*A);return z*b*N*(Math.sin(S*A)*(T+z*b*x)/S+x*Math.cos(S*A))-N*(Math.cos(S*A)*(T+z*b*x)-S*x*Math.sin(S*A))}}else if(z===1)h=S=>a-Math.exp(-b*S)*(x+(T+b*x)*S);else{const S=b*Math.sqrt(z*z-1);h=A=>{const N=Math.exp(-z*b*A),B=Math.min(S*A,300);return a-N*((T+z*b*x)*Math.sinh(B)+S*x*Math.cosh(B))/S}}}return w(),{next:T=>{const x=h(T);if(f)r.done=T>=m;else{const z=g(T)*1e3,b=Math.abs(z)<=o,S=Math.abs(a-x)<=i;r.done=b&&S}return r.value=r.done?a:x,r},flipTarget:()=>{d=-d,[t,a]=[a,t],w()}}}Nr.needsInterpolation=(n,t)=>typeof n=="string"||typeof t=="string";const Bu=n=>0,of=(n,t,a)=>{const o=t-n;return o===0?1:(a-n)/o},qr=(n,t,a)=>-a*n+a*t+n,lf=(n,t)=>a=>Math.max(Math.min(a,t),n),ks=n=>n%1?Number(n.toFixed(5)):n,qs=/(-)?([\d]*\.?[\d])+/g,Gl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Xq=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Gs(n){return typeof n=="string"}const Qs={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},bs=Object.assign(Object.assign({},Qs),{transform:lf(0,1)}),fo=Object.assign(Object.assign({},Qs),{default:1}),Fr=n=>({test:t=>Gs(t)&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),Gt=Fr("deg"),ys=Fr("%"),we=Fr("px"),Vu=Object.assign(Object.assign({},ys),{parse:n=>ys.parse(n)/100,transform:n=>ys.transform(n*100)}),Wr=(n,t)=>a=>!!(Gs(a)&&Xq.test(a)&&a.startsWith(n)||t&&Object.prototype.hasOwnProperty.call(a,t)),rf=(n,t,a)=>o=>{if(!Gs(o))return o;const[i,l,r,c]=o.match(qs);return{[n]:parseFloat(i),[t]:parseFloat(l),[a]:parseFloat(r),alpha:c!==void 0?parseFloat(c):1}},la={test:Wr("hsl","hue"),parse:rf("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:a,alpha:o=1})=>"hsla("+Math.round(n)+", "+ys.transform(ks(t))+", "+ys.transform(ks(a))+", "+ks(bs.transform(o))+")"},eF=lf(0,255),Di=Object.assign(Object.assign({},Qs),{transform:n=>Math.round(eF(n))}),Et={test:Wr("rgb","red"),parse:rf("red","green","blue"),transform:({red:n,green:t,blue:a,alpha:o=1})=>"rgba("+Di.transform(n)+", "+Di.transform(t)+", "+Di.transform(a)+", "+ks(bs.transform(o))+")"};function nF(n){let t="",a="",o="",i="";return n.length>5?(t=n.substr(1,2),a=n.substr(3,2),o=n.substr(5,2),i=n.substr(7,2)):(t=n.substr(1,1),a=n.substr(2,1),o=n.substr(3,1),i=n.substr(4,1),t+=t,a+=a,o+=o,i+=i),{red:parseInt(t,16),green:parseInt(a,16),blue:parseInt(o,16),alpha:i?parseInt(i,16)/255:1}}const Ql={test:Wr("#"),parse:nF,transform:Et.transform},vn={test:n=>Et.test(n)||Ql.test(n)||la.test(n),parse:n=>Et.test(n)?Et.parse(n):la.test(n)?la.parse(n):Ql.parse(n),transform:n=>Gs(n)?n:n.hasOwnProperty("red")?Et.transform(n):la.transform(n)},cf="${c}",uf="${n}";function tF(n){var t,a,o,i;return isNaN(n)&&Gs(n)&&((a=(t=n.match(qs))===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:0)+((i=(o=n.match(Gl))===null||o===void 0?void 0:o.length)!==null&&i!==void 0?i:0)>0}function pf(n){typeof n=="number"&&(n=`${n}`);const t=[];let a=0;const o=n.match(Gl);o&&(a=o.length,n=n.replace(Gl,cf),t.push(...o.map(vn.parse)));const i=n.match(qs);return i&&(n=n.replace(qs,uf),t.push(...i.map(Qs.parse))),{values:t,numColors:a,tokenised:n}}function df(n){return pf(n).values}function mf(n){const{values:t,numColors:a,tokenised:o}=pf(n),i=t.length;return l=>{let r=o;for(let c=0;c<i;c++)r=r.replace(c<a?cf:uf,c<a?vn.transform(l[c]):ks(l[c]));return r}}const aF=n=>typeof n=="number"?0:n;function sF(n){const t=df(n);return mf(n)(t.map(aF))}const Js={test:tF,parse:df,createTransformer:mf,getAnimatableNone:sF},oF=new Set(["brightness","contrast","saturate","opacity"]);function iF(n){let[t,a]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[o]=a.match(qs)||[];if(!o)return n;const i=a.replace(o,"");let l=oF.has(t)?1:0;return o!==a&&(l*=100),t+"("+l+i+")"}const lF=/([a-z-]*)\(.*?\)/g,Jl=Object.assign(Object.assign({},Js),{getAnimatableNone:n=>{const t=n.match(lF);return t?t.map(iF).join(" "):n}});function ji(n,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?n+(t-n)*6*a:a<1/2?t:a<2/3?n+(t-n)*(2/3-a)*6:n}function Uu({hue:n,saturation:t,lightness:a,alpha:o}){n/=360,t/=100,a/=100;let i=0,l=0,r=0;if(!t)i=l=r=a;else{const c=a<.5?a*(1+t):a+t-a*t,u=2*a-c;i=ji(u,c,n+1/3),l=ji(u,c,n),r=ji(u,c,n-1/3)}return{red:Math.round(i*255),green:Math.round(l*255),blue:Math.round(r*255),alpha:o}}const rF=(n,t,a)=>{const o=n*n,i=t*t;return Math.sqrt(Math.max(0,a*(i-o)+o))},cF=[Ql,Et,la],Ku=n=>cF.find(t=>t.test(n)),Gu=n=>`'${n}' is not an animatable color. Use the equivalent color code instead.`,ff=(n,t)=>{let a=Ku(n),o=Ku(t);Ns(!!a,Gu(n)),Ns(!!o,Gu(t));let i=a.parse(n),l=o.parse(t);a===la&&(i=Uu(i),a=Et),o===la&&(l=Uu(l),o=Et);const r=Object.assign({},i);return c=>{for(const u in r)u!=="alpha"&&(r[u]=rF(i[u],l[u],c));return r.alpha=qr(i.alpha,l.alpha,c),a.transform(r)}},uF=n=>typeof n=="number",pF=(n,t)=>a=>t(n(a)),hf=(...n)=>n.reduce(pF);function gf(n,t){return uF(n)?a=>qr(n,t,a):vn.test(n)?ff(n,t):vf(n,t)}const _f=(n,t)=>{const a=[...n],o=a.length,i=n.map((l,r)=>gf(l,t[r]));return l=>{for(let r=0;r<o;r++)a[r]=i[r](l);return a}},dF=(n,t)=>{const a=Object.assign(Object.assign({},n),t),o={};for(const i in a)n[i]!==void 0&&t[i]!==void 0&&(o[i]=gf(n[i],t[i]));return i=>{for(const l in o)a[l]=o[l](i);return a}};function Qu(n){const t=Js.parse(n),a=t.length;let o=0,i=0,l=0;for(let r=0;r<a;r++)o||typeof t[r]=="number"?o++:t[r].hue!==void 0?l++:i++;return{parsed:t,numNumbers:o,numRGB:i,numHSL:l}}const vf=(n,t)=>{const a=Js.createTransformer(t),o=Qu(n),i=Qu(t);return o.numHSL===i.numHSL&&o.numRGB===i.numRGB&&o.numNumbers>=i.numNumbers?hf(_f(o.parsed,i.parsed),a):(Rr(!0,`Complex values '${n}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),r=>`${r>0?t:n}`)},mF=(n,t)=>a=>qr(n,t,a);function fF(n){if(typeof n=="number")return mF;if(typeof n=="string")return vn.test(n)?ff:vf;if(Array.isArray(n))return _f;if(typeof n=="object")return dF}function hF(n,t,a){const o=[],i=a||fF(n[0]),l=n.length-1;for(let r=0;r<l;r++){let c=i(n[r],n[r+1]);if(t){const u=Array.isArray(t)?t[r]:t;c=hf(u,c)}o.push(c)}return o}function gF([n,t],[a]){return o=>a(of(n,t,o))}function _F(n,t){const a=n.length,o=a-1;return i=>{let l=0,r=!1;if(i<=n[0]?r=!0:i>=n[o]&&(l=o-1,r=!0),!r){let u=1;for(;u<a&&!(n[u]>i||u===o);u++);l=u-1}const c=of(n[l],n[l+1],i);return t[l](c)}}function kf(n,t,{clamp:a=!0,ease:o,mixer:i}={}){const l=n.length;Ns(l===t.length,"Both input and output ranges must be the same length"),Ns(!o||!Array.isArray(o)||o.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[l-1]&&(n=[].concat(n),t=[].concat(t),n.reverse(),t.reverse());const r=hF(t,o,i),c=l===2?gF(n,r):_F(n,r);return a?u=>c(Ul(n[0],n[l-1],u)):c}const hi=n=>t=>1-n(1-t),Dr=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,vF=n=>t=>Math.pow(t,n),bf=n=>t=>t*t*((n+1)*t-n),kF=n=>{const t=bf(n);return a=>(a*=2)<1?.5*t(a):.5*(2-Math.pow(2,-10*(a-1)))},yf=1.525,bF=4/11,yF=8/11,wF=9/10,wf=n=>n,jr=vF(2),TF=hi(jr),Tf=Dr(jr),xf=n=>1-Math.sin(Math.acos(n)),zf=hi(xf),xF=Dr(zf),Br=bf(yf),zF=hi(Br),$F=Dr(Br),MF=kF(yf),LF=4356/361,EF=35442/1805,CF=16061/1805,Ko=n=>{if(n===1||n===0)return n;const t=n*n;return n<bF?7.5625*t:n<yF?9.075*t-9.9*n+3.4:n<wF?LF*t-EF*n+CF:10.8*n*n-20.52*n+10.72},AF=hi(Ko),IF=n=>n<.5?.5*(1-Ko(1-n*2)):.5*Ko(n*2-1)+.5;function SF(n,t){return n.map(()=>t||Tf).splice(0,n.length-1)}function OF(n){const t=n.length;return n.map((a,o)=>o!==0?o/(t-1):0)}function HF(n,t){return n.map(a=>a*t)}function To({from:n=0,to:t=1,ease:a,offset:o,duration:i=300}){const l={done:!1,value:n},r=Array.isArray(t)?t:[n,t],c=HF(o&&o.length===r.length?o:OF(r),i);function u(){return kf(c,r,{ease:Array.isArray(a)?a:SF(r,a)})}let p=u();return{next:d=>(l.value=p(d),l.done=d>=i,l),flipTarget:()=>{r.reverse(),p=u()}}}function PF({velocity:n=0,from:t=0,power:a=.8,timeConstant:o=350,restDelta:i=.5,modifyTarget:l}){const r={done:!1,value:t};let c=a*n;const u=t+c,p=l===void 0?u:l(u);return p!==u&&(c=p-t),{next:d=>{const m=-c*Math.exp(-d/o);return r.done=!(m>i||m<-i),r.value=r.done?p:p+m,r},flipTarget:()=>{}}}const Ju={keyframes:To,spring:Nr,decay:PF};function RF(n){if(Array.isArray(n.to))return To;if(Ju[n.type])return Ju[n.type];const t=new Set(Object.keys(n));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?To:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Nr:To}function $f(n,t,a=0){return n-t-a}function NF(n,t,a=0,o=!0){return o?$f(t+-n,t,a):t-(n-t)+a}function qF(n,t,a,o){return o?n>=t+a:n<=-a}const FF=n=>{const t=({delta:a})=>n(a);return{start:()=>Vl.update(t,!0),stop:()=>Wq.update(t)}};function Mf(n){var t,a,{from:o,autoplay:i=!0,driver:l=FF,elapsed:r=0,repeat:c=0,repeatType:u="loop",repeatDelay:p=0,onPlay:d,onStop:m,onComplete:f,onRepeat:h,onUpdate:g}=n,w=sf(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:T}=w,x,z=0,b=w.duration,S,A=!1,N=!0,B;const F=RF(w);!((a=(t=F).needsInterpolation)===null||a===void 0)&&a.call(t,o,T)&&(B=kf([0,100],[o,T],{clamp:!1}),o=0,T=100);const K=F(Object.assign(Object.assign({},w),{from:o,to:T}));function ie(){z++,u==="reverse"?(N=z%2===0,r=NF(r,b,p,N)):(r=$f(r,b,p),u==="mirror"&&K.flipTarget()),A=!1,h&&h()}function me(){x.stop(),f&&f()}function X(ye){if(N||(ye=-ye),r+=ye,!A){const Te=K.next(Math.max(0,r));S=Te.value,B&&(S=B(S)),A=N?Te.done:r<=0}g==null||g(S),A&&(z===0&&(b??(b=r)),z<c?qF(r,b,p,N)&&ie():me())}function ve(){d==null||d(),x=l(X),x.start()}return i&&ve(),{stop:()=>{m==null||m(),x.stop()}}}function Lf(n,t){return t?n*(1e3/t):0}function WF({from:n=0,velocity:t=0,min:a,max:o,power:i=.8,timeConstant:l=750,bounceStiffness:r=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:p,driver:d,onUpdate:m,onComplete:f,onStop:h}){let g;function w(b){return a!==void 0&&b<a||o!==void 0&&b>o}function T(b){return a===void 0?o:o===void 0||Math.abs(a-b)<Math.abs(o-b)?a:o}function x(b){g==null||g.stop(),g=Mf(Object.assign(Object.assign({},b),{driver:d,onUpdate:S=>{var A;m==null||m(S),(A=b.onUpdate)===null||A===void 0||A.call(b,S)},onComplete:f,onStop:h}))}function z(b){x(Object.assign({type:"spring",stiffness:r,damping:c,restDelta:u},b))}if(w(n))z({from:n,velocity:t,to:T(n)});else{let b=i*t+n;typeof p<"u"&&(b=p(b));const S=T(b),A=S===a?-1:1;let N,B;const F=K=>{N=B,B=K,t=Lf(K-N,af().delta),(A===1&&K>S||A===-1&&K<S)&&z({from:K,to:S,velocity:t})};x({type:"decay",from:n,velocity:t,timeConstant:l,power:i,restDelta:u,modifyTarget:p,onUpdate:w(b)?F:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Ef=(n,t)=>1-3*t+3*n,Cf=(n,t)=>3*t-6*n,Af=n=>3*n,Go=(n,t,a)=>((Ef(t,a)*n+Cf(t,a))*n+Af(t))*n,If=(n,t,a)=>3*Ef(t,a)*n*n+2*Cf(t,a)*n+Af(t),DF=1e-7,jF=10;function BF(n,t,a,o,i){let l,r,c=0;do r=t+(a-t)/2,l=Go(r,o,i)-n,l>0?a=r:t=r;while(Math.abs(l)>DF&&++c<jF);return r}const VF=8,UF=.001;function KF(n,t,a,o){for(let i=0;i<VF;++i){const l=If(t,a,o);if(l===0)return t;const r=Go(t,a,o)-n;t-=r/l}return t}const xo=11,ho=1/(xo-1);function GF(n,t,a,o){if(n===t&&a===o)return wf;const i=new Float32Array(xo);for(let r=0;r<xo;++r)i[r]=Go(r*ho,n,a);function l(r){let c=0,u=1;const p=xo-1;for(;u!==p&&i[u]<=r;++u)c+=ho;--u;const d=(r-i[u])/(i[u+1]-i[u]),m=c+d*ho,f=If(m,n,a);return f>=UF?KF(r,m,n,a):f===0?m:BF(r,c,c+ho,n,a)}return r=>r===0||r===1?r:Go(l(r),t,o)}const Bi={};class QF{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,a,o){if(this.subscriptions.size)for(const i of this.subscriptions)i(t,a,o)}clear(){this.subscriptions.clear()}}function Zu(n){return!isNaN(parseFloat(n))}class JF{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new QF,this.canTrackVelocity=!1,this.updateAndNotify=a=>{this.prev=this.current,this.current=a;const{delta:o,timestamp:i}=af();this.lastUpdated!==i&&(this.timeDelta=o,this.lastUpdated=i),Vl.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Vl.postRender(this.velocityCheck),this.velocityCheck=({timestamp:a})=>{this.canTrackVelocity||(this.canTrackVelocity=Zu(this.current)),a!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Zu(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Lf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(a=>{const{stop:o}=t(a);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function ZF(n){return new JF(n)}const{isArray:YF}=Array;function XF(){const n=Y({}),t=o=>{const i=l=>{n.value[l]&&(n.value[l].stop(),n.value[l].destroy(),delete n.value[l])};o?YF(o)?o.forEach(i):i(o):Object.keys(n.value).forEach(i)},a=(o,i,l)=>{if(n.value[o])return n.value[o];const r=ZF(i);return r.onChange(c=>l[o]=c),n.value[o]=r,r};return B1(t),{motionValues:n,get:a,stop:t}}function eW(n){return Array.isArray(n)}function Qt(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Vi(n){return{type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function nW(n){return{type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}}function Ui(){return{type:"keyframes",ease:"linear",duration:300}}function tW(n){return{type:"keyframes",duration:800,values:n}}const Yu={default:nW,x:Qt,y:Qt,z:Qt,rotate:Qt,rotateX:Qt,rotateY:Qt,rotateZ:Qt,scaleX:Vi,scaleY:Vi,scale:Vi,backgroundColor:Ui,color:Ui,opacity:Ui};function Sf(n,t){let a;return eW(t)?a=tW:a=Yu[n]||Yu.default,{to:t,...a(t)}}const Xu={...Qs,transform:Math.round},Of={color:vn,backgroundColor:vn,outlineColor:vn,fill:vn,stroke:vn,borderColor:vn,borderTopColor:vn,borderRightColor:vn,borderBottomColor:vn,borderLeftColor:vn,borderWidth:we,borderTopWidth:we,borderRightWidth:we,borderBottomWidth:we,borderLeftWidth:we,borderRadius:we,radius:we,borderTopLeftRadius:we,borderTopRightRadius:we,borderBottomRightRadius:we,borderBottomLeftRadius:we,width:we,maxWidth:we,height:we,maxHeight:we,size:we,top:we,right:we,bottom:we,left:we,padding:we,paddingTop:we,paddingRight:we,paddingBottom:we,paddingLeft:we,margin:we,marginTop:we,marginRight:we,marginBottom:we,marginLeft:we,rotate:Gt,rotateX:Gt,rotateY:Gt,rotateZ:Gt,scale:fo,scaleX:fo,scaleY:fo,scaleZ:fo,skew:Gt,skewX:Gt,skewY:Gt,distance:we,translateX:we,translateY:we,translateZ:we,x:we,y:we,z:we,perspective:we,transformPerspective:we,opacity:bs,originX:Vu,originY:Vu,originZ:we,zIndex:Xu,filter:Jl,WebkitFilter:Jl,fillOpacity:bs,strokeOpacity:bs,numOctaves:Xu},Vr=n=>Of[n];function Hf(n,t){return t&&typeof n=="number"&&t.transform?t.transform(n):n}function aW(n,t){let a=Vr(n);return a!==Jl&&(a=Js),a.getAnimatableNone?a.getAnimatableNone(t):void 0}const sW={linear:wf,easeIn:jr,easeInOut:Tf,easeOut:TF,circIn:xf,circInOut:xF,circOut:zf,backIn:Br,backInOut:$F,backOut:zF,anticipate:MF,bounceIn:AF,bounceInOut:IF,bounceOut:Ko};function ep(n){if(Array.isArray(n)){const[t,a,o,i]=n;return GF(t,a,o,i)}else if(typeof n=="string")return sW[n];return n}function oW(n){return Array.isArray(n)&&typeof n[0]!="number"}function np(n,t){return n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Js.test(t)&&!t.startsWith("url("))}function iW(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function lW({ease:n,times:t,delay:a,...o}){const i={...o};return t&&(i.offset=t),n&&(i.ease=oW(n)?n.map(ep):ep(n)),a&&(i.elapsed=-a),i}function rW(n,t,a){return Array.isArray(t.to)&&(n.duration||(n.duration=800)),iW(t),cW(n)||(n={...n,...Sf(a,t.to)}),{...t,...lW(n)}}function cW({delay:n,repeat:t,repeatType:a,repeatDelay:o,from:i,...l}){return!!Object.keys(l).length}function uW(n,t){return n[t]||n.default||n}function pW(n,t,a,o,i){const l=uW(o,n);let r=l.from===null||l.from===void 0?t.get():l.from;const c=np(n,a);r==="none"&&c&&typeof a=="string"&&(r=aW(n,a));const u=np(n,r);function p(m){const f={from:r,to:a,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return l.type==="inertia"||l.type==="decay"?WF({...f,...l}):Mf({...rW(l,f,n),onUpdate:h=>{f.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),i&&i(),m&&m()}})}function d(m){return t.set(a),o.onComplete&&o.onComplete(),i&&i(),m&&m(),{stop:()=>{}}}return!u||!c||l.type===!1?d:p}function dW(){const{motionValues:n,stop:t,get:a}=XF();return{motionValues:n,stop:t,push:(i,l,r,c={},u)=>{const p=r[i],d=a(i,p,r);if(c&&c.immediate){d.set(l);return}const m=pW(i,d,l,c,u);d.start(m)}}}function mW(n,t={},{motionValues:a,push:o,stop:i}=dW()){const l=O(t),r=Y(!1);be(a,m=>{r.value=Object.values(m).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const c=m=>{if(!l||!l[m])throw new Error(`The variant ${m} does not exist.`);return l[m]},u=m=>(typeof m=="string"&&(m=c(m)),Promise.all(Object.entries(m).map(([f,h])=>{if(f!=="transition")return new Promise(g=>o(f,h,n,m.transition||Sf(f,m[f]),g))}).filter(Boolean)));return{isAnimating:r,apply:u,set:m=>{const f=bl(m)?m:c(m);Object.entries(f).forEach(([h,g])=>{h!=="transition"&&o(h,g,n,{immediate:!0})})},leave:async m=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){m();return}await u(f),m()},stop:i}}const Ur=typeof window<"u",fW=()=>Ur&&window.onpointerdown===null,hW=()=>Ur&&window.ontouchstart===null,gW=()=>Ur&&window.onmousedown===null;function _W({target:n,state:t,variants:a,apply:o}){const i=O(a),l=Y(!1),r=Y(!1),c=Y(!1),u=W(()=>{let d=[];return i&&(i.hovered&&(d=[...d,...Object.keys(i.hovered)]),i.tapped&&(d=[...d,...Object.keys(i.tapped)]),i.focused&&(d=[...d,...Object.keys(i.focused)])),d}),p=W(()=>{const d={};Object.assign(d,t.value),l.value&&i.hovered&&Object.assign(d,i.hovered),r.value&&i.tapped&&Object.assign(d,i.tapped),c.value&&i.focused&&Object.assign(d,i.focused);for(const m in d)u.value.includes(m)||delete d[m];return d});i.hovered&&(xe(n,"mouseenter",()=>l.value=!0),xe(n,"mouseleave",()=>{l.value=!1,r.value=!1}),xe(n,"mouseout",()=>{l.value=!1,r.value=!1})),i.tapped&&(gW()&&(xe(n,"mousedown",()=>r.value=!0),xe(n,"mouseup",()=>r.value=!1)),fW()&&(xe(n,"pointerdown",()=>r.value=!0),xe(n,"pointerup",()=>r.value=!1)),hW()&&(xe(n,"touchstart",()=>r.value=!0),xe(n,"touchend",()=>r.value=!1))),i.focused&&(xe(n,"focus",()=>c.value=!0),xe(n,"blur",()=>c.value=!1)),be(p,o)}function vW({set:n,target:t,variants:a,variant:o}){const i=O(a);be(()=>t,()=>{i&&(i.initial&&n("initial"),i.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function kW({state:n,apply:t}){be(n,a=>{a&&t(a)},{immediate:!0})}function bW({target:n,variants:t,variant:a}){const o=O(t);o&&(o.visible||o.visibleOnce)&&Rk(n,([{isIntersecting:i}])=>{o.visible?i?a.value="visible":a.value="initial":o.visibleOnce&&(i&&a.value!=="visibleOnce"?a.value="visibleOnce":a.value||(a.value="initial"))})}function yW(n,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&vW(n),t.syncVariants&&kW(n),t.visibilityHooks&&bW(n),t.eventListeners&&_W(n)}function Pf(n={}){const t=Be({...n}),a=Y({});return be(t,()=>{const o={};for(const[i,l]of Object.entries(t)){const r=Vr(i),c=Hf(l,r);o[i]=c}a.value=o},{immediate:!0,deep:!0}),{state:t,style:a}}function Kr(n,t){be(()=>ln(n),a=>{a&&t(a)},{immediate:!0})}const wW={x:"translateX",y:"translateY",z:"translateZ"};function Rf(n={},t=!0){const a=Be({...n}),o=Y("");return be(a,i=>{let l="",r=!1;if(t&&(i.x||i.y||i.z)){const c=[i.x||0,i.y||0,i.z||0].map(we.transform).join(",");l+=`translate3d(${c}) `,r=!0}for(const[c,u]of Object.entries(i)){if(t&&(c==="x"||c==="y"||c==="z"))continue;const p=Vr(c),d=Hf(u,p);l+=`${wW[c]||c}(${d}) `}t&&!r&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:a,transform:o}}const TW=["","X","Y","Z"],xW=["perspective","translate","scale","rotate","skew"],Nf=["transformPerspective","x","y","z"];xW.forEach(n=>{TW.forEach(t=>{const a=n+t;Nf.push(a)})});const zW=new Set(Nf);function Gr(n){return zW.has(n)}const $W=new Set(["originX","originY","originZ"]);function qf(n){return $W.has(n)}function MW(n){const t={},a={};return Object.entries(n).forEach(([o,i])=>{Gr(o)||qf(o)?t[o]=i:a[o]=i}),{transform:t,style:a}}function Ff(n){const{transform:t,style:a}=MW(n),{transform:o}=Rf(t),{style:i}=Pf(a);return o.value&&(i.value.transform=o.value),i.value}function LW(n,t){let a,o;const{state:i,style:l}=Pf();return Kr(n,r=>{o=r;for(const c of Object.keys(Of))r.style[c]===null||r.style[c]===""||Gr(c)||qf(c)||(i[c]=r.style[c]);a&&Object.entries(a).forEach(([c,u])=>r.style[c]=u),t&&t(i)}),be(l,r=>{if(!o){a=r;return}for(const c in r)o.style[c]=r[c]},{immediate:!0}),{style:i}}function EW(n){const t=n.trim().split(/\) |\)/);if(t.length===1)return{};const a=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,i)=>{if(!i)return o;const[l,r]=i.split("("),u=r.split(",").map(d=>a(d.endsWith(")")?d.replace(")",""):d.trim())),p=u.length===1?u[0]:u;return{...o,[l]:p}},{})}function CW(n,t){Object.entries(EW(t)).forEach(([a,o])=>{const i=["x","y","z"];if(a==="translate3d"){if(o===0){i.forEach(l=>n[l]=0);return}o.forEach((l,r)=>n[i[r]]=l);return}if(o=parseFloat(o),a==="translateX"){n.x=o;return}if(a==="translateY"){n.y=o;return}if(a==="translateZ"){n.z=o;return}n[a]=o})}function AW(n,t){let a,o;const{state:i,transform:l}=Rf();return Kr(n,r=>{o=r,r.style.transform&&CW(i,r.style.transform),a&&(r.style.transform=a),t&&t(i)}),be(l,r=>{if(!o){a=r;return}o.style.transform=r},{immediate:!0}),{transform:i}}function IW(n,t){const a=Be({}),o=r=>Object.entries(r).forEach(([c,u])=>a[c]=u),{style:i}=LW(n,o),{transform:l}=AW(n,o);return be(a,r=>{Object.entries(r).forEach(([c,u])=>{const p=Gr(c)?l:i;p[c]&&p[c]===u||(p[c]=u)})},{immediate:!0,deep:!0}),Kr(n,()=>t&&o(t)),{motionProperties:a,style:i,transform:l}}function SW(n={}){const t=O(n),a=Y();return{state:W(()=>{if(a.value)return t[a.value]}),variant:a}}function Wf(n,t={},a){const{motionProperties:o}=IW(n),{variant:i,state:l}=SW(t),r=mW(o,t),c={target:n,variant:i,variants:t,state:l,motionProperties:o,...r};return yW(c,a),c}const OW=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function HW(n,t){const a=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};a&&(a.variants&&bl(a.variants)&&(t.value={...t.value,...a.variants}),OW.forEach(o=>{if(o==="delay"){if(a&&a[o]&&typeof a[o]=="number"){const i=a[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:i,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:i,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:i,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),a&&a[o]&&bl(a[o])&&(t.value[o]=a[o])}))}function Ki(n){return{created:(a,o,i)=>{const l=o.value&&typeof o.value=="string"?o.value:i.key;l&&Bi[l]&&Bi[l].stop();const r=Y(n||{});typeof o.value=="object"&&(r.value=o.value),HW(i,r);const c=Wf(a,r);a.motionInstance=c,l&&(Bi[l]=c)},getSSRProps(a,o){let{initial:i}=a.value||o&&(o==null?void 0:o.props)||{};i=O(i);const l=Rq((n==null?void 0:n.initial)||{},i||{});return!l||Object.keys(l).length===0?void 0:{style:Ff(l)}}}}const PW={initial:{opacity:0},enter:{opacity:1}},RW={initial:{opacity:0},visible:{opacity:1}},NW={initial:{opacity:0},visibleOnce:{opacity:1}},qW={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},FW={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},WW={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},DW={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},jW={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},BW={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},VW={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},UW={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},KW={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},GW={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},QW={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},JW={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},ZW={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},YW={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},XW={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},eD={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},nD={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},tD={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},aD={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},sD={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},oD={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},iD={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},lD={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},rD={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},cD={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},uD={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},pD={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Zl={__proto__:null,fade:PW,fadeVisible:RW,fadeVisibleOnce:NW,pop:qW,popVisible:FW,popVisibleOnce:WW,rollBottom:ZW,rollLeft:DW,rollRight:VW,rollTop:GW,rollVisibleBottom:YW,rollVisibleLeft:jW,rollVisibleOnceBottom:XW,rollVisibleOnceLeft:BW,rollVisibleOnceRight:KW,rollVisibleOnceTop:JW,rollVisibleRight:UW,rollVisibleTop:QW,slideBottom:cD,slideLeft:eD,slideRight:aD,slideTop:iD,slideVisibleBottom:uD,slideVisibleLeft:nD,slideVisibleOnceBottom:pD,slideVisibleOnceLeft:tD,slideVisibleOnceRight:oD,slideVisibleOnceTop:rD,slideVisibleRight:sD,slideVisibleTop:lD},dD=Se({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var c;const t=Wg(),a=Be({});if(!n.is&&!t.default)return()=>Tn("div",{});const o=W(()=>{let u;return n.preset&&(u=Zl[n.preset]),u}),i=W(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),l=W(()=>{const u={...i.value,...o.value||{},...n.variants||{}};return n.delay&&(u.enter.transition={...u.enter.transition},u.enter.transition.delay=parseInt(n.delay)),u}),r=W(()=>{if(!n.is)return;let u=n.is;return typeof r.value=="string"&&!bp(u)&&(u=Ha(u)),u});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const u=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var m,f,h;(m=p.variants)!=null&&m.enter&&p.apply("enter"),(f=p.variants)!=null&&f.visible&&p.apply("visible"),(h=p.variants)!=null&&h.visibleOnce&&p.apply("visibleOnce")},10)};ri(()=>Object.entries(a).forEach(([p,d])=>u(d)))}return{slots:t,component:r,motionConfig:l,instances:a}},render({slots:n,motionConfig:t,instances:a,component:o}){var c;const i=Ff(t.initial||{}),l=(u,p)=>(u.props||(u.props={}),u.props.style=i,u.props.onVnodeMounted=({el:d})=>{const m=Wf(d,t);a[p]=m},u);if(o){const u=Tn(o,void 0,n);return l(u,0),u}return(((c=n.default)==null?void 0:c.call(n))||[]).map((u,p)=>l(u,p))}});function mD(n){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",a="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(o,i=>a.charAt(t.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const fD={install(n,t){if(n.directive("motion",Ki()),n.component("Motion",dD),!t||t&&!t.excludePresets)for(const a in Zl){const o=Zl[a];n.directive(`motion-${mD(a)}`,Ki(o))}if(t&&t.directives)for(const a in t.directives){const o=t.directives[a];o.initial,n.directive(`motion-${a}`,Ki(o))}}};var tp;const ws=typeof window<"u",hD=Object.prototype.toString,gD=n=>hD.call(n)==="[object Object]";ws&&((tp=window==null?void 0:window.navigator)!=null&&tp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function _D(n){return ar()?(xp(n),!0):!1}function vD(n){var t;const a=O(n);return(t=a==null?void 0:a.$el)!=null?t:a}const kD=ws?window:void 0,ap=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sp="__vueuse_ssr_handlers__";ap[sp]=ap[sp]||{};function bD(n,t={}){const{immediate:a=!0,window:o=kD}=t,i=Y(!1);let l=null;function r(){!i.value||!o||(n(),l=o.requestAnimationFrame(r))}function c(){!i.value&&o&&(i.value=!0,r())}function u(){i.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return a&&c(),_D(u),{isActive:i,pause:u,resume:c}}var op;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(op||(op={}));const gi="vue-starport-injection",Df="vue-starport-options",yD={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},jf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var wD=Object.defineProperty,Qo=Object.getOwnPropertySymbols,Bf=Object.prototype.hasOwnProperty,Vf=Object.prototype.propertyIsEnumerable,ip=(n,t,a)=>t in n?wD(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,TD=(n,t)=>{for(var a in t||(t={}))Bf.call(t,a)&&ip(n,a,t[a]);if(Qo)for(var a of Qo(t))Vf.call(t,a)&&ip(n,a,t[a]);return n},lp=(n,t)=>{var a={};for(var o in n)Bf.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&Qo)for(var o of Qo(n))t.indexOf(o)<0&&Vf.call(n,o)&&(a[o]=n[o]);return a};const xD=Se({name:"StarportProxy",props:TD({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},jf),setup(n,t){const a=$(gi),o=W(()=>a.getInstance(n.port,n.component)),i=Y(),l=o.value.generateId(),r=Y(!1);return o.value.isVisible||(o.value.land(),r.value=!0),bt(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${n.port}" detected. The later one will be ignored.`);return}if(o.value.el=i.value,await on(),r.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const c=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${n.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),js(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,r.value=!1,!o.value.options.keepAlive&&(await on(),await on(),!o.value.el&&a.dispose(o.value.port))}),be(()=>n,async()=>{o.value.props&&await on();const c=n,{props:u}=c,p=lp(c,["props"]);o.value.props=u||{},o.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=n,{initialProps:u,mountedProps:p}=c,d=lp(c,["initialProps","mountedProps"]),m=G(d,(r.value?p:u)||{});return Tn("div",G(m,{id:l,ref:i,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?Tn(t.slots.default):void 0)}}});var zD=Object.defineProperty,$D=Object.defineProperties,MD=Object.getOwnPropertyDescriptors,rp=Object.getOwnPropertySymbols,LD=Object.prototype.hasOwnProperty,ED=Object.prototype.propertyIsEnumerable,cp=(n,t,a)=>t in n?zD(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,CD=(n,t)=>{for(var a in t||(t={}))LD.call(t,a)&&cp(n,a,t[a]);if(rp)for(var a of rp(t))ED.call(t,a)&&cp(n,a,t[a]);return n},AD=(n,t)=>$D(n,MD(t));const ID=Se({name:"Starport",inheritAttrs:!0,props:jf,setup(n,t){const a=Y(!1);return bt(()=>{if(a.value=!0,!$(gi))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var r,c;const o=(c=(r=t.slots).default)==null?void 0:c.call(r);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const i=o[0];let l=i.type;return(!gD(l)||Ft(l))&&(l={render(){return o}}),Tn(xD,AD(CD({},n),{key:n.port,component:ni(l),props:i.props}))}}});function SD(n){const t=Be({height:0,width:0,left:0,top:0,update:o,listen:l,pause:r,margin:"0px",padding:"0px"}),a=ws?document.documentElement||document.body:void 0;function o(){if(!ws)return;const c=vD(n);if(!c)return;const{height:u,width:p,left:d,top:m}=c.getBoundingClientRect(),f=window.getComputedStyle(c),h=f.margin,g=f.padding;Object.assign(t,{height:u,width:p,left:d,top:a.scrollTop+m,margin:h,padding:g})}const i=bD(o,{immediate:!1});function l(){ws&&(o(),i.resume())}function r(){i.pause()}return t}let OD=(n,t=21)=>(a=t)=>{let o="",i=a;for(;i--;)o+=n[Math.random()*n.length|0];return o};const up=OD("abcdefghijklmnopqrstuvwxyz",5);function pp(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function HD(n){var t;return n.name||((t=n.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var PD=Object.defineProperty,dp=Object.getOwnPropertySymbols,RD=Object.prototype.hasOwnProperty,ND=Object.prototype.propertyIsEnumerable,mp=(n,t,a)=>t in n?PD(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,Gi=(n,t)=>{for(var a in t||(t={}))RD.call(t,a)&&mp(n,a,t[a]);if(dp)for(var a of dp(t))ND.call(t,a)&&mp(n,a,t[a]);return n};function qD(n,t,a={}){const o=HD(t),i=pp(o)||up(),l=Y(),r=Y(null),c=Y(!1),u=Y(!1),p=ch(!0),d=Y({}),m=W(()=>Gi(Gi(Gi({},yD),a),d.value)),f=Y(0);let h;p.run(()=>{h=SD(l),be(l,async x=>{x&&(u.value=!0),await on(),l.value||(u.value=!1)})});const g=pp(n);function w(){return`starport-${i}-${g}-${up()}`}const T=w();return Be({el:l,id:T,port:n,props:r,rect:h,scope:p,isLanded:c,isVisible:u,options:m,liftOffTime:f,component:t,componentName:o,componentId:i,generateId:w,setLocalOptions(x={}){d.value=JSON.parse(JSON.stringify(x))},elRef(){return l},liftOff(){c.value&&(c.value=!1,f.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function FD(n){const t=Be(new Map);function a(i,l){let r=t.get(i);return r||(r=qD(i,l,n),t.set(i,r)),r.component=l,r}function o(i){var l;(l=t.get(i))==null||l.scope.stop(),t.delete(i)}return{portMap:t,dispose:o,getInstance:a}}var WD=Object.defineProperty,DD=Object.defineProperties,jD=Object.getOwnPropertyDescriptors,fp=Object.getOwnPropertySymbols,BD=Object.prototype.hasOwnProperty,VD=Object.prototype.propertyIsEnumerable,hp=(n,t,a)=>t in n?WD(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,UD=(n,t)=>{for(var a in t||(t={}))BD.call(t,a)&&hp(n,a,t[a]);if(fp)for(var a of fp(t))VD.call(t,a)&&hp(n,a,t[a]);return n},KD=(n,t)=>DD(n,jD(t));const GD=Se({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const t=$(gi);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const a=W(()=>t.getInstance(n.port,n.component)),o=W(()=>{var r;return((r=a.value.el)==null?void 0:r.id)||a.value.id}),i=W(()=>{const r=Date.now()-a.value.liftOffTime,c=Math.max(0,a.value.options.duration-r),u=a.value.rect,p={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!a.value.isVisible||!a.value.el?KD(UD({},p),{zIndex:-1,display:"none"}):(a.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:a.value.options.easing}),p)}),l={onTransitionend(r){a.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${a.value.componentName}" is too short (${r.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${a.value.options.duration/1e3}s).`)}};return()=>{const r=!!(a.value.isLanded&&a.value.el);return Tn("div",{style:i.value,"data-starport-craft":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true",onTransitionend:a.value.land},Tn(h_,{to:r?`#${o.value}`:"body",disabled:!r},Tn(a.value.component,G(l,a.value.props))))}}}),QD=Se({name:"StarportCarrier",setup(n,{slots:t}){const a=FD($(Df,{}));return xn().appContext.app.provide(gi,a),()=>{var i;return[(i=t.default)==null?void 0:i.call(t),Array.from(a.portMap.entries()).map(([l,{component:r}])=>Tn(GD,{key:l,port:l,component:r}))]}}});function JD(n={}){return{install(t){t.provide(Df,n),t.component("Starport",ID),t.component("StarportCarrier",QD)}}}function ZD(n){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),n.app.use(fD),n.app.use(JD({keepAlive:!0}))}function $n(n,t,a){var o;return((o=n.instance)==null?void 0:o.$).provides[t]??a}function YD(){return{install(n){n.directive("click",{name:"v-click",mounted(t,a){var d,m,f,h,g,w;if(vs.value||(d=$n(a,fs))!=null&&d.value)return;const o=$n(a,na),i=$n(a,ms),l=$n(a,vl),r=a.modifiers.hide!==!1&&a.modifiers.hide!=null,c=a.modifiers.fade!==!1&&a.modifiers.fade!=null,u=((m=o==null?void 0:o.value)==null?void 0:m.length)||0,p=c?u1:Li;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),a.value==null&&(a.value=(h=o==null?void 0:o.value)==null?void 0:h.length),typeof a.value=="string"&&(a.value.startsWith("+")||a.value.startsWith("-"))&&(a.value=(((g=o==null?void 0:o.value)==null?void 0:g.length)||0)+Number(a.value)),!(l!=null&&l.value.has(a.value)))l==null||l.value.set(a.value,[t]);else if(!((w=l==null?void 0:l.value.get(a.value))!=null&&w.includes(t))){const T=(l==null?void 0:l.value.get(a.value))||[];l==null||l.value.set(a.value,[t].concat(T))}t==null||t.classList.toggle(Zt,!0),i&&be(i,()=>{const T=(i==null?void 0:i.value)??0,x=a.value!=null?T>=a.value:T>u;t.classList.contains(Ei)||t.classList.toggle(p,!x),r!==!1&&r!==void 0&&t.classList.toggle(p,x),t.classList.toggle(Qa,!1);const z=l==null?void 0:l.value.get(T);z==null||z.forEach((b,S)=>{b.classList.toggle(lo,!1),S===z.length-1?b.classList.toggle(Qa,!0):b.classList.toggle(lo,!0)}),t.classList.contains(Qa)||t.classList.toggle(lo,x)},{immediate:!0})},unmounted(t,a){t==null||t.classList.toggle(Zt,!1);const o=$n(a,na);o!=null&&o.value&&kl(o.value,t)}}),n.directive("after",{name:"v-after",mounted(t,a){var c,u,p;if(vs.value||(c=$n(a,fs))!=null&&c.value)return;const o=$n(a,na),i=$n(a,ms),l=$n(a,vl),r=o==null?void 0:o.value.length;a.value==null&&(a.value=o==null?void 0:o.value.length),typeof a.value=="string"&&(a.value.startsWith("+")||a.value.startsWith("-"))&&(a.value=(((u=o==null?void 0:o.value)==null?void 0:u.length)||0)+Number(a.value)),l!=null&&l.value.has(a.value)?(p=l==null?void 0:l.value.get(a.value))==null||p.push(t):l==null||l.value.set(a.value,[t]),t==null||t.classList.toggle(Zt,!0),i&&be(i,()=>{const d=(i.value??0)>=(a.value??r??0);t.classList.contains(Ei)||t.classList.toggle(Li,!d),t.classList.toggle(Qa,!1),t.classList.contains(Qa)||t.classList.toggle(lo,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Zt,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(t,a){var r,c,u;if(vs.value||(r=$n(a,fs))!=null&&r.value)return;const o=$n(a,na),i=$n(a,ms),l=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((u=o==null?void 0:o.value)!=null&&u.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Zt,!0),i&&be(i,()=>{const p=(i==null?void 0:i.value)??0,d=a.value!=null?p>=a.value:p>l;t.classList.toggle(Li,d),t.classList.toggle(Ei,d)},{immediate:!0})},unmounted(t,a){t==null||t.classList.toggle(Zt,!1);const o=$n(a,na);o!=null&&o.value&&kl(o.value,t)}})}}}function XD(n,t){const a=Jm(n),o=Zm(t,a.currentRoute,a.currentPage);return{nav:{...a,...o},configs:Ce,themeConfigs:W(()=>Ce.themeConfig)}}function ej(){return{install(n){const t=XD(Wn,Nn);n.provide(L,Be(t))}}}const ja=mv(Hq);ja.use(wn);ja.use(l1());ja.use(YD());ja.use(ej());ZD({app:ja,router:wn});ja.mount("#app");export{Hx as $,KT as A,Y as B,ij as C,mn as D,Ve as E,Ae as F,fy as G,Lq as H,Nn as I,Uo as J,Tq as K,qi as L,bt as M,Be as N,sj as O,lj as P,be as Q,v as R,Em as S,Ie as T,dn as U,My as V,nj as W,tj as X,Is as Y,Hi as Z,E as _,L as a,Er as a0,Cr as a1,Ue as a2,xx as a3,Lw as a4,aj as a5,Fn as a6,ts as a7,ia as a8,tt as a9,Al as aa,ny as ab,ty as ac,ay as ad,oy as ae,td as af,Sd as ag,rj as ah,gn as ai,mo as aj,cT as ak,Bd as al,iy as am,js as an,jd as b,Ce as c,Se as d,Gh as e,oe as f,e as g,O as h,$ as i,Qe as j,kq as k,s as l,C as m,tn as n,k as o,ke as p,Tr as q,Fa as r,Jn as s,bn as t,oj as u,W as v,Ci as w,M as x,ym as y,YT as z};
