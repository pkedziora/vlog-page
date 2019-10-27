export const strict = false
export const state = () => ({
  });

export const actions = {
   async nuxtServerInit({commit, dispatch}, {req}) {
    const response = await this.$axios.$get(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&fields=items(id(videoId)%2Csnippet(title%2Cdescription))&channelId=UCXuqSBlHAE6Xw-yeJA0Tunw&maxResults=2&order=date&type=video&videoEmbeddable=true&key=" + process.env.GOOGLE_API_KEY
    );

    const videos = response.items.map(v => ({
      id: v.id.videoId,
      description: v.snippet.description,
      title: v.snippet.title,
      url: "https://www.youtube.com/watch?v=" + v.id.videoId
    }));
    
    commit("setVideos", videos);
  }
};

export const mutations = {
    setVideos (state, value) {
      state.videos = value
    }
  }

export const getters = {};
