<template>
  <div>
    <div>
      <q-card-section class="bg-primary text-white">
        Favorites
      </q-card-section>
      <Favorites text="" :maxResults="5" />
    </div>

    <div>
      <q-card-section class="bg-primary text-white">
        Recent Bookmarks
      </q-card-section>
      <Bookmarks text="" :maxResults="5" />
    </div>

    <div>
      <q-card-section class="bg-primary text-white">
        Recent History
      </q-card-section>
      <History text="" :maxResults="5" />
    </div>
  </div>
</template>

<script>
import View from 'components/home/View'
import Favorites from 'components/favorite/Cards'
import History from 'components/history/Cards'
import Bookmarks from 'components/bookmarks/Cards'

export default {
  name: 'BookmarkCardsView',
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
