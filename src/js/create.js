import { get } from './util'

export function initFormSubmit() {
  const form = get('.create__form')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    form.reset()
  })
}
