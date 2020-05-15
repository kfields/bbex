<template>
  <VisitHeader :visit="visit"/>
</template>

<script>
import VisitHeader from './Header'

export default {
  name: 'VisitItem',
  props: ['visit'],
  components: {
    VisitHeader
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
