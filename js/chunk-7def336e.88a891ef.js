(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7def336e"],{"013c":function(t,e,i){"use strict";var r=i("5016"),a=i.n(r);a.a},"490a":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],class:["main",t.homeActive.theme],attrs:{id:"FavoriteList-id"}},[i("Drawer",{staticClass:"drawer",attrs:{title:t.$t("favoriteList.a1"),closable:"","mask-closable":!1,"before-close":t.beforeCloseDrawer},on:{"on-close":t.closeDrawer},model:{value:t.drawerOn,callback:function(e){t.drawerOn=e},expression:"drawerOn"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.clickCheckTag,expression:"clickCheckTag"}],attrs:{slot:"close"},slot:"close"},[i("Icon",{staticClass:"check",attrs:{type:"ios-checkmark"},on:{click:t.checkTags}}),i("Icon",{attrs:{type:"ios-close"}})],1),i("div",{staticClass:"add-favorite"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("favoriteList.a2")))]),i("el-input",{attrs:{"suffix-icon":"el-icon-plus",placeholder:t.$t("favoriteList.a3")},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTag(e)}},model:{value:t.activeDrawer.input,callback:function(e){t.$set(t.activeDrawer,"input",e)},expression:"activeDrawer.input"}})],1),i("div",{staticClass:"user-favorite"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("favoriteList.a4")))]),t._l(t.activeDrawer.userTags,function(e,r){return i("div",{staticClass:"item"},[t._v("\n        "+t._s(e)),i("i",{staticClass:"el-icon-close",on:{click:function(e){return t.removeTag("userTags",r)}}})])})],2),i("div",{staticClass:"sys-favorite"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("favoriteList.a5")))]),t._l(t.activeDrawer.sysTags,function(e,r){return i("div",{staticClass:"item"},[t._v("\n        "+t._s(e)),i("i",{staticClass:"el-icon-close",on:{click:function(e){return t.removeTag("sysTags",r)}}})])})],2),i("div",{staticClass:"title-favorite"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("favoriteList.a6")))]),i("el-input",{attrs:{type:"textarea",maxlength:"50","show-word-limit":"",rows:2},model:{value:t.activeDrawer.title,callback:function(e){t.$set(t.activeDrawer,"title",e)},expression:"activeDrawer.title"}})],1),i("div",{staticClass:"description-favorite"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("favoriteList.a7")))]),i("el-input",{attrs:{type:"textarea",maxlength:"200","show-word-limit":"",rows:5},model:{value:t.activeDrawer.description,callback:function(e){t.$set(t.activeDrawer,"description",e)},expression:"activeDrawer.description"}})],1)]),t._l(t.favoriteList,function(e,r){return i("el-card",{class:{card:!0,active:e.url==t.activeDrawer.url},attrs:{shadow:"hover"}},[i("div",{staticClass:"top",style:t._f("handleIconBg")(e.url)},[i("img",{attrs:{src:t._f("handleIconUrl")(e.icon,e.url)}}),i("a",{attrs:{href:e.url,target:"_blank"}},[i("div",{staticClass:"title"},[t._v(t._s(e.url))])]),i("i",{staticClass:"el-icon-edit icon",on:{click:function(i){return t.editFavorite(e,r)}}}),i("i",{staticClass:"el-icon-delete icon",on:{click:function(i){return t.deleteFavorite(e.url,r)}}})]),i("div",{staticClass:"middle"},[t._l(e.userTags,function(e){return i("div",{staticClass:"item user-tag"},[t._v(t._s(e))])}),t._l(e.sysTags,function(e){return i("div",{staticClass:"item sys-tag"},[t._v(t._s(e))])})],2),i("div",{staticClass:"bottom"},[i("div",{class:{left:!0,img:"extra"in e&&"image"in e.extra&&""!=e.extra.image}},[i("div",{staticClass:"title"},[t._v(t._s(e.title))]),i("div",{staticClass:"description"},[t._v(t._s(e.description))])]),"extra"in e&&"image"in e.extra&&""!=e.extra.image?i("div",{staticClass:"right"},[i("img",{attrs:{src:e.extra.image}})]):t._e()])])}),t.loading||0!=t.favoriteList.length?t._e():i("div",{staticStyle:{"margin-top":"200px"}},[i("Button",{staticStyle:{"font-size":"53px",width:"80px",height:"80px","margin-bottom":"20px"},attrs:{shape:"circle",icon:"logo-freebsd-devil"}}),i("br"),i("b",{staticStyle:{"font-size":"30px"}},[t._v("404")]),i("br"),i("br"),i("span",{staticStyle:{"font-size":"16px"}},[t._v("\n      "+t._s(t.$t("favorite.c1"))+"\n    ")]),i("br"),i("br")],1)],2)},a=[],n=i("b93b"),o=i.n(n);const s={"weibo.com":"//www.weibo.com/favicon.ico","bilibili.com":"//mykg.oss-cn-beijing.aliyuncs.com/url-icon/bilibili.ico","iqiyi.com":"//mykg.oss-cn-beijing.aliyuncs.com/url-icon/iqiyi.ico","ximalaya.com":"//mykg.oss-cn-beijing.aliyuncs.com/url-icon/ximalaya.png","startupschool.org":"//www.startupschool.org/favicon.ico"},c={"weibo.com":"rgba(250,125,60, 0.8)","bilibili.com":"rgba(255,175,201, 1)","jianshu.com":"rgba(234,111,90, 0.8)","mykg.ai":"rgba(255,193,203, 1)","douban.com":"rgba(236,246,237, 1)","zhihu.com":"rgba(0,132,255, 0.6)","mp.weixin.qq.com":"rgba(68,181,73, 0.6)","iqiyi.com":"rgba(0,190,6, 0.6)","artsandculture.google.com":"rgba(26,115,232, 0.8)","readhub.cn":"rgba(36,99,148, 0.8)","wikiwand.com":"rgba(240,240,240, 0.9)","wikipedia.org":"rgba(240,240,240, 0.9)","dianping.com":"rgba(255,107,55,0.8)","v.qq.com":"rgba(102,102,102,0.8)","youku.com":"rgba(20,138,255,0.8)","medium.com":"rgba(215,239,238,0.9)","wanqu.co":"rgba(221,72,20,0.6)","ipaperclip.net":"rgba(38,38,38,0.6)","dribbble.com":"rgba(246,79,144,0.5)",urbandictionary:"rgba(44,53,60,0.6)","36kr.com":"rgba(66,133,244,0.8)","xiaohongshu.com":"rgba(255,36,66,0.8)","reddit.com":"rgba(255,69,0,0.9)","rottentomatoes.com":"rgba(250,50,10,0.8)","quora.com":"rgba(185,43,39,0.8)","imdb.com":"rgba(245,197,24,0.8)","ximalaya.com":"rgba(248,100,66,0.8)","youtube.com":"rgba(255,0,0,0.5)","startupschool.org":"rgba(240,104,39, 0.6)"};var l=i("4e13"),u={name:"FavoriteList",data(){return{favoriteList:[],drawerOn:!1,activeDrawer:{userTags:[],sysTags:[],url:"",input:"",title:"",description:"",index:-1},loading:!0,clickCheckTag:!1}},props:["homeActive"],watch:{$route(t,e){this.changeRoute(t)}},filters:{handleIconUrl(t,e){var i=!1;for(var r in s)if(e.indexOf(r)>-1){t=s[r],i=!0;break}return i||null!=t&&""!=t?(t.indexOf("http:")>-1?t=t.split("http:")[0]:t.indexOf("https:")>-1&&(t=t.split("https:")[1]),t):""},handleIconBg(t){for(var e in c)if(t.indexOf(e)>-1)return"background:"+c[e]+" !important";return"background:rgba(220,220,220, 1)"}},mounted(){this.changeRoute(this.$route)},methods:{removeTag(t,e){this.activeDrawer[t].splice(e,1)},checkTags(){this.clickCheckTag=!0},addTag(){if(""!=this.activeDrawer.input){var t=this.activeDrawer.input.trim().split(/\s+/);1==t.length&&""==t[0]||(this.activeDrawer.userTags=Array.from(new Set(this.activeDrawer.userTags.concat(t))),this.activeDrawer.input="")}},editFavorite(t,e){this.drawerOn=!0,this.clickCheckTag=!1,this.activeDrawer={userTags:o()(t.userTags),sysTags:o()(t.sysTags),url:o()(t.url),input:"",title:o()(t.title),description:o()(t.description),index:e}},beforeCloseDrawer(){return new Promise((t,e)=>{this.clickCheckTag?this.$axios.post(l["a"].url+"/favorite/update",{url:this.activeDrawer.url,userTags:this.activeDrawer.userTags.join(","),sysTags:this.activeDrawer.sysTags.join(","),title:this.activeDrawer.title,description:this.activeDrawer.description}).then(e=>{this.favoriteList[this.activeDrawer.index].userTags=this.activeDrawer.userTags,this.favoriteList[this.activeDrawer.index].sysTags=this.activeDrawer.sysTags,this.favoriteList[this.activeDrawer.index].title=this.activeDrawer.title,this.favoriteList[this.activeDrawer.index].description=this.activeDrawer.description,this.$message.success(this.$t("favoriteList.b1")),t()}).catch(t=>{this.clickCheckTag=!1,this.$message.error(this.$t("favoriteList.b2")),e()}):t()})},closeDrawer(){this.activeDrawer={userTags:[],sysTags:[],url:"",input:"",index:-1}},deleteFavorite(t,e){this.$confirm(this.$t("favoriteList.b3"),this.$t("favoriteList.b4"),{confirmButtonText:this.$t("favoriteList.b5"),cancelButtonText:this.$t("favoriteList.b6"),type:"warning"}).then(()=>{this.$axios.delete(l["a"].url+"/favorite",{url:t}).then(t=>{this.favoriteList.splice(e,1),this.$message.success(this.$t("favoriteList.b7"))}).catch(t=>{this.$message.error(this.$t("favoriteList.b8"))})}).catch(()=>{this.$message.info(this.$t("favoriteList.b9"))})},changeRoute(t){this.loading=!0,this.homeActive.isLogin||this.$router.push({path:"/login"}),"q"in this.$route.query||this.$router.push({path:"/favorite"}),this.$axios.get(l["a"].url+"/favorite/search?keywords="+this.$route.query.q).then(t=>{this.favoriteList=t.data,this.loading=!1}).catch(t=>this.loading=!1)}}},f=u,d=(i("013c"),i("98a1"),i("f6b3"),i("17cc")),p=Object(d["a"])(f,r,a,!1,null,"07036c31",null);e["default"]=p.exports},5016:function(t,e,i){},8369:function(t,e,i){},"98a1":function(t,e,i){"use strict";var r=i("8369"),a=i.n(r);a.a},abbe:function(t,e,i){},b93b:function(t,e,i){(function(e,i){
/*!
 * @license deepcopy.js Copyright(c) 2013 sasa+1
 * https://github.com/sasaplus1/deepcopy.js
 * Released under the MIT license.
 *
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
(function(e,i){t.exports=i()})(0,function(){"use strict";var t="undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function r(t,e){return e={exports:{}},t(e,e.exports),e.exports}var a=r(function(e,i){(function(t,i){e.exports=i()})(0,function(){var e="function"===typeof Promise,i="object"===typeof self?self:t,r="undefined"!==typeof Symbol,a="undefined"!==typeof Map,n="undefined"!==typeof Set,o="undefined"!==typeof WeakMap,s="undefined"!==typeof WeakSet,c="undefined"!==typeof DataView,l=r&&"undefined"!==typeof Symbol.iterator,u=r&&"undefined"!==typeof Symbol.toStringTag,f=n&&"function"===typeof Set.prototype.entries,d=a&&"function"===typeof Map.prototype.entries,p=f&&Object.getPrototypeOf((new Set).entries()),g=d&&Object.getPrototypeOf((new Map).entries()),v=l&&"function"===typeof Array.prototype[Symbol.iterator],b=v&&Object.getPrototypeOf([][Symbol.iterator]()),m=l&&"function"===typeof String.prototype[Symbol.iterator],h=m&&Object.getPrototypeOf(""[Symbol.iterator]()),y=8,w=-1;function k(t){var r=typeof t;if("object"!==r)return r;if(null===t)return"null";if(t===i)return"global";if(Array.isArray(t)&&(!1===u||!(Symbol.toStringTag in t)))return"Array";if("object"===typeof window&&null!==window){if("object"===typeof window.location&&t===window.location)return"Location";if("object"===typeof window.document&&t===window.document)return"Document";if("object"===typeof window.navigator){if("object"===typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"===typeof window.HTMLElement||"object"===typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var l=u&&t[Symbol.toStringTag];if("string"===typeof l)return l;var f=Object.getPrototypeOf(t);return f===RegExp.prototype?"RegExp":f===Date.prototype?"Date":e&&f===Promise.prototype?"Promise":n&&f===Set.prototype?"Set":a&&f===Map.prototype?"Map":s&&f===WeakSet.prototype?"WeakSet":o&&f===WeakMap.prototype?"WeakMap":c&&f===DataView.prototype?"DataView":a&&f===g?"Map Iterator":n&&f===p?"Set Iterator":v&&f===b?"Array Iterator":m&&f===h?"String Iterator":null===f?"Object":Object.prototype.toString.call(t).slice(y,w)}return k})});const n="undefined"!==typeof i,o=n&&"undefined"!==typeof i.from,s=n?function(t){return i.isBuffer(t)}:function(){return!1},c=o?function(t){return i.from(t)}:n?function(t){return new i(t)}:function(t){return t};function l(t){return s(t)?"Buffer":a(t)}const u=new Set(["Arguments","Array","Map","Object","Set"]);function f(t,e,i=null){const r=i||l(t);switch(r){case"Arguments":case"Array":case"Object":return t[e];case"Map":return t.get(e);case"Set":return e;default:}}function d(t){return u.has(t)}function p(t,e,i,r=null){const a=r||l(t);switch(a){case"Arguments":case"Array":case"Object":t[e]=i;break;case"Map":t.set(e,i);break;case"Set":t.add(i);break;default:}return t}const g="undefined"!==typeof globalThis&&null!==globalThis&&globalThis.Object===Object&&globalThis,v="undefined"!==typeof e&&null!==e&&e.Object===Object&&e,b="undefined"!==typeof self&&null!==self&&self.Object===Object&&self,m=g||v||b||Function("return this")();function h(t){return t.slice(0)}function y(t){return new Boolean(t.valueOf())}function w(t){return new DataView(t.buffer)}function k(t){return c(t)}function T(t){return new Date(t.getTime())}function x(t){return new Number(t)}function D(t){return new RegExp(t.source||"(?:)",t.flags)}function O(t){return new String(t)}function S(t,e){return m[e].from(t)}function C(t){return t}function _(){return[]}function j(){return new Map}function L(){return{}}function $(){return new Set}var A=new Map([["ArrayBuffer",h],["Boolean",y],["Buffer",k],["DataView",w],["Date",T],["Number",x],["RegExp",D],["String",O],["Float32Array",S],["Float64Array",S],["Int16Array",S],["Int32Array",S],["Int8Array",S],["Uint16Array",S],["Uint32Array",S],["Uint8Array",S],["Uint8ClampedArray",S],["Array Iterator",C],["Map Iterator",C],["Promise",C],["Set Iterator",C],["String Iterator",C],["function",C],["global",C],["WeakMap",C],["WeakSet",C],["boolean",C],["null",C],["number",C],["string",C],["symbol",C],["undefined",C],["Arguments",_],["Array",_],["Map",j],["Object",L],["Set",$]]);function M(){}function I(t,e=null,i=M){2===arguments.length&&"function"===typeof e&&(i=e,e=null);const r=e||l(t),a=A.get(r);if("Object"===r){const e=i(t,r);if(void 0!==e)return e}return a?a(t,r):t}function q(t,e={}){"function"===typeof e&&(e={customizer:e});const{customizer:i}=e,r=l(t);if(!d(r))return B(t,null,null,null,i);const a=I(t,r,i),n=new WeakMap([[t,a]]),o=new WeakSet([t]);return B(t,a,n,o,i)}function B(t,e,i,r,a){const n=l(t),o=I(t,n);if(!d(n))return o;let s;switch(n){case"Arguments":case"Array":s=Object.keys(t);break;case"Object":s=Object.keys(t),s.push(...Object.getOwnPropertySymbols(t));break;case"Map":case"Set":s=t.keys();break;default:}for(let c of s){const o=f(t,c,n);if(r.has(o))p(e,c,i.get(o),n);else{const t=l(o),s=I(o,t);d(t)&&(i.set(o,s),r.add(o)),p(e,c,B(o,s,i,r,a),n)}}return e}return q})}).call(this,i("66fa"),i("1c3f").Buffer)},f6b3:function(t,e,i){"use strict";var r=i("abbe"),a=i.n(r);a.a}}]);