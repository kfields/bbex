<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <q-list class="menu-list">
        <FavoriteItem v-for="favorite in favorites" v-bind:key="favorite.id" :favorite="favorite"/>
    </q-list>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import Collection from './Collection'
import FavoriteItem from './Item'

export default {
  name: 'FavoriteList',
  extends: Collection,
  props: {
  },
  data () {
    return {
    }
  },
  components: {
    FavoriteItem
  },
  mounted () {
  }
}
</script>
