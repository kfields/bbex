import PubSub from 'pubsub-js'

const state = {
  bookmarkSearch: {
    text: '',
    startTime: undefined,
    endTime: undefined,
    maxResults: 100000,
    limit: 15
  }
}

const getters = {
  bookmarkSearch: (state) => state.bookmarkSearch
}

const actions = {
  setBookmarkSearch: (context, search) => {
    context.commit('bookmarkSearch', search)
  }
}

const mutations = {
  bookmarkSearch: (state, search) => {
    console.log('setBookmarkSearch')
    state.bookmarkSearch = search
    PubSub.publish('BookmarkSearch', search)
  }
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
