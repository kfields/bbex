import PubSub from 'pubsub-js'

const state = {
  favoriteSearch: {
    text: '',
    startTime: undefined,
    endTime: undefined,
    maxResults: 100000,
    limit: 15
  }
}

const getters = {
  favoriteSearch: (state) => state.favoriteSearch
}

const actions = {
  setFavoriteSearch: (context, search) => {
    context.commit('favoriteSearch', search)
  }
}

const mutations = {
  favoriteSearch: (state, search) => {
    console.log('setFavoriteSearch')
    state.favoriteSearch = search
    PubSub.publish('FavoriteSearch', search)
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
