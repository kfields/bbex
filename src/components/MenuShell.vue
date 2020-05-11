<template>
  <div class="menu-shell">
    <slot/>
  </div>
</template>

<script>
import UiMixin from 'src/mixins/ui'

export default {
  name: 'MenuShell',
  mixins: [
    UiMixin
  ],
  props: {
    showShortcuts: {
      type: Boolean,
      default: true
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
