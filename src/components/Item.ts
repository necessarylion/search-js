import { closeIcon } from '../assets/Icon'
import { SearchJSItem } from '../types'

export class Item {
  render(item: SearchJSItem, icon: string, hideClose: boolean = false) {
    const dataPayload = window.btoa(escape(JSON.stringify(item)))
    return `<div class="item" data-payload='${dataPayload}'>
      <div class="item-icon">
        ${icon}
      </div>
      <div style="flex: 1">
        <div class="item-title">${item.title}</div>
        ${
          item.description
            ? `<div class="item-description">${item.description}</div>`
            : ``
        }
      </div>
      ${
        hideClose
          ? ``
          : `<div class="item-close" data-payload='${dataPayload}'>
          ${closeIcon()}
        </div>`
      }
    </div>`
  }
}
