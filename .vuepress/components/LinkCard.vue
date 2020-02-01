<template lang="pug">
.hbc-blog-card
  .hbc-link-wrap
    a.hbc-link(:href="url", target="_blank")
      .hbc-card
        .hbc-contents
          img.hbc-thumbnail(:src="ogp['og:image']")
          .hbc-text
            .hbc-title {{ ogp['og:title'] }}
            .hbc-url {{ url }}
            .hbc-description {{ ogp['og:description'] }}
        .hbc-info
          .hbc-site-name {{ ogp['og:site_name'] }}
</template>

<script>
import axios from 'axios';
export default{
  name: 'link-card',
  props: ['url'],
  data(){
    return {
      ogp: [],
      favicon: "https://github.com/fluidicon.png",
      siteName: "github.com",
      thumbnail: "https://avatars0.githubusercontent.com/u/8610298?s=400&v=4",
      title: "perpouh/chat-app-vue",
      description: "Build a Real-time Chat App with Pusher and Vue.js"
    }
  },
  mounted(){
    // 思いっきりCORS出るけどgithubpagesにデプロイしたあとってどうなるんだろうか
    axios.get(this.url).then(function(response){
      console.log(response);
      info = JSON.parse(response);
      this.ogp = response.ogp;
    });
  }
}
</script>

<style>
.hbc-blog-card{
  max-width: 500px;
  border: 1px solid #ddd;
  padding: 5px;
}
.hbc-link:hover{
  text-decoration: none!important;
}
.hbc-contents::after, .hbc-blog-card::after{
  clear: both;
  display:block;
  content: '';
}
.hbc-title{
  font-size: 16pt;
  color: #2c3e50;
}
.hbc-url{
  font-size: small;
}
.hbc-description{
  color: #2c3e50;
  font-size: smaller;
}
.hbc-favicon{
  width: 25px;
  float: left;
}
.hbc-thumbnail{
  width: 100px;
  float: left;
  margin-right: 10px;
}
.hbc-info{
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.hbc-site-name{
  color: #2c3e50;
  font-size: x-small;
  display: inline-block;
  vertical-align: bottom;
  height: fit-content;
  position: absolute;
  bottom: -5px;
}
</style>