<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <div class="card-masonry">
      <FavoriteCard v-for="favorite in favorites" v-bind:key="favorite.id" :favorite="favorite"/>
    </div>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import Collection from './Collection'
import FavoriteCard from './Card'

export default {
  name: 'FavoriteCards',
  extends: Collection,
  data () {
    return {
    }
  },
  components: {
    FavoriteCard
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
