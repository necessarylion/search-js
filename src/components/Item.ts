import { Encoder } from './../utils/Encoder'
import { closeIcon } from '../assets/Icon'
import { ATTR_DATA_PAYLOAD, CLASS_ITEMS, CLASS_ITEM_CLOSE } from '../constant'
import { SearchJSItem } from '../types'

interface ItemComponentPayload {
  item: SearchJSItem
  icon: string
  hideRemoveButton: boolean
  isHistoryIcon?: boolean
}

export interface ListRenderPayload {
  id: string
  items?: Array<SearchJSItem>
  icon: string
  hideRemoveButton: boolean
  notFoundLabel: string
  isHistoryIcon?: boolean
}

export class Item {
  /**
   * render item list
   *
   * @param {Array<SearchJSItem>} items
   * @returns {void}
   */
  public renderList({
    id,
    items,
    hideRemoveButton,
    notFoundLabel,
    icon,
    isHistoryIcon,
  }: ListRenderPayload): void {
    const element = document.getElementById(id)
    element.innerHTML = ``

    let html = `<div class="${CLASS_ITEMS}">`

    if (items.length == 0) {
      html += `<div class="not-found-label">${notFoundLabel}</div>`
    }

    items.forEach((item) => {
      html += this.render({
        item,
        icon,
        hideRemoveButton,
        isHistoryIcon,
      })
    })

    html += '</div>'
    element.innerHTML = html
    element.style.display = 'block'
  }

  /**
   * render items component
   * @param {ItemComponentPayload} props
   * @returns {string}
   */
  render({ item, icon, hideRemoveButton = false, isHistoryIcon }: ItemComponentPayload): string {
    const dataPayload = Encoder.encode(item)
    return `<div class="item" ${ATTR_DATA_PAYLOAD}='${dataPayload}'>
<div class="item-icon">
${item.icon ?? icon}
${item.icon && isHistoryIcon ? `<div class="floating-history-icon">${icon}</div>` : ``}
</div>

<div style="flex: 1">
<div class="item-title">${item.title}</div>
${item.description ? `<div class="item-description">${item.description}</div>` : ``}
</div>${this.getCloseIcon(hideRemoveButton, dataPayload)}</div>`
  }

  /**
   * get html string to show or hide remove button
   *
   * @param {boolean} hideRemoveButton
   * @param {string} data
   * @returns
   */
  private getCloseIcon(hideRemoveButton: boolean, data: string) {
    return hideRemoveButton
      ? ``
      : `<div class='${CLASS_ITEM_CLOSE}' ${ATTR_DATA_PAYLOAD}='${data}'>${closeIcon()}</div>`
  }
}
