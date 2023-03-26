import { hashIcon, historyIcon, loadingIcon } from '../assets/Icon'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Item } from '../components/Item'
import { DomListener } from './DomListener'
import { SearchHistory } from './SearchHistory'
import { SearchJSApp } from '..'
import { SearchJSItem } from '../types'
import { Theme } from './Theme'

export class SearchComponent {
  public element: HTMLElement

  private searchTimer?: number

  constructor(
    private app: SearchJSApp,
    private domListener: DomListener,
    private searchHistory: SearchHistory,
  ) {
    // add global css variable
    this.createGlobalCssVariable()

    // append search element on parent element
    this.getParentElement().appendChild(this.createElement())

    // render initial data list
    this.renderHistories(this.searchHistory.getList())

    this.domListener.onBackDropClick(() => {
      this.app.close()
    })

    this.handleOnSearch()
  }

  private handleOnSearch() {
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

  private getItems(keyword: string) {
    const items = this.app.config.data
    return items.filter((item) => {
      return (
        (item.title && item.title.toLowerCase().includes(keyword)) ||
        (item.description && item.description.toLowerCase().includes(keyword))
      )
    })
  }

  private getParentElement() {
    return this.app.config.element ?? document.body
  }

  private createGlobalCssVariable() {
    const bodyStyle = window.getComputedStyle(document.body)
    const fontFamily = bodyStyle.getPropertyValue('font-family')

    const style = document.createElement('style')
    document.head.appendChild(style)
    style.innerHTML = `
      :root {
        ${
          this.app.config.darkMode
            ? Theme.getDarkThemeVariable()
            : Theme.getLightThemeVariable()
        }
        --search-js-width: ${this.app.config.width ?? '400px'};
        --search-js-height: ${this.app.config.height ?? '450px'};
        --search-js-theme: ${this.app.config.theme ?? '#FF2E1F'};
        --search-js-font-family: ${fontFamily};
        --search-js-top: ${this.app.config.positionTop ?? '85px'}
      }`
  }

  private createElement() {
    const element = document.createElement('div')
    element.id = 'search-js'
    element.classList.add('container')

    const footer = new Footer()
    const header = new Header()

    element.innerHTML = `
      <div class="modal"> 
        <div class="modal-header">${header.render(this.app.config)}</div>
        <div id="search-js-loading" class="modal-content">${loadingIcon()}</div>
        <div id="search-js-histories" class="modal-content"></div>
        <div id="search-js-result" class="modal-content"></div>
        <div class="modal-footer">${footer.render(this.app.config)}</div>
      </div>
    `
    this.element = element
    return this.element
  }

  private hideHistories() {
    document.getElementById('search-js-histories').style.display = 'none'
  }

  private showLoading() {
    document.getElementById('search-js-loading').style.display = 'flex'
  }

  private hideLoading() {
    document.getElementById('search-js-loading').style.display = 'none'
  }

  private hideSearchResult() {
    document.getElementById('search-js-result').style.display = 'none'
  }

  private showHistories() {
    document.getElementById('search-js-histories').style.display = 'block'
  }

  private renderHistories(items: Array<SearchJSItem>) {
    const itemInstance = new Item()
    const element = document.getElementById('search-js-histories')
    element.innerHTML = ``

    let html = '<div class="items">'

    if (items.length == 0) {
      html += `
      <div class="no-recent">No recent searches</div>
      `
    }

    items.forEach((item) => {
      html += itemInstance.render(item, historyIcon())
    })

    html += '</div>'
    element.innerHTML = html
    this.handleItemClickListener()
  }

  private renderList(items: Array<SearchJSItem>) {
    this.hideHistories()
    const itemInstance = new Item()
    const element = document.getElementById('search-js-result')
    element.innerHTML = ``

    let html = '<div class="items">'
    items.forEach((item) => {
      html += itemInstance.render(item, hashIcon(), true)
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
