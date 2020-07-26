import { getAll } from './util'

export function initBookmarkToggle() {
  const bookmarks = getAll('[data-js=bookmark]')

  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener('click', () =>
      bookmark.classList.toggle('card__bookmark-button--active')
    )
  })
}
