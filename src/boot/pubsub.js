import pubsub from 'pubsub-js'

export default ({ Vue }) => {
  Vue.prototype.$pubsub = pubsub
}
