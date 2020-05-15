<template>
  <Tiles />
</template>

<script>
import View from 'components/bookmarks/View'
import Tiles from 'components/bookmarks/Tiles'

export default {
  name: 'BookmarkTilesView',
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
