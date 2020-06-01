<script>
import HistoryMixin from 'src/mixins/history'

export default {
  name: 'HistoryCollection',
  mixins: [HistoryMixin],
  props: {
    text: {
      default: ''
    },
    maxResults: {
      default: 100000
    }
  },
  data () {
    return {
    }
  },
  components: {
  },
  mounted () {
    this.options.text = this.text
    this.options.maxResults = this.maxResults
  },
  methods: {
    onEventAction (msg, data) {
      switch (data.action) {
        case 'delete': {
          console.log(data.event)
          const id = data.event.id
          this.$history.remove(id, () => {
            const index = this.history.findIndex(event => event.id === id)
            this.history.splice(index, 1)
          })
        }
      }
    }
  }
}
</script>
