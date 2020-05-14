<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <q-list class="menu-list">
        <EventItem v-for="event in history" v-bind:key="event.id" :event="event"/>
    </q-list>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import Collection from './Collection'
import EventItem from './Item'

export default {
  name: 'EventList',
  extends: Collection,
  props: {
  },
  data () {
    return {
    }
  },
  components: {
    EventItem
  },
  mounted () {
  }
}
</script>
