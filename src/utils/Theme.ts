import { SearchJSConfig } from '../types'

export class Theme {
  public static readyMadeThemes: Array<string> = ['github-dark', 'github-light']

  public static getTheme(config: SearchJSConfig) {
    if (config.theme == 'github-dark') {
      return Theme.getGithubDarkTheme()
    }
    if (config.theme == 'github-light') {
      return Theme.getGithubLightTheme()
    }
    return config.darkMode
      ? Theme.getDarkThemeVariable()
      : Theme.getLightThemeVariable()
  }

  public static getLightThemeVariable() {
    return `
      --search-js-backdrop-bg: rgba(101, 108, 133, 0.8);
      --search-js-modal-bg: #f5f6f7;
      --search-js-modal-box-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64;
      --search-js-modal-footer-box-shadow: 0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, 0.12);
      --search-js-keyboard-button-box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4);
      --search-js-keyboard-button-bg: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
      --search-js-search-input-bg: white;
      --search-js-item-bg: white;
      --search-js-text-color: #969faf;
      --search-js-input-placeholder-color: #969faf;
      --search-js-item-box-shadow: 0 1px 3px 0 #d4d9e1;
    `
  }

  public static getDarkThemeVariable() {
    return `
      --search-js-backdrop-bg: rgba(47, 55, 69, 0.7);
      --search-js-modal-bg: #1b1b1d;
      --search-js-modal-box-shadow: inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309;
      --search-js-modal-footer-box-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5), 0 -4px 8px 0 rgba(0, 0, 0, 0.2);
      --search-js-keyboard-button-box-shadow: inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d, 0 2px 2px 0 rgba(3, 4, 9, 0.3);
      --search-js-keyboard-button-bg: linear-gradient(-26.5deg, var(--ifm-color-emphasis-200) 0%, var(--ifm-color-emphasis-100) 100%);
      --search-js-search-input-bg: black;
      --search-js-item-bg: #1c1e21;
      --search-js-text-color: #b3b3b3;
      --search-js-input-placeholder-color: #aeaeae;
      --search-js-item-box-shadow: none;
    `
  }

  public static getGithubDarkTheme() {
    return `
      --search-js-backdrop-bg: rgba(1,4,9,0.8);
      --search-js-modal-bg: #0D1116;
      --search-js-modal-box-shadow: none;
      --search-js-modal-footer-box-shadow: none;
      --search-js-keyboard-button-box-shadow: none;
      --search-js-keyboard-button-bg: linear-gradient(-26.5deg, var(--ifm-color-emphasis-200) 0%, var(--ifm-color-emphasis-100) 100%);
      --search-js-search-input-bg: transparent;
      --search-js-item-bg: transparent;
      --search-js-text-color: #C5CED6;
      --search-js-input-placeholder-color: #6D7681;
      --search-js-item-box-shadow: none;
      --search-js-theme: transparent;
    `
  }

  public static getGithubLightTheme() {
    return `
      --search-js-backdrop-bg: rgba(27,31,36,0.5);;
      --search-js-modal-bg: #FFFFFF;
      --search-js-modal-box-shadow: none;
      --search-js-modal-footer-box-shadow: none;
      --search-js-keyboard-button-box-shadow: none;
      --search-js-keyboard-button-bg: linear-gradient(-26.5deg, var(--ifm-color-emphasis-200) 0%, var(--ifm-color-emphasis-100) 100%);
      --search-js-search-input-bg: transparent;
      --search-js-item-bg: transparent;
      --search-js-text-color: #1F2329;
      --search-js-input-placeholder-color: #6E7781;
      --search-js-item-box-shadow: none;
      --search-js-theme: transparent;
    `
  }
}
