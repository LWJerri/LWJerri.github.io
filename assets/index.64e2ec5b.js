import{S as H,i as J,s as W,e as p,a as n,n as Y,b as x,c as r,d as G,f as j,t as R,g as h,H as K,h as Z,j as A,R as z,k as D,m as O,l as E,o as F,p as I,q as U}from"./vendor.dd44dc06.js";const X=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function i(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(t){if(t.ep)return;t.ep=!0;const l=i(t);fetch(t.href,l)}};X();var ee="/assets/logo.54484dbd.png";const te=[{link:"https://dsc.bio/432085389948485633",icon:"fab fa-discord fa-5x"},{link:"https://t.me/LWJerri",icon:"fab fa-telegram-plane fa-5x"},{link:"https://vk.com/LWJerri",icon:"fab fa-vk fa-5x"},{link:"https://github.com/LWJerri",icon:"fab fa-github fa-5x"}],ie=[{name:"Pauperial",description:"Simple web application for creating short links and QR-codes from long links.",link:"https://github.com/LWJerri/Pauperial",tools:["Yarn","Git","Visual Studio Code","TypeScript","Prettier","Express","TypeORM","PostgreSQL","Svelte","Vite","Heroku"]},{name:"lwjerri.github.io",description:"My personal website with information about me and my projects.",link:"https://lwjerri.js.org",tools:["Yarn","TypeScript","Visual Studio Code","Prettier","Vite","Svelte","Git","GitHub Pages"]},{name:"ManageGift Web",description:"Website for discord ManageGift bot based on PHP. This site has a developer list, bot commands, and basic bot information.",link:"https://managegift.ga/",tools:["Git","Visual Studio Code","PHP","Prettier","JavaScript","HTML5","CSS3"]},{name:"DartaCluster",description:"Simple application for parse images from VK, Instagram, and Reddit with saving images to the database.",link:"",tools:["Git","Visual Studio Code","JavaScript","Prettier","PostgreSQL","Heroku","Express"]},{name:"VilStats",description:"Windows application for manage people's stats. This app is made for enterprises and stores personal information in one place.",link:"",tools:["Git","Visual Studio Code","MongoDB","Prettier","Express","HTML5","CSS3","JavaScript"]},{name:"JAPI",description:"My personal API for getting information about users from Discord, Twitch, and Instagram.",link:"https://japi.ohori.me",tools:["Git","Visual Studio Code","TypeScript","Google Cloud","Docker","Express","Prettier"]},{name:"Riddea",description:"Telegram bot for view SFW & NSFW anime images or GIFs with feature upload yourself images to bot database.",link:"https://github.com/Riddea/Riddea",tools:["Git","Visual Studio Code","Docker","Yarn","TypeScript","ESLint","Prettier","AWS S3","Fastify","Nest.js","TypeORM","PostgreSQL","Telegraf"]},{name:"Riddea web",description:"Website for Riddea telegram bot based on Vite. Also, this site can display user collections and images of the collection.",link:"https://riddea.ml/",tools:["Git","Visual Studio Code","TypeScript","Vite","Svelte","Prettier"]},{name:"FreeBot",description:"Simple public discord bot for moderate chat and log when a user joins/leaves with a welcome message and role given.",link:"https://github.com/LWJerri/FreeBot",tools:["Git","Visual Studio Code","Heroku","TypeScript","Prettier"]},{name:"Openner",description:"The multilanguage bot with displaying how many users are in the voice channel now, sending announce messages when streamer start a stream on Twitch, log delete & edited messages, role add & remove, and many other features.",link:"",tools:["Git","Visual Studio Code","Heroku","TypeORM","JavaScript","PostgreSQL","Prettier"]},{name:"JeelangaHelper",description:"Discord bot for moderate chat and create a ticket when user clicking on reaction.",link:"https://github.com/Jeelanga/JeelangaHelper",tools:["Git","Visual Studio Code","TypeScript","Prettier"]},{name:"Modestal",description:"Discord bot to help administrators manage the server, create user voice channels, moderate chat, level system, and more.",link:"",tools:["Git","Visual Studio Code","TypeScript","Express","PostgreSQL","TypeORM","Prettier","Docker"]},{name:"Lequille",description:"Discord bot for creating voice rooms, display user avatar, custom level system, etc.",link:"",tools:["Git","Visual Studio Code","Docker","Grammy","PostgreSQL","TypeORM","Prettier"]}];var M={contacts:te,projects:ie};function Q(c,e,i){const o=c.slice();return o[0]=e[i],o}function B(c,e,i){const o=c.slice();return o[3]=e[i],o}function N(c){let e,i,o,t;return{c(){e=p("a"),i=p("i"),n(i,"class",o=""+(Y(c[3].icon)+" svelte-c50i0h")),n(e,"id","link"),n(e,"href",t=c[3].link),n(e,"target","_blank"),n(e,"class","svelte-c50i0h")},m(l,m){x(l,e,m),r(e,i)},p:G,d(l){l&&j(e)}}}function q(c){var _;let e,i,o=c[0].name+"",t,l,m,S=((_=c[0]).link&&(_.link=`<a href=${c[0].link} target="_blank" style="color: #22B8CF; font-size: 1.875rem;"><i class="fas fa-link"></i></a>`))+"",T,f,k,g=c[0].description+"",y,$,P,v=c[0].tools.join(", ")+"",w,L;return{c(){e=p("div"),i=p("h1"),t=R(o),l=h(),m=new K,T=h(),f=p("article"),k=p("p"),y=R(g),$=h(),P=p("h3"),w=R(v),L=h(),m.a=null,n(i,"class","svelte-c50i0h"),n(k,"class","svelte-c50i0h"),n(P,"class","svelte-c50i0h"),n(f,"class","svelte-c50i0h"),n(e,"class","project svelte-c50i0h")},m(d,b){x(d,e,b),r(e,i),r(i,t),r(i,l),m.m(S,i),r(e,T),r(e,f),r(f,k),r(k,y),r(f,$),r(f,P),r(P,w),r(e,L)},p:G,d(d){d&&j(e)}}}function oe(c){let e,i,o,t,l,m,S,T,f,k,g,y,$,P,v,w,L,_=M.contacts,d=[];for(let a=0;a<_.length;a+=1)d[a]=N(B(c,_,a));let b=M.projects,u=[];for(let a=0;a<b.length;a+=1)u[a]=q(Q(c,b,a));return{c(){e=h(),i=p("div"),o=p("div"),t=p("img"),m=h(),S=p("h1"),S.textContent="Andrey Zontov",T=h(),f=p("p"),f.textContent="Backend Node.js developer",k=h(),g=p("div"),y=p("h1"),y.textContent="Contacts",$=h();for(let a=0;a<d.length;a+=1)d[a].c();P=h(),v=p("div"),w=p("h1"),w.textContent="Projects",L=h();for(let a=0;a<u.length;a+=1)u[a].c();document.title="Andrey Zontov \u2022 Main",Z(t.src,l=ee)||n(t,"src",l),n(t,"alt","AVATAR"),n(t,"class","svelte-c50i0h"),n(S,"id","name"),n(S,"class","svelte-c50i0h"),n(f,"id","about"),n(f,"class","svelte-c50i0h"),n(o,"class","box svelte-c50i0h"),n(y,"class","title svelte-c50i0h"),n(g,"class","box svelte-c50i0h"),n(w,"class","title svelte-c50i0h"),n(v,"class","box svelte-c50i0h"),n(i,"class","main svelte-c50i0h")},m(a,C){x(a,e,C),x(a,i,C),r(i,o),r(o,t),r(o,m),r(o,S),r(o,T),r(o,f),r(i,k),r(i,g),r(g,y),r(g,$);for(let s=0;s<d.length;s+=1)d[s].m(g,null);r(i,P),r(i,v),r(v,w),r(v,L);for(let s=0;s<u.length;s+=1)u[s].m(v,null)},p(a,[C]){if(C&0){_=M.contacts;let s;for(s=0;s<_.length;s+=1){const V=B(a,_,s);d[s]?d[s].p(V,C):(d[s]=N(V),d[s].c(),d[s].m(g,null))}for(;s<d.length;s+=1)d[s].d(1);d.length=_.length}if(C&0){b=M.projects;let s;for(s=0;s<b.length;s+=1){const V=Q(a,b,s);u[s]?u[s].p(V,C):(u[s]=q(V),u[s].c(),u[s].m(v,null))}for(;s<u.length;s+=1)u[s].d(1);u.length=b.length}},i:G,o:G,d(a){a&&j(e),a&&j(i),A(d,a),A(u,a)}}}class se extends H{constructor(e){super();J(this,e,null,oe,W,{})}}function ae(c){let e,i,o;return i=new U({props:{component:se}}),{c(){e=p("main"),D(i.$$.fragment)},m(t,l){x(t,e,l),O(i,e,null),o=!0},p:G,i(t){o||(E(i.$$.fragment,t),o=!0)},o(t){F(i.$$.fragment,t),o=!1},d(t){t&&j(e),I(i)}}}function le(c){let e,i;return e=new z({props:{$$slots:{default:[ae]},$$scope:{ctx:c}}}),{c(){D(e.$$.fragment)},m(o,t){O(e,o,t),i=!0},p(o,[t]){const l={};t&1&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){i||(E(e.$$.fragment,o),i=!0)},o(o){F(e.$$.fragment,o),i=!1},d(o){I(e,o)}}}class re extends H{constructor(e){super();J(this,e,null,le,W,{})}}new re({target:document.getElementById("app")});
