import moment from 'moment'

export default ({ app, router, Vue }) => {
  Vue.prototype.$moment = moment
}
