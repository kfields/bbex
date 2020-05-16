<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <div class="card-masonry">
      <ResourceTile v-for="resource in resources" v-bind:key="resource.id" :resource="resource"/>
    </div>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import ResourceTile from './Tile'
import ResourceCollection from './Collection'

export default {
  name: 'ResourceCards',
  extends: ResourceCollection,
  data () {
    return {
    }
  },
  components: {
    ResourceTile
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
