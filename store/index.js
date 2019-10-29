import VideoDataService from '~/services/youtube-data-service'

export const strict = false
export const state = () => ({
  });

export const actions = {
    async nuxtServerInit({commit, dispatch}, {req}) {

    // const videos = await VideoDataService.GetAllVideos();

    // commit("setVideos", videos);

    const videosGropued = await VideoDataService.GetVideosGrouped();

    commit("setVideosGrouped", videosGropued);
  }
};

export const mutations = {
    setVideos (state, value) {
      state.videos = value
    },
    setVideosGrouped (state, value) {
      state.videosGrouped = value
    }
  }

export const getters = {};
