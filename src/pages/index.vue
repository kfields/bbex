<template>
  <q-page class="flex flex-center">

    <div>
      <div>
        <h2>Recent History</h2>
        <History :max="5" />
      </div>

      <div>
        <h2>Recent Bookmarks</h2>
        <Bookmarks :max="5" />
      </div>

    </div>
  </q-page>
</template>

<script>
import Page from 'components/Page'
import Navbox from './Navbox'
import Header from './Header'

import History from '../components/history/List'
import Bookmarks from '../components/bookmarks/List'

export default {
  name: 'PageIndex',
  extends: Page,
  mixins: [],
  data () {
    return {
    }
  },
  components: {
    History,
    Bookmarks
  },
  mounted () {
    this.setPage(this)
    this.setNavbox(Navbox)
    this.setHeader(Header)
  }
}
</script>
