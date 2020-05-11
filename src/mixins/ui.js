import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    navDrawerOpen: {
      get: function () {
        return this.$store.getters.navDrawerOpen
      },
      set: function (val) {
        this.$store.commit('navDrawerOpen', val)
      }
    },
    toolDrawerOpen: {
      get: function () {
        return this.$store.getters.toolDrawerOpen
      },
      set: function (val) {
        this.$store.commit('toolDrawerOpen', val)
      }
    },
    ...mapGetters([
      'page',
      'view',
      'navbox',
      'toolbox',
      'toolboxProps',
      'header',
      'toolbar',
      'menu',
      'footer'
    ])
  },
  methods: {
    ...mapActions([
      'setPage',
      'setView',
      'toggleNavDrawer',
      'setNavDrawerOpen',
      'toggleToolDrawer',
      'setToolDrawerOpen',
      'setNavbox',
      'setToolbox',
      'setToolboxProps',
      'setHeader',
      'setToolbar',
      'setMenu',
      'setFooter'
    ])
  }
}
