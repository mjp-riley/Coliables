const switcher = document.querySelector('#switcher')
const doc = document.firstElementChild

switcher.addEventListener('input', e =>
  setTheme(e.target.value))

const setTheme = theme =>
  doc.setAttribute('color-scheme', theme)
