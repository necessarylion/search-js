import {
  DEFAULT_HEIGHT,
  DEFAULT_POSITION_TOP,
  DEFAULT_THEME_COLOR,
  DEFAULT_WIDTH,
} from '../constant'
import { SearchJSConfig, SearchJSTheme } from '../types'
import {
  AvailableThemes,
  CssFontFamily,
  CssHeight,
  CssPositionTop,
  CssTheme,
  CssWidth,
} from './AvailableThemes'

export class Theme {
  /**
   * create global css variables base on provided theme
   *
   * @param {SearchJSConfig} config
   */
  public createGlobalCssVariable(config: SearchJSConfig) {
    const bodyStyle = window.getComputedStyle(document.body)
    const styleElement = document.createElement('style')
    const cssObject = {
      [CssWidth]: config.width ?? DEFAULT_WIDTH,
      [CssHeight]: config.height ?? DEFAULT_HEIGHT,
      [CssTheme]: config.theme ?? DEFAULT_THEME_COLOR,
      [CssFontFamily]: bodyStyle.getPropertyValue('font-family'),
      [CssPositionTop]: config.positionTop ?? DEFAULT_POSITION_TOP,
    }
    styleElement.innerHTML = `:root{${this.getCssVariables(cssObject)} ${this.getTheme(config)}}`
    document.head.appendChild(styleElement)
  }

  /**
   * get list of read made themes
   *
   * @returns {Array<SearchJSTheme>}
   */
  public getReadyMadeThemes(): Array<SearchJSTheme> {
    return [SearchJSTheme.ThemeGithubLight, SearchJSTheme.ThemeGithubDark]
  }

  /**
   * get theme css string from config
   *
   * @param {SearchJSConfig} config
   * @returns {string}
   */
  private getTheme(config: SearchJSConfig): string {
    const defaultTheme = config.darkMode ? SearchJSTheme.ThemeDark : SearchJSTheme.ThemeLight
    const themeName = this.getReadyMadeThemes().includes(config.theme as SearchJSTheme)
      ? config.theme
      : defaultTheme
    return this.getCssVariables(this.getThemeValues(themeName))
  }

  /**
   * get theme css variable values
   *
   * @param {string} theme
   * @returns {object}
   */
  private getThemeValues(theme: string): object {
    return AvailableThemes[theme]
  }

  /**
   * get theme css string
   *
   * @param {object} obj
   * @returns {string}
   */
  private getCssVariables(obj: object): string {
    let css = ''
    Object.entries(obj).forEach(([key, value]) => {
      css += `${key} : ${value};`
    })
    return css
  }
}
