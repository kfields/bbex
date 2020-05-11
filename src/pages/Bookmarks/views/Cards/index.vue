<template>
  <BookmarkCards />
</template>

<script>
import View from 'components/View'
import BookmarkCards from 'components/bookmarks/Cards'
import Toolbar from './Toolbar'

export default {
  name: 'BookmarkCardsView',
  extends: View,
  mixins: [],
  data () {
    return {
    }
  },
  components: {
    BookmarkCards
  },
  mounted () {
    this.setToolbar(Toolbar)
  }
}
</script>
