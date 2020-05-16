<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <q-list class="menu-list">
      <ResourceItem v-for="resource in resources" v-bind:key="resource.id" :resource="resource"/>
    </q-list>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import ResourceItem from './Item'
import ResourceCollection from './Collection'

export default {
  name: 'ResourceList',
  extends: ResourceCollection,
  data () {
    return {
    }
  },
  components: {
    ResourceItem
  },
  mounted () {
  },
  methods: {
  }
}
</script>
