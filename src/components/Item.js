import { closeIcon } from '../assets/icon'

export class Item {
  render(item, icon, hideClose = false) {
    return `<div class="item" data-payload='${JSON.stringify(item)}'>
      <div class="item-icon">
        ${icon}
      </div>
      <div style="flex: 1">
        <div class="item-title">${item.title}</div>
        <div class="item-description">${item.description}</div>
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
