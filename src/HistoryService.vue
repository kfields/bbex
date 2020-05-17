<template>
  <div/>
</template>

<script>
export default {
  name: 'HistoryService',
  methods: {
    async onVisited (item) {
      console.log('New Visit: ', item)
      await this.$resources.internFromHistory(item)
    },
    async onTabUpdated (tabId, changeInfo, tab) {
      console.log('Tab updated: ', changeInfo, tab)
      await this.$resources.updateFromTab(tabId, changeInfo, tab)
    }
  },

  created () {
    console.log('created', this)
    if (!chrome.history.onVisited.hasListener(this.onVisited)) {
      chrome.history.onVisited.addListener(this.onVisited)
    }
    if (!chrome.tabs.onUpdated.hasListener(this.onVisited)) {
      chrome.tabs.onUpdated.addListener(this.onTabUpdated)
    }

    window.addEventListener('beforeunload', this.beforeDestroy)
  },

  beforeDestroy () {
    chrome.history.onVisited.removeListener(this.onVisited)
    chrome.tabs.onUpdated.removeListener(this.onTabUpdated)
  }
}
</script>
