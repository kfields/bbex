<template>
  <div class="header-shell row q-px-md">

    <div  class="header-title col">
      <slot name="icon" class="header-icon"/>
      <slot/>
    </div>

    <div class="auto-col">
      <component :is="toolbar" />
    </div>

  </div>
</template>

<script>
import UiMixin from 'src/mixins/ui'

export default {
  name: 'HeaderShell',
  mixins: [UiMixin],
  props: {
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

.header-shell {
}

</style>
