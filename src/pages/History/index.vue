<template>
  <q-page>
    <component :is="view" />
  </q-page>
</template>

<script>
import Page from 'components/Page'
import Navbox from './Navbox'
import Header from './Header'
import Menu from './Menu'

import List from './views/List'
import Tiles from './views/Tiles'
import Cards from './views/Cards'
import Flex from './views/Flex'

export default {
  name: 'HistoryPage',
  extends: Page,
  data () {
    return {
      views: {
        List,
        Tiles,
        Cards,
        Flex
      }
    }
  },
  components: {
    Cards
  },
  mounted () {
    this.setPage(this)
    // this.setView(List)
    this.setNavbox(Navbox)
    this.setHeader(Header)
    this.setMenu(Menu)
  }
}
</script>
