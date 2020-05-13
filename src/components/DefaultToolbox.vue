<template>
<navbox-shell>
  <q-toolbar>
    <q-toolbar-title>
      {{view.title}}
    </q-toolbar-title>
  </q-toolbar>
</navbox-shell>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import NavboxShell from 'components/NavboxShell'

export default {
  name: 'DefaultToolbox',
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
