export class DomListener {

  onBackDropClick(callback) {
    const element = document.querySelector('#search-js .container')
    element.addEventListener('click', (event) => {
      if (event.target === element) {
        callback()
      }
    })
  }

  OnSearch(callback) {
    const element = document.querySelector('#search-js .search-input')
    element.addEventListener('keyup', (event) => {
      const keyword = event.target.value.toLowerCase()
      callback(keyword)
    })
  }

  onItemClick(onSelected, onRemove) {
    const items = document.querySelectorAll('#search-js .item')
    items.forEach((el) =>
      el.addEventListener('click', (event) => {
        const closeElements = event.target.closest('.item-close *')
        if(event.target == closeElements) {
          return;
        }
        const parentElement = event.target.closest('.item')
        const route = parentElement.getAttribute('data-payload')
        onSelected(route)
      })
    )

    const closeItems = document.querySelectorAll('#search-js .item-close')
    closeItems.forEach((el) =>
      el.addEventListener('click', (event) => {
        const parentElement = event.target.closest('.item-close')
        const route = parentElement.getAttribute('data-payload')
        onRemove(route)
      })
    )
  }
}
