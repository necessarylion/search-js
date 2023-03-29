import { SearchJSTheme } from '../types'

const CssBackdropBackgroundVariable: string = '--search-js-backdrop-bg'
const CssModalBackgroundVariable: string = '--search-js-modal-bg'
const CssModalBoxShadowVariable: string = '--search-js-modal-box-shadow'
const CssModalFooterBoxShadowVariable: string = '--search-js-modal-footer-box-shadow'
const CssKeyboardButtonBoxShadowVariable: string = '--search-js-keyboard-button-box-shadow'
const CssKeyboardButtonBackgroundVariable: string = '--search-js-keyboard-button-bg'
const CssInputBackgroundVariable: string = '--search-js-search-input-bg'
const CssInputPlaceholderColorVariable: string = '--search-js-input-placeholder-color'
const CssItemBackgroundVariable: string = '--search-js-item-bg'
const CssItemBoxShadowVariable: string = '--search-js-item-box-shadow'
const CssTextColorVariable: string = '--search-js-text-color'
const CssThemeVariable: string = '--search-js-theme'

export const AvailableThemes: any = {
  [SearchJSTheme.ThemeDark]: {
    [CssBackdropBackgroundVariable]: 'rgba(47, 55, 69, 0.7)',
    [CssModalBackgroundVariable]: '#1b1b1d',
    [CssModalBoxShadowVariable]: 'inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309',
    [CssModalFooterBoxShadowVariable]:
      'inset 0 1px 0 0 rgba(73, 76, 106, 0.5), 0 -4px 8px 0 rgba(0, 0, 0, 0.2)',
    [CssKeyboardButtonBoxShadowVariable]:
      'inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d, 0 2px 2px 0 rgba(3, 4, 9, 0.3)',
    [CssKeyboardButtonBackgroundVariable]:
      'linear-gradient(-26.5deg, var(--ifm-color-emphasis-200) 0%, var(--ifm-color-emphasis-100) 100%)',
    [CssInputBackgroundVariable]: 'black',
    [CssInputPlaceholderColorVariable]: '#aeaeae',
    [CssItemBackgroundVariable]: '#1c1e21',
    [CssItemBoxShadowVariable]: 'none',
    [CssTextColorVariable]: '#b3b3b3',
  },
  [SearchJSTheme.ThemeLight]: {
    [CssBackdropBackgroundVariable]: 'rgba(101, 108, 133, 0.8)',
    [CssModalBackgroundVariable]: '#f5f6f7',
    [CssModalBoxShadowVariable]: 'inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64',
    [CssModalFooterBoxShadowVariable]: '0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, 0.12)',
    [CssKeyboardButtonBoxShadowVariable]:
      'inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4)',
    [CssKeyboardButtonBackgroundVariable]: 'linear-gradient(-225deg, #d5dbe4, #f8f8f8)',
    [CssInputBackgroundVariable]: 'white',
    [CssInputPlaceholderColorVariable]: '#969faf',
    [CssItemBackgroundVariable]: 'white',
    [CssItemBoxShadowVariable]: '0 1px 3px 0 #d4d9e1',
    [CssTextColorVariable]: '#969faf',
  },
  [SearchJSTheme.ThemeGithubDark]: {
    [CssBackdropBackgroundVariable]: 'rgba(1,4,9,0.8)',
    [CssModalBackgroundVariable]: '#0D1116',
    [CssModalBoxShadowVariable]: 'none',
    [CssModalFooterBoxShadowVariable]: 'none',
    [CssKeyboardButtonBoxShadowVariable]: 'none',
    [CssKeyboardButtonBackgroundVariable]:
      'linear-gradient(-26.5deg, var(--ifm-color-emphasis-200) 0%, var(--ifm-color-emphasis-100) 100%)',
    [CssInputBackgroundVariable]: 'transparent',
    [CssInputPlaceholderColorVariable]: '#6D7681',
    [CssItemBackgroundVariable]: 'transparent',
    [CssItemBoxShadowVariable]: 'none',
    [CssTextColorVariable]: '#C5CED6',
    [CssThemeVariable]: 'transparent',
  },
  [SearchJSTheme.ThemeGithubLight]: {
    [CssBackdropBackgroundVariable]: 'rgba(27,31,36,0.5)',
    [CssModalBackgroundVariable]: '#FFFFFF',
    [CssModalBoxShadowVariable]: 'none',
    [CssModalFooterBoxShadowVariable]: 'none',
    [CssKeyboardButtonBoxShadowVariable]: 'none',
    [CssKeyboardButtonBackgroundVariable]:
      'linear-gradient(-26.5deg, var(--ifm-color-emphasis-200) 0%, var(--ifm-color-emphasis-100) 100%)',
    [CssInputBackgroundVariable]: 'transparent',
    [CssInputPlaceholderColorVariable]: '#6E7781',
    [CssItemBackgroundVariable]: 'transparent',
    [CssItemBoxShadowVariable]: 'none',
    [CssTextColorVariable]: '#1F2329',
    [CssThemeVariable]: 'transparent',
  },
}
