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
import Favorites from 'components/favorites/Flex'
import History from 'components/history/Flex'
import Bookmarks from 'components/bookmarks/Flex'

export default {
  name: 'HomeFlexView',
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
