import{r as x,o as i,c,a as t,n as u,F as f,b as g,t as d,d as m,e as v}from"./vendor.74cfa9de.js";const w=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};w();var b="/ieee-kou/assets/bg.be5f4378.png",y="/ieee-kou/assets/logo.04739323.png",p=(r,s)=>{const a=r.__vccOpts||r;for(const[n,e]of s)a[n]=e;return a};const k={setup(){let r=x(!1);return{showMenu:r,toggleNav:()=>r.value=!r.value}},data(){return{brand:{text1:"IEEE",text2:"KO\xDC"},menuItems:[{name:"Anasayfa",url:"/#",hasDropdown:!1},{name:"Komiteler",url:"/#komiteler",hasDropdown:!1},{name:"Teknik",url:"/#teknik",hasDropdown:!1},{name:"\u0130leti\u015Fim",url:"/#iletisim",hasDropdown:!1},{name:"SSS",url:"/#sss",hasDropdown:!1}],selectedMenuItem:{name:"Anasayfa",url:"/#",hasDropdown:!1}}}},M={class:"h-24 absolute flex items-center w-full px-0 md:px-10 z-3"},L={class:"container max-w-8xl flex flex-wrap justify-between items-center mx-auto"},N=t("a",{href:"#",class:"flex items-center"},[t("img",{class:"ml-5 md:ml-0 h-5 md:h-10",src:y,alt:""})],-1),O=t("span",{class:"sr-only"},"Open main menu",-1),T=t("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"},null,-1),$=[T],z=t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),E=[z],I={class:"flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"},B=["onClick","href"];function D(r,s,a,n,e,o){return i(),c("nav",M,[t("div",L,[N,t("button",{onClick:s[0]||(s[0]=(...l)=>n.toggleNav&&n.toggleNav(...l)),type:"button",class:"inline-flex mr-10 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-black","aria-controls":"mobile-menu-2","aria-expanded":"false"},[O,(i(),c("svg",{class:u([n.showMenu?"hidden":"block","w-6 h-6"]),fill:"#000000",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},$,2)),(i(),c("svg",{class:u([n.showMenu?"block":"hidden","w-6 h-6"]),fill:"#000000",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},E,2))]),t("div",{class:u(["w-full md:block md:w-auto md:mr-10 md:bg-transparent",(n.showMenu,"hidden")])},[t("ul",I,[(i(!0),c(f,null,g(e.menuItems,l=>(i(),c("li",{key:l.name},[t("a",{onClick:Y=>e.selectedMenuItem=l,href:l.url,class:u(["block text-lg py-2 pr-4 pl-3 md:bg-transparent md:p-0",e.selectedMenuItem.name==l.name?"md:text-[#19659f] text-white bg-[#19659f]":"text-gray-900"]),"aria-current":"page"},d(l.name),11,B)]))),128))])],2)])])}var _=p(k,[["render",D]]);const S={data(){return{welcomeText:"Hi! Welcome to IEEE KO\xDC",bigTextTop:"We Are Reaching to",bigTextBottom:"The Stars",explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent molestie, orci sed condimentum malesuada, eros."}}},A={class:"z-2 w-full lg:w-3/5 max-w-3xl absolute top-24 bottom-0 flex items-center pl-12 pr-12 lg:pl-40 lg:pr-0"},j={class:"h-auto w-auto"},H={class:"text-[#19659f] text-2xl font-bold mb-5"},K={class:"text-gray-900 text-5xl font-black"},C={class:"text-gray-900 text-7xl font-black tracking-widest mb-5"},F={class:"text-gray-900 text-2xl font-sm md:font-lg mb-10"},P=t("div",{class:"w-full"},[t("div",{class:"cursor-pointer select-none float-left py-2 w-32 md:w-44 flex justify-center bg-[#19659f] hover:bg-[#0c3e64] rounded-lg text-2xl text-white font-bold border-4 border-[#19659f] hover:border-[#0c3e64] transition-all duration-300"},"Giri\u015F Yap"),t("div",{class:"cursor-pointer select-none float-left ml-5 py-2 w-32 md:w-44 flex justify-center rounded-lg text-2xl text-[#19659f] hover:bg-[#19659f] hover:text-white font-bold border-4 border-[#19659f] transition-all duration-300"},"Kay\u0131t Ol")],-1);function V(r,s,a,n,e,o){return i(),c("div",A,[t("div",j,[t("div",H,d(e.welcomeText),1),t("div",K,d(e.bigTextTop),1),t("div",C,d(e.bigTextBottom),1),t("div",F,d(e.explanation),1),P])])}var h=p(S,[["render",V]]);const W=t("div",{class:"z-1 w-full h-full absolute flex justify-end"},[t("img",{class:"h-[00px] md:h-[700px] lg:h-[900px]",src:b,alt:""})],-1),q={components:{Navbar:_,HeroSection:h}},G=Object.assign(q,{setup(r){return(s,a)=>(i(),c(f,null,[W,m(_),m(h)],64))}});const R=v(G);R.mount("#app");