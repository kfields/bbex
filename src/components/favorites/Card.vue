<template>
  <q-card>
    <FavoriteHeader :favorite="favorite"/>
    <q-card-section>
      <div>{{$moment(favorite.dateAdded).format('LLL')}}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import FavoriteHeader from './Header'

export default {
  name: 'BookmarkCard',
  props: ['favorite'],
  components: {
    FavoriteHeader
  },
  methods: {
  }
}
</script>

<style lang="scss">
a {
  color: white;
  text-decoration: none;
}
</style>
