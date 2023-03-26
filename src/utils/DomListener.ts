export class DomListener {
  public onBackDropClick(callback: Function) {
    const element = document.querySelector('#search-js.container')
    element.addEventListener('click', (event) => {
      if (event.target === element) {
        callback()
      }
    })
  }

  public onSearch(callback: Function) {
    const element = document.querySelector('#search-js .search-input')
    element.addEventListener('keyup', (event: any) => {
      const keyword = event.target.value.toLowerCase()
      callback(keyword)
    })
  }

  public onItemClick(onSelected: Function, onRemove: Function) {
    const items = document.querySelectorAll('#search-js .item')
    items.forEach((el) =>
      el.addEventListener('click', (event: any) => {
        const closeElements = event.target.closest('.item-close *')
        if (event.target == closeElements) {
          return
        }
        const parentElement = event.target.closest('.item')
        const data = parentElement.getAttribute('data-payload')
        onSelected(JSON.parse(unescape(window.atob(data))))
      }),
    )

    const closeItems = document.querySelectorAll('#search-js .item-close')
    closeItems.forEach((el) =>
      el.addEventListener('click', (event: any) => {
        const parentElement = event.target.closest('.item-close')
        const data = parentElement.getAttribute('data-payload')
        onRemove(JSON.parse(unescape(window.atob(data))))
      }),
    )
  }
}
