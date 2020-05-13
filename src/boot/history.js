/* function sameOptions (a, b) {
  if (a.text === b.text &&
    a.maxResults === b.maxResults &&
    a.startTime === b.startTime &&
    a.endTime === b.endTime
  ) {
    console.log('same options')
    return true
  }
  return false
} */

class History {
  constructor () {
    this.options = {}
    this.history = null
    this.client = null
    this.index = null
  }

  async more (ndx, ttl, options = {}) {
    console.log('history more')
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
    /*
    if (!sameOptions(options, this.options)) {
      console.log('cache invalid')
      this.options = Object.assign({}, options)
      this.history = null
    }
    if (this.history) { return this.history } */
    const query = {
      text: options.text,
      startTime: options.startTime,
      endTime: options.endTime,
      maxResults: options.maxResults
    }
    const search = query => new Promise((resolve, reject) => {
      console.log('maxResults', query.maxResults)
      console.log('startTime', query.startTime)
      chrome.history.search(query, resolve)
    })
    this.history = await search(query)
    return this.history
  }
}

export const history = new History()

export default async ({ Vue }) => {
  console.log('booting history')
  Vue.prototype.$history = history
}
