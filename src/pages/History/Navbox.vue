<template>
<div class="fit">
  <navbox-shell>
    <q-list>
      <q-item to="/events/create" exact>
        <q-item-section avatar>
          <q-icon name="link" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Add URL</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </navbox-shell>
</div>
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
