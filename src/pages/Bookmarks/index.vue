<template>
  <q-page class="flex flex-center">
    <component :is="view" />
  </q-page>
</template>

<script>
import Page from 'components/Page'
import Navbox from './Navbox'
import Header from './Header'
import Menu from './Menu'

import List from './views/List'
import Cards from './views/Cards'
import Flex from './views/Flex'

export default {
  name: 'BookmarksPage',
  extends: Page,
  data () {
    return {
      views: {
        Cards,
        Flex,
        List
      }
    }
  },
  components: {
    Cards
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
