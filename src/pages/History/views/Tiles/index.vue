<template>
  <Tiles />
</template>

<script>
import View from 'components/history/View'
import Tiles from 'components/history/Tiles'

export default {
  name: 'HistoryTilesView',
  extends: View,
  mixins: [],
  data () {
    return {
    }
  },
  components: {
    Tiles
  },
  mounted () {
  }
}
</script>
