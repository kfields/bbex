export default {
  data () {
    return {
      options: {
        text: '',
        cursor: '',
        limit: 15,
        max: 100000
      },
      history: []
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
        const history = await this.$history.more((index - 1) * limit, limit, this.options)
        if (history.length === 0) {
          this.$refs.infiniteScroll.stop()
          return done()
        }
        this.history = this.history.concat(history)
        done()
      })
    },
    reload: function () {
      console.log('reload')
      this.history = []
      this.$refs.infiniteScroll.reset()
      this.$refs.infiniteScroll.resume()
      this.$refs.infiniteScroll.trigger()
    },
    onOptions: async function (options) {
      console.log('history@onOptions')
      console.log(options)
    }
  }
}
