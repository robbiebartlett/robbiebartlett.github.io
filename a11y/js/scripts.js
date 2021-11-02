function primaryNav(){"use strict";$(".rpb-navigation__toggle").on("click",function(e){$(".rpb-navigation").toggleClass("active");var t=$(".rpb-navigation__toggle");"false"===t.attr("aria-expanded")?t.attr("aria-expanded","true"):t.attr("aria-expanded","false"),"Close"==$(this).text()?$(this).text("Menu"):$(this).text("Close")}),$(".rpb-navigation__mobile-toggle").on("click",function(e){e.preventDefault();var t=$(this);"false"===t.attr("aria-expanded")?t.attr("aria-expanded","true"):t.attr("aria-expanded","false");var n=$(this).parent().toggleClass("active");$(".rpb-navigation__list-item").not(n).removeClass("active"),$(".rpb-navigation__mobile-toggle").not(this).attr("aria-expanded","false")}),$(".rpb-navigation").find(".rpb-navigation__level-one > rpb-navigation__list-item").on("focusin",function(){$(".rpb-navigation__level-one > .rpb-navigation__list-item").removeClass("js-focus")}),$(".rpb-navigation-sr-expand__btn").on("click",function(e){var t=$(this).closest(".rpb-navigation__level-one > li.js-focus").length;$(".rpb-navigation__level-one > li").removeClass("js-focus"),t||$(this).closest(".rpb-navigation__level-one > .rpb-navigation__list-item").addClass("js-focus")}),$(".rpb-navigation").on("mouseover",function(){$(this).find(".js-focus").removeClass("js-focus")}),$("body").on("keyup",function(e){27===e.keyCode&&$(".js-focus").removeClass("js-focus")})}function backToTop(){"use strict";var e=0,t=!1;function n(){e=$(window).scrollTop(),t=!1,1080<=e?$(".back-to-top").addClass("active"):$(".back-to-top").removeClass("active")}var o=document.getElementById("skiplinks");$(".back-to-top").click(function(){return o.focus(),$("html, body").animate({scrollTop:0},50).parent(),!1}),n(),$(window).on("scroll",function(){void 0!==window.requestAnimationFrame?(t||window.requestAnimationFrame(n),t=!0):n()})}function printPage(){"use strict";document.getElementById("rpb-print-button").addEventListener("click",function(){var e=document.getElementById("main-content").innerHTML,t=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=t})}function timeStamp(){$("#year").html((new Date).getFullYear())}function accordion(){$(".rpb-accordion__toggle").on("click",function(e){var t=$(".rpb-accordion").find(".rpb-accordion__details"),n=$(".rpb-accordion__toggle");t.prop("open");1==n.hasClass("active")?(t.prop("open",!1),n.html("Expand All").toggleClass("active")):(t.prop("open",!0),n.html("Collapse All").toggleClass("active"));var o=$(this);"false"===o.attr("aria-expanded")?o.attr("aria-expanded","true"):o.attr("aria-expanded","false")})}function filter(){$(window).on("load resize",function(){$(window).width()<=770?(document.getElementById("rpb-filter").open=!1,$(".rpb-filter__summary").attr("tabindex","1"),$(".rpb-order-1").insertBefore(".rpb-order-2")):(document.getElementById("rpb-filter").open=!0,$(".rpb-filter__summary").attr("tabindex","-1"),$(".rpb-order-2").insertBefore(".rpb-order-1"))})}$(document).ready(function(){primaryNav(),backToTop(),printPage(),timeStamp(),accordion(),filter()}),function(){"use strict";if("undefined"!=typeof window&&window.addEventListener){var e,t,n,y=Object.create(null),w=function(){clearTimeout(t),t=setTimeout(e,100)},E=function(){},x="http://www.w3.org/1999/xlink";e=function(){var e,t,n,o,r,i,a,c,s,l,u,d,f,p=0;function m(){var e;0===--p&&(E(),window.addEventListener("resize",w,!1),window.addEventListener("orientationchange",w,!1),E=window.MutationObserver?((e=new MutationObserver(w)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),function(){try{e.disconnect(),window.removeEventListener("resize",w,!1),window.removeEventListener("orientationchange",w,!1)}catch(e){}}):(document.documentElement.addEventListener("DOMSubtreeModified",w,!1),function(){document.documentElement.removeEventListener("DOMSubtreeModified",w,!1),window.removeEventListener("resize",w,!1),window.removeEventListener("orientationchange",w,!1)}))}function v(e){return function(){!0!==y[e.base]&&(e.useEl.setAttributeNS(x,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function h(o){return function(){var e,t=document.body,n=document.createElement("x");o.onload=null,n.innerHTML=o.responseText,(e=n.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",t.insertBefore(e,t.firstChild)),m()}}function g(e){return function(){e.onerror=null,e.ontimeout=null,m()}}for(E(),c=document.getElementsByTagName("use"),r=0;r<c.length;r+=1){try{t=c[r].getBoundingClientRect()}catch(e){t=!1}e=(a=(o=c[r].getAttribute("href")||c[r].getAttributeNS(x,"href")||c[r].getAttribute("xlink:href"))&&o.split?o.split("#"):["",""])[0],n=a[1],i=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!i?(c[r].hasAttribute("href")&&c[r].setAttributeNS(x,"xlink:href",o),e.length&&(!0!==(s=y[e])&&setTimeout(v({useEl:c[r],base:e,hash:n}),0),void 0===s&&(l=e,f=d=u=void 0,window.XMLHttpRequest&&(u=new XMLHttpRequest,d=b(location),f=b(l),u=void 0===u.withCredentials&&""!==f&&f!==d?XDomainRequest||void 0:XMLHttpRequest),void 0!==u&&(s=new u,(y[e]=s).onload=h(s),s.onerror=g(s),s.ontimeout=g(s),s.open("GET",e),s.send(),p+=1)))):i?e.length&&y[e]&&setTimeout(v({useEl:c[r],base:e,hash:n}),0):void 0===y[e]?y[e]=!0:y[e].onload&&(y[e].abort(),delete y[e].onload,y[e]=!0)}function b(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}c="",p+=1,m()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}(),window.Modernizr=function(o,d,a){function t(e){h.cssText=e}function i(e,t){return typeof e===t}function r(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var n in e){var o=e[n];if(!r(o,"-")&&h[o]!==a)return"pfx"!=t||o}return!1}function s(e,t,n){var o=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+x.join(o+" ")+o).split(" ");return i(t,"string")||void 0===t?c(r,t):function(e,t,n){for(var o in e){var r=t[e[o]];if(r!==a)return!1===n?e[o]:i(r,"function")?r.bind(n||t):r}return!1}(r=(e+" "+C.join(o+" ")+o).split(" "),t,n)}function l(e,t,n,o){var r,i,a,c,s=d.createElement("div"),l=d.body,u=l||d.createElement("body");if(parseInt(n,10))for(;n--;)(a=d.createElement("div")).id=o?o[n]:v+(n+1),s.appendChild(a);return r=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),s.id=v,(l?s:u).innerHTML+=r,u.appendChild(s),l||(u.style.background="",u.style.overflow="hidden",c=m.style.overflow,m.style.overflow="hidden",m.appendChild(u)),i=t(s,e),l?s.parentNode.removeChild(s):(u.parentNode.removeChild(u),m.style.overflow=c),!!i}var e,u,f,p={},m=d.documentElement,v="modernizr",n=d.createElement(v),h=n.style,g=d.createElement("input"),b=":)",y={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",x=E.split(" "),C=E.toLowerCase().split(" "),$="http://www.w3.org/2000/svg",k={},T={},S={},_=[],M=_.slice,L=(f={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},function(e,t){t=t||d.createElement(f[e]||"div");var n=(e="on"+e)in t;return n||(t.setAttribute||(t=d.createElement("div")),t.setAttribute&&t.removeAttribute&&(t.setAttribute(e,""),n=i(t[e],"function"),void 0===t[e]||(t[e]=a),t.removeAttribute(e))),t=null,n}),N={}.hasOwnProperty;for(var j in u=void 0===N||void 0===N.call?function(e,t){return t in e&&void 0===e.constructor.prototype[t]}:function(e,t){return N.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(o){var r=this;if("function"!=typeof r)throw new TypeError;var i=M.call(arguments,1),a=function(){if(this instanceof a){function e(){}e.prototype=r.prototype;var t=new e,n=r.apply(t,i.concat(M.call(arguments)));return Object(n)===n?n:t}return r.apply(o,i.concat(M.call(arguments)))};return a}),k.flexbox=function(){return s("flexWrap")},k.flexboxlegacy=function(){return s("boxDirection")},k.canvas=function(){var e=d.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},k.canvastext=function(){return!(!p.canvas||!i(d.createElement("canvas").getContext("2d").fillText,"function"))},k.webgl=function(){return!!o.WebGLRenderingContext},k.touch=function(){var t;return"ontouchstart"in o||o.DocumentTouch&&d instanceof DocumentTouch?t=!0:l(["@media (",w.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){t=9===e.offsetTop}),t},k.geolocation=function(){return"geolocation"in navigator},k.postmessage=function(){return!!o.postMessage},k.websqldatabase=function(){return!!o.openDatabase},k.indexedDB=function(){return!!s("indexedDB",o)},k.hashchange=function(){return L("hashchange",o)&&(d.documentMode===a||7<d.documentMode)},k.history=function(){return!(!o.history||!history.pushState)},k.draganddrop=function(){var e=d.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},k.websockets=function(){return"WebSocket"in o||"MozWebSocket"in o},k.rgba=function(){return t("background-color:rgba(150,255,150,.5)"),r(h.backgroundColor,"rgba")},k.hsla=function(){return t("background-color:hsla(120,40%,100%,.5)"),r(h.backgroundColor,"rgba")||r(h.backgroundColor,"hsla")},k.multiplebgs=function(){return t("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(h.background)},k.backgroundsize=function(){return s("backgroundSize")},k.borderimage=function(){return s("borderImage")},k.borderradius=function(){return s("borderRadius")},k.boxshadow=function(){return s("boxShadow")},k.textshadow=function(){return""===d.createElement("div").style.textShadow},k.opacity=function(){return t(w.join("opacity:.55;")+""),/^0.55$/.test(h.opacity)},k.cssanimations=function(){return s("animationName")},k.csscolumns=function(){return s("columnCount")},k.cssgradients=function(){var e="background-image:";return t((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+w.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),r(h.backgroundImage,"gradient")},k.cssreflections=function(){return s("boxReflect")},k.csstransforms=function(){return!!s("transform")},k.csstransforms3d=function(){var t=!!s("perspective");return t&&"webkitPerspective"in m.style&&l("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},k.csstransitions=function(){return s("transition")},k.fontface=function(){var i;return l('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=d.getElementById("smodernizr"),o=n.sheet||n.styleSheet,r=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";i=/src/i.test(r)&&0===r.indexOf(t.split(" ")[0])}),i},k.generatedcontent=function(){var t;return l(["#",v,"{font:0/0 a}#",v,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=3<=e.offsetHeight}),t},k.video=function(){var e=d.createElement("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return t},k.audio=function(){var e=d.createElement("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t},k.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},k.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},k.webworkers=function(){return!!o.Worker},k.applicationcache=function(){return!!o.applicationCache},k.svg=function(){return!!d.createElementNS&&!!d.createElementNS($,"svg").createSVGRect},k.inlinesvg=function(){var e=d.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==$},k.smil=function(){return!!d.createElementNS&&/SVGAnimate/.test(y.call(d.createElementNS($,"animate")))},k.svgclippaths=function(){return!!d.createElementNS&&/SVGClipPath/.test(y.call(d.createElementNS($,"clipPath")))},k)u(k,j)&&(e=j.toLowerCase(),p[e]=k[j](),_.push((p[e]?"":"no-")+e));return p.input||(p.input=function(e){for(var t=0,n=e.length;t<n;t++)S[e[t]]=!!(e[t]in g);return S.list&&(S.list=!(!d.createElement("datalist")||!o.HTMLDataListElement)),S}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var t,n,o,r=0,i=e.length;r<i;r++)g.setAttribute("type",n=e[r]),(t="text"!==g.type)&&(g.value=b,g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&g.style.WebkitAppearance!==a?(m.appendChild(g),t=(o=d.defaultView).getComputedStyle&&"textfield"!==o.getComputedStyle(g,null).WebkitAppearance&&0!==g.offsetHeight,m.removeChild(g)):/^(search|tel)$/.test(n)||(t=/^(url|email)$/.test(n)?g.checkValidity&&!1===g.checkValidity():g.value!=b)),T[e[r]]=!!t;return T}("search tel url email datetime date month week time datetime-local number range color".split(" "))),p.addTest=function(e,t){if("object"==typeof e)for(var n in e)u(e,n)&&p.addTest(n,e[n]);else{if(e=e.toLowerCase(),p[e]!==a)return p;t="function"==typeof t?t():t,m.className+=" "+(t?"":"no-")+e,p[e]=t}return p},t(""),n=g=null,function(e,s){function l(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function u(e){var t=c[e[o]];return t||(t={},a++,e[o]=a,c[a]=t),t}function d(e,t,n){return t=t||s,p?t.createElement(e):!(o=(n=n||u(t)).cache[e]?n.cache[e].cloneNode():i.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||r.test(e)||o.tagUrn?o:n.frag.appendChild(o);var o}function t(e){var t,n,o,r,i,a,c=u(e=e||s);return!m.shivCSS||f||c.hasCSS||(c.hasCSS=(r="article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}",i=(o=e).createElement("p"),a=o.getElementsByTagName("head")[0]||o.documentElement,i.innerHTML="x<style>"+r+"</style>",!!a.insertBefore(i.lastChild,a.firstChild))),p||(t=e,(n=c).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return m.shivMethods?d(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/[\w\-]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(m,n.frag)),e}var f,p,n=e.html5||{},r=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,o="_html5shiv",a=0,c={};!function(){try{var e=s.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,p=1==e.childNodes.length||function(){s.createElement("a");var e=s.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){p=f=!0}}();var m={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==n.shivCSS,supportsUnknownElements:p,shivMethods:!1!==n.shivMethods,type:"default",shivDocument:t,createElement:d,createDocumentFragment:function(e,t){if(e=e||s,p)return e.createDocumentFragment();for(var n=(t=t||u(e)).frag.cloneNode(),o=0,r=l(),i=r.length;o<i;o++)n.createElement(r[o]);return n}};e.html5=m,t(s)}(this,d),p._version="2.8.3",p._prefixes=w,p._domPrefixes=C,p._cssomPrefixes=x,p.mq=function(e){var t,n=o.matchMedia||o.msMatchMedia;return n?n(e)&&n(e).matches||!1:(l("@media "+e+" { #"+v+" { position: absolute; } }",function(e){t="absolute"==(o.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),t)},p.hasEvent=L,p.testProp=function(e){return c([e])},p.testAllProps=s,p.testStyles=l,p.prefixed=function(e,t,n){return t?s(e,t,n):s(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js "+_.join(" ")),p}(this,this.document);