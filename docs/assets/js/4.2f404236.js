(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{229:function(t,s,i){"use strict";var a=i(73);i.n(a).a},232:function(t,s,i){"use strict";i.r(s);var a=i(212),c=i.n(a),n={name:"link-card",props:["url"],data:function(){return{ogp:[],favicon:"https://github.com/fluidicon.png",siteName:"github.com",thumbnail:"https://avatars0.githubusercontent.com/u/8610298?s=400&v=4",title:"perpouh/chat-app-vue",description:"Build a Real-time Chat App with Pusher and Vue.js"}},mounted:function(){c.a.get(this.url).then((function(t){console.log(t),info=JSON.parse(t),this.ogp=t.ogp}))}},e=(i(229),i(0)),o=Object(e.a)(n,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"hbc-blog-card"},[i("div",{staticClass:"hbc-link-wrap"},[i("a",{staticClass:"hbc-link",attrs:{href:t.url,target:"_blank"}},[i("div",{staticClass:"hbc-card"},[i("div",{staticClass:"hbc-contents"},[i("img",{staticClass:"hbc-thumbnail",attrs:{src:t.ogp["og:image"]}}),i("div",{staticClass:"hbc-text"},[i("div",{staticClass:"hbc-title"},[t._v(t._s(t.ogp["og:title"]))]),i("div",{staticClass:"hbc-url"},[t._v(t._s(t.url))]),i("div",{staticClass:"hbc-description"},[t._v(t._s(t.ogp["og:description"]))])])]),i("div",{staticClass:"hbc-info"},[i("div",{staticClass:"hbc-site-name"},[t._v(t._s(t.ogp["og:site_name"]))])])])])])])}),[],!1,null,null,null);s.default=o.exports},73:function(t,s,i){}}]);