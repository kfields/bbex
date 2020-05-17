<template>
  <q-page padding class="fields">
    <q-btn color="primary" @click="setup" v-if="!isSetup && !settingUp">
      Setup
    </q-btn>
    <div id="console" ref="console" v-html="log" v-if="settingUp"/>
    <q-btn color="primary" @click="finish" v-if="isSetup">
      Finish
    </q-btn>
  </q-page>
</template>

<script>
import { db } from 'src/boot/dexie'
import { Resource } from 'src/boot/resources'

import Page from 'components/Page'
// import Navbox from './Navbox'
import Header from './Header'
// import Menu from './Menu'

export default {
  name: 'SetupPage',
  extends: Page,
  props: ['id'],
  data () {
    return {
      isSetup: this.$store.getters.isSetup,
      settingUp: false,
      log: '<div>Hi</div>'
    }
  },
  components: {
  },
  mounted () {
    this.setPage(this)
    // this.setView(List)
    // this.setNavbox(Navbox)
    this.setHeader(Header)
    // this.setMenu(Menu)
  },
  methods: {
    finish () {
      this.$router.replace('/')
    },
    async setup () {
      if (this.settingUp) {
        return
      }
      this.settingUp = true
      this.write('setting up ...')

      const search = query => new Promise((resolve, reject) => {
        console.log('maxResults', query.maxResults)
        console.log('startTime', query.startTime)
        chrome.history.search(query, resolve)
      })
      const query = {
        text: '',
        startTime: 0,
        maxResults: 1000000
      }
      const history = await search(query)
      this.write(`total history items: ${history.length}`)
      /* for (const item of history.slice(0, 20)) {
        this.write(item.url)
      } */

      // create resource dictionary
      const resourceDict = {}
      for (const item of history) {
        const url = item.url
        const urlObject = new URL(url)
        const urlProtocol = urlObject.protocol
        // const urlDomain = urlObject.hostname
        // const urlPort = urlObject.port

        if (urlProtocol === 'chrome-extension:') {
          continue
        }

        const resource = new Resource(item.url, item.title, item.lastVisitTime, item.lastVisitTime, item.visitCount)
        resourceDict[item.url] = resource
      }

      // integrate bookmarks
      const getRecent = maxResults => new Promise((resolve, reject) => {
        chrome.bookmarks.getRecent(maxResults, resolve)
      })
      const bookmarks = await getRecent(1000000)
      this.write(`total bookmarks: ${bookmarks.length}`)

      for (const item of bookmarks) {
        if (!(item.url in resourceDict)) {
          const resource = new Resource(item.url, item.title, item.dateAdded, item.dateAdded, 1, true)
          resourceDict[item.url] = resource
        } else {
          resourceDict[item.url].marked = true
        }
      }
      const resources = []

      for (const key in resourceDict) {
        resources.push(resourceDict[key])
      }
      this.write(`total resources: ${resources.length}`)
      this.write('inserting into database...')
      setTimeout(async () => {
        await db.resources.bulkPut(resources)
        this.write('finished inserting into database...')
        this.$store.dispatch('setIsSetup', true)
        this.isSetup = true
      })
    },
    write (text) {
      this.log += `<div>${text}</div>`
    }
  }
}
</script>

<style scoped lang="scss">
div#console {
  color: white;
  background-color: black;
  height: 100%;
  width: 100%;
  padding: 8px;
}
</style>
