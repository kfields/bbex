<template>
  <div/>
</template>

<script>
export default {
  name: 'BookmarkService',
  methods: {
    async onCreated (id, bookmark) {
      console.log('Bookmark Created: ', id, bookmark)
      await this.$resources.internFromBookmark(bookmark)
    },
    async onRemoved (id, removeInfo) {
      console.log('Bookmark Removed: ', id, removeInfo)
      // const { parentId, index, node } = removeInfo
      const { node } = removeInfo
      await this.$resources.removeFromBookmark(node)
    }
  },

  created () {
    console.log('created', this)
    if (!chrome.bookmarks.onCreated.hasListener(this.onCreated)) {
      chrome.bookmarks.onCreated.addListener(this.onCreated)
    }
    if (!chrome.bookmarks.onRemoved.hasListener(this.onRemoved)) {
      chrome.bookmarks.onRemoved.addListener(this.onRemoved)
    }

    window.addEventListener('beforeunload', this.beforeDestroy)
  },

  beforeDestroy () {
    chrome.bookmarks.onCreated.removeListener(this.onCreated)
    chrome.bookmarks.onRemoved.removeListener(this.onRemoved)
  }
}
</script>
