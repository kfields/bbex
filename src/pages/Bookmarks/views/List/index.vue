<template>
  <BookmarkList />
</template>

<script>
import View from 'components/View'
import BookmarkList from 'components/bookmarks/List'
import Toolbar from './Toolbar'

export default {
  name: 'BookmarkListView',
  extends: View,
  mixins: [],
  data () {
    return {
    }
  },
  components: {
    BookmarkList
  },
  mounted () {
    this.setToolbar(Toolbar)
  }
}
</script>
