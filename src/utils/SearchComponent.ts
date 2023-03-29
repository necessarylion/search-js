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
  CLASS_ITEMS,
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
    this.renderHistories(this.searchHistory.getList())

    this.domListener.onBackDropClick(() => {
      this.app.close()
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
        this.hideLoading()
        this.showHistories()
        this.hideSearchResult()
        return
      }
      this.hideHistories()
      this.hideSearchResult()
      if (this.app.config.onSearch) {
        this.showLoading()
        clearTimeout(this.searchTimer)
        this.searchTimer = setTimeout(async () => {
          let items = await this.app.config.onSearch(keyword)
          this.hideLoading()
          this.renderList(items)
        }, this.app.config.onSearchDelay ?? 500)
      } else {
        this.renderList(this.getItems(keyword))
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
<div class="${CLASS_MODAL_FOOTER}">${footer.render(this.app.config)}</div>
</div>
`
    this.element = element
    return this.element
  }

  private hideHistories() {
    document.getElementById(ID_HISTORIES).style.display = 'none'
  }

  private showLoading() {
    document.getElementById(ID_LOADING).style.display = 'flex'
  }

  private hideLoading() {
    document.getElementById(ID_LOADING).style.display = 'none'
  }

  private hideSearchResult() {
    document.getElementById(ID_RESULTS).style.display = 'none'
  }

  private showHistories() {
    this.renderHistories(this.searchHistory.getList())
    document.getElementById(ID_HISTORIES).style.display = 'block'
  }

  private renderHistories(items: Array<SearchJSItem>) {
    const itemInstance = new Item()
    const element = document.getElementById(ID_HISTORIES)
    element.innerHTML = ``

    let html = `<div class="${CLASS_ITEMS}">`

    if (items.length == 0) {
      html += `<div class="no-recent">No recent searches</div>`
    }

    items.forEach((item) => {
      html += itemInstance.render({
        item,
        icon: historyIcon(),
        hideRemoveButton: false,
      })
    })

    html += '</div>'
    element.innerHTML = html
    this.handleItemClickListener()
  }

  private renderList(items: Array<SearchJSItem>) {
    this.hideHistories()
    const itemInstance = new Item()
    const element = document.getElementById(ID_RESULTS)
    element.innerHTML = ``

    let html = `<div class="${CLASS_ITEMS}">`
    items.forEach((item) => {
      html += itemInstance.render({
        item,
        icon: hashIcon(),
        hideRemoveButton: true,
      })
    })

    html += '</div>'
    element.innerHTML = html
    element.style.display = 'block'
    this.handleItemClickListener()
  }

  private handleItemClickListener() {
    this.domListener.onItemClick(
      (data: any) => {
        this.searchHistory.add(data)
        this.app.config.onSelected(data)
      },
      (data: any) => {
        this.searchHistory.remove(data)
        this.renderHistories(this.searchHistory.getList())
      },
    )
  }
}
