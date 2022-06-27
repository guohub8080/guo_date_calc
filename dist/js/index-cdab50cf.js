import{c as O,d as f,w as T,r as h,a as I,b as g,o as A,e as S,f as o,t as n,n as G,u as i,g as u,h as R,i as z,j as q,k as Y,l as H,m as y,p as J,q as D,F as Q,s as X,v as Z}from"./index-addeb5a8.js";var j={exports:{}};(function(t,s){(function(e,a){t.exports=a()})(O,function(){return function(e,a){a.prototype.isoWeeksInYear=function(){var r=this.isLeapYear(),d=this.endOf("y").day();return d===4||r&&d===5?53:52}}})})(j);var ee=j.exports,W={exports:{}};(function(t,s){(function(e,a){t.exports=a()})(O,function(){return function(e,a){a.prototype.isLeapYear=function(){return this.$y%4==0&&this.$y%100!=0||this.$y%400==0}}})})(W);var te=W.exports,L={exports:{}};(function(t,s){(function(e,a){t.exports=a()})(O,function(){return function(e,a,r){a.prototype.dayOfYear=function(d){var _=Math.round((r(this).startOf("day")-r(this).startOf("year"))/864e5)+1;return d==null?_:this.add(d-_,"day")}}})})(L);var se=L.exports;f.extend(T);f.extend(ee);f.extend(te);f.extend(se);f.locale("zh-cn");const l=h(f()),N=f(),C=()=>{l.value=h(f()).value},oe=(t,s)=>{try{const e=f(t.format("YYYY-MM-DD")),a=f(s.format("YYYY-MM-DD")),r=e.diff(a,"day")*-1;return isNaN(r)?"#":r}catch{return"#"}};var U=(t,s)=>{const e=t.__vccOpts||t;for(const[a,r]of s)e[a]=r;return e};const ae={class:"title"},ne={class:"year"},ue={class:"month"},re={class:"day"},de={class:"week info1"},ie={class:"info1"},ce=u(" \u5F53\u5E74\u7B2C "),le=u(" / "),_e={class:"info1"},pe=u(" \u5F53\u5E74\u7B2C "),fe=u(" \u5929 "),ve={class:"info1"},ye=u(" \u4E8E\u5F53\u6708 "),he={class:"info1"},me=u(" \u4E8E\u5F53\u5E74 "),Ye=I({props:{date:null},emits:["reset_today"],setup(t,{emit:s}){const e=t,a=()=>{s("reset_today")},r=()=>e.date.format("YYYYMMDD")===N.format("YYYYMMDD")?["is_today"]:["is_today","hide"],d=g(()=>["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u65E5"][e.date.day()]),_=m=>Math.round(m*1e3)/10+"%",c=g(()=>e.date.startOf("day").isoWeeksInYear()>1?e.date.isoWeeksInYear()+1:e.date.isoWeeksInYear()),p=h(!1),E=g(()=>e.date.startOf("week").isoWeeksInYear()>1?(p.value=!0,e.date.dayOfYear()<7&&e.date.week()>2?1:e.date.week()+1):e.date.week());return(m,b)=>(A(),S("div",{class:"day-view",onDblclick:a},[o("div",ae,[o("div",ne,n(e.date.format("YYYY"))+" \xB7 "+n(e.date.isLeapYear()?"\u95F0\u5E74":"\u5E73\u5E74"),1),o("div",ue,n(e.date.format("M")),1),o("div",re,n(e.date.format("D")),1),o("span",{class:G(r())},"\u4ECA",2)]),o("div",de,"\u661F\u671F"+n(i(d)),1),o("div",ie,[ce,o("span",null,n(i(E)),1),le,o("span",null,n(i(c)),1),u(" \u5468 "+n(p.value?"(\u542B\u9996\u5468)":""),1)]),o("div",_e,[pe,o("span",null,n(e.date.dayOfYear()),1),fe]),o("div",ve,[ye,o("span",null,n(_(e.date.date()/e.date.daysInMonth())),1)]),o("div",he,[me,o("span",null,n(_(e.date.dayOfYear()/e.date.endOf("year").dayOfYear())),1)])],32))}});var we=U(Ye,[["__scopeId","data-v-187d2c52"]]);function Ee(t){return R()?(z(t),!0):!1}var B;const w=typeof window!="undefined",ge=t=>typeof t=="string",F=()=>{};w&&((B=window==null?void 0:window.navigator)==null?void 0:B.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function De(t){var s;const e=i(t);return(s=e==null?void 0:e.$el)!=null?s:e}const V=w?window:void 0;w&&window.document;w&&window.navigator;w&&window.location;function Fe(...t){let s,e,a,r;if(ge(t[0])?([e,a,r]=t,s=V):[s,e,a,r]=t,!s)return F;let d=F;const _=q(()=>De(s),p=>{d(),p&&(p.addEventListener(e,a,r),d=()=>{p.removeEventListener(e,a,r),d=F})},{immediate:!0,flush:"post"}),c=()=>{_(),d()};return Ee(c),c}var $e=Object.defineProperty,ke=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,P=(t,s,e)=>s in t?$e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,Ce=(t,s)=>{for(var e in s||(s={}))xe.call(s,e)&&P(t,e,s[e]);if(M)for(var e of M(s))be.call(s,e)&&P(t,e,s[e]);return t},Be=(t,s)=>ke(t,Oe(s));const Me=t=>typeof t=="function"?t:typeof t=="string"?s=>s.key===t:Array.isArray(t)?s=>t.includes(s.key):t?()=>!0:()=>!1;function Pe(t,s,e={}){const{target:a=V,eventName:r="keydown",passive:d=!1}=e,_=Me(t);return Fe(a,r,p=>{_(p)&&s(p)},d)}function Ie(t,s,e={}){return Pe(t,s,Be(Ce({},e),{eventName:"keyup"}))}const $=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},k="__vueuse_ssr_handlers__";$[k]=$[k]||{};$[k];const x=t=>(X("data-v-74a10352"),t=t(),Z(),t),Ae={class:"head"},Se={class:"date-calc"},je={class:"add-day"},We={class:"show-date"},Le=u(" \u5929\u540E\u662F "),Ne={class:"show-date"},Ue={class:"add-week"},Ve={class:"show-date"},Ke=u(" \u5468\u540E\u662F "),Te={class:"show-date"},Ge={class:"reverse-calc"},Re={class:"show-date"},ze=u(" \u4E4B\u95F4\u76F8\u5DEE "),qe={class:"reverse-day"},He=u(" \u5929 "),Je={style:{"margin-top":"1rem"}},Qe=x(()=>o("div",null,[u(" \u53CC\u51FB\u53F3\u4FA7\u65B9\u5F62\u6846\u5185\u6216\u6309\u4E0B "),o("span",{style:{"background-color":"#ffc568",padding:"0.1rem 0.3rem","border-radius":"0.2rem","font-weight":"700"}},"T"),u(" \u952E\u4EE5\u91CD\u7F6E\u65E5\u671F\u3002 ")],-1)),Xe=x(()=>o("div",null," \u8054\u7CFB\u4F5C\u8005\uFF1Aguo2018 # 88.com \uFF08\u8BF7\u5C06#\u66FF\u6362\u4E3A@\uFF09 ",-1)),Ze=x(()=>o("div",null,[u(" \u4F5C\u8005\u5176\u4ED6\u4F5C\u54C1\uFF1A"),o("br"),u(" \u4E50\u7406\u8BA1\u7B97\u5668\uFF1A"),o("a",{href:"https://guohub8080.github.io/guo_musickit/#/music/readme"},"GitHub Pages"),u(" / "),o("a",{href:"https://guohub8080.gitee.io/guo_musickit/#/music/readme"},"Gitee Pages")],-1)),et=u("\u7528\u6CD5\u8BF4\u660E"),tt=I({setup(t){const s=h(1),e=h(1),a=h(N),r=g(()=>oe(l.value,a.value)),d=_=>["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u65E5"][_.day()];return Ie("t",_=>{_.preventDefault(),C()}),(_,c)=>{const p=Y("a-calendar"),E=Y("a-input-number"),m=Y("a-date-picker"),b=Y("a-button"),K=Y("a-popover");return A(),S(Q,null,[o("h1",{onClick:c[0]||(c[0]=v=>i(H).replace("/"))},"\u65E5\u671F\u8BA1\u7B97\u5668"),o("div",Ae,[y(p,{value:i(l),"onUpdate:value":c[1]||(c[1]=v=>J(l)?l.value=v:null),fullscreen:!1,class:"today-choice"},null,8,["value"]),y(we,{date:i(l),onReset_today:i(C)},null,8,["date","onReset_today"])]),o("div",Se,[o("div",je,[o("span",We,n(i(l).format("YYYY\u5E74M\u6708D\u65E5")),1),u(" \u5468"+n(d(i(l)))+" \u8D77\u7B97 ",1),y(E,{value:s.value,"onUpdate:value":c[2]||(c[2]=v=>s.value=v),class:"input-num"},null,8,["value"]),Le,o("span",Ne,n(i(l).add(s.value,"day").format("YYYY\u5E74M\u6708D\u65E5")),1),u(" \u5468"+n(d(i(l).add(s.value,"day"))),1)]),o("div",Ue,[o("span",Ve,n(i(l).format("YYYY\u5E74M\u6708D\u65E5")),1),u(" \u5468"+n(d(i(l)))+" \u8D77\u7B97 ",1),y(E,{value:e.value,"onUpdate:value":c[3]||(c[3]=v=>e.value=v),class:"input-num"},null,8,["value"]),Ke,o("span",Te,n(i(l).add(e.value,"week").format("YYYY\u5E74M\u6708D\u65E5")),1),u(" \u5468"+n(d(i(l).add(s.value,"week"))),1)]),o("div",Ge,[o("span",Re,n(i(l).format("YYYY\u5E74M\u6708D\u65E5")),1),u(" \u5468"+n(d(i(l)))+" \u548C ",1),y(m,{value:a.value,"onUpdate:value":c[4]||(c[4]=v=>a.value=v)},null,8,["value"]),ze,o("span",qe,n(i(r)),1),He])]),o("div",Je,[y(K,{title:"\u7528\u6CD5\u8BF4\u660E"},{content:D(()=>[Qe,Xe,Ze]),default:D(()=>[y(b,{type:"link"},{default:D(()=>[et]),_:1})]),_:1})])],64)}}});var ot=U(tt,[["__scopeId","data-v-74a10352"]]);export{ot as default};
