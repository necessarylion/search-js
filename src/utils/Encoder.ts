import { SearchJSItem } from '../types'

export class Encoder {
  /**
   * encode item to string
   *
   * @param {SearchJSItem} item
   * @returns {string}
   */
  public static encode(item: SearchJSItem): string {
    return window.btoa(escape(JSON.stringify(item)))
  }

  /**
   * decode string to item
   * @param {string} data
   * @returns {SearchJSItem}
   */
  public static decode(data: string): SearchJSItem {
    return JSON.parse(unescape(window.atob(data)))
  }
}
