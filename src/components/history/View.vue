<script>
import View from 'components/View'
import Toolbar from 'components/history/Toolbar'
import Toolbox from 'components/history/Toolbox'

export default {
  name: 'HistoryView',
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
