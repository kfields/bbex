import Dexie from 'dexie'

export const db = new Dexie('BBEX')

db.version(1).stores({
  bookmarks: 'id, url, title, dateAdded'
})

db.on('populate', function () {
  console.log('populate')
  chrome.bookmarks.getRecent(100000, (bookmarks) => {
    for (const bookmark of bookmarks) {
      const { id, url, title, dateAdded } = bookmark
      db.bookmarks.put({ id, url, title, dateAdded })
    }
  })
})

export default async ({ Vue }) => {
  console.log('booting dexie')
  await db.open()
  Vue.prototype.$dexie = db
}
