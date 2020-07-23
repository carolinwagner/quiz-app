export default function initNavigation() {
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
