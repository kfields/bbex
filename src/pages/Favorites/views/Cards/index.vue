<template>
  <FavoriteCards />
</template>

<script>
import View from 'components/favorite/View'
import FavoriteCards from 'components/favorite/Cards'

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
