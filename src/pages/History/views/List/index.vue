<template>
  <EventList ref="events" />
</template>

<script>
import View from 'components/history/View'
import EventList from 'components/history/List'

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
  },
  methods: {
  }
}
</script>
