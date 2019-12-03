<template>
  <div>
    <div class="bannerContainer">
      <img :src="bannerUrl" :alt="title + ' banner image'" />
    </div>
    <div class="channelHeader">
      <div class="thumbnailContainer">
        <img :src="thumbnailUrl" :alt="title + ' thumbnail'" />
      </div>
      <div class="channelData">
        <h1>{{title}}</h1>
        <p>{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChannelInfo',
  props: {
    title: String,
    description: String,
    bannerUrl: String,
    thumbnailUrl: String,
  },
};
</script>

<style>
</style>
