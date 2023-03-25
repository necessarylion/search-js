import { searchIcon } from '../assets/icon'

export class Header {
  render(config) {
    let icon = searchIcon(config.theme ?? '#FF2E1F')
    let placeholder = 'Search'
    const hasConfigProperties = (key) => {
      return config && config.search && config.search[key]
    }
    if (hasConfigProperties('icon')) {
      icon = config.search.icon
    }
    if (hasConfigProperties('placeholder')) {
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
