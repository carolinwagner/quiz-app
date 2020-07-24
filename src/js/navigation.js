import { get, getAll, getAndAddEventListener } from './util'

export function initNavigation() {
  const navIcons = getAll('[data-js=nav-icon]')
  const pages = getAll('[data-js=page]')

  navIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const iconName = icon.dataset.name

      pages.forEach((page) => {
        const pageName = page.dataset.name
        page.classList.toggle('hidden', pageName !== iconName)
      })

      navIcons.forEach((oneOfAllIcons) => {
        oneOfAllIcons.classList.toggle(
          'nav-icon__active',
          oneOfAllIcons === icon
        )
      })
    })
  })
}
