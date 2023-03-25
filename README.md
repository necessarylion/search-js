## Search JS

Instance search UI component

### Usage

```js
const data = [
  {
    title: 'Validation',
    description: 'Create validation easily using Laravel validator',
    route: '/validation'
  },
  {
    title: 'Request',
    description: 'Laravel request',
    route: '/request'
  }
]

const searchJs = new SearchJS({
    data,
    element : document.body,
    theme: '#FF2E1F',
    width: '600px',
    search : {
      placeholder: 'Search docs'
    },
    onSelected : (i) => {
      console.log(i)
    }
})

searchJs.open()

```

- data
  - title (required)
  - description (required)
- element (optional)
- width (optional)
- search 
  - icon (optional) svg icon string
  - placeholder (optional)
- onSelected (required)

- `open()` open function will trigger to open search menu, alternative press `cmd + k` or `ctrl + k` to open menu
