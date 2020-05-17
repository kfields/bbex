<template>
  <FavoriteCards />
</template>

<script>
import View from 'components/favorites/View'
import FavoriteCards from 'components/favorites/Cards'

export default {
  name: 'FavoriteCardsView',
  extends: View,
  mixins: [],
  data () {
    return {
    }
  },
  components: {
    FavoriteCards
  },
  mounted () {
  }
}
</script>
