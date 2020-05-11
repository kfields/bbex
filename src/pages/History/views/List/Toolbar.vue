<template>
  <q-toolbar>
    <q-form @submit="onSearch">
      <q-input rounded standout v-model="text" maxlength="32" dense style="padding:8px">
        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>
      </q-input>
    </q-form>
    <component :is="menu"/>
  </q-toolbar>
</template>

<script>
import Toolbar from 'components/Toolbar'

export default {
  name: 'BookmarkListToolbar',
  extends: Toolbar,
  components: {
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    onSearch () {
      console.log('search')
      console.log(this.view)
      this.view.query(this.text)
    }
  }
}
</script>
