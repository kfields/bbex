<template>
  <q-drawer v-model="navDrawerOpen" content-class="drawer" side="left">
    <div class="button-column" style="float: left; height: 100%">
      <router-link to="/" :exact="true">
        <q-btn flat icon="home" />
      </router-link>
      <router-link to="/history">
        <q-btn flat icon="history" />
      </router-link>
      <router-link to="/bookmarks">
        <q-btn flat icon="bookmarks" />
      </router-link>
    </div>
    <div class="navbox">
      <div v-bind:is="navbox" />
    </div>
  </q-drawer>
</template>

<script>
import UiMixin from 'src/mixins/ui'
export default {
  name: 'NavDrawer',
  mixins: [UiMixin],
  data () {
    return {}
  },
  computed: {},
  methods: {},
  beforeMount () {},
  mounted () {}
}
</script>

<style lang="scss">
.navbox {
  white-space: nowrap;
  overflow: hidden;
  height: 100%;
  background-color: #222222;
  font-size: 0.8125rem;
  font-weight: 600;
}
</style>
