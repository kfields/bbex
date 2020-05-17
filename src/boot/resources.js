import { db } from './dexie'
import Fuse from 'fuse.js'

export class Resource {
  constructor (url, title = '', dateAdded = 0, lastVisitTime = 0, visitCount = 1, mark = false, favorite = false) {
    this.url = url
    this.title = title
    this.dateAdded = dateAdded
    this.lastVisitTime = lastVisitTime
    this.visitCount = visitCount
    this.mark = mark ? 1 : 0
    this.favorite = favorite ? 1 : 0
  }
}

class Resources {
  constructor () {
    this.options = {}
    this.resources = null
    this.results = null
    this.fuseOptions = {
      useExtendedSearch: true,
      includeMatches: true,
      includeScore: true,
      threshold: 0.3,
      keys: ['title']
    }
    this.fuseIndex = null
  }

  async internFromHistory (item) {
    const url = item.url
    const urlObject = new URL(url)
    const urlProtocol = urlObject.protocol
    // const urlDomain = urlObject.hostname
    // const urlPort = urlObject.port

    if (urlProtocol === 'chrome-extension:') {
      return
    }
    var resource = await db.resources.get(item.url)
    if (!resource) {
      resource = new Resource(item.url, item.title, item.lastVisitTime, item.lastVisitTime, item.visitCount)
      await db.resources.put(resource)
    } else {
      const { lastVisitTime, visitCount } = item
      await db.resources.update(item.url, { lastVisitTime, visitCount })
    }
  }

  async updateFromTab (tabId, changeInfo, tab) {
    const { title } = tab
    await db.resources.update(tab.url, { title })
  }

  async get (id) {
    const response = await db.resources.get(id)
    return response
  }

  remove (id, next) {
    db.resources.delete(id)
  }

  async more (offset, limit, options = {}) {
    if (options.text) {
      return await this.search(offset, limit, options)
    }
    const resources = this.resources = await db.resources.orderBy('lastVisitTime').offset(offset).limit(limit).reverse().toArray()
    return resources
  }

  async search (ndx, ttl, options = {}) {
    const resources = await this.find(options)
    const length = resources.length
    const results = []
    for (let i = ndx; i < ndx + ttl; ++i) {
      if (i >= length) { break }
      results.push(resources[i])
    }
    return results
  }

  async find (options) {
    console.log('find resources')
    console.log(options)

    if (!this.index) {
      await this.buildIndex()
    }
    this.resources = await db.resources.orderBy('lastVisitTime').reverse().toArray()
    const fuse = new Fuse(this.resources, this.fuseOptions, this.fuseIndex)
    const results = fuse.search(options.text)
    console.log('fuse', results)
    this.resources = []
    for (const result of results) {
      this.resources.push(result.item)
    }

    console.log(`found ${this.resources.length} resources`)
    return this.resources
  }

  async buildIndex () {
    const list = await db.resources.orderBy('lastVisitTime').reverse().toArray()
    this.index = Fuse.createIndex(this.fuseOptions.keys, list)
  }
}

export const resources = new Resources()

export default async ({ Vue }) => {
  console.log('booting resources')
  Vue.prototype.$resources = resources
}
