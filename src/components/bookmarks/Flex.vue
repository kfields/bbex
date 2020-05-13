<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <div class="card-masonry">
      <BookmarkCard v-for="bookmark in bookmarks" v-bind:key="bookmark.id" :bookmark="bookmark"/>
    </div>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import BookmarkCard from './Card'
import BookmarkCollection from './Collection'

export default {
  name: 'BookmarkCards',
  extends: BookmarkCollection,
  data () {
    return {
    }
  },
  components: {
    BookmarkCard
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
