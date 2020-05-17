<template>
  <q-card>
    <ResourceHeader :resource="resource"/>
    <q-card-section>
      <div>{{$moment(resource.dateAdded).format('LLL')}}</div>
    </q-card-section>

    <q-card-actions/>
  </q-card>
</template>

<script>
import ResourceHeader from './Header'

export default {
  name: 'ResourceCard',
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
  color: white;
  text-decoration: none;
}
</style>
