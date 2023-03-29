import { SearchJSItem } from '../types'

export class SearchHistory {
  /**
   * local storage
   *
   * @var {Storage} db
   */
  private db: Storage

  /**
   * max items to store in history
   *
   * @var {number} maxItems
   */
  private maxItems: number = 4

  /**
   * local storage key
   *
   * @var {string} storageKey
   */
  private storageKey: string = 'search-js-histories'

  constructor() {
    this.db = window.localStorage
  }

  /**
   * get list of items store in history
   *
   * @returns {Array<SearchJSItem> | undefined | null}
   */
  public getList(): Array<SearchJSItem> | undefined | null {
    let data = this.db.getItem(this.storageKey)
    if (!data) {
      data = '[]'
    }
    return JSON.parse(data).reverse()
  }

  /**
   * clear items stored
   *
   * @returns {void}
   */
  public clear(): void {
    this.db.setItem(this.storageKey, '[]')
  }

  /**
   * remove item stored
   *
   * @param {SearchJSItem} item
   * @returns {void}
   */
  public remove(item: SearchJSItem): void {
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

  /**
   * add item to history
   *
   * @param {SearchJSItem} item
   * @returns {void}
   */
  public add(item: SearchJSItem): void {
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
