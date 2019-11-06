import { setAxios } from '~/services/axios-service';

export default ({ app }) => {
  setAxios(app.$axios);
};
