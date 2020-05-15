<template>
  <BookmarkCards />
</template>

<script>
import View from 'components/bookmarks/View'
import BookmarkCards from 'components/bookmarks/Cards'

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
  }
}
</script>
