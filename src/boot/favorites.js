import { db } from './dexie'
import { Resources } from './resources'

class Favorites extends Resources {
  async getAll (id) {
    const results = this.resources = await db.resources.where('favorite').equals(1).reverse().sortBy('lastVisitTime')
    return results
  }

  async more (offset, limit, options = {}) {
    if (options.text) {
      return await this.search(offset, limit, options)
    }
    const results = this.resources = await db.resources.where('favorite').equals(1).offset(offset).limit(limit).reverse().sortBy('lastVisitTime')
    return results
  }

  async find (options = {}) {
    console.log('favorites find')
    console.log(options)
    const topSites = () => new Promise((resolve, reject) => {
      chrome.topSites.get(resolve)
    })
    this.favorites = await topSites()
    return this.favorites
  }
}

export const favorites = new Favorites()

export default async ({ Vue }) => {
  console.log('booting favorites')
  Vue.prototype.$favorites = favorites
}
