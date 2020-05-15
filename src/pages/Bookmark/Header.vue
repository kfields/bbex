<template>
  <header-shell>
    <h1>
      <q-icon name="bookmark" class="header-icon"/>
      Bookmark
    </h1>
  </header-shell>
</template>

<script>
import UiMixin from 'src/mixins/ui'

export default {
  name: 'BookmarkHeader',
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
