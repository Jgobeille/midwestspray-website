/*! For license information please see component---src-templates-blog-post-js-48597287353e7aa36acf.js.LICENSE.txt */
(self.webpackChunkgatsby_tailwind_simplicity_theme=self.webpackChunkgatsby_tailwind_simplicity_theme||[]).push([[989],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},681:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var n,o=r(7294),a=(r(7479),r(2335)),i=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return i(t,e),t}(Error);function c(e,t){if(!e)throw new l(t)}function s(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}var u=r(5900),f=r.n(u),p=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),d=function(){return(d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},h=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(t){a(t)}}function l(e){try{c(n.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}c((n=n.apply(e,t||[])).next())}))},w=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},y=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},b=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},v=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function g(e,t,r){var n=t.height,o=t.width,a=m(t,["height","width"]),i=d({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),l=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(r)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),r(l))}catch(e){console.error(e)}}),1e3);return l}var O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,o=r.windowHeight,a=void 0===o?400:o,i=r.windowPosition,l=void 0===i?"windowCenter":i,c=r.windowWidth,s=void 0===c?550:c;g(e,d({height:a,width:s},"windowCenter"===l?b(s,a):v(s,a)),n)},t.handleClick=function(e){return h(t,void 0,void 0,(function(){var t,r,n,o,a,i,l,c,s,u;return w(this,(function(f){switch(f.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,l=t.openShareDialogOnClick,c=t.opts,s=o(i,c),n?[2]:(e.preventDefault(),r?(u=r(),y(u)?[4,u]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return l&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return p(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,a=e.disabledStyle,i=e.forwardedRef,l=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,m(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=f()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),h=d(d(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),n&&a);return o.createElement("button",d({},u,{"aria-label":u["aria-label"]||l,className:p,onClick:this.handleClick,ref:i,style:h}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),k=function(){return(k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var j=function(e,t,r,n){function a(a,i){var l=r(a),c=k({},a);return Object.keys(l).forEach((function(e){delete c[e]})),o.createElement(O,k({},n,c,{forwardedRef:i,networkName:e,networkLink:t,opts:r(a)}))}return a.displayName="ShareButton-"+e,(0,o.forwardRef)(a)};var x=j("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return c(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+s({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),E=function(){return(E=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},S=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function C(e){var t=function(t){var r=t.bgStyle,n=t.borderRadius,a=t.iconFillColor,i=t.round,l=t.size,c=S(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.createElement("svg",E({viewBox:"0 0 64 64",width:l,height:l},c),i?o.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):o.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:e.color,style:r}),o.createElement("path",{d:e.path,fill:a}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var _=C({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var N=j("twitter",(function(e,t){var r=t.title,n=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,l=void 0===i?[]:i;return c(e,"twitter.url"),c(Array.isArray(a),"twitter.hashtags is not an array"),c(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+s({url:e,text:r,via:n,hashtags:a.length>0?a.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),P=C({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var z=j("email",(function(e,t){var r=t.subject,n=t.body,o=t.separator;return"mailto:"+s({subject:r,body:n?n+o+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),H=C({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"}),I=r(6802),A=r(1072),D=r.n(A),R=function(e){var t,r,n=e.data,i=e.location,l=n.post;return o.createElement(o.Fragment,null,o.createElement(a.Z,{title:l.title,description:l.description,image:l.mainImage,pathname:i.href}),o.createElement("div",{className:"flex-grow max-w-4xl px-4 mx-auto mt-10 lg:px-0"},o.createElement("div",{className:"flex flex-col md:flex-row"},o.createElement("div",{className:"w-full"},o.createElement(I.G,{className:"w-full mb-10 g-image g-image--lazy g-image--loaded",image:null===(t=l.mainImage)||void 0===t||null===(r=t.asset)||void 0===r?void 0:r.gatsbyImageData,key:l.id}),o.createElement("div",{className:"flex flex-col md:flex-row justify-between mb-8"},o.createElement("div",{className:"flex flex-col justify-evenly "},o.createElement("h1",{className:"mb-2 text-primary"},l.title),o.createElement("div",{className:"flex sm:flex-row"},l.categories.map((function(e){return o.createElement("span",{className:"w-20 mb-4 mr-2 text-white sm:w-auto prd-tag bg-celadon-blue-default "},e.title)})),l.tags.map((function(e){return o.createElement("span",{className:"hidden mb-4 mr-2 text-celadon-blue-dark bg-gray-100 md:block prd-tag"},"#"+e.value)})))),o.createElement("div",{className:"flex flex-row md:flex-col"},o.createElement(x,{className:"mr-2 mb-2 sm:mr-0",url:window.location.href+"/"+l.slug.current},o.createElement(_,{size:40,round:!0})),o.createElement(N,{className:"mr-2 mb-2 sm:mr-0",url:window.location.href+"/"+l.slug.current},o.createElement(P,{size:40,round:!0})),o.createElement(z,{className:"mb-2",url:window.location.href+"/"+l.slug.current},o.createElement(H,{size:40,round:!0})))),o.createElement("div",null,o.createElement(D(),{className:"prose prose-sm prose-black mb-6",blocks:l._rawBody,projectId:"wgpo4u84",dataset:"production"}))))))}},7479:function(e,t,r){"use strict";r.p}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-48597287353e7aa36acf.js.map