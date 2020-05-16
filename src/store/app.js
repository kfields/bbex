import { db } from 'src/boot/dexie'

const state = {
  isSetup: false
}

setTimeout(async () => {
  const count = await db.resources.count()
  console.log('isSetup')
  console.log('count', count)
  state.isSetup = count !== 0
})

const getters = {
  isSetup: (state) => state.isSetup
  /* async isSetup (state) {
    const count = await db.resources.count()
    console.log('isSetup')
    console.log('count', count)
    return count !== 0
  } */
}

const actions = {
  setIsSetup: (context, value) => {
    context.commit('setIsSetup', value)
  }
}

const mutations = {
  setIsSetup: (state, value) => {
    console.log('setIsSetup')
    state.isSetup = value
  }
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
