import './css/index.scss'
import { DomListener } from './utils/DomListener'
import { SearchJSConfig } from './types'
import { SearchComponent } from './utils/SearchComponent'
import { SearchHistory } from './utils/SearchHistory'

export class SearchJSApp {
  private component: SearchComponent

  private static _instance: SearchJSApp

  constructor(public config: SearchJSConfig) {
    this.component = new SearchComponent(this, new DomListener(), new SearchHistory())
    this.listenKeyboardKeyPress()
  }

  public static getInstance(config: SearchJSConfig) {
    return this._instance || (this._instance = new this(config))
  }

  public open() {
    this.component.element.style.display = 'flex'
    this.focusOnSearch()
  }

  public close() {
    this.component.element.style.display = 'none'
  }

  private focusOnSearch() {
    const element = document.querySelector<HTMLInputElement>('#search-js .search-input')
    element.focus()
  }

  private listenKeyboardKeyPress() {
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

const SearchJS = (config: SearchJSConfig): SearchJSApp => {
  return SearchJSApp.getInstance(config)
}

declare global {
  interface Window {
    SearchJS: (config: SearchJSConfig) => SearchJSApp
  }
}
window.SearchJS = SearchJS

export default SearchJS
export * from './types'
