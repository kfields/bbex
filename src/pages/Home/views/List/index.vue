<template>
  <BookmarkList />
</template>

<script>
import View from 'components/bookmarks/View'
import BookmarkList from 'components/bookmarks/List'

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
  }
}
</script>
