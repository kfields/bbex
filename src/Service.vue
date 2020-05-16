<template>
  <div/>
</template>

<script>
export default {
  name: 'Service',
  methods: {
    // Our function which receives the URL sent by the background script.
    async onVisited (item) {
      console.log('New Visit: ', item)
      // console.log(this)
      // this.$q.bex.send(event.eventResponseKey)
      await this.$resources.internFromHistory(item)
    }
  },

  created () {
    console.log('created', this)
    // Add our listener
    // this.$q.bex.on('bex.history.visit', this.doOnVisit)
    // window.addEventListener('beforeunload', this.beforeDestroy)
    if (!chrome.history.onVisited.hasListener(this.onVisited)) {
      chrome.history.onVisited.addListener(this.onVisited)
    }

    window.addEventListener('beforeunload', () => {
      chrome.history.onVisited.removeListener(this.onVisited)
    })
  },

  beforeDestroy () {
    // Don't forget to clean it up
    // this.$q.bex.off('bex.history.visit', this.doOnVisit)
  }
}
</script>
