(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-686ae0c0"],{"0e04":function(a,t,r){"use strict";var e=r("11c8"),s=r.n(e);s.a},"11c8":function(a,t,r){},"87cc":function(a,t,r){"use strict";var e=r("beb4"),s=r.n(e);s.a},"8ea4":function(a,t,r){"use strict";r.r(t);var e=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"main",attrs:{id:"square-id"}},[r("Scroll",{attrs:{"on-reach-bottom":a.handleReachBottom,height:a.scrollHeight,"loading-text":a.$t("square.a1")}},a._l(a.favoriteList,function(t){return r("div",{staticClass:"card"},[r("el-row",[r("el-col",{attrs:{span:4}},[r("img",{attrs:{src:a._f("handleIconUrl")(t.icon,t.url)}})]),r("el-col",{staticClass:"left",attrs:{span:8}},a._l(t.tags,function(t){return r("span",{staticClass:"tag"},[a._v(a._s(t))])}),0),r("el-col",{staticClass:"right",attrs:{span:11,offset:1}},[r("div",{staticClass:"title"},[r("a",{attrs:{href:t.url,target:"_blank"}},[a._v(a._s(t.title))])]),r("div",{staticClass:"info"},[r("el-row",[r("el-col",{attrs:{span:10,offset:0}},[r("router-link",{attrs:{to:t.username,target:"_blank"}},[r("el-avatar",{staticClass:"avatar",attrs:{size:20,src:t.avatar_url},on:{error:!0}},[r("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})])],1),a._v("\n              "+a._s(t.full_name)+" "),r("Time",{attrs:{time:t.update_time}})],1),r("el-col",{attrs:{span:2,offset:12}},[r("i",{staticClass:"el-icon-star-off"})])],1)],1)])],1)],1)}),0),a.loading?a._e():r("div",{staticClass:"recommend-arrow"},[r("i",{class:[a.recommendClose?"el-icon-arrow-left":"el-icon-arrow-right"],on:{click:function(t){a.recommendClose=!a.recommendClose}}})]),r("Card",{class:{"recommend-card":!0,close:a.recommendClose},attrs:{"dis-hover":""}},[r("p",{attrs:{slot:"title"},slot:"title"},[r("Icon",{attrs:{type:"md-people"}}),a._v("\n      "+a._s(a.$t("square.a2"))+"\n    ")],1),r("ul",a._l(a.recommendList,function(t){return r("li",[r("router-link",{attrs:{to:t.url,target:"_blank"}},[r("el-avatar",{attrs:{size:20,src:t.avatar},on:{error:!0}},[r("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})]),r("div",{staticClass:"recommend-user"},[a._v(a._s(t.username))])],1),r("span",{staticClass:"recommend-span"},[a._l(Math.floor(t.star),function(a){return r("Icon",{attrs:{type:"ios-star"}})}),t.star.toString().indexOf(".")>-1?r("Icon",{attrs:{type:"ios-star-half"}}):a._e(),a._l(5-Math.round(t.star),function(a){return r("Icon",{attrs:{type:"ios-star-outline"}})}),r("span",[a._v(a._s(a._f("handleStar")(t.star)))])],2)],1)}),0)])],1)},s=[],i=r("eaab"),o=r("4e13"),n={name:"Square",data(){return{favoriteList:[],loading:!0,page:0,size:20,scrollHeight:0,recommendClose:!0,recommendList:[{username:"回形针",url:"PaperClip",avatar:"http://mykg.oss-cn-beijing.aliyuncs.com/avatar/PaperClip/1566374361000",star:5},{username:"局部",url:"Jubu",avatar:"http://mykg.oss-cn-beijing.aliyuncs.com/avatar/Jubu/1566552244000",star:4},{username:"YCSS",url:"yc",avatar:"http://mykg.oss-cn-beijing.aliyuncs.com/avatar/mykg/1566284938000",star:3.5},{username:"李永乐老师",url:"LiYongle",avatar:"",star:2.5},{username:"圆桌派",url:"Pi",avatar:"http://mykg.oss-cn-beijing.aliyuncs.com/avatar/Pi/1568006958000",star:5}]}},filters:{handleStar(a){return a.toString().indexOf(".")>-1?a:a+".0"},handleIconUrl(a,t){var r=!1;for(var e in i["b"])if(t.indexOf(e)>-1){a=i["b"][e],r=!0;break}return r||null!=a&&""!=a?(a.indexOf("http:")>-1?a=a.split("http:")[0]:a.indexOf("https:")>-1&&(a=a.split("https:")[1]),a):""}},props:["homeActive"],beforeMount(){},mounted(){this.scrollHeight=document.getElementById("square-id").offsetHeight-40,this.$axios.get(o["a"].url+`/square?page=${this.page}&size=${this.size}`).then(a=>{this.favoriteList=a.data,this.favoriteList.forEach(a=>a.tags=a.userTags.concat(a.sysTags)),this.loading=!1})},methods:{handleReachBottom(){return new Promise(a=>{this.page+=1,setTimeout(()=>{this.$axios.get(o["a"].url+`/square?page=${this.page}&size=${this.size}`).then(t=>{var r=t.data;r.forEach(a=>{a.tags=a.userTags.concat(a.sysTags)}),0==r.length?this.$message.warning(this.$t("square.b1")):this.favoriteList=this.favoriteList.concat(r),a()}).catch(t=>{a(),console.log(t)})},700)})}}},c=n,l=(r("0e04"),r("87cc"),r("17cc")),u=Object(l["a"])(c,e,s,!1,null,"9ed85ac2",null);t["default"]=u.exports},beb4:function(a,t,r){},eaab:function(a,t,r){"use strict";r.d(t,"b",function(){return e}),r.d(t,"a",function(){return s});const e={"weibo.com":"//www.weibo.com/favicon.ico","bilibili.com":"//mykg.oss-cn-beijing.aliyuncs.com/url-icon/bilibili.ico","iqiyi.com":"//mykg.oss-cn-beijing.aliyuncs.com/url-icon/iqiyi.ico","ximalaya.com":"//mykg.oss-cn-beijing.aliyuncs.com/url-icon/ximalaya.png","startupschool.org":"//www.startupschool.org/favicon.ico"},s={"weibo.com":"rgba(250,125,60, 0.8)","bilibili.com":"rgba(255,175,201, 1)","jianshu.com":"rgba(234,111,90, 0.8)","mykg.ai":"rgba(255,193,203, 1)","douban.com":"rgba(236,246,237, 1)","zhihu.com":"rgba(0,132,255, 0.6)","mp.weixin.qq.com":"rgba(68,181,73, 0.6)","iqiyi.com":"rgba(0,190,6, 0.6)","artsandculture.google.com":"rgba(26,115,232, 0.8)","readhub.cn":"rgba(36,99,148, 0.8)","wikiwand.com":"rgba(240,240,240, 0.9)","wikipedia.org":"rgba(240,240,240, 0.9)","dianping.com":"rgba(255,107,55,0.8)","v.qq.com":"rgba(102,102,102,0.8)","youku.com":"rgba(20,138,255,0.8)","medium.com":"rgba(215,239,238,0.9)","wanqu.co":"rgba(221,72,20,0.6)","ipaperclip.net":"rgba(38,38,38,0.6)","dribbble.com":"rgba(246,79,144,0.5)",urbandictionary:"rgba(44,53,60,0.6)","36kr.com":"rgba(66,133,244,0.8)","xiaohongshu.com":"rgba(255,36,66,0.8)","reddit.com":"rgba(255,69,0,0.9)","rottentomatoes.com":"rgba(250,50,10,0.8)","quora.com":"rgba(185,43,39,0.8)","imdb.com":"rgba(245,197,24,0.8)","ximalaya.com":"rgba(248,100,66,0.8)","youtube.com":"rgba(255,0,0,0.5)","startupschool.org":"rgba(240,104,39, 0.6)"}}}]);