import {
  CLASS_CLEAR_ICON,
  CLASS_CONTAINER,
  ATTR_DATA_PAYLOAD,
  ID,
  CLASS_INPUT,
  CLASS_ITEM,
  CLASS_ITEM_CLOSE,
} from '../constant'
import { SearchJSItem } from '../types'
import { Encoder } from './Encoder'

export class DomListener {
  /**
   * @var {string} EVENT_CLICK
   */
  private EVENT_CLICK: string = 'click'

  /**
   * @var {string} EVENT_KEYUP
   */
  private EVENT_KEYUP: string = 'keyup'

  /**
   * listen for on back drop click to hide modal
   *
   * @param {Function} callback
   * @returns {void}
   */
  public onBackDropClick(callback: () => void): void {
    const element = document.querySelector(`#${ID}.${CLASS_CONTAINER}`)
    element.addEventListener(this.EVENT_CLICK, (event) => {
      if (event.target === element) {
        callback()
      }
    })
  }

  /**
   * listen for on search
   *
   * @param {Function} callback
   * @returns {void}
   */
  public onSearch(callback: (keyword: string) => void): void {
    const element: HTMLInputElement = document.querySelector(`#${ID} .${CLASS_INPUT}`)
    // search input keyup
    element.addEventListener(this.EVENT_KEYUP, (event: any) => {
      const keyword = event.target.value.toLowerCase()
      callback(keyword)
    })

    // clear icon
    document.querySelector(`.${CLASS_CLEAR_ICON}`).addEventListener(this.EVENT_CLICK, (event) => {
      element.value = ''
      callback(null)
    })
  }

  /**
   * listen for on item click
   *
   * @param {Function} onSelected
   * @param {Function} onRemove
   * @returns {void}
   */
  public onItemClick(
    onSelected: (item: SearchJSItem) => void,
    onRemove: (item: SearchJSItem) => void,
  ): void {
    const items = document.querySelectorAll(`#${ID} .${CLASS_ITEM}`)
    items.forEach((el) =>
      // item click to select
      el.addEventListener(this.EVENT_CLICK, (event: any) => {
        const closeElements = event.target.closest(`.${CLASS_ITEM_CLOSE} *`)
        if (event.target == closeElements) {
          return
        }
        const parentElement = event.target.closest(`.${CLASS_ITEM}`)
        const data = parentElement.getAttribute(ATTR_DATA_PAYLOAD)
        onSelected(Encoder.decode(data))
      }),
    )

    const closeItems = document.querySelectorAll(`#${ID} .${CLASS_ITEM_CLOSE}`)
    closeItems.forEach((el) =>
      // item click to remove from history
      el.addEventListener(this.EVENT_CLICK, (event: any) => {
        const parentElement = event.target.closest(`.${CLASS_ITEM_CLOSE}`)
        const data = parentElement.getAttribute(ATTR_DATA_PAYLOAD)
        onRemove(Encoder.decode(data))
      }),
    )
  }
}
