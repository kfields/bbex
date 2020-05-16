<template>
<div class="fit">
  <navbox-shell>
    <!-- <q-list>
      <q-item to="/bookmarks/create" exact>
        <q-item-section avatar>
          <q-icon name="bookmark" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Add Bookmark</q-item-label>
        </q-item-section>
      </q-item>
    </q-list> -->
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
