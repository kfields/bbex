<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <div class="card-masonry">
      <FavoriteTile v-for="favorite in favorites" v-bind:key="favorite.id" :favorite="favorite"/>
    </div>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import FavoriteTile from './Tile'
import FavoriteCollection from './Collection'

export default {
  name: 'FavoriteCards',
  extends: FavoriteCollection,
  data () {
    return {
    }
  },
  components: {
    FavoriteTile
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
