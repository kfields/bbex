<template>
  <header-shell>
    <h1>
      <q-icon name="home" class="header-icon"/>
      Home
    </h1>
  </header-shell>
</template>

<script>
import UiMixin from 'src/mixins/ui'

export default {
  name: 'HomeHeader',
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
