<template>
  <q-infinite-scroll ref="infiniteScroll" @load="more">
    <q-list class="menu-list">
        <VisitItem v-for="visit in visits" v-bind:key="visit.id" :visit="visit"/>
    </q-list>
    <q-spinner slot="message" :size="40"/>
  </q-infinite-scroll>
</template>

<script>
import Collection from './Collection'
import VisitItem from './Item'

export default {
  name: 'VisitList',
  extends: Collection,
  props: {
  },
  data () {
    return {
    }
  },
  components: {
    VisitItem
  },
  mounted () {
  }
}
</script>
