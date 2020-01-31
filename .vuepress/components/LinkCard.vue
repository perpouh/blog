<template lang="pug">
.hbc-blog-card
  .hbc-link-wrap
    a.hbc-link(:href="url")
      .hbc-card
        .hbc-contents
          img.hbc-thumbnail(:src="thumbnail")
          .hbc-text
            .hbc-title {{ title }}
            .hbc-url {{ url }}
            .hbc-description {{ description }}
        .hbc-info
          img.hbc-favicon(:src="favicon")
          .hbc-site-name {{ siteName }}
</template>

<script>
import axios from 'axios';
export default{
  name: 'link-card',
  props: ['url'],
  data(){
    return {
      favicon: "https://github.com/fluidicon.png",
      siteName: "github.com",
      thumbnail: "https://avatars0.githubusercontent.com/u/8610298?s=400&v=4",
      title: "perpouh/chat-app-vue",
      description: "Build a Real-time Chat App with Pusher and Vue.js"
    }
  },
  computed: {
    ogp: function(){
      // 思いっきりCORS出るけどgithubpagesにデプロイしたあとってどうなるんだろうか
      axios.get(this.url).then(response => (console.log(response)));
      return 'github.com'
    }
  }
}
</script>

<style>
.hbc-contents::after, .hbc-blog-card::after{
  clear: both;
  display:block;
  content: '';
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
}
</style>