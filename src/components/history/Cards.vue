<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <div class="card-column">
        <EventCard v-for="event in history" v-bind:key="event.id" :event="event"/>
    </div>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import EventCard from './Card'
import HistoryMixin from 'src/mixins/history'

export default {
  name: 'EventCards',
  mixins: [HistoryMixin],
  data () {
    return {
    }
  },
  components: {
    EventCard
  },
  mounted () {
  }
}
</script>
