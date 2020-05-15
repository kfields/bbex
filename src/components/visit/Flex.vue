<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <div class="card-masonry">
      <EventCard v-for="event in history" v-bind:key="event.id" :event="event"/>
    </div>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import Collection from './Collection'
import EventCard from './Card'

export default {
  name: 'EventCards',
  extends: Collection,
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

<style lang="scss">
</style>
