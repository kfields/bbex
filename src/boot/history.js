// import axios from 'axios'
import { db } from './dexie'

class Event {
  constructor (obj) {
    Object.assign(this, obj)
  }
}

function sameOptions (a, b) {
  if (a.text === b.text && a.max === b.max) {
    return true
  }
  return false
}

class History {
  constructor () {
    this.options = {}
    this.history = null
    this.client = null
    this.index = null
  }

  async get (id) {
    const response = await db.history.get(id)
    return new Event(response)
  }

  async more (ndx, ttl, options = {}) {
    const history = await this.find(options)
    const length = history.length
    const results = []
    for (let i = ndx; i < ndx + ttl; ++i) {
      if (i >= length) { break }
      results.push(history[i])
    }
    return results
  }

  async find (options = {}) {
    console.log('history find')
    console.log(options)

    if (!sameOptions(options, this.options)) {
      console.log('cache invalid')
      this.options = Object.assign({}, options)
      this.history = null
    }
    if (this.history) { return this.history }
    const query = {
      text: '',
      maxResults: options.max
    }
    if (options && options.query) {
      query.text = options.query.text
    } else {
      // this.history = await db.history.orderBy('dateAdded').reverse().toArray()
      // this.history = await db.history.orderBy('dateAdded').limit(options.max).reverse().toArray()
      const search = query => new Promise((resolve, reject) => {
        chrome.history.search(query, resolve)
      })
      this.history = await search(query)
    }
    return this.history
  }
}

export const history = new History()

export default async ({ Vue }) => {
  console.log('booting history')
  Vue.prototype.$history = history
}
