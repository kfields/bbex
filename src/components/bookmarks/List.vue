<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <q-list class="menu-list">
        <BookmarkItem v-for="bookmark in bookmarks" v-bind:key="bookmark.id" :bookmark="bookmark"/>
    </q-list>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import BookmarkItem from './Item'
import BookmarksMixin from 'src/mixins/bookmarks'

export default {
  name: 'BookmarkCards',
  mixins: [BookmarksMixin],
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
    BookmarkItem
  },
  mounted () {
    this.options.max = this.max
  },
  methods: {
    onBookmarkAction (msg, data) {
      switch (data.action) {
        case 'delete': {
          const id = data.bookmark.id
          this.$bookmarks.remove(id, () => {
            const index = this.bookmarks.findIndex(bookmark => bookmark.id === id)
            this.bookmarks.splice(index, 1)
          })
        }
      }
    }
  }
}
</script>
