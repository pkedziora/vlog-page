<template>
<div class="videoListContainer">
  <ul>
    <li v-for="group in videosGrouped" :key="group.id">
      <video-group :group="group" />
    </li>
  </ul>
</div>
</template>

<script>
import VideoGroup from './VideoGroup';

export default {
  name: 'VideoGroupList',
  components: {VideoGroup},
  data () {
    return {
      videosGrouped: []
    }
  },
  methods: {
  },
  computed: {
  },
  async created () {
    this.videosGrouped = this.$store.state.videosGrouped;
  }
}
</script>

<style>
.videoListContainer {
  margin-top: 30px;
}
</style>
