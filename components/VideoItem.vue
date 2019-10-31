<template>

<div class="card videoItemContainer">
  <div class="card-image">

      <iframe loading="lazy" type="text/html" width="640" height="360"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          :src="'https://www.youtube.com/embed/' + video.id" frameborder="0"
          :srcdoc="'<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/' + video.id + '?autoplay=1><img src=https://img.youtube.com/vi/' + video.id + '/hqdefault.jpg alt=\'' + video.description + '\'><span>▶</span></a>'"></iframe>

  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-32x32">
          <img :src="group.thumbnails.medium.url" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-5">{{group.title}}</p>
        <!-- <p class="subtitle is-6">@johnsmith</p> -->
      </div>
    </div>

    <div class="content">
      <span class="title is-4">
          {{video.title}}
      </span>
      <time datetime="video.date">{{ video.date | formatDate}}</time>
    </div>
  </div>
</div>

<!-- <div class="videoItemContainer">
          <p><a :href="video.url">{{ video.title }}</a> - {{ video.date | formatDate}}</p>
          <iframe loading="lazy" type="text/html" width="640" height="360"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          :src="'https://www.youtube.com/embed/' + video.id" frameborder="0"
          :srcdoc="'<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/' + video.id + '?autoplay=1><img src=https://img.youtube.com/vi/' + video.id + '/hqdefault.jpg alt=\'' + video.description + '\'><span>▶</span></a>'"></iframe>

</div> -->
</template>

<script>
export default {
  name: 'VideoItem',
  props: {
    video: Object,
    group: Object
  }
}
</script>

<style>
iframe {
  height: 360px
}

.videoItemContainer {
  background-color: white;
  margin-bottom: 30px;
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
