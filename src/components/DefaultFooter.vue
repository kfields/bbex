<template>
<div>
  <footer-shell>
    <q-btn-group flat spread>
      <router-link to="/" :exact="true">
        <q-btn flat icon="home"/>
      </router-link>
      <router-link to="/history">
        <q-btn flat icon="history"/>
      </router-link>
      <router-link to="/bookmarks">
        <q-btn flat icon="bookmarks"/>
      </router-link>
    </q-btn-group>
  </footer-shell>
  </div>
</template>

<script>
import UiMixin from 'src/mixins/ui'
export default {
  name: 'DefaultFooter',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
  },
  data () {
    return {
      seamless: false
    }
  },
  methods: {
  }
}
</script>
