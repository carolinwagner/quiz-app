import { get, getAll } from './util'

export function initFormSubmit() {
  const form = get('.create__form')
  const input1 = get('.create__form--input1')
  const input2 = get('.create__form--input2')
  const input3 = get('.create__form--input3')

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    input1.value = ''
    input2.value = ''
    input3.value = ''
  })
}
