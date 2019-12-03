import _ from 'lodash';
import { axios } from '~/services/axios-service';
import channels from '~/data/channels.json';

export default {
  async getVideosForPlaylist(playlistId, count) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&&maxResults=${count}&playlistId=${playlistId}&key=${process.env.GOOGLE_API_KEY}`;
    try {
      const response = await axios.$get(url);

      const videos = response.items.map((v) => ({
        id: v.snippet.resourceId.videoId,
        title: v.snippet.title,
        description: v.snippet.description,
        url: `https://www.youtube.com/watch?v=${v.snippet.resourceId.videoId}`,
        date: v.snippet.publishedAt,
        thumbnails: v.snippet.thumbnails,
      }));

      return videos;
    } catch (err) {
      console.error(err);
    }

    return null;
  },
  async GetVideosGrouped() {
    const uploadIds = channels.map((ch) => ch.uploads);
    const channelsWithVideos = [];

    const promises = [];
    for (let i = 0; i < uploadIds.length; i++) {
      promises.push(this.getVideosForPlaylist(uploadIds[i], 5));
    }

    const result = await Promise.all(promises);

    for (let i = 0; i < uploadIds.length; i++) {
      const channelClone = _.cloneDeep(channels[i]);
      channelClone.videos = result[i];
      channelsWithVideos.push(channelClone);
    }

    return channelsWithVideos;
  },
  async GetVideos() {
    const uploadIds = channels.map((ch) => ch.uploads);
    const videos = [];

    const promises = [];
    for (let i = 0; i < uploadIds.length; i++) {
      promises.push(this.getVideosForPlaylist(uploadIds[i], 5));
    }

    const result = await Promise.all(promises);

    for (let i = 0; i < uploadIds.length; i++) {
      const channelClone = _.cloneDeep(channels[i]);
      for (let j = 0; j < result[i].length; j++) {
        result[i][j].channel = channelClone;
      }

      videos.push(...result[i]);
    }

    return videos;
  },
};
