(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function Dn(e,t){const n=Object.create(null),i=e.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ne=Object.freeze({}),Mo=Object.freeze([]),bt=()=>{},vd=()=>!1,Uf=/^on[^a-z]/,Ni=e=>Uf.test(e),ks=e=>e.startsWith("onUpdate:"),De=Object.assign,Gl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Jf=Object.prototype.hasOwnProperty,ze=(e,t)=>Jf.call(e,t),re=Array.isArray,lo=e=>Di(e)==="[object Map]",_d=e=>Di(e)==="[object Set]",Qf=e=>Di(e)==="[object RegExp]",pe=e=>typeof e=="function",Fe=e=>typeof e=="string",Xl=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",er=e=>Ae(e)&&pe(e.then)&&pe(e.catch),gd=Object.prototype.toString,Di=e=>gd.call(e),tr=e=>Di(e).slice(8,-1),bd=e=>Di(e)==="[object Object]",nr=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hs=Dn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yf=Dn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Ys=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Zf=/-(\w)/g,nn=Ys(e=>e.replace(Zf,(t,n)=>n?n.toUpperCase():"")),Gf=/\B([A-Z])/g,vn=Ys(e=>e.replace(Gf,"-$1").toLowerCase()),vo=Ys(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qn=Ys(e=>e?`on${vo(e)}`:""),xi=(e,t)=>!Object.is(e,t),Zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$s=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Xf=e=>{const t=parseFloat(e);return isNaN(t)?e:t},eh=e=>{const t=Fe(e)?Number(e):NaN;return isNaN(t)?e:t};let Gr;const zs=()=>Gr||(Gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tt(e){if(re(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=Fe(i)?ih(i):tt(i);if(s)for(const a in s)t[a]=s[a]}return t}else{if(Fe(e))return e;if(Ae(e))return e}}const th=/;(?![^(]*\))/g,nh=/:([^]+)/,oh=/\/\*[^]*?\*\//g;function ih(e){const t={};return e.replace(oh,"").split(th).forEach(n=>{if(n){const i=n.split(nh);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Ve(e){let t="";if(Fe(e))t=e;else if(re(e))for(let n=0;n<e.length;n++){const i=Ve(e[n]);i&&(t+=i+" ")}else if(Ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function M(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Fe(t)&&(e.class=Ve(t)),n&&(e.style=tt(n)),e}const sh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ah="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",yd=Dn(sh),lh=Dn(ah),rh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ch=Dn(rh);function Sd(e){return!!e||e===""}const gt=e=>Fe(e)?e:e==null?"":re(e)||Ae(e)&&(e.toString===gd||!pe(e.toString))?JSON.stringify(e,wd,2):String(e),wd=(e,t)=>t&&t.__v_isRef?wd(e,t.value):lo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:_d(t)?{[`Set(${t.size})`]:[...t.values()]}:Ae(t)&&!re(t)&&!bd(t)?String(t):t;function Is(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let $t;class xd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!t&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=$t;try{return $t=this,t()}finally{$t=n}}else Is("cannot run an inactive effect scope.")}on(){$t=this}off(){$t=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function uh(e){return new xd(e)}function dh(e,t=$t){t&&t.active&&t.effects.push(e)}function or(){return $t}function kd(e){$t?$t.cleanups.push(e):Is("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ir=e=>{const t=new Set(e);return t.w=0,t.n=0,t},$d=e=>(e.w&Rn)>0,zd=e=>(e.n&Rn)>0,ph=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Rn},mh=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const s=t[i];$d(s)&&!zd(s)?s.delete(e):t[n++]=s,s.w&=~Rn,s.n&=~Rn}t.length=n}},Cs=new WeakMap;let oi=0,Rn=1;const Qa=30;let pt;const ro=Symbol("iterate"),Ya=Symbol("Map key iterate");class sr{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,dh(this,i)}run(){if(!this.active)return this.fn();let t=pt,n=En;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=pt,pt=this,En=!0,Rn=1<<++oi,oi<=Qa?ph(this):Xr(this),this.fn()}finally{oi<=Qa&&mh(this),Rn=1<<--oi,pt=this.parent,En=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pt===this?this.deferStop=!0:this.active&&(Xr(this),this.onStop&&this.onStop(),this.active=!1)}}function Xr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let En=!0;const Id=[];function go(){Id.push(En),En=!1}function bo(){const e=Id.pop();En=e===void 0?!0:e}function lt(e,t,n){if(En&&pt){let i=Cs.get(e);i||Cs.set(e,i=new Map);let s=i.get(n);s||i.set(n,s=ir()),Cd(s,{effect:pt,target:e,type:t,key:n})}}function Cd(e,t){let n=!1;oi<=Qa?zd(e)||(e.n|=Rn,n=!$d(e)):n=!e.has(pt),n&&(e.add(pt),pt.deps.push(e),pt.onTrack&&pt.onTrack(De({effect:pt},t)))}function on(e,t,n,i,s,a){const l=Cs.get(e);if(!l)return;let r=[];if(t==="clear")r=[...l.values()];else if(n==="length"&&re(e)){const d=Number(i);l.forEach((p,m)=>{(m==="length"||m>=d)&&r.push(p)})}else switch(n!==void 0&&r.push(l.get(n)),t){case"add":re(e)?nr(n)&&r.push(l.get("length")):(r.push(l.get(ro)),lo(e)&&r.push(l.get(Ya)));break;case"delete":re(e)||(r.push(l.get(ro)),lo(e)&&r.push(l.get(Ya)));break;case"set":lo(e)&&r.push(l.get(ro));break}const u={target:e,type:t,key:n,newValue:i,oldValue:s,oldTarget:a};if(r.length===1)r[0]&&Za(r[0],u);else{const d=[];for(const p of r)p&&d.push(...p);Za(ir(d),u)}}function Za(e,t){const n=re(e)?e:[...e];for(const i of n)i.computed&&ec(i,t);for(const i of n)i.computed||ec(i,t)}function ec(e,t){(e!==pt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(De({effect:e},t)),e.scheduler?e.scheduler():e.run())}function fh(e,t){var n;return(n=Cs.get(e))==null?void 0:n.get(t)}const hh=Dn("__proto__,__v_isRef,__isVue"),Ed=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xl)),vh=Zs(),_h=Zs(!1,!0),gh=Zs(!0),bh=Zs(!0,!0),tc=yh();function yh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=ve(this);for(let a=0,l=this.length;a<l;a++)lt(i,"get",a+"");const s=i[t](...n);return s===-1||s===!1?i[t](...n.map(ve)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){go();const i=ve(this)[t].apply(this,n);return bo(),i}}),e}function Sh(e){const t=ve(this);return lt(t,"has",e),t.hasOwnProperty(e)}function Zs(e=!1,t=!1){return function(i,s,a){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&a===(e?t?Rd:Ld:t?Pd:Kd).get(i))return i;const l=re(i);if(!e){if(l&&ze(tc,s))return Reflect.get(tc,s,a);if(s==="hasOwnProperty")return Sh}const r=Reflect.get(i,s,a);return(Xl(s)?Ed.has(s):hh(s))||(e||lt(i,"get",s),t)?r:Te(r)?l&&nr(s)?r:r.value:Ae(r)?e?jt(r):je(r):r}}const wh=Od(),xh=Od(!0);function Od(e=!1){return function(n,i,s,a){let l=n[i];if(Hn(l)&&Te(l)&&!Te(s))return!1;if(!e&&(!Es(s)&&!Hn(s)&&(l=ve(l),s=ve(s)),!re(n)&&Te(l)&&!Te(s)))return l.value=s,!0;const r=re(n)&&nr(i)?Number(i)<n.length:ze(n,i),u=Reflect.set(n,i,s,a);return n===ve(a)&&(r?xi(s,l)&&on(n,"set",i,s,l):on(n,"add",i,s)),u}}function kh(e,t){const n=ze(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&on(e,"delete",t,void 0,i),s}function $h(e,t){const n=Reflect.has(e,t);return(!Xl(t)||!Ed.has(t))&&lt(e,"has",t),n}function zh(e){return lt(e,"iterate",re(e)?"length":ro),Reflect.ownKeys(e)}const Md={get:vh,set:wh,deleteProperty:kh,has:$h,ownKeys:zh},Td={get:gh,set(e,t){return Is(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Is(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Ih=De({},Md,{get:_h,set:xh}),Ch=De({},Td,{get:bh}),ar=e=>e,Gs=e=>Reflect.getPrototypeOf(e);function Zi(e,t,n=!1,i=!1){e=e.__v_raw;const s=ve(e),a=ve(t);n||(t!==a&&lt(s,"get",t),lt(s,"get",a));const{has:l}=Gs(s),r=i?ar:n?lr:ki;if(l.call(s,t))return r(e.get(t));if(l.call(s,a))return r(e.get(a));e!==s&&e.get(t)}function Gi(e,t=!1){const n=this.__v_raw,i=ve(n),s=ve(e);return t||(e!==s&&lt(i,"has",e),lt(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Xi(e,t=!1){return e=e.__v_raw,!t&&lt(ve(e),"iterate",ro),Reflect.get(e,"size",e)}function nc(e){e=ve(e);const t=ve(this);return Gs(t).has.call(t,e)||(t.add(e),on(t,"add",e,e)),this}function oc(e,t){t=ve(t);const n=ve(this),{has:i,get:s}=Gs(n);let a=i.call(n,e);a?Ad(n,i,e):(e=ve(e),a=i.call(n,e));const l=s.call(n,e);return n.set(e,t),a?xi(t,l)&&on(n,"set",e,t,l):on(n,"add",e,t),this}function ic(e){const t=ve(this),{has:n,get:i}=Gs(t);let s=n.call(t,e);s?Ad(t,n,e):(e=ve(e),s=n.call(t,e));const a=i?i.call(t,e):void 0,l=t.delete(e);return s&&on(t,"delete",e,void 0,a),l}function sc(){const e=ve(this),t=e.size!==0,n=lo(e)?new Map(e):new Set(e),i=e.clear();return t&&on(e,"clear",void 0,void 0,n),i}function es(e,t){return function(i,s){const a=this,l=a.__v_raw,r=ve(l),u=t?ar:e?lr:ki;return!e&&lt(r,"iterate",ro),l.forEach((d,p)=>i.call(s,u(d),u(p),a))}}function ts(e,t,n){return function(...i){const s=this.__v_raw,a=ve(s),l=lo(a),r=e==="entries"||e===Symbol.iterator&&l,u=e==="keys"&&l,d=s[e](...i),p=n?ar:t?lr:ki;return!t&&lt(a,"iterate",u?Ya:ro),{next(){const{value:m,done:f}=d.next();return f?{value:m,done:f}:{value:r?[p(m[0]),p(m[1])]:p(m),done:f}},[Symbol.iterator](){return this}}}}function yn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${vo(e)} operation ${n}failed: target is readonly.`,ve(this))}return e==="delete"?!1:this}}function Eh(){const e={get(a){return Zi(this,a)},get size(){return Xi(this)},has:Gi,add:nc,set:oc,delete:ic,clear:sc,forEach:es(!1,!1)},t={get(a){return Zi(this,a,!1,!0)},get size(){return Xi(this)},has:Gi,add:nc,set:oc,delete:ic,clear:sc,forEach:es(!1,!0)},n={get(a){return Zi(this,a,!0)},get size(){return Xi(this,!0)},has(a){return Gi.call(this,a,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:es(!0,!1)},i={get(a){return Zi(this,a,!0,!0)},get size(){return Xi(this,!0)},has(a){return Gi.call(this,a,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:es(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=ts(a,!1,!1),n[a]=ts(a,!0,!1),t[a]=ts(a,!1,!0),i[a]=ts(a,!0,!0)}),[e,n,t,i]}const[Oh,Mh,Th,Ah]=Eh();function Xs(e,t){const n=t?e?Ah:Th:e?Mh:Oh;return(i,s,a)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(ze(n,s)&&s in i?n:i,s,a)}const Kh={get:Xs(!1,!1)},Ph={get:Xs(!1,!0)},Lh={get:Xs(!0,!1)},Rh={get:Xs(!0,!0)};function Ad(e,t,n){const i=ve(n);if(i!==n&&t.call(e,i)){const s=tr(e);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Kd=new WeakMap,Pd=new WeakMap,Ld=new WeakMap,Rd=new WeakMap;function Hh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wh(e){return e.__v_skip||!Object.isExtensible(e)?0:Hh(tr(e))}function je(e){return Hn(e)?e:ea(e,!1,Md,Kh,Kd)}function Nh(e){return ea(e,!1,Ih,Ph,Pd)}function jt(e){return ea(e,!0,Td,Lh,Ld)}function ii(e){return ea(e,!0,Ch,Rh,Rd)}function ea(e,t,n,i,s){if(!Ae(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=s.get(e);if(a)return a;const l=Wh(e);if(l===0)return e;const r=new Proxy(e,l===2?i:n);return s.set(e,r),r}function co(e){return Hn(e)?co(e.__v_raw):!!(e&&e.__v_isReactive)}function Hn(e){return!!(e&&e.__v_isReadonly)}function Es(e){return!!(e&&e.__v_isShallow)}function Os(e){return co(e)||Hn(e)}function ve(e){const t=e&&e.__v_raw;return t?ve(t):e}function ta(e){return $s(e,"__v_skip",!0),e}const ki=e=>Ae(e)?je(e):e,lr=e=>Ae(e)?jt(e):e;function rr(e){En&&pt&&(e=ve(e),Cd(e.dep||(e.dep=ir()),{target:e,type:"get",key:"value"}))}function cr(e,t){e=ve(e);const n=e.dep;n&&Za(n,{target:e,type:"set",key:"value",newValue:t})}function Te(e){return!!(e&&e.__v_isRef===!0)}function Z(e){return Hd(e,!1)}function sn(e){return Hd(e,!0)}function Hd(e,t){return Te(e)?e:new Dh(e,t)}class Dh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ve(t),this._value=n?t:ki(t)}get value(){return rr(this),this._value}set value(t){const n=this.__v_isShallow||Es(t)||Hn(t);t=n?t:ve(t),xi(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ki(t),cr(this,t))}}function L(e){return Te(e)?e.value:e}const qh={get:(e,t,n)=>L(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return Te(s)&&!Te(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function Wd(e){return co(e)?e:new Proxy(e,qh)}class Fh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:i}=t(()=>rr(this),()=>cr(this));this._get=n,this._set=i}get value(){return this._get()}set value(t){this._set(t)}}function ur(e){return new Fh(e)}function jh(e){Os(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=re(e)?new Array(e.length):{};for(const n in e)t[n]=Nd(e,n);return t}class Vh{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return fh(ve(this._object),this._key)}}class Bh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Uh(e,t,n){return Te(e)?e:pe(e)?new Bh(e):Ae(e)&&arguments.length>1?Nd(e,t,n):Z(e)}function Nd(e,t,n){const i=e[t];return Te(i)?i:new Vh(e,t,n)}class Jh{constructor(t,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new sr(t,()=>{this._dirty||(this._dirty=!0,cr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=ve(this);return rr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Qh(e,t,n=!1){let i,s;const a=pe(e);a?(i=e,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(i=e.get,s=e.set);const l=new Jh(i,s,a||!s,n);return t&&!n&&(l.effect.onTrack=t.onTrack,l.effect.onTrigger=t.onTrigger),l}const uo=[];function vs(e){uo.push(e)}function _s(){uo.pop()}function V(e,...t){go();const n=uo.length?uo[uo.length-1].component:null,i=n&&n.appContext.config.warnHandler,s=Yh();if(i)hn(i,n,11,[e+t.join(""),n&&n.proxy,s.map(({vnode:a})=>`at <${da(n,a.type)}>`).join(`
`),s]);else{const a=[`[Vue warn]: ${e}`,...t];s.length&&a.push(`
`,...Zh(s)),console.warn(...a)}bo()}function Yh(){let e=uo[uo.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const i=e.component&&e.component.parent;e=i&&i.vnode}return t}function Zh(e){const t=[];return e.forEach((n,i)=>{t.push(...i===0?[]:[`
`],...Gh(n))}),t}function Gh({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",i=e.component?e.component.parent==null:!1,s=` at <${da(e.component,e.type,i)}`,a=">"+n;return e.props?[s,...Xh(e.props),a]:[s+a]}function Xh(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(i=>{t.push(...Dd(i,e[i]))}),n.length>3&&t.push(" ..."),t}function Dd(e,t,n){return Fe(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Te(t)?(t=Dd(e,ve(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):pe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=ve(t),n?t:[`${e}=`,t])}function ev(e,t){e!==void 0&&(typeof e!="number"?V(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&V(`${t} is NaN - the duration expression might be incorrect.`))}const dr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function hn(e,t,n,i){let s;try{s=i?e(...i):e()}catch(a){na(a,t,n)}return s}function Rt(e,t,n,i){if(pe(e)){const a=hn(e,t,n,i);return a&&er(a)&&a.catch(l=>{na(l,t,n)}),a}const s=[];for(let a=0;a<e.length;a++)s.push(Rt(e[a],t,n,i));return s}function na(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let a=t.parent;const l=t.proxy,r=dr[n];for(;a;){const d=a.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,l,r)===!1)return}a=a.parent}const u=t.appContext.config.errorHandler;if(u){hn(u,null,10,[e,l,r]);return}}tv(e,n,s,i)}function tv(e,t,n,i=!0){{const s=dr[t];if(n&&vs(n),V(`Unhandled error${s?` during execution of ${s}`:""}`),n&&_s(),i)throw e;console.error(e)}}let $i=!1,Ga=!1;const ot=[];let Gt=0;const To=[];let Zt=null,kn=0;const qd=Promise.resolve();let pr=null;const nv=100;function it(e){const t=pr||qd;return e?t.then(this?e.bind(this):e):t}function ov(e){let t=Gt+1,n=ot.length;for(;t<n;){const i=t+n>>>1;zi(ot[i])<e?t=i+1:n=i}return t}function oa(e){(!ot.length||!ot.includes(e,$i&&e.allowRecurse?Gt+1:Gt))&&(e.id==null?ot.push(e):ot.splice(ov(e.id),0,e),Fd())}function Fd(){!$i&&!Ga&&(Ga=!0,pr=qd.then(Bd))}function iv(e){const t=ot.indexOf(e);t>Gt&&ot.splice(t,1)}function jd(e){re(e)?To.push(...e):(!Zt||!Zt.includes(e,e.allowRecurse?kn+1:kn))&&To.push(e),Fd()}function ac(e,t=$i?Gt+1:0){for(e=e||new Map;t<ot.length;t++){const n=ot[t];if(n&&n.pre){if(mr(e,n))continue;ot.splice(t,1),t--,n()}}}function Vd(e){if(To.length){const t=[...new Set(To)];if(To.length=0,Zt){Zt.push(...t);return}for(Zt=t,e=e||new Map,Zt.sort((n,i)=>zi(n)-zi(i)),kn=0;kn<Zt.length;kn++)mr(e,Zt[kn])||Zt[kn]();Zt=null,kn=0}}const zi=e=>e.id==null?1/0:e.id,sv=(e,t)=>{const n=zi(e)-zi(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Bd(e){Ga=!1,$i=!0,e=e||new Map,ot.sort(sv);const t=n=>mr(e,n);try{for(Gt=0;Gt<ot.length;Gt++){const n=ot[Gt];if(n&&n.active!==!1){if(t(n))continue;hn(n,null,14)}}}finally{Gt=0,ot.length=0,Vd(e),$i=!1,pr=null,(ot.length||To.length)&&Bd(e)}}function mr(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>nv){const i=t.ownerInstance,s=i&&Ei(i.type);return V(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let On=!1;const Eo=new Set;zs().__VUE_HMR_RUNTIME__={createRecord:_a(Ud),rerender:_a(rv),reload:_a(cv)};const _o=new Map;function av(e){const t=e.type.__hmrId;let n=_o.get(t);n||(Ud(t,e.type),n=_o.get(t)),n.instances.add(e)}function lv(e){_o.get(e.type.__hmrId).instances.delete(e)}function Ud(e,t){return _o.has(e)?!1:(_o.set(e,{initialDef:ui(t),instances:new Set}),!0)}function ui(e){return $p(e)?e.__vccOpts:e}function rv(e,t){const n=_o.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(i=>{t&&(i.render=t,ui(i.type).render=t),i.renderCache=[],On=!0,i.update(),On=!1}))}function cv(e,t){const n=_o.get(e);if(!n)return;t=ui(t),lc(n.initialDef,t);const i=[...n.instances];for(const s of i){const a=ui(s.type);Eo.has(a)||(a!==n.initialDef&&lc(a,t),Eo.add(a)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(Eo.add(a),s.ceReload(t.styles),Eo.delete(a)):s.parent?oa(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}jd(()=>{for(const s of i)Eo.delete(ui(s.type))})}function lc(e,t){De(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function _a(e){return(t,n)=>{try{return e(t,n)}catch(i){console.error(i),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Xt,si=[],Xa=!1;function qi(e,...t){Xt?Xt.emit(e,...t):Xa||si.push({event:e,args:t})}function Jd(e,t){var n,i;Xt=e,Xt?(Xt.enabled=!0,si.forEach(({event:s,args:a})=>Xt.emit(s,...a)),si=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(a=>{Jd(a,t)}),setTimeout(()=>{Xt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Xa=!0,si=[])},3e3)):(Xa=!0,si=[])}function uv(e,t){qi("app:init",e,t,{Fragment:Me,Text:Vi,Comment:mt,Static:di})}function dv(e){qi("app:unmount",e)}const el=fr("component:added"),Qd=fr("component:updated"),pv=fr("component:removed"),mv=e=>{Xt&&typeof Xt.cleanupBuffer=="function"&&!Xt.cleanupBuffer(e)&&pv(e)};function fr(e){return t=>{qi(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const fv=Yd("perf:start"),hv=Yd("perf:end");function Yd(e){return(t,n,i)=>{qi(e,t.appContext.app,t.uid,t,n,i)}}function vv(e,t,n){qi("component:emit",e.appContext.app,e,t,n)}function _v(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||Ne;{const{emitsOptions:p,propsOptions:[m]}=e;if(p)if(!(t in p))(!m||!(Qn(t)in m))&&V(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qn(t)}" prop.`);else{const f=p[t];pe(f)&&(f(...n)||V(`Invalid event arguments: event validation failed for event "${t}".`))}}let s=n;const a=t.startsWith("update:"),l=a&&t.slice(7);if(l&&l in i){const p=`${l==="modelValue"?"model":l}Modifiers`,{number:m,trim:f}=i[p]||Ne;f&&(s=n.map(h=>Fe(h)?h.trim():h)),m&&(s=n.map(Xf))}vv(e,t,s);{const p=t.toLowerCase();p!==t&&i[Qn(p)]&&V(`Event "${p}" is emitted in component ${da(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${vn(t)}" instead of "${t}".`)}let r,u=i[r=Qn(t)]||i[r=Qn(nn(t))];!u&&a&&(u=i[r=Qn(vn(t))]),u&&Rt(u,e,6,s);const d=i[r+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Rt(d,e,6,s)}}function Zd(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(s!==void 0)return s;const a=e.emits;let l={},r=!1;if(!pe(e)){const u=d=>{const p=Zd(d,t,!0);p&&(r=!0,De(l,p))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!a&&!r?(Ae(e)&&i.set(e,null),null):(re(a)?a.forEach(u=>l[u]=null):De(l,a),Ae(e)&&i.set(e,l),l)}function ia(e,t){return!e||!Ni(t)?!1:(t=t.slice(2).replace(/Once$/,""),ze(e,t[0].toLowerCase()+t.slice(1))||ze(e,vn(t))||ze(e,t))}let Ge=null,sa=null;function Ms(e){const t=Ge;return Ge=e,sa=e&&e.type.__scopeId||null,t}function Hq(e){sa=e}function Wq(){sa=null}function w(e,t=Ge,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&Sc(-1);const a=Ms(t);let l;try{l=e(...s)}finally{Ms(a),i._d&&Sc(1)}return Qd(t),l};return i._n=!0,i._c=!0,i._d=!0,i}let tl=!1;function Ts(){tl=!0}function ga(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:a,propsOptions:[l],slots:r,attrs:u,emit:d,render:p,renderCache:m,data:f,setupState:h,ctx:v,inheritAttrs:S}=e;let x,k;const C=Ms(e);tl=!1;try{if(n.shapeFlag&4){const A=s||i;x=Ft(p.call(A,A,m,a,h,f,v)),k=u}else{const A=t;u===a&&Ts(),x=Ft(A.length>1?A(a,{get attrs(){return Ts(),u},slots:r,emit:d}):A(a,null)),k=t.props?u:bv(u)}}catch(A){pi.length=0,na(A,e,1),x=j(mt)}let b=x,P;if(x.patchFlag>0&&x.patchFlag&2048&&([b,P]=gv(x)),k&&S!==!1){const A=Object.keys(k),{shapeFlag:R}=b;if(A.length){if(R&7)l&&A.some(ks)&&(k=yv(k,l)),b=an(b,k);else if(!tl&&b.type!==mt){const F=Object.keys(u),W=[],U=[];for(let se=0,de=F.length;se<de;se++){const G=F[se];Ni(G)?ks(G)||W.push(G[2].toLowerCase()+G.slice(3)):U.push(G)}U.length&&V(`Extraneous non-props attributes (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),W.length&&V(`Extraneous non-emits event listeners (${W.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(rc(b)||V("Runtime directive used on component with non-element root node. The directives will not function as intended."),b=an(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(rc(b)||V("Component inside <Transition> renders non-element root node that cannot be animated."),b.transition=n.transition),P?P(b):x=b,Ms(C),x}const gv=e=>{const t=e.children,n=e.dynamicChildren,i=Gd(t);if(!i)return[e,void 0];const s=t.indexOf(i),a=n?n.indexOf(i):-1,l=r=>{t[s]=r,n&&(a>-1?n[a]=r:r.patchFlag>0&&(e.dynamicChildren=[...n,r]))};return[Ft(i),l]};function Gd(e){let t;for(let n=0;n<e.length;n++){const i=e[n];if(Wn(i)){if(i.type!==mt||i.children==="v-if"){if(t)return;t=i}}else return}return t}const bv=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ni(n))&&((t||(t={}))[n]=e[n]);return t},yv=(e,t)=>{const n={};for(const i in e)(!ks(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n},rc=e=>e.shapeFlag&7||e.type===mt;function Sv(e,t,n){const{props:i,children:s,component:a}=e,{props:l,children:r,patchFlag:u}=t,d=a.emitsOptions;if((s||r)&&On||t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return i?cc(i,l,d):!!l;if(u&8){const p=t.dynamicProps;for(let m=0;m<p.length;m++){const f=p[m];if(l[f]!==i[f]&&!ia(d,f))return!0}}}else return(s||r)&&(!r||!r.$stable)?!0:i===l?!1:i?l?cc(i,l,d):!0:!!l;return!1}function cc(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const a=i[s];if(t[a]!==e[a]&&!ia(n,a))return!0}return!1}function wv({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Xd=e=>e.__isSuspense;function xv(e,t){t&&t.pendingBranch?re(e)?t.effects.push(...e):t.effects.push(e):jd(e)}function yo(e,t){return aa(e,null,t)}function kv(e,t){return aa(e,null,De({},t,{flush:"post"}))}const ns={};function ge(e,t,n){return pe(t)||V("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),aa(e,t,n)}function aa(e,t,{immediate:n,deep:i,flush:s,onTrack:a,onTrigger:l}=Ne){var r;t||(n!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),i!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const u=A=>{V("Invalid watch source: ",A,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},d=or()===((r=Ze)==null?void 0:r.scope)?Ze:null;let p,m=!1,f=!1;if(Te(e)?(p=()=>e.value,m=Es(e)):co(e)?(p=()=>e,i=!0):re(e)?(f=!0,m=e.some(A=>co(A)||Es(A)),p=()=>e.map(A=>{if(Te(A))return A.value;if(co(A))return io(A);if(pe(A))return hn(A,d,2);u(A)})):pe(e)?t?p=()=>hn(e,d,2):p=()=>{if(!(d&&d.isUnmounted))return h&&h(),Rt(e,d,3,[v])}:(p=bt,u(e)),t&&i){const A=p;p=()=>io(A())}let h,v=A=>{h=b.onStop=()=>{hn(A,d,4)}},S;if(Ci)if(v=bt,t?n&&Rt(t,d,3,[p(),f?[]:void 0,v]):p(),s==="sync"){const A=T_();S=A.__watcherHandles||(A.__watcherHandles=[])}else return bt;let x=f?new Array(e.length).fill(ns):ns;const k=()=>{if(b.active)if(t){const A=b.run();(i||m||(f?A.some((R,F)=>xi(R,x[F])):xi(A,x)))&&(h&&h(),Rt(t,d,3,[A,x===ns?void 0:f&&x[0]===ns?[]:x,v]),x=A)}else b.run()};k.allowRecurse=!!t;let C;s==="sync"?C=k:s==="post"?C=()=>et(k,d&&d.suspense):(k.pre=!0,d&&(k.id=d.uid),C=()=>oa(k));const b=new sr(p,C);b.onTrack=a,b.onTrigger=l,t?n?k():x=b.run():s==="post"?et(b.run.bind(b),d&&d.suspense):b.run();const P=()=>{b.stop(),d&&d.scope&&Gl(d.scope.effects,b)};return S&&S.push(P),P}function $v(e,t,n){const i=this.proxy,s=Fe(e)?e.includes(".")?ep(i,e):()=>i[e]:e.bind(i,i);let a;pe(t)?a=t:(a=t.handler,n=t);const l=Ze;Lo(this);const r=aa(s,a.bind(i),n);return l?Lo(l):mo(),r}function ep(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function io(e,t){if(!Ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Te(e))io(e.value,t);else if(re(e))for(let n=0;n<e.length;n++)io(e[n],t);else if(_d(e)||lo(e))e.forEach(n=>{io(n,t)});else if(bd(e))for(const n in e)io(e[n],t);return e}function tp(e){Yf(e)&&V("Do not use built-in directive ids as custom directive id: "+e)}function np(e,t){const n=Ge;if(n===null)return V("withDirectives can only be used inside render functions."),e;const i=ua(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[l,r,u,d=Ne]=t[a];l&&(pe(l)&&(l={mounted:l,updated:l}),l.deep&&io(r),s.push({dir:l,instance:i,value:r,oldValue:void 0,arg:u,modifiers:d}))}return e}function jn(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const r=s[l];a&&(r.oldValue=a[l].value);let u=r.dir[i];u&&(go(),Rt(u,n,8,[e.el,r,e,t]),bo())}}function zv(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bn(()=>{e.isMounted=!0}),Fi(()=>{e.isUnmounting=!0}),e}const At=[Function,Array],Iv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:At,onEnter:At,onAfterEnter:At,onEnterCancelled:At,onBeforeLeave:At,onLeave:At,onAfterLeave:At,onLeaveCancelled:At,onBeforeAppear:At,onAppear:At,onAfterAppear:At,onAppearCancelled:At};function Cv(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function nl(e,t,n,i){const{appear:s,mode:a,persisted:l=!1,onBeforeEnter:r,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:f,onAfterLeave:h,onLeaveCancelled:v,onBeforeAppear:S,onAppear:x,onAfterAppear:k,onAppearCancelled:C}=t,b=String(e.key),P=Cv(n,e),A=(W,U)=>{W&&Rt(W,i,9,U)},R=(W,U)=>{const se=U[1];A(W,U),re(W)?W.every(de=>de.length<=1)&&se():W.length<=1&&se()},F={mode:a,persisted:l,beforeEnter(W){let U=r;if(!n.isMounted)if(s)U=S||r;else return;W._leaveCb&&W._leaveCb(!0);const se=P[b];se&&Gn(e,se)&&se.el._leaveCb&&se.el._leaveCb(),A(U,[W])},enter(W){let U=u,se=d,de=p;if(!n.isMounted)if(s)U=x||u,se=k||d,de=C||p;else return;let G=!1;const _e=W._enterCb=be=>{G||(G=!0,be?A(de,[W]):A(se,[W]),F.delayedLeave&&F.delayedLeave(),W._enterCb=void 0)};U?R(U,[W,_e]):_e()},leave(W,U){const se=String(e.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return U();A(m,[W]);let de=!1;const G=W._leaveCb=_e=>{de||(de=!0,U(),_e?A(v,[W]):A(h,[W]),W._leaveCb=void 0,P[se]===e&&delete P[se])};P[se]=e,f?R(f,[W,G]):G()},clone(W){return nl(W,t,n,i)}};return F}function As(e,t){e.shapeFlag&6&&e.component?As(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function op(e,t=!1,n){let i=[],s=0;for(let a=0;a<e.length;a++){let l=e[a];const r=n==null?l.key:String(n)+String(l.key!=null?l.key:a);l.type===Me?(l.patchFlag&128&&s++,i=i.concat(op(l.children,t,r))):(t||l.type!==mt)&&i.push(r!=null?an(l,{key:r}):l)}if(s>1)for(let a=0;a<i.length;a++)i[a].patchFlag=-2;return i}function Ke(e,t){return pe(e)?(()=>De({name:e.name},t,{setup:e}))():e}const Ao=e=>!!e.type.__asyncLoader,hr=e=>e.type.__isKeepAlive,Ev={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=wt(),i=n.ctx;if(!i.renderer)return()=>{const C=t.default&&t.default();return C&&C.length===1?C[0]:C};const s=new Map,a=new Set;let l=null;n.__v_cache=s;const r=n.suspense,{renderer:{p:u,m:d,um:p,o:{createElement:m}}}=i,f=m("div");i.activate=(C,b,P,A,R)=>{const F=C.component;d(C,b,P,0,r),u(F.vnode,C,b,P,F,r,A,C.slotScopeIds,R),et(()=>{F.isDeactivated=!1,F.a&&Zn(F.a);const W=C.props&&C.props.onVnodeMounted;W&&Kt(W,F.parent,C)},r),el(F)},i.deactivate=C=>{const b=C.component;d(C,f,null,1,r),et(()=>{b.da&&Zn(b.da);const P=C.props&&C.props.onVnodeUnmounted;P&&Kt(P,b.parent,C),b.isDeactivated=!0},r),el(b)};function h(C){ba(C),p(C,n,r,!0)}function v(C){s.forEach((b,P)=>{const A=Ei(b.type);A&&(!C||!C(A))&&S(P)})}function S(C){const b=s.get(C);!l||!Gn(b,l)?h(b):l&&ba(l),s.delete(C),a.delete(C)}ge(()=>[e.include,e.exclude],([C,b])=>{C&&v(P=>ai(C,P)),b&&v(P=>!ai(b,P))},{flush:"post",deep:!0});let x=null;const k=()=>{x!=null&&s.set(x,ya(n.subTree))};return bn(k),ra(k),Fi(()=>{s.forEach(C=>{const{subTree:b,suspense:P}=n,A=ya(b);if(C.type===A.type&&C.key===A.key){ba(A);const R=A.component.da;R&&et(R,P);return}h(C)})}),()=>{if(x=null,!t.default)return null;const C=t.default(),b=C[0];if(C.length>1)return V("KeepAlive should contain exactly one component child."),l=null,C;if(!Wn(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return l=null,b;let P=ya(b);const A=P.type,R=Ei(Ao(P)?P.type.__asyncResolved||{}:A),{include:F,exclude:W,max:U}=e;if(F&&(!R||!ai(F,R))||W&&R&&ai(W,R))return l=P,b;const se=P.key==null?A:P.key,de=s.get(se);return P.el&&(P=an(P),b.shapeFlag&128&&(b.ssContent=P)),x=se,de?(P.el=de.el,P.component=de.component,P.transition&&As(P,P.transition),P.shapeFlag|=512,a.delete(se),a.add(se)):(a.add(se),U&&a.size>parseInt(U,10)&&S(a.values().next().value)),P.shapeFlag|=256,l=P,Xd(b.type)?b:P}}},ip=Ev;function ai(e,t){return re(e)?e.some(n=>ai(n,t)):Fe(e)?e.split(",").includes(t):Qf(e)?e.test(t):!1}function sp(e,t){lp(e,"a",t)}function ap(e,t){lp(e,"da",t)}function lp(e,t,n=Ze){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(la(t,i,n),n){let s=n.parent;for(;s&&s.parent;)hr(s.parent.vnode)&&Ov(i,t,n,s),s=s.parent}}function Ov(e,t,n,i){const s=la(t,e,i,!0);ji(()=>{Gl(i[t],s)},n)}function ba(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ya(e){return e.shapeFlag&128?e.ssContent:e}function la(e,t,n=Ze,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...l)=>{if(n.isUnmounted)return;go(),Lo(n);const r=Rt(t,n,e,l);return mo(),bo(),r});return i?s.unshift(a):s.push(a),a}else{const s=Qn(dr[e].replace(/ hook$/,""));V(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const gn=e=>(t,n=Ze)=>(!Ci||e==="sp")&&la(e,(...i)=>t(...i),n),Mv=gn("bm"),bn=gn("m"),Tv=gn("bu"),ra=gn("u"),Fi=gn("bum"),ji=gn("um"),Av=gn("sp"),Kv=gn("rtg"),Pv=gn("rtc");function Lv(e,t=Ze){la("ec",e,t)}const ol="components";function Ks(e,t){return Hv(ol,e,!0,t)||e}const Rv=Symbol.for("v-ndc");function Hv(e,t,n=!0,i=!1){const s=Ge||Ze;if(s){const a=s.type;if(e===ol){const r=Ei(a,!1);if(r&&(r===t||r===nn(t)||r===vo(nn(t))))return a}const l=uc(s[e]||a[e],t)||uc(s.appContext[e],t);if(!l&&i)return a;if(n&&!l){const r=e===ol?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";V(`Failed to resolve ${e.slice(0,-1)}: ${t}${r}`)}return l}else V(`resolve${vo(e.slice(0,-1))} can only be used in render() or setup().`)}function uc(e,t){return e&&(e[t]||e[nn(t)]||e[vo(nn(t))])}function No(e,t,n,i){let s;const a=n&&n[i];if(re(e)||Fe(e)){s=new Array(e.length);for(let l=0,r=e.length;l<r;l++)s[l]=t(e[l],l,void 0,a&&a[l])}else if(typeof e=="number"){Number.isInteger(e)||V(`The v-for range expect an integer value but got ${e}.`),s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,a&&a[l])}else if(Ae(e))if(e[Symbol.iterator])s=Array.from(e,(l,r)=>t(l,r,void 0,a&&a[r]));else{const l=Object.keys(e);s=new Array(l.length);for(let r=0,u=l.length;r<u;r++){const d=l[r];s[r]=t(e[d],d,r,a&&a[r])}}else s=[];return n&&(n[i]=s),s}function Bt(e,t,n={},i,s){if(Ge.isCE||Ge.parent&&Ao(Ge.parent)&&Ge.parent.isCE)return t!=="default"&&(n.name=t),j("slot",n,i&&i());let a=e[t];a&&a.length>1&&(V("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),a=()=>[]),a&&a._c&&(a._d=!1),g();const l=a&&rp(a(n)),r=z(Me,{key:n.key||l&&l.key||`_${t}`},l||(i?i():[]),l&&e._===1?64:-2);return!s&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),a&&a._c&&(a._d=!0),r}function rp(e){return e.some(t=>Wn(t)?!(t.type===mt||t.type===Me&&!rp(t.children)):!0)?e:null}const il=e=>e?wp(e)?ua(e)||e.proxy:il(e.parent):null,po=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ii(e.props),$attrs:e=>ii(e.attrs),$slots:e=>ii(e.slots),$refs:e=>ii(e.refs),$parent:e=>il(e.parent),$root:e=>il(e.root),$emit:e=>e.emit,$options:e=>_r(e),$forceUpdate:e=>e.f||(e.f=()=>oa(e.update)),$nextTick:e=>e.n||(e.n=it.bind(e.proxy)),$watch:e=>$v.bind(e)}),vr=e=>e==="_"||e==="$",Sa=(e,t)=>e!==Ne&&!e.__isScriptSetup&&ze(e,t),cp={get({_:e},t){const{ctx:n,setupState:i,data:s,props:a,accessCache:l,type:r,appContext:u}=e;if(t==="__isVue")return!0;let d;if(t[0]!=="$"){const h=l[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(Sa(i,t))return l[t]=1,i[t];if(s!==Ne&&ze(s,t))return l[t]=2,s[t];if((d=e.propsOptions[0])&&ze(d,t))return l[t]=3,a[t];if(n!==Ne&&ze(n,t))return l[t]=4,n[t];sl&&(l[t]=0)}}const p=po[t];let m,f;if(p)return t==="$attrs"?(lt(e,"get",t),Ts()):t==="$slots"&&lt(e,"get",t),p(e);if((m=r.__cssModules)&&(m=m[t]))return m;if(n!==Ne&&ze(n,t))return l[t]=4,n[t];if(f=u.config.globalProperties,ze(f,t))return f[t];Ge&&(!Fe(t)||t.indexOf("__v")!==0)&&(s!==Ne&&vr(t[0])&&ze(s,t)?V(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ge&&V(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:i,setupState:s,ctx:a}=e;return Sa(s,t)?(s[t]=n,!0):s.__isScriptSetup&&ze(s,t)?(V(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):i!==Ne&&ze(i,t)?(i[t]=n,!0):ze(e.props,t)?(V(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(V(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(a,t,{enumerable:!0,configurable:!0,value:n}):a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:a}},l){let r;return!!n[l]||e!==Ne&&ze(e,l)||Sa(t,l)||(r=a[0])&&ze(r,l)||ze(i,l)||ze(po,l)||ze(s.config.globalProperties,l)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ze(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};cp.ownKeys=e=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Wv(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(po).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>po[n](e),set:bt})}),t}function Nv(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(i=>{Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>e.props[i],set:bt})})}function Dv(e){const{ctx:t,setupState:n}=e;Object.keys(ve(n)).forEach(i=>{if(!n.__isScriptSetup){if(vr(i[0])){V(`setup() return property ${JSON.stringify(i)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>n[i],set:bt})}})}function qv(){return Fv().slots}function Fv(){const e=wt();return e||V("useContext() called without active instance."),e.setupContext||(e.setupContext=kp(e))}function dc(e){return re(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function jv(){const e=Object.create(null);return(t,n)=>{e[n]?V(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let sl=!0;function Vv(e){const t=_r(e),n=e.proxy,i=e.ctx;sl=!1,t.beforeCreate&&pc(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:l,watch:r,provide:u,inject:d,created:p,beforeMount:m,mounted:f,beforeUpdate:h,updated:v,activated:S,deactivated:x,beforeDestroy:k,beforeUnmount:C,destroyed:b,unmounted:P,render:A,renderTracked:R,renderTriggered:F,errorCaptured:W,serverPrefetch:U,expose:se,inheritAttrs:de,components:G,directives:_e,filters:be}=t,we=jv();{const[ne]=e.propsOptions;if(ne)for(const ce in ne)we("Props",ce)}if(d&&Bv(d,i,we),l)for(const ne in l){const ce=l[ne];pe(ce)?(Object.defineProperty(i,ne,{value:ce.bind(n),configurable:!0,enumerable:!0,writable:!0}),we("Methods",ne)):V(`Method "${ne}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(s){pe(s)||V("The data option must be a function. Plain object usage is no longer supported.");const ne=s.call(n,n);if(er(ne)&&V("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ae(ne))V("data() should return an object.");else{e.data=je(ne);for(const ce in ne)we("Data",ce),vr(ce[0])||Object.defineProperty(i,ce,{configurable:!0,enumerable:!0,get:()=>ne[ce],set:bt})}}if(sl=!0,a)for(const ne in a){const ce=a[ne],$e=pe(ce)?ce.bind(n,n):pe(ce.get)?ce.get.bind(n,n):bt;$e===bt&&V(`Computed property "${ne}" has no getter.`);const Le=!pe(ce)&&pe(ce.set)?ce.set.bind(n):()=>{V(`Write operation failed: computed property "${ne}" is readonly.`)},Mt=N({get:$e,set:Le});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:nt=>Mt.value=nt}),we("Computed",ne)}if(r)for(const ne in r)up(r[ne],i,n,ne);if(u){const ne=pe(u)?u.call(n):u;Reflect.ownKeys(ne).forEach(ce=>{zt(ce,ne[ce])})}p&&pc(p,e,"c");function Re(ne,ce){re(ce)?ce.forEach($e=>ne($e.bind(n))):ce&&ne(ce.bind(n))}if(Re(Mv,m),Re(bn,f),Re(Tv,h),Re(ra,v),Re(sp,S),Re(ap,x),Re(Lv,W),Re(Pv,R),Re(Kv,F),Re(Fi,C),Re(ji,P),Re(Av,U),re(se))if(se.length){const ne=e.exposed||(e.exposed={});se.forEach(ce=>{Object.defineProperty(ne,ce,{get:()=>n[ce],set:$e=>n[ce]=$e})})}else e.exposed||(e.exposed={});A&&e.render===bt&&(e.render=A),de!=null&&(e.inheritAttrs=de),G&&(e.components=G),_e&&(e.directives=_e)}function Bv(e,t,n=bt){re(e)&&(e=al(e));for(const i in e){const s=e[i];let a;Ae(s)?"default"in s?a=$(s.from||i,s.default,!0):a=$(s.from||i):a=$(s),Te(a)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[i]=a,n("Inject",i)}}function pc(e,t,n){Rt(re(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function up(e,t,n,i){const s=i.includes(".")?ep(n,i):()=>n[i];if(Fe(e)){const a=t[e];pe(a)?ge(s,a):V(`Invalid watch handler specified by key "${e}"`,a)}else if(pe(e))ge(s,e.bind(n));else if(Ae(e))if(re(e))e.forEach(a=>up(a,t,n,i));else{const a=pe(e.handler)?e.handler.bind(n):t[e.handler];pe(a)?ge(s,a,e):V(`Invalid watch handler specified by key "${e.handler}"`,a)}else V(`Invalid watch option: "${i}"`,e)}function _r(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:a,config:{optionMergeStrategies:l}}=e.appContext,r=a.get(t);let u;return r?u=r:!s.length&&!n&&!i?u=t:(u={},s.length&&s.forEach(d=>Ps(u,d,l,!0)),Ps(u,t,l)),Ae(t)&&a.set(t,u),u}function Ps(e,t,n,i=!1){const{mixins:s,extends:a}=t;a&&Ps(e,a,n,!0),s&&s.forEach(l=>Ps(e,l,n,!0));for(const l in t)if(i&&l==="expose")V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const r=Uv[l]||n&&n[l];e[l]=r?r(e[l],t[l]):t[l]}return e}const Uv={data:mc,props:fc,emits:fc,methods:li,computed:li,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:li,directives:li,watch:Qv,provide:mc,inject:Jv};function mc(e,t){return t?e?function(){return De(pe(e)?e.call(this,this):e,pe(t)?t.call(this,this):t)}:t:e}function Jv(e,t){return li(al(e),al(t))}function al(e){if(re(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ct(e,t){return e?[...new Set([].concat(e,t))]:t}function li(e,t){return e?De(Object.create(null),e,t):t}function fc(e,t){return e?re(e)&&re(t)?[...new Set([...e,...t])]:De(Object.create(null),dc(e),dc(t??{})):t}function Qv(e,t){if(!e)return t;if(!t)return e;const n=De(Object.create(null),e);for(const i in t)n[i]=ct(e[i],t[i]);return n}function dp(){return{app:null,config:{isNativeTag:vd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yv=0;function Zv(e,t){return function(i,s=null){pe(i)||(i=De({},i)),s!=null&&!Ae(s)&&(V("root props passed to app.mount() must be an object."),s=null);const a=dp();Object.defineProperty(a.config,"unwrapInjectedRef",{get(){return!0},set(){V("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const l=new Set;let r=!1;const u=a.app={_uid:Yv++,_component:i,_props:s,_container:null,_context:a,_instance:null,version:Ws,get config(){return a.config},set config(d){V("app.config cannot be replaced. Modify individual options instead.")},use(d,...p){return l.has(d)?V("Plugin has already been applied to target app."):d&&pe(d.install)?(l.add(d),d.install(u,...p)):pe(d)?(l.add(d),d(u,...p)):V('A plugin must either be a function or an object with an "install" function.'),u},mixin(d){return a.mixins.includes(d)?V("Mixin has already been applied to target app"+(d.name?`: ${d.name}`:"")):a.mixins.push(d),u},component(d,p){return dl(d,a.config),p?(a.components[d]&&V(`Component "${d}" has already been registered in target app.`),a.components[d]=p,u):a.components[d]},directive(d,p){return tp(d),p?(a.directives[d]&&V(`Directive "${d}" has already been registered in target app.`),a.directives[d]=p,u):a.directives[d]},mount(d,p,m){if(r)V("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{d.__vue_app__&&V("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=j(i,s);return f.appContext=a,a.reload=()=>{e(an(f),d,m)},p&&t?t(f,d):e(f,d,m),r=!0,u._container=d,d.__vue_app__=u,u._instance=f.component,uv(u,Ws),ua(f.component)||f.component.proxy}},unmount(){r?(e(null,u._container),u._instance=null,dv(u),delete u._container.__vue_app__):V("Cannot unmount an app that is not mounted.")},provide(d,p){return d in a.provides&&V(`App already provides property with key "${String(d)}". It will be overwritten with the new value.`),a.provides[d]=p,u},runWithContext(d){Ls=u;try{return d()}finally{Ls=null}}};return u}}let Ls=null;function zt(e,t){if(!Ze)V("provide() can only be used inside setup().");else{let n=Ze.provides;const i=Ze.parent&&Ze.parent.provides;i===n&&(n=Ze.provides=Object.create(i)),n[e]=t}}function $(e,t,n=!1){const i=Ze||Ge;if(i||Ls){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ls._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&pe(t)?t.call(i&&i.proxy):t;V(`injection "${String(e)}" not found.`)}else V("inject() can only be used inside setup() or functional components.")}function Gv(e,t,n,i=!1){const s={},a={};$s(a,ca,1),e.propsDefaults=Object.create(null),pp(e,t,s,a);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);fp(t||{},s,e),n?e.props=i?s:Nh(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function Xv(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function e_(e,t,n,i){const{props:s,attrs:a,vnode:{patchFlag:l}}=e,r=ve(s),[u]=e.propsOptions;let d=!1;if(!Xv(e)&&(i||l>0)&&!(l&16)){if(l&8){const p=e.vnode.dynamicProps;for(let m=0;m<p.length;m++){let f=p[m];if(ia(e.emitsOptions,f))continue;const h=t[f];if(u)if(ze(a,f))h!==a[f]&&(a[f]=h,d=!0);else{const v=nn(f);s[v]=ll(u,r,v,h,e,!1)}else h!==a[f]&&(a[f]=h,d=!0)}}}else{pp(e,t,s,a)&&(d=!0);let p;for(const m in r)(!t||!ze(t,m)&&((p=vn(m))===m||!ze(t,p)))&&(u?n&&(n[m]!==void 0||n[p]!==void 0)&&(s[m]=ll(u,r,m,void 0,e,!0)):delete s[m]);if(a!==r)for(const m in a)(!t||!ze(t,m))&&(delete a[m],d=!0)}d&&on(e,"set","$attrs"),fp(t||{},s,e)}function pp(e,t,n,i){const[s,a]=e.propsOptions;let l=!1,r;if(t)for(let u in t){if(hs(u))continue;const d=t[u];let p;s&&ze(s,p=nn(u))?!a||!a.includes(p)?n[p]=d:(r||(r={}))[p]=d:ia(e.emitsOptions,u)||(!(u in i)||d!==i[u])&&(i[u]=d,l=!0)}if(a){const u=ve(n),d=r||Ne;for(let p=0;p<a.length;p++){const m=a[p];n[m]=ll(s,u,m,d[m],e,!ze(d,m))}}return l}function ll(e,t,n,i,s,a){const l=e[n];if(l!=null){const r=ze(l,"default");if(r&&i===void 0){const u=l.default;if(l.type!==Function&&!l.skipFactory&&pe(u)){const{propsDefaults:d}=s;n in d?i=d[n]:(Lo(s),i=d[n]=u.call(null,t),mo())}else i=u}l[0]&&(a&&!r?i=!1:l[1]&&(i===""||i===vn(n))&&(i=!0))}return i}function mp(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const a=e.props,l={},r=[];let u=!1;if(!pe(e)){const p=m=>{u=!0;const[f,h]=mp(m,t,!0);De(l,f),h&&r.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!a&&!u)return Ae(e)&&i.set(e,Mo),Mo;if(re(a))for(let p=0;p<a.length;p++){Fe(a[p])||V("props must be strings when using array syntax.",a[p]);const m=nn(a[p]);hc(m)&&(l[m]=Ne)}else if(a){Ae(a)||V("invalid props options",a);for(const p in a){const m=nn(p);if(hc(m)){const f=a[p],h=l[m]=re(f)||pe(f)?{type:f}:De({},f);if(h){const v=_c(Boolean,h.type),S=_c(String,h.type);h[0]=v>-1,h[1]=S<0||v<S,(v>-1||ze(h,"default"))&&r.push(m)}}}}const d=[l,r];return Ae(e)&&i.set(e,d),d}function hc(e){return e[0]!=="$"?!0:(V(`Invalid prop name: "${e}" is a reserved property.`),!1)}function rl(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function vc(e,t){return rl(e)===rl(t)}function _c(e,t){return re(t)?t.findIndex(n=>vc(n,e)):pe(t)&&vc(t,e)?0:-1}function fp(e,t,n){const i=ve(t),s=n.propsOptions[0];for(const a in s){let l=s[a];l!=null&&t_(a,i[a],l,!ze(e,a)&&!ze(e,vn(a)))}}function t_(e,t,n,i){const{type:s,required:a,validator:l,skipCheck:r}=n;if(a&&i){V('Missing required prop: "'+e+'"');return}if(!(t==null&&!a)){if(s!=null&&s!==!0&&!r){let u=!1;const d=re(s)?s:[s],p=[];for(let m=0;m<d.length&&!u;m++){const{valid:f,expectedType:h}=o_(t,d[m]);p.push(h||""),u=f}if(!u){V(i_(e,t,p));return}}l&&!l(t)&&V('Invalid prop: custom validator check failed for prop "'+e+'".')}}const n_=Dn("String,Number,Boolean,Function,Symbol,BigInt");function o_(e,t){let n;const i=rl(t);if(n_(i)){const s=typeof e;n=s===i.toLowerCase(),!n&&s==="object"&&(n=e instanceof t)}else i==="Object"?n=Ae(e):i==="Array"?n=re(e):i==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:i}}function i_(e,t,n){let i=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(vo).join(" | ")}`;const s=n[0],a=tr(t),l=gc(t,s),r=gc(t,a);return n.length===1&&bc(s)&&!s_(s,a)&&(i+=` with value ${l}`),i+=`, got ${a} `,bc(a)&&(i+=`with value ${r}.`),i}function gc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function bc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function s_(...e){return e.some(t=>t.toLowerCase()==="boolean")}const hp=e=>e[0]==="_"||e==="$stable",gr=e=>re(e)?e.map(Ft):[Ft(e)],a_=(e,t,n)=>{if(t._n)return t;const i=w((...s)=>(Ze&&V(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),gr(t(...s))),n);return i._c=!1,i},vp=(e,t,n)=>{const i=e._ctx;for(const s in e){if(hp(s))continue;const a=e[s];if(pe(a))t[s]=a_(s,a,i);else if(a!=null){V(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const l=gr(a);t[s]=()=>l}}},_p=(e,t)=>{hr(e.vnode)||V("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=gr(t);e.slots.default=()=>n},l_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ve(t),$s(t,"_",n)):vp(t,e.slots={})}else e.slots={},t&&_p(e,t);$s(e.slots,ca,1)},r_=(e,t,n)=>{const{vnode:i,slots:s}=e;let a=!0,l=Ne;if(i.shapeFlag&32){const r=t._;r?On?(De(s,t),on(e,"set","$slots")):n&&r===1?a=!1:(De(s,t),!n&&r===1&&delete s._):(a=!t.$stable,vp(t,s)),l=t}else t&&(_p(e,t),l={default:1});if(a)for(const r in s)!hp(r)&&!(r in l)&&delete s[r]};function cl(e,t,n,i,s=!1){if(re(e)){e.forEach((f,h)=>cl(f,t&&(re(t)?t[h]:t),n,i,s));return}if(Ao(i)&&!s)return;const a=i.shapeFlag&4?ua(i.component)||i.component.proxy:i.el,l=s?null:a,{i:r,r:u}=e;if(!r){V("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const d=t&&t.r,p=r.refs===Ne?r.refs={}:r.refs,m=r.setupState;if(d!=null&&d!==u&&(Fe(d)?(p[d]=null,ze(m,d)&&(m[d]=null)):Te(d)&&(d.value=null)),pe(u))hn(u,r,12,[l,p]);else{const f=Fe(u),h=Te(u);if(f||h){const v=()=>{if(e.f){const S=f?ze(m,u)?m[u]:p[u]:u.value;s?re(S)&&Gl(S,a):re(S)?S.includes(a)||S.push(a):f?(p[u]=[a],ze(m,u)&&(m[u]=p[u])):(u.value=[a],e.k&&(p[e.k]=u.value))}else f?(p[u]=l,ze(m,u)&&(m[u]=l)):h?(u.value=l,e.k&&(p[e.k]=l)):V("Invalid template ref type:",u,`(${typeof u})`)};l?(v.id=-1,et(v,n)):v()}else V("Invalid template ref type:",u,`(${typeof u})`)}}let Vo,In;function cn(e,t){e.appContext.config.performance&&Rs()&&In.mark(`vue-${t}-${e.uid}`),fv(e,t,Rs()?In.now():Date.now())}function un(e,t){if(e.appContext.config.performance&&Rs()){const n=`vue-${t}-${e.uid}`,i=n+":end";In.mark(i),In.measure(`<${da(e,e.type)}> ${t}`,n,i),In.clearMarks(n),In.clearMarks(i)}hv(e,t,Rs()?In.now():Date.now())}function Rs(){return Vo!==void 0||(typeof window<"u"&&window.performance?(Vo=!0,In=window.performance):Vo=!1),Vo}function c_(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const et=xv;function u_(e){return d_(e)}function d_(e,t){c_();const n=zs();n.__VUE__=!0,Jd(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:i,remove:s,patchProp:a,createElement:l,createText:r,createComment:u,setText:d,setElementText:p,parentNode:m,nextSibling:f,setScopeId:h=bt,insertStaticContent:v}=e,S=(_,y,K,q=null,D=null,Q=null,ee=!1,J=null,Y=On?!1:!!y.dynamicChildren)=>{if(_===y)return;_&&!Gn(_,y)&&(q=X(_),ht(_,D,Q,!0),_=null),y.patchFlag===-2&&(Y=!1,y.dynamicChildren=null);const{type:B,ref:le,shapeFlag:ae}=y;switch(B){case Vi:x(_,y,K,q);break;case mt:k(_,y,K,q);break;case di:_==null?C(y,K,q,ee):b(_,y,K,ee);break;case Me:_e(_,y,K,q,D,Q,ee,J,Y);break;default:ae&1?R(_,y,K,q,D,Q,ee,J,Y):ae&6?be(_,y,K,q,D,Q,ee,J,Y):ae&64||ae&128?B.process(_,y,K,q,D,Q,ee,J,Y,oe):V("Invalid VNode type:",B,`(${typeof B})`)}le!=null&&D&&cl(le,_&&_.ref,Q,y||_,!y)},x=(_,y,K,q)=>{if(_==null)i(y.el=r(y.children),K,q);else{const D=y.el=_.el;y.children!==_.children&&d(D,y.children)}},k=(_,y,K,q)=>{_==null?i(y.el=u(y.children||""),K,q):y.el=_.el},C=(_,y,K,q)=>{[_.el,_.anchor]=v(_.children,y,K,q,_.el,_.anchor)},b=(_,y,K,q)=>{if(y.children!==_.children){const D=f(_.anchor);A(_),[y.el,y.anchor]=v(y.children,K,D,q)}else y.el=_.el,y.anchor=_.anchor},P=({el:_,anchor:y},K,q)=>{let D;for(;_&&_!==y;)D=f(_),i(_,K,q),_=D;i(y,K,q)},A=({el:_,anchor:y})=>{let K;for(;_&&_!==y;)K=f(_),s(_),_=K;s(y)},R=(_,y,K,q,D,Q,ee,J,Y)=>{ee=ee||y.type==="svg",_==null?F(y,K,q,D,Q,ee,J,Y):se(_,y,D,Q,ee,J,Y)},F=(_,y,K,q,D,Q,ee,J)=>{let Y,B;const{type:le,props:ae,shapeFlag:ue,transition:he,dirs:Ce}=_;if(Y=_.el=l(_.type,Q,ae&&ae.is,ae),ue&8?p(Y,_.children):ue&16&&U(_.children,Y,null,q,D,Q&&le!=="foreignObject",ee,J),Ce&&jn(_,null,q,"created"),W(Y,_,_.scopeId,ee,q),ae){for(const We in ae)We!=="value"&&!hs(We)&&a(Y,We,null,ae[We],Q,_.children,q,D,H);"value"in ae&&a(Y,"value",null,ae.value),(B=ae.onVnodeBeforeMount)&&Kt(B,q,_)}Object.defineProperty(Y,"__vnode",{value:_,enumerable:!1}),Object.defineProperty(Y,"__vueParentComponent",{value:q,enumerable:!1}),Ce&&jn(_,null,q,"beforeMount");const qe=(!D||D&&!D.pendingBranch)&&he&&!he.persisted;qe&&he.beforeEnter(Y),i(Y,y,K),((B=ae&&ae.onVnodeMounted)||qe||Ce)&&et(()=>{B&&Kt(B,q,_),qe&&he.enter(Y),Ce&&jn(_,null,q,"mounted")},D)},W=(_,y,K,q,D)=>{if(K&&h(_,K),q)for(let Q=0;Q<q.length;Q++)h(_,q[Q]);if(D){let Q=D.subTree;if(Q.patchFlag>0&&Q.patchFlag&2048&&(Q=Gd(Q.children)||Q),y===Q){const ee=D.vnode;W(_,ee,ee.scopeId,ee.slotScopeIds,D.parent)}}},U=(_,y,K,q,D,Q,ee,J,Y=0)=>{for(let B=Y;B<_.length;B++){const le=_[B]=J?$n(_[B]):Ft(_[B]);S(null,le,y,K,q,D,Q,ee,J)}},se=(_,y,K,q,D,Q,ee)=>{const J=y.el=_.el;let{patchFlag:Y,dynamicChildren:B,dirs:le}=y;Y|=_.patchFlag&16;const ae=_.props||Ne,ue=y.props||Ne;let he;K&&Vn(K,!1),(he=ue.onVnodeBeforeUpdate)&&Kt(he,K,y,_),le&&jn(y,_,K,"beforeUpdate"),K&&Vn(K,!0),On&&(Y=0,ee=!1,B=null);const Ce=D&&y.type!=="foreignObject";if(B?(de(_.dynamicChildren,B,J,K,q,Ce,Q),Hs(_,y)):ee||$e(_,y,J,null,K,q,Ce,Q,!1),Y>0){if(Y&16)G(J,y,ae,ue,K,q,D);else if(Y&2&&ae.class!==ue.class&&a(J,"class",null,ue.class,D),Y&4&&a(J,"style",ae.style,ue.style,D),Y&8){const qe=y.dynamicProps;for(let We=0;We<qe.length;We++){const Ue=qe[We],Nt=ae[Ue],ko=ue[Ue];(ko!==Nt||Ue==="value")&&a(J,Ue,Nt,ko,D,_.children,K,q,H)}}Y&1&&_.children!==y.children&&p(J,y.children)}else!ee&&B==null&&G(J,y,ae,ue,K,q,D);((he=ue.onVnodeUpdated)||le)&&et(()=>{he&&Kt(he,K,y,_),le&&jn(y,_,K,"updated")},q)},de=(_,y,K,q,D,Q,ee)=>{for(let J=0;J<y.length;J++){const Y=_[J],B=y[J],le=Y.el&&(Y.type===Me||!Gn(Y,B)||Y.shapeFlag&70)?m(Y.el):K;S(Y,B,le,null,q,D,Q,ee,!0)}},G=(_,y,K,q,D,Q,ee)=>{if(K!==q){if(K!==Ne)for(const J in K)!hs(J)&&!(J in q)&&a(_,J,K[J],null,ee,y.children,D,Q,H);for(const J in q){if(hs(J))continue;const Y=q[J],B=K[J];Y!==B&&J!=="value"&&a(_,J,B,Y,ee,y.children,D,Q,H)}"value"in q&&a(_,"value",K.value,q.value)}},_e=(_,y,K,q,D,Q,ee,J,Y)=>{const B=y.el=_?_.el:r(""),le=y.anchor=_?_.anchor:r("");let{patchFlag:ae,dynamicChildren:ue,slotScopeIds:he}=y;(On||ae&2048)&&(ae=0,Y=!1,ue=null),he&&(J=J?J.concat(he):he),_==null?(i(B,K,q),i(le,K,q),U(y.children,K,le,D,Q,ee,J,Y)):ae>0&&ae&64&&ue&&_.dynamicChildren?(de(_.dynamicChildren,ue,K,D,Q,ee,J),Hs(_,y)):$e(_,y,K,le,D,Q,ee,J,Y)},be=(_,y,K,q,D,Q,ee,J,Y)=>{y.slotScopeIds=J,_==null?y.shapeFlag&512?D.ctx.activate(y,K,q,ee,Y):we(y,K,q,D,Q,ee,Y):Re(_,y,Y)},we=(_,y,K,q,D,Q,ee)=>{const J=_.component=w_(_,q,D);if(J.type.__hmrId&&av(J),vs(_),cn(J,"mount"),hr(_)&&(J.ctx.renderer=oe),cn(J,"init"),k_(J),un(J,"init"),J.asyncDep){if(D&&D.registerDep(J,ne),!_.el){const Y=J.subTree=j(mt);k(null,Y,y,K)}return}ne(J,_,y,K,D,Q,ee),_s(),un(J,"mount")},Re=(_,y,K)=>{const q=y.component=_.component;if(Sv(_,y,K))if(q.asyncDep&&!q.asyncResolved){vs(y),ce(q,y,K),_s();return}else q.next=y,iv(q.update),q.update();else y.el=_.el,q.vnode=y},ne=(_,y,K,q,D,Q,ee)=>{const J=()=>{if(_.isMounted){let{next:le,bu:ae,u:ue,parent:he,vnode:Ce}=_,qe=le,We;vs(le||_.vnode),Vn(_,!1),le?(le.el=Ce.el,ce(_,le,ee)):le=Ce,ae&&Zn(ae),(We=le.props&&le.props.onVnodeBeforeUpdate)&&Kt(We,he,le,Ce),Vn(_,!0),cn(_,"render");const Ue=ga(_);un(_,"render");const Nt=_.subTree;_.subTree=Ue,cn(_,"patch"),S(Nt,Ue,m(Nt.el),X(Nt),_,D,Q),un(_,"patch"),le.el=Ue.el,qe===null&&wv(_,Ue.el),ue&&et(ue,D),(We=le.props&&le.props.onVnodeUpdated)&&et(()=>Kt(We,he,le,Ce),D),Qd(_),_s()}else{let le;const{el:ae,props:ue}=y,{bm:he,m:Ce,parent:qe}=_,We=Ao(y);if(Vn(_,!1),he&&Zn(he),!We&&(le=ue&&ue.onVnodeBeforeMount)&&Kt(le,qe,y),Vn(_,!0),ae&&He){const Ue=()=>{cn(_,"render"),_.subTree=ga(_),un(_,"render"),cn(_,"hydrate"),He(ae,_.subTree,_,D,null),un(_,"hydrate")};We?y.type.__asyncLoader().then(()=>!_.isUnmounted&&Ue()):Ue()}else{cn(_,"render");const Ue=_.subTree=ga(_);un(_,"render"),cn(_,"patch"),S(null,Ue,K,q,_,D,Q),un(_,"patch"),y.el=Ue.el}if(Ce&&et(Ce,D),!We&&(le=ue&&ue.onVnodeMounted)){const Ue=y;et(()=>Kt(le,qe,Ue),D)}(y.shapeFlag&256||qe&&Ao(qe.vnode)&&qe.vnode.shapeFlag&256)&&_.a&&et(_.a,D),_.isMounted=!0,el(_),y=K=q=null}},Y=_.effect=new sr(J,()=>oa(B),_.scope),B=_.update=()=>Y.run();B.id=_.uid,Vn(_,!0),Y.onTrack=_.rtc?le=>Zn(_.rtc,le):void 0,Y.onTrigger=_.rtg?le=>Zn(_.rtg,le):void 0,B.ownerInstance=_,B()},ce=(_,y,K)=>{y.component=_;const q=_.vnode.props;_.vnode=y,_.next=null,e_(_,y.props,q,K),r_(_,y.children,K),go(),ac(),bo()},$e=(_,y,K,q,D,Q,ee,J,Y=!1)=>{const B=_&&_.children,le=_?_.shapeFlag:0,ae=y.children,{patchFlag:ue,shapeFlag:he}=y;if(ue>0){if(ue&128){Mt(B,ae,K,q,D,Q,ee,J,Y);return}else if(ue&256){Le(B,ae,K,q,D,Q,ee,J,Y);return}}he&8?(le&16&&H(B,D,Q),ae!==B&&p(K,ae)):le&16?he&16?Mt(B,ae,K,q,D,Q,ee,J,Y):H(B,D,Q,!0):(le&8&&p(K,""),he&16&&U(ae,K,q,D,Q,ee,J,Y))},Le=(_,y,K,q,D,Q,ee,J,Y)=>{_=_||Mo,y=y||Mo;const B=_.length,le=y.length,ae=Math.min(B,le);let ue;for(ue=0;ue<ae;ue++){const he=y[ue]=Y?$n(y[ue]):Ft(y[ue]);S(_[ue],he,K,null,D,Q,ee,J,Y)}B>le?H(_,D,Q,!0,!1,ae):U(y,K,q,D,Q,ee,J,Y,ae)},Mt=(_,y,K,q,D,Q,ee,J,Y)=>{let B=0;const le=y.length;let ae=_.length-1,ue=le-1;for(;B<=ae&&B<=ue;){const he=_[B],Ce=y[B]=Y?$n(y[B]):Ft(y[B]);if(Gn(he,Ce))S(he,Ce,K,null,D,Q,ee,J,Y);else break;B++}for(;B<=ae&&B<=ue;){const he=_[ae],Ce=y[ue]=Y?$n(y[ue]):Ft(y[ue]);if(Gn(he,Ce))S(he,Ce,K,null,D,Q,ee,J,Y);else break;ae--,ue--}if(B>ae){if(B<=ue){const he=ue+1,Ce=he<le?y[he].el:q;for(;B<=ue;)S(null,y[B]=Y?$n(y[B]):Ft(y[B]),K,Ce,D,Q,ee,J,Y),B++}}else if(B>ue)for(;B<=ae;)ht(_[B],D,Q,!0),B++;else{const he=B,Ce=B,qe=new Map;for(B=Ce;B<=ue;B++){const rt=y[B]=Y?$n(y[B]):Ft(y[B]);rt.key!=null&&(qe.has(rt.key)&&V("Duplicate keys found during update:",JSON.stringify(rt.key),"Make sure keys are unique."),qe.set(rt.key,B))}let We,Ue=0;const Nt=ue-Ce+1;let ko=!1,Qr=0;const jo=new Array(Nt);for(B=0;B<Nt;B++)jo[B]=0;for(B=he;B<=ae;B++){const rt=_[B];if(Ue>=Nt){ht(rt,D,Q,!0);continue}let Yt;if(rt.key!=null)Yt=qe.get(rt.key);else for(We=Ce;We<=ue;We++)if(jo[We-Ce]===0&&Gn(rt,y[We])){Yt=We;break}Yt===void 0?ht(rt,D,Q,!0):(jo[Yt-Ce]=B+1,Yt>=Qr?Qr=Yt:ko=!0,S(rt,y[Yt],K,null,D,Q,ee,J,Y),Ue++)}const Yr=ko?p_(jo):Mo;for(We=Yr.length-1,B=Nt-1;B>=0;B--){const rt=Ce+B,Yt=y[rt],Zr=rt+1<le?y[rt+1].el:q;jo[B]===0?S(null,Yt,K,Zr,D,Q,ee,J,Y):ko&&(We<0||B!==Yr[We]?nt(Yt,K,Zr,2):We--)}}},nt=(_,y,K,q,D=null)=>{const{el:Q,type:ee,transition:J,children:Y,shapeFlag:B}=_;if(B&6){nt(_.component.subTree,y,K,q);return}if(B&128){_.suspense.move(y,K,q);return}if(B&64){ee.move(_,y,K,oe);return}if(ee===Me){i(Q,y,K);for(let ae=0;ae<Y.length;ae++)nt(Y[ae],y,K,q);i(_.anchor,y,K);return}if(ee===di){P(_,y,K);return}if(q!==2&&B&1&&J)if(q===0)J.beforeEnter(Q),i(Q,y,K),et(()=>J.enter(Q),D);else{const{leave:ae,delayLeave:ue,afterLeave:he}=J,Ce=()=>i(Q,y,K),qe=()=>{ae(Q,()=>{Ce(),he&&he()})};ue?ue(Q,Ce,qe):qe()}else i(Q,y,K)},ht=(_,y,K,q=!1,D=!1)=>{const{type:Q,props:ee,ref:J,children:Y,dynamicChildren:B,shapeFlag:le,patchFlag:ae,dirs:ue}=_;if(J!=null&&cl(J,null,K,_,!0),le&256){y.ctx.deactivate(_);return}const he=le&1&&ue,Ce=!Ao(_);let qe;if(Ce&&(qe=ee&&ee.onVnodeBeforeUnmount)&&Kt(qe,y,_),le&6)Tt(_.component,K,q);else{if(le&128){_.suspense.unmount(K,q);return}he&&jn(_,null,y,"beforeUnmount"),le&64?_.type.remove(_,y,K,D,oe,q):B&&(Q!==Me||ae>0&&ae&64)?H(B,y,K,!1,!0):(Q===Me&&ae&384||!D&&le&16)&&H(Y,y,K),q&&Qt(_)}(Ce&&(qe=ee&&ee.onVnodeUnmounted)||he)&&et(()=>{qe&&Kt(qe,y,_),he&&jn(_,null,y,"unmounted")},K)},Qt=_=>{const{type:y,el:K,anchor:q,transition:D}=_;if(y===Me){_.patchFlag>0&&_.patchFlag&2048&&D&&!D.persisted?_.children.forEach(ee=>{ee.type===mt?s(ee.el):Qt(ee)}):Fn(K,q);return}if(y===di){A(_);return}const Q=()=>{s(K),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:ee,delayLeave:J}=D,Y=()=>ee(K,Q);J?J(_.el,Q,Y):Y()}else Q()},Fn=(_,y)=>{let K;for(;_!==y;)K=f(_),s(_),_=K;s(y)},Tt=(_,y,K)=>{_.type.__hmrId&&lv(_);const{bum:q,scope:D,update:Q,subTree:ee,um:J}=_;q&&Zn(q),D.stop(),Q&&(Q.active=!1,ht(ee,_,y,K)),J&&et(J,y),et(()=>{_.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve()),mv(_)},H=(_,y,K,q=!1,D=!1,Q=0)=>{for(let ee=Q;ee<_.length;ee++)ht(_[ee],y,K,q,D)},X=_=>_.shapeFlag&6?X(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),te=(_,y,K)=>{_==null?y._vnode&&ht(y._vnode,null,null,!0):S(y._vnode||null,_,y,null,null,null,K),ac(),Vd(),y._vnode=_},oe={p:S,um:ht,m:nt,r:Qt,mt:we,mc:U,pc:$e,pbc:de,n:X,o:e};let ke,He;return t&&([ke,He]=t(oe)),{render:te,hydrate:ke,createApp:Zv(te,ke)}}function Vn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Hs(e,t,n=!1){const i=e.children,s=t.children;if(re(i)&&re(s))for(let a=0;a<i.length;a++){const l=i[a];let r=s[a];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=s[a]=$n(s[a]),r.el=l.el),n||Hs(l,r)),r.type===Vi&&(r.el=l.el),r.type===mt&&!r.el&&(r.el=l.el)}}function p_(e){const t=e.slice(),n=[0];let i,s,a,l,r;const u=e.length;for(i=0;i<u;i++){const d=e[i];if(d!==0){if(s=n[n.length-1],e[s]<d){t[i]=s,n.push(i);continue}for(a=0,l=n.length-1;a<l;)r=a+l>>1,e[n[r]]<d?a=r+1:l=r;d<e[n[a]]&&(a>0&&(t[i]=n[a-1]),n[a]=i)}}for(a=n.length,l=n[a-1];a-- >0;)n[a]=l,l=t[l];return n}const m_=e=>e.__isTeleport,Ko=e=>e&&(e.disabled||e.disabled===""),yc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ul=(e,t)=>{const n=e&&e.to;if(Fe(n))if(t){const i=t(n);return i||V(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),i}else return V("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Ko(e)&&V(`Invalid Teleport target: ${n}`),n},f_={__isTeleport:!0,process(e,t,n,i,s,a,l,r,u,d){const{mc:p,pc:m,pbc:f,o:{insert:h,querySelector:v,createText:S,createComment:x}}=d,k=Ko(t.props);let{shapeFlag:C,children:b,dynamicChildren:P}=t;if(On&&(u=!1,P=null),e==null){const A=t.el=x("teleport start"),R=t.anchor=x("teleport end");h(A,n,i),h(R,n,i);const F=t.target=ul(t.props,v),W=t.targetAnchor=S("");F?(h(W,F),l=l||yc(F)):k||V("Invalid Teleport target on mount:",F,`(${typeof F})`);const U=(se,de)=>{C&16&&p(b,se,de,s,a,l,r,u)};k?U(n,R):F&&U(F,W)}else{t.el=e.el;const A=t.anchor=e.anchor,R=t.target=e.target,F=t.targetAnchor=e.targetAnchor,W=Ko(e.props),U=W?n:R,se=W?A:F;if(l=l||yc(R),P?(f(e.dynamicChildren,P,U,s,a,l,r),Hs(e,t,!0)):u||m(e,t,U,se,s,a,l,r,!1),k)W||os(t,n,A,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const de=t.target=ul(t.props,v);de?os(t,de,null,d,0):V("Invalid Teleport target on update:",R,`(${typeof R})`)}else W&&os(t,R,F,d,1)}gp(t)},remove(e,t,n,i,{um:s,o:{remove:a}},l){const{shapeFlag:r,children:u,anchor:d,targetAnchor:p,target:m,props:f}=e;if(m&&a(p),(l||!Ko(f))&&(a(d),r&16))for(let h=0;h<u.length;h++){const v=u[h];s(v,t,n,!0,!!v.dynamicChildren)}},move:os,hydrate:h_};function os(e,t,n,{o:{insert:i},m:s},a=2){a===0&&i(e.targetAnchor,t,n);const{el:l,anchor:r,shapeFlag:u,children:d,props:p}=e,m=a===2;if(m&&i(l,t,n),(!m||Ko(p))&&u&16)for(let f=0;f<d.length;f++)s(d[f],t,n,2);m&&i(r,t,n)}function h_(e,t,n,i,s,a,{o:{nextSibling:l,parentNode:r,querySelector:u}},d){const p=t.target=ul(t.props,u);if(p){const m=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Ko(t.props))t.anchor=d(l(e),t,r(e),n,i,s,a),t.targetAnchor=m;else{t.anchor=l(e);let f=m;for(;f;)if(f=l(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,p._lpa=t.targetAnchor&&l(t.targetAnchor);break}d(m,t,p,n,i,s,a)}gp(t)}return t.anchor&&l(t.anchor)}const v_=f_;function gp(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Me=Symbol.for("v-fgt"),Vi=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),di=Symbol.for("v-stc"),pi=[];let Vt=null;function g(e=!1){pi.push(Vt=e?null:[])}function __(){pi.pop(),Vt=pi[pi.length-1]||null}let Ii=1;function Sc(e){Ii+=e}function bp(e){return e.dynamicChildren=Ii>0?Vt||Mo:null,__(),Ii>0&&Vt&&Vt.push(e),e}function ie(e,t,n,i,s,a){return bp(o(e,t,n,i,s,a,!0))}function z(e,t,n,i,s){return bp(j(e,t,n,i,s,!0))}function Wn(e){return e?e.__v_isVNode===!0:!1}function Gn(e,t){return t.shapeFlag&6&&Eo.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const g_=(...e)=>b_(...e),ca="__vInternal",yp=({key:e})=>e??null,gs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Fe(e)||Te(e)||pe(e)?{i:Ge,r:e,k:t,f:!!n}:e:null);function o(e,t=null,n=null,i=0,s=null,a=e===Me?0:1,l=!1,r=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yp(t),ref:t&&gs(t),scopeId:sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ge};return r?(br(u,n),a&128&&e.normalize(u)):n&&(u.shapeFlag|=Fe(n)?8:16),u.key!==u.key&&V("VNode created with invalid key (NaN). VNode type:",u.type),Ii>0&&!l&&Vt&&(u.patchFlag>0||a&6)&&u.patchFlag!==32&&Vt.push(u),u}const j=g_;function b_(e,t=null,n=null,i=0,s=null,a=!1){if((!e||e===Rv)&&(e||V(`Invalid vnode type when creating vnode: ${e}.`),e=mt),Wn(e)){const r=an(e,t,!0);return n&&br(r,n),Ii>0&&!a&&Vt&&(r.shapeFlag&6?Vt[Vt.indexOf(e)]=r:Vt.push(r)),r.patchFlag|=-2,r}if($p(e)&&(e=e.__vccOpts),t){t=O(t);let{class:r,style:u}=t;r&&!Fe(r)&&(t.class=Ve(r)),Ae(u)&&(Os(u)&&!re(u)&&(u=De({},u)),t.style=tt(u))}const l=Fe(e)?1:Xd(e)?128:m_(e)?64:Ae(e)?4:pe(e)?2:0;return l&4&&Os(e)&&(e=ve(e),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),o(e,t,n,i,s,l,a,!0)}function O(e){return e?Os(e)||ca in e?De({},e):e:null}function an(e,t,n=!1){const{props:i,ref:s,patchFlag:a,children:l}=e,r=t?me(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:r,key:r&&yp(r),ref:t&&t.ref?n&&s?re(s)?s.concat(gs(t)):[s,gs(t)]:gs(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a===-1&&re(l)?l.map(Sp):l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Me?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&an(e.ssContent),ssFallback:e.ssFallback&&an(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Sp(e){const t=an(e);return re(e.children)&&(t.children=e.children.map(Sp)),t}function c(e=" ",t=0){return j(Vi,null,e,t)}function Se(e="",t=!1){return t?(g(),z(mt,null,e)):j(mt,null,e)}function Ft(e){return e==null||typeof e=="boolean"?j(mt):re(e)?j(Me,null,e.slice()):typeof e=="object"?$n(e):j(Vi,null,String(e))}function $n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:an(e)}function br(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(re(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),br(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(ca in t)?t._ctx=Ge:s===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else pe(t)?(t={default:t,_ctx:Ge},n=32):(t=String(t),i&64?(n=16,t=[c(t)]):n=8);e.children=t,e.shapeFlag|=n}function me(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Ve([t.class,i.class]));else if(s==="style")t.style=tt([t.style,i.style]);else if(Ni(s)){const a=t[s],l=i[s];l&&a!==l&&!(re(a)&&a.includes(l))&&(t[s]=a?[].concat(a,l):l)}else s!==""&&(t[s]=i[s])}return t}function Kt(e,t,n,i=null){Rt(e,t,7,[n,i])}const y_=dp();let S_=0;function w_(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||y_,a={uid:S_++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mp(i,s),emitsOptions:Zd(i,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:i.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx=Wv(a),a.root=t?t.root:a,a.emit=_v.bind(null,a),e.ce&&e.ce(a),a}let Ze=null;const wt=()=>Ze||Ge;let yr,$o,wc="__VUE_INSTANCE_SETTERS__";($o=zs()[wc])||($o=zs()[wc]=[]),$o.push(e=>Ze=e),yr=e=>{$o.length>1?$o.forEach(t=>t(e)):$o[0](e)};const Lo=e=>{yr(e),e.scope.on()},mo=()=>{Ze&&Ze.scope.off(),yr(null)},x_=Dn("slot,component");function dl(e,t){const n=t.isNativeTag||vd;(x_(e)||n(e))&&V("Do not use built-in or reserved HTML elements as component id: "+e)}function wp(e){return e.vnode.shapeFlag&4}let Ci=!1;function k_(e,t=!1){Ci=t;const{props:n,children:i}=e.vnode,s=wp(e);Gv(e,n,s,t),l_(e,i);const a=s?$_(e,t):void 0;return Ci=!1,a}function $_(e,t){var n;const i=e.type;{if(i.name&&dl(i.name,e.appContext.config),i.components){const a=Object.keys(i.components);for(let l=0;l<a.length;l++)dl(a[l],e.appContext.config)}if(i.directives){const a=Object.keys(i.directives);for(let l=0;l<a.length;l++)tp(a[l])}i.compilerOptions&&z_()&&V('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ta(new Proxy(e.ctx,cp)),Nv(e);const{setup:s}=i;if(s){const a=e.setupContext=s.length>1?kp(e):null;Lo(e),go();const l=hn(s,e,0,[ii(e.props),a]);if(bo(),mo(),er(l)){if(l.then(mo,mo),t)return l.then(r=>{xc(e,r,t)}).catch(r=>{na(r,e,0)});if(e.asyncDep=l,!e.suspense){const r=(n=i.name)!=null?n:"Anonymous";V(`Component <${r}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else xc(e,l,t)}else xp(e,t)}function xc(e,t,n){pe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ae(t)?(Wn(t)&&V("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=Wd(t),Dv(e)):t!==void 0&&V(`setup() should return an object. Received: ${t===null?"null":typeof t}`),xp(e,n)}let pl;const z_=()=>!pl;function xp(e,t,n){const i=e.type;if(!e.render){if(!t&&pl&&!i.render){const s=i.template||_r(e).template;if(s){cn(e,"compile");const{isCustomElement:a,compilerOptions:l}=e.appContext.config,{delimiters:r,compilerOptions:u}=i,d=De(De({isCustomElement:a,delimiters:r},l),u);i.render=pl(s,d),un(e,"compile")}}e.render=i.render||bt}Lo(e),go(),Vv(e),bo(),mo(),!i.render&&e.render===bt&&!t&&(i.template?V('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):V("Component is missing template or render function."))}function I_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ts(),lt(e,"get","$attrs"),t[n]},set(){return V("setupContext.attrs is readonly."),!1},deleteProperty(){return V("setupContext.attrs is readonly."),!1}}))}function C_(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(t,n){return lt(e,"get","$slots"),t[n]}}))}function kp(e){return Object.freeze({get attrs(){return I_(e)},get slots(){return C_(e)},get emit(){return(n,...i)=>e.emit(n,...i)},expose:n=>{if(e.exposed&&V("expose() should be called only once per setup()."),n!=null){let i=typeof n;i==="object"&&(re(n)?i="array":Te(n)&&(i="ref")),i!=="object"&&V(`expose() should be passed a plain object, received ${i}.`)}e.exposed=n||{}}})}function ua(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wd(ta(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in po)return po[n](e)},has(t,n){return n in t||n in po}}))}const E_=/(?:^|[-_])(\w)/g,O_=e=>e.replace(E_,t=>t.toUpperCase()).replace(/[-_]/g,"");function Ei(e,t=!0){return pe(e)?e.displayName||e.name:e.name||t&&e.__name}function da(e,t,n=!1){let i=Ei(t);if(!i&&t.__file){const s=t.__file.match(/([^/\\]+)\.\w+$/);s&&(i=s[1])}if(!i&&e&&e.parent){const s=a=>{for(const l in a)if(a[l]===t)return l};i=s(e.components||e.parent.type.components)||s(e.appContext.components)}return i?O_(i):n?"App":"Anonymous"}function $p(e){return pe(e)&&"__vccOpts"in e}const N=(e,t)=>Qh(e,t,Ci);function St(e,t,n){const i=arguments.length;return i===2?Ae(t)&&!re(t)?Wn(t)?j(e,null,[t]):j(e,t):j(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Wn(n)&&(n=[n]),j(e,t,n))}const M_=Symbol.for("v-scx"),T_=()=>{{const e=$(M_);return e||V("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function wa(e){return!!(e&&e.__v_isShallow)}function A_(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},i={style:"color:#9d288c"},s={header(m){return Ae(m)?m.__isVue?["div",e,"VueInstance"]:Te(m)?["div",{},["span",e,p(m)],"<",r(m.value),">"]:co(m)?["div",{},["span",e,wa(m)?"ShallowReactive":"Reactive"],"<",r(m),`>${Hn(m)?" (readonly)":""}`]:Hn(m)?["div",{},["span",e,wa(m)?"ShallowReadonly":"Readonly"],"<",r(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...a(m.$)]}};function a(m){const f=[];m.type.props&&m.props&&f.push(l("props",ve(m.props))),m.setupState!==Ne&&f.push(l("setup",m.setupState)),m.data!==Ne&&f.push(l("data",ve(m.data)));const h=u(m,"computed");h&&f.push(l("computed",h));const v=u(m,"inject");return v&&f.push(l("injected",v)),f.push(["div",{},["span",{style:i.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),f}function l(m,f){return f=De({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",i,h+": "],r(f[h],!1)])]]:["span",{}]}function r(m,f=!0){return typeof m=="number"?["span",t,m]:typeof m=="string"?["span",n,JSON.stringify(m)]:typeof m=="boolean"?["span",i,m]:Ae(m)?["object",{object:f?ve(m):m}]:["span",n,String(m)]}function u(m,f){const h=m.type;if(pe(h))return;const v={};for(const S in m.ctx)d(h,S,f)&&(v[S]=m.ctx[S]);return v}function d(m,f,h){const v=m[h];if(re(v)&&v.includes(f)||Ae(v)&&f in v||m.extends&&d(m.extends,f,h)||m.mixins&&m.mixins.some(S=>d(S,f,h)))return!0}function p(m){return wa(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const Ws="3.3.4",K_="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,kc=Xn&&Xn.createElement("template"),P_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?Xn.createElementNS(K_,e):Xn.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Xn.createTextNode(e),createComment:e=>Xn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,a){const l=n?n.previousSibling:t.lastChild;if(s&&(s===a||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===a||!(s=s.nextSibling)););else{kc.innerHTML=i?`<svg>${e}</svg>`:e;const r=kc.content;if(i){const u=r.firstChild;for(;u.firstChild;)r.appendChild(u.firstChild);r.removeChild(u)}t.insertBefore(r,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function L_(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function R_(e,t,n){const i=e.style,s=Fe(n);if(n&&!s){if(t&&!Fe(t))for(const a in t)n[a]==null&&ml(i,a,"");for(const a in n)ml(i,a,n[a])}else{const a=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=a)}}const H_=/[^\\];\s*$/,$c=/\s*!important$/;function ml(e,t,n){if(re(n))n.forEach(i=>ml(e,t,i));else if(n==null&&(n=""),H_.test(n)&&V(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const i=W_(e,t);$c.test(n)?e.setProperty(vn(i),n.replace($c,""),"important"):e[i]=n}}const zc=["Webkit","Moz","ms"],xa={};function W_(e,t){const n=xa[t];if(n)return n;let i=nn(t);if(i!=="filter"&&i in e)return xa[t]=i;i=vo(i);for(let s=0;s<zc.length;s++){const a=zc[s]+i;if(a in e)return xa[t]=a}return t}const Ic="http://www.w3.org/1999/xlink";function N_(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ic,t.slice(6,t.length)):e.setAttributeNS(Ic,t,n);else{const a=ch(t);n==null||a&&!Sd(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function D_(e,t,n,i,s,a,l){if(t==="innerHTML"||t==="textContent"){i&&l(i,s,a),e[t]=n??"";return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){e._value=n;const d=r==="OPTION"?e.getAttribute("value"):e.value,p=n??"";d!==p&&(e.value=p),n==null&&e.removeAttribute(t);return}let u=!1;if(n===""||n==null){const d=typeof e[t];d==="boolean"?n=Sd(n):n==null&&d==="string"?(n="",u=!0):d==="number"&&(n=0,u=!0)}try{e[t]=n}catch(d){u||V(`Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,d)}u&&e.removeAttribute(t)}function q_(e,t,n,i){e.addEventListener(t,n,i)}function F_(e,t,n,i){e.removeEventListener(t,n,i)}function j_(e,t,n,i,s=null){const a=e._vei||(e._vei={}),l=a[t];if(i&&l)l.value=i;else{const[r,u]=V_(t);if(i){const d=a[t]=J_(i,s);q_(e,r,d,u)}else l&&(F_(e,r,l,u),a[t]=void 0)}}const Cc=/(?:Once|Passive|Capture)$/;function V_(e){let t;if(Cc.test(e)){t={};let i;for(;i=e.match(Cc);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):vn(e.slice(2)),t]}let ka=0;const B_=Promise.resolve(),U_=()=>ka||(B_.then(()=>ka=0),ka=Date.now());function J_(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Rt(Q_(i,n.value),t,5,[i])};return n.value=e,n.attached=U_(),n}function Q_(e,t){if(re(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Ec=/^on[a-z]/,Y_=(e,t,n,i,s=!1,a,l,r,u)=>{t==="class"?L_(e,i,s):t==="style"?R_(e,n,i):Ni(t)?ks(t)||j_(e,t,n,i,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Z_(e,t,i,s))?D_(e,t,i,a,l,r,u):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),N_(e,t,i,s))};function Z_(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&Ec.test(t)&&pe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ec.test(t)&&Fe(n)?!1:t in e}function G_(e){const t=wt();if(!t){V("useCssVars is called without current active component instance.");return}const n=t.ut=(s=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(a=>hl(a,s))},i=()=>{const s=e(t.proxy);fl(t.subTree,s),n(s)};kv(i),bn(()=>{const s=new MutationObserver(i);s.observe(t.subTree.el.parentNode,{childList:!0}),ji(()=>s.disconnect())})}function fl(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{fl(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)hl(e.el,t);else if(e.type===Me)e.children.forEach(n=>fl(n,t));else if(e.type===di){let{el:n,anchor:i}=e;for(;n&&(hl(n,t),n!==i);)n=n.nextSibling}}function hl(e,t){if(e.nodeType===1){const n=e.style;for(const i in t)n.setProperty(`--${i}`,t[i])}}const Sn="transition",Bo="animation",zp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},X_=De({},Iv,zp),Bn=(e,t=[])=>{re(e)?e.forEach(n=>n(...t)):e&&e(...t)},Oc=e=>e?re(e)?e.some(t=>t.length>1):e.length>1:!1;function eg(e){const t={};for(const G in e)G in zp||(t[G]=e[G]);if(e.css===!1)return t;const{name:n="v",type:i,duration:s,enterFromClass:a=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:u=a,appearActiveClass:d=l,appearToClass:p=r,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,v=tg(s),S=v&&v[0],x=v&&v[1],{onBeforeEnter:k,onEnter:C,onEnterCancelled:b,onLeave:P,onLeaveCancelled:A,onBeforeAppear:R=k,onAppear:F=C,onAppearCancelled:W=b}=t,U=(G,_e,be)=>{xn(G,_e?p:r),xn(G,_e?d:l),be&&be()},se=(G,_e)=>{G._isLeaving=!1,xn(G,m),xn(G,h),xn(G,f),_e&&_e()},de=G=>(_e,be)=>{const we=G?F:C,Re=()=>U(_e,G,be);Bn(we,[_e,Re]),Mc(()=>{xn(_e,G?u:a),dn(_e,G?p:r),Oc(we)||Tc(_e,i,S,Re)})};return De(t,{onBeforeEnter(G){Bn(k,[G]),dn(G,a),dn(G,l)},onBeforeAppear(G){Bn(R,[G]),dn(G,u),dn(G,d)},onEnter:de(!1),onAppear:de(!0),onLeave(G,_e){G._isLeaving=!0;const be=()=>se(G,_e);dn(G,m),Cp(),dn(G,f),Mc(()=>{G._isLeaving&&(xn(G,m),dn(G,h),Oc(P)||Tc(G,i,x,be))}),Bn(P,[G,be])},onEnterCancelled(G){U(G,!1),Bn(b,[G])},onAppearCancelled(G){U(G,!0),Bn(W,[G])},onLeaveCancelled(G){se(G),Bn(A,[G])}})}function tg(e){if(e==null)return null;if(Ae(e))return[$a(e.enter),$a(e.leave)];{const t=$a(e);return[t,t]}}function $a(e){const t=eh(e);return ev(t,"<transition> explicit duration"),t}function dn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function xn(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Mc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ng=0;function Tc(e,t,n,i){const s=e._endId=++ng,a=()=>{s===e._endId&&i()};if(n)return setTimeout(a,n);const{type:l,timeout:r,propCount:u}=Ip(e,t);if(!l)return i();const d=l+"end";let p=0;const m=()=>{e.removeEventListener(d,f),a()},f=h=>{h.target===e&&++p>=u&&m()};setTimeout(()=>{p<u&&m()},r+1),e.addEventListener(d,f)}function Ip(e,t){const n=window.getComputedStyle(e),i=v=>(n[v]||"").split(", "),s=i(`${Sn}Delay`),a=i(`${Sn}Duration`),l=Ac(s,a),r=i(`${Bo}Delay`),u=i(`${Bo}Duration`),d=Ac(r,u);let p=null,m=0,f=0;t===Sn?l>0&&(p=Sn,m=l,f=a.length):t===Bo?d>0&&(p=Bo,m=d,f=u.length):(m=Math.max(l,d),p=m>0?l>d?Sn:Bo:null,f=p?p===Sn?a.length:u.length:0);const h=p===Sn&&/\b(transform|all)(,|$)/.test(i(`${Sn}Property`).toString());return{type:p,timeout:m,propCount:f,hasTransform:h}}function Ac(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>Kc(n)+Kc(e[i])))}function Kc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Cp(){return document.body.offsetHeight}const Ep=new WeakMap,Op=new WeakMap,Mp={name:"TransitionGroup",props:De({},X_,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=wt(),i=zv();let s,a;return ra(()=>{if(!s.length)return;const l=e.moveClass||`${e.name||"v"}-move`;if(!rg(s[0].el,n.vnode.el,l))return;s.forEach(sg),s.forEach(ag);const r=s.filter(lg);Cp(),r.forEach(u=>{const d=u.el,p=d.style;dn(d,l),p.transform=p.webkitTransform=p.transitionDuration="";const m=d._moveCb=f=>{f&&f.target!==d||(!f||/transform$/.test(f.propertyName))&&(d.removeEventListener("transitionend",m),d._moveCb=null,xn(d,l))};d.addEventListener("transitionend",m)})}),()=>{const l=ve(e),r=eg(l);let u=l.tag||Me;s=a,a=t.default?op(t.default()):[];for(let d=0;d<a.length;d++){const p=a[d];p.key!=null?As(p,nl(p,r,i,n)):V("<TransitionGroup> children must be keyed.")}if(s)for(let d=0;d<s.length;d++){const p=s[d];As(p,nl(p,r,i,n)),Ep.set(p,p.el.getBoundingClientRect())}return j(u,null,a)}}},og=e=>delete e.mode;Mp.props;const ig=Mp;function sg(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ag(e){Op.set(e,e.el.getBoundingClientRect())}function lg(e){const t=Ep.get(e),n=Op.get(e),i=t.left-n.left,s=t.top-n.top;if(i||s){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${i}px,${s}px)`,a.transitionDuration="0s",e}}function rg(e,t,n){const i=e.cloneNode();e._vtc&&e._vtc.forEach(l=>{l.split(/\s+/).forEach(r=>r&&i.classList.remove(r))}),n.split(/\s+/).forEach(l=>l&&i.classList.add(l)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:a}=Ip(i);return s.removeChild(i),a}const cg=["ctrl","shift","alt","meta"],ug={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>cg.some(n=>e[`${n}Key`]&&!t.includes(n))},dg=(e,t)=>(n,...i)=>{for(let s=0;s<t.length;s++){const a=ug[t[s]];if(a&&a(n,t))return}return e(n,...i)},pg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},is=(e,t)=>n=>{if(!("key"in n))return;const i=vn(n.key);if(t.some(s=>s===i||pg[s]===i))return e(n)},Tp={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Uo(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Uo(e,!0),i.enter(e)):i.leave(e,()=>{Uo(e,!1)}):Uo(e,t))},beforeUnmount(e,{value:t}){Uo(e,t)}};function Uo(e,t){e.style.display=t?e._vod:"none"}const mg=De({patchProp:Y_},P_);let Pc;function fg(){return Pc||(Pc=u_(mg))}const hg=(...e)=>{const t=fg().createApp(...e);vg(t),_g(t);const{mount:n}=t;return t.mount=i=>{const s=gg(i);if(!s)return;const a=t._component;!pe(a)&&!a.render&&!a.template&&(a.template=s.innerHTML),s.innerHTML="";const l=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t};function vg(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>yd(t)||lh(t),writable:!1})}function _g(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){V("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,i='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return V(i),n},set(){V(i)}})}}function gg(e){if(Fe(e)){const t=document.querySelector(e);return t||V(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&V('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function bg(){A_()}bg();function vl(e,t={},n){for(const i in e){const s=e[i],a=n?`${n}:${i}`:i;typeof s=="object"&&s!==null?vl(s,t,a):typeof s=="function"&&(t[a]=s)}return t}const yg={run:e=>e()},Sg=()=>yg,Ap=typeof console.createTask<"u"?console.createTask:Sg;function wg(e,t){const n=t.shift(),i=Ap(n);return e.reduce((s,a)=>s.then(()=>i.run(()=>a(...t))),Promise.resolve())}function xg(e,t){const n=t.shift(),i=Ap(n);return Promise.all(e.map(s=>i.run(()=>s(...t))))}function za(e,t){for(const n of[...e])n(t)}class kg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,i={}){if(!t||typeof n!="function")return()=>{};const s=t;let a;for(;this._deprecatedHooks[t];)a=this._deprecatedHooks[t],t=a.to;if(a&&!i.allowDeprecated){let l=a.message;l||(l=`${s} hook has been deprecated`+(a.to?`, please use ${a.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(l)||(console.warn(l),this._deprecatedMessages.add(l))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let i,s=(...a)=>(typeof i=="function"&&i(),i=void 0,s=void 0,n(...a));return i=this.hook(t,s),i}removeHook(t,n){if(this._hooks[t]){const i=this._hooks[t].indexOf(n);i!==-1&&this._hooks[t].splice(i,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const i=this._hooks[t]||[];delete this._hooks[t];for(const s of i)this.hook(t,s)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=vl(t),i=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of i.splice(0,i.length))s()}}removeHooks(t){const n=vl(t);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(wg,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(xg,t,...n)}callHookWith(t,n,...i){const s=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&za(this._before,s);const a=t(n in this._hooks?[...this._hooks[n]]:[],i);return a instanceof Promise?a.finally(()=>{this._after&&s&&za(this._after,s)}):(this._after&&s&&za(this._after,s),a)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function $g(){return new kg}function zg(e){return Array.isArray(e)?e:[e]}const Kp=["title","script","style","noscript"],Pp=["base","meta","link","style","script","noscript"],Ig=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Cg=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Eg=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Lp(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function _l(e){return Lp(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Og(e){let t=9;for(const n of e)for(let i=0;i<n.length;)t=Math.imul(t^n.charCodeAt(i++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Rp(e,t){const{props:n,tag:i}=e;if(Cg.includes(i))return i;if(i==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];i==="meta"&&s.push("name","property","http-equiv");for(const a of s)if(typeof n[a]<"u"){const l=String(n[a]);return t&&!t(l)?!1:`${i}:${a}:${l}`}return!1}function Lc(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function ss(e,t=!1,n){const{tag:i,$el:s}=e;s&&(Object.entries(i.props).forEach(([a,l])=>{l=String(l);const r=`attr:${a}`;if(a==="class"){if(!l)return;for(const u of l.split(" ")){const d=`${r}:${u}`;n&&n(e,d,()=>s.classList.remove(u)),s.classList.contains(u)||s.classList.add(u)}return}n&&!a.startsWith("data-h-")&&n(e,r,()=>s.removeAttribute(a)),(t||s.getAttribute(a)!==l)&&s.setAttribute(a,l)}),Kp.includes(i.tag)&&(i.textContent&&i.textContent!==s.textContent?s.textContent=i.textContent:i.innerHTML&&i.innerHTML!==s.innerHTML&&(s.innerHTML=i.innerHTML)))}let Jo=!1;async function Hp(e,t={}){var f,h;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const i=t.document||e.resolvedOptions.document||window.document,s=(await e.resolveTags()).map(r);if(e.resolvedOptions.experimentalHashHydration&&(Jo=Jo||e._hash||!1,Jo)){const v=Og(s.map(S=>S.tag._h));if(Jo===v)return;Jo=v}const a=e._popSideEffectQueue();e.headEntries().map(v=>v._sde).forEach(v=>{Object.entries(v).forEach(([S,x])=>{a[S]=x})});const l=(v,S,x)=>{S=`${v.renderId}:${S}`,v.entry&&(v.entry._sde[S]=x),delete a[S]};function r(v){const S=e.headEntries().find(k=>k._i===v._e),x={renderId:v._d||_l(v),$el:null,shouldRender:!0,tag:v,entry:S,markSideEffect:(k,C)=>l(x,k,C)};return x}const u=[],d={body:[],head:[]},p=v=>{e._elMap[v.renderId]=v.$el,u.push(v),l(v,"el",()=>{var S;(S=v.$el)==null||S.remove(),delete e._elMap[v.renderId]})};for(const v of s){if(await e.hooks.callHook("dom:beforeRenderTag",v),!v.shouldRender)continue;const{tag:S}=v;if(S.tag==="title"){i.title=S.textContent||"",u.push(v);continue}if(S.tag==="htmlAttrs"||S.tag==="bodyAttrs"){v.$el=i[S.tag==="htmlAttrs"?"documentElement":"body"],ss(v,!1,l),u.push(v);continue}if(v.$el=e._elMap[v.renderId],!v.$el&&S.key&&(v.$el=i.querySelector(`${(f=S.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${S.tag}[data-h-${S._h}]`)),v.$el){v.tag._d&&ss(v),p(v);continue}d[(h=S.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(v)}const m={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(d).forEach(([v,S])=>{var k;if(!S.length)return;const x=(k=i==null?void 0:i[v])==null?void 0:k.children;if(x){for(const C of[...x].reverse()){const b=C.tagName.toLowerCase();if(!Pp.includes(b))continue;const P=C.getAttributeNames().reduce((W,U)=>({...W,[U]:C.getAttribute(U)}),{}),A={tag:b,props:P};C.innerHTML&&(A.innerHTML=C.innerHTML);const R=_l(A);let F=S.findIndex(W=>(W==null?void 0:W.renderId)===R);if(F===-1){const W=Rp(A);F=S.findIndex(U=>(U==null?void 0:U.tag._d)&&U.tag._d===W)}if(F!==-1){const W=S[F];W.$el=C,ss(W),p(W),delete S[F]}}S.forEach(C=>{const b=C.tag.tagPosition||"head";m[b]=m[b]||i.createDocumentFragment(),C.$el||(C.$el=i.createElement(C.tag.tag),ss(C,!0)),m[b].appendChild(C.$el),p(C)})}}),m.head&&i.head.appendChild(m.head),m.bodyOpen&&i.body.insertBefore(m.bodyOpen,i.body.firstChild),m.bodyClose&&i.body.appendChild(m.bodyClose);for(const v of u)await e.hooks.callHook("dom:renderTag",v);Object.values(a).forEach(v=>v())}let Ia=null;async function Wp(e,t={}){function n(){return Ia=null,Hp(e,t)}const i=t.delayFn||(s=>setTimeout(s,10));return Ia=Ia||new Promise(s=>i(()=>s(n())))}function Mg(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Wp(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}}function Tg(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const Rc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Hc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in Rc?Rc[t]:10}const Ag=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Kg(){return{hooks:{"tags:resolve":e=>{const t=n=>{var i;return(i=e.tags.find(s=>s._d===n))==null?void 0:i._p};for(const{prefix:n,offset:i}of Ag)for(const s of e.tags.filter(a=>typeof a.tagPriority=="string"&&a.tagPriority.startsWith(n))){const a=t(s.tagPriority.replace(n,""));typeof a<"u"&&(s._p=a+i)}e.tags.sort((n,i)=>n._p-i._p).sort((n,i)=>Hc(n)-Hc(i))}}}}function Pg(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(s=>s.tag==="titleTemplate");const i=t.findIndex(s=>s.tag==="title");if(i!==-1&&n!==-1){const s=Lc(t[n].textContent,t[i].textContent);s!==null?t[i].textContent=s||t[i].textContent:delete t[i]}else if(n!==-1){const s=Lc(t[n].textContent);s!==null&&(t[n].textContent=s,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}}function Lg(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const Rg=["link","style","script","noscript"];function Hg(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=_l(e)),e.key&&Rg.includes(e.tag)&&(e._h=Lp(e.key),e.props[`data-h-${e._h}`]="")}}}}const Wc=["script","link","bodyAttrs"];function Wg(){const e=(t,n)=>{const i={},s={};Object.entries(n.props).forEach(([l,r])=>{l.startsWith("on")&&typeof r=="function"?s[l]=r:i[l]=r});let a;return t==="dom"&&n.tag==="script"&&typeof i.src=="string"&&typeof s.onload<"u"&&(a=i.src,delete i.src),{props:i,eventHandlers:s,delayedSrc:a}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!Wc.includes(n.tag)||!Object.entries(n.props).find(([i,s])=>i.startsWith("on")&&typeof s=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!Wc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([a,l])=>a.startsWith("on")&&typeof l=="function"))return;const{props:n,eventHandlers:i,delayedSrc:s}=e("dom",t.tag);Object.keys(i).length&&(t.tag.props=n,t.tag._eventHandlers=i,t.tag._delayedSrc=s)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const i=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([s,a])=>{const l=`${t.tag._d||t.tag._p}:${s}`,r=s.slice(2).toLowerCase(),u=`data-h-${r}`;if(t.markSideEffect(l,()=>{}),n.hasAttribute(u))return;const d=a;n.setAttribute(u,""),i.addEventListener(r,d),t.entry&&(t.entry._sde[l]=()=>{i.removeEventListener(r,d),n.removeAttribute(u)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}}const Ng=["templateParams","htmlAttrs","bodyAttrs"];function Dg(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(i=>{e.props[i]&&(e.key=e.props[i],delete e.props[i])});const n=Rp(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(i=>{const s=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,a=t[s];if(a){let r=i==null?void 0:i.tagDuplicateStrategy;if(!r&&Ng.includes(i.tag)&&(r="merge"),r==="merge"){const u=a.props;["class","style"].forEach(d=>{i.props[d]&&u[d]&&(d==="style"&&!u[d].endsWith(";")&&(u[d]+=";"),i.props[d]=`${u[d]} ${i.props[d]}`)}),t[s].props={...u,...i.props};return}else if(i._e===a._e){a._duped=a._duped||[],i._d=`${a._d}:${a._duped.length+1}`,a._duped.push(i);return}}const l=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if(Pp.includes(i.tag)&&l===0){delete t[s];return}t[s]=i});const n=[];Object.values(t).forEach(i=>{const s=i._duped;delete i._duped,n.push(i),s&&n.push(...s)}),e.tags=n}}}}function as(e,t){function n(a){if(["s","pageTitle"].includes(a))return t.pageTitle;let l;return a.includes(".")?l=a.split(".").reduce((r,u)=>r&&r[u]||void 0,t):l=t[a],typeof l<"u"?l||"":!1}let i=e;try{i=decodeURI(e)}catch{}return(i.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(a=>{const l=n(a.slice(1));typeof l=="string"&&(e=e.replace(new RegExp(`\\${a}(\\W|$)`,"g"),`${l}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function qg(){return{hooks:{"tags:resolve":e=>{var a;const{tags:t}=e,n=(a=t.find(l=>l.tag==="title"))==null?void 0:a.textContent,i=t.findIndex(l=>l.tag==="templateParams"),s=i!==-1?t[i].props:{};s.pageTitle=s.pageTitle||n||"";for(const l of t)if(["titleTemplate","title"].includes(l.tag)&&typeof l.textContent=="string")l.textContent=as(l.textContent,s);else if(l.tag==="meta"&&typeof l.props.content=="string")l.props.content=as(l.props.content,s);else if(l.tag==="link"&&typeof l.props.href=="string")l.props.href=as(l.props.href,s);else if(l.tag==="script"&&["application/json","application/ld+json"].includes(l.props.type)&&typeof l.innerHTML=="string")try{l.innerHTML=JSON.stringify(JSON.parse(l.innerHTML),(r,u)=>typeof u=="string"?as(u,s):u)}catch{}e.tags=t.filter(l=>l.tag!=="templateParams")}}}}const Fg=typeof window<"u";let Np;function jg(e){return Np=e}function Vg(){return Np}async function Bg(e,t){const n={tag:e,props:{}};return e==="templateParams"?(n.props=t,n):["title","titleTemplate"].includes(e)?(n.textContent=t instanceof Promise?await t:t,n):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?n.props.src=t:n.innerHTML=t,n):!1:(n.props=await Jg(e,{...t}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(i=>Eg.includes(i)).forEach(i=>{(!["innerHTML","textContent"].includes(i)||Kp.includes(n.tag))&&(n[i]=n.props[i]),delete n.props[i]}),["innerHTML","textContent"].forEach(i=>{if(n.tag==="script"&&typeof n[i]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[i]=JSON.parse(n[i])}catch{n[i]=""}typeof n[i]=="object"&&(n[i]=JSON.stringify(n[i]))}),n.props.class&&(n.props.class=Ug(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(i=>({...n,props:{...n.props,content:i}})):n)}function Ug(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Jg(e,t){for(const n of Object.keys(t)){const i=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=i?"true":"":String(t[n])==="false"&&(i?t[n]="false":delete t[n])}return t}const Qg=10;async function Yg(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,i])=>typeof i<"u"&&Ig.includes(n)).forEach(([n,i])=>{const s=zg(i);t.push(...s.map(a=>Bg(n,a)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,i)=>(n._e=e._i,n._p=(e._i<<Qg)+i,n))}function Zg(){return[Dg(),Kg(),qg(),Pg(),Hg(),Wg(),Lg()]}function Gg(e={}){return[Mg({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function Xg(e={}){const t=e1({...e,plugins:[...Gg(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Tg(t.resolvedOptions.document)),jg(t),t}function e1(e={}){let t=[],n={},i=0;const s=$g();e!=null&&e.hooks&&s.addHooks(e.hooks),e.plugins=[...Zg(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(r=>r.hooks&&s.addHooks(r.hooks)),e.document=e.document||(Fg?document:void 0);const a=()=>s.callHook("entries:updated",l),l={resolvedOptions:e,headEntries(){return t},get hooks(){return s},use(r){r.hooks&&s.addHooks(r.hooks)},push(r,u){const d={_i:i++,input:r,_sde:{}};return u!=null&&u.mode&&(d._m=u==null?void 0:u.mode),u!=null&&u.transform&&(d._t=u==null?void 0:u.transform),t.push(d),a(),{dispose(){t=t.filter(p=>p._i!==d._i?!0:(n={...n,...p._sde||{}},p._sde={},a(),!1))},patch(p){t=t.map(m=>(m._i===d._i&&(d.input=m.input=p,a()),m))}}},async resolveTags(){const r={tags:[],entries:[...t]};await s.callHook("entries:resolve",r);for(const u of r.entries){const d=u._t||(p=>p);if(u.resolvedInput=d(u.resolvedInput||u.input),u.resolvedInput)for(const p of await Yg(u)){const m={tag:p,entry:u,resolvedOptions:l.resolvedOptions};await s.callHook("tag:normalise",m),r.tags.push(m.tag)}}return await s.callHook("tags:resolve",r),r.tags},_popSideEffectQueue(){const r={...n};return n={},r},_elMap:{}};return l.hooks.callHook("init",l),l}function t1(e){return typeof e=="function"?e():L(e)}function Ns(e,t=""){if(e instanceof Promise)return e;const n=t1(e);return!e||!n?n:Array.isArray(n)?n.map(i=>Ns(i,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,s])=>i==="titleTemplate"||i.startsWith("on")?[i,L(s)]:[i,Ns(s,i)])):n}const n1=Ws.startsWith("3"),o1=typeof window<"u",Dp="usehead";function Sr(){return wt()&&$(Dp)||Vg()}function i1(e){return{install(n){n1&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Dp,e))}}.install}function s1(e={}){const t=Xg({...e,domDelayFn:n=>setTimeout(()=>it(()=>n()),10),plugins:[a1(),...(e==null?void 0:e.plugins)||[]]});return t.install=i1(t),t}function a1(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Ns(t.input)}}}}function l1(e,t={}){const n=Sr(),i=Z(!1),s=Z({});yo(()=>{s.value=i.value?{}:Ns(e)});const a=n.push(s.value,t);return ge(s,r=>{a.patch(r)}),wt()&&(Fi(()=>{a.dispose()}),ap(()=>{i.value=!0}),sp(()=>{i.value=!1})),a}function r1(e,t={}){return Sr().push(e,t)}function qp(e,t={}){var i;const n=Sr();if(n){const s=o1||!!((i=n.resolvedOptions)!=null&&i.document);return t.mode==="server"&&s||t.mode==="client"&&!s?void 0:s?l1(e,t):r1(e,t)}}function c1(e,t){const n=s1(t||{}),i={unhead:n,install(s){Ws.startsWith("3")&&(s.config.globalProperties.$head=n,s.provide("usehead",n))},use(s){n.use(s)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(s,a){return n.push(s,a)},addEntry(s,a){return n.push(s,a)},addHeadObjs(s,a){return n.push(s,a)},addReactiveEntry(s,a){const l=qp(s,a);return typeof l<"u"?l.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,a){a?Hp(n,{document:s}):Wp(n,{delayFn:l=>setTimeout(()=>l(),50),document:s})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=i.addHeadObjs,n.updateDOM=i.updateDOM,n.hooks.hook("dom:beforeRender",s=>{for(const a of i.hooks["before:dom"])a()===!1&&(s.shouldRender=!1)}),e&&i.addHeadObjs(e),i}const mi=Symbol("v-click-clicks"),eo=Symbol("v-click-clicks-elements"),gl=Symbol("v-click-clicks-order-map"),fi=Symbol("v-click-clicks-disabled"),Fp=Symbol("slidev-slide-scale"),I=Symbol("slidev-slidev-context"),u1=Symbol("slidev-route"),d1=Symbol("slidev-slide-context"),Yn="slidev-vclick-target",Ca="slidev-vclick-hidden",p1="slidev-vclick-fade",Ea="slidev-vclick-hidden-explicitly",Qo="slidev-vclick-current",ls="slidev-vclick-prior",m1=["localhost","127.0.0.1"];let f1=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function bl(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function h1(...e){let t,n,i;e.length===1?(t=0,i=1,[n]=e):[t,n,i=1]=e;const s=[];let a=t;for(;a<n;)s.push(a),a+=i||1;return s}function v1(e){return e!=null}function _1(e,t){return Object.fromEntries(Object.entries(e).map(([n,i])=>t(n,i)).filter(v1))}const ri={theme:"default",title:"Svelte e SvelteKit",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",as:"2023/2024",version:"1.2.0"},Oe=ri,Mn=Oe.aspectRatio??16/9,Tn=Oe.canvasWidth??980,wr=Math.ceil(Tn/Mn),xr=N(()=>_1(Oe.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function jp(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Wt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const So=je({page:0,clicks:0});let g1=[],b1=[];Wt(So,"$syncUp",!0);Wt(So,"$syncDown",!0);Wt(So,"$paused",!1);Wt(So,"$onSet",e=>g1.push(e));Wt(So,"$onPatch",e=>b1.push(e));jp();Wt(So,"$patch",async()=>!1);function Vp(e,t,n=!1){const i=[];let s=!1,a=!1,l,r;const u=je(t);function d(h){i.push(h)}function p(h,v){u[h]!==v&&(clearTimeout(l),s=!0,u[h]=v,l=setTimeout(()=>s=!1,0))}function m(h){s||(clearTimeout(r),a=!0,Object.entries(h).forEach(([v,S])=>{u[v]=S}),r=setTimeout(()=>a=!1,0))}function f(h){let v;n?n&&window.addEventListener("storage",x=>{x&&x.key===h&&x.newValue&&m(JSON.parse(x.newValue))}):(v=new BroadcastChannel(h),v.addEventListener("message",x=>m(x.data)));function S(){!n&&v&&!a?v.postMessage(ve(u)):n&&!a&&window.localStorage.setItem(h,JSON.stringify(u)),s||i.forEach(x=>x(u))}if(ge(u,S,{deep:!0,flush:"sync"}),n){const x=window.localStorage.getItem(h);x&&m(JSON.parse(x))}}return{init:f,onPatch:d,patch:p,state:u}}const{init:y1,onPatch:S1,patch:Yo,state:Oa}=Vp(So,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),wo=je({});let w1=[],x1=[];Wt(wo,"$syncUp",!0);Wt(wo,"$syncDown",!0);Wt(wo,"$paused",!1);Wt(wo,"$onSet",e=>w1.push(e));Wt(wo,"$onPatch",e=>x1.push(e));jp();Wt(wo,"$patch",async()=>!1);const{init:k1,onPatch:$1,patch:Bp,state:Ds}=Vp(wo,{},!1),z1="modulepreload",I1=function(e){return"/4/svelte/"+e},Nc={},An=function(t,n,i){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=I1(a),a in Nc)return;Nc[a]=!0;const l=a.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(!!i)for(let p=s.length-1;p>=0;p--){const m=s[p];if(m.href===a&&(!l||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${r}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":z1,l||(d.as="script",d.crossOrigin=""),d.href=a,document.head.appendChild(d),l)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};function C1(e,t){let n,i,s;const a=Z(!0),l=()=>{a.value=!0,s()};ge(e,l,{flush:"sync"});const r=typeof t=="function"?t:t.get,u=typeof t=="function"?void 0:t.set,d=ur((p,m)=>(i=p,s=m,{get(){return a.value&&(n=r(),a.value=!1),i(),n},set(f){u==null||u(f)}}));return Object.isExtensible(d)&&(d.trigger=l),d}function ln(e){return or()?(kd(e),!0):!1}function Je(e){return typeof e=="function"?e():L(e)}function E1(e){if(!Te(e))return je(e);const t=new Proxy({},{get(n,i,s){return L(Reflect.get(e.value,i,s))},set(n,i,s){return Te(e.value[i])&&!Te(s)?e.value[i].value=s:e.value[i]=s,!0},deleteProperty(n,i){return Reflect.deleteProperty(e.value,i)},has(n,i){return Reflect.has(e.value,i)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return je(t)}const Ut=typeof window<"u",O1=e=>typeof e<"u",M1=e=>e!=null,T1=Object.prototype.toString,yl=e=>T1.call(e)==="[object Object]",Sl=()=>+Date.now(),fo=()=>{},A1=K1();function K1(){var e;return Ut&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function P1(e,t){function n(...i){return new Promise((s,a)=>{Promise.resolve(e(()=>t.apply(this,i),{fn:t,thisArg:this,args:i})).then(s).catch(a)})}return n}const Up=e=>e();function L1(e=Up){const t=Z(!0);function n(){t.value=!1}function i(){t.value=!0}const s=(...a)=>{t.value&&e(...a)};return{isActive:jt(t),pause:n,resume:i,eventFilter:s}}function R1(e,t){var n;if(typeof e=="number")return e+t;const i=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",s=e.slice(i.length),a=parseFloat(i)+t;return Number.isNaN(a)?e:a+s}function Jp(...e){if(e.length!==1)return Uh(...e);const t=e[0];return typeof t=="function"?jt(ur(()=>({get:t,set:fo}))):Z(t)}var H1=Object.defineProperty,W1=Object.defineProperties,N1=Object.getOwnPropertyDescriptors,Dc=Object.getOwnPropertySymbols,D1=Object.prototype.hasOwnProperty,q1=Object.prototype.propertyIsEnumerable,qc=(e,t,n)=>t in e?H1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F1=(e,t)=>{for(var n in t||(t={}))D1.call(t,n)&&qc(e,n,t[n]);if(Dc)for(var n of Dc(t))q1.call(t,n)&&qc(e,n,t[n]);return e},j1=(e,t)=>W1(e,N1(t));function V1(e){if(!Te(e))return jh(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=ur(()=>({get(){return e.value[n]},set(i){if(Array.isArray(e.value)){const s=[...e.value];s[n]=i,e.value=s}else{const s=j1(F1({},e.value),{[n]:i});Object.setPrototypeOf(s,e.value),e.value=s}}}));return t}function Qp(e,t=!0){wt()?bn(e):t?e():it(e)}function B1(e){wt()&&ji(e)}function U1(e,t=1e3,n={}){const{immediate:i=!0,immediateCallback:s=!1}=n;let a=null;const l=Z(!1);function r(){a&&(clearInterval(a),a=null)}function u(){l.value=!1,r()}function d(){const p=Je(t);p<=0||(l.value=!0,s&&e(),r(),a=setInterval(e,p))}if(i&&Ut&&d(),Te(t)||typeof t=="function"){const p=ge(t,()=>{l.value&&Ut&&d()});ln(p)}return ln(u),{isActive:l,pause:u,resume:d}}function J1(e,t,n={}){const{immediate:i=!0}=n,s=Z(!1);let a=null;function l(){a&&(clearTimeout(a),a=null)}function r(){s.value=!1,l()}function u(...d){l(),s.value=!0,a=setTimeout(()=>{s.value=!1,a=null,e(...d)},Je(t))}return i&&(s.value=!0,Ut&&u()),ln(r),{isPending:jt(s),start:u,stop:r}}function Yp(e=!1,t={}){const{truthyValue:n=!0,falsyValue:i=!1}=t,s=Te(e),a=Z(e);function l(r){if(arguments.length)return a.value=r,a.value;{const u=Je(n);return a.value=a.value===u?Je(i):u,a.value}}return s?l:[a,l]}var Fc=Object.getOwnPropertySymbols,Q1=Object.prototype.hasOwnProperty,Y1=Object.prototype.propertyIsEnumerable,Z1=(e,t)=>{var n={};for(var i in e)Q1.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&Fc)for(var i of Fc(e))t.indexOf(i)<0&&Y1.call(e,i)&&(n[i]=e[i]);return n};function G1(e,t,n={}){const i=n,{eventFilter:s=Up}=i,a=Z1(i,["eventFilter"]);return ge(e,P1(s,t),a)}var X1=Object.defineProperty,e0=Object.defineProperties,t0=Object.getOwnPropertyDescriptors,qs=Object.getOwnPropertySymbols,Zp=Object.prototype.hasOwnProperty,Gp=Object.prototype.propertyIsEnumerable,jc=(e,t,n)=>t in e?X1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,n0=(e,t)=>{for(var n in t||(t={}))Zp.call(t,n)&&jc(e,n,t[n]);if(qs)for(var n of qs(t))Gp.call(t,n)&&jc(e,n,t[n]);return e},o0=(e,t)=>e0(e,t0(t)),i0=(e,t)=>{var n={};for(var i in e)Zp.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&qs)for(var i of qs(e))t.indexOf(i)<0&&Gp.call(e,i)&&(n[i]=e[i]);return n};function s0(e,t,n={}){const i=n,{eventFilter:s}=i,a=i0(i,["eventFilter"]),{eventFilter:l,pause:r,resume:u,isActive:d}=L1(s);return{stop:G1(e,t,o0(n0({},a),{eventFilter:l})),pause:r,resume:u,isActive:d}}function st(e){var t;const n=Je(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Xe=Ut?window:void 0,Xp=Ut?window.document:void 0,a0=Ut?window.navigator:void 0;function xe(...e){let t,n,i,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,i,s]=e,t=Xe):[t,n,i,s]=e,!t)return fo;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const a=[],l=()=>{a.forEach(p=>p()),a.length=0},r=(p,m,f,h)=>(p.addEventListener(m,f,h),()=>p.removeEventListener(m,f,h)),u=ge(()=>[st(t),Je(s)],([p,m])=>{l(),p&&a.push(...n.flatMap(f=>i.map(h=>r(p,f,h,m))))},{immediate:!0,flush:"post"}),d=()=>{u(),l()};return ln(d),d}let Vc=!1;function l0(e,t,n={}){const{window:i=Xe,ignore:s=[],capture:a=!0,detectIframe:l=!1}=n;if(!i)return;A1&&!Vc&&(Vc=!0,Array.from(i.document.body.children).forEach(f=>f.addEventListener("click",fo)));let r=!0;const u=f=>s.some(h=>{if(typeof h=="string")return Array.from(i.document.querySelectorAll(h)).some(v=>v===f.target||f.composedPath().includes(v));{const v=st(h);return v&&(f.target===v||f.composedPath().includes(v))}}),p=[xe(i,"click",f=>{const h=st(e);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(r=!u(f)),!r){r=!0;return}t(f)}},{passive:!0,capture:a}),xe(i,"pointerdown",f=>{const h=st(e);h&&(r=!f.composedPath().includes(h)&&!u(f))},{passive:!0}),l&&xe(i,"blur",f=>{var h;const v=st(e);((h=i.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(v!=null&&v.contains(i.document.activeElement))&&t(f)})].filter(Boolean);return()=>p.forEach(f=>f())}function r0(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function c0(...e){let t,n,i={};e.length===3?(t=e[0],n=e[1],i=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],i=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:s=Xe,eventName:a="keydown",passive:l=!1,dedupe:r=!1}=i,u=r0(t);return xe(s,a,p=>{p.repeat&&Je(r)||u(p)&&n(p)},l)}function u0(e={}){var t;const{window:n=Xe}=e,i=(t=e.document)!=null?t:n==null?void 0:n.document,s=C1(()=>null,()=>i==null?void 0:i.activeElement);return n&&(xe(n,"blur",a=>{a.relatedTarget===null&&s.trigger()},!0),xe(n,"focus",s.trigger,!0)),s}function d0(){const e=Z(!1);return wt()&&bn(()=>{e.value=!0}),e}function Bi(e){const t=d0();return N(()=>(t.value,!!e()))}function p0(e,t={}){const{immediate:n=!0,window:i=Xe}=t,s=Z(!1);let a=0,l=null;function r(p){if(!s.value||!i)return;const m=p-a;e({delta:m,timestamp:p}),a=p,l=i.requestAnimationFrame(r)}function u(){!s.value&&i&&(s.value=!0,l=i.requestAnimationFrame(r))}function d(){s.value=!1,l!=null&&i&&(i.cancelAnimationFrame(l),l=null)}return n&&u(),ln(d),{isActive:jt(s),pause:d,resume:u}}function to(e,t={}){const{window:n=Xe}=t,i=Bi(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const a=Z(!1),l=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",r):s.removeListener(r))},r=()=>{i.value&&(l(),s=n.matchMedia(Jp(e).value),a.value=!!(s!=null&&s.matches),s&&("addEventListener"in s?s.addEventListener("change",r):s.addListener(r)))};return yo(r),ln(()=>l()),a}const m0={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function f0(e,t={}){function n(r,u){let d=e[r];return u!=null&&(d=R1(d,u)),typeof d=="number"&&(d=`${d}px`),d}const{window:i=Xe}=t;function s(r){return i?i.matchMedia(r).matches:!1}const a=r=>to(`(min-width: ${n(r)})`,t),l=Object.keys(e).reduce((r,u)=>(Object.defineProperty(r,u,{get:()=>a(u),enumerable:!0,configurable:!0}),r),{});return Object.assign(l,{greater(r){return to(`(min-width: ${n(r,.1)})`,t)},greaterOrEqual:a,smaller(r){return to(`(max-width: ${n(r,-.1)})`,t)},smallerOrEqual(r){return to(`(max-width: ${n(r)})`,t)},between(r,u){return to(`(min-width: ${n(r)}) and (max-width: ${n(u,-.1)})`,t)},isGreater(r){return s(`(min-width: ${n(r,.1)})`)},isGreaterOrEqual(r){return s(`(min-width: ${n(r)})`)},isSmaller(r){return s(`(max-width: ${n(r,-.1)})`)},isSmallerOrEqual(r){return s(`(max-width: ${n(r)})`)},isInBetween(r,u){return s(`(min-width: ${n(r)}) and (max-width: ${n(u,-.1)})`)},current(){const r=Object.keys(e).map(u=>[u,a(u)]);return N(()=>r.filter(([,u])=>u.value).map(([u])=>u))}})}function h0(e={}){const{navigator:t=a0,read:n=!1,source:i,copiedDuring:s=1500,legacy:a=!1}=e,l=["copy","cut"],r=Bi(()=>t&&"clipboard"in t),u=N(()=>r.value||a),d=Z(""),p=Z(!1),m=J1(()=>p.value=!1,s);function f(){r.value?t.clipboard.readText().then(x=>{d.value=x}):d.value=S()}if(u.value&&n)for(const x of l)xe(x,f);async function h(x=Je(i)){u.value&&x!=null&&(r.value?await t.clipboard.writeText(x):v(x),d.value=x,p.value=!0,m.start())}function v(x){const k=document.createElement("textarea");k.value=x??"",k.style.position="absolute",k.style.opacity="0",document.body.appendChild(k),k.select(),document.execCommand("copy"),k.remove()}function S(){var x,k,C;return(C=(k=(x=document==null?void 0:document.getSelection)==null?void 0:x.call(document))==null?void 0:k.toString())!=null?C:""}return{isSupported:u,text:d,copied:p,copy:h}}function v0(e){return JSON.parse(JSON.stringify(e))}const rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cs="__vueuse_ssr_handlers__",_0=g0();function g0(){return cs in rs||(rs[cs]=rs[cs]||{}),rs[cs]}function b0(e,t){return _0[e]||t}function y0(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var S0=Object.defineProperty,Bc=Object.getOwnPropertySymbols,w0=Object.prototype.hasOwnProperty,x0=Object.prototype.propertyIsEnumerable,Uc=(e,t,n)=>t in e?S0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jc=(e,t)=>{for(var n in t||(t={}))w0.call(t,n)&&Uc(e,n,t[n]);if(Bc)for(var n of Bc(t))x0.call(t,n)&&Uc(e,n,t[n]);return e};const k0={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Qc="vueuse-storage";function $0(e,t,n,i={}){var s;const{flush:a="pre",deep:l=!0,listenToStorageChanges:r=!0,writeDefaults:u=!0,mergeDefaults:d=!1,shallow:p,window:m=Xe,eventFilter:f,onError:h=W=>{console.error(W)}}=i,v=(p?sn:Z)(t);if(!n)try{n=b0("getDefaultStorage",()=>{var W;return(W=Xe)==null?void 0:W.localStorage})()}catch(W){h(W)}if(!n)return v;const S=Je(t),x=y0(S),k=(s=i.serializer)!=null?s:k0[x],{pause:C,resume:b}=s0(v,()=>P(v.value),{flush:a,deep:l,eventFilter:f});return m&&r&&(xe(m,"storage",F),xe(m,Qc,R)),F(),v;function P(W){try{if(W==null)n.removeItem(e);else{const U=k.write(W),se=n.getItem(e);se!==U&&(n.setItem(e,U),m&&m.dispatchEvent(new CustomEvent(Qc,{detail:{key:e,oldValue:se,newValue:U,storageArea:n}})))}}catch(U){h(U)}}function A(W){const U=W?W.newValue:n.getItem(e);if(U==null)return u&&S!==null&&n.setItem(e,k.write(S)),S;if(!W&&d){const se=k.read(U);return typeof d=="function"?d(se,S):x==="object"&&!Array.isArray(se)?Jc(Jc({},S),se):se}else return typeof U!="string"?U:k.read(U)}function R(W){F(W.detail)}function F(W){if(!(W&&W.storageArea!==n)){if(W&&W.key==null){v.value=S;return}if(!(W&&W.key!==e)){C();try{v.value=A(W)}catch(U){h(U)}finally{W?it(b):b()}}}}}function z0(e){return to("(prefers-color-scheme: dark)",e)}var I0=Object.defineProperty,C0=Object.defineProperties,E0=Object.getOwnPropertyDescriptors,Yc=Object.getOwnPropertySymbols,O0=Object.prototype.hasOwnProperty,M0=Object.prototype.propertyIsEnumerable,Zc=(e,t,n)=>t in e?I0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T0=(e,t)=>{for(var n in t||(t={}))O0.call(t,n)&&Zc(e,n,t[n]);if(Yc)for(var n of Yc(t))M0.call(t,n)&&Zc(e,n,t[n]);return e},A0=(e,t)=>C0(e,E0(t));function Nq(e,t={}){var n,i;const{pointerTypes:s,preventDefault:a,stopPropagation:l,exact:r,onMove:u,onEnd:d,onStart:p,initialValue:m,axis:f="both",draggingElement:h=Xe,handle:v=e}=t,S=Z((n=Je(m))!=null?n:{x:0,y:0}),x=Z(),k=R=>s?s.includes(R.pointerType):!0,C=R=>{Je(a)&&R.preventDefault(),Je(l)&&R.stopPropagation()},b=R=>{if(!k(R)||Je(r)&&R.target!==Je(e))return;const F=Je(e).getBoundingClientRect(),W={x:R.clientX-F.left,y:R.clientY-F.top};(p==null?void 0:p(W,R))!==!1&&(x.value=W,C(R))},P=R=>{if(!k(R)||!x.value)return;let{x:F,y:W}=S.value;(f==="x"||f==="both")&&(F=R.clientX-x.value.x),(f==="y"||f==="both")&&(W=R.clientY-x.value.y),S.value={x:F,y:W},u==null||u(S.value,R),C(R)},A=R=>{k(R)&&x.value&&(x.value=void 0,d==null||d(S.value,R),C(R))};if(Ut){const R={capture:(i=t.capture)!=null?i:!0};xe(v,"pointerdown",b,R),xe(h,"pointermove",P,R),xe(h,"pointerup",A,R)}return A0(T0({},V1(S)),{position:S,isDragging:N(()=>!!x.value),style:N(()=>`left:${S.value.x}px;top:${S.value.y}px;`)})}var Gc=Object.getOwnPropertySymbols,K0=Object.prototype.hasOwnProperty,P0=Object.prototype.propertyIsEnumerable,L0=(e,t)=>{var n={};for(var i in e)K0.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&Gc)for(var i of Gc(e))t.indexOf(i)<0&&P0.call(e,i)&&(n[i]=e[i]);return n};function R0(e,t,n={}){const i=n,{window:s=Xe}=i,a=L0(i,["window"]);let l;const r=Bi(()=>s&&"ResizeObserver"in s),u=()=>{l&&(l.disconnect(),l=void 0)},d=N(()=>Array.isArray(e)?e.map(f=>st(f)):[st(e)]),p=ge(d,f=>{if(u(),r.value&&s){l=new ResizeObserver(t);for(const h of f)h&&l.observe(h,a)}},{immediate:!0,flush:"post",deep:!0}),m=()=>{u(),p()};return ln(m),{isSupported:r,stop:m}}function H0(e,t={width:0,height:0},n={}){const{window:i=Xe,box:s="content-box"}=n,a=N(()=>{var u,d;return(d=(u=st(e))==null?void 0:u.namespaceURI)==null?void 0:d.includes("svg")}),l=Z(t.width),r=Z(t.height);return R0(e,([u])=>{const d=s==="border-box"?u.borderBoxSize:s==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(i&&a.value){const p=st(e);if(p){const m=i.getComputedStyle(p);l.value=parseFloat(m.width),r.value=parseFloat(m.height)}}else if(d){const p=Array.isArray(d)?d:[d];l.value=p.reduce((m,{inlineSize:f})=>m+f,0),r.value=p.reduce((m,{blockSize:f})=>m+f,0)}else l.value=u.contentRect.width,r.value=u.contentRect.height},n),ge(()=>st(e),u=>{l.value=u?t.width:0,r.value=u?t.height:0}),{width:l,height:r}}function W0(e,t,n={}){const{root:i,rootMargin:s="0px",threshold:a=.1,window:l=Xe,immediate:r=!0}=n,u=Bi(()=>l&&"IntersectionObserver"in l),d=N(()=>{const v=Je(e);return(Array.isArray(v)?v:[v]).map(st).filter(M1)});let p=fo;const m=Z(r),f=u.value?ge(()=>[d.value,st(i),m.value],([v,S])=>{if(p(),!m.value||!v.length)return;const x=new IntersectionObserver(t,{root:st(S),rootMargin:s,threshold:a});v.forEach(k=>k&&x.observe(k)),p=()=>{x.disconnect(),p=fo}},{immediate:r,flush:"post"}):fo,h=()=>{p(),f(),m.value=!1};return ln(h),{isSupported:u,isActive:m,pause(){p(),m.value=!1},resume(){m.value=!0},stop:h}}const Xc=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function N0(e,t={}){const{document:n=Xp,autoExit:i=!1}=t,s=N(()=>{var k;return(k=st(e))!=null?k:n==null?void 0:n.querySelector("html")}),a=Z(!1),l=N(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(k=>n&&k in n||s.value&&k in s.value)),r=N(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(k=>n&&k in n||s.value&&k in s.value)),u=N(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(k=>n&&k in n||s.value&&k in s.value)),d=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(k=>n&&k in n),p=Bi(()=>s.value&&n&&l.value!==void 0&&r.value!==void 0&&u.value!==void 0),m=()=>d?(n==null?void 0:n[d])===s.value:!1,f=()=>{if(u.value){if(n&&n[u.value]!=null)return n[u.value];{const k=s.value;if((k==null?void 0:k[u.value])!=null)return!!k[u.value]}}return!1};async function h(){if(p.value){if(r.value)if((n==null?void 0:n[r.value])!=null)await n[r.value]();else{const k=s.value;(k==null?void 0:k[r.value])!=null&&await k[r.value]()}a.value=!1}}async function v(){if(!p.value)return;f()&&await h();const k=s.value;l.value&&(k==null?void 0:k[l.value])!=null&&(await k[l.value](),a.value=!0)}async function S(){await(a.value?h():v())}const x=()=>{const k=f();(!k||k&&m())&&(a.value=k)};return xe(n,Xc,x,!1),xe(()=>st(s),Xc,x,!1),i&&ln(h),{isSupported:p,isFullscreen:a,enter:v,exit:h,toggle:S}}function Jt(e,t,n={}){const{window:i=Xe}=n;return $0(e,t,i==null?void 0:i.localStorage,n)}const D0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function q0(e={}){const{reactive:t=!1,target:n=Xe,aliasMap:i=D0,passive:s=!0,onEventFired:a=fo}=e,l=je(new Set),r={toJSON(){return{}},current:l},u=t?je(r):r,d=new Set,p=new Set;function m(S,x){S in u&&(t?u[S]=x:u[S].value=x)}function f(){l.clear();for(const S of p)m(S,!1)}function h(S,x){var k,C;const b=(k=S.key)==null?void 0:k.toLowerCase(),A=[(C=S.code)==null?void 0:C.toLowerCase(),b].filter(Boolean);b&&(x?l.add(b):l.delete(b));for(const R of A)p.add(R),m(R,x);b==="meta"&&!x?(d.forEach(R=>{l.delete(R),m(R,!1)}),d.clear()):typeof S.getModifierState=="function"&&S.getModifierState("Meta")&&x&&[...l,...A].forEach(R=>d.add(R))}xe(n,"keydown",S=>(h(S,!0),a(S)),{passive:s}),xe(n,"keyup",S=>(h(S,!1),a(S)),{passive:s}),xe("blur",f,{passive:!0}),xe("focus",f,{passive:!0});const v=new Proxy(u,{get(S,x,k){if(typeof x!="string")return Reflect.get(S,x,k);if(x=x.toLowerCase(),x in i&&(x=i[x]),!(x in u))if(/[+_-]/.test(x)){const b=x.split(/[+_-]/g).map(P=>P.trim());u[x]=N(()=>b.every(P=>Je(v[P])))}else u[x]=Z(!1);const C=Reflect.get(S,x,k);return t?Je(C):C}});return v}const F0={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function Dq(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:i=!1,initialValue:s={x:0,y:0},window:a=Xe,target:l=a,eventFilter:r}=e,u=Z(s.x),d=Z(s.y),p=Z(null),m=typeof t=="function"?t:F0[t],f=k=>{const C=m(k);C&&([u.value,d.value]=C,p.value="mouse")},h=k=>{if(k.touches.length>0){const C=m(k.touches[0]);C&&([u.value,d.value]=C,p.value="touch")}},v=()=>{u.value=s.x,d.value=s.y},S=r?k=>r(()=>f(k),{}):k=>f(k),x=r?k=>r(()=>h(k),{}):k=>h(k);return l&&(xe(l,"mousemove",S,{passive:!0}),xe(l,"dragover",S,{passive:!0}),n&&t!=="movement"&&(xe(l,"touchstart",x,{passive:!0}),xe(l,"touchmove",x,{passive:!0}),i&&xe(l,"touchend",v,{passive:!0}))),{x:u,y:d,sourceType:p}}function j0(e,t={}){const n=Jp(e),{threshold:i=50,onSwipe:s,onSwipeEnd:a,onSwipeStart:l}=t,r=je({x:0,y:0}),u=(R,F)=>{r.x=R,r.y=F},d=je({x:0,y:0}),p=(R,F)=>{d.x=R,d.y=F},m=N(()=>r.x-d.x),f=N(()=>r.y-d.y),{max:h,abs:v}=Math,S=N(()=>h(v(m.value),v(f.value))>=i),x=Z(!1),k=Z(!1),C=N(()=>S.value?v(m.value)>v(f.value)?m.value>0?"left":"right":f.value>0?"up":"down":"none"),b=R=>{var F,W,U;const se=R.buttons===0,de=R.buttons===1;return(U=(W=(F=t.pointerTypes)==null?void 0:F.includes(R.pointerType))!=null?W:se||de)!=null?U:!0},P=[xe(e,"pointerdown",R=>{var F,W;if(!b(R))return;k.value=!0,(W=(F=n.value)==null?void 0:F.style)==null||W.setProperty("touch-action","none");const U=R.target;U==null||U.setPointerCapture(R.pointerId);const{clientX:se,clientY:de}=R;u(se,de),p(se,de),l==null||l(R)}),xe(e,"pointermove",R=>{if(!b(R)||!k.value)return;const{clientX:F,clientY:W}=R;p(F,W),!x.value&&S.value&&(x.value=!0),x.value&&(s==null||s(R))}),xe(e,"pointerup",R=>{var F,W;b(R)&&(x.value&&(a==null||a(R,C.value)),k.value=!1,x.value=!1,(W=(F=n.value)==null?void 0:F.style)==null||W.setProperty("touch-action","initial"))})],A=()=>P.forEach(R=>R());return{isSwiping:jt(x),direction:jt(C),posStart:jt(r),posEnd:jt(d),distanceX:m,distanceY:f,stop:A}}let V0=0;function qq(e,t={}){const n=Z(!1),{document:i=Xp,immediate:s=!0,manual:a=!1,id:l=`vueuse_styletag_${++V0}`}=t,r=Z(e);let u=()=>{};const d=()=>{if(!i)return;const m=i.getElementById(l)||i.createElement("style");m.isConnected||(m.type="text/css",m.id=l,t.media&&(m.media=t.media),i.head.appendChild(m)),!n.value&&(u=ge(r,f=>{m.textContent=f},{immediate:!0}),n.value=!0)},p=()=>{!i||!n.value||(u(),i.head.removeChild(i.getElementById(l)),n.value=!1)};return s&&!a&&Qp(d),a||ln(p),{id:l,css:r,unload:p,load:d,isLoaded:jt(n)}}var B0=Object.defineProperty,eu=Object.getOwnPropertySymbols,U0=Object.prototype.hasOwnProperty,J0=Object.prototype.propertyIsEnumerable,tu=(e,t,n)=>t in e?B0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q0=(e,t)=>{for(var n in t||(t={}))U0.call(t,n)&&tu(e,n,t[n]);if(eu)for(var n of eu(t))J0.call(t,n)&&tu(e,n,t[n]);return e};function Fq(e={}){const{controls:t=!1,offset:n=0,immediate:i=!0,interval:s="requestAnimationFrame",callback:a}=e,l=Z(Sl()+n),r=()=>l.value=Sl()+n,u=a?()=>{r(),a(l.value)}:r,d=s==="requestAnimationFrame"?p0(u,{immediate:i}):U1(u,s,{immediate:i});return t?Q0({timestamp:l},d):l}function Ct(e,t,n,i={}){var s,a,l;const{clone:r=!1,passive:u=!1,eventName:d,deep:p=!1,defaultValue:m,shouldEmit:f}=i,h=wt(),v=n||(h==null?void 0:h.emit)||((s=h==null?void 0:h.$emit)==null?void 0:s.bind(h))||((l=(a=h==null?void 0:h.proxy)==null?void 0:a.$emit)==null?void 0:l.bind(h==null?void 0:h.proxy));let S=d;t||(t="modelValue"),S=d||S||`update:${t.toString()}`;const x=b=>r?typeof r=="function"?r(b):v0(b):b,k=()=>O1(e[t])?x(e[t]):m,C=b=>{f?f(b)&&v(S,b):v(S,b)};if(u){const b=k(),P=Z(b);return ge(()=>e[t],A=>P.value=x(A)),ge(P,A=>{(A!==e[t]||p)&&C(A)},{deep:p}),P}else return N({get(){return k()},set(b){C(b)}})}function jq({window:e=Xe}={}){if(!e)return Z(!1);const t=Z(e.document.hasFocus());return xe(e,"blur",()=>{t.value=!1}),xe(e,"focus",()=>{t.value=!0}),t}function Y0(e={}){const{window:t=Xe,initialWidth:n=1/0,initialHeight:i=1/0,listenOrientation:s=!0,includeScrollbar:a=!0}=e,l=Z(n),r=Z(i),u=()=>{t&&(a?(l.value=t.innerWidth,r.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,r.value=t.document.documentElement.clientHeight))};if(u(),Qp(u),xe("resize",u,{passive:!0}),s){const d=to("(orientation: portrait)");ge(d,()=>u())}return{width:l,height:r}}function Z0(){return em().__VUE_DEVTOOLS_GLOBAL_HOOK__}function em(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const G0=typeof Proxy=="function",X0="devtools-plugin:setup",eb="plugin:settings:set";let zo,wl;function tb(){var e;return zo!==void 0||(typeof window<"u"&&window.performance?(zo=!0,wl=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(zo=!0,wl=global.perf_hooks.performance):zo=!1),zo}function nb(){return tb()?wl.now():Date.now()}class ob{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const i={};if(t.settings)for(const l in t.settings){const r=t.settings[l];i[l]=r.defaultValue}const s=`__vue-devtools-plugin-settings__${t.id}`;let a=Object.assign({},i);try{const l=localStorage.getItem(s),r=JSON.parse(l);Object.assign(a,r)}catch{}this.fallbacks={getSettings(){return a},setSettings(l){try{localStorage.setItem(s,JSON.stringify(l))}catch{}a=l},now(){return nb()}},n&&n.on(eb,(l,r)=>{l===this.plugin.id&&this.fallbacks.setSettings(r)}),this.proxiedOn=new Proxy({},{get:(l,r)=>this.target?this.target.on[r]:(...u)=>{this.onQueue.push({method:r,args:u})}}),this.proxiedTarget=new Proxy({},{get:(l,r)=>this.target?this.target[r]:r==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(r)?(...u)=>(this.targetQueue.push({method:r,args:u,resolve:()=>{}}),this.fallbacks[r](...u)):(...u)=>new Promise(d=>{this.targetQueue.push({method:r,args:u,resolve:d})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function ib(e,t){const n=e,i=em(),s=Z0(),a=G0&&n.enableEarlyProxy;if(s&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!a))s.emit(X0,e,t);else{const l=a?new ob(n,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:l}),l&&t(l.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const mn=typeof window<"u";function sb(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function Ma(e,t){const n={};for(const i in t){const s=t[i];n[i]=Ot(s)?s.map(e):e(s)}return n}const hi=()=>{},Ot=Array.isArray;function Ee(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const ab=/\/$/,lb=e=>e.replace(ab,"");function Ta(e,t,n="/"){let i,s={},a="",l="";const r=t.indexOf("#");let u=t.indexOf("?");return r<u&&r>=0&&(u=-1),u>-1&&(i=t.slice(0,u),a=t.slice(u+1,r>-1?r:t.length),s=e(a)),r>-1&&(i=i||t.slice(0,r),l=t.slice(r,t.length)),i=ub(i??t,n),{fullPath:i+(a&&"?")+a+l,path:i,query:s,hash:l}}function rb(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function nu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ou(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Nn(t.matched[i],n.matched[s])&&tm(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Nn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function tm(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!cb(e[n],t[n]))return!1;return!0}function cb(e,t){return Ot(e)?iu(e,t):Ot(t)?iu(t,e):e===t}function iu(e,t){return Ot(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function ub(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Ee(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),i=e.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let a=n.length-1,l,r;for(l=0;l<i.length;l++)if(r=i[l],r!==".")if(r==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+i.slice(l-(l===i.length?1:0)).join("/")}var Oi;(function(e){e.pop="pop",e.push="push"})(Oi||(Oi={}));var vi;(function(e){e.back="back",e.forward="forward",e.unknown=""})(vi||(vi={}));function db(e){if(!e)if(mn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lb(e)}const pb=/^[^#]+#/;function mb(e,t){return e.replace(pb,"#")+t}function fb(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const pa=()=>({left:window.pageXOffset,top:window.pageYOffset});function hb(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!i||!document.getElementById(e.el.slice(1))))try{const a=document.querySelector(e.el);if(i&&a){Ee(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ee(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){Ee(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=fb(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function su(e,t){return(history.state?history.state.position-t:-1)+e}const xl=new Map;function vb(e,t){xl.set(e,t)}function _b(e){const t=xl.get(e);return xl.delete(e),t}let gb=()=>location.protocol+"//"+location.host;function nm(e,t){const{pathname:n,search:i,hash:s}=t,a=e.indexOf("#");if(a>-1){let r=s.includes(e.slice(a))?e.slice(a).length:1,u=s.slice(r);return u[0]!=="/"&&(u="/"+u),nu(u,"")}return nu(n,e)+i+s}function bb(e,t,n,i){let s=[],a=[],l=null;const r=({state:f})=>{const h=nm(e,location),v=n.value,S=t.value;let x=0;if(f){if(n.value=h,t.value=f,l&&l===v){l=null;return}x=S?f.position-S.position:0}else i(h);s.forEach(k=>{k(n.value,v,{delta:x,type:Oi.pop,direction:x?x>0?vi.forward:vi.back:vi.unknown})})};function u(){l=n.value}function d(f){s.push(f);const h=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return a.push(h),h}function p(){const{history:f}=window;f.state&&f.replaceState(Pe({},f.state,{scroll:pa()}),"")}function m(){for(const f of a)f();a=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:u,listen:d,destroy:m}}function au(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?pa():null}}function yb(e){const{history:t,location:n}=window,i={value:nm(e,n)},s={value:t.state};s.value||a(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(u,d,p){const m=e.indexOf("#"),f=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+u:gb()+e+u;try{t[p?"replaceState":"pushState"](d,"",f),s.value=d}catch(h){Ee("Error with push/replace State",h),n[p?"replace":"assign"](f)}}function l(u,d){const p=Pe({},t.state,au(s.value.back,u,s.value.forward,!0),d,{position:s.value.position});a(u,p,!0),i.value=u}function r(u,d){const p=Pe({},s.value,t.state,{forward:u,scroll:pa()});t.state||Ee(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),a(p.current,p,!0);const m=Pe({},au(i.value,u,null),{position:p.position+1},d);a(u,m,!1),i.value=u}return{location:i,state:s,push:r,replace:l}}function Sb(e){e=db(e);const t=yb(e),n=bb(e,t.state,t.location,t.replace);function i(a,l=!0){l||n.pauseListeners(),history.go(a)}const s=Pe({location:"",base:e,go:i,createHref:mb.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function wb(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),!e.endsWith("#/")&&!e.endsWith("#")&&Ee(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/,"#")}".`),Sb(e)}function xb(e){return typeof e=="string"||e&&typeof e=="object"}function om(e){return typeof e=="string"||typeof e=="symbol"}const wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},im=Symbol("navigation failure");var lu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(lu||(lu={}));const kb={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${zb(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Ro(e,t){return Pe(new Error(kb[e](t)),{type:e,[im]:!0},t)}function rn(e,t){return e instanceof Error&&im in e&&(t==null||!!(e.type&t))}const $b=["params","query","hash"];function zb(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of $b)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const ru="[^/]+?",Ib={sensitive:!1,strict:!1,start:!0,end:!0},Cb=/[.+*?^${}()[\]/\\]/g;function Eb(e,t){const n=Pe({},Ib,t),i=[];let s=n.start?"^":"";const a=[];for(const d of e){const p=d.length?[]:[90];n.strict&&!d.length&&(s+="/");for(let m=0;m<d.length;m++){const f=d[m];let h=40+(n.sensitive?.25:0);if(f.type===0)m||(s+="/"),s+=f.value.replace(Cb,"\\$&"),h+=40;else if(f.type===1){const{value:v,repeatable:S,optional:x,regexp:k}=f;a.push({name:v,repeatable:S,optional:x});const C=k||ru;if(C!==ru){h+=10;try{new RegExp(`(${C})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${v}" (${C}): `+P.message)}}let b=S?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;m||(b=x&&d.length<2?`(?:/${b})`:"/"+b),x&&(b+="?"),s+=b,h+=20,x&&(h+=-8),S&&(h+=-20),C===".*"&&(h+=-50)}p.push(h)}i.push(p)}if(n.strict&&n.end){const d=i.length-1;i[d][i[d].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const l=new RegExp(s,n.sensitive?"":"i");function r(d){const p=d.match(l),m={};if(!p)return null;for(let f=1;f<p.length;f++){const h=p[f]||"",v=a[f-1];m[v.name]=h&&v.repeatable?h.split("/"):h}return m}function u(d){let p="",m=!1;for(const f of e){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const h of f)if(h.type===0)p+=h.value;else if(h.type===1){const{value:v,repeatable:S,optional:x}=h,k=v in d?d[v]:"";if(Ot(k)&&!S)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const C=Ot(k)?k.join("/"):k;if(!C)if(x)f.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${v}"`);p+=C}}return p||"/"}return{re:l,score:i,keys:a,parse:r,stringify:u}}function Ob(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Mb(e,t){let n=0;const i=e.score,s=t.score;for(;n<i.length&&n<s.length;){const a=Ob(i[n],s[n]);if(a)return a;n++}if(Math.abs(s.length-i.length)===1){if(cu(i))return 1;if(cu(s))return-1}return s.length-i.length}function cu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Tb={type:0,value:""},Ab=/[a-zA-Z0-9_]/;function Kb(e){if(!e)return[[]];if(e==="/")return[[Tb]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(h){throw new Error(`ERR (${n})/"${d}": ${h}`)}let n=0,i=n;const s=[];let a;function l(){a&&s.push(a),a=[]}let r=0,u,d="",p="";function m(){d&&(n===0?a.push({type:0,value:d}):n===1||n===2||n===3?(a.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:d,regexp:p,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),d="")}function f(){d+=u}for(;r<e.length;){if(u=e[r++],u==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:u==="/"?(d&&m(),l()):u===":"?(m(),n=1):f();break;case 4:f(),n=i;break;case 1:u==="("?n=2:Ab.test(u)?f():(m(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&r--);break;case 2:u===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+u:n=3:p+=u;break;case 3:m(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&r--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),m(),l(),s}function Pb(e,t,n){const i=Eb(Kb(e.path),n);{const a=new Set;for(const l of i.keys)a.has(l.name)&&Ee(`Found duplicated params with name "${l.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),a.add(l.name)}const s=Pe(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Lb(e,t){const n=[],i=new Map;t=pu({strict:!1,end:!0,sensitive:!1},t);function s(p){return i.get(p)}function a(p,m,f){const h=!f,v=Rb(p);Db(v,m),v.aliasOf=f&&f.record;const S=pu(t,p),x=[v];if("alias"in p){const b=typeof p.alias=="string"?[p.alias]:p.alias;for(const P of b)x.push(Pe({},v,{components:f?f.record.components:v.components,path:P,aliasOf:f?f.record:v}))}let k,C;for(const b of x){const{path:P}=b;if(m&&P[0]!=="/"){const A=m.record.path,R=A[A.length-1]==="/"?"":"/";b.path=m.record.path+(P&&R+P)}if(b.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(k=Pb(b,m,S),m&&P[0]==="/"&&qb(k,m),f?(f.alias.push(k),Nb(f,k)):(C=C||k,C!==k&&C.alias.push(k),h&&p.name&&!du(k)&&l(p.name)),v.children){const A=v.children;for(let R=0;R<A.length;R++)a(A[R],k,f&&f.children[R])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&u(k)}return C?()=>{l(C)}:hi}function l(p){if(om(p)){const m=i.get(p);m&&(i.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(l),m.alias.forEach(l))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&i.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function r(){return n}function u(p){let m=0;for(;m<n.length&&Mb(p,n[m])>=0&&(p.record.path!==n[m].record.path||!sm(p,n[m]));)m++;n.splice(m,0,p),p.record.name&&!du(p)&&i.set(p.record.name,p)}function d(p,m){let f,h={},v,S;if("name"in p&&p.name){if(f=i.get(p.name),!f)throw Ro(1,{location:p});{const C=Object.keys(p.params||{}).filter(b=>!f.keys.find(P=>P.name===b));C.length&&Ee(`Discarded invalid param(s) "${C.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}S=f.record.name,h=Pe(uu(m.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),p.params&&uu(p.params,f.keys.map(C=>C.name))),v=f.stringify(h)}else if("path"in p)v=p.path,v.startsWith("/")||Ee(`The Matcher cannot resolve relative paths but received "${v}". Unless you directly called \`matcher.resolve("${v}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(C=>C.re.test(v)),f&&(h=f.parse(v),S=f.record.name);else{if(f=m.name?i.get(m.name):n.find(C=>C.re.test(m.path)),!f)throw Ro(1,{location:p,currentLocation:m});S=f.record.name,h=Pe({},m.params,p.params),v=f.stringify(h)}const x=[];let k=f;for(;k;)x.unshift(k.record),k=k.parent;return{name:S,path:v,params:h,matched:x,meta:Wb(x)}}return e.forEach(p=>a(p)),{addRoute:a,resolve:d,removeRoute:l,getRoutes:r,getRecordMatcher:s}}function uu(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function Rb(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Hb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Hb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="boolean"?n:n[i];return t}function du(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Wb(e){return e.reduce((t,n)=>Pe(t,n.meta),{})}function pu(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function kl(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function Nb(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(kl.bind(null,n)))return Ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(kl.bind(null,n)))return Ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function Db(e,t){t&&t.record.name&&!e.name&&!e.path&&Ee(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function qb(e,t){for(const n of t.keys)if(!e.keys.find(kl.bind(null,n)))return Ee(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function sm(e,t){return t.children.some(n=>n===e||sm(e,n))}const am=/#/g,Fb=/&/g,jb=/\//g,Vb=/=/g,Bb=/\?/g,lm=/\+/g,Ub=/%5B/g,Jb=/%5D/g,rm=/%5E/g,Qb=/%60/g,cm=/%7B/g,Yb=/%7C/g,um=/%7D/g,Zb=/%20/g;function kr(e){return encodeURI(""+e).replace(Yb,"|").replace(Ub,"[").replace(Jb,"]")}function Gb(e){return kr(e).replace(cm,"{").replace(um,"}").replace(rm,"^")}function $l(e){return kr(e).replace(lm,"%2B").replace(Zb,"+").replace(am,"%23").replace(Fb,"%26").replace(Qb,"`").replace(cm,"{").replace(um,"}").replace(rm,"^")}function Xb(e){return $l(e).replace(Vb,"%3D")}function ey(e){return kr(e).replace(am,"%23").replace(Bb,"%3F")}function ty(e){return e==null?"":ey(e).replace(jb,"%2F")}function Mi(e){try{return decodeURIComponent(""+e)}catch{Ee(`Error decoding "${e}". Using original value`)}return""+e}function ny(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<i.length;++s){const a=i[s].replace(lm," "),l=a.indexOf("="),r=Mi(l<0?a:a.slice(0,l)),u=l<0?null:Mi(a.slice(l+1));if(r in t){let d=t[r];Ot(d)||(d=t[r]=[d]),d.push(u)}else t[r]=u}return t}function mu(e){let t="";for(let n in e){const i=e[n];if(n=Xb(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ot(i)?i.map(a=>a&&$l(a)):[i&&$l(i)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function oy(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Ot(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const iy=Symbol("router view location matched"),fu=Symbol("router view depth"),$r=Symbol("router"),dm=Symbol("route location"),zl=Symbol("router view location");function Zo(){let e=[];function t(i){return e.push(i),()=>{const s=e.indexOf(i);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function zn(e,t,n,i,s){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((l,r)=>{const u=m=>{m===!1?r(Ro(4,{from:n,to:t})):m instanceof Error?r(m):xb(m)?r(Ro(2,{from:t,to:m})):(a&&i.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=e.call(i&&i.instances[s],t,n,sy(u,t,n));let p=Promise.resolve(d);if(e.length<3&&(p=p.then(u)),e.length>2){const m=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof d=="object"&&"then"in d)p=p.then(f=>u._called?f:(Ee(m),Promise.reject(new Error("Invalid navigation guard"))));else if(d!==void 0&&!u._called){Ee(m),r(new Error("Invalid navigation guard"));return}}p.catch(m=>r(m))})}function sy(e,t,n){let i=0;return function(){i++===1&&Ee(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,i===1&&e.apply(null,arguments)}}function Aa(e,t,n,i){const s=[];for(const a of e){!a.components&&!a.children.length&&Ee(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);for(const l in a.components){let r=a.components[l];{if(!r||typeof r!="object"&&typeof r!="function")throw Ee(`Component "${l}" in record with path "${a.path}" is not a valid component. Received "${String(r)}".`),new Error("Invalid route component");if("then"in r){Ee(`Component "${l}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=r;r=()=>u}else r.__asyncLoader&&!r.__warnedDefineAsync&&(r.__warnedDefineAsync=!0,Ee(`Component "${l}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(ay(r)){const d=(r.__vccOpts||r)[t];d&&s.push(zn(d,n,i,a,l))}else{let u=r();"catch"in u||(Ee(`Component "${l}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),s.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${a.path}"`));const p=sb(d)?d.default:d;a.components[l]=p;const f=(p.__vccOpts||p)[t];return f&&zn(f,n,i,a,l)()}))}}}return s}function ay(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function hu(e){const t=$($r),n=$(dm),i=N(()=>t.resolve(L(e.to))),s=N(()=>{const{matched:u}=i.value,{length:d}=u,p=u[d-1],m=n.matched;if(!p||!m.length)return-1;const f=m.findIndex(Nn.bind(null,p));if(f>-1)return f;const h=vu(u[d-2]);return d>1&&vu(p)===h&&m[m.length-1].path!==h?m.findIndex(Nn.bind(null,u[d-2])):f}),a=N(()=>s.value>-1&&uy(n.params,i.value.params)),l=N(()=>s.value>-1&&s.value===n.matched.length-1&&tm(n.params,i.value.params));function r(u={}){return cy(u)?t[L(e.replace)?"replace":"push"](L(e.to)).catch(hi):Promise.resolve()}if(mn){const u=wt();if(u){const d={route:i.value,isActive:a.value,isExactActive:l.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(d),yo(()=>{d.route=i.value,d.isActive=a.value,d.isExactActive=l.value},{flush:"post"})}}return{route:i,href:N(()=>i.value.href),isActive:a,isExactActive:l,navigate:r}}const ly=Ke({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hu,setup(e,{slots:t}){const n=je(hu(e)),{options:i}=$($r),s=N(()=>({[_u(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[_u(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:St("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},a)}}}),ry=ly;function cy(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function uy(e,t){for(const n in t){const i=t[n],s=e[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Ot(s)||s.length!==i.length||i.some((a,l)=>a!==s[l]))return!1}return!0}function vu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _u=(e,t,n)=>e??t??n,dy=Ke({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){my();const i=$(zl),s=N(()=>e.route||i.value),a=$(fu,0),l=N(()=>{let d=L(a);const{matched:p}=s.value;let m;for(;(m=p[d])&&!m.components;)d++;return d}),r=N(()=>s.value.matched[l.value]);zt(fu,N(()=>l.value+1)),zt(iy,r),zt(zl,s);const u=Z();return ge(()=>[u.value,r.value,e.name],([d,p,m],[f,h,v])=>{p&&(p.instances[m]=d,h&&h!==p&&d&&d===f&&(p.leaveGuards.size||(p.leaveGuards=h.leaveGuards),p.updateGuards.size||(p.updateGuards=h.updateGuards))),d&&p&&(!h||!Nn(p,h)||!f)&&(p.enterCallbacks[m]||[]).forEach(S=>S(d))},{flush:"post"}),()=>{const d=s.value,p=e.name,m=r.value,f=m&&m.components[p];if(!f)return gu(n.default,{Component:f,route:d});const h=m.props[p],v=h?h===!0?d.params:typeof h=="function"?h(d):h:null,x=St(f,Pe({},v,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(m.instances[p]=null)},ref:u}));if(mn&&x.ref){const k={depth:l.value,name:m.name,path:m.path,meta:m.meta};(Ot(x.ref)?x.ref.map(b=>b.i):[x.ref.i]).forEach(b=>{b.__vrv_devtools=k})}return gu(n.default,{Component:x,route:d})||x}}});function gu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const py=dy;function my(){const e=wt(),t=e.parent&&e.parent.type.name,n=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const i=t==="KeepAlive"?"keep-alive":"transition";Ee(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${i}>
    <component :is="Component" />
  </${i}>
</router-view>`)}}function Go(e,t){const n=Pe({},e,{matched:e.matched.map(i=>wy(i,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function us(e){return{_custom:{display:e}}}let fy=0;function hy(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const i=fy++;ib({id:"org.vuejs.router"+(i?"."+i:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((p,m)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Go(t.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:p,componentInstance:m})=>{if(m.__vrv_devtools){const f=m.__vrv_devtools;p.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:pm})}Ot(m.__vrl_devtools)&&(m.__devtoolsApi=s,m.__vrl_devtools.forEach(f=>{let h=hm,v="";f.isExactActive?(h=fm,v="This is exactly active"):f.isActive&&(h=mm,v="This link is active"),p.tags.push({label:f.route.path,textColor:0,tooltip:v,backgroundColor:h})}))}),ge(t.currentRoute,()=>{u(),s.notifyComponentUpdate(),s.sendInspectorTree(r),s.sendInspectorState(r)});const a="router:navigations:"+i;s.addTimelineLayer({id:a,label:`Router${i?" "+i:""} Navigations`,color:4237508}),t.onError((p,m)=>{s.addTimelineEvent({layerId:a,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:s.now(),data:{error:p},groupId:m.meta.__navigationId}})});let l=0;t.beforeEach((p,m)=>{const f={guard:us("beforeEach"),from:Go(m,"Current Location during this navigation"),to:Go(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:l++}),s.addTimelineEvent({layerId:a,event:{time:s.now(),title:"Start of navigation",subtitle:p.fullPath,data:f,groupId:p.meta.__navigationId}})}),t.afterEach((p,m,f)=>{const h={guard:us("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=us("❌")):h.status=us("✅"),h.from=Go(m,"Current Location during this navigation"),h.to=Go(p,"Target location"),s.addTimelineEvent({layerId:a,event:{title:"End of navigation",subtitle:p.fullPath,time:s.now(),data:h,logType:f?"warning":"default",groupId:p.meta.__navigationId}})});const r="router-inspector:"+i;s.addInspector({id:r,label:"Routes"+(i?" "+i:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!d)return;const p=d;let m=n.getRoutes().filter(f=>!f.parent);m.forEach(gm),p.filter&&(m=m.filter(f=>Il(f,p.filter.toLowerCase()))),m.forEach(f=>_m(f,t.currentRoute.value)),p.rootNodes=m.map(vm)}let d;s.on.getInspectorTree(p=>{d=p,p.app===e&&p.inspectorId===r&&u()}),s.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===r){const f=n.getRoutes().find(h=>h.record.__vd_id===p.nodeId);f&&(p.state={options:_y(f)})}}),s.sendInspectorTree(r),s.sendInspectorState(r)})}function vy(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function _y(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(i=>`${i.name}${vy(i)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(i=>i.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(i=>i.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const pm=15485081,mm=2450411,fm=8702998,gy=2282478,hm=16486972,by=6710886;function vm(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:gy}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:hm}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:pm}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:fm}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:mm}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:by});let i=n.__vd_id;return i==null&&(i=String(yy++),n.__vd_id=i),{id:i,label:n.path,tags:t,children:e.children.map(vm)}}let yy=0;const Sy=/^\/(.*)\/([a-z]*)$/;function _m(e,t){const n=t.matched.length&&Nn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(i=>Nn(i,e.record))),e.children.forEach(i=>_m(i,t))}function gm(e){e.__vd_match=!1,e.children.forEach(gm)}function Il(e,t){const n=String(e.re).match(Sy);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(l=>Il(l,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const s=e.record.path.toLowerCase(),a=Mi(s);return!t.startsWith("/")&&(a.includes(t)||s.includes(t))||a.startsWith(t)||s.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(l=>Il(l,t))}function wy(e,t){const n={};for(const i in e)t.includes(i)||(n[i]=e[i]);return n}function xy(e){const t=Lb(e.routes,e),n=e.parseQuery||ny,i=e.stringifyQuery||mu,s=e.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const a=Zo(),l=Zo(),r=Zo(),u=sn(wn);let d=wn;mn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Ma.bind(null,H=>""+H),m=Ma.bind(null,ty),f=Ma.bind(null,Mi);function h(H,X){let te,oe;return om(H)?(te=t.getRecordMatcher(H),oe=X):oe=H,t.addRoute(oe,te)}function v(H){const X=t.getRecordMatcher(H);X?t.removeRoute(X):Ee(`Cannot remove non-existent route "${String(H)}"`)}function S(){return t.getRoutes().map(H=>H.record)}function x(H){return!!t.getRecordMatcher(H)}function k(H,X){if(X=Pe({},X||u.value),typeof H=="string"){const y=Ta(n,H,X.path),K=t.resolve({path:y.path},X),q=s.createHref(y.fullPath);return q.startsWith("//")?Ee(`Location "${H}" resolved to "${q}". A resolved location cannot start with multiple slashes.`):K.matched.length||Ee(`No match found for location with path "${H}"`),Pe(y,K,{params:f(K.params),hash:Mi(y.hash),redirectedFrom:void 0,href:q})}let te;if("path"in H)"params"in H&&!("name"in H)&&Object.keys(H.params).length&&Ee(`Path "${H.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),te=Pe({},H,{path:Ta(n,H.path,X.path).path});else{const y=Pe({},H.params);for(const K in y)y[K]==null&&delete y[K];te=Pe({},H,{params:m(y)}),X.params=m(X.params)}const oe=t.resolve(te,X),ke=H.hash||"";ke&&!ke.startsWith("#")&&Ee(`A \`hash\` should always start with the character "#". Replace "${ke}" with "#${ke}".`),oe.params=p(f(oe.params));const He=rb(i,Pe({},H,{hash:Gb(ke),path:oe.path})),_=s.createHref(He);return _.startsWith("//")?Ee(`Location "${H}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):oe.matched.length||Ee(`No match found for location with path "${"path"in H?H.path:H}"`),Pe({fullPath:He,hash:ke,query:i===mu?oy(H.query):H.query||{}},oe,{redirectedFrom:void 0,href:_})}function C(H){return typeof H=="string"?Ta(n,H,u.value.path):Pe({},H)}function b(H,X){if(d!==H)return Ro(8,{from:X,to:H})}function P(H){return F(H)}function A(H){return P(Pe(C(H),{replace:!0}))}function R(H){const X=H.matched[H.matched.length-1];if(X&&X.redirect){const{redirect:te}=X;let oe=typeof te=="function"?te(H):te;if(typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=C(oe):{path:oe},oe.params={}),!("path"in oe)&&!("name"in oe))throw Ee(`Invalid redirect found:
${JSON.stringify(oe,null,2)}
 when navigating to "${H.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Pe({query:H.query,hash:H.hash,params:"path"in oe?{}:H.params},oe)}}function F(H,X){const te=d=k(H),oe=u.value,ke=H.state,He=H.force,_=H.replace===!0,y=R(te);if(y)return F(Pe(C(y),{state:typeof y=="object"?Pe({},ke,y.state):ke,force:He,replace:_}),X||te);const K=te;K.redirectedFrom=X;let q;return!He&&ou(i,oe,te)&&(q=Ro(16,{to:K,from:oe}),Mt(oe,oe,!0,!1)),(q?Promise.resolve(q):se(K,oe)).catch(D=>rn(D)?rn(D,2)?D:Le(D):ce(D,K,oe)).then(D=>{if(D){if(rn(D,2))return ou(i,k(D.to),K)&&X&&(X._count=X._count?X._count+1:1)>30?(Ee(`Detected a possibly infinite redirection in a navigation guard when going from "${oe.fullPath}" to "${K.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):F(Pe({replace:_},C(D.to),{state:typeof D.to=="object"?Pe({},ke,D.to.state):ke,force:He}),X||K)}else D=G(K,oe,!0,_,ke);return de(K,oe,D),D})}function W(H,X){const te=b(H,X);return te?Promise.reject(te):Promise.resolve()}function U(H){const X=Qt.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(H):H()}function se(H,X){let te;const[oe,ke,He]=ky(H,X);te=Aa(oe.reverse(),"beforeRouteLeave",H,X);for(const y of oe)y.leaveGuards.forEach(K=>{te.push(zn(K,H,X))});const _=W.bind(null,H,X);return te.push(_),Tt(te).then(()=>{te=[];for(const y of a.list())te.push(zn(y,H,X));return te.push(_),Tt(te)}).then(()=>{te=Aa(ke,"beforeRouteUpdate",H,X);for(const y of ke)y.updateGuards.forEach(K=>{te.push(zn(K,H,X))});return te.push(_),Tt(te)}).then(()=>{te=[];for(const y of H.matched)if(y.beforeEnter&&!X.matched.includes(y))if(Ot(y.beforeEnter))for(const K of y.beforeEnter)te.push(zn(K,H,X));else te.push(zn(y.beforeEnter,H,X));return te.push(_),Tt(te)}).then(()=>(H.matched.forEach(y=>y.enterCallbacks={}),te=Aa(He,"beforeRouteEnter",H,X),te.push(_),Tt(te))).then(()=>{te=[];for(const y of l.list())te.push(zn(y,H,X));return te.push(_),Tt(te)}).catch(y=>rn(y,8)?y:Promise.reject(y))}function de(H,X,te){for(const oe of r.list())U(()=>oe(H,X,te))}function G(H,X,te,oe,ke){const He=b(H,X);if(He)return He;const _=X===wn,y=mn?history.state:{};te&&(oe||_?s.replace(H.fullPath,Pe({scroll:_&&y&&y.scroll},ke)):s.push(H.fullPath,ke)),u.value=H,Mt(H,X,te,_),Le()}let _e;function be(){_e||(_e=s.listen((H,X,te)=>{if(!Fn.listening)return;const oe=k(H),ke=R(oe);if(ke){F(Pe(ke,{replace:!0}),oe).catch(hi);return}d=oe;const He=u.value;mn&&vb(su(He.fullPath,te.delta),pa()),se(oe,He).catch(_=>rn(_,12)?_:rn(_,2)?(F(_.to,oe).then(y=>{rn(y,20)&&!te.delta&&te.type===Oi.pop&&s.go(-1,!1)}).catch(hi),Promise.reject()):(te.delta&&s.go(-te.delta,!1),ce(_,oe,He))).then(_=>{_=_||G(oe,He,!1),_&&(te.delta&&!rn(_,8)?s.go(-te.delta,!1):te.type===Oi.pop&&rn(_,20)&&s.go(-1,!1)),de(oe,He,_)}).catch(hi)}))}let we=Zo(),Re=Zo(),ne;function ce(H,X,te){Le(H);const oe=Re.list();return oe.length?oe.forEach(ke=>ke(H,X,te)):(Ee("uncaught error during route navigation:"),console.error(H)),Promise.reject(H)}function $e(){return ne&&u.value!==wn?Promise.resolve():new Promise((H,X)=>{we.add([H,X])})}function Le(H){return ne||(ne=!H,be(),we.list().forEach(([X,te])=>H?te(H):X()),we.reset()),H}function Mt(H,X,te,oe){const{scrollBehavior:ke}=e;if(!mn||!ke)return Promise.resolve();const He=!te&&_b(su(H.fullPath,0))||(oe||!te)&&history.state&&history.state.scroll||null;return it().then(()=>ke(H,X,He)).then(_=>_&&hb(_)).catch(_=>ce(_,H,X))}const nt=H=>s.go(H);let ht;const Qt=new Set,Fn={currentRoute:u,listening:!0,addRoute:h,removeRoute:v,hasRoute:x,getRoutes:S,resolve:k,options:e,push:P,replace:A,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:a.add,beforeResolve:l.add,afterEach:r.add,onError:Re.add,isReady:$e,install(H){const X=this;H.component("RouterLink",ry),H.component("RouterView",py),H.config.globalProperties.$router=X,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>L(u)}),mn&&!ht&&u.value===wn&&(ht=!0,P(s.location).catch(ke=>{Ee("Unexpected error when starting the router:",ke)}));const te={};for(const ke in wn)te[ke]=N(()=>u.value[ke]);H.provide($r,X),H.provide(dm,je(te)),H.provide(zl,u);const oe=H.unmount;Qt.add(H),H.unmount=function(){Qt.delete(H),Qt.size<1&&(d=wn,_e&&_e(),_e=null,u.value=wn,ht=!1,ne=!1),oe()},mn&&hy(H,X,t)}};function Tt(H){return H.reduce((X,te)=>X.then(()=>U(te)),Promise.resolve())}return Fn}function ky(e,t){const n=[],i=[],s=[],a=Math.max(t.matched.length,e.matched.length);for(let l=0;l<a;l++){const r=t.matched[l];r&&(e.matched.find(d=>Nn(d,r))?i.push(r):n.push(r));const u=e.matched[l];u&&(t.matched.find(d=>Nn(d,u))||s.push(u))}return[n,i,s]}const Ka=Z(!1),_i=Z(!1),Oo=Z(!1),$y=Z(!0),Cl=f0({xs:460,...m0}),ho=Y0(),bm=q0(),zy=N(()=>ho.height.value-ho.width.value/Mn>180),ym=N0(Ut?document.body:null),Kn=u0(),Iy=N(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Kn.value)==null?void 0:e.tagName)||"")||((t=Kn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Cy=N(()=>{var e;return["BUTTON","A"].includes(((e=Kn.value)==null?void 0:e.tagName)||"")});Jt("slidev-camera","default");Jt("slidev-mic","default");const bs=Jt("slidev-scale",0),ut=Jt("slidev-show-overview",!1),Pa=Jt("slidev-presenter-cursor",!0),bu=Jt("slidev-show-editor",!1);Jt("slidev-editor-width",Ut?window.innerWidth*.4:100);const Sm=Yp(ut);function yu(e,t,n,i=s=>s){return e*i(.5-t*(.5-n))}function Ey(e){return[-e[0],-e[1]]}function qt(e,t){return[e[0]+t[0],e[1]+t[1]]}function Pt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Dt(e,t){return[e[0]*t,e[1]*t]}function Oy(e,t){return[e[0]/t,e[1]/t]}function Xo(e){return[e[1],-e[0]]}function Su(e,t){return e[0]*t[0]+e[1]*t[1]}function My(e,t){return e[0]===t[0]&&e[1]===t[1]}function Ty(e){return Math.hypot(e[0],e[1])}function Ay(e){return e[0]*e[0]+e[1]*e[1]}function wu(e,t){return Ay(Pt(e,t))}function wm(e){return Oy(e,Ty(e))}function Ky(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function ei(e,t,n){let i=Math.sin(n),s=Math.cos(n),a=e[0]-t[0],l=e[1]-t[1],r=a*s-l*i,u=a*i+l*s;return[r+t[0],u+t[1]]}function El(e,t,n){return qt(e,Dt(Pt(t,e),n))}function xu(e,t,n){return qt(e,Dt(t,n))}var{min:Io,PI:Py}=Math,ku=.275,ti=Py+1e-4;function Ly(e,t={}){let{size:n=16,smoothing:i=.5,thinning:s=.5,simulatePressure:a=!0,easing:l=ne=>ne,start:r={},end:u={},last:d=!1}=t,{cap:p=!0,easing:m=ne=>ne*(2-ne)}=r,{cap:f=!0,easing:h=ne=>--ne*ne*ne+1}=u;if(e.length===0||n<=0)return[];let v=e[e.length-1].runningLength,S=r.taper===!1?0:r.taper===!0?Math.max(n,v):r.taper,x=u.taper===!1?0:u.taper===!0?Math.max(n,v):u.taper,k=Math.pow(n*i,2),C=[],b=[],P=e.slice(0,10).reduce((ne,ce)=>{let $e=ce.pressure;if(a){let Le=Io(1,ce.distance/n),Mt=Io(1,1-Le);$e=Io(1,ne+(Mt-ne)*(Le*ku))}return(ne+$e)/2},e[0].pressure),A=yu(n,s,e[e.length-1].pressure,l),R,F=e[0].vector,W=e[0].point,U=W,se=W,de=U,G=!1;for(let ne=0;ne<e.length;ne++){let{pressure:ce}=e[ne],{point:$e,vector:Le,distance:Mt,runningLength:nt}=e[ne];if(ne<e.length-1&&v-nt<3)continue;if(s){if(a){let oe=Io(1,Mt/n),ke=Io(1,1-oe);ce=Io(1,P+(ke-P)*(oe*ku))}A=yu(n,s,ce,l)}else A=n/2;R===void 0&&(R=A);let ht=nt<S?m(nt/S):1,Qt=v-nt<x?h((v-nt)/x):1;A=Math.max(.01,A*Math.min(ht,Qt));let Fn=(ne<e.length-1?e[ne+1]:e[ne]).vector,Tt=ne<e.length-1?Su(Le,Fn):1,H=Su(Le,F)<0&&!G,X=Tt!==null&&Tt<0;if(H||X){let oe=Dt(Xo(F),A);for(let ke=1/13,He=0;He<=1;He+=ke)se=ei(Pt($e,oe),$e,ti*He),C.push(se),de=ei(qt($e,oe),$e,ti*-He),b.push(de);W=se,U=de,X&&(G=!0);continue}if(G=!1,ne===e.length-1){let oe=Dt(Xo(Le),A);C.push(Pt($e,oe)),b.push(qt($e,oe));continue}let te=Dt(Xo(El(Fn,Le,Tt)),A);se=Pt($e,te),(ne<=1||wu(W,se)>k)&&(C.push(se),W=se),de=qt($e,te),(ne<=1||wu(U,de)>k)&&(b.push(de),U=de),P=ce,F=Le}let _e=e[0].point.slice(0,2),be=e.length>1?e[e.length-1].point.slice(0,2):qt(e[0].point,[1,1]),we=[],Re=[];if(e.length===1){if(!(S||x)||d){let ne=xu(_e,wm(Xo(Pt(_e,be))),-(R||A)),ce=[];for(let $e=1/13,Le=$e;Le<=1;Le+=$e)ce.push(ei(ne,_e,ti*2*Le));return ce}}else{if(!(S||x&&e.length===1))if(p)for(let ce=1/13,$e=ce;$e<=1;$e+=ce){let Le=ei(b[0],_e,ti*$e);we.push(Le)}else{let ce=Pt(C[0],b[0]),$e=Dt(ce,.5),Le=Dt(ce,.51);we.push(Pt(_e,$e),Pt(_e,Le),qt(_e,Le),qt(_e,$e))}let ne=Xo(Ey(e[e.length-1].vector));if(x||S&&e.length===1)Re.push(be);else if(f){let ce=xu(be,ne,A);for(let $e=1/29,Le=$e;Le<1;Le+=$e)Re.push(ei(ce,be,ti*3*Le))}else Re.push(qt(be,Dt(ne,A)),qt(be,Dt(ne,A*.99)),Pt(be,Dt(ne,A*.99)),Pt(be,Dt(ne,A)))}return C.concat(Re,b.reverse(),we)}function Ry(e,t={}){var n;let{streamline:i=.5,size:s=16,last:a=!1}=t;if(e.length===0)return[];let l=.15+(1-i)*.85,r=Array.isArray(e[0])?e:e.map(({x:h,y:v,pressure:S=.5})=>[h,v,S]);if(r.length===2){let h=r[1];r=r.slice(0,-1);for(let v=1;v<5;v++)r.push(El(r[0],h,v/4))}r.length===1&&(r=[...r,[...qt(r[0],[1,1]),...r[0].slice(2)]]);let u=[{point:[r[0][0],r[0][1]],pressure:r[0][2]>=0?r[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],d=!1,p=0,m=u[0],f=r.length-1;for(let h=1;h<r.length;h++){let v=a&&h===f?r[h].slice(0,2):El(m.point,r[h],l);if(My(m.point,v))continue;let S=Ky(v,m.point);if(p+=S,h<f&&!d){if(p<s)continue;d=!0}m={point:v,pressure:r[h][2]>=0?r[h][2]:.5,vector:wm(Pt(m.point,v)),distance:S,runningLength:p},u.push(m)}return u[0].vector=((n=u[1])==null?void 0:n.vector)||[0,0],u}function Hy(e,t={}){return Ly(Ry(e,t),t)}var Wy=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let i=0,s=n.length;i<s;i++)n[i](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(s=>t!==s)}}});function Fs(e,t){return e-t}function Ny(e){return e<0?-1:1}function js(e){return[Math.abs(e),Ny(e)]}function xm(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Dy=2,fn=Dy,Do=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,i=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const s=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-s.left)*i,y:(e.pageY-s.top)*i,pressure:e.pressure}}else{const s=this.drauu.svgPoint;s.x=e.clientX,s.y=e.clientY;const a=s.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:a.x*i,y:a.y*i,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),i=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",i.fill??"transparent"),n.setAttribute("stroke",i.color),n.setAttribute("stroke-width",i.size.toString()),n.setAttribute("stroke-linecap","round"),i.dasharray&&n.setAttribute("stroke-dasharray",i.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(fn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},qy=class extends Do{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Hy(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((i,[s,a],l,r)=>{const[u,d]=r[(l+1)%r.length];return i.push(s,a,(s+u)/2,(a+d)/2),i},["M",...t[0],"Q"]);return n.push("Z"),n.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}},Fy=class extends Do{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=js(e.x-this.start.x),[i,s]=js(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,i);t=a,i=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",i);else{const[a,l]=[this.start.x,this.start.x+t*n].sort(Fs),[r,u]=[this.start.y,this.start.y+i*s].sort(Fs);this.attr("cx",(a+l)/2),this.attr("cy",(r+u)/2),this.attr("rx",(l-a)/2),this.attr("ry",(u-r)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function km(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),i=document.createElementNS("http://www.w3.org/2000/svg","marker"),s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttribute("fill",t),i.setAttribute("id",e),i.setAttribute("viewBox","0 -5 10 10"),i.setAttribute("refX","5"),i.setAttribute("refY","0"),i.setAttribute("markerWidth","4"),i.setAttribute("markerHeight","4"),i.setAttribute("orient","auto"),s.setAttribute("d","M0,-5L10,0L0,5"),i.appendChild(s),n.appendChild(i),n}var jy=class extends Do{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=xm(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(km(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const i=e.x-this.start.x,s=e.y-this.start.y;if(s!==0){let a=i/s;a=Math.round(a),Math.abs(a)<=1?(t=this.start.x+s*a,n=this.start.y+s):(t=this.start.x+i,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Vy=class extends Do{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=js(e.x-this.start.x),[i,s]=js(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,i);t=a,i=a}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-i),this.attr("width",t*2),this.attr("height",i*2);else{const[a,l]=[this.start.x,this.start.x+t*n].sort(Fs),[r,u]=[this.start.y,this.start.y+i*s].sort(Fs);this.attr("x",a),this.attr("y",r),this.attr("width",l-a),this.attr("height",u-r)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function By(e,t){const n=e.x-t.x,i=e.y-t.y;return n*n+i*i}function Uy(e,t,n){let i=t.x,s=t.y,a=n.x-i,l=n.y-s;if(a!==0||l!==0){const r=((e.x-i)*a+(e.y-s)*l)/(a*a+l*l);r>1?(i=n.x,s=n.y):r>0&&(i+=a*r,s+=l*r)}return a=e.x-i,l=e.y-s,a*a+l*l}function Jy(e,t){let n=e[0];const i=[n];let s;for(let a=1,l=e.length;a<l;a++)s=e[a],By(s,n)>t&&(i.push(s),n=s);return n!==s&&s&&i.push(s),i}function Ol(e,t,n,i,s){let a=i,l=0;for(let r=t+1;r<n;r++){const u=Uy(e[r],e[t],e[n]);u>a&&(l=r,a=u)}a>i&&(l-t>1&&Ol(e,t,l,i,s),s.push(e[l]),n-l>1&&Ol(e,l,n,i,s))}function Qy(e,t){const n=e.length-1,i=[e[0]];return Ol(e,0,n,t,i),i.push(e[n]),i}function $u(e,t,n=!1){if(e.length<=2)return e;const i=t!==void 0?t*t:1;return e=n?e:Jy(e,i),e=Qy(e,i),e}var Yy=class extends Do{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=xm();const t=km(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=$u(this.points,1,!0),this.count=0),this.attr("d",Iu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Iu($u(this.points,1,!0))),!e.getTotalLength()))}};function Zy(e,t){const n=t.x-e.x,i=t.y-e.y;return{length:Math.sqrt(n**2+i**2),angle:Math.atan2(i,n)}}function zu(e,t,n,i){const s=t||e,a=n||e,l=.2,r=Zy(s,a),u=r.angle+(i?Math.PI:0),d=r.length*l,p=e.x+Math.cos(u)*d,m=e.y+Math.sin(u)*d;return{x:p,y:m}}function Gy(e,t,n){const i=zu(n[t-1],n[t-2],e),s=zu(e,n[t-1],n[t+1],!0);return`C ${i.x.toFixed(fn)},${i.y.toFixed(fn)} ${s.x.toFixed(fn)},${s.y.toFixed(fn)} ${e.x.toFixed(fn)},${e.y.toFixed(fn)}`}function Iu(e){return e.reduce((t,n,i,s)=>i===0?`M ${n.x.toFixed(fn)},${n.y.toFixed(fn)}`:`${t} ${Gy(n,i,s)}`,"")}var Xy=class extends Do{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,i)=>{if(n&&n.length)for(let s=0;s<n.length;s++){const a=n[s];if(a.getTotalLength){const l=a.getTotalLength();for(let r=0;r<this.pathSubFactor;r++){const u=a.getPointAtLength(l*r/this.pathSubFactor),d=a.getPointAtLength(l*(r+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:d.x,y1:u.y,y2:d.y,segment:r,element:i||a})}}else a.children&&t(a.children,a)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],i={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,i)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,i=e.x2,s=t.x1,a=t.x2,l=e.y1,r=e.y2,u=t.y1,d=t.y2,p=(n-i)*(u-d)-(l-r)*(s-a),m=(n*r-l*i)*(s-a)-(n-i)*(s*d-u*a),f=(n*r-l*i)*(u-d)-(l-r)*(s*d-u*a),h=(v,S,x)=>v>=S&&v<=x?!0:v>=x&&v<=S;if(p===0)return!1;{const v={x:m/p,y:f/p};return h(v.x,n,i)&&h(v.y,l,r)&&h(v.x,s,a)&&h(v.y,u,d)}}};function eS(e){return{draw:new Yy(e),stylus:new qy(e),line:new jy(e),rectangle:new Vy(e),ellipse:new Fy(e),eraseLine:new Xy(e)}}var tS=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Wy(),this._models=eS(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,i=this.eventStart.bind(this),s=this.eventMove.bind(this),a=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",i,{passive:!1}),window.addEventListener("pointermove",s,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",i),window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function nS(e){return new tS(e)}const Ml=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],en=Jt("slidev-drawing-enabled",!1),Vq=Jt("slidev-drawing-pinned",!1),oS=Z(!1),iS=Z(!1),sS=Z(!1),Ti=Z(!1),so=E1(Jt("slidev-drawing-brush",{color:Ml[0],size:4,mode:"stylus"})),Cu=Z("stylus"),$m=N(()=>Oe.drawings.syncAll||_t.value);let Ai=!1;const ni=N({get(){return Cu.value},set(e){Cu.value=e,e==="arrow"?(so.mode="line",so.arrowEnd=!0):(so.mode=e,so.arrowEnd=!1)}}),aS=je({brush:so,acceptsInputTypes:N(()=>en.value&&(!Oe.drawings.presenterOnly||_t.value)?void 0:["pen"]),coordinateTransform:!1}),ft=ta(nS(aS));function lS(){ft.clear(),$m.value&&Bp(Be.value,"")}function zr(){var e;iS.value=ft.canRedo(),oS.value=ft.canUndo(),sS.value=!!((e=ft.el)!=null&&e.children.length)}function rS(e){Ai=!0;const t=Ds[e||Be.value];t!=null?ft.load(t):ft.clear(),zr(),Ai=!1}ft.on("changed",()=>{if(zr(),!Ai){const e=ft.dump(),t=Be.value;(Ds[t]||"")!==e&&$m.value&&Bp(t,ft.dump())}});$1(e=>{Ai=!0,e[Be.value]!=null&&ft.load(e[Be.value]||""),Ai=!1,zr()});it(()=>{ge(Be,()=>{ft.mounted&&rS()},{immediate:!0})});ft.on("start",()=>Ti.value=!0);ft.on("end",()=>Ti.value=!1);window.addEventListener("keydown",e=>{if(!en.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ft.redo():ft.undo():e.code==="Escape"?en.value=!1:e.code==="KeyL"&&t?ni.value="line":e.code==="KeyA"&&t?ni.value="arrow":e.code==="KeyS"&&t?ni.value="stylus":e.code==="KeyR"&&t?ni.value="rectangle":e.code==="KeyE"&&t?ni.value="ellipse":e.code==="KeyC"&&t?lS():e.code.startsWith("Digit")&&t&&+e.code[5]<=Ml.length?so.color=Ml[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ye(...e){return N(()=>e.every(t=>Je(t)))}function kt(e){return N(()=>!Je(e))}const Eu=z0(),La=Jt("slidev-color-schema","auto"),Tl=N(()=>Oe.colorSchema!=="auto"),Ir=N({get(){return Tl.value?Oe.colorSchema==="dark":La.value==="auto"?Eu.value:La.value==="dark"},set(e){Tl.value||(La.value=e===Eu.value?"auto":e?"dark":"light")}}),zm=Yp(Ir);Ut&&ge(Ir,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const ys=Z(1),Ss=N(()=>Qe.length-1),Et=Z(0),Cr=Z(0);function cS(){Et.value>ys.value&&(Et.value-=1)}function uS(){Et.value<Ss.value&&(Et.value+=1)}function dS(){if(Et.value>ys.value){let e=Et.value-Cr.value;e<ys.value&&(e=ys.value),Et.value=e}}function pS(){if(Et.value<Ss.value){let e=Et.value+Cr.value;e>Ss.value&&(e=Ss.value),Et.value=e}}function mS(){const{escape:e,space:t,shift:n,left:i,right:s,up:a,down:l,enter:r,d:u,g:d,o:p}=bm;let m=[{name:"next_space",key:Ye(t,kt(n)),fn:Pn,autoRepeat:!0},{name:"prev_space",key:Ye(t,n),fn:Ln,autoRepeat:!0},{name:"next_right",key:Ye(s,kt(n),kt(ut)),fn:Pn,autoRepeat:!0},{name:"prev_left",key:Ye(i,kt(n),kt(ut)),fn:Ln,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Pn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Ln,autoRepeat:!0},{name:"next_down",key:Ye(l,kt(ut)),fn:Pi,autoRepeat:!0},{name:"prev_up",key:Ye(a,kt(ut)),fn:()=>Li(!1),autoRepeat:!0},{name:"next_shift",key:Ye(s,n),fn:Pi,autoRepeat:!0},{name:"prev_shift",key:Ye(i,n),fn:()=>Li(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(u,kt(en)),fn:zm},{name:"toggle_overview",key:Ye(p,kt(en)),fn:Sm},{name:"hide_overview",key:Ye(e,kt(en)),fn:()=>ut.value=!1},{name:"goto",key:Ye(d,kt(en)),fn:()=>Oo.value=!Oo.value},{name:"next_overview",key:Ye(s,ut),fn:uS},{name:"prev_overview",key:Ye(i,ut),fn:cS},{name:"up_overview",key:Ye(a,ut),fn:dS},{name:"down_overview",key:Ye(l,ut),fn:pS},{name:"goto_from_overview",key:Ye(r,ut),fn:()=>{Wo(Et.value),ut.value=!1}}];const f=new Set(m.map(v=>v.name));if(m.filter(v=>v.name&&f.has(v.name)).length===0){const v=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(v),console.warn(v)}return m}const Im=Ye(kt(Iy),kt(Cy),$y);function fS(e,t,n=!1){typeof e=="string"&&(e=bm[e]);const i=Ye(e,Im);let s=0,a;const l=()=>{if(clearTimeout(a),!i.value){s=0;return}n&&(a=setTimeout(l,Math.max(1e3-s*250,150)),s++),t()};return ge(i,l,{flush:"sync"})}function hS(e,t){return c0(e,n=>{Im.value&&(n.repeat||t())})}function vS(){const e=mS();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&fS(n.key,n.fn,n.autoRepeat)}),hS("f",()=>ym.toggle())}const _S={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gS=o("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),bS=[gS];function yS(e,t){return g(),ie("svg",_S,bS)}const SS={name:"carbon-close",render:yS};function Er(e,t=""){var s,a;const n=["slidev-page",t],i=(a=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:a.no;return i!=null&&n.push(`slidev-page-${i}`),n.filter(Boolean).join(" ")}const wS=Ke({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;$(I);const n=Z(),i=H0(n),s=N(()=>t.width?t.width:i.width.value),a=N(()=>t.width?t.width/Mn:i.height.value);t.width&&yo(()=>{n.value&&(n.value.style.width=`${s.value}px`,n.value.style.height=`${a.value}px`)});const l=N(()=>s.value/a.value),r=N(()=>t.scale&&!Ho.value?t.scale:l.value<Mn?s.value/Tn:a.value*Mn/Tn),u=N(()=>({height:`${wr}px`,width:`${Tn}px`,transform:`translate(-50%, -50%) scale(${r.value})`})),d=N(()=>({"select-none":!Oe.selectable,"slidev-code-line-numbers":Oe.lineNumbers}));return zt(Fp,r),(p,m)=>(g(),ie("div",{id:"slide-container",ref_key:"root",ref:n,class:Ve(d.value)},[o("div",{id:"slide-content",style:tt(u.value)},[Bt(p.$slots,"default")],4),Bt(p.$slots,"controls")],2))}});const E=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},Cm=E(wS,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Or=Ke({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Ct(e,"clicks",t),i=Ct(e,"clicksElements",t),s=Ct(e,"clicksDisabled",t),a=Ct(e,"clicksOrderMap",t);i.value.length=0,zt(u1,e.route),zt(d1,e.context),zt(mi,n),zt(fi,s),zt(eo,i),zt(gl,a)},render(){var e,t;return this.$props.is?St(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),xS=["innerHTML"],kS=Ke({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return $(I),(t,n)=>L(Ds)[t.page]?(g(),ie("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:L(Ds)[t.page]},null,8,xS)):Se("v-if",!0)}}),Em=E(kS,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),$S=Object.freeze(Object.defineProperty({__proto__:null,default:Em},Symbol.toStringTag,{value:"Module"})),zS={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},IS=["onClick"],Ra=4*16*2,Ou=2*16,CS=Ke({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;$(I);const i=Ct(n,"modelValue",t);function s(){i.value=!1}function a(m){Wo(m),s()}function l(m){return m===Et.value}const r=Cl.smaller("xs"),u=Cl.smaller("sm"),d=N(()=>r.value?ho.width.value-Ra:u.value?(ho.width.value-Ra-Ou)/2:300),p=N(()=>Math.floor((ho.width.value-Ra)/(d.value+Ou)));return yo(()=>{Et.value=Be.value,Cr.value=p.value}),(m,f)=>{const h=SS;return g(),ie(Me,null,[np(o("div",zS,[o("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tt(`grid-template-columns: repeat(auto-fit,minmax(${d.value}px,1fr))`)},[(g(!0),ie(Me,null,No(L(Qe).slice(0,-1),(v,S)=>(g(),ie("div",{key:v.path,class:"relative"},[o("div",{class:Ve(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l(S+1),"border-gray-400":!l(S+1)}]),style:tt(L(xr)),onClick:x=>a(+v.path)},[(g(),z(Cm,{key:v.path,width:d.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:w(()=>[v!=null&&v.component?(g(),z(L(Or),{key:0,is:v.component,"clicks-disabled":!0,class:Ve(L(Er)(v)),route:v,context:"overview"},null,8,["is","class","route"])):Se("v-if",!0),j(Em,{page:+v.path},null,8,["page"])]),_:2},1032,["width"]))],14,IS),o("div",{class:"absolute top-0 opacity-50",style:tt(`left: ${d.value+5}px`)},gt(S+1),5)]))),128))],4)],512),[[Tp,L(i)]]),L(i)?(g(),ie("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:s},[j(h)])):Se("v-if",!0)],64)}}});const ES=E(CS,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),OS="/4/svelte/assets/logo-b72bde5d.png",MS={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},TS=Ke({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;$(I);const i=Ct(n,"modelValue",t);function s(){i.value=!1}return(a,l)=>(g(),z(ip,null,[L(i)?(g(),ie("div",MS,[o("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=r=>s())}),o("div",{class:Ve(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[Bt(a.$slots,"default")],2)])):Se("v-if",!0)],1024))}}),AS=E(TS,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),KS={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},PS=["innerHTML"],LS=o("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[o("div",{class:"flex gap-1 children:my-auto"},[o("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),o("img",{class:"w-5 h-5",src:OS,alt:"Slidev"}),o("div",{style:{color:"#2082A6"}},[o("b",null,"Sli"),c("dev ")])])],-1),RS=Ke({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;$(I);const i=Ct(n,"modelValue",t),s=N(()=>typeof Oe.info=="string");return(a,l)=>(g(),z(AS,{modelValue:L(i),"onUpdate:modelValue":l[0]||(l[0]=r=>Te(i)?i.value=r:null),class:"px-6 py-4"},{default:w(()=>[o("div",KS,[s.value?(g(),ie("div",{key:0,class:"mb-4",innerHTML:L(Oe).info},null,8,PS)):Se("v-if",!0),LS])]),_:1},8,["modelValue"]))}});const HS=E(RS,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function _n(e){return Array.isArray?Array.isArray(e):Tm(e)==="[object Array]"}const WS=1/0;function NS(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-WS?"-0":t}function DS(e){return e==null?"":NS(e)}function tn(e){return typeof e=="string"}function Om(e){return typeof e=="number"}function qS(e){return e===!0||e===!1||FS(e)&&Tm(e)=="[object Boolean]"}function Mm(e){return typeof e=="object"}function FS(e){return Mm(e)&&e!==null}function It(e){return e!=null}function Ha(e){return!e.trim().length}function Tm(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const jS="Incorrect 'index' type",VS=e=>`Invalid value for key ${e}`,BS=e=>`Pattern length exceeds max of ${e}.`,US=e=>`Missing ${e} property in key`,JS=e=>`Property 'weight' in key '${e}' must be a positive integer`,Mu=Object.prototype.hasOwnProperty;class QS{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(i=>{let s=Am(i);n+=s.weight,this._keys.push(s),this._keyMap[s.id]=s,n+=s.weight}),this._keys.forEach(i=>{i.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Am(e){let t=null,n=null,i=null,s=1,a=null;if(tn(e)||_n(e))i=e,t=Tu(e),n=Al(e);else{if(!Mu.call(e,"name"))throw new Error(US("name"));const l=e.name;if(i=l,Mu.call(e,"weight")&&(s=e.weight,s<=0))throw new Error(JS(l));t=Tu(l),n=Al(l),a=e.getFn}return{path:t,id:n,weight:s,src:i,getFn:a}}function Tu(e){return _n(e)?e:e.split(".")}function Al(e){return _n(e)?e.join("."):e}function YS(e,t){let n=[],i=!1;const s=(a,l,r)=>{if(It(a))if(!l[r])n.push(a);else{let u=l[r];const d=a[u];if(!It(d))return;if(r===l.length-1&&(tn(d)||Om(d)||qS(d)))n.push(DS(d));else if(_n(d)){i=!0;for(let p=0,m=d.length;p<m;p+=1)s(d[p],l,r+1)}else l.length&&s(d,l,r+1)}};return s(e,tn(t)?t.split("."):t,0),i?n:n[0]}const ZS={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},GS={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},XS={location:0,threshold:.6,distance:100},ew={useExtendedSearch:!1,getFn:YS,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var fe={...GS,...ZS,...XS,...ew};const tw=/[^ ]+/g;function nw(e=1,t=3){const n=new Map,i=Math.pow(10,t);return{get(s){const a=s.match(tw).length;if(n.has(a))return n.get(a);const l=1/Math.pow(a,.5*e),r=parseFloat(Math.round(l*i)/i);return n.set(a,r),r},clear(){n.clear()}}}class Mr{constructor({getFn:t=fe.getFn,fieldNormWeight:n=fe.fieldNormWeight}={}){this.norm=nw(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,i)=>{this._keysMap[n.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,tn(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();tn(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,i=this.size();n<i;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!It(t)||Ha(t))return;let i={v:t,i:n,n:this.norm.get(t)};this.records.push(i)}_addObject(t,n){let i={i:n,$:{}};this.keys.forEach((s,a)=>{let l=s.getFn?s.getFn(t):this.getFn(t,s.path);if(It(l)){if(_n(l)){let r=[];const u=[{nestedArrIndex:-1,value:l}];for(;u.length;){const{nestedArrIndex:d,value:p}=u.pop();if(It(p))if(tn(p)&&!Ha(p)){let m={v:p,i:d,n:this.norm.get(p)};r.push(m)}else _n(p)&&p.forEach((m,f)=>{u.push({nestedArrIndex:f,value:m})})}i.$[a]=r}else if(tn(l)&&!Ha(l)){let r={v:l,n:this.norm.get(l)};i.$[a]=r}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function Km(e,t,{getFn:n=fe.getFn,fieldNormWeight:i=fe.fieldNormWeight}={}){const s=new Mr({getFn:n,fieldNormWeight:i});return s.setKeys(e.map(Am)),s.setSources(t),s.create(),s}function ow(e,{getFn:t=fe.getFn,fieldNormWeight:n=fe.fieldNormWeight}={}){const{keys:i,records:s}=e,a=new Mr({getFn:t,fieldNormWeight:n});return a.setKeys(i),a.setIndexRecords(s),a}function ds(e,{errors:t=0,currentLocation:n=0,expectedLocation:i=0,distance:s=fe.distance,ignoreLocation:a=fe.ignoreLocation}={}){const l=t/e.length;if(a)return l;const r=Math.abs(i-n);return s?l+r/s:r?1:l}function iw(e=[],t=fe.minMatchCharLength){let n=[],i=-1,s=-1,a=0;for(let l=e.length;a<l;a+=1){let r=e[a];r&&i===-1?i=a:!r&&i!==-1&&(s=a-1,s-i+1>=t&&n.push([i,s]),i=-1)}return e[a-1]&&a-i>=t&&n.push([i,a-1]),n}const no=32;function sw(e,t,n,{location:i=fe.location,distance:s=fe.distance,threshold:a=fe.threshold,findAllMatches:l=fe.findAllMatches,minMatchCharLength:r=fe.minMatchCharLength,includeMatches:u=fe.includeMatches,ignoreLocation:d=fe.ignoreLocation}={}){if(t.length>no)throw new Error(BS(no));const p=t.length,m=e.length,f=Math.max(0,Math.min(i,m));let h=a,v=f;const S=r>1||u,x=S?Array(m):[];let k;for(;(k=e.indexOf(t,v))>-1;){let F=ds(t,{currentLocation:k,expectedLocation:f,distance:s,ignoreLocation:d});if(h=Math.min(F,h),v=k+p,S){let W=0;for(;W<p;)x[k+W]=1,W+=1}}v=-1;let C=[],b=1,P=p+m;const A=1<<p-1;for(let F=0;F<p;F+=1){let W=0,U=P;for(;W<U;)ds(t,{errors:F,currentLocation:f+U,expectedLocation:f,distance:s,ignoreLocation:d})<=h?W=U:P=U,U=Math.floor((P-W)/2+W);P=U;let se=Math.max(1,f-U+1),de=l?m:Math.min(f+U,m)+p,G=Array(de+2);G[de+1]=(1<<F)-1;for(let be=de;be>=se;be-=1){let we=be-1,Re=n[e.charAt(we)];if(S&&(x[we]=+!!Re),G[be]=(G[be+1]<<1|1)&Re,F&&(G[be]|=(C[be+1]|C[be])<<1|1|C[be+1]),G[be]&A&&(b=ds(t,{errors:F,currentLocation:we,expectedLocation:f,distance:s,ignoreLocation:d}),b<=h)){if(h=b,v=we,v<=f)break;se=Math.max(1,2*f-v)}}if(ds(t,{errors:F+1,currentLocation:f,expectedLocation:f,distance:s,ignoreLocation:d})>h)break;C=G}const R={isMatch:v>=0,score:Math.max(.001,b)};if(S){const F=iw(x,r);F.length?u&&(R.indices=F):R.isMatch=!1}return R}function aw(e){let t={};for(let n=0,i=e.length;n<i;n+=1){const s=e.charAt(n);t[s]=(t[s]||0)|1<<i-n-1}return t}class Pm{constructor(t,{location:n=fe.location,threshold:i=fe.threshold,distance:s=fe.distance,includeMatches:a=fe.includeMatches,findAllMatches:l=fe.findAllMatches,minMatchCharLength:r=fe.minMatchCharLength,isCaseSensitive:u=fe.isCaseSensitive,ignoreLocation:d=fe.ignoreLocation}={}){if(this.options={location:n,threshold:i,distance:s,includeMatches:a,findAllMatches:l,minMatchCharLength:r,isCaseSensitive:u,ignoreLocation:d},this.pattern=u?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(f,h)=>{this.chunks.push({pattern:f,alphabet:aw(f),startIndex:h})},m=this.pattern.length;if(m>no){let f=0;const h=m%no,v=m-h;for(;f<v;)p(this.pattern.substr(f,no),f),f+=no;if(h){const S=m-no;p(this.pattern.substr(S),S)}}else p(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:i}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let v={isMatch:!0,score:0};return i&&(v.indices=[[0,t.length-1]]),v}const{location:s,distance:a,threshold:l,findAllMatches:r,minMatchCharLength:u,ignoreLocation:d}=this.options;let p=[],m=0,f=!1;this.chunks.forEach(({pattern:v,alphabet:S,startIndex:x})=>{const{isMatch:k,score:C,indices:b}=sw(t,v,S,{location:s+x,distance:a,threshold:l,findAllMatches:r,minMatchCharLength:u,includeMatches:i,ignoreLocation:d});k&&(f=!0),m+=C,k&&b&&(p=[...p,...b])});let h={isMatch:f,score:f?m/this.chunks.length:1};return f&&i&&(h.indices=p),h}}class qn{constructor(t){this.pattern=t}static isMultiMatch(t){return Au(t,this.multiRegex)}static isSingleMatch(t){return Au(t,this.singleRegex)}search(){}}function Au(e,t){const n=e.match(t);return n?n[1]:null}class lw extends qn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class rw extends qn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const i=t.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,t.length-1]}}}class cw extends qn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class uw extends qn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class dw extends qn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class pw extends qn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Lm extends qn{constructor(t,{location:n=fe.location,threshold:i=fe.threshold,distance:s=fe.distance,includeMatches:a=fe.includeMatches,findAllMatches:l=fe.findAllMatches,minMatchCharLength:r=fe.minMatchCharLength,isCaseSensitive:u=fe.isCaseSensitive,ignoreLocation:d=fe.ignoreLocation}={}){super(t),this._bitapSearch=new Pm(t,{location:n,threshold:i,distance:s,includeMatches:a,findAllMatches:l,minMatchCharLength:r,isCaseSensitive:u,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Rm extends qn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,i;const s=[],a=this.pattern.length;for(;(i=t.indexOf(this.pattern,n))>-1;)n=i+a,s.push([i,n-1]);const l=!!s.length;return{isMatch:l,score:l?0:1,indices:s}}}const Kl=[lw,Rm,cw,uw,pw,dw,rw,Lm],Ku=Kl.length,mw=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,fw="|";function hw(e,t={}){return e.split(fw).map(n=>{let i=n.trim().split(mw).filter(a=>a&&!!a.trim()),s=[];for(let a=0,l=i.length;a<l;a+=1){const r=i[a];let u=!1,d=-1;for(;!u&&++d<Ku;){const p=Kl[d];let m=p.isMultiMatch(r);m&&(s.push(new p(m,t)),u=!0)}if(!u)for(d=-1;++d<Ku;){const p=Kl[d];let m=p.isSingleMatch(r);if(m){s.push(new p(m,t));break}}}return s})}const vw=new Set([Lm.type,Rm.type]);class _w{constructor(t,{isCaseSensitive:n=fe.isCaseSensitive,includeMatches:i=fe.includeMatches,minMatchCharLength:s=fe.minMatchCharLength,ignoreLocation:a=fe.ignoreLocation,findAllMatches:l=fe.findAllMatches,location:r=fe.location,threshold:u=fe.threshold,distance:d=fe.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:i,minMatchCharLength:s,findAllMatches:l,ignoreLocation:a,location:r,threshold:u,distance:d},this.pattern=n?t:t.toLowerCase(),this.query=hw(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:s}=this.options;t=s?t:t.toLowerCase();let a=0,l=[],r=0;for(let u=0,d=n.length;u<d;u+=1){const p=n[u];l.length=0,a=0;for(let m=0,f=p.length;m<f;m+=1){const h=p[m],{isMatch:v,indices:S,score:x}=h.search(t);if(v){if(a+=1,r+=x,i){const k=h.constructor.type;vw.has(k)?l=[...l,...S]:l.push(S)}}else{r=0,a=0,l.length=0;break}}if(a){let m={isMatch:!0,score:r/a};return i&&(m.indices=l),m}}return{isMatch:!1,score:1}}}const Pl=[];function gw(...e){Pl.push(...e)}function Ll(e,t){for(let n=0,i=Pl.length;n<i;n+=1){let s=Pl[n];if(s.condition(e,t))return new s(e,t)}return new Pm(e,t)}const Vs={AND:"$and",OR:"$or"},Rl={PATH:"$path",PATTERN:"$val"},Hl=e=>!!(e[Vs.AND]||e[Vs.OR]),bw=e=>!!e[Rl.PATH],yw=e=>!_n(e)&&Mm(e)&&!Hl(e),Pu=e=>({[Vs.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Hm(e,t,{auto:n=!0}={}){const i=s=>{let a=Object.keys(s);const l=bw(s);if(!l&&a.length>1&&!Hl(s))return i(Pu(s));if(yw(s)){const u=l?s[Rl.PATH]:a[0],d=l?s[Rl.PATTERN]:s[u];if(!tn(d))throw new Error(VS(u));const p={keyId:Al(u),pattern:d};return n&&(p.searcher=Ll(d,t)),p}let r={children:[],operator:a[0]};return a.forEach(u=>{const d=s[u];_n(d)&&d.forEach(p=>{r.children.push(i(p))})}),r};return Hl(e)||(e=Pu(e)),i(e)}function Sw(e,{ignoreFieldNorm:t=fe.ignoreFieldNorm}){e.forEach(n=>{let i=1;n.matches.forEach(({key:s,norm:a,score:l})=>{const r=s?s.weight:null;i*=Math.pow(l===0&&r?Number.EPSILON:l,(r||1)*(t?1:a))}),n.score=i})}function ww(e,t){const n=e.matches;t.matches=[],It(n)&&n.forEach(i=>{if(!It(i.indices)||!i.indices.length)return;const{indices:s,value:a}=i;let l={indices:s,value:a};i.key&&(l.key=i.key.src),i.idx>-1&&(l.refIndex=i.idx),t.matches.push(l)})}function xw(e,t){t.score=e.score}function kw(e,t,{includeMatches:n=fe.includeMatches,includeScore:i=fe.includeScore}={}){const s=[];return n&&s.push(ww),i&&s.push(xw),e.map(a=>{const{idx:l}=a,r={item:t[l],refIndex:l};return s.length&&s.forEach(u=>{u(a,r)}),r})}class qo{constructor(t,n={},i){this.options={...fe,...n},this.options.useExtendedSearch,this._keyStore=new QS(this.options.keys),this.setCollection(t,i)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Mr))throw new Error(jS);this._myIndex=n||Km(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){It(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let i=0,s=this._docs.length;i<s;i+=1){const a=this._docs[i];t(a,i)&&(this.removeAt(i),i-=1,s-=1,n.push(a))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:i,includeScore:s,shouldSort:a,sortFn:l,ignoreFieldNorm:r}=this.options;let u=tn(t)?tn(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Sw(u,{ignoreFieldNorm:r}),a&&u.sort(l),Om(n)&&n>-1&&(u=u.slice(0,n)),kw(u,this._docs,{includeMatches:i,includeScore:s})}_searchStringList(t){const n=Ll(t,this.options),{records:i}=this._myIndex,s=[];return i.forEach(({v:a,i:l,n:r})=>{if(!It(a))return;const{isMatch:u,score:d,indices:p}=n.searchIn(a);u&&s.push({item:a,idx:l,matches:[{score:d,value:a,norm:r,indices:p}]})}),s}_searchLogical(t){const n=Hm(t,this.options),i=(r,u,d)=>{if(!r.children){const{keyId:m,searcher:f}=r,h=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(u,m),searcher:f});return h&&h.length?[{idx:d,item:u,matches:h}]:[]}const p=[];for(let m=0,f=r.children.length;m<f;m+=1){const h=r.children[m],v=i(h,u,d);if(v.length)p.push(...v);else if(r.operator===Vs.AND)return[]}return p},s=this._myIndex.records,a={},l=[];return s.forEach(({$:r,i:u})=>{if(It(r)){let d=i(n,r,u);d.length&&(a[u]||(a[u]={idx:u,item:r,matches:[]},l.push(a[u])),d.forEach(({matches:p})=>{a[u].matches.push(...p)}))}}),l}_searchObjectList(t){const n=Ll(t,this.options),{keys:i,records:s}=this._myIndex,a=[];return s.forEach(({$:l,i:r})=>{if(!It(l))return;let u=[];i.forEach((d,p)=>{u.push(...this._findMatches({key:d,value:l[p],searcher:n}))}),u.length&&a.push({idx:r,item:l,matches:u})}),a}_findMatches({key:t,value:n,searcher:i}){if(!It(n))return[];let s=[];if(_n(n))n.forEach(({v:a,i:l,n:r})=>{if(!It(a))return;const{isMatch:u,score:d,indices:p}=i.searchIn(a);u&&s.push({score:d,key:t,value:a,idx:l,norm:r,indices:p})});else{const{v:a,n:l}=n,{isMatch:r,score:u,indices:d}=i.searchIn(a);r&&s.push({score:u,key:t,value:a,norm:l,indices:d})}return s}}qo.version="6.6.2";qo.createIndex=Km;qo.parseIndex=ow;qo.config=fe;qo.parseQuery=Hm;gw(_w);const $w={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},zw=["value","disabled","onKeydown"],Iw=["border","onClick"],Cw={"w-4":"","text-right":"",op50:"","text-sm":""},Ew=Ke({__name:"Goto",setup(e){$(I);const t=Z(),n=Z(),i=Z(),s=Z(),a=Z(""),l=Z(0);function r(b){return b!=null}const u=N(()=>new qo(Qe.map(b=>{var P;return(P=b.meta)==null?void 0:P.slide}).filter(r),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),d=N(()=>a.value.startsWith("/")?a.value.substring(1):a.value),p=N(()=>u.value.search(d.value).map(b=>b.item)),m=N(()=>!!p.value.length);function f(){if(m.value){const b=p.value.at(l.value||0);b&&Wo(b.no)}h()}function h(){a.value="",Oo.value=!1}function v(b){b.preventDefault(),l.value++,l.value>=p.value.length&&(l.value=0),x()}function S(b){b.preventDefault(),l.value--,l.value<=-2&&(l.value=p.value.length-1),x()}function x(){var P;const b=(P=s.value)==null?void 0:P[l.value];b&&i.value&&(b.offsetTop+b.offsetHeight>i.value.offsetHeight+i.value.scrollTop?i.value.scrollTo({behavior:"smooth",top:b.offsetTop+b.offsetHeight-i.value.offsetHeight+1}):b.offsetTop<i.value.scrollTop&&i.value.scrollTo({behavior:"smooth",top:b.offsetTop}))}function k(b){l.value=0,a.value=b.target.value}function C(b){Wo(b),h()}return ge(Oo,async b=>{var P;b?(a.value="",l.value=0,setTimeout(()=>{var A;return(A=n.value)==null?void 0:A.focus()},0)):(P=n.value)==null||P.blur()}),ge(Kn,()=>{var b;(b=t.value)!=null&&b.contains(Kn.value)||h()}),(b,P)=>(g(),ie("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:Ve(["fixed right-5 transition-all",L(Oo)?"top-5":"-top-20"]),"w-90":""},[o("div",$w,[o("input",{ref_key:"input",ref:n,value:a.value,type:"text",disabled:!L(Oo),class:Ve(["outline-none bg-transparent",{"text-red-400":!m.value&&a.value}]),placeholder:"Goto...",onKeydown:[is(f,["enter"]),is(h,["escape"]),is(v,["down"]),is(S,["up"])],onInput:k},null,42,zw)]),p.value.length>0?(g(),ie("ul",{key:0,ref_key:"list",ref:i,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(g(!0),ie(Me,null,No(p.value,(A,R)=>(g(),ie("li",{ref_for:!0,ref_key:"items",ref:s,key:A.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:R===0?"":"t main",class:Ve(l.value===R?"bg-active op100":"op80"),onClick:dg(F=>C(A.no),["stop"])},[o("div",Cw,gt(A.no),1),c(" "+gt(A.title),1)],10,Iw))),128))],512)):Se("v-if",!0)],2))}});const Ow=E(Ew,[["__scopeId","data-v-f5ee02a7"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),Mw=Ke({__name:"Controls",setup(e){$(I);const t=sn(),n=sn();return(i,s)=>(g(),ie(Me,null,[j(ES,{modelValue:L(ut),"onUpdate:modelValue":s[0]||(s[0]=a=>Te(ut)?ut.value=a:null)},null,8,["modelValue"]),j(Ow),t.value?(g(),z(L(t),{key:0})):Se("v-if",!0),n.value?(g(),z(L(n),{key:1,modelValue:L(Ka),"onUpdate:modelValue":s[1]||(s[1]=a=>Te(Ka)?Ka.value=a:null)},null,8,["modelValue"])):Se("v-if",!0),L(Oe).info?(g(),z(HS,{key:2,modelValue:L(_i),"onUpdate:modelValue":s[2]||(s[2]=a=>Te(_i)?_i.value=a:null)},null,8,["modelValue"])):Se("v-if",!0)],64))}}),Tw=E(Mw,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),Aw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Kw=o("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Pw=[Kw];function Lw(e,t){return g(),ie("svg",Aw,Pw)}const Rw={name:"carbon-settings-adjust",render:Lw},Hw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ww=o("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Nw=o("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Dw=[Ww,Nw];function qw(e,t){return g(),ie("svg",Hw,Dw)}const Fw={name:"carbon-information",render:qw},jw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vw=o("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Bw=[Vw];function Uw(e,t){return g(),ie("svg",jw,Bw)}const Jw={name:"carbon-download",render:Uw},Qw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yw=o("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Zw=o("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Gw=[Yw,Zw];function Xw(e,t){return g(),ie("svg",Qw,Gw)}const ex={name:"carbon-user-speaker",render:Xw},tx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nx=o("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),ox=o("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),ix=[nx,ox];function sx(e,t){return g(),ie("svg",tx,ix)}const ax={name:"carbon-presentation-file",render:sx},lx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rx=o("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),cx=[rx];function ux(e,t){return g(),ie("svg",lx,cx)}const dx={name:"carbon-pen",render:ux},px={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},mx=o("g",{fill:"currentColor"},[o("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),o("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),fx=[mx];function hx(e,t){return g(),ie("svg",px,fx)}const vx={name:"ph-cursor-duotone",render:hx},_x={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},gx=o("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),bx=[gx];function yx(e,t){return g(),ie("svg",_x,bx)}const Wm={name:"ph-cursor-fill",render:yx},Sx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},wx=o("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),xx=[wx];function kx(e,t){return g(),ie("svg",Sx,xx)}const $x={name:"carbon-sun",render:kx},zx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ix=o("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Cx=[Ix];function Ex(e,t){return g(),ie("svg",zx,Cx)}const Ox={name:"carbon-moon",render:Ex},Mx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tx=o("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Ax=[Tx];function Kx(e,t){return g(),ie("svg",Mx,Ax)}const Px={name:"carbon-apps",render:Kx},Lx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rx=o("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Hx=[Rx];function Wx(e,t){return g(),ie("svg",Lx,Hx)}const Nm={name:"carbon-arrow-right",render:Wx},Nx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dx=o("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),qx=[Dx];function Fx(e,t){return g(),ie("svg",Nx,qx)}const jx={name:"carbon-arrow-left",render:Fx},Vx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bx=o("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Ux=[Bx];function Jx(e,t){return g(),ie("svg",Vx,Ux)}const Qx={name:"carbon-maximize",render:Jx},Yx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zx=o("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Gx=[Zx];function Xx(e,t){return g(),ie("svg",Yx,Gx)}const ek={name:"carbon-minimize",render:Xx},tk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nk=o("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),ok=[nk];function ik(e,t){return g(),ie("svg",tk,ok)}const sk={name:"carbon-checkmark",render:ik},ak={class:"select-list"},lk={class:"title"},rk={class:"items"},ck=["onClick"],uk=Ke({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;$(I);const i=Ct(n,"modelValue",t,{passive:!0});return(s,a)=>{const l=sk;return g(),ie("div",ak,[o("div",lk,gt(e.title),1),o("div",rk,[(g(!0),ie(Me,null,No(e.items,r=>(g(),ie("div",{key:r.value,class:Ve(["item",{active:L(i)===r.value}]),onClick:()=>{var u;i.value=r.value,(u=r.onClick)==null||u.call(r)}},[j(l,{class:Ve(["text-green-500",{"opacity-0":L(i)!==r.value}])},null,8,["class"]),c(" "+gt(r.display||r.value),1)],10,ck))),128))])])}}});const dk=E(uk,[["__scopeId","data-v-3f89fa11"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),pk={class:"text-sm"},mk=Ke({__name:"Settings",setup(e){$(I);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,i)=>(g(),ie("div",pk,[j(dk,{modelValue:L(bs),"onUpdate:modelValue":i[0]||(i[0]=s=>Te(bs)?bs.value=s:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),fk=E(mk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),hk={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},vk=Ke({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;$(I);const i=Ct(n,"modelValue",t,{passive:!0}),s=Z();return l0(s,()=>{i.value=!1}),(a,l)=>(g(),ie("div",{ref_key:"el",ref:s,class:"flex relative"},[o("button",{class:Ve({disabled:e.disabled}),onClick:l[0]||(l[0]=r=>i.value=!L(i))},[Bt(a.$slots,"button",{class:Ve({disabled:e.disabled})})],2),(g(),z(ip,null,[L(i)?(g(),ie("div",hk,[Bt(a.$slots,"menu")])):Se("v-if",!0)],1024))],512))}}),_k=E(vk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),gk={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},bk={__name:"VerticalDivider",setup(e){return $(I),(t,n)=>(g(),ie("div",gk))}},ps=E(bk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),yk={render(){return[]}},Sk={class:"slidev-icon-btn"},wk={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},xk={class:"my-auto"},kk={class:"opacity-50"},$k=Ke({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;$(I);const n=Cl.smaller("md"),{isFullscreen:i,toggle:s}=ym,a=N(()=>Nl.value?`?password=${Nl.value}`:""),l=N(()=>`/presenter/${Be.value}${a.value}`),r=N(()=>`/${Be.value}${a.value}`),u=Z();function d(){u.value&&Kn.value&&u.value.contains(Kn.value)&&Kn.value.blur()}const p=N(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=sn(),f=sn();return An(()=>import("./DrawingControls-7478b720.js"),[]).then(h=>f.value=h.default),(h,v)=>{const S=ek,x=Qx,k=jx,C=Nm,b=Px,P=Ox,A=$x,R=Wm,F=vx,W=dx,U=ax,se=Ks("RouterLink"),de=ex,G=Jw,_e=Fw,be=Rw;return g(),ie("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[o("div",{class:Ve(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",p.value]),onMouseleave:d},[L(pn)?Se("v-if",!0):(g(),ie("button",{key:0,class:"slidev-icon-btn",onClick:v[0]||(v[0]=(...we)=>L(s)&&L(s)(...we))},[L(i)?(g(),z(S,{key:0})):(g(),z(x,{key:1}))])),o("button",{class:Ve(["slidev-icon-btn",{disabled:!L(lW)}]),onClick:v[1]||(v[1]=(...we)=>L(Ln)&&L(Ln)(...we))},[j(k)],2),o("button",{class:Ve(["slidev-icon-btn",{disabled:!L(aW)}]),title:"Next",onClick:v[2]||(v[2]=(...we)=>L(Pn)&&L(Pn)(...we))},[j(C)],2),L(pn)?Se("v-if",!0):(g(),ie("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:v[3]||(v[3]=we=>L(Sm)())},[j(b)])),L(Tl)?Se("v-if",!0):(g(),ie("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:v[4]||(v[4]=we=>L(zm)())},[L(Ir)?(g(),z(P,{key:0})):(g(),z(A,{key:1}))])),j(ps),L(pn)?Se("v-if",!0):(g(),ie(Me,{key:3},[!L(_t)&&!L(n)&&m.value?(g(),ie(Me,{key:0},[j(L(m)),j(ps)],64)):Se("v-if",!0),L(_t)?(g(),ie("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:v[5]||(v[5]=we=>Pa.value=!L(Pa))},[L(Pa)?(g(),z(R,{key:0})):(g(),z(F,{key:1,class:"opacity-50"}))])):Se("v-if",!0)],64)),(!L(Oe).drawings.presenterOnly||L(_t))&&!L(pn)?(g(),ie(Me,{key:4},[o("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:v[6]||(v[6]=we=>en.value=!L(en))},[j(W),L(en)?(g(),ie("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tt({background:L(so).color})},null,4)):Se("v-if",!0)]),j(ps)],64)):Se("v-if",!0),L(pn)?Se("v-if",!0):(g(),ie(Me,{key:5},[L(_t)?(g(),z(se,{key:0,to:r.value,class:"slidev-icon-btn",title:"Play Mode"},{default:w(()=>[j(U)]),_:1},8,["to"])):Se("v-if",!0),L(tW)?(g(),z(se,{key:1,to:l.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:w(()=>[j(de)]),_:1},8,["to"])):Se("v-if",!0),Se("v-if",!0)],64)),(g(),ie(Me,{key:6},[L(Oe).download?(g(),ie("button",{key:0,class:"slidev-icon-btn",onClick:v[8]||(v[8]=(...we)=>L(Dl)&&L(Dl)(...we))},[j(G)])):Se("v-if",!0)],64)),!L(_t)&&L(Oe).info&&!L(pn)?(g(),ie("button",{key:7,class:"slidev-icon-btn",onClick:v[9]||(v[9]=we=>_i.value=!L(_i))},[j(_e)])):Se("v-if",!0),!L(_t)&&!L(pn)?(g(),z(_k,{key:8},{button:w(()=>[o("button",Sk,[j(be)])]),menu:w(()=>[j(fk)]),_:1})):Se("v-if",!0),L(pn)?Se("v-if",!0):(g(),z(ps,{key:9})),o("div",wk,[o("div",xk,[c(gt(L(Be))+" ",1),o("span",kk,"/ "+gt(L(nW)),1)])]),j(L(yk))],34)],512)}}}),zk=E($k,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),Ik={style:{"font-size":"0.55rem","line-height":"1rem"}},Ck=o("div",{class:"absolute bottom-0 left-1"},[o("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),Ek={class:"absolute bottom-1 left-89 text-gray-700"},Ok={key:0,class:"absolute bottom-1 right-1 text-gray-700"},Mk={__name:"global-top",setup(e){const t=$(I);return(n,i)=>(g(),ie("footer",Ik,[Ck,o("div",Ek," ITT E.Agnelli - Informatica - "+gt(L(t).configs.materia)+" - prof. Antonio Mancuso - a.s. "+gt(L(t).configs.as)+" - v "+gt(L(t).configs.version||0),1),L(t).nav.currentPage!==1&&L(t).nav.currentPage!=L(t).nav.total+1?(g(),ie("div",Ok,gt(L(t).nav.currentPage-1)+" / "+gt(L(t).nav.total-1),1)):Se("v-if",!0)]))}},Tk=E(Mk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),Dm={render(){return[St(Tk)]}},qm={render(){return[]}},Ak={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Kk=Ke({__name:"PresenterMouse",setup(e){return $(I),(t,n)=>{const i=Wm;return L(Oa).cursor?(g(),ie("div",Ak,[j(i,{class:"absolute",style:tt({left:`${L(Oa).cursor.x}%`,top:`${L(Oa).cursor.y}%`})},null,8,["style"])])):Se("v-if",!0)}}}),Pk=E(Kk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Lk=Ke({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){$(I),ge(dt,()=>{var i,s;(i=dt.value)!=null&&i.meta&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),(s=Wa.value)!=null&&s.meta&&Wa.value.meta.preload!==!1&&(Wa.value.meta.__preloaded=!0)},{immediate:!0});const t=sn();An(()=>import("./DrawingLayer-826d2223.js"),[]).then(i=>t.value=i.default);const n=N(()=>Qe.filter(i=>{var s;return((s=i.meta)==null?void 0:s.__preloaded)||i===dt.value}));return(i,s)=>(g(),ie(Me,null,[Se(" Global Bottom "),j(L(qm)),Se(" Slides "),j(ig,me(L(uW),{id:"slideshow",tag:"div"}),{default:w(()=>[(g(!0),ie(Me,null,No(n.value,a=>{var l;return np((g(),z(L(Or),{key:a.path,is:a==null?void 0:a.component,clicks:a===L(dt)?L(Lt):0,"clicks-elements":((l=a.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:Ve(L(Er)(a)),route:a,context:i.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Tp,a===L(dt)]])}),128))]),_:1},16),Se(" Global Top "),j(L(Dm)),t.value?(g(),z(L(t),{key:0})):Se("v-if",!0),L(_t)?Se("v-if",!0):(g(),z(Pk,{key:1}))],64))}});const Rk=E(Lk,[["__scopeId","data-v-afb4231e"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Hk=Ke({__name:"PrintStyle",setup(e){$(I);function t(n,{slots:i}){if(i.default)return St("style",i.default())}return(n,i)=>(g(),z(t,null,{default:w(()=>[c(" @page { size: "+gt(L(Tn))+"px "+gt(L(wr))+"px; margin: 0px; } ",1)]),_:1}))}}),Fm=E(Hk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Wk=Ke({__name:"Play",setup(e){$(I),vS();const t=Z();function n(a){var l;bu.value||((l=a.target)==null?void 0:l.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?Pn():Ln())}dW(t);const i=N(()=>zy.value||bu.value);sn();const s=sn();return An(()=>import("./DrawingControls-7478b720.js"),[]).then(a=>s.value=a.default),(a,l)=>(g(),ie(Me,null,[L(Ho)?(g(),z(Fm,{key:0})):Se("v-if",!0),o("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:tt(L(xr))},[j(Cm,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:L(Ho)?L(ho).width.value:void 0,scale:L(bs),onPointerdown:n},{default:w(()=>[j(Rk,{context:"slide"})]),controls:w(()=>[o("div",{class:Ve(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[i.value?"opacity-100 right-0":"opacity-0 p-2",L(Ti)?"pointer-events-none":""]])},[j(zk,{class:"m-auto",persist:i.value},null,8,["persist"])],2),!L(Oe).drawings.presenterOnly&&!L(pn)&&s.value?(g(),z(L(s),{key:0,class:"ml-0"})):Se("v-if",!0)]),_:1},8,["style","width","scale"]),Se("v-if",!0)],4),j(Tw)],64))}}),Nk=E(Wk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function jm(e){return typeof e>"u"||e===null}function Dk(e){return typeof e=="object"&&e!==null}function qk(e){return Array.isArray(e)?e:jm(e)?[]:[e]}function Fk(e,t){var n,i,s,a;if(t)for(a=Object.keys(t),n=0,i=a.length;n<i;n+=1)s=a[n],e[s]=t[s];return e}function jk(e,t){var n="",i;for(i=0;i<t;i+=1)n+=e;return n}function Vk(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Bk=jm,Uk=Dk,Jk=qk,Qk=jk,Yk=Vk,Zk=Fk,Tr={isNothing:Bk,isObject:Uk,toArray:Jk,repeat:Qk,isNegativeZero:Yk,extend:Zk};function Vm(e,t){var n="",i=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),i+" "+n):i}function Ki(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Vm(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ki.prototype=Object.create(Error.prototype);Ki.prototype.constructor=Ki;Ki.prototype.toString=function(t){return this.name+": "+Vm(this,t)};var oo=Ki,Gk=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Xk=["scalar","sequence","mapping"];function e2(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(i){t[String(i)]=n})}),t}function t2(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(Gk.indexOf(n)===-1)throw new oo('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=e2(t.styleAliases||null),Xk.indexOf(this.kind)===-1)throw new oo('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var at=t2;function Lu(e,t){var n=[];return e[t].forEach(function(i){var s=n.length;n.forEach(function(a,l){a.tag===i.tag&&a.kind===i.kind&&a.multi===i.multi&&(s=l)}),n[s]=i}),n}function n2(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function i(s){s.multi?(e.multi[s.kind].push(s),e.multi.fallback.push(s)):e[s.kind][s.tag]=e.fallback[s.tag]=s}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(i);return e}function Wl(e){return this.extend(e)}Wl.prototype.extend=function(t){var n=[],i=[];if(t instanceof at)i.push(t);else if(Array.isArray(t))i=i.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(i=i.concat(t.explicit));else throw new oo("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(a){if(!(a instanceof at))throw new oo("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new oo("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new oo("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(a){if(!(a instanceof at))throw new oo("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var s=Object.create(Wl.prototype);return s.implicit=(this.implicit||[]).concat(n),s.explicit=(this.explicit||[]).concat(i),s.compiledImplicit=Lu(s,"implicit"),s.compiledExplicit=Lu(s,"explicit"),s.compiledTypeMap=n2(s.compiledImplicit,s.compiledExplicit),s};var o2=Wl,i2=new at("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),s2=new at("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),a2=new at("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),l2=new o2({explicit:[i2,s2,a2]});function r2(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function c2(){return null}function u2(e){return e===null}var d2=new at("tag:yaml.org,2002:null",{kind:"scalar",resolve:r2,construct:c2,predicate:u2,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function p2(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function m2(e){return e==="true"||e==="True"||e==="TRUE"}function f2(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var h2=new at("tag:yaml.org,2002:bool",{kind:"scalar",resolve:p2,construct:m2,predicate:f2,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function v2(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function _2(e){return 48<=e&&e<=55}function g2(e){return 48<=e&&e<=57}function b2(e){if(e===null)return!1;var t=e.length,n=0,i=!1,s;if(!t)return!1;if(s=e[n],(s==="-"||s==="+")&&(s=e[++n]),s==="0"){if(n+1===t)return!0;if(s=e[++n],s==="b"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(s!=="0"&&s!=="1")return!1;i=!0}return i&&s!=="_"}if(s==="x"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(!v2(e.charCodeAt(n)))return!1;i=!0}return i&&s!=="_"}if(s==="o"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(!_2(e.charCodeAt(n)))return!1;i=!0}return i&&s!=="_"}}if(s==="_")return!1;for(;n<t;n++)if(s=e[n],s!=="_"){if(!g2(e.charCodeAt(n)))return!1;i=!0}return!(!i||s==="_")}function y2(e){var t=e,n=1,i;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),i=t[0],(i==="-"||i==="+")&&(i==="-"&&(n=-1),t=t.slice(1),i=t[0]),t==="0")return 0;if(i==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function S2(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Tr.isNegativeZero(e)}var w2=new at("tag:yaml.org,2002:int",{kind:"scalar",resolve:b2,construct:y2,predicate:S2,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),x2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function k2(e){return!(e===null||!x2.test(e)||e[e.length-1]==="_")}function $2(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var z2=/^[-+]?[0-9]+e/;function I2(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Tr.isNegativeZero(e))return"-0.0";return n=e.toString(10),z2.test(n)?n.replace("e",".e"):n}function C2(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Tr.isNegativeZero(e))}var E2=new at("tag:yaml.org,2002:float",{kind:"scalar",resolve:k2,construct:$2,predicate:C2,represent:I2,defaultStyle:"lowercase"}),O2=l2.extend({implicit:[d2,h2,w2,E2]}),M2=O2,Bm=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Um=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function T2(e){return e===null?!1:Bm.exec(e)!==null||Um.exec(e)!==null}function A2(e){var t,n,i,s,a,l,r,u=0,d=null,p,m,f;if(t=Bm.exec(e),t===null&&(t=Um.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],i=+t[2]-1,s=+t[3],!t[4])return new Date(Date.UTC(n,i,s));if(a=+t[4],l=+t[5],r=+t[6],t[7]){for(u=t[7].slice(0,3);u.length<3;)u+="0";u=+u}return t[9]&&(p=+t[10],m=+(t[11]||0),d=(p*60+m)*6e4,t[9]==="-"&&(d=-d)),f=new Date(Date.UTC(n,i,s,a,l,r,u)),d&&f.setTime(f.getTime()-d),f}function K2(e){return e.toISOString()}var P2=new at("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:T2,construct:A2,instanceOf:Date,represent:K2});function L2(e){return e==="<<"||e===null}var R2=new at("tag:yaml.org,2002:merge",{kind:"scalar",resolve:L2}),Ar=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function H2(e){if(e===null)return!1;var t,n,i=0,s=e.length,a=Ar;for(n=0;n<s;n++)if(t=a.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;i+=6}return i%8===0}function W2(e){var t,n,i=e.replace(/[\r\n=]/g,""),s=i.length,a=Ar,l=0,r=[];for(t=0;t<s;t++)t%4===0&&t&&(r.push(l>>16&255),r.push(l>>8&255),r.push(l&255)),l=l<<6|a.indexOf(i.charAt(t));return n=s%4*6,n===0?(r.push(l>>16&255),r.push(l>>8&255),r.push(l&255)):n===18?(r.push(l>>10&255),r.push(l>>2&255)):n===12&&r.push(l>>4&255),new Uint8Array(r)}function N2(e){var t="",n=0,i,s,a=e.length,l=Ar;for(i=0;i<a;i++)i%3===0&&i&&(t+=l[n>>18&63],t+=l[n>>12&63],t+=l[n>>6&63],t+=l[n&63]),n=(n<<8)+e[i];return s=a%3,s===0?(t+=l[n>>18&63],t+=l[n>>12&63],t+=l[n>>6&63],t+=l[n&63]):s===2?(t+=l[n>>10&63],t+=l[n>>4&63],t+=l[n<<2&63],t+=l[64]):s===1&&(t+=l[n>>2&63],t+=l[n<<4&63],t+=l[64],t+=l[64]),t}function D2(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var q2=new at("tag:yaml.org,2002:binary",{kind:"scalar",resolve:H2,construct:W2,predicate:D2,represent:N2}),F2=Object.prototype.hasOwnProperty,j2=Object.prototype.toString;function V2(e){if(e===null)return!0;var t=[],n,i,s,a,l,r=e;for(n=0,i=r.length;n<i;n+=1){if(s=r[n],l=!1,j2.call(s)!=="[object Object]")return!1;for(a in s)if(F2.call(s,a))if(!l)l=!0;else return!1;if(!l)return!1;if(t.indexOf(a)===-1)t.push(a);else return!1}return!0}function B2(e){return e!==null?e:[]}var U2=new at("tag:yaml.org,2002:omap",{kind:"sequence",resolve:V2,construct:B2}),J2=Object.prototype.toString;function Q2(e){if(e===null)return!0;var t,n,i,s,a,l=e;for(a=new Array(l.length),t=0,n=l.length;t<n;t+=1){if(i=l[t],J2.call(i)!=="[object Object]"||(s=Object.keys(i),s.length!==1))return!1;a[t]=[s[0],i[s[0]]]}return!0}function Y2(e){if(e===null)return[];var t,n,i,s,a,l=e;for(a=new Array(l.length),t=0,n=l.length;t<n;t+=1)i=l[t],s=Object.keys(i),a[t]=[s[0],i[s[0]]];return a}var Z2=new at("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Q2,construct:Y2}),G2=Object.prototype.hasOwnProperty;function X2(e){if(e===null)return!0;var t,n=e;for(t in n)if(G2.call(n,t)&&n[t]!==null)return!1;return!0}function e$(e){return e!==null?e:{}}var t$=new at("tag:yaml.org,2002:set",{kind:"mapping",resolve:X2,construct:e$});M2.extend({implicit:[P2,R2],explicit:[q2,U2,Z2,t$]});function Ru(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var n$=new Array(256),o$=new Array(256);for(var Co=0;Co<256;Co++)n$[Co]=Ru(Co)?1:0,o$[Co]=Ru(Co);function i$(e){return Array.from(new Set(e))}function Hu(...e){let t,n,i;e.length===1?(t=0,i=1,[n]=e):[t,n,i=1]=e;const s=[];let a=t;for(;a<n;)s.push(a),a+=i||1;return s}function Jm(e,t){if(!t||t==="all"||t==="*")return Hu(1,e+1);const n=[];for(const i of t.split(/[,;]/g))if(!i.includes("-"))n.push(+i);else{const[s,a]=i.split("-",2);n.push(...Hu(+s,a?+a+1:e+1))}return i$(n).filter(i=>i<=e).sort((i,s)=>i-s)}function Qm(e){const t=N(()=>e.value.path),n=N(()=>Qe.length-1),i=N(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),s=N(()=>ma(i.value)),a=N(()=>Qe.find(f=>f.path===`${i.value}`)),l=N(()=>{var f,h,v;return(v=(h=(f=a.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:v.id}),r=N(()=>{var f,h;return((h=(f=a.value)==null?void 0:f.meta)==null?void 0:h.layout)||(i.value===1?"cover":"default")}),u=N(()=>Qe.find(f=>f.path===`${Math.min(Qe.length,i.value+1)}`)),d=N(()=>Qe.filter(f=>{var h,v;return(v=(h=f.meta)==null?void 0:h.slide)==null?void 0:v.title}).reduce((f,h)=>(Kr(f,h),f),[])),p=N(()=>Pr(d.value,a.value)),m=N(()=>Lr(p.value));return{route:e,path:t,total:n,currentPage:i,currentPath:s,currentRoute:a,currentSlideId:l,currentLayout:r,nextRoute:u,rawTree:d,treeWithActiveStatuses:p,tree:m,downloadPDF:Dl,next:Pn,nextSlide:Pi,openInEditor:pW,prev:Ln,prevSlide:Li}}function Ym(e,t,n){const i=Z(0);it(()=>{yt.afterEach(async()=>{await it(),i.value+=1})});const s=N(()=>{var u,d;return i.value,((d=(u=t.value)==null?void 0:u.meta)==null?void 0:d.__clicksElements)||[]}),a=N(()=>{var u,d;return+(((d=(u=t.value)==null?void 0:u.meta)==null?void 0:d.clicks)??s.value.length)}),l=N(()=>n.value<Qe.length-1||e.value<a.value),r=N(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:s,clicksTotal:a,hasNext:l,hasPrev:r}}const s$=["id"],a$=Ke({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,i=Ct(n,"clicksElements",t),s=N(()=>({height:`${wr}px`,width:`${Tn}px`})),a=sn();An(()=>Promise.resolve().then(()=>$S),void 0).then(d=>a.value=d.default);const l=N(()=>n.clicks),r=Ym(l,n.nav.currentRoute,n.nav.currentPage),u=N(()=>`${n.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return zt(I,je({nav:{...n.nav,...r},configs:Oe,themeConfigs:N(()=>Oe.themeConfig)})),(d,p)=>{var m;return g(),ie("div",{id:u.value,class:"print-slide-container",style:tt(s.value)},[j(L(qm)),j(L(Or),{is:(m=d.route)==null?void 0:m.component,"clicks-elements":L(i),"onUpdate:clicksElements":p[0]||(p[0]=f=>Te(i)?i.value=f:null),clicks:l.value,"clicks-disabled":!1,class:Ve(L(Er)(d.route)),route:d.route},null,8,["is","clicks-elements","clicks","class","route"]),a.value?(g(),z(L(a),{key:0,page:+d.route.path},null,8,["page"])):Se("v-if",!0),j(L(Dm))],12,s$)}}}),Wu=E(a$,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),l$=Ke({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var a;const t=e;$(I);const n=Z(((a=t.route.meta)==null?void 0:a.__clicksElements)||[]),i=N(()=>t.route),s=Qm(i);return(l,r)=>(g(),ie(Me,null,[j(Wu,{"clicks-elements":n.value,"onUpdate:clicksElements":r[0]||(r[0]=u=>n.value=u),clicks:0,nav:L(s),route:i.value},null,8,["clicks-elements","nav","route"]),L(gi)?Se("v-if",!0):(g(!0),ie(Me,{key:0},No(n.value.length,u=>(g(),z(Wu,{key:u,clicks:u,nav:L(s),route:i.value},null,8,["clicks","nav","route"]))),128))],64))}}),r$=E(l$,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),c$={id:"print-content"},u$=Ke({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;$(I);const n=N(()=>t.width),i=N(()=>t.width/Mn),s=N(()=>n.value/i.value),a=N(()=>s.value<Mn?n.value/Tn:i.value*Mn/Tn);let l=Qe.slice(0,-1);Ht.value.query.range&&(l=Jm(l.length,Ht.value.query.range).map(d=>l[d-1]));const r=N(()=>({"select-none":!Oe.selectable,"slidev-code-line-numbers":Oe.lineNumbers}));return zt(Fp,a),(u,d)=>(g(),ie("div",{id:"print-container",class:Ve(r.value)},[o("div",c$,[(g(!0),ie(Me,null,No(L(l),p=>(g(),z(r$,{key:p.path,route:p},null,8,["route"]))),128))]),Bt(u.$slots,"controls")],2))}});const d$=E(u$,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),p$=Ke({__name:"Print",setup(e){return $(I),yo(()=>{Ho?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(g(),ie(Me,null,[L(Ho)?(g(),z(Fm,{key:0})):Se("v-if",!0),o("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tt(L(xr))},[j(d$,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:L(ho).width.value},null,8,["style","width"])],4)],64))}});const m$=E(p$,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const f$={class:"slidev-layout end"},h$={__name:"end",setup(e){return $(I),(t,n)=>(g(),ie("div",f$,[Bt(t.$slots,"default",{},()=>[c("END")],!0)]))}},v$=E(h$,[["__scopeId","data-v-e532b98d"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function Nu(e){return e.startsWith("/")?"/4/svelte/"+e.slice(1):e}function _$(e,t=!1){const n=e&&["#","rgb","hsl"].some(s=>e.indexOf(s)===0),i={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Nu(e)})`:`url("${Nu(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return i.background||delete i.background,i}const g$={class:"my-auto w-full"},b$=Ke({__name:"cover",props:{background:{default:""}},setup(e){const t=e;$(I);const n=N(()=>_$(t.background,!0));return(i,s)=>(g(),ie("div",{class:"slidev-layout cover",style:tt(n.value)},[o("div",g$,[Bt(i.$slots,"default")])],4))}}),y$=E(b$,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),S$=o("h1",null,"Svelte e SvelteKit",-1),w$=o("p",null,"CYBERNETICALLY ENHANCED WEB APPS",-1),x$={class:"pt-12"},k$={class:"px-2 py-1"},$$={__name:"1",setup(e){const t={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",as:"2023/2024",version:"1.2.0"};return $(I),(n,i)=>{const s=Nm;return g(),z(y$,M(O(t)),{default:w(()=>[Se(` https://reteinformaticalavoro.it/blog/framework-cosa-sono-e-quali-dominano-le-classifiche/#:~:text=In%20informatica%2C%20un%20framework%20%C3%A8,in%20modo%20semplice%20e%20veloce.

https://www.okupter.com/blog/svelte-vs-sveltekit-the-difference

https://www.okupter.com/blog/sveltekit-full-stack-framework `),S$,w$,o("div",x$,[o("span",k$,[c(" Premi spazio o "),j(s,{class:"inline"}),c(" per la prossima slide ")])])]),_:1},16)}}},z$=E($$,[["__file","/@slidev/slides/1.md"]]),I$={class:"slidev-layout default"},C$={__name:"default",setup(e){return $(I),(t,n)=>(g(),ie("div",I$,[Bt(t.$slots,"default")]))}},T=E(C$,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),E$=o("h1",null,"Introduzione",-1),O$=o("p",null,"Vanilla Software",-1),M$=o("ul",null,[o("li",null,[c("Un software "),o("code",null,"Vanilla"),c(" è un programma per computer (e per altri sistemi informatici come hardware o algoritmi) che non viene alterato rispetto alla propria forma originale.")]),o("li",null,"Il termine deriva dal tradizionale gusto di gelato, la vaniglia."),o("li",null,[c("In altre parole con il termine "),o("strong",null,"Vanilla"),c(" si intende un linguaggio, un kernel, un programma non modificato ma utilizzato nella sua forma base")]),o("li",null,"Ciò si applica anche ai linguaggi di programmazione")],-1),T$={__name:"2",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[E$,O$,M$]),_:1},16))}},A$=E(T$,[["__file","/@slidev/slides/2.md"]]),K$="/4/svelte/assets/svelte_000-21a7ddac.png",P$=o("h1",null,"Introduzione",-1),L$=o("p",null,"Vanilla Software",-1),R$=o("div",{style:{float:"left",width:"50%"}},[o("ul",null,[o("li",null,"Vanilla JavaScript (o VanillaJS) si riferisce all’uso di JavaScript puro, senza alcun componente aggiuntivo come librerie o framework."),o("li",null,"È una specie di battuta tra informatici per indicare le potenzialità attuali del puro e semplice JavaScript."),o("li",null,"Agli albori del Web era normale programmare in vanillaJS")])],-1),H$=o("img",{src:K$,class:"mx-auto",width:"400"},null,-1),W$={__name:"3",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[P$,L$,R$,H$]),_:1},16))}},N$=E(W$,[["__file","/@slidev/slides/3.md"]]),D$="/4/svelte/assets/svelte_001-e8d6b419.png",q$=o("h1",null,"Introduzione",-1),F$=o("p",null,"Librerie JS",-1),j$=o("ul",null,[o("li",null,"Una libreria NON è un’unità eseguibile indipendentemente, ma un modulo aggiuntivo richiesto da un programma."),o("li",null,"In altre parole, le librerie sono raccolte di classi e funzioni, motivo per cui a volte vengono anche chiamate librerie di componenti o di classi."),o("li",null,"Il programma principale utilizza una o più funzioni, messe a disposizione dalla libreria.")],-1),V$=o("img",{src:D$,class:"mx-auto",style:{"margin-top":"2rem"},width:"500"},null,-1),B$={__name:"4",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[q$,F$,j$,V$]),_:1},16))}},U$=E(B$,[["__file","/@slidev/slides/4.md"]]),J$=o("h1",null,"Introduzione",-1),Q$=o("p",null,"Librerie JS",-1),Y$=o("ul",null,[o("li",null,"Una libreria JavaScript è una libreria di codice JavaScript pre-scritto che consente uno sviluppo più semplice di applicazioni basate su JavaScript"),o("li",null,"Ci sono centinaia di librerie JS per qualsiasi funzionalità possa venire in mente allo sviluppatore"),o("li",null,[c("Una delle più note librerie che ha dominato il web per molti anni si chiama "),o("code",null,"jQuery")]),o("li",null,[o("strong",null,"jQuery"),c(" è una libreria JavaScript veloce, piccola e ricca di funzionalità.")]),o("li",null,"Rende funzionalità complesse come l’attraversamento e la manipolazione di documenti HTML, la gestione degli eventi, l’animazione e Ajax molto più semplici che in vanillaJS"),o("li",null,"Con una combinazione di versatilità ed estensibilità, jQuery ha cambiato il modo in cui milioni di persone scrivono JavaScript.")],-1),Z$={__name:"5",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[J$,Q$,Y$]),_:1},16))}},G$=E(Z$,[["__file","/@slidev/slides/5.md"]]),X$=o("h1",null,"Introduzione",-1),ez=o("p",null,"Framework JS",-1),tz=o("ul",null,[o("li",null,"Man mano che l’importanza dello sviluppo Web cresceva, e con essa l’importanza di JS, l’uso di VanillaJS o di semplici librerie non era più sufficiente"),o("li",null,[c("Pertanto hanno iniziato a proliferare una moltitudine di "),o("code",null,"Framework JS"),c(" che offrono paradigmi differenti e adatti a risolvere la maggioranza delle problematiche dello sviluppo web")])],-1),nz=o("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px",margin:"10px"}},[o("p",null,[c("In informatica, "),o("strong",null,"un framework"),c(" è un sistema che consente di estendere le funzionalità del linguaggio di programmazione su cui è basato, fornendo allo sviluppatore una struttura coerente ed efficace al fine di effettuare azioni e comandi in modo semplice e veloce")])],-1),oz=o("ul",null,[o("li",null,[o("strong",null,"Un framework"),c(' è un tipo speciale di libreria che non contiene funzioni "finite" come una normale libreria.')]),o("li",null,"In sostanza, si può definire un framework come un insieme di funzioni e tool già “pronti all’uso”, ovvero che si possono utilizzare senza doverli progettare da zero ogni volta.")],-1),iz={__name:"6",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[X$,ez,tz,nz,oz]),_:1},16))}},sz=E(iz,[["__file","/@slidev/slides/6.md"]]),az=o("h1",null,"Introduzione",-1),lz=o("p",null,"Framework JS",-1),rz=o("ul",null,[o("li",null,"I framework sono piuttosto impalcature/scheletri/template di programmi che forniscono il progetto, le linee guida e l’organizzazione del codice ma non l’unità finita."),o("li",null,"Il framework, quindi, fornisce il progetto e il framework di base e mostra anche ciò che è ancora necessario al programmatore in termini di personalizzazione."),o("li",null,"Il framework fornisce il flusso di un’applicazione software e comunica allo sviluppatore ciò di cui ha bisogno e chiama il codice fornito dallo sviluppatore come richiesto")],-1),cz={__name:"7",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[az,lz,rz]),_:1},16))}},uz=E(cz,[["__file","/@slidev/slides/7.md"]]),dz="/4/svelte/assets/svelte_004-24e4fca1.png",pz=o("h1",null,"Introduzione",-1),mz=o("p",null,"Framework JS",-1),fz=o("img",{src:dz,class:"mx-auto",style:{"margin-top":"0rem"},width:"800"},null,-1),hz={__name:"8",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[pz,mz,fz]),_:1},16))}},vz=E(hz,[["__file","/@slidev/slides/8.md"]]),_z="/4/svelte/assets/svelte_002-3d42938e.png",gz=o("h1",null,"Introduzione",-1),bz=o("p",null,"Framework JS",-1),yz=o("ul",null,[o("li",null,[c("I principali "),o("a",{href:"https://en.wikipedia.org/wiki/Software_framework",target:"_blank",rel:"noopener"},"framework"),c(" degli ultimi anni sono")])],-1),Sz=o("img",{src:_z,class:"mx-auto",style:{"margin-top":"0rem"},width:"600"},null,-1),wz={__name:"9",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[gz,bz,yz,Sz]),_:1},16))}},xz=E(wz,[["__file","/@slidev/slides/9.md"]]),kz=o("h1",null,"Introduzione",-1),$z=o("p",null,"Framework JS",-1),zz=o("ul",null,[o("li",null,"L’uso di un frameowrk non è indispensabile: si tratta più che altro di uno dei tanti strumenti che lo sviluppatore ha a sua disposizione per programmare meglio e più velocemente."),o("li",null,"Proprio per queste sue caratteristiche, sono diventati sempre più fondamentali per lo sviluppo di siti web e app."),o("li",null,[c("I framework consentono di: "),o("ul",null,[o("li",null,"ottimizzare tempi, costi e benefici;"),o("li",null,"evitare al programmatore di riscrivere codice già scritto in precedenza per compiti simili;"),o("li",null,"organizzare e trovare rapidamente i file necessari;"),o("li",null,"concentrarsi sul problema da risolvere, senza dover implementare funzionalità che qualcun altro ha già provveduto a creare.")])])],-1),Iz={__name:"10",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[kz,$z,zz]),_:1},16))}},Cz=E(Iz,[["__file","/@slidev/slides/10.md"]]),Ez=o("h1",null,"Web Components",-1),Oz=o("p",null,"OOP per il Web",-1),Mz=o("ul",null,[o("li",null,[c("Lo sviluppo Web moderno è incentrato sul concetto di "),o("code",null,"componente")])],-1),Tz=o("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px",margin:"10px"}},[o("p",null,[o("em",null,"Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps."),c(" (source MDN)")])],-1),Az=o("ul",null,[o("li",null,"Un componente è un elemento atomico e auto sufficiente, di un’applicazione Web."),o("li",null,'In altre parole un componente è un "mattoncino", ben definito, che viene utilizzato all’interno di un’applicazione più ampia'),o("li",null,"Da ciò ne consegue che una moderna applicazione web è composta da uno o più componenti indipendenti che interagiscono tra loro per fornire il layout e la funzionalità desiderata")],-1),Kz={__name:"11",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[Ez,Oz,Mz,Tz,Az]),_:1},16))}},Pz=E(Kz,[["__file","/@slidev/slides/11.md"]]),Lz="/4/svelte/assets/svelte_03-b6c35794.png",Rz=o("h1",null,"Web Components",-1),Hz=o("p",null,"OOP per il Web",-1),Wz=o("ul",null,[o("li",null,"Un elemento di input può essere un componente."),o("li",null,"Un form può essere un componente."),o("li",null,"Una pagina intera può essere è un componente.")],-1),Nz=o("img",{src:Lz,style:{position:"relative",left:"450px",top:"-150px"},width:"500"},null,-1),Dz={__name:"12",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[Rz,Hz,Wz,Nz]),_:1},16))}},qz=E(Dz,[["__file","/@slidev/slides/12.md"]]),Fz="/4/svelte/assets/svelte_006-2096526e.png",jz=o("h1",null,"Web Components",-1),Vz=o("p",null,"OOP per il Web",-1),Bz=o("img",{src:Fz,class:"mx-auto",width:"600"},null,-1),Uz={__name:"13",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[jz,Vz,Bz]),_:1},16))}},Jz=E(Uz,[["__file","/@slidev/slides/13.md"]]),Qz=o("h1",null,"SvelteKit",-1),Yz=o("p",null,"Svelte ~ SvelteKit",-1),Zz=o("ul",null,[o("li",null,[c("Svelte è un framework "),o("strong",null,"che propone un approccio radicalmente nuovo alla creazione di applicazioni Web"),c(".")]),o("li",null,"Svelte è un modo per scrivere componenti dell’interfaccia utente, come una barra di navigazione, una sezione dei commenti o un modulo di contatto"),o("li",null,"Se hai già esperienza con React, Vue, Angular o altri framework frontend rimarrai piacevolmente sorpreso da Svelte."),o("li",null,"Lavorando con Svelte tutto sembra molto più simile al JavaScript-vanilla rispetto che a lavorare con altri framework."),o("li",null,"In generale la maggior parte delle cose che sono complicate con altri framework sono molto semplici e leggeri con Svelte.")],-1),Gz=o("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px"}},[c(" Svelte è stato recentemente votato come il "),o("h2",null,"framework web più amato dagli sviluppatori")],-1),Xz=o("p",null,[o("a",{href:"https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks",target:"_blank",rel:"noopener"},"https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks")],-1),eI={__name:"14",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[Qz,Yz,Zz,Gz,Xz]),_:1},16))}},tI=E(eI,[["__file","/@slidev/slides/14.md"]]),nI="/4/svelte/assets/svelte_00-c251d652.png",oI=o("h1",null,"SvelteKit",-1),iI=o("p",null,"Introduzione",-1),sI=o("img",{src:nI,class:"mx-auto",width:"750"},null,-1),aI={__name:"15",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[oI,iI,sI]),_:1},16))}},lI=E(aI,[["__file","/@slidev/slides/15.md"]]),rI=o("h1",null,"SvelteKit",-1),cI=o("p",null,"Svelte vs Others",-1),uI=o("ul",null,[o("li",null,"Mentre i framework tradizionali come React e Vue fanno la maggior parte del loro lavoro nel browser, Svelte sposta il lavoro in una fase di compilazione che si verifica quando crei la tua app, in modo da non dover far scaricare l’intero framework a tutti i tuoi visitatori del sito."),o("li",null,"Di conseguenza, la fruizione dell’esperienza è più fluida, consuma meno larghezza di banda e tutto risulta più veloce e leggero."),o("li",null,"Al momento della distribuzione, Svelte scompare e tutto ciò che ottieni è puro JavaScript Vanilla (molto veloce!)."),o("li",null,[c("In altre parole "),o("code",null,"Svelte è un compilatore"),c(" che trasforma il codice della tua applicazione Web in puro JavaScript, raggiungendo così massime prestazioni")])],-1),dI={__name:"16",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[rI,cI,uI]),_:1},16))}},pI=E(dI,[["__file","/@slidev/slides/16.md"]]),mI=o("h1",null,"SvelteKit",-1),fI=o("p",null,"Svelte vs Others",-1),hI=o("ul",null,[o("li",null,[c("Molti framework Web utilizzano il concetto di "),o("code",null,"Virtual DOM")]),o("li",null,[c("Il Virtual DOM "),o("code",null,"VDOM"),c(" è una rappresentazione ideale della UI di una pagina che è mantenuta in memoria")]),o("li",null,"Il VDOM è sincronizzato periodicamente con il DOM reale da una libreria (Reacts, Vue, Angular)"),o("li",null,[c("Svelte, in modo innovativo, anzichè utilizzare la tecnica del "),o("code",null,"virtual DOM diffing"),c(", genera codice JS che aggiorna direttamente il DOM quando cambia lo stato della tua app.")])],-1),vI=o("br",null,null,-1),_I=o("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px"}}," La principale differenza tra Svelte e gli altri framework Web è che Svelte è un compilatore che converte la tua applicazione Web in JavaScript-vanilla durante la fase di build. Al contrario gli altri framework usano un virtual DOM interpretato dall'applicazione Web durante il runtime sul browser. ",-1),gI={__name:"17",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[mI,fI,hI,vI,_I]),_:1},16))}},bI=E(gI,[["__file","/@slidev/slides/17.md"]]),yI=o("h1",null,"SvelteKit",-1),SI=o("p",null,"Svelte vs Others",-1),wI=o("ul",null,[o("li",null,[c("React utilizza un concetto noto come Virtual DOM (VDOM), in cui una rappresentazione virtuale dell’interfaccia utente viene mantenuta in memoria e sincronizzata con il DOM reale attraverso un processo chiamato "),o("strong",null,"riconciliazione"),c(".")]),o("li",null,"Il processo di riconciliazione troverà la differenza (diffing) tra il Virtual DOM (un oggetto in memoria, dove inviamo gli ultimi aggiornamenti all’interfaccia utente) e il vero DOM (DOM che contiene l’interfaccia utente precedentemente renderizzata)."),o("li",null,"Utilizzando specifici algoritmi, il framework decide come aggiornare l’interfaccia utente."),o("li",null,"Ovviamente questo processo, non è efficiente e veloce"),o("li",null,"Per raggiungere questo obiettivo, React introduce un overhead (la libreria), che verrà eseguito nel motore JS del browser per monitorare e aggiornare il DOM in base alle varie interazioni dell’utente.")],-1),xI={__name:"18",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[yI,SI,wI]),_:1},16))}},kI=E(xI,[["__file","/@slidev/slides/18.md"]]),$I="/4/svelte/assets/svelte_01-09f90fce.png",zI=o("h1",null,"SvelteKit",-1),II=o("p",null,"Svelte vs Others",-1),CI=o("img",{src:$I,class:"mx-auto w-160"},null,-1),EI={__name:"19",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[zI,II,CI]),_:1},16))}},OI=E(EI,[["__file","/@slidev/slides/19.md"]]),MI="/4/svelte/assets/svelte_003-ae5236bd.png",TI=o("h1",null,"SvelteKit",-1),AI=o("p",null,"Svelte vs Others",-1),KI=o("ul",null,[o("li",null,"Svelte è solamente un compilatore, che converte la tua applicazione in codice JavaScript durante la fase di sviluppo e build."),o("li",null,"Ciò significa che non inietterà alcun codice aggiuntivo (no librerie aggiuntive) da eseguire nel browser quando l’applicazione è in esecuzione per aggiornare il DOM."),o("li",null,"Questo approccio è generalmente più veloce dell’approccio basato su Virtual DOM.")],-1),PI=o("img",{src:MI,class:"mx-auto",width:"480",style:{"margin-top":"20px"}},null,-1),LI={__name:"20",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[TI,AI,KI,PI]),_:1},16))}},RI=E(LI,[["__file","/@slidev/slides/20.md"]]),HI=o("h1",null,"SvelteKit",-1),WI=o("p",null,"Svelte vs Others",-1),NI=o("p",null,[o("strong",null,"PRO")],-1),DI=o("ul",null,[o("li",null,"Tempo di compilazione velocissimo rispetto a React o altri framework e dimensione del pacchetto generato è più piccola rispetto a React"),o("li",null,"Tempi di caricamento e rendering della Web app più veloci rispetto a React o altri framework."),o("li",null,"Più facile da capire rispetto a altri framework poiché Svelte è semplice JavaScript, HTML e CSS."),o("li",null,"Permette di scrivere meno codice rispetto ad altri framework"),o("li",null,[c("Nativamente "),o("strong",null,"reactive"),c(" e perfettamente adatto alle moderne Web app")])],-1),qI=o("p",null,[o("strong",null,"CONTRO")],-1),FI=o("ul",null,[o("li",null,"Svelte è un framework ancora nuovo e giovane con un supporto limitato da parte della community, quindi non ha il supporto per un’ampia gamma di plugin e integrazioni come per esempio React"),o("li",null,"Alcuni sviluppatori potrebbero non preferire l’uso di sintassi speciali come #if e #each all’interno dei loro modelli e preferirebbero invece utilizzare JavaScript puro, come consentito da React.")],-1),jI={__name:"21",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[HI,WI,NI,DI,qI,FI]),_:1},16))}},VI=E(jI,[["__file","/@slidev/slides/21.md"]]),BI=o("h1",null,"SvelteKit",-1),UI=o("p",null,"Fullstack Framework",-1),JI=o("ul",null,[o("li",null,[o("code",null,"SvelteKit"),c(" è un framework per lo sviluppo rapido di applicazioni Web robuste e performanti che utilizza Svelte.")]),o("li",null,"Se provieni da React, SvelteKit è simile a Next. Se vieni da Vue, SvelteKit è simile a Nuxt"),o("li",null,"Sveltekit è il framework che permette agli sviluppatori di creare e gestire la user experience della loro applicazione."),o("li",null,"Fornisce un ambiente unificato per lavorare con componenti, dati, routing, back-end, front-end e altro ancora."),o("li",null,[c("SvelteKit e Svelte sono "),o("strong",null,"totalmente allineati"),c(" al paradigma e modello di sviluppo per componenti caratteristico del web moderno.")])],-1),QI={__name:"22",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[BI,UI,JI]),_:1},16))}},YI=E(QI,[["__file","/@slidev/slides/22.md"]]),ZI=o("h1",null,"SvelteKit",-1),GI=o("p",null,"Fullstack Framework",-1),XI=o("ul",null,[o("li",null,[c("SvelteKit è un framework per app che risolve i difficili molti problemi comunini ad applicazioni pronte per la produzione: "),o("ul",null,[o("li",null,"Routing (navigazione tra le pagine)"),o("li",null,"Server-side rendering (supporto al back-end)"),o("li",null,"Data fetching ()"),o("li",null,"Service workers"),o("li",null,"Supporto TypeScript (la versione di JavaScript con steroidi)"),o("li",null,"Prerendering (per applicazioni statiche. vedi blog profmancusoa)"),o("li",null,"Single-page apps (SPA: approccio moderno che sostituisce lo sviluppo desktop)"),o("li",null,"Supporto per diversi hosting providers molto comuni su Internet (vercel, netlify, …)")])])],-1),eC={__name:"23",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[ZI,GI,XI]),_:1},16))}},tC=E(eC,[["__file","/@slidev/slides/23.md"]]),nC=o("h1",null,"SvelteKit",-1),oC=o("p",null,"Svelte vs SvelteKit",-1),iC=o("p",null,[o("strong",null,"SVELTE")],-1),sC=o("ul",null,[o("li",null,"Un linguaggio di programmazione che si basa su HTML, CSS e JS"),o("li",null,[c("Svelte permette la creazione di "),o("strong",null,"componenti"),c(" web.")]),o("li",null,[c("Un componente è un blocco di codice autonomo riutilizzabile che incapsula HTML, CSS e JavaScript scritti in un file "),o("strong",null,".svelte"),c(".")])],-1),aC=o("p",null,[o("strong",null,"SVELTE KIT")],-1),lC=o("ul",null,[o("li",null,"Sveltekit è il framework, basato su Svelte, che permette agli sviluppatori di creare e gestire applicazioni full stack che combinano insieme componenti Svelte."),o("li",null,"Fornisce un ambiente unificato per lavorare con componenti, dati, routing e altro ancora."),o("li",null,[c("Sveltekit è un "),o("code",null,"full stack framework"),c(" ricco di funzionalità e permette lo sviluppo di un applicazione web completa di back-end e front-end")])],-1),rC={__name:"24",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[nC,oC,iC,sC,aC,lC]),_:1},16))}},cC=E(rC,[["__file","/@slidev/slides/24.md"]]),uC="/4/svelte/assets/svelte_005-e897ef89.png",dC=o("h1",null,"SvelteKit",-1),pC=o("p",null,"Web App Architecture",-1),mC=o("img",{src:uC,class:"mx-auto",width:"900"},null,-1),fC={__name:"25",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[dC,pC,mC]),_:1},16))}},hC=E(fC,[["__file","/@slidev/slides/25.md"]]),vC=o("h1",null,"SvelteKit",-1),_C=o("p",null,"Svelte Components",-1),gC=o("ul",null,[o("li",null,"Un componente web è assimilabile al concetto di Oggetto nella programmazione OOP"),o("li",null,"Come un oggetto incapusala dati e metodi, un componente Web incapsula tutto ciò che è necessario per eseguire il rendering della sua interfaccia utente e per gestire la sua logica di funzionamento."),o("li",null,[c("Ogni componente Svelte è dichiarato in un file "),o("code",null,".svelte"),c(", che contiene: "),o("ul",null,[o("li",null,"il contenuto (markup) in HTML"),o("li",null,"la presentazione o stile (CSS)"),o("li",null,"il comportamento (JavaScript)")])])],-1),bC=o("br",null,null,-1),yC=o("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"25px"}}," Questo raggruppamento (senza un ordine particolare) permette un modo efficiente di definire una parte dell'interfaccia utente perché non è necessario cercare gli elementi che influiscono sullo stesso elemento in vari file. ",-1),SC={__name:"26",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[vC,_C,gC,bC,yC]),_:1},16))}},wC=E(SC,[["__file","/@slidev/slides/26.md"]]),xC="/4/svelte/assets/svelte_007-e6e59c17.png",kC=o("h1",null,"SvelteKit",-1),$C=o("p",null,"Svelte Components",-1),zC=o("ul",null,[o("li",null,"Ecco la struttura di un componente Svelte")],-1),IC=o("br",null,null,-1),CC=o("img",{src:xC,class:"mx-auto",width:"700"},null,-1),EC={__name:"27",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[kC,$C,zC,IC,CC]),_:1},16))}},OC=E(EC,[["__file","/@slidev/slides/27.md"]]),MC="/4/svelte/assets/svelte_008-4c504ad0.png",TC=o("h1",null,"SvelteKit",-1),AC=o("p",null,"Esempio di componente Svelte",-1),KC=o("img",{src:MC,class:"mx-auto",width:"350"},null,-1),PC={__name:"28",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[TC,AC,KC]),_:1},16))}},LC=E(PC,[["__file","/@slidev/slides/28.md"]]),RC="/4/svelte/assets/svelte_04-397495f6.png",HC=o("h1",null,"SvelteKit",-1),WC=o("p",null,"Svelte Components",-1),NC=o("p",null,[o("br"),o("br")],-1),DC=o("img",{src:RC,class:"mx-auto"},null,-1),qC={__name:"29",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[HC,WC,NC,DC]),_:1},16))}},FC=E(qC,[["__file","/@slidev/slides/29.md"]]),jC=o("h1",null,"SvelteKit",-1),VC=o("p",null,"Svelte Components",-1),BC=o("ul",null,[o("li",null,"Questo componente, per quanto semplice, contiene tutti gli elementi di un componente web (HTML/CSS/JS)"),o("li",null,[c("Nel tag "),o("code",null,"<script>"),c(" è presente il codice JS di gestione del componente")]),o("li",null,[c("Il markup HTML non è inserito in un tag particolare e pertanto tutto ciò che non è parte del tag "),o("code",null,"<script>"),c(" e "),o("code",null,"<style>"),c(" è cosiderato contenuto del componente.")]),o("li",null,[c("Il tag "),o("code",null,"<style>"),c(" definisce il CSS del componente")])],-1),UC=o("br",null,null,-1),JC=o("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"40px"}}," Sia il codice JS e lo stile CSS sono confinati solo all'interno di questo componente e non possono influire o essere influenzati da altri componenti parte dell'applicazione complessiva. ",-1),QC=o("br",null,null,-1),YC=o("ul",null,[o("li",null,"Se un altro componente ha un tag h1, lo stile non sarà modificato."),o("li",null,"Questo è molto utile quando riutilizzi componenti che hai già scritto per altre applicazioni o quando includi librerie Open Source pubblicate da altre persone.")],-1),ZC={__name:"30",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[jC,VC,BC,UC,JC,QC,YC]),_:1},16))}},GC=E(ZC,[["__file","/@slidev/slides/30.md"]]),XC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},eE=o("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),tE=[eE];function nE(e,t){return g(),ie("svg",XC,tE)}const oE={name:"ph-clipboard",render:nE},iE={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},sE=o("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),aE=[sE];function lE(e,t){return g(),ie("svg",iE,aE)}const rE={name:"ph-check-circle",render:lE},cE=["title"],uE=Ke({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;$(I);const n=$(mi),i=$(eo),s=$(fi);function a(m=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",v=h.length;for(let S=0;S<m;S++)f.push(h.charAt(Math.floor(Math.random()*v)));return f.join("")}const l=Z(),r=wt();bn(()=>{const m=t.at==null?i==null?void 0:i.value.length:t.at,f=N(()=>s!=null&&s.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(m||0)),t.ranges.length-1)),h=N(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(s!=null&&s.value)){const v=a(),S=h1(t.ranges.length-1).map(x=>v+x);i!=null&&i.value&&(i.value.push(...S),ji(()=>S.forEach(x=>bl(i.value,x)),r))}yo(()=>{if(!l.value)return;const S=l.value.querySelector(".shiki-dark")?Array.from(l.value.querySelectorAll(".shiki")):[l.value];for(const x of S){const k=Array.from(x.querySelectorAll(".line")),C=Jm(k.length,h.value);if(k.forEach((b,P)=>{const A=C.includes(P+1);b.classList.toggle(Yn,!0),b.classList.toggle("highlighted",A),b.classList.toggle("dishonored",!A)}),t.maxHeight){const b=Array.from(x.querySelectorAll(".line.highlighted"));b.reduce((A,R)=>R.offsetHeight+A,0)>l.value.offsetHeight?b[0].scrollIntoView({behavior:"smooth",block:"start"}):b.length>0&&b[Math.round((b.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:d}=h0();function p(){var f,h;const m=(h=(f=l.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;m&&d(m)}return(m,f)=>{const h=rE,v=oE;return g(),ie("div",{ref_key:"el",ref:l,class:"slidev-code-wrapper relative group",style:tt({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Bt(m.$slots,"default"),L(Oe).codeCopy?(g(),ie("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:L(u)?"Copied":"Copy",onClick:f[0]||(f[0]=S=>p())},[L(u)?(g(),z(h,{key:0,class:"p-2 w-8 h-8"})):(g(),z(v,{key:1,class:"p-2 w-8 h-8"}))],8,cE)):Se("v-if",!0)],4)}}}),Ie=E(uE,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),dE=o("h1",null,"SvelteKit",-1),pE=o("p",null,"Svelte Components",-1),mE=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("h1")]),o("span",{class:"token punctuation"},">")]),c("My name is John Doe!"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("h1")]),o("span",{class:"token punctuation"},">")])])])],-1),fE=o("ul",null,[o("li",null,"Questo è un componente Svelte valido"),o("li",null,"Include solo la parte di contenuto"),o("li",null,"Non ha nessuno stuile e nessuna logica di controllo")],-1),hE={__name:"31",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[dE,pE,j(s,me({},{ranges:[""]}),{default:w(()=>[mE]),_:1},16),fE]),_:1},16)}}},vE=E(hE,[["__file","/@slidev/slides/31.md"]]),_E=o("h1",null,"SvelteKit",-1),gE=o("p",null,"Svelte Components",-1),bE=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("h1")]),o("span",{class:"token punctuation"},">")]),c("My name is John Doe!"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("h1")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("style")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"	h1 {"),c(`
`),o("span",{class:"line"},"		width: 30%;"),c(`
`),o("span",{class:"line"},"		border: 20px solid green;"),c(`
`),o("span",{class:"line"},"		border-radius: 20px;"),c(`
`),o("span",{class:"line"},"		color: red;"),c(`
`),o("span",{class:"line"},"		text-align: center;"),c(`
`),o("span",{class:"line"},"		margin: 30px auto;"),c(`
`),o("span",{class:"line"},"		padding: 20px;"),c(`
`),o("span",{class:"line"},"	}"),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("style")]),o("span",{class:"token punctuation"},">")])])])],-1),yE=o("ul",null,[o("li",null,"Questo è un componente Svelte valido"),o("li",null,"Include la parte di contenuto e di stile")],-1),SE={__name:"32",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[_E,gE,j(s,me({},{ranges:[""]}),{default:w(()=>[bE]),_:1},16),yE]),_:1},16)}}},wE=E(SE,[["__file","/@slidev/slides/32.md"]]),xE=o("h1",null,"SvelteKit",-1),kE=o("p",null,"Svelte Components",-1),$E=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("script")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"	let name = 'John Doe';"),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("script")]),o("span",{class:"token punctuation"},">")])])])],-1),zE=o("ul",null,[o("li",null,"Questo è un componente Svelte valido."),o("li",null,"Non ha nessuno contenuto e non verrà visualizzato."),o("li",null,"Anche se apparentemente non ha senso, lo ha in quanto posso avere componenti che svolgono solo funzioni utilizzate da altri componenti.")],-1),IE=o("p",null,"Esempio:",-1),CE=o("ul",null,[o("li",null,"un componente che fornisce accesso ad un DB nosql non ha nessuna parte di UI, ma è di grande utilità all’interno della mia applicazione.")],-1),EE={__name:"33",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[xE,kE,j(s,me({},{ranges:[""]}),{default:w(()=>[$E]),_:1},16),zE,IE,CE]),_:1},16)}}},OE=E(EE,[["__file","/@slidev/slides/33.md"]]),ME=o("h1",null,"SvelteKit",-1),TE=o("p",null,"Hello World",-1),AE=o("ul",null,[o("li",null,[o("p",null,"Vediamo i semplici passi per creare un progetto base SvelteKit")]),o("li",null,[o("p",null,"Utilizzeremo il progetto base per provare a analizzare e comprendere le principali carattristiche:"),o("ul",null,[o("li",null,"del linguaggio Svelte e delle principali funzionalità"),o("li",null,"dello sviluppo per componenti"),o("li",null,"delle funzioni più importanti di SvelteKit")])]),o("li",null,[o("p",null,"Di seguito i link alla documentazione e tutoria di Svelte e SvelteKit"),o("ul",null,[o("li",null,[o("a",{href:"https://svelte.dev/tutorial/basics",target:"_blank",rel:"noopener"},"Svelte tutorial")]),o("li",null,[o("a",{href:"https://learn.svelte.dev/tutorial/welcome-to-svelte",target:"_blank",rel:"noopener"},"Tutorial Interattivo Svelte")]),o("li",null,[o("a",{href:"https://kit.svelte.dev/docs/introduction",target:"_blank",rel:"noopener"},"Introduzione a SvelteKit")])])])],-1),KE=o("p",null,[o("em",null,[o("strong",null,"Questi link sono il riferimento per gli studenti e vi suggerisco di studiarli e di utilizzarli per tutto il tempo necessario ad apprendere Svlete e SvelteKit")])],-1),PE={__name:"34",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[ME,TE,AE,KE]),_:1},16))}},LE=E(PE,[["__file","/@slidev/slides/34.md"]]),RE=o("h1",null,"SvelteKit",-1),HE=o("p",null,"Hello World: Creare un Progetto SvelteKit",-1),WE=o("ul",null,[o("li",null,[c("Per sviluppare con Svelte e SvelteKit è necessario: "),o("ul",null,[o("li",null,[c("nodejs (almeno versione 18) —> "),o("a",{href:"http://cedws",target:"_blank",rel:"noopener"},"Come installare nodejs su Linux")]),o("li",null,"npm"),o("li",null,"git")])]),o("li",null,"Assicurati che siano instllati sul tuo sistema eseguendo i seguenti comandi:")],-1),NE=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(),o("span",{class:"token function"},"node"),c(),o("span",{class:"token parameter variable"},"--version")]),c(`
`),o("span",{class:"line"},"v19.2.0"),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(),o("span",{class:"token function"},"npm"),c(),o("span",{class:"token parameter variable"},"--version"),c()]),c(`
`),o("span",{class:"line"},[o("span",{class:"token number"},"9.1"),c(".3")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(),o("span",{class:"token function"},"git"),c(),o("span",{class:"token parameter variable"},"--version"),c("          ")]),c(`
`),o("span",{class:"line"},[o("span",{class:"token function"},"git"),c(" version "),o("span",{class:"token number"},"2.34"),c(".1")])])],-1),DE={__name:"35",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[RE,HE,WE,j(s,me({},{ranges:[""]}),{default:w(()=>[NE]),_:1},16)]),_:1},16)}}},qE=E(DE,[["__file","/@slidev/slides/35.md"]]),FE=o("h1",null,"SvelteKit",-1),jE=o("p",null,"Hello World: Creare un Progetto SvelteKit",-1),VE=o("ul",null,[o("li",null,"Spostati nella tua directory di lavoro (es: cd ~/tmp)"),o("li",null,[c("Da qui crea lo "),o("a",{href:"https://en.wikipedia.org/wiki/Scaffold_(programming)",target:"_blank",rel:"noopener"},[o("strong",null,"scaffolding")]),c(" di un’applicazione base seguendo le semplici istruzioni a video")])],-1),BE=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(),o("span",{class:"token function"},"npm"),c(" create svelte@latest hello-word-svelte-kit")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[c("create-svelte version "),o("span",{class:"token number"},"4.2"),c(".0")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[c("┌  Welcome to SvelteKit"),o("span",{class:"token operator"},"!")]),c(`
`),o("span",{class:"line"},"│"),c(`
`),o("span",{class:"line"},"◆  Which Svelte app template?"),c(`
`),o("span",{class:"line"},[c("│  ● SvelteKit demo app "),o("span",{class:"token punctuation"},"("),c("A demo app showcasing some of the features of SvelteKit"),o("span",{class:"token punctuation"},")")]),c(`
`),o("span",{class:"line"},"│  ○ Skeleton project"),c(`
`),o("span",{class:"line"},"│  ○ Library project"),c(`
`),o("span",{class:"line"},"└"),c(`
`),o("span",{class:"line"},[c("◆  Add "),o("span",{class:"token builtin class-name"},"type"),c(" checking with TypeScript?")]),c(`
`),o("span",{class:"line"},"│  ○ Yes, using JavaScript with JSDoc comments"),c(`
`),o("span",{class:"line"},"│  ○ Yes, using TypeScript syntax"),c(`
`),o("span",{class:"line"},"│  ● No"),c(`
`),o("span",{class:"line"},"└")])],-1),UE={__name:"36",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[FE,jE,VE,j(s,me({},{ranges:[""]}),{default:w(()=>[BE]),_:1},16)]),_:1},16)}}},JE=E(UE,[["__file","/@slidev/slides/36.md"]]),QE=o("h1",null,"SvelteKit",-1),YE=o("p",null,"Hello World: Creare un Progetto SvelteKit",-1),ZE=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},[c("◆  Select additional options "),o("span",{class:"token punctuation"},"("),c("use arrow keys/space bar"),o("span",{class:"token punctuation"},")")]),c(`
`),o("span",{class:"line"},[c("│  ◻ Add ESLint "),o("span",{class:"token keyword"},"for"),c(" code linting")]),c(`
`),o("span",{class:"line"},[c("│  ◻ Add Prettier "),o("span",{class:"token keyword"},"for"),c(" code formatting")]),c(`
`),o("span",{class:"line"},[c("│  ◻ Add Playwright "),o("span",{class:"token keyword"},"for"),c(" browser testing")]),c(`
`),o("span",{class:"line"},[c("│  ◻ Add Vitest "),o("span",{class:"token keyword"},"for"),c(" unit testing")]),c(`
`),o("span",{class:"line"},"└"),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[c("└  Your project is ready"),o("span",{class:"token operator"},"!")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},"Install community-maintained integrations:"),c(`
`),o("span",{class:"line"},"  https://github.com/svelte-add/svelte-add"),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},"Next steps:"),c(`
`),o("span",{class:"line"},[c("  "),o("span",{class:"token number"},"1"),c(": "),o("span",{class:"token builtin class-name"},"cd"),c(" hello-word-svelte-kit")]),c(`
`),o("span",{class:"line"},[c("  "),o("span",{class:"token number"},"2"),c(": "),o("span",{class:"token function"},"npm"),c(),o("span",{class:"token function"},"install"),c(),o("span",{class:"token punctuation"},"("),c("or "),o("span",{class:"token function"},"pnpm"),c(" install, etc"),o("span",{class:"token punctuation"},")")]),c(`
`),o("span",{class:"line"},[c("  "),o("span",{class:"token number"},"3"),c(": "),o("span",{class:"token function"},"git"),c(" init "),o("span",{class:"token operator"},"&&"),c(),o("span",{class:"token function"},"git"),c(),o("span",{class:"token function"},"add"),c(),o("span",{class:"token parameter variable"},"-A"),c(),o("span",{class:"token operator"},"&&"),c(),o("span",{class:"token function"},"git"),c(" commit "),o("span",{class:"token parameter variable"},"-m"),c(),o("span",{class:"token string"},'"Initial commit"'),c(),o("span",{class:"token punctuation"},"("),c("optional"),o("span",{class:"token punctuation"},")")]),c(`
`),o("span",{class:"line"},[c("  "),o("span",{class:"token number"},"4"),c(": "),o("span",{class:"token function"},"npm"),c(" run dev -- "),o("span",{class:"token parameter variable"},"--open")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},"To close the dev server, hit Ctrl-C")])],-1),GE={__name:"37",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[QE,YE,j(s,me({},{ranges:[""]}),{default:w(()=>[ZE]),_:1},16)]),_:1},16)}}},XE=E(GE,[["__file","/@slidev/slides/37.md"]]),eO="/4/svelte/assets/svelte_0000-8c1f6978.png",tO=o("h1",null,"SvelteKit",-1),nO=o("p",null,"Hello World: Creare un Progetto SvelteKit",-1),oO=o("ul",null,[o("li",null,[c("Ora nella directory "),o("strong",null,"hello-word-svelte-kit"),c(" è presente un progetto base realizzato con SvelteKit")]),o("li",null,"Per portare a termine la creazione del progetto eseguire i seguenti comandi")],-1),iO=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(),o("span",{class:"token builtin class-name"},"cd"),c(" hello-word-svelte-kit  "),o("span",{class:"token comment"},"# mi sposto nella directory hello-word-svelte-kit")]),c(`
`),o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(),o("span",{class:"token function"},"npm"),c(" i  "),o("span",{class:"token comment"},"# installo le dipendenze del progetto")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[c("added "),o("span",{class:"token number"},"42"),c(" packages, and audited "),o("span",{class:"token number"},"43"),c(" packages "),o("span",{class:"token keyword"},"in"),c(" 10s")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[o("span",{class:"token number"},"3"),c(" packages are looking "),o("span",{class:"token keyword"},"for"),c(" funding")]),c(`
`),o("span",{class:"line"},[c("  run "),o("span",{class:"token variable"},[o("span",{class:"token variable"},"`"),o("span",{class:"token function"},"npm"),c(" fund"),o("span",{class:"token variable"},"`")]),c(),o("span",{class:"token keyword"},"for"),c(" details")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[c("found "),o("span",{class:"token number"},"0"),c(" vulnerabilities")])])],-1),sO=o("ul",null,[o("li",null,"Se non si sono verificatri errori, il progetto è pronto per l’esecuzione")],-1),aO=o("img",{src:eO,class:"mx-auto",width:"100"},null,-1),lO={__name:"38",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[tO,nO,oO,j(s,me({},{ranges:[""]}),{default:w(()=>[iO]),_:1},16),sO,aO]),_:1},16)}}},rO=E(lO,[["__file","/@slidev/slides/38.md"]]),cO=o("h1",null,"SvelteKit",-1),uO=o("p",null,"Hello World: Eseguiamo il progetto",-1),dO=o("ul",null,[o("li",null,"Per eseguire il progetto, all’interno della directory di progetto (hello-word-svelte-kit), eseguire il seguente comando")],-1),pO=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(),o("span",{class:"token function"},"npm"),c(" run dev -- "),o("span",{class:"token parameter variable"},"--open")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(" hello-word-svelte-kit@0.0.1 dev")]),c(`
`),o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(" vite dev "),o("span",{class:"token parameter variable"},"--open")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},"Forced re-optimization of dependencies"),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[c("  VITE v4.3.9  ready "),o("span",{class:"token keyword"},"in"),c(),o("span",{class:"token number"},"1136"),c(" ms")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},"  ➜  Local:   http://localhost:5173/"),c(`
`),o("span",{class:"line"},[c("  ➜  Network: use "),o("span",{class:"token parameter variable"},"--host"),c(" to expose")]),c(`
`),o("span",{class:"line"},[c("  ➜  press h to show "),o("span",{class:"token builtin class-name"},"help")])])],-1),mO=o("ul",null,[o("li",null,[c("Viene automaticamente aperta una fienstra del browser che punta al seguente indirizzo: "),o("a",{href:"http://localhost:5173/",target:"_blank",rel:"noopener"},"http://localhost:5173/")])],-1),fO={__name:"39",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[cO,uO,dO,j(s,me({},{ranges:[""]}),{default:w(()=>[pO]),_:1},16),mO]),_:1},16)}}},hO=E(fO,[["__file","/@slidev/slides/39.md"]]),vO="/4/svelte/assets/svelte_009-3fc6e637.png",_O=o("h1",null,"SvelteKit",-1),gO=o("p",null,"Hello World: Eseguiamo il progetto",-1),bO=o("img",{src:vO,class:"mx-auto",width:"500"},null,-1),yO={__name:"40",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[_O,gO,bO]),_:1},16))}},SO=E(yO,[["__file","/@slidev/slides/40.md"]]),wO="/4/svelte/assets/svelte_010-f742c650.png",xO=o("h1",null,"SvelteKit",-1),kO=o("p",null,"Hello World: Eseguiamo il progetto",-1),$O=o("img",{src:wO,class:"mx-auto",width:"450"},null,-1),zO={__name:"41",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[xO,kO,$O]),_:1},16))}},IO=E(zO,[["__file","/@slidev/slides/41.md"]]),CO=o("h1",null,"SvelteKit",-1),EO=o("p",null,"Hello World: Analisi del progetto base",-1),OO=o("ul",null,[o("li",null,[c("Quest’applicazione ci permette di comprendere alcuni concetti molto importanti: "),o("ol",null,[o("li",null,[o("strong",null,"Ogni pagina dell’applicazione è un componente Svelte")]),o("li",null,[o("strong",null,"Il routing è implementato la gerarchia di directory nel filesystem")]),o("li",null,[o("strong",null,"Ogni pagina è una directory all’interno di src/routes")]),o("li",null,[o("strong",null,"La home page è un componente Svelte all’interno di src/routes")]),o("li",null,[o("strong",null,"Una pagina(componente) può includere uno o più componenti esterni")])])])],-1),MO={__name:"42",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[CO,EO,OO]),_:1},16))}},TO=E(MO,[["__file","/@slidev/slides/42.md"]]),AO=o("h1",null,"SvelteKit",-1),KO=o("p",null,"Hello World: Analisi del progetto base",-1),PO=o("ul",null,[o("li",null,"Analizziamo il progetto generato")],-1),LO=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},"src"),c(`
`),o("span",{class:"line"},[c("├── app.html --"),o("span",{class:"token operator"},">"),c(" La pagina Web dell'applicazione")]),c(`
`),o("span",{class:"line"},[c("└── routes --"),o("span",{class:"token operator"},">"),c(" entry point del sistema di routing filesystem based")]),c(`
`),o("span",{class:"line"},"    ├── about"),c(`
`),o("span",{class:"line"},[c("    │   └── +page.svelte --"),o("span",{class:"token operator"},">"),c(" la pagina About "),o("span",{class:"token punctuation"},"("),c("componente svelte"),o("span",{class:"token punctuation"},")")]),c(`
`),o("span",{class:"line"},[c("    ├── Counter.svelte --"),o("span",{class:"token operator"},">"),c(" il componente contatore presente solo nella home")]),c(`
`),o("span",{class:"line"},[c("    ├── Header.svelte --"),o("span",{class:"token operator"},">"),c(" il componente Header presente "),o("span",{class:"token keyword"},"in"),c(" tutte le pagine")]),c(`
`),o("span",{class:"line"},[c("    ├── +layout.svelte --"),o("span",{class:"token operator"},">"),c(" il layout comune a tutte le pagine del progetto")]),c(`
`),o("span",{class:"line"},[c("    ├── +page.svelte --"),o("span",{class:"token operator"},">"),c(" la home page "),o("span",{class:"token punctuation"},"("),c("componente svelte"),o("span",{class:"token punctuation"},")")]),c(`
`),o("span",{class:"line"},[c("    ├── styles.css --"),o("span",{class:"token operator"},">"),c(" CSS globale che si applica a tutta l'applicazione ed ai suoi componenti")]),c(`
`),o("span",{class:"line"},"    └── sverdle"),c(`
`),o("span",{class:"line"},[c("        ├── game.js --"),o("span",{class:"token operator"},">"),c(" la logica del gioco "),o("span",{class:"token punctuation"},"("),c("JS vanilla"),o("span",{class:"token punctuation"},")")]),c(`
`),o("span",{class:"line"},[c("        ├── +page.server.js --"),o("span",{class:"token operator"},">"),c(" il back-end di sverdle "),o("span",{class:"token punctuation"},"("),c("JS vanilla"),o("span",{class:"token punctuation"},")")]),c(`
`),o("span",{class:"line"},[c("        └── +page.svelte --"),o("span",{class:"token operator"},">"),c(" la pagina sverdle "),o("span",{class:"token punctuation"},"("),c("componente svelte"),o("span",{class:"token punctuation"},")")])])],-1),RO={__name:"43",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[AO,KO,PO,j(s,me({},{ranges:[""]}),{default:w(()=>[LO]),_:1},16)]),_:1},16)}}},HO=E(RO,[["__file","/@slidev/slides/43.md"]]),WO=o("h1",null,"SvelteKit",-1),NO=o("p",null,"Hello World: Analisi del progetto base",-1),DO=o("ul",null,[o("li",null,[o("p",null,"Da questa prima analisi possiamo dedurre che:"),o("ul",null,[o("li",null,[c("Ogni pagina è composta da: "),o("ul",null,[o("li",null,"una directory all’interno di src/router. Il nome della directory coincide con la URL della pagina (quindi niente spazi, ma usiamo _)"),o("li",null,[c("un file nominato "),o("strong",null,"+page-svelte"),c(" che è un componente completo ed indipendente che include HTML, CSS e JS")])])]),o("li",null,[c("Ogni componente che non è una pagina è formato da un file chiamato "),o("em",null,[o("strong",null,"<nome_componente>.svelte")])]),o("li",null,"Il routing tra pagine viene gestito automaticamente da SvelteKit se si rispetta la convenzione descritta sopra")])]),o("li",null,[o("p",null,[o("strong",null,[c("Segue ora un’analisi live a cura del professore ("),o("code",null,"necessario prendere appunti"),c(")")])])])],-1),qO={__name:"44",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[WO,NO,DO]),_:1},16))}},FO=E(qO,[["__file","/@slidev/slides/44.md"]]),jO=o("h1",null,"SvelteKit",-1),VO=o("p",null,"Hello World: Esercitazione_01",-1),BO=o("ul",null,[o("li",null,"Creare ed installare il progetto base SvelteKit come spiegato sopra"),o("li",null,"Eseguire l’applicazione"),o("li",null,"Consegnare su github il progetto appena creato"),o("li",null,[c("IMPORTANTE: non fare il push della directory "),o("em",null,[o("strong",null,"node_modules")])])],-1),UO={__name:"45",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[jO,VO,BO]),_:1},16))}},JO=E(UO,[["__file","/@slidev/slides/45.md"]]),QO="/4/svelte/assets/svelte_011-5ebbb473.png",YO=o("h1",null,"SvelteKit",-1),ZO=o("p",null,"Hello World: Esercitazione_02",-1),GO=o("ul",null,[o("li",null,"provare a modificare la home page del progetto in modo che appaia come in figura")],-1),XO=o("img",{src:QO,class:"mx-auto",width:"400"},null,-1),e4=o("ul",null,[o("li",null,"Consegnare su github il progetto modificato")],-1),t4={__name:"46",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[YO,ZO,GO,XO,e4]),_:1},16))}},n4=E(t4,[["__file","/@slidev/slides/46.md"]]),o4="/4/svelte/assets/svelte_012-0ceab35c.png",i4=o("h1",null,"SvelteKit",-1),s4=o("p",null,"Hello World: Esercitazione_03",-1),a4=o("ul",null,[o("li",null,"provare a modificare il layout del progetto in modo che appaia come in figura")],-1),l4=o("p",null,[o("br"),o("br"),o("img",{src:o4,class:"mx-auto",width:"650"})],-1),r4=o("ul",null,[o("li",null,"Consegnare su github il progetto modificato")],-1),c4={__name:"47",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[i4,s4,a4,l4,r4]),_:1},16))}},u4=E(c4,[["__file","/@slidev/slides/47.md"]]),d4="/4/svelte/assets/svelte_013-7818c60a.png",p4=o("h1",null,"SvelteKit",-1),m4=o("p",null,"Hello World: Esercitazione_04",-1),f4=o("ul",null,[o("li",null,"provare a modificare la pagina about in modo che appaia come in figura")],-1),h4=o("img",{src:d4,class:"mx-auto",width:"550"},null,-1),v4=o("ul",null,[o("li",null,"Consegnare su github il progetto modificato")],-1),_4={__name:"48",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[p4,m4,f4,h4,v4]),_:1},16))}},g4=E(_4,[["__file","/@slidev/slides/48.md"]]),b4="/4/svelte/assets/svelte_014-9655b9ec.png",y4=o("h1",null,"SvelteKit",-1),S4=o("p",null,"Hello World: Esercitazione_05",-1),w4=o("ul",null,[o("li",null,"provare a modificare il componente counter in modo che si incrementi o decrementi di due unità alla pressione dei pulsati + o -")],-1),x4=o("br",null,null,-1),k4=o("img",{src:b4,class:"mx-auto",width:"500"},null,-1),$4=o("ul",null,[o("li",null,"Consegnare su github il progetto modificato")],-1),z4={__name:"49",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[y4,S4,w4,x4,k4,$4]),_:1},16))}},I4=E(z4,[["__file","/@slidev/slides/49.md"]]),Zm="/4/svelte/assets/svelte_015-368b64e2.png",C4=o("h1",null,"SvelteKit",-1),E4=o("p",null,"Creiamo un componente",-1),O4=o("ul",null,[o("li",null,"Vediamo ora come creare un nostro componente e utilizzarlo nelle pagine della nostra applicazione"),o("li",null,"Realizzeremo il componente introdotto alla slide #28 e successive"),o("li",null,"Lo visualizzeremo sia sulla pagina home che sulla pagina about")],-1),M4=o("img",{src:Zm,class:"mx-auto",width:"450"},null,-1),T4={__name:"50",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[C4,E4,O4,M4]),_:1},16))}},A4=E(T4,[["__file","/@slidev/slides/50.md"]]),K4=o("h1",null,"SvelteKit",-1),P4=o("p",null,"Creiamo un componente",-1),L4=o("ul",null,[o("li",null,"Per una corretta organizzazione del codice metetremo i nostri componenti nella directory lib"),o("li",null,[c("Il nostro componente si chiama "),o("strong",null,"Banner")]),o("li",null,[c("Quindi dobbiamo creare una directory "),o("em",null,"components"),c(" in src/lib e al suo interno creare un file "),o("em",null,"banner.svelte")])],-1),R4=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(),o("span",{class:"token builtin class-name"},"cd"),c(" src/lib")]),c(`
`),o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(),o("span",{class:"token function"},"mkdir"),c(" components")]),c(`
`),o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(),o("span",{class:"token function"},"touch"),c(" components/banner.svelte")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},"├── app.html"),c(`
`),o("span",{class:"line"},"├── lib"),c(`
`),o("span",{class:"line"},"│   ├── components"),c(`
`),o("span",{class:"line"},"│   │   └── banner.svelte")])],-1),H4=o("ul",null,[o("li",null,"Ora editiamo il file banner.svelte ed utilizziamo il codice di slide #28")],-1),W4={__name:"51",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[K4,P4,L4,j(s,me({},{ranges:[""]}),{default:w(()=>[R4]),_:1},16),H4]),_:1},16)}}},N4=E(W4,[["__file","/@slidev/slides/51.md"]]),D4=o("h1",null,"SvelteKit",-1),q4=o("p",null,"Creiamo un componente",-1),F4=o("ul",null,[o("li",null,[c("Il componente "),o("strong",null,"banner"),c(" è ora disponibile per essere utilizzato")]),o("li",null,[c("Per fare ciò dobbiamo "),o("em",null,[o("strong",null,"importarlo")]),c(" nella pagina in cui vogliamo utilizzarlo")]),o("li",null,[c("Partiamo modificando la home e quindi editiamo il file "),o("em",null,"src/routes/+page.svelte")])],-1),j4=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("script")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"    import Counter from './Counter.svelte';"),c(`
`),o("span",{class:"line"},"    ......"),c(`
`),o("span",{class:"line"},"    import Banner from '../lib/components/banner.svelte'; // aggiungi questa linea"),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("script")]),o("span",{class:"token punctuation"},">")])])])],-1),V4=o("ul",null,[o("li",null,[c("Ora abbiamo a disposizione un nuovo tag HTML che si chiama "),o("strong",null,"<Banner>")]),o("li",null,"Questo è un componente Web e possiamo usarlo come qualsiasi altro tag html"),o("li",null,"Come anticipato il paradigma dei web component offre infinite possibilità")],-1),B4={__name:"52",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[D4,q4,F4,j(s,me({},{ranges:[""]}),{default:w(()=>[j4]),_:1},16),V4]),_:1},16)}}},U4=E(B4,[["__file","/@slidev/slides/52.md"]]),J4=o("h1",null,"SvelteKit",-1),Q4=o("p",null,"Creiamo un componente",-1),Y4=o("ul",null,[o("li",null,"Ora usiamo il componente nella home page")],-1),Z4=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("section")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},[c("	"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("h1")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},[c("		"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("span")]),c(),o("span",{class:"token attr-name"},"class"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),c("welcome"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},[c("			"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("picture")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},[c("				"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("source")]),c(),o("span",{class:"token attr-name"},"srcset"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),c("{welcome}")]),c(),o("span",{class:"token attr-name"},"type"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),c("image/webp"),o("span",{class:"token punctuation"},'"')]),c(),o("span",{class:"token punctuation"},"/>")])]),c(`
`),o("span",{class:"line"},[c("				"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("img")]),c(),o("span",{class:"token attr-name"},"src"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),c("{welcome_fallback}")]),c(),o("span",{class:"token attr-name"},"alt"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),c("Welcome"),o("span",{class:"token punctuation"},'"')]),c(),o("span",{class:"token punctuation"},"/>")])]),c(`
`),o("span",{class:"line"},[c("			"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("picture")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},[c("		"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("span")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[c("		alla tua nuova "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("br")]),c(),o("span",{class:"token punctuation"},"/>")]),c("applicazione SvelteKit")]),c(`
`),o("span",{class:"line"},[c("	"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("h1")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[c("	"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("h2")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},[c("		prova a editare il file "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("strong")]),o("span",{class:"token punctuation"},">")]),c("src/routes/+page.svelte"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("strong")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},[c("	"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("h2")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[c("	"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("Banner")]),c(),o("span",{class:"token punctuation"},"/>")]),c(),o("span",{class:"token comment"},"<!-- Utilizza Banner al posto di Counter-->")]),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("section")]),o("span",{class:"token punctuation"},">")])])])],-1),G4={__name:"53",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[J4,Q4,Y4,j(s,me({},{ranges:[""]}),{default:w(()=>[Z4]),_:1},16)]),_:1},16)}}},X4=E(G4,[["__file","/@slidev/slides/53.md"]]),eM=o("h1",null,"SvelteKit",-1),tM=o("p",null,"Creiamo un componente",-1),nM=o("ul",null,[o("li",null,"Ora facciamo partire l’applicazione e verifichiamo che tutto sia corretto")],-1),oM=o("br",null,null,-1),iM=o("img",{src:Zm,class:"mx-auto",width:"500"},null,-1),sM={__name:"54",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[eM,tM,nM,oM,iM]),_:1},16))}},aM=E(sM,[["__file","/@slidev/slides/54.md"]]),lM="/4/svelte/assets/svelte_016-51073a42.png",rM=o("h1",null,"SvelteKit",-1),cM=o("p",null,"Hello World: Esercitazione_06",-1),uM=o("ul",null,[o("li",null,"provare a modificare la pagina about aggiungendo il componente Banner")],-1),dM=o("br",null,null,-1),pM=o("img",{src:lM,class:"mx-auto",width:"550"},null,-1),mM=o("ul",null,[o("li",null,"Consegnare su github il progetto modificato")],-1),fM={__name:"55",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[rM,cM,uM,dM,pM,mM]),_:1},16))}},hM=E(fM,[["__file","/@slidev/slides/55.md"]]),vM=o("h1",null,"SvelteKit",-1),_M=o("p",null,"Creiamo un componente",-1),gM=o("ul",null,[o("li",null,"Quindi una volta definito il componente, esso sarà riutilizzabile in qualsiasi pagina e sezione del nostro sito"),o("li",null,"Ma ancor meglio potrà essere utilizzato anche in altri siti e pagine"),o("li",null,[c("Quindi i componenti web ci permettono di implementare importanti proprietà dello sviluppo software, quali "),o("ul",null,[o("li",null,"incapsulamento"),o("li",null,"isolamento"),o("li",null,"riutilizzabilità del codice")])]),o("li",null,"Per questi motivi lo sviluppo component base è oggi alla base di tutti i principali framework di sviluppo per il mondo web (web, mobile, games, web app, desktop app)")],-1),bM={__name:"56",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[vM,_M,gM]),_:1},16))}},yM=E(bM,[["__file","/@slidev/slides/56.md"]]),SM=o("h1",null,"SvelteKit",-1),wM=o("p",null,"Variable Substitution",-1),xM=o("ul",null,[o("li",null,"Analizziamo più in dettaglio il componente Banner")],-1),kM=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("script")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"    let name = 'John Doe';"),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("script")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("h1")]),o("span",{class:"token punctuation"},">")]),c("My name is {name}!"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("h1")]),o("span",{class:"token punctuation"},">")])])])],-1),$M=o("ul",null,[o("li",null,[c("Nella sezione JS del componente abbiamo solo definito una variabile di nome "),o("em",null,"name"),c(" ed assegnato un valore string")]),o("li",null,[c("Nella sezione HTML del componente abbiamo utilizzato la variabile all’interno di normale codice HTML tramite "),o("code",null,"{}")])],-1),zM=o("div",{style:{"background-color":"green",color:"yellow",padding:"10px","line-height":"30px"}},[o("p",null,"In svelte il costrutto {< var name >} rappresenta una sostituzione di variabili")],-1),IM=o("ul",null,[o("li",null,[c("Pertanto quando il componente sarà compilato ogni occorrenza di "),o("code",null,"{< var name>}"),c(" sarà sostituito con il valore attribuito alla variabile "),o("em",null,"var name")])],-1),CM={__name:"57",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[SM,wM,xM,j(s,me({},{ranges:[""]}),{default:w(()=>[kM]),_:1},16),$M,zM,IM]),_:1},16)}}},EM=E(CM,[["__file","/@slidev/slides/57.md"]]),OM="/4/svelte/assets/svelte_017-d1ecfa98.png",MM=o("h1",null,"SvelteKit",-1),TM=o("p",null,"Hello World: Esercitazione_07",-1),AM=o("ul",null,[o("li",null,"Provare a modificare il componente Banner in modo che visualizzi il proprio nome e cognome"),o("li",null,"Verificare che il banner appaia modificato in tutte le pagine")],-1),KM=o("br",null,null,-1),PM=o("img",{src:OM,class:"mx-auto",width:"450"},null,-1),LM=o("ul",null,[o("li",null,"Consegnare su github il progetto modificato")],-1),RM={__name:"58",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[MM,TM,AM,KM,PM,LM]),_:1},16))}},HM=E(RM,[["__file","/@slidev/slides/58.md"]]),WM=o("h1",null,"SvelteKit",-1),NM=o("p",null,"Code Execution",-1),DM=o("ul",null,[o("li",null,"In molti casi sostituire una variabile non è sufficiente, ma si rende necessario l’esecuzione di un codice JS"),o("li",null,[c("Anche in questa situazione il costrutto "),o("code",null,"{}"),c(" viene in nostro aiuto")]),o("li",null,[c("Infatti svelte durante la compilazione, esegue il codice JS contenuto in "),o("code",null,"{}"),c(" e sostituisce il suo output nel codice HTML")]),o("li",null,"Vediamo un esempio")],-1),qM=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("script")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"    let name = 'John Doe';"),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("script")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("h1")]),o("span",{class:"token punctuation"},">")]),c("My name is {name.toLocaleUpperCase()}!"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("h1")]),o("span",{class:"token punctuation"},">")])])])],-1),FM=o("ul",null,[o("li",null,[c("Quando questo codice viene compilato, viene prima richiamato il metodo "),o("em",null,"toUpperCase"),c(" sulla variabile(oggetto) name")]),o("li",null,[c("Successivamente il risultato di questa esecuzione viene sostitutito "),o("em",null,"verbatim"),c(" nel codice HTML")])],-1),jM={__name:"59",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[WM,NM,DM,j(s,me({},{ranges:[""]}),{default:w(()=>[qM]),_:1},16),FM]),_:1},16)}}},VM=E(jM,[["__file","/@slidev/slides/59.md"]]),BM="/4/svelte/assets/svelte_018-4a3d51b3.png",UM=o("h1",null,"SvelteKit",-1),JM=o("p",null,"Code Execution",-1),QM=o("img",{src:BM,class:"mx-auto",width:"500"},null,-1),YM={__name:"60",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[UM,JM,QM]),_:1},16))}},ZM=E(YM,[["__file","/@slidev/slides/60.md"]]),GM=o("h1",null,"SvelteKit",-1),XM=o("p",null,"Code Execution",-1),eT=o("ul",null,[o("li",null,"Ovviamente non siamo limitati ai metodi degli oggetti standard di JS"),o("li",null,"Ma possiamo anche richiamare nostre funzioni"),o("li",null,"Per esempio vediamo come richiamare una funzione che prende il nostro nome e lo stampa al contrario tutto maiuscolo")],-1),tT=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("script")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"    let name = 'Antonio Mancuso';"),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},"    function reverse_string(str) {"),c(`
`),o("span",{class:"line"},"        return str.split('').reverse().join('').toUpperCase();"),c(`
`),o("span",{class:"line"},"    }"),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("script")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("h1")]),o("span",{class:"token punctuation"},">")]),c("My name is {reverse_string(name)}!"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("h1")]),o("span",{class:"token punctuation"},">")])])])],-1),nT={__name:"61",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[GM,XM,eT,j(s,me({},{ranges:[""]}),{default:w(()=>[tT]),_:1},16)]),_:1},16)}}},oT=E(nT,[["__file","/@slidev/slides/61.md"]]),iT="/4/svelte/assets/svelte_019-600c2437.png",sT=o("h1",null,"SvelteKit",-1),aT=o("p",null,"Code Execution",-1),lT=o("ul",null,[o("li",null,[c("Quando questo codice viene compilato, viene prima richiamato la nostra funzione "),o("em",null,"reverse_string")]),o("li",null,[c("Successivamente il risultato di questa esecuzione viene sostitutito "),o("em",null,"verbatim"),c(" nel codice HTML")])],-1),rT=o("br",null,null,-1),cT=o("img",{src:iT,class:"mx-auto",width:"400"},null,-1),uT={__name:"62",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[sT,aT,lT,rT,cT]),_:1},16))}},dT=E(uT,[["__file","/@slidev/slides/62.md"]]),pT=o("h1",null,"SvelteKit",-1),mT=o("ul",null,[o("li",null,[o("p",null,"Come abbiamo visto con semplici esempi, il meccanismo dei componenti di Svlete è molto versatile")]),o("li",null,[o("p",null,"Permette la definizione di componenti indipendenti rendendo più facile lo sviluppo e riducendo gli errori")]),o("li",null,[o("p",null,"Il meccanismo della sostituzione delle variabili e del code execution sono molto utili nello sviluppo di applicazioni web moderne")]),o("li",null,[o("p",null,"Svelte rende tutto ciò semplicissimo e più semplice rispetto ad altri framework")]),o("li",null,[o("p",null,"Per questo e altri motivi è un framework in veloce ascesa nel panorama dello sviluppo web")]),o("li",null,[o("p",null,"Ora vediamo come creare un progetto Svelte da zero, senza scaffolding")]),o("li",null,[o("p",null,"Questo ci permetterà di comprendere altri meccanismi e come è realmente organizzata un’applicazione sveltekit")])],-1),fT={__name:"63",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[pT,mT]),_:1},16))}},hT=E(fT,[["__file","/@slidev/slides/63.md"]]),vT=o("h1",null,"SvelteKit",-1),_T=o("p",null,"Creazione Web App: scaffolding del progetto",-1),gT=o("ul",null,[o("li",null,"Creiamo un nuovo progetto chiamato WebApp")],-1),bT=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token operator"},">"),c(),o("span",{class:"token function"},"npm"),c(" create svelte@latest WebApp")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[c("create-svelte version "),o("span",{class:"token number"},"4.2"),c(".0")]),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},[c("┌  Welcome to SvelteKit"),o("span",{class:"token operator"},"!")]),c(`
`),o("span",{class:"line"},"│"),c(`
`),o("span",{class:"line"},"◆  Which Svelte app template?"),c(`
`),o("span",{class:"line"},"│  ○ SvelteKit demo app"),c(`
`),o("span",{class:"line"},[c("│  ● Skeleton project "),o("span",{class:"token punctuation"},"("),c("Barebones scaffolding "),o("span",{class:"token keyword"},"for"),c(" your new SvelteKit app"),o("span",{class:"token punctuation"},")")]),c(`
`),o("span",{class:"line"},"│  ○ Library project"),c(`
`),o("span",{class:"line"},"└"),c(`
`),o("span",{class:"line"},[c("◇  Add "),o("span",{class:"token builtin class-name"},"type"),c(" checking with TypeScript?")]),c(`
`),o("span",{class:"line"},"│  No"),c(`
`),o("span",{class:"line"},"│"),c(`
`),o("span",{class:"line"},[c("◇  Select additional options "),o("span",{class:"token punctuation"},"("),c("use arrow keys/space bar"),o("span",{class:"token punctuation"},")")]),c(`
`),o("span",{class:"line"},"│  none"),c(`
`),o("span",{class:"line"},"│"),c(`
`),o("span",{class:"line"},[c("└  Your project is ready"),o("span",{class:"token operator"},"!")])])],-1),yT={__name:"64",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[vT,_T,gT,j(s,me({},{ranges:[""]}),{default:w(()=>[bT]),_:1},16)]),_:1},16)}}},ST=E(yT,[["__file","/@slidev/slides/64.md"]]),wT="/4/svelte/assets/svelte_020-2a368428.png",xT=o("h1",null,"SvelteKit",-1),kT=o("p",null,"Creazione Web App: scaffolding del progetto",-1),$T=o("ul",null,[o("li",null,"Questa volta è stato solo creato il minimo indispendabile")],-1),zT=o("p",null,[o("br"),o("br"),o("img",{src:wT,class:"mx-auto",width:"400"})],-1),IT=o("ul",null,[o("li",null,"Creeremo uno scheletro di una semplice Web App senza spendere troppo tempo sull’aspetto estetico (HTML e CSS sono dati per scontato in questa lezione)"),o("li",null,"L’obiettivo è comprendere il funzionamento e l’organizzazione di un’app sveltekit")],-1),CT={__name:"65",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[xT,kT,$T,zT,IT]),_:1},16))}},ET=E(CT,[["__file","/@slidev/slides/65.md"]]),OT=o("h1",null,"SvelteKit",-1),MT=o("p",null,"Creazione Web App: scaffolding del progetto",-1),TT=o("ul",null,[o("li",null,[c("Iniziamo con la creazione del "),o("code",null,"layout"),c(" della pagina")]),o("li",null,[c("Il "),o("em",null,[o("strong",null,"layout")]),c(" della pagina è il contenitore principale della nostra applicazione")]),o("li",null,"Esso sarà sempre visualizzato in ciascuna pagina del sito"),o("li",null,"Il vantaggio principale è che in questo modo il layout sarà scritto una sola volta ed utilizzato per tutte le pagine"),o("li",null,[c("Questo meccanismo implementa il principio "),o("a",{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",target:"_blank",rel:"noopener"},"DRY"),c(" (Don’t Repeat Yourself) molto importante nello sviluppo del software")]),o("li",null,[c("Creaimo quindi un file chiamato "),o("code",null,"+layout.svelte"),c(" in "),o("em",null,[o("strong",null,"src/routes")])])],-1),AT=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},"src"),c(`
`),o("span",{class:"line"},"├── app.html"),c(`
`),o("span",{class:"line"},"└── routes"),c(`
`),o("span",{class:"line"},[c("    ├── +layout.svelte "),o("span",{class:"token operator"},"<"),c("--- layout")]),c(`
`),o("span",{class:"line"},[c("    └── +page.svelte   "),o("span",{class:"token operator"},"<"),c("--- home page")])])],-1),KT=o("ul",null,[o("li",null,"Inseriamo il codice HTML e CSS")],-1),PT={__name:"66",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[OT,MT,TT,j(s,me({},{ranges:[""]}),{default:w(()=>[AT]),_:1},16),KT]),_:1},16)}}},LT=E(PT,[["__file","/@slidev/slides/66.md"]]),RT="/4/svelte/assets/svelte_021-dca7a484.png",HT=o("h1",null,"SvelteKit",-1),WT=o("p",null,"Creazione Web App: il layout",-1),NT=o("img",{src:RT,class:"mx-auto",width:"400"},null,-1),DT={__name:"67",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[HT,WT,NT]),_:1},16))}},qT=E(DT,[["__file","/@slidev/slides/67.md"]]),FT="/4/svelte/assets/svelte_022-037591fe.png",jT="/4/svelte/assets/svelte_023-535f64a4.png",VT=o("h1",null,"SvelteKit",-1),BT=o("p",null,"Creazione Web App: il layout",-1),UT=o("img",{src:FT,class:"mx-auto",width:"400",style:{position:"relative",left:"-200px"}},null,-1),JT=o("img",{src:jT,class:"mx-auto",width:"360",style:{position:"relative",left:"200px",top:"-500px"}},null,-1),QT={__name:"68",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[VT,BT,UT,JT]),_:1},16))}},YT=E(QT,[["__file","/@slidev/slides/68.md"]]),ZT="/4/svelte/assets/svelte_024-90632bcf.png",GT=o("h1",null,"SvelteKit",-1),XT=o("p",null,"Creazione Web App: il layout",-1),e3=o("img",{src:ZT,class:"mx-auto",width:"600"},null,-1),t3={__name:"69",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[GT,XT,e3]),_:1},16))}},n3=E(t3,[["__file","/@slidev/slides/69.md"]]),o3=o("h1",null,"SvelteKit",-1),i3=o("p",null,"Creazione Web App: il layout",-1),s3=o("ul",null,[o("li",null,[o("p",null,"Abbiamo definito il layout della nostra applicazione, composto da:"),o("ul",null,[o("li",null,"header"),o("li",null,"navbar"),o("li",null,"main content area (article)"),o("li",null,"footer")])]),o("li",null,[o("p",null,"Le pagine che andremo a sviluppare verranno visualizzate nel main content area")])],-1),a3={__name:"70",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[o3,i3,s3]),_:1},16))}},l3=E(a3,[["__file","/@slidev/slides/70.md"]]),r3={class:"banner"},c3=Ke({__name:"Banner",props:{bg:{default:"green"},fg:{default:"yellow"},padding:{default:"10px"}},setup(e,{emit:t}){const n=e;G_(l=>({"76049b2e-bgcol":L(i),"76049b2e-fgcol":L(s),"76049b2e-padding":L(a)})),$(I);const i=Ct(n,"bg",t),s=Ct(n,"fg",t),a=Ct(n,"padding",t);return(l,r)=>(g(),ie("div",r3,[Bt(l.$slots,"default")]))}});const xo=E(c3,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/components/Banner.vue"]]),u3="/4/svelte/assets/svelte_025-e24a97c2.png",d3=o("h1",null,"SvelteKit",-1),p3=o("p",null,"Creazione Web App: il layout",-1),m3=o("ul",null,[o("li",null,"Importante notare che nello style del layout abbiamo modificato lo stile globale del body"),o("li",null,[c("Per far ciò abbiamo usato il costrutto "),o("code",null,":global(<selettore>)")])],-1),f3=o("br",null,null,-1),h3=o("img",{src:u3,class:"mx-auto",width:"400"},null,-1),v3=o("ul",null,[o("li",null,[c("Ciò è necessario in quanto lo stylde del componente (layout è un componente) è "),o("strong",null,"scoped")]),o("li",null,"In altre parole lo stile di un componente è confinato al solo componente stesso e non può modificare lo stilde di altri componenti"),o("li",null,[c("L’uso di "),o("em",null,":globa"),c(" ci permette di fare un’eccezione a questa regola")])],-1),_3=o("br",null,null,-1),g3={__name:"71",setup(e){const t={};return $(I),(n,i)=>{const s=xo;return g(),z(T,M(O(t)),{default:w(()=>[d3,p3,m3,f3,h3,v3,_3,j(s,{bg:"green",fg:"yellow"},{default:w(()=>[c(" Si suggerisce di non abusare di questa possibilità in quanto rende il codice meno leggibile e meno comprensibile ")]),_:1})]),_:1},16)}}},b3=E(g3,[["__file","/@slidev/slides/71.md"]]),y3=o("h1",null,"SvelteKit",-1),S3=o("p",null,"Component Slot",-1),w3=o("ul",null,[o("li",null,"Come si vede al momento la nostra app non visualizza la home page nella main content area"),o("li",null,"Questo perchè al momento il componente layout NON include nessuna ltro componente (home page)"),o("li",null,[c("Per poter risolvere questo problema dobbiamo ricorrere ad un concetto di Svelte chiamato "),o("code",null,"Component Slots")]),o("li",null,"In pratica in modo analogo ai tag HTML che possono avere un contenuto")],-1),x3=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("div")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},[c("	"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("p")]),o("span",{class:"token punctuation"},">")]),c("Io sono figlio di div"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("p")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("div")]),o("span",{class:"token punctuation"},">")])])])],-1),k3=o("ul",null,[o("li",null,[c("Anche un componente Svelte può avere un contenuto (o figlio) tramite il costrutto "),o("code",null,"<slot />")]),o("li",null,[c('In altre parole all’interno di un componente Svelte possiamo decidere dove visualizzare il contenuto del "figlio" usando '),o("code",null,"<slot />")])],-1),$3={__name:"72",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[y3,S3,w3,j(s,me({},{ranges:[""]}),{default:w(()=>[x3]),_:1},16),k3]),_:1},16)}}},z3=E($3,[["__file","/@slidev/slides/72.md"]]),I3=o("h1",null,"SvelteKit",-1),C3=o("p",null,"Component Slot",-1),E3=o("ul",null,[o("li",null,"Modifichiamo +layout.svelte aggiungendo lo slot nella sezione article")],-1),O3=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},"... "),c(`
`),o("span",{class:"line"},[c("   "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("article")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},[c("      "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("slot")]),c(),o("span",{class:"token punctuation"},"/>")])]),c(`
`),o("span",{class:"line"},[c("   "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("article")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"...")])],-1),M3=o("ul",null,[o("li",null,"In questo modo nella sezione article comparirà il contenuto del componente correntemente in utilizzio (home page o +page.svelte in src/routes)")],-1),T3={__name:"73",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[I3,C3,E3,j(s,me({},{ranges:[""]}),{default:w(()=>[O3]),_:1},16),M3]),_:1},16)}}},A3=E(T3,[["__file","/@slidev/slides/73.md"]]),K3="/4/svelte/assets/svelte_026-bb839bc1.png",P3=o("h1",null,"SvelteKit",-1),L3=o("p",null,"Component Slot",-1),R3=o("img",{src:K3,class:"mx-auto",width:"650"},null,-1),H3={__name:"74",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[P3,L3,R3]),_:1},16))}},W3=E(H3,[["__file","/@slidev/slides/74.md"]]),N3="/4/svelte/assets/svelte_027-b9352cfd.png",D3=o("h1",null,"SvelteKit",-1),q3=o("p",null,"Hello World: Esercitazione_08",-1),F3=o("ul",null,[o("li",null,"Provare a modificare la home page in modo che appaia come in figura")],-1),j3=o("br",null,null,-1),V3=o("img",{src:N3,class:"mx-auto",width:"580"},null,-1),B3=o("ul",null,[o("li",null,"Consegnare su github il progetto modificato")],-1),U3={__name:"75",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[D3,q3,F3,j3,V3,B3]),_:1},16))}},J3=E(U3,[["__file","/@slidev/slides/75.md"]]),Q3=o("h1",null,"SvelteKit",-1),Y3=o("p",null,"Pagina Chi Sono",-1),Z3=o("ul",null,[o("li",null,'Adesso creiamo la pagina "Chi Sono"'),o("li",null,"In questa pagina faremo una breve introduzione di noi stessi"),o("li",null,"E’ importante che nella descrizione di noi stessi includiamo cognome, nome ed età (questo ci sarà utile dopo)"),o("li",null,'Quindi per creare la pagina "Chi Sono" creiamo una directory in modo da ottenere questo risultato')],-1),G3=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},"src"),c(`
`),o("span",{class:"line"},"├── app.html"),c(`
`),o("span",{class:"line"},"└── routes"),c(`
`),o("span",{class:"line"},[c("    ├── chi_sono     "),o("span",{class:"token operator"},"<"),c("---------- routes corrispondente alla pagina")]),c(`
`),o("span",{class:"line"},[c("    │   └── +page.svelte  "),o("span",{class:"token operator"},"<"),c("------ componente o pagina HTML")]),c(`
`),o("span",{class:"line"},"    ├── +layout.svelte"),c(`
`),o("span",{class:"line"},"    └── +page.svelte")])],-1),X3={__name:"76",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[Q3,Y3,Z3,j(s,me({},{ranges:[""]}),{default:w(()=>[G3]),_:1},16)]),_:1},16)}}},eA=E(X3,[["__file","/@slidev/slides/76.md"]]),tA="/4/svelte/assets/svelte_029-5b49b40e.png",nA=o("h1",null,"SvelteKit",-1),oA=o("p",null,"Pagina Chi Sono",-1),iA=o("p",null,"+page.svelte",-1),sA=o("br",null,null,-1),aA=o("img",{src:tA,class:"mx-auto",width:"600"},null,-1),lA={__name:"77",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[nA,oA,iA,sA,aA]),_:1},16))}},rA=E(lA,[["__file","/@slidev/slides/77.md"]]),cA="/4/svelte/assets/svelte_030-3eb3d437.png",uA=o("h1",null,"SvelteKit",-1),dA=o("p",null,"Pagina Chi Sono",-1),pA=o("ul",null,[o("li",null,'Ora dobbiamo collegare la nuova pagina "Chi Sono" con la barra di navigazione'),o("li",null,"Basta modificare il link in questo modo")],-1),mA=o("br",null,null,-1),fA=o("img",{src:cA,class:"mx-auto",width:"600"},null,-1),hA=o("br",null,null,-1),vA=o("ul",null,[o("li",null,"In tal modo quando clicchiamo sul link Chi Sono la pagina omonima verrà visualizzata nella main content area")],-1),_A={__name:"78",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[uA,dA,pA,mA,fA,hA,vA]),_:1},16))}},gA=E(_A,[["__file","/@slidev/slides/78.md"]]),bA="/4/svelte/assets/svelte_028-0d92289a.png",yA=o("h1",null,"SvelteKit",-1),SA=o("p",null,"Pagina Chi Sono",-1),wA=o("img",{src:bA,class:"mx-auto",width:"650"},null,-1),xA={__name:"79",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[yA,SA,wA]),_:1},16))}},kA=E(xA,[["__file","/@slidev/slides/79.md"]]),$A=o("h1",null,"SvelteKit",-1),zA=o("p",null,"Il componente WhoAmI",-1),IA=o("ul",null,[o("li",null,[c('Ora trasformiamo la pagina "Chi Sono" in modo che visualizzi un solo componente chiamato '),o("em",null,[o("strong",null,"WhoAmI")])]),o("li",null,[c("Quindi creiamo un nuovo componente "),o("em",null,[o("strong",null,"WhoAmI")])])],-1),CA=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},"src"),c(`
`),o("span",{class:"line"},"├── app.html"),c(`
`),o("span",{class:"line"},"├── lib"),c(`
`),o("span",{class:"line"},"│   └── components"),c(`
`),o("span",{class:"line"},[c("│       └── who_am_i.svelte "),o("span",{class:"token operator"},"<"),c("--- componente WhoAmI")]),c(`
`),o("span",{class:"line"},"└── routes"),c(`
`),o("span",{class:"line"},"    ├── chi_sono"),c(`
`),o("span",{class:"line"},"    │   └── +page.svelte"),c(`
`),o("span",{class:"line"},"    ├── +layout.svelte"),c(`
`),o("span",{class:"line"},"    └── +page.svelte")])],-1),EA={__name:"80",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[$A,zA,IA,j(s,me({},{ranges:[""]}),{default:w(()=>[CA]),_:1},16)]),_:1},16)}}},OA=E(EA,[["__file","/@slidev/slides/80.md"]]),MA="/4/svelte/assets/svelte_031-160c930b.png",TA="/4/svelte/assets/svelte_032-a782ee2a.png",AA=o("h1",null,"SvelteKit",-1),KA=o("p",null,"Il componente WhoAmI",-1),PA=o("p",null,"who_am_i.svelte",-1),LA=o("img",{src:MA,class:"mx-auto",width:"600"},null,-1),RA=o("br",null,null,-1),HA=o("ul",null,[o("li",null,"Ora modifichiamo la pagina Chi Sono in modo che visualizzi il componente")],-1),WA=o("br",null,null,-1),NA=o("img",{src:TA,class:"mx-auto",width:"600"},null,-1),DA={__name:"81",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[AA,KA,PA,LA,RA,HA,WA,NA]),_:1},16))}},qA=E(DA,[["__file","/@slidev/slides/81.md"]]),FA="/4/svelte/assets/svelte_033-24b7a0e4.png",jA=o("h1",null,"SvelteKit",-1),VA=o("p",null,"Il componente WhoAmI",-1),BA=o("img",{src:FA,class:"mx-auto",width:"550"},null,-1),UA={__name:"82",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[jA,VA,BA]),_:1},16))}},JA=E(UA,[["__file","/@slidev/slides/82.md"]]),QA=o("h1",null,"SvelteKit",-1),YA=o("p",null,"Props",-1),ZA=o("ul",null,[o("li",null,[c("Ora tramite un meccanismo di Svelte che si chiama "),o("code",null,"Props"),c(" (Properties) vogliamo rendere il componente parametrico")]),o("li",null,"In altre parole vogliamo fare in modo che nome, cognome e età non siano scritti direttamente nel componente WhoAmI"),o("li",null,"Al contrario vogliamo che questi siano dei parametri che vengono passati dal chiamante (la pagina Chi Sono)")],-1),GA=o("br",null,null,-1),XA={__name:"83",setup(e){const t={};return $(I),(n,i)=>{const s=xo;return g(),z(T,M(O(t)),{default:w(()=>[QA,YA,ZA,GA,j(s,{bg:"green",fg:"yellow"},{default:w(()=>[c("Tramile le Props di Svelte possiamo quindi creare dei componenti parametrici e quindi più facoilmente riutilizzabili ina ltre pagine o altre applicazioni web")]),_:1})]),_:1},16)}}},e5=E(XA,[["__file","/@slidev/slides/83.md"]]),t5=o("h1",null,"SvelteKit",-1),n5=o("p",null,"Props",-1),o5=o("ul",null,[o("li",null,[c("In Svelte, all’interno di un componente per dichiarare un parametro o "),o("code",null,"propeietà"),c(" si utilizza la keyword "),o("code",null,"export")]),o("li",null,"Questa keyword preceduta alla dichiarazione di una variabile, indica al compilatore che il valroe della variabile viene fornito dall’esterno del componente"),o("li",null,"In altre parole dice a Svelte che questa variabile viene passata dal chiamante (a tutti gli effetti rendendo la variabile export come un parametro di una funzione in C)")],-1),i5=o("p",null,"Esempio",-1),s5=o("pre",{class:"slidev-code language-js"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token keyword"},"export"),c(),o("span",{class:"token keyword"},"let"),c(" nome"),o("span",{class:"token punctuation"},";"),c("  "),o("span",{class:"token comment"},"//dichiara la variabile nome come parametro fornito dal chiamante")]),c(`
`),o("span",{class:"line"},[o("span",{class:"token keyword"},"export"),c(),o("span",{class:"token keyword"},"let"),c(" cognome "),o("span",{class:"token operator"},"="),c(),o("span",{class:"token string"},'"Rossi"'),o("span",{class:"token punctuation"},";"),c(),o("span",{class:"token comment"},"//variabile esterna con valore di feault Rossi")]),c(`
`),o("span",{class:"line"},[o("span",{class:"token keyword"},"export"),c(),o("span",{class:"token keyword"},"let"),c(" eta"),o("span",{class:"token punctuation"},";"),c(),o("span",{class:"token comment"},"//dichiara la variabile nome come parametro fornito dal chiamante")])])],-1),a5=o("br",null,null,-1),l5=o("ul",null,[o("li",null,[c("Il meccanismo delle "),o("code",null,"Props"),c(" di Svelte è molto potente e di facile utilizzo")])],-1),r5={__name:"84",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[t5,n5,o5,i5,j(s,me({},{ranges:[""]}),{default:w(()=>[s5]),_:1},16),a5,l5]),_:1},16)}}},c5=E(r5,[["__file","/@slidev/slides/84.md"]]),u5="/4/svelte/assets/svelte_034-820ec76b.png",d5=o("h1",null,"SvelteKit",-1),p5=o("p",null,"Props",-1),m5=o("ul",null,[o("li",null,[c("Pertanto riscriviamo il componente WhoAmI utilizzando le "),o("em",null,[o("strong",null,"Props")])])],-1),f5=o("br",null,null,-1),h5=o("img",{src:u5,class:"mx-auto",width:"700"},null,-1),v5=o("br",null,null,-1),_5=o("ul",null,[o("li",null,[c("Abbiamo usato il "),o("em",null,"variable substitution di svelte"),c(" per utilizzare i parametri all’interno del corpo HTML del componente")])],-1),g5={__name:"85",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[d5,p5,m5,f5,h5,v5,_5]),_:1},16))}},b5=E(g5,[["__file","/@slidev/slides/85.md"]]),y5="/4/svelte/assets/svelte_035-8a0ca6bf.png",S5=o("h1",null,"SvelteKit",-1),w5=o("p",null,"Props",-1),x5=o("img",{src:y5,class:"mx-auto",width:"750"},null,-1),k5=o("br",null,null,-1),$5={__name:"86",setup(e){const t={};return $(I),(n,i)=>{const s=xo;return g(),z(T,M(O(t)),{default:w(()=>[S5,w5,x5,k5,j(s,{bg:"green",fg:"yellow"},{default:w(()=>[c(" Siccome non abbiamo modificato il chiamante, vengono utilizzati i valori di default per le props del componente ")]),_:1})]),_:1},16)}}},z5=E($5,[["__file","/@slidev/slides/86.md"]]),I5="/4/svelte/assets/svelte_036-c62c9040.png",C5=o("h1",null,"SvelteKit",-1),E5=o("p",null,"Props",-1),O5=o("ul",null,[o("li",null,"Modifichiamo ora il chiamante e cioè la pagina Chi Sono in modo da passare dei parametri corretti al componente WhoAmI")],-1),M5=o("br",null,null,-1),T5=o("img",{src:I5,class:"mx-auto",width:"750"},null,-1),A5={__name:"87",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[C5,E5,O5,M5,T5]),_:1},16))}},K5=E(A5,[["__file","/@slidev/slides/87.md"]]),P5="/4/svelte/assets/svelte_037-55bef59f.png",L5=o("h1",null,"SvelteKit",-1),R5=o("p",null,"Props",-1),H5=o("img",{src:P5,class:"mx-auto",width:"750"},null,-1),W5={__name:"88",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[L5,R5,H5]),_:1},16))}},N5=E(W5,[["__file","/@slidev/slides/88.md"]]),D5="/4/svelte/assets/svelte_038-d542d0ee.png",q5=o("h1",null,"SvelteKit",-1),F5=o("p",null,"Props",-1),j5=o("ul",null,[o("li",null,"Cosa succede se chiamo due volte il componente WhoAmI dalla pagina Chi Sono?"),o("li",null,"Quello che ci aspettiamo: vengono visualizzati due componenti ognuno con i propri parametri")],-1),V5=o("br",null,null,-1),B5=o("img",{src:D5,class:"mx-auto",width:"700"},null,-1),U5={__name:"89",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[q5,F5,j5,V5,B5]),_:1},16))}},J5=E(U5,[["__file","/@slidev/slides/89.md"]]),Q5="/4/svelte/assets/svelte_039-4fc8afef.png",Y5=o("h1",null,"SvelteKit",-1),Z5=o("p",null,"Props",-1),G5=o("img",{src:Q5,class:"mx-auto",width:"600"},null,-1),X5={__name:"90",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[Y5,Z5,G5]),_:1},16))}},e6=E(X5,[["__file","/@slidev/slides/90.md"]]),t6=o("h1",null,"SvelteKit",-1),n6=o("p",null,"Dynamic Attributes",-1),o6=o("ul",null,[o("li",null,"Come abbiamo visti le props e variabili contenute in un componente possono essere utilizzate per generare del contenuto dinamico"),o("li",null,"Tuttavia possono anche essere utilizzate come attributi dei tag HTML"),o("li",null,[c("In questo caso Svelte parla di "),o("code",null,"Dynamic Attributes")]),o("li",null,"Per esempio per definire il src di un immagine in modo dinamico si può fare così")],-1),i6=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("img")]),c(),o("span",{class:"token attr-name"},"src"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),c("{url}")]),c(),o("span",{class:"token punctuation"},">")])])])],-1),s6=o("ul",null,[o("li",null,"In questo modo la sorgente dell’immagine non sarà statica ma dipenderà dal valore della variabile url"),o("li",null,"Ovviamente cambiando il valore della variabile l’immagine verrà automaticamente aggiornata in modo dinamico")],-1),a6={__name:"91",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[t6,n6,o6,j(s,me({},{ranges:[""]}),{default:w(()=>[i6]),_:1},16),s6]),_:1},16)}}},l6=E(a6,[["__file","/@slidev/slides/91.md"]]),r6="/4/svelte/assets/svelte_040-f4392269.png",c6=o("h1",null,"SvelteKit",-1),u6=o("p",null,"Dynamic Attributes",-1),d6=o("ul",null,[o("li",null,[c("Per comprendere meglio i "),o("em",null,[o("strong",null,"Dynamic Attributes")]),c(" modifichiamo il componente WhoAmI aggiungendo la nostra foto")])],-1),p6=o("img",{src:r6,class:"mx-auto",width:"700"},null,-1),m6={__name:"92",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[c6,u6,d6,p6]),_:1},16))}},f6=E(m6,[["__file","/@slidev/slides/92.md"]]),h6="/4/svelte/assets/svelte_041-ee2c2e0b.png",v6=o("h1",null,"SvelteKit",-1),_6=o("p",null,"Dynamic Attributes",-1),g6=o("ul",null,[o("li",null,"Possiamo usare come dymanic attribute una variabile esterna")],-1),b6=o("img",{src:h6,class:"mx-auto",width:"700"},null,-1),y6={__name:"93",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[v6,_6,g6,b6]),_:1},16))}},S6=E(y6,[["__file","/@slidev/slides/93.md"]]),w6="/4/svelte/assets/svelte_042-833a06e0.png",x6=o("h1",null,"SvelteKit",-1),k6=o("p",null,"Dynamic Attributes",-1),$6=o("img",{src:w6,class:"mx-auto",width:"550"},null,-1),z6={__name:"94",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[x6,k6,$6]),_:1},16))}},I6=E(z6,[["__file","/@slidev/slides/94.md"]]),C6=o("h1",null,"SvelteKit",-1),E6=o("p",null,"Dynamic Attributes: shorthand",-1),O6=o("ul",null,[o("li",null,"Prima abbiamo scritto")],-1),M6=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("img")]),c(),o("span",{class:"token attr-name"},"src"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),c("{url}")]),c(),o("span",{class:"token punctuation"},">")])])])],-1),T6=o("ul",null,[o("li",null,"Immaginando che la variabile si chiami src, scriveremo")],-1),A6=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("img")]),c(),o("span",{class:"token attr-name"},"src"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),c("{src}")]),c(),o("span",{class:"token punctuation"},">")])])])],-1),K6=o("ul",null,[o("li",null,[c("Questo risulta abbastanza ridondante, pertanto Svelte ci semplifica la vita mettendo a disposizione degli "),o("em",null,[o("strong",null,"shorthand")]),c(" o delle scorciatoie")]),o("li",null,"Quindi in questo caso potremmo scrivere")],-1),P6=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("img")]),c(),o("span",{class:"token attr-name"},"{src}"),c(),o("span",{class:"token punctuation"},">")])])])],-1),L6=o("ul",null,[o("li",null,"Pertanto le due notazioni sono perfettamente equivalenti e sortiscono lo stesso effetto")],-1),R6=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("img")]),c(),o("span",{class:"token attr-name"},"src"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),c("{src}")]),c(),o("span",{class:"token punctuation"},">")]),c(" vs "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("img")]),c(),o("span",{class:"token attr-name"},"{src}"),c(),o("span",{class:"token punctuation"},">")])])])],-1),H6={__name:"95",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[C6,E6,O6,j(s,me({},{ranges:[""]}),{default:w(()=>[M6]),_:1},16),T6,j(s,me({},{ranges:[""]}),{default:w(()=>[A6]),_:1},16),K6,j(s,me({},{ranges:[""]}),{default:w(()=>[P6]),_:1},16),L6,j(s,me({},{ranges:[""]}),{default:w(()=>[R6]),_:1},16)]),_:1},16)}}},W6=E(H6,[["__file","/@slidev/slides/95.md"]]),N6=o("h1",null,"SvelteKit",-1),D6=o("p",null,"Dynamic Attributes: Esercitazione_09",-1),q6=o("ul",null,[o("li",null,[o("p",null,"Modificare il componente WhoAmI in modo da passare la larghezza dell’immagine come parametro")]),o("li",null,[o("p",null,"Utilizzare lo shorthand per il dynamic attribute")]),o("li",null,[o("p",null,"Consegnare su github il progetto modificato")])],-1),F6={__name:"96",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[N6,D6,q6]),_:1},16))}},j6=E(F6,[["__file","/@slidev/slides/96.md"]]),V6=o("h1",null,"SvelteKit",-1),B6=o("p",null,"Bindings",-1),U6=o("ul",null,[o("li",null,"Come visto i dati e le props si propagano dall’alto al basso, dal componente chiamante verso il componente figlio"),o("li",null,"Tuttavia spesso in un applicazione web è utile che questa propagazione possa avvenire nel verso opposto")],-1),J6=o("br",null,null,-1),Q6=o("br",null,null,-1),Y6=o("ul",null,[o("li",null,"Uno scenario classico è fare il binding della props di un input text ad una variabile del componente chiamante"),o("li",null,"In questo modo sarà facilissimo ed immediato accedere al valore dell’input text (pensate quanto è macchinoso in vanilla JS)")],-1),Z6={__name:"97",setup(e){const t={};return $(I),(n,i)=>{const s=xo;return g(),z(T,M(O(t)),{default:w(()=>[V6,B6,U6,J6,j(s,{fg:"yellow",bg:"green"},{default:w(()=>[c(" Il binding permette la propagazione del valore di una variabile di un componente al componente chiamante o padre ")]),_:1}),Q6,Y6]),_:1},16)}}},G6=E(Z6,[["__file","/@slidev/slides/97.md"]]),X6="/4/svelte/assets/svelte_043-78632da3.png",eK=o("h1",null,"SvelteKit",-1),tK=o("p",null,"Binding: Esercitazione_10",-1),nK=o("ul",null,[o("li",null,"Per comprendere il meccanismo del binding abbiamo bisogno di una nuova pagina nella nostra app"),o("li",null,[c("Creare una nuova pagina chiamata "),o("strong",null,"Input")]),o("li",null,"Creare il relativo menu nella barra nav e linkare la pagina")],-1),oK=o("br",null,null,-1),iK=o("img",{src:X6,class:"mx-auto",width:"650"},null,-1),sK=o("ul",null,[o("li",null,"Consegnare su github il progetto modificato")],-1),aK={__name:"98",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[eK,tK,nK,oK,iK,sK]),_:1},16))}},lK=E(aK,[["__file","/@slidev/slides/98.md"]]),rK="/4/svelte/assets/svelte_044-d3d5602c.png",cK=o("h1",null,"SvelteKit",-1),uK=o("p",null,"Bindings",-1),dK=o("ul",null,[o("li",null,"Ora modifichiamo la pafina input aggiungendo un input text box e creando un binding con una variabile")],-1),pK=o("br",null,null,-1),mK=o("img",{src:rK,class:"mx-auto",width:"400"},null,-1),fK={__name:"99",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[cK,uK,dK,pK,mK]),_:1},16))}},hK=E(fK,[["__file","/@slidev/slides/99.md"]]),vK="/4/svelte/assets/svelte_045-1784d8ce.png",_K=o("h1",null,"SvelteKit",-1),gK=o("p",null,"Bindings",-1),bK=o("img",{src:vK,class:"mx-auto",width:"600"},null,-1),yK=o("ul",null,[o("li",null,[c("Come si vede le variabili sono sostituite dal valore "),o("em",null,"undefined")]),o("li",null,"Questo succede perchè abbiamo creato il binding tra il contenuto dei input text (undefined) e le variabili nome, cognome e eta"),o("li",null,"Compilando i campi la pagina si aggiornerà in modo automatico e dinamico"),o("li",null,"Anche in questo caso realizzare la stessa cosa in vanilla JS sarebbe molto più laborioso")],-1),SK={__name:"100",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[_K,gK,bK,yK]),_:1},16))}},wK=E(SK,[["__file","/@slidev/slides/100.md"]]),xK="/4/svelte/assets/svelte_046-0d05f32b.gif",kK=o("h1",null,"SvelteKit",-1),$K=o("p",null,"Bindings",-1),zK=o("img",{src:xK,class:"mx-auto",width:"700"},null,-1),IK={__name:"101",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[kK,$K,zK]),_:1},16))}},CK=E(IK,[["__file","/@slidev/slides/101.md"]]),EK="/4/svelte/assets/svelte_047-7d7077b5.png",OK=o("h1",null,"SvelteKit",-1),MK=o("p",null,"Bindings",-1),TK=o("div",{style:{width:"50%"}},[o("ul",null,[o("li",null,"Vediamo un altro esempio dell’uso del binding"),o("li",null,"Modificare la pagina Input nel seguente modo"),o("li",null,[c("In questo caso creiamo un binding tra la checkbox e la variabile "),o("em",null,"confermato")]),o("li",null,[c("Poi settiamo tramite dynamic attributes l’attribute "),o("em",null,"disabled"),c(" del pulsante")]),o("li",null,"Pertanto il pulsante diventa attivo solo se l’utente ha confermato selezionando la checkbox")])],-1),AK=o("img",{src:EK,class:"mx-auto",width:"450",style:{position:"relative",top:"-300px",right:"-250px"}},null,-1),KK={__name:"102",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[OK,MK,TK,AK]),_:1},16))}},PK=E(KK,[["__file","/@slidev/slides/102.md"]]),LK="/4/svelte/assets/svelte_048-c286dfed.gif",RK=o("h1",null,"SvelteKit",-1),HK=o("p",null,"Bindings",-1),WK=o("img",{src:LK,class:"mx-auto",width:"700"},null,-1),NK={__name:"103",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[RK,HK,WK]),_:1},16))}},DK=E(NK,[["__file","/@slidev/slides/103.md"]]),qK="/4/svelte/assets/svelte_049-902c4331.png",FK=o("h1",null,"SvelteKit",-1),jK=o("p",null,"Binding: Esercitazione_11",-1),VK=o("ul",null,[o("li",null,[c("Modificare la pagina "),o("em",null,"Input"),c(" in modo che venga aggiunto un nuovo input text per leggere in input la residenza")]),o("li",null,"Utilizzare il meccanismo del binding")],-1),BK=o("br",null,null,-1),UK=o("img",{src:qK,class:"mx-auto",width:"750"},null,-1),JK=o("ul",null,[o("li",null,"Consegnare su github il progetto modificato")],-1),QK={__name:"104",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[FK,jK,VK,BK,UK,JK]),_:1},16))}},YK=E(QK,[["__file","/@slidev/slides/104.md"]]),ZK="/4/svelte/assets/svelte_050-4fe36e6f.png",GK=o("h1",null,"SvelteKit",-1),XK=o("p",null,"La pagina e il component Counter",-1),eP=o("ul",null,[o("li",null,"Realizziamo ora la pagina Counter e linkiamola alla nav bar (si lascia come esercizio agli studenti)")],-1),tP=o("br",null,null,-1),nP=o("img",{src:ZK,class:"mx-auto",width:"800"},null,-1),oP={__name:"105",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[GK,XK,eP,tP,nP]),_:1},16))}},iP=E(oP,[["__file","/@slidev/slides/105.md"]]),sP=o("h1",null,"Svelte",-1),aP=o("p",null,"Stateful component",-1),lP=o("ul",null,[o("li",null,"Uno dei problemi tradizionali dello sviluppo di app web è la gestione dello stato"),o("li",null,[c("Questo problema è intrinseco in quanto il protcollo HTTP è "),o("strong",null,"stateless"),c(" o senza stato")]),o("li",null,"Svelte risolve brillantemente questo problema permettendo di immagazzinare lo stato del componente direttamente all’interno del componente stesso"),o("li",null,"Pertanto un componente Svelte è assimilabile a tutti gli effetti ad un oggetto in base alla definizione OOP"),o("li",null,[c("Un componente svelte implementa il meccanismo del "),o("code",null,"encapsulation")])],-1),rP={__name:"106",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[sP,aP,lP]),_:1},16))}},cP=E(rP,[["__file","/@slidev/slides/106.md"]]),uP=o("h1",null,"Svelte",-1),dP=o("p",null,"Stateful component",-1),pP=o("ul",null,[o("li",null,"Ogni componente, oltre a definire il markup, la logica CSS e JavaScript, può ospitare il proprio stato."),o("li",null,"Lo stato è un qualsiasi dato necessario per il corretto funzionamento del componente stesso e dell’applicazione"),o("li",null,'Ad esempio, se un campo di input di un modulo contiene la stringa "test", ci sarà una variabile da qualche parte che contiene questo valore.'),o("li",null,"Questo è lo stato del campo di input."),o("li",null,"Il campo è selezionato? Una variabile da qualche parte registrerà questo fatto. E così via."),o("li",null,[c("Lo stato è ospitato nella sezione "),o("code",null,"<script>"),c(" del componente")])],-1),mP=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("script")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"	let counter = 0; // stato di un contatore"),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("script")]),o("span",{class:"token punctuation"},">")])])])],-1),fP={__name:"107",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[uP,dP,pP,j(s,me({},{ranges:[""]}),{default:w(()=>[mP]),_:1},16)]),_:1},16)}}},hP=E(fP,[["__file","/@slidev/slides/107.md"]]),vP=o("h1",null,"Svelte",-1),_P=o("p",null,"Stateful component",-1),gP=o("ul",null,[o("li",null,"Ma come si aggiorna lo stato di un componente?"),o("li",null,"Altri framework come Vue o React, rendono questa operazione poco intuitiva"),o("li",null,"Al contrario una cosa grandiosa di Svelte è che non è necessario fare nulla di speciale per aggiornare lo stato di un componente.")],-1),bP=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("script")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"	let counter = 0;"),c(`
`),o("span",{class:"line"}),c(`
`),o("span",{class:"line"},"	function incrementa() {"),c(`
`),o("span",{class:"line"},"		counter++;"),c(`
`),o("span",{class:"line"},"	}"),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("script")]),o("span",{class:"token punctuation"},">")])])])],-1),yP=o("br",null,null,-1),SP=o("ul",null,[o("li",null,"In altre parole in Svelte, per aggiornare lo stato di un componente, basta solo un’operazione di assegnazione in qualsiasi parte del componente")],-1),wP={__name:"108",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[vP,_P,gP,j(s,me({},{ranges:[""]}),{default:w(()=>[bP]),_:1},16),yP,SP]),_:1},16)}}},xP=E(wP,[["__file","/@slidev/slides/108.md"]]),kP="/4/svelte/assets/svelte_051-70b507e8.png",$P=o("h1",null,"SvelteKit",-1),zP=o("p",null,"La pagina e il component Counter",-1),IP=o("ul",null,[o("li",null,[c("Ora realizziamo un componente chiamato "),o("em",null,"Counter"),c(" ("),o("em",null,"counter.svelte"),c(")")]),o("li",null,"Questo componente permette di incrementare/decrementare un contatore"),o("li",null,"Il valore iniziale è una props esterna con default (zero) 0")],-1),CP=o("br",null,null,-1),EP=o("img",{src:kP,class:"mx-auto",width:"500"},null,-1),OP={__name:"109",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[$P,zP,IP,CP,EP]),_:1},16))}},MP=E(OP,[["__file","/@slidev/slides/109.md"]]),TP="/4/svelte/assets/svelte_054-b6901523.png",AP=o("h1",null,"SvelteKit",-1),KP=o("p",null,"La pagina e il component Counter",-1),PP=o("img",{src:TP,class:"mx-auto",width:"600"},null,-1),LP={__name:"110",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[AP,KP,PP]),_:1},16))}},RP=E(LP,[["__file","/@slidev/slides/110.md"]]),HP="/4/svelte/assets/svelte_052-12850487.png",WP=o("h1",null,"SvelteKit",-1),NP=o("p",null,"La pagina e il component Counter",-1),DP=o("p",null,[o("strong",null,"counter.svelte (script)")],-1),qP=o("img",{src:HP,class:"mx-auto",width:"700"},null,-1),FP=o("ul",null,[o("li",null,"Utilizziamo icone e font di google (sono molto utili)"),o("li",null,[c("Da notare l’uso della sezione "),o("code",null,"<svelte:head>")])],-1),jP={__name:"111",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[WP,NP,DP,qP,FP]),_:1},16))}},VP=E(jP,[["__file","/@slidev/slides/111.md"]]),BP="/4/svelte/assets/svelte_053-b2e286d2.png",UP=o("h1",null,"SvelteKit",-1),JP=o("p",null,"La pagina e il component Counter",-1),QP=o("p",null,[o("strong",null,"counter.svelte (html)")],-1),YP=o("img",{src:BP,class:"mx-auto",width:"600"},null,-1),ZP={__name:"112",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[UP,JP,QP,YP]),_:1},16))}},GP=E(ZP,[["__file","/@slidev/slides/112.md"]]),XP="/4/svelte/assets/svelte_055-44899d62.png",eL="/4/svelte/assets/svelte_056-ddd19d3e.png",tL=o("h1",null,"SvelteKit",-1),nL=o("p",null,"La pagina e il component Counter",-1),oL=o("p",null,[o("strong",null,"counter.svelte (css)")],-1),iL=o("img",{src:XP,class:"mx-auto",width:"300",style:{position:"relative",top:"-10px",right:"100px"}},null,-1),sL=o("img",{src:eL,class:"mx-auto",width:"300",style:{position:"relative",top:"-350px",right:"-250px"}},null,-1),aL={__name:"113",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[tL,nL,oL,iL,sL]),_:1},16))}},lL=E(aL,[["__file","/@slidev/slides/113.md"]]),rL="/4/svelte/assets/svelte_057-c0160448.png",cL=o("h1",null,"SvelteKit",-1),uL=o("p",null,"La pagina e il component Counter",-1),dL=o("img",{src:rL,class:"mx-auto",width:"800"},null,-1),pL={__name:"114",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[cL,uL,dL]),_:1},16))}},mL=E(pL,[["__file","/@slidev/slides/114.md"]]),fL=o("h1",null,"SvelteKit",-1),hL=o("p",null,"DOM Events",-1),vL=o("ul",null,[o("li",null,[c("A questo punto il nostro componente "),o("strong",null,"Counter"),c(" viene visualizzato correttamente")]),o("li",null,[c("E se il chiamante passa un valore iniziale per "),o("em",null,"counter"),c(" questo viene visualizzato correttamente")]),o("li",null,[c("Tuttavia se interagiamo con il componente, premiamo il pulsante "),o("code",null,"+"),c(" o il pulsante "),o("code",null,"-"),c(" non succede nulla")]),o("li",null,[c("Ciò è normale perchè quando premiamo su uno dei pulsanti "),o("strong",null,"VIENE"),c(" generato un evento, ma "),o("strong",null,"NON"),c(" viene gestito dal nostro componente")]),o("li",null,"Quindi in pratica l’evento viene perso e pertanto nessuna operazione particolare viene eseguita"),o("li",null,[c("Quindi "),o("strong",null,"E’ NECESSARIO"),c(" gestire gli eventi del DOM e del nostro componente")]),o("li",null,"Svelte rende questa gestione estremamente facile e intuitiva e molto più facile e veloce rispetto a vanillaJS o altri tipi di framework")],-1),_L={__name:"115",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[fL,hL,vL]),_:1},16))}},gL=E(_L,[["__file","/@slidev/slides/115.md"]]),Gm="/4/svelte/assets/svelte_058-ec1cc885.png",bL=o("h1",null,"SvelteKit",-1),yL=o("p",null,"DOM Events",-1),SL=o("ul",null,[o("li",null,"Ogni componente HTML emette degli eventi (mouse click, keyboard press, resize, load, …)"),o("li",null,[c("Per poter gestire questi eventi è necessario specificare due elementi "),o("ol",null,[o("li",null,[o("code",null,"event handler"),c(": una funzione che gestisce l’evento e che viene invocata solo al verificarsi dell’evento stesso")]),o("li",null,[o("code",null,"event hook"),c(': "un posto" a cui agganciare/collegare l’event handler')])])])],-1),wL=o("br",null,null,-1),xL=o("img",{src:Gm,class:"mx-auto",width:"350"},null,-1),kL={__name:"116",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[bL,yL,SL,wL,xL]),_:1},16))}},$L=E(kL,[["__file","/@slidev/slides/116.md"]]),zL=o("h1",null,"SvelteKit",-1),IL=o("p",null,"DOM Events",-1),CL=o("img",{src:Gm,class:"mx-auto",width:"350"},null,-1),EL=o("br",null,null,-1),OL=o("ul",null,[o("li",null,[c("Quando l’utente fa click sul pulsante, viene invocata ed eseguita la funzione "),o("em",null,"button_handler")]),o("li",null,"In questo semplicissimo modo Svelte permette una facile gestioni degli eventi DOM"),o("li",null,[c("Svelte permette anche di utilizzare un "),o("code",null,"inline handler")])],-1),ML=o("br",null,null,-1),TL=o("pre",{class:"slidev-code language-js"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token operator"},"<"),c("button on"),o("span",{class:"token operator"},":"),c("click"),o("span",{class:"token operator"},"="),o("span",{class:"token punctuation"},"{"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),c(),o("span",{class:"token operator"},"=>"),c(" counter"),o("span",{class:"token operator"},"++"),o("span",{class:"token punctuation"},"}"),o("span",{class:"token operator"},">"),c("Premi Qui"),o("span",{class:"token operator"},"<"),o("span",{class:"token operator"},"/"),c("button"),o("span",{class:"token operator"},">")])])],-1),AL={__name:"117",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[zL,IL,CL,EL,OL,ML,j(s,me({},{ranges:[""]}),{default:w(()=>[TL]),_:1},16)]),_:1},16)}}},KL=E(AL,[["__file","/@slidev/slides/117.md"]]),PL="/4/svelte/assets/svelte_059-ae776f14.png",LL=o("h1",null,"SvelteKit",-1),RL=o("p",null,"DOM Events",-1),HL=o("div",{style:{width:"50%"}},[o("ul",null,[o("li",null,"Aggiungiamo ora un event handler per il pulsante + ed uno per il pulsante -"),o("li",null,"Modifichiamo counter.svelte nel seguente modo")])],-1),WL=o("img",{src:PL,class:"mx-auto",width:"450",style:{position:"relative",left:"250px",top:"-170px"}},null,-1),NL={__name:"118",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[LL,RL,HL,WL]),_:1},16))}},DL=E(NL,[["__file","/@slidev/slides/118.md"]]),qL=o("h1",null,"SvelteKit",-1),FL=o("p",null,"DOM Events",-1),jL=o("ul",null,[o("li",null,"Bene in questo modo quando l’utente clicca sul pulsante + il contatore si incrementa e viceversa quando preme - si decrementa di un’unità"),o("li",null,"Da notare che il valore del contatore viene aggiornato automaticamente senza la necessità di nessuna operazione da parte dello sviluppatore (in vanilla JS sarebbe stato molto più laborioso ottenere lo stesso effetto)"),o("li",null,"Quindi gli handler agiscono solo sullo stato del componente (il valore della variabile counter) e non si occupano della parte di visualizzazione che è a carico di Svelte")],-1),VL={__name:"119",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[qL,FL,jL]),_:1},16))}},BL=E(VL,[["__file","/@slidev/slides/119.md"]]),UL="/4/svelte/assets/svelte_060-c76ee5df.gif",JL=o("h1",null,"SvelteKit",-1),QL=o("p",null,"DOM Events",-1),YL=o("img",{src:UL,class:"mx-auto",width:"700"},null,-1),ZL={__name:"120",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[JL,QL,YL]),_:1},16))}},GL=E(ZL,[["__file","/@slidev/slides/120.md"]]),XL=o("h1",null,"SvelteKit",-1),e8=o("p",null,"Component Bindings",-1),t8=o("ul",null,[o("li",null,"In molti casi è necessario propagare il valore dello stato del componente al componente choiamante"),o("li",null,"Come possiamo fare in modo che il valore della variabile counter venga condiviso con il componente chiamante (pagina)?"),o("li",null,[c("Per realizzare quanto descritto possiamo utilizzare il concetto di "),o("code",null,"Component Binding")]),o("li",null,"In modo analogo al binding dei valori dei tag HTML, possiamo creare, nel chiamante, un binding alle props del componente"),o("li",null,[c("Nel nostro caso la props counter è esposta al chiamante ("),o("em",null,"extern"),c(") e quindi possiamo fare un binding a tale variabile")]),o("li",null,"Pertanto ogni volta che la variabile counter cambierà anche la variabile con cui abbiamo fatto il binding cambierà")],-1),n8={__name:"121",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[XL,e8,t8]),_:1},16))}},o8=E(n8,[["__file","/@slidev/slides/121.md"]]),i8="/4/svelte/assets/svelte_061-3e9ad9fd.png",s8=o("h1",null,"SvelteKit",-1),a8=o("p",null,"Component Bindings",-1),l8=o("ul",null,[o("li",null,"Modifichiamo la pagina counter nel seguente modo")],-1),r8=o("br",null,null,-1),c8=o("img",{src:i8,class:"mx-auto",width:"700"},null,-1),u8={__name:"122",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[s8,a8,l8,r8,c8]),_:1},16))}},d8=E(u8,[["__file","/@slidev/slides/122.md"]]),p8=o("h1",null,"SvelteKit",-1),m8=o("p",null,"Component Bindings",-1),f8=o("ul",null,[o("li",null,"Come si vede dall’esempio il binding di props dei nostri componenti si implemente nel seguente modo")],-1),h8=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("Componente")]),c(),o("span",{class:"token attr-name"},[o("span",{class:"token namespace"},"bind:"),c("props")]),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),c("{variabile_locale}")]),o("span",{class:"token punctuation"},">")])])])],-1),v8=o("p",null,"dove:",-1),_8=o("ul",null,[o("li",null,[o("code",null,"props"),c(": è la proprietà del componente a cui vogliamo fare il binding")]),o("li",null,[o("code",null,"variabile_locale"),c(': è la variabile, locale al chiamante, che vogliamo "collegare" (bind) alla props del componente')])],-1),g8=o("br",null,null,-1),b8=o("br",null,null,-1),y8=o("ul",null,[o("li",null,[c("Perciò se cambio il valore di "),o("em",null,"variabile_locale"),c(" cambierà anche il valore di "),o("em",null,"props")]),o("li",null,[c("E viceversa: se cambia il valore di "),o("em",null,"props"),c(" cambia il valore di "),o("em",null,"variabile_locale")])],-1),S8={__name:"123",setup(e){const t={};return $(I),(n,i)=>{const s=Ie,a=xo;return g(),z(T,M(O(t)),{default:w(()=>[p8,m8,f8,j(s,me({},{ranges:[""]}),{default:w(()=>[h8]),_:1},16),v8,_8,g8,j(a,{fg:"yellow",bg:"green"},{default:w(()=>[c(" Importante notare che il bind è bidirezionale ")]),_:1}),b8,y8]),_:1},16)}}},w8=E(S8,[["__file","/@slidev/slides/123.md"]]),x8="/4/svelte/assets/svelte_062-f5057466.gif",k8=o("h1",null,"SvelteKit",-1),$8=o("p",null,"Component Bindings",-1),z8=o("img",{src:x8,class:"mx-auto",width:"700"},null,-1),I8={__name:"124",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[k8,$8,z8]),_:1},16))}},C8=E(I8,[["__file","/@slidev/slides/124.md"]]),E8=o("h1",null,"SvelteKit",-1),O8=o("p",null,"DOM Events: Esercitazione_12",-1),M8=o("ul",null,[o("li",null,[o("p",null,"Creare un nuovo componente chiamato DoubeClounter (double_counter.svelte)")]),o("li",null,[o("p",null,"Questo componente funziona in modo simile a Counter, ma quando l’utente preme + il suo valore aumenta di due unità, mentre quando preme - il suo valore viene decrementato di 3 unità")]),o("li",null,[o("p",null,"Aggiungere il componente alla pagina counter")]),o("li",null,[o("p",null,"Tramite il component binding vidualizzare nella pagina counter anche il valore del componente DoubleCounter")]),o("li",null,[o("p",null,"Consegnare su github il progetto modificato")])],-1),T8={__name:"125",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[E8,O8,M8]),_:1},16))}},A8=E(T8,[["__file","/@slidev/slides/125.md"]]),K8=o("h1",null,"SvelteKit",-1),P8=o("p",null,"Logic Statements",-1),L8=o("ul",null,[o("li",null,"Come sappiamo HTML non è un linguaggio di programmazione quindi non ha costrutti logici o iterativi"),o("li",null,"Tuttavia spesso è necessario visualizzare un blocco di HTML in modo condizionale, in funzione di uno stato o variabile"),o("li",null,[c("Anche in questo scenario, Svelte ci viene in aiuto in maniera semplice ed elegante attraverso il concetto di "),o("code",null,"logic blocks")]),o("li",null,"Il funzionamengto è molto semplice, svelte mette a disposizione il seguente costrutto")],-1),R8=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[c("{#if "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("condizione")]),o("span",{class:"token punctuation"},">")]),c("}")]),c(`
`),o("span",{class:"line"},"    ...."),c(`
`),o("span",{class:"line"},[c("    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("blocco")]),c(),o("span",{class:"token attr-name"},"HTML"),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"    ...."),c(`
`),o("span",{class:"line"},"{:else}"),c(`
`),o("span",{class:"line"},"    ...."),c(`
`),o("span",{class:"line"},[c("    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("blocco")]),c(),o("span",{class:"token attr-name"},"HTML"),c(),o("span",{class:"token attr-name"},"alternativo"),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"    ...."),c(`
`),o("span",{class:"line"},"{/if}")])],-1),H8={__name:"126",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[K8,P8,L8,j(s,me({},{ranges:[""]}),{default:w(()=>[R8]),_:1},16)]),_:1},16)}}},W8=E(H8,[["__file","/@slidev/slides/126.md"]]),N8=o("h1",null,"SvelteKit",-1),D8=o("p",null,"Logic Statements",-1),q8=o("ul",null,[o("li",null,[c("Pertanto se la condizione è vera viene visualizzato il "),o("em",null,"<blocco HTML>"),c(" altrimenti viene visualizzato il "),o("em",null,"<blocco HTML alternativo>")]),o("li",null,"In questo modo abbiamo aggiunto al puro HTML una delle capacità proprie di un linguaggio di programmazione"),o("li",null,"Ma vediamo un esempio modificando la pagina Counter in modo che se il contatore è < 5 visualizzi la scritta in HML con colore rosso e in caso contrario con colore verde")],-1),F8={__name:"127",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[N8,D8,q8]),_:1},16))}},j8=E(F8,[["__file","/@slidev/slides/127.md"]]),V8="/4/svelte/assets/svelte_063-3249eefd.png",B8=o("h1",null,"SvelteKit",-1),U8=o("p",null,"Logic Statements",-1),J8=o("ul",null,[o("li",null,"Modifichiamo la pagina counter nel seguente modo")],-1),Q8=o("br",null,null,-1),Y8=o("img",{src:V8,class:"mx-auto",width:"450"},null,-1),Z8={__name:"128",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[B8,U8,J8,Q8,Y8]),_:1},16))}},G8=E(Z8,[["__file","/@slidev/slides/128.md"]]),X8="/4/svelte/assets/svelte_064-def0953b.gif",eR=o("h1",null,"SvelteKit",-1),tR=o("p",null,"Logic Statements",-1),nR=o("ul",null,[o("li",null,"Come vedremo in seguite ci sono modi più efficienti per raggiungere lo stesso risultato"),o("li",null,"Ma quest’esempio è perfetto per capire l’uso dei blocchi condizionali in Svelte")],-1),oR=o("br",null,null,-1),iR=o("img",{src:X8,class:"mx-auto",width:"600"},null,-1),sR={__name:"129",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[eR,tR,nR,oR,iR]),_:1},16))}},aR=E(sR,[["__file","/@slidev/slides/129.md"]]),lR=o("h1",null,"SvelteKit",-1),rR=o("p",null,"Each block",-1),cR=o("ul",null,[o("li",null,[c("Un’altro costrutto molto utile, proveniente dai linguaggi di programmazione, ed assente in HTML è il "),o("code",null,"ciclo")]),o("li",null,"Spesso in HTML è necessario replicare codice per ottenere una lista di elementi (pensa ad una foto gallery, ad una lista non ordinata,…)"),o("li",null,"Anche in questo scenario Svelte ci viene in aiuto."),o("li",null,[c("Se abbiamo la necessità di iterare una lista (array) di elementi, possiamo usare "),o("code",null,"Each block")])],-1),uR=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[c("{#each "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("array")]),o("span",{class:"token punctuation"},">")]),c(" as elemento}")]),c(`
`),o("span",{class:"line"},"    ..."),c(`
`),o("span",{class:"line"},"    blocco HTML in cui uso {elemento}"),c(`
`),o("span",{class:"line"},"    ..."),c(`
`),o("span",{class:"line"},"{/each}")])],-1),dR=o("ul",null,[o("li",null,"In questo modo il blocco HTML sarà ripetuto tante volte quanti sono gli elementi dell’array o in altre parole sarà ripetuto un numero di volte pari alla lunghezza dell’array"),o("li",null,"Questo rende la generazione di strutture HTML dinamiche molto semplice")],-1),pR={__name:"130",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[lR,rR,cR,j(s,me({},{ranges:[""]}),{default:w(()=>[uR]),_:1},16),dR]),_:1},16)}}},mR=E(pR,[["__file","/@slidev/slides/130.md"]]),fR="/4/svelte/assets/svelte_065-2b137253.png",hR=o("h1",null,"SvelteKit",-1),vR=o("p",null,"Each block",-1),_R=o("ul",null,[o("li",null,"Vediamo un esempio che vidualizza una lista di elementi nella pagina Counter"),o("li",null,"Modifica la pagina counter nel seguente modo")],-1),gR=o("br",null,null,-1),bR=o("img",{src:fR,class:"mx-auto",width:"420"},null,-1),yR={__name:"131",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[hR,vR,_R,gR,bR]),_:1},16))}},SR=E(yR,[["__file","/@slidev/slides/131.md"]]),wR="/4/svelte/assets/svelte_066-a26e5d81.png",xR=o("h1",null,"SvelteKit",-1),kR=o("p",null,"Each block",-1),$R=o("img",{src:wR,class:"mx-auto",width:"650"},null,-1),zR={__name:"132",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[xR,kR,$R]),_:1},16))}},IR=E(zR,[["__file","/@slidev/slides/132.md"]]),CR="/4/svelte/assets/svelte_067-5fa3ccc5.png",ER=o("h1",null,"SvelteKit",-1),OR=o("p",null,"Each block",-1),MR=o("ul",null,[o("li",null,"Spesso è utile accedere all’indice dell’iterazione"),o("li",null,"Per fare ciò basta modificare il costruttore nel seguente modo")],-1),TR=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[c("{#each "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("array")]),o("span",{class:"token punctuation"},">")]),c(" as elemento, indice}")]),c(`
`),o("span",{class:"line"},"    ..."),c(`
`),o("span",{class:"line"},"    blocco HTML in cui uso {elemento} e {indice}"),c(`
`),o("span",{class:"line"},"    ..."),c(`
`),o("span",{class:"line"},"{/each}")])],-1),AR=o("ul",null,[o("li",null,"Quindi modifichiamo la pagina in questo modo")],-1),KR=o("br",null,null,-1),PR=o("img",{src:CR,class:"mx-auto",width:"450"},null,-1),LR={__name:"133",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[ER,OR,MR,j(s,me({},{ranges:[""]}),{default:w(()=>[TR]),_:1},16),AR,KR,PR,c("0 ")]),_:1},16)}}},RR=E(LR,[["__file","/@slidev/slides/133.md"]]),HR="/4/svelte/assets/svelte_068-9d8e9c8f.png",WR=o("h1",null,"SvelteKit",-1),NR=o("p",null,"Each block",-1),DR=o("img",{src:HR,class:"mx-auto",width:"650"},null,-1),qR={__name:"134",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[WR,NR,DR]),_:1},16))}},FR=E(qR,[["__file","/@slidev/slides/134.md"]]),jR="/4/svelte/assets/svelte_069-0640d7ff.png",VR=o("h1",null,"SvelteKit",-1),BR=o("p",null,"Advances Styling",-1),UR=o("ul",null,[o("li",null,"Nell’esempio del blocco condizionale abbiamo cambiato il colore della scritta, in funzione del valore di contatore, replicando l’HTML"),o("li",null,"Questo metodo ha parecchi svantaggi, primo tra tutti la difficile manutenibilità. Se devo modificare qualcosa devo modificarlo in alemno due punti diversi sprecando tempo e essendo soggetto a potenziali errori"),o("li",null,[c("Pertanto come anticipato, vediamo attraverso il concetto di "),o("code",null,"Advanced Styling"),c(" come risolvere questo problema in modo elegante")]),o("li",null,"Svelte ci permette di specificare qualsiasi attributo di un tag HTML con JS"),o("li",null,"Pertanto nel nostro esempio quel che dobbiamo fare è cambiare la classe da rosso a verde solo in particolari condizioni. Modichiamo la pagina counter nel seguente modo")],-1),JR=o("br",null,null,-1),QR=o("img",{src:jR,class:"mx-auto",width:"350"},null,-1),YR={__name:"135",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[VR,BR,UR,JR,QR]),_:1},16))}},ZR=E(YR,[["__file","/@slidev/slides/135.md"]]),GR=o("h1",null,"SvelteKit",-1),XR=o("p",null,"Advances Styling",-1),eH=o("ul",null,[o("li",null,"Quindi se il valore di contatore è < 5 la classe assume il valore rosso, in caso contrario assume il valore verde"),o("li",null,"Quindi abbiamo ottenuto lo stesso effetto di prima ma senza duplicare codice, rendendo la nostra app più compatta, più leggibile e più facile da mantenere"),o("li",null,"Ci sono altre situazione in cui un elemento deve essere decorato con una classe in particolari condizioni"),o("li",null,"In questo caso possiamo scrivere un codice simile a questo")],-1),tH=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("h2")]),c(),o("span",{class:"token attr-name"},"class"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),c("{contatore")]),c(),o("span",{class:"token attr-name"},"<"),c(),o("span",{class:"token attr-name"},"5"),c(),o("span",{class:"token attr-name"},"?"),c(),o("span",{class:"token attr-name"},"'rosso'"),c(),o("span",{class:"token attr-name"},":"),c(),o("span",{class:"token attr-name"},"''}"),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"    Il valore del contatore vale: {contatore}"),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("h2")]),o("span",{class:"token punctuation"},">")])])])],-1),nH=o("ul",null,[o("li",null,"il tag h2 assume la classe rosso se contatore è minore di 5 altrimenti non viene assegnata nessuna classe CSS")],-1),oH={__name:"136",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[GR,XR,eH,j(s,me({},{ranges:[""]}),{default:w(()=>[tH]),_:1},16),nH]),_:1},16)}}},iH=E(oH,[["__file","/@slidev/slides/136.md"]]),sH=o("h1",null,"SvelteKit",-1),aH=o("p",null,"Advances Styling",-1),lH=o("ul",null,[o("li",null,"Questo è un caso così comune che Svlete ci fornisce un modo più compatto di scrivere questo codice")],-1),rH=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("h2")]),c(),o("span",{class:"token attr-name"},[o("span",{class:"token namespace"},"class:"),c("rosso")]),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),c("{contatore")]),c(),o("span",{class:"token attr-name"},"<"),c(),o("span",{class:"token attr-name"},"5}"),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"    Il valore del contatore vale: {contatore}"),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("h2")]),o("span",{class:"token punctuation"},">")])])])],-1),cH=o("ul",null,[o("li",null,[o("p",null,"class:rosso è il nome della classe che vogliamo assegnare")]),o("li",null,[o("p",null,"Così facendo otteniamo lo stesso risultato di prima ma in modo più compatto")]),o("li",null,[o("p",null,"Spesso il nome della classe coincide con il nome della variabile da cui dipende. In questi casi è possibile scrivere il codice in modo ancora più compatto")])],-1),uH=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("h2")]),c(),o("span",{class:"token attr-name"},[o("span",{class:"token namespace"},"class:"),c("sottolineato")]),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"    Il valore del contatore vale: {contatore}"),c(`
`),o("span",{class:"line"},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("h2")]),o("span",{class:"token punctuation"},">")])])])],-1),dH=o("ul",null,[o("li",null,"se sottolineato == true allora viene applicata la classe sottolineato")],-1),pH={__name:"137",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[sH,aH,lH,j(s,me({},{ranges:[""]}),{default:w(()=>[rH]),_:1},16),cH,j(s,me({},{ranges:[""]}),{default:w(()=>[uH]),_:1},16),dH]),_:1},16)}}},mH=E(pH,[["__file","/@slidev/slides/137.md"]]),fH="/4/svelte/assets/svelte_070-d4ce7693.png",hH=o("h1",null,"SvelteKit",-1),vH=o("p",null,"Advances Styling",-1),_H=o("img",{src:fH,class:"mx-auto",width:"450",style:{position:"relative",top:"-80px"}},null,-1),gH={__name:"138",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[hH,vH,_H]),_:1},16))}},bH=E(gH,[["__file","/@slidev/slides/138.md"]]),yH="/4/svelte/assets/svelte_071-f48290bf.png",SH=o("h1",null,"SvelteKit",-1),wH=o("p",null,"Advances Styling",-1),xH=o("img",{src:yH,class:"mx-auto",width:"700"},null,-1),kH={__name:"139",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[SH,wH,xH]),_:1},16))}},$H=E(kH,[["__file","/@slidev/slides/139.md"]]),zH=o("h1",null,"SvelteKit",-1),IH=o("p",null,"Reactivity",-1),CH=o("ul",null,[o("li",null,"Come abbiamo visto negli esempi precedenti al centro di Svelte c’è un potente sistema di reattività per mantenere il DOM sincronizzato con lo stato dell’applicazione, ad esempio in risposta a un evento"),o("li",null,'Occiamente questo processo non avviene in automatico, e Svelte "instrumenta" il codice in modo che al variare del valore della variabile il DOM venga aggiornato in modo coerente'),o("li",null,"La reattività di Svelte non solo mantiene il DOM sincronizzato con le variabili della tua applicazione, come visto."),o("li",null,"Svelte può anche mantenere le variabili sincronizzate tra loro utilizzando dichiarazioni reattive. Questo meccanismo è molto potente e permette di scrivere codice in manierà facile che in vanilla JS sarebbe piuttosto tedioso"),o("li",null,"Vediamo un esempio, modificando la pagina counter nel seguente modo")],-1),EH={__name:"140",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[zH,IH,CH]),_:1},16))}},OH=E(EH,[["__file","/@slidev/slides/140.md"]]),MH="/4/svelte/assets/svelte_072-14e60d48.png",TH=o("h1",null,"SvelteKit",-1),AH=o("p",null,"Reactivity",-1),KH=o("img",{src:MH,class:"mx-auto",width:"500"},null,-1),PH={__name:"141",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[TH,AH,KH]),_:1},16))}},LH=E(PH,[["__file","/@slidev/slides/141.md"]]),RH=o("h1",null,"SvelteKit",-1),HH=o("p",null,"Reactivity",-1),WH=o("ul",null,[o("li",null,"Questo costrutto non è comune e quindi non preoccuparti se non ti risulta subito chiaro."),o("li",null,[c("Il costrutto "),o("code",null,"$:"),c(', introduce un blocco di JavaScript valido, che Svelte interpreta nel senso di "riesegui questo codice ogni volta che uno dei valori di riferimento cambia".')]),o("li",null,[c("Pertanto siccome il valore di "),o("em",null,"doppio"),c(" dipende dal valore di "),o("em",null,"contatore"),c(", ogni volta che "),o("em",null,"contatore"),c(" cambierà l’espressione verrà nuovamente calcolata (contatore * 2) e il risultato assegnato a "),o("em",null,"doppio")]),o("li",null,"In questo modo possiamo correlare 2 o più variabili senza dover scrivere del codice condizionale"),o("li",null,[c("Questa è una soluzione elegante e "),o("strong",null,"UNICA di SVELTE"),c(".")]),o("li",null,"Non è presente nello stesso modo in nessun altro framework JS"),o("li",null,"In generale il costrutto reattivo assume la seguente forma")],-1),NH=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},"$: {"),c(`
`),o("span",{class:"line"},"    ...."),c(`
`),o("span",{class:"line"},"    codice JS"),c(`
`),o("span",{class:"line"},"    ..."),c(`
`),o("span",{class:"line"},"}")])],-1),DH={__name:"142",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[RH,HH,WH,j(s,me({},{ranges:[""]}),{default:w(()=>[NH]),_:1},16)]),_:1},16)}}},qH=E(DH,[["__file","/@slidev/slides/142.md"]]),FH="/4/svelte/assets/svelte_073-e8e76e8c.gif",jH=o("h1",null,"SvelteKit",-1),VH=o("p",null,"Reactivity",-1),BH=o("img",{src:FH,class:"mx-auto",width:"650"},null,-1),UH={__name:"143",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[jH,VH,BH]),_:1},16))}},JH=E(UH,[["__file","/@slidev/slides/143.md"]]),QH=o("h1",null,"SvelteKit",-1),YH=o("p",null,"Reactivity: Esercitazione_13",-1),ZH=o("ul",null,[o("li",null,[o("p",null,"Modificare la pagina counter in modo che utilizzando la reattività, il valore della variabile sottolineato diventi true il valore di DoubleCounter è pari e diventi false quando tale valore è dispari")]),o("li",null,[o("p",null,"Consegnare su github il progetto modificato")])],-1),GH={__name:"144",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[QH,YH,ZH]),_:1},16))}},XH=E(GH,[["__file","/@slidev/slides/144.md"]]),e7=o("h1",null,"SvelteKit",-1),t7=o("p",null,"Component Events",-1),n7=o("ul",null,[o("li",null,"Come visto in precedenza, con Svelte è facilissimo gestire gli eventi del DOM"),o("li",null,"Chiaramente sarebbe molto utile avere la stessa possibilità per i componenti sviluppati da noi"),o("li",null,[c("Svelte ci viene incontro per risolvere questo problema con il meccanismo del "),o("code",null,"Component Events")]),o("li",null,"In altre parole possiamo fare in modo che i nostri componenti emettano degli eventi e che il chiamante si registri su questi eventi e li gestisca tramite un handler, esattamente come per gli eventi stanrd del DOM"),o("li",null,[c("In altre parole, esattamente come un componente HTML standard, anche i nostri componenti diventano "),o("em",null,"emettitori"),c(" di eventi")]),o("li",null,"Questo è un meccanismo molto importante e Svelte lo rende semplicissimo"),o("li",null,"Vediamo…")],-1),o7={__name:"145",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[e7,t7,n7]),_:1},16))}},i7=E(o7,[["__file","/@slidev/slides/145.md"]]),s7=o("h1",null,"SvelteKit",-1),a7=o("p",null,"Component Events",-1),l7=o("ul",null,[o("li",null,[c("Vogliamo modificare il componente Counter in modo che ogni volta l’utente preme il tasto + venga emesso l’evento "),o("em",null,"plus"),c(" e ogni volta che preme - vengo emesso l’evento "),o("em",null,"minus")]),o("li",null,"Il chiamante, la pagina counter, si registrerà su questi eventi e fornirà un handler per ciascuno di essi"),o("li",null,[c("Per prima cosa dobbiamo fare in modo che il nostro componente sia in grado di generare eventi. Per questo usiamo il metodo "),o("em",null,[o("strong",null,"createEventDispatcher")])]),o("li",null,[c("Il metodo "),o("em",null,"createEventDispatcher"),c(" deve essere chiamato durante l’inizializzazione del componente cioè all’inizio della sua sezione script")]),o("li",null,"Successivamente potremo generare ed emettere un evento tramite il metodo")],-1),r7=o("pre",{class:"slidev-code language-html"},[o("code",null,[o("span",{class:"line"},[c("dispatch('"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("nome_evento")]),o("span",{class:"token punctuation"},">")]),c("', {")]),c(`
`),o("span",{class:"line"},[c("			"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("oggetto")]),c(),o("span",{class:"token attr-name"},"o"),c(),o("span",{class:"token attr-name"},"valore"),c(),o("span",{class:"token attr-name"},"da"),c(),o("span",{class:"token attr-name"},"trasportare"),c(),o("span",{class:"token attr-name"},"nell'evento"),o("span",{class:"token punctuation"},">")])]),c(`
`),o("span",{class:"line"},"		});")])],-1),c7=o("ul",null,[o("li",null,[c("Quindi una volta eseguito il metodo "),o("em",null,"dispatch"),c(", l’evento sarà generato e gestito dall’handler specificato dal chiamante, esattamente come per un componente standard HTML")])],-1),u7={__name:"146",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[s7,a7,l7,j(s,me({},{ranges:[""]}),{default:w(()=>[r7]),_:1},16),c7]),_:1},16)}}},d7=E(u7,[["__file","/@slidev/slides/146.md"]]),p7="/4/svelte/assets/svelte_074-f5fd3877.png",m7=o("h1",null,"SvelteKit",-1),f7=o("p",null,"Component Events",-1),h7=o("div",{style:{width:"40%"}},[o("ul",null,[o("li",null,"Iniziamo a modificare il componente Counter in questo modo")])],-1),v7=o("br",null,null,-1),_7=o("img",{src:p7,class:"mx-auto",width:"430",style:{position:"relative",top:"-180px",left:"200px"}},null,-1),g7={__name:"147",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[m7,f7,h7,v7,_7]),_:1},16))}},b7=E(g7,[["__file","/@slidev/slides/147.md"]]),y7="/4/svelte/assets/svelte_075-b7ac4dd6.png",S7=o("h1",null,"SvelteKit",-1),w7=o("p",null,"Component Events",-1),x7=o("ul",null,[o("li",null,"Ora aggiungiamo il dispatcher alla pagina counter per gestire l’evento generato")],-1),k7=o("br",null,null,-1),$7=o("img",{src:y7,class:"mx-auto",width:"550"},null,-1),z7={__name:"148",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[S7,w7,x7,k7,$7]),_:1},16))}},I7=E(z7,[["__file","/@slidev/slides/148.md"]]),C7="/4/svelte/assets/svelte_076-75ae1c1b.gif",E7=o("h1",null,"SvelteKit",-1),O7=o("p",null,"Component Events",-1),M7=o("img",{src:C7,class:"mx-auto",width:"800"},null,-1),T7={__name:"149",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[E7,O7,M7]),_:1},16))}},A7=E(T7,[["__file","/@slidev/slides/149.md"]]),K7="/4/svelte/assets/svelte_077-cbc5fad5.png",P7=o("h1",null,"SvelteKit",-1),L7=o("p",null,"Component Events",-1),R7=o("ul",null,[o("li",null,"Importante notare e ricordare che gli eventi dei componenti custom, al contrario dei componenti standard, vengono propagati solo al chiamante"),o("li",null,"Quindi se abbiamo una gerarchia di componenti uno incluso nell’altro (come una matriosca), se vogliamo che l’evento generato dal componente più interno venga propagato fino al primo componente dovremo fare in modo che ogni componente intermedia faccia il forwarding dell’evento ricevuto")],-1),H7=o("br",null,null,-1),W7=o("img",{src:K7,class:"mx-auto",width:"250"},null,-1),N7={__name:"150",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[P7,L7,R7,H7,W7]),_:1},16))}},D7=E(N7,[["__file","/@slidev/slides/150.md"]]),q7=o("h1",null,"SvelteKit",-1),F7=o("p",null,"Component Events: Esercitazione_14",-1),j7=o("ul",null,[o("li",null,[o("p",null,"Aggiungere la generazione di due eventi distinti al componente DoubleCounter")]),o("li",null,[o("p",null,"Intercettare e gestire nel componente chiamante i due eventi emessi da DoubleCounter")]),o("li",null,[o("p",null,"Consegnare su github il progetto modificato")])],-1),V7={__name:"151",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[q7,F7,j7]),_:1},16))}},B7=E(V7,[["__file","/@slidev/slides/151.md"]]),U7=o("h1",null,"SvelteKit",-1),J7=o("p",null,"Stores",-1),Q7=o("ul",null,[o("li",null,"Siccome i componenti Web implementano il concetto di incapsulamento, proprio della OOP, lo stato di un componente rimane invisibile agli altri componenti"),o("li",null,[c("Abbiamo visto tramite il "),o("em",null,"Component Binding"),c(" e il "),o("em",null,"Component Events"),c(" come è possible condividere tale stato tra componenti gerarchicamente correlati")]),o("li",null,"Ma con questi metodi è impossibile condivider elo stato di un componente con un altro componente o pagina non correlato"),o("li",null,"Per esempio,nel nostro caso, come visualizziamo il valore del contatore nella pagina About?"),o("li",null,"Questo meccanismo è estremamente utile nello sviluppo di un’applicazione web di media complessità, sarà quasi certamente sicuro che ci saranno più componenti che devono condividere uno stato comune"),o("li",null,[c("Svelte ci corre in aiuto con il meccanismo dello "),o("code",null,"Store")])],-1),Y7={__name:"152",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[U7,J7,Q7]),_:1},16))}},Z7=E(Y7,[["__file","/@slidev/slides/152.md"]]),G7=o("h1",null,"SvelteKit",-1),X7=o("p",null,"Stores",-1),e9=o("p",null,[c("Uno "),o("b",null,"Store"),c(" in Svelte è un oggetto che permette di condividere un valore tra componenti non gerarchicamente correlati")],-1),t9=o("br",null,null,-1),n9=o("ul",null,[o("li",null,"Inizamo creando lo store per contenere il valroe del contatore e condividerlo tra componenti e pagine diverse")],-1),o9=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},"src/lib"),c(`
`),o("span",{class:"line"},"├── components"),c(`
`),o("span",{class:"line"},"│   ├── counter.svelte"),c(`
`),o("span",{class:"line"},"│   └── who_am_i.svelte"),c(`
`),o("span",{class:"line"},"└── js"),c(`
`),o("span",{class:"line"},"    └── store.js")])],-1),i9={__name:"153",setup(e){const t={};return $(I),(n,i)=>{const s=xo,a=Ie;return g(),z(T,M(O(t)),{default:w(()=>[G7,X7,j(s,{bg:"green",fg:"yellow"},{default:w(()=>[e9]),_:1}),t9,n9,j(a,me({},{ranges:[""]}),{default:w(()=>[o9]),_:1},16)]),_:1},16)}}},s9=E(i9,[["__file","/@slidev/slides/153.md"]]),a9="/4/svelte/assets/svelte_078-353f098b.png",l9="/4/svelte/assets/svelte_079-c6774edb.png",r9=o("h1",null,"SvelteKit",-1),c9=o("p",null,"Stores",-1),u9=o("ul",null,[o("li",null,"Ecco il semplicissimo codice dello store")],-1),d9=o("p",null,[o("br"),o("br")],-1),p9=o("ul",null,[o("li",null,"Ora modifichiamo il componente Counter in modo che ogni volta che couter cambia venga aggiornato lo store")],-1),m9=o("img",{src:a9,class:"mx-auto",width:"250",style:{position:"relative",top:"-200px",left:"50px"}},null,-1),f9=o("img",{src:l9,class:"mx-auto",width:"300",style:{position:"relative",top:"-100px",left:"50px"}},null,-1),h9={__name:"154",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[r9,c9,u9,d9,p9,m9,f9]),_:1},16))}},v9=E(h9,[["__file","/@slidev/slides/154.md"]]),_9=o("h1",null,"SvelteKit",-1),g9=o("p",null,"Stores",-1),b9=o("ul",null,[o("li",null,"Quindi ogni volta che l’utente preme + o -, il valore di counter cambia e viene anche aggiornato lo store"),o("li",null,"In questo modo lo stato di Counter può essere condiviso con altre pagine o componenti"),o("li",null,"Per dimostrare il funzionamento creiamo la pagina About che visualizza il valore dello store, o in altre parole lo stato interno del componente Counter")],-1),y9=o("pre",{class:"slidev-code language-bash"},[o("code",null,[o("span",{class:"line"},"src/routes"),c(`
`),o("span",{class:"line"},"├── about"),c(`
`),o("span",{class:"line"},"│   └── +page.svelte"),c(`
`),o("span",{class:"line"},"├── chi_sono"),c(`
`),o("span",{class:"line"},"│   └── +page.svelte"),c(`
`),o("span",{class:"line"},"├── counter"),c(`
`),o("span",{class:"line"},"│   └── +page.svelte"),c(`
`),o("span",{class:"line"},"├── input"),c(`
`),o("span",{class:"line"},"│   └── +page.svelte"),c(`
`),o("span",{class:"line"},"├── +layout.svelte"),c(`
`),o("span",{class:"line"},"└── +page.svelte")])],-1),S9=o("ul",null,[o("li",null,"Non dimenticarti di linkare la pagina About alla navbar")],-1),w9={__name:"155",setup(e){const t={};return $(I),(n,i)=>{const s=Ie;return g(),z(T,M(O(t)),{default:w(()=>[_9,g9,b9,j(s,me({},{ranges:[""]}),{default:w(()=>[y9]),_:1},16),S9]),_:1},16)}}},x9=E(w9,[["__file","/@slidev/slides/155.md"]]),k9="/4/svelte/assets/svelte_080-158a95ea.png",$9=o("h1",null,"SvelteKit",-1),z9=o("p",null,"Stores",-1),I9=o("ul",null,[o("li",null,"Ecco il codice della pagina About")],-1),C9=o("br",null,null,-1),E9=o("img",{src:k9,class:"mx-auto",width:"600"},null,-1),O9=o("br",null,null,-1),M9=o("ul",null,[o("li",null,[c("Da notare che per accedere allo store sia in lettura che scrittura, è necessariop anteporre il simbolo "),o("code",null,"$"),c(" in modo da differenziarlo da una normale variabile")]),o("li",null,"Quindi ora se l’utente interagisce con il componente Counter e poi passa alla pagina about vedrà visualizzato lo stato interno del componente che è memorizzato nello store")],-1),T9={__name:"156",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[$9,z9,I9,C9,E9,O9,M9]),_:1},16))}},A9=E(T9,[["__file","/@slidev/slides/156.md"]]),K9="/4/svelte/assets/svelte_081-496ce84f.gif",P9=o("h1",null,"SvelteKit",-1),L9=o("p",null,"Stores",-1),R9=o("img",{src:K9,class:"mx-auto",width:"600"},null,-1),H9={__name:"157",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[P9,L9,R9]),_:1},16))}},W9=E(H9,[["__file","/@slidev/slides/157.md"]]),N9=o("h1",null,"SvelteKit",-1),D9=o("p",null,"Stores: Esercitazione_15",-1),q9=o("ul",null,[o("li",null,[o("p",null,"Modificare il codice dell’applicazione in modo che nella pagina About venga visualizzato anche il valore del componente DoubleCounter")]),o("li",null,[o("p",null,"Consegnare su github il progetto modificato")])],-1),F9={__name:"158",setup(e){const t={};return $(I),(n,i)=>(g(),z(T,M(O(t)),{default:w(()=>[N9,D9,q9]),_:1},16))}},j9=E(F9,[["__file","/@slidev/slides/158.md"]]),V9=o("h1",null,"SvelteKit",-1),B9=o("p",null,"Conclusioni",-1),U9=o("ul",null,[o("li",null,"In queste lezioni abbiamo introdotto il modernissimo framework SvelteKit che si basa sul linguggio e compilatore Svelte"),o("li",null,"Svelte è uno strumento formidabile per lo sviluppo di applicazioni Web"),o("li",null,"Svelte rende immediate molte operazioni che in vanilla JS sarebbero alcuanto complesse"),o("li",null,"SvelteKit si distingue dagli altri framework per velocità, compattezza e modernità"),o("li",null,"In queste lezioni abbiamo trattato gli aspetti base di Svelte. Ci sono ovviamente altri aspetti più avamnzati che esulano dai nostri scopi")],-1),J9=o("br",null,null,-1),Q9={__name:"159",setup(e){const t={};return $(I),(n,i)=>{const s=xo;return g(),z(T,M(O(t)),{default:w(()=>[V9,B9,U9,J9,j(s,{fg:"yellow",bg:"green"},{default:w(()=>[c(" Svelte e SvelteKit sono strumenti utilissimi e potentissimi e sono la base per lo sviluppo FullStack di moderne applicazioni Web ")]),_:1})]),_:1},16)}}},Y9=E(Q9,[["__file","/@slidev/slides/159.md"]]),Z9=[{path:"1",name:"page-1",component:z$,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",as:"2023/2024",version:"1.2.0",title:"Svelte e SvelteKit",slide:{raw:`---
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
version: '1.2.0'

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
</div>`,frontmatter:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",as:"2023/2024",version:"1.2.0",title:"Svelte e SvelteKit"},index:0,start:0,end:36,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:A$,meta:{slide:{raw:`
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
- Ciò si applica anche ai linguaggi di programmazione`,frontmatter:{},index:1,start:37,end:48,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:N$,meta:{slide:{raw:`
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

<img src="/media/svelte_000.png" class="mx-auto" width="400" />`,frontmatter:{},index:2,start:49,end:64,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:U$,meta:{slide:{raw:`
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

<img src="/media/svelte_001.png" class="mx-auto" style="margin-top:2rem;" width="500" />`,frontmatter:{},index:3,start:65,end:76,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:G$,meta:{slide:{raw:`
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
- Con una combinazione di versatilità ed estensibilità, jQuery ha cambiato il modo in cui milioni di persone scrivono JavaScript.`,frontmatter:{},index:4,start:77,end:89,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:sz,meta:{slide:{raw:`
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
- In sostanza, si può definire un framework come un insieme di funzioni e tool già “pronti all’uso”, ovvero che si possono utilizzare senza doverli progettare da zero ogni volta.`,frontmatter:{},index:5,start:90,end:107,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:uz,meta:{slide:{raw:`
# Introduzione

Framework JS

- I framework sono piuttosto impalcature/scheletri/template di programmi che forniscono il progetto, le linee guida e l'organizzazione del codice ma non l'unità finita.
- Il framework, quindi, fornisce il progetto e il framework di base e mostra anche ciò che è ancora necessario al programmatore in termini di personalizzazione. 
- Il framework fornisce il flusso di un'applicazione software e comunica allo sviluppatore ciò di cui ha bisogno e chiama il codice fornito dallo sviluppatore come richiesto

`,title:"Introduzione",level:1,content:`# Introduzione

Framework JS

- I framework sono piuttosto impalcature/scheletri/template di programmi che forniscono il progetto, le linee guida e l'organizzazione del codice ma non l'unità finita.
- Il framework, quindi, fornisce il progetto e il framework di base e mostra anche ciò che è ancora necessario al programmatore in termini di personalizzazione. 
- Il framework fornisce il flusso di un'applicazione software e comunica allo sviluppatore ciò di cui ha bisogno e chiama il codice fornito dallo sviluppatore come richiesto`,frontmatter:{},index:6,start:108,end:118,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:vz,meta:{slide:{raw:`
# Introduzione

Framework JS

<img src="/media/svelte_004.png" class="mx-auto" style="margin-top:0rem;" width="800" />

`,title:"Introduzione",level:1,content:`# Introduzione

Framework JS

<img src="/media/svelte_004.png" class="mx-auto" style="margin-top:0rem;" width="800" />`,frontmatter:{},index:7,start:119,end:127,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:xz,meta:{slide:{raw:`
# Introduzione

Framework JS

- I principali [framework](https://en.wikipedia.org/wiki/Software_framework) degli ultimi anni sono

<img src="/media/svelte_002.png" class="mx-auto" style="margin-top:0rem;" width="600" />
`,title:"Introduzione",level:1,content:`# Introduzione

Framework JS

- I principali [framework](https://en.wikipedia.org/wiki/Software_framework) degli ultimi anni sono

<img src="/media/svelte_002.png" class="mx-auto" style="margin-top:0rem;" width="600" />`,frontmatter:{},index:8,start:128,end:137,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Cz,meta:{slide:{raw:`
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
  - concentrarsi sul problema da risolvere, senza dover implementare funzionalità che qualcun altro ha già provveduto a creare.`,frontmatter:{},index:9,start:138,end:151,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Pz,meta:{slide:{raw:`
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
- Da ciò ne consegue che una  moderna applicazione web è composta da uno o più componenti indipendenti che interagiscono tra loro per fornire il layout e la funzionalità desiderata`,frontmatter:{},index:10,start:152,end:169,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:qz,meta:{slide:{raw:`
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

<img src="/media/svelte_03.png" style="position: relative; left: 450px;top:-150px;" width="500" />`,frontmatter:{},index:11,start:170,end:181,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Jz,meta:{slide:{raw:`
# Web Components

OOP per il Web

<img src="/media/svelte_006.png" class="mx-auto" width="600" />
`,title:"Web Components",level:1,content:`# Web Components

OOP per il Web

<img src="/media/svelte_006.png" class="mx-auto" width="600" />`,frontmatter:{},index:12,start:182,end:189,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:tI,meta:{slide:{raw:`
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

[https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks)`,frontmatter:{},index:13,start:190,end:207,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:lI,meta:{slide:{raw:`
# SvelteKit

Introduzione

<img src="/media/svelte_00.png" class="mx-auto" width="750" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Introduzione

<img src="/media/svelte_00.png" class="mx-auto" width="750" />`,frontmatter:{},index:14,start:208,end:216,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:pI,meta:{slide:{raw:`
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
- In altre parole \`Svelte è un compilatore\` che trasforma il codice della tua applicazione Web in puro JavaScript, raggiungendo così massime prestazioni`,frontmatter:{},index:15,start:217,end:228,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:bI,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:16,start:229,end:244,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:kI,meta:{slide:{raw:`
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
- Per raggiungere questo obiettivo, React introduce un overhead (la libreria), che verrà eseguito nel motore JS del browser per monitorare e aggiornare il DOM in base alle varie interazioni dell'utente.`,frontmatter:{},index:17,start:245,end:256,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:OI,meta:{slide:{raw:`
# SvelteKit

Svelte vs Others

<img src="/media/svelte_01.png" class="mx-auto w-160" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte vs Others

<img src="/media/svelte_01.png" class="mx-auto w-160" />`,frontmatter:{},index:18,start:257,end:264,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:RI,meta:{slide:{raw:`
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

<img src="/media/svelte_003.png" class="mx-auto" width="480" style="margin-top:20px" />`,frontmatter:{},index:19,start:265,end:276,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:VI,meta:{slide:{raw:`
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
- Alcuni sviluppatori potrebbero non preferire l'uso di sintassi speciali come #if e #each all'interno dei loro modelli e preferirebbero invece utilizzare JavaScript puro, come consentito da React.`,frontmatter:{},index:20,start:277,end:295,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:YI,meta:{slide:{raw:`
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
- SvelteKit e Svelte sono **totalmente allineati** al paradigma e modello di sviluppo per componenti caratteristico del web moderno.`,frontmatter:{},index:21,start:296,end:307,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:tC,meta:{slide:{raw:`
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
  - Supporto per diversi hosting providers molto comuni su Internet (vercel, netlify, ...)`,frontmatter:{},index:22,start:308,end:324,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:cC,meta:{slide:{raw:`
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
- Sveltekit è un \`full stack framework\` ricco di funzionalità e permette lo sviluppo di un applicazione web completa di back-end e front-end`,frontmatter:{},index:23,start:325,end:342,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:hC,meta:{slide:{raw:`
# SvelteKit

Web App Architecture

<img src="/media/svelte_005.png" class="mx-auto" width="900" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Web App Architecture

<img src="/media/svelte_005.png" class="mx-auto" width="900" />`,frontmatter:{},index:24,start:343,end:351,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:wC,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:25,start:352,end:369,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:OC,meta:{slide:{raw:`
# SvelteKit

Svelte Components

- Ecco la struttura di un componente Svelte

<br>

<img src="/media/svelte_007.png" class="mx-auto" width="700" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte Components

- Ecco la struttura di un componente Svelte

<br>

<img src="/media/svelte_007.png" class="mx-auto" width="700" />`,frontmatter:{},index:26,start:370,end:382,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:LC,meta:{slide:{raw:`
# SvelteKit

Esempio di componente Svelte
 
<img src="/media/svelte_008.png" class="mx-auto" width="350" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Esempio di componente Svelte
 
<img src="/media/svelte_008.png" class="mx-auto" width="350" />`,frontmatter:{},index:27,start:383,end:391,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:FC,meta:{slide:{raw:`
# SvelteKit

Svelte Components

<br><br>

<img src="/media/svelte_04.png" class="mx-auto" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Svelte Components

<br><br>

<img src="/media/svelte_04.png" class="mx-auto" />`,frontmatter:{},index:28,start:392,end:402,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:GC,meta:{slide:{raw:`
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
- Questo è molto utile quando riutilizzi componenti che hai già scritto per altre applicazioni o quando includi librerie Open Source pubblicate da altre persone.`,frontmatter:{},index:29,start:403,end:422,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:vE,meta:{slide:{raw:`
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
- Include la parte di contenuto e di stile`,frontmatter:{},index:31,start:438,end:462,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:OE,meta:{slide:{raw:`
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
- un componente che fornisce accesso ad un DB nosql non ha nessuna parte di UI, ma è di grande utilità all'interno della mia applicazione.`,frontmatter:{},index:32,start:463,end:481,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:LE,meta:{slide:{raw:`
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

***Questi link sono il riferimento per gli studenti e vi suggerisco di studiarli e di utilizzarli per tutto il tempo necessario ad apprendere Svlete e SvelteKit***`,frontmatter:{},index:33,start:482,end:500,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:qE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:34,start:501,end:523,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:JE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:35,start:524,end:551,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:XE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:36,start:552,end:579,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:rO,meta:{slide:{raw:`
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

<img src="/media/svelte_0000.png" class="mx-auto" width="100" />`,frontmatter:{},index:37,start:580,end:605,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:hO,meta:{slide:{raw:`
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

- Viene automaticamente aperta una fienstra del browser che punta al seguente indirizzo: [http://localhost:5173/](http://localhost:5173/)`,frontmatter:{},index:38,start:606,end:631,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:SO,meta:{slide:{raw:`
# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_009.png" class="mx-auto" width="500" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_009.png" class="mx-auto" width="500" />`,frontmatter:{},index:39,start:632,end:639,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:IO,meta:{slide:{raw:`
# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_010.png" class="mx-auto" width="450" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Eseguiamo il progetto

<img src="/media/svelte_010.png" class="mx-auto" width="450" />`,frontmatter:{},index:40,start:640,end:647,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:TO,meta:{slide:{raw:`
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
  5. **Una pagina(componente) può includere uno o più componenti esterni**`,frontmatter:{},index:41,start:648,end:660,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:HO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:42,start:661,end:686,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:FO,meta:{slide:{raw:`
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

- **Segue ora un'analisi live a cura del professore (\`necessario prendere appunti\`)**`,frontmatter:{},index:43,start:687,end:701,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:JO,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_01

- Creare ed installare il progetto base SvelteKit come spiegato sopra
- Eseguire l'applicazione
- Consegnare su github il progetto appena creato
- IMPORTANTE: non fare il push della directory ***node_modules***

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_01

- Creare ed installare il progetto base SvelteKit come spiegato sopra
- Eseguire l'applicazione
- Consegnare su github il progetto appena creato
- IMPORTANTE: non fare il push della directory ***node_modules***`,frontmatter:{},index:44,start:702,end:713,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:n4,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_02

- provare a modificare la home page del progetto in modo che appaia come in figura

<img src="/media/svelte_011.png" class="mx-auto" width="400" />

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_02

- provare a modificare la home page del progetto in modo che appaia come in figura

<img src="/media/svelte_011.png" class="mx-auto" width="400" />

- Consegnare su github il progetto modificato`,frontmatter:{},index:45,start:714,end:726,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:u4,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_03

- provare a modificare il layout del progetto in modo che appaia come in figura
  
<br><br>
<img src="/media/svelte_012.png" class="mx-auto" width="650" />

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_03

- provare a modificare il layout del progetto in modo che appaia come in figura
  
<br><br>
<img src="/media/svelte_012.png" class="mx-auto" width="650" />

- Consegnare su github il progetto modificato`,frontmatter:{},index:46,start:727,end:740,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:g4,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_04

- provare a modificare la pagina about in modo che appaia come in figura
  
<img src="/media/svelte_013.png" class="mx-auto" width="550" />

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_04

- provare a modificare la pagina about in modo che appaia come in figura
  
<img src="/media/svelte_013.png" class="mx-auto" width="550" />

- Consegnare su github il progetto modificato`,frontmatter:{},index:47,start:741,end:753,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:I4,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_05

- provare a modificare il componente counter in modo che si incrementi o decrementi di due unità alla pressione dei pulsati + o -

<br>  
<img src="/media/svelte_014.png" class="mx-auto" width="500" />

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_05

- provare a modificare il componente counter in modo che si incrementi o decrementi di due unità alla pressione dei pulsati + o -

<br>  
<img src="/media/svelte_014.png" class="mx-auto" width="500" />

- Consegnare su github il progetto modificato`,frontmatter:{},index:48,start:754,end:767,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:A4,meta:{slide:{raw:`
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

<img src="/media/svelte_015.png" class="mx-auto" width="450" />`,frontmatter:{},index:49,start:768,end:779,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:N4,meta:{slide:{raw:`
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

- Ora editiamo il file banner.svelte ed utilizziamo il codice di slide #28`,frontmatter:{},index:50,start:780,end:805,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:U4,meta:{slide:{raw:`
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
- Come anticipato il paradigma dei web component offre infinite possibilità`,frontmatter:{},index:51,start:806,end:827,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:X4,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:52,start:828,end:856,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:aM,meta:{slide:{raw:`
# SvelteKit

Creiamo un componente

- Ora facciamo partire l'applicazione e verifichiamo che tutto sia corretto

<br>
<img src="/media/svelte_015.png" class="mx-auto" width="500" />
 `,title:"SvelteKit",level:1,content:`# SvelteKit

Creiamo un componente

- Ora facciamo partire l'applicazione e verifichiamo che tutto sia corretto

<br>
<img src="/media/svelte_015.png" class="mx-auto" width="500" />`,frontmatter:{},index:53,start:857,end:867,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:hM,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_06

- provare a modificare la pagina about aggiungendo il componente Banner 

<br>  
<img src="/media/svelte_016.png" class="mx-auto" width="550" />

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_06

- provare a modificare la pagina about aggiungendo il componente Banner 

<br>  
<img src="/media/svelte_016.png" class="mx-auto" width="550" />

- Consegnare su github il progetto modificato`,frontmatter:{},index:54,start:868,end:881,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:yM,meta:{slide:{raw:`
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
- Per questi motivi lo sviluppo component base è oggi alla base di tutti i principali framework di sviluppo per il mondo web (web, mobile, games, web app, desktop app)`,frontmatter:{},index:55,start:882,end:895,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:EM,meta:{slide:{raw:`
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

- Pertanto quando il componente sarà compilato ogni occorrenza di \`{< var name>}\` sarà sostituito con il valore attribuito alla variabile *var name*`,frontmatter:{},index:56,start:896,end:922,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:HM,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_07

- Provare a modificare il componente Banner in modo che visualizzi il proprio nome e cognome
- Verificare che il banner appaia modificato in tutte le pagine 

<br>  
<img src="/media/svelte_017.png" class="mx-auto" width="450" />

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_07

- Provare a modificare il componente Banner in modo che visualizzi il proprio nome e cognome
- Verificare che il banner appaia modificato in tutte le pagine 

<br>  
<img src="/media/svelte_017.png" class="mx-auto" width="450" />

- Consegnare su github il progetto modificato`,frontmatter:{},index:57,start:923,end:937,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:VM,meta:{slide:{raw:`
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
- Successivamente il risultato di questa esecuzione viene sostitutito *verbatim* nel codice HTML`,frontmatter:{},index:58,start:938,end:959,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:ZM,meta:{slide:{raw:`
# SvelteKit

Code Execution

<img src="/media/svelte_018.png" class="mx-auto" width="500" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Code Execution

<img src="/media/svelte_018.png" class="mx-auto" width="500" />`,frontmatter:{},index:59,start:960,end:968,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:oT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:60,start:969,end:991,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:dT,meta:{slide:{raw:`
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
<img src="/media/svelte_019.png" class="mx-auto" width="400" />`,frontmatter:{},index:61,start:992,end:1004,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:hT,meta:{slide:{raw:`
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
- Questo ci permetterà di comprendere altri meccanismi e come è realmente organizzata un'applicazione sveltekit`,frontmatter:{},index:62,start:1005,end:1017,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:ST,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:63,start:1018,end:1046,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:ET,meta:{slide:{raw:`
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
- L'obiettivo è comprendere il funzionamento e l'organizzazione di un'app sveltekit`,frontmatter:{},index:64,start:1047,end:1060,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:LT,meta:{slide:{raw:`
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

- Inseriamo il codice HTML e CSS`,frontmatter:{},index:65,start:1061,end:1083,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:qT,meta:{slide:{raw:`
# SvelteKit

Creazione Web App: il layout

<img src="/media/svelte_021.png" class="mx-auto" width="400" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App: il layout

<img src="/media/svelte_021.png" class="mx-auto" width="400" />`,frontmatter:{},index:66,start:1084,end:1091,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:YT,meta:{slide:{raw:`
# SvelteKit

Creazione Web App: il layout


<img src="/media/svelte_022.png" class="mx-auto" width="400" style="position: relative; left: -200px;"/>
<img src="/media/svelte_023.png" class="mx-auto" width="360" style="position: relative; left: 200px;top: -500px;"/>

`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App: il layout


<img src="/media/svelte_022.png" class="mx-auto" width="400" style="position: relative; left: -200px;"/>
<img src="/media/svelte_023.png" class="mx-auto" width="360" style="position: relative; left: 200px;top: -500px;"/>`,frontmatter:{},index:67,start:1092,end:1102,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:n3,meta:{slide:{raw:`
# SvelteKit

Creazione Web App: il layout

<img src="/media/svelte_024.png" class="mx-auto" width="600" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Creazione Web App: il layout

<img src="/media/svelte_024.png" class="mx-auto" width="600" />`,frontmatter:{},index:68,start:1103,end:1111,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:l3,meta:{slide:{raw:`
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

- Le pagine che andremo a sviluppare verranno visualizzate nel main content area`,frontmatter:{},index:69,start:1112,end:1125,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:b3,meta:{slide:{raw:`
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
</Banner>`,frontmatter:{},index:70,start:1126,end:1147,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:z3,meta:{slide:{raw:`
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
- In altre parole all'interno di un componente Svelte possiamo decidere dove visualizzare il contenuto del "figlio" usando \`<slot />\``,frontmatter:{},index:71,start:1148,end:1167,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:A3,meta:{slide:{raw:`
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

- In questo modo nella sezione article comparirà il contenuto del componente correntemente in utilizzio (home page o +page.svelte in src/routes)`,frontmatter:{},index:72,start:1168,end:1185,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:W3,meta:{slide:{raw:`
# SvelteKit

Component Slot

<img src="/media/svelte_026.png" class="mx-auto" width="650" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Slot

<img src="/media/svelte_026.png" class="mx-auto" width="650" />`,frontmatter:{},index:73,start:1186,end:1194,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:J3,meta:{slide:{raw:`
# SvelteKit

Hello World: Esercitazione_08

- Provare a modificare la home page in modo che appaia come in figura

<br>  
<img src="/media/svelte_027.png" class="mx-auto" width="580" />

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

Hello World: Esercitazione_08

- Provare a modificare la home page in modo che appaia come in figura

<br>  
<img src="/media/svelte_027.png" class="mx-auto" width="580" />

- Consegnare su github il progetto modificato`,frontmatter:{},index:74,start:1195,end:1208,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:eA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:75,start:1209,end:1230,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:rA,meta:{slide:{raw:`
# SvelteKit

Pagina Chi Sono

+page.svelte

<br>  
<img src="/media/svelte_029.png" class="mx-auto" width="600" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Pagina Chi Sono

+page.svelte

<br>  
<img src="/media/svelte_029.png" class="mx-auto" width="600" />`,frontmatter:{},index:76,start:1231,end:1242,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:gA,meta:{slide:{raw:`
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

- In tal modo quando clicchiamo sul link Chi Sono la pagina omonima verrà visualizzata nella main content area`,frontmatter:{},index:77,start:1243,end:1258,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:kA,meta:{slide:{raw:`
# SvelteKit

Pagina Chi Sono

<img src="/media/svelte_028.png" class="mx-auto" width="650" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Pagina Chi Sono

<img src="/media/svelte_028.png" class="mx-auto" width="650" />`,frontmatter:{},index:78,start:1259,end:1267,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:OA,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:79,start:1268,end:1290,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:qA,meta:{slide:{raw:`
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
<img src="/media/svelte_032.png" class="mx-auto" width="600" />`,frontmatter:{},index:80,start:1291,end:1309,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:JA,meta:{slide:{raw:`
# SvelteKit

Il componente WhoAmI

<img src="/media/svelte_033.png" class="mx-auto" width="550" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Il componente WhoAmI

<img src="/media/svelte_033.png" class="mx-auto" width="550" />`,frontmatter:{},index:81,start:1310,end:1318,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:e5,meta:{slide:{raw:`
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
<Banner bg="green" fg="yellow">Tramile le Props di Svelte possiamo quindi creare dei componenti parametrici e quindi più facoilmente riutilizzabili ina ltre pagine o altre applicazioni web</Banner>`,frontmatter:{},index:82,start:1319,end:1331,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:c5,meta:{slide:{raw:`
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

- Il meccanismo delle \`Props\` di Svelte è molto potente e di facile utilizzo`,frontmatter:{},index:83,start:1332,end:1353,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:b5,meta:{slide:{raw:`
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

- Abbiamo usato il *variable substitution di svelte* per utilizzare i parametri all'interno del corpo HTML del componente`,frontmatter:{},index:84,start:1354,end:1368,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:z5,meta:{slide:{raw:`
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
</Banner>`,frontmatter:{},index:85,start:1369,end:1381,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:K5,meta:{slide:{raw:`
# SvelteKit

Props

- Modifichiamo ora il chiamante e cioè la pagina Chi Sono in modo da passare dei parametri corretti al componente WhoAmI
  
<br>
<img src="/media/svelte_036.png" class="mx-auto" width="750" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Props

- Modifichiamo ora il chiamante e cioè la pagina Chi Sono in modo da passare dei parametri corretti al componente WhoAmI
  
<br>
<img src="/media/svelte_036.png" class="mx-auto" width="750" />`,frontmatter:{},index:86,start:1382,end:1392,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:N5,meta:{slide:{raw:`
# SvelteKit

Props

<img src="/media/svelte_037.png" class="mx-auto" width="750" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Props

<img src="/media/svelte_037.png" class="mx-auto" width="750" />`,frontmatter:{},index:87,start:1393,end:1400,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:J5,meta:{slide:{raw:`
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
<img src="/media/svelte_038.png" class="mx-auto" width="700" />`,frontmatter:{},index:88,start:1401,end:1412,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:e6,meta:{slide:{raw:`
# SvelteKit

Props

<img src="/media/svelte_039.png" class="mx-auto" width="600" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Props

<img src="/media/svelte_039.png" class="mx-auto" width="600" />`,frontmatter:{},index:89,start:1413,end:1421,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:l6,meta:{slide:{raw:`
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
- Ovviamente cambiando il valore della variabile l'immagine verrà automaticamente aggiornata in modo dinamico`,frontmatter:{},index:90,start:1422,end:1440,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:f6,meta:{slide:{raw:`
# SvelteKit

Dynamic Attributes

- Per comprendere meglio i ***Dynamic Attributes*** modifichiamo il componente WhoAmI aggiungendo la nostra foto

<img src="/media/svelte_040.png" class="mx-auto" width="700" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Dynamic Attributes

- Per comprendere meglio i ***Dynamic Attributes*** modifichiamo il componente WhoAmI aggiungendo la nostra foto

<img src="/media/svelte_040.png" class="mx-auto" width="700" />`,frontmatter:{},index:91,start:1441,end:1450,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:S6,meta:{slide:{raw:`
# SvelteKit

Dynamic Attributes

- Possiamo usare come dymanic attribute una variabile esterna

<img src="/media/svelte_041.png" class="mx-auto" width="700" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Dynamic Attributes

- Possiamo usare come dymanic attribute una variabile esterna

<img src="/media/svelte_041.png" class="mx-auto" width="700" />`,frontmatter:{},index:92,start:1451,end:1461,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:I6,meta:{slide:{raw:`
# SvelteKit

Dynamic Attributes


<img src="/media/svelte_042.png" class="mx-auto" width="550" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Dynamic Attributes


<img src="/media/svelte_042.png" class="mx-auto" width="550" />`,frontmatter:{},index:93,start:1462,end:1471,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:W6,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:94,start:1472,end:1502,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:j6,meta:{slide:{raw:`
# SvelteKit

Dynamic Attributes: Esercitazione_09

- Modificare il componente WhoAmI in modo da passare la larghezza dell'immagine come parametro
- Utilizzare lo shorthand per il dynamic attribute

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

Dynamic Attributes: Esercitazione_09

- Modificare il componente WhoAmI in modo da passare la larghezza dell'immagine come parametro
- Utilizzare lo shorthand per il dynamic attribute

- Consegnare su github il progetto modificato`,frontmatter:{},index:95,start:1503,end:1514,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:G6,meta:{slide:{raw:`
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
- In questo modo sarà facilissimo ed immediato accedere al valore dell'input text (pensate quanto è macchinoso in vanilla JS)`,frontmatter:{},index:96,start:1515,end:1534,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:lK,meta:{slide:{raw:`
# SvelteKit

Binding: Esercitazione_10

- Per comprendere il meccanismo del binding abbiamo bisogno di una nuova pagina nella nostra app
- Creare una nuova pagina chiamata **Input**
- Creare il relativo menu nella barra nav e linkare la pagina

<br>
<img src="/media/svelte_043.png" class="mx-auto" width="650" />

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

Binding: Esercitazione_10

- Per comprendere il meccanismo del binding abbiamo bisogno di una nuova pagina nella nostra app
- Creare una nuova pagina chiamata **Input**
- Creare il relativo menu nella barra nav e linkare la pagina

<br>
<img src="/media/svelte_043.png" class="mx-auto" width="650" />

- Consegnare su github il progetto modificato`,frontmatter:{},index:97,start:1535,end:1550,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:hK,meta:{slide:{raw:`
# SvelteKit

Bindings

- Ora modifichiamo la pafina input aggiungendo un input text box e creando un binding con una variabile

<br>
<img src="/media/svelte_044.png" class="mx-auto" width="400" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Bindings

- Ora modifichiamo la pafina input aggiungendo un input text box e creando un binding con una variabile

<br>
<img src="/media/svelte_044.png" class="mx-auto" width="400" />`,frontmatter:{},index:98,start:1551,end:1561,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:wK,meta:{slide:{raw:`
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
- Anche in questo caso realizzare la stessa cosa in vanilla JS sarebbe molto più laborioso`,frontmatter:{},index:99,start:1562,end:1574,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:CK,meta:{slide:{raw:`
# SvelteKit

Bindings

<img src="/media/svelte_046.gif" class="mx-auto" width="700" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Bindings

<img src="/media/svelte_046.gif" class="mx-auto" width="700" />`,frontmatter:{},index:100,start:1575,end:1582,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:PK,meta:{slide:{raw:`
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

<img src="/media/svelte_047.png" class="mx-auto" width="450" style="position:relative;top: -300px;right:-250px;"/>`,frontmatter:{},index:101,start:1583,end:1601,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:DK,meta:{slide:{raw:`
# SvelteKit

Bindings

<img src="/media/svelte_048.gif" class="mx-auto" width="700" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Bindings

<img src="/media/svelte_048.gif" class="mx-auto" width="700" />`,frontmatter:{},index:102,start:1602,end:1609,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:YK,meta:{slide:{raw:`
# SvelteKit

Binding: Esercitazione_11

- Modificare la pagina *Input* in modo che venga aggiunto un nuovo input text per leggere in input la residenza
- Utilizzare il meccanismo del binding

<br>
<img src="/media/svelte_049.png" class="mx-auto" width="750" />

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

Binding: Esercitazione_11

- Modificare la pagina *Input* in modo che venga aggiunto un nuovo input text per leggere in input la residenza
- Utilizzare il meccanismo del binding

<br>
<img src="/media/svelte_049.png" class="mx-auto" width="750" />

- Consegnare su github il progetto modificato`,frontmatter:{},index:103,start:1610,end:1624,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:iP,meta:{slide:{raw:`
# SvelteKit

La pagina e il component Counter

- Realizziamo ora la pagina Counter e linkiamola alla nav bar (si lascia come esercizio agli studenti)

<br>
<img src="/media/svelte_050.png" class="mx-auto" width="800" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

La pagina e il component Counter

- Realizziamo ora la pagina Counter e linkiamola alla nav bar (si lascia come esercizio agli studenti)

<br>
<img src="/media/svelte_050.png" class="mx-auto" width="800" />`,frontmatter:{},index:104,start:1625,end:1636,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:cP,meta:{slide:{raw:`
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
- Un componente svelte implementa il meccanismo del \`encapsulation\``,frontmatter:{},index:105,start:1637,end:1648,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:hP,meta:{slide:{raw:`
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
	let counter = 0; // stato di un contatore
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
	let counter = 0; // stato di un contatore
<\/script>
\`\`\``,frontmatter:{},index:106,start:1649,end:1667,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:xP,meta:{slide:{raw:`
# Svelte

Stateful component

- Ma come si aggiorna lo stato di un componente?
- Altri framework come Vue o React, rendono questa operazione poco intuitiva
- Al contrario una cosa grandiosa di Svelte è che non è necessario fare nulla di speciale per aggiornare lo stato di un componente.

\`\`\`html
<script>
	let counter = 0;

	function incrementa() {
		counter++;
	}
<\/script>
\`\`\` 
<br>

- In altre parole in Svelte, per aggiornare lo stato di un componente, basta solo un'operazione di assegnazione in qualsiasi parte del componente 

`,title:"Svelte",level:1,content:`# Svelte

Stateful component

- Ma come si aggiorna lo stato di un componente?
- Altri framework come Vue o React, rendono questa operazione poco intuitiva
- Al contrario una cosa grandiosa di Svelte è che non è necessario fare nulla di speciale per aggiornare lo stato di un componente.

\`\`\`html
<script>
	let counter = 0;

	function incrementa() {
		counter++;
	}
<\/script>
\`\`\` 
<br>

- In altre parole in Svelte, per aggiornare lo stato di un componente, basta solo un'operazione di assegnazione in qualsiasi parte del componente`,frontmatter:{},index:107,start:1668,end:1691,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:MP,meta:{slide:{raw:`
# SvelteKit

La pagina e il component Counter

- Ora realizziamo un componente chiamato *Counter* (*counter.svelte*)
- Questo componente permette di incrementare/decrementare un contatore 
- Il valore iniziale è una props esterna con default (zero) 0 

<br>
<img src="/media/svelte_051.png" class="mx-auto" width="500" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

La pagina e il component Counter

- Ora realizziamo un componente chiamato *Counter* (*counter.svelte*)
- Questo componente permette di incrementare/decrementare un contatore 
- Il valore iniziale è una props esterna con default (zero) 0 

<br>
<img src="/media/svelte_051.png" class="mx-auto" width="500" />`,frontmatter:{},index:108,start:1692,end:1704,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:RP,meta:{slide:{raw:`
# SvelteKit

La pagina e il component Counter


<img src="/media/svelte_054.png" class="mx-auto" width="600" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

La pagina e il component Counter


<img src="/media/svelte_054.png" class="mx-auto" width="600" />`,frontmatter:{},index:109,start:1705,end:1713,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:VP,meta:{slide:{raw:`
# SvelteKit

La pagina e il component Counter

**counter.svelte (script)**

<img src="/media/svelte_052.png" class="mx-auto" width="700" />

- Utilizziamo icone e font di google (sono molto utili)
- Da notare l'uso della sezione \`<svelte:head>\`
`,title:"SvelteKit",level:1,content:`# SvelteKit

La pagina e il component Counter

**counter.svelte (script)**

<img src="/media/svelte_052.png" class="mx-auto" width="700" />

- Utilizziamo icone e font di google (sono molto utili)
- Da notare l'uso della sezione \`<svelte:head>\``,frontmatter:{},index:110,start:1714,end:1726,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:GP,meta:{slide:{raw:`
# SvelteKit

La pagina e il component Counter

**counter.svelte (html)**

<img src="/media/svelte_053.png" class="mx-auto" width="600" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

La pagina e il component Counter

**counter.svelte (html)**

<img src="/media/svelte_053.png" class="mx-auto" width="600" />`,frontmatter:{},index:111,start:1727,end:1736,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:lL,meta:{slide:{raw:`
# SvelteKit

La pagina e il component Counter

**counter.svelte (css)**

<img src="/media/svelte_055.png" class="mx-auto" width="300" style="position: relative; top: -10px; right: 100px;"/>
<img src="/media/svelte_056.png" class="mx-auto" width="300" style="position: relative; top: -350px; right: -250px;"/>
`,title:"SvelteKit",level:1,content:`# SvelteKit

La pagina e il component Counter

**counter.svelte (css)**

<img src="/media/svelte_055.png" class="mx-auto" width="300" style="position: relative; top: -10px; right: 100px;"/>
<img src="/media/svelte_056.png" class="mx-auto" width="300" style="position: relative; top: -350px; right: -250px;"/>`,frontmatter:{},index:112,start:1737,end:1747,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:mL,meta:{slide:{raw:`
# SvelteKit

La pagina e il component Counter

<img src="/media/svelte_057.png" class="mx-auto" width="800" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

La pagina e il component Counter

<img src="/media/svelte_057.png" class="mx-auto" width="800" />`,frontmatter:{},index:113,start:1748,end:1756,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:gL,meta:{slide:{raw:`
# SvelteKit

DOM Events

- A questo punto il nostro componente **Counter** viene visualizzato correttamente
- E se il chiamante passa un valore iniziale per *counter* questo viene visualizzato correttamente 
- Tuttavia se interagiamo con il componente, premiamo il pulsante \`+\` o il pulsante \`-\` non succede nulla
- Ciò è normale perchè quando premiamo su uno dei pulsanti **VIENE** generato un evento, ma **NON** viene gestito dal nostro componente
- Quindi in pratica l'evento viene perso e pertanto nessuna operazione particolare viene eseguita
- Quindi **E' NECESSARIO** gestire gli eventi del DOM e del nostro componente
- Svelte rende questa gestione estremamente facile e intuitiva e molto più facile e veloce rispetto a vanillaJS o altri tipi di framework
`,title:"SvelteKit",level:1,content:`# SvelteKit

DOM Events

- A questo punto il nostro componente **Counter** viene visualizzato correttamente
- E se il chiamante passa un valore iniziale per *counter* questo viene visualizzato correttamente 
- Tuttavia se interagiamo con il componente, premiamo il pulsante \`+\` o il pulsante \`-\` non succede nulla
- Ciò è normale perchè quando premiamo su uno dei pulsanti **VIENE** generato un evento, ma **NON** viene gestito dal nostro componente
- Quindi in pratica l'evento viene perso e pertanto nessuna operazione particolare viene eseguita
- Quindi **E' NECESSARIO** gestire gli eventi del DOM e del nostro componente
- Svelte rende questa gestione estremamente facile e intuitiva e molto più facile e veloce rispetto a vanillaJS o altri tipi di framework`,frontmatter:{},index:114,start:1757,end:1770,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:$L,meta:{slide:{raw:`
# SvelteKit

DOM Events

- Ogni componente HTML emette degli eventi (mouse click, keyboard press, resize, load, ...)
- Per poter gestire questi eventi è necessario specificare due elementi
  1. \`event handler\`: una funzione che gestisce l'evento e che viene invocata solo al verificarsi dell'evento stesso
  2. \`event hook\`: "un posto" a cui agganciare/collegare l'event handler

<br>
<img src="/media/svelte_058.png" class="mx-auto" width="350" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

DOM Events

- Ogni componente HTML emette degli eventi (mouse click, keyboard press, resize, load, ...)
- Per poter gestire questi eventi è necessario specificare due elementi
  1. \`event handler\`: una funzione che gestisce l'evento e che viene invocata solo al verificarsi dell'evento stesso
  2. \`event hook\`: "un posto" a cui agganciare/collegare l'event handler

<br>
<img src="/media/svelte_058.png" class="mx-auto" width="350" />`,frontmatter:{},index:115,start:1771,end:1784,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:KL,meta:{slide:{raw:`
# SvelteKit

DOM Events

<img src="/media/svelte_058.png" class="mx-auto" width="350" />

<br>

- Quando l'utente fa click sul pulsante, viene invocata ed eseguita la funzione *button_handler*
- In questo semplicissimo modo Svelte permette una facile gestioni degli eventi DOM
- Svelte permette anche di utilizzare un \`inline handler\`

<br>

\`\`\`js
<button on:click={() => counter++}>Premi Qui</button>
\`\`\`

`,title:"SvelteKit",level:1,content:`# SvelteKit

DOM Events

<img src="/media/svelte_058.png" class="mx-auto" width="350" />

<br>

- Quando l'utente fa click sul pulsante, viene invocata ed eseguita la funzione *button_handler*
- In questo semplicissimo modo Svelte permette una facile gestioni degli eventi DOM
- Svelte permette anche di utilizzare un \`inline handler\`

<br>

\`\`\`js
<button on:click={() => counter++}>Premi Qui</button>
\`\`\``,frontmatter:{},index:116,start:1785,end:1805,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",name:"page-118",component:DL,meta:{slide:{raw:`
# SvelteKit

DOM Events

<div style="width:50%;">

- Aggiungiamo ora un event handler per il pulsante + ed uno per il pulsante -
- Modifichiamo counter.svelte nel seguente modo

</div>

<img src="/media/svelte_059.png" class="mx-auto" width="450" style="position:relative; left:250px;top:-170px;"/>

`,title:"SvelteKit",level:1,content:`# SvelteKit

DOM Events

<div style="width:50%;">

- Aggiungiamo ora un event handler per il pulsante + ed uno per il pulsante -
- Modifichiamo counter.svelte nel seguente modo

</div>

<img src="/media/svelte_059.png" class="mx-auto" width="450" style="position:relative; left:250px;top:-170px;"/>`,frontmatter:{},index:117,start:1806,end:1821,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:117,no:118},__clicksElements:[],__preloaded:!1}},{path:"119",name:"page-119",component:BL,meta:{slide:{raw:`
# SvelteKit

DOM Events

- Bene in questo modo quando l'utente clicca sul pulsante + il contatore si incrementa e viceversa quando preme - si decrementa di un'unità
- Da notare che il valore del contatore viene aggiornato automaticamente senza la necessità di nessuna operazione da parte dello sviluppatore (in vanilla JS sarebbe stato molto più laborioso ottenere lo stesso effetto)
- Quindi gli handler agiscono solo sullo stato del componente (il valore della variabile counter) e non si occupano della parte di visualizzazione che è a carico di Svelte
`,title:"SvelteKit",level:1,content:`# SvelteKit

DOM Events

- Bene in questo modo quando l'utente clicca sul pulsante + il contatore si incrementa e viceversa quando preme - si decrementa di un'unità
- Da notare che il valore del contatore viene aggiornato automaticamente senza la necessità di nessuna operazione da parte dello sviluppatore (in vanilla JS sarebbe stato molto più laborioso ottenere lo stesso effetto)
- Quindi gli handler agiscono solo sullo stato del componente (il valore della variabile counter) e non si occupano della parte di visualizzazione che è a carico di Svelte`,frontmatter:{},index:118,start:1822,end:1831,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:118,no:119},__clicksElements:[],__preloaded:!1}},{path:"120",name:"page-120",component:GL,meta:{slide:{raw:`
# SvelteKit

DOM Events

<img src="/media/svelte_060.gif" class="mx-auto" width="700" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

DOM Events

<img src="/media/svelte_060.gif" class="mx-auto" width="700" />`,frontmatter:{},index:119,start:1832,end:1840,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:119,no:120},__clicksElements:[],__preloaded:!1}},{path:"121",name:"page-121",component:o8,meta:{slide:{raw:`
# SvelteKit

Component Bindings

- In molti casi è necessario propagare il valore dello stato del componente al componente choiamante
- Come possiamo fare in modo che il valore della variabile counter venga condiviso con il componente chiamante (pagina)?
- Per realizzare quanto descritto possiamo utilizzare il concetto di \`Component Binding\`
- In modo analogo al binding dei valori dei tag HTML, possiamo creare, nel chiamante, un binding alle props del componente
- Nel nostro caso la props counter è esposta al chiamante (*extern*) e quindi possiamo fare un binding a tale variabile
- Pertanto ogni volta che la variabile counter cambierà anche la variabile con cui abbiamo fatto il binding cambierà
`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Bindings

- In molti casi è necessario propagare il valore dello stato del componente al componente choiamante
- Come possiamo fare in modo che il valore della variabile counter venga condiviso con il componente chiamante (pagina)?
- Per realizzare quanto descritto possiamo utilizzare il concetto di \`Component Binding\`
- In modo analogo al binding dei valori dei tag HTML, possiamo creare, nel chiamante, un binding alle props del componente
- Nel nostro caso la props counter è esposta al chiamante (*extern*) e quindi possiamo fare un binding a tale variabile
- Pertanto ogni volta che la variabile counter cambierà anche la variabile con cui abbiamo fatto il binding cambierà`,frontmatter:{},index:120,start:1841,end:1853,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:120,no:121},__clicksElements:[],__preloaded:!1}},{path:"122",name:"page-122",component:d8,meta:{slide:{raw:`
# SvelteKit

Component Bindings

- Modifichiamo la pagina counter nel seguente modo

<br>
<img src="/media/svelte_061.png" class="mx-auto" width="700" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Bindings

- Modifichiamo la pagina counter nel seguente modo

<br>
<img src="/media/svelte_061.png" class="mx-auto" width="700" />`,frontmatter:{},index:121,start:1854,end:1865,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:121,no:122},__clicksElements:[],__preloaded:!1}},{path:"123",name:"page-123",component:w8,meta:{slide:{raw:`
# SvelteKit

Component Bindings

- Come si vede dall'esempio il binding di props dei nostri componenti si implemente nel seguente modo

\`\`\`html
<Componente bind:props={variabile_locale}>
\`\`\`

dove:
- \`props\`: è la proprietà del componente a cui vogliamo fare il binding
- \`variabile_locale\`: è la variabile, locale al chiamante, che vogliamo "collegare" (bind) alla props del componente

<br>

<Banner fg="yellow" bg="green">
Importante notare che il bind è bidirezionale
</Banner>

<br>

- Perciò se cambio il valore di *variabile_locale* cambierà anche il valore di *props*
- E viceversa: se cambia il valore di *props* cambia il valore di *variabile_locale*
`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Bindings

- Come si vede dall'esempio il binding di props dei nostri componenti si implemente nel seguente modo

\`\`\`html
<Componente bind:props={variabile_locale}>
\`\`\`

dove:
- \`props\`: è la proprietà del componente a cui vogliamo fare il binding
- \`variabile_locale\`: è la variabile, locale al chiamante, che vogliamo "collegare" (bind) alla props del componente

<br>

<Banner fg="yellow" bg="green">
Importante notare che il bind è bidirezionale
</Banner>

<br>

- Perciò se cambio il valore di *variabile_locale* cambierà anche il valore di *props*
- E viceversa: se cambia il valore di *props* cambia il valore di *variabile_locale*`,frontmatter:{},index:122,start:1866,end:1892,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:122,no:123},__clicksElements:[],__preloaded:!1}},{path:"124",name:"page-124",component:C8,meta:{slide:{raw:`
# SvelteKit

Component Bindings

<img src="/media/svelte_062.gif" class="mx-auto" width="700" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Bindings

<img src="/media/svelte_062.gif" class="mx-auto" width="700" />`,frontmatter:{},index:123,start:1893,end:1900,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:123,no:124},__clicksElements:[],__preloaded:!1}},{path:"125",name:"page-125",component:A8,meta:{slide:{raw:`
# SvelteKit

DOM Events: Esercitazione_12

- Creare un nuovo componente chiamato DoubeClounter (double_counter.svelte)
- Questo componente funziona in modo simile a Counter, ma quando l'utente preme + il suo valore aumenta di due unità, mentre quando preme - il suo valore viene decrementato di 3 unità
- Aggiungere il componente alla pagina counter
- Tramite il component binding vidualizzare nella pagina counter anche il valore del componente DoubleCounter

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

DOM Events: Esercitazione_12

- Creare un nuovo componente chiamato DoubeClounter (double_counter.svelte)
- Questo componente funziona in modo simile a Counter, ma quando l'utente preme + il suo valore aumenta di due unità, mentre quando preme - il suo valore viene decrementato di 3 unità
- Aggiungere il componente alla pagina counter
- Tramite il component binding vidualizzare nella pagina counter anche il valore del componente DoubleCounter

- Consegnare su github il progetto modificato`,frontmatter:{},index:124,start:1901,end:1914,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:124,no:125},__clicksElements:[],__preloaded:!1}},{path:"126",name:"page-126",component:W8,meta:{slide:{raw:`
# SvelteKit

Logic Statements

- Come sappiamo HTML non è un linguaggio di programmazione quindi non ha costrutti logici o iterativi
- Tuttavia spesso è necessario visualizzare un blocco di HTML in modo condizionale, in funzione di uno stato o variabile
- Anche in questo scenario, Svelte ci viene in aiuto in maniera semplice ed elegante attraverso il concetto di \`logic blocks\`
- Il funzionamengto è molto semplice, svelte mette a disposizione il seguente costrutto

\`\`\`html
{#if <condizione>}
    ....
    <blocco HTML>
    ....
{:else}
    ....
    <blocco HTML alternativo>
    ....
{/if}
\`\`\`
`,title:"SvelteKit",level:1,content:`# SvelteKit

Logic Statements

- Come sappiamo HTML non è un linguaggio di programmazione quindi non ha costrutti logici o iterativi
- Tuttavia spesso è necessario visualizzare un blocco di HTML in modo condizionale, in funzione di uno stato o variabile
- Anche in questo scenario, Svelte ci viene in aiuto in maniera semplice ed elegante attraverso il concetto di \`logic blocks\`
- Il funzionamengto è molto semplice, svelte mette a disposizione il seguente costrutto

\`\`\`html
{#if <condizione>}
    ....
    <blocco HTML>
    ....
{:else}
    ....
    <blocco HTML alternativo>
    ....
{/if}
\`\`\``,frontmatter:{},index:125,start:1915,end:1937,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:125,no:126},__clicksElements:[],__preloaded:!1}},{path:"127",name:"page-127",component:j8,meta:{slide:{raw:`
# SvelteKit

Logic Statements

- Pertanto se la condizione è vera viene visualizzato il *&lt;blocco HTML&gt;* altrimenti viene visualizzato il *&lt;blocco HTML alternativo&gt;*
- In questo modo abbiamo aggiunto al puro HTML una delle capacità proprie di un linguaggio di programmazione
- Ma vediamo un esempio modificando la pagina Counter in modo che se il contatore è &lt; 5 visualizzi la scritta in HML con colore rosso e in caso contrario con colore verde

`,title:"SvelteKit",level:1,content:`# SvelteKit

Logic Statements

- Pertanto se la condizione è vera viene visualizzato il *&lt;blocco HTML&gt;* altrimenti viene visualizzato il *&lt;blocco HTML alternativo&gt;*
- In questo modo abbiamo aggiunto al puro HTML una delle capacità proprie di un linguaggio di programmazione
- Ma vediamo un esempio modificando la pagina Counter in modo che se il contatore è &lt; 5 visualizzi la scritta in HML con colore rosso e in caso contrario con colore verde`,frontmatter:{},index:126,start:1938,end:1948,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:126,no:127},__clicksElements:[],__preloaded:!1}},{path:"128",name:"page-128",component:G8,meta:{slide:{raw:`
# SvelteKit

Logic Statements

- Modifichiamo la pagina counter nel seguente modo

<br>
<img src="/media/svelte_063.png" class="mx-auto" width="450" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Logic Statements

- Modifichiamo la pagina counter nel seguente modo

<br>
<img src="/media/svelte_063.png" class="mx-auto" width="450" />`,frontmatter:{},index:127,start:1949,end:1959,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:127,no:128},__clicksElements:[],__preloaded:!1}},{path:"129",name:"page-129",component:aR,meta:{slide:{raw:`
# SvelteKit

Logic Statements

- Come vedremo in seguite ci sono modi più efficienti per raggiungere lo stesso risultato
- Ma quest'esempio è perfetto per capire l'uso dei blocchi condizionali in Svelte

<br>

<img src="/media/svelte_064.gif" class="mx-auto" width="600" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Logic Statements

- Come vedremo in seguite ci sono modi più efficienti per raggiungere lo stesso risultato
- Ma quest'esempio è perfetto per capire l'uso dei blocchi condizionali in Svelte

<br>

<img src="/media/svelte_064.gif" class="mx-auto" width="600" />`,frontmatter:{},index:128,start:1960,end:1973,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:128,no:129},__clicksElements:[],__preloaded:!1}},{path:"130",name:"page-130",component:mR,meta:{slide:{raw:`
# SvelteKit

Each block

- Un'altro costrutto molto utile, proveniente dai linguaggi di programmazione, ed assente in HTML è il \`ciclo\`
- Spesso in HTML è necessario replicare codice per ottenere una lista di elementi (pensa ad una foto gallery, ad una lista non ordinata,...)
- Anche in questo scenario Svelte ci viene in aiuto.
- Se abbiamo la necessità di iterare una lista (array) di elementi, possiamo usare \`Each block\`

\`\`\`html
{#each <array> as elemento}
    ...
    blocco HTML in cui uso {elemento}
    ...
{/each}
\`\`\`

- In questo modo il blocco HTML sarà ripetuto tante volte quanti sono gli elementi dell'array o in altre parole sarà ripetuto un numero di volte pari alla lunghezza dell'array
- Questo rende la generazione di strutture HTML dinamiche molto semplice

`,title:"SvelteKit",level:1,content:`# SvelteKit

Each block

- Un'altro costrutto molto utile, proveniente dai linguaggi di programmazione, ed assente in HTML è il \`ciclo\`
- Spesso in HTML è necessario replicare codice per ottenere una lista di elementi (pensa ad una foto gallery, ad una lista non ordinata,...)
- Anche in questo scenario Svelte ci viene in aiuto.
- Se abbiamo la necessità di iterare una lista (array) di elementi, possiamo usare \`Each block\`

\`\`\`html
{#each <array> as elemento}
    ...
    blocco HTML in cui uso {elemento}
    ...
{/each}
\`\`\`

- In questo modo il blocco HTML sarà ripetuto tante volte quanti sono gli elementi dell'array o in altre parole sarà ripetuto un numero di volte pari alla lunghezza dell'array
- Questo rende la generazione di strutture HTML dinamiche molto semplice`,frontmatter:{},index:129,start:1974,end:1996,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:129,no:130},__clicksElements:[],__preloaded:!1}},{path:"131",name:"page-131",component:SR,meta:{slide:{raw:`
# SvelteKit

Each block

- Vediamo un esempio che vidualizza una lista di elementi nella pagina Counter
- Modifica la pagina counter nel seguente modo

<br>
<img src="/media/svelte_065.png" class="mx-auto" width="420" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Each block

- Vediamo un esempio che vidualizza una lista di elementi nella pagina Counter
- Modifica la pagina counter nel seguente modo

<br>
<img src="/media/svelte_065.png" class="mx-auto" width="420" />`,frontmatter:{},index:130,start:1997,end:2008,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:130,no:131},__clicksElements:[],__preloaded:!1}},{path:"132",name:"page-132",component:IR,meta:{slide:{raw:`
# SvelteKit

Each block

<img src="/media/svelte_066.png" class="mx-auto" width="650" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Each block

<img src="/media/svelte_066.png" class="mx-auto" width="650" />`,frontmatter:{},index:131,start:2009,end:2017,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:131,no:132},__clicksElements:[],__preloaded:!1}},{path:"133",name:"page-133",component:RR,meta:{slide:{raw:`
# SvelteKit

Each block

- Spesso è utile accedere all'indice dell'iterazione
- Per fare ciò basta modificare il costruttore nel seguente modo

\`\`\`html
{#each <array> as elemento, indice}
    ...
    blocco HTML in cui uso {elemento} e {indice}
    ...
{/each}
\`\`\`

- Quindi modifichiamo la pagina in questo modo

<br>
<img src="/media/svelte_067.png" class="mx-auto" width="450" />0
`,title:"SvelteKit",level:1,content:`# SvelteKit

Each block

- Spesso è utile accedere all'indice dell'iterazione
- Per fare ciò basta modificare il costruttore nel seguente modo

\`\`\`html
{#each <array> as elemento, indice}
    ...
    blocco HTML in cui uso {elemento} e {indice}
    ...
{/each}
\`\`\`

- Quindi modifichiamo la pagina in questo modo

<br>
<img src="/media/svelte_067.png" class="mx-auto" width="450" />0`,frontmatter:{},index:132,start:2018,end:2039,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:132,no:133},__clicksElements:[],__preloaded:!1}},{path:"134",name:"page-134",component:FR,meta:{slide:{raw:`
# SvelteKit

Each block

<img src="/media/svelte_068.png" class="mx-auto" width="650" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Each block

<img src="/media/svelte_068.png" class="mx-auto" width="650" />`,frontmatter:{},index:133,start:2040,end:2048,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:133,no:134},__clicksElements:[],__preloaded:!1}},{path:"135",name:"page-135",component:ZR,meta:{slide:{raw:`
# SvelteKit

Advances Styling

- Nell'esempio del blocco condizionale abbiamo cambiato il colore della scritta, in funzione del valore di contatore, replicando l'HTML
- Questo metodo ha parecchi svantaggi, primo tra tutti la difficile manutenibilità. Se devo modificare qualcosa devo modificarlo in alemno due punti diversi sprecando tempo e essendo soggetto a potenziali errori
- Pertanto come anticipato, vediamo attraverso il concetto di \`Advanced Styling\` come risolvere questo problema in modo elegante
- Svelte ci permette di specificare qualsiasi attributo di un tag HTML con JS
- Pertanto nel nostro esempio quel che dobbiamo fare è cambiare la classe da rosso a verde solo in particolari condizioni. Modichiamo la pagina counter nel seguente modo

<br>
<img src="/media/svelte_069.png" class="mx-auto" width="350" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Advances Styling

- Nell'esempio del blocco condizionale abbiamo cambiato il colore della scritta, in funzione del valore di contatore, replicando l'HTML
- Questo metodo ha parecchi svantaggi, primo tra tutti la difficile manutenibilità. Se devo modificare qualcosa devo modificarlo in alemno due punti diversi sprecando tempo e essendo soggetto a potenziali errori
- Pertanto come anticipato, vediamo attraverso il concetto di \`Advanced Styling\` come risolvere questo problema in modo elegante
- Svelte ci permette di specificare qualsiasi attributo di un tag HTML con JS
- Pertanto nel nostro esempio quel che dobbiamo fare è cambiare la classe da rosso a verde solo in particolari condizioni. Modichiamo la pagina counter nel seguente modo

<br>
<img src="/media/svelte_069.png" class="mx-auto" width="350" />`,frontmatter:{},index:134,start:2049,end:2064,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:134,no:135},__clicksElements:[],__preloaded:!1}},{path:"136",name:"page-136",component:iH,meta:{slide:{raw:`
# SvelteKit

Advances Styling

- Quindi se il valore di contatore è &lt; 5 la classe assume il valore rosso, in caso contrario assume il valore verde
- Quindi abbiamo ottenuto lo stesso effetto di prima ma senza duplicare codice, rendendo la nostra app più compatta, più leggibile e più facile da mantenere
- Ci sono altre situazione in cui un elemento deve essere decorato con una classe in particolari condizioni
- In questo caso possiamo scrivere un codice simile a questo

\`\`\`html
<h2 class={contatore < 5 ? 'rosso' : ''}>
    Il valore del contatore vale: {contatore}
</h2>
\`\`\`

- il tag h2 assume la classe rosso se contatore è minore di 5 altrimenti non viene assegnata nessuna classe CSS
`,title:"SvelteKit",level:1,content:`# SvelteKit

Advances Styling

- Quindi se il valore di contatore è &lt; 5 la classe assume il valore rosso, in caso contrario assume il valore verde
- Quindi abbiamo ottenuto lo stesso effetto di prima ma senza duplicare codice, rendendo la nostra app più compatta, più leggibile e più facile da mantenere
- Ci sono altre situazione in cui un elemento deve essere decorato con una classe in particolari condizioni
- In questo caso possiamo scrivere un codice simile a questo

\`\`\`html
<h2 class={contatore < 5 ? 'rosso' : ''}>
    Il valore del contatore vale: {contatore}
</h2>
\`\`\`

- il tag h2 assume la classe rosso se contatore è minore di 5 altrimenti non viene assegnata nessuna classe CSS`,frontmatter:{},index:135,start:2065,end:2083,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:135,no:136},__clicksElements:[],__preloaded:!1}},{path:"137",name:"page-137",component:mH,meta:{slide:{raw:`
# SvelteKit

Advances Styling

- Questo è un caso così comune che Svlete ci fornisce un modo più compatto di scrivere questo codice
  
\`\`\`html
<h2 class:rosso={contatore < 5}>
    Il valore del contatore vale: {contatore}
</h2>
\`\`\`

- class:rosso è il nome della classe che vogliamo assegnare

- Così facendo otteniamo lo stesso risultato di prima ma in modo più compatto
- Spesso il nome della classe coincide con il nome della variabile da cui dipende. In questi casi è possibile scrivere il codice in modo ancora più compatto

\`\`\`html
<h2 class:sottolineato>
    Il valore del contatore vale: {contatore}
</h2>
\`\`\`

- se sottolineato == true allora viene applicata la classe sottolineato
`,title:"SvelteKit",level:1,content:`# SvelteKit

Advances Styling

- Questo è un caso così comune che Svlete ci fornisce un modo più compatto di scrivere questo codice
  
\`\`\`html
<h2 class:rosso={contatore < 5}>
    Il valore del contatore vale: {contatore}
</h2>
\`\`\`

- class:rosso è il nome della classe che vogliamo assegnare

- Così facendo otteniamo lo stesso risultato di prima ma in modo più compatto
- Spesso il nome della classe coincide con il nome della variabile da cui dipende. In questi casi è possibile scrivere il codice in modo ancora più compatto

\`\`\`html
<h2 class:sottolineato>
    Il valore del contatore vale: {contatore}
</h2>
\`\`\`

- se sottolineato == true allora viene applicata la classe sottolineato`,frontmatter:{},index:136,start:2084,end:2110,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:136,no:137},__clicksElements:[],__preloaded:!1}},{path:"138",name:"page-138",component:bH,meta:{slide:{raw:`
# SvelteKit

Advances Styling

<img src="/media/svelte_070.png" class="mx-auto" width="450" style="position: relative; top:-80px;" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Advances Styling

<img src="/media/svelte_070.png" class="mx-auto" width="450" style="position: relative; top:-80px;" />`,frontmatter:{},index:137,start:2111,end:2119,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:137,no:138},__clicksElements:[],__preloaded:!1}},{path:"139",name:"page-139",component:$H,meta:{slide:{raw:`
# SvelteKit

Advances Styling

<img src="/media/svelte_071.png" class="mx-auto" width="700" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Advances Styling

<img src="/media/svelte_071.png" class="mx-auto" width="700" />`,frontmatter:{},index:138,start:2120,end:2128,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:138,no:139},__clicksElements:[],__preloaded:!1}},{path:"140",name:"page-140",component:OH,meta:{slide:{raw:`
# SvelteKit

Reactivity

- Come abbiamo visto negli esempi precedenti al centro di Svelte c'è un potente sistema di reattività per mantenere il DOM sincronizzato con lo stato dell'applicazione, ad esempio in risposta a un evento 
- Occiamente questo processo non avviene in automatico, e Svelte "instrumenta" il codice in modo che al variare del valore della variabile il DOM venga aggiornato in modo coerente
- La reattività di Svelte non solo mantiene il DOM sincronizzato con le variabili della tua applicazione, come visto.
- Svelte può anche mantenere le variabili sincronizzate tra loro utilizzando dichiarazioni reattive. Questo meccanismo è molto potente e permette di scrivere codice in manierà facile che in vanilla JS sarebbe piuttosto tedioso
- Vediamo un esempio, modificando la pagina counter nel seguente modo
`,title:"SvelteKit",level:1,content:`# SvelteKit

Reactivity

- Come abbiamo visto negli esempi precedenti al centro di Svelte c'è un potente sistema di reattività per mantenere il DOM sincronizzato con lo stato dell'applicazione, ad esempio in risposta a un evento 
- Occiamente questo processo non avviene in automatico, e Svelte "instrumenta" il codice in modo che al variare del valore della variabile il DOM venga aggiornato in modo coerente
- La reattività di Svelte non solo mantiene il DOM sincronizzato con le variabili della tua applicazione, come visto.
- Svelte può anche mantenere le variabili sincronizzate tra loro utilizzando dichiarazioni reattive. Questo meccanismo è molto potente e permette di scrivere codice in manierà facile che in vanilla JS sarebbe piuttosto tedioso
- Vediamo un esempio, modificando la pagina counter nel seguente modo`,frontmatter:{},index:139,start:2129,end:2140,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:139,no:140},__clicksElements:[],__preloaded:!1}},{path:"141",name:"page-141",component:LH,meta:{slide:{raw:`
# SvelteKit

Reactivity

<img src="/media/svelte_072.png" class="mx-auto" width="500" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Reactivity

<img src="/media/svelte_072.png" class="mx-auto" width="500" />`,frontmatter:{},index:140,start:2141,end:2149,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:140,no:141},__clicksElements:[],__preloaded:!1}},{path:"142",name:"page-142",component:qH,meta:{slide:{raw:`
# SvelteKit

Reactivity

- Questo costrutto non è comune e quindi non preoccuparti se non ti risulta subito chiaro.
- Il costrutto \`$:\`, introduce un blocco di JavaScript valido, che Svelte interpreta nel senso di "riesegui questo codice ogni volta che uno dei valori di riferimento cambia". 
- Pertanto siccome il valore di *doppio* dipende dal valore di *contatore*, ogni volta che *contatore* cambierà l'espressione verrà nuovamente calcolata (contatore * 2) e il risultato assegnato a *doppio*
- In questo modo possiamo correlare 2 o più variabili senza dover scrivere del codice condizionale
- Questa è una soluzione elegante e **UNICA di SVELTE**. 
- Non è presente nello stesso modo in nessun altro framework JS
- In generale il costrutto reattivo assume la seguente forma

\`\`\`html
$: {
    ....
    codice JS
    ...
}
\`\`\`
`,title:"SvelteKit",level:1,content:`# SvelteKit

Reactivity

- Questo costrutto non è comune e quindi non preoccuparti se non ti risulta subito chiaro.
- Il costrutto \`$:\`, introduce un blocco di JavaScript valido, che Svelte interpreta nel senso di "riesegui questo codice ogni volta che uno dei valori di riferimento cambia". 
- Pertanto siccome il valore di *doppio* dipende dal valore di *contatore*, ogni volta che *contatore* cambierà l'espressione verrà nuovamente calcolata (contatore * 2) e il risultato assegnato a *doppio*
- In questo modo possiamo correlare 2 o più variabili senza dover scrivere del codice condizionale
- Questa è una soluzione elegante e **UNICA di SVELTE**. 
- Non è presente nello stesso modo in nessun altro framework JS
- In generale il costrutto reattivo assume la seguente forma

\`\`\`html
$: {
    ....
    codice JS
    ...
}
\`\`\``,frontmatter:{},index:141,start:2150,end:2171,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:141,no:142},__clicksElements:[],__preloaded:!1}},{path:"143",name:"page-143",component:JH,meta:{slide:{raw:`
# SvelteKit

Reactivity


<img src="/media/svelte_073.gif" class="mx-auto" width="650" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Reactivity


<img src="/media/svelte_073.gif" class="mx-auto" width="650" />`,frontmatter:{},index:142,start:2172,end:2180,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:142,no:143},__clicksElements:[],__preloaded:!1}},{path:"144",name:"page-144",component:XH,meta:{slide:{raw:`
# SvelteKit

Reactivity: Esercitazione_13

- Modificare la pagina counter in modo che utilizzando la reattività, il valore della variabile sottolineato diventi true il valore di DoubleCounter è pari e diventi false quando tale valore è dispari

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

Reactivity: Esercitazione_13

- Modificare la pagina counter in modo che utilizzando la reattività, il valore della variabile sottolineato diventi true il valore di DoubleCounter è pari e diventi false quando tale valore è dispari

- Consegnare su github il progetto modificato`,frontmatter:{},index:143,start:2181,end:2191,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:143,no:144},__clicksElements:[],__preloaded:!1}},{path:"145",name:"page-145",component:i7,meta:{slide:{raw:`
# SvelteKit

Component Events

- Come visto in precedenza, con Svelte è facilissimo gestire gli eventi del DOM
- Chiaramente sarebbe molto utile avere la stessa possibilità per i componenti sviluppati da noi
- Svelte ci viene incontro per risolvere questo problema con il meccanismo del \`Component Events\`
- In altre parole possiamo fare in modo che i nostri componenti emettano degli eventi e che il chiamante si registri su questi eventi e li gestisca tramite un handler, esattamente come per gli eventi stanrd del DOM
- In altre parole, esattamente come un componente HTML standard, anche i nostri componenti diventano *emettitori* di eventi
- Questo è un meccanismo molto importante e Svelte lo rende semplicissimo
- Vediamo....
`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Events

- Come visto in precedenza, con Svelte è facilissimo gestire gli eventi del DOM
- Chiaramente sarebbe molto utile avere la stessa possibilità per i componenti sviluppati da noi
- Svelte ci viene incontro per risolvere questo problema con il meccanismo del \`Component Events\`
- In altre parole possiamo fare in modo che i nostri componenti emettano degli eventi e che il chiamante si registri su questi eventi e li gestisca tramite un handler, esattamente come per gli eventi stanrd del DOM
- In altre parole, esattamente come un componente HTML standard, anche i nostri componenti diventano *emettitori* di eventi
- Questo è un meccanismo molto importante e Svelte lo rende semplicissimo
- Vediamo....`,frontmatter:{},index:144,start:2192,end:2205,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:144,no:145},__clicksElements:[],__preloaded:!1}},{path:"146",name:"page-146",component:d7,meta:{slide:{raw:`
# SvelteKit

Component Events

- Vogliamo modificare il componente Counter in modo che ogni volta l'utente preme il tasto + venga emesso l'evento *plus* e ogni volta che preme - vengo emesso l'evento *minus*
- Il chiamante, la pagina counter, si registrerà su questi eventi e fornirà un handler per ciascuno di essi
- Per prima cosa dobbiamo fare in modo che il nostro componente sia in grado di generare eventi. Per questo usiamo il metodo ***createEventDispatcher***
- Il metodo *createEventDispatcher* deve essere chiamato durante l'inizializzazione del componente cioè all'inizio della sua sezione script
- Successivamente potremo generare ed emettere un evento tramite il metodo

\`\`\`html
dispatch('<nome_evento>', {
			<oggetto o valore da trasportare nell'evento>
		});
\`\`\`

- Quindi una volta eseguito il metodo *dispatch*, l'evento sarà generato e gestito dall'handler specificato dal chiamante, esattamente come per un componente standard HTML
`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Events

- Vogliamo modificare il componente Counter in modo che ogni volta l'utente preme il tasto + venga emesso l'evento *plus* e ogni volta che preme - vengo emesso l'evento *minus*
- Il chiamante, la pagina counter, si registrerà su questi eventi e fornirà un handler per ciascuno di essi
- Per prima cosa dobbiamo fare in modo che il nostro componente sia in grado di generare eventi. Per questo usiamo il metodo ***createEventDispatcher***
- Il metodo *createEventDispatcher* deve essere chiamato durante l'inizializzazione del componente cioè all'inizio della sua sezione script
- Successivamente potremo generare ed emettere un evento tramite il metodo

\`\`\`html
dispatch('<nome_evento>', {
			<oggetto o valore da trasportare nell'evento>
		});
\`\`\`

- Quindi una volta eseguito il metodo *dispatch*, l'evento sarà generato e gestito dall'handler specificato dal chiamante, esattamente come per un componente standard HTML`,frontmatter:{},index:145,start:2206,end:2225,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:145,no:146},__clicksElements:[],__preloaded:!1}},{path:"147",name:"page-147",component:b7,meta:{slide:{raw:`
# SvelteKit

Component Events

<div style="width:40%;">

- Iniziamo a  modificare il componente Counter in questo modo

</div>

<br>
<img src="/media/svelte_074.png" class="mx-auto" width="430" style="position:relative; top:-180px; left: 200px;"/>

`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Events

<div style="width:40%;">

- Iniziamo a  modificare il componente Counter in questo modo

</div>

<br>
<img src="/media/svelte_074.png" class="mx-auto" width="430" style="position:relative; top:-180px; left: 200px;"/>`,frontmatter:{},index:146,start:2226,end:2241,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:146,no:147},__clicksElements:[],__preloaded:!1}},{path:"148",name:"page-148",component:I7,meta:{slide:{raw:`
# SvelteKit

Component Events

- Ora aggiungiamo il dispatcher alla pagina counter per gestire l'evento generato

<br>
<img src="/media/svelte_075.png" class="mx-auto" width="550" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Events

- Ora aggiungiamo il dispatcher alla pagina counter per gestire l'evento generato

<br>
<img src="/media/svelte_075.png" class="mx-auto" width="550" />`,frontmatter:{},index:147,start:2242,end:2253,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:147,no:148},__clicksElements:[],__preloaded:!1}},{path:"149",name:"page-149",component:A7,meta:{slide:{raw:`
# SvelteKit

Component Events

<img src="/media/svelte_076.gif" class="mx-auto" width="800" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Events

<img src="/media/svelte_076.gif" class="mx-auto" width="800" />`,frontmatter:{},index:148,start:2254,end:2261,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:148,no:149},__clicksElements:[],__preloaded:!1}},{path:"150",name:"page-150",component:D7,meta:{slide:{raw:`
# SvelteKit

Component Events

- Importante notare e ricordare che gli eventi dei componenti custom, al contrario dei componenti standard, vengono propagati solo al chiamante
- Quindi se abbiamo una gerarchia di componenti uno incluso nell'altro (come una matriosca), se vogliamo che l'evento generato dal componente più interno venga propagato fino al primo componente dovremo fare in modo che ogni componente intermedia faccia il forwarding dell'evento ricevuto

<br>
<img src="/media/svelte_077.png" class="mx-auto" width="250" />
`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Events

- Importante notare e ricordare che gli eventi dei componenti custom, al contrario dei componenti standard, vengono propagati solo al chiamante
- Quindi se abbiamo una gerarchia di componenti uno incluso nell'altro (come una matriosca), se vogliamo che l'evento generato dal componente più interno venga propagato fino al primo componente dovremo fare in modo che ogni componente intermedia faccia il forwarding dell'evento ricevuto

<br>
<img src="/media/svelte_077.png" class="mx-auto" width="250" />`,frontmatter:{},index:149,start:2262,end:2273,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:149,no:150},__clicksElements:[],__preloaded:!1}},{path:"151",name:"page-151",component:B7,meta:{slide:{raw:`
# SvelteKit

Component Events: Esercitazione_14

- Aggiungere la generazione di due eventi distinti al componente DoubleCounter
- Intercettare e gestire nel componente chiamante i due eventi emessi da DoubleCounter

- Consegnare su github il progetto modificato

`,title:"SvelteKit",level:1,content:`# SvelteKit

Component Events: Esercitazione_14

- Aggiungere la generazione di due eventi distinti al componente DoubleCounter
- Intercettare e gestire nel componente chiamante i due eventi emessi da DoubleCounter

- Consegnare su github il progetto modificato`,frontmatter:{},index:150,start:2274,end:2285,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:150,no:151},__clicksElements:[],__preloaded:!1}},{path:"152",name:"page-152",component:Z7,meta:{slide:{raw:`
# SvelteKit

Stores

- Siccome i componenti Web implementano il concetto di incapsulamento, proprio della OOP, lo stato di un componente rimane invisibile agli altri componenti
- Abbiamo visto tramite il *Component Binding* e il *Component Events* come è possible condividere tale stato tra componenti gerarchicamente correlati
- Ma con questi metodi è impossibile condivider elo stato di un componente con un altro componente o pagina non correlato
- Per esempio,nel nostro caso, come visualizziamo il valore del contatore nella pagina About?
- Questo meccanismo è estremamente utile nello sviluppo di un'applicazione web di media complessità, sarà quasi certamente sicuro che ci saranno più componenti che devono condividere uno stato comune
- Svelte ci corre in aiuto con il meccanismo dello \`Store\`
`,title:"SvelteKit",level:1,content:`# SvelteKit

Stores

- Siccome i componenti Web implementano il concetto di incapsulamento, proprio della OOP, lo stato di un componente rimane invisibile agli altri componenti
- Abbiamo visto tramite il *Component Binding* e il *Component Events* come è possible condividere tale stato tra componenti gerarchicamente correlati
- Ma con questi metodi è impossibile condivider elo stato di un componente con un altro componente o pagina non correlato
- Per esempio,nel nostro caso, come visualizziamo il valore del contatore nella pagina About?
- Questo meccanismo è estremamente utile nello sviluppo di un'applicazione web di media complessità, sarà quasi certamente sicuro che ci saranno più componenti che devono condividere uno stato comune
- Svelte ci corre in aiuto con il meccanismo dello \`Store\``,frontmatter:{},index:151,start:2286,end:2298,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:151,no:152},__clicksElements:[],__preloaded:!1}},{path:"153",name:"page-153",component:s9,meta:{slide:{raw:`
# SvelteKit

Stores

<Banner bg="green" fg="yellow">

Uno <b>Store</b> in Svelte è un oggetto che permette di condividere un valore tra componenti non gerarchicamente correlati

</Banner> 

<br>

- Inizamo creando lo store per contenere il valroe del contatore e condividerlo tra componenti e pagine diverse

\`\`\`bash
src/lib
├── components
│   ├── counter.svelte
│   └── who_am_i.svelte
└── js
    └── store.js
\`\`\`
`,title:"SvelteKit",level:1,content:`# SvelteKit

Stores

<Banner bg="green" fg="yellow">

Uno <b>Store</b> in Svelte è un oggetto che permette di condividere un valore tra componenti non gerarchicamente correlati

</Banner> 

<br>

- Inizamo creando lo store per contenere il valroe del contatore e condividerlo tra componenti e pagine diverse

\`\`\`bash
src/lib
├── components
│   ├── counter.svelte
│   └── who_am_i.svelte
└── js
    └── store.js
\`\`\``,frontmatter:{},index:152,start:2299,end:2323,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:152,no:153},__clicksElements:[],__preloaded:!1}},{path:"154",name:"page-154",component:v9,meta:{slide:{raw:`
# SvelteKit

Stores

- Ecco il semplicissimo codice dello store

<br><br>

- Ora modifichiamo il componente Counter in modo che ogni volta che couter cambia venga aggiornato lo store

<img src="/media/svelte_078.png" class="mx-auto" width="250" style="position:relative; top:-200px; left: 50px;" />
<img src="/media/svelte_079.png" class="mx-auto" width="300" style="position:relative; top:-100px; left: 50px;" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Stores

- Ecco il semplicissimo codice dello store

<br><br>

- Ora modifichiamo il componente Counter in modo che ogni volta che couter cambia venga aggiornato lo store

<img src="/media/svelte_078.png" class="mx-auto" width="250" style="position:relative; top:-200px; left: 50px;" />
<img src="/media/svelte_079.png" class="mx-auto" width="300" style="position:relative; top:-100px; left: 50px;" />`,frontmatter:{},index:153,start:2324,end:2339,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:153,no:154},__clicksElements:[],__preloaded:!1}},{path:"155",name:"page-155",component:x9,meta:{slide:{raw:`
# SvelteKit

Stores

- Quindi ogni volta che l'utente preme + o -, il valore di counter cambia e viene anche aggiornato lo store
- In questo modo lo stato di Counter può essere condiviso con altre pagine o componenti
- Per dimostrare il funzionamento creiamo la pagina About che visualizza il valore dello store, o in altre parole lo stato interno del componente Counter

\`\`\`bash
src/routes
├── about
│   └── +page.svelte
├── chi_sono
│   └── +page.svelte
├── counter
│   └── +page.svelte
├── input
│   └── +page.svelte
├── +layout.svelte
└── +page.svelte
\`\`\`

- Non dimenticarti di linkare la pagina About alla navbar
  `,title:"SvelteKit",level:1,content:`# SvelteKit

Stores

- Quindi ogni volta che l'utente preme + o -, il valore di counter cambia e viene anche aggiornato lo store
- In questo modo lo stato di Counter può essere condiviso con altre pagine o componenti
- Per dimostrare il funzionamento creiamo la pagina About che visualizza il valore dello store, o in altre parole lo stato interno del componente Counter

\`\`\`bash
src/routes
├── about
│   └── +page.svelte
├── chi_sono
│   └── +page.svelte
├── counter
│   └── +page.svelte
├── input
│   └── +page.svelte
├── +layout.svelte
└── +page.svelte
\`\`\`

- Non dimenticarti di linkare la pagina About alla navbar`,frontmatter:{},index:154,start:2340,end:2365,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:154,no:155},__clicksElements:[],__preloaded:!1}},{path:"156",name:"page-156",component:A9,meta:{slide:{raw:`
# SvelteKit

Stores

- Ecco il codice della pagina About

<br>
<img src="/media/svelte_080.png" class="mx-auto" width="600" />

<br>

- Da notare che per accedere allo store sia in lettura che scrittura, è necessariop anteporre il simbolo \`$\` in modo da differenziarlo da una normale variabile
- Quindi ora se l'utente interagisce con il componente Counter e poi passa alla pagina about vedrà visualizzato lo stato interno del componente che è memorizzato nello store
`,title:"SvelteKit",level:1,content:`# SvelteKit

Stores

- Ecco il codice della pagina About

<br>
<img src="/media/svelte_080.png" class="mx-auto" width="600" />

<br>

- Da notare che per accedere allo store sia in lettura che scrittura, è necessariop anteporre il simbolo \`$\` in modo da differenziarlo da una normale variabile
- Quindi ora se l'utente interagisce con il componente Counter e poi passa alla pagina about vedrà visualizzato lo stato interno del componente che è memorizzato nello store`,frontmatter:{},index:155,start:2366,end:2381,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:155,no:156},__clicksElements:[],__preloaded:!1}},{path:"157",name:"page-157",component:W9,meta:{slide:{raw:`
# SvelteKit

Stores

<img src="/media/svelte_081.gif" class="mx-auto" width="600" />

`,title:"SvelteKit",level:1,content:`# SvelteKit

Stores

<img src="/media/svelte_081.gif" class="mx-auto" width="600" />`,frontmatter:{},index:156,start:2382,end:2390,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:156,no:157},__clicksElements:[],__preloaded:!1}},{path:"158",name:"page-158",component:j9,meta:{slide:{raw:`
# SvelteKit

Stores: Esercitazione_15

- Modificare il codice dell'applicazione in modo che nella pagina About venga visualizzato anche il valore del componente DoubleCounter
  
- Consegnare su github il progetto modificato


`,title:"SvelteKit",level:1,content:`# SvelteKit

Stores: Esercitazione_15

- Modificare il codice dell'applicazione in modo che nella pagina About venga visualizzato anche il valore del componente DoubleCounter
  
- Consegnare su github il progetto modificato`,frontmatter:{},index:157,start:2391,end:2402,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:157,no:158},__clicksElements:[],__preloaded:!1}},{path:"159",name:"page-159",component:Y9,meta:{slide:{raw:`
# SvelteKit

Conclusioni

- In queste lezioni abbiamo introdotto il modernissimo framework SvelteKit che si basa sul linguggio e compilatore Svelte
- Svelte è uno strumento formidabile per lo sviluppo di applicazioni Web
- Svelte rende immediate molte operazioni che in vanilla JS sarebbero alcuanto complesse
- SvelteKit si distingue dagli altri framework per velocità, compattezza e modernità
- In queste lezioni abbiamo trattato gli aspetti base di Svelte. Ci sono ovviamente altri aspetti più avamnzati che esulano dai nostri scopi

<br>
<Banner fg="yellow" bg="green">
Svelte e SvelteKit sono strumenti utilissimi e potentissimi e sono la base per lo sviluppo FullStack di moderne applicazioni Web
</Banner>`,title:"SvelteKit",level:1,content:`# SvelteKit

Conclusioni

- In queste lezioni abbiamo introdotto il modernissimo framework SvelteKit che si basa sul linguggio e compilatore Svelte
- Svelte è uno strumento formidabile per lo sviluppo di applicazioni Web
- Svelte rende immediate molte operazioni che in vanilla JS sarebbero alcuanto complesse
- SvelteKit si distingue dagli altri framework per velocità, compattezza e modernità
- In queste lezioni abbiamo trattato gli aspetti base di Svelte. Ci sono ovviamente altri aspetti più avamnzati che esulano dai nostri scopi

<br>
<Banner fg="yellow" bg="green">
Svelte e SvelteKit sono strumenti utilissimi e potentissimi e sono la base per lo sviluppo FullStack di moderne applicazioni Web
</Banner>`,frontmatter:{},index:158,start:2403,end:2418,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:158,no:159},__clicksElements:[],__preloaded:!1}},{path:"160",component:v$,meta:{layout:"end"}}],Qe=Z9,ci=[{name:"play",path:"/",component:Nk,children:[...Qe]},{name:"print",path:"/print",component:m$},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!ri.remote||ri.remote===t.query.password)return!0;if(ri.remote&&t.query.password===void 0){const n=prompt("Enter password");if(ri.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};ci.push({path:"/presenter/print",component:()=>An(()=>import("./PresenterPrint-7ed0ab84.js"),["assets/PresenterPrint-7ed0ab84.js","assets/NoteDisplay-0eafcb69.js"])}),ci.push({name:"notes",path:"/notes",component:()=>An(()=>import("./NotesView-9e17efba.js"),["assets/NotesView-9e17efba.js","assets/NoteDisplay-0eafcb69.js"]),beforeEnter:e}),ci.push({name:"presenter",path:"/presenter/:no",component:()=>An(()=>import("./Presenter-5d1eebc0.js"),["assets/Presenter-5d1eebc0.js","assets/NoteDisplay-0eafcb69.js","assets/DrawingControls-7478b720.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:e}),ci.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const yt=xy({history:wb("/4/svelte/"),routes:ci});function G9(e,t,{mode:n="replace"}={}){return N({get(){const i=yt.currentRoute.value.query[e];return i==null?t??null:Array.isArray(i)?i.filter(Boolean):i},set(i){it(()=>{yt[L(n)]({query:{...yt.currentRoute.value.query,[e]:i}})})}})}const Xm=Z(0);it(()=>{yt.afterEach(async()=>{await it(),Xm.value+=1})});const ef=Z(0),Ht=N(()=>yt.currentRoute.value),Ho=N(()=>Ht.value.query.print!==void 0),X9=N(()=>Ht.value.query.print==="clicks"),pn=N(()=>Ht.value.query.embedded!==void 0),_t=N(()=>Ht.value.path.startsWith("/presenter")),eW=N(()=>Ht.value.path.startsWith("/notes")),gi=N(()=>Ho.value&&!X9.value),Nl=N(()=>Ht.value.query.password),tW=N(()=>!_t.value&&(!Oe.remote||Nl.value===Oe.remote)),Du=G9("clicks","0"),nW=N(()=>Qe.length-1),oW=N(()=>Ht.value.path),Be=N(()=>parseInt(oW.value.split(/\//g).slice(-1)[0])||1);N(()=>ma(Be.value));const dt=N(()=>Qe.find(e=>e.path===`${Be.value}`));N(()=>{var e,t,n;return(n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});N(()=>{var e,t;return((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Be.value===1?"cover":"default")});const Wa=N(()=>Qe.find(e=>e.path===`${Math.min(Qe.length,Be.value+1)}`)),iW=N(()=>Qe.find(e=>e.path===`${Math.max(1,Be.value-1)}`)),sW=N(()=>{var e,t;return Xm.value,((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Lt=N({get(){if(gi.value)return 99999;let e=+(Du.value||0);return isNaN(e)&&(e=0),e},set(e){Du.value=e.toString()}}),Bs=N(()=>{var e,t;return+(((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.clicks)??sW.value.length)}),aW=N(()=>Be.value<Qe.length-1||Lt.value<Bs.value),lW=N(()=>Be.value>1||Lt.value>0),rW=N(()=>Qe.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Kr(e,t),e),[])),cW=N(()=>Pr(rW.value,dt.value));N(()=>Lr(cW.value));const uW=N(()=>hW(ef.value,dt.value,iW.value));ge(dt,(e,t)=>{ef.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Pn(){Bs.value<=Lt.value?Pi():Lt.value+=1}async function Ln(){Lt.value<=0?await Li():Lt.value-=1}function ma(e){return _t.value?`/presenter/${e}`:`/${e}`}function Pi(){const e=Math.min(Qe.length,Be.value+1);return Wo(e)}async function Li(e=!0){const t=Math.max(1,Be.value-1);await Wo(t),e&&Bs.value&&yt.replace({query:{...Ht.value.query,clicks:Bs.value}})}function Wo(e,t){return yt.push({path:ma(e),query:{...Ht.value.query,clicks:t}})}function dW(e){const t=Z(0),{direction:n,distanceX:i,distanceY:s}=j0(e,{onSwipeStart(a){a.pointerType==="touch"&&(Ti.value||(t.value=Sl()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!t.value||Ti.value)return;const l=Math.abs(i.value),r=Math.abs(s.value);l/window.innerWidth>.3||l>100?n.value==="left"?Pn():Ln():(r/window.innerHeight>.4||r>200)&&(n.value==="down"?Li():Pi())}})}async function Dl(){const{saveAs:e}=await An(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);e(typeof Oe.download=="string"?Oe.download:Oe.exportFilename?`${Oe.exportFilename}.pdf`:"/4/svelte/slidev-exported.pdf",`${Oe.title}.pdf`)}async function pW(e){var t,n;if(e==null){const i=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(i!=null&&i.filepath))return!1;e=`${i.filepath}:${i.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Kr(e,t,n=1){var s,a,l,r,u;const i=(a=(s=t.meta)==null?void 0:s.slide)==null?void 0:a.level;i&&i>n&&e.length>0?Kr(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((l=t.meta)!=null&&l.hideInToc),title:(u=(r=t.meta)==null?void 0:r.slide)==null?void 0:u.title})}function Pr(e,t,n=!1,i){return e.map(s=>{const a={...s,active:s.path===(t==null?void 0:t.path),hasActiveParent:n};return a.children.length>0&&(a.children=Pr(a.children,t,a.active||a.hasActiveParent,a)),i&&(a.active||a.activeParent)&&(i.activeParent=!0),a})}function Lr(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Lr(n.children,t+1)}))}const mW={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function fW(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:mW[e.name]||e.name;if(n.includes("|")){const[i,s]=n.split("|").map(a=>a.trim());n=t?s:i}if(n)return{...e,name:n}}function hW(e,t,n){var s,a;let i=e>0?(s=n==null?void 0:n.meta)==null?void 0:s.transition:(a=t==null?void 0:t.meta)==null?void 0:a.transition;return i||(i=Oe.transition),fW(i,e<0)}function vW(){const e=Oe.titleTemplate.replace("%s",Oe.title||"Slidev");qp({title:e,htmlAttrs:Oe.htmlAttrs}),y1(`${e} - shared`),k1(`${e} - drawings`);const t=`${location.origin}_${f1()}`;function n(){eW.value||!_t.value&&!m1.includes(location.host.split(":")[0])||(_t.value?(Yo("page",+Be.value),Yo("clicks",Lt.value)):(Yo("viewerPage",+Be.value),Yo("viewerClicks",Lt.value)),Yo("lastUpdate",{id:t,type:_t.value?"presenter":"viewer",time:new Date().getTime()}))}yt.afterEach(n),ge(Lt,n),S1(i=>{var a;yt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((a=i.lastUpdate)==null?void 0:a.type)==="presenter"&&(+i.page!=+Be.value||+Lt.value!=+i.clicks)&&yt.replace({path:ma(i.page),query:{...yt.currentRoute.value.query,clicks:i.clicks||0}})})}const _W=Ke({__name:"App",setup(e){return $(I),vW(),(t,n)=>{const i=Ks("RouterView"),s=Ks("StarportCarrier");return g(),ie(Me,null,[j(i),j(s)],64)}}}),gW=E(_W,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/App.vue"]]);function Na(e){return e!==null&&typeof e=="object"}function ql(e,t,n=".",i){if(!Na(t))return ql(e,{},n,i);const s=Object.assign({},t);for(const a in e){if(a==="__proto__"||a==="constructor")continue;const l=e[a];l!=null&&(i&&i(s,a,l,n)||(Array.isArray(l)&&Array.isArray(s[a])?s[a]=[...l,...s[a]]:Na(l)&&Na(s[a])?s[a]=ql(l,s[a],(n?`${n}.`:"")+a.toString(),i):s[a]=l))}return s}function bW(e){return(...t)=>t.reduce((n,i)=>ql(n,i,"",e),{})}const yW=bW(),tf=1/60*1e3,SW=typeof performance<"u"?()=>performance.now():()=>Date.now(),nf=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(SW()),tf);function wW(e){let t=[],n=[],i=0,s=!1,a=!1;const l=new WeakSet,r={schedule:(u,d=!1,p=!1)=>{const m=p&&s,f=m?t:n;return d&&l.add(u),f.indexOf(u)===-1&&(f.push(u),m&&s&&(i=t.length)),u},cancel:u=>{const d=n.indexOf(u);d!==-1&&n.splice(d,1),l.delete(u)},process:u=>{if(s){a=!0;return}if(s=!0,[t,n]=[n,t],n.length=0,i=t.length,i)for(let d=0;d<i;d++){const p=t[d];p(u),l.has(p)&&(r.schedule(p),e())}s=!1,a&&(a=!1,r.process(u))}};return r}const xW=40;let Fl=!0,Ri=!1,jl=!1;const Po={delta:0,timestamp:0},Ui=["read","update","preRender","render","postRender"],fa=Ui.reduce((e,t)=>(e[t]=wW(()=>Ri=!0),e),{}),Vl=Ui.reduce((e,t)=>{const n=fa[t];return e[t]=(i,s=!1,a=!1)=>(Ri||zW(),n.schedule(i,s,a)),e},{}),kW=Ui.reduce((e,t)=>(e[t]=fa[t].cancel,e),{});Ui.reduce((e,t)=>(e[t]=()=>fa[t].process(Po),e),{});const $W=e=>fa[e].process(Po),of=e=>{Ri=!1,Po.delta=Fl?tf:Math.max(Math.min(e-Po.timestamp,xW),1),Po.timestamp=e,jl=!0,Ui.forEach($W),jl=!1,Ri&&(Fl=!1,nf(of))},zW=()=>{Ri=!0,Fl=!0,jl||nf(of)},sf=()=>Po;function af(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n}var Rr=function(){},Hi=function(){};Rr=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Hi=function(e,t){if(!e)throw new Error(t)};const Bl=(e,t,n)=>Math.min(Math.max(n,e),t),Da=.001,IW=.01,qu=10,CW=.05,EW=1;function OW({duration:e=800,bounce:t=.25,velocity:n=0,mass:i=1}){let s,a;Rr(e<=qu*1e3,"Spring duration must be 10 seconds or less");let l=1-t;l=Bl(CW,EW,l),e=Bl(IW,qu,e/1e3),l<1?(s=d=>{const p=d*l,m=p*e,f=p-n,h=Ul(d,l),v=Math.exp(-m);return Da-f/h*v},a=d=>{const m=d*l*e,f=m*n+n,h=Math.pow(l,2)*Math.pow(d,2)*e,v=Math.exp(-m),S=Ul(Math.pow(d,2),l);return(-s(d)+Da>0?-1:1)*((f-h)*v)/S}):(s=d=>{const p=Math.exp(-d*e),m=(d-n)*e+1;return-Da+p*m},a=d=>{const p=Math.exp(-d*e),m=(n-d)*(e*e);return p*m});const r=5/e,u=TW(s,a,r);if(e=e*1e3,isNaN(u))return{stiffness:100,damping:10,duration:e};{const d=Math.pow(u,2)*i;return{stiffness:d,damping:l*2*Math.sqrt(i*d),duration:e}}}const MW=12;function TW(e,t,n){let i=n;for(let s=1;s<MW;s++)i=i-e(i)/t(i);return i}function Ul(e,t){return e*Math.sqrt(1-t*t)}const AW=["duration","bounce"],KW=["stiffness","damping","mass"];function Fu(e,t){return t.some(n=>e[n]!==void 0)}function PW(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Fu(e,KW)&&Fu(e,AW)){const n=OW(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Hr(e){var{from:t=0,to:n=1,restSpeed:i=2,restDelta:s}=e,a=af(e,["from","to","restSpeed","restDelta"]);const l={done:!1,value:t};let{stiffness:r,damping:u,mass:d,velocity:p,duration:m,isResolvedFromDuration:f}=PW(a),h=ju,v=ju;function S(){const x=p?-(p/1e3):0,k=n-t,C=u/(2*Math.sqrt(r*d)),b=Math.sqrt(r/d)/1e3;if(s===void 0&&(s=Math.min(Math.abs(n-t)/100,.4)),C<1){const P=Ul(b,C);h=A=>{const R=Math.exp(-C*b*A);return n-R*((x+C*b*k)/P*Math.sin(P*A)+k*Math.cos(P*A))},v=A=>{const R=Math.exp(-C*b*A);return C*b*R*(Math.sin(P*A)*(x+C*b*k)/P+k*Math.cos(P*A))-R*(Math.cos(P*A)*(x+C*b*k)-P*k*Math.sin(P*A))}}else if(C===1)h=P=>n-Math.exp(-b*P)*(k+(x+b*k)*P);else{const P=b*Math.sqrt(C*C-1);h=A=>{const R=Math.exp(-C*b*A),F=Math.min(P*A,300);return n-R*((x+C*b*k)*Math.sinh(F)+P*k*Math.cosh(F))/P}}}return S(),{next:x=>{const k=h(x);if(f)l.done=x>=m;else{const C=v(x)*1e3,b=Math.abs(C)<=i,P=Math.abs(n-k)<=s;l.done=b&&P}return l.value=l.done?n:k,l},flipTarget:()=>{p=-p,[t,n]=[n,t],S()}}}Hr.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const ju=e=>0,lf=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i},Wr=(e,t,n)=>-n*e+n*t+e,rf=(e,t)=>n=>Math.max(Math.min(n,t),e),bi=e=>e%1?Number(e.toFixed(5)):e,Wi=/(-)?([\d]*\.?[\d])+/g,Jl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,LW=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ji(e){return typeof e=="string"}const Qi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},yi=Object.assign(Object.assign({},Qi),{transform:rf(0,1)}),ms=Object.assign(Object.assign({},Qi),{default:1}),Nr=e=>({test:t=>Ji(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Un=Nr("deg"),Si=Nr("%"),ye=Nr("px"),Vu=Object.assign(Object.assign({},Si),{parse:e=>Si.parse(e)/100,transform:e=>Si.transform(e*100)}),Dr=(e,t)=>n=>!!(Ji(n)&&LW.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),cf=(e,t,n)=>i=>{if(!Ji(i))return i;const[s,a,l,r]=i.match(Wi);return{[e]:parseFloat(s),[t]:parseFloat(a),[n]:parseFloat(l),alpha:r!==void 0?parseFloat(r):1}},ao={test:Dr("hsl","hue"),parse:cf("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+Si.transform(bi(t))+", "+Si.transform(bi(n))+", "+bi(yi.transform(i))+")"},RW=rf(0,255),qa=Object.assign(Object.assign({},Qi),{transform:e=>Math.round(RW(e))}),Cn={test:Dr("rgb","red"),parse:cf("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+qa.transform(e)+", "+qa.transform(t)+", "+qa.transform(n)+", "+bi(yi.transform(i))+")"};function HW(e){let t="",n="",i="",s="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),i=e.substr(5,2),s=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),i=e.substr(3,1),s=e.substr(4,1),t+=t,n+=n,i+=i,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Ql={test:Dr("#"),parse:HW,transform:Cn.transform},vt={test:e=>Cn.test(e)||Ql.test(e)||ao.test(e),parse:e=>Cn.test(e)?Cn.parse(e):ao.test(e)?ao.parse(e):Ql.parse(e),transform:e=>Ji(e)?e:e.hasOwnProperty("red")?Cn.transform(e):ao.transform(e)},uf="${c}",df="${n}";function WW(e){var t,n,i,s;return isNaN(e)&&Ji(e)&&((n=(t=e.match(Wi))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((s=(i=e.match(Jl))===null||i===void 0?void 0:i.length)!==null&&s!==void 0?s:0)>0}function pf(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const i=e.match(Jl);i&&(n=i.length,e=e.replace(Jl,uf),t.push(...i.map(vt.parse)));const s=e.match(Wi);return s&&(e=e.replace(Wi,df),t.push(...s.map(Qi.parse))),{values:t,numColors:n,tokenised:e}}function mf(e){return pf(e).values}function ff(e){const{values:t,numColors:n,tokenised:i}=pf(e),s=t.length;return a=>{let l=i;for(let r=0;r<s;r++)l=l.replace(r<n?uf:df,r<n?vt.transform(a[r]):bi(a[r]));return l}}const NW=e=>typeof e=="number"?0:e;function DW(e){const t=mf(e);return ff(e)(t.map(NW))}const Yi={test:WW,parse:mf,createTransformer:ff,getAnimatableNone:DW},qW=new Set(["brightness","contrast","saturate","opacity"]);function FW(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=n.match(Wi)||[];if(!i)return e;const s=n.replace(i,"");let a=qW.has(t)?1:0;return i!==n&&(a*=100),t+"("+a+s+")"}const jW=/([a-z-]*)\(.*?\)/g,Yl=Object.assign(Object.assign({},Yi),{getAnimatableNone:e=>{const t=e.match(jW);return t?t.map(FW).join(" "):e}});function Fa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Bu({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let s=0,a=0,l=0;if(!t)s=a=l=n;else{const r=n<.5?n*(1+t):n+t-n*t,u=2*n-r;s=Fa(u,r,e+1/3),a=Fa(u,r,e),l=Fa(u,r,e-1/3)}return{red:Math.round(s*255),green:Math.round(a*255),blue:Math.round(l*255),alpha:i}}const VW=(e,t,n)=>{const i=e*e,s=t*t;return Math.sqrt(Math.max(0,n*(s-i)+i))},BW=[Ql,Cn,ao],Uu=e=>BW.find(t=>t.test(e)),Ju=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,hf=(e,t)=>{let n=Uu(e),i=Uu(t);Hi(!!n,Ju(e)),Hi(!!i,Ju(t));let s=n.parse(e),a=i.parse(t);n===ao&&(s=Bu(s),n=Cn),i===ao&&(a=Bu(a),i=Cn);const l=Object.assign({},s);return r=>{for(const u in l)u!=="alpha"&&(l[u]=VW(s[u],a[u],r));return l.alpha=Wr(s.alpha,a.alpha,r),n.transform(l)}},UW=e=>typeof e=="number",JW=(e,t)=>n=>t(e(n)),vf=(...e)=>e.reduce(JW);function _f(e,t){return UW(e)?n=>Wr(e,t,n):vt.test(e)?hf(e,t):bf(e,t)}const gf=(e,t)=>{const n=[...e],i=n.length,s=e.map((a,l)=>_f(a,t[l]));return a=>{for(let l=0;l<i;l++)n[l]=s[l](a);return n}},QW=(e,t)=>{const n=Object.assign(Object.assign({},e),t),i={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(i[s]=_f(e[s],t[s]));return s=>{for(const a in i)n[a]=i[a](s);return n}};function Qu(e){const t=Yi.parse(e),n=t.length;let i=0,s=0,a=0;for(let l=0;l<n;l++)i||typeof t[l]=="number"?i++:t[l].hue!==void 0?a++:s++;return{parsed:t,numNumbers:i,numRGB:s,numHSL:a}}const bf=(e,t)=>{const n=Yi.createTransformer(t),i=Qu(e),s=Qu(t);return i.numHSL===s.numHSL&&i.numRGB===s.numRGB&&i.numNumbers>=s.numNumbers?vf(gf(i.parsed,s.parsed),n):(Rr(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),l=>`${l>0?t:e}`)},YW=(e,t)=>n=>Wr(e,t,n);function ZW(e){if(typeof e=="number")return YW;if(typeof e=="string")return vt.test(e)?hf:bf;if(Array.isArray(e))return gf;if(typeof e=="object")return QW}function GW(e,t,n){const i=[],s=n||ZW(e[0]),a=e.length-1;for(let l=0;l<a;l++){let r=s(e[l],e[l+1]);if(t){const u=Array.isArray(t)?t[l]:t;r=vf(u,r)}i.push(r)}return i}function XW([e,t],[n]){return i=>n(lf(e,t,i))}function eN(e,t){const n=e.length,i=n-1;return s=>{let a=0,l=!1;if(s<=e[0]?l=!0:s>=e[i]&&(a=i-1,l=!0),!l){let u=1;for(;u<n&&!(e[u]>s||u===i);u++);a=u-1}const r=lf(e[a],e[a+1],s);return t[a](r)}}function yf(e,t,{clamp:n=!0,ease:i,mixer:s}={}){const a=e.length;Hi(a===t.length,"Both input and output ranges must be the same length"),Hi(!i||!Array.isArray(i)||i.length===a-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[a-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const l=GW(t,i,s),r=a===2?XW(e,l):eN(e,l);return n?u=>r(Bl(e[0],e[a-1],u)):r}const ha=e=>t=>1-e(1-t),qr=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tN=e=>t=>Math.pow(t,e),Sf=e=>t=>t*t*((e+1)*t-e),nN=e=>{const t=Sf(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},wf=1.525,oN=4/11,iN=8/11,sN=9/10,xf=e=>e,Fr=tN(2),aN=ha(Fr),kf=qr(Fr),$f=e=>1-Math.sin(Math.acos(e)),zf=ha($f),lN=qr(zf),jr=Sf(wf),rN=ha(jr),cN=qr(jr),uN=nN(wf),dN=4356/361,pN=35442/1805,mN=16061/1805,Us=e=>{if(e===1||e===0)return e;const t=e*e;return e<oN?7.5625*t:e<iN?9.075*t-9.9*e+3.4:e<sN?dN*t-pN*e+mN:10.8*e*e-20.52*e+10.72},fN=ha(Us),hN=e=>e<.5?.5*(1-Us(1-e*2)):.5*Us(e*2-1)+.5;function vN(e,t){return e.map(()=>t||kf).splice(0,e.length-1)}function _N(e){const t=e.length;return e.map((n,i)=>i!==0?i/(t-1):0)}function gN(e,t){return e.map(n=>n*t)}function ws({from:e=0,to:t=1,ease:n,offset:i,duration:s=300}){const a={done:!1,value:e},l=Array.isArray(t)?t:[e,t],r=gN(i&&i.length===l.length?i:_N(l),s);function u(){return yf(r,l,{ease:Array.isArray(n)?n:vN(l,n)})}let d=u();return{next:p=>(a.value=d(p),a.done=p>=s,a),flipTarget:()=>{l.reverse(),d=u()}}}function bN({velocity:e=0,from:t=0,power:n=.8,timeConstant:i=350,restDelta:s=.5,modifyTarget:a}){const l={done:!1,value:t};let r=n*e;const u=t+r,d=a===void 0?u:a(u);return d!==u&&(r=d-t),{next:p=>{const m=-r*Math.exp(-p/i);return l.done=!(m>s||m<-s),l.value=l.done?d:d+m,l},flipTarget:()=>{}}}const Yu={keyframes:ws,spring:Hr,decay:bN};function yN(e){if(Array.isArray(e.to))return ws;if(Yu[e.type])return Yu[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?ws:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Hr:ws}function If(e,t,n=0){return e-t-n}function SN(e,t,n=0,i=!0){return i?If(t+-e,t,n):t-(e-t)+n}function wN(e,t,n,i){return i?e>=t+n:e<=-n}const xN=e=>{const t=({delta:n})=>e(n);return{start:()=>Vl.update(t,!0),stop:()=>kW.update(t)}};function Cf(e){var t,n,{from:i,autoplay:s=!0,driver:a=xN,elapsed:l=0,repeat:r=0,repeatType:u="loop",repeatDelay:d=0,onPlay:p,onStop:m,onComplete:f,onRepeat:h,onUpdate:v}=e,S=af(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:x}=S,k,C=0,b=S.duration,P,A=!1,R=!0,F;const W=yN(S);!((n=(t=W).needsInterpolation)===null||n===void 0)&&n.call(t,i,x)&&(F=yf([0,100],[i,x],{clamp:!1}),i=0,x=100);const U=W(Object.assign(Object.assign({},S),{from:i,to:x}));function se(){C++,u==="reverse"?(R=C%2===0,l=SN(l,b,d,R)):(l=If(l,b,d),u==="mirror"&&U.flipTarget()),A=!1,h&&h()}function de(){k.stop(),f&&f()}function G(be){if(R||(be=-be),l+=be,!A){const we=U.next(Math.max(0,l));P=we.value,F&&(P=F(P)),A=R?we.done:l<=0}v==null||v(P),A&&(C===0&&(b??(b=l)),C<r?wN(l,b,d,R)&&se():de())}function _e(){p==null||p(),k=a(G),k.start()}return s&&_e(),{stop:()=>{m==null||m(),k.stop()}}}function Ef(e,t){return t?e*(1e3/t):0}function kN({from:e=0,velocity:t=0,min:n,max:i,power:s=.8,timeConstant:a=750,bounceStiffness:l=500,bounceDamping:r=10,restDelta:u=1,modifyTarget:d,driver:p,onUpdate:m,onComplete:f,onStop:h}){let v;function S(b){return n!==void 0&&b<n||i!==void 0&&b>i}function x(b){return n===void 0?i:i===void 0||Math.abs(n-b)<Math.abs(i-b)?n:i}function k(b){v==null||v.stop(),v=Cf(Object.assign(Object.assign({},b),{driver:p,onUpdate:P=>{var A;m==null||m(P),(A=b.onUpdate)===null||A===void 0||A.call(b,P)},onComplete:f,onStop:h}))}function C(b){k(Object.assign({type:"spring",stiffness:l,damping:r,restDelta:u},b))}if(S(e))C({from:e,velocity:t,to:x(e)});else{let b=s*t+e;typeof d<"u"&&(b=d(b));const P=x(b),A=P===n?-1:1;let R,F;const W=U=>{R=F,F=U,t=Ef(U-R,sf().delta),(A===1&&U>P||A===-1&&U<P)&&C({from:U,to:P,velocity:t})};k({type:"decay",from:e,velocity:t,timeConstant:a,power:s,restDelta:u,modifyTarget:d,onUpdate:S(b)?W:void 0})}return{stop:()=>v==null?void 0:v.stop()}}const Of=(e,t)=>1-3*t+3*e,Mf=(e,t)=>3*t-6*e,Tf=e=>3*e,Js=(e,t,n)=>((Of(t,n)*e+Mf(t,n))*e+Tf(t))*e,Af=(e,t,n)=>3*Of(t,n)*e*e+2*Mf(t,n)*e+Tf(t),$N=1e-7,zN=10;function IN(e,t,n,i,s){let a,l,r=0;do l=t+(n-t)/2,a=Js(l,i,s)-e,a>0?n=l:t=l;while(Math.abs(a)>$N&&++r<zN);return l}const CN=8,EN=.001;function ON(e,t,n,i){for(let s=0;s<CN;++s){const a=Af(t,n,i);if(a===0)return t;const l=Js(t,n,i)-e;t-=l/a}return t}const xs=11,fs=1/(xs-1);function MN(e,t,n,i){if(e===t&&n===i)return xf;const s=new Float32Array(xs);for(let l=0;l<xs;++l)s[l]=Js(l*fs,e,n);function a(l){let r=0,u=1;const d=xs-1;for(;u!==d&&s[u]<=l;++u)r+=fs;--u;const p=(l-s[u])/(s[u+1]-s[u]),m=r+p*fs,f=Af(m,e,n);return f>=EN?ON(l,m,e,n):f===0?m:IN(l,r,r+fs,e,n)}return l=>l===0||l===1?l:Js(a(l),t,i)}const ja={};class TN{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,i){if(this.subscriptions.size)for(const s of this.subscriptions)s(t,n,i)}clear(){this.subscriptions.clear()}}function Zu(e){return!isNaN(parseFloat(e))}class AN{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new TN,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:i,timestamp:s}=sf();this.lastUpdated!==s&&(this.timeDelta=i,this.lastUpdated=s),Vl.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Vl.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Zu(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Zu(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ef(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:i}=t(n);this.stopAnimation=i}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function KN(e){return new AN(e)}const{isArray:PN}=Array;function LN(){const e=Z({}),t=i=>{const s=a=>{e.value[a]&&(e.value[a].stop(),e.value[a].destroy(),delete e.value[a])};i?PN(i)?i.forEach(s):s(i):Object.keys(e.value).forEach(s)},n=(i,s,a)=>{if(e.value[i])return e.value[i];const l=KN(s);return l.onChange(r=>a[i]=r),e.value[i]=l,l};return B1(t),{motionValues:e,get:n,stop:t}}function RN(e){return Array.isArray(e)}function Jn(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Va(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function HN(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Ba(){return{type:"keyframes",ease:"linear",duration:300}}function WN(e){return{type:"keyframes",duration:800,values:e}}const Gu={default:HN,x:Jn,y:Jn,z:Jn,rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scaleX:Va,scaleY:Va,scale:Va,backgroundColor:Ba,color:Ba,opacity:Ba};function Kf(e,t){let n;return RN(t)?n=WN:n=Gu[e]||Gu.default,{to:t,...n(t)}}const Xu={...Qi,transform:Math.round},Pf={color:vt,backgroundColor:vt,outlineColor:vt,fill:vt,stroke:vt,borderColor:vt,borderTopColor:vt,borderRightColor:vt,borderBottomColor:vt,borderLeftColor:vt,borderWidth:ye,borderTopWidth:ye,borderRightWidth:ye,borderBottomWidth:ye,borderLeftWidth:ye,borderRadius:ye,radius:ye,borderTopLeftRadius:ye,borderTopRightRadius:ye,borderBottomRightRadius:ye,borderBottomLeftRadius:ye,width:ye,maxWidth:ye,height:ye,maxHeight:ye,size:ye,top:ye,right:ye,bottom:ye,left:ye,padding:ye,paddingTop:ye,paddingRight:ye,paddingBottom:ye,paddingLeft:ye,margin:ye,marginTop:ye,marginRight:ye,marginBottom:ye,marginLeft:ye,rotate:Un,rotateX:Un,rotateY:Un,rotateZ:Un,scale:ms,scaleX:ms,scaleY:ms,scaleZ:ms,skew:Un,skewX:Un,skewY:Un,distance:ye,translateX:ye,translateY:ye,translateZ:ye,x:ye,y:ye,z:ye,perspective:ye,transformPerspective:ye,opacity:yi,originX:Vu,originY:Vu,originZ:ye,zIndex:Xu,filter:Yl,WebkitFilter:Yl,fillOpacity:yi,strokeOpacity:yi,numOctaves:Xu},Vr=e=>Pf[e];function Lf(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function NN(e,t){let n=Vr(e);return n!==Yl&&(n=Yi),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const DN={linear:xf,easeIn:Fr,easeInOut:kf,easeOut:aN,circIn:$f,circInOut:lN,circOut:zf,backIn:jr,backInOut:cN,backOut:rN,anticipate:uN,bounceIn:fN,bounceInOut:hN,bounceOut:Us};function ed(e){if(Array.isArray(e)){const[t,n,i,s]=e;return MN(t,n,i,s)}else if(typeof e=="string")return DN[e];return e}function qN(e){return Array.isArray(e)&&typeof e[0]!="number"}function td(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Yi.test(t)&&!t.startsWith("url("))}function FN(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function jN({ease:e,times:t,delay:n,...i}){const s={...i};return t&&(s.offset=t),e&&(s.ease=qN(e)?e.map(ed):ed(e)),n&&(s.elapsed=-n),s}function VN(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),FN(t),BN(e)||(e={...e,...Kf(n,t.to)}),{...t,...jN(e)}}function BN({delay:e,repeat:t,repeatType:n,repeatDelay:i,from:s,...a}){return!!Object.keys(a).length}function UN(e,t){return e[t]||e.default||e}function JN(e,t,n,i,s){const a=UN(i,e);let l=a.from===null||a.from===void 0?t.get():a.from;const r=td(e,n);l==="none"&&r&&typeof n=="string"&&(l=NN(e,n));const u=td(e,l);function d(m){const f={from:l,to:n,velocity:i.velocity?i.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return a.type==="inertia"||a.type==="decay"?kN({...f,...a}):Cf({...VN(a,f,e),onUpdate:h=>{f.onUpdate(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{i.onComplete&&i.onComplete(),s&&s(),m&&m()}})}function p(m){return t.set(n),i.onComplete&&i.onComplete(),s&&s(),m&&m(),{stop:()=>{}}}return!u||!r||a.type===!1?p:d}function QN(){const{motionValues:e,stop:t,get:n}=LN();return{motionValues:e,stop:t,push:(s,a,l,r={},u)=>{const d=l[s],p=n(s,d,l);if(r&&r.immediate){p.set(a);return}const m=JN(s,p,a,r,u);p.start(m)}}}function YN(e,t={},{motionValues:n,push:i,stop:s}=QN()){const a=L(t),l=Z(!1);ge(n,m=>{l.value=Object.values(m).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const r=m=>{if(!a||!a[m])throw new Error(`The variant ${m} does not exist.`);return a[m]},u=m=>(typeof m=="string"&&(m=r(m)),Promise.all(Object.entries(m).map(([f,h])=>{if(f!=="transition")return new Promise(v=>i(f,h,e,m.transition||Kf(f,m[f]),v))}).filter(Boolean)));return{isAnimating:l,apply:u,set:m=>{const f=yl(m)?m:r(m);Object.entries(f).forEach(([h,v])=>{h!=="transition"&&i(h,v,e,{immediate:!0})})},leave:async m=>{let f;if(a&&(a.leave&&(f=a.leave),!a.leave&&a.initial&&(f=a.initial)),!f){m();return}await u(f),m()},stop:s}}const Br=typeof window<"u",ZN=()=>Br&&window.onpointerdown===null,GN=()=>Br&&window.ontouchstart===null,XN=()=>Br&&window.onmousedown===null;function eD({target:e,state:t,variants:n,apply:i}){const s=L(n),a=Z(!1),l=Z(!1),r=Z(!1),u=N(()=>{let p=[];return s&&(s.hovered&&(p=[...p,...Object.keys(s.hovered)]),s.tapped&&(p=[...p,...Object.keys(s.tapped)]),s.focused&&(p=[...p,...Object.keys(s.focused)])),p}),d=N(()=>{const p={};Object.assign(p,t.value),a.value&&s.hovered&&Object.assign(p,s.hovered),l.value&&s.tapped&&Object.assign(p,s.tapped),r.value&&s.focused&&Object.assign(p,s.focused);for(const m in p)u.value.includes(m)||delete p[m];return p});s.hovered&&(xe(e,"mouseenter",()=>a.value=!0),xe(e,"mouseleave",()=>{a.value=!1,l.value=!1}),xe(e,"mouseout",()=>{a.value=!1,l.value=!1})),s.tapped&&(XN()&&(xe(e,"mousedown",()=>l.value=!0),xe(e,"mouseup",()=>l.value=!1)),ZN()&&(xe(e,"pointerdown",()=>l.value=!0),xe(e,"pointerup",()=>l.value=!1)),GN()&&(xe(e,"touchstart",()=>l.value=!0),xe(e,"touchend",()=>l.value=!1))),s.focused&&(xe(e,"focus",()=>r.value=!0),xe(e,"blur",()=>r.value=!1)),ge(d,i)}function tD({set:e,target:t,variants:n,variant:i}){const s=L(n);ge(()=>t,()=>{s&&(s.initial&&e("initial"),s.enter&&(i.value="enter"))},{immediate:!0,flush:"pre"})}function nD({state:e,apply:t}){ge(e,n=>{n&&t(n)},{immediate:!0})}function oD({target:e,variants:t,variant:n}){const i=L(t);i&&(i.visible||i.visibleOnce)&&W0(e,([{isIntersecting:s}])=>{i.visible?s?n.value="visible":n.value="initial":i.visibleOnce&&(s&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function iD(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&tD(e),t.syncVariants&&nD(e),t.visibilityHooks&&oD(e),t.eventListeners&&eD(e)}function Rf(e={}){const t=je({...e}),n=Z({});return ge(t,()=>{const i={};for(const[s,a]of Object.entries(t)){const l=Vr(s),r=Lf(a,l);i[s]=r}n.value=i},{immediate:!0,deep:!0}),{state:t,style:n}}function Ur(e,t){ge(()=>st(e),n=>{n&&t(n)},{immediate:!0})}const sD={x:"translateX",y:"translateY",z:"translateZ"};function Hf(e={},t=!0){const n=je({...e}),i=Z("");return ge(n,s=>{let a="",l=!1;if(t&&(s.x||s.y||s.z)){const r=[s.x||0,s.y||0,s.z||0].map(ye.transform).join(",");a+=`translate3d(${r}) `,l=!0}for(const[r,u]of Object.entries(s)){if(t&&(r==="x"||r==="y"||r==="z"))continue;const d=Vr(r),p=Lf(u,d);a+=`${sD[r]||r}(${p}) `}t&&!l&&(a+="translateZ(0px) "),i.value=a.trim()},{immediate:!0,deep:!0}),{state:n,transform:i}}const aD=["","X","Y","Z"],lD=["perspective","translate","scale","rotate","skew"],Wf=["transformPerspective","x","y","z"];lD.forEach(e=>{aD.forEach(t=>{const n=e+t;Wf.push(n)})});const rD=new Set(Wf);function Jr(e){return rD.has(e)}const cD=new Set(["originX","originY","originZ"]);function Nf(e){return cD.has(e)}function uD(e){const t={},n={};return Object.entries(e).forEach(([i,s])=>{Jr(i)||Nf(i)?t[i]=s:n[i]=s}),{transform:t,style:n}}function Df(e){const{transform:t,style:n}=uD(e),{transform:i}=Hf(t),{style:s}=Rf(n);return i.value&&(s.value.transform=i.value),s.value}function dD(e,t){let n,i;const{state:s,style:a}=Rf();return Ur(e,l=>{i=l;for(const r of Object.keys(Pf))l.style[r]===null||l.style[r]===""||Jr(r)||Nf(r)||(s[r]=l.style[r]);n&&Object.entries(n).forEach(([r,u])=>l.style[r]=u),t&&t(s)}),ge(a,l=>{if(!i){n=l;return}for(const r in l)i.style[r]=l[r]},{immediate:!0}),{style:s}}function pD(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=i=>i.endsWith("px")||i.endsWith("deg")?parseFloat(i):isNaN(Number(i))?Number(i):i;return t.reduce((i,s)=>{if(!s)return i;const[a,l]=s.split("("),u=l.split(",").map(p=>n(p.endsWith(")")?p.replace(")",""):p.trim())),d=u.length===1?u[0]:u;return{...i,[a]:d}},{})}function mD(e,t){Object.entries(pD(t)).forEach(([n,i])=>{const s=["x","y","z"];if(n==="translate3d"){if(i===0){s.forEach(a=>e[a]=0);return}i.forEach((a,l)=>e[s[l]]=a);return}if(i=parseFloat(i),n==="translateX"){e.x=i;return}if(n==="translateY"){e.y=i;return}if(n==="translateZ"){e.z=i;return}e[n]=i})}function fD(e,t){let n,i;const{state:s,transform:a}=Hf();return Ur(e,l=>{i=l,l.style.transform&&mD(s,l.style.transform),n&&(l.style.transform=n),t&&t(s)}),ge(a,l=>{if(!i){n=l;return}i.style.transform=l},{immediate:!0}),{transform:s}}function hD(e,t){const n=je({}),i=l=>Object.entries(l).forEach(([r,u])=>n[r]=u),{style:s}=dD(e,i),{transform:a}=fD(e,i);return ge(n,l=>{Object.entries(l).forEach(([r,u])=>{const d=Jr(r)?a:s;d[r]&&d[r]===u||(d[r]=u)})},{immediate:!0,deep:!0}),Ur(e,()=>t&&i(t)),{motionProperties:n,style:s,transform:a}}function vD(e={}){const t=L(e),n=Z();return{state:N(()=>{if(n.value)return t[n.value]}),variant:n}}function qf(e,t={},n){const{motionProperties:i}=hD(e),{variant:s,state:a}=vD(t),l=YN(i,t),r={target:e,variant:s,variants:t,state:a,motionProperties:i,...l};return iD(r,n),r}const _D=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function gD(e,t){const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&yl(n.variants)&&(t.value={...t.value,...n.variants}),_D.forEach(i=>{if(i==="delay"){if(n&&n[i]&&typeof n[i]=="number"){const s=n[i];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:s,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:s,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:s,...t.value.visibleOnce.transition}))}return}i==="visible-once"&&(i="visibleOnce"),n&&n[i]&&yl(n[i])&&(t.value[i]=n[i])}))}function Ua(e){return{created:(n,i,s)=>{const a=i.value&&typeof i.value=="string"?i.value:s.key;a&&ja[a]&&ja[a].stop();const l=Z(e||{});typeof i.value=="object"&&(l.value=i.value),gD(s,l);const r=qf(n,l);n.motionInstance=r,a&&(ja[a]=r)},getSSRProps(n,i){let{initial:s}=n.value||i&&(i==null?void 0:i.props)||{};s=L(s);const a=yW((e==null?void 0:e.initial)||{},s||{});return!a||Object.keys(a).length===0?void 0:{style:Df(a)}}}}const bD={initial:{opacity:0},enter:{opacity:1}},yD={initial:{opacity:0},visible:{opacity:1}},SD={initial:{opacity:0},visibleOnce:{opacity:1}},wD={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},xD={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},kD={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},$D={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},zD={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},ID={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},CD={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},ED={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},OD={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},MD={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},TD={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},AD={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},KD={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},PD={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},LD={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},RD={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},HD={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},WD={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},ND={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},DD={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},qD={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},FD={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},jD={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},VD={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},BD={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},UD={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},JD={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Zl={__proto__:null,fade:bD,fadeVisible:yD,fadeVisibleOnce:SD,pop:wD,popVisible:xD,popVisibleOnce:kD,rollBottom:KD,rollLeft:$D,rollRight:CD,rollTop:MD,rollVisibleBottom:PD,rollVisibleLeft:zD,rollVisibleOnceBottom:LD,rollVisibleOnceLeft:ID,rollVisibleOnceRight:OD,rollVisibleOnceTop:AD,rollVisibleRight:ED,rollVisibleTop:TD,slideBottom:BD,slideLeft:RD,slideRight:ND,slideTop:FD,slideVisibleBottom:UD,slideVisibleLeft:HD,slideVisibleOnceBottom:JD,slideVisibleOnceLeft:WD,slideVisibleOnceRight:qD,slideVisibleOnceTop:VD,slideVisibleRight:DD,slideVisibleTop:jD},QD=Ke({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var r;const t=qv(),n=je({});if(!e.is&&!t.default)return()=>St("div",{});const i=N(()=>{let u;return e.preset&&(u=Zl[e.preset]),u}),s=N(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),a=N(()=>{const u={...s.value,...i.value||{},...e.variants||{}};return e.delay&&(u.enter.transition={...u.enter.transition},u.enter.transition.delay=parseInt(e.delay)),u}),l=N(()=>{if(!e.is)return;let u=e.is;return typeof l.value=="string"&&!yd(u)&&(u=Ks(u)),u});if(((r=process==null?void 0:process.env)==null?void 0:r.NODE_ENV)==="development"||process!=null&&process.dev){const u=d=>{var p;(p=d.variants)!=null&&p.initial&&d.set("initial"),setTimeout(()=>{var m,f,h;(m=d.variants)!=null&&m.enter&&d.apply("enter"),(f=d.variants)!=null&&f.visible&&d.apply("visible"),(h=d.variants)!=null&&h.visibleOnce&&d.apply("visibleOnce")},10)};ra(()=>Object.entries(n).forEach(([d,p])=>u(p)))}return{slots:t,component:l,motionConfig:a,instances:n}},render({slots:e,motionConfig:t,instances:n,component:i}){var r;const s=Df(t.initial||{}),a=(u,d)=>(u.props||(u.props={}),u.props.style=s,u.props.onVnodeMounted=({el:p})=>{const m=qf(p,t);n[d]=m},u);if(i){const u=St(i,void 0,e);return a(u,0),u}return(((r=e.default)==null?void 0:r.call(e))||[]).map((u,d)=>a(u,d))}});function YD(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",i=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,s=>`-${s}`).toLowerCase().replace(/\s+/g,"-").replace(i,s=>n.charAt(t.indexOf(s))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const ZD={install(e,t){if(e.directive("motion",Ua()),e.component("Motion",QD),!t||t&&!t.excludePresets)for(const n in Zl){const i=Zl[n];e.directive(`motion-${YD(n)}`,Ua(i))}if(t&&t.directives)for(const n in t.directives){const i=t.directives[n];i.initial,e.directive(`motion-${n}`,Ua(i))}}};var nd;const wi=typeof window<"u",GD=Object.prototype.toString,XD=e=>GD.call(e)==="[object Object]";wi&&((nd=window==null?void 0:window.navigator)!=null&&nd.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function eq(e){return or()?(kd(e),!0):!1}function tq(e){var t;const n=L(e);return(t=n==null?void 0:n.$el)!=null?t:n}const nq=wi?window:void 0,od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},id="__vueuse_ssr_handlers__";od[id]=od[id]||{};function oq(e,t={}){const{immediate:n=!0,window:i=nq}=t,s=Z(!1);let a=null;function l(){!s.value||!i||(e(),a=i.requestAnimationFrame(l))}function r(){!s.value&&i&&(s.value=!0,l())}function u(){s.value=!1,a!=null&&i&&(i.cancelAnimationFrame(a),a=null)}return n&&r(),eq(u),{isActive:s,pause:u,resume:r}}var sd;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(sd||(sd={}));const va="vue-starport-injection",Ff="vue-starport-options",iq={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},jf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var sq=Object.defineProperty,Qs=Object.getOwnPropertySymbols,Vf=Object.prototype.hasOwnProperty,Bf=Object.prototype.propertyIsEnumerable,ad=(e,t,n)=>t in e?sq(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,aq=(e,t)=>{for(var n in t||(t={}))Vf.call(t,n)&&ad(e,n,t[n]);if(Qs)for(var n of Qs(t))Bf.call(t,n)&&ad(e,n,t[n]);return e},ld=(e,t)=>{var n={};for(var i in e)Vf.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&Qs)for(var i of Qs(e))t.indexOf(i)<0&&Bf.call(e,i)&&(n[i]=e[i]);return n};const lq=Ke({name:"StarportProxy",props:aq({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},jf),setup(e,t){const n=$(va),i=N(()=>n.getInstance(e.port,e.component)),s=Z(),a=i.value.generateId(),l=Z(!1);return i.value.isVisible||(i.value.land(),l.value=!0),bn(async()=>{if(i.value.el){console.error(`[Vue Starport] Multiple proxies of "${i.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(i.value.el=s.value,await it(),l.value=!0,i.value.rect.update(),i.value.rect.width===0||i.value.rect.height===0){const r=i.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${i.value.componentName}" (port "${e.port}") has no ${r} on initial render, have you set the size for it?`),console.warn("element:",i.value.el),console.warn("rect:",i.value.rect)}}),Fi(async()=>{i.value.rect.update(),i.value.liftOff(),i.value.el=void 0,l.value=!1,!i.value.options.keepAlive&&(await it(),await it(),!i.value.el&&n.dispose(i.value.port))}),ge(()=>e,async()=>{i.value.props&&await it();const r=e,{props:u}=r,d=ld(r,["props"]);i.value.props=u||{},i.value.setLocalOptions(d)},{deep:!0,immediate:!0}),()=>{const r=e,{initialProps:u,mountedProps:d}=r,p=ld(r,["initialProps","mountedProps"]),m=me(p,(l.value?d:u)||{});return St("div",me(m,{id:a,ref:s,"data-starport-proxy":i.value.componentId,"data-starport-landed":i.value.isLanded?"true":void 0,"data-starport-floating":i.value.isLanded?void 0:"true"}),t.slots.default?St(t.slots.default):void 0)}}});var rq=Object.defineProperty,cq=Object.defineProperties,uq=Object.getOwnPropertyDescriptors,rd=Object.getOwnPropertySymbols,dq=Object.prototype.hasOwnProperty,pq=Object.prototype.propertyIsEnumerable,cd=(e,t,n)=>t in e?rq(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mq=(e,t)=>{for(var n in t||(t={}))dq.call(t,n)&&cd(e,n,t[n]);if(rd)for(var n of rd(t))pq.call(t,n)&&cd(e,n,t[n]);return e},fq=(e,t)=>cq(e,uq(t));const hq=Ke({name:"Starport",inheritAttrs:!0,props:jf,setup(e,t){const n=Z(!1);return bn(()=>{if(n.value=!0,!$(va))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var l,r;const i=(r=(l=t.slots).default)==null?void 0:r.call(l);if(!i)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(i.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${i.length}`);const s=i[0];let a=s.type;return(!XD(a)||Wn(a))&&(a={render(){return i}}),St(lq,fq(mq({},e),{key:e.port,component:ta(a),props:s.props}))}}});function vq(e){const t=je({height:0,width:0,left:0,top:0,update:i,listen:a,pause:l,margin:"0px",padding:"0px"}),n=wi?document.documentElement||document.body:void 0;function i(){if(!wi)return;const r=tq(e);if(!r)return;const{height:u,width:d,left:p,top:m}=r.getBoundingClientRect(),f=window.getComputedStyle(r),h=f.margin,v=f.padding;Object.assign(t,{height:u,width:d,left:p,top:n.scrollTop+m,margin:h,padding:v})}const s=oq(i,{immediate:!1});function a(){wi&&(i(),s.resume())}function l(){s.pause()}return t}let _q=(e,t=21)=>(n=t)=>{let i="",s=n;for(;s--;)i+=e[Math.random()*e.length|0];return i};const ud=_q("abcdefghijklmnopqrstuvwxyz",5);function dd(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function gq(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var bq=Object.defineProperty,pd=Object.getOwnPropertySymbols,yq=Object.prototype.hasOwnProperty,Sq=Object.prototype.propertyIsEnumerable,md=(e,t,n)=>t in e?bq(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ja=(e,t)=>{for(var n in t||(t={}))yq.call(t,n)&&md(e,n,t[n]);if(pd)for(var n of pd(t))Sq.call(t,n)&&md(e,n,t[n]);return e};function wq(e,t,n={}){const i=gq(t),s=dd(i)||ud(),a=Z(),l=Z(null),r=Z(!1),u=Z(!1),d=uh(!0),p=Z({}),m=N(()=>Ja(Ja(Ja({},iq),n),p.value)),f=Z(0);let h;d.run(()=>{h=vq(a),ge(a,async k=>{k&&(u.value=!0),await it(),a.value||(u.value=!1)})});const v=dd(e);function S(){return`starport-${s}-${v}-${ud()}`}const x=S();return je({el:a,id:x,port:e,props:l,rect:h,scope:d,isLanded:r,isVisible:u,options:m,liftOffTime:f,component:t,componentName:i,componentId:s,generateId:S,setLocalOptions(k={}){p.value=JSON.parse(JSON.stringify(k))},elRef(){return a},liftOff(){r.value&&(r.value=!1,f.value=Date.now(),h.listen())},land(){r.value||(r.value=!0,h.pause())}})}function xq(e){const t=je(new Map);function n(s,a){let l=t.get(s);return l||(l=wq(s,a,e),t.set(s,l)),l.component=a,l}function i(s){var a;(a=t.get(s))==null||a.scope.stop(),t.delete(s)}return{portMap:t,dispose:i,getInstance:n}}var kq=Object.defineProperty,$q=Object.defineProperties,zq=Object.getOwnPropertyDescriptors,fd=Object.getOwnPropertySymbols,Iq=Object.prototype.hasOwnProperty,Cq=Object.prototype.propertyIsEnumerable,hd=(e,t,n)=>t in e?kq(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Eq=(e,t)=>{for(var n in t||(t={}))Iq.call(t,n)&&hd(e,n,t[n]);if(fd)for(var n of fd(t))Cq.call(t,n)&&hd(e,n,t[n]);return e},Oq=(e,t)=>$q(e,zq(t));const Mq=Ke({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=$(va);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=N(()=>t.getInstance(e.port,e.component)),i=N(()=>{var l;return((l=n.value.el)==null?void 0:l.id)||n.value.id}),s=N(()=>{const l=Date.now()-n.value.liftOffTime,r=Math.max(0,n.value.options.duration-l),u=n.value.rect,d={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!n.value.isVisible||!n.value.el?Oq(Eq({},d),{zIndex:-1,display:"none"}):(n.value.isLanded?d.display="none":Object.assign(d,{transitionProperty:"all",transitionDuration:`${r}ms`,transitionTimingFunction:n.value.options.easing}),d)}),a={onTransitionend(l){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${l.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const l=!!(n.value.isLanded&&n.value.el);return St("div",{style:s.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},St(v_,{to:l?`#${i.value}`:"body",disabled:!l},St(n.value.component,me(a,n.value.props))))}}}),Tq=Ke({name:"StarportCarrier",setup(e,{slots:t}){const n=xq($(Ff,{}));return wt().appContext.app.provide(va,n),()=>{var s;return[(s=t.default)==null?void 0:s.call(t),Array.from(n.portMap.entries()).map(([a,{component:l}])=>St(Mq,{key:a,port:a,component:l}))]}}});function Aq(e={}){return{install(t){t.provide(Ff,e),t.component("Starport",hq),t.component("StarportCarrier",Tq)}}}function Kq(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(ZD),e.app.use(Aq({keepAlive:!0}))}function xt(e,t,n){var i;return((i=e.instance)==null?void 0:i.$).provides[t]??n}function Pq(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var p,m,f,h,v,S;if(gi.value||(p=xt(n,fi))!=null&&p.value)return;const i=xt(n,eo),s=xt(n,mi),a=xt(n,gl),l=n.modifiers.hide!==!1&&n.modifiers.hide!=null,r=n.modifiers.fade!==!1&&n.modifiers.fade!=null,u=((m=i==null?void 0:i.value)==null?void 0:m.length)||0,d=r?p1:Ca;if(i&&!((f=i==null?void 0:i.value)!=null&&f.includes(t))&&i.value.push(t),n.value==null&&(n.value=(h=i==null?void 0:i.value)==null?void 0:h.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((v=i==null?void 0:i.value)==null?void 0:v.length)||0)+Number(n.value)),!(a!=null&&a.value.has(n.value)))a==null||a.value.set(n.value,[t]);else if(!((S=a==null?void 0:a.value.get(n.value))!=null&&S.includes(t))){const x=(a==null?void 0:a.value.get(n.value))||[];a==null||a.value.set(n.value,[t].concat(x))}t==null||t.classList.toggle(Yn,!0),s&&ge(s,()=>{const x=(s==null?void 0:s.value)??0,k=n.value!=null?x>=n.value:x>u;t.classList.contains(Ea)||t.classList.toggle(d,!k),l!==!1&&l!==void 0&&t.classList.toggle(d,k),t.classList.toggle(Qo,!1);const C=a==null?void 0:a.value.get(x);C==null||C.forEach((b,P)=>{b.classList.toggle(ls,!1),P===C.length-1?b.classList.toggle(Qo,!0):b.classList.toggle(ls,!0)}),t.classList.contains(Qo)||t.classList.toggle(ls,k)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Yn,!1);const i=xt(n,eo);i!=null&&i.value&&bl(i.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var r,u,d;if(gi.value||(r=xt(n,fi))!=null&&r.value)return;const i=xt(n,eo),s=xt(n,mi),a=xt(n,gl),l=i==null?void 0:i.value.length;n.value==null&&(n.value=i==null?void 0:i.value.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((u=i==null?void 0:i.value)==null?void 0:u.length)||0)+Number(n.value)),a!=null&&a.value.has(n.value)?(d=a==null?void 0:a.value.get(n.value))==null||d.push(t):a==null||a.value.set(n.value,[t]),t==null||t.classList.toggle(Yn,!0),s&&ge(s,()=>{const p=(s.value??0)>=(n.value??l??0);t.classList.contains(Ea)||t.classList.toggle(Ca,!p),t.classList.toggle(Qo,!1),t.classList.contains(Qo)||t.classList.toggle(ls,p)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Yn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var l,r,u;if(gi.value||(l=xt(n,fi))!=null&&l.value)return;const i=xt(n,eo),s=xt(n,mi),a=((r=i==null?void 0:i.value)==null?void 0:r.length)||0;i&&!((u=i==null?void 0:i.value)!=null&&u.includes(t))&&i.value.push(t),t==null||t.classList.toggle(Yn,!0),s&&ge(s,()=>{const d=(s==null?void 0:s.value)??0,p=n.value!=null?d>=n.value:d>a;t.classList.toggle(Ca,p),t.classList.toggle(Ea,p)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Yn,!1);const i=xt(n,eo);i!=null&&i.value&&bl(i.value,t)}})}}}function Lq(e,t){const n=Qm(e),i=Ym(t,n.currentRoute,n.currentPage);return{nav:{...n,...i},configs:Oe,themeConfigs:N(()=>Oe.themeConfig)}}function Rq(){return{install(e){const t=Lq(Ht,Lt);e.provide(I,je(t))}}}const Fo=hg(gW);Fo.use(yt);Fo.use(c1());Fo.use(Pq());Fo.use(Rq());Kq({app:Fo,router:yt});Fo.mount("#app");export{Rk as $,Qx as A,Z as B,Fq as C,dt as D,Ve as E,Me as F,vS as G,dW as H,Lt as I,Bs as J,aW as K,Wa as L,bn as M,je as N,Dq as O,jq as P,ge as Q,w as R,Cm as S,Te as T,ut as U,ES as V,Hq as W,Wq as X,Ti as Y,Pa as Z,E as _,I as a,Er as a0,Or as a1,Be as a2,zk as a3,Ow as a4,Nq as a5,Bt as a6,ni as a7,so as a8,en as a9,Ml as aa,oS as ab,iS as ac,sS as ad,lS as ae,np as af,Tp as ag,Vq as ah,ft as ai,ps as aj,dx as ak,Fp as al,rS as am,Fi as an,qp as b,Oe as c,Ke as d,Qh as e,ie as f,o as g,L as h,$ as i,Qe as j,nW as k,c as l,j as m,tt as n,g as o,Se as p,xr as q,No as r,Jt as s,gt as t,qq as u,N as v,Oa as w,z as x,ym as y,ek as z};
