<script>
import View from 'components/View'
import Toolbar from './Toolbar'
import Toolbox from './Toolbox'

export default {
  name: 'BookmarksView',
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
