import { axios } from '~/services/axios-service'
import channels from '~/data/channels.json'
import _ from 'lodash';

export default {
  async getVideosForPlaylist(playlistId, count) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&&maxResults=${count}&playlistId=${playlistId}&key=${process.env.GOOGLE_API_KEY}`;
    console.log(url);
    try {
      const response = await axios.$get(url);

      const videos = response.items.map(v => ({
        id: v.snippet.resourceId.videoId,
        title: v.snippet.title,
        description: v.snippet.description,
        url: `https://www.youtube.com/watch?v=${v.snippet.resourceId.videoId}`,
        date: v.snippet.publishedAt,
        thumbnails: v.snippet.thumbnails
      }));

      return videos;
    }
    catch (err) {
      console.log(err);
    }
  },
  async GetAllVideos() {
    var uploadIds = channels.map(ch => ch.uploads);
    var videos = [];

    for (var i = 0; i < uploadIds.length; i++)
    {
      var result = await this.getVideosForPlaylist(uploadIds[i], 3);
      videos = videos.concat(result);
    }

    return videos;
  },
  async GetVideosGrouped() {
    var uploadIds = channels.map(ch => ch.uploads);
    var channelsWithVideos = [];

    for (var i = 0; i < uploadIds.length; i++)
    {
      var channelClone = _.cloneDeep(channels[i]);
      var result = await this.getVideosForPlaylist(uploadIds[i], 5);
      channelClone.videos = result;
      channelsWithVideos.push(channelClone);
    }

    return channelsWithVideos;
  }
};
