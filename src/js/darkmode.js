import { get, getAll } from './util'

export function darkmode() {
  const body = get('body')
  const header = get('header')
  const main = get('main')
  const svg = get('svg')
  const darkmodeSwitch = get('.button__darkmode')
  const form = get('.create__form')

  darkmodeSwitch.addEventListener('click', () => {
    body.classList.toggle('darkmode')
    main.classList.toggle('darkmode')
    svg.classList.toggle('svg__darkmode')
  })
}
