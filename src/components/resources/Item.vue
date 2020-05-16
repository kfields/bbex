<template>
  <ResourceHeader :resource="resource"/>
</template>

<script>
import ResourceHeader from './Header'

export default {
  name: 'ResourceItem',
  props: ['resource'],
  components: {
    ResourceHeader
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
