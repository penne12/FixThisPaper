!function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="/build/",t(0)}({0:function(e,t,i){var r=i(205);"string"==typeof r&&(r=[[e.id,r,""]]),i(287)(r,{}),r.locals&&(e.exports=r.locals)},205:function(e,t,i){t=e.exports=i(206)(),t.push([e.id,"body{width:8.5in;max-height:11in;margin-left:auto;margin-right:auto;background-color:transparent}.doc{margin:1in}h1{font:inherit;font-size:inherit;line-height:inherit;text-align:center}header,p.mla{font-family:Times New Roman,Georgia,Serif;font-size:12pt;line-height:200%}p.mla{text-indent:3em;position:static}@keyframes darken{0%{background-color:transparent}99%{background-color:transparent}to{background-color:hsla(0,0%,75%,.75)}}body.watched-1-after{animation-duration:60s;animation-name:darken;animation-iteration-count:infinite;animation-direction:alternate}body.watched-1{background-color:#707070!important;margin:none;transition:background-color 3s}body.watched-1 *{opacity:.75!important;transition:opacity 1s}body.watched-1 input{visibility:hidden!important}body.watched-1:before{background-color:#fff;width:50vh;height:30vh;top:35vh;left:calc(50vw - 25vh);visibility:visible}body.watched-1:after{background-color:#707070;width:16vh;height:16vh;top:42vh;left:calc(50vw - 8vh);visibility:visible}div.eye{height:11in;width:100%;position:relative;page-break-before:always;page-break-after:always;background-color:#707070}div.eye:after,div.eye:before{content:'';display:inline-block;margin:0;border-radius:100%;position:absolute;background-color:transparent}div.eye:before{background-color:#fff;width:3.5in;height:2.5in;margin:4.25in 1.5in}div.eye:after{background-color:#707070;width:1in;height:1in;margin:5in 2.75in}@keyframes noise-anim{0%{clip:none}8000%{clip:rect(43px,9999px,22px,0)}8100%{clip:rect(44px,9999px,49px,0)}8200%{clip:rect(17px,9999px,11px,0)}8300%{clip:rect(58px,9999px,50px,0)}8400%{clip:rect(77px,9999px,63px,0)}8500%{clip:rect(25px,9999px,72px,0)}8600%{clip:rect(14px,9999px,39px,0)}8700%{clip:rect(77px,9999px,59px,0)}8800%{clip:rect(55px,9999px,49px,0)}8900%{clip:rect(12px,9999px,31px,0)}9000%{clip:rect(6px,9999px,24px,0)}9100%{clip:rect(5px,9999px,49px,0)}9200%{clip:rect(13px,9999px,11px,0)}9300%{clip:rect(40px,9999px,16px,0)}9400%{clip:rect(61px,9999px,40px,0)}9500%{clip:rect(48px,9999px,66px,0)}9600%{clip:rect(52px,9999px,49px,0)}9700%{clip:rect(7px,9999px,72px,0)}9800%{clip:rect(87px,9999px,62px,0)}9900%{clip:rect(71px,9999px,90px,0)}10000%{clip:rect(4px,9999px,14px,0)}}@keyframes noise-anim-2{0%{clip:none}8000%{clip:rect(21px,9999px,87px,0)}8100%{clip:rect(35px,9999px,52px,0)}8200%{clip:rect(28px,9999px,18px,0)}8300%{clip:rect(34px,9999px,15px,0)}8400%{clip:rect(28px,9999px,77px,0)}8500%{clip:rect(69px,9999px,60px,0)}8600%{clip:rect(4px,9999px,47px,0)}8700%{clip:rect(36px,9999px,89px,0)}8800%{clip:rect(86px,9999px,12px,0)}8900%{clip:rect(68px,9999px,2px,0)}9000%{clip:rect(90px,9999px,78px,0)}9100%{clip:rect(41px,9999px,59px,0)}9200%{clip:rect(42px,9999px,17px,0)}9300%{clip:rect(33px,9999px,31px,0)}9400%{clip:rect(39px,9999px,39px,0)}9500%{clip:rect(12px,9999px,23px,0)}9600%{clip:rect(69px,9999px,9px,0)}9700%{clip:rect(20px,9999px,71px,0)}9800%{clip:rect(34px,9999px,92px,0)}9900%{clip:rect(48px,9999px,37px,0)}10000%{clip:rect(49px,9999px,43px,0)}}.glitch{position:relative}.glitch:after{left:2px;text-shadow:-1px 0 red;color:green;animation:noise-anim 10s infinite linear alternate-reverse}.glitch:after,.glitch:before{content:attr(data-text);position:absolute;top:0;overflow:hidden;clip:rect(0,900px,0,0)}.glitch:before{left:-2px;text-shadow:1px 0 blue;animation:noise-anim-2 15s infinite linear alternate-reverse}.console-log-log{color:#bab}div.terminal{background-color:#16201d;max-height:250px;overflow:scroll;padding-top:5px;padding-bottom:5px;line-height:200%}div.terminal,div.terminal input,div.terminal input:focus{font-family:Fira Mono,DejaVu Sans Mono,Menlo,Consolas,Liberation Mono,Monaco,Lucida Console,monospace;color:#fff;font-size:11px}div.terminal input,div.terminal input:focus{border:none;outline:none;background-color:transparent;width:100%}.terminal-input-row,.terminal-row{display:flex;flex-direction:row;padding-left:15px;padding-right:15px}.terminal-input-row span,.terminal-row span.prompt{flex-shrink:1;font-size:11px;margin-left:5px}.terminal-input-row input,.terminal-row span.command{margin-left:5px;flex-grow:1}.terminal-row .output{color:#bbb}.terminal-row .error{color:#ba4747}.help-box{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding:15px 15px 5px;line-height:125%;border-radius:10px;margin:15px 40px 25px;border:2px solid #000}@media screen{.help-box{background-color:#1c7596;border-radius:5px;border-style:none;color:#fff;margin:15px 0}}@media screen{.screen-hidden{display:none}}@media print{.print-hidden{display:none}}",""])},206:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var p=this[n][0];"number"==typeof p&&(r[p]=!0)}for(n=0;n<t.length;n++){var o=t[n];"number"==typeof o[0]&&r[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),e.push(o))}},e}},287:function(e,t,i){function r(e,t){for(var i=0;i<e.length;i++){var r=e[i],n=f[r.id];if(n){n.refs++;for(var p=0;p<n.parts.length;p++)n.parts[p](r.parts[p]);for(;p<r.parts.length;p++)n.parts.push(l(r.parts[p],t))}else{for(var o=[],p=0;p<r.parts.length;p++)o.push(l(r.parts[p],t));f[r.id]={id:r.id,refs:1,parts:o}}}}function n(e){for(var t=[],i={},r=0;r<e.length;r++){var n=e[r],p=n[0],o=n[1],a=n[2],c=n[3],l={css:o,media:a,sourceMap:c};i[p]?i[p].parts.push(l):t.push(i[p]={id:p,parts:[l]})}return t}function p(e,t){var i=m(),r=v[v.length-1];if("top"===e.insertAt)r?r.nextSibling?i.insertBefore(t,r.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",p(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",p(e,t),t}function l(e,t){var i,r,n;if(t.singleton){var p=b++;i=g||(g=a(t)),r=s.bind(null,i,p,!1),n=s.bind(null,i,p,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=c(t),r=d.bind(null,i),n=function(){o(i),i.href&&URL.revokeObjectURL(i.href)}):(i=a(t),r=x.bind(null,i),n=function(){o(i)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}function s(e,t,i,r){var n=i?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,n);else{var p=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(p,o[t]):e.appendChild(p)}}function x(e,t){var i=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function d(e,t){var i=t.css,r=t.sourceMap;r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var n=new Blob([i],{type:"text/css"}),p=e.href;e.href=URL.createObjectURL(n),p&&URL.revokeObjectURL(p)}var f={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=u(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,b=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=n(e);return r(i,t),function(e){for(var p=[],o=0;o<i.length;o++){var a=i[o],c=f[a.id];c.refs--,p.push(c)}if(e){var l=n(e);r(l,t)}for(var o=0;o<p.length;o++){var c=p[o];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete f[c.id]}}}};var y=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()}});