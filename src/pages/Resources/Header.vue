<template>
  <header-shell>
    <h1>
      <q-icon name="link" class="header-icon"/>
      Resources
    </h1>
  </header-shell>
</template>

<script>
import UiMixin from 'src/mixins/ui'

export default {
  name: 'BookmarksHeader',
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
