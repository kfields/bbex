export default {
  data () {
    return {
      options: {
        url: '',
        limit: 15,
        maxResults: 100000
      },
      favorites: [],
      subscriptions: []
    }
  },
  computed: {
  },
  created () {
  },
  destroyed () {
    for (const subscription of this.subscriptions) {
      this.$pubsub.unsubscribe(subscription)
    }
  },
  mounted: function () {
    this.options.url = this.url
    this.subscriptions.push(this.$pubsub.subscribe('FavoriteSearch', this.onFavoriteSearch))
    this.subscriptions.push(this.$pubsub.subscribe('FavoriteAction', this.onFavoriteAction))
  },
  methods: {
    more (index, done) {
      this.$nextTick(async () => {
        console.log(`more: ${index}`)
        console.log(this.options)
        const limit = this.options.limit
        const favorites = await this.$favorites.more((index - 1) * limit, limit, this.options)
        if (favorites.length === 0) {
          this.$refs.infiniteScroll.stop()
          return done()
        }
        this.favorites = this.favorites.concat(favorites)
        done()
      })
    },
    reload () {
      console.log('reload')
      this.favorites = []
      if (this.$refs.infiniteScroll) {
        this.$refs.infiniteScroll.reset()
        this.$refs.infiniteScroll.resume()
        this.$refs.infiniteScroll.trigger()
      }
    },
    onFavoriteSearch (msg, data) {
      this.options = data
      console.log('onFavoriteSearch')
      console.log(this.options)
      this.reload()
    },
    onFavoriteAction (msg, data) {
    }
  }
}
