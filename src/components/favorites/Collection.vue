<script>
import FavoritesMixin from 'src/mixins/favorites'

export default {
  name: 'FavoriteCollection',
  mixins: [FavoritesMixin],
  props: {
    url: {
      default: ''
    }
  },
  data () {
    return {
    }
  },
  components: {
  },
  mounted () {
    this.options.url = this.url
  },
  methods: {
    onEventAction (msg, data) {
      switch (data.action) {
        case 'delete': {
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
