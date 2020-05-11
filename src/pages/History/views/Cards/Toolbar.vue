<template>
  <q-toolbar>
    <q-input rounded standout v-model="search" maxlength="32" dense style="padding:8px">
      <template v-slot:append>
        <q-icon v-if="search !== ''" name="close" @click="search = ''" class="cursor-pointer" />
        <q-icon name="search" />
      </template>
    </q-input>
    <component :is="menu"/>
  </q-toolbar>
</template>

<script>
import Toolbar from 'components/Toolbar'

export default {
  name: 'BookmarkCardsToolbar',
  extends: Toolbar,
  components: {
  },

  data () {
    return {
      search: ''
    }
  }
}
</script>
