import './css/index.scss'
import { SearchComponent } from './utils/SearchComponent'

class SearchJS {
  config

  component

  constructor(config) {
    this.config = config
    this.component = new SearchComponent(this)
    this._listenKeyboardKeyPress()
  }

  _focusOnSearch() {
    const element = document.querySelector('#search-js .search-input')
    element.focus()
  }

  _listenKeyboardKeyPress() {
    const open = () => this.open()
    const close =() => this.close()
    window.onkeydown = function(event){
      const openKeys = (event.ctrlKey && event.key === 'k') ||
      (event.metaKey && event.key === 'k')
      if(openKeys) {
        open()
      }
      if (event.key === 'Escape' || event.key === 'Esc') {
        close()
      }
    }
  }

  open() {
    this.component.element.style.display = 'flex'
    this._focusOnSearch()
  }

  close() {
    this.component.element.style.display = 'none'
  }
}

window.SearchJS = SearchJS
