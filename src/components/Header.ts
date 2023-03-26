import { SearchJSConfig } from '../types'
import { searchIcon } from '../assets/icon'

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

    return `
    <div class="search-container">
      <div class="search-icon">
        ${icon}
      </div>
      <input placeholder="${placeholder}" class="search-input" type="text"/>
    </div>`
  }
}
