import VideoDataService from '~/services/youtube-data-service';
import packagejson from '../package.json';

function getVersion() {
  const buildNumber = process.env.CODEBUILD_BUILD_NUMBER || 'local';
  return `${packagejson.version}.${buildNumber}`;
}

export const strict = false;
export const state = () => ({
});

export const actions = {
  async nuxtServerInit({ commit }) {
    const videos = await VideoDataService.GetVideos();
    commit('setVideos', videos);
    commit('setVersion', getVersion());
  },
};

export const mutations = {
  setVideos(currentState, value) {
    currentState.videos = value;
  },
  setVersion(currentState, value) {
    currentState.version = value;
  },
};

export const getters = {};
