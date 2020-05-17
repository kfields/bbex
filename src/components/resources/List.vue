<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <q-spinner v-if="status === 'loading'"
      class="fixed-center text-center"
      color="primary"
      size="3em"
      :thickness="10"
    />
    <q-list v-else-if="status === 'success'" class="menu-list">
      <ResourceItem v-for="resource in resources" v-bind:key="resource.id" :resource="resource"/>
    </q-list>
    <div v-else-if="status ==='failure'" class="fixed-center text-center">
      <p>
        <img
          src="~assets/sad.svg"
          style="width:30vw;max-width:150px;"
        >
      </p>
      <p class="text-faded">
        No results
      </p>
    </div>

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
