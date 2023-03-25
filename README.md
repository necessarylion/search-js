## Search JS

Instance search UI component

### Demo

<img width="400" src="https://raw.githubusercontent.com/necessarylion/search-js/main/demo/demo1.png" />
<img width="400" src="https://raw.githubusercontent.com/necessarylion/search-js/main/demo/demo2.png" />

### Usage

`npm install @bilions/search-js`

```js
import SearchJS from 'search-js'

const data = [
  {
    title: 'Validation',
    description: 'Create validation easily using Laravel validator',
    route: '/validation',
  },
  {
    title: 'Request',
    description: 'Laravel request',
    route: '/request',
  },
]

const searchJs = new SearchJS({
  data,
  element: document.body,
  theme: '#FF2E1F',
  width: '600px',
  search: {
    placeholder: 'Search docs',
  },
  onSelected: (i) => {
    console.log(i)
  },
})

searchJs.open()
```

#### Available Options

| **Name**             | **Required** | **Description**                                      |
| -------------------- | :----------: | ---------------------------------------------------- |
| `data`               |     YES      | data to search                                       |
| `data.title`         |     YES      | data title                                           |
| `data.description`   |      NO      | data description                                     |
| `element`            |      NO      | element to append search-js                          |
| `width`              |      NO      | modal width default (400px)                          |
| `search`             |              |                                                      |
| `search.icon`        |      NO      | svg icon string for search input                     |
| `search.placeholder` |      NO      | placeholder text for search input (default `Search`) |
| `onSelected`         |     YES      | callback function to trigger selected item           |

#### Available functions

- `open()` open function will trigger to open search menu, alternative press `cmd + k` or `ctrl + k` to open menu
