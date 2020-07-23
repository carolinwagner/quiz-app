import { get, getAll } from './util'

import { initNavigation } from './navigation'

initNavigation()

console.log('it works')

//footer

const body = get('body')
const header = get('header')
const main = get('main')
const svg = get('svg')
const darkmodeSwitch = get('.button__darkmode')
const form = get('.create__form')

//bookmark

const bookmarks = getAll('.card__bookmark-button')
bookmarks.forEach((bookmark) => {
  bookmark.addEventListener(
    'click',
    bookmarkToggle(bookmark, 'card__bookmark-button--active')
  )
})

function bookmarkToggle(bookmark, classname) {
  return () => {
    bookmark.classList.toggle(classname)
  }
}

//show answer
const textShowAnswer = get('.text-answer')
const buttonShowAnswer = get('.card__answer-button')

let buttonCaptionIsShowAnswer = true

//darkmode

darkmodeSwitch.addEventListener('click', () => {
  body.classList.toggle('darkmode')
  main.classList.toggle('darkmode')
  svg.classList.toggle('svg__darkmode')
})

//show answer

buttonShowAnswer.addEventListener('click', () => {
  textShowAnswer.classList.toggle('hidden')
  if (buttonCaptionIsShowAnswer) {
    buttonShowAnswer.textContent = 'Hide Answer'
  } else {
    buttonShowAnswer.textContent = 'Show Answer'
  }
  buttonCaptionIsShowAnswer = !buttonCaptionIsShowAnswer
})
