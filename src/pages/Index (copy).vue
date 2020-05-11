<template>
  <q-page class="flex flex-center">
    <div class="card-column">
      <BookmarkCard v-for="bookmark in bookmarks" v-bind:key="bookmark.id" :bookmark="bookmark"/>
    </div>
  </q-page>
</template>

<script>
import BookmarkCard from '../components/BookmarkCard'

export default {
  name: 'PageIndex',
  data () {
    return {
      bookmarks: []
    }
  },
  components: {
    BookmarkCard
  },
  mounted () {
    chrome.bookmarks.getRecent(100, (results) => {
      this.bookmarks = results
    })
  }
}
</script>
