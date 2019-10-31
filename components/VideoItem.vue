<template>
<div class="videoItemContainer">
          <p><a :href="video.url">{{ video.title }}</a> - {{ video.date | formatDate}}</p>
          <!-- <a :href="video.url"><img :src="video.thumbnails.medium.url" /></a> -->
          <iframe loading="lazy" type="text/html" width="640" height="360"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          :src="'https://www.youtube.com/embed/' + video.id" frameborder="0"
          :srcdoc="'<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/' + video.id + '?autoplay=1><img src=https://img.youtube.com/vi/' + video.id + '/hqdefault.jpg alt=\'' + video.description + '\'><span>▶</span></a>'"></iframe>

</div>
</template>

<script>
export default {
  name: 'VideoItem',
  props: {
    video: Object
  }
}
</script>

<style>
iframe {
  height: 360px
}

.videoItemContainer {
  margin: 30px;
}
</style>
