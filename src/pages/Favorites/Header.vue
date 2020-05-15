<template>
  <header-shell>
    <h1>
      <q-icon name="stars" class="header-icon"/>
      Favorites
    </h1>
  </header-shell>
</template>

<script>
import UiMixin from 'src/mixins/ui'

export default {
  name: 'FavoritesHeader',
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
