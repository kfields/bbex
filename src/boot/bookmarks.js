import { db } from './dexie'
import { Resources } from './resources'

class Bookmarks extends Resources {
  async create (url, title = '', dateAdded = Date.now(), lastVisitTime = Date.now(), visitCount = 1) {
    return await super.create(url, title, dateAdded, lastVisitTime, visitCount, 1, true)
  }

  async getSome (offset, limit, options = {}) {
    const results = this.resources = await db.resources.where('bookmark').equals(1).offset(offset).limit(limit).reverse().sortBy('dateAdded')
    return results
  }

  async getAll (id) {
    const results = this.resources = await db.resources.where('bookmark').equals(1).reverse().sortBy('dateAdded')
    return results
  }
}

export const bookmarks = new Bookmarks()

export default async ({ Vue }) => {
  console.log('booting bookmarks')
  Vue.prototype.$bookmarks = bookmarks
}
