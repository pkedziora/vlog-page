<template>
  <ul>
    <li v-for="video in videos" :key="video.id">
      <h1>{{ video.description }}</h1>
      <a :href="video.url">{{ video.title }}</a>
    </li>
  </ul>
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
    this.videos = this.$store.state.videos;
  }
}
</script>

<style>
</style>
