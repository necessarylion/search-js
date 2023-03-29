import { SearchJSConfig } from '../types'
import { clearIcon, searchIcon } from '../assets/Icon'
import { CLEAR_ICON_CLASS, INPUT_CLASS } from '../constant'

export class Header {
  render(config: SearchJSConfig) {
    let icon = searchIcon(config.theme ?? '#FF2E1F')
    let placeholder = 'Search'

    if (config.search?.icon) {
      icon = config.search.icon
    }

    if (config.search?.placeholder) {
      placeholder = config.search.placeholder
    }

    return `<div class="search-container">
<div class="search-icon">${icon}</div>
<input placeholder="${placeholder}" class="${INPUT_CLASS}" type="text"/>
<div class="${CLEAR_ICON_CLASS}">${clearIcon()}</div>
</div>`
  }
}
