import { SearchJSConfig } from '../types'

export class Footer {
  render(config: SearchJSConfig) {
    return `
      <div class="keyboard-button">Esc</div> <span>to close</span>
    `
  }
}
