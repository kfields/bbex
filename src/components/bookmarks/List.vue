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
import BookmarkCollection from './Collection'

export default {
  name: 'BookmarkCards',
  extends: BookmarkCollection,
  data () {
    return {
    }
  },
  components: {
    BookmarkItem
  },
  mounted () {
  },
  methods: {
  }
}
</script>
