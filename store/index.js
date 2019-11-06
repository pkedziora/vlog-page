import VideoDataService from '~/services/youtube-data-service';

export const strict = false;
export const state = () => ({
});

export const actions = {
  async nuxtServerInit({ commit }) {
    // const videos = await VideoDataService.GetAllVideos();

    // commit("setVideos", videos);

    const videosGropued = await VideoDataService.GetVideosGrouped();

    commit('setVideosGrouped', videosGropued);
  },
};

export const mutations = {
  setVideos(currentState, value) {
    currentState.videos = value;
  },
  setVideosGrouped(currentState, value) {
    currentState.videosGrouped = value;
  },
};

export const getters = {};
