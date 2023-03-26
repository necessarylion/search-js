export interface SearchJSItem {
  title: string
  description?: string
  [propName: string]: any
}

export interface SearchJSConfig {
  element?: HTMLElement
  theme?: string
  width?: string
  height?: string
  darkMode?: boolean
  positionTop?: string
  data?: Array<SearchJSItem>
  search?: {
    icon?: string
    placeholder?: string
  }
  onSearchDelay?: number
  onSearch?: (
    keyword: string,
  ) => Array<SearchJSItem> | Promise<Array<SearchJSItem>>
  onSelected: (data: SearchJSItem) => void
}
