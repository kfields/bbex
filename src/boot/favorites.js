import { db } from './dexie'
import { Resources } from './resources'

class Favorites extends Resources {
  async create (url, title = '', dateAdded = Date.now(), lastVisitTime = Date.now(), visitCount = 1) {
    return await super.create(url, title, dateAdded, lastVisitTime, visitCount, 1, false, true)
  }

  async getAll (id) {
    const results = this.resources = await db.resources.where('favorite').equals(1).reverse().sortBy('lastVisitTime')
    return results
  }

  async getSome (offset, limit, options = {}) {
    const results = this.resources = await db.resources.where('favorite').equals(1).offset(offset).limit(limit).reverse().sortBy('lastVisitTime')
    return results
  }
}

export const favorites = new Favorites()

export default async ({ Vue }) => {
  console.log('booting favorites')
  Vue.prototype.$favorites = favorites
}
