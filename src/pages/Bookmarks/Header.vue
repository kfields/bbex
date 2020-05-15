<template>
  <header-shell>
    <h1>
      <q-icon name="bookmarks" class="header-icon"/>
      Bookmarks
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
