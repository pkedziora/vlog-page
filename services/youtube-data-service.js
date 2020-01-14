import _ from 'lodash';
import { axios } from '~/services/axios-service';
import channels from '~/data/channels.json';
import appconfig from '~/app.config.json';

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
  async GetVideos() {
    const uploadIds = channels.map((ch) => ch.uploads);
    const videos = [];

    const promises = [];
    for (let i = 0; i < uploadIds.length; i++) {
      promises.push(this.getVideosForPlaylist(uploadIds[i], appconfig.videosPerChannel));
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
