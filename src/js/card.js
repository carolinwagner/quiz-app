import { get, getAll } from './util'

//show answer
export function showAnswer() {
  const textShowAnswer = get('.text-answer')
  const buttonShowAnswer = get('.card__answer-button')

  let buttonCaptionIsShowAnswer = true

  buttonShowAnswer.addEventListener('click', () => {
    textShowAnswer.classList.toggle('hidden')
    if (buttonCaptionIsShowAnswer) {
      buttonShowAnswer.textContent = 'Hide Answer'
    } else {
      buttonShowAnswer.textContent = 'Show Answer'
    }
    buttonCaptionIsShowAnswer = !buttonCaptionIsShowAnswer
  })
}
