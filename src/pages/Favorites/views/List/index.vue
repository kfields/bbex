<template>
  <FavoriteList />
</template>

<script>
import View from 'components/favorites/View'
import FavoriteList from 'components/favorites/List'

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
