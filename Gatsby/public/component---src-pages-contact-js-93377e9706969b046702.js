(self.webpackChunkgatsby_tailwind_simplicity_theme=self.webpackChunkgatsby_tailwind_simplicity_theme||[]).push([[501],{2885:function(t){t.exports=function(){function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t){var n=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=e(t)))return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}var i="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function o(t){var e=t.split("-"),n=e[1],r=e[2],o=e[3];if(!n||!r||!o)throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+i+'".');var a=r.split("x"),s=+a[0],h=+a[1];if(!isFinite(s)||!isFinite(h))throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+i+'".');return{id:n,width:s,height:h,format:o}}var a=function(t){return!!t&&"string"==typeof t._ref},s=function(t){return!!t&&"string"==typeof t._id},h=function(t){var e=t;return!(!e||!e.asset)&&"string"==typeof e.asset.url};function c(t){if(!t)return null;var e;if("string"==typeof t&&l(t))e={asset:{_ref:u(t)}};else if("string"==typeof t)e={asset:{_ref:t}};else if(a(t))e={asset:t};else if(s(t))e={asset:{_ref:t._id||""}};else if(h(t))e={asset:{_ref:u(t.asset.url)}};else{if("object"!=typeof t.asset)return null;e=t}var n=t;return n.crop&&(e.crop=n.crop),n.hotspot&&(e.hotspot=n.hotspot),f(e)}function l(t){return/^https?:\/\//.test(""+t)}function u(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function f(e){if(e.crop&&e.hotspot)return e;var n=t({},e);return n.crop||(n.crop={left:0,top:0,bottom:0,right:0}),n.hotspot||(n.hotspot={x:.5,y:.5,height:1,width:1}),n}var p=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function d(e){var n=t({},e||{}),r=n.source;delete n.source;var i=c(r);if(!i)return null;var a=o(i.asset._ref||i.asset._id||""),s=Math.round(i.crop.left*a.width),h=Math.round(i.crop.top*a.height),l={left:s,top:h,width:Math.round(a.width-i.crop.right*a.width-s),height:Math.round(a.height-i.crop.bottom*a.height-h)},u=i.hotspot.height*a.height/2,f=i.hotspot.width*a.width/2,p=i.hotspot.x*a.width,d=i.hotspot.y*a.height,g={left:p-f,top:d-u,right:p+f,bottom:d+u};return n.rect||n.focalPoint||n.ignoreImageParams||n.crop||(n=t(t({},n),w({crop:l,hotspot:g},n))),m(t(t({},n),{},{asset:a}))}function m(t){var e=t.baseUrl||"https://cdn.sanity.io",n=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,r=e+"/images/"+t.projectId+"/"+t.dataset+"/"+n,i=[];if(t.rect){var o=t.rect,a=o.left,s=o.top,h=o.width,c=o.height;(0!==a||0!==s||c!==t.asset.height||h!==t.asset.width)&&i.push("rect="+a+","+s+","+h+","+c)}t.bg&&i.push("bg="+t.bg),t.focalPoint&&(i.push("fp-x="+t.focalPoint.x),i.push("fp-y="+t.focalPoint.y));var l=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return l&&i.push("flip="+l),p.forEach((function(e){var n=e[0],r=e[1];void 0!==t[n]?i.push(r+"="+encodeURIComponent(t[n])):void 0!==t[r]&&i.push(r+"="+encodeURIComponent(t[r]))})),0===i.length?r:r+"?"+i.join("&")}function w(t,e){var n,r=e.width,i=e.height;if(!r||!i)return{width:r,height:i,rect:t.crop};var o=t.crop,a=t.hotspot,s=r/i;if(o.width/o.height>s){var h=o.height,c=h*s,l=o.top,u=(a.right-a.left)/2+a.left-c/2;u<o.left?u=o.left:u+c>o.left+o.width&&(u=o.left+o.width-c),n={left:Math.round(u),top:Math.round(l),width:Math.round(c),height:Math.round(h)}}else{var f=o.width,p=f/s,d=o.left,m=(a.bottom-a.top)/2+a.top-p/2;m<o.top?m=o.top:m+p>o.top+o.height&&(m=o.top+o.height-p),n={left:Math.max(0,Math.floor(d)),top:Math.max(0,Math.floor(m)),width:Math.round(f),height:Math.round(p)}}return{width:r,height:i,rect:n}}var g=["clip","crop","fill","fillmax","max","scale","min"],v=["top","bottom","left","right","center","focalpoint","entropy"],b=["format"];function x(t){return!!t&&"object"==typeof t.clientConfig}function y(t){for(var e,n=r(p);!(e=n()).done;){var i=e.value,o=i[0],a=i[1];if(t===o||t===a)return o}return t}function O(t){var e=t;if(x(e)){var n=e.clientConfig,r=n.apiHost,i=n.projectId,o=n.dataset;return new E(null,{baseUrl:(r||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:i,dataset:o})}return new E(null,t)}var E=function(){function e(e,n){this.options=t(e?t({},e.options||{}):{},n||{})}var n=e.prototype;return n.withOptions=function(n){var r=n.baseUrl||this.options.baseUrl,i={baseUrl:r};for(var o in n)n.hasOwnProperty(o)&&(i[y(o)]=n[o]);return new e(this,t({baseUrl:r},i))},n.image=function(t){return this.withOptions({source:t})},n.dataset=function(t){return this.withOptions({dataset:t})},n.projectId=function(t){return this.withOptions({projectId:t})},n.bg=function(t){return this.withOptions({bg:t})},n.dpr=function(t){return this.withOptions({dpr:t})},n.width=function(t){return this.withOptions({width:t})},n.height=function(t){return this.withOptions({height:t})},n.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},n.maxWidth=function(t){return this.withOptions({maxWidth:t})},n.minWidth=function(t){return this.withOptions({minWidth:t})},n.maxHeight=function(t){return this.withOptions({maxHeight:t})},n.minHeight=function(t){return this.withOptions({minHeight:t})},n.size=function(t,e){return this.withOptions({width:t,height:e})},n.blur=function(t){return this.withOptions({blur:t})},n.sharpen=function(t){return this.withOptions({sharpen:t})},n.rect=function(t,e,n,r){return this.withOptions({rect:{left:t,top:e,width:n,height:r}})},n.format=function(t){return this.withOptions({format:t})},n.invert=function(t){return this.withOptions({invert:t})},n.orientation=function(t){return this.withOptions({orientation:t})},n.quality=function(t){return this.withOptions({quality:t})},n.forceDownload=function(t){return this.withOptions({download:t})},n.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},n.flipVertical=function(){return this.withOptions({flipVertical:!0})},n.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},n.fit=function(t){if(-1===g.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},n.crop=function(t){if(-1===v.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},n.saturation=function(t){return this.withOptions({saturation:t})},n.auto=function(t){if(-1===b.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},n.pad=function(t){return this.withOptions({pad:t})},n.url=function(){return d(this.options)},n.toString=function(){return this.url()},e}();return O}()},262:function(t,e,n){"use strict";n.r(e);var r=n(7294),i=n(1072),o=n.n(i),a=(n(2327),n(2335)),s=n(5475);e.default=function(t){var e=t.data,n=e.contactData,i=e.description;return console.log(e),r.createElement(r.Fragment,null,r.createElement(a.Z,{title:"Contact Us"}),r.createElement("div",{className:"py-12"},r.createElement("div",{className:"container py-6"},r.createElement("h1",{className:"py-4 text-center text-primary font-slim text-brown"},"Contact Us"),r.createElement("div",{className:"flex flex-col md:flex-row"},r.createElement("div",{className:"flex flex-col sm:mb-10 order-2 justify-center md:w-1/2"},r.createElement(s.Z,{containerStyles:"py-8 bg-turquoise-blue-500 rounded-md",formContainerStyles:"container px-5 mx-auto ",animation:"",duration:"",delay:"",easing:""})),r.createElement("div",{className:"flex flex-col w-full order-1 px-4 md:px-0 mb-8 md:mb-0 sm:mr-2 sm:order-1  md:justify-start md:w-1/2"},r.createElement("div",{className:"flex flex-col"},r.createElement("div",null,r.createElement(o(),{className:"prose prose-sm prose-black mb-6",blocks:i._rawDescription,projectId:"wgpo4u84",dataset:"production"})),r.createElement("div",{className:" flex flex-col mb-6"},n.contactInfo.address?r.createElement("a",{className:"no-underline mb-1 font-secondary text-black text-md",href:n.contactInfo.addressURL}," ",n.contactInfo.address):"",n.contactInfo.phoneNumber?r.createElement("a",{className:"no-underline mb-1 font-secondary text-black text-md",href:"tel:+"+n.contactInfo.phoneNumber},n.contactInfo.phoneNumber):"",n.contactInfo.email?r.createElement("a",{className:"no-underline mb-1 font-secondary text-black text-md",href:"mailto:"+n.contactInfo.email},n.contactInfo.email):"")),r.createElement("div",{className:"flex flex-row"},n.socialMedia.facebook?r.createElement("a",{href:n.socialMedia.facebook},r.createElement("svg",{className:"w-6 h-6 mr-4 fill-current text-black hover:text-turquoise-blue-500",viewBox:"0 0 512 512"},r.createElement("path",{d:"M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"}))):"",n.socialMedia.email?r.createElement("a",{href:"mailto:"+n.socialMedia.email},r.createElement("svg",{fill:"none",className:"w-6 h-6 mr-4 text-black hover:text-turquoise-blue-500",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}))):""))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-93377e9706969b046702.js.map