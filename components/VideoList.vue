<template>
  <div class="videoListContainer">
    <ul>
      <li v-for="video in sortedVideos" :key="video.id">
        <video-item :video="video" :group="video.channel" />
      </li>
    </ul>
  </div>
</template>

<script>
import VideoItem from "./VideoItem";

export default {
  name: "VideoList",
  components: { VideoItem },
  data() {
    return {
      videos: []
    };
  },
  methods: {},
  computed: {
    sortedVideos: function() {
      this.videos.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      return this.videos;
    }
  },
  async created() {
    this.videos = this.$store.state.videos;
  }
};
</script>

<style>
.videoListContainer {
  margin-top: 30px;
}
</style>
