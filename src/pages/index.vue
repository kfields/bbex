<template>
  <q-page padding>

    <div>
      <div>
        <q-card-section class="bg-primary text-white">
          Recent History
        </q-card-section>

        <History text="" :maxResults="5" />
      </div>

      <div>
        <q-card-section class="bg-primary text-white">
          Recent Bookmarks
        </q-card-section>
        <Bookmarks text="" :maxResults="5" />
      </div>

    </div>
  </q-page>
</template>

<script>
import Page from 'components/Page'
import Navbox from './Navbox'
import Header from './Header'
import Toolbox from 'components/DefaultToolbox'
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
    this.setToolbox(Toolbox)
  }
}
</script>
