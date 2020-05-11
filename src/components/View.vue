<script>
import Toolbar from './DefaultToolbar'

import UiMixin from '../mixins/ui'

export default {
  mixins: [UiMixin],
  mounted () {
    this.setToolbar(Toolbar)
    this.onSwitch()
  },
  beforeRouteUpdate (to, from, next) {
    this.onSwitch()
    next()
  },
  beforeRouteLeave (to, from, next) {
    this.setToolbar(null)
    next()
  },
  methods: {
    onSwitch () {
      this.setToolbar(Toolbar)
    }
  }
}
</script>
