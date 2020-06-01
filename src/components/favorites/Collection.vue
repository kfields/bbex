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
  }
}
</script>
