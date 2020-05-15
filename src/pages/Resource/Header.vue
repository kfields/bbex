<template>
  <header-shell>
    <h1>
      <q-icon name="link" class="header-icon"/>
      Resource
    </h1>
  </header-shell>
</template>

<script>
import UiMixin from 'src/mixins/ui'

export default {
  name: 'ResourceHeader',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
  },
  methods: {
  }
}
</script>
