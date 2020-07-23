import { get } from './util'

import Navigation from './navigation'

Navigation()

console.log('it works')

//footer
const homeIcon = get('.home-icon')
const bookmarkIcon = get('.bookmark-icon')
const createIcon = get('.create-icon')
const profileIcon = get('.profile-icon')
const pageIndex = get('.page-index')
const pageBookmark = get('.page-bookmark')
const pageCreate = get('.page-create')
const pageProfile = get('.page-profile')
const body = get('body')
const header = get('header')
const main = get('main')
const svg = get('svg')
const darkmodeSwitch = get('.button__darkmode')
const form = get('.create__form')

//bookmark
const buttonBookmark = get('.card__bookmark-button')

const bookmarks = document.querySelectorAll('.question__bookmark')
bookmarks.forEach((bookmark) => {
  bookmark.addEventListener('click', bookmarkToggle(bookmark, 'active'))
})

function bookmarkToggle(bookmark, classname) {
  return () => {
    bookmark.classList.toggle(className)
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

//navigation

buttonBookmark.addEventListener('click', () => {
  buttonBookmark.classList.toggle('card__bookmark-button--active')
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

//submit form
