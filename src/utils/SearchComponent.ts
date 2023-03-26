import { hashIcon, historyIcon } from '../assets/Icon'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Item } from '../components/Item'
import { DomListener } from './DomListener'
import { SearchHistory } from './SearchHistory'
import { SearchJSApp } from '..'
import { SearchJSItem } from '../types'

export class SearchComponent {
  public element: HTMLElement

  constructor(private app: SearchJSApp, private domListener: DomListener, private searchHistory: SearchHistory) {
    // add global css variable
    this.createGlobalCssVariable()

    // append search element on parent element
    this.getParentElement().appendChild(this.createElement())

    // render initial data list
    this.renderHistories(this.searchHistory.getList())

    this.domListener.onBackDropClick(() => {
      this.app.close()
    })

    this.domListener.onSearch((keyword: string) => {
      if (!keyword) {
        this.showHistories()
        this.hideSearchResult()
        return
      }
      const items = this.app.config.data.filter((item) => {
        return (
          (item.title && item.title.toLowerCase().includes(keyword)) ||
          (item.description && item.description.toLowerCase().includes(keyword))
        )
      })
      this.hideHistories()
      this.renderList(items)
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
        ${this.app.config.darkMode ? this.getDarkThemeVariable() : this.getLightThemeVariable()}
        --search-js-width: ${this.app.config.width ?? '400px'};
        --search-js-height: ${this.app.config.height ?? '450px'};
        --search-js-theme: ${this.app.config.theme ?? '#FF2E1F'};
        --search-js-font-family: ${fontFamily};
        --search-js-top: ${this.app.config.positionTop ?? '85px'}
      }`
  }

  private getLightThemeVariable() {
    return `
      --search-js-backdrop-bg: rgba(101, 108, 133, 0.8);
      --search-js-modal-bg: #f5f6f7;
      --search-js-modal-box-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64;
      --search-js-modal-footer-box-shadow: 0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, 0.12);
      --search-js-keyboard-button-box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4);
      --search-js-keyboard-button-bg: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
      --search-js-search-input-bg: white;
      --search-js-item-bg: white;
      --search-js-text-color: #969faf;
      --search-js-input-placeholder-color: #969faf;
      --search-js-item-box-shadow: 0 1px 3px 0 #d4d9e1;
    `
  }

  private getDarkThemeVariable() {
    return `
      --search-js-backdrop-bg: rgba(47, 55, 69, 0.7);
      --search-js-modal-bg: #1b1b1d;
      --search-js-modal-box-shadow: inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309;
      --search-js-modal-footer-box-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5), 0 -4px 8px 0 rgba(0, 0, 0, 0.2);
      --search-js-keyboard-button-box-shadow: inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d, 0 2px 2px 0 rgba(3, 4, 9, 0.3);
      --search-js-keyboard-button-bg: linear-gradient(-26.5deg, var(--ifm-color-emphasis-200) 0%, var(--ifm-color-emphasis-100) 100%);
      --search-js-search-input-bg: black;
      --search-js-item-bg: #1c1e21;
      --search-js-text-color: #b3b3b3;
      --search-js-input-placeholder-color: #aeaeae;
      --search-js-item-box-shadow: none;
    `
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
        <div id="search-js-histories" class="modal-content"></div>
        <div id="search-js-result" class="modal-content"></div>
        <div class="modal-footer">${footer.render(this.app.config)}</div>
      </div>
    `
    this.element = element
    return this.element
  }

  private hideHistories() {
    const element = document.getElementById('search-js-histories')
    element.style.display = 'none'
  }

  private hideSearchResult() {
    const element = document.getElementById('search-js-result')
    element.style.display = 'none'
  }

  private showHistories() {
    const element = document.getElementById('search-js-histories')
    element.style.display = 'block'
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
      (payload: string) => {
        const data = JSON.parse(payload)
        this.searchHistory.add(data)
        this.app.config.onSelected(data)
      },
      (payload: string) => {
        const data = JSON.parse(payload)
        this.searchHistory.remove(data)
        this.renderHistories(this.searchHistory.getList())
      },
    )
  }
}
