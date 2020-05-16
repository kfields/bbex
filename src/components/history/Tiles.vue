<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <div class="card-masonry">
      <EventTile v-for="event in history" v-bind:key="event.id" :event="event"/>
    </div>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import EventTile from './Tile'
import EventCollection from './Collection'

export default {
  name: 'EventCards',
  extends: EventCollection,
  data () {
    return {
    }
  },
  components: {
    EventTile
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
