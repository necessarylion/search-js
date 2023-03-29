import { SearchJSConfig } from '../types'
import { clearIcon, searchIcon } from '../assets/Icon'
import { CLASS_CLEAR_ICON, CLASS_INPUT, DEFAULT_THEME_COLOR } from '../constant'

export class Header {
  /**
   * render header html string
   *
   * @param {SearchJSConfig} config
   * @returns {string}
   */
  render(config: SearchJSConfig): string {
    let icon = searchIcon(config.theme ?? DEFAULT_THEME_COLOR)
    let placeholder = 'Search'

    if (config.search?.icon) {
      icon = config.search.icon
    }

    if (config.search?.placeholder) {
      placeholder = config.search.placeholder
    }

    return `<div class="search-container">
<div class="search-icon">${icon}</div>
<input placeholder="${placeholder}" class="${CLASS_INPUT}" type="text"/>
<div class="${CLASS_CLEAR_ICON}">${clearIcon()}</div>
</div>`
  }
}
