import { db } from './dexie'
import Fuse from 'fuse.js'

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

  async more (offset, limit, options = {}) {
    const resources = await this.find(offset, limit, options)
    return resources
  }

  async find (offset, limit, options = {}) {
    console.log('find resources')
    console.log(options)

    this.resources = await db.resources.orderBy('lastVisitTime').offset(offset).limit(limit).reverse().toArray()

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
  }
}

export const resources = new Resources()

export default async ({ Vue }) => {
  console.log('booting resources')
  Vue.prototype.$resources = resources
}