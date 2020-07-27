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

export function createCard() {
  const newCard = document.createElement('section')
  newCard.className = 'card'
  const target = get('.page-index')
  target.appendChild(newCard)
  newCard.innerHTML = `<button data-js="bookmark" class="card__bookmark-button p-0"></button>
  <h2 class="card__headline">Question 1</h2>
  <p class="card__text card__text--question">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem odio
    cum repudiandae cumque eius mollitia voluptatem voluptas deleniti
    quo quaerat ratione unde, repellendus corporis nostrum repellat.
    Nisi accusantium tempora vel.
  </p>
  <div class="card__answer-container">
    <button class="card__answer-button">Show answer</button>

    <p class="text-answer hidden">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
      corrupti doloribus porro asperiores exercitationem harum
      doloremque nisi repudiandae quod facere! Commodi, accusamus at!
      Voluptatem corporis laboriosam autem aliquam quidem enim.
    </p>
  </div>

  <ul class="tag-list">
    <li>Lorem ipsum</li>
    <li>dolor sit</li>
    <li>amet consectetur</li>
  </ul>`
}
