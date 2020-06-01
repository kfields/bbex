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
    onFavoriteAction (msg, data) {
      switch (data.action) {
        case 'delete': {
          const url = data.favorite.url
          this.$favorites.remove(url, () => {
            const index = this.favorites.findIndex(favorite => favorite.url === url)
            this.favorites.splice(index, 1)
          })
        }
      }
    }
  }
}
</script>
