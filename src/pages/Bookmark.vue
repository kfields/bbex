<template>
  <q-page>
    <q-card>
        <q-card-section class="bg-primary text-white">
        <!-- <router-link :to="`/bookmarks/${bookmark.id}`"> -->
        <div class="text-h6">{{ bookmark.title }}</div>
        <div class="text-subtitle2">{{$moment(bookmark.dateAdded).format('LLL')}}</div>
        <!-- </router-link> -->
        </q-card-section>
        <q-card-section>
        <div class="excerpt ellipsis-2-lines">
            {{bookmark.text}}
        </div>
        </q-card-section>
        <q-item :to="`/at/${bookmark.parentId}/`" v-if="bookmark.parentId">
        <q-item-section>
        </q-item-section>
        <q-item-section :label="bookmark.parentId.title" />
        </q-item>
        <q-card-actions/>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  mixins: [],
  name: 'BookmarkPage',
  props: ['bookmark'],
  data () {
    return {
    }
  },
  mounted: async function () {
  }
}
</script>
