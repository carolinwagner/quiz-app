import { get, getAll } from './util'

export function bookmark() {
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
}
