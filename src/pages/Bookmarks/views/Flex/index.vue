<template>
  <Flex />
</template>

<script>
import View from 'components/View'
import Flex from 'components/bookmarks/Flex'
import Toolbar from './Toolbar'

export default {
  name: 'BookmarkFlexView',
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
    this.setToolbar(Toolbar)
  }
}
</script>
