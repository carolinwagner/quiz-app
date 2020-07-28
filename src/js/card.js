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

export const cards = [
  {
    question: 'Hallo ich bin eine Frage1',
    answer: 'Ich bin eine Antwort1',
    tags: ['tag 1', 'tag 2', 'tag 3'],
  },
  {
    question: 'Hallo ich bin eine Frage2',
    answer: 'Ich bin eine Antwort2',
    tags: ['tag 1', 'tag 2'],
  },
  {
    question: 'Hallo ich bin eine Frage3',
    answer: 'Ich bin eine Antwort3',
    tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4'],
  },
  {
    question: 'Hallo ich bin eine Frage4',
    answer: 'Ich bin eine Antwort4',
    tags: ['tag 1', 'tag 2'],
  },
  {
    question: 'Hallo ich bin eine Frage5',
    answer: 'Ich bin eine Antwort5',
    tags: ['test'],
  },
]

const target = get('.page-index')

export function initCard() {
  target.innerHTML = ''
  cards.forEach(createCard)
}

export function createCard({
  question = 'lorem ipsum',
  answer = 'sit amet, consetetur sadipscing',
  tags = ['default-tag'],
} = {}) {
  const newCard = document.createElement('section')
  newCard.className = 'card'

  target.appendChild(newCard)

  const tagList = document.createElement('ul')
  tagList.classList.add('tag-list', 'p-0')
  tags.forEach((tag) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = tag

    tagList.appendChild(listItem)
  })

  newCard.innerHTML = /*html*/ `
    <button data-js="bookmark" class="card__bookmark-button p-0"></button>
    <h2 class="card__headline">Question</h2>
    <p class="card__text card__text--question">
      ${question}
    </p>
    <div class="card__answer-container">
      <button class="card__answer-button">Show answer</button>

      <p class="text-answer hidden">
       ${answer}
      </p>
    </div>

    ${tagList.outerHTML}
  `
}
