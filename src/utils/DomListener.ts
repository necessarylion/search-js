import {
  CLEAR_ICON_CLASS,
  CONTAINER_CLASS,
  DATA_PAYLOAD_ATTR,
  ID,
  INPUT_CLASS,
  ITEM_CLASS,
  ITEM_CLOSE_CLASS,
} from '../constant'

export class DomListener {
  private EVENT_CLICK = 'click'
  private EVENT_KEYUP = 'keyup'

  public onBackDropClick(callback: Function) {
    const element = document.querySelector(`#${ID}.${CONTAINER_CLASS}`)
    element.addEventListener(this.EVENT_CLICK, (event) => {
      if (event.target === element) {
        callback()
      }
    })
  }

  public onSearch(callback: Function) {
    const element: HTMLInputElement = document.querySelector(`#${ID} .${INPUT_CLASS}`)
    element.addEventListener(this.EVENT_KEYUP, (event: any) => {
      const keyword = event.target.value.toLowerCase()
      callback(keyword)
    })

    document.querySelector(`.${CLEAR_ICON_CLASS}`).addEventListener(this.EVENT_CLICK, (event) => {
      element.value = ''
      callback(null)
    })
  }

  public onItemClick(onSelected: Function, onRemove: Function) {
    const items = document.querySelectorAll(`#${ID} .${ITEM_CLASS}`)
    items.forEach((el) =>
      el.addEventListener(this.EVENT_CLICK, (event: any) => {
        const closeElements = event.target.closest(`.${ITEM_CLOSE_CLASS} *`)
        if (event.target == closeElements) {
          return
        }
        const parentElement = event.target.closest(`.${ITEM_CLASS}`)
        const data = parentElement.getAttribute(DATA_PAYLOAD_ATTR)
        onSelected(JSON.parse(unescape(window.atob(data))))
      }),
    )

    const closeItems = document.querySelectorAll(`#${ID} .${ITEM_CLOSE_CLASS}`)
    closeItems.forEach((el) =>
      el.addEventListener(this.EVENT_CLICK, (event: any) => {
        const parentElement = event.target.closest(`.${ITEM_CLOSE_CLASS}`)
        const data = parentElement.getAttribute(DATA_PAYLOAD_ATTR)
        onRemove(JSON.parse(unescape(window.atob(data))))
      }),
    )
  }
}
