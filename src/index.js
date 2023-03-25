import './css/index.scss'
import { SearchComponent } from './utils/SearchComponent'

class SearchJSApp {
  constructor(config) {
    this.config = config
    this.component = new SearchComponent(this)
    this._listenKeyboardKeyPress()
  }

  open() {
    this.component.element.style.display = 'flex'
    this._focusOnSearch()
  }

  close() {
    this.component.element.style.display = 'none'
  }

  _focusOnSearch() {
    const element = document.querySelector('#search-js .search-input')
    element.focus()
  }

  _listenKeyboardKeyPress() {
    const open = () => this.open()
    const close = () => this.close()
    window.onkeydown = function (event) {
      const openKeys = (event.ctrlKey && event.key === 'k') || (event.metaKey && event.key === 'k')
      if (openKeys) {
        open()
      }
      if (event.key === 'Escape' || event.key === 'Esc') {
        close()
      }
    }
  }
}

const SearchJS = (config) => {
  return new SearchJSApp(config)
}

window.SearchJS = SearchJS

export default SearchJS
