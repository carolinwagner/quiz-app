import { getAll } from './util'

export function initBookmarkToggle() {
  const bookmarks = getAll('[data-js="bookmark"]')
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
}
