export default {
  data () {
    return {
      options: {
        search: '',
        cursor: '',
        limit: 15,
        max: 100000
      },
      bookmarks: []
    }
  },
  watch: {
    options: async function (options, oldOptions) {
      console.log('watch')
      console.log(options)
      this.onOptions(options)
    }
  },
  created () {
  },
  destroyed () {
  },
  mounted: function () {
  },
  methods: {
    more (index, done) {
      this.$nextTick(async () => {
        console.log(`more: ${index}`)
        console.log(this.options)
        const limit = this.options.limit
        const bookmarks = await this.$bookmarks.more((index - 1) * limit, limit, this.options)
        if (bookmarks.length === 0) {
          this.$refs.infiniteScroll.stop()
          return done()
        }
        this.bookmarks = this.bookmarks.concat(bookmarks)
        done()
      })
    },
    reload: function () {
      console.log('reload')
      this.bookmarks = []
      this.$refs.infiniteScroll.reset()
      this.$refs.infiniteScroll.resume()
      this.$refs.infiniteScroll.trigger()
    },
    onOptions: async function (options) {
      console.log('bookmarks@onOptions')
      console.log(options)
    }
  }
}
