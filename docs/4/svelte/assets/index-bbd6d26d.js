(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Fn(e,t){const n=Object.create(null),o=e.split(",");for(let i=0;i<o.length;i++)n[o[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const He=Object.freeze({}),To=Object.freeze([]),bt=()=>{},vd=()=>!1,qm=/^on[^a-z]/,Hi=e=>qm.test(e),xs=e=>e.startsWith("onUpdate:"),Ne=Object.assign,Za=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Um=Object.prototype.hasOwnProperty,$e=(e,t)=>Um.call(e,t),re=Array.isArray,ao=e=>Ni(e)==="[object Map]",_d=e=>Ni(e)==="[object Set]",Jm=e=>Ni(e)==="[object RegExp]",pe=e=>typeof e=="function",De=e=>typeof e=="string",Ga=e=>typeof e=="symbol",Ce=e=>e!==null&&typeof e=="object",Xa=e=>Ce(e)&&pe(e.then)&&pe(e.catch),gd=Object.prototype.toString,Ni=e=>gd.call(e),er=e=>Ni(e).slice(8,-1),bd=e=>Ni(e)==="[object Object]",tr=e=>De(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ms=Fn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ym=Fn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Ys=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qm=/-(\w)/g,nn=Ys(e=>e.replace(Qm,(t,n)=>n?n.toUpperCase():"")),Zm=/\B([A-Z])/g,vn=Ys(e=>e.replace(Zm,"-$1").toLowerCase()),vo=Ys(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yn=Ys(e=>e?`on${vo(e)}`:""),Si=(e,t)=>!Object.is(e,t),Zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ks=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Gm=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Xm=e=>{const t=De(e)?Number(e):NaN;return isNaN(t)?e:t};let Gr;const $s=()=>Gr||(Gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tt(e){if(re(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],i=De(o)?oh(o):tt(o);if(i)for(const l in i)t[l]=i[l]}return t}else{if(De(e))return e;if(Ce(e))return e}}const eh=/;(?![^(]*\))/g,th=/:([^]+)/,nh=/\/\*[^]*?\*\//g;function oh(e){const t={};return e.replace(nh,"").split(eh).forEach(n=>{if(n){const o=n.split(th);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Be(e){let t="";if(De(e))t=e;else if(re(e))for(let n=0;n<e.length;n++){const o=Be(e[n]);o&&(t+=o+" ")}else if(Ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function N(e){if(!e)return null;let{class:t,style:n}=e;return t&&!De(t)&&(e.class=Be(t)),n&&(e.style=tt(n)),e}const ih="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",sh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",yd=Fn(ih),lh=Fn(sh),ah="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rh=Fn(ah);function wd(e){return!!e||e===""}const gt=e=>De(e)?e:e==null?"":re(e)||Ce(e)&&(e.toString===gd||!pe(e.toString))?JSON.stringify(e,Sd,2):String(e),Sd=(e,t)=>t&&t.__v_isRef?Sd(e,t.value):ao(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,i])=>(n[`${o} =>`]=i,n),{})}:_d(t)?{[`Set(${t.size})`]:[...t.values()]}:Ce(t)&&!re(t)&&!bd(t)?String(t):t;function Is(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let $t;class xd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!t&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=$t;try{return $t=this,t()}finally{$t=n}}else Is("cannot run an inactive effect scope.")}on(){$t=this}off(){$t=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ch(e){return new xd(e)}function uh(e,t=$t){t&&t.active&&t.effects.push(e)}function nr(){return $t}function kd(e){$t?$t.cleanups.push(e):Is("onScopeDispose() is called when there is no active effect scope to be associated with.")}const or=e=>{const t=new Set(e);return t.w=0,t.n=0,t},$d=e=>(e.w&Rn)>0,Id=e=>(e.n&Rn)>0,dh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Rn},ph=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const i=t[o];$d(i)&&!Id(i)?i.delete(e):t[n++]=i,i.w&=~Rn,i.n&=~Rn}t.length=n}},Os=new WeakMap;let ni=0,Rn=1;const Jl=30;let pt;const ro=Symbol("iterate"),Yl=Symbol("Map key iterate");class ir{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,uh(this,o)}run(){if(!this.active)return this.fn();let t=pt,n=En;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=pt,pt=this,En=!0,Rn=1<<++ni,ni<=Jl?dh(this):Xr(this),this.fn()}finally{ni<=Jl&&ph(this),Rn=1<<--ni,pt=this.parent,En=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pt===this?this.deferStop=!0:this.active&&(Xr(this),this.onStop&&this.onStop(),this.active=!1)}}function Xr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let En=!0;const Od=[];function go(){Od.push(En),En=!1}function bo(){const e=Od.pop();En=e===void 0?!0:e}function at(e,t,n){if(En&&pt){let o=Os.get(e);o||Os.set(e,o=new Map);let i=o.get(n);i||o.set(n,i=or()),zd(i,{effect:pt,target:e,type:t,key:n})}}function zd(e,t){let n=!1;ni<=Jl?Id(e)||(e.n|=Rn,n=!$d(e)):n=!e.has(pt),n&&(e.add(pt),pt.deps.push(e),pt.onTrack&&pt.onTrack(Ne({effect:pt},t)))}function on(e,t,n,o,i,l){const a=Os.get(e);if(!a)return;let r=[];if(t==="clear")r=[...a.values()];else if(n==="length"&&re(e)){const u=Number(o);a.forEach((d,f)=>{(f==="length"||f>=u)&&r.push(d)})}else switch(n!==void 0&&r.push(a.get(n)),t){case"add":re(e)?tr(n)&&r.push(a.get("length")):(r.push(a.get(ro)),ao(e)&&r.push(a.get(Yl)));break;case"delete":re(e)||(r.push(a.get(ro)),ao(e)&&r.push(a.get(Yl)));break;case"set":ao(e)&&r.push(a.get(ro));break}const c={target:e,type:t,key:n,newValue:o,oldValue:i,oldTarget:l};if(r.length===1)r[0]&&Ql(r[0],c);else{const u=[];for(const d of r)d&&u.push(...d);Ql(or(u),c)}}function Ql(e,t){const n=re(e)?e:[...e];for(const o of n)o.computed&&ec(o,t);for(const o of n)o.computed||ec(o,t)}function ec(e,t){(e!==pt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ne({effect:e},t)),e.scheduler?e.scheduler():e.run())}function fh(e,t){var n;return(n=Os.get(e))==null?void 0:n.get(t)}const mh=Fn("__proto__,__v_isRef,__isVue"),Ed=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ga)),hh=Qs(),vh=Qs(!1,!0),_h=Qs(!0),gh=Qs(!0,!0),tc=bh();function bh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=he(this);for(let l=0,a=this.length;l<a;l++)at(o,"get",l+"");const i=o[t](...n);return i===-1||i===!1?o[t](...n.map(he)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){go();const o=he(this)[t].apply(this,n);return bo(),o}}),e}function yh(e){const t=he(this);return at(t,"has",e),t.hasOwnProperty(e)}function Qs(e=!1,t=!1){return function(o,i,l){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&l===(e?t?Rd:Ld:t?Kd:Pd).get(o))return o;const a=re(o);if(!e){if(a&&$e(tc,i))return Reflect.get(tc,i,l);if(i==="hasOwnProperty")return yh}const r=Reflect.get(o,i,l);return(Ga(i)?Ed.has(i):mh(i))||(e||at(o,"get",i),t)?r:Te(r)?a&&tr(i)?r:r.value:Ce(r)?e?Vt(r):je(r):r}}const wh=Td(),Sh=Td(!0);function Td(e=!1){return function(n,o,i,l){let a=n[o];if(Wn(a)&&Te(a)&&!Te(i))return!1;if(!e&&(!zs(i)&&!Wn(i)&&(a=he(a),i=he(i)),!re(n)&&Te(a)&&!Te(i)))return a.value=i,!0;const r=re(n)&&tr(o)?Number(o)<n.length:$e(n,o),c=Reflect.set(n,o,i,l);return n===he(l)&&(r?Si(i,a)&&on(n,"set",o,i,a):on(n,"add",o,i)),c}}function xh(e,t){const n=$e(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&on(e,"delete",t,void 0,o),i}function kh(e,t){const n=Reflect.has(e,t);return(!Ga(t)||!Ed.has(t))&&at(e,"has",t),n}function $h(e){return at(e,"iterate",re(e)?"length":ro),Reflect.ownKeys(e)}const Cd={get:hh,set:wh,deleteProperty:xh,has:kh,ownKeys:$h},Ad={get:_h,set(e,t){return Is(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Is(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Ih=Ne({},Cd,{get:vh,set:Sh}),Oh=Ne({},Ad,{get:gh}),sr=e=>e,Zs=e=>Reflect.getPrototypeOf(e);function Qi(e,t,n=!1,o=!1){e=e.__v_raw;const i=he(e),l=he(t);n||(t!==l&&at(i,"get",t),at(i,"get",l));const{has:a}=Zs(i),r=o?sr:n?lr:xi;if(a.call(i,t))return r(e.get(t));if(a.call(i,l))return r(e.get(l));e!==i&&e.get(t)}function Zi(e,t=!1){const n=this.__v_raw,o=he(n),i=he(e);return t||(e!==i&&at(o,"has",e),at(o,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Gi(e,t=!1){return e=e.__v_raw,!t&&at(he(e),"iterate",ro),Reflect.get(e,"size",e)}function nc(e){e=he(e);const t=he(this);return Zs(t).has.call(t,e)||(t.add(e),on(t,"add",e,e)),this}function oc(e,t){t=he(t);const n=he(this),{has:o,get:i}=Zs(n);let l=o.call(n,e);l?Md(n,o,e):(e=he(e),l=o.call(n,e));const a=i.call(n,e);return n.set(e,t),l?Si(t,a)&&on(n,"set",e,t,a):on(n,"add",e,t),this}function ic(e){const t=he(this),{has:n,get:o}=Zs(t);let i=n.call(t,e);i?Md(t,n,e):(e=he(e),i=n.call(t,e));const l=o?o.call(t,e):void 0,a=t.delete(e);return i&&on(t,"delete",e,void 0,l),a}function sc(){const e=he(this),t=e.size!==0,n=ao(e)?new Map(e):new Set(e),o=e.clear();return t&&on(e,"clear",void 0,void 0,n),o}function Xi(e,t){return function(o,i){const l=this,a=l.__v_raw,r=he(a),c=t?sr:e?lr:xi;return!e&&at(r,"iterate",ro),a.forEach((u,d)=>o.call(i,c(u),c(d),l))}}function es(e,t,n){return function(...o){const i=this.__v_raw,l=he(i),a=ao(l),r=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=i[e](...o),d=n?sr:t?lr:xi;return!t&&at(l,"iterate",c?Yl:ro),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:r?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function yn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${vo(e)} operation ${n}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function zh(){const e={get(l){return Qi(this,l)},get size(){return Gi(this)},has:Zi,add:nc,set:oc,delete:ic,clear:sc,forEach:Xi(!1,!1)},t={get(l){return Qi(this,l,!1,!0)},get size(){return Gi(this)},has:Zi,add:nc,set:oc,delete:ic,clear:sc,forEach:Xi(!1,!0)},n={get(l){return Qi(this,l,!0)},get size(){return Gi(this,!0)},has(l){return Zi.call(this,l,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Xi(!0,!1)},o={get(l){return Qi(this,l,!0,!0)},get size(){return Gi(this,!0)},has(l){return Zi.call(this,l,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Xi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=es(l,!1,!1),n[l]=es(l,!0,!1),t[l]=es(l,!1,!0),o[l]=es(l,!0,!0)}),[e,n,t,o]}const[Eh,Th,Ch,Ah]=zh();function Gs(e,t){const n=t?e?Ah:Ch:e?Th:Eh;return(o,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?o:Reflect.get($e(n,i)&&i in o?n:o,i,l)}const Mh={get:Gs(!1,!1)},Ph={get:Gs(!1,!0)},Kh={get:Gs(!0,!1)},Lh={get:Gs(!0,!0)};function Md(e,t,n){const o=he(n);if(o!==n&&t.call(e,o)){const i=er(e);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Pd=new WeakMap,Kd=new WeakMap,Ld=new WeakMap,Rd=new WeakMap;function Rh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wh(e){return e.__v_skip||!Object.isExtensible(e)?0:Rh(er(e))}function je(e){return Wn(e)?e:Xs(e,!1,Cd,Mh,Pd)}function Hh(e){return Xs(e,!1,Ih,Ph,Kd)}function Vt(e){return Xs(e,!0,Ad,Kh,Ld)}function oi(e){return Xs(e,!0,Oh,Lh,Rd)}function Xs(e,t,n,o,i){if(!Ce(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=i.get(e);if(l)return l;const a=Wh(e);if(a===0)return e;const r=new Proxy(e,a===2?o:n);return i.set(e,r),r}function co(e){return Wn(e)?co(e.__v_raw):!!(e&&e.__v_isReactive)}function Wn(e){return!!(e&&e.__v_isReadonly)}function zs(e){return!!(e&&e.__v_isShallow)}function Es(e){return co(e)||Wn(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function el(e){return ks(e,"__v_skip",!0),e}const xi=e=>Ce(e)?je(e):e,lr=e=>Ce(e)?Vt(e):e;function ar(e){En&&pt&&(e=he(e),zd(e.dep||(e.dep=or()),{target:e,type:"get",key:"value"}))}function rr(e,t){e=he(e);const n=e.dep;n&&Ql(n,{target:e,type:"set",key:"value",newValue:t})}function Te(e){return!!(e&&e.__v_isRef===!0)}function Q(e){return Wd(e,!1)}function sn(e){return Wd(e,!0)}function Wd(e,t){return Te(e)?e:new Nh(e,t)}class Nh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:he(t),this._value=n?t:xi(t)}get value(){return ar(this),this._value}set value(t){const n=this.__v_isShallow||zs(t)||Wn(t);t=n?t:he(t),Si(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:xi(t),rr(this,t))}}function M(e){return Te(e)?e.value:e}const Fh={get:(e,t,n)=>M(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const i=e[t];return Te(i)&&!Te(n)?(i.value=n,!0):Reflect.set(e,t,n,o)}};function Hd(e){return co(e)?e:new Proxy(e,Fh)}class Dh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>ar(this),()=>rr(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function cr(e){return new Dh(e)}function jh(e){Es(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=re(e)?new Array(e.length):{};for(const n in e)t[n]=Nd(e,n);return t}class Vh{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return fh(he(this._object),this._key)}}class Bh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function qh(e,t,n){return Te(e)?e:pe(e)?new Bh(e):Ce(e)&&arguments.length>1?Nd(e,t,n):Q(e)}function Nd(e,t,n){const o=e[t];return Te(o)?o:new Vh(e,t,n)}class Uh{constructor(t,n,o,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ir(t,()=>{this._dirty||(this._dirty=!0,rr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=o}get value(){const t=he(this);return ar(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Jh(e,t,n=!1){let o,i;const l=pe(e);l?(o=e,i=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,i=e.set);const a=new Uh(o,i,l||!i,n);return t&&!n&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}const uo=[];function hs(e){uo.push(e)}function vs(){uo.pop()}function V(e,...t){go();const n=uo.length?uo[uo.length-1].component:null,o=n&&n.appContext.config.warnHandler,i=Yh();if(o)hn(o,n,11,[e+t.join(""),n&&n.proxy,i.map(({vnode:l})=>`at <${ul(n,l.type)}>`).join(`
`),i]);else{const l=[`[Vue warn]: ${e}`,...t];i.length&&l.push(`
`,...Qh(i)),console.warn(...l)}bo()}function Yh(){let e=uo[uo.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function Qh(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...Zh(n))}),t}function Zh({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,i=` at <${ul(e.component,e.type,o)}`,l=">"+n;return e.props?[i,...Gh(e.props),l]:[i+l]}function Gh(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...Fd(o,e[o]))}),n.length>3&&t.push(" ..."),t}function Fd(e,t,n){return De(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Te(t)?(t=Fd(e,he(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):pe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),n?t:[`${e}=`,t])}function Xh(e,t){e!==void 0&&(typeof e!="number"?V(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&V(`${t} is NaN - the duration expression might be incorrect.`))}const ur={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function hn(e,t,n,o){let i;try{i=o?e(...o):e()}catch(l){tl(l,t,n)}return i}function Rt(e,t,n,o){if(pe(e)){const l=hn(e,t,n,o);return l&&Xa(l)&&l.catch(a=>{tl(a,t,n)}),l}const i=[];for(let l=0;l<e.length;l++)i.push(Rt(e[l],t,n,o));return i}function tl(e,t,n,o=!0){const i=t?t.vnode:null;if(t){let l=t.parent;const a=t.proxy,r=ur[n];for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,r)===!1)return}l=l.parent}const c=t.appContext.config.errorHandler;if(c){hn(c,null,10,[e,a,r]);return}}ev(e,n,i,o)}function ev(e,t,n,o=!0){{const i=ur[t];if(n&&hs(n),V(`Unhandled error${i?` during execution of ${i}`:""}`),n&&vs(),o)throw e;console.error(e)}}let ki=!1,Zl=!1;const ot=[];let Gt=0;const Co=[];let Zt=null,kn=0;const Dd=Promise.resolve();let dr=null;const tv=100;function it(e){const t=dr||Dd;return e?t.then(this?e.bind(this):e):t}function nv(e){let t=Gt+1,n=ot.length;for(;t<n;){const o=t+n>>>1;$i(ot[o])<e?t=o+1:n=o}return t}function nl(e){(!ot.length||!ot.includes(e,ki&&e.allowRecurse?Gt+1:Gt))&&(e.id==null?ot.push(e):ot.splice(nv(e.id),0,e),jd())}function jd(){!ki&&!Zl&&(Zl=!0,dr=Dd.then(qd))}function ov(e){const t=ot.indexOf(e);t>Gt&&ot.splice(t,1)}function Vd(e){re(e)?Co.push(...e):(!Zt||!Zt.includes(e,e.allowRecurse?kn+1:kn))&&Co.push(e),jd()}function lc(e,t=ki?Gt+1:0){for(e=e||new Map;t<ot.length;t++){const n=ot[t];if(n&&n.pre){if(pr(e,n))continue;ot.splice(t,1),t--,n()}}}function Bd(e){if(Co.length){const t=[...new Set(Co)];if(Co.length=0,Zt){Zt.push(...t);return}for(Zt=t,e=e||new Map,Zt.sort((n,o)=>$i(n)-$i(o)),kn=0;kn<Zt.length;kn++)pr(e,Zt[kn])||Zt[kn]();Zt=null,kn=0}}const $i=e=>e.id==null?1/0:e.id,iv=(e,t)=>{const n=$i(e)-$i(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function qd(e){Zl=!1,ki=!0,e=e||new Map,ot.sort(iv);const t=n=>pr(e,n);try{for(Gt=0;Gt<ot.length;Gt++){const n=ot[Gt];if(n&&n.active!==!1){if(t(n))continue;hn(n,null,14)}}}finally{Gt=0,ot.length=0,Bd(e),ki=!1,dr=null,(ot.length||Co.length)&&qd(e)}}function pr(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>tv){const o=t.ownerInstance,i=o&&zi(o.type);return V(`Maximum recursive updates exceeded${i?` in component <${i}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let Tn=!1;const zo=new Set;$s().__VUE_HMR_RUNTIME__={createRecord:vl(Ud),rerender:vl(av),reload:vl(rv)};const _o=new Map;function sv(e){const t=e.type.__hmrId;let n=_o.get(t);n||(Ud(t,e.type),n=_o.get(t)),n.instances.add(e)}function lv(e){_o.get(e.type.__hmrId).instances.delete(e)}function Ud(e,t){return _o.has(e)?!1:(_o.set(e,{initialDef:ci(t),instances:new Set}),!0)}function ci(e){return $p(e)?e.__vccOpts:e}function av(e,t){const n=_o.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(o=>{t&&(o.render=t,ci(o.type).render=t),o.renderCache=[],Tn=!0,o.update(),Tn=!1}))}function rv(e,t){const n=_o.get(e);if(!n)return;t=ci(t),ac(n.initialDef,t);const o=[...n.instances];for(const i of o){const l=ci(i.type);zo.has(l)||(l!==n.initialDef&&ac(l,t),zo.add(l)),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(zo.add(l),i.ceReload(t.styles),zo.delete(l)):i.parent?nl(i.parent.update):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Vd(()=>{for(const i of o)zo.delete(ci(i.type))})}function ac(e,t){Ne(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function vl(e){return(t,n)=>{try{return e(t,n)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Xt,ii=[],Gl=!1;function Fi(e,...t){Xt?Xt.emit(e,...t):Gl||ii.push({event:e,args:t})}function Jd(e,t){var n,o;Xt=e,Xt?(Xt.enabled=!0,ii.forEach(({event:i,args:l})=>Xt.emit(i,...l)),ii=[]):typeof window<"u"&&window.HTMLElement&&!((o=(n=window.navigator)==null?void 0:n.userAgent)!=null&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Jd(l,t)}),setTimeout(()=>{Xt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Gl=!0,ii=[])},3e3)):(Gl=!0,ii=[])}function cv(e,t){Fi("app:init",e,t,{Fragment:Ee,Text:Vi,Comment:ft,Static:ui})}function uv(e){Fi("app:unmount",e)}const Xl=fr("component:added"),Yd=fr("component:updated"),dv=fr("component:removed"),pv=e=>{Xt&&typeof Xt.cleanupBuffer=="function"&&!Xt.cleanupBuffer(e)&&dv(e)};function fr(e){return t=>{Fi(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const fv=Qd("perf:start"),mv=Qd("perf:end");function Qd(e){return(t,n,o)=>{Fi(e,t.appContext.app,t.uid,t,n,o)}}function hv(e,t,n){Fi("component:emit",e.appContext.app,e,t,n)}function vv(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||He;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(t in d))(!f||!(Yn(t)in f))&&V(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Yn(t)}" prop.`);else{const m=d[t];pe(m)&&(m(...n)||V(`Invalid event arguments: event validation failed for event "${t}".`))}}let i=n;const l=t.startsWith("update:"),a=l&&t.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:m}=o[d]||He;m&&(i=n.map(h=>De(h)?h.trim():h)),f&&(i=n.map(Gm))}hv(e,t,i);{const d=t.toLowerCase();d!==t&&o[Yn(d)]&&V(`Event "${d}" is emitted in component ${ul(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${vn(t)}" instead of "${t}".`)}let r,c=o[r=Yn(t)]||o[r=Yn(nn(t))];!c&&l&&(c=o[r=Yn(vn(t))]),c&&Rt(c,e,6,i);const u=o[r+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Rt(u,e,6,i)}}function Zd(e,t,n=!1){const o=t.emitsCache,i=o.get(e);if(i!==void 0)return i;const l=e.emits;let a={},r=!1;if(!pe(e)){const c=u=>{const d=Zd(u,t,!0);d&&(r=!0,Ne(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!r?(Ce(e)&&o.set(e,null),null):(re(l)?l.forEach(c=>a[c]=null):Ne(a,l),Ce(e)&&o.set(e,a),a)}function ol(e,t){return!e||!Hi(t)?!1:(t=t.slice(2).replace(/Once$/,""),$e(e,t[0].toLowerCase()+t.slice(1))||$e(e,vn(t))||$e(e,t))}let Ge=null,il=null;function Ts(e){const t=Ge;return Ge=e,il=e&&e.type.__scopeId||null,t}function OW(e){il=e}function zW(){il=null}function I(e,t=Ge,n){if(!t||e._n)return e;const o=(...i)=>{o._d&&wc(-1);const l=Ts(t);let a;try{a=e(...i)}finally{Ts(l),o._d&&wc(1)}return Yd(t),a};return o._n=!0,o._c=!0,o._d=!0,o}let ea=!1;function Cs(){ea=!0}function _l(e){const{type:t,vnode:n,proxy:o,withProxy:i,props:l,propsOptions:[a],slots:r,attrs:c,emit:u,render:d,renderCache:f,data:m,setupState:h,ctx:v,inheritAttrs:w}=e;let S,x;const k=Ts(e);ea=!1;try{if(n.shapeFlag&4){const O=i||o;S=jt(d.call(O,O,f,l,h,m,v)),x=c}else{const O=t;c===l&&Cs(),S=jt(O.length>1?O(l,{get attrs(){return Cs(),c},slots:r,emit:u}):O(l,null)),x=t.props?c:gv(c)}}catch(O){di.length=0,tl(O,e,1),S=G(ft)}let g=S,T;if(S.patchFlag>0&&S.patchFlag&2048&&([g,T]=_v(S)),x&&w!==!1){const O=Object.keys(x),{shapeFlag:P}=g;if(O.length){if(P&7)a&&O.some(xs)&&(x=bv(x,a)),g=ln(g,x);else if(!ea&&g.type!==ft){const j=Object.keys(c),L=[],q=[];for(let se=0,de=j.length;se<de;se++){const Z=j[se];Hi(Z)?xs(Z)||L.push(Z[2].toLowerCase()+Z.slice(3)):q.push(Z)}q.length&&V(`Extraneous non-props attributes (${q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),L.length&&V(`Extraneous non-emits event listeners (${L.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(rc(g)||V("Runtime directive used on component with non-element root node. The directives will not function as intended."),g=ln(g),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(rc(g)||V("Component inside <Transition> renders non-element root node that cannot be animated."),g.transition=n.transition),T?T(g):S=g,Ts(k),S}const _v=e=>{const t=e.children,n=e.dynamicChildren,o=Gd(t);if(!o)return[e,void 0];const i=t.indexOf(o),l=n?n.indexOf(o):-1,a=r=>{t[i]=r,n&&(l>-1?n[l]=r:r.patchFlag>0&&(e.dynamicChildren=[...n,r]))};return[jt(o),a]};function Gd(e){let t;for(let n=0;n<e.length;n++){const o=e[n];if(Hn(o)){if(o.type!==ft||o.children==="v-if"){if(t)return;t=o}}else return}return t}const gv=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hi(n))&&((t||(t={}))[n]=e[n]);return t},bv=(e,t)=>{const n={};for(const o in e)(!xs(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n},rc=e=>e.shapeFlag&7||e.type===ft;function yv(e,t,n){const{props:o,children:i,component:l}=e,{props:a,children:r,patchFlag:c}=t,u=l.emitsOptions;if((i||r)&&Tn||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?cc(o,a,u):!!a;if(c&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(a[m]!==o[m]&&!ol(u,m))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:o===a?!1:o?a?cc(o,a,u):!0:!!a;return!1}function cc(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let i=0;i<o.length;i++){const l=o[i];if(t[l]!==e[l]&&!ol(n,l))return!0}return!1}function wv({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Xd=e=>e.__isSuspense;function Sv(e,t){t&&t.pendingBranch?re(e)?t.effects.push(...e):t.effects.push(e):Vd(e)}function yo(e,t){return sl(e,null,t)}function xv(e,t){return sl(e,null,Ne({},t,{flush:"post"}))}const ts={};function _e(e,t,n){return pe(t)||V("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),sl(e,t,n)}function sl(e,t,{immediate:n,deep:o,flush:i,onTrack:l,onTrigger:a}=He){var r;t||(n!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=O=>{V("Invalid watch source: ",O,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=nr()===((r=Ze)==null?void 0:r.scope)?Ze:null;let d,f=!1,m=!1;if(Te(e)?(d=()=>e.value,f=zs(e)):co(e)?(d=()=>e,o=!0):re(e)?(m=!0,f=e.some(O=>co(O)||zs(O)),d=()=>e.map(O=>{if(Te(O))return O.value;if(co(O))return io(O);if(pe(O))return hn(O,u,2);c(O)})):pe(e)?t?d=()=>hn(e,u,2):d=()=>{if(!(u&&u.isUnmounted))return h&&h(),Rt(e,u,3,[v])}:(d=bt,c(e)),t&&o){const O=d;d=()=>io(O())}let h,v=O=>{h=g.onStop=()=>{hn(O,u,4)}},w;if(Oi)if(v=bt,t?n&&Rt(t,u,3,[d(),m?[]:void 0,v]):d(),i==="sync"){const O=C_();w=O.__watcherHandles||(O.__watcherHandles=[])}else return bt;let S=m?new Array(e.length).fill(ts):ts;const x=()=>{if(g.active)if(t){const O=g.run();(o||f||(m?O.some((P,j)=>Si(P,S[j])):Si(O,S)))&&(h&&h(),Rt(t,u,3,[O,S===ts?void 0:m&&S[0]===ts?[]:S,v]),S=O)}else g.run()};x.allowRecurse=!!t;let k;i==="sync"?k=x:i==="post"?k=()=>et(x,u&&u.suspense):(x.pre=!0,u&&(x.id=u.uid),k=()=>nl(x));const g=new ir(d,k);g.onTrack=l,g.onTrigger=a,t?n?x():S=g.run():i==="post"?et(g.run.bind(g),u&&u.suspense):g.run();const T=()=>{g.stop(),u&&u.scope&&Za(u.scope.effects,g)};return w&&w.push(T),T}function kv(e,t,n){const o=this.proxy,i=De(e)?e.includes(".")?ep(o,e):()=>o[e]:e.bind(o,o);let l;pe(t)?l=t:(l=t.handler,n=t);const a=Ze;Ko(this);const r=sl(i,l.bind(o),n);return a?Ko(a):fo(),r}function ep(e,t){const n=t.split(".");return()=>{let o=e;for(let i=0;i<n.length&&o;i++)o=o[n[i]];return o}}function io(e,t){if(!Ce(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Te(e))io(e.value,t);else if(re(e))for(let n=0;n<e.length;n++)io(e[n],t);else if(_d(e)||ao(e))e.forEach(n=>{io(n,t)});else if(bd(e))for(const n in e)io(e[n],t);return e}function tp(e){Ym(e)&&V("Do not use built-in directive ids as custom directive id: "+e)}function np(e,t){const n=Ge;if(n===null)return V("withDirectives can only be used inside render functions."),e;const o=cl(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[a,r,c,u=He]=t[l];a&&(pe(a)&&(a={mounted:a,updated:a}),a.deep&&io(r),i.push({dir:a,instance:o,value:r,oldValue:void 0,arg:c,modifiers:u}))}return e}function Vn(e,t,n,o){const i=e.dirs,l=t&&t.dirs;for(let a=0;a<i.length;a++){const r=i[a];l&&(r.oldValue=l[a].value);let c=r.dir[o];c&&(go(),Rt(c,n,8,[e.el,r,e,t]),bo())}}function $v(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bn(()=>{e.isMounted=!0}),Di(()=>{e.isUnmounting=!0}),e}const At=[Function,Array],Iv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:At,onEnter:At,onAfterEnter:At,onEnterCancelled:At,onBeforeLeave:At,onLeave:At,onAfterLeave:At,onLeaveCancelled:At,onBeforeAppear:At,onAppear:At,onAfterAppear:At,onAppearCancelled:At};function Ov(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function ta(e,t,n,o){const{appear:i,mode:l,persisted:a=!1,onBeforeEnter:r,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:h,onLeaveCancelled:v,onBeforeAppear:w,onAppear:S,onAfterAppear:x,onAppearCancelled:k}=t,g=String(e.key),T=Ov(n,e),O=(L,q)=>{L&&Rt(L,o,9,q)},P=(L,q)=>{const se=q[1];O(L,q),re(L)?L.every(de=>de.length<=1)&&se():L.length<=1&&se()},j={mode:l,persisted:a,beforeEnter(L){let q=r;if(!n.isMounted)if(i)q=w||r;else return;L._leaveCb&&L._leaveCb(!0);const se=T[g];se&&Gn(e,se)&&se.el._leaveCb&&se.el._leaveCb(),O(q,[L])},enter(L){let q=c,se=u,de=d;if(!n.isMounted)if(i)q=S||c,se=x||u,de=k||d;else return;let Z=!1;const ve=L._enterCb=ge=>{Z||(Z=!0,ge?O(de,[L]):O(se,[L]),j.delayedLeave&&j.delayedLeave(),L._enterCb=void 0)};q?P(q,[L,ve]):ve()},leave(L,q){const se=String(e.key);if(L._enterCb&&L._enterCb(!0),n.isUnmounting)return q();O(f,[L]);let de=!1;const Z=L._leaveCb=ve=>{de||(de=!0,q(),ve?O(v,[L]):O(h,[L]),L._leaveCb=void 0,T[se]===e&&delete T[se])};T[se]=e,m?P(m,[L,Z]):Z()},clone(L){return ta(L,t,n,o)}};return j}function As(e,t){e.shapeFlag&6&&e.component?As(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function op(e,t=!1,n){let o=[],i=0;for(let l=0;l<e.length;l++){let a=e[l];const r=n==null?a.key:String(n)+String(a.key!=null?a.key:l);a.type===Ee?(a.patchFlag&128&&i++,o=o.concat(op(a.children,t,r))):(t||a.type!==ft)&&o.push(r!=null?ln(a,{key:r}):a)}if(i>1)for(let l=0;l<o.length;l++)o[l].patchFlag=-2;return o}function Ae(e,t){return pe(e)?(()=>Ne({name:e.name},t,{setup:e}))():e}const Ao=e=>!!e.type.__asyncLoader,mr=e=>e.type.__isKeepAlive,zv={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=St(),o=n.ctx;if(!o.renderer)return()=>{const k=t.default&&t.default();return k&&k.length===1?k[0]:k};const i=new Map,l=new Set;let a=null;n.__v_cache=i;const r=n.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:f}}}=o,m=f("div");o.activate=(k,g,T,O,P)=>{const j=k.component;u(k,g,T,0,r),c(j.vnode,k,g,T,j,r,O,k.slotScopeIds,P),et(()=>{j.isDeactivated=!1,j.a&&Zn(j.a);const L=k.props&&k.props.onVnodeMounted;L&&Mt(L,j.parent,k)},r),Xl(j)},o.deactivate=k=>{const g=k.component;u(k,m,null,1,r),et(()=>{g.da&&Zn(g.da);const T=k.props&&k.props.onVnodeUnmounted;T&&Mt(T,g.parent,k),g.isDeactivated=!0},r),Xl(g)};function h(k){gl(k),d(k,n,r,!0)}function v(k){i.forEach((g,T)=>{const O=zi(g.type);O&&(!k||!k(O))&&w(T)})}function w(k){const g=i.get(k);!a||!Gn(g,a)?h(g):a&&gl(a),i.delete(k),l.delete(k)}_e(()=>[e.include,e.exclude],([k,g])=>{k&&v(T=>si(k,T)),g&&v(T=>!si(g,T))},{flush:"post",deep:!0});let S=null;const x=()=>{S!=null&&i.set(S,bl(n.subTree))};return bn(x),al(x),Di(()=>{i.forEach(k=>{const{subTree:g,suspense:T}=n,O=bl(g);if(k.type===O.type&&k.key===O.key){gl(O);const P=O.component.da;P&&et(P,T);return}h(k)})}),()=>{if(S=null,!t.default)return null;const k=t.default(),g=k[0];if(k.length>1)return V("KeepAlive should contain exactly one component child."),a=null,k;if(!Hn(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return a=null,g;let T=bl(g);const O=T.type,P=zi(Ao(T)?T.type.__asyncResolved||{}:O),{include:j,exclude:L,max:q}=e;if(j&&(!P||!si(j,P))||L&&P&&si(L,P))return a=T,g;const se=T.key==null?O:T.key,de=i.get(se);return T.el&&(T=ln(T),g.shapeFlag&128&&(g.ssContent=T)),S=se,de?(T.el=de.el,T.component=de.component,T.transition&&As(T,T.transition),T.shapeFlag|=512,l.delete(se),l.add(se)):(l.add(se),q&&l.size>parseInt(q,10)&&w(l.values().next().value)),T.shapeFlag|=256,a=T,Xd(g.type)?g:T}}},ip=zv;function si(e,t){return re(e)?e.some(n=>si(n,t)):De(e)?e.split(",").includes(t):Jm(e)?e.test(t):!1}function sp(e,t){ap(e,"a",t)}function lp(e,t){ap(e,"da",t)}function ap(e,t,n=Ze){const o=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ll(t,o,n),n){let i=n.parent;for(;i&&i.parent;)mr(i.parent.vnode)&&Ev(o,t,n,i),i=i.parent}}function Ev(e,t,n,o){const i=ll(t,e,o,!0);ji(()=>{Za(o[t],i)},n)}function gl(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function bl(e){return e.shapeFlag&128?e.ssContent:e}function ll(e,t,n=Ze,o=!1){if(n){const i=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;go(),Ko(n);const r=Rt(t,n,e,a);return fo(),bo(),r});return o?i.unshift(l):i.push(l),l}else{const i=Yn(ur[e].replace(/ hook$/,""));V(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const gn=e=>(t,n=Ze)=>(!Oi||e==="sp")&&ll(e,(...o)=>t(...o),n),Tv=gn("bm"),bn=gn("m"),Cv=gn("bu"),al=gn("u"),Di=gn("bum"),ji=gn("um"),Av=gn("sp"),Mv=gn("rtg"),Pv=gn("rtc");function Kv(e,t=Ze){ll("ec",e,t)}const na="components";function Ms(e,t){return Rv(na,e,!0,t)||e}const Lv=Symbol.for("v-ndc");function Rv(e,t,n=!0,o=!1){const i=Ge||Ze;if(i){const l=i.type;if(e===na){const r=zi(l,!1);if(r&&(r===t||r===nn(t)||r===vo(nn(t))))return l}const a=uc(i[e]||l[e],t)||uc(i.appContext[e],t);if(!a&&o)return l;if(n&&!a){const r=e===na?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";V(`Failed to resolve ${e.slice(0,-1)}: ${t}${r}`)}return a}else V(`resolve${vo(e.slice(0,-1))} can only be used in render() or setup().`)}function uc(e,t){return e&&(e[t]||e[nn(t)]||e[vo(nn(t))])}function Ho(e,t,n,o){let i;const l=n&&n[o];if(re(e)||De(e)){i=new Array(e.length);for(let a=0,r=e.length;a<r;a++)i[a]=t(e[a],a,void 0,l&&l[a])}else if(typeof e=="number"){Number.isInteger(e)||V(`The v-for range expect an integer value but got ${e}.`),i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,l&&l[a])}else if(Ce(e))if(e[Symbol.iterator])i=Array.from(e,(a,r)=>t(a,r,void 0,l&&l[r]));else{const a=Object.keys(e);i=new Array(a.length);for(let r=0,c=a.length;r<c;r++){const u=a[r];i[r]=t(e[u],u,r,l&&l[r])}}else i=[];return n&&(n[o]=i),i}function qt(e,t,n={},o,i){if(Ge.isCE||Ge.parent&&Ao(Ge.parent)&&Ge.parent.isCE)return t!=="default"&&(n.name=t),G("slot",n,o&&o());let l=e[t];l&&l.length>1&&(V("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),y();const a=l&&rp(l(n)),r=z(Ee,{key:n.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&e._===1?64:-2);return!i&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),l&&l._c&&(l._d=!0),r}function rp(e){return e.some(t=>Hn(t)?!(t.type===ft||t.type===Ee&&!rp(t.children)):!0)?e:null}const oa=e=>e?Sp(e)?cl(e)||e.proxy:oa(e.parent):null,po=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>oi(e.props),$attrs:e=>oi(e.attrs),$slots:e=>oi(e.slots),$refs:e=>oi(e.refs),$parent:e=>oa(e.parent),$root:e=>oa(e.root),$emit:e=>e.emit,$options:e=>vr(e),$forceUpdate:e=>e.f||(e.f=()=>nl(e.update)),$nextTick:e=>e.n||(e.n=it.bind(e.proxy)),$watch:e=>kv.bind(e)}),hr=e=>e==="_"||e==="$",yl=(e,t)=>e!==He&&!e.__isScriptSetup&&$e(e,t),cp={get({_:e},t){const{ctx:n,setupState:o,data:i,props:l,accessCache:a,type:r,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return o[t];case 2:return i[t];case 4:return n[t];case 3:return l[t]}else{if(yl(o,t))return a[t]=1,o[t];if(i!==He&&$e(i,t))return a[t]=2,i[t];if((u=e.propsOptions[0])&&$e(u,t))return a[t]=3,l[t];if(n!==He&&$e(n,t))return a[t]=4,n[t];ia&&(a[t]=0)}}const d=po[t];let f,m;if(d)return t==="$attrs"?(at(e,"get",t),Cs()):t==="$slots"&&at(e,"get",t),d(e);if((f=r.__cssModules)&&(f=f[t]))return f;if(n!==He&&$e(n,t))return a[t]=4,n[t];if(m=c.config.globalProperties,$e(m,t))return m[t];Ge&&(!De(t)||t.indexOf("__v")!==0)&&(i!==He&&hr(t[0])&&$e(i,t)?V(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ge&&V(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:o,setupState:i,ctx:l}=e;return yl(i,t)?(i[t]=n,!0):i.__isScriptSetup&&$e(i,t)?(V(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==He&&$e(o,t)?(o[t]=n,!0):$e(e.props,t)?(V(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(V(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(l,t,{enumerable:!0,configurable:!0,value:n}):l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:i,propsOptions:l}},a){let r;return!!n[a]||e!==He&&$e(e,a)||yl(t,a)||(r=l[0])&&$e(r,a)||$e(o,a)||$e(po,a)||$e(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$e(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};cp.ownKeys=e=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Wv(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(po).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>po[n](e),set:bt})}),t}function Hv(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:bt})})}function Nv(e){const{ctx:t,setupState:n}=e;Object.keys(he(n)).forEach(o=>{if(!n.__isScriptSetup){if(hr(o[0])){V(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n[o],set:bt})}})}function Fv(){return Dv().slots}function Dv(){const e=St();return e||V("useContext() called without active instance."),e.setupContext||(e.setupContext=kp(e))}function dc(e){return re(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function jv(){const e=Object.create(null);return(t,n)=>{e[n]?V(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let ia=!0;function Vv(e){const t=vr(e),n=e.proxy,o=e.ctx;ia=!1,t.beforeCreate&&pc(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:a,watch:r,provide:c,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:h,updated:v,activated:w,deactivated:S,beforeDestroy:x,beforeUnmount:k,destroyed:g,unmounted:T,render:O,renderTracked:P,renderTriggered:j,errorCaptured:L,serverPrefetch:q,expose:se,inheritAttrs:de,components:Z,directives:ve,filters:ge}=t,we=jv();{const[ne]=e.propsOptions;if(ne)for(const ce in ne)we("Props",ce)}if(u&&Bv(u,o,we),a)for(const ne in a){const ce=a[ne];pe(ce)?(Object.defineProperty(o,ne,{value:ce.bind(n),configurable:!0,enumerable:!0,writable:!0}),we("Methods",ne)):V(`Method "${ne}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(i){pe(i)||V("The data option must be a function. Plain object usage is no longer supported.");const ne=i.call(n,n);if(Xa(ne)&&V("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ce(ne))V("data() should return an object.");else{e.data=je(ne);for(const ce in ne)we("Data",ce),hr(ce[0])||Object.defineProperty(o,ce,{configurable:!0,enumerable:!0,get:()=>ne[ce],set:bt})}}if(ia=!0,l)for(const ne in l){const ce=l[ne],ke=pe(ce)?ce.bind(n,n):pe(ce.get)?ce.get.bind(n,n):bt;ke===bt&&V(`Computed property "${ne}" has no getter.`);const Pe=!pe(ce)&&pe(ce.set)?ce.set.bind(n):()=>{V(`Write operation failed: computed property "${ne}" is readonly.`)},Tt=R({get:ke,set:Pe});Object.defineProperty(o,ne,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:nt=>Tt.value=nt}),we("Computed",ne)}if(r)for(const ne in r)up(r[ne],o,n,ne);if(c){const ne=pe(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(ce=>{It(ce,ne[ce])})}d&&pc(d,e,"c");function Le(ne,ce){re(ce)?ce.forEach(ke=>ne(ke.bind(n))):ce&&ne(ce.bind(n))}if(Le(Tv,f),Le(bn,m),Le(Cv,h),Le(al,v),Le(sp,w),Le(lp,S),Le(Kv,L),Le(Pv,P),Le(Mv,j),Le(Di,k),Le(ji,T),Le(Av,q),re(se))if(se.length){const ne=e.exposed||(e.exposed={});se.forEach(ce=>{Object.defineProperty(ne,ce,{get:()=>n[ce],set:ke=>n[ce]=ke})})}else e.exposed||(e.exposed={});O&&e.render===bt&&(e.render=O),de!=null&&(e.inheritAttrs=de),Z&&(e.components=Z),ve&&(e.directives=ve)}function Bv(e,t,n=bt){re(e)&&(e=sa(e));for(const o in e){const i=e[o];let l;Ce(i)?"default"in i?l=$(i.from||o,i.default,!0):l=$(i.from||o):l=$(i),Te(l)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>l.value,set:a=>l.value=a}):t[o]=l,n("Inject",o)}}function pc(e,t,n){Rt(re(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function up(e,t,n,o){const i=o.includes(".")?ep(n,o):()=>n[o];if(De(e)){const l=t[e];pe(l)?_e(i,l):V(`Invalid watch handler specified by key "${e}"`,l)}else if(pe(e))_e(i,e.bind(n));else if(Ce(e))if(re(e))e.forEach(l=>up(l,t,n,o));else{const l=pe(e.handler)?e.handler.bind(n):t[e.handler];pe(l)?_e(i,l,e):V(`Invalid watch handler specified by key "${e.handler}"`,l)}else V(`Invalid watch option: "${o}"`,e)}function vr(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:a}}=e.appContext,r=l.get(t);let c;return r?c=r:!i.length&&!n&&!o?c=t:(c={},i.length&&i.forEach(u=>Ps(c,u,a,!0)),Ps(c,t,a)),Ce(t)&&l.set(t,c),c}function Ps(e,t,n,o=!1){const{mixins:i,extends:l}=t;l&&Ps(e,l,n,!0),i&&i.forEach(a=>Ps(e,a,n,!0));for(const a in t)if(o&&a==="expose")V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const r=qv[a]||n&&n[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const qv={data:fc,props:mc,emits:mc,methods:li,computed:li,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:li,directives:li,watch:Jv,provide:fc,inject:Uv};function fc(e,t){return t?e?function(){return Ne(pe(e)?e.call(this,this):e,pe(t)?t.call(this,this):t)}:t:e}function Uv(e,t){return li(sa(e),sa(t))}function sa(e){if(re(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ct(e,t){return e?[...new Set([].concat(e,t))]:t}function li(e,t){return e?Ne(Object.create(null),e,t):t}function mc(e,t){return e?re(e)&&re(t)?[...new Set([...e,...t])]:Ne(Object.create(null),dc(e),dc(t??{})):t}function Jv(e,t){if(!e)return t;if(!t)return e;const n=Ne(Object.create(null),e);for(const o in t)n[o]=ct(e[o],t[o]);return n}function dp(){return{app:null,config:{isNativeTag:vd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yv=0;function Qv(e,t){return function(o,i=null){pe(o)||(o=Ne({},o)),i!=null&&!Ce(i)&&(V("root props passed to app.mount() must be an object."),i=null);const l=dp();Object.defineProperty(l.config,"unwrapInjectedRef",{get(){return!0},set(){V("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const a=new Set;let r=!1;const c=l.app={_uid:Yv++,_component:o,_props:i,_container:null,_context:l,_instance:null,version:Ws,get config(){return l.config},set config(u){V("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return a.has(u)?V("Plugin has already been applied to target app."):u&&pe(u.install)?(a.add(u),u.install(c,...d)):pe(u)?(a.add(u),u(c,...d)):V('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return l.mixins.includes(u)?V("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):l.mixins.push(u),c},component(u,d){return ua(u,l.config),d?(l.components[u]&&V(`Component "${u}" has already been registered in target app.`),l.components[u]=d,c):l.components[u]},directive(u,d){return tp(u),d?(l.directives[u]&&V(`Directive "${u}" has already been registered in target app.`),l.directives[u]=d,c):l.directives[u]},mount(u,d,f){if(r)V("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&V("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const m=G(o,i);return m.appContext=l,l.reload=()=>{e(ln(m),u,f)},d&&t?t(m,u):e(m,u,f),r=!0,c._container=u,u.__vue_app__=c,c._instance=m.component,cv(c,Ws),cl(m.component)||m.component.proxy}},unmount(){r?(e(null,c._container),c._instance=null,uv(c),delete c._container.__vue_app__):V("Cannot unmount an app that is not mounted.")},provide(u,d){return u in l.provides&&V(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),l.provides[u]=d,c},runWithContext(u){Ks=c;try{return u()}finally{Ks=null}}};return c}}let Ks=null;function It(e,t){if(!Ze)V("provide() can only be used inside setup().");else{let n=Ze.provides;const o=Ze.parent&&Ze.parent.provides;o===n&&(n=Ze.provides=Object.create(o)),n[e]=t}}function $(e,t,n=!1){const o=Ze||Ge;if(o||Ks){const i=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Ks._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&pe(t)?t.call(o&&o.proxy):t;V(`injection "${String(e)}" not found.`)}else V("inject() can only be used inside setup() or functional components.")}function Zv(e,t,n,o=!1){const i={},l={};ks(l,rl,1),e.propsDefaults=Object.create(null),pp(e,t,i,l);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);mp(t||{},i,e),n?e.props=o?i:Hh(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function Gv(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function Xv(e,t,n,o){const{props:i,attrs:l,vnode:{patchFlag:a}}=e,r=he(i),[c]=e.propsOptions;let u=!1;if(!Gv(e)&&(o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(ol(e.emitsOptions,m))continue;const h=t[m];if(c)if($e(l,m))h!==l[m]&&(l[m]=h,u=!0);else{const v=nn(m);i[v]=la(c,r,v,h,e,!1)}else h!==l[m]&&(l[m]=h,u=!0)}}}else{pp(e,t,i,l)&&(u=!0);let d;for(const f in r)(!t||!$e(t,f)&&((d=vn(f))===f||!$e(t,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(i[f]=la(c,r,f,void 0,e,!0)):delete i[f]);if(l!==r)for(const f in l)(!t||!$e(t,f))&&(delete l[f],u=!0)}u&&on(e,"set","$attrs"),mp(t||{},i,e)}function pp(e,t,n,o){const[i,l]=e.propsOptions;let a=!1,r;if(t)for(let c in t){if(ms(c))continue;const u=t[c];let d;i&&$e(i,d=nn(c))?!l||!l.includes(d)?n[d]=u:(r||(r={}))[d]=u:ol(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(l){const c=he(n),u=r||He;for(let d=0;d<l.length;d++){const f=l[d];n[f]=la(i,c,f,u[f],e,!$e(u,f))}}return a}function la(e,t,n,o,i,l){const a=e[n];if(a!=null){const r=$e(a,"default");if(r&&o===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&pe(c)){const{propsDefaults:u}=i;n in u?o=u[n]:(Ko(i),o=u[n]=c.call(null,t),fo())}else o=c}a[0]&&(l&&!r?o=!1:a[1]&&(o===""||o===vn(n))&&(o=!0))}return o}function fp(e,t,n=!1){const o=t.propsCache,i=o.get(e);if(i)return i;const l=e.props,a={},r=[];let c=!1;if(!pe(e)){const d=f=>{c=!0;const[m,h]=fp(f,t,!0);Ne(a,m),h&&r.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!c)return Ce(e)&&o.set(e,To),To;if(re(l))for(let d=0;d<l.length;d++){De(l[d])||V("props must be strings when using array syntax.",l[d]);const f=nn(l[d]);hc(f)&&(a[f]=He)}else if(l){Ce(l)||V("invalid props options",l);for(const d in l){const f=nn(d);if(hc(f)){const m=l[d],h=a[f]=re(m)||pe(m)?{type:m}:Ne({},m);if(h){const v=_c(Boolean,h.type),w=_c(String,h.type);h[0]=v>-1,h[1]=w<0||v<w,(v>-1||$e(h,"default"))&&r.push(f)}}}}const u=[a,r];return Ce(e)&&o.set(e,u),u}function hc(e){return e[0]!=="$"?!0:(V(`Invalid prop name: "${e}" is a reserved property.`),!1)}function aa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function vc(e,t){return aa(e)===aa(t)}function _c(e,t){return re(t)?t.findIndex(n=>vc(n,e)):pe(t)&&vc(t,e)?0:-1}function mp(e,t,n){const o=he(t),i=n.propsOptions[0];for(const l in i){let a=i[l];a!=null&&e_(l,o[l],a,!$e(e,l)&&!$e(e,vn(l)))}}function e_(e,t,n,o){const{type:i,required:l,validator:a,skipCheck:r}=n;if(l&&o){V('Missing required prop: "'+e+'"');return}if(!(t==null&&!l)){if(i!=null&&i!==!0&&!r){let c=!1;const u=re(i)?i:[i],d=[];for(let f=0;f<u.length&&!c;f++){const{valid:m,expectedType:h}=n_(t,u[f]);d.push(h||""),c=m}if(!c){V(o_(e,t,d));return}}a&&!a(t)&&V('Invalid prop: custom validator check failed for prop "'+e+'".')}}const t_=Fn("String,Number,Boolean,Function,Symbol,BigInt");function n_(e,t){let n;const o=aa(t);if(t_(o)){const i=typeof e;n=i===o.toLowerCase(),!n&&i==="object"&&(n=e instanceof t)}else o==="Object"?n=Ce(e):o==="Array"?n=re(e):o==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:o}}function o_(e,t,n){let o=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(vo).join(" | ")}`;const i=n[0],l=er(t),a=gc(t,i),r=gc(t,l);return n.length===1&&bc(i)&&!i_(i,l)&&(o+=` with value ${a}`),o+=`, got ${l} `,bc(l)&&(o+=`with value ${r}.`),o}function gc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function bc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function i_(...e){return e.some(t=>t.toLowerCase()==="boolean")}const hp=e=>e[0]==="_"||e==="$stable",_r=e=>re(e)?e.map(jt):[jt(e)],s_=(e,t,n)=>{if(t._n)return t;const o=I((...i)=>(Ze&&V(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),_r(t(...i))),n);return o._c=!1,o},vp=(e,t,n)=>{const o=e._ctx;for(const i in e){if(hp(i))continue;const l=e[i];if(pe(l))t[i]=s_(i,l,o);else if(l!=null){V(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);const a=_r(l);t[i]=()=>a}}},_p=(e,t)=>{mr(e.vnode)||V("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=_r(t);e.slots.default=()=>n},l_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=he(t),ks(t,"_",n)):vp(t,e.slots={})}else e.slots={},t&&_p(e,t);ks(e.slots,rl,1)},a_=(e,t,n)=>{const{vnode:o,slots:i}=e;let l=!0,a=He;if(o.shapeFlag&32){const r=t._;r?Tn?(Ne(i,t),on(e,"set","$slots")):n&&r===1?l=!1:(Ne(i,t),!n&&r===1&&delete i._):(l=!t.$stable,vp(t,i)),a=t}else t&&(_p(e,t),a={default:1});if(l)for(const r in i)!hp(r)&&!(r in a)&&delete i[r]};function ra(e,t,n,o,i=!1){if(re(e)){e.forEach((m,h)=>ra(m,t&&(re(t)?t[h]:t),n,o,i));return}if(Ao(o)&&!i)return;const l=o.shapeFlag&4?cl(o.component)||o.component.proxy:o.el,a=i?null:l,{i:r,r:c}=e;if(!r){V("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,d=r.refs===He?r.refs={}:r.refs,f=r.setupState;if(u!=null&&u!==c&&(De(u)?(d[u]=null,$e(f,u)&&(f[u]=null)):Te(u)&&(u.value=null)),pe(c))hn(c,r,12,[a,d]);else{const m=De(c),h=Te(c);if(m||h){const v=()=>{if(e.f){const w=m?$e(f,c)?f[c]:d[c]:c.value;i?re(w)&&Za(w,l):re(w)?w.includes(l)||w.push(l):m?(d[c]=[l],$e(f,c)&&(f[c]=d[c])):(c.value=[l],e.k&&(d[e.k]=c.value))}else m?(d[c]=a,$e(f,c)&&(f[c]=a)):h?(c.value=a,e.k&&(d[e.k]=a)):V("Invalid template ref type:",c,`(${typeof c})`)};a?(v.id=-1,et(v,n)):v()}else V("Invalid template ref type:",c,`(${typeof c})`)}}let Vo,On;function cn(e,t){e.appContext.config.performance&&Ls()&&On.mark(`vue-${t}-${e.uid}`),fv(e,t,Ls()?On.now():Date.now())}function un(e,t){if(e.appContext.config.performance&&Ls()){const n=`vue-${t}-${e.uid}`,o=n+":end";On.mark(o),On.measure(`<${ul(e,e.type)}> ${t}`,n,o),On.clearMarks(n),On.clearMarks(o)}mv(e,t,Ls()?On.now():Date.now())}function Ls(){return Vo!==void 0||(typeof window<"u"&&window.performance?(Vo=!0,On=window.performance):Vo=!1),Vo}function r_(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const et=Sv;function c_(e){return u_(e)}function u_(e,t){r_();const n=$s();n.__VUE__=!0,Jd(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:o,remove:i,patchProp:l,createElement:a,createText:r,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:m,setScopeId:h=bt,insertStaticContent:v}=e,w=(_,b,E,D=null,W=null,J=null,ee=!1,U=null,Y=Tn?!1:!!b.dynamicChildren)=>{if(_===b)return;_&&!Gn(_,b)&&(D=X(_),ht(_,W,J,!0),_=null),b.patchFlag===-2&&(Y=!1,b.dynamicChildren=null);const{type:B,ref:ae,shapeFlag:le}=b;switch(B){case Vi:S(_,b,E,D);break;case ft:x(_,b,E,D);break;case ui:_==null?k(b,E,D,ee):g(_,b,E,ee);break;case Ee:ve(_,b,E,D,W,J,ee,U,Y);break;default:le&1?P(_,b,E,D,W,J,ee,U,Y):le&6?ge(_,b,E,D,W,J,ee,U,Y):le&64||le&128?B.process(_,b,E,D,W,J,ee,U,Y,oe):V("Invalid VNode type:",B,`(${typeof B})`)}ae!=null&&W&&ra(ae,_&&_.ref,J,b||_,!b)},S=(_,b,E,D)=>{if(_==null)o(b.el=r(b.children),E,D);else{const W=b.el=_.el;b.children!==_.children&&u(W,b.children)}},x=(_,b,E,D)=>{_==null?o(b.el=c(b.children||""),E,D):b.el=_.el},k=(_,b,E,D)=>{[_.el,_.anchor]=v(_.children,b,E,D,_.el,_.anchor)},g=(_,b,E,D)=>{if(b.children!==_.children){const W=m(_.anchor);O(_),[b.el,b.anchor]=v(b.children,E,W,D)}else b.el=_.el,b.anchor=_.anchor},T=({el:_,anchor:b},E,D)=>{let W;for(;_&&_!==b;)W=m(_),o(_,E,D),_=W;o(b,E,D)},O=({el:_,anchor:b})=>{let E;for(;_&&_!==b;)E=m(_),i(_),_=E;i(b)},P=(_,b,E,D,W,J,ee,U,Y)=>{ee=ee||b.type==="svg",_==null?j(b,E,D,W,J,ee,U,Y):se(_,b,W,J,ee,U,Y)},j=(_,b,E,D,W,J,ee,U)=>{let Y,B;const{type:ae,props:le,shapeFlag:ue,transition:me,dirs:Ie}=_;if(Y=_.el=a(_.type,J,le&&le.is,le),ue&8?d(Y,_.children):ue&16&&q(_.children,Y,null,D,W,J&&ae!=="foreignObject",ee,U),Ie&&Vn(_,null,D,"created"),L(Y,_,_.scopeId,ee,D),le){for(const We in le)We!=="value"&&!ms(We)&&l(Y,We,null,le[We],J,_.children,D,W,K);"value"in le&&l(Y,"value",null,le.value),(B=le.onVnodeBeforeMount)&&Mt(B,D,_)}Object.defineProperty(Y,"__vnode",{value:_,enumerable:!1}),Object.defineProperty(Y,"__vueParentComponent",{value:D,enumerable:!1}),Ie&&Vn(_,null,D,"beforeMount");const Fe=(!W||W&&!W.pendingBranch)&&me&&!me.persisted;Fe&&me.beforeEnter(Y),o(Y,b,E),((B=le&&le.onVnodeMounted)||Fe||Ie)&&et(()=>{B&&Mt(B,D,_),Fe&&me.enter(Y),Ie&&Vn(_,null,D,"mounted")},W)},L=(_,b,E,D,W)=>{if(E&&h(_,E),D)for(let J=0;J<D.length;J++)h(_,D[J]);if(W){let J=W.subTree;if(J.patchFlag>0&&J.patchFlag&2048&&(J=Gd(J.children)||J),b===J){const ee=W.vnode;L(_,ee,ee.scopeId,ee.slotScopeIds,W.parent)}}},q=(_,b,E,D,W,J,ee,U,Y=0)=>{for(let B=Y;B<_.length;B++){const ae=_[B]=U?$n(_[B]):jt(_[B]);w(null,ae,b,E,D,W,J,ee,U)}},se=(_,b,E,D,W,J,ee)=>{const U=b.el=_.el;let{patchFlag:Y,dynamicChildren:B,dirs:ae}=b;Y|=_.patchFlag&16;const le=_.props||He,ue=b.props||He;let me;E&&Bn(E,!1),(me=ue.onVnodeBeforeUpdate)&&Mt(me,E,b,_),ae&&Vn(b,_,E,"beforeUpdate"),E&&Bn(E,!0),Tn&&(Y=0,ee=!1,B=null);const Ie=W&&b.type!=="foreignObject";if(B?(de(_.dynamicChildren,B,U,E,D,Ie,J),Rs(_,b)):ee||ke(_,b,U,null,E,D,Ie,J,!1),Y>0){if(Y&16)Z(U,b,le,ue,E,D,W);else if(Y&2&&le.class!==ue.class&&l(U,"class",null,ue.class,W),Y&4&&l(U,"style",le.style,ue.style,W),Y&8){const Fe=b.dynamicProps;for(let We=0;We<Fe.length;We++){const Ue=Fe[We],Nt=le[Ue],xo=ue[Ue];(xo!==Nt||Ue==="value")&&l(U,Ue,Nt,xo,W,_.children,E,D,K)}}Y&1&&_.children!==b.children&&d(U,b.children)}else!ee&&B==null&&Z(U,b,le,ue,E,D,W);((me=ue.onVnodeUpdated)||ae)&&et(()=>{me&&Mt(me,E,b,_),ae&&Vn(b,_,E,"updated")},D)},de=(_,b,E,D,W,J,ee)=>{for(let U=0;U<b.length;U++){const Y=_[U],B=b[U],ae=Y.el&&(Y.type===Ee||!Gn(Y,B)||Y.shapeFlag&70)?f(Y.el):E;w(Y,B,ae,null,D,W,J,ee,!0)}},Z=(_,b,E,D,W,J,ee)=>{if(E!==D){if(E!==He)for(const U in E)!ms(U)&&!(U in D)&&l(_,U,E[U],null,ee,b.children,W,J,K);for(const U in D){if(ms(U))continue;const Y=D[U],B=E[U];Y!==B&&U!=="value"&&l(_,U,B,Y,ee,b.children,W,J,K)}"value"in D&&l(_,"value",E.value,D.value)}},ve=(_,b,E,D,W,J,ee,U,Y)=>{const B=b.el=_?_.el:r(""),ae=b.anchor=_?_.anchor:r("");let{patchFlag:le,dynamicChildren:ue,slotScopeIds:me}=b;(Tn||le&2048)&&(le=0,Y=!1,ue=null),me&&(U=U?U.concat(me):me),_==null?(o(B,E,D),o(ae,E,D),q(b.children,E,ae,W,J,ee,U,Y)):le>0&&le&64&&ue&&_.dynamicChildren?(de(_.dynamicChildren,ue,E,W,J,ee,U),Rs(_,b)):ke(_,b,E,ae,W,J,ee,U,Y)},ge=(_,b,E,D,W,J,ee,U,Y)=>{b.slotScopeIds=U,_==null?b.shapeFlag&512?W.ctx.activate(b,E,D,ee,Y):we(b,E,D,W,J,ee,Y):Le(_,b,Y)},we=(_,b,E,D,W,J,ee)=>{const U=_.component=w_(_,D,W);if(U.type.__hmrId&&sv(U),hs(_),cn(U,"mount"),mr(_)&&(U.ctx.renderer=oe),cn(U,"init"),x_(U),un(U,"init"),U.asyncDep){if(W&&W.registerDep(U,ne),!_.el){const Y=U.subTree=G(ft);x(null,Y,b,E)}return}ne(U,_,b,E,W,J,ee),vs(),un(U,"mount")},Le=(_,b,E)=>{const D=b.component=_.component;if(yv(_,b,E))if(D.asyncDep&&!D.asyncResolved){hs(b),ce(D,b,E),vs();return}else D.next=b,ov(D.update),D.update();else b.el=_.el,D.vnode=b},ne=(_,b,E,D,W,J,ee)=>{const U=()=>{if(_.isMounted){let{next:ae,bu:le,u:ue,parent:me,vnode:Ie}=_,Fe=ae,We;hs(ae||_.vnode),Bn(_,!1),ae?(ae.el=Ie.el,ce(_,ae,ee)):ae=Ie,le&&Zn(le),(We=ae.props&&ae.props.onVnodeBeforeUpdate)&&Mt(We,me,ae,Ie),Bn(_,!0),cn(_,"render");const Ue=_l(_);un(_,"render");const Nt=_.subTree;_.subTree=Ue,cn(_,"patch"),w(Nt,Ue,f(Nt.el),X(Nt),_,W,J),un(_,"patch"),ae.el=Ue.el,Fe===null&&wv(_,Ue.el),ue&&et(ue,W),(We=ae.props&&ae.props.onVnodeUpdated)&&et(()=>Mt(We,me,ae,Ie),W),Yd(_),vs()}else{let ae;const{el:le,props:ue}=b,{bm:me,m:Ie,parent:Fe}=_,We=Ao(b);if(Bn(_,!1),me&&Zn(me),!We&&(ae=ue&&ue.onVnodeBeforeMount)&&Mt(ae,Fe,b),Bn(_,!0),le&&Re){const Ue=()=>{cn(_,"render"),_.subTree=_l(_),un(_,"render"),cn(_,"hydrate"),Re(le,_.subTree,_,W,null),un(_,"hydrate")};We?b.type.__asyncLoader().then(()=>!_.isUnmounted&&Ue()):Ue()}else{cn(_,"render");const Ue=_.subTree=_l(_);un(_,"render"),cn(_,"patch"),w(null,Ue,E,D,_,W,J),un(_,"patch"),b.el=Ue.el}if(Ie&&et(Ie,W),!We&&(ae=ue&&ue.onVnodeMounted)){const Ue=b;et(()=>Mt(ae,Fe,Ue),W)}(b.shapeFlag&256||Fe&&Ao(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&_.a&&et(_.a,W),_.isMounted=!0,Xl(_),b=E=D=null}},Y=_.effect=new ir(U,()=>nl(B),_.scope),B=_.update=()=>Y.run();B.id=_.uid,Bn(_,!0),Y.onTrack=_.rtc?ae=>Zn(_.rtc,ae):void 0,Y.onTrigger=_.rtg?ae=>Zn(_.rtg,ae):void 0,B.ownerInstance=_,B()},ce=(_,b,E)=>{b.component=_;const D=_.vnode.props;_.vnode=b,_.next=null,Xv(_,b.props,D,E),a_(_,b.children,E),go(),lc(),bo()},ke=(_,b,E,D,W,J,ee,U,Y=!1)=>{const B=_&&_.children,ae=_?_.shapeFlag:0,le=b.children,{patchFlag:ue,shapeFlag:me}=b;if(ue>0){if(ue&128){Tt(B,le,E,D,W,J,ee,U,Y);return}else if(ue&256){Pe(B,le,E,D,W,J,ee,U,Y);return}}me&8?(ae&16&&K(B,W,J),le!==B&&d(E,le)):ae&16?me&16?Tt(B,le,E,D,W,J,ee,U,Y):K(B,W,J,!0):(ae&8&&d(E,""),me&16&&q(le,E,D,W,J,ee,U,Y))},Pe=(_,b,E,D,W,J,ee,U,Y)=>{_=_||To,b=b||To;const B=_.length,ae=b.length,le=Math.min(B,ae);let ue;for(ue=0;ue<le;ue++){const me=b[ue]=Y?$n(b[ue]):jt(b[ue]);w(_[ue],me,E,null,W,J,ee,U,Y)}B>ae?K(_,W,J,!0,!1,le):q(b,E,D,W,J,ee,U,Y,le)},Tt=(_,b,E,D,W,J,ee,U,Y)=>{let B=0;const ae=b.length;let le=_.length-1,ue=ae-1;for(;B<=le&&B<=ue;){const me=_[B],Ie=b[B]=Y?$n(b[B]):jt(b[B]);if(Gn(me,Ie))w(me,Ie,E,null,W,J,ee,U,Y);else break;B++}for(;B<=le&&B<=ue;){const me=_[le],Ie=b[ue]=Y?$n(b[ue]):jt(b[ue]);if(Gn(me,Ie))w(me,Ie,E,null,W,J,ee,U,Y);else break;le--,ue--}if(B>le){if(B<=ue){const me=ue+1,Ie=me<ae?b[me].el:D;for(;B<=ue;)w(null,b[B]=Y?$n(b[B]):jt(b[B]),E,Ie,W,J,ee,U,Y),B++}}else if(B>ue)for(;B<=le;)ht(_[B],W,J,!0),B++;else{const me=B,Ie=B,Fe=new Map;for(B=Ie;B<=ue;B++){const rt=b[B]=Y?$n(b[B]):jt(b[B]);rt.key!=null&&(Fe.has(rt.key)&&V("Duplicate keys found during update:",JSON.stringify(rt.key),"Make sure keys are unique."),Fe.set(rt.key,B))}let We,Ue=0;const Nt=ue-Ie+1;let xo=!1,Yr=0;const jo=new Array(Nt);for(B=0;B<Nt;B++)jo[B]=0;for(B=me;B<=le;B++){const rt=_[B];if(Ue>=Nt){ht(rt,W,J,!0);continue}let Qt;if(rt.key!=null)Qt=Fe.get(rt.key);else for(We=Ie;We<=ue;We++)if(jo[We-Ie]===0&&Gn(rt,b[We])){Qt=We;break}Qt===void 0?ht(rt,W,J,!0):(jo[Qt-Ie]=B+1,Qt>=Yr?Yr=Qt:xo=!0,w(rt,b[Qt],E,null,W,J,ee,U,Y),Ue++)}const Qr=xo?d_(jo):To;for(We=Qr.length-1,B=Nt-1;B>=0;B--){const rt=Ie+B,Qt=b[rt],Zr=rt+1<ae?b[rt+1].el:D;jo[B]===0?w(null,Qt,E,Zr,W,J,ee,U,Y):xo&&(We<0||B!==Qr[We]?nt(Qt,E,Zr,2):We--)}}},nt=(_,b,E,D,W=null)=>{const{el:J,type:ee,transition:U,children:Y,shapeFlag:B}=_;if(B&6){nt(_.component.subTree,b,E,D);return}if(B&128){_.suspense.move(b,E,D);return}if(B&64){ee.move(_,b,E,oe);return}if(ee===Ee){o(J,b,E);for(let le=0;le<Y.length;le++)nt(Y[le],b,E,D);o(_.anchor,b,E);return}if(ee===ui){T(_,b,E);return}if(D!==2&&B&1&&U)if(D===0)U.beforeEnter(J),o(J,b,E),et(()=>U.enter(J),W);else{const{leave:le,delayLeave:ue,afterLeave:me}=U,Ie=()=>o(J,b,E),Fe=()=>{le(J,()=>{Ie(),me&&me()})};ue?ue(J,Ie,Fe):Fe()}else o(J,b,E)},ht=(_,b,E,D=!1,W=!1)=>{const{type:J,props:ee,ref:U,children:Y,dynamicChildren:B,shapeFlag:ae,patchFlag:le,dirs:ue}=_;if(U!=null&&ra(U,null,E,_,!0),ae&256){b.ctx.deactivate(_);return}const me=ae&1&&ue,Ie=!Ao(_);let Fe;if(Ie&&(Fe=ee&&ee.onVnodeBeforeUnmount)&&Mt(Fe,b,_),ae&6)Ct(_.component,E,D);else{if(ae&128){_.suspense.unmount(E,D);return}me&&Vn(_,null,b,"beforeUnmount"),ae&64?_.type.remove(_,b,E,W,oe,D):B&&(J!==Ee||le>0&&le&64)?K(B,b,E,!1,!0):(J===Ee&&le&384||!W&&ae&16)&&K(Y,b,E),D&&Yt(_)}(Ie&&(Fe=ee&&ee.onVnodeUnmounted)||me)&&et(()=>{Fe&&Mt(Fe,b,_),me&&Vn(_,null,b,"unmounted")},E)},Yt=_=>{const{type:b,el:E,anchor:D,transition:W}=_;if(b===Ee){_.patchFlag>0&&_.patchFlag&2048&&W&&!W.persisted?_.children.forEach(ee=>{ee.type===ft?i(ee.el):Yt(ee)}):jn(E,D);return}if(b===ui){O(_);return}const J=()=>{i(E),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(_.shapeFlag&1&&W&&!W.persisted){const{leave:ee,delayLeave:U}=W,Y=()=>ee(E,J);U?U(_.el,J,Y):Y()}else J()},jn=(_,b)=>{let E;for(;_!==b;)E=m(_),i(_),_=E;i(b)},Ct=(_,b,E)=>{_.type.__hmrId&&lv(_);const{bum:D,scope:W,update:J,subTree:ee,um:U}=_;D&&Zn(D),W.stop(),J&&(J.active=!1,ht(ee,_,b,E)),U&&et(U,b),et(()=>{_.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve()),pv(_)},K=(_,b,E,D=!1,W=!1,J=0)=>{for(let ee=J;ee<_.length;ee++)ht(_[ee],b,E,D,W)},X=_=>_.shapeFlag&6?X(_.component.subTree):_.shapeFlag&128?_.suspense.next():m(_.anchor||_.el),te=(_,b,E)=>{_==null?b._vnode&&ht(b._vnode,null,null,!0):w(b._vnode||null,_,b,null,null,null,E),lc(),Bd(),b._vnode=_},oe={p:w,um:ht,m:nt,r:Yt,mt:we,mc:q,pc:ke,pbc:de,n:X,o:e};let xe,Re;return t&&([xe,Re]=t(oe)),{render:te,hydrate:xe,createApp:Qv(te,xe)}}function Bn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Rs(e,t,n=!1){const o=e.children,i=t.children;if(re(o)&&re(i))for(let l=0;l<o.length;l++){const a=o[l];let r=i[l];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[l]=$n(i[l]),r.el=a.el),n||Rs(a,r)),r.type===Vi&&(r.el=a.el),r.type===ft&&!r.el&&(r.el=a.el)}}function d_(e){const t=e.slice(),n=[0];let o,i,l,a,r;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(i=n[n.length-1],e[i]<u){t[o]=i,n.push(o);continue}for(l=0,a=n.length-1;l<a;)r=l+a>>1,e[n[r]]<u?l=r+1:a=r;u<e[n[l]]&&(l>0&&(t[o]=n[l-1]),n[l]=o)}}for(l=n.length,a=n[l-1];l-- >0;)n[l]=a,a=t[a];return n}const p_=e=>e.__isTeleport,Mo=e=>e&&(e.disabled||e.disabled===""),yc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ca=(e,t)=>{const n=e&&e.to;if(De(n))if(t){const o=t(n);return o||V(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return V("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Mo(e)&&V(`Invalid Teleport target: ${n}`),n},f_={__isTeleport:!0,process(e,t,n,o,i,l,a,r,c,u){const{mc:d,pc:f,pbc:m,o:{insert:h,querySelector:v,createText:w,createComment:S}}=u,x=Mo(t.props);let{shapeFlag:k,children:g,dynamicChildren:T}=t;if(Tn&&(c=!1,T=null),e==null){const O=t.el=S("teleport start"),P=t.anchor=S("teleport end");h(O,n,o),h(P,n,o);const j=t.target=ca(t.props,v),L=t.targetAnchor=w("");j?(h(L,j),a=a||yc(j)):x||V("Invalid Teleport target on mount:",j,`(${typeof j})`);const q=(se,de)=>{k&16&&d(g,se,de,i,l,a,r,c)};x?q(n,P):j&&q(j,L)}else{t.el=e.el;const O=t.anchor=e.anchor,P=t.target=e.target,j=t.targetAnchor=e.targetAnchor,L=Mo(e.props),q=L?n:P,se=L?O:j;if(a=a||yc(P),T?(m(e.dynamicChildren,T,q,i,l,a,r),Rs(e,t,!0)):c||f(e,t,q,se,i,l,a,r,!1),x)L||ns(t,n,O,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const de=t.target=ca(t.props,v);de?ns(t,de,null,u,0):V("Invalid Teleport target on update:",P,`(${typeof P})`)}else L&&ns(t,P,j,u,1)}gp(t)},remove(e,t,n,o,{um:i,o:{remove:l}},a){const{shapeFlag:r,children:c,anchor:u,targetAnchor:d,target:f,props:m}=e;if(f&&l(d),(a||!Mo(m))&&(l(u),r&16))for(let h=0;h<c.length;h++){const v=c[h];i(v,t,n,!0,!!v.dynamicChildren)}},move:ns,hydrate:m_};function ns(e,t,n,{o:{insert:o},m:i},l=2){l===0&&o(e.targetAnchor,t,n);const{el:a,anchor:r,shapeFlag:c,children:u,props:d}=e,f=l===2;if(f&&o(a,t,n),(!f||Mo(d))&&c&16)for(let m=0;m<u.length;m++)i(u[m],t,n,2);f&&o(r,t,n)}function m_(e,t,n,o,i,l,{o:{nextSibling:a,parentNode:r,querySelector:c}},u){const d=t.target=ca(t.props,c);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Mo(t.props))t.anchor=u(a(e),t,r(e),n,o,i,l),t.targetAnchor=f;else{t.anchor=a(e);let m=f;for(;m;)if(m=a(m),m&&m.nodeType===8&&m.data==="teleport anchor"){t.targetAnchor=m,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(f,t,d,n,o,i,l)}gp(t)}return t.anchor&&a(t.anchor)}const h_=f_;function gp(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ee=Symbol.for("v-fgt"),Vi=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),ui=Symbol.for("v-stc"),di=[];let Bt=null;function y(e=!1){di.push(Bt=e?null:[])}function v_(){di.pop(),Bt=di[di.length-1]||null}let Ii=1;function wc(e){Ii+=e}function bp(e){return e.dynamicChildren=Ii>0?Bt||To:null,v_(),Ii>0&&Bt&&Bt.push(e),e}function ie(e,t,n,o,i,l){return bp(s(e,t,n,o,i,l,!0))}function z(e,t,n,o,i){return bp(G(e,t,n,o,i,!0))}function Hn(e){return e?e.__v_isVNode===!0:!1}function Gn(e,t){return t.shapeFlag&6&&zo.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const __=(...e)=>g_(...e),rl="__vInternal",yp=({key:e})=>e??null,_s=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?De(e)||Te(e)||pe(e)?{i:Ge,r:e,k:t,f:!!n}:e:null);function s(e,t=null,n=null,o=0,i=null,l=e===Ee?0:1,a=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yp(t),ref:t&&_s(t),scopeId:il,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ge};return r?(gr(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),c.key!==c.key&&V("VNode created with invalid key (NaN). VNode type:",c.type),Ii>0&&!a&&Bt&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Bt.push(c),c}const G=__;function g_(e,t=null,n=null,o=0,i=null,l=!1){if((!e||e===Lv)&&(e||V(`Invalid vnode type when creating vnode: ${e}.`),e=ft),Hn(e)){const r=ln(e,t,!0);return n&&gr(r,n),Ii>0&&!l&&Bt&&(r.shapeFlag&6?Bt[Bt.indexOf(e)]=r:Bt.push(r)),r.patchFlag|=-2,r}if($p(e)&&(e=e.__vccOpts),t){t=H(t);let{class:r,style:c}=t;r&&!De(r)&&(t.class=Be(r)),Ce(c)&&(Es(c)&&!re(c)&&(c=Ne({},c)),t.style=tt(c))}const a=De(e)?1:Xd(e)?128:p_(e)?64:Ce(e)?4:pe(e)?2:0;return a&4&&Es(e)&&(e=he(e),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),s(e,t,n,o,i,a,l,!0)}function H(e){return e?Es(e)||rl in e?Ne({},e):e:null}function ln(e,t,n=!1){const{props:o,ref:i,patchFlag:l,children:a}=e,r=t?Ke(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:r,key:r&&yp(r),ref:t&&t.ref?n&&i?re(i)?i.concat(_s(t)):[i,_s(t)]:_s(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l===-1&&re(a)?a.map(wp):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ln(e.ssContent),ssFallback:e.ssFallback&&ln(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function wp(e){const t=ln(e);return re(e.children)&&(t.children=e.children.map(wp)),t}function p(e=" ",t=0){return G(Vi,null,e,t)}function ye(e="",t=!1){return t?(y(),z(ft,null,e)):G(ft,null,e)}function jt(e){return e==null||typeof e=="boolean"?G(ft):re(e)?G(Ee,null,e.slice()):typeof e=="object"?$n(e):G(Vi,null,String(e))}function $n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ln(e)}function gr(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(re(t))n=16;else if(typeof t=="object")if(o&65){const i=t.default;i&&(i._c&&(i._d=!1),gr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(rl in t)?t._ctx=Ge:i===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else pe(t)?(t={default:t,_ctx:Ge},n=32):(t=String(t),o&64?(n=16,t=[p(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ke(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const i in o)if(i==="class")t.class!==o.class&&(t.class=Be([t.class,o.class]));else if(i==="style")t.style=tt([t.style,o.style]);else if(Hi(i)){const l=t[i],a=o[i];a&&l!==a&&!(re(l)&&l.includes(a))&&(t[i]=l?[].concat(l,a):a)}else i!==""&&(t[i]=o[i])}return t}function Mt(e,t,n,o=null){Rt(e,t,7,[n,o])}const b_=dp();let y_=0;function w_(e,t,n){const o=e.type,i=(t?t.appContext:e.appContext)||b_,l={uid:y_++,vnode:e,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new xd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fp(o,i),emitsOptions:Zd(o,i),emit:null,emitted:null,propsDefaults:He,inheritAttrs:o.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=Wv(l),l.root=t?t.root:l,l.emit=vv.bind(null,l),e.ce&&e.ce(l),l}let Ze=null;const St=()=>Ze||Ge;let br,ko,Sc="__VUE_INSTANCE_SETTERS__";(ko=$s()[Sc])||(ko=$s()[Sc]=[]),ko.push(e=>Ze=e),br=e=>{ko.length>1?ko.forEach(t=>t(e)):ko[0](e)};const Ko=e=>{br(e),e.scope.on()},fo=()=>{Ze&&Ze.scope.off(),br(null)},S_=Fn("slot,component");function ua(e,t){const n=t.isNativeTag||vd;(S_(e)||n(e))&&V("Do not use built-in or reserved HTML elements as component id: "+e)}function Sp(e){return e.vnode.shapeFlag&4}let Oi=!1;function x_(e,t=!1){Oi=t;const{props:n,children:o}=e.vnode,i=Sp(e);Zv(e,n,i,t),l_(e,o);const l=i?k_(e,t):void 0;return Oi=!1,l}function k_(e,t){var n;const o=e.type;{if(o.name&&ua(o.name,e.appContext.config),o.components){const l=Object.keys(o.components);for(let a=0;a<l.length;a++)ua(l[a],e.appContext.config)}if(o.directives){const l=Object.keys(o.directives);for(let a=0;a<l.length;a++)tp(l[a])}o.compilerOptions&&$_()&&V('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=el(new Proxy(e.ctx,cp)),Hv(e);const{setup:i}=o;if(i){const l=e.setupContext=i.length>1?kp(e):null;Ko(e),go();const a=hn(i,e,0,[oi(e.props),l]);if(bo(),fo(),Xa(a)){if(a.then(fo,fo),t)return a.then(r=>{xc(e,r,t)}).catch(r=>{tl(r,e,0)});if(e.asyncDep=a,!e.suspense){const r=(n=o.name)!=null?n:"Anonymous";V(`Component <${r}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else xc(e,a,t)}else xp(e,t)}function xc(e,t,n){pe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ce(t)?(Hn(t)&&V("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=Hd(t),Nv(e)):t!==void 0&&V(`setup() should return an object. Received: ${t===null?"null":typeof t}`),xp(e,n)}let da;const $_=()=>!da;function xp(e,t,n){const o=e.type;if(!e.render){if(!t&&da&&!o.render){const i=o.template||vr(e).template;if(i){cn(e,"compile");const{isCustomElement:l,compilerOptions:a}=e.appContext.config,{delimiters:r,compilerOptions:c}=o,u=Ne(Ne({isCustomElement:l,delimiters:r},a),c);o.render=da(i,u),un(e,"compile")}}e.render=o.render||bt}Ko(e),go(),Vv(e),bo(),fo(),!o.render&&e.render===bt&&!t&&(o.template?V('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):V("Component is missing template or render function."))}function I_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Cs(),at(e,"get","$attrs"),t[n]},set(){return V("setupContext.attrs is readonly."),!1},deleteProperty(){return V("setupContext.attrs is readonly."),!1}}))}function O_(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(t,n){return at(e,"get","$slots"),t[n]}}))}function kp(e){return Object.freeze({get attrs(){return I_(e)},get slots(){return O_(e)},get emit(){return(n,...o)=>e.emit(n,...o)},expose:n=>{if(e.exposed&&V("expose() should be called only once per setup()."),n!=null){let o=typeof n;o==="object"&&(re(n)?o="array":Te(n)&&(o="ref")),o!=="object"&&V(`expose() should be passed a plain object, received ${o}.`)}e.exposed=n||{}}})}function cl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hd(el(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in po)return po[n](e)},has(t,n){return n in t||n in po}}))}const z_=/(?:^|[-_])(\w)/g,E_=e=>e.replace(z_,t=>t.toUpperCase()).replace(/[-_]/g,"");function zi(e,t=!0){return pe(e)?e.displayName||e.name:e.name||t&&e.__name}function ul(e,t,n=!1){let o=zi(t);if(!o&&t.__file){const i=t.__file.match(/([^/\\]+)\.\w+$/);i&&(o=i[1])}if(!o&&e&&e.parent){const i=l=>{for(const a in l)if(l[a]===t)return a};o=i(e.components||e.parent.type.components)||i(e.appContext.components)}return o?E_(o):n?"App":"Anonymous"}function $p(e){return pe(e)&&"__vccOpts"in e}const R=(e,t)=>Jh(e,t,Oi);function wt(e,t,n){const o=arguments.length;return o===2?Ce(t)&&!re(t)?Hn(t)?G(e,null,[t]):G(e,t):G(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Hn(n)&&(n=[n]),G(e,t,n))}const T_=Symbol.for("v-scx"),C_=()=>{{const e=$(T_);return e||V("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function wl(e){return!!(e&&e.__v_isShallow)}function A_(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},o={style:"color:#9d288c"},i={header(f){return Ce(f)?f.__isVue?["div",e,"VueInstance"]:Te(f)?["div",{},["span",e,d(f)],"<",r(f.value),">"]:co(f)?["div",{},["span",e,wl(f)?"ShallowReactive":"Reactive"],"<",r(f),`>${Wn(f)?" (readonly)":""}`]:Wn(f)?["div",{},["span",e,wl(f)?"ShallowReadonly":"Readonly"],"<",r(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...l(f.$)]}};function l(f){const m=[];f.type.props&&f.props&&m.push(a("props",he(f.props))),f.setupState!==He&&m.push(a("setup",f.setupState)),f.data!==He&&m.push(a("data",he(f.data)));const h=c(f,"computed");h&&m.push(a("computed",h));const v=c(f,"inject");return v&&m.push(a("injected",v)),m.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),m}function a(f,m){return m=Ne({},m),Object.keys(m).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(m).map(h=>["div",{},["span",o,h+": "],r(m[h],!1)])]]:["span",{}]}function r(f,m=!0){return typeof f=="number"?["span",t,f]:typeof f=="string"?["span",n,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:Ce(f)?["object",{object:m?he(f):f}]:["span",n,String(f)]}function c(f,m){const h=f.type;if(pe(h))return;const v={};for(const w in f.ctx)u(h,w,m)&&(v[w]=f.ctx[w]);return v}function u(f,m,h){const v=f[h];if(re(v)&&v.includes(m)||Ce(v)&&m in v||f.extends&&u(f.extends,m,h)||f.mixins&&f.mixins.some(w=>u(w,m,h)))return!0}function d(f){return wl(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(i):window.devtoolsFormatters=[i]}const Ws="3.3.4",M_="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,kc=Xn&&Xn.createElement("template"),P_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const i=t?Xn.createElementNS(M_,e):Xn.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:e=>Xn.createTextNode(e),createComment:e=>Xn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,i,l){const a=n?n.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===l||!(i=i.nextSibling)););else{kc.innerHTML=o?`<svg>${e}</svg>`:e;const r=kc.content;if(o){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function K_(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function L_(e,t,n){const o=e.style,i=De(n);if(n&&!i){if(t&&!De(t))for(const l in t)n[l]==null&&pa(o,l,"");for(const l in n)pa(o,l,n[l])}else{const l=o.display;i?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=l)}}const R_=/[^\\];\s*$/,$c=/\s*!important$/;function pa(e,t,n){if(re(n))n.forEach(o=>pa(e,t,o));else if(n==null&&(n=""),R_.test(n)&&V(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const o=W_(e,t);$c.test(n)?e.setProperty(vn(o),n.replace($c,""),"important"):e[o]=n}}const Ic=["Webkit","Moz","ms"],Sl={};function W_(e,t){const n=Sl[t];if(n)return n;let o=nn(t);if(o!=="filter"&&o in e)return Sl[t]=o;o=vo(o);for(let i=0;i<Ic.length;i++){const l=Ic[i]+o;if(l in e)return Sl[t]=l}return t}const Oc="http://www.w3.org/1999/xlink";function H_(e,t,n,o,i){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Oc,t.slice(6,t.length)):e.setAttributeNS(Oc,t,n);else{const l=rh(t);n==null||l&&!wd(n)?e.removeAttribute(t):e.setAttribute(t,l?"":n)}}function N_(e,t,n,o,i,l,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,i,l),e[t]=n??"";return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){e._value=n;const u=r==="OPTION"?e.getAttribute("value"):e.value,d=n??"";u!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=wd(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch(u){c||V(`Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,u)}c&&e.removeAttribute(t)}function F_(e,t,n,o){e.addEventListener(t,n,o)}function D_(e,t,n,o){e.removeEventListener(t,n,o)}function j_(e,t,n,o,i=null){const l=e._vei||(e._vei={}),a=l[t];if(o&&a)a.value=o;else{const[r,c]=V_(t);if(o){const u=l[t]=U_(o,i);F_(e,r,u,c)}else a&&(D_(e,r,a,c),l[t]=void 0)}}const zc=/(?:Once|Passive|Capture)$/;function V_(e){let t;if(zc.test(e)){t={};let o;for(;o=e.match(zc);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):vn(e.slice(2)),t]}let xl=0;const B_=Promise.resolve(),q_=()=>xl||(B_.then(()=>xl=0),xl=Date.now());function U_(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Rt(J_(o,n.value),t,5,[o])};return n.value=e,n.attached=q_(),n}function J_(e,t){if(re(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>i=>!i._stopped&&o&&o(i))}else return t}const Ec=/^on[a-z]/,Y_=(e,t,n,o,i=!1,l,a,r,c)=>{t==="class"?K_(e,o,i):t==="style"?L_(e,n,o):Hi(t)?xs(t)||j_(e,t,n,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Q_(e,t,o,i))?N_(e,t,o,l,a,r,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),H_(e,t,o,i))};function Q_(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Ec.test(t)&&pe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ec.test(t)&&De(n)?!1:t in e}function Z_(e){const t=St();if(!t){V("useCssVars is called without current active component instance.");return}const n=t.ut=(i=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(l=>ma(l,i))},o=()=>{const i=e(t.proxy);fa(t.subTree,i),n(i)};xv(o),bn(()=>{const i=new MutationObserver(o);i.observe(t.subTree.el.parentNode,{childList:!0}),ji(()=>i.disconnect())})}function fa(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{fa(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)ma(e.el,t);else if(e.type===Ee)e.children.forEach(n=>fa(n,t));else if(e.type===ui){let{el:n,anchor:o}=e;for(;n&&(ma(n,t),n!==o);)n=n.nextSibling}}function ma(e,t){if(e.nodeType===1){const n=e.style;for(const o in t)n.setProperty(`--${o}`,t[o])}}const wn="transition",Bo="animation",Ip={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},G_=Ne({},Iv,Ip),qn=(e,t=[])=>{re(e)?e.forEach(n=>n(...t)):e&&e(...t)},Tc=e=>e?re(e)?e.some(t=>t.length>1):e.length>1:!1;function X_(e){const t={};for(const Z in e)Z in Ip||(t[Z]=e[Z]);if(e.css===!1)return t;const{name:n="v",type:o,duration:i,enterFromClass:l=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:u=a,appearToClass:d=r,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,v=eg(i),w=v&&v[0],S=v&&v[1],{onBeforeEnter:x,onEnter:k,onEnterCancelled:g,onLeave:T,onLeaveCancelled:O,onBeforeAppear:P=x,onAppear:j=k,onAppearCancelled:L=g}=t,q=(Z,ve,ge)=>{xn(Z,ve?d:r),xn(Z,ve?u:a),ge&&ge()},se=(Z,ve)=>{Z._isLeaving=!1,xn(Z,f),xn(Z,h),xn(Z,m),ve&&ve()},de=Z=>(ve,ge)=>{const we=Z?j:k,Le=()=>q(ve,Z,ge);qn(we,[ve,Le]),Cc(()=>{xn(ve,Z?c:l),dn(ve,Z?d:r),Tc(we)||Ac(ve,o,w,Le)})};return Ne(t,{onBeforeEnter(Z){qn(x,[Z]),dn(Z,l),dn(Z,a)},onBeforeAppear(Z){qn(P,[Z]),dn(Z,c),dn(Z,u)},onEnter:de(!1),onAppear:de(!0),onLeave(Z,ve){Z._isLeaving=!0;const ge=()=>se(Z,ve);dn(Z,f),zp(),dn(Z,m),Cc(()=>{Z._isLeaving&&(xn(Z,f),dn(Z,h),Tc(T)||Ac(Z,o,S,ge))}),qn(T,[Z,ge])},onEnterCancelled(Z){q(Z,!1),qn(g,[Z])},onAppearCancelled(Z){q(Z,!0),qn(L,[Z])},onLeaveCancelled(Z){se(Z),qn(O,[Z])}})}function eg(e){if(e==null)return null;if(Ce(e))return[kl(e.enter),kl(e.leave)];{const t=kl(e);return[t,t]}}function kl(e){const t=Xm(e);return Xh(t,"<transition> explicit duration"),t}function dn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function xn(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Cc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let tg=0;function Ac(e,t,n,o){const i=e._endId=++tg,l=()=>{i===e._endId&&o()};if(n)return setTimeout(l,n);const{type:a,timeout:r,propCount:c}=Op(e,t);if(!a)return o();const u=a+"end";let d=0;const f=()=>{e.removeEventListener(u,m),l()},m=h=>{h.target===e&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},r+1),e.addEventListener(u,m)}function Op(e,t){const n=window.getComputedStyle(e),o=v=>(n[v]||"").split(", "),i=o(`${wn}Delay`),l=o(`${wn}Duration`),a=Mc(i,l),r=o(`${Bo}Delay`),c=o(`${Bo}Duration`),u=Mc(r,c);let d=null,f=0,m=0;t===wn?a>0&&(d=wn,f=a,m=l.length):t===Bo?u>0&&(d=Bo,f=u,m=c.length):(f=Math.max(a,u),d=f>0?a>u?wn:Bo:null,m=d?d===wn?l.length:c.length:0);const h=d===wn&&/\b(transform|all)(,|$)/.test(o(`${wn}Property`).toString());return{type:d,timeout:f,propCount:m,hasTransform:h}}function Mc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Pc(n)+Pc(e[o])))}function Pc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function zp(){return document.body.offsetHeight}const Ep=new WeakMap,Tp=new WeakMap,Cp={name:"TransitionGroup",props:Ne({},G_,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=St(),o=$v();let i,l;return al(()=>{if(!i.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!ag(i[0].el,n.vnode.el,a))return;i.forEach(ig),i.forEach(sg);const r=i.filter(lg);zp(),r.forEach(c=>{const u=c.el,d=u.style;dn(u,a),d.transform=d.webkitTransform=d.transitionDuration="";const f=u._moveCb=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",f),u._moveCb=null,xn(u,a))};u.addEventListener("transitionend",f)})}),()=>{const a=he(e),r=X_(a);let c=a.tag||Ee;i=l,l=t.default?op(t.default()):[];for(let u=0;u<l.length;u++){const d=l[u];d.key!=null?As(d,ta(d,r,o,n)):V("<TransitionGroup> children must be keyed.")}if(i)for(let u=0;u<i.length;u++){const d=i[u];As(d,ta(d,r,o,n)),Ep.set(d,d.el.getBoundingClientRect())}return G(c,null,l)}}},ng=e=>delete e.mode;Cp.props;const og=Cp;function ig(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function sg(e){Tp.set(e,e.el.getBoundingClientRect())}function lg(e){const t=Ep.get(e),n=Tp.get(e),o=t.left-n.left,i=t.top-n.top;if(o||i){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${o}px,${i}px)`,l.transitionDuration="0s",e}}function ag(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(r=>r&&o.classList.remove(r))}),n.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(o);const{hasTransform:l}=Op(o);return i.removeChild(o),l}const rg=["ctrl","shift","alt","meta"],cg={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>rg.some(n=>e[`${n}Key`]&&!t.includes(n))},ug=(e,t)=>(n,...o)=>{for(let i=0;i<t.length;i++){const l=cg[t[i]];if(l&&l(n,t))return}return e(n,...o)},dg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},os=(e,t)=>n=>{if(!("key"in n))return;const o=vn(n.key);if(t.some(i=>i===o||dg[i]===o))return e(n)},Ap={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):qo(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),qo(e,!0),o.enter(e)):o.leave(e,()=>{qo(e,!1)}):qo(e,t))},beforeUnmount(e,{value:t}){qo(e,t)}};function qo(e,t){e.style.display=t?e._vod:"none"}const pg=Ne({patchProp:Y_},P_);let Kc;function fg(){return Kc||(Kc=c_(pg))}const mg=(...e)=>{const t=fg().createApp(...e);hg(t),vg(t);const{mount:n}=t;return t.mount=o=>{const i=_g(o);if(!i)return;const l=t._component;!pe(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function hg(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>yd(t)||lh(t),writable:!1})}function vg(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){V("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return V(o),n},set(){V(o)}})}}function _g(e){if(De(e)){const t=document.querySelector(e);return t||V(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&V('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function gg(){A_()}gg();function ha(e,t={},n){for(const o in e){const i=e[o],l=n?`${n}:${o}`:o;typeof i=="object"&&i!==null?ha(i,t,l):typeof i=="function"&&(t[l]=i)}return t}const bg={run:e=>e()},yg=()=>bg,Mp=typeof console.createTask<"u"?console.createTask:yg;function wg(e,t){const n=t.shift(),o=Mp(n);return e.reduce((i,l)=>i.then(()=>o.run(()=>l(...t))),Promise.resolve())}function Sg(e,t){const n=t.shift(),o=Mp(n);return Promise.all(e.map(i=>o.run(()=>i(...t))))}function $l(e,t){for(const n of[...e])n(t)}class xg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,o={}){if(!t||typeof n!="function")return()=>{};const i=t;let l;for(;this._deprecatedHooks[t];)l=this._deprecatedHooks[t],t=l.to;if(l&&!o.allowDeprecated){let a=l.message;a||(a=`${i} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let o,i=(...l)=>(typeof o=="function"&&o(),o=void 0,i=void 0,n(...l));return o=this.hook(t,i),o}removeHook(t,n){if(this._hooks[t]){const o=this._hooks[t].indexOf(n);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const o=this._hooks[t]||[];delete this._hooks[t];for(const i of o)this.hook(t,i)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=ha(t),o=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{for(const i of o.splice(0,o.length))i()}}removeHooks(t){const n=ha(t);for(const o in n)this.removeHook(o,n[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(wg,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Sg,t,...n)}callHookWith(t,n,...o){const i=this._before||this._after?{name:n,args:o,context:{}}:void 0;this._before&&$l(this._before,i);const l=t(n in this._hooks?[...this._hooks[n]]:[],o);return l instanceof Promise?l.finally(()=>{this._after&&i&&$l(this._after,i)}):(this._after&&i&&$l(this._after,i),l)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function kg(){return new xg}function $g(e){return Array.isArray(e)?e:[e]}const Pp=["title","script","style","noscript"],Kp=["base","meta","link","style","script","noscript"],Ig=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Og=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],zg=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Lp(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function va(e){return Lp(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Eg(e){let t=9;for(const n of e)for(let o=0;o<n.length;)t=Math.imul(t^n.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Rp(e,t){const{props:n,tag:o}=e;if(Og.includes(o))return o;if(o==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const i=["id"];o==="meta"&&i.push("name","property","http-equiv");for(const l of i)if(typeof n[l]<"u"){const a=String(n[l]);return t&&!t(a)?!1:`${o}:${l}:${a}`}return!1}function Lc(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function is(e,t=!1,n){const{tag:o,$el:i}=e;i&&(Object.entries(o.props).forEach(([l,a])=>{a=String(a);const r=`attr:${l}`;if(l==="class"){if(!a)return;for(const c of a.split(" ")){const u=`${r}:${c}`;n&&n(e,u,()=>i.classList.remove(c)),i.classList.contains(c)||i.classList.add(c)}return}n&&!l.startsWith("data-h-")&&n(e,r,()=>i.removeAttribute(l)),(t||i.getAttribute(l)!==a)&&i.setAttribute(l,a)}),Pp.includes(o.tag)&&(o.textContent&&o.textContent!==i.textContent?i.textContent=o.textContent:o.innerHTML&&o.innerHTML!==i.innerHTML&&(i.innerHTML=o.innerHTML)))}let Uo=!1;async function Wp(e,t={}){var m,h;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const o=t.document||e.resolvedOptions.document||window.document,i=(await e.resolveTags()).map(r);if(e.resolvedOptions.experimentalHashHydration&&(Uo=Uo||e._hash||!1,Uo)){const v=Eg(i.map(w=>w.tag._h));if(Uo===v)return;Uo=v}const l=e._popSideEffectQueue();e.headEntries().map(v=>v._sde).forEach(v=>{Object.entries(v).forEach(([w,S])=>{l[w]=S})});const a=(v,w,S)=>{w=`${v.renderId}:${w}`,v.entry&&(v.entry._sde[w]=S),delete l[w]};function r(v){const w=e.headEntries().find(x=>x._i===v._e),S={renderId:v._d||va(v),$el:null,shouldRender:!0,tag:v,entry:w,markSideEffect:(x,k)=>a(S,x,k)};return S}const c=[],u={body:[],head:[]},d=v=>{e._elMap[v.renderId]=v.$el,c.push(v),a(v,"el",()=>{var w;(w=v.$el)==null||w.remove(),delete e._elMap[v.renderId]})};for(const v of i){if(await e.hooks.callHook("dom:beforeRenderTag",v),!v.shouldRender)continue;const{tag:w}=v;if(w.tag==="title"){o.title=w.textContent||"",c.push(v);continue}if(w.tag==="htmlAttrs"||w.tag==="bodyAttrs"){v.$el=o[w.tag==="htmlAttrs"?"documentElement":"body"],is(v,!1,a),c.push(v);continue}if(v.$el=e._elMap[v.renderId],!v.$el&&w.key&&(v.$el=o.querySelector(`${(m=w.tagPosition)!=null&&m.startsWith("body")?"body":"head"} > ${w.tag}[data-h-${w._h}]`)),v.$el){v.tag._d&&is(v),d(v);continue}u[(h=w.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(v)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([v,w])=>{var x;if(!w.length)return;const S=(x=o==null?void 0:o[v])==null?void 0:x.children;if(S){for(const k of[...S].reverse()){const g=k.tagName.toLowerCase();if(!Kp.includes(g))continue;const T=k.getAttributeNames().reduce((L,q)=>({...L,[q]:k.getAttribute(q)}),{}),O={tag:g,props:T};k.innerHTML&&(O.innerHTML=k.innerHTML);const P=va(O);let j=w.findIndex(L=>(L==null?void 0:L.renderId)===P);if(j===-1){const L=Rp(O);j=w.findIndex(q=>(q==null?void 0:q.tag._d)&&q.tag._d===L)}if(j!==-1){const L=w[j];L.$el=k,is(L),d(L),delete w[j]}}w.forEach(k=>{const g=k.tag.tagPosition||"head";f[g]=f[g]||o.createDocumentFragment(),k.$el||(k.$el=o.createElement(k.tag.tag),is(k,!0)),f[g].appendChild(k.$el),d(k)})}}),f.head&&o.head.appendChild(f.head),f.bodyOpen&&o.body.insertBefore(f.bodyOpen,o.body.firstChild),f.bodyClose&&o.body.appendChild(f.bodyClose);for(const v of c)await e.hooks.callHook("dom:renderTag",v);Object.values(l).forEach(v=>v())}let Il=null;async function Hp(e,t={}){function n(){return Il=null,Wp(e,t)}const o=t.delayFn||(i=>setTimeout(i,10));return Il=Il||new Promise(i=>o(()=>i(n())))}function Tg(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Hp(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}}function Cg(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const Rc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Wc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in Rc?Rc[t]:10}const Ag=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Mg(){return{hooks:{"tags:resolve":e=>{const t=n=>{var o;return(o=e.tags.find(i=>i._d===n))==null?void 0:o._p};for(const{prefix:n,offset:o}of Ag)for(const i of e.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(n))){const l=t(i.tagPriority.replace(n,""));typeof l<"u"&&(i._p=l+o)}e.tags.sort((n,o)=>n._p-o._p).sort((n,o)=>Wc(n)-Wc(o))}}}}function Pg(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(i=>i.tag==="titleTemplate");const o=t.findIndex(i=>i.tag==="title");if(o!==-1&&n!==-1){const i=Lc(t[n].textContent,t[o].textContent);i!==null?t[o].textContent=i||t[o].textContent:delete t[o]}else if(n!==-1){const i=Lc(t[n].textContent);i!==null&&(t[n].textContent=i,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}}function Kg(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const Lg=["link","style","script","noscript"];function Rg(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=va(e)),e.key&&Lg.includes(e.tag)&&(e._h=Lp(e.key),e.props[`data-h-${e._h}`]="")}}}}const Hc=["script","link","bodyAttrs"];function Wg(){const e=(t,n)=>{const o={},i={};Object.entries(n.props).forEach(([a,r])=>{a.startsWith("on")&&typeof r=="function"?i[a]=r:o[a]=r});let l;return t==="dom"&&n.tag==="script"&&typeof o.src=="string"&&typeof i.onload<"u"&&(l=o.src,delete o.src),{props:o,eventHandlers:i,delayedSrc:l}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!Hc.includes(n.tag)||!Object.entries(n.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!Hc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([l,a])=>l.startsWith("on")&&typeof a=="function"))return;const{props:n,eventHandlers:o,delayedSrc:i}=e("dom",t.tag);Object.keys(o).length&&(t.tag.props=n,t.tag._eventHandlers=o,t.tag._delayedSrc=i)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([i,l])=>{const a=`${t.tag._d||t.tag._p}:${i}`,r=i.slice(2).toLowerCase(),c=`data-h-${r}`;if(t.markSideEffect(a,()=>{}),n.hasAttribute(c))return;const u=l;n.setAttribute(c,""),o.addEventListener(r,u),t.entry&&(t.entry._sde[a]=()=>{o.removeEventListener(r,u),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}}const Hg=["templateParams","htmlAttrs","bodyAttrs"];function Ng(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(o=>{e.props[o]&&(e.key=e.props[o],delete e.props[o])});const n=Rp(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(o=>{const i=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,l=t[i];if(l){let r=o==null?void 0:o.tagDuplicateStrategy;if(!r&&Hg.includes(o.tag)&&(r="merge"),r==="merge"){const c=l.props;["class","style"].forEach(u=>{o.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),o.props[u]=`${c[u]} ${o.props[u]}`)}),t[i].props={...c,...o.props};return}else if(o._e===l._e){l._duped=l._duped||[],o._d=`${l._d}:${l._duped.length+1}`,l._duped.push(o);return}}const a=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(Kp.includes(o.tag)&&a===0){delete t[i];return}t[i]=o});const n=[];Object.values(t).forEach(o=>{const i=o._duped;delete o._duped,n.push(o),i&&n.push(...i)}),e.tags=n}}}}function ss(e,t){function n(l){if(["s","pageTitle"].includes(l))return t.pageTitle;let a;return l.includes(".")?a=l.split(".").reduce((r,c)=>r&&r[c]||void 0,t):a=t[l],typeof a<"u"?a||"":!1}let o=e;try{o=decodeURI(e)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const a=n(l.slice(1));typeof a=="string"&&(e=e.replace(new RegExp(`\\${l}(\\W|$)`,"g"),`${a}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function Fg(){return{hooks:{"tags:resolve":e=>{var l;const{tags:t}=e,n=(l=t.find(a=>a.tag==="title"))==null?void 0:l.textContent,o=t.findIndex(a=>a.tag==="templateParams"),i=o!==-1?t[o].props:{};i.pageTitle=i.pageTitle||n||"";for(const a of t)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=ss(a.textContent,i);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=ss(a.props.content,i);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=ss(a.props.href,i);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(r,c)=>typeof c=="string"?ss(c,i):c)}catch{}e.tags=t.filter(a=>a.tag!=="templateParams")}}}}const Dg=typeof window<"u";let Np;function jg(e){return Np=e}function Vg(){return Np}async function Bg(e,t){const n={tag:e,props:{}};return e==="templateParams"?(n.props=t,n):["title","titleTemplate"].includes(e)?(n.textContent=t instanceof Promise?await t:t,n):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?n.props.src=t:n.innerHTML=t,n):!1:(n.props=await Ug(e,{...t}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(o=>zg.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Pp.includes(n.tag))&&(n[o]=n.props[o]),delete n.props[o]}),["innerHTML","textContent"].forEach(o=>{if(n.tag==="script"&&typeof n[o]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[o]=JSON.parse(n[o])}catch{n[o]=""}typeof n[o]=="object"&&(n[o]=JSON.stringify(n[o]))}),n.props.class&&(n.props.class=qg(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(o=>({...n,props:{...n.props,content:o}})):n)}function qg(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Ug(e,t){for(const n of Object.keys(t)){const o=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=o?"true":"":String(t[n])==="false"&&(o?t[n]="false":delete t[n])}return t}const Jg=10;async function Yg(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,o])=>typeof o<"u"&&Ig.includes(n)).forEach(([n,o])=>{const i=$g(o);t.push(...i.map(l=>Bg(n,l)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,o)=>(n._e=e._i,n._p=(e._i<<Jg)+o,n))}function Qg(){return[Ng(),Mg(),Fg(),Pg(),Rg(),Wg(),Kg()]}function Zg(e={}){return[Tg({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function Gg(e={}){const t=Xg({...e,plugins:[...Zg(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Cg(t.resolvedOptions.document)),jg(t),t}function Xg(e={}){let t=[],n={},o=0;const i=kg();e!=null&&e.hooks&&i.addHooks(e.hooks),e.plugins=[...Qg(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(r=>r.hooks&&i.addHooks(r.hooks)),e.document=e.document||(Dg?document:void 0);const l=()=>i.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return t},get hooks(){return i},use(r){r.hooks&&i.addHooks(r.hooks)},push(r,c){const u={_i:o++,input:r,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),t.push(u),l(),{dispose(){t=t.filter(d=>d._i!==u._i?!0:(n={...n,...d._sde||{}},d._sde={},l(),!1))},patch(d){t=t.map(f=>(f._i===u._i&&(u.input=f.input=d,l()),f))}}},async resolveTags(){const r={tags:[],entries:[...t]};await i.callHook("entries:resolve",r);for(const c of r.entries){const u=c._t||(d=>d);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const d of await Yg(c)){const f={tag:d,entry:c,resolvedOptions:a.resolvedOptions};await i.callHook("tag:normalise",f),r.tags.push(f.tag)}}return await i.callHook("tags:resolve",r),r.tags},_popSideEffectQueue(){const r={...n};return n={},r},_elMap:{}};return a.hooks.callHook("init",a),a}function e1(e){return typeof e=="function"?e():M(e)}function Hs(e,t=""){if(e instanceof Promise)return e;const n=e1(e);return!e||!n?n:Array.isArray(n)?n.map(o=>Hs(o,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([o,i])=>o==="titleTemplate"||o.startsWith("on")?[o,M(i)]:[o,Hs(i,o)])):n}const t1=Ws.startsWith("3"),n1=typeof window<"u",Fp="usehead";function yr(){return St()&&$(Fp)||Vg()}function o1(e){return{install(n){t1&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Fp,e))}}.install}function i1(e={}){const t=Gg({...e,domDelayFn:n=>setTimeout(()=>it(()=>n()),10),plugins:[s1(),...(e==null?void 0:e.plugins)||[]]});return t.install=o1(t),t}function s1(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Hs(t.input)}}}}function l1(e,t={}){const n=yr(),o=Q(!1),i=Q({});yo(()=>{i.value=o.value?{}:Hs(e)});const l=n.push(i.value,t);return _e(i,r=>{l.patch(r)}),St()&&(Di(()=>{l.dispose()}),lp(()=>{o.value=!0}),sp(()=>{o.value=!1})),l}function a1(e,t={}){return yr().push(e,t)}function Dp(e,t={}){var o;const n=yr();if(n){const i=n1||!!((o=n.resolvedOptions)!=null&&o.document);return t.mode==="server"&&i||t.mode==="client"&&!i?void 0:i?l1(e,t):a1(e,t)}}function r1(e,t){const n=i1(t||{}),o={unhead:n,install(i){Ws.startsWith("3")&&(i.config.globalProperties.$head=n,i.provide("usehead",n))},use(i){n.use(i)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(i,l){return n.push(i,l)},addEntry(i,l){return n.push(i,l)},addHeadObjs(i,l){return n.push(i,l)},addReactiveEntry(i,l){const a=Dp(i,l);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(i,l){l?Wp(n,{document:i}):Hp(n,{delayFn:a=>setTimeout(()=>a(),50),document:i})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=o.addHeadObjs,n.updateDOM=o.updateDOM,n.hooks.hook("dom:beforeRender",i=>{for(const l of o.hooks["before:dom"])l()===!1&&(i.shouldRender=!1)}),e&&o.addHeadObjs(e),o}const pi=Symbol("v-click-clicks"),eo=Symbol("v-click-clicks-elements"),_a=Symbol("v-click-clicks-order-map"),fi=Symbol("v-click-clicks-disabled"),jp=Symbol("slidev-slide-scale"),C=Symbol("slidev-slidev-context"),c1=Symbol("slidev-route"),u1=Symbol("slidev-slide-context"),Qn="slidev-vclick-target",Ol="slidev-vclick-hidden",d1="slidev-vclick-fade",zl="slidev-vclick-hidden-explicitly",Jo="slidev-vclick-current",ls="slidev-vclick-prior",p1=["localhost","127.0.0.1"];let f1=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function ga(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function m1(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const i=[];let l=t;for(;l<n;)i.push(l),l+=o||1;return i}function h1(e){return e!=null}function v1(e,t){return Object.fromEntries(Object.entries(e).map(([n,o])=>t(n,o)).filter(h1))}const ai={theme:"default",title:"Svelte e SvelteKit",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",as:"2023/2024",version:"1.1.2"},ze=ai,Cn=ze.aspectRatio??16/9,An=ze.canvasWidth??980,wr=Math.ceil(An/Cn),Sr=R(()=>v1(ze.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Vp(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Ht(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const wo=je({page:0,clicks:0});let _1=[],g1=[];Ht(wo,"$syncUp",!0);Ht(wo,"$syncDown",!0);Ht(wo,"$paused",!1);Ht(wo,"$onSet",e=>_1.push(e));Ht(wo,"$onPatch",e=>g1.push(e));Vp();Ht(wo,"$patch",async()=>!1);function Bp(e,t,n=!1){const o=[];let i=!1,l=!1,a,r;const c=je(t);function u(h){o.push(h)}function d(h,v){c[h]!==v&&(clearTimeout(a),i=!0,c[h]=v,a=setTimeout(()=>i=!1,0))}function f(h){i||(clearTimeout(r),l=!0,Object.entries(h).forEach(([v,w])=>{c[v]=w}),r=setTimeout(()=>l=!1,0))}function m(h){let v;n?n&&window.addEventListener("storage",S=>{S&&S.key===h&&S.newValue&&f(JSON.parse(S.newValue))}):(v=new BroadcastChannel(h),v.addEventListener("message",S=>f(S.data)));function w(){!n&&v&&!l?v.postMessage(he(c)):n&&!l&&window.localStorage.setItem(h,JSON.stringify(c)),i||o.forEach(S=>S(c))}if(_e(c,w,{deep:!0,flush:"sync"}),n){const S=window.localStorage.getItem(h);S&&f(JSON.parse(S))}}return{init:m,onPatch:u,patch:d,state:c}}const{init:b1,onPatch:y1,patch:Yo,state:El}=Bp(wo,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),So=je({});let w1=[],S1=[];Ht(So,"$syncUp",!0);Ht(So,"$syncDown",!0);Ht(So,"$paused",!1);Ht(So,"$onSet",e=>w1.push(e));Ht(So,"$onPatch",e=>S1.push(e));Vp();Ht(So,"$patch",async()=>!1);const{init:x1,onPatch:k1,patch:qp,state:Ns}=Bp(So,{},!1),$1="modulepreload",I1=function(e){return"/TPSI/4/svelte/"+e},Nc={},Mn=function(t,n,o){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=I1(l),l in Nc)return;Nc[l]=!0;const a=l.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(!!o)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===l&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${r}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":$1,a||(u.as="script",u.crossOrigin=""),u.href=l,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};function O1(e,t){let n,o,i;const l=Q(!0),a=()=>{l.value=!0,i()};_e(e,a,{flush:"sync"});const r=typeof t=="function"?t:t.get,c=typeof t=="function"?void 0:t.set,u=cr((d,f)=>(o=d,i=f,{get(){return l.value&&(n=r(),l.value=!1),o(),n},set(m){c==null||c(m)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function an(e){return nr()?(kd(e),!0):!1}function Je(e){return typeof e=="function"?e():M(e)}function z1(e){if(!Te(e))return je(e);const t=new Proxy({},{get(n,o,i){return M(Reflect.get(e.value,o,i))},set(n,o,i){return Te(e.value[o])&&!Te(i)?e.value[o].value=i:e.value[o]=i,!0},deleteProperty(n,o){return Reflect.deleteProperty(e.value,o)},has(n,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return je(t)}const Ut=typeof window<"u",E1=e=>typeof e<"u",T1=e=>e!=null,C1=Object.prototype.toString,ba=e=>C1.call(e)==="[object Object]",ya=()=>+Date.now(),mo=()=>{},A1=M1();function M1(){var e;return Ut&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function P1(e,t){function n(...o){return new Promise((i,l)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(i).catch(l)})}return n}const Up=e=>e();function K1(e=Up){const t=Q(!0);function n(){t.value=!1}function o(){t.value=!0}const i=(...l)=>{t.value&&e(...l)};return{isActive:Vt(t),pause:n,resume:o,eventFilter:i}}function L1(e,t){var n;if(typeof e=="number")return e+t;const o=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",i=e.slice(o.length),l=parseFloat(o)+t;return Number.isNaN(l)?e:l+i}function Jp(...e){if(e.length!==1)return qh(...e);const t=e[0];return typeof t=="function"?Vt(cr(()=>({get:t,set:mo}))):Q(t)}var R1=Object.defineProperty,W1=Object.defineProperties,H1=Object.getOwnPropertyDescriptors,Fc=Object.getOwnPropertySymbols,N1=Object.prototype.hasOwnProperty,F1=Object.prototype.propertyIsEnumerable,Dc=(e,t,n)=>t in e?R1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D1=(e,t)=>{for(var n in t||(t={}))N1.call(t,n)&&Dc(e,n,t[n]);if(Fc)for(var n of Fc(t))F1.call(t,n)&&Dc(e,n,t[n]);return e},j1=(e,t)=>W1(e,H1(t));function V1(e){if(!Te(e))return jh(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=cr(()=>({get(){return e.value[n]},set(o){if(Array.isArray(e.value)){const i=[...e.value];i[n]=o,e.value=i}else{const i=j1(D1({},e.value),{[n]:o});Object.setPrototypeOf(i,e.value),e.value=i}}}));return t}function Yp(e,t=!0){St()?bn(e):t?e():it(e)}function B1(e){St()&&ji(e)}function q1(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:i=!1}=n;let l=null;const a=Q(!1);function r(){l&&(clearInterval(l),l=null)}function c(){a.value=!1,r()}function u(){const d=Je(t);d<=0||(a.value=!0,i&&e(),r(),l=setInterval(e,d))}if(o&&Ut&&u(),Te(t)||typeof t=="function"){const d=_e(t,()=>{a.value&&Ut&&u()});an(d)}return an(c),{isActive:a,pause:c,resume:u}}function U1(e,t,n={}){const{immediate:o=!0}=n,i=Q(!1);let l=null;function a(){l&&(clearTimeout(l),l=null)}function r(){i.value=!1,a()}function c(...u){a(),i.value=!0,l=setTimeout(()=>{i.value=!1,l=null,e(...u)},Je(t))}return o&&(i.value=!0,Ut&&c()),an(r),{isPending:Vt(i),start:c,stop:r}}function Qp(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,i=Te(e),l=Q(e);function a(r){if(arguments.length)return l.value=r,l.value;{const c=Je(n);return l.value=l.value===c?Je(o):c,l.value}}return i?a:[l,a]}var jc=Object.getOwnPropertySymbols,J1=Object.prototype.hasOwnProperty,Y1=Object.prototype.propertyIsEnumerable,Q1=(e,t)=>{var n={};for(var o in e)J1.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&jc)for(var o of jc(e))t.indexOf(o)<0&&Y1.call(e,o)&&(n[o]=e[o]);return n};function Z1(e,t,n={}){const o=n,{eventFilter:i=Up}=o,l=Q1(o,["eventFilter"]);return _e(e,P1(i,t),l)}var G1=Object.defineProperty,X1=Object.defineProperties,e0=Object.getOwnPropertyDescriptors,Fs=Object.getOwnPropertySymbols,Zp=Object.prototype.hasOwnProperty,Gp=Object.prototype.propertyIsEnumerable,Vc=(e,t,n)=>t in e?G1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,t0=(e,t)=>{for(var n in t||(t={}))Zp.call(t,n)&&Vc(e,n,t[n]);if(Fs)for(var n of Fs(t))Gp.call(t,n)&&Vc(e,n,t[n]);return e},n0=(e,t)=>X1(e,e0(t)),o0=(e,t)=>{var n={};for(var o in e)Zp.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Fs)for(var o of Fs(e))t.indexOf(o)<0&&Gp.call(e,o)&&(n[o]=e[o]);return n};function i0(e,t,n={}){const o=n,{eventFilter:i}=o,l=o0(o,["eventFilter"]),{eventFilter:a,pause:r,resume:c,isActive:u}=K1(i);return{stop:Z1(e,t,n0(t0({},l),{eventFilter:a})),pause:r,resume:c,isActive:u}}function st(e){var t;const n=Je(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Xe=Ut?window:void 0,Xp=Ut?window.document:void 0,s0=Ut?window.navigator:void 0;function Se(...e){let t,n,o,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,i]=e,t=Xe):[t,n,o,i]=e,!t)return mo;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const l=[],a=()=>{l.forEach(d=>d()),l.length=0},r=(d,f,m,h)=>(d.addEventListener(f,m,h),()=>d.removeEventListener(f,m,h)),c=_e(()=>[st(t),Je(i)],([d,f])=>{a(),d&&l.push(...n.flatMap(m=>o.map(h=>r(d,m,h,f))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return an(u),u}let Bc=!1;function l0(e,t,n={}){const{window:o=Xe,ignore:i=[],capture:l=!0,detectIframe:a=!1}=n;if(!o)return;A1&&!Bc&&(Bc=!0,Array.from(o.document.body.children).forEach(m=>m.addEventListener("click",mo)));let r=!0;const c=m=>i.some(h=>{if(typeof h=="string")return Array.from(o.document.querySelectorAll(h)).some(v=>v===m.target||m.composedPath().includes(v));{const v=st(h);return v&&(m.target===v||m.composedPath().includes(v))}}),d=[Se(o,"click",m=>{const h=st(e);if(!(!h||h===m.target||m.composedPath().includes(h))){if(m.detail===0&&(r=!c(m)),!r){r=!0;return}t(m)}},{passive:!0,capture:l}),Se(o,"pointerdown",m=>{const h=st(e);h&&(r=!m.composedPath().includes(h)&&!c(m))},{passive:!0}),a&&Se(o,"blur",m=>{var h;const v=st(e);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(v!=null&&v.contains(o.document.activeElement))&&t(m)})].filter(Boolean);return()=>d.forEach(m=>m())}function a0(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function r0(...e){let t,n,o={};e.length===3?(t=e[0],n=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],o=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:i=Xe,eventName:l="keydown",passive:a=!1,dedupe:r=!1}=o,c=a0(t);return Se(i,l,d=>{d.repeat&&Je(r)||c(d)&&n(d)},a)}function c0(e={}){var t;const{window:n=Xe}=e,o=(t=e.document)!=null?t:n==null?void 0:n.document,i=O1(()=>null,()=>o==null?void 0:o.activeElement);return n&&(Se(n,"blur",l=>{l.relatedTarget===null&&i.trigger()},!0),Se(n,"focus",i.trigger,!0)),i}function u0(){const e=Q(!1);return St()&&bn(()=>{e.value=!0}),e}function Bi(e){const t=u0();return R(()=>(t.value,!!e()))}function d0(e,t={}){const{immediate:n=!0,window:o=Xe}=t,i=Q(!1);let l=0,a=null;function r(d){if(!i.value||!o)return;const f=d-l;e({delta:f,timestamp:d}),l=d,a=o.requestAnimationFrame(r)}function c(){!i.value&&o&&(i.value=!0,a=o.requestAnimationFrame(r))}function u(){i.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return n&&c(),an(u),{isActive:Vt(i),pause:u,resume:c}}function to(e,t={}){const{window:n=Xe}=t,o=Bi(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const l=Q(!1),a=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",r):i.removeListener(r))},r=()=>{o.value&&(a(),i=n.matchMedia(Jp(e).value),l.value=!!(i!=null&&i.matches),i&&("addEventListener"in i?i.addEventListener("change",r):i.addListener(r)))};return yo(r),an(()=>a()),l}const p0={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function f0(e,t={}){function n(r,c){let u=e[r];return c!=null&&(u=L1(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=Xe}=t;function i(r){return o?o.matchMedia(r).matches:!1}const l=r=>to(`(min-width: ${n(r)})`,t),a=Object.keys(e).reduce((r,c)=>(Object.defineProperty(r,c,{get:()=>l(c),enumerable:!0,configurable:!0}),r),{});return Object.assign(a,{greater(r){return to(`(min-width: ${n(r,.1)})`,t)},greaterOrEqual:l,smaller(r){return to(`(max-width: ${n(r,-.1)})`,t)},smallerOrEqual(r){return to(`(max-width: ${n(r)})`,t)},between(r,c){return to(`(min-width: ${n(r)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(r){return i(`(min-width: ${n(r,.1)})`)},isGreaterOrEqual(r){return i(`(min-width: ${n(r)})`)},isSmaller(r){return i(`(max-width: ${n(r,-.1)})`)},isSmallerOrEqual(r){return i(`(max-width: ${n(r)})`)},isInBetween(r,c){return i(`(min-width: ${n(r)}) and (max-width: ${n(c,-.1)})`)},current(){const r=Object.keys(e).map(c=>[c,l(c)]);return R(()=>r.filter(([,c])=>c.value).map(([c])=>c))}})}function m0(e={}){const{navigator:t=s0,read:n=!1,source:o,copiedDuring:i=1500,legacy:l=!1}=e,a=["copy","cut"],r=Bi(()=>t&&"clipboard"in t),c=R(()=>r.value||l),u=Q(""),d=Q(!1),f=U1(()=>d.value=!1,i);function m(){r.value?t.clipboard.readText().then(S=>{u.value=S}):u.value=w()}if(c.value&&n)for(const S of a)Se(S,m);async function h(S=Je(o)){c.value&&S!=null&&(r.value?await t.clipboard.writeText(S):v(S),u.value=S,d.value=!0,f.start())}function v(S){const x=document.createElement("textarea");x.value=S??"",x.style.position="absolute",x.style.opacity="0",document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function w(){var S,x,k;return(k=(x=(S=document==null?void 0:document.getSelection)==null?void 0:S.call(document))==null?void 0:x.toString())!=null?k:""}return{isSupported:c,text:u,copied:d,copy:h}}function h0(e){return JSON.parse(JSON.stringify(e))}const as=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rs="__vueuse_ssr_handlers__",v0=_0();function _0(){return rs in as||(as[rs]=as[rs]||{}),as[rs]}function g0(e,t){return v0[e]||t}function b0(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var y0=Object.defineProperty,qc=Object.getOwnPropertySymbols,w0=Object.prototype.hasOwnProperty,S0=Object.prototype.propertyIsEnumerable,Uc=(e,t,n)=>t in e?y0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jc=(e,t)=>{for(var n in t||(t={}))w0.call(t,n)&&Uc(e,n,t[n]);if(qc)for(var n of qc(t))S0.call(t,n)&&Uc(e,n,t[n]);return e};const x0={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Yc="vueuse-storage";function k0(e,t,n,o={}){var i;const{flush:l="pre",deep:a=!0,listenToStorageChanges:r=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:f=Xe,eventFilter:m,onError:h=L=>{console.error(L)}}=o,v=(d?sn:Q)(t);if(!n)try{n=g0("getDefaultStorage",()=>{var L;return(L=Xe)==null?void 0:L.localStorage})()}catch(L){h(L)}if(!n)return v;const w=Je(t),S=b0(w),x=(i=o.serializer)!=null?i:x0[S],{pause:k,resume:g}=i0(v,()=>T(v.value),{flush:l,deep:a,eventFilter:m});return f&&r&&(Se(f,"storage",j),Se(f,Yc,P)),j(),v;function T(L){try{if(L==null)n.removeItem(e);else{const q=x.write(L),se=n.getItem(e);se!==q&&(n.setItem(e,q),f&&f.dispatchEvent(new CustomEvent(Yc,{detail:{key:e,oldValue:se,newValue:q,storageArea:n}})))}}catch(q){h(q)}}function O(L){const q=L?L.newValue:n.getItem(e);if(q==null)return c&&w!==null&&n.setItem(e,x.write(w)),w;if(!L&&u){const se=x.read(q);return typeof u=="function"?u(se,w):S==="object"&&!Array.isArray(se)?Jc(Jc({},w),se):se}else return typeof q!="string"?q:x.read(q)}function P(L){j(L.detail)}function j(L){if(!(L&&L.storageArea!==n)){if(L&&L.key==null){v.value=w;return}if(!(L&&L.key!==e)){k();try{v.value=O(L)}catch(q){h(q)}finally{L?it(g):g()}}}}}function $0(e){return to("(prefers-color-scheme: dark)",e)}var I0=Object.defineProperty,O0=Object.defineProperties,z0=Object.getOwnPropertyDescriptors,Qc=Object.getOwnPropertySymbols,E0=Object.prototype.hasOwnProperty,T0=Object.prototype.propertyIsEnumerable,Zc=(e,t,n)=>t in e?I0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C0=(e,t)=>{for(var n in t||(t={}))E0.call(t,n)&&Zc(e,n,t[n]);if(Qc)for(var n of Qc(t))T0.call(t,n)&&Zc(e,n,t[n]);return e},A0=(e,t)=>O0(e,z0(t));function EW(e,t={}){var n,o;const{pointerTypes:i,preventDefault:l,stopPropagation:a,exact:r,onMove:c,onEnd:u,onStart:d,initialValue:f,axis:m="both",draggingElement:h=Xe,handle:v=e}=t,w=Q((n=Je(f))!=null?n:{x:0,y:0}),S=Q(),x=P=>i?i.includes(P.pointerType):!0,k=P=>{Je(l)&&P.preventDefault(),Je(a)&&P.stopPropagation()},g=P=>{if(!x(P)||Je(r)&&P.target!==Je(e))return;const j=Je(e).getBoundingClientRect(),L={x:P.clientX-j.left,y:P.clientY-j.top};(d==null?void 0:d(L,P))!==!1&&(S.value=L,k(P))},T=P=>{if(!x(P)||!S.value)return;let{x:j,y:L}=w.value;(m==="x"||m==="both")&&(j=P.clientX-S.value.x),(m==="y"||m==="both")&&(L=P.clientY-S.value.y),w.value={x:j,y:L},c==null||c(w.value,P),k(P)},O=P=>{x(P)&&S.value&&(S.value=void 0,u==null||u(w.value,P),k(P))};if(Ut){const P={capture:(o=t.capture)!=null?o:!0};Se(v,"pointerdown",g,P),Se(h,"pointermove",T,P),Se(h,"pointerup",O,P)}return A0(C0({},V1(w)),{position:w,isDragging:R(()=>!!S.value),style:R(()=>`left:${w.value.x}px;top:${w.value.y}px;`)})}var Gc=Object.getOwnPropertySymbols,M0=Object.prototype.hasOwnProperty,P0=Object.prototype.propertyIsEnumerable,K0=(e,t)=>{var n={};for(var o in e)M0.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Gc)for(var o of Gc(e))t.indexOf(o)<0&&P0.call(e,o)&&(n[o]=e[o]);return n};function L0(e,t,n={}){const o=n,{window:i=Xe}=o,l=K0(o,["window"]);let a;const r=Bi(()=>i&&"ResizeObserver"in i),c=()=>{a&&(a.disconnect(),a=void 0)},u=R(()=>Array.isArray(e)?e.map(m=>st(m)):[st(e)]),d=_e(u,m=>{if(c(),r.value&&i){a=new ResizeObserver(t);for(const h of m)h&&a.observe(h,l)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{c(),d()};return an(f),{isSupported:r,stop:f}}function R0(e,t={width:0,height:0},n={}){const{window:o=Xe,box:i="content-box"}=n,l=R(()=>{var c,u;return(u=(c=st(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=Q(t.width),r=Q(t.height);return L0(e,([c])=>{const u=i==="border-box"?c.borderBoxSize:i==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&l.value){const d=st(e);if(d){const f=o.getComputedStyle(d);a.value=parseFloat(f.width),r.value=parseFloat(f.height)}}else if(u){const d=Array.isArray(u)?u:[u];a.value=d.reduce((f,{inlineSize:m})=>f+m,0),r.value=d.reduce((f,{blockSize:m})=>f+m,0)}else a.value=c.contentRect.width,r.value=c.contentRect.height},n),_e(()=>st(e),c=>{a.value=c?t.width:0,r.value=c?t.height:0}),{width:a,height:r}}function W0(e,t,n={}){const{root:o,rootMargin:i="0px",threshold:l=.1,window:a=Xe,immediate:r=!0}=n,c=Bi(()=>a&&"IntersectionObserver"in a),u=R(()=>{const v=Je(e);return(Array.isArray(v)?v:[v]).map(st).filter(T1)});let d=mo;const f=Q(r),m=c.value?_e(()=>[u.value,st(o),f.value],([v,w])=>{if(d(),!f.value||!v.length)return;const S=new IntersectionObserver(t,{root:st(w),rootMargin:i,threshold:l});v.forEach(x=>x&&S.observe(x)),d=()=>{S.disconnect(),d=mo}},{immediate:r,flush:"post"}):mo,h=()=>{d(),m(),f.value=!1};return an(h),{isSupported:c,isActive:f,pause(){d(),f.value=!1},resume(){f.value=!0},stop:h}}const Xc=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function H0(e,t={}){const{document:n=Xp,autoExit:o=!1}=t,i=R(()=>{var x;return(x=st(e))!=null?x:n==null?void 0:n.querySelector("html")}),l=Q(!1),a=R(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(x=>n&&x in n||i.value&&x in i.value)),r=R(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(x=>n&&x in n||i.value&&x in i.value)),c=R(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(x=>n&&x in n||i.value&&x in i.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(x=>n&&x in n),d=Bi(()=>i.value&&n&&a.value!==void 0&&r.value!==void 0&&c.value!==void 0),f=()=>u?(n==null?void 0:n[u])===i.value:!1,m=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const x=i.value;if((x==null?void 0:x[c.value])!=null)return!!x[c.value]}}return!1};async function h(){if(d.value){if(r.value)if((n==null?void 0:n[r.value])!=null)await n[r.value]();else{const x=i.value;(x==null?void 0:x[r.value])!=null&&await x[r.value]()}l.value=!1}}async function v(){if(!d.value)return;m()&&await h();const x=i.value;a.value&&(x==null?void 0:x[a.value])!=null&&(await x[a.value](),l.value=!0)}async function w(){await(l.value?h():v())}const S=()=>{const x=m();(!x||x&&f())&&(l.value=x)};return Se(n,Xc,S,!1),Se(()=>st(i),Xc,S,!1),o&&an(h),{isSupported:d,isFullscreen:l,enter:v,exit:h,toggle:w}}function Jt(e,t,n={}){const{window:o=Xe}=n;return k0(e,t,o==null?void 0:o.localStorage,n)}const N0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function F0(e={}){const{reactive:t=!1,target:n=Xe,aliasMap:o=N0,passive:i=!0,onEventFired:l=mo}=e,a=je(new Set),r={toJSON(){return{}},current:a},c=t?je(r):r,u=new Set,d=new Set;function f(w,S){w in c&&(t?c[w]=S:c[w].value=S)}function m(){a.clear();for(const w of d)f(w,!1)}function h(w,S){var x,k;const g=(x=w.key)==null?void 0:x.toLowerCase(),O=[(k=w.code)==null?void 0:k.toLowerCase(),g].filter(Boolean);g&&(S?a.add(g):a.delete(g));for(const P of O)d.add(P),f(P,S);g==="meta"&&!S?(u.forEach(P=>{a.delete(P),f(P,!1)}),u.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&S&&[...a,...O].forEach(P=>u.add(P))}Se(n,"keydown",w=>(h(w,!0),l(w)),{passive:i}),Se(n,"keyup",w=>(h(w,!1),l(w)),{passive:i}),Se("blur",m,{passive:!0}),Se("focus",m,{passive:!0});const v=new Proxy(c,{get(w,S,x){if(typeof S!="string")return Reflect.get(w,S,x);if(S=S.toLowerCase(),S in o&&(S=o[S]),!(S in c))if(/[+_-]/.test(S)){const g=S.split(/[+_-]/g).map(T=>T.trim());c[S]=R(()=>g.every(T=>Je(v[T])))}else c[S]=Q(!1);const k=Reflect.get(w,S,x);return t?Je(k):k}});return v}const D0={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function TW(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:i={x:0,y:0},window:l=Xe,target:a=l,eventFilter:r}=e,c=Q(i.x),u=Q(i.y),d=Q(null),f=typeof t=="function"?t:D0[t],m=x=>{const k=f(x);k&&([c.value,u.value]=k,d.value="mouse")},h=x=>{if(x.touches.length>0){const k=f(x.touches[0]);k&&([c.value,u.value]=k,d.value="touch")}},v=()=>{c.value=i.x,u.value=i.y},w=r?x=>r(()=>m(x),{}):x=>m(x),S=r?x=>r(()=>h(x),{}):x=>h(x);return a&&(Se(a,"mousemove",w,{passive:!0}),Se(a,"dragover",w,{passive:!0}),n&&t!=="movement"&&(Se(a,"touchstart",S,{passive:!0}),Se(a,"touchmove",S,{passive:!0}),o&&Se(a,"touchend",v,{passive:!0}))),{x:c,y:u,sourceType:d}}function j0(e,t={}){const n=Jp(e),{threshold:o=50,onSwipe:i,onSwipeEnd:l,onSwipeStart:a}=t,r=je({x:0,y:0}),c=(P,j)=>{r.x=P,r.y=j},u=je({x:0,y:0}),d=(P,j)=>{u.x=P,u.y=j},f=R(()=>r.x-u.x),m=R(()=>r.y-u.y),{max:h,abs:v}=Math,w=R(()=>h(v(f.value),v(m.value))>=o),S=Q(!1),x=Q(!1),k=R(()=>w.value?v(f.value)>v(m.value)?f.value>0?"left":"right":m.value>0?"up":"down":"none"),g=P=>{var j,L,q;const se=P.buttons===0,de=P.buttons===1;return(q=(L=(j=t.pointerTypes)==null?void 0:j.includes(P.pointerType))!=null?L:se||de)!=null?q:!0},T=[Se(e,"pointerdown",P=>{var j,L;if(!g(P))return;x.value=!0,(L=(j=n.value)==null?void 0:j.style)==null||L.setProperty("touch-action","none");const q=P.target;q==null||q.setPointerCapture(P.pointerId);const{clientX:se,clientY:de}=P;c(se,de),d(se,de),a==null||a(P)}),Se(e,"pointermove",P=>{if(!g(P)||!x.value)return;const{clientX:j,clientY:L}=P;d(j,L),!S.value&&w.value&&(S.value=!0),S.value&&(i==null||i(P))}),Se(e,"pointerup",P=>{var j,L;g(P)&&(S.value&&(l==null||l(P,k.value)),x.value=!1,S.value=!1,(L=(j=n.value)==null?void 0:j.style)==null||L.setProperty("touch-action","initial"))})],O=()=>T.forEach(P=>P());return{isSwiping:Vt(S),direction:Vt(k),posStart:Vt(r),posEnd:Vt(u),distanceX:f,distanceY:m,stop:O}}let V0=0;function CW(e,t={}){const n=Q(!1),{document:o=Xp,immediate:i=!0,manual:l=!1,id:a=`vueuse_styletag_${++V0}`}=t,r=Q(e);let c=()=>{};const u=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=a,t.media&&(f.media=t.media),o.head.appendChild(f)),!n.value&&(c=_e(r,m=>{f.textContent=m},{immediate:!0}),n.value=!0)},d=()=>{!o||!n.value||(c(),o.head.removeChild(o.getElementById(a)),n.value=!1)};return i&&!l&&Yp(u),l||an(d),{id:a,css:r,unload:d,load:u,isLoaded:Vt(n)}}var B0=Object.defineProperty,eu=Object.getOwnPropertySymbols,q0=Object.prototype.hasOwnProperty,U0=Object.prototype.propertyIsEnumerable,tu=(e,t,n)=>t in e?B0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J0=(e,t)=>{for(var n in t||(t={}))q0.call(t,n)&&tu(e,n,t[n]);if(eu)for(var n of eu(t))U0.call(t,n)&&tu(e,n,t[n]);return e};function AW(e={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:i="requestAnimationFrame",callback:l}=e,a=Q(ya()+n),r=()=>a.value=ya()+n,c=l?()=>{r(),l(a.value)}:r,u=i==="requestAnimationFrame"?d0(c,{immediate:o}):q1(c,i,{immediate:o});return t?J0({timestamp:a},u):a}function Kt(e,t,n,o={}){var i,l,a;const{clone:r=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:f,shouldEmit:m}=o,h=St(),v=n||(h==null?void 0:h.emit)||((i=h==null?void 0:h.$emit)==null?void 0:i.bind(h))||((a=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let w=u;t||(t="modelValue"),w=u||w||`update:${t.toString()}`;const S=g=>r?typeof r=="function"?r(g):h0(g):g,x=()=>E1(e[t])?S(e[t]):f,k=g=>{m?m(g)&&v(w,g):v(w,g)};if(c){const g=x(),T=Q(g);return _e(()=>e[t],O=>T.value=S(O)),_e(T,O=>{(O!==e[t]||d)&&k(O)},{deep:d}),T}else return R({get(){return x()},set(g){k(g)}})}function MW({window:e=Xe}={}){if(!e)return Q(!1);const t=Q(e.document.hasFocus());return Se(e,"blur",()=>{t.value=!1}),Se(e,"focus",()=>{t.value=!0}),t}function Y0(e={}){const{window:t=Xe,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:i=!0,includeScrollbar:l=!0}=e,a=Q(n),r=Q(o),c=()=>{t&&(l?(a.value=t.innerWidth,r.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,r.value=t.document.documentElement.clientHeight))};if(c(),Yp(c),Se("resize",c,{passive:!0}),i){const u=to("(orientation: portrait)");_e(u,()=>c())}return{width:a,height:r}}function Q0(){return ef().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ef(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Z0=typeof Proxy=="function",G0="devtools-plugin:setup",X0="plugin:settings:set";let $o,wa;function eb(){var e;return $o!==void 0||(typeof window<"u"&&window.performance?($o=!0,wa=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?($o=!0,wa=global.perf_hooks.performance):$o=!1),$o}function tb(){return eb()?wa.now():Date.now()}class nb{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const o={};if(t.settings)for(const a in t.settings){const r=t.settings[a];o[a]=r.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let l=Object.assign({},o);try{const a=localStorage.getItem(i),r=JSON.parse(a);Object.assign(l,r)}catch{}this.fallbacks={getSettings(){return l},setSettings(a){try{localStorage.setItem(i,JSON.stringify(a))}catch{}l=a},now(){return tb()}},n&&n.on(X0,(a,r)=>{a===this.plugin.id&&this.fallbacks.setSettings(r)}),this.proxiedOn=new Proxy({},{get:(a,r)=>this.target?this.target.on[r]:(...c)=>{this.onQueue.push({method:r,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,r)=>this.target?this.target[r]:r==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(r)?(...c)=>(this.targetQueue.push({method:r,args:c,resolve:()=>{}}),this.fallbacks[r](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:r,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function ob(e,t){const n=e,o=ef(),i=Q0(),l=Z0&&n.enableEarlyProxy;if(i&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))i.emit(G0,e,t);else{const a=l?new nb(n,i):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const fn=typeof window<"u";function ib(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Me=Object.assign;function Tl(e,t){const n={};for(const o in t){const i=t[o];n[o]=Et(i)?i.map(e):e(i)}return n}const mi=()=>{},Et=Array.isArray;function Oe(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const sb=/\/$/,lb=e=>e.replace(sb,"");function Cl(e,t,n="/"){let o,i={},l="",a="";const r=t.indexOf("#");let c=t.indexOf("?");return r<c&&r>=0&&(c=-1),c>-1&&(o=t.slice(0,c),l=t.slice(c+1,r>-1?r:t.length),i=e(l)),r>-1&&(o=o||t.slice(0,r),a=t.slice(r,t.length)),o=cb(o??t,n),{fullPath:o+(l&&"?")+l+a,path:o,query:i,hash:a}}function ab(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function nu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ou(e,t,n){const o=t.matched.length-1,i=n.matched.length-1;return o>-1&&o===i&&Nn(t.matched[o],n.matched[i])&&tf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Nn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function tf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!rb(e[n],t[n]))return!1;return!0}function rb(e,t){return Et(e)?iu(e,t):Et(t)?iu(t,e):e===t}function iu(e,t){return Et(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function cb(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Oe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),o=e.split("/"),i=o[o.length-1];(i===".."||i===".")&&o.push("");let l=n.length-1,a,r;for(a=0;a<o.length;a++)if(r=o[a],r!==".")if(r==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var Ei;(function(e){e.pop="pop",e.push="push"})(Ei||(Ei={}));var hi;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hi||(hi={}));function ub(e){if(!e)if(fn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lb(e)}const db=/^[^#]+#/;function pb(e,t){return e.replace(db,"#")+t}function fb(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const dl=()=>({left:window.pageXOffset,top:window.pageYOffset});function mb(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const l=document.querySelector(e.el);if(o&&l){Oe(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Oe(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const i=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i){Oe(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=fb(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function su(e,t){return(history.state?history.state.position-t:-1)+e}const Sa=new Map;function hb(e,t){Sa.set(e,t)}function vb(e){const t=Sa.get(e);return Sa.delete(e),t}let _b=()=>location.protocol+"//"+location.host;function nf(e,t){const{pathname:n,search:o,hash:i}=t,l=e.indexOf("#");if(l>-1){let r=i.includes(e.slice(l))?e.slice(l).length:1,c=i.slice(r);return c[0]!=="/"&&(c="/"+c),nu(c,"")}return nu(n,e)+o+i}function gb(e,t,n,o){let i=[],l=[],a=null;const r=({state:m})=>{const h=nf(e,location),v=n.value,w=t.value;let S=0;if(m){if(n.value=h,t.value=m,a&&a===v){a=null;return}S=w?m.position-w.position:0}else o(h);i.forEach(x=>{x(n.value,v,{delta:S,type:Ei.pop,direction:S?S>0?hi.forward:hi.back:hi.unknown})})};function c(){a=n.value}function u(m){i.push(m);const h=()=>{const v=i.indexOf(m);v>-1&&i.splice(v,1)};return l.push(h),h}function d(){const{history:m}=window;m.state&&m.replaceState(Me({},m.state,{scroll:dl()}),"")}function f(){for(const m of l)m();l=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function lu(e,t,n,o=!1,i=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:i?dl():null}}function bb(e){const{history:t,location:n}=window,o={value:nf(e,n)},i={value:t.state};i.value||l(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,u,d){const f=e.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:_b()+e+c;try{t[d?"replaceState":"pushState"](u,"",m),i.value=u}catch(h){Oe("Error with push/replace State",h),n[d?"replace":"assign"](m)}}function a(c,u){const d=Me({},t.state,lu(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});l(c,d,!0),o.value=c}function r(c,u){const d=Me({},i.value,t.state,{forward:c,scroll:dl()});t.state||Oe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(d.current,d,!0);const f=Me({},lu(o.value,c,null),{position:d.position+1},u);l(c,f,!1),o.value=c}return{location:o,state:i,push:r,replace:a}}function yb(e){e=ub(e);const t=bb(e),n=gb(e,t.state,t.location,t.replace);function o(l,a=!0){a||n.pauseListeners(),history.go(l)}const i=Me({location:"",base:e,go:o,createHref:pb.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function wb(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),!e.endsWith("#/")&&!e.endsWith("#")&&Oe(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/,"#")}".`),yb(e)}function Sb(e){return typeof e=="string"||e&&typeof e=="object"}function of(e){return typeof e=="string"||typeof e=="symbol"}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},sf=Symbol("navigation failure");var au;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(au||(au={}));const xb={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${$b(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Lo(e,t){return Me(new Error(xb[e](t)),{type:e,[sf]:!0},t)}function rn(e,t){return e instanceof Error&&sf in e&&(t==null||!!(e.type&t))}const kb=["params","query","hash"];function $b(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of kb)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const ru="[^/]+?",Ib={sensitive:!1,strict:!1,start:!0,end:!0},Ob=/[.+*?^${}()[\]/\\]/g;function zb(e,t){const n=Me({},Ib,t),o=[];let i=n.start?"^":"";const l=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const m=u[f];let h=40+(n.sensitive?.25:0);if(m.type===0)f||(i+="/"),i+=m.value.replace(Ob,"\\$&"),h+=40;else if(m.type===1){const{value:v,repeatable:w,optional:S,regexp:x}=m;l.push({name:v,repeatable:w,optional:S});const k=x||ru;if(k!==ru){h+=10;try{new RegExp(`(${k})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${v}" (${k}): `+T.message)}}let g=w?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(g=S&&u.length<2?`(?:/${g})`:"/"+g),S&&(g+="?"),i+=g,h+=20,S&&(h+=-8),w&&(h+=-20),k===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function r(u){const d=u.match(a),f={};if(!d)return null;for(let m=1;m<d.length;m++){const h=d[m]||"",v=l[m-1];f[v.name]=h&&v.repeatable?h.split("/"):h}return f}function c(u){let d="",f=!1;for(const m of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const h of m)if(h.type===0)d+=h.value;else if(h.type===1){const{value:v,repeatable:w,optional:S}=h,x=v in u?u[v]:"";if(Et(x)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const k=Et(x)?x.join("/"):x;if(!k)if(S)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);d+=k}}return d||"/"}return{re:a,score:o,keys:l,parse:r,stringify:c}}function Eb(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Tb(e,t){let n=0;const o=e.score,i=t.score;for(;n<o.length&&n<i.length;){const l=Eb(o[n],i[n]);if(l)return l;n++}if(Math.abs(i.length-o.length)===1){if(cu(o))return 1;if(cu(i))return-1}return i.length-o.length}function cu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Cb={type:0,value:""},Ab=/[a-zA-Z0-9_]/;function Mb(e){if(!e)return[[]];if(e==="/")return[[Cb]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,o=n;const i=[];let l;function a(){l&&i.push(l),l=[]}let r=0,c,u="",d="";function f(){u&&(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;r<e.length;){if(c=e[r++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),n=1):m();break;case 4:m(),n=o;break;case 1:c==="("?n=2:Ab.test(c)?m():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&r--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&r--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),a(),i}function Pb(e,t,n){const o=zb(Mb(e.path),n);{const l=new Set;for(const a of o.keys)l.has(a.name)&&Oe(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),l.add(a.name)}const i=Me(o,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Kb(e,t){const n=[],o=new Map;t=pu({strict:!1,end:!0,sensitive:!1},t);function i(d){return o.get(d)}function l(d,f,m){const h=!m,v=Lb(d);Nb(v,f),v.aliasOf=m&&m.record;const w=pu(t,d),S=[v];if("alias"in d){const g=typeof d.alias=="string"?[d.alias]:d.alias;for(const T of g)S.push(Me({},v,{components:m?m.record.components:v.components,path:T,aliasOf:m?m.record:v}))}let x,k;for(const g of S){const{path:T}=g;if(f&&T[0]!=="/"){const O=f.record.path,P=O[O.length-1]==="/"?"":"/";g.path=f.record.path+(T&&P+T)}if(g.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=Pb(g,f,w),f&&T[0]==="/"&&Fb(x,f),m?(m.alias.push(x),Hb(m,x)):(k=k||x,k!==x&&k.alias.push(x),h&&d.name&&!du(x)&&a(d.name)),v.children){const O=v.children;for(let P=0;P<O.length;P++)l(O[P],x,m&&m.children[P])}m=m||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return k?()=>{a(k)}:mi}function a(d){if(of(d)){const f=o.get(d);f&&(o.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function r(){return n}function c(d){let f=0;for(;f<n.length&&Tb(d,n[f])>=0&&(d.record.path!==n[f].record.path||!lf(d,n[f]));)f++;n.splice(f,0,d),d.record.name&&!du(d)&&o.set(d.record.name,d)}function u(d,f){let m,h={},v,w;if("name"in d&&d.name){if(m=o.get(d.name),!m)throw Lo(1,{location:d});{const k=Object.keys(d.params||{}).filter(g=>!m.keys.find(T=>T.name===g));k.length&&Oe(`Discarded invalid param(s) "${k.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}w=m.record.name,h=Me(uu(f.params,m.keys.filter(k=>!k.optional).map(k=>k.name)),d.params&&uu(d.params,m.keys.map(k=>k.name))),v=m.stringify(h)}else if("path"in d)v=d.path,v.startsWith("/")||Oe(`The Matcher cannot resolve relative paths but received "${v}". Unless you directly called \`matcher.resolve("${v}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),m=n.find(k=>k.re.test(v)),m&&(h=m.parse(v),w=m.record.name);else{if(m=f.name?o.get(f.name):n.find(k=>k.re.test(f.path)),!m)throw Lo(1,{location:d,currentLocation:f});w=m.record.name,h=Me({},f.params,d.params),v=m.stringify(h)}const S=[];let x=m;for(;x;)S.unshift(x.record),x=x.parent;return{name:w,path:v,params:h,matched:S,meta:Wb(S)}}return e.forEach(d=>l(d)),{addRoute:l,resolve:u,removeRoute:a,getRoutes:r,getRecordMatcher:i}}function uu(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Lb(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Rb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Rb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="boolean"?n:n[o];return t}function du(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Wb(e){return e.reduce((t,n)=>Me(t,n.meta),{})}function pu(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function xa(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function Hb(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(xa.bind(null,n)))return Oe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(xa.bind(null,n)))return Oe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function Nb(e,t){t&&t.record.name&&!e.name&&!e.path&&Oe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Fb(e,t){for(const n of t.keys)if(!e.keys.find(xa.bind(null,n)))return Oe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function lf(e,t){return t.children.some(n=>n===e||lf(e,n))}const af=/#/g,Db=/&/g,jb=/\//g,Vb=/=/g,Bb=/\?/g,rf=/\+/g,qb=/%5B/g,Ub=/%5D/g,cf=/%5E/g,Jb=/%60/g,uf=/%7B/g,Yb=/%7C/g,df=/%7D/g,Qb=/%20/g;function xr(e){return encodeURI(""+e).replace(Yb,"|").replace(qb,"[").replace(Ub,"]")}function Zb(e){return xr(e).replace(uf,"{").replace(df,"}").replace(cf,"^")}function ka(e){return xr(e).replace(rf,"%2B").replace(Qb,"+").replace(af,"%23").replace(Db,"%26").replace(Jb,"`").replace(uf,"{").replace(df,"}").replace(cf,"^")}function Gb(e){return ka(e).replace(Vb,"%3D")}function Xb(e){return xr(e).replace(af,"%23").replace(Bb,"%3F")}function ey(e){return e==null?"":Xb(e).replace(jb,"%2F")}function Ti(e){try{return decodeURIComponent(""+e)}catch{Oe(`Error decoding "${e}". Using original value`)}return""+e}function ty(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<o.length;++i){const l=o[i].replace(rf," "),a=l.indexOf("="),r=Ti(a<0?l:l.slice(0,a)),c=a<0?null:Ti(l.slice(a+1));if(r in t){let u=t[r];Et(u)||(u=t[r]=[u]),u.push(c)}else t[r]=c}return t}function fu(e){let t="";for(let n in e){const o=e[n];if(n=Gb(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Et(o)?o.map(l=>l&&ka(l)):[o&&ka(o)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function ny(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Et(o)?o.map(i=>i==null?null:""+i):o==null?o:""+o)}return t}const oy=Symbol("router view location matched"),mu=Symbol("router view depth"),kr=Symbol("router"),pf=Symbol("route location"),$a=Symbol("router view location");function Qo(){let e=[];function t(o){return e.push(o),()=>{const i=e.indexOf(o);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function In(e,t,n,o,i){const l=o&&(o.enterCallbacks[i]=o.enterCallbacks[i]||[]);return()=>new Promise((a,r)=>{const c=f=>{f===!1?r(Lo(4,{from:n,to:t})):f instanceof Error?r(f):Sb(f)?r(Lo(2,{from:t,to:f})):(l&&o.enterCallbacks[i]===l&&typeof f=="function"&&l.push(f),a())},u=e.call(o&&o.instances[i],t,n,iy(c,t,n));let d=Promise.resolve(u);if(e.length<3&&(d=d.then(c)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(m=>c._called?m:(Oe(f),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Oe(f),r(new Error("Invalid navigation guard"));return}}d.catch(f=>r(f))})}function iy(e,t,n){let o=0;return function(){o++===1&&Oe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function Al(e,t,n,o){const i=[];for(const l of e){!l.components&&!l.children.length&&Oe(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const a in l.components){let r=l.components[a];{if(!r||typeof r!="object"&&typeof r!="function")throw Oe(`Component "${a}" in record with path "${l.path}" is not a valid component. Received "${String(r)}".`),new Error("Invalid route component");if("then"in r){Oe(`Component "${a}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=r;r=()=>c}else r.__asyncLoader&&!r.__warnedDefineAsync&&(r.__warnedDefineAsync=!0,Oe(`Component "${a}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!l.instances[a]))if(sy(r)){const u=(r.__vccOpts||r)[t];u&&i.push(In(u,n,o,l,a))}else{let c=r();"catch"in c||(Oe(`Component "${a}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${l.path}"`));const d=ib(u)?u.default:u;l.components[a]=d;const m=(d.__vccOpts||d)[t];return m&&In(m,n,o,l,a)()}))}}}return i}function sy(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function hu(e){const t=$(kr),n=$(pf),o=R(()=>t.resolve(M(e.to))),i=R(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],f=n.matched;if(!d||!f.length)return-1;const m=f.findIndex(Nn.bind(null,d));if(m>-1)return m;const h=vu(c[u-2]);return u>1&&vu(d)===h&&f[f.length-1].path!==h?f.findIndex(Nn.bind(null,c[u-2])):m}),l=R(()=>i.value>-1&&cy(n.params,o.value.params)),a=R(()=>i.value>-1&&i.value===n.matched.length-1&&tf(n.params,o.value.params));function r(c={}){return ry(c)?t[M(e.replace)?"replace":"push"](M(e.to)).catch(mi):Promise.resolve()}if(fn){const c=St();if(c){const u={route:o.value,isActive:l.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),yo(()=>{u.route=o.value,u.isActive=l.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:R(()=>o.value.href),isActive:l,isExactActive:a,navigate:r}}const ly=Ae({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hu,setup(e,{slots:t}){const n=je(hu(e)),{options:o}=$(kr),i=R(()=>({[_u(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[_u(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:wt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},l)}}}),ay=ly;function ry(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function cy(e,t){for(const n in t){const o=t[n],i=e[n];if(typeof o=="string"){if(o!==i)return!1}else if(!Et(i)||i.length!==o.length||o.some((l,a)=>l!==i[a]))return!1}return!0}function vu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _u=(e,t,n)=>e??t??n,uy=Ae({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){py();const o=$($a),i=R(()=>e.route||o.value),l=$(mu,0),a=R(()=>{let u=M(l);const{matched:d}=i.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),r=R(()=>i.value.matched[a.value]);It(mu,R(()=>a.value+1)),It(oy,r),It($a,i);const c=Q();return _e(()=>[c.value,r.value,e.name],([u,d,f],[m,h,v])=>{d&&(d.instances[f]=u,h&&h!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!Nn(d,h)||!m)&&(d.enterCallbacks[f]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=i.value,d=e.name,f=r.value,m=f&&f.components[d];if(!m)return gu(n.default,{Component:m,route:u});const h=f.props[d],v=h?h===!0?u.params:typeof h=="function"?h(u):h:null,S=wt(m,Me({},v,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[d]=null)},ref:c}));if(fn&&S.ref){const x={depth:a.value,name:f.name,path:f.path,meta:f.meta};(Et(S.ref)?S.ref.map(g=>g.i):[S.ref.i]).forEach(g=>{g.__vrv_devtools=x})}return gu(n.default,{Component:S,route:u})||S}}});function gu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const dy=uy;function py(){const e=St(),t=e.parent&&e.parent.type.name,n=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const o=t==="KeepAlive"?"keep-alive":"transition";Oe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function Zo(e,t){const n=Me({},e,{matched:e.matched.map(o=>wy(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function cs(e){return{_custom:{display:e}}}let fy=0;function my(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=fy++;ob({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},i=>{typeof i.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Zo(t.currentRoute.value,"Current Route")})}),i.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const m=f.__vrv_devtools;d.tags.push({label:(m.name?`${m.name.toString()}: `:"")+m.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:ff})}Et(f.__vrl_devtools)&&(f.__devtoolsApi=i,f.__vrl_devtools.forEach(m=>{let h=vf,v="";m.isExactActive?(h=hf,v="This is exactly active"):m.isActive&&(h=mf,v="This link is active"),d.tags.push({label:m.route.path,textColor:0,tooltip:v,backgroundColor:h})}))}),_e(t.currentRoute,()=>{c(),i.notifyComponentUpdate(),i.sendInspectorTree(r),i.sendInspectorState(r)});const l="router:navigations:"+o;i.addTimelineLayer({id:l,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((d,f)=>{i.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:i.now(),data:{error:d},groupId:f.meta.__navigationId}})});let a=0;t.beforeEach((d,f)=>{const m={guard:cs("beforeEach"),from:Zo(f,"Current Location during this navigation"),to:Zo(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),i.addTimelineEvent({layerId:l,event:{time:i.now(),title:"Start of navigation",subtitle:d.fullPath,data:m,groupId:d.meta.__navigationId}})}),t.afterEach((d,f,m)=>{const h={guard:cs("afterEach")};m?(h.failure={_custom:{type:Error,readOnly:!0,display:m?m.message:"",tooltip:"Navigation Failure",value:m}},h.status=cs("❌")):h.status=cs("✅"),h.from=Zo(f,"Current Location during this navigation"),h.to=Zo(d,"Target location"),i.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:d.fullPath,time:i.now(),data:h,logType:m?"warning":"default",groupId:d.meta.__navigationId}})});const r="router-inspector:"+o;i.addInspector({id:r,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const d=u;let f=n.getRoutes().filter(m=>!m.parent);f.forEach(bf),d.filter&&(f=f.filter(m=>Ia(m,d.filter.toLowerCase()))),f.forEach(m=>gf(m,t.currentRoute.value)),d.rootNodes=f.map(_f)}let u;i.on.getInspectorTree(d=>{u=d,d.app===e&&d.inspectorId===r&&c()}),i.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===r){const m=n.getRoutes().find(h=>h.record.__vd_id===d.nodeId);m&&(d.state={options:vy(m)})}}),i.sendInspectorTree(r),i.sendInspectorState(r)})}function hy(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function vy(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${hy(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const ff=15485081,mf=2450411,hf=8702998,_y=2282478,vf=16486972,gy=6710886;function _f(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:_y}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:vf}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:ff}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:hf}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:mf}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:gy});let o=n.__vd_id;return o==null&&(o=String(by++),n.__vd_id=o),{id:o,label:n.path,tags:t,children:e.children.map(_f)}}let by=0;const yy=/^\/(.*)\/([a-z]*)$/;function gf(e,t){const n=t.matched.length&&Nn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(o=>Nn(o,e.record))),e.children.forEach(o=>gf(o,t))}function bf(e){e.__vd_match=!1,e.children.forEach(bf)}function Ia(e,t){const n=String(e.re).match(yy);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(a=>Ia(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const i=e.record.path.toLowerCase(),l=Ti(i);return!t.startsWith("/")&&(l.includes(t)||i.includes(t))||l.startsWith(t)||i.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>Ia(a,t))}function wy(e,t){const n={};for(const o in e)t.includes(o)||(n[o]=e[o]);return n}function Sy(e){const t=Kb(e.routes,e),n=e.parseQuery||ty,o=e.stringifyQuery||fu,i=e.history;if(!i)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Qo(),a=Qo(),r=Qo(),c=sn(Sn);let u=Sn;fn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Tl.bind(null,K=>""+K),f=Tl.bind(null,ey),m=Tl.bind(null,Ti);function h(K,X){let te,oe;return of(K)?(te=t.getRecordMatcher(K),oe=X):oe=K,t.addRoute(oe,te)}function v(K){const X=t.getRecordMatcher(K);X?t.removeRoute(X):Oe(`Cannot remove non-existent route "${String(K)}"`)}function w(){return t.getRoutes().map(K=>K.record)}function S(K){return!!t.getRecordMatcher(K)}function x(K,X){if(X=Me({},X||c.value),typeof K=="string"){const b=Cl(n,K,X.path),E=t.resolve({path:b.path},X),D=i.createHref(b.fullPath);return D.startsWith("//")?Oe(`Location "${K}" resolved to "${D}". A resolved location cannot start with multiple slashes.`):E.matched.length||Oe(`No match found for location with path "${K}"`),Me(b,E,{params:m(E.params),hash:Ti(b.hash),redirectedFrom:void 0,href:D})}let te;if("path"in K)"params"in K&&!("name"in K)&&Object.keys(K.params).length&&Oe(`Path "${K.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),te=Me({},K,{path:Cl(n,K.path,X.path).path});else{const b=Me({},K.params);for(const E in b)b[E]==null&&delete b[E];te=Me({},K,{params:f(b)}),X.params=f(X.params)}const oe=t.resolve(te,X),xe=K.hash||"";xe&&!xe.startsWith("#")&&Oe(`A \`hash\` should always start with the character "#". Replace "${xe}" with "#${xe}".`),oe.params=d(m(oe.params));const Re=ab(o,Me({},K,{hash:Zb(xe),path:oe.path})),_=i.createHref(Re);return _.startsWith("//")?Oe(`Location "${K}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):oe.matched.length||Oe(`No match found for location with path "${"path"in K?K.path:K}"`),Me({fullPath:Re,hash:xe,query:o===fu?ny(K.query):K.query||{}},oe,{redirectedFrom:void 0,href:_})}function k(K){return typeof K=="string"?Cl(n,K,c.value.path):Me({},K)}function g(K,X){if(u!==K)return Lo(8,{from:X,to:K})}function T(K){return j(K)}function O(K){return T(Me(k(K),{replace:!0}))}function P(K){const X=K.matched[K.matched.length-1];if(X&&X.redirect){const{redirect:te}=X;let oe=typeof te=="function"?te(K):te;if(typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=k(oe):{path:oe},oe.params={}),!("path"in oe)&&!("name"in oe))throw Oe(`Invalid redirect found:
${JSON.stringify(oe,null,2)}
 when navigating to "${K.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Me({query:K.query,hash:K.hash,params:"path"in oe?{}:K.params},oe)}}function j(K,X){const te=u=x(K),oe=c.value,xe=K.state,Re=K.force,_=K.replace===!0,b=P(te);if(b)return j(Me(k(b),{state:typeof b=="object"?Me({},xe,b.state):xe,force:Re,replace:_}),X||te);const E=te;E.redirectedFrom=X;let D;return!Re&&ou(o,oe,te)&&(D=Lo(16,{to:E,from:oe}),Tt(oe,oe,!0,!1)),(D?Promise.resolve(D):se(E,oe)).catch(W=>rn(W)?rn(W,2)?W:Pe(W):ce(W,E,oe)).then(W=>{if(W){if(rn(W,2))return ou(o,x(W.to),E)&&X&&(X._count=X._count?X._count+1:1)>30?(Oe(`Detected a possibly infinite redirection in a navigation guard when going from "${oe.fullPath}" to "${E.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):j(Me({replace:_},k(W.to),{state:typeof W.to=="object"?Me({},xe,W.to.state):xe,force:Re}),X||E)}else W=Z(E,oe,!0,_,xe);return de(E,oe,W),W})}function L(K,X){const te=g(K,X);return te?Promise.reject(te):Promise.resolve()}function q(K){const X=Yt.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(K):K()}function se(K,X){let te;const[oe,xe,Re]=xy(K,X);te=Al(oe.reverse(),"beforeRouteLeave",K,X);for(const b of oe)b.leaveGuards.forEach(E=>{te.push(In(E,K,X))});const _=L.bind(null,K,X);return te.push(_),Ct(te).then(()=>{te=[];for(const b of l.list())te.push(In(b,K,X));return te.push(_),Ct(te)}).then(()=>{te=Al(xe,"beforeRouteUpdate",K,X);for(const b of xe)b.updateGuards.forEach(E=>{te.push(In(E,K,X))});return te.push(_),Ct(te)}).then(()=>{te=[];for(const b of K.matched)if(b.beforeEnter&&!X.matched.includes(b))if(Et(b.beforeEnter))for(const E of b.beforeEnter)te.push(In(E,K,X));else te.push(In(b.beforeEnter,K,X));return te.push(_),Ct(te)}).then(()=>(K.matched.forEach(b=>b.enterCallbacks={}),te=Al(Re,"beforeRouteEnter",K,X),te.push(_),Ct(te))).then(()=>{te=[];for(const b of a.list())te.push(In(b,K,X));return te.push(_),Ct(te)}).catch(b=>rn(b,8)?b:Promise.reject(b))}function de(K,X,te){for(const oe of r.list())q(()=>oe(K,X,te))}function Z(K,X,te,oe,xe){const Re=g(K,X);if(Re)return Re;const _=X===Sn,b=fn?history.state:{};te&&(oe||_?i.replace(K.fullPath,Me({scroll:_&&b&&b.scroll},xe)):i.push(K.fullPath,xe)),c.value=K,Tt(K,X,te,_),Pe()}let ve;function ge(){ve||(ve=i.listen((K,X,te)=>{if(!jn.listening)return;const oe=x(K),xe=P(oe);if(xe){j(Me(xe,{replace:!0}),oe).catch(mi);return}u=oe;const Re=c.value;fn&&hb(su(Re.fullPath,te.delta),dl()),se(oe,Re).catch(_=>rn(_,12)?_:rn(_,2)?(j(_.to,oe).then(b=>{rn(b,20)&&!te.delta&&te.type===Ei.pop&&i.go(-1,!1)}).catch(mi),Promise.reject()):(te.delta&&i.go(-te.delta,!1),ce(_,oe,Re))).then(_=>{_=_||Z(oe,Re,!1),_&&(te.delta&&!rn(_,8)?i.go(-te.delta,!1):te.type===Ei.pop&&rn(_,20)&&i.go(-1,!1)),de(oe,Re,_)}).catch(mi)}))}let we=Qo(),Le=Qo(),ne;function ce(K,X,te){Pe(K);const oe=Le.list();return oe.length?oe.forEach(xe=>xe(K,X,te)):(Oe("uncaught error during route navigation:"),console.error(K)),Promise.reject(K)}function ke(){return ne&&c.value!==Sn?Promise.resolve():new Promise((K,X)=>{we.add([K,X])})}function Pe(K){return ne||(ne=!K,ge(),we.list().forEach(([X,te])=>K?te(K):X()),we.reset()),K}function Tt(K,X,te,oe){const{scrollBehavior:xe}=e;if(!fn||!xe)return Promise.resolve();const Re=!te&&vb(su(K.fullPath,0))||(oe||!te)&&history.state&&history.state.scroll||null;return it().then(()=>xe(K,X,Re)).then(_=>_&&mb(_)).catch(_=>ce(_,K,X))}const nt=K=>i.go(K);let ht;const Yt=new Set,jn={currentRoute:c,listening:!0,addRoute:h,removeRoute:v,hasRoute:S,getRoutes:w,resolve:x,options:e,push:T,replace:O,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:l.add,beforeResolve:a.add,afterEach:r.add,onError:Le.add,isReady:ke,install(K){const X=this;K.component("RouterLink",ay),K.component("RouterView",dy),K.config.globalProperties.$router=X,Object.defineProperty(K.config.globalProperties,"$route",{enumerable:!0,get:()=>M(c)}),fn&&!ht&&c.value===Sn&&(ht=!0,T(i.location).catch(xe=>{Oe("Unexpected error when starting the router:",xe)}));const te={};for(const xe in Sn)te[xe]=R(()=>c.value[xe]);K.provide(kr,X),K.provide(pf,je(te)),K.provide($a,c);const oe=K.unmount;Yt.add(K),K.unmount=function(){Yt.delete(K),Yt.size<1&&(u=Sn,ve&&ve(),ve=null,c.value=Sn,ht=!1,ne=!1),oe()},fn&&my(K,X,t)}};function Ct(K){return K.reduce((X,te)=>X.then(()=>q(te)),Promise.resolve())}return jn}function xy(e,t){const n=[],o=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let a=0;a<l;a++){const r=t.matched[a];r&&(e.matched.find(u=>Nn(u,r))?o.push(r):n.push(r));const c=e.matched[a];c&&(t.matched.find(u=>Nn(u,c))||i.push(c))}return[n,o,i]}const Ml=Q(!1),vi=Q(!1),Eo=Q(!1),ky=Q(!0),Oa=f0({xs:460,...p0}),ho=Y0(),yf=F0(),$y=R(()=>ho.height.value-ho.width.value/Cn>180),wf=H0(Ut?document.body:null),Pn=c0(),Iy=R(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Pn.value)==null?void 0:e.tagName)||"")||((t=Pn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Oy=R(()=>{var e;return["BUTTON","A"].includes(((e=Pn.value)==null?void 0:e.tagName)||"")});Jt("slidev-camera","default");Jt("slidev-mic","default");const gs=Jt("slidev-scale",0),ut=Jt("slidev-show-overview",!1),Pl=Jt("slidev-presenter-cursor",!0),bu=Jt("slidev-show-editor",!1);Jt("slidev-editor-width",Ut?window.innerWidth*.4:100);const Sf=Qp(ut);function yu(e,t,n,o=i=>i){return e*o(.5-t*(.5-n))}function zy(e){return[-e[0],-e[1]]}function Dt(e,t){return[e[0]+t[0],e[1]+t[1]]}function Pt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Ft(e,t){return[e[0]*t,e[1]*t]}function Ey(e,t){return[e[0]/t,e[1]/t]}function Go(e){return[e[1],-e[0]]}function wu(e,t){return e[0]*t[0]+e[1]*t[1]}function Ty(e,t){return e[0]===t[0]&&e[1]===t[1]}function Cy(e){return Math.hypot(e[0],e[1])}function Ay(e){return e[0]*e[0]+e[1]*e[1]}function Su(e,t){return Ay(Pt(e,t))}function xf(e){return Ey(e,Cy(e))}function My(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Xo(e,t,n){let o=Math.sin(n),i=Math.cos(n),l=e[0]-t[0],a=e[1]-t[1],r=l*i-a*o,c=l*o+a*i;return[r+t[0],c+t[1]]}function za(e,t,n){return Dt(e,Ft(Pt(t,e),n))}function xu(e,t,n){return Dt(e,Ft(t,n))}var{min:Io,PI:Py}=Math,ku=.275,ei=Py+1e-4;function Ky(e,t={}){let{size:n=16,smoothing:o=.5,thinning:i=.5,simulatePressure:l=!0,easing:a=ne=>ne,start:r={},end:c={},last:u=!1}=t,{cap:d=!0,easing:f=ne=>ne*(2-ne)}=r,{cap:m=!0,easing:h=ne=>--ne*ne*ne+1}=c;if(e.length===0||n<=0)return[];let v=e[e.length-1].runningLength,w=r.taper===!1?0:r.taper===!0?Math.max(n,v):r.taper,S=c.taper===!1?0:c.taper===!0?Math.max(n,v):c.taper,x=Math.pow(n*o,2),k=[],g=[],T=e.slice(0,10).reduce((ne,ce)=>{let ke=ce.pressure;if(l){let Pe=Io(1,ce.distance/n),Tt=Io(1,1-Pe);ke=Io(1,ne+(Tt-ne)*(Pe*ku))}return(ne+ke)/2},e[0].pressure),O=yu(n,i,e[e.length-1].pressure,a),P,j=e[0].vector,L=e[0].point,q=L,se=L,de=q,Z=!1;for(let ne=0;ne<e.length;ne++){let{pressure:ce}=e[ne],{point:ke,vector:Pe,distance:Tt,runningLength:nt}=e[ne];if(ne<e.length-1&&v-nt<3)continue;if(i){if(l){let oe=Io(1,Tt/n),xe=Io(1,1-oe);ce=Io(1,T+(xe-T)*(oe*ku))}O=yu(n,i,ce,a)}else O=n/2;P===void 0&&(P=O);let ht=nt<w?f(nt/w):1,Yt=v-nt<S?h((v-nt)/S):1;O=Math.max(.01,O*Math.min(ht,Yt));let jn=(ne<e.length-1?e[ne+1]:e[ne]).vector,Ct=ne<e.length-1?wu(Pe,jn):1,K=wu(Pe,j)<0&&!Z,X=Ct!==null&&Ct<0;if(K||X){let oe=Ft(Go(j),O);for(let xe=1/13,Re=0;Re<=1;Re+=xe)se=Xo(Pt(ke,oe),ke,ei*Re),k.push(se),de=Xo(Dt(ke,oe),ke,ei*-Re),g.push(de);L=se,q=de,X&&(Z=!0);continue}if(Z=!1,ne===e.length-1){let oe=Ft(Go(Pe),O);k.push(Pt(ke,oe)),g.push(Dt(ke,oe));continue}let te=Ft(Go(za(jn,Pe,Ct)),O);se=Pt(ke,te),(ne<=1||Su(L,se)>x)&&(k.push(se),L=se),de=Dt(ke,te),(ne<=1||Su(q,de)>x)&&(g.push(de),q=de),T=ce,j=Pe}let ve=e[0].point.slice(0,2),ge=e.length>1?e[e.length-1].point.slice(0,2):Dt(e[0].point,[1,1]),we=[],Le=[];if(e.length===1){if(!(w||S)||u){let ne=xu(ve,xf(Go(Pt(ve,ge))),-(P||O)),ce=[];for(let ke=1/13,Pe=ke;Pe<=1;Pe+=ke)ce.push(Xo(ne,ve,ei*2*Pe));return ce}}else{if(!(w||S&&e.length===1))if(d)for(let ce=1/13,ke=ce;ke<=1;ke+=ce){let Pe=Xo(g[0],ve,ei*ke);we.push(Pe)}else{let ce=Pt(k[0],g[0]),ke=Ft(ce,.5),Pe=Ft(ce,.51);we.push(Pt(ve,ke),Pt(ve,Pe),Dt(ve,Pe),Dt(ve,ke))}let ne=Go(zy(e[e.length-1].vector));if(S||w&&e.length===1)Le.push(ge);else if(m){let ce=xu(ge,ne,O);for(let ke=1/29,Pe=ke;Pe<1;Pe+=ke)Le.push(Xo(ce,ge,ei*3*Pe))}else Le.push(Dt(ge,Ft(ne,O)),Dt(ge,Ft(ne,O*.99)),Pt(ge,Ft(ne,O*.99)),Pt(ge,Ft(ne,O)))}return k.concat(Le,g.reverse(),we)}function Ly(e,t={}){var n;let{streamline:o=.5,size:i=16,last:l=!1}=t;if(e.length===0)return[];let a=.15+(1-o)*.85,r=Array.isArray(e[0])?e:e.map(({x:h,y:v,pressure:w=.5})=>[h,v,w]);if(r.length===2){let h=r[1];r=r.slice(0,-1);for(let v=1;v<5;v++)r.push(za(r[0],h,v/4))}r.length===1&&(r=[...r,[...Dt(r[0],[1,1]),...r[0].slice(2)]]);let c=[{point:[r[0][0],r[0][1]],pressure:r[0][2]>=0?r[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,f=c[0],m=r.length-1;for(let h=1;h<r.length;h++){let v=l&&h===m?r[h].slice(0,2):za(f.point,r[h],a);if(Ty(f.point,v))continue;let w=My(v,f.point);if(d+=w,h<m&&!u){if(d<i)continue;u=!0}f={point:v,pressure:r[h][2]>=0?r[h][2]:.5,vector:xf(Pt(f.point,v)),distance:w,runningLength:d},c.push(f)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function Ry(e,t={}){return Ky(Ly(e,t),t)}var Wy=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let o=0,i=n.length;o<i;o++)n[o](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(i=>t!==i)}}});function Ds(e,t){return e-t}function Hy(e){return e<0?-1:1}function js(e){return[Math.abs(e),Hy(e)]}function kf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Ny=2,mn=Ny,No=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-i.left)*o,y:(e.pageY-i.top)*o,pressure:e.pressure}}else{const i=this.drauu.svgPoint;i.x=e.clientX,i.y=e.clientY;const l=i.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*o,y:l.y*o,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",o.fill??"transparent"),n.setAttribute("stroke",o.color),n.setAttribute("stroke-width",o.size.toString()),n.setAttribute("stroke-linecap","round"),o.dasharray&&n.setAttribute("stroke-dasharray",o.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(mn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Fy=class extends No{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Ry(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((o,[i,l],a,r)=>{const[c,u]=r[(a+1)%r.length];return o.push(i,l,(i+c)/2,(l+u)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},Dy=class extends No{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=js(e.x-this.start.x),[o,i]=js(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[l,a]=[this.start.x,this.start.x+t*n].sort(Ds),[r,c]=[this.start.y,this.start.y+o*i].sort(Ds);this.attr("cx",(l+a)/2),this.attr("cy",(r+c)/2),this.attr("rx",(a-l)/2),this.attr("ry",(c-r)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function $f(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(i),n.appendChild(o),n}var jy=class extends No{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=kf(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append($f(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const o=e.x-this.start.x,i=e.y-this.start.y;if(i!==0){let l=o/i;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+i*l,n=this.start.y+i):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Vy=class extends No{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=js(e.x-this.start.x),[o,i]=js(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[l,a]=[this.start.x,this.start.x+t*n].sort(Ds),[r,c]=[this.start.y,this.start.y+o*i].sort(Ds);this.attr("x",l),this.attr("y",r),this.attr("width",a-l),this.attr("height",c-r)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function By(e,t){const n=e.x-t.x,o=e.y-t.y;return n*n+o*o}function qy(e,t,n){let o=t.x,i=t.y,l=n.x-o,a=n.y-i;if(l!==0||a!==0){const r=((e.x-o)*l+(e.y-i)*a)/(l*l+a*a);r>1?(o=n.x,i=n.y):r>0&&(o+=l*r,i+=a*r)}return l=e.x-o,a=e.y-i,l*l+a*a}function Uy(e,t){let n=e[0];const o=[n];let i;for(let l=1,a=e.length;l<a;l++)i=e[l],By(i,n)>t&&(o.push(i),n=i);return n!==i&&i&&o.push(i),o}function Ea(e,t,n,o,i){let l=o,a=0;for(let r=t+1;r<n;r++){const c=qy(e[r],e[t],e[n]);c>l&&(a=r,l=c)}l>o&&(a-t>1&&Ea(e,t,a,o,i),i.push(e[a]),n-a>1&&Ea(e,a,n,o,i))}function Jy(e,t){const n=e.length-1,o=[e[0]];return Ea(e,0,n,t,o),o.push(e[n]),o}function $u(e,t,n=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=n?e:Uy(e,o),e=Jy(e,o),e}var Yy=class extends No{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=kf();const t=$f(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=$u(this.points,1,!0),this.count=0),this.attr("d",Ou(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ou($u(this.points,1,!0))),!e.getTotalLength()))}};function Qy(e,t){const n=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(n**2+o**2),angle:Math.atan2(o,n)}}function Iu(e,t,n,o){const i=t||e,l=n||e,a=.2,r=Qy(i,l),c=r.angle+(o?Math.PI:0),u=r.length*a,d=e.x+Math.cos(c)*u,f=e.y+Math.sin(c)*u;return{x:d,y:f}}function Zy(e,t,n){const o=Iu(n[t-1],n[t-2],e),i=Iu(e,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(mn)},${o.y.toFixed(mn)} ${i.x.toFixed(mn)},${i.y.toFixed(mn)} ${e.x.toFixed(mn)},${e.y.toFixed(mn)}`}function Ou(e){return e.reduce((t,n,o,i)=>o===0?`M ${n.x.toFixed(mn)},${n.y.toFixed(mn)}`:`${t} ${Zy(n,o,i)}`,"")}var Gy=class extends No{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,o)=>{if(n&&n.length)for(let i=0;i<n.length;i++){const l=n[i];if(l.getTotalLength){const a=l.getTotalLength();for(let r=0;r<this.pathSubFactor;r++){const c=l.getPointAtLength(a*r/this.pathSubFactor),u=l.getPointAtLength(a*(r+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:r,element:o||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,o=e.x2,i=t.x1,l=t.x2,a=e.y1,r=e.y2,c=t.y1,u=t.y2,d=(n-o)*(c-u)-(a-r)*(i-l),f=(n*r-a*o)*(i-l)-(n-o)*(i*u-c*l),m=(n*r-a*o)*(c-u)-(a-r)*(i*u-c*l),h=(v,w,S)=>v>=w&&v<=S?!0:v>=S&&v<=w;if(d===0)return!1;{const v={x:f/d,y:m/d};return h(v.x,n,o)&&h(v.y,a,r)&&h(v.x,i,l)&&h(v.y,c,u)}}};function Xy(e){return{draw:new Yy(e),stylus:new Fy(e),line:new jy(e),rectangle:new Vy(e),ellipse:new Dy(e),eraseLine:new Gy(e)}}var ew=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Wy(),this._models=Xy(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),i=this.eventMove.bind(this),l=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function tw(e){return new ew(e)}const Ta=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],en=Jt("slidev-drawing-enabled",!1),PW=Jt("slidev-drawing-pinned",!1),nw=Q(!1),ow=Q(!1),iw=Q(!1),Ci=Q(!1),so=z1(Jt("slidev-drawing-brush",{color:Ta[0],size:4,mode:"stylus"})),zu=Q("stylus"),If=R(()=>ze.drawings.syncAll||_t.value);let Ai=!1;const ti=R({get(){return zu.value},set(e){zu.value=e,e==="arrow"?(so.mode="line",so.arrowEnd=!0):(so.mode=e,so.arrowEnd=!1)}}),sw=je({brush:so,acceptsInputTypes:R(()=>en.value&&(!ze.drawings.presenterOnly||_t.value)?void 0:["pen"]),coordinateTransform:!1}),mt=el(tw(sw));function lw(){mt.clear(),If.value&&qp(qe.value,"")}function $r(){var e;ow.value=mt.canRedo(),nw.value=mt.canUndo(),iw.value=!!((e=mt.el)!=null&&e.children.length)}function aw(e){Ai=!0;const t=Ns[e||qe.value];t!=null?mt.load(t):mt.clear(),$r(),Ai=!1}mt.on("changed",()=>{if($r(),!Ai){const e=mt.dump(),t=qe.value;(Ns[t]||"")!==e&&If.value&&qp(t,mt.dump())}});k1(e=>{Ai=!0,e[qe.value]!=null&&mt.load(e[qe.value]||""),Ai=!1,$r()});it(()=>{_e(qe,()=>{mt.mounted&&aw()},{immediate:!0})});mt.on("start",()=>Ci.value=!0);mt.on("end",()=>Ci.value=!1);window.addEventListener("keydown",e=>{if(!en.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?mt.redo():mt.undo():e.code==="Escape"?en.value=!1:e.code==="KeyL"&&t?ti.value="line":e.code==="KeyA"&&t?ti.value="arrow":e.code==="KeyS"&&t?ti.value="stylus":e.code==="KeyR"&&t?ti.value="rectangle":e.code==="KeyE"&&t?ti.value="ellipse":e.code==="KeyC"&&t?lw():e.code.startsWith("Digit")&&t&&+e.code[5]<=Ta.length?so.color=Ta[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Qe(...e){return R(()=>e.every(t=>Je(t)))}function kt(e){return R(()=>!Je(e))}const Eu=$0(),Kl=Jt("slidev-color-schema","auto"),Ca=R(()=>ze.colorSchema!=="auto"),Ir=R({get(){return Ca.value?ze.colorSchema==="dark":Kl.value==="auto"?Eu.value:Kl.value==="dark"},set(e){Ca.value||(Kl.value=e===Eu.value?"auto":e?"dark":"light")}}),Of=Qp(Ir);Ut&&_e(Ir,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const bs=Q(1),ys=R(()=>Ye.length-1),zt=Q(0),Or=Q(0);function rw(){zt.value>bs.value&&(zt.value-=1)}function cw(){zt.value<ys.value&&(zt.value+=1)}function uw(){if(zt.value>bs.value){let e=zt.value-Or.value;e<bs.value&&(e=bs.value),zt.value=e}}function dw(){if(zt.value<ys.value){let e=zt.value+Or.value;e>ys.value&&(e=ys.value),zt.value=e}}function pw(){const{escape:e,space:t,shift:n,left:o,right:i,up:l,down:a,enter:r,d:c,g:u,o:d}=yf;let f=[{name:"next_space",key:Qe(t,kt(n)),fn:Kn,autoRepeat:!0},{name:"prev_space",key:Qe(t,n),fn:Ln,autoRepeat:!0},{name:"next_right",key:Qe(i,kt(n),kt(ut)),fn:Kn,autoRepeat:!0},{name:"prev_left",key:Qe(o,kt(n),kt(ut)),fn:Ln,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Kn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Ln,autoRepeat:!0},{name:"next_down",key:Qe(a,kt(ut)),fn:Pi,autoRepeat:!0},{name:"prev_up",key:Qe(l,kt(ut)),fn:()=>Ki(!1),autoRepeat:!0},{name:"next_shift",key:Qe(i,n),fn:Pi,autoRepeat:!0},{name:"prev_shift",key:Qe(o,n),fn:()=>Ki(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(c,kt(en)),fn:Of},{name:"toggle_overview",key:Qe(d,kt(en)),fn:Sf},{name:"hide_overview",key:Qe(e,kt(en)),fn:()=>ut.value=!1},{name:"goto",key:Qe(u,kt(en)),fn:()=>Eo.value=!Eo.value},{name:"next_overview",key:Qe(i,ut),fn:cw},{name:"prev_overview",key:Qe(o,ut),fn:rw},{name:"up_overview",key:Qe(l,ut),fn:uw},{name:"down_overview",key:Qe(a,ut),fn:dw},{name:"goto_from_overview",key:Qe(r,ut),fn:()=>{Wo(zt.value),ut.value=!1}}];const m=new Set(f.map(v=>v.name));if(f.filter(v=>v.name&&m.has(v.name)).length===0){const v=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(v),console.warn(v)}return f}const zf=Qe(kt(Iy),kt(Oy),ky);function fw(e,t,n=!1){typeof e=="string"&&(e=yf[e]);const o=Qe(e,zf);let i=0,l;const a=()=>{if(clearTimeout(l),!o.value){i=0;return}n&&(l=setTimeout(a,Math.max(1e3-i*250,150)),i++),t()};return _e(o,a,{flush:"sync"})}function mw(e,t){return r0(e,n=>{zf.value&&(n.repeat||t())})}function hw(){const e=pw();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&fw(n.key,n.fn,n.autoRepeat)}),mw("f",()=>wf.toggle())}const vw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_w=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),gw=[_w];function bw(e,t){return y(),ie("svg",vw,gw)}const yw={name:"carbon-close",render:bw};function zr(e,t=""){var i,l;const n=["slidev-page",t],o=(l=(i=e==null?void 0:e.meta)==null?void 0:i.slide)==null?void 0:l.no;return o!=null&&n.push(`slidev-page-${o}`),n.filter(Boolean).join(" ")}const ww=Ae({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;$(C);const n=Q(),o=R0(n),i=R(()=>t.width?t.width:o.width.value),l=R(()=>t.width?t.width/Cn:o.height.value);t.width&&yo(()=>{n.value&&(n.value.style.width=`${i.value}px`,n.value.style.height=`${l.value}px`)});const a=R(()=>i.value/l.value),r=R(()=>t.scale&&!Ro.value?t.scale:a.value<Cn?i.value/An:l.value*Cn/An),c=R(()=>({height:`${wr}px`,width:`${An}px`,transform:`translate(-50%, -50%) scale(${r.value})`})),u=R(()=>({"select-none":!ze.selectable,"slidev-code-line-numbers":ze.lineNumbers}));return It(jp,r),(d,f)=>(y(),ie("div",{id:"slide-container",ref_key:"root",ref:n,class:Be(u.value)},[s("div",{id:"slide-content",style:tt(c.value)},[qt(d.$slots,"default")],4),qt(d.$slots,"controls")],2))}});const A=(e,t)=>{const n=e.__vccOpts||e;for(const[o,i]of t)n[o]=i;return n},Ef=A(ww,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Er=Ae({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Kt(e,"clicks",t),o=Kt(e,"clicksElements",t),i=Kt(e,"clicksDisabled",t),l=Kt(e,"clicksOrderMap",t);o.value.length=0,It(c1,e.route),It(u1,e.context),It(pi,n),It(fi,i),It(eo,o),It(_a,l)},render(){var e,t;return this.$props.is?wt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),Sw=["innerHTML"],xw=Ae({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return $(C),(t,n)=>M(Ns)[t.page]?(y(),ie("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:M(Ns)[t.page]},null,8,Sw)):ye("v-if",!0)}}),Tf=A(xw,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),kw=Object.freeze(Object.defineProperty({__proto__:null,default:Tf},Symbol.toStringTag,{value:"Module"})),$w={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Iw=["onClick"],Ll=4*16*2,Tu=2*16,Ow=Ae({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;$(C);const o=Kt(n,"modelValue",t);function i(){o.value=!1}function l(f){Wo(f),i()}function a(f){return f===zt.value}const r=Oa.smaller("xs"),c=Oa.smaller("sm"),u=R(()=>r.value?ho.width.value-Ll:c.value?(ho.width.value-Ll-Tu)/2:300),d=R(()=>Math.floor((ho.width.value-Ll)/(u.value+Tu)));return yo(()=>{zt.value=qe.value,Or.value=d.value}),(f,m)=>{const h=yw;return y(),ie(Ee,null,[np(s("div",$w,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tt(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(y(!0),ie(Ee,null,Ho(M(Ye).slice(0,-1),(v,w)=>(y(),ie("div",{key:v.path,class:"relative"},[s("div",{class:Be(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(w+1),"border-gray-400":!a(w+1)}]),style:tt(M(Sr)),onClick:S=>l(+v.path)},[(y(),z(Ef,{key:v.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:I(()=>[v!=null&&v.component?(y(),z(M(Er),{key:0,is:v.component,"clicks-disabled":!0,class:Be(M(zr)(v)),route:v,context:"overview"},null,8,["is","class","route"])):ye("v-if",!0),G(Tf,{page:+v.path},null,8,["page"])]),_:2},1032,["width"]))],14,Iw),s("div",{class:"absolute top-0 opacity-50",style:tt(`left: ${u.value+5}px`)},gt(w+1),5)]))),128))],4)],512),[[Ap,M(o)]]),M(o)?(y(),ie("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:i},[G(h)])):ye("v-if",!0)],64)}}});const zw=A(Ow,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Ew="/TPSI/4/svelte/assets/logo-b72bde5d.png",Tw={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Cw=Ae({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;$(C);const o=Kt(n,"modelValue",t);function i(){o.value=!1}return(l,a)=>(y(),z(ip,null,[M(o)?(y(),ie("div",Tw,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=r=>i())}),s("div",{class:Be(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[qt(l.$slots,"default")],2)])):ye("v-if",!0)],1024))}}),Aw=A(Cw,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),Mw={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Pw=["innerHTML"],Kw=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:Ew,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),p("dev ")])])],-1),Lw=Ae({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;$(C);const o=Kt(n,"modelValue",t),i=R(()=>typeof ze.info=="string");return(l,a)=>(y(),z(Aw,{modelValue:M(o),"onUpdate:modelValue":a[0]||(a[0]=r=>Te(o)?o.value=r:null),class:"px-6 py-4"},{default:I(()=>[s("div",Mw,[i.value?(y(),ie("div",{key:0,class:"mb-4",innerHTML:M(ze).info},null,8,Pw)):ye("v-if",!0),Kw])]),_:1},8,["modelValue"]))}});const Rw=A(Lw,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function _n(e){return Array.isArray?Array.isArray(e):Mf(e)==="[object Array]"}const Ww=1/0;function Hw(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-Ww?"-0":t}function Nw(e){return e==null?"":Hw(e)}function tn(e){return typeof e=="string"}function Cf(e){return typeof e=="number"}function Fw(e){return e===!0||e===!1||Dw(e)&&Mf(e)=="[object Boolean]"}function Af(e){return typeof e=="object"}function Dw(e){return Af(e)&&e!==null}function Ot(e){return e!=null}function Rl(e){return!e.trim().length}function Mf(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const jw="Incorrect 'index' type",Vw=e=>`Invalid value for key ${e}`,Bw=e=>`Pattern length exceeds max of ${e}.`,qw=e=>`Missing ${e} property in key`,Uw=e=>`Property 'weight' in key '${e}' must be a positive integer`,Cu=Object.prototype.hasOwnProperty;class Jw{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(o=>{let i=Pf(o);n+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(o=>{o.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Pf(e){let t=null,n=null,o=null,i=1,l=null;if(tn(e)||_n(e))o=e,t=Au(e),n=Aa(e);else{if(!Cu.call(e,"name"))throw new Error(qw("name"));const a=e.name;if(o=a,Cu.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(Uw(a));t=Au(a),n=Aa(a),l=e.getFn}return{path:t,id:n,weight:i,src:o,getFn:l}}function Au(e){return _n(e)?e:e.split(".")}function Aa(e){return _n(e)?e.join("."):e}function Yw(e,t){let n=[],o=!1;const i=(l,a,r)=>{if(Ot(l))if(!a[r])n.push(l);else{let c=a[r];const u=l[c];if(!Ot(u))return;if(r===a.length-1&&(tn(u)||Cf(u)||Fw(u)))n.push(Nw(u));else if(_n(u)){o=!0;for(let d=0,f=u.length;d<f;d+=1)i(u[d],a,r+1)}else a.length&&i(u,a,r+1)}};return i(e,tn(t)?t.split("."):t,0),o?n:n[0]}const Qw={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Zw={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Gw={location:0,threshold:.6,distance:100},Xw={useExtendedSearch:!1,getFn:Yw,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var fe={...Zw,...Qw,...Gw,...Xw};const eS=/[^ ]+/g;function tS(e=1,t=3){const n=new Map,o=Math.pow(10,t);return{get(i){const l=i.match(eS).length;if(n.has(l))return n.get(l);const a=1/Math.pow(l,.5*e),r=parseFloat(Math.round(a*o)/o);return n.set(l,r),r},clear(){n.clear()}}}class Tr{constructor({getFn:t=fe.getFn,fieldNormWeight:n=fe.fieldNormWeight}={}){this.norm=tS(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,o)=>{this._keysMap[n.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,tn(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();tn(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,o=this.size();n<o;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!Ot(t)||Rl(t))return;let o={v:t,i:n,n:this.norm.get(t)};this.records.push(o)}_addObject(t,n){let o={i:n,$:{}};this.keys.forEach((i,l)=>{let a=i.getFn?i.getFn(t):this.getFn(t,i.path);if(Ot(a)){if(_n(a)){let r=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:d}=c.pop();if(Ot(d))if(tn(d)&&!Rl(d)){let f={v:d,i:u,n:this.norm.get(d)};r.push(f)}else _n(d)&&d.forEach((f,m)=>{c.push({nestedArrIndex:m,value:f})})}o.$[l]=r}else if(tn(a)&&!Rl(a)){let r={v:a,n:this.norm.get(a)};o.$[l]=r}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Kf(e,t,{getFn:n=fe.getFn,fieldNormWeight:o=fe.fieldNormWeight}={}){const i=new Tr({getFn:n,fieldNormWeight:o});return i.setKeys(e.map(Pf)),i.setSources(t),i.create(),i}function nS(e,{getFn:t=fe.getFn,fieldNormWeight:n=fe.fieldNormWeight}={}){const{keys:o,records:i}=e,l=new Tr({getFn:t,fieldNormWeight:n});return l.setKeys(o),l.setIndexRecords(i),l}function us(e,{errors:t=0,currentLocation:n=0,expectedLocation:o=0,distance:i=fe.distance,ignoreLocation:l=fe.ignoreLocation}={}){const a=t/e.length;if(l)return a;const r=Math.abs(o-n);return i?a+r/i:r?1:a}function oS(e=[],t=fe.minMatchCharLength){let n=[],o=-1,i=-1,l=0;for(let a=e.length;l<a;l+=1){let r=e[l];r&&o===-1?o=l:!r&&o!==-1&&(i=l-1,i-o+1>=t&&n.push([o,i]),o=-1)}return e[l-1]&&l-o>=t&&n.push([o,l-1]),n}const no=32;function iS(e,t,n,{location:o=fe.location,distance:i=fe.distance,threshold:l=fe.threshold,findAllMatches:a=fe.findAllMatches,minMatchCharLength:r=fe.minMatchCharLength,includeMatches:c=fe.includeMatches,ignoreLocation:u=fe.ignoreLocation}={}){if(t.length>no)throw new Error(Bw(no));const d=t.length,f=e.length,m=Math.max(0,Math.min(o,f));let h=l,v=m;const w=r>1||c,S=w?Array(f):[];let x;for(;(x=e.indexOf(t,v))>-1;){let j=us(t,{currentLocation:x,expectedLocation:m,distance:i,ignoreLocation:u});if(h=Math.min(j,h),v=x+d,w){let L=0;for(;L<d;)S[x+L]=1,L+=1}}v=-1;let k=[],g=1,T=d+f;const O=1<<d-1;for(let j=0;j<d;j+=1){let L=0,q=T;for(;L<q;)us(t,{errors:j,currentLocation:m+q,expectedLocation:m,distance:i,ignoreLocation:u})<=h?L=q:T=q,q=Math.floor((T-L)/2+L);T=q;let se=Math.max(1,m-q+1),de=a?f:Math.min(m+q,f)+d,Z=Array(de+2);Z[de+1]=(1<<j)-1;for(let ge=de;ge>=se;ge-=1){let we=ge-1,Le=n[e.charAt(we)];if(w&&(S[we]=+!!Le),Z[ge]=(Z[ge+1]<<1|1)&Le,j&&(Z[ge]|=(k[ge+1]|k[ge])<<1|1|k[ge+1]),Z[ge]&O&&(g=us(t,{errors:j,currentLocation:we,expectedLocation:m,distance:i,ignoreLocation:u}),g<=h)){if(h=g,v=we,v<=m)break;se=Math.max(1,2*m-v)}}if(us(t,{errors:j+1,currentLocation:m,expectedLocation:m,distance:i,ignoreLocation:u})>h)break;k=Z}const P={isMatch:v>=0,score:Math.max(.001,g)};if(w){const j=oS(S,r);j.length?c&&(P.indices=j):P.isMatch=!1}return P}function sS(e){let t={};for(let n=0,o=e.length;n<o;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<o-n-1}return t}class Lf{constructor(t,{location:n=fe.location,threshold:o=fe.threshold,distance:i=fe.distance,includeMatches:l=fe.includeMatches,findAllMatches:a=fe.findAllMatches,minMatchCharLength:r=fe.minMatchCharLength,isCaseSensitive:c=fe.isCaseSensitive,ignoreLocation:u=fe.ignoreLocation}={}){if(this.options={location:n,threshold:o,distance:i,includeMatches:l,findAllMatches:a,minMatchCharLength:r,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(m,h)=>{this.chunks.push({pattern:m,alphabet:sS(m),startIndex:h})},f=this.pattern.length;if(f>no){let m=0;const h=f%no,v=f-h;for(;m<v;)d(this.pattern.substr(m,no),m),m+=no;if(h){const w=f-no;d(this.pattern.substr(w),w)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:o}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let v={isMatch:!0,score:0};return o&&(v.indices=[[0,t.length-1]]),v}const{location:i,distance:l,threshold:a,findAllMatches:r,minMatchCharLength:c,ignoreLocation:u}=this.options;let d=[],f=0,m=!1;this.chunks.forEach(({pattern:v,alphabet:w,startIndex:S})=>{const{isMatch:x,score:k,indices:g}=iS(t,v,w,{location:i+S,distance:l,threshold:a,findAllMatches:r,minMatchCharLength:c,includeMatches:o,ignoreLocation:u});x&&(m=!0),f+=k,x&&g&&(d=[...d,...g])});let h={isMatch:m,score:m?f/this.chunks.length:1};return m&&o&&(h.indices=d),h}}class Dn{constructor(t){this.pattern=t}static isMultiMatch(t){return Mu(t,this.multiRegex)}static isSingleMatch(t){return Mu(t,this.singleRegex)}search(){}}function Mu(e,t){const n=e.match(t);return n?n[1]:null}class lS extends Dn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class aS extends Dn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class rS extends Dn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class cS extends Dn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class uS extends Dn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class dS extends Dn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Rf extends Dn{constructor(t,{location:n=fe.location,threshold:o=fe.threshold,distance:i=fe.distance,includeMatches:l=fe.includeMatches,findAllMatches:a=fe.findAllMatches,minMatchCharLength:r=fe.minMatchCharLength,isCaseSensitive:c=fe.isCaseSensitive,ignoreLocation:u=fe.ignoreLocation}={}){super(t),this._bitapSearch=new Lf(t,{location:n,threshold:o,distance:i,includeMatches:l,findAllMatches:a,minMatchCharLength:r,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Wf extends Dn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,o;const i=[],l=this.pattern.length;for(;(o=t.indexOf(this.pattern,n))>-1;)n=o+l,i.push([o,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const Ma=[lS,Wf,rS,cS,dS,uS,aS,Rf],Pu=Ma.length,pS=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,fS="|";function mS(e,t={}){return e.split(fS).map(n=>{let o=n.trim().split(pS).filter(l=>l&&!!l.trim()),i=[];for(let l=0,a=o.length;l<a;l+=1){const r=o[l];let c=!1,u=-1;for(;!c&&++u<Pu;){const d=Ma[u];let f=d.isMultiMatch(r);f&&(i.push(new d(f,t)),c=!0)}if(!c)for(u=-1;++u<Pu;){const d=Ma[u];let f=d.isSingleMatch(r);if(f){i.push(new d(f,t));break}}}return i})}const hS=new Set([Rf.type,Wf.type]);class vS{constructor(t,{isCaseSensitive:n=fe.isCaseSensitive,includeMatches:o=fe.includeMatches,minMatchCharLength:i=fe.minMatchCharLength,ignoreLocation:l=fe.ignoreLocation,findAllMatches:a=fe.findAllMatches,location:r=fe.location,threshold:c=fe.threshold,distance:u=fe.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:o,minMatchCharLength:i,findAllMatches:a,ignoreLocation:l,location:r,threshold:c,distance:u},this.pattern=n?t:t.toLowerCase(),this.query=mS(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let l=0,a=[],r=0;for(let c=0,u=n.length;c<u;c+=1){const d=n[c];a.length=0,l=0;for(let f=0,m=d.length;f<m;f+=1){const h=d[f],{isMatch:v,indices:w,score:S}=h.search(t);if(v){if(l+=1,r+=S,o){const x=h.constructor.type;hS.has(x)?a=[...a,...w]:a.push(w)}}else{r=0,l=0,a.length=0;break}}if(l){let f={isMatch:!0,score:r/l};return o&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const Pa=[];function _S(...e){Pa.push(...e)}function Ka(e,t){for(let n=0,o=Pa.length;n<o;n+=1){let i=Pa[n];if(i.condition(e,t))return new i(e,t)}return new Lf(e,t)}const Vs={AND:"$and",OR:"$or"},La={PATH:"$path",PATTERN:"$val"},Ra=e=>!!(e[Vs.AND]||e[Vs.OR]),gS=e=>!!e[La.PATH],bS=e=>!_n(e)&&Af(e)&&!Ra(e),Ku=e=>({[Vs.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Hf(e,t,{auto:n=!0}={}){const o=i=>{let l=Object.keys(i);const a=gS(i);if(!a&&l.length>1&&!Ra(i))return o(Ku(i));if(bS(i)){const c=a?i[La.PATH]:l[0],u=a?i[La.PATTERN]:i[c];if(!tn(u))throw new Error(Vw(c));const d={keyId:Aa(c),pattern:u};return n&&(d.searcher=Ka(u,t)),d}let r={children:[],operator:l[0]};return l.forEach(c=>{const u=i[c];_n(u)&&u.forEach(d=>{r.children.push(o(d))})}),r};return Ra(e)||(e=Ku(e)),o(e)}function yS(e,{ignoreFieldNorm:t=fe.ignoreFieldNorm}){e.forEach(n=>{let o=1;n.matches.forEach(({key:i,norm:l,score:a})=>{const r=i?i.weight:null;o*=Math.pow(a===0&&r?Number.EPSILON:a,(r||1)*(t?1:l))}),n.score=o})}function wS(e,t){const n=e.matches;t.matches=[],Ot(n)&&n.forEach(o=>{if(!Ot(o.indices)||!o.indices.length)return;const{indices:i,value:l}=o;let a={indices:i,value:l};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),t.matches.push(a)})}function SS(e,t){t.score=e.score}function xS(e,t,{includeMatches:n=fe.includeMatches,includeScore:o=fe.includeScore}={}){const i=[];return n&&i.push(wS),o&&i.push(SS),e.map(l=>{const{idx:a}=l,r={item:t[a],refIndex:a};return i.length&&i.forEach(c=>{c(l,r)}),r})}class Fo{constructor(t,n={},o){this.options={...fe,...n},this.options.useExtendedSearch,this._keyStore=new Jw(this.options.keys),this.setCollection(t,o)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Tr))throw new Error(jw);this._myIndex=n||Kf(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Ot(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let o=0,i=this._docs.length;o<i;o+=1){const l=this._docs[o];t(l,o)&&(this.removeAt(o),o-=1,i-=1,n.push(l))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:o,includeScore:i,shouldSort:l,sortFn:a,ignoreFieldNorm:r}=this.options;let c=tn(t)?tn(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return yS(c,{ignoreFieldNorm:r}),l&&c.sort(a),Cf(n)&&n>-1&&(c=c.slice(0,n)),xS(c,this._docs,{includeMatches:o,includeScore:i})}_searchStringList(t){const n=Ka(t,this.options),{records:o}=this._myIndex,i=[];return o.forEach(({v:l,i:a,n:r})=>{if(!Ot(l))return;const{isMatch:c,score:u,indices:d}=n.searchIn(l);c&&i.push({item:l,idx:a,matches:[{score:u,value:l,norm:r,indices:d}]})}),i}_searchLogical(t){const n=Hf(t,this.options),o=(r,c,u)=>{if(!r.children){const{keyId:f,searcher:m}=r,h=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:m});return h&&h.length?[{idx:u,item:c,matches:h}]:[]}const d=[];for(let f=0,m=r.children.length;f<m;f+=1){const h=r.children[f],v=o(h,c,u);if(v.length)d.push(...v);else if(r.operator===Vs.AND)return[]}return d},i=this._myIndex.records,l={},a=[];return i.forEach(({$:r,i:c})=>{if(Ot(r)){let u=o(n,r,c);u.length&&(l[c]||(l[c]={idx:c,item:r,matches:[]},a.push(l[c])),u.forEach(({matches:d})=>{l[c].matches.push(...d)}))}}),a}_searchObjectList(t){const n=Ka(t,this.options),{keys:o,records:i}=this._myIndex,l=[];return i.forEach(({$:a,i:r})=>{if(!Ot(a))return;let c=[];o.forEach((u,d)=>{c.push(...this._findMatches({key:u,value:a[d],searcher:n}))}),c.length&&l.push({idx:r,item:a,matches:c})}),l}_findMatches({key:t,value:n,searcher:o}){if(!Ot(n))return[];let i=[];if(_n(n))n.forEach(({v:l,i:a,n:r})=>{if(!Ot(l))return;const{isMatch:c,score:u,indices:d}=o.searchIn(l);c&&i.push({score:u,key:t,value:l,idx:a,norm:r,indices:d})});else{const{v:l,n:a}=n,{isMatch:r,score:c,indices:u}=o.searchIn(l);r&&i.push({score:c,key:t,value:l,norm:a,indices:u})}return i}}Fo.version="6.6.2";Fo.createIndex=Kf;Fo.parseIndex=nS;Fo.config=fe;Fo.parseQuery=Hf;_S(vS);const kS={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},$S=["value","disabled","onKeydown"],IS=["border","onClick"],OS={"w-4":"","text-right":"",op50:"","text-sm":""},zS=Ae({__name:"Goto",setup(e){$(C);const t=Q(),n=Q(),o=Q(),i=Q(),l=Q(""),a=Q(0);function r(g){return g!=null}const c=R(()=>new Fo(Ye.map(g=>{var T;return(T=g.meta)==null?void 0:T.slide}).filter(r),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=R(()=>l.value.startsWith("/")?l.value.substring(1):l.value),d=R(()=>c.value.search(u.value).map(g=>g.item)),f=R(()=>!!d.value.length);function m(){if(f.value){const g=d.value.at(a.value||0);g&&Wo(g.no)}h()}function h(){l.value="",Eo.value=!1}function v(g){g.preventDefault(),a.value++,a.value>=d.value.length&&(a.value=0),S()}function w(g){g.preventDefault(),a.value--,a.value<=-2&&(a.value=d.value.length-1),S()}function S(){var T;const g=(T=i.value)==null?void 0:T[a.value];g&&o.value&&(g.offsetTop+g.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:g.offsetTop+g.offsetHeight-o.value.offsetHeight+1}):g.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:g.offsetTop}))}function x(g){a.value=0,l.value=g.target.value}function k(g){Wo(g),h()}return _e(Eo,async g=>{var T;g?(l.value="",a.value=0,setTimeout(()=>{var O;return(O=n.value)==null?void 0:O.focus()},0)):(T=n.value)==null||T.blur()}),_e(Pn,()=>{var g;(g=t.value)!=null&&g.contains(Pn.value)||h()}),(g,T)=>(y(),ie("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:Be(["fixed right-5 transition-all",M(Eo)?"top-5":"-top-20"]),"w-90":""},[s("div",kS,[s("input",{ref_key:"input",ref:n,value:l.value,type:"text",disabled:!M(Eo),class:Be(["outline-none bg-transparent",{"text-red-400":!f.value&&l.value}]),placeholder:"Goto...",onKeydown:[os(m,["enter"]),os(h,["escape"]),os(v,["down"]),os(w,["up"])],onInput:x},null,42,$S)]),d.value.length>0?(y(),ie("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(y(!0),ie(Ee,null,Ho(d.value,(O,P)=>(y(),ie("li",{ref_for:!0,ref_key:"items",ref:i,key:O.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:P===0?"":"t main",class:Be(a.value===P?"bg-active op100":"op80"),onClick:ug(j=>k(O.no),["stop"])},[s("div",OS,gt(O.no),1),p(" "+gt(O.title),1)],10,IS))),128))],512)):ye("v-if",!0)],2))}});const ES=A(zS,[["__scopeId","data-v-f5ee02a7"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),TS=Ae({__name:"Controls",setup(e){$(C);const t=sn(),n=sn();return(o,i)=>(y(),ie(Ee,null,[G(zw,{modelValue:M(ut),"onUpdate:modelValue":i[0]||(i[0]=l=>Te(ut)?ut.value=l:null)},null,8,["modelValue"]),G(ES),t.value?(y(),z(M(t),{key:0})):ye("v-if",!0),n.value?(y(),z(M(n),{key:1,modelValue:M(Ml),"onUpdate:modelValue":i[1]||(i[1]=l=>Te(Ml)?Ml.value=l:null)},null,8,["modelValue"])):ye("v-if",!0),M(ze).info?(y(),z(Rw,{key:2,modelValue:M(vi),"onUpdate:modelValue":i[2]||(i[2]=l=>Te(vi)?vi.value=l:null)},null,8,["modelValue"])):ye("v-if",!0)],64))}}),CS=A(TS,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),AS={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},MS=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),PS=[MS];function KS(e,t){return y(),ie("svg",AS,PS)}const LS={name:"carbon-settings-adjust",render:KS},RS={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},WS=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),HS=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),NS=[WS,HS];function FS(e,t){return y(),ie("svg",RS,NS)}const DS={name:"carbon-information",render:FS},jS={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},VS=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),BS=[VS];function qS(e,t){return y(),ie("svg",jS,BS)}const US={name:"carbon-download",render:qS},JS={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},YS=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),QS=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),ZS=[YS,QS];function GS(e,t){return y(),ie("svg",JS,ZS)}const XS={name:"carbon-user-speaker",render:GS},ex={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tx=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),nx=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),ox=[tx,nx];function ix(e,t){return y(),ie("svg",ex,ox)}const sx={name:"carbon-presentation-file",render:ix},lx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ax=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),rx=[ax];function cx(e,t){return y(),ie("svg",lx,rx)}const ux={name:"carbon-pen",render:cx},dx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},px=s("g",{fill:"currentColor"},[s("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),s("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),fx=[px];function mx(e,t){return y(),ie("svg",dx,fx)}const hx={name:"ph-cursor-duotone",render:mx},vx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},_x=s("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),gx=[_x];function bx(e,t){return y(),ie("svg",vx,gx)}const Nf={name:"ph-cursor-fill",render:bx},yx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},wx=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Sx=[wx];function xx(e,t){return y(),ie("svg",yx,Sx)}const kx={name:"carbon-sun",render:xx},$x={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ix=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Ox=[Ix];function zx(e,t){return y(),ie("svg",$x,Ox)}const Ex={name:"carbon-moon",render:zx},Tx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cx=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Ax=[Cx];function Mx(e,t){return y(),ie("svg",Tx,Ax)}const Px={name:"carbon-apps",render:Mx},Kx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lx=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Rx=[Lx];function Wx(e,t){return y(),ie("svg",Kx,Rx)}const Ff={name:"carbon-arrow-right",render:Wx},Hx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nx=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Fx=[Nx];function Dx(e,t){return y(),ie("svg",Hx,Fx)}const jx={name:"carbon-arrow-left",render:Dx},Vx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bx=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),qx=[Bx];function Ux(e,t){return y(),ie("svg",Vx,qx)}const Jx={name:"carbon-maximize",render:Ux},Yx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qx=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Zx=[Qx];function Gx(e,t){return y(),ie("svg",Yx,Zx)}const Xx={name:"carbon-minimize",render:Gx},ek={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tk=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),nk=[tk];function ok(e,t){return y(),ie("svg",ek,nk)}const ik={name:"carbon-checkmark",render:ok},sk={class:"select-list"},lk={class:"title"},ak={class:"items"},rk=["onClick"],ck=Ae({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;$(C);const o=Kt(n,"modelValue",t,{passive:!0});return(i,l)=>{const a=ik;return y(),ie("div",sk,[s("div",lk,gt(e.title),1),s("div",ak,[(y(!0),ie(Ee,null,Ho(e.items,r=>(y(),ie("div",{key:r.value,class:Be(["item",{active:M(o)===r.value}]),onClick:()=>{var c;o.value=r.value,(c=r.onClick)==null||c.call(r)}},[G(a,{class:Be(["text-green-500",{"opacity-0":M(o)!==r.value}])},null,8,["class"]),p(" "+gt(r.display||r.value),1)],10,rk))),128))])])}}});const uk=A(ck,[["__scopeId","data-v-3f89fa11"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),dk={class:"text-sm"},pk=Ae({__name:"Settings",setup(e){$(C);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(y(),ie("div",dk,[G(uk,{modelValue:M(gs),"onUpdate:modelValue":o[0]||(o[0]=i=>Te(gs)?gs.value=i:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),fk=A(pk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),mk={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},hk=Ae({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;$(C);const o=Kt(n,"modelValue",t,{passive:!0}),i=Q();return l0(i,()=>{o.value=!1}),(l,a)=>(y(),ie("div",{ref_key:"el",ref:i,class:"flex relative"},[s("button",{class:Be({disabled:e.disabled}),onClick:a[0]||(a[0]=r=>o.value=!M(o))},[qt(l.$slots,"button",{class:Be({disabled:e.disabled})})],2),(y(),z(ip,null,[M(o)?(y(),ie("div",mk,[qt(l.$slots,"menu")])):ye("v-if",!0)],1024))],512))}}),vk=A(hk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),_k={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},gk={__name:"VerticalDivider",setup(e){return $(C),(t,n)=>(y(),ie("div",_k))}},ds=A(gk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),bk={render(){return[]}},yk={class:"slidev-icon-btn"},wk={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Sk={class:"my-auto"},xk={class:"opacity-50"},kk=Ae({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;$(C);const n=Oa.smaller("md"),{isFullscreen:o,toggle:i}=wf,l=R(()=>Ha.value?`?password=${Ha.value}`:""),a=R(()=>`/presenter/${qe.value}${l.value}`),r=R(()=>`/${qe.value}${l.value}`),c=Q();function u(){c.value&&Pn.value&&c.value.contains(Pn.value)&&Pn.value.blur()}const d=R(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=sn(),m=sn();return Mn(()=>import("./DrawingControls-f80e4643.js"),[]).then(h=>m.value=h.default),(h,v)=>{const w=Xx,S=Jx,x=jx,k=Ff,g=Px,T=Ex,O=kx,P=Nf,j=hx,L=ux,q=sx,se=Ms("RouterLink"),de=XS,Z=US,ve=DS,ge=LS;return y(),ie("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[s("div",{class:Be(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:u},[M(pn)?ye("v-if",!0):(y(),ie("button",{key:0,class:"slidev-icon-btn",onClick:v[0]||(v[0]=(...we)=>M(i)&&M(i)(...we))},[M(o)?(y(),z(w,{key:0})):(y(),z(S,{key:1}))])),s("button",{class:Be(["slidev-icon-btn",{disabled:!M(QK)}]),onClick:v[1]||(v[1]=(...we)=>M(Ln)&&M(Ln)(...we))},[G(x)],2),s("button",{class:Be(["slidev-icon-btn",{disabled:!M(YK)}]),title:"Next",onClick:v[2]||(v[2]=(...we)=>M(Kn)&&M(Kn)(...we))},[G(k)],2),M(pn)?ye("v-if",!0):(y(),ie("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:v[3]||(v[3]=we=>M(Sf)())},[G(g)])),M(Ca)?ye("v-if",!0):(y(),ie("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:v[4]||(v[4]=we=>M(Of)())},[M(Ir)?(y(),z(T,{key:0})):(y(),z(O,{key:1}))])),G(ds),M(pn)?ye("v-if",!0):(y(),ie(Ee,{key:3},[!M(_t)&&!M(n)&&f.value?(y(),ie(Ee,{key:0},[G(M(f)),G(ds)],64)):ye("v-if",!0),M(_t)?(y(),ie("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:v[5]||(v[5]=we=>Pl.value=!M(Pl))},[M(Pl)?(y(),z(P,{key:0})):(y(),z(j,{key:1,class:"opacity-50"}))])):ye("v-if",!0)],64)),(!M(ze).drawings.presenterOnly||M(_t))&&!M(pn)?(y(),ie(Ee,{key:4},[s("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:v[6]||(v[6]=we=>en.value=!M(en))},[G(L),M(en)?(y(),ie("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tt({background:M(so).color})},null,4)):ye("v-if",!0)]),G(ds)],64)):ye("v-if",!0),M(pn)?ye("v-if",!0):(y(),ie(Ee,{key:5},[M(_t)?(y(),z(se,{key:0,to:r.value,class:"slidev-icon-btn",title:"Play Mode"},{default:I(()=>[G(q)]),_:1},8,["to"])):ye("v-if",!0),M(VK)?(y(),z(se,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:I(()=>[G(de)]),_:1},8,["to"])):ye("v-if",!0),ye("v-if",!0)],64)),(y(),ie(Ee,{key:6},[M(ze).download?(y(),ie("button",{key:0,class:"slidev-icon-btn",onClick:v[8]||(v[8]=(...we)=>M(Na)&&M(Na)(...we))},[G(Z)])):ye("v-if",!0)],64)),!M(_t)&&M(ze).info&&!M(pn)?(y(),ie("button",{key:7,class:"slidev-icon-btn",onClick:v[9]||(v[9]=we=>vi.value=!M(vi))},[G(ve)])):ye("v-if",!0),!M(_t)&&!M(pn)?(y(),z(vk,{key:8},{button:I(()=>[s("button",yk,[G(ge)])]),menu:I(()=>[G(fk)]),_:1})):ye("v-if",!0),M(pn)?ye("v-if",!0):(y(),z(ds,{key:9})),s("div",wk,[s("div",Sk,[p(gt(M(qe))+" ",1),s("span",xk,"/ "+gt(M(BK)),1)])]),G(M(bk))],34)],512)}}}),$k=A(kk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),Ik={style:{"font-size":"0.55rem","line-height":"1rem"}},Ok=s("div",{class:"absolute bottom-0 left-1"},[s("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),zk={class:"absolute bottom-1 left-89 text-gray-700"},Ek={key:0,class:"absolute bottom-1 right-1 text-gray-700"},Tk={__name:"global-top",setup(e){const t=$(C);return(n,o)=>(y(),ie("footer",Ik,[Ok,s("div",zk," ITT E.Agnelli - Informatica - "+gt(M(t).configs.materia)+" - prof. Antonio Mancuso - a.s. "+gt(M(t).configs.as)+" - v "+gt(M(t).configs.version||0),1),M(t).nav.currentPage!==1&&M(t).nav.currentPage!=M(t).nav.total+1?(y(),ie("div",Ek,gt(M(t).nav.currentPage-1)+" / "+gt(M(t).nav.total-1),1)):ye("v-if",!0)]))}},Ck=A(Tk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),Df={render(){return[wt(Ck)]}},jf={render(){return[]}},Ak={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Mk=Ae({__name:"PresenterMouse",setup(e){return $(C),(t,n)=>{const o=Nf;return M(El).cursor?(y(),ie("div",Ak,[G(o,{class:"absolute",style:tt({left:`${M(El).cursor.x}%`,top:`${M(El).cursor.y}%`})},null,8,["style"])])):ye("v-if",!0)}}}),Pk=A(Mk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Kk=Ae({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){$(C),_e(dt,()=>{var o,i;(o=dt.value)!=null&&o.meta&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),(i=Wl.value)!=null&&i.meta&&Wl.value.meta.preload!==!1&&(Wl.value.meta.__preloaded=!0)},{immediate:!0});const t=sn();Mn(()=>import("./DrawingLayer-ec2d5cea.js"),[]).then(o=>t.value=o.default);const n=R(()=>Ye.filter(o=>{var i;return((i=o.meta)==null?void 0:i.__preloaded)||o===dt.value}));return(o,i)=>(y(),ie(Ee,null,[ye(" Global Bottom "),G(M(jf)),ye(" Slides "),G(og,Ke(M(XK),{id:"slideshow",tag:"div"}),{default:I(()=>[(y(!0),ie(Ee,null,Ho(n.value,l=>{var a;return np((y(),z(M(Er),{key:l.path,is:l==null?void 0:l.component,clicks:l===M(dt)?M(Lt):0,"clicks-elements":((a=l.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Be(M(zr)(l)),route:l,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ap,l===M(dt)]])}),128))]),_:1},16),ye(" Global Top "),G(M(Df)),t.value?(y(),z(M(t),{key:0})):ye("v-if",!0),M(_t)?ye("v-if",!0):(y(),z(Pk,{key:1}))],64))}});const Lk=A(Kk,[["__scopeId","data-v-afb4231e"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Rk=Ae({__name:"PrintStyle",setup(e){$(C);function t(n,{slots:o}){if(o.default)return wt("style",o.default())}return(n,o)=>(y(),z(t,null,{default:I(()=>[p(" @page { size: "+gt(M(An))+"px "+gt(M(wr))+"px; margin: 0px; } ",1)]),_:1}))}}),Vf=A(Rk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Wk=Ae({__name:"Play",setup(e){$(C),hw();const t=Q();function n(l){var a;bu.value||((a=l.target)==null?void 0:a.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?Kn():Ln())}eL(t);const o=R(()=>$y.value||bu.value);sn();const i=sn();return Mn(()=>import("./DrawingControls-f80e4643.js"),[]).then(l=>i.value=l.default),(l,a)=>(y(),ie(Ee,null,[M(Ro)?(y(),z(Vf,{key:0})):ye("v-if",!0),s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:tt(M(Sr))},[G(Ef,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:M(Ro)?M(ho).width.value:void 0,scale:M(gs),onPointerdown:n},{default:I(()=>[G(Lk,{context:"slide"})]),controls:I(()=>[s("div",{class:Be(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",M(Ci)?"pointer-events-none":""]])},[G($k,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!M(ze).drawings.presenterOnly&&!M(pn)&&i.value?(y(),z(M(i),{key:0,class:"ml-0"})):ye("v-if",!0)]),_:1},8,["style","width","scale"]),ye("v-if",!0)],4),G(CS)],64))}}),Hk=A(Wk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Bf(e){return typeof e>"u"||e===null}function Nk(e){return typeof e=="object"&&e!==null}function Fk(e){return Array.isArray(e)?e:Bf(e)?[]:[e]}function Dk(e,t){var n,o,i,l;if(t)for(l=Object.keys(t),n=0,o=l.length;n<o;n+=1)i=l[n],e[i]=t[i];return e}function jk(e,t){var n="",o;for(o=0;o<t;o+=1)n+=e;return n}function Vk(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Bk=Bf,qk=Nk,Uk=Fk,Jk=jk,Yk=Vk,Qk=Dk,Cr={isNothing:Bk,isObject:qk,toArray:Uk,repeat:Jk,isNegativeZero:Yk,extend:Qk};function qf(e,t){var n="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),o+" "+n):o}function Mi(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=qf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Mi.prototype=Object.create(Error.prototype);Mi.prototype.constructor=Mi;Mi.prototype.toString=function(t){return this.name+": "+qf(this,t)};var oo=Mi,Zk=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Gk=["scalar","sequence","mapping"];function Xk(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(o){t[String(o)]=n})}),t}function e$(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(Zk.indexOf(n)===-1)throw new oo('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Xk(t.styleAliases||null),Gk.indexOf(this.kind)===-1)throw new oo('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var lt=e$;function Lu(e,t){var n=[];return e[t].forEach(function(o){var i=n.length;n.forEach(function(l,a){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(i=a)}),n[i]=o}),n}function t$(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function o(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(o);return e}function Wa(e){return this.extend(e)}Wa.prototype.extend=function(t){var n=[],o=[];if(t instanceof lt)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new oo("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(l){if(!(l instanceof lt))throw new oo("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new oo("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new oo("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof lt))throw new oo("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Wa.prototype);return i.implicit=(this.implicit||[]).concat(n),i.explicit=(this.explicit||[]).concat(o),i.compiledImplicit=Lu(i,"implicit"),i.compiledExplicit=Lu(i,"explicit"),i.compiledTypeMap=t$(i.compiledImplicit,i.compiledExplicit),i};var n$=Wa,o$=new lt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),i$=new lt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),s$=new lt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),l$=new n$({explicit:[o$,i$,s$]});function a$(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function r$(){return null}function c$(e){return e===null}var u$=new lt("tag:yaml.org,2002:null",{kind:"scalar",resolve:a$,construct:r$,predicate:c$,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function d$(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function p$(e){return e==="true"||e==="True"||e==="TRUE"}function f$(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var m$=new lt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:d$,construct:p$,predicate:f$,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function h$(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function v$(e){return 48<=e&&e<=55}function _$(e){return 48<=e&&e<=57}function g$(e){if(e===null)return!1;var t=e.length,n=0,o=!1,i;if(!t)return!1;if(i=e[n],(i==="-"||i==="+")&&(i=e[++n]),i==="0"){if(n+1===t)return!0;if(i=e[++n],i==="b"){for(n++;n<t;n++)if(i=e[n],i!=="_"){if(i!=="0"&&i!=="1")return!1;o=!0}return o&&i!=="_"}if(i==="x"){for(n++;n<t;n++)if(i=e[n],i!=="_"){if(!h$(e.charCodeAt(n)))return!1;o=!0}return o&&i!=="_"}if(i==="o"){for(n++;n<t;n++)if(i=e[n],i!=="_"){if(!v$(e.charCodeAt(n)))return!1;o=!0}return o&&i!=="_"}}if(i==="_")return!1;for(;n<t;n++)if(i=e[n],i!=="_"){if(!_$(e.charCodeAt(n)))return!1;o=!0}return!(!o||i==="_")}function b$(e){var t=e,n=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(n=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function y$(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Cr.isNegativeZero(e)}var w$=new lt("tag:yaml.org,2002:int",{kind:"scalar",resolve:g$,construct:b$,predicate:y$,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),S$=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function x$(e){return!(e===null||!S$.test(e)||e[e.length-1]==="_")}function k$(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var $$=/^[-+]?[0-9]+e/;function I$(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Cr.isNegativeZero(e))return"-0.0";return n=e.toString(10),$$.test(n)?n.replace("e",".e"):n}function O$(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Cr.isNegativeZero(e))}var z$=new lt("tag:yaml.org,2002:float",{kind:"scalar",resolve:x$,construct:k$,predicate:O$,represent:I$,defaultStyle:"lowercase"}),E$=l$.extend({implicit:[u$,m$,w$,z$]}),T$=E$,Uf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Jf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function C$(e){return e===null?!1:Uf.exec(e)!==null||Jf.exec(e)!==null}function A$(e){var t,n,o,i,l,a,r,c=0,u=null,d,f,m;if(t=Uf.exec(e),t===null&&(t=Jf.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],o=+t[2]-1,i=+t[3],!t[4])return new Date(Date.UTC(n,o,i));if(l=+t[4],a=+t[5],r=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=+t[10],f=+(t[11]||0),u=(d*60+f)*6e4,t[9]==="-"&&(u=-u)),m=new Date(Date.UTC(n,o,i,l,a,r,c)),u&&m.setTime(m.getTime()-u),m}function M$(e){return e.toISOString()}var P$=new lt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:C$,construct:A$,instanceOf:Date,represent:M$});function K$(e){return e==="<<"||e===null}var L$=new lt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:K$}),Ar=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function R$(e){if(e===null)return!1;var t,n,o=0,i=e.length,l=Ar;for(n=0;n<i;n++)if(t=l.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function W$(e){var t,n,o=e.replace(/[\r\n=]/g,""),i=o.length,l=Ar,a=0,r=[];for(t=0;t<i;t++)t%4===0&&t&&(r.push(a>>16&255),r.push(a>>8&255),r.push(a&255)),a=a<<6|l.indexOf(o.charAt(t));return n=i%4*6,n===0?(r.push(a>>16&255),r.push(a>>8&255),r.push(a&255)):n===18?(r.push(a>>10&255),r.push(a>>2&255)):n===12&&r.push(a>>4&255),new Uint8Array(r)}function H$(e){var t="",n=0,o,i,l=e.length,a=Ar;for(o=0;o<l;o++)o%3===0&&o&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+e[o];return i=l%3,i===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):i===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):i===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function N$(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var F$=new lt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:R$,construct:W$,predicate:N$,represent:H$}),D$=Object.prototype.hasOwnProperty,j$=Object.prototype.toString;function V$(e){if(e===null)return!0;var t=[],n,o,i,l,a,r=e;for(n=0,o=r.length;n<o;n+=1){if(i=r[n],a=!1,j$.call(i)!=="[object Object]")return!1;for(l in i)if(D$.call(i,l))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function B$(e){return e!==null?e:[]}var q$=new lt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:V$,construct:B$}),U$=Object.prototype.toString;function J$(e){if(e===null)return!0;var t,n,o,i,l,a=e;for(l=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(o=a[t],U$.call(o)!=="[object Object]"||(i=Object.keys(o),i.length!==1))return!1;l[t]=[i[0],o[i[0]]]}return!0}function Y$(e){if(e===null)return[];var t,n,o,i,l,a=e;for(l=new Array(a.length),t=0,n=a.length;t<n;t+=1)o=a[t],i=Object.keys(o),l[t]=[i[0],o[i[0]]];return l}var Q$=new lt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:J$,construct:Y$}),Z$=Object.prototype.hasOwnProperty;function G$(e){if(e===null)return!0;var t,n=e;for(t in n)if(Z$.call(n,t)&&n[t]!==null)return!1;return!0}function X$(e){return e!==null?e:{}}var e2=new lt("tag:yaml.org,2002:set",{kind:"mapping",resolve:G$,construct:X$});T$.extend({implicit:[P$,L$],explicit:[F$,q$,Q$,e2]});function Ru(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var t2=new Array(256),n2=new Array(256);for(var Oo=0;Oo<256;Oo++)t2[Oo]=Ru(Oo)?1:0,n2[Oo]=Ru(Oo);function o2(e){return Array.from(new Set(e))}function Wu(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const i=[];let l=t;for(;l<n;)i.push(l),l+=o||1;return i}function Yf(e,t){if(!t||t==="all"||t==="*")return Wu(1,e+1);const n=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))n.push(+o);else{const[i,l]=o.split("-",2);n.push(...Wu(+i,l?+l+1:e+1))}return o2(n).filter(o=>o<=e).sort((o,i)=>o-i)}function Qf(e){const t=R(()=>e.value.path),n=R(()=>Ye.length-1),o=R(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),i=R(()=>pl(o.value)),l=R(()=>Ye.find(m=>m.path===`${o.value}`)),a=R(()=>{var m,h,v;return(v=(h=(m=l.value)==null?void 0:m.meta)==null?void 0:h.slide)==null?void 0:v.id}),r=R(()=>{var m,h;return((h=(m=l.value)==null?void 0:m.meta)==null?void 0:h.layout)||(o.value===1?"cover":"default")}),c=R(()=>Ye.find(m=>m.path===`${Math.min(Ye.length,o.value+1)}`)),u=R(()=>Ye.filter(m=>{var h,v;return(v=(h=m.meta)==null?void 0:h.slide)==null?void 0:v.title}).reduce((m,h)=>(Pr(m,h),m),[])),d=R(()=>Kr(u.value,l.value)),f=R(()=>Lr(d.value));return{route:e,path:t,total:n,currentPage:o,currentPath:i,currentRoute:l,currentSlideId:a,currentLayout:r,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:f,downloadPDF:Na,next:Kn,nextSlide:Pi,openInEditor:tL,prev:Ln,prevSlide:Ki}}function Zf(e,t,n){const o=Q(0);it(()=>{yt.afterEach(async()=>{await it(),o.value+=1})});const i=R(()=>{var c,u;return o.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),l=R(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??i.value.length)}),a=R(()=>n.value<Ye.length-1||e.value<l.value),r=R(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:i,clicksTotal:l,hasNext:a,hasPrev:r}}const i2=["id"],s2=Ae({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,o=Kt(n,"clicksElements",t),i=R(()=>({height:`${wr}px`,width:`${An}px`})),l=sn();Mn(()=>Promise.resolve().then(()=>kw),void 0).then(u=>l.value=u.default);const a=R(()=>n.clicks),r=Zf(a,n.nav.currentRoute,n.nav.currentPage),c=R(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return It(C,je({nav:{...n.nav,...r},configs:ze,themeConfigs:R(()=>ze.themeConfig)})),(u,d)=>{var f;return y(),ie("div",{id:c.value,class:"print-slide-container",style:tt(i.value)},[G(M(jf)),G(M(Er),{is:(f=u.route)==null?void 0:f.component,"clicks-elements":M(o),"onUpdate:clicksElements":d[0]||(d[0]=m=>Te(o)?o.value=m:null),clicks:a.value,"clicks-disabled":!1,class:Be(M(zr)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),l.value?(y(),z(M(l),{key:0,page:+u.route.path},null,8,["page"])):ye("v-if",!0),G(M(Df))],12,i2)}}}),Hu=A(s2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),l2=Ae({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var l;const t=e;$(C);const n=Q(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),o=R(()=>t.route),i=Qf(o);return(a,r)=>(y(),ie(Ee,null,[G(Hu,{"clicks-elements":n.value,"onUpdate:clicksElements":r[0]||(r[0]=c=>n.value=c),clicks:0,nav:M(i),route:o.value},null,8,["clicks-elements","nav","route"]),M(_i)?ye("v-if",!0):(y(!0),ie(Ee,{key:0},Ho(n.value.length,c=>(y(),z(Hu,{key:c,clicks:c,nav:M(i),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),a2=A(l2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),r2={id:"print-content"},c2=Ae({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;$(C);const n=R(()=>t.width),o=R(()=>t.width/Cn),i=R(()=>n.value/o.value),l=R(()=>i.value<Cn?n.value/An:o.value*Cn/An);let a=Ye.slice(0,-1);Wt.value.query.range&&(a=Yf(a.length,Wt.value.query.range).map(u=>a[u-1]));const r=R(()=>({"select-none":!ze.selectable,"slidev-code-line-numbers":ze.lineNumbers}));return It(jp,l),(c,u)=>(y(),ie("div",{id:"print-container",class:Be(r.value)},[s("div",r2,[(y(!0),ie(Ee,null,Ho(M(a),d=>(y(),z(a2,{key:d.path,route:d},null,8,["route"]))),128))]),qt(c.$slots,"controls")],2))}});const u2=A(c2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),d2=Ae({__name:"Print",setup(e){return $(C),yo(()=>{Ro?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(y(),ie(Ee,null,[M(Ro)?(y(),z(Vf,{key:0})):ye("v-if",!0),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tt(M(Sr))},[G(u2,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:M(ho).width.value},null,8,["style","width"])],4)],64))}});const p2=A(d2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const f2={class:"slidev-layout end"},m2={__name:"end",setup(e){return $(C),(t,n)=>(y(),ie("div",f2,[qt(t.$slots,"default",{},()=>[p("END")],!0)]))}},h2=A(m2,[["__scopeId","data-v-e532b98d"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function Nu(e){return e.startsWith("/")?"/TPSI/4/svelte/"+e.slice(1):e}function v2(e,t=!1){const n=e&&["#","rgb","hsl"].some(i=>e.indexOf(i)===0),o={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Nu(e)})`:`url("${Nu(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const _2={class:"my-auto w-full"},g2=Ae({__name:"cover",props:{background:{default:""}},setup(e){const t=e;$(C);const n=R(()=>v2(t.background,!0));return(o,i)=>(y(),ie("div",{class:"slidev-layout cover",style:tt(n.value)},[s("div",_2,[qt(o.$slots,"default")])],4))}}),b2=A(g2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),y2=s("h1",null,"Svelte e SvelteKit",-1),w2=s("p",null,"CYBERNETICALLY ENHANCED WEB APPS",-1),S2={class:"pt-12"},x2={class:"px-2 py-1"},k2={__name:"1",setup(e){const t={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",as:"2023/2024",version:"1.1.2"};return $(C),(n,o)=>{const i=Ff;return y(),z(b2,N(H(t)),{default:I(()=>[ye(` https://reteinformaticalavoro.it/blog/framework-cosa-sono-e-quali-dominano-le-classifiche/#:~:text=In%20informatica%2C%20un%20framework%20%C3%A8,in%20modo%20semplice%20e%20veloce.

https://www.okupter.com/blog/svelte-vs-sveltekit-the-difference

https://www.okupter.com/blog/sveltekit-full-stack-framework `),y2,w2,s("div",S2,[s("span",x2,[p(" Premi spazio o "),G(i,{class:"inline"}),p(" per la prossima slide ")])])]),_:1},16)}}},$2=A(k2,[["__file","/@slidev/slides/1.md"]]),I2={class:"slidev-layout default"},O2={__name:"default",setup(e){return $(C),(t,n)=>(y(),ie("div",I2,[qt(t.$slots,"default")]))}},F=A(O2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),z2=s("h1",null,"Introduzione",-1),E2=s("p",null,"Vanilla Software",-1),T2=s("ul",null,[s("li",null,[p("Un software "),s("code",null,"Vanilla"),p(" è un programma per computer (e per altri sistemi informatici come hardware o algoritmi) che non viene alterato rispetto alla propria forma originale.")]),s("li",null,"Il termine deriva dal tradizionale gusto di gelato, la vaniglia."),s("li",null,[p("In altre parole con il termine "),s("strong",null,"Vanilla"),p(" si intende un linguaggio, un kernel, un programma non modificato ma utilizzato nella sua forma base")]),s("li",null,"Ciò si applica anche ai linguaggi di programmazione")],-1),C2={__name:"2",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[z2,E2,T2]),_:1},16))}},A2=A(C2,[["__file","/@slidev/slides/2.md"]]),M2="/TPSI/4/svelte/assets/svelte_000-21a7ddac.png",P2=s("h1",null,"Introduzione",-1),K2=s("p",null,"Vanilla Software",-1),L2=s("div",{style:{float:"left",width:"50%"}},[s("ul",null,[s("li",null,"Vanilla JavaScript (o VanillaJS) si riferisce all’uso di JavaScript puro, senza alcun componente aggiuntivo come librerie o framework."),s("li",null,"È una specie di battuta tra informatici per indicare le potenzialità attuali del puro e semplice JavaScript."),s("li",null,"Agli albori del Web era normale programmare in vanillaJS")])],-1),R2=s("img",{src:M2,class:"mx-auto",width:"400"},null,-1),W2={__name:"3",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[P2,K2,L2,R2]),_:1},16))}},H2=A(W2,[["__file","/@slidev/slides/3.md"]]),N2="/TPSI/4/svelte/assets/svelte_001-e8d6b419.png",F2=s("h1",null,"Introduzione",-1),D2=s("p",null,"Librerie JS",-1),j2=s("ul",null,[s("li",null,"Una libreria NON è un’unità eseguibile indipendentemente, ma un modulo aggiuntivo richiesto da un programma."),s("li",null,"In altre parole, le librerie sono raccolte di classi e funzioni, motivo per cui a volte vengono anche chiamate librerie di componenti o di classi."),s("li",null,"Il programma principale utilizza una o più funzioni, messe a disposizione dalla libreria.")],-1),V2=s("img",{src:N2,class:"mx-auto",style:{"margin-top":"2rem"},width:"500"},null,-1),B2={__name:"4",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[F2,D2,j2,V2]),_:1},16))}},q2=A(B2,[["__file","/@slidev/slides/4.md"]]),U2=s("h1",null,"Introduzione",-1),J2=s("p",null,"Librerie JS",-1),Y2=s("ul",null,[s("li",null,"Una libreria JavaScript è una libreria di codice JavaScript pre-scritto che consente uno sviluppo più semplice di applicazioni basate su JavaScript"),s("li",null,"Ci sono centinaia di librerie JS per qualsiasi funzionalità possa venire in mente allo sviluppatore"),s("li",null,[p("Una delle più note librerie che ha dominato il web per molti anni si chiama "),s("code",null,"jQuery")]),s("li",null,[s("strong",null,"jQuery"),p(" è una libreria JavaScript veloce, piccola e ricca di funzionalità.")]),s("li",null,"Rende funzionalità complesse come l’attraversamento e la manipolazione di documenti HTML, la gestione degli eventi, l’animazione e Ajax molto più semplici che in vanillaJS"),s("li",null,"Con una combinazione di versatilità ed estensibilità, jQuery ha cambiato il modo in cui milioni di persone scrivono JavaScript.")],-1),Q2={__name:"5",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[U2,J2,Y2]),_:1},16))}},Z2=A(Q2,[["__file","/@slidev/slides/5.md"]]),G2=s("h1",null,"Introduzione",-1),X2=s("p",null,"Framework JS",-1),eI=s("ul",null,[s("li",null,"Man mano che l’importanza dello sviluppo Web cresceva, e con essa l’importanza di JS, l’uso di VanillaJS o di semplici librerie non era più sufficiente"),s("li",null,[p("Pertanto hanno iniziato a proliferare una moltitudine di "),s("code",null,"Framework JS"),p(" che offrono paradigmi differenti e adatti a risolvere la maggioranza delle problematiche dello sviluppo web")])],-1),tI=s("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px",margin:"10px"}},[s("p",null,[p("In informatica, "),s("strong",null,"un framework"),p(" è un sistema che consente di estendere le funzionalità del linguaggio di programmazione su cui è basato, fornendo allo sviluppatore una struttura coerente ed efficace al fine di effettuare azioni e comandi in modo semplice e veloce")])],-1),nI=s("ul",null,[s("li",null,[s("strong",null,"Un framework"),p(' è un tipo speciale di libreria che non contiene funzioni "finite" come una normale libreria.')]),s("li",null,"In sostanza, si può definire un framework come un insieme di funzioni e tool già “pronti all’uso”, ovvero che si possono utilizzare senza doverli progettare da zero ogni volta.")],-1),oI={__name:"6",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[G2,X2,eI,tI,nI]),_:1},16))}},iI=A(oI,[["__file","/@slidev/slides/6.md"]]),sI=s("h1",null,"Introduzione",-1),lI=s("p",null,"Framework JS",-1),aI=s("ul",null,[s("li",null,"I framework sono piuttosto impalcature/scheletri/template di programmi che forniscono il progetto, le linee guida e l’organizzazione del codice ma non l’unità finita."),s("li",null,"Il framework, quindi, fornisce il progetto e il framework di base e mostra anche ciò che è ancora necessario al programmatore in termini di personalizzazione."),s("li",null,"Il framework fornisce il flusso di un’applicazione software e comunica allo sviluppatore ciò di cui ha bisogno e chiama il codice fornito dallo sviluppatore come richiesto")],-1),rI={__name:"7",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[sI,lI,aI]),_:1},16))}},cI=A(rI,[["__file","/@slidev/slides/7.md"]]),uI="/TPSI/4/svelte/assets/svelte_004-24e4fca1.png",dI=s("h1",null,"Introduzione",-1),pI=s("p",null,"Framework JS",-1),fI=s("img",{src:uI,class:"mx-auto",style:{"margin-top":"0rem"},width:"800"},null,-1),mI={__name:"8",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[dI,pI,fI]),_:1},16))}},hI=A(mI,[["__file","/@slidev/slides/8.md"]]),vI="/TPSI/4/svelte/assets/svelte_002-3d42938e.png",_I=s("h1",null,"Introduzione",-1),gI=s("p",null,"Framework JS",-1),bI=s("ul",null,[s("li",null,[p("I principali "),s("a",{href:"https://en.wikipedia.org/wiki/Software_framework",target:"_blank",rel:"noopener"},"framework"),p(" degli ultimi anni sono")])],-1),yI=s("img",{src:vI,class:"mx-auto",style:{"margin-top":"0rem"},width:"600"},null,-1),wI={__name:"9",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[_I,gI,bI,yI]),_:1},16))}},SI=A(wI,[["__file","/@slidev/slides/9.md"]]),xI=s("h1",null,"Introduzione",-1),kI=s("p",null,"Framework JS",-1),$I=s("ul",null,[s("li",null,"L’uso di un frameowrk non è indispensabile: si tratta più che altro di uno dei tanti strumenti che lo sviluppatore ha a sua disposizione per programmare meglio e più velocemente."),s("li",null,"Proprio per queste sue caratteristiche, sono diventati sempre più fondamentali per lo sviluppo di siti web e app."),s("li",null,[p("I framework consentono di: "),s("ul",null,[s("li",null,"ottimizzare tempi, costi e benefici;"),s("li",null,"evitare al programmatore di riscrivere codice già scritto in precedenza per compiti simili;"),s("li",null,"organizzare e trovare rapidamente i file necessari;"),s("li",null,"concentrarsi sul problema da risolvere, senza dover implementare funzionalità che qualcun altro ha già provveduto a creare.")])])],-1),II={__name:"10",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[xI,kI,$I]),_:1},16))}},OI=A(II,[["__file","/@slidev/slides/10.md"]]),zI=s("h1",null,"Web Components",-1),EI=s("p",null,"OOP per il Web",-1),TI=s("ul",null,[s("li",null,[p("Lo sviluppo Web moderno è incentrato sul concetto di "),s("code",null,"componente")])],-1),CI=s("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px",margin:"10px"}},[s("p",null,[s("em",null,"Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps."),p(" (source MDN)")])],-1),AI=s("ul",null,[s("li",null,"Un componente è un elemento atomico e auto sufficiente, di un’applicazione Web."),s("li",null,'In altre parole un componente è un "mattoncino", ben definito, che viene utilizzato all’interno di un’applicazione più ampia'),s("li",null,"Da ciò ne consegue che una moderna applicazione web è composta da uno o più componenti indipendenti che interagiscono tra loro per fornire il layout e la funzionalità desiderata")],-1),MI={__name:"11",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[zI,EI,TI,CI,AI]),_:1},16))}},PI=A(MI,[["__file","/@slidev/slides/11.md"]]),KI="/TPSI/4/svelte/assets/svelte_03-b6c35794.png",LI=s("h1",null,"Web Components",-1),RI=s("p",null,"OOP per il Web",-1),WI=s("ul",null,[s("li",null,"Un elemento di input può essere un componente."),s("li",null,"Un form può essere un componente."),s("li",null,"Una pagina intera può essere è un componente.")],-1),HI=s("img",{src:KI,style:{position:"relative",left:"450px",top:"-150px"},width:"500"},null,-1),NI={__name:"12",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[LI,RI,WI,HI]),_:1},16))}},FI=A(NI,[["__file","/@slidev/slides/12.md"]]),DI="/TPSI/4/svelte/assets/svelte_006-2096526e.png",jI=s("h1",null,"Web Components",-1),VI=s("p",null,"OOP per il Web",-1),BI=s("img",{src:DI,class:"mx-auto",width:"600"},null,-1),qI={__name:"13",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[jI,VI,BI]),_:1},16))}},UI=A(qI,[["__file","/@slidev/slides/13.md"]]),JI=s("h1",null,"SvelteKit",-1),YI=s("p",null,"Svelte ~ SvelteKit",-1),QI=s("ul",null,[s("li",null,[p("Svelte è un framework "),s("strong",null,"che propone un approccio radicalmente nuovo alla creazione di applicazioni Web"),p(".")]),s("li",null,"Svelte è un modo per scrivere componenti dell’interfaccia utente, come una barra di navigazione, una sezione dei commenti o un modulo di contatto"),s("li",null,"Se hai già esperienza con React, Vue, Angular o altri framework frontend rimarrai piacevolmente sorpreso da Svelte."),s("li",null,"Lavorando con Svelte tutto sembra molto più simile al JavaScript-vanilla rispetto che a lavorare con altri framework."),s("li",null,"In generale la maggior parte delle cose che sono complicate con altri framework sono molto semplici e leggeri con Svelte.")],-1),ZI=s("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px"}},[p(" Svelte è stato recentemente votato come il "),s("h2",null,"framework web più amato dagli sviluppatori")],-1),GI=s("p",null,[s("a",{href:"https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks",target:"_blank",rel:"noopener"},"https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks")],-1),XI={__name:"14",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[JI,YI,QI,ZI,GI]),_:1},16))}},eO=A(XI,[["__file","/@slidev/slides/14.md"]]),tO="/TPSI/4/svelte/assets/svelte_00-c251d652.png",nO=s("h1",null,"SvelteKit",-1),oO=s("p",null,"Introduzione",-1),iO=s("img",{src:tO,class:"mx-auto",width:"750"},null,-1),sO={__name:"15",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[nO,oO,iO]),_:1},16))}},lO=A(sO,[["__file","/@slidev/slides/15.md"]]),aO=s("h1",null,"SvelteKit",-1),rO=s("p",null,"Svelte vs Others",-1),cO=s("ul",null,[s("li",null,"Mentre i framework tradizionali come React e Vue fanno la maggior parte del loro lavoro nel browser, Svelte sposta il lavoro in una fase di compilazione che si verifica quando crei la tua app, in modo da non dover far scaricare l’intero framework a tutti i tuoi visitatori del sito."),s("li",null,"Di conseguenza, la fruizione dell’esperienza è più fluida, consuma meno larghezza di banda e tutto risulta più veloce e leggero."),s("li",null,"Al momento della distribuzione, Svelte scompare e tutto ciò che ottieni è puro JavaScript Vanilla (molto veloce!)."),s("li",null,[p("In altre parole "),s("code",null,"Svelte è un compilatore"),p(" che trasforma il codice della tua applicazione Web in puro JavaScript, raggiungendo così massime prestazioni")])],-1),uO={__name:"16",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[aO,rO,cO]),_:1},16))}},dO=A(uO,[["__file","/@slidev/slides/16.md"]]),pO=s("h1",null,"SvelteKit",-1),fO=s("p",null,"Svelte vs Others",-1),mO=s("ul",null,[s("li",null,[p("Molti framework Web utilizzano il concetto di "),s("code",null,"Virtual DOM")]),s("li",null,[p("Il Virtual DOM "),s("code",null,"VDOM"),p(" è una rappresentazione ideale della UI di una pagina che è mantenuta in memoria")]),s("li",null,"Il VDOM è sincronizzato periodicamente con il DOM reale da una libreria (Reacts, Vue, Angular)"),s("li",null,[p("Svelte, in modo innovativo, anzichè utilizzare la tecnica del "),s("code",null,"virtual DOM diffing"),p(", genera codice JS che aggiorna direttamente il DOM quando cambia lo stato della tua app.")])],-1),hO=s("br",null,null,-1),vO=s("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px"}}," La principale differenza tra Svelte e gli altri framework Web è che Svelte è un compilatore che converte la tua applicazione Web in JavaScript-vanilla durante la fase di build. Al contrario gli altri framework usano un virtual DOM interpretato dall'applicazione Web durante il runtime sul browser. ",-1),_O={__name:"17",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[pO,fO,mO,hO,vO]),_:1},16))}},gO=A(_O,[["__file","/@slidev/slides/17.md"]]),bO=s("h1",null,"SvelteKit",-1),yO=s("p",null,"Svelte vs Others",-1),wO=s("ul",null,[s("li",null,[p("React utilizza un concetto noto come Virtual DOM (VDOM), in cui una rappresentazione virtuale dell’interfaccia utente viene mantenuta in memoria e sincronizzata con il DOM reale attraverso un processo chiamato "),s("strong",null,"riconciliazione"),p(".")]),s("li",null,"Il processo di riconciliazione troverà la differenza (diffing) tra il Virtual DOM (un oggetto in memoria, dove inviamo gli ultimi aggiornamenti all’interfaccia utente) e il vero DOM (DOM che contiene l’interfaccia utente precedentemente renderizzata)."),s("li",null,"Utilizzando specifici algoritmi, il framework decide come aggiornare l’interfaccia utente."),s("li",null,"Ovviamente questo processo, non è efficiente e veloce"),s("li",null,"Per raggiungere questo obiettivo, React introduce un overhead (la libreria), che verrà eseguito nel motore JS del browser per monitorare e aggiornare il DOM in base alle varie interazioni dell’utente.")],-1),SO={__name:"18",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[bO,yO,wO]),_:1},16))}},xO=A(SO,[["__file","/@slidev/slides/18.md"]]),kO="/TPSI/4/svelte/assets/svelte_01-09f90fce.png",$O=s("h1",null,"SvelteKit",-1),IO=s("p",null,"Svelte vs Others",-1),OO=s("img",{src:kO,class:"mx-auto w-160"},null,-1),zO={__name:"19",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[$O,IO,OO]),_:1},16))}},EO=A(zO,[["__file","/@slidev/slides/19.md"]]),TO="/TPSI/4/svelte/assets/svelte_003-ae5236bd.png",CO=s("h1",null,"SvelteKit",-1),AO=s("p",null,"Svelte vs Others",-1),MO=s("ul",null,[s("li",null,"Svelte è solamente un compilatore, che converte la tua applicazione in codice JavaScript durante la fase di sviluppo e build."),s("li",null,"Ciò significa che non inietterà alcun codice aggiuntivo (no librerie aggiuntive) da eseguire nel browser quando l’applicazione è in esecuzione per aggiornare il DOM."),s("li",null,"Questo approccio è generalmente più veloce dell’approccio basato su Virtual DOM.")],-1),PO=s("img",{src:TO,class:"mx-auto",width:"480",style:{"margin-top":"20px"}},null,-1),KO={__name:"20",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[CO,AO,MO,PO]),_:1},16))}},LO=A(KO,[["__file","/@slidev/slides/20.md"]]),RO=s("h1",null,"SvelteKit",-1),WO=s("p",null,"Svelte vs Others",-1),HO=s("p",null,[s("strong",null,"PRO")],-1),NO=s("ul",null,[s("li",null,"Tempo di compilazione velocissimo rispetto a React o altri framework e dimensione del pacchetto generato è più piccola rispetto a React"),s("li",null,"Tempi di caricamento e rendering della Web app più veloci rispetto a React o altri framework."),s("li",null,"Più facile da capire rispetto a altri framework poiché Svelte è semplice JavaScript, HTML e CSS."),s("li",null,"Permette di scrivere meno codice rispetto ad altri framework"),s("li",null,[p("Nativamente "),s("strong",null,"reactive"),p(" e perfettamente adatto alle moderne Web app")])],-1),FO=s("p",null,[s("strong",null,"CONTRO")],-1),DO=s("ul",null,[s("li",null,"Svelte è un framework ancora nuovo e giovane con un supporto limitato da parte della community, quindi non ha il supporto per un’ampia gamma di plugin e integrazioni come per esempio React"),s("li",null,"Alcuni sviluppatori potrebbero non preferire l’uso di sintassi speciali come #if e #each all’interno dei loro modelli e preferirebbero invece utilizzare JavaScript puro, come consentito da React.")],-1),jO={__name:"21",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[RO,WO,HO,NO,FO,DO]),_:1},16))}},VO=A(jO,[["__file","/@slidev/slides/21.md"]]),BO=s("h1",null,"SvelteKit",-1),qO=s("p",null,"Fullstack Framework",-1),UO=s("ul",null,[s("li",null,[s("code",null,"SvelteKit"),p(" è un framework per lo sviluppo rapido di applicazioni Web robuste e performanti che utilizza Svelte.")]),s("li",null,"Se provieni da React, SvelteKit è simile a Next. Se vieni da Vue, SvelteKit è simile a Nuxt"),s("li",null,"Sveltekit è il framework che permette agli sviluppatori di creare e gestire la user experience della loro applicazione."),s("li",null,"Fornisce un ambiente unificato per lavorare con componenti, dati, routing, back-end, front-end e altro ancora."),s("li",null,[p("SvelteKit e Svelte sono "),s("strong",null,"totalmente allineati"),p(" al paradigma e modello di sviluppo per componenti caratteristico del web moderno.")])],-1),JO={__name:"22",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[BO,qO,UO]),_:1},16))}},YO=A(JO,[["__file","/@slidev/slides/22.md"]]),QO=s("h1",null,"SvelteKit",-1),ZO=s("p",null,"Fullstack Framework",-1),GO=s("ul",null,[s("li",null,[p("SvelteKit è un framework per app che risolve i difficili molti problemi comunini ad applicazioni pronte per la produzione: "),s("ul",null,[s("li",null,"Routing (navigazione tra le pagine)"),s("li",null,"Server-side rendering (supporto al back-end)"),s("li",null,"Data fetching ()"),s("li",null,"Service workers"),s("li",null,"Supporto TypeScript (la versione di JavaScript con steroidi)"),s("li",null,"Prerendering (per applicazioni statiche. vedi blog profmancusoa)"),s("li",null,"Single-page apps (SPA: approccio moderno che sostituisce lo sviluppo desktop)"),s("li",null,"Supporto per diversi hosting providers molto comuni su Internet (vercel, netlify, …)")])])],-1),XO={__name:"23",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[QO,ZO,GO]),_:1},16))}},ez=A(XO,[["__file","/@slidev/slides/23.md"]]),tz=s("h1",null,"SvelteKit",-1),nz=s("p",null,"Svelte vs SvelteKit",-1),oz=s("p",null,[s("strong",null,"SVELTE")],-1),iz=s("ul",null,[s("li",null,"Un linguaggio di programmazione che si basa su HTML, CSS e JS"),s("li",null,[p("Svelte permette la creazione di "),s("strong",null,"componenti"),p(" web.")]),s("li",null,[p("Un componente è un blocco di codice autonomo riutilizzabile che incapsula HTML, CSS e JavaScript scritti in un file "),s("strong",null,".svelte"),p(".")])],-1),sz=s("p",null,[s("strong",null,"SVELTE KIT")],-1),lz=s("ul",null,[s("li",null,"Sveltekit è il framework, basato su Svelte, che permette agli sviluppatori di creare e gestire applicazioni full stack che combinano insieme componenti Svelte."),s("li",null,"Fornisce un ambiente unificato per lavorare con componenti, dati, routing e altro ancora."),s("li",null,[p("Sveltekit è un "),s("code",null,"full stack framework"),p(" ricco di funzionalità e permette lo sviluppo di un applicazione web completa di back-end e front-end")])],-1),az={__name:"24",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[tz,nz,oz,iz,sz,lz]),_:1},16))}},rz=A(az,[["__file","/@slidev/slides/24.md"]]),cz="/TPSI/4/svelte/assets/svelte_005-e897ef89.png",uz=s("h1",null,"SvelteKit",-1),dz=s("p",null,"Web App Architecture",-1),pz=s("img",{src:cz,class:"mx-auto",width:"900"},null,-1),fz={__name:"25",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[uz,dz,pz]),_:1},16))}},mz=A(fz,[["__file","/@slidev/slides/25.md"]]),hz=s("h1",null,"SvelteKit",-1),vz=s("p",null,"Svelte Components",-1),_z=s("ul",null,[s("li",null,"Un componente web è assimilabile al concetto di Oggetto nella programmazione OOP"),s("li",null,"Come un oggetto incapusala dati e metodi, un componente Web incapsula tutto ciò che è necessario per eseguire il rendering della sua interfaccia utente e per gestire la sua logica di funzionamento."),s("li",null,[p("Ogni componente Svelte è dichiarato in un file "),s("code",null,".svelte"),p(", che contiene: "),s("ul",null,[s("li",null,"il contenuto (markup) in HTML"),s("li",null,"la presentazione o stile (CSS)"),s("li",null,"il comportamento (JavaScript)")])])],-1),gz=s("br",null,null,-1),bz=s("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"25px"}}," Questo raggruppamento (senza un ordine particolare) permette un modo efficiente di definire una parte dell'interfaccia utente perché non è necessario cercare gli elementi che influiscono sullo stesso elemento in vari file. ",-1),yz={__name:"26",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[hz,vz,_z,gz,bz]),_:1},16))}},wz=A(yz,[["__file","/@slidev/slides/26.md"]]),Sz="/TPSI/4/svelte/assets/svelte_007-e6e59c17.png",xz=s("h1",null,"SvelteKit",-1),kz=s("p",null,"Svelte Components",-1),$z=s("ul",null,[s("li",null,"Ecco la struttura di un componente Svelte")],-1),Iz=s("br",null,null,-1),Oz=s("img",{src:Sz,class:"mx-auto",width:"700"},null,-1),zz={__name:"27",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[xz,kz,$z,Iz,Oz]),_:1},16))}},Ez=A(zz,[["__file","/@slidev/slides/27.md"]]),Tz="/TPSI/4/svelte/assets/svelte_008-4c504ad0.png",Cz=s("h1",null,"SvelteKit",-1),Az=s("p",null,"Esempio di componente Svelte",-1),Mz=s("img",{src:Tz,class:"mx-auto",width:"350"},null,-1),Pz={__name:"28",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[Cz,Az,Mz]),_:1},16))}},Kz=A(Pz,[["__file","/@slidev/slides/28.md"]]),Lz="/TPSI/4/svelte/assets/svelte_04-397495f6.png",Rz=s("h1",null,"SvelteKit",-1),Wz=s("p",null,"Svelte Components",-1),Hz=s("p",null,[s("br"),s("br")],-1),Nz=s("img",{src:Lz,class:"mx-auto"},null,-1),Fz={__name:"29",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[Rz,Wz,Hz,Nz]),_:1},16))}},Dz=A(Fz,[["__file","/@slidev/slides/29.md"]]),jz=s("h1",null,"SvelteKit",-1),Vz=s("p",null,"Svelte Components",-1),Bz=s("ul",null,[s("li",null,"Questo componente, per quanto semplice, contiene tutti gli elementi di un componente web (HTML/CSS/JS)"),s("li",null,[p("Nel tag "),s("code",null,"<script>"),p(" è presente il codice JS di gestione del componente")]),s("li",null,[p("Il markup HTML non è inserito in un tag particolare e pertanto tutto ciò che non è parte del tag "),s("code",null,"<script>"),p(" e "),s("code",null,"<style>"),p(" è cosiderato contenuto del componente.")]),s("li",null,[p("Il tag "),s("code",null,"<style>"),p(" definisce il CSS del componente")])],-1),qz=s("br",null,null,-1),Uz=s("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px"}}," Sia il codice JS e lo stile CSS sono confinati solo all'interno di questo componente e non possono influire o essere influenzati da altri componenti parte dell'applicazione complessiva. ",-1),Jz=s("br",null,null,-1),Yz=s("ul",null,[s("li",null,"Se un altro componente ha un tag h1, lo stile non sarà modificato."),s("li",null,"Questo è molto utile quando riutilizzi componenti che hai già scritto per altre applicazioni o quando includi librerie Open Source pubblicate da altre persone.")],-1),Qz={__name:"30",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[jz,Vz,Bz,qz,Uz,Jz,Yz]),_:1},16))}},Zz=A(Qz,[["__file","/@slidev/slides/30.md"]]),Gz={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Xz=s("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),eE=[Xz];function tE(e,t){return y(),ie("svg",Gz,eE)}const nE={name:"ph-clipboard",render:tE},oE={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},iE=s("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),sE=[iE];function lE(e,t){return y(),ie("svg",oE,sE)}const aE={name:"ph-check-circle",render:lE},rE=["title"],cE=Ae({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;$(C);const n=$(pi),o=$(eo),i=$(fi);function l(f=5){const m=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",v=h.length;for(let w=0;w<f;w++)m.push(h.charAt(Math.floor(Math.random()*v)));return m.join("")}const a=Q(),r=St();bn(()=>{const f=t.at==null?o==null?void 0:o.value.length:t.at,m=R(()=>i!=null&&i.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(f||0)),t.ranges.length-1)),h=R(()=>t.ranges[m.value]||"");if(t.ranges.length>=2&&!(i!=null&&i.value)){const v=l(),w=m1(t.ranges.length-1).map(S=>v+S);o!=null&&o.value&&(o.value.push(...w),ji(()=>w.forEach(S=>ga(o.value,S)),r))}yo(()=>{if(!a.value)return;const w=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const S of w){const x=Array.from(S.querySelectorAll(".line")),k=Yf(x.length,h.value);if(x.forEach((g,T)=>{const O=k.includes(T+1);g.classList.toggle(Qn,!0),g.classList.toggle("highlighted",O),g.classList.toggle("dishonored",!O)}),t.maxHeight){const g=Array.from(S.querySelectorAll(".line.highlighted"));g.reduce((O,P)=>P.offsetHeight+O,0)>a.value.offsetHeight?g[0].scrollIntoView({behavior:"smooth",block:"start"}):g.length>0&&g[Math.round((g.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=m0();function d(){var m,h;const f=(h=(m=a.value)==null?void 0:m.querySelector(".slidev-code"))==null?void 0:h.textContent;f&&u(f)}return(f,m)=>{const h=aE,v=nE;return y(),ie("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:tt({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[qt(f.$slots,"default"),M(ze).codeCopy?(y(),ie("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:M(c)?"Copied":"Copy",onClick:m[0]||(m[0]=w=>d())},[M(c)?(y(),z(h,{key:0,class:"p-2 w-8 h-8"})):(y(),z(v,{key:1,class:"p-2 w-8 h-8"}))],8,rE)):ye("v-if",!0)],4)}}}),Ve=A(cE,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),uE=s("h1",null,"SvelteKit",-1),dE=s("p",null,"Svelte Components",-1),pE=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("h1")]),s("span",{class:"token punctuation"},">")]),p("My name is John Doe!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("h1")]),s("span",{class:"token punctuation"},">")])])])],-1),fE=s("ul",null,[s("li",null,"Questo è un componente Svelte valido"),s("li",null,"Include solo la parte di contenuto"),s("li",null,"Non ha nessuno stuile e nessuna logica di controllo")],-1),mE={__name:"31",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[uE,dE,G(i,Ke({},{ranges:[""]}),{default:I(()=>[pE]),_:1},16),fE]),_:1},16)}}},hE=A(mE,[["__file","/@slidev/slides/31.md"]]),vE=s("h1",null,"SvelteKit",-1),_E=s("p",null,"Svelte Components",-1),gE=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("h1")]),s("span",{class:"token punctuation"},">")]),p("My name is John Doe!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("h1")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("style")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},"	h1 {"),p(`
`),s("span",{class:"line"},"		width: 30%;"),p(`
`),s("span",{class:"line"},"		border: 20px solid green;"),p(`
`),s("span",{class:"line"},"		border-radius: 20px;"),p(`
`),s("span",{class:"line"},"		color: red;"),p(`
`),s("span",{class:"line"},"		text-align: center;"),p(`
`),s("span",{class:"line"},"		margin: 30px auto;"),p(`
`),s("span",{class:"line"},"		padding: 20px;"),p(`
`),s("span",{class:"line"},"	}"),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("style")]),s("span",{class:"token punctuation"},">")])])])],-1),bE=s("ul",null,[s("li",null,"Questo è un componente Svelte valido"),s("li",null,"Include la parte di contenuto e di stile")],-1),yE={__name:"32",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[vE,_E,G(i,Ke({},{ranges:[""]}),{default:I(()=>[gE]),_:1},16),bE]),_:1},16)}}},wE=A(yE,[["__file","/@slidev/slides/32.md"]]),SE=s("h1",null,"SvelteKit",-1),xE=s("p",null,"Svelte Components",-1),kE=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("script")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},"	let name = 'John Doe';"),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("script")]),s("span",{class:"token punctuation"},">")])])])],-1),$E=s("ul",null,[s("li",null,"Questo è un componente Svelte valido."),s("li",null,"Non ha nessuno contenuto e non verrà visualizzato."),s("li",null,"Anche se apparentemente non ha senso, lo ha in quanto posso avere componenti che svolgono solo funzioni utilizzate da altri componenti.")],-1),IE=s("p",null,"Esempio:",-1),OE=s("ul",null,[s("li",null,"un componente che fornisce accesso ad un DB nosql non ha nessuna parte di UI, ma è di grande utilità all’interno della mia applicazione.")],-1),zE={__name:"33",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[SE,xE,G(i,Ke({},{ranges:[""]}),{default:I(()=>[kE]),_:1},16),$E,IE,OE]),_:1},16)}}},EE=A(zE,[["__file","/@slidev/slides/33.md"]]),TE=s("h1",null,"SvelteKit",-1),CE=s("p",null,"Hello World",-1),AE=s("ul",null,[s("li",null,[s("p",null,"Vediamo i semplici passi per creare un progetto base SvelteKit")]),s("li",null,[s("p",null,"Utilizzeremo il progetto base per provare a analizzare e comprendere le principali carattristiche:"),s("ul",null,[s("li",null,"del linguaggio Svelte e delle principali funzionalità"),s("li",null,"dello sviluppo per componenti"),s("li",null,"delle funzioni più importanti di SvelteKit")])]),s("li",null,[s("p",null,"Di seguito i link alla documentazione e tutoria di Svelte e SvelteKit"),s("ul",null,[s("li",null,[s("a",{href:"https://svelte.dev/tutorial/basics",target:"_blank",rel:"noopener"},"Svelte tutorial")]),s("li",null,[s("a",{href:"https://learn.svelte.dev/tutorial/welcome-to-svelte",target:"_blank",rel:"noopener"},"Tutorial Interattivo Svelte")]),s("li",null,[s("a",{href:"https://kit.svelte.dev/docs/introduction",target:"_blank",rel:"noopener"},"Introduzione a SvelteKit")])])])],-1),ME=s("p",null,[s("em",null,[s("strong",null,"Questi link sono il riferimento per gli studenti e vi suggerisco di studiarli e di utilizzarli per tutto il tempo necessario ad apprendere Svlete e SvelteKit")])],-1),PE={__name:"34",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[TE,CE,AE,ME]),_:1},16))}},KE=A(PE,[["__file","/@slidev/slides/34.md"]]),LE=s("h1",null,"SvelteKit",-1),RE=s("p",null,"Hello World: Creare un Progetto SvelteKit",-1),WE=s("ul",null,[s("li",null,[p("Per sviluppare con Svelte e SvelteKit è necessario: "),s("ul",null,[s("li",null,[p("nodejs (almeno versione 18) —> "),s("a",{href:"http://cedws",target:"_blank",rel:"noopener"},"Come installare nodejs su Linux")]),s("li",null,"npm"),s("li",null,"git")])]),s("li",null,"Assicurati che siano instllati sul tuo sistema eseguendo i seguenti comandi:")],-1),HE=s("pre",{class:"slidev-code language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(),s("span",{class:"token function"},"node"),p(),s("span",{class:"token parameter variable"},"--version")]),p(`
`),s("span",{class:"line"},"v19.2.0"),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(),s("span",{class:"token function"},"npm"),p(),s("span",{class:"token parameter variable"},"--version"),p()]),p(`
`),s("span",{class:"line"},[s("span",{class:"token number"},"9.1"),p(".3")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(),s("span",{class:"token function"},"git"),p(),s("span",{class:"token parameter variable"},"--version"),p("          ")]),p(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"git"),p(" version "),s("span",{class:"token number"},"2.34"),p(".1")])])],-1),NE={__name:"35",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[LE,RE,WE,G(i,Ke({},{ranges:[""]}),{default:I(()=>[HE]),_:1},16)]),_:1},16)}}},FE=A(NE,[["__file","/@slidev/slides/35.md"]]),DE=s("h1",null,"SvelteKit",-1),jE=s("p",null,"Hello World: Creare un Progetto SvelteKit",-1),VE=s("ul",null,[s("li",null,"Spostati nella tua directory di lavoro (es: cd ~/tmp)"),s("li",null,[p("Da qui crea lo "),s("a",{href:"https://en.wikipedia.org/wiki/Scaffold_(programming)",target:"_blank",rel:"noopener"},[s("strong",null,"scaffolding")]),p(" di un’applicazione base seguendo le semplici istruzioni a video")])],-1),BE=s("pre",{class:"slidev-code language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(),s("span",{class:"token function"},"npm"),p(" create svelte@latest hello-word-svelte-kit")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[p("create-svelte version "),s("span",{class:"token number"},"4.2"),p(".0")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[p("┌  Welcome to SvelteKit"),s("span",{class:"token operator"},"!")]),p(`
`),s("span",{class:"line"},"│"),p(`
`),s("span",{class:"line"},"◆  Which Svelte app template?"),p(`
`),s("span",{class:"line"},[p("│  ● SvelteKit demo app "),s("span",{class:"token punctuation"},"("),p("A demo app showcasing some of the features of SvelteKit"),s("span",{class:"token punctuation"},")")]),p(`
`),s("span",{class:"line"},"│  ○ Skeleton project"),p(`
`),s("span",{class:"line"},"│  ○ Library project"),p(`
`),s("span",{class:"line"},"└"),p(`
`),s("span",{class:"line"},[p("◆  Add "),s("span",{class:"token builtin class-name"},"type"),p(" checking with TypeScript?")]),p(`
`),s("span",{class:"line"},"│  ○ Yes, using JavaScript with JSDoc comments"),p(`
`),s("span",{class:"line"},"│  ○ Yes, using TypeScript syntax"),p(`
`),s("span",{class:"line"},"│  ● No"),p(`
`),s("span",{class:"line"},"└")])],-1),qE={__name:"36",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[DE,jE,VE,G(i,Ke({},{ranges:[""]}),{default:I(()=>[BE]),_:1},16)]),_:1},16)}}},UE=A(qE,[["__file","/@slidev/slides/36.md"]]),JE=s("h1",null,"SvelteKit",-1),YE=s("p",null,"Hello World: Creare un Progetto SvelteKit",-1),QE=s("pre",{class:"slidev-code language-bash"},[s("code",null,[s("span",{class:"line"},[p("◆  Select additional options "),s("span",{class:"token punctuation"},"("),p("use arrow keys/space bar"),s("span",{class:"token punctuation"},")")]),p(`
`),s("span",{class:"line"},[p("│  ◻ Add ESLint "),s("span",{class:"token keyword"},"for"),p(" code linting")]),p(`
`),s("span",{class:"line"},[p("│  ◻ Add Prettier "),s("span",{class:"token keyword"},"for"),p(" code formatting")]),p(`
`),s("span",{class:"line"},[p("│  ◻ Add Playwright "),s("span",{class:"token keyword"},"for"),p(" browser testing")]),p(`
`),s("span",{class:"line"},[p("│  ◻ Add Vitest "),s("span",{class:"token keyword"},"for"),p(" unit testing")]),p(`
`),s("span",{class:"line"},"└"),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[p("└  Your project is ready"),s("span",{class:"token operator"},"!")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},"Install community-maintained integrations:"),p(`
`),s("span",{class:"line"},"  https://github.com/svelte-add/svelte-add"),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},"Next steps:"),p(`
`),s("span",{class:"line"},[p("  "),s("span",{class:"token number"},"1"),p(": "),s("span",{class:"token builtin class-name"},"cd"),p(" hello-word-svelte-kit")]),p(`
`),s("span",{class:"line"},[p("  "),s("span",{class:"token number"},"2"),p(": "),s("span",{class:"token function"},"npm"),p(),s("span",{class:"token function"},"install"),p(),s("span",{class:"token punctuation"},"("),p("or "),s("span",{class:"token function"},"pnpm"),p(" install, etc"),s("span",{class:"token punctuation"},")")]),p(`
`),s("span",{class:"line"},[p("  "),s("span",{class:"token number"},"3"),p(": "),s("span",{class:"token function"},"git"),p(" init "),s("span",{class:"token operator"},"&&"),p(),s("span",{class:"token function"},"git"),p(),s("span",{class:"token function"},"add"),p(),s("span",{class:"token parameter variable"},"-A"),p(),s("span",{class:"token operator"},"&&"),p(),s("span",{class:"token function"},"git"),p(" commit "),s("span",{class:"token parameter variable"},"-m"),p(),s("span",{class:"token string"},'"Initial commit"'),p(),s("span",{class:"token punctuation"},"("),p("optional"),s("span",{class:"token punctuation"},")")]),p(`
`),s("span",{class:"line"},[p("  "),s("span",{class:"token number"},"4"),p(": "),s("span",{class:"token function"},"npm"),p(" run dev -- "),s("span",{class:"token parameter variable"},"--open")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},"To close the dev server, hit Ctrl-C")])],-1),ZE={__name:"37",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[JE,YE,G(i,Ke({},{ranges:[""]}),{default:I(()=>[QE]),_:1},16)]),_:1},16)}}},GE=A(ZE,[["__file","/@slidev/slides/37.md"]]),XE="/TPSI/4/svelte/assets/svelte_0000-8c1f6978.png",eT=s("h1",null,"SvelteKit",-1),tT=s("p",null,"Hello World: Creare un Progetto SvelteKit",-1),nT=s("ul",null,[s("li",null,[p("Ora nella directory "),s("strong",null,"hello-word-svelte-kit"),p(" è presente un progetto base realizzato con SvelteKit")]),s("li",null,"Per portare a termine la creazione del progetto eseguire i seguenti comandi")],-1),oT=s("pre",{class:"slidev-code language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(),s("span",{class:"token builtin class-name"},"cd"),p(" hello-word-svelte-kit  "),s("span",{class:"token comment"},"# mi sposto nella directory hello-word-svelte-kit")]),p(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(),s("span",{class:"token function"},"npm"),p(" i  "),s("span",{class:"token comment"},"# installo le dipendenze del progetto")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[p("added "),s("span",{class:"token number"},"42"),p(" packages, and audited "),s("span",{class:"token number"},"43"),p(" packages "),s("span",{class:"token keyword"},"in"),p(" 10s")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[s("span",{class:"token number"},"3"),p(" packages are looking "),s("span",{class:"token keyword"},"for"),p(" funding")]),p(`
`),s("span",{class:"line"},[p("  run "),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"npm"),p(" fund"),s("span",{class:"token variable"},"`")]),p(),s("span",{class:"token keyword"},"for"),p(" details")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[p("found "),s("span",{class:"token number"},"0"),p(" vulnerabilities")])])],-1),iT=s("ul",null,[s("li",null,"Se non si sono verificatri errori, il progetto è pronto per l’esecuzione")],-1),sT=s("img",{src:XE,class:"mx-auto",width:"100"},null,-1),lT={__name:"38",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[eT,tT,nT,G(i,Ke({},{ranges:[""]}),{default:I(()=>[oT]),_:1},16),iT,sT]),_:1},16)}}},aT=A(lT,[["__file","/@slidev/slides/38.md"]]),rT=s("h1",null,"SvelteKit",-1),cT=s("p",null,"Hello World: Eseguiamo il progetto",-1),uT=s("ul",null,[s("li",null,"Per eseguire il progetto, all’interno della directory di progetto (hello-word-svelte-kit), eseguire il seguente comando")],-1),dT=s("pre",{class:"slidev-code language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(),s("span",{class:"token function"},"npm"),p(" run dev -- "),s("span",{class:"token parameter variable"},"--open")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(" hello-word-svelte-kit@0.0.1 dev")]),p(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(" vite dev "),s("span",{class:"token parameter variable"},"--open")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},"Forced re-optimization of dependencies"),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[p("  VITE v4.3.9  ready "),s("span",{class:"token keyword"},"in"),p(),s("span",{class:"token number"},"1136"),p(" ms")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},"  ➜  Local:   http://localhost:5173/"),p(`
`),s("span",{class:"line"},[p("  ➜  Network: use "),s("span",{class:"token parameter variable"},"--host"),p(" to expose")]),p(`
`),s("span",{class:"line"},[p("  ➜  press h to show "),s("span",{class:"token builtin class-name"},"help")])])],-1),pT=s("ul",null,[s("li",null,[p("Viene automaticamente aperta una fienstra del browser che punta al seguente indirizzo: "),s("a",{href:"http://localhost:5173/",target:"_blank",rel:"noopener"},"http://localhost:5173/")])],-1),fT={__name:"39",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[rT,cT,uT,G(i,Ke({},{ranges:[""]}),{default:I(()=>[dT]),_:1},16),pT]),_:1},16)}}},mT=A(fT,[["__file","/@slidev/slides/39.md"]]),hT="/TPSI/4/svelte/assets/svelte_009-3fc6e637.png",vT=s("h1",null,"SvelteKit",-1),_T=s("p",null,"Hello World: Eseguiamo il progetto",-1),gT=s("img",{src:hT,class:"mx-auto",width:"500"},null,-1),bT={__name:"40",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[vT,_T,gT]),_:1},16))}},yT=A(bT,[["__file","/@slidev/slides/40.md"]]),wT="/TPSI/4/svelte/assets/svelte_010-f742c650.png",ST=s("h1",null,"SvelteKit",-1),xT=s("p",null,"Hello World: Eseguiamo il progetto",-1),kT=s("img",{src:wT,class:"mx-auto",width:"450"},null,-1),$T={__name:"41",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[ST,xT,kT]),_:1},16))}},IT=A($T,[["__file","/@slidev/slides/41.md"]]),OT=s("h1",null,"SvelteKit",-1),zT=s("p",null,"Hello World: Analisi del progetto base",-1),ET=s("ul",null,[s("li",null,[p("Quest’applicazione ci permette di comprendere alcuni concetti molto importanti: "),s("ol",null,[s("li",null,[s("strong",null,"Ogni pagina dell’applicazione è un componente Svelte")]),s("li",null,[s("strong",null,"Il routing è implementato la gerarchia di directory nel filesystem")]),s("li",null,[s("strong",null,"Ogni pagina è una directory all’interno di src/routes")]),s("li",null,[s("strong",null,"La home page è un componente Svelte all’interno di src/routes")]),s("li",null,[s("strong",null,"Una pagina(componente) può includere uno o più componenti esterni")])])])],-1),TT={__name:"42",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[OT,zT,ET]),_:1},16))}},CT=A(TT,[["__file","/@slidev/slides/42.md"]]),AT=s("h1",null,"SvelteKit",-1),MT=s("p",null,"Hello World: Analisi del progetto base",-1),PT=s("ul",null,[s("li",null,"Analizziamo il progetto generato")],-1),KT=s("pre",{class:"slidev-code language-bash"},[s("code",null,[s("span",{class:"line"},"src"),p(`
`),s("span",{class:"line"},[p("├── app.html --"),s("span",{class:"token operator"},">"),p(" La pagina Web dell'applicazione")]),p(`
`),s("span",{class:"line"},[p("└── routes --"),s("span",{class:"token operator"},">"),p(" entry point del sistema di routing filesystem based")]),p(`
`),s("span",{class:"line"},"    ├── about"),p(`
`),s("span",{class:"line"},[p("    │   └── +page.svelte --"),s("span",{class:"token operator"},">"),p(" la pagina About "),s("span",{class:"token punctuation"},"("),p("componente svelte"),s("span",{class:"token punctuation"},")")]),p(`
`),s("span",{class:"line"},[p("    ├── Counter.svelte --"),s("span",{class:"token operator"},">"),p(" il componente contatore presente solo nella home")]),p(`
`),s("span",{class:"line"},[p("    ├── Header.svelte --"),s("span",{class:"token operator"},">"),p(" il componente Header presente "),s("span",{class:"token keyword"},"in"),p(" tutte le pagine")]),p(`
`),s("span",{class:"line"},[p("    ├── +layout.svelte --"),s("span",{class:"token operator"},">"),p(" il layout comune a tutte le pagine del progetto")]),p(`
`),s("span",{class:"line"},[p("    ├── +page.svelte --"),s("span",{class:"token operator"},">"),p(" la home page "),s("span",{class:"token punctuation"},"("),p("componente svelte"),s("span",{class:"token punctuation"},")")]),p(`
`),s("span",{class:"line"},[p("    ├── styles.css --"),s("span",{class:"token operator"},">"),p(" CSS globale che si applica a tutta l'applicazione ed ai suoi componenti")]),p(`
`),s("span",{class:"line"},"    └── sverdle"),p(`
`),s("span",{class:"line"},[p("        ├── game.js --"),s("span",{class:"token operator"},">"),p(" la logica del gioco "),s("span",{class:"token punctuation"},"("),p("JS vanilla"),s("span",{class:"token punctuation"},")")]),p(`
`),s("span",{class:"line"},[p("        ├── +page.server.js --"),s("span",{class:"token operator"},">"),p(" il back-end di sverdle "),s("span",{class:"token punctuation"},"("),p("JS vanilla"),s("span",{class:"token punctuation"},")")]),p(`
`),s("span",{class:"line"},[p("        └── +page.svelte --"),s("span",{class:"token operator"},">"),p(" la pagina sverdle "),s("span",{class:"token punctuation"},"("),p("componente svelte"),s("span",{class:"token punctuation"},")")])])],-1),LT={__name:"43",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[AT,MT,PT,G(i,Ke({},{ranges:[""]}),{default:I(()=>[KT]),_:1},16)]),_:1},16)}}},RT=A(LT,[["__file","/@slidev/slides/43.md"]]),WT=s("h1",null,"SvelteKit",-1),HT=s("p",null,"Hello World: Analisi del progetto base",-1),NT=s("ul",null,[s("li",null,[s("p",null,"Da questa prima analisi possiamo dedurre che:"),s("ul",null,[s("li",null,[p("Ogni pagina è composta da: "),s("ul",null,[s("li",null,"una directory all’interno di src/router. Il nome della directory coincide con la URL della pagina (quindi niente spazi, ma usiamo _)"),s("li",null,[p("un file nominato "),s("strong",null,"+page-svelte"),p(" che è un componente completo ed indipendente che include HTML, CSS e JS")])])]),s("li",null,[p("Ogni componente che non è una pagina è formato da un file chiamato "),s("em",null,[s("strong",null,"<nome_componente>.svelte")])]),s("li",null,"Il routing tra pagine viene gestito automaticamente da SvelteKit se si rispetta la convenzione descritta sopra")])]),s("li",null,[s("p",null,[s("strong",null,[p("Segue ora un’analisi live a cura del professore ("),s("code",null,"necessario prendere appunti"),p(")")])])])],-1),FT={__name:"44",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[WT,HT,NT]),_:1},16))}},DT=A(FT,[["__file","/@slidev/slides/44.md"]]),jT=s("h1",null,"SvelteKit",-1),VT=s("p",null,"Hello World: Esercitazione_01",-1),BT=s("ul",null,[s("li",null,"Creare ed installare il progetto base SvelteKit come spiegato sopra"),s("li",null,"Eseguire l’applicazione")],-1),qT={__name:"45",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[jT,VT,BT]),_:1},16))}},UT=A(qT,[["__file","/@slidev/slides/45.md"]]),JT="/TPSI/4/svelte/assets/svelte_011-5ebbb473.png",YT=s("h1",null,"SvelteKit",-1),QT=s("p",null,"Hello World: Esercitazione_02",-1),ZT=s("ul",null,[s("li",null,"provare a modificare la home page del progetto in modo che appaia come in figura")],-1),GT=s("img",{src:JT,class:"mx-auto",width:"450"},null,-1),XT={__name:"46",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[YT,QT,ZT,GT]),_:1},16))}},eC=A(XT,[["__file","/@slidev/slides/46.md"]]),tC="/TPSI/4/svelte/assets/svelte_012-0ceab35c.png",nC=s("h1",null,"SvelteKit",-1),oC=s("p",null,"Hello World: Esercitazione_03",-1),iC=s("ul",null,[s("li",null,"provare a modificare il layout del progetto in modo che appaia come in figura")],-1),sC=s("p",null,[s("br"),s("br"),s("img",{src:tC,class:"mx-auto",width:"700"})],-1),lC={__name:"47",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[nC,oC,iC,sC]),_:1},16))}},aC=A(lC,[["__file","/@slidev/slides/47.md"]]),rC="/TPSI/4/svelte/assets/svelte_013-7818c60a.png",cC=s("h1",null,"SvelteKit",-1),uC=s("p",null,"Hello World: Esercitazione_04",-1),dC=s("ul",null,[s("li",null,"provare a modificare la pagina about in modo che appaia come in figura")],-1),pC=s("img",{src:rC,class:"mx-auto",width:"600"},null,-1),fC={__name:"48",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[cC,uC,dC,pC]),_:1},16))}},mC=A(fC,[["__file","/@slidev/slides/48.md"]]),hC="/TPSI/4/svelte/assets/svelte_014-9655b9ec.png",vC=s("h1",null,"SvelteKit",-1),_C=s("p",null,"Hello World: Esercitazione_05",-1),gC=s("ul",null,[s("li",null,"provare a modificare il componente counter in modo che si incrementi o decrementi di due unità alla pressione dei pulsati + o -")],-1),bC=s("br",null,null,-1),yC=s("img",{src:hC,class:"mx-auto",width:"600"},null,-1),wC={__name:"49",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[vC,_C,gC,bC,yC]),_:1},16))}},SC=A(wC,[["__file","/@slidev/slides/49.md"]]),Gf="/TPSI/4/svelte/assets/svelte_015-368b64e2.png",xC=s("h1",null,"SvelteKit",-1),kC=s("p",null,"Creiamo un componente",-1),$C=s("ul",null,[s("li",null,"Vediamo ora come creare un nostro componente e utilizzarlo nelle pagine della nostra applicazione"),s("li",null,"Realizzeremo il componente introdotto alla slide #28 e successive"),s("li",null,"Lo visualizzeremo sia sulla pagina home che sulla pagina about")],-1),IC=s("img",{src:Gf,class:"mx-auto",width:"450"},null,-1),OC={__name:"50",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[xC,kC,$C,IC]),_:1},16))}},zC=A(OC,[["__file","/@slidev/slides/50.md"]]),EC=s("h1",null,"SvelteKit",-1),TC=s("p",null,"Creiamo un componente",-1),CC=s("ul",null,[s("li",null,"Per una corretta organizzazione del codice metetremo i nostri componenti nella directory lib"),s("li",null,[p("Il nostro componente si chiama "),s("strong",null,"Banner")]),s("li",null,[p("Quindi dobbiamo creare una directory "),s("em",null,"components"),p(" in src/lib e al suo interno creare un file "),s("em",null,"banner.svelte")])],-1),AC=s("pre",{class:"slidev-code language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(),s("span",{class:"token builtin class-name"},"cd"),p(" src/lib")]),p(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(),s("span",{class:"token function"},"mkdir"),p(" components")]),p(`
`),s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(),s("span",{class:"token function"},"touch"),p(" components/banner.svelte")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},"├── app.html"),p(`
`),s("span",{class:"line"},"├── lib"),p(`
`),s("span",{class:"line"},"│   ├── components"),p(`
`),s("span",{class:"line"},"│   │   └── banner.svelte")])],-1),MC=s("ul",null,[s("li",null,"Ora editiamo il file banner.svelte ed utilizziamo il codice di slide #28")],-1),PC={__name:"51",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[EC,TC,CC,G(i,Ke({},{ranges:[""]}),{default:I(()=>[AC]),_:1},16),MC]),_:1},16)}}},KC=A(PC,[["__file","/@slidev/slides/51.md"]]),LC=s("h1",null,"SvelteKit",-1),RC=s("p",null,"Creiamo un componente",-1),WC=s("ul",null,[s("li",null,[p("Il componente "),s("strong",null,"banner"),p(" è ora disponibile per essere utilizzato")]),s("li",null,[p("Per fare ciò dobbiamo "),s("em",null,[s("strong",null,"importarlo")]),p(" nella pagina in cui vogliamo utilizzarlo")]),s("li",null,[p("Partiamo modificando la home e quindi editiamo il file "),s("em",null,"src/routes/+page.svelte")])],-1),HC=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("script")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},"    import Counter from './Counter.svelte';"),p(`
`),s("span",{class:"line"},"    ......"),p(`
`),s("span",{class:"line"},"    import Banner from '../lib/components/banner.svelte'; // aggiungi questa linea"),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("script")]),s("span",{class:"token punctuation"},">")])])])],-1),NC=s("ul",null,[s("li",null,[p("Ora abbiamo a disposizione un nuovo tag HTML che si chiama "),s("strong",null,"<Banner>")]),s("li",null,"Questo è un componente Web e possiamo usarlo come qualsiasi altro tag html"),s("li",null,"Come anticipato il paradigma dei web component offre infinite possibilità")],-1),FC={__name:"52",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[LC,RC,WC,G(i,Ke({},{ranges:[""]}),{default:I(()=>[HC]),_:1},16),NC]),_:1},16)}}},DC=A(FC,[["__file","/@slidev/slides/52.md"]]),jC=s("h1",null,"SvelteKit",-1),VC=s("p",null,"Creiamo un componente",-1),BC=s("ul",null,[s("li",null,"Ora usiamo il componente nella home page")],-1),qC=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("section")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},[p("	"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("h1")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},[p("		"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("span")]),p(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),p("welcome"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},[p("			"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("picture")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},[p("				"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("source")]),p(),s("span",{class:"token attr-name"},"srcset"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),p("{welcome}")]),p(),s("span",{class:"token attr-name"},"type"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),p("image/webp"),s("span",{class:"token punctuation"},'"')]),p(),s("span",{class:"token punctuation"},"/>")])]),p(`
`),s("span",{class:"line"},[p("				"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("img")]),p(),s("span",{class:"token attr-name"},"src"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),p("{welcome_fallback}")]),p(),s("span",{class:"token attr-name"},"alt"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),p("Welcome"),s("span",{class:"token punctuation"},'"')]),p(),s("span",{class:"token punctuation"},"/>")])]),p(`
`),s("span",{class:"line"},[p("			"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("picture")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},[p("		"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("span")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[p("		alla tua nuova "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("br")]),p(),s("span",{class:"token punctuation"},"/>")]),p("applicazione SvelteKit")]),p(`
`),s("span",{class:"line"},[p("	"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("h1")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[p("	"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("h2")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},[p("		prova a editare il file "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("strong")]),s("span",{class:"token punctuation"},">")]),p("src/routes/+page.svelte"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("strong")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},[p("	"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("h2")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[p("	"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("Banner")]),p(),s("span",{class:"token punctuation"},"/>")]),p(),s("span",{class:"token comment"},"<!-- Utilizza Banner al posto di Counter-->")]),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("section")]),s("span",{class:"token punctuation"},">")])])])],-1),UC={__name:"53",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[jC,VC,BC,G(i,Ke({},{ranges:[""]}),{default:I(()=>[qC]),_:1},16)]),_:1},16)}}},JC=A(UC,[["__file","/@slidev/slides/53.md"]]),YC=s("h1",null,"SvelteKit",-1),QC=s("p",null,"Creiamo un componente",-1),ZC=s("ul",null,[s("li",null,"Ora facciamo partire l’applicazione e verifichiamo che tutto sia corretto")],-1),GC=s("br",null,null,-1),XC=s("img",{src:Gf,class:"mx-auto",width:"500"},null,-1),eA={__name:"54",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[YC,QC,ZC,GC,XC]),_:1},16))}},tA=A(eA,[["__file","/@slidev/slides/54.md"]]),nA="/TPSI/4/svelte/assets/svelte_016-51073a42.png",oA=s("h1",null,"SvelteKit",-1),iA=s("p",null,"Hello World: Esercitazione_06",-1),sA=s("ul",null,[s("li",null,"provare a modificare la pagina about aggiungendo il componente Banner")],-1),lA=s("br",null,null,-1),aA=s("img",{src:nA,class:"mx-auto",width:"600"},null,-1),rA={__name:"55",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[oA,iA,sA,lA,aA]),_:1},16))}},cA=A(rA,[["__file","/@slidev/slides/55.md"]]),uA=s("h1",null,"SvelteKit",-1),dA=s("p",null,"Creiamo un componente",-1),pA=s("ul",null,[s("li",null,"Quindi una volta definito il componente, esso sarà riutilizzabile in qualsiasi pagina e sezione del nostro sito"),s("li",null,"Ma ancor meglio potrà essere utilizzato anche in altri siti e pagine"),s("li",null,[p("Quindi i componenti web ci permettono di implementare importanti proprietà dello sviluppo software, quali "),s("ul",null,[s("li",null,"incapsulamento"),s("li",null,"isolamento"),s("li",null,"riutilizzabilità del codice")])]),s("li",null,"Per questi motivi lo sviluppo component base è oggi alla base di tutti i principali framework di sviluppo per il mondo web (web, mobile, games, web app, desktop app)")],-1),fA={__name:"56",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[uA,dA,pA]),_:1},16))}},mA=A(fA,[["__file","/@slidev/slides/56.md"]]),hA=s("h1",null,"SvelteKit",-1),vA=s("p",null,"Variable Substitution",-1),_A=s("ul",null,[s("li",null,"Analizziamo più in dettaglio il componente Banner")],-1),gA=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("script")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},"    let name = 'John Doe';"),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("script")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("h1")]),s("span",{class:"token punctuation"},">")]),p("My name is {name}!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("h1")]),s("span",{class:"token punctuation"},">")])])])],-1),bA=s("ul",null,[s("li",null,[p("Nella sezione JS del componente abbiamo solo definito una variabile di nome "),s("em",null,"name"),p(" ed assegnato un valore string")]),s("li",null,[p("Nella sezione HTML del componente abbiamo utilizzato la variabile all’interno di normale codice HTML tramite "),s("code",null,"{}")])],-1),yA=s("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"30px"}},[s("p",null,"In svelte il costrutto {< var name >} rappresenta una sostituzione di variabili")],-1),wA=s("ul",null,[s("li",null,[p("Pertanto quando il componente sarà compilato ogni occorrenza di "),s("code",null,"{< var name>}"),p(" sarà sostituito con il valore attribuito alla variabile "),s("em",null,"var name")])],-1),SA={__name:"57",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[hA,vA,_A,G(i,Ke({},{ranges:[""]}),{default:I(()=>[gA]),_:1},16),bA,yA,wA]),_:1},16)}}},xA=A(SA,[["__file","/@slidev/slides/57.md"]]),kA="/TPSI/4/svelte/assets/svelte_017-d1ecfa98.png",$A=s("h1",null,"SvelteKit",-1),IA=s("p",null,"Hello World: Esercitazione_07",-1),OA=s("ul",null,[s("li",null,"Provare a modificare il componente Banner in modo che visualizzi il proprio nome e cognome"),s("li",null,"Verificare che il banner appaia modificato in tutte le pagine")],-1),zA=s("br",null,null,-1),EA=s("img",{src:kA,class:"mx-auto",width:"500"},null,-1),TA={__name:"58",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[$A,IA,OA,zA,EA]),_:1},16))}},CA=A(TA,[["__file","/@slidev/slides/58.md"]]),AA=s("h1",null,"SvelteKit",-1),MA=s("p",null,"Code Execution",-1),PA=s("ul",null,[s("li",null,"In molti casi sostituire una variabile non è sufficiente, ma si rende necessario l’esecuzione di un codice JS"),s("li",null,[p("Anche in questa situazione il costrutto "),s("code",null,"{}"),p(" viene in nostro aiuto")]),s("li",null,[p("Infatti svelte durante la compilazione, esegue il codice JS contenuto in "),s("code",null,"{}"),p(" e sostituisce il suo output nel codice HTML")]),s("li",null,"Vediamo un esempio")],-1),KA=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("script")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},"    let name = 'John Doe';"),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("script")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("h1")]),s("span",{class:"token punctuation"},">")]),p("My name is {name.toLocaleUpperCase()}!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("h1")]),s("span",{class:"token punctuation"},">")])])])],-1),LA=s("ul",null,[s("li",null,[p("Quando questo codice viene compilato, viene prima richiamato il metodo "),s("em",null,"toUpperCase"),p(" sulla variabile(oggetto) name")]),s("li",null,[p("Successivamente il risultato di questa esecuzione viene sostitutito "),s("em",null,"verbatim"),p(" nel codice HTML")])],-1),RA={__name:"59",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[AA,MA,PA,G(i,Ke({},{ranges:[""]}),{default:I(()=>[KA]),_:1},16),LA]),_:1},16)}}},WA=A(RA,[["__file","/@slidev/slides/59.md"]]),HA="/TPSI/4/svelte/assets/svelte_018-4a3d51b3.png",NA=s("h1",null,"SvelteKit",-1),FA=s("p",null,"Code Execution",-1),DA=s("img",{src:HA,class:"mx-auto",width:"500"},null,-1),jA={__name:"60",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[NA,FA,DA]),_:1},16))}},VA=A(jA,[["__file","/@slidev/slides/60.md"]]),BA=s("h1",null,"SvelteKit",-1),qA=s("p",null,"Code Execution",-1),UA=s("ul",null,[s("li",null,"Ovviamente non siamo limitati ai metodi degli oggetti standard di JS"),s("li",null,"Ma possiamo anche richiamare nostre funzioni"),s("li",null,"Per esempio vediamo come richiamare una funzione che prende il nostro nome e lo stampa al contrario tutto maiuscolo")],-1),JA=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("script")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},"    let name = 'Antonio Mancuso';"),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},"    function reverse_string(str) {"),p(`
`),s("span",{class:"line"},"        return str.split('').reverse().join('').toUpperCase();"),p(`
`),s("span",{class:"line"},"    }"),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("script")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("h1")]),s("span",{class:"token punctuation"},">")]),p("My name is {reverse_string(name)}!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("h1")]),s("span",{class:"token punctuation"},">")])])])],-1),YA={__name:"61",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[BA,qA,UA,G(i,Ke({},{ranges:[""]}),{default:I(()=>[JA]),_:1},16)]),_:1},16)}}},QA=A(YA,[["__file","/@slidev/slides/61.md"]]),ZA="/TPSI/4/svelte/assets/svelte_019-600c2437.png",GA=s("h1",null,"SvelteKit",-1),XA=s("p",null,"Code Execution",-1),eM=s("ul",null,[s("li",null,[p("Quando questo codice viene compilato, viene prima richiamato la nostra funzione "),s("em",null,"reverse_string")]),s("li",null,[p("Successivamente il risultato di questa esecuzione viene sostitutito "),s("em",null,"verbatim"),p(" nel codice HTML")])],-1),tM=s("br",null,null,-1),nM=s("img",{src:ZA,class:"mx-auto",width:"400"},null,-1),oM={__name:"62",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[GA,XA,eM,tM,nM]),_:1},16))}},iM=A(oM,[["__file","/@slidev/slides/62.md"]]),sM=s("h1",null,"SvelteKit",-1),lM=s("ul",null,[s("li",null,[s("p",null,"Come abbiamo visto con semplici esempi, il meccanismo dei componenti di Svlete è molto versatile")]),s("li",null,[s("p",null,"Permette la definizione di componenti indipendenti rendendo più facile lo sviluppo e riducendo gli errori")]),s("li",null,[s("p",null,"Il meccanismo della sostituzione delle variabili e del code execution sono molto utili nello sviluppo di applicazioni web moderne")]),s("li",null,[s("p",null,"Svelte rende tutto ciò semplicissimo e più semplice rispetto ad altri framework")]),s("li",null,[s("p",null,"Per questo e altri motivi è un framework in veloce ascesa nel panorama dello sviluppo web")]),s("li",null,[s("p",null,"Ora vediamo come creare un progetto Svelte da zero, senza scaffolding")]),s("li",null,[s("p",null,"Questo ci permetterà di comprendere altri meccanismi e come è realmente organizzata un’applicazione sveltekit")])],-1),aM={__name:"63",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[sM,lM]),_:1},16))}},rM=A(aM,[["__file","/@slidev/slides/63.md"]]),cM=s("h1",null,"SvelteKit",-1),uM=s("p",null,"Creazione Web App: scaffolding del progetto",-1),dM=s("ul",null,[s("li",null,"Creiamo un nuovo progetto chiamato WebApp")],-1),pM=s("pre",{class:"slidev-code language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token operator"},">"),p(),s("span",{class:"token function"},"npm"),p(" create svelte@latest WebApp")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[p("create-svelte version "),s("span",{class:"token number"},"4.2"),p(".0")]),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},[p("┌  Welcome to SvelteKit"),s("span",{class:"token operator"},"!")]),p(`
`),s("span",{class:"line"},"│"),p(`
`),s("span",{class:"line"},"◆  Which Svelte app template?"),p(`
`),s("span",{class:"line"},"│  ○ SvelteKit demo app"),p(`
`),s("span",{class:"line"},[p("│  ● Skeleton project "),s("span",{class:"token punctuation"},"("),p("Barebones scaffolding "),s("span",{class:"token keyword"},"for"),p(" your new SvelteKit app"),s("span",{class:"token punctuation"},")")]),p(`
`),s("span",{class:"line"},"│  ○ Library project"),p(`
`),s("span",{class:"line"},"└"),p(`
`),s("span",{class:"line"},[p("◇  Add "),s("span",{class:"token builtin class-name"},"type"),p(" checking with TypeScript?")]),p(`
`),s("span",{class:"line"},"│  No"),p(`
`),s("span",{class:"line"},"│"),p(`
`),s("span",{class:"line"},[p("◇  Select additional options "),s("span",{class:"token punctuation"},"("),p("use arrow keys/space bar"),s("span",{class:"token punctuation"},")")]),p(`
`),s("span",{class:"line"},"│  none"),p(`
`),s("span",{class:"line"},"│"),p(`
`),s("span",{class:"line"},[p("└  Your project is ready"),s("span",{class:"token operator"},"!")])])],-1),fM={__name:"64",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[cM,uM,dM,G(i,Ke({},{ranges:[""]}),{default:I(()=>[pM]),_:1},16)]),_:1},16)}}},mM=A(fM,[["__file","/@slidev/slides/64.md"]]),hM="/TPSI/4/svelte/assets/svelte_020-2a368428.png",vM=s("h1",null,"SvelteKit",-1),_M=s("p",null,"Creazione Web App: scaffolding del progetto",-1),gM=s("ul",null,[s("li",null,"Questa volta è stato solo creato il minimo indispendabile")],-1),bM=s("p",null,[s("br"),s("br"),s("img",{src:hM,class:"mx-auto",width:"400"})],-1),yM=s("ul",null,[s("li",null,"Creeremo uno scheletro di una semplice Web App senza spendere troppo tempo sull’aspetto estetico (HTML e CSS sono dati per scontato in questa lezione)"),s("li",null,"L’obiettivo è comprendere il funzionamento e l’organizzazione di un’app sveltekit")],-1),wM={__name:"65",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[vM,_M,gM,bM,yM]),_:1},16))}},SM=A(wM,[["__file","/@slidev/slides/65.md"]]),xM=s("h1",null,"SvelteKit",-1),kM=s("p",null,"Creazione Web App: scaffolding del progetto",-1),$M=s("ul",null,[s("li",null,[p("Iniziamo con la creazione del "),s("code",null,"layout"),p(" della pagina")]),s("li",null,[p("Il "),s("em",null,[s("strong",null,"layout")]),p(" della pagina è il contenitore principale della nostra applicazione")]),s("li",null,"Esso sarà sempre visualizzato in ciascuna pagina del sito"),s("li",null,"Il vantaggio principale è che in questo modo il layout sarà scritto una sola volta ed utilizzato per tutte le pagine"),s("li",null,[p("Questo meccanismo implementa il principio "),s("a",{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",target:"_blank",rel:"noopener"},"DRY"),p(" (Don’t Repeat Yourself) molto importante nello sviluppo del software")]),s("li",null,[p("Creaimo quindi un file chiamato "),s("code",null,"+layout.svelte"),p(" in "),s("em",null,[s("strong",null,"src/routes")])])],-1),IM=s("pre",{class:"slidev-code language-bash"},[s("code",null,[s("span",{class:"line"},"src"),p(`
`),s("span",{class:"line"},"├── app.html"),p(`
`),s("span",{class:"line"},"└── routes"),p(`
`),s("span",{class:"line"},[p("    ├── +layout.svelte "),s("span",{class:"token operator"},"<"),p("--- layout")]),p(`
`),s("span",{class:"line"},[p("    └── +page.svelte   "),s("span",{class:"token operator"},"<"),p("--- home page")])])],-1),OM=s("ul",null,[s("li",null,"Inseriamo il codice HTML e CSS")],-1),zM={__name:"66",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[xM,kM,$M,G(i,Ke({},{ranges:[""]}),{default:I(()=>[IM]),_:1},16),OM]),_:1},16)}}},EM=A(zM,[["__file","/@slidev/slides/66.md"]]),TM="/TPSI/4/svelte/assets/svelte_021-dca7a484.png",CM=s("h1",null,"SvelteKit",-1),AM=s("p",null,"Creazione Web App: il layout",-1),MM=s("img",{src:TM,class:"mx-auto",width:"400"},null,-1),PM={__name:"67",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[CM,AM,MM]),_:1},16))}},KM=A(PM,[["__file","/@slidev/slides/67.md"]]),LM="/TPSI/4/svelte/assets/svelte_022-037591fe.png",RM="/TPSI/4/svelte/assets/svelte_023-535f64a4.png",WM=s("h1",null,"SvelteKit",-1),HM=s("p",null,"Creazione Web App: il layout",-1),NM=s("img",{src:LM,class:"mx-auto",width:"400",style:{position:"relative",left:"-200px"}},null,-1),FM=s("img",{src:RM,class:"mx-auto",width:"360",style:{position:"relative",left:"200px",top:"-500px"}},null,-1),DM={__name:"68",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[WM,HM,NM,FM]),_:1},16))}},jM=A(DM,[["__file","/@slidev/slides/68.md"]]),VM="/TPSI/4/svelte/assets/svelte_024-90632bcf.png",BM=s("h1",null,"SvelteKit",-1),qM=s("p",null,"Creazione Web App: il layout",-1),UM=s("img",{src:VM,class:"mx-auto",width:"600"},null,-1),JM={__name:"69",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[BM,qM,UM]),_:1},16))}},YM=A(JM,[["__file","/@slidev/slides/69.md"]]),QM=s("h1",null,"SvelteKit",-1),ZM=s("p",null,"Creazione Web App: il layout",-1),GM=s("ul",null,[s("li",null,[s("p",null,"Abbiamo definito il layout della nostra applicazione, composto da:"),s("ul",null,[s("li",null,"header"),s("li",null,"navbar"),s("li",null,"main content area (article)"),s("li",null,"footer")])]),s("li",null,[s("p",null,"Le pagine che andremo a sviluppare verranno visualizzate nel main content area")])],-1),XM={__name:"70",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[QM,ZM,GM]),_:1},16))}},e4=A(XM,[["__file","/@slidev/slides/70.md"]]),t4={class:"banner"},n4=Ae({__name:"Banner",props:{bg:{default:"white"},fg:{default:"white"}},setup(e,{emit:t}){const n=e;Z_(l=>({"76049b2e-bgcol":M(o),"76049b2e-fgcol":M(i)})),$(C);const o=Kt(n,"bg",t),i=Kt(n,"fg",t);return(l,a)=>(y(),ie("div",t4,[qt(l.$slots,"default")]))}});const Mr=A(n4,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/components/Banner.vue"]]),o4="/TPSI/4/svelte/assets/svelte_025-e24a97c2.png",i4=s("h1",null,"SvelteKit",-1),s4=s("p",null,"Creazione Web App: il layout",-1),l4=s("ul",null,[s("li",null,"Importante notare che nello style del layout abbiamo modificato lo stile globale del body"),s("li",null,[p("Per far ciò abbiamo usato il costrutto "),s("code",null,":global(<selettore>)")])],-1),a4=s("br",null,null,-1),r4=s("img",{src:o4,class:"mx-auto",width:"400"},null,-1),c4=s("ul",null,[s("li",null,[p("Ciò è necessario in quanto lo stylde del componente (layout è un componente) è "),s("strong",null,"scoped")]),s("li",null,"In altre parole lo stile di un componente è confinato al solo componente stesso e non può modificare lo stilde di altri componenti"),s("li",null,[p("L’uso di "),s("em",null,":globa"),p(" ci permette di fare un’eccezione a questa regola")])],-1),u4=s("br",null,null,-1),d4={__name:"71",setup(e){const t={};return $(C),(n,o)=>{const i=Mr;return y(),z(F,N(H(t)),{default:I(()=>[i4,s4,l4,a4,r4,c4,u4,G(i,{bg:"green",fg:"yellow"},{default:I(()=>[p(" Si suggerisce di non abusare di questa possibilità in quanto rende il codice meno leggibile e meno comprensibile ")]),_:1})]),_:1},16)}}},p4=A(d4,[["__file","/@slidev/slides/71.md"]]),f4=s("h1",null,"SvelteKit",-1),m4=s("p",null,"Component Slot",-1),h4=s("ul",null,[s("li",null,"Come si vede al momento la nostra app non visualizza la home page nella main content area"),s("li",null,"Questo perchè al momento il componente layout NON include nessuna ltro componente (home page)"),s("li",null,[p("Per poter risolvere questo problema dobbiamo ricorrere ad un concetto di Svelte chiamato "),s("code",null,"Component Slots")]),s("li",null,"In pratica in modo analogo ai tag HTML che possono avere un contenuto")],-1),v4=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("div")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},[p("	"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("p")]),s("span",{class:"token punctuation"},">")]),p("Io sono figlio di div"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("p")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("div")]),s("span",{class:"token punctuation"},">")])])])],-1),_4=s("ul",null,[s("li",null,[p("Anche un componente Svelte può avere un contenuto (o figlio) tramite il costrutto "),s("code",null,"<slot />")]),s("li",null,[p('In altre parole all’interno di un componente Svelte possiamo decidere dove visualizzare il contenuto del "figlio" usando '),s("code",null,"<slot />")])],-1),g4={__name:"72",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[f4,m4,h4,G(i,Ke({},{ranges:[""]}),{default:I(()=>[v4]),_:1},16),_4]),_:1},16)}}},b4=A(g4,[["__file","/@slidev/slides/72.md"]]),y4=s("h1",null,"SvelteKit",-1),w4=s("p",null,"Component Slot",-1),S4=s("ul",null,[s("li",null,"Modifichiamo +layout.svelte aggiungendo lo slot nella sezione article")],-1),x4=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},"... "),p(`
`),s("span",{class:"line"},[p("   "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("article")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},[p("      "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("slot")]),p(),s("span",{class:"token punctuation"},"/>")])]),p(`
`),s("span",{class:"line"},[p("   "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("article")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},"...")])],-1),k4=s("ul",null,[s("li",null,"In questo modo nella sezione article comparirà il contenuto del componente correntemente in utilizzio (home page o +page.svelte in src/routes)")],-1),$4={__name:"73",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[y4,w4,S4,G(i,Ke({},{ranges:[""]}),{default:I(()=>[x4]),_:1},16),k4]),_:1},16)}}},I4=A($4,[["__file","/@slidev/slides/73.md"]]),O4="/TPSI/4/svelte/assets/svelte_026-bb839bc1.png",z4=s("h1",null,"SvelteKit",-1),E4=s("p",null,"Component Slot",-1),T4=s("img",{src:O4,class:"mx-auto",width:"650"},null,-1),C4={__name:"74",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[z4,E4,T4]),_:1},16))}},A4=A(C4,[["__file","/@slidev/slides/74.md"]]),M4="/TPSI/4/svelte/assets/svelte_027-b9352cfd.png",P4=s("h1",null,"SvelteKit",-1),K4=s("p",null,"Hello World: Esercitazione_08",-1),L4=s("ul",null,[s("li",null,"Provare a modificare la home page in modo che appaia come in figura")],-1),R4=s("br",null,null,-1),W4=s("img",{src:M4,class:"mx-auto",width:"630"},null,-1),H4={__name:"75",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[P4,K4,L4,R4,W4]),_:1},16))}},N4=A(H4,[["__file","/@slidev/slides/75.md"]]),F4=s("h1",null,"SvelteKit",-1),D4=s("p",null,"Pagina Chi Sono",-1),j4=s("ul",null,[s("li",null,'Adesso creiamo la pagina "Chi Sono"'),s("li",null,"In questa pagina faremo una breve introduzione di noi stessi"),s("li",null,"E’ importante che nella descrizione di noi stessi includiamo cognome, nome ed età (questo ci sarà utile dopo)"),s("li",null,'Quindi per creare la pagina "Chi Sono" creiamo una directory in modo da ottenere questo risultato')],-1),V4=s("pre",{class:"slidev-code language-bash"},[s("code",null,[s("span",{class:"line"},"src"),p(`
`),s("span",{class:"line"},"├── app.html"),p(`
`),s("span",{class:"line"},"└── routes"),p(`
`),s("span",{class:"line"},[p("    ├── chi_sono     "),s("span",{class:"token operator"},"<"),p("---------- routes corrispondente alla pagina")]),p(`
`),s("span",{class:"line"},[p("    │   └── +page.svelte  "),s("span",{class:"token operator"},"<"),p("------ componente o pagina HTML")]),p(`
`),s("span",{class:"line"},"    ├── +layout.svelte"),p(`
`),s("span",{class:"line"},"    └── +page.svelte")])],-1),B4={__name:"76",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[F4,D4,j4,G(i,Ke({},{ranges:[""]}),{default:I(()=>[V4]),_:1},16)]),_:1},16)}}},q4=A(B4,[["__file","/@slidev/slides/76.md"]]),U4="/TPSI/4/svelte/assets/svelte_029-5b49b40e.png",J4=s("h1",null,"SvelteKit",-1),Y4=s("p",null,"Pagina Chi Sono",-1),Q4=s("p",null,"+page.svelte",-1),Z4=s("br",null,null,-1),G4=s("img",{src:U4,class:"mx-auto",width:"600"},null,-1),X4={__name:"77",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[J4,Y4,Q4,Z4,G4]),_:1},16))}},eP=A(X4,[["__file","/@slidev/slides/77.md"]]),tP="/TPSI/4/svelte/assets/svelte_030-3eb3d437.png",nP=s("h1",null,"SvelteKit",-1),oP=s("p",null,"Pagina Chi Sono",-1),iP=s("ul",null,[s("li",null,'Ora dobbiamo collegare la nuova pagina "Chi Sono" con la barra di navigazione'),s("li",null,"Basta modificare il link in questo modo")],-1),sP=s("br",null,null,-1),lP=s("img",{src:tP,class:"mx-auto",width:"600"},null,-1),aP=s("br",null,null,-1),rP=s("ul",null,[s("li",null,"In tal modo quando clicchiamo sul link Chi Sono la pagina omonima verrà visualizzata nella main content area")],-1),cP={__name:"78",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[nP,oP,iP,sP,lP,aP,rP]),_:1},16))}},uP=A(cP,[["__file","/@slidev/slides/78.md"]]),dP="/TPSI/4/svelte/assets/svelte_028-0d92289a.png",pP=s("h1",null,"SvelteKit",-1),fP=s("p",null,"Pagina Chi Sono",-1),mP=s("img",{src:dP,class:"mx-auto",width:"650"},null,-1),hP={__name:"79",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[pP,fP,mP]),_:1},16))}},vP=A(hP,[["__file","/@slidev/slides/79.md"]]),_P=s("h1",null,"SvelteKit",-1),gP=s("p",null,"Il componente WhoAmI",-1),bP=s("ul",null,[s("li",null,[p('Ora trasformiamo la pagina "Chi Sono" in modo che visualizzi un solo componente chiamato '),s("em",null,[s("strong",null,"WhoAmI")])]),s("li",null,[p("Quindi creiamo un nuovo componente "),s("em",null,[s("strong",null,"WhoAmI")])])],-1),yP=s("pre",{class:"slidev-code language-bash"},[s("code",null,[s("span",{class:"line"},"src"),p(`
`),s("span",{class:"line"},"├── app.html"),p(`
`),s("span",{class:"line"},"├── lib"),p(`
`),s("span",{class:"line"},"│   └── components"),p(`
`),s("span",{class:"line"},[p("│       └── who_am_i.svelte "),s("span",{class:"token operator"},"<"),p("--- componente WhoAmI")]),p(`
`),s("span",{class:"line"},"└── routes"),p(`
`),s("span",{class:"line"},"    ├── chi_sono"),p(`
`),s("span",{class:"line"},"    │   └── +page.svelte"),p(`
`),s("span",{class:"line"},"    ├── +layout.svelte"),p(`
`),s("span",{class:"line"},"    └── +page.svelte")])],-1),wP={__name:"80",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[_P,gP,bP,G(i,Ke({},{ranges:[""]}),{default:I(()=>[yP]),_:1},16)]),_:1},16)}}},SP=A(wP,[["__file","/@slidev/slides/80.md"]]),xP="/TPSI/4/svelte/assets/svelte_031-160c930b.png",kP="/TPSI/4/svelte/assets/svelte_032-a782ee2a.png",$P=s("h1",null,"SvelteKit",-1),IP=s("p",null,"Il componente WhoAmI",-1),OP=s("p",null,"who_am_i.svelte",-1),zP=s("img",{src:xP,class:"mx-auto",width:"600"},null,-1),EP=s("br",null,null,-1),TP=s("ul",null,[s("li",null,"Ora modifichiamo la pagina Chi Sono in modo che visualizzi il componente")],-1),CP=s("br",null,null,-1),AP=s("img",{src:kP,class:"mx-auto",width:"600"},null,-1),MP={__name:"81",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[$P,IP,OP,zP,EP,TP,CP,AP]),_:1},16))}},PP=A(MP,[["__file","/@slidev/slides/81.md"]]),KP="/TPSI/4/svelte/assets/svelte_033-24b7a0e4.png",LP=s("h1",null,"SvelteKit",-1),RP=s("p",null,"Il componente WhoAmI",-1),WP=s("img",{src:KP,class:"mx-auto",width:"550"},null,-1),HP={__name:"82",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[LP,RP,WP]),_:1},16))}},NP=A(HP,[["__file","/@slidev/slides/82.md"]]),FP=s("h1",null,"SvelteKit",-1),DP=s("p",null,"Props",-1),jP=s("ul",null,[s("li",null,[p("Ora tramite un meccanismo di Svelte che si chiama "),s("code",null,"Props"),p(" (Properties) vogliamo rendere il componente parametrico")]),s("li",null,"In altre parole vogliamo fare in modo che nome, cognome e età non siano scritti direttamente nel componente WhoAmI"),s("li",null,"Al contrario vogliamo che questi siano dei parametri che vengono passati dal chiamante (la pagina Chi Sono)")],-1),VP=s("br",null,null,-1),BP={__name:"83",setup(e){const t={};return $(C),(n,o)=>{const i=Mr;return y(),z(F,N(H(t)),{default:I(()=>[FP,DP,jP,VP,G(i,{bg:"green",fg:"yellow"},{default:I(()=>[p("Tramile le Props di Svelte possiamo quindi creare dei componenti parametrici e quindi più facoilmente riutilizzabili ina ltre pagine o altre applicazioni web")]),_:1})]),_:1},16)}}},qP=A(BP,[["__file","/@slidev/slides/83.md"]]),UP=s("h1",null,"SvelteKit",-1),JP=s("p",null,"Props",-1),YP=s("ul",null,[s("li",null,[p("In Svelte, all’interno di un componente per dichiarare un parametro o "),s("code",null,"propeietà"),p(" si utilizza la keyword "),s("code",null,"export")]),s("li",null,"Questa keyword preceduta alla dichiarazione di una variabile, indica al compilatore che il valroe della variabile viene fornito dall’esterno del componente"),s("li",null,"In altre parole dice a Svelte che questa variabile viene passata dal chiamante (a tutti gli effetti rendendo la variabile export come un parametro di una funzione in C)")],-1),QP=s("p",null,"Esempio",-1),ZP=s("pre",{class:"slidev-code language-js"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token keyword"},"export"),p(),s("span",{class:"token keyword"},"let"),p(" nome"),s("span",{class:"token punctuation"},";"),p("  "),s("span",{class:"token comment"},"//dichiara la variabile nome come parametro fornito dal chiamante")]),p(`
`),s("span",{class:"line"},[s("span",{class:"token keyword"},"export"),p(),s("span",{class:"token keyword"},"let"),p(" cognome "),s("span",{class:"token operator"},"="),p(),s("span",{class:"token string"},'"Rossi"'),s("span",{class:"token punctuation"},";"),p(),s("span",{class:"token comment"},"//variabile esterna con valore di feault Rossi")]),p(`
`),s("span",{class:"line"},[s("span",{class:"token keyword"},"export"),p(),s("span",{class:"token keyword"},"let"),p(" eta"),s("span",{class:"token punctuation"},";"),p(),s("span",{class:"token comment"},"//dichiara la variabile nome come parametro fornito dal chiamante")])])],-1),GP=s("br",null,null,-1),XP=s("ul",null,[s("li",null,[p("Il meccanismo delle "),s("code",null,"Props"),p(" di Svelte è molto potente e di facile utilizzo")])],-1),e3={__name:"84",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[UP,JP,YP,QP,G(i,Ke({},{ranges:[""]}),{default:I(()=>[ZP]),_:1},16),GP,XP]),_:1},16)}}},t3=A(e3,[["__file","/@slidev/slides/84.md"]]),n3="/TPSI/4/svelte/assets/svelte_034-820ec76b.png",o3=s("h1",null,"SvelteKit",-1),i3=s("p",null,"Props",-1),s3=s("ul",null,[s("li",null,[p("Pertanto riscriviamo il componente WhoAmI utilizzando le "),s("em",null,[s("strong",null,"Props")])])],-1),l3=s("br",null,null,-1),a3=s("img",{src:n3,class:"mx-auto",width:"700"},null,-1),r3=s("br",null,null,-1),c3=s("ul",null,[s("li",null,[p("Abbiamo usato il "),s("em",null,"variable substitution di svelte"),p(" per utilizzare i parametri all’interno del corpo HTML del componente")])],-1),u3={__name:"85",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[o3,i3,s3,l3,a3,r3,c3]),_:1},16))}},d3=A(u3,[["__file","/@slidev/slides/85.md"]]),p3="/TPSI/4/svelte/assets/svelte_035-8a0ca6bf.png",f3=s("h1",null,"SvelteKit",-1),m3=s("p",null,"Props",-1),h3=s("img",{src:p3,class:"mx-auto",width:"750"},null,-1),v3=s("br",null,null,-1),_3={__name:"86",setup(e){const t={};return $(C),(n,o)=>{const i=Mr;return y(),z(F,N(H(t)),{default:I(()=>[f3,m3,h3,v3,G(i,{bg:"green",fg:"yellow"},{default:I(()=>[p(" Siccome non abbiamo modificato il chiamante, vengono utilizzati i valori di default per le props del componente ")]),_:1})]),_:1},16)}}},g3=A(_3,[["__file","/@slidev/slides/86.md"]]),b3="/TPSI/4/svelte/assets/svelte_036-c62c9040.png",y3=s("h1",null,"SvelteKit",-1),w3=s("p",null,"Props",-1),S3=s("ul",null,[s("li",null,"Modifichiamo ora il chiamante e cioè la pagina Chi Sono in modo da passare dei parametri corretti al componente WhoAmI")],-1),x3=s("br",null,null,-1),k3=s("img",{src:b3,class:"mx-auto",width:"750"},null,-1),$3={__name:"87",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[y3,w3,S3,x3,k3]),_:1},16))}},I3=A($3,[["__file","/@slidev/slides/87.md"]]),O3="/TPSI/4/svelte/assets/svelte_037-55bef59f.png",z3=s("h1",null,"SvelteKit",-1),E3=s("p",null,"Props",-1),T3=s("img",{src:O3,class:"mx-auto",width:"750"},null,-1),C3={__name:"88",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[z3,E3,T3]),_:1},16))}},A3=A(C3,[["__file","/@slidev/slides/88.md"]]),M3="/TPSI/4/svelte/assets/svelte_038-d542d0ee.png",P3=s("h1",null,"SvelteKit",-1),K3=s("p",null,"Props",-1),L3=s("ul",null,[s("li",null,"Cosa succede se chiamo due volte il componente WhoAmI dalla pagina Chi Sono?"),s("li",null,"Quello che ci aspettiamo: vengono visualizzati due componenti ognuno con i propri parametri")],-1),R3=s("br",null,null,-1),W3=s("img",{src:M3,class:"mx-auto",width:"700"},null,-1),H3={__name:"89",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[P3,K3,L3,R3,W3]),_:1},16))}},N3=A(H3,[["__file","/@slidev/slides/89.md"]]),F3="/TPSI/4/svelte/assets/svelte_039-36fde834.png",D3=s("h1",null,"SvelteKit",-1),j3=s("p",null,"Props",-1),V3=s("img",{src:F3,class:"mx-auto",width:"600"},null,-1),B3={__name:"90",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[D3,j3,V3]),_:1},16))}},q3=A(B3,[["__file","/@slidev/slides/90.md"]]),U3=s("h1",null,"SvelteKit",-1),J3=s("p",null,"Props",-1),Y3=s("ul",null,[s("li",null,"xxx")],-1),Q3={__name:"91",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[U3,J3,Y3]),_:1},16))}},Z3=A(Q3,[["__file","/@slidev/slides/91.md"]]),G3=s("h1",null,"SvelteKit",-1),X3=s("p",null,"Dynamic Attributes",-1),e6=s("ul",null,[s("li",null,"xxx"),s("li")],-1),t6=s("p",null,[s("a",{href:"https://svelte.dev/tutorial/dynamic-attributes",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/dynamic-attributes")],-1),n6={__name:"92",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[G3,X3,e6,t6]),_:1},16))}},o6=A(n6,[["__file","/@slidev/slides/92.md"]]),i6=s("h1",null,"SvelteKit",-1),s6=s("p",null,"Bindings",-1),l6=s("ul",null,[s("li",null,"refwdsqa")],-1),a6=s("p",null,[s("a",{href:"https://svelte.dev/tutorial/text-inputs",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/text-inputs")],-1),r6={__name:"93",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[i6,s6,l6,a6]),_:1},16))}},c6=A(r6,[["__file","/@slidev/slides/93.md"]]),u6=s("h1",null,"SvelteKit",-1),d6=s("p",null,"Component Bindings",-1),p6=s("ul",null,[s("li",null,"refwdsqa")],-1),f6=s("p",null,[s("a",{href:"https://svelte.dev/tutorial/component-bindings",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/component-bindings")],-1),m6={__name:"94",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[u6,d6,p6,f6]),_:1},16))}},h6=A(m6,[["__file","/@slidev/slides/94.md"]]),v6=s("h1",null,"SvelteKit",-1),_6=s("p",null,"Logic Statements",-1),g6=s("ul",null,[s("li",null,"rfewds")],-1),b6=s("p",null,[s("a",{href:"https://svelte.dev/tutorial/if-blocks",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/if-blocks")],-1),y6={__name:"95",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[v6,_6,g6,b6]),_:1},16))}},w6=A(y6,[["__file","/@slidev/slides/95.md"]]),S6=s("h1",null,"SvelteKit",-1),x6=s("p",null,"Each block",-1),k6=s("ul",null,[s("li",null,"rfewds")],-1),$6=s("p",null,[s("a",{href:"https://svelte.dev/tutorial/each-blocks",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/each-blocks")],-1),I6={__name:"96",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[S6,x6,k6,$6]),_:1},16))}},O6=A(I6,[["__file","/@slidev/slides/96.md"]]),z6=s("h1",null,"SvelteKit",-1),E6=s("p",null,"Advances Styling",-1),T6=s("ul",null,[s("li",null,"xxx")],-1),C6=s("p",null,[s("a",{href:"https://svelte.dev/tutorial/classes",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/classes")],-1),A6={__name:"97",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[z6,E6,T6,C6]),_:1},16))}},M6=A(A6,[["__file","/@slidev/slides/97.md"]]),P6=s("h1",null,"SvelteKit",-1),K6=s("p",null,"Reactivity",-1),L6=s("ul",null,[s("li",null,"xxx")],-1),R6=s("p",null,[s("a",{href:"https://svelte.dev/tutorial/reactive-assignments",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/reactive-assignments")],-1),W6={__name:"98",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[P6,K6,L6,R6]),_:1},16))}},H6=A(W6,[["__file","/@slidev/slides/98.md"]]),N6=s("h1",null,"SvelteKit",-1),F6=s("p",null,"DOM Events",-1),D6=s("ul",null,[s("li",null,"erfcds")],-1),j6=s("p",null,[s("a",{href:"https://svelte.dev/tutorial/dom-events",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/dom-events")],-1),V6={__name:"99",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[N6,F6,D6,j6]),_:1},16))}},B6=A(V6,[["__file","/@slidev/slides/99.md"]]),q6=s("h1",null,"SvelteKit",-1),U6=s("p",null,"Component Events",-1),J6=s("ul",null,[s("li",null,"rfewd")],-1),Y6=s("p",null,[s("a",{href:"https://svelte.dev/tutorial/component-events",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/component-events")],-1),Q6={__name:"100",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[q6,U6,J6,Y6]),_:1},16))}},Z6=A(Q6,[["__file","/@slidev/slides/100.md"]]),G6=s("h1",null,"SvelteKit",-1),X6=s("p",null,"Stores",-1),e5=s("ul",null,[s("li",null,"rfedwsa")],-1),t5=s("p",null,[s("a",{href:"https://svelte.dev/tutorial/writable-stores",target:"_blank",rel:"noopener"},"https://svelte.dev/tutorial/writable-stores")],-1),n5={__name:"101",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[G6,X6,e5,t5]),_:1},16))}},o5=A(n5,[["__file","/@slidev/slides/101.md"]]),i5=s("h1",null,"SvelteKit",-1),s5=s("p",null,"Creazione Web App",-1),l5=s("ul",null,[s("li",null,"ddd")],-1),a5={__name:"102",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[i5,s5,l5]),_:1},16))}},r5=A(a5,[["__file","/@slidev/slides/102.md"]]),c5=s("h1",null,"SvelteKit",-1),u5=s("p",null,"Creazione Web App",-1),d5=s("ul",null,[s("li",null,"ddd")],-1),p5={__name:"103",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[c5,u5,d5]),_:1},16))}},f5=A(p5,[["__file","/@slidev/slides/103.md"]]),m5=s("h1",null,"SvelteKit",-1),h5=s("p",null,"Creazione Web App",-1),v5=s("ul",null,[s("li",null,"ddd")],-1),_5={__name:"104",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[m5,h5,v5]),_:1},16))}},g5=A(_5,[["__file","/@slidev/slides/104.md"]]),b5=s("h1",null,"SvelteKit",-1),y5=s("p",null,"Creazione Web App",-1),w5=s("ul",null,[s("li",null,"ddd")],-1),S5={__name:"105",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[b5,y5,w5]),_:1},16))}},x5=A(S5,[["__file","/@slidev/slides/105.md"]]),k5=s("h1",null,"SvelteKit",-1),$5=s("p",null,"Creazione Web App",-1),I5=s("ul",null,[s("li",null,"ddd")],-1),O5={__name:"106",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[k5,$5,I5]),_:1},16))}},z5=A(O5,[["__file","/@slidev/slides/106.md"]]),E5=s("h1",null,"SvelteKit",-1),T5=s("p",null,"Creazione Web App",-1),C5=s("ul",null,[s("li",null,"ddd")],-1),A5={__name:"107",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[E5,T5,C5]),_:1},16))}},M5=A(A5,[["__file","/@slidev/slides/107.md"]]),P5=s("h1",null,"SvelteKit",-1),K5=s("p",null,"Creazione Web App",-1),L5=s("ul",null,[s("li",null,"ddd"),s("li")],-1),R5={__name:"108",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[P5,K5,L5]),_:1},16))}},W5=A(R5,[["__file","/@slidev/slides/108.md"]]),H5=s("h1",null,"BLANK",-1),N5={__name:"109",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[H5]),_:1},16))}},F5=A(N5,[["__file","/@slidev/slides/109.md"]]),D5=s("h1",null,"Svelte",-1),j5=s("p",null,"Stateful component",-1),V5=s("ul",null,[s("li",null,"Uno dei problemi tradizionali dello sviluppo di app web è la gestione dello stato"),s("li",null,[p("Questo problema è intrinseco in quanto il protcollo HTTP è "),s("strong",null,"stateless"),p(" o senza stato")]),s("li",null,"Svelte risolve brillantemente questo problema permettendo di immagazzinare lo stato del componente direttamente all’interno del componente stesso"),s("li",null,"Pertanto un componente Svelte è assimilabile a tutti gli effetti ad un oggetto in base alla definizione OOP"),s("li",null,[p("Un componente svelte implementa il meccanismo del "),s("code",null,"encapsulation")])],-1),B5={__name:"110",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[D5,j5,V5]),_:1},16))}},q5=A(B5,[["__file","/@slidev/slides/110.md"]]),U5=s("h1",null,"Svelte",-1),J5=s("p",null,"Stateful component",-1),Y5=s("ul",null,[s("li",null,"Ogni componente, oltre a definire il markup, la logica CSS e JavaScript, può ospitare il proprio stato."),s("li",null,"Lo stato è un qualsiasi dato necessario per il corretto funzionamento del componente stesso e dell’applicazione"),s("li",null,'Ad esempio, se un campo di input di un modulo contiene la stringa "test", ci sarà una variabile da qualche parte che contiene questo valore.'),s("li",null,"Questo è lo stato del campo di input."),s("li",null,"Il campo è selezionato? Una variabile da qualche parte registrerà questo fatto. E così via."),s("li",null,[p("Lo stato è ospitato nella sezione "),s("code",null,"<script>"),p(" del componente")])],-1),Q5=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("script")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},"	let count = 0; // stato di un contatore"),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("script")]),s("span",{class:"token punctuation"},">")])])])],-1),Z5={__name:"111",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[U5,J5,Y5,G(i,Ke({},{ranges:[""]}),{default:I(()=>[Q5]),_:1},16)]),_:1},16)}}},G5=A(Z5,[["__file","/@slidev/slides/111.md"]]),X5=s("h1",null,"Svelte",-1),eK=s("p",null,"Stateful component",-1),tK=s("ul",null,[s("li",null,"Ma come si aggiorna lo statro di un componente?"),s("li",null,"Altri framework come Vue o React, rendono questa operazione poco intuitiva"),s("li",null,"Al contrario una cosa grandiosa di Svelte è che non è necessario fare nulla di speciale per aggiornare lo stato di un componente."),s("li",null,"Basta solo un’operazione di assegnazione in qualsiasi parte del componente")],-1),nK=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),p("script")]),s("span",{class:"token punctuation"},">")])]),p(`
`),s("span",{class:"line"},"	let count = 0;"),p(`
`),s("span",{class:"line"}),p(`
`),s("span",{class:"line"},"	function incrementa() {"),p(`
`),s("span",{class:"line"},"		count++;"),p(`
`),s("span",{class:"line"},"	}"),p(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),p("script")]),s("span",{class:"token punctuation"},">")])])])],-1),oK={__name:"112",setup(e){const t={};return $(C),(n,o)=>{const i=Ve;return y(),z(F,N(H(t)),{default:I(()=>[X5,eK,tK,G(i,Ke({},{ranges:[""]}),{default:I(()=>[nK]),_:1},16)]),_:1},16)}}},iK=A(oK,[["__file","/@slidev/slides/112.md"]]),sK="/TPSI/4/svelte/assets/svelte_12-be5c0d6c.png",lK=s("h1",null,"Svelte",-1),aK=s("p",null,"Stateful component",-1),rK=s("ul",null,[s("li",null,"Vediamo un esempio completo")],-1),cK=s("img",{src:sK,class:"centro"},null,-1),uK=s("ul",null,[s("li",null,[p("Anche in questo caso l’applicazione è solo "),s("br"),p(" un contenitore per i componenti che implementano "),s("br"),p(" la UI e le funzionalità desiderate")])],-1),dK={__name:"113",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[lK,aK,rK,cK,uK]),_:1},16))}},pK=A(dK,[["__file","/@slidev/slides/113.md"]]),fK="/TPSI/4/svelte/assets/svelte_13-ebdf894b.png",mK=s("h1",null,"Svelte",-1),hK=s("p",null,"Stateful component",-1),vK=s("img",{src:fK,class:"centro"},null,-1),_K=s("ul",null,[s("li",null,[p("Ad ogni pressione del bottone viene invocata "),s("br"),p(" una funzione (metodo) interno del componente")]),s("li",null,[p("Il metodo incrementa la variabile di "),s("br"),p(" stato del contatore")]),s("li",null,[p("Come detto in precedenza, lo stato di "),s("br"),p(" un componente Svelte si modifica con "),s("br"),p(" una semplice assegnazione")]),s("li",null,"Più intuitivo di così non è proprio possibile :)")],-1),gK=s("br",null,null,-1),bK=s("div",{style:{"background-color":"green",color:"yellow",padding:"20px",width:"50%"}}," Per modificare lo stato di un componente è SEMPRE necessario effettuare un'operazione di assegnamento ",-1),yK={__name:"114",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[mK,hK,vK,_K,gK,bK]),_:1},16))}},wK=A(yK,[["__file","/@slidev/slides/114.md"]]),SK="/TPSI/4/svelte/assets/svelte_14-215502e9.png",xK=s("h1",null,"Svelte",-1),kK=s("p",null,"Stateful component",-1),$K=s("img",{src:SK,class:"mx-auto w-300"},null,-1),IK={__name:"115",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[xK,kK,$K]),_:1},16))}},OK=A(IK,[["__file","/@slidev/slides/115.md"]]),zK=s("h1",null,"Svelte",-1),EK=s("p",null,"Esercizio svelte_03",-1),TK=s("ul",null,[s("li",null,"Implementare l’applicazione ed il componente Contatore visti a lezione"),s("li",null,"Aggiungere anche la funzionalità di decremento del contatore"),s("li",null,[s("em",null,"Consgenare tutta la directory |cognome|_svelte_03 ad escusione della sub-directory node_modules")])],-1),CK={__name:"116",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[zK,EK,TK]),_:1},16))}},AK=A(CK,[["__file","/@slidev/slides/116.md"]]),MK=s("h1",null,"Svelte",-1),PK=s("p",null,"todoS WebApp",-1),KK=s("ul",null,[s("li",null,"Sviluppiamo una SPA WebApp che permette di gestire una ToDo List personale"),s("li",null,"Lo scopo è di capire ed applicare vari concetti introdotti da Svelte")],-1),LK=s("p",null,"SPECIFICA di todoS",-1),RK=s("ul",null,[s("li",null,"L’applicazione todoS permette la gestione di una todo list personale"),s("li",null,[p("L’utente deve essere in grado di: "),s("ul",null,[s("li",null,"inserire nuovi todo"),s("li",null,"modificare todo esistenit"),s("li",null,"eliminare todo esistenti"),s("li",null,[p("per ogni todo è possibile specificare un titolo ed una prioprità a scelta tra: "),s("ul",null,[s("li",null,"HIGH"),s("li",null,"MED"),s("li",null,"LOW")])])])])],-1),WK={__name:"117",setup(e){const t={};return $(C),(n,o)=>(y(),z(F,N(H(t)),{default:I(()=>[MK,PK,KK,LK,RK]),_:1},16))}},HK=A(WK,[["__file","/@slidev/slides/117.md"]]),NK=[{path:"1",name:"page-1",component:$2,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",as:"2023/2024",version:"1.1.2",title:"Svelte e SvelteKit",slide:{raw:`---
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

<img src="/media/svelte_001.png" class="mx-auto" style="margin-top:2rem;" width="500" />`,frontmatter:{},index:3,start:65,end:76,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Z2,meta:{slide:{raw:`
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

<img src="/media/svelte_004.png" class="mx-auto" style="margin-top:0rem;" width="800" />`,frontmatter:{},index:7,start:119,end:127,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:SI,meta:{slide:{raw:`
# Introduzione

Framework JS

- I principali [framework](https://en.wikipedia.org/wiki/Software_framework) degli ultimi anni sono

<img src="/media/svelte_002.png" class="mx-auto" style="margin-top:0rem;" width="600" />
`,title:"Introduzione",level:1,content:`# Introduzione

Framework JS

- I principali [framework](https://en.wikipedia.org/wiki/Software_framework) degli ultimi anni sono

<img src="/media/svelte_002.png" class="mx-auto" style="margin-top:0rem;" width="600" />`,frontmatter:{},index:8,start:128,end:137,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:OI,meta:{slide:{raw:`
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
- Da ciò ne consegue che una  moderna applicazione web è composta da uno o più componenti indipendenti che interagiscono tra loro per fornire il layout e la funzionalità desiderata`,frontmatter:{},index:10,start:152,end:169,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:FI,meta:{slide:{raw:`
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

<img src="/media/svelte_006.png" class="mx-auto" width="600" />`,frontmatter:{},index:12,start:182,end:189,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:eO,meta:{slide:{raw:`
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

[https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks)`,frontmatter:{},index:13,start:190,end:207,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:lO,meta:{slide:{raw:`
# SvelteKit

Introduzione

<img src="/media/svelte_00.png" class="mx-auto" width="750" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Introduzione

<img src="/media/svelte_00.png" class="mx-auto" width="750" />`,frontmatter:{},index:14,start:208,end:216,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:dO,meta:{slide:{raw:`
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
- In altre parole \`Svelte è un compilatore\` che trasforma il codice della tua applicazione Web in puro JavaScript, raggiungendo così massime prestazioni`,frontmatter:{},index:15,start:217,end:228,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:gO,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:16,start:229,end:244,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:xO,meta:{slide:{raw:`
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
- Per raggiungere questo obiettivo, React introduce un overhead (la libreria), che verrà eseguito nel motore JS del browser per monitorare e aggiornare il DOM in base alle varie interazioni dell'utente.`,frontmatter:{},index:17,start:245,end:256,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:EO,meta:{slide:{raw:`
# SvelteKit

Svelte vs Others

<img src="/media/svelte_01.png" class="mx-auto w-160" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte vs Others

<img src="/media/svelte_01.png" class="mx-auto w-160" />`,frontmatter:{},index:18,start:257,end:264,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:LO,meta:{slide:{raw:`
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

<img src="/media/svelte_003.png" class="mx-auto" width="480" style="margin-top:20px" />`,frontmatter:{},index:19,start:265,end:276,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:VO,meta:{slide:{raw:`
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
- Alcuni sviluppatori potrebbero non preferire l'uso di sintassi speciali come #if e #each all'interno dei loro modelli e preferirebbero invece utilizzare JavaScript puro, come consentito da React.`,frontmatter:{},index:20,start:277,end:295,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:YO,meta:{slide:{raw:`
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
- SvelteKit e Svelte sono **totalmente allineati** al paradigma e modello di sviluppo per componenti caratteristico del web moderno.`,frontmatter:{},index:21,start:296,end:307,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:ez,meta:{slide:{raw:`
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
  - Supporto per diversi hosting providers molto comuni su Internet (vercel, netlify, ...)`,frontmatter:{},index:22,start:308,end:324,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:rz,meta:{slide:{raw:`
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
- Sveltekit è un \`full stack framework\` ricco di funzionalità e permette lo sviluppo di un applicazione web completa di back-end e front-end`,frontmatter:{},index:23,start:325,end:342,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:mz,meta:{slide:{raw:`
# SvelteKit

Web App Architecture

<img src="/media/svelte_005.png" class="mx-auto" width="900" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Web App Architecture

<img src="/media/svelte_005.png" class="mx-auto" width="900" />`,frontmatter:{},index:24,start:343,end:351,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:wz,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:25,start:352,end:369,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Ez,meta:{slide:{raw:`
# SvelteKit

Svelte Components

- Ecco la struttura di un componente Svelte

<br>

<img src="/media/svelte_007.png" class="mx-auto" width="700" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte Components

- Ecco la struttura di un componente Svelte

<br>

<img src="/media/svelte_007.png" class="mx-auto" width="700" />`,frontmatter:{},index:26,start:370,end:382,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Kz,meta:{slide:{raw:`
# SvelteKit

Esempio di componente Svelte
 
<img src="/media/svelte_008.png" class="mx-auto" width="350" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Esempio di componente Svelte
 
<img src="/media/svelte_008.png" class="mx-auto" width="350" />`,frontmatter:{},index:27,start:383,end:391,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Dz,meta:{slide:{raw:`
# SvelteKit

Svelte Components

<br><br>

<img src="/media/svelte_04.png" class="mx-auto" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte Components

<br><br>

<img src="/media/svelte_04.png" class="mx-auto" />`,frontmatter:{},index:28,start:392,end:402,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Zz,meta:{slide:{raw:`
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
- Questo è molto utile quando riutilizzi componenti che hai già scritto per altre applicazioni o quando includi librerie Open Source pubblicate da altre persone.`,frontmatter:{},index:29,start:403,end:422,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:hE,meta:{slide:{raw:`
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
- Non ha nessuno stuile e nessuna logica di controllo`,frontmatter:{},index:30,start:423,end:437,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:wE,meta:{slide:{raw:`
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
- Include la parte di contenuto e di stile`,frontmatter:{},index:31,start:438,end:462,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:EE,meta:{slide:{raw:`
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
- un componente che fornisce accesso ad un DB nosql non ha nessuna parte di UI, ma è di grande utilità all'interno della mia applicazione.`,frontmatter:{},index:32,start:463,end:481,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:KE,meta:{slide:{raw:`
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

***Questi link sono il riferimento per gli studenti e vi suggerisco di studiarli e di utilizzarli per tutto il tempo necessario ad apprendere Svlete e SvelteKit***`,frontmatter:{},index:33,start:482,end:500,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:FE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:34,start:501,end:523,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:UE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:35,start:524,end:551,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:GE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:36,start:552,end:579,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:aT,meta:{slide:{raw:`
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

<img src="/media/svelte_0000.png" class="mx-auto" width="100" />`,frontmatter:{},index:37,start:580,end:605,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:mT,meta:{slide:{raw:`
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

- Viene automaticamente aperta una fienstra del browser che punta al seguente indirizzo: [http://localhost:5173/](http://localhost:5173/)`,frontmatter:{},index:38,start:606,end:631,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:yT,meta:{slide:{raw:`
# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_009.png" class="mx-auto" width="500" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_009.png" class="mx-auto" width="500" />`,frontmatter:{},index:39,start:632,end:639,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:IT,meta:{slide:{raw:`
# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_010.png" class="mx-auto" width="450" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_010.png" class="mx-auto" width="450" />`,frontmatter:{},index:40,start:640,end:647,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:CT,meta:{slide:{raw:`
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
  5. **Una pagina(componente) può includere uno o più componenti esterni**`,frontmatter:{},index:41,start:648,end:660,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:RT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:42,start:661,end:686,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:DT,meta:{slide:{raw:`
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

- **Segue ora un'analisi live a cura del professore (\`necessario prendere appunti\`)**`,frontmatter:{},index:43,start:687,end:701,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:UT,meta:{slide:{raw:`
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
<img src="/media/svelte_012.png" class="mx-auto" width="700" />`,frontmatter:{},index:46,start:722,end:733,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:mC,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_04

- provare a modificare la pagina about in modo che appaia come in figura
  
<img src="/media/svelte_013.png" class="mx-auto" width="600" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_04

- provare a modificare la pagina about in modo che appaia come in figura
  
<img src="/media/svelte_013.png" class="mx-auto" width="600" />`,frontmatter:{},index:47,start:734,end:744,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:SC,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_05

- provare a modificare il componente counter in modo che si incrementi o decrementi di due unità alla pressione dei pulsati + o -

<br>  
<img src="/media/svelte_014.png" class="mx-auto" width="600" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_05

- provare a modificare il componente counter in modo che si incrementi o decrementi di due unità alla pressione dei pulsati + o -

<br>  
<img src="/media/svelte_014.png" class="mx-auto" width="600" />`,frontmatter:{},index:48,start:745,end:755,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:zC,meta:{slide:{raw:`
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

- Ora editiamo il file banner.svelte ed utilizziamo il codice di slide #28`,frontmatter:{},index:50,start:768,end:793,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:DC,meta:{slide:{raw:`
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
<img src="/media/svelte_016.png" class="mx-auto" width="600" />`,frontmatter:{},index:54,start:856,end:866,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:mA,meta:{slide:{raw:`
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

<img src="/media/svelte_018.png" class="mx-auto" width="500" />`,frontmatter:{},index:59,start:943,end:951,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:QA,meta:{slide:{raw:`
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
- Questo ci permetterà di comprendere altri meccanismi e come è realmente organizzata un'applicazione sveltekit`,frontmatter:{},index:62,start:988,end:1e3,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:mM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:63,start:1001,end:1029,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:SM,meta:{slide:{raw:`
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
- L'obiettivo è comprendere il funzionamento e l'organizzazione di un'app sveltekit`,frontmatter:{},index:64,start:1030,end:1043,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:EM,meta:{slide:{raw:`
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
<img src="/media/svelte_023.png" class="mx-auto" width="360" style="position: relative; left: 200px;top: -500px;"/>`,frontmatter:{},index:67,start:1075,end:1085,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:YM,meta:{slide:{raw:`
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

- In tal modo quando clicchiamo sul link Chi Sono la pagina omonima verrà visualizzata nella main content area`,frontmatter:{},index:77,start:1224,end:1239,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:vP,meta:{slide:{raw:`
# SvelteKit

Pagina Chi Sono

<img src="/media/svelte_028.png" class="mx-auto" width="650" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Pagina Chi Sono

<img src="/media/svelte_028.png" class="mx-auto" width="650" />`,frontmatter:{},index:78,start:1240,end:1248,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:SP,meta:{slide:{raw:`
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

<img src="/media/svelte_039.png" class="mx-auto" width="600" />`,frontmatter:{},index:89,start:1394,end:1401,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:Z3,meta:{slide:{raw:`
# SvelteKit

Props

- xxx
`,title:"SvelteKit",level:1,content:`# SvelteKit

Props

- xxx`,frontmatter:{},index:90,start:1402,end:1409,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:o6,meta:{slide:{raw:`
# SvelteKit

Dynamic Attributes

- xxx
- 
https://svelte.dev/tutorial/dynamic-attributes

`,title:"SvelteKit",level:1,content:`# SvelteKit

Dynamic Attributes

- xxx
- 
https://svelte.dev/tutorial/dynamic-attributes`,frontmatter:{},index:91,start:1410,end:1420,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:c6,meta:{slide:{raw:`
# SvelteKit

Bindings

- refwdsqa

https://svelte.dev/tutorial/text-inputs

`,title:"SvelteKit",level:1,content:`# SvelteKit

Bindings

- refwdsqa

https://svelte.dev/tutorial/text-inputs`,frontmatter:{},index:92,start:1421,end:1431,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:h6,meta:{slide:{raw:`
# SvelteKit

Component Bindings

- refwdsqa

https://svelte.dev/tutorial/component-bindings


`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Bindings

- refwdsqa

https://svelte.dev/tutorial/component-bindings`,frontmatter:{},index:93,start:1432,end:1443,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:w6,meta:{slide:{raw:`
# SvelteKit

Logic Statements

- rfewds

https://svelte.dev/tutorial/if-blocks

`,title:"SvelteKit",level:1,content:`# SvelteKit

Logic Statements

- rfewds

https://svelte.dev/tutorial/if-blocks`,frontmatter:{},index:94,start:1444,end:1454,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:O6,meta:{slide:{raw:`
# SvelteKit

Each block

- rfewds

https://svelte.dev/tutorial/each-blocks


`,title:"SvelteKit",level:1,content:`# SvelteKit

Each block

- rfewds

https://svelte.dev/tutorial/each-blocks`,frontmatter:{},index:95,start:1455,end:1466,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:M6,meta:{slide:{raw:`
# SvelteKit

Advances Styling

- xxx

https://svelte.dev/tutorial/classes

`,title:"SvelteKit",level:1,content:`# SvelteKit

Advances Styling

- xxx

https://svelte.dev/tutorial/classes`,frontmatter:{},index:96,start:1467,end:1477,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:H6,meta:{slide:{raw:`
# SvelteKit

Reactivity

- xxx

https://svelte.dev/tutorial/reactive-assignments



`,title:"SvelteKit",level:1,content:`# SvelteKit

Reactivity

- xxx

https://svelte.dev/tutorial/reactive-assignments`,frontmatter:{},index:97,start:1478,end:1490,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:B6,meta:{slide:{raw:`
# SvelteKit

DOM Events

- erfcds

https://svelte.dev/tutorial/dom-events

`,title:"SvelteKit",level:1,content:`# SvelteKit

DOM Events

- erfcds

https://svelte.dev/tutorial/dom-events`,frontmatter:{},index:98,start:1491,end:1501,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:Z6,meta:{slide:{raw:`
# SvelteKit

Component Events

- rfewd

https://svelte.dev/tutorial/component-events

`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Events

- rfewd

https://svelte.dev/tutorial/component-events`,frontmatter:{},index:99,start:1502,end:1512,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:o5,meta:{slide:{raw:`
# SvelteKit

Stores

- rfedwsa

https://svelte.dev/tutorial/writable-stores




`,title:"SvelteKit",level:1,content:`# SvelteKit

Stores

- rfedwsa

https://svelte.dev/tutorial/writable-stores`,frontmatter:{},index:100,start:1513,end:1526,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:r5,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd

`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd`,frontmatter:{},index:101,start:1527,end:1535,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:f5,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd`,frontmatter:{},index:102,start:1536,end:1543,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:g5,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd`,frontmatter:{},index:103,start:1544,end:1551,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:x5,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd`,frontmatter:{},index:104,start:1552,end:1559,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:z5,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd`,frontmatter:{},index:105,start:1560,end:1567,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:M5,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd`,frontmatter:{},index:106,start:1568,end:1575,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:W5,meta:{slide:{raw:`
# SvelteKit

Creazione Web App

- ddd
- 
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App

- ddd
-`,frontmatter:{},index:107,start:1576,end:1584,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:F5,meta:{slide:{raw:`
# BLANK

`,title:"BLANK",level:1,content:"# BLANK",frontmatter:{},index:108,start:1585,end:1589,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:q5,meta:{slide:{raw:`
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
- Un componente svelte implementa il meccanismo del \`encapsulation\``,frontmatter:{},index:109,start:1590,end:1601,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:G5,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:110,start:1602,end:1620,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:iK,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:111,start:1621,end:1641,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:pK,meta:{slide:{raw:`
# Svelte

Stateful component

- Vediamo un esempio completo

<img src="/media/svelte_12.png" class="centro" />

- Anche in questo caso l'applicazione è solo <br> un contenitore per i componenti che implementano <br> la UI e le funzionalità desiderate	
  `,title:"Svelte",level:1,content:`# Svelte

Stateful component

- Vediamo un esempio completo

<img src="/media/svelte_12.png" class="centro" />

- Anche in questo caso l'applicazione è solo <br> un contenitore per i componenti che implementano <br> la UI e le funzionalità desiderate`,frontmatter:{},index:112,start:1642,end:1653,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:wK,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:113,start:1654,end:1671,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:OK,meta:{slide:{raw:`
# Svelte

Stateful component

<img src="/media/svelte_14.png" class="mx-auto w-300" />

`,title:"Svelte",level:1,content:`# Svelte

Stateful component

<img src="/media/svelte_14.png" class="mx-auto w-300" />`,frontmatter:{},index:114,start:1672,end:1680,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:AK,meta:{slide:{raw:`
# Svelte

Esercizio svelte_03

- Implementare l'applicazione ed il componente Contatore visti a lezione
- Aggiungere anche la funzionalità di decremento del contatore
- *Consgenare tutta la directory |cognome|_svelte_03 ad escusione della sub-directory node_modules*
`,title:"Svelte",level:1,content:`# Svelte

Esercizio svelte_03

- Implementare l'applicazione ed il componente Contatore visti a lezione
- Aggiungere anche la funzionalità di decremento del contatore
- *Consgenare tutta la directory |cognome|_svelte_03 ad escusione della sub-directory node_modules*`,frontmatter:{},index:115,start:1681,end:1690,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:HK,meta:{slide:{raw:`
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
    - LOW`,frontmatter:{},index:116,start:1691,end:1711,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",component:h2,meta:{layout:"end"}}],Ye=NK,ri=[{name:"play",path:"/",component:Hk,children:[...Ye]},{name:"print",path:"/print",component:p2},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!ai.remote||ai.remote===t.query.password)return!0;if(ai.remote&&t.query.password===void 0){const n=prompt("Enter password");if(ai.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};ri.push({path:"/presenter/print",component:()=>Mn(()=>import("./PresenterPrint-09010c6c.js"),["assets/PresenterPrint-09010c6c.js","assets/NoteDisplay-919b56a4.js"])}),ri.push({name:"notes",path:"/notes",component:()=>Mn(()=>import("./NotesView-d3757c3d.js"),["assets/NotesView-d3757c3d.js","assets/NoteDisplay-919b56a4.js"]),beforeEnter:e}),ri.push({name:"presenter",path:"/presenter/:no",component:()=>Mn(()=>import("./Presenter-848482c2.js"),["assets/Presenter-848482c2.js","assets/NoteDisplay-919b56a4.js","assets/DrawingControls-f80e4643.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:e}),ri.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const yt=Sy({history:wb("/TPSI/4/svelte/"),routes:ri});function FK(e,t,{mode:n="replace"}={}){return R({get(){const o=yt.currentRoute.value.query[e];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){it(()=>{yt[M(n)]({query:{...yt.currentRoute.value.query,[e]:o}})})}})}const Xf=Q(0);it(()=>{yt.afterEach(async()=>{await it(),Xf.value+=1})});const em=Q(0),Wt=R(()=>yt.currentRoute.value),Ro=R(()=>Wt.value.query.print!==void 0),DK=R(()=>Wt.value.query.print==="clicks"),pn=R(()=>Wt.value.query.embedded!==void 0),_t=R(()=>Wt.value.path.startsWith("/presenter")),jK=R(()=>Wt.value.path.startsWith("/notes")),_i=R(()=>Ro.value&&!DK.value),Ha=R(()=>Wt.value.query.password),VK=R(()=>!_t.value&&(!ze.remote||Ha.value===ze.remote)),Fu=FK("clicks","0"),BK=R(()=>Ye.length-1),qK=R(()=>Wt.value.path),qe=R(()=>parseInt(qK.value.split(/\//g).slice(-1)[0])||1);R(()=>pl(qe.value));const dt=R(()=>Ye.find(e=>e.path===`${qe.value}`));R(()=>{var e,t,n;return(n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});R(()=>{var e,t;return((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.layout)||(qe.value===1?"cover":"default")});const Wl=R(()=>Ye.find(e=>e.path===`${Math.min(Ye.length,qe.value+1)}`)),UK=R(()=>Ye.find(e=>e.path===`${Math.max(1,qe.value-1)}`)),JK=R(()=>{var e,t;return Xf.value,((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Lt=R({get(){if(_i.value)return 99999;let e=+(Fu.value||0);return isNaN(e)&&(e=0),e},set(e){Fu.value=e.toString()}}),Bs=R(()=>{var e,t;return+(((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.clicks)??JK.value.length)}),YK=R(()=>qe.value<Ye.length-1||Lt.value<Bs.value),QK=R(()=>qe.value>1||Lt.value>0),ZK=R(()=>Ye.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Pr(e,t),e),[])),GK=R(()=>Kr(ZK.value,dt.value));R(()=>Lr(GK.value));const XK=R(()=>iL(em.value,dt.value,UK.value));_e(dt,(e,t)=>{em.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Kn(){Bs.value<=Lt.value?Pi():Lt.value+=1}async function Ln(){Lt.value<=0?await Ki():Lt.value-=1}function pl(e){return _t.value?`/presenter/${e}`:`/${e}`}function Pi(){const e=Math.min(Ye.length,qe.value+1);return Wo(e)}async function Ki(e=!0){const t=Math.max(1,qe.value-1);await Wo(t),e&&Bs.value&&yt.replace({query:{...Wt.value.query,clicks:Bs.value}})}function Wo(e,t){return yt.push({path:pl(e),query:{...Wt.value.query,clicks:t}})}function eL(e){const t=Q(0),{direction:n,distanceX:o,distanceY:i}=j0(e,{onSwipeStart(l){l.pointerType==="touch"&&(Ci.value||(t.value=ya()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||Ci.value)return;const a=Math.abs(o.value),r=Math.abs(i.value);a/window.innerWidth>.3||a>100?n.value==="left"?Kn():Ln():(r/window.innerHeight>.4||r>200)&&(n.value==="down"?Ki():Pi())}})}async function Na(){const{saveAs:e}=await Mn(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);e(typeof ze.download=="string"?ze.download:ze.exportFilename?`${ze.exportFilename}.pdf`:"/TPSI/4/svelte/slidev-exported.pdf",`${ze.title}.pdf`)}async function tL(e){var t,n;if(e==null){const o=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Pr(e,t,n=1){var i,l,a,r,c;const o=(l=(i=t.meta)==null?void 0:i.slide)==null?void 0:l.level;o&&o>n&&e.length>0?Pr(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((a=t.meta)!=null&&a.hideInToc),title:(c=(r=t.meta)==null?void 0:r.slide)==null?void 0:c.title})}function Kr(e,t,n=!1,o){return e.map(i=>{const l={...i,active:i.path===(t==null?void 0:t.path),hasActiveParent:n};return l.children.length>0&&(l.children=Kr(l.children,t,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function Lr(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Lr(n.children,t+1)}))}const nL={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function oL(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:nL[e.name]||e.name;if(n.includes("|")){const[o,i]=n.split("|").map(l=>l.trim());n=t?i:o}if(n)return{...e,name:n}}function iL(e,t,n){var i,l;let o=e>0?(i=n==null?void 0:n.meta)==null?void 0:i.transition:(l=t==null?void 0:t.meta)==null?void 0:l.transition;return o||(o=ze.transition),oL(o,e<0)}function sL(){const e=ze.titleTemplate.replace("%s",ze.title||"Slidev");Dp({title:e,htmlAttrs:ze.htmlAttrs}),b1(`${e} - shared`),x1(`${e} - drawings`);const t=`${location.origin}_${f1()}`;function n(){jK.value||!_t.value&&!p1.includes(location.host.split(":")[0])||(_t.value?(Yo("page",+qe.value),Yo("clicks",Lt.value)):(Yo("viewerPage",+qe.value),Yo("viewerClicks",Lt.value)),Yo("lastUpdate",{id:t,type:_t.value?"presenter":"viewer",time:new Date().getTime()}))}yt.afterEach(n),_e(Lt,n),y1(o=>{var l;yt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=o.lastUpdate)==null?void 0:l.type)==="presenter"&&(+o.page!=+qe.value||+Lt.value!=+o.clicks)&&yt.replace({path:pl(o.page),query:{...yt.currentRoute.value.query,clicks:o.clicks||0}})})}const lL=Ae({__name:"App",setup(e){return $(C),sL(),(t,n)=>{const o=Ms("RouterView"),i=Ms("StarportCarrier");return y(),ie(Ee,null,[G(o),G(i)],64)}}}),aL=A(lL,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/App.vue"]]);function Hl(e){return e!==null&&typeof e=="object"}function Fa(e,t,n=".",o){if(!Hl(t))return Fa(e,{},n,o);const i=Object.assign({},t);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const a=e[l];a!=null&&(o&&o(i,l,a,n)||(Array.isArray(a)&&Array.isArray(i[l])?i[l]=[...a,...i[l]]:Hl(a)&&Hl(i[l])?i[l]=Fa(a,i[l],(n?`${n}.`:"")+l.toString(),o):i[l]=a))}return i}function rL(e){return(...t)=>t.reduce((n,o)=>Fa(n,o,"",e),{})}const cL=rL(),tm=1/60*1e3,uL=typeof performance<"u"?()=>performance.now():()=>Date.now(),nm=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(uL()),tm);function dL(e){let t=[],n=[],o=0,i=!1,l=!1;const a=new WeakSet,r={schedule:(c,u=!1,d=!1)=>{const f=d&&i,m=f?t:n;return u&&a.add(c),m.indexOf(c)===-1&&(m.push(c),f&&i&&(o=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),a.delete(c)},process:c=>{if(i){l=!0;return}if(i=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const d=t[u];d(c),a.has(d)&&(r.schedule(d),e())}i=!1,l&&(l=!1,r.process(c))}};return r}const pL=40;let Da=!0,Li=!1,ja=!1;const Po={delta:0,timestamp:0},qi=["read","update","preRender","render","postRender"],fl=qi.reduce((e,t)=>(e[t]=dL(()=>Li=!0),e),{}),Va=qi.reduce((e,t)=>{const n=fl[t];return e[t]=(o,i=!1,l=!1)=>(Li||hL(),n.schedule(o,i,l)),e},{}),fL=qi.reduce((e,t)=>(e[t]=fl[t].cancel,e),{});qi.reduce((e,t)=>(e[t]=()=>fl[t].process(Po),e),{});const mL=e=>fl[e].process(Po),om=e=>{Li=!1,Po.delta=Da?tm:Math.max(Math.min(e-Po.timestamp,pL),1),Po.timestamp=e,ja=!0,qi.forEach(mL),ja=!1,Li&&(Da=!1,nm(om))},hL=()=>{Li=!0,Da=!0,ja||nm(om)},im=()=>Po;function sm(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]]);return n}var Rr=function(){},Ri=function(){};Rr=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Ri=function(e,t){if(!e)throw new Error(t)};const Ba=(e,t,n)=>Math.min(Math.max(n,e),t),Nl=.001,vL=.01,Du=10,_L=.05,gL=1;function bL({duration:e=800,bounce:t=.25,velocity:n=0,mass:o=1}){let i,l;Rr(e<=Du*1e3,"Spring duration must be 10 seconds or less");let a=1-t;a=Ba(_L,gL,a),e=Ba(vL,Du,e/1e3),a<1?(i=u=>{const d=u*a,f=d*e,m=d-n,h=qa(u,a),v=Math.exp(-f);return Nl-m/h*v},l=u=>{const f=u*a*e,m=f*n+n,h=Math.pow(a,2)*Math.pow(u,2)*e,v=Math.exp(-f),w=qa(Math.pow(u,2),a);return(-i(u)+Nl>0?-1:1)*((m-h)*v)/w}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Nl+d*f},l=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const r=5/e,c=wL(i,l,r);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:e}}}const yL=12;function wL(e,t,n){let o=n;for(let i=1;i<yL;i++)o=o-e(o)/t(o);return o}function qa(e,t){return e*Math.sqrt(1-t*t)}const SL=["duration","bounce"],xL=["stiffness","damping","mass"];function ju(e,t){return t.some(n=>e[n]!==void 0)}function kL(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!ju(e,xL)&&ju(e,SL)){const n=bL(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Wr(e){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:i}=e,l=sm(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:r,damping:c,mass:u,velocity:d,duration:f,isResolvedFromDuration:m}=kL(l),h=Vu,v=Vu;function w(){const S=d?-(d/1e3):0,x=n-t,k=c/(2*Math.sqrt(r*u)),g=Math.sqrt(r/u)/1e3;if(i===void 0&&(i=Math.min(Math.abs(n-t)/100,.4)),k<1){const T=qa(g,k);h=O=>{const P=Math.exp(-k*g*O);return n-P*((S+k*g*x)/T*Math.sin(T*O)+x*Math.cos(T*O))},v=O=>{const P=Math.exp(-k*g*O);return k*g*P*(Math.sin(T*O)*(S+k*g*x)/T+x*Math.cos(T*O))-P*(Math.cos(T*O)*(S+k*g*x)-T*x*Math.sin(T*O))}}else if(k===1)h=T=>n-Math.exp(-g*T)*(x+(S+g*x)*T);else{const T=g*Math.sqrt(k*k-1);h=O=>{const P=Math.exp(-k*g*O),j=Math.min(T*O,300);return n-P*((S+k*g*x)*Math.sinh(j)+T*x*Math.cosh(j))/T}}}return w(),{next:S=>{const x=h(S);if(m)a.done=S>=f;else{const k=v(S)*1e3,g=Math.abs(k)<=o,T=Math.abs(n-x)<=i;a.done=g&&T}return a.value=a.done?n:x,a},flipTarget:()=>{d=-d,[t,n]=[n,t],w()}}}Wr.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Vu=e=>0,lm=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},Hr=(e,t,n)=>-n*e+n*t+e,am=(e,t)=>n=>Math.max(Math.min(n,t),e),gi=e=>e%1?Number(e.toFixed(5)):e,Wi=/(-)?([\d]*\.?[\d])+/g,Ua=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,$L=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ui(e){return typeof e=="string"}const Ji={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},bi=Object.assign(Object.assign({},Ji),{transform:am(0,1)}),ps=Object.assign(Object.assign({},Ji),{default:1}),Nr=e=>({test:t=>Ui(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Un=Nr("deg"),yi=Nr("%"),be=Nr("px"),Bu=Object.assign(Object.assign({},yi),{parse:e=>yi.parse(e)/100,transform:e=>yi.transform(e*100)}),Fr=(e,t)=>n=>!!(Ui(n)&&$L.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),rm=(e,t,n)=>o=>{if(!Ui(o))return o;const[i,l,a,r]=o.match(Wi);return{[e]:parseFloat(i),[t]:parseFloat(l),[n]:parseFloat(a),alpha:r!==void 0?parseFloat(r):1}},lo={test:Fr("hsl","hue"),parse:rm("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+yi.transform(gi(t))+", "+yi.transform(gi(n))+", "+gi(bi.transform(o))+")"},IL=am(0,255),Fl=Object.assign(Object.assign({},Ji),{transform:e=>Math.round(IL(e))}),zn={test:Fr("rgb","red"),parse:rm("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+Fl.transform(e)+", "+Fl.transform(t)+", "+Fl.transform(n)+", "+gi(bi.transform(o))+")"};function OL(e){let t="",n="",o="",i="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),o=e.substr(5,2),i=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),o=e.substr(3,1),i=e.substr(4,1),t+=t,n+=n,o+=o,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:i?parseInt(i,16)/255:1}}const Ja={test:Fr("#"),parse:OL,transform:zn.transform},vt={test:e=>zn.test(e)||Ja.test(e)||lo.test(e),parse:e=>zn.test(e)?zn.parse(e):lo.test(e)?lo.parse(e):Ja.parse(e),transform:e=>Ui(e)?e:e.hasOwnProperty("red")?zn.transform(e):lo.transform(e)},cm="${c}",um="${n}";function zL(e){var t,n,o,i;return isNaN(e)&&Ui(e)&&((n=(t=e.match(Wi))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((i=(o=e.match(Ua))===null||o===void 0?void 0:o.length)!==null&&i!==void 0?i:0)>0}function dm(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const o=e.match(Ua);o&&(n=o.length,e=e.replace(Ua,cm),t.push(...o.map(vt.parse)));const i=e.match(Wi);return i&&(e=e.replace(Wi,um),t.push(...i.map(Ji.parse))),{values:t,numColors:n,tokenised:e}}function pm(e){return dm(e).values}function fm(e){const{values:t,numColors:n,tokenised:o}=dm(e),i=t.length;return l=>{let a=o;for(let r=0;r<i;r++)a=a.replace(r<n?cm:um,r<n?vt.transform(l[r]):gi(l[r]));return a}}const EL=e=>typeof e=="number"?0:e;function TL(e){const t=pm(e);return fm(e)(t.map(EL))}const Yi={test:zL,parse:pm,createTransformer:fm,getAnimatableNone:TL},CL=new Set(["brightness","contrast","saturate","opacity"]);function AL(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Wi)||[];if(!o)return e;const i=n.replace(o,"");let l=CL.has(t)?1:0;return o!==n&&(l*=100),t+"("+l+i+")"}const ML=/([a-z-]*)\(.*?\)/g,Ya=Object.assign(Object.assign({},Yi),{getAnimatableNone:e=>{const t=e.match(ML);return t?t.map(AL).join(" "):e}});function Dl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function qu({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let i=0,l=0,a=0;if(!t)i=l=a=n;else{const r=n<.5?n*(1+t):n+t-n*t,c=2*n-r;i=Dl(c,r,e+1/3),l=Dl(c,r,e),a=Dl(c,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(l*255),blue:Math.round(a*255),alpha:o}}const PL=(e,t,n)=>{const o=e*e,i=t*t;return Math.sqrt(Math.max(0,n*(i-o)+o))},KL=[Ja,zn,lo],Uu=e=>KL.find(t=>t.test(e)),Ju=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,mm=(e,t)=>{let n=Uu(e),o=Uu(t);Ri(!!n,Ju(e)),Ri(!!o,Ju(t));let i=n.parse(e),l=o.parse(t);n===lo&&(i=qu(i),n=zn),o===lo&&(l=qu(l),o=zn);const a=Object.assign({},i);return r=>{for(const c in a)c!=="alpha"&&(a[c]=PL(i[c],l[c],r));return a.alpha=Hr(i.alpha,l.alpha,r),n.transform(a)}},LL=e=>typeof e=="number",RL=(e,t)=>n=>t(e(n)),hm=(...e)=>e.reduce(RL);function vm(e,t){return LL(e)?n=>Hr(e,t,n):vt.test(e)?mm(e,t):gm(e,t)}const _m=(e,t)=>{const n=[...e],o=n.length,i=e.map((l,a)=>vm(l,t[a]));return l=>{for(let a=0;a<o;a++)n[a]=i[a](l);return n}},WL=(e,t)=>{const n=Object.assign(Object.assign({},e),t),o={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(o[i]=vm(e[i],t[i]));return i=>{for(const l in o)n[l]=o[l](i);return n}};function Yu(e){const t=Yi.parse(e),n=t.length;let o=0,i=0,l=0;for(let a=0;a<n;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?l++:i++;return{parsed:t,numNumbers:o,numRGB:i,numHSL:l}}const gm=(e,t)=>{const n=Yi.createTransformer(t),o=Yu(e),i=Yu(t);return o.numHSL===i.numHSL&&o.numRGB===i.numRGB&&o.numNumbers>=i.numNumbers?hm(_m(o.parsed,i.parsed),n):(Rr(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?t:e}`)},HL=(e,t)=>n=>Hr(e,t,n);function NL(e){if(typeof e=="number")return HL;if(typeof e=="string")return vt.test(e)?mm:gm;if(Array.isArray(e))return _m;if(typeof e=="object")return WL}function FL(e,t,n){const o=[],i=n||NL(e[0]),l=e.length-1;for(let a=0;a<l;a++){let r=i(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;r=hm(c,r)}o.push(r)}return o}function DL([e,t],[n]){return o=>n(lm(e,t,o))}function jL(e,t){const n=e.length,o=n-1;return i=>{let l=0,a=!1;if(i<=e[0]?a=!0:i>=e[o]&&(l=o-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>i||c===o);c++);l=c-1}const r=lm(e[l],e[l+1],i);return t[l](r)}}function bm(e,t,{clamp:n=!0,ease:o,mixer:i}={}){const l=e.length;Ri(l===t.length,"Both input and output ranges must be the same length"),Ri(!o||!Array.isArray(o)||o.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=FL(t,o,i),r=l===2?DL(e,a):jL(e,a);return n?c=>r(Ba(e[0],e[l-1],c)):r}const ml=e=>t=>1-e(1-t),Dr=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,VL=e=>t=>Math.pow(t,e),ym=e=>t=>t*t*((e+1)*t-e),BL=e=>{const t=ym(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},wm=1.525,qL=4/11,UL=8/11,JL=9/10,Sm=e=>e,jr=VL(2),YL=ml(jr),xm=Dr(jr),km=e=>1-Math.sin(Math.acos(e)),$m=ml(km),QL=Dr($m),Vr=ym(wm),ZL=ml(Vr),GL=Dr(Vr),XL=BL(wm),eR=4356/361,tR=35442/1805,nR=16061/1805,qs=e=>{if(e===1||e===0)return e;const t=e*e;return e<qL?7.5625*t:e<UL?9.075*t-9.9*e+3.4:e<JL?eR*t-tR*e+nR:10.8*e*e-20.52*e+10.72},oR=ml(qs),iR=e=>e<.5?.5*(1-qs(1-e*2)):.5*qs(e*2-1)+.5;function sR(e,t){return e.map(()=>t||xm).splice(0,e.length-1)}function lR(e){const t=e.length;return e.map((n,o)=>o!==0?o/(t-1):0)}function aR(e,t){return e.map(n=>n*t)}function ws({from:e=0,to:t=1,ease:n,offset:o,duration:i=300}){const l={done:!1,value:e},a=Array.isArray(t)?t:[e,t],r=aR(o&&o.length===a.length?o:lR(a),i);function c(){return bm(r,a,{ease:Array.isArray(n)?n:sR(a,n)})}let u=c();return{next:d=>(l.value=u(d),l.done=d>=i,l),flipTarget:()=>{a.reverse(),u=c()}}}function rR({velocity:e=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:i=.5,modifyTarget:l}){const a={done:!1,value:t};let r=n*e;const c=t+r,u=l===void 0?c:l(c);return u!==c&&(r=u-t),{next:d=>{const f=-r*Math.exp(-d/o);return a.done=!(f>i||f<-i),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const Qu={keyframes:ws,spring:Wr,decay:rR};function cR(e){if(Array.isArray(e.to))return ws;if(Qu[e.type])return Qu[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?ws:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Wr:ws}function Im(e,t,n=0){return e-t-n}function uR(e,t,n=0,o=!0){return o?Im(t+-e,t,n):t-(e-t)+n}function dR(e,t,n,o){return o?e>=t+n:e<=-n}const pR=e=>{const t=({delta:n})=>e(n);return{start:()=>Va.update(t,!0),stop:()=>fL.update(t)}};function Om(e){var t,n,{from:o,autoplay:i=!0,driver:l=pR,elapsed:a=0,repeat:r=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:f,onComplete:m,onRepeat:h,onUpdate:v}=e,w=sm(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:S}=w,x,k=0,g=w.duration,T,O=!1,P=!0,j;const L=cR(w);!((n=(t=L).needsInterpolation)===null||n===void 0)&&n.call(t,o,S)&&(j=bm([0,100],[o,S],{clamp:!1}),o=0,S=100);const q=L(Object.assign(Object.assign({},w),{from:o,to:S}));function se(){k++,c==="reverse"?(P=k%2===0,a=uR(a,g,u,P)):(a=Im(a,g,u),c==="mirror"&&q.flipTarget()),O=!1,h&&h()}function de(){x.stop(),m&&m()}function Z(ge){if(P||(ge=-ge),a+=ge,!O){const we=q.next(Math.max(0,a));T=we.value,j&&(T=j(T)),O=P?we.done:a<=0}v==null||v(T),O&&(k===0&&(g??(g=a)),k<r?dR(a,g,u,P)&&se():de())}function ve(){d==null||d(),x=l(Z),x.start()}return i&&ve(),{stop:()=>{f==null||f(),x.stop()}}}function zm(e,t){return t?e*(1e3/t):0}function fR({from:e=0,velocity:t=0,min:n,max:o,power:i=.8,timeConstant:l=750,bounceStiffness:a=500,bounceDamping:r=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:f,onComplete:m,onStop:h}){let v;function w(g){return n!==void 0&&g<n||o!==void 0&&g>o}function S(g){return n===void 0?o:o===void 0||Math.abs(n-g)<Math.abs(o-g)?n:o}function x(g){v==null||v.stop(),v=Om(Object.assign(Object.assign({},g),{driver:d,onUpdate:T=>{var O;f==null||f(T),(O=g.onUpdate)===null||O===void 0||O.call(g,T)},onComplete:m,onStop:h}))}function k(g){x(Object.assign({type:"spring",stiffness:a,damping:r,restDelta:c},g))}if(w(e))k({from:e,velocity:t,to:S(e)});else{let g=i*t+e;typeof u<"u"&&(g=u(g));const T=S(g),O=T===n?-1:1;let P,j;const L=q=>{P=j,j=q,t=zm(q-P,im().delta),(O===1&&q>T||O===-1&&q<T)&&k({from:q,to:T,velocity:t})};x({type:"decay",from:e,velocity:t,timeConstant:l,power:i,restDelta:c,modifyTarget:u,onUpdate:w(g)?L:void 0})}return{stop:()=>v==null?void 0:v.stop()}}const Em=(e,t)=>1-3*t+3*e,Tm=(e,t)=>3*t-6*e,Cm=e=>3*e,Us=(e,t,n)=>((Em(t,n)*e+Tm(t,n))*e+Cm(t))*e,Am=(e,t,n)=>3*Em(t,n)*e*e+2*Tm(t,n)*e+Cm(t),mR=1e-7,hR=10;function vR(e,t,n,o,i){let l,a,r=0;do a=t+(n-t)/2,l=Us(a,o,i)-e,l>0?n=a:t=a;while(Math.abs(l)>mR&&++r<hR);return a}const _R=8,gR=.001;function bR(e,t,n,o){for(let i=0;i<_R;++i){const l=Am(t,n,o);if(l===0)return t;const a=Us(t,n,o)-e;t-=a/l}return t}const Ss=11,fs=1/(Ss-1);function yR(e,t,n,o){if(e===t&&n===o)return Sm;const i=new Float32Array(Ss);for(let a=0;a<Ss;++a)i[a]=Us(a*fs,e,n);function l(a){let r=0,c=1;const u=Ss-1;for(;c!==u&&i[c]<=a;++c)r+=fs;--c;const d=(a-i[c])/(i[c+1]-i[c]),f=r+d*fs,m=Am(f,e,n);return m>=gR?bR(a,f,e,n):m===0?f:vR(a,r,r+fs,e,n)}return a=>a===0||a===1?a:Us(l(a),t,o)}const jl={};class wR{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(this.subscriptions.size)for(const i of this.subscriptions)i(t,n,o)}clear(){this.subscriptions.clear()}}function Zu(e){return!isNaN(parseFloat(e))}class SR{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new wR,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:i}=im();this.lastUpdated!==i&&(this.timeDelta=o,this.lastUpdated=i),Va.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Va.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Zu(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Zu(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?zm(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function xR(e){return new SR(e)}const{isArray:kR}=Array;function $R(){const e=Q({}),t=o=>{const i=l=>{e.value[l]&&(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};o?kR(o)?o.forEach(i):i(o):Object.keys(e.value).forEach(i)},n=(o,i,l)=>{if(e.value[o])return e.value[o];const a=xR(i);return a.onChange(r=>l[o]=r),e.value[o]=a,a};return B1(t),{motionValues:e,get:n,stop:t}}function IR(e){return Array.isArray(e)}function Jn(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Vl(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function OR(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Bl(){return{type:"keyframes",ease:"linear",duration:300}}function zR(e){return{type:"keyframes",duration:800,values:e}}const Gu={default:OR,x:Jn,y:Jn,z:Jn,rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scaleX:Vl,scaleY:Vl,scale:Vl,backgroundColor:Bl,color:Bl,opacity:Bl};function Mm(e,t){let n;return IR(t)?n=zR:n=Gu[e]||Gu.default,{to:t,...n(t)}}const Xu={...Ji,transform:Math.round},Pm={color:vt,backgroundColor:vt,outlineColor:vt,fill:vt,stroke:vt,borderColor:vt,borderTopColor:vt,borderRightColor:vt,borderBottomColor:vt,borderLeftColor:vt,borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,size:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,rotate:Un,rotateX:Un,rotateY:Un,rotateZ:Un,scale:ps,scaleX:ps,scaleY:ps,scaleZ:ps,skew:Un,skewX:Un,skewY:Un,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:bi,originX:Bu,originY:Bu,originZ:be,zIndex:Xu,filter:Ya,WebkitFilter:Ya,fillOpacity:bi,strokeOpacity:bi,numOctaves:Xu},Br=e=>Pm[e];function Km(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function ER(e,t){let n=Br(e);return n!==Ya&&(n=Yi),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const TR={linear:Sm,easeIn:jr,easeInOut:xm,easeOut:YL,circIn:km,circInOut:QL,circOut:$m,backIn:Vr,backInOut:GL,backOut:ZL,anticipate:XL,bounceIn:oR,bounceInOut:iR,bounceOut:qs};function ed(e){if(Array.isArray(e)){const[t,n,o,i]=e;return yR(t,n,o,i)}else if(typeof e=="string")return TR[e];return e}function CR(e){return Array.isArray(e)&&typeof e[0]!="number"}function td(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Yi.test(t)&&!t.startsWith("url("))}function AR(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function MR({ease:e,times:t,delay:n,...o}){const i={...o};return t&&(i.offset=t),e&&(i.ease=CR(e)?e.map(ed):ed(e)),n&&(i.elapsed=-n),i}function PR(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),AR(t),KR(e)||(e={...e,...Mm(n,t.to)}),{...t,...MR(e)}}function KR({delay:e,repeat:t,repeatType:n,repeatDelay:o,from:i,...l}){return!!Object.keys(l).length}function LR(e,t){return e[t]||e.default||e}function RR(e,t,n,o,i){const l=LR(o,e);let a=l.from===null||l.from===void 0?t.get():l.from;const r=td(e,n);a==="none"&&r&&typeof n=="string"&&(a=ER(e,n));const c=td(e,a);function u(f){const m={from:a,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return l.type==="inertia"||l.type==="decay"?fR({...m,...l}):Om({...PR(l,m,e),onUpdate:h=>{m.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),i&&i(),f&&f()}})}function d(f){return t.set(n),o.onComplete&&o.onComplete(),i&&i(),f&&f(),{stop:()=>{}}}return!c||!r||l.type===!1?d:u}function WR(){const{motionValues:e,stop:t,get:n}=$R();return{motionValues:e,stop:t,push:(i,l,a,r={},c)=>{const u=a[i],d=n(i,u,a);if(r&&r.immediate){d.set(l);return}const f=RR(i,d,l,r,c);d.start(f)}}}function HR(e,t={},{motionValues:n,push:o,stop:i}=WR()){const l=M(t),a=Q(!1);_e(n,f=>{a.value=Object.values(f).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0});const r=f=>{if(!l||!l[f])throw new Error(`The variant ${f} does not exist.`);return l[f]},c=f=>(typeof f=="string"&&(f=r(f)),Promise.all(Object.entries(f).map(([m,h])=>{if(m!=="transition")return new Promise(v=>o(m,h,e,f.transition||Mm(m,f[m]),v))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const m=ba(f)?f:r(f);Object.entries(m).forEach(([h,v])=>{h!=="transition"&&o(h,v,e,{immediate:!0})})},leave:async f=>{let m;if(l&&(l.leave&&(m=l.leave),!l.leave&&l.initial&&(m=l.initial)),!m){f();return}await c(m),f()},stop:i}}const qr=typeof window<"u",NR=()=>qr&&window.onpointerdown===null,FR=()=>qr&&window.ontouchstart===null,DR=()=>qr&&window.onmousedown===null;function jR({target:e,state:t,variants:n,apply:o}){const i=M(n),l=Q(!1),a=Q(!1),r=Q(!1),c=R(()=>{let d=[];return i&&(i.hovered&&(d=[...d,...Object.keys(i.hovered)]),i.tapped&&(d=[...d,...Object.keys(i.tapped)]),i.focused&&(d=[...d,...Object.keys(i.focused)])),d}),u=R(()=>{const d={};Object.assign(d,t.value),l.value&&i.hovered&&Object.assign(d,i.hovered),a.value&&i.tapped&&Object.assign(d,i.tapped),r.value&&i.focused&&Object.assign(d,i.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});i.hovered&&(Se(e,"mouseenter",()=>l.value=!0),Se(e,"mouseleave",()=>{l.value=!1,a.value=!1}),Se(e,"mouseout",()=>{l.value=!1,a.value=!1})),i.tapped&&(DR()&&(Se(e,"mousedown",()=>a.value=!0),Se(e,"mouseup",()=>a.value=!1)),NR()&&(Se(e,"pointerdown",()=>a.value=!0),Se(e,"pointerup",()=>a.value=!1)),FR()&&(Se(e,"touchstart",()=>a.value=!0),Se(e,"touchend",()=>a.value=!1))),i.focused&&(Se(e,"focus",()=>r.value=!0),Se(e,"blur",()=>r.value=!1)),_e(u,o)}function VR({set:e,target:t,variants:n,variant:o}){const i=M(n);_e(()=>t,()=>{i&&(i.initial&&e("initial"),i.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function BR({state:e,apply:t}){_e(e,n=>{n&&t(n)},{immediate:!0})}function qR({target:e,variants:t,variant:n}){const o=M(t);o&&(o.visible||o.visibleOnce)&&W0(e,([{isIntersecting:i}])=>{o.visible?i?n.value="visible":n.value="initial":o.visibleOnce&&(i&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function UR(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&VR(e),t.syncVariants&&BR(e),t.visibilityHooks&&qR(e),t.eventListeners&&jR(e)}function Lm(e={}){const t=je({...e}),n=Q({});return _e(t,()=>{const o={};for(const[i,l]of Object.entries(t)){const a=Br(i),r=Km(l,a);o[i]=r}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}function Ur(e,t){_e(()=>st(e),n=>{n&&t(n)},{immediate:!0})}const JR={x:"translateX",y:"translateY",z:"translateZ"};function Rm(e={},t=!0){const n=je({...e}),o=Q("");return _e(n,i=>{let l="",a=!1;if(t&&(i.x||i.y||i.z)){const r=[i.x||0,i.y||0,i.z||0].map(be.transform).join(",");l+=`translate3d(${r}) `,a=!0}for(const[r,c]of Object.entries(i)){if(t&&(r==="x"||r==="y"||r==="z"))continue;const u=Br(r),d=Km(c,u);l+=`${JR[r]||r}(${d}) `}t&&!a&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}const YR=["","X","Y","Z"],QR=["perspective","translate","scale","rotate","skew"],Wm=["transformPerspective","x","y","z"];QR.forEach(e=>{YR.forEach(t=>{const n=e+t;Wm.push(n)})});const ZR=new Set(Wm);function Jr(e){return ZR.has(e)}const GR=new Set(["originX","originY","originZ"]);function Hm(e){return GR.has(e)}function XR(e){const t={},n={};return Object.entries(e).forEach(([o,i])=>{Jr(o)||Hm(o)?t[o]=i:n[o]=i}),{transform:t,style:n}}function Nm(e){const{transform:t,style:n}=XR(e),{transform:o}=Rm(t),{style:i}=Lm(n);return o.value&&(i.value.transform=o.value),i.value}function e8(e,t){let n,o;const{state:i,style:l}=Lm();return Ur(e,a=>{o=a;for(const r of Object.keys(Pm))a.style[r]===null||a.style[r]===""||Jr(r)||Hm(r)||(i[r]=a.style[r]);n&&Object.entries(n).forEach(([r,c])=>a.style[r]=c),t&&t(i)}),_e(l,a=>{if(!o){n=a;return}for(const r in a)o.style[r]=a[r]},{immediate:!0}),{style:i}}function t8(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,i)=>{if(!i)return o;const[l,a]=i.split("("),c=a.split(",").map(d=>n(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...o,[l]:u}},{})}function n8(e,t){Object.entries(t8(t)).forEach(([n,o])=>{const i=["x","y","z"];if(n==="translate3d"){if(o===0){i.forEach(l=>e[l]=0);return}o.forEach((l,a)=>e[i[a]]=l);return}if(o=parseFloat(o),n==="translateX"){e.x=o;return}if(n==="translateY"){e.y=o;return}if(n==="translateZ"){e.z=o;return}e[n]=o})}function o8(e,t){let n,o;const{state:i,transform:l}=Rm();return Ur(e,a=>{o=a,a.style.transform&&n8(i,a.style.transform),n&&(a.style.transform=n),t&&t(i)}),_e(l,a=>{if(!o){n=a;return}o.style.transform=a},{immediate:!0}),{transform:i}}function i8(e,t){const n=je({}),o=a=>Object.entries(a).forEach(([r,c])=>n[r]=c),{style:i}=e8(e,o),{transform:l}=o8(e,o);return _e(n,a=>{Object.entries(a).forEach(([r,c])=>{const u=Jr(r)?l:i;u[r]&&u[r]===c||(u[r]=c)})},{immediate:!0,deep:!0}),Ur(e,()=>t&&o(t)),{motionProperties:n,style:i,transform:l}}function s8(e={}){const t=M(e),n=Q();return{state:R(()=>{if(n.value)return t[n.value]}),variant:n}}function Fm(e,t={},n){const{motionProperties:o}=i8(e),{variant:i,state:l}=s8(t),a=HR(o,t),r={target:e,variant:i,variants:t,state:l,motionProperties:o,...a};return UR(r,n),r}const l8=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function a8(e,t){const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&ba(n.variants)&&(t.value={...t.value,...n.variants}),l8.forEach(o=>{if(o==="delay"){if(n&&n[o]&&typeof n[o]=="number"){const i=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:i,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:i,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:i,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&ba(n[o])&&(t.value[o]=n[o])}))}function ql(e){return{created:(n,o,i)=>{const l=o.value&&typeof o.value=="string"?o.value:i.key;l&&jl[l]&&jl[l].stop();const a=Q(e||{});typeof o.value=="object"&&(a.value=o.value),a8(i,a);const r=Fm(n,a);n.motionInstance=r,l&&(jl[l]=r)},getSSRProps(n,o){let{initial:i}=n.value||o&&(o==null?void 0:o.props)||{};i=M(i);const l=cL((e==null?void 0:e.initial)||{},i||{});return!l||Object.keys(l).length===0?void 0:{style:Nm(l)}}}}const r8={initial:{opacity:0},enter:{opacity:1}},c8={initial:{opacity:0},visible:{opacity:1}},u8={initial:{opacity:0},visibleOnce:{opacity:1}},d8={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},p8={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},f8={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},m8={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},h8={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},v8={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},_8={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},g8={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},b8={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},y8={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},w8={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},S8={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},x8={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},k8={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},$8={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},I8={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},O8={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},z8={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},E8={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},T8={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},C8={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},A8={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},M8={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},P8={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},K8={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},L8={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},R8={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Qa={__proto__:null,fade:r8,fadeVisible:c8,fadeVisibleOnce:u8,pop:d8,popVisible:p8,popVisibleOnce:f8,rollBottom:x8,rollLeft:m8,rollRight:_8,rollTop:y8,rollVisibleBottom:k8,rollVisibleLeft:h8,rollVisibleOnceBottom:$8,rollVisibleOnceLeft:v8,rollVisibleOnceRight:b8,rollVisibleOnceTop:S8,rollVisibleRight:g8,rollVisibleTop:w8,slideBottom:K8,slideLeft:I8,slideRight:E8,slideTop:A8,slideVisibleBottom:L8,slideVisibleLeft:O8,slideVisibleOnceBottom:R8,slideVisibleOnceLeft:z8,slideVisibleOnceRight:C8,slideVisibleOnceTop:P8,slideVisibleRight:T8,slideVisibleTop:M8},W8=Ae({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var r;const t=Fv(),n=je({});if(!e.is&&!t.default)return()=>wt("div",{});const o=R(()=>{let c;return e.preset&&(c=Qa[e.preset]),c}),i=R(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=R(()=>{const c={...i.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=R(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!yd(c)&&(c=Ms(c)),c});if(((r=process==null?void 0:process.env)==null?void 0:r.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var f,m,h;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(m=u.variants)!=null&&m.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};al(()=>Object.entries(n).forEach(([u,d])=>c(d)))}return{slots:t,component:a,motionConfig:l,instances:n}},render({slots:e,motionConfig:t,instances:n,component:o}){var r;const i=Nm(t.initial||{}),l=(c,u)=>(c.props||(c.props={}),c.props.style=i,c.props.onVnodeMounted=({el:d})=>{const f=Fm(d,t);n[u]=f},c);if(o){const c=wt(o,void 0,e);return l(c,0),c}return(((r=e.default)==null?void 0:r.call(e))||[]).map((c,u)=>l(c,u))}});function H8(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(o,i=>n.charAt(t.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const N8={install(e,t){if(e.directive("motion",ql()),e.component("Motion",W8),!t||t&&!t.excludePresets)for(const n in Qa){const o=Qa[n];e.directive(`motion-${H8(n)}`,ql(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,e.directive(`motion-${n}`,ql(o))}}};var nd;const wi=typeof window<"u",F8=Object.prototype.toString,D8=e=>F8.call(e)==="[object Object]";wi&&((nd=window==null?void 0:window.navigator)!=null&&nd.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function j8(e){return nr()?(kd(e),!0):!1}function V8(e){var t;const n=M(e);return(t=n==null?void 0:n.$el)!=null?t:n}const B8=wi?window:void 0,od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},id="__vueuse_ssr_handlers__";od[id]=od[id]||{};function q8(e,t={}){const{immediate:n=!0,window:o=B8}=t,i=Q(!1);let l=null;function a(){!i.value||!o||(e(),l=o.requestAnimationFrame(a))}function r(){!i.value&&o&&(i.value=!0,a())}function c(){i.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return n&&r(),j8(c),{isActive:i,pause:c,resume:r}}var sd;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(sd||(sd={}));const hl="vue-starport-injection",Dm="vue-starport-options",U8={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},jm={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var J8=Object.defineProperty,Js=Object.getOwnPropertySymbols,Vm=Object.prototype.hasOwnProperty,Bm=Object.prototype.propertyIsEnumerable,ld=(e,t,n)=>t in e?J8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y8=(e,t)=>{for(var n in t||(t={}))Vm.call(t,n)&&ld(e,n,t[n]);if(Js)for(var n of Js(t))Bm.call(t,n)&&ld(e,n,t[n]);return e},ad=(e,t)=>{var n={};for(var o in e)Vm.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Js)for(var o of Js(e))t.indexOf(o)<0&&Bm.call(e,o)&&(n[o]=e[o]);return n};const Q8=Ae({name:"StarportProxy",props:Y8({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},jm),setup(e,t){const n=$(hl),o=R(()=>n.getInstance(e.port,e.component)),i=Q(),l=o.value.generateId(),a=Q(!1);return o.value.isVisible||(o.value.land(),a.value=!0),bn(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=i.value,await it(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const r=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${r} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Di(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await it(),await it(),!o.value.el&&n.dispose(o.value.port))}),_e(()=>e,async()=>{o.value.props&&await it();const r=e,{props:c}=r,u=ad(r,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const r=e,{initialProps:c,mountedProps:u}=r,d=ad(r,["initialProps","mountedProps"]),f=Ke(d,(a.value?u:c)||{});return wt("div",Ke(f,{id:l,ref:i,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?wt(t.slots.default):void 0)}}});var Z8=Object.defineProperty,G8=Object.defineProperties,X8=Object.getOwnPropertyDescriptors,rd=Object.getOwnPropertySymbols,eW=Object.prototype.hasOwnProperty,tW=Object.prototype.propertyIsEnumerable,cd=(e,t,n)=>t in e?Z8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nW=(e,t)=>{for(var n in t||(t={}))eW.call(t,n)&&cd(e,n,t[n]);if(rd)for(var n of rd(t))tW.call(t,n)&&cd(e,n,t[n]);return e},oW=(e,t)=>G8(e,X8(t));const iW=Ae({name:"Starport",inheritAttrs:!0,props:jm,setup(e,t){const n=Q(!1);return bn(()=>{if(n.value=!0,!$(hl))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,r;const o=(r=(a=t.slots).default)==null?void 0:r.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const i=o[0];let l=i.type;return(!D8(l)||Hn(l))&&(l={render(){return o}}),wt(Q8,oW(nW({},e),{key:e.port,component:el(l),props:i.props}))}}});function sW(e){const t=je({height:0,width:0,left:0,top:0,update:o,listen:l,pause:a,margin:"0px",padding:"0px"}),n=wi?document.documentElement||document.body:void 0;function o(){if(!wi)return;const r=V8(e);if(!r)return;const{height:c,width:u,left:d,top:f}=r.getBoundingClientRect(),m=window.getComputedStyle(r),h=m.margin,v=m.padding;Object.assign(t,{height:c,width:u,left:d,top:n.scrollTop+f,margin:h,padding:v})}const i=q8(o,{immediate:!1});function l(){wi&&(o(),i.resume())}function a(){i.pause()}return t}let lW=(e,t=21)=>(n=t)=>{let o="",i=n;for(;i--;)o+=e[Math.random()*e.length|0];return o};const ud=lW("abcdefghijklmnopqrstuvwxyz",5);function dd(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function aW(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var rW=Object.defineProperty,pd=Object.getOwnPropertySymbols,cW=Object.prototype.hasOwnProperty,uW=Object.prototype.propertyIsEnumerable,fd=(e,t,n)=>t in e?rW(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ul=(e,t)=>{for(var n in t||(t={}))cW.call(t,n)&&fd(e,n,t[n]);if(pd)for(var n of pd(t))uW.call(t,n)&&fd(e,n,t[n]);return e};function dW(e,t,n={}){const o=aW(t),i=dd(o)||ud(),l=Q(),a=Q(null),r=Q(!1),c=Q(!1),u=ch(!0),d=Q({}),f=R(()=>Ul(Ul(Ul({},U8),n),d.value)),m=Q(0);let h;u.run(()=>{h=sW(l),_e(l,async x=>{x&&(c.value=!0),await it(),l.value||(c.value=!1)})});const v=dd(e);function w(){return`starport-${i}-${v}-${ud()}`}const S=w();return je({el:l,id:S,port:e,props:a,rect:h,scope:u,isLanded:r,isVisible:c,options:f,liftOffTime:m,component:t,componentName:o,componentId:i,generateId:w,setLocalOptions(x={}){d.value=JSON.parse(JSON.stringify(x))},elRef(){return l},liftOff(){r.value&&(r.value=!1,m.value=Date.now(),h.listen())},land(){r.value||(r.value=!0,h.pause())}})}function pW(e){const t=je(new Map);function n(i,l){let a=t.get(i);return a||(a=dW(i,l,e),t.set(i,a)),a.component=l,a}function o(i){var l;(l=t.get(i))==null||l.scope.stop(),t.delete(i)}return{portMap:t,dispose:o,getInstance:n}}var fW=Object.defineProperty,mW=Object.defineProperties,hW=Object.getOwnPropertyDescriptors,md=Object.getOwnPropertySymbols,vW=Object.prototype.hasOwnProperty,_W=Object.prototype.propertyIsEnumerable,hd=(e,t,n)=>t in e?fW(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gW=(e,t)=>{for(var n in t||(t={}))vW.call(t,n)&&hd(e,n,t[n]);if(md)for(var n of md(t))_W.call(t,n)&&hd(e,n,t[n]);return e},bW=(e,t)=>mW(e,hW(t));const yW=Ae({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=$(hl);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=R(()=>t.getInstance(e.port,e.component)),o=R(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),i=R(()=>{const a=Date.now()-n.value.liftOffTime,r=Math.max(0,n.value.options.duration-a),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?bW(gW({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${r}ms`,transitionTimingFunction:n.value.options.easing}),u)}),l={onTransitionend(a){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const a=!!(n.value.isLanded&&n.value.el);return wt("div",{style:i.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},wt(h_,{to:a?`#${o.value}`:"body",disabled:!a},wt(n.value.component,Ke(l,n.value.props))))}}}),wW=Ae({name:"StarportCarrier",setup(e,{slots:t}){const n=pW($(Dm,{}));return St().appContext.app.provide(hl,n),()=>{var i;return[(i=t.default)==null?void 0:i.call(t),Array.from(n.portMap.entries()).map(([l,{component:a}])=>wt(yW,{key:l,port:l,component:a}))]}}});function SW(e={}){return{install(t){t.provide(Dm,e),t.component("Starport",iW),t.component("StarportCarrier",wW)}}}function xW(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(N8),e.app.use(SW({keepAlive:!0}))}function xt(e,t,n){var o;return((o=e.instance)==null?void 0:o.$).provides[t]??n}function kW(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var d,f,m,h,v,w;if(_i.value||(d=xt(n,fi))!=null&&d.value)return;const o=xt(n,eo),i=xt(n,pi),l=xt(n,_a),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,r=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=r?d1:Ol;if(o&&!((m=o==null?void 0:o.value)!=null&&m.includes(t))&&o.value.push(t),n.value==null&&(n.value=(h=o==null?void 0:o.value)==null?void 0:h.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((v=o==null?void 0:o.value)==null?void 0:v.length)||0)+Number(n.value)),!(l!=null&&l.value.has(n.value)))l==null||l.value.set(n.value,[t]);else if(!((w=l==null?void 0:l.value.get(n.value))!=null&&w.includes(t))){const S=(l==null?void 0:l.value.get(n.value))||[];l==null||l.value.set(n.value,[t].concat(S))}t==null||t.classList.toggle(Qn,!0),i&&_e(i,()=>{const S=(i==null?void 0:i.value)??0,x=n.value!=null?S>=n.value:S>c;t.classList.contains(zl)||t.classList.toggle(u,!x),a!==!1&&a!==void 0&&t.classList.toggle(u,x),t.classList.toggle(Jo,!1);const k=l==null?void 0:l.value.get(S);k==null||k.forEach((g,T)=>{g.classList.toggle(ls,!1),T===k.length-1?g.classList.toggle(Jo,!0):g.classList.toggle(ls,!0)}),t.classList.contains(Jo)||t.classList.toggle(ls,x)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Qn,!1);const o=xt(n,eo);o!=null&&o.value&&ga(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var r,c,u;if(_i.value||(r=xt(n,fi))!=null&&r.value)return;const o=xt(n,eo),i=xt(n,pi),l=xt(n,_a),a=o==null?void 0:o.value.length;n.value==null&&(n.value=o==null?void 0:o.value.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((c=o==null?void 0:o.value)==null?void 0:c.length)||0)+Number(n.value)),l!=null&&l.value.has(n.value)?(u=l==null?void 0:l.value.get(n.value))==null||u.push(t):l==null||l.value.set(n.value,[t]),t==null||t.classList.toggle(Qn,!0),i&&_e(i,()=>{const d=(i.value??0)>=(n.value??a??0);t.classList.contains(zl)||t.classList.toggle(Ol,!d),t.classList.toggle(Jo,!1),t.classList.contains(Jo)||t.classList.toggle(ls,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Qn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,r,c;if(_i.value||(a=xt(n,fi))!=null&&a.value)return;const o=xt(n,eo),i=xt(n,pi),l=((r=o==null?void 0:o.value)==null?void 0:r.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Qn,!0),i&&_e(i,()=>{const u=(i==null?void 0:i.value)??0,d=n.value!=null?u>=n.value:u>l;t.classList.toggle(Ol,d),t.classList.toggle(zl,d)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Qn,!1);const o=xt(n,eo);o!=null&&o.value&&ga(o.value,t)}})}}}function $W(e,t){const n=Qf(e),o=Zf(t,n.currentRoute,n.currentPage);return{nav:{...n,...o},configs:ze,themeConfigs:R(()=>ze.themeConfig)}}function IW(){return{install(e){const t=$W(Wt,Lt);e.provide(C,je(t))}}}const Do=mg(aL);Do.use(yt);Do.use(r1());Do.use(kW());Do.use(IW());xW({app:Do,router:yt});Do.mount("#app");export{Lk as $,Jx as A,Q as B,AW as C,dt as D,Be as E,Ee as F,hw as G,eL as H,Lt as I,Bs as J,YK as K,Wl as L,bn as M,je as N,TW as O,MW as P,_e as Q,I as R,Ef as S,Te as T,ut as U,zw as V,OW as W,zW as X,Ci as Y,Pl as Z,A as _,C as a,zr as a0,Er as a1,qe as a2,$k as a3,ES as a4,EW as a5,qt as a6,ti as a7,so as a8,en as a9,Ta as aa,nw as ab,ow as ac,iw as ad,lw as ae,np as af,Ap as ag,PW as ah,mt as ai,ds as aj,ux as ak,jp as al,aw as am,Di as an,Dp as b,ze as c,Ae as d,Jh as e,ie as f,s as g,M as h,$ as i,Ye as j,BK as k,p as l,G as m,tt as n,y as o,ye as p,Sr as q,Ho as r,Jt as s,gt as t,CW as u,R as v,El as w,z as x,wf as y,Xx as z};
