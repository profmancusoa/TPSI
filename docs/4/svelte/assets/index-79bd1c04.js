(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function Dn(e,t){const n=Object.create(null),o=e.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const He=Object.freeze({}),Eo=Object.freeze([]),bt=()=>{},_d=()=>!1,qf=/^on[^a-z]/,Hi=e=>qf.test(e),xs=e=>e.startsWith("onUpdate:"),Ne=Object.assign,Za=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Uf=Object.prototype.hasOwnProperty,$e=(e,t)=>Uf.call(e,t),re=Array.isArray,ao=e=>Ni(e)==="[object Map]",vd=e=>Ni(e)==="[object Set]",Jf=e=>Ni(e)==="[object RegExp]",pe=e=>typeof e=="function",Fe=e=>typeof e=="string",Xa=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",er=e=>Ae(e)&&pe(e.then)&&pe(e.catch),gd=Object.prototype.toString,Ni=e=>gd.call(e),tr=e=>Ni(e).slice(8,-1),bd=e=>Ni(e)==="[object Object]",nr=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fs=Dn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qf=Dn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Qs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Yf=/-(\w)/g,nn=Qs(e=>e.replace(Yf,(t,n)=>n?n.toUpperCase():"")),Gf=/\B([A-Z])/g,_n=Qs(e=>e.replace(Gf,"-$1").toLowerCase()),_o=Qs(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qn=Qs(e=>e?`on${_o(e)}`:""),wi=(e,t)=>!Object.is(e,t),Gn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ks=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Zf=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Xf=e=>{const t=Fe(e)?Number(e):NaN;return isNaN(t)?e:t};let Zr;const $s=()=>Zr||(Zr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tt(e){if(re(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=Fe(o)?oh(o):tt(o);if(s)for(const l in s)t[l]=s[l]}return t}else{if(Fe(e))return e;if(Ae(e))return e}}const eh=/;(?![^(]*\))/g,th=/:([^]+)/,nh=/\/\*[^]*?\*\//g;function oh(e){const t={};return e.replace(nh,"").split(eh).forEach(n=>{if(n){const o=n.split(th);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Be(e){let t="";if(Fe(e))t=e;else if(re(e))for(let n=0;n<e.length;n++){const o=Be(e[n]);o&&(t+=o+" ")}else if(Ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function H(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Fe(t)&&(e.class=Be(t)),n&&(e.style=tt(n)),e}const ih="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",sh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",yd=Dn(ih),lh=Dn(sh),ah="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rh=Dn(ah);function Sd(e){return!!e||e===""}const gt=e=>Fe(e)?e:e==null?"":re(e)||Ae(e)&&(e.toString===gd||!pe(e.toString))?JSON.stringify(e,wd,2):String(e),wd=(e,t)=>t&&t.__v_isRef?wd(e,t.value):ao(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s])=>(n[`${o} =>`]=s,n),{})}:vd(t)?{[`Set(${t.size})`]:[...t.values()]}:Ae(t)&&!re(t)&&!bd(t)?String(t):t;function Is(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let $t;class xd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!t&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=$t;try{return $t=this,t()}finally{$t=n}}else Is("cannot run an inactive effect scope.")}on(){$t=this}off(){$t=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ch(e){return new xd(e)}function uh(e,t=$t){t&&t.active&&t.effects.push(e)}function or(){return $t}function kd(e){$t?$t.cleanups.push(e):Is("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ir=e=>{const t=new Set(e);return t.w=0,t.n=0,t},$d=e=>(e.w&Rn)>0,Id=e=>(e.n&Rn)>0,dh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Rn},ph=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const s=t[o];$d(s)&&!Id(s)?s.delete(e):t[n++]=s,s.w&=~Rn,s.n&=~Rn}t.length=n}},zs=new WeakMap;let ni=0,Rn=1;const Ql=30;let pt;const ro=Symbol("iterate"),Yl=Symbol("Map key iterate");class sr{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,uh(this,o)}run(){if(!this.active)return this.fn();let t=pt,n=Tn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=pt,pt=this,Tn=!0,Rn=1<<++ni,ni<=Ql?dh(this):Xr(this),this.fn()}finally{ni<=Ql&&ph(this),Rn=1<<--ni,pt=this.parent,Tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pt===this?this.deferStop=!0:this.active&&(Xr(this),this.onStop&&this.onStop(),this.active=!1)}}function Xr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Tn=!0;const zd=[];function go(){zd.push(Tn),Tn=!1}function bo(){const e=zd.pop();Tn=e===void 0?!0:e}function at(e,t,n){if(Tn&&pt){let o=zs.get(e);o||zs.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=ir()),Od(s,{effect:pt,target:e,type:t,key:n})}}function Od(e,t){let n=!1;ni<=Ql?Id(e)||(e.n|=Rn,n=!$d(e)):n=!e.has(pt),n&&(e.add(pt),pt.deps.push(e),pt.onTrack&&pt.onTrack(Ne({effect:pt},t)))}function on(e,t,n,o,s,l){const a=zs.get(e);if(!a)return;let r=[];if(t==="clear")r=[...a.values()];else if(n==="length"&&re(e)){const u=Number(o);a.forEach((p,m)=>{(m==="length"||m>=u)&&r.push(p)})}else switch(n!==void 0&&r.push(a.get(n)),t){case"add":re(e)?nr(n)&&r.push(a.get("length")):(r.push(a.get(ro)),ao(e)&&r.push(a.get(Yl)));break;case"delete":re(e)||(r.push(a.get(ro)),ao(e)&&r.push(a.get(Yl)));break;case"set":ao(e)&&r.push(a.get(ro));break}const c={target:e,type:t,key:n,newValue:o,oldValue:s,oldTarget:l};if(r.length===1)r[0]&&Gl(r[0],c);else{const u=[];for(const p of r)p&&u.push(...p);Gl(ir(u),c)}}function Gl(e,t){const n=re(e)?e:[...e];for(const o of n)o.computed&&ec(o,t);for(const o of n)o.computed||ec(o,t)}function ec(e,t){(e!==pt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ne({effect:e},t)),e.scheduler?e.scheduler():e.run())}function mh(e,t){var n;return(n=zs.get(e))==null?void 0:n.get(t)}const fh=Dn("__proto__,__v_isRef,__isVue"),Td=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xa)),hh=Ys(),_h=Ys(!1,!0),vh=Ys(!0),gh=Ys(!0,!0),tc=bh();function bh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=he(this);for(let l=0,a=this.length;l<a;l++)at(o,"get",l+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(he)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){go();const o=he(this)[t].apply(this,n);return bo(),o}}),e}function yh(e){const t=he(this);return at(t,"has",e),t.hasOwnProperty(e)}function Ys(e=!1,t=!1){return function(o,s,l){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&l===(e?t?Rd:Ld:t?Kd:Pd).get(o))return o;const a=re(o);if(!e){if(a&&$e(tc,s))return Reflect.get(tc,s,l);if(s==="hasOwnProperty")return yh}const r=Reflect.get(o,s,l);return(Xa(s)?Td.has(s):fh(s))||(e||at(o,"get",s),t)?r:Ce(r)?a&&nr(s)?r:r.value:Ae(r)?e?Vt(r):Ve(r):r}}const Sh=Ed(),wh=Ed(!0);function Ed(e=!1){return function(n,o,s,l){let a=n[o];if(Wn(a)&&Ce(a)&&!Ce(s))return!1;if(!e&&(!Os(s)&&!Wn(s)&&(a=he(a),s=he(s)),!re(n)&&Ce(a)&&!Ce(s)))return a.value=s,!0;const r=re(n)&&nr(o)?Number(o)<n.length:$e(n,o),c=Reflect.set(n,o,s,l);return n===he(l)&&(r?wi(s,a)&&on(n,"set",o,s,a):on(n,"add",o,s)),c}}function xh(e,t){const n=$e(e,t),o=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&on(e,"delete",t,void 0,o),s}function kh(e,t){const n=Reflect.has(e,t);return(!Xa(t)||!Td.has(t))&&at(e,"has",t),n}function $h(e){return at(e,"iterate",re(e)?"length":ro),Reflect.ownKeys(e)}const Cd={get:hh,set:Sh,deleteProperty:xh,has:kh,ownKeys:$h},Ad={get:vh,set(e,t){return Is(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Is(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Ih=Ne({},Cd,{get:_h,set:wh}),zh=Ne({},Ad,{get:gh}),lr=e=>e,Gs=e=>Reflect.getPrototypeOf(e);function Yi(e,t,n=!1,o=!1){e=e.__v_raw;const s=he(e),l=he(t);n||(t!==l&&at(s,"get",t),at(s,"get",l));const{has:a}=Gs(s),r=o?lr:n?ar:xi;if(a.call(s,t))return r(e.get(t));if(a.call(s,l))return r(e.get(l));e!==s&&e.get(t)}function Gi(e,t=!1){const n=this.__v_raw,o=he(n),s=he(e);return t||(e!==s&&at(o,"has",e),at(o,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Zi(e,t=!1){return e=e.__v_raw,!t&&at(he(e),"iterate",ro),Reflect.get(e,"size",e)}function nc(e){e=he(e);const t=he(this);return Gs(t).has.call(t,e)||(t.add(e),on(t,"add",e,e)),this}function oc(e,t){t=he(t);const n=he(this),{has:o,get:s}=Gs(n);let l=o.call(n,e);l?Md(n,o,e):(e=he(e),l=o.call(n,e));const a=s.call(n,e);return n.set(e,t),l?wi(t,a)&&on(n,"set",e,t,a):on(n,"add",e,t),this}function ic(e){const t=he(this),{has:n,get:o}=Gs(t);let s=n.call(t,e);s?Md(t,n,e):(e=he(e),s=n.call(t,e));const l=o?o.call(t,e):void 0,a=t.delete(e);return s&&on(t,"delete",e,void 0,l),a}function sc(){const e=he(this),t=e.size!==0,n=ao(e)?new Map(e):new Set(e),o=e.clear();return t&&on(e,"clear",void 0,void 0,n),o}function Xi(e,t){return function(o,s){const l=this,a=l.__v_raw,r=he(a),c=t?lr:e?ar:xi;return!e&&at(r,"iterate",ro),a.forEach((u,p)=>o.call(s,c(u),c(p),l))}}function es(e,t,n){return function(...o){const s=this.__v_raw,l=he(s),a=ao(l),r=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=s[e](...o),p=n?lr:t?ar:xi;return!t&&at(l,"iterate",c?Yl:ro),{next(){const{value:m,done:f}=u.next();return f?{value:m,done:f}:{value:r?[p(m[0]),p(m[1])]:p(m),done:f}},[Symbol.iterator](){return this}}}}function yn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${_o(e)} operation ${n}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function Oh(){const e={get(l){return Yi(this,l)},get size(){return Zi(this)},has:Gi,add:nc,set:oc,delete:ic,clear:sc,forEach:Xi(!1,!1)},t={get(l){return Yi(this,l,!1,!0)},get size(){return Zi(this)},has:Gi,add:nc,set:oc,delete:ic,clear:sc,forEach:Xi(!1,!0)},n={get(l){return Yi(this,l,!0)},get size(){return Zi(this,!0)},has(l){return Gi.call(this,l,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Xi(!0,!1)},o={get(l){return Yi(this,l,!0,!0)},get size(){return Zi(this,!0)},has(l){return Gi.call(this,l,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Xi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=es(l,!1,!1),n[l]=es(l,!0,!1),t[l]=es(l,!1,!0),o[l]=es(l,!0,!0)}),[e,n,t,o]}const[Th,Eh,Ch,Ah]=Oh();function Zs(e,t){const n=t?e?Ah:Ch:e?Eh:Th;return(o,s,l)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get($e(n,s)&&s in o?n:o,s,l)}const Mh={get:Zs(!1,!1)},Ph={get:Zs(!1,!0)},Kh={get:Zs(!0,!1)},Lh={get:Zs(!0,!0)};function Md(e,t,n){const o=he(n);if(o!==n&&t.call(e,o)){const s=tr(e);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Pd=new WeakMap,Kd=new WeakMap,Ld=new WeakMap,Rd=new WeakMap;function Rh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wh(e){return e.__v_skip||!Object.isExtensible(e)?0:Rh(tr(e))}function Ve(e){return Wn(e)?e:Xs(e,!1,Cd,Mh,Pd)}function Hh(e){return Xs(e,!1,Ih,Ph,Kd)}function Vt(e){return Xs(e,!0,Ad,Kh,Ld)}function oi(e){return Xs(e,!0,zh,Lh,Rd)}function Xs(e,t,n,o,s){if(!Ae(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=s.get(e);if(l)return l;const a=Wh(e);if(a===0)return e;const r=new Proxy(e,a===2?o:n);return s.set(e,r),r}function co(e){return Wn(e)?co(e.__v_raw):!!(e&&e.__v_isReactive)}function Wn(e){return!!(e&&e.__v_isReadonly)}function Os(e){return!!(e&&e.__v_isShallow)}function Ts(e){return co(e)||Wn(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function el(e){return ks(e,"__v_skip",!0),e}const xi=e=>Ae(e)?Ve(e):e,ar=e=>Ae(e)?Vt(e):e;function rr(e){Tn&&pt&&(e=he(e),Od(e.dep||(e.dep=ir()),{target:e,type:"get",key:"value"}))}function cr(e,t){e=he(e);const n=e.dep;n&&Gl(n,{target:e,type:"set",key:"value",newValue:t})}function Ce(e){return!!(e&&e.__v_isRef===!0)}function G(e){return Wd(e,!1)}function sn(e){return Wd(e,!0)}function Wd(e,t){return Ce(e)?e:new Nh(e,t)}class Nh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:he(t),this._value=n?t:xi(t)}get value(){return rr(this),this._value}set value(t){const n=this.__v_isShallow||Os(t)||Wn(t);t=n?t:he(t),wi(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:xi(t),cr(this,t))}}function M(e){return Ce(e)?e.value:e}const Dh={get:(e,t,n)=>M(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return Ce(s)&&!Ce(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function Hd(e){return co(e)?e:new Proxy(e,Dh)}class Fh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>rr(this),()=>cr(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function ur(e){return new Fh(e)}function jh(e){Ts(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=re(e)?new Array(e.length):{};for(const n in e)t[n]=Nd(e,n);return t}class Vh{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return mh(he(this._object),this._key)}}class Bh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function qh(e,t,n){return Ce(e)?e:pe(e)?new Bh(e):Ae(e)&&arguments.length>1?Nd(e,t,n):G(e)}function Nd(e,t,n){const o=e[t];return Ce(o)?o:new Vh(e,t,n)}class Uh{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new sr(t,()=>{this._dirty||(this._dirty=!0,cr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=he(this);return rr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Jh(e,t,n=!1){let o,s;const l=pe(e);l?(o=e,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,s=e.set);const a=new Uh(o,s,l||!s,n);return t&&!n&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}const uo=[];function hs(e){uo.push(e)}function _s(){uo.pop()}function V(e,...t){go();const n=uo.length?uo[uo.length-1].component:null,o=n&&n.appContext.config.warnHandler,s=Qh();if(o)hn(o,n,11,[e+t.join(""),n&&n.proxy,s.map(({vnode:l})=>`at <${ul(n,l.type)}>`).join(`
`),s]);else{const l=[`[Vue warn]: ${e}`,...t];s.length&&l.push(`
`,...Yh(s)),console.warn(...l)}bo()}function Qh(){let e=uo[uo.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function Yh(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...Gh(n))}),t}function Gh({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,s=` at <${ul(e.component,e.type,o)}`,l=">"+n;return e.props?[s,...Zh(e.props),l]:[s+l]}function Zh(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...Dd(o,e[o]))}),n.length>3&&t.push(" ..."),t}function Dd(e,t,n){return Fe(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Ce(t)?(t=Dd(e,he(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):pe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),n?t:[`${e}=`,t])}function Xh(e,t){e!==void 0&&(typeof e!="number"?V(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&V(`${t} is NaN - the duration expression might be incorrect.`))}const dr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function hn(e,t,n,o){let s;try{s=o?e(...o):e()}catch(l){tl(l,t,n)}return s}function Rt(e,t,n,o){if(pe(e)){const l=hn(e,t,n,o);return l&&er(l)&&l.catch(a=>{tl(a,t,n)}),l}const s=[];for(let l=0;l<e.length;l++)s.push(Rt(e[l],t,n,o));return s}function tl(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let l=t.parent;const a=t.proxy,r=dr[n];for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,a,r)===!1)return}l=l.parent}const c=t.appContext.config.errorHandler;if(c){hn(c,null,10,[e,a,r]);return}}e_(e,n,s,o)}function e_(e,t,n,o=!0){{const s=dr[t];if(n&&hs(n),V(`Unhandled error${s?` during execution of ${s}`:""}`),n&&_s(),o)throw e;console.error(e)}}let ki=!1,Zl=!1;const ot=[];let Zt=0;const Co=[];let Gt=null,kn=0;const Fd=Promise.resolve();let pr=null;const t_=100;function it(e){const t=pr||Fd;return e?t.then(this?e.bind(this):e):t}function n_(e){let t=Zt+1,n=ot.length;for(;t<n;){const o=t+n>>>1;$i(ot[o])<e?t=o+1:n=o}return t}function nl(e){(!ot.length||!ot.includes(e,ki&&e.allowRecurse?Zt+1:Zt))&&(e.id==null?ot.push(e):ot.splice(n_(e.id),0,e),jd())}function jd(){!ki&&!Zl&&(Zl=!0,pr=Fd.then(qd))}function o_(e){const t=ot.indexOf(e);t>Zt&&ot.splice(t,1)}function Vd(e){re(e)?Co.push(...e):(!Gt||!Gt.includes(e,e.allowRecurse?kn+1:kn))&&Co.push(e),jd()}function lc(e,t=ki?Zt+1:0){for(e=e||new Map;t<ot.length;t++){const n=ot[t];if(n&&n.pre){if(mr(e,n))continue;ot.splice(t,1),t--,n()}}}function Bd(e){if(Co.length){const t=[...new Set(Co)];if(Co.length=0,Gt){Gt.push(...t);return}for(Gt=t,e=e||new Map,Gt.sort((n,o)=>$i(n)-$i(o)),kn=0;kn<Gt.length;kn++)mr(e,Gt[kn])||Gt[kn]();Gt=null,kn=0}}const $i=e=>e.id==null?1/0:e.id,i_=(e,t)=>{const n=$i(e)-$i(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function qd(e){Zl=!1,ki=!0,e=e||new Map,ot.sort(i_);const t=n=>mr(e,n);try{for(Zt=0;Zt<ot.length;Zt++){const n=ot[Zt];if(n&&n.active!==!1){if(t(n))continue;hn(n,null,14)}}}finally{Zt=0,ot.length=0,Bd(e),ki=!1,pr=null,(ot.length||Co.length)&&qd(e)}}function mr(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>t_){const o=t.ownerInstance,s=o&&Oi(o.type);return V(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let En=!1;const Oo=new Set;$s().__VUE_HMR_RUNTIME__={createRecord:vl(Ud),rerender:vl(a_),reload:vl(r_)};const vo=new Map;function s_(e){const t=e.type.__hmrId;let n=vo.get(t);n||(Ud(t,e.type),n=vo.get(t)),n.instances.add(e)}function l_(e){vo.get(e.type.__hmrId).instances.delete(e)}function Ud(e,t){return vo.has(e)?!1:(vo.set(e,{initialDef:ci(t),instances:new Set}),!0)}function ci(e){return $p(e)?e.__vccOpts:e}function a_(e,t){const n=vo.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(o=>{t&&(o.render=t,ci(o.type).render=t),o.renderCache=[],En=!0,o.update(),En=!1}))}function r_(e,t){const n=vo.get(e);if(!n)return;t=ci(t),ac(n.initialDef,t);const o=[...n.instances];for(const s of o){const l=ci(s.type);Oo.has(l)||(l!==n.initialDef&&ac(l,t),Oo.add(l)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(Oo.add(l),s.ceReload(t.styles),Oo.delete(l)):s.parent?nl(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Vd(()=>{for(const s of o)Oo.delete(ci(s.type))})}function ac(e,t){Ne(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function vl(e){return(t,n)=>{try{return e(t,n)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Xt,ii=[],Xl=!1;function Di(e,...t){Xt?Xt.emit(e,...t):Xl||ii.push({event:e,args:t})}function Jd(e,t){var n,o;Xt=e,Xt?(Xt.enabled=!0,ii.forEach(({event:s,args:l})=>Xt.emit(s,...l)),ii=[]):typeof window<"u"&&window.HTMLElement&&!((o=(n=window.navigator)==null?void 0:n.userAgent)!=null&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Jd(l,t)}),setTimeout(()=>{Xt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Xl=!0,ii=[])},3e3)):(Xl=!0,ii=[])}function c_(e,t){Di("app:init",e,t,{Fragment:Ee,Text:Vi,Comment:mt,Static:ui})}function u_(e){Di("app:unmount",e)}const ea=fr("component:added"),Qd=fr("component:updated"),d_=fr("component:removed"),p_=e=>{Xt&&typeof Xt.cleanupBuffer=="function"&&!Xt.cleanupBuffer(e)&&d_(e)};function fr(e){return t=>{Di(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const m_=Yd("perf:start"),f_=Yd("perf:end");function Yd(e){return(t,n,o)=>{Di(e,t.appContext.app,t.uid,t,n,o)}}function h_(e,t,n){Di("component:emit",e.appContext.app,e,t,n)}function __(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||He;{const{emitsOptions:p,propsOptions:[m]}=e;if(p)if(!(t in p))(!m||!(Qn(t)in m))&&V(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qn(t)}" prop.`);else{const f=p[t];pe(f)&&(f(...n)||V(`Invalid event arguments: event validation failed for event "${t}".`))}}let s=n;const l=t.startsWith("update:"),a=l&&t.slice(7);if(a&&a in o){const p=`${a==="modelValue"?"model":a}Modifiers`,{number:m,trim:f}=o[p]||He;f&&(s=n.map(h=>Fe(h)?h.trim():h)),m&&(s=n.map(Zf))}h_(e,t,s);{const p=t.toLowerCase();p!==t&&o[Qn(p)]&&V(`Event "${p}" is emitted in component ${ul(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_n(t)}" instead of "${t}".`)}let r,c=o[r=Qn(t)]||o[r=Qn(nn(t))];!c&&l&&(c=o[r=Qn(_n(t))]),c&&Rt(c,e,6,s);const u=o[r+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Rt(u,e,6,s)}}function Gd(e,t,n=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const l=e.emits;let a={},r=!1;if(!pe(e)){const c=u=>{const p=Gd(u,t,!0);p&&(r=!0,Ne(a,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!r?(Ae(e)&&o.set(e,null),null):(re(l)?l.forEach(c=>a[c]=null):Ne(a,l),Ae(e)&&o.set(e,a),a)}function ol(e,t){return!e||!Hi(t)?!1:(t=t.slice(2).replace(/Once$/,""),$e(e,t[0].toLowerCase()+t.slice(1))||$e(e,_n(t))||$e(e,t))}let Ze=null,il=null;function Es(e){const t=Ze;return Ze=e,il=e&&e.type.__scopeId||null,t}function u9(e){il=e}function d9(){il=null}function $(e,t=Ze,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&Sc(-1);const l=Es(t);let a;try{a=e(...s)}finally{Es(l),o._d&&Sc(1)}return Qd(t),a};return o._n=!0,o._c=!0,o._d=!0,o}let ta=!1;function Cs(){ta=!0}function gl(e){const{type:t,vnode:n,proxy:o,withProxy:s,props:l,propsOptions:[a],slots:r,attrs:c,emit:u,render:p,renderCache:m,data:f,setupState:h,ctx:_,inheritAttrs:S}=e;let w,x;const k=Es(e);ta=!1;try{if(n.shapeFlag&4){const E=s||o;w=jt(p.call(E,E,m,l,h,f,_)),x=c}else{const E=t;c===l&&Cs(),w=jt(E.length>1?E(l,{get attrs(){return Cs(),c},slots:r,emit:u}):E(l,null)),x=t.props?c:g_(c)}}catch(E){di.length=0,tl(E,e,1),w=Q(mt)}let b=w,A;if(w.patchFlag>0&&w.patchFlag&2048&&([b,A]=v_(w)),x&&S!==!1){const E=Object.keys(x),{shapeFlag:P}=b;if(E.length){if(P&7)a&&E.some(xs)&&(x=b_(x,a)),b=ln(b,x);else if(!ta&&b.type!==mt){const j=Object.keys(c),L=[],q=[];for(let se=0,de=j.length;se<de;se++){const Z=j[se];Hi(Z)?xs(Z)||L.push(Z[2].toLowerCase()+Z.slice(3)):q.push(Z)}q.length&&V(`Extraneous non-props attributes (${q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),L.length&&V(`Extraneous non-emits event listeners (${L.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(rc(b)||V("Runtime directive used on component with non-element root node. The directives will not function as intended."),b=ln(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(rc(b)||V("Component inside <Transition> renders non-element root node that cannot be animated."),b.transition=n.transition),A?A(b):w=b,Es(k),w}const v_=e=>{const t=e.children,n=e.dynamicChildren,o=Zd(t);if(!o)return[e,void 0];const s=t.indexOf(o),l=n?n.indexOf(o):-1,a=r=>{t[s]=r,n&&(l>-1?n[l]=r:r.patchFlag>0&&(e.dynamicChildren=[...n,r]))};return[jt(o),a]};function Zd(e){let t;for(let n=0;n<e.length;n++){const o=e[n];if(Hn(o)){if(o.type!==mt||o.children==="v-if"){if(t)return;t=o}}else return}return t}const g_=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hi(n))&&((t||(t={}))[n]=e[n]);return t},b_=(e,t)=>{const n={};for(const o in e)(!xs(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n},rc=e=>e.shapeFlag&7||e.type===mt;function y_(e,t,n){const{props:o,children:s,component:l}=e,{props:a,children:r,patchFlag:c}=t,u=l.emitsOptions;if((s||r)&&En||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?cc(o,a,u):!!a;if(c&8){const p=t.dynamicProps;for(let m=0;m<p.length;m++){const f=p[m];if(a[f]!==o[f]&&!ol(u,f))return!0}}}else return(s||r)&&(!r||!r.$stable)?!0:o===a?!1:o?a?cc(o,a,u):!0:!!a;return!1}function cc(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const l=o[s];if(t[l]!==e[l]&&!ol(n,l))return!0}return!1}function S_({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Xd=e=>e.__isSuspense;function w_(e,t){t&&t.pendingBranch?re(e)?t.effects.push(...e):t.effects.push(e):Vd(e)}function yo(e,t){return sl(e,null,t)}function x_(e,t){return sl(e,null,Ne({},t,{flush:"post"}))}const ts={};function ve(e,t,n){return pe(t)||V("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),sl(e,t,n)}function sl(e,t,{immediate:n,deep:o,flush:s,onTrack:l,onTrigger:a}=He){var r;t||(n!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=E=>{V("Invalid watch source: ",E,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=or()===((r=Ge)==null?void 0:r.scope)?Ge:null;let p,m=!1,f=!1;if(Ce(e)?(p=()=>e.value,m=Os(e)):co(e)?(p=()=>e,o=!0):re(e)?(f=!0,m=e.some(E=>co(E)||Os(E)),p=()=>e.map(E=>{if(Ce(E))return E.value;if(co(E))return io(E);if(pe(E))return hn(E,u,2);c(E)})):pe(e)?t?p=()=>hn(e,u,2):p=()=>{if(!(u&&u.isUnmounted))return h&&h(),Rt(e,u,3,[_])}:(p=bt,c(e)),t&&o){const E=p;p=()=>io(E())}let h,_=E=>{h=b.onStop=()=>{hn(E,u,4)}},S;if(zi)if(_=bt,t?n&&Rt(t,u,3,[p(),f?[]:void 0,_]):p(),s==="sync"){const E=Cv();S=E.__watcherHandles||(E.__watcherHandles=[])}else return bt;let w=f?new Array(e.length).fill(ts):ts;const x=()=>{if(b.active)if(t){const E=b.run();(o||m||(f?E.some((P,j)=>wi(P,w[j])):wi(E,w)))&&(h&&h(),Rt(t,u,3,[E,w===ts?void 0:f&&w[0]===ts?[]:w,_]),w=E)}else b.run()};x.allowRecurse=!!t;let k;s==="sync"?k=x:s==="post"?k=()=>et(x,u&&u.suspense):(x.pre=!0,u&&(x.id=u.uid),k=()=>nl(x));const b=new sr(p,k);b.onTrack=l,b.onTrigger=a,t?n?x():w=b.run():s==="post"?et(b.run.bind(b),u&&u.suspense):b.run();const A=()=>{b.stop(),u&&u.scope&&Za(u.scope.effects,b)};return S&&S.push(A),A}function k_(e,t,n){const o=this.proxy,s=Fe(e)?e.includes(".")?ep(o,e):()=>o[e]:e.bind(o,o);let l;pe(t)?l=t:(l=t.handler,n=t);const a=Ge;Ko(this);const r=sl(s,l.bind(o),n);return a?Ko(a):mo(),r}function ep(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function io(e,t){if(!Ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ce(e))io(e.value,t);else if(re(e))for(let n=0;n<e.length;n++)io(e[n],t);else if(vd(e)||ao(e))e.forEach(n=>{io(n,t)});else if(bd(e))for(const n in e)io(e[n],t);return e}function tp(e){Qf(e)&&V("Do not use built-in directive ids as custom directive id: "+e)}function np(e,t){const n=Ze;if(n===null)return V("withDirectives can only be used inside render functions."),e;const o=cl(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[a,r,c,u=He]=t[l];a&&(pe(a)&&(a={mounted:a,updated:a}),a.deep&&io(r),s.push({dir:a,instance:o,value:r,oldValue:void 0,arg:c,modifiers:u}))}return e}function Vn(e,t,n,o){const s=e.dirs,l=t&&t.dirs;for(let a=0;a<s.length;a++){const r=s[a];l&&(r.oldValue=l[a].value);let c=r.dir[o];c&&(go(),Rt(c,n,8,[e.el,r,e,t]),bo())}}function $_(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bn(()=>{e.isMounted=!0}),Fi(()=>{e.isUnmounting=!0}),e}const At=[Function,Array],I_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:At,onEnter:At,onAfterEnter:At,onEnterCancelled:At,onBeforeLeave:At,onLeave:At,onAfterLeave:At,onLeaveCancelled:At,onBeforeAppear:At,onAppear:At,onAfterAppear:At,onAppearCancelled:At};function z_(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function na(e,t,n,o){const{appear:s,mode:l,persisted:a=!1,onBeforeEnter:r,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:m,onLeave:f,onAfterLeave:h,onLeaveCancelled:_,onBeforeAppear:S,onAppear:w,onAfterAppear:x,onAppearCancelled:k}=t,b=String(e.key),A=z_(n,e),E=(L,q)=>{L&&Rt(L,o,9,q)},P=(L,q)=>{const se=q[1];E(L,q),re(L)?L.every(de=>de.length<=1)&&se():L.length<=1&&se()},j={mode:l,persisted:a,beforeEnter(L){let q=r;if(!n.isMounted)if(s)q=S||r;else return;L._leaveCb&&L._leaveCb(!0);const se=A[b];se&&Zn(e,se)&&se.el._leaveCb&&se.el._leaveCb(),E(q,[L])},enter(L){let q=c,se=u,de=p;if(!n.isMounted)if(s)q=w||c,se=x||u,de=k||p;else return;let Z=!1;const _e=L._enterCb=ge=>{Z||(Z=!0,ge?E(de,[L]):E(se,[L]),j.delayedLeave&&j.delayedLeave(),L._enterCb=void 0)};q?P(q,[L,_e]):_e()},leave(L,q){const se=String(e.key);if(L._enterCb&&L._enterCb(!0),n.isUnmounting)return q();E(m,[L]);let de=!1;const Z=L._leaveCb=_e=>{de||(de=!0,q(),_e?E(_,[L]):E(h,[L]),L._leaveCb=void 0,A[se]===e&&delete A[se])};A[se]=e,f?P(f,[L,Z]):Z()},clone(L){return na(L,t,n,o)}};return j}function As(e,t){e.shapeFlag&6&&e.component?As(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function op(e,t=!1,n){let o=[],s=0;for(let l=0;l<e.length;l++){let a=e[l];const r=n==null?a.key:String(n)+String(a.key!=null?a.key:l);a.type===Ee?(a.patchFlag&128&&s++,o=o.concat(op(a.children,t,r))):(t||a.type!==mt)&&o.push(r!=null?ln(a,{key:r}):a)}if(s>1)for(let l=0;l<o.length;l++)o[l].patchFlag=-2;return o}function Me(e,t){return pe(e)?(()=>Ne({name:e.name},t,{setup:e}))():e}const Ao=e=>!!e.type.__asyncLoader,hr=e=>e.type.__isKeepAlive,O_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=wt(),o=n.ctx;if(!o.renderer)return()=>{const k=t.default&&t.default();return k&&k.length===1?k[0]:k};const s=new Map,l=new Set;let a=null;n.__v_cache=s;const r=n.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:m}}}=o,f=m("div");o.activate=(k,b,A,E,P)=>{const j=k.component;u(k,b,A,0,r),c(j.vnode,k,b,A,j,r,E,k.slotScopeIds,P),et(()=>{j.isDeactivated=!1,j.a&&Gn(j.a);const L=k.props&&k.props.onVnodeMounted;L&&Mt(L,j.parent,k)},r),ea(j)},o.deactivate=k=>{const b=k.component;u(k,f,null,1,r),et(()=>{b.da&&Gn(b.da);const A=k.props&&k.props.onVnodeUnmounted;A&&Mt(A,b.parent,k),b.isDeactivated=!0},r),ea(b)};function h(k){bl(k),p(k,n,r,!0)}function _(k){s.forEach((b,A)=>{const E=Oi(b.type);E&&(!k||!k(E))&&S(A)})}function S(k){const b=s.get(k);!a||!Zn(b,a)?h(b):a&&bl(a),s.delete(k),l.delete(k)}ve(()=>[e.include,e.exclude],([k,b])=>{k&&_(A=>si(k,A)),b&&_(A=>!si(b,A))},{flush:"post",deep:!0});let w=null;const x=()=>{w!=null&&s.set(w,yl(n.subTree))};return bn(x),al(x),Fi(()=>{s.forEach(k=>{const{subTree:b,suspense:A}=n,E=yl(b);if(k.type===E.type&&k.key===E.key){bl(E);const P=E.component.da;P&&et(P,A);return}h(k)})}),()=>{if(w=null,!t.default)return null;const k=t.default(),b=k[0];if(k.length>1)return V("KeepAlive should contain exactly one component child."),a=null,k;if(!Hn(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return a=null,b;let A=yl(b);const E=A.type,P=Oi(Ao(A)?A.type.__asyncResolved||{}:E),{include:j,exclude:L,max:q}=e;if(j&&(!P||!si(j,P))||L&&P&&si(L,P))return a=A,b;const se=A.key==null?E:A.key,de=s.get(se);return A.el&&(A=ln(A),b.shapeFlag&128&&(b.ssContent=A)),w=se,de?(A.el=de.el,A.component=de.component,A.transition&&As(A,A.transition),A.shapeFlag|=512,l.delete(se),l.add(se)):(l.add(se),q&&l.size>parseInt(q,10)&&S(l.values().next().value)),A.shapeFlag|=256,a=A,Xd(b.type)?b:A}}},ip=O_;function si(e,t){return re(e)?e.some(n=>si(n,t)):Fe(e)?e.split(",").includes(t):Jf(e)?e.test(t):!1}function sp(e,t){ap(e,"a",t)}function lp(e,t){ap(e,"da",t)}function ap(e,t,n=Ge){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ll(t,o,n),n){let s=n.parent;for(;s&&s.parent;)hr(s.parent.vnode)&&T_(o,t,n,s),s=s.parent}}function T_(e,t,n,o){const s=ll(t,e,o,!0);ji(()=>{Za(o[t],s)},n)}function bl(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function yl(e){return e.shapeFlag&128?e.ssContent:e}function ll(e,t,n=Ge,o=!1){if(n){const s=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;go(),Ko(n);const r=Rt(t,n,e,a);return mo(),bo(),r});return o?s.unshift(l):s.push(l),l}else{const s=Qn(dr[e].replace(/ hook$/,""));V(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const gn=e=>(t,n=Ge)=>(!zi||e==="sp")&&ll(e,(...o)=>t(...o),n),E_=gn("bm"),bn=gn("m"),C_=gn("bu"),al=gn("u"),Fi=gn("bum"),ji=gn("um"),A_=gn("sp"),M_=gn("rtg"),P_=gn("rtc");function K_(e,t=Ge){ll("ec",e,t)}const oa="components";function Ms(e,t){return R_(oa,e,!0,t)||e}const L_=Symbol.for("v-ndc");function R_(e,t,n=!0,o=!1){const s=Ze||Ge;if(s){const l=s.type;if(e===oa){const r=Oi(l,!1);if(r&&(r===t||r===nn(t)||r===_o(nn(t))))return l}const a=uc(s[e]||l[e],t)||uc(s.appContext[e],t);if(!a&&o)return l;if(n&&!a){const r=e===oa?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";V(`Failed to resolve ${e.slice(0,-1)}: ${t}${r}`)}return a}else V(`resolve${_o(e.slice(0,-1))} can only be used in render() or setup().`)}function uc(e,t){return e&&(e[t]||e[nn(t)]||e[_o(nn(t))])}function Ho(e,t,n,o){let s;const l=n&&n[o];if(re(e)||Fe(e)){s=new Array(e.length);for(let a=0,r=e.length;a<r;a++)s[a]=t(e[a],a,void 0,l&&l[a])}else if(typeof e=="number"){Number.isInteger(e)||V(`The v-for range expect an integer value but got ${e}.`),s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,l&&l[a])}else if(Ae(e))if(e[Symbol.iterator])s=Array.from(e,(a,r)=>t(a,r,void 0,l&&l[r]));else{const a=Object.keys(e);s=new Array(a.length);for(let r=0,c=a.length;r<c;r++){const u=a[r];s[r]=t(e[u],u,r,l&&l[r])}}else s=[];return n&&(n[o]=s),s}function qt(e,t,n={},o,s){if(Ze.isCE||Ze.parent&&Ao(Ze.parent)&&Ze.parent.isCE)return t!=="default"&&(n.name=t),Q("slot",n,o&&o());let l=e[t];l&&l.length>1&&(V("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),g();const a=l&&rp(l(n)),r=z(Ee,{key:n.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&e._===1?64:-2);return!s&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),l&&l._c&&(l._d=!0),r}function rp(e){return e.some(t=>Hn(t)?!(t.type===mt||t.type===Ee&&!rp(t.children)):!0)?e:null}const ia=e=>e?wp(e)?cl(e)||e.proxy:ia(e.parent):null,po=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>oi(e.props),$attrs:e=>oi(e.attrs),$slots:e=>oi(e.slots),$refs:e=>oi(e.refs),$parent:e=>ia(e.parent),$root:e=>ia(e.root),$emit:e=>e.emit,$options:e=>vr(e),$forceUpdate:e=>e.f||(e.f=()=>nl(e.update)),$nextTick:e=>e.n||(e.n=it.bind(e.proxy)),$watch:e=>k_.bind(e)}),_r=e=>e==="_"||e==="$",Sl=(e,t)=>e!==He&&!e.__isScriptSetup&&$e(e,t),cp={get({_:e},t){const{ctx:n,setupState:o,data:s,props:l,accessCache:a,type:r,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return l[t]}else{if(Sl(o,t))return a[t]=1,o[t];if(s!==He&&$e(s,t))return a[t]=2,s[t];if((u=e.propsOptions[0])&&$e(u,t))return a[t]=3,l[t];if(n!==He&&$e(n,t))return a[t]=4,n[t];sa&&(a[t]=0)}}const p=po[t];let m,f;if(p)return t==="$attrs"?(at(e,"get",t),Cs()):t==="$slots"&&at(e,"get",t),p(e);if((m=r.__cssModules)&&(m=m[t]))return m;if(n!==He&&$e(n,t))return a[t]=4,n[t];if(f=c.config.globalProperties,$e(f,t))return f[t];Ze&&(!Fe(t)||t.indexOf("__v")!==0)&&(s!==He&&_r(t[0])&&$e(s,t)?V(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ze&&V(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:o,setupState:s,ctx:l}=e;return Sl(s,t)?(s[t]=n,!0):s.__isScriptSetup&&$e(s,t)?(V(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==He&&$e(o,t)?(o[t]=n,!0):$e(e.props,t)?(V(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(V(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(l,t,{enumerable:!0,configurable:!0,value:n}):l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:l}},a){let r;return!!n[a]||e!==He&&$e(e,a)||Sl(t,a)||(r=l[0])&&$e(r,a)||$e(o,a)||$e(po,a)||$e(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$e(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};cp.ownKeys=e=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function W_(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(po).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>po[n](e),set:bt})}),t}function H_(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:bt})})}function N_(e){const{ctx:t,setupState:n}=e;Object.keys(he(n)).forEach(o=>{if(!n.__isScriptSetup){if(_r(o[0])){V(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n[o],set:bt})}})}function D_(){return F_().slots}function F_(){const e=wt();return e||V("useContext() called without active instance."),e.setupContext||(e.setupContext=kp(e))}function dc(e){return re(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function j_(){const e=Object.create(null);return(t,n)=>{e[n]?V(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let sa=!0;function V_(e){const t=vr(e),n=e.proxy,o=e.ctx;sa=!1,t.beforeCreate&&pc(t.beforeCreate,e,"bc");const{data:s,computed:l,methods:a,watch:r,provide:c,inject:u,created:p,beforeMount:m,mounted:f,beforeUpdate:h,updated:_,activated:S,deactivated:w,beforeDestroy:x,beforeUnmount:k,destroyed:b,unmounted:A,render:E,renderTracked:P,renderTriggered:j,errorCaptured:L,serverPrefetch:q,expose:se,inheritAttrs:de,components:Z,directives:_e,filters:ge}=t,Se=j_();{const[ne]=e.propsOptions;if(ne)for(const ce in ne)Se("Props",ce)}if(u&&B_(u,o,Se),a)for(const ne in a){const ce=a[ne];pe(ce)?(Object.defineProperty(o,ne,{value:ce.bind(n),configurable:!0,enumerable:!0,writable:!0}),Se("Methods",ne)):V(`Method "${ne}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(s){pe(s)||V("The data option must be a function. Plain object usage is no longer supported.");const ne=s.call(n,n);if(er(ne)&&V("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ae(ne))V("data() should return an object.");else{e.data=Ve(ne);for(const ce in ne)Se("Data",ce),_r(ce[0])||Object.defineProperty(o,ce,{configurable:!0,enumerable:!0,get:()=>ne[ce],set:bt})}}if(sa=!0,l)for(const ne in l){const ce=l[ne],ke=pe(ce)?ce.bind(n,n):pe(ce.get)?ce.get.bind(n,n):bt;ke===bt&&V(`Computed property "${ne}" has no getter.`);const Ke=!pe(ce)&&pe(ce.set)?ce.set.bind(n):()=>{V(`Write operation failed: computed property "${ne}" is readonly.`)},Et=R({get:ke,set:Ke});Object.defineProperty(o,ne,{enumerable:!0,configurable:!0,get:()=>Et.value,set:nt=>Et.value=nt}),Se("Computed",ne)}if(r)for(const ne in r)up(r[ne],o,n,ne);if(c){const ne=pe(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(ce=>{It(ce,ne[ce])})}p&&pc(p,e,"c");function Le(ne,ce){re(ce)?ce.forEach(ke=>ne(ke.bind(n))):ce&&ne(ce.bind(n))}if(Le(E_,m),Le(bn,f),Le(C_,h),Le(al,_),Le(sp,S),Le(lp,w),Le(K_,L),Le(P_,P),Le(M_,j),Le(Fi,k),Le(ji,A),Le(A_,q),re(se))if(se.length){const ne=e.exposed||(e.exposed={});se.forEach(ce=>{Object.defineProperty(ne,ce,{get:()=>n[ce],set:ke=>n[ce]=ke})})}else e.exposed||(e.exposed={});E&&e.render===bt&&(e.render=E),de!=null&&(e.inheritAttrs=de),Z&&(e.components=Z),_e&&(e.directives=_e)}function B_(e,t,n=bt){re(e)&&(e=la(e));for(const o in e){const s=e[o];let l;Ae(s)?"default"in s?l=I(s.from||o,s.default,!0):l=I(s.from||o):l=I(s),Ce(l)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>l.value,set:a=>l.value=a}):t[o]=l,n("Inject",o)}}function pc(e,t,n){Rt(re(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function up(e,t,n,o){const s=o.includes(".")?ep(n,o):()=>n[o];if(Fe(e)){const l=t[e];pe(l)?ve(s,l):V(`Invalid watch handler specified by key "${e}"`,l)}else if(pe(e))ve(s,e.bind(n));else if(Ae(e))if(re(e))e.forEach(l=>up(l,t,n,o));else{const l=pe(e.handler)?e.handler.bind(n):t[e.handler];pe(l)?ve(s,l,e):V(`Invalid watch handler specified by key "${e.handler}"`,l)}else V(`Invalid watch option: "${o}"`,e)}function vr(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:l,config:{optionMergeStrategies:a}}=e.appContext,r=l.get(t);let c;return r?c=r:!s.length&&!n&&!o?c=t:(c={},s.length&&s.forEach(u=>Ps(c,u,a,!0)),Ps(c,t,a)),Ae(t)&&l.set(t,c),c}function Ps(e,t,n,o=!1){const{mixins:s,extends:l}=t;l&&Ps(e,l,n,!0),s&&s.forEach(a=>Ps(e,a,n,!0));for(const a in t)if(o&&a==="expose")V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const r=q_[a]||n&&n[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const q_={data:mc,props:fc,emits:fc,methods:li,computed:li,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:li,directives:li,watch:J_,provide:mc,inject:U_};function mc(e,t){return t?e?function(){return Ne(pe(e)?e.call(this,this):e,pe(t)?t.call(this,this):t)}:t:e}function U_(e,t){return li(la(e),la(t))}function la(e){if(re(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ct(e,t){return e?[...new Set([].concat(e,t))]:t}function li(e,t){return e?Ne(Object.create(null),e,t):t}function fc(e,t){return e?re(e)&&re(t)?[...new Set([...e,...t])]:Ne(Object.create(null),dc(e),dc(t??{})):t}function J_(e,t){if(!e)return t;if(!t)return e;const n=Ne(Object.create(null),e);for(const o in t)n[o]=ct(e[o],t[o]);return n}function dp(){return{app:null,config:{isNativeTag:_d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Q_=0;function Y_(e,t){return function(o,s=null){pe(o)||(o=Ne({},o)),s!=null&&!Ae(s)&&(V("root props passed to app.mount() must be an object."),s=null);const l=dp();Object.defineProperty(l.config,"unwrapInjectedRef",{get(){return!0},set(){V("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const a=new Set;let r=!1;const c=l.app={_uid:Q_++,_component:o,_props:s,_container:null,_context:l,_instance:null,version:Ws,get config(){return l.config},set config(u){V("app.config cannot be replaced. Modify individual options instead.")},use(u,...p){return a.has(u)?V("Plugin has already been applied to target app."):u&&pe(u.install)?(a.add(u),u.install(c,...p)):pe(u)?(a.add(u),u(c,...p)):V('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return l.mixins.includes(u)?V("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):l.mixins.push(u),c},component(u,p){return da(u,l.config),p?(l.components[u]&&V(`Component "${u}" has already been registered in target app.`),l.components[u]=p,c):l.components[u]},directive(u,p){return tp(u),p?(l.directives[u]&&V(`Directive "${u}" has already been registered in target app.`),l.directives[u]=p,c):l.directives[u]},mount(u,p,m){if(r)V("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&V("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=Q(o,s);return f.appContext=l,l.reload=()=>{e(ln(f),u,m)},p&&t?t(f,u):e(f,u,m),r=!0,c._container=u,u.__vue_app__=c,c._instance=f.component,c_(c,Ws),cl(f.component)||f.component.proxy}},unmount(){r?(e(null,c._container),c._instance=null,u_(c),delete c._container.__vue_app__):V("Cannot unmount an app that is not mounted.")},provide(u,p){return u in l.provides&&V(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),l.provides[u]=p,c},runWithContext(u){Ks=c;try{return u()}finally{Ks=null}}};return c}}let Ks=null;function It(e,t){if(!Ge)V("provide() can only be used inside setup().");else{let n=Ge.provides;const o=Ge.parent&&Ge.parent.provides;o===n&&(n=Ge.provides=Object.create(o)),n[e]=t}}function I(e,t,n=!1){const o=Ge||Ze;if(o||Ks){const s=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Ks._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&pe(t)?t.call(o&&o.proxy):t;V(`injection "${String(e)}" not found.`)}else V("inject() can only be used inside setup() or functional components.")}function G_(e,t,n,o=!1){const s={},l={};ks(l,rl,1),e.propsDefaults=Object.create(null),pp(e,t,s,l);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);fp(t||{},s,e),n?e.props=o?s:Hh(s):e.type.props?e.props=s:e.props=l,e.attrs=l}function Z_(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function X_(e,t,n,o){const{props:s,attrs:l,vnode:{patchFlag:a}}=e,r=he(s),[c]=e.propsOptions;let u=!1;if(!Z_(e)&&(o||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let m=0;m<p.length;m++){let f=p[m];if(ol(e.emitsOptions,f))continue;const h=t[f];if(c)if($e(l,f))h!==l[f]&&(l[f]=h,u=!0);else{const _=nn(f);s[_]=aa(c,r,_,h,e,!1)}else h!==l[f]&&(l[f]=h,u=!0)}}}else{pp(e,t,s,l)&&(u=!0);let p;for(const m in r)(!t||!$e(t,m)&&((p=_n(m))===m||!$e(t,p)))&&(c?n&&(n[m]!==void 0||n[p]!==void 0)&&(s[m]=aa(c,r,m,void 0,e,!0)):delete s[m]);if(l!==r)for(const m in l)(!t||!$e(t,m))&&(delete l[m],u=!0)}u&&on(e,"set","$attrs"),fp(t||{},s,e)}function pp(e,t,n,o){const[s,l]=e.propsOptions;let a=!1,r;if(t)for(let c in t){if(fs(c))continue;const u=t[c];let p;s&&$e(s,p=nn(c))?!l||!l.includes(p)?n[p]=u:(r||(r={}))[p]=u:ol(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(l){const c=he(n),u=r||He;for(let p=0;p<l.length;p++){const m=l[p];n[m]=aa(s,c,m,u[m],e,!$e(u,m))}}return a}function aa(e,t,n,o,s,l){const a=e[n];if(a!=null){const r=$e(a,"default");if(r&&o===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&pe(c)){const{propsDefaults:u}=s;n in u?o=u[n]:(Ko(s),o=u[n]=c.call(null,t),mo())}else o=c}a[0]&&(l&&!r?o=!1:a[1]&&(o===""||o===_n(n))&&(o=!0))}return o}function mp(e,t,n=!1){const o=t.propsCache,s=o.get(e);if(s)return s;const l=e.props,a={},r=[];let c=!1;if(!pe(e)){const p=m=>{c=!0;const[f,h]=mp(m,t,!0);Ne(a,f),h&&r.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!l&&!c)return Ae(e)&&o.set(e,Eo),Eo;if(re(l))for(let p=0;p<l.length;p++){Fe(l[p])||V("props must be strings when using array syntax.",l[p]);const m=nn(l[p]);hc(m)&&(a[m]=He)}else if(l){Ae(l)||V("invalid props options",l);for(const p in l){const m=nn(p);if(hc(m)){const f=l[p],h=a[m]=re(f)||pe(f)?{type:f}:Ne({},f);if(h){const _=vc(Boolean,h.type),S=vc(String,h.type);h[0]=_>-1,h[1]=S<0||_<S,(_>-1||$e(h,"default"))&&r.push(m)}}}}const u=[a,r];return Ae(e)&&o.set(e,u),u}function hc(e){return e[0]!=="$"?!0:(V(`Invalid prop name: "${e}" is a reserved property.`),!1)}function ra(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function _c(e,t){return ra(e)===ra(t)}function vc(e,t){return re(t)?t.findIndex(n=>_c(n,e)):pe(t)&&_c(t,e)?0:-1}function fp(e,t,n){const o=he(t),s=n.propsOptions[0];for(const l in s){let a=s[l];a!=null&&ev(l,o[l],a,!$e(e,l)&&!$e(e,_n(l)))}}function ev(e,t,n,o){const{type:s,required:l,validator:a,skipCheck:r}=n;if(l&&o){V('Missing required prop: "'+e+'"');return}if(!(t==null&&!l)){if(s!=null&&s!==!0&&!r){let c=!1;const u=re(s)?s:[s],p=[];for(let m=0;m<u.length&&!c;m++){const{valid:f,expectedType:h}=nv(t,u[m]);p.push(h||""),c=f}if(!c){V(ov(e,t,p));return}}a&&!a(t)&&V('Invalid prop: custom validator check failed for prop "'+e+'".')}}const tv=Dn("String,Number,Boolean,Function,Symbol,BigInt");function nv(e,t){let n;const o=ra(t);if(tv(o)){const s=typeof e;n=s===o.toLowerCase(),!n&&s==="object"&&(n=e instanceof t)}else o==="Object"?n=Ae(e):o==="Array"?n=re(e):o==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:o}}function ov(e,t,n){let o=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(_o).join(" | ")}`;const s=n[0],l=tr(t),a=gc(t,s),r=gc(t,l);return n.length===1&&bc(s)&&!iv(s,l)&&(o+=` with value ${a}`),o+=`, got ${l} `,bc(l)&&(o+=`with value ${r}.`),o}function gc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function bc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function iv(...e){return e.some(t=>t.toLowerCase()==="boolean")}const hp=e=>e[0]==="_"||e==="$stable",gr=e=>re(e)?e.map(jt):[jt(e)],sv=(e,t,n)=>{if(t._n)return t;const o=$((...s)=>(Ge&&V(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),gr(t(...s))),n);return o._c=!1,o},_p=(e,t,n)=>{const o=e._ctx;for(const s in e){if(hp(s))continue;const l=e[s];if(pe(l))t[s]=sv(s,l,o);else if(l!=null){V(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const a=gr(l);t[s]=()=>a}}},vp=(e,t)=>{hr(e.vnode)||V("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=gr(t);e.slots.default=()=>n},lv=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=he(t),ks(t,"_",n)):_p(t,e.slots={})}else e.slots={},t&&vp(e,t);ks(e.slots,rl,1)},av=(e,t,n)=>{const{vnode:o,slots:s}=e;let l=!0,a=He;if(o.shapeFlag&32){const r=t._;r?En?(Ne(s,t),on(e,"set","$slots")):n&&r===1?l=!1:(Ne(s,t),!n&&r===1&&delete s._):(l=!t.$stable,_p(t,s)),a=t}else t&&(vp(e,t),a={default:1});if(l)for(const r in s)!hp(r)&&!(r in a)&&delete s[r]};function ca(e,t,n,o,s=!1){if(re(e)){e.forEach((f,h)=>ca(f,t&&(re(t)?t[h]:t),n,o,s));return}if(Ao(o)&&!s)return;const l=o.shapeFlag&4?cl(o.component)||o.component.proxy:o.el,a=s?null:l,{i:r,r:c}=e;if(!r){V("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,p=r.refs===He?r.refs={}:r.refs,m=r.setupState;if(u!=null&&u!==c&&(Fe(u)?(p[u]=null,$e(m,u)&&(m[u]=null)):Ce(u)&&(u.value=null)),pe(c))hn(c,r,12,[a,p]);else{const f=Fe(c),h=Ce(c);if(f||h){const _=()=>{if(e.f){const S=f?$e(m,c)?m[c]:p[c]:c.value;s?re(S)&&Za(S,l):re(S)?S.includes(l)||S.push(l):f?(p[c]=[l],$e(m,c)&&(m[c]=p[c])):(c.value=[l],e.k&&(p[e.k]=c.value))}else f?(p[c]=a,$e(m,c)&&(m[c]=a)):h?(c.value=a,e.k&&(p[e.k]=a)):V("Invalid template ref type:",c,`(${typeof c})`)};a?(_.id=-1,et(_,n)):_()}else V("Invalid template ref type:",c,`(${typeof c})`)}}let Vo,zn;function cn(e,t){e.appContext.config.performance&&Ls()&&zn.mark(`vue-${t}-${e.uid}`),m_(e,t,Ls()?zn.now():Date.now())}function un(e,t){if(e.appContext.config.performance&&Ls()){const n=`vue-${t}-${e.uid}`,o=n+":end";zn.mark(o),zn.measure(`<${ul(e,e.type)}> ${t}`,n,o),zn.clearMarks(n),zn.clearMarks(o)}f_(e,t,Ls()?zn.now():Date.now())}function Ls(){return Vo!==void 0||(typeof window<"u"&&window.performance?(Vo=!0,zn=window.performance):Vo=!1),Vo}function rv(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const et=w_;function cv(e){return uv(e)}function uv(e,t){rv();const n=$s();n.__VUE__=!0,Jd(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:o,remove:s,patchProp:l,createElement:a,createText:r,createComment:c,setText:u,setElementText:p,parentNode:m,nextSibling:f,setScopeId:h=bt,insertStaticContent:_}=e,S=(v,y,C,F=null,D=null,J=null,ee=!1,U=null,Y=En?!1:!!y.dynamicChildren)=>{if(v===y)return;v&&!Zn(v,y)&&(F=X(v),ht(v,D,J,!0),v=null),y.patchFlag===-2&&(Y=!1,y.dynamicChildren=null);const{type:B,ref:ae,shapeFlag:le}=y;switch(B){case Vi:w(v,y,C,F);break;case mt:x(v,y,C,F);break;case ui:v==null?k(y,C,F,ee):b(v,y,C,ee);break;case Ee:_e(v,y,C,F,D,J,ee,U,Y);break;default:le&1?P(v,y,C,F,D,J,ee,U,Y):le&6?ge(v,y,C,F,D,J,ee,U,Y):le&64||le&128?B.process(v,y,C,F,D,J,ee,U,Y,oe):V("Invalid VNode type:",B,`(${typeof B})`)}ae!=null&&D&&ca(ae,v&&v.ref,J,y||v,!y)},w=(v,y,C,F)=>{if(v==null)o(y.el=r(y.children),C,F);else{const D=y.el=v.el;y.children!==v.children&&u(D,y.children)}},x=(v,y,C,F)=>{v==null?o(y.el=c(y.children||""),C,F):y.el=v.el},k=(v,y,C,F)=>{[v.el,v.anchor]=_(v.children,y,C,F,v.el,v.anchor)},b=(v,y,C,F)=>{if(y.children!==v.children){const D=f(v.anchor);E(v),[y.el,y.anchor]=_(y.children,C,D,F)}else y.el=v.el,y.anchor=v.anchor},A=({el:v,anchor:y},C,F)=>{let D;for(;v&&v!==y;)D=f(v),o(v,C,F),v=D;o(y,C,F)},E=({el:v,anchor:y})=>{let C;for(;v&&v!==y;)C=f(v),s(v),v=C;s(y)},P=(v,y,C,F,D,J,ee,U,Y)=>{ee=ee||y.type==="svg",v==null?j(y,C,F,D,J,ee,U,Y):se(v,y,D,J,ee,U,Y)},j=(v,y,C,F,D,J,ee,U)=>{let Y,B;const{type:ae,props:le,shapeFlag:ue,transition:fe,dirs:Ie}=v;if(Y=v.el=a(v.type,J,le&&le.is,le),ue&8?p(Y,v.children):ue&16&&q(v.children,Y,null,F,D,J&&ae!=="foreignObject",ee,U),Ie&&Vn(v,null,F,"created"),L(Y,v,v.scopeId,ee,F),le){for(const We in le)We!=="value"&&!fs(We)&&l(Y,We,null,le[We],J,v.children,F,D,K);"value"in le&&l(Y,"value",null,le.value),(B=le.onVnodeBeforeMount)&&Mt(B,F,v)}Object.defineProperty(Y,"__vnode",{value:v,enumerable:!1}),Object.defineProperty(Y,"__vueParentComponent",{value:F,enumerable:!1}),Ie&&Vn(v,null,F,"beforeMount");const De=(!D||D&&!D.pendingBranch)&&fe&&!fe.persisted;De&&fe.beforeEnter(Y),o(Y,y,C),((B=le&&le.onVnodeMounted)||De||Ie)&&et(()=>{B&&Mt(B,F,v),De&&fe.enter(Y),Ie&&Vn(v,null,F,"mounted")},D)},L=(v,y,C,F,D)=>{if(C&&h(v,C),F)for(let J=0;J<F.length;J++)h(v,F[J]);if(D){let J=D.subTree;if(J.patchFlag>0&&J.patchFlag&2048&&(J=Zd(J.children)||J),y===J){const ee=D.vnode;L(v,ee,ee.scopeId,ee.slotScopeIds,D.parent)}}},q=(v,y,C,F,D,J,ee,U,Y=0)=>{for(let B=Y;B<v.length;B++){const ae=v[B]=U?$n(v[B]):jt(v[B]);S(null,ae,y,C,F,D,J,ee,U)}},se=(v,y,C,F,D,J,ee)=>{const U=y.el=v.el;let{patchFlag:Y,dynamicChildren:B,dirs:ae}=y;Y|=v.patchFlag&16;const le=v.props||He,ue=y.props||He;let fe;C&&Bn(C,!1),(fe=ue.onVnodeBeforeUpdate)&&Mt(fe,C,y,v),ae&&Vn(y,v,C,"beforeUpdate"),C&&Bn(C,!0),En&&(Y=0,ee=!1,B=null);const Ie=D&&y.type!=="foreignObject";if(B?(de(v.dynamicChildren,B,U,C,F,Ie,J),Rs(v,y)):ee||ke(v,y,U,null,C,F,Ie,J,!1),Y>0){if(Y&16)Z(U,y,le,ue,C,F,D);else if(Y&2&&le.class!==ue.class&&l(U,"class",null,ue.class,D),Y&4&&l(U,"style",le.style,ue.style,D),Y&8){const De=y.dynamicProps;for(let We=0;We<De.length;We++){const Ue=De[We],Nt=le[Ue],xo=ue[Ue];(xo!==Nt||Ue==="value")&&l(U,Ue,Nt,xo,D,v.children,C,F,K)}}Y&1&&v.children!==y.children&&p(U,y.children)}else!ee&&B==null&&Z(U,y,le,ue,C,F,D);((fe=ue.onVnodeUpdated)||ae)&&et(()=>{fe&&Mt(fe,C,y,v),ae&&Vn(y,v,C,"updated")},F)},de=(v,y,C,F,D,J,ee)=>{for(let U=0;U<y.length;U++){const Y=v[U],B=y[U],ae=Y.el&&(Y.type===Ee||!Zn(Y,B)||Y.shapeFlag&70)?m(Y.el):C;S(Y,B,ae,null,F,D,J,ee,!0)}},Z=(v,y,C,F,D,J,ee)=>{if(C!==F){if(C!==He)for(const U in C)!fs(U)&&!(U in F)&&l(v,U,C[U],null,ee,y.children,D,J,K);for(const U in F){if(fs(U))continue;const Y=F[U],B=C[U];Y!==B&&U!=="value"&&l(v,U,B,Y,ee,y.children,D,J,K)}"value"in F&&l(v,"value",C.value,F.value)}},_e=(v,y,C,F,D,J,ee,U,Y)=>{const B=y.el=v?v.el:r(""),ae=y.anchor=v?v.anchor:r("");let{patchFlag:le,dynamicChildren:ue,slotScopeIds:fe}=y;(En||le&2048)&&(le=0,Y=!1,ue=null),fe&&(U=U?U.concat(fe):fe),v==null?(o(B,C,F),o(ae,C,F),q(y.children,C,ae,D,J,ee,U,Y)):le>0&&le&64&&ue&&v.dynamicChildren?(de(v.dynamicChildren,ue,C,D,J,ee,U),Rs(v,y)):ke(v,y,C,ae,D,J,ee,U,Y)},ge=(v,y,C,F,D,J,ee,U,Y)=>{y.slotScopeIds=U,v==null?y.shapeFlag&512?D.ctx.activate(y,C,F,ee,Y):Se(y,C,F,D,J,ee,Y):Le(v,y,Y)},Se=(v,y,C,F,D,J,ee)=>{const U=v.component=Sv(v,F,D);if(U.type.__hmrId&&s_(U),hs(v),cn(U,"mount"),hr(v)&&(U.ctx.renderer=oe),cn(U,"init"),xv(U),un(U,"init"),U.asyncDep){if(D&&D.registerDep(U,ne),!v.el){const Y=U.subTree=Q(mt);x(null,Y,y,C)}return}ne(U,v,y,C,D,J,ee),_s(),un(U,"mount")},Le=(v,y,C)=>{const F=y.component=v.component;if(y_(v,y,C))if(F.asyncDep&&!F.asyncResolved){hs(y),ce(F,y,C),_s();return}else F.next=y,o_(F.update),F.update();else y.el=v.el,F.vnode=y},ne=(v,y,C,F,D,J,ee)=>{const U=()=>{if(v.isMounted){let{next:ae,bu:le,u:ue,parent:fe,vnode:Ie}=v,De=ae,We;hs(ae||v.vnode),Bn(v,!1),ae?(ae.el=Ie.el,ce(v,ae,ee)):ae=Ie,le&&Gn(le),(We=ae.props&&ae.props.onVnodeBeforeUpdate)&&Mt(We,fe,ae,Ie),Bn(v,!0),cn(v,"render");const Ue=gl(v);un(v,"render");const Nt=v.subTree;v.subTree=Ue,cn(v,"patch"),S(Nt,Ue,m(Nt.el),X(Nt),v,D,J),un(v,"patch"),ae.el=Ue.el,De===null&&S_(v,Ue.el),ue&&et(ue,D),(We=ae.props&&ae.props.onVnodeUpdated)&&et(()=>Mt(We,fe,ae,Ie),D),Qd(v),_s()}else{let ae;const{el:le,props:ue}=y,{bm:fe,m:Ie,parent:De}=v,We=Ao(y);if(Bn(v,!1),fe&&Gn(fe),!We&&(ae=ue&&ue.onVnodeBeforeMount)&&Mt(ae,De,y),Bn(v,!0),le&&Re){const Ue=()=>{cn(v,"render"),v.subTree=gl(v),un(v,"render"),cn(v,"hydrate"),Re(le,v.subTree,v,D,null),un(v,"hydrate")};We?y.type.__asyncLoader().then(()=>!v.isUnmounted&&Ue()):Ue()}else{cn(v,"render");const Ue=v.subTree=gl(v);un(v,"render"),cn(v,"patch"),S(null,Ue,C,F,v,D,J),un(v,"patch"),y.el=Ue.el}if(Ie&&et(Ie,D),!We&&(ae=ue&&ue.onVnodeMounted)){const Ue=y;et(()=>Mt(ae,De,Ue),D)}(y.shapeFlag&256||De&&Ao(De.vnode)&&De.vnode.shapeFlag&256)&&v.a&&et(v.a,D),v.isMounted=!0,ea(v),y=C=F=null}},Y=v.effect=new sr(U,()=>nl(B),v.scope),B=v.update=()=>Y.run();B.id=v.uid,Bn(v,!0),Y.onTrack=v.rtc?ae=>Gn(v.rtc,ae):void 0,Y.onTrigger=v.rtg?ae=>Gn(v.rtg,ae):void 0,B.ownerInstance=v,B()},ce=(v,y,C)=>{y.component=v;const F=v.vnode.props;v.vnode=y,v.next=null,X_(v,y.props,F,C),av(v,y.children,C),go(),lc(),bo()},ke=(v,y,C,F,D,J,ee,U,Y=!1)=>{const B=v&&v.children,ae=v?v.shapeFlag:0,le=y.children,{patchFlag:ue,shapeFlag:fe}=y;if(ue>0){if(ue&128){Et(B,le,C,F,D,J,ee,U,Y);return}else if(ue&256){Ke(B,le,C,F,D,J,ee,U,Y);return}}fe&8?(ae&16&&K(B,D,J),le!==B&&p(C,le)):ae&16?fe&16?Et(B,le,C,F,D,J,ee,U,Y):K(B,D,J,!0):(ae&8&&p(C,""),fe&16&&q(le,C,F,D,J,ee,U,Y))},Ke=(v,y,C,F,D,J,ee,U,Y)=>{v=v||Eo,y=y||Eo;const B=v.length,ae=y.length,le=Math.min(B,ae);let ue;for(ue=0;ue<le;ue++){const fe=y[ue]=Y?$n(y[ue]):jt(y[ue]);S(v[ue],fe,C,null,D,J,ee,U,Y)}B>ae?K(v,D,J,!0,!1,le):q(y,C,F,D,J,ee,U,Y,le)},Et=(v,y,C,F,D,J,ee,U,Y)=>{let B=0;const ae=y.length;let le=v.length-1,ue=ae-1;for(;B<=le&&B<=ue;){const fe=v[B],Ie=y[B]=Y?$n(y[B]):jt(y[B]);if(Zn(fe,Ie))S(fe,Ie,C,null,D,J,ee,U,Y);else break;B++}for(;B<=le&&B<=ue;){const fe=v[le],Ie=y[ue]=Y?$n(y[ue]):jt(y[ue]);if(Zn(fe,Ie))S(fe,Ie,C,null,D,J,ee,U,Y);else break;le--,ue--}if(B>le){if(B<=ue){const fe=ue+1,Ie=fe<ae?y[fe].el:F;for(;B<=ue;)S(null,y[B]=Y?$n(y[B]):jt(y[B]),C,Ie,D,J,ee,U,Y),B++}}else if(B>ue)for(;B<=le;)ht(v[B],D,J,!0),B++;else{const fe=B,Ie=B,De=new Map;for(B=Ie;B<=ue;B++){const rt=y[B]=Y?$n(y[B]):jt(y[B]);rt.key!=null&&(De.has(rt.key)&&V("Duplicate keys found during update:",JSON.stringify(rt.key),"Make sure keys are unique."),De.set(rt.key,B))}let We,Ue=0;const Nt=ue-Ie+1;let xo=!1,Qr=0;const jo=new Array(Nt);for(B=0;B<Nt;B++)jo[B]=0;for(B=fe;B<=le;B++){const rt=v[B];if(Ue>=Nt){ht(rt,D,J,!0);continue}let Yt;if(rt.key!=null)Yt=De.get(rt.key);else for(We=Ie;We<=ue;We++)if(jo[We-Ie]===0&&Zn(rt,y[We])){Yt=We;break}Yt===void 0?ht(rt,D,J,!0):(jo[Yt-Ie]=B+1,Yt>=Qr?Qr=Yt:xo=!0,S(rt,y[Yt],C,null,D,J,ee,U,Y),Ue++)}const Yr=xo?dv(jo):Eo;for(We=Yr.length-1,B=Nt-1;B>=0;B--){const rt=Ie+B,Yt=y[rt],Gr=rt+1<ae?y[rt+1].el:F;jo[B]===0?S(null,Yt,C,Gr,D,J,ee,U,Y):xo&&(We<0||B!==Yr[We]?nt(Yt,C,Gr,2):We--)}}},nt=(v,y,C,F,D=null)=>{const{el:J,type:ee,transition:U,children:Y,shapeFlag:B}=v;if(B&6){nt(v.component.subTree,y,C,F);return}if(B&128){v.suspense.move(y,C,F);return}if(B&64){ee.move(v,y,C,oe);return}if(ee===Ee){o(J,y,C);for(let le=0;le<Y.length;le++)nt(Y[le],y,C,F);o(v.anchor,y,C);return}if(ee===ui){A(v,y,C);return}if(F!==2&&B&1&&U)if(F===0)U.beforeEnter(J),o(J,y,C),et(()=>U.enter(J),D);else{const{leave:le,delayLeave:ue,afterLeave:fe}=U,Ie=()=>o(J,y,C),De=()=>{le(J,()=>{Ie(),fe&&fe()})};ue?ue(J,Ie,De):De()}else o(J,y,C)},ht=(v,y,C,F=!1,D=!1)=>{const{type:J,props:ee,ref:U,children:Y,dynamicChildren:B,shapeFlag:ae,patchFlag:le,dirs:ue}=v;if(U!=null&&ca(U,null,C,v,!0),ae&256){y.ctx.deactivate(v);return}const fe=ae&1&&ue,Ie=!Ao(v);let De;if(Ie&&(De=ee&&ee.onVnodeBeforeUnmount)&&Mt(De,y,v),ae&6)Ct(v.component,C,F);else{if(ae&128){v.suspense.unmount(C,F);return}fe&&Vn(v,null,y,"beforeUnmount"),ae&64?v.type.remove(v,y,C,D,oe,F):B&&(J!==Ee||le>0&&le&64)?K(B,y,C,!1,!0):(J===Ee&&le&384||!D&&ae&16)&&K(Y,y,C),F&&Qt(v)}(Ie&&(De=ee&&ee.onVnodeUnmounted)||fe)&&et(()=>{De&&Mt(De,y,v),fe&&Vn(v,null,y,"unmounted")},C)},Qt=v=>{const{type:y,el:C,anchor:F,transition:D}=v;if(y===Ee){v.patchFlag>0&&v.patchFlag&2048&&D&&!D.persisted?v.children.forEach(ee=>{ee.type===mt?s(ee.el):Qt(ee)}):jn(C,F);return}if(y===ui){E(v);return}const J=()=>{s(C),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(v.shapeFlag&1&&D&&!D.persisted){const{leave:ee,delayLeave:U}=D,Y=()=>ee(C,J);U?U(v.el,J,Y):Y()}else J()},jn=(v,y)=>{let C;for(;v!==y;)C=f(v),s(v),v=C;s(y)},Ct=(v,y,C)=>{v.type.__hmrId&&l_(v);const{bum:F,scope:D,update:J,subTree:ee,um:U}=v;F&&Gn(F),D.stop(),J&&(J.active=!1,ht(ee,v,y,C)),U&&et(U,y),et(()=>{v.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve()),p_(v)},K=(v,y,C,F=!1,D=!1,J=0)=>{for(let ee=J;ee<v.length;ee++)ht(v[ee],y,C,F,D)},X=v=>v.shapeFlag&6?X(v.component.subTree):v.shapeFlag&128?v.suspense.next():f(v.anchor||v.el),te=(v,y,C)=>{v==null?y._vnode&&ht(y._vnode,null,null,!0):S(y._vnode||null,v,y,null,null,null,C),lc(),Bd(),y._vnode=v},oe={p:S,um:ht,m:nt,r:Qt,mt:Se,mc:q,pc:ke,pbc:de,n:X,o:e};let xe,Re;return t&&([xe,Re]=t(oe)),{render:te,hydrate:xe,createApp:Y_(te,xe)}}function Bn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Rs(e,t,n=!1){const o=e.children,s=t.children;if(re(o)&&re(s))for(let l=0;l<o.length;l++){const a=o[l];let r=s[l];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=s[l]=$n(s[l]),r.el=a.el),n||Rs(a,r)),r.type===Vi&&(r.el=a.el),r.type===mt&&!r.el&&(r.el=a.el)}}function dv(e){const t=e.slice(),n=[0];let o,s,l,a,r;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(s=n[n.length-1],e[s]<u){t[o]=s,n.push(o);continue}for(l=0,a=n.length-1;l<a;)r=l+a>>1,e[n[r]]<u?l=r+1:a=r;u<e[n[l]]&&(l>0&&(t[o]=n[l-1]),n[l]=o)}}for(l=n.length,a=n[l-1];l-- >0;)n[l]=a,a=t[a];return n}const pv=e=>e.__isTeleport,Mo=e=>e&&(e.disabled||e.disabled===""),yc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ua=(e,t)=>{const n=e&&e.to;if(Fe(n))if(t){const o=t(n);return o||V(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return V("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Mo(e)&&V(`Invalid Teleport target: ${n}`),n},mv={__isTeleport:!0,process(e,t,n,o,s,l,a,r,c,u){const{mc:p,pc:m,pbc:f,o:{insert:h,querySelector:_,createText:S,createComment:w}}=u,x=Mo(t.props);let{shapeFlag:k,children:b,dynamicChildren:A}=t;if(En&&(c=!1,A=null),e==null){const E=t.el=w("teleport start"),P=t.anchor=w("teleport end");h(E,n,o),h(P,n,o);const j=t.target=ua(t.props,_),L=t.targetAnchor=S("");j?(h(L,j),a=a||yc(j)):x||V("Invalid Teleport target on mount:",j,`(${typeof j})`);const q=(se,de)=>{k&16&&p(b,se,de,s,l,a,r,c)};x?q(n,P):j&&q(j,L)}else{t.el=e.el;const E=t.anchor=e.anchor,P=t.target=e.target,j=t.targetAnchor=e.targetAnchor,L=Mo(e.props),q=L?n:P,se=L?E:j;if(a=a||yc(P),A?(f(e.dynamicChildren,A,q,s,l,a,r),Rs(e,t,!0)):c||m(e,t,q,se,s,l,a,r,!1),x)L||ns(t,n,E,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const de=t.target=ua(t.props,_);de?ns(t,de,null,u,0):V("Invalid Teleport target on update:",P,`(${typeof P})`)}else L&&ns(t,P,j,u,1)}gp(t)},remove(e,t,n,o,{um:s,o:{remove:l}},a){const{shapeFlag:r,children:c,anchor:u,targetAnchor:p,target:m,props:f}=e;if(m&&l(p),(a||!Mo(f))&&(l(u),r&16))for(let h=0;h<c.length;h++){const _=c[h];s(_,t,n,!0,!!_.dynamicChildren)}},move:ns,hydrate:fv};function ns(e,t,n,{o:{insert:o},m:s},l=2){l===0&&o(e.targetAnchor,t,n);const{el:a,anchor:r,shapeFlag:c,children:u,props:p}=e,m=l===2;if(m&&o(a,t,n),(!m||Mo(p))&&c&16)for(let f=0;f<u.length;f++)s(u[f],t,n,2);m&&o(r,t,n)}function fv(e,t,n,o,s,l,{o:{nextSibling:a,parentNode:r,querySelector:c}},u){const p=t.target=ua(t.props,c);if(p){const m=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Mo(t.props))t.anchor=u(a(e),t,r(e),n,o,s,l),t.targetAnchor=m;else{t.anchor=a(e);let f=m;for(;f;)if(f=a(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,p._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(m,t,p,n,o,s,l)}gp(t)}return t.anchor&&a(t.anchor)}const hv=mv;function gp(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ee=Symbol.for("v-fgt"),Vi=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),ui=Symbol.for("v-stc"),di=[];let Bt=null;function g(e=!1){di.push(Bt=e?null:[])}function _v(){di.pop(),Bt=di[di.length-1]||null}let Ii=1;function Sc(e){Ii+=e}function bp(e){return e.dynamicChildren=Ii>0?Bt||Eo:null,_v(),Ii>0&&Bt&&Bt.push(e),e}function ie(e,t,n,o,s,l){return bp(i(e,t,n,o,s,l,!0))}function z(e,t,n,o,s){return bp(Q(e,t,n,o,s,!0))}function Hn(e){return e?e.__v_isVNode===!0:!1}function Zn(e,t){return t.shapeFlag&6&&Oo.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const vv=(...e)=>gv(...e),rl="__vInternal",yp=({key:e})=>e??null,vs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Fe(e)||Ce(e)||pe(e)?{i:Ze,r:e,k:t,f:!!n}:e:null);function i(e,t=null,n=null,o=0,s=null,l=e===Ee?0:1,a=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yp(t),ref:t&&vs(t),scopeId:il,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return r?(br(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),c.key!==c.key&&V("VNode created with invalid key (NaN). VNode type:",c.type),Ii>0&&!a&&Bt&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Bt.push(c),c}const Q=vv;function gv(e,t=null,n=null,o=0,s=null,l=!1){if((!e||e===L_)&&(e||V(`Invalid vnode type when creating vnode: ${e}.`),e=mt),Hn(e)){const r=ln(e,t,!0);return n&&br(r,n),Ii>0&&!l&&Bt&&(r.shapeFlag&6?Bt[Bt.indexOf(e)]=r:Bt.push(r)),r.patchFlag|=-2,r}if($p(e)&&(e=e.__vccOpts),t){t=W(t);let{class:r,style:c}=t;r&&!Fe(r)&&(t.class=Be(r)),Ae(c)&&(Ts(c)&&!re(c)&&(c=Ne({},c)),t.style=tt(c))}const a=Fe(e)?1:Xd(e)?128:pv(e)?64:Ae(e)?4:pe(e)?2:0;return a&4&&Ts(e)&&(e=he(e),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),i(e,t,n,o,s,a,l,!0)}function W(e){return e?Ts(e)||rl in e?Ne({},e):e:null}function ln(e,t,n=!1){const{props:o,ref:s,patchFlag:l,children:a}=e,r=t?Te(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:r,key:r&&yp(r),ref:t&&t.ref?n&&s?re(s)?s.concat(vs(t)):[s,vs(t)]:vs(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l===-1&&re(a)?a.map(Sp):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ln(e.ssContent),ssFallback:e.ssFallback&&ln(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Sp(e){const t=ln(e);return re(e.children)&&(t.children=e.children.map(Sp)),t}function d(e=" ",t=0){return Q(Vi,null,e,t)}function ye(e="",t=!1){return t?(g(),z(mt,null,e)):Q(mt,null,e)}function jt(e){return e==null||typeof e=="boolean"?Q(mt):re(e)?Q(Ee,null,e.slice()):typeof e=="object"?$n(e):Q(Vi,null,String(e))}function $n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ln(e)}function br(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(re(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),br(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(rl in t)?t._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else pe(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),o&64?(n=16,t=[d(t)]):n=8);e.children=t,e.shapeFlag|=n}function Te(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=Be([t.class,o.class]));else if(s==="style")t.style=tt([t.style,o.style]);else if(Hi(s)){const l=t[s],a=o[s];a&&l!==a&&!(re(l)&&l.includes(a))&&(t[s]=l?[].concat(l,a):a)}else s!==""&&(t[s]=o[s])}return t}function Mt(e,t,n,o=null){Rt(e,t,7,[n,o])}const bv=dp();let yv=0;function Sv(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||bv,l={uid:yv++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mp(o,s),emitsOptions:Gd(o,s),emit:null,emitted:null,propsDefaults:He,inheritAttrs:o.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=W_(l),l.root=t?t.root:l,l.emit=__.bind(null,l),e.ce&&e.ce(l),l}let Ge=null;const wt=()=>Ge||Ze;let yr,ko,wc="__VUE_INSTANCE_SETTERS__";(ko=$s()[wc])||(ko=$s()[wc]=[]),ko.push(e=>Ge=e),yr=e=>{ko.length>1?ko.forEach(t=>t(e)):ko[0](e)};const Ko=e=>{yr(e),e.scope.on()},mo=()=>{Ge&&Ge.scope.off(),yr(null)},wv=Dn("slot,component");function da(e,t){const n=t.isNativeTag||_d;(wv(e)||n(e))&&V("Do not use built-in or reserved HTML elements as component id: "+e)}function wp(e){return e.vnode.shapeFlag&4}let zi=!1;function xv(e,t=!1){zi=t;const{props:n,children:o}=e.vnode,s=wp(e);G_(e,n,s,t),lv(e,o);const l=s?kv(e,t):void 0;return zi=!1,l}function kv(e,t){var n;const o=e.type;{if(o.name&&da(o.name,e.appContext.config),o.components){const l=Object.keys(o.components);for(let a=0;a<l.length;a++)da(l[a],e.appContext.config)}if(o.directives){const l=Object.keys(o.directives);for(let a=0;a<l.length;a++)tp(l[a])}o.compilerOptions&&$v()&&V('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=el(new Proxy(e.ctx,cp)),H_(e);const{setup:s}=o;if(s){const l=e.setupContext=s.length>1?kp(e):null;Ko(e),go();const a=hn(s,e,0,[oi(e.props),l]);if(bo(),mo(),er(a)){if(a.then(mo,mo),t)return a.then(r=>{xc(e,r,t)}).catch(r=>{tl(r,e,0)});if(e.asyncDep=a,!e.suspense){const r=(n=o.name)!=null?n:"Anonymous";V(`Component <${r}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else xc(e,a,t)}else xp(e,t)}function xc(e,t,n){pe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ae(t)?(Hn(t)&&V("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=Hd(t),N_(e)):t!==void 0&&V(`setup() should return an object. Received: ${t===null?"null":typeof t}`),xp(e,n)}let pa;const $v=()=>!pa;function xp(e,t,n){const o=e.type;if(!e.render){if(!t&&pa&&!o.render){const s=o.template||vr(e).template;if(s){cn(e,"compile");const{isCustomElement:l,compilerOptions:a}=e.appContext.config,{delimiters:r,compilerOptions:c}=o,u=Ne(Ne({isCustomElement:l,delimiters:r},a),c);o.render=pa(s,u),un(e,"compile")}}e.render=o.render||bt}Ko(e),go(),V_(e),bo(),mo(),!o.render&&e.render===bt&&!t&&(o.template?V('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):V("Component is missing template or render function."))}function Iv(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Cs(),at(e,"get","$attrs"),t[n]},set(){return V("setupContext.attrs is readonly."),!1},deleteProperty(){return V("setupContext.attrs is readonly."),!1}}))}function zv(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(t,n){return at(e,"get","$slots"),t[n]}}))}function kp(e){return Object.freeze({get attrs(){return Iv(e)},get slots(){return zv(e)},get emit(){return(n,...o)=>e.emit(n,...o)},expose:n=>{if(e.exposed&&V("expose() should be called only once per setup()."),n!=null){let o=typeof n;o==="object"&&(re(n)?o="array":Ce(n)&&(o="ref")),o!=="object"&&V(`expose() should be passed a plain object, received ${o}.`)}e.exposed=n||{}}})}function cl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hd(el(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in po)return po[n](e)},has(t,n){return n in t||n in po}}))}const Ov=/(?:^|[-_])(\w)/g,Tv=e=>e.replace(Ov,t=>t.toUpperCase()).replace(/[-_]/g,"");function Oi(e,t=!0){return pe(e)?e.displayName||e.name:e.name||t&&e.__name}function ul(e,t,n=!1){let o=Oi(t);if(!o&&t.__file){const s=t.__file.match(/([^/\\]+)\.\w+$/);s&&(o=s[1])}if(!o&&e&&e.parent){const s=l=>{for(const a in l)if(l[a]===t)return a};o=s(e.components||e.parent.type.components)||s(e.appContext.components)}return o?Tv(o):n?"App":"Anonymous"}function $p(e){return pe(e)&&"__vccOpts"in e}const R=(e,t)=>Jh(e,t,zi);function St(e,t,n){const o=arguments.length;return o===2?Ae(t)&&!re(t)?Hn(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Hn(n)&&(n=[n]),Q(e,t,n))}const Ev=Symbol.for("v-scx"),Cv=()=>{{const e=I(Ev);return e||V("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function wl(e){return!!(e&&e.__v_isShallow)}function Av(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},o={style:"color:#9d288c"},s={header(m){return Ae(m)?m.__isVue?["div",e,"VueInstance"]:Ce(m)?["div",{},["span",e,p(m)],"<",r(m.value),">"]:co(m)?["div",{},["span",e,wl(m)?"ShallowReactive":"Reactive"],"<",r(m),`>${Wn(m)?" (readonly)":""}`]:Wn(m)?["div",{},["span",e,wl(m)?"ShallowReadonly":"Readonly"],"<",r(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...l(m.$)]}};function l(m){const f=[];m.type.props&&m.props&&f.push(a("props",he(m.props))),m.setupState!==He&&f.push(a("setup",m.setupState)),m.data!==He&&f.push(a("data",he(m.data)));const h=c(m,"computed");h&&f.push(a("computed",h));const _=c(m,"inject");return _&&f.push(a("injected",_)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),f}function a(m,f){return f=Ne({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",o,h+": "],r(f[h],!1)])]]:["span",{}]}function r(m,f=!0){return typeof m=="number"?["span",t,m]:typeof m=="string"?["span",n,JSON.stringify(m)]:typeof m=="boolean"?["span",o,m]:Ae(m)?["object",{object:f?he(m):m}]:["span",n,String(m)]}function c(m,f){const h=m.type;if(pe(h))return;const _={};for(const S in m.ctx)u(h,S,f)&&(_[S]=m.ctx[S]);return _}function u(m,f,h){const _=m[h];if(re(_)&&_.includes(f)||Ae(_)&&f in _||m.extends&&u(m.extends,f,h)||m.mixins&&m.mixins.some(S=>u(S,f,h)))return!0}function p(m){return wl(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const Ws="3.3.4",Mv="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,kc=Xn&&Xn.createElement("template"),Pv={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t?Xn.createElementNS(Mv,e):Xn.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Xn.createTextNode(e),createComment:e=>Xn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,l){const a=n?n.previousSibling:t.lastChild;if(s&&(s===l||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===l||!(s=s.nextSibling)););else{kc.innerHTML=o?`<svg>${e}</svg>`:e;const r=kc.content;if(o){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Kv(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Lv(e,t,n){const o=e.style,s=Fe(n);if(n&&!s){if(t&&!Fe(t))for(const l in t)n[l]==null&&ma(o,l,"");for(const l in n)ma(o,l,n[l])}else{const l=o.display;s?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=l)}}const Rv=/[^\\];\s*$/,$c=/\s*!important$/;function ma(e,t,n){if(re(n))n.forEach(o=>ma(e,t,o));else if(n==null&&(n=""),Rv.test(n)&&V(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const o=Wv(e,t);$c.test(n)?e.setProperty(_n(o),n.replace($c,""),"important"):e[o]=n}}const Ic=["Webkit","Moz","ms"],xl={};function Wv(e,t){const n=xl[t];if(n)return n;let o=nn(t);if(o!=="filter"&&o in e)return xl[t]=o;o=_o(o);for(let s=0;s<Ic.length;s++){const l=Ic[s]+o;if(l in e)return xl[t]=l}return t}const zc="http://www.w3.org/1999/xlink";function Hv(e,t,n,o,s){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(zc,t.slice(6,t.length)):e.setAttributeNS(zc,t,n);else{const l=rh(t);n==null||l&&!Sd(n)?e.removeAttribute(t):e.setAttribute(t,l?"":n)}}function Nv(e,t,n,o,s,l,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,s,l),e[t]=n??"";return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){e._value=n;const u=r==="OPTION"?e.getAttribute("value"):e.value,p=n??"";u!==p&&(e.value=p),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Sd(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch(u){c||V(`Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,u)}c&&e.removeAttribute(t)}function Dv(e,t,n,o){e.addEventListener(t,n,o)}function Fv(e,t,n,o){e.removeEventListener(t,n,o)}function jv(e,t,n,o,s=null){const l=e._vei||(e._vei={}),a=l[t];if(o&&a)a.value=o;else{const[r,c]=Vv(t);if(o){const u=l[t]=Uv(o,s);Dv(e,r,u,c)}else a&&(Fv(e,r,a,c),l[t]=void 0)}}const Oc=/(?:Once|Passive|Capture)$/;function Vv(e){let t;if(Oc.test(e)){t={};let o;for(;o=e.match(Oc);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_n(e.slice(2)),t]}let kl=0;const Bv=Promise.resolve(),qv=()=>kl||(Bv.then(()=>kl=0),kl=Date.now());function Uv(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Rt(Jv(o,n.value),t,5,[o])};return n.value=e,n.attached=qv(),n}function Jv(e,t){if(re(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const Tc=/^on[a-z]/,Qv=(e,t,n,o,s=!1,l,a,r,c)=>{t==="class"?Kv(e,o,s):t==="style"?Lv(e,n,o):Hi(t)?xs(t)||jv(e,t,n,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Yv(e,t,o,s))?Nv(e,t,o,l,a,r,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Hv(e,t,o,s))};function Yv(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Tc.test(t)&&pe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Tc.test(t)&&Fe(n)?!1:t in e}function Gv(e){const t=wt();if(!t){V("useCssVars is called without current active component instance.");return}const n=t.ut=(s=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(l=>ha(l,s))},o=()=>{const s=e(t.proxy);fa(t.subTree,s),n(s)};x_(o),bn(()=>{const s=new MutationObserver(o);s.observe(t.subTree.el.parentNode,{childList:!0}),ji(()=>s.disconnect())})}function fa(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{fa(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)ha(e.el,t);else if(e.type===Ee)e.children.forEach(n=>fa(n,t));else if(e.type===ui){let{el:n,anchor:o}=e;for(;n&&(ha(n,t),n!==o);)n=n.nextSibling}}function ha(e,t){if(e.nodeType===1){const n=e.style;for(const o in t)n.setProperty(`--${o}`,t[o])}}const Sn="transition",Bo="animation",Ip={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Zv=Ne({},I_,Ip),qn=(e,t=[])=>{re(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ec=e=>e?re(e)?e.some(t=>t.length>1):e.length>1:!1;function Xv(e){const t={};for(const Z in e)Z in Ip||(t[Z]=e[Z]);if(e.css===!1)return t;const{name:n="v",type:o,duration:s,enterFromClass:l=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:u=a,appearToClass:p=r,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,_=eg(s),S=_&&_[0],w=_&&_[1],{onBeforeEnter:x,onEnter:k,onEnterCancelled:b,onLeave:A,onLeaveCancelled:E,onBeforeAppear:P=x,onAppear:j=k,onAppearCancelled:L=b}=t,q=(Z,_e,ge)=>{xn(Z,_e?p:r),xn(Z,_e?u:a),ge&&ge()},se=(Z,_e)=>{Z._isLeaving=!1,xn(Z,m),xn(Z,h),xn(Z,f),_e&&_e()},de=Z=>(_e,ge)=>{const Se=Z?j:k,Le=()=>q(_e,Z,ge);qn(Se,[_e,Le]),Cc(()=>{xn(_e,Z?c:l),dn(_e,Z?p:r),Ec(Se)||Ac(_e,o,S,Le)})};return Ne(t,{onBeforeEnter(Z){qn(x,[Z]),dn(Z,l),dn(Z,a)},onBeforeAppear(Z){qn(P,[Z]),dn(Z,c),dn(Z,u)},onEnter:de(!1),onAppear:de(!0),onLeave(Z,_e){Z._isLeaving=!0;const ge=()=>se(Z,_e);dn(Z,m),Op(),dn(Z,f),Cc(()=>{Z._isLeaving&&(xn(Z,m),dn(Z,h),Ec(A)||Ac(Z,o,w,ge))}),qn(A,[Z,ge])},onEnterCancelled(Z){q(Z,!1),qn(b,[Z])},onAppearCancelled(Z){q(Z,!0),qn(L,[Z])},onLeaveCancelled(Z){se(Z),qn(E,[Z])}})}function eg(e){if(e==null)return null;if(Ae(e))return[$l(e.enter),$l(e.leave)];{const t=$l(e);return[t,t]}}function $l(e){const t=Xf(e);return Xh(t,"<transition> explicit duration"),t}function dn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function xn(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Cc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let tg=0;function Ac(e,t,n,o){const s=e._endId=++tg,l=()=>{s===e._endId&&o()};if(n)return setTimeout(l,n);const{type:a,timeout:r,propCount:c}=zp(e,t);if(!a)return o();const u=a+"end";let p=0;const m=()=>{e.removeEventListener(u,f),l()},f=h=>{h.target===e&&++p>=c&&m()};setTimeout(()=>{p<c&&m()},r+1),e.addEventListener(u,f)}function zp(e,t){const n=window.getComputedStyle(e),o=_=>(n[_]||"").split(", "),s=o(`${Sn}Delay`),l=o(`${Sn}Duration`),a=Mc(s,l),r=o(`${Bo}Delay`),c=o(`${Bo}Duration`),u=Mc(r,c);let p=null,m=0,f=0;t===Sn?a>0&&(p=Sn,m=a,f=l.length):t===Bo?u>0&&(p=Bo,m=u,f=c.length):(m=Math.max(a,u),p=m>0?a>u?Sn:Bo:null,f=p?p===Sn?l.length:c.length:0);const h=p===Sn&&/\b(transform|all)(,|$)/.test(o(`${Sn}Property`).toString());return{type:p,timeout:m,propCount:f,hasTransform:h}}function Mc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Pc(n)+Pc(e[o])))}function Pc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Op(){return document.body.offsetHeight}const Tp=new WeakMap,Ep=new WeakMap,Cp={name:"TransitionGroup",props:Ne({},Zv,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=wt(),o=$_();let s,l;return al(()=>{if(!s.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!ag(s[0].el,n.vnode.el,a))return;s.forEach(ig),s.forEach(sg);const r=s.filter(lg);Op(),r.forEach(c=>{const u=c.el,p=u.style;dn(u,a),p.transform=p.webkitTransform=p.transitionDuration="";const m=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",m),u._moveCb=null,xn(u,a))};u.addEventListener("transitionend",m)})}),()=>{const a=he(e),r=Xv(a);let c=a.tag||Ee;s=l,l=t.default?op(t.default()):[];for(let u=0;u<l.length;u++){const p=l[u];p.key!=null?As(p,na(p,r,o,n)):V("<TransitionGroup> children must be keyed.")}if(s)for(let u=0;u<s.length;u++){const p=s[u];As(p,na(p,r,o,n)),Tp.set(p,p.el.getBoundingClientRect())}return Q(c,null,l)}}},ng=e=>delete e.mode;Cp.props;const og=Cp;function ig(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function sg(e){Ep.set(e,e.el.getBoundingClientRect())}function lg(e){const t=Tp.get(e),n=Ep.get(e),o=t.left-n.left,s=t.top-n.top;if(o||s){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${o}px,${s}px)`,l.transitionDuration="0s",e}}function ag(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(r=>r&&o.classList.remove(r))}),n.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(o);const{hasTransform:l}=zp(o);return s.removeChild(o),l}const rg=["ctrl","shift","alt","meta"],cg={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>rg.some(n=>e[`${n}Key`]&&!t.includes(n))},ug=(e,t)=>(n,...o)=>{for(let s=0;s<t.length;s++){const l=cg[t[s]];if(l&&l(n,t))return}return e(n,...o)},dg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},os=(e,t)=>n=>{if(!("key"in n))return;const o=_n(n.key);if(t.some(s=>s===o||dg[s]===o))return e(n)},Ap={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):qo(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),qo(e,!0),o.enter(e)):o.leave(e,()=>{qo(e,!1)}):qo(e,t))},beforeUnmount(e,{value:t}){qo(e,t)}};function qo(e,t){e.style.display=t?e._vod:"none"}const pg=Ne({patchProp:Qv},Pv);let Kc;function mg(){return Kc||(Kc=cv(pg))}const fg=(...e)=>{const t=mg().createApp(...e);hg(t),_g(t);const{mount:n}=t;return t.mount=o=>{const s=vg(o);if(!s)return;const l=t._component;!pe(l)&&!l.render&&!l.template&&(l.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function hg(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>yd(t)||lh(t),writable:!1})}function _g(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){V("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return V(o),n},set(){V(o)}})}}function vg(e){if(Fe(e)){const t=document.querySelector(e);return t||V(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&V('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function gg(){Av()}gg();function _a(e,t={},n){for(const o in e){const s=e[o],l=n?`${n}:${o}`:o;typeof s=="object"&&s!==null?_a(s,t,l):typeof s=="function"&&(t[l]=s)}return t}const bg={run:e=>e()},yg=()=>bg,Mp=typeof console.createTask<"u"?console.createTask:yg;function Sg(e,t){const n=t.shift(),o=Mp(n);return e.reduce((s,l)=>s.then(()=>o.run(()=>l(...t))),Promise.resolve())}function wg(e,t){const n=t.shift(),o=Mp(n);return Promise.all(e.map(s=>o.run(()=>s(...t))))}function Il(e,t){for(const n of[...e])n(t)}class xg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,o={}){if(!t||typeof n!="function")return()=>{};const s=t;let l;for(;this._deprecatedHooks[t];)l=this._deprecatedHooks[t],t=l.to;if(l&&!o.allowDeprecated){let a=l.message;a||(a=`${s} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let o,s=(...l)=>(typeof o=="function"&&o(),o=void 0,s=void 0,n(...l));return o=this.hook(t,s),o}removeHook(t,n){if(this._hooks[t]){const o=this._hooks[t].indexOf(n);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const o=this._hooks[t]||[];delete this._hooks[t];for(const s of o)this.hook(t,s)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=_a(t),o=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of o.splice(0,o.length))s()}}removeHooks(t){const n=_a(t);for(const o in n)this.removeHook(o,n[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Sg,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(wg,t,...n)}callHookWith(t,n,...o){const s=this._before||this._after?{name:n,args:o,context:{}}:void 0;this._before&&Il(this._before,s);const l=t(n in this._hooks?[...this._hooks[n]]:[],o);return l instanceof Promise?l.finally(()=>{this._after&&s&&Il(this._after,s)}):(this._after&&s&&Il(this._after,s),l)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function kg(){return new xg}function $g(e){return Array.isArray(e)?e:[e]}const Pp=["title","script","style","noscript"],Kp=["base","meta","link","style","script","noscript"],Ig=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],zg=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Og=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Lp(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function va(e){return Lp(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Tg(e){let t=9;for(const n of e)for(let o=0;o<n.length;)t=Math.imul(t^n.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Rp(e,t){const{props:n,tag:o}=e;if(zg.includes(o))return o;if(o==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];o==="meta"&&s.push("name","property","http-equiv");for(const l of s)if(typeof n[l]<"u"){const a=String(n[l]);return t&&!t(a)?!1:`${o}:${l}:${a}`}return!1}function Lc(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function is(e,t=!1,n){const{tag:o,$el:s}=e;s&&(Object.entries(o.props).forEach(([l,a])=>{a=String(a);const r=`attr:${l}`;if(l==="class"){if(!a)return;for(const c of a.split(" ")){const u=`${r}:${c}`;n&&n(e,u,()=>s.classList.remove(c)),s.classList.contains(c)||s.classList.add(c)}return}n&&!l.startsWith("data-h-")&&n(e,r,()=>s.removeAttribute(l)),(t||s.getAttribute(l)!==a)&&s.setAttribute(l,a)}),Pp.includes(o.tag)&&(o.textContent&&o.textContent!==s.textContent?s.textContent=o.textContent:o.innerHTML&&o.innerHTML!==s.innerHTML&&(s.innerHTML=o.innerHTML)))}let Uo=!1;async function Wp(e,t={}){var f,h;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const o=t.document||e.resolvedOptions.document||window.document,s=(await e.resolveTags()).map(r);if(e.resolvedOptions.experimentalHashHydration&&(Uo=Uo||e._hash||!1,Uo)){const _=Tg(s.map(S=>S.tag._h));if(Uo===_)return;Uo=_}const l=e._popSideEffectQueue();e.headEntries().map(_=>_._sde).forEach(_=>{Object.entries(_).forEach(([S,w])=>{l[S]=w})});const a=(_,S,w)=>{S=`${_.renderId}:${S}`,_.entry&&(_.entry._sde[S]=w),delete l[S]};function r(_){const S=e.headEntries().find(x=>x._i===_._e),w={renderId:_._d||va(_),$el:null,shouldRender:!0,tag:_,entry:S,markSideEffect:(x,k)=>a(w,x,k)};return w}const c=[],u={body:[],head:[]},p=_=>{e._elMap[_.renderId]=_.$el,c.push(_),a(_,"el",()=>{var S;(S=_.$el)==null||S.remove(),delete e._elMap[_.renderId]})};for(const _ of s){if(await e.hooks.callHook("dom:beforeRenderTag",_),!_.shouldRender)continue;const{tag:S}=_;if(S.tag==="title"){o.title=S.textContent||"",c.push(_);continue}if(S.tag==="htmlAttrs"||S.tag==="bodyAttrs"){_.$el=o[S.tag==="htmlAttrs"?"documentElement":"body"],is(_,!1,a),c.push(_);continue}if(_.$el=e._elMap[_.renderId],!_.$el&&S.key&&(_.$el=o.querySelector(`${(f=S.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${S.tag}[data-h-${S._h}]`)),_.$el){_.tag._d&&is(_),p(_);continue}u[(h=S.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(_)}const m={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([_,S])=>{var x;if(!S.length)return;const w=(x=o==null?void 0:o[_])==null?void 0:x.children;if(w){for(const k of[...w].reverse()){const b=k.tagName.toLowerCase();if(!Kp.includes(b))continue;const A=k.getAttributeNames().reduce((L,q)=>({...L,[q]:k.getAttribute(q)}),{}),E={tag:b,props:A};k.innerHTML&&(E.innerHTML=k.innerHTML);const P=va(E);let j=S.findIndex(L=>(L==null?void 0:L.renderId)===P);if(j===-1){const L=Rp(E);j=S.findIndex(q=>(q==null?void 0:q.tag._d)&&q.tag._d===L)}if(j!==-1){const L=S[j];L.$el=k,is(L),p(L),delete S[j]}}S.forEach(k=>{const b=k.tag.tagPosition||"head";m[b]=m[b]||o.createDocumentFragment(),k.$el||(k.$el=o.createElement(k.tag.tag),is(k,!0)),m[b].appendChild(k.$el),p(k)})}}),m.head&&o.head.appendChild(m.head),m.bodyOpen&&o.body.insertBefore(m.bodyOpen,o.body.firstChild),m.bodyClose&&o.body.appendChild(m.bodyClose);for(const _ of c)await e.hooks.callHook("dom:renderTag",_);Object.values(l).forEach(_=>_())}let zl=null;async function Hp(e,t={}){function n(){return zl=null,Wp(e,t)}const o=t.delayFn||(s=>setTimeout(s,10));return zl=zl||new Promise(s=>o(()=>s(n())))}function Eg(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Hp(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}}function Cg(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const Rc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Wc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in Rc?Rc[t]:10}const Ag=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Mg(){return{hooks:{"tags:resolve":e=>{const t=n=>{var o;return(o=e.tags.find(s=>s._d===n))==null?void 0:o._p};for(const{prefix:n,offset:o}of Ag)for(const s of e.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(n))){const l=t(s.tagPriority.replace(n,""));typeof l<"u"&&(s._p=l+o)}e.tags.sort((n,o)=>n._p-o._p).sort((n,o)=>Wc(n)-Wc(o))}}}}function Pg(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(s=>s.tag==="titleTemplate");const o=t.findIndex(s=>s.tag==="title");if(o!==-1&&n!==-1){const s=Lc(t[n].textContent,t[o].textContent);s!==null?t[o].textContent=s||t[o].textContent:delete t[o]}else if(n!==-1){const s=Lc(t[n].textContent);s!==null&&(t[n].textContent=s,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}}function Kg(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const Lg=["link","style","script","noscript"];function Rg(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=va(e)),e.key&&Lg.includes(e.tag)&&(e._h=Lp(e.key),e.props[`data-h-${e._h}`]="")}}}}const Hc=["script","link","bodyAttrs"];function Wg(){const e=(t,n)=>{const o={},s={};Object.entries(n.props).forEach(([a,r])=>{a.startsWith("on")&&typeof r=="function"?s[a]=r:o[a]=r});let l;return t==="dom"&&n.tag==="script"&&typeof o.src=="string"&&typeof s.onload<"u"&&(l=o.src,delete o.src),{props:o,eventHandlers:s,delayedSrc:l}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!Hc.includes(n.tag)||!Object.entries(n.props).find(([o,s])=>o.startsWith("on")&&typeof s=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!Hc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([l,a])=>l.startsWith("on")&&typeof a=="function"))return;const{props:n,eventHandlers:o,delayedSrc:s}=e("dom",t.tag);Object.keys(o).length&&(t.tag.props=n,t.tag._eventHandlers=o,t.tag._delayedSrc=s)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([s,l])=>{const a=`${t.tag._d||t.tag._p}:${s}`,r=s.slice(2).toLowerCase(),c=`data-h-${r}`;if(t.markSideEffect(a,()=>{}),n.hasAttribute(c))return;const u=l;n.setAttribute(c,""),o.addEventListener(r,u),t.entry&&(t.entry._sde[a]=()=>{o.removeEventListener(r,u),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}}const Hg=["templateParams","htmlAttrs","bodyAttrs"];function Ng(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(o=>{e.props[o]&&(e.key=e.props[o],delete e.props[o])});const n=Rp(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(o=>{const s=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,l=t[s];if(l){let r=o==null?void 0:o.tagDuplicateStrategy;if(!r&&Hg.includes(o.tag)&&(r="merge"),r==="merge"){const c=l.props;["class","style"].forEach(u=>{o.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),o.props[u]=`${c[u]} ${o.props[u]}`)}),t[s].props={...c,...o.props};return}else if(o._e===l._e){l._duped=l._duped||[],o._d=`${l._d}:${l._duped.length+1}`,l._duped.push(o);return}}const a=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(Kp.includes(o.tag)&&a===0){delete t[s];return}t[s]=o});const n=[];Object.values(t).forEach(o=>{const s=o._duped;delete o._duped,n.push(o),s&&n.push(...s)}),e.tags=n}}}}function ss(e,t){function n(l){if(["s","pageTitle"].includes(l))return t.pageTitle;let a;return l.includes(".")?a=l.split(".").reduce((r,c)=>r&&r[c]||void 0,t):a=t[l],typeof a<"u"?a||"":!1}let o=e;try{o=decodeURI(e)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const a=n(l.slice(1));typeof a=="string"&&(e=e.replace(new RegExp(`\\${l}(\\W|$)`,"g"),`${a}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function Dg(){return{hooks:{"tags:resolve":e=>{var l;const{tags:t}=e,n=(l=t.find(a=>a.tag==="title"))==null?void 0:l.textContent,o=t.findIndex(a=>a.tag==="templateParams"),s=o!==-1?t[o].props:{};s.pageTitle=s.pageTitle||n||"";for(const a of t)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=ss(a.textContent,s);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=ss(a.props.content,s);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=ss(a.props.href,s);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(r,c)=>typeof c=="string"?ss(c,s):c)}catch{}e.tags=t.filter(a=>a.tag!=="templateParams")}}}}const Fg=typeof window<"u";let Np;function jg(e){return Np=e}function Vg(){return Np}async function Bg(e,t){const n={tag:e,props:{}};return e==="templateParams"?(n.props=t,n):["title","titleTemplate"].includes(e)?(n.textContent=t instanceof Promise?await t:t,n):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?n.props.src=t:n.innerHTML=t,n):!1:(n.props=await Ug(e,{...t}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(o=>Og.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Pp.includes(n.tag))&&(n[o]=n.props[o]),delete n.props[o]}),["innerHTML","textContent"].forEach(o=>{if(n.tag==="script"&&typeof n[o]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[o]=JSON.parse(n[o])}catch{n[o]=""}typeof n[o]=="object"&&(n[o]=JSON.stringify(n[o]))}),n.props.class&&(n.props.class=qg(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(o=>({...n,props:{...n.props,content:o}})):n)}function qg(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Ug(e,t){for(const n of Object.keys(t)){const o=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=o?"true":"":String(t[n])==="false"&&(o?t[n]="false":delete t[n])}return t}const Jg=10;async function Qg(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,o])=>typeof o<"u"&&Ig.includes(n)).forEach(([n,o])=>{const s=$g(o);t.push(...s.map(l=>Bg(n,l)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,o)=>(n._e=e._i,n._p=(e._i<<Jg)+o,n))}function Yg(){return[Ng(),Mg(),Dg(),Pg(),Rg(),Wg(),Kg()]}function Gg(e={}){return[Eg({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function Zg(e={}){const t=Xg({...e,plugins:[...Gg(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Cg(t.resolvedOptions.document)),jg(t),t}function Xg(e={}){let t=[],n={},o=0;const s=kg();e!=null&&e.hooks&&s.addHooks(e.hooks),e.plugins=[...Yg(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(r=>r.hooks&&s.addHooks(r.hooks)),e.document=e.document||(Fg?document:void 0);const l=()=>s.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return t},get hooks(){return s},use(r){r.hooks&&s.addHooks(r.hooks)},push(r,c){const u={_i:o++,input:r,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),t.push(u),l(),{dispose(){t=t.filter(p=>p._i!==u._i?!0:(n={...n,...p._sde||{}},p._sde={},l(),!1))},patch(p){t=t.map(m=>(m._i===u._i&&(u.input=m.input=p,l()),m))}}},async resolveTags(){const r={tags:[],entries:[...t]};await s.callHook("entries:resolve",r);for(const c of r.entries){const u=c._t||(p=>p);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const p of await Qg(c)){const m={tag:p,entry:c,resolvedOptions:a.resolvedOptions};await s.callHook("tag:normalise",m),r.tags.push(m.tag)}}return await s.callHook("tags:resolve",r),r.tags},_popSideEffectQueue(){const r={...n};return n={},r},_elMap:{}};return a.hooks.callHook("init",a),a}function e1(e){return typeof e=="function"?e():M(e)}function Hs(e,t=""){if(e instanceof Promise)return e;const n=e1(e);return!e||!n?n:Array.isArray(n)?n.map(o=>Hs(o,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([o,s])=>o==="titleTemplate"||o.startsWith("on")?[o,M(s)]:[o,Hs(s,o)])):n}const t1=Ws.startsWith("3"),n1=typeof window<"u",Dp="usehead";function Sr(){return wt()&&I(Dp)||Vg()}function o1(e){return{install(n){t1&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Dp,e))}}.install}function i1(e={}){const t=Zg({...e,domDelayFn:n=>setTimeout(()=>it(()=>n()),10),plugins:[s1(),...(e==null?void 0:e.plugins)||[]]});return t.install=o1(t),t}function s1(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Hs(t.input)}}}}function l1(e,t={}){const n=Sr(),o=G(!1),s=G({});yo(()=>{s.value=o.value?{}:Hs(e)});const l=n.push(s.value,t);return ve(s,r=>{l.patch(r)}),wt()&&(Fi(()=>{l.dispose()}),lp(()=>{o.value=!0}),sp(()=>{o.value=!1})),l}function a1(e,t={}){return Sr().push(e,t)}function Fp(e,t={}){var o;const n=Sr();if(n){const s=n1||!!((o=n.resolvedOptions)!=null&&o.document);return t.mode==="server"&&s||t.mode==="client"&&!s?void 0:s?l1(e,t):a1(e,t)}}function r1(e,t){const n=i1(t||{}),o={unhead:n,install(s){Ws.startsWith("3")&&(s.config.globalProperties.$head=n,s.provide("usehead",n))},use(s){n.use(s)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(s,l){return n.push(s,l)},addEntry(s,l){return n.push(s,l)},addHeadObjs(s,l){return n.push(s,l)},addReactiveEntry(s,l){const a=Fp(s,l);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,l){l?Wp(n,{document:s}):Hp(n,{delayFn:a=>setTimeout(()=>a(),50),document:s})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=o.addHeadObjs,n.updateDOM=o.updateDOM,n.hooks.hook("dom:beforeRender",s=>{for(const l of o.hooks["before:dom"])l()===!1&&(s.shouldRender=!1)}),e&&o.addHeadObjs(e),o}const pi=Symbol("v-click-clicks"),eo=Symbol("v-click-clicks-elements"),ga=Symbol("v-click-clicks-order-map"),mi=Symbol("v-click-clicks-disabled"),jp=Symbol("slidev-slide-scale"),O=Symbol("slidev-slidev-context"),c1=Symbol("slidev-route"),u1=Symbol("slidev-slide-context"),Yn="slidev-vclick-target",Ol="slidev-vclick-hidden",d1="slidev-vclick-fade",Tl="slidev-vclick-hidden-explicitly",Jo="slidev-vclick-current",ls="slidev-vclick-prior",p1=["localhost","127.0.0.1"];let m1=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function ba(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function f1(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const s=[];let l=t;for(;l<n;)s.push(l),l+=o||1;return s}function h1(e){return e!=null}function _1(e,t){return Object.fromEntries(Object.entries(e).map(([n,o])=>t(n,o)).filter(h1))}const ai={theme:"default",title:"Svelte e SvelteKit",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",as:"2023/2024",version:"1.1.2"},Oe=ai,Cn=Oe.aspectRatio??16/9,An=Oe.canvasWidth??980,wr=Math.ceil(An/Cn),xr=R(()=>_1(Oe.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Vp(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Ht(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const So=Ve({page:0,clicks:0});let v1=[],g1=[];Ht(So,"$syncUp",!0);Ht(So,"$syncDown",!0);Ht(So,"$paused",!1);Ht(So,"$onSet",e=>v1.push(e));Ht(So,"$onPatch",e=>g1.push(e));Vp();Ht(So,"$patch",async()=>!1);function Bp(e,t,n=!1){const o=[];let s=!1,l=!1,a,r;const c=Ve(t);function u(h){o.push(h)}function p(h,_){c[h]!==_&&(clearTimeout(a),s=!0,c[h]=_,a=setTimeout(()=>s=!1,0))}function m(h){s||(clearTimeout(r),l=!0,Object.entries(h).forEach(([_,S])=>{c[_]=S}),r=setTimeout(()=>l=!1,0))}function f(h){let _;n?n&&window.addEventListener("storage",w=>{w&&w.key===h&&w.newValue&&m(JSON.parse(w.newValue))}):(_=new BroadcastChannel(h),_.addEventListener("message",w=>m(w.data)));function S(){!n&&_&&!l?_.postMessage(he(c)):n&&!l&&window.localStorage.setItem(h,JSON.stringify(c)),s||o.forEach(w=>w(c))}if(ve(c,S,{deep:!0,flush:"sync"}),n){const w=window.localStorage.getItem(h);w&&m(JSON.parse(w))}}return{init:f,onPatch:u,patch:p,state:c}}const{init:b1,onPatch:y1,patch:Qo,state:El}=Bp(So,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),wo=Ve({});let S1=[],w1=[];Ht(wo,"$syncUp",!0);Ht(wo,"$syncDown",!0);Ht(wo,"$paused",!1);Ht(wo,"$onSet",e=>S1.push(e));Ht(wo,"$onPatch",e=>w1.push(e));Vp();Ht(wo,"$patch",async()=>!1);const{init:x1,onPatch:k1,patch:qp,state:Ns}=Bp(wo,{},!1),$1="modulepreload",I1=function(e){return"/TPSI/4/svelte/"+e},Nc={},Mn=function(t,n,o){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=I1(l),l in Nc)return;Nc[l]=!0;const a=l.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(!!o)for(let p=s.length-1;p>=0;p--){const m=s[p];if(m.href===l&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${r}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":$1,a||(u.as="script",u.crossOrigin=""),u.href=l,document.head.appendChild(u),a)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};function z1(e,t){let n,o,s;const l=G(!0),a=()=>{l.value=!0,s()};ve(e,a,{flush:"sync"});const r=typeof t=="function"?t:t.get,c=typeof t=="function"?void 0:t.set,u=ur((p,m)=>(o=p,s=m,{get(){return l.value&&(n=r(),l.value=!1),o(),n},set(f){c==null||c(f)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function an(e){return or()?(kd(e),!0):!1}function Je(e){return typeof e=="function"?e():M(e)}function O1(e){if(!Ce(e))return Ve(e);const t=new Proxy({},{get(n,o,s){return M(Reflect.get(e.value,o,s))},set(n,o,s){return Ce(e.value[o])&&!Ce(s)?e.value[o].value=s:e.value[o]=s,!0},deleteProperty(n,o){return Reflect.deleteProperty(e.value,o)},has(n,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ve(t)}const Ut=typeof window<"u",T1=e=>typeof e<"u",E1=e=>e!=null,C1=Object.prototype.toString,ya=e=>C1.call(e)==="[object Object]",Sa=()=>+Date.now(),fo=()=>{},A1=M1();function M1(){var e;return Ut&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function P1(e,t){function n(...o){return new Promise((s,l)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(s).catch(l)})}return n}const Up=e=>e();function K1(e=Up){const t=G(!0);function n(){t.value=!1}function o(){t.value=!0}const s=(...l)=>{t.value&&e(...l)};return{isActive:Vt(t),pause:n,resume:o,eventFilter:s}}function L1(e,t){var n;if(typeof e=="number")return e+t;const o=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",s=e.slice(o.length),l=parseFloat(o)+t;return Number.isNaN(l)?e:l+s}function Jp(...e){if(e.length!==1)return qh(...e);const t=e[0];return typeof t=="function"?Vt(ur(()=>({get:t,set:fo}))):G(t)}var R1=Object.defineProperty,W1=Object.defineProperties,H1=Object.getOwnPropertyDescriptors,Dc=Object.getOwnPropertySymbols,N1=Object.prototype.hasOwnProperty,D1=Object.prototype.propertyIsEnumerable,Fc=(e,t,n)=>t in e?R1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F1=(e,t)=>{for(var n in t||(t={}))N1.call(t,n)&&Fc(e,n,t[n]);if(Dc)for(var n of Dc(t))D1.call(t,n)&&Fc(e,n,t[n]);return e},j1=(e,t)=>W1(e,H1(t));function V1(e){if(!Ce(e))return jh(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=ur(()=>({get(){return e.value[n]},set(o){if(Array.isArray(e.value)){const s=[...e.value];s[n]=o,e.value=s}else{const s=j1(F1({},e.value),{[n]:o});Object.setPrototypeOf(s,e.value),e.value=s}}}));return t}function Qp(e,t=!0){wt()?bn(e):t?e():it(e)}function B1(e){wt()&&ji(e)}function q1(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:s=!1}=n;let l=null;const a=G(!1);function r(){l&&(clearInterval(l),l=null)}function c(){a.value=!1,r()}function u(){const p=Je(t);p<=0||(a.value=!0,s&&e(),r(),l=setInterval(e,p))}if(o&&Ut&&u(),Ce(t)||typeof t=="function"){const p=ve(t,()=>{a.value&&Ut&&u()});an(p)}return an(c),{isActive:a,pause:c,resume:u}}function U1(e,t,n={}){const{immediate:o=!0}=n,s=G(!1);let l=null;function a(){l&&(clearTimeout(l),l=null)}function r(){s.value=!1,a()}function c(...u){a(),s.value=!0,l=setTimeout(()=>{s.value=!1,l=null,e(...u)},Je(t))}return o&&(s.value=!0,Ut&&c()),an(r),{isPending:Vt(s),start:c,stop:r}}function Yp(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,s=Ce(e),l=G(e);function a(r){if(arguments.length)return l.value=r,l.value;{const c=Je(n);return l.value=l.value===c?Je(o):c,l.value}}return s?a:[l,a]}var jc=Object.getOwnPropertySymbols,J1=Object.prototype.hasOwnProperty,Q1=Object.prototype.propertyIsEnumerable,Y1=(e,t)=>{var n={};for(var o in e)J1.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&jc)for(var o of jc(e))t.indexOf(o)<0&&Q1.call(e,o)&&(n[o]=e[o]);return n};function G1(e,t,n={}){const o=n,{eventFilter:s=Up}=o,l=Y1(o,["eventFilter"]);return ve(e,P1(s,t),l)}var Z1=Object.defineProperty,X1=Object.defineProperties,e0=Object.getOwnPropertyDescriptors,Ds=Object.getOwnPropertySymbols,Gp=Object.prototype.hasOwnProperty,Zp=Object.prototype.propertyIsEnumerable,Vc=(e,t,n)=>t in e?Z1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,t0=(e,t)=>{for(var n in t||(t={}))Gp.call(t,n)&&Vc(e,n,t[n]);if(Ds)for(var n of Ds(t))Zp.call(t,n)&&Vc(e,n,t[n]);return e},n0=(e,t)=>X1(e,e0(t)),o0=(e,t)=>{var n={};for(var o in e)Gp.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Ds)for(var o of Ds(e))t.indexOf(o)<0&&Zp.call(e,o)&&(n[o]=e[o]);return n};function i0(e,t,n={}){const o=n,{eventFilter:s}=o,l=o0(o,["eventFilter"]),{eventFilter:a,pause:r,resume:c,isActive:u}=K1(s);return{stop:G1(e,t,n0(t0({},l),{eventFilter:a})),pause:r,resume:c,isActive:u}}function st(e){var t;const n=Je(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Xe=Ut?window:void 0,Xp=Ut?window.document:void 0,s0=Ut?window.navigator:void 0;function we(...e){let t,n,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,s]=e,t=Xe):[t,n,o,s]=e,!t)return fo;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const l=[],a=()=>{l.forEach(p=>p()),l.length=0},r=(p,m,f,h)=>(p.addEventListener(m,f,h),()=>p.removeEventListener(m,f,h)),c=ve(()=>[st(t),Je(s)],([p,m])=>{a(),p&&l.push(...n.flatMap(f=>o.map(h=>r(p,f,h,m))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return an(u),u}let Bc=!1;function l0(e,t,n={}){const{window:o=Xe,ignore:s=[],capture:l=!0,detectIframe:a=!1}=n;if(!o)return;A1&&!Bc&&(Bc=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",fo)));let r=!0;const c=f=>s.some(h=>{if(typeof h=="string")return Array.from(o.document.querySelectorAll(h)).some(_=>_===f.target||f.composedPath().includes(_));{const _=st(h);return _&&(f.target===_||f.composedPath().includes(_))}}),p=[we(o,"click",f=>{const h=st(e);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(r=!c(f)),!r){r=!0;return}t(f)}},{passive:!0,capture:l}),we(o,"pointerdown",f=>{const h=st(e);h&&(r=!f.composedPath().includes(h)&&!c(f))},{passive:!0}),a&&we(o,"blur",f=>{var h;const _=st(e);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(_!=null&&_.contains(o.document.activeElement))&&t(f)})].filter(Boolean);return()=>p.forEach(f=>f())}function a0(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function r0(...e){let t,n,o={};e.length===3?(t=e[0],n=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],o=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:s=Xe,eventName:l="keydown",passive:a=!1,dedupe:r=!1}=o,c=a0(t);return we(s,l,p=>{p.repeat&&Je(r)||c(p)&&n(p)},a)}function c0(e={}){var t;const{window:n=Xe}=e,o=(t=e.document)!=null?t:n==null?void 0:n.document,s=z1(()=>null,()=>o==null?void 0:o.activeElement);return n&&(we(n,"blur",l=>{l.relatedTarget===null&&s.trigger()},!0),we(n,"focus",s.trigger,!0)),s}function u0(){const e=G(!1);return wt()&&bn(()=>{e.value=!0}),e}function Bi(e){const t=u0();return R(()=>(t.value,!!e()))}function d0(e,t={}){const{immediate:n=!0,window:o=Xe}=t,s=G(!1);let l=0,a=null;function r(p){if(!s.value||!o)return;const m=p-l;e({delta:m,timestamp:p}),l=p,a=o.requestAnimationFrame(r)}function c(){!s.value&&o&&(s.value=!0,a=o.requestAnimationFrame(r))}function u(){s.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return n&&c(),an(u),{isActive:Vt(s),pause:u,resume:c}}function to(e,t={}){const{window:n=Xe}=t,o=Bi(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const l=G(!1),a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",r):s.removeListener(r))},r=()=>{o.value&&(a(),s=n.matchMedia(Jp(e).value),l.value=!!(s!=null&&s.matches),s&&("addEventListener"in s?s.addEventListener("change",r):s.addListener(r)))};return yo(r),an(()=>a()),l}const p0={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function m0(e,t={}){function n(r,c){let u=e[r];return c!=null&&(u=L1(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=Xe}=t;function s(r){return o?o.matchMedia(r).matches:!1}const l=r=>to(`(min-width: ${n(r)})`,t),a=Object.keys(e).reduce((r,c)=>(Object.defineProperty(r,c,{get:()=>l(c),enumerable:!0,configurable:!0}),r),{});return Object.assign(a,{greater(r){return to(`(min-width: ${n(r,.1)})`,t)},greaterOrEqual:l,smaller(r){return to(`(max-width: ${n(r,-.1)})`,t)},smallerOrEqual(r){return to(`(max-width: ${n(r)})`,t)},between(r,c){return to(`(min-width: ${n(r)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(r){return s(`(min-width: ${n(r,.1)})`)},isGreaterOrEqual(r){return s(`(min-width: ${n(r)})`)},isSmaller(r){return s(`(max-width: ${n(r,-.1)})`)},isSmallerOrEqual(r){return s(`(max-width: ${n(r)})`)},isInBetween(r,c){return s(`(min-width: ${n(r)}) and (max-width: ${n(c,-.1)})`)},current(){const r=Object.keys(e).map(c=>[c,l(c)]);return R(()=>r.filter(([,c])=>c.value).map(([c])=>c))}})}function f0(e={}){const{navigator:t=s0,read:n=!1,source:o,copiedDuring:s=1500,legacy:l=!1}=e,a=["copy","cut"],r=Bi(()=>t&&"clipboard"in t),c=R(()=>r.value||l),u=G(""),p=G(!1),m=U1(()=>p.value=!1,s);function f(){r.value?t.clipboard.readText().then(w=>{u.value=w}):u.value=S()}if(c.value&&n)for(const w of a)we(w,f);async function h(w=Je(o)){c.value&&w!=null&&(r.value?await t.clipboard.writeText(w):_(w),u.value=w,p.value=!0,m.start())}function _(w){const x=document.createElement("textarea");x.value=w??"",x.style.position="absolute",x.style.opacity="0",document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function S(){var w,x,k;return(k=(x=(w=document==null?void 0:document.getSelection)==null?void 0:w.call(document))==null?void 0:x.toString())!=null?k:""}return{isSupported:c,text:u,copied:p,copy:h}}function h0(e){return JSON.parse(JSON.stringify(e))}const as=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rs="__vueuse_ssr_handlers__",_0=v0();function v0(){return rs in as||(as[rs]=as[rs]||{}),as[rs]}function g0(e,t){return _0[e]||t}function b0(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var y0=Object.defineProperty,qc=Object.getOwnPropertySymbols,S0=Object.prototype.hasOwnProperty,w0=Object.prototype.propertyIsEnumerable,Uc=(e,t,n)=>t in e?y0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jc=(e,t)=>{for(var n in t||(t={}))S0.call(t,n)&&Uc(e,n,t[n]);if(qc)for(var n of qc(t))w0.call(t,n)&&Uc(e,n,t[n]);return e};const x0={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Qc="vueuse-storage";function k0(e,t,n,o={}){var s;const{flush:l="pre",deep:a=!0,listenToStorageChanges:r=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:m=Xe,eventFilter:f,onError:h=L=>{console.error(L)}}=o,_=(p?sn:G)(t);if(!n)try{n=g0("getDefaultStorage",()=>{var L;return(L=Xe)==null?void 0:L.localStorage})()}catch(L){h(L)}if(!n)return _;const S=Je(t),w=b0(S),x=(s=o.serializer)!=null?s:x0[w],{pause:k,resume:b}=i0(_,()=>A(_.value),{flush:l,deep:a,eventFilter:f});return m&&r&&(we(m,"storage",j),we(m,Qc,P)),j(),_;function A(L){try{if(L==null)n.removeItem(e);else{const q=x.write(L),se=n.getItem(e);se!==q&&(n.setItem(e,q),m&&m.dispatchEvent(new CustomEvent(Qc,{detail:{key:e,oldValue:se,newValue:q,storageArea:n}})))}}catch(q){h(q)}}function E(L){const q=L?L.newValue:n.getItem(e);if(q==null)return c&&S!==null&&n.setItem(e,x.write(S)),S;if(!L&&u){const se=x.read(q);return typeof u=="function"?u(se,S):w==="object"&&!Array.isArray(se)?Jc(Jc({},S),se):se}else return typeof q!="string"?q:x.read(q)}function P(L){j(L.detail)}function j(L){if(!(L&&L.storageArea!==n)){if(L&&L.key==null){_.value=S;return}if(!(L&&L.key!==e)){k();try{_.value=E(L)}catch(q){h(q)}finally{L?it(b):b()}}}}}function $0(e){return to("(prefers-color-scheme: dark)",e)}var I0=Object.defineProperty,z0=Object.defineProperties,O0=Object.getOwnPropertyDescriptors,Yc=Object.getOwnPropertySymbols,T0=Object.prototype.hasOwnProperty,E0=Object.prototype.propertyIsEnumerable,Gc=(e,t,n)=>t in e?I0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C0=(e,t)=>{for(var n in t||(t={}))T0.call(t,n)&&Gc(e,n,t[n]);if(Yc)for(var n of Yc(t))E0.call(t,n)&&Gc(e,n,t[n]);return e},A0=(e,t)=>z0(e,O0(t));function p9(e,t={}){var n,o;const{pointerTypes:s,preventDefault:l,stopPropagation:a,exact:r,onMove:c,onEnd:u,onStart:p,initialValue:m,axis:f="both",draggingElement:h=Xe,handle:_=e}=t,S=G((n=Je(m))!=null?n:{x:0,y:0}),w=G(),x=P=>s?s.includes(P.pointerType):!0,k=P=>{Je(l)&&P.preventDefault(),Je(a)&&P.stopPropagation()},b=P=>{if(!x(P)||Je(r)&&P.target!==Je(e))return;const j=Je(e).getBoundingClientRect(),L={x:P.clientX-j.left,y:P.clientY-j.top};(p==null?void 0:p(L,P))!==!1&&(w.value=L,k(P))},A=P=>{if(!x(P)||!w.value)return;let{x:j,y:L}=S.value;(f==="x"||f==="both")&&(j=P.clientX-w.value.x),(f==="y"||f==="both")&&(L=P.clientY-w.value.y),S.value={x:j,y:L},c==null||c(S.value,P),k(P)},E=P=>{x(P)&&w.value&&(w.value=void 0,u==null||u(S.value,P),k(P))};if(Ut){const P={capture:(o=t.capture)!=null?o:!0};we(_,"pointerdown",b,P),we(h,"pointermove",A,P),we(h,"pointerup",E,P)}return A0(C0({},V1(S)),{position:S,isDragging:R(()=>!!w.value),style:R(()=>`left:${S.value.x}px;top:${S.value.y}px;`)})}var Zc=Object.getOwnPropertySymbols,M0=Object.prototype.hasOwnProperty,P0=Object.prototype.propertyIsEnumerable,K0=(e,t)=>{var n={};for(var o in e)M0.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Zc)for(var o of Zc(e))t.indexOf(o)<0&&P0.call(e,o)&&(n[o]=e[o]);return n};function L0(e,t,n={}){const o=n,{window:s=Xe}=o,l=K0(o,["window"]);let a;const r=Bi(()=>s&&"ResizeObserver"in s),c=()=>{a&&(a.disconnect(),a=void 0)},u=R(()=>Array.isArray(e)?e.map(f=>st(f)):[st(e)]),p=ve(u,f=>{if(c(),r.value&&s){a=new ResizeObserver(t);for(const h of f)h&&a.observe(h,l)}},{immediate:!0,flush:"post",deep:!0}),m=()=>{c(),p()};return an(m),{isSupported:r,stop:m}}function R0(e,t={width:0,height:0},n={}){const{window:o=Xe,box:s="content-box"}=n,l=R(()=>{var c,u;return(u=(c=st(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=G(t.width),r=G(t.height);return L0(e,([c])=>{const u=s==="border-box"?c.borderBoxSize:s==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&l.value){const p=st(e);if(p){const m=o.getComputedStyle(p);a.value=parseFloat(m.width),r.value=parseFloat(m.height)}}else if(u){const p=Array.isArray(u)?u:[u];a.value=p.reduce((m,{inlineSize:f})=>m+f,0),r.value=p.reduce((m,{blockSize:f})=>m+f,0)}else a.value=c.contentRect.width,r.value=c.contentRect.height},n),ve(()=>st(e),c=>{a.value=c?t.width:0,r.value=c?t.height:0}),{width:a,height:r}}function W0(e,t,n={}){const{root:o,rootMargin:s="0px",threshold:l=.1,window:a=Xe,immediate:r=!0}=n,c=Bi(()=>a&&"IntersectionObserver"in a),u=R(()=>{const _=Je(e);return(Array.isArray(_)?_:[_]).map(st).filter(E1)});let p=fo;const m=G(r),f=c.value?ve(()=>[u.value,st(o),m.value],([_,S])=>{if(p(),!m.value||!_.length)return;const w=new IntersectionObserver(t,{root:st(S),rootMargin:s,threshold:l});_.forEach(x=>x&&w.observe(x)),p=()=>{w.disconnect(),p=fo}},{immediate:r,flush:"post"}):fo,h=()=>{p(),f(),m.value=!1};return an(h),{isSupported:c,isActive:m,pause(){p(),m.value=!1},resume(){m.value=!0},stop:h}}const Xc=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function H0(e,t={}){const{document:n=Xp,autoExit:o=!1}=t,s=R(()=>{var x;return(x=st(e))!=null?x:n==null?void 0:n.querySelector("html")}),l=G(!1),a=R(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(x=>n&&x in n||s.value&&x in s.value)),r=R(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(x=>n&&x in n||s.value&&x in s.value)),c=R(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(x=>n&&x in n||s.value&&x in s.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(x=>n&&x in n),p=Bi(()=>s.value&&n&&a.value!==void 0&&r.value!==void 0&&c.value!==void 0),m=()=>u?(n==null?void 0:n[u])===s.value:!1,f=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const x=s.value;if((x==null?void 0:x[c.value])!=null)return!!x[c.value]}}return!1};async function h(){if(p.value){if(r.value)if((n==null?void 0:n[r.value])!=null)await n[r.value]();else{const x=s.value;(x==null?void 0:x[r.value])!=null&&await x[r.value]()}l.value=!1}}async function _(){if(!p.value)return;f()&&await h();const x=s.value;a.value&&(x==null?void 0:x[a.value])!=null&&(await x[a.value](),l.value=!0)}async function S(){await(l.value?h():_())}const w=()=>{const x=f();(!x||x&&m())&&(l.value=x)};return we(n,Xc,w,!1),we(()=>st(s),Xc,w,!1),o&&an(h),{isSupported:p,isFullscreen:l,enter:_,exit:h,toggle:S}}function Jt(e,t,n={}){const{window:o=Xe}=n;return k0(e,t,o==null?void 0:o.localStorage,n)}const N0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function D0(e={}){const{reactive:t=!1,target:n=Xe,aliasMap:o=N0,passive:s=!0,onEventFired:l=fo}=e,a=Ve(new Set),r={toJSON(){return{}},current:a},c=t?Ve(r):r,u=new Set,p=new Set;function m(S,w){S in c&&(t?c[S]=w:c[S].value=w)}function f(){a.clear();for(const S of p)m(S,!1)}function h(S,w){var x,k;const b=(x=S.key)==null?void 0:x.toLowerCase(),E=[(k=S.code)==null?void 0:k.toLowerCase(),b].filter(Boolean);b&&(w?a.add(b):a.delete(b));for(const P of E)p.add(P),m(P,w);b==="meta"&&!w?(u.forEach(P=>{a.delete(P),m(P,!1)}),u.clear()):typeof S.getModifierState=="function"&&S.getModifierState("Meta")&&w&&[...a,...E].forEach(P=>u.add(P))}we(n,"keydown",S=>(h(S,!0),l(S)),{passive:s}),we(n,"keyup",S=>(h(S,!1),l(S)),{passive:s}),we("blur",f,{passive:!0}),we("focus",f,{passive:!0});const _=new Proxy(c,{get(S,w,x){if(typeof w!="string")return Reflect.get(S,w,x);if(w=w.toLowerCase(),w in o&&(w=o[w]),!(w in c))if(/[+_-]/.test(w)){const b=w.split(/[+_-]/g).map(A=>A.trim());c[w]=R(()=>b.every(A=>Je(_[A])))}else c[w]=G(!1);const k=Reflect.get(S,w,x);return t?Je(k):k}});return _}const F0={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function m9(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:s={x:0,y:0},window:l=Xe,target:a=l,eventFilter:r}=e,c=G(s.x),u=G(s.y),p=G(null),m=typeof t=="function"?t:F0[t],f=x=>{const k=m(x);k&&([c.value,u.value]=k,p.value="mouse")},h=x=>{if(x.touches.length>0){const k=m(x.touches[0]);k&&([c.value,u.value]=k,p.value="touch")}},_=()=>{c.value=s.x,u.value=s.y},S=r?x=>r(()=>f(x),{}):x=>f(x),w=r?x=>r(()=>h(x),{}):x=>h(x);return a&&(we(a,"mousemove",S,{passive:!0}),we(a,"dragover",S,{passive:!0}),n&&t!=="movement"&&(we(a,"touchstart",w,{passive:!0}),we(a,"touchmove",w,{passive:!0}),o&&we(a,"touchend",_,{passive:!0}))),{x:c,y:u,sourceType:p}}function j0(e,t={}){const n=Jp(e),{threshold:o=50,onSwipe:s,onSwipeEnd:l,onSwipeStart:a}=t,r=Ve({x:0,y:0}),c=(P,j)=>{r.x=P,r.y=j},u=Ve({x:0,y:0}),p=(P,j)=>{u.x=P,u.y=j},m=R(()=>r.x-u.x),f=R(()=>r.y-u.y),{max:h,abs:_}=Math,S=R(()=>h(_(m.value),_(f.value))>=o),w=G(!1),x=G(!1),k=R(()=>S.value?_(m.value)>_(f.value)?m.value>0?"left":"right":f.value>0?"up":"down":"none"),b=P=>{var j,L,q;const se=P.buttons===0,de=P.buttons===1;return(q=(L=(j=t.pointerTypes)==null?void 0:j.includes(P.pointerType))!=null?L:se||de)!=null?q:!0},A=[we(e,"pointerdown",P=>{var j,L;if(!b(P))return;x.value=!0,(L=(j=n.value)==null?void 0:j.style)==null||L.setProperty("touch-action","none");const q=P.target;q==null||q.setPointerCapture(P.pointerId);const{clientX:se,clientY:de}=P;c(se,de),p(se,de),a==null||a(P)}),we(e,"pointermove",P=>{if(!b(P)||!x.value)return;const{clientX:j,clientY:L}=P;p(j,L),!w.value&&S.value&&(w.value=!0),w.value&&(s==null||s(P))}),we(e,"pointerup",P=>{var j,L;b(P)&&(w.value&&(l==null||l(P,k.value)),x.value=!1,w.value=!1,(L=(j=n.value)==null?void 0:j.style)==null||L.setProperty("touch-action","initial"))})],E=()=>A.forEach(P=>P());return{isSwiping:Vt(w),direction:Vt(k),posStart:Vt(r),posEnd:Vt(u),distanceX:m,distanceY:f,stop:E}}let V0=0;function f9(e,t={}){const n=G(!1),{document:o=Xp,immediate:s=!0,manual:l=!1,id:a=`vueuse_styletag_${++V0}`}=t,r=G(e);let c=()=>{};const u=()=>{if(!o)return;const m=o.getElementById(a)||o.createElement("style");m.isConnected||(m.type="text/css",m.id=a,t.media&&(m.media=t.media),o.head.appendChild(m)),!n.value&&(c=ve(r,f=>{m.textContent=f},{immediate:!0}),n.value=!0)},p=()=>{!o||!n.value||(c(),o.head.removeChild(o.getElementById(a)),n.value=!1)};return s&&!l&&Qp(u),l||an(p),{id:a,css:r,unload:p,load:u,isLoaded:Vt(n)}}var B0=Object.defineProperty,eu=Object.getOwnPropertySymbols,q0=Object.prototype.hasOwnProperty,U0=Object.prototype.propertyIsEnumerable,tu=(e,t,n)=>t in e?B0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J0=(e,t)=>{for(var n in t||(t={}))q0.call(t,n)&&tu(e,n,t[n]);if(eu)for(var n of eu(t))U0.call(t,n)&&tu(e,n,t[n]);return e};function h9(e={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:s="requestAnimationFrame",callback:l}=e,a=G(Sa()+n),r=()=>a.value=Sa()+n,c=l?()=>{r(),l(a.value)}:r,u=s==="requestAnimationFrame"?d0(c,{immediate:o}):q1(c,s,{immediate:o});return t?J0({timestamp:a},u):a}function Kt(e,t,n,o={}){var s,l,a;const{clone:r=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:m,shouldEmit:f}=o,h=wt(),_=n||(h==null?void 0:h.emit)||((s=h==null?void 0:h.$emit)==null?void 0:s.bind(h))||((a=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let S=u;t||(t="modelValue"),S=u||S||`update:${t.toString()}`;const w=b=>r?typeof r=="function"?r(b):h0(b):b,x=()=>T1(e[t])?w(e[t]):m,k=b=>{f?f(b)&&_(S,b):_(S,b)};if(c){const b=x(),A=G(b);return ve(()=>e[t],E=>A.value=w(E)),ve(A,E=>{(E!==e[t]||p)&&k(E)},{deep:p}),A}else return R({get(){return x()},set(b){k(b)}})}function _9({window:e=Xe}={}){if(!e)return G(!1);const t=G(e.document.hasFocus());return we(e,"blur",()=>{t.value=!1}),we(e,"focus",()=>{t.value=!0}),t}function Q0(e={}){const{window:t=Xe,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:s=!0,includeScrollbar:l=!0}=e,a=G(n),r=G(o),c=()=>{t&&(l?(a.value=t.innerWidth,r.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,r.value=t.document.documentElement.clientHeight))};if(c(),Qp(c),we("resize",c,{passive:!0}),s){const u=to("(orientation: portrait)");ve(u,()=>c())}return{width:a,height:r}}function Y0(){return em().__VUE_DEVTOOLS_GLOBAL_HOOK__}function em(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const G0=typeof Proxy=="function",Z0="devtools-plugin:setup",X0="plugin:settings:set";let $o,wa;function eb(){var e;return $o!==void 0||(typeof window<"u"&&window.performance?($o=!0,wa=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?($o=!0,wa=global.perf_hooks.performance):$o=!1),$o}function tb(){return eb()?wa.now():Date.now()}class nb{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const o={};if(t.settings)for(const a in t.settings){const r=t.settings[a];o[a]=r.defaultValue}const s=`__vue-devtools-plugin-settings__${t.id}`;let l=Object.assign({},o);try{const a=localStorage.getItem(s),r=JSON.parse(a);Object.assign(l,r)}catch{}this.fallbacks={getSettings(){return l},setSettings(a){try{localStorage.setItem(s,JSON.stringify(a))}catch{}l=a},now(){return tb()}},n&&n.on(X0,(a,r)=>{a===this.plugin.id&&this.fallbacks.setSettings(r)}),this.proxiedOn=new Proxy({},{get:(a,r)=>this.target?this.target.on[r]:(...c)=>{this.onQueue.push({method:r,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,r)=>this.target?this.target[r]:r==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(r)?(...c)=>(this.targetQueue.push({method:r,args:c,resolve:()=>{}}),this.fallbacks[r](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:r,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function ob(e,t){const n=e,o=em(),s=Y0(),l=G0&&n.enableEarlyProxy;if(s&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))s.emit(Z0,e,t);else{const a=l?new nb(n,s):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const mn=typeof window<"u";function ib(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function Cl(e,t){const n={};for(const o in t){const s=t[o];n[o]=Tt(s)?s.map(e):e(s)}return n}const fi=()=>{},Tt=Array.isArray;function ze(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const sb=/\/$/,lb=e=>e.replace(sb,"");function Al(e,t,n="/"){let o,s={},l="",a="";const r=t.indexOf("#");let c=t.indexOf("?");return r<c&&r>=0&&(c=-1),c>-1&&(o=t.slice(0,c),l=t.slice(c+1,r>-1?r:t.length),s=e(l)),r>-1&&(o=o||t.slice(0,r),a=t.slice(r,t.length)),o=cb(o??t,n),{fullPath:o+(l&&"?")+l+a,path:o,query:s,hash:a}}function ab(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function nu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ou(e,t,n){const o=t.matched.length-1,s=n.matched.length-1;return o>-1&&o===s&&Nn(t.matched[o],n.matched[s])&&tm(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Nn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function tm(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!rb(e[n],t[n]))return!1;return!0}function rb(e,t){return Tt(e)?iu(e,t):Tt(t)?iu(t,e):e===t}function iu(e,t){return Tt(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function cb(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return ze(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),o=e.split("/"),s=o[o.length-1];(s===".."||s===".")&&o.push("");let l=n.length-1,a,r;for(a=0;a<o.length;a++)if(r=o[a],r!==".")if(r==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var Ti;(function(e){e.pop="pop",e.push="push"})(Ti||(Ti={}));var hi;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hi||(hi={}));function ub(e){if(!e)if(mn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lb(e)}const db=/^[^#]+#/;function pb(e,t){return e.replace(db,"#")+t}function mb(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const dl=()=>({left:window.pageXOffset,top:window.pageYOffset});function fb(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const l=document.querySelector(e.el);if(o&&l){ze(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{ze(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){ze(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=mb(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function su(e,t){return(history.state?history.state.position-t:-1)+e}const xa=new Map;function hb(e,t){xa.set(e,t)}function _b(e){const t=xa.get(e);return xa.delete(e),t}let vb=()=>location.protocol+"//"+location.host;function nm(e,t){const{pathname:n,search:o,hash:s}=t,l=e.indexOf("#");if(l>-1){let r=s.includes(e.slice(l))?e.slice(l).length:1,c=s.slice(r);return c[0]!=="/"&&(c="/"+c),nu(c,"")}return nu(n,e)+o+s}function gb(e,t,n,o){let s=[],l=[],a=null;const r=({state:f})=>{const h=nm(e,location),_=n.value,S=t.value;let w=0;if(f){if(n.value=h,t.value=f,a&&a===_){a=null;return}w=S?f.position-S.position:0}else o(h);s.forEach(x=>{x(n.value,_,{delta:w,type:Ti.pop,direction:w?w>0?hi.forward:hi.back:hi.unknown})})};function c(){a=n.value}function u(f){s.push(f);const h=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return l.push(h),h}function p(){const{history:f}=window;f.state&&f.replaceState(Pe({},f.state,{scroll:dl()}),"")}function m(){for(const f of l)f();l=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:c,listen:u,destroy:m}}function lu(e,t,n,o=!1,s=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:s?dl():null}}function bb(e){const{history:t,location:n}=window,o={value:nm(e,n)},s={value:t.state};s.value||l(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,u,p){const m=e.indexOf("#"),f=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+c:vb()+e+c;try{t[p?"replaceState":"pushState"](u,"",f),s.value=u}catch(h){ze("Error with push/replace State",h),n[p?"replace":"assign"](f)}}function a(c,u){const p=Pe({},t.state,lu(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});l(c,p,!0),o.value=c}function r(c,u){const p=Pe({},s.value,t.state,{forward:c,scroll:dl()});t.state||ze(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(p.current,p,!0);const m=Pe({},lu(o.value,c,null),{position:p.position+1},u);l(c,m,!1),o.value=c}return{location:o,state:s,push:r,replace:a}}function yb(e){e=ub(e);const t=bb(e),n=gb(e,t.state,t.location,t.replace);function o(l,a=!0){a||n.pauseListeners(),history.go(l)}const s=Pe({location:"",base:e,go:o,createHref:pb.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Sb(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),!e.endsWith("#/")&&!e.endsWith("#")&&ze(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/,"#")}".`),yb(e)}function wb(e){return typeof e=="string"||e&&typeof e=="object"}function om(e){return typeof e=="string"||typeof e=="symbol"}const wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},im=Symbol("navigation failure");var au;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(au||(au={}));const xb={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${$b(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Lo(e,t){return Pe(new Error(xb[e](t)),{type:e,[im]:!0},t)}function rn(e,t){return e instanceof Error&&im in e&&(t==null||!!(e.type&t))}const kb=["params","query","hash"];function $b(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of kb)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const ru="[^/]+?",Ib={sensitive:!1,strict:!1,start:!0,end:!0},zb=/[.+*?^${}()[\]/\\]/g;function Ob(e,t){const n=Pe({},Ib,t),o=[];let s=n.start?"^":"";const l=[];for(const u of e){const p=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let m=0;m<u.length;m++){const f=u[m];let h=40+(n.sensitive?.25:0);if(f.type===0)m||(s+="/"),s+=f.value.replace(zb,"\\$&"),h+=40;else if(f.type===1){const{value:_,repeatable:S,optional:w,regexp:x}=f;l.push({name:_,repeatable:S,optional:w});const k=x||ru;if(k!==ru){h+=10;try{new RegExp(`(${k})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${_}" (${k}): `+A.message)}}let b=S?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;m||(b=w&&u.length<2?`(?:/${b})`:"/"+b),w&&(b+="?"),s+=b,h+=20,w&&(h+=-8),S&&(h+=-20),k===".*"&&(h+=-50)}p.push(h)}o.push(p)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function r(u){const p=u.match(a),m={};if(!p)return null;for(let f=1;f<p.length;f++){const h=p[f]||"",_=l[f-1];m[_.name]=h&&_.repeatable?h.split("/"):h}return m}function c(u){let p="",m=!1;for(const f of e){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const h of f)if(h.type===0)p+=h.value;else if(h.type===1){const{value:_,repeatable:S,optional:w}=h,x=_ in u?u[_]:"";if(Tt(x)&&!S)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const k=Tt(x)?x.join("/"):x;if(!k)if(w)f.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${_}"`);p+=k}}return p||"/"}return{re:a,score:o,keys:l,parse:r,stringify:c}}function Tb(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Eb(e,t){let n=0;const o=e.score,s=t.score;for(;n<o.length&&n<s.length;){const l=Tb(o[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-o.length)===1){if(cu(o))return 1;if(cu(s))return-1}return s.length-o.length}function cu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Cb={type:0,value:""},Ab=/[a-zA-Z0-9_]/;function Mb(e){if(!e)return[[]];if(e==="/")return[[Cb]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,o=n;const s=[];let l;function a(){l&&s.push(l),l=[]}let r=0,c,u="",p="";function m(){u&&(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;r<e.length;){if(c=e[r++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(u&&m(),a()):c===":"?(m(),n=1):f();break;case 4:f(),n=o;break;case 1:c==="("?n=2:Ab.test(c)?f():(m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&r--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&r--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),m(),a(),s}function Pb(e,t,n){const o=Ob(Mb(e.path),n);{const l=new Set;for(const a of o.keys)l.has(a.name)&&ze(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),l.add(a.name)}const s=Pe(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Kb(e,t){const n=[],o=new Map;t=pu({strict:!1,end:!0,sensitive:!1},t);function s(p){return o.get(p)}function l(p,m,f){const h=!f,_=Lb(p);Nb(_,m),_.aliasOf=f&&f.record;const S=pu(t,p),w=[_];if("alias"in p){const b=typeof p.alias=="string"?[p.alias]:p.alias;for(const A of b)w.push(Pe({},_,{components:f?f.record.components:_.components,path:A,aliasOf:f?f.record:_}))}let x,k;for(const b of w){const{path:A}=b;if(m&&A[0]!=="/"){const E=m.record.path,P=E[E.length-1]==="/"?"":"/";b.path=m.record.path+(A&&P+A)}if(b.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=Pb(b,m,S),m&&A[0]==="/"&&Db(x,m),f?(f.alias.push(x),Hb(f,x)):(k=k||x,k!==x&&k.alias.push(x),h&&p.name&&!du(x)&&a(p.name)),_.children){const E=_.children;for(let P=0;P<E.length;P++)l(E[P],x,f&&f.children[P])}f=f||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return k?()=>{a(k)}:fi}function a(p){if(om(p)){const m=o.get(p);m&&(o.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&o.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function r(){return n}function c(p){let m=0;for(;m<n.length&&Eb(p,n[m])>=0&&(p.record.path!==n[m].record.path||!sm(p,n[m]));)m++;n.splice(m,0,p),p.record.name&&!du(p)&&o.set(p.record.name,p)}function u(p,m){let f,h={},_,S;if("name"in p&&p.name){if(f=o.get(p.name),!f)throw Lo(1,{location:p});{const k=Object.keys(p.params||{}).filter(b=>!f.keys.find(A=>A.name===b));k.length&&ze(`Discarded invalid param(s) "${k.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}S=f.record.name,h=Pe(uu(m.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),p.params&&uu(p.params,f.keys.map(k=>k.name))),_=f.stringify(h)}else if("path"in p)_=p.path,_.startsWith("/")||ze(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(k=>k.re.test(_)),f&&(h=f.parse(_),S=f.record.name);else{if(f=m.name?o.get(m.name):n.find(k=>k.re.test(m.path)),!f)throw Lo(1,{location:p,currentLocation:m});S=f.record.name,h=Pe({},m.params,p.params),_=f.stringify(h)}const w=[];let x=f;for(;x;)w.unshift(x.record),x=x.parent;return{name:S,path:_,params:h,matched:w,meta:Wb(w)}}return e.forEach(p=>l(p)),{addRoute:l,resolve:u,removeRoute:a,getRoutes:r,getRecordMatcher:s}}function uu(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Lb(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Rb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Rb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="boolean"?n:n[o];return t}function du(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Wb(e){return e.reduce((t,n)=>Pe(t,n.meta),{})}function pu(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function ka(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function Hb(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(ka.bind(null,n)))return ze(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(ka.bind(null,n)))return ze(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function Nb(e,t){t&&t.record.name&&!e.name&&!e.path&&ze(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Db(e,t){for(const n of t.keys)if(!e.keys.find(ka.bind(null,n)))return ze(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function sm(e,t){return t.children.some(n=>n===e||sm(e,n))}const lm=/#/g,Fb=/&/g,jb=/\//g,Vb=/=/g,Bb=/\?/g,am=/\+/g,qb=/%5B/g,Ub=/%5D/g,rm=/%5E/g,Jb=/%60/g,cm=/%7B/g,Qb=/%7C/g,um=/%7D/g,Yb=/%20/g;function kr(e){return encodeURI(""+e).replace(Qb,"|").replace(qb,"[").replace(Ub,"]")}function Gb(e){return kr(e).replace(cm,"{").replace(um,"}").replace(rm,"^")}function $a(e){return kr(e).replace(am,"%2B").replace(Yb,"+").replace(lm,"%23").replace(Fb,"%26").replace(Jb,"`").replace(cm,"{").replace(um,"}").replace(rm,"^")}function Zb(e){return $a(e).replace(Vb,"%3D")}function Xb(e){return kr(e).replace(lm,"%23").replace(Bb,"%3F")}function ey(e){return e==null?"":Xb(e).replace(jb,"%2F")}function Ei(e){try{return decodeURIComponent(""+e)}catch{ze(`Error decoding "${e}". Using original value`)}return""+e}function ty(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const l=o[s].replace(am," "),a=l.indexOf("="),r=Ei(a<0?l:l.slice(0,a)),c=a<0?null:Ei(l.slice(a+1));if(r in t){let u=t[r];Tt(u)||(u=t[r]=[u]),u.push(c)}else t[r]=c}return t}function mu(e){let t="";for(let n in e){const o=e[n];if(n=Zb(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Tt(o)?o.map(l=>l&&$a(l)):[o&&$a(o)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function ny(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Tt(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}const oy=Symbol("router view location matched"),fu=Symbol("router view depth"),$r=Symbol("router"),dm=Symbol("route location"),Ia=Symbol("router view location");function Yo(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function In(e,t,n,o,s){const l=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((a,r)=>{const c=m=>{m===!1?r(Lo(4,{from:n,to:t})):m instanceof Error?r(m):wb(m)?r(Lo(2,{from:t,to:m})):(l&&o.enterCallbacks[s]===l&&typeof m=="function"&&l.push(m),a())},u=e.call(o&&o.instances[s],t,n,iy(c,t,n));let p=Promise.resolve(u);if(e.length<3&&(p=p.then(c)),e.length>2){const m=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)p=p.then(f=>c._called?f:(ze(m),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){ze(m),r(new Error("Invalid navigation guard"));return}}p.catch(m=>r(m))})}function iy(e,t,n){let o=0;return function(){o++===1&&ze(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function Ml(e,t,n,o){const s=[];for(const l of e){!l.components&&!l.children.length&&ze(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const a in l.components){let r=l.components[a];{if(!r||typeof r!="object"&&typeof r!="function")throw ze(`Component "${a}" in record with path "${l.path}" is not a valid component. Received "${String(r)}".`),new Error("Invalid route component");if("then"in r){ze(`Component "${a}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=r;r=()=>c}else r.__asyncLoader&&!r.__warnedDefineAsync&&(r.__warnedDefineAsync=!0,ze(`Component "${a}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!l.instances[a]))if(sy(r)){const u=(r.__vccOpts||r)[t];u&&s.push(In(u,n,o,l,a))}else{let c=r();"catch"in c||(ze(`Component "${a}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${l.path}"`));const p=ib(u)?u.default:u;l.components[a]=p;const f=(p.__vccOpts||p)[t];return f&&In(f,n,o,l,a)()}))}}}return s}function sy(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function hu(e){const t=I($r),n=I(dm),o=R(()=>t.resolve(M(e.to))),s=R(()=>{const{matched:c}=o.value,{length:u}=c,p=c[u-1],m=n.matched;if(!p||!m.length)return-1;const f=m.findIndex(Nn.bind(null,p));if(f>-1)return f;const h=_u(c[u-2]);return u>1&&_u(p)===h&&m[m.length-1].path!==h?m.findIndex(Nn.bind(null,c[u-2])):f}),l=R(()=>s.value>-1&&cy(n.params,o.value.params)),a=R(()=>s.value>-1&&s.value===n.matched.length-1&&tm(n.params,o.value.params));function r(c={}){return ry(c)?t[M(e.replace)?"replace":"push"](M(e.to)).catch(fi):Promise.resolve()}if(mn){const c=wt();if(c){const u={route:o.value,isActive:l.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),yo(()=>{u.route=o.value,u.isActive=l.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:R(()=>o.value.href),isActive:l,isExactActive:a,navigate:r}}const ly=Me({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hu,setup(e,{slots:t}){const n=Ve(hu(e)),{options:o}=I($r),s=R(()=>({[vu(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[vu(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:St("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),ay=ly;function ry(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function cy(e,t){for(const n in t){const o=t[n],s=e[n];if(typeof o=="string"){if(o!==s)return!1}else if(!Tt(s)||s.length!==o.length||o.some((l,a)=>l!==s[a]))return!1}return!0}function _u(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const vu=(e,t,n)=>e??t??n,uy=Me({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){py();const o=I(Ia),s=R(()=>e.route||o.value),l=I(fu,0),a=R(()=>{let u=M(l);const{matched:p}=s.value;let m;for(;(m=p[u])&&!m.components;)u++;return u}),r=R(()=>s.value.matched[a.value]);It(fu,R(()=>a.value+1)),It(oy,r),It(Ia,s);const c=G();return ve(()=>[c.value,r.value,e.name],([u,p,m],[f,h,_])=>{p&&(p.instances[m]=u,h&&h!==p&&u&&u===f&&(p.leaveGuards.size||(p.leaveGuards=h.leaveGuards),p.updateGuards.size||(p.updateGuards=h.updateGuards))),u&&p&&(!h||!Nn(p,h)||!f)&&(p.enterCallbacks[m]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,p=e.name,m=r.value,f=m&&m.components[p];if(!f)return gu(n.default,{Component:f,route:u});const h=m.props[p],_=h?h===!0?u.params:typeof h=="function"?h(u):h:null,w=St(f,Pe({},_,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(m.instances[p]=null)},ref:c}));if(mn&&w.ref){const x={depth:a.value,name:m.name,path:m.path,meta:m.meta};(Tt(w.ref)?w.ref.map(b=>b.i):[w.ref.i]).forEach(b=>{b.__vrv_devtools=x})}return gu(n.default,{Component:w,route:u})||w}}});function gu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const dy=uy;function py(){const e=wt(),t=e.parent&&e.parent.type.name,n=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const o=t==="KeepAlive"?"keep-alive":"transition";ze(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function Go(e,t){const n=Pe({},e,{matched:e.matched.map(o=>Sy(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function cs(e){return{_custom:{display:e}}}let my=0;function fy(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=my++;ob({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((p,m)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Go(t.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:p,componentInstance:m})=>{if(m.__vrv_devtools){const f=m.__vrv_devtools;p.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:pm})}Tt(m.__vrl_devtools)&&(m.__devtoolsApi=s,m.__vrl_devtools.forEach(f=>{let h=hm,_="";f.isExactActive?(h=fm,_="This is exactly active"):f.isActive&&(h=mm,_="This link is active"),p.tags.push({label:f.route.path,textColor:0,tooltip:_,backgroundColor:h})}))}),ve(t.currentRoute,()=>{c(),s.notifyComponentUpdate(),s.sendInspectorTree(r),s.sendInspectorState(r)});const l="router:navigations:"+o;s.addTimelineLayer({id:l,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((p,m)=>{s.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:s.now(),data:{error:p},groupId:m.meta.__navigationId}})});let a=0;t.beforeEach((p,m)=>{const f={guard:cs("beforeEach"),from:Go(m,"Current Location during this navigation"),to:Go(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:a++}),s.addTimelineEvent({layerId:l,event:{time:s.now(),title:"Start of navigation",subtitle:p.fullPath,data:f,groupId:p.meta.__navigationId}})}),t.afterEach((p,m,f)=>{const h={guard:cs("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=cs("❌")):h.status=cs("✅"),h.from=Go(m,"Current Location during this navigation"),h.to=Go(p,"Target location"),s.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:p.fullPath,time:s.now(),data:h,logType:f?"warning":"default",groupId:p.meta.__navigationId}})});const r="router-inspector:"+o;s.addInspector({id:r,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const p=u;let m=n.getRoutes().filter(f=>!f.parent);m.forEach(gm),p.filter&&(m=m.filter(f=>za(f,p.filter.toLowerCase()))),m.forEach(f=>vm(f,t.currentRoute.value)),p.rootNodes=m.map(_m)}let u;s.on.getInspectorTree(p=>{u=p,p.app===e&&p.inspectorId===r&&c()}),s.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===r){const f=n.getRoutes().find(h=>h.record.__vd_id===p.nodeId);f&&(p.state={options:_y(f)})}}),s.sendInspectorTree(r),s.sendInspectorState(r)})}function hy(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function _y(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${hy(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const pm=15485081,mm=2450411,fm=8702998,vy=2282478,hm=16486972,gy=6710886;function _m(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:vy}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:hm}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:pm}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:fm}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:mm}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:gy});let o=n.__vd_id;return o==null&&(o=String(by++),n.__vd_id=o),{id:o,label:n.path,tags:t,children:e.children.map(_m)}}let by=0;const yy=/^\/(.*)\/([a-z]*)$/;function vm(e,t){const n=t.matched.length&&Nn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(o=>Nn(o,e.record))),e.children.forEach(o=>vm(o,t))}function gm(e){e.__vd_match=!1,e.children.forEach(gm)}function za(e,t){const n=String(e.re).match(yy);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(a=>za(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const s=e.record.path.toLowerCase(),l=Ei(s);return!t.startsWith("/")&&(l.includes(t)||s.includes(t))||l.startsWith(t)||s.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>za(a,t))}function Sy(e,t){const n={};for(const o in e)t.includes(o)||(n[o]=e[o]);return n}function wy(e){const t=Kb(e.routes,e),n=e.parseQuery||ty,o=e.stringifyQuery||mu,s=e.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Yo(),a=Yo(),r=Yo(),c=sn(wn);let u=wn;mn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Cl.bind(null,K=>""+K),m=Cl.bind(null,ey),f=Cl.bind(null,Ei);function h(K,X){let te,oe;return om(K)?(te=t.getRecordMatcher(K),oe=X):oe=K,t.addRoute(oe,te)}function _(K){const X=t.getRecordMatcher(K);X?t.removeRoute(X):ze(`Cannot remove non-existent route "${String(K)}"`)}function S(){return t.getRoutes().map(K=>K.record)}function w(K){return!!t.getRecordMatcher(K)}function x(K,X){if(X=Pe({},X||c.value),typeof K=="string"){const y=Al(n,K,X.path),C=t.resolve({path:y.path},X),F=s.createHref(y.fullPath);return F.startsWith("//")?ze(`Location "${K}" resolved to "${F}". A resolved location cannot start with multiple slashes.`):C.matched.length||ze(`No match found for location with path "${K}"`),Pe(y,C,{params:f(C.params),hash:Ei(y.hash),redirectedFrom:void 0,href:F})}let te;if("path"in K)"params"in K&&!("name"in K)&&Object.keys(K.params).length&&ze(`Path "${K.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),te=Pe({},K,{path:Al(n,K.path,X.path).path});else{const y=Pe({},K.params);for(const C in y)y[C]==null&&delete y[C];te=Pe({},K,{params:m(y)}),X.params=m(X.params)}const oe=t.resolve(te,X),xe=K.hash||"";xe&&!xe.startsWith("#")&&ze(`A \`hash\` should always start with the character "#". Replace "${xe}" with "#${xe}".`),oe.params=p(f(oe.params));const Re=ab(o,Pe({},K,{hash:Gb(xe),path:oe.path})),v=s.createHref(Re);return v.startsWith("//")?ze(`Location "${K}" resolved to "${v}". A resolved location cannot start with multiple slashes.`):oe.matched.length||ze(`No match found for location with path "${"path"in K?K.path:K}"`),Pe({fullPath:Re,hash:xe,query:o===mu?ny(K.query):K.query||{}},oe,{redirectedFrom:void 0,href:v})}function k(K){return typeof K=="string"?Al(n,K,c.value.path):Pe({},K)}function b(K,X){if(u!==K)return Lo(8,{from:X,to:K})}function A(K){return j(K)}function E(K){return A(Pe(k(K),{replace:!0}))}function P(K){const X=K.matched[K.matched.length-1];if(X&&X.redirect){const{redirect:te}=X;let oe=typeof te=="function"?te(K):te;if(typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=k(oe):{path:oe},oe.params={}),!("path"in oe)&&!("name"in oe))throw ze(`Invalid redirect found:
${JSON.stringify(oe,null,2)}
 when navigating to "${K.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Pe({query:K.query,hash:K.hash,params:"path"in oe?{}:K.params},oe)}}function j(K,X){const te=u=x(K),oe=c.value,xe=K.state,Re=K.force,v=K.replace===!0,y=P(te);if(y)return j(Pe(k(y),{state:typeof y=="object"?Pe({},xe,y.state):xe,force:Re,replace:v}),X||te);const C=te;C.redirectedFrom=X;let F;return!Re&&ou(o,oe,te)&&(F=Lo(16,{to:C,from:oe}),Et(oe,oe,!0,!1)),(F?Promise.resolve(F):se(C,oe)).catch(D=>rn(D)?rn(D,2)?D:Ke(D):ce(D,C,oe)).then(D=>{if(D){if(rn(D,2))return ou(o,x(D.to),C)&&X&&(X._count=X._count?X._count+1:1)>30?(ze(`Detected a possibly infinite redirection in a navigation guard when going from "${oe.fullPath}" to "${C.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):j(Pe({replace:v},k(D.to),{state:typeof D.to=="object"?Pe({},xe,D.to.state):xe,force:Re}),X||C)}else D=Z(C,oe,!0,v,xe);return de(C,oe,D),D})}function L(K,X){const te=b(K,X);return te?Promise.reject(te):Promise.resolve()}function q(K){const X=Qt.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(K):K()}function se(K,X){let te;const[oe,xe,Re]=xy(K,X);te=Ml(oe.reverse(),"beforeRouteLeave",K,X);for(const y of oe)y.leaveGuards.forEach(C=>{te.push(In(C,K,X))});const v=L.bind(null,K,X);return te.push(v),Ct(te).then(()=>{te=[];for(const y of l.list())te.push(In(y,K,X));return te.push(v),Ct(te)}).then(()=>{te=Ml(xe,"beforeRouteUpdate",K,X);for(const y of xe)y.updateGuards.forEach(C=>{te.push(In(C,K,X))});return te.push(v),Ct(te)}).then(()=>{te=[];for(const y of K.matched)if(y.beforeEnter&&!X.matched.includes(y))if(Tt(y.beforeEnter))for(const C of y.beforeEnter)te.push(In(C,K,X));else te.push(In(y.beforeEnter,K,X));return te.push(v),Ct(te)}).then(()=>(K.matched.forEach(y=>y.enterCallbacks={}),te=Ml(Re,"beforeRouteEnter",K,X),te.push(v),Ct(te))).then(()=>{te=[];for(const y of a.list())te.push(In(y,K,X));return te.push(v),Ct(te)}).catch(y=>rn(y,8)?y:Promise.reject(y))}function de(K,X,te){for(const oe of r.list())q(()=>oe(K,X,te))}function Z(K,X,te,oe,xe){const Re=b(K,X);if(Re)return Re;const v=X===wn,y=mn?history.state:{};te&&(oe||v?s.replace(K.fullPath,Pe({scroll:v&&y&&y.scroll},xe)):s.push(K.fullPath,xe)),c.value=K,Et(K,X,te,v),Ke()}let _e;function ge(){_e||(_e=s.listen((K,X,te)=>{if(!jn.listening)return;const oe=x(K),xe=P(oe);if(xe){j(Pe(xe,{replace:!0}),oe).catch(fi);return}u=oe;const Re=c.value;mn&&hb(su(Re.fullPath,te.delta),dl()),se(oe,Re).catch(v=>rn(v,12)?v:rn(v,2)?(j(v.to,oe).then(y=>{rn(y,20)&&!te.delta&&te.type===Ti.pop&&s.go(-1,!1)}).catch(fi),Promise.reject()):(te.delta&&s.go(-te.delta,!1),ce(v,oe,Re))).then(v=>{v=v||Z(oe,Re,!1),v&&(te.delta&&!rn(v,8)?s.go(-te.delta,!1):te.type===Ti.pop&&rn(v,20)&&s.go(-1,!1)),de(oe,Re,v)}).catch(fi)}))}let Se=Yo(),Le=Yo(),ne;function ce(K,X,te){Ke(K);const oe=Le.list();return oe.length?oe.forEach(xe=>xe(K,X,te)):(ze("uncaught error during route navigation:"),console.error(K)),Promise.reject(K)}function ke(){return ne&&c.value!==wn?Promise.resolve():new Promise((K,X)=>{Se.add([K,X])})}function Ke(K){return ne||(ne=!K,ge(),Se.list().forEach(([X,te])=>K?te(K):X()),Se.reset()),K}function Et(K,X,te,oe){const{scrollBehavior:xe}=e;if(!mn||!xe)return Promise.resolve();const Re=!te&&_b(su(K.fullPath,0))||(oe||!te)&&history.state&&history.state.scroll||null;return it().then(()=>xe(K,X,Re)).then(v=>v&&fb(v)).catch(v=>ce(v,K,X))}const nt=K=>s.go(K);let ht;const Qt=new Set,jn={currentRoute:c,listening:!0,addRoute:h,removeRoute:_,hasRoute:w,getRoutes:S,resolve:x,options:e,push:A,replace:E,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:l.add,beforeResolve:a.add,afterEach:r.add,onError:Le.add,isReady:ke,install(K){const X=this;K.component("RouterLink",ay),K.component("RouterView",dy),K.config.globalProperties.$router=X,Object.defineProperty(K.config.globalProperties,"$route",{enumerable:!0,get:()=>M(c)}),mn&&!ht&&c.value===wn&&(ht=!0,A(s.location).catch(xe=>{ze("Unexpected error when starting the router:",xe)}));const te={};for(const xe in wn)te[xe]=R(()=>c.value[xe]);K.provide($r,X),K.provide(dm,Ve(te)),K.provide(Ia,c);const oe=K.unmount;Qt.add(K),K.unmount=function(){Qt.delete(K),Qt.size<1&&(u=wn,_e&&_e(),_e=null,c.value=wn,ht=!1,ne=!1),oe()},mn&&fy(K,X,t)}};function Ct(K){return K.reduce((X,te)=>X.then(()=>q(te)),Promise.resolve())}return jn}function xy(e,t){const n=[],o=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let a=0;a<l;a++){const r=t.matched[a];r&&(e.matched.find(u=>Nn(u,r))?o.push(r):n.push(r));const c=e.matched[a];c&&(t.matched.find(u=>Nn(u,c))||s.push(c))}return[n,o,s]}const Pl=G(!1),_i=G(!1),To=G(!1),ky=G(!0),Oa=m0({xs:460,...p0}),ho=Q0(),bm=D0(),$y=R(()=>ho.height.value-ho.width.value/Cn>180),ym=H0(Ut?document.body:null),Pn=c0(),Iy=R(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Pn.value)==null?void 0:e.tagName)||"")||((t=Pn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),zy=R(()=>{var e;return["BUTTON","A"].includes(((e=Pn.value)==null?void 0:e.tagName)||"")});Jt("slidev-camera","default");Jt("slidev-mic","default");const gs=Jt("slidev-scale",0),ut=Jt("slidev-show-overview",!1),Kl=Jt("slidev-presenter-cursor",!0),bu=Jt("slidev-show-editor",!1);Jt("slidev-editor-width",Ut?window.innerWidth*.4:100);const Sm=Yp(ut);function yu(e,t,n,o=s=>s){return e*o(.5-t*(.5-n))}function Oy(e){return[-e[0],-e[1]]}function Ft(e,t){return[e[0]+t[0],e[1]+t[1]]}function Pt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Dt(e,t){return[e[0]*t,e[1]*t]}function Ty(e,t){return[e[0]/t,e[1]/t]}function Zo(e){return[e[1],-e[0]]}function Su(e,t){return e[0]*t[0]+e[1]*t[1]}function Ey(e,t){return e[0]===t[0]&&e[1]===t[1]}function Cy(e){return Math.hypot(e[0],e[1])}function Ay(e){return e[0]*e[0]+e[1]*e[1]}function wu(e,t){return Ay(Pt(e,t))}function wm(e){return Ty(e,Cy(e))}function My(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Xo(e,t,n){let o=Math.sin(n),s=Math.cos(n),l=e[0]-t[0],a=e[1]-t[1],r=l*s-a*o,c=l*o+a*s;return[r+t[0],c+t[1]]}function Ta(e,t,n){return Ft(e,Dt(Pt(t,e),n))}function xu(e,t,n){return Ft(e,Dt(t,n))}var{min:Io,PI:Py}=Math,ku=.275,ei=Py+1e-4;function Ky(e,t={}){let{size:n=16,smoothing:o=.5,thinning:s=.5,simulatePressure:l=!0,easing:a=ne=>ne,start:r={},end:c={},last:u=!1}=t,{cap:p=!0,easing:m=ne=>ne*(2-ne)}=r,{cap:f=!0,easing:h=ne=>--ne*ne*ne+1}=c;if(e.length===0||n<=0)return[];let _=e[e.length-1].runningLength,S=r.taper===!1?0:r.taper===!0?Math.max(n,_):r.taper,w=c.taper===!1?0:c.taper===!0?Math.max(n,_):c.taper,x=Math.pow(n*o,2),k=[],b=[],A=e.slice(0,10).reduce((ne,ce)=>{let ke=ce.pressure;if(l){let Ke=Io(1,ce.distance/n),Et=Io(1,1-Ke);ke=Io(1,ne+(Et-ne)*(Ke*ku))}return(ne+ke)/2},e[0].pressure),E=yu(n,s,e[e.length-1].pressure,a),P,j=e[0].vector,L=e[0].point,q=L,se=L,de=q,Z=!1;for(let ne=0;ne<e.length;ne++){let{pressure:ce}=e[ne],{point:ke,vector:Ke,distance:Et,runningLength:nt}=e[ne];if(ne<e.length-1&&_-nt<3)continue;if(s){if(l){let oe=Io(1,Et/n),xe=Io(1,1-oe);ce=Io(1,A+(xe-A)*(oe*ku))}E=yu(n,s,ce,a)}else E=n/2;P===void 0&&(P=E);let ht=nt<S?m(nt/S):1,Qt=_-nt<w?h((_-nt)/w):1;E=Math.max(.01,E*Math.min(ht,Qt));let jn=(ne<e.length-1?e[ne+1]:e[ne]).vector,Ct=ne<e.length-1?Su(Ke,jn):1,K=Su(Ke,j)<0&&!Z,X=Ct!==null&&Ct<0;if(K||X){let oe=Dt(Zo(j),E);for(let xe=1/13,Re=0;Re<=1;Re+=xe)se=Xo(Pt(ke,oe),ke,ei*Re),k.push(se),de=Xo(Ft(ke,oe),ke,ei*-Re),b.push(de);L=se,q=de,X&&(Z=!0);continue}if(Z=!1,ne===e.length-1){let oe=Dt(Zo(Ke),E);k.push(Pt(ke,oe)),b.push(Ft(ke,oe));continue}let te=Dt(Zo(Ta(jn,Ke,Ct)),E);se=Pt(ke,te),(ne<=1||wu(L,se)>x)&&(k.push(se),L=se),de=Ft(ke,te),(ne<=1||wu(q,de)>x)&&(b.push(de),q=de),A=ce,j=Ke}let _e=e[0].point.slice(0,2),ge=e.length>1?e[e.length-1].point.slice(0,2):Ft(e[0].point,[1,1]),Se=[],Le=[];if(e.length===1){if(!(S||w)||u){let ne=xu(_e,wm(Zo(Pt(_e,ge))),-(P||E)),ce=[];for(let ke=1/13,Ke=ke;Ke<=1;Ke+=ke)ce.push(Xo(ne,_e,ei*2*Ke));return ce}}else{if(!(S||w&&e.length===1))if(p)for(let ce=1/13,ke=ce;ke<=1;ke+=ce){let Ke=Xo(b[0],_e,ei*ke);Se.push(Ke)}else{let ce=Pt(k[0],b[0]),ke=Dt(ce,.5),Ke=Dt(ce,.51);Se.push(Pt(_e,ke),Pt(_e,Ke),Ft(_e,Ke),Ft(_e,ke))}let ne=Zo(Oy(e[e.length-1].vector));if(w||S&&e.length===1)Le.push(ge);else if(f){let ce=xu(ge,ne,E);for(let ke=1/29,Ke=ke;Ke<1;Ke+=ke)Le.push(Xo(ce,ge,ei*3*Ke))}else Le.push(Ft(ge,Dt(ne,E)),Ft(ge,Dt(ne,E*.99)),Pt(ge,Dt(ne,E*.99)),Pt(ge,Dt(ne,E)))}return k.concat(Le,b.reverse(),Se)}function Ly(e,t={}){var n;let{streamline:o=.5,size:s=16,last:l=!1}=t;if(e.length===0)return[];let a=.15+(1-o)*.85,r=Array.isArray(e[0])?e:e.map(({x:h,y:_,pressure:S=.5})=>[h,_,S]);if(r.length===2){let h=r[1];r=r.slice(0,-1);for(let _=1;_<5;_++)r.push(Ta(r[0],h,_/4))}r.length===1&&(r=[...r,[...Ft(r[0],[1,1]),...r[0].slice(2)]]);let c=[{point:[r[0][0],r[0][1]],pressure:r[0][2]>=0?r[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,m=c[0],f=r.length-1;for(let h=1;h<r.length;h++){let _=l&&h===f?r[h].slice(0,2):Ta(m.point,r[h],a);if(Ey(m.point,_))continue;let S=My(_,m.point);if(p+=S,h<f&&!u){if(p<s)continue;u=!0}m={point:_,pressure:r[h][2]>=0?r[h][2]:.5,vector:wm(Pt(m.point,_)),distance:S,runningLength:p},c.push(m)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function Ry(e,t={}){return Ky(Ly(e,t),t)}var Wy=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let o=0,s=n.length;o<s;o++)n[o](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(s=>t!==s)}}});function Fs(e,t){return e-t}function Hy(e){return e<0?-1:1}function js(e){return[Math.abs(e),Hy(e)]}function xm(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Ny=2,fn=Ny,No=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const s=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-s.left)*o,y:(e.pageY-s.top)*o,pressure:e.pressure}}else{const s=this.drauu.svgPoint;s.x=e.clientX,s.y=e.clientY;const l=s.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*o,y:l.y*o,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",o.fill??"transparent"),n.setAttribute("stroke",o.color),n.setAttribute("stroke-width",o.size.toString()),n.setAttribute("stroke-linecap","round"),o.dasharray&&n.setAttribute("stroke-dasharray",o.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(fn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Dy=class extends No{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Ry(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((o,[s,l],a,r)=>{const[c,u]=r[(a+1)%r.length];return o.push(s,l,(s+c)/2,(l+u)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},Fy=class extends No{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=js(e.x-this.start.x),[o,s]=js(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[l,a]=[this.start.x,this.start.x+t*n].sort(Fs),[r,c]=[this.start.y,this.start.y+o*s].sort(Fs);this.attr("cx",(l+a)/2),this.attr("cy",(r+c)/2),this.attr("rx",(a-l)/2),this.attr("ry",(c-r)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function km(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),s.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(s),n.appendChild(o),n}var jy=class extends No{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=xm(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(km(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const o=e.x-this.start.x,s=e.y-this.start.y;if(s!==0){let l=o/s;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+s*l,n=this.start.y+s):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Vy=class extends No{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=js(e.x-this.start.x),[o,s]=js(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[l,a]=[this.start.x,this.start.x+t*n].sort(Fs),[r,c]=[this.start.y,this.start.y+o*s].sort(Fs);this.attr("x",l),this.attr("y",r),this.attr("width",a-l),this.attr("height",c-r)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function By(e,t){const n=e.x-t.x,o=e.y-t.y;return n*n+o*o}function qy(e,t,n){let o=t.x,s=t.y,l=n.x-o,a=n.y-s;if(l!==0||a!==0){const r=((e.x-o)*l+(e.y-s)*a)/(l*l+a*a);r>1?(o=n.x,s=n.y):r>0&&(o+=l*r,s+=a*r)}return l=e.x-o,a=e.y-s,l*l+a*a}function Uy(e,t){let n=e[0];const o=[n];let s;for(let l=1,a=e.length;l<a;l++)s=e[l],By(s,n)>t&&(o.push(s),n=s);return n!==s&&s&&o.push(s),o}function Ea(e,t,n,o,s){let l=o,a=0;for(let r=t+1;r<n;r++){const c=qy(e[r],e[t],e[n]);c>l&&(a=r,l=c)}l>o&&(a-t>1&&Ea(e,t,a,o,s),s.push(e[a]),n-a>1&&Ea(e,a,n,o,s))}function Jy(e,t){const n=e.length-1,o=[e[0]];return Ea(e,0,n,t,o),o.push(e[n]),o}function $u(e,t,n=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=n?e:Uy(e,o),e=Jy(e,o),e}var Qy=class extends No{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=xm();const t=km(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=$u(this.points,1,!0),this.count=0),this.attr("d",zu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",zu($u(this.points,1,!0))),!e.getTotalLength()))}};function Yy(e,t){const n=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(n**2+o**2),angle:Math.atan2(o,n)}}function Iu(e,t,n,o){const s=t||e,l=n||e,a=.2,r=Yy(s,l),c=r.angle+(o?Math.PI:0),u=r.length*a,p=e.x+Math.cos(c)*u,m=e.y+Math.sin(c)*u;return{x:p,y:m}}function Gy(e,t,n){const o=Iu(n[t-1],n[t-2],e),s=Iu(e,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(fn)},${o.y.toFixed(fn)} ${s.x.toFixed(fn)},${s.y.toFixed(fn)} ${e.x.toFixed(fn)},${e.y.toFixed(fn)}`}function zu(e){return e.reduce((t,n,o,s)=>o===0?`M ${n.x.toFixed(fn)},${n.y.toFixed(fn)}`:`${t} ${Gy(n,o,s)}`,"")}var Zy=class extends No{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,o)=>{if(n&&n.length)for(let s=0;s<n.length;s++){const l=n[s];if(l.getTotalLength){const a=l.getTotalLength();for(let r=0;r<this.pathSubFactor;r++){const c=l.getPointAtLength(a*r/this.pathSubFactor),u=l.getPointAtLength(a*(r+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:r,element:o||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,o=e.x2,s=t.x1,l=t.x2,a=e.y1,r=e.y2,c=t.y1,u=t.y2,p=(n-o)*(c-u)-(a-r)*(s-l),m=(n*r-a*o)*(s-l)-(n-o)*(s*u-c*l),f=(n*r-a*o)*(c-u)-(a-r)*(s*u-c*l),h=(_,S,w)=>_>=S&&_<=w?!0:_>=w&&_<=S;if(p===0)return!1;{const _={x:m/p,y:f/p};return h(_.x,n,o)&&h(_.y,a,r)&&h(_.x,s,l)&&h(_.y,c,u)}}};function Xy(e){return{draw:new Qy(e),stylus:new Dy(e),line:new jy(e),rectangle:new Vy(e),ellipse:new Fy(e),eraseLine:new Zy(e)}}var eS=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Wy(),this._models=Xy(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),s=this.eventMove.bind(this),l=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",s,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function tS(e){return new eS(e)}const Ca=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],en=Jt("slidev-drawing-enabled",!1),v9=Jt("slidev-drawing-pinned",!1),nS=G(!1),oS=G(!1),iS=G(!1),Ci=G(!1),so=O1(Jt("slidev-drawing-brush",{color:Ca[0],size:4,mode:"stylus"})),Ou=G("stylus"),$m=R(()=>Oe.drawings.syncAll||vt.value);let Ai=!1;const ti=R({get(){return Ou.value},set(e){Ou.value=e,e==="arrow"?(so.mode="line",so.arrowEnd=!0):(so.mode=e,so.arrowEnd=!1)}}),sS=Ve({brush:so,acceptsInputTypes:R(()=>en.value&&(!Oe.drawings.presenterOnly||vt.value)?void 0:["pen"]),coordinateTransform:!1}),ft=el(tS(sS));function lS(){ft.clear(),$m.value&&qp(qe.value,"")}function Ir(){var e;oS.value=ft.canRedo(),nS.value=ft.canUndo(),iS.value=!!((e=ft.el)!=null&&e.children.length)}function aS(e){Ai=!0;const t=Ns[e||qe.value];t!=null?ft.load(t):ft.clear(),Ir(),Ai=!1}ft.on("changed",()=>{if(Ir(),!Ai){const e=ft.dump(),t=qe.value;(Ns[t]||"")!==e&&$m.value&&qp(t,ft.dump())}});k1(e=>{Ai=!0,e[qe.value]!=null&&ft.load(e[qe.value]||""),Ai=!1,Ir()});it(()=>{ve(qe,()=>{ft.mounted&&aS()},{immediate:!0})});ft.on("start",()=>Ci.value=!0);ft.on("end",()=>Ci.value=!1);window.addEventListener("keydown",e=>{if(!en.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ft.redo():ft.undo():e.code==="Escape"?en.value=!1:e.code==="KeyL"&&t?ti.value="line":e.code==="KeyA"&&t?ti.value="arrow":e.code==="KeyS"&&t?ti.value="stylus":e.code==="KeyR"&&t?ti.value="rectangle":e.code==="KeyE"&&t?ti.value="ellipse":e.code==="KeyC"&&t?lS():e.code.startsWith("Digit")&&t&&+e.code[5]<=Ca.length?so.color=Ca[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ye(...e){return R(()=>e.every(t=>Je(t)))}function kt(e){return R(()=>!Je(e))}const Tu=$0(),Ll=Jt("slidev-color-schema","auto"),Aa=R(()=>Oe.colorSchema!=="auto"),zr=R({get(){return Aa.value?Oe.colorSchema==="dark":Ll.value==="auto"?Tu.value:Ll.value==="dark"},set(e){Aa.value||(Ll.value=e===Tu.value?"auto":e?"dark":"light")}}),Im=Yp(zr);Ut&&ve(zr,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const bs=G(1),ys=R(()=>Qe.length-1),Ot=G(0),Or=G(0);function rS(){Ot.value>bs.value&&(Ot.value-=1)}function cS(){Ot.value<ys.value&&(Ot.value+=1)}function uS(){if(Ot.value>bs.value){let e=Ot.value-Or.value;e<bs.value&&(e=bs.value),Ot.value=e}}function dS(){if(Ot.value<ys.value){let e=Ot.value+Or.value;e>ys.value&&(e=ys.value),Ot.value=e}}function pS(){const{escape:e,space:t,shift:n,left:o,right:s,up:l,down:a,enter:r,d:c,g:u,o:p}=bm;let m=[{name:"next_space",key:Ye(t,kt(n)),fn:Kn,autoRepeat:!0},{name:"prev_space",key:Ye(t,n),fn:Ln,autoRepeat:!0},{name:"next_right",key:Ye(s,kt(n),kt(ut)),fn:Kn,autoRepeat:!0},{name:"prev_left",key:Ye(o,kt(n),kt(ut)),fn:Ln,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Kn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Ln,autoRepeat:!0},{name:"next_down",key:Ye(a,kt(ut)),fn:Pi,autoRepeat:!0},{name:"prev_up",key:Ye(l,kt(ut)),fn:()=>Ki(!1),autoRepeat:!0},{name:"next_shift",key:Ye(s,n),fn:Pi,autoRepeat:!0},{name:"prev_shift",key:Ye(o,n),fn:()=>Ki(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(c,kt(en)),fn:Im},{name:"toggle_overview",key:Ye(p,kt(en)),fn:Sm},{name:"hide_overview",key:Ye(e,kt(en)),fn:()=>ut.value=!1},{name:"goto",key:Ye(u,kt(en)),fn:()=>To.value=!To.value},{name:"next_overview",key:Ye(s,ut),fn:cS},{name:"prev_overview",key:Ye(o,ut),fn:rS},{name:"up_overview",key:Ye(l,ut),fn:uS},{name:"down_overview",key:Ye(a,ut),fn:dS},{name:"goto_from_overview",key:Ye(r,ut),fn:()=>{Wo(Ot.value),ut.value=!1}}];const f=new Set(m.map(_=>_.name));if(m.filter(_=>_.name&&f.has(_.name)).length===0){const _=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(_),console.warn(_)}return m}const zm=Ye(kt(Iy),kt(zy),ky);function mS(e,t,n=!1){typeof e=="string"&&(e=bm[e]);const o=Ye(e,zm);let s=0,l;const a=()=>{if(clearTimeout(l),!o.value){s=0;return}n&&(l=setTimeout(a,Math.max(1e3-s*250,150)),s++),t()};return ve(o,a,{flush:"sync"})}function fS(e,t){return r0(e,n=>{zm.value&&(n.repeat||t())})}function hS(){const e=pS();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&mS(n.key,n.fn,n.autoRepeat)}),fS("f",()=>ym.toggle())}const _S={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vS=i("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),gS=[vS];function bS(e,t){return g(),ie("svg",_S,gS)}const yS={name:"carbon-close",render:bS};function Tr(e,t=""){var s,l;const n=["slidev-page",t],o=(l=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:l.no;return o!=null&&n.push(`slidev-page-${o}`),n.filter(Boolean).join(" ")}const SS=Me({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;I(O);const n=G(),o=R0(n),s=R(()=>t.width?t.width:o.width.value),l=R(()=>t.width?t.width/Cn:o.height.value);t.width&&yo(()=>{n.value&&(n.value.style.width=`${s.value}px`,n.value.style.height=`${l.value}px`)});const a=R(()=>s.value/l.value),r=R(()=>t.scale&&!Ro.value?t.scale:a.value<Cn?s.value/An:l.value*Cn/An),c=R(()=>({height:`${wr}px`,width:`${An}px`,transform:`translate(-50%, -50%) scale(${r.value})`})),u=R(()=>({"select-none":!Oe.selectable,"slidev-code-line-numbers":Oe.lineNumbers}));return It(jp,r),(p,m)=>(g(),ie("div",{id:"slide-container",ref_key:"root",ref:n,class:Be(u.value)},[i("div",{id:"slide-content",style:tt(c.value)},[qt(p.$slots,"default")],4),qt(p.$slots,"controls")],2))}});const T=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},Om=T(SS,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Er=Me({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Kt(e,"clicks",t),o=Kt(e,"clicksElements",t),s=Kt(e,"clicksDisabled",t),l=Kt(e,"clicksOrderMap",t);o.value.length=0,It(c1,e.route),It(u1,e.context),It(pi,n),It(mi,s),It(eo,o),It(ga,l)},render(){var e,t;return this.$props.is?St(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),wS=["innerHTML"],xS=Me({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return I(O),(t,n)=>M(Ns)[t.page]?(g(),ie("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:M(Ns)[t.page]},null,8,wS)):ye("v-if",!0)}}),Tm=T(xS,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),kS=Object.freeze(Object.defineProperty({__proto__:null,default:Tm},Symbol.toStringTag,{value:"Module"})),$S={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},IS=["onClick"],Rl=4*16*2,Eu=2*16,zS=Me({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;I(O);const o=Kt(n,"modelValue",t);function s(){o.value=!1}function l(m){Wo(m),s()}function a(m){return m===Ot.value}const r=Oa.smaller("xs"),c=Oa.smaller("sm"),u=R(()=>r.value?ho.width.value-Rl:c.value?(ho.width.value-Rl-Eu)/2:300),p=R(()=>Math.floor((ho.width.value-Rl)/(u.value+Eu)));return yo(()=>{Ot.value=qe.value,Or.value=p.value}),(m,f)=>{const h=yS;return g(),ie(Ee,null,[np(i("div",$S,[i("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tt(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(g(!0),ie(Ee,null,Ho(M(Qe).slice(0,-1),(_,S)=>(g(),ie("div",{key:_.path,class:"relative"},[i("div",{class:Be(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(S+1),"border-gray-400":!a(S+1)}]),style:tt(M(xr)),onClick:w=>l(+_.path)},[(g(),z(Om,{key:_.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:$(()=>[_!=null&&_.component?(g(),z(M(Er),{key:0,is:_.component,"clicks-disabled":!0,class:Be(M(Tr)(_)),route:_,context:"overview"},null,8,["is","class","route"])):ye("v-if",!0),Q(Tm,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],14,IS),i("div",{class:"absolute top-0 opacity-50",style:tt(`left: ${u.value+5}px`)},gt(S+1),5)]))),128))],4)],512),[[Ap,M(o)]]),M(o)?(g(),ie("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:s},[Q(h)])):ye("v-if",!0)],64)}}});const OS=T(zS,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),TS="/TPSI/4/svelte/assets/logo-b72bde5d.png",ES={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},CS=Me({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;I(O);const o=Kt(n,"modelValue",t);function s(){o.value=!1}return(l,a)=>(g(),z(ip,null,[M(o)?(g(),ie("div",ES,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=r=>s())}),i("div",{class:Be(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[qt(l.$slots,"default")],2)])):ye("v-if",!0)],1024))}}),AS=T(CS,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),MS={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},PS=["innerHTML"],KS=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:TS,alt:"Slidev"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),d("dev ")])])],-1),LS=Me({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;I(O);const o=Kt(n,"modelValue",t),s=R(()=>typeof Oe.info=="string");return(l,a)=>(g(),z(AS,{modelValue:M(o),"onUpdate:modelValue":a[0]||(a[0]=r=>Ce(o)?o.value=r:null),class:"px-6 py-4"},{default:$(()=>[i("div",MS,[s.value?(g(),ie("div",{key:0,class:"mb-4",innerHTML:M(Oe).info},null,8,PS)):ye("v-if",!0),KS])]),_:1},8,["modelValue"]))}});const RS=T(LS,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function vn(e){return Array.isArray?Array.isArray(e):Am(e)==="[object Array]"}const WS=1/0;function HS(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-WS?"-0":t}function NS(e){return e==null?"":HS(e)}function tn(e){return typeof e=="string"}function Em(e){return typeof e=="number"}function DS(e){return e===!0||e===!1||FS(e)&&Am(e)=="[object Boolean]"}function Cm(e){return typeof e=="object"}function FS(e){return Cm(e)&&e!==null}function zt(e){return e!=null}function Wl(e){return!e.trim().length}function Am(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const jS="Incorrect 'index' type",VS=e=>`Invalid value for key ${e}`,BS=e=>`Pattern length exceeds max of ${e}.`,qS=e=>`Missing ${e} property in key`,US=e=>`Property 'weight' in key '${e}' must be a positive integer`,Cu=Object.prototype.hasOwnProperty;class JS{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(o=>{let s=Mm(o);n+=s.weight,this._keys.push(s),this._keyMap[s.id]=s,n+=s.weight}),this._keys.forEach(o=>{o.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Mm(e){let t=null,n=null,o=null,s=1,l=null;if(tn(e)||vn(e))o=e,t=Au(e),n=Ma(e);else{if(!Cu.call(e,"name"))throw new Error(qS("name"));const a=e.name;if(o=a,Cu.call(e,"weight")&&(s=e.weight,s<=0))throw new Error(US(a));t=Au(a),n=Ma(a),l=e.getFn}return{path:t,id:n,weight:s,src:o,getFn:l}}function Au(e){return vn(e)?e:e.split(".")}function Ma(e){return vn(e)?e.join("."):e}function QS(e,t){let n=[],o=!1;const s=(l,a,r)=>{if(zt(l))if(!a[r])n.push(l);else{let c=a[r];const u=l[c];if(!zt(u))return;if(r===a.length-1&&(tn(u)||Em(u)||DS(u)))n.push(NS(u));else if(vn(u)){o=!0;for(let p=0,m=u.length;p<m;p+=1)s(u[p],a,r+1)}else a.length&&s(u,a,r+1)}};return s(e,tn(t)?t.split("."):t,0),o?n:n[0]}const YS={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},GS={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},ZS={location:0,threshold:.6,distance:100},XS={useExtendedSearch:!1,getFn:QS,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var me={...GS,...YS,...ZS,...XS};const ew=/[^ ]+/g;function tw(e=1,t=3){const n=new Map,o=Math.pow(10,t);return{get(s){const l=s.match(ew).length;if(n.has(l))return n.get(l);const a=1/Math.pow(l,.5*e),r=parseFloat(Math.round(a*o)/o);return n.set(l,r),r},clear(){n.clear()}}}class Cr{constructor({getFn:t=me.getFn,fieldNormWeight:n=me.fieldNormWeight}={}){this.norm=tw(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,o)=>{this._keysMap[n.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,tn(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();tn(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,o=this.size();n<o;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!zt(t)||Wl(t))return;let o={v:t,i:n,n:this.norm.get(t)};this.records.push(o)}_addObject(t,n){let o={i:n,$:{}};this.keys.forEach((s,l)=>{let a=s.getFn?s.getFn(t):this.getFn(t,s.path);if(zt(a)){if(vn(a)){let r=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:p}=c.pop();if(zt(p))if(tn(p)&&!Wl(p)){let m={v:p,i:u,n:this.norm.get(p)};r.push(m)}else vn(p)&&p.forEach((m,f)=>{c.push({nestedArrIndex:f,value:m})})}o.$[l]=r}else if(tn(a)&&!Wl(a)){let r={v:a,n:this.norm.get(a)};o.$[l]=r}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Pm(e,t,{getFn:n=me.getFn,fieldNormWeight:o=me.fieldNormWeight}={}){const s=new Cr({getFn:n,fieldNormWeight:o});return s.setKeys(e.map(Mm)),s.setSources(t),s.create(),s}function nw(e,{getFn:t=me.getFn,fieldNormWeight:n=me.fieldNormWeight}={}){const{keys:o,records:s}=e,l=new Cr({getFn:t,fieldNormWeight:n});return l.setKeys(o),l.setIndexRecords(s),l}function us(e,{errors:t=0,currentLocation:n=0,expectedLocation:o=0,distance:s=me.distance,ignoreLocation:l=me.ignoreLocation}={}){const a=t/e.length;if(l)return a;const r=Math.abs(o-n);return s?a+r/s:r?1:a}function ow(e=[],t=me.minMatchCharLength){let n=[],o=-1,s=-1,l=0;for(let a=e.length;l<a;l+=1){let r=e[l];r&&o===-1?o=l:!r&&o!==-1&&(s=l-1,s-o+1>=t&&n.push([o,s]),o=-1)}return e[l-1]&&l-o>=t&&n.push([o,l-1]),n}const no=32;function iw(e,t,n,{location:o=me.location,distance:s=me.distance,threshold:l=me.threshold,findAllMatches:a=me.findAllMatches,minMatchCharLength:r=me.minMatchCharLength,includeMatches:c=me.includeMatches,ignoreLocation:u=me.ignoreLocation}={}){if(t.length>no)throw new Error(BS(no));const p=t.length,m=e.length,f=Math.max(0,Math.min(o,m));let h=l,_=f;const S=r>1||c,w=S?Array(m):[];let x;for(;(x=e.indexOf(t,_))>-1;){let j=us(t,{currentLocation:x,expectedLocation:f,distance:s,ignoreLocation:u});if(h=Math.min(j,h),_=x+p,S){let L=0;for(;L<p;)w[x+L]=1,L+=1}}_=-1;let k=[],b=1,A=p+m;const E=1<<p-1;for(let j=0;j<p;j+=1){let L=0,q=A;for(;L<q;)us(t,{errors:j,currentLocation:f+q,expectedLocation:f,distance:s,ignoreLocation:u})<=h?L=q:A=q,q=Math.floor((A-L)/2+L);A=q;let se=Math.max(1,f-q+1),de=a?m:Math.min(f+q,m)+p,Z=Array(de+2);Z[de+1]=(1<<j)-1;for(let ge=de;ge>=se;ge-=1){let Se=ge-1,Le=n[e.charAt(Se)];if(S&&(w[Se]=+!!Le),Z[ge]=(Z[ge+1]<<1|1)&Le,j&&(Z[ge]|=(k[ge+1]|k[ge])<<1|1|k[ge+1]),Z[ge]&E&&(b=us(t,{errors:j,currentLocation:Se,expectedLocation:f,distance:s,ignoreLocation:u}),b<=h)){if(h=b,_=Se,_<=f)break;se=Math.max(1,2*f-_)}}if(us(t,{errors:j+1,currentLocation:f,expectedLocation:f,distance:s,ignoreLocation:u})>h)break;k=Z}const P={isMatch:_>=0,score:Math.max(.001,b)};if(S){const j=ow(w,r);j.length?c&&(P.indices=j):P.isMatch=!1}return P}function sw(e){let t={};for(let n=0,o=e.length;n<o;n+=1){const s=e.charAt(n);t[s]=(t[s]||0)|1<<o-n-1}return t}class Km{constructor(t,{location:n=me.location,threshold:o=me.threshold,distance:s=me.distance,includeMatches:l=me.includeMatches,findAllMatches:a=me.findAllMatches,minMatchCharLength:r=me.minMatchCharLength,isCaseSensitive:c=me.isCaseSensitive,ignoreLocation:u=me.ignoreLocation}={}){if(this.options={location:n,threshold:o,distance:s,includeMatches:l,findAllMatches:a,minMatchCharLength:r,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(f,h)=>{this.chunks.push({pattern:f,alphabet:sw(f),startIndex:h})},m=this.pattern.length;if(m>no){let f=0;const h=m%no,_=m-h;for(;f<_;)p(this.pattern.substr(f,no),f),f+=no;if(h){const S=m-no;p(this.pattern.substr(S),S)}}else p(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:o}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let _={isMatch:!0,score:0};return o&&(_.indices=[[0,t.length-1]]),_}const{location:s,distance:l,threshold:a,findAllMatches:r,minMatchCharLength:c,ignoreLocation:u}=this.options;let p=[],m=0,f=!1;this.chunks.forEach(({pattern:_,alphabet:S,startIndex:w})=>{const{isMatch:x,score:k,indices:b}=iw(t,_,S,{location:s+w,distance:l,threshold:a,findAllMatches:r,minMatchCharLength:c,includeMatches:o,ignoreLocation:u});x&&(f=!0),m+=k,x&&b&&(p=[...p,...b])});let h={isMatch:f,score:f?m/this.chunks.length:1};return f&&o&&(h.indices=p),h}}class Fn{constructor(t){this.pattern=t}static isMultiMatch(t){return Mu(t,this.multiRegex)}static isSingleMatch(t){return Mu(t,this.singleRegex)}search(){}}function Mu(e,t){const n=e.match(t);return n?n[1]:null}class lw extends Fn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class aw extends Fn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class rw extends Fn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class cw extends Fn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class uw extends Fn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class dw extends Fn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Lm extends Fn{constructor(t,{location:n=me.location,threshold:o=me.threshold,distance:s=me.distance,includeMatches:l=me.includeMatches,findAllMatches:a=me.findAllMatches,minMatchCharLength:r=me.minMatchCharLength,isCaseSensitive:c=me.isCaseSensitive,ignoreLocation:u=me.ignoreLocation}={}){super(t),this._bitapSearch=new Km(t,{location:n,threshold:o,distance:s,includeMatches:l,findAllMatches:a,minMatchCharLength:r,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Rm extends Fn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,o;const s=[],l=this.pattern.length;for(;(o=t.indexOf(this.pattern,n))>-1;)n=o+l,s.push([o,n-1]);const a=!!s.length;return{isMatch:a,score:a?0:1,indices:s}}}const Pa=[lw,Rm,rw,cw,dw,uw,aw,Lm],Pu=Pa.length,pw=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,mw="|";function fw(e,t={}){return e.split(mw).map(n=>{let o=n.trim().split(pw).filter(l=>l&&!!l.trim()),s=[];for(let l=0,a=o.length;l<a;l+=1){const r=o[l];let c=!1,u=-1;for(;!c&&++u<Pu;){const p=Pa[u];let m=p.isMultiMatch(r);m&&(s.push(new p(m,t)),c=!0)}if(!c)for(u=-1;++u<Pu;){const p=Pa[u];let m=p.isSingleMatch(r);if(m){s.push(new p(m,t));break}}}return s})}const hw=new Set([Lm.type,Rm.type]);class _w{constructor(t,{isCaseSensitive:n=me.isCaseSensitive,includeMatches:o=me.includeMatches,minMatchCharLength:s=me.minMatchCharLength,ignoreLocation:l=me.ignoreLocation,findAllMatches:a=me.findAllMatches,location:r=me.location,threshold:c=me.threshold,distance:u=me.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:o,minMatchCharLength:s,findAllMatches:a,ignoreLocation:l,location:r,threshold:c,distance:u},this.pattern=n?t:t.toLowerCase(),this.query=fw(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:s}=this.options;t=s?t:t.toLowerCase();let l=0,a=[],r=0;for(let c=0,u=n.length;c<u;c+=1){const p=n[c];a.length=0,l=0;for(let m=0,f=p.length;m<f;m+=1){const h=p[m],{isMatch:_,indices:S,score:w}=h.search(t);if(_){if(l+=1,r+=w,o){const x=h.constructor.type;hw.has(x)?a=[...a,...S]:a.push(S)}}else{r=0,l=0,a.length=0;break}}if(l){let m={isMatch:!0,score:r/l};return o&&(m.indices=a),m}}return{isMatch:!1,score:1}}}const Ka=[];function vw(...e){Ka.push(...e)}function La(e,t){for(let n=0,o=Ka.length;n<o;n+=1){let s=Ka[n];if(s.condition(e,t))return new s(e,t)}return new Km(e,t)}const Vs={AND:"$and",OR:"$or"},Ra={PATH:"$path",PATTERN:"$val"},Wa=e=>!!(e[Vs.AND]||e[Vs.OR]),gw=e=>!!e[Ra.PATH],bw=e=>!vn(e)&&Cm(e)&&!Wa(e),Ku=e=>({[Vs.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Wm(e,t,{auto:n=!0}={}){const o=s=>{let l=Object.keys(s);const a=gw(s);if(!a&&l.length>1&&!Wa(s))return o(Ku(s));if(bw(s)){const c=a?s[Ra.PATH]:l[0],u=a?s[Ra.PATTERN]:s[c];if(!tn(u))throw new Error(VS(c));const p={keyId:Ma(c),pattern:u};return n&&(p.searcher=La(u,t)),p}let r={children:[],operator:l[0]};return l.forEach(c=>{const u=s[c];vn(u)&&u.forEach(p=>{r.children.push(o(p))})}),r};return Wa(e)||(e=Ku(e)),o(e)}function yw(e,{ignoreFieldNorm:t=me.ignoreFieldNorm}){e.forEach(n=>{let o=1;n.matches.forEach(({key:s,norm:l,score:a})=>{const r=s?s.weight:null;o*=Math.pow(a===0&&r?Number.EPSILON:a,(r||1)*(t?1:l))}),n.score=o})}function Sw(e,t){const n=e.matches;t.matches=[],zt(n)&&n.forEach(o=>{if(!zt(o.indices)||!o.indices.length)return;const{indices:s,value:l}=o;let a={indices:s,value:l};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),t.matches.push(a)})}function ww(e,t){t.score=e.score}function xw(e,t,{includeMatches:n=me.includeMatches,includeScore:o=me.includeScore}={}){const s=[];return n&&s.push(Sw),o&&s.push(ww),e.map(l=>{const{idx:a}=l,r={item:t[a],refIndex:a};return s.length&&s.forEach(c=>{c(l,r)}),r})}class Do{constructor(t,n={},o){this.options={...me,...n},this.options.useExtendedSearch,this._keyStore=new JS(this.options.keys),this.setCollection(t,o)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Cr))throw new Error(jS);this._myIndex=n||Pm(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){zt(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let o=0,s=this._docs.length;o<s;o+=1){const l=this._docs[o];t(l,o)&&(this.removeAt(o),o-=1,s-=1,n.push(l))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:o,includeScore:s,shouldSort:l,sortFn:a,ignoreFieldNorm:r}=this.options;let c=tn(t)?tn(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return yw(c,{ignoreFieldNorm:r}),l&&c.sort(a),Em(n)&&n>-1&&(c=c.slice(0,n)),xw(c,this._docs,{includeMatches:o,includeScore:s})}_searchStringList(t){const n=La(t,this.options),{records:o}=this._myIndex,s=[];return o.forEach(({v:l,i:a,n:r})=>{if(!zt(l))return;const{isMatch:c,score:u,indices:p}=n.searchIn(l);c&&s.push({item:l,idx:a,matches:[{score:u,value:l,norm:r,indices:p}]})}),s}_searchLogical(t){const n=Wm(t,this.options),o=(r,c,u)=>{if(!r.children){const{keyId:m,searcher:f}=r,h=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(c,m),searcher:f});return h&&h.length?[{idx:u,item:c,matches:h}]:[]}const p=[];for(let m=0,f=r.children.length;m<f;m+=1){const h=r.children[m],_=o(h,c,u);if(_.length)p.push(..._);else if(r.operator===Vs.AND)return[]}return p},s=this._myIndex.records,l={},a=[];return s.forEach(({$:r,i:c})=>{if(zt(r)){let u=o(n,r,c);u.length&&(l[c]||(l[c]={idx:c,item:r,matches:[]},a.push(l[c])),u.forEach(({matches:p})=>{l[c].matches.push(...p)}))}}),a}_searchObjectList(t){const n=La(t,this.options),{keys:o,records:s}=this._myIndex,l=[];return s.forEach(({$:a,i:r})=>{if(!zt(a))return;let c=[];o.forEach((u,p)=>{c.push(...this._findMatches({key:u,value:a[p],searcher:n}))}),c.length&&l.push({idx:r,item:a,matches:c})}),l}_findMatches({key:t,value:n,searcher:o}){if(!zt(n))return[];let s=[];if(vn(n))n.forEach(({v:l,i:a,n:r})=>{if(!zt(l))return;const{isMatch:c,score:u,indices:p}=o.searchIn(l);c&&s.push({score:u,key:t,value:l,idx:a,norm:r,indices:p})});else{const{v:l,n:a}=n,{isMatch:r,score:c,indices:u}=o.searchIn(l);r&&s.push({score:c,key:t,value:l,norm:a,indices:u})}return s}}Do.version="6.6.2";Do.createIndex=Pm;Do.parseIndex=nw;Do.config=me;Do.parseQuery=Wm;vw(_w);const kw={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},$w=["value","disabled","onKeydown"],Iw=["border","onClick"],zw={"w-4":"","text-right":"",op50:"","text-sm":""},Ow=Me({__name:"Goto",setup(e){I(O);const t=G(),n=G(),o=G(),s=G(),l=G(""),a=G(0);function r(b){return b!=null}const c=R(()=>new Do(Qe.map(b=>{var A;return(A=b.meta)==null?void 0:A.slide}).filter(r),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=R(()=>l.value.startsWith("/")?l.value.substring(1):l.value),p=R(()=>c.value.search(u.value).map(b=>b.item)),m=R(()=>!!p.value.length);function f(){if(m.value){const b=p.value.at(a.value||0);b&&Wo(b.no)}h()}function h(){l.value="",To.value=!1}function _(b){b.preventDefault(),a.value++,a.value>=p.value.length&&(a.value=0),w()}function S(b){b.preventDefault(),a.value--,a.value<=-2&&(a.value=p.value.length-1),w()}function w(){var A;const b=(A=s.value)==null?void 0:A[a.value];b&&o.value&&(b.offsetTop+b.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:b.offsetTop+b.offsetHeight-o.value.offsetHeight+1}):b.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:b.offsetTop}))}function x(b){a.value=0,l.value=b.target.value}function k(b){Wo(b),h()}return ve(To,async b=>{var A;b?(l.value="",a.value=0,setTimeout(()=>{var E;return(E=n.value)==null?void 0:E.focus()},0)):(A=n.value)==null||A.blur()}),ve(Pn,()=>{var b;(b=t.value)!=null&&b.contains(Pn.value)||h()}),(b,A)=>(g(),ie("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:Be(["fixed right-5 transition-all",M(To)?"top-5":"-top-20"]),"w-90":""},[i("div",kw,[i("input",{ref_key:"input",ref:n,value:l.value,type:"text",disabled:!M(To),class:Be(["outline-none bg-transparent",{"text-red-400":!m.value&&l.value}]),placeholder:"Goto...",onKeydown:[os(f,["enter"]),os(h,["escape"]),os(_,["down"]),os(S,["up"])],onInput:x},null,42,$w)]),p.value.length>0?(g(),ie("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(g(!0),ie(Ee,null,Ho(p.value,(E,P)=>(g(),ie("li",{ref_for:!0,ref_key:"items",ref:s,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:P===0?"":"t main",class:Be(a.value===P?"bg-active op100":"op80"),onClick:ug(j=>k(E.no),["stop"])},[i("div",zw,gt(E.no),1),d(" "+gt(E.title),1)],10,Iw))),128))],512)):ye("v-if",!0)],2))}});const Tw=T(Ow,[["__scopeId","data-v-f5ee02a7"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),Ew=Me({__name:"Controls",setup(e){I(O);const t=sn(),n=sn();return(o,s)=>(g(),ie(Ee,null,[Q(OS,{modelValue:M(ut),"onUpdate:modelValue":s[0]||(s[0]=l=>Ce(ut)?ut.value=l:null)},null,8,["modelValue"]),Q(Tw),t.value?(g(),z(M(t),{key:0})):ye("v-if",!0),n.value?(g(),z(M(n),{key:1,modelValue:M(Pl),"onUpdate:modelValue":s[1]||(s[1]=l=>Ce(Pl)?Pl.value=l:null)},null,8,["modelValue"])):ye("v-if",!0),M(Oe).info?(g(),z(RS,{key:2,modelValue:M(_i),"onUpdate:modelValue":s[2]||(s[2]=l=>Ce(_i)?_i.value=l:null)},null,8,["modelValue"])):ye("v-if",!0)],64))}}),Cw=T(Ew,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),Aw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Mw=i("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Pw=[Mw];function Kw(e,t){return g(),ie("svg",Aw,Pw)}const Lw={name:"carbon-settings-adjust",render:Kw},Rw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ww=i("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Hw=i("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Nw=[Ww,Hw];function Dw(e,t){return g(),ie("svg",Rw,Nw)}const Fw={name:"carbon-information",render:Dw},jw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vw=i("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Bw=[Vw];function qw(e,t){return g(),ie("svg",jw,Bw)}const Uw={name:"carbon-download",render:qw},Jw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qw=i("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Yw=i("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Gw=[Qw,Yw];function Zw(e,t){return g(),ie("svg",Jw,Gw)}const Xw={name:"carbon-user-speaker",render:Zw},ex={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tx=i("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),nx=i("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),ox=[tx,nx];function ix(e,t){return g(),ie("svg",ex,ox)}const sx={name:"carbon-presentation-file",render:ix},lx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ax=i("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),rx=[ax];function cx(e,t){return g(),ie("svg",lx,rx)}const ux={name:"carbon-pen",render:cx},dx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},px=i("g",{fill:"currentColor"},[i("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),i("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),mx=[px];function fx(e,t){return g(),ie("svg",dx,mx)}const hx={name:"ph-cursor-duotone",render:fx},_x={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},vx=i("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),gx=[vx];function bx(e,t){return g(),ie("svg",_x,gx)}const Hm={name:"ph-cursor-fill",render:bx},yx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sx=i("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),wx=[Sx];function xx(e,t){return g(),ie("svg",yx,wx)}const kx={name:"carbon-sun",render:xx},$x={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ix=i("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),zx=[Ix];function Ox(e,t){return g(),ie("svg",$x,zx)}const Tx={name:"carbon-moon",render:Ox},Ex={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cx=i("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Ax=[Cx];function Mx(e,t){return g(),ie("svg",Ex,Ax)}const Px={name:"carbon-apps",render:Mx},Kx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lx=i("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Rx=[Lx];function Wx(e,t){return g(),ie("svg",Kx,Rx)}const Nm={name:"carbon-arrow-right",render:Wx},Hx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nx=i("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Dx=[Nx];function Fx(e,t){return g(),ie("svg",Hx,Dx)}const jx={name:"carbon-arrow-left",render:Fx},Vx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bx=i("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),qx=[Bx];function Ux(e,t){return g(),ie("svg",Vx,qx)}const Jx={name:"carbon-maximize",render:Ux},Qx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yx=i("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Gx=[Yx];function Zx(e,t){return g(),ie("svg",Qx,Gx)}const Xx={name:"carbon-minimize",render:Zx},ek={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tk=i("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),nk=[tk];function ok(e,t){return g(),ie("svg",ek,nk)}const ik={name:"carbon-checkmark",render:ok},sk={class:"select-list"},lk={class:"title"},ak={class:"items"},rk=["onClick"],ck=Me({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;I(O);const o=Kt(n,"modelValue",t,{passive:!0});return(s,l)=>{const a=ik;return g(),ie("div",sk,[i("div",lk,gt(e.title),1),i("div",ak,[(g(!0),ie(Ee,null,Ho(e.items,r=>(g(),ie("div",{key:r.value,class:Be(["item",{active:M(o)===r.value}]),onClick:()=>{var c;o.value=r.value,(c=r.onClick)==null||c.call(r)}},[Q(a,{class:Be(["text-green-500",{"opacity-0":M(o)!==r.value}])},null,8,["class"]),d(" "+gt(r.display||r.value),1)],10,rk))),128))])])}}});const uk=T(ck,[["__scopeId","data-v-3f89fa11"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),dk={class:"text-sm"},pk=Me({__name:"Settings",setup(e){I(O);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(g(),ie("div",dk,[Q(uk,{modelValue:M(gs),"onUpdate:modelValue":o[0]||(o[0]=s=>Ce(gs)?gs.value=s:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),mk=T(pk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),fk={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},hk=Me({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;I(O);const o=Kt(n,"modelValue",t,{passive:!0}),s=G();return l0(s,()=>{o.value=!1}),(l,a)=>(g(),ie("div",{ref_key:"el",ref:s,class:"flex relative"},[i("button",{class:Be({disabled:e.disabled}),onClick:a[0]||(a[0]=r=>o.value=!M(o))},[qt(l.$slots,"button",{class:Be({disabled:e.disabled})})],2),(g(),z(ip,null,[M(o)?(g(),ie("div",fk,[qt(l.$slots,"menu")])):ye("v-if",!0)],1024))],512))}}),_k=T(hk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),vk={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},gk={__name:"VerticalDivider",setup(e){return I(O),(t,n)=>(g(),ie("div",vk))}},ds=T(gk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),bk={render(){return[]}},yk={class:"slidev-icon-btn"},Sk={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},wk={class:"my-auto"},xk={class:"opacity-50"},kk=Me({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;I(O);const n=Oa.smaller("md"),{isFullscreen:o,toggle:s}=ym,l=R(()=>Na.value?`?password=${Na.value}`:""),a=R(()=>`/presenter/${qe.value}${l.value}`),r=R(()=>`/${qe.value}${l.value}`),c=G();function u(){c.value&&Pn.value&&c.value.contains(Pn.value)&&Pn.value.blur()}const p=R(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=sn(),f=sn();return Mn(()=>import("./DrawingControls-14b57082.js"),[]).then(h=>f.value=h.default),(h,_)=>{const S=Xx,w=Jx,x=jx,k=Nm,b=Px,A=Tx,E=kx,P=Hm,j=hx,L=ux,q=sx,se=Ms("RouterLink"),de=Xw,Z=Uw,_e=Fw,ge=Lw;return g(),ie("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[i("div",{class:Be(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",p.value]),onMouseleave:u},[M(pn)?ye("v-if",!0):(g(),ie("button",{key:0,class:"slidev-icon-btn",onClick:_[0]||(_[0]=(...Se)=>M(s)&&M(s)(...Se))},[M(o)?(g(),z(S,{key:0})):(g(),z(w,{key:1}))])),i("button",{class:Be(["slidev-icon-btn",{disabled:!M(MR)}]),onClick:_[1]||(_[1]=(...Se)=>M(Ln)&&M(Ln)(...Se))},[Q(x)],2),i("button",{class:Be(["slidev-icon-btn",{disabled:!M(AR)}]),title:"Next",onClick:_[2]||(_[2]=(...Se)=>M(Kn)&&M(Kn)(...Se))},[Q(k)],2),M(pn)?ye("v-if",!0):(g(),ie("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:_[3]||(_[3]=Se=>M(Sm)())},[Q(b)])),M(Aa)?ye("v-if",!0):(g(),ie("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:_[4]||(_[4]=Se=>M(Im)())},[M(zr)?(g(),z(A,{key:0})):(g(),z(E,{key:1}))])),Q(ds),M(pn)?ye("v-if",!0):(g(),ie(Ee,{key:3},[!M(vt)&&!M(n)&&m.value?(g(),ie(Ee,{key:0},[Q(M(m)),Q(ds)],64)):ye("v-if",!0),M(vt)?(g(),ie("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:_[5]||(_[5]=Se=>Kl.value=!M(Kl))},[M(Kl)?(g(),z(P,{key:0})):(g(),z(j,{key:1,class:"opacity-50"}))])):ye("v-if",!0)],64)),(!M(Oe).drawings.presenterOnly||M(vt))&&!M(pn)?(g(),ie(Ee,{key:4},[i("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:_[6]||(_[6]=Se=>en.value=!M(en))},[Q(L),M(en)?(g(),ie("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tt({background:M(so).color})},null,4)):ye("v-if",!0)]),Q(ds)],64)):ye("v-if",!0),M(pn)?ye("v-if",!0):(g(),ie(Ee,{key:5},[M(vt)?(g(),z(se,{key:0,to:r.value,class:"slidev-icon-btn",title:"Play Mode"},{default:$(()=>[Q(q)]),_:1},8,["to"])):ye("v-if",!0),M(zR)?(g(),z(se,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:$(()=>[Q(de)]),_:1},8,["to"])):ye("v-if",!0),ye("v-if",!0)],64)),(g(),ie(Ee,{key:6},[M(Oe).download?(g(),ie("button",{key:0,class:"slidev-icon-btn",onClick:_[8]||(_[8]=(...Se)=>M(Da)&&M(Da)(...Se))},[Q(Z)])):ye("v-if",!0)],64)),!M(vt)&&M(Oe).info&&!M(pn)?(g(),ie("button",{key:7,class:"slidev-icon-btn",onClick:_[9]||(_[9]=Se=>_i.value=!M(_i))},[Q(_e)])):ye("v-if",!0),!M(vt)&&!M(pn)?(g(),z(_k,{key:8},{button:$(()=>[i("button",yk,[Q(ge)])]),menu:$(()=>[Q(mk)]),_:1})):ye("v-if",!0),M(pn)?ye("v-if",!0):(g(),z(ds,{key:9})),i("div",Sk,[i("div",wk,[d(gt(M(qe))+" ",1),i("span",xk,"/ "+gt(M(OR)),1)])]),Q(M(bk))],34)],512)}}}),$k=T(kk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),Ik={style:{"font-size":"0.55rem","line-height":"1rem"}},zk=i("div",{class:"absolute bottom-0 left-1"},[i("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),Ok={class:"absolute bottom-1 left-89 text-gray-700"},Tk={key:0,class:"absolute bottom-1 right-1 text-gray-700"},Ek={__name:"global-top",setup(e){const t=I(O);return(n,o)=>(g(),ie("footer",Ik,[zk,i("div",Ok," ITT E.Agnelli - Informatica - "+gt(M(t).configs.materia)+" - prof. Antonio Mancuso - a.s. "+gt(M(t).configs.as)+" - v "+gt(M(t).configs.version||0),1),M(t).nav.currentPage!==1&&M(t).nav.currentPage!=M(t).nav.total+1?(g(),ie("div",Tk,gt(M(t).nav.currentPage-1)+" / "+gt(M(t).nav.total-1),1)):ye("v-if",!0)]))}},Ck=T(Ek,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),Dm={render(){return[St(Ck)]}},Fm={render(){return[]}},Ak={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Mk=Me({__name:"PresenterMouse",setup(e){return I(O),(t,n)=>{const o=Hm;return M(El).cursor?(g(),ie("div",Ak,[Q(o,{class:"absolute",style:tt({left:`${M(El).cursor.x}%`,top:`${M(El).cursor.y}%`})},null,8,["style"])])):ye("v-if",!0)}}}),Pk=T(Mk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Kk=Me({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){I(O),ve(dt,()=>{var o,s;(o=dt.value)!=null&&o.meta&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),(s=Hl.value)!=null&&s.meta&&Hl.value.meta.preload!==!1&&(Hl.value.meta.__preloaded=!0)},{immediate:!0});const t=sn();Mn(()=>import("./DrawingLayer-1466ba44.js"),[]).then(o=>t.value=o.default);const n=R(()=>Qe.filter(o=>{var s;return((s=o.meta)==null?void 0:s.__preloaded)||o===dt.value}));return(o,s)=>(g(),ie(Ee,null,[ye(" Global Bottom "),Q(M(Fm)),ye(" Slides "),Q(og,Te(M(LR),{id:"slideshow",tag:"div"}),{default:$(()=>[(g(!0),ie(Ee,null,Ho(n.value,l=>{var a;return np((g(),z(M(Er),{key:l.path,is:l==null?void 0:l.component,clicks:l===M(dt)?M(Lt):0,"clicks-elements":((a=l.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Be(M(Tr)(l)),route:l,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ap,l===M(dt)]])}),128))]),_:1},16),ye(" Global Top "),Q(M(Dm)),t.value?(g(),z(M(t),{key:0})):ye("v-if",!0),M(vt)?ye("v-if",!0):(g(),z(Pk,{key:1}))],64))}});const Lk=T(Kk,[["__scopeId","data-v-afb4231e"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Rk=Me({__name:"PrintStyle",setup(e){I(O);function t(n,{slots:o}){if(o.default)return St("style",o.default())}return(n,o)=>(g(),z(t,null,{default:$(()=>[d(" @page { size: "+gt(M(An))+"px "+gt(M(wr))+"px; margin: 0px; } ",1)]),_:1}))}}),jm=T(Rk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Wk=Me({__name:"Play",setup(e){I(O),hS();const t=G();function n(l){var a;bu.value||((a=l.target)==null?void 0:a.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?Kn():Ln())}RR(t);const o=R(()=>$y.value||bu.value);sn();const s=sn();return Mn(()=>import("./DrawingControls-14b57082.js"),[]).then(l=>s.value=l.default),(l,a)=>(g(),ie(Ee,null,[M(Ro)?(g(),z(jm,{key:0})):ye("v-if",!0),i("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:tt(M(xr))},[Q(Om,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:M(Ro)?M(ho).width.value:void 0,scale:M(gs),onPointerdown:n},{default:$(()=>[Q(Lk,{context:"slide"})]),controls:$(()=>[i("div",{class:Be(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",M(Ci)?"pointer-events-none":""]])},[Q($k,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!M(Oe).drawings.presenterOnly&&!M(pn)&&s.value?(g(),z(M(s),{key:0,class:"ml-0"})):ye("v-if",!0)]),_:1},8,["style","width","scale"]),ye("v-if",!0)],4),Q(Cw)],64))}}),Hk=T(Wk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Vm(e){return typeof e>"u"||e===null}function Nk(e){return typeof e=="object"&&e!==null}function Dk(e){return Array.isArray(e)?e:Vm(e)?[]:[e]}function Fk(e,t){var n,o,s,l;if(t)for(l=Object.keys(t),n=0,o=l.length;n<o;n+=1)s=l[n],e[s]=t[s];return e}function jk(e,t){var n="",o;for(o=0;o<t;o+=1)n+=e;return n}function Vk(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Bk=Vm,qk=Nk,Uk=Dk,Jk=jk,Qk=Vk,Yk=Fk,Ar={isNothing:Bk,isObject:qk,toArray:Uk,repeat:Jk,isNegativeZero:Qk,extend:Yk};function Bm(e,t){var n="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),o+" "+n):o}function Mi(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Bm(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Mi.prototype=Object.create(Error.prototype);Mi.prototype.constructor=Mi;Mi.prototype.toString=function(t){return this.name+": "+Bm(this,t)};var oo=Mi,Gk=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Zk=["scalar","sequence","mapping"];function Xk(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(o){t[String(o)]=n})}),t}function e$(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(Gk.indexOf(n)===-1)throw new oo('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Xk(t.styleAliases||null),Zk.indexOf(this.kind)===-1)throw new oo('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var lt=e$;function Lu(e,t){var n=[];return e[t].forEach(function(o){var s=n.length;n.forEach(function(l,a){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(s=a)}),n[s]=o}),n}function t$(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function o(s){s.multi?(e.multi[s.kind].push(s),e.multi.fallback.push(s)):e[s.kind][s.tag]=e.fallback[s.tag]=s}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(o);return e}function Ha(e){return this.extend(e)}Ha.prototype.extend=function(t){var n=[],o=[];if(t instanceof lt)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new oo("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(l){if(!(l instanceof lt))throw new oo("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new oo("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new oo("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof lt))throw new oo("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var s=Object.create(Ha.prototype);return s.implicit=(this.implicit||[]).concat(n),s.explicit=(this.explicit||[]).concat(o),s.compiledImplicit=Lu(s,"implicit"),s.compiledExplicit=Lu(s,"explicit"),s.compiledTypeMap=t$(s.compiledImplicit,s.compiledExplicit),s};var n$=Ha,o$=new lt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),i$=new lt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),s$=new lt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),l$=new n$({explicit:[o$,i$,s$]});function a$(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function r$(){return null}function c$(e){return e===null}var u$=new lt("tag:yaml.org,2002:null",{kind:"scalar",resolve:a$,construct:r$,predicate:c$,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function d$(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function p$(e){return e==="true"||e==="True"||e==="TRUE"}function m$(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var f$=new lt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:d$,construct:p$,predicate:m$,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function h$(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function _$(e){return 48<=e&&e<=55}function v$(e){return 48<=e&&e<=57}function g$(e){if(e===null)return!1;var t=e.length,n=0,o=!1,s;if(!t)return!1;if(s=e[n],(s==="-"||s==="+")&&(s=e[++n]),s==="0"){if(n+1===t)return!0;if(s=e[++n],s==="b"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(s!=="0"&&s!=="1")return!1;o=!0}return o&&s!=="_"}if(s==="x"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(!h$(e.charCodeAt(n)))return!1;o=!0}return o&&s!=="_"}if(s==="o"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(!_$(e.charCodeAt(n)))return!1;o=!0}return o&&s!=="_"}}if(s==="_")return!1;for(;n<t;n++)if(s=e[n],s!=="_"){if(!v$(e.charCodeAt(n)))return!1;o=!0}return!(!o||s==="_")}function b$(e){var t=e,n=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(n=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function y$(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Ar.isNegativeZero(e)}var S$=new lt("tag:yaml.org,2002:int",{kind:"scalar",resolve:g$,construct:b$,predicate:y$,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),w$=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function x$(e){return!(e===null||!w$.test(e)||e[e.length-1]==="_")}function k$(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var $$=/^[-+]?[0-9]+e/;function I$(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ar.isNegativeZero(e))return"-0.0";return n=e.toString(10),$$.test(n)?n.replace("e",".e"):n}function z$(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Ar.isNegativeZero(e))}var O$=new lt("tag:yaml.org,2002:float",{kind:"scalar",resolve:x$,construct:k$,predicate:z$,represent:I$,defaultStyle:"lowercase"}),T$=l$.extend({implicit:[u$,f$,S$,O$]}),E$=T$,qm=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Um=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function C$(e){return e===null?!1:qm.exec(e)!==null||Um.exec(e)!==null}function A$(e){var t,n,o,s,l,a,r,c=0,u=null,p,m,f;if(t=qm.exec(e),t===null&&(t=Um.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],o=+t[2]-1,s=+t[3],!t[4])return new Date(Date.UTC(n,o,s));if(l=+t[4],a=+t[5],r=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],m=+(t[11]||0),u=(p*60+m)*6e4,t[9]==="-"&&(u=-u)),f=new Date(Date.UTC(n,o,s,l,a,r,c)),u&&f.setTime(f.getTime()-u),f}function M$(e){return e.toISOString()}var P$=new lt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:C$,construct:A$,instanceOf:Date,represent:M$});function K$(e){return e==="<<"||e===null}var L$=new lt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:K$}),Mr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function R$(e){if(e===null)return!1;var t,n,o=0,s=e.length,l=Mr;for(n=0;n<s;n++)if(t=l.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function W$(e){var t,n,o=e.replace(/[\r\n=]/g,""),s=o.length,l=Mr,a=0,r=[];for(t=0;t<s;t++)t%4===0&&t&&(r.push(a>>16&255),r.push(a>>8&255),r.push(a&255)),a=a<<6|l.indexOf(o.charAt(t));return n=s%4*6,n===0?(r.push(a>>16&255),r.push(a>>8&255),r.push(a&255)):n===18?(r.push(a>>10&255),r.push(a>>2&255)):n===12&&r.push(a>>4&255),new Uint8Array(r)}function H$(e){var t="",n=0,o,s,l=e.length,a=Mr;for(o=0;o<l;o++)o%3===0&&o&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+e[o];return s=l%3,s===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):s===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):s===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function N$(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var D$=new lt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:R$,construct:W$,predicate:N$,represent:H$}),F$=Object.prototype.hasOwnProperty,j$=Object.prototype.toString;function V$(e){if(e===null)return!0;var t=[],n,o,s,l,a,r=e;for(n=0,o=r.length;n<o;n+=1){if(s=r[n],a=!1,j$.call(s)!=="[object Object]")return!1;for(l in s)if(F$.call(s,l))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function B$(e){return e!==null?e:[]}var q$=new lt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:V$,construct:B$}),U$=Object.prototype.toString;function J$(e){if(e===null)return!0;var t,n,o,s,l,a=e;for(l=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(o=a[t],U$.call(o)!=="[object Object]"||(s=Object.keys(o),s.length!==1))return!1;l[t]=[s[0],o[s[0]]]}return!0}function Q$(e){if(e===null)return[];var t,n,o,s,l,a=e;for(l=new Array(a.length),t=0,n=a.length;t<n;t+=1)o=a[t],s=Object.keys(o),l[t]=[s[0],o[s[0]]];return l}var Y$=new lt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:J$,construct:Q$}),G$=Object.prototype.hasOwnProperty;function Z$(e){if(e===null)return!0;var t,n=e;for(t in n)if(G$.call(n,t)&&n[t]!==null)return!1;return!0}function X$(e){return e!==null?e:{}}var e2=new lt("tag:yaml.org,2002:set",{kind:"mapping",resolve:Z$,construct:X$});E$.extend({implicit:[P$,L$],explicit:[D$,q$,Y$,e2]});function Ru(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var t2=new Array(256),n2=new Array(256);for(var zo=0;zo<256;zo++)t2[zo]=Ru(zo)?1:0,n2[zo]=Ru(zo);function o2(e){return Array.from(new Set(e))}function Wu(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const s=[];let l=t;for(;l<n;)s.push(l),l+=o||1;return s}function Jm(e,t){if(!t||t==="all"||t==="*")return Wu(1,e+1);const n=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))n.push(+o);else{const[s,l]=o.split("-",2);n.push(...Wu(+s,l?+l+1:e+1))}return o2(n).filter(o=>o<=e).sort((o,s)=>o-s)}function Qm(e){const t=R(()=>e.value.path),n=R(()=>Qe.length-1),o=R(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),s=R(()=>ml(o.value)),l=R(()=>Qe.find(f=>f.path===`${o.value}`)),a=R(()=>{var f,h,_;return(_=(h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:_.id}),r=R(()=>{var f,h;return((h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.layout)||(o.value===1?"cover":"default")}),c=R(()=>Qe.find(f=>f.path===`${Math.min(Qe.length,o.value+1)}`)),u=R(()=>Qe.filter(f=>{var h,_;return(_=(h=f.meta)==null?void 0:h.slide)==null?void 0:_.title}).reduce((f,h)=>(Pr(f,h),f),[])),p=R(()=>Kr(u.value,l.value)),m=R(()=>Lr(p.value));return{route:e,path:t,total:n,currentPage:o,currentPath:s,currentRoute:l,currentSlideId:a,currentLayout:r,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:m,downloadPDF:Da,next:Kn,nextSlide:Pi,openInEditor:WR,prev:Ln,prevSlide:Ki}}function Ym(e,t,n){const o=G(0);it(()=>{yt.afterEach(async()=>{await it(),o.value+=1})});const s=R(()=>{var c,u;return o.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),l=R(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??s.value.length)}),a=R(()=>n.value<Qe.length-1||e.value<l.value),r=R(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:s,clicksTotal:l,hasNext:a,hasPrev:r}}const i2=["id"],s2=Me({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,o=Kt(n,"clicksElements",t),s=R(()=>({height:`${wr}px`,width:`${An}px`})),l=sn();Mn(()=>Promise.resolve().then(()=>kS),void 0).then(u=>l.value=u.default);const a=R(()=>n.clicks),r=Ym(a,n.nav.currentRoute,n.nav.currentPage),c=R(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return It(O,Ve({nav:{...n.nav,...r},configs:Oe,themeConfigs:R(()=>Oe.themeConfig)})),(u,p)=>{var m;return g(),ie("div",{id:c.value,class:"print-slide-container",style:tt(s.value)},[Q(M(Fm)),Q(M(Er),{is:(m=u.route)==null?void 0:m.component,"clicks-elements":M(o),"onUpdate:clicksElements":p[0]||(p[0]=f=>Ce(o)?o.value=f:null),clicks:a.value,"clicks-disabled":!1,class:Be(M(Tr)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),l.value?(g(),z(M(l),{key:0,page:+u.route.path},null,8,["page"])):ye("v-if",!0),Q(M(Dm))],12,i2)}}}),Hu=T(s2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),l2=Me({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var l;const t=e;I(O);const n=G(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),o=R(()=>t.route),s=Qm(o);return(a,r)=>(g(),ie(Ee,null,[Q(Hu,{"clicks-elements":n.value,"onUpdate:clicksElements":r[0]||(r[0]=c=>n.value=c),clicks:0,nav:M(s),route:o.value},null,8,["clicks-elements","nav","route"]),M(vi)?ye("v-if",!0):(g(!0),ie(Ee,{key:0},Ho(n.value.length,c=>(g(),z(Hu,{key:c,clicks:c,nav:M(s),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),a2=T(l2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),r2={id:"print-content"},c2=Me({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;I(O);const n=R(()=>t.width),o=R(()=>t.width/Cn),s=R(()=>n.value/o.value),l=R(()=>s.value<Cn?n.value/An:o.value*Cn/An);let a=Qe.slice(0,-1);Wt.value.query.range&&(a=Jm(a.length,Wt.value.query.range).map(u=>a[u-1]));const r=R(()=>({"select-none":!Oe.selectable,"slidev-code-line-numbers":Oe.lineNumbers}));return It(jp,l),(c,u)=>(g(),ie("div",{id:"print-container",class:Be(r.value)},[i("div",r2,[(g(!0),ie(Ee,null,Ho(M(a),p=>(g(),z(a2,{key:p.path,route:p},null,8,["route"]))),128))]),qt(c.$slots,"controls")],2))}});const u2=T(c2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),d2=Me({__name:"Print",setup(e){return I(O),yo(()=>{Ro?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(g(),ie(Ee,null,[M(Ro)?(g(),z(jm,{key:0})):ye("v-if",!0),i("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tt(M(xr))},[Q(u2,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:M(ho).width.value},null,8,["style","width"])],4)],64))}});const p2=T(d2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const m2={class:"slidev-layout end"},f2={__name:"end",setup(e){return I(O),(t,n)=>(g(),ie("div",m2,[qt(t.$slots,"default",{},()=>[d("END")],!0)]))}},h2=T(f2,[["__scopeId","data-v-e532b98d"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function Nu(e){return e.startsWith("/")?"/TPSI/4/svelte/"+e.slice(1):e}function _2(e,t=!1){const n=e&&["#","rgb","hsl"].some(s=>e.indexOf(s)===0),o={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Nu(e)})`:`url("${Nu(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const v2={class:"my-auto w-full"},g2=Me({__name:"cover",props:{background:{default:""}},setup(e){const t=e;I(O);const n=R(()=>_2(t.background,!0));return(o,s)=>(g(),ie("div",{class:"slidev-layout cover",style:tt(n.value)},[i("div",v2,[qt(o.$slots,"default")])],4))}}),b2=T(g2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),y2=i("h1",null,"Svelte e SvelteKit",-1),S2=i("p",null,"CYBERNETICALLY ENHANCED WEB APPS",-1),w2={class:"pt-12"},x2={class:"px-2 py-1"},k2={__name:"1",setup(e){const t={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",as:"2023/2024",version:"1.1.2"};return I(O),(n,o)=>{const s=Nm;return g(),z(b2,H(W(t)),{default:$(()=>[ye(` https://reteinformaticalavoro.it/blog/framework-cosa-sono-e-quali-dominano-le-classifiche/#:~:text=In%20informatica%2C%20un%20framework%20%C3%A8,in%20modo%20semplice%20e%20veloce.

https://www.okupter.com/blog/svelte-vs-sveltekit-the-difference

https://www.okupter.com/blog/sveltekit-full-stack-framework `),y2,S2,i("div",w2,[i("span",x2,[d(" Premi spazio o "),Q(s,{class:"inline"}),d(" per la prossima slide ")])])]),_:1},16)}}},$2=T(k2,[["__file","/@slidev/slides/1.md"]]),I2={class:"slidev-layout default"},z2={__name:"default",setup(e){return I(O),(t,n)=>(g(),ie("div",I2,[qt(t.$slots,"default")]))}},N=T(z2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),O2=i("h1",null,"Introduzione",-1),T2=i("p",null,"Vanilla Software",-1),E2=i("ul",null,[i("li",null,[d("Un software "),i("code",null,"Vanilla"),d(" è un programma per computer (e per altri sistemi informatici come hardware o algoritmi) che non viene alterato rispetto alla propria forma originale.")]),i("li",null,"Il termine deriva dal tradizionale gusto di gelato, la vaniglia."),i("li",null,[d("In altre parole con il termine "),i("strong",null,"Vanilla"),d(" si intende un linguaggio, un kernel, un programma non modificato ma utilizzato nella sua forma base")]),i("li",null,"Ciò si applica anche ai linguaggi di programmazione")],-1),C2={__name:"2",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[O2,T2,E2]),_:1},16))}},A2=T(C2,[["__file","/@slidev/slides/2.md"]]),M2="/TPSI/4/svelte/assets/svelte_000-21a7ddac.png",P2=i("h1",null,"Introduzione",-1),K2=i("p",null,"Vanilla Software",-1),L2=i("div",{style:{float:"left",width:"50%"}},[i("ul",null,[i("li",null,"Vanilla JavaScript (o VanillaJS) si riferisce all’uso di JavaScript puro, senza alcun componente aggiuntivo come librerie o framework."),i("li",null,"È una specie di battuta tra informatici per indicare le potenzialità attuali del puro e semplice JavaScript."),i("li",null,"Agli albori del Web era normale programmare in vanillaJS")])],-1),R2=i("img",{src:M2,class:"mx-auto",width:"400"},null,-1),W2={__name:"3",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[P2,K2,L2,R2]),_:1},16))}},H2=T(W2,[["__file","/@slidev/slides/3.md"]]),N2="/TPSI/4/svelte/assets/svelte_001-e8d6b419.png",D2=i("h1",null,"Introduzione",-1),F2=i("p",null,"Librerie JS",-1),j2=i("ul",null,[i("li",null,"Una libreria NON è un’unità eseguibile indipendentemente, ma un modulo aggiuntivo richiesto da un programma."),i("li",null,"In altre parole, le librerie sono raccolte di classi e funzioni, motivo per cui a volte vengono anche chiamate librerie di componenti o di classi."),i("li",null,"Il programma principale utilizza una o più funzioni, messe a disposizione dalla libreria.")],-1),V2=i("img",{src:N2,class:"mx-auto",style:{"margin-top":"2rem"},width:"500"},null,-1),B2={__name:"4",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[D2,F2,j2,V2]),_:1},16))}},q2=T(B2,[["__file","/@slidev/slides/4.md"]]),U2=i("h1",null,"Introduzione",-1),J2=i("p",null,"Librerie JS",-1),Q2=i("ul",null,[i("li",null,"Una libreria JavaScript è una libreria di codice JavaScript pre-scritto che consente uno sviluppo più semplice di applicazioni basate su JavaScript"),i("li",null,"Ci sono centinaia di librerie JS per qualsiasi funzionalità possa venire in mente allo sviluppatore"),i("li",null,[d("Una delle più note librerie che ha dominato il web per molti anni si chiama "),i("code",null,"jQuery")]),i("li",null,[i("strong",null,"jQuery"),d(" è una libreria JavaScript veloce, piccola e ricca di funzionalità.")]),i("li",null,"Rende funzionalità complesse come l’attraversamento e la manipolazione di documenti HTML, la gestione degli eventi, l’animazione e Ajax molto più semplici che in vanillaJS"),i("li",null,"Con una combinazione di versatilità ed estensibilità, jQuery ha cambiato il modo in cui milioni di persone scrivono JavaScript.")],-1),Y2={__name:"5",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[U2,J2,Q2]),_:1},16))}},G2=T(Y2,[["__file","/@slidev/slides/5.md"]]),Z2=i("h1",null,"Introduzione",-1),X2=i("p",null,"Framework JS",-1),eI=i("ul",null,[i("li",null,"Man mano che l’importanza dello sviluppo Web cresceva, e con essa l’importanza di JS, l’uso di VanillaJS o di semplici librerie non era più sufficiente"),i("li",null,[d("Pertanto hanno iniziato a proliferare una moltitudine di "),i("code",null,"Framework JS"),d(" che offrono paradigmi differenti e adatti a risolvere la maggioranza delle problematiche dello sviluppo web")])],-1),tI=i("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px",margin:"10px"}},[i("p",null,[d("In informatica, "),i("strong",null,"un framework"),d(" è un sistema che consente di estendere le funzionalità del linguaggio di programmazione su cui è basato, fornendo allo sviluppatore una struttura coerente ed efficace al fine di effettuare azioni e comandi in modo semplice e veloce")])],-1),nI=i("ul",null,[i("li",null,[i("strong",null,"Un framework"),d(' è un tipo speciale di libreria che non contiene funzioni "finite" come una normale libreria.')]),i("li",null,"In sostanza, si può definire un framework come un insieme di funzioni e tool già “pronti all’uso”, ovvero che si possono utilizzare senza doverli progettare da zero ogni volta.")],-1),oI={__name:"6",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[Z2,X2,eI,tI,nI]),_:1},16))}},iI=T(oI,[["__file","/@slidev/slides/6.md"]]),sI=i("h1",null,"Introduzione",-1),lI=i("p",null,"Framework JS",-1),aI=i("ul",null,[i("li",null,"I framework sono piuttosto impalcature/scheletri/template di programmi che forniscono il progetto, le linee guida e l’organizzazione del codice ma non l’unità finita."),i("li",null,"Il framework, quindi, fornisce il progetto e il framework di base e mostra anche ciò che è ancora necessario al programmatore in termini di personalizzazione."),i("li",null,"Il framework fornisce il flusso di un’applicazione software e comunica allo sviluppatore ciò di cui ha bisogno e chiama il codice fornito dallo sviluppatore come richiesto")],-1),rI={__name:"7",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[sI,lI,aI]),_:1},16))}},cI=T(rI,[["__file","/@slidev/slides/7.md"]]),uI="/TPSI/4/svelte/assets/svelte_004-24e4fca1.png",dI=i("h1",null,"Introduzione",-1),pI=i("p",null,"Framework JS",-1),mI=i("img",{src:uI,class:"mx-auto",style:{"margin-top":"0rem"},width:"800"},null,-1),fI={__name:"8",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[dI,pI,mI]),_:1},16))}},hI=T(fI,[["__file","/@slidev/slides/8.md"]]),_I="/TPSI/4/svelte/assets/svelte_002-3d42938e.png",vI=i("h1",null,"Introduzione",-1),gI=i("p",null,"Framework JS",-1),bI=i("ul",null,[i("li",null,[d("I principali "),i("a",{href:"https://en.wikipedia.org/wiki/Software_framework",target:"_blank",rel:"noopener"},"framework"),d(" degli ultimi anni sono")])],-1),yI=i("img",{src:_I,class:"mx-auto",style:{"margin-top":"0rem"},width:"600"},null,-1),SI={__name:"9",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[vI,gI,bI,yI]),_:1},16))}},wI=T(SI,[["__file","/@slidev/slides/9.md"]]),xI=i("h1",null,"Introduzione",-1),kI=i("p",null,"Framework JS",-1),$I=i("ul",null,[i("li",null,"L’uso di un frameowrk non è indispensabile: si tratta più che altro di uno dei tanti strumenti che lo sviluppatore ha a sua disposizione per programmare meglio e più velocemente."),i("li",null,"Proprio per queste sue caratteristiche, sono diventati sempre più fondamentali per lo sviluppo di siti web e app."),i("li",null,[d("I framework consentono di: "),i("ul",null,[i("li",null,"ottimizzare tempi, costi e benefici;"),i("li",null,"evitare al programmatore di riscrivere codice già scritto in precedenza per compiti simili;"),i("li",null,"organizzare e trovare rapidamente i file necessari;"),i("li",null,"concentrarsi sul problema da risolvere, senza dover implementare funzionalità che qualcun altro ha già provveduto a creare.")])])],-1),II={__name:"10",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[xI,kI,$I]),_:1},16))}},zI=T(II,[["__file","/@slidev/slides/10.md"]]),OI=i("h1",null,"Web Components",-1),TI=i("p",null,"OOP per il Web",-1),EI=i("ul",null,[i("li",null,[d("Lo sviluppo Web moderno è incentrato sul concetto di "),i("code",null,"componente")])],-1),CI=i("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px",margin:"10px"}},[i("p",null,[i("em",null,"Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps."),d(" (source MDN)")])],-1),AI=i("ul",null,[i("li",null,"Un componente è un elemento atomico e auto sufficiente, di un’applicazione Web."),i("li",null,'In altre parole un componente è un "mattoncino", ben definito, che viene utilizzato all’interno di un’applicazione più ampia'),i("li",null,"Da ciò ne consegue che una moderna applicazione web è composta da uno o più componenti indipendenti che interagiscono tra loro per fornire il layout e la funzionalità desiderata")],-1),MI={__name:"11",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[OI,TI,EI,CI,AI]),_:1},16))}},PI=T(MI,[["__file","/@slidev/slides/11.md"]]),KI="/TPSI/4/svelte/assets/svelte_03-b6c35794.png",LI=i("h1",null,"Web Components",-1),RI=i("p",null,"OOP per il Web",-1),WI=i("ul",null,[i("li",null,"Un elemento di input può essere un componente."),i("li",null,"Un form può essere un componente."),i("li",null,"Una pagina intera può essere è un componente.")],-1),HI=i("img",{src:KI,style:{position:"relative",left:"450px",top:"-150px"},width:"500"},null,-1),NI={__name:"12",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[LI,RI,WI,HI]),_:1},16))}},DI=T(NI,[["__file","/@slidev/slides/12.md"]]),FI="/TPSI/4/svelte/assets/svelte_006-2096526e.png",jI=i("h1",null,"Web Components",-1),VI=i("p",null,"OOP per il Web",-1),BI=i("img",{src:FI,class:"mx-auto",width:"600"},null,-1),qI={__name:"13",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[jI,VI,BI]),_:1},16))}},UI=T(qI,[["__file","/@slidev/slides/13.md"]]),JI=i("h1",null,"SvelteKit",-1),QI=i("p",null,"Svelte ~ SvelteKit",-1),YI=i("ul",null,[i("li",null,[d("Svelte è un framework "),i("strong",null,"che propone un approccio radicalmente nuovo alla creazione di applicazioni Web"),d(".")]),i("li",null,"Svelte è un modo per scrivere componenti dell’interfaccia utente, come una barra di navigazione, una sezione dei commenti o un modulo di contatto"),i("li",null,"Se hai già esperienza con React, Vue, Angular o altri framework frontend rimarrai piacevolmente sorpreso da Svelte."),i("li",null,"Lavorando con Svelte tutto sembra molto più simile al JavaScript-vanilla rispetto che a lavorare con altri framework."),i("li",null,"In generale la maggior parte delle cose che sono complicate con altri framework sono molto semplici e leggeri con Svelte.")],-1),GI=i("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px"}},[d(" Svelte è stato recentemente votato come il "),i("h2",null,"framework web più amato dagli sviluppatori")],-1),ZI=i("p",null,[i("a",{href:"https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks",target:"_blank",rel:"noopener"},"https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks")],-1),XI={__name:"14",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[JI,QI,YI,GI,ZI]),_:1},16))}},ez=T(XI,[["__file","/@slidev/slides/14.md"]]),tz="/TPSI/4/svelte/assets/svelte_00-c251d652.png",nz=i("h1",null,"SvelteKit",-1),oz=i("p",null,"Introduzione",-1),iz=i("img",{src:tz,class:"mx-auto",width:"750"},null,-1),sz={__name:"15",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[nz,oz,iz]),_:1},16))}},lz=T(sz,[["__file","/@slidev/slides/15.md"]]),az=i("h1",null,"SvelteKit",-1),rz=i("p",null,"Svelte vs Others",-1),cz=i("ul",null,[i("li",null,"Mentre i framework tradizionali come React e Vue fanno la maggior parte del loro lavoro nel browser, Svelte sposta il lavoro in una fase di compilazione che si verifica quando crei la tua app, in modo da non dover far scaricare l’intero framework a tutti i tuoi visitatori del sito."),i("li",null,"Di conseguenza, la fruizione dell’esperienza è più fluida, consuma meno larghezza di banda e tutto risulta più veloce e leggero."),i("li",null,"Al momento della distribuzione, Svelte scompare e tutto ciò che ottieni è puro JavaScript Vanilla (molto veloce!)."),i("li",null,[d("In altre parole "),i("code",null,"Svelte è un compilatore"),d(" che trasforma il codice della tua applicazione Web in puro JavaScript, raggiungendo così massime prestazioni")])],-1),uz={__name:"16",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[az,rz,cz]),_:1},16))}},dz=T(uz,[["__file","/@slidev/slides/16.md"]]),pz=i("h1",null,"SvelteKit",-1),mz=i("p",null,"Svelte vs Others",-1),fz=i("ul",null,[i("li",null,[d("Molti framework Web utilizzano il concetto di "),i("code",null,"Virtual DOM")]),i("li",null,[d("Il Virtual DOM "),i("code",null,"VDOM"),d(" è una rappresentazione ideale della UI di una pagina che è mantenuta in memoria")]),i("li",null,"Il VDOM è sincronizzato periodicamente con il DOM reale da una libreria (Reacts, Vue, Angular)"),i("li",null,[d("Svelte, in modo innovativo, anzichè utilizzare la tecnica del "),i("code",null,"virtual DOM diffing"),d(", genera codice JS che aggiorna direttamente il DOM quando cambia lo stato della tua app.")])],-1),hz=i("br",null,null,-1),_z=i("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px"}}," La principale differenza tra Svelte e gli altri framework Web è che Svelte è un compilatore che converte la tua applicazione Web in JavaScript-vanilla durante la fase di build. Al contrario gli altri framework usano un virtual DOM interpretato dall'applicazione Web durante il runtime sul browser. ",-1),vz={__name:"17",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[pz,mz,fz,hz,_z]),_:1},16))}},gz=T(vz,[["__file","/@slidev/slides/17.md"]]),bz=i("h1",null,"SvelteKit",-1),yz=i("p",null,"Svelte vs Others",-1),Sz=i("ul",null,[i("li",null,[d("React utilizza un concetto noto come Virtual DOM (VDOM), in cui una rappresentazione virtuale dell’interfaccia utente viene mantenuta in memoria e sincronizzata con il DOM reale attraverso un processo chiamato "),i("strong",null,"riconciliazione"),d(".")]),i("li",null,"Il processo di riconciliazione troverà la differenza (diffing) tra il Virtual DOM (un oggetto in memoria, dove inviamo gli ultimi aggiornamenti all’interfaccia utente) e il vero DOM (DOM che contiene l’interfaccia utente precedentemente renderizzata)."),i("li",null,"Utilizzando specifici algoritmi, il framework decide come aggiornare l’interfaccia utente."),i("li",null,"Ovviamente questo processo, non è efficiente e veloce"),i("li",null,"Per raggiungere questo obiettivo, React introduce un overhead (la libreria), che verrà eseguito nel motore JS del browser per monitorare e aggiornare il DOM in base alle varie interazioni dell’utente.")],-1),wz={__name:"18",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[bz,yz,Sz]),_:1},16))}},xz=T(wz,[["__file","/@slidev/slides/18.md"]]),kz="/TPSI/4/svelte/assets/svelte_01-09f90fce.png",$z=i("h1",null,"SvelteKit",-1),Iz=i("p",null,"Svelte vs Others",-1),zz=i("img",{src:kz,class:"mx-auto w-160"},null,-1),Oz={__name:"19",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[$z,Iz,zz]),_:1},16))}},Tz=T(Oz,[["__file","/@slidev/slides/19.md"]]),Ez="/TPSI/4/svelte/assets/svelte_003-ae5236bd.png",Cz=i("h1",null,"SvelteKit",-1),Az=i("p",null,"Svelte vs Others",-1),Mz=i("ul",null,[i("li",null,"Svelte è solamente un compilatore, che converte la tua applicazione in codice JavaScript durante la fase di sviluppo e build."),i("li",null,"Ciò significa che non inietterà alcun codice aggiuntivo (no librerie aggiuntive) da eseguire nel browser quando l’applicazione è in esecuzione per aggiornare il DOM."),i("li",null,"Questo approccio è generalmente più veloce dell’approccio basato su Virtual DOM.")],-1),Pz=i("img",{src:Ez,class:"mx-auto",width:"480",style:{"margin-top":"20px"}},null,-1),Kz={__name:"20",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[Cz,Az,Mz,Pz]),_:1},16))}},Lz=T(Kz,[["__file","/@slidev/slides/20.md"]]),Rz=i("h1",null,"SvelteKit",-1),Wz=i("p",null,"Svelte vs Others",-1),Hz=i("p",null,[i("strong",null,"PRO")],-1),Nz=i("ul",null,[i("li",null,"Tempo di compilazione velocissimo rispetto a React o altri framework e dimensione del pacchetto generato è più piccola rispetto a React"),i("li",null,"Tempi di caricamento e rendering della Web app più veloci rispetto a React o altri framework."),i("li",null,"Più facile da capire rispetto a altri framework poiché Svelte è semplice JavaScript, HTML e CSS."),i("li",null,"Permette di scrivere meno codice rispetto ad altri framework"),i("li",null,[d("Nativamente "),i("strong",null,"reactive"),d(" e perfettamente adatto alle moderne Web app")])],-1),Dz=i("p",null,[i("strong",null,"CONTRO")],-1),Fz=i("ul",null,[i("li",null,"Svelte è un framework ancora nuovo e giovane con un supporto limitato da parte della community, quindi non ha il supporto per un’ampia gamma di plugin e integrazioni come per esempio React"),i("li",null,"Alcuni sviluppatori potrebbero non preferire l’uso di sintassi speciali come #if e #each all’interno dei loro modelli e preferirebbero invece utilizzare JavaScript puro, come consentito da React.")],-1),jz={__name:"21",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[Rz,Wz,Hz,Nz,Dz,Fz]),_:1},16))}},Vz=T(jz,[["__file","/@slidev/slides/21.md"]]),Bz=i("h1",null,"SvelteKit",-1),qz=i("p",null,"Fullstack Framework",-1),Uz=i("ul",null,[i("li",null,[i("code",null,"SvelteKit"),d(" è un framework per lo sviluppo rapido di applicazioni Web robuste e performanti che utilizza Svelte.")]),i("li",null,"Se provieni da React, SvelteKit è simile a Next. Se vieni da Vue, SvelteKit è simile a Nuxt"),i("li",null,"Sveltekit è il framework che permette agli sviluppatori di creare e gestire la user experience della loro applicazione."),i("li",null,"Fornisce un ambiente unificato per lavorare con componenti, dati, routing, back-end, front-end e altro ancora."),i("li",null,[d("SvelteKit e Svelte sono "),i("strong",null,"totalmente allineati"),d(" al paradigma e modello di sviluppo per componenti caratteristico del web moderno.")])],-1),Jz={__name:"22",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[Bz,qz,Uz]),_:1},16))}},Qz=T(Jz,[["__file","/@slidev/slides/22.md"]]),Yz=i("h1",null,"SvelteKit",-1),Gz=i("p",null,"Fullstack Framework",-1),Zz=i("ul",null,[i("li",null,[d("SvelteKit è un framework per app che risolve i difficili molti problemi comunini ad applicazioni pronte per la produzione: "),i("ul",null,[i("li",null,"Routing (navigazione tra le pagine)"),i("li",null,"Server-side rendering (supporto al back-end)"),i("li",null,"Data fetching ()"),i("li",null,"Service workers"),i("li",null,"Supporto TypeScript (la versione di JavaScript con steroidi)"),i("li",null,"Prerendering (per applicazioni statiche. vedi blog profmancusoa)"),i("li",null,"Single-page apps (SPA: approccio moderno che sostituisce lo sviluppo desktop)"),i("li",null,"Supporto per diversi hosting providers molto comuni su Internet (vercel, netlify, …)")])])],-1),Xz={__name:"23",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[Yz,Gz,Zz]),_:1},16))}},eO=T(Xz,[["__file","/@slidev/slides/23.md"]]),tO=i("h1",null,"SvelteKit",-1),nO=i("p",null,"Svelte vs SvelteKit",-1),oO=i("p",null,[i("strong",null,"SVELTE")],-1),iO=i("ul",null,[i("li",null,"Un linguaggio di programmazione che si basa su HTML, CSS e JS"),i("li",null,[d("Svelte permette la creazione di "),i("strong",null,"componenti"),d(" web.")]),i("li",null,[d("Un componente è un blocco di codice autonomo riutilizzabile che incapsula HTML, CSS e JavaScript scritti in un file "),i("strong",null,".svelte"),d(".")])],-1),sO=i("p",null,[i("strong",null,"SVELTE KIT")],-1),lO=i("ul",null,[i("li",null,"Sveltekit è il framework, basato su Svelte, che permette agli sviluppatori di creare e gestire applicazioni full stack che combinano insieme componenti Svelte."),i("li",null,"Fornisce un ambiente unificato per lavorare con componenti, dati, routing e altro ancora."),i("li",null,[d("Sveltekit è un "),i("code",null,"full stack framework"),d(" ricco di funzionalità e permette lo sviluppo di un applicazione web completa di back-end e front-end")])],-1),aO={__name:"24",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[tO,nO,oO,iO,sO,lO]),_:1},16))}},rO=T(aO,[["__file","/@slidev/slides/24.md"]]),cO="/TPSI/4/svelte/assets/svelte_005-e897ef89.png",uO=i("h1",null,"SvelteKit",-1),dO=i("p",null,"Web App Architecture",-1),pO=i("img",{src:cO,class:"mx-auto",width:"900"},null,-1),mO={__name:"25",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[uO,dO,pO]),_:1},16))}},fO=T(mO,[["__file","/@slidev/slides/25.md"]]),hO=i("h1",null,"SvelteKit",-1),_O=i("p",null,"Svelte Components",-1),vO=i("ul",null,[i("li",null,"Un componente web è assimilabile al concetto di Oggetto nella programmazione OOP"),i("li",null,"Come un oggetto incapusala dati e metodi, un componente Web incapsula tutto ciò che è necessario per eseguire il rendering della sua interfaccia utente e per gestire la sua logica di funzionamento."),i("li",null,[d("Ogni componente Svelte è dichiarato in un file "),i("code",null,".svelte"),d(", che contiene: "),i("ul",null,[i("li",null,"il contenuto (markup) in HTML"),i("li",null,"la presentazione o stile (CSS)"),i("li",null,"il comportamento (JavaScript)")])])],-1),gO=i("br",null,null,-1),bO=i("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"25px"}}," Questo raggruppamento (senza un ordine particolare) permette un modo efficiente di definire una parte dell'interfaccia utente perché non è necessario cercare gli elementi che influiscono sullo stesso elemento in vari file. ",-1),yO={__name:"26",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[hO,_O,vO,gO,bO]),_:1},16))}},SO=T(yO,[["__file","/@slidev/slides/26.md"]]),wO="/TPSI/4/svelte/assets/svelte_007-e6e59c17.png",xO=i("h1",null,"SvelteKit",-1),kO=i("p",null,"Svelte Components",-1),$O=i("ul",null,[i("li",null,"Ecco la struttura di un componente Svelte")],-1),IO=i("br",null,null,-1),zO=i("img",{src:wO,class:"mx-auto",width:"700"},null,-1),OO={__name:"27",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[xO,kO,$O,IO,zO]),_:1},16))}},TO=T(OO,[["__file","/@slidev/slides/27.md"]]),EO="/TPSI/4/svelte/assets/svelte_008-4c504ad0.png",CO=i("h1",null,"SvelteKit",-1),AO=i("p",null,"Esempio di componente Svelte",-1),MO=i("img",{src:EO,class:"mx-auto",width:"350"},null,-1),PO={__name:"28",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[CO,AO,MO]),_:1},16))}},KO=T(PO,[["__file","/@slidev/slides/28.md"]]),LO="/TPSI/4/svelte/assets/svelte_04-397495f6.png",RO=i("h1",null,"SvelteKit",-1),WO=i("p",null,"Svelte Components",-1),HO=i("p",null,[i("br"),i("br")],-1),NO=i("img",{src:LO,class:"mx-auto"},null,-1),DO={__name:"29",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[RO,WO,HO,NO]),_:1},16))}},FO=T(DO,[["__file","/@slidev/slides/29.md"]]),jO=i("h1",null,"SvelteKit",-1),VO=i("p",null,"Svelte Components",-1),BO=i("ul",null,[i("li",null,"Questo componente, per quanto semplice, contiene tutti gli elementi di un componente web (HTML/CSS/JS)"),i("li",null,[d("Nel tag "),i("code",null,"<script>"),d(" è presente il codice JS di gestione del componente")]),i("li",null,[d("Il markup HTML non è inserito in un tag particolare e pertanto tutto ciò che non è parte del tag "),i("code",null,"<script>"),d(" e "),i("code",null,"<style>"),d(" è cosiderato contenuto del componente.")]),i("li",null,[d("Il tag "),i("code",null,"<style>"),d(" definisce il CSS del componente")])],-1),qO=i("br",null,null,-1),UO=i("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px"}}," Sia il codice JS e lo stile CSS sono confinati solo all'interno di questo componente e non possono influire o essere influenzati da altri componenti parte dell'applicazione complessiva. ",-1),JO=i("br",null,null,-1),QO=i("ul",null,[i("li",null,"Se un altro componente ha un tag h1, lo stile non sarà modificato."),i("li",null,"Questo è molto utile quando riutilizzi componenti che hai già scritto per altre applicazioni o quando includi librerie Open Source pubblicate da altre persone.")],-1),YO={__name:"30",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[jO,VO,BO,qO,UO,JO,QO]),_:1},16))}},GO=T(YO,[["__file","/@slidev/slides/30.md"]]),ZO={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},XO=i("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),eT=[XO];function tT(e,t){return g(),ie("svg",ZO,eT)}const nT={name:"ph-clipboard",render:tT},oT={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},iT=i("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),sT=[iT];function lT(e,t){return g(),ie("svg",oT,sT)}const aT={name:"ph-check-circle",render:lT},rT=["title"],cT=Me({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;I(O);const n=I(pi),o=I(eo),s=I(mi);function l(m=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_=h.length;for(let S=0;S<m;S++)f.push(h.charAt(Math.floor(Math.random()*_)));return f.join("")}const a=G(),r=wt();bn(()=>{const m=t.at==null?o==null?void 0:o.value.length:t.at,f=R(()=>s!=null&&s.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(m||0)),t.ranges.length-1)),h=R(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(s!=null&&s.value)){const _=l(),S=f1(t.ranges.length-1).map(w=>_+w);o!=null&&o.value&&(o.value.push(...S),ji(()=>S.forEach(w=>ba(o.value,w)),r))}yo(()=>{if(!a.value)return;const S=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const w of S){const x=Array.from(w.querySelectorAll(".line")),k=Jm(x.length,h.value);if(x.forEach((b,A)=>{const E=k.includes(A+1);b.classList.toggle(Yn,!0),b.classList.toggle("highlighted",E),b.classList.toggle("dishonored",!E)}),t.maxHeight){const b=Array.from(w.querySelectorAll(".line.highlighted"));b.reduce((E,P)=>P.offsetHeight+E,0)>a.value.offsetHeight?b[0].scrollIntoView({behavior:"smooth",block:"start"}):b.length>0&&b[Math.round((b.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=f0();function p(){var f,h;const m=(h=(f=a.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;m&&u(m)}return(m,f)=>{const h=aT,_=nT;return g(),ie("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:tt({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[qt(m.$slots,"default"),M(Oe).codeCopy?(g(),ie("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:M(c)?"Copied":"Copy",onClick:f[0]||(f[0]=S=>p())},[M(c)?(g(),z(h,{key:0,class:"p-2 w-8 h-8"})):(g(),z(_,{key:1,class:"p-2 w-8 h-8"}))],8,rT)):ye("v-if",!0)],4)}}}),je=T(cT,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),uT=i("h1",null,"SvelteKit",-1),dT=i("p",null,"Svelte Components",-1),pT=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("h1")]),i("span",{class:"token punctuation"},">")]),d("My name is John Doe!"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("h1")]),i("span",{class:"token punctuation"},">")])])])],-1),mT=i("ul",null,[i("li",null,"Questo è un componente Svelte valido"),i("li",null,"Include solo la parte di contenuto"),i("li",null,"Non ha nessuno stuile e nessuna logica di controllo")],-1),fT={__name:"31",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[uT,dT,Q(s,Te({},{ranges:[""]}),{default:$(()=>[pT]),_:1},16),mT]),_:1},16)}}},hT=T(fT,[["__file","/@slidev/slides/31.md"]]),_T=i("h1",null,"SvelteKit",-1),vT=i("p",null,"Svelte Components",-1),gT=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("h1")]),i("span",{class:"token punctuation"},">")]),d("My name is John Doe!"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("h1")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("style")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},"	h1 {"),d(`
`),i("span",{class:"line"},"		width: 30%;"),d(`
`),i("span",{class:"line"},"		border: 20px solid green;"),d(`
`),i("span",{class:"line"},"		border-radius: 20px;"),d(`
`),i("span",{class:"line"},"		color: red;"),d(`
`),i("span",{class:"line"},"		text-align: center;"),d(`
`),i("span",{class:"line"},"		margin: 30px auto;"),d(`
`),i("span",{class:"line"},"		padding: 20px;"),d(`
`),i("span",{class:"line"},"	}"),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("style")]),i("span",{class:"token punctuation"},">")])])])],-1),bT=i("ul",null,[i("li",null,"Questo è un componente Svelte valido"),i("li",null,"Include la parte di contenuto e di stile")],-1),yT={__name:"32",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[_T,vT,Q(s,Te({},{ranges:[""]}),{default:$(()=>[gT]),_:1},16),bT]),_:1},16)}}},ST=T(yT,[["__file","/@slidev/slides/32.md"]]),wT=i("h1",null,"SvelteKit",-1),xT=i("p",null,"Svelte Components",-1),kT=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("script")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},"	let name = 'John Doe';"),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("script")]),i("span",{class:"token punctuation"},">")])])])],-1),$T=i("ul",null,[i("li",null,"Questo è un componente Svelte valido."),i("li",null,"Non ha nessuno contenuto e non verrà visualizzato."),i("li",null,"Anche se apparentemente non ha senso, lo ha in quanto posso avere componenti che svolgono solo funzioni utilizzate da altri componenti.")],-1),IT=i("p",null,"Esempio:",-1),zT=i("ul",null,[i("li",null,"un componente che fornisce accesso ad un DB nosql non ha nessuna parte di UI, ma è di grande utilità all’interno della mia applicazione.")],-1),OT={__name:"33",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[wT,xT,Q(s,Te({},{ranges:[""]}),{default:$(()=>[kT]),_:1},16),$T,IT,zT]),_:1},16)}}},TT=T(OT,[["__file","/@slidev/slides/33.md"]]),ET=i("h1",null,"SvelteKit",-1),CT=i("p",null,"Hello World",-1),AT=i("ul",null,[i("li",null,[i("p",null,"Vediamo i semplici passi per creare un progetto base SvelteKit")]),i("li",null,[i("p",null,"Utilizzeremo il progetto base per provare a analizzare e comprendere le principali carattristiche:"),i("ul",null,[i("li",null,"del linguaggio Svelte e delle principali funzionalità"),i("li",null,"dello sviluppo per componenti"),i("li",null,"delle funzioni più importanti di SvelteKit")])]),i("li",null,[i("p",null,"Di seguito i link alla documentazione e tutoria di Svelte e SvelteKit"),i("ul",null,[i("li",null,[i("a",{href:"https://svelte.dev/tutorial/basics",target:"_blank",rel:"noopener"},"Svelte tutorial")]),i("li",null,[i("a",{href:"https://learn.svelte.dev/tutorial/welcome-to-svelte",target:"_blank",rel:"noopener"},"Tutorial Interattivo Svelte")]),i("li",null,[i("a",{href:"https://kit.svelte.dev/docs/introduction",target:"_blank",rel:"noopener"},"Introduzione a SvelteKit")])])])],-1),MT=i("p",null,[i("em",null,[i("strong",null,"Questi link sono il riferimento per gli studenti e vi suggerisco di studiarli e di utilizzarli per tutto il tempo necessario ad apprendere Svlete e SvelteKit")])],-1),PT={__name:"34",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[ET,CT,AT,MT]),_:1},16))}},KT=T(PT,[["__file","/@slidev/slides/34.md"]]),LT=i("h1",null,"SvelteKit",-1),RT=i("p",null,"Hello World: Creare un Progetto SvelteKit",-1),WT=i("ul",null,[i("li",null,[d("Per sviluppare con Svelte e SvelteKit è necessario: "),i("ul",null,[i("li",null,[d("nodejs (almeno versione 18) —> "),i("a",{href:"http://cedws",target:"_blank",rel:"noopener"},"Come installare nodejs su Linux")]),i("li",null,"npm"),i("li",null,"git")])]),i("li",null,"Assicurati che siano instllati sul tuo sistema eseguendo i seguenti comandi:")],-1),HT=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(),i("span",{class:"token function"},"node"),d(),i("span",{class:"token parameter variable"},"--version")]),d(`
`),i("span",{class:"line"},"v19.2.0"),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(),i("span",{class:"token function"},"npm"),d(),i("span",{class:"token parameter variable"},"--version"),d()]),d(`
`),i("span",{class:"line"},[i("span",{class:"token number"},"9.1"),d(".3")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(),i("span",{class:"token function"},"git"),d(),i("span",{class:"token parameter variable"},"--version"),d("          ")]),d(`
`),i("span",{class:"line"},[i("span",{class:"token function"},"git"),d(" version "),i("span",{class:"token number"},"2.34"),d(".1")])])],-1),NT={__name:"35",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[LT,RT,WT,Q(s,Te({},{ranges:[""]}),{default:$(()=>[HT]),_:1},16)]),_:1},16)}}},DT=T(NT,[["__file","/@slidev/slides/35.md"]]),FT=i("h1",null,"SvelteKit",-1),jT=i("p",null,"Hello World: Creare un Progetto SvelteKit",-1),VT=i("ul",null,[i("li",null,"Spostati nella tua directory di lavoro (es: cd ~/tmp)"),i("li",null,[d("Da qui crea lo "),i("a",{href:"https://en.wikipedia.org/wiki/Scaffold_(programming)",target:"_blank",rel:"noopener"},[i("strong",null,"scaffolding")]),d(" di un’applicazione base seguendo le semplici istruzioni a video")])],-1),BT=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(),i("span",{class:"token function"},"npm"),d(" create svelte@latest hello-word-svelte-kit")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[d("create-svelte version "),i("span",{class:"token number"},"4.2"),d(".0")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[d("┌  Welcome to SvelteKit"),i("span",{class:"token operator"},"!")]),d(`
`),i("span",{class:"line"},"│"),d(`
`),i("span",{class:"line"},"◆  Which Svelte app template?"),d(`
`),i("span",{class:"line"},[d("│  ● SvelteKit demo app "),i("span",{class:"token punctuation"},"("),d("A demo app showcasing some of the features of SvelteKit"),i("span",{class:"token punctuation"},")")]),d(`
`),i("span",{class:"line"},"│  ○ Skeleton project"),d(`
`),i("span",{class:"line"},"│  ○ Library project"),d(`
`),i("span",{class:"line"},"└"),d(`
`),i("span",{class:"line"},[d("◆  Add "),i("span",{class:"token builtin class-name"},"type"),d(" checking with TypeScript?")]),d(`
`),i("span",{class:"line"},"│  ○ Yes, using JavaScript with JSDoc comments"),d(`
`),i("span",{class:"line"},"│  ○ Yes, using TypeScript syntax"),d(`
`),i("span",{class:"line"},"│  ● No"),d(`
`),i("span",{class:"line"},"└")])],-1),qT={__name:"36",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[FT,jT,VT,Q(s,Te({},{ranges:[""]}),{default:$(()=>[BT]),_:1},16)]),_:1},16)}}},UT=T(qT,[["__file","/@slidev/slides/36.md"]]),JT=i("h1",null,"SvelteKit",-1),QT=i("p",null,"Hello World: Creare un Progetto SvelteKit",-1),YT=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[d("◆  Select additional options "),i("span",{class:"token punctuation"},"("),d("use arrow keys/space bar"),i("span",{class:"token punctuation"},")")]),d(`
`),i("span",{class:"line"},[d("│  ◻ Add ESLint "),i("span",{class:"token keyword"},"for"),d(" code linting")]),d(`
`),i("span",{class:"line"},[d("│  ◻ Add Prettier "),i("span",{class:"token keyword"},"for"),d(" code formatting")]),d(`
`),i("span",{class:"line"},[d("│  ◻ Add Playwright "),i("span",{class:"token keyword"},"for"),d(" browser testing")]),d(`
`),i("span",{class:"line"},[d("│  ◻ Add Vitest "),i("span",{class:"token keyword"},"for"),d(" unit testing")]),d(`
`),i("span",{class:"line"},"└"),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[d("└  Your project is ready"),i("span",{class:"token operator"},"!")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},"Install community-maintained integrations:"),d(`
`),i("span",{class:"line"},"  https://github.com/svelte-add/svelte-add"),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},"Next steps:"),d(`
`),i("span",{class:"line"},[d("  "),i("span",{class:"token number"},"1"),d(": "),i("span",{class:"token builtin class-name"},"cd"),d(" hello-word-svelte-kit")]),d(`
`),i("span",{class:"line"},[d("  "),i("span",{class:"token number"},"2"),d(": "),i("span",{class:"token function"},"npm"),d(),i("span",{class:"token function"},"install"),d(),i("span",{class:"token punctuation"},"("),d("or "),i("span",{class:"token function"},"pnpm"),d(" install, etc"),i("span",{class:"token punctuation"},")")]),d(`
`),i("span",{class:"line"},[d("  "),i("span",{class:"token number"},"3"),d(": "),i("span",{class:"token function"},"git"),d(" init "),i("span",{class:"token operator"},"&&"),d(),i("span",{class:"token function"},"git"),d(),i("span",{class:"token function"},"add"),d(),i("span",{class:"token parameter variable"},"-A"),d(),i("span",{class:"token operator"},"&&"),d(),i("span",{class:"token function"},"git"),d(" commit "),i("span",{class:"token parameter variable"},"-m"),d(),i("span",{class:"token string"},'"Initial commit"'),d(),i("span",{class:"token punctuation"},"("),d("optional"),i("span",{class:"token punctuation"},")")]),d(`
`),i("span",{class:"line"},[d("  "),i("span",{class:"token number"},"4"),d(": "),i("span",{class:"token function"},"npm"),d(" run dev -- "),i("span",{class:"token parameter variable"},"--open")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},"To close the dev server, hit Ctrl-C")])],-1),GT={__name:"37",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[JT,QT,Q(s,Te({},{ranges:[""]}),{default:$(()=>[YT]),_:1},16)]),_:1},16)}}},ZT=T(GT,[["__file","/@slidev/slides/37.md"]]),XT="/TPSI/4/svelte/assets/svelte_0000-8c1f6978.png",eE=i("h1",null,"SvelteKit",-1),tE=i("p",null,"Hello World: Creare un Progetto SvelteKit",-1),nE=i("ul",null,[i("li",null,[d("Ora nella directory "),i("strong",null,"hello-word-svelte-kit"),d(" è presente un progetto base realizzato con SvelteKit")]),i("li",null,"Per portare a termine la creazione del progetto eseguire i seguenti comandi")],-1),oE=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(),i("span",{class:"token builtin class-name"},"cd"),d(" hello-word-svelte-kit  "),i("span",{class:"token comment"},"# mi sposto nella directory hello-word-svelte-kit")]),d(`
`),i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(),i("span",{class:"token function"},"npm"),d(" i  "),i("span",{class:"token comment"},"# installo le dipendenze del progetto")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[d("added "),i("span",{class:"token number"},"42"),d(" packages, and audited "),i("span",{class:"token number"},"43"),d(" packages "),i("span",{class:"token keyword"},"in"),d(" 10s")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[i("span",{class:"token number"},"3"),d(" packages are looking "),i("span",{class:"token keyword"},"for"),d(" funding")]),d(`
`),i("span",{class:"line"},[d("  run "),i("span",{class:"token variable"},[i("span",{class:"token variable"},"`"),i("span",{class:"token function"},"npm"),d(" fund"),i("span",{class:"token variable"},"`")]),d(),i("span",{class:"token keyword"},"for"),d(" details")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[d("found "),i("span",{class:"token number"},"0"),d(" vulnerabilities")])])],-1),iE=i("ul",null,[i("li",null,"Se non si sono verificatri errori, il progetto è pronto per l’esecuzione")],-1),sE=i("img",{src:XT,class:"mx-auto",width:"100"},null,-1),lE={__name:"38",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[eE,tE,nE,Q(s,Te({},{ranges:[""]}),{default:$(()=>[oE]),_:1},16),iE,sE]),_:1},16)}}},aE=T(lE,[["__file","/@slidev/slides/38.md"]]),rE=i("h1",null,"SvelteKit",-1),cE=i("p",null,"Hello World: Eseguiamo il progetto",-1),uE=i("ul",null,[i("li",null,"Per eseguire il progetto, all’interno della directory di progetto (hello-word-svelte-kit), eseguire il seguente comando")],-1),dE=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(),i("span",{class:"token function"},"npm"),d(" run dev -- "),i("span",{class:"token parameter variable"},"--open")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(" hello-word-svelte-kit@0.0.1 dev")]),d(`
`),i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(" vite dev "),i("span",{class:"token parameter variable"},"--open")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},"Forced re-optimization of dependencies"),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[d("  VITE v4.3.9  ready "),i("span",{class:"token keyword"},"in"),d(),i("span",{class:"token number"},"1136"),d(" ms")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},"  ➜  Local:   http://localhost:5173/"),d(`
`),i("span",{class:"line"},[d("  ➜  Network: use "),i("span",{class:"token parameter variable"},"--host"),d(" to expose")]),d(`
`),i("span",{class:"line"},[d("  ➜  press h to show "),i("span",{class:"token builtin class-name"},"help")])])],-1),pE=i("ul",null,[i("li",null,[d("Viene automaticamente aperta una fienstra del browser che punta al seguente indirizzo: "),i("a",{href:"http://localhost:5173/",target:"_blank",rel:"noopener"},"http://localhost:5173/")])],-1),mE={__name:"39",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[rE,cE,uE,Q(s,Te({},{ranges:[""]}),{default:$(()=>[dE]),_:1},16),pE]),_:1},16)}}},fE=T(mE,[["__file","/@slidev/slides/39.md"]]),hE="/TPSI/4/svelte/assets/svelte_009-3fc6e637.png",_E=i("h1",null,"SvelteKit",-1),vE=i("p",null,"Hello World: Eseguiamo il progetto",-1),gE=i("img",{src:hE,class:"mx-auto",width:"500"},null,-1),bE={__name:"40",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[_E,vE,gE]),_:1},16))}},yE=T(bE,[["__file","/@slidev/slides/40.md"]]),SE="/TPSI/4/svelte/assets/svelte_010-f742c650.png",wE=i("h1",null,"SvelteKit",-1),xE=i("p",null,"Hello World: Eseguiamo il progetto",-1),kE=i("img",{src:SE,class:"mx-auto",width:"450"},null,-1),$E={__name:"41",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[wE,xE,kE]),_:1},16))}},IE=T($E,[["__file","/@slidev/slides/41.md"]]),zE=i("h1",null,"SvelteKit",-1),OE=i("p",null,"Hello World: Analisi del progetto base",-1),TE=i("ul",null,[i("li",null,[d("Quest’applicazione ci permette di comprendere alcuni concetti molto importanti: "),i("ol",null,[i("li",null,[i("strong",null,"Ogni pagina dell’applicazione è un componente Svelte")]),i("li",null,[i("strong",null,"Il routing è implementato la gerarchia di directory nel filesystem")]),i("li",null,[i("strong",null,"Ogni pagina è una directory all’interno di src/routes")]),i("li",null,[i("strong",null,"La home page è un componente Svelte all’interno di src/routes")]),i("li",null,[i("strong",null,"Una pagina(componente) può includere uno o più componenti esterni")])])])],-1),EE={__name:"42",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[zE,OE,TE]),_:1},16))}},CE=T(EE,[["__file","/@slidev/slides/42.md"]]),AE=i("h1",null,"SvelteKit",-1),ME=i("p",null,"Hello World: Analisi del progetto base",-1),PE=i("ul",null,[i("li",null,"Analizziamo il progetto generato")],-1),KE=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},"src"),d(`
`),i("span",{class:"line"},[d("├── app.html --"),i("span",{class:"token operator"},">"),d(" La pagina Web dell'applicazione")]),d(`
`),i("span",{class:"line"},[d("└── routes --"),i("span",{class:"token operator"},">"),d(" entry point del sistema di routing filesystem based")]),d(`
`),i("span",{class:"line"},"    ├── about"),d(`
`),i("span",{class:"line"},[d("    │   └── +page.svelte --"),i("span",{class:"token operator"},">"),d(" la pagina About "),i("span",{class:"token punctuation"},"("),d("componente svelte"),i("span",{class:"token punctuation"},")")]),d(`
`),i("span",{class:"line"},[d("    ├── Counter.svelte --"),i("span",{class:"token operator"},">"),d(" il componente contatore presente solo nella home")]),d(`
`),i("span",{class:"line"},[d("    ├── Header.svelte --"),i("span",{class:"token operator"},">"),d(" il componente Header presente "),i("span",{class:"token keyword"},"in"),d(" tutte le pagine")]),d(`
`),i("span",{class:"line"},[d("    ├── +layout.svelte --"),i("span",{class:"token operator"},">"),d(" il layout comune a tutte le pagine del progetto")]),d(`
`),i("span",{class:"line"},[d("    ├── +page.svelte --"),i("span",{class:"token operator"},">"),d(" la home page "),i("span",{class:"token punctuation"},"("),d("componente svelte"),i("span",{class:"token punctuation"},")")]),d(`
`),i("span",{class:"line"},[d("    ├── styles.css --"),i("span",{class:"token operator"},">"),d(" CSS globale che si applica a tutta l'applicazione ed ai suoi componenti")]),d(`
`),i("span",{class:"line"},"    └── sverdle"),d(`
`),i("span",{class:"line"},[d("        ├── game.js --"),i("span",{class:"token operator"},">"),d(" la logica del gioco "),i("span",{class:"token punctuation"},"("),d("JS vanilla"),i("span",{class:"token punctuation"},")")]),d(`
`),i("span",{class:"line"},[d("        ├── +page.server.js --"),i("span",{class:"token operator"},">"),d(" il back-end di sverdle "),i("span",{class:"token punctuation"},"("),d("JS vanilla"),i("span",{class:"token punctuation"},")")]),d(`
`),i("span",{class:"line"},[d("        └── +page.svelte --"),i("span",{class:"token operator"},">"),d(" la pagina sverdle "),i("span",{class:"token punctuation"},"("),d("componente svelte"),i("span",{class:"token punctuation"},")")])])],-1),LE={__name:"43",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[AE,ME,PE,Q(s,Te({},{ranges:[""]}),{default:$(()=>[KE]),_:1},16)]),_:1},16)}}},RE=T(LE,[["__file","/@slidev/slides/43.md"]]),WE=i("h1",null,"SvelteKit",-1),HE=i("p",null,"Hello World: Analisi del progetto base",-1),NE=i("ul",null,[i("li",null,[i("p",null,"Da questa prima analisi possiamo dedurre che:"),i("ul",null,[i("li",null,[d("Ogni pagina è composta da: "),i("ul",null,[i("li",null,"una directory all’interno di src/router. Il nome della directory coincide con la URL della pagina (quindi niente spazi, ma usiamo _)"),i("li",null,[d("un file nominato "),i("strong",null,"+page-svelte"),d(" che è un componente completo ed indipendente che include HTML, CSS e JS")])])]),i("li",null,[d("Ogni componente che non è una pagina è formato da un file chiamato "),i("em",null,[i("strong",null,"<nome_componente>.svelte")])]),i("li",null,"Il routing tra pagine viene gestito automaticamente da SvelteKit se si rispetta la convenzione descritta sopra")])]),i("li",null,[i("p",null,[i("strong",null,[d("Segue ora un’analisi live a cura del professore ("),i("code",null,"necessario prendere appunti"),d(")")])])])],-1),DE={__name:"44",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[WE,HE,NE]),_:1},16))}},FE=T(DE,[["__file","/@slidev/slides/44.md"]]),jE=i("h1",null,"SvelteKit",-1),VE=i("p",null,"Hello World: Esercitazione_01",-1),BE=i("ul",null,[i("li",null,"Creare ed installare il progetto base SvelteKit come spiegato sopra"),i("li",null,"Eseguire l’applicazione")],-1),qE={__name:"45",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[jE,VE,BE]),_:1},16))}},UE=T(qE,[["__file","/@slidev/slides/45.md"]]),JE="/TPSI/4/svelte/assets/svelte_011-5ebbb473.png",QE=i("h1",null,"SvelteKit",-1),YE=i("p",null,"Hello World: Esercitazione_02",-1),GE=i("ul",null,[i("li",null,"provare a modificare la home page del progetto in modo che appaia come in figura")],-1),ZE=i("img",{src:JE,class:"mx-auto",width:"450"},null,-1),XE={__name:"46",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[QE,YE,GE,ZE]),_:1},16))}},eC=T(XE,[["__file","/@slidev/slides/46.md"]]),tC="/TPSI/4/svelte/assets/svelte_012-0ceab35c.png",nC=i("h1",null,"SvelteKit",-1),oC=i("p",null,"Hello World: Esercitazione_03",-1),iC=i("ul",null,[i("li",null,"provare a modificare il layout del progetto in modo che appaia come in figura")],-1),sC=i("p",null,[i("br"),i("br"),i("img",{src:tC,class:"mx-auto",width:"700"})],-1),lC={__name:"47",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[nC,oC,iC,sC]),_:1},16))}},aC=T(lC,[["__file","/@slidev/slides/47.md"]]),rC="/TPSI/4/svelte/assets/svelte_013-7818c60a.png",cC=i("h1",null,"SvelteKit",-1),uC=i("p",null,"Hello World: Esercitazione_04",-1),dC=i("ul",null,[i("li",null,"provare a modificare la pagina about in modo che appaia come in figura")],-1),pC=i("img",{src:rC,class:"mx-auto",width:"600"},null,-1),mC={__name:"48",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[cC,uC,dC,pC]),_:1},16))}},fC=T(mC,[["__file","/@slidev/slides/48.md"]]),hC="/TPSI/4/svelte/assets/svelte_014-9655b9ec.png",_C=i("h1",null,"SvelteKit",-1),vC=i("p",null,"Hello World: Esercitazione_05",-1),gC=i("ul",null,[i("li",null,"provare a modificare il componente counter in modo che si incrementi o decrementi di due unità alla pressione dei pulsati + o -")],-1),bC=i("br",null,null,-1),yC=i("img",{src:hC,class:"mx-auto",width:"600"},null,-1),SC={__name:"49",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[_C,vC,gC,bC,yC]),_:1},16))}},wC=T(SC,[["__file","/@slidev/slides/49.md"]]),Gm="/TPSI/4/svelte/assets/svelte_015-368b64e2.png",xC=i("h1",null,"SvelteKit",-1),kC=i("p",null,"Creiamo un componente",-1),$C=i("ul",null,[i("li",null,"Vediamo ora come creare un nostro componente e utilizzarlo nelle pagine della nostra applicazione"),i("li",null,"Realizzeremo il componente introdotto alla slide #28 e successive"),i("li",null,"Lo visualizzeremo sia sulla pagina home che sulla pagina about")],-1),IC=i("img",{src:Gm,class:"mx-auto",width:"450"},null,-1),zC={__name:"50",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[xC,kC,$C,IC]),_:1},16))}},OC=T(zC,[["__file","/@slidev/slides/50.md"]]),TC=i("h1",null,"SvelteKit",-1),EC=i("p",null,"Creiamo un componente",-1),CC=i("ul",null,[i("li",null,"Per una corretta organizzazione del codice metetremo i nostri componenti nella directory lib"),i("li",null,[d("Il nostro componente si chiama "),i("strong",null,"Banner")]),i("li",null,[d("Quindi dobbiamo creare una directory "),i("em",null,"components"),d(" in src/lib e al suo interno creare un file "),i("em",null,"banner.svelte")])],-1),AC=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(),i("span",{class:"token builtin class-name"},"cd"),d(" src/lib")]),d(`
`),i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(),i("span",{class:"token function"},"mkdir"),d(" components")]),d(`
`),i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(),i("span",{class:"token function"},"touch"),d(" components/banner.svelte")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},"├── app.html"),d(`
`),i("span",{class:"line"},"├── lib"),d(`
`),i("span",{class:"line"},"│   ├── components"),d(`
`),i("span",{class:"line"},"│   │   └── banner.svelte")])],-1),MC=i("ul",null,[i("li",null,"Ora editiamo il file banner.svelte ed utilizziamo il codice di slide #28")],-1),PC={__name:"51",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[TC,EC,CC,Q(s,Te({},{ranges:[""]}),{default:$(()=>[AC]),_:1},16),MC]),_:1},16)}}},KC=T(PC,[["__file","/@slidev/slides/51.md"]]),LC=i("h1",null,"SvelteKit",-1),RC=i("p",null,"Creiamo un componente",-1),WC=i("ul",null,[i("li",null,[d("Il componente "),i("strong",null,"banner"),d(" è ora disponibile per essere utilizzato")]),i("li",null,[d("Per fare ciò dobbiamo "),i("em",null,[i("strong",null,"importarlo")]),d(" nella pagina in cui vogliamo utilizzarlo")]),i("li",null,[d("Partiamo modificando la home e quindi editiamo il file "),i("em",null,"src/routes/+page.svelte")])],-1),HC=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("script")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},"    import Counter from './Counter.svelte';"),d(`
`),i("span",{class:"line"},"    ......"),d(`
`),i("span",{class:"line"},"    import Banner from '../lib/components/banner.svelte'; // aggiungi questa linea"),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("script")]),i("span",{class:"token punctuation"},">")])])])],-1),NC=i("ul",null,[i("li",null,[d("Ora abbiamo a disposizione un nuovo tag HTML che si chiama "),i("strong",null,"<Banner>")]),i("li",null,"Questo è un componente Web e possiamo usarlo come qualsiasi altro tag html"),i("li",null,"Come anticipato il paradigma dei web component offre infinite possibilità")],-1),DC={__name:"52",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[LC,RC,WC,Q(s,Te({},{ranges:[""]}),{default:$(()=>[HC]),_:1},16),NC]),_:1},16)}}},FC=T(DC,[["__file","/@slidev/slides/52.md"]]),jC=i("h1",null,"SvelteKit",-1),VC=i("p",null,"Creiamo un componente",-1),BC=i("ul",null,[i("li",null,"Ora usiamo il componente nella home page")],-1),qC=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("section")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},[d("	"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("h1")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},[d("		"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("span")]),d(),i("span",{class:"token attr-name"},"class"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),d("welcome"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},[d("			"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("picture")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},[d("				"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("source")]),d(),i("span",{class:"token attr-name"},"srcset"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),d("{welcome}")]),d(),i("span",{class:"token attr-name"},"type"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),d("image/webp"),i("span",{class:"token punctuation"},'"')]),d(),i("span",{class:"token punctuation"},"/>")])]),d(`
`),i("span",{class:"line"},[d("				"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("img")]),d(),i("span",{class:"token attr-name"},"src"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),d("{welcome_fallback}")]),d(),i("span",{class:"token attr-name"},"alt"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),d("Welcome"),i("span",{class:"token punctuation"},'"')]),d(),i("span",{class:"token punctuation"},"/>")])]),d(`
`),i("span",{class:"line"},[d("			"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("picture")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},[d("		"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("span")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[d("		alla tua nuova "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("br")]),d(),i("span",{class:"token punctuation"},"/>")]),d("applicazione SvelteKit")]),d(`
`),i("span",{class:"line"},[d("	"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("h1")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[d("	"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("h2")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},[d("		prova a editare il file "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("strong")]),i("span",{class:"token punctuation"},">")]),d("src/routes/+page.svelte"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("strong")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},[d("	"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("h2")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[d("	"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("Banner")]),d(),i("span",{class:"token punctuation"},"/>")]),d(),i("span",{class:"token comment"},"<!-- Utilizza Banner al posto di Counter-->")]),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("section")]),i("span",{class:"token punctuation"},">")])])])],-1),UC={__name:"53",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[jC,VC,BC,Q(s,Te({},{ranges:[""]}),{default:$(()=>[qC]),_:1},16)]),_:1},16)}}},JC=T(UC,[["__file","/@slidev/slides/53.md"]]),QC=i("h1",null,"SvelteKit",-1),YC=i("p",null,"Creiamo un componente",-1),GC=i("ul",null,[i("li",null,"Ora facciamo partire l’applicazione e verifichiamo che tutto sia corretto")],-1),ZC=i("br",null,null,-1),XC=i("img",{src:Gm,class:"mx-auto",width:"500"},null,-1),eA={__name:"54",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[QC,YC,GC,ZC,XC]),_:1},16))}},tA=T(eA,[["__file","/@slidev/slides/54.md"]]),nA="/TPSI/4/svelte/assets/svelte_016-51073a42.png",oA=i("h1",null,"SvelteKit",-1),iA=i("p",null,"Hello World: Esercitazione_06",-1),sA=i("ul",null,[i("li",null,"provare a modificare la pagina about aggiungendo il componente Banner")],-1),lA=i("br",null,null,-1),aA=i("img",{src:nA,class:"mx-auto",width:"600"},null,-1),rA={__name:"55",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[oA,iA,sA,lA,aA]),_:1},16))}},cA=T(rA,[["__file","/@slidev/slides/55.md"]]),uA=i("h1",null,"SvelteKit",-1),dA=i("p",null,"Creiamo un componente",-1),pA=i("ul",null,[i("li",null,"Quindi una volta definito il componente, esso sarà riutilizzabile in qualsiasi pagina e sezione del nostro sito"),i("li",null,"Ma ancor meglio potrà essere utilizzato anche in altri siti e pagine"),i("li",null,[d("Quindi i componenti web ci permettono di implementare importanti proprietà dello sviluppo software, quali "),i("ul",null,[i("li",null,"incapsulamento"),i("li",null,"isolamento"),i("li",null,"riutilizzabilità del codice")])]),i("li",null,"Per questi motivi lo sviluppo component base è oggi alla base di tutti i principali framework di sviluppo per il mondo web (web, mobile, games, web app, desktop app)")],-1),mA={__name:"56",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[uA,dA,pA]),_:1},16))}},fA=T(mA,[["__file","/@slidev/slides/56.md"]]),hA=i("h1",null,"SvelteKit",-1),_A=i("p",null,"Variable Substitution",-1),vA=i("ul",null,[i("li",null,"Analizziamo più in dettaglio il componente Banner")],-1),gA=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("script")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},"    let name = 'John Doe';"),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("script")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("h1")]),i("span",{class:"token punctuation"},">")]),d("My name is {name}!"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("h1")]),i("span",{class:"token punctuation"},">")])])])],-1),bA=i("ul",null,[i("li",null,[d("Nella sezione JS del componente abbiamo solo definito una variabile di nome "),i("em",null,"name"),d(" ed assegnato un valore string")]),i("li",null,[d("Nella sezione HTML del componente abbiamo utilizzato la variabile all’interno di normale codice HTML tramite "),i("code",null,"{}")])],-1),yA=i("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"30px"}},[i("p",null,"In svelte il costrutto {< var name >} rappresenta una sostituzione di variabili")],-1),SA=i("ul",null,[i("li",null,[d("Pertanto quando il componente sarà compilato ogni occorrenza di "),i("code",null,"{< var name>}"),d(" sarà sostituito con il valore attribuito alla variabile "),i("em",null,"var name")])],-1),wA={__name:"57",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[hA,_A,vA,Q(s,Te({},{ranges:[""]}),{default:$(()=>[gA]),_:1},16),bA,yA,SA]),_:1},16)}}},xA=T(wA,[["__file","/@slidev/slides/57.md"]]),kA="/TPSI/4/svelte/assets/svelte_017-d1ecfa98.png",$A=i("h1",null,"SvelteKit",-1),IA=i("p",null,"Hello World: Esercitazione_07",-1),zA=i("ul",null,[i("li",null,"Provare a modificare il componente Banner in modo che visualizzi il proprio nome e cognome"),i("li",null,"Verificare che il banner appaia modificato in tutte le pagine")],-1),OA=i("br",null,null,-1),TA=i("img",{src:kA,class:"mx-auto",width:"500"},null,-1),EA={__name:"58",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[$A,IA,zA,OA,TA]),_:1},16))}},CA=T(EA,[["__file","/@slidev/slides/58.md"]]),AA=i("h1",null,"SvelteKit",-1),MA=i("p",null,"Code Execution",-1),PA=i("ul",null,[i("li",null,"In molti casi sostituire una variabile non è sufficiente, ma si rende necessario l’esecuzione di un codice JS"),i("li",null,[d("Anche in questa situazione il costrutto "),i("code",null,"{}"),d(" viene in nostro aiuto")]),i("li",null,[d("Infatti svelte durante la compilazione, esegue il codice JS contenuto in "),i("code",null,"{}"),d(" e sostituisce il suo output nel codice HTML")]),i("li",null,"Vediamo un esempio")],-1),KA=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("script")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},"    let name = 'John Doe';"),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("script")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("h1")]),i("span",{class:"token punctuation"},">")]),d("My name is {name.toLocaleUpperCase()}!"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("h1")]),i("span",{class:"token punctuation"},">")])])])],-1),LA=i("ul",null,[i("li",null,[d("Quando questo codice viene compilato, viene prima richiamato il metodo "),i("em",null,"toUpperCase"),d(" sulla variabile(oggetto) name")]),i("li",null,[d("Successivamente il risultato di questa esecuzione viene sostitutito "),i("em",null,"verbatim"),d(" nel codice HTML")])],-1),RA={__name:"59",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[AA,MA,PA,Q(s,Te({},{ranges:[""]}),{default:$(()=>[KA]),_:1},16),LA]),_:1},16)}}},WA=T(RA,[["__file","/@slidev/slides/59.md"]]),HA="/TPSI/4/svelte/assets/svelte_018-4a3d51b3.png",NA=i("h1",null,"SvelteKit",-1),DA=i("p",null,"Code Execution",-1),FA=i("img",{src:HA,class:"mx-auto",width:"500"},null,-1),jA={__name:"60",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[NA,DA,FA]),_:1},16))}},VA=T(jA,[["__file","/@slidev/slides/60.md"]]),BA=i("h1",null,"SvelteKit",-1),qA=i("p",null,"Code Execution",-1),UA=i("ul",null,[i("li",null,"Ovviamente non siamo limitati ai metodi degli oggetti standard di JS"),i("li",null,"Ma possiamo anche richiamare nostre funzioni"),i("li",null,"Per esempio vediamo come richiamare una funzione che prende il nostro nome e lo stampa al contrario tutto maiuscolo")],-1),JA=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("script")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},"    let name = 'Antonio Mancuso';"),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},"    function reverse_string(str) {"),d(`
`),i("span",{class:"line"},"        return str.split('').reverse().join('').toUpperCase();"),d(`
`),i("span",{class:"line"},"    }"),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("script")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("h1")]),i("span",{class:"token punctuation"},">")]),d("My name is {reverse_string(name)}!"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("h1")]),i("span",{class:"token punctuation"},">")])])])],-1),QA={__name:"61",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[BA,qA,UA,Q(s,Te({},{ranges:[""]}),{default:$(()=>[JA]),_:1},16)]),_:1},16)}}},YA=T(QA,[["__file","/@slidev/slides/61.md"]]),GA="/TPSI/4/svelte/assets/svelte_019-600c2437.png",ZA=i("h1",null,"SvelteKit",-1),XA=i("p",null,"Code Execution",-1),eM=i("ul",null,[i("li",null,[d("Quando questo codice viene compilato, viene prima richiamato la nostra funzione "),i("em",null,"reverse_string")]),i("li",null,[d("Successivamente il risultato di questa esecuzione viene sostitutito "),i("em",null,"verbatim"),d(" nel codice HTML")])],-1),tM=i("br",null,null,-1),nM=i("img",{src:GA,class:"mx-auto",width:"400"},null,-1),oM={__name:"62",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[ZA,XA,eM,tM,nM]),_:1},16))}},iM=T(oM,[["__file","/@slidev/slides/62.md"]]),sM=i("h1",null,"SvelteKit",-1),lM=i("ul",null,[i("li",null,[i("p",null,"Come abbiamo visto con semplici esempi, il meccanismo dei componenti di Svlete è molto versatile")]),i("li",null,[i("p",null,"Permette la definizione di componenti indipendenti rendendo più facile lo sviluppo e riducendo gli errori")]),i("li",null,[i("p",null,"Il meccanismo della sostituzione delle variabili e del code execution sono molto utili nello sviluppo di applicazioni web moderne")]),i("li",null,[i("p",null,"Svelte rende tutto ciò semplicissimo e più semplice rispetto ad altri framework")]),i("li",null,[i("p",null,"Per questo e altri motivi è un framework in veloce ascesa nel panorama dello sviluppo web")]),i("li",null,[i("p",null,"Ora vediamo come creare un progetto Svelte da zero, senza scaffolding")]),i("li",null,[i("p",null,"Questo ci permetterà di comprendere altri meccanismi e come è realmente organizzata un’applicazione sveltekit")])],-1),aM={__name:"63",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[sM,lM]),_:1},16))}},rM=T(aM,[["__file","/@slidev/slides/63.md"]]),cM=i("h1",null,"SvelteKit",-1),uM=i("p",null,"Creazione Web App: scaffolding del progetto",-1),dM=i("ul",null,[i("li",null,"Creiamo un nuovo progetto chiamato WebApp")],-1),pM=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token operator"},">"),d(),i("span",{class:"token function"},"npm"),d(" create svelte@latest WebApp")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[d("create-svelte version "),i("span",{class:"token number"},"4.2"),d(".0")]),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},[d("┌  Welcome to SvelteKit"),i("span",{class:"token operator"},"!")]),d(`
`),i("span",{class:"line"},"│"),d(`
`),i("span",{class:"line"},"◆  Which Svelte app template?"),d(`
`),i("span",{class:"line"},"│  ○ SvelteKit demo app"),d(`
`),i("span",{class:"line"},[d("│  ● Skeleton project "),i("span",{class:"token punctuation"},"("),d("Barebones scaffolding "),i("span",{class:"token keyword"},"for"),d(" your new SvelteKit app"),i("span",{class:"token punctuation"},")")]),d(`
`),i("span",{class:"line"},"│  ○ Library project"),d(`
`),i("span",{class:"line"},"└"),d(`
`),i("span",{class:"line"},[d("◇  Add "),i("span",{class:"token builtin class-name"},"type"),d(" checking with TypeScript?")]),d(`
`),i("span",{class:"line"},"│  No"),d(`
`),i("span",{class:"line"},"│"),d(`
`),i("span",{class:"line"},[d("◇  Select additional options "),i("span",{class:"token punctuation"},"("),d("use arrow keys/space bar"),i("span",{class:"token punctuation"},")")]),d(`
`),i("span",{class:"line"},"│  none"),d(`
`),i("span",{class:"line"},"│"),d(`
`),i("span",{class:"line"},[d("└  Your project is ready"),i("span",{class:"token operator"},"!")])])],-1),mM={__name:"64",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[cM,uM,dM,Q(s,Te({},{ranges:[""]}),{default:$(()=>[pM]),_:1},16)]),_:1},16)}}},fM=T(mM,[["__file","/@slidev/slides/64.md"]]),hM="/TPSI/4/svelte/assets/svelte_020-2a368428.png",_M=i("h1",null,"SvelteKit",-1),vM=i("p",null,"Creazione Web App: scaffolding del progetto",-1),gM=i("ul",null,[i("li",null,"Questa volta è stato solo creato il minimo indispendabile")],-1),bM=i("p",null,[i("br"),i("br"),i("img",{src:hM,class:"mx-auto",width:"400"})],-1),yM=i("ul",null,[i("li",null,"Creeremo uno scheletro di una semplice Web App senza spendere troppo tempo sull’aspetto estetico (HTML e CSS sono dati per scontato in questa lezione)"),i("li",null,"L’obiettivo è comprendere il funzionamento e l’organizzazione di un’app sveltekit")],-1),SM={__name:"65",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[_M,vM,gM,bM,yM]),_:1},16))}},wM=T(SM,[["__file","/@slidev/slides/65.md"]]),xM=i("h1",null,"SvelteKit",-1),kM=i("p",null,"Creazione Web App: scaffolding del progetto",-1),$M=i("ul",null,[i("li",null,[d("Iniziamo con la creazione del "),i("code",null,"layout"),d(" della pagina")]),i("li",null,[d("Il "),i("em",null,[i("strong",null,"layout")]),d(" della pagina è il contenitore principale della nostra applicazione")]),i("li",null,"Esso sarà sempre visualizzato in ciascuna pagina del sito"),i("li",null,"Il vantaggio principale è che in questo modo il layout sarà scritto una sola volta ed utilizzato per tutte le pagine"),i("li",null,[d("Questo meccanismo implementa il principio "),i("a",{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",target:"_blank",rel:"noopener"},"DRY"),d(" (Don’t Repeat Yourself) molto importante nello sviluppo del software")]),i("li",null,[d("Creaimo quindi un file chiamato "),i("code",null,"+layout.svelte"),d(" in "),i("em",null,[i("strong",null,"src/routes")])])],-1),IM=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},"src"),d(`
`),i("span",{class:"line"},"├── app.html"),d(`
`),i("span",{class:"line"},"└── routes"),d(`
`),i("span",{class:"line"},[d("    ├── +layout.svelte "),i("span",{class:"token operator"},"<"),d("--- layout")]),d(`
`),i("span",{class:"line"},[d("    └── +page.svelte   "),i("span",{class:"token operator"},"<"),d("--- home page")])])],-1),zM=i("ul",null,[i("li",null,"Inseriamo il codice HTML e CSS")],-1),OM={__name:"66",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[xM,kM,$M,Q(s,Te({},{ranges:[""]}),{default:$(()=>[IM]),_:1},16),zM]),_:1},16)}}},TM=T(OM,[["__file","/@slidev/slides/66.md"]]),EM="/TPSI/4/svelte/assets/svelte_021-dca7a484.png",CM=i("h1",null,"SvelteKit",-1),AM=i("p",null,"Creazione Web App: il layout",-1),MM=i("img",{src:EM,class:"mx-auto",width:"400"},null,-1),PM={__name:"67",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[CM,AM,MM]),_:1},16))}},KM=T(PM,[["__file","/@slidev/slides/67.md"]]),LM="/TPSI/4/svelte/assets/svelte_022-037591fe.png",RM="/TPSI/4/svelte/assets/svelte_023-535f64a4.png",WM=i("h1",null,"SvelteKit",-1),HM=i("p",null,"Creazione Web App: il layout",-1),NM=i("img",{src:LM,class:"mx-auto",width:"400",style:{position:"relative",left:"-200px"}},null,-1),DM=i("img",{src:RM,class:"mx-auto",width:"360",style:{position:"relative",left:"200px",top:"-500px"}},null,-1),FM={__name:"68",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[WM,HM,NM,DM]),_:1},16))}},jM=T(FM,[["__file","/@slidev/slides/68.md"]]),VM="/TPSI/4/svelte/assets/svelte_024-90632bcf.png",BM=i("h1",null,"SvelteKit",-1),qM=i("p",null,"Creazione Web App: il layout",-1),UM=i("img",{src:VM,class:"mx-auto",width:"600"},null,-1),JM={__name:"69",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[BM,qM,UM]),_:1},16))}},QM=T(JM,[["__file","/@slidev/slides/69.md"]]),YM=i("h1",null,"SvelteKit",-1),GM=i("p",null,"Creazione Web App: il layout",-1),ZM=i("ul",null,[i("li",null,[i("p",null,"Abbiamo definito il layout della nostra applicazione, composto da:"),i("ul",null,[i("li",null,"header"),i("li",null,"navbar"),i("li",null,"main content area (article)"),i("li",null,"footer")])]),i("li",null,[i("p",null,"Le pagine che andremo a sviluppare verranno visualizzate nel main content area")])],-1),XM={__name:"70",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[YM,GM,ZM]),_:1},16))}},e4=T(XM,[["__file","/@slidev/slides/70.md"]]),t4={class:"banner"},n4=Me({__name:"Banner",props:{bg:{default:"white"},fg:{default:"white"}},setup(e,{emit:t}){const n=e;Gv(l=>({"76049b2e-bgcol":M(o),"76049b2e-fgcol":M(s)})),I(O);const o=Kt(n,"bg",t),s=Kt(n,"fg",t);return(l,a)=>(g(),ie("div",t4,[qt(l.$slots,"default")]))}});const pl=T(n4,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/components/Banner.vue"]]),o4="/TPSI/4/svelte/assets/svelte_025-e24a97c2.png",i4=i("h1",null,"SvelteKit",-1),s4=i("p",null,"Creazione Web App: il layout",-1),l4=i("ul",null,[i("li",null,"Importante notare che nello style del layout abbiamo modificato lo stile globale del body"),i("li",null,[d("Per far ciò abbiamo usato il costrutto "),i("code",null,":global(<selettore>)")])],-1),a4=i("br",null,null,-1),r4=i("img",{src:o4,class:"mx-auto",width:"400"},null,-1),c4=i("ul",null,[i("li",null,[d("Ciò è necessario in quanto lo stylde del componente (layout è un componente) è "),i("strong",null,"scoped")]),i("li",null,"In altre parole lo stile di un componente è confinato al solo componente stesso e non può modificare lo stilde di altri componenti"),i("li",null,[d("L’uso di "),i("em",null,":globa"),d(" ci permette di fare un’eccezione a questa regola")])],-1),u4=i("br",null,null,-1),d4={__name:"71",setup(e){const t={};return I(O),(n,o)=>{const s=pl;return g(),z(N,H(W(t)),{default:$(()=>[i4,s4,l4,a4,r4,c4,u4,Q(s,{bg:"green",fg:"yellow"},{default:$(()=>[d(" Si suggerisce di non abusare di questa possibilità in quanto rende il codice meno leggibile e meno comprensibile ")]),_:1})]),_:1},16)}}},p4=T(d4,[["__file","/@slidev/slides/71.md"]]),m4=i("h1",null,"SvelteKit",-1),f4=i("p",null,"Component Slot",-1),h4=i("ul",null,[i("li",null,"Come si vede al momento la nostra app non visualizza la home page nella main content area"),i("li",null,"Questo perchè al momento il componente layout NON include nessuna ltro componente (home page)"),i("li",null,[d("Per poter risolvere questo problema dobbiamo ricorrere ad un concetto di Svelte chiamato "),i("code",null,"Component Slots")]),i("li",null,"In pratica in modo analogo ai tag HTML che possono avere un contenuto")],-1),_4=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("div")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},[d("	"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("p")]),i("span",{class:"token punctuation"},">")]),d("Io sono figlio di div"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("p")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("div")]),i("span",{class:"token punctuation"},">")])])])],-1),v4=i("ul",null,[i("li",null,[d("Anche un componente Svelte può avere un contenuto (o figlio) tramite il costrutto "),i("code",null,"<slot />")]),i("li",null,[d('In altre parole all’interno di un componente Svelte possiamo decidere dove visualizzare il contenuto del "figlio" usando '),i("code",null,"<slot />")])],-1),g4={__name:"72",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[m4,f4,h4,Q(s,Te({},{ranges:[""]}),{default:$(()=>[_4]),_:1},16),v4]),_:1},16)}}},b4=T(g4,[["__file","/@slidev/slides/72.md"]]),y4=i("h1",null,"SvelteKit",-1),S4=i("p",null,"Component Slot",-1),w4=i("ul",null,[i("li",null,"Modifichiamo +layout.svelte aggiungendo lo slot nella sezione article")],-1),x4=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},"... "),d(`
`),i("span",{class:"line"},[d("   "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("article")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},[d("      "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("slot")]),d(),i("span",{class:"token punctuation"},"/>")])]),d(`
`),i("span",{class:"line"},[d("   "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("article")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},"...")])],-1),k4=i("ul",null,[i("li",null,"In questo modo nella sezione article comparirà il contenuto del componente correntemente in utilizzio (home page o +page.svelte in src/routes)")],-1),$4={__name:"73",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[y4,S4,w4,Q(s,Te({},{ranges:[""]}),{default:$(()=>[x4]),_:1},16),k4]),_:1},16)}}},I4=T($4,[["__file","/@slidev/slides/73.md"]]),z4="/TPSI/4/svelte/assets/svelte_026-bb839bc1.png",O4=i("h1",null,"SvelteKit",-1),T4=i("p",null,"Component Slot",-1),E4=i("img",{src:z4,class:"mx-auto",width:"650"},null,-1),C4={__name:"74",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[O4,T4,E4]),_:1},16))}},A4=T(C4,[["__file","/@slidev/slides/74.md"]]),M4="/TPSI/4/svelte/assets/svelte_027-b9352cfd.png",P4=i("h1",null,"SvelteKit",-1),K4=i("p",null,"Hello World: Esercitazione_08",-1),L4=i("ul",null,[i("li",null,"Provare a modificare la home page in modo che appaia come in figura")],-1),R4=i("br",null,null,-1),W4=i("img",{src:M4,class:"mx-auto",width:"630"},null,-1),H4={__name:"75",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[P4,K4,L4,R4,W4]),_:1},16))}},N4=T(H4,[["__file","/@slidev/slides/75.md"]]),D4=i("h1",null,"SvelteKit",-1),F4=i("p",null,"Pagina Chi Sono",-1),j4=i("ul",null,[i("li",null,'Adesso creiamo la pagina "Chi Sono"'),i("li",null,"In questa pagina faremo una breve introduzione di noi stessi"),i("li",null,"E’ importante che nella descrizione di noi stessi includiamo cognome, nome ed età (questo ci sarà utile dopo)"),i("li",null,'Quindi per creare la pagina "Chi Sono" creiamo una directory in modo da ottenere questo risultato')],-1),V4=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},"src"),d(`
`),i("span",{class:"line"},"├── app.html"),d(`
`),i("span",{class:"line"},"└── routes"),d(`
`),i("span",{class:"line"},[d("    ├── chi_sono     "),i("span",{class:"token operator"},"<"),d("---------- routes corrispondente alla pagina")]),d(`
`),i("span",{class:"line"},[d("    │   └── +page.svelte  "),i("span",{class:"token operator"},"<"),d("------ componente o pagina HTML")]),d(`
`),i("span",{class:"line"},"    ├── +layout.svelte"),d(`
`),i("span",{class:"line"},"    └── +page.svelte")])],-1),B4={__name:"76",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[D4,F4,j4,Q(s,Te({},{ranges:[""]}),{default:$(()=>[V4]),_:1},16)]),_:1},16)}}},q4=T(B4,[["__file","/@slidev/slides/76.md"]]),U4="/TPSI/4/svelte/assets/svelte_029-5b49b40e.png",J4=i("h1",null,"SvelteKit",-1),Q4=i("p",null,"Pagina Chi Sono",-1),Y4=i("p",null,"+page.svelte",-1),G4=i("br",null,null,-1),Z4=i("img",{src:U4,class:"mx-auto",width:"600"},null,-1),X4={__name:"77",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[J4,Q4,Y4,G4,Z4]),_:1},16))}},eP=T(X4,[["__file","/@slidev/slides/77.md"]]),tP="/TPSI/4/svelte/assets/svelte_030-3eb3d437.png",nP=i("h1",null,"SvelteKit",-1),oP=i("p",null,"Pagina Chi Sono",-1),iP=i("ul",null,[i("li",null,'Ora dobbiamo collegare la nuova pagina "Chi Sono" con la barra di navigazione'),i("li",null,"Basta modificare il link in questo modo")],-1),sP=i("br",null,null,-1),lP=i("img",{src:tP,class:"mx-auto",width:"600"},null,-1),aP=i("br",null,null,-1),rP=i("ul",null,[i("li",null,"In tal modo quando clicchiamo sul link Chi Sono la pagina omonima verrà visualizzata nella main content area")],-1),cP={__name:"78",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[nP,oP,iP,sP,lP,aP,rP]),_:1},16))}},uP=T(cP,[["__file","/@slidev/slides/78.md"]]),dP="/TPSI/4/svelte/assets/svelte_028-0d92289a.png",pP=i("h1",null,"SvelteKit",-1),mP=i("p",null,"Pagina Chi Sono",-1),fP=i("img",{src:dP,class:"mx-auto",width:"650"},null,-1),hP={__name:"79",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[pP,mP,fP]),_:1},16))}},_P=T(hP,[["__file","/@slidev/slides/79.md"]]),vP=i("h1",null,"SvelteKit",-1),gP=i("p",null,"Il componente WhoAmI",-1),bP=i("ul",null,[i("li",null,[d('Ora trasformiamo la pagina "Chi Sono" in modo che visualizzi un solo componente chiamato '),i("em",null,[i("strong",null,"WhoAmI")])]),i("li",null,[d("Quindi creiamo un nuovo componente "),i("em",null,[i("strong",null,"WhoAmI")])])],-1),yP=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},"src"),d(`
`),i("span",{class:"line"},"├── app.html"),d(`
`),i("span",{class:"line"},"├── lib"),d(`
`),i("span",{class:"line"},"│   └── components"),d(`
`),i("span",{class:"line"},[d("│       └── who_am_i.svelte "),i("span",{class:"token operator"},"<"),d("--- componente WhoAmI")]),d(`
`),i("span",{class:"line"},"└── routes"),d(`
`),i("span",{class:"line"},"    ├── chi_sono"),d(`
`),i("span",{class:"line"},"    │   └── +page.svelte"),d(`
`),i("span",{class:"line"},"    ├── +layout.svelte"),d(`
`),i("span",{class:"line"},"    └── +page.svelte")])],-1),SP={__name:"80",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[vP,gP,bP,Q(s,Te({},{ranges:[""]}),{default:$(()=>[yP]),_:1},16)]),_:1},16)}}},wP=T(SP,[["__file","/@slidev/slides/80.md"]]),xP="/TPSI/4/svelte/assets/svelte_031-160c930b.png",kP="/TPSI/4/svelte/assets/svelte_032-a782ee2a.png",$P=i("h1",null,"SvelteKit",-1),IP=i("p",null,"Il componente WhoAmI",-1),zP=i("p",null,"who_am_i.svelte",-1),OP=i("img",{src:xP,class:"mx-auto",width:"600"},null,-1),TP=i("br",null,null,-1),EP=i("ul",null,[i("li",null,"Ora modifichiamo la pagina Chi Sono in modo che visualizzi il componente")],-1),CP=i("br",null,null,-1),AP=i("img",{src:kP,class:"mx-auto",width:"600"},null,-1),MP={__name:"81",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[$P,IP,zP,OP,TP,EP,CP,AP]),_:1},16))}},PP=T(MP,[["__file","/@slidev/slides/81.md"]]),KP="/TPSI/4/svelte/assets/svelte_033-24b7a0e4.png",LP=i("h1",null,"SvelteKit",-1),RP=i("p",null,"Il componente WhoAmI",-1),WP=i("img",{src:KP,class:"mx-auto",width:"550"},null,-1),HP={__name:"82",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[LP,RP,WP]),_:1},16))}},NP=T(HP,[["__file","/@slidev/slides/82.md"]]),DP=i("h1",null,"SvelteKit",-1),FP=i("p",null,"Props",-1),jP=i("ul",null,[i("li",null,[d("Ora tramite un meccanismo di Svelte che si chiama "),i("code",null,"Props"),d(" (Properties) vogliamo rendere il componente parametrico")]),i("li",null,"In altre parole vogliamo fare in modo che nome, cognome e età non siano scritti direttamente nel componente WhoAmI"),i("li",null,"Al contrario vogliamo che questi siano dei parametri che vengono passati dal chiamante (la pagina Chi Sono)")],-1),VP=i("br",null,null,-1),BP={__name:"83",setup(e){const t={};return I(O),(n,o)=>{const s=pl;return g(),z(N,H(W(t)),{default:$(()=>[DP,FP,jP,VP,Q(s,{bg:"green",fg:"yellow"},{default:$(()=>[d("Tramile le Props di Svelte possiamo quindi creare dei componenti parametrici e quindi più facoilmente riutilizzabili ina ltre pagine o altre applicazioni web")]),_:1})]),_:1},16)}}},qP=T(BP,[["__file","/@slidev/slides/83.md"]]),UP=i("h1",null,"SvelteKit",-1),JP=i("p",null,"Props",-1),QP=i("ul",null,[i("li",null,[d("In Svelte, all’interno di un componente per dichiarare un parametro o "),i("code",null,"propeietà"),d(" si utilizza la keyword "),i("code",null,"export")]),i("li",null,"Questa keyword preceduta alla dichiarazione di una variabile, indica al compilatore che il valroe della variabile viene fornito dall’esterno del componente"),i("li",null,"In altre parole dice a Svelte che questa variabile viene passata dal chiamante (a tutti gli effetti rendendo la variabile export come un parametro di una funzione in C)")],-1),YP=i("p",null,"Esempio",-1),GP=i("pre",{class:"slidev-code language-js"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token keyword"},"export"),d(),i("span",{class:"token keyword"},"let"),d(" nome"),i("span",{class:"token punctuation"},";"),d("  "),i("span",{class:"token comment"},"//dichiara la variabile nome come parametro fornito dal chiamante")]),d(`
`),i("span",{class:"line"},[i("span",{class:"token keyword"},"export"),d(),i("span",{class:"token keyword"},"let"),d(" cognome "),i("span",{class:"token operator"},"="),d(),i("span",{class:"token string"},'"Rossi"'),i("span",{class:"token punctuation"},";"),d(),i("span",{class:"token comment"},"//variabile esterna con valore di feault Rossi")]),d(`
`),i("span",{class:"line"},[i("span",{class:"token keyword"},"export"),d(),i("span",{class:"token keyword"},"let"),d(" eta"),i("span",{class:"token punctuation"},";"),d(),i("span",{class:"token comment"},"//dichiara la variabile nome come parametro fornito dal chiamante")])])],-1),ZP=i("br",null,null,-1),XP=i("ul",null,[i("li",null,[d("Il meccanismo delle "),i("code",null,"Props"),d(" di Svelte è molto potente e di facile utilizzo")])],-1),e3={__name:"84",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[UP,JP,QP,YP,Q(s,Te({},{ranges:[""]}),{default:$(()=>[GP]),_:1},16),ZP,XP]),_:1},16)}}},t3=T(e3,[["__file","/@slidev/slides/84.md"]]),n3="/TPSI/4/svelte/assets/svelte_034-820ec76b.png",o3=i("h1",null,"SvelteKit",-1),i3=i("p",null,"Props",-1),s3=i("ul",null,[i("li",null,[d("Pertanto riscriviamo il componente WhoAmI utilizzando le "),i("em",null,[i("strong",null,"Props")])])],-1),l3=i("br",null,null,-1),a3=i("img",{src:n3,class:"mx-auto",width:"700"},null,-1),r3=i("br",null,null,-1),c3=i("ul",null,[i("li",null,[d("Abbiamo usato il "),i("em",null,"variable substitution di svelte"),d(" per utilizzare i parametri all’interno del corpo HTML del componente")])],-1),u3={__name:"85",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[o3,i3,s3,l3,a3,r3,c3]),_:1},16))}},d3=T(u3,[["__file","/@slidev/slides/85.md"]]),p3="/TPSI/4/svelte/assets/svelte_035-8a0ca6bf.png",m3=i("h1",null,"SvelteKit",-1),f3=i("p",null,"Props",-1),h3=i("img",{src:p3,class:"mx-auto",width:"750"},null,-1),_3=i("br",null,null,-1),v3={__name:"86",setup(e){const t={};return I(O),(n,o)=>{const s=pl;return g(),z(N,H(W(t)),{default:$(()=>[m3,f3,h3,_3,Q(s,{bg:"green",fg:"yellow"},{default:$(()=>[d(" Siccome non abbiamo modificato il chiamante, vengono utilizzati i valori di default per le props del componente ")]),_:1})]),_:1},16)}}},g3=T(v3,[["__file","/@slidev/slides/86.md"]]),b3="/TPSI/4/svelte/assets/svelte_036-c62c9040.png",y3=i("h1",null,"SvelteKit",-1),S3=i("p",null,"Props",-1),w3=i("ul",null,[i("li",null,"Modifichiamo ora il chiamante e cioè la pagina Chi Sono in modo da passare dei parametri corretti al componente WhoAmI")],-1),x3=i("br",null,null,-1),k3=i("img",{src:b3,class:"mx-auto",width:"750"},null,-1),$3={__name:"87",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[y3,S3,w3,x3,k3]),_:1},16))}},I3=T($3,[["__file","/@slidev/slides/87.md"]]),z3="/TPSI/4/svelte/assets/svelte_037-55bef59f.png",O3=i("h1",null,"SvelteKit",-1),T3=i("p",null,"Props",-1),E3=i("img",{src:z3,class:"mx-auto",width:"750"},null,-1),C3={__name:"88",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[O3,T3,E3]),_:1},16))}},A3=T(C3,[["__file","/@slidev/slides/88.md"]]),M3="/TPSI/4/svelte/assets/svelte_038-d542d0ee.png",P3=i("h1",null,"SvelteKit",-1),K3=i("p",null,"Props",-1),L3=i("ul",null,[i("li",null,"Cosa succede se chiamo due volte il componente WhoAmI dalla pagina Chi Sono?"),i("li",null,"Quello che ci aspettiamo: vengono visualizzati due componenti ognuno con i propri parametri")],-1),R3=i("br",null,null,-1),W3=i("img",{src:M3,class:"mx-auto",width:"700"},null,-1),H3={__name:"89",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[P3,K3,L3,R3,W3]),_:1},16))}},N3=T(H3,[["__file","/@slidev/slides/89.md"]]),D3="/TPSI/4/svelte/assets/svelte_039-4fc8afef.png",F3=i("h1",null,"SvelteKit",-1),j3=i("p",null,"Props",-1),V3=i("img",{src:D3,class:"mx-auto",width:"600"},null,-1),B3={__name:"90",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[F3,j3,V3]),_:1},16))}},q3=T(B3,[["__file","/@slidev/slides/90.md"]]),U3=i("h1",null,"SvelteKit",-1),J3=i("p",null,"Dynamic Attributes",-1),Q3=i("ul",null,[i("li",null,"Come abbiamo visti le props e variabili contenute in un componente possono essere utilizzate per generare del contenuto dinamico"),i("li",null,"Tuttavia possono anche essere utilizzate come attributi dei tag HTML"),i("li",null,[d("In questo caso Svelte parla di "),i("code",null,"Dynamic Attributes")]),i("li",null,"Per esempio per definire il src di un immagine in modo dinamico si può fare così")],-1),Y3=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("img")]),d(),i("span",{class:"token attr-name"},"src"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),d("{url}")]),d(),i("span",{class:"token punctuation"},">")])])])],-1),G3=i("ul",null,[i("li",null,"In questo modo la sorgente dell’immagine non sarà statica ma dipenderà dal valore della variabile url"),i("li",null,"Ovviamente cambiando il valore della variabile l’immagine verrà automaticamente aggiornata in modo dinamico")],-1),Z3={__name:"91",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[U3,J3,Q3,Q(s,Te({},{ranges:[""]}),{default:$(()=>[Y3]),_:1},16),G3]),_:1},16)}}},X3=T(Z3,[["__file","/@slidev/slides/91.md"]]),e6="/TPSI/4/svelte/assets/svelte_040-f4392269.png",t6=i("h1",null,"SvelteKit",-1),n6=i("p",null,"Dynamic Attributes",-1),o6=i("ul",null,[i("li",null,[d("Per comprendere meglio i "),i("em",null,[i("strong",null,"Dynamic Attributes")]),d(" modifichiamo il componente WhoAmI aggiungendo la nostra foto")])],-1),i6=i("img",{src:e6,class:"mx-auto",width:"700"},null,-1),s6={__name:"92",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[t6,n6,o6,i6]),_:1},16))}},l6=T(s6,[["__file","/@slidev/slides/92.md"]]),a6="/TPSI/4/svelte/assets/svelte_041-ee2c2e0b.png",r6=i("h1",null,"SvelteKit",-1),c6=i("p",null,"Dynamic Attributes",-1),u6=i("ul",null,[i("li",null,"Possiamo usare come dymanic attribute una variabile esterna")],-1),d6=i("img",{src:a6,class:"mx-auto",width:"700"},null,-1),p6={__name:"93",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[r6,c6,u6,d6]),_:1},16))}},m6=T(p6,[["__file","/@slidev/slides/93.md"]]),f6="/TPSI/4/svelte/assets/svelte_042-833a06e0.png",h6=i("h1",null,"SvelteKit",-1),_6=i("p",null,"Dynamic Attributes",-1),v6=i("img",{src:f6,class:"mx-auto",width:"550"},null,-1),g6={__name:"94",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[h6,_6,v6]),_:1},16))}},b6=T(g6,[["__file","/@slidev/slides/94.md"]]),y6=i("h1",null,"SvelteKit",-1),S6=i("p",null,"Dynamic Attributes: shorthand",-1),w6=i("ul",null,[i("li",null,"Prima abbiamo scritto")],-1),x6=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("img")]),d(),i("span",{class:"token attr-name"},"src"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),d("{url}")]),d(),i("span",{class:"token punctuation"},">")])])])],-1),k6=i("ul",null,[i("li",null,"Immaginando che la variabile si chiami src, scriveremo")],-1),$6=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("img")]),d(),i("span",{class:"token attr-name"},"src"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),d("{src}")]),d(),i("span",{class:"token punctuation"},">")])])])],-1),I6=i("ul",null,[i("li",null,[d("Questo risulta abbastanza ridondante, pertanto Svelte ci semplifica la vita mettendo a disposizione degli "),i("em",null,[i("strong",null,"shorthand")]),d(" o delle scorciatoie")]),i("li",null,"Quindi in questo caso potremmo scrivere")],-1),z6=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("img")]),d(),i("span",{class:"token attr-name"},"{src}"),d(),i("span",{class:"token punctuation"},">")])])])],-1),O6=i("ul",null,[i("li",null,"Pertanto le due notazioni sono perfettamente equivalenti e sortiscono lo stesso effetto")],-1),T6=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("img")]),d(),i("span",{class:"token attr-name"},"src"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),d("{src}")]),d(),i("span",{class:"token punctuation"},">")]),d(" vs "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("img")]),d(),i("span",{class:"token attr-name"},"{src}"),d(),i("span",{class:"token punctuation"},">")])])])],-1),E6={__name:"95",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[y6,S6,w6,Q(s,Te({},{ranges:[""]}),{default:$(()=>[x6]),_:1},16),k6,Q(s,Te({},{ranges:[""]}),{default:$(()=>[$6]),_:1},16),I6,Q(s,Te({},{ranges:[""]}),{default:$(()=>[z6]),_:1},16),O6,Q(s,Te({},{ranges:[""]}),{default:$(()=>[T6]),_:1},16)]),_:1},16)}}},C6=T(E6,[["__file","/@slidev/slides/95.md"]]),A6=i("h1",null,"SvelteKit",-1),M6=i("p",null,"Dynamic Attributes: Esercitazione_09",-1),P6=i("ul",null,[i("li",null,"Modificare il componente WhoAmI in modo da passare la larghezza dell’immagine come parametro"),i("li",null,"Utilizzare lo shorthand per il dynamic attribute")],-1),K6={__name:"96",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[A6,M6,P6]),_:1},16))}},L6=T(K6,[["__file","/@slidev/slides/96.md"]]),R6=i("h1",null,"SvelteKit",-1),W6=i("p",null,"Bindings",-1),H6=i("ul",null,[i("li",null,"refwdsqa")],-1),N6=i("p",null,[i("a",{href:"https://svelte.dev/tutorial/text-inputs",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/text-inputs")],-1),D6={__name:"97",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[R6,W6,H6,N6]),_:1},16))}},F6=T(D6,[["__file","/@slidev/slides/97.md"]]),j6=i("h1",null,"SvelteKit",-1),V6=i("p",null,"Bindings",-1),B6=i("ul",null,[i("li",null,"Come visto i dati e le props si propagano dall’alto al basso, dal componente chiamante verso il componente figlio"),i("li",null,"Tuttavia spesso in un applicazione web è utile che questa propagazione possa avvenire nel verso opposto")],-1),q6=i("br",null,null,-1),U6=i("br",null,null,-1),J6=i("ul",null,[i("li",null,"Uno scenario classico è fare il binding della props di un input text ad una variabile del componente chiamante"),i("li",null,"In questo modo sarà facilissimo ed immediato accedere al valore dell’input text (pensate quanto è macchinoso in vanilla JS)")],-1),Q6={__name:"98",setup(e){const t={};return I(O),(n,o)=>{const s=pl;return g(),z(N,H(W(t)),{default:$(()=>[j6,V6,B6,q6,Q(s,{fg:"yellow",bg:"green"},{default:$(()=>[d(" Il binding permette la propagazione del valore di una variabile di un componente al componente chiamante o padre ")]),_:1}),U6,J6]),_:1},16)}}},Y6=T(Q6,[["__file","/@slidev/slides/98.md"]]),G6="/TPSI/4/svelte/assets/svelte_043-78632da3.png",Z6=i("h1",null,"SvelteKit",-1),X6=i("p",null,"Binding: Esercitazione_10",-1),eK=i("ul",null,[i("li",null,"Per comprendere il meccanismo del binding abbiamo bisogno di una nuova pagina nella nostra app"),i("li",null,[d("Creare una nuova pagina chiamata "),i("strong",null,"Input")]),i("li",null,"Creare il relativo menu nella barra nav e linkare la pagina")],-1),tK=i("br",null,null,-1),nK=i("img",{src:G6,class:"mx-auto",width:"650"},null,-1),oK={__name:"99",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[Z6,X6,eK,tK,nK]),_:1},16))}},iK=T(oK,[["__file","/@slidev/slides/99.md"]]),sK="/TPSI/4/svelte/assets/svelte_044-d3d5602c.png",lK=i("h1",null,"SvelteKit",-1),aK=i("p",null,"Bindings",-1),rK=i("ul",null,[i("li",null,"Ora modifichiamo la pafina input aggiungendo un input text box e creando un binding con una variabile")],-1),cK=i("br",null,null,-1),uK=i("img",{src:sK,class:"mx-auto",width:"400"},null,-1),dK={__name:"100",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[lK,aK,rK,cK,uK]),_:1},16))}},pK=T(dK,[["__file","/@slidev/slides/100.md"]]),mK="/TPSI/4/svelte/assets/svelte_045-1784d8ce.png",fK=i("h1",null,"SvelteKit",-1),hK=i("p",null,"Bindings",-1),_K=i("img",{src:mK,class:"mx-auto",width:"600"},null,-1),vK=i("ul",null,[i("li",null,[d("Come si vede le variabili sono sostituite dal valore "),i("em",null,"undefined")]),i("li",null,"Questo succede perchè abbiamo creato il binding tra il contenuto dei input text (undefined) e le variabili nome, cognome e eta"),i("li",null,"Compilando i campi la pagina si aggiornerà in modo automatico e dinamico"),i("li",null,"Anche in questo caso realizzare la stessa cosa in vanilla JS sarebbe molto più laborioso")],-1),gK={__name:"101",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[fK,hK,_K,vK]),_:1},16))}},bK=T(gK,[["__file","/@slidev/slides/101.md"]]),yK="/TPSI/4/svelte/assets/svelte_046-0d05f32b.gif",SK=i("h1",null,"SvelteKit",-1),wK=i("p",null,"Bindings",-1),xK=i("img",{src:yK,class:"mx-auto",width:"700"},null,-1),kK={__name:"102",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[SK,wK,xK]),_:1},16))}},$K=T(kK,[["__file","/@slidev/slides/102.md"]]),IK="/TPSI/4/svelte/assets/svelte_047-7d7077b5.png",zK=i("h1",null,"SvelteKit",-1),OK=i("p",null,"Bindings",-1),TK=i("div",{style:{width:"50%"}},[i("ul",null,[i("li",null,"Vediamo un altro esempio dell’uso del binding"),i("li",null,"Modificare la pagina Input nel seguente modo"),i("li",null,[d("In questo caso creiamo un binding tra la checkbox e la variabile "),i("em",null,"confermato")]),i("li",null,[d("Poi settiamo tramite dynamic attributes l’attribute "),i("em",null,"disabled"),d(" del pulsante")]),i("li",null,"Pertanto il pulsante diventa attivo solo se l’utente ha confermato selezionando la checkbox")])],-1),EK=i("img",{src:IK,class:"mx-auto",width:"450",style:{position:"relative",top:"-300px",right:"-250px"}},null,-1),CK={__name:"103",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[zK,OK,TK,EK]),_:1},16))}},AK=T(CK,[["__file","/@slidev/slides/103.md"]]),MK="/TPSI/4/svelte/assets/svelte_048-c286dfed.gif",PK=i("h1",null,"SvelteKit",-1),KK=i("p",null,"Bindings",-1),LK=i("img",{src:MK,class:"mx-auto",width:"700"},null,-1),RK={__name:"104",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[PK,KK,LK]),_:1},16))}},WK=T(RK,[["__file","/@slidev/slides/104.md"]]),HK="/TPSI/4/svelte/assets/svelte_049-902c4331.png",NK=i("h1",null,"SvelteKit",-1),DK=i("p",null,"Binding: Esercitazione_11",-1),FK=i("ul",null,[i("li",null,[d("Modificare la pagina "),i("em",null,"Input"),d(" in modo che venga aggiunto un nuovo input text per legegre in input la residenza")]),i("li",null,"Utilizzare il meccanismo del binding")],-1),jK=i("br",null,null,-1),VK=i("img",{src:HK,class:"mx-auto",width:"800"},null,-1),BK={__name:"105",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[NK,DK,FK,jK,VK]),_:1},16))}},qK=T(BK,[["__file","/@slidev/slides/105.md"]]),UK=i("h1",null,"SvelteKit",-1),JK=i("p",null,"Component Bindings",-1),QK=i("ul",null,[i("li",null,"refwdsqa")],-1),YK=i("p",null,[i("a",{href:"https://svelte.dev/tutorial/component-bindings",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/component-bindings")],-1),GK={__name:"106",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[UK,JK,QK,YK]),_:1},16))}},ZK=T(GK,[["__file","/@slidev/slides/106.md"]]),XK=i("h1",null,"SvelteKit",-1),e5=i("p",null,"Logic Statements",-1),t5=i("ul",null,[i("li",null,"rfewds")],-1),n5=i("p",null,[i("a",{href:"https://svelte.dev/tutorial/if-blocks",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/if-blocks")],-1),o5={__name:"107",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[XK,e5,t5,n5]),_:1},16))}},i5=T(o5,[["__file","/@slidev/slides/107.md"]]),s5=i("h1",null,"SvelteKit",-1),l5=i("p",null,"Each block",-1),a5=i("ul",null,[i("li",null,"rfewds")],-1),r5=i("p",null,[i("a",{href:"https://svelte.dev/tutorial/each-blocks",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/each-blocks")],-1),c5={__name:"108",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[s5,l5,a5,r5]),_:1},16))}},u5=T(c5,[["__file","/@slidev/slides/108.md"]]),d5=i("h1",null,"SvelteKit",-1),p5=i("p",null,"Advances Styling",-1),m5=i("ul",null,[i("li",null,"xxx")],-1),f5=i("p",null,[i("a",{href:"https://svelte.dev/tutorial/classes",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/classes")],-1),h5={__name:"109",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[d5,p5,m5,f5]),_:1},16))}},_5=T(h5,[["__file","/@slidev/slides/109.md"]]),v5=i("h1",null,"SvelteKit",-1),g5=i("p",null,"Reactivity",-1),b5=i("ul",null,[i("li",null,"xxx")],-1),y5=i("p",null,[i("a",{href:"https://svelte.dev/tutorial/reactive-assignments",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/reactive-assignments")],-1),S5={__name:"110",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[v5,g5,b5,y5]),_:1},16))}},w5=T(S5,[["__file","/@slidev/slides/110.md"]]),x5=i("h1",null,"SvelteKit",-1),k5=i("p",null,"DOM Events",-1),$5=i("ul",null,[i("li",null,"erfcds")],-1),I5=i("p",null,[i("a",{href:"https://svelte.dev/tutorial/dom-events",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/dom-events")],-1),z5={__name:"111",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[x5,k5,$5,I5]),_:1},16))}},O5=T(z5,[["__file","/@slidev/slides/111.md"]]),T5=i("h1",null,"SvelteKit",-1),E5=i("p",null,"Component Events",-1),C5=i("ul",null,[i("li",null,"rfewd")],-1),A5=i("p",null,[i("a",{href:"https://svelte.dev/tutorial/component-events",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/component-events")],-1),M5={__name:"112",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[T5,E5,C5,A5]),_:1},16))}},P5=T(M5,[["__file","/@slidev/slides/112.md"]]),K5=i("h1",null,"SvelteKit",-1),L5=i("p",null,"Stores",-1),R5=i("ul",null,[i("li",null,"rfedwsa")],-1),W5=i("p",null,[i("a",{href:"https://svelte.dev/tutorial/writable-stores",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/writable-stores")],-1),H5={__name:"113",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[K5,L5,R5,W5]),_:1},16))}},N5=T(H5,[["__file","/@slidev/slides/113.md"]]),D5=i("h1",null,"SvelteKit",-1),F5=i("p",null,"Creazione Web App",-1),j5=i("ul",null,[i("li",null,"ddd")],-1),V5={__name:"114",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[D5,F5,j5]),_:1},16))}},B5=T(V5,[["__file","/@slidev/slides/114.md"]]),q5=i("h1",null,"SvelteKit",-1),U5=i("p",null,"Creazione Web App",-1),J5=i("ul",null,[i("li",null,"ddd")],-1),Q5={__name:"115",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[q5,U5,J5]),_:1},16))}},Y5=T(Q5,[["__file","/@slidev/slides/115.md"]]),G5=i("h1",null,"SvelteKit",-1),Z5=i("p",null,"Creazione Web App",-1),X5=i("ul",null,[i("li",null,"ddd")],-1),eL={__name:"116",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[G5,Z5,X5]),_:1},16))}},tL=T(eL,[["__file","/@slidev/slides/116.md"]]),nL=i("h1",null,"SvelteKit",-1),oL=i("p",null,"Creazione Web App",-1),iL=i("ul",null,[i("li",null,"ddd")],-1),sL={__name:"117",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[nL,oL,iL]),_:1},16))}},lL=T(sL,[["__file","/@slidev/slides/117.md"]]),aL=i("h1",null,"SvelteKit",-1),rL=i("p",null,"Creazione Web App",-1),cL=i("ul",null,[i("li",null,"ddd")],-1),uL={__name:"118",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[aL,rL,cL]),_:1},16))}},dL=T(uL,[["__file","/@slidev/slides/118.md"]]),pL=i("h1",null,"SvelteKit",-1),mL=i("p",null,"Creazione Web App",-1),fL=i("ul",null,[i("li",null,"ddd")],-1),hL={__name:"119",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[pL,mL,fL]),_:1},16))}},_L=T(hL,[["__file","/@slidev/slides/119.md"]]),vL=i("h1",null,"SvelteKit",-1),gL=i("p",null,"Creazione Web App",-1),bL=i("ul",null,[i("li",null,"ddd"),i("li")],-1),yL={__name:"120",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[vL,gL,bL]),_:1},16))}},SL=T(yL,[["__file","/@slidev/slides/120.md"]]),wL=i("h1",null,"BLANK",-1),xL={__name:"121",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[wL]),_:1},16))}},kL=T(xL,[["__file","/@slidev/slides/121.md"]]),$L=i("h1",null,"Svelte",-1),IL=i("p",null,"Stateful component",-1),zL=i("ul",null,[i("li",null,"Uno dei problemi tradizionali dello sviluppo di app web è la gestione dello stato"),i("li",null,[d("Questo problema è intrinseco in quanto il protcollo HTTP è "),i("strong",null,"stateless"),d(" o senza stato")]),i("li",null,"Svelte risolve brillantemente questo problema permettendo di immagazzinare lo stato del componente direttamente all’interno del componente stesso"),i("li",null,"Pertanto un componente Svelte è assimilabile a tutti gli effetti ad un oggetto in base alla definizione OOP"),i("li",null,[d("Un componente svelte implementa il meccanismo del "),i("code",null,"encapsulation")])],-1),OL={__name:"122",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[$L,IL,zL]),_:1},16))}},TL=T(OL,[["__file","/@slidev/slides/122.md"]]),EL=i("h1",null,"Svelte",-1),CL=i("p",null,"Stateful component",-1),AL=i("ul",null,[i("li",null,"Ogni componente, oltre a definire il markup, la logica CSS e JavaScript, può ospitare il proprio stato."),i("li",null,"Lo stato è un qualsiasi dato necessario per il corretto funzionamento del componente stesso e dell’applicazione"),i("li",null,'Ad esempio, se un campo di input di un modulo contiene la stringa "test", ci sarà una variabile da qualche parte che contiene questo valore.'),i("li",null,"Questo è lo stato del campo di input."),i("li",null,"Il campo è selezionato? Una variabile da qualche parte registrerà questo fatto. E così via."),i("li",null,[d("Lo stato è ospitato nella sezione "),i("code",null,"<script>"),d(" del componente")])],-1),ML=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("script")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},"	let count = 0; // stato di un contatore"),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("script")]),i("span",{class:"token punctuation"},">")])])])],-1),PL={__name:"123",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[EL,CL,AL,Q(s,Te({},{ranges:[""]}),{default:$(()=>[ML]),_:1},16)]),_:1},16)}}},KL=T(PL,[["__file","/@slidev/slides/123.md"]]),LL=i("h1",null,"Svelte",-1),RL=i("p",null,"Stateful component",-1),WL=i("ul",null,[i("li",null,"Ma come si aggiorna lo statro di un componente?"),i("li",null,"Altri framework come Vue o React, rendono questa operazione poco intuitiva"),i("li",null,"Al contrario una cosa grandiosa di Svelte è che non è necessario fare nulla di speciale per aggiornare lo stato di un componente."),i("li",null,"Basta solo un’operazione di assegnazione in qualsiasi parte del componente")],-1),HL=i("pre",{class:"slidev-code language-html"},[i("code",null,[i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),d("script")]),i("span",{class:"token punctuation"},">")])]),d(`
`),i("span",{class:"line"},"	let count = 0;"),d(`
`),i("span",{class:"line"}),d(`
`),i("span",{class:"line"},"	function incrementa() {"),d(`
`),i("span",{class:"line"},"		count++;"),d(`
`),i("span",{class:"line"},"	}"),d(`
`),i("span",{class:"line"},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),d("script")]),i("span",{class:"token punctuation"},">")])])])],-1),NL={__name:"124",setup(e){const t={};return I(O),(n,o)=>{const s=je;return g(),z(N,H(W(t)),{default:$(()=>[LL,RL,WL,Q(s,Te({},{ranges:[""]}),{default:$(()=>[HL]),_:1},16)]),_:1},16)}}},DL=T(NL,[["__file","/@slidev/slides/124.md"]]),FL="/TPSI/4/svelte/assets/svelte_12-be5c0d6c.png",jL=i("h1",null,"Svelte",-1),VL=i("p",null,"Stateful component",-1),BL=i("ul",null,[i("li",null,"Vediamo un esempio completo")],-1),qL=i("img",{src:FL,class:"centro"},null,-1),UL=i("ul",null,[i("li",null,[d("Anche in questo caso l’applicazione è solo "),i("br"),d(" un contenitore per i componenti che implementano "),i("br"),d(" la UI e le funzionalità desiderate")])],-1),JL={__name:"125",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[jL,VL,BL,qL,UL]),_:1},16))}},QL=T(JL,[["__file","/@slidev/slides/125.md"]]),YL="/TPSI/4/svelte/assets/svelte_13-ebdf894b.png",GL=i("h1",null,"Svelte",-1),ZL=i("p",null,"Stateful component",-1),XL=i("img",{src:YL,class:"centro"},null,-1),eR=i("ul",null,[i("li",null,[d("Ad ogni pressione del bottone viene invocata "),i("br"),d(" una funzione (metodo) interno del componente")]),i("li",null,[d("Il metodo incrementa la variabile di "),i("br"),d(" stato del contatore")]),i("li",null,[d("Come detto in precedenza, lo stato di "),i("br"),d(" un componente Svelte si modifica con "),i("br"),d(" una semplice assegnazione")]),i("li",null,"Più intuitivo di così non è proprio possibile :)")],-1),tR=i("br",null,null,-1),nR=i("div",{style:{"background-color":"green",color:"yellow",padding:"20px",width:"50%"}}," Per modificare lo stato di un componente è SEMPRE necessario effettuare un'operazione di assegnamento ",-1),oR={__name:"126",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[GL,ZL,XL,eR,tR,nR]),_:1},16))}},iR=T(oR,[["__file","/@slidev/slides/126.md"]]),sR="/TPSI/4/svelte/assets/svelte_14-215502e9.png",lR=i("h1",null,"Svelte",-1),aR=i("p",null,"Stateful component",-1),rR=i("img",{src:sR,class:"mx-auto w-300"},null,-1),cR={__name:"127",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[lR,aR,rR]),_:1},16))}},uR=T(cR,[["__file","/@slidev/slides/127.md"]]),dR=i("h1",null,"Svelte",-1),pR=i("p",null,"Esercizio svelte_03",-1),mR=i("ul",null,[i("li",null,"Implementare l’applicazione ed il componente Contatore visti a lezione"),i("li",null,"Aggiungere anche la funzionalità di decremento del contatore"),i("li",null,[i("em",null,"Consgenare tutta la directory |cognome|_svelte_03 ad escusione della sub-directory node_modules")])],-1),fR={__name:"128",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[dR,pR,mR]),_:1},16))}},hR=T(fR,[["__file","/@slidev/slides/128.md"]]),_R=i("h1",null,"Svelte",-1),vR=i("p",null,"todoS WebApp",-1),gR=i("ul",null,[i("li",null,"Sviluppiamo una SPA WebApp che permette di gestire una ToDo List personale"),i("li",null,"Lo scopo è di capire ed applicare vari concetti introdotti da Svelte")],-1),bR=i("p",null,"SPECIFICA di todoS",-1),yR=i("ul",null,[i("li",null,"L’applicazione todoS permette la gestione di una todo list personale"),i("li",null,[d("L’utente deve essere in grado di: "),i("ul",null,[i("li",null,"inserire nuovi todo"),i("li",null,"modificare todo esistenit"),i("li",null,"eliminare todo esistenti"),i("li",null,[d("per ogni todo è possibile specificare un titolo ed una prioprità a scelta tra: "),i("ul",null,[i("li",null,"HIGH"),i("li",null,"MED"),i("li",null,"LOW")])])])])],-1),SR={__name:"129",setup(e){const t={};return I(O),(n,o)=>(g(),z(N,H(W(t)),{default:$(()=>[_R,vR,gR,bR,yR]),_:1},16))}},wR=T(SR,[["__file","/@slidev/slides/129.md"]]),xR=[{path:"1",name:"page-1",component:$2,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",as:"2023/2024",version:"1.1.2",title:"Svelte e SvelteKit",slide:{raw:`---
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
as: 2023/2024
version: '1.1.2'

---  

<!-- https://reteinformaticalavoro.it/blog/framework-cosa-sono-e-quali-dominano-le-classifiche/#:~:text=In%20informatica%2C%20un%20framework%20%C3%A8,in%20modo%20semplice%20e%20veloce.

https://www.okupter.com/blog/svelte-vs-sveltekit-the-difference

https://www.okupter.com/blog/sveltekit-full-stack-framework -->



# Svelte e SvelteKit

CYBERNETICALLY ENHANCED WEB APPS

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>
`,title:"Svelte e SvelteKit",level:1,content:`<!-- https://reteinformaticalavoro.it/blog/framework-cosa-sono-e-quali-dominano-le-classifiche/#:~:text=In%20informatica%2C%20un%20framework%20%C3%A8,in%20modo%20semplice%20e%20veloce.

https://www.okupter.com/blog/svelte-vs-sveltekit-the-difference

https://www.okupter.com/blog/sveltekit-full-stack-framework -->



# Svelte e SvelteKit

CYBERNETICALLY ENHANCED WEB APPS

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>`,frontmatter:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",as:"2023/2024",version:"1.1.2",title:"Svelte e SvelteKit"},index:0,start:0,end:36,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:A2,meta:{slide:{raw:`
# Introduzione

Vanilla Software


- Un software \`Vanilla\` è un programma per computer (e per altri sistemi informatici come hardware o algoritmi) che non viene alterato rispetto alla propria forma originale.
- Il termine deriva dal tradizionale gusto di gelato, la vaniglia.
- In altre parole con il termine **Vanilla** si intende un linguaggio, un kernel, un programma non modificato ma utilizzato nella sua forma base
- Ciò si applica anche ai linguaggi di programmazione
`,title:"Introduzione",level:1,content:`# Introduzione

Vanilla Software


- Un software \`Vanilla\` è un programma per computer (e per altri sistemi informatici come hardware o algoritmi) che non viene alterato rispetto alla propria forma originale.
- Il termine deriva dal tradizionale gusto di gelato, la vaniglia.
- In altre parole con il termine **Vanilla** si intende un linguaggio, un kernel, un programma non modificato ma utilizzato nella sua forma base
- Ciò si applica anche ai linguaggi di programmazione`,frontmatter:{},index:1,start:37,end:48,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:H2,meta:{slide:{raw:`
# Introduzione

Vanilla Software

<div style="float: left; width: 50%;">

- Vanilla JavaScript (o VanillaJS) si riferisce all'uso di JavaScript puro, senza alcun componente aggiuntivo come librerie o framework. 
- È una specie di battuta tra informatici per indicare le potenzialità attuali del puro e semplice JavaScript.
- Agli albori del Web era normale programmare in vanillaJS
  
</div>

<img src="/media/svelte_000.png" class="mx-auto" width="400" />
`,title:"Introduzione",level:1,content:`# Introduzione

Vanilla Software

<div style="float: left; width: 50%;">

- Vanilla JavaScript (o VanillaJS) si riferisce all'uso di JavaScript puro, senza alcun componente aggiuntivo come librerie o framework. 
- È una specie di battuta tra informatici per indicare le potenzialità attuali del puro e semplice JavaScript.
- Agli albori del Web era normale programmare in vanillaJS
  
</div>

<img src="/media/svelte_000.png" class="mx-auto" width="400" />`,frontmatter:{},index:2,start:49,end:64,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:q2,meta:{slide:{raw:`
# Introduzione

Librerie JS

- Una libreria NON è un'unità eseguibile indipendentemente, ma un modulo aggiuntivo richiesto da un programma.
- In altre parole, le librerie sono raccolte di classi e funzioni, motivo per cui a volte vengono anche chiamate librerie di componenti o di classi. 
- Il programma principale utilizza una o più funzioni, messe a disposizione dalla libreria.

<img src="/media/svelte_001.png" class="mx-auto" style="margin-top:2rem;" width="500" />
`,title:"Introduzione",level:1,content:`# Introduzione

Librerie JS

- Una libreria NON è un'unità eseguibile indipendentemente, ma un modulo aggiuntivo richiesto da un programma.
- In altre parole, le librerie sono raccolte di classi e funzioni, motivo per cui a volte vengono anche chiamate librerie di componenti o di classi. 
- Il programma principale utilizza una o più funzioni, messe a disposizione dalla libreria.

<img src="/media/svelte_001.png" class="mx-auto" style="margin-top:2rem;" width="500" />`,frontmatter:{},index:3,start:65,end:76,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:G2,meta:{slide:{raw:`
# Introduzione

Librerie JS

- Una libreria JavaScript è una libreria di codice JavaScript pre-scritto che consente uno sviluppo più semplice di applicazioni basate su JavaScript
- Ci sono centinaia di librerie JS per qualsiasi funzionalità possa venire in mente allo sviluppatore
- Una delle più note librerie che ha dominato il web per molti anni si chiama \`jQuery\`
- **jQuery** è una libreria JavaScript veloce, piccola e ricca di funzionalità. 
- Rende funzionalità complesse come l'attraversamento e la manipolazione di documenti HTML, la gestione degli eventi, l'animazione e Ajax molto più semplici che in vanillaJS
- Con una combinazione di versatilità ed estensibilità, jQuery ha cambiato il modo in cui milioni di persone scrivono JavaScript.
`,title:"Introduzione",level:1,content:`# Introduzione

Librerie JS

- Una libreria JavaScript è una libreria di codice JavaScript pre-scritto che consente uno sviluppo più semplice di applicazioni basate su JavaScript
- Ci sono centinaia di librerie JS per qualsiasi funzionalità possa venire in mente allo sviluppatore
- Una delle più note librerie che ha dominato il web per molti anni si chiama \`jQuery\`
- **jQuery** è una libreria JavaScript veloce, piccola e ricca di funzionalità. 
- Rende funzionalità complesse come l'attraversamento e la manipolazione di documenti HTML, la gestione degli eventi, l'animazione e Ajax molto più semplici che in vanillaJS
- Con una combinazione di versatilità ed estensibilità, jQuery ha cambiato il modo in cui milioni di persone scrivono JavaScript.`,frontmatter:{},index:4,start:77,end:89,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:iI,meta:{slide:{raw:`
# Introduzione

Framework JS

- Man mano che l'importanza dello sviluppo Web cresceva, e con essa l'importanza di JS, l'uso di VanillaJS o di semplici librerie non era più sufficiente
- Pertanto hanno iniziato a proliferare una moltitudine di \`Framework JS\` che offrono paradigmi differenti e adatti a risolvere la maggioranza delle problematiche dello sviluppo web

<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px; margin: 10px;">

In informatica, **un framework** è un sistema che consente di estendere le funzionalità del linguaggio di programmazione su cui è basato, fornendo allo sviluppatore una struttura coerente ed efficace al fine di effettuare azioni e comandi in modo semplice e veloce

</div>

- **Un framework** è un tipo speciale di libreria che non contiene funzioni "finite" come una normale libreria. 
- In sostanza, si può definire un framework come un insieme di funzioni e tool già “pronti all’uso”, ovvero che si possono utilizzare senza doverli progettare da zero ogni volta. 
  `,title:"Introduzione",level:1,content:`# Introduzione

Framework JS

- Man mano che l'importanza dello sviluppo Web cresceva, e con essa l'importanza di JS, l'uso di VanillaJS o di semplici librerie non era più sufficiente
- Pertanto hanno iniziato a proliferare una moltitudine di \`Framework JS\` che offrono paradigmi differenti e adatti a risolvere la maggioranza delle problematiche dello sviluppo web

<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px; margin: 10px;">

In informatica, **un framework** è un sistema che consente di estendere le funzionalità del linguaggio di programmazione su cui è basato, fornendo allo sviluppatore una struttura coerente ed efficace al fine di effettuare azioni e comandi in modo semplice e veloce

</div>

- **Un framework** è un tipo speciale di libreria che non contiene funzioni "finite" come una normale libreria. 
- In sostanza, si può definire un framework come un insieme di funzioni e tool già “pronti all’uso”, ovvero che si possono utilizzare senza doverli progettare da zero ogni volta.`,frontmatter:{},index:5,start:90,end:107,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:cI,meta:{slide:{raw:`
# Introduzione

Framework JS

- I framework sono piuttosto impalcature/scheletri/template di programmi che forniscono il progetto, le linee guida e l'organizzazione del codice ma non l'unità finita.
- Il framework, quindi, fornisce il progetto e il framework di base e mostra anche ciò che è ancora necessario al programmatore in termini di personalizzazione. 
- Il framework fornisce il flusso di un'applicazione software e comunica allo sviluppatore ciò di cui ha bisogno e chiama il codice fornito dallo sviluppatore come richiesto

`,title:"Introduzione",level:1,content:`# Introduzione

Framework JS

- I framework sono piuttosto impalcature/scheletri/template di programmi che forniscono il progetto, le linee guida e l'organizzazione del codice ma non l'unità finita.
- Il framework, quindi, fornisce il progetto e il framework di base e mostra anche ciò che è ancora necessario al programmatore in termini di personalizzazione. 
- Il framework fornisce il flusso di un'applicazione software e comunica allo sviluppatore ciò di cui ha bisogno e chiama il codice fornito dallo sviluppatore come richiesto`,frontmatter:{},index:6,start:108,end:118,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:hI,meta:{slide:{raw:`
# Introduzione

Framework JS

<img src="/media/svelte_004.png" class="mx-auto" style="margin-top:0rem;" width="800" />

`,title:"Introduzione",level:1,content:`# Introduzione

Framework JS

<img src="/media/svelte_004.png" class="mx-auto" style="margin-top:0rem;" width="800" />`,frontmatter:{},index:7,start:119,end:127,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:wI,meta:{slide:{raw:`
# Introduzione

Framework JS

- I principali [framework](https://en.wikipedia.org/wiki/Software_framework) degli ultimi anni sono

<img src="/media/svelte_002.png" class="mx-auto" style="margin-top:0rem;" width="600" />
`,title:"Introduzione",level:1,content:`# Introduzione

Framework JS

- I principali [framework](https://en.wikipedia.org/wiki/Software_framework) degli ultimi anni sono

<img src="/media/svelte_002.png" class="mx-auto" style="margin-top:0rem;" width="600" />`,frontmatter:{},index:8,start:128,end:137,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:zI,meta:{slide:{raw:`
# Introduzione

Framework JS

- L'uso di un frameowrk non è indispensabile: si tratta più che altro di uno dei tanti strumenti che lo sviluppatore ha a sua disposizione per programmare meglio e più velocemente. 
- Proprio per queste sue caratteristiche, sono diventati sempre più fondamentali per lo sviluppo di siti web e app.
- I framework consentono di:
  - ottimizzare tempi, costi e benefici;
  - evitare al programmatore di riscrivere codice già scritto in precedenza per compiti simili;
  - organizzare e trovare rapidamente i file necessari;
  - concentrarsi sul problema da risolvere, senza dover implementare funzionalità che qualcun altro ha già provveduto a creare.
`,title:"Introduzione",level:1,content:`# Introduzione

Framework JS

- L'uso di un frameowrk non è indispensabile: si tratta più che altro di uno dei tanti strumenti che lo sviluppatore ha a sua disposizione per programmare meglio e più velocemente. 
- Proprio per queste sue caratteristiche, sono diventati sempre più fondamentali per lo sviluppo di siti web e app.
- I framework consentono di:
  - ottimizzare tempi, costi e benefici;
  - evitare al programmatore di riscrivere codice già scritto in precedenza per compiti simili;
  - organizzare e trovare rapidamente i file necessari;
  - concentrarsi sul problema da risolvere, senza dover implementare funzionalità che qualcun altro ha già provveduto a creare.`,frontmatter:{},index:9,start:138,end:151,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:PI,meta:{slide:{raw:`
# Web Components

OOP per il Web

- Lo sviluppo Web moderno è incentrato sul concetto di \`componente\`

<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;margin:10px;">

*Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.* (source MDN)

</div>

- Un componente è un elemento atomico e auto sufficiente,  di un'applicazione Web. 
- In altre parole un componente è un "mattoncino", ben definito, che viene utilizzato all'interno di un'applicazione più ampia
- Da ciò ne consegue che una  moderna applicazione web è composta da uno o più componenti indipendenti che interagiscono tra loro per fornire il layout e la funzionalità desiderata
`,title:"Web Components",level:1,content:`# Web Components

OOP per il Web

- Lo sviluppo Web moderno è incentrato sul concetto di \`componente\`

<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;margin:10px;">

*Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.* (source MDN)

</div>

- Un componente è un elemento atomico e auto sufficiente,  di un'applicazione Web. 
- In altre parole un componente è un "mattoncino", ben definito, che viene utilizzato all'interno di un'applicazione più ampia
- Da ciò ne consegue che una  moderna applicazione web è composta da uno o più componenti indipendenti che interagiscono tra loro per fornire il layout e la funzionalità desiderata`,frontmatter:{},index:10,start:152,end:169,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:DI,meta:{slide:{raw:`
# Web Components

OOP per il Web

- Un elemento di input può essere un componente.
- Un form può essere un componente. 
- Una pagina intera può essere è un componente.

<img src="/media/svelte_03.png" style="position: relative; left: 450px;top:-150px;" width="500" />
`,title:"Web Components",level:1,content:`# Web Components

OOP per il Web

- Un elemento di input può essere un componente.
- Un form può essere un componente. 
- Una pagina intera può essere è un componente.

<img src="/media/svelte_03.png" style="position: relative; left: 450px;top:-150px;" width="500" />`,frontmatter:{},index:11,start:170,end:181,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:UI,meta:{slide:{raw:`
# Web Components

OOP per il Web

<img src="/media/svelte_006.png" class="mx-auto" width="600" />
`,title:"Web Components",level:1,content:`# Web Components

OOP per il Web

<img src="/media/svelte_006.png" class="mx-auto" width="600" />`,frontmatter:{},index:12,start:182,end:189,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:ez,meta:{slide:{raw:`
# SvelteKit

Svelte ~ SvelteKit

- Svelte è un framework **che propone un approccio radicalmente nuovo alla creazione di applicazioni Web**.
- Svelte è un modo per scrivere componenti dell'interfaccia utente, come una barra di navigazione, una sezione dei commenti o un modulo di contatto
- Se hai già esperienza con React, Vue, Angular o altri framework frontend rimarrai   piacevolmente sorpreso da Svelte.
- Lavorando con Svelte tutto sembra molto più simile al JavaScript-vanilla rispetto che a lavorare con altri framework.
- In generale la maggior parte delle cose che sono complicate con altri framework sono molto semplici e leggeri con Svelte.

<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;">
Svelte è stato recentemente votato come il <h2>framework web più amato dagli sviluppatori</h2> 
</div>

[https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks)
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte ~ SvelteKit

- Svelte è un framework **che propone un approccio radicalmente nuovo alla creazione di applicazioni Web**.
- Svelte è un modo per scrivere componenti dell'interfaccia utente, come una barra di navigazione, una sezione dei commenti o un modulo di contatto
- Se hai già esperienza con React, Vue, Angular o altri framework frontend rimarrai   piacevolmente sorpreso da Svelte.
- Lavorando con Svelte tutto sembra molto più simile al JavaScript-vanilla rispetto che a lavorare con altri framework.
- In generale la maggior parte delle cose che sono complicate con altri framework sono molto semplici e leggeri con Svelte.

<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;">
Svelte è stato recentemente votato come il <h2>framework web più amato dagli sviluppatori</h2> 
</div>

[https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks)`,frontmatter:{},index:13,start:190,end:207,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:lz,meta:{slide:{raw:`
# SvelteKit

Introduzione

<img src="/media/svelte_00.png" class="mx-auto" width="750" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Introduzione

<img src="/media/svelte_00.png" class="mx-auto" width="750" />`,frontmatter:{},index:14,start:208,end:216,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:dz,meta:{slide:{raw:`
# SvelteKit

Svelte vs Others

- Mentre i framework tradizionali come React e Vue fanno la maggior parte del loro lavoro nel browser, Svelte sposta il lavoro in una fase di compilazione che si verifica quando crei la tua app, in modo da non dover far scaricare l'intero framework a tutti i tuoi visitatori del sito. 
- Di conseguenza, la fruizione dell'esperienza è più fluida, consuma meno larghezza di banda e tutto risulta più veloce e leggero.
- Al momento della distribuzione, Svelte scompare e tutto ciò che ottieni è puro JavaScript Vanilla (molto veloce!).
- In altre parole \`Svelte è un compilatore\` che trasforma il codice della tua applicazione Web in puro JavaScript, raggiungendo così massime prestazioni

`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte vs Others

- Mentre i framework tradizionali come React e Vue fanno la maggior parte del loro lavoro nel browser, Svelte sposta il lavoro in una fase di compilazione che si verifica quando crei la tua app, in modo da non dover far scaricare l'intero framework a tutti i tuoi visitatori del sito. 
- Di conseguenza, la fruizione dell'esperienza è più fluida, consuma meno larghezza di banda e tutto risulta più veloce e leggero.
- Al momento della distribuzione, Svelte scompare e tutto ciò che ottieni è puro JavaScript Vanilla (molto veloce!).
- In altre parole \`Svelte è un compilatore\` che trasforma il codice della tua applicazione Web in puro JavaScript, raggiungendo così massime prestazioni`,frontmatter:{},index:15,start:217,end:228,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:gz,meta:{slide:{raw:`
# SvelteKit

Svelte vs Others

- Molti framework Web utilizzano il concetto di \`Virtual DOM\`
- Il Virtual DOM \`VDOM\` è una rappresentazione ideale della UI di una pagina che è mantenuta in memoria
- Il VDOM è sincronizzato periodicamente con il DOM reale da una libreria (Reacts, Vue, Angular)
- Svelte, in modo innovativo, anzichè utilizzare la tecnica del \`virtual DOM diffing\`, genera codice JS che aggiorna direttamente il DOM quando cambia lo stato della tua app.

<br>
<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;">
La principale differenza tra Svelte e gli altri framework Web è che Svelte è un compilatore che converte la tua applicazione Web in JavaScript-vanilla durante la fase di build. Al contrario gli altri framework usano un virtual DOM interpretato dall'applicazione Web durante il runtime sul browser.
</div> 
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte vs Others

- Molti framework Web utilizzano il concetto di \`Virtual DOM\`
- Il Virtual DOM \`VDOM\` è una rappresentazione ideale della UI di una pagina che è mantenuta in memoria
- Il VDOM è sincronizzato periodicamente con il DOM reale da una libreria (Reacts, Vue, Angular)
- Svelte, in modo innovativo, anzichè utilizzare la tecnica del \`virtual DOM diffing\`, genera codice JS che aggiorna direttamente il DOM quando cambia lo stato della tua app.

<br>
<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;">
La principale differenza tra Svelte e gli altri framework Web è che Svelte è un compilatore che converte la tua applicazione Web in JavaScript-vanilla durante la fase di build. Al contrario gli altri framework usano un virtual DOM interpretato dall'applicazione Web durante il runtime sul browser.
</div>`,frontmatter:{},index:16,start:229,end:244,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:xz,meta:{slide:{raw:`
# SvelteKit

Svelte vs Others

- React utilizza un concetto noto come Virtual DOM (VDOM), in cui una rappresentazione virtuale dell'interfaccia utente viene mantenuta in memoria e sincronizzata con il DOM reale attraverso un processo chiamato **riconciliazione**. 
- Il processo di riconciliazione troverà la differenza (diffing) tra il Virtual DOM (un oggetto in memoria, dove inviamo gli ultimi aggiornamenti all'interfaccia utente) e il vero DOM (DOM che contiene l'interfaccia utente precedentemente renderizzata). 
- Utilizzando specifici algoritmi, il framework decide come aggiornare l'interfaccia utente. 
- Ovviamente questo processo, non è efficiente e veloce
- Per raggiungere questo obiettivo, React introduce un overhead (la libreria), che verrà eseguito nel motore JS del browser per monitorare e aggiornare il DOM in base alle varie interazioni dell'utente.
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte vs Others

- React utilizza un concetto noto come Virtual DOM (VDOM), in cui una rappresentazione virtuale dell'interfaccia utente viene mantenuta in memoria e sincronizzata con il DOM reale attraverso un processo chiamato **riconciliazione**. 
- Il processo di riconciliazione troverà la differenza (diffing) tra il Virtual DOM (un oggetto in memoria, dove inviamo gli ultimi aggiornamenti all'interfaccia utente) e il vero DOM (DOM che contiene l'interfaccia utente precedentemente renderizzata). 
- Utilizzando specifici algoritmi, il framework decide come aggiornare l'interfaccia utente. 
- Ovviamente questo processo, non è efficiente e veloce
- Per raggiungere questo obiettivo, React introduce un overhead (la libreria), che verrà eseguito nel motore JS del browser per monitorare e aggiornare il DOM in base alle varie interazioni dell'utente.`,frontmatter:{},index:17,start:245,end:256,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Tz,meta:{slide:{raw:`
# SvelteKit

Svelte vs Others

<img src="/media/svelte_01.png" class="mx-auto w-160" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte vs Others

<img src="/media/svelte_01.png" class="mx-auto w-160" />`,frontmatter:{},index:18,start:257,end:264,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Lz,meta:{slide:{raw:`
# SvelteKit

Svelte vs Others

- Svelte è solamente un compilatore, che converte la tua applicazione in codice JavaScript durante la fase di sviluppo e build. 
- Ciò significa che non inietterà alcun codice aggiuntivo (no librerie aggiuntive) da eseguire nel browser quando l'applicazione è in esecuzione per aggiornare il DOM.
- Questo approccio è generalmente più veloce dell'approccio basato su Virtual DOM.

<img src="/media/svelte_003.png" class="mx-auto" width="480" style="margin-top:20px" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte vs Others

- Svelte è solamente un compilatore, che converte la tua applicazione in codice JavaScript durante la fase di sviluppo e build. 
- Ciò significa che non inietterà alcun codice aggiuntivo (no librerie aggiuntive) da eseguire nel browser quando l'applicazione è in esecuzione per aggiornare il DOM.
- Questo approccio è generalmente più veloce dell'approccio basato su Virtual DOM.

<img src="/media/svelte_003.png" class="mx-auto" width="480" style="margin-top:20px" />`,frontmatter:{},index:19,start:265,end:276,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Vz,meta:{slide:{raw:`
# SvelteKit

Svelte vs Others

**PRO**

- Tempo di compilazione velocissimo rispetto a React o altri framework e dimensione del pacchetto generato è più piccola rispetto a React
- Tempi di caricamento e rendering della Web app più veloci rispetto a React o altri framework.
- Più facile da capire rispetto a altri framework poiché Svelte è semplice JavaScript, HTML e CSS.
- Permette di scrivere meno codice rispetto ad altri framework
- Nativamente **reactive** e perfettamente adatto alle moderne Web app

**CONTRO**

- Svelte è un framework ancora nuovo e giovane con un supporto limitato da parte della community, quindi non ha il supporto per un'ampia gamma di plugin e integrazioni come per esempio React
- Alcuni sviluppatori potrebbero non preferire l'uso di sintassi speciali come #if e #each all'interno dei loro modelli e preferirebbero invece utilizzare JavaScript puro, come consentito da React.
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte vs Others

**PRO**

- Tempo di compilazione velocissimo rispetto a React o altri framework e dimensione del pacchetto generato è più piccola rispetto a React
- Tempi di caricamento e rendering della Web app più veloci rispetto a React o altri framework.
- Più facile da capire rispetto a altri framework poiché Svelte è semplice JavaScript, HTML e CSS.
- Permette di scrivere meno codice rispetto ad altri framework
- Nativamente **reactive** e perfettamente adatto alle moderne Web app

**CONTRO**

- Svelte è un framework ancora nuovo e giovane con un supporto limitato da parte della community, quindi non ha il supporto per un'ampia gamma di plugin e integrazioni come per esempio React
- Alcuni sviluppatori potrebbero non preferire l'uso di sintassi speciali come #if e #each all'interno dei loro modelli e preferirebbero invece utilizzare JavaScript puro, come consentito da React.`,frontmatter:{},index:20,start:277,end:295,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Qz,meta:{slide:{raw:`
# SvelteKit

Fullstack Framework

- \`SvelteKit\` è un framework per lo sviluppo rapido di applicazioni Web robuste e performanti che utilizza Svelte. 
- Se provieni da React, SvelteKit è simile a Next. Se vieni da Vue, SvelteKit è simile a Nuxt
- Sveltekit è il framework che permette agli sviluppatori di creare e gestire la user experience della loro applicazione. 
- Fornisce un ambiente unificato per lavorare con componenti, dati, routing, back-end, front-end e altro ancora.
- SvelteKit e Svelte sono **totalmente allineati** al paradigma e modello di sviluppo per componenti caratteristico del web moderno.
`,title:"SvelteKit",level:1,content:`# SvelteKit

Fullstack Framework

- \`SvelteKit\` è un framework per lo sviluppo rapido di applicazioni Web robuste e performanti che utilizza Svelte. 
- Se provieni da React, SvelteKit è simile a Next. Se vieni da Vue, SvelteKit è simile a Nuxt
- Sveltekit è il framework che permette agli sviluppatori di creare e gestire la user experience della loro applicazione. 
- Fornisce un ambiente unificato per lavorare con componenti, dati, routing, back-end, front-end e altro ancora.
- SvelteKit e Svelte sono **totalmente allineati** al paradigma e modello di sviluppo per componenti caratteristico del web moderno.`,frontmatter:{},index:21,start:296,end:307,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:eO,meta:{slide:{raw:`
# SvelteKit

Fullstack Framework

- SvelteKit è un framework per app che risolve i difficili molti problemi comunini ad applicazioni pronte per la produzione:
  - Routing (navigazione tra le pagine)
  - Server-side rendering (supporto al back-end)
  - Data fetching ()
  - Service workers 
  - Supporto TypeScript (la versione di JavaScript con steroidi) 
  - Prerendering (per applicazioni statiche. vedi blog profmancusoa)
  - Single-page apps (SPA: approccio moderno che sostituisce lo sviluppo desktop)
  - Supporto per diversi hosting providers molto comuni su Internet (vercel, netlify, ...) 

`,title:"SvelteKit",level:1,content:`# SvelteKit

Fullstack Framework

- SvelteKit è un framework per app che risolve i difficili molti problemi comunini ad applicazioni pronte per la produzione:
  - Routing (navigazione tra le pagine)
  - Server-side rendering (supporto al back-end)
  - Data fetching ()
  - Service workers 
  - Supporto TypeScript (la versione di JavaScript con steroidi) 
  - Prerendering (per applicazioni statiche. vedi blog profmancusoa)
  - Single-page apps (SPA: approccio moderno che sostituisce lo sviluppo desktop)
  - Supporto per diversi hosting providers molto comuni su Internet (vercel, netlify, ...)`,frontmatter:{},index:22,start:308,end:324,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:rO,meta:{slide:{raw:`
# SvelteKit

Svelte vs SvelteKit

**SVELTE**

 - Un linguaggio di programmazione che si basa su HTML, CSS e JS
 - Svelte permette la creazione di  **componenti** web. 
 - Un componente è un blocco di codice autonomo riutilizzabile che incapsula HTML, CSS e JavaScript scritti in un file **.svelte**. 
 
**SVELTE KIT**

- Sveltekit è il framework, basato su Svelte, che permette agli sviluppatori di creare e gestire applicazioni full stack che combinano insieme componenti Svelte. 
- Fornisce un ambiente unificato per lavorare con componenti, dati, routing e altro ancora.
- Sveltekit è un \`full stack framework\` ricco di funzionalità e permette lo sviluppo di un applicazione web completa di back-end e front-end
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte vs SvelteKit

**SVELTE**

 - Un linguaggio di programmazione che si basa su HTML, CSS e JS
 - Svelte permette la creazione di  **componenti** web. 
 - Un componente è un blocco di codice autonomo riutilizzabile che incapsula HTML, CSS e JavaScript scritti in un file **.svelte**. 
 
**SVELTE KIT**

- Sveltekit è il framework, basato su Svelte, che permette agli sviluppatori di creare e gestire applicazioni full stack che combinano insieme componenti Svelte. 
- Fornisce un ambiente unificato per lavorare con componenti, dati, routing e altro ancora.
- Sveltekit è un \`full stack framework\` ricco di funzionalità e permette lo sviluppo di un applicazione web completa di back-end e front-end`,frontmatter:{},index:23,start:325,end:342,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:fO,meta:{slide:{raw:`
# SvelteKit

Web App Architecture

<img src="/media/svelte_005.png" class="mx-auto" width="900" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Web App Architecture

<img src="/media/svelte_005.png" class="mx-auto" width="900" />`,frontmatter:{},index:24,start:343,end:351,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:SO,meta:{slide:{raw:`
# SvelteKit

Svelte Components

- Un componente web è assimilabile al concetto di Oggetto nella programmazione OOP
- Come un oggetto incapusala dati e metodi, un componente Web incapsula tutto ciò che è necessario per eseguire il rendering della sua interfaccia utente e per gestire la sua logica di funzionamento.  
- Ogni componente Svelte è dichiarato in un file \`.svelte\`, che contiene:
  - il contenuto (markup) in HTML
  - la presentazione o stile (CSS)
  - il comportamento (JavaScript)

<br>
<div style="background-color:green;color:yellow;padding: 10px; line-height:25px">
Questo raggruppamento (senza un ordine particolare) permette un modo efficiente di definire una parte dell'interfaccia utente perché non è necessario cercare gli elementi che influiscono sullo stesso elemento in vari file.
</div>
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte Components

- Un componente web è assimilabile al concetto di Oggetto nella programmazione OOP
- Come un oggetto incapusala dati e metodi, un componente Web incapsula tutto ciò che è necessario per eseguire il rendering della sua interfaccia utente e per gestire la sua logica di funzionamento.  
- Ogni componente Svelte è dichiarato in un file \`.svelte\`, che contiene:
  - il contenuto (markup) in HTML
  - la presentazione o stile (CSS)
  - il comportamento (JavaScript)

<br>
<div style="background-color:green;color:yellow;padding: 10px; line-height:25px">
Questo raggruppamento (senza un ordine particolare) permette un modo efficiente di definire una parte dell'interfaccia utente perché non è necessario cercare gli elementi che influiscono sullo stesso elemento in vari file.
</div>`,frontmatter:{},index:25,start:352,end:369,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:TO,meta:{slide:{raw:`
# SvelteKit

Svelte Components

- Ecco la struttura di un componente Svelte

<br>

<img src="/media/svelte_007.png" class="mx-auto" width="700" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte Components

- Ecco la struttura di un componente Svelte

<br>

<img src="/media/svelte_007.png" class="mx-auto" width="700" />`,frontmatter:{},index:26,start:370,end:382,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:KO,meta:{slide:{raw:`
# SvelteKit

Esempio di componente Svelte
 
<img src="/media/svelte_008.png" class="mx-auto" width="350" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Esempio di componente Svelte
 
<img src="/media/svelte_008.png" class="mx-auto" width="350" />`,frontmatter:{},index:27,start:383,end:391,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:FO,meta:{slide:{raw:`
# SvelteKit

Svelte Components

<br><br>

<img src="/media/svelte_04.png" class="mx-auto" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte Components

<br><br>

<img src="/media/svelte_04.png" class="mx-auto" />`,frontmatter:{},index:28,start:392,end:402,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:GO,meta:{slide:{raw:`
# SvelteKit

Svelte Components

- Questo componente, per quanto semplice, contiene tutti gli elementi di un componente web (HTML/CSS/JS)
- Nel tag \`<script>\` è presente il codice JS di gestione del componente
- Il markup HTML non è inserito in un tag particolare e pertanto tutto ciò che non è parte del tag \`<script>\` e \`<style>\` è cosiderato contenuto del componente.
- Il tag \`<style>\` definisce il CSS del componente

<br>
<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;">
Sia il codice JS e lo stile CSS sono confinati solo all'interno di questo componente e non possono influire o essere influenzati da altri componenti parte dell'applicazione complessiva.
</div>
<br>

- Se un altro componente ha un tag h1, lo stile non sarà modificato. 
- Questo è molto utile quando riutilizzi componenti che hai già scritto per altre applicazioni o quando includi librerie Open Source pubblicate da altre persone.
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte Components

- Questo componente, per quanto semplice, contiene tutti gli elementi di un componente web (HTML/CSS/JS)
- Nel tag \`<script>\` è presente il codice JS di gestione del componente
- Il markup HTML non è inserito in un tag particolare e pertanto tutto ciò che non è parte del tag \`<script>\` e \`<style>\` è cosiderato contenuto del componente.
- Il tag \`<style>\` definisce il CSS del componente

<br>
<div style="background-color:green;color:yellow;padding: 10px;line-height: 40px;">
Sia il codice JS e lo stile CSS sono confinati solo all'interno di questo componente e non possono influire o essere influenzati da altri componenti parte dell'applicazione complessiva.
</div>
<br>

- Se un altro componente ha un tag h1, lo stile non sarà modificato. 
- Questo è molto utile quando riutilizzi componenti che hai già scritto per altre applicazioni o quando includi librerie Open Source pubblicate da altre persone.`,frontmatter:{},index:29,start:403,end:422,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:hT,meta:{slide:{raw:`
# SvelteKit

Svelte Components

\`\`\`html
<h1>My name is John Doe!</h1>
\`\`\`

- Questo è un componente Svelte valido
- Include solo la parte di contenuto
- Non ha nessuno stuile e nessuna logica di controllo

`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte Components

\`\`\`html
<h1>My name is John Doe!</h1>
\`\`\`

- Questo è un componente Svelte valido
- Include solo la parte di contenuto
- Non ha nessuno stuile e nessuna logica di controllo`,frontmatter:{},index:30,start:423,end:437,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:ST,meta:{slide:{raw:`
# SvelteKit

Svelte Components

\`\`\`html
<h1>My name is John Doe!</h1>

<style>
	h1 {
		width: 30%;
		border: 20px solid green;
		border-radius: 20px;
		color: red;
		text-align: center;
		margin: 30px auto;
		padding: 20px;
	}
</style>
\`\`\`

- Questo è un componente Svelte valido
- Include la parte di contenuto e di stile
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte Components

\`\`\`html
<h1>My name is John Doe!</h1>

<style>
	h1 {
		width: 30%;
		border: 20px solid green;
		border-radius: 20px;
		color: red;
		text-align: center;
		margin: 30px auto;
		padding: 20px;
	}
</style>
\`\`\`

- Questo è un componente Svelte valido
- Include la parte di contenuto e di stile`,frontmatter:{},index:31,start:438,end:462,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:TT,meta:{slide:{raw:`
# SvelteKit

Svelte Components

\`\`\`html
<script>
	let name = 'John Doe';
<\/script>
\`\`\`

- Questo è un componente Svelte valido.
- Non ha nessuno contenuto e non verrà visualizzato.
- Anche se apparentemente non ha senso, lo ha in quanto posso avere componenti che svolgono solo funzioni utilizzate da altri componenti.

Esempio: 
- un componente che fornisce accesso ad un DB nosql non ha nessuna parte di UI, ma è di grande utilità all'interno della mia applicazione.
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte Components

\`\`\`html
<script>
	let name = 'John Doe';
<\/script>
\`\`\`

- Questo è un componente Svelte valido.
- Non ha nessuno contenuto e non verrà visualizzato.
- Anche se apparentemente non ha senso, lo ha in quanto posso avere componenti che svolgono solo funzioni utilizzate da altri componenti.

Esempio: 
- un componente che fornisce accesso ad un DB nosql non ha nessuna parte di UI, ma è di grande utilità all'interno della mia applicazione.`,frontmatter:{},index:32,start:463,end:481,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:KT,meta:{slide:{raw:`
# SvelteKit

Hello World

- Vediamo i semplici passi per creare un progetto base SvelteKit
- Utilizzeremo il progetto base per provare a analizzare e comprendere le principali carattristiche:
  - del linguaggio Svelte e delle principali funzionalità
  - dello sviluppo per componenti
  - delle funzioni più importanti di SvelteKit

- Di seguito i link alla documentazione e tutoria di Svelte e SvelteKit
  - [Svelte tutorial](https://svelte.dev/tutorial/basics)
  - [Tutorial Interattivo Svelte](https://learn.svelte.dev/tutorial/welcome-to-svelte)
  - [Introduzione a SvelteKit](https://kit.svelte.dev/docs/introduction)

***Questi link sono il riferimento per gli studenti e vi suggerisco di studiarli e di utilizzarli per tutto il tempo necessario ad apprendere Svlete e SvelteKit***
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World

- Vediamo i semplici passi per creare un progetto base SvelteKit
- Utilizzeremo il progetto base per provare a analizzare e comprendere le principali carattristiche:
  - del linguaggio Svelte e delle principali funzionalità
  - dello sviluppo per componenti
  - delle funzioni più importanti di SvelteKit

- Di seguito i link alla documentazione e tutoria di Svelte e SvelteKit
  - [Svelte tutorial](https://svelte.dev/tutorial/basics)
  - [Tutorial Interattivo Svelte](https://learn.svelte.dev/tutorial/welcome-to-svelte)
  - [Introduzione a SvelteKit](https://kit.svelte.dev/docs/introduction)

***Questi link sono il riferimento per gli studenti e vi suggerisco di studiarli e di utilizzarli per tutto il tempo necessario ad apprendere Svlete e SvelteKit***`,frontmatter:{},index:33,start:482,end:500,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:DT,meta:{slide:{raw:`
# SvelteKit

Hello World: Creare un Progetto SvelteKit

- Per sviluppare con Svelte e SvelteKit è necessario:
  - nodejs (almeno versione 18) ---> [Come installare nodejs su Linux](http://cedws)
  - npm
  - git
- Assicurati che siano instllati sul tuo sistema eseguendo i seguenti comandi:

\`\`\`bash
> node --version
v19.2.0

> npm --version 
9.1.3

> git --version          
git version 2.34.1
\`\`\`
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Creare un Progetto SvelteKit

- Per sviluppare con Svelte e SvelteKit è necessario:
  - nodejs (almeno versione 18) ---> [Come installare nodejs su Linux](http://cedws)
  - npm
  - git
- Assicurati che siano instllati sul tuo sistema eseguendo i seguenti comandi:

\`\`\`bash
> node --version
v19.2.0

> npm --version 
9.1.3

> git --version          
git version 2.34.1
\`\`\``,frontmatter:{},index:34,start:501,end:523,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:UT,meta:{slide:{raw:`
# SvelteKit

Hello World: Creare un Progetto SvelteKit

- Spostati nella tua directory di lavoro (es: cd ~/tmp)
- Da qui crea lo [**scaffolding**](https://en.wikipedia.org/wiki/Scaffold_(programming)) di un'applicazione base seguendo le semplici istruzioni a video
  
\`\`\`bash
> npm create svelte@latest hello-word-svelte-kit

create-svelte version 4.2.0

┌  Welcome to SvelteKit!
│
◆  Which Svelte app template?
│  ● SvelteKit demo app (A demo app showcasing some of the features of SvelteKit)
│  ○ Skeleton project
│  ○ Library project
└
◆  Add type checking with TypeScript?
│  ○ Yes, using JavaScript with JSDoc comments
│  ○ Yes, using TypeScript syntax
│  ● No
└
\`\`\`
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Creare un Progetto SvelteKit

- Spostati nella tua directory di lavoro (es: cd ~/tmp)
- Da qui crea lo [**scaffolding**](https://en.wikipedia.org/wiki/Scaffold_(programming)) di un'applicazione base seguendo le semplici istruzioni a video
  
\`\`\`bash
> npm create svelte@latest hello-word-svelte-kit

create-svelte version 4.2.0

┌  Welcome to SvelteKit!
│
◆  Which Svelte app template?
│  ● SvelteKit demo app (A demo app showcasing some of the features of SvelteKit)
│  ○ Skeleton project
│  ○ Library project
└
◆  Add type checking with TypeScript?
│  ○ Yes, using JavaScript with JSDoc comments
│  ○ Yes, using TypeScript syntax
│  ● No
└
\`\`\``,frontmatter:{},index:35,start:524,end:551,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:ZT,meta:{slide:{raw:`
# SvelteKit

Hello World: Creare un Progetto SvelteKit

\`\`\`bash
◆  Select additional options (use arrow keys/space bar)
│  ◻ Add ESLint for code linting
│  ◻ Add Prettier for code formatting
│  ◻ Add Playwright for browser testing
│  ◻ Add Vitest for unit testing
└

└  Your project is ready!

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-add

Next steps:
  1: cd hello-word-svelte-kit
  2: npm install (or pnpm install, etc)
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open

To close the dev server, hit Ctrl-C
\`\`\`
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Creare un Progetto SvelteKit

\`\`\`bash
◆  Select additional options (use arrow keys/space bar)
│  ◻ Add ESLint for code linting
│  ◻ Add Prettier for code formatting
│  ◻ Add Playwright for browser testing
│  ◻ Add Vitest for unit testing
└

└  Your project is ready!

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-add

Next steps:
  1: cd hello-word-svelte-kit
  2: npm install (or pnpm install, etc)
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open

To close the dev server, hit Ctrl-C
\`\`\``,frontmatter:{},index:36,start:552,end:579,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:aE,meta:{slide:{raw:`
# SvelteKit

Hello World: Creare un Progetto SvelteKit

- Ora nella directory **hello-word-svelte-kit** è presente un progetto base realizzato con SvelteKit
- Per portare a termine la creazione del progetto eseguire i seguenti comandi

\`\`\`bash
> cd hello-word-svelte-kit  # mi sposto nella directory hello-word-svelte-kit
> npm i  # installo le dipendenze del progetto

added 42 packages, and audited 43 packages in 10s

3 packages are looking for funding
  run \`npm fund\` for details

found 0 vulnerabilities
\`\`\`

- Se non si sono verificatri errori, il progetto è pronto per l'esecuzione

<img src="/media/svelte_0000.png" class="mx-auto" width="100" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Creare un Progetto SvelteKit

- Ora nella directory **hello-word-svelte-kit** è presente un progetto base realizzato con SvelteKit
- Per portare a termine la creazione del progetto eseguire i seguenti comandi

\`\`\`bash
> cd hello-word-svelte-kit  # mi sposto nella directory hello-word-svelte-kit
> npm i  # installo le dipendenze del progetto

added 42 packages, and audited 43 packages in 10s

3 packages are looking for funding
  run \`npm fund\` for details

found 0 vulnerabilities
\`\`\`

- Se non si sono verificatri errori, il progetto è pronto per l'esecuzione

<img src="/media/svelte_0000.png" class="mx-auto" width="100" />`,frontmatter:{},index:37,start:580,end:605,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:fE,meta:{slide:{raw:`
# SvelteKit

Hello World: Eseguiamo il progetto

- Per eseguire il progetto, all'interno della directory di progetto (hello-word-svelte-kit), eseguire il seguente comando

\`\`\`bash
> npm run dev -- --open

> hello-word-svelte-kit@0.0.1 dev
> vite dev --open


Forced re-optimization of dependencies

  VITE v4.3.9  ready in 1136 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
\`\`\`

- Viene automaticamente aperta una fienstra del browser che punta al seguente indirizzo: [http://localhost:5173/](http://localhost:5173/)
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Eseguiamo il progetto

- Per eseguire il progetto, all'interno della directory di progetto (hello-word-svelte-kit), eseguire il seguente comando

\`\`\`bash
> npm run dev -- --open

> hello-word-svelte-kit@0.0.1 dev
> vite dev --open


Forced re-optimization of dependencies

  VITE v4.3.9  ready in 1136 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
\`\`\`

- Viene automaticamente aperta una fienstra del browser che punta al seguente indirizzo: [http://localhost:5173/](http://localhost:5173/)`,frontmatter:{},index:38,start:606,end:631,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:yE,meta:{slide:{raw:`
# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_009.png" class="mx-auto" width="500" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_009.png" class="mx-auto" width="500" />`,frontmatter:{},index:39,start:632,end:639,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:IE,meta:{slide:{raw:`
# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_010.png" class="mx-auto" width="450" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_010.png" class="mx-auto" width="450" />`,frontmatter:{},index:40,start:640,end:647,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:CE,meta:{slide:{raw:`
# SvelteKit

Hello World: Analisi del progetto base

- Quest'applicazione ci permette di comprendere alcuni concetti molto importanti:
  1. **Ogni pagina dell'applicazione è un componente Svelte**
  2. **Il routing è implementato la gerarchia di directory nel filesystem**
  3. **Ogni pagina è una directory all'interno di src/routes**
  4. **La home page è un componente Svelte all'interno di src/routes**
  5. **Una pagina(componente) può includere uno o più componenti esterni**
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Analisi del progetto base

- Quest'applicazione ci permette di comprendere alcuni concetti molto importanti:
  1. **Ogni pagina dell'applicazione è un componente Svelte**
  2. **Il routing è implementato la gerarchia di directory nel filesystem**
  3. **Ogni pagina è una directory all'interno di src/routes**
  4. **La home page è un componente Svelte all'interno di src/routes**
  5. **Una pagina(componente) può includere uno o più componenti esterni**`,frontmatter:{},index:41,start:648,end:660,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:RE,meta:{slide:{raw:`
# SvelteKit

Hello World: Analisi del progetto base

- Analizziamo il progetto generato

\`\`\`bash
src
├── app.html --> La pagina Web dell'applicazione
└── routes --> entry point del sistema di routing filesystem based
    ├── about
    │   └── +page.svelte --> la pagina About (componente svelte)
    ├── Counter.svelte --> il componente contatore presente solo nella home
    ├── Header.svelte --> il componente Header presente in tutte le pagine
    ├── +layout.svelte --> il layout comune a tutte le pagine del progetto
    ├── +page.svelte --> la home page (componente svelte)
    ├── styles.css --> CSS globale che si applica a tutta l'applicazione ed ai suoi componenti
    └── sverdle
        ├── game.js --> la logica del gioco (JS vanilla)
        ├── +page.server.js --> il back-end di sverdle (JS vanilla)
        └── +page.svelte --> la pagina sverdle (componente svelte)
\`\`\`

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Analisi del progetto base

- Analizziamo il progetto generato

\`\`\`bash
src
├── app.html --> La pagina Web dell'applicazione
└── routes --> entry point del sistema di routing filesystem based
    ├── about
    │   └── +page.svelte --> la pagina About (componente svelte)
    ├── Counter.svelte --> il componente contatore presente solo nella home
    ├── Header.svelte --> il componente Header presente in tutte le pagine
    ├── +layout.svelte --> il layout comune a tutte le pagine del progetto
    ├── +page.svelte --> la home page (componente svelte)
    ├── styles.css --> CSS globale che si applica a tutta l'applicazione ed ai suoi componenti
    └── sverdle
        ├── game.js --> la logica del gioco (JS vanilla)
        ├── +page.server.js --> il back-end di sverdle (JS vanilla)
        └── +page.svelte --> la pagina sverdle (componente svelte)
\`\`\``,frontmatter:{},index:42,start:661,end:686,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:FE,meta:{slide:{raw:`
# SvelteKit

Hello World: Analisi del progetto base

- Da questa prima analisi possiamo dedurre che:
  - Ogni pagina è composta da:
    - una directory all'interno di src/router. Il nome della directory coincide con la URL della pagina (quindi niente spazi, ma usiamo _)
    - un file nominato **+page-svelte** che è un componente completo ed indipendente che include HTML, CSS e JS  
  - Ogni componente che non è una pagina è formato da un file chiamato ***<nome_componente>.svelte***
  - Il routing tra pagine viene gestito automaticamente da SvelteKit se si rispetta la convenzione descritta sopra

- **Segue ora un'analisi live a cura del professore (\`necessario prendere appunti\`)**
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Analisi del progetto base

- Da questa prima analisi possiamo dedurre che:
  - Ogni pagina è composta da:
    - una directory all'interno di src/router. Il nome della directory coincide con la URL della pagina (quindi niente spazi, ma usiamo _)
    - un file nominato **+page-svelte** che è un componente completo ed indipendente che include HTML, CSS e JS  
  - Ogni componente che non è una pagina è formato da un file chiamato ***<nome_componente>.svelte***
  - Il routing tra pagine viene gestito automaticamente da SvelteKit se si rispetta la convenzione descritta sopra

- **Segue ora un'analisi live a cura del professore (\`necessario prendere appunti\`)**`,frontmatter:{},index:43,start:687,end:701,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:UE,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_01

- Creare ed installare il progetto base SvelteKit come spiegato sopra
- Eseguire l'applicazione

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_01

- Creare ed installare il progetto base SvelteKit come spiegato sopra
- Eseguire l'applicazione`,frontmatter:{},index:44,start:702,end:711,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:eC,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_02

- provare a modificare la home page del progetto in modo che appaia come in figura

<img src="/media/svelte_011.png" class="mx-auto" width="450" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_02

- provare a modificare la home page del progetto in modo che appaia come in figura

<img src="/media/svelte_011.png" class="mx-auto" width="450" />`,frontmatter:{},index:45,start:712,end:721,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:aC,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_03

- provare a modificare il layout del progetto in modo che appaia come in figura
  
<br><br>
<img src="/media/svelte_012.png" class="mx-auto" width="700" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_03

- provare a modificare il layout del progetto in modo che appaia come in figura
  
<br><br>
<img src="/media/svelte_012.png" class="mx-auto" width="700" />`,frontmatter:{},index:46,start:722,end:733,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:fC,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_04

- provare a modificare la pagina about in modo che appaia come in figura
  
<img src="/media/svelte_013.png" class="mx-auto" width="600" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_04

- provare a modificare la pagina about in modo che appaia come in figura
  
<img src="/media/svelte_013.png" class="mx-auto" width="600" />`,frontmatter:{},index:47,start:734,end:744,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:wC,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_05

- provare a modificare il componente counter in modo che si incrementi o decrementi di due unità alla pressione dei pulsati + o -

<br>  
<img src="/media/svelte_014.png" class="mx-auto" width="600" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_05

- provare a modificare il componente counter in modo che si incrementi o decrementi di due unità alla pressione dei pulsati + o -

<br>  
<img src="/media/svelte_014.png" class="mx-auto" width="600" />`,frontmatter:{},index:48,start:745,end:755,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:OC,meta:{slide:{raw:`
# SvelteKit

Creiamo un componente

- Vediamo ora come creare un nostro componente e utilizzarlo nelle pagine della nostra applicazione
- Realizzeremo il componente introdotto alla slide #28 e successive
- Lo visualizzeremo sia sulla pagina home che sulla pagina about

<img src="/media/svelte_015.png" class="mx-auto" width="450" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creiamo un componente

- Vediamo ora come creare un nostro componente e utilizzarlo nelle pagine della nostra applicazione
- Realizzeremo il componente introdotto alla slide #28 e successive
- Lo visualizzeremo sia sulla pagina home che sulla pagina about

<img src="/media/svelte_015.png" class="mx-auto" width="450" />`,frontmatter:{},index:49,start:756,end:767,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:KC,meta:{slide:{raw:`
# SvelteKit

Creiamo un componente

- Per una corretta organizzazione del codice metetremo i nostri componenti nella directory lib
- Il nostro componente si chiama **Banner** 
- Quindi dobbiamo creare una directory *components* in src/lib e al suo interno creare un file *banner.svelte*
  
\`\`\`bash
> cd src/lib
> mkdir components
> touch components/banner.svelte


├── app.html
├── lib
│   ├── components
│   │   └── banner.svelte

\`\`\`

- Ora editiamo il file banner.svelte ed utilizziamo il codice di slide #28
  
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creiamo un componente

- Per una corretta organizzazione del codice metetremo i nostri componenti nella directory lib
- Il nostro componente si chiama **Banner** 
- Quindi dobbiamo creare una directory *components* in src/lib e al suo interno creare un file *banner.svelte*
  
\`\`\`bash
> cd src/lib
> mkdir components
> touch components/banner.svelte


├── app.html
├── lib
│   ├── components
│   │   └── banner.svelte

\`\`\`

- Ora editiamo il file banner.svelte ed utilizziamo il codice di slide #28`,frontmatter:{},index:50,start:768,end:793,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:FC,meta:{slide:{raw:`
# SvelteKit

Creiamo un componente

- Il componente **banner** è ora disponibile per essere utilizzato
- Per fare ciò dobbiamo ***importarlo*** nella pagina in cui vogliamo utilizzarlo
- Partiamo modificando la home e quindi editiamo il file *src/routes/+page.svelte*

\`\`\`html
<script>
    import Counter from './Counter.svelte';
    ......
    import Banner from '../lib/components/banner.svelte'; // aggiungi questa linea
<\/script>
\`\`\`

- Ora abbiamo a disposizione un nuovo tag HTML che si chiama **&lt;Banner&gt;**
- Questo è un componente Web e possiamo usarlo come qualsiasi altro tag html
- Come anticipato il paradigma dei web component offre infinite possibilità
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creiamo un componente

- Il componente **banner** è ora disponibile per essere utilizzato
- Per fare ciò dobbiamo ***importarlo*** nella pagina in cui vogliamo utilizzarlo
- Partiamo modificando la home e quindi editiamo il file *src/routes/+page.svelte*

\`\`\`html
<script>
    import Counter from './Counter.svelte';
    ......
    import Banner from '../lib/components/banner.svelte'; // aggiungi questa linea
<\/script>
\`\`\`

- Ora abbiamo a disposizione un nuovo tag HTML che si chiama **&lt;Banner&gt;**
- Questo è un componente Web e possiamo usarlo come qualsiasi altro tag html
- Come anticipato il paradigma dei web component offre infinite possibilità`,frontmatter:{},index:51,start:794,end:815,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:JC,meta:{slide:{raw:`
# SvelteKit

Creiamo un componente

- Ora usiamo il componente nella home page

\`\`\`html
<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		alla tua nuova <br />applicazione SvelteKit
	</h1>

	<h2>
		prova a editare il file <strong>src/routes/+page.svelte</strong>
	</h2>

	<Banner /> <!-- Utilizza Banner al posto di Counter-->
</section>
\`\`\`
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creiamo un componente

- Ora usiamo il componente nella home page

\`\`\`html
<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		alla tua nuova <br />applicazione SvelteKit
	</h1>

	<h2>
		prova a editare il file <strong>src/routes/+page.svelte</strong>
	</h2>

	<Banner /> <!-- Utilizza Banner al posto di Counter-->
</section>
\`\`\``,frontmatter:{},index:52,start:816,end:844,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:tA,meta:{slide:{raw:`
# SvelteKit

Creiamo un componente

- Ora facciamo partire l'applicazione e verifichiamo che tutto sia corretto

<br>
<img src="/media/svelte_015.png" class="mx-auto" width="500" />
 `,title:"SvelteKit",level:1,content:`# SvelteKit

Creiamo un componente

- Ora facciamo partire l'applicazione e verifichiamo che tutto sia corretto

<br>
<img src="/media/svelte_015.png" class="mx-auto" width="500" />`,frontmatter:{},index:53,start:845,end:855,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:cA,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_06

- provare a modificare la pagina about aggiungendo il componente Banner 

<br>  
<img src="/media/svelte_016.png" class="mx-auto" width="600" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_06

- provare a modificare la pagina about aggiungendo il componente Banner 

<br>  
<img src="/media/svelte_016.png" class="mx-auto" width="600" />`,frontmatter:{},index:54,start:856,end:866,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:fA,meta:{slide:{raw:`
# SvelteKit

Creiamo un componente

- Quindi una volta definito il componente, esso sarà riutilizzabile in qualsiasi pagina e sezione del nostro sito
- Ma ancor meglio potrà essere utilizzato anche in altri siti e pagine
- Quindi i componenti web ci permettono di implementare importanti proprietà dello sviluppo software, quali
  - incapsulamento
  - isolamento
  - riutilizzabilità del codice
- Per questi motivi lo sviluppo component base è oggi alla base di tutti i principali framework di sviluppo per il mondo web (web, mobile, games, web app, desktop app)
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creiamo un componente

- Quindi una volta definito il componente, esso sarà riutilizzabile in qualsiasi pagina e sezione del nostro sito
- Ma ancor meglio potrà essere utilizzato anche in altri siti e pagine
- Quindi i componenti web ci permettono di implementare importanti proprietà dello sviluppo software, quali
  - incapsulamento
  - isolamento
  - riutilizzabilità del codice
- Per questi motivi lo sviluppo component base è oggi alla base di tutti i principali framework di sviluppo per il mondo web (web, mobile, games, web app, desktop app)`,frontmatter:{},index:55,start:867,end:880,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:xA,meta:{slide:{raw:`
# SvelteKit

Variable Substitution

- Analizziamo più in dettaglio il componente Banner

\`\`\`html
<script>
    let name = 'John Doe';
<\/script>

<h1>My name is {name}!</h1>
\`\`\`

- Nella sezione JS del componente abbiamo solo definito una variabile di nome *name* ed assegnato un valore string
- Nella sezione HTML del componente abbiamo utilizzato la variabile all'interno di normale codice HTML tramite \`{}\`

<div style="background-color:green;color:yellow;padding: 10px;line-height: 30px;">

In svelte il costrutto {< var name >} rappresenta una sostituzione di variabili

</div>

- Pertanto quando il componente sarà compilato ogni occorrenza di \`{< var name>}\` sarà sostituito con il valore attribuito alla variabile *var name* 
`,title:"SvelteKit",level:1,content:`# SvelteKit

Variable Substitution

- Analizziamo più in dettaglio il componente Banner

\`\`\`html
<script>
    let name = 'John Doe';
<\/script>

<h1>My name is {name}!</h1>
\`\`\`

- Nella sezione JS del componente abbiamo solo definito una variabile di nome *name* ed assegnato un valore string
- Nella sezione HTML del componente abbiamo utilizzato la variabile all'interno di normale codice HTML tramite \`{}\`

<div style="background-color:green;color:yellow;padding: 10px;line-height: 30px;">

In svelte il costrutto {< var name >} rappresenta una sostituzione di variabili

</div>

- Pertanto quando il componente sarà compilato ogni occorrenza di \`{< var name>}\` sarà sostituito con il valore attribuito alla variabile *var name*`,frontmatter:{},index:56,start:881,end:907,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:CA,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_07

- Provare a modificare il componente Banner in modo che visualizzi il proprio nome e cognome
- Verificare che il banner appaia modificato in tutte le pagine 

<br>  
<img src="/media/svelte_017.png" class="mx-auto" width="500" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_07

- Provare a modificare il componente Banner in modo che visualizzi il proprio nome e cognome
- Verificare che il banner appaia modificato in tutte le pagine 

<br>  
<img src="/media/svelte_017.png" class="mx-auto" width="500" />`,frontmatter:{},index:57,start:908,end:920,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:WA,meta:{slide:{raw:`
# SvelteKit

Code Execution

- In molti casi sostituire una variabile non è sufficiente, ma si rende necessario l'esecuzione di un codice JS
- Anche in questa situazione il costrutto \`{}\` viene in nostro aiuto
- Infatti svelte durante la compilazione, esegue il codice JS contenuto in \`{}\` e sostituisce il suo output nel codice HTML
- Vediamo un esempio

\`\`\`html
<script>
    let name = 'John Doe';
<\/script>

<h1>My name is {name.toLocaleUpperCase()}!</h1>
\`\`\`

- Quando questo codice viene compilato, viene prima richiamato il metodo *toUpperCase* sulla variabile(oggetto) name
- Successivamente il risultato di questa esecuzione viene sostitutito *verbatim* nel codice HTML
`,title:"SvelteKit",level:1,content:`# SvelteKit

Code Execution

- In molti casi sostituire una variabile non è sufficiente, ma si rende necessario l'esecuzione di un codice JS
- Anche in questa situazione il costrutto \`{}\` viene in nostro aiuto
- Infatti svelte durante la compilazione, esegue il codice JS contenuto in \`{}\` e sostituisce il suo output nel codice HTML
- Vediamo un esempio

\`\`\`html
<script>
    let name = 'John Doe';
<\/script>

<h1>My name is {name.toLocaleUpperCase()}!</h1>
\`\`\`

- Quando questo codice viene compilato, viene prima richiamato il metodo *toUpperCase* sulla variabile(oggetto) name
- Successivamente il risultato di questa esecuzione viene sostitutito *verbatim* nel codice HTML`,frontmatter:{},index:58,start:921,end:942,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:VA,meta:{slide:{raw:`
# SvelteKit

Code Execution

<img src="/media/svelte_018.png" class="mx-auto" width="500" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Code Execution

<img src="/media/svelte_018.png" class="mx-auto" width="500" />`,frontmatter:{},index:59,start:943,end:951,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:YA,meta:{slide:{raw:`
# SvelteKit

Code Execution

- Ovviamente non siamo limitati ai metodi degli oggetti standard di JS
- Ma possiamo anche richiamare nostre funzioni
- Per esempio vediamo come richiamare una funzione che prende il nostro nome e lo stampa al contrario tutto maiuscolo

\`\`\`html
<script>
    let name = 'Antonio Mancuso';

    function reverse_string(str) {
        return str.split('').reverse().join('').toUpperCase();
    }
<\/script>

<h1>My name is {reverse_string(name)}!</h1>
\`\`\`

`,title:"SvelteKit",level:1,content:`# SvelteKit

Code Execution

- Ovviamente non siamo limitati ai metodi degli oggetti standard di JS
- Ma possiamo anche richiamare nostre funzioni
- Per esempio vediamo come richiamare una funzione che prende il nostro nome e lo stampa al contrario tutto maiuscolo

\`\`\`html
<script>
    let name = 'Antonio Mancuso';

    function reverse_string(str) {
        return str.split('').reverse().join('').toUpperCase();
    }
<\/script>

<h1>My name is {reverse_string(name)}!</h1>
\`\`\``,frontmatter:{},index:60,start:952,end:974,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:iM,meta:{slide:{raw:`
# SvelteKit

Code Execution

- Quando questo codice viene compilato, viene prima richiamato la nostra funzione *reverse_string* 
- Successivamente il risultato di questa esecuzione viene sostitutito *verbatim* nel codice HTML

<br>
<img src="/media/svelte_019.png" class="mx-auto" width="400" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Code Execution

- Quando questo codice viene compilato, viene prima richiamato la nostra funzione *reverse_string* 
- Successivamente il risultato di questa esecuzione viene sostitutito *verbatim* nel codice HTML

<br>
<img src="/media/svelte_019.png" class="mx-auto" width="400" />`,frontmatter:{},index:61,start:975,end:987,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:rM,meta:{slide:{raw:`
# SvelteKit

- Come abbiamo visto con semplici esempi, il meccanismo dei componenti di Svlete è molto versatile
- Permette la definizione di componenti indipendenti rendendo più facile lo sviluppo e riducendo gli errori
- Il meccanismo della sostituzione delle variabili e del code execution sono molto utili nello sviluppo di applicazioni web moderne
- Svelte rende tutto ciò semplicissimo e più semplice rispetto ad altri framework
- Per questo e altri motivi è un framework in veloce ascesa nel panorama dello sviluppo web

- Ora vediamo come creare un progetto Svelte da zero, senza scaffolding
- Questo ci permetterà di comprendere altri meccanismi e come è realmente organizzata un'applicazione sveltekit
`,title:"SvelteKit",level:1,content:`# SvelteKit

- Come abbiamo visto con semplici esempi, il meccanismo dei componenti di Svlete è molto versatile
- Permette la definizione di componenti indipendenti rendendo più facile lo sviluppo e riducendo gli errori
- Il meccanismo della sostituzione delle variabili e del code execution sono molto utili nello sviluppo di applicazioni web moderne
- Svelte rende tutto ciò semplicissimo e più semplice rispetto ad altri framework
- Per questo e altri motivi è un framework in veloce ascesa nel panorama dello sviluppo web

- Ora vediamo come creare un progetto Svelte da zero, senza scaffolding
- Questo ci permetterà di comprendere altri meccanismi e come è realmente organizzata un'applicazione sveltekit`,frontmatter:{},index:62,start:988,end:1e3,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:fM,meta:{slide:{raw:`
# SvelteKit

Creazione Web App: scaffolding del progetto

- Creiamo un nuovo progetto chiamato WebApp

\`\`\`bash
> npm create svelte@latest WebApp

create-svelte version 4.2.0

┌  Welcome to SvelteKit!
│
◆  Which Svelte app template?
│  ○ SvelteKit demo app
│  ● Skeleton project (Barebones scaffolding for your new SvelteKit app)
│  ○ Library project
└
◇  Add type checking with TypeScript?
│  No
│
◇  Select additional options (use arrow keys/space bar)
│  none
│
└  Your project is ready!
\`\`\`
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App: scaffolding del progetto

- Creiamo un nuovo progetto chiamato WebApp

\`\`\`bash
> npm create svelte@latest WebApp

create-svelte version 4.2.0

┌  Welcome to SvelteKit!
│
◆  Which Svelte app template?
│  ○ SvelteKit demo app
│  ● Skeleton project (Barebones scaffolding for your new SvelteKit app)
│  ○ Library project
└
◇  Add type checking with TypeScript?
│  No
│
◇  Select additional options (use arrow keys/space bar)
│  none
│
└  Your project is ready!
\`\`\``,frontmatter:{},index:63,start:1001,end:1029,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:wM,meta:{slide:{raw:`
# SvelteKit

Creazione Web App: scaffolding del progetto

- Questa volta è stato solo creato il minimo indispendabile

<br><br>
<img src="/media/svelte_020.png" class="mx-auto" width="400" />

- Creeremo uno scheletro di una semplice Web App senza spendere troppo tempo sull'aspetto estetico (HTML e CSS sono dati per scontato in questa lezione)
- L'obiettivo è comprendere il funzionamento e l'organizzazione di un'app sveltekit
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App: scaffolding del progetto

- Questa volta è stato solo creato il minimo indispendabile

<br><br>
<img src="/media/svelte_020.png" class="mx-auto" width="400" />

- Creeremo uno scheletro di una semplice Web App senza spendere troppo tempo sull'aspetto estetico (HTML e CSS sono dati per scontato in questa lezione)
- L'obiettivo è comprendere il funzionamento e l'organizzazione di un'app sveltekit`,frontmatter:{},index:64,start:1030,end:1043,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:TM,meta:{slide:{raw:`
# SvelteKit

Creazione Web App: scaffolding del progetto

- Iniziamo con la creazione del \`layout\` della pagina
- Il ***layout*** della pagina è il contenitore principale della nostra applicazione
- Esso sarà sempre visualizzato in ciascuna pagina del sito
- Il vantaggio principale è che in questo modo il layout sarà scritto una sola volta ed utilizzato per tutte le pagine
- Questo meccanismo implementa il principio [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don't Repeat Yourself) molto importante nello sviluppo del software
- Creaimo quindi un file chiamato \`+layout.svelte\` in ***src/routes***

\`\`\`bash
src
├── app.html
└── routes
    ├── +layout.svelte <--- layout
    └── +page.svelte   <--- home page
\`\`\`

- Inseriamo il codice HTML e CSS
  `,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App: scaffolding del progetto

- Iniziamo con la creazione del \`layout\` della pagina
- Il ***layout*** della pagina è il contenitore principale della nostra applicazione
- Esso sarà sempre visualizzato in ciascuna pagina del sito
- Il vantaggio principale è che in questo modo il layout sarà scritto una sola volta ed utilizzato per tutte le pagine
- Questo meccanismo implementa il principio [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don't Repeat Yourself) molto importante nello sviluppo del software
- Creaimo quindi un file chiamato \`+layout.svelte\` in ***src/routes***

\`\`\`bash
src
├── app.html
└── routes
    ├── +layout.svelte <--- layout
    └── +page.svelte   <--- home page
\`\`\`

- Inseriamo il codice HTML e CSS`,frontmatter:{},index:65,start:1044,end:1066,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:KM,meta:{slide:{raw:`
# SvelteKit

Creazione Web App: il layout

<img src="/media/svelte_021.png" class="mx-auto" width="400" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App: il layout

<img src="/media/svelte_021.png" class="mx-auto" width="400" />`,frontmatter:{},index:66,start:1067,end:1074,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:jM,meta:{slide:{raw:`
# SvelteKit

Creazione Web App: il layout


<img src="/media/svelte_022.png" class="mx-auto" width="400" style="position: relative; left: -200px;"/>
<img src="/media/svelte_023.png" class="mx-auto" width="360" style="position: relative; left: 200px;top: -500px;"/>

`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App: il layout


<img src="/media/svelte_022.png" class="mx-auto" width="400" style="position: relative; left: -200px;"/>
<img src="/media/svelte_023.png" class="mx-auto" width="360" style="position: relative; left: 200px;top: -500px;"/>`,frontmatter:{},index:67,start:1075,end:1085,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:QM,meta:{slide:{raw:`
# SvelteKit

Creazione Web App: il layout

<img src="/media/svelte_024.png" class="mx-auto" width="600" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App: il layout

<img src="/media/svelte_024.png" class="mx-auto" width="600" />`,frontmatter:{},index:68,start:1086,end:1094,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:e4,meta:{slide:{raw:`
# SvelteKit

Creazione Web App: il layout

- Abbiamo definito il layout della nostra applicazione, composto da:
  - header
  - navbar
  - main content area (article)
  - footer

- Le pagine che andremo a sviluppare verranno visualizzate nel main content area 
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App: il layout

- Abbiamo definito il layout della nostra applicazione, composto da:
  - header
  - navbar
  - main content area (article)
  - footer

- Le pagine che andremo a sviluppare verranno visualizzate nel main content area`,frontmatter:{},index:69,start:1095,end:1108,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:p4,meta:{slide:{raw:`
# SvelteKit

Creazione Web App: il layout

- Importante notare che nello style del layout abbiamo modificato lo stile globale del body
- Per far ciò abbiamo usato il costrutto \`:global(<selettore>)\`

<br>
<img src="/media/svelte_025.png" class="mx-auto" width="400" />

- Ciò è necessario in quanto lo stylde del componente (layout è un componente) è **scoped**
- In altre parole lo stile di un componente è confinato al solo componente stesso e non può modificare lo stilde di altri componenti
- L'uso di *:globa* ci permette di fare un'eccezione a questa regola

<br>
<Banner bg="green" fg="yellow">
Si suggerisce di non abusare di questa possibilità in quanto rende il codice meno leggibile e meno comprensibile
</Banner>

`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App: il layout

- Importante notare che nello style del layout abbiamo modificato lo stile globale del body
- Per far ciò abbiamo usato il costrutto \`:global(<selettore>)\`

<br>
<img src="/media/svelte_025.png" class="mx-auto" width="400" />

- Ciò è necessario in quanto lo stylde del componente (layout è un componente) è **scoped**
- In altre parole lo stile di un componente è confinato al solo componente stesso e non può modificare lo stilde di altri componenti
- L'uso di *:globa* ci permette di fare un'eccezione a questa regola

<br>
<Banner bg="green" fg="yellow">
Si suggerisce di non abusare di questa possibilità in quanto rende il codice meno leggibile e meno comprensibile
</Banner>`,frontmatter:{},index:70,start:1109,end:1130,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:b4,meta:{slide:{raw:`
# SvelteKit

Component Slot

- Come si vede al momento la nostra app non visualizza la home page nella main content area
- Questo perchè al momento il componente layout NON include nessuna ltro componente (home page)
- Per poter risolvere questo problema dobbiamo ricorrere ad un concetto di Svelte chiamato \`Component Slots\`
- In pratica in modo analogo ai tag HTML che possono avere un contenuto

\`\`\`html
<div>
	<p>Io sono figlio di div</p>
</div>
\`\`\` 

- Anche un componente Svelte può avere un contenuto (o figlio) tramite il costrutto \`<slot />\`
- In altre parole all'interno di un componente Svelte possiamo decidere dove visualizzare il contenuto del "figlio" usando \`<slot />\` 
`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Slot

- Come si vede al momento la nostra app non visualizza la home page nella main content area
- Questo perchè al momento il componente layout NON include nessuna ltro componente (home page)
- Per poter risolvere questo problema dobbiamo ricorrere ad un concetto di Svelte chiamato \`Component Slots\`
- In pratica in modo analogo ai tag HTML che possono avere un contenuto

\`\`\`html
<div>
	<p>Io sono figlio di div</p>
</div>
\`\`\` 

- Anche un componente Svelte può avere un contenuto (o figlio) tramite il costrutto \`<slot />\`
- In altre parole all'interno di un componente Svelte possiamo decidere dove visualizzare il contenuto del "figlio" usando \`<slot />\``,frontmatter:{},index:71,start:1131,end:1150,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:I4,meta:{slide:{raw:`
# SvelteKit

Component Slot

- Modifichiamo +layout.svelte aggiungendo lo slot nella sezione article

\`\`\`html
... 
   <article>
      <slot />
   </article>
...
\`\`\`

- In questo modo nella sezione article comparirà il contenuto del componente correntemente in utilizzio (home page o +page.svelte in src/routes)
`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Slot

- Modifichiamo +layout.svelte aggiungendo lo slot nella sezione article

\`\`\`html
... 
   <article>
      <slot />
   </article>
...
\`\`\`

- In questo modo nella sezione article comparirà il contenuto del componente correntemente in utilizzio (home page o +page.svelte in src/routes)`,frontmatter:{},index:72,start:1151,end:1168,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:A4,meta:{slide:{raw:`
# SvelteKit

Component Slot

<img src="/media/svelte_026.png" class="mx-auto" width="650" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Slot

<img src="/media/svelte_026.png" class="mx-auto" width="650" />`,frontmatter:{},index:73,start:1169,end:1177,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:N4,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_08

- Provare a modificare la home page in modo che appaia come in figura

<br>  
<img src="/media/svelte_027.png" class="mx-auto" width="630" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_08

- Provare a modificare la home page in modo che appaia come in figura

<br>  
<img src="/media/svelte_027.png" class="mx-auto" width="630" />`,frontmatter:{},index:74,start:1178,end:1189,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:q4,meta:{slide:{raw:`
# SvelteKit

Pagina Chi Sono

- Adesso creiamo la pagina "Chi Sono"
- In questa pagina faremo una breve introduzione di noi stessi
- E' importante che nella descrizione di noi stessi includiamo cognome, nome ed età (questo ci sarà utile dopo)
- Quindi per creare la pagina "Chi Sono" creiamo una directory in modo da ottenere questo risultato


\`\`\`bash
src
├── app.html
└── routes
    ├── chi_sono     <---------- routes corrispondente alla pagina
    │   └── +page.svelte  <------ componente o pagina HTML
    ├── +layout.svelte
    └── +page.svelte
\`\`\`
`,title:"SvelteKit",level:1,content:`# SvelteKit

Pagina Chi Sono

- Adesso creiamo la pagina "Chi Sono"
- In questa pagina faremo una breve introduzione di noi stessi
- E' importante che nella descrizione di noi stessi includiamo cognome, nome ed età (questo ci sarà utile dopo)
- Quindi per creare la pagina "Chi Sono" creiamo una directory in modo da ottenere questo risultato


\`\`\`bash
src
├── app.html
└── routes
    ├── chi_sono     <---------- routes corrispondente alla pagina
    │   └── +page.svelte  <------ componente o pagina HTML
    ├── +layout.svelte
    └── +page.svelte
\`\`\``,frontmatter:{},index:75,start:1190,end:1211,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:eP,meta:{slide:{raw:`
# SvelteKit

Pagina Chi Sono

+page.svelte

<br>  
<img src="/media/svelte_029.png" class="mx-auto" width="600" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Pagina Chi Sono

+page.svelte

<br>  
<img src="/media/svelte_029.png" class="mx-auto" width="600" />`,frontmatter:{},index:76,start:1212,end:1223,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:uP,meta:{slide:{raw:`
# SvelteKit

Pagina Chi Sono

- Ora dobbiamo collegare la nuova pagina "Chi Sono" con la barra di navigazione
- Basta modificare il link in questo modo

<br>
<img src="/media/svelte_030.png" class="mx-auto" width="600" />
<br>

- In tal modo quando clicchiamo sul link Chi Sono la pagina omonima verrà visualizzata nella main content area

`,title:"SvelteKit",level:1,content:`# SvelteKit

Pagina Chi Sono

- Ora dobbiamo collegare la nuova pagina "Chi Sono" con la barra di navigazione
- Basta modificare il link in questo modo

<br>
<img src="/media/svelte_030.png" class="mx-auto" width="600" />
<br>

- In tal modo quando clicchiamo sul link Chi Sono la pagina omonima verrà visualizzata nella main content area`,frontmatter:{},index:77,start:1224,end:1239,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:_P,meta:{slide:{raw:`
# SvelteKit

Pagina Chi Sono

<img src="/media/svelte_028.png" class="mx-auto" width="650" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Pagina Chi Sono

<img src="/media/svelte_028.png" class="mx-auto" width="650" />`,frontmatter:{},index:78,start:1240,end:1248,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:wP,meta:{slide:{raw:`
# SvelteKit

Il componente WhoAmI

- Ora trasformiamo la pagina "Chi Sono" in modo che visualizzi un solo componente chiamato ***WhoAmI***
- Quindi creiamo un nuovo componente ***WhoAmI***

\`\`\`bash
src
├── app.html
├── lib
│   └── components
│       └── who_am_i.svelte <--- componente WhoAmI
└── routes
    ├── chi_sono
    │   └── +page.svelte
    ├── +layout.svelte
    └── +page.svelte
\`\`\`

`,title:"SvelteKit",level:1,content:`# SvelteKit

Il componente WhoAmI

- Ora trasformiamo la pagina "Chi Sono" in modo che visualizzi un solo componente chiamato ***WhoAmI***
- Quindi creiamo un nuovo componente ***WhoAmI***

\`\`\`bash
src
├── app.html
├── lib
│   └── components
│       └── who_am_i.svelte <--- componente WhoAmI
└── routes
    ├── chi_sono
    │   └── +page.svelte
    ├── +layout.svelte
    └── +page.svelte
\`\`\``,frontmatter:{},index:79,start:1249,end:1271,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:PP,meta:{slide:{raw:`
# SvelteKit

Il componente WhoAmI

who_am_i.svelte


<img src="/media/svelte_031.png" class="mx-auto" width="600" />
<br>

- Ora modifichiamo la pagina Chi Sono in modo che visualizzi il componente

<br>
<img src="/media/svelte_032.png" class="mx-auto" width="600" />


`,title:"SvelteKit",level:1,content:`# SvelteKit

Il componente WhoAmI

who_am_i.svelte


<img src="/media/svelte_031.png" class="mx-auto" width="600" />
<br>

- Ora modifichiamo la pagina Chi Sono in modo che visualizzi il componente

<br>
<img src="/media/svelte_032.png" class="mx-auto" width="600" />`,frontmatter:{},index:80,start:1272,end:1290,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:NP,meta:{slide:{raw:`
# SvelteKit

Il componente WhoAmI

<img src="/media/svelte_033.png" class="mx-auto" width="550" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Il componente WhoAmI

<img src="/media/svelte_033.png" class="mx-auto" width="550" />`,frontmatter:{},index:81,start:1291,end:1299,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:qP,meta:{slide:{raw:`
# SvelteKit

Props

- Ora tramite un meccanismo di Svelte che si chiama \`Props\` (Properties) vogliamo rendere il componente parametrico
- In altre parole vogliamo fare in modo che nome, cognome e età non siano scritti direttamente nel componente WhoAmI
- Al contrario vogliamo che questi siano dei parametri che vengono passati dal chiamante (la pagina Chi Sono)

<br>
<Banner bg="green" fg="yellow">Tramile le Props di Svelte possiamo quindi creare dei componenti parametrici e quindi più facoilmente riutilizzabili ina ltre pagine o altre applicazioni web</Banner>
`,title:"SvelteKit",level:1,content:`# SvelteKit

Props

- Ora tramite un meccanismo di Svelte che si chiama \`Props\` (Properties) vogliamo rendere il componente parametrico
- In altre parole vogliamo fare in modo che nome, cognome e età non siano scritti direttamente nel componente WhoAmI
- Al contrario vogliamo che questi siano dei parametri che vengono passati dal chiamante (la pagina Chi Sono)

<br>
<Banner bg="green" fg="yellow">Tramile le Props di Svelte possiamo quindi creare dei componenti parametrici e quindi più facoilmente riutilizzabili ina ltre pagine o altre applicazioni web</Banner>`,frontmatter:{},index:82,start:1300,end:1312,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:t3,meta:{slide:{raw:`
# SvelteKit

Props

- In Svelte, all'interno di un componente per dichiarare un parametro o \`propeietà\` si utilizza la keyword \`export\`
- Questa keyword preceduta alla dichiarazione di una variabile, indica al compilatore che il valroe della variabile viene fornito dall'esterno del componente
- In altre parole dice a Svelte che questa variabile viene passata dal chiamante (a tutti gli effetti rendendo la variabile export come un parametro di una funzione in C)

Esempio

\`\`\`js
export let nome;  //dichiara la variabile nome come parametro fornito dal chiamante
export let cognome = "Rossi"; //variabile esterna con valore di feault Rossi
export let eta; //dichiara la variabile nome come parametro fornito dal chiamante
\`\`\`

<br>

- Il meccanismo delle \`Props\` di Svelte è molto potente e di facile utilizzo
`,title:"SvelteKit",level:1,content:`# SvelteKit

Props

- In Svelte, all'interno di un componente per dichiarare un parametro o \`propeietà\` si utilizza la keyword \`export\`
- Questa keyword preceduta alla dichiarazione di una variabile, indica al compilatore che il valroe della variabile viene fornito dall'esterno del componente
- In altre parole dice a Svelte che questa variabile viene passata dal chiamante (a tutti gli effetti rendendo la variabile export come un parametro di una funzione in C)

Esempio

\`\`\`js
export let nome;  //dichiara la variabile nome come parametro fornito dal chiamante
export let cognome = "Rossi"; //variabile esterna con valore di feault Rossi
export let eta; //dichiara la variabile nome come parametro fornito dal chiamante
\`\`\`

<br>

- Il meccanismo delle \`Props\` di Svelte è molto potente e di facile utilizzo`,frontmatter:{},index:83,start:1313,end:1334,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:d3,meta:{slide:{raw:`
# SvelteKit

Props

- Pertanto riscriviamo il componente WhoAmI utilizzando le ***Props***

<br>
<img src="/media/svelte_034.png" class="mx-auto" width="700" />

<br>

- Abbiamo usato il *variable substitution di svelte* per utilizzare i parametri all'interno del corpo HTML del componente
`,title:"SvelteKit",level:1,content:`# SvelteKit

Props

- Pertanto riscriviamo il componente WhoAmI utilizzando le ***Props***

<br>
<img src="/media/svelte_034.png" class="mx-auto" width="700" />

<br>

- Abbiamo usato il *variable substitution di svelte* per utilizzare i parametri all'interno del corpo HTML del componente`,frontmatter:{},index:84,start:1335,end:1349,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:g3,meta:{slide:{raw:`
# SvelteKit

Props

<img src="/media/svelte_035.png" class="mx-auto" width="750" />

<br>
<Banner bg="green" fg="yellow">
Siccome non abbiamo modificato il chiamante, vengono utilizzati i valori di default per le props del componente
</Banner>
`,title:"SvelteKit",level:1,content:`# SvelteKit

Props

<img src="/media/svelte_035.png" class="mx-auto" width="750" />

<br>
<Banner bg="green" fg="yellow">
Siccome non abbiamo modificato il chiamante, vengono utilizzati i valori di default per le props del componente
</Banner>`,frontmatter:{},index:85,start:1350,end:1362,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:I3,meta:{slide:{raw:`
# SvelteKit

Props

- Modifichiamo ora il chiamante e cioè la pagina Chi Sono in modo da passare dei parametri corretti al componente WhoAmI
  
<br>
<img src="/media/svelte_036.png" class="mx-auto" width="750" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Props

- Modifichiamo ora il chiamante e cioè la pagina Chi Sono in modo da passare dei parametri corretti al componente WhoAmI
  
<br>
<img src="/media/svelte_036.png" class="mx-auto" width="750" />`,frontmatter:{},index:86,start:1363,end:1373,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:A3,meta:{slide:{raw:`
# SvelteKit

Props

<img src="/media/svelte_037.png" class="mx-auto" width="750" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Props

<img src="/media/svelte_037.png" class="mx-auto" width="750" />`,frontmatter:{},index:87,start:1374,end:1381,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:N3,meta:{slide:{raw:`
# SvelteKit

Props

- Cosa succede se chiamo due volte il componente WhoAmI dalla pagina Chi Sono?
- Quello che ci aspettiamo: vengono visualizzati due componenti ognuno con i propri parametri

<br>
<img src="/media/svelte_038.png" class="mx-auto" width="700" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Props

- Cosa succede se chiamo due volte il componente WhoAmI dalla pagina Chi Sono?
- Quello che ci aspettiamo: vengono visualizzati due componenti ognuno con i propri parametri

<br>
<img src="/media/svelte_038.png" class="mx-auto" width="700" />`,frontmatter:{},index:88,start:1382,end:1393,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:q3,meta:{slide:{raw:`
# SvelteKit

Props

<img src="/media/svelte_039.png" class="mx-auto" width="600" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Props

<img src="/media/svelte_039.png" class="mx-auto" width="600" />`,frontmatter:{},index:89,start:1394,end:1402,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:X3,meta:{slide:{raw:`
# SvelteKit

Dynamic Attributes

- Come abbiamo visti le props e variabili contenute in un componente possono essere utilizzate per generare del contenuto dinamico
- Tuttavia possono anche essere utilizzate come attributi dei tag HTML
- In questo caso Svelte parla di \`Dynamic Attributes\`
- Per esempio per definire il src di un immagine in modo dinamico si può fare così

\`\`\`html
<img src={url} >
\`\`\`
  
- In questo modo la sorgente dell'immagine non sarà statica ma dipenderà dal valore della variabile url
- Ovviamente cambiando il valore della variabile l'immagine verrà automaticamente aggiornata in modo dinamico

`,title:"SvelteKit",level:1,content:`# SvelteKit

Dynamic Attributes

- Come abbiamo visti le props e variabili contenute in un componente possono essere utilizzate per generare del contenuto dinamico
- Tuttavia possono anche essere utilizzate come attributi dei tag HTML
- In questo caso Svelte parla di \`Dynamic Attributes\`
- Per esempio per definire il src di un immagine in modo dinamico si può fare così

\`\`\`html
<img src={url} >
\`\`\`
  
- In questo modo la sorgente dell'immagine non sarà statica ma dipenderà dal valore della variabile url
- Ovviamente cambiando il valore della variabile l'immagine verrà automaticamente aggiornata in modo dinamico`,frontmatter:{},index:90,start:1403,end:1421,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:l6,meta:{slide:{raw:`
# SvelteKit

Dynamic Attributes

- Per comprendere meglio i ***Dynamic Attributes*** modifichiamo il componente WhoAmI aggiungendo la nostra foto

<img src="/media/svelte_040.png" class="mx-auto" width="700" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Dynamic Attributes

- Per comprendere meglio i ***Dynamic Attributes*** modifichiamo il componente WhoAmI aggiungendo la nostra foto

<img src="/media/svelte_040.png" class="mx-auto" width="700" />`,frontmatter:{},index:91,start:1422,end:1431,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:m6,meta:{slide:{raw:`
# SvelteKit

Dynamic Attributes

- Possiamo usare come dymanic attribute una variabile esterna

<img src="/media/svelte_041.png" class="mx-auto" width="700" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Dynamic Attributes

- Possiamo usare come dymanic attribute una variabile esterna

<img src="/media/svelte_041.png" class="mx-auto" width="700" />`,frontmatter:{},index:92,start:1432,end:1442,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:b6,meta:{slide:{raw:`
# SvelteKit

Dynamic Attributes


<img src="/media/svelte_042.png" class="mx-auto" width="550" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Dynamic Attributes


<img src="/media/svelte_042.png" class="mx-auto" width="550" />`,frontmatter:{},index:93,start:1443,end:1452,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:C6,meta:{slide:{raw:`
# SvelteKit

Dynamic Attributes: shorthand

- Prima abbiamo scritto

\`\`\`html
<img src={url} >
\`\`\`

- Immaginando che la variabile si chiami src, scriveremo

\`\`\`html
<img src={src} >
\`\`\`

- Questo risulta abbastanza ridondante, pertanto Svelte ci semplifica la vita mettendo a disposizione degli ***shorthand*** o delle scorciatoie
- Quindi in questo caso potremmo scrivere

\`\`\`html
<img {src} >
\`\`\`

- Pertanto le due notazioni sono perfettamente equivalenti e sortiscono lo stesso effetto

\`\`\`html
<img src={src} > vs <img {src} >
\`\`\`
`,title:"SvelteKit",level:1,content:`# SvelteKit

Dynamic Attributes: shorthand

- Prima abbiamo scritto

\`\`\`html
<img src={url} >
\`\`\`

- Immaginando che la variabile si chiami src, scriveremo

\`\`\`html
<img src={src} >
\`\`\`

- Questo risulta abbastanza ridondante, pertanto Svelte ci semplifica la vita mettendo a disposizione degli ***shorthand*** o delle scorciatoie
- Quindi in questo caso potremmo scrivere

\`\`\`html
<img {src} >
\`\`\`

- Pertanto le due notazioni sono perfettamente equivalenti e sortiscono lo stesso effetto

\`\`\`html
<img src={src} > vs <img {src} >
\`\`\``,frontmatter:{},index:94,start:1453,end:1483,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:L6,meta:{slide:{raw:`
# SvelteKit

Dynamic Attributes: Esercitazione_09

- Modificare il componente WhoAmI in modo da passare la larghezza dell'immagine come parametro
- Utilizzare lo shorthand per il dynamic attribute
`,title:"SvelteKit",level:1,content:`# SvelteKit

Dynamic Attributes: Esercitazione_09

- Modificare il componente WhoAmI in modo da passare la larghezza dell'immagine come parametro
- Utilizzare lo shorthand per il dynamic attribute`,frontmatter:{},index:95,start:1484,end:1492,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:F6,meta:{slide:{raw:`
# SvelteKit

Bindings

- refwdsqa

https://svelte.dev/tutorial/text-inputs

`,title:"SvelteKit",level:1,content:`# SvelteKit

Bindings

- refwdsqa

https://svelte.dev/tutorial/text-inputs`,frontmatter:{},index:96,start:1493,end:1503,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:Y6,meta:{slide:{raw:`
# SvelteKit

Bindings

- Come visto i dati e le props si propagano dall'alto al basso, dal componente chiamante verso il componente figlio
- Tuttavia spesso in un applicazione web è utile che questa propagazione possa avvenire nel verso opposto

<br>
<Banner fg="yellow" bg="green">
Il binding permette la propagazione del valore di una variabile di un componente al componente chiamante o padre
</Banner>

<br>

- Uno scenario classico è fare il binding della props di un input text ad una variabile del componente chiamante
- In questo modo sarà facilissimo ed immediato accedere al valore dell'input text (pensate quanto è macchinoso in vanilla JS)

`,title:"SvelteKit",level:1,content:`# SvelteKit

Bindings

- Come visto i dati e le props si propagano dall'alto al basso, dal componente chiamante verso il componente figlio
- Tuttavia spesso in un applicazione web è utile che questa propagazione possa avvenire nel verso opposto

<br>
<Banner fg="yellow" bg="green">
Il binding permette la propagazione del valore di una variabile di un componente al componente chiamante o padre
</Banner>

<br>

- Uno scenario classico è fare il binding della props di un input text ad una variabile del componente chiamante
- In questo modo sarà facilissimo ed immediato accedere al valore dell'input text (pensate quanto è macchinoso in vanilla JS)`,frontmatter:{},index:97,start:1504,end:1523,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:iK,meta:{slide:{raw:`
# SvelteKit

Binding: Esercitazione_10

- Per comprendere il meccanismo del binding abbiamo bisogno di una nuova pagina nella nostra app
- Creare una nuova pagina chiamata **Input**
- Creare il relativo menu nella barra nav e linkare la pagina

<br>
<img src="/media/svelte_043.png" class="mx-auto" width="650" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Binding: Esercitazione_10

- Per comprendere il meccanismo del binding abbiamo bisogno di una nuova pagina nella nostra app
- Creare una nuova pagina chiamata **Input**
- Creare il relativo menu nella barra nav e linkare la pagina

<br>
<img src="/media/svelte_043.png" class="mx-auto" width="650" />`,frontmatter:{},index:98,start:1524,end:1537,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:pK,meta:{slide:{raw:`
# SvelteKit

Bindings

- Ora modifichiamo la pafina input aggiungendo un input text box e creando un binding con una variabile

<br>
<img src="/media/svelte_044.png" class="mx-auto" width="400" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Bindings

- Ora modifichiamo la pafina input aggiungendo un input text box e creando un binding con una variabile

<br>
<img src="/media/svelte_044.png" class="mx-auto" width="400" />`,frontmatter:{},index:99,start:1538,end:1548,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:bK,meta:{slide:{raw:`
# SvelteKit

Bindings

<img src="/media/svelte_045.png" class="mx-auto" width="600" />

- Come si vede le variabili sono sostituite dal valore *undefined*
- Questo succede perchè abbiamo creato il binding tra il contenuto dei input text (undefined) e le variabili nome, cognome e eta
- Compilando i campi la pagina si aggiornerà in modo automatico e dinamico
- Anche in questo caso realizzare la stessa cosa in vanilla JS sarebbe molto più laborioso
`,title:"SvelteKit",level:1,content:`# SvelteKit

Bindings

<img src="/media/svelte_045.png" class="mx-auto" width="600" />

- Come si vede le variabili sono sostituite dal valore *undefined*
- Questo succede perchè abbiamo creato il binding tra il contenuto dei input text (undefined) e le variabili nome, cognome e eta
- Compilando i campi la pagina si aggiornerà in modo automatico e dinamico
- Anche in questo caso realizzare la stessa cosa in vanilla JS sarebbe molto più laborioso`,frontmatter:{},index:100,start:1549,end:1561,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:$K,meta:{slide:{raw:`
# SvelteKit

Bindings

<img src="/media/svelte_046.gif" class="mx-auto" width="700" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Bindings

<img src="/media/svelte_046.gif" class="mx-auto" width="700" />`,frontmatter:{},index:101,start:1562,end:1569,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:AK,meta:{slide:{raw:`
# SvelteKit

Bindings

<div style="width:50%;">

- Vediamo un altro esempio dell'uso del binding
- Modificare la pagina Input nel seguente modo
- In questo caso creiamo un binding tra la checkbox e la variabile *confermato*
- Poi settiamo tramite dynamic attributes l'attribute *disabled* del pulsante
- Pertanto il pulsante diventa attivo solo se l'utente ha confermato selezionando la checkbox

</div>

<img src="/media/svelte_047.png" class="mx-auto" width="450" style="position:relative;top: -300px;right:-250px;"/>

`,title:"SvelteKit",level:1,content:`# SvelteKit

Bindings

<div style="width:50%;">

- Vediamo un altro esempio dell'uso del binding
- Modificare la pagina Input nel seguente modo
- In questo caso creiamo un binding tra la checkbox e la variabile *confermato*
- Poi settiamo tramite dynamic attributes l'attribute *disabled* del pulsante
- Pertanto il pulsante diventa attivo solo se l'utente ha confermato selezionando la checkbox

</div>

<img src="/media/svelte_047.png" class="mx-auto" width="450" style="position:relative;top: -300px;right:-250px;"/>`,frontmatter:{},index:102,start:1570,end:1588,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:WK,meta:{slide:{raw:`
# SvelteKit

Bindings

<img src="/media/svelte_048.gif" class="mx-auto" width="700" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Bindings

<img src="/media/svelte_048.gif" class="mx-auto" width="700" />`,frontmatter:{},index:103,start:1589,end:1596,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:qK,meta:{slide:{raw:`
# SvelteKit

Binding: Esercitazione_11

- Modificare la pagina *Input* in modo che venga aggiunto un nuovo input text per legegre in input la residenza
- Utilizzare il meccanismo del binding

<br>
<img src="/media/svelte_049.png" class="mx-auto" width="800" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Binding: Esercitazione_11

- Modificare la pagina *Input* in modo che venga aggiunto un nuovo input text per legegre in input la residenza
- Utilizzare il meccanismo del binding

<br>
<img src="/media/svelte_049.png" class="mx-auto" width="800" />`,frontmatter:{},index:104,start:1597,end:1609,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:ZK,meta:{slide:{raw:`
# SvelteKit

Component Bindings

- refwdsqa

https://svelte.dev/tutorial/component-bindings


`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Bindings

- refwdsqa

https://svelte.dev/tutorial/component-bindings`,frontmatter:{},index:105,start:1610,end:1621,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:i5,meta:{slide:{raw:`
# SvelteKit

Logic Statements

- rfewds

https://svelte.dev/tutorial/if-blocks

`,title:"SvelteKit",level:1,content:`# SvelteKit

Logic Statements

- rfewds

https://svelte.dev/tutorial/if-blocks`,frontmatter:{},index:106,start:1622,end:1632,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:u5,meta:{slide:{raw:`
# SvelteKit

Each block

- rfewds

https://svelte.dev/tutorial/each-blocks


`,title:"SvelteKit",level:1,content:`# SvelteKit

Each block

- rfewds

https://svelte.dev/tutorial/each-blocks`,frontmatter:{},index:107,start:1633,end:1644,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:_5,meta:{slide:{raw:`
# SvelteKit

Advances Styling

- xxx

https://svelte.dev/tutorial/classes

`,title:"SvelteKit",level:1,content:`# SvelteKit

Advances Styling

- xxx

https://svelte.dev/tutorial/classes`,frontmatter:{},index:108,start:1645,end:1655,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:w5,meta:{slide:{raw:`
# SvelteKit

Reactivity

- xxx

https://svelte.dev/tutorial/reactive-assignments



`,title:"SvelteKit",level:1,content:`# SvelteKit

Reactivity

- xxx

https://svelte.dev/tutorial/reactive-assignments`,frontmatter:{},index:109,start:1656,end:1668,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:O5,meta:{slide:{raw:`
# SvelteKit

DOM Events

- erfcds

https://svelte.dev/tutorial/dom-events

`,title:"SvelteKit",level:1,content:`# SvelteKit

DOM Events

- erfcds

https://svelte.dev/tutorial/dom-events`,frontmatter:{},index:110,start:1669,end:1679,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:P5,meta:{slide:{raw:`
# SvelteKit

Component Events

- rfewd

https://svelte.dev/tutorial/component-events

`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Events

- rfewd

https://svelte.dev/tutorial/component-events`,frontmatter:{},index:111,start:1680,end:1690,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:N5,meta:{slide:{raw:`
# SvelteKit

Stores

- rfedwsa

https://svelte.dev/tutorial/writable-stores




`,title:"SvelteKit",level:1,content:`# SvelteKit

Stores

- rfedwsa

https://svelte.dev/tutorial/writable-stores`,frontmatter:{},index:112,start:1691,end:1704,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:B5,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd

`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd`,frontmatter:{},index:113,start:1705,end:1713,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:Y5,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd`,frontmatter:{},index:114,start:1714,end:1721,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:tL,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd`,frontmatter:{},index:115,start:1722,end:1729,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:lL,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd`,frontmatter:{},index:116,start:1730,end:1737,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",name:"page-118",component:dL,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd`,frontmatter:{},index:117,start:1738,end:1745,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:117,no:118},__clicksElements:[],__preloaded:!1}},{path:"119",name:"page-119",component:_L,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd`,frontmatter:{},index:118,start:1746,end:1753,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:118,no:119},__clicksElements:[],__preloaded:!1}},{path:"120",name:"page-120",component:SL,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd
- 
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd
-`,frontmatter:{},index:119,start:1754,end:1762,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:119,no:120},__clicksElements:[],__preloaded:!1}},{path:"121",name:"page-121",component:kL,meta:{slide:{raw:`
# BLANK

`,title:"BLANK",level:1,content:"# BLANK",frontmatter:{},index:120,start:1763,end:1767,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:120,no:121},__clicksElements:[],__preloaded:!1}},{path:"122",name:"page-122",component:TL,meta:{slide:{raw:`
# Svelte

Stateful component

- Uno dei problemi tradizionali dello sviluppo di app web è la gestione dello stato
- Questo problema è intrinseco in quanto il protcollo HTTP è **stateless** o senza stato
- Svelte risolve brillantemente questo problema permettendo di immagazzinare lo stato del componente direttamente all'interno del componente stesso
- Pertanto un componente Svelte è assimilabile a tutti gli effetti ad un oggetto in base alla definizione OOP
- Un componente svelte implementa il meccanismo del \`encapsulation\`
`,title:"Svelte",level:1,content:`# Svelte

Stateful component

- Uno dei problemi tradizionali dello sviluppo di app web è la gestione dello stato
- Questo problema è intrinseco in quanto il protcollo HTTP è **stateless** o senza stato
- Svelte risolve brillantemente questo problema permettendo di immagazzinare lo stato del componente direttamente all'interno del componente stesso
- Pertanto un componente Svelte è assimilabile a tutti gli effetti ad un oggetto in base alla definizione OOP
- Un componente svelte implementa il meccanismo del \`encapsulation\``,frontmatter:{},index:121,start:1768,end:1779,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:121,no:122},__clicksElements:[],__preloaded:!1}},{path:"123",name:"page-123",component:KL,meta:{slide:{raw:`
# Svelte

Stateful component

- Ogni componente, oltre a definire il markup, la logica CSS e JavaScript, può ospitare il proprio stato.
- Lo stato è un qualsiasi dato necessario per il corretto funzionamento del componente stesso e dell'applicazione
- Ad esempio, se un campo di input di un modulo contiene la stringa "test", ci sarà una variabile da qualche parte che contiene questo valore. 
- Questo è lo stato del campo di input.
- Il campo è selezionato? Una variabile da qualche parte registrerà questo fatto. E così via.
- Lo stato è ospitato nella sezione \`<script>\` del componente 

\`\`\`html
<script>
	let count = 0; // stato di un contatore
<\/script>
\`\`\`
`,title:"Svelte",level:1,content:`# Svelte

Stateful component

- Ogni componente, oltre a definire il markup, la logica CSS e JavaScript, può ospitare il proprio stato.
- Lo stato è un qualsiasi dato necessario per il corretto funzionamento del componente stesso e dell'applicazione
- Ad esempio, se un campo di input di un modulo contiene la stringa "test", ci sarà una variabile da qualche parte che contiene questo valore. 
- Questo è lo stato del campo di input.
- Il campo è selezionato? Una variabile da qualche parte registrerà questo fatto. E così via.
- Lo stato è ospitato nella sezione \`<script>\` del componente 

\`\`\`html
<script>
	let count = 0; // stato di un contatore
<\/script>
\`\`\``,frontmatter:{},index:122,start:1780,end:1798,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:122,no:123},__clicksElements:[],__preloaded:!1}},{path:"124",name:"page-124",component:DL,meta:{slide:{raw:`
# Svelte

Stateful component

- Ma come si aggiorna lo statro di un componente?
- Altri framework come Vue o React, rendono questa operazione poco intuitiva
- Al contrario una cosa grandiosa di Svelte è che non è necessario fare nulla di speciale per aggiornare lo stato di un componente.
- Basta solo un'operazione di assegnazione in qualsiasi parte del componente 

\`\`\`html
<script>
	let count = 0;

	function incrementa() {
		count++;
	}
<\/script>
\`\`\` 
`,title:"Svelte",level:1,content:`# Svelte

Stateful component

- Ma come si aggiorna lo statro di un componente?
- Altri framework come Vue o React, rendono questa operazione poco intuitiva
- Al contrario una cosa grandiosa di Svelte è che non è necessario fare nulla di speciale per aggiornare lo stato di un componente.
- Basta solo un'operazione di assegnazione in qualsiasi parte del componente 

\`\`\`html
<script>
	let count = 0;

	function incrementa() {
		count++;
	}
<\/script>
\`\`\``,frontmatter:{},index:123,start:1799,end:1819,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:123,no:124},__clicksElements:[],__preloaded:!1}},{path:"125",name:"page-125",component:QL,meta:{slide:{raw:`
# Svelte

Stateful component

- Vediamo un esempio completo

<img src="/media/svelte_12.png" class="centro" />

- Anche in questo caso l'applicazione è solo <br> un contenitore per i componenti che implementano <br> la UI e le funzionalità desiderate	
  `,title:"Svelte",level:1,content:`# Svelte

Stateful component

- Vediamo un esempio completo

<img src="/media/svelte_12.png" class="centro" />

- Anche in questo caso l'applicazione è solo <br> un contenitore per i componenti che implementano <br> la UI e le funzionalità desiderate`,frontmatter:{},index:124,start:1820,end:1831,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:124,no:125},__clicksElements:[],__preloaded:!1}},{path:"126",name:"page-126",component:iR,meta:{slide:{raw:`
# Svelte

Stateful component

<img src="/media/svelte_13.png" class="centro" />

- Ad ogni pressione del bottone viene invocata <br> una funzione (metodo) interno del componente
- Il metodo incrementa la variabile di <br> stato del contatore
- Come detto in precedenza, lo stato di <br> un componente Svelte si modifica con <br> una semplice assegnazione
- Più intuitivo di così non è proprio possibile :)

<br>
<div style="background-color:green;color:yellow;padding: 20px;width:50%;">
Per modificare lo stato di un componente è SEMPRE necessario effettuare un'operazione di assegnamento
</div>
`,title:"Svelte",level:1,content:`# Svelte

Stateful component

<img src="/media/svelte_13.png" class="centro" />

- Ad ogni pressione del bottone viene invocata <br> una funzione (metodo) interno del componente
- Il metodo incrementa la variabile di <br> stato del contatore
- Come detto in precedenza, lo stato di <br> un componente Svelte si modifica con <br> una semplice assegnazione
- Più intuitivo di così non è proprio possibile :)

<br>
<div style="background-color:green;color:yellow;padding: 20px;width:50%;">
Per modificare lo stato di un componente è SEMPRE necessario effettuare un'operazione di assegnamento
</div>`,frontmatter:{},index:125,start:1832,end:1849,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:125,no:126},__clicksElements:[],__preloaded:!1}},{path:"127",name:"page-127",component:uR,meta:{slide:{raw:`
# Svelte

Stateful component

<img src="/media/svelte_14.png" class="mx-auto w-300" />

`,title:"Svelte",level:1,content:`# Svelte

Stateful component

<img src="/media/svelte_14.png" class="mx-auto w-300" />`,frontmatter:{},index:126,start:1850,end:1858,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:126,no:127},__clicksElements:[],__preloaded:!1}},{path:"128",name:"page-128",component:hR,meta:{slide:{raw:`
# Svelte

Esercizio svelte_03

- Implementare l'applicazione ed il componente Contatore visti a lezione
- Aggiungere anche la funzionalità di decremento del contatore
- *Consgenare tutta la directory |cognome|_svelte_03 ad escusione della sub-directory node_modules*
`,title:"Svelte",level:1,content:`# Svelte

Esercizio svelte_03

- Implementare l'applicazione ed il componente Contatore visti a lezione
- Aggiungere anche la funzionalità di decremento del contatore
- *Consgenare tutta la directory |cognome|_svelte_03 ad escusione della sub-directory node_modules*`,frontmatter:{},index:127,start:1859,end:1868,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:127,no:128},__clicksElements:[],__preloaded:!1}},{path:"129",name:"page-129",component:wR,meta:{slide:{raw:`
# Svelte

todoS WebApp

- Sviluppiamo una SPA WebApp che permette di gestire una ToDo List personale
- Lo scopo è di capire ed applicare vari concetti introdotti da Svelte

SPECIFICA di todoS

- L'applicazione todoS permette la gestione di una todo list personale
- L'utente deve essere in grado di:
  - inserire nuovi todo
  - modificare todo esistenit
  - eliminare todo esistenti
  - per ogni todo è possibile specificare un titolo ed una prioprità a scelta tra:
    - HIGH
    - MED
    - LOW
`,title:"Svelte",level:1,content:`# Svelte

todoS WebApp

- Sviluppiamo una SPA WebApp che permette di gestire una ToDo List personale
- Lo scopo è di capire ed applicare vari concetti introdotti da Svelte

SPECIFICA di todoS

- L'applicazione todoS permette la gestione di una todo list personale
- L'utente deve essere in grado di:
  - inserire nuovi todo
  - modificare todo esistenit
  - eliminare todo esistenti
  - per ogni todo è possibile specificare un titolo ed una prioprità a scelta tra:
    - HIGH
    - MED
    - LOW`,frontmatter:{},index:128,start:1869,end:1889,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:128,no:129},__clicksElements:[],__preloaded:!1}},{path:"130",component:h2,meta:{layout:"end"}}],Qe=xR,ri=[{name:"play",path:"/",component:Hk,children:[...Qe]},{name:"print",path:"/print",component:p2},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!ai.remote||ai.remote===t.query.password)return!0;if(ai.remote&&t.query.password===void 0){const n=prompt("Enter password");if(ai.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};ri.push({path:"/presenter/print",component:()=>Mn(()=>import("./PresenterPrint-274893ac.js"),["assets/PresenterPrint-274893ac.js","assets/NoteDisplay-07010136.js"])}),ri.push({name:"notes",path:"/notes",component:()=>Mn(()=>import("./NotesView-760dba35.js"),["assets/NotesView-760dba35.js","assets/NoteDisplay-07010136.js"]),beforeEnter:e}),ri.push({name:"presenter",path:"/presenter/:no",component:()=>Mn(()=>import("./Presenter-2c8c98cc.js"),["assets/Presenter-2c8c98cc.js","assets/NoteDisplay-07010136.js","assets/DrawingControls-14b57082.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:e}),ri.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const yt=wy({history:Sb("/TPSI/4/svelte/"),routes:ri});function kR(e,t,{mode:n="replace"}={}){return R({get(){const o=yt.currentRoute.value.query[e];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){it(()=>{yt[M(n)]({query:{...yt.currentRoute.value.query,[e]:o}})})}})}const Zm=G(0);it(()=>{yt.afterEach(async()=>{await it(),Zm.value+=1})});const Xm=G(0),Wt=R(()=>yt.currentRoute.value),Ro=R(()=>Wt.value.query.print!==void 0),$R=R(()=>Wt.value.query.print==="clicks"),pn=R(()=>Wt.value.query.embedded!==void 0),vt=R(()=>Wt.value.path.startsWith("/presenter")),IR=R(()=>Wt.value.path.startsWith("/notes")),vi=R(()=>Ro.value&&!$R.value),Na=R(()=>Wt.value.query.password),zR=R(()=>!vt.value&&(!Oe.remote||Na.value===Oe.remote)),Du=kR("clicks","0"),OR=R(()=>Qe.length-1),TR=R(()=>Wt.value.path),qe=R(()=>parseInt(TR.value.split(/\//g).slice(-1)[0])||1);R(()=>ml(qe.value));const dt=R(()=>Qe.find(e=>e.path===`${qe.value}`));R(()=>{var e,t,n;return(n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});R(()=>{var e,t;return((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.layout)||(qe.value===1?"cover":"default")});const Hl=R(()=>Qe.find(e=>e.path===`${Math.min(Qe.length,qe.value+1)}`)),ER=R(()=>Qe.find(e=>e.path===`${Math.max(1,qe.value-1)}`)),CR=R(()=>{var e,t;return Zm.value,((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Lt=R({get(){if(vi.value)return 99999;let e=+(Du.value||0);return isNaN(e)&&(e=0),e},set(e){Du.value=e.toString()}}),Bs=R(()=>{var e,t;return+(((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.clicks)??CR.value.length)}),AR=R(()=>qe.value<Qe.length-1||Lt.value<Bs.value),MR=R(()=>qe.value>1||Lt.value>0),PR=R(()=>Qe.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Pr(e,t),e),[])),KR=R(()=>Kr(PR.value,dt.value));R(()=>Lr(KR.value));const LR=R(()=>DR(Xm.value,dt.value,ER.value));ve(dt,(e,t)=>{Xm.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Kn(){Bs.value<=Lt.value?Pi():Lt.value+=1}async function Ln(){Lt.value<=0?await Ki():Lt.value-=1}function ml(e){return vt.value?`/presenter/${e}`:`/${e}`}function Pi(){const e=Math.min(Qe.length,qe.value+1);return Wo(e)}async function Ki(e=!0){const t=Math.max(1,qe.value-1);await Wo(t),e&&Bs.value&&yt.replace({query:{...Wt.value.query,clicks:Bs.value}})}function Wo(e,t){return yt.push({path:ml(e),query:{...Wt.value.query,clicks:t}})}function RR(e){const t=G(0),{direction:n,distanceX:o,distanceY:s}=j0(e,{onSwipeStart(l){l.pointerType==="touch"&&(Ci.value||(t.value=Sa()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||Ci.value)return;const a=Math.abs(o.value),r=Math.abs(s.value);a/window.innerWidth>.3||a>100?n.value==="left"?Kn():Ln():(r/window.innerHeight>.4||r>200)&&(n.value==="down"?Ki():Pi())}})}async function Da(){const{saveAs:e}=await Mn(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);e(typeof Oe.download=="string"?Oe.download:Oe.exportFilename?`${Oe.exportFilename}.pdf`:"/TPSI/4/svelte/slidev-exported.pdf",`${Oe.title}.pdf`)}async function WR(e){var t,n;if(e==null){const o=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Pr(e,t,n=1){var s,l,a,r,c;const o=(l=(s=t.meta)==null?void 0:s.slide)==null?void 0:l.level;o&&o>n&&e.length>0?Pr(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((a=t.meta)!=null&&a.hideInToc),title:(c=(r=t.meta)==null?void 0:r.slide)==null?void 0:c.title})}function Kr(e,t,n=!1,o){return e.map(s=>{const l={...s,active:s.path===(t==null?void 0:t.path),hasActiveParent:n};return l.children.length>0&&(l.children=Kr(l.children,t,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function Lr(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Lr(n.children,t+1)}))}const HR={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function NR(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:HR[e.name]||e.name;if(n.includes("|")){const[o,s]=n.split("|").map(l=>l.trim());n=t?s:o}if(n)return{...e,name:n}}function DR(e,t,n){var s,l;let o=e>0?(s=n==null?void 0:n.meta)==null?void 0:s.transition:(l=t==null?void 0:t.meta)==null?void 0:l.transition;return o||(o=Oe.transition),NR(o,e<0)}function FR(){const e=Oe.titleTemplate.replace("%s",Oe.title||"Slidev");Fp({title:e,htmlAttrs:Oe.htmlAttrs}),b1(`${e} - shared`),x1(`${e} - drawings`);const t=`${location.origin}_${m1()}`;function n(){IR.value||!vt.value&&!p1.includes(location.host.split(":")[0])||(vt.value?(Qo("page",+qe.value),Qo("clicks",Lt.value)):(Qo("viewerPage",+qe.value),Qo("viewerClicks",Lt.value)),Qo("lastUpdate",{id:t,type:vt.value?"presenter":"viewer",time:new Date().getTime()}))}yt.afterEach(n),ve(Lt,n),y1(o=>{var l;yt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=o.lastUpdate)==null?void 0:l.type)==="presenter"&&(+o.page!=+qe.value||+Lt.value!=+o.clicks)&&yt.replace({path:ml(o.page),query:{...yt.currentRoute.value.query,clicks:o.clicks||0}})})}const jR=Me({__name:"App",setup(e){return I(O),FR(),(t,n)=>{const o=Ms("RouterView"),s=Ms("StarportCarrier");return g(),ie(Ee,null,[Q(o),Q(s)],64)}}}),VR=T(jR,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/App.vue"]]);function Nl(e){return e!==null&&typeof e=="object"}function Fa(e,t,n=".",o){if(!Nl(t))return Fa(e,{},n,o);const s=Object.assign({},t);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const a=e[l];a!=null&&(o&&o(s,l,a,n)||(Array.isArray(a)&&Array.isArray(s[l])?s[l]=[...a,...s[l]]:Nl(a)&&Nl(s[l])?s[l]=Fa(a,s[l],(n?`${n}.`:"")+l.toString(),o):s[l]=a))}return s}function BR(e){return(...t)=>t.reduce((n,o)=>Fa(n,o,"",e),{})}const qR=BR(),ef=1/60*1e3,UR=typeof performance<"u"?()=>performance.now():()=>Date.now(),tf=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(UR()),ef);function JR(e){let t=[],n=[],o=0,s=!1,l=!1;const a=new WeakSet,r={schedule:(c,u=!1,p=!1)=>{const m=p&&s,f=m?t:n;return u&&a.add(c),f.indexOf(c)===-1&&(f.push(c),m&&s&&(o=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),a.delete(c)},process:c=>{if(s){l=!0;return}if(s=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const p=t[u];p(c),a.has(p)&&(r.schedule(p),e())}s=!1,l&&(l=!1,r.process(c))}};return r}const QR=40;let ja=!0,Li=!1,Va=!1;const Po={delta:0,timestamp:0},qi=["read","update","preRender","render","postRender"],fl=qi.reduce((e,t)=>(e[t]=JR(()=>Li=!0),e),{}),Ba=qi.reduce((e,t)=>{const n=fl[t];return e[t]=(o,s=!1,l=!1)=>(Li||ZR(),n.schedule(o,s,l)),e},{}),YR=qi.reduce((e,t)=>(e[t]=fl[t].cancel,e),{});qi.reduce((e,t)=>(e[t]=()=>fl[t].process(Po),e),{});const GR=e=>fl[e].process(Po),nf=e=>{Li=!1,Po.delta=ja?ef:Math.max(Math.min(e-Po.timestamp,QR),1),Po.timestamp=e,Va=!0,qi.forEach(GR),Va=!1,Li&&(ja=!1,tf(nf))},ZR=()=>{Li=!0,ja=!0,Va||tf(nf)},of=()=>Po;function sf(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]]);return n}var Rr=function(){},Ri=function(){};Rr=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Ri=function(e,t){if(!e)throw new Error(t)};const qa=(e,t,n)=>Math.min(Math.max(n,e),t),Dl=.001,XR=.01,Fu=10,e8=.05,t8=1;function n8({duration:e=800,bounce:t=.25,velocity:n=0,mass:o=1}){let s,l;Rr(e<=Fu*1e3,"Spring duration must be 10 seconds or less");let a=1-t;a=qa(e8,t8,a),e=qa(XR,Fu,e/1e3),a<1?(s=u=>{const p=u*a,m=p*e,f=p-n,h=Ua(u,a),_=Math.exp(-m);return Dl-f/h*_},l=u=>{const m=u*a*e,f=m*n+n,h=Math.pow(a,2)*Math.pow(u,2)*e,_=Math.exp(-m),S=Ua(Math.pow(u,2),a);return(-s(u)+Dl>0?-1:1)*((f-h)*_)/S}):(s=u=>{const p=Math.exp(-u*e),m=(u-n)*e+1;return-Dl+p*m},l=u=>{const p=Math.exp(-u*e),m=(n-u)*(e*e);return p*m});const r=5/e,c=i8(s,l,r);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:e}}}const o8=12;function i8(e,t,n){let o=n;for(let s=1;s<o8;s++)o=o-e(o)/t(o);return o}function Ua(e,t){return e*Math.sqrt(1-t*t)}const s8=["duration","bounce"],l8=["stiffness","damping","mass"];function ju(e,t){return t.some(n=>e[n]!==void 0)}function a8(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!ju(e,l8)&&ju(e,s8)){const n=n8(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Wr(e){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:s}=e,l=sf(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:r,damping:c,mass:u,velocity:p,duration:m,isResolvedFromDuration:f}=a8(l),h=Vu,_=Vu;function S(){const w=p?-(p/1e3):0,x=n-t,k=c/(2*Math.sqrt(r*u)),b=Math.sqrt(r/u)/1e3;if(s===void 0&&(s=Math.min(Math.abs(n-t)/100,.4)),k<1){const A=Ua(b,k);h=E=>{const P=Math.exp(-k*b*E);return n-P*((w+k*b*x)/A*Math.sin(A*E)+x*Math.cos(A*E))},_=E=>{const P=Math.exp(-k*b*E);return k*b*P*(Math.sin(A*E)*(w+k*b*x)/A+x*Math.cos(A*E))-P*(Math.cos(A*E)*(w+k*b*x)-A*x*Math.sin(A*E))}}else if(k===1)h=A=>n-Math.exp(-b*A)*(x+(w+b*x)*A);else{const A=b*Math.sqrt(k*k-1);h=E=>{const P=Math.exp(-k*b*E),j=Math.min(A*E,300);return n-P*((w+k*b*x)*Math.sinh(j)+A*x*Math.cosh(j))/A}}}return S(),{next:w=>{const x=h(w);if(f)a.done=w>=m;else{const k=_(w)*1e3,b=Math.abs(k)<=o,A=Math.abs(n-x)<=s;a.done=b&&A}return a.value=a.done?n:x,a},flipTarget:()=>{p=-p,[t,n]=[n,t],S()}}}Wr.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Vu=e=>0,lf=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},Hr=(e,t,n)=>-n*e+n*t+e,af=(e,t)=>n=>Math.max(Math.min(n,t),e),gi=e=>e%1?Number(e.toFixed(5)):e,Wi=/(-)?([\d]*\.?[\d])+/g,Ja=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,r8=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ui(e){return typeof e=="string"}const Ji={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},bi=Object.assign(Object.assign({},Ji),{transform:af(0,1)}),ps=Object.assign(Object.assign({},Ji),{default:1}),Nr=e=>({test:t=>Ui(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Un=Nr("deg"),yi=Nr("%"),be=Nr("px"),Bu=Object.assign(Object.assign({},yi),{parse:e=>yi.parse(e)/100,transform:e=>yi.transform(e*100)}),Dr=(e,t)=>n=>!!(Ui(n)&&r8.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),rf=(e,t,n)=>o=>{if(!Ui(o))return o;const[s,l,a,r]=o.match(Wi);return{[e]:parseFloat(s),[t]:parseFloat(l),[n]:parseFloat(a),alpha:r!==void 0?parseFloat(r):1}},lo={test:Dr("hsl","hue"),parse:rf("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+yi.transform(gi(t))+", "+yi.transform(gi(n))+", "+gi(bi.transform(o))+")"},c8=af(0,255),Fl=Object.assign(Object.assign({},Ji),{transform:e=>Math.round(c8(e))}),On={test:Dr("rgb","red"),parse:rf("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+Fl.transform(e)+", "+Fl.transform(t)+", "+Fl.transform(n)+", "+gi(bi.transform(o))+")"};function u8(e){let t="",n="",o="",s="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),o=e.substr(5,2),s=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),o=e.substr(3,1),s=e.substr(4,1),t+=t,n+=n,o+=o,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:s?parseInt(s,16)/255:1}}const Qa={test:Dr("#"),parse:u8,transform:On.transform},_t={test:e=>On.test(e)||Qa.test(e)||lo.test(e),parse:e=>On.test(e)?On.parse(e):lo.test(e)?lo.parse(e):Qa.parse(e),transform:e=>Ui(e)?e:e.hasOwnProperty("red")?On.transform(e):lo.transform(e)},cf="${c}",uf="${n}";function d8(e){var t,n,o,s;return isNaN(e)&&Ui(e)&&((n=(t=e.match(Wi))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((s=(o=e.match(Ja))===null||o===void 0?void 0:o.length)!==null&&s!==void 0?s:0)>0}function df(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const o=e.match(Ja);o&&(n=o.length,e=e.replace(Ja,cf),t.push(...o.map(_t.parse)));const s=e.match(Wi);return s&&(e=e.replace(Wi,uf),t.push(...s.map(Ji.parse))),{values:t,numColors:n,tokenised:e}}function pf(e){return df(e).values}function mf(e){const{values:t,numColors:n,tokenised:o}=df(e),s=t.length;return l=>{let a=o;for(let r=0;r<s;r++)a=a.replace(r<n?cf:uf,r<n?_t.transform(l[r]):gi(l[r]));return a}}const p8=e=>typeof e=="number"?0:e;function m8(e){const t=pf(e);return mf(e)(t.map(p8))}const Qi={test:d8,parse:pf,createTransformer:mf,getAnimatableNone:m8},f8=new Set(["brightness","contrast","saturate","opacity"]);function h8(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Wi)||[];if(!o)return e;const s=n.replace(o,"");let l=f8.has(t)?1:0;return o!==n&&(l*=100),t+"("+l+s+")"}const _8=/([a-z-]*)\(.*?\)/g,Ya=Object.assign(Object.assign({},Qi),{getAnimatableNone:e=>{const t=e.match(_8);return t?t.map(h8).join(" "):e}});function jl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function qu({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let s=0,l=0,a=0;if(!t)s=l=a=n;else{const r=n<.5?n*(1+t):n+t-n*t,c=2*n-r;s=jl(c,r,e+1/3),l=jl(c,r,e),a=jl(c,r,e-1/3)}return{red:Math.round(s*255),green:Math.round(l*255),blue:Math.round(a*255),alpha:o}}const v8=(e,t,n)=>{const o=e*e,s=t*t;return Math.sqrt(Math.max(0,n*(s-o)+o))},g8=[Qa,On,lo],Uu=e=>g8.find(t=>t.test(e)),Ju=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,ff=(e,t)=>{let n=Uu(e),o=Uu(t);Ri(!!n,Ju(e)),Ri(!!o,Ju(t));let s=n.parse(e),l=o.parse(t);n===lo&&(s=qu(s),n=On),o===lo&&(l=qu(l),o=On);const a=Object.assign({},s);return r=>{for(const c in a)c!=="alpha"&&(a[c]=v8(s[c],l[c],r));return a.alpha=Hr(s.alpha,l.alpha,r),n.transform(a)}},b8=e=>typeof e=="number",y8=(e,t)=>n=>t(e(n)),hf=(...e)=>e.reduce(y8);function _f(e,t){return b8(e)?n=>Hr(e,t,n):_t.test(e)?ff(e,t):gf(e,t)}const vf=(e,t)=>{const n=[...e],o=n.length,s=e.map((l,a)=>_f(l,t[a]));return l=>{for(let a=0;a<o;a++)n[a]=s[a](l);return n}},S8=(e,t)=>{const n=Object.assign(Object.assign({},e),t),o={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(o[s]=_f(e[s],t[s]));return s=>{for(const l in o)n[l]=o[l](s);return n}};function Qu(e){const t=Qi.parse(e),n=t.length;let o=0,s=0,l=0;for(let a=0;a<n;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?l++:s++;return{parsed:t,numNumbers:o,numRGB:s,numHSL:l}}const gf=(e,t)=>{const n=Qi.createTransformer(t),o=Qu(e),s=Qu(t);return o.numHSL===s.numHSL&&o.numRGB===s.numRGB&&o.numNumbers>=s.numNumbers?hf(vf(o.parsed,s.parsed),n):(Rr(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?t:e}`)},w8=(e,t)=>n=>Hr(e,t,n);function x8(e){if(typeof e=="number")return w8;if(typeof e=="string")return _t.test(e)?ff:gf;if(Array.isArray(e))return vf;if(typeof e=="object")return S8}function k8(e,t,n){const o=[],s=n||x8(e[0]),l=e.length-1;for(let a=0;a<l;a++){let r=s(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;r=hf(c,r)}o.push(r)}return o}function $8([e,t],[n]){return o=>n(lf(e,t,o))}function I8(e,t){const n=e.length,o=n-1;return s=>{let l=0,a=!1;if(s<=e[0]?a=!0:s>=e[o]&&(l=o-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>s||c===o);c++);l=c-1}const r=lf(e[l],e[l+1],s);return t[l](r)}}function bf(e,t,{clamp:n=!0,ease:o,mixer:s}={}){const l=e.length;Ri(l===t.length,"Both input and output ranges must be the same length"),Ri(!o||!Array.isArray(o)||o.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=k8(t,o,s),r=l===2?$8(e,a):I8(e,a);return n?c=>r(qa(e[0],e[l-1],c)):r}const hl=e=>t=>1-e(1-t),Fr=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,z8=e=>t=>Math.pow(t,e),yf=e=>t=>t*t*((e+1)*t-e),O8=e=>{const t=yf(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Sf=1.525,T8=4/11,E8=8/11,C8=9/10,wf=e=>e,jr=z8(2),A8=hl(jr),xf=Fr(jr),kf=e=>1-Math.sin(Math.acos(e)),$f=hl(kf),M8=Fr($f),Vr=yf(Sf),P8=hl(Vr),K8=Fr(Vr),L8=O8(Sf),R8=4356/361,W8=35442/1805,H8=16061/1805,qs=e=>{if(e===1||e===0)return e;const t=e*e;return e<T8?7.5625*t:e<E8?9.075*t-9.9*e+3.4:e<C8?R8*t-W8*e+H8:10.8*e*e-20.52*e+10.72},N8=hl(qs),D8=e=>e<.5?.5*(1-qs(1-e*2)):.5*qs(e*2-1)+.5;function F8(e,t){return e.map(()=>t||xf).splice(0,e.length-1)}function j8(e){const t=e.length;return e.map((n,o)=>o!==0?o/(t-1):0)}function V8(e,t){return e.map(n=>n*t)}function Ss({from:e=0,to:t=1,ease:n,offset:o,duration:s=300}){const l={done:!1,value:e},a=Array.isArray(t)?t:[e,t],r=V8(o&&o.length===a.length?o:j8(a),s);function c(){return bf(r,a,{ease:Array.isArray(n)?n:F8(a,n)})}let u=c();return{next:p=>(l.value=u(p),l.done=p>=s,l),flipTarget:()=>{a.reverse(),u=c()}}}function B8({velocity:e=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:s=.5,modifyTarget:l}){const a={done:!1,value:t};let r=n*e;const c=t+r,u=l===void 0?c:l(c);return u!==c&&(r=u-t),{next:p=>{const m=-r*Math.exp(-p/o);return a.done=!(m>s||m<-s),a.value=a.done?u:u+m,a},flipTarget:()=>{}}}const Yu={keyframes:Ss,spring:Wr,decay:B8};function q8(e){if(Array.isArray(e.to))return Ss;if(Yu[e.type])return Yu[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Ss:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Wr:Ss}function If(e,t,n=0){return e-t-n}function U8(e,t,n=0,o=!0){return o?If(t+-e,t,n):t-(e-t)+n}function J8(e,t,n,o){return o?e>=t+n:e<=-n}const Q8=e=>{const t=({delta:n})=>e(n);return{start:()=>Ba.update(t,!0),stop:()=>YR.update(t)}};function zf(e){var t,n,{from:o,autoplay:s=!0,driver:l=Q8,elapsed:a=0,repeat:r=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:m,onComplete:f,onRepeat:h,onUpdate:_}=e,S=sf(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:w}=S,x,k=0,b=S.duration,A,E=!1,P=!0,j;const L=q8(S);!((n=(t=L).needsInterpolation)===null||n===void 0)&&n.call(t,o,w)&&(j=bf([0,100],[o,w],{clamp:!1}),o=0,w=100);const q=L(Object.assign(Object.assign({},S),{from:o,to:w}));function se(){k++,c==="reverse"?(P=k%2===0,a=U8(a,b,u,P)):(a=If(a,b,u),c==="mirror"&&q.flipTarget()),E=!1,h&&h()}function de(){x.stop(),f&&f()}function Z(ge){if(P||(ge=-ge),a+=ge,!E){const Se=q.next(Math.max(0,a));A=Se.value,j&&(A=j(A)),E=P?Se.done:a<=0}_==null||_(A),E&&(k===0&&(b??(b=a)),k<r?J8(a,b,u,P)&&se():de())}function _e(){p==null||p(),x=l(Z),x.start()}return s&&_e(),{stop:()=>{m==null||m(),x.stop()}}}function Of(e,t){return t?e*(1e3/t):0}function Y8({from:e=0,velocity:t=0,min:n,max:o,power:s=.8,timeConstant:l=750,bounceStiffness:a=500,bounceDamping:r=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:m,onComplete:f,onStop:h}){let _;function S(b){return n!==void 0&&b<n||o!==void 0&&b>o}function w(b){return n===void 0?o:o===void 0||Math.abs(n-b)<Math.abs(o-b)?n:o}function x(b){_==null||_.stop(),_=zf(Object.assign(Object.assign({},b),{driver:p,onUpdate:A=>{var E;m==null||m(A),(E=b.onUpdate)===null||E===void 0||E.call(b,A)},onComplete:f,onStop:h}))}function k(b){x(Object.assign({type:"spring",stiffness:a,damping:r,restDelta:c},b))}if(S(e))k({from:e,velocity:t,to:w(e)});else{let b=s*t+e;typeof u<"u"&&(b=u(b));const A=w(b),E=A===n?-1:1;let P,j;const L=q=>{P=j,j=q,t=Of(q-P,of().delta),(E===1&&q>A||E===-1&&q<A)&&k({from:q,to:A,velocity:t})};x({type:"decay",from:e,velocity:t,timeConstant:l,power:s,restDelta:c,modifyTarget:u,onUpdate:S(b)?L:void 0})}return{stop:()=>_==null?void 0:_.stop()}}const Tf=(e,t)=>1-3*t+3*e,Ef=(e,t)=>3*t-6*e,Cf=e=>3*e,Us=(e,t,n)=>((Tf(t,n)*e+Ef(t,n))*e+Cf(t))*e,Af=(e,t,n)=>3*Tf(t,n)*e*e+2*Ef(t,n)*e+Cf(t),G8=1e-7,Z8=10;function X8(e,t,n,o,s){let l,a,r=0;do a=t+(n-t)/2,l=Us(a,o,s)-e,l>0?n=a:t=a;while(Math.abs(l)>G8&&++r<Z8);return a}const eW=8,tW=.001;function nW(e,t,n,o){for(let s=0;s<eW;++s){const l=Af(t,n,o);if(l===0)return t;const a=Us(t,n,o)-e;t-=a/l}return t}const ws=11,ms=1/(ws-1);function oW(e,t,n,o){if(e===t&&n===o)return wf;const s=new Float32Array(ws);for(let a=0;a<ws;++a)s[a]=Us(a*ms,e,n);function l(a){let r=0,c=1;const u=ws-1;for(;c!==u&&s[c]<=a;++c)r+=ms;--c;const p=(a-s[c])/(s[c+1]-s[c]),m=r+p*ms,f=Af(m,e,n);return f>=tW?nW(a,m,e,n):f===0?m:X8(a,r,r+ms,e,n)}return a=>a===0||a===1?a:Us(l(a),t,o)}const Vl={};class iW{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(this.subscriptions.size)for(const s of this.subscriptions)s(t,n,o)}clear(){this.subscriptions.clear()}}function Gu(e){return!isNaN(parseFloat(e))}class sW{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new iW,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:s}=of();this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s),Ba.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ba.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Gu(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Gu(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Of(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function lW(e){return new sW(e)}const{isArray:aW}=Array;function rW(){const e=G({}),t=o=>{const s=l=>{e.value[l]&&(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};o?aW(o)?o.forEach(s):s(o):Object.keys(e.value).forEach(s)},n=(o,s,l)=>{if(e.value[o])return e.value[o];const a=lW(s);return a.onChange(r=>l[o]=r),e.value[o]=a,a};return B1(t),{motionValues:e,get:n,stop:t}}function cW(e){return Array.isArray(e)}function Jn(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Bl(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function uW(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function ql(){return{type:"keyframes",ease:"linear",duration:300}}function dW(e){return{type:"keyframes",duration:800,values:e}}const Zu={default:uW,x:Jn,y:Jn,z:Jn,rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scaleX:Bl,scaleY:Bl,scale:Bl,backgroundColor:ql,color:ql,opacity:ql};function Mf(e,t){let n;return cW(t)?n=dW:n=Zu[e]||Zu.default,{to:t,...n(t)}}const Xu={...Ji,transform:Math.round},Pf={color:_t,backgroundColor:_t,outlineColor:_t,fill:_t,stroke:_t,borderColor:_t,borderTopColor:_t,borderRightColor:_t,borderBottomColor:_t,borderLeftColor:_t,borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,size:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,rotate:Un,rotateX:Un,rotateY:Un,rotateZ:Un,scale:ps,scaleX:ps,scaleY:ps,scaleZ:ps,skew:Un,skewX:Un,skewY:Un,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:bi,originX:Bu,originY:Bu,originZ:be,zIndex:Xu,filter:Ya,WebkitFilter:Ya,fillOpacity:bi,strokeOpacity:bi,numOctaves:Xu},Br=e=>Pf[e];function Kf(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function pW(e,t){let n=Br(e);return n!==Ya&&(n=Qi),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const mW={linear:wf,easeIn:jr,easeInOut:xf,easeOut:A8,circIn:kf,circInOut:M8,circOut:$f,backIn:Vr,backInOut:K8,backOut:P8,anticipate:L8,bounceIn:N8,bounceInOut:D8,bounceOut:qs};function ed(e){if(Array.isArray(e)){const[t,n,o,s]=e;return oW(t,n,o,s)}else if(typeof e=="string")return mW[e];return e}function fW(e){return Array.isArray(e)&&typeof e[0]!="number"}function td(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Qi.test(t)&&!t.startsWith("url("))}function hW(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function _W({ease:e,times:t,delay:n,...o}){const s={...o};return t&&(s.offset=t),e&&(s.ease=fW(e)?e.map(ed):ed(e)),n&&(s.elapsed=-n),s}function vW(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),hW(t),gW(e)||(e={...e,...Mf(n,t.to)}),{...t,..._W(e)}}function gW({delay:e,repeat:t,repeatType:n,repeatDelay:o,from:s,...l}){return!!Object.keys(l).length}function bW(e,t){return e[t]||e.default||e}function yW(e,t,n,o,s){const l=bW(o,e);let a=l.from===null||l.from===void 0?t.get():l.from;const r=td(e,n);a==="none"&&r&&typeof n=="string"&&(a=pW(e,n));const c=td(e,a);function u(m){const f={from:a,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return l.type==="inertia"||l.type==="decay"?Y8({...f,...l}):zf({...vW(l,f,e),onUpdate:h=>{f.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),s&&s(),m&&m()}})}function p(m){return t.set(n),o.onComplete&&o.onComplete(),s&&s(),m&&m(),{stop:()=>{}}}return!c||!r||l.type===!1?p:u}function SW(){const{motionValues:e,stop:t,get:n}=rW();return{motionValues:e,stop:t,push:(s,l,a,r={},c)=>{const u=a[s],p=n(s,u,a);if(r&&r.immediate){p.set(l);return}const m=yW(s,p,l,r,c);p.start(m)}}}function wW(e,t={},{motionValues:n,push:o,stop:s}=SW()){const l=M(t),a=G(!1);ve(n,m=>{a.value=Object.values(m).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const r=m=>{if(!l||!l[m])throw new Error(`The variant ${m} does not exist.`);return l[m]},c=m=>(typeof m=="string"&&(m=r(m)),Promise.all(Object.entries(m).map(([f,h])=>{if(f!=="transition")return new Promise(_=>o(f,h,e,m.transition||Mf(f,m[f]),_))}).filter(Boolean)));return{isAnimating:a,apply:c,set:m=>{const f=ya(m)?m:r(m);Object.entries(f).forEach(([h,_])=>{h!=="transition"&&o(h,_,e,{immediate:!0})})},leave:async m=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){m();return}await c(f),m()},stop:s}}const qr=typeof window<"u",xW=()=>qr&&window.onpointerdown===null,kW=()=>qr&&window.ontouchstart===null,$W=()=>qr&&window.onmousedown===null;function IW({target:e,state:t,variants:n,apply:o}){const s=M(n),l=G(!1),a=G(!1),r=G(!1),c=R(()=>{let p=[];return s&&(s.hovered&&(p=[...p,...Object.keys(s.hovered)]),s.tapped&&(p=[...p,...Object.keys(s.tapped)]),s.focused&&(p=[...p,...Object.keys(s.focused)])),p}),u=R(()=>{const p={};Object.assign(p,t.value),l.value&&s.hovered&&Object.assign(p,s.hovered),a.value&&s.tapped&&Object.assign(p,s.tapped),r.value&&s.focused&&Object.assign(p,s.focused);for(const m in p)c.value.includes(m)||delete p[m];return p});s.hovered&&(we(e,"mouseenter",()=>l.value=!0),we(e,"mouseleave",()=>{l.value=!1,a.value=!1}),we(e,"mouseout",()=>{l.value=!1,a.value=!1})),s.tapped&&($W()&&(we(e,"mousedown",()=>a.value=!0),we(e,"mouseup",()=>a.value=!1)),xW()&&(we(e,"pointerdown",()=>a.value=!0),we(e,"pointerup",()=>a.value=!1)),kW()&&(we(e,"touchstart",()=>a.value=!0),we(e,"touchend",()=>a.value=!1))),s.focused&&(we(e,"focus",()=>r.value=!0),we(e,"blur",()=>r.value=!1)),ve(u,o)}function zW({set:e,target:t,variants:n,variant:o}){const s=M(n);ve(()=>t,()=>{s&&(s.initial&&e("initial"),s.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function OW({state:e,apply:t}){ve(e,n=>{n&&t(n)},{immediate:!0})}function TW({target:e,variants:t,variant:n}){const o=M(t);o&&(o.visible||o.visibleOnce)&&W0(e,([{isIntersecting:s}])=>{o.visible?s?n.value="visible":n.value="initial":o.visibleOnce&&(s&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function EW(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&zW(e),t.syncVariants&&OW(e),t.visibilityHooks&&TW(e),t.eventListeners&&IW(e)}function Lf(e={}){const t=Ve({...e}),n=G({});return ve(t,()=>{const o={};for(const[s,l]of Object.entries(t)){const a=Br(s),r=Kf(l,a);o[s]=r}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}function Ur(e,t){ve(()=>st(e),n=>{n&&t(n)},{immediate:!0})}const CW={x:"translateX",y:"translateY",z:"translateZ"};function Rf(e={},t=!0){const n=Ve({...e}),o=G("");return ve(n,s=>{let l="",a=!1;if(t&&(s.x||s.y||s.z)){const r=[s.x||0,s.y||0,s.z||0].map(be.transform).join(",");l+=`translate3d(${r}) `,a=!0}for(const[r,c]of Object.entries(s)){if(t&&(r==="x"||r==="y"||r==="z"))continue;const u=Br(r),p=Kf(c,u);l+=`${CW[r]||r}(${p}) `}t&&!a&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}const AW=["","X","Y","Z"],MW=["perspective","translate","scale","rotate","skew"],Wf=["transformPerspective","x","y","z"];MW.forEach(e=>{AW.forEach(t=>{const n=e+t;Wf.push(n)})});const PW=new Set(Wf);function Jr(e){return PW.has(e)}const KW=new Set(["originX","originY","originZ"]);function Hf(e){return KW.has(e)}function LW(e){const t={},n={};return Object.entries(e).forEach(([o,s])=>{Jr(o)||Hf(o)?t[o]=s:n[o]=s}),{transform:t,style:n}}function Nf(e){const{transform:t,style:n}=LW(e),{transform:o}=Rf(t),{style:s}=Lf(n);return o.value&&(s.value.transform=o.value),s.value}function RW(e,t){let n,o;const{state:s,style:l}=Lf();return Ur(e,a=>{o=a;for(const r of Object.keys(Pf))a.style[r]===null||a.style[r]===""||Jr(r)||Hf(r)||(s[r]=a.style[r]);n&&Object.entries(n).forEach(([r,c])=>a.style[r]=c),t&&t(s)}),ve(l,a=>{if(!o){n=a;return}for(const r in a)o.style[r]=a[r]},{immediate:!0}),{style:s}}function WW(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,s)=>{if(!s)return o;const[l,a]=s.split("("),c=a.split(",").map(p=>n(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...o,[l]:u}},{})}function HW(e,t){Object.entries(WW(t)).forEach(([n,o])=>{const s=["x","y","z"];if(n==="translate3d"){if(o===0){s.forEach(l=>e[l]=0);return}o.forEach((l,a)=>e[s[a]]=l);return}if(o=parseFloat(o),n==="translateX"){e.x=o;return}if(n==="translateY"){e.y=o;return}if(n==="translateZ"){e.z=o;return}e[n]=o})}function NW(e,t){let n,o;const{state:s,transform:l}=Rf();return Ur(e,a=>{o=a,a.style.transform&&HW(s,a.style.transform),n&&(a.style.transform=n),t&&t(s)}),ve(l,a=>{if(!o){n=a;return}o.style.transform=a},{immediate:!0}),{transform:s}}function DW(e,t){const n=Ve({}),o=a=>Object.entries(a).forEach(([r,c])=>n[r]=c),{style:s}=RW(e,o),{transform:l}=NW(e,o);return ve(n,a=>{Object.entries(a).forEach(([r,c])=>{const u=Jr(r)?l:s;u[r]&&u[r]===c||(u[r]=c)})},{immediate:!0,deep:!0}),Ur(e,()=>t&&o(t)),{motionProperties:n,style:s,transform:l}}function FW(e={}){const t=M(e),n=G();return{state:R(()=>{if(n.value)return t[n.value]}),variant:n}}function Df(e,t={},n){const{motionProperties:o}=DW(e),{variant:s,state:l}=FW(t),a=wW(o,t),r={target:e,variant:s,variants:t,state:l,motionProperties:o,...a};return EW(r,n),r}const jW=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function VW(e,t){const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&ya(n.variants)&&(t.value={...t.value,...n.variants}),jW.forEach(o=>{if(o==="delay"){if(n&&n[o]&&typeof n[o]=="number"){const s=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:s,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:s,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:s,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&ya(n[o])&&(t.value[o]=n[o])}))}function Ul(e){return{created:(n,o,s)=>{const l=o.value&&typeof o.value=="string"?o.value:s.key;l&&Vl[l]&&Vl[l].stop();const a=G(e||{});typeof o.value=="object"&&(a.value=o.value),VW(s,a);const r=Df(n,a);n.motionInstance=r,l&&(Vl[l]=r)},getSSRProps(n,o){let{initial:s}=n.value||o&&(o==null?void 0:o.props)||{};s=M(s);const l=qR((e==null?void 0:e.initial)||{},s||{});return!l||Object.keys(l).length===0?void 0:{style:Nf(l)}}}}const BW={initial:{opacity:0},enter:{opacity:1}},qW={initial:{opacity:0},visible:{opacity:1}},UW={initial:{opacity:0},visibleOnce:{opacity:1}},JW={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},QW={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},YW={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},GW={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},ZW={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},XW={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},eH={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},tH={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},nH={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},oH={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},iH={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},sH={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},lH={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},aH={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},rH={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},cH={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},uH={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},dH={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},pH={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},mH={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},fH={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},hH={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},_H={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},vH={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},gH={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},bH={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},yH={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ga={__proto__:null,fade:BW,fadeVisible:qW,fadeVisibleOnce:UW,pop:JW,popVisible:QW,popVisibleOnce:YW,rollBottom:lH,rollLeft:GW,rollRight:eH,rollTop:oH,rollVisibleBottom:aH,rollVisibleLeft:ZW,rollVisibleOnceBottom:rH,rollVisibleOnceLeft:XW,rollVisibleOnceRight:nH,rollVisibleOnceTop:sH,rollVisibleRight:tH,rollVisibleTop:iH,slideBottom:gH,slideLeft:cH,slideRight:pH,slideTop:hH,slideVisibleBottom:bH,slideVisibleLeft:uH,slideVisibleOnceBottom:yH,slideVisibleOnceLeft:dH,slideVisibleOnceRight:fH,slideVisibleOnceTop:vH,slideVisibleRight:mH,slideVisibleTop:_H},SH=Me({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var r;const t=D_(),n=Ve({});if(!e.is&&!t.default)return()=>St("div",{});const o=R(()=>{let c;return e.preset&&(c=Ga[e.preset]),c}),s=R(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=R(()=>{const c={...s.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=R(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!yd(c)&&(c=Ms(c)),c});if(((r=process==null?void 0:process.env)==null?void 0:r.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var p;(p=u.variants)!=null&&p.initial&&u.set("initial"),setTimeout(()=>{var m,f,h;(m=u.variants)!=null&&m.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};al(()=>Object.entries(n).forEach(([u,p])=>c(p)))}return{slots:t,component:a,motionConfig:l,instances:n}},render({slots:e,motionConfig:t,instances:n,component:o}){var r;const s=Nf(t.initial||{}),l=(c,u)=>(c.props||(c.props={}),c.props.style=s,c.props.onVnodeMounted=({el:p})=>{const m=Df(p,t);n[u]=m},c);if(o){const c=St(o,void 0,e);return l(c,0),c}return(((r=e.default)==null?void 0:r.call(e))||[]).map((c,u)=>l(c,u))}});function wH(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,s=>`-${s}`).toLowerCase().replace(/\s+/g,"-").replace(o,s=>n.charAt(t.indexOf(s))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const xH={install(e,t){if(e.directive("motion",Ul()),e.component("Motion",SH),!t||t&&!t.excludePresets)for(const n in Ga){const o=Ga[n];e.directive(`motion-${wH(n)}`,Ul(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,e.directive(`motion-${n}`,Ul(o))}}};var nd;const Si=typeof window<"u",kH=Object.prototype.toString,$H=e=>kH.call(e)==="[object Object]";Si&&((nd=window==null?void 0:window.navigator)!=null&&nd.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function IH(e){return or()?(kd(e),!0):!1}function zH(e){var t;const n=M(e);return(t=n==null?void 0:n.$el)!=null?t:n}const OH=Si?window:void 0,od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},id="__vueuse_ssr_handlers__";od[id]=od[id]||{};function TH(e,t={}){const{immediate:n=!0,window:o=OH}=t,s=G(!1);let l=null;function a(){!s.value||!o||(e(),l=o.requestAnimationFrame(a))}function r(){!s.value&&o&&(s.value=!0,a())}function c(){s.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return n&&r(),IH(c),{isActive:s,pause:c,resume:r}}var sd;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(sd||(sd={}));const _l="vue-starport-injection",Ff="vue-starport-options",EH={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},jf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var CH=Object.defineProperty,Js=Object.getOwnPropertySymbols,Vf=Object.prototype.hasOwnProperty,Bf=Object.prototype.propertyIsEnumerable,ld=(e,t,n)=>t in e?CH(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,AH=(e,t)=>{for(var n in t||(t={}))Vf.call(t,n)&&ld(e,n,t[n]);if(Js)for(var n of Js(t))Bf.call(t,n)&&ld(e,n,t[n]);return e},ad=(e,t)=>{var n={};for(var o in e)Vf.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Js)for(var o of Js(e))t.indexOf(o)<0&&Bf.call(e,o)&&(n[o]=e[o]);return n};const MH=Me({name:"StarportProxy",props:AH({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},jf),setup(e,t){const n=I(_l),o=R(()=>n.getInstance(e.port,e.component)),s=G(),l=o.value.generateId(),a=G(!1);return o.value.isVisible||(o.value.land(),a.value=!0),bn(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=s.value,await it(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const r=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${r} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Fi(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await it(),await it(),!o.value.el&&n.dispose(o.value.port))}),ve(()=>e,async()=>{o.value.props&&await it();const r=e,{props:c}=r,u=ad(r,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const r=e,{initialProps:c,mountedProps:u}=r,p=ad(r,["initialProps","mountedProps"]),m=Te(p,(a.value?u:c)||{});return St("div",Te(m,{id:l,ref:s,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?St(t.slots.default):void 0)}}});var PH=Object.defineProperty,KH=Object.defineProperties,LH=Object.getOwnPropertyDescriptors,rd=Object.getOwnPropertySymbols,RH=Object.prototype.hasOwnProperty,WH=Object.prototype.propertyIsEnumerable,cd=(e,t,n)=>t in e?PH(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,HH=(e,t)=>{for(var n in t||(t={}))RH.call(t,n)&&cd(e,n,t[n]);if(rd)for(var n of rd(t))WH.call(t,n)&&cd(e,n,t[n]);return e},NH=(e,t)=>KH(e,LH(t));const DH=Me({name:"Starport",inheritAttrs:!0,props:jf,setup(e,t){const n=G(!1);return bn(()=>{if(n.value=!0,!I(_l))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,r;const o=(r=(a=t.slots).default)==null?void 0:r.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const s=o[0];let l=s.type;return(!$H(l)||Hn(l))&&(l={render(){return o}}),St(MH,NH(HH({},e),{key:e.port,component:el(l),props:s.props}))}}});function FH(e){const t=Ve({height:0,width:0,left:0,top:0,update:o,listen:l,pause:a,margin:"0px",padding:"0px"}),n=Si?document.documentElement||document.body:void 0;function o(){if(!Si)return;const r=zH(e);if(!r)return;const{height:c,width:u,left:p,top:m}=r.getBoundingClientRect(),f=window.getComputedStyle(r),h=f.margin,_=f.padding;Object.assign(t,{height:c,width:u,left:p,top:n.scrollTop+m,margin:h,padding:_})}const s=TH(o,{immediate:!1});function l(){Si&&(o(),s.resume())}function a(){s.pause()}return t}let jH=(e,t=21)=>(n=t)=>{let o="",s=n;for(;s--;)o+=e[Math.random()*e.length|0];return o};const ud=jH("abcdefghijklmnopqrstuvwxyz",5);function dd(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function VH(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var BH=Object.defineProperty,pd=Object.getOwnPropertySymbols,qH=Object.prototype.hasOwnProperty,UH=Object.prototype.propertyIsEnumerable,md=(e,t,n)=>t in e?BH(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jl=(e,t)=>{for(var n in t||(t={}))qH.call(t,n)&&md(e,n,t[n]);if(pd)for(var n of pd(t))UH.call(t,n)&&md(e,n,t[n]);return e};function JH(e,t,n={}){const o=VH(t),s=dd(o)||ud(),l=G(),a=G(null),r=G(!1),c=G(!1),u=ch(!0),p=G({}),m=R(()=>Jl(Jl(Jl({},EH),n),p.value)),f=G(0);let h;u.run(()=>{h=FH(l),ve(l,async x=>{x&&(c.value=!0),await it(),l.value||(c.value=!1)})});const _=dd(e);function S(){return`starport-${s}-${_}-${ud()}`}const w=S();return Ve({el:l,id:w,port:e,props:a,rect:h,scope:u,isLanded:r,isVisible:c,options:m,liftOffTime:f,component:t,componentName:o,componentId:s,generateId:S,setLocalOptions(x={}){p.value=JSON.parse(JSON.stringify(x))},elRef(){return l},liftOff(){r.value&&(r.value=!1,f.value=Date.now(),h.listen())},land(){r.value||(r.value=!0,h.pause())}})}function QH(e){const t=Ve(new Map);function n(s,l){let a=t.get(s);return a||(a=JH(s,l,e),t.set(s,a)),a.component=l,a}function o(s){var l;(l=t.get(s))==null||l.scope.stop(),t.delete(s)}return{portMap:t,dispose:o,getInstance:n}}var YH=Object.defineProperty,GH=Object.defineProperties,ZH=Object.getOwnPropertyDescriptors,fd=Object.getOwnPropertySymbols,XH=Object.prototype.hasOwnProperty,e9=Object.prototype.propertyIsEnumerable,hd=(e,t,n)=>t in e?YH(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,t9=(e,t)=>{for(var n in t||(t={}))XH.call(t,n)&&hd(e,n,t[n]);if(fd)for(var n of fd(t))e9.call(t,n)&&hd(e,n,t[n]);return e},n9=(e,t)=>GH(e,ZH(t));const o9=Me({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=I(_l);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=R(()=>t.getInstance(e.port,e.component)),o=R(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),s=R(()=>{const a=Date.now()-n.value.liftOffTime,r=Math.max(0,n.value.options.duration-a),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?n9(t9({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${r}ms`,transitionTimingFunction:n.value.options.easing}),u)}),l={onTransitionend(a){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const a=!!(n.value.isLanded&&n.value.el);return St("div",{style:s.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},St(hv,{to:a?`#${o.value}`:"body",disabled:!a},St(n.value.component,Te(l,n.value.props))))}}}),i9=Me({name:"StarportCarrier",setup(e,{slots:t}){const n=QH(I(Ff,{}));return wt().appContext.app.provide(_l,n),()=>{var s;return[(s=t.default)==null?void 0:s.call(t),Array.from(n.portMap.entries()).map(([l,{component:a}])=>St(o9,{key:l,port:l,component:a}))]}}});function s9(e={}){return{install(t){t.provide(Ff,e),t.component("Starport",DH),t.component("StarportCarrier",i9)}}}function l9(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(xH),e.app.use(s9({keepAlive:!0}))}function xt(e,t,n){var o;return((o=e.instance)==null?void 0:o.$).provides[t]??n}function a9(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var p,m,f,h,_,S;if(vi.value||(p=xt(n,mi))!=null&&p.value)return;const o=xt(n,eo),s=xt(n,pi),l=xt(n,ga),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,r=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((m=o==null?void 0:o.value)==null?void 0:m.length)||0,u=r?d1:Ol;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),n.value==null&&(n.value=(h=o==null?void 0:o.value)==null?void 0:h.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((_=o==null?void 0:o.value)==null?void 0:_.length)||0)+Number(n.value)),!(l!=null&&l.value.has(n.value)))l==null||l.value.set(n.value,[t]);else if(!((S=l==null?void 0:l.value.get(n.value))!=null&&S.includes(t))){const w=(l==null?void 0:l.value.get(n.value))||[];l==null||l.value.set(n.value,[t].concat(w))}t==null||t.classList.toggle(Yn,!0),s&&ve(s,()=>{const w=(s==null?void 0:s.value)??0,x=n.value!=null?w>=n.value:w>c;t.classList.contains(Tl)||t.classList.toggle(u,!x),a!==!1&&a!==void 0&&t.classList.toggle(u,x),t.classList.toggle(Jo,!1);const k=l==null?void 0:l.value.get(w);k==null||k.forEach((b,A)=>{b.classList.toggle(ls,!1),A===k.length-1?b.classList.toggle(Jo,!0):b.classList.toggle(ls,!0)}),t.classList.contains(Jo)||t.classList.toggle(ls,x)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Yn,!1);const o=xt(n,eo);o!=null&&o.value&&ba(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var r,c,u;if(vi.value||(r=xt(n,mi))!=null&&r.value)return;const o=xt(n,eo),s=xt(n,pi),l=xt(n,ga),a=o==null?void 0:o.value.length;n.value==null&&(n.value=o==null?void 0:o.value.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((c=o==null?void 0:o.value)==null?void 0:c.length)||0)+Number(n.value)),l!=null&&l.value.has(n.value)?(u=l==null?void 0:l.value.get(n.value))==null||u.push(t):l==null||l.value.set(n.value,[t]),t==null||t.classList.toggle(Yn,!0),s&&ve(s,()=>{const p=(s.value??0)>=(n.value??a??0);t.classList.contains(Tl)||t.classList.toggle(Ol,!p),t.classList.toggle(Jo,!1),t.classList.contains(Jo)||t.classList.toggle(ls,p)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Yn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,r,c;if(vi.value||(a=xt(n,mi))!=null&&a.value)return;const o=xt(n,eo),s=xt(n,pi),l=((r=o==null?void 0:o.value)==null?void 0:r.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Yn,!0),s&&ve(s,()=>{const u=(s==null?void 0:s.value)??0,p=n.value!=null?u>=n.value:u>l;t.classList.toggle(Ol,p),t.classList.toggle(Tl,p)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Yn,!1);const o=xt(n,eo);o!=null&&o.value&&ba(o.value,t)}})}}}function r9(e,t){const n=Qm(e),o=Ym(t,n.currentRoute,n.currentPage);return{nav:{...n,...o},configs:Oe,themeConfigs:R(()=>Oe.themeConfig)}}function c9(){return{install(e){const t=r9(Wt,Lt);e.provide(O,Ve(t))}}}const Fo=fg(VR);Fo.use(yt);Fo.use(r1());Fo.use(a9());Fo.use(c9());l9({app:Fo,router:yt});Fo.mount("#app");export{Lk as $,Jx as A,G as B,h9 as C,dt as D,Be as E,Ee as F,hS as G,RR as H,Lt as I,Bs as J,AR as K,Hl as L,bn as M,Ve as N,m9 as O,_9 as P,ve as Q,$ as R,Om as S,Ce as T,ut as U,OS as V,u9 as W,d9 as X,Ci as Y,Kl as Z,T as _,O as a,Tr as a0,Er as a1,qe as a2,$k as a3,Tw as a4,p9 as a5,qt as a6,ti as a7,so as a8,en as a9,Ca as aa,nS as ab,oS as ac,iS as ad,lS as ae,np as af,Ap as ag,v9 as ah,ft as ai,ds as aj,ux as ak,jp as al,aS as am,Fi as an,Fp as b,Oe as c,Me as d,Jh as e,ie as f,i as g,M as h,I as i,Qe as j,OR as k,d as l,Q as m,tt as n,g as o,ye as p,xr as q,Ho as r,Jt as s,gt as t,f9 as u,R as v,El as w,z as x,ym as y,Xx as z};
