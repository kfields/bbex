import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      options: {
        text: '',
        limit: 15,
        maxResults: 100000
      },
      history: []
    }
  },
  computed: {
    ...mapGetters([
      'historySearch'
    ])
  },
  created () {
  },
  destroyed () {
    this.$pubsub.unsubscribe(this.subscription)
  },
  mounted () {
    this.options = this.historySearch
    this.subscription = this.$pubsub.subscribe('EventSearch', (msg, data) => {
      console.log('on history search')
      console.log(msg)
      console.log(data)
      this.options = data
      this.onOptions(data)
    })
  },
  methods: {
    ...mapActions([
      'setHistorySearch'
    ]),
    more (index, done) {
      this.$nextTick(async () => {
        console.log(`more: ${index}`)
        console.log(this.options)
        const limit = this.options.limit
        const history = await this.$history.more((index - 1) * limit, limit, this.options)
        if (history.length === 0) {
          this.$refs.infiniteScroll.stop()
          return done()
        }
        this.history = this.history.concat(history)
        done()
      })
    },
    reload () {
      console.log('reload')
      this.history = []
      if (this.$refs.infiniteScroll) {
        this.$refs.infiniteScroll.reset()
        this.$refs.infiniteScroll.resume()
        this.$refs.infiniteScroll.trigger()
      }
    },
    async onOptions (options) {
      console.log('history@onOptions')
      console.log(options)
      this.reload()
    }
  }
}
