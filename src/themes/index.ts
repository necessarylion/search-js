import { SearchJSConfig, SearchJSTheme } from '../types'
import { AvailableThemes } from './AvailableThemes'

export class Theme {
  public getThemeValues(theme: string) {
    return AvailableThemes[theme]
  }

  public getReadyMadeThemes() {
    return [SearchJSTheme.ThemeGithubLight, SearchJSTheme.ThemeGithubDark]
  }

  public getTheme(config: SearchJSConfig) {
    const defaultTheme = config.darkMode ? SearchJSTheme.ThemeDark : SearchJSTheme.ThemeLight
    const themeName = this.getReadyMadeThemes().includes(config.theme as SearchJSTheme)
      ? config.theme
      : defaultTheme
    return this.getCssVariables(this.getThemeValues(themeName))
  }

  private getCssVariables(obj: object) {
    let css = ''
    Object.entries(obj).forEach(([key, value]) => {
      css += `${key} : ${value};`
    })
    return css
  }
}
