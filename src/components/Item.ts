import { closeIcon } from '../assets/Icon'
import { DATA_PAYLOAD_ATTR } from '../constant'
import { SearchJSItem } from '../types'

export class Item {
  render(item: SearchJSItem, icon: string, hideClose: boolean = false) {
    const dataPayload = window.btoa(escape(JSON.stringify(item)))
    return `<div class="item" ${DATA_PAYLOAD_ATTR}='${dataPayload}'>
<div class="item-icon">${icon}</div>
<div style="flex: 1">
<div class="item-title">${item.title}</div>
${item.description ? `<div class="item-description">${item.description}</div>` : ``}
</div>
${
  hideClose
    ? ``
    : `<div class="item-close" ${DATA_PAYLOAD_ATTR}='${dataPayload}'>${closeIcon()}</div>`
}
</div>`
  }
}
