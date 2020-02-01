<template lang="pug">
.hbc-blog-card
  .hbc-link-wrap
    a.hbc-link(:href="url", target="_blank")
      .hbc-card
        .hbc-contents
          img.hbc-thumbnail(:src="thumbnail")
          .hbc-text
            .hbc-title {{ title }}
            .hbc-url {{ url }}
            .hbc-description {{ description }}
        .hbc-info
          .hbc-site-name {{ siteName }}
</template>

<script>
export default{
  name: 'link-card',
  props: ['url', 'thumbnail', 'siteName', 'thmubnail', 'title', 'description']
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