<template>
  <q-layout view="lHr LpR lFr">

    <q-header :v-if="header" elevated reveal>
      <div v-bind:is="header" />
    </q-header>

    <nav-drawer />

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer :v-if="footer" reveal>
      <div v-bind:is="footer" />
    </q-footer>

    <tool-drawer />

  </q-layout>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import NavDrawer from 'components/NavDrawer'
import ToolDrawer from 'components/ToolDrawer'
export default {
  name: 'DefaultLayout',
  mixins: [UiMixin],
  components: {
    NavDrawer,
    ToolDrawer
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
    this.setNavDrawerOpen(this.$q.platform.is.desktop)
    this.setToolDrawerOpen(this.$q.platform.is.desktop)
  }

}
</script>

<style>
</style>
