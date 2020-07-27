import { get, getAll } from './util'

export function initShowAnswer() {
  const cardList = getAll('section.card')
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

const cardArray = [
  {
    question: 'Hallo ich bin eine Frage1',
    answer: 'Ich bin eine Antwort1',
  },
  {
    question: 'Hallo ich bin eine Frage2',
    answer: 'Ich bin eine Antwort2',
  },
  {
    question: 'Hallo ich bin eine Frage3',
    answer: 'Ich bin eine Antwort3',
  },
  {
    question: 'Hallo ich bin eine Frage4',
    answer: 'Ich bin eine Antwort4',
  },
  {
    question: 'Hallo ich bin eine Frage5',
    answer: 'Ich bin eine Antwort5',
  },
]
export function initCard() {
  cardArray.forEach(createCard)
}

export function createCard({
  question = 'lorem ipsum',
  answer = 'sit amet, consetetur sadipscing',
} = {}) {
  const newCard = document.createElement('section')
  newCard.className = 'card'
  const target = get('.page-index')
  target.appendChild(newCard)
  newCard.innerHTML = /*html*/ `<button data-js="bookmark" class="card__bookmark-button p-0"></button>
  <h2 class="card__headline">Question 1</h2>
  <p class="card__text card__text--question">
  ${question}
  

  </p>
  <div class="card__answer-container">
    <button class="card__answer-button">Show answer</button>

    <p class="text-answer hidden">
     ${answer}
    </p>
  </div>

  <ul class="tag-list">
    <li>Lorem ipsum</li>
    <li>dolor sit</li>
    <li>amet consectetur</li>
  </ul>`
}
