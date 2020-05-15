class Visits {
  constructor () {
    this.options = {}
    this.visits = null
    this.index = null
  }

  async more (ndx, ttl, options = {}) {
    console.log('visits more')
    const visits = await this.find(options)
    const length = visits.length
    const results = []
    for (let i = ndx; i < ndx + ttl; ++i) {
      if (i >= length) { break }
      results.push(visits[i])
    }
    return results
  }

  async find (options = {}) {
    console.log('visits find')
    console.log(options)
    /* if (this.visits) { return this.visits } */
    const search = details => new Promise((resolve, reject) => {
      chrome.history.getVisits(details, resolve)
    })
    const details = {
      url: options.url
    }
    this.visits = await search(details)
    return this.visits
  }
}

export const visits = new Visits()

export default async ({ Vue }) => {
  console.log('booting visits')
  Vue.prototype.$visits = visits
}
