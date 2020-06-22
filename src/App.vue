<template>
  <div id="q-app">
    <HistoryService />
    <BookmarkService />
    <router-view />
  </div>
</template>

<script>
import HistoryService from './HistoryService'
import BookmarkService from './BookmarkService'

export default {
  name: 'App',
  components: {
    HistoryService,
    BookmarkService
  } /* ,
  methods: {
    // Our function which receives the URL sent by the background script.
    doOnVisit (historyItem) {
      console.log('New Visit: ', historyItem)
    }
  },

  created () {
    // Add our listener
    this.$q.bex.on('bex.history.visit', this.doOnVisit)
  },

  beforeDestroy () {
    // Don't forget to clean it up
    this.$q.bex.off('bex.history.visit', this.doOnVisit)
  } */
}
</script>
