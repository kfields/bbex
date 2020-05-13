<template>
<div>
  <menu-shell>
    <tippy ref="tippy"
        interactive
        :animate-fill="false"
        placement="bottom"
        offset="0, 8"
        theme="light"
        animation="fade"
        trigger="click"
        arrow>
      <template v-slot:trigger>
        <q-btn fab-mini flat icon="more_vert"/>
      </template>
      <q-list>
        <q-item @click="use('List')" clickable>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>List</q-item-label>
          </q-item-section>
        </q-item>
        <q-item @click="use('Cards')" clickable>
          <q-item-section avatar>
            <q-icon name="view_agenda" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cards</q-item-label>
          </q-item-section>
        </q-item>
        <q-item @click="use('Flex')" clickable>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Flex</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </tippy>
  </menu-shell>
</div>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import MenuShell from 'components/MenuShell'

export default {
  name: 'HistoryMenu',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
    MenuShell
  },
  methods: {
    use (name) {
      console.log('tippy', this.$refs.tippy)
      this.$refs.tippy.tip.hide()
      this.page.use(name)
    }
  }
}
</script>
