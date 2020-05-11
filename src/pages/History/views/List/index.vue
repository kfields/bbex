<template>
  <EventList ref="events" />
</template>

<script>
import View from 'components/View'
import EventList from 'components/history/List'
import Toolbar from './Toolbar'

export default {
  name: 'EventListView',
  extends: View,
  mixins: [],
  data () {
    return {
    }
  },
  components: {
    EventList
  },
  mounted () {
    this.setToolbar(Toolbar)
  },
  methods: {
    query (text) {
      this.$refs.events.options.text = text
    }
  }
}
</script>
