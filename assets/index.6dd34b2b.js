var g=Object.defineProperty,h=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var p=(s,e,r)=>e in s?g(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,t=(s,e)=>{for(var r in e||(e={}))y.call(e,r)&&p(s,r,e[r]);if(u)for(var r of u(e))m.call(e,r)&&p(s,r,e[r]);return s},a=(s,e)=>h(s,A(e));import{j as i,B as _,T as w,r as l,C as R,d as C,a as D,c as O,p as P,b as I,e as E,f as L,g as b,P as G,h as N}from"./vendor.8fdb890f.js";const v=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};v();const x="modulepreload",f={},k="/",W=function(e,r){return!r||r.length===0?e():Promise.all(r.map(c=>{if(c=`${k}${c}`,c in f)return;f[c]=!0;const o=c.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${n}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":x,o||(d.as="script",d.crossOrigin=""),d.href=c,document.head.appendChild(d),o)return new Promise((T,S)=>{d.addEventListener("load",T),d.addEventListener("error",S)})})).then(()=>e())};function F(){return i(_,{height:"100vh",minHeight:"100vh",width:"100vw",minWidth:"100vw",display:"flex",justifyContent:"center",alignItems:"center",children:i(w,{fontSize:"10xl",color:"gray.600",textAlign:"center",fontWeight:"bold",lineHeight:2,children:"\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D......"})})}const $=l.exports.lazy(()=>W(()=>import("./index.b917cd89.js"),["assets/index.b917cd89.js","assets/vendor.8fdb890f.js"]));function B(){return i(l.exports.Suspense,{fallback:i(F,{}),children:i(R,{children:i($,{})})})}const H="CREATE_PASSWORD",U="EDIT_PASSWORD",j="DELETE_PASSWORD",q="ADD_TAG",z="EDIT_TAG",K="SELECT_TAG",M="DELETE_TAG",V="RESET_SELECTED_TAG",X="CREATE_NOTIFICATION",Y="DELETE_NOTIFICATION",J="UPDATE_SEARCH",Q="TOGGLE_SIDEBAR",Z="CREATE_USER_PASSWORD_ACCESS",ee="EDIT_USER_HAS_ACCESS",se={notifications:[]},re=(s=se,e)=>{switch(e.type){case X:return a(t({},s),{notifications:[...s.notifications,e.payload.notification]});case Y:return a(t({},s),{notifications:s.notifications.filter(r=>r.message!==e.payload.notification.message)});default:return s}},oe={passwords:[]},te=(s=oe,e)=>{switch(e.type){case H:return a(t({},s),{passwords:s.passwords.some(r=>r.token===e.payload.password.token)?s.passwords:[...s.passwords,e.payload.password]});case j:return a(t({},s),{passwords:s.passwords.filter(r=>r.token!==e.payload.password.token)});case U:return a(t({},s),{passwords:s.passwords.map(r=>r.token===e.payload.password.token?a(t({},r),{name:e.payload.password.name,username:e.payload.password.username,email:e.payload.password.email,password:e.payload.password.password,description:e.payload.password.description,url:e.payload.password.url,tagId:e.payload.password.tagId}):r)});default:return s}},ae={search:""},ne=(s=ae,e)=>{switch(e.type){case J:return a(t({},s),{search:e.payload.search});default:return s}},de={showSidebar:!0},ie=(s=de,e)=>{switch(e.type){case Q:return console.log(!s.showSidebar),a(t({},s),{showSidebar:!s.showSidebar});default:return s}},ce={selectedTag:{id:0,name:"All",icon:"all"},tags:[{id:0,name:"\u3059\u3079\u3066\u306E\u30BF\u30B0",icon:"all"}]},le=(s=ce,e)=>{switch(e.type){case q:return a(t({},s),{tags:e.payload.tag.id!==0&&!s.tags.some(r=>r.id===e.payload.tag.id)?[...s.tags,e.payload.tag]:s.tags});case M:return e.payload.tag.id===0?s:a(t({},s),{tags:s.tags.filter(r=>r.id!==e.payload.tag.id)});case V:return a(t({},s),{selectedTag:{id:0,name:"All",icon:"all"}});case K:return a(t({},s),{selectedTag:e.payload.tag});case z:return a(t({},s),{tags:s.tags.map(r=>r.id===e.payload.tag.id?a(t({},r),{name:e.payload.tag.name,icon:e.payload.tag.icon}):r)});default:return s}},ue={hasAccess:!1},pe=(s=ue,e)=>{switch(e.type){case ee:return a(t({},s),{hasAccess:e.payload.hasAccess});default:return s}},Ee={password:null},fe=(s=Ee,e)=>{switch(e.type){case Z:return a(t({},s),{password:e.payload.password});default:return s}},Te={key:"root",storage:C,whitelist:["tags","passwords","userPassword"],transforms:[D.encryptTransform({secretKey:"PASSWORD",onError:function(s){console.log("ERROR ON ENCRYPT THE STATE",s)}})]},Se=O({passwords:te,tags:le,notifications:re,search:ne,sidebar:ie,user:pe,userPassword:fe}),ge=P(Te,Se);function he(){const s=(window==null?void 0:window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||E,e=I(ge,E(s())),r=L(e);return{store:e,persistor:r}}const{store:Ae,persistor:ye}=he();b.exports.render(i(l.exports.StrictMode,{children:i(G,{store:Ae,children:i(N,{loading:i("h1",{children:"Loading"}),persistor:ye,children:i(B,{})})})}),document.getElementById("root"));export{q as C,M as D,z as E,V as R,K as S,Q as T,J as U,X as a,Y as b,j as c,U as d,H as e,Z as f,ee as g};