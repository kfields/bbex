<template>
  <BookmarkHeader :bookmark="bookmark"/>
</template>

<script>
import BookmarkHeader from './Header'

export default {
  name: 'BookmarkItem',
  props: ['bookmark'],
  components: {
    BookmarkHeader
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
