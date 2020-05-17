<template>
  <q-card>
    <EventHeader :event="event"/>
    <q-card-section>
      {{$moment(event.lastVisitTime).format('LLL')}}
    </q-card-section>
  </q-card>
</template>

<script>
import EventHeader from './Header'

export default {
  name: 'HistoryCard',
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
  color: white;
  text-decoration: none;
}
</style>
