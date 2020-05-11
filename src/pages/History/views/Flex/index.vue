<template>
  <Flex />
</template>

<script>
import View from 'components/View'
import Flex from 'components/history/Flex'
import Toolbar from './Toolbar'

export default {
  name: 'HistoryFlexView',
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
