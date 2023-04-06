import{h as _,j as d,k as p,al as h,c as m,am as u,m as n,an as t,ao as o,A as s,F as f,ap as g,aq as v,ar as x,s as l,as as y,at as b,q as N,au as k,av as P,_ as w}from"./nav-0bcb58b2.js";import{N as S}from"./NoteDisplay-cda302af.js";import{u as T}from"./index-0397233b.js";const V={class:"m-4"},j={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},A={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),M={key:0,class:"border-gray-400/50 mb-8"},q=_({__name:"PresenterPrint",setup(z){d(p),h(`
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
`),T({title:`Notes - ${m.title}`});const r=u(()=>x.slice(0,-1).map(a=>{var i;return(i=a.meta)==null?void 0:i.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,i)=>(l(),n("div",{id:"page-root",style:v(s(P))},[t("div",V,[t("div",j,[t("h1",L,o(s(m).title),1),t("div",A,o(new Date().toLocaleString()),1)]),(l(!0),n(f,null,g(s(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),H])]),N(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(r).length-1?(l(),n("hr",M)):k("v-if",!0)]))),128))])],4))}}),W=w(q,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
