<script>
import ResourcesMixin from 'src/mixins/resources'

export default {
  name: 'ResourceCollection',
  mixins: [ResourcesMixin],
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
    onResourceAction (msg, data) {
      switch (data.action) {
        case 'delete': {
          const id = data.resource.id
          this.$resources.remove(id, () => {
            const index = this.resources.findIndex(resource => resource.id === id)
            this.resources.splice(index, 1)
          })
        }
      }
    }
  }
}
</script>
