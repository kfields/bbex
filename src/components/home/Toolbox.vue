<template>
  <div>
    <q-item>
      <q-item-section class="text-h6">
        Search
      </q-item-section>
    </q-item>
    <q-form @submit="search">
      <q-card dark class="drawer-item">
        <q-card-section>
          <q-input rounded standout v-model="text" dark dense>
            <template v-slot:append>
              <q-icon v-if="text !== ''" name="close" @click="clear" class="cursor-pointer" />
              <q-icon name="search" />
            </template>
          </q-input>
        </q-card-section>
        <!-- <q-card-section class="fields">
          <div class="fields">
            <q-datetime v-model="start" type="datetime" label="From" :dark="true"/>
            <q-datetime v-model="end" type="datetime" label="To" :dark="true"/>
          </div>
        </q-card-section> -->
        <q-card-actions align="right">
          <!-- <q-btn icon="search" round type="submit" class="float-left"/> -->
          <q-btn label="Submit" type="submit" class="float-left"/>
          <q-btn label="Clear" @click="clear" class="float-right"/>
        </q-card-actions>
      </q-card>
    </q-form>
  </div>
</template>

<script>
import BookmarksMixin from 'src/mixins/bookmarks'

export default {
  name: 'BookmarksToolbox',
  mixins: [BookmarksMixin],
  props: ['duh'],
  components: {
  },
  data () {
    return {
      searching: false,
      text: '',
      start: this.$moment().subtract(24, 'h').valueOf(),
      end: this.$moment().valueOf()
    }
  },
  mounted: function () {
    const options = this.options
    console.log('BookmarksToolbox mounted')
    console.log(options)
  },
  methods: {
    search () {
      console.log('bookmark search')
      console.log(this.options)
      const search = this.bookmarkSearch
      search.text = this.text
      // search.startTime = this.start.getTime()
      // search.endTime = this.end.getTime()
      this.setBookmarkSearch(search)
      this.searching = true
    },
    clear () {
      this.text = ''
      this.search()
    }
  }
}
</script>
