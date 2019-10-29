<template>
<div>
<!-- <h1>Ungropued</h1>
  <ul>
    <li v-for="video in videos" :key="video.id">
      <p>{{ video.date | formatDate}}</p>
      <h1><a :href="video.url">{{ video.title }}</a></h1>
      <a :href="video.url"><img :src="video.thumbnails.medium.url" /></a>
    </li>
  </ul> -->
  <h1>Gropued</h1>
  <ul>
    <li v-for="group in videosGrouped" :key="group.id">
      <h1>{{group.title}}</h1>
      <h2>{{group.description}}</h2>
      <h2>{{group.keywords}}</h2>
      <img :src="group.thumbnails.medium.url"/>
      <img :src="group.image.bannerImageUrl"/>
      <ul>
        <li v-for="video in group.videos" :key="video.id">
          <p>{{ video.date | formatDate}}</p>
          <h1><a :href="video.url">{{ video.title }}</a></h1>
          <!-- <a :href="video.url"><img :src="video.thumbnails.medium.url" /></a> -->
          <iframe loading="lazy" type="text/html" width="640" height="360"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          :src="'https://www.youtube.com/embed/' + video.id" frameborder="0"
          :srcdoc="'<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/' + video.id + '?autoplay=1><img src=https://img.youtube.com/vi/' + video.id + '/hqdefault.jpg alt=\'' + video.description + '\'><span>▶</span></a>'"></iframe>
        </li>
      </ul>
    </li>

  </ul>
</div>
</template>

<script>
export default {
  name: 'VideoList',
  data () {
    return {
      videos: []
    }
  },
  async created () {
    //this.videos = this.$store.state.videos;
    this.videosGrouped = this.$store.state.videosGrouped;
   // console.log(JSON.stringify(this.videos));
  }
}
</script>

<style>
iframe {
  height: 360px
}
</style>
