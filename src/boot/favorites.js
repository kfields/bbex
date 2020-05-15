class Favorites {
  constructor () {
    this.options = {}
    this.favorites = null
    this.index = null
  }

  async more (ndx, ttl, options = {}) {
    console.log('favorites more')
    const favorites = await this.find(options)
    console.log(favorites)
    const length = favorites.length
    const results = []
    for (let i = ndx; i < ndx + ttl; ++i) {
      if (i >= length) { break }
      results.push(favorites[i])
    }
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
