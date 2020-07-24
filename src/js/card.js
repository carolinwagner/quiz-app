import { get, getAll } from './util'

//show answer
export function initShowAnswer() {
  const cardList = getAll('.card')
  cardList.forEach((card) => {
    addToggleLogic(card)
  })

  function addToggleLogic(card) {
    const textShowAnswer = card.querySelector('.text-answer')
    const buttonShowAnswer = card.querySelector('.card__answer-button')
    buttonShowAnswer?.addEventListener('click', () => {
      textShowAnswer.classList.toggle('hidden')
      buttonShowAnswer.textContent =
        buttonShowAnswer.textContent === 'Hide answer'
          ? 'Show answer'
          : 'Hide answer'
    })
  }
}
