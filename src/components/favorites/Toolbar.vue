<template>
  <q-toolbar>
    <!-- <q-form @submit="search">
      <q-input rounded standout v-model="text" maxlength="32" dense style="padding:8px">
        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="clear" class="cursor-pointer" />
          <q-icon name="search" />
        </template>
      </q-input>
    </q-form> -->
    <view-switcher />
    <!-- <component :is="menu"/> -->
  </q-toolbar>
</template>

<script>
import ViewSwitcher from 'components/ViewSwitcher'
import Toolbar from 'components/Toolbar'
import FavoritesMixin from 'src/mixins/favorites'

export default {
  name: 'BookmarkListToolbar',
  extends: Toolbar,
  mixins: [FavoritesMixin],
  components: {
    ViewSwitcher
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    search () {
      console.log('search')
      const search = this.historySearch
      search.text = this.text
      this.setHistorySearch(search)
    },
    clear () {
      this.text = ''
      this.search()
    }
  }
}
</script>
