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
  name: 'UsersHeader',
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
