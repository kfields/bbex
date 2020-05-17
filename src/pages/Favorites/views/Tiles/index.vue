<template>
  <Tiles />
</template>

<script>
import View from 'components/favorites/View'
import Tiles from 'components/favorites/Tiles'

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
