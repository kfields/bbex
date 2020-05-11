<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <div class="card-column">
        <BookmarkCard v-for="bookmark in bookmarks" v-bind:key="bookmark.id" :bookmark="bookmark"/>
    </div>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import BookmarkCard from './Card'
import BookmarksMixin from 'src/mixins/bookmarks'

export default {
  name: 'BookmarkCards',
  mixins: [BookmarksMixin],
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
