import { closeIcon } from '../assets/icon'
import { SearchJSItem } from '../types'

export class Item {
  render(item: SearchJSItem, icon: string, hideClose: boolean = false) {
    return `<div class="item" data-payload='${JSON.stringify(item)}'>
      <div class="item-icon">
        ${icon}
      </div>
      <div style="flex: 1">
        <div class="item-title">${item.title}</div>
        ${item.description ? `<div class="item-description">${item.description}</div>` : ``}
      </div>
      ${
        hideClose
          ? ``
          : `<div class="item-close" data-payload='${JSON.stringify(item)}'>
          ${closeIcon()}
        </div>`
      }
    </div>`
  }
}
