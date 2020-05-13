import PubSub from 'pubsub-js'

const state = {
  historySearch: {
    text: '',
    startTime: undefined,
    endTime: undefined,
    maxResults: 100000,
    limit: 15
  }
}

const getters = {
  historySearch: (state) => state.historySearch
}

const actions = {
  setHistorySearch: (context, search) => {
    context.commit('historySearch', search)
  }
}

const mutations = {
  historySearch: (state, search) => {
    console.log('setHistorySearch')
    state.historySearch = search
    PubSub.publish('EventSearch', search)
  }
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
