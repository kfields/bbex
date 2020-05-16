import { db } from './dexie'
import Fuse from 'fuse.js'

/* function sameOptions (a, b) {
  if (a.search === b.search && a.max === b.max) {
    return true
  }
  return false
} */
export class Resource {
  constructor (url, title = '', dateAdded = 0, lastVisitTime = 0, visitCount = 1, marked = false) {
    this.url = url
    this.title = title
    this.dateAdded = dateAdded
    this.lastVisitTime = lastVisitTime
    this.visitCount = visitCount
    this.marked = marked
  }
}

class Resources {
  constructor () {
    this.options = {}
    this.resources = null
    this.client = null
    this.index = null
  }

  async internFromHistory (item) {
    var resource = await db.resources.get(item.url)
    if (!resource) {
      resource = new Resource(item.url, item.title, item.lastVisitTime, item.lastVisitTime, item.visitCount)
      await db.resources.put(resource)
    } else {
      const { lastVisitTime, visitCount } = item
      await db.resources.update(item.url, { lastVisitTime, visitCount })
    }
  }

  async get (id) {
    const response = await db.resources.get(id)
    return response
  }

  async more (ndx, ttl, options = {}) {
    const resources = await this.find(options)
    const length = resources.length
    const results = []
    for (let i = ndx; i < ndx + ttl; ++i) {
      if (i >= length) { break }
      results.push(resources[i])
    }
    return results
  }

  async find (options = {}) {
    console.log('find resources')
    console.log(options)

    /* if (!sameOptions(options, this.options)) {
      console.log('cache invalid')
      this.options = Object.assign({}, options)
      this.resources = null
    }
    if (this.resources) { return this.resources } */

    // this.resources = await db.resources.orderBy('dateAdded').limit(options.max).reverse().toArray()
    // this.resources = await db.resources.toArray()
    this.resources = await db.resources.orderBy('lastVisitTime').limit(options.maxResults).reverse().toArray()

    if (options.text) {
      console.log('using search')
      const fuseOptions = {
        // includeScore: true,
        // Search in `author` and in `tags` array
        keys: ['title']
      }
      const fuse = new Fuse(this.resources, fuseOptions)
      const results = fuse.search(options.text)
      this.resources = []
      for (const result of results) {
        this.resources.push(result.item)
      }
    }
    console.log(`found ${this.resources.length} resources`)
    return this.resources
  }

  remove (id, next) {
    db.resources.delete(id)
    chrome.resources.remove(id, next)
  }
}

export const resources = new Resources()

export default async ({ Vue }) => {
  console.log('booting resources')
  Vue.prototype.$resources = resources
}
