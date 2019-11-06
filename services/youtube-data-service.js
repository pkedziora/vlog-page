import _ from 'lodash';
import { axios } from '~/services/axios-service';
import channels from '~/data/channels.json';

export default {
  async getVideosForPlaylist(playlistId, count) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&&maxResults=${count}&playlistId=${playlistId}&key=${process.env.GOOGLE_API_KEY}`;
    console.log(url);
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
  async GetAllVideos() {
    const uploadIds = channels.map((ch) => ch.uploads);
    let videos = [];

    for (let i = 0; i < uploadIds.length; i++) {
      const result = await this.getVideosForPlaylist(uploadIds[i], 3);
      videos = videos.concat(result);
    }

    return videos;
  },
  async GetVideosGrouped() {
    const uploadIds = channels.map((ch) => ch.uploads);
    const channelsWithVideos = [];

    for (let i = 0; i < uploadIds.length; i++) {
      const channelClone = _.cloneDeep(channels[i]);
      const result = await this.getVideosForPlaylist(uploadIds[i], 5);
      channelClone.videos = result;
      channelsWithVideos.push(channelClone);
    }

    return channelsWithVideos;
  },
};
