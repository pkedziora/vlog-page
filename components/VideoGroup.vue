<template>
<div class="groupContainer">
      <div class="bannerContainer">
          <img :src="group.image.bannerImageUrl"/>
      </div>
      <div class="channelHeader">
        <div class="thumbnailContainer">
          <img :src="group.thumbnails.medium.url"/>
        </div>
        <div class="channelData">
          <h1>{{group.title}}</h1>
          <p>{{group.description}}</p>
        </div>
      </div>

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

export default {
name: 'VideoGroup',
components: {VideoItem},
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
