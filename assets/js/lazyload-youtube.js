!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";var r=n(3),o=function(t){var e=window.jQuery||window.$;e&&e(document).ajaxStop((function(){t()}))},i=n(1);function a(t,e){t.setAttribute("style","background-image:url(".concat(e,");background-color:#000;background-position:center center;background-repeat:no-repeat;"))}function c(t){var e=function(t){var e=t&&t.parentNode&&t.parentNode.parentNode,n=e&&e.classList.contains("wp-has-aspect-ratio"),r=String(e.classList),o=r.substring(r.lastIndexOf("wp-embed-aspect-"),r.lastIndexOf(" ")).trim();if(n&&o){var i=o.replace("wp-embed-aspect-","").split("-"),a=Number(i[1])/Number(i[0]);return a.toString().split(".")[1].length>4?Math.round(1e4*a)/1e4:a}return.5625}(t);Object(i.a)("object, embed, iframe, .preview-lazyload, .lazy-load-div",t).forEach((function(t){var n=t,r=n.parentNode.clientWidth,o=Math.round(r*e);n.setAttribute("height","".concat(o,"px")),n.setAttribute("width","".concat(r,"px")),n.style.height="".concat(o,"px"),n.style.width="".concat(r,"px")}))}n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return s}));var u=function(t,e){for(var n=this,r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];var a=null;return function(){var r=!a,i=function(){return t.apply(n,o)};clearTimeout(a),a=setTimeout(i,e),r&&i()}}((function(){Object(i.a)(".container-lazyload").forEach(c)}),100);function l(){u()}function d(t){var e=t.load,n=t.pluginOptions;t.previewVideoSelector;e(),o((function(){e(),l()})),Object(r.b)(l),window.addEventListener("resize",l),window.addEventListener("load",(function(){l()})),"function"==typeof n.callback&&n.callback()}function s(t,e){var n;function r(t){e(t),t.parentNode.classList.remove("js-lazyload--not-loaded"),c(t.parentNode)}if("IntersectionObserver"in window||"IntersectionObserverEntry"in window||"intersectionRatio"in window.IntersectionObserverEntry.prototype){n=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(n.unobserve(t.target),r(t.target))}))}),{root:null,rootMargin:"100px"}),t.forEach((function(t){n.observe(t)}))}else t.forEach(r)}},function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(e.querySelectorAll(t))}},function(t,e,n){"use strict";function r(t){var e=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=t;n.childNodes[0];)e.appendChild(n.childNodes[0]);return e}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";function r(t){var e=window.jQuery||window.$;e&&e.fn&&e(window).bindFirst("load",t)}n.d(e,"b",(function(){return r})),e.a=function(){var t=window.jQuery||window.$;t&&t.fn&&(t.fn.bindFirst=function(e,n){var r=t(this);r.unbind(e,n),r.bind(e,n);var o=t._data(r[0]).events,i=o[e];i.unshift(i.pop()),o[e]=i})}},function(t,e,n){"use strict";function r(t){"complete"===document.readyState||"interactive"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)}n.d(e,"a",(function(){return r}))},,function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(1);function a(t){return Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e])})).join("&")}function c(t,e){return d(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||l()}function u(t){return d(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function d(t){if(Array.isArray(t))return t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b,v="preview-youtube",y="",m={colour:"red",controls:!0,loadpolicy:!0,buttonstyle:"",preroll:"",postroll:"",responsive:!0,thumbnailquality:"0",loadthumbnail:!0};function h(t){var e=t.pluginOptions,n=t.videoId,r=t.urlOptions,o=n,i={autoplay:1,modestbranding:1,rel:0};!1===e.controls&&(i.controls=0),e.loadpolicy&&(i.iv_load_policy=3),e.colour&&(i.color=e.colour);var c=e.preroll!==n&&e.preroll,u=e.postroll!==n&&e.postroll,l=[];c&&(o=c,l.push(n)),u&&l.push(u),l.length>0&&(i.playlist=l.join(","));var d=f({},i,{},r);return d.t&&(d.start=function(t){var e=0,n=[3600,60,1],r=t.match(/(?:(\d+)(?:h))?(?:(\d+)(?:m))?(?:(\d+)(?:s))?/);if(r)for(var o=1;o<r.length;o+=1)void 0!==r[o]&&(e+=parseInt(r[o],10)*n[o-1]);return e}(d.t)),"https://www.youtube-nocookie.com/embed/".concat(o,"?").concat(a(d))}function g(t){var e=u(function(t){var e=new RegExp(["v=","/embed/","://youtu.be/"].join("|"),"i");return t.split(e)[1]}(t).split(/[&#?]/));return{videoId:e[0],queryParams:e.slice(1).reduce((function(t,e){var n=c(e.split("="),2),r=n[0],o=n[1];return t[r]=o,t}),{})}}function w(){Object(i.a)("a.lazy-load-youtube").forEach((function(t,e){var n=t,i=g(n.getAttribute("href")),c=i.videoId,u=i.queryParams;n.innerHTML='<div aria-hidden="true" class="lazy-load-info"><span class="titletext youtube">'.concat(void 0!==n.getAttribute("data-video-title")?n.getAttribute("data-video-title"):n.innerHTML?n.innerHTML:"","</span></div>");var l,d=Object(o.a)('<div aria-hidden="true" class="lazy-load-div"></div>');function s(t){var e=y,n=Object(o.a)('<img style="display:none" src="'.concat(e,'">')).firstChild;n.addEventListener("load",(function(){120===n.clientWidth&&(e=e.replace("maxresdefault","0")),t.style.backgroundImage||Object(r.d)(t,e),n.parentNode.removeChild(n)})),document.body.appendChild(n)}n.insertBefore(d,n.firstChild),b.buttonstyle&&n.classList.add(b.buttonstyle),l="https://i2.ytimg.com/vi/".concat(c,"/").concat(b.thumbnailquality,".jpg"),y=l,b.loadthumbnail&&Object(r.a)([n],(function(t){return s(t)})),n.getAttribute("id",c+e),n.getAttribute("href","https://www.youtube.com/watch?v=".concat(c)+a(u)),n.addEventListener("click",(function(t){var e=t.currentTarget;if(t.preventDefault(),"a"===e.tagName.toLowerCase()){e.classList.remove(v);var i=h({pluginOptions:b,videoId:c,urlOptions:u}),a=Object(o.a)('<iframe width="'.concat(parseInt(n.clientWidth,10),'" height="').concat(parseInt(n.clientHeight,10),'" style="vertical-align:top;" src="').concat(i,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'));e.parentNode.replaceChild(a,e),!0===b.responsive&&Object(r.c)()}}))}))}e.a=function(t){b=f({},m,{},t),Object(r.b)({load:w,pluginOptions:b,previewVideoSelector:".".concat(v)})}},,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(4),i=n(6);Object(o.a)((function(){Object(r.a)(),Object(i.a)(lazyload_video_settings.youtube)}))}]);