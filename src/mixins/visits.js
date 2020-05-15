export default {
  data () {
    return {
      options: {
        url: '',
        limit: 15,
        maxResults: 100000
      },
      visits: [],
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
    this.subscriptions.push(this.$pubsub.subscribe('VisitSearch', this.onVisitSearch))
    this.subscriptions.push(this.$pubsub.subscribe('VisitAction', this.onVisitAction))
  },
  methods: {
    more (index, done) {
      this.$nextTick(async () => {
        console.log(`more: ${index}`)
        console.log(this.options)
        const limit = this.options.limit
        const visits = await this.$visits.more((index - 1) * limit, limit, this.options)
        if (visits.length === 0) {
          this.$refs.infiniteScroll.stop()
          return done()
        }
        this.visits = this.visits.concat(visits)
        done()
      })
    },
    reload () {
      console.log('reload')
      this.visits = []
      if (this.$refs.infiniteScroll) {
        this.$refs.infiniteScroll.reset()
        this.$refs.infiniteScroll.resume()
        this.$refs.infiniteScroll.trigger()
      }
    },
    onVisitSearch (msg, data) {
      this.options = data
      console.log('onVisitSearch')
      console.log(this.options)
      this.reload()
    },
    onVisitAction (msg, data) {
    }
  }
}
