<template>
  <navbox-shell>

    <q-list>
      <q-item @click="$router.go(-1)" clickable>
        <q-item-section avatar>
          <q-icon name="arrow_back_ios" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Back</q-item-label>
        </q-item-section>
      </q-item>
      <q-item @click="page.save()" clickable>
        <q-item-section avatar>
          <q-icon name="save" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Save</q-item-label>
        </q-item-section>
      </q-item>
      <q-item @click="page.remove()" clickable>
        <q-item-section avatar>
          <q-icon name="delete" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Delete</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </navbox-shell>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import NavboxShell from 'components/NavboxShell'

export default {
  name: 'BookmarkNavbox',
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
