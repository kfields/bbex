<template>
<div class="fit">
  <navbox-shell>
    <q-list>
      <q-item clickable @click="createModal=true">
        <q-item-section avatar>
          <q-icon name="add_circle_outline" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Add Favorite</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </navbox-shell>
  <q-dialog v-model="createModal">
    <Create/>
  </q-dialog>
</div>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import NavboxShell from 'components/NavboxShell'
import Create from 'components/favorites/Create'

export default {
  name: 'DefaultNavbox',
  mixins: [UiMixin],
  props: [],
  data () {
    return {
      createModal: false
    }
  },
  components: {
    NavboxShell,
    Create
  },
  methods: {
  }
}
</script>
