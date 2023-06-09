const hashIcon = (color = '#969faf') => {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3L8 21" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3L14 21" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 9H21.5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 15H20.5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
}

const historyIcon = (color = '#969faf') => {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
}

const searchIcon = (color = '#000000') => {
  return `<svg fill="${color}" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg>`
}

const closeIcon = (color = '#969faf') => {
  return `<svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.16998 14.83L14.83 9.17004" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.83 14.83L9.16998 9.17004" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
}

const loadingIcon = (color = '#969faf') => {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12C2 17.52 6.48 22 12 22" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/>
</svg>
  `
}

const clearIcon = () => {
  return `<svg class="clear-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" fill="#969faf"/>
</svg>`
}

export { hashIcon, searchIcon, historyIcon, closeIcon, loadingIcon, clearIcon }
