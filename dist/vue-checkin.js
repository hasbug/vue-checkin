!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vueCheckin",[],e):"object"==typeof exports?exports.vueCheckin=e():t.vueCheckin=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";e.a={name:"vueCheckin",data:function(){return{today:new Date,year:"",month:"",day:"",date:"",startTime:"",endTime:"",dateArr:[],hasCheckin:!1}},props:["checkin"],created:function(){this.year=this.today.getFullYear(),this.month=this.today.getMonth()+1,this.day=this.today.getDay(),this.date=this.today.getDate(),this.getCalendar(),console.log(this.checkin)},filters:{getCD:function(t){return t.split("/")[2]}},watch:{dateArr:{deep:!0,handler:function(t,e){console.log(t),this.startTime=t[0][0].date,this.endTime=t[5][6].date,this.setMonth(this.year+"/"+this.month,[this.startTime,this.endTime])}}},methods:{checkNow:function(){this.$emit("checkIn")},setMonth:function(t){this.$emit("setMonth",t,[this.startTime,this.endTime])},monthClass:function(t){return"cur"!=t},getGold:function(t){for(var e in this.checkin){var n=new Date(this.checkin[e].time),r=n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate();if(new Date(t).getTime()==new Date(r).getTime())return this.checkin[e].amount}},isLeap:function(){var t=this.year;return t%4==0&&t%100>0||t%400==0&&t%3200>0},getLen:function(t){var e=t||this.month;return 2==e?this.isLeap?29:28:e<8?e%2>0?31:30:e%2>0?30:31},getCalendarTime:function(){return this.year+"-"+this.month+"-"+this.date},getCalendar:function(){for(var t=this.getLen(),e=new Date(this.year,this.month-1,1),n=e.getDay(),r=new Array,o=0,a=1,i=n-1,s=this.getLen(this.month-1),c=0;c<6;c++){r[c]=new Array;for(var d=0;d<7;d++)o++,o-n>0&&o-n<=t?r[c][d]={date:this.year+"/"+this.month+"/"+(o-n),month:"cur"}:o<=n?(r[c][d]={date:this.year+"/"+(this.month-1)+"/"+(s-i),month:"pre"},i--):(r[c][d]={date:this.year+"/"+(this.month+1)+"/"+a,month:"next"},a++)}this.dateArr=r},nextMonth:function(){12==this.month?(this.year++,this.month=1):this.month++,this.getCalendar()},prevMonth:function(){1==this.month?(this.year--,this.month=12):this.month--,this.getCalendar()},contains:function(t){return""!=t[0]||""!=t[1]||""!=t[2]||""!=t[3]||""!=t[4]||""!=t[5]||""!=t[6]},isCheck:function(t){for(var e in this.checkin){var n=new Date,r=n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate(),o=new Date(this.checkin[e].time),a=o.getFullYear()+"/"+(o.getMonth()+1)+"/"+o.getDate();if(new Date(r).getTime()==new Date(a).getTime()&&(this.hasCheckin=!0),new Date(t.replace(/-/g,"/")).getTime()==new Date(a).getTime())return!0}return!1},doCheck:function(t){var e=(new Date).getFullYear()+"/"+((new Date).getMonth()+1)+"/"+(new Date).getDate();return new Date(t.replace(/-/g,"/")).getTime()==new Date(e).getTime()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o={install:function(t,e){console.log(r.a),t.component(r.a.name,r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,n){"use strict";function r(t){n(3)}var o=n(0),a=n(9),i=n(8),s=r,c=i(o.a,a.a,!1,s,null,null);e.a=c.exports},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(6)("5870d2c6",r,!0)},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,".calendar{width:100%;margin:0 0 20px;color:#555;position:relative}.calendar h4{line-height:40px;background-color:#fff;text-align:center;color:#333;box-shadow:0 0 4px #bbb;-webkit-box-shadow:0 0 4px #bbb}.calendar button{position:absolute;width:30px;height:30px;top:5px;color:#777;background:#f3f3f3;border:none}.calendar button:focus{border:none;outline:none}.calendar button.month-less{left:10px}.calendar button.month-add{right:10px}.calendar .sign_tab{width:100%;border-collapse:collapse;border:1px solid #e8e8e8;border-top:0;table-layout:fixed}.calendar .sign_tab th{text-align:center;height:14.28571428571429vw;font-weight:700}.calendar .sign_tab td{position:relative;border:1px solid #eee;padding:15px 0;text-align:center;font-size:14px;font-family:arial}.calendar .sign_tab td.over{background-color:#fff;border-left:0;border-right:0}.calendar .sign_tab td.disa{color:#ccc!important;background:none!important}.calendar .sign_tab td.disa *{color:#ccc!important}.calendar .sign_tab td.check_day{background-color:#f8f8f8;color:#58ce7a;position:relative}.calendar .ui-state-default,.calendar .ui-state-down{font-size:10px;width:100%;text-align:center;position:absolute;bottom:3px;left:0}.calendar .ui-state-down{color:#f60}.calendar .ui-state-up{font-size:10px;width:100%;text-align:center;position:absolute;top:3px;left:0}.calendar .sign_tab td.cur_day{background-color:#ffd2d2;color:#fff}.checkin-btn{display:block;width:90%;margin:0 auto;text-align:center;font-size:10px}",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function a(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(p)return v;r.parentNode.removeChild(r)}if(g){var a=f++;r=l||(l=o()),e=i.bind(null,r,a,!1),n=i.bind(null,r,a,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(7),u={},h=c&&(document.head||document.getElementsByTagName("head")[0]),l=null,f=0,p=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var o=d(t,e);return r(o),function(e){for(var n=[],a=0;a<o.length;a++){var i=o[a],s=u[i.id];s.refs--,n.push(s)}e?(o=d(t,e),r(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=a[0],s=a[1],c=a[2],d=a[3],u={id:t+":"+o,css:s,media:c,sourceMap:d};r[i]?r[i].parts.push(u):n.push(r[i]={id:i,parts:[u]})}return n}},function(t,e){t.exports=function(t,e,n,r,o,a){var i,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(i=t,s=t.default);var d="function"==typeof s?s.options:s;e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o);var u;if(a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=u):r&&(u=r),u){var h=d.functional,l=h?d.render:d.beforeCreate;h?(d._injectStyles=u,d.render=function(t,e){return u.call(e),l(t,e)}):d.beforeCreate=l?[].concat(l,u):[u]}return{esModule:i,exports:s,options:d}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-page uk-body"},[n("div",{staticClass:"calendar"},[n("button",{staticClass:"month-less",on:{click:t.prevMonth}},[t._v(" < ")]),t._v(" "),n("h4",[t._v(t._s(t.year)+"年"+t._s(t.month)+"月")]),t._v(" "),n("button",{staticClass:"month-add",on:{click:t.nextMonth}},[t._v(" > ")]),t._v(" "),n("table",{staticClass:"sign_tab",attrs:{border:"0px",cellpadding:"0px",cellspacing:"0px"}},[t._m(0),t._v(" "),n("tbody",t._l(t.dateArr,function(e){return t.contains(e)?n("tr",[t._l(e,function(e){return[t.isCheck(e.date)?n("td",{class:{disa:t.monthClass(e.month),cur_day:t.doCheck(e.date),check_day:t.isCheck(e.date)}},[t.doCheck(e.date)?[t._v("\n                            今天\n                        ")]:[t._v("\n                        "+t._s(t._f("getCD")(e.date))+"\n                        ")],t._v(" "),n("span",{class:{"ui-state-down":!0}},[t._v("金币+"+t._s(t.getGold(e.date)))])],2):t._e(),t._v(" "),t.isCheck(e.date)||!t.doCheck(e.date)||t.hasCheckin?t._e():[t.monthClass(e.month)?n("td",{class:{disa:t.monthClass(e.month),over:""==e.date,cur_day:t.doCheck(e.date)}},[t._v("\n                            "+t._s(t._f("getCD")(e.date))+"\n                        ")]):n("td",{class:{disa:t.monthClass(e.month),over:""==e.date,cur_day:t.doCheck(e.date)},on:{click:t.checkNow}},[t._v("\n                            今天\n                            "),n("span",{class:{"ui-state-default":!0}},[t._v("点击签到")])])],t._v(" "),t.isCheck(e.date)||t.doCheck(e.date)?t._e():n("td",{class:{disa:t.monthClass(e.month),over:""==e.date,cur_day:t.doCheck(e.date)}},[t._v("\n                        "+t._s(t._f("getCD")(e.date))+"\n                    ")])]})],2):t._e()}))])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("日")]),t._v(" "),n("th",[t._v("一")]),t._v(" "),n("th",[t._v("二")]),t._v(" "),n("th",[t._v("三")]),t._v(" "),n("th",[t._v("四")]),t._v(" "),n("th",[t._v("五")]),t._v(" "),n("th",[t._v("六")])])])}],a={render:r,staticRenderFns:o};e.a=a}])});
//# sourceMappingURL=vue-checkin.js.map