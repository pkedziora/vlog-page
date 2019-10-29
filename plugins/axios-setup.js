import { setAxios } from '~/services/axios-service'

export default ({ app, store }) => {
  setAxios(app.$axios)
}
