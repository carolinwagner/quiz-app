import { get, getAll, getAndAddEventListener } from './util'

export function initNavigation() {
  const homeIcon = get('.home-icon')
  const bookmarkIcon = get('.bookmark-icon')
  const createIcon = get('.create-icon')
  const profileIcon = get('.profile-icon')
  const pageIndex = get('.page-index')
  const pageBookmark = get('.page-bookmark')
  const pageCreate = get('.page-create')
  const pageProfile = get('.page-profile')

  homeIcon.addEventListener('click', () => {
    homeIcon.classList.add('nav-icon__active')
    bookmarkIcon.classList.remove('nav-icon__active')
    createIcon.classList.remove('nav-icon__active')
    profileIcon.classList.remove('nav-icon__active')
    pageIndex.classList.remove('hidden')
    pageBookmark.classList.add('hidden')
    pageCreate.classList.add('hidden')
    pageProfile.classList.add('hidden')
  })

  bookmarkIcon.addEventListener('click', () => {
    homeIcon.classList.remove('nav-icon__active')
    bookmarkIcon.classList.add('nav-icon__active')
    createIcon.classList.remove('nav-icon__active')
    profileIcon.classList.remove('nav-icon__active')
    pageIndex.classList.add('hidden')
    pageBookmark.classList.remove('hidden')
    pageCreate.classList.add('hidden')
    pageProfile.classList.add('hidden')
  })

  createIcon.addEventListener('click', () => {
    homeIcon.classList.remove('nav-icon__active')
    bookmarkIcon.classList.remove('nav-icon__active')
    createIcon.classList.add('nav-icon__active')
    profileIcon.classList.remove('nav-icon__active')
    pageIndex.classList.add('hidden')
    pageBookmark.classList.add('hidden')
    pageCreate.classList.remove('hidden')
    pageProfile.classList.add('hidden')
  })

  profileIcon.addEventListener('click', () => {
    homeIcon.classList.remove('nav-icon__active')
    bookmarkIcon.classList.remove('nav-icon__active')
    createIcon.classList.remove('nav-icon__active')
    profileIcon.classList.add('nav-icon__active')
    pageIndex.classList.add('hidden')
    pageBookmark.classList.add('hidden')
    pageCreate.classList.add('hidden')
    pageProfile.classList.remove('hidden')
  })
}
