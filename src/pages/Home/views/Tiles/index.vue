<template>
  <div>
    <q-section>
      <q-section-header icon="favorite">
        Favorites
      </q-section-header>
      <Favorites text="" :maxResults="5" />
    </q-section>

    <q-section>
      <q-section-header icon="bookmarks">
        Recent Bookmarks
      </q-section-header>
      <Bookmarks text="" :maxResults="5" />
    </q-section>

    <q-section>
      <q-section-header icon="history">
        Recent History
      </q-section-header>
      <History text="" :maxResults="5" />
    </q-section>
  </div>
</template>

<script>
import View from 'components/home/View'
import Favorites from 'components/favorites/Tiles'
import History from 'components/history/Tiles'
import Bookmarks from 'components/bookmarks/Tiles'

export default {
  name: 'HomeTilesView',
  extends: View,
  mixins: [],
  data () {
    return {
      maxResults: 16
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
