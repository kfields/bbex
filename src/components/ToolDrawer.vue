<template>
  <q-drawer
    v-model="toolDrawerOpen"
    content-class="drawer"
    side="right"
  >

    <div class="navbox">
      <component :is="toolbox" v-bind="toolboxProps" />
    </div>

  </q-drawer>
</template>

<script>
import UiMixin from 'src/mixins/ui'
export default {
  name: 'ToolDrawer',
  mixins: [UiMixin],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  beforeMount () {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .navbox {
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
    background-color: #222222;
    font-size: .8125rem;
    font-weight: 600;
  }
</style>
