<template>
  <div class="tile" @click="tileClick">
    <img :src="`chrome://favicon/size/32@1x/${bookmark.url}`"/>
    <div>
    {{ bookmark.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookmarkTile',
  props: ['bookmark'],
  data () {
    return {
      tileClicks: 0,
      delay: 250
    }
  },
  components: {
  },
  methods: {
    tileClick (e) {
      if (e.stopPropagation) e.stopPropagation()
      if (e.preventDefault) e.preventDefault()
      e.cancelBubble = true
      e.returnValue = false
      this.tileClicks++
      if (this.tileClicks === 1) {
        setTimeout(() => {
          switch (this.tileClicks) {
            case 1:
              console.log('single click')
              this.$router.push(`/bookmarks/${this.bookmark.id}`)
              break
            default:
              console.log('double click')
              window.open(this.bookmark.url, '_blank')
          }
          this.tileClicks = 0
        }, this.delay)
      }
    }
  }
}
</script>

<style lang="scss">
a {
  color: white;
  text-decoration: none;
}
</style>
