!function(){var e={991:function(e,t){var r;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n=function(){function e(){}function t(e,t){for(var r=t.length,n=0;n<r;++n)o(e,t[n])}e.prototype=Object.create(null);var r={}.hasOwnProperty;var n=/\s+/;function o(e,o){if(o){var a=typeof o;"string"===a?function(e,t){for(var r=t.split(n),o=r.length,a=0;a<o;++a)e[r[a]]=!0}(e,o):Array.isArray(o)?t(e,o):"object"===a?function(e,t){if(t.toString===Object.prototype.toString)for(var n in t)r.call(t,n)&&(e[n]=!!t[n]);else e[t.toString()]=!0}(e,o):"number"===a&&function(e,t){e[t]=!0}(e,o)}}return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var a=new e;t(a,n);var i=[];for(var c in a)a[c]&&i.push(c);return i.join(" ")}}();e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},184:function(e,t){var r;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},588:function(e){e.exports=function(e,t){var r,n,o=0;function a(){var a,i,c=r,l=arguments.length;e:for(;c;){if(c.args.length===arguments.length){for(i=0;i<l;i++)if(c.args[i]!==arguments[i]){c=c.next;continue e}return c!==r&&(c===n&&(n=c.prev),c.prev.next=c.next,c.next&&(c.next.prev=c.prev),c.next=r,c.prev=null,r.prev=c,r=c),c.val}c=c.next}for(a=new Array(l),i=0;i<l;i++)a[i]=arguments[i];return c={args:a,val:e.apply(null,a)},r?(r.prev=c,c.next=r):n=c,o===t.maxSize?(n=n.prev).next=null:o++,r=c,c.val}return t=t||{},a.clear=function(){r=null,n=null,o=0},a}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=wp.hooks,t=wp.compose,n=r(184),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=wp.element,c=[{ratio:"2.33",className:"wp-embed-aspect-21-9"},{ratio:"2.00",className:"wp-embed-aspect-18-9"},{ratio:"1.78",className:"wp-embed-aspect-16-9"},{ratio:"1.33",className:"wp-embed-aspect-4-3"},{ratio:"1.00",className:"wp-embed-aspect-1-1"},{ratio:"0.56",className:"wp-embed-aspect-9-16"},{ratio:"0.50",className:"wp-embed-aspect-1-2"}],l="wp-embed",u=lodash,s=r(991),p=r.n(s),d=r(588),f=r.n(d),v=wp.blocks;function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y="core/embed",h=function(e){var t;return null===(t=(0,v.getBlockVariations)(y))||void 0===t?void 0:t.find((function(t){var r=t.patterns;return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).some((function(t){return e.match(t)}))}(e,r)}))},g=function(e){return e&&e.includes('class="wp-embedded-content"')},w=function(e){if(!e)return e;var t=c.reduce((function(e,t){return e[t.className]=!1,e}),{"wp-has-aspect-ratio":!1});return p()(e,t)};function O(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!r)return w(t);var n=document.implementation.createHTMLDocument("");n.body.innerHTML=e;var o=n.body.querySelector("iframe");if(o&&o.height&&o.width)for(var a=(o.width/o.height).toFixed(2),i=0;i<c.length;i++){var l=c[i];if(a>=l.ratio){var u=a-l.ratio;return u>.1?w(t):p()(w(t),l.className,"wp-has-aspect-ratio")}}return t}var E=f()((function(e,t,r,n){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(!e)return{};var a={},i=e.type,c=void 0===i?"rich":i,s=e.html,p=e.provider_name,d=(0,u.kebabCase)((p||t).toLowerCase());return g(s)&&(c=l),(s||"photo"===c)&&(a.type=c,a.providerNameSlug=d),a.className=O(s,r,n&&o),a})),j=wp.i18n,S=wp.components,_=wp.blockEditor;function k(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=(0,i.createElement)((function(e){var t=e.className,r=e.isPressed,n=N(N({},k(e,["className","isPressed"])),{},{className:o()(t,{"is-pressed":r})||void 0,role:"img","aria-hidden":!0,focusable:!1});return(0,i.createElement)("svg",n)}),{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)((function(e){return(0,i.createElement)("path",e)}),{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"})),R=function(e){var t=e.blockSupportsResponsive,r=e.showEditButton,n=e.themeSupportsResponsive,o=e.allowResponsive,a=e.getResponsiveHelp,c=e.toggleResponsive,l=e.switchBackToURLInput;return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(_.BlockControls,null,(0,i.createElement)(S.ToolbarGroup,null,r&&(0,i.createElement)(S.ToolbarButton,{className:"components-toolbar__control",label:(0,j.__)("Edit URL"),icon:x,onClick:l}))),n&&t&&(0,i.createElement)(_.InspectorControls,null,(0,i.createElement)(S.PanelBody,{title:(0,j.__)("Media settings"),className:"blocks-responsive"},(0,i.createElement)(S.ToggleControl,{label:(0,j.__)("Resize for smaller devices"),checked:o,help:a,onChange:c}))))};function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?L(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e){var t=e.html,r=(0,i.useRef)();(0,i.useEffect)((function(){var e=r.current.ownerDocument,t=e.defaultView;function n(t){var r=t.data,n=(r=void 0===r?{}:r).secret,o=r.message,a=r.value;[n,o,a].some((function(e){return!e}))||"height"!==o||e.querySelectorAll('iframe[data-secret="'.concat(n,'"')).forEach((function(e){+e.height!==a&&(e.height=a)}))}function o(){var t=e.activeElement;"IFRAME"===t.tagName&&t.parentNode===r.current&&t.focus()}return t.addEventListener("message",n),t.addEventListener("blur",o),function(){t.removeEventListener("message",n),t.removeEventListener("blur",o)}}),[]);var n=(0,i.useMemo)((function(){var e=(new window.DOMParser).parseFromString(t,"text/html"),r=e.querySelector("iframe");r&&r.removeAttribute("style");var n=e.querySelector("blockquote");return n&&(n.style.display="none"),e.body.innerHTML}),[t]);return(0,i.createElement)("div",{ref:r,className:"wp-block-embed__wrapper",dangerouslySetInnerHTML:{__html:n}})}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var o=M(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return T(this,r)}}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,r,n,o=D(a);function a(){var e;return C(this,a),(e=o.apply(this,arguments)).hideOverlay=e.hideOverlay.bind(L(e)),e.state={interactive:!1},e}return t=a,n=[{key:"getDerivedStateFromProps",value:function(e,t){return!e.isSelected&&t.interactive?{interactive:!1}:null}}],(r=[{key:"hideOverlay",value:function(){this.setState({interactive:!0})}},{key:"render",value:function(){var e,t,r,n=this.props,o=n.preview,a=n.previewable,c=n.url,l=n.type,u=n.caption,s=n.onCaptionChange,d=n.isSelected,f=n.className,m=n.icon,b=n.label,y=n.insertBlocksAfter,h=o.scripts,g=this.state.interactive,w="photo"===l?(t=(e=o).thumbnail_url||e.url,r=(0,i.createElement)("p",null,(0,i.createElement)("img",{src:t,alt:e.title,width:"100%"})),(0,i.renderToString)(r)):o.html,O=new URL(c).host.split("."),E=O.splice(O.length-2,O.length-1).join("."),k=(0,j.sprintf)((0,j.__)("Embedded content from %s"),E),P=p()(l,f,"wp-block-embed__wrapper"),N="wp-embed"===l?(0,i.createElement)(z,{html:w}):(0,i.createElement)("div",{className:"wp-block-embed__wrapper"},(0,i.createElement)(S.SandBox,{html:w,scripts:h,title:k,type:P,onFocus:this.hideOverlay}),!g&&(0,i.createElement)("div",{className:"block-library-embed__interactive-overlay",onMouseUp:this.hideOverlay}));return(0,i.createElement)("figure",{className:p()(f,"wp-block-embed",{"is-type-video":"video"===l})},a?N:(0,i.createElement)(S.Placeholder,{icon:(0,i.createElement)(_.BlockIcon,{icon:m,showColors:!0}),label:b},(0,i.createElement)("p",{className:"components-placeholder__error"},(0,i.createElement)("a",{href:c},c)),(0,i.createElement)("p",{className:"components-placeholder__error"},(0,j.sprintf)((0,j.__)("Embedded content from %s can't be previewed in the editor."),E))),(!_.RichText.isEmpty(u)||d)&&(0,i.createElement)(_.RichText,{tagName:"figcaption",placeholder:(0,j.__)("Add caption"),value:u,onChange:s,inlineToolbar:!0,__unstableOnSplitAtEnd:function(){return y((0,v.createBlock)("core/paragraph"))}}))}}])&&A(t.prototype,r),n&&A(t,n),a}(i.Component),H=function(){return(0,i.createElement)("div",{className:"wp-block-embed is-loading"},(0,i.createElement)(S.Spinner,null),(0,i.createElement)("p",null,(0,j.__)("Embedding…")))},F=function(e){var t=e.icon,r=e.label,n=e.value,o=e.onSubmit,a=e.onChange,c=e.cannotEmbed,l=e.fallback,u=e.tryAgain;return(0,i.createElement)(S.Placeholder,{icon:(0,i.createElement)(_.BlockIcon,{icon:t,showColors:!0}),label:r,className:"wp-block-embed",instructions:(0,j.__)("Paste a link to the content you want to display on your site.")},(0,i.createElement)("form",{onSubmit:o},(0,i.createElement)("input",{type:"url",value:n||"",className:"components-placeholder__input","aria-label":r,placeholder:(0,j.__)("Enter URL to embed here…"),onChange:a}),(0,i.createElement)(S.Button,{isPrimary:!0,type:"submit"},(0,j._x)("Embed","button label"))),(0,i.createElement)("div",{className:"components-placeholder__learn-more"},(0,i.createElement)(S.ExternalLink,{href:(0,j.__)("https://wordpress.org/support/article/embeds/")},(0,j.__)("Learn more about embeds"))),c&&(0,i.createElement)("div",{className:"components-placeholder__error"},(0,i.createElement)("div",{className:"components-placeholder__instructions"},(0,j.__)("Sorry, this content could not be embedded.")),(0,i.createElement)(S.Button,{isSecondary:!0,onClick:u},(0,j._x)("Try again","button label"))," ",(0,i.createElement)(S.Button,{isSecondary:!0,onClick:l},(0,j._x)("Convert to link","button label"))))},U=wp.data,V=React.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"})),$={foreground:"#ff0000",src:React.createElement("svg",{viewBox:"0 0 24 24"},React.createElement("path",{d:"M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"}))},W={foreground:"#1ab7ea",src:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},React.createElement("g",null,React.createElement("path",{d:"M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.16 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.118-4.105-1.68-6.158-.622-2.24-1.29-3.36-2.004-3.36-.156 0-.7.328-1.634.98l-.978-1.26c1.027-.903 2.04-1.806 3.037-2.71C6 3.95 7.03 3.328 7.716 3.265c1.62-.156 2.616.95 2.99 3.32.404 2.558.685 4.148.84 4.77.468 2.12.982 3.18 1.543 3.18.435 0 1.09-.687 1.963-2.064.872-1.376 1.34-2.422 1.402-3.142.125-1.187-.343-1.782-1.4-1.782-.5 0-1.013.115-1.542.34 1.023-3.35 2.977-4.976 5.862-4.883 2.14.063 3.148 1.45 3.024 4.16z"})))};function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))}function G(e,t){var r=e;r.style.backgroundImage="url(".concat(t,")"),r.style.backgroundColor="#000",r.style.backgroundPosition="center center",r.style.backgroundRepeat="no-repeat"}function Q(e){var t=function(e){var t,r,n=String(null==e||null===(t=e.parentNode)||void 0===t||null===(r=t.parentNode)||void 0===r?void 0:r.classList).match(/wp-embed-aspect-\d+-\d+/);if(n){var o=n[0].replace("wp-embed-aspect-","").split("-"),a=Number(o[1])/Number(o[0]);return a.toString().split(".")[1].length>4?Math.round(1e4*a)/1e4:a}return.5625}(e);Y("object, embed, iframe, .preview-lazyload, .lazy-load-div",e).forEach((function(e){var r=e,n=r.parentNode.clientWidth,o=Math.round(n*t);r.setAttribute("height","".concat(o,"px")),r.setAttribute("width","".concat(n,"px")),r.style.height="".concat(o,"px"),r.style.width="".concat(n,"px")}))}function J(e){requestAnimationFrame((function(){Y(".container-lazyload",e).forEach(Q)}))}function K(e){var t,r,n=e.load,o=e.pluginOptions,a=o.rootNode,i=function(){return J(a)};n(o),t=function(){n(o),J(a)},(r=window.jQuery||window.$)&&r(document).ajaxStop((function(){t()})),window.addEventListener("resize",i),window.addEventListener("load",i),"function"==typeof o.callback&&o.callback()}function X(e,t){var r;function n(e){t(e),e.parentNode.classList.remove("js-lazyload--not-loaded"),Q(e.parentNode)}if("IntersectionObserver"in window||"IntersectionObserverEntry"in window||"intersectionRatio"in window.IntersectionObserverEntry.prototype){r=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(r.unobserve(e.target),n(e.target))}))}),{root:null,rootMargin:"100px"}),e.forEach((function(e){r.observe(e)}))}else e.forEach(n)}function Z(e){var t=document.createDocumentFragment(),r=document.createElement("div");for(r.innerHTML=e;r.childNodes[0];)t.appendChild(r.childNodes[0]);return t}function ee(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")}function te(e,t){return ie(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||oe(e,t)||ne()}function re(e){return ie(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||oe(e)||ne()}function ne(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function oe(e,t){if(e){if("string"==typeof e)return ae(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ae(e,t):void 0}}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ie(e){if(Array.isArray(e))return e}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){ue(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ue(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var se,pe={colour:"red",controls:!0,loadpolicy:!0,buttonstyle:"",preroll:"",postroll:"",thumbnailquality:"0",loadthumbnail:!0,cookies:!1};function de(e){var t=e.pluginOptions,r=e.videoId,n=e.urlOptions,o=r,a={autoplay:1,modestbranding:1,rel:0};!1===t.controls&&(a.controls=0),t.loadpolicy&&(a.iv_load_policy=3),t.colour&&(a.color=t.colour);var i=t.preroll!==r&&t.preroll,c=t.postroll!==r&&t.postroll,l=[];i&&(o=i,l.push(r)),c&&l.push(c),l.length>0&&(a.playlist=l.join(","));var u=le(le({},a),n);u.t&&(u.start=function(e){if(Number(e))return Number(e);var t=0,r=[3600,60,1],n=e.match(/(?:(\d+)(?:h))?(?:(\d+)(?:m))?(?:(\d+)(?:s))?/);if(n)for(var o=1;o<n.length;o+=1)void 0!==n[o]&&(t+=Number(n[o])*r[o-1]);return t}(u.t));var s="www.youtube".concat(t.cookies?"":"-nocookie",".com");return"https://".concat(s,"/embed/").concat(o,"?").concat(ee(u))}function fe(e){var t=re(function(e){var t=new RegExp(["v=","/embed/","://youtu.be/"].join("|"),"i");return e.split(t)[1]}(e).split(/[&#?]/));return{videoId:t[0],queryParams:t.slice(1).reduce((function(e,t){var r=te(t.split("="),2),n=r[0],o=r[1];return e[n]=o,e}),{})}}function ve(e){var t=fe(e.getAttribute("href")).videoId,r="https://i2.ytimg.com/vi/".concat(t,"/").concat(se.thumbnailquality,".jpg"),n=Z('<img style="display:none" src="'.concat(r,'">')).firstChild;n.addEventListener("load",(function(){120===n.clientWidth&&(r=r.replace("maxresdefault","0")),e.style.backgroundImage||G(e,r),n.parentNode.removeChild(n)})),document.body.appendChild(n)}function me(e){var t=e,r=fe(t.getAttribute("href")),n=r.videoId,o=r.queryParams;var a=void 0!==t.getAttribute("data-video-title")?t.getAttribute("data-video-title"):t.innerHTML?t.innerHTML:"";t.innerHTML=a.length>0?'\n    <div aria-hidden="true" class="lazy-load-info">\n      <div class="titletext youtube">'.concat(a,"</div>\n    </div>"):"";var i=Z('<div aria-hidden="true" class="lazy-load-div"></div>');t.insertBefore(i,t.firstChild),se.buttonstyle&&t.classList.add(se.buttonstyle);var c=Z('<div aria-hidden="true" class="lazy-load-info-extra">\n      <div class="overlaytext">'.concat(se.overlaytext,"</div>\n    </div>"));se.overlaytext.length>0&&t.parentNode.insertBefore(c,null),Q(t.parentNode),t.addEventListener("click",(function(e){var r=e.currentTarget;if(e.preventDefault(),"a"===r.tagName.toLowerCase()){r.classList.remove("preview-youtube");var a=de({pluginOptions:se,videoId:n,urlOptions:o}),i=Z('<iframe width="'.concat(parseInt(t.clientWidth,10),'" height="').concat(parseInt(t.clientHeight,10),'" style="vertical-align:top;" src="').concat(a,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')),c=r.parentNode;c&&c.replaceChild(i,r)}}),!0)}function be(e){var t=e.rootNode,r=e.loadthumbnail,n=Y("a.lazy-load-youtube",t);n.forEach(me),r&&X(n,(function(e){return ve(e)}))}var ye=function(e){K({load:be,pluginOptions:se=le(le({},pe),e)})};function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){we(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function we(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var je,Se="preview-vimeo",_e={buttonstyle:"",playercolour:"",loadthumbnail:!0,thumbnailquality:!1};function ke(e,t){var r=Z('<div aria-hidden="true" class="lazy-load-div"></div>');if(e.appendChild(r),window.llvConfig.vimeo.loadthumbnail){var n=function(e){if(!e)return"";var t=e.match(/_\d+x\d+/);if(t){var r=Oe(t[0].match(/\d+/g),2),n=r[0],o=r[1],a={basic:e.replace(t,"_".concat(640,"x",Math.round(o*(640/n)))),medium:e.replace(t,"_".concat(1280,"x",Math.round(o*(1280/n)))),max:e.replace(t,"")};return a[je.thumbnailquality]||a.basic}return e}(e.getAttribute("data-video-thumbnail"));n&&X(Y('[id="'.concat(t,'"]')),(function(e){return G(e,n)}))}if(window.llvConfig.vimeo.show_title){var o=e.getAttribute("data-video-title"),a=window.llvConfig.vimeo.show_title&&o.length>0,i=Z('<div aria-hidden="true" class="lazy-load-info">\n        <div class="titletext vimeo">'.concat(o,"</div>\n      </div>"));a&&e.appendChild(i)}je.buttonstyle&&e.classList.add(je.buttonstyle)}function Pe(e){e.addEventListener("click",(function(e){var t=e.currentTarget;if(e.preventDefault(),"a"===t.tagName.toLowerCase()){var r,n=t.getAttribute("id"),o=t.getAttribute("href"),a=((r=new URL(o).search)?{queryParams:r.replace("?","").split("&").reduce((function(e,t){var r=Oe(t.split("="),2),n=r[0],o=r[1];return e[n]=o,e}),{})}:{queryParams:{}}).queryParams;t.classList.remove(Se);var i=ge(ge({},a),{},{autoplay:1});je.playercolour&&(je.playercolour=je.playercolour.toString().replace(/[.#]/g,""),i.color=je.playercolour);var c=Z('<iframe src="'.concat(function(e){var t=e.videoId,r=e.queryParams;return"".concat(function(e){return"https://player.vimeo.com/video/".concat(e)}(t),"?").concat(ee(r))}({videoId:n,queryParams:i}),'" style="height:').concat(parseInt(t.clientHeight,10),'px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen allow=autoplay></iframe>')),l=t.parentNode;l&&l.replaceChild(c,t)}}),!0)}function Ne(e){var t=e.rootNode;Y(".".concat(Se),t).forEach((function(e){!function(e){var t=e,r=t.getAttribute("id");t.innerHTML="",ke(t,r);var n=je.overlaytext.length>0,o=Z('<div aria-hidden="true" class="lazy-load-info-extra">\n      <div class="overlaytext">'.concat(je.overlaytext,"</div>\n    </div>"));n&&t.parentNode.insertBefore(o,null)}(e),Q(e.parentNode),Pe(e)}))}var xe=function(e){K({load:Ne,pluginOptions:je=ge(ge({},_e),e)})},Re=function(){return(Re=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Ce={youtube:{title:"YouTube",icon:$,keywords:[(0,j.__)("music"),(0,j.__)("video")],description:(0,j.__)("Embed a YouTube video."),patterns:[/^https?:\/\/((m|www)\.)?youtube\.com\/.+/i,/^https?:\/\/youtu\.be\/.+/i],attributes:{providerNameSlug:"youtube",responsive:!0},init:function(e){var t;(null===(t=null===window||void 0===window?void 0:window.llvConfig)||void 0===t?void 0:t.youtube)&&ye(Re(Re({},window.llvConfig.youtube),{rootNode:e}))}},vimeo:{title:"Vimeo",icon:W,keywords:[(0,j.__)("video")],description:(0,j.__)("Embed a Vimeo video."),patterns:[/^https?:\/\/(www\.)?vimeo\.com\/.+/i],attributes:{providerNameSlug:"vimeo",responsive:!0},init:function(e){var t;(null===(t=null===window||void 0===window?void 0:window.llvConfig)||void 0===t?void 0:t.vimeo)&&xe(Re(Re({},window.llvConfig.vimeo),{rootNode:e}))}},default:{title:(0,j._x)("Embed","block title"),icon:V,init:function(){}}};var Ae=function(){return(Ae=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function Le(e){var t=e.attributes,r=e.isSelected,n=e.onReplace,a=e.setAttributes,c=e.insertBlocksAfter,u=t.providerNameSlug,s=t.responsive,p=t.url,d=t.allowResponsive,f=t.className,m=Ce[u]||Ce.default,w=m.icon,S=m.title,k=m.init,P=(0,i.useState)(p),N=P[0],x=P[1],C=(0,i.useState)(!1),A=C[0],L=C[1],B=(0,U.useDispatch)("core/data").invalidateResolution,I=(0,i.useState)(null),T=I[0],M=I[1];(0,i.useEffect)((function(){T&&k(T)}),[T,k]);var z=(0,U.useSelect)((function(e){var t,r=e("core"),n=r.getEmbedPreview,o=r.isPreviewEmbedFallback,a=r.isRequestingEmbedPreview,i=r.getThemeSupports;if(!p)return{fetching:!1,cannotEmbed:!1};var c=n(p),l=o(p),u=404===(null===(t=null==c?void 0:c.data)||void 0===t?void 0:t.status),s=!!c&&!u;return{preview:s?c:void 0,fetching:a(p),themeSupportsResponsive:i()["responsive-embeds"],cannotEmbed:!s||l}}),[p]),D=z.preview,V=z.fetching,$=z.themeSupportsResponsive,W=z.cannotEmbed,Y=(0,i.useCallback)((function(){return Ae(Ae({},t),E(D,S,f,s,d))}),[d,t,f,D,s,S]);(0,i.useEffect)((function(){if((null==D?void 0:D.html)&&W&&!V){var e=p.replace(/\/$/,"");x(e),L(!1),a({url:e})}}),[null==D?void 0:D.html,p,W,V,a]),(0,i.useEffect)((function(){if(D&&!A&&(a(Y()),n)){var t=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.preview,o=e.attributes,a=(o=void 0===o?{}:o).url,i=o.providerNameSlug,c=o.type;if(a&&(0,v.getBlockType)(y)){var u=h(a),s="wordpress"===i||c===l;if(!s&&u&&(u.attributes.providerNameSlug!==i||!i))return(0,v.createBlock)(y,b({url:a},u.attributes));var p=null===(t=(0,v.getBlockVariations)(y))||void 0===t?void 0:t.find((function(e){return"wordpress"===e.name}));if(p&&n&&g(n.html)&&!s)return(0,v.createBlock)(y,b(b({url:a},p.attributes),r))}}(e,Y());t&&n(t)}}),[D,A,Y,n,e,a]);var G=(0,_.useBlockProps)();if(V)return React.createElement("div",G,React.createElement(H,null));var Q=(0,j.sprintf)((0,j.__)("%s URL"),S);if(!D||W||A)return React.createElement("div",G,React.createElement(F,{icon:w,label:Q,onSubmit:function(e){e&&e.preventDefault(),L(!1),a({url:N})},value:N,cannotEmbed:W,onChange:function(e){return x(e.target.value)},fallback:function(){return function(e,t){var r=(0,i.createElement)("a",{href:e},e);t((0,v.createBlock)("core/paragraph",{content:(0,i.renderToString)(r)}))}(N,n)},tryAgain:function(){B("core","getEmbedPreview",[N])}}));var J=Y(),K=J.caption,X=J.allowResponsive,Z=J.className,ee=o()(Z,e.className,!r&&"lazy-load-block-play");return React.createElement("div",G,React.createElement("div",{ref:function(e){return M(e)}},React.createElement(R,{showEditButton:D&&!W,themeSupportsResponsive:$,blockSupportsResponsive:s,allowResponsive:X,toggleResponsive:function(){var e=D.html,t=!d;a({allowResponsive:t,className:O(e,f,s&&t)})},switchBackToURLInput:function(){return L(!0)}}),React.createElement(q,{preview:D,type:"wp-embed",previewable:!0,className:ee,url:N,caption:K,onCaptionChange:function(e){return a({caption:e})},isSelected:r,icon:w,label:Q,insertBlocksAfter:c})))}function Be(e){var t=e.attributes,r=e.setAttributes;return React.createElement(_.InspectorAdvancedControls,null,React.createElement(S.TextControl,{autoComplete:"off",label:(0,j.__)("Additional CSS class(es)"),value:t.className||"",onChange:function(e){r({className:""!==e?e:void 0})},help:(0,j.__)("Separate multiple classes with spaces.")}))}function Ie(){return(Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Te=(0,t.createHigherOrderComponent)((function(e){return function(t){var r,n,o=t.attributes,a=t.name,i="youtube"===(null==o?void 0:o.providerNameSlug)&&(null===(r=window.llvConfig)||void 0===r?void 0:r.youtube),c="vimeo"===(null==o?void 0:o.providerNameSlug)&&(null===(n=window.llvConfig)||void 0===n?void 0:n.vimeo);return"core/embed"===a&&(i||c)?[React.createElement(Le,Ie({key:"edit"},t)),t.isSelected&&React.createElement(Be,Ie({key:"edit-controls"},t))]:React.createElement(e,t)}}),"lazyLoadVideos");(0,e.addFilter)("editor.BlockEdit","kw/lazy-load-videos",Te,5)}()}();