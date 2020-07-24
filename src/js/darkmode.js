import { get, getAll } from './util'

export function initDarkmode() {
  const darkmodeButton = get('.create-darkmode__button')

  const body = get('body')
  const header = get('header')
  const main = get('main')

  darkmodeButton?.addEventListener('click', () => {
    body.classList.toggle('darkmode')
    header.classList.toggle('darkmode')
    main.classList.toggle('darkmode')
  })
}
