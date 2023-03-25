export class SearchHistory {
  db

  maxItems = 3

  storageKey = 'search-js-histories'

  constructor() {
    this.db = window.localStorage
  }

  getList() {
    let data = this.db.getItem(this.storageKey)
    if (!data) {
      data = '[]'
    }
    return JSON.parse(data)
  }

  clear() {
    this.db.setItem(this.storageKey, '[]')
  }

  remove(item) {
    let data = this.db.getItem(this.storageKey)
    if (!data) {
      data = '[]'
    }
    const arrayItems = JSON.parse(data)
    const index = arrayItems.findIndex((d) => {
      return JSON.stringify(d) == JSON.stringify(item)
    })

    if (index != -1) {
      arrayItems.splice(index, 1)
    }

    this.db.setItem(this.storageKey, JSON.stringify(arrayItems))
  }

  add(item) {
    let data = this.db.getItem(this.storageKey)
    if (!data) {
      data = '[]'
    }
    const arrayItems = JSON.parse(data)
    if (arrayItems.length == this.maxItems) {
      arrayItems.pop()
    }

    const findItem = arrayItems.find((d) => {
      return JSON.stringify(d) == JSON.stringify(item)
    })

    if (!findItem) {
      arrayItems.push(item)
    }

    this.db.setItem(this.storageKey, JSON.stringify(arrayItems))
  }
}
