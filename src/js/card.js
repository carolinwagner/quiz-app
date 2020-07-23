import { get, getAll } from './util'

//show answer
export function initShowAnswer() {
  const textsShowAnswer = getAll('.text-answer')
  const buttonsShowAnswer = getAll('.card__answer-button')

  buttonsShowAnswer.forEach((button, i) => {
    button.addEventListener('click', () => {
      textsShowAnswer[i].classList.toggle('hidden')
      button.textContent =
        button.textContent === 'Hide answer' ? 'Show answer' : 'Hide answer'
    })
  })
}
