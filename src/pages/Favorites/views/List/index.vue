<template>
  <FavoriteList />
</template>

<script>
import View from 'components/favorite/View'
import FavoriteList from 'components/favorite/List'

export default {
  name: 'FavoriteListView',
  extends: View,
  mixins: [],
  data () {
    return {
    }
  },
  components: {
    FavoriteList
  },
  mounted () {
  }
}
</script>
