export enum SearchJSTheme {
  ThemeGithubLight = 'github-light',
  ThemeGithubDark = 'github-dark',
  ThemeLight = 'light-theme',
  ThemeDark = 'dark-theme',
}

export interface SearchJSItem {
  title: string
  description?: string
  icon?: string
  [propName: string]: any
}

export interface SearchJSConfig {
  /**
   * element to append search-js
   */
  element?: HTMLElement

  /**
   * color code or theme name (`#FF2E1F`, `github-light`, `github-dark`)
   */
  theme?: string

  /**
   * width of search-js compoment
   */
  width?: string

  /**
   * height of search-js compoment
   */
  height?: string

  /**
   * enable dark mode
   */
  darkMode?: boolean

  /**
   * position from the top
   * default: 85px
   */
  positionTop?: string

  /**
   * max history length
   * default: 4
   */
  maxHistoryLength?: number

  /**
   * data to show on the list
   */
  data?: Array<SearchJSItem>

  /**
   * customize search input
   */
  search?: {
    icon?: string
    placeholder?: string
  }

  /**
   * search after x delay in ms
   * default - 500ms
   */
  onSearchDelay?: number

  /**
   * model persistent
   * default - false
   */
  persistent?: boolean

  /**
   * handle on search input
   * @param keyword
   * @returns Array<SearchJSItem> | Promise<Array<SearchJSItem>>
   */
  onSearch?: (keyword: string) => Array<SearchJSItem> | Promise<Array<SearchJSItem>>

  /**
   * handle the action after the item is selected
   * @param data
   * @returns void
   */
  onSelected: (data: SearchJSItem) => void
}
