<template>
  <Flex />
</template>

<script>
import View from 'components/favorites/View'
import Flex from 'components/favorites/Flex'

export default {
  name: 'FavoriteFlexView',
  extends: View,
  mixins: [],
  data () {
    return {
    }
  },
  components: {
    Flex
  },
  mounted () {
  }
}
</script>
