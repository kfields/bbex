<template>
  <FavoriteHeader :favorite="favorite"/>
</template>

<script>
import FavoriteHeader from './Header'

export default {
  name: 'FavoriteItem',
  props: ['favorite'],
  components: {
    FavoriteHeader
  },
  methods: {
  }
}
</script>

<style lang="scss">
a {
  color: black;
  text-decoration: none;
}
</style>
