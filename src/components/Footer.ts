import { SearchJSConfig } from '../types'

export class Footer {
  /**
   * render footer html string
   * @param {SearchJSConfig} config
   * @returns {string}
   */
  render(config: SearchJSConfig): string {
    return `<div class="keyboard-button">Esc</div> <span>to close</span>`
  }
}
