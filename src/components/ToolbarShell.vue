<template>
  <div class="toolbar-shell">
    <slot/>
  </div>
</template>

<script>
import UiMixin from 'src/mixins/ui'

export default {
  name: 'ToolbarShell',
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

.toolbar-shell {
}

</style>
