import{r as p,_ as ae}from"./vendor.2b0f5ddb.js";import{a as u,j as b,F as W}from"./main.7218daf5.js";import{N as se,Y as de,e as le,c as Q,_ as T,M as K,ac as ce,C as ue,a4 as he,aE as fe,a0 as pe,E as me,z as X,n as I,aF as ve,D as ge,R as q,b as U,aG as we,aH as be,aI as Ee,aJ as Ce}from"./Main.f0d41b4f.js";import{a9 as _e,X as $}from"./App.49a633e0.js";import{g as ye}from"./FaucetHintButton.41906611.js";import"./chunk-MTWSNRX5.47c61f42.js";import"./index.c55abaee.js";var Z=p.exports.forwardRef(function(e,t){var n,o=e.prefixCls,r=o===void 0?"rc-switch":o,i=e.className,a=e.checked,d=e.defaultChecked,c=e.disabled,s=e.loadingIcon,f=e.checkedChildren,y=e.unCheckedChildren,S=e.onClick,E=e.onChange,g=e.onKeyDown,l=se(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),h=de(!1,{value:a,defaultValue:d}),x=le(h,2),L=x[0],R=x[1];function w(v,F){var P=L;return c||(P=v,R(P),E==null||E(P,F)),P}function C(v){v.which===K.LEFT?w(!1,v):v.which===K.RIGHT&&w(!0,v),g==null||g(v)}function A(v){var F=w(!L,v);S==null||S(F,v)}var O=Q(r,i,(n={},T(n,"".concat(r,"-checked"),L),T(n,"".concat(r,"-disabled"),c),n));return p.exports.createElement("button",Object.assign({},l,{type:"button",role:"switch","aria-checked":L,disabled:c,className:O,ref:t,onKeyDown:C,onClick:A}),s,p.exports.createElement("span",{className:"".concat(r,"-inner")},L?f:y))});Z.displayName="Switch";var Se=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},H=p.exports.forwardRef(function(e,t){var n,o=e.prefixCls,r=e.size,i=e.loading,a=e.className,d=a===void 0?"":a,c=e.disabled,s=Se(e,["prefixCls","size","loading","className","disabled"]);ce("checked"in s||!("value"in s),"Switch","`value` is not a valid prop, do you mean `checked`?");var f=p.exports.useContext(ue),y=f.getPrefixCls,S=f.direction,E=p.exports.useContext(he),g=y("switch",o),l=p.exports.createElement("div",{className:"".concat(g,"-handle")},i&&p.exports.createElement(pe,{className:"".concat(g,"-loading-icon")})),h=Q((n={},T(n,"".concat(g,"-small"),(r||E)==="small"),T(n,"".concat(g,"-loading"),i),T(n,"".concat(g,"-rtl"),S==="rtl"),n),d);return p.exports.createElement(fe,{insertExtraNode:!0},p.exports.createElement(Z,ae({},s,{prefixCls:g,className:h,disabled:c||i,ref:t,loadingIcon:l})))});H.__ANT_SWITCH=!0;H.displayName="Switch";var ke=H,xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"}}]},name:"dollar-circle",theme:"outlined"},Le=xe,Y=function(t,n){return p.exports.createElement(me,X(X({},t),{},{ref:n,icon:Le}))};Y.displayName="DollarCircleOutlined";var Ie=p.exports.forwardRef(Y);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var k=function(){return k=Object.assign||function(t){for(var n,o=1,r=arguments.length;o<r;o++){n=arguments[o];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},k.apply(this,arguments)};function Ae(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}function M(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(s){try{c(o.next(s))}catch(f){i(f)}}function d(s){try{c(o.throw(s))}catch(f){i(f)}}function c(s){s.done?r(s.value):new n(function(f){f(s.value)}).then(a,d)}c((o=o.apply(e,t||[])).next())})}function G(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,a;return a={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function d(s){return function(f){return c([s,f])}}function c(s){if(o)throw new TypeError("Generator is already executing.");for(;n;)try{if(o=1,r&&(i=s[0]&2?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[s[0]&2,i.value]),s[0]){case 0:case 1:i=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,r=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1],i=s;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(s);break}i[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(f){s=[6,f],r=0}finally{o=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function Oe(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var o=Array(e),r=0,t=0;t<n;t++)for(var i=arguments[t],a=0,d=i.length;a<d;a++,r++)o[r]=i[a];return o}var Re=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Te(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ne(e,t){return t={exports:{}},e(t,t.exports),t.exports}var De=Ne(function(e,t){(function(n,o){o(t)})(Re,function(n){function o(l){if(Array.isArray(l)){for(var h=0,x=Array(l.length);h<l.length;h++)x[h]=l[h];return x}return Array.from(l)}Object.defineProperty(n,"__esModule",{value:!0});var r=!1;if(typeof window!="undefined"){var i={get passive(){r=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var a=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),d=[],c=!1,s=-1,f=void 0,y=void 0,S=function(l){return d.some(function(h){return!(!h.options.allowTouchMove||!h.options.allowTouchMove(l))})},E=function(l){var h=l||window.event;return!!S(h.target)||1<h.touches.length||(h.preventDefault&&h.preventDefault(),!1)},g=function(){setTimeout(function(){y!==void 0&&(document.body.style.paddingRight=y,y=void 0),f!==void 0&&(document.body.style.overflow=f,f=void 0)})};n.disableBodyScroll=function(l,h){if(a){if(!l)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(l&&!d.some(function(w){return w.targetElement===l})){var x={targetElement:l,options:h||{}};d=[].concat(o(d),[x]),l.ontouchstart=function(w){w.targetTouches.length===1&&(s=w.targetTouches[0].clientY)},l.ontouchmove=function(w){var C,A,O,v;w.targetTouches.length===1&&(A=l,v=(C=w).targetTouches[0].clientY-s,!S(C.target)&&(A&&A.scrollTop===0&&0<v||(O=A)&&O.scrollHeight-O.scrollTop<=O.clientHeight&&v<0?E(C):C.stopPropagation()))},c||(document.addEventListener("touchmove",E,r?{passive:!1}:void 0),c=!0)}}else{R=h,setTimeout(function(){if(y===void 0){var w=!!R&&R.reserveScrollBarGap===!0,C=window.innerWidth-document.documentElement.clientWidth;w&&0<C&&(y=document.body.style.paddingRight,document.body.style.paddingRight=C+"px")}f===void 0&&(f=document.body.style.overflow,document.body.style.overflow="hidden")});var L={targetElement:l,options:h||{}};d=[].concat(o(d),[L])}var R},n.clearAllBodyScrollLocks=function(){a?(d.forEach(function(l){l.targetElement.ontouchstart=null,l.targetElement.ontouchmove=null}),c&&(document.removeEventListener("touchmove",E,r?{passive:!1}:void 0),c=!1),d=[],s=-1):(g(),d=[])},n.enableBodyScroll=function(l){if(a){if(!l)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");l.ontouchstart=null,l.ontouchmove=null,d=d.filter(function(h){return h.targetElement!==l}),c&&d.length===0&&(document.removeEventListener("touchmove",E,r?{passive:!1}:void 0),c=!1)}else(d=d.filter(function(h){return h.targetElement!==l})).length||g()}})}),J=Te(De),ee="https://buy.ramp.network/",j;(function(e){e.VERBOSE="VERBOSE",e.DEBUG="DEBUG",e.INFO="INFO",e.WARNING="WARNING",e.ERROR="ERROR",e.CRITICAL="CRITICAL"})(j||(j={}));var m;(function(e){e.WIDGET_CLOSE="WIDGET_CLOSE",e.WIDGET_CONFIG_DONE="WIDGET_CONFIG_DONE",e.WIDGET_CONFIG_FAILED="WIDGET_CONFIG_FAILED",e.PURCHASE_CREATED="PURCHASE_CREATED",e.PURCHASE_SUCCESSFUL="PURCHASE_SUCCESSFUL",e.PURCHASE_FAILED="PURCHASE_FAILED"})(m||(m={}));var _;(function(e){e.WIDGET_CLOSE_REQUEST="WIDGET_CLOSE_REQUEST",e.WIDGET_CLOSE_REQUEST_CANCELLED="WIDGET_CLOSE_REQUEST_CANCELLED",e.WIDGET_CLOSE_REQUEST_CONFIRMED="WIDGET_CLOSE_REQUEST_CONFIRMED"})(_||(_={}));function Pe(){try{return String(crypto.getRandomValues(new Uint32Array(1))[0])}catch{return String(Math.floor(Math.random()*1e7))}}var N=895,D=590,z=320,B=667;function Ue(e){var t=[],n=k({},e);return["desktop","mobile","hosted-desktop","hosted-mobile","hosted-auto","auto","embedded-desktop","embedded-mobile"].includes(e.variant)||(n.variant="desktop",t.push({fieldName:"variant",description:"Invalid value for `variant` config field ",exampleValue:"'desktop'",severity:j.WARNING})),(e.variant==="embedded-desktop"||e.variant==="embedded-mobile")&&Me(e.containerNode,e.variant),["embedded-desktop","embedded-mobile"].includes(n.variant)||delete n.containerNode,Fe(t),n}function Fe(e){!e.length||(console.group("Config errors"),e.forEach(function(t){console.group(t.fieldName),console.log(t.description),console.log("Example expected value: "+t.exampleValue),console.log("Severity: "+t.severity),console.groupEnd()}),console.groupEnd())}function We(){var e=Array.from(Object.values(m)),t=Array.from(Object.values(_));return Oe(e,t).reduce(function(n,o){return n[o]=[],n},{})}function te(e,t,n){return n===void 0&&(n=!1),e[t].filter(function(o){return o.internal===n}).length}function ne(e){var t,n="(min-width: 920px) and (min-height: 630px)",o=(t=e.variant)===null||t===void 0?void 0:t.toLocaleLowerCase();if(o==="mobile"||o==="desktop"||o==="hosted-mobile"||o==="hosted-desktop"||o==="embedded-desktop"||o==="embedded-mobile")return o;var r=window.matchMedia(n).matches;return o==="hosted-auto"?r?"hosted-desktop":"hosted-mobile":r?"desktop":"mobile"}function He(e){return typeof e.blur=="function"}function Me(e,t){if(!document.body)throw new Error("Couldn't find <body> element.");if(!(e instanceof HTMLElement))throw new Error("Container node has to be a proper HTML element.");if(!document.body.contains(e))throw new Error("Container node must be attached to the document.");var n=e.getBoundingClientRect(),o=n.width,r=n.height;if(t==="embedded-desktop"){if(o+1<N)throw new Error("Container node must be at least "+N+"px wide.");if(r+1<D)throw new Error("Container node must be at least "+D+"px tall.")}else if(t==="embedded-mobile"){if(o+1<z)throw new Error("Container node must be at least "+z+"px wide.");if(r+1<B)throw new Error("Container node must be at least "+B+"px tall.")}}function Ge(e,t){var n=je(e instanceof URL?e.href:e),o=t.startsWith("/")?t.substr(1):t;return new URL(n+"/"+o)}function je(e){return e.endsWith("/")?e.slice(0,-1):e}function ze(e,t,n){return M(this,void 0,void 0,function(){var o,r;return G(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,fetch(Ge(e,"/host-api/purchase/"+t+"?secret="+n).href,{headers:{"Content-Type":"application/json"}})];case 1:if(o=i.sent(),!o.ok)throw new Error("Request for purchase #"+t+" failed");return[4,o.json()];case 2:return r=i.sent(),[2,r];case 3:return i.sent(),[2,null];case 4:return[2]}})})}function Be(e){return M(this,void 0,void 0,function(){return G(this,function(t){return[2,new Promise(function(n){return setTimeout(n,e)})]})})}function V(e){var t=new URL(e.url||ee),n=window.location.origin;e.containerNode,e.url;var o=Ae(e,["containerNode","url"]),r=k(k({},o),{hostUrl:n});return Object.entries(r).forEach(function(i){var a=i[0],d=i[1];d&&t.searchParams.append(a,d)}),t.toString()}function Ve(e,t){var n=document.createElement("div");n.classList.add("background-hider"),t&&(n.style.maxWidth=t+"px"),e.appendChild(n)}function Qe(e,t,n){var o=document.querySelector("body"),r=document.createElement("div");r.style.width="100%",r.style.height="100%";var i=r.attachShadow({mode:"open"});i.appendChild(ie(n.variant));var a=oe(e,n.variant),d=qe(a,t);return d.appendChild(a),i.appendChild(d),{body:o,iframe:a,overlay:d,shadow:i,shadowHost:r}}function Ke(e,t,n){var o=document.querySelector("body"),r=document.createElement("div");r.style.width="100%",r.style.height="100%";var i=r.attachShadow({mode:"open"}),a=document.createElement("div");a.classList.add("embedded-container"),i.appendChild(a);var d=document.createElement("div");d.classList.add("loader-container"),d.innerHTML=`
    <svg width="92" height="60" viewBox="0 0 51 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="loader">
      <path d="M16.2232 18.8309L22.282 24.912C22.7953 25.4272 22.7948 26.2647 22.281 26.7792L17.651 31.4158C16.8619 32.1947 15.5719 32.1947 14.7828 31.4158L0.591812 17.4093C-0.197271 16.6305 -0.197271 15.3571 0.591812 14.5783L14.7828 0.584122C15.5719 -0.194707 16.8619 -0.194707 17.651 0.584122L22.281 5.22078C22.7948 5.73535 22.7953 6.57281 22.282 7.08795L16.2232 13.1691C14.645 14.7267 14.645 17.2733 16.2232 18.8309Z" fill="#21BF73"></path>
      <path d="M34.4433 18.8309L28.3845 24.912C27.8712 25.4272 27.8717 26.2647 28.3855 26.7792L33.0155 31.4158C33.8046 32.1947 35.0946 32.1947 35.8837 31.4158L50.0747 17.4093C50.8638 16.6305 50.8638 15.3571 50.0747 14.5783L35.8837 0.584122C35.0946 -0.194707 33.8046 -0.194707 33.0155 0.584122L28.3855 5.22078C27.8717 5.73535 27.8712 6.57281 28.3845 7.08795L34.4433 13.1691C36.0215 14.7267 36.0215 17.2733 34.4433 18.8309Z" fill="#0A6E5C"></path>
      <path d="M17.8128 17.157C17.1737 16.518 17.1737 15.482 17.8128 14.843L24.1765 8.47926C24.8155 7.84025 25.8515 7.84025 26.4905 8.47926L32.8542 14.843C33.4932 15.482 33.4932 16.518 32.8542 17.157L26.4905 23.5207C25.8515 24.1598 24.8155 24.1598 24.1765 23.5207L17.8128 17.157Z" fill="#21BF73"></path>
    </svg>`,a.appendChild(d),i.appendChild(ie(n.variant));var c=oe(e,n.variant,n.containerNode);return a.appendChild(c),{body:o,iframe:c,overlay:null,shadow:i,shadowHost:r}}function Xe(){if(!document.querySelector("[data-ramp-font]")){var e=document.createElement("link");e.setAttribute("href","https://fonts.googleapis.com/css?family=Poppins:200,400,500,600,700&display=swap&subset=latin-ext"),e.setAttribute("rel","stylesheet"),e.setAttribute("data-ramp-font",""),document.head.appendChild(e)}}function oe(e,t,n){var o=document.createElement("iframe");return o.setAttribute("src",e),n?(o.setAttribute("width",t==="desktop"||t==="embedded-desktop"?N.toString():n.getBoundingClientRect().width.toString()),o.setAttribute("height",t==="desktop"||t==="embedded-desktop"?D.toString():n.getBoundingClientRect().height.toString())):(o.setAttribute("width",t==="desktop"||t==="embedded-desktop"?N.toString():window.innerWidth.toString()),o.setAttribute("height",t==="desktop"||t==="embedded-desktop"?D.toString():window.innerHeight.toString())),o.classList.add("iframe"),o}function qe(e,t){var n=document.createElement("div");n.classList.add("overlay");var o=document.createElement("div");return o.classList.add("loader-container"),o.innerHTML=`
    <svg width="92" height="60" viewBox="0 0 51 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="loader">
      <path d="M16.2232 18.8309L22.282 24.912C22.7953 25.4272 22.7948 26.2647 22.281 26.7792L17.651 31.4158C16.8619 32.1947 15.5719 32.1947 14.7828 31.4158L0.591812 17.4093C-0.197271 16.6305 -0.197271 15.3571 0.591812 14.5783L14.7828 0.584122C15.5719 -0.194707 16.8619 -0.194707 17.651 0.584122L22.281 5.22078C22.7948 5.73535 22.7953 6.57281 22.282 7.08795L16.2232 13.1691C14.645 14.7267 14.645 17.2733 16.2232 18.8309Z" fill="#21BF73"></path>
      <path d="M34.4433 18.8309L28.3845 24.912C27.8712 25.4272 27.8717 26.2647 28.3855 26.7792L33.0155 31.4158C33.8046 32.1947 35.0946 32.1947 35.8837 31.4158L50.0747 17.4093C50.8638 16.6305 50.8638 15.3571 50.0747 14.5783L35.8837 0.584122C35.0946 -0.194707 33.8046 -0.194707 33.0155 0.584122L28.3855 5.22078C27.8717 5.73535 27.8712 6.57281 28.3845 7.08795L34.4433 13.1691C36.0215 14.7267 36.0215 17.2733 34.4433 18.8309Z" fill="#0A6E5C"></path>
      <path d="M17.8128 17.157C17.1737 16.518 17.1737 15.482 17.8128 14.843L24.1765 8.47926C24.8155 7.84025 25.8515 7.84025 26.4905 8.47926L32.8542 14.843C33.4932 15.482 33.4932 16.518 32.8542 17.157L26.4905 23.5207C25.8515 24.1598 24.8155 24.1598 24.1765 23.5207L17.8128 17.157Z" fill="#21BF73"></path>
    </svg>`,n.appendChild(o),n.addEventListener("click",function(r){r.target!==e&&!n.querySelectorAll(".close-modal").length&&t({type:_.WIDGET_CLOSE_REQUEST,payload:null,internal:!0})}),n}function $e(e,t){return new URL(e).toString()===new URL(t).toString()}function Ze(e){return e.querySelectorAll(".close-modal").length!==0}function Ye(e){var t=document.createElement("div");t.classList.add("close-modal");var n=document.createElement("div");n.classList.add("close-modal__text"),n.textContent="Are you sure you want to exit Ramp and abandon the transaction?";var o=document.createElement("div");o.classList.add("close-modal__button-container");var r=document.createElement("button");r.setAttribute("type","button"),r.classList.add("close-modal__button"),r.classList.add("close-modal__button--cancel"),r.textContent="Cancel",r.addEventListener("click",function(a){a.stopPropagation(),e({type:_.WIDGET_CLOSE_REQUEST_CANCELLED,payload:null,internal:!0})});var i=document.createElement("button");return i.setAttribute("type","button"),i.classList.add("close-modal__button"),i.classList.add("close-modal__button--exit"),i.textContent="Exit",i.addEventListener("click",function(a){a.stopPropagation(),e({type:_.WIDGET_CLOSE_REQUEST_CONFIRMED,payload:null,internal:!0})}),o.appendChild(r),o.appendChild(i),t.appendChild(n),t.appendChild(o),t}function ie(e){var t=document.createElement("style"),n=e==="mobile"||e==="hosted-mobile"||e==="embedded-mobile",o=e==="embedded-mobile"||e==="embedded-desktop";return t.textContent=`

    .background-hider {
      content: '';
      height: 30vh;
      width: 100vw;
      position: fixed;
      bottom: 0;
      transform: translateY(50%);
      background-color: #f5f8fb;
      z-index: 999;
    }

    .overlay {
      position: fixed;
      z-index: 1000;
      width: 100vw;
      height: `+(n?"100%;":"100vh;")+`
      top: 0;
      left: 0;
      overflow: hidden;
      background-color: rgba(166, 174, 185, 0.7);
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      `+(n?"align-items: flex-start;":"align-items: center;")+`
    }

    .embedded-container {
      z-index: 1000;
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      `+(n?"align-items: flex-start;":"align-items: center;")+`
      min-width: `+(n?z:N)+`px;
      min-height: `+(n?B:D)+`px;
    }

    .loader-container {
      align-self: center;
    }

    .loader {
      transform-origin: center;
      animation: logoAnimation 4s linear infinite;
      width: 100px;
      height: auto;
      align-self: center;
    }

    .loader path:nth-child(3) {
      transform-origin: center;
      position: relative;
    }

    .loader path:nth-child(1) {
      transform-origin: center;
      position: relative;
      animation: box1Animation 4s linear infinite;
      transform: scale(0.4) translateX(6px);
    }

    .loader path:nth-child(2) {
      transform-origin: center;
      position: relative;
      animation: box4Animation 4s linear infinite;
      transform: scale(0.4) translateX(-6px);
    }

    @keyframes logoAnimation {
      10% {
        transform: rotate(180deg);
      }
      30%{
        transform: rotate(360deg);
      }
      70% {
        transform: rotate(360deg);
      }
      90% {
        transform: rotate(520deg);
      }
      100% {
        transform: rotate(720deg);
      }
    }

    @keyframes box1Animation {
      0%, 10% {
        transform: scale(0.4) translateX(6px);
      }
      30%, 70% {
        transform: scale(1) translateX(0);
      }
      90% {
        transform: scale(0.4) translateX(6px);
      }
    }


    @keyframes box4Animation {
      0%, 10% {
        transform: scale(0.4) translateX(-6px);
      }
      30%, 70% {
        transform: scale(1) translateX(0);
      }
      90% {
        transform: scale(0.4) translateX(-6px);
      }
    }

    .iframe {
      border: none;
      user-select: none;
      visibility: hidden;
      position: absolute;
    }

    .iframe.visible {
      visibility: visible;
      `+(!o&&n?`
        width: 100vw;
        height: 100%;
      `:"")+`
    }

    .close-modal {
      font-family: 'Poppins', sans-serif;
      width: 678px;
      height: 276px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      box-shadow: 0px 54px 200px rgba(36, 37, 57, 0.2);
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 35px;
      border-radius: 8px;
      background: #fff;

      box-sizing: border-box;
    }

    .close-modal * {
      box-sizing: border-box;
    }

    .close-modal__text {
      margin: 40px auto 30px;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      text-align: center;

      color: #242539;
    }

    .close-modal__button-container {
      width: 318px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }

    .close-modal__button {
      background: #fff;
      border: 2px solid #EDEEF3;
      border-radius: 74px;
      width: 152px;
      height: 56px;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #2B2D56;
      text-transform: uppercase;
    }

    .close-modal__button--exit {
      background: #DD3E56;
      box-shadow: 0px 8px 34px rgba(221, 62, 86, 0.4);
      color: #fff;
      border-color: transparent;
    }
  `,t}var Je=function(){function e(t){this._listeners=We(),this._isVisible=!1,this._isPollingForSwapStatus=!1,this._purchasePollingCredentials=null,Xe(),this.unsubscribe=this.unsubscribe.bind(this),this.on=this.on.bind(this),this.show=this.show.bind(this),this._handleEscapeClick=this._handleEscapeClick.bind(this),this._dispatchEvent=this._dispatchEvent.bind(this),this._subscribeToWidgetEvents=this._subscribeToWidgetEvents.bind(this),this._on=this._on.bind(this),this._processPurchasePollingLoop=this._processPurchasePollingLoop.bind(this),this._registerSdkEventHandlers=this._registerSdkEventHandlers.bind(this),this._runPostSubscribeHooks=this._runPostSubscribeHooks.bind(this),this._subscribeToWidgetEvents=this._subscribeToWidgetEvents.bind(this),this._rawNormalizedConfig=Ue(k({variant:"desktop"},t));var n=ne(this._rawNormalizedConfig);this._config=k(k({},this._rawNormalizedConfig),{variant:n,widgetInstanceId:Pe()})}return e.prototype.show=function(){if(this._isVisible)throw new Error("Widget is already visible - you can only call this once per instance");return document.activeElement&&He(document.activeElement)&&document.activeElement.blur(),this._registerSdkEventHandlers(),window.addEventListener("message",this._subscribeToWidgetEvents),this._isConfiguredAsHosted()?this._showUsingHostedMode():this._isConfiguredAsEmbedded()?this._showUsingEmbeddedMode():this._isConfiguredWithOverlay()&&this._showUsingOverlayMode(),window.addEventListener("keydown",this._handleEscapeClick,!0),this},e.prototype.on=function(t,n){return this._on(t,n,!1),this},e.prototype.unsubscribe=function(t,n){var o=this;if(t==="*"){var r=Object.entries(this._listeners);r.forEach(function(i){var a=i[0],d=i[1],c=d.filter(function(s){return s.callback!==n});o._listeners[a]=c})}else this._listeners[t]=this._listeners[t].filter(function(i){return i.callback!==n});return this},e.prototype._on=function(t,n,o){if(t!=="*"&&!this._listeners[t]&&console.warn("Unknown / unsupported event name - '"+t+"'. This listener will have no effect."),t==="*"){var r=Object.values(this._listeners);r.forEach(function(i){return i.push({callback:n,internal:o})})}else this._listeners[t].push({callback:n,internal:o});this._runPostSubscribeHooks(t,o)},e.prototype.close=function(){return this._dispatchEvent({type:m.WIDGET_CLOSE,payload:null,widgetInstanceId:this._config.widgetInstanceId}),this},e.prototype._subscribeToWidgetEvents=function(t){if(!!t.data&&!!$e(t.origin,this._config.url||ee)){var n=t.data;!n.widgetInstanceId||n.widgetInstanceId!==this._config.widgetInstanceId||this._dispatchEvent(n)}},e.prototype._registerSdkEventHandlers=function(){var t=this;this._on(m.WIDGET_CLOSE,function(o){var r,i;if(t._isConfiguredAsHosted())try{(r=t.widgetWindow)===null||r===void 0||r.close()}catch{throw new Error("Could not close the widget window")}else(i=t.domNodes)===null||i===void 0||i.shadowHost.remove(),J.clearAllBodyScrollLocks();t._teardownEventSubscriptions()},!0);var n=function(){var o,r;if(!t._isConfiguredAsHosted()){(o=t.domNodes)===null||o===void 0||o.iframe.classList.add("visible");var i=(r=t.domNodes)===null||r===void 0?void 0:r.shadow.querySelector(".loader-container");i&&i.remove()}};this._on(m.WIDGET_CONFIG_DONE,n,!0),this._on(m.WIDGET_CONFIG_FAILED,n,!0),this._on(_.WIDGET_CLOSE_REQUEST,function(o){t._isConfiguredAsHosted()||t._isConfiguredAsEmbedded()||t._config.variant==="mobile"||Ze(t.domNodes.overlay)||t.domNodes.overlay.appendChild(Ye(t._dispatchEvent))},!0),this._on(_.WIDGET_CLOSE_REQUEST_CONFIRMED,function(o){t._dispatchEvent({type:m.WIDGET_CLOSE,payload:null,widgetInstanceId:t._config.widgetInstanceId})},!0),this._on(_.WIDGET_CLOSE_REQUEST_CANCELLED,function(o){if(!(t._isConfiguredAsHosted()||t._isConfiguredAsEmbedded())){var r=t.domNodes.overlay.querySelector(".close-modal");r&&r.remove()}},!0),this._on(m.PURCHASE_CREATED,function(o){t._purchasePollingCredentials={apiUrl:o.payload.apiUrl,purchaseExternalId:o.payload.purchase.id,token:o.payload.purchaseViewToken},t._processPurchasePollingLoop(t._purchasePollingCredentials)},!0)},e.prototype._dispatchEvent=function(t){var n=t.type;this._listeners[n].forEach(function(o){return o.callback(t)})},e.prototype._handleEscapeClick=function(t){var n=27;(t.key==="Escape"||t.key==="Esc"||t.keyCode===n)&&this._dispatchEvent({type:_.WIDGET_CLOSE_REQUEST,payload:null,internal:!0})},e.prototype._teardownEventSubscriptions=function(){window.removeEventListener("keydown",this._handleEscapeClick,!0),window.removeEventListener("message",this._subscribeToWidgetEvents)},e.prototype._processPurchasePollingLoop=function(t){var n=t.apiUrl,o=t.purchaseExternalId,r=t.token;return M(this,void 0,void 0,function(){var i;return G(this,function(a){switch(a.label){case 0:this._isPollingForSwapStatus=!0,a.label=1;case 1:return te(this._listeners,m.PURCHASE_SUCCESSFUL)>0||te(this._listeners,m.PURCHASE_FAILED)>0?[4,Be(1e3)]:[3,4];case 2:return a.sent(),[4,ze(n,o,r)];case 3:return i=a.sent(),i?i.actions.find(function(d){return d.newStatus==="RELEASED"})?(this._dispatchEvent({type:m.PURCHASE_SUCCESSFUL,payload:{purchase:i},widgetInstanceId:this._config.widgetInstanceId}),[2]):i.actions.find(function(d){return d.newStatus==="ERROR"})?(this._dispatchEvent({type:m.PURCHASE_FAILED,payload:null,widgetInstanceId:this._config.widgetInstanceId}),[2]):[3,1]:[3,1];case 4:return this._isPollingForSwapStatus=!1,[2]}})})},e.prototype._runPostSubscribeHooks=function(t,n){(t==="*"||t===m.PURCHASE_SUCCESSFUL||m.PURCHASE_FAILED)&&this._purchasePollingCredentials&&!this._isPollingForSwapStatus&&this._processPurchasePollingLoop(this._purchasePollingCredentials)},e.prototype._showUsingEmbeddedMode=function(){var t,n,o=V(this._config);if(this.domNodes=Ke(o,this._dispatchEvent,this._config),!((t=this.domNodes)===null||t===void 0?void 0:t.body))throw new Error("Couldn't find <body> element.");(n=this._config.containerNode)===null||n===void 0||n.appendChild(this.domNodes.shadowHost),this._isVisible=!0},e.prototype._showUsingOverlayMode=function(){var t,n=V(this._config);if(this.domNodes=Qe(n,this._dispatchEvent,this._config),!((t=this.domNodes)===null||t===void 0?void 0:t.body))throw new Error("Couldn't find <body> element.");this.domNodes.body.appendChild(this.domNodes.shadowHost),this._isVisible=!0,J.disableBodyScroll(this.domNodes.iframe);var o=ne(this._config);o!=="desktop"&&o!=="embedded-desktop"&&Ve(this.domNodes.shadow)},e.prototype._showUsingHostedMode=function(){var t,n=V(this._config);this.widgetWindow=(t=window.open(n),t!=null?t:void 0)},e.prototype._isConfiguredWithOverlay=function(){return["desktop","mobile"].includes(this._config.variant)},e.prototype._isConfiguredAsHosted=function(){return["hosted-desktop","hosted-mobile"].includes(this._config.variant)},e.prototype._isConfiguredAsEmbedded=function(){return["embedded-desktop","embedded-mobile"].includes(this._rawNormalizedConfig.variant)},e}();const et=e=>{const[t,n]=p.exports.useState("down"),o="default",r=[];for(const i in e.networks)e.networks[i].chainId!==31337&&e.networks[i].chainId!==1&&r.push(u("p",{children:u(I,{style:{color:e.networks[i].color},type:o,size:"large",shape:"round",onClick:()=>{window.open(e.networks[i].faucet)},children:e.networks[i].name})},e.networks[i].chainId));return b("div",{children:[b(I,{size:"large",shape:"round",onClick:()=>{n("up")},children:[u(Ie,{style:{color:"#52c41a"}})," ",typeof e.price=="undefined"?0:e.price.toFixed(2)]}),b(ve,{title:"Buy ETH",visible:t==="up",onCancel:()=>{n("down")},footer:[u(I,{onClick:()=>{n("down")},children:"cancel"},"back")],children:[u("p",{children:b(I,{type:o,size:"large",shape:"round",onClick:()=>{window.open("https://pay.sendwyre.com/purchase?destCurrency=ETH&sourceAmount=25&dest="+e.address)},children:[u("span",{style:{paddingRight:15},role:"img",children:u("span",{role:"img","aria-label":"flag-us",children:"\u{1F1FA}\u{1F1F8}"})}),"Wyre"]})}),b("p",{children:[" ",b(I,{type:o,size:"large",shape:"round",onClick:()=>{new Je({hostAppName:"scaffold-eth",hostLogoUrl:"https://scaffoldeth.io/scaffold-eth.png",swapAmount:"100000000000000000",swapAsset:"ETH",userAddress:e.address}).on("*",i=>console.log(i)).show()},children:[u("span",{style:{paddingRight:15},role:"img",children:u("span",{role:"img","aria-label":"flag-gb",children:"\u{1F1EC}\u{1F1E7}"})}),"Ramp"]})]}),u("p",{children:b(I,{type:o,size:"large",shape:"round",onClick:()=>{window.open("https://www.coinbase.com/buy-ethereum")},children:[u("span",{style:{paddingRight:15},role:"img","aria-label":"bank",children:"\u{1F3E6}"}),"Coinbase"]})}),u(ge,{}),u("h2",{children:"Testnet ETH"}),r]})]})};var re;const tt=(re=window.localStorage.getItem("theme"))!=null?re:"light",nt=()=>{const[e,t]=p.exports.useState(tt==="dark"),{switcher:n,currentTheme:o,status:r,themes:i}=_e(),a=$();p.exports.useEffect(()=>{var c;window.localStorage.setItem("theme",o!=null?o:""),(o=="light"||o=="dark")&&((c=a==null?void 0:a.setModalTheme)==null||c.call(a,o))},[o]);const d=c=>{var s;t(c),n({theme:c?i.dark:i.light}),(s=a==null?void 0:a.setModalTheme)==null||s.call(a,e?"dark":"light")};return r==="loading"||r==="idle"?u(W,{}):b("div",{className:"main fade-in",style:{position:"fixed",right:10,bottom:10},children:[u("span",{style:{padding:8},children:o==="light"?"\u2600\uFE0F":"\u{1F31C}"}),u(ke,{checked:e,onChange:d})]})},ct=e=>{var i,a,d;const t=$();let n=ye(e.scaffoldAppProviders,t);const o=b("div",{style:{position:"fixed",textAlign:"left",left:0,bottom:20,padding:10},children:[b(q,{align:"middle",gutter:[4,4],children:[u(U,{span:8,children:u(et,{price:e.price,address:(i=t==null?void 0:t.account)!=null?i:"",networks:we})}),u(U,{span:8,style:{textAlign:"center",opacity:.8},children:u(be,{chainId:e.scaffoldAppProviders.targetNetwork.chainId,currentNetwork:Ee(t.chainId),provider:t.ethersProvider,speed:"average"})}),u(U,{span:8,style:{textAlign:"center",opacity:1},children:b(I,{onClick:()=>{window.open("https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA")},size:"large",shape:"round",children:[u("span",{style:{marginRight:8},role:"img","aria-label":"support",children:"\u{1F4AC}"}),"Support"]})})]}),u(q,{align:"middle",gutter:[4,4],children:u(U,{span:24,children:n&&((a=e.scaffoldAppProviders)==null?void 0:a.mainnetProvider)&&((d=e.scaffoldAppProviders)==null?void 0:d.localProvider)?u(Ce,{localProvider:e.scaffoldAppProviders.localProvider,price:e.price,mainnetProvider:e.scaffoldAppProviders.mainnetProvider}):u(W,{})})})]});return b(W,{children:[o,u(nt,{})]})};export{ct as MainPageFooter};
