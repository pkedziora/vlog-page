<template>

<div class="card videoItemContainer">
  <div class="card-image">

      <iframe :title="video.title" loading="lazy" type="text/html"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          :src="'https://www.youtube.com/embed/' + video.id" frameborder="0"></iframe>
          <!-- :srcdoc="'<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/' + video.id + '?autoplay=1><img src=https://img.youtube.com/vi/' + video.id + '/hqdefault.jpg alt=\'' + video.description + '\'><span>▶</span></a>'" -->

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
      </div>
    </div>

    <div class="content">
      <span class="title is-4 truncate">
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
    group: Object,
  },
};
</script>

<style>
iframe {
  width: 640px;
  height: 360px
}

.truncate {
  width: 700px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (max-width: 640px) {
  .truncate {
    width: 320px;
  }

  iframe {
    width: 320px;
    height: 180px;
  }
}

.videoItemContainer {
  background-color: white;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-top: 30px;
}
</style>
