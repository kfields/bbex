<template>
  <q-card>
    <BookmarkHeader :bookmark="bookmark"/>
    <q-card-section class="bg-primary text-white">
      <div>{{$moment(bookmark.dateAdded).format('LLL')}}</div>
    </q-card-section>

    <q-card-actions/>
  </q-card>
</template>

<script>
import BookmarkHeader from './Header'

export default {
  name: 'BookmarkCard',
  props: ['bookmark'],
  components: {
    BookmarkHeader
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
