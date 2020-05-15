<script>
import Navbox from './DefaultNavbox'
import Footer from './DefaultFooter'

import UiMixin from '../mixins/ui'

export default {
  mixins: [UiMixin],
  mounted () {
    this.setPage(this)
    this.setFooter(Footer)
    this.onSwitch()
  },
  beforeRouteUpdate (to, from, next) {
    this.onSwitch()
    next()
  },
  beforeRouteLeave (to, from, next) {
    this.setHeader(null)
    this.setNavbox(null)
    this.setToolbox(null)
    // this.setFooter(null)
    // this.setFooter(Footer)
    next()
  },
  methods: {
    use (name) {
      this.setView(this.views[name])
    },
    onSwitch () {
      this.setNavbox(Navbox)
      this.setFooter(Footer)
    }
  }
}
</script>
