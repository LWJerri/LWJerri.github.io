import{S as W,i as H,s as A,e as m,a as p,n as Z,b as T,c,d as $,f as j,t as M,g as b,h as z,j as J,k as U,H as X,R as ee,l as D,m as O,o as E,p as F,q as I,r as te}from"./vendor.75dc0f38.js";const oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};oe();var ie="/assets/logo.54484dbd.png";const se=[{link:"https://dsc.bio/432085389948485633",icon:"fab fa-discord fa-5x"},{link:"https://t.me/LWJerri",icon:"fab fa-telegram-plane fa-5x"},{link:"https://vk.com/LWJerri",icon:"fab fa-vk fa-5x"},{link:"https://github.com/LWJerri",icon:"fab fa-github fa-5x"}],ae=[{name:"steam-workshop-downloader",description:"npmjs.org package for fetching information about steam workshop product with a file download link.",links:["https://github.com/LWJerri/steam-workshop-downloader","https://www.npmjs.com/package/@lwjerri/steam-workshop-downloader"],tools:["Visual Studio Code","TypeScript","Prettier","Git","npmjs.org","tap"]},{name:"Pauperial",description:"Simple web application for creating short links and QR-codes from long links.",links:["https://github.com/LWJerri/Pauperial","https://pauperial.herokuapp.com"],tools:["Yarn","Git","Visual Studio Code","TypeScript","Prettier","Express","TypeORM","PostgreSQL","Svelte","Vite","Heroku"]},{name:"lwjerri.github.io",description:"My personal website with information about me and my projects.",links:["https://lwjerri.js.org","https://github.com/LWJerri/lwjerri.github.io"],tools:["Yarn","TypeScript","Visual Studio Code","Prettier","Vite","Svelte","Git","GitHub Pages"]},{name:"ManageGift Web",description:"Website for discord ManageGift bot based on PHP. This site has a developer list, bot commands, and basic bot information.",links:["https://managegift.ga/"],tools:["Git","Visual Studio Code","PHP","Prettier","JavaScript","HTML5","CSS3"]},{name:"DartaCluster",description:"Simple application for parse images from VK, Instagram, and Reddit with saving images to the database.",links:[],tools:["Git","Visual Studio Code","JavaScript","Prettier","PostgreSQL","Heroku","Express"]},{name:"VilStats",description:"Windows application for manage people's stats. This app is made for enterprises and stores personal information in one place.",links:[],tools:["Git","Visual Studio Code","MongoDB","Prettier","Express","HTML5","CSS3","JavaScript"]},{name:"JAPI",description:"My personal API for getting information about users from Discord, Twitch, and Instagram.",links:["https://japi.ohori.me"],tools:["Git","Visual Studio Code","TypeScript","Google Cloud","Docker","Express","Prettier"]},{name:"Riddea",description:"Telegram bot for view SFW & NSFW anime images or GIFs with feature upload yourself images to bot database.",links:["https://github.com/Riddea/Riddea","https://t.me/riddea_bot"],tools:["Git","Visual Studio Code","Docker","Yarn","TypeScript","ESLint","Prettier","AWS S3","Fastify","Nest.js","TypeORM","PostgreSQL","Telegraf"]},{name:"Riddea web",description:"Website for Riddea telegram bot based on Vite. Also, this site can display user collections and images of the collection.",links:["https://riddea.ml/","https://github.com/Riddea/Riddea"],tools:["Git","Visual Studio Code","TypeScript","Vite","Svelte","Prettier"]},{name:"FreeBot",description:"Simple public discord bot for moderate chat and log when a user joins/leaves with a welcome message and role given.",links:["https://github.com/LWJerri/FreeBot"],tools:["Git","Visual Studio Code","Heroku","TypeScript","Prettier"]},{name:"Openner",description:"The multilanguage bot with displaying how many users are in the voice channel now, sending announce messages when streamer start a stream on Twitch, log delete & edited messages, role add & remove, and many other features.",links:[],tools:["Git","Visual Studio Code","Heroku","TypeORM","JavaScript","PostgreSQL","Prettier"]},{name:"JeelangaHelper",description:"Discord bot for moderate chat and create a ticket when user clicking on reaction.",links:["https://github.com/Jeelanga/JeelangaHelper"],tools:["Git","Visual Studio Code","TypeScript","Prettier"]},{name:"Modestal",description:"Discord bot to help administrators manage the server, create user voice channels, moderate chat, level system, and more.",links:[],tools:["Git","Visual Studio Code","TypeScript","Express","PostgreSQL","TypeORM","Prettier","Docker"]},{name:"Lequille",description:"Discord bot for creating voice rooms, display user avatar, custom level system, etc.",links:[],tools:["Git","Visual Studio Code","Docker","Grammy","PostgreSQL","TypeORM","Prettier"]}];var R={contacts:se,projects:ae};function Q(d,e,i){const o=d.slice();return o[0]=e[i],o}function B(d,e,i){const o=d.slice();return o[3]=e[i],o}function N(d,e,i){const o=d.slice();return o[6]=e[i],o}function q(d){let e,i,o,t;return{c(){e=m("a"),i=m("i"),p(i,"class",o=""+(Z(d[6].icon)+" svelte-17bkxa1")),p(e,"id","link"),p(e,"href",t=d[6].link),p(e,"target","_blank"),p(e,"class","svelte-17bkxa1")},m(n,f){T(n,e,f),c(e,i)},p:$,d(n){n&&j(e)}}}function Y(d){let e,i=`<a href=${d[3]} target="_blank" style="color: #22B8CF; font-size: 1.875rem; margin: 0px 5px 0px 5px"><i class="fas fa-link"></i></a>`,o;return{c(){e=new X,o=z(),e.a=o},m(t,n){e.m(i,t,n),T(t,o,n)},p:$,d(t){t&&j(o),t&&e.d()}}}function K(d){let e,i,o=d[0].name+"",t,n,f,h,x,y=d[0].description+"",L,k,_,w,G=d[0].tools.join(", ")+"",v,P,S=d[0].links,u=[];for(let a=0;a<S.length;a+=1)u[a]=Y(B(d,S,a));return{c(){e=m("div"),i=m("h1"),t=M(o),n=b();for(let a=0;a<u.length;a+=1)u[a].c();f=b(),h=m("article"),x=m("p"),L=M(y),k=b(),_=m("h3"),w=m("i"),v=M(G),P=b(),p(i,"class","svelte-17bkxa1"),p(x,"class","svelte-17bkxa1"),p(w,"class","svelte-17bkxa1"),p(_,"class","svelte-17bkxa1"),p(h,"class","svelte-17bkxa1"),p(e,"class","project svelte-17bkxa1")},m(a,g){T(a,e,g),c(e,i),c(i,t),c(e,n);for(let l=0;l<u.length;l+=1)u[l].m(e,null);c(e,f),c(e,h),c(h,x),c(x,L),c(h,k),c(h,_),c(_,w),c(w,v),c(e,P)},p(a,g){if(g&0){S=a[0].links;let l;for(l=0;l<S.length;l+=1){const r=B(a,S,l);u[l]?u[l].p(r,g):(u[l]=Y(r),u[l].c(),u[l].m(e,f))}for(;l<u.length;l+=1)u[l].d(1);u.length=S.length}},d(a){a&&j(e),J(u,a)}}}function le(d){let e,i,o,t,n,f,h,x,y,L,k,_,w,G,v,P,S,u=R.contacts,a=[];for(let r=0;r<u.length;r+=1)a[r]=q(N(d,u,r));let g=R.projects,l=[];for(let r=0;r<g.length;r+=1)l[r]=K(Q(d,g,r));return{c(){e=b(),i=m("div"),o=m("div"),t=m("img"),f=b(),h=m("h1"),h.textContent="Andrey Zontov",x=b(),y=m("p"),y.textContent="Backend Node.js developer",L=b(),k=m("div"),_=m("h1"),_.textContent="Contacts",w=b();for(let r=0;r<a.length;r+=1)a[r].c();G=b(),v=m("div"),P=m("h1"),P.textContent="Projects",S=b();for(let r=0;r<l.length;r+=1)l[r].c();document.title="Andrey Zontov \u2022 Main",U(t.src,n=ie)||p(t,"src",n),p(t,"alt","AVATAR"),p(t,"class","svelte-17bkxa1"),p(h,"id","name"),p(h,"class","svelte-17bkxa1"),p(y,"id","about"),p(y,"class","svelte-17bkxa1"),p(o,"class","box svelte-17bkxa1"),p(_,"class","title svelte-17bkxa1"),p(k,"class","box svelte-17bkxa1"),p(P,"class","title svelte-17bkxa1"),p(v,"class","box svelte-17bkxa1"),p(i,"class","main svelte-17bkxa1")},m(r,C){T(r,e,C),T(r,i,C),c(i,o),c(o,t),c(o,f),c(o,h),c(o,x),c(o,y),c(i,L),c(i,k),c(k,_),c(k,w);for(let s=0;s<a.length;s+=1)a[s].m(k,null);c(i,G),c(i,v),c(v,P),c(v,S);for(let s=0;s<l.length;s+=1)l[s].m(v,null)},p(r,[C]){if(C&0){u=R.contacts;let s;for(s=0;s<u.length;s+=1){const V=N(r,u,s);a[s]?a[s].p(V,C):(a[s]=q(V),a[s].c(),a[s].m(k,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=u.length}if(C&0){g=R.projects;let s;for(s=0;s<g.length;s+=1){const V=Q(r,g,s);l[s]?l[s].p(V,C):(l[s]=K(V),l[s].c(),l[s].m(v,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=g.length}},i:$,o:$,d(r){r&&j(e),r&&j(i),J(a,r),J(l,r)}}}class re extends W{constructor(e){super();H(this,e,null,le,A,{})}}function ne(d){let e,i,o;return i=new te({props:{component:re}}),{c(){e=m("main"),D(i.$$.fragment)},m(t,n){T(t,e,n),O(i,e,null),o=!0},p:$,i(t){o||(E(i.$$.fragment,t),o=!0)},o(t){F(i.$$.fragment,t),o=!1},d(t){t&&j(e),I(i)}}}function ce(d){let e,i;return e=new ee({props:{$$slots:{default:[ne]},$$scope:{ctx:d}}}),{c(){D(e.$$.fragment)},m(o,t){O(e,o,t),i=!0},p(o,[t]){const n={};t&1&&(n.$$scope={dirty:t,ctx:o}),e.$set(n)},i(o){i||(E(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){I(e,o)}}}class de extends W{constructor(e){super();H(this,e,null,ce,A,{})}}new de({target:document.getElementById("app")});