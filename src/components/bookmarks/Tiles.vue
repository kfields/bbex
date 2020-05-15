<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <div class="card-masonry">
      <BookmarkTile v-for="bookmark in bookmarks" v-bind:key="bookmark.id" :bookmark="bookmark"/>
    </div>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import BookmarkTile from './Tile'
import BookmarkCollection from './Collection'

export default {
  name: 'BookmarkCards',
  extends: BookmarkCollection,
  data () {
    return {
    }
  },
  components: {
    BookmarkTile
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
