<script>
import View from 'components/View'
import Toolbar from 'components/favorites/Toolbar'
import Toolbox from 'components/favorites/Toolbox'

export default {
  name: 'FavoritesView',
  extends: View,
  mixins: [],
  data () {
    return {
    }
  },
  components: {
  },
  mounted () {
    this.setToolbar(Toolbar)
    this.setToolboxProps({ options: {} })
    this.setToolbox(Toolbox)
  },
  methods: {
  }
}
</script>
