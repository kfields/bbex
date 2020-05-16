<template>
  <Tiles />
</template>

<script>
import View from 'components/resources/View'
import Tiles from 'components/resources/Tiles'

export default {
  name: 'ResourceTilesView',
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
