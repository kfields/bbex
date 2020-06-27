const state = {
  navDrawerOpen: false,
  toolDrawerOpen: false,
  page: null,
  view: null,
  viewInfo: { kind: 'List', title: 'List', icon: 'list' },
  vu: null,
  navbox: null,
  toolbox: null,
  toolboxProps: null,
  header: null,
  toolbar: null,
  menu: null,
  footer: null
}

const getters = {
  navDrawerOpen: (state) => state.navDrawerOpen,
  toolDrawerOpen: (state) => state.toolDrawerOpen,
  page: (state) => state.page,
  view: (state) => state.view,
  viewInfo: (state) => state.viewInfo,
  vu: (state) => state.vu,
  navbox: (state) => state.navbox,
  toolbox: (state) => state.toolbox,
  toolboxProps: (state) => state.toolboxProps,
  header: (state) => state.header,
  toolbar: (state) => state.toolbar,
  menu: (state) => state.menu,
  footer: (state) => state.footer
}

const actions = {
  setNavDrawerOpen: ({ commit }, value) => {
    commit('navDrawerOpen', value)
  },
  toggleNavDrawer: ({ commit, state }) => {
    commit('navDrawerOpen', !state.navDrawerOpen)
  },
  setToolDrawerOpen: ({ commit }, value) => {
    commit('toolDrawerOpen', value)
  },
  toggleToolDrawer: ({ commit, state }) => {
    commit('toolDrawerOpen', !state.toolDrawerOpen)
  },
  setPage: ({ commit }, data) => {
    commit('page', data)
  },
  setView: ({ commit }, data) => {
    commit('view', data)
  },
  setViewInfo: ({ commit }, data) => {
    commit('viewInfo', data)
  },
  setVu: ({ commit }, data) => {
    commit('vu', data)
  },
  setNavbox: (context, navbox) => {
    context.commit('navbox', navbox)
  },
  setToolbox: (context, toolbox) => {
    context.commit('toolbox', toolbox)
  },
  setToolboxProps: (context, props) => {
    context.commit('toolboxProps', props)
  },
  setHeader: (context, header) => {
    context.commit('header', header)
  },
  setToolbar: (context, toolbar) => {
    context.commit('toolbar', toolbar)
  },
  setMenu: (context, menu) => {
    context.commit('menu', menu)
  },
  setFooter: (context, footer) => {
    context.commit('footer', footer)
  }
}

const mutations = {
  navDrawerOpen: (state, data) => {
    state.navDrawerOpen = data
  },
  toolDrawerOpen: (state, data) => {
    state.toolDrawerOpen = data
  },
  page: (state, data) => {
    state.page = data
  },
  view: (state, data) => {
    state.view = data
  },
  viewInfo: (state, data) => {
    state.viewInfo = data
  },
  vu: (state, data) => {
    state.view = data
  },
  navbox: (state, navbox) => {
    if (state.navbox === navbox) {
      return
    }
    state.navbox = navbox
  },
  toolbox: (state, toolbox) => {
    if (state.toolbox === toolbox) {
      return
    }
    state.toolbox = toolbox
  },
  toolboxProps: (state, props) => {
    if (state.toolboxProps === props) {
      return
    }
    state.toolboxProps = props
  },
  header: (state, header) => {
    state.header = header
  },
  toolbar: (state, toolbar) => {
    state.toolbar = toolbar
  },
  menu: (state, menu) => {
    state.menu = menu
  },
  footer: (state, footer) => {
    if (state.footer === footer) {
      return
    }
    state.footer = footer
  }
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
