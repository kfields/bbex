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

        <q-toggle
          v-model="mark"
          color="blue"
          icon="bookmark"
          label="Bookmark"
        />

        <q-toggle
          v-model="favorite"
          color="red"
          icon="favorite"
          label="Favorite"
        />

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

        <q-field filled label="Date Added" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline">
              {{$moment(dateAdded).format('LLL')}}
            </div>
          </template>
        </q-field>

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
import VisitList from 'components/visits/List'
// import Menu from './Menu'

// import List from './views/List'
// import Cards from './views/Cards'
// import Flex from './views/Flex'

export default {
  name: 'ResourcePage',
  extends: Page,
  props: ['id'],
  data () {
    return {
      resource: null,
      title: '',
      url: decodeURIComponent(this.id),
      dateAdded: 0,
      mark: false,
      favorite: false
    }
  },
  components: {
    VisitList
  },
  async mounted () {
    this.setPage(this)
    // this.setView(List)
    this.setNavbox(Navbox)
    this.setHeader(Header)
    // this.setMenu(Menu)

    const resource = this.resource = await this.$resources.get(this.url)
    this.title = resource.title
    this.dateAdded = resource.dateAdded
    this.mark = resource.mark
    console.log('mark', this.mark)
    this.favorite = resource.favorite
  },
  methods: {
    save () {
    },
    remove () {
    }
  }
}
</script>
