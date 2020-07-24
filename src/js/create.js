import { get } from './util'

export function initFormSubmit() {
  const form = get('.create__form')

  form?.addEventListener('submit', function (event) {
    event.preventDefault()
    form.reset()
  })
}
