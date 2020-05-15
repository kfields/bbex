<template>
  <Tiles />
</template>

<script>
import View from 'components/favorite/View'
import Tiles from 'components/favorite/Tiles'

export default {
  name: 'FavoriteTilesView',
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
