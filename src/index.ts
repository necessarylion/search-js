import './assets/css/index.scss'
import './assets/css/github.scss'
import { DomListener } from './utils/DomListener'
import { SearchJSConfig } from './types'
import { SearchComponent } from './utils/SearchComponent'
import { SearchHistory } from './utils/SearchHistory'
import { Theme } from './themes'

export class SearchJSApp {
  /**
   * UI component
   *
   * @var {SearchComponent} component
   */
  private component: SearchComponent

  /**
   * instance variable for singleton structure
   *
   * @var {SearchJSApp} _instance
   */
  private static _instance: SearchJSApp

  /**
   * class constructor
   *
   * @param {SearchJSConfig} config
   */
  constructor(public config: SearchJSConfig) {
    this.component = new SearchComponent(this, new DomListener(), new SearchHistory(), new Theme())
    this.listenKeyboardKeyPress()
  }

  /**
   * get singleton instance
   *
   * @param {SearchJSConfig} config
   * @returns {SearchJSApp}
   */
  public static getInstance(config: SearchJSConfig): SearchJSApp {
    return this._instance || (this._instance = new this(config))
  }

  /**
   * function to open search modal
   *
   * @returns {void}
   */
  public open(): void {
    this.component.element.style.display = 'flex'
    this.focusOnSearch()
  }

  /**
   * function to close search modal
   *
   * @returns {void}
   */
  public close(): void {
    this.component.element.style.display = 'none'
  }

  /**
   * private function to focus on search input when modal open
   *
   * @returns {void}
   */
  private focusOnSearch(): void {
    const element = document.querySelector<HTMLInputElement>('#search-js .search-input')
    element.focus()
  }

  /**
   * listen keyboard key press to open or close modal
   * (ctrl + k) | (cmd + k) to open modal
   * Esc to close modal
   *
   * @returns {void}
   */
  private listenKeyboardKeyPress(): void {
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

/**
 * init search js
 *
 * @param {SearchJSConfig} config
 * @returns {SearchJSApp}
 */
const SearchJS = (config: SearchJSConfig): SearchJSApp => {
  return SearchJSApp.getInstance(config)
}

declare global {
  interface Window {
    SearchJS: (config: SearchJSConfig) => SearchJSApp
  }
}

if (typeof window !== 'undefined') {
  window.SearchJS = SearchJS
}

export default SearchJS
export * from './types'
