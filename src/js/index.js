console.log('it works')

const homeIcon = document.querySelector('.home-icon')
const bookmarkIcon = document.querySelector('.bookmark-icon')
const createIcon = document.querySelector('.create-icon')
const profileIcon = document.querySelector('.profile-icon')
const pageIndex = document.querySelector('.page-index')
const pageBookmark = document.querySelector('.page-bookmark')
const pageCreate = document.querySelector('.page-create')
const pageProfile = document.querySelector('.page-profile')

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
