<template>
<div class="fit">
  <navbox-shell>
    <q-list>
      <q-item to="/resources/create" exact>
        <q-item-section avatar>
          <q-icon name="add_circle_outline" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Add Resource</q-item-label>
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
  name: 'ResourcesNavbox',
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
