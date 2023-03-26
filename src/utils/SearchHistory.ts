import { SearchJSItem } from '../types'

export class SearchHistory {
  private db

  private maxItems = 3

  private storageKey = 'search-js-histories'

  constructor() {
    this.db = window.localStorage
  }

  public getList() {
    let data = this.db.getItem(this.storageKey)
    if (!data) {
      data = '[]'
    }
    return JSON.parse(data)
  }

  public clear() {
    this.db.setItem(this.storageKey, '[]')
  }

  public remove(item: SearchJSItem) {
    let data = this.db.getItem(this.storageKey)
    if (!data) {
      data = '[]'
    }
    const arrayItems = JSON.parse(data)
    const index = arrayItems.findIndex((d: SearchJSItem) => {
      return JSON.stringify(d) == JSON.stringify(item)
    })

    if (index != -1) {
      arrayItems.splice(index, 1)
    }

    this.db.setItem(this.storageKey, JSON.stringify(arrayItems))
  }

  public add(item: SearchJSItem) {
    let data = this.db.getItem(this.storageKey)
    if (!data) {
      data = '[]'
    }
    const arrayItems = JSON.parse(data)
    if (arrayItems.length == this.maxItems) {
      arrayItems.pop()
    }

    const findItem = arrayItems.find((d: SearchJSItem) => {
      return JSON.stringify(d) == JSON.stringify(item)
    })

    if (!findItem) {
      arrayItems.push(item)
    }

    this.db.setItem(this.storageKey, JSON.stringify(arrayItems))
  }
}
