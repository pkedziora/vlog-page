<template>
  <div class="videoListContainer">
    <div class="field">
      <p class="control has-icons-left">
        <input
          v-model="searchTerm"
          class="input"
          type="text"
          placeholder="Search"
          @keypress="onSearchChange"
        />
        <span class="icon is-small is-left">
          <fa :icon="['fas', 'search']" />
        </span>
      </p>
    </div>
    <ul>
      <li v-for="video in filteredVideos" :key="video.id">
        <video-item :video="video" :group="video.channel" />
      </li>
    </ul>
  </div>
</template>

<script>
import VideoItem from './VideoItem';
import appconfig from '~/app.config.json';
import SearchService from '~/services/search-service';

export default {
  name: 'VideoList',
  components: { VideoItem },
  data() {
    return {
      videos: [],
      visibleVideoCount: appconfig.pageSize,
      searchTerm: '',
    };
  },
  methods: {
    onSearchChange() {
      this.visibleVideoCount = appconfig.pageSize;
    },
    bindScroll() {
      window.onscroll = () => {
        const isBottom = document.documentElement.scrollTop + window.innerHeight
          >= document.documentElement.offsetHeight - 20;

        if (isBottom && this.visibleVideoCount < this.videos.length) {
          this.visibleVideoCount += appconfig.pageSize;
        }
      };
    },
  },
  computed: {
    filteredVideos() {
      return SearchService.filterVideos(
        this.videos,
        this.visibleVideoCount,
        this.searchTerm,
      );
    },
  },
  async created() {
    this.videos = this.$store.state.videos;
    this.videos.sort((a, b) => new Date(b.date) - new Date(a.date));
  },
  mounted() {
    this.bindScroll();
  },
};
</script>

<style>
.videoListContainer {
  margin-top: 30px;
}
</style>
