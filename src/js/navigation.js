import { get, getAll } from './util'

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
}
