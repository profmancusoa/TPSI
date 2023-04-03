function St(n,t){const s=Object.create(null),o=n.split(",");for(let i=0;i<o.length;i++)s[o[i]]=!0;return t?i=>!!s[i.toLowerCase()]:i=>!!s[i]}function en(n){if(pe(n)){const t={};for(let s=0;s<n.length;s++){const o=n[s],i=qe(o)?pp(o):en(o);if(i)for(const l in i)t[l]=i[l]}return t}else{if(qe(n))return n;if(Se(n))return n}}const rp=/;(?![^(]*\))/g,cp=/:([^]+)/,up=/\/\*.*?\*\//gs;function pp(n){const t={};return n.replace(up,"").split(rp).forEach(s=>{if(s){const o=s.split(cp);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Be(n){let t="";if(qe(n))t=n;else if(pe(n))for(let s=0;s<n.length;s++){const o=Be(n[s]);o&&(t+=o+" ")}else if(Se(n))for(const s in n)n[s]&&(t+=s+" ");return t.trim()}function H(n){if(!n)return null;let{class:t,style:s}=n;return t&&!qe(t)&&(n.class=Be(t)),s&&(n.style=en(s)),n}const dp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",mp="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",fp=St(dp),gp=St(mp),hp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_p=St(hp);function jr(n){return!!n||n===""}const Tn=n=>qe(n)?n:n==null?"":pe(n)||Se(n)&&(n.toString===Vr||!ge(n.toString))?JSON.stringify(n,Ur,2):String(n),Ur=(n,t)=>t&&t.__v_isRef?Ur(n,t.value):Wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[o,i])=>(s[`${o} =>`]=i,s),{})}:Kr(t)?{[`Set(${t.size})`]:[...t.values()]}:Se(t)&&!pe(t)&&!Gr(t)?String(t):t,Oe=Object.freeze({}),fa=Object.freeze([]),fn=()=>{},Br=()=>!1,kp=/^on[^a-z]/,rs=n=>kp.test(n),Ps=n=>n.startsWith("onUpdate:"),je=Object.assign,mi=(n,t)=>{const s=n.indexOf(t);s>-1&&n.splice(s,1)},vp=Object.prototype.hasOwnProperty,we=(n,t)=>vp.call(n,t),pe=Array.isArray,Wt=n=>cs(n)==="[object Map]",Kr=n=>cs(n)==="[object Set]",bp=n=>cs(n)==="[object RegExp]",ge=n=>typeof n=="function",qe=n=>typeof n=="string",fi=n=>typeof n=="symbol",Se=n=>n!==null&&typeof n=="object",gi=n=>Se(n)&&ge(n.then)&&ge(n.catch),Vr=Object.prototype.toString,cs=n=>Vr.call(n),hi=n=>cs(n).slice(8,-1),Gr=n=>cs(n)==="[object Object]",_i=n=>qe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$s=St(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yp=St("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Js=n=>{const t=Object.create(null);return s=>t[s]||(t[s]=n(s))},wp=/-(\w)/g,Gn=Js(n=>n.replace(wp,(t,s)=>s?s.toUpperCase():"")),zp=/\B([A-Z])/g,rt=Js(n=>n.replace(zp,"-$1").toLowerCase()),Yt=Js(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ht=Js(n=>n?`on${Yt(n)}`:""),Ga=(n,t)=>!Object.is(n,t),vt=(n,t)=>{for(let s=0;s<n.length;s++)n[s](t)},Hs=(n,t,s)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:s})},Co=n=>{const t=parseFloat(n);return isNaN(t)?n:t},xp=n=>{const t=qe(n)?Number(n):NaN;return isNaN(t)?n:t};let al;const Qr=()=>al||(al=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Os(n,...t){console.warn(`[Vue warn] ${n}`,...t)}let kn;class Yr{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kn,!t&&kn&&(this.index=(kn.scopes||(kn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const s=kn;try{return kn=this,t()}finally{kn=s}}else Os("cannot run an inactive effect scope.")}on(){kn=this}off(){kn=this.parent}stop(t){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function H4(n){return new Yr(n)}function Tp(n,t=kn){t&&t.active&&t.effects.push(n)}function Jr(){return kn}function $p(n){kn?kn.cleanups.push(n):Os("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ki=n=>{const t=new Set(n);return t.w=0,t.n=0,t},Zr=n=>(n.w&Lt)>0,Xr=n=>(n.n&Lt)>0,Mp=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=Lt},Lp=n=>{const{deps:t}=n;if(t.length){let s=0;for(let o=0;o<t.length;o++){const i=t[o];Zr(i)&&!Xr(i)?i.delete(n):t[s++]=i,i.w&=~Lt,i.n&=~Lt}t.length=s}},Rs=new WeakMap;let Oa=0,Lt=1;const Ao=30;let un;const Dt=Symbol("iterate"),Po=Symbol("Map key iterate");class vi{constructor(t,s=null,o){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Tp(this,o)}run(){if(!this.active)return this.fn();let t=un,s=wt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=un,un=this,wt=!0,Lt=1<<++Oa,Oa<=Ao?Mp(this):sl(this),this.fn()}finally{Oa<=Ao&&Lp(this),Lt=1<<--Oa,un=this.parent,wt=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(sl(this),this.onStop&&this.onStop(),this.active=!1)}}function sl(n){const{deps:t}=n;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(n);t.length=0}}let wt=!0;const ec=[];function ea(){ec.push(wt),wt=!1}function na(){const n=ec.pop();wt=n===void 0?!0:n}function gn(n,t,s){if(wt&&un){let o=Rs.get(n);o||Rs.set(n,o=new Map);let i=o.get(s);i||o.set(s,i=ki()),nc(i,{effect:un,target:n,type:t,key:s})}}function nc(n,t){let s=!1;Oa<=Ao?Xr(n)||(n.n|=Lt,s=!Zr(n)):s=!n.has(un),s&&(n.add(un),un.deps.push(n),un.onTrack&&un.onTrack(Object.assign({effect:un},t)))}function ct(n,t,s,o,i,l){const r=Rs.get(n);if(!r)return;let c=[];if(t==="clear")c=[...r.values()];else if(s==="length"&&pe(n)){const p=Number(o);r.forEach((d,m)=>{(m==="length"||m>=p)&&c.push(d)})}else switch(s!==void 0&&c.push(r.get(s)),t){case"add":pe(n)?_i(s)&&c.push(r.get("length")):(c.push(r.get(Dt)),Wt(n)&&c.push(r.get(Po)));break;case"delete":pe(n)||(c.push(r.get(Dt)),Wt(n)&&c.push(r.get(Po)));break;case"set":Wt(n)&&c.push(r.get(Dt));break}const u={target:n,type:t,key:s,newValue:o,oldValue:i,oldTarget:l};if(c.length===1)c[0]&&Ho(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);Ho(ki(p),u)}}function Ho(n,t){const s=pe(n)?n:[...n];for(const o of s)o.computed&&ol(o,t);for(const o of s)o.computed||ol(o,t)}function ol(n,t){(n!==un||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(je({effect:n},t)),n.scheduler?n.scheduler():n.run())}function Ip(n,t){var s;return(s=Rs.get(n))===null||s===void 0?void 0:s.get(t)}const Ep=St("__proto__,__v_isRef,__isVue"),tc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(fi)),Sp=Zs(),Cp=Zs(!1,!0),Ap=Zs(!0),Pp=Zs(!0,!0),il=Hp();function Hp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...s){const o=he(this);for(let l=0,r=this.length;l<r;l++)gn(o,"get",l+"");const i=o[t](...s);return i===-1||i===!1?o[t](...s.map(he)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...s){ea();const o=he(this)[t].apply(this,s);return na(),o}}),n}function Op(n){const t=he(this);return gn(t,"has",n),t.hasOwnProperty(n)}function Zs(n=!1,t=!1){return function(o,i,l){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&l===(n?t?uc:cc:t?rc:lc).get(o))return o;const r=pe(o);if(!n){if(r&&we(il,i))return Reflect.get(il,i,l);if(i==="hasOwnProperty")return Op}const c=Reflect.get(o,i,l);return(fi(i)?tc.has(i):Ep(i))||(n||gn(o,"get",i),t)?c:Me(c)?r&&_i(i)?c:c.value:Se(c)?n?Bn(c):nn(c):c}}const Rp=ac(),Np=ac(!0);function ac(n=!1){return function(s,o,i,l){let r=s[o];if(It(r)&&Me(r)&&!Me(i))return!1;if(!n&&(!Ns(i)&&!It(i)&&(r=he(r),i=he(i)),!pe(s)&&Me(r)&&!Me(i)))return r.value=i,!0;const c=pe(s)&&_i(o)?Number(o)<s.length:we(s,o),u=Reflect.set(s,o,i,l);return s===he(l)&&(c?Ga(i,r)&&ct(s,"set",o,i,r):ct(s,"add",o,i)),u}}function Fp(n,t){const s=we(n,t),o=n[t],i=Reflect.deleteProperty(n,t);return i&&s&&ct(n,"delete",t,void 0,o),i}function qp(n,t){const s=Reflect.has(n,t);return(!fi(t)||!tc.has(t))&&gn(n,"has",t),s}function Wp(n){return gn(n,"iterate",pe(n)?"length":Dt),Reflect.ownKeys(n)}const sc={get:Sp,set:Rp,deleteProperty:Fp,has:qp,ownKeys:Wp},oc={get:Ap,set(n,t){return Os(`Set operation on key "${String(t)}" failed: target is readonly.`,n),!0},deleteProperty(n,t){return Os(`Delete operation on key "${String(t)}" failed: target is readonly.`,n),!0}},Dp=je({},sc,{get:Cp,set:Np}),jp=je({},oc,{get:Pp}),bi=n=>n,Xs=n=>Reflect.getPrototypeOf(n);function _s(n,t,s=!1,o=!1){n=n.__v_raw;const i=he(n),l=he(t);s||(t!==l&&gn(i,"get",t),gn(i,"get",l));const{has:r}=Xs(i),c=o?bi:s?wi:Qa;if(r.call(i,t))return c(n.get(t));if(r.call(i,l))return c(n.get(l));n!==i&&n.get(t)}function ks(n,t=!1){const s=this.__v_raw,o=he(s),i=he(n);return t||(n!==i&&gn(o,"has",n),gn(o,"has",i)),n===i?s.has(n):s.has(n)||s.has(i)}function vs(n,t=!1){return n=n.__v_raw,!t&&gn(he(n),"iterate",Dt),Reflect.get(n,"size",n)}function ll(n){n=he(n);const t=he(this);return Xs(t).has.call(t,n)||(t.add(n),ct(t,"add",n,n)),this}function rl(n,t){t=he(t);const s=he(this),{has:o,get:i}=Xs(s);let l=o.call(s,n);l?ic(s,o,n):(n=he(n),l=o.call(s,n));const r=i.call(s,n);return s.set(n,t),l?Ga(t,r)&&ct(s,"set",n,t,r):ct(s,"add",n,t),this}function cl(n){const t=he(this),{has:s,get:o}=Xs(t);let i=s.call(t,n);i?ic(t,s,n):(n=he(n),i=s.call(t,n));const l=o?o.call(t,n):void 0,r=t.delete(n);return i&&ct(t,"delete",n,void 0,l),r}function ul(){const n=he(this),t=n.size!==0,s=Wt(n)?new Map(n):new Set(n),o=n.clear();return t&&ct(n,"clear",void 0,void 0,s),o}function bs(n,t){return function(o,i){const l=this,r=l.__v_raw,c=he(r),u=t?bi:n?wi:Qa;return!n&&gn(c,"iterate",Dt),r.forEach((p,d)=>o.call(i,u(p),u(d),l))}}function ys(n,t,s){return function(...o){const i=this.__v_raw,l=he(i),r=Wt(l),c=n==="entries"||n===Symbol.iterator&&r,u=n==="keys"&&r,p=i[n](...o),d=s?bi:t?wi:Qa;return!t&&gn(l,"iterate",u?Po:Dt),{next(){const{value:m,done:f}=p.next();return f?{value:m,done:f}:{value:c?[d(m[0]),d(m[1])]:d(m),done:f}},[Symbol.iterator](){return this}}}}function dt(n){return function(...t){{const s=t[0]?`on key "${t[0]}" `:"";console.warn(`${Yt(n)} operation ${s}failed: target is readonly.`,he(this))}return n==="delete"?!1:this}}function Up(){const n={get(l){return _s(this,l)},get size(){return vs(this)},has:ks,add:ll,set:rl,delete:cl,clear:ul,forEach:bs(!1,!1)},t={get(l){return _s(this,l,!1,!0)},get size(){return vs(this)},has:ks,add:ll,set:rl,delete:cl,clear:ul,forEach:bs(!1,!0)},s={get(l){return _s(this,l,!0)},get size(){return vs(this,!0)},has(l){return ks.call(this,l,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:bs(!0,!1)},o={get(l){return _s(this,l,!0,!0)},get size(){return vs(this,!0)},has(l){return ks.call(this,l,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:bs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=ys(l,!1,!1),s[l]=ys(l,!0,!1),t[l]=ys(l,!1,!0),o[l]=ys(l,!0,!0)}),[n,s,t,o]}const[Bp,Kp,Vp,Gp]=Up();function eo(n,t){const s=t?n?Gp:Vp:n?Kp:Bp;return(o,i,l)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?o:Reflect.get(we(s,i)&&i in o?s:o,i,l)}const Qp={get:eo(!1,!1)},Yp={get:eo(!1,!0)},Jp={get:eo(!0,!1)},Zp={get:eo(!0,!0)};function ic(n,t,s){const o=he(s);if(o!==s&&t.call(n,o)){const i=hi(n);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const lc=new WeakMap,rc=new WeakMap,cc=new WeakMap,uc=new WeakMap;function Xp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ed(n){return n.__v_skip||!Object.isExtensible(n)?0:Xp(hi(n))}function nn(n){return It(n)?n:no(n,!1,sc,Qp,lc)}function nd(n){return no(n,!1,Dp,Yp,rc)}function Bn(n){return no(n,!0,oc,Jp,cc)}function da(n){return no(n,!0,jp,Zp,uc)}function no(n,t,s,o,i){if(!Se(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(t&&n.__v_isReactive))return n;const l=i.get(n);if(l)return l;const r=ed(n);if(r===0)return n;const c=new Proxy(n,r===2?o:s);return i.set(n,c),c}function jt(n){return It(n)?jt(n.__v_raw):!!(n&&n.__v_isReactive)}function It(n){return!!(n&&n.__v_isReadonly)}function Ns(n){return!!(n&&n.__v_isShallow)}function Fs(n){return jt(n)||It(n)}function he(n){const t=n&&n.__v_raw;return t?he(t):n}function yi(n){return Hs(n,"__v_skip",!0),n}const Qa=n=>Se(n)?nn(n):n,wi=n=>Se(n)?Bn(n):n;function zi(n){wt&&un&&(n=he(n),nc(n.dep||(n.dep=ki()),{target:n,type:"get",key:"value"}))}function xi(n,t){n=he(n);const s=n.dep;s&&Ho(s,{target:n,type:"set",key:"value",newValue:t})}function Me(n){return!!(n&&n.__v_isRef===!0)}function ce(n){return pc(n,!1)}function Qn(n){return pc(n,!0)}function pc(n,t){return Me(n)?n:new td(n,t)}class td{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:he(t),this._value=s?t:Qa(t)}get value(){return zi(this),this._value}set value(t){const s=this.__v_isShallow||Ns(t)||It(t);t=s?t:he(t),Ga(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:Qa(t),xi(this,t))}}function x(n){return Me(n)?n.value:n}const ad={get:(n,t,s)=>x(Reflect.get(n,t,s)),set:(n,t,s,o)=>{const i=n[t];return Me(i)&&!Me(s)?(i.value=s,!0):Reflect.set(n,t,s,o)}};function dc(n){return jt(n)?n:new Proxy(n,ad)}class sd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=t(()=>zi(this),()=>xi(this));this._get=s,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function mc(n){return new sd(n)}function od(n){Fs(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=pe(n)?new Array(n.length):{};for(const s in n)t[s]=ld(n,s);return t}class id{constructor(t,s,o){this._object=t,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ip(he(this._object),this._key)}}function ld(n,t,s){const o=n[t];return Me(o)?o:new id(n,t,s)}var fc;class rd{constructor(t,s,o,i){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[fc]=!1,this._dirty=!0,this.effect=new vi(t,()=>{this._dirty||(this._dirty=!0,xi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=o}get value(){const t=he(this);return zi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}fc="__v_isReadonly";function cd(n,t,s=!1){let o,i;const l=ge(n);l?(o=n,i=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=n.get,i=n.set);const r=new rd(o,i,l||!i,s);return t&&!s&&(r.effect.onTrack=t.onTrack,r.effect.onTrigger=t.onTrigger),r}const Ut=[];function Ms(n){Ut.push(n)}function Ls(){Ut.pop()}function W(n,...t){ea();const s=Ut.length?Ut[Ut.length-1].component:null,o=s&&s.appContext.config.warnHandler,i=ud();if(o)lt(o,s,11,[n+t.join(""),s&&s.proxy,i.map(({vnode:l})=>`at <${po(s,l.type)}>`).join(`
`),i]);else{const l=[`[Vue warn]: ${n}`,...t];i.length&&l.push(`
`,...pd(i)),console.warn(...l)}na()}function ud(){let n=Ut[Ut.length-1];if(!n)return[];const t=[];for(;n;){const s=t[0];s&&s.vnode===n?s.recurseCount++:t.push({vnode:n,recurseCount:0});const o=n.component&&n.component.parent;n=o&&o.vnode}return t}function pd(n){const t=[];return n.forEach((s,o)=>{t.push(...o===0?[]:[`
`],...dd(s))}),t}function dd({vnode:n,recurseCount:t}){const s=t>0?`... (${t} recursive calls)`:"",o=n.component?n.component.parent==null:!1,i=` at <${po(n.component,n.type,o)}`,l=">"+s;return n.props?[i,...md(n.props),l]:[i+l]}function md(n){const t=[],s=Object.keys(n);return s.slice(0,3).forEach(o=>{t.push(...gc(o,n[o]))}),s.length>3&&t.push(" ..."),t}function gc(n,t,s){return qe(t)?(t=JSON.stringify(t),s?t:[`${n}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?s?t:[`${n}=${t}`]:Me(t)?(t=gc(n,he(t.value),!0),s?t:[`${n}=Ref<`,t,">"]):ge(t)?[`${n}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),s?t:[`${n}=`,t])}function fd(n,t){n!==void 0&&(typeof n!="number"?W(`${t} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&W(`${t} is NaN - the duration expression might be incorrect.`))}const Ti={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function lt(n,t,s,o){let i;try{i=o?n(...o):n()}catch(l){to(l,t,s)}return i}function Mn(n,t,s,o){if(ge(n)){const l=lt(n,t,s,o);return l&&gi(l)&&l.catch(r=>{to(r,t,s)}),l}const i=[];for(let l=0;l<n.length;l++)i.push(Mn(n[l],t,s,o));return i}function to(n,t,s,o=!0){const i=t?t.vnode:null;if(t){let l=t.parent;const r=t.proxy,c=Ti[s];for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](n,r,c)===!1)return}l=l.parent}const u=t.appContext.config.errorHandler;if(u){lt(u,null,10,[n,r,c]);return}}gd(n,s,i,o)}function gd(n,t,s,o=!0){{const i=Ti[t];if(s&&Ms(s),W(`Unhandled error${i?` during execution of ${i}`:""}`),s&&Ls(),o)throw n;console.error(n)}}let Ya=!1,Oo=!1;const an=[];let jn=0;const ga=[];let Dn=null,ht=0;const hc=Promise.resolve();let $i=null;const hd=100;function On(n){const t=$i||hc;return n?t.then(this?n.bind(this):n):t}function _d(n){let t=jn+1,s=an.length;for(;t<s;){const o=t+s>>>1;Ja(an[o])<n?t=o+1:s=o}return t}function ao(n){(!an.length||!an.includes(n,Ya&&n.allowRecurse?jn+1:jn))&&(n.id==null?an.push(n):an.splice(_d(n.id),0,n),_c())}function _c(){!Ya&&!Oo&&(Oo=!0,$i=hc.then(bc))}function kd(n){const t=an.indexOf(n);t>jn&&an.splice(t,1)}function kc(n){pe(n)?ga.push(...n):(!Dn||!Dn.includes(n,n.allowRecurse?ht+1:ht))&&ga.push(n),_c()}function pl(n,t=Ya?jn+1:0){for(n=n||new Map;t<an.length;t++){const s=an[t];if(s&&s.pre){if(Mi(n,s))continue;an.splice(t,1),t--,s()}}}function vc(n){if(ga.length){const t=[...new Set(ga)];if(ga.length=0,Dn){Dn.push(...t);return}for(Dn=t,n=n||new Map,Dn.sort((s,o)=>Ja(s)-Ja(o)),ht=0;ht<Dn.length;ht++)Mi(n,Dn[ht])||Dn[ht]();Dn=null,ht=0}}const Ja=n=>n.id==null?1/0:n.id,vd=(n,t)=>{const s=Ja(n)-Ja(t);if(s===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return s};function bc(n){Oo=!1,Ya=!0,n=n||new Map,an.sort(vd);const t=s=>Mi(n,s);try{for(jn=0;jn<an.length;jn++){const s=an[jn];if(s&&s.active!==!1){if(t(s))continue;lt(s,null,14)}}}finally{jn=0,an.length=0,vc(n),Ya=!1,$i=null,(an.length||ga.length)&&bc(n)}}function Mi(n,t){if(!n.has(t))n.set(t,1);else{const s=n.get(t);if(s>hd){const o=t.ownerInstance,i=o&&ns(o.type);return W(`Maximum recursive updates exceeded${i?` in component <${i}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(t,s+1)}}let zt=!1;const ca=new Set;Qr().__VUE_HMR_RUNTIME__={createRecord:fo(yc),rerender:fo(wd),reload:fo(zd)};const Jt=new Map;function bd(n){const t=n.type.__hmrId;let s=Jt.get(t);s||(yc(t,n.type),s=Jt.get(t)),s.instances.add(n)}function yd(n){Jt.get(n.type.__hmrId).instances.delete(n)}function yc(n,t){return Jt.has(n)?!1:(Jt.set(n,{initialDef:Wa(t),instances:new Set}),!0)}function Wa(n){return Jc(n)?n.__vccOpts:n}function wd(n,t){const s=Jt.get(n);s&&(s.initialDef.render=t,[...s.instances].forEach(o=>{t&&(o.render=t,Wa(o.type).render=t),o.renderCache=[],zt=!0,o.update(),zt=!1}))}function zd(n,t){const s=Jt.get(n);if(!s)return;t=Wa(t),dl(s.initialDef,t);const o=[...s.instances];for(const i of o){const l=Wa(i.type);ca.has(l)||(l!==s.initialDef&&dl(l,t),ca.add(l)),i.appContext.optionsCache.delete(i.type),i.ceReload?(ca.add(l),i.ceReload(t.styles),ca.delete(l)):i.parent?ao(i.parent.update):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}kc(()=>{for(const i of o)ca.delete(Wa(i.type))})}function dl(n,t){je(n,t);for(const s in n)s!=="__file"&&!(s in t)&&delete n[s]}function fo(n){return(t,s)=>{try{return n(t,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Un,Ra=[],Ro=!1;function us(n,...t){Un?Un.emit(n,...t):Ro||Ra.push({event:n,args:t})}function wc(n,t){var s,o;Un=n,Un?(Un.enabled=!0,Ra.forEach(({event:i,args:l})=>Un.emit(i,...l)),Ra=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{wc(l,t)}),setTimeout(()=>{Un||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ro=!0,Ra=[])},3e3)):(Ro=!0,Ra=[])}function xd(n,t){us("app:init",n,t,{Fragment:Ee,Text:fs,Comment:Je,Static:Is})}function Td(n){us("app:unmount",n)}const No=Li("component:added"),zc=Li("component:updated"),$d=Li("component:removed"),Md=n=>{Un&&typeof Un.cleanupBuffer=="function"&&!Un.cleanupBuffer(n)&&$d(n)};function Li(n){return t=>{us(n,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Ld=xc("perf:start"),Id=xc("perf:end");function xc(n){return(t,s,o)=>{us(n,t.appContext.app,t.uid,t,s,o)}}function Ed(n,t,s){us("component:emit",n.appContext.app,n,t,s)}function Sd(n,t,...s){if(n.isUnmounted)return;const o=n.vnode.props||Oe;{const{emitsOptions:d,propsOptions:[m]}=n;if(d)if(!(t in d))(!m||!(Ht(t)in m))&&W(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ht(t)}" prop.`);else{const f=d[t];ge(f)&&(f(...s)||W(`Invalid event arguments: event validation failed for event "${t}".`))}}let i=s;const l=t.startsWith("update:"),r=l&&t.slice(7);if(r&&r in o){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:m,trim:f}=o[d]||Oe;f&&(i=s.map(h=>qe(h)?h.trim():h)),m&&(i=s.map(Co))}Ed(n,t,i);{const d=t.toLowerCase();d!==t&&o[Ht(d)]&&W(`Event "${d}" is emitted in component ${po(n,n.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${rt(t)}" instead of "${t}".`)}let c,u=o[c=Ht(t)]||o[c=Ht(Gn(t))];!u&&l&&(u=o[c=Ht(rt(t))]),u&&Mn(u,n,6,i);const p=o[c+"Once"];if(p){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Mn(p,n,6,i)}}function Tc(n,t,s=!1){const o=t.emitsCache,i=o.get(n);if(i!==void 0)return i;const l=n.emits;let r={},c=!1;if(!ge(n)){const u=p=>{const d=Tc(p,t,!0);d&&(c=!0,je(r,d))};!s&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!l&&!c?(Se(n)&&o.set(n,null),null):(pe(l)?l.forEach(u=>r[u]=null):je(r,l),Se(n)&&o.set(n,r),r)}function so(n,t){return!n||!rs(t)?!1:(t=t.slice(2).replace(/Once$/,""),we(n,t[0].toLowerCase()+t.slice(1))||we(n,rt(t))||we(n,t))}let Qe=null,oo=null;function qs(n){const t=Qe;return Qe=n,oo=n&&n.type.__scopeId||null,t}function O4(n){oo=n}function R4(){oo=null}function v(n,t=Qe,s){if(!t||n._n)return n;const o=(...i)=>{o._d&&Tl(-1);const l=qs(t);let r;try{r=n(...i)}finally{qs(l),o._d&&Tl(1)}return zc(t),r};return o._n=!0,o._c=!0,o._d=!0,o}let Fo=!1;function Ws(){Fo=!0}function go(n){const{type:t,vnode:s,proxy:o,withProxy:i,props:l,propsOptions:[r],slots:c,attrs:u,emit:p,render:d,renderCache:m,data:f,setupState:h,ctx:_,inheritAttrs:y}=n;let w,A;const I=qs(n);Fo=!1;try{if(s.shapeFlag&4){const G=i||o;w=An(d.call(G,G,m,l,h,f,_)),A=u}else{const G=t;u===l&&Ws(),w=An(G.length>1?G(l,{get attrs(){return Ws(),u},slots:c,emit:p}):G(l,null)),A=t.props?u:Ad(u)}}catch(G){ja.length=0,to(G,n,1),w=E(Je)}let P=w,O;if(w.patchFlag>0&&w.patchFlag&2048&&([P,O]=Cd(w)),A&&y!==!1){const G=Object.keys(A),{shapeFlag:Q}=P;if(G.length){if(Q&7)r&&G.some(Ps)&&(A=Pd(A,r)),P=Rn(P,A);else if(!Fo&&P.type!==Je){const K=Object.keys(u),U=[],se=[];for(let re=0,fe=K.length;re<fe;re++){const X=K[re];rs(X)?Ps(X)||U.push(X[2].toLowerCase()+X.slice(3)):se.push(X)}se.length&&W(`Extraneous non-props attributes (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),U.length&&W(`Extraneous non-emits event listeners (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(ml(P)||W("Runtime directive used on component with non-element root node. The directives will not function as intended."),P=Rn(P),P.dirs=P.dirs?P.dirs.concat(s.dirs):s.dirs),s.transition&&(ml(P)||W("Component inside <Transition> renders non-element root node that cannot be animated."),P.transition=s.transition),O?O(P):w=P,qs(I),w}const Cd=n=>{const t=n.children,s=n.dynamicChildren,o=$c(t);if(!o)return[n,void 0];const i=t.indexOf(o),l=s?s.indexOf(o):-1,r=c=>{t[i]=c,s&&(l>-1?s[l]=c:c.patchFlag>0&&(n.dynamicChildren=[...s,c]))};return[An(o),r]};function $c(n){let t;for(let s=0;s<n.length;s++){const o=n[s];if(Zt(o)){if(o.type!==Je||o.children==="v-if"){if(t)return;t=o}}else return}return t}const Ad=n=>{let t;for(const s in n)(s==="class"||s==="style"||rs(s))&&((t||(t={}))[s]=n[s]);return t},Pd=(n,t)=>{const s={};for(const o in n)(!Ps(o)||!(o.slice(9)in t))&&(s[o]=n[o]);return s},ml=n=>n.shapeFlag&7||n.type===Je;function Hd(n,t,s){const{props:o,children:i,component:l}=n,{props:r,children:c,patchFlag:u}=t,p=l.emitsOptions;if((i||c)&&zt||t.dirs||t.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return o?fl(o,r,p):!!r;if(u&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(r[f]!==o[f]&&!so(p,f))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:o===r?!1:o?r?fl(o,r,p):!0:!!r;return!1}function fl(n,t,s){const o=Object.keys(t);if(o.length!==Object.keys(n).length)return!0;for(let i=0;i<o.length;i++){const l=o[i];if(t[l]!==n[l]&&!so(s,l))return!0}return!1}function Od({vnode:n,parent:t},s){for(;t&&t.subTree===n;)(n=t.vnode).el=s,t=t.parent}const Mc=n=>n.__isSuspense;function Rd(n,t){t&&t.pendingBranch?pe(n)?t.effects.push(...n):t.effects.push(n):kc(n)}function vn(n,t){if(!Ue)W("provide() can only be used inside setup().");else{let s=Ue.provides;const o=Ue.parent&&Ue.parent.provides;o===s&&(s=Ue.provides=Object.create(o)),s[n]=t}}function z(n,t,s=!1){const o=Ue||Qe;if(o){const i=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(i&&n in i)return i[n];if(arguments.length>1)return s&&ge(t)?t.call(o.proxy):t;W(`injection "${String(n)}" not found.`)}else W("inject() can only be used inside setup() or functional components.")}function xa(n,t){return Ii(n,null,t)}const ws={};function We(n,t,s){return ge(t)||W("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ii(n,t,s)}function Ii(n,t,{immediate:s,deep:o,flush:i,onTrack:l,onTrigger:r}=Oe){t||(s!==void 0&&W('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&W('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=O=>{W("Invalid watch source: ",O,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=Jr()===(Ue==null?void 0:Ue.scope)?Ue:null;let p,d=!1,m=!1;if(Me(n)?(p=()=>n.value,d=Ns(n)):jt(n)?(p=()=>n,o=!0):pe(n)?(m=!0,d=n.some(O=>jt(O)||Ns(O)),p=()=>n.map(O=>{if(Me(O))return O.value;if(jt(O))return Ft(O);if(ge(O))return lt(O,u,2);c(O)})):ge(n)?t?p=()=>lt(n,u,2):p=()=>{if(!(u&&u.isUnmounted))return f&&f(),Mn(n,u,3,[h])}:(p=fn,c(n)),t&&o){const O=p;p=()=>Ft(O())}let f,h=O=>{f=I.onStop=()=>{lt(O,u,4)}},_;if(es)if(h=fn,t?s&&Mn(t,u,3,[p(),m?[]:void 0,h]):p(),i==="sync"){const O=jm();_=O.__watcherHandles||(O.__watcherHandles=[])}else return fn;let y=m?new Array(n.length).fill(ws):ws;const w=()=>{if(I.active)if(t){const O=I.run();(o||d||(m?O.some((G,Q)=>Ga(G,y[Q])):Ga(O,y)))&&(f&&f(),Mn(t,u,3,[O,y===ws?void 0:m&&y[0]===ws?[]:y,h]),y=O)}else I.run()};w.allowRecurse=!!t;let A;i==="sync"?A=w:i==="post"?A=()=>Xe(w,u&&u.suspense):(w.pre=!0,u&&(w.id=u.uid),A=()=>ao(w));const I=new vi(p,A);I.onTrack=l,I.onTrigger=r,t?s?w():y=I.run():i==="post"?Xe(I.run.bind(I),u&&u.suspense):I.run();const P=()=>{I.stop(),u&&u.scope&&mi(u.scope.effects,I)};return _&&_.push(P),P}function Nd(n,t,s){const o=this.proxy,i=qe(n)?n.includes(".")?Lc(o,n):()=>o[n]:n.bind(o,o);let l;ge(t)?l=t:(l=t.handler,s=t);const r=Ue;ba(this);const c=Ii(i,l.bind(o),s);return r?ba(r):Kt(),c}function Lc(n,t){const s=t.split(".");return()=>{let o=n;for(let i=0;i<s.length&&o;i++)o=o[s[i]];return o}}function Ft(n,t){if(!Se(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),Me(n))Ft(n.value,t);else if(pe(n))for(let s=0;s<n.length;s++)Ft(n[s],t);else if(Kr(n)||Wt(n))n.forEach(s=>{Ft(s,t)});else if(Gr(n))for(const s in n)Ft(n[s],t);return n}function Ic(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ds(()=>{n.isMounted=!0}),Ci(()=>{n.isUnmounting=!0}),n}const wn=[Function,Array],Fd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wn,onEnter:wn,onAfterEnter:wn,onEnterCancelled:wn,onBeforeLeave:wn,onLeave:wn,onAfterLeave:wn,onLeaveCancelled:wn,onBeforeAppear:wn,onAppear:wn,onAfterAppear:wn,onAppearCancelled:wn},setup(n,{slots:t}){const s=Zn(),o=Ic();let i;return()=>{const l=t.default&&Ei(t.default(),!0);if(!l||!l.length)return;let r=l[0];if(l.length>1){let y=!1;for(const w of l)if(w.type!==Je){if(y){W("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}r=w,y=!0}}const c=he(n),{mode:u}=c;if(u&&u!=="in-out"&&u!=="out-in"&&u!=="default"&&W(`invalid <transition> mode: ${u}`),o.isLeaving)return ho(r);const p=gl(r);if(!p)return ho(r);const d=Za(p,c,o,s);va(p,d);const m=s.subTree,f=m&&gl(m);let h=!1;const{getTransitionKey:_}=p.type;if(_){const y=_();i===void 0?i=y:y!==i&&(i=y,h=!0)}if(f&&f.type!==Je&&(!yt(p,f)||h)){const y=Za(f,c,o,s);if(va(f,y),u==="out-in")return o.isLeaving=!0,y.afterLeave=()=>{o.isLeaving=!1,s.update.active!==!1&&s.update()},ho(r);u==="in-out"&&p.type!==Je&&(y.delayLeave=(w,A,I)=>{const P=Ec(o,f);P[String(f.key)]=f,w._leaveCb=()=>{A(),w._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=I})}return r}}},qd=Fd;function Ec(n,t){const{leavingVNodes:s}=n;let o=s.get(t.type);return o||(o=Object.create(null),s.set(t.type,o)),o}function Za(n,t,s,o){const{appear:i,mode:l,persisted:r=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:m,onLeave:f,onAfterLeave:h,onLeaveCancelled:_,onBeforeAppear:y,onAppear:w,onAfterAppear:A,onAppearCancelled:I}=t,P=String(n.key),O=Ec(s,n),G=(U,se)=>{U&&Mn(U,o,9,se)},Q=(U,se)=>{const re=se[1];G(U,se),pe(U)?U.every(fe=>fe.length<=1)&&re():U.length<=1&&re()},K={mode:l,persisted:r,beforeEnter(U){let se=c;if(!s.isMounted)if(i)se=y||c;else return;U._leaveCb&&U._leaveCb(!0);const re=O[P];re&&yt(n,re)&&re.el._leaveCb&&re.el._leaveCb(),G(se,[U])},enter(U){let se=u,re=p,fe=d;if(!s.isMounted)if(i)se=w||u,re=A||p,fe=I||d;else return;let X=!1;const ze=U._enterCb=Re=>{X||(X=!0,Re?G(fe,[U]):G(re,[U]),K.delayedLeave&&K.delayedLeave(),U._enterCb=void 0)};se?Q(se,[U,ze]):ze()},leave(U,se){const re=String(n.key);if(U._enterCb&&U._enterCb(!0),s.isUnmounting)return se();G(m,[U]);let fe=!1;const X=U._leaveCb=ze=>{fe||(fe=!0,se(),ze?G(_,[U]):G(h,[U]),U._leaveCb=void 0,O[re]===n&&delete O[re])};O[re]=n,f?Q(f,[U,X]):X()},clone(U){return Za(U,t,s,o)}};return K}function ho(n){if(ps(n))return n=Rn(n),n.children=null,n}function gl(n){return ps(n)?n.children?n.children[0]:void 0:n}function va(n,t){n.shapeFlag&6&&n.component?va(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Ei(n,t=!1,s){let o=[],i=0;for(let l=0;l<n.length;l++){let r=n[l];const c=s==null?r.key:String(s)+String(r.key!=null?r.key:l);r.type===Ee?(r.patchFlag&128&&i++,o=o.concat(Ei(r.children,t,c))):(t||r.type!==Je)&&o.push(c!=null?Rn(r,{key:c}):r)}if(i>1)for(let l=0;l<o.length;l++)o[l].patchFlag=-2;return o}function De(n){return ge(n)?{setup:n,name:n.name}:n}const ha=n=>!!n.type.__asyncLoader,ps=n=>n.type.__isKeepAlive,Wd={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:t}){const s=Zn(),o=s.ctx;if(!o.renderer)return()=>{const I=t.default&&t.default();return I&&I.length===1?I[0]:I};const i=new Map,l=new Set;let r=null;s.__v_cache=i;const c=s.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:m}}}=o,f=m("div");o.activate=(I,P,O,G,Q)=>{const K=I.component;p(I,P,O,0,c),u(K.vnode,I,P,O,K,c,G,I.slotScopeIds,Q),Xe(()=>{K.isDeactivated=!1,K.a&&vt(K.a);const U=I.props&&I.props.onVnodeMounted;U&&zn(U,K.parent,I)},c),No(K)},o.deactivate=I=>{const P=I.component;p(I,f,null,1,c),Xe(()=>{P.da&&vt(P.da);const O=I.props&&I.props.onVnodeUnmounted;O&&zn(O,P.parent,I),P.isDeactivated=!0},c),No(P)};function h(I){_o(I),d(I,s,c,!0)}function _(I){i.forEach((P,O)=>{const G=ns(P.type);G&&(!I||!I(G))&&y(O)})}function y(I){const P=i.get(I);!r||!yt(P,r)?h(P):r&&_o(r),i.delete(I),l.delete(I)}We(()=>[n.include,n.exclude],([I,P])=>{I&&_(O=>Na(I,O)),P&&_(O=>!Na(P,O))},{flush:"post",deep:!0});let w=null;const A=()=>{w!=null&&i.set(w,ko(s.subTree))};return ds(A),Si(A),Ci(()=>{i.forEach(I=>{const{subTree:P,suspense:O}=s,G=ko(P);if(I.type===G.type&&I.key===G.key){_o(G);const Q=G.component.da;Q&&Xe(Q,O);return}h(I)})}),()=>{if(w=null,!t.default)return null;const I=t.default(),P=I[0];if(I.length>1)return W("KeepAlive should contain exactly one component child."),r=null,I;if(!Zt(P)||!(P.shapeFlag&4)&&!(P.shapeFlag&128))return r=null,P;let O=ko(P);const G=O.type,Q=ns(ha(O)?O.type.__asyncResolved||{}:G),{include:K,exclude:U,max:se}=n;if(K&&(!Q||!Na(K,Q))||U&&Q&&Na(U,Q))return r=O,P;const re=O.key==null?G:O.key,fe=i.get(re);return O.el&&(O=Rn(O),P.shapeFlag&128&&(P.ssContent=O)),w=re,fe?(O.el=fe.el,O.component=fe.component,O.transition&&va(O,O.transition),O.shapeFlag|=512,l.delete(re),l.add(re)):(l.add(re),se&&l.size>parseInt(se,10)&&y(l.values().next().value)),O.shapeFlag|=256,r=O,Mc(P.type)?P:O}}},Sc=Wd;function Na(n,t){return pe(n)?n.some(s=>Na(s,t)):qe(n)?n.split(",").includes(t):bp(n)?n.test(t):!1}function Dd(n,t){Cc(n,"a",t)}function jd(n,t){Cc(n,"da",t)}function Cc(n,t,s=Ue){const o=n.__wdc||(n.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(io(t,o,s),s){let i=s.parent;for(;i&&i.parent;)ps(i.parent.vnode)&&Ud(o,t,s,i),i=i.parent}}function Ud(n,t,s,o){const i=io(t,n,o,!0);lo(()=>{mi(o[t],i)},s)}function _o(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function ko(n){return n.shapeFlag&128?n.ssContent:n}function io(n,t,s=Ue,o=!1){if(s){const i=s[n]||(s[n]=[]),l=t.__weh||(t.__weh=(...r)=>{if(s.isUnmounted)return;ea(),ba(s);const c=Mn(t,s,n,r);return Kt(),na(),c});return o?i.unshift(l):i.push(l),l}else{const i=Ht(Ti[n].replace(/ hook$/,""));W(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const ut=n=>(t,s=Ue)=>(!es||n==="sp")&&io(n,(...o)=>t(...o),s),Bd=ut("bm"),ds=ut("m"),Kd=ut("bu"),Si=ut("u"),Ci=ut("bum"),lo=ut("um"),Vd=ut("sp"),Gd=ut("rtg"),Qd=ut("rtc");function Yd(n,t=Ue){io("ec",n,t)}function Ac(n){yp(n)&&W("Do not use built-in directive ids as custom directive id: "+n)}function Ai(n,t){const s=Qe;if(s===null)return W("withDirectives can only be used inside render functions."),n;const o=uo(s)||s.proxy,i=n.dirs||(n.dirs=[]);for(let l=0;l<t.length;l++){let[r,c,u,p=Oe]=t[l];r&&(ge(r)&&(r={mounted:r,updated:r}),r.deep&&Ft(c),i.push({dir:r,instance:o,value:c,oldValue:void 0,arg:u,modifiers:p}))}return n}function Ct(n,t,s,o){const i=n.dirs,l=t&&t.dirs;for(let r=0;r<i.length;r++){const c=i[r];l&&(c.oldValue=l[r].value);let u=c.dir[o];u&&(ea(),Mn(u,s,8,[n.el,c,n,t]),na())}}const qo="components";function ro(n,t){return Zd(qo,n,!0,t)||n}const Jd=Symbol();function Zd(n,t,s=!0,o=!1){const i=Qe||Ue;if(i){const l=i.type;if(n===qo){const c=ns(l,!1);if(c&&(c===t||c===Gn(t)||c===Yt(Gn(t))))return l}const r=hl(i[n]||l[n],t)||hl(i.appContext[n],t);if(!r&&o)return l;if(s&&!r){const c=n===qo?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";W(`Failed to resolve ${n.slice(0,-1)}: ${t}${c}`)}return r}else W(`resolve${Yt(n.slice(0,-1))} can only be used in render() or setup().`)}function hl(n,t){return n&&(n[t]||n[Gn(t)]||n[Yt(Gn(t))])}function ms(n,t,s,o){let i;const l=s&&s[o];if(pe(n)||qe(n)){i=new Array(n.length);for(let r=0,c=n.length;r<c;r++)i[r]=t(n[r],r,void 0,l&&l[r])}else if(typeof n=="number"){Number.isInteger(n)||W(`The v-for range expect an integer value but got ${n}.`),i=new Array(n);for(let r=0;r<n;r++)i[r]=t(r+1,r,void 0,l&&l[r])}else if(Se(n))if(n[Symbol.iterator])i=Array.from(n,(r,c)=>t(r,c,void 0,l&&l[c]));else{const r=Object.keys(n);i=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const p=r[c];i[c]=t(n[p],p,c,l&&l[c])}}else i=[];return s&&(s[o]=i),i}function Yn(n,t,s={},o,i){if(Qe.isCE||Qe.parent&&ha(Qe.parent)&&Qe.parent.isCE)return t!=="default"&&(s.name=t),E("slot",s,o&&o());let l=n[t];l&&l.length>1&&(W("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),k();const r=l&&Pc(l(s)),c=T(Ee,{key:s.key||r&&r.key||`_${t}`},r||(o?o():[]),r&&n._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function Pc(n){return n.some(t=>Zt(t)?!(t.type===Je||t.type===Ee&&!Pc(t.children)):!0)?n:null}const Wo=n=>n?Gc(n)?uo(n)||n.proxy:Wo(n.parent):null,Bt=je(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>da(n.props),$attrs:n=>da(n.attrs),$slots:n=>da(n.slots),$refs:n=>da(n.refs),$parent:n=>Wo(n.parent),$root:n=>Wo(n.root),$emit:n=>n.emit,$options:n=>Hi(n),$forceUpdate:n=>n.f||(n.f=()=>ao(n.update)),$nextTick:n=>n.n||(n.n=On.bind(n.proxy)),$watch:n=>Nd.bind(n)}),Pi=n=>n==="_"||n==="$",vo=(n,t)=>n!==Oe&&!n.__isScriptSetup&&we(n,t),Hc={get({_:n},t){const{ctx:s,setupState:o,data:i,props:l,accessCache:r,type:c,appContext:u}=n;if(t==="__isVue")return!0;let p;if(t[0]!=="$"){const h=r[t];if(h!==void 0)switch(h){case 1:return o[t];case 2:return i[t];case 4:return s[t];case 3:return l[t]}else{if(vo(o,t))return r[t]=1,o[t];if(i!==Oe&&we(i,t))return r[t]=2,i[t];if((p=n.propsOptions[0])&&we(p,t))return r[t]=3,l[t];if(s!==Oe&&we(s,t))return r[t]=4,s[t];Do&&(r[t]=0)}}const d=Bt[t];let m,f;if(d)return t==="$attrs"&&(gn(n,"get",t),Ws()),d(n);if((m=c.__cssModules)&&(m=m[t]))return m;if(s!==Oe&&we(s,t))return r[t]=4,s[t];if(f=u.config.globalProperties,we(f,t))return f[t];Qe&&(!qe(t)||t.indexOf("__v")!==0)&&(i!==Oe&&Pi(t[0])&&we(i,t)?W(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===Qe&&W(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:n},t,s){const{data:o,setupState:i,ctx:l}=n;return vo(i,t)?(i[t]=s,!0):i.__isScriptSetup&&we(i,t)?(W(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Oe&&we(o,t)?(o[t]=s,!0):we(n.props,t)?(W(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in n?(W(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in n.appContext.config.globalProperties?Object.defineProperty(l,t,{enumerable:!0,configurable:!0,value:s}):l[t]=s,!0)},has({_:{data:n,setupState:t,accessCache:s,ctx:o,appContext:i,propsOptions:l}},r){let c;return!!s[r]||n!==Oe&&we(n,r)||vo(t,r)||(c=l[0])&&we(c,r)||we(o,r)||we(Bt,r)||we(i.config.globalProperties,r)},defineProperty(n,t,s){return s.get!=null?n._.accessCache[t]=0:we(s,"value")&&this.set(n,t,s.value,null),Reflect.defineProperty(n,t,s)}};Hc.ownKeys=n=>(W("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function Xd(n){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(Bt).forEach(s=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,get:()=>Bt[s](n),set:fn})}),t}function em(n){const{ctx:t,propsOptions:[s]}=n;s&&Object.keys(s).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n.props[o],set:fn})})}function nm(n){const{ctx:t,setupState:s}=n;Object.keys(he(s)).forEach(o=>{if(!s.__isScriptSetup){if(Pi(o[0])){W(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:fn})}})}function tm(){const n=Object.create(null);return(t,s)=>{n[s]?W(`${t} property "${s}" is already defined in ${n[s]}.`):n[s]=t}}let Do=!0;function am(n){const t=Hi(n),s=n.proxy,o=n.ctx;Do=!1,t.beforeCreate&&_l(t.beforeCreate,n,"bc");const{data:i,computed:l,methods:r,watch:c,provide:u,inject:p,created:d,beforeMount:m,mounted:f,beforeUpdate:h,updated:_,activated:y,deactivated:w,beforeDestroy:A,beforeUnmount:I,destroyed:P,unmounted:O,render:G,renderTracked:Q,renderTriggered:K,errorCaptured:U,serverPrefetch:se,expose:re,inheritAttrs:fe,components:X,directives:ze,filters:Re}=t,Le=tm();{const[ee]=n.propsOptions;if(ee)for(const de in ee)Le("Props",de)}if(p&&sm(p,o,Le,n.appContext.config.unwrapInjectedRef),r)for(const ee in r){const de=r[ee];ge(de)?(Object.defineProperty(o,ee,{value:de.bind(s),configurable:!0,enumerable:!0,writable:!0}),Le("Methods",ee)):W(`Method "${ee}" has type "${typeof de}" in the component definition. Did you reference the function correctly?`)}if(i){ge(i)||W("The data option must be a function. Plain object usage is no longer supported.");const ee=i.call(s,s);if(gi(ee)&&W("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Se(ee))W("data() should return an object.");else{n.data=nn(ee);for(const de in ee)Le("Data",de),Pi(de[0])||Object.defineProperty(o,de,{configurable:!0,enumerable:!0,get:()=>ee[de],set:fn})}}if(Do=!0,l)for(const ee in l){const de=l[ee],ve=ge(de)?de.bind(s,s):ge(de.get)?de.get.bind(s,s):fn;ve===fn&&W(`Computed property "${ee}" has no getter.`);const Pe=!ge(de)&&ge(de.set)?de.set.bind(s):()=>{W(`Write operation failed: computed property "${ee}" is readonly.`)},hn=N({get:ve,set:Pe});Object.defineProperty(o,ee,{enumerable:!0,configurable:!0,get:()=>hn.value,set:tn=>hn.value=tn}),Le("Computed",ee)}if(c)for(const ee in c)Oc(c[ee],o,s,ee);if(u){const ee=ge(u)?u.call(s):u;Reflect.ownKeys(ee).forEach(de=>{vn(de,ee[de])})}d&&_l(d,n,"c");function Ne(ee,de){pe(de)?de.forEach(ve=>ee(ve.bind(s))):de&&ee(de.bind(s))}if(Ne(Bd,m),Ne(ds,f),Ne(Kd,h),Ne(Si,_),Ne(Dd,y),Ne(jd,w),Ne(Yd,U),Ne(Qd,Q),Ne(Gd,K),Ne(Ci,I),Ne(lo,O),Ne(Vd,se),pe(re))if(re.length){const ee=n.exposed||(n.exposed={});re.forEach(de=>{Object.defineProperty(ee,de,{get:()=>s[de],set:ve=>s[de]=ve})})}else n.exposed||(n.exposed={});G&&n.render===fn&&(n.render=G),fe!=null&&(n.inheritAttrs=fe),X&&(n.components=X),ze&&(n.directives=ze)}function sm(n,t,s=fn,o=!1){pe(n)&&(n=jo(n));for(const i in n){const l=n[i];let r;Se(l)?"default"in l?r=z(l.from||i,l.default,!0):r=z(l.from||i):r=z(l),Me(r)?o?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:c=>r.value=c}):(W(`injected property "${i}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[i]=r):t[i]=r,s("Inject",i)}}function _l(n,t,s){Mn(pe(n)?n.map(o=>o.bind(t.proxy)):n.bind(t.proxy),t,s)}function Oc(n,t,s,o){const i=o.includes(".")?Lc(s,o):()=>s[o];if(qe(n)){const l=t[n];ge(l)?We(i,l):W(`Invalid watch handler specified by key "${n}"`,l)}else if(ge(n))We(i,n.bind(s));else if(Se(n))if(pe(n))n.forEach(l=>Oc(l,t,s,o));else{const l=ge(n.handler)?n.handler.bind(s):t[n.handler];ge(l)?We(i,l,n):W(`Invalid watch handler specified by key "${n.handler}"`,l)}else W(`Invalid watch option: "${o}"`,n)}function Hi(n){const t=n.type,{mixins:s,extends:o}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=n.appContext,c=l.get(t);let u;return c?u=c:!i.length&&!s&&!o?u=t:(u={},i.length&&i.forEach(p=>Ds(u,p,r,!0)),Ds(u,t,r)),Se(t)&&l.set(t,u),u}function Ds(n,t,s,o=!1){const{mixins:i,extends:l}=t;l&&Ds(n,l,s,!0),i&&i.forEach(r=>Ds(n,r,s,!0));for(const r in t)if(o&&r==="expose")W('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=om[r]||s&&s[r];n[r]=c?c(n[r],t[r]):t[r]}return n}const om={data:kl,props:Ot,emits:Ot,methods:Ot,computed:Ot,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:Ot,directives:Ot,watch:lm,provide:kl,inject:im};function kl(n,t){return t?n?function(){return je(ge(n)?n.call(this,this):n,ge(t)?t.call(this,this):t)}:t:n}function im(n,t){return Ot(jo(n),jo(t))}function jo(n){if(pe(n)){const t={};for(let s=0;s<n.length;s++)t[n[s]]=n[s];return t}return n}function ln(n,t){return n?[...new Set([].concat(n,t))]:t}function Ot(n,t){return n?je(je(Object.create(null),n),t):t}function lm(n,t){if(!n)return t;if(!t)return n;const s=je(Object.create(null),n);for(const o in t)s[o]=ln(n[o],t[o]);return s}function rm(n,t,s,o=!1){const i={},l={};Hs(l,co,1),n.propsDefaults=Object.create(null),Rc(n,t,i,l);for(const r in n.propsOptions[0])r in i||(i[r]=void 0);Fc(t||{},i,n),s?n.props=o?i:nd(i):n.type.props?n.props=i:n.props=l,n.attrs=l}function cm(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function um(n,t,s,o){const{props:i,attrs:l,vnode:{patchFlag:r}}=n,c=he(i),[u]=n.propsOptions;let p=!1;if(!cm(n)&&(o||r>0)&&!(r&16)){if(r&8){const d=n.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];if(so(n.emitsOptions,f))continue;const h=t[f];if(u)if(we(l,f))h!==l[f]&&(l[f]=h,p=!0);else{const _=Gn(f);i[_]=Uo(u,c,_,h,n,!1)}else h!==l[f]&&(l[f]=h,p=!0)}}}else{Rc(n,t,i,l)&&(p=!0);let d;for(const m in c)(!t||!we(t,m)&&((d=rt(m))===m||!we(t,d)))&&(u?s&&(s[m]!==void 0||s[d]!==void 0)&&(i[m]=Uo(u,c,m,void 0,n,!0)):delete i[m]);if(l!==c)for(const m in l)(!t||!we(t,m))&&(delete l[m],p=!0)}p&&ct(n,"set","$attrs"),Fc(t||{},i,n)}function Rc(n,t,s,o){const[i,l]=n.propsOptions;let r=!1,c;if(t)for(let u in t){if($s(u))continue;const p=t[u];let d;i&&we(i,d=Gn(u))?!l||!l.includes(d)?s[d]=p:(c||(c={}))[d]=p:so(n.emitsOptions,u)||(!(u in o)||p!==o[u])&&(o[u]=p,r=!0)}if(l){const u=he(s),p=c||Oe;for(let d=0;d<l.length;d++){const m=l[d];s[m]=Uo(i,u,m,p[m],n,!we(p,m))}}return r}function Uo(n,t,s,o,i,l){const r=n[s];if(r!=null){const c=we(r,"default");if(c&&o===void 0){const u=r.default;if(r.type!==Function&&ge(u)){const{propsDefaults:p}=i;s in p?o=p[s]:(ba(i),o=p[s]=u.call(null,t),Kt())}else o=u}r[0]&&(l&&!c?o=!1:r[1]&&(o===""||o===rt(s))&&(o=!0))}return o}function Nc(n,t,s=!1){const o=t.propsCache,i=o.get(n);if(i)return i;const l=n.props,r={},c=[];let u=!1;if(!ge(n)){const d=m=>{u=!0;const[f,h]=Nc(m,t,!0);je(r,f),h&&c.push(...h)};!s&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!l&&!u)return Se(n)&&o.set(n,fa),fa;if(pe(l))for(let d=0;d<l.length;d++){qe(l[d])||W("props must be strings when using array syntax.",l[d]);const m=Gn(l[d]);vl(m)&&(r[m]=Oe)}else if(l){Se(l)||W("invalid props options",l);for(const d in l){const m=Gn(d);if(vl(m)){const f=l[d],h=r[m]=pe(f)||ge(f)?{type:f}:Object.assign({},f);if(h){const _=yl(Boolean,h.type),y=yl(String,h.type);h[0]=_>-1,h[1]=y<0||_<y,(_>-1||we(h,"default"))&&c.push(m)}}}}const p=[r,c];return Se(n)&&o.set(n,p),p}function vl(n){return n[0]!=="$"?!0:(W(`Invalid prop name: "${n}" is a reserved property.`),!1)}function Bo(n){const t=n&&n.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:n===null?"null":""}function bl(n,t){return Bo(n)===Bo(t)}function yl(n,t){return pe(t)?t.findIndex(s=>bl(s,n)):ge(t)&&bl(t,n)?0:-1}function Fc(n,t,s){const o=he(t),i=s.propsOptions[0];for(const l in i){let r=i[l];r!=null&&pm(l,o[l],r,!we(n,l)&&!we(n,rt(l)))}}function pm(n,t,s,o){const{type:i,required:l,validator:r}=s;if(l&&o){W('Missing required prop: "'+n+'"');return}if(!(t==null&&!s.required)){if(i!=null&&i!==!0){let c=!1;const u=pe(i)?i:[i],p=[];for(let d=0;d<u.length&&!c;d++){const{valid:m,expectedType:f}=mm(t,u[d]);p.push(f||""),c=m}if(!c){W(fm(n,t,p));return}}r&&!r(t)&&W('Invalid prop: custom validator check failed for prop "'+n+'".')}}const dm=St("String,Number,Boolean,Function,Symbol,BigInt");function mm(n,t){let s;const o=Bo(t);if(dm(o)){const i=typeof n;s=i===o.toLowerCase(),!s&&i==="object"&&(s=n instanceof t)}else o==="Object"?s=Se(n):o==="Array"?s=pe(n):o==="null"?s=n===null:s=n instanceof t;return{valid:s,expectedType:o}}function fm(n,t,s){let o=`Invalid prop: type check failed for prop "${n}". Expected ${s.map(Yt).join(" | ")}`;const i=s[0],l=hi(t),r=wl(t,i),c=wl(t,l);return s.length===1&&zl(i)&&!gm(i,l)&&(o+=` with value ${r}`),o+=`, got ${l} `,zl(l)&&(o+=`with value ${c}.`),o}function wl(n,t){return t==="String"?`"${n}"`:t==="Number"?`${Number(n)}`:`${n}`}function zl(n){return["string","number","boolean"].some(s=>n.toLowerCase()===s)}function gm(...n){return n.some(t=>t.toLowerCase()==="boolean")}const qc=n=>n[0]==="_"||n==="$stable",Oi=n=>pe(n)?n.map(An):[An(n)],hm=(n,t,s)=>{if(t._n)return t;const o=v((...i)=>(Ue&&W(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Oi(t(...i))),s);return o._c=!1,o},Wc=(n,t,s)=>{const o=n._ctx;for(const i in n){if(qc(i))continue;const l=n[i];if(ge(l))t[i]=hm(i,l,o);else if(l!=null){W(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);const r=Oi(l);t[i]=()=>r}}},Dc=(n,t)=>{ps(n.vnode)||W("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Oi(t);n.slots.default=()=>s},_m=(n,t)=>{if(n.vnode.shapeFlag&32){const s=t._;s?(n.slots=he(t),Hs(t,"_",s)):Wc(t,n.slots={})}else n.slots={},t&&Dc(n,t);Hs(n.slots,co,1)},km=(n,t,s)=>{const{vnode:o,slots:i}=n;let l=!0,r=Oe;if(o.shapeFlag&32){const c=t._;c?zt?je(i,t):s&&c===1?l=!1:(je(i,t),!s&&c===1&&delete i._):(l=!t.$stable,Wc(t,i)),r=t}else t&&(Dc(n,t),r={default:1});if(l)for(const c in i)!qc(c)&&!(c in r)&&delete i[c]};function jc(){return{app:null,config:{isNativeTag:Br,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vm=0;function bm(n,t){return function(o,i=null){ge(o)||(o=Object.assign({},o)),i!=null&&!Se(i)&&(W("root props passed to app.mount() must be an object."),i=null);const l=jc(),r=new Set;let c=!1;const u=l.app={_uid:vm++,_component:o,_props:i,_container:null,_context:l,_instance:null,version:Ml,get config(){return l.config},set config(p){W("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return r.has(p)?W("Plugin has already been applied to target app."):p&&ge(p.install)?(r.add(p),p.install(u,...d)):ge(p)?(r.add(p),p(u,...d)):W('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return l.mixins.includes(p)?W("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):l.mixins.push(p),u},component(p,d){return Go(p,l.config),d?(l.components[p]&&W(`Component "${p}" has already been registered in target app.`),l.components[p]=d,u):l.components[p]},directive(p,d){return Ac(p),d?(l.directives[p]&&W(`Directive "${p}" has already been registered in target app.`),l.directives[p]=d,u):l.directives[p]},mount(p,d,m){if(c)W("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&W("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=E(o,i);return f.appContext=l,l.reload=()=>{n(Rn(f),p,m)},d&&t?t(f,p):n(f,p,m),c=!0,u._container=p,p.__vue_app__=u,u._instance=f.component,xd(u,Ml),uo(f.component)||f.component.proxy}},unmount(){c?(n(null,u._container),u._instance=null,Td(u),delete u._container.__vue_app__):W("Cannot unmount an app that is not mounted.")},provide(p,d){return p in l.provides&&W(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),l.provides[p]=d,u}};return u}}function Ko(n,t,s,o,i=!1){if(pe(n)){n.forEach((f,h)=>Ko(f,t&&(pe(t)?t[h]:t),s,o,i));return}if(ha(o)&&!i)return;const l=o.shapeFlag&4?uo(o.component)||o.component.proxy:o.el,r=i?null:l,{i:c,r:u}=n;if(!c){W("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=t&&t.r,d=c.refs===Oe?c.refs={}:c.refs,m=c.setupState;if(p!=null&&p!==u&&(qe(p)?(d[p]=null,we(m,p)&&(m[p]=null)):Me(p)&&(p.value=null)),ge(u))lt(u,c,12,[r,d]);else{const f=qe(u),h=Me(u);if(f||h){const _=()=>{if(n.f){const y=f?we(m,u)?m[u]:d[u]:u.value;i?pe(y)&&mi(y,l):pe(y)?y.includes(l)||y.push(l):f?(d[u]=[l],we(m,u)&&(m[u]=d[u])):(u.value=[l],n.k&&(d[n.k]=u.value))}else f?(d[u]=r,we(m,u)&&(m[u]=r)):h?(u.value=r,n.k&&(d[n.k]=r)):W("Invalid template ref type:",u,`(${typeof u})`)};r?(_.id=-1,Xe(_,s)):_()}else W("Invalid template ref type:",u,`(${typeof u})`)}}let Ma,bt;function et(n,t){n.appContext.config.performance&&js()&&bt.mark(`vue-${t}-${n.uid}`),Ld(n,t,js()?bt.now():Date.now())}function nt(n,t){if(n.appContext.config.performance&&js()){const s=`vue-${t}-${n.uid}`,o=s+":end";bt.mark(o),bt.measure(`<${po(n,n.type)}> ${t}`,s,o),bt.clearMarks(s),bt.clearMarks(o)}Id(n,t,js()?bt.now():Date.now())}function js(){return Ma!==void 0||(typeof window<"u"&&window.performance?(Ma=!0,bt=window.performance):Ma=!1),Ma}function ym(){const n=[];if(n.length){const t=n.length>1;console.warn(`Feature flag${t?"s":""} ${n.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Xe=Rd;function wm(n){return zm(n)}function zm(n,t){ym();const s=Qr();s.__VUE__=!0,wc(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:i,patchProp:l,createElement:r,createText:c,createComment:u,setText:p,setElementText:d,parentNode:m,nextSibling:f,setScopeId:h=fn,insertStaticContent:_}=n,y=(g,b,$,q=null,R=null,B=null,Z=!1,j=null,V=zt?!1:!!b.dynamicChildren)=>{if(g===b)return;g&&!yt(g,b)&&(q=ae(g),mn(g,R,B,!0),g=null),b.patchFlag===-2&&(V=!1,b.dynamicChildren=null);const{type:D,ref:le,shapeFlag:oe}=b;switch(D){case fs:w(g,b,$,q);break;case Je:A(g,b,$,q);break;case Is:g==null?I(b,$,q,Z):P(g,b,$,Z);break;case Ee:ze(g,b,$,q,R,B,Z,j,V);break;default:oe&1?Q(g,b,$,q,R,B,Z,j,V):oe&6?Re(g,b,$,q,R,B,Z,j,V):oe&64||oe&128?D.process(g,b,$,q,R,B,Z,j,V,Te):W("Invalid VNode type:",D,`(${typeof D})`)}le!=null&&R&&Ko(le,g&&g.ref,B,b||g,!b)},w=(g,b,$,q)=>{if(g==null)o(b.el=c(b.children),$,q);else{const R=b.el=g.el;b.children!==g.children&&p(R,b.children)}},A=(g,b,$,q)=>{g==null?o(b.el=u(b.children||""),$,q):b.el=g.el},I=(g,b,$,q)=>{[g.el,g.anchor]=_(g.children,b,$,q,g.el,g.anchor)},P=(g,b,$,q)=>{if(b.children!==g.children){const R=f(g.anchor);G(g),[b.el,b.anchor]=_(b.children,$,R,q)}else b.el=g.el,b.anchor=g.anchor},O=({el:g,anchor:b},$,q)=>{let R;for(;g&&g!==b;)R=f(g),o(g,$,q),g=R;o(b,$,q)},G=({el:g,anchor:b})=>{let $;for(;g&&g!==b;)$=f(g),i(g),g=$;i(b)},Q=(g,b,$,q,R,B,Z,j,V)=>{Z=Z||b.type==="svg",g==null?K(b,$,q,R,B,Z,j,V):re(g,b,R,B,Z,j,V)},K=(g,b,$,q,R,B,Z,j)=>{let V,D;const{type:le,props:oe,shapeFlag:ue,transition:ke,dirs:xe}=g;if(V=g.el=r(g.type,B,oe&&oe.is,oe),ue&8?d(V,g.children):ue&16&&se(g.children,V,null,q,R,B&&le!=="foreignObject",Z,j),xe&&Ct(g,null,q,"created"),U(V,g,g.scopeId,Z,q),oe){for(const He in oe)He!=="value"&&!$s(He)&&l(V,He,null,oe[He],B,g.children,q,R,J);"value"in oe&&l(V,"value",null,oe.value),(D=oe.onVnodeBeforeMount)&&zn(D,q,g)}Object.defineProperty(V,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(V,"__vueParentComponent",{value:q,enumerable:!1}),xe&&Ct(g,null,q,"beforeMount");const Fe=(!R||R&&!R.pendingBranch)&&ke&&!ke.persisted;Fe&&ke.beforeEnter(V),o(V,b,$),((D=oe&&oe.onVnodeMounted)||Fe||xe)&&Xe(()=>{D&&zn(D,q,g),Fe&&ke.enter(V),xe&&Ct(g,null,q,"mounted")},R)},U=(g,b,$,q,R)=>{if($&&h(g,$),q)for(let B=0;B<q.length;B++)h(g,q[B]);if(R){let B=R.subTree;if(B.patchFlag>0&&B.patchFlag&2048&&(B=$c(B.children)||B),b===B){const Z=R.vnode;U(g,Z,Z.scopeId,Z.slotScopeIds,R.parent)}}},se=(g,b,$,q,R,B,Z,j,V=0)=>{for(let D=V;D<g.length;D++){const le=g[D]=j?_t(g[D]):An(g[D]);y(null,le,b,$,q,R,B,Z,j)}},re=(g,b,$,q,R,B,Z)=>{const j=b.el=g.el;let{patchFlag:V,dynamicChildren:D,dirs:le}=b;V|=g.patchFlag&16;const oe=g.props||Oe,ue=b.props||Oe;let ke;$&&At($,!1),(ke=ue.onVnodeBeforeUpdate)&&zn(ke,$,b,g),le&&Ct(b,g,$,"beforeUpdate"),$&&At($,!0),zt&&(V=0,Z=!1,D=null);const xe=R&&b.type!=="foreignObject";if(D?(fe(g.dynamicChildren,D,j,$,q,xe,B),$&&$.type.__hmrId&&Da(g,b)):Z||ve(g,b,j,null,$,q,xe,B,!1),V>0){if(V&16)X(j,b,oe,ue,$,q,R);else if(V&2&&oe.class!==ue.class&&l(j,"class",null,ue.class,R),V&4&&l(j,"style",oe.style,ue.style,R),V&8){const Fe=b.dynamicProps;for(let He=0;He<Fe.length;He++){const Ke=Fe[He],En=oe[Ke],sa=ue[Ke];(sa!==En||Ke==="value")&&l(j,Ke,En,sa,R,g.children,$,q,J)}}V&1&&g.children!==b.children&&d(j,b.children)}else!Z&&D==null&&X(j,b,oe,ue,$,q,R);((ke=ue.onVnodeUpdated)||le)&&Xe(()=>{ke&&zn(ke,$,b,g),le&&Ct(b,g,$,"updated")},q)},fe=(g,b,$,q,R,B,Z)=>{for(let j=0;j<b.length;j++){const V=g[j],D=b[j],le=V.el&&(V.type===Ee||!yt(V,D)||V.shapeFlag&70)?m(V.el):$;y(V,D,le,null,q,R,B,Z,!0)}},X=(g,b,$,q,R,B,Z)=>{if($!==q){if($!==Oe)for(const j in $)!$s(j)&&!(j in q)&&l(g,j,$[j],null,Z,b.children,R,B,J);for(const j in q){if($s(j))continue;const V=q[j],D=$[j];V!==D&&j!=="value"&&l(g,j,D,V,Z,b.children,R,B,J)}"value"in q&&l(g,"value",$.value,q.value)}},ze=(g,b,$,q,R,B,Z,j,V)=>{const D=b.el=g?g.el:c(""),le=b.anchor=g?g.anchor:c("");let{patchFlag:oe,dynamicChildren:ue,slotScopeIds:ke}=b;(zt||oe&2048)&&(oe=0,V=!1,ue=null),ke&&(j=j?j.concat(ke):ke),g==null?(o(D,$,q),o(le,$,q),se(b.children,$,le,R,B,Z,j,V)):oe>0&&oe&64&&ue&&g.dynamicChildren?(fe(g.dynamicChildren,ue,$,R,B,Z,j),R&&R.type.__hmrId?Da(g,b):(b.key!=null||R&&b===R.subTree)&&Da(g,b,!0)):ve(g,b,$,le,R,B,Z,j,V)},Re=(g,b,$,q,R,B,Z,j,V)=>{b.slotScopeIds=j,g==null?b.shapeFlag&512?R.ctx.activate(b,$,q,Z,V):Le(b,$,q,R,B,Z,V):Ne(g,b,V)},Le=(g,b,$,q,R,B,Z)=>{const j=g.component=Am(g,q,R);if(j.type.__hmrId&&bd(j),Ms(g),et(j,"mount"),ps(g)&&(j.ctx.renderer=Te),et(j,"init"),Hm(j),nt(j,"init"),j.asyncDep){if(R&&R.registerDep(j,ee),!g.el){const V=j.subTree=E(Je);A(null,V,b,$)}return}ee(j,g,b,$,R,B,Z),Ls(),nt(j,"mount")},Ne=(g,b,$)=>{const q=b.component=g.component;if(Hd(g,b,$))if(q.asyncDep&&!q.asyncResolved){Ms(b),de(q,b,$),Ls();return}else q.next=b,kd(q.update),q.update();else b.el=g.el,q.vnode=b},ee=(g,b,$,q,R,B,Z)=>{const j=()=>{if(g.isMounted){let{next:le,bu:oe,u:ue,parent:ke,vnode:xe}=g,Fe=le,He;Ms(le||g.vnode),At(g,!1),le?(le.el=xe.el,de(g,le,Z)):le=xe,oe&&vt(oe),(He=le.props&&le.props.onVnodeBeforeUpdate)&&zn(He,ke,le,xe),At(g,!0),et(g,"render");const Ke=go(g);nt(g,"render");const En=g.subTree;g.subTree=Ke,et(g,"patch"),y(En,Ke,m(En.el),ae(En),g,R,B),nt(g,"patch"),le.el=Ke.el,Fe===null&&Od(g,Ke.el),ue&&Xe(ue,R),(He=le.props&&le.props.onVnodeUpdated)&&Xe(()=>zn(He,ke,le,xe),R),zc(g),Ls()}else{let le;const{el:oe,props:ue}=b,{bm:ke,m:xe,parent:Fe}=g,He=ha(b);if(At(g,!1),ke&&vt(ke),!He&&(le=ue&&ue.onVnodeBeforeMount)&&zn(le,Fe,b),At(g,!0),oe&&me){const Ke=()=>{et(g,"render"),g.subTree=go(g),nt(g,"render"),et(g,"hydrate"),me(oe,g.subTree,g,R,null),nt(g,"hydrate")};He?b.type.__asyncLoader().then(()=>!g.isUnmounted&&Ke()):Ke()}else{et(g,"render");const Ke=g.subTree=go(g);nt(g,"render"),et(g,"patch"),y(null,Ke,$,q,g,R,B),nt(g,"patch"),b.el=Ke.el}if(xe&&Xe(xe,R),!He&&(le=ue&&ue.onVnodeMounted)){const Ke=b;Xe(()=>zn(le,Fe,Ke),R)}(b.shapeFlag&256||Fe&&ha(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&g.a&&Xe(g.a,R),g.isMounted=!0,No(g),b=$=q=null}},V=g.effect=new vi(j,()=>ao(D),g.scope),D=g.update=()=>V.run();D.id=g.uid,At(g,!0),V.onTrack=g.rtc?le=>vt(g.rtc,le):void 0,V.onTrigger=g.rtg?le=>vt(g.rtg,le):void 0,D.ownerInstance=g,D()},de=(g,b,$)=>{b.component=g;const q=g.vnode.props;g.vnode=b,g.next=null,um(g,b.props,q,$),km(g,b.children,$),ea(),pl(),na()},ve=(g,b,$,q,R,B,Z,j,V=!1)=>{const D=g&&g.children,le=g?g.shapeFlag:0,oe=b.children,{patchFlag:ue,shapeFlag:ke}=b;if(ue>0){if(ue&128){hn(D,oe,$,q,R,B,Z,j,V);return}else if(ue&256){Pe(D,oe,$,q,R,B,Z,j,V);return}}ke&8?(le&16&&J(D,R,B),oe!==D&&d($,oe)):le&16?ke&16?hn(D,oe,$,q,R,B,Z,j,V):J(D,R,B,!0):(le&8&&d($,""),ke&16&&se(oe,$,q,R,B,Z,j,V))},Pe=(g,b,$,q,R,B,Z,j,V)=>{g=g||fa,b=b||fa;const D=g.length,le=b.length,oe=Math.min(D,le);let ue;for(ue=0;ue<oe;ue++){const ke=b[ue]=V?_t(b[ue]):An(b[ue]);y(g[ue],ke,$,null,R,B,Z,j,V)}D>le?J(g,R,B,!0,!1,oe):se(b,$,q,R,B,Z,j,V,oe)},hn=(g,b,$,q,R,B,Z,j,V)=>{let D=0;const le=b.length;let oe=g.length-1,ue=le-1;for(;D<=oe&&D<=ue;){const ke=g[D],xe=b[D]=V?_t(b[D]):An(b[D]);if(yt(ke,xe))y(ke,xe,$,null,R,B,Z,j,V);else break;D++}for(;D<=oe&&D<=ue;){const ke=g[oe],xe=b[ue]=V?_t(b[ue]):An(b[ue]);if(yt(ke,xe))y(ke,xe,$,null,R,B,Z,j,V);else break;oe--,ue--}if(D>oe){if(D<=ue){const ke=ue+1,xe=ke<le?b[ke].el:q;for(;D<=ue;)y(null,b[D]=V?_t(b[D]):An(b[D]),$,xe,R,B,Z,j,V),D++}}else if(D>ue)for(;D<=oe;)mn(g[D],R,B,!0),D++;else{const ke=D,xe=D,Fe=new Map;for(D=xe;D<=ue;D++){const on=b[D]=V?_t(b[D]):An(b[D]);on.key!=null&&(Fe.has(on.key)&&W("Duplicate keys found during update:",JSON.stringify(on.key),"Make sure keys are unique."),Fe.set(on.key,D))}let He,Ke=0;const En=ue-xe+1;let sa=!1,el=0;const $a=new Array(En);for(D=0;D<En;D++)$a[D]=0;for(D=ke;D<=oe;D++){const on=g[D];if(Ke>=En){mn(on,R,B,!0);continue}let Wn;if(on.key!=null)Wn=Fe.get(on.key);else for(He=xe;He<=ue;He++)if($a[He-xe]===0&&yt(on,b[He])){Wn=He;break}Wn===void 0?mn(on,R,B,!0):($a[Wn-xe]=D+1,Wn>=el?el=Wn:sa=!0,y(on,b[Wn],$,null,R,B,Z,j,V),Ke++)}const nl=sa?xm($a):fa;for(He=nl.length-1,D=En-1;D>=0;D--){const on=xe+D,Wn=b[on],tl=on+1<le?b[on+1].el:q;$a[D]===0?y(null,Wn,$,tl,R,B,Z,j,V):sa&&(He<0||D!==nl[He]?tn(Wn,$,tl,2):He--)}}},tn=(g,b,$,q,R=null)=>{const{el:B,type:Z,transition:j,children:V,shapeFlag:D}=g;if(D&6){tn(g.component.subTree,b,$,q);return}if(D&128){g.suspense.move(b,$,q);return}if(D&64){Z.move(g,b,$,Te);return}if(Z===Ee){o(B,b,$);for(let oe=0;oe<V.length;oe++)tn(V[oe],b,$,q);o(g.anchor,b,$);return}if(Z===Is){O(g,b,$);return}if(q!==2&&D&1&&j)if(q===0)j.beforeEnter(B),o(B,b,$),Xe(()=>j.enter(B),R);else{const{leave:oe,delayLeave:ue,afterLeave:ke}=j,xe=()=>o(B,b,$),Fe=()=>{oe(B,()=>{xe(),ke&&ke()})};ue?ue(B,xe,Fe):Fe()}else o(B,b,$)},mn=(g,b,$,q=!1,R=!1)=>{const{type:B,props:Z,ref:j,children:V,dynamicChildren:D,shapeFlag:le,patchFlag:oe,dirs:ue}=g;if(j!=null&&Ko(j,null,$,g,!0),le&256){b.ctx.deactivate(g);return}const ke=le&1&&ue,xe=!ha(g);let Fe;if(xe&&(Fe=Z&&Z.onVnodeBeforeUnmount)&&zn(Fe,b,g),le&6)ne(g.component,$,q);else{if(le&128){g.suspense.unmount($,q);return}ke&&Ct(g,null,b,"beforeUnmount"),le&64?g.type.remove(g,b,$,R,Te,q):D&&(B!==Ee||oe>0&&oe&64)?J(D,b,$,!1,!0):(B===Ee&&oe&384||!R&&le&16)&&J(V,b,$),q&&pt(g)}(xe&&(Fe=Z&&Z.onVnodeUnmounted)||ke)&&Xe(()=>{Fe&&zn(Fe,b,g),ke&&Ct(g,null,b,"unmounted")},$)},pt=g=>{const{type:b,el:$,anchor:q,transition:R}=g;if(b===Ee){g.patchFlag>0&&g.patchFlag&2048&&R&&!R.persisted?g.children.forEach(Z=>{Z.type===Je?i(Z.el):pt(Z)}):S($,q);return}if(b===Is){G(g);return}const B=()=>{i($),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(g.shapeFlag&1&&R&&!R.persisted){const{leave:Z,delayLeave:j}=R,V=()=>Z($,B);j?j(g.el,B,V):V()}else B()},S=(g,b)=>{let $;for(;g!==b;)$=f(g),i(g),g=$;i(b)},ne=(g,b,$)=>{g.type.__hmrId&&yd(g);const{bum:q,scope:R,update:B,subTree:Z,um:j}=g;q&&vt(q),R.stop(),B&&(B.active=!1,mn(Z,g,b,$)),j&&Xe(j,b),Xe(()=>{g.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve()),Md(g)},J=(g,b,$,q=!1,R=!1,B=0)=>{for(let Z=B;Z<g.length;Z++)mn(g[Z],b,$,q,R)},ae=g=>g.shapeFlag&6?ae(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),ye=(g,b,$)=>{g==null?b._vnode&&mn(b._vnode,null,null,!0):y(b._vnode||null,g,b,null,null,null,$),pl(),vc(),b._vnode=g},Te={p:y,um:mn,m:tn,r:pt,mt:Le,mc:se,pc:ve,pbc:fe,n:ae,o:n};let _e,me;return t&&([_e,me]=t(Te)),{render:ye,hydrate:_e,createApp:bm(ye,_e)}}function At({effect:n,update:t},s){n.allowRecurse=t.allowRecurse=s}function Da(n,t,s=!1){const o=n.children,i=t.children;if(pe(o)&&pe(i))for(let l=0;l<o.length;l++){const r=o[l];let c=i[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[l]=_t(i[l]),c.el=r.el),s||Da(r,c)),c.type===fs&&(c.el=r.el),c.type===Je&&!c.el&&(c.el=r.el)}}function xm(n){const t=n.slice(),s=[0];let o,i,l,r,c;const u=n.length;for(o=0;o<u;o++){const p=n[o];if(p!==0){if(i=s[s.length-1],n[i]<p){t[o]=i,s.push(o);continue}for(l=0,r=s.length-1;l<r;)c=l+r>>1,n[s[c]]<p?l=c+1:r=c;p<n[s[l]]&&(l>0&&(t[o]=s[l-1]),s[l]=o)}}for(l=s.length,r=s[l-1];l-- >0;)s[l]=r,r=t[r];return s}const Tm=n=>n.__isTeleport,_a=n=>n&&(n.disabled||n.disabled===""),xl=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Vo=(n,t)=>{const s=n&&n.to;if(qe(s))if(t){const o=t(s);return o||W(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return W("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!_a(n)&&W(`Invalid Teleport target: ${s}`),s},$m={__isTeleport:!0,process(n,t,s,o,i,l,r,c,u,p){const{mc:d,pc:m,pbc:f,o:{insert:h,querySelector:_,createText:y,createComment:w}}=p,A=_a(t.props);let{shapeFlag:I,children:P,dynamicChildren:O}=t;if(zt&&(u=!1,O=null),n==null){const G=t.el=w("teleport start"),Q=t.anchor=w("teleport end");h(G,s,o),h(Q,s,o);const K=t.target=Vo(t.props,_),U=t.targetAnchor=y("");K?(h(U,K),r=r||xl(K)):A||W("Invalid Teleport target on mount:",K,`(${typeof K})`);const se=(re,fe)=>{I&16&&d(P,re,fe,i,l,r,c,u)};A?se(s,Q):K&&se(K,U)}else{t.el=n.el;const G=t.anchor=n.anchor,Q=t.target=n.target,K=t.targetAnchor=n.targetAnchor,U=_a(n.props),se=U?s:Q,re=U?G:K;if(r=r||xl(Q),O?(f(n.dynamicChildren,O,se,i,l,r,c),Da(n,t,!0)):u||m(n,t,se,re,i,l,r,c,!1),A)U||zs(t,s,G,p,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const fe=t.target=Vo(t.props,_);fe?zs(t,fe,null,p,0):W("Invalid Teleport target on update:",Q,`(${typeof Q})`)}else U&&zs(t,Q,K,p,1)}Uc(t)},remove(n,t,s,o,{um:i,o:{remove:l}},r){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:m,props:f}=n;if(m&&l(d),(r||!_a(f))&&(l(p),c&16))for(let h=0;h<u.length;h++){const _=u[h];i(_,t,s,!0,!!_.dynamicChildren)}},move:zs,hydrate:Mm};function zs(n,t,s,{o:{insert:o},m:i},l=2){l===0&&o(n.targetAnchor,t,s);const{el:r,anchor:c,shapeFlag:u,children:p,props:d}=n,m=l===2;if(m&&o(r,t,s),(!m||_a(d))&&u&16)for(let f=0;f<p.length;f++)i(p[f],t,s,2);m&&o(c,t,s)}function Mm(n,t,s,o,i,l,{o:{nextSibling:r,parentNode:c,querySelector:u}},p){const d=t.target=Vo(t.props,u);if(d){const m=d._lpa||d.firstChild;if(t.shapeFlag&16)if(_a(t.props))t.anchor=p(r(n),t,c(n),s,o,i,l),t.targetAnchor=m;else{t.anchor=r(n);let f=m;for(;f;)if(f=r(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,d._lpa=t.targetAnchor&&r(t.targetAnchor);break}p(m,t,d,s,o,i,l)}Uc(t)}return t.anchor&&r(t.anchor)}const N4=$m;function Uc(n){const t=n.ctx;if(t&&t.ut){let s=n.children[0].el;for(;s!==n.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",t.uid),s=s.nextSibling;t.ut()}}const Ee=Symbol("Fragment"),fs=Symbol("Text"),Je=Symbol("Comment"),Is=Symbol("Static"),ja=[];let Hn=null;function k(n=!1){ja.push(Hn=n?null:[])}function Lm(){ja.pop(),Hn=ja[ja.length-1]||null}let Xa=1;function Tl(n){Xa+=n}function Bc(n){return n.dynamicChildren=Xa>0?Hn||fa:null,Lm(),Xa>0&&Hn&&Hn.push(n),n}function te(n,t,s,o,i,l){return Bc(e(n,t,s,o,i,l,!0))}function T(n,t,s,o,i){return Bc(E(n,t,s,o,i,!0))}function Zt(n){return n?n.__v_isVNode===!0:!1}function yt(n,t){return t.shapeFlag&6&&ca.has(t.type)?(n.shapeFlag&=-257,t.shapeFlag&=-513,!1):n.type===t.type&&n.key===t.key}const Im=(...n)=>Em(...n),co="__vInternal",Kc=({key:n})=>n??null,Es=({ref:n,ref_key:t,ref_for:s})=>n!=null?qe(n)||Me(n)||ge(n)?{i:Qe,r:n,k:t,f:!!s}:n:null;function e(n,t=null,s=null,o=0,i=null,l=n===Ee?0:1,r=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Kc(t),ref:t&&Es(t),scopeId:oo,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qe};return c?(Ri(u,s),l&128&&n.normalize(u)):s&&(u.shapeFlag|=qe(s)?8:16),u.key!==u.key&&W("VNode created with invalid key (NaN). VNode type:",u.type),Xa>0&&!r&&Hn&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&Hn.push(u),u}const E=Im;function Em(n,t=null,s=null,o=0,i=null,l=!1){if((!n||n===Jd)&&(n||W(`Invalid vnode type when creating vnode: ${n}.`),n=Je),Zt(n)){const c=Rn(n,t,!0);return s&&Ri(c,s),Xa>0&&!l&&Hn&&(c.shapeFlag&6?Hn[Hn.indexOf(n)]=c:Hn.push(c)),c.patchFlag|=-2,c}if(Jc(n)&&(n=n.__vccOpts),t){t=C(t);let{class:c,style:u}=t;c&&!qe(c)&&(t.class=Be(c)),Se(u)&&(Fs(u)&&!pe(u)&&(u=je({},u)),t.style=en(u))}const r=qe(n)?1:Mc(n)?128:Tm(n)?64:Se(n)?4:ge(n)?2:0;return r&4&&Fs(n)&&(n=he(n),W("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,t,s,o,i,r,l,!0)}function C(n){return n?Fs(n)||co in n?je({},n):n:null}function Rn(n,t,s=!1){const{props:o,ref:i,patchFlag:l,children:r}=n,c=t?Y(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Kc(c),ref:t&&t.ref?s&&i?pe(i)?i.concat(Es(t)):[i,Es(t)]:Es(t):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l===-1&&pe(r)?r.map(Vc):r,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ee?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Rn(n.ssContent),ssFallback:n.ssFallback&&Rn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Vc(n){const t=Rn(n);return pe(n.children)&&(t.children=n.children.map(Vc)),t}function a(n=" ",t=0){return E(fs,null,n,t)}function be(n="",t=!1){return t?(k(),T(Je,null,n)):E(Je,null,n)}function An(n){return n==null||typeof n=="boolean"?E(Je):pe(n)?E(Ee,null,n.slice()):typeof n=="object"?_t(n):E(fs,null,String(n))}function _t(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Rn(n)}function Ri(n,t){let s=0;const{shapeFlag:o}=n;if(t==null)t=null;else if(pe(t))s=16;else if(typeof t=="object")if(o&65){const i=t.default;i&&(i._c&&(i._d=!1),Ri(n,i()),i._c&&(i._d=!0));return}else{s=32;const i=t._;!i&&!(co in t)?t._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else ge(t)?(t={default:t,_ctx:Qe},s=32):(t=String(t),o&64?(s=16,t=[a(t)]):s=8);n.children=t,n.shapeFlag|=s}function Y(...n){const t={};for(let s=0;s<n.length;s++){const o=n[s];for(const i in o)if(i==="class")t.class!==o.class&&(t.class=Be([t.class,o.class]));else if(i==="style")t.style=en([t.style,o.style]);else if(rs(i)){const l=t[i],r=o[i];r&&l!==r&&!(pe(l)&&l.includes(r))&&(t[i]=l?[].concat(l,r):r)}else i!==""&&(t[i]=o[i])}return t}function zn(n,t,s,o=null){Mn(n,t,7,[s,o])}const Sm=jc();let Cm=0;function Am(n,t,s){const o=n.type,i=(t?t.appContext:n.appContext)||Sm,l={uid:Cm++,vnode:n,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nc(o,i),emitsOptions:Tc(o,i),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:o.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=Xd(l),l.root=t?t.root:l,l.emit=Sd.bind(null,l),n.ce&&n.ce(l),l}let Ue=null;const Zn=()=>Ue||Qe,ba=n=>{Ue=n,n.scope.on()},Kt=()=>{Ue&&Ue.scope.off(),Ue=null},Pm=St("slot,component");function Go(n,t){const s=t.isNativeTag||Br;(Pm(n)||s(n))&&W("Do not use built-in or reserved HTML elements as component id: "+n)}function Gc(n){return n.vnode.shapeFlag&4}let es=!1;function Hm(n,t=!1){es=t;const{props:s,children:o}=n.vnode,i=Gc(n);rm(n,s,i,t),_m(n,o);const l=i?Om(n,t):void 0;return es=!1,l}function Om(n,t){var s;const o=n.type;{if(o.name&&Go(o.name,n.appContext.config),o.components){const l=Object.keys(o.components);for(let r=0;r<l.length;r++)Go(l[r],n.appContext.config)}if(o.directives){const l=Object.keys(o.directives);for(let r=0;r<l.length;r++)Ac(l[r])}o.compilerOptions&&Rm()&&W('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=yi(new Proxy(n.ctx,Hc)),em(n);const{setup:i}=o;if(i){const l=n.setupContext=i.length>1?Yc(n):null;ba(n),ea();const r=lt(i,n,0,[da(n.props),l]);if(na(),Kt(),gi(r)){if(r.then(Kt,Kt),t)return r.then(c=>{$l(n,c,t)}).catch(c=>{to(c,n,0)});if(n.asyncDep=r,!n.suspense){const c=(s=o.name)!==null&&s!==void 0?s:"Anonymous";W(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else $l(n,r,t)}else Qc(n,t)}function $l(n,t,s){ge(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Se(t)?(Zt(t)&&W("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=t,n.setupState=dc(t),nm(n)):t!==void 0&&W(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Qc(n,s)}let Qo;const Rm=()=>!Qo;function Qc(n,t,s){const o=n.type;if(!n.render){if(!t&&Qo&&!o.render){const i=o.template||Hi(n).template;if(i){et(n,"compile");const{isCustomElement:l,compilerOptions:r}=n.appContext.config,{delimiters:c,compilerOptions:u}=o,p=je(je({isCustomElement:l,delimiters:c},r),u);o.render=Qo(i,p),nt(n,"compile")}}n.render=o.render||fn}ba(n),ea(),am(n),na(),Kt(),!o.render&&n.render===fn&&!t&&(o.template?W('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):W("Component is missing template or render function."))}function Nm(n){return new Proxy(n.attrs,{get(t,s){return Ws(),gn(n,"get","$attrs"),t[s]},set(){return W("setupContext.attrs is readonly."),!1},deleteProperty(){return W("setupContext.attrs is readonly."),!1}})}function Yc(n){const t=o=>{if(n.exposed&&W("expose() should be called only once per setup()."),o!=null){let i=typeof o;i==="object"&&(pe(o)?i="array":Me(o)&&(i="ref")),i!=="object"&&W(`expose() should be passed a plain object, received ${i}.`)}n.exposed=o||{}};let s;return Object.freeze({get attrs(){return s||(s=Nm(n))},get slots(){return da(n.slots)},get emit(){return(o,...i)=>n.emit(o,...i)},expose:t})}function uo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(dc(yi(n.exposed)),{get(t,s){if(s in t)return t[s];if(s in Bt)return Bt[s](n)},has(t,s){return s in t||s in Bt}}))}const Fm=/(?:^|[-_])(\w)/g,qm=n=>n.replace(Fm,t=>t.toUpperCase()).replace(/[-_]/g,"");function ns(n,t=!0){return ge(n)?n.displayName||n.name:n.name||t&&n.__name}function po(n,t,s=!1){let o=ns(t);if(!o&&t.__file){const i=t.__file.match(/([^/\\]+)\.\w+$/);i&&(o=i[1])}if(!o&&n&&n.parent){const i=l=>{for(const r in l)if(l[r]===t)return r};o=i(n.components||n.parent.type.components)||i(n.appContext.components)}return o?qm(o):s?"App":"Anonymous"}function Jc(n){return ge(n)&&"__vccOpts"in n}const N=(n,t)=>cd(n,t,es);function F4(){return Wm().slots}function Wm(){const n=Zn();return n||W("useContext() called without active instance."),n.setupContext||(n.setupContext=Yc(n))}function gs(n,t,s){const o=arguments.length;return o===2?Se(t)&&!pe(t)?Zt(t)?E(n,null,[t]):E(n,t):E(n,null,t):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&Zt(s)&&(s=[s]),E(n,t,s))}const Dm=Symbol("ssrContext"),jm=()=>{{const n=z(Dm);return n||W("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function bo(n){return!!(n&&n.__v_isShallow)}function Um(){if(typeof window>"u")return;const n={style:"color:#3ba776"},t={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},i={header(m){return Se(m)?m.__isVue?["div",n,"VueInstance"]:Me(m)?["div",{},["span",n,d(m)],"<",c(m.value),">"]:jt(m)?["div",{},["span",n,bo(m)?"ShallowReactive":"Reactive"],"<",c(m),`>${It(m)?" (readonly)":""}`]:It(m)?["div",{},["span",n,bo(m)?"ShallowReadonly":"Readonly"],"<",c(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...l(m.$)]}};function l(m){const f=[];m.type.props&&m.props&&f.push(r("props",he(m.props))),m.setupState!==Oe&&f.push(r("setup",m.setupState)),m.data!==Oe&&f.push(r("data",he(m.data)));const h=u(m,"computed");h&&f.push(r("computed",h));const _=u(m,"inject");return _&&f.push(r("injected",_)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),f}function r(m,f){return f=je({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",o,h+": "],c(f[h],!1)])]]:["span",{}]}function c(m,f=!0){return typeof m=="number"?["span",t,m]:typeof m=="string"?["span",s,JSON.stringify(m)]:typeof m=="boolean"?["span",o,m]:Se(m)?["object",{object:f?he(m):m}]:["span",s,String(m)]}function u(m,f){const h=m.type;if(ge(h))return;const _={};for(const y in m.ctx)p(h,y,f)&&(_[y]=m.ctx[y]);return _}function p(m,f,h){const _=m[h];if(pe(_)&&_.includes(f)||Se(_)&&f in _||m.extends&&p(m.extends,f,h)||m.mixins&&m.mixins.some(y=>p(y,f,h)))return!0}function d(m){return bo(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(i):window.devtoolsFormatters=[i]}const Ml="3.2.47",Bm="http://www.w3.org/2000/svg",Rt=typeof document<"u"?document:null,Ll=Rt&&Rt.createElement("template"),Km={insert:(n,t,s)=>{t.insertBefore(n,s||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,s,o)=>{const i=t?Rt.createElementNS(Bm,n):Rt.createElement(n,s?{is:s}:void 0);return n==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:n=>Rt.createTextNode(n),createComment:n=>Rt.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Rt.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,s,o,i,l){const r=s?s.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),s),!(i===l||!(i=i.nextSibling)););else{Ll.innerHTML=o?`<svg>${n}</svg>`:n;const c=Ll.content;if(o){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,s)}return[r?r.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function Vm(n,t,s){const o=n._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?n.removeAttribute("class"):s?n.setAttribute("class",t):n.className=t}function Gm(n,t,s){const o=n.style,i=qe(s);if(s&&!i){if(t&&!qe(t))for(const l in t)s[l]==null&&Yo(o,l,"");for(const l in s)Yo(o,l,s[l])}else{const l=o.display;i?t!==s&&(o.cssText=s):t&&n.removeAttribute("style"),"_vod"in n&&(o.display=l)}}const Qm=/[^\\];\s*$/,Il=/\s*!important$/;function Yo(n,t,s){if(pe(s))s.forEach(o=>Yo(n,t,o));else if(s==null&&(s=""),Qm.test(s)&&W(`Unexpected semicolon at the end of '${t}' style value: '${s}'`),t.startsWith("--"))n.setProperty(t,s);else{const o=Ym(n,t);Il.test(s)?n.setProperty(rt(o),s.replace(Il,""),"important"):n[o]=s}}const El=["Webkit","Moz","ms"],yo={};function Ym(n,t){const s=yo[t];if(s)return s;let o=Gn(t);if(o!=="filter"&&o in n)return yo[t]=o;o=Yt(o);for(let i=0;i<El.length;i++){const l=El[i]+o;if(l in n)return yo[t]=l}return t}const Sl="http://www.w3.org/1999/xlink";function Jm(n,t,s,o,i){if(o&&t.startsWith("xlink:"))s==null?n.removeAttributeNS(Sl,t.slice(6,t.length)):n.setAttributeNS(Sl,t,s);else{const l=_p(t);s==null||l&&!jr(s)?n.removeAttribute(t):n.setAttribute(t,l?"":s)}}function Zm(n,t,s,o,i,l,r){if(t==="innerHTML"||t==="textContent"){o&&r(o,i,l),n[t]=s??"";return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=s;const u=s??"";(n.value!==u||n.tagName==="OPTION")&&(n.value=u),s==null&&n.removeAttribute(t);return}let c=!1;if(s===""||s==null){const u=typeof n[t];u==="boolean"?s=jr(s):s==null&&u==="string"?(s="",c=!0):u==="number"&&(s=0,c=!0)}try{n[t]=s}catch(u){c||W(`Failed setting prop "${t}" on <${n.tagName.toLowerCase()}>: value ${s} is invalid.`,u)}c&&n.removeAttribute(t)}function ua(n,t,s,o){n.addEventListener(t,s,o)}function Xm(n,t,s,o){n.removeEventListener(t,s,o)}function ef(n,t,s,o,i=null){const l=n._vei||(n._vei={}),r=l[t];if(o&&r)r.value=o;else{const[c,u]=nf(t);if(o){const p=l[t]=sf(o,i);ua(n,c,p,u)}else r&&(Xm(n,c,r,u),l[t]=void 0)}}const Cl=/(?:Once|Passive|Capture)$/;function nf(n){let t;if(Cl.test(n)){t={};let o;for(;o=n.match(Cl);)n=n.slice(0,n.length-o[0].length),t[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):rt(n.slice(2)),t]}let wo=0;const tf=Promise.resolve(),af=()=>wo||(tf.then(()=>wo=0),wo=Date.now());function sf(n,t){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Mn(of(o,s.value),t,5,[o])};return s.value=n,s.attached=af(),s}function of(n,t){if(pe(t)){const s=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0},t.map(o=>i=>!i._stopped&&o&&o(i))}else return t}const Al=/^on[a-z]/,lf=(n,t,s,o,i=!1,l,r,c,u)=>{t==="class"?Vm(n,o,i):t==="style"?Gm(n,s,o):rs(t)?Ps(t)||ef(n,t,s,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rf(n,t,o,i))?Zm(n,t,o,l,r,c,u):(t==="true-value"?n._trueValue=o:t==="false-value"&&(n._falseValue=o),Jm(n,t,o,i))};function rf(n,t,s,o){return o?!!(t==="innerHTML"||t==="textContent"||t in n&&Al.test(t)&&ge(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||Al.test(t)&&qe(s)?!1:t in n}const mt="transition",La="animation",Zc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cf=je({},qd.props,Zc),Pt=(n,t=[])=>{pe(n)?n.forEach(s=>s(...t)):n&&n(...t)},Pl=n=>n?pe(n)?n.some(t=>t.length>1):n.length>1:!1;function uf(n){const t={};for(const X in n)X in Zc||(t[X]=n[X]);if(n.css===!1)return t;const{name:s="v",type:o,duration:i,enterFromClass:l=`${s}-enter-from`,enterActiveClass:r=`${s}-enter-active`,enterToClass:c=`${s}-enter-to`,appearFromClass:u=l,appearActiveClass:p=r,appearToClass:d=c,leaveFromClass:m=`${s}-leave-from`,leaveActiveClass:f=`${s}-leave-active`,leaveToClass:h=`${s}-leave-to`}=n,_=pf(i),y=_&&_[0],w=_&&_[1],{onBeforeEnter:A,onEnter:I,onEnterCancelled:P,onLeave:O,onLeaveCancelled:G,onBeforeAppear:Q=A,onAppear:K=I,onAppearCancelled:U=P}=t,se=(X,ze,Re)=>{gt(X,ze?d:c),gt(X,ze?p:r),Re&&Re()},re=(X,ze)=>{X._isLeaving=!1,gt(X,m),gt(X,h),gt(X,f),ze&&ze()},fe=X=>(ze,Re)=>{const Le=X?K:I,Ne=()=>se(ze,X,Re);Pt(Le,[ze,Ne]),Hl(()=>{gt(ze,X?u:l),tt(ze,X?d:c),Pl(Le)||Ol(ze,o,y,Ne)})};return je(t,{onBeforeEnter(X){Pt(A,[X]),tt(X,l),tt(X,r)},onBeforeAppear(X){Pt(Q,[X]),tt(X,u),tt(X,p)},onEnter:fe(!1),onAppear:fe(!0),onLeave(X,ze){X._isLeaving=!0;const Re=()=>re(X,ze);tt(X,m),eu(),tt(X,f),Hl(()=>{X._isLeaving&&(gt(X,m),tt(X,h),Pl(O)||Ol(X,o,w,Re))}),Pt(O,[X,Re])},onEnterCancelled(X){se(X,!1),Pt(P,[X])},onAppearCancelled(X){se(X,!0),Pt(U,[X])},onLeaveCancelled(X){re(X),Pt(G,[X])}})}function pf(n){if(n==null)return null;if(Se(n))return[zo(n.enter),zo(n.leave)];{const t=zo(n);return[t,t]}}function zo(n){const t=xp(n);return fd(t,"<transition> explicit duration"),t}function tt(n,t){t.split(/\s+/).forEach(s=>s&&n.classList.add(s)),(n._vtc||(n._vtc=new Set)).add(t)}function gt(n,t){t.split(/\s+/).forEach(o=>o&&n.classList.remove(o));const{_vtc:s}=n;s&&(s.delete(t),s.size||(n._vtc=void 0))}function Hl(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let df=0;function Ol(n,t,s,o){const i=n._endId=++df,l=()=>{i===n._endId&&o()};if(s)return setTimeout(l,s);const{type:r,timeout:c,propCount:u}=Xc(n,t);if(!r)return o();const p=r+"end";let d=0;const m=()=>{n.removeEventListener(p,f),l()},f=h=>{h.target===n&&++d>=u&&m()};setTimeout(()=>{d<u&&m()},c+1),n.addEventListener(p,f)}function Xc(n,t){const s=window.getComputedStyle(n),o=_=>(s[_]||"").split(", "),i=o(`${mt}Delay`),l=o(`${mt}Duration`),r=Rl(i,l),c=o(`${La}Delay`),u=o(`${La}Duration`),p=Rl(c,u);let d=null,m=0,f=0;t===mt?r>0&&(d=mt,m=r,f=l.length):t===La?p>0&&(d=La,m=p,f=u.length):(m=Math.max(r,p),d=m>0?r>p?mt:La:null,f=d?d===mt?l.length:u.length:0);const h=d===mt&&/\b(transform|all)(,|$)/.test(o(`${mt}Property`).toString());return{type:d,timeout:m,propCount:f,hasTransform:h}}function Rl(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((s,o)=>Nl(s)+Nl(n[o])))}function Nl(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function eu(){return document.body.offsetHeight}const nu=new WeakMap,tu=new WeakMap,au={name:"TransitionGroup",props:je({},cf,{tag:String,moveClass:String}),setup(n,{slots:t}){const s=Zn(),o=Ic();let i,l;return Si(()=>{if(!i.length)return;const r=n.moveClass||`${n.name||"v"}-move`;if(!kf(i[0].el,s.vnode.el,r))return;i.forEach(gf),i.forEach(hf);const c=i.filter(_f);eu(),c.forEach(u=>{const p=u.el,d=p.style;tt(p,r),d.transform=d.webkitTransform=d.transitionDuration="";const m=p._moveCb=f=>{f&&f.target!==p||(!f||/transform$/.test(f.propertyName))&&(p.removeEventListener("transitionend",m),p._moveCb=null,gt(p,r))};p.addEventListener("transitionend",m)})}),()=>{const r=he(n),c=uf(r);let u=r.tag||Ee;i=l,l=t.default?Ei(t.default()):[];for(let p=0;p<l.length;p++){const d=l[p];d.key!=null?va(d,Za(d,c,o,s)):W("<TransitionGroup> children must be keyed.")}if(i)for(let p=0;p<i.length;p++){const d=i[p];va(d,Za(d,c,o,s)),nu.set(d,d.el.getBoundingClientRect())}return E(u,null,l)}}},mf=n=>delete n.mode;au.props;const ff=au;function gf(n){const t=n.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function hf(n){tu.set(n,n.el.getBoundingClientRect())}function _f(n){const t=nu.get(n),s=tu.get(n),o=t.left-s.left,i=t.top-s.top;if(o||i){const l=n.el.style;return l.transform=l.webkitTransform=`translate(${o}px,${i}px)`,l.transitionDuration="0s",n}}function kf(n,t,s){const o=n.cloneNode();n._vtc&&n._vtc.forEach(r=>{r.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),s.split(/\s+/).forEach(r=>r&&o.classList.add(r)),o.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(o);const{hasTransform:l}=Xc(o);return i.removeChild(o),l}const Fl=n=>{const t=n.props["onUpdate:modelValue"]||!1;return pe(t)?s=>vt(t,s):t};function vf(n){n.target.composing=!0}function ql(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const bf={created(n,{modifiers:{lazy:t,trim:s,number:o}},i){n._assign=Fl(i);const l=o||i.props&&i.props.type==="number";ua(n,t?"change":"input",r=>{if(r.target.composing)return;let c=n.value;s&&(c=c.trim()),l&&(c=Co(c)),n._assign(c)}),s&&ua(n,"change",()=>{n.value=n.value.trim()}),t||(ua(n,"compositionstart",vf),ua(n,"compositionend",ql),ua(n,"change",ql))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,modifiers:{lazy:s,trim:o,number:i}},l){if(n._assign=Fl(l),n.composing||document.activeElement===n&&n.type!=="range"&&(s||o&&n.value.trim()===t||(i||n.type==="number")&&Co(n.value)===t))return;const r=t??"";n.value!==r&&(n.value=r)}},yf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Wl=(n,t)=>s=>{if(!("key"in s))return;const o=rt(s.key);if(t.some(i=>i===o||yf[i]===o))return n(s)},su={beforeMount(n,{value:t},{transition:s}){n._vod=n.style.display==="none"?"":n.style.display,s&&t?s.beforeEnter(n):Ia(n,t)},mounted(n,{value:t},{transition:s}){s&&t&&s.enter(n)},updated(n,{value:t,oldValue:s},{transition:o}){!t!=!s&&(o?t?(o.beforeEnter(n),Ia(n,!0),o.enter(n)):o.leave(n,()=>{Ia(n,!1)}):Ia(n,t))},beforeUnmount(n,{value:t}){Ia(n,t)}};function Ia(n,t){n.style.display=t?n._vod:"none"}const wf=je({patchProp:lf},Km);let Dl;function zf(){return Dl||(Dl=wm(wf))}const q4=(...n)=>{const t=zf().createApp(...n);xf(t),Tf(t);const{mount:s}=t;return t.mount=o=>{const i=$f(o);if(!i)return;const l=t._component;!ge(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.innerHTML="";const r=s(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function xf(n){Object.defineProperty(n.config,"isNativeTag",{value:t=>fp(t)||gp(t),writable:!1})}function Tf(n){{const t=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return t},set(){W("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=n.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(n.config,"compilerOptions",{get(){return W(o),s},set(){W(o)}})}}function $f(n){if(qe(n)){const t=document.querySelector(n);return t||W(`Failed to mount app: mount target selector "${n}" returned null.`),t}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&W('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function Mf(){Um()}Mf();const ou=Symbol("v-click-clicks"),iu=Symbol("v-click-clicks-elements"),Lf=Symbol("v-click-clicks-order-map"),lu=Symbol("v-click-clicks-disabled"),ru=Symbol("slidev-slide-scale"),M=Symbol("slidev-slidev-context"),If=Symbol("slidev-route"),Ef=Symbol("slidev-slide-context"),Sf="slidev-vclick-target",W4="slidev-vclick-hidden",D4="slidev-vclick-fade",j4="slidev-vclick-hidden-explicitly",U4="slidev-vclick-current",B4="slidev-vclick-prior",K4=["localhost","127.0.0.1"];function Cf(n,t){if(!n)return!1;const s=n.indexOf(t);return s>=0?(n.splice(s,1),!0):!1}function Af(...n){let t,s,o;n.length===1?(t=0,o=1,[s]=n):[t,s,o=1]=n;const i=[];let l=t;for(;l<s;)i.push(l),l+=o||1;return i}function Pf(n){return n!=null}function Hf(n,t){return Object.fromEntries(Object.entries(n).map(([s,o])=>t(s,o)).filter(Pf))}const Fa={theme:"default",title:"Hyper Text Markup Language",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",version:"1.4.3"},Ce=Fa,xt=Ce.aspectRatio??16/9,Tt=Ce.canvasWidth??980,Ni=Math.ceil(Tt/xt),Fi=N(()=>Hf(Ce.themeConfig||{},(n,t)=>[`--slidev-theme-${n}`,t]));function Ln(n,t,s){Object.defineProperty(n,t,{value:s,writable:!0,enumerable:!1})}const ta=nn({page:0,clicks:0});let Of=[],Rf=[];Ln(ta,"$syncUp",!0);Ln(ta,"$syncDown",!0);Ln(ta,"$paused",!1);Ln(ta,"$onSet",n=>Of.push(n));Ln(ta,"$onPatch",n=>Rf.push(n));Ln(ta,"$patch",async()=>!1);function cu(n,t,s=!1){const o=[];let i=!1,l=!1,r,c;const u=nn(t);function p(h){o.push(h)}function d(h,_){u[h]!==_&&(clearTimeout(r),i=!0,u[h]=_,r=setTimeout(()=>i=!1,0))}function m(h){i||(clearTimeout(c),l=!0,Object.entries(h).forEach(([_,y])=>{u[_]=y}),c=setTimeout(()=>l=!1,0))}function f(h){let _;s?s&&window.addEventListener("storage",w=>{w&&w.key===h&&w.newValue&&m(JSON.parse(w.newValue))}):(_=new BroadcastChannel(h),_.addEventListener("message",w=>m(w.data)));function y(){!s&&_&&!l?_.postMessage(he(u)):s&&!l&&window.localStorage.setItem(h,JSON.stringify(u)),i||o.forEach(w=>w(u))}if(We(u,y,{deep:!0}),s){const w=window.localStorage.getItem(h);w&&m(JSON.parse(w))}}return{init:f,onPatch:p,patch:d,state:u}}const{init:V4,onPatch:G4,patch:Q4,state:xo}=cu(ta,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),aa=nn({});let Nf=[],Ff=[];Ln(aa,"$syncUp",!0);Ln(aa,"$syncDown",!0);Ln(aa,"$paused",!1);Ln(aa,"$onSet",n=>Nf.push(n));Ln(aa,"$onPatch",n=>Ff.push(n));Ln(aa,"$patch",async()=>!1);const{init:Y4,onPatch:qf,patch:uu,state:Us}=cu(aa,{},!1),Wf="modulepreload",Df=function(n){return"/TPSI/4/html/"+n},jl={},$t=function(t,s,o){if(!s||s.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(s.map(l=>{if(l=Df(l),l in jl)return;jl[l]=!0;const r=l.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!o)for(let d=i.length-1;d>=0;d--){const m=i[d];if(m.href===l&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":Wf,r||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),r)return new Promise((d,m)=>{p.addEventListener("load",d),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};var Ul;const Nn=typeof window<"u",jf=n=>typeof n<"u",Uf=Object.prototype.toString,ts=n=>typeof n=="function",J4=n=>typeof n=="number",pu=n=>typeof n=="string",Z4=n=>Uf.call(n)==="[object Object]",Jo=()=>+Date.now(),Ua=()=>{};Nn&&((Ul=window==null?void 0:window.navigator)!=null&&Ul.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function pn(n){return typeof n=="function"?n():x(n)}function Bf(n,t){function s(...o){return new Promise((i,l)=>{Promise.resolve(n(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(i).catch(l)})}return s}const du=n=>n();function Kf(n=du){const t=ce(!0);function s(){t.value=!1}function o(){t.value=!0}const i=(...l)=>{t.value&&n(...l)};return{isActive:Bn(t),pause:s,resume:o,eventFilter:i}}function Vf(n){return n}function Gf(n,t){var s;if(typeof n=="number")return n+t;const o=((s=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",i=n.slice(o.length),l=parseFloat(o)+t;return Number.isNaN(l)?n:l+i}function Qf(n,t){let s,o,i;const l=ce(!0),r=()=>{l.value=!0,i()};We(n,r,{flush:"sync"});const c=ts(t)?t:t.get,u=ts(t)?void 0:t.set,p=mc((d,m)=>(o=d,i=m,{get(){return l.value&&(s=c(),l.value=!1),o(),s},set(f){u==null||u(f)}}));return Object.isExtensible(p)&&(p.trigger=r),p}function Jn(n){return Jr()?($p(n),!0):!1}function Yf(n){if(!Me(n))return nn(n);const t=new Proxy({},{get(s,o,i){return x(Reflect.get(n.value,o,i))},set(s,o,i){return Me(n.value[o])&&!Me(i)?n.value[o].value=i:n.value[o]=i,!0},deleteProperty(s,o){return Reflect.deleteProperty(n.value,o)},has(s,o){return Reflect.has(n.value,o)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return nn(t)}function mu(n){return typeof n=="function"?N(n):ce(n)}var Jf=Object.defineProperty,Zf=Object.defineProperties,Xf=Object.getOwnPropertyDescriptors,Bl=Object.getOwnPropertySymbols,eg=Object.prototype.hasOwnProperty,ng=Object.prototype.propertyIsEnumerable,Kl=(n,t,s)=>t in n?Jf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,tg=(n,t)=>{for(var s in t||(t={}))eg.call(t,s)&&Kl(n,s,t[s]);if(Bl)for(var s of Bl(t))ng.call(t,s)&&Kl(n,s,t[s]);return n},ag=(n,t)=>Zf(n,Xf(t));function sg(n){if(!Me(n))return od(n);const t=Array.isArray(n.value)?new Array(n.value.length):{};for(const s in n.value)t[s]=mc(()=>({get(){return n.value[s]},set(o){if(Array.isArray(n.value)){const i=[...n.value];i[s]=o,n.value=i}else{const i=ag(tg({},n.value),{[s]:o});Object.setPrototypeOf(i,n.value),n.value=i}}}));return t}function qi(n,t=!0){Zn()?ds(n):t?n():On(n)}function X4(n){Zn()&&lo(n)}function og(n,t=1e3,s={}){const{immediate:o=!0,immediateCallback:i=!1}=s;let l=null;const r=ce(!1);function c(){l&&(clearInterval(l),l=null)}function u(){r.value=!1,c()}function p(){const d=pn(t);d<=0||(r.value=!0,i&&n(),c(),l=setInterval(n,d))}if(o&&Nn&&p(),Me(t)||ts(t)){const d=We(t,()=>{r.value&&Nn&&p()});Jn(d)}return Jn(u),{isActive:r,pause:u,resume:p}}function ig(n,t,s={}){const{immediate:o=!0}=s,i=ce(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){i.value=!1,r()}function u(...p){r(),i.value=!0,l=setTimeout(()=>{i.value=!1,l=null,n(...p)},pn(t))}return o&&(i.value=!0,Nn&&u()),Jn(c),{isPending:Bn(i),start:u,stop:c}}function fu(n=!1,t={}){const{truthyValue:s=!0,falsyValue:o=!1}=t,i=Me(n),l=ce(n);function r(c){if(arguments.length)return l.value=c,l.value;{const u=pn(s);return l.value=l.value===u?pn(o):u,l.value}}return i?r:[l,r]}var Vl=Object.getOwnPropertySymbols,lg=Object.prototype.hasOwnProperty,rg=Object.prototype.propertyIsEnumerable,cg=(n,t)=>{var s={};for(var o in n)lg.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Vl)for(var o of Vl(n))t.indexOf(o)<0&&rg.call(n,o)&&(s[o]=n[o]);return s};function ug(n,t,s={}){const o=s,{eventFilter:i=du}=o,l=cg(o,["eventFilter"]);return We(n,Bf(i,t),l)}var pg=Object.defineProperty,dg=Object.defineProperties,mg=Object.getOwnPropertyDescriptors,Bs=Object.getOwnPropertySymbols,gu=Object.prototype.hasOwnProperty,hu=Object.prototype.propertyIsEnumerable,Gl=(n,t,s)=>t in n?pg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,fg=(n,t)=>{for(var s in t||(t={}))gu.call(t,s)&&Gl(n,s,t[s]);if(Bs)for(var s of Bs(t))hu.call(t,s)&&Gl(n,s,t[s]);return n},gg=(n,t)=>dg(n,mg(t)),hg=(n,t)=>{var s={};for(var o in n)gu.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Bs)for(var o of Bs(n))t.indexOf(o)<0&&hu.call(n,o)&&(s[o]=n[o]);return s};function _g(n,t,s={}){const o=s,{eventFilter:i}=o,l=hg(o,["eventFilter"]),{eventFilter:r,pause:c,resume:u,isActive:p}=Kf(i);return{stop:ug(n,t,gg(fg({},l),{eventFilter:r})),pause:c,resume:u,isActive:p}}function $n(n){var t;const s=pn(n);return(t=s==null?void 0:s.$el)!=null?t:s}const Ze=Nn?window:void 0,_u=Nn?window.document:void 0,kg=Nn?window.navigator:void 0;function Ae(...n){let t,s,o,i;if(pu(n[0])||Array.isArray(n[0])?([s,o,i]=n,t=Ze):[t,s,o,i]=n,!t)return Ua;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const l=[],r=()=>{l.forEach(d=>d()),l.length=0},c=(d,m,f)=>(d.addEventListener(m,f,i),()=>d.removeEventListener(m,f,i)),u=We(()=>$n(t),d=>{r(),d&&l.push(...s.flatMap(m=>o.map(f=>c(d,m,f))))},{immediate:!0,flush:"post"}),p=()=>{u(),r()};return Jn(p),p}function vg(n,t,s={}){const{window:o=Ze,ignore:i=[],capture:l=!0,detectIframe:r=!1}=s;if(!o)return;let c=!0,u;const p=h=>i.some(_=>{if(typeof _=="string")return Array.from(o.document.querySelectorAll(_)).some(y=>y===h.target||h.composedPath().includes(y));{const y=$n(_);return y&&(h.target===y||h.composedPath().includes(y))}}),d=h=>{o.clearTimeout(u);const _=$n(n);if(!(!_||_===h.target||h.composedPath().includes(_))){if(h.detail===0&&(c=!p(h)),!c){c=!0;return}t(h)}},m=[Ae(o,"click",d,{passive:!0,capture:l}),Ae(o,"pointerdown",h=>{const _=$n(n);_&&(c=!h.composedPath().includes(_)&&!p(h))},{passive:!0}),Ae(o,"pointerup",h=>{if(h.button===0){const _=h.composedPath();h.composedPath=()=>_,u=o.setTimeout(()=>d(h),50)}},{passive:!0}),r&&Ae(o,"blur",h=>{var _;const y=$n(n);((_=o.document.activeElement)==null?void 0:_.tagName)==="IFRAME"&&!(y!=null&&y.contains(o.document.activeElement))&&t(h)})].filter(Boolean);return()=>m.forEach(h=>h())}const bg=n=>typeof n=="function"?n:typeof n=="string"?t=>t.key===n:Array.isArray(n)?t=>n.includes(t.key):()=>!0;function yg(...n){let t,s,o={};n.length===3?(t=n[0],s=n[1],o=n[2]):n.length===2?typeof n[1]=="object"?(t=!0,s=n[0],o=n[1]):(t=n[0],s=n[1]):(t=!0,s=n[0]);const{target:i=Ze,eventName:l="keydown",passive:r=!1}=o,c=bg(t);return Ae(i,l,p=>{c(p)&&s(p)},r)}function wg(n={}){var t;const{window:s=Ze}=n,o=(t=n.document)!=null?t:s==null?void 0:s.document,i=Qf(()=>null,()=>o==null?void 0:o.activeElement);return s&&(Ae(s,"blur",l=>{l.relatedTarget===null&&i.trigger()},!0),Ae(s,"focus",i.trigger,!0)),i}function hs(n,t=!1){const s=ce(),o=()=>s.value=Boolean(n());return o(),qi(o,t),s}function pa(n,t={}){const{window:s=Ze}=t,o=hs(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let i;const l=ce(!1),r=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",c):i.removeListener(c))},c=()=>{o.value&&(r(),i=s.matchMedia(mu(n).value),l.value=i.matches,"addEventListener"in i?i.addEventListener("change",c):i.addListener(c))};return xa(c),Jn(()=>r()),l}const zg={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var xg=Object.defineProperty,Ql=Object.getOwnPropertySymbols,Tg=Object.prototype.hasOwnProperty,$g=Object.prototype.propertyIsEnumerable,Yl=(n,t,s)=>t in n?xg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Mg=(n,t)=>{for(var s in t||(t={}))Tg.call(t,s)&&Yl(n,s,t[s]);if(Ql)for(var s of Ql(t))$g.call(t,s)&&Yl(n,s,t[s]);return n};function Lg(n,t={}){function s(c,u){let p=n[c];return u!=null&&(p=Gf(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=Ze}=t;function i(c){return o?o.matchMedia(c).matches:!1}const l=c=>pa(`(min-width: ${s(c)})`,t),r=Object.keys(n).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>l(u),enumerable:!0,configurable:!0}),c),{});return Mg({greater(c){return pa(`(min-width: ${s(c,.1)})`,t)},greaterOrEqual:l,smaller(c){return pa(`(max-width: ${s(c,-.1)})`,t)},smallerOrEqual(c){return pa(`(max-width: ${s(c)})`,t)},between(c,u){return pa(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`,t)},isGreater(c){return i(`(min-width: ${s(c,.1)})`)},isGreaterOrEqual(c){return i(`(min-width: ${s(c)})`)},isSmaller(c){return i(`(max-width: ${s(c,-.1)})`)},isSmallerOrEqual(c){return i(`(max-width: ${s(c)})`)},isInBetween(c,u){return i(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`)}},r)}function Ig(n={}){const{navigator:t=kg,read:s=!1,source:o,copiedDuring:i=1500,legacy:l=!1}=n,r=["copy","cut"],c=hs(()=>t&&"clipboard"in t),u=N(()=>c.value||l),p=ce(""),d=ce(!1),m=ig(()=>d.value=!1,i);function f(){c.value?t.clipboard.readText().then(w=>{p.value=w}):p.value=y()}if(u.value&&s)for(const w of r)Ae(w,f);async function h(w=pn(o)){u.value&&w!=null&&(c.value?await t.clipboard.writeText(w):_(w),p.value=w,d.value=!0,m.start())}function _(w){const A=document.createElement("textarea");A.value=w??"",A.style.position="absolute",A.style.opacity="0",document.body.appendChild(A),A.select(),document.execCommand("copy"),A.remove()}function y(){var w,A,I;return(I=(A=(w=document==null?void 0:document.getSelection)==null?void 0:w.call(document))==null?void 0:A.toString())!=null?I:""}return{isSupported:u,text:p,copied:d,copy:h}}function Eg(n){return JSON.parse(JSON.stringify(n))}const Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xo="__vueuse_ssr_handlers__";Zo[Xo]=Zo[Xo]||{};const Sg=Zo[Xo];function Cg(n,t){return Sg[n]||t}function Ag(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var Pg=Object.defineProperty,Jl=Object.getOwnPropertySymbols,Hg=Object.prototype.hasOwnProperty,Og=Object.prototype.propertyIsEnumerable,Zl=(n,t,s)=>t in n?Pg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Xl=(n,t)=>{for(var s in t||(t={}))Hg.call(t,s)&&Zl(n,s,t[s]);if(Jl)for(var s of Jl(t))Og.call(t,s)&&Zl(n,s,t[s]);return n};const Rg={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}};function Ng(n,t,s,o={}){var i;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:m=Ze,eventFilter:f,onError:h=K=>{console.error(K)}}=o,_=(d?Qn:ce)(t);if(!s)try{s=Cg("getDefaultStorage",()=>{var K;return(K=Ze)==null?void 0:K.localStorage})()}catch(K){h(K)}if(!s)return _;const y=pn(t),w=Ag(y),A=(i=o.serializer)!=null?i:Rg[w],{pause:I,resume:P}=_g(_,()=>O(_.value),{flush:l,deep:r,eventFilter:f});return m&&c&&Ae(m,"storage",Q),Q(),_;function O(K){try{if(K==null)s.removeItem(n);else{const U=A.write(K),se=s.getItem(n);se!==U&&(s.setItem(n,U),m&&(m==null||m.dispatchEvent(new StorageEvent("storage",{key:n,oldValue:se,newValue:U,storageArea:s}))))}}catch(U){h(U)}}function G(K){const U=K?K.newValue:s.getItem(n);if(U==null)return u&&y!==null&&s.setItem(n,A.write(y)),y;if(!K&&p){const se=A.read(U);return ts(p)?p(se,y):w==="object"&&!Array.isArray(se)?Xl(Xl({},y),se):se}else return typeof U!="string"?U:A.read(U)}function Q(K){if(!(K&&K.storageArea!==s)){if(K&&K.key==null){_.value=y;return}if(!(K&&K.key!==n)){I();try{_.value=G(K)}catch(U){h(U)}finally{K?On(P):P()}}}}}function Fg(n){return pa("(prefers-color-scheme: dark)",n)}var qg=Object.defineProperty,Wg=Object.defineProperties,Dg=Object.getOwnPropertyDescriptors,er=Object.getOwnPropertySymbols,jg=Object.prototype.hasOwnProperty,Ug=Object.prototype.propertyIsEnumerable,nr=(n,t,s)=>t in n?qg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Bg=(n,t)=>{for(var s in t||(t={}))jg.call(t,s)&&nr(n,s,t[s]);if(er)for(var s of er(t))Ug.call(t,s)&&nr(n,s,t[s]);return n},Kg=(n,t)=>Wg(n,Dg(t));function eA(n,t={}){var s,o,i;const l=(s=t.draggingElement)!=null?s:Ze,r=(o=t.handle)!=null?o:n,c=ce((i=pn(t.initialValue))!=null?i:{x:0,y:0}),u=ce(),p=_=>t.pointerTypes?t.pointerTypes.includes(_.pointerType):!0,d=_=>{pn(t.preventDefault)&&_.preventDefault(),pn(t.stopPropagation)&&_.stopPropagation()},m=_=>{var y;if(!p(_)||pn(t.exact)&&_.target!==pn(n))return;const w=pn(n).getBoundingClientRect(),A={x:_.clientX-w.left,y:_.clientY-w.top};((y=t.onStart)==null?void 0:y.call(t,A,_))!==!1&&(u.value=A,d(_))},f=_=>{var y;p(_)&&u.value&&(c.value={x:_.clientX-u.value.x,y:_.clientY-u.value.y},(y=t.onMove)==null||y.call(t,c.value,_),d(_))},h=_=>{var y;p(_)&&u.value&&(u.value=void 0,(y=t.onEnd)==null||y.call(t,c.value,_),d(_))};return Nn&&(Ae(r,"pointerdown",m,!0),Ae(l,"pointermove",f,!0),Ae(l,"pointerup",h,!0)),Kg(Bg({},sg(c)),{position:c,isDragging:N(()=>!!u.value),style:N(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var tr=Object.getOwnPropertySymbols,Vg=Object.prototype.hasOwnProperty,Gg=Object.prototype.propertyIsEnumerable,Qg=(n,t)=>{var s={};for(var o in n)Vg.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&tr)for(var o of tr(n))t.indexOf(o)<0&&Gg.call(n,o)&&(s[o]=n[o]);return s};function Yg(n,t,s={}){const o=s,{window:i=Ze}=o,l=Qg(o,["window"]);let r;const c=hs(()=>i&&"ResizeObserver"in i),u=()=>{r&&(r.disconnect(),r=void 0)},p=We(()=>$n(n),m=>{u(),c.value&&i&&m&&(r=new ResizeObserver(t),r.observe(m,l))},{immediate:!0,flush:"post"}),d=()=>{u(),p()};return Jn(d),{isSupported:c,stop:d}}function Jg(n,t={}){const{immediate:s=!0,window:o=Ze}=t,i=ce(!1);let l=0,r=null;function c(d){if(!i.value||!o)return;const m=d-l;n({delta:m,timestamp:d}),l=d,r=o.requestAnimationFrame(c)}function u(){!i.value&&o&&(i.value=!0,r=o.requestAnimationFrame(c))}function p(){i.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&u(),Jn(p),{isActive:Bn(i),pause:p,resume:u}}function Zg(n,t={width:0,height:0},s={}){const{window:o=Ze,box:i="content-box"}=s,l=N(()=>{var u,p;return(p=(u=$n(n))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),r=ce(t.width),c=ce(t.height);return Yg(n,([u])=>{const p=i==="border-box"?u.borderBoxSize:i==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(o&&l.value){const d=$n(n);if(d){const m=o.getComputedStyle(d);r.value=parseFloat(m.width),c.value=parseFloat(m.height)}}else if(p){const d=Array.isArray(p)?p:[p];r.value=d.reduce((m,{inlineSize:f})=>m+f,0),c.value=d.reduce((m,{blockSize:f})=>m+f,0)}else r.value=u.contentRect.width,c.value=u.contentRect.height},s),We(()=>$n(n),u=>{r.value=u?t.width:0,c.value=u?t.height:0}),{width:r,height:c}}const ar=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Xg(n,t={}){const{document:s=_u,autoExit:o=!1}=t,i=n||(s==null?void 0:s.querySelector("html")),l=ce(!1);let r=ar[0];const c=hs(()=>{if(s){for(const y of ar)if(y[1]in s)return r=y,!0}else return!1;return!1}),[u,p,d,,m]=r;async function f(){c.value&&(s!=null&&s[d]&&await s[p](),l.value=!1)}async function h(){if(!c.value)return;await f();const y=$n(i);y&&(await y[u](),l.value=!0)}async function _(){l.value?await f():await h()}return s&&Ae(s,m,()=>{l.value=!!(s!=null&&s[d])},!1),o&&Jn(f),{isSupported:c,isFullscreen:l,enter:h,exit:f,toggle:_}}function nA(n,t,s={}){const{root:o,rootMargin:i="0px",threshold:l=.1,window:r=Ze}=s,c=hs(()=>r&&"IntersectionObserver"in r);let u=Ua;const p=c.value?We(()=>({el:$n(n),root:$n(o)}),({el:m,root:f})=>{if(u(),!m)return;const h=new IntersectionObserver(t,{root:f,rootMargin:i,threshold:l});h.observe(m),u=()=>{h.disconnect(),u=Ua}},{immediate:!0,flush:"post"}):Ua,d=()=>{u(),p()};return Jn(d),{isSupported:c,stop:d}}function qn(n,t,s={}){const{window:o=Ze}=s;return Ng(n,t,o==null?void 0:o.localStorage,s)}const eh={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function nh(n={}){const{reactive:t=!1,target:s=Ze,aliasMap:o=eh,passive:i=!0,onEventFired:l=Ua}=n,r=nn(new Set),c={toJSON(){return{}},current:r},u=t?nn(c):c,p=new Set,d=new Set;function m(y,w){y in u&&(t?u[y]=w:u[y].value=w)}function f(){r.clear();for(const y of d)m(y,!1)}function h(y,w){var A,I;const P=(A=y.key)==null?void 0:A.toLowerCase(),G=[(I=y.code)==null?void 0:I.toLowerCase(),P].filter(Boolean);P&&(w?r.add(P):r.delete(P));for(const Q of G)d.add(Q),m(Q,w);P==="meta"&&!w?(p.forEach(Q=>{r.delete(Q),m(Q,!1)}),p.clear()):typeof y.getModifierState=="function"&&y.getModifierState("Meta")&&w&&[...r,...G].forEach(Q=>p.add(Q))}Ae(s,"keydown",y=>(h(y,!0),l(y)),{passive:i}),Ae(s,"keyup",y=>(h(y,!1),l(y)),{passive:i}),Ae("blur",f,{passive:!0}),Ae("focus",f,{passive:!0});const _=new Proxy(u,{get(y,w,A){if(typeof w!="string")return Reflect.get(y,w,A);if(w=w.toLowerCase(),w in o&&(w=o[w]),!(w in u))if(/[+_-]/.test(w)){const P=w.split(/[+_-]/g).map(O=>O.trim());u[w]=N(()=>P.every(O=>x(_[O])))}else u[w]=ce(!1);const I=Reflect.get(y,w,A);return t?x(I):I}});return _}function tA(n={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:i={x:0,y:0},window:l=Ze,eventFilter:r}=n,c=ce(i.x),u=ce(i.y),p=ce(null),d=y=>{t==="page"?(c.value=y.pageX,u.value=y.pageY):t==="client"?(c.value=y.clientX,u.value=y.clientY):t==="movement"&&(c.value=y.movementX,u.value=y.movementY),p.value="mouse"},m=()=>{c.value=i.x,u.value=i.y},f=y=>{if(y.touches.length>0){const w=y.touches[0];t==="page"?(c.value=w.pageX,u.value=w.pageY):t==="client"&&(c.value=w.clientX,u.value=w.clientY),p.value="touch"}},h=y=>r===void 0?d(y):r(()=>d(y),{}),_=y=>r===void 0?f(y):r(()=>f(y),{});return l&&(Ae(l,"mousemove",h,{passive:!0}),Ae(l,"dragover",h,{passive:!0}),s&&t!=="movement"&&(Ae(l,"touchstart",_,{passive:!0}),Ae(l,"touchmove",_,{passive:!0}),o&&Ae(l,"touchend",m,{passive:!0}))),{x:c,y:u,sourceType:p}}var it;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(it||(it={}));function th(n,t={}){const s=mu(n),{threshold:o=50,onSwipe:i,onSwipeEnd:l,onSwipeStart:r}=t,c=nn({x:0,y:0}),u=(Q,K)=>{c.x=Q,c.y=K},p=nn({x:0,y:0}),d=(Q,K)=>{p.x=Q,p.y=K},m=N(()=>c.x-p.x),f=N(()=>c.y-p.y),{max:h,abs:_}=Math,y=N(()=>h(_(m.value),_(f.value))>=o),w=ce(!1),A=ce(!1),I=N(()=>y.value?_(m.value)>_(f.value)?m.value>0?it.LEFT:it.RIGHT:f.value>0?it.UP:it.DOWN:it.NONE),P=Q=>{var K,U,se;const re=Q.buttons===0,fe=Q.buttons===1;return(se=(U=(K=t.pointerTypes)==null?void 0:K.includes(Q.pointerType))!=null?U:re||fe)!=null?se:!0},O=[Ae(n,"pointerdown",Q=>{var K,U;if(!P(Q))return;A.value=!0,(U=(K=s.value)==null?void 0:K.style)==null||U.setProperty("touch-action","none");const se=Q.target;se==null||se.setPointerCapture(Q.pointerId);const{clientX:re,clientY:fe}=Q;u(re,fe),d(re,fe),r==null||r(Q)}),Ae(n,"pointermove",Q=>{if(!P(Q)||!A.value)return;const{clientX:K,clientY:U}=Q;d(K,U),!w.value&&y.value&&(w.value=!0),w.value&&(i==null||i(Q))}),Ae(n,"pointerup",Q=>{var K,U;P(Q)&&(w.value&&(l==null||l(Q,I.value)),A.value=!1,w.value=!1,(U=(K=s.value)==null?void 0:K.style)==null||U.setProperty("touch-action","initial"))})],G=()=>O.forEach(Q=>Q());return{isSwiping:Bn(w),direction:Bn(I),posStart:Bn(c),posEnd:Bn(p),distanceX:m,distanceY:f,stop:G}}let ah=0;function aA(n,t={}){const s=ce(!1),{document:o=_u,immediate:i=!0,manual:l=!1,id:r=`vueuse_styletag_${++ah}`}=t,c=ce(n);let u=()=>{};const p=()=>{if(!o)return;const m=o.getElementById(r)||o.createElement("style");m.isConnected||(m.type="text/css",m.id=r,t.media&&(m.media=t.media),o.head.appendChild(m)),!s.value&&(u=We(c,f=>{m.textContent=f},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(u(),o.head.removeChild(o.getElementById(r)),s.value=!1)};return i&&!l&&qi(p),l||Jn(d),{id:r,css:c,unload:d,load:p,isLoaded:Bn(s)}}var sh=Object.defineProperty,sr=Object.getOwnPropertySymbols,oh=Object.prototype.hasOwnProperty,ih=Object.prototype.propertyIsEnumerable,or=(n,t,s)=>t in n?sh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,lh=(n,t)=>{for(var s in t||(t={}))oh.call(t,s)&&or(n,s,t[s]);if(sr)for(var s of sr(t))ih.call(t,s)&&or(n,s,t[s]);return n};function sA(n={}){const{controls:t=!1,offset:s=0,immediate:o=!0,interval:i="requestAnimationFrame",callback:l}=n,r=ce(Jo()+s),c=()=>r.value=Jo()+s,u=l?()=>{c(),l(r.value)}:c,p=i==="requestAnimationFrame"?Jg(u,{immediate:o}):og(u,i,{immediate:o});return t?lh({timestamp:r},p):r}var rh=Object.defineProperty,ir=Object.getOwnPropertySymbols,ch=Object.prototype.hasOwnProperty,uh=Object.prototype.propertyIsEnumerable,lr=(n,t,s)=>t in n?rh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,ph=(n,t)=>{for(var s in t||(t={}))ch.call(t,s)&&lr(n,s,t[s]);if(ir)for(var s of ir(t))uh.call(t,s)&&lr(n,s,t[s]);return n};const dh={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ph({linear:Vf},dh);function Kn(n,t,s,o={}){var i,l,r;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:m}=o,f=Zn(),h=s||(f==null?void 0:f.emit)||((i=f==null?void 0:f.$emit)==null?void 0:i.bind(f))||((r=(l=f==null?void 0:f.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(f==null?void 0:f.proxy));let _=p;t||(t="modelValue"),_=p||_||`update:${t.toString()}`;const y=A=>c?ts(c)?c(A):Eg(A):A,w=()=>jf(n[t])?y(n[t]):m;if(u){const A=w(),I=ce(A);return We(()=>n[t],P=>I.value=y(P)),We(I,P=>{(P!==n[t]||d)&&h(_,P)},{deep:d}),I}else return N({get(){return w()},set(A){h(_,A)}})}function oA({window:n=Ze}={}){if(!n)return ce(!1);const t=ce(n.document.hasFocus());return Ae(n,"blur",()=>{t.value=!1}),Ae(n,"focus",()=>{t.value=!0}),t}function mh(n={}){const{window:t=Ze,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:i=!0,includeScrollbar:l=!0}=n,r=ce(s),c=ce(o),u=()=>{t&&(l?(r.value=t.innerWidth,c.value=t.innerHeight):(r.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight))};return u(),qi(u),Ae("resize",u,{passive:!0}),i&&Ae("orientationchange",u,{passive:!0}),{width:r,height:c}}function fh(){return ku().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ku(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const gh=typeof Proxy=="function",hh="devtools-plugin:setup",_h="plugin:settings:set";let oa,ei;function kh(){var n;return oa!==void 0||(typeof window<"u"&&window.performance?(oa=!0,ei=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(oa=!0,ei=global.perf_hooks.performance):oa=!1),oa}function vh(){return kh()?ei.now():Date.now()}class bh{constructor(t,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=s;const o={};if(t.settings)for(const r in t.settings){const c=t.settings[r];o[r]=c.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let l=Object.assign({},o);try{const r=localStorage.getItem(i),c=JSON.parse(r);Object.assign(l,c)}catch{}this.fallbacks={getSettings(){return l},setSettings(r){try{localStorage.setItem(i,JSON.stringify(r))}catch{}l=r},now(){return vh()}},s&&s.on(_h,(r,c)=>{r===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(r,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(r,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(t){this.target=t;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function yh(n,t){const s=n,o=ku(),i=fh(),l=gh&&s.enableEarlyProxy;if(i&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))i.emit(hh,n,t);else{const r=l?new bh(s,i):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const st=typeof window<"u";function wh(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function To(n,t){const s={};for(const o in t){const i=t[o];s[o]=yn(i)?i.map(n):n(i)}return s}const Ba=()=>{},yn=Array.isArray;function $e(n){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(t))}const zh=/\/$/,xh=n=>n.replace(zh,"");function $o(n,t,s="/"){let o,i={},l="",r="";const c=t.indexOf("#");let u=t.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(o=t.slice(0,u),l=t.slice(u+1,c>-1?c:t.length),i=n(l)),c>-1&&(o=o||t.slice(0,c),r=t.slice(c,t.length)),o=Mh(o??t,s),{fullPath:o+(l&&"?")+l+r,path:o,query:i,hash:r}}function Th(n,t){const s=t.query?n(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function rr(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function cr(n,t,s){const o=t.matched.length-1,i=s.matched.length-1;return o>-1&&o===i&&Et(t.matched[o],s.matched[i])&&vu(t.params,s.params)&&n(t.query)===n(s.query)&&t.hash===s.hash}function Et(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function vu(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const s in n)if(!$h(n[s],t[s]))return!1;return!0}function $h(n,t){return yn(n)?ur(n,t):yn(t)?ur(t,n):n===t}function ur(n,t){return yn(t)?n.length===t.length&&n.every((s,o)=>s===t[o]):n.length===1&&n[0]===t}function Mh(n,t){if(n.startsWith("/"))return n;if(!t.startsWith("/"))return $e(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${t}". It should look like "/${t}".`),n;if(!n)return t;const s=t.split("/"),o=n.split("/");let i=s.length-1,l,r;for(l=0;l<o.length;l++)if(r=o[l],r!==".")if(r==="..")i>1&&i--;else break;return s.slice(0,i).join("/")+"/"+o.slice(l-(l===o.length?1:0)).join("/")}var as;(function(n){n.pop="pop",n.push="push"})(as||(as={}));var Ka;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ka||(Ka={}));function Lh(n){if(!n)if(st){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),xh(n)}const Ih=/^[^#]+#/;function Eh(n,t){return n.replace(Ih,"#")+t}function Sh(n,t){const s=document.documentElement.getBoundingClientRect(),o=n.getBoundingClientRect();return{behavior:t.behavior,left:o.left-s.left-(t.left||0),top:o.top-s.top-(t.top||0)}}const mo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ch(n){let t;if("el"in n){const s=n.el,o=typeof s=="string"&&s.startsWith("#");if(typeof n.el=="string"&&(!o||!document.getElementById(n.el.slice(1))))try{const l=document.querySelector(n.el);if(o&&l){$e(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{$e(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const i=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!i){$e(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}t=Sh(i,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function pr(n,t){return(history.state?history.state.position-t:-1)+n}const ni=new Map;function Ah(n,t){ni.set(n,t)}function Ph(n){const t=ni.get(n);return ni.delete(n),t}let Hh=()=>location.protocol+"//"+location.host;function bu(n,t){const{pathname:s,search:o,hash:i}=t,l=n.indexOf("#");if(l>-1){let c=i.includes(n.slice(l))?n.slice(l).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),rr(u,"")}return rr(s,n)+o+i}function Oh(n,t,s,o){let i=[],l=[],r=null;const c=({state:f})=>{const h=bu(n,location),_=s.value,y=t.value;let w=0;if(f){if(s.value=h,t.value=f,r&&r===_){r=null;return}w=y?f.position-y.position:0}else o(h);i.forEach(A=>{A(s.value,_,{delta:w,type:as.pop,direction:w?w>0?Ka.forward:Ka.back:Ka.unknown})})};function u(){r=s.value}function p(f){i.push(f);const h=()=>{const _=i.indexOf(f);_>-1&&i.splice(_,1)};return l.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(Ie({},f.state,{scroll:mo()}),"")}function m(){for(const f of l)f();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:p,destroy:m}}function dr(n,t,s,o=!1,i=!1){return{back:n,current:t,forward:s,replaced:o,position:window.history.length,scroll:i?mo():null}}function Rh(n){const{history:t,location:s}=window,o={value:bu(n,s)},i={value:t.state};i.value||l(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(u,p,d){const m=n.indexOf("#"),f=m>-1?(s.host&&document.querySelector("base")?n:n.slice(m))+u:Hh()+n+u;try{t[d?"replaceState":"pushState"](p,"",f),i.value=p}catch(h){$e("Error with push/replace State",h),s[d?"replace":"assign"](f)}}function r(u,p){const d=Ie({},t.state,dr(i.value.back,u,i.value.forward,!0),p,{position:i.value.position});l(u,d,!0),o.value=u}function c(u,p){const d=Ie({},i.value,t.state,{forward:u,scroll:mo()});t.state||$e(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(d.current,d,!0);const m=Ie({},dr(o.value,u,null),{position:d.position+1},p);l(u,m,!1),o.value=u}return{location:o,state:i,push:c,replace:r}}function Nh(n){n=Lh(n);const t=Rh(n),s=Oh(n,t.state,t.location,t.replace);function o(l,r=!0){r||s.pauseListeners(),history.go(l)}const i=Ie({location:"",base:n,go:o,createHref:Eh.bind(null,n)},t,s);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Fh(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),!n.endsWith("#/")&&!n.endsWith("#")&&$e(`A hash base must end with a "#":
"${n}" should be "${n.replace(/#.*$/,"#")}".`),Nh(n)}function qh(n){return typeof n=="string"||n&&typeof n=="object"}function yu(n){return typeof n=="string"||typeof n=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wu=Symbol("navigation failure");var mr;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(mr||(mr={}));const Wh={[1]({location:n,currentLocation:t}){return`No match for
 ${JSON.stringify(n)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:n,to:t}){return`Redirected from "${n.fullPath}" to "${jh(t)}" via a navigation guard.`},[4]({from:n,to:t}){return`Navigation aborted from "${n.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:n,to:t}){return`Navigation cancelled from "${n.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:n,to:t}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function ya(n,t){return Ie(new Error(Wh[n](t)),{type:n,[wu]:!0},t)}function Xn(n,t){return n instanceof Error&&wu in n&&(t==null||!!(n.type&t))}const Dh=["params","query","hash"];function jh(n){if(typeof n=="string")return n;if("path"in n)return n.path;const t={};for(const s of Dh)s in n&&(t[s]=n[s]);return JSON.stringify(t,null,2)}const fr="[^/]+?",Uh={sensitive:!1,strict:!1,start:!0,end:!0},Bh=/[.+*?^${}()[\]/\\]/g;function Kh(n,t){const s=Ie({},Uh,t),o=[];let i=s.start?"^":"";const l=[];for(const p of n){const d=p.length?[]:[90];s.strict&&!p.length&&(i+="/");for(let m=0;m<p.length;m++){const f=p[m];let h=40+(s.sensitive?.25:0);if(f.type===0)m||(i+="/"),i+=f.value.replace(Bh,"\\$&"),h+=40;else if(f.type===1){const{value:_,repeatable:y,optional:w,regexp:A}=f;l.push({name:_,repeatable:y,optional:w});const I=A||fr;if(I!==fr){h+=10;try{new RegExp(`(${I})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${_}" (${I}): `+O.message)}}let P=y?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;m||(P=w&&p.length<2?`(?:/${P})`:"/"+P),w&&(P+="?"),i+=P,h+=20,w&&(h+=-8),y&&(h+=-20),I===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(s.strict&&s.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}s.strict||(i+="/?"),s.end?i+="$":s.strict&&(i+="(?:/|$)");const r=new RegExp(i,s.sensitive?"":"i");function c(p){const d=p.match(r),m={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",_=l[f-1];m[_.name]=h&&_.repeatable?h.split("/"):h}return m}function u(p){let d="",m=!1;for(const f of n){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:_,repeatable:y,optional:w}=h,A=_ in p?p[_]:"";if(yn(A)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const I=yn(A)?A.join("/"):A;if(!I)if(w)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${_}"`);d+=I}}return d||"/"}return{re:r,score:o,keys:l,parse:c,stringify:u}}function Vh(n,t){let s=0;for(;s<n.length&&s<t.length;){const o=t[s]-n[s];if(o)return o;s++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Gh(n,t){let s=0;const o=n.score,i=t.score;for(;s<o.length&&s<i.length;){const l=Vh(o[s],i[s]);if(l)return l;s++}if(Math.abs(i.length-o.length)===1){if(gr(o))return 1;if(gr(i))return-1}return i.length-o.length}function gr(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Qh={type:0,value:""},Yh=/[a-zA-Z0-9_]/;function Jh(n){if(!n)return[[]];if(n==="/")return[[Qh]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function t(h){throw new Error(`ERR (${s})/"${p}": ${h}`)}let s=0,o=s;const i=[];let l;function r(){l&&i.push(l),l=[]}let c=0,u,p="",d="";function m(){p&&(s===0?l.push({type:0,value:p}):s===1||s===2||s===3?(l.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),p="")}function f(){p+=u}for(;c<n.length;){if(u=n[c++],u==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:u==="/"?(p&&m(),r()):u===":"?(m(),s=1):f();break;case 4:f(),s=o;break;case 1:u==="("?s=2:Yh.test(u)?f():(m(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:s=3:d+=u;break;case 3:m(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${p}"`),m(),r(),i}function Zh(n,t,s){const o=Kh(Jh(n.path),s);{const l=new Set;for(const r of o.keys)l.has(r.name)&&$e(`Found duplicated params with name "${r.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),l.add(r.name)}const i=Ie(o,{record:n,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Xh(n,t){const s=[],o=new Map;t=kr({strict:!1,end:!0,sensitive:!1},t);function i(d){return o.get(d)}function l(d,m,f){const h=!f,_=e_(d);s_(_,m),_.aliasOf=f&&f.record;const y=kr(t,d),w=[_];if("alias"in d){const P=typeof d.alias=="string"?[d.alias]:d.alias;for(const O of P)w.push(Ie({},_,{components:f?f.record.components:_.components,path:O,aliasOf:f?f.record:_}))}let A,I;for(const P of w){const{path:O}=P;if(m&&O[0]!=="/"){const G=m.record.path,Q=G[G.length-1]==="/"?"":"/";P.path=m.record.path+(O&&Q+O)}if(P.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(A=Zh(P,m,y),m&&O[0]==="/"&&o_(A,m),f?(f.alias.push(A),a_(f,A)):(I=I||A,I!==A&&I.alias.push(A),h&&d.name&&!_r(A)&&r(d.name)),_.children){const G=_.children;for(let Q=0;Q<G.length;Q++)l(G[Q],A,f&&f.children[Q])}f=f||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&u(A)}return I?()=>{r(I)}:Ba}function r(d){if(yu(d)){const m=o.get(d);m&&(o.delete(d),s.splice(s.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=s.indexOf(d);m>-1&&(s.splice(m,1),d.record.name&&o.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return s}function u(d){let m=0;for(;m<s.length&&Gh(d,s[m])>=0&&(d.record.path!==s[m].record.path||!zu(d,s[m]));)m++;s.splice(m,0,d),d.record.name&&!_r(d)&&o.set(d.record.name,d)}function p(d,m){let f,h={},_,y;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw ya(1,{location:d});{const I=Object.keys(d.params||{}).filter(P=>!f.keys.find(O=>O.name===P));I.length&&$e(`Discarded invalid param(s) "${I.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}y=f.record.name,h=Ie(hr(m.params,f.keys.filter(I=>!I.optional).map(I=>I.name)),d.params&&hr(d.params,f.keys.map(I=>I.name))),_=f.stringify(h)}else if("path"in d)_=d.path,_.startsWith("/")||$e(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=s.find(I=>I.re.test(_)),f&&(h=f.parse(_),y=f.record.name);else{if(f=m.name?o.get(m.name):s.find(I=>I.re.test(m.path)),!f)throw ya(1,{location:d,currentLocation:m});y=f.record.name,h=Ie({},m.params,d.params),_=f.stringify(h)}const w=[];let A=f;for(;A;)w.unshift(A.record),A=A.parent;return{name:y,path:_,params:h,matched:w,meta:t_(w)}}return n.forEach(d=>l(d)),{addRoute:l,resolve:p,removeRoute:r,getRoutes:c,getRecordMatcher:i}}function hr(n,t){const s={};for(const o of t)o in n&&(s[o]=n[o]);return s}function e_(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:n_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function n_(n){const t={},s=n.props||!1;if("component"in n)t.default=s;else for(const o in n.components)t[o]=typeof s=="boolean"?s:s[o];return t}function _r(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function t_(n){return n.reduce((t,s)=>Ie(t,s.meta),{})}function kr(n,t){const s={};for(const o in n)s[o]=o in t?t[o]:n[o];return s}function ti(n,t){return n.name===t.name&&n.optional===t.optional&&n.repeatable===t.repeatable}function a_(n,t){for(const s of n.keys)if(!s.optional&&!t.keys.find(ti.bind(null,s)))return $e(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${s.name}"`);for(const s of t.keys)if(!s.optional&&!n.keys.find(ti.bind(null,s)))return $e(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${s.name}"`)}function s_(n,t){t&&t.record.name&&!n.name&&!n.path&&$e(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function o_(n,t){for(const s of t.keys)if(!n.keys.find(ti.bind(null,s)))return $e(`Absolute path "${n.record.path}" must have the exact same param named "${s.name}" as its parent "${t.record.path}".`)}function zu(n,t){return t.children.some(s=>s===n||zu(n,s))}const xu=/#/g,i_=/&/g,l_=/\//g,r_=/=/g,c_=/\?/g,Tu=/\+/g,u_=/%5B/g,p_=/%5D/g,$u=/%5E/g,d_=/%60/g,Mu=/%7B/g,m_=/%7C/g,Lu=/%7D/g,f_=/%20/g;function Wi(n){return encodeURI(""+n).replace(m_,"|").replace(u_,"[").replace(p_,"]")}function g_(n){return Wi(n).replace(Mu,"{").replace(Lu,"}").replace($u,"^")}function ai(n){return Wi(n).replace(Tu,"%2B").replace(f_,"+").replace(xu,"%23").replace(i_,"%26").replace(d_,"`").replace(Mu,"{").replace(Lu,"}").replace($u,"^")}function h_(n){return ai(n).replace(r_,"%3D")}function __(n){return Wi(n).replace(xu,"%23").replace(c_,"%3F")}function k_(n){return n==null?"":__(n).replace(l_,"%2F")}function ss(n){try{return decodeURIComponent(""+n)}catch{$e(`Error decoding "${n}". Using original value`)}return""+n}function v_(n){const t={};if(n===""||n==="?")return t;const o=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<o.length;++i){const l=o[i].replace(Tu," "),r=l.indexOf("="),c=ss(r<0?l:l.slice(0,r)),u=r<0?null:ss(l.slice(r+1));if(c in t){let p=t[c];yn(p)||(p=t[c]=[p]),p.push(u)}else t[c]=u}return t}function vr(n){let t="";for(let s in n){const o=n[s];if(s=h_(s),o==null){o!==void 0&&(t+=(t.length?"&":"")+s);continue}(yn(o)?o.map(l=>l&&ai(l)):[o&&ai(o)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+s,l!=null&&(t+="="+l))})}return t}function b_(n){const t={};for(const s in n){const o=n[s];o!==void 0&&(t[s]=yn(o)?o.map(i=>i==null?null:""+i):o==null?o:""+o)}return t}const y_=Symbol("router view location matched"),br=Symbol("router view depth"),Di=Symbol("router"),Iu=Symbol("route location"),si=Symbol("router view location");function Ea(){let n=[];function t(o){return n.push(o),()=>{const i=n.indexOf(o);i>-1&&n.splice(i,1)}}function s(){n=[]}return{add:t,list:()=>n,reset:s}}function kt(n,t,s,o,i){const l=o&&(o.enterCallbacks[i]=o.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const u=m=>{m===!1?c(ya(4,{from:s,to:t})):m instanceof Error?c(m):qh(m)?c(ya(2,{from:t,to:m})):(l&&o.enterCallbacks[i]===l&&typeof m=="function"&&l.push(m),r())},p=n.call(o&&o.instances[i],t,s,w_(u,t,s));let d=Promise.resolve(p);if(n.length<3&&(d=d.then(u)),n.length>2){const m=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(f=>u._called?f:($e(m),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){$e(m),c(new Error("Invalid navigation guard"));return}}d.catch(m=>c(m))})}function w_(n,t,s){let o=0;return function(){o++===1&&$e(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,o===1&&n.apply(null,arguments)}}function Mo(n,t,s,o){const i=[];for(const l of n){!l.components&&!l.children.length&&$e(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const r in l.components){let c=l.components[r];{if(!c||typeof c!="object"&&typeof c!="function")throw $e(`Component "${r}" in record with path "${l.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){$e(`Component "${r}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,$e(`Component "${r}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!l.instances[r]))if(z_(c)){const p=(c.__vccOpts||c)[t];p&&i.push(kt(p,s,o,l,r))}else{let u=c();"catch"in u||($e(`Component "${r}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),i.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=wh(p)?p.default:p;l.components[r]=d;const f=(d.__vccOpts||d)[t];return f&&kt(f,s,o,l,r)()}))}}}return i}function z_(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function yr(n){const t=z(Di),s=z(Iu),o=N(()=>t.resolve(x(n.to))),i=N(()=>{const{matched:u}=o.value,{length:p}=u,d=u[p-1],m=s.matched;if(!d||!m.length)return-1;const f=m.findIndex(Et.bind(null,d));if(f>-1)return f;const h=wr(u[p-2]);return p>1&&wr(d)===h&&m[m.length-1].path!==h?m.findIndex(Et.bind(null,u[p-2])):f}),l=N(()=>i.value>-1&&M_(s.params,o.value.params)),r=N(()=>i.value>-1&&i.value===s.matched.length-1&&vu(s.params,o.value.params));function c(u={}){return $_(u)?t[x(n.replace)?"replace":"push"](x(n.to)).catch(Ba):Promise.resolve()}if(st){const u=Zn();if(u){const p={route:o.value,isActive:l.value,isExactActive:r.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),xa(()=>{p.route=o.value,p.isActive=l.value,p.isExactActive=r.value},{flush:"post"})}}return{route:o,href:N(()=>o.value.href),isActive:l,isExactActive:r,navigate:c}}const x_=De({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yr,setup(n,{slots:t}){const s=nn(yr(n)),{options:o}=z(Di),i=N(()=>({[zr(n.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[zr(n.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=t.default&&t.default(s);return n.custom?l:gs("a",{"aria-current":s.isExactActive?n.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:i.value},l)}}}),T_=x_;function $_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function M_(n,t){for(const s in t){const o=t[s],i=n[s];if(typeof o=="string"){if(o!==i)return!1}else if(!yn(i)||i.length!==o.length||o.some((l,r)=>l!==i[r]))return!1}return!0}function wr(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const zr=(n,t,s)=>n??t??s,L_=De({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:s}){E_();const o=z(si),i=N(()=>n.route||o.value),l=z(br,0),r=N(()=>{let p=x(l);const{matched:d}=i.value;let m;for(;(m=d[p])&&!m.components;)p++;return p}),c=N(()=>i.value.matched[r.value]);vn(br,N(()=>r.value+1)),vn(y_,c),vn(si,i);const u=ce();return We(()=>[u.value,c.value,n.name],([p,d,m],[f,h,_])=>{d&&(d.instances[m]=p,h&&h!==d&&p&&p===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),p&&d&&(!h||!Et(d,h)||!f)&&(d.enterCallbacks[m]||[]).forEach(y=>y(p))},{flush:"post"}),()=>{const p=i.value,d=n.name,m=c.value,f=m&&m.components[d];if(!f)return xr(s.default,{Component:f,route:p});const h=m.props[d],_=h?h===!0?p.params:typeof h=="function"?h(p):h:null,w=gs(f,Ie({},_,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(m.instances[d]=null)},ref:u}));if(st&&w.ref){const A={depth:r.value,name:m.name,path:m.path,meta:m.meta};(yn(w.ref)?w.ref.map(P=>P.i):[w.ref.i]).forEach(P=>{P.__vrv_devtools=A})}return xr(s.default,{Component:w,route:p})||w}}});function xr(n,t){if(!n)return null;const s=n(t);return s.length===1?s[0]:s}const I_=L_;function E_(){const n=Zn(),t=n.parent&&n.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const s=t==="KeepAlive"?"keep-alive":"transition";$e(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function Sa(n,t){const s=Ie({},n,{matched:n.matched.map(o=>F_(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:t,value:s}}}function xs(n){return{_custom:{display:n}}}let S_=0;function C_(n,t,s){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=S_++;yh({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},i=>{typeof i.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.on.inspectComponent((d,m)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Sa(t.currentRoute.value,"Current Route")})}),i.on.visitComponentTree(({treeNode:d,componentInstance:m})=>{if(m.__vrv_devtools){const f=m.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Eu})}yn(m.__vrl_devtools)&&(m.__devtoolsApi=i,m.__vrl_devtools.forEach(f=>{let h=Au,_="";f.isExactActive?(h=Cu,_="This is exactly active"):f.isActive&&(h=Su,_="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:_,backgroundColor:h})}))}),We(t.currentRoute,()=>{u(),i.notifyComponentUpdate(),i.sendInspectorTree(c),i.sendInspectorState(c)});const l="router:navigations:"+o;i.addTimelineLayer({id:l,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((d,m)=>{i.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:i.now(),data:{error:d},groupId:m.meta.__navigationId}})});let r=0;t.beforeEach((d,m)=>{const f={guard:xs("beforeEach"),from:Sa(m,"Current Location during this navigation"),to:Sa(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:r++}),i.addTimelineEvent({layerId:l,event:{time:i.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),t.afterEach((d,m,f)=>{const h={guard:xs("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=xs("❌")):h.status=xs("✅"),h.from=Sa(m,"Current Location during this navigation"),h.to=Sa(d,"Target location"),i.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:d.fullPath,time:i.now(),data:h,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+o;i.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let m=s.getRoutes().filter(f=>!f.parent);m.forEach(Ou),d.filter&&(m=m.filter(f=>oi(f,d.filter.toLowerCase()))),m.forEach(f=>Hu(f,t.currentRoute.value)),d.rootNodes=m.map(Pu)}let p;i.on.getInspectorTree(d=>{p=d,d.app===n&&d.inspectorId===c&&u()}),i.on.getInspectorState(d=>{if(d.app===n&&d.inspectorId===c){const f=s.getRoutes().find(h=>h.record.__vd_id===d.nodeId);f&&(d.state={options:P_(f)})}}),i.sendInspectorTree(c),i.sendInspectorState(c)})}function A_(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function P_(n){const{record:t}=n,s=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&s.push({editable:!1,key:"name",value:t.name}),s.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(o=>`${o.name}${A_(o)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),t.redirect!=null&&s.push({editable:!1,key:"redirect",value:t.redirect}),n.alias.length&&s.push({editable:!1,key:"aliases",value:n.alias.map(o=>o.record.path)}),Object.keys(n.record.meta).length&&s.push({editable:!1,key:"meta",value:n.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),s}const Eu=15485081,Su=2450411,Cu=8702998,H_=2282478,Au=16486972,O_=6710886;function Pu(n){const t=[],{record:s}=n;s.name!=null&&t.push({label:String(s.name),textColor:0,backgroundColor:H_}),s.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Au}),n.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Eu}),n.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Cu}),n.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Su}),s.redirect&&t.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:O_});let o=s.__vd_id;return o==null&&(o=String(R_++),s.__vd_id=o),{id:o,label:s.path,tags:t,children:n.children.map(Pu)}}let R_=0;const N_=/^\/(.*)\/([a-z]*)$/;function Hu(n,t){const s=t.matched.length&&Et(t.matched[t.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=s,s||(n.__vd_active=t.matched.some(o=>Et(o,n.record))),n.children.forEach(o=>Hu(o,t))}function Ou(n){n.__vd_match=!1,n.children.forEach(Ou)}function oi(n,t){const s=String(n.re).match(N_);if(n.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(t))return n.children.forEach(r=>oi(r,t)),n.record.path!=="/"||t==="/"?(n.__vd_match=n.re.test(t),!0):!1;const i=n.record.path.toLowerCase(),l=ss(i);return!t.startsWith("/")&&(l.includes(t)||i.includes(t))||l.startsWith(t)||i.startsWith(t)||n.record.name&&String(n.record.name).includes(t)?!0:n.children.some(r=>oi(r,t))}function F_(n,t){const s={};for(const o in n)t.includes(o)||(s[o]=n[o]);return s}function q_(n){const t=Xh(n.routes,n),s=n.parseQuery||v_,o=n.stringifyQuery||vr,i=n.history;if(!i)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Ea(),r=Ea(),c=Ea(),u=Qn(ft);let p=ft;st&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=To.bind(null,S=>""+S),m=To.bind(null,k_),f=To.bind(null,ss);function h(S,ne){let J,ae;return yu(S)?(J=t.getRecordMatcher(S),ae=ne):ae=S,t.addRoute(ae,J)}function _(S){const ne=t.getRecordMatcher(S);ne?t.removeRoute(ne):$e(`Cannot remove non-existent route "${String(S)}"`)}function y(){return t.getRoutes().map(S=>S.record)}function w(S){return!!t.getRecordMatcher(S)}function A(S,ne){if(ne=Ie({},ne||u.value),typeof S=="string"){const me=$o(s,S,ne.path),g=t.resolve({path:me.path},ne),b=i.createHref(me.fullPath);return b.startsWith("//")?$e(`Location "${S}" resolved to "${b}". A resolved location cannot start with multiple slashes.`):g.matched.length||$e(`No match found for location with path "${S}"`),Ie(me,g,{params:f(g.params),hash:ss(me.hash),redirectedFrom:void 0,href:b})}let J;if("path"in S)"params"in S&&!("name"in S)&&Object.keys(S.params).length&&$e(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),J=Ie({},S,{path:$o(s,S.path,ne.path).path});else{const me=Ie({},S.params);for(const g in me)me[g]==null&&delete me[g];J=Ie({},S,{params:m(S.params)}),ne.params=m(ne.params)}const ae=t.resolve(J,ne),ye=S.hash||"";ye&&!ye.startsWith("#")&&$e(`A \`hash\` should always start with the character "#". Replace "${ye}" with "#${ye}".`),ae.params=d(f(ae.params));const Te=Th(o,Ie({},S,{hash:g_(ye),path:ae.path})),_e=i.createHref(Te);return _e.startsWith("//")?$e(`Location "${S}" resolved to "${_e}". A resolved location cannot start with multiple slashes.`):ae.matched.length||$e(`No match found for location with path "${"path"in S?S.path:S}"`),Ie({fullPath:Te,hash:ye,query:o===vr?b_(S.query):S.query||{}},ae,{redirectedFrom:void 0,href:_e})}function I(S){return typeof S=="string"?$o(s,S,u.value.path):Ie({},S)}function P(S,ne){if(p!==S)return ya(8,{from:ne,to:S})}function O(S){return K(S)}function G(S){return O(Ie(I(S),{replace:!0}))}function Q(S){const ne=S.matched[S.matched.length-1];if(ne&&ne.redirect){const{redirect:J}=ne;let ae=typeof J=="function"?J(S):J;if(typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=I(ae):{path:ae},ae.params={}),!("path"in ae)&&!("name"in ae))throw $e(`Invalid redirect found:
${JSON.stringify(ae,null,2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ie({query:S.query,hash:S.hash,params:"path"in ae?{}:S.params},ae)}}function K(S,ne){const J=p=A(S),ae=u.value,ye=S.state,Te=S.force,_e=S.replace===!0,me=Q(J);if(me)return K(Ie(I(me),{state:typeof me=="object"?Ie({},ye,me.state):ye,force:Te,replace:_e}),ne||J);const g=J;g.redirectedFrom=ne;let b;return!Te&&cr(o,ae,J)&&(b=ya(16,{to:g,from:ae}),Pe(ae,ae,!0,!1)),(b?Promise.resolve(b):se(g,ae)).catch($=>Xn($)?Xn($,2)?$:ve($):ee($,g,ae)).then($=>{if($){if(Xn($,2))return cr(o,A($.to),g)&&ne&&(ne._count=ne._count?ne._count+1:1)>10?($e(`Detected an infinite redirection in a navigation guard when going from "${ae.fullPath}" to "${g.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):K(Ie({replace:_e},I($.to),{state:typeof $.to=="object"?Ie({},ye,$.to.state):ye,force:Te}),ne||g)}else $=fe(g,ae,!0,_e,ye);return re(g,ae,$),$})}function U(S,ne){const J=P(S,ne);return J?Promise.reject(J):Promise.resolve()}function se(S,ne){let J;const[ae,ye,Te]=W_(S,ne);J=Mo(ae.reverse(),"beforeRouteLeave",S,ne);for(const me of ae)me.leaveGuards.forEach(g=>{J.push(kt(g,S,ne))});const _e=U.bind(null,S,ne);return J.push(_e),ia(J).then(()=>{J=[];for(const me of l.list())J.push(kt(me,S,ne));return J.push(_e),ia(J)}).then(()=>{J=Mo(ye,"beforeRouteUpdate",S,ne);for(const me of ye)me.updateGuards.forEach(g=>{J.push(kt(g,S,ne))});return J.push(_e),ia(J)}).then(()=>{J=[];for(const me of S.matched)if(me.beforeEnter&&!ne.matched.includes(me))if(yn(me.beforeEnter))for(const g of me.beforeEnter)J.push(kt(g,S,ne));else J.push(kt(me.beforeEnter,S,ne));return J.push(_e),ia(J)}).then(()=>(S.matched.forEach(me=>me.enterCallbacks={}),J=Mo(Te,"beforeRouteEnter",S,ne),J.push(_e),ia(J))).then(()=>{J=[];for(const me of r.list())J.push(kt(me,S,ne));return J.push(_e),ia(J)}).catch(me=>Xn(me,8)?me:Promise.reject(me))}function re(S,ne,J){for(const ae of c.list())ae(S,ne,J)}function fe(S,ne,J,ae,ye){const Te=P(S,ne);if(Te)return Te;const _e=ne===ft,me=st?history.state:{};J&&(ae||_e?i.replace(S.fullPath,Ie({scroll:_e&&me&&me.scroll},ye)):i.push(S.fullPath,ye)),u.value=S,Pe(S,ne,J,_e),ve()}let X;function ze(){X||(X=i.listen((S,ne,J)=>{if(!pt.listening)return;const ae=A(S),ye=Q(ae);if(ye){K(Ie(ye,{replace:!0}),ae).catch(Ba);return}p=ae;const Te=u.value;st&&Ah(pr(Te.fullPath,J.delta),mo()),se(ae,Te).catch(_e=>Xn(_e,12)?_e:Xn(_e,2)?(K(_e.to,ae).then(me=>{Xn(me,20)&&!J.delta&&J.type===as.pop&&i.go(-1,!1)}).catch(Ba),Promise.reject()):(J.delta&&i.go(-J.delta,!1),ee(_e,ae,Te))).then(_e=>{_e=_e||fe(ae,Te,!1),_e&&(J.delta&&!Xn(_e,8)?i.go(-J.delta,!1):J.type===as.pop&&Xn(_e,20)&&i.go(-1,!1)),re(ae,Te,_e)}).catch(Ba)}))}let Re=Ea(),Le=Ea(),Ne;function ee(S,ne,J){ve(S);const ae=Le.list();return ae.length?ae.forEach(ye=>ye(S,ne,J)):($e("uncaught error during route navigation:"),console.error(S)),Promise.reject(S)}function de(){return Ne&&u.value!==ft?Promise.resolve():new Promise((S,ne)=>{Re.add([S,ne])})}function ve(S){return Ne||(Ne=!S,ze(),Re.list().forEach(([ne,J])=>S?J(S):ne()),Re.reset()),S}function Pe(S,ne,J,ae){const{scrollBehavior:ye}=n;if(!st||!ye)return Promise.resolve();const Te=!J&&Ph(pr(S.fullPath,0))||(ae||!J)&&history.state&&history.state.scroll||null;return On().then(()=>ye(S,ne,Te)).then(_e=>_e&&Ch(_e)).catch(_e=>ee(_e,S,ne))}const hn=S=>i.go(S);let tn;const mn=new Set,pt={currentRoute:u,listening:!0,addRoute:h,removeRoute:_,hasRoute:w,getRoutes:y,resolve:A,options:n,push:O,replace:G,go:hn,back:()=>hn(-1),forward:()=>hn(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:Le.add,isReady:de,install(S){const ne=this;S.component("RouterLink",T_),S.component("RouterView",I_),S.config.globalProperties.$router=ne,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>x(u)}),st&&!tn&&u.value===ft&&(tn=!0,O(i.location).catch(ye=>{$e("Unexpected error when starting the router:",ye)}));const J={};for(const ye in ft)J[ye]=N(()=>u.value[ye]);S.provide(Di,ne),S.provide(Iu,nn(J)),S.provide(si,u);const ae=S.unmount;mn.add(S),S.unmount=function(){mn.delete(S),mn.size<1&&(p=ft,X&&X(),X=null,u.value=ft,tn=!1,Ne=!1),ae()},st&&C_(S,ne,t)}};return pt}function ia(n){return n.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function W_(n,t){const s=[],o=[],i=[],l=Math.max(t.matched.length,n.matched.length);for(let r=0;r<l;r++){const c=t.matched[r];c&&(n.matched.find(p=>Et(p,c))?o.push(c):s.push(c));const u=n.matched[r];u&&(t.matched.find(p=>Et(p,u))||i.push(u))}return[s,o,i]}const Lo=ce(!1),Va=ce(!1),ma=ce(!1),D_=ce(!0),ii=Lg({xs:460,...zg}),Vt=mh(),Ru=nh(),j_=N(()=>Vt.height.value-Vt.width.value/xt>180),Nu=Xg(Nn?document.body:null),ka=wg(),U_=N(()=>{var n,t;return["INPUT","TEXTAREA"].includes(((n=ka.value)==null?void 0:n.tagName)||"")||((t=ka.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),B_=N(()=>{var n;return["BUTTON","A"].includes(((n=ka.value)==null?void 0:n.tagName)||"")});qn("slidev-camera","default");qn("slidev-mic","default");const Ss=qn("slidev-scale",0),rn=qn("slidev-show-overview",!1),Io=qn("slidev-presenter-cursor",!0),Tr=qn("slidev-show-editor",!1);qn("slidev-editor-width",Nn?window.innerWidth*.4:100);const Fu=fu(rn);function $r(n,t,s,o=i=>i){return n*o(.5-t*(.5-s))}function K_(n){return[-n[0],-n[1]]}function Cn(n,t){return[n[0]+t[0],n[1]+t[1]]}function xn(n,t){return[n[0]-t[0],n[1]-t[1]]}function Sn(n,t){return[n[0]*t,n[1]*t]}function V_(n,t){return[n[0]/t,n[1]/t]}function Ca(n){return[n[1],-n[0]]}function Mr(n,t){return n[0]*t[0]+n[1]*t[1]}function G_(n,t){return n[0]===t[0]&&n[1]===t[1]}function Q_(n){return Math.hypot(n[0],n[1])}function Y_(n){return n[0]*n[0]+n[1]*n[1]}function Lr(n,t){return Y_(xn(n,t))}function qu(n){return V_(n,Q_(n))}function J_(n,t){return Math.hypot(n[1]-t[1],n[0]-t[0])}function Aa(n,t,s){let o=Math.sin(s),i=Math.cos(s),l=n[0]-t[0],r=n[1]-t[1],c=l*i-r*o,u=l*o+r*i;return[c+t[0],u+t[1]]}function li(n,t,s){return Cn(n,Sn(xn(t,n),s))}function Ir(n,t,s){return Cn(n,Sn(t,s))}var{min:la,PI:Z_}=Math,Er=.275,Pa=Z_+1e-4;function X_(n,t={}){let{size:s=16,smoothing:o=.5,thinning:i=.5,simulatePressure:l=!0,easing:r=ee=>ee,start:c={},end:u={},last:p=!1}=t,{cap:d=!0,easing:m=ee=>ee*(2-ee)}=c,{cap:f=!0,easing:h=ee=>--ee*ee*ee+1}=u;if(n.length===0||s<=0)return[];let _=n[n.length-1].runningLength,y=c.taper===!1?0:c.taper===!0?Math.max(s,_):c.taper,w=u.taper===!1?0:u.taper===!0?Math.max(s,_):u.taper,A=Math.pow(s*o,2),I=[],P=[],O=n.slice(0,10).reduce((ee,de)=>{let ve=de.pressure;if(l){let Pe=la(1,de.distance/s),hn=la(1,1-Pe);ve=la(1,ee+(hn-ee)*(Pe*Er))}return(ee+ve)/2},n[0].pressure),G=$r(s,i,n[n.length-1].pressure,r),Q,K=n[0].vector,U=n[0].point,se=U,re=U,fe=se,X=!1;for(let ee=0;ee<n.length;ee++){let{pressure:de}=n[ee],{point:ve,vector:Pe,distance:hn,runningLength:tn}=n[ee];if(ee<n.length-1&&_-tn<3)continue;if(i){if(l){let Te=la(1,hn/s),_e=la(1,1-Te);de=la(1,O+(_e-O)*(Te*Er))}G=$r(s,i,de,r)}else G=s/2;Q===void 0&&(Q=G);let mn=tn<y?m(tn/y):1,pt=_-tn<w?h((_-tn)/w):1;G=Math.max(.01,G*Math.min(mn,pt));let S=(ee<n.length-1?n[ee+1]:n[ee]).vector,ne=ee<n.length-1?Mr(Pe,S):1,J=Mr(Pe,K)<0&&!X,ae=ne!==null&&ne<0;if(J||ae){let Te=Sn(Ca(K),G);for(let _e=1/13,me=0;me<=1;me+=_e)re=Aa(xn(ve,Te),ve,Pa*me),I.push(re),fe=Aa(Cn(ve,Te),ve,Pa*-me),P.push(fe);U=re,se=fe,ae&&(X=!0);continue}if(X=!1,ee===n.length-1){let Te=Sn(Ca(Pe),G);I.push(xn(ve,Te)),P.push(Cn(ve,Te));continue}let ye=Sn(Ca(li(S,Pe,ne)),G);re=xn(ve,ye),(ee<=1||Lr(U,re)>A)&&(I.push(re),U=re),fe=Cn(ve,ye),(ee<=1||Lr(se,fe)>A)&&(P.push(fe),se=fe),O=de,K=Pe}let ze=n[0].point.slice(0,2),Re=n.length>1?n[n.length-1].point.slice(0,2):Cn(n[0].point,[1,1]),Le=[],Ne=[];if(n.length===1){if(!(y||w)||p){let ee=Ir(ze,qu(Ca(xn(ze,Re))),-(Q||G)),de=[];for(let ve=1/13,Pe=ve;Pe<=1;Pe+=ve)de.push(Aa(ee,ze,Pa*2*Pe));return de}}else{if(!(y||w&&n.length===1))if(d)for(let de=1/13,ve=de;ve<=1;ve+=de){let Pe=Aa(P[0],ze,Pa*ve);Le.push(Pe)}else{let de=xn(I[0],P[0]),ve=Sn(de,.5),Pe=Sn(de,.51);Le.push(xn(ze,ve),xn(ze,Pe),Cn(ze,Pe),Cn(ze,ve))}let ee=Ca(K_(n[n.length-1].vector));if(w||y&&n.length===1)Ne.push(Re);else if(f){let de=Ir(Re,ee,G);for(let ve=1/29,Pe=ve;Pe<1;Pe+=ve)Ne.push(Aa(de,Re,Pa*3*Pe))}else Ne.push(Cn(Re,Sn(ee,G)),Cn(Re,Sn(ee,G*.99)),xn(Re,Sn(ee,G*.99)),xn(Re,Sn(ee,G)))}return I.concat(Ne,P.reverse(),Le)}function ek(n,t={}){var s;let{streamline:o=.5,size:i=16,last:l=!1}=t;if(n.length===0)return[];let r=.15+(1-o)*.85,c=Array.isArray(n[0])?n:n.map(({x:h,y:_,pressure:y=.5})=>[h,_,y]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let _=1;_<5;_++)c.push(li(c[0],h,_/4))}c.length===1&&(c=[...c,[...Cn(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,m=u[0],f=c.length-1;for(let h=1;h<c.length;h++){let _=l&&h===f?c[h].slice(0,2):li(m.point,c[h],r);if(G_(m.point,_))continue;let y=J_(_,m.point);if(d+=y,h<f&&!p){if(d<i)continue;p=!0}m={point:_,pressure:c[h][2]>=0?c[h][2]:.5,vector:qu(xn(m.point,_)),distance:y,runningLength:d},u.push(m)}return u[0].vector=((s=u[1])==null?void 0:s.vector)||[0,0],u}function nk(n,t={}){return X_(ek(n,t),t)}var tk=()=>({events:{},emit(n,...t){let s=this.events[n]||[];for(let o=0,i=s.length;o<i;o++)s[o](...t)},on(n,t){var s;return(s=this.events[n])!=null&&s.push(t)||(this.events[n]=[t]),()=>{var o;this.events[n]=(o=this.events[n])==null?void 0:o.filter(i=>t!==i)}}});function Ks(n,t){return n-t}function ak(n){return n<0?-1:1}function Vs(n){return[Math.abs(n),ak(n)]}function Wu(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var sk=2,ot=sk,Ta=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var t;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-i.left)*o,y:(n.pageY-i.top)*o,pressure:n.pressure}}else{const i=this.drauu.svgPoint;i.x=n.clientX,i.y=n.clientY;const l=i.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*o,y:l.y*o,pressure:n.pressure}}}createElement(n,t){const s=document.createElementNS("http://www.w3.org/2000/svg",n),o=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(n,t){this.el.setAttribute(n,typeof t=="string"?t:t.toFixed(ot))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},ok=class extends Ta{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const t=nk(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((o,[i,l],r,c)=>{const[u,p]=c[(r+1)%c.length];return o.push(i,l,(i+u)/2,(l+p)/2),o},["M",...t[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},ik=class extends Ta{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,s]=Vs(n.x-this.start.x),[o,i]=Vs(n.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[l,r]=[this.start.x,this.start.x+t*s].sort(Ks),[c,u]=[this.start.y,this.start.y+o*i].sort(Ks);this.attr("cx",(l+r)/2),this.attr("cy",(c+u)/2),this.attr("rx",(r-l)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function Du(n,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",t),o.setAttribute("id",n),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(i),s.appendChild(o),s}var lk=class extends Ta{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const t=Wu(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Du(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(n){if(!this.el)return!1;let{x:t,y:s}=n;if(this.shiftPressed){const o=n.x-this.start.x,i=n.y-this.start.y;if(i!==0){let l=o/i;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+i*l,s=this.start.y+i):(t=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},rk=class extends Ta{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,s]=Vs(n.x-this.start.x),[o,i]=Vs(n.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[l,r]=[this.start.x,this.start.x+t*s].sort(Ks),[c,u]=[this.start.y,this.start.y+o*i].sort(Ks);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",u-c)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function ck(n,t){const s=n.x-t.x,o=n.y-t.y;return s*s+o*o}function uk(n,t,s){let o=t.x,i=t.y,l=s.x-o,r=s.y-i;if(l!==0||r!==0){const c=((n.x-o)*l+(n.y-i)*r)/(l*l+r*r);c>1?(o=s.x,i=s.y):c>0&&(o+=l*c,i+=r*c)}return l=n.x-o,r=n.y-i,l*l+r*r}function pk(n,t){let s=n[0];const o=[s];let i;for(let l=1,r=n.length;l<r;l++)i=n[l],ck(i,s)>t&&(o.push(i),s=i);return s!==i&&i&&o.push(i),o}function ri(n,t,s,o,i){let l=o,r=0;for(let c=t+1;c<s;c++){const u=uk(n[c],n[t],n[s]);u>l&&(r=c,l=u)}l>o&&(r-t>1&&ri(n,t,r,o,i),i.push(n[r]),s-r>1&&ri(n,r,s,o,i))}function dk(n,t){const s=n.length-1,o=[n[0]];return ri(n,0,s,t,o),o.push(n[s]),o}function Sr(n,t,s=!1){if(n.length<=2)return n;const o=t!==void 0?t*t:1;return n=s?n:pk(n,o),n=dk(n,o),n}var mk=class extends Ta{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=Wu();const t=Du(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=Sr(this.points,1,!0),this.count=0),this.attr("d",Ar(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",Ar(Sr(this.points,1,!0))),!n.getTotalLength()))}};function fk(n,t){const s=t.x-n.x,o=t.y-n.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Cr(n,t,s,o){const i=t||n,l=s||n,r=.2,c=fk(i,l),u=c.angle+(o?Math.PI:0),p=c.length*r,d=n.x+Math.cos(u)*p,m=n.y+Math.sin(u)*p;return{x:d,y:m}}function gk(n,t,s){const o=Cr(s[t-1],s[t-2],n),i=Cr(n,s[t-1],s[t+1],!0);return`C ${o.x.toFixed(ot)},${o.y.toFixed(ot)} ${i.x.toFixed(ot)},${i.y.toFixed(ot)} ${n.x.toFixed(ot)},${n.y.toFixed(ot)}`}function Ar(n){return n.reduce((t,s,o,i)=>o===0?`M ${s.x.toFixed(ot)},${s.y.toFixed(ot)}`:`${t} ${gk(s,o,i)}`,"")}var hk=class extends Ta{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const t=(s,o)=>{if(s&&s.length)for(let i=0;i<s.length;i++){const l=s[i];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=l.getPointAtLength(r*c/this.pathSubFactor),p=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:o||l})}}else l.children&&t(l.children,l)}};n&&t(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),n.push(t))}return n.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!n.includes(s))),n.length>0}lineLineIntersect(n,t){const s=n.x1,o=n.x2,i=t.x1,l=t.x2,r=n.y1,c=n.y2,u=t.y1,p=t.y2,d=(s-o)*(u-p)-(r-c)*(i-l),m=(s*c-r*o)*(i-l)-(s-o)*(i*p-u*l),f=(s*c-r*o)*(u-p)-(r-c)*(i*p-u*l),h=(_,y,w)=>_>=y&&_<=w?!0:_>=w&&_<=y;if(d===0)return!1;{const _={x:m/d,y:f/d};return h(_.x,s,o)&&h(_.y,r,c)&&h(_.x,i,l)&&h(_.y,u,p)}}};function _k(n){return{draw:new mk(n),stylus:new ok(n),line:new lk(n),rectangle:new rk(n),ellipse:new ik(n),eraseLine:new hk(n)}}var kk=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=tk(),this._models=_k(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),i=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,t){return this._emitter.on(n,t)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const t=this.model._eventUp(n);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function vk(n){return new kk(n)}const ci=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Vn=qn("slidev-drawing-enabled",!1),iA=qn("slidev-drawing-pinned",!1),bk=ce(!1),yk=ce(!1),wk=ce(!1),os=ce(!1),qt=Yf(qn("slidev-drawing-brush",{color:ci[0],size:4,mode:"stylus"})),Pr=ce("stylus"),ju=N(()=>Ce.drawings.syncAll||Pn.value);let is=!1;const Ha=N({get(){return Pr.value},set(n){Pr.value=n,n==="arrow"?(qt.mode="line",qt.arrowEnd=!0):(qt.mode=n,qt.arrowEnd=!1)}}),zk=nn({brush:qt,acceptsInputTypes:N(()=>Vn.value&&(!Ce.drawings.presenterOnly||Pn.value)?void 0:["pen"]),coordinateTransform:!1}),dn=yi(vk(zk));function xk(){dn.clear(),ju.value&&uu(Ye.value,"")}function ji(){var n;yk.value=dn.canRedo(),bk.value=dn.canUndo(),wk.value=!!((n=dn.el)!=null&&n.children.length)}function Tk(n){is=!0;const t=Us[n||Ye.value];t!=null?dn.load(t):dn.clear(),ji(),is=!1}dn.on("changed",()=>{if(ji(),!is){const n=dn.dump(),t=Ye.value;(Us[t]||"")!==n&&ju.value&&uu(t,dn.dump())}});qf(n=>{is=!0,n[Ye.value]!=null&&dn.load(n[Ye.value]||""),is=!1,ji()});On(()=>{We(Ye,()=>{dn.mounted&&Tk()},{immediate:!0})});dn.on("start",()=>os.value=!0);dn.on("end",()=>os.value=!1);window.addEventListener("keydown",n=>{if(!Vn.value)return;const t=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let s=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?dn.redo():dn.undo():n.code==="Escape"?Vn.value=!1:n.code==="KeyL"&&t?Ha.value="line":n.code==="KeyA"&&t?Ha.value="arrow":n.code==="KeyS"&&t?Ha.value="stylus":n.code==="KeyR"&&t?Ha.value="rectangle":n.code==="KeyE"&&t?Ha.value="ellipse":n.code==="KeyC"&&t?xk():n.code.startsWith("Digit")&&t&&+n.code[5]<=ci.length?qt.color=ci[+n.code[5]-1]:s=!1,s&&(n.preventDefault(),n.stopPropagation())},!1);function Ge(...n){return N(()=>n.every(t=>pn(t)))}function _n(n){return N(()=>!pn(n))}const Hr=Fg(),Eo=qn("slidev-color-schema","auto"),ui=N(()=>Ce.colorSchema!=="auto"),Ui=N({get(){return ui.value?Ce.colorSchema==="dark":Eo.value==="auto"?Hr.value:Eo.value==="dark"},set(n){ui.value||(Eo.value=n===Hr.value?"auto":n?"dark":"light")}}),Uu=fu(Ui);Nn&&We(Ui,n=>{const t=document.querySelector("html");t.classList.toggle("dark",n),t.classList.toggle("light",!n)},{immediate:!0});const Cs=ce(1),As=N(()=>Ve.length-1),bn=ce(0),Bi=ce(0);function $k(){bn.value>Cs.value&&(bn.value-=1)}function Mk(){bn.value<As.value&&(bn.value+=1)}function Lk(){if(bn.value>Cs.value){let n=bn.value-Bi.value;n<Cs.value&&(n=Cs.value),bn.value=n}}function Ik(){if(bn.value<As.value){let n=bn.value+Bi.value;n>As.value&&(n=As.value),bn.value=n}}function Ek(){const{escape:n,space:t,shift:s,left:o,right:i,up:l,down:r,enter:c,d:u,g:p,o:d}=Ru;let m=[{name:"next_space",key:Ge(t,_n(s)),fn:Gt,autoRepeat:!0},{name:"prev_space",key:Ge(t,s),fn:Qt,autoRepeat:!0},{name:"next_right",key:Ge(i,_n(s),_n(rn)),fn:Gt,autoRepeat:!0},{name:"prev_left",key:Ge(o,_n(s),_n(rn)),fn:Qt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Gt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Qt,autoRepeat:!0},{name:"next_down",key:Ge(r,_n(rn)),fn:Qs,autoRepeat:!0},{name:"prev_up",key:Ge(l,_n(rn)),fn:()=>Ys(!1),autoRepeat:!0},{name:"next_shift",key:Ge(i,s),fn:Qs,autoRepeat:!0},{name:"prev_shift",key:Ge(o,s),fn:()=>Ys(!1),autoRepeat:!0},{name:"toggle_dark",key:Ge(u,_n(Vn)),fn:Uu},{name:"toggle_overview",key:Ge(d,_n(Vn)),fn:Fu},{name:"hide_overview",key:Ge(n,_n(Vn)),fn:()=>rn.value=!1},{name:"goto",key:Ge(p,_n(Vn)),fn:()=>ma.value=!ma.value},{name:"next_overview",key:Ge(i,rn),fn:Mk},{name:"prev_overview",key:Ge(o,rn),fn:$k},{name:"up_overview",key:Ge(l,rn),fn:Lk},{name:"down_overview",key:Ge(r,rn),fn:Ik},{name:"goto_from_overview",key:Ge(c,rn),fn:()=>{za(bn.value),rn.value=!1}}];const f=new Set(m.map(_=>_.name));if(m.filter(_=>_.name&&f.has(_.name)).length===0){const _=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(_),console.warn(_)}return m}const Bu=Ge(_n(U_),_n(B_),D_);function Sk(n,t,s=!1){typeof n=="string"&&(n=Ru[n]);const o=Ge(n,Bu);let i=0,l;const r=()=>{if(clearTimeout(l),!o.value){i=0;return}s&&(l=setTimeout(r,Math.max(1e3-i*250,150)),i++),t()};return We(o,r,{flush:"sync"})}function Ck(n,t){return yg(n,s=>{Bu.value&&(s.repeat||t())})}function Ak(){const n=Ek();new Map(n.map(s=>[s.key,s])).forEach(s=>{s.fn&&Sk(s.key,s.fn,s.autoRepeat)}),Ck("f",()=>Nu.toggle())}const Pk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hk=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Ok=[Hk];function Rk(n,t){return k(),te("svg",Pk,Ok)}const Nk={name:"carbon-close",render:Rk};function Ki(n,t=""){var i,l;const s=["slidev-page",t],o=(l=(i=n==null?void 0:n.meta)==null?void 0:i.slide)==null?void 0:l.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const Fk=De({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const t=n;z(M);const s=ce(),o=Zg(s),i=N(()=>t.width?t.width:o.width.value),l=N(()=>t.width?t.width/xt:o.height.value);t.width&&xa(()=>{s.value&&(s.value.style.width=`${i.value}px`,s.value.style.height=`${l.value}px`)});const r=N(()=>i.value/l.value),c=N(()=>t.scale&&!wa.value?t.scale:r.value<xt?i.value/Tt:l.value*xt/Tt),u=N(()=>({height:`${Ni}px`,width:`${Tt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=N(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return vn(ru,c),(d,m)=>(k(),te("div",{id:"slide-container",ref_key:"root",ref:s,class:Be(x(p))},[e("div",{id:"slide-content",style:en(x(u))},[Yn(d.$slots,"default")],4),Yn(d.$slots,"controls")],2))}});const L=(n,t)=>{const s=n.__vccOpts||n;for(const[o,i]of t)s[o]=i;return s},Ku=L(Fk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Vi=De({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:t}){const s=Kn(n,"clicks",t),o=Kn(n,"clicksElements",t),i=Kn(n,"clicksDisabled",t),l=Kn(n,"clicksOrderMap",t);o.value.length=0,vn(If,n.route),vn(Ef,n.context),vn(ou,s),vn(lu,i),vn(iu,o),vn(Lf,l)},render(){var n,t;return this.$props.is?gs(this.$props.is):(t=(n=this.$slots)==null?void 0:n.default)==null?void 0:t.call(n)}}),qk=["innerHTML"],Wk=De({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return z(M),(t,s)=>x(Us)[n.page]?(k(),te("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:x(Us)[n.page]},null,8,qk)):be("v-if",!0)}}),Vu=L(Wk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Dk=Object.freeze(Object.defineProperty({__proto__:null,default:Vu},Symbol.toStringTag,{value:"Module"})),jk={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Uk=["onClick"],Bk=De({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:t}){const s=n;z(M);const o=Kn(s,"modelValue",t);function i(){o.value=!1}function l(h){za(h),i()}function r(h){return h===bn.value}const c=ii.smaller("xs"),u=ii.smaller("sm"),p=4*16*2,d=2*16,m=N(()=>c.value?Vt.width.value-p:u.value?(Vt.width.value-p-d)/2:300),f=N(()=>Math.floor((Vt.width.value-p)/(m.value+d)));return xa(()=>{bn.value=Ye.value,Bi.value=f.value}),(h,_)=>{const y=Nk;return k(),te(Ee,null,[Ai(e("div",jk,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:en(`grid-template-columns: repeat(auto-fit,minmax(${x(m)}px,1fr))`)},[(k(!0),te(Ee,null,ms(x(Ve).slice(0,-1),(w,A)=>(k(),te("div",{key:w.path,class:"relative"},[e("div",{class:Be(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(A+1),"border-gray-400":!r(A+1)}]),style:en(x(Fi)),onClick:I=>l(+w.path)},[(k(),T(Ku,{key:w.path,width:x(m),"clicks-disabled":!0,class:"pointer-events-none"},{default:v(()=>[E(x(Vi),{is:w==null?void 0:w.component,"clicks-disabled":!0,class:Be(x(Ki)(w)),route:w,context:"overview"},null,8,["is","class","route"]),E(Vu,{page:+w.path},null,8,["page"])]),_:2},1032,["width"]))],14,Uk),e("div",{class:"absolute top-0 opacity-50",style:en(`left: ${x(m)+5}px`)},Tn(A+1),5)]))),128))],4)],512),[[su,x(o)]]),x(o)?(k(),te("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:i},[E(y)])):be("v-if",!0)],64)}}});const Kk=L(Bk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Vk="/TPSI/4/html/assets/logo-b72bde5d.png",Gk={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Qk=De({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:t}){const s=n;z(M);const o=Kn(s,"modelValue",t);function i(){o.value=!1}return(l,r)=>(k(),T(Sc,null,[x(o)?(k(),te("div",Gk,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>i())}),e("div",{class:Be(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Yn(l.$slots,"default")],2)])):be("v-if",!0)],1024))}}),Yk=L(Qk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),Jk={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Zk=["innerHTML"],Xk=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Vk,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),a("dev ")])])],-1),ev=De({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:t}){const s=n;z(M);const o=Kn(s,"modelValue",t),i=N(()=>typeof Ce.info=="string");return(l,r)=>(k(),T(Yk,{modelValue:x(o),"onUpdate:modelValue":r[0]||(r[0]=c=>Me(o)?o.value=c:null),class:"px-6 py-4"},{default:v(()=>[e("div",Jk,[x(i)?(k(),te("div",{key:0,class:"mb-4",innerHTML:x(Ce).info},null,8,Zk)):be("v-if",!0),Xk])]),_:1},8,["modelValue"]))}});const nv=L(ev,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]),tv=["disabled","onKeydown"],av=De({__name:"Goto",setup(n){z(M);const t=ce(),s=ce(""),o=N(()=>{if(s.value.startsWith("/"))return!!Ve.find(r=>r.path===s.value.substring(1));{const r=+s.value;return!isNaN(r)&&r>0&&r<=lp.value}});function i(){o.value&&(s.value.startsWith("/")?za(s.value.substring(1)):za(+s.value)),l()}function l(){ma.value=!1}return We(ma,async r=>{var c,u;r?(await On(),s.value="",(c=t.value)==null||c.focus()):(u=t.value)==null||u.blur()}),We(s,r=>{r.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(r,c)=>(k(),te("div",{id:"slidev-goto-dialog",class:Be(["fixed right-5 bg-main transform transition-all",x(ma)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ai(e("input",{ref_key:"input",ref:t,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),type:"text",disabled:!x(ma),class:Be(["outline-none bg-transparent",{"text-red-400":!x(o)&&s.value}]),placeholder:"Goto...",onKeydown:[Wl(i,["enter"]),Wl(l,["escape"])],onBlur:l},null,42,tv),[[bf,s.value]])],2))}}),sv=L(av,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),ov=De({__name:"Controls",setup(n){z(M);const t=Qn(),s=Qn();return(o,i)=>(k(),te(Ee,null,[E(Kk,{modelValue:x(rn),"onUpdate:modelValue":i[0]||(i[0]=l=>Me(rn)?rn.value=l:null)},null,8,["modelValue"]),E(sv),x(t)?(k(),T(x(t),{key:0})):be("v-if",!0),x(s)?(k(),T(x(s),{key:1,modelValue:x(Lo),"onUpdate:modelValue":i[1]||(i[1]=l=>Me(Lo)?Lo.value=l:null)},null,8,["modelValue"])):be("v-if",!0),x(Ce).info?(k(),T(nv,{key:2,modelValue:x(Va),"onUpdate:modelValue":i[2]||(i[2]=l=>Me(Va)?Va.value=l:null)},null,8,["modelValue"])):be("v-if",!0)],64))}}),iv=L(ov,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),lv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rv=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),cv=[rv];function uv(n,t){return k(),te("svg",lv,cv)}const pv={name:"carbon-settings-adjust",render:uv},dv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mv=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),fv=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),gv=[mv,fv];function hv(n,t){return k(),te("svg",dv,gv)}const _v={name:"carbon-information",render:hv},kv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vv=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),bv=[vv];function yv(n,t){return k(),te("svg",kv,bv)}const wv={name:"carbon-download",render:yv},zv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xv=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Tv=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),$v=[xv,Tv];function Mv(n,t){return k(),te("svg",zv,$v)}const Lv={name:"carbon-user-speaker",render:Mv},Iv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ev=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Sv=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Cv=[Ev,Sv];function Av(n,t){return k(),te("svg",Iv,Cv)}const Pv={name:"carbon-presentation-file",render:Av},Hv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ov=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Rv=[Ov];function Nv(n,t){return k(),te("svg",Hv,Rv)}const Fv={name:"carbon-pen",render:Nv},qv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Wv=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Dv=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),jv=[Wv,Dv];function Uv(n,t){return k(),te("svg",qv,jv)}const Bv={name:"ph-cursor-duotone",render:Uv},Kv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Vv=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Gv=[Vv];function Qv(n,t){return k(),te("svg",Kv,Gv)}const Gu={name:"ph-cursor-fill",render:Qv},Yv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jv=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Zv=[Jv];function Xv(n,t){return k(),te("svg",Yv,Zv)}const e1={name:"carbon-sun",render:Xv},n1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t1=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),a1=[t1];function s1(n,t){return k(),te("svg",n1,a1)}const o1={name:"carbon-moon",render:s1},i1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l1=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),r1=[l1];function c1(n,t){return k(),te("svg",i1,r1)}const u1={name:"carbon-apps",render:c1},p1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d1=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),m1=[d1];function f1(n,t){return k(),te("svg",p1,m1)}const Qu={name:"carbon-arrow-right",render:f1},g1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h1=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),_1=[h1];function k1(n,t){return k(),te("svg",g1,_1)}const v1={name:"carbon-arrow-left",render:k1},b1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y1=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),w1=[y1];function z1(n,t){return k(),te("svg",b1,w1)}const x1={name:"carbon-maximize",render:z1},T1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$1=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),M1=[$1];function L1(n,t){return k(),te("svg",T1,M1)}const I1={name:"carbon-minimize",render:L1},E1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S1=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),C1=[S1];function A1(n,t){return k(),te("svg",E1,C1)}const P1={name:"carbon-checkmark",render:A1},H1={class:"select-list"},O1={class:"title"},R1={class:"items"},N1=["onClick"],F1=De({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:t}){const s=n;z(M);const o=Kn(s,"modelValue",t,{passive:!0});return(i,l)=>{const r=P1;return k(),te("div",H1,[e("div",O1,Tn(n.title),1),e("div",R1,[(k(!0),te(Ee,null,ms(n.items,c=>(k(),te("div",{key:c.value,class:Be(["item",{active:x(o)===c.value}]),onClick:()=>{var u;o.value=c.value,(u=c.onClick)==null||u.call(c)}},[E(r,{class:Be(["text-green-500",{"opacity-0":x(o)!==c.value}])},null,8,["class"]),a(" "+Tn(c.display||c.value),1)],10,N1))),128))])])}}});const q1=L(F1,[["__scopeId","data-v-3f89fa11"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),W1={class:"text-sm"},D1=De({__name:"Settings",setup(n){z(M);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(k(),te("div",W1,[E(q1,{modelValue:x(Ss),"onUpdate:modelValue":o[0]||(o[0]=i=>Me(Ss)?Ss.value=i:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),j1=L(D1,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),U1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},B1=De({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:t}){const s=n;z(M);const o=Kn(s,"modelValue",t,{passive:!0}),i=ce();return vg(i,()=>{o.value=!1}),(l,r)=>(k(),te("div",{ref_key:"el",ref:i,class:"flex relative"},[e("button",{class:Be({disabled:n.disabled}),onClick:r[0]||(r[0]=c=>o.value=!x(o))},[Yn(l.$slots,"button",{class:Be({disabled:n.disabled})})],2),(k(),T(Sc,null,[x(o)?(k(),te("div",U1,[Yn(l.$slots,"menu")])):be("v-if",!0)],1024))],512))}}),K1=L(B1,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),V1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},G1={__name:"VerticalDivider",setup(n){return z(M),(t,s)=>(k(),te("div",V1))}},Ts=L(G1,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Q1={render(){return[]}},Y1={class:"slidev-icon-btn"},J1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Z1={class:"my-auto"},X1={class:"opacity-50"},eb=De({__name:"NavControls",props:{persist:{default:!1}},setup(n){const t=n;z(M);const s=ii.smaller("md"),{isFullscreen:o,toggle:i}=Nu,l=N(()=>di.value?`?password=${di.value}`:""),r=N(()=>`/presenter/${Ye.value}${l.value}`),c=N(()=>`/${Ye.value}${l.value}`),u=ce(),p=()=>{u.value&&ka.value&&u.value.contains(ka.value)&&ka.value.blur()},d=N(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=Qn(),f=Qn();return $t(()=>import("./DrawingControls-8a3dff6b.js"),[]).then(h=>f.value=h.default),(h,_)=>{const y=I1,w=x1,A=v1,I=Qu,P=u1,O=o1,G=e1,Q=Gu,K=Bv,U=Fv,se=Pv,re=ro("RouterLink"),fe=Lv,X=wv,ze=_v,Re=pv;return k(),te("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[e("div",{class:Be(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",x(d)]),onMouseleave:p},[x(at)?be("v-if",!0):(k(),te("button",{key:0,class:"slidev-icon-btn",onClick:_[0]||(_[0]=(...Le)=>x(i)&&x(i)(...Le))},[x(o)?(k(),T(y,{key:0})):(k(),T(w,{key:1}))])),e("button",{class:Be(["slidev-icon-btn",{disabled:!x(M4)}]),onClick:_[1]||(_[1]=(...Le)=>x(Qt)&&x(Qt)(...Le))},[E(A)],2),e("button",{class:Be(["slidev-icon-btn",{disabled:!x($4)}]),title:"Next",onClick:_[2]||(_[2]=(...Le)=>x(Gt)&&x(Gt)(...Le))},[E(I)],2),x(at)?be("v-if",!0):(k(),te("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:_[3]||(_[3]=Le=>x(Fu)())},[E(P)])),x(ui)?be("v-if",!0):(k(),te("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:_[4]||(_[4]=Le=>x(Uu)())},[x(Ui)?(k(),T(O,{key:0})):(k(),T(G,{key:1}))])),E(Ts),x(at)?be("v-if",!0):(k(),te(Ee,{key:3},[!x(Pn)&&!x(s)&&x(m)?(k(),te(Ee,{key:0},[E(x(m)),E(Ts)],64)):be("v-if",!0),x(Pn)?(k(),te("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:_[5]||(_[5]=Le=>Io.value=!x(Io))},[x(Io)?(k(),T(Q,{key:0})):(k(),T(K,{key:1,class:"opacity-50"}))])):be("v-if",!0)],64)),(!x(Ce).drawings.presenterOnly||x(Pn))&&!x(at)?(k(),te(Ee,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:_[6]||(_[6]=Le=>Vn.value=!x(Vn))},[E(U),x(Vn)?(k(),te("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:en({background:x(qt).color})},null,4)):be("v-if",!0)]),E(Ts)],64)):be("v-if",!0),x(at)?be("v-if",!0):(k(),te(Ee,{key:5},[x(Pn)?(k(),T(re,{key:0,to:x(c),class:"slidev-icon-btn",title:"Play Mode"},{default:v(()=>[E(se)]),_:1},8,["to"])):be("v-if",!0),x(w4)?(k(),T(re,{key:1,to:x(r),class:"slidev-icon-btn",title:"Presenter Mode"},{default:v(()=>[E(fe)]),_:1},8,["to"])):be("v-if",!0),be("v-if",!0)],64)),(k(),te(Ee,{key:6},[x(Ce).download?(k(),te("button",{key:0,class:"slidev-icon-btn",onClick:_[8]||(_[8]=(...Le)=>x(Dr)&&x(Dr)(...Le))},[E(X)])):be("v-if",!0)],64)),!x(Pn)&&x(Ce).info&&!x(at)?(k(),te("button",{key:7,class:"slidev-icon-btn",onClick:_[9]||(_[9]=Le=>Va.value=!x(Va))},[E(ze)])):be("v-if",!0),!x(Pn)&&!x(at)?(k(),T(K1,{key:8},{button:v(()=>[e("button",Y1,[E(Re)])]),menu:v(()=>[E(j1)]),_:1})):be("v-if",!0),x(at)?be("v-if",!0):(k(),T(Ts,{key:9})),e("div",J1,[e("div",Z1,[a(Tn(x(Ye))+" ",1),e("span",X1,"/ "+Tn(x(lp)),1)])]),E(x(Q1))],34)],512)}}}),nb=L(eb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),tb={style:{"font-size":"0.55rem","line-height":"1rem"}},ab=e("div",{class:"absolute bottom-0 left-1"},[e("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),sb={class:"absolute bottom-1 left-89 text-gray-700"},ob={key:0,class:"absolute bottom-1 right-1 text-gray-700"},ib={__name:"global-top",setup(n){const t=z(M);return(s,o)=>(k(),te("footer",tb,[ab,e("div",sb," ITT E.Agnelli - Informatica - "+Tn(x(t).configs.materia)+" - prof. Antonio Mancuso - a.s. "+Tn(x(t).configs.as)+" - v "+Tn(x(t).configs.version||0),1),x(t).nav.currentPage!==1&&x(t).nav.currentPage!=x(t).nav.total+1?(k(),te("div",ob,Tn(x(t).nav.currentPage-1)+" / "+Tn(x(t).nav.total-1),1)):be("v-if",!0)]))}},lb=L(ib,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),Yu={render(){return[gs(lb)]}},Ju={render(){return[]}},rb={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},cb=De({__name:"PresenterMouse",setup(n){return z(M),(t,s)=>{const o=Gu;return x(xo).cursor?(k(),te("div",rb,[E(o,{class:"absolute",style:en({left:`${x(xo).cursor.x}%`,top:`${x(xo).cursor.y}%`})},null,8,["style"])])):be("v-if",!0)}}}),ub=L(cb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),pb=De({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){z(M),We(cn,()=>{var o,i;(o=cn.value)!=null&&o.meta&&cn.value.meta.preload!==!1&&(cn.value.meta.__preloaded=!0),(i=So.value)!=null&&i.meta&&So.value.meta.preload!==!1&&(So.value.meta.__preloaded=!0)},{immediate:!0});const t=Qn();$t(()=>import("./DrawingLayer-e9d8ca66.js"),[]).then(o=>t.value=o.default);const s=N(()=>Ve.filter(o=>{var i;return((i=o.meta)==null?void 0:i.__preloaded)||o===cn.value}));return(o,i)=>(k(),te(Ee,null,[be(" Global Bottom "),E(x(Ju)),be(" Slides "),E(ff,H(C(x(E4))),{default:v(()=>[(k(!0),te(Ee,null,ms(x(s),l=>{var r;return Ai((k(),T(x(Vi),{key:l.path,is:l==null?void 0:l.component,clicks:l===x(cn)?x(Xt):0,"clicks-elements":((r=l.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:Be(x(Ki)(l)),route:l,context:n.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[su,l===x(cn)]])}),128))]),_:1},16),be(" Global Top "),E(x(Yu)),x(t)?(k(),T(x(t),{key:0})):be("v-if",!0),x(Pn)?be("v-if",!0):(k(),T(ub,{key:1}))],64))}}),db=L(pb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),mb=De({__name:"PrintStyle",setup(n){z(M);function t(s,{slots:o}){if(o.default)return gs("style",o.default())}return(s,o)=>(k(),T(t,null,{default:v(()=>[a(" @page { size: "+Tn(x(Tt))+"px "+Tn(x(Ni))+"px; margin: 0px; } ",1)]),_:1}))}}),Zu=L(mb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),fb=De({__name:"Play",setup(n){z(M),Ak();const t=ce();function s(l){var r;Tr.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?Gt():Qt())}S4(t);const o=N(()=>j_.value||Tr.value);Qn();const i=Qn();return $t(()=>import("./DrawingControls-8a3dff6b.js"),[]).then(l=>i.value=l.default),(l,r)=>(k(),te(Ee,null,[x(wa)?(k(),T(Zu,{key:0})):be("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:en(x(Fi))},[E(Ku,{class:"w-full h-full",style:en({background:"var(--slidev-slide-container-background, black)"}),width:x(wa)?x(Vt).width.value:void 0,scale:x(Ss),onPointerdown:s},{default:v(()=>[E(db,{context:"slide"})]),controls:v(()=>[e("div",{class:Be(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[x(o)?"opacity-100 right-0":"opacity-0 p-2",x(os)?"pointer-events-none":""]])},[E(nb,{class:"m-auto",persist:x(o)},null,8,["persist"])],2),!x(Ce).drawings.presenterOnly&&!x(at)&&x(i)?(k(),T(x(i),{key:0,class:"ml-0"})):be("v-if",!0)]),_:1},8,["style","width","scale"]),be("v-if",!0)],4),E(iv)],64))}}),gb=L(fb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Xu(n){return typeof n>"u"||n===null}function hb(n){return typeof n=="object"&&n!==null}function _b(n){return Array.isArray(n)?n:Xu(n)?[]:[n]}function kb(n,t){var s,o,i,l;if(t)for(l=Object.keys(t),s=0,o=l.length;s<o;s+=1)i=l[s],n[i]=t[i];return n}function vb(n,t){var s="",o;for(o=0;o<t;o+=1)s+=n;return s}function bb(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var yb=Xu,wb=hb,zb=_b,xb=vb,Tb=bb,$b=kb,Gi={isNothing:yb,isObject:wb,toArray:zb,repeat:xb,isNegativeZero:Tb,extend:$b};function ep(n,t){var s="",o=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(s+='in "'+n.mark.name+'" '),s+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!t&&n.mark.snippet&&(s+=`

`+n.mark.snippet),o+" "+s):o}function ls(n,t){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=t,this.message=ep(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ls.prototype=Object.create(Error.prototype);ls.prototype.constructor=ls;ls.prototype.toString=function(t){return this.name+": "+ep(this,t)};var Nt=ls,Mb=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Lb=["scalar","sequence","mapping"];function Ib(n){var t={};return n!==null&&Object.keys(n).forEach(function(s){n[s].forEach(function(o){t[String(o)]=s})}),t}function Eb(n,t){if(t=t||{},Object.keys(t).forEach(function(s){if(Mb.indexOf(s)===-1)throw new Nt('Unknown option "'+s+'" is met in definition of "'+n+'" YAML type.')}),this.options=t,this.tag=n,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Ib(t.styleAliases||null),Lb.indexOf(this.kind)===-1)throw new Nt('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var sn=Eb;function Or(n,t){var s=[];return n[t].forEach(function(o){var i=s.length;s.forEach(function(l,r){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(i=r)}),s[i]=o}),s}function Sb(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function o(i){i.multi?(n.multi[i.kind].push(i),n.multi.fallback.push(i)):n[i.kind][i.tag]=n.fallback[i.tag]=i}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(o);return n}function pi(n){return this.extend(n)}pi.prototype.extend=function(t){var s=[],o=[];if(t instanceof sn)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new Nt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(l){if(!(l instanceof sn))throw new Nt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new Nt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new Nt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof sn))throw new Nt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(pi.prototype);return i.implicit=(this.implicit||[]).concat(s),i.explicit=(this.explicit||[]).concat(o),i.compiledImplicit=Or(i,"implicit"),i.compiledExplicit=Or(i,"explicit"),i.compiledTypeMap=Sb(i.compiledImplicit,i.compiledExplicit),i};var Cb=pi,Ab=new sn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Pb=new sn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Hb=new sn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),Ob=new Cb({explicit:[Ab,Pb,Hb]});function Rb(n){if(n===null)return!0;var t=n.length;return t===1&&n==="~"||t===4&&(n==="null"||n==="Null"||n==="NULL")}function Nb(){return null}function Fb(n){return n===null}var qb=new sn("tag:yaml.org,2002:null",{kind:"scalar",resolve:Rb,construct:Nb,predicate:Fb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Wb(n){if(n===null)return!1;var t=n.length;return t===4&&(n==="true"||n==="True"||n==="TRUE")||t===5&&(n==="false"||n==="False"||n==="FALSE")}function Db(n){return n==="true"||n==="True"||n==="TRUE"}function jb(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var Ub=new sn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Wb,construct:Db,predicate:jb,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function Bb(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function Kb(n){return 48<=n&&n<=55}function Vb(n){return 48<=n&&n<=57}function Gb(n){if(n===null)return!1;var t=n.length,s=0,o=!1,i;if(!t)return!1;if(i=n[s],(i==="-"||i==="+")&&(i=n[++s]),i==="0"){if(s+1===t)return!0;if(i=n[++s],i==="b"){for(s++;s<t;s++)if(i=n[s],i!=="_"){if(i!=="0"&&i!=="1")return!1;o=!0}return o&&i!=="_"}if(i==="x"){for(s++;s<t;s++)if(i=n[s],i!=="_"){if(!Bb(n.charCodeAt(s)))return!1;o=!0}return o&&i!=="_"}if(i==="o"){for(s++;s<t;s++)if(i=n[s],i!=="_"){if(!Kb(n.charCodeAt(s)))return!1;o=!0}return o&&i!=="_"}}if(i==="_")return!1;for(;s<t;s++)if(i=n[s],i!=="_"){if(!Vb(n.charCodeAt(s)))return!1;o=!0}return!(!o||i==="_")}function Qb(n){var t=n,s=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function Yb(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Gi.isNegativeZero(n)}var Jb=new sn("tag:yaml.org,2002:int",{kind:"scalar",resolve:Gb,construct:Qb,predicate:Yb,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Zb=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Xb(n){return!(n===null||!Zb.test(n)||n[n.length-1]==="_")}function e0(n){var t,s;return t=n.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var n0=/^[-+]?[0-9]+e/;function t0(n,t){var s;if(isNaN(n))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Gi.isNegativeZero(n))return"-0.0";return s=n.toString(10),n0.test(s)?s.replace("e",".e"):s}function a0(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Gi.isNegativeZero(n))}var s0=new sn("tag:yaml.org,2002:float",{kind:"scalar",resolve:Xb,construct:e0,predicate:a0,represent:t0,defaultStyle:"lowercase"}),o0=Ob.extend({implicit:[qb,Ub,Jb,s0]}),i0=o0,np=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),tp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function l0(n){return n===null?!1:np.exec(n)!==null||tp.exec(n)!==null}function r0(n){var t,s,o,i,l,r,c,u=0,p=null,d,m,f;if(t=np.exec(n),t===null&&(t=tp.exec(n)),t===null)throw new Error("Date resolve error");if(s=+t[1],o=+t[2]-1,i=+t[3],!t[4])return new Date(Date.UTC(s,o,i));if(l=+t[4],r=+t[5],c=+t[6],t[7]){for(u=t[7].slice(0,3);u.length<3;)u+="0";u=+u}return t[9]&&(d=+t[10],m=+(t[11]||0),p=(d*60+m)*6e4,t[9]==="-"&&(p=-p)),f=new Date(Date.UTC(s,o,i,l,r,c,u)),p&&f.setTime(f.getTime()-p),f}function c0(n){return n.toISOString()}var u0=new sn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:l0,construct:r0,instanceOf:Date,represent:c0});function p0(n){return n==="<<"||n===null}var d0=new sn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:p0}),Qi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function m0(n){if(n===null)return!1;var t,s,o=0,i=n.length,l=Qi;for(s=0;s<i;s++)if(t=l.indexOf(n.charAt(s)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function f0(n){var t,s,o=n.replace(/[\r\n=]/g,""),i=o.length,l=Qi,r=0,c=[];for(t=0;t<i;t++)t%4===0&&t&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(o.charAt(t));return s=i%4*6,s===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):s===18?(c.push(r>>10&255),c.push(r>>2&255)):s===12&&c.push(r>>4&255),new Uint8Array(c)}function g0(n){var t="",s=0,o,i,l=n.length,r=Qi;for(o=0;o<l;o++)o%3===0&&o&&(t+=r[s>>18&63],t+=r[s>>12&63],t+=r[s>>6&63],t+=r[s&63]),s=(s<<8)+n[o];return i=l%3,i===0?(t+=r[s>>18&63],t+=r[s>>12&63],t+=r[s>>6&63],t+=r[s&63]):i===2?(t+=r[s>>10&63],t+=r[s>>4&63],t+=r[s<<2&63],t+=r[64]):i===1&&(t+=r[s>>2&63],t+=r[s<<4&63],t+=r[64],t+=r[64]),t}function h0(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var _0=new sn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:m0,construct:f0,predicate:h0,represent:g0}),k0=Object.prototype.hasOwnProperty,v0=Object.prototype.toString;function b0(n){if(n===null)return!0;var t=[],s,o,i,l,r,c=n;for(s=0,o=c.length;s<o;s+=1){if(i=c[s],r=!1,v0.call(i)!=="[object Object]")return!1;for(l in i)if(k0.call(i,l))if(!r)r=!0;else return!1;if(!r)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function y0(n){return n!==null?n:[]}var w0=new sn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:b0,construct:y0}),z0=Object.prototype.toString;function x0(n){if(n===null)return!0;var t,s,o,i,l,r=n;for(l=new Array(r.length),t=0,s=r.length;t<s;t+=1){if(o=r[t],z0.call(o)!=="[object Object]"||(i=Object.keys(o),i.length!==1))return!1;l[t]=[i[0],o[i[0]]]}return!0}function T0(n){if(n===null)return[];var t,s,o,i,l,r=n;for(l=new Array(r.length),t=0,s=r.length;t<s;t+=1)o=r[t],i=Object.keys(o),l[t]=[i[0],o[i[0]]];return l}var $0=new sn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:x0,construct:T0}),M0=Object.prototype.hasOwnProperty;function L0(n){if(n===null)return!0;var t,s=n;for(t in s)if(M0.call(s,t)&&s[t]!==null)return!1;return!0}function I0(n){return n!==null?n:{}}var E0=new sn("tag:yaml.org,2002:set",{kind:"mapping",resolve:L0,construct:I0});i0.extend({implicit:[u0,d0],explicit:[_0,w0,$0,E0]});function Rr(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var S0=new Array(256),C0=new Array(256);for(var ra=0;ra<256;ra++)S0[ra]=Rr(ra)?1:0,C0[ra]=Rr(ra);function A0(n){return Array.from(new Set(n))}function Nr(...n){let t,s,o;n.length===1?(t=0,o=1,[s]=n):[t,s,o=1]=n;const i=[];let l=t;for(;l<s;)i.push(l),l+=o||1;return i}function ap(n,t){if(!t||t==="all"||t==="*")return Nr(1,n+1);const s=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[i,l]=o.split("-",2);s.push(...Nr(+i,l?+l+1:n+1))}return A0(s).filter(o=>o<=n).sort((o,i)=>o-i)}function P0(n){const t=N(()=>n.value.path),s=N(()=>Ve.length-1),o=N(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),i=N(()=>Yi(o.value)),l=N(()=>Ve.find(f=>f.path===`${o.value}`)),r=N(()=>{var f,h,_;return(_=(h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:_.id}),c=N(()=>{var f,h;return((h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.layout)||(o.value===1?"cover":"default")}),u=N(()=>Ve.find(f=>f.path===`${Math.min(Ve.length,o.value+1)}`)),p=N(()=>Ve.filter(f=>{var h,_;return(_=(h=f.meta)==null?void 0:h.slide)==null?void 0:_.title}).reduce((f,h)=>(Ji(f,h),f),[])),d=N(()=>Zi(p.value,l.value)),m=N(()=>Xi(d.value));return{route:n,path:t,total:s,currentPage:o,currentPath:i,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:m}}function H0(n,t,s){const o=ce(0);On(()=>{Mt.afterEach(async()=>{await On(),o.value+=1})});const i=N(()=>{var u,p;return o.value,((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),l=N(()=>{var u,p;return+(((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.clicks)??i.value.length)}),r=N(()=>s.value<Ve.length-1||n.value<l.value),c=N(()=>s.value>1||n.value>0);return{clicks:n,clicksElements:i,clicksTotal:l,hasNext:r,hasPrev:c}}const O0=["id"],R0=De({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:t}){const s=n,o=Kn(s,"clicksElements",t),i=N(()=>({height:`${Ni}px`,width:`${Tt}px`})),l=Qn();$t(()=>Promise.resolve().then(()=>Dk),void 0).then(p=>l.value=p.default);const r=N(()=>s.clicks),c=H0(r,s.nav.currentRoute,s.nav.currentPage),u=N(()=>`${s.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return vn(M,nn({nav:{...s.nav,...c},configs:Ce,themeConfigs:N(()=>Ce.themeConfig)})),(p,d)=>{var m;return k(),te("div",{id:x(u),class:"print-slide-container",style:en(x(i))},[E(x(Ju)),E(x(Vi),{is:(m=n.route)==null?void 0:m.component,"clicks-elements":x(o),"onUpdate:clicksElements":d[0]||(d[0]=f=>Me(o)?o.value=f:null),clicks:x(r),"clicks-disabled":!1,class:Be(x(Ki)(n.route)),route:n.route},null,8,["is","clicks-elements","clicks","class","route"]),x(l)?(k(),T(x(l),{key:0,page:+n.route.path},null,8,["page"])):be("v-if",!0),E(x(Yu))],12,O0)}}}),Fr=L(R0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),N0=De({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var l;const t=n;z(M);const s=nn(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),o=N(()=>t.route),i=P0(o);return(r,c)=>(k(),te(Ee,null,[E(Fr,{"clicks-elements":s,"onUpdate:clicksElements":c[0]||(c[0]=u=>s=u),clicks:0,nav:x(i),route:x(o)},null,8,["clicks-elements","nav","route"]),x(ip)?be("v-if",!0):(k(!0),te(Ee,{key:0},ms(s.length,u=>(k(),T(Fr,{key:u,clicks:u,nav:x(i),route:x(o)},null,8,["clicks","nav","route"]))),128))],64))}}),F0=L(N0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),q0={id:"print-content"},W0=De({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const t=n;z(M);const s=N(()=>t.width),o=N(()=>t.width/xt),i=N(()=>s.value/o.value),l=N(()=>i.value<xt?s.value/Tt:o.value*xt/Tt);let r=Ve.slice(0,-1);Fn.value.query.range&&(r=ap(r.length,Fn.value.query.range).map(p=>r[p-1]));const c=N(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return vn(ru,l),(u,p)=>(k(),te("div",{id:"print-container",class:Be(x(c))},[e("div",q0,[(k(!0),te(Ee,null,ms(x(r),d=>(k(),T(F0,{key:d.path,route:d},null,8,["route"]))),128))]),Yn(u.$slots,"controls")],2))}});const D0=L(W0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),j0=De({__name:"Print",setup(n){return z(M),xa(()=>{wa?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,s)=>(k(),te(Ee,null,[x(wa)?(k(),T(Zu,{key:0})):be("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:en(x(Fi))},[E(D0,{class:"w-full h-full",style:en({background:"var(--slidev-slide-container-background, black)"}),width:x(Vt).width.value},null,8,["style","width"])],4)],64))}});const U0=L(j0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const B0={class:"slidev-layout end"},K0={__name:"end",setup(n){return z(M),(t,s)=>(k(),te("div",B0," END "))}},V0=L(K0,[["__scopeId","data-v-e532b98d"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function qr(n){return n.startsWith("/")?"/TPSI/4/html/"+n.slice(1):n}function G0(n,t=!1){const s=n&&["#","rgb","hsl"].some(i=>n.indexOf(i)===0),o={background:s?n:void 0,color:n&&!s?"white":void 0,backgroundImage:s?void 0:n?t?`linear-gradient(#0005, #0008), url(${qr(n)})`:`url("${qr(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const Q0={class:"my-auto w-full"},Y0=De({__name:"cover",props:{background:{default:""}},setup(n){const t=n;z(M);const s=N(()=>G0(t.background,!0));return(o,i)=>(k(),te("div",{class:"slidev-layout cover",style:en(x(s))},[e("div",Q0,[Yn(o.$slots,"default")])],4))}}),J0=L(Y0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),Z0=e("h1",null,"Hyper Text Markup Language",-1),X0=e("p",null,"HTML per sviluppatori",-1),ey={class:"pt-12"},ny={class:"px-2 py-1"},ty={__name:"1",setup(n){const t={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.4.3"};return z(M),(s,o)=>{const i=Qu;return k(),T(J0,H(C(t)),{default:v(()=>[Z0,X0,e("div",ey,[e("span",ny,[a(" Premi spazio o "),E(i,{class:"inline"}),a(" per la prossima slide ")])])]),_:1},16)}}},ay=L(ty,[["__file","/@slidev/slides/1.md"]]),sy={class:"slidev-layout default"},oy={__name:"default",setup(n){return z(M),(t,s)=>(k(),te("div",sy,[Yn(t.$slots,"default")]))}},F=L(oy,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),iy=e("h1",null,"HTML",-1),ly=e("p",null,[e("em",null,"H"),a("yper "),e("em",null,"T"),a("ext "),e("em",null,"M"),a("arkup "),e("em",null,"L"),a("anguage (linguaggio di markup per ipertesti), comunemente noto con l’acronimo di "),e("strong",null,"HTML"),a(", è un "),e("strong",null,"linguaggio di markup"),a(" per la creazione di una pagina web.")],-1),ry=e("ul",null,[e("li",null,[e("p",null,"Originariamente nato per la formattazione e impaginazione di documenti ipertestuali (web 1.0), oggi è alla base dello sviluppo di siti ed applicazioni web.")]),e("li",null,[e("p",null,[a("Viene utilizzato principalmente per il disaccoppiamento della struttura logica di una pagina web (definita appunto dal markup "),e("strong",null,"HTML"),a(") dalla sua rappresentazione, gestita tramite gli stili "),e("strong",null,"CSS"),a(" e dalla sua logica di funzionamento implementata tramite il linguaggio "),e("strong",null,"JavaScript"),a(".")])]),e("li",null,[e("p",null,"L’HTML è un linguaggio di pubblico dominio, la cui sintassi è stabilita dal World Wide Web Consortium (W3C). La versione attuale, la quinta, è stata rilasciata dal W3C nell’ottobre 2014.")]),e("li",null,[e("p",null,"Il motivo principale che ha spinto il W3C e i suoi membri a sviluppare HTML5 è stata la necessità di fornire direttamente le funzionalità che in precedenza erano fruibili tramite estensioni proprietarie all’esterno dei browser, come Adobe Flash e simili. Un secondo obiettivo che gli sviluppatori si erano prefissati era quello di garantire una maggiore compatibilità tra i diversi browser, indipendentemente dalla piattaforma software utilizzata, e principalmente mirata all’espansione dei dispositivi mobili.")])],-1),cy={__name:"2",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[iy,ly,ry]),_:1},16))}},uy=L(cy,[["__file","/@slidev/slides/2.md"]]),py="/TPSI/4/html/assets/html5_1-9e65f7ef.jpg",dy=e("h1",null,"HTML",-1),my=e("p",null," ",-1),fy=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ul",null,[e("li",null,"HTML5 linguaggio evoluto per il markup o descrizione delle pagine HTML"),e("li",null,"Definito e standardizzato dal W3C (WWW Consortium)"),e("li",null,"Descrive la semantica ed il contenuto di una pagina Web"),e("li",null,"Definisce una serie di tecnologie correlate"),e("li",null,"Note come HTML Living Standard (è in continua evoluzione)")])]),e("div",null,[e("p",null,[e("img",{src:py,alt:"html5_1.jpg"})])])],-1),gy={__name:"3",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[dy,my,fy]),_:1},16))}},hy=L(gy,[["__file","/@slidev/slides/3.md"]]),_y="/TPSI/4/html/assets/html5_2-f6246604.jpg",ky=e("h1",null,"HTML",-1),vy=e("p",null," ",-1),by=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("p",null,[a("Una "),e("strong",null,"pagina Web"),a(" contiene:")]),e("ul",null,[e("li",null,"immagini"),e("li",null,"audio"),e("li",null,"file multimediali"),e("li",null,"testo"),e("li",null,"hotword")]),e("p",null,[a("Le "),e("strong",null,"hotword"),a(" sono parti della pagina legate a link.")]),e("p",null,[a("I "),e("strong",null,"link"),a(" sono collegamenti che portano ad altre pagine o altre risorse.")])]),e("div",null,[e("p",null,[e("img",{src:_y,alt:"html5_2.jpg"})])])],-1),yy={__name:"4",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[ky,vy,by]),_:1},16))}},wy=L(yy,[["__file","/@slidev/slides/4.md"]]),zy=e("h1",null,"HTML",-1),xy=e("p",null,[a("Il "),e("a",{href:"https://www.w3schools.com/",target:"_blank",rel:"noopener"},"sito web"),a(" del consorzio W3C, offre una preziosa fonte di informazioni per apprendere le tecnologie del web.")],-1),Ty=e("h3",null,"HTML",-1),$y=e("ul",null,[e("li",null,[e("a",{href:"https://www.w3schools.com/html/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/html/default.asp")]),e("li",null,[e("a",{href:"https://www.w3schools.com/tags/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/tags/default.asp")]),e("li",null,[e("a",{href:"https://htmlreference.io/",target:"_blank",rel:"noopener"},"https://htmlreference.io/")])],-1),My=e("h3",null,"CSS",-1),Ly=e("ul",null,[e("li",null,[e("a",{href:"https://www.w3schools.com/css/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/css/default.asp")]),e("li",null,[e("a",{href:"https://www.w3schools.com/cssref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/cssref/default.asp")]),e("li",null,[e("a",{href:"https://cssreference.io/",target:"_blank",rel:"noopener"},"https://cssreference.io/")])],-1),Iy=e("h3",null,"Java Script",-1),Ey=e("ul",null,[e("li",null,[e("a",{href:"https://www.w3schools.com/js/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/js/default.asp")]),e("li",null,[e("a",{href:"https://www.w3schools.com/jsref/default.asp",target:"_blank",rel:"noopener"},"https://www.w3schools.com/jsref/default.asp")]),e("li",null,[e("a",{href:"https://devdocs.io/javascript/",target:"_blank",rel:"noopener"},"https://devdocs.io/javascript/")]),e("li",null,[e("a",{href:"https://javascript.info/",target:"_blank",rel:"noopener"},"https://javascript.info/")])],-1),Sy={__name:"5",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[zy,xy,Ty,$y,My,Ly,Iy,Ey]),_:1},16))}},Cy=L(Sy,[["__file","/@slidev/slides/5.md"]]),Ay={class:"slidev-layout section w-full h-full grid"},Py={class:"my-auto text-center"},Hy={__name:"section",setup(n){return z(M),(t,s)=>(k(),te("div",Ay,[e("div",Py,[Yn(t.$slots,"default")])]))}},In=L(Hy,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/section.vue"]]),Oy=e("h1",{class:"sezione"},"Ambiente di Sviluppo",-1),Ry={__name:"6",setup(n){const t={layout:"section"};return z(M),(s,o)=>(k(),T(In,H(C(t)),{default:v(()=>[Oy]),_:1},16))}},Ny=L(Ry,[["__file","/@slidev/slides/6.md"]]),Fy=e("h1",null,"HTML - Ambiente di sviluppo",-1),qy=e("p",null," ",-1),Wy=e("ul",null,[e("li",null,"Al fine di comprendere appieno lo sviluppo web, è preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice"),e("li",null,"Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web"),e("li",null,"Il passaggio ad un sistema autore o ad un CMS risulta poi più facile e intuitivo.")],-1),Dy={__name:"7",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[Fy,qy,Wy]),_:1},16))}},jy=L(Dy,[["__file","/@slidev/slides/7.md"]]),Uy="/TPSI/4/html/assets/html5_3-98b93fb7.jpg",By=e("h1",null,"HTML - Ambiente di sviluppo",-1),Ky=e("p",null,[e("a",{href:"https://code.visualstudio.com/docs/languages/html",target:"_blank",rel:"noopener"},"Visual Studio Code")],-1),Vy=e("div",{grid:"~ cols-2 gap-32"},[e("div",null,[e("ul",null,[e("li",null,"Qualsiasi editor testuale è adatto allo sviluppo web"),e("li",null,[e("strong",null,"Visual Studio Code"),a(" fornisce supporto al HTML in modo nativo")]),e("li",null,"Fornisce il syntax highlighting, smart completions con IntelliSense e formattazione customizzabile"),e("li",null,"In aggiunta sono disponibili moltissime estensioni per facilitare lo sviluppo web")])]),e("div",null,[e("p",null,[e("img",{src:Uy,alt:"html5_3.jpg"})])])],-1),Gy={__name:"8",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[By,Ky,Vy]),_:1},16))}},Qy=L(Gy,[["__file","/@slidev/slides/8.md"]]),Yy="/TPSI/4/html/assets/html5_4-d48b4fdd.jpg",Jy=e("h1",null,"HTML - Ambiente di sviluppo",-1),Zy=e("p",null,"Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.",-1),Xy=e("p",null,[e("img",{src:Yy,alt:"html5_4.jpg"})],-1),ew={__name:"9",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[Jy,Zy,Xy]),_:1},16))}},nw=L(ew,[["__file","/@slidev/slides/9.md"]]),tw=e("h1",null,"HTML - Ambiente di sviluppo",-1),aw=e("p",null," ",-1),sw=e("ul",null,[e("li",null,"Quindi per sviluppare una pagina web usiamo vscode (o il nostro editor preferito)"),e("li",null,"Scriviamo il codice di markup della pagina"),e("li",null,"Salviamo con estensione .html"),e("li",null,"Apriamo il file nel browser (CTRL + o o drag’n drop)"),e("li",null,"La pagina viene visualizzata all’interno del browser")],-1),ow={__name:"10",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[tw,aw,sw]),_:1},16))}},iw=L(ow,[["__file","/@slidev/slides/10.md"]]),lw=e("h1",{class:"sezione"},"Tag e Attributi",-1),rw={__name:"11",setup(n){const t={layout:"section"};return z(M),(s,o)=>(k(),T(In,H(C(t)),{default:v(()=>[lw]),_:1},16))}},cw=L(rw,[["__file","/@slidev/slides/11.md"]]),uw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},pw=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),dw=[pw];function mw(n,t){return k(),te("svg",uw,dw)}const fw={name:"ph-clipboard",render:mw},gw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},hw=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),_w=[hw];function kw(n,t){return k(),te("svg",gw,_w)}const vw={name:"ph-check-circle",render:kw},bw=["title"],yw=De({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const t=n;z(M);const s=z(ou),o=z(iu),i=z(lu);function l(m=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_=h.length;for(let y=0;y<m;y++)f.push(h.charAt(Math.floor(Math.random()*_)));return f.join("")}const r=ce(),c=Zn();ds(()=>{const m=t.at==null?o==null?void 0:o.value.length:t.at,f=N(()=>i!=null&&i.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(m||0)),t.ranges.length-1)),h=N(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(i!=null&&i.value)){const _=l(),y=Af(t.ranges.length-1).map(w=>_+w);o!=null&&o.value&&(o.value.push(...y),lo(()=>y.forEach(w=>Cf(o.value,w)),c))}xa(()=>{if(!r.value)return;const y=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const w of y){const A=Array.from(w.querySelectorAll(".line")),I=ap(A.length,h.value);if(A.forEach((P,O)=>{const G=I.includes(O+1);P.classList.toggle(Sf,!0),P.classList.toggle("highlighted",G),P.classList.toggle("dishonored",!G)}),t.maxHeight){const P=w.querySelector(".line.highlighted");P&&P.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=Ig();function d(){var f,h;const m=(h=(f=r.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;m&&p(m)}return(m,f)=>{const h=vw,_=fw;return k(),te("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:en({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Yn(m.$slots,"default"),x(Ce).codeCopy?(k(),te("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:x(u)?"Copied":"Copy",onClick:f[0]||(f[0]=y=>d())},[x(u)?(k(),T(h,{key:0,class:"p-2 w-8 h-8"})):(k(),T(_,{key:1,class:"p-2 w-8 h-8"}))],8,bw)):be("v-if",!0)],4)}}}),ie=L(yw,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),ww=e("h1",null,"TAG",-1),zw=e("p",null,"I TAG HTML sono marcatori (Markup Language) che modificano la semantica (senso, ruolo organizzazione) dei contenuti di una pagina.",-1),xw=e("h3",null,"Anatomia di un TAG",-1),Tw=e("ul",null,[e("li",null,"Un tag è racchiuso tra < e >"),e("li",null,"Il nome del tag è sempre scritto in minuscolo"),e("li",null,[a("Se non specificato deve sempre esserci un tag di "),e("strong",null,"apertura"),a(" ed un tag di "),e("strong",null,"chiusura")])],-1),$w=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tagname")]),e("span",{class:"token punctuation"},">")]),a(" --> TAG di apertura")])])],-1),Mw=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tagname")]),e("span",{class:"token punctuation"},">")]),a(" --> TAG di chiusura")])])],-1),Lw=e("p",null,"Il contenuto da modificare è compreso tra il tag di apertura ed il tag di chiusura",-1),Iw=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tagname")]),e("span",{class:"token punctuation"},">")]),a("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tagname")]),e("span",{class:"token punctuation"},">")])])])],-1),Ew={__name:"12",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[ww,zw,xw,Tw,E(i,Y({},{ranges:[""]}),{default:v(()=>[$w]),_:1},16),E(i,Y({},{ranges:[""]}),{default:v(()=>[Mw]),_:1},16),Lw,E(i,Y({},{ranges:[""]}),{default:v(()=>[Iw]),_:1},16)]),_:1},16)}}},Sw=L(Ew,[["__file","/@slidev/slides/12.md"]]),Cw=e("h1",null,"TAG singleton",-1),Aw=e("p",null,"Elementi HTML con il solo tag di apertura.",-1),Pw=e("ul",null,[e("li",null,[a("In HTML sono definiti una serie di tag, detti "),e("em",null,"singleton"),a(" che non richiedono il tag di chiusura.")]),e("li",null,"Per essere formalmente corretti questi elementi devono essere scritti in questo modo:")],-1),Hw=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tag")]),a(),e("span",{class:"token punctuation"},"/>")]),a(": notare lo slash finale che indica la mancanza di un tag di chiusura.")])])],-1),Ow=e("p",null,"Qui la lista dei tag singleton che non richiedono una chiusura.",-1),Rw=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("area")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("base")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("col")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("embed")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("command")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("hr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("img")]),e("span",{class:"token punctuation"},">")])])])])]),e("div",null,[e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("keygen")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("link")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meta")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("param")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("source")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("track")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("wbr")]),e("span",{class:"token punctuation"},">")])])])])])],-1),Nw={__name:"13",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[Cw,Aw,Pw,E(i,Y({},{ranges:[""]}),{default:v(()=>[Hw]),_:1},16),Ow,Rw]),_:1},16)}}},Fw=L(Nw,[["__file","/@slidev/slides/13.md"]]),qw=e("h1",null,"Attributi",-1),Ww=e("p",null,"Caratteristiche addizionali di un TAG",-1),Dw=e("ul",null,[e("li",null,[a("I tag HTML possono avere degli "),e("strong",null,"attributi"),a(" che forniscono delle informazioni addizionali al browser.")]),e("li",null,[a("Gli attributi sono "),e("strong",null,"sempre"),a(" specificati nel tag di apertura.")]),e("li",null,"Gli attributi sono definiti da una coppia nome-valore")],-1),jw=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tagname")]),a(),e("span",{class:"token attr-name"},"nome"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("valore"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tagname")]),e("span",{class:"token punctuation"},">")])])])],-1),Uw=e("ul",null,[e("li",null,"Un tag può avere 0, 1 o più attributi")],-1),Bw=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tagname")]),e("span",{class:"token punctuation"},">")]),a("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tagname")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tagname")]),a(),e("span",{class:"token attr-name"},"nome"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("valore"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tagname")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tagname")]),a(),e("span",{class:"token attr-name"},"nome1"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("valore1"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"nome2"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("valore2"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"nome3"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("valore3"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("...Contenuto del tag..."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tagname")]),e("span",{class:"token punctuation"},">")])])])],-1),Kw=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meta")]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("author"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Antonio Mancuso"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("a")]),a(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("https://www.w3schools.com"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Visit W3Schools"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("a")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("p")]),a(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"color"),e("span",{class:"token punctuation"},":"),a("red"),e("span",{class:"token punctuation"},";")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")]),a("This is a red paragraph."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("p")]),e("span",{class:"token punctuation"},">")])])])],-1),Vw={__name:"14",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[qw,Ww,Dw,E(i,Y({},{ranges:[""]}),{default:v(()=>[jw]),_:1},16),Uw,E(i,Y({},{ranges:[""]}),{default:v(()=>[Bw]),_:1},16),a(" ### Esempio: "),E(i,Y({},{ranges:[""]}),{default:v(()=>[Kw]),_:1},16)]),_:1},16)}}},Gw=L(Vw,[["__file","/@slidev/slides/14.md"]]),Qw=e("h1",{class:"sezione"},"La struttura di una pagina Web",-1),Yw={__name:"15",setup(n){const t={layout:"section"};return z(M),(s,o)=>(k(),T(In,H(C(t)),{default:v(()=>[Qw]),_:1},16))}},Jw=L(Yw,[["__file","/@slidev/slides/15.md"]]),Zw=e("h1",null,"Struttura pagina HTML",-1),Xw=e("p",null,"Una pagina HTML ha una struttuta fissa che deve sempre essere rispettata.",-1),ez=e("p",null,"Una generica pagina HTML è composta da 3 sezioni principali:",-1),nz=e("ol",null,[e("li",null,[e("strong",null,"Documento"),a(": il contenitore di più alto livello, che racchiude tutte le altre sezioni della pagina HTML.")]),e("li",null,[e("strong",null,"Head"),a(": il contenitore per i metadati (dato che descrive un dato) del documento e va inserito in testa al docuemnto.")]),e("li",null,[e("strong",null,"Body"),a(": consiste nel contenuto principale della pagina HTML.")])],-1),tz={__name:"16",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[Zw,Xw,ez,nz]),_:1},16))}},az=L(tz,[["__file","/@slidev/slides/16.md"]]),sz="/TPSI/4/html/assets/html5_5-a532b0f3.jpg",oz=e("h1",null,"Struttura pagina HTML",-1),iz=e("p",null,"Rappresentazione grafica della struttura di una pagina HTML",-1),lz=e("p",null,[e("img",{src:sz,alt:"html5_5.jpg"})],-1),rz={__name:"17",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[oz,iz,lz]),_:1},16))}},cz=L(rz,[["__file","/@slidev/slides/17.md"]]),uz=e("h1",null,"Struttura pagina HTML",-1),pz=e("p",null,"Documento HTML",-1),dz=e("ul",null,[e("li",null,"Tutti i documenti HTML devono iniziare con la dichiarazione DOCTYPE che deve essere seguita dal TAG di più alto livello")],-1),mz=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token doctype"},[e("span",{class:"token punctuation"},"<!"),e("span",{class:"token doctype-tag"},"DOCTYPE"),a(),e("span",{class:"token name"},"html"),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("html")]),e("span",{class:"token punctuation"},">")])])])],-1),fz=e("ul",null,[e("li",null,[e("strong",null,"<!DOCTYPE html>"),a(": rappresenta il tipo di documento (html) e permette al browser di visualizzare la pagina HTML in modo corretto.")]),e("li",null,"Deve apparire nella pagina 1 sola volta come prima linea e prima di qualsiasi altro elemento o tag."),e("li",null,[e("strong",null,"<html>"),a(": è il primo tag di apertura che indica l’inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.")])],-1),gz={__name:"18",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[uz,pz,dz,E(i,Y({},{ranges:[""]}),{default:v(()=>[mz]),_:1},16),fz]),_:1},16)}}},hz=L(gz,[["__file","/@slidev/slides/18.md"]]),_z=e("h1",null,"Struttura pagina HTML",-1),kz=e("p",null,"Header del documento",-1),vz=e("ul",null,[e("li",null,[a("Il primo elemento di apertura della pagina HTML è l’"),e("em",null,[e("strong",null,"HEAD"),a("er")]),a(" o intestazione.")]),e("li",null,[e("strong",null,"<head>"),a(": tag di apertura dell’header che contiene la descrizione dei "),e("em",null,"metadati"),a(" del documento HTML.")]),e("li",null,"I metadati sono dati che descrivono delle caratteristiche del documento, per esempip il titolo, il set di caratteri, l’autore,etc…"),e("li",null,[a("La sezione header ed i metadati contenuti "),e("strong",null,"NON"),a(" sono visualizzati.")]),e("li",null,"Il più importante elemento della sezione head è il titolo identificato dal tag")],-1),bz=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("title")]),e("span",{class:"token punctuation"},">")]),a("Titolo della pagina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("title")]),e("span",{class:"token punctuation"},">")])])])],-1),yz={__name:"19",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[_z,kz,vz,E(i,Y({},{ranges:[""]}),{default:v(()=>[bz]),_:1},16)]),_:1},16)}}},wz=L(yz,[["__file","/@slidev/slides/19.md"]]),zz=e("h1",null,"Struttura pagina HTML",-1),xz=e("p",null,"Body e contenuto del documento",-1),Tz=e("ul",null,[e("li",null,"La sezione del documento identificata dal tag")],-1),$z=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("body")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},"  ..."),a(`
`),e("span",{class:"line"},"  ..."),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("body")]),e("span",{class:"token punctuation"},">")])])])],-1),Mz={__name:"20",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[zz,xz,Tz,E(i,Y({},{ranges:[""]}),{default:v(()=>[$z]),_:1},16),a(" - Rappresenta e contiene tutti i tag di descrizione e markup della pagina. - In questa sezione viene definito il contenuto che si vuole visualizzare nel browser. ")]),_:1},16)}}},Lz=L(Mz,[["__file","/@slidev/slides/20.md"]]),Iz=e("h1",null,"Struttura pagina HTML",-1),Ez=e("p",null,"Pagina HTML base",-1),Sz=e("p",null,"Questo è il codice della pagina HTML minimale, che contiene solo le sezioni principali",-1),Cz=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token doctype"},[e("span",{class:"token punctuation"},"<!"),e("span",{class:"token doctype-tag"},"DOCTYPE"),a(),e("span",{class:"token name"},"html"),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token comment"},"<!-- HTML5-->")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"<!-- Questo è un commento su una singola riga -->")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},"<!-- Questo è un commento "),a(`
`),e("span",{class:"line"},"     su più righe"),a(`
`),e("span",{class:"line"},"-->"),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("html")]),a(),e("span",{class:"token attr-name"},"lang"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("it"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token comment"},"<!-- Pagina HTML -->")]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("head")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token comment"},"<!-- Header della pagina -->")]),a(`
`),e("span",{class:"line"},"    "),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token comment"},"<!-- Qui vanno inserite informazioni relative alla pagina ma che non saranno visualizzate -->")]),a(`
`),e("span",{class:"line"},"  "),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("head")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("body")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token comment"},"<!-- Corpo principale della pagina HTML -->")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token comment"},"<!-- Questa sezione cotiene il contenuto della pagina HTML che viene visualizzato nel browser -->")]),a(`
`),e("span",{class:"line"},"  "),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("body")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("html")]),e("span",{class:"token punctuation"},">")])])])],-1),Az={__name:"21",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[Iz,Ez,Sz,E(i,Y({},{ranges:[""]}),{default:v(()=>[Cz]),_:1},16)]),_:1},16)}}},Pz=L(Az,[["__file","/@slidev/slides/21.md"]]),Hz=e("h1",null,"Struttura pagina HTML",-1),Oz=e("p",null,"I tag dell’header",-1),Rz=e("p",null,"La sezione <head> può contenere i seguenti tag:",-1),Nz=e("ul",null,[e("li",null,"<title>: definisce il titolo della pagina HTML."),e("li",null,"<style>: definisce lo stile da applicare alla pagina HTML."),e("li",null,"<meta>: definisce specifici metadata per il documento."),e("li",null,"<link>: utilizzato per referenziare elementi o documenti esterni."),e("li",null,"<script>: definisce la logica da eseguire durante la visualizzazione delle pagina."),e("li",null,"<base>: specifica un UTL di base da applicare a tutto il documento.")],-1),Fz={__name:"22",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[Hz,Oz,Rz,Nz]),_:1},16))}},qz=L(Fz,[["__file","/@slidev/slides/22.md"]]),Wz=e("h1",null,"Struttura pagina HTML",-1),Dz=e("p",null,"I tag dell’header: <title>",-1),jz=e("ul",null,[e("li",null,"Il più importante elemento della sezione head è il titolo identificato dal tag")],-1),Uz=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("title")]),e("span",{class:"token punctuation"},">")]),a("Titolo della pagina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("title")]),e("span",{class:"token punctuation"},">")])])])],-1),Bz={__name:"23",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[Wz,Dz,jz,E(i,Y({},{ranges:[""]}),{default:v(()=>[Uz]),_:1},16),a(" - Il titolo deve contenere solo informazioni testuali ed è visualizzato nel bordo o tab della finestra del browser. - Il titolo è molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull'algoritmo che decide in quale ordine visualizzare le pagine trovate. ")]),_:1},16)}}},Kz=L(Bz,[["__file","/@slidev/slides/23.md"]]),Vz=e("h1",null,"Struttura pagina HTML",-1),Gz=e("p",null,"I tag dell’header: <meta>",-1),Qz=e("p",null,"Viene utilizzato per specificare vari tipi di metadati, tra cui:",-1),Yz=e("ul",null,[e("li",null,[e("em",null,"character set"),a(": set di caratteri usato dalla pagina web")]),e("li",null,[e("em",null,"descrizione pagina"),a(": descrizione della pagina e dei suoi contenuti")]),e("li",null,[e("em",null,"keywords"),a(": parole chiave per le ricerche web")]),e("li",null,[e("em",null,"autore del documento"),a(": autore/i del documento")]),e("li",null,[e("em",null,"viewport settings"),a(": impostazioni del viewport, spesso utile per dispositivi mobili")])],-1),Jz=e("p",null,"Importante notare che i metadati, non sono visualizzati dal browser, ma utilizzati dai motori di ricerca per comprendere meglio il contenuto della pagina stessa.",-1),Zz={__name:"24",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[Vz,Gz,Qz,Yz,Jz]),_:1},16))}},Xz=L(Zz,[["__file","/@slidev/slides/24.md"]]),ex=e("h1",null,"Struttura pagina HTML",-1),nx=e("p",null,"I tag dell’header: <style>",-1),tx=e("ul",null,[e("li",null,"Definisce uno o più stili che vanno a modificare la visualizzazione della pagina HTML")],-1),ax=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("style")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},"  body {background-color: powderblue;}"),a(`
`),e("span",{class:"line"},"  h1 {color: red;}"),a(`
`),e("span",{class:"line"},"  p {color: blue;}"),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("style")]),e("span",{class:"token punctuation"},">")])])])],-1),sx=e("ul",null,[e("li",null,"Normalmente non si usa mai in quanto non è una buona pratica di programmazione"),e("li",null,[a("Per pagine di media/alta complessità non si include in quanto è più pulito definire gli stili della pagina in un file esterno di tipo "),e("strong",null,"CSS")])],-1),ox={__name:"25",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[ex,nx,tx,E(i,Y({},{ranges:[""]}),{default:v(()=>[ax]),_:1},16),sx]),_:1},16)}}},ix=L(ox,[["__file","/@slidev/slides/25.md"]]),lx=e("h1",null,"Struttura pagina HTML",-1),rx=e("p",null,"I tag dell’header: <script>",-1),cx=e("ul",null,[e("li",null,[a("Desinisce uno script in "),e("strong",null,"Javascript"),a(" che viene eseguito dal browser durante la visualizzazione della pagina.")]),e("li",null,"Permette di eseguire un programma lato client direttamente all’interno del browser."),e("li",null,"Normalmente utilizzato per interagire con l’utente o per modificare l’aspetto della pagina stessa.")],-1),ux=e("pre",{class:"slidev-code language-ts"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token operator"},"<"),a("script"),e("span",{class:"token operator"},">")]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token keyword"},"function"),a(),e("span",{class:"token function"},"myFunction"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token punctuation"},"{"),a()]),a(`
`),e("span",{class:"line"},[a("        document"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"getElementById"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"titolo"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),a("innerHTML "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token string"},'"STRUTTURA BASE DI UNA PAGINA WEB"'),e("span",{class:"token punctuation"},";")]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token punctuation"},"}")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token operator"},"<"),e("span",{class:"token operator"},"/"),a("script"),e("span",{class:"token operator"},">")])])],-1),px=e("ul",null,[e("li",null,"Normalmente non si usa mai in quanto non è una buona pratica di programmazione"),e("li",null,[a("Per pagine di media/alta complessità non si include in quanto è più pulito definire gli script della pagina in un file esterno di tipo "),e("strong",null,"JS")])],-1),dx={__name:"26",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[lx,rx,cx,E(i,Y({},{ranges:[""]}),{default:v(()=>[ux]),_:1},16),px]),_:1},16)}}},mx=L(dx,[["__file","/@slidev/slides/26.md"]]),fx=e("h1",null,"Struttura pagina HTML",-1),gx=e("p",null,"Pagina HTML base",-1),hx=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token doctype"},[e("span",{class:"token punctuation"},"<!"),e("span",{class:"token doctype-tag"},"DOCTYPE"),a(),e("span",{class:"token name"},"html"),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token comment"},"<!-- HTML5-->")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("html")]),a(),e("span",{class:"token attr-name"},"lang"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("it"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token comment"},"<!-- Pagina HTML -->")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("head")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token comment"},"<!-- Qui vanno inserite informazioni relative alla pagina ma che non saranno visualizzate -->")]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token comment"},"<!-- sezione meta Fornisce informazioni al web browser e ai motori di ricerca per il processo di indicizzazione -->")]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meta")]),a(),e("span",{class:"token attr-name"},"charset"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("UTF-8"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meta")]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("author"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Antonio Mancuso"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meta")]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("description"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Template HTML"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meta")]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("keywords"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("template, html, lezioni, scuola"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meta")]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("viewport"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("width=device-width, initial-scale=1.0"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meta")]),a(),e("span",{class:"token attr-name"},"http-equiv"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("refresh"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"content"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("100"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token comment"},"<!-- Duranbte la fase di sviluppo permette il refresh  automatico della pagina  -->")]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("title")]),e("span",{class:"token punctuation"},">")]),a("Prima pagina HTML"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("title")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token comment"},"<!-- titolo della pagina -->")]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("style")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},"      body {background-color: powderblue;}"),a(`
`),e("span",{class:"line"},"      h1 {color: blue;}"),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("style")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("script")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},"      function myFunction() { "),a(`
`),e("span",{class:"line"},'        document.getElementById("titolo").innerHTML = "STRUTTURA BASE DI UNA PAGINA WEB";'),a(`
`),e("span",{class:"line"},"      }"),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("script")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("head")]),e("span",{class:"token punctuation"},">")])])])],-1),_x={__name:"27",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[fx,gx,E(i,Y({},{ranges:[""]}),{default:v(()=>[hx]),_:1},16)]),_:1},16)}}},kx=L(_x,[["__file","/@slidev/slides/27.md"]]),vx=e("h1",null,"Struttura pagina HTML",-1),bx=e("p",null,"Pagina HTML base",-1),yx=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("body")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token comment"},"<!-- Corpo principale della pagina HTML-->")]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("center")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h1")]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("titolo"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Struttura base di una pagina web"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("h1")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},"/>")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("img")]),a(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("https://source.unsplash.com/collection/94734566/1920x1080"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("60%"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("div")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("button")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("button"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"onclick"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value javascript language-javascript"},[e("span",{class:"token function"},"myFunction"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")]),a("Prova a premere"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("button")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("div")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("center")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("body")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("html")]),e("span",{class:"token punctuation"},">")])])])],-1),wx={__name:"28",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[vx,bx,E(i,Y({},{ranges:[""]}),{default:v(()=>[yx]),_:1},16)]),_:1},16)}}},zx=L(wx,[["__file","/@slidev/slides/28.md"]]),xx=e("h1",null,"Esercizio html_01",-1),Tx=e("p",null,"Pagina HTML base",-1),$x=e("ol",null,[e("li",null,[a("Creare una pagina HTML come visto nelle slide precedenti e nominarlo "),e("em",null,"pagina.html")]),e("li",null,"Aprire la pagina nel browser e verificarne il funzionamento"),e("li",null,[a("Provare a modificare la sezione "),e("em",null,"body"),a(" e verificare i cambiamenti")]),e("li",null,[a("Provare a modificare la sezione "),e("em",null,"style"),a(" e verificare i cambiamenti")]),e("li",null,[a("Provare a modificare la sezione "),e("em",null,"script"),a(" e verificare i cambiamenti")])],-1),Mx={__name:"29",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[xx,Tx,$x]),_:1},16))}},Lx=L(Mx,[["__file","/@slidev/slides/29.md"]]),Ix=e("h1",{class:"sezione"},"Titoli e Paragrafi in HTML",-1),Ex={__name:"30",setup(n){const t={layout:"section"};return z(M),(s,o)=>(k(),T(In,H(C(t)),{default:v(()=>[Ix]),_:1},16))}},Sx=L(Ex,[["__file","/@slidev/slides/30.md"]]),Cx="/TPSI/4/html/assets/html5_7-c1d52ad4.jpg",Ax=e("h1",null,"HTML Headings",-1),Px=e("p",null,"Titoli e sottotitoli",-1),Hx=e("ul",null,[e("li",null,"Heading o intestazione: sono marcatori HTML che permettono di definire titoli e sottotitoli in una pagina web."),e("li",null,"HTML definisce 6 livelli di heading, dal più importante al meno importante:")],-1),Ox={grid:"~ cols-2 gap-32"},Rx=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"<!--livello più importante-->")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h1")]),e("span",{class:"token punctuation"},">")]),a("Heading 1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("h1")]),e("span",{class:"token punctuation"},">")]),a()]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h2")]),e("span",{class:"token punctuation"},">")]),a("Heading 2"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("h2")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h3")]),e("span",{class:"token punctuation"},">")]),a("Heading 3"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("h3")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h4")]),e("span",{class:"token punctuation"},">")]),a("Heading 4"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("h4")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h5")]),e("span",{class:"token punctuation"},">")]),a("Heading 5"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("h5")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h6")]),e("span",{class:"token punctuation"},">")]),a("Heading 6"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("h6")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"<!--livello meno importante-->")])])],-1),Nx=e("ul",null,[e("li",null,[a("I motori di ricerca usano i tag di "),e("em",null,"heading"),a(" per capire e definire un indice del contenuto di una pagina")]),e("li",null,[e("strong",null,"NOTA"),a(": "),e("em",null,[a("Usa i tag <hN> solo per i titoli e sottotitoli. "),e("strong",null,"NON"),a(" usarli per visualizzare testo in grassetto o con font più grande.")])])],-1),Fx=e("div",null,[e("p",null,[e("img",{src:Cx,alt:"html5_7.jpg"})])],-1),qx={__name:"31",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[Ax,Px,Hx,e("div",Ox,[e("div",null,[E(i,Y({},{ranges:[""]}),{default:v(()=>[Rx]),_:1},16),Nx]),Fx])]),_:1},16)}}},Wx=L(qx,[["__file","/@slidev/slides/31.md"]]),Dx=e("h1",null,"HTML Paragrafi",-1),jx=e("p",null,"Blocchi di testo",-1),Ux=e("ul",null,[e("li",null,"Nell’editing di una pagina HTML, è spesso utile poter inserire un blocco di testo o paragrafo"),e("li",null,[a("HTML mette a disposizione un tag specifico "),e("strong",null,"<p>"),a(" che definisce un paragrafo di testo, lungo a piacere, da visualizzare in una pagina web")])],-1),Bx=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("p")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},"  ..."),a(`
`),e("span",{class:"line"},"  ... Blocco di testo"),a(`
`),e("span",{class:"line"},"  ..."),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("p")]),e("span",{class:"token punctuation"},">")])])])],-1),Kx={__name:"32",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[Dx,jx,Ux,E(i,Y({},{ranges:[""]}),{default:v(()=>[Bx]),_:1},16),a(" - Ogni paragrafo è preceduto e seguito da una linea bianca distanziatrice. - Il browser è libero di aggiunge automaticamente degli spazi (un margine) prima e dopo il testo. - Non si può essere sicuri di come il browser visualizzi il paragrafo. - Il risultato può essere diverso su uno schermo grande rispetto ad uno piccolo. - Pertanto l'aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser. ")]),_:1},16)}}},Vx=L(Kx,[["__file","/@slidev/slides/32.md"]]),Gx=e("h1",null,"Esercizio html_02",-1),Qx=e("p",null,"Heading e paragrafi",-1),Yx=e("ol",null,[e("li",null,[a("Trasformare il file di test "),e("a",{href:"../../support/esercizio_html_02.txt",target:"_blank",rel:"noopener"},[e("em",null,"esercizio_html_02.txt")]),a(" in "),e("em",null,"|cognome|_esercizio_html_02.html")]),e("li",null,"Creare la struttura della pagina HTML inserendo anche i metadati appropriati"),e("li",null,"Impaginare il testo inserendo, in modo appropriato, gli heading necessari per titoli e sottotitoli"),e("li",null,"Suddividere il testo in paragrafi in modo opportuno"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_02.html")],-1),Jx={__name:"33",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[Gx,Qx,Yx]),_:1},16))}},Zx=L(Jx,[["__file","/@slidev/slides/33.md"]]),Xx=e("h1",{class:"sezione"},"Elementi block e inline",-1),eT={__name:"34",setup(n){const t={layout:"section"};return z(M),(s,o)=>(k(),T(In,H(C(t)),{default:v(()=>[Xx]),_:1},16))}},nT=L(eT,[["__file","/@slidev/slides/34.md"]]),tT=e("h1",null,"Display Value",-1),aT=e("p",null,"Elementi inline e block",-1),sT=e("p",null,"Ogni elemento HTML ha un valore di display in funzione del tipo di elemento:",-1),oT=e("h3",null,[e("strong",null,"block"),a(" element")],-1),iT=e("ul",null,[e("li",null,"Un elemento block comincia sempre su una nuova linea"),e("li",null,"Un elemento block occupa tutta la larghezza possibile anche se non necessaria"),e("li",null,"Un elemento block ha un margine superiore ed inferiore")],-1),lT=e("pre",null,[a(`
`),e("div",{style:{border:"1px solid black",padding:"8px 0px 8px 5px"}},"The <div> element is a block-level element."),a(`
`),e("div",{style:{border:"1px solid black",padding:"8px 0px 8px 5px"}},"The <h1> element is another block-level element."),a(`
`)],-1),rT=e("p",null,"Qui la lista di tag di tipo block:",-1),cT=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("address")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("article")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("aside")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("blockquote")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("canvas")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("dd")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("div")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("dl")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("dt")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("fieldset")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("figcaption")]),e("span",{class:"token punctuation"},">")]),a()]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("figure")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("footer")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h1")]),e("span",{class:"token punctuation"},">")]),a("-"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h6")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("header")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("hr")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("li")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("main")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("nav")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("noscript")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("ol")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("p")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("pre")]),e("span",{class:"token punctuation"},">")]),a()]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("section")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("table")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tfoot")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("ul")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("video")]),e("span",{class:"token punctuation"},">")])])])],-1),uT={__name:"35",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[tT,aT,sT,oT,iT,lT,rT,E(i,Y({},{ranges:[""]}),{default:v(()=>[cT]),_:1},16)]),_:1},16)}}},pT=L(uT,[["__file","/@slidev/slides/35.md"]]),dT=e("h1",null,"Display Value",-1),mT=e("p",null,"Elementi inline e block",-1),fT=e("h3",null,[e("strong",null,"inline"),a(" element")],-1),gT=e("ul",null,[e("li",null,"Un elemento inline non comincia su una nuova linea"),e("li",null,"Un elemento inline occupa solo la larghezza minima necessaria")],-1),hT=e("pre",null,[a(`
`),e("span",{style:{padding:"0px 5px 0px 5px",border:"1px solid black"}},"<span> is a inline-level element."),e("span",{style:{padding:"0px 5px 0px 5px",border:"1px solid black"}},"<input> is another inline-level element."),a(`
`)],-1),_T=e("p",null,"Qui la lista di tag di tipo block:",-1),kT=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("a")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("abbr")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("acronym")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("b")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("bdo")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("big")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("button")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("cite")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("code")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("dfn")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("em")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("i")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("img")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),e("span",{class:"token punctuation"},">")]),a()]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("kbd")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("map")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("object")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("output")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("q")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("samp")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("script")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("select")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("small")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("span")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("strong")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("sub")]),e("span",{class:"token punctuation"},">")]),a()]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("sup")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("textarea")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("time")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tt")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("var")]),e("span",{class:"token punctuation"},">")])])])],-1),vT={__name:"36",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[dT,mT,fT,gT,hT,_T,E(i,Y({},{ranges:[""]}),{default:v(()=>[kT]),_:1},16)]),_:1},16)}}},bT=L(vT,[["__file","/@slidev/slides/36.md"]]),yT=e("h1",null,"DIV",-1),wT=e("p",null,"Contenitore di contenitori block",-1),zT=e("ul",null,[e("li",null,[a("Un tag estremamente importante nello sviluppo web moderno è "),e("strong",null,"<div>"),a(".")]),e("li",null,[e("strong",null,"<DIV>"),a(" è di tipo "),e("strong",null,"block"),a(" e definisce un generico blocco di contenuto senza una semantica particolare.")]),e("li",null,"E’ comunemente usato come contenitore per altri elementi HTML o altri div"),e("li",null,"Pertanto DIV è utilizzato per creare delle strutture di layout del contenuto web."),e("li",null,"Insieme a CSS è utilizzato per definire lo stile di blocchi di contenuto")],-1),xT=e("h3",null,"esempio",-1),TT=e("div",{style:{"background-color":"red",color:"white",padding:"20px"}},[e("h2",null,"ATTENZIONE"),e("p",null,"Si richiede a tutti gli studenti di studiare e sperimentare il più possibile con HTML."),e("p",null,"Oggi tutte le moderne applicazioni sono sviluppate in HTML - CSS e JavaScript")],-1),$T={__name:"37",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[yT,wT,zT,xT,TT]),_:1},16))}},MT=L($T,[["__file","/@slidev/slides/37.md"]]),LT=e("h1",null,"SPAN",-1),IT=e("p",null,"Contenitore di contenitori inline",-1),ET=e("ul",null,[e("li",null,[a("Un tag estremamente importante nello sviluppo web moderno è "),e("strong",null,"<span>"),a(".")]),e("li",null,[a("Il tag "),e("strong",null,"<span>"),a(" definisce un generico contenitore di tipo "),e("strong",null,"inline"),a(" a cui non è associata nessuna semantica particolare.")]),e("li",null,"E’ comunemente usato per modificare una parte di testo in un paragrafo on in altre sezione di un documento HTML."),e("li",null,"Insieme a CSS è utilizzato per definire lo stile di parti di testo.")],-1),ST=e("h3",null,"esempio",-1),CT=e("p",null,[a("Comunicato a tutti gli studenti: "),e("span",{style:{color:"white",background:"red","font-weight":"bold"}},"ATTENZIONE"),a(" Si richiede a tutti gli studenti di "),e("span",{style:{color:"darkolivegreen","font-weight":"bold"}},"studiare"),a(" e sperimentare il più possibile con HTML.")],-1),AT={__name:"38",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[LT,IT,ET,ST,CT]),_:1},16))}},PT=L(AT,[["__file","/@slidev/slides/38.md"]]),HT=e("h1",{class:"sezione"},"Ancore e Link",-1),OT={__name:"39",setup(n){const t={layout:"section"};return z(M),(s,o)=>(k(),T(In,H(C(t)),{default:v(()=>[HT]),_:1},16))}},RT=L(OT,[["__file","/@slidev/slides/39.md"]]),NT=e("h1",null,"Ancore e Link",-1),FT=e("p",null,"Collegamenti a contenuti esterni",-1),qT=e("ul",null,[e("li",null,[a("I link sono alla base del concetto di "),e("em",null,"iptertesto"),a(", che a sua volta è alla base dello WWW.")]),e("li",null,[a("I link servono per creare dei "),e("em",null,"collegamenti"),a(" tra documenti diversi in modo da formare un unico "),e("em",null,"ipertesto"),a(".")]),e("li",null,[a("Un link ad una risorsa o documento esterno si crea usando il tag "),e("em",null,"ancora"),a(),e("strong",null,"<a>")])],-1),WT=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("a")]),a(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("url"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("link text"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("a")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},"Esempio"),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("a")]),a(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("https://agnelli.it/"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"target"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("_blank"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Istituto Internazionale E.Agnelli"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("a")]),e("span",{class:"token punctuation"},">")])])])],-1),DT=e("a",{href:"https://agnelli.it/",target:"_parent"},"Istituto Internazionale E.Agnelli",-1),jT=e("ul",null,[e("li",null,[e("strong",null,"href"),a(": attributo che definisce la destinazione dell’ancora e pertanto il link")]),e("li",null,[e("strong",null,"target"),a(": per default il link viene visualizzato nella finestra corrente del browser. Questo attributo permette di modificare il comportamento standard.")])],-1),UT=e("p",null,[a("Il principale valore per "),e("em",null,"target"),a(" è "),e("strong",null,"_blank"),a(", e permette di aprire il documento in un una nuova finestra o tab del browser.")],-1),BT={__name:"40",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[NT,FT,qT,E(i,Y({},{ranges:[""]}),{default:v(()=>[WT]),_:1},16),a(" Qui puoi visitare L'"),DT,jT,UT]),_:1},16)}}},KT=L(BT,[["__file","/@slidev/slides/40.md"]]),VT=e("h1",null,"Ancore e Link",-1),GT=e("p",null,"Collegamenti a contenuti esterni",-1),QT=e("p",null,[a("L’URL specificato nell’attributo "),e("em",null,"href"),a(" può essere:")],-1),YT=e("ul",null,[e("li",null,[e("strong",null,"assoluto"),a(": link ad una risorsa esterna nella forma canonica "),e("em",null,[e("a",{href:"https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",target:"_blank",rel:"noopener"},"https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")])]),e("li",null,[e("strong",null,"relativo"),a(": link relativo ad una risorsa locale, presente nello stesso server "),e("em",null,"/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")])],-1),JT=e("p",null,[a("Questo perchè, tutte le URL relative fanno riferimento ad una directory chiamata "),e("strong",null,"document root"),a(" che rappresenta la root del web server.")],-1),ZT={__name:"41",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[VT,GT,QT,YT,JT]),_:1},16))}},XT=L(ZT,[["__file","/@slidev/slides/41.md"]]),e$=e("h1",null,"Esercizio html_03",-1),n$=e("p",null,"Link",-1),t$=e("ol",null,[e("li",null,[a("Modificare il file "),e("em",null,"|cognome|_esercizio_html_02.html"),a(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_03.html")]),e("li",null,"Trasformare almeno 5 parole in link a risorse esterne"),e("li",null,"Trasformare altre 5 parole in modo che siano visualizzate in verde, blue o rosso"),e("li",null,"Selezionare almeno 2 frasi particolarmente importanti e inserirle in un rettangolo con sfondo blue e testo di color bianco."),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_03.html")],-1),a$=e("p",null,[e("em",null,[a("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),s$={__name:"42",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[e$,n$,t$,a$]),_:1},16))}},o$=L(s$,[["__file","/@slidev/slides/42.md"]]),i$=e("h1",{class:"sezione"},"Web grafico con le Immagini",-1),l$={__name:"43",setup(n){const t={layout:"section"};return z(M),(s,o)=>(k(),T(In,H(C(t)),{default:v(()=>[i$]),_:1},16))}},r$=L(l$,[["__file","/@slidev/slides/43.md"]]),c$=e("h1",null,"Immagini",-1),u$=e("p",null,"Il Web diventa grafico",-1),p$=e("ul",null,[e("li",null,"La versione iniziale del WWW, prevedeva solo l’uso di informazioni testuali e non supportava l’uso di immagini all’interno delle pagine web."),e("li",null,"Con la nuova specifica HTML 2.0 del 1995, viene introdotto il nuovo tag <img> che permette di inserire immagini nelle pagine web.")],-1),d$=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("img")]),a(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("url"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"alt"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("alternatetext"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),m$=e("p",null,"Normalmente si specificano anche gli attributi:",-1),f$=e("ul",null,[e("li",null,[e("strong",null,"width"),a(": specifica la larghezza dell’immaggine in pixel")]),e("li",null,[e("strong",null,"height"),a(": specifica l’altezza dell’immagine in pixel")])],-1),g$={__name:"44",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[c$,u$,p$,E(i,Y({},{ranges:[""]}),{default:v(()=>[d$]),_:1},16),a(" - **src**: attributo che specifica il percorso/link (relativo o assoluto) all'immagine - **alt**: in caso in cui l'immagine non possa essere visualizzata, specifica un testo alternativo "),m$,f$]),_:1},16)}}},h$=L(g$,[["__file","/@slidev/slides/44.md"]]),_$=e("h1",null,"Immagini",-1),k$=e("p",null,"Il Web diventa grafico",-1),v$=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("img")]),a(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("250"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"alt"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("primo web server"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},"/>")])])])],-1),b$=e("img",{src:"https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg",width:"250",alt:"primo web server"},null,-1),y$={__name:"45",setup(n){const t={};return z(M),(s,o)=>{const i=ie,l=ro("center");return k(),T(F,H(C(t)),{default:v(()=>[_$,k$,E(i,Y({},{ranges:[""]}),{default:v(()=>[v$]),_:1},16),E(l,null,{default:v(()=>[b$]),_:1})]),_:1},16)}}},w$=L(y$,[["__file","/@slidev/slides/45.md"]]),z$=e("h1",null,"Immagini",-1),x$=e("p",null,"Il Web diventa grafico",-1),T$=e("ul",null,[e("li",null,"I tag HTML possono essere nidificati, cioè dichiarati uno dentro l’altro."),e("li",null,"Questa importante proprietà ci permette di creare un link grafico all’interno di una pagina web.")],-1),$$=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("a")]),a(),e("span",{class:"token attr-name"},"href"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("http://info.cern.ch/hypertext/WWW/TheProject.html"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"target"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("_blank"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("img")]),a(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("250"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"alt"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("primo web server"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("a")]),e("span",{class:"token punctuation"},">")])])])],-1),M$=e("a",{href:"http://info.cern.ch/hypertext/WWW/TheProject.html",target:"_blank"},[e("img",{src:"https://cdn.ttgtmedia.com/rms/computerweekly/berners-lee-with-next.jpg",width:"200",alt:"primo web server"})],-1),L$={__name:"46",setup(n){const t={};return z(M),(s,o)=>{const i=ie,l=ro("center");return k(),T(F,H(C(t)),{default:v(()=>[z$,x$,T$,E(i,Y({},{ranges:[""]}),{default:v(()=>[$$]),_:1},16),E(l,null,{default:v(()=>[M$]),_:1})]),_:1},16)}}},I$=L(L$,[["__file","/@slidev/slides/46.md"]]),E$=e("h1",null,"Esercizio html_04",-1),S$=e("p",null,"Link",-1),C$=e("ol",null,[e("li",null,[a("Editare il file "),e("em",null,"|cognome|_esercizio_html_03.html"),a(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_04.html")]),e("li",null,"Aggiungere almeno 1 immagine, relative al testo, come risorsa esterna (link assoluto)"),e("li",null,"Aggiungere almeno 1 immagine, relative al testo, come risorsa interna (link relativo)"),e("li",null,"Aggiungere almeno 1 immagine, relative al testo, che sia anche un link ad una pagina esterna"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_04.html")],-1),A$=e("p",null,[e("em",null,[a("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),P$={__name:"47",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[E$,S$,C$,A$]),_:1},16))}},H$=L(P$,[["__file","/@slidev/slides/47.md"]]),O$=e("h1",{class:"sezione"},"Formattazione del testo in HTML",-1),R$={__name:"48",setup(n){const t={layout:"section"};return z(M),(s,o)=>(k(),T(In,H(C(t)),{default:v(()=>[O$]),_:1},16))}},N$=L(R$,[["__file","/@slidev/slides/48.md"]]),F$=e("h1",null,"Formattazione del Testo",-1),q$=e("p",null,"Tag di formattazione",-1),W$=e("ul",null,[e("li",null,"HTML mette a disposizione 10 tag specifici per la definizione di testo con particolare significato."),e("li",null,"Questi tag definiscono la semantica e cioè il significato del testo che racchiudono."),e("li",null,"Il browser decide come visualizzare il testo racchiuso in questi tag")],-1),D$=e("br",null,null,-1),j$=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("b")]),e("span",{class:"token punctuation"},">")]),a(": testo in grassetto senza significato aggiuntivo")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("strong")]),e("span",{class:"token punctuation"},">")]),a(": testo con molta importanza. Normalmente visualizzatto in grassetto")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("i")]),e("span",{class:"token punctuation"},">")]),a(": testo alternativo, un termine tecnico, una parola straniera. Normalmente visualizzato in italico")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("em")]),e("span",{class:"token punctuation"},">")]),a(": testo con particolare enfasi.Normalmente viene visualizzato in italico")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("mark")]),e("span",{class:"token punctuation"},">")]),a(": testo che deve essere evidenziato")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("small")]),e("span",{class:"token punctuation"},">")]),a(": testo con dimensioni minori e quindi con meno importanza")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("del")]),e("span",{class:"token punctuation"},">")]),a(": testo che è stato eliminato dal documento. Normalmente visualizzato con una linea sul testo")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("ins")]),e("span",{class:"token punctuation"},">")]),a(": testo che è stato aggiunto al documento. Normalmente visualizzato come testo sottolineato")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("sub")]),e("span",{class:"token punctuation"},">")]),a(": - definisce un testo come pedice")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("sup")]),e("span",{class:"token punctuation"},">")]),a(": - definisce un testo come apice")])])],-1),U$={__name:"49",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[F$,q$,W$,D$,E(i,Y({},{ranges:[""]}),{default:v(()=>[j$]),_:1},16)]),_:1},16)}}},B$=L(U$,[["__file","/@slidev/slides/49.md"]]),K$=e("h1",null,"Formattazione del Testo",-1),V$=e("p",null,"Tag di formattazione",-1),G$=e("ul",null,[e("li",null,"bold")],-1),Q$=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("In un paragrafo spesso vogliamo poter evidenziare una parola in "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("b")]),e("span",{class:"token punctuation"},">")]),a("grassetto"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("b")]),e("span",{class:"token punctuation"},">")]),a(".")])])],-1),Y$=e("b",null,"grassetto",-1),J$=e("ul",null,[e("li",null,"strong")],-1),Z$=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("Spesso è necessario definire una parola "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("strong")]),e("span",{class:"token punctuation"},">")]),a("molto importante"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("strong")]),e("span",{class:"token punctuation"},">")]),a(".")])])],-1),X$=e("strong",null,"molto importante",-1),e2=e("ul",null,[e("li",null,"italico")],-1),n2=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("Alcune volte è necessario definire un termine tecnico come "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("i")]),e("span",{class:"token punctuation"},">")]),a("Web Server"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("i")]),e("span",{class:"token punctuation"},">")])])])],-1),t2=e("i",null,"Web Server",-1),a2={__name:"50",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[K$,V$,G$,E(i,Y({},{ranges:[""]}),{default:v(()=>[Q$]),_:1},16),a(" In un paragrafo spesso vogliamo poter evidenziare una parola in "),Y$,a(". "),J$,E(i,Y({},{ranges:[""]}),{default:v(()=>[Z$]),_:1},16),a(" Spesso è necessario definire una parola "),X$,a(". "),e2,E(i,Y({},{ranges:[""]}),{default:v(()=>[n2]),_:1},16),a(" Alcune volte è necessario definire un termine tecnico come "),t2]),_:1},16)}}},s2=L(a2,[["__file","/@slidev/slides/50.md"]]),o2=e("h1",null,"Formattazione del Testo",-1),i2=e("p",null,"Tag di formattazione",-1),l2=e("ul",null,[e("li",null,"enfasi")],-1),r2=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("In un testo ci sono specifiche parole a cui si vuole dare "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("em")]),e("span",{class:"token punctuation"},">")]),a("enfasi"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("em")]),e("span",{class:"token punctuation"},">")]),a(".")])])],-1),c2=e("em",null,"enfasi",-1),u2=e("ul",null,[e("li",null,"mark")],-1),p2=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("Un altro modo per "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("mark")]),e("span",{class:"token punctuation"},">")]),a("evidenziare"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("mark")]),e("span",{class:"token punctuation"},">")]),a(" una o più parole è usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("b")]),e("span",{class:"token punctuation"},">")]),a("mark"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("b")]),e("span",{class:"token punctuation"},">")])])])],-1),d2=e("mark",null,"evidenziare",-1),m2=e("b",null,"mark",-1),f2=e("ul",null,[e("li",null,"small")],-1),g2=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("Al contrario quando un testo "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("small")]),e("span",{class:"token punctuation"},">")]),a("è di poca importanza"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("small")]),e("span",{class:"token punctuation"},">")]),a(" si può usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("b")]),e("span",{class:"token punctuation"},">")]),a("small"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("b")]),e("span",{class:"token punctuation"},">")])])])],-1),h2=e("small",null,"è di poca importanza",-1),_2=e("b",null,"small",-1),k2={__name:"51",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[o2,i2,l2,E(i,Y({},{ranges:[""]}),{default:v(()=>[r2]),_:1},16),a(" In un testo ci sono specifiche parole a cui si vuole dare "),c2,a(". "),u2,E(i,Y({},{ranges:[""]}),{default:v(()=>[p2]),_:1},16),a(" Un altro modo per "),d2,a(" una o più parole è usare il tag "),m2,f2,E(i,Y({},{ranges:[""]}),{default:v(()=>[g2]),_:1},16),a(" Al contrario quando un testo "),h2,a(" si può usare il tag "),_2]),_:1},16)}}},v2=L(k2,[["__file","/@slidev/slides/51.md"]]),b2=e("h1",null,"Formattazione del Testo",-1),y2=e("p",null,"Tag di formattazione",-1),w2=e("ul",null,[e("li",null,"del e ins")],-1),z2=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("Il mio cibo preferito è il "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("del")]),e("span",{class:"token punctuation"},">")]),a("pollo"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("del")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("ins")]),e("span",{class:"token punctuation"},">")]),a("tacchino"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("ins")]),e("span",{class:"token punctuation"},">")]),a(".")])])],-1),x2=e("del",null,"pollo",-1),T2=e("ins",null,"tacchino",-1),$2=e("ul",null,[e("li",null,"sub e sup")],-1),M2=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("Il logaritmo in base 2 di 8 è 3: log"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("sub")]),e("span",{class:"token punctuation"},">")]),a("2"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("sub")]),e("span",{class:"token punctuation"},">")]),a(" 8 = 3")]),a(`
`),e("span",{class:"line"},[a("In modo analogo 2 elevato alla 3 fa 8: 2"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("sup")]),e("span",{class:"token punctuation"},">")]),a("3"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("sup")]),e("span",{class:"token punctuation"},">")]),a(" = 8")]),a(`
`),e("span",{class:"line"},[a("In generale gli "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("sup")]),e("span",{class:"token punctuation"},">")]),a("apici"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("sup")]),e("span",{class:"token punctuation"},">")]),a(" si ottengono son il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("b")]),e("span",{class:"token punctuation"},">")]),a("sup"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("b")]),e("span",{class:"token punctuation"},">")]),a()]),a(`
`),e("span",{class:"line"},[a("mentre i "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("sub")]),e("span",{class:"token punctuation"},">")]),a("pedici"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("sub")]),e("span",{class:"token punctuation"},">")]),a(" con il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("b")]),e("span",{class:"token punctuation"},">")]),a("sub"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("b")]),e("span",{class:"token punctuation"},">")])])])],-1),L2=e("sub",null,"2",-1),I2=e("p",null,[a("In modo analogo 2 elevato alla 3 fa 8: 2"),e("sup",null,"3"),a(" = 8")],-1),E2=e("p",null,[a("In generale gli "),e("sup",null,"apici"),a(" si ottengono son il tag "),e("b",null,"sup"),a(" mentre i "),e("sub",null,"pedici"),a(" con il tag "),e("b",null,"sub")],-1),S2={__name:"52",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[b2,y2,w2,E(i,Y({},{ranges:[""]}),{default:v(()=>[z2]),_:1},16),a(" Il mio cibo preferito è il "),x2,a(),T2,a(". "),$2,E(i,Y({},{ranges:[""]}),{default:v(()=>[M2]),_:1},16),a(" Il logaritmo in base 2 di 8 è 3: log"),L2,a(" 8 = 3 "),I2,E2]),_:1},16)}}},C2=L(S2,[["__file","/@slidev/slides/52.md"]]),A2=e("h1",null,"Esercizio html_05",-1),P2=e("p",null,"Link",-1),H2=e("ol",null,[e("li",null,[a("Editare il file "),e("em",null,"|cognome|_esercizio_html_04.html"),a(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_05.html")]),e("li",null,"evidenziare 5 parole in bold"),e("li",null,"marcare 5 parole particolarmente importanti"),e("li",null,"evidenziare 5 parole alternative o termini tecnici"),e("li",null,"dare enfasi a 5 parole"),e("li",null,"evidenziare (mark) 5 parole significative"),e("li",null,"rendere più piccole 5 parole poco significative"),e("li",null,"marcare 5 parole come eliminate dal testo"),e("li",null,"marcare 5 parole come inserite nel testo"),e("li",null,"dove possibile marcare almeno 1 parola come apice ed 1 come pedice"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_05.html")],-1),O2=e("p",null,[e("em",null,[a("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),R2={__name:"53",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[A2,P2,H2,O2]),_:1},16))}},N2=L(R2,[["__file","/@slidev/slides/53.md"]]),F2=e("h1",null,"Formattazione del Testo",-1),q2=e("p",null,"Tag per Quotazioni e Citazioni",-1),W2=e("ul",null,[e("li",null,"HTML mette a disposizione 4 tag specifici per la definizione di testo che rappresenta una citazione o una quote."),e("li",null,"Questi tag definiscono la semantica e cioè il significato del testo che racchiudono."),e("li",null,"Il browser decide come visualizzare il testo racchiuso in questi tag")],-1),D2=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("blockquote")]),e("span",{class:"token punctuation"},">")]),a(": definisce una porzione di testo come una citazione esterna")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("q")]),e("span",{class:"token punctuation"},">")]),a(": definisce una breve citazione")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("abbr")]),e("span",{class:"token punctuation"},">")]),a(": definisce un'abbreviazione o un acronimo")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("cite")]),e("span",{class:"token punctuation"},">")]),a(": citazione ad un lavoro altrui (libro, sito web, ...)")])])],-1),j2={__name:"54",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[F2,q2,W2,E(i,Y({},{ranges:[""]}),{default:v(()=>[D2]),_:1},16)]),_:1},16)}}},U2=L(j2,[["__file","/@slidev/slides/54.md"]]),B2=e("h1",null,"Formattazione del Testo",-1),K2=e("p",null,"Tag per Quotazioni e Citazioni",-1),V2=e("ul",null,[e("li",null,"blockquote")],-1),G2=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},'Alle volte in un testo si vuole "quotare" un altro autore.'),a(`
`),e("span",{class:"line"},"Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale."),a(`
`),e("span",{class:"line"},[a("Quindi con il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("b")]),e("span",{class:"token punctuation"},">")]),a("blockquote"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("b")]),e("span",{class:"token punctuation"},">")]),a(" si può definire una quotazione")]),a(`
`),e("span",{class:"line"},"indicando la sorgente dell'informazione"),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("blockquote")]),a(),e("span",{class:"token attr-name"},"cite"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("https://it.wikipedia.org/wiki/Giovanni_Bosco"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},"  La sottrazione di benevolenza è un castigo che eccita l'emulazione"),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("blockquote")]),e("span",{class:"token punctuation"},">")])])])],-1),Q2=e("b",null,"blockquote",-1),Y2=e("blockquote",{cite:"https://it.wikipedia.org/wiki/Giovanni_Bosco"}," La sottrazione di benevolenza è un castigo che eccita l'emulazione ",-1),J2=e("ul",null,[e("li",null,"Come si può notare la citazione è indentata. Il link alla citazione non ha un effetto visivo ma può essere utile al motore di ricerca o altri tool.")],-1),Z2={__name:"55",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[B2,K2,V2,E(i,Y({},{ranges:[""]}),{default:v(()=>[G2]),_:1},16),a(` Alle volte in un testo si vuole "quotare" un altro autore. Tuttavia non sempre è possibile riportare il riferimento all'autore in modo integrale. Quindi con il tag `),Q2,a(" si può definire una quotazione indicando la sorgente dell'informazione "),Y2,J2]),_:1},16)}}},X2=L(Z2,[["__file","/@slidev/slides/55.md"]]),eM=e("h1",null,"Formattazione del Testo",-1),nM=e("p",null,"Tag per Quotazioni e Citazioni",-1),tM=e("ul",null,[e("li",null,"quotazione")],-1),aM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("Quando in un testo vogliamo fare una "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("q")]),e("span",{class:"token punctuation"},">")]),a("breve citazione"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("q")]),e("span",{class:"token punctuation"},">")]),a(", basta inserire il testo nel tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("b")]),e("span",{class:"token punctuation"},">")]),a("q"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("b")]),e("span",{class:"token punctuation"},">")])])])],-1),sM=e("q",null,"breve citazione",-1),oM=e("b",null,"q",-1),iM=e("ul",null,[e("li",null,"abbreviazione")],-1),lM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("abbr")]),a(),e("span",{class:"token attr-name"},"title"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Gnu is Not Unix"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("GNU"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("abbr")]),e("span",{class:"token punctuation"},">")]),a("di GNU/Linux sembra una  parola ma in realtà è un acronimo.")])])],-1),rM=e("abbr",{title:"Gnu is Not Unix"},"GNU",-1),cM=e("ul",null,[e("li",null,"citazione lavoro altrui")],-1),uM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("Un alternativa per una citazione è usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("b")]),e("span",{class:"token punctuation"},">")]),a("cite"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("b")]),e("span",{class:"token punctuation"},">")]),a(". ")]),a(`
`),e("span",{class:"line"},[a("In una disicussione accesa Linus disse: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("cite")]),e("span",{class:"token punctuation"},">")]),a('"Parlare è facile. Mostrami il codice".'),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("cite")]),e("span",{class:"token punctuation"},">")])])])],-1),pM=e("b",null,"cite",-1),dM=e("cite",null,'"Parlare è facile. Mostrami il codice".',-1),mM={__name:"56",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[eM,nM,tM,E(i,Y({},{ranges:[""]}),{default:v(()=>[aM]),_:1},16),a(" Quando in un testo vogliamo fare una "),sM,a(", basta inserire il testo nel tag "),oM,iM,E(i,Y({},{ranges:[""]}),{default:v(()=>[lM]),_:1},16),rM,a(" di GNU/Linux sembra una parola ma in realtà è un acronimo. "),cM,E(i,Y({},{ranges:[""]}),{default:v(()=>[uM]),_:1},16),a(" Un alternativa per una citazione è usare il tag "),pM,a(". In una disicussione accesa Linus disse: "),dM]),_:1},16)}}},fM=L(mM,[["__file","/@slidev/slides/56.md"]]),gM=e("h1",null,"Esercizio html_06",-1),hM=e("p",null,"Link",-1),_M=e("ol",null,[e("li",null,[a("Editare il file "),e("em",null,"|cognome|_esercizio_html_05.html"),a(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_06.html")]),e("li",null,"creare una citazione per un blocco di testo"),e("li",null,"marcare 3 frasi o parole come brevi citazioni"),e("li",null,"marcare almeno 3 abbreviazioni"),e("li",null,"marcare 1 citazione (cite) di qualche altro autore"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_06.html")],-1),kM=e("p",null,[e("em",null,[a("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),vM={__name:"57",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[gM,hM,_M,kM]),_:1},16))}},bM=L(vM,[["__file","/@slidev/slides/57.md"]]),yM=e("h1",null,"Formattazione del Testo",-1),wM=e("p",null,"Tag addizionali",-1),zM=e("ul",null,[e("li",null,"Ci sono altri tag che formattano il testo ma che non hanno una semantica particolare.")],-1),xM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("u")]),e("span",{class:"token punctuation"},">")]),a(": definisce un testo sottolineato")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("s")]),e("span",{class:"token punctuation"},">")]),a(": definisce una testo sbarrato")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("code")]),e("span",{class:"token punctuation"},">")]),a(": definisce un blocco di testo come codice sorgente")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("pre")]),e("span",{class:"token punctuation"},">")]),a(": marca una porzione di testo come pre formattato")])])],-1),TM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("Se si vuole "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("u")]),e("span",{class:"token punctuation"},">")]),a("sottolineare"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("u")]),e("span",{class:"token punctuation"},">")]),a(" una parola basta usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("u")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("u")]),e("span",{class:"token punctuation"},">")])])])],-1),$M=e("u",null,"sottolineare",-1),MM=e("ul",null,[e("li",null,"sbarrato")],-1),LM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("Se si vuole "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("s")]),e("span",{class:"token punctuation"},">")]),a("sbarrare"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("s")]),e("span",{class:"token punctuation"},">")]),a(" una parola basta usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("s")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("s")]),e("span",{class:"token punctuation"},">")])])])],-1),IM=e("s",null,"sbarrare",-1),EM={__name:"58",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[yM,wM,zM,E(i,Y({},{ranges:[""]}),{default:v(()=>[xM]),_:1},16),a(" - sottolineato "),E(i,Y({},{ranges:[""]}),{default:v(()=>[TM]),_:1},16),a(" Se si vuole "),$M,a(" una parola basta usare il tag <u> "),MM,E(i,Y({},{ranges:[""]}),{default:v(()=>[LM]),_:1},16),a(" Se si vuole "),IM,a(" una parola basta usare il tag <s> ")]),_:1},16)}}},SM=L(EM,[["__file","/@slidev/slides/58.md"]]),CM=e("h1",null,"Formattazione del Testo",-1),AM=e("p",null,"Tag addizionali",-1),PM=e("ul",null,[e("li",null,"codice sorgente")],-1),HM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Spesso negli articoli informatici vengono riportati comandi o porzioni di codice."),a(`
`),e("span",{class:"line"},[a("Per farlo in modo corretto usa il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("b")]),e("span",{class:"token punctuation"},">")]),a("code"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("b")]),e("span",{class:"token punctuation"},">")]),a("."),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("Per installare vscode in Linux usa il comando: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("code")]),e("span",{class:"token punctuation"},">")]),a("apt install vscode"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("code")]),e("span",{class:"token punctuation"},">")])])])],-1),OM=e("b",null,"code",-1),RM=e("br",null,null,-1),NM=e("p",null,[a("Per installare vscode in Linux usa il comando: "),e("code",null,"apt install vscode")],-1),FM={__name:"59",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[CM,AM,PM,E(i,Y({},{ranges:[""]}),{default:v(()=>[HM]),_:1},16),a(" Spesso negli articoli informatici vengono riportati comandi o porzioni di codice. Per farlo in modo corretto usa il tag "),OM,a("."),RM,NM]),_:1},16)}}},qM=L(FM,[["__file","/@slidev/slides/59.md"]]),WM=e("h1",null,"Formattazione del Testo",-1),DM=e("p",null,"Tag addizionali",-1),jM=e("ul",null,[e("li",null,"pre formattato")],-1),UM=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Negli articoli può essere necessario riportare una porzione di testo con una formattazione specifica."),a(`
`),e("span",{class:"line"},[a("Per evitare che il browser foramtti il testo in modo autonomo usa il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("b")]),e("span",{class:"token punctuation"},">")]),a("pre"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("b")]),e("span",{class:"token punctuation"},">")]),a(". "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("pre")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},"    Questo testo       viene visualizzato esatta "),a(`
`),e("span",{class:"line"},"    mente come fornito dallo sviluppatore.    "),a(`
`),e("span",{class:"line"},"    Venogno rispettrati    gli spazi e i ritorni "),a(`
`),e("span",{class:"line"},"    a "),a(`
`),e("span",{class:"line"},"    capo."),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("pre")]),e("span",{class:"token punctuation"},">")])])])],-1),BM=e("br",null,null,-1),KM=e("pre",null,`    Questo testo       viene visualizzato esatta 
    mente come fornito dallo sviluppatore.    
    Venogno rispettrati    gli spazi e i ritorni 
    a 
    capo.
`,-1),VM={__name:"60",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[WM,DM,jM,E(i,Y({},{ranges:[""]}),{default:v(()=>[UM]),_:1},16),BM,KM]),_:1},16)}}},GM=L(VM,[["__file","/@slidev/slides/60.md"]]),QM=e("h1",null,"Esercizio html_07",-1),YM=e("p",null,"Link",-1),JM=e("ol",null,[e("li",null,[a("Editare il file "),e("em",null,"|cognome|_esercizio_html_06.html"),a(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_07.html")]),e("li",null,"marcare 5 parole come sottolineate"),e("li",null,"marcare 5 parole come sbarrate"),e("li",null,"aggiungere una porzione di codice sorgente o comando linux"),e("li",null,"aggiungere una sezione di testo pre formattata"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_07.html")],-1),ZM=e("p",null,[e("em",null,[a("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),XM={__name:"61",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[QM,YM,JM,ZM]),_:1},16))}},eL=L(XM,[["__file","/@slidev/slides/61.md"]]),nL=e("h1",null,"Formattazione del Testo",-1),tL=e("p",null,"Tag addizionali",-1),aL=e("ul",null,[e("li",null,[e("p",null,"Durante la realizzazione di una pagina web ci possono essere delle esigenze particolari di formattazione.")]),e("li",null,[e("p",null,"HTML fornisce altri tag aggiuntivi utili per forzare un ritorno a capo e per visualizzare una linea di suddivisione orizzontale")]),e("li",null,[e("p",null,"ritorno a capo")])],-1),sL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("In alcuni casi è necessario forzare un ritorno a capo. "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("Per fare ciò basta usare il tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},"/>")])])])],-1),oL=e("br",null,null,-1),iL=e("ul",null,[e("li",null,"linea orizzontale")],-1),lL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("Per inserire una linea orizzontale di separazione usa "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("hr")]),a(),e("span",{class:"token punctuation"},"/>")])])])],-1),rL=e("hr",{style:{height:"5px","background-color":"grey"}},null,-1),cL={__name:"62",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[nL,tL,aL,E(i,Y({},{ranges:[""]}),{default:v(()=>[sL]),_:1},16),a(" In alcuni casi è necessario forzare un ritorno a capo. "),oL,a(" Per fare ciò basta usare il tag <br/> "),iL,E(i,Y({},{ranges:[""]}),{default:v(()=>[lL]),_:1},16),rL]),_:1},16)}}},uL=L(cL,[["__file","/@slidev/slides/62.md"]]),pL=e("h1",null,"Formattazione del Testo",-1),dL=e("p",null,"Tag addizionali",-1),mL=e("ul",null,[e("li",null,"barra per metrica")],-1),fL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meter")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[a("Andamento dei voti:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[a("Studente 1 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meter")]),a(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("0"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("10"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("8.0"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("8 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),a(),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("Studente 2 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meter")]),a(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("0"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("10"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("6.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("6.5 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),a(),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("Studente 3 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meter")]),a(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("0"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("10"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("9.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("9.5 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),a(),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("Studente 4 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("meter")]),a(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("0"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("10"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("4.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("4.5 su 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("meter")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),a(),e("span",{class:"token punctuation"},"/>")])])])],-1),gL=e("p",null,[a("Andamento dei voti:"),e("br")],-1),hL=e("p",null,[a("Studente 1 "),e("meter",{min:"0",max:"10",value:"8.0"},"8 su 10"),e("br"),a(" Studente 2 "),e("meter",{min:"0",max:"10",value:"6.5"},"6.5 su 10"),e("br"),a(" Studente 3 "),e("meter",{min:"0",max:"10",value:"9.5"},"9.5 su 10"),e("br"),a(" Studente 4 "),e("meter",{min:"0",max:"10",value:"4.5"},"4.5 su 10"),e("br")],-1),_L={__name:"63",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[pL,dL,mL,E(i,Y({},{ranges:[""]}),{default:v(()=>[fL]),_:1},16),a(" Un modo molto efficace per visualizzare il progresso di un attività o evento è l'uso del tag <meter> "),gL,hL]),_:1},16)}}},kL=L(_L,[["__file","/@slidev/slides/63.md"]]),vL=e("h1",null,"Formattazione del Testo",-1),bL=e("p",null,"Tag addizionali",-1),yL=e("ul",null,[e("li",null,"barra di progresso")],-1),wL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("In alternativa si può visualizzare un progress bar tramite l'uso del tag "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("progress")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[a("Andamento dei voti:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[a("Studente 1 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("progress")]),a(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("0"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("10"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("8"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("8 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),a(),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("Studente 2 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("progress")]),a(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("0"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("10"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("6.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("6.5 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),a(),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("Studente 3 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("progress")]),a(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("0"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("10"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("9.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("9.5 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),a(),e("span",{class:"token punctuation"},"/>")])]),a(`
`),e("span",{class:"line"},[a("Studente 4 "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("progress")]),a(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("0"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("10"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("4.5"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("4.5 di 10"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("progress")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),a(),e("span",{class:"token punctuation"},"/>")])])])],-1),zL=e("p",null,[a("Andamento dei voti:"),e("br")],-1),xL=e("p",null,[a("Studente 1 "),e("progress",{min:"0",max:"10",value:"8"},"8 di 10"),e("br"),a(" Studente 2 "),e("progress",{min:"0",max:"10",value:"6.5"},"6.5 di 10"),e("br"),a(" Studente 3 "),e("progress",{min:"0",max:"10",value:"9.5"},"9.5 di 10"),e("br"),a(" Studente 4 "),e("progress",{min:"0",max:"10",value:"4.5"},"4.5 di 10"),e("br")],-1),TL={__name:"64",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[vL,bL,yL,E(i,Y({},{ranges:[""]}),{default:v(()=>[wL]),_:1},16),a(" In alternativa si può visualizzare un progress bar tramite l'uso del tag <progress> "),zL,xL]),_:1},16)}}},$L=L(TL,[["__file","/@slidev/slides/64.md"]]),ML=e("h1",null,"Esercizio html_08",-1),LL=e("p",null,"Link",-1),IL=e("ol",null,[e("li",null,[a("Editare il file "),e("em",null,"|cognome|_esercizio_html_07.html"),a(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_08.html")]),e("li",null,"Inserire 5 ritorni a capo forzati"),e("li",null,"Inserire 3 linee orizzontali di separazione"),e("li",null,"Inserire 5 meter bar"),e("li",null,"Inserire 5 progress bar"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_08.html")],-1),EL=e("p",null,[e("em",null,[a("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),SL={__name:"65",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[ML,LL,IL,EL]),_:1},16))}},CL=L(SL,[["__file","/@slidev/slides/65.md"]]),AL=e("h1",{class:"sezione"},"Caratteri speciali in HTML",-1),PL={__name:"66",setup(n){const t={layout:"section"};return z(M),(s,o)=>(k(),T(In,H(C(t)),{default:v(()=>[AL]),_:1},16))}},HL=L(PL,[["__file","/@slidev/slides/66.md"]]),OL=e("h1",null,"HTML Entities",-1),RL=e("p",null,"Uso di caratteri riservati",-1),NL=e("ul",null,[e("li",null,"Nella realizzazione di una pagina web, non è possibile usare tutti i caratteri disponibili."),e("li",null,"Alcuni caratteri sono riservati dallo standard HTML per usi specifici."),e("li",null,"Per esempio i caratteri < e > sono riservati in quanto servono per delimitare un tag HTML."),e("li",null,[a("Per inserire i caratteri riservati come parte del contenuto di una pagina HTML, si devono sostituire con "),e("em",null,[e("strong",null,"HTML entities")])])],-1),FL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"&entity_name;"),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},"oppure "),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},"&#entity_number;")])],-1),qL=e("ul",null,[e("li",null,"Pertanto il carattere < e > sono rappresentati in questo modo")],-1),WL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[a("< --> "),e("span",{class:"token entity named-entity",title:"<"},"&lt;"),a(" o "),e("span",{class:"token entity",title:"<"},"&#60;")]),a(`
`),e("span",{class:"line"},[a("> --> "),e("span",{class:"token entity named-entity",title:">"},"&gt;"),a(" o "),e("span",{class:"token entity",title:">"},"&#62;")])])],-1),DL={__name:"67",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[OL,RL,NL,E(i,Y({},{ranges:[""]}),{default:v(()=>[FL]),_:1},16),qL,E(i,Y({},{ranges:[""]}),{default:v(()=>[WL]),_:1},16),a(" [Qui si può consultare la lista completa di entities HTML.](https://www.freeformatter.com/html-entities.html) ")]),_:1},16)}}},jL=L(DL,[["__file","/@slidev/slides/67.md"]]),UL=e("h1",null,"HTML Entities",-1),BL=e("p",null,"Uso di caratteri riservati",-1),KL=e("ul",null,[e("li",null,"In alcune occasioni è necessario indicare al browser di non andare a capo."),e("li",null,[a("Per fare ciò si usa il carattere "),e("em",null,"non breaking space")]),e("li",null,"In altre parole inserendo questo carattere, si inserisce uno spazio che non può mandare la linea a capo")],-1),VL=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"non breaking space"),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{class:"token entity named-entity",title:" "},"&nbsp;")])])],-1),GL=e("ul",null,[e("li",null,"In modo analogo, ricordiamoci che se inserisco 10 spazi, il browser ne rimuove 9"),e("li",null,[a("Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte "),e("code",null,"&nbsp;")])],-1),QL={__name:"68",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[UL,BL,KL,E(i,Y({},{ranges:[""]}),{default:v(()=>[VL]),_:1},16),GL]),_:1},16)}}},YL=L(QL,[["__file","/@slidev/slides/68.md"]]),JL=e("h1",null,"HTML Entities",-1),ZL=e("p",null,"Uso di caratteri riservati",-1),XL=e("ul",null,[e("li",null,"Qui una lista di HTML entities comuemente usate")],-1),eI=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Carattere"),e("th",null,"Descizione"),e("th",null,"Nome Entità"),e("th",null,"Numero Entità")])]),e("tbody",null,[e("tr",null,[e("td"),e("td",null,"non-breaking space"),e("td",null,[e("code",null,"&nbsp;")]),e("td",null,[e("code",null,"&#160;")])]),e("tr",null,[e("td",null,"<"),e("td",null,"less than"),e("td",null,[e("code",null,"&lt;")]),e("td",null,[e("code",null,"&#60;")])]),e("tr",null,[e("td",null,">"),e("td",null,"greater than"),e("td",null,[e("code",null,"&gt;")]),e("td",null,[e("code",null,"&#62;")])]),e("tr",null,[e("td",null,[e("code",null,"&")]),e("td",null,"ampersand"),e("td",null,[e("code",null,"&amp;")]),e("td",null,[e("code",null,"&#38;")])]),e("tr",null,[e("td",null,'"'),e("td",null,"double quotation mark"),e("td",null,[e("code",null,"&quot;")]),e("td",null,[e("code",null,"&#34;")])]),e("tr",null,[e("td",null,"’"),e("td",null,"single quotation mark (apostrophe)"),e("td",null,[e("code",null,"&apos;")]),e("td",null,[e("code",null,"&#39;")])]),e("tr",null,[e("td",null,"€"),e("td",null,"euro"),e("td",null,[e("code",null,"&euro;")]),e("td",null,[e("code",null,"&#8364;")])]),e("tr",null,[e("td",null,"©"),e("td",null,"copyright"),e("td",null,[e("code",null,"&copy;")]),e("td",null,[e("code",null,"&#169;")])])])],-1),nI={__name:"69",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[JL,ZL,XL,eI]),_:1},16))}},tI=L(nI,[["__file","/@slidev/slides/69.md"]]),aI=e("h1",{class:"sezione"},"Liste (non)ordinate",-1),sI={__name:"70",setup(n){const t={layout:"section"};return z(M),(s,o)=>(k(),T(In,H(C(t)),{default:v(()=>[aI]),_:1},16))}},oI=L(sI,[["__file","/@slidev/slides/70.md"]]),iI=e("h1",null,"Liste",-1),lI=e("p",null,"Lista di elementi correlati",-1),rI=e("ul",null,[e("li",null,"In un testo o un articolo, risulta particolarmente utile organizzare il contenuto in modo schematico e rappresentare le informazioni tramite una lista."),e("li",null,"HTML mette a disposizione specifici tag per la generazione di liste di elementi")],-1),cI=e("p",null,"Ci sono 2 tipi principali di liste:",-1),uI=e("ol",null,[e("li",null,[e("strong",null,"Unordered List"),a(" (Liste non ordinate)")]),e("li",null,[e("strong",null,"Ordered List"),a(" (Liste ordinate)")])],-1),pI=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("h3",null,"Lista non ordinata"),e("ul",null,[e("li",null,"Pere"),e("li",null,"Patate"),e("li",null,"Mele"),e("li",null,"Carote")])]),e("div",null,[e("h3",null,"Lista ordinata"),e("ol",null,[e("li",null,"CPU: Central Processing Unit"),e("li",null,"RAM: Random Access Memeory"),e("li",null,"HDD: Hard Disk Drive"),e("li",null,"SSD: Solid State Disk")])])],-1),dI={__name:"71",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[iI,lI,rI,cI,uI,pI]),_:1},16))}},mI=L(dI,[["__file","/@slidev/slides/71.md"]]),fI=e("h1",null,"Liste",-1),gI=e("p",null,"Lista di elementi correlati",-1),hI=e("h3",null,"Lista non ordinata",-1),_I=e("p",null,"Le liste di tipo non ordinato che si creano con 2 tag:",-1),kI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("ul")]),e("span",{class:"token punctuation"},">")]),a(": Unordered List - tag che definisce la lista non ordinata ")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("li")]),e("span",{class:"token punctuation"},">")]),a(": List Item - tag che definisce l'elemento/item della lista")])])],-1),vI=e("br",null,null,-1),bI={grid:"~ cols-2 gap-4"},yI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Esempio: Vegetali"),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("ul")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("li")]),e("span",{class:"token punctuation"},">")]),a("Pere"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("li")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("li")]),e("span",{class:"token punctuation"},">")]),a("Patate"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("li")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("li")]),e("span",{class:"token punctuation"},">")]),a("Mele"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("li")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("li")]),e("span",{class:"token punctuation"},">")]),a("Carote"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("li")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("ul")]),e("span",{class:"token punctuation"},">")])])])],-1),wI=e("div",null,[e("p",null,"Esempio: Vegetali"),e("ul",null,[e("li",null,"Pere"),e("li",null,"Patate"),e("li",null,"Mele"),e("li",null,"Carote")])],-1),zI={__name:"72",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[fI,gI,hI,_I,E(i,Y({},{ranges:[""]}),{default:v(()=>[kI]),_:1},16),vI,e("div",bI,[e("div",null,[E(i,Y({},{ranges:[""]}),{default:v(()=>[yI]),_:1},16)]),wI])]),_:1},16)}}},xI=L(zI,[["__file","/@slidev/slides/72.md"]]),TI=e("h1",null,"Liste",-1),$I=e("p",null,"Lista di elementi correlati",-1),MI=e("h3",null,"Lista ordinata",-1),LI=e("p",null,"Le liste di tipo ordinato che si creano con 2 tag:",-1),II=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("ol")]),e("span",{class:"token punctuation"},">")]),a(": Ordered List - tag che definisce la lista ordinata ")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("li")]),e("span",{class:"token punctuation"},">")]),a(": List Item - tag che definisce l'elemento/item della lista")])])],-1),EI=e("br",null,null,-1),SI={grid:"~ cols-2 gap-4"},CI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},"Esempio: I componenti di un computer"),a(`
`),e("span",{class:"line"},"       "),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("ol")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("li")]),e("span",{class:"token punctuation"},">")]),a("CPU: Central Processing Unit"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("li")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("li")]),e("span",{class:"token punctuation"},">")]),a("RAM: Random Access Memeory"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("li")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("li")]),e("span",{class:"token punctuation"},">")]),a("HDD: Hard Disk Drive"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("li")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("li")]),e("span",{class:"token punctuation"},">")]),a("SSD: Solid State Disk"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("li")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("ol")]),e("span",{class:"token punctuation"},">")])])])],-1),AI=e("div",null,[e("p",null,"Esempio: I componenti di un computer"),e("ol",null,[e("li",null,"CPU: Central Processing Unit"),e("li",null,"RAM: Random Access Memeory"),e("li",null,"HDD: Hard Disk Drive"),e("li",null,"SSD: Solid State Disk")])],-1),PI={__name:"73",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[TI,$I,MI,LI,E(i,Y({},{ranges:[""]}),{default:v(()=>[II]),_:1},16),EI,e("div",SI,[e("div",null,[E(i,Y({},{ranges:[""]}),{default:v(()=>[CI]),_:1},16)]),AI])]),_:1},16)}}},HI=L(PI,[["__file","/@slidev/slides/73.md"]]),OI=e("h1",null,"Esercizio html_09",-1),RI=e("p",null,"Link",-1),NI=e("ol",null,[e("li",null,[a("Editare il file "),e("em",null,"|cognome|_esercizio_html_08.html"),a(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_09.html")]),e("li",null,"Inserire 5 caratteri speciali in modo congruo con il testo"),e("li",null,"Creare 1 lista ordinata in modo congruo con il testo"),e("li",null,"Creare 1 lista non ordinata in modo congruo con il testo"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_09.html")],-1),FI=e("p",null,[e("em",null,[a("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),qI={__name:"74",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[OI,RI,NI,FI]),_:1},16))}},WI=L(qI,[["__file","/@slidev/slides/74.md"]]),DI=e("h1",{class:"sezione"},"Rappresentazioni tabulari con le Tabelle",-1),jI={__name:"75",setup(n){const t={layout:"section"};return z(M),(s,o)=>(k(),T(In,H(C(t)),{default:v(()=>[DI]),_:1},16))}},UI=L(jI,[["__file","/@slidev/slides/75.md"]]),BI=e("h1",null,"Tabelle",-1),KI=e("p",null,"Organizzazione tabulare dei contenuti",-1),VI=e("ul",null,[e("li",null,"In passato lo sviluppo web era ampiamente basato sull’uso di tabelle"),e("li",null,"Principalmente le tabelle venivano usato per creare il layout della pagina Web"),e("li",null,"Tuttavia questo metodo era laborioso e poco funzionale in quanto il supporto delle tabelle dai vari browser non era omogeneo."),e("li",null,"Oggi il layout di una pagine, NON si realizza più con le tabelle ma con il blocco DIV."),e("li",null,"Tuttavia lo scopo originario delle tabelle, cioè visualizzare contenuti in formato tabellare rimane valido.")],-1),GI=e("p",null,"I principlai tag per la definizione di una tabella sono:",-1),QI=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("table")]),e("span",{class:"token punctuation"},">")]),a(": definisce un contenitore per dati organizzati in formato tabellare")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("caption")]),e("span",{class:"token punctuation"},">")]),a(": definisce il titolo di una tabella")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("thead")]),e("span",{class:"token punctuation"},">")]),a(": definisce l'header della tabella")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tr")]),e("span",{class:"token punctuation"},">")]),a(": definisce una riga della tabella")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a(": definisce una cella della tabella.")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tbody")]),e("span",{class:"token punctuation"},">")]),a(": definisce il corpo principale della tabella")])])],-1),YI={__name:"76",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[BI,KI,VI,GI,E(i,Y({},{ranges:[""]}),{default:v(()=>[QI]),_:1},16)]),_:1},16)}}},JI=L(YI,[["__file","/@slidev/slides/76.md"]]),ZI=e("h1",null,"Tabelle",-1),XI=e("p",null,"Organizzazione tabulare dei contenuti",-1),e3={grid:"~ cols-2 gap-4"},n3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("table")]),a(),e("span",{class:"token attr-name"},"border"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("1"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("caption")]),e("span",{class:"token punctuation"},">")]),a("A AND B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("caption")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("thead")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("A"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("A & B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("thead")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tbody")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("                "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tbody")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("table")]),e("span",{class:"token punctuation"},">")])])])],-1),t3=e("div",null,[e("table",{border:"1"},[e("caption",null,"A AND B"),e("thead",null,[e("tr",null,[e("td",null,"A"),a(),e("td",null,"B"),a(),e("td",null,"A & B")])]),e("tbody",null,[e("tr",null,[e("td",null,"0"),a(),e("td",null,"0"),a(),e("td",null,"0")]),e("tr",null,[e("td",null,"0"),a(),e("td",null,"1"),a(),e("td",null,"0")]),e("tr",null,[e("td",null,"1"),a(),e("td",null,"0"),a(),e("td",null,"0")]),e("tr",null,[e("td",null,"1"),a(),e("td",null,"1"),a(),e("td",null,"1")])])])],-1),a3={__name:"77",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[ZI,XI,e("div",e3,[e("div",null,[E(i,Y({},{ranges:[""]}),{default:v(()=>[n3]),_:1},16)]),t3])]),_:1},16)}}},s3=L(a3,[["__file","/@slidev/slides/77.md"]]),o3=e("h1",null,"Tabelle",-1),i3=e("p",null,"Organizzazione tabulare dei contenuti",-1),l3={grid:"~ cols-2 gap-4"},r3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("table")]),a(),e("span",{class:"token attr-name"},"border"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("1"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("caption")]),e("span",{class:"token punctuation"},">")]),a("A AND B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("caption")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("thead")]),a(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"background"),e("span",{class:"token punctuation"},":"),a("gray"),e("span",{class:"token punctuation"},";"),e("span",{class:"token property"},"text-align"),e("span",{class:"token punctuation"},":"),a(" center"),e("span",{class:"token punctuation"},";")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("A"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("A | B"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("thead")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tbody")]),a(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"color"),e("span",{class:"token punctuation"},":"),a("blue"),e("span",{class:"token punctuation"},";"),e("span",{class:"token property"},"text-align"),e("span",{class:"token punctuation"},":"),a(" center"),e("span",{class:"token punctuation"},";")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tr")]),a(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"background"),e("span",{class:"token punctuation"},":"),a("Gainsboro"),e("span",{class:"token punctuation"},";")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("0"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("tr")]),a(),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"background"),e("span",{class:"token punctuation"},":"),a("Gainsboro"),e("span",{class:"token punctuation"},";")]),e("span",{class:"token punctuation"},'"')])]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("            "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("td")]),e("span",{class:"token punctuation"},">")]),a("1"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("td")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("        "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tr")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("tbody")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("table")]),e("span",{class:"token punctuation"},">")])])])],-1),c3=e("div",null,[e("table",{border:"1"},[e("caption",null,"A OR B"),e("thead",{style:{background:"gray","text-align":"center"}},[e("tr",null,[e("td",null,"A"),a(),e("td",null,"B"),a(),e("td",null,"A | B")])]),e("tbody",{style:{color:"blue","text-align":"center"}},[e("tr",null,[e("td",null,"0"),a(),e("td",null,"0"),a(),e("td",null,"0")]),e("tr",{style:{background:"Gainsboro"}},[e("td",null,"0"),a(),e("td",null,"1"),a(),e("td",null,"1")]),e("tr",null,[e("td",null,"1"),a(),e("td",null,"0"),a(),e("td",null,"1")]),e("tr",{style:{background:"Gainsboro"}},[e("td",null,"1"),a(),e("td",null,"1"),a(),e("td",null,"1")])])])],-1),u3={__name:"78",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[o3,i3,e("div",l3,[e("div",null,[E(i,Y({},{ranges:[""]}),{default:v(()=>[r3]),_:1},16)]),c3])]),_:1},16)}}},p3=L(u3,[["__file","/@slidev/slides/78.md"]]),d3=e("h1",null,"Esercizio html_10",-1),m3=e("p",null,"Link",-1),f3=e("ol",null,[e("li",null,[a("Editare il file "),e("em",null,"|cognome|_esercizio_html_09.html"),a(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_10.html")]),e("li",null,"Creare 1 tabella modo congruo con il testo"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_10.html")],-1),g3=e("p",null,[e("em",null,[a("far riferimento all’articolo orginale "),e("a",{href:"https://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener"},"https://en.wikipedia.org/wiki/Localhost")])],-1),h3={__name:"79",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[d3,m3,f3,g3]),_:1},16))}},_3=L(h3,[["__file","/@slidev/slides/79.md"]]),k3=e("h1",{class:"sezione"},"Interagiamo con l'utente attraverso i Form",-1),v3={__name:"80",setup(n){const t={layout:"section"};return z(M),(s,o)=>(k(),T(In,H(C(t)),{default:v(()=>[k3]),_:1},16))}},b3=L(v3,[["__file","/@slidev/slides/80.md"]]),y3=e("h1",null,"Form",-1),w3=e("p",null,"Input dall’utente",-1),z3=e("ul",null,[e("li",null,"Il form (letteralmente modulo) indica la parte di interfaccia utente di un’applicazione web che consente all’utente di inserire e inviare al web server/application server uno o più dati."),e("li",null,[a("Il form è composto da un contenitore e da componenti grafici detti "),e("strong",null,"widget"),a(" che compongono il form stesso.")]),e("li",null,"I widget comunemente presenti nelle pagine web sono: le caselle di testo, i menu a tendina, i date-picker, …")],-1),x3=e("p",null,"Il form si crea usando il tag:",-1),T3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},"..."),a(`
`),e("span",{class:"line"},"...widget del form"),a(`
`),e("span",{class:"line"},"...."),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),$3=e("p",null,"I principali widget sono:",-1),M3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("select")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("textarea")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("button")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("fieldset")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("legend")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("datalist")]),e("span",{class:"token punctuation"},">")]),a(),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("option")]),e("span",{class:"token punctuation"},">")])])])],-1),L3={__name:"81",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[y3,w3,z3,x3,E(i,Y({},{ranges:[""]}),{default:v(()=>[T3]),_:1},16),$3,E(i,Y({},{ranges:[""]}),{default:v(()=>[M3]),_:1},16)]),_:1},16)}}},I3=L(L3,[["__file","/@slidev/slides/81.md"]]),E3=e("h1",null,"Form",-1),S3=e("p",null,"<input>",-1),C3=e("ul",null,[e("li",null,"Uno dei widget più importanti ed utilizzati è <input>"),e("li",null,"Permette di ricevere un input dall’utente"),e("li",null,[a("Questo widget può assumere molte forme diverse in funzione dell’attributo "),e("em",null,"type")])],-1),A3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("text"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("idnome"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nome"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Nome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("text"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("idcognome"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("cognnome"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Cognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),P3=e("input",{type:"text",id:"idnome",name:"nome",placeholder:"Nome",style:{border:"1px solid black",background:"Gainsboro"}},null,-1),H3=e("br",null,null,-1),O3=e("br",null,null,-1),R3=e("input",{type:"text",id:"idcognome",name:"cognome",placeholder:"Cognome",style:{border:"1px solid black",background:"Gainsboro"}},null,-1),N3={__name:"82",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[E3,S3,C3,E(i,Y({},{ranges:[""]}),{default:v(()=>[A3]),_:1},16),P3,a(),H3,O3,R3]),_:1},16)}}},F3=L(N3,[["__file","/@slidev/slides/82.md"]]),q3=e("h1",null,"Form",-1),W3=e("p",null,"<label>",-1),D3=e("ul",null,[e("li",null,[a("L’elemento "),e("em",null,"label"),a(" specifica una label per diversi tipi di widget di un form")]),e("li",null,"Questo tag è molto importante in quanto gli screen-reader, per persone ipovedenti, leggono ad alta voce la label di un widget"),e("li",null,[a("Per associare una label ad un widget, si usa l’attributo "),e("em",null,"for"),a(" che deve coincidere con l’attributo "),e("em",null,"id"),a(" del widget")])],-1),j3=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("idnome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Nome: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("text"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("idnome"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nome"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Nome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("idcognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Cognome: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("text"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("idcognome"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("cognnome"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Cognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),U3=e("label",{for:"idnome"},"      Nome: ",-1),B3=e("input",{type:"text",id:"idnome",name:"nome",placeholder:"Nome",style:{border:"1px solid black",background:"Gainsboro"}},null,-1),K3=e("br",null,null,-1),V3=e("br",null,null,-1),G3=e("p",null,[e("label",{for:"idcognome"},"Cognome: "),e("input",{type:"text",id:"idcognome",name:"cognome",placeholder:"Cognome",style:{border:"1px solid black",background:"Gainsboro"}})],-1),Q3={__name:"83",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[q3,W3,D3,E(i,Y({},{ranges:[""]}),{default:v(()=>[j3]),_:1},16),U3,B3,a(),K3,V3,G3]),_:1},16)}}},Y3=L(Q3,[["__file","/@slidev/slides/83.md"]]),J3=e("h1",null,"Form",-1),Z3=e("p",null,"<input>",-1),X3=e("ul",null,[e("li",null,[a("Come detto l’elemento "),e("em",null,"input"),a(" può assumere forme diverse in funzione dell’attributo "),e("em",null,"type")]),e("li",null,[a("I vari tipi di "),e("em",null,"input"),a(" sono:")])],-1),eE=e("br",null,null,-1),nE={grid:"~ cols-2 gap-4"},tE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("button"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("checkbox"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("color"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("date"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("datetime-local"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("email"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("file"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("hidden"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("image"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("month"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("number"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),aE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("password"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("radio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("range"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("reset"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("search"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("submit"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("tel"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("text"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("time"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("url"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("week"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])])])],-1),sE={__name:"84",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[J3,Z3,X3,eE,e("div",nE,[e("div",null,[E(i,Y({},{ranges:[""]}),{default:v(()=>[tE]),_:1},16)]),e("div",null,[E(i,Y({},{ranges:[""]}),{default:v(()=>[aE]),_:1},16)])])]),_:1},16)}}},oE=L(sE,[["__file","/@slidev/slides/84.md"]]),iE=e("h1",null,"Form",-1),lE=e("p",null,"<input>",-1),rE=e("h3",null,"button",-1),cE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("idbutton"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Premi il pulsante: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("button"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("idbutton"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Cliccami!!"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),uE=e("label",{for:"idbutton"},"Premi il pulsante: ",-1),pE=e("input",{type:"button",id:"idbutton",onclick:"alert('Magie di JavaScript!! :)')",value:"Cliccami!!"},null,-1),dE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("idpulsante"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Premi il pulsante: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("button")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("button"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("idpulsante"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Click Me!"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("button")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),mE=e("label",{for:"idpulsante"},"Premi il pulsante: ",-1),fE=e("button",{type:"button",style:{border:"1px solid red"}},"Click Me!",-1),gE={__name:"85",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[iE,lE,rE,E(i,Y({},{ranges:[""]}),{default:v(()=>[cE]),_:1},16),uE,pE,E(i,Y({},{ranges:[""]}),{default:v(()=>[dE]),_:1},16),mE,fE]),_:1},16)}}},hE=L(gE,[["__file","/@slidev/slides/85.md"]]),_E=e("h1",null,"Form",-1),kE=e("p",null,"<input>",-1),vE=e("h3",null,"radio",-1),bE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h3")]),e("span",{class:"token punctuation"},">")]),a("Occupazione:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("radio"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("studente"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("occupazione"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("studente"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("studente"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("  Studente"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("radio"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("occupato"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("occupazione"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("occupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("occupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("  Occupato"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("radio"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("disoccupato"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("occupazione"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("disoccupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("disoccupato"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("  Disoccupato"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),yE=e("br",null,null,-1),wE=e("h3",null,"Occupazione:",-1),zE=e("br",null,null,-1),xE=e("input",{type:"radio",id:"studente",name:"occupazione",value:"studente"},null,-1),TE=e("label",{for:"studente"}," Studente",-1),$E=e("br",null,null,-1),ME=e("input",{type:"radio",id:"occupato",name:"occupazione",value:"occupato"},null,-1),LE=e("label",{for:"occupato"}," Occupato",-1),IE=e("br",null,null,-1),EE=e("input",{type:"radio",id:"disoccupato",name:"occupazione",value:"disoccupato"},null,-1),SE=e("label",{for:"disoccupato"}," Disoccupato",-1),CE=e("br",null,null,-1),AE=e("br",null,null,-1),PE={__name:"86",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[_E,kE,vE,E(i,Y({},{ranges:[""]}),{default:v(()=>[bE]),_:1},16),yE,wE,zE,xE,TE,$E,ME,LE,IE,EE,SE,CE,AE]),_:1},16)}}},HE=L(PE,[["__file","/@slidev/slides/86.md"]]),OE=e("h1",null,"Form",-1),RE=e("p",null,"<input>",-1),NE=e("h3",null,"checkbox",-1),FE=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h3")]),e("span",{class:"token punctuation"},">")]),a("Sport"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("checkbox"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("tennis"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("sport"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("tennis"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("tennis"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("  Tennis"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("checkbox"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("calcio"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("sport"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("calcio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("calcio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("  Calcio"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("checkbox"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nuoto"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("sport"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nuoto"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nuoto"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a(" Nuoto"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),qE=e("br",null,null,-1),WE=e("h3",null,"Sport",-1),DE=e("br",null,null,-1),jE=e("input",{type:"checkbox",id:"tennis",name:"sport",value:"tennis"},null,-1),UE=e("label",{for:"tennis"}," Tennis",-1),BE=e("br",null,null,-1),KE=e("input",{type:"checkbox",id:"calcio",name:"sport",value:"calcio"},null,-1),VE=e("label",{for:"calcio"}," Calcio",-1),GE=e("br",null,null,-1),QE=e("input",{type:"checkbox",id:"nuoto",name:"sport",value:"nuoto"},null,-1),YE=e("label",{for:"nuoto"}," Nuoto",-1),JE=e("br",null,null,-1),ZE=e("br",null,null,-1),XE={__name:"87",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[OE,RE,NE,E(i,Y({},{ranges:[""]}),{default:v(()=>[FE]),_:1},16),qE,WE,DE,jE,UE,BE,KE,VE,GE,QE,YE,JE,ZE]),_:1},16)}}},e5=L(XE,[["__file","/@slidev/slides/87.md"]]),n5=e("h1",null,"Form",-1),t5=e("p",null,"<input>",-1),a5=e("h3",null,"date",-1),s5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h3")]),e("span",{class:"token punctuation"},">")]),a("Data di Nascita"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("date"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("iddata"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("birthday"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),o5=e("br",null,null,-1),i5=e("h3",null,"Data di Nascita",-1),l5=e("br",null,null,-1),r5=e("input",{type:"date",id:"iddata",name:"birthday"},null,-1),c5=e("br",null,null,-1),u5=e("br",null,null,-1),p5={__name:"88",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[n5,t5,a5,E(i,Y({},{ranges:[""]}),{default:v(()=>[s5]),_:1},16),o5,i5,l5,r5,c5,u5]),_:1},16)}}},d5=L(p5,[["__file","/@slidev/slides/88.md"]]),m5=e("h1",null,"Esercizio html_11",-1),f5=e("p",null,"Form",-1),g5=e("ol",null,[e("li",null,[a("Creare un file con nome "),e("em",null,"|cognome|_esercizio_html_11.html")]),e("li",null,"Creare 1 form per la raccolta di dati in uno scenario scelto dallo studente"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_11.html")],-1),h5=e("p",null,"Il form deve contenere i seguenti widgets:",-1),_5=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ul",null,[e("li",null,"almeno 2 widget di testo"),e("li",null,"almeno 1 bottone"),e("li",null,"almeno 3 scelte mutuamente esclusive tramite radio"),e("li",null,"almeeno 5 scelte multiple tramite checkbox"),e("li",null,"almeno 1 campo data"),e("li",null,"ogni widget deve essere dotato della propria label")])])],-1),k5={__name:"89",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[m5,f5,g5,h5,_5]),_:1},16))}},v5=L(k5,[["__file","/@slidev/slides/89.md"]]),b5=e("h1",null,"Form",-1),y5=e("p",null,"<input>",-1),w5=e("h3",null,"number",-1),z5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h3")]),e("span",{class:"token punctuation"},">")]),a("Altezza"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("number"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("altezza"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("altezza"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("150"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("200"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),x5=e("br",null,null,-1),T5=e("h3",null,"Altezza",-1),$5=e("br",null,null,-1),M5=e("input",{type:"number",id:"altezza",name:"altezza",min:"150",max:"200",style:{border:"1px solid black"}},null,-1),L5=e("br",null,null,-1),I5=e("br",null,null,-1),E5={__name:"90",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[b5,y5,w5,E(i,Y({},{ranges:[""]}),{default:v(()=>[z5]),_:1},16),x5,T5,$5,M5,L5,I5]),_:1},16)}}},S5=L(E5,[["__file","/@slidev/slides/90.md"]]),C5=e("h1",null,"Form",-1),A5=e("p",null,"<input>",-1),P5=e("h3",null,"color",-1),H5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("h3")]),e("span",{class:"token punctuation"},">")]),a("Colore preferito"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("h3")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("   "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("color"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("favcolor"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("favcolor"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("#ff0000"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),O5=e("br",null,null,-1),R5=e("h3",null,"Colore preferito",-1),N5=e("br",null,null,-1),F5=e("input",{type:"color",id:"favcolor",name:"favcolor",value:"#ff0000",onchange:"alert(`Hai selezionato il colore: ${event.target.value}`)"},null,-1),q5=e("br",null,null,-1),W5=e("br",null,null,-1),D5={__name:"91",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[C5,A5,P5,E(i,Y({},{ranges:[""]}),{default:v(()=>[H5]),_:1},16),O5,R5,N5,F5,q5,W5]),_:1},16)}}},j5=L(D5,[["__file","/@slidev/slides/91.md"]]),U5=e("h1",null,"Form",-1),B5=e("p",null,"<input>",-1),K5=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("peso"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Peso: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("range"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"min"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("50"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"max"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("100"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("60"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"class"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("slider"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("peso"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")]),a()]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),V5=e("br",null,null,-1),G5=e("label",{for:"peso"},"Peso: ",-1),Q5=e("input",{type:"range",min:"50",max:"100",value:"60",class:"slider",id:"peso"},null,-1),Y5=e("br",null,null,-1),J5={__name:"92",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[U5,B5,E(i,Y({},{ranges:[""]}),{default:v(()=>[K5]),_:1},16),V5,G5,Q5,Y5]),_:1},16)}}},Z5=L(J5,[["__file","/@slidev/slides/92.md"]]),X5=e("h1",null,"Form",-1),eS=e("p",null,"<select>",-1),nS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("cars"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Genere:  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("select")]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("genere"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("cars"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("option")]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("maschio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Maschio"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("option")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("option")]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("femmina"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Femmina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("option")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("select")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),tS=e("br",null,null,-1),aS=e("label",{for:"cars"},"Genere: ",-1),sS=e("select",{name:"genere",id:"cars"},[e("option",{value:"maschio"},"Maschio"),e("option",{value:"femmina"},"Femmina")],-1),oS=e("br",null,null,-1),iS=e("br",null,null,-1),lS={__name:"93",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[X5,eS,E(i,Y({},{ranges:[""]}),{default:v(()=>[nS]),_:1},16),tS,aS,sS,oS,iS]),_:1},16)}}},rS=L(lS,[["__file","/@slidev/slides/93.md"]]),cS=e("h1",null,"Form",-1),uS=e("p",null,"<textarea>",-1),pS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("bio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Biografia:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("textarea")]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("bio"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("bio"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"rows"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("4"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"cols"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("50"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Inserisci la tua biografia"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("textarea")]),e("span",{class:"token punctuation"},">")]),a("    ")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),dS=e("p",null,[e("label",{for:"bio"},"Biografia:"),e("textarea",{id:"bio",name:"bio",rows:"4",cols:"50",placeholder:"Inserisci la tua biografia",style:{border:"1px solid black"}})],-1),mS={__name:"94",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[cS,uS,E(i,Y({},{ranges:[""]}),{default:v(()=>[pS]),_:1},16),dS]),_:1},16)}}},fS=L(mS,[["__file","/@slidev/slides/94.md"]]),gS=e("h1",null,"Esercizio html_12",-1),hS=e("p",null,"Form",-1),_S=e("ol",null,[e("li",null,[a("Modificare il file "),e("em",null,"|cognome|_esercizio_html_11.html"),a(" e salvarlo come "),e("em",null,"|cognome|_esercizio_html_12.html")]),e("li",null,"Modificare il form (vedi dettagli sotto)"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_12.html")],-1),kS=e("p",null,"Il form deve contenere i seguenti widgets aggiuntivi:",-1),vS=e("ul",null,[e("li",null,"almeno 4 widget number con valore minimo e massimo"),e("li",null,"almeno 1 widget color picker"),e("li",null,"almeno 3 widget range con valore minimo e massimo"),e("li",null,"almeeno 2 combo box o select con almeno 5 valori ciascuna"),e("li",null,"almeno 1 campo text area con dimensione minima 6 righe e 60 colonne"),e("li",null,"ogni widget deve essere dotato della propria label")],-1),bS={__name:"95",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[gS,hS,_S,kS,vS]),_:1},16))}},yS=L(bS,[["__file","/@slidev/slides/95.md"]]),wS="/TPSI/4/html/assets/html5_8-8ebdebac.jpg",zS=e("h1",null,"Form",-1),xS=e("p",null,"<datalist>",-1),TS={grid:"~ cols-2 gap-8"},$S=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nazioni"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Nazionalità: "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"list"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nations"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nazioni"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nazioni"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("datalist")]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nations"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("option")]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Albanese"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("option")]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Argentina"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("option")]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Belga"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("option")]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Biellorussa"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("option")]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Italiana"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("option")]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Irlandese"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("option")]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Israeliana"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("datalist")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),MS=e("div",null,[e("p",null,[e("img",{src:wS,alt:"html5_8.jpg"})])],-1),LS={__name:"96",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[zS,xS,e("div",TS,[e("div",null,[E(i,Y({},{ranges:[""]}),{default:v(()=>[$S]),_:1},16)]),MS])]),_:1},16)}}},IS=L(LS,[["__file","/@slidev/slides/96.md"]]),ES=e("h1",null,"Form",-1),SS=e("p",null,"<fieldset>",-1),CS={grid:"~ cols-2 gap-8"},AS=e("pre",{class:"slidev-code language-html"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("fieldset")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("legend")]),e("span",{class:"token punctuation"},">")]),a("Dati Personali"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("legend")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Nome:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("text"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nome"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("nome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("cognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Cognome:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("text"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("cognome"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("cognome"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("genere"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Genere:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("select")]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("genere"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("cars"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("option")]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("maschio"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Maschio"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("option")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("option")]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("femmina"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Femmina"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("option")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("select")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("br")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("label")]),a(),e("span",{class:"token attr-name"},"for"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("email"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a("Email:"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("label")]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("email"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("email"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("email"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[a("  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("input")]),a(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("submit"),e("span",{class:"token punctuation"},'"')]),a(),e("span",{class:"token attr-name"},"value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("Invia"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")])]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("fieldset")]),e("span",{class:"token punctuation"},">")]),a("      ")]),a(`
`),e("span",{class:"line"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")])])])],-1),PS=e("div",null,[e("fieldset",{style:{border:"1px solid black"}},[e("legend",null,"Dati Personali"),e("br"),e("label",{for:"nome"},"Nome: "),e("input",{type:"text",id:"nome",name:"nome",style:{border:"1px solid black"}}),e("br"),e("br"),e("label",{for:"cognome"},"Cognome: "),e("input",{type:"text",id:"cognome",name:"cognome",style:{border:"1px solid black"}}),e("br"),e("br"),e("label",{for:"genere"},"Genere: "),e("select",{name:"genere",id:"cars"},[e("option",{value:"maschio"},"Maschio"),e("option",{value:"femmina"},"Femmina")]),e("br"),e("br"),e("label",{for:"email"},"Email: "),e("input",{type:"email",id:"email",name:"email",style:{border:"1px solid black"}}),e("br"),e("br"),e("input",{type:"submit",value:"Invia",style:{border:"1px solid black"}}),a(),e("br"),e("br")])],-1),HS={__name:"97",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[ES,SS,e("div",CS,[e("div",null,[E(i,Y({},{ranges:[""]}),{default:v(()=>[AS]),_:1},16)]),PS])]),_:1},16)}}},OS=L(HS,[["__file","/@slidev/slides/97.md"]]),RS=e("h1",null,"Esercizio html_13",-1),NS=e("p",null,"Form",-1),FS=e("ol",null,[e("li",null,[a("Creare un file con nome "),e("em",null,"|cognome|_esercizio_html_13.html")]),e("li",null,"Creare 1 form per la raccolta di dati personali"),e("li",null,"Fornire il link github al file con nome |cognome|_esercizio_html_13.html")],-1),qS=e("p",null,"Il form deve contenere i seguenti campi:",-1),WS=e("div",{grid:"~ cols-2 gap-4"},[e("div",null,[e("ul",null,[e("li",null,"Nome e Cognome"),e("li",null,"Genere"),e("li",null,[e("a",{href:"https://www.w3schools.com/tags/att_input_type_email.asp",target:"_blank",rel:"noopener"},"Email")]),e("li",null,[e("a",{href:"https://www.w3schools.com/tags/att_input_type_password.asp",target:"_blank",rel:"noopener"},"Password")]),e("li",null,"Data di nascita"),e("li",null,"Nazionalità")])]),e("div",null,[e("ul",null,[e("li",null,"Attività lavorativa"),e("li",null,"Hobby"),e("li",null,"Altezza"),e("li",null,"Peso"),e("li",null,"Colore preferito"),e("li",null,"Note personali")])])],-1),DS={__name:"98",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[RS,NS,FS,qS,WS]),_:1},16))}},jS=L(DS,[["__file","/@slidev/slides/98.md"]]),US="/TPSI/4/html/assets/html5_9-a352818c.jpg",BS=e("h1",null,"Form",-1),KS=e("p",null,"Form lifecycle server-side",-1),VS=e("img",{src:US,width:"500",style:{float:"right"}},null,-1),GS=e("ol",null,[e("li",null,"L’utente richiede la pagina web contenente il form [GET]"),e("li",null,"Il web server risponde con l’HTML della pagina e del form"),e("li",null,[a("L’utente compila il form e fa il "),e("em",null,"submit"),a(" inviando i dati al server [POST]")]),e("li",null,"Il server effettua una validazione dei dati ricevuti (OK | ERROR)"),e("li",null,"ERROR: viene inviato nuovamente il form ed eventuali messaggi di errore"),e("li",null,"OK: il web server processa i dati ed esegue le operazioni previste (DB)"),e("li",null,"Viene inviata la risposta finale al browser")],-1),QS={__name:"99",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[BS,KS,VS,GS]),_:1},16))}},YS=L(QS,[["__file","/@slidev/slides/99.md"]]),JS=e("h1",null,"Form",-1),ZS=e("p",null,"Form lifecycle",-1),XS=e("ul",null,[e("li",null,"Il ciclo di vita di gestione dei form appena visto, è quello classico"),e("li",null,"Come si vede questo è molto inefficente siccome richiede sempre una comunicazione tra client e server"),e("li",null,"Questo introduce latenze indesiderate e carico sul server"),e("li",null,"Il motivo principale è che HTML non essendo un linguaggio di programmazione non ha modo di fare una validazione del form prima dell’invio"),e("li",null,"Per ovviare a queste problematiche, normalmente si effettua la validazione del form in JavaScript, quindi direttamente nel browser riducendo così il numero di messaggi con il server")],-1),e6={__name:"100",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[JS,ZS,XS]),_:1},16))}},n6=L(e6,[["__file","/@slidev/slides/100.md"]]),t6="/TPSI/4/html/assets/html5_10-d0dadebe.jpg",a6=e("h1",null,"Form",-1),s6=e("p",null,"Form lifecycle client-side",-1),o6=e("img",{src:t6,width:"400",style:{float:"right"}},null,-1),i6=e("ol",null,[e("li",null,"L’utente richiede la pagina web contenente il form [GET]"),e("li",null,"Il web server risponde con l’HTML della pagina e del form"),e("li",null,[a("L’utente compila il form e fa il "),e("em",null,"submit"),a(" inviando i dati al server [POST]")]),e("li",null,"Il browser effettua una validazione dei dati ricevuti (OK | ERROR)"),e("li",null,"ERROR: viene visualizzato nuovamente il form ed eventuali messaggi di errore"),e("li",null,"OK: il web server processa i dati ed esegue le operazioni previste (DB)"),e("li",null,"Viene inviata la risposta finale al browser")],-1),l6={__name:"101",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[a6,s6,o6,i6]),_:1},16))}},r6=L(l6,[["__file","/@slidev/slides/101.md"]]),c6=e("h1",null,"Esercizio html_14",-1),u6=e("p",null,"Form validation server-side",-1),p6=e("ul",null,[e("li",null,"In questo esercizio/esercitazione si vuole comprendere a fondo il meccanismo di validazione dei form server-side")],-1),d6=e("p",null,"Per fare ciò abbiamo bisonog di due componenti fondamentali:",-1),m6=e("ol",null,[e("li",null,"Una pagina HTML contenente un form"),e("li",null,"Un web server che implementa la logica di validazione")],-1),f6=e("p",null,"Per questa esercitazione il form e il web server sono forniti",-1),g6=e("ol",null,[e("li",null,[a("Scaricare il seguente pacchetto:"),e("a",{href:"https://profmancusoa.github.io/TPSI/support/esercizio_html_14.tgz",target:"_blank",rel:"noopener"},"esercizio_html_14.tgz")]),e("li",null,[a("Installare i pacchetti necessari con "),e("code",null,"npm install")]),e("li",null,[a("Lanciare il web server con "),e("code",null,"node form_server.js")]),e("li",null,"Aprire la pagina fornita dal server locale sulla posta 8080")],-1),h6={__name:"102",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[c6,u6,p6,d6,m6,f6,g6]),_:1},16))}},_6=L(h6,[["__file","/@slidev/slides/102.md"]]),k6=e("h1",null,"Esercizio html_14",-1),v6=e("p",null," ",-1),b6=e("p",null,"Si richiede di:",-1),y6=e("ol",null,[e("li",null,"Verificare il funzionamento del form e della validazione dei campi"),e("li",null,"Analizzaere il codice del form e del server in JavaScript"),e("li",null,[a("Modificare il form in modo che l’età venga fornita come un "),e("code",null,"range")]),e("li",null,[a("Modificare il form in modo che sia presente anche il campo "),e("code",null,"Cognome")]),e("li",null,[a("Modificare il codice del server in modo che sia presente "),e("strong",null,"anche"),a(" la validazione dell’età, in modo che siano accettati solo valori compresi tra 19 e 31")]),e("li",null,[a("Fornire il link github alla directory con nome |cognome|_esercizio_html_14 contenente i file aggiornati "),e("em",null,"form.html"),a(" e "),e("em",null,"form_server.js")]),e("li",null,[e("code",null,"NON deve essere presente nel repository la directory **node_modules**")])],-1),w6={__name:"103",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[k6,v6,b6,y6]),_:1},16))}},z6=L(w6,[["__file","/@slidev/slides/103.md"]]),x6=e("h1",null,"HTML linter",-1),T6=e("p",null,"Verifica errori",-1),$6=e("ul",null,[e("li",null,[e("p",null,[a("Il "),e("code",null,"linter"),a(" è uno strumento che analizza il codice sorgente per contrassegnare errori di sintassi, di programmazione, bug, errori stilistici e costrutti sospetti.")])]),e("li",null,[e("p",null,[a("Il termine deriva dall’"),e("a",{href:"https://it.wikipedia.org/wiki/Lint_(software)",target:"_blank",rel:"noopener"},"omonimo strumento Unix"),a(" che esamina il codice sorgente del linguaggio C")])]),e("li",null,[e("p",null,"Pertanto il linter HTML è uno strumento che ci fornisce utili informazioni sulla pagina HTML in esame:"),e("ul",null,[e("li",null,"errori di sintassi HTML"),e("li",null,"uso di tag obsoleti"),e("li",null,"uso errato di tag"),e("li",null,"uso errato di attributi"),e("li",null,"mancata chiusura di tag"),e("li",null,"…")])]),e("li",null,[e("p",null,"Il lineter è uno strumento fondamentale per lo sviluppatore.")])],-1),M6={__name:"104",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[x6,T6,$6]),_:1},16))}},L6=L(M6,[["__file","/@slidev/slides/104.md"]]),I6="/TPSI/4/html/assets/html5_12-88d9b140.png",E6=e("h1",null,"HTML linter",-1),S6=e("p",null,"W3C Markup Validation Service",-1),C6=e("ul",null,[e("li",null,"Il W3C mette a disposizione un servizio online di validazione (lint) di pagine o siti HTML"),e("li",null,[a("Il servizio è disponibile qui: "),e("a",{href:"https://validator.w3.org/",target:"_blank",rel:"noopener"},"https://validator.w3.org/")])],-1),A6=e("br",null,null,-1),P6=e("img",{src:I6},null,-1),H6={__name:"105",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[E6,S6,C6,A6,P6]),_:1},16))}},O6=L(H6,[["__file","/@slidev/slides/105.md"]]),R6="/TPSI/4/html/assets/html5_13-f3e0e30d.png",N6=e("h1",null,"HTML linter",-1),F6=e("p",null,"W3C Markup Validation Service",-1),q6=e("p",null,"Il servizio opera in 3 modalità:",-1),W6=e("ol",null,[e("li",null,[e("strong",null,"Validate by URI"),a(": inserendo un URL valida ("),e("a",{href:"https://ats.agnelli.it",target:"_blank",rel:"noopener"},"https://ats.agnelli.it"),a(") effettua la validazione del sito")]),e("li",null,[e("strong",null,"Validate by File Upload"),a(": caricando un file .html effettua la validazione della pagina")]),e("li",null,[e("strong",null,"Validate by Direct Input"),a(": inserendo il codice HTML manualmente, ne effettua la validazione")])],-1),D6=e("br",null,null,-1),j6=e("img",{src:R6},null,-1),U6={__name:"106",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[N6,F6,q6,W6,D6,j6]),_:1},16))}},B6=L(U6,[["__file","/@slidev/slides/106.md"]]),K6="/TPSI/4/html/assets/html5_14-f69c6914.png",V6=e("h1",null,"HTML linter",-1),G6=e("p",null,"W3C Markup Validation Service",-1),Q6=e("br",null,null,-1),Y6=e("img",{src:K6},null,-1),J6=e("ul",null,[e("li",null,[a("Il sito viene analizzato e viene generato un report "),e("ul",null,[e("li",null,[e("strong",null,"Error"),a(": segnala errori sintattici indicando la linea dove occorre")]),e("li",null,[e("strong",null,"Warning"),a(": evidenzia potenziali problemi ma non necessariamente errori sintattici")])])])],-1),Z6={__name:"107",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[V6,G6,Q6,Y6,J6]),_:1},16))}},X6=L(Z6,[["__file","/@slidev/slides/107.md"]]),eC=e("h1",null,"Esercizio html_15",-1),nC=e("p",null,"HTML lint",-1),tC=e("p",null,"Mediante il servizio di validazione HTML del W3C si richiede di:",-1),aC=e("ol",null,[e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html"),e("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente")],-1),sC={__name:"108",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[eC,nC,tC,aC]),_:1},16))}},oC=L(sC,[["__file","/@slidev/slides/108.md"]]),iC="/TPSI/4/html/assets/html5_15-635ed653.png",lC=e("h1",null,"HTML linter",-1),rC=e("p",null,"Command Line Linter",-1),cC=e("ul",null,[e("li",null,"Chiaramente per quanto valido sia il linter del W3C, risulta di difficile applicazione nel processo di sviluppo"),e("li",null,"Caricare ad ogni modifica la propria pagina risulta particolarmente scomodo e time consuming"),e("li",null,"Per tale motivo esistono svariati tipi di linter HTML che operano da linea di comando"),e("li",null,"Questi strumenti sono molto versatili e possono essere integrati in pipeline automatiche (github)"),e("li",null,[a("Un linter valido è "),e("code",null,"node-w3c-validator"),a(" scirtto in JavaScript che implementa un wrapper al servizio W3C")])],-1),uC=e("br",null,null,-1),pC=e("img",{src:iC,width:"500"},null,-1),dC={__name:"109",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[lC,rC,cC,uC,pC]),_:1},16))}},mC=L(dC,[["__file","/@slidev/slides/109.md"]]),fC="/TPSI/4/html/assets/html5_16-37784c29.png",gC=e("h1",null,"HTML linter",-1),hC=e("p",null,"Command Line Linter",-1),_C=e("ul",null,[e("li",null,"Per installare il linter basta eseguire")],-1),kC=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[a("npm i "),e("span",{class:"token operator"},"-"),a("g node"),e("span",{class:"token operator"},"-"),a("w3c"),e("span",{class:"token operator"},"-"),a("validator")])])],-1),vC=e("br",null,null,-1),bC=e("img",{src:fC,width:"700"},null,-1),yC={__name:"110",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[gC,hC,_C,E(i,Y({},{ranges:[""]}),{default:v(()=>[kC]),_:1},16),vC,bC]),_:1},16)}}},wC=L(yC,[["__file","/@slidev/slides/110.md"]]),zC=e("h1",null,"HTML linter",-1),xC=e("p",null,"Command Line Linter",-1),TC=e("p",null,"I parametri più importanti sono",-1),$C=e("ul",null,[e("li",null,[e("code",null,"-i"),a(": specifica il file HTML da validare")]),e("li",null,[e("code",null,"-f"),a(": specifica il formate del report generato "),e("ul",null,[e("li",null,[e("strong",null,"txt"),a(": genera un report puramente testuale")]),e("li",null,[e("strong",null,"lint"),a(": genera un report in formato lint con informazioni addizionali")]),e("li",null,[e("strong",null,"html"),a(": genera un report in formato HTML esattamente come quello generato dal servizio W3C")])])])],-1),MC={__name:"111",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[zC,xC,TC,$C]),_:1},16))}},LC=L(MC,[["__file","/@slidev/slides/111.md"]]),IC="/TPSI/4/html/assets/html5_17-8d11820a.png",EC=e("h1",null,"HTML linter",-1),SC=e("p",null,"Command Line Linter",-1),CC=e("ul",null,[e("li",null,"Per fare il lint di un file HTML e generare un report testuale basta eseguire il seguente comando")],-1),AC=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[a("node"),e("span",{class:"token operator"},"-"),a("w3c"),e("span",{class:"token operator"},"-"),a("validator "),e("span",{class:"token operator"},"-"),a("i "),e("span",{class:"token operator"},"/"),a("path"),e("span",{class:"token operator"},"/"),a("to"),e("span",{class:"token operator"},"/"),a("file"),e("span",{class:"token punctuation"},"."),a("html "),e("span",{class:"token operator"},"-"),a("f txt")])])],-1),PC=e("br",null,null,-1),HC=e("img",{src:IC},null,-1),OC={__name:"112",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[EC,SC,CC,E(i,Y({},{ranges:[""]}),{default:v(()=>[AC]),_:1},16),PC,HC]),_:1},16)}}},RC=L(OC,[["__file","/@slidev/slides/112.md"]]),NC="/TPSI/4/html/assets/html5_18-970bde4d.png",FC=e("h1",null,"HTML linter",-1),qC=e("p",null,"Command Line Linter",-1),WC=e("ul",null,[e("li",null,"Per fare il lint di un file HTML e generare un report in formato lint basta eseguire il seguente comando")],-1),DC=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[a("node"),e("span",{class:"token operator"},"-"),a("w3c"),e("span",{class:"token operator"},"-"),a("validator "),e("span",{class:"token operator"},"-"),a("i "),e("span",{class:"token operator"},"/"),a("path"),e("span",{class:"token operator"},"/"),a("to"),e("span",{class:"token operator"},"/"),a("file"),e("span",{class:"token punctuation"},"."),a("html "),e("span",{class:"token operator"},"-"),a("f lint")])])],-1),jC=e("br",null,null,-1),UC=e("img",{src:NC,width:"650"},null,-1),BC={__name:"113",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[FC,qC,WC,E(i,Y({},{ranges:[""]}),{default:v(()=>[DC]),_:1},16),jC,UC]),_:1},16)}}},KC=L(BC,[["__file","/@slidev/slides/113.md"]]),VC="/TPSI/4/html/assets/html5_19-d96648e9.png",GC=e("h1",null,"HTML linter",-1),QC=e("p",null,"Command Line Linter",-1),YC=e("ul",null,[e("li",null,"Per fare il lint di un file HTML e generare un report in formato html basta eseguire il seguente comando")],-1),JC=e("pre",{class:"slidev-code language-js"},[e("code",null,[e("span",{class:"line"},[a("node"),e("span",{class:"token operator"},"-"),a("w3c"),e("span",{class:"token operator"},"-"),a("validator "),e("span",{class:"token operator"},"-"),a("i "),e("span",{class:"token operator"},"/"),a("path"),e("span",{class:"token operator"},"/"),a("to"),e("span",{class:"token operator"},"/"),a("file"),e("span",{class:"token punctuation"},"."),a("html "),e("span",{class:"token operator"},"-"),a("f html "),e("span",{class:"token operator"},">"),a(" report"),e("span",{class:"token punctuation"},"."),a("html")])])],-1),ZC=e("br",null,null,-1),XC=e("img",{src:VC,width:"650"},null,-1),e4={__name:"114",setup(n){const t={};return z(M),(s,o)=>{const i=ie;return k(),T(F,H(C(t)),{default:v(()=>[GC,QC,YC,E(i,Y({},{ranges:[""]}),{default:v(()=>[JC]),_:1},16),ZC,XC]),_:1},16)}}},n4=L(e4,[["__file","/@slidev/slides/114.md"]]),t4=e("h1",null,"Esercizio html_16",-1),a4=e("p",null,"HTML lint",-1),s4=e("p",null,"Mediante il linter da liena di comando si richiede di:",-1),o4=e("ol",null,[e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html"),e("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente"),e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato txt"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_16.txt"),e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato lint"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_16.lint"),e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html generando un report in formato html"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_16.html")],-1),i4={__name:"115",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[t4,a4,s4,o4]),_:1},16))}},l4=L(i4,[["__file","/@slidev/slides/115.md"]]),r4=e("h1",null,"Esercizio html_17",-1),c4=e("p",null,"HTML lint",-1),u4=e("p",null,"Mediante il linter da liena di comando si richiede di:",-1),p4=e("ol",null,[e("li",null,"Effettuare la verifica sintattica del file |cognome|_glossario.html"),e("li",null,"Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente"),e("li",null,"Correggere gli errori ed i warning"),e("li",null,"Consegnare su github il file |cognome|_esercizio_html_17_glossario_corretto.html")],-1),d4={__name:"116",setup(n){const t={};return z(M),(s,o)=>(k(),T(F,H(C(t)),{default:v(()=>[r4,c4,u4,p4]),_:1},16))}},m4=L(d4,[["__file","/@slidev/slides/116.md"]]),f4="/TPSI/4/html/assets/html5_11-d37e4564.jpg",g4=e("p",null," ",-1),h4=e("img",{src:f4,width:"800"},null,-1),_4={__name:"117",setup(n){const t={};return z(M),(s,o)=>{const i=ro("center");return k(),T(F,H(C(t)),{default:v(()=>[g4,E(i,null,{default:v(()=>[h4]),_:1})]),_:1},16)}}},k4=L(_4,[["__file","/@slidev/slides/117.md"]]),v4=[{path:"1",name:"page-1",component:ay,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.4.3",title:"Hyper Text Markup Language",slide:{raw:`---
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
</div>`,frontmatter:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",version:"1.4.3",title:"Hyper Text Markup Language"},index:0,start:0,end:26,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:uy,meta:{slide:{raw:`
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

- Il motivo principale che ha spinto il W3C e i suoi membri a sviluppare HTML5 è stata la necessità di fornire direttamente le funzionalità che in precedenza erano fruibili tramite estensioni proprietarie all'esterno dei browser, come Adobe Flash e simili. Un secondo obiettivo che gli sviluppatori si erano prefissati era quello di garantire una maggiore compatibilità tra i diversi browser, indipendentemente dalla piattaforma software utilizzata, e principalmente mirata all'espansione dei dispositivi mobili.`,frontmatter:{},index:1,start:27,end:40,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:hy,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:2,start:41,end:64,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:wy,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:3,start:65,end:93,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Cy,meta:{slide:{raw:`
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
- [https://javascript.info/](https://javascript.info/)`,frontmatter:{},index:4,start:94,end:117,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Ny,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Ambiente di Sviluppo</h1>
`,content:'<h1 class="sezione">Ambiente di Sviluppo</h1>',frontmatter:{layout:"section"},index:5,start:117,end:122,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:jy,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

&nbsp;

- Al fine di comprendere appieno lo sviluppo web, è preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice
- Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web
- Il passaggio ad un sistema autore o ad un CMS risulta poi più facile e intuitivo.
`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

&nbsp;

- Al fine di comprendere appieno lo sviluppo web, è preferibile non utilizzare un sistema autore, ma sviluppare le pagine scrivendone tutto il codice
- Questo metodo per quanto, a prima vista, poco intuitivo, permette di comprendere in dettaglio il processo dello sviluppo web
- Il passaggio ad un sistema autore o ad un CMS risulta poi più facile e intuitivo.`,frontmatter:{},index:6,start:123,end:132,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Qy,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:7,start:133,end:155,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:nw,meta:{slide:{raw:`
# HTML - Ambiente di sviluppo

Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.


![html5_4.jpg](/media/html5_4.jpg)

`,title:"HTML - Ambiente di sviluppo",level:1,content:`# HTML - Ambiente di sviluppo

Disponendo le finestre di vscode e di chrome come in figura si ottiene un ambiente di sviluppo che permette il rendering della pagina in tempo reale.


![html5_4.jpg](/media/html5_4.jpg)`,frontmatter:{},index:8,start:156,end:165,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:iw,meta:{slide:{raw:`
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
- La pagina viene visualizzata all'interno del browser`,frontmatter:{},index:9,start:166,end:177,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:cw,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Tag e Attributi</h1>
`,content:'<h1 class="sezione">Tag e Attributi</h1>',frontmatter:{layout:"section"},index:10,start:177,end:182,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Sw,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:11,start:183,end:205,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Fw,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:12,start:206,end:250,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Gw,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:13,start:251,end:277,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Jw,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">La struttura di una pagina Web</h1>

`,content:'<h1 class="sezione">La struttura di una pagina Web</h1>',frontmatter:{layout:"section"},index:14,start:277,end:283,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:az,meta:{slide:{raw:`
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
3. **Body**: consiste nel contenuto principale della pagina HTML.`,frontmatter:{},index:15,start:284,end:295,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:cz,meta:{slide:{raw:`
# Struttura pagina HTML

Rappresentazione grafica della struttura di una pagina HTML

![html5_5.jpg](/media/html5_5.jpg)

`,title:"Struttura pagina HTML",level:1,content:`# Struttura pagina HTML

Rappresentazione grafica della struttura di una pagina HTML

![html5_5.jpg](/media/html5_5.jpg)`,frontmatter:{},index:16,start:296,end:304,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:hz,meta:{slide:{raw:`
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
- **&lt;html&gt;**: è il primo tag di apertura che indica l'inizio della pagina HTML. Questo tag contiene tutti gli altri elementi della pagina ed il contenuto da visualizzare.`,frontmatter:{},index:17,start:305,end:321,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:wz,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:18,start:322,end:336,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Lz,meta:{slide:{raw:`
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
- In questa sezione viene definito il contenuto che si vuole visualizzare nel browser.`,frontmatter:{},index:19,start:337,end:352,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Pz,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:20,start:353,end:381,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:qz,meta:{slide:{raw:`
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
- &lt;base&gt;: specifica un UTL di base da applicare a tutto il documento.`,frontmatter:{},index:21,start:382,end:396,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Kz,meta:{slide:{raw:`
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
- Il titolo è molto importante in quanto viene utilizzato dai motori di ricerca per classificare la pagina e influisce sull'algoritmo che decide in quale ordine visualizzare le pagine trovate.`,frontmatter:{},index:22,start:397,end:410,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Xz,meta:{slide:{raw:`
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


Importante notare che i metadati, non sono visualizzati dal browser, ma utilizzati dai motori di ricerca per comprendere meglio il contenuto della pagina stessa.`,frontmatter:{},index:23,start:411,end:426,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:ix,meta:{slide:{raw:`
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
- Per pagine di media/alta complessità non si include in quanto è più pulito definire gli stili della pagina in un file esterno di tipo **CSS**`,frontmatter:{},index:24,start:427,end:444,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:mx,meta:{slide:{raw:`
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
- Per pagine di media/alta complessità non si include in quanto è più pulito definire gli script della pagina in un file esterno di tipo **JS**`,frontmatter:{},index:25,start:445,end:466,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:kx,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:26,start:467,end:497,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:zx,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:27,start:498,end:515,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Lx,meta:{slide:{raw:`
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
5. Provare a modificare la sezione *script* e verificare i cambiamenti`,frontmatter:{},index:28,start:516,end:529,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Sx,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Titoli e Paragrafi in HTML</h1>
`,content:'<h1 class="sezione">Titoli e Paragrafi in HTML</h1>',frontmatter:{layout:"section"},index:29,start:529,end:534,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Wx,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:30,start:535,end:568,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Vx,meta:{slide:{raw:`
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
- Pertanto l'aggiunta di spazi o linee vuote non genera nessun effetto in quanto sono rimossi dal browser.`,frontmatter:{},index:31,start:569,end:589,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Zx,meta:{slide:{raw:`
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
5. Fornire il link github al file con nome |cognome|_esercizio_html_02.html`,frontmatter:{},index:32,start:590,end:601,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:nT,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Elementi block e inline</h1>

`,content:'<h1 class="sezione">Elementi block e inline</h1>',frontmatter:{layout:"section"},index:33,start:601,end:607,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:pT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:34,start:608,end:634,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:bT,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:35,start:635,end:658,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:MT,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:36,start:659,end:677,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:PT,meta:{slide:{raw:`
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
<p>Comunicato a tutti gli studenti: <span style="color:white;background:red;font-weight:bold">ATTENZIONE</span> Si richiede a tutti gli studenti di <span style="color:darkolivegreen;font-weight:bold">studiare</span> e sperimentare il più possibile con HTML.</p>`,frontmatter:{},index:37,start:678,end:691,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:RT,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Ancore e Link</h1>

`,content:'<h1 class="sezione">Ancore e Link</h1>',frontmatter:{layout:"section"},index:38,start:691,end:697,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:KT,meta:{slide:{raw:`
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

Il principale valore per *target* è **_blank**, e permette di aprire il documento in un una nuova finestra o tab del browser.`,frontmatter:{},index:39,start:698,end:721,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:XT,meta:{slide:{raw:`
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

Questo perchè, tutte le URL relative fanno riferimento ad una directory chiamata **document root** che rappresenta la root del web server.`,frontmatter:{},index:40,start:722,end:733,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:o$,meta:{slide:{raw:`
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


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:41,start:734,end:750,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:r$,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Web grafico con le Immagini</h1>

`,content:'<h1 class="sezione">Web grafico con le Immagini</h1>',frontmatter:{layout:"section"},index:42,start:750,end:756,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:h$,meta:{slide:{raw:`
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
- **height**: specifica l'altezza dell'immagine in pixel`,frontmatter:{},index:43,start:757,end:775,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:w$,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:44,start:776,end:788,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:I$,meta:{slide:{raw:`
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
</center>`,frontmatter:{},index:45,start:789,end:808,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:H$,meta:{slide:{raw:`
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

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:46,start:809,end:826,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:N$,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Formattazione del testo in HTML</h1>

`,content:'<h1 class="sezione">Formattazione del testo in HTML</h1>',frontmatter:{layout:"section"},index:47,start:826,end:832,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:B$,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:48,start:833,end:857,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:s2,meta:{slide:{raw:`
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
Alcune volte è necessario definire un termine tecnico come <i>Web Server</i>`,frontmatter:{},index:49,start:858,end:881,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:v2,meta:{slide:{raw:`
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
Al contrario quando un testo <small>è di poca importanza</small> si può usare il tag <b>small</b>`,frontmatter:{},index:50,start:882,end:905,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:C2,meta:{slide:{raw:`
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

In generale gli <sup>apici</sup> si ottengono son il tag <b>sup</b> mentre i <sub>pedici</sub> con il tag <b>sub</b>`,frontmatter:{},index:51,start:906,end:931,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:N2,meta:{slide:{raw:`
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

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:52,start:932,end:954,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:U2,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:53,start:955,end:972,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:X2,meta:{slide:{raw:`
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

-  Come si può notare la citazione è indentata. Il link alla citazione  non ha un effetto visivo ma può essere utile al motore di ricerca o altri tool.`,frontmatter:{},index:54,start:973,end:998,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:fM,meta:{slide:{raw:`
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
Un alternativa per una citazione è usare il tag <b>cite</b>. In una disicussione accesa Linus disse: <cite>"Parlare è facile. Mostrami il codice".</cite>`,frontmatter:{},index:55,start:999,end:1023,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:bM,meta:{slide:{raw:`
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

    
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:56,start:1024,end:1042,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:SM,meta:{slide:{raw:`
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
Se si vuole <s>sbarrare</s> una parola basta usare il tag &lt;s&gt;`,frontmatter:{},index:57,start:1043,end:1070,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:qM,meta:{slide:{raw:`
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

Per installare vscode in Linux usa il comando: <code>apt install vscode</code>`,frontmatter:{},index:58,start:1071,end:1088,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:GM,meta:{slide:{raw:`
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
</pre>`,frontmatter:{},index:59,start:1089,end:1115,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:eL,meta:{slide:{raw:`
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

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:60,start:1116,end:1133,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:uL,meta:{slide:{raw:`
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
<hr style="height:5px; background-color:grey">`,frontmatter:{},index:61,start:1134,end:1157,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:kL,meta:{slide:{raw:`
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
Studente 4 <meter min="0" max="10" value="4.5">4.5 su 10</meter><br />`,frontmatter:{},index:62,start:1158,end:1183,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:$L,meta:{slide:{raw:`
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
Studente 4 <progress min="0" max="10" value="4.5">4.5 di 10</progress><br />`,frontmatter:{},index:63,start:1184,end:1209,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:CL,meta:{slide:{raw:`
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


*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:64,start:1210,end:1228,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:HL,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Caratteri speciali in HTML</h1>

`,content:'<h1 class="sezione">Caratteri speciali in HTML</h1>',frontmatter:{layout:"section"},index:65,start:1228,end:1234,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:jL,meta:{slide:{raw:`
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
[Qui si può consultare la lista completa di entities HTML.](https://www.freeformatter.com/html-entities.html)`,frontmatter:{},index:66,start:1235,end:1259,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:YL,meta:{slide:{raw:`
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
- Pertanto se voglio inserire esattamente 10 spazi, devo inserire 10 volte \`&nbsp;\``,frontmatter:{},index:67,start:1260,end:1278,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:tI,meta:{slide:{raw:"\n# HTML Entities\n\nUso di caratteri riservati\n\n- Qui una lista di HTML entities comuemente usate\n\n| Carattere | Descizione   | Nome Entità  | Numero Entità  | \n|---|---|---|---|\n| |non-breaking space	| `&nbsp;`	| `&#160;`| \n|<	|less than|	`&lt;`|	`&#60;`|\n|>	|greater than	|`&gt;`	|`&#62;`|\n|`&` |ampersand	|`&amp;`	|`&#38;`|\n|\"	|double quotation mark	|`&quot;`	|`&#34;`|\n|'	|single quotation mark (apostrophe)	|`&apos;`	|`&#39;`|\n|€	|euro	|`&euro;`	|`&#8364;`|\n|©	|copyright	|`&copy;`	|`&#169;`|\n\n",title:"HTML Entities",level:1,content:"# HTML Entities\n\nUso di caratteri riservati\n\n- Qui una lista di HTML entities comuemente usate\n\n| Carattere | Descizione   | Nome Entità  | Numero Entità  | \n|---|---|---|---|\n| |non-breaking space	| `&nbsp;`	| `&#160;`| \n|<	|less than|	`&lt;`|	`&#60;`|\n|>	|greater than	|`&gt;`	|`&#62;`|\n|`&` |ampersand	|`&amp;`	|`&#38;`|\n|\"	|double quotation mark	|`&quot;`	|`&#34;`|\n|'	|single quotation mark (apostrophe)	|`&apos;`	|`&#39;`|\n|€	|euro	|`&euro;`	|`&#8364;`|\n|©	|copyright	|`&copy;`	|`&#169;`|",frontmatter:{},index:68,start:1279,end:1298,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:oI,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Liste (non)ordinate</h1>
`,content:'<h1 class="sezione">Liste (non)ordinate</h1>',frontmatter:{layout:"section"},index:69,start:1298,end:1303,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:mI,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:70,start:1304,end:1339,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:xI,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:71,start:1340,end:1381,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:HI,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:72,start:1382,end:1422,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:WI,meta:{slide:{raw:`
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

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:73,start:1423,end:1439,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:UI,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Rappresentazioni tabulari con le Tabelle</h1>

`,content:'<h1 class="sezione">Rappresentazioni tabulari con le Tabelle</h1>',frontmatter:{layout:"section"},index:74,start:1439,end:1445,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:JI,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:75,start:1446,end:1468,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:s3,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:76,start:1469,end:1531,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:p3,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:77,start:1532,end:1594,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:_3,meta:{slide:{raw:`
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

   
*far riferimento all'articolo orginale https://en.wikipedia.org/wiki/Localhost*`,frontmatter:{},index:78,start:1595,end:1609,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:b3,meta:{layout:"section",slide:{raw:`---
layout: section
---
<h1 class="sezione">Interagiamo con l'utente attraverso i Form</h1>

`,content:`<h1 class="sezione">Interagiamo con l'utente attraverso i Form</h1>`,frontmatter:{layout:"section"},index:79,start:1609,end:1615,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:I3,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:80,start:1616,end:1640,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:F3,meta:{slide:{raw:`
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
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">`,frontmatter:{},index:81,start:1641,end:1659,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:Y3,meta:{slide:{raw:`
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
<input type="text" id="idcognome" name="cognome" placeholder="Cognome" style="border: 1px solid black;background:Gainsboro;">`,frontmatter:{},index:82,start:1660,end:1684,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:oE,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:83,start:1685,end:1733,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:hE,meta:{slide:{raw:`
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
<button type="button" style="border: 1px solid red;">Click Me!</button>`,frontmatter:{},index:84,start:1734,end:1759,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:HE,meta:{slide:{raw:`
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
<label for="disoccupato">  Disoccupato</label><br><br>`,frontmatter:{},index:85,start:1760,end:1786,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:e5,meta:{slide:{raw:`
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
<label for="nuoto"> Nuoto</label><br><br>`,frontmatter:{},index:86,start:1787,end:1813,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:d5,meta:{slide:{raw:`
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
<input type="date" id="iddata" name="birthday"><br><br>`,frontmatter:{},index:87,start:1814,end:1830,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:v5,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:88,start:1831,end:1857,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:S5,meta:{slide:{raw:`
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
<input type="number" id="altezza" name="altezza" min="150" max="200" style="border: 1px solid black;"><br><br>`,frontmatter:{},index:89,start:1858,end:1874,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:j5,meta:{slide:{raw:`
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
 <input type="color" id="favcolor" name="favcolor" value="#ff0000" onchange="alert(\`Hai selezionato il colore: \${event.target.value}\`)"><br><br>`,frontmatter:{},index:90,start:1875,end:1891,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:Z5,meta:{slide:{raw:`
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
<input type="range" min="50" max="100" value="60" class="slider" id="peso"><br>`,frontmatter:{},index:91,start:1892,end:1907,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:rS,meta:{slide:{raw:`
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
</select><br><br>`,frontmatter:{},index:92,start:1908,end:1929,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:fS,meta:{slide:{raw:`
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
<textarea id="bio" name="bio" rows="4" cols="50" placeholder="Inserisci la tua biografia" style="border: 1px solid black;"></textarea>`,frontmatter:{},index:93,start:1930,end:1945,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:yS,meta:{slide:{raw:`
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
- ogni widget deve essere dotato della propria label`,frontmatter:{},index:94,start:1946,end:1967,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:IS,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:95,start:1968,end:1998,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:OS,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:96,start:1999,end:2050,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:jS,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:97,start:2051,end:2086,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:YS,meta:{slide:{raw:`
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
7. Viene inviata la risposta finale al browser`,frontmatter:{},index:98,start:2087,end:2103,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:n6,meta:{slide:{raw:`
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
- Per ovviare a queste problematiche, normalmente si effettua la validazione del form in JavaScript, quindi direttamente nel browser riducendo così il numero di messaggi con il server`,frontmatter:{},index:99,start:2104,end:2115,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:r6,meta:{slide:{raw:`
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
7. Viene inviata la risposta finale al browser`,frontmatter:{},index:100,start:2116,end:2132,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:_6,meta:{slide:{raw:`
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
5. Aprire la pagina fornita dal server locale sulla posta 8080`,frontmatter:{},index:101,start:2133,end:2152,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:z6,meta:{slide:{raw:`
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


`,title:"Esercizio html_14",level:1,content:"# Esercizio html_14\n\n\n&nbsp;\n\nSi richiede di:\n1. Verificare il funzionamento del form e della validazione dei campi\n2. Analizzaere il codice del form e del server in JavaScript\n3. Modificare il form in modo che l'età venga fornita come un ```range```\n4. Modificare il form in modo che sia presente anche il campo `Cognome`\n5. Modificare il codice del server in modo che sia presente **anche** la validazione dell'età, in modo che siano accettati solo valori compresi tra 19 e 31\n6. Fornire il link github alla directory con nome |cognome|_esercizio_html_14 contenente i file aggiornati *form.html* e *form_server.js*\n7. ```NON deve essere presente nel repository la directory **node_modules**```",frontmatter:{},index:102,start:2153,end:2170,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:L6,meta:{slide:{raw:`
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


- Il lineter è uno strumento fondamentale per lo sviluppatore.`,frontmatter:{},index:103,start:2171,end:2189,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:O6,meta:{slide:{raw:`
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
<img src="/media/html5_12.png" />`,frontmatter:{},index:104,start:2190,end:2201,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:B6,meta:{slide:{raw:`
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
<img src="/media/html5_13.png" />`,frontmatter:{},index:105,start:2202,end:2216,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:X6,meta:{slide:{raw:`
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
  - **Warning**: evidenzia potenziali problemi ma non necessariamente errori sintattici`,frontmatter:{},index:106,start:2217,end:2230,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:oC,meta:{slide:{raw:`
# Esercizio html_15

HTML lint

Mediante il servizio di validazione HTML del W3C si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente


`,title:"Esercizio html_15",level:1,content:`# Esercizio html_15

HTML lint

Mediante il servizio di validazione HTML del W3C si richiede di:
1. Effettuare la verifica sintattica del file |cognome|_glossario.html
2. Leggere in dettaglio il report e comprendere i principali errori e warning verificando il codice sorgente`,frontmatter:{},index:107,start:2231,end:2242,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:mC,meta:{slide:{raw:`
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
<img src="/media/html5_15.png" width="500" />`,frontmatter:{},index:108,start:2243,end:2258,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:wC,meta:{slide:{raw:`
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
<img src="/media/html5_16.png" width="700" />`,frontmatter:{},index:109,start:2259,end:2274,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:LC,meta:{slide:{raw:`
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
  - **html**: genera un report in formato HTML esattamente come quello generato dal servizio W3C`,frontmatter:{},index:110,start:2275,end:2288,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:RC,meta:{slide:{raw:`
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
<img src="/media/html5_17.png" />`,frontmatter:{},index:111,start:2289,end:2303,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:KC,meta:{slide:{raw:`
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
<img src="/media/html5_18.png" width="650"/>`,frontmatter:{},index:112,start:2304,end:2319,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:n4,meta:{slide:{raw:`
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
<img src="/media/html5_19.png" width="650"/>`,frontmatter:{},index:113,start:2320,end:2334,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:l4,meta:{slide:{raw:`
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
8. Consegnare su github il file |cognome|_esercizio_html_16.html`,frontmatter:{},index:114,start:2335,end:2352,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:m4,meta:{slide:{raw:`
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
4. Consegnare su github il file |cognome|_esercizio_html_17_glossario_corretto.html`,frontmatter:{},index:115,start:2353,end:2366,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:k4,meta:{slide:{raw:`
&nbsp;
<center>
<img src="/media/html5_11.jpg" width="800" />
</center>
`,content:`&nbsp;
<center>
<img src="/media/html5_11.jpg" width="800" />
</center>`,frontmatter:{},index:116,start:2367,end:2373,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",component:V0,meta:{layout:"end"}}],Ve=v4,qa=[{name:"play",path:"/",component:gb,children:[...Ve]},{name:"print",path:"/print",component:U0},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(t){if(!Fa.remote||Fa.remote===t.query.password)return!0;if(Fa.remote&&t.query.password===void 0){const s=prompt("Enter password");if(Fa.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};qa.push({path:"/presenter/print",component:()=>$t(()=>import("./PresenterPrint-b444af98.js"),["assets/PresenterPrint-b444af98.js","assets/NoteDisplay-38614686.js","assets/index-cd5a9285.js"])}),qa.push({name:"notes",path:"/notes",component:()=>$t(()=>import("./NotesView-a908ce7d.js"),["assets/NotesView-a908ce7d.js","assets/NoteDisplay-38614686.js","assets/index-cd5a9285.js"]),beforeEnter:n}),qa.push({name:"presenter",path:"/presenter/:no",component:()=>$t(()=>import("./Presenter-aebab6a5.js"),["assets/Presenter-aebab6a5.js","assets/NoteDisplay-38614686.js","assets/DrawingControls-8a3dff6b.js","assets/index-cd5a9285.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:n}),qa.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const Mt=q_({history:Fh("/TPSI/4/html/"),routes:qa});function b4(n,t,{mode:s="replace"}={}){return N({get(){const o=Mt.currentRoute.value.query[n];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){On(()=>{Mt[x(s)]({query:{...Mt.currentRoute.value.query,[n]:o}})})}})}const sp=ce(0);On(()=>{Mt.afterEach(async()=>{await On(),sp.value+=1})});const op=ce(0),Fn=N(()=>Mt.currentRoute.value),wa=N(()=>Fn.value.query.print!==void 0),y4=N(()=>Fn.value.query.print==="clicks"),at=N(()=>Fn.value.query.embedded!==void 0),Pn=N(()=>Fn.value.path.startsWith("/presenter")),lA=N(()=>Fn.value.path.startsWith("/notes")),ip=N(()=>wa.value&&!y4.value),di=N(()=>Fn.value.query.password),w4=N(()=>!Pn.value&&(!Ce.remote||di.value===Ce.remote)),Wr=b4("clicks","0"),lp=N(()=>Ve.length-1),z4=N(()=>Fn.value.path),Ye=N(()=>parseInt(z4.value.split(/\//g).slice(-1)[0])||1);N(()=>Yi(Ye.value));const cn=N(()=>Ve.find(n=>n.path===`${Ye.value}`));N(()=>{var n,t,s;return(s=(t=(n=cn.value)==null?void 0:n.meta)==null?void 0:t.slide)==null?void 0:s.id});N(()=>{var n,t;return((t=(n=cn.value)==null?void 0:n.meta)==null?void 0:t.layout)||(Ye.value===1?"cover":"default")});const So=N(()=>Ve.find(n=>n.path===`${Math.min(Ve.length,Ye.value+1)}`)),x4=N(()=>Ve.find(n=>n.path===`${Math.max(1,Ye.value-1)}`)),T4=N(()=>{var n,t;return sp.value,((t=(n=cn.value)==null?void 0:n.meta)==null?void 0:t.__clicksElements)||[]}),Xt=N({get(){if(ip.value)return 99999;let n=+(Wr.value||0);return isNaN(n)&&(n=0),n},set(n){Wr.value=n.toString()}}),Gs=N(()=>{var n,t;return+(((t=(n=cn.value)==null?void 0:n.meta)==null?void 0:t.clicks)??T4.value.length)}),$4=N(()=>Ye.value<Ve.length-1||Xt.value<Gs.value),M4=N(()=>Ye.value>1||Xt.value>0),L4=N(()=>Ve.filter(n=>{var t,s;return(s=(t=n.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((n,t)=>(Ji(n,t),n),[])),I4=N(()=>Zi(L4.value,cn.value));N(()=>Xi(I4.value));const E4=N(()=>P4(op.value,cn.value,x4.value));We(cn,(n,t)=>{op.value=Number(n==null?void 0:n.path)-Number(t==null?void 0:t.path)});function Gt(){Gs.value<=Xt.value?Qs():Xt.value+=1}async function Qt(){Xt.value<=0?await Ys():Xt.value-=1}function Yi(n){return Pn.value?`/presenter/${n}`:`/${n}`}function Qs(){const n=Math.min(Ve.length,Ye.value+1);return za(n)}async function Ys(n=!0){const t=Math.max(1,Ye.value-1);await za(t),n&&Gs.value&&Mt.replace({query:{...Fn.value.query,clicks:Gs.value}})}function za(n,t){return Mt.push({path:Yi(n),query:{...Fn.value.query,clicks:t}})}function S4(n){const t=ce(0),{direction:s,distanceX:o,distanceY:i}=th(n,{onSwipeStart(l){l.pointerType==="touch"&&(os.value||(t.value=Jo()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||os.value)return;const r=Math.abs(o.value),c=Math.abs(i.value);r/window.innerWidth>.3||r>100?s.value===it.LEFT?Gt():Qt():(c/window.innerHeight>.4||c>200)&&(s.value===it.DOWN?Ys():Qs())}})}async function Dr(){const{saveAs:n}=await $t(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);n(pu(Ce.download)?Ce.download:Ce.exportFilename?`${Ce.exportFilename}.pdf`:"/TPSI/4/html/slidev-exported.pdf",`${Ce.title}.pdf`)}async function rA(n){var t,s;if(n==null){const o=(s=(t=cn.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;n=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function Ji(n,t,s=1){var i,l,r,c,u;const o=(l=(i=t.meta)==null?void 0:i.slide)==null?void 0:l.level;o&&o>s&&n.length>0?Ji(n[n.length-1].children,t,s+1):n.push({children:[],level:s,path:t.path,hideInToc:Boolean((r=t.meta)==null?void 0:r.hideInToc),title:(u=(c=t.meta)==null?void 0:c.slide)==null?void 0:u.title})}function Zi(n,t,s=!1,o){return n.map(i=>{const l={...i,active:i.path===(t==null?void 0:t.path),hasActiveParent:s};return l.children.length>0&&(l.children=Zi(l.children,t,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function Xi(n,t=1){return n.filter(s=>!s.hideInToc).map(s=>({...s,children:Xi(s.children,t+1)}))}const C4={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function A4(n,t=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let s=n.name.includes("|")?n.name:C4[n.name]||n.name;if(s.includes("|")){const[o,i]=s.split("|").map(l=>l.trim());s=t?i:o}if(s)return{...n,name:s}}function P4(n,t,s){var i,l;let o=n>0?(i=s==null?void 0:s.meta)==null?void 0:i.transition:(l=t==null?void 0:t.meta)==null?void 0:l.transition;return o||(o=Ce.transition),A4(o,n<0)}export{ou as $,fp as A,ce as B,Z4 as C,J4 as D,Ae as E,Ee as F,nA as G,$n as H,X4 as I,Jr as J,$p as K,ds as L,On as M,Ci as N,Y as O,Zt as P,yi as Q,N4 as R,Zn as S,K4 as T,H4 as U,ip as V,Sf as W,Cf as X,lu as Y,iu as Z,L as _,Y4 as a,qt as a$,Lf as a0,j4 as a1,U4 as a2,B4 as a3,W4 as a4,D4 as a5,P0 as a6,H0 as a7,Dr as a8,Gt as a9,I1 as aA,x1 as aB,sA as aC,cn as aD,Ak as aE,S4 as aF,tA as aG,oA as aH,v as aI,Ku as aJ,rn as aK,Kk as aL,Gs as aM,$4 as aN,So as aO,os as aP,Io as aQ,db as aR,Ki as aS,Vi as aT,O4 as aU,R4 as aV,nb as aW,sv as aX,eA as aY,Yn as aZ,Ha as a_,Qs as aa,rA as ab,Qt as ac,Ys as ad,Fn as ae,q4 as af,xa as ag,jd as ah,Dd as ai,Me as aj,aA as ak,cd as al,e as am,Tn as an,ms as ao,en as ap,Ve as aq,lp as ar,a as as,be as at,Fi as au,Be as av,qn as aw,T as ax,xo as ay,Nu as az,Ye as b,Vn as b0,ci as b1,bk as b2,yk as b3,wk as b4,xk as b5,Ai as b6,su as b7,iA as b8,dn as b9,Ts as ba,Fv as bb,ru as bc,Tk as bd,Ce as c,Xt as d,lA as e,Pn as f,Yi as g,De as h,V4 as i,z as j,M as k,ro as l,te as m,E as n,G4 as o,Q4 as p,k as q,Mt as r,nn as s,gs as t,F4 as u,Ml as v,We as w,N as x,Si as y,x as z};
