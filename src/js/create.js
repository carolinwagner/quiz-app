import { get, getAll } from './util'

export function buttonSubmit() {
  const buttonSubmit = get('.submit-button')

  buttonSubmit.addEventListener('click', () => {})
}

// const input1 = getAll('.create__form--input1')
// const input2 = getAll('.create__form--input2')
// const input3 = getAll('.create__form--input3')

// buttonSubmit.addEventListener('click', function (event) {
//   event.preventDefault()
//   input1.value = ''
//   input2.value = ''
//   input3.value = ''
// })
