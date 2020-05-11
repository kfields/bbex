<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <q-list class="menu-list">
        <EventItem v-for="event in history" v-bind:key="event.id" :event="event"/>
    </q-list>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import EventItem from './Item'
import HistoryMixin from 'src/mixins/history'

export default {
  name: 'EventList',
  mixins: [HistoryMixin],
  props: {
    max: {
      default: 100000
    }
  },
  data () {
    return {
    }
  },
  components: {
    EventItem
  },
  mounted () {
    this.options.max = this.max
  }
}
</script>
