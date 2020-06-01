import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      options: {
        text: '',
        limit: 15,
        maxResults: 100000
      },
      favorites: [],
      subscriptions: [],
      status: 'init'
    }
  },
  computed: {
    ...mapGetters([
      'favoriteSearch'
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
    this.options = this.favoriteSearch
    this.subscriptions.push(this.$pubsub.subscribe('FavoriteSearch', this.onFavoriteSearch))
    this.subscriptions.push(this.$pubsub.subscribe('FavoriteAction', this.onFavoriteAction))
  },
  methods: {
    ...mapActions([
      'setFavoriteSearch'
    ]),
    more (index, done) {
      this.$nextTick(async () => {
        console.log(`more: ${index}`)
        console.log(this.options)
        const limit = this.options.limit
        const favorites = await this.$favorites.more((index - 1) * limit, limit, this.options)
        console.log('more', index, favorites.length)
        if (favorites.length === 0) {
          this.$refs.infiniteScroll.stop()
          if (index === 1) {
            this.status = 'failure'
          } else { this.status = 'success' }
          return done()
        }
        this.favorites = this.favorites.concat(favorites)
        this.status = 'success'
        done()
      })
    },
    reload () {
      console.log('reload')
      this.status = 'loading'
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
