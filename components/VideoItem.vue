<template>

<div class="card videoItemContainer">
  <div class="card-image">

      <iframe loading="lazy" type="text/html"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          :src="'https://www.youtube.com/embed/' + video.id" frameborder="0"></iframe>

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
  width: 640px;
  height: 360px
}

@media screen and (max-width: 640px) {
  iframe {
    width: 320px;
    height: 180px;
  }
}

.videoItemContainer {
  background-color: white;
  margin-bottom: 30px;
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
