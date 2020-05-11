<template>
<navbox-shell>
  <q-toolbar>
    <q-toolbar-title>
      {{page.title}}
    </q-toolbar-title>
  </q-toolbar>
</navbox-shell>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import NavboxShell from 'components/NavboxShell'

export default {
  name: 'DefaultNavbox',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
    NavboxShell
  },
  methods: {
  }
}
</script>
