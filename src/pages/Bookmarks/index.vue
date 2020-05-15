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

import Tiles from './views/Tiles'
import List from './views/List'
import Cards from './views/Cards'
import Flex from './views/Flex'

export default {
  name: 'BookmarksPage',
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
  },
  mounted () {
    this.setPage(this)
    this.setView(List)
    this.setNavbox(Navbox)
    this.setHeader(Header)
    this.setMenu(Menu)
  }
}
</script>
