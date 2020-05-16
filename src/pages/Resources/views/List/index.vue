<template>
  <ResourceList />
</template>

<script>
import View from 'components/resources/View'
import ResourceList from 'components/resources/List'

export default {
  name: 'ResourceListView',
  extends: View,
  mixins: [],
  data () {
    return {
    }
  },
  components: {
    ResourceList
  },
  mounted () {
  }
}
</script>
