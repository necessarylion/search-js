import { hashIcon, historyIcon } from '../assets/icon'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Item } from '../components/Item'
import { DomListener } from './DomListener'
import { SearchHistory } from './SearchHistory'

export class SearchComponent {
  constructor(searchJs) {
    this.searchJs = searchJs
    this.domListener = new DomListener()
    this.searchHistory = new SearchHistory()

    // add global css variable
    this.createGlobalCssVariable()

    // append search element on parent element
    this.getParentElement().appendChild(this.createElement())

    // render initial data list
    this.renderHistories(this.searchHistory.getList())

    this.domListener.onBackDropClick(() => {
      this.searchJs.close()
    })

    this.domListener.OnSearch((keyword) => {
      if (!keyword) {
        this.showHistories()
        this.hideSearchResult()
        return
      }
      const items = this.searchJs.config.data.filter((item) => {
        return (
          (item.title && item.title.toLowerCase().includes(keyword)) ||
          (item.description && item.description.toLowerCase().includes(keyword))
        )
      })
      this.hideHistories()
      this.renderList(items)
    })
  }

  getParentElement() {
    return this.searchJs.config.element ?? document.body
  }

  createGlobalCssVariable() {
    const bodyStyle = window.getComputedStyle(document.body)
    const fontFamily = bodyStyle.getPropertyValue('font-family')

    const style = document.createElement('style')
    document.head.appendChild(style)
    style.innerHTML = `
      :root {
        --search-js-width: ${this.searchJs.config.width ?? '400px'};
        --search-js-height: ${this.searchJs.config.height ?? '450px'};
        --search-js-theme: ${this.searchJs.config.theme ?? '#FF2E1F'};
        --search-js-font-family: ${fontFamily};
        --search-js-top: ${this.searchJs.config.positionTop ?? '85px'}
      }`
  }

  createElement() {
    const element = document.createElement('div')
    element.id = 'search-js'
    element.classList.add('container')

    const footer = new Footer()
    const header = new Header()

    element.innerHTML = `
      <div class="modal"> 
        <div class="modal-header">${header.render(this.searchJs.config)}</div>
        <div id="search-js-histories" class="modal-content"></div>
        <div id="search-js-result" class="modal-content"></div>
        <div class="modal-footer">${footer.render(this.searchJs.config)}</div>
      </div>
    `
    this.element = element
    return this.element
  }

  hideHistories() {
    const element = document.getElementById('search-js-histories')
    element.style.display = 'none'
  }

  hideSearchResult() {
    const element = document.getElementById('search-js-result')
    element.style.display = 'none'
  }

  showHistories() {
    const element = document.getElementById('search-js-histories')
    element.style.display = 'block'
  }

  renderHistories(items) {
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

  renderList(items) {
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

  handleItemClickListener() {
    this.domListener.onItemClick(
      (payload) => {
        const data = JSON.parse(payload)
        this.searchHistory.add(data)
        this.searchJs.config.onSelected(data)
      },
      (payload) => {
        const data = JSON.parse(payload)
        this.searchHistory.remove(data)
        this.renderHistories(this.searchHistory.getList())
      },
    )
  }
}
