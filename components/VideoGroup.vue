<template>
<div class="groupContainer">
      <!-- <ChannelInfo :title="group.title" :description="group.description" :bannerUrl="group.image.bannerImageUrl" :thumbnailUrl="group.thumbnails.medium.url"/> -->
      <div class="videoGroupContainer">
        <ul>
        <li v-for="video in videosFiltered" :key="video.id">
          <video-item :video="video" :group="group" />
        </li>
        </ul>
        <button class="button is-link" @click="showMore(group.id)">Show more from {{group.title}}</button>
      </div>
</div>

</template>

<script>
import VideoItem from './VideoItem';
import ChannelInfo from './ChannelInfo';

export default {
name: 'VideoGroup',
components: {VideoItem, ChannelInfo},
props: {
  group: Object
},
data() {
  return {
      allGroupCount: 50,
      groupCount: 3
    }
},
  methods: {
    showMore(id)
    {
      this.groupCount = this.allGroupCount;
    }
  },
  computed: {
    videosFiltered () {
      return this.group.videos.filter((item,i) => i < this.groupCount);
    }
  }
}
</script>

<style>
h1 {
  font-weight: 600;
  font-size: 1.8em;
}

.videoGroupContainer {
}

.groupContainer {
  margin-bottom: 60px;
}

.thumbnailContainer {
  height: 100%;
  padding: 20px;
}

.channelData {
  flex-grow: 1;
  padding: 10px;
}

.channelData p {
    text-align: left;
}

.channelHeader {
  background-color: white;
  display: flex;
  width: 100%;
}
</style>
