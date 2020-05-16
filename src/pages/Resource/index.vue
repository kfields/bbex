<template>
  <q-page padding>
    <div class="fields">
        <q-field
          filled
          label="Title"
          stack-label
        >
          <template v-slot:control>
            <div class="self-center full-width no-outline">
              {{title}}
            </div>
          </template>
          <template v-slot:prepend>
            <img :src="`chrome://favicon/${url}`"/>
          </template>
        </q-field>

        <q-field
          filled
          label="Url"
          stack-label
        >
          <template v-slot:control>
            <div class="self-center full-width no-outline">
              {{url}}
            </div>
          </template>
        </q-field>

        <!-- <q-field filled label="Date Added" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">
              {{$moment(bookmark.dateAdded).format('LLL')}}
            </div>
          </template>
        </q-field> -->

        <q-card-section class="bg-primary text-white">
          Visits
        </q-card-section>

        <VisitList ref="visits" :url="url" />

    </div>
  </q-page>
</template>

<script>
import Page from 'components/Page'
import Navbox from './Navbox'
import Header from './Header'
import VisitList from 'components/visit/List'
// import Menu from './Menu'

// import List from './views/List'
// import Cards from './views/Cards'
// import Flex from './views/Flex'

export default {
  name: 'UrlPage',
  extends: Page,
  props: ['id'],
  data () {
    return {
      resource: null,
      title: '',
      url: decodeURIComponent(this.id)
    }
  },
  components: {
    VisitList
  },
  async mounted () {
    this.setPage(this)
    /* const query = {
      text: `"${this.url}"`,
      startTime: 0,
      maxResults: 1
    }
    chrome.history.search(query, resources => {
      const resource = resources[0]
      console.log('resource', resource)
      this.resource = resource
      this.title = resource.title
    }) */
    const resource = this.resource = await this.$resources.get(this.url)
    this.title = resource.title
    // this.setView(List)
    this.setNavbox(Navbox)
    this.setHeader(Header)
    // this.setMenu(Menu)
  },
  methods: {
    save () {
    },
    remove () {
    }
  }
}
</script>
