import { SearchJSTheme } from '../types'

export const CssBackdropBackground: string = '--search-js-backdrop-bg'
export const CssModalBackground: string = '--search-js-modal-bg'
export const CssModalBoxShadow: string = '--search-js-modal-box-shadow'
export const CssModalFooterBoxShadow: string = '--search-js-modal-footer-box-shadow'
export const CssKeyboardButtonBoxShadow: string = '--search-js-keyboard-button-box-shadow'
export const CssKeyboardButtonBackground: string = '--search-js-keyboard-button-bg'
export const CssInputBackground: string = '--search-js-search-input-bg'
export const CssInputPlaceholderColor: string = '--search-js-input-placeholder-color'
export const CssItemBackground: string = '--search-js-item-bg'
export const CssItemBoxShadow: string = '--search-js-item-box-shadow'
export const CssTextColor: string = '--search-js-text-color'
export const CssTheme: string = '--search-js-theme'
export const CssWidth: string = '--search-js-width'
export const CssHeight: string = '--search-js-height'
export const CssFontFamily: string = '--search-js-font-family'
export const CssPositionTop: string = '--search-js-top'

export const AvailableThemes: any = {
  [SearchJSTheme.ThemeDark]: {
    [CssBackdropBackground]: 'rgba(47, 55, 69, 0.7)',
    [CssModalBackground]: '#1b1b1d',
    [CssModalBoxShadow]: 'inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309',
    [CssModalFooterBoxShadow]:
      'inset 0 1px 0 0 rgba(73, 76, 106, 0.5), 0 -4px 8px 0 rgba(0, 0, 0, 0.2)',
    [CssKeyboardButtonBoxShadow]:
      'inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d, 0 2px 2px 0 rgba(3, 4, 9, 0.3)',
    [CssKeyboardButtonBackground]: 'linear-gradient(-26.5deg, transparent 0%, transparent 100%)',
    [CssInputBackground]: 'black',
    [CssInputPlaceholderColor]: '#aeaeae',
    [CssItemBackground]: '#1c1e21',
    [CssItemBoxShadow]: 'none',
    [CssTextColor]: '#b3b3b3',
  },
  [SearchJSTheme.ThemeLight]: {
    [CssBackdropBackground]: 'rgba(101, 108, 133, 0.8)',
    [CssModalBackground]: '#f5f6f7',
    [CssModalBoxShadow]: 'inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64',
    [CssModalFooterBoxShadow]: '0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, 0.12)',
    [CssKeyboardButtonBoxShadow]:
      'inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4)',
    [CssKeyboardButtonBackground]: 'linear-gradient(-225deg, #d5dbe4, #f8f8f8)',
    [CssInputBackground]: 'white',
    [CssInputPlaceholderColor]: '#969faf',
    [CssItemBackground]: 'white',
    [CssItemBoxShadow]: '0 1px 3px 0 #d4d9e1',
    [CssTextColor]: '#969faf',
  },
  [SearchJSTheme.ThemeGithubDark]: {
    [CssBackdropBackground]: 'rgba(1,4,9,0.8)',
    [CssModalBackground]: '#0D1116',
    [CssModalBoxShadow]: 'none',
    [CssModalFooterBoxShadow]: 'none',
    [CssKeyboardButtonBoxShadow]: 'none',
    [CssKeyboardButtonBackground]: 'none',
    [CssInputBackground]: 'transparent',
    [CssInputPlaceholderColor]: '#6D7681',
    [CssItemBackground]: 'transparent',
    [CssItemBoxShadow]: 'none',
    [CssTextColor]: '#C5CED6',
    [CssTheme]: 'transparent',
  },
  [SearchJSTheme.ThemeGithubLight]: {
    [CssBackdropBackground]: 'rgba(27,31,36,0.5)',
    [CssModalBackground]: '#FFFFFF',
    [CssModalBoxShadow]: 'none',
    [CssModalFooterBoxShadow]: 'none',
    [CssKeyboardButtonBoxShadow]: 'none',
    [CssKeyboardButtonBackground]: 'none',
    [CssInputBackground]: 'transparent',
    [CssInputPlaceholderColor]: '#6E7781',
    [CssItemBackground]: 'transparent',
    [CssItemBoxShadow]: 'none',
    [CssTextColor]: '#1F2329',
    [CssTheme]: 'transparent',
  },
}
