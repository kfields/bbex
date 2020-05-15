<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page padding>
    <div class="fields">
        <q-input
          filled
          v-model="title"
          label="Title"
        />

        <q-input
          filled
          v-model="url"
          label="Url"
        />

        <q-field filled label="Date Added" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">
              {{$moment(bookmark.dateAdded).format('LLL')}}
            </div>
          </template>
        </q-field>
    </div>
  </q-page>
</template>

<script>
import Page from 'components/Page'
import Navbox from './Navbox'
import Header from './Header'
// import Menu from './Menu'

// import List from './views/List'
// import Cards from './views/Cards'
// import Flex from './views/Flex'

export default {
  name: 'BookmarkPage',
  extends: Page,
  props: ['id'],
  data () {
    return {
      bookmark: null,
      title: '',
      url: ''
    }
  },
  components: {
  },
  mounted () {
    this.setPage(this)
    chrome.bookmarks.get(this.id, bookmarks => {
      const bookmark = bookmarks[0]
      console.log('bookmark', bookmark)
      this.bookmark = bookmark
      this.title = bookmark.title
      this.url = bookmark.url
    })
    // this.setView(List)
    this.setNavbox(Navbox)
    this.setHeader(Header)
    // this.setMenu(Menu)
  },
  methods: {
    save () {
      const changes = {}
      if (this.title !== this.bookmark.title) {
        changes.title = this.title
      }
      if (this.url !== this.bookmark.url) {
        changes.url = this.url
      }
      chrome.bookmarks.update(this.id, changes, () => {
        this.$router.go(-1)
      })
    },
    remove () {
      chrome.bookmarks.remove(this.id, () => {
        this.$router.go(-1)
      })
    }
  }
}
</script>
