!function e(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.bestReport=n():t.bestReport=n()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function t(){return e.default}:function t(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./dist/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var o=function e(){return(new Date).getTime()+Math.floor(1e3*(Math.random()+1)).toString()},r=function e(t,n){window[n]=null,delete window[n],t.onload=null,t.onabort=null,t.onerror=null};function i(e,t){if(void 0===t&&(t=!0),e){var n=o(),i="log_"+n,u=new Image;window[i]=u,u.onload=function(){var e=this;r(this,i)},u.onabort=function(){var e=this;r(this,i)},u.onerror=function(){var e=this;r(this,i)};var f=-1!==e.indexOf("?")?"&":"?";u.src=t?""+e+f+"t="+n:e}}var u=i;function f(){var e=encodeURIComponent(window.location.host+window.location.pathname);u("https://s.click.aliexpress.com/dl_affpage.htm?current_url=".concat(e)),console.log("k - best-report reported.")}function c(){console.log("k - best-report init."),window.canPlantAffiliateBestCookie&&setTimeout((function(){f()}),2e3)}c()}])}));