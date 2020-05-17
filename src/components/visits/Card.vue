<template>
  <q-card>
    <EventHeader :event="event"/>
    <q-card-section class="bg-primary text-white">
      <div>{{$moment(event.lastVisitTime).format('LLL')}}</div>
    </q-card-section>

    <q-card-actions/>
  </q-card>
</template>

<script>
import EventHeader from './Header'

export default {
  name: 'BookmarkCard',
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
