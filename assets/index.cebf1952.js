import{i as n,M as ee,j as e,k as ue,B as i,l as oe,m as $,T as m,n as O,u as v,r as c,o as P,q as S,s as I,t as H,v as _,w as W,F as y,x as k,I as b,G as we,y as z,z as w,A as Be,D as xe,E as G,H as te,J as Ae,K as ne,L as U,N as re,O as Fe,S as Ee,Q as ve,R as ye}from"./vendor.8fdb890f.js";import{C as be,D as De,S as ke,R as Me,E as Te,a as Se,b as We,c as Le,d as Ne,e as Pe,f as Ie,T as He,U as _e,g as Re}from"./index.af8080bd.js";const je=u=>({type:ke,payload:{tag:u}}),J=u=>({type:be,payload:{tag:u}}),Oe=u=>({type:Te,payload:{tag:u}}),ze=u=>({type:De,payload:{tag:u}}),Ue=()=>({type:Me,payload:{}});function Ve({handleDeleteTag:u,tag:o,handleTagEditSelected:t}){return n(ee,{children:[e(ue,{children:e(i,{className:"app-right-item",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"app-nav-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"})})})}),n(oe,{color:"black",children:[e($,{fontWeight:"medium",onClick:()=>t(o),children:"\u7DE8\u96C6"}),e($,{fontWeight:"medium",onClick:()=>u(o),children:"\u524A\u9664"})]})]})}function $e(u){u!=="all"&&u!=="shop"&&u!=="finance"&&u!=="work"&&u!=="web"&&u!=="chart"&&u!=="messages"&&u!=="clipboard"&&u!=="tag"&&u!=="eyes"&&console.warn(`"${u}" icon not found!`)}const Q=({type:u,sizeClass:o})=>($e(u),u==="all"?e("svg",{xmlns:"http://www.w3.org/2000/svg",className:o||"app-nav-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})}):u==="shop"?e("svg",{xmlns:"http://www.w3.org/2000/svg",className:o||"app-nav-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})}):u==="finance"?e("svg",{xmlns:"http://www.w3.org/2000/svg",className:o||"app-nav-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"})}):u==="work"?e("svg",{xmlns:"http://www.w3.org/2000/svg",className:o||"app-nav-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}):u==="web"?e("svg",{xmlns:"http://www.w3.org/2000/svg",className:o||"app-nav-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"})}):u==="messages"?e("svg",{xmlns:"http://www.w3.org/2000/svg",className:o||"app-nav-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"})}):u==="clipboard"?e("svg",{xmlns:"http://www.w3.org/2000/svg",className:o||"app-nav-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})}):u==="tag"?e("svg",{xmlns:"http://www.w3.org/2000/svg",className:o||"app-nav-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"})}):u==="eyes"?n("svg",{xmlns:"http://www.w3.org/2000/svg",className:o||"app-nav-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}):e("svg",{xmlns:"http://www.w3.org/2000/svg",className:o||"app-nav-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}));function Ge({handleSelectedTag:u,tag:o}){return n(i,{onClick:()=>u(o),py:4,w:"100%",className:"app-left-item",display:"flex",alignItems:"center",children:[e(Q,{type:o.icon}),e(m,{fontSize:"1xl",ml:"3",children:o.name})]})}const F=u=>({type:Se,payload:{notification:u}}),Ke=u=>({type:We,payload:{notification:u}});function Je(u){const{TAGS_STATE:o,selectTagDispatch:t,deleteTagDispatch:r,resetSelectedTagDispatch:a,createNotificationDispatch:s,handleTagEditSelected:d}=u,h=p=>t(p),g=p=>{r(p),s({type:"success",message:`${p.name} tag removed successfully`}),o.selectedTag.id===p.id&&a()};return e(i,{className:"scroll-style",maxHeight:300,height:"100%",overflowY:"auto",mt:3,color:"white",children:o.tags&&o.tags.map(p=>n(i,{_hover:{backgroundColor:"rgba(255, 255, 255, 0.03)"},cursor:"pointer",className:`app-box-item ${o.selectedTag.id===p.id?"selected":""}`,display:"flex",justifyContent:"space-between",alignItems:"center",px:4,children:[e(Ge,{tag:p,handleSelectedTag:h}),p.id!==0&&e(Ve,{tag:p,handleTagEditSelected:d,handleDeleteTag:g})]},"__tag_item__"+p.id))})}const Qe=u=>({TAGS_STATE:u.tags}),Ye=u=>({createTagDispatch:o=>u(J(o)),deleteTagDispatch:o=>u(ze(o)),selectTagDispatch:o=>u(je(o)),resetSelectedTagDispatch:()=>u(Ue()),createNotificationDispatch:o=>u(F(o))}),qe=O(Qe,Ye)(Je);function ae({title:u,handleClick:o,className:t=""}){return e(i,{px:4,mt:5,color:"white",className:t,children:e(m,{onClick:o,background:"whiteAlpha.200",_hover:{backgroundColor:"rgba(255, 255, 255, 0.2)",transition:".05s ease"},py:3,textAlign:"center",cursor:"pointer",borderRadius:"5px",fontWeight:"bold",children:u||"Create a new tag"})})}const Xe=["all","shop","finance","work","web","chart","messages","tag"];function Ze(u){const o=v(),[t,r]=c.exports.useState(""),[a,s]=c.exports.useState(""),d=()=>{s(""),r("")};return{tagName:t,tagIcon:a,setTagName:r,setTagIcon:s,handleCreate:p=>{o(J({id:p,name:t,icon:a})),o(F({type:"success",message:"\u30BF\u30B0\u4F5C\u6210\u3057\u307E\u3057\u305F"})),d(),u(!1)},handleEdit:p=>{o(Oe({id:p,name:t,icon:a})),o(F({type:"success",message:"\u30BF\u30B0\u7DE8\u96C6\u3057\u307E\u3057\u305F"})),d(),u(!1)}}}const e0=({tagEditSelected:u,setShowModal:o})=>{const{setTagIcon:t,setTagName:r,tagIcon:a,tagName:s,handleCreate:d,handleEdit:h}=Ze(o),g=()=>o(!1);c.exports.useEffect(()=>{r((u==null?void 0:u.name)||""),t((u==null?void 0:u.icon)||"")},[u]);const p=()=>{if(u)return h(u==null?void 0:u.id);d(Math.random().toString(36).substr(2,5))};return n(P,{isOpen:!0,onClose:g,children:[e(S,{}),n(I,{children:[e(H,{children:u?"\u30BF\u30B0\u306E\u7DE8\u96C6":"\u30BF\u30B0\u306E\u65B0\u898F\u4F5C\u6210"}),e(_,{color:"purple.600"}),n(W,{children:[n(y,{mb:"5",id:"name",children:[e(k,{fontWeight:"bold",color:"gray.500",children:"\u30BF\u30B0\u540D"}),e(b,{focusBorderColor:"purple.600",placeholder:"Social, Job, etc...",type:"text",onChange:l=>r(l.target.value),value:s})]}),e(k,{fontWeight:"bold",color:"gray.500",children:"Tag icon"}),e(we,{my:3,templateColumns:"repeat(4, 1fr)",gap:6,children:Xe.map(l=>e(i,{onClick:()=>t(l),cursor:"pointer",border:"2px",borderRadius:"md",borderColor:"purple.100",style:{borderColor:l===a?"#285E61":""},_hover:{borderColor:"purple.200"},mx:"auto",p:3,children:e(Q,{type:l})},l))})]}),n(z,{children:[e(w,{variant:"ghost",color:"purple.600",mr:3,onClick:g,fontWeight:"medium",children:"\u9589\u3058\u308B"}),e(w,{isDisabled:!(s!==""&&a!==""),onClick:p,variant:"solid",bgColor:"purple.600",color:"white",_hover:{color:"purple.600",bgColor:"gray.100"},fontWeight:"medium",children:"\u4FDD\u5B58"})]})]})]})},u0=(u,o)=>{const t=JSON.stringify({tags:u.tags,passwords:o.passwords}),r="data:application/json;charset=utf-8,"+encodeURIComponent(t),a=new Date().toISOString().slice(0,10)+" LOCKY_BACKUP_FILE.json",s=document.createElement("a");s.setAttribute("href",r),s.setAttribute("download",a),s.click(),s.remove()},o0=(u,o)=>{if(!u)return o(null);const t=new FileReader;t.readAsText(u,"UTF-8"),t.onload=r=>{try{if(r&&r.target&&r.target.result&&r.target.result){const a=JSON.parse(r.target.result);return!a.passwords||!a.tags?o(null):o(a)}return o(null)}catch{return o(null)}}},se=u=>({type:Pe,payload:{password:u}}),t0=u=>({type:Ne,payload:{password:u}}),n0=u=>({type:Le,payload:{password:u}}),r0=u=>({TAGS:u.tags,PASSWORDS:u.passwords});function a0({TAGS:u,PASSWORDS:o}){const t=v(),[r,a]=c.exports.useState(null),[s,d]=c.exports.useState(!1),h=l=>{l.forEach(B=>t(J(B)))},g=l=>{l.forEach(B=>t(se(B)))};return n(i,{children:[n(i,{background:"gray.100",borderRadius:"lg",p:4,children:[e(m,{fontWeight:"medium",fontSize:"xl",children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u751F\u6210\u3059\u308B"}),e(m,{mb:4,textColor:"gray.500",children:"\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B"}),e(w,{background:"gray.300",onClick:()=>u0(u,o),children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})]}),n(i,{background:"gray.100",borderRadius:"lg",p:4,mt:2,children:[e(m,{fontWeight:"medium",fontSize:"xl",children:"\u30A4\u30F3\u30DD\u30FC\u30C8\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"}),e(m,{textColor:"gray.500",children:"\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B"}),s&&e(m,{color:"red.700",fontWeight:"medium",fontSize:"xs",children:"\u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u3088\u3046\u3068\u3057\u305F\u3068\u304D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u3082\u3046\u4E00\u5EA6\u3084\u308A\u76F4\u3057\u3066\u304F\u3060\u3055\u3044"}),n(i,{display:"flex",alignItems:"center",mt:4,children:[e(b,{mr:3,type:"file",onChange:l=>a(l.target.files[0])}),e(w,{background:"gray.300",maxWidth:"200px",width:"100%",disabled:!r,onClick:()=>{d(!1),o0(r,l=>{if(!l)return d(!0),t(F({type:"error",message:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u306E\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B"}));h(l==null?void 0:l.tags),g(l==null?void 0:l.passwords),t(F({type:"success",message:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306B\u6210\u529F"}))})},children:"\u30A4\u30F3\u30DD\u30FC\u30C8\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"})]})]})]})}const s0=O(r0)(a0);function Y({selectedTab:u,setSelectedTab:o,optionName:t,optionValue:r}){return e(m,{p:3,my:"auto",cursor:"pointer",fontSize:"lg",marginRight:2,borderRadius:"md",fontWeight:u===r?"bold":"normal",color:u===r?"gray.800":"",background:u===r?"gray.100":"",_hover:{backgroundColor:"gray.50",color:"gray.600"},onClick:()=>o(r),children:t||"Option name"})}function le({handleCancel:u,handleOK:o,title:t,description:r,colorScheme:a="red"}){return n(Be,{motionPreset:"slideInBottom",leastDestructiveRef:void 0,onClose:u,isOpen:!0,isCentered:!0,children:[e(S,{}),n(xe,{children:[e(H,{fontWeight:"medium",children:t||"continue?"}),e(_,{}),e(W,{children:r||""}),n(z,{children:[e(w,{ref:void 0,onClick:u,children:"\u30AD\u30E3\u30F3\u30BB\u30EB"}),e(w,{onClick:o,colorScheme:a,ml:3,children:"\u78BA\u8A8D"})]})]})]})}function ie(){const u=v();return{resetApp:()=>{let t=6;window.localStorage.removeItem("persist:root"),u(F({type:"success",message:"\u5FA9\u5143\u3057\u307E\u3057\u305F"})),setInterval(()=>t<=1?window.location.reload():(t--,u(F({type:"warning",message:`${t}\u79D2\u3067\u30EA\u30ED\u30FC\u30C9\u3057\u307E\u3059`}))),1e3)}}}function l0(){const[u,o]=c.exports.useState(!1),{resetApp:t}=ie();return e(i,{children:n(i,{background:"gray.100",borderRadius:"lg",p:4,children:[e(m,{fontWeight:"bold",fontSize:"xl",children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306B\u623B\u3059"}),e(m,{mb:4,color:"gray.500",children:"\u3053\u306E\u64CD\u4F5C\u306B\u3088\u308A\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5B8C\u5168\u306B\u524A\u9664\u3055\u308C\u307E\u3059"}),e(w,{colorScheme:"red",onClick:()=>o(!0),children:"\u5FA9\u5143"}),u&&e(le,{handleOK:t,handleCancel:()=>o(!1),title:"\u5FA9\u5143",colorScheme:"red",description:"\u7D9A\u3051\u307E\u3059\u304B\uFF1F\u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u5143\u306B\u623B\u305B\u307E\u305B\u3093"})]})})}const ce=u=>({type:Ie,payload:{password:u}});function i0(){const u=v(),o=G(l=>l),[t,r]=c.exports.useState(!1),[a,s]=c.exports.useState(""),[d,h]=c.exports.useState(""),g=()=>{r(!1),s(""),h("")};return e(i,{children:n(i,{background:"gray.100",borderRadius:"lg",p:4,children:[e(m,{fontWeight:"medium",fontSize:"xl",mb:3,children:"\u30A2\u30AF\u30BB\u30B9\u30B3\u30FC\u30C9\u3092\u66F4\u65B0\u3059\u308B"}),n(i,{children:[n(y,{children:[e(m,{children:"\u73FE\u5728\u306E\u30A2\u30AF\u30BB\u30B9\u30B3\u30FC\u30C9"}),e(b,{style:t?{borderWidth:2,borderColor:"red"}:{},focusBorderColor:t?"none":"purple.600",onChange:l=>s(l.target.value),autoComplete:"off",type:"password",value:a,placeholder:"Old",background:"white"})]}),n(y,{mt:3,children:[e(m,{children:"\u65B0\u3057\u3044\u30A2\u30AF\u30BB\u30B9\u30B3\u30FC\u30C9"}),e(b,{style:t?{borderWidth:2,borderColor:"red"}:{},focusBorderColor:t?"none":"purple.600",onChange:l=>h(l.target.value),value:d,autoComplete:"off",type:"password",placeholder:"New",background:"white"})]}),e(w,{mt:5,onClick:()=>a===o.userPassword.password?(u(ce(d)),u(F({type:"success",message:"\u30A2\u30AF\u30BB\u30B9\u30B3\u30FC\u30C9\u306E\u66F4\u65B0\u306B\u6210\u529F"})),g()):(r(!0),u(F({type:"error",message:"\u73FE\u5728\u306E\u30A2\u30AF\u30BB\u30B9\u30B3\u30FC\u30C9\u304C\u4E00\u81F4\u3057\u306A\u3044"}))),background:"gray.300",children:"\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8"})]})]})})}function c0(){const[u,o]=c.exports.useState("backup");return n(i,{className:"left-modal",display:"flex",flexDirection:"column",height:"100%",minHeight:400,children:[n(i,{className:"tabs",width:"100%",p:3,display:"flex",children:[e(Y,{selectedTab:u,setSelectedTab:o,optionName:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7",optionValue:"backup"}),e(Y,{selectedTab:u,setSelectedTab:o,optionName:"\u30E6\u30FC\u30B6\u30FC",optionValue:"user"}),e(Y,{selectedTab:u,setSelectedTab:o,optionName:"\u30B7\u30B9\u30C6\u30E0\u8A2D\u5B9A",optionValue:"system"})]}),n(i,{flex:1,p:3,children:[u==="backup"&&e(s0,{}),u==="user"&&e(i0,{}),u==="system"&&e(l0,{})]})]})}const d0=({handleSetConfigModal:u})=>{const o=()=>{u(!1)};return n(P,{isOpen:!0,onClose:o,children:[e(S,{}),e(I,{p:0,style:{maxWidth:680},children:n(W,{p:0,children:[e(c0,{}),e(i,{width:"100%",minWidth:"100%",textAlign:"right",px:3,pb:3,children:e(w,{display:"inline-block",background:"ghost",onClick:o,fontWeight:"medium",children:"\u9589\u3058\u308B"})})]})})]})},de=()=>({type:He}),h0=({className:u})=>{const o=v(),[t,r]=c.exports.useState(!1),[a,s]=c.exports.useState(!1),[d,h]=c.exports.useState(null),g=B=>h(B),p=()=>s(!0),l=(B=!1)=>r(B);return c.exports.useEffect(()=>{d&&s(!0)},[d]),c.exports.useEffect(()=>{a||h(null)},[a]),n(i,{className:u,bgColor:"purple.600",children:[e(i,{width:"100%",minWidth:"100%",pr:3,pt:3,children:e(w,{className:"responsive-sidebar-close-button",variant:"outline",colorScheme:"whiteAlpha",size:"sm",ml:"auto",onClick:()=>o(de()),children:e(m,{fontWeight:"medium",color:"white",children:"\u9589\u3058\u308B"})})}),e(i,{px:8,pt:6,className:"head-text",textAlign:"center",children:e(m,{color:"white",fontSize:"3xl",fontWeight:"medium",children:"\u30D1\u30B9\u30EF\u30FC\u30C9\u4FDD\u7BA1\u5EAB"})}),e("hr",{className:"app-divider"}),n(i,{display:"flex",justifyContent:"space-between",flexDirection:"column",minHeight:"65vh",children:[e(i,{children:e(qe,{handleTagEditSelected:g})}),n(i,{children:[e(ae,{handleClick:p,title:"\u65B0\u3057\u3044\u30BF\u30B0\u3092\u4F5C\u6210\u3059\u308B"}),e(ae,{handleClick:l,title:"\u8A2D\u5B9A"}),a&&e(e0,{setShowModal:s,tagEditSelected:d}),t&&e(d0,{handleSetConfigModal:l})]})]})]})},p0=u=>{const o=G(t=>t.sidebar.showSidebar);return n(te,{className:"full-container",minWidth:"full",mx:0,px:0,minheight:"full",bgColor:"gray.100",children:[e(h0,{className:`app-sidebar ${o?"active":""}`}),e(i,{className:"app-content",children:u.children})]})};function m0(){const u=Ae(),o=v();return{renderToast:r=>{r.forEach(a=>{u({title:`${a.message||"Notification without message"}`,description:a.descripton||null,status:a.type||"error",duration:a.duration||5e3,isClosable:a.isClosable||!0,position:"top-right"}),o(Ke(a))})}}}function he(){const u=v();return{handleClipboard:t=>{if(!t)return!1;try{navigator.clipboard.writeText(t),u(F({type:"success",message:"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3055\u308C\u305F"}))}catch(r){console.error(r),u(F({type:"error",message:"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3055\u308C\u3066\u3044\u307E\u305B\u3093"}))}}}}function K({fieldType:u,fieldValue:o,handleClipboard:t,showClipboardButton:r=!0}){return n(i,{display:"flex",justifyContent:"space-between",p:2,mb:3,border:"1px",borderColor:"gray.300",rounded:"xl",children:[n(i,{my:"auto",display:"flex",fontWeight:"bold",children:[e(m,{background:"gray.300",px:3,py:1,rounded:"lg",children:u||"Lorem"}),u!=="Password"&&e(m,{ml:3,my:"auto",color:"gray.600",children:o&&o.length?o:"Empty"}),u==="Password"&&e(m,{ml:3,my:"auto",color:"gray.600",children:"*******"})]}),r&&e(w,{disabled:!(o==null?void 0:o.length),onClick:()=>t(o),my:"auto",children:e(Q,{type:"clipboard"})})]})}function g0({handleClose:u,password:o}){const{handleClipboard:t}=he();return n(P,{isOpen:!0,onClose:u,size:"3xl",children:[e(S,{}),n(I,{children:[n(H,{display:"flex",children:[e(i,{my:"auto",mr:3,children:e("img",{loading:"lazy",src:`http://www.google.com/s2/favicons?domain=${o.url||"http://github.com/"}`,alt:o.name,width:"20px"})}),e(m,{my:"auto",textTransform:"capitalize",children:o.name})]}),e(_,{}),n(W,{children:[e(i,{mb:3,children:e(m,{color:"gray.500",children:o.description?o.description:"\u3053\u3053\u306B\u8A18\u8F09\u306F\u3042\u308A\u307E\u305B\u3093"})}),e(K,{fieldType:"\u30E1\u30FC\u30EB",handleClipboard:t,fieldValue:o.email}),e(K,{fieldType:"\u30E6\u30FC\u30B6\u540D",handleClipboard:t,fieldValue:o.username}),e(K,{fieldType:"\u30D1\u30B9\u30EF\u30FC\u30C9",handleClipboard:t,fieldValue:o.password}),e(K,{fieldType:"URL",handleClipboard:t,fieldValue:o.url})]})]})]})}const pe=({password:u,handleEdit:o,handleDelete:t,setShowViewModal:r,setViewModalItem:a})=>n(i,{p:6,my:2,display:"flex",justifyContent:"space-between",boxShadow:"xl",border:"2px",borderColor:"gray.300",width:"100%",rounded:"2xl",bgColor:"gray.100",children:[n(i,{display:"flex",flexDirection:"column",cursor:"pointer",width:"100%",onClick:()=>(r(!0),a(u)),children:[e("img",{loading:"lazy",src:`http://www.google.com/s2/favicons?domain=${u.url||"http://github.com/"}`,alt:u.name,width:"20px"}),e(i,{fontWeight:"bold",color:"gray.900",fontSize:"xl",children:u.name}),e(i,{marginRight:2,color:"gray.500",display:"flex",rounded:"md",children:e(m,{display:"inline-block",fontWeight:"medium",marginTop:2,children:u.email.length?u.email:u.username||"\u60C5\u5831\u306A\u3057"})})]}),n(ee,{children:[e(ue,{children:e(i,{rounded:"3xl",p:1,className:"app-right-item",background:"gray.100",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"app-search-icon",enableBackground:"new 0 0 330 330",version:"1.1",viewBox:"0 0 330 330",xmlSpace:"preserve",children:n("g",{children:[e("path",{d:"M75 180v60c0 8.284 6.716 15 15 15h60a15 15 0 0010.606-4.394l164.999-165c5.858-5.858 5.858-15.355 0-21.213l-60-60a14.997 14.997 0 00-21.211.001l-165 165A14.994 14.994 0 0075 180zm30 6.213l150-150L293.787 75l-150 150H105v-38.787z"}),e("path",{d:"M315 150.001c-8.284 0-15 6.716-15 15V300H30V30h135c8.284 0 15-6.716 15-15s-6.716-15-15-15H15C6.716 0 0 6.716 0 15v300c0 8.284 6.716 15 15 15h300c8.284 0 15-6.716 15-15V165.001c0-8.285-6.716-15-15-15z"})]})})})}),n(oe,{color:"black",children:[e($,{icon:n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"app-search-icon",enableBackground:"new 0 0 494.936 494.936",version:"1.1",viewBox:"0 0 494.936 494.936",xmlSpace:"preserve",children:[e("path",{d:"M389.844 182.85c-6.743 0-12.21 5.467-12.21 12.21v222.968c0 23.562-19.174 42.735-42.736 42.735H67.157c-23.562 0-42.736-19.174-42.736-42.735V150.285c0-23.562 19.174-42.735 42.736-42.735h267.741c6.743 0 12.21-5.467 12.21-12.21s-5.467-12.21-12.21-12.21H67.157C30.126 83.13 0 113.255 0 150.285v267.743c0 37.029 30.126 67.155 67.157 67.155h267.741c37.03 0 67.156-30.126 67.156-67.155V195.061c0-6.743-5.467-12.211-12.21-12.211z"}),e("path",{d:"M483.876 20.791c-14.72-14.72-38.669-14.714-53.377 0L221.352 229.944c-.28.28-3.434 3.559-4.251 5.396l-28.963 65.069a12.203 12.203 0 002.521 13.6 12.214 12.214 0 008.639 3.576c1.675 0 3.362-.346 4.96-1.057l65.07-28.963c1.83-.815 5.114-3.97 5.396-4.25L483.876 74.169c7.131-7.131 11.06-16.61 11.06-26.692 0-10.081-3.929-19.562-11.06-26.686zM466.61 56.897L257.457 266.05c-.035.036-.055.078-.089.107l-33.989 15.131L238.51 247.3c.03-.036.071-.055.107-.09L447.765 38.058c5.038-5.039 13.819-5.033 18.846.005a13.205 13.205 0 013.905 9.414c0 3.559-1.389 6.903-3.906 9.42z"})]}),fontWeight:"medium",onClick:()=>o(u),children:"\u7DE8\u96C6"}),e($,{icon:n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"app-search-icon",viewBox:"0 0 24 24",children:[e("path",{stroke:"#130F26",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M19.325 9.468s-.543 6.735-.858 9.572c-.15 1.355-.987 2.15-2.358 2.174-2.609.047-5.221.05-7.829-.005-1.319-.027-2.142-.83-2.289-2.162-.317-2.862-.857-9.579-.857-9.579",opacity:"0.4"}),e("path",{stroke:"#130F26",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M20.708 6.24H3.75M17.44 6.24a1.648 1.648 0 01-1.614-1.324L15.583 3.7a1.28 1.28 0 00-1.237-.95h-4.233a1.28 1.28 0 00-1.237.95l-.243 1.216A1.648 1.648 0 017.018 6.24"})]}),fontWeight:"medium",color:"red.500",onClick:()=>t(u),children:"\u524A\u9664"})]})]})]});function C0({TAG_STATE:u,PASSWORD_STATE:o,setSelectedPassword:t,setShowModal:r}){const a=v(),{handleClipboard:s}=he(),[d,h]=c.exports.useState(null),[g,p]=c.exports.useState(!1),[l,B]=c.exports.useState(!1),[x,E]=c.exports.useState(null),A=G(f=>f.search.search),L=()=>{a(n0(d)),a(F({message:"\u524A\u9664\u3057\u307E\u3057\u305F",type:"success"})),p(!1)},M=f=>(t(f),r(!0)),R=f=>(h(f),p(!0)),j=()=>(h(null),p(!1)),V=()=>(B(!1),E(null)),[D]=ne("(min-width: 800px)");return n(U,{children:[e(i,{display:"grid",gridTemplateColumns:D?"repeat(2, 1fr)":"1fr",gap:4,className:"md-column",p:1,children:u.selectedTag.id!==0?o.passwords.map(f=>{var T;if(f.tagId===u.selectedTag.id&&(f.name.toLowerCase().includes(A.toLowerCase())||f.email.toLowerCase().includes(A.toLowerCase())||((T=f.username)==null?void 0:T.toLowerCase().includes(A.toLowerCase()))))return e(pe,{password:f,setViewModalItem:E,setShowViewModal:B,handleClipboard:s,handleDelete:R,handleEdit:M},f.token)}):o.passwords.map(f=>{var T;if(f.name.toLowerCase().includes(A.toLowerCase())||f.email.toLowerCase().includes(A.toLowerCase())||((T=f.username)==null?void 0:T.toLowerCase().includes(A.toLowerCase())))return e(pe,{password:f,setViewModalItem:E,setShowViewModal:B,handleClipboard:s,handleDelete:R,handleEdit:M},f.token)})}),g&&e(le,{handleCancel:j,handleOK:L,title:"\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u524A\u9664",description:"\u3053\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u524A\u9664\u3057\u305F\u3044\u306E\u3067\u3059\u304B\uFF1F"}),l&&e(g0,{password:x,handleClose:V})]})}const f0=()=>e(i,{px:3,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",mt:12,children:e(m,{fontSize:"3xl",fontWeight:"bold",mb:2,children:"\u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093"})}),w0=u=>({TAG_STATE:u.tags,PASSWORD_STATE:u.passwords}),B0=({TAG_STATE:u,PASSWORD_STATE:o,setSelectedPassword:t,setShowModal:r})=>{var a;return e(te,{className:"main-container",minHeight:"70vh",minWidth:"calc(100% - 80px)",mx:"auto",children:((a=o.passwords)==null?void 0:a.length)?e(C0,{setShowModal:r,setSelectedPassword:t,PASSWORD_STATE:o,TAG_STATE:u}):e(f0,{})})},x0=O(w0)(B0),A0=u=>({type:_e,payload:{search:u}});function F0(u){const o=v(),[t,r]=c.exports.useState(""),[a,s]=c.exports.useState(""),[d,h]=c.exports.useState(""),[g,p]=c.exports.useState(""),[l,B]=c.exports.useState(""),[x,E]=c.exports.useState(""),[A,L]=c.exports.useState(""),M=()=>{r(""),s(""),h(""),p(""),B(""),E(""),L("")};return{name:t,setName:r,description:a,setDescription:s,username:d,setUsername:h,email:g,setEmail:p,password:l,setPassword:B,url:x,setUrl:E,tagId:A,setTagId:D=>L(D),handleCreate:D=>{o(se({token:D,name:t,description:a,username:d,email:g,password:l,url:x,tagId:A})),u(!1),M()},handleEdit:D=>{o(t0({token:D,name:t,description:a,username:d,email:g,password:l,url:x,tagId:A})),u(!1),M()}}}function E0({showModal:u,passwordSelected:o,setShowModal:t,setSelectedPassword:r,tagState:a}){const{name:s,setName:d,description:h,setDescription:g,username:p,setUsername:l,email:B,setEmail:x,password:E,setPassword:A,url:L,setUrl:M,tagId:R,setTagId:j,handleCreate:V,handleEdit:D}=F0(t),f=()=>{t(!1),o&&r(null)},T=v(),[X,Ce]=c.exports.useState(!1);c.exports.useEffect(()=>{d((o==null?void 0:o.name)||""),g((o==null?void 0:o.description)||""),l((o==null?void 0:o.username)||""),x((o==null?void 0:o.email)||""),A((o==null?void 0:o.password)||""),M((o==null?void 0:o.url)||""),j((o==null?void 0:o.tagId)||0)},[o]);const Z=()=>{o?D(o==null?void 0:o.token):V(Math.random().toString(36).substr(2,5)),T(F({type:"success",message:o?"\u7DE8\u96C6\u6210\u529F":"\u4F5C\u6210\u3055\u308C\u307E\u3057\u305F"})),r(null)},fe=C=>{if(C.key==="Enter"&&s!==""&&E!=="")return Z()},[N]=ne("(min-width: 800px)");return n(P,{isOpen:u,onClose:f,children:[e(S,{}),n(I,{maxWidth:800,w:"100%",children:[e(H,{fontWeight:"medium",children:o?"\u7DE8\u96C6":"\u65B0\u898F\u4F5C\u6210"}),e(_,{color:"purple.600"}),n(W,{onKeyDown:C=>fe(C),children:[n(i,{display:"flex",flexDirection:`${N?"row":"column"}`,children:[n(y,{mb:"5",id:"name",mr:`${N?"4":""}`,children:[e(k,{fontWeight:"medium",color:"gray.600",children:"\u9805\u76EE\u540D"}),e(b,{focusBorderColor:"purple.600",placeholder:"Twitter password",type:"text",id:"name",onChange:C=>d(C.target.value),value:s})]}),n(y,{mb:"5",id:"name",children:[e(k,{fontWeight:"medium",color:"gray.600",children:"\u30E6\u30FC\u30B6\u540D"}),e(b,{focusBorderColor:"purple.600",placeholder:"Username",type:"text",id:"username",onChange:C=>l(C.target.value),value:p})]})]}),n(i,{display:"flex",flexDirection:`${N?"row":"column"}`,children:[n(y,{mb:"5",id:"name",mr:`${N?"4":""}`,children:[e(k,{fontWeight:"medium",color:"gray.600",children:"\u30E1\u30FC\u30EB"}),e(b,{focusBorderColor:"purple.600",placeholder:"email@domain.com",type:"text",id:"email",onChange:C=>x(C.target.value),value:B})]}),n(y,{mb:"5",id:"name",children:[e(k,{fontWeight:"medium",color:"gray.600",children:"\u30D1\u30B9\u30EF\u30FC\u30C9"}),n(re,{size:"md",children:[e(b,{focusBorderColor:"purple.600",type:X?"text":"password",placeholder:"Enter password",value:E,id:"password",onChange:C=>A(C.target.value)}),e(Fe,{width:"4.5rem",children:e(w,{_focus:{borderColor:"purple.600"},h:"1.75rem",size:"sm",onClick:()=>Ce(C=>!C),children:X?"Hide":"Show "})})]})]})]}),n(i,{display:"flex",flexDirection:`${N?"row":"column"}`,children:[n(y,{mb:"5",id:"name",mr:`${N?"4":""}`,children:[e(k,{fontWeight:"medium",color:"gray.600",children:"\u30BF\u30B0"}),e(Ee,{id:"tagId",value:R,onChange:C=>j(C.target.value),placeholder:"Select tag",children:a.tags&&a.tags.map(C=>e("option",{value:C.id,children:C.name},C.name))})]}),n(y,{mb:"5",id:"name",children:[e(k,{fontWeight:"medium",color:"gray.600",children:"URL"}),e(b,{focusBorderColor:"purple.600",placeholder:"https://twitter.com/",type:"text",id:"url",onChange:C=>M(C.target.value),value:L})]})]}),n(y,{mb:"5",id:"name",children:[e(k,{fontWeight:"medium",color:"gray.600",children:"\u8AAC\u660E\u30FB\u5099\u8003"}),e(ve,{focusBorderColor:"purple.600",placeholder:"Entry description",id:"description",onChange:C=>g(C.target.value),value:h})]})]}),n(z,{children:[e(w,{variant:"ghost",color:"purple.600",mr:3,onClick:f,fontWeight:"medium",children:"\u9589\u3058\u308B"}),e(w,{isDisabled:!(s!==""&&E!==""),onClick:Z,variant:"solid",bgColor:"purple.600",color:"white",_hover:{color:"purple.600",bgColor:"gray.100"},fontWeight:"medium",children:"\u4FDD\u5B58"})]})]})]})}const v0=u=>({TAG_STATE:u.tags}),y0=({TAG_STATE:u,selectedPassword:o,showModal:t,setShowModal:r,setSelectedPassword:a})=>{const s=v(),[d,h]=c.exports.useState(""),g=()=>s(A0(d));return c.exports.useEffect(()=>{g()},[d]),n(U,{children:[n(i,{display:"flex",justifyContent:"space-between",flexDirection:"row",backgroundColor:"gray.100",px:7,py:4,children:[n(i,{display:"flex",mb:1,children:[e(w,{mr:4,color:"purple.800",_focus:{outline:"none"},maxWidth:70,width:"100%",onClick:()=>s(de()),children:n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"app-nav-icon",enableBackground:"new 0 0 377 377",version:"1.1",viewBox:"0 0 377 377",xmlSpace:"preserve",children:[e("circle",{cx:"15",cy:"88.5",r:"15"}),e("path",{d:"M75 73.5H377V103.5H75z"}),e("circle",{cx:"15",cy:"288.5",r:"15"}),e("path",{d:"M75 273.5H377V303.5H75z"}),e("circle",{cx:"15",cy:"188.5",r:"15"}),e("path",{d:"M75 173.5H377V203.5H75z"})]})}),e(w,{color:"purple.800",_focus:{outline:"none"},maxWidth:70,width:"100%",onClick:()=>r(!0),children:n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"app-nav-icon",enableBackground:"new 0 0 490 490",version:"1.1",viewBox:"0 0 490 490",xmlSpace:"preserve",children:[e("path",{d:"M17.1 490h349.4c9.5 0 17.2-7.7 17.2-17.2v-89.2h89.2c9.5 0 17.1-7.7 17.1-17.1V17.1C490 7.6 482.3 0 472.9 0H123.5c-9.5 0-17.2 7.7-17.2 17.1v89.2H17.1C7.6 106.3 0 114 0 123.5v349.4c0 9.4 7.7 17.1 17.1 17.1zM140.6 34.3h315.1v315.1H140.6V34.3zM34.3 140.6h72v225.9c0 9.5 7.7 17.1 17.2 17.1h225.9v72H34.3v-315z"}),e("path",{d:"M219.5 209H281v61.5c0 9.5 7.7 17.2 17.2 17.2s17.1-7.7 17.1-17.2V209h61.5c9.5 0 17.1-7.7 17.1-17.2s-7.7-17.2-17.1-17.2h-61.5v-61.5c0-9.5-7.7-17.2-17.1-17.2-9.5 0-17.2 7.7-17.2 17.2v61.5h-61.5c-9.5 0-17.1 7.7-17.1 17.2-.1 9.5 7.6 17.2 17.1 17.2z"})]})})]}),e(i,{textAlign:"right",children:n(re,{children:[e(ye,{pointerEvents:"none",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"app-search-icon",enableBackground:"new 0 0 487.95 487.95",version:"1.1",viewBox:"0 0 487.95 487.95",xmlSpace:"preserve",children:e("path",{d:"M481.8 453l-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z"})})}),e(b,{width:"100%",variant:"solid",background:"gray.200",fontWeight:"bold",_placeholder:{color:"gray"},placeholder:"Quick search",onChange:p=>h(p.target.value)})]})})]}),e(E0,{setSelectedPassword:a,tagState:u,showModal:t,setShowModal:r,passwordSelected:o})]})},b0=O(v0)(y0),q=u=>({type:Re,payload:{hasAccess:u}});function me(){const u=v(),o=G(h=>h),[t,r]=c.exports.useState(!1),a=h=>h!==o.userPassword.password?(r(!0),!1):(u(q(!0)),!0),s=()=>u(q(!1)),d=h=>{console.log(h),u(ce(h)),u(q(!0))};return{userHasAccess:o.user.hasAccess,userPassword:o.userPassword.password,handleAccess:a,generatePassword:d,revokeAccess:s,passwordWrong:t,setPasswordWrong:r}}const ge=({onAccept:u,onCloseModal:o,value:t,setValue:r,title:a,description:s,isClosable:d=!0,inputType:h="password",inputWrong:g=!1,inputWrongText:p})=>{const l=c.exports.useRef(null),B=x=>{if(x.key==="Enter")return u(t)};return c.exports.useEffect(()=>{setTimeout(()=>{var x;return(x=l==null?void 0:l.current)==null?void 0:x.focus()},0)},[]),n(P,{isOpen:!0,onClose:o,children:[e(S,{}),n(I,{children:[e(H,{}),d&&e(_,{}),n(W,{pb:6,onKeyDown:x=>B(x),children:[e(m,{fontSize:"2xl",fontWeight:"bold",children:a||"\u30A2\u30AF\u30BB\u30B9\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u307E\u3057\u3087\u3046"}),s&&e(m,{textColor:"gray.500",children:s}),e(y,{mt:3,children:e(b,{ref:l,style:g?{borderWidth:2,borderColor:"red"}:{},type:h,focusBorderColor:g?"none":"purple.600",onChange:x=>r(x.target.value),placeholder:"abcde12345"})}),g&&p&&e(m,{color:"red.600",fontSize:"xs",mt:2,children:p})]}),n(z,{children:[e(w,{disabled:t.length<1,onClick:()=>u(t),color:"white",background:"purple.600",mr:3,children:"\u7D9A\u3051\u3066"}),d&&e(w,{onClick:o,children:"\u30AD\u30E3\u30F3\u30BB\u30EB"})]})]})]})};function D0({onClose:u,onAccept:o,title:t,description:r}){return n(P,{blockScrollOnMount:!1,isOpen:!0,onClose:()=>u(),children:[e(S,{}),n(I,{children:[e(H,{children:t||"Modal body"}),e(_,{}),e(W,{children:e(m,{mb:"1rem",children:r||""})}),n(z,{children:[e(w,{colorScheme:"red",mr:3,onClick:()=>u(),children:"\u9589\u3058\u308B"}),e(w,{variant:"ghost",onClick:()=>o(),children:"\u78BA\u8A8D"})]})]})]})}function k0(){const{resetApp:u}=ie(),[o,t]=c.exports.useState(!1);return n(i,{p:5,mx:"auto",height:"100vh",maxWidth:"md",display:"flex",justifyContent:"center",flexDirection:"column",children:[e(m,{fontWeight:"bold",fontSize:"xl",children:"\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093"}),e(m,{textColor:"gray.700",mb:5,fontSize:"sm",children:"\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u518D\u8A66\u884C\u3059\u308B\u304B\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5FA9\u5143\u3057\u3066\u304F\u3060\u3055\u3044"}),e(w,{colorScheme:"red",onClick:()=>t(!0),children:"\u5FA9\u5143"}),o&&e(D0,{title:"\u5FA9\u5143\u3059\u308B",description:"\u3053\u306E\u30C7\u30D0\u30A4\u30B9\u304B\u3089\u60C5\u5831\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F\u3053\u306E\u64CD\u4F5C\u306F\u53D6\u308A\u6D88\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093",onAccept:u,onClose:()=>t(!1)})]})}const M0=()=>{const[u,o]=c.exports.useState(!1),[t,r]=c.exports.useState(!1),[a,s]=c.exports.useState(!1),[d,h]=c.exports.useState(""),{passwordWrong:g,setPasswordWrong:p,userPassword:l,userHasAccess:B,handleAccess:x,generatePassword:E}=me(),A=()=>{if(!B)return x(d)};return c.exports.useEffect(()=>p(!1),[d]),c.exports.useEffect(()=>{l?r(!0):o(!0)},[]),n(U,{children:[u&&e(ge,{isClosable:!1,title:"\u30A2\u30AF\u30BB\u30B9\u30B3\u30FC\u30C9\u306E\u4F5C\u6210",description:"\u3088\u3046\u3053\u305D\u3001\u307E\u305A\u306F\u30A2\u30AF\u30BB\u30B9\u30B3\u30FC\u30C9\u306E\u4F5C\u6210\u304C\u5FC5\u8981\u3067\u3059",onAccept:E,onCloseModal:()=>!1,value:d,inputType:"text",setValue:h}),t&&e(ge,{title:"\u30ED\u30B0\u30A4\u30F3",description:"\u30A2\u30AF\u30BB\u30B9\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3001\u6B21\u3078\u9032\u3080",onAccept:A,onCloseModal:()=>(r(!1),s(!0)),value:d,inputWrong:g,inputWrongText:"\u30A2\u30AF\u30BB\u30B9\u30B3\u30FC\u30C9\u304C\u9593\u9055\u3063\u3066\u3044\u307E\u3059\u3002\u3082\u3046\u4E00\u5EA6\u8A66\u3057\u3066\u304F\u3060\u3055\u3044",setValue:h}),a&&e(k0,{})]})};function T0({NOTIFICATIONS_STATE:u,USER_STATE:o}){const{renderToast:t}=m0(),{revokeAccess:r}=me(),[a,s]=c.exports.useState(null),[d,h]=c.exports.useState(!1);return c.exports.useEffect(()=>{u.notifications&&t(u.notifications)},[u]),c.exports.useEffect(()=>()=>{r()},[]),e(U,{children:o.hasAccess?e(p0,{children:n(U,{children:[e(b0,{setSelectedPassword:s,showModal:d,setShowModal:h,selectedPassword:a}),e(x0,{setShowModal:h,setSelectedPassword:s}),e(i,{mt:10,mb:6,display:"flex",justifyContent:"center",alignItem:"center",children:e(m,{fontWeight:"medium",children:"AI01-2 \u5352\u696D\u5236\u4F5C 01\u30B0\u30EB\u30FC\u30D7. \xA9 2022 "})})]})}):e(M0,{})})}const S0=u=>({NOTIFICATIONS_STATE:u.notifications,USER_STATE:u.user});var N0=O(S0)(T0);export{N0 as default};