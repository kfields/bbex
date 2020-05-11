// import axios from 'axios'
import { db } from './dexie'
// import algoliasearch from 'algoliasearch/lite'

class Bookmark {
  constructor (obj) {
    Object.assign(this, obj)
  }
}

function sameOptions (a, b) {
  if (a.search === b.search && a.max === b.max) {
    return true
  }
  return false
}

class Bookmarks {
  constructor () {
    this.options = {}
    this.bookmarks = null
    this.client = null
    this.index = null
  }

  async get (id) {
    const response = await db.bookmarks.get(id)
    return new Bookmark(response)
  }

  async more (ndx, ttl, options = {}) {
    const bookmarks = await this.find(options)
    const length = bookmarks.length
    const results = []
    for (let i = ndx; i < ndx + ttl; ++i) {
      if (i >= length) { break }
      results.push(bookmarks[i])
    }
    return results
  }

  async find (options = {}) {
    console.log('bookmark Find')
    console.log(options)

    if (!sameOptions(options, this.options)) {
      console.log('cache invalid')
      this.options = Object.assign({}, options)
      this.bookmarks = null
    }
    if (this.bookmarks) { return this.bookmarks }
    if (options && options.search) {
      console.log('algolia search')
      // this.client = algoliasearch(process.env.ALGOLIA_APPID, process.env.ALGOLIA_APIKEY)
      this.index = this.client.initIndex(process.env.ALGOLIA_bookmarkS)
      console.log('algolia index search')
      const results = await this.index.search(options.search)
      this.bookmarks = results.hits
      console.log('results')
      console.log(results)
    } else {
      // this.bookmarks = await db.bookmarks.orderBy('dateAdded').reverse().toArray()
      this.bookmarks = await db.bookmarks.orderBy('dateAdded').limit(options.max).reverse().toArray()
    }
    return this.bookmarks
  }
}

export const bookmarks = new Bookmarks()

export default async ({ Vue }) => {
  console.log('booting bookmarks')
  Vue.prototype.$bookmarks = bookmarks
}
