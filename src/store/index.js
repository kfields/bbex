import Vue from 'vue'
import Vuex from 'vuex'

import app from './app'
import ui from './ui'
import history from './history'
import bookmarks from './bookmarks'
import favorites from './favorites'
import resources from './resources'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      app,
      ui,
      history,
      bookmarks,
      favorites,
      resources
    }
    // enable strict mode (adds overhead!)
    // for dev mode only
    // strict: process.env.DEV
  })

  return Store
}
