(function(e){function t(t){for(var a,i,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1:function(e,t){},"21bb":function(e,t,n){"use strict";var a=n("2dad"),r=n.n(a);r.a},"22de":function(e,t,n){"use strict";var a=n("8319"),r=n.n(a);r.a},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("034f"),n("2877")),s={},c=Object(i["a"])(s,r,o,!1,null,null,null),u=c.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("首頁")]),e._v("| "),n("router-link",{attrs:{to:"/collect"}},[e._v("收藏")])],1),n("router-view")],1)},d=[],f=(n("22de"),{}),g=Object(i["a"])(f,p,d,!1,null,null,null),v=g.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"search d-flex jc-center mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],attrs:{type:"text"},domProps:{value:e.searchText},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.clickSearch(t)},input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),n("span",{staticClass:"iconfont icon-search p-2 bg-light-1",on:{click:e.clickSearch}})]),n("div",{staticClass:"d-flex jc-center ai-center",attrs:{id:"condition"}},[e._v(" 各國的發燒影片: "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectRegion,expression:"selectRegion"}],staticClass:"ml-2 p-1",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectRegion=t.target.multiple?n:n[0]}}},e._l(e.regionList,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.snippet.name))])})),0)]),e.videos?n("videoCard",{attrs:{videos:e.videos}}):e._e(),n("div",{staticClass:"text-center"},[n("paginate",{ref:"Pagination",attrs:{"page-count":e.pageCount,"click-handler":e.jumpPage,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"}})],1)],1)},m=[],x=(n("a15b"),n("d81d"),n("5530")),b=(n("96cf"),n("1da1")),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.videos?n("div",{staticClass:"video-wrap m-3 d-flex flex-wrap"},e._l(e.videos,(function(t,a){return n("div",{key:a,staticClass:"video p-2 mb-4"},[n("div",{staticClass:"h-100"},[n("router-link",{attrs:{to:"/video",tag:"figure"}},[n("img",{attrs:{src:t.snippet.thumbnails.medium.url}}),n("span",{staticClass:"time m-1 p-1 fs-xxs"},[e._v(e._s(e.durationParser(t.contentDetails.duration)))])]),n("div",{staticClass:"d-flex p-1 ai-center"},[n("div",{staticClass:"title ellipsis two-line flex-1"},[e._v(e._s(t.snippet.title))]),n("span",{staticClass:"iconfont pl-2 icon-heart",class:{"icon-heart1":e.IsFav(t.id)},on:{click:function(n){return e.toggleFavorite(t.id)}}})]),n("div",{staticClass:"channel-title p-1"},[e._v(e._s(t.snippet.channelTitle))]),n("div",{staticClass:"d-flex p-1 flex-wrap"},[n("div",{staticClass:"updateTime"},[e._v("上傳日期: "+e._s(e.publishedByNow(t.snippet.publishedAt)))]),n("div",[e._v("觀看次數: "+e._s(e.views(t.statistics.viewCount)))])]),n("span",{staticClass:"iconfont icon-youtube d-iflex ai-center",on:{click:function(n){return e.toYoutube(t.id)}}},[n("span",{staticClass:"pl-2 text-info"},[e._v("前往youtube")])])],1)])})),0):e._e()},w=[],y=(n("caad"),n("c975"),n("a434"),n("b680"),n("ac1f"),n("2532"),{data:function(){return{ids:JSON.parse(localStorage.getItem("id"))||[]}},props:{videos:{type:Array,required:!0}},computed:{},methods:{toYoutube:function(e){window.open("https://www.youtube.com/watch?v="+e,"_blank")},publishedByNow:function(e){var t=new Date(e),n=new Date;if(n.getFullYear()-t.getFullYear()>0)return n.getUTCFullYear()-t.getFullYear()+"年前";if(n.getMonth()-t.getMonth()>0)return n.getMonth()-t.getMonth()+"個月前";if(n.getDate()-t.getDate()>0){var a=n.getDate()-t.getDate();return a<7?a+"天前":parseInt(a/7)+"週前"}return n.getHours()-t.getHours()>0?n.getHours()-t.getHours()+"小時前":n.getMinutes()-t.getMinutes()>0?n.getMinutes()-t.getMinutes()+"分鐘前":n.getSeconds()-t.getSeconds()+"秒前"},durationParser:function(e){var t=/\d*H/.exec(e),n=/\d*M/.exec(e),a=/\d*S/.exec(e),r=function(e,t,n){var a="",r="",o="";return a=e?/\d*/.exec(e)[0]+":":"",t?(r=/\d*/.exec(t)[0],1===r.length&&(r="0"+r)):r="00",n?(o=/\d*/.exec(n)[0],1===o.length&&(o="0"+o)):o="00",a+r+":"+o};return r(t,n,a)},IsFav:function(e){return this.ids.includes(e)},toggleFavorite:function(e){var t=this.ids;t.indexOf(e)>-1?t.splice(t.indexOf(e),1):t.push(e),localStorage.id=JSON.stringify(t)},views:function(e){var t=this.getDigit(e);return t<4?e+"次":4===t?(e/Math.pow(10,4)).toFixed(1)+"萬次":t>4?Math.floor(e/Math.pow(10,4))+"萬次":t>=8?Math.floor(e/Math.pow(10,8))+"億次":void 0},getDigit:function(e){var t=-1;while(e>=1)t++,e/=10;return t}}}),k=y,O=(n("c128"),Object(i["a"])(k,P,w,!1,null,null,null)),T=O.exports,_="getPopularVideo",j="getVideosById",C="getRegions",R="searchVideos",S=n("2f62"),I={name:"home",components:{VideoCard:T},data:function(){return{maxTotalResults:200,count:12,pageNum:1,pageTokenPerPage:{},selectRegion:"TW",searchText:"",isSearch:!1}},created:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch(_,{part:"snippet,statistics,contentDetails",regionCode:e.selectRegion,maxResults:e.count});case 2:localStorage.getItem("pageTokenPerPage")||e.queryPageToken(),e.$store.dispatch(C);case 4:case"end":return t.stop()}}),t)})))()},computed:Object(x["a"])(Object(x["a"])({},Object(S["b"])({videos:function(e){return e.videos},regionList:function(e){return e.regions},totalResults:function(e){return e.pageInfo.totalResults}})),{},{pageCount:function(){var e=Math.min(this.maxTotalResults,this.totalResults);return Math.ceil(e/this.count)}}),watch:{selectRegion:function(){this.isSearch=!1,localStorage.removeItem("searchText"),this.resetPageNum(1),this.jumpPage(this.pageNum)}},methods:{jumpPage:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.pageNum=e,t.pageTokenPerPage=JSON.parse(localStorage.pageTokenPerPage),!t.isSearch){n.next=10;break}return n.next=5,t.$store.dispatch(R,{searchText:localStorage.searchText,maxResults:t.count,pageToken:e-2>=0?t.pageTokenPerPage[e-2].nextPageToken:null});case 5:a=n.sent,r=a.data.items.map((function(e){return e.id.videoId})),t.$store.dispatch(j,{id:r.join(","),part:"snippet,statistics,contentDetails",maxResults:t.count}),n.next=11;break;case 10:t.$store.dispatch(_,{part:"snippet,statistics,contentDetails",regionCode:t.selectRegion,maxResults:t.count,pageToken:e-2>=0?t.pageTokenPerPage[e-2].nextPageToken:null});case 11:case"end":return n.stop()}}),n)})))()},queryPageToken:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=0,t.next=3,e.$store.dispatch(_,{maxResults:e.count});case 3:a=t.sent,e.pageTokenPerPage[n++]={nextPageToken:a.data.nextPageToken};case 5:if(!a.data.nextPageToken){t.next=12;break}return t.next=8,e.$store.dispatch(_,{maxResults:e.count,pageToken:e.pageTokenPerPage[n-1].nextPageToken});case 8:a=t.sent,e.pageTokenPerPage[n++]={nextPageToken:a.data.nextPageToken,prevPageToken:a.data.prevPageToken},t.next=5;break;case 12:localStorage.setItem("pageTokenPerPage",JSON.stringify(e.pageTokenPerPage));case 13:case"end":return t.stop()}}),t)})))()},resetPageNum:function(e){this.$refs.Pagination.selected=e,this.pageNum=e},clickSearch:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.resetPageNum(1),e.isSearch=!0,localStorage.searchText=e.searchText,t.next=5,e.$store.dispatch(R,{searchText:localStorage.searchText,maxResults:e.count});case 5:return n=t.sent,a=n.data.items.map((function(e){return e.id.videoId})),t.next=9,e.$store.dispatch(j,{id:a.join(","),part:"snippet,statistics,contentDetails",maxResults:e.count});case 9:case"end":return t.stop()}}),t)})))()}}},M=I,$=(n("21bb"),Object(i["a"])(M,h,m,!1,null,null,null)),D=$.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"collect"},[e.videoByPage?n("VideoCard",{attrs:{videos:e.videoByPage}}):e._e(),n("div",{staticClass:"text-center"},[n("paginate",{attrs:{"page-count":e.pageCount,"click-handler":e.jumpTo,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"}})],1)],1)},V=[],B=(n("fb6a"),{name:"collect",components:{VideoCard:T},data:function(){return{videos:null,pageCount:0,count:12,videoByPage:null}},created:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=JSON.parse(localStorage.id),!(n.length<=0)){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.fetchVideoById({id:n.join(",")});case 5:a=t.sent,e.videos=a.data.items,e.pageCount=Math.ceil(a.data.pageInfo.totalResults/e.count),e.videoByPage=e.videos.slice(0,e.count);case 9:case"end":return t.stop()}}),t)})))()},methods:{jumpTo:function(e){this.videoByPage=this.videos.slice((e-1)*this.count,e*this.count)},fetchVideoById:function(e){return this.$http.get("videos",{params:Object(x["a"])(Object(x["a"])({part:"snippet,statistics,contentDetails"},e),{},{key:"AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"})})}}}),E=B,A=Object(i["a"])(E,N,V,!1,null,null,null),J=A.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-page"},[n("video-player",{attrs:{options:e.videoOptions}}),n("div",{staticClass:"mt-3 text-center"},[e._v(" 預設播放這支影片 ")])],1)},F=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("video",{ref:"videoPlayer",staticClass:"video-js"})},Y=[],H=n("f0e2"),q={props:{options:{type:Object,default:function(){return{}}}},data:function(){return{player:null}},mounted:function(){this.player=Object(H["a"])(this.$refs.videoPlayer,this.options,(function(){console.log("onPlayerReady",this)}))},beforeDestroy:function(){this.player&&this.player.dispose()}},X=q,L=(n("b6b4"),Object(i["a"])(X,z,Y,!1,null,null,null)),W=L.exports,G={name:"VideoPage",components:{VideoPlayer:W},data:function(){return{videoOptions:{autoplay:!0,controls:!0,sources:[{src:"http://vjs.zencdn.net/v/oceans.mp4",type:"video/mp4"}]}}}},K=G,Q=Object(i["a"])(K,U,F,!1,null,null,null),Z=Q.exports;a["a"].use(l["a"]);var ee,te=[{path:"/",component:v,children:[{path:"/",name:"home",component:D},{path:"/collect",name:"collect",component:J},{path:"/video",name:"video",component:Z}]}],ne=new l["a"]({mode:"history",routes:te}),ae=ne,re=(n("78a7"),n("be35"),n("f9e3"),n("8832")),oe=n.n(re),ie=(n("fda2"),n("d3b7"),n("ade3")),se=n("15fd"),ce=n("bc3a"),ue=n.n(ce),le=ue.a.create({baseURL:"https://www.googleapis.com/youtube/v3"});function pe(e){return le.get("videos",{params:Object(x["a"])(Object(x["a"])({},e),{},{key:"AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"})})}function de(){return le.get("i18nRegions",{params:{part:"snippet",hl:"zh_TW",key:"AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"}})}function fe(e,t){return le.get("search",{params:Object(x["a"])(Object(x["a"])({type:"video",q:e},t),{},{key:"AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"})})}var ge=(ee={},Object(ie["a"])(ee,_,(function(e){var t=e.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(e,a){pe(Object(x["a"])({chart:"mostPopular"},n)).then((function(n){t("setVideos",n.data.items),t("setPageInfo",n.data.pageInfo),e(n)})).catch((function(e){a(e)}))}))})),Object(ie["a"])(ee,C,(function(e){var t=e.commit;return new Promise((function(e,n){de().then((function(n){t("setRegions",n.data.items),e(n)})).catch((function(e){n(e)}))}))})),Object(ie["a"])(ee,R,(function(e,t){var n=e.commit,a=t.searchText,r=void 0===a?"":a,o=Object(se["a"])(t,["searchText"]);return new Promise((function(e,t){fe(r,o).then((function(t){n("setPageInfo",t.data.pageInfo),e(t)})).catch((function(e){t(e)}))}))})),Object(ie["a"])(ee,j,(function(e,t){var n=e.commit,a=t.id,r=void 0===a?"":a,o=Object(se["a"])(t,["id"]);return new Promise((function(e,t){pe(Object(x["a"])({id:r},o)).then((function(t){n("setVideos",t.data.items),e(t)})).catch((function(e){t(e)}))}))})),ee),ve={videos:[],pageInfo:{resultsPerPage:null,totalResults:null},regions:[]},he={setVideos:function(e,t){e.videos=t},setPageInfo:function(e,t){e.pageInfo.resultsPerPage=t.resultsPerPage,e.pageInfo.totalResults=t.totalResults},setRegions:function(e,t){e.regions=t}};a["a"].use(S["a"]);var me=new S["a"].Store({actions:ge,mutations:he,state:ve});a["a"].component("paginate",oe.a),a["a"].config.productionTip=!1,new a["a"]({router:ae,store:me,render:function(e){return e(u)}}).$mount("#app")},"6cdf":function(e,t,n){},"78a7":function(e,t,n){},8319:function(e,t,n){},"85ec":function(e,t,n){},b6b4:function(e,t,n){"use strict";var a=n("6cdf"),r=n.n(a);r.a},be35:function(e,t,n){},bf58:function(e,t,n){},c128:function(e,t,n){"use strict";var a=n("bf58"),r=n.n(a);r.a}});
//# sourceMappingURL=app.60165163.js.map