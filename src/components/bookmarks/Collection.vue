<script>
import BookmarksMixin from 'src/mixins/bookmarks'

export default {
  name: 'BookmarkCollection',
  mixins: [BookmarksMixin],
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
    onBookmarkAction (msg, data) {
      switch (data.action) {
        case 'delete': {
          const id = data.bookmark.id
          this.$bookmarks.remove(id, () => {
            const index = this.bookmarks.findIndex(bookmark => bookmark.id === id)
            this.bookmarks.splice(index, 1)
          })
        }
      }
    }
  }
}
</script>
