<template>
  <EventHeader :event="event"/>
</template>

<script>
import EventHeader from './Header'

export default {
  name: 'EventItem',
  props: ['event'],
  components: {
    EventHeader
  },
  methods: {
  }
}
</script>

<style lang="scss">
a {
  color: black;
  text-decoration: none;
}
</style>
