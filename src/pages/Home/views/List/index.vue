<template>
  <div>
    <q-section>
      <q-section-header icon="favorite">
        Favorites
      </q-section-header>
      <Favorites text="" :maxResults="10" />
    </q-section>

    <q-section>
      <q-section-header icon="bookmarks">
        Recent Bookmarks
      </q-section-header>
      <Bookmarks text="" :maxResults="10" />
    </q-section>

    <q-section>
      <q-section-header icon="history">
        Recent History
      </q-section-header>
      <History text="" :maxResults="10" />
    </q-section>
  </div>
</template>

<script>
import View from 'components/home/View'
import Favorites from 'components/favorites/List'
import History from 'components/history/List'
import Bookmarks from 'components/bookmarks/List'

export default {
  name: 'HomeListView',
  extends: View,
  mixins: [],
  data () {
    return {
    }
  },
  components: {
    Favorites,
    Bookmarks,
    History
  },
  mounted () {
  }
}
</script>
