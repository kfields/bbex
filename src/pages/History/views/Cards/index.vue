<template>
  <EventCards />
</template>

<script>
import View from 'components/View'
import EventCards from 'components/history/Cards'
import Toolbar from './Toolbar'

export default {
  name: 'EventCardsView',
  extends: View,
  mixins: [],
  data () {
    return {
    }
  },
  components: {
    EventCards
  },
  mounted () {
    this.setToolbar(Toolbar)
  }
}
</script>
