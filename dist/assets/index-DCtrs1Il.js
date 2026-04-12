const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/initialFX-BXXLwVoT.js","assets/Navbar-O2g_E91p.js","assets/three-CcC86lqL.js","assets/ScrollTrigger-D1XJUMov.js","assets/gsap-B_tqTdAq.js","assets/Navbar-wB6fHtnG.css","assets/index-tYyPbmqd.js","assets/MainContainer-DDEcBq_j.js","assets/MainContainer-J6nb-LrW.css"])))=>i.map(i=>d[i]);
import{r as c,_ as q,j as e,c as Y}from"./three-CcC86lqL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();var D={};function Z(r){if(typeof window>"u")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=r,document.head.appendChild(t),r}Object.defineProperty(D,"__esModule",{value:!0});var s=c;function J(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var h=J(s);Z(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const Q=s.forwardRef(function({style:t={},className:o="",autoFill:i=!1,play:n=!0,pauseOnHover:a=!1,pauseOnClick:f=!1,direction:l="left",speed:x=50,delay:u=0,loop:m=0,gradient:E=!1,gradientColor:N="white",gradientWidth:y=200,onFinish:z,onCycleComplete:B,onMount:P,children:_},k){const[R,G]=s.useState(0),[b,W]=s.useState(0),[M,C]=s.useState(1),[L,X]=s.useState(!1),F=s.useRef(null),v=k||F,j=s.useRef(null),w=s.useCallback(()=>{if(j.current&&v.current){const d=v.current.getBoundingClientRect(),I=j.current.getBoundingClientRect();let g=d.width,p=I.width;(l==="up"||l==="down")&&(g=d.height,p=I.height),C(i&&g&&p&&p<g?Math.ceil(g/p):1),G(g),W(p)}},[i,v,l]);s.useEffect(()=>{if(L&&(w(),j.current&&v.current)){const d=new ResizeObserver(()=>w());return d.observe(v.current),d.observe(j.current),()=>{d&&d.disconnect()}}},[w,v,L]),s.useEffect(()=>{w()},[w,_]),s.useEffect(()=>{X(!0)},[]),s.useEffect(()=>{typeof P=="function"&&P()},[]);const A=s.useMemo(()=>i?b*M/x:b<R?R/x:b/x,[i,R,b,M,x]),V=s.useMemo(()=>Object.assign(Object.assign({},t),{"--pause-on-hover":!n||a?"paused":"running","--pause-on-click":!n||a&&!f||f?"paused":"running","--width":l==="up"||l==="down"?"100vh":"100%","--transform":l==="up"?"rotate(-90deg)":l==="down"?"rotate(90deg)":"none"}),[t,n,a,f,l]),K=s.useMemo(()=>({"--gradient-color":N,"--gradient-width":typeof y=="number"?`${y}px`:y}),[N,y]),O=s.useMemo(()=>({"--play":n?"running":"paused","--direction":l==="left"?"normal":"reverse","--duration":`${A}s`,"--delay":`${u}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":i?"auto":"100%"}),[n,l,A,u,m,i]),S=s.useMemo(()=>({"--transform":l==="up"?"rotate(90deg)":l==="down"?"rotate(-90deg)":"none"}),[l]),$=s.useCallback(d=>[...Array(Number.isFinite(d)&&d>=0?d:0)].map((I,g)=>h.default.createElement(s.Fragment,{key:g},s.Children.map(_,p=>h.default.createElement("div",{style:S,className:"rfm-child"},p)))),[S,_]);return L?h.default.createElement("div",{ref:v,style:V,className:"rfm-marquee-container "+o},E&&h.default.createElement("div",{style:K,className:"rfm-overlay"}),h.default.createElement("div",{className:"rfm-marquee",style:O,onAnimationIteration:B,onAnimationEnd:z},h.default.createElement("div",{className:"rfm-initial-child-container",ref:j},s.Children.map(_,d=>h.default.createElement("div",{style:S,className:"rfm-child"},d))),$(M-1)),h.default.createElement("div",{className:"rfm-marquee",style:O},$(M))):null});var U=D.default=Q;const H=({percent:r})=>{const{setIsLoading:t}=te(),[o,i]=c.useState(!1),[n,a]=c.useState(!1),[f,l]=c.useState(!1);r>=100&&setTimeout(()=>{i(!0),setTimeout(()=>{a(!0)},1e3)},600),c.useEffect(()=>{q(()=>import("./initialFX-BXXLwVoT.js"),__vite__mapDeps([0,1,2,3,4,5])).then(u=>{n&&(l(!0),setTimeout(()=>{u.initialFX&&u.initialFX(),t(!1)},900))})},[n]);function x(u){const{currentTarget:m}=u,E=m.getBoundingClientRect(),N=u.clientX-E.left,y=u.clientY-E.top;m.style.setProperty("--mouse-x",`${N}px`),m.style.setProperty("--mouse-y",`${y}px`)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"loading-header",children:[e.jsx("a",{href:"/#",className:"loader-title","data-cursor":"disable",children:"PR"}),e.jsx("div",{className:`loaderGame ${f&&"loader-out"}`,children:e.jsxs("div",{className:"loaderGame-container",children:[e.jsx("div",{className:"loaderGame-in",children:[...Array(27)].map((u,m)=>e.jsx("div",{className:"loaderGame-line"},m))}),e.jsx("div",{className:"loaderGame-ball"})]})})]}),e.jsxs("div",{className:"loading-screen",children:[e.jsx("div",{className:"loading-marquee",children:e.jsxs(U,{children:[e.jsx("span",{children:" Senior Fullstack Engineer"})," ",e.jsx("span",{children:"Dell R&D Bangalore"}),e.jsx("span",{children:" Senior Fullstack Engineer"})," ",e.jsx("span",{children:"Dell R&D Bangalore"})]})}),e.jsxs("div",{className:`loading-wrap ${f&&"loading-clicked"}`,onMouseMove:u=>x(u),children:[e.jsx("div",{className:"loading-hover"}),e.jsxs("div",{className:`loading-button ${o&&"loading-complete"}`,children:[e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-content",children:e.jsxs("div",{className:"loading-content-in",children:["Loading ",e.jsxs("span",{children:[r,"%"]})]})}),e.jsx("div",{className:"loading-box"})]}),e.jsx("div",{className:"loading-content2",children:e.jsx("span",{children:"Welcome"})})]})]})]})]})},ie=r=>{let t=0,o=setInterval(()=>{if(t<=50){let a=Math.round(Math.random()*5);t=t+a,r(t)}else clearInterval(o),o=setInterval(()=>{t=t+Math.round(Math.random()),r(t),t>91&&clearInterval(o)},2e3)},100);function i(){clearInterval(o),r(100)}function n(){return new Promise(a=>{clearInterval(o),o=setInterval(()=>{t<100?(t++,r(t)):(a(t),clearInterval(o))},2)})}return{loaded:n,percent:t,clear:i}},T=c.createContext(null),ee=({children:r})=>{const[t,o]=c.useState(!0),[i,n]=c.useState(0),a={isLoading:t,setIsLoading:o,setLoading:n};return c.useEffect(()=>{},[i]),e.jsxs(T.Provider,{value:a,children:[t&&e.jsx(H,{percent:i}),e.jsx("main",{className:"main-body",children:r})]})},te=()=>{const r=c.useContext(T);if(!r)throw new Error("useLoading must be used within a LoadingProvider");return r},ne=c.lazy(()=>q(()=>import("./index-tYyPbmqd.js"),__vite__mapDeps([6,2,4,3]))),re=c.lazy(()=>q(()=>import("./MainContainer-DDEcBq_j.js"),__vite__mapDeps([7,2,4,1,3,5,8]))),ae=()=>e.jsx(e.Fragment,{children:e.jsx(ee,{children:e.jsx(c.Suspense,{children:e.jsx(re,{children:e.jsx(c.Suspense,{children:e.jsx(ne,{})})})})})});Y(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(ae,{})}));export{ie as s,te as u};
