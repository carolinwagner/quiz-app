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

//bookmark
const buttonBookmark = get('.card__bookmark-button')

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

homeIcon.addEventListener('click', () => {
  pageIndex.classList.remove('hidden')
  pageBookmark.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')
})

bookmarkIcon.addEventListener('click', () => {
  pageIndex.classList.add('hidden')
  pageBookmark.classList.remove('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')
})

createIcon.addEventListener('click', () => {
  pageIndex.classList.add('hidden')
  pageBookmark.classList.add('hidden')
  pageCreate.classList.remove('hidden')
  pageProfile.classList.add('hidden')
})

profileIcon.addEventListener('click', () => {
  pageIndex.classList.add('hidden')
  pageBookmark.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.remove('hidden')
})

buttonBookmark.addEventListener('click', () => {
  buttonBookmark.classList.toggle('card__bookmark-button--active')
})

buttonShowAnswer.addEventListener('click', () => {
  textShowAnswer.classList.toggle('hidden')
  if (buttonCaptionIsShowAnswer) {
    buttonShowAnswer.textContent = 'Hide Answer'
  } else {
    buttonShowAnswer.textContent = 'Show Answer'
  }
  buttonCaptionIsShowAnswer = !buttonCaptionIsShowAnswer
})

function get(selector) {
  return document.querySelector(selector)
}
