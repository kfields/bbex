import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      options: {
        text: '',
        limit: 15,
        maxResults: 100000
      },
      bookmarks: [],
      subscriptions: []
    }
  },
  computed: {
    ...mapGetters([
      'bookmarkSearch'
    ])
  },
  created () {
  },
  destroyed () {
    for (const subscription of this.subscriptions) {
      this.$pubsub.unsubscribe(subscription)
    }
  },
  mounted: function () {
    this.options = this.bookmarkSearch
    this.subscriptions.push(this.$pubsub.subscribe('BookmarkSearch', this.onBookmarkSearch))
    this.subscriptions.push(this.$pubsub.subscribe('BookmarkAction', this.onBookmarkAction))
  },
  methods: {
    ...mapActions([
      'setBookmarkSearch'
    ]),
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
    reload () {
      console.log('reload')
      this.bookmarks = []
      if (this.$refs.infiniteScroll) {
        this.$refs.infiniteScroll.reset()
        this.$refs.infiniteScroll.resume()
        this.$refs.infiniteScroll.trigger()
      }
    },
    onBookmarkSearch (msg, data) {
      this.options = data
      console.log('onBookmarkSearch')
      console.log(this.options)
      this.reload()
    },
    onBookmarkAction (msg, data) {
    }
  }
}
