import { db } from './dexie'
import Fuse from 'fuse.js'

class Bookmarks {
  constructor () {
    this.options = {}
    this.bookmarks = null
    this.client = null
    this.index = null
  }

  remove (id, next) {
    db.bookmarks.delete(id)
    chrome.bookmarks.remove(id, next)
  }

  async get (id) {
    const response = await db.bookmarks.get(id)
    return response
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

    const getRecent = maxResults => new Promise((resolve, reject) => {
      chrome.bookmarks.getRecent(maxResults, resolve)
    })

    this.bookmarks = await getRecent(options.maxResults)
    if (options.text) {
      const fuseOptions = {
        // includeScore: true,
        // Search in `author` and in `tags` array
        keys: ['title']
      }
      const fuse = new Fuse(this.bookmarks, fuseOptions)
      const results = fuse.search(options.text)
      this.bookmarks = []
      for (const result of results) {
        this.bookmarks.push(result.item)
      }
    }

    return this.bookmarks
  }
}

export const bookmarks = new Bookmarks()

export default async ({ Vue }) => {
  console.log('booting bookmarks')
  Vue.prototype.$bookmarks = bookmarks
}
