import{h as _,j as d,k as p,ak as h,c as m,al as u,m as n,am as t,an as o,z as s,F as f,ao as g,ap as v,aq as x,q as l,ar as y,as as b,n as k,at as N,au as P,_ as w}from"./nav-93d11ef4.js";import{N as S}from"./NoteDisplay-6698b48e.js";import{u as T}from"./index-11fda292.js";const V={class:"m-4"},j={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},z={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),M={key:0,class:"border-gray-400/50 mb-8"},q=_({__name:"PresenterPrint",setup(A){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),T({title:`Notes - ${m.title}`});const r=u(()=>x.slice(0,-1).map(a=>{var i;return(i=a.meta)==null?void 0:i.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,i)=>(l(),n("div",{id:"page-root",style:v(s(P))},[t("div",V,[t("div",j,[t("h1",L,o(s(m).title),1),t("div",z,o(new Date().toLocaleString()),1)]),(l(!0),n(f,null,g(s(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),H])]),k(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(r).length-1?(l(),n("hr",M)):N("v-if",!0)]))),128))])],4))}}),W=w(q,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
