import { hashIcon, historyIcon, loadingIcon } from '../assets/Icon'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Item } from '../components/Item'
import { DomListener } from './DomListener'
import { SearchHistory } from './SearchHistory'
import { SearchJSApp } from '..'
import { SearchJSItem, SearchJSTheme } from '../types'
import { Theme } from '../themes'
import {
  CLASS_CONTAINER,
  ID,
  CLASS_MODAL,
  ID_HISTORIES,
  ID_LOADING,
  ID_RESULTS,
  CLASS_MODAL_HEADER,
  CLASS_MODAL_FOOTER,
  CLASS_MODAL_CONTENT,
} from '../constant'

export class SearchComponent {
  /**
   * the entire search js element
   *
   * @var {HTMLElement} element
   */
  public element: HTMLElement

  /**
   * timer placeholder to handle search
   *
   * @var {number} searchTimer
   */
  private searchTimer?: number

  /**
   * class constructor
   *
   * @param {SearchJSApp} app
   * @param {DomListener} domListener
   * @param {SearchHistory} searchHistory
   * @param {Theme} theme
   */
  constructor(
    private app: SearchJSApp,
    private domListener: DomListener,
    private searchHistory: SearchHistory,
    private theme: Theme,
  ) {
    // add global css variable
    this.theme.createGlobalCssVariable(this.app.config)

    // append search element on parent element
    this.getParentElement().appendChild(this.createElement())

    // render initial data list
    this.showHistory(this.searchHistory.getList())

    this.domListener.onBackDropClick(() => {
      if (!this.app.config.persistent) {
        this.app.close()
      }
    })

    this.handleOnSearch()
  }

  /**
   * handle search and show list on result
   *
   * @returns {void}
   */
  private handleOnSearch(): void {
    this.domListener.onSearch(async (keyword: string) => {
      if (!keyword) {
        clearTimeout(this.searchTimer)
        this.hideLoading()
        this.showHistory(this.searchHistory.getList())
        this.hideSearchResult()
        return
      }
      this.hideHistories()
      this.hideSearchResult()
      if (this.app.config.onSearch) {
        this.showLoading()
        clearTimeout(this.searchTimer)
        this.searchTimer = setTimeout(async () => {
          const items = await this.app.config.onSearch(keyword)
          this.hideLoading()
          this.showSearchResult(items)
        }, this.app.config.onSearchDelay ?? 500)
      } else {
        this.showSearchResult(this.getItems(keyword))
      }
    })
  }

  /**
   * get list of items from config and filter with keyword from search input
   *
   * @param {string} keyword
   * @returns {Array<SearchJSItem> | null | undefined}
   */
  private getItems(keyword: string): Array<SearchJSItem> | null | undefined {
    const items = this.app.config.data
    return items.filter((item) => {
      return (
        (item.title && item.title.toLowerCase().includes(keyword)) ||
        (item.description && item.description.toLowerCase().includes(keyword))
      )
    })
  }

  /**
   * get parent element to append search-js element
   *
   * @returns {HTMLElement}
   */
  private getParentElement(): HTMLElement {
    return this.app.config.element ?? document.body
  }

  private createElement() {
    const element = document.createElement('div')
    element.id = ID
    if (this.theme.getReadyMadeThemes().includes(this.app.config.theme as SearchJSTheme)) {
      element.classList.add(this.app.config.theme)
    }
    element.classList.add(CLASS_CONTAINER)

    const footer = new Footer()
    const header = new Header()

    element.innerHTML = `<div class="${CLASS_MODAL}"> 
<div class="${CLASS_MODAL_HEADER}">${header.render(this.app.config)}</div>
<div id="${ID_LOADING}" class="${CLASS_MODAL_CONTENT}">${loadingIcon()}</div>
<div id="${ID_HISTORIES}" class="${CLASS_MODAL_CONTENT}"></div>
<div id="${ID_RESULTS}" class="${CLASS_MODAL_CONTENT}"></div>
<div class="${CLASS_MODAL_FOOTER}">${footer.render()}</div>
</div>
`
    this.element = element
    return this.element
  }

  /**
   * show item lists
   *
   * @param {Array<SearchJSItem>} items
   * @returns {void}
   */
  private showSearchResult(items: Array<SearchJSItem>): void {
    const itemInstance = new Item()
    itemInstance.renderList({
      id: ID_RESULTS,
      items: items,
      hideRemoveButton: true,
      notFoundLabel: 'No match found',
      icon: hashIcon(),
    })
    this.handleItemClickListener()
  }

  /**
   * hide search result
   *
   * @returns {void}
   */
  private hideSearchResult(): void {
    document.getElementById(ID_RESULTS).style.display = 'none'
  }

  /**
   * show history list
   *
   * @param {Array<SearchJSItem>} items
   * @returns {void}
   */
  private showHistory(items: Array<SearchJSItem>): void {
    const itemInstance = new Item()
    itemInstance.renderList({
      id: ID_HISTORIES,
      items: items,
      hideRemoveButton: false,
      notFoundLabel: 'No recent data',
      icon: historyIcon(),
    })
    this.handleItemClickListener()
  }

  /**
   * hide history
   *
   * @returns {void}
   */
  private hideHistories(): void {
    document.getElementById(ID_HISTORIES).style.display = 'none'
  }

  /**
   * listen on select and on remove event on item
   *
   * @return {void}
   */
  private handleItemClickListener(): void {
    this.domListener.onItemClick(
      (data: any) => {
        this.searchHistory.add(data)
        this.app.config.onSelected(data)
      },
      (data: any) => {
        this.searchHistory.remove(data)
        this.showHistory(this.searchHistory.getList())
      },
    )
  }

  /**
   * show loading
   *
   * @returns {void}
   */
  private showLoading(): void {
    document.getElementById(ID_LOADING).style.display = 'flex'
  }

  /**
   * hide loading
   *
   * @returns {void}
   */
  private hideLoading(): void {
    document.getElementById(ID_LOADING).style.display = 'none'
  }
}
