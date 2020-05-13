import Vue from 'vue'
import Vuex from 'vuex'

import ui from './ui'
import history from './history'
import bookmarks from './bookmarks'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      ui,
      history,
      bookmarks
    }
  })

  return Store
}
