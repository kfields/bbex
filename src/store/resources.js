import PubSub from 'pubsub-js'

const state = {
  resourceSearch: {
    text: '',
    startTime: undefined,
    endTime: undefined,
    maxResults: 100000,
    limit: 15
  }
}

const getters = {
  resourceSearch: (state) => state.resourceSearch
}

const actions = {
  setResourceSearch: (context, search) => {
    context.commit('resourceSearch', search)
  }
}

const mutations = {
  resourceSearch: (state, search) => {
    console.log('setResourceSearch')
    state.resourceSearch = search
    PubSub.publish('ResourceSearch', search)
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
