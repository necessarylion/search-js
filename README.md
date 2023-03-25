## Search JS

Instance search UI component

### Demo

<img width="400" src="https://raw.githubusercontent.com/necessarylion/search-js/main/demo/demo1.png" />
<img width="400" src="https://raw.githubusercontent.com/necessarylion/search-js/main/demo/demo2.png" />

### Usage via cdn

```html
<script src="https://cdn.jsdelivr.net/npm/@bilions/search-js/dist/search-js.js"></script>
```

### Usage via npm

`npm install @bilions/search-js`

```js
import SearchJS from '@bilions/search-js'

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

const searchJs = SearchJS({
  data,
  element: document.body,
  theme: '#FF2E1F',
  width: '600px',
  positionTop: '85px',
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

| **Name**             | **Required** | **Description**                                         |
| -------------------- | :----------: | ------------------------------------------------------- |
| `data`               |     YES      | data to search                                          |
| `data.title`         |     YES      | data title                                              |
| `data.description`   |      NO      | data description                                        |
| `element`            |     YES      | element to append search-js                             |
| `width`              |      NO      | modal width default (400px)                             |
| `search`             |              |                                                         |
| `search.icon`        |      NO      | svg icon string for search input                        |
| `search.placeholder` |      NO      | placeholder text for search input (default `Search`)    |
| `positionTop`        |      NO      | default `85px`                                          |
| `onSelected`         |     YES      | callback function that will trigger after item selected |

#### Available functions

- `open()` open function will trigger to open search menu
- Alternatively press `cmd + k` or `ctrl + k` to open search menu
