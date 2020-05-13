<template>
  <EventCards />
</template>

<script>
import View from 'components/history/View'
import EventCards from 'components/history/Cards'

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
  }
}
</script>
