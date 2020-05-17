<template>
  <div>
    <div>
      <q-card-section class="bg-primary text-white">
        Favorites
      </q-card-section>
      <Favorites text="" :maxResults="maxResults" />
    </div>

    <div>
      <q-card-section class="bg-primary text-white">
        Recent Bookmarks
      </q-card-section>
      <Bookmarks text="" :maxResults="maxResults" />
    </div>

    <div>
      <q-card-section class="bg-primary text-white">
        Recent History
      </q-card-section>
      <History text="" :maxResults="maxResults" />
    </div>
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
